<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>Billing Export</title>
  <style>
    body {
      color: #000000;
      font-size: .8rem;
      font-weight: 400;
      line-height: 1.3;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .text-lowercase {
      text-transform: lowercase !important;
    }

    .text-uppercase {
      text-transform: uppercase !important;
    }

    .text-capitalize {
      text-transform: capitalize !important;
    }

    .text-left {
      text-align: left !important;
    }

    .text-right {
      text-align: right !important;
    }

    .text-center {
      text-align: center !important;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    .table {
      width: 100%;
      /*margin-bottom: 1rem;*/
      color: #212529;
    }

    .table th,
    .table td {
      padding: 0.2rem .4rem;
      vertical-align: top;
      border-top: 1px solid #000000;
      page-break-inside: initial;
    }

    .table thead th {
      vertical-align: center;
      border-bottom: 1px solid #000000;
    }

    .table tbody + tbody {
      border-top: 1px solid #000000;
    }

    .table-sm th,
    .table-sm td {
      padding: 0.2rem .4rem;
    }

    .table-bordered {
      border: 1px solid #000000;
    }

    .table-bordered th,
    .table-bordered td {
      border: 1px solid #000000;
    }

    .table-bordered thead th,
    .table-bordered thead td {
      border-bottom-width: 1px;
    }

    .table-borderless {
      width: 100%;
    }

    .table-borderless th,
    .table-borderless td,
    .table-borderless thead th,
    .table-borderless tbody + tbody {
      border: 0 !important;
    }

    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .table-hover tbody tr:hover {
      color: #212529;
      background-color: rgba(0, 0, 0, 0.075);
    }

    .table-primary,
    .table-primary > th,
    .table-primary > td {
      background-color: #b8daff;
    }

    .table-primary th,
    .table-primary td,
    .table-primary thead th,
    .table-primary tbody + tbody {
      border-color: #7abaff;
    }

    .table-hover .table-primary:hover {
      background-color: #9fcdff;
    }

    .table-hover .table-primary:hover > td,
    .table-hover .table-primary:hover > th {
      background-color: #9fcdff;
    }

    .table-secondary,
    .table-secondary > th,
    .table-secondary > td {
      background-color: #d6d8db;
    }

    .table-secondary th,
    .table-secondary td,
    .table-secondary thead th,
    .table-secondary tbody + tbody {
      border-color: #b3b7bb;
    }

    .table-hover .table-secondary:hover {
      background-color: #c8cbcf;
    }

    .table-hover .table-secondary:hover > td,
    .table-hover .table-secondary:hover > th {
      background-color: #c8cbcf;
    }

    .table-success,
    .table-success > th,
    .table-success > td {
      background-color: #c3e6cb;
    }

    .table-success th,
    .table-success td,
    .table-success thead th,
    .table-success tbody + tbody {
      border-color: #8fd19e;
    }

    .table-hover .table-success:hover {
      background-color: #b1dfbb;
    }

    .table-hover .table-success:hover > td,
    .table-hover .table-success:hover > th {
      background-color: #b1dfbb;
    }

    .table-info,
    .table-info > th,
    .table-info > td {
      background-color: #bee5eb;
    }

    .table-info th,
    .table-info td,
    .table-info thead th,
    .table-info tbody + tbody {
      border-color: #86cfda;
    }

    .table-hover .table-info:hover {
      background-color: #abdde5;
    }

    .table-hover .table-info:hover > td,
    .table-hover .table-info:hover > th {
      background-color: #abdde5;
    }

    .table-warning,
    .table-warning > th,
    .table-warning > td {
      background-color: #ffeeba;
    }

    .table-warning th,
    .table-warning td,
    .table-warning thead th,
    .table-warning tbody + tbody {
      border-color: #ffdf7e;
    }

    .table-hover .table-warning:hover {
      background-color: #ffe8a1;
    }

    .table-hover .table-warning:hover > td,
    .table-hover .table-warning:hover > th {
      background-color: #ffe8a1;
    }

    .table-danger,
    .table-danger > th,
    .table-danger > td {
      background-color: #f5c6cb;
    }

    .table-danger th,
    .table-danger td,
    .table-danger thead th,
    .table-danger tbody + tbody {
      border-color: #ed969e;
    }

    .table-hover .table-danger:hover {
      background-color: #f1b0b7;
    }

    .table-hover .table-danger:hover > td,
    .table-hover .table-danger:hover > th {
      background-color: #f1b0b7;
    }

    .table-light,
    .table-light > th,
    .table-light > td {
      background-color: #fdfdfe;
    }

    .table-light th,
    .table-light td,
    .table-light thead th,
    .table-light tbody + tbody {
      border-color: #fbfcfc;
    }

    .table-hover .table-light:hover {
      background-color: #ececf6;
    }

    .table-hover .table-light:hover > td,
    .table-hover .table-light:hover > th {
      background-color: #ececf6;
    }

    .table-dark,
    .table-dark > th,
    .table-dark > td {
      background-color: #c6c8ca;
    }

    .table-dark th,
    .table-dark td,
    .table-dark thead th,
    .table-dark tbody + tbody {
      border-color: #95999c;
    }

    .table-hover .table-dark:hover {
      background-color: #b9bbbe;
    }

    .table-hover .table-dark:hover > td,
    .table-hover .table-dark:hover > th {
      background-color: #b9bbbe;
    }

    .table-active,
    .table-active > th,
    .table-active > td {
      background-color: rgba(0, 0, 0, 0.075);
    }

    .table-hover .table-active:hover {
      background-color: rgba(0, 0, 0, 0.075);
    }

    .table-hover .table-active:hover > td,
    .table-hover .table-active:hover > th {
      background-color: rgba(0, 0, 0, 0.075);
    }

    .table .thead-dark th {
      color: #fff;
      background-color: #343a40;
      border-color: #454d55;
    }

    .table .thead-light th {
      color: #495057;
      background-color: #e9ecef;
      border-color: #000000;
    }

    .table-dark {
      color: #fff;
      background-color: #343a40;
    }

    .table-dark th,
    .table-dark td,
    .table-dark thead th {
      border-color: #454d55;
    }

    .table-dark.table-bordered {
      border: 0;
    }

    .table-dark.table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(255, 255, 255, 0.05);
    }

    .table-dark.table-hover tbody tr:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.075);
    }

    .clearfix::after {
      display: block;
      clear: both;
      content: "";
    }

    p {
      font-size: 14px;
    }


    @page {
      margin: 50px 20px 30px 20px;
    }

    body {
      margin: 50px 20px 30px 20px;
    }


    .page-number:before {
      /*counter-increment: page;*/
      /*counter-reset: page 0;*/
      /*content: "Page " counter(page);*/
    }

    /*header {*/
    /*  position: fixed;*/
    /*  left: 0px;*/
    /*  right: 0px;*/
    /*  height: 70px;*/
    /*  margin-bottom: 10px;*/
    /*  border-bottom: 3px solid #000000;*/
    /*}*/
    /*.header {*/
    /*  margin-bottom: 10px;*/
    /*  border-bottom: 3px solid #000000;*/
    /*}*/

    /*footer {*/
    /*  position: fixed;*/
    /*  bottom: 5px;*/
    /*  left: 0px;*/
    /*  right: 0px;*/
    /*  height: 50px;*/
    /*}*/


    .page-break {
      page-break-after: always;
    }

    .page-break1 {
      page-break-after: always;
    }

    .page-break:last-child {
      page-break-after: avoid;
    }

    .header {
      position: absolute;
      top: -30px;
      left: 20px;
      right: 20px;
      height: 90px;
      /*margin-bottom: 10px;*/
      /*border-bottom: 2px solid #2e2e2e;*/
    }

    .footer {
      position: absolute;
      bottom: 5px;
      left: 20px;
      right: 20px;
      height: 50px;
    }
  </style>
