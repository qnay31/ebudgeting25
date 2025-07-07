$(document).ready(function () {
  var collapsedGroups = {};
  // table laporan income

  if (readCookie("id_pengurus") == "sosial_media") {
    var table = $("#laporanIncome").DataTable({
      processing: true,
      serverSide: false,
      scrollX: true,
      autoWidth: true,
      dom: "PBlfrtip",
      buttons: [{
        extend: "excel",
        footer: true,
        title: "Laporan Income Global",
      }, ],
      ajax: {
        url: "table_ajax/data_laporan_income.php",
        type: "GET",
      },
      deferRender: true,
      destroy: true,
      lengthMenu: [
        [10, 25, 50, 100, 500],
        [10, 25, 50, 100, 500],
      ],
      searchPanes: {
        orderable: false,
      },
      rowGroup: {
        // Uses the 'row group' plugin
        dataSrc: "suksesAkun",
        startRender: null,
        endRender: function (rows, group) {
          var collapsed = !!collapsedGroups[group];

          rows.nodes().each(function (r) {
            r.style.display = collapsed ? "none" : "";
          });

          var intVal = function (i) {
            return typeof i === "string" ?
              i.replace(/[\Rp,.]/g, "") * 1 :
              typeof i === "number" ?
              i :
              0;
          };

          var salary = rows
            .data()
            .pluck("suksesTransfer")
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);
          salary = $.fn.dataTable.render.number(".", "", 0).display(salary);

          // Add category name to the <tr>. NOTE: Hardcoded colspan
          return $("<tr/>")
            .append("<td></td>")
            .append(
              '<td colspan="7">' +
              group +
              " (" +
              rows.count() +
              ") " +
              "/ Income: " +
              " " +
              salary +
              "</td>"
            )
            .append("<td> " + salary + " </td>")
            .append("<td></td>")
            .attr("data-name", group)
            .toggleClass("collapsed", collapsed);
        },
      },
      columnDefs: [{
          targets: 0,
          render: function (_data, _type, _row, meta) {
            var no = meta.row + meta.settings._iDisplayStart + 1;
            return "<center>" + no + "</center>";
          },
        },
        {
          targets: 1,
          data: "suksesKategori",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 2,
          data: "suksesPemegang",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 3,
          data: "suksesAkun",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 4,
          data: "suksesDonatur",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 5,
          data: "suksesTanggal",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 6,
          data: "suksesBulan",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 7,
          data: "suksesBank",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 8,
          data: "suksesTransfer",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 9,
          data: "suksesTeam",
          render: function (data) {
            return `Team ${data}`;
          },
        },
        {
          searchPanes: {
            show: true,
            initCollapsed: true,
          },
          targets: [2, 3, 5, 6],
        },
        {
          searchPanes: {
            show: false,
          },
          targets: [0, 1, 4, 7, 8],
        },
      ],
      footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
          data;

        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
          return typeof i === "string" ?
            i.replace(/[\Rp,.]/g, "") * 1 :
            typeof i === "number" ?
            i :
            0;
        };

        // Total over this page
        total = api
          .column(8)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        pageTotal = api
          .column(8, {
            page: "current",
          })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        var number_string = pageTotal.toString(),
          sisa = number_string.length % 3,
          rupiah = number_string.substr(0, sisa),
          ribuan = number_string.substr(sisa).match(/\d{3}/g);

        if (ribuan) {
          separator = sisa ? "." : "";
          rupiah += separator + ribuan.join(".");
        }

        var number_string2 = total.toString(),
          sisa2 = number_string2.length % 3,
          rupiah2 = number_string2.substr(0, sisa2),
          ribuan2 = number_string2.substr(sisa2).match(/\d{3}/g);

        if (ribuan2) {
          separator2 = sisa2 ? "." : "";
          rupiah2 += separator2 + ribuan2.join(".");
        }
        // Update footer
        $(api.column(8).footer()).html("Rp. " + rupiah);

        $(api.column(9).footer()).html(" (Total: " + rupiah2 + ")");
      },
    });
  } else {
    var table = $("#laporanIncome").DataTable({
      processing: true,
      serverSide: false,
      scrollX: true,
      autoWidth: true,
      dom: "PBlfrtip",
      buttons: [{
        extend: "excel",
        footer: true,
        title: "Laporan Income Global",
      }, ],
      ajax: {
        url: "table_ajax/data_global_income.php",
        type: "GET",
      },
      deferRender: true,
      destroy: true,
      lengthMenu: [
        [10, 25, 50, 100, "All"],
        [10, 25, 50, 100, -1],
      ],
      searchPanes: {
        orderable: false,
      },
      rowGroup: {
        // Uses the 'row group' plugin
        dataSrc: "suksesPemegang",
        startRender: null,
        endRender: function (rows, group) {
          var collapsed = !!collapsedGroups[group];

          rows.nodes().each(function (r) {
            r.style.display = collapsed ? "none" : "";
          });

          var intVal = function (i) {
            return typeof i === "string" ?
              i.replace(/[\Rp,.]/g, "") * 1 :
              typeof i === "number" ?
              i :
              0;
          };

          var salary = rows
            .data()
            .pluck("suksesTransfer")
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);
          salary = $.fn.dataTable.render.number(".", "", 0).display(salary);

          // Add category name to the <tr>. NOTE: Hardcoded colspan
          return $("<tr/>")
            .append("<td></td>")
            .append(
              '<td colspan="7">' +
              group +
              " (" +
              rows.count() +
              ") " +
              "/ Income: " +
              " " +
              salary +
              "</td>"
            )
            .append("<td> " + salary + " </td>")
            .append("<td></td>")
            .attr("data-name", group)
            .toggleClass("collapsed", collapsed);
        },
      },
      columnDefs: [{
          targets: 0,
          render: function (_data, _type, _row, meta) {
            var no = meta.row + meta.settings._iDisplayStart + 1;
            return "<center>" + no + "</center>";
          },
        },
        {
          targets: 1,
          data: "suksesKategori",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 2,
          data: "suksesPemegang",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 3,
          data: "suksesAkun",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 4,
          data: "suksesDonatur",
          render: function (data) {
            return Capitalize(data);
          },
        },
        {
          targets: 5,
          data: "suksesTanggal",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 6,
          data: "suksesBulan",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 7,
          data: "suksesBank",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 8,
          data: "suksesTransfer",
          render: function (data) {
            return data;
          },
        },
        {
          targets: 9,
          data: "suksesTeam",
          render: function (data) {
            return `<center>Team ${data}</center>`;
          },
        },
        {
          searchPanes: {
            show: true,
            initCollapsed: true,
          },
          targets: [1, 2, 3, 4, 5, 6],
        },
        {
          searchPanes: {
            show: false,
          },
          targets: [0, 7, 8],
        },
      ],
      footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
          data;

        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
          return typeof i === "string" ?
            i.replace(/[\Rp,.]/g, "") * 1 :
            typeof i === "number" ?
            i :
            0;
        };

        // Total over this page
        total = api
          .column(8)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        pageTotal = api
          .column(8, {
            page: "current",
          })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        var number_string = pageTotal.toString(),
          sisa = number_string.length % 3,
          rupiah = number_string.substr(0, sisa),
          ribuan = number_string.substr(sisa).match(/\d{3}/g);

        if (ribuan) {
          separator = sisa ? "." : "";
          rupiah += separator + ribuan.join(".");
        }

        var number_string2 = total.toString(),
          sisa2 = number_string2.length % 3,
          rupiah2 = number_string2.substr(0, sisa2),
          ribuan2 = number_string2.substr(sisa2).match(/\d{3}/g);

        if (ribuan2) {
          separator2 = sisa2 ? "." : "";
          rupiah2 += separator2 + ribuan2.join(".");
        }
        // Update footer
        $(api.column(8).footer()).html("Rp. " + rupiah);

        $(api.column(9).footer()).html(" (Total: " + rupiah2 + ")");
      },
    });
  }

  $("#laporanIncome tbody").on("click", "tr.group-end", function () {
    var name = $(this).data("name");
    console.log(name);
    collapsedGroups[name] = !collapsedGroups[name];
    table.draw(false);
  });

  // table laporan akun
  $("#lapTableAkunFacebook").DataTable({
    processing: true,
    serverSide: false,
    scrollX: true,
    autoWidth: true,
    dom: "PBlfrtip",
    buttons: [{
      extend: "excel",
      footer: true,
      title: "Laporan Akun Global",
    }, ],
    ajax: {
      url: "table_ajax/data_laporan_akun.php?listMedia=facebook",
      type: "GET",
    },
    deferRender: true,
    destroy: true,
    lengthMenu: [
      [10, 25, 50, 100, 100000],
      [10, 25, 50, 100, "All"],
    ],
    order: [
      [3, "desc"]
    ],
    searchPanes: {
      orderable: false,
    },
    columnDefs: [{
        targets: 0,
        render: function (_data, _type, _row, meta) {
          var no = meta.row + meta.settings._iDisplayStart + 1;
          return "<center>" + no + "</center>";
        },
      },
      {
        targets: 1,
        data: "lapPemegang",
        render: function (data) {
          return Capitalize(data);
        },
      },
      {
        targets: 2,
        data: "lapAkun",
        render: function (data) {
          return Capitalize(data);
        },
      },
      {
        targets: 3,
        data: "lapLaporan",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 4,
        data: "lapBulan",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 5,
        data: "lapTeman",
        render: function (data) {
          return Capitalize(data);
        },
      },
      {
        targets: 6,
        data: "lapAdd",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 7,
        data: "lapTemanBaru",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 8,
        data: "lapTemanHapus",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 9,
        data: "lapSerangan",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 10,
        data: "lapRespon",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 11,
        data: "lapNoRespon",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 12,
        data: "lapDonatur",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 13,
        data: "lapIncome",
        render: function (data) {
          return data;
        },
      },
      {
        searchPanes: {
          show: true,
          initCollapsed: true,
        },
        targets: [1, 2, 4],
      },
      {
        searchPanes: {
          show: false,
        },
        targets: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      },
    ],
    footerCallback: function (row, data, start, end, display) {
      var api = this.api(),
        data;

      // Remove the formatting to get integer data for summation
      var intVal = function (i) {
        return typeof i === "string" ?
          i.replace(/[\Rp,.]/g, "") * 1 :
          typeof i === "number" ?
          i :
          0;
      };

      // Total over this page
      pageTotal = api
        .column(6, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(6).footer()).html(rupiah + "");

      pageTotal = api
        .column(7, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(7).footer()).html(rupiah + "");

      pageTotal = api
        .column(8, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(8).footer()).html(rupiah + "");

      pageTotal = api
        .column(9, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(9).footer()).html(rupiah + "");

      pageTotal = api
        .column(10, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(10).footer()).html(rupiah + "");

      pageTotal = api
        .column(11, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(11).footer()).html(rupiah + "");

      pageTotal = api
        .column(12, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(12).footer()).html(rupiah + "");

      pageTotal = api
        .column(13, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(13).footer()).html("Rp " + rupiah + "");
    },
  });

  $("#lapTableAkunInstagram").DataTable({
    processing: true,
    serverSide: false,
    scrollX: true,
    autoWidth: true,
    dom: "PBlfrtip",
    buttons: [{
      extend: "excel",
      footer: true,
      title: "Laporan Akun Global",
    }, ],
    ajax: {
      url: "table_ajax/data_laporan_akun.php?listMedia=instagram",
      type: "GET",
    },
    deferRender: true,
    destroy: true,
    lengthMenu: [
      [10, 25, 50, 100, 100000],
      [10, 25, 50, 100, "All"],
    ],
    order: [
      [3, "desc"]
    ],
    searchPanes: {
      orderable: false,
    },
    columnDefs: [{
        targets: 0,
        render: function (_data, _type, _row, meta) {
          var no = meta.row + meta.settings._iDisplayStart + 1;
          return "<center>" + no + "</center>";
        },
      },
      {
        targets: 1,
        data: "lapPemegang",
        render: function (data) {
          return Capitalize(data);
        },
      },
      {
        targets: 2,
        data: "lapAkun",
        render: function (data) {
          return Capitalize(data);
        },
      },
      {
        targets: 3,
        data: "lapLaporan",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 4,
        data: "lapBulan",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 5,
        data: "lapPengikut",
        render: function (data) {
          return Capitalize(data);
        },
      },
      {
        targets: 6,
        data: "lapMengikuti",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 7,
        data: "lapIkutBaru",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 8,
        data: "lapIkutiBaru",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 9,
        data: "lapIkutHapus",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 10,
        data: "lapIkutiHapus",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 11,
        data: "lapSerangan",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 12,
        data: "lapRespon",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 13,
        data: "lapNoRespon",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 14,
        data: "lapDonatur",
        render: function (data) {
          return data;
        },
      },
      {
        targets: 15,
        data: "lapIncome",
        render: function (data) {
          return data;
        },
      },
      {
        searchPanes: {
          show: true,
          initCollapsed: true,
        },
        targets: [1, 2, 4],
      },
      {
        searchPanes: {
          show: false,
        },
        targets: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      },
    ],
    footerCallback: function (row, data, start, end, display) {
      var api = this.api(),
        data;

      // Remove the formatting to get integer data for summation
      var intVal = function (i) {
        return typeof i === "string" ?
          i.replace(/[\Rp,.]/g, "") * 1 :
          typeof i === "number" ?
          i :
          0;
      };

      // Total over this page
      pageTotal = api
        .column(7, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(7).footer()).html(rupiah + "");

      pageTotal = api
        .column(8, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(8).footer()).html(rupiah + "");

      pageTotal = api
        .column(9, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(9).footer()).html(rupiah + "");

      pageTotal = api
        .column(10, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(10).footer()).html(rupiah + "");

      pageTotal = api
        .column(11, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(11).footer()).html(rupiah + "");

      pageTotal = api
        .column(12, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(12).footer()).html(rupiah + "");

      pageTotal = api
        .column(13, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(13).footer()).html(rupiah + "");

      pageTotal = api
        .column(14, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(14).footer()).html(rupiah + "");

      pageTotal = api
        .column(15, {
          page: "current",
        })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      var number_string = pageTotal.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      // Update footer
      $(api.column(15).footer()).html("Rp. " + rupiah + "");
    },
  });

  // reload table income
  $("#laporan").one("click", function () {
    $("#laporanIncome").DataTable().ajax.reload();
  });

  $(".btnIncome").one("click", function () {
    $("#laporanIncome").DataTable().ajax.reload();
  });

  $(".laporanTableIncome .reload").click(function () {
    $("#laporanIncome").DataTable().ajax.reload();
  });

  // reload table akun
  $(".btnLaporanAkun").one("click", function () {
    $("#lapTableAkunFacebook").DataTable().ajax.reload();
  });

  $(".laporanTable #mediaFacebook").one("click", function () {
    $("#lapTableAkunFacebook").DataTable().ajax.reload();
  });

  $(".laporanTableAkunMedia .laporanTable .table-facebook .reload").click(
    function () {
      $("#lapTableAkunFacebook").DataTable().ajax.reload();
    }
  );

  $(".laporanTable #mediaInstagram").one("click", function () {
    $("#lapTableAkunInstagram").DataTable().ajax.reload();
  });

  $(".laporanTableAkunMedia .laporanTable .table-instagram .reload").click(
    function () {
      $("#lapTableAkunInstagram").DataTable().ajax.reload();
    }
  );
});