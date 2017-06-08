/*
Inspection Status Types are defined in the backend as follows (ignore the 'all' type):
  Rails.application.config.statuses => ["condpass", "pass", "closed", "all"]

  check against uppercase
*/

const OK = { color: 'green', icon: 'checkmark'}

const WARN = { color: 'yellow', icon: 'flag'}

const SIG = { color: 'orange', icon: 'flag'}
const NA = { color: 'grey', icon: 'minus'}
const DANGER = { color: 'red', icon: 'warning sign'}

const MINOR = { color: 'blue', icon: 'sticky note outline'}

export const NODATA = '-----'

export const statusConfig = {
  NODATA: OK,
  'PASS': OK,
  'CONDPASS': WARN,
  'CLOSED': DANGER,
}


/*
Inspection.distinct.pluck(:severity)
["c - crucial", "m - minor", "s - significant", "", "na - not applicable"]

Grab the first char uppercased to plug into the serverityConfig dict

Severity Types are:
  S - Significant
  M - Minor
  C - Crucial
  NA - Not Applicable
  '' - No Entry (Good)
*/
export const severityConfig = {
  '-': OK,
  '': OK,
  'M': MINOR,
  'S': SIG,
  'C': WARN,
  'N': NA
}
