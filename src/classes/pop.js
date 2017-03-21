/*eslint-disable no-unused-vars*/
var $ = require('jquery')
require('toastr/build/toastr.min.css')
let toastr = require('toastr/build/toastr.min.js')
/*eslint-enable no-unused-vars*/


/*
Wrap jquery toastr in a Poptart metaphor
*/
export class Pop {

    static toaster = {
      'closeButton': false,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'preventDuplicates': false,
      'onclick': null,
      'positionClass': 'toast-bottom-left',
      'showDuration': '1500',
      'hideDuration': '1500',
      'timeOut': '1500',
      'extendedTimeOut': '1500',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }

    static OK = (tart) => {
      toastr.clear();
      toastr.options = Pop.toaster;
      toastr['success'](tart)
    }
    static ERR = (tart) => {
      toastr.clear();
      toastr.options = Pop.toaster;
      toastr['error'](tart)
    }

    static WARN = (tart ) => {
      toastr.clear();
      toastr.options = Pop.toaster;
      toastr['warning'](tart);
    }

    static INFO = (tart) => {
      toastr.clear();
      toastr.options = Pop.toaster;
      toastr['info'](tart);
    }
 }
