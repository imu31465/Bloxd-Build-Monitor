export const id = 237;
export const ids = [237];
export const modules = {
  39815: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      e: () => fD
    });
    var ID = cD(1922);
    let pD = !1;

    function iD() {
      pD = !0
    }

    function fD() {
      pD && (pD = !1, (0, ID.b)())
    }
  },
  39781: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => tD,
      g: () => yD,
      h: () => MD
    });
    var ID = cD(1924),
      pD = cD(1286),
      iD = cD(39692),
      fD = cD(39711),
      bD = cD(39715),
      QD = cD(39727);
    const wD = new pD.b;
    let SD = !1;

    function BD(DD) {
      const CD = (0, iD.g)();
      return null !== CD && +DD === CD.api.localId
    }

    function yD() {
      SD || (SD = !0, (0, QD.l)(fD.t, (DD => {
        var CD, cD;
        const ID = (0, bD.g)(fD.t, DD);
        if (!(0, bD.e)(ID)) return;
        const pD = ID;
        BD(pD.IC) && MD(pD.pC, {
          icon: pD.fC,
          level: pD.QC,
          displayName: null !== (CD = pD.iC) && void 0 !== CD ? CD : null,
          durationMs: null !== (cD = pD.bC) && void 0 !== cD ? cD : null
        })
      })), (0, QD.l)(fD.X, (DD => {
        const CD = (0, bD.g)(fD.X, DD);
        if (!(0, bD.e)(CD)) return;
        const cD = CD;
        BD(cD.IC) && ID.b.remove(cD.pC)
      })), (0, QD.i)((() => {
        ID.b.clear()
      })))
    }

    function MD(DD, CD) {
      ID.b.update(DD, CD), wD.forEach((CD => {
        CD(DD)
      }))
    }
    const tD = {
      localEffectUpdated: {
        watch: DD => wD.add(DD)
      }
    }
  },
  39785: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD
    });
    var ID = cD(4585),
      pD = cD(4581),
      iD = cD(39718),
      fD = cD(39727);
    const bD = new Set(ID.F),
      QD = ID.F.map((DD => (new TextEncoder).encode(DD))),
      wD = new Map;

    function SD(DD, CD) {
      var cD;
      return null === (cD = wD.get(DD)) || void 0 === cD ? void 0 : cD[CD]
    }(0, fD.l)(ID.dc.NewOtherEntitySettings, (DD => {
      DD.payloadKind === pD.ic.Msgpack && QD.some((CD => function(DD, CD) {
        const cD = CD[0];
        for (let ID = DD.indexOf(cD); - 1 !== ID && ID + CD.length <= DD.length; ID = DD.indexOf(cD, ID + 1)) {
          let cD = 1;
          for (; cD < CD.length && DD[ID + cD] === CD[cD];) cD++;
          if (cD === CD.length) return !0
        }
        return !1
      }(DD.payload, CD))) && function(DD) {
        if (null === DD || "object" !== typeof DD || null === DD.settings || "object" !== typeof DD.settings) return;
        const CD = String(DD.eId),
          cD = DD.settings;
        let ID = wD.get(CD);
        for (const pD in cD) {
          if (!bD.has(pD)) continue;
          const DD = cD[pD];
          null === DD || void 0 === DD ? ID && delete ID[pD] : (ID ??= {}, ID[pD] = DD)
        }
        ID && wD.set(CD, ID)
      }((0, iD.c)(DD.payload))
    })), (0, fD.i)((() => {
      wD.clear()
    }))
  },
  39773: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => MD,
      f: () => wD,
      g: () => BD
    });
    var ID = cD(38366),
      pD = cD(1913),
      iD = cD(1286),
      fD = cD(39711),
      bD = cD(39715),
      QD = cD(39727);
    const wD = new ID.c;
    let SD = {};

    function BD(DD) {
      return SD[DD]
    }
    const yD = new iD.b;

    function MD(DD) {
      return yD.add(DD)
    }

    function tD(DD) {
      yD.callEach(DD, "a roster listener")
    }(0, QD.l)(fD.fb, (DD => {
      const CD = (0, bD.g)(fD.fb, DD);
      if (void 0 === CD) return;
      const cD = CD.bI.some((DD => {
          let {
            QI: CD,
            wI: cD
          } = DD;
          return null !== cD && wD.has(CD) && wD.getName(CD) !== cD
        })),
        {
          added: ID,
          removed: iD,
          settingChanges: QD
        } = wD.apply(CD),
        SD = new Set;
      for (const pD of QD)
        for (const DD in pD.settings) SD.add(DD);
      const BD = cD || ID.length > 0 || iD.length > 0;
      (BD || SD.has("hideNameSeed")) && function() {
        const DD = new Map;
        for (const CD of wD.ids()) {
          const cD = wD.getName(CD),
            ID = wD.getSetting(CD, "hideNameSeed");
          void 0 !== cD && void 0 !== ID && null !== ID && DD.set(cD, ID)
        }
        pD.c.replaceAll(DD)
      }(), tD({
        kind: "roster",
        members: BD,
        settings: SD
      })
    })), (0, QD.l)(fD.U, (DD => {
      const CD = (0, bD.g)(fD.U, DD);
      if (void 0 !== CD) {
        for (const {
            Tc: DD,
            Gc: cD,
            Rc: ID
          }
          of CD) SD[DD] = {
          ...SD[DD],
          [cD]: ID
        };
        tD({
          kind: "cosmetics",
          updates: CD
        })
      }
    })), (0, QD.i)((() => {
      wD.clear(), SD = {}, pD.c.clear(), tD({
        kind: "reset"
      })
    })), (0, QD.j)((() => {
      wD.clear(), tD({
        kind: "reset"
      })
    }))
  },
  39793: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => xD,
      d: () => oD,
      f: () => aD,
      g: () => VD
    });
    var ID = cD(1266),
      pD = cD(613),
      iD = cD(90),
      fD = cD(4585),
      bD = cD(39680),
      QD = cD(39709),
      wD = cD(39692),
      SD = cD(39785),
      BD = cD(39773),
      yD = cD(39715),
      MD = cD(39727);

    function tD(DD) {
      let {
        deadEId: CD,
        killerEId: cD,
        killerLifeformType: ID,
        withItem: pD,
        killstreak: iD
      } = DD;
      return {
        killer: XD({
          eId: cD,
          lifeformType: ID
        }),
        victim: XD({
          eId: CD
        }),
        withItem: pD,
        killstreak: iD
      }
    }

    function ZD(DD) {
      let {
        killer: CD,
        victim: cD,
        withItem: ID
      } = DD;
      return {
        killer: XD(CD),
        victim: XD(cD),
        withItem: ID,
        killstreak: 0
      }
    }

    function oD(DD) {
      PD && UD((() => "killed" === DD.kind ? tD(DD.body) : ZD(DD.body)))
    }
    const vD = "#2727f1",
      ND = "#912c2c";

    function gD(DD, CD) {
      var cD;
      return BD.f.has(DD) ? null === (cD = BD.f.getSettings(DD)) || void 0 === cD ? void 0 : cD[CD] : (0, SD.b)(DD, CD)
    }

    function XD(DD) {
      var CD, cD, fD, bD, SD;
      let {
        eId: yD,
        name: MD,
        colour: tD,
        lifeformType: ZD
      } = DD;
      if (void 0 === yD || null === yD || "" === yD) {
        const DD = MD || null;
        return {
          id: null,
          shownName: DD,
          lifeformType: null === DD && null !== ZD && void 0 !== ZD ? ZD : null,
          colour: tD || null,
          local: !1,
          realName: null
        }
      }
      const oD = String(yD),
        XD = null === (CD = (0, wD.g)()) || void 0 === CD ? void 0 : CD.api,
        mD = void 0 !== XD && String(XD.localId) === oD,
        nD = null !== (cD = BD.f.getName(oD)) && void 0 !== cD ? cD : null,
        OD = null !== (fD = gD(oD, "hideNameSeed")) && void 0 !== fD ? fD : null;
      let PD = null === nD ? null : (0, ID.d)(nD, !iD.featureFlags.canSeeRealPlayerNames, OD) || null,
        HD = null;
      if (null === PD && void 0 !== XD) {
        const DD = XD.getEntityType(oD);
        "Player" !== DD && (PD = (0, QD.f)(XD, +oD) || null), HD = pD.j.includes(DD) ? DD : null
      }
      return {
        id: oD,
        shownName: PD,
        lifeformType: null === PD && null !== (bD = null !== (SD = HD) && void 0 !== SD ? SD : ZD) && void 0 !== bD ? bD : null,
        colour: tD || gD(oD, "killfeedColour") || (mD ? vD : ND),
        local: mD,
        realName: nD
      }
    }
    const mD = 32;
    let nD = [],
      OD = null,
      PD = !1,
      HD = !1;

    function UD(DD) {
      null === OD ? (nD.length === mD && nD.shift(), nD.push(DD)) : OD(DD())
    }

    function xD() {
      HD || (HD = !0, (0, MD.l)(fD.dc.PlayerKilled, (DD => {
        const CD = (0, yD.k)(DD);
        (0, yD.e)(CD) && UD((() => tD(CD)))
      })), (0, MD.l)(fD.dc.CustomKillfeed, (DD => {
        const CD = (0, yD.k)(DD);
        (0, yD.e)(CD) && (0, yD.e)(CD.killer) && (0, yD.e)(CD.victim) && UD((() => ZD(CD)))
      })), (0, MD.i)((() => {
        nD = []
      })))
    }
    const qD = Object.freeze([0, 0, 0]),
      JD = [0, 0, 0],
      KD = [0, 0, 0],
      aD = {
        kill: {
          watch(DD) {
            if (PD = !0, 0 === nD.length) return OD = DD, () => {
              PD = !1, OD = null
            };
            const CD = setTimeout((() => {
              const CD = nD;
              nD = [], OD = DD;
              for (const ID of CD) try {
                DD(ID())
              } catch (cD) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", cD)
              }
            }), 0);
            return () => {
              clearTimeout(CD), PD = !1, OD = null
            }
          }
        }
      },
      VD = {
        localPos() {
          const DD = (0, wD.g)();
          if (null === DD) return qD;
          const CD = DD.api.apiView;
          for (let cD = 0; cD < 3; cD++) JD[cD] = bD.s.localPos(CD, 0, cD);
          return JD
        },
        targetedBlockPos() {
          const DD = (0, wD.g)();
          if (null === DD || bD.s.targetBlockId(DD.api.apiView, 0) === bD.qd) return null;
          for (let CD = 0; CD < 3; CD++) KD[CD] = bD.s.targetBlock(DD.api.apiView, 0, CD);
          return KD
        }
      }
  },
  38366: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    class ID {
      constructor() {
        this.members = new Map
      }
      apply(DD) {
        const CD = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const ID of DD.bI) {
          let DD = this.members.get(ID.QI);
          if (DD || (DD = {
              name: null,
              settings: {}
            }, this.members.set(ID.QI, DD), CD.added.push(ID.QI)), null !== ID.wI && (DD.name = ID.wI), null !== ID.SI || ID.BI.length > 0) {
            const cD = null === ID.SI ? {} : JSON.parse(ID.SI);
            Object.assign(DD.settings, cD);
            for (const CD of ID.BI) delete DD.settings[CD], cD[CD] = void 0;
            CD.settingChanges.push({
              playerId: ID.QI,
              settings: cD
            })
          }
        }
        for (const ID of DD.yI) {
          const DD = this.members.get(ID);
          var cD;
          if (DD) this.members.delete(ID), CD.removed.push({
            playerId: ID,
            name: null !== (cD = DD.name) && void 0 !== cD ? cD : void 0
          })
        }
        return CD
      }
      has(DD) {
        return this.members.has(DD)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(DD) {
        var CD, cD;
        return null !== (CD = null === (cD = this.members.get(DD)) || void 0 === cD ? void 0 : cD.name) && void 0 !== CD ? CD : void 0
      }
      getSettings(DD) {
        var CD;
        return null === (CD = this.members.get(DD)) || void 0 === CD ? void 0 : CD.settings
      }
      getSetting(DD, CD) {
        var cD;
        return null === (cD = this.members.get(DD)) || void 0 === cD ? void 0 : cD.settings[CD]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);