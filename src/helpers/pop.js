var $ = require('jquery')
require('toastr/build/toastr.min.css')
let toastr = require('toastr/build/toastr.min.js')


/*
Wrap jquery toastr in a Poptart metaphor
*/
export class Pop {

    static toaster = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "preventDuplicates": false,
      "onclick": null,
      "positionClass": "toast-top-right",
      "showDuration": "1000",
      "hideDuration": "1000",
      "timeOut": "1000",
      "extendedTimeOut": "500",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    static OK = (tart) => {
      toastr.clear();
      toastr.options = toaster;
      toastr['success'](tart)
    }
    static ERR = (tart) => {
      toastr.clear();
      toastr.options = toaster;
      toastr['error'](tart)
    }

    static WARN = (tart ) => {
      toastr.clear();
      toastr.options = toaster;
      toastr['warning'](tart);
    }

    static INFO = (tart) => {
      toastr.clear();
      toastr.options = toaster;
      toastr['info'](tart);
    }
 }
