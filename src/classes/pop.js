/*eslint-disable no-unused-vars*/
var $ = require('jquery')
require('toastr/build/toastr.min.css')
let toastr = require('toastr/build/toastr.min.js')
/*eslint-enable no-unused-vars*/


/*
Wrap jquery toastr in a Poptart metaphor
*/
export default class Pop {

    static toaster = {
      'closeButton': false,
      'debug': false,
      'newestOnTop': true,
      'progressBar': false,
      'preventDuplicates': true,
      'onclick': null,
      'positionClass': 'toast-bottom-left',
      'showDuration': '1500',
      'hideDuration': '2500',
      'timeOut': '2500',
      'extendedTimeOut': '2500',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }

    static OK = (tart) => {
      toastr.options = Pop.toaster
      toastr['success'](tart)
    }
    static ERR = (tart) => {
      console.error(tart)
      toastr.options = Pop.toaster
      toastr['error'](tart)
    }

    static WARN = (tart ) => {
      toastr.options = Pop.toaster
      toastr['warning'](tart)
    }

    static INFO = (tart) => {
      toastr.options = Pop.toaster
      toastr['info'](tart)
    }
 }
