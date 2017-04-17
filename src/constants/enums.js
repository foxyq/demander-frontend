function enumize(enumDefinition) {
  const byId = {}
  const list = []
  let key
  let temp

  for (key in enumDefinition) {
    if (enumDefinition.hasOwnProperty(key)) {
      temp = Object.assign({}, enumDefinition[key])
      delete temp.id
      temp[key] = key
      list.push({
        label: enumDefinition[key].label,
        value: enumDefinition[key].id
      })
      byId[enumDefinition[key].id] = temp
    }
  }
  enumDefinition.ids = byId
  enumDefinition.list = list
  return enumDefinition
}

exports.EXAMPLE = enumize({
  PARTICIPANT: { id: 1, u: 'participant' },
  LEADER: { id: 2, u: 'leader' },
  NAO_STAFF: { id: 3, u: 'naa_oa_staff' },
  ALL: { id: 0, u: 'all' },
})