</head>
<body>
<!-- Define header and footer blocks before your content -->
<div class="header">
  <table class=" table-borderless table-sm">
    <tr>
      <td>
        <img style="width: 160px; height: auto; padding-bottom: 10px;"
             src="{{ public_path("files/logo/") . $company['company_logo'] }}" alt="">
      </td>
      <td>
        <table class=" table-borderless table-sm text-right">
          <tr>
            <td>
              <strong>{{ strtoupper($company['company_name'])  }}</strong>
            </td>
          </tr>
          <tr>
            <td>{{ $company['company_address'] }}</td>
          </tr>
          <tr>
            <td>{{ $company['company_phone'] }}</td>
          </tr>
          <tr>
            <td>{{ $company['company_email'] }}</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>

<div style="font-size: 10px!important" class="text-center footer">
  <span class="num-page">
      <script type="text/php">
        $text = "Page {PAGE_NUM} of {PAGE_COUNT}";
            $size = 11;
            $font = $fontMetrics->getFont("Verdana");
            $width = $fontMetrics->get_text_width($text, $font, $size) / 2;
            $x = $pdf->get_width() - 80;
            $y = $pdf->get_height() - 50;
            $pdf->page_text($x, $y, $text, $font, $size);
      </script>
  </span>
  <p style="margin-top: 10px;" class="text-left">{{ $documents->document_number }}</p>
