interface ItemParams {
  readonly levelrequire: ParamField<23, 'int'>;
  readonly zamorakitem: ParamField<41, 'int'>;
  readonly banksideOpIndex: ParamField<148, 'int'>;
  readonly pvpStorePrice: ParamField<152, 'int'>;
  readonly slidepuzzleModel: ParamField<186, 'model'>;
  readonly noAlchemy: ParamField<295, 'int'>;
  readonly magicRunetype1: ParamField<365, 'item'>;
  readonly magicRunecount1: ParamField<366, 'int'>;
  readonly magicRunetype2: ParamField<367, 'item'>;
  readonly magicRunecount2: ParamField<368, 'int'>;
  readonly magicRunetype3: ParamField<369, 'item'>;
  readonly magicRunecount3: ParamField<370, 'int'>;
  readonly slayerHelmVariant: ParamField<385, 'int'>;
  readonly petVariants: ParamField<446, 'enum'>;
  readonly wearOp1: ParamField<451, 'string'>;
  readonly wearOp2: ParamField<452, 'string'>;
  readonly wearOp3: ParamField<453, 'string'>;
  readonly wearOp4: ParamField<454, 'string'>;
  readonly wearOp5: ParamField<455, 'string'>;
  readonly wearOp6: ParamField<456, 'string'>;
  readonly wearOp7: ParamField<457, 'string'>;
  readonly wearOp8: ParamField<458, 'string'>;
  readonly deadmanRestriction: ParamField<568, 'int'>;
  readonly banksideOpText: ParamField<595, 'string'>;
  readonly spellButton: ParamField<596, 'component'>;
  readonly spellGraphic1On: ParamField<597, 'sprite'>;
  readonly spellGraphic1Off: ParamField<598, 'sprite'>;
  readonly spellGraphic2On: ParamField<599, 'sprite'>;
  readonly spellGraphic2Off: ParamField<600, 'sprite'>;
  readonly spellName: ParamField<601, 'string'>;
  readonly spellDesc: ParamField<602, 'string'>;
  readonly spellMembersonly: ParamField<603, 'boolean'>;
  readonly spellLevelreq: ParamField<604, 'int'>;
  readonly spellType: ParamField<605, 'int'>;
  readonly magicRunetype4: ParamField<606, 'item'>;
  readonly magicRunecount4: ParamField<607, 'int'>;
  readonly teletabSpell: ParamField<608, 'item'>;
  readonly prayerBit: ParamField<630, 'int'>;
  readonly priceByShop: ParamField<983, 'enum'>;
  readonly spellReqSkill: ParamField<1187, 'skill'>;
  readonly spellReqLevel: ParamField<1188, 'int'>;
  readonly deadmanSigil: ParamField<1371, 'int'>;
  readonly loadoutAmmotype: ParamField<1562, 'int'>;
  readonly loadoutAmmoreq: ParamField<1563, 'int'>;
  readonly loadoutIteminfo: ParamField<1564, 'int'>;
  readonly shopDisplayName: ParamField<1733, 'string'>;
  readonly isZamorakStaff: ParamField<1737, 'boolean'>;
  readonly prayerButton: ParamField<1751, 'component'>;
  readonly prayerName: ParamField<1752, 'string'>;
  readonly prayerLevelreq: ParamField<1753, 'int'>;
  readonly prayerDescription: ParamField<1754, 'string'>;
  readonly prayerSpriteLocked: ParamField<1756, 'sprite'>;
  readonly prayerSprite: ParamField<1757, 'sprite'>;
  readonly prayerIsHealing: ParamField<1758, 'int'>;
  readonly prayerTierGroup: ParamField<1759, 'int'>;
  readonly prayerSupersededBy: ParamField<1760, 'item'>;
  readonly spellHideLevelreq: ParamField<1884, 'boolean'>;
  readonly isQuiver: ParamField<1910, 'int'>;
  readonly deathkeepDisassembles: ParamField<1977, 'int'>;
  readonly opPriorityGroup: ParamField<2226, 'int'>;
  readonly charges: ParamField<2257, 'db_row'>;
  readonly fletchingRecipe: ParamField<2431, 'db_row'>;
  readonly isCargo: ParamField<2504, 'int'>;
}

interface NpcParams {
  readonly remains: ParamField<46, 'item'>;
  readonly caption: ParamField<510, 'string'>;
  readonly noFade: ParamField<945, 'int'>;
  readonly seedOnePixel: ParamField<1398, 'boolean'>;
  readonly percentage: ParamField<2289, 'int'>;
}

interface ObjectParams {
  readonly levelrequire: ParamField<23, 'int'>;
  readonly linkedLocLayout: ParamField<1612, 'int'>;
}