</div>

<table class=" table-borderless table-sm" style="margin-bottom: 20px; margin-top: 30px;">
  <tr>
    <td>
      <table class=" table-borderless table-sm">
        <tr>
          <td>
            <strong>{{ strtoupper($documents->contact_name)  }}</strong>
          </td>
        </tr>
        <tr>
          <td>{{ $documents->contact_address  }}</td>
        </tr>
        <tr>
          <td>{{ $documents->contact_phone  }}</td>
        </tr>
        <tr>
          <td>{{ $documents->contact_email  }}</td>
        </tr>
      </table>
    </td>
    <td>
      <table class="table-borderless table-sm text-right table-active">
        <tr>
          <td>
            <span style="font-size: 16px; font-weight: bold; padding-top: 6px;">{{ $type }}</span>
          </td>
        </tr>
        <tr>
          <td><strong>{{ $documents->document_number }}</strong></td>
        </tr>
        <tr>
          <td>{{ \Carbon\Carbon::parse($documents->issued_at)->format('Y-m-d')  }}</td>
        </tr>
        <tr>
          <td>Due Date : {{ \Carbon\Carbon::parse($documents->due_at)->format('Y-m-d') }}</td>
        </tr>
        <tr>
          <td>
            <span style="font-size: 16px; font-weight: bold; padding-bottom: 6px;">
              {{ $documents->currency->symbol . ' '. number_format($documents->amount, 2) }}
            </span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

@switch($documents->type)
  @case('SQ')
  @include('export.partials.sales.sq')
  @break

  @case('SO')
  @include('export.partials.sales.sq')
  @break

  @case('SD')
  @include('export.partials.sales.sq')
  @break

  @case('SI')
  @include('export.partials.sales.sq')
  @break

  @case('SR')
  @include('export.partials.sales.sq')
  @break

  @case('SP')
  @include('export.partials.sales.sq')
  @break

  @case('PQ')
  @include('export.partials.sales.sq')
  @break

  @case('PO')
  @include('export.partials.sales.sq')
  @break

  @case('PR')
  @include('export.partials.sales.sq')
  @break

  @case('PI')
  @include('export.partials.sales.sq')
  @break

  @case('PP')
  @include('export.partials.sales.sq')
  @break

  @case('PN')
  @include('export.partials.sales.sq')
  @break
@endswitch

</body>
</html>
