export const id = 190;
export const ids = [49, 190];
export const modules = {
  38009: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD
    });
    const ID = new WeakMap;

    function pD(DD, CD) {
      return ID.set(DD, CD), DD
    }

    function iD(DD) {
      var CD;
      return null !== (CD = ID.get(DD)) && void 0 !== CD ? CD : null
    }
  },
  37907: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      var ID;
      const {
        width: pD,
        height: iD
      } = cD, fD = null !== (ID = DD.text) && void 0 !== ID ? ID : DD, bD = (fD.x / 100 - .5) * pD, QD = (fD.y / 100 - .5) * iD, wD = pD / 2 - CD.x;
      if (null !== DD.text && Math.abs(bD) <= wD && QD >= CD.top - iD / 2 && QD <= iD / 2 - CD.bottom) return {
        x: fD.x,
        y: fD.y
      };
      const SD = Math.min(0 === bD ? 1 / 0 : wD / Math.abs(bD), QD > 0 ? (iD / 2 - CD.bottom) / QD : QD < 0 ? (CD.top - iD / 2) / QD : 1 / 0);
      return !Number.isFinite(SD) || SD < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bD * SD / pD * 100,
        y: 50 + QD * SD / iD * 100
      }
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  37919: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    const ID = 4,
      pD = 12e3,
      iD = 1e3;
    class fD {
      constructor() {
        let {
          limit: DD = ID,
          windowMs: CD = pD,
          spacingMs: cD = iD,
          now: fD = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = DD, this.windowMs = CD, this.spacingMs = cD, this.now = fD
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const DD of this.priority) DD.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const DD = this.now();
        this.sent.push(DD), this.lastSentAt = DD, this.schedule(), this.notify()
      }
      addPriority(DD) {
        return this.priority.add(DD), () => {
          this.priority.delete(DD)
        }
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const DD of this.priority)
          if (DD.waiting()) return !0;
        return !1
      }
      prune() {
        const DD = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= DD;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const DD = this.now(),
          CD = this.lastSentAt + this.spacingMs,
          cD = Math.min(CD > DD ? CD : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        cD !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, cD - DD)))
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37899: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD, CD, cD) {
        this.Uo = DD, this.beforeOpen = CD, this.afterClose = cD, this.open = !1, this.Lt = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Lt && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(DD) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(DD)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Lt = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Lt || (this.snapshot = this.buildSnapshot(), this.Uo(this.snapshot))
      }
    }
  },
  38013: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      SkyblockEntityFacing: () => bD,
      needsSkyblockEntityFacing: () => fD
    });
    var ID = cD(618),
      pD = cD(4081),
      iD = cD(38017);

    function fD(DD, CD) {
      if (DD.metaInfo === ID.e || "Iron Guardian" === DD.type || "Gold Guardian" === DD.type) return !0;
      if ("Pig" === DD.type) return "sitting" === DD.pose;
      if ("Person" !== DD.meshKind || void 0 === DD.meshOpts) return !1;
      let cD = null === CD || void 0 === CD ? void 0 : CD.get(DD.meshOpts);
      if (void 0 === cD) {
        var iD, fD;
        const ID = (0, pD.d)(DD);
        cD = !1, "pig_napoleon" === (null === ID || void 0 === ID || null === (iD = ID.opts.textures) || void 0 === iD ? void 0 : iD.head) ? cD = !0 : "npc_pig_head" === (null === ID || void 0 === ID || null === (fD = ID.opts.textures) || void 0 === fD ? void 0 : fD.head) && (cD = "sitting" === ID.opts.pose || "sitting"), CD && (CD.size >= 256 && CD.clear(), CD.set(DD.meshOpts, cD))
      }
      return "sitting" === cD ? "sitting" === DD.pose : cD
    }(0, iD.f)("skyblock", ((DD, CD) => {
      CD.setFacingTolerance(fD(DD) ? 0 : null)
    }));
    class bD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = DD, this.alsoVisit = CD, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = DD => {
          var CD;
          const cD = this.api.getEntityInfo(DD);
          cD && (fD(cD, this.meshFacingCache) && (this.api.setFacingTolerance(DD, 0), this.nextFacing.add(DD)), null === (CD = this.alsoVisit) || void 0 === CD || CD.call(this, DD, cD))
        }
      }
      wy() {
        const {
          api: DD
        } = this, CD = this.nextFacing;
        DD.forEachEntity(this.visit);
        for (const cD of this.facing) CD.has(cD) || DD.setFacingTolerance(cD, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = CD
      }
      dispose() {
        for (const DD of this.facing) this.api.setFacingTolerance(DD, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37894: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => BQ
    });
    const ID = "island";
    var pD = cD(326);
    const iD = (0, pD.Ab)([0, 0, -1]),
      fD = [{
        name: "S",
        bearing: (0, pD.Ab)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, pD.Ab)([-1, 0, 0])
      }, {
        name: "N",
        bearing: iD
      }, {
        name: "W",
        bearing: (0, pD.Ab)([1, 0, 0])
      }];

    function bD(DD, CD, cD) {
      return [100 * (cD.mapMaxX - DD) / (cD.mapMaxX - cD.mapMinX), 100 * (CD - cD.mapMinZ) / (cD.mapMaxZ - cD.mapMinZ)]
    }

    function QD(DD, CD, cD) {
      const pD = "local" === CD,
        iD = DD.background,
        fD = CD => iD ? bD(CD[0] - DD.mapOrigin[0], CD[2] - DD.mapOrigin[2], iD.bounds) : [50, 50],
        QD = (DD.insideDungeon ? [] : DD.landmarks).map((DD => {
          var CD, ID;
          return {
            id: DD.id,
            name: cD(DD.visited && DD.nameKey ? null !== (CD = DD.mapLabelKey) && void 0 !== CD ? CD : DD.nameKey : "skyblockGame:mapUnknown"),
            icon: DD.visited && null !== (ID = DD.icon) && void 0 !== ID ? ID : "unknown",
            visited: DD.visited,
            current: !1,
            position: fD(DD.position),
            travelKind: "landmark",
            travelId: DD.id
          }
        })),
        SD = DD.zones.map((CD => {
          var ID;
          return {
            id: CD.id,
            name: cD(CD.visited && CD.nameKey ? CD.nameKey : "skyblockGame:mapUnknown"),
            icon: CD.visited && null !== (ID = CD.icon) && void 0 !== ID ? ID : "unknown",
            visited: CD.visited,
            current: CD.id === DD.zoneId,
            position: CD.position,
            thumbnail: CD.visited ? CD.id : void 0,
            travelKind: "zone",
            travelId: CD.id
          }
        })),
        BD = DD.insideDungeon || !iD ? [] : DD.portals.map((DD => {
          var CD;
          return {
            id: DD.id,
            name: cD(null !== (CD = DD.nameKey) && void 0 !== CD ? CD : "skyblockGame:mapUnknown"),
            icon: DD.visited ? "dungeons" === DD.destination ? "portal_orange" : "portal" : "unknown",
            visited: DD.visited,
            current: !1,
            position: fD(DD.position),
            colour: DD.colour,
            travelKind: "zone",
            travelId: DD.destination
          }
        })),
        yD = pD ? QD : SD,
        MD = yD.filter((DD => DD.visited)).length,
        tD = iD ? (iD.bounds.mapMaxX - iD.bounds.mapMinX) / (iD.bounds.mapMaxZ - iD.bounds.mapMinZ) : 2,
        ZD = iD ? JSON.stringify([iD.bounds, DD.mapOrigin]) : "";
      return {
        local: pD,
        points: yD,
        portals: pD ? BD : [],
        progress: yD.length ? cD("skyblockGame:mapDiscovered", {
          current: String(MD),
          total: String(yD.length)
        }) : null,
        percent: yD.length ? 100 * MD / yD.length : 0,
        canTravel: [...yD, ...pD ? BD : []].some((DD => DD.visited && !DD.current)),
        noLandmarks: pD && !DD.insideDungeon && 0 === QD.length,
        background: iD ? {
          imageKey: iD.imageKey,
          fallbackImageKey: DD.zoneId,
          geometryKey: ZD,
          label: cD(iD.labelKey),
          colour: iD.backgroundColour,
          ratio: tD
        } : null,
        connections: wD(DD.zones),
        minimap: iD ? {
          imageKey: iD.imageKey,
          fallbackImageKey: DD.zoneId,
          geometryKey: ZD,
          label: cD(iD.labelKey),
          colour: iD.backgroundColour,
          caption: cD(DD.zoneId === ID ? "skyblockGame:zoneIsland" : iD.labelKey),
          width: (iD.bounds.mapMaxX - iD.bounds.mapMinX) / iD.minimapSpan * 100 + "%",
          height: (iD.bounds.mapMaxZ - iD.bounds.mapMinZ) / iD.minimapSpan * 100 + "%",
          markers: [...QD, ...BD]
        } : null
      }
    }

    function wD(DD) {
      const CD = new Set;
      return DD.flatMap((cD => cD.connections.flatMap((ID => {
        const pD = DD.find((DD => DD.id === ID)),
          iD = [cD.id, ID].sort().join("|");
        return !pD || CD.has(iD) ? [] : (CD.add(iD), [{
          id: `${cD.id}-${ID}`,
          start: cD.position,
          end: pD.position,
          explored: cD.visited && pD.visited
        }])
      }))))
    }
    var SD = cD(37899);
    class BD extends SD.d {}
    const yD = "skyblockMapView";
    class MD extends BD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(DD, ID, pD), this.requestTravel = CD, this.translate = cD, this.now = iD, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = DD => {
          this.tab = DD, this.feedbackKey = "", this.emit()
        }, this.travel = (DD, CD) => {
          if (!this.map || this.pending || this.Lt) return;
          const cD = ("zone" === DD ? this.map.zones : this.map.landmarks).find((DD => DD.id === CD));
          if (cD) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in cD && !cD.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (cD.visited)
              if ("zone" === DD && CD === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const cD = ++this.nextRequestId;
                this.pending = {
                  requestId: cD,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: DD,
                  id: CD,
                  requestId: cD
                })
              }
            else this.feedbackKey = "skyblockGame:mapVisitFirst";
            this.emit()
          }
        }
      }
      getEntities() {
        return this.entities
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      kt(DD) {
        var CD;
        if (!this.Lt)
          if ("entities" !== DD.kind)
            if ("open" !== DD.kind) {
              var cD, ID;
              if ("snapshot" === DD.kind)(null === (cD = DD.snapshot) || void 0 === cD ? void 0 : cD.zoneId) !== (null === (ID = this.map) || void 0 === ID ? void 0 : ID.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = DD.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === DD.kind) {
                var pD;
                DD.requestId === (null === (pD = this.pending) || void 0 === pD ? void 0 : pD.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (DD.requestId === (null === (CD = this.pending) || void 0 === CD ? void 0 : CD.requestId)) {
                var iD;
                this.pending = null, this.feedbackKey = null !== (iD = DD.errorKey) && void 0 !== iD ? iD : "", null === DD.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = DD.entities
      }
      wy() {
        this.pending && this.now() >= this.pending.expiresAt && (this.pending = null, this.feedbackKey = "skyblockGame:mapTravelTimeout", this.emit())
      }
      dispose() {
        this.map = null, this.pending = null, super.dispose()
      }
      isEnabled() {
        return null !== this.map
      }
      buildSnapshot() {
        return {
          presentation: this.map ? QD(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const tD = 67.5 * Math.PI / 180;

    function ZD(DD, CD) {
      const cD = Math.abs(DD);
      if (cD > tD || CD.trackHalfWidth <= 0) return null;
      const ID = CD.trackHalfWidth,
        pD = CD.screenHalfWidth / (CD.tanHalfFovX * Math.max(.5, Math.cos(CD.pitch))),
        iD = Math.min(Math.atan(.6 * ID / pD), .75 * tD),
        fD = pD * Math.tan(iD);
      let bD;
      if (cD <= iD) bD = pD * Math.tan(cD);
      else {
        const DD = tD - iD,
          CD = Math.max(0, pD * DD / (Math.cos(iD) ** 2 * (ID - fD)) - 1),
          QD = (cD - iD) / DD;
        bD = fD + (ID - fD) * (1 + CD) * QD / (1 + CD * QD)
      }
      return 50 + Math.sign(DD) * bD * 50 / ID
    }
    class oD {
      constructor(DD, CD) {
        this.map = DD, this.visited = CD, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = CD ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const DD = this.map.getSnapshot().map;
        return !DD || DD.insideDungeon ? [] : DD.landmarks.filter((DD => DD.visited === this.visited)).map((DD => {
          var CD, cD;
          return {
            id: `landmark:${DD.id}`,
            position: DD.position,
            icon: null !== (CD = DD.icon) && void 0 !== CD ? CD : "unknown",
            nameKey: null !== (cD = DD.nameKey) && void 0 !== cD ? cD : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class vD {
      constructor(DD, CD, cD, ID) {
        this.map = DD, this.kind = CD, this.position = cD, this.alive = ID, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = CD, this.range = "enemy" === CD ? 48 : 64, this.limit = 12
      }
      FX(DD) {
        if ("enemy" !== this.kind || this.alive(DD.yi)) return this.position(DD.yi)
      }
      getPoints() {
        const DD = [];
        for (const ID of this.map.getEntities()) {
          if (ID.kind !== this.kind || "enemy" === this.kind && !this.alive(ID.compassEntityId)) continue;
          const pD = this.position(ID.compassEntityId);
          var CD, cD;
          if (pD) DD.push({
            id: `${this.kind}:${ID.compassEntityId}`,
            yi: ID.compassEntityId,
            kind: this.kind,
            icon: null !== (CD = ID.icon) && void 0 !== CD ? CD : ID.npcSkin ? `npc_${ID.npcSkin}` : this.kind,
            displayName: ID.displayName,
            position: pD,
            nameKey: null !== (cD = ID.nameKey) && void 0 !== cD ? cD : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return DD
      }
    }
    class ND {
      constructor(DD) {
        this.map = DD, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const DD = this.map.getSnapshot().map;
        return !DD || DD.insideDungeon ? [] : DD.portals.map((DD => {
          var CD;
          return {
            id: "portal:" + DD.id,
            kind: "portal",
            position: DD.position,
            nameKey: null !== (CD = DD.nameKey) && void 0 !== CD ? CD : "skyblockGame:compassUnvisitedZone",
            icon: DD.visited ? "dungeons" === DD.destination ? "portal_orange" : "portal" : "unknown",
            colour: DD.colour
          }
        }))
      }
    }
    class gD {
      constructor(DD) {
        this.target = DD, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const DD = this.target();
        return DD ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: DD.position,
          nameKey: DD.nameKey
        }] : []
      }
    }

    function XD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.position;
      const iD = ID[0] - CD[0],
        fD = ID[2] - CD[2];
      return {
        ...DD,
        position: ID,
        offset: pD.e.computeShortestRotation(cD, (0, pD.Ab)([iD, 0, fD])),
        distance: Math.hypot(iD, ID[1] - CD[1], fD)
      }
    }
    let mD;

    function nD(DD, CD) {
      var cD;
      return (null === (cD = mD) || void 0 === cD ? void 0 : cD.locale) !== CD && (mD = {
        locale: CD,
        near: new Intl.NumberFormat(CD, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(CD, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (DD < 10 ? mD.near : mD.far).format(DD)
    }
    class OD {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(DD) {
        return this.providers.set(DD.id, DD), this.refreshAt = 0, () => {
          this.providers.get(DD.id) === DD && (this.providers.delete(DD.id), this.refreshAt = 0)
        }
      }
      frame(DD, CD, cD) {
        if (cD >= this.refreshAt) {
          this.refreshAt = cD + 200, this.candidates = [];
          for (const CD of this.providers.values()) {
            if (!CD.enabled) continue;
            const cD = CD.getPoints().map((CD => {
              const cD = CD.position;
              return {
                point: CD,
                distance: Math.hypot(cD[0] - DD[0], cD[1] - DD[1], cD[2] - DD[2])
              }
            })).filter((DD => DD.distance <= CD.range)).sort(((DD, CD) => DD.distance - CD.distance)).slice(0, CD.limit);
            for (const {
                point: DD
              }
              of cD) this.candidates.push({
              provider: CD,
              point: DD
            })
          }
        }
        const ID = [];
        for (const {
            point: pD,
            provider: iD
          }
          of this.candidates) {
          if (!iD.enabled) continue;
          const cD = iD.FX ? iD.FX(pD) : pD.position;
          if (cD) {
            const iD = XD(pD, DD, CD, cD);
            Math.abs(iD.offset) <= tD && ID.push(iD)
          }
        }
        return ID
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var PD = cD(36002),
      HD = cD(53);
    const UD = [{
        dailyRewardCoins: 1e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 3e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 4e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 5500,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 7e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 9e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 2
        }]
      }, {
        dailyRewardCoins: 25e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 3
        }, {
          dailyRewardItemName: "Diamond",
          dailyRewardItemAmount: 1
        }]
      }],
      xD = UD.length;

    function qD(DD) {
      return DD >= xD ? 1 : DD + 1
    }
    const JD = "skyblockQuests",
      KD = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      aD = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function VD(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const cD = Math.max(0, Math.floor(DD)),
        ID = Math.floor(cD % 1e3 / 100),
        pD = Math.floor(cD / 1e3),
        iD = pD % 60,
        fD = Math.floor(pD / 60),
        bD = fD % 60,
        QD = Math.floor(fD / 60),
        wD = DD => DD < 10 ? `0${DD}` : String(DD),
        SD = CD ? `.${ID}` : "";
      return QD > 0 ? `${QD}:${wD(bD)}:${wD(iD)}${SD}` : `${bD}:${wD(iD)}${SD}`
    }
    const zD = "devquests",
      jD = "none",
      lD = {
        hub: {
          farming_1: {
            min: [4, 16, 90],
            max: [4, 18, 91],
            unlockedBlock: "Yellow Portal"
          },
          mining_1: {
            min: [95, 16, 2],
            max: [97, 18, 2],
            unlockedBlock: "Cyan Portal"
          },
          combat_1: {
            min: [207, 36, 49],
            max: [208, 38, 49],
            unlockedBlock: "Red Portal"
          },
          fishing_1: {
            min: [6, 20, 149],
            max: [6, 22, 150],
            unlockedBlock: "Blue Portal"
          }
        },
        combat_1: {
          tower_roof: {
            min: [202, 69, 151],
            max: [203, 71, 151],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          },
          tower_exit: {
            min: [202, 80, 133],
            max: [203, 82, 133],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          }
        }
      },
      LD = "Compressed Messy Stone",
      TD = {
        "Grass Block": "Useless Soil",
        "Pine Grass Block": "Useless Soil",
        "Jungle Grass Block": "Useless Soil",
        "Dry Grass Block": "Useless Soil",
        "Overgrown Grass Block": "Useless Soil",
        "Overgrown Pine Grass Block": "Useless Soil",
        "Overgrown Jungle Grass Block": "Useless Soil",
        "Overgrown Dry Grass Block": "Useless Soil",
        Dirt: "Messy Dirt",
        Sand: "Sandstone",
        Gravel: "Smooth Andesite"
      },
      GD = ["Stone", "Diorite", "Andesite", "Granite"],
      RD = new Set(GD),
      kD = (Object.keys(TD), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const dD = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function YD(DD, CD) {
      const cD = Math.floor(5 * DD / (2 * CD + 1));
      return Math.min(4, Math.max(0, cD))
    }
    var WD = cD(1240);
    var sD = cD(35788);
    var ED = cD(35996),
      eD = cD(20),
      uD = cD(8583);
    const hD = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      rD = 1e3;

    function AD(DD) {
      return Math.max(0, DD)
    }

    function FD(DD) {
      return 1 + .01 * AD(DD)
    }

    function DC(DD) {
      return 1 + .005 * AD(DD)
    }

    function CC(DD) {
      return 1 + .005 * AD(DD)
    }

    function cC(DD) {
      return .01 * AD(DD)
    }

    function IC(DD) {
      return 150 / (150 + AD(DD))
    }

    function pC(DD) {
      return 1 + .002 * AD(DD)
    }

    function iC(DD) {
      return Math.round(10 * DD) / 10
    }

    function fC(DD, CD) {
      switch (DD) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: iC(100 * (DC(CD) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: iC(100 * (FD(CD) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: iC(100 * (CC(CD) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: iC(100 * cC(CD))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: iC(100 * (1 - IC(CD)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: iC(100 * (pC(CD) - 1))
          }
      }
    }

    function bC(DD) {
      return "farming" === DD ? 200 : 100
    }

    function QC(DD, CD) {
      if (!Number.isSafeInteger(DD) || DD < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const cD = bC(CD),
        ID = DD => function(DD, CD) {
          return bC(DD) * CD * (CD + 1) / 2
        }(CD, DD);
      let pD = Math.min(rD, Math.floor((Math.sqrt(8 * DD / cD + 1) - 1) / 2));
      return pD < rD && ID(pD + 1) <= DD ? pD++ : ID(pD) > DD && pD--, {
        totalXp: DD,
        level: pD,
        xpIntoLevel: DD - ID(pD),
        xpForNextLevel: pD === rD ? null : cD * (pD + 1)
      }
    }
    const wC = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function SC(DD) {
      return wC.has(DD)
    }
    const BC = new Set(pD.pb);

    function yC(DD) {
      return BC.has(DD)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const MC = {
        "Maple Log": 10,
        "Pine Log": 10,
        "Plum Log": 10,
        "Cedar Log": 10,
        "Aspen Log": 10,
        "Jungle Log": 10,
        "Palm Log": 10,
        "Pear Log": 10,
        "Cherry Log": 10,
        "Spectral Log": 10,
        "Mango Log": 10
      },
      tC = {
        Stone: 2,
        Diorite: 18,
        Granite: 18,
        Andesite: 18,
        "Coal Ore": 10,
        "Iron Ore": 15,
        "Gold Ore": 20,
        "Diamond Ore": 30,
        "Moonstone Ore": 40,
        "Block of Coal": 15,
        "Block of Gold": 30
      },
      ZC = {
        ...tC,
        ...Object.fromEntries(Object.entries(kD).map((DD => {
          let [CD, cD] = DD;
          return [CD, 9 * tC[cD]]
        })))
      },
      oC = {
        Watermelon: 10,
        Melon: 10,
        "Wheat|FreshlyGrown": 10,
        "Rice|FreshlyGrown": 10,
        "Corn Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|Lava|FreshlyGrown": 10,
        "Tomato Plant|FreshlyGrown": 10,
        "Tomato Plant|Top|FreshlyGrown": 10,
        "Carrot Plant|FreshlyGrown": 10,
        "Potato Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|Top|FreshlyGrown": 10,
        "Coffee Plant|FreshlyGrown": 10,
        "Lettuce Plant|FreshlyGrown": 10,
        "Cauliflower Plant|FreshlyGrown": 10,
        "Parsnip Plant|FreshlyGrown": 10,
        "Red Cabbage Plant|FreshlyGrown": 10,
        "Beetroot Plant|FreshlyGrown": 10
      },
      vC = {
        Wheatfish: 25,
        Darter: 25,
        "Sunset Minnow": 25,
        "Root Flounder": 25,
        "Greenfin Loach": 25,
        "Red Strongfish": 30,
        "Green Strongfish": 30,
        "Boomerang Fish": 30,
        Seahorse: 30,
        "Spined Stickleback": 30,
        "Moon Strongfish": 40,
        "Boulder Bass": 40,
        "Grass Snapper": 40,
        "Crystalized Wheatfish": 55,
        "Moonstone Pupfish": 55,
        "Reedglass Minnow": 35,
        "Mangrove Herring": 35,
        "Mudline Perch": 35,
        "Coastal Mullet": 35,
        "Reef Sardine": 35,
        "Root Perch": 40,
        "Aether Minnow": 40,
        "Driftwood Catfish": 45,
        "Tri-Pointed Needlefish": 70,
        "Threadfin Bream": 40,
        "Mudbelly Tilapia": 40,
        "Rotslab Eel": 40,
        "Polarflash Electron": 45,
        Hatchetfish: 45,
        "Mireback Carp": 50,
        "Blackwater Bream": 50,
        "Stone Grouper": 55,
        "Shadeback Ray": 60,
        "Glacial Silverfish": 60,
        "Moonlit Boomerang Fish": 90,
        "Murkborne Ray": 90,
        "Bamboo Catfish": 50,
        "Mossback Arapaima": 60,
        "Murk Stingray": 65,
        "Channel Sawfish": 70,
        "Boned Sturgeon": 75,
        Oarfish: 90,
        Snakehead: 160,
        "Eldertide Leviathan": 250,
        Pithead: 50,
        "Electric Eel": 60,
        "Shadow Darter": 60,
        "Abyss Carp": 65,
        "Nomai Moray": 75,
        "Silver Dragonfish": 80,
        "Giant Moray": 100,
        Coelacanth: 250,
        "Frost Herring": 60,
        "Permafrost Halibut": 70,
        "Glacial Lanternfish": 80,
        "Frozen Grenadier": 85,
        "Blackfin Icefish": 100,
        Moonfish: 120,
        "Alpha Moon Strongfish": 140,
        "Deepwater Lanternfish": 300,
        "Pearlescent Moonfish": 300,
        "Game Dev Fish": 50
      };
    const NC = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      gC = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function XC(DD) {
      return `rgb(${gC[DD].join(", ")})`
    }

    function mC(DD, CD, cD) {
      if (!cD) return DD(CD);
      const ID = {};
      for (const [pD, iD] of Object.entries(cD)) ID[pD] = "string" === typeof iD ? iD : DD(iD.translationKey);
      return DD(CD, ID)
    }
    class nC {
      constructor(DD, CD) {
        this.now = DD, this.getJournal = CD, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Lb = !1, this.onShown = () => {}
      }
      enqueue(DD) {
        const CD = OC(DD);
        if (CD) this.pending.push(DD);
        else {
          const CD = this.pending.findIndex(OC);
          this.pending.splice(-1 === CD ? this.pending.length : CD, 0, DD)
        }
        return (null === this.current || null !== this.followUp && !CD) && (this.advance(), !0)
      }
      setHeld(DD) {
        return this.Lb = DD, !DD && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      wy() {
        const DD = this.getJournal(),
          CD = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === CD ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === CD || void 0 === CD ? void 0 : CD.kind) && DD && DD.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === CD || void 0 === CD ? void 0 : CD.kind)) {
          const DD = this.findFollowUp(this.current);
          if ("step" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || DD.questId !== CD.questId || DD.step.id !== CD.step.id) return this.showFollowUp(DD, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(DD, CD, cD) {
        var ID, pD, iD, fD;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, DD, cD);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, DD);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, DD, CD);
        const {
          questCompletionKind: bD,
          questCompletionNameKey: QD
        } = this.current, wD = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, SD = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, BD = "step" === (null === (ID = this.followUp) || void 0 === ID ? void 0 : ID.kind) ? this.followUp : null, yD = "explore" === (null === (pD = this.followUp) || void 0 === pD ? void 0 : pD.kind);
        let MD;
        return MD = yD ? DD("skyblockGame:questExploreTitle") : null !== BD ? "quest" === bD ? DD("skyblockGame:questNextQuestTitle", {
          quest: DD(BD.questNameKey)
        }) : DD("skyblockGame:questNextStepTitle") : DD("started" === bD ? "skyblockGame:questStartedTitle" : "quest" === bD ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? bD : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: MD,
          name: yD ? CD("skyblockGame:questExploreName") : null !== BD ? mC(CD, BD.step.nameKey, BD.step.nameParams) : mC(CD, QD, wD),
          description: yD ? CD("skyblockGame:questExploreDescription") : null === BD ? null : mC(CD, BD.step.descriptionKey, BD.step.descriptionParams),
          reward: null === this.followUp && SD > 0 ? CD("skyblockGame:questCoinRewardSuffix", {
            amount: SD.toLocaleString(cD)
          }) : null,
          iconItem: null !== (iD = null === BD || void 0 === BD ? void 0 : BD.step.questIconItem) && void 0 !== iD ? iD : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== BD && (null === (fD = this.getJournal()) || void 0 === fD ? void 0 : fD.trackedQuestId) === BD.questId ? BD.step.nameKey : null
        }
      }
      getSkillLevelView(DD, CD, cD) {
        let {
          skill: ID,
          beforeLevel: pD,
          level: iD
        } = DD;
        const fD = fC(ID, pD),
          bD = fC(ID, iD);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: CD(`skyblockGame:${ID}`),
          name: CD("skyblockGame:skillLevelUp", {
            to: iD.toLocaleString(cD)
          }),
          description: fD.percent === bD.percent ? null : CD(`${bD.translationKey}Change`, {
            before: fD.percent.toLocaleString(cD),
            after: bD.percent.toLocaleString(cD)
          }),
          reward: null,
          iconItem: NC[ID],
          accent: XC(ID),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(DD, CD) {
        let {
          landmarkNameKey: cD
        } = DD;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: CD("skyblockGame:landmarkDiscovered"),
          name: CD(cD),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(DD, CD, cD) {
        let {
          titleKey: ID,
          textKey: pD,
          params: iD = {},
          nameKeys: fD = {},
          iconItem: bD = null
        } = DD;
        const QD = {
          ...iD
        };
        for (const [wD, SD] of Object.entries(fD)) QD[wD] = CD(SD);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: CD(ID),
          name: cD(pD, QD),
          description: null,
          reward: null,
          iconItem: bD,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var DD;
        if (null !== this.followUp) return 5600;
        switch (null === (DD = this.current) || void 0 === DD ? void 0 : DD.questCompletionKind) {
          case "quest":
            return 4800;
          case "started":
            return 4e3;
          case "skillLevel":
            return 3e3;
          case "landmark":
            return 3500;
          case "npcNote":
            return 8e3;
          default:
            return 2400
        }
      }
      showFollowUp(DD, CD) {
        null === DD || this.Lb ? this.advance() : (this.followUp = DD, this.token++, this.shownAt = this.now(), this.expiresAt = null !== CD && void 0 !== CD ? CD : this.shownAt + this.durationMs())
      }
      findFollowUp(DD) {
        var CD;
        const cD = this.getJournal();
        if (!cD || this.hasPendingQuestPopup() || OC(DD)) return null;
        const ID = "started" === DD.questCompletionKind ? cD.active.some((CD => CD.id === DD.questCompletionQuestId)) : "quest" === DD.questCompletionKind ? cD.completed.some((CD => CD.id === DD.questCompletionQuestId)) : [...cD.active, ...cD.completed].some((CD => CD.id === DD.questCompletionQuestId && CD.subquests.some((CD => CD.id === DD.questCompletionStepId && "completed" === CD.status))));
        if (!ID) return null;
        if ("quest" === DD.questCompletionKind && 0 === cD.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const pD = cD.active.find((DD => DD.id === cD.trackedQuestId)),
          iD = null !== (CD = null === pD || void 0 === pD ? void 0 : pD.subquests.find((DD => "ready" === DD.status))) && void 0 !== CD ? CD : null === pD || void 0 === pD ? void 0 : pD.subquests.find((DD => "active" === DD.status));
        return iD ? {
          kind: "step",
          questId: pD.id,
          questNameKey: pD.nameKey,
          step: iD
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((DD => !OC(DD)))
      }
      advance() {
        var DD;
        this.current = this.Lb ? null : null !== (DD = this.pending.shift()) && void 0 !== DD ? DD : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function OC(DD) {
      return PC(DD.questCompletionKind)
    }

    function PC(DD) {
      return "skillLevel" === DD || "landmark" === DD || "npcNote" === DD
    }
    var HC = cD(37907);
    const UC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      xC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      qC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      JC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      KC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var aC = cD(37912);
    const VC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      zC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const jC = cD.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const lC = cD.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      LC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var TC = cD(18288),
      GC = cD(20299),
      RC = cD(22679),
      kC = cD(24196),
      dC = cD(25869);
    const YC = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: TC,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: GC,
      cow: KC,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: cD(25882),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: UC,
      fishing_1: UC,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: xC,
      guardian_iron: qC,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: RC,
      mines: kC,
      mining_1: kC,
      npc: JC,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: KC,
      npc_draugr_warper: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAb0lEQVR4nGNgIBIwIrH/41PDCFPU+/IzVlXF4rxgdSwwgUV33oFpXh42MP35yy+sVv///x9is8GxR2D6gpUcRAEjxGYmZF2nvv/BygYBuNUwk0BASoKHIe38M+wKQZLIAMa/iOZGsDuxehtVDWEAAHwCHXf9ctZjAAAAAElFTkSuQmCC",
      npc_dwarf_blue_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf//51lRMAMWxf/TM0r+/z/AjoLTM0owFENMeSCBirGY+l+r/SpY8OGmBjBGFkNR6DD9FVwRDIPEyFYIVowDkwYAEBZzAwnUgyIAAAAASUVORK5CYII=",
      npc_dwarf_braided_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwX9deRUUzIBFMYYiXIr/h5rqYMUYCr9+/wUWjLE2AGNkMRSF6Q6mcEUwDBLDUIiuCNlkDA/hwKQBAPnYUUW1+JaKAAAAAElFTkSuQmCC",
      npc_dwarf_child: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX8lZeX/6hoaYAxiY1P8f1trHlbMgKb4/5qGDKwYQ+HX77/+q0jKwxWA2CAxDIVEW32gqwRDEUgMq4dwYNIAAP19arcJQ+nsAAAAAElFTkSuQmCC",
      npc_dwarf_forked_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwX91DQ0UzIBFMVhick4EXBGMja74f1tKAFaMofDr91//VSTlwSaBMIgNEsOqEN2NWBWCTFFSVkbBIDGsHsKBSQMAnGRas5Ev2yIAAAAASUVORK5CYII=",
      npc_dwarf_ginger_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIBP8R8NYwf//B9hRMAMWxf//n2f9//+BBCo+z4qh+P/dFd0YGKvCr99//WfQ8/z/dNMUMAaxwWLoCt/umPn/ZaMLCgaJYSgEmfK4wgEFg03G5iEcmDQAAGl2d4woNRHRAAAAAElFTkSuQmCC",
      npc_dwarf_grey_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQklEQVR4nGNgIBP8R8NYwX8vUxsUzIBFMYYiXIr/O+mbYcUYCr9+//VfRVIebhKIDRLDUJiSkoIVk60QrBgHJg0AAIrsWQuZyZ2qAAAAAElFTkSuQmCC",
      npc_dwarf_hair_buns: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVklEQVR4nGNgIBP8R8NYwX8tRXkUzIBF8X81OZn/ilKSYBqZzYCmGCw4JTsarhDGxlD49fsvsOC8omQwRhZDUbisLBOuCIZBYhgK0RUhm4zhIRyYNAAAK2NaB/Me8/sAAAAASUVORK5CYII=",
      npc_dwarf_purple_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8bw8D/LqYRYAxiY1P8/+TEQqyYAU3x/z2tWVgxhsKv33+BBZFNgomhKIS5DR2TrRCsGAcmDQAAxtNi2UvD/ZAAAAAASUVORK5CYII=",
      npc_dwarf_red_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXUlEQVR4nGNgIBP8R8NYwf//DyT+/3cqhOAHElgV/y8urv///zwrCi4ursdQDJEEmYiMz7NiKpxiZvXfUEnr/7npBWAMYoPEsCqEKQLhDdUR/5uNTchXCFaMA5MGAHoVbT+3iic1AAAAAElFTkSuQmCC",
      npc_dwarf_short_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX91DQ0UzIBF8f9trXlYMQOa4v9rGjKwYgyFX7//AgsimwQTQ1F4oKsEw40gMQyFIFOUlJVRMDY3ghXjwKQBAAoPYHs6ybo9AAAAAElFTkSuQmCC",
      npc_farmer_gill: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWUlEQVR4nGNgIBP8R8NYwf+bW0v+b53gD8cMOBT/X2cfgYIZsChEMQmfqf/PXrr1X0Je///rLS1gDGKDxLAq/LS/E67wZF/G/2XrdmFXCFOETyFYMQ5MGgAAx9NujhmsqqEAAAAASUVORK5CYII=",
      npc_fire_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf8jtqZwvNJMH6tiFEX4FP//v5EDK8ZQ+PX7r/8WQuz/1+YFgjGIDRLDULi9LAKuCIZBYhgKJ+nJYcVYPYQDkwYAY/ZlGR1JAIkAAAAASUVORK5CYII=",
      npc_forge_mother: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8x4FRwP+vzy+AJSKd7MEYWQxF4avbJ8EYphDGx1D49fsvTBOhYigKfS0s/l9dPAsFg8SwKpyYkAVXBGLjVPj/POv//x+0Ifg8K1aFYMXEBA9BAACWKnGnkFHGrQAAAABJRU5ErkJggg==",
      npc_goblin_goggles: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNkQAX/0fiMGAyQIhMPGxRVZ3YcgathwqUIBKBi/2Gq//tMzWDw4HBkwAZ2/NjPsCV7Btzq/1+//2LQ1dFkSMgoBQssmNHNcPnKdQZuTjawgXCFTd0zsJpYV5oBVsgCEzj+7wRWhTAA8wwcPNt2A4zRAUrw4DAMWQ1hAADlHCXxWLGl2AAAAABJRU5ErkJggg==",
      npc_goblin_mad_scientist: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAV0lEQVR4nGNgIBP8R8NYwX/PzoT/qpZGYAxiY1P8//8DCayYAU3x/7OXboEFkRXAxFAUfv3+67+SsvL//+dZwRjEBolhKIQpQMcYCkGOx4axeggHJg0AAFKzbFf/ov6kAAAAAElFTkSuQmCC",
      npc_gold_guardian: xC,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: qC,
      npc_jackal_priest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdklEQVR4nGNgQID/UIyVzwQT1NTUZBAWFoYrALFBYjDFjDCF/zdyMGADjP4/wBQLTODVVXkGh8UwCyDgQOw/BgaGmyhWg8GZcxexsjEUmhjpM3z79g2MQWxkALcaBP79/cvAwc4OZyO8gGYiPoDQghqGuNQQBgAoCCX1U3QMRQAAAABJRU5ErkJggg==",
      npc_minotaur: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAaklEQVR4nGNgIAP8R6KR2Sjg/9fnF8AKMgJ8wBhZDEXhq9snwRimEMbHUPj1+6//DBYBCBMtAiBi6ApBkhMTsv5fXTwLjEHsODc37Ar/n2eFKwSxcSp8sGHO//8ftMEYxMamEKwYByYNAABmXHNFjN9ucgAAAABJRU5ErkJggg==",
      npc_minotaur_elder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAg0lEQVR4nGNgIBIwIrH/41PDBFP09fkFMKMuJxWMQQAq9h9ZIcPXLz8ZXt0+CTcGxAaJwQBcIbeMIYOYqjlcAsQGiaG78X9ZajxDvJ01iuMWHjrK0DV7IVgd3EQQ2LMX4k50NgiwIHPy8mczMCiqgdlaOrcYyqdFYVgN9x0WgKyGMAAArq0oYNR0jFIAAAAASUVORK5CYII=",
      npc_minotaur_warrior: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAjUlEQVR4nGNkQAX/0fiMGAyQooWVjiiq4tv3o6th+P/q9sn//z9oo+BXt0/+h9nCgmLE/VuoFvMgmHCF3DKGDIycvxmq3XzA/G137jHwcediKuwLDme4ungWXCKKgYFh3fLtDAcvQ/hMyDbt2XsBKxtF4Y8/vxn8A4wYuHmZwBjEBolhDR5Un2BVQxgAAJW+Nj/Gsfy4AAAAAElFTkSuQmCC",
      npc_monster_hunter_lorenzo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH9NLa3/ru5eYBoZM6AphkvsrU0BY5wKv37/9d/awAauEMQGiWEoPNmaDVcEw7PigjAVIlsHw3gVIrsRm0KwYmKChyAAAIfVZAdaM2LxAAAAAElFTkSuQmCC",
      npc_npc_pig_head: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4/3Lyjv9fe3bCJMHsl5N3YCj+/3/HfQjecAWOX2JVuOHKfwZ1U7giEBunQpB1yBinwkJta7giEBurwrOXbv3/+v0XCgaJYfU5DkwaAADzDIUDTIstKgAAAABJRU5ErkJggg==",
      npc_painter_spencer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR42mNgIBIwovH/45JHVvj/XZc7w+/vfxme3GViYGBgYDBetAuuBqbw/+MKB6xWynYcYGBgYGCEK/z6/ReDsoYpg5OsMAMDAwPDvsdvGe7eOM3AzcmGqjDFyZPh26+fKKZ9+/mDYcPpYwwMDAyMTMT6Gq4Q3TR8wfOfyCDEDwAFFSX0ZxYXtAAAAABJRU5ErkJggg==",
      npc_pig: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARklEQVR4nGNgIAP8x4FRwP/3x87A8ds9R+CYAU0xiiQMP1y0FlOhu7YJhkKQGFYTQSYgY5xWg0yAKYKxyXYjWDExwUMQAABoKIoUBfmEPAAAAABJRU5ErkJggg==",
      npc_pig_napoleon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoAD8h2K84L++ofF/V3dvvIr/gxRtszH9//X7LzCbAYvi///Ps/6Xk5dHwSAxdMX//2+48p9B3RRMw9gvJ+/ArvBrz04UjFNhobY1XBGIjU0hWDEOTBoAAIrnYG/Xae9eAAAAAElFTkSuQmCC",
      npc_pig_worker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIAP8R8NYwf/YhDQ4dnb1xKnhP0gSHesbGmMo/v9/w5X/DOqmYBrGfjl5B3aFhdrW/7/27ARjEBunQpAEOsZQGGLn+L8oKvD/1++/wBjEBolh9RAOTBoAAGcEbivle0KRAAAAAElFTkSuQmCC",
      npc_piggy_banker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXElEQVR4nGNgIBP8R8NYwX9Xd+//2jq6cMyAQ/F/OXn5//8fSPz/f54VzGbAohAsgQ2jK/7/f8OV/wzqpmAaxn45eQd2hV97dqJgnAoLta3hikBsbArBinFg0gAAgophxWZsQvAAAAAASUVORK5CYII=",
      npc_portal_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg==",
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: aC,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: VC,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: jC,
      quest_talk: lC,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: LC,
      watermelon: dC
    };

    function WC(DD, CD) {
      const cD = document.createElement("img");
      return cD.className = CD, cD.src = DD, cD.alt = "", cD.draggable = !1, cD
    }

    function sC(DD) {
      var CD;
      const cD = null !== (CD = YC[DD]) && void 0 !== CD ? CD : DD.startsWith("npc_") ? JC : LC;
      if ("portal" !== DD) return WC(cD, "SkyblockMapIcon");
      const ID = document.createElement("span");
      ID.className = "SkyblockMapIcon Portal";
      const pD = document.createElement("span");
      return pD.className = "SkyblockMapIconTint", pD.style.maskImage = pD.style.webkitMaskImage = `url("${zC}")`, ID.append(WC(cD, "SkyblockMapIconLayer"), pD, WC(zC, "SkyblockMapIconLayer SkyblockMapIconShade")), ID
    }
    var EC = cD(37885),
      eC = cD(4095);
    const uC = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function hC(DD) {
      const CD = new eC.f(DD);
      return {
        radius: 45,
        squareness: 3,
        wobbles: uC.map((DD => {
          let {
            lobes: cD,
            amount: ID
          } = DD;
          return {
            lobes: cD[Math.floor(CD.next() * cD.length)],
            amount: ID[0] + CD.next() * (ID[1] - ID[0]),
            phase: 2 * CD.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function rC(DD) {
      let {
        radius: CD,
        squareness: cD,
        wobbles: ID,
        samples: pD
      } = DD;
      const iD = [];
      for (let fD = 0; fD < pD; fD++) {
        const DD = 2 * Math.PI * fD / pD,
          bD = Math.cos(DD),
          QD = Math.sin(DD),
          wD = CD * (Math.abs(bD) ** cD + Math.abs(QD) ** cD) ** (-1 / cD) * ID.reduce(((CD, cD) => {
            let {
              lobes: ID,
              amount: pD,
              phase: iD
            } = cD;
            return CD + pD * Math.sin(ID * DD + iD)
          }), 1);
        iD.push(`${(50+wD*bD).toFixed(2)} ${(50+wD*QD).toFixed(2)}`)
      }
      return `M${iD.join("L")}Z`
    }
    const AC = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class FC {
      constructor() {
        this.compassSpacing = 1, this.compassSize = {
          trackHalfWidth: 0,
          screenHalfWidth: 0
        }, this.compass = null, this.terrain = null, this.searchAreaPath = {
          seed: "",
          d: ""
        }, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
          width: 0,
          height: 0
        }, this.waypointInset = {
          x: 8,
          top: 8,
          bottom: 8
        }, this.viewport = {
          width: 0,
          height: 0
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Lt = !1, this.mountCompass = DD => {
          var CD;
          if (null === (CD = this.stopLayout) || void 0 === CD || CD.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !DD || this.Lt) return;
          const cD = DD.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: DD,
            track: cD,
            label: DD.querySelector(".SkyblockCompassLabel")
          }, cD.replaceChildren();
          for (let pD = 0; pD < 4; pD++) {
            const DD = document.createElement("span");
            DD.className = "SkyblockCompassCardinal", cD.appendChild(DD), this.cardinals.push(DD)
          }
          const ID = (0, EC.d)(AC, [DD], this.layout);
          this.stopLayout = () => {
            ID(), cD.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = DD => {
          this.terrain = this.Lt ? null : DD, this.render(this.frame)
        }, this.mountMinimapSearchArea = DD => {
          this.mountSearchArea("minimap", DD)
        }, this.mountMapSearchArea = DD => {
          this.mountSearchArea("map", DD)
        }, this.mountPlayer = DD => {
          this.player = this.Lt ? null : DD, this.render(this.frame)
        }, this.mountWaypoint = DD => {
          var CD, cD;
          if (null === (CD = this.stopWaypoint) || void 0 === CD || CD.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !DD || this.Lt) return;
          const ID = DD.querySelector(".SkyblockQuestWaypointMarker");
          ID.replaceChildren(sC("quest")), this.markerIcon = "quest", this.waypoint = {
            root: DD,
            marker: ID,
            clip: DD.querySelector(".SkyblockQuestWaypointTextClip"),
            text: DD.querySelector(".SkyblockQuestWaypointText"),
            label: DD.querySelector(".SkyblockQuestWaypointLabel"),
            distance: DD.querySelector(".SkyblockQuestWaypointDistance"),
            hint: DD.querySelector(".SkyblockQuestWaypointHint")
          };
          const pD = () => {
              this.waypointMarkerSize = {
                width: ID.offsetWidth,
                height: ID.offsetHeight
              }, this.waypointInset = {
                x: ID.offsetWidth / 2 + 8,
                top: ID.offsetHeight + 8,
                bottom: 8
              }
            },
            iD = new ResizeObserver((() => {
              pD(), this.render(this.frame)
            }));
          iD.observe(ID, {
            box: "border-box"
          });
          const fD = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", fD), null === (cD = window.visualViewport) || void 0 === cD || cD.addEventListener("resize", fD), this.stopWaypoint = () => {
            var DD;
            iD.disconnect(), window.removeEventListener("resize", fD), null === (DD = window.visualViewport) || void 0 === DD || DD.removeEventListener("resize", fD)
          }, fD(), pD(), this.render(this.frame)
        }, this.mountWaypointOrigin = DD => {
          var CD;
          if (null === (CD = this.stopWaypointOrigin) || void 0 === CD || CD.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = DD && !this.Lt ? Number(DD.dataset.notificationToken) : null, DD && !this.Lt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const CD = {
              nameKey: DD.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = CD;
            const cD = () => {
                const cD = DD.getBoundingClientRect();
                CD.x = (cD.left + cD.width / 2) / window.innerWidth * 100, CD.y = (cD.top + cD.height / 2) / window.innerHeight * 100
              },
              ID = new ResizeObserver(cD);
            ID.observe(DD.parentElement), ID.observe(DD), window.addEventListener("resize", cD), this.stopWaypointOrigin = () => {
              ID.disconnect(), window.removeEventListener("resize", cD)
            }, cD()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const DD = this.compass.root,
            CD = getComputedStyle(DD),
            cD = getComputedStyle(document.documentElement),
            ID = parseFloat(cD.fontSize),
            pD = parseFloat(CD.getPropertyValue("--compass-icon-size")) * ID,
            iD = "1" === CD.getPropertyValue("--compass-fit-top").trim(),
            fD = iD ? 1 : 8,
            bD = Array.from(document.querySelectorAll(AC), (DD => {
              var CD;
              return (null !== (CD = DD.querySelector(".MiddleTextTop")) && void 0 !== CD ? CD : DD).getBoundingClientRect()
            })).filter((DD => DD.width > 0 && DD.height > 0));
          let QD = (parseFloat(cD.getPropertyValue("--notchTop")) || 0) + fD,
            wD = "";
          if (iD) {
            const CD = window.innerWidth / 2,
              cD = DD.getBoundingClientRect().height,
              iD = [QD, ...bD.map((DD => Math.max(QD, DD.bottom + fD)))].sort(((DD, CD) => DD - CD));
            for (const DD of iD) {
              let iD = CD - 8;
              for (const ID of bD) ID.bottom + fD <= DD || ID.top >= DD + cD + fD || (iD = Math.min(iD, ID.right <= CD ? CD - ID.right - 8 : ID.left - CD - 8));
              const SD = 2 * iD - pD;
              if (SD >= 16 * ID) {
                wD = `${SD}px`, QD = DD;
                break
              }
            }
          }
          DD.style.maxWidth !== wD && (DD.style.maxWidth = wD);
          const SD = DD.getBoundingClientRect(),
            BD = this.compassSize.trackHalfWidth;
          if (SD.width > 0) {
            const DD = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: DD.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * pD / DD.width
          }
          if (!wD)
            for (const yD of bD) yD.right > SD.left - 8 && yD.left < SD.right + 8 && (QD = Math.max(QD, yD.bottom + fD));
          DD.style.top = `${QD}px`, this.compassSize.trackHalfWidth !== BD && this.render(this.frame)
        }
      }
      mountSearchArea(DD, CD) {
        this.searchAreas[DD] = this.Lt ? null : CD, this.render(this.frame)
      }
      render(DD) {
        if (this.Lt) return;
        if (this.frame = DD, this.compass && (Dc(this.compass.root, !DD), DD)) {
          const CD = this.compassSize.trackHalfWidth / 50;
          DD.compass.cardinals.forEach(((DD, cD) => {
            const ID = this.cardinals[cD];
            ID.textContent !== DD.name && (ID.textContent = DD.name), Dc(ID, DD.hidden), ID.style.translate = DD.left * CD + "px"
          }));
          const cD = new Set;
          DD.compass.markers.forEach(((ID, pD) => {
            var iD;
            cD.add(ID.id);
            let fD = this.markers.get(ID.id);
            fD || (fD = document.createElement("span"), fD.className = "SkyblockCompassMarker", this.markers.set(ID.id, fD), this.compass.track.appendChild(fD)), fD.dataset.icon !== ID.icon && (fD.dataset.icon = ID.icon, fD.replaceChildren(sC(ID.icon))), fD.style.color = null !== (iD = ID.colour) && void 0 !== iD ? iD : "", fD.style.translate = ID.left * CD + "px", fD.style.zIndex = String(DD.compass.markers.length - pD), fD.title !== ID.name && (fD.title = ID.name)
          }));
          for (const [DD, ID] of this.markers) cD.has(DD) || (ID.remove(), this.markers.delete(DD));
          this.compass.label.textContent !== DD.compass.label && (this.compass.label.textContent = DD.compass.label)
        }
        this.terrain && (Dc(this.terrain, !(null !== DD && void 0 !== DD && DD.minimap)), null !== DD && void 0 !== DD && DD.minimap && (this.terrain.style.transform = DD.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", DD.minimap.iconRotation)));
        const CD = null === DD || void 0 === DD ? void 0 : DD.searchArea;
        for (const cD of [this.searchAreas.minimap, this.searchAreas.map])
          if (cD && (Dc(cD, !CD), CD)) {
            if (this.searchAreaPath.seed !== CD.shapeSeed && (this.searchAreaPath = {
                seed: CD.shapeSeed,
                d: rC(hC(CD.shapeSeed))
              }), cD.dataset.shapeSeed !== CD.shapeSeed) {
              cD.dataset.shapeSeed = CD.shapeSeed;
              for (const DD of cD.querySelectorAll("path")) DD.setAttribute("d", this.searchAreaPath.d)
            }
            cD.style.left = `${CD.left}%`, cD.style.top = `${CD.top}%`, cD.style.width = `${CD.width}%`, cD.style.height = `${CD.height}%`
          } if (this.player && (Dc(this.player, !(null !== DD && void 0 !== DD && DD.player) || DD.player.hidden), null !== DD && void 0 !== DD && DD.player && (this.player.style.left = `${DD.player.left}%`, this.player.style.top = `${DD.player.top}%`, this.player.style.setProperty("--map-player-rotation", DD.player.rotation))), this.waypoint) {
          const {
            root: CD,
            marker: cD,
            clip: ID,
            text: pD,
            label: iD,
            distance: fD,
            hint: bD
          } = this.waypoint, QD = !(null !== DD && void 0 !== DD && DD.waypoint) || null !== DD.waypoint.popupToken && DD.waypoint.popupToken !== this.waypointOriginToken;
          Dc(CD, QD);
          let wD = 1;
          const SD = this.waypointLaunch;
          if (!QD && SD && DD.waypoint.nameKey === SD.nameKey) {
            const DD = performance.now();
            SD.startedAt ??= DD, wD = Math.min(1, Math.max(0, (DD - SD.startedAt - 450) / 1e3)), cD.style.opacity = String(Math.min(1, (DD - SD.startedAt) / 150)), 1 === wD && (this.waypointLaunch = null)
          } else cD.style.opacity = "", SD && null !== SD.startedAt && (this.waypointLaunch = null);
          if (CD.classList.toggle("Launching", wD < 1), null !== DD && void 0 !== DD && DD.waypoint) {
            const CD = this.waypointInset,
              QD = "quest_talk" === DD.waypoint.markerIcon ? function(DD, CD, cD) {
                if (!DD.text || null === DD.blockHeight || 0 === DD.nearness) return DD;
                const ID = DD.blockHeight / 100 * cD.height,
                  pD = -DD.nearness * (Cc * ID + CD.width / 2),
                  iD = DD.nearness * (cc * ID + CD.height / 2);
                return {
                  ...DD,
                  text: {
                    x: DD.text.x + pD / cD.width * 100,
                    y: DD.text.y + iD / cD.height * 100
                  }
                }
              }(DD.waypoint, this.waypointMarkerSize, this.viewport) : DD.waypoint,
              BD = (0, HC.e)(QD, CD, this.viewport),
              yD = wD * wD * (3 - 2 * wD),
              MD = wD < 1 ? SD.x + (BD.x - SD.x) * yD : BD.x,
              tD = wD < 1 ? SD.y + (BD.y - SD.y) * yD : BD.y;
            cD.style.translate = `${MD}vw ${tD}vh`, ID.style.clipPath = `inset(${CD.top}px ${CD.x}px ${CD.bottom}px)`, Dc(pD, wD < 1 || !DD.waypoint.text), pD.style.opacity = String(1 - DD.waypoint.nearness), DD.waypoint.text && (pD.style.translate = `${DD.waypoint.text.x}vw ${DD.waypoint.text.y}vh`), iD.textContent !== DD.waypoint.name && (iD.textContent = DD.waypoint.name), this.markerIcon !== DD.waypoint.markerIcon && (this.markerIcon = DD.waypoint.markerIcon, cD.replaceChildren(sC(this.markerIcon))), fD.textContent !== DD.waypoint.distance && (fD.textContent = DD.waypoint.distance), Dc(bD, null === DD.waypoint.hint), null !== DD.waypoint.hint && bD.textContent !== DD.waypoint.hint && (bD.textContent = DD.waypoint.hint)
          }
        }
      }
      dispose() {
        var DD, CD;
        this.mountWaypointOrigin(null), this.render(null), null === (DD = this.stopLayout) || void 0 === DD || DD.call(this), this.stopLayout = null, null === (CD = this.stopWaypoint) || void 0 === CD || CD.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Lt = !0
      }
    }

    function Dc(DD, CD) {
      DD.hidden !== CD && (DD.hidden = CD)
    }
    const Cc = .55,
      cc = .6;
    const Ic = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class pc {
      constructor(DD, CD, cD, ID) {
        this.map = DD, this.quests = CD, this.compass = cD, this.display = new FC, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Lt = !1, this.snapshot = null, this.texts = new Map, this.translate = ID
      }
      setTranslator(DD, CD) {
        this.translate = DD, this.locale = CD, this.metresFormat = new Intl.NumberFormat(CD), this.texts.clear()
      }
      translateCached(DD, CD) {
        const cD = void 0 === CD ? DD : `${DD} ${CD}`;
        let ID = this.texts.get(cD);
        return void 0 === ID && (this.texts.size >= 500 && this.texts.clear(), ID = this.translate(DD, void 0 === CD ? void 0 : {
          distance: CD
        }), this.texts.set(cD, ID)), ID
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(DD, CD, cD) {
        if (this.Lt) return;
        if (!DD) return this.snapshot = null, void this.display.render(null);
        const ID = this.map.getSnapshot().map,
          QD = cD.cameraHeading,
          wD = {
            ...this.display.compassSize,
            tanHalfFovX: cD.tanHalfFovX,
            pitch: cD.cameraPitch
          },
          SD = [];
        if (ID)
          for (const pD of this.compass.frame(DD, QD, CD)) {
            const DD = ZD(pD.offset, wD);
            null !== DD && SD.push({
              ...pD,
              left: DD
            })
          }
        const BD = function(DD, CD) {
            const cD = [],
              ID = DD => "quest" === DD.kind ? DD.distance - 1 : DD.distance,
              pD = [...DD].sort(((DD, CD) => ID(DD) - ID(CD) || DD.id.localeCompare(CD.id)));
            for (const iD of pD) {
              let DD = !1;
              if ("quest" !== iD.kind)
                for (const ID of cD)
                  if (Math.abs(ID.left - iD.left) < CD) {
                    DD = !0;
                    break
                  } DD || cD.push(iD)
            }
            return cD
          }(SD, this.display.compassSpacing),
          yD = function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              cD = null;
            for (const ID of DD) Math.abs(ID.offset) <= CD && (!cD || ID.distance < cD.distance || ID.distance === cD.distance && Math.abs(ID.offset) < Math.abs(cD.offset)) && (cD = ID);
            return cD
          }(BD),
          MD = DD => {
            var CD;
            return null !== (CD = DD.displayName) && void 0 !== CD ? CD : this.translateCached(DD.nameKey)
          },
          tD = {
            compass: {
              markers: BD.map((DD => ({
                id: DD.id,
                icon: DD.icon,
                colour: DD.colour,
                name: MD(DD),
                left: DD.left
              }))),
              cardinals: fD.map((DD => {
                let {
                  name: CD,
                  bearing: cD
                } = DD;
                const ID = ZD(pD.e.computeShortestRotation(QD, cD), wD);
                return {
                  name: CD,
                  left: null !== ID && void 0 !== ID ? ID : 0,
                  hidden: null === ID
                }
              })),
              label: yD ? `${MD(yD)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",nD(yD.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== ID && void 0 !== ID && ID.background) {
          const CD = DD[0] - ID.mapOrigin[0],
            cD = DD[2] - ID.mapOrigin[2],
            {
              rotation: pD,
              transform: fD
            } = function(DD, CD, cD, ID) {
              const [pD, fD] = bD(DD, CD, ID), QD = iD - cD;
              return {
                rotation: QD,
                transform: `rotate(${QD}rad) translate(-${pD}%, -${fD}%)`
              }
            }(CD, cD, QD, ID.background.bounds);
          tD.minimap = {
            transform: fD,
            iconRotation: -pD + "rad"
          };
          const [wD, SD] = bD(CD, cD, ID.background.bounds);
          tD.player = {
            left: wD,
            top: SD,
            hidden: wD < 0 || SD < 0 || wD > 100 || SD > 100,
            rotation: -pD + "rad"
          }
        }
        const {
          waypoint: oD
        } = this.quests.getSnapshot();
        if ("search" === (null === oD || void 0 === oD ? void 0 : oD.questMarkerIcon) && null !== ID && void 0 !== ID && ID.background) {
          const {
            bounds: DD
          } = ID.background, [CD, cD] = bD(oD.position[0] - ID.mapOrigin[0], oD.position[2] - ID.mapOrigin[2], DD);
          tD.searchArea = {
            left: CD,
            top: cD,
            width: 6400 / (DD.mapMaxX - DD.mapMinX),
            height: 6400 / (DD.mapMaxZ - DD.mapMinZ),
            shapeSeed: oD.nameKey
          }
        }
        const vD = this.quests.getNotificationSnapshot(),
          ND = "completion" === (null === vD || void 0 === vD ? void 0 : vD.phase) && !PC(vD.kind);
        if (oD && !ND) {
          const CD = Math.hypot(...oD.position.map(((CD, cD) => CD - DD[cD]))),
            ID = Math.round(CD),
            pD = "talk" === oD.questMarkerIcon ? Math.min(1, Math.max(0, (10 - CD) / 5)) : 0,
            iD = cD.projectWorldPosToViewport(oD.position),
            fD = iD && cD.projectWorldPosToViewport([oD.position[0], oD.position[1] - 1, oD.position[2]]);
          tD.waypoint = {
            ...cD.projectWorldPosToScreenPos(oD.position),
            text: iD,
            nearness: pD * pD * (3 - 2 * pD),
            blockHeight: iD && fD ? fD.y - iD.y : null,
            name: this.translateCached(oD.nameKey),
            nameKey: oD.nameKey,
            markerIcon: oD.questMarkerIcon ? Ic[oD.questMarkerIcon] : "quest",
            popupToken: (null === vD || void 0 === vD ? void 0 : vD.waypointNameKey) === oD.nameKey ? vD.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(ID)),
            hint: "search" === oD.questMarkerIcon && Math.hypot(oD.position[0] - DD[0], oD.position[2] - DD[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = tD, this.display.render(tD)
      }
      dispose() {
        this.Lt = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const ic = "skyblockSkillsView";
    class fc extends BD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          cD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD => DD,
          ID = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          pD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD => DD;
        super(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = CD, this.translate = cD, this.locale = ID, this.itemName = pD, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, this.locale = CD, this.itemName = cD, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(DD) {
        let CD = this.skillText.get(DD);
        return CD || (CD = {
          label: this.translate(`skyblockGame:${DD}`),
          description: this.translate(`skyblockGame:${DD}Description`)
        }, this.skillText.set(DD, CD)), CD
      }
      sources(DD) {
        if ("mining" === DD || "fishing" === DD) return this.buildSources(DD);
        let CD = this.sourceText.get(DD);
        return CD || (CD = this.buildSources(DD), this.sourceText.set(DD, CD)), CD
      }
      buildSources(DD) {
        const CD = this.translate;
        return "exploration" === DD ? [CD("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), CD("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === DD ? [CD("skyblockGame:logSource", {
          xp: this.number(MC["Maple Log"])
        })] : "combat" === DD ? [CD("skyblockGame:creatureKillSource"), CD("skyblockGame:noEnvironmentalXp")] : "farming" === DD ? [CD("skyblockGame:cropSource", {
          xp: this.number(oC["Wheat|FreshlyGrown"])
        }), CD("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), CD("skyblockGame:noYoungCropXp")] : Object.entries("mining" === DD ? ZC : vC).map((DD => {
          let [cD, ID] = DD;
          return CD("skyblockGame:itemXpSource", {
            item: this.itemName(cD),
            xp: this.number(ID)
          })
        }))
      }
      number(DD) {
        return DD.toLocaleString(this.locale)
      }
      benefit(DD, CD) {
        const cD = fC(DD, CD);
        return this.translate(cD.translationKey, {
          bonus: this.number(cD.percent)
        })
      }
      kt(DD) {
        if (!this.Lt) {
          if ("snapshot" === DD.kind) this.progress = DD.progress, this.pending.clear(), this.recent = null;
          else if ("award" === DD.kind && this.progress) {
            const {
              award: CD
            } = DD;
            this.progress = {
              ...this.progress,
              [CD.skill]: CD.after
            };
            for (const [DD, ID] of this.pending) ID.skill === CD.skill && this.pending.delete(DD);
            const cD = CD.after.level > CD.before.level;
            this.recordGain(CD.skill, CD.amount, cD ? ++this.nextLevelUpToken : null), cD && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: CD.skill,
              beforeLevel: CD.before.level,
              level: CD.after.level
            })
          } else {
            if ("rejectBlock" === DD.kind) return void this.rejectBlock(DD.position);
            if ("open" === DD.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(DD, CD, cD) {
        if (!this.progress || this.Lt || cD) return;
        const ID = function(DD, CD) {
          const cD = DD.split("|")[0];
          return "Air" === CD || CD === `Barkless ${DD}` ? Object.hasOwn(MC, cD) ? {
            skill: "foraging",
            amount: MC[cD]
          } : "Air" !== CD ? null : Object.hasOwn(ZC, DD) ? {
            skill: "mining",
            amount: ZC[DD]
          } : SC(DD) ? {
            skill: "farming",
            amount: 10
          } : yC(DD) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(oC, DD) ? {
            skill: "farming",
            amount: oC[DD]
          } : Object.hasOwn(TD, DD) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(CD, "Air");
        if (!ID) return;
        const pD = DD.join(",");
        if (this.pending.has(pD)) return;
        const iD = this.predictedProgress(ID.skill).totalXp + ID.amount;
        Number.isSafeInteger(iD) && (this.pending.set(pD, {
          ...ID,
          expires: this.now() + 2e3
        }), this.recordGain(ID.skill, 0), this.emit())
      }
      rejectBlock(DD) {
        this.pending.delete(DD.join(",")) && this.emit()
      }
      wy() {
        if (this.Lt) return;
        let DD = !1;
        for (const [CD, cD] of this.pending) cD.expires <= this.now() && (this.pending.delete(CD), DD = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, DD = !0), DD && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(DD, CD) {
        var cD, ID;
        let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iD = (null === (cD = this.recent) || void 0 === cD ? void 0 : cD.skill) === DD && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          fD = (null === (ID = this.recent) || void 0 === ID ? void 0 : ID.skill) === DD && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: DD,
          confirmed: iD + CD,
          expires: this.now() + 3e3,
          levelUpToken: null !== pD && void 0 !== pD ? pD : fD
        }
      }
      pendingXp(DD) {
        let CD = 0;
        for (const cD of this.pending.values()) cD.skill === DD && (CD += cD.amount);
        return CD
      }
      predictedProgress(DD) {
        const CD = this.progress[DD],
          cD = this.pendingXp(DD);
        return cD ? QC(CD.totalXp + cD, DD) : CD
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var DD, CD, cD;
        const ID = this.progress ? hD.map((DD => {
            const CD = this.predictedProgress(DD);
            return {
              ...this.text(DD),
              icon: NC[DD],
              benefit: this.benefit(DD, CD.level),
              sources: this.sources(DD),
              id: DD,
              selected: DD === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(CD.level)
              }),
              xp: null === CD.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(CD.xpIntoLevel),
                target: this.number(CD.xpForNextLevel)
              }),
              percent: null === CD.xpForNextLevel ? 100 : Math.min(100, CD.xpIntoLevel / CD.xpForNextLevel * 100)
            }
          })) : [],
          pD = ID.find((DD => {
            var CD;
            return DD.id === (null === (CD = this.recent) || void 0 === CD ? void 0 : CD.skill)
          })),
          iD = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: ID,
          detail: null !== (DD = ID.find((DD => DD.selected))) && void 0 !== DD ? DD : null,
          overallLevel: this.progress ? hD.reduce(((DD, CD) => DD + this.predictedProgress(CD).level), 0) : null,
          hud: pD && iD > 0 ? {
            skill: pD,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(iD)
            }),
            levelUpToken: null !== (CD = null === (cD = this.recent) || void 0 === cD ? void 0 : cD.levelUpToken) && void 0 !== CD ? CD : null,
            colour: XC(pD.id)
          } : null
        }
      }
    }
    const bc = Math.max(1600, 600, 950) + 400,
      Qc = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      wc = "skyblockQuestsView",
      Sc = "skyblockQuestNotificationView";
    class Bc extends BD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          fD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(DD, ID, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = CD, this.translate = cD, this.now = pD, this.locale = iD, this.publishNotification = fD, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
          enabled: !1,
          open: !1,
          active: [],
          completed: [],
          completedExpanded: !1,
          detail: null,
          tracked: null,
          trackedStepPulse: 0,
          waypoint: null,
          compassTarget: null
        }, this.getNotificationSnapshot = () => this.notificationSnapshot, this.showTracked = () => {
          var DD, CD;
          this.selected = null !== (DD = null === (CD = this.authoritative) || void 0 === CD ? void 0 : CD.trackedQuestId) && void 0 !== DD ? DD : null, this.show()
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const DD = this.snapshot.detail;
          !this.Lt && null !== DD && void 0 !== DD && DD.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(DD.id), this.emit())
        }, this.viewDialogue = () => {
          const DD = this.snapshot.detail;
          var CD;
          DD && (null === (CD = this.onViewDialogue) || void 0 === CD || CD.call(this, DD.id))
        }, this.notifications = new nC(pD, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var DD, CD;
        return null !== (DD = null === (CD = this.authoritative) || void 0 === CD ? void 0 : CD.trackedQuestId) && void 0 !== DD ? DD : null
      }
      notify(DD) {
        !this.Lt && this.notifications.enqueue(DD) && this.emitNotification()
      }
      setNotificationsHeld(DD) {
        (this.notifications.setHeld(DD) || DD) && this.emitNotification()
      }
      wy() {
        var DD, CD;
        if (this.Lt) return;
        this.notifications.wy() && this.emitNotification();
        let cD = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, cD = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, cD = !0);
        const ID = yc(this.authoritative);
        null !== ID && void 0 !== ID && null !== (DD = ID.questClock) && void 0 !== DD && DD.running && this.clockText(ID) !== (null === (CD = this.snapshot.tracked) || void 0 === CD ? void 0 : CD.clock) && (cD = !0), cD && this.emit()
      }
      setTranslator(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = DD, this.locale = CD, this.emitNotification(), this.emit()
      }
      kt(DD) {
        if (!this.Lt)
          if ("completion" === DD.kind) this.notify(DD.questCompletion);
          else if ("landmark" === DD.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: DD.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === DD.kind) {
          var CD, cD, ID;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: DD.npcNoteTitleKey,
            textKey: DD.npcNoteTextKey,
            params: null !== (CD = DD.npcNoteParams) && void 0 !== CD ? CD : {},
            nameKeys: null !== (cD = DD.npcNoteNameKeys) && void 0 !== cD ? cD : {},
            iconItem: null !== (ID = DD.npcNoteIconItem) && void 0 !== ID ? ID : null
          })
        } else if ("open" === DD.kind) this.show();
        else if ("guidance" === DD.kind) this.waypoint = DD.waypoint, this.compassTarget = DD.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === DD.kind) {
          this.authoritative = DD.snapshot, this.notifications.wy() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const CD = this.trackedStepPulse;
          this.updateTrackedStepPulse(DD.snapshot), this.emit(), this.trackedStepPulse > CD && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Lt || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var DD;
        return null !== (DD = this.translateWithIcons) && void 0 !== DD ? DD : this.translate
      }
      clockText(DD) {
        const CD = DD.questClock;
        if (!CD) return null;
        const cD = CD.elapsedMs + (CD.running ? this.now() - this.receivedAt : 0);
        return void 0 === CD.countdownFromMs ? VD(cD, !1) : VD(1e3 * Math.ceil(Math.max(0, CD.countdownFromMs - cD) / 1e3), !1)
      }
      updateTrackedStepPulse(DD) {
        var CD, cD, ID;
        const pD = yc(DD);
        if (!pD) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const iD = DD => pD.subquests.filter((CD => DD(CD.status))).map((DD => DD.id)),
          fD = iD((DD => "completed" === DD || "skipped" === DD)),
          bD = iD((DD => "locked" !== DD)),
          QD = (null === (CD = this.trackedSteps) || void 0 === CD ? void 0 : CD.questId) === pD.id && pD.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (QD) {
          const DD = fD.filter((DD => !QD.finished.has(DD))),
            CD = iD((DD => "active" === DD || "ready" === DD)).filter((DD => !QD.unlocked.has(DD)));
          DD.length > 0 && this.trackedStepPulse++, (DD.length > 0 || CD.length > 0) && (this.trackedChange = {
            finished: new Set(DD),
            unlocked: new Set(CD),
            expiresAt: this.now() + bc
          })
        } else {
          var wD;
          this.trackedStepPulse = (null === (wD = this.trackedSteps) || void 0 === wD ? void 0 : wD.questId) === pD.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: pD.id,
          progress: pD.progress,
          finished: new Set([...null !== (cD = null === QD || void 0 === QD ? void 0 : QD.finished) && void 0 !== cD ? cD : [], ...fD]),
          unlocked: new Set([...null !== (ID = null === QD || void 0 === QD ? void 0 : QD.unlocked) && void 0 !== ID ? ID : [], ...bD])
        }
      }
      entry(DD, CD) {
        var cD, ID;
        const pD = DD.id === (null === (cD = this.authoritative) || void 0 === cD ? void 0 : cD.trackedQuestId),
          iD = this.now() < this.trackAvailableAt,
          fD = this.questTextTranslator(),
          bD = DD.subquests.map((CD => {
            var cD, ID, iD, bD, QD, wD;
            const SD = null !== (cD = CD.handInNpcName) && void 0 !== cD ? cD : DD.giverName,
              BD = this.translate("skyblockGame:progress", {
                current: CD.progress.toLocaleString(this.locale),
                target: CD.target.toLocaleString(this.locale)
              }),
              yD = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: SD ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [CD.status],
              MD = "active" === CD.status || "ready" === CD.status;
            return {
              id: CD.id,
              name: mC(fD, CD.nameKey, CD.nameParams),
              description: mC(fD, CD.descriptionKey, CD.descriptionParams),
              progress: BD,
              status: CD.status,
              statusLabel: yD ? this.translate(yD, {
                npc: SD
              }) : BD,
              iconItem: MD && null !== (ID = CD.questIconItem) && void 0 !== ID ? ID : null,
              barPercent: "active" === CD.status && CD.showsProgressBar ? Math.min(100, 100 * CD.progress / CD.target) : null,
              justFinished: pD && null !== (iD = null === (bD = this.trackedChange) || void 0 === bD ? void 0 : bD.finished.has(CD.id)) && void 0 !== iD && iD,
              justUnlocked: pD && null !== (QD = null === (wD = this.trackedChange) || void 0 === wD ? void 0 : wD.unlocked.has(CD.id)) && void 0 !== QD && QD
            }
          }));
        return {
          id: DD.id,
          name: mC(fD, DD.nameKey, DD.nameParams),
          description: mC(fD, DD.descriptionKey, DD.descriptionParams),
          progress: CD ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: DD.progress.toLocaleString(this.locale),
            target: DD.target.toLocaleString(this.locale)
          }),
          completed: CD,
          tracked: pD,
          selected: DD.id === this.selected,
          canTrack: !CD && !pD && !iD,
          trackLabel: this.translate(pD ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : iD ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== DD.id,
          subquests: bD,
          focusStep: null !== (ID = bD.find((DD => null !== DD.barPercent))) && void 0 !== ID ? ID : null,
          clock: this.clockText(DD)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var DD, CD, cD, ID, pD, iD, fD, bD, QD, wD;
        const SD = [...null !== (DD = null === (CD = this.authoritative) || void 0 === CD ? void 0 : CD.active) && void 0 !== DD ? DD : [], ...null !== (cD = null === (ID = this.authoritative) || void 0 === ID ? void 0 : ID.completed) && void 0 !== cD ? cD : []];
        var BD, yD, MD, tD;
        SD.some((DD => DD.id === this.selected)) || (this.selected = null !== (BD = null !== (yD = null === (MD = this.authoritative) || void 0 === MD ? void 0 : MD.trackedQuestId) && void 0 !== yD ? yD : null === (tD = SD[0]) || void 0 === tD ? void 0 : tD.id) && void 0 !== BD ? BD : null);
        const ZD = null !== (pD = null === (iD = this.authoritative) || void 0 === iD ? void 0 : iD.active.map((DD => this.entry(DD, !1)))) && void 0 !== pD ? pD : [];
        ZD.sort(((DD, CD) => Number(CD.tracked) - Number(DD.tracked)));
        const oD = null !== (fD = null === (bD = this.authoritative) || void 0 === bD ? void 0 : bD.completed.map((DD => this.entry(DD, !0)))) && void 0 !== fD ? fD : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: ZD,
          completed: oD,
          completedExpanded: this.completedExpanded,
          detail: null !== (QD = [...ZD, ...oD].find((DD => DD.selected))) && void 0 !== QD ? QD : null,
          tracked: null !== (wD = ZD.find((DD => DD.tracked))) && void 0 !== wD ? wD : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function yc(DD) {
      var CD;
      return null !== (CD = null === DD || void 0 === DD ? void 0 : DD.active.find((CD => CD.id === DD.trackedQuestId))) && void 0 !== CD ? CD : null
    }
    const Mc = "skyblockDungeonsView";
    class tc extends BD {
      constructor(DD, CD) {
        let cD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          ID = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = CD, this.locale = cD, this.requestEnter = ID, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const DD = this.pickerEntry(),
            CD = null === DD || void 0 === DD ? void 0 : DD.difficulties[this.pageIndex];
          void 0 !== CD && null !== CD.unlockedBoss && (this.close(), this.requestEnter(DD.id, CD.difficulty))
        }
      }
      setTranslator(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = DD, this.locale = CD, this.emit()
      }
      kt(DD) {
        var CD, cD;
        if (!this.Lt) return "open" === DD.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== DD.kind ? "snapshot" === DD.kind && (this.authoritative = DD.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (CD = null === (cD = this.pickerEntry()) || void 0 === cD ? void 0 : cD.difficulties.length) && void 0 !== CD ? CD : 1) - 1)), null === DD.snapshot && this.open ? this.close() : this.emit()) : this.choose(DD.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(DD) {
        var CD;
        const cD = null === (CD = this.authoritative) || void 0 === CD ? void 0 : CD.dungeons.find((CD => CD.id === DD));
        void 0 !== cD ? this.open && this.pickerDungeonId === DD || (this.pickerDungeonId = DD, this.pageIndex = Math.max(0, cD.difficulties.findLastIndex((DD => null !== DD.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${DD}`)
      }
      turnTo(DD) {
        var CD, cD;
        const ID = null !== (CD = null === (cD = this.pickerEntry()) || void 0 === cD ? void 0 : cD.difficulties.length) && void 0 !== CD ? CD : 0;
        DD < 0 || DD >= ID || DD === this.pageIndex || (this.pageIndex = DD, this.emit())
      }
      pickerEntry() {
        var DD, CD;
        return null !== (DD = null === (CD = this.authoritative) || void 0 === CD ? void 0 : CD.dungeons.find((DD => DD.id === this.pickerDungeonId))) && void 0 !== DD ? DD : null
      }
      difficulty(DD) {
        const CD = DD.completions > 0,
          cD = null === DD.bestMs ? null : VD(DD.bestMs);
        return {
          difficulty: DD.difficulty,
          label: this.translate(KD[DD.difficulty]),
          colour: aD[DD.difficulty],
          beaten: CD,
          bestTime: cD,
          completions: DD.completions,
          summary: CD ? [null === cD ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: cD
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: DD.completions.toLocaleString(this.locale)
          })].filter((DD => null !== DD)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(DD) {
        const CD = DD.difficulties.map((DD => this.difficulty(DD))),
          cD = CD.filter((DD => DD.beaten)).length;
        return {
          id: DD.id,
          name: this.translate(DD.nameKey),
          selected: DD.id === this.selected,
          beatenSummary: `${cD} / ${CD.length}`,
          difficulties: CD
        }
      }
      picker() {
        const DD = this.pickerEntry();
        if (null === DD || 0 === DD.difficulties.length) return null;
        const CD = DD.difficulties.map(((CD, cD) => {
          var ID, pD, iD, fD;
          const bD = CD.unlockedBoss,
            QD = null === bD ? this.lockedHint(DD, cD) : null;
          return {
            ...this.difficulty(CD),
            unlocked: null !== bD,
            bossName: null === bD ? null : this.translate(bD.bossNameKey),
            bossMobType: null !== (ID = null === bD || void 0 === bD ? void 0 : bD.bossMobType) && void 0 !== ID ? ID : null,
            bossMobVariation: null !== (pD = null === bD || void 0 === bD ? void 0 : bD.bossMobVariation) && void 0 !== pD ? pD : null,
            lockedHint: null !== (iD = null === QD || void 0 === QD ? void 0 : QD.text) && void 0 !== iD ? iD : null,
            lockedHintHighlight: null !== (fD = null === QD || void 0 === QD ? void 0 : QD.highlight) && void 0 !== fD ? fD : null,
            current: cD === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(DD.nameKey),
          pages: CD,
          page: CD[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < CD.length - 1
        }
      }
      lockedHint(DD, CD) {
        var cD, ID, pD;
        if (0 === CD && "number" === typeof DD.combatLevelLock) {
          const CD = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: DD.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: CD,
            colour: XC("combat"),
            icon: NC.combat
          })
        }
        const iD = null !== (cD = null === (ID = this.authoritative) || void 0 === ID ? void 0 : ID.dungeons) && void 0 !== cD ? cD : [],
          fD = CD > 0 ? DD : null !== (pD = iD[iD.indexOf(DD) - 1]) && void 0 !== pD ? pD : null,
          bD = CD > 0 ? DD.difficulties[CD - 1] : null === fD || void 0 === fD ? void 0 : fD.difficulties[0];
        if (null === fD || void 0 === bD) return null;
        const QD = this.translate(fD.nameKey);
        if (null === bD.unlockedBoss) return fD === DD ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, bD.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: QD
        }, bD.difficulty);
        const wD = this.translate(bD.unlockedBoss.bossNameKey);
        return fD === DD ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: wD
        }, bD.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: wD,
            dungeon: QD
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(DD, CD, cD) {
        return this.hintHighlighting(DD, CD, "difficulty", {
          name: this.translate(KD[cD]),
          colour: aD[cD],
          icon: null
        })
      }
      hintHighlighting(DD, CD, cD, ID) {
        let {
          name: pD,
          colour: iD,
          icon: fD
        } = ID;
        const bD = this.translate(DD, {
          ...CD,
          [cD]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(DD, {
            ...CD,
            [cD]: pD
          }),
          highlight: 2 === bD.length ? {
            before: bD[0],
            name: pD,
            after: bD[1],
            colour: iD,
            icon: fD
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var DD, CD, cD;
        const ID = null !== (DD = null === (CD = this.authoritative) || void 0 === CD ? void 0 : CD.dungeons) && void 0 !== DD ? DD : [];
        var pD, iD;
        ID.some((DD => DD.id === this.selected)) || (this.selected = null !== (pD = null === (iD = ID[0]) || void 0 === iD ? void 0 : iD.id) && void 0 !== pD ? pD : null);
        const fD = ID.map((DD => this.entry(DD)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: fD,
          detail: null !== (cD = fD.find((DD => DD.selected))) && void 0 !== cD ? cD : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Zc = ["mining", "farming", "foraging", "fishing", "combat"],
      oc = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      vc = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Nc() {
      for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
      return CD.map(((DD, CD) => ({
        amount: DD,
        coins: oc[CD],
        xp: vc[CD]
      })))
    }
    const gc = Nc(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Xc = Nc(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      mc = Nc(50, 100, 250, 500, 1e3, 2500, 5e3),
      nc = Nc(25, 50, 100, 250, 500, 1e3),
      Oc = Nc(10, 25, 50, 100, 250, 500, 1e3),
      Pc = Nc(1, 5, 10, 25, 50);

    function Hc(DD, CD) {
      return {
        id: DD,
        category: "fishing",
        item: CD,
        drops: [CD],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Oc
      }
    }
    const Uc = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Xc
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: mc
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: mc
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: nc
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: nc
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Xc
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: gc
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: gc
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: gc
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: mc
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Xc
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Xc
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Xc
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: mc
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: mc
      }, Hc("wheatfish", "Wheatfish"), Hc("darter", "Darter"), Hc("sunset_minnow", "Sunset Minnow"), Hc("root_flounder", "Root Flounder"), Hc("greenfin_loach", "Greenfin Loach"), Hc("red_strongfish", "Red Strongfish"), Hc("green_strongfish", "Green Strongfish"), Hc("boomerang_fish", "Boomerang Fish"), Hc("seahorse", "Seahorse"), Hc("spined_stickleback", "Spined Stickleback"), Hc("moon_strongfish", "Moon Strongfish"), Hc("boulder_bass", "Boulder Bass"), Hc("grass_snapper", "Grass Snapper"), Hc("crystal_wheatfish", "Crystalized Wheatfish", Pc), Hc("moonstone_pupfish", "Moonstone Pupfish", Pc), Hc("reedglass_minnow", "Reedglass Minnow"), Hc("mangrove_herring", "Mangrove Herring"), Hc("mudline_perch", "Mudline Perch"), Hc("coastal_mullet", "Coastal Mullet"), Hc("reef_sardine", "Reef Sardine"), Hc("root_perch", "Root Perch"), Hc("driftwood_catfish", "Driftwood Catfish"), Hc("aether_minnow", "Aether Minnow"), Hc("needlefish", "Tri-Pointed Needlefish"), Hc("threadfin_bream", "Threadfin Bream"), Hc("mudbelly_tilapia", "Mudbelly Tilapia"), Hc("rotslab_eel", "Rotslab Eel"), Hc("polarflash_electron", "Polarflash Electron"), Hc("mireback_carp", "Mireback Carp"), Hc("blackwater_bream", "Blackwater Bream"), Hc("stone_grouper", "Stone Grouper"), Hc("shadeback_ray", "Shadeback Ray"), Hc("glacial_silverfish", "Glacial Silverfish"), Hc("hatchetfish", "Hatchetfish"), Hc("moonlit_boomerang", "Moonlit Boomerang Fish"), Hc("murkborne_ray", "Murkborne Ray"), Hc("bamboo_catfish", "Bamboo Catfish"), Hc("mossback_arapaima", "Mossback Arapaima"), Hc("murk_stingray", "Murk Stingray"), Hc("channel_sawfish", "Channel Sawfish"), Hc("boned_sturgeon", "Boned Sturgeon"), Hc("oarfish", "Oarfish"), Hc("snakehead", "Snakehead", Pc), Hc("eldertide_leviathan", "Eldertide Leviathan", Pc), Hc("pithead", "Pithead"), Hc("electric_eel", "Electric Eel"), Hc("shadow_darter", "Shadow Darter"), Hc("abyss_carp", "Abyss Carp"), Hc("nomai_moray", "Nomai Moray"), Hc("silver_dragonfish", "Silver Dragonfish"), Hc("giant_moray", "Giant Moray"), Hc("coelacanth", "Coelacanth", Pc), Hc("frost_herring", "Frost Herring"), Hc("permafrost_halibut", "Permafrost Halibut"), Hc("glacial_lanternfish", "Glacial Lanternfish"), Hc("frozen_grenadier", "Frozen Grenadier"), Hc("blackfin_icefish", "Blackfin Icefish"), Hc("moonfish", "Moonfish"), Hc("alpha_strongfish", "Alpha Moon Strongfish"), Hc("deep_lanternfish", "Deepwater Lanternfish", Pc), Hc("pearlescent_moonfish", "Pearlescent Moonfish", Pc), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Xc
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: nc
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: nc
      }],
      xc = (new Map(Uc.map((DD => [DD.id, DD]))), new Map),
      qc = new Map;
    for (const yQ of Uc) {
      for (const [DD, CD] of Object.entries(null !== (Jc = yQ.blocks) && void 0 !== Jc ? Jc : {})) {
        var Jc;
        xc.set(DD, {
          collection: yQ,
          amount: CD
        })
      }
      for (const DD of null !== (Kc = yQ.drops) && void 0 !== Kc ? Kc : []) {
        var Kc;
        qc.set(DD, yQ)
      }
    }

    function ac(DD, CD) {
      let cD = 0;
      for (; cD < DD.tiers.length && CD >= DD.tiers[cD].amount;) cD++;
      return cD
    }
    const Vc = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function zc(DD) {
      return Vc[DD - 1]
    }
    const jc = "skyblockCollectionsView";
    class lc extends BD {
      constructor(DD, CD) {
        let cD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          ID = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD => DD;
        super(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = CD, this.locale = cD, this.itemName = ID, this.counts = null, this.category = "mining", this.selected = Uc[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = DD => {
          this.category = DD, this.selected = this.inCategory(DD)[0].id, this.emit()
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, this.locale = CD, this.itemName = cD, this.emit()
      }
      kt(DD) {
        if (!this.Lt)
          if ("collOpen" !== DD.kind) {
            (DD.collFull || null === this.counts) && (this.counts = new Map);
            for (const [CD, cD] of DD.collCounts) this.counts.set(CD, cD);
            this.emit()
          } else this.show()
      }
      dispose() {
        this.counts = null, super.dispose()
      }
      isEnabled() {
        return null !== this.counts
      }
      buildSnapshot() {
        var DD;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const CD = this.inCategory(this.category).map((DD => this.collectionView(DD))),
          cD = Uc.reduce(((DD, CD) => DD + this.tierOf(CD)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Zc.map((DD => this.categoryView(DD))),
          collections: CD,
          detail: null !== (DD = CD.find((DD => DD.selected))) && void 0 !== DD ? DD : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(cD)
          })
        }
      }
      categoryView(DD) {
        const CD = this.inCategory(DD),
          cD = CD.reduce(((DD, CD) => DD + this.tierOf(CD)), 0),
          ID = CD.reduce(((DD, CD) => DD + CD.tiers.length), 0);
        return {
          id: DD,
          label: this.translate(`skyblockGame:${DD}`),
          icon: NC[DD],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(cD),
            target: this.number(ID)
          }),
          selected: DD === this.category
        }
      }
      collectionView(DD) {
        var CD, cD;
        const ID = null !== (CD = this.counts.get(DD.id)) && void 0 !== CD ? CD : 0,
          pD = ac(DD, ID),
          iD = null !== (cD = DD.tiers[pD]) && void 0 !== cD ? cD : null,
          fD = 0 === pD ? 0 : DD.tiers[pD - 1].amount;
        return {
          id: DD.id,
          name: this.itemName(DD.item),
          icon: DD.item,
          selected: DD.id === this.selected,
          locked: 0 === ID,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(ID)
          }),
          tier: 0 === pD ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(pD),
          percent: null === iD ? 100 : Math.min(100, (ID - fD) / (iD.amount - fD) * 100),
          progress: null === iD ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(ID),
            target: this.number(iD.amount)
          }),
          nextReward: null === iD ? null : this.reward(DD, iD.coins, iD.xp)
        }
      }
      reward(DD, CD, cD) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(CD),
          xp: this.number(cD),
          skill: this.translate(`skyblockGame:${DD.category}`)
        })
      }
      tierLabel(DD) {
        return this.translate("skyblockGame:collectionTier", {
          tier: zc(DD)
        })
      }
      tierOf(DD) {
        var CD;
        return ac(DD, null !== (CD = this.counts.get(DD.id)) && void 0 !== CD ? CD : 0)
      }
      inCategory(DD) {
        return Uc.filter((CD => CD.category === DD))
      }
      number(DD) {
        return DD.toLocaleString(this.locale)
      }
    }
    const Lc = "skyblockPortalTransitView",
      Tc = "skyblockPortalArrival";
    class Gc {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Uo = DD, this.storage = CD, this.now = cD, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      kt(DD) {
        const CD = {
          zoneNameKey: DD.transitZoneNameKey,
          variation: DD.transitZoneVariation,
          colour: DD.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Tc, CD), this.show("departure", CD.zoneNameKey, CD.colour, DD.transitDurationMs, DD.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Tc)
        }))
      }
      resumeArrival(DD) {
        const CD = this.storage.getItem(Tc);
        this.storage.removeItem(Tc), null === CD || CD.variation !== DD || this.now() - CD.departedAt > 3e4 || this.show("arrival", CD.zoneNameKey, CD.colour, 3200, 2e4)
      }
      finishArrival(DD) {
        var CD;
        "arrival" === (null === (CD = this.view) || void 0 === CD ? void 0 : CD.phase) && this.view.token === DD && (this.clearTimer(), this.view = null, this.Uo(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(DD, CD, cD, ID, pD, iD) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: DD,
          zoneNameKey: CD,
          colour: cD,
          durationMs: ID
        }, this.Uo(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Uo(null), null === iD || void 0 === iD || iD()
        }), pD)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Rc = "skyblockDailyRewardView",
      kc = "skyblockDailyRewardCoin";
    class dc {
      constructor(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          QD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Uo = DD, this.isBusy = CD, this.holdQuestPopups = cD, this.onHeldCoinsChanged = ID, this.onCoinLanded = pD, this.onStarted = iD, this.onFinished = fD, this.onItemLanded = bD, this.now = QD, this.Lb = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var DD, CD;
        return null !== (DD = null === (CD = this.playing) || void 0 === CD ? void 0 : CD.view) && void 0 !== DD ? DD : null
      }
      getHeldCoins() {
        var DD, CD;
        let cD = 0;
        for (const ID of this.Lb) cD += ID.coins;
        return cD - (null !== (DD = null === (CD = this.playing) || void 0 === CD ? void 0 : CD.released) && void 0 !== DD ? DD : 0)
      }
      kt(DD) {
        "dailyRewardClaimed" !== DD.kind ? (this.queue.push(DD), this.wy()) : this.Lb.push({
          coins: DD.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      wy() {
        const DD = this.now();
        if (null === this.playing) return this.releaseUnshown(DD), void this.startNext(DD);
        const CD = this.playing,
          cD = DD - CD.startedAt,
          ID = CD.view.flyingCoins,
          pD = function(DD, CD) {
            let cD = 0;
            for (; cD < CD && Wc(cD, CD) <= DD;) cD++;
            return cD
          }(cD, ID);
        if (pD !== CD.landed) {
          for (let DD = pD - CD.landed > 2 ? pD - 1 : CD.landed; DD < pD; DD++) this.onCoinLanded(DD, ID);
          CD.landed = pD, CD.released = Math.round(CD.view.coins * pD / ID), this.onHeldCoinsChanged()
        }
        for (; CD.itemsLanded < CD.view.items.length && 2e3 + 160 * CD.itemsLanded + 630 <= cD;) this.onItemLanded(CD.itemsLanded), CD.itemsLanded++;
        cD >= CD.view.durationMs && (this.finish(), this.startNext(DD))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Lb = [], this.Uo(null)
      }
      startNext(DD) {
        if (0 === this.queue.length || this.isBusy()) return;
        const CD = this.queue.shift();
        this.token++;
        const cD = {
          token: this.token,
          day: CD.dailyRewardDay,
          coins: CD.dailyRewardCoins,
          items: CD.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: CD.dailyRewardDay === xD ? 24 : 14
        };
        this.playing = {
          view: cD,
          startedAt: DD,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Uo(cD), this.onStarted(cD)
      }
      finish() {
        this.Lb.shift(), this.playing = null, this.holdQuestPopups(!1), this.Uo(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(DD) {
        if (this.queue.length > 0 || 0 === this.Lb.length) return;
        const CD = this.Lb.length;
        this.Lb = this.Lb.filter((CD => DD - CD.receivedAt < 6e4)), this.Lb.length !== CD && this.onHeldCoinsChanged()
      }
    }

    function Yc(DD, CD) {
      return 450 + 715 * DD / (CD - 1)
    }

    function Wc(DD, CD) {
      return Yc(DD, CD) + 650
    }
    const sc = "skyblockMailboxView";
    class Ec {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Uo = DD, this.isBusy = CD, this.onStarted = cD, this.now = ID, this.waiting = [], this.playing = null, this.token = 0, this.itemName = DD => DD
      }
      getSnapshot() {
        var DD, CD;
        return null !== (DD = null === (CD = this.playing) || void 0 === CD ? void 0 : CD.view) && void 0 !== DD ? DD : null
      }
      setItemName(DD) {
        this.itemName = DD
      }
      kt(DD) {
        this.waiting.push(...DD.mailLetters), this.wy()
      }
      wy() {
        const DD = this.now();
        null !== this.playing && DD - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Uo(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(DD)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Uo(null)
      }
      start(DD) {
        const CD = this.waiting.slice(0, 3);
        this.token++;
        const cD = {
          token: this.token,
          letters: CD.map((DD => this.toView(DD))),
          more: this.waiting.length - CD.length,
          durationMs: 4500 + 700 * CD.length
        };
        this.waiting = [], this.playing = {
          view: cD,
          startedAt: DD
        }, this.Uo(cD), this.onStarted(cD)
      }
      toView(DD) {
        return {
          coins: DD.mailCoins,
          items: DD.mailItems.map((DD => {
            var CD;
            return {
              itemName: DD.mailItemName,
              amount: DD.mailItemAmount,
              label: null !== (CD = DD.mailItemLabel) && void 0 !== CD ? CD : this.itemName(DD.mailItemName)
            }
          })),
          reasonKey: DD.mailReasonKey,
          reasonParams: DD.mailReasonParams
        }
      }
    }
    const ec = "skyblockQuestGraphView",
      uc = "skyblockDevQuestJump";

    function hc(DD) {
      if (0 === DD.length) return "";
      const CD = [`M ${DD[0].x} ${DD[0].y}`];
      for (let ID = 1; ID < DD.length - 1; ID++) {
        const cD = DD[ID + 1];
        CD.push(`Q ${DD[ID].x} ${DD[ID].y} ${(DD[ID].x+cD.x)/2} ${(DD[ID].y+cD.y)/2}`)
      }
      const cD = DD[DD.length - 1];
      return CD.push(`L ${cD.x} ${cD.y}`), CD.join(" ")
    }

    function rc(DD, CD) {
      return DD < CD ? `${DD}|${CD}` : `${CD}|${DD}`
    }
    class Ac extends BD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(DD, cD, ID), this.translate = CD, this.requestJump = pD, this.requestArrive = iD, this.storage = fD, this.now = bD, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = DD => {
          DD !== this.hoveredId && (this.hoveredId = DD, this.emit())
        }, this.jump = DD => {
          this.close(), this.requestJump(DD)
        }
      }
      kt(DD) {
        if (!this.Lt)
          if ("graph" !== DD.kind) {
            if ("jumping" === DD.kind) {
              const CD = {
                questId: DD.graphQuestId,
                variation: DD.graphVariation,
                completes: DD.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(uc, CD)
            }
          } else {
            const CD = ++this.graphCount;
            cD.e(111).then((() => cD(6171))).then((cD => {
              let {
                default: ID
              } = cD;
              this.Lt || CD !== this.graphCount || (this.layout = function(DD, CD, cD) {
                var ID, pD;
                const iD = new DD.graphlib.Graph;
                iD.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), iD.setDefaultEdgeLabel((() => ({})));
                const fD = new Set;
                for (const SD of CD) fD.add(SD.graphQuestId), iD.setNode(SD.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const bD = cD.filter((DD => fD.has(DD.graphFromId) && fD.has(DD.graphToId) && DD.graphFromId !== DD.graphToId)),
                  QD = new Map;
                for (const SD of [...bD].sort(((DD, CD) => Number("awaits" === DD.graphEdgeKind) - Number("awaits" === CD.graphEdgeKind)))) {
                  const DD = rc(SD.graphFromId, SD.graphToId);
                  QD.has(DD) || (QD.set(DD, SD), iD.setEdge(SD.graphFromId, SD.graphToId))
                }
                DD.layout(iD);
                const wD = iD.graph();
                return {
                  width: Math.ceil(null !== (ID = wD.width) && void 0 !== ID ? ID : 0),
                  height: Math.ceil(null !== (pD = wD.height) && void 0 !== pD ? pD : 0),
                  nodes: CD.map((DD => {
                    var CD, cD;
                    const ID = iD.node(DD.graphQuestId);
                    return {
                      node: DD,
                      left: (null !== (CD = ID.x) && void 0 !== CD ? CD : 0) - 95,
                      top: (null !== (cD = ID.y) && void 0 !== cD ? cD : 0) - 26
                    }
                  })),
                  edges: bD.map((DD => {
                    var CD;
                    const cD = QD.get(rc(DD.graphFromId, DD.graphToId)),
                      ID = null !== (CD = iD.edge(cD.graphFromId, cD.graphToId).points) && void 0 !== CD ? CD : [];
                    return {
                      edge: DD,
                      key: `${DD.graphFromId}|${DD.graphToId}|${DD.graphEdgeKind}`,
                      path: hc(cD.graphFromId === DD.graphFromId ? ID : [...ID].reverse())
                    }
                  })),
                  plans: new Map(CD.map((DD => [DD.graphQuestId, new Set([DD.graphQuestId, ...DD.graphPlanIds])])))
                }
              }(ID, DD.graphNodes, DD.graphEdges), this.show())
            })).catch((DD => {
              console.error("The quest graph could not be laid out", DD)
            }))
          }
      }
      resumeJump(DD) {
        const CD = this.storage.getItem(uc);
        this.storage.removeItem(uc), null === CD || CD.variation !== DD || this.now() - CD.departedAt > 6e4 || this.requestArrive(CD.questId, CD.completes)
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      dispose() {
        this.layout = null, this.hoveredId = null, super.dispose()
      }
      onClosed() {
        this.hoveredId = null
      }
      isEnabled() {
        return null !== this.layout
      }
      getPlan() {
        var DD, CD;
        return null !== (DD = null === this.hoveredId || null === (CD = this.layout) || void 0 === CD ? void 0 : CD.plans.get(this.hoveredId)) && void 0 !== DD ? DD : new Set
      }
      buildSnapshot() {
        const DD = this.layout;
        if (null === DD) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const CD = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: DD.width,
          height: DD.height,
          nodes: DD.nodes.map((DD => {
            let {
              node: cD,
              left: ID,
              top: pD
            } = DD;
            return {
              id: cD.graphQuestId,
              name: this.translate(cD.graphNameKey),
              detail: null === cD.graphGiverName ? cD.graphZoneId : `${cD.graphGiverName} \xb7 ${cD.graphZoneId}`,
              state: cD.graphState,
              left: ID,
              top: pD,
              inPlan: CD.has(cD.graphQuestId),
              hovered: cD.graphQuestId === this.hoveredId
            }
          })),
          edges: DD.edges.map((DD => {
            let {
              edge: cD,
              key: ID,
              path: pD
            } = DD;
            return {
              key: ID,
              kind: cD.graphEdgeKind,
              path: pD,
              inPlan: CD.has(cD.graphFromId) && CD.has(cD.graphToId)
            }
          })),
          planning: CD.size > 0
        }
      }
    }
    var Fc = cD(36415);
    const DI = 250,
      CI = 2150,
      cI = -2.8,
      II = 2.2,
      pI = -27,
      iI = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      fI = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      bI = Math.round(50 + 1e3 * (fI.delay + fI.period / 2)),
      QI = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      wI = Array.from({
        length: 26
      }, ((DD, CD) => {
        const cD = 2.39996 * CD,
          ID = .5 + .618034 * CD % 1 * .23,
          pD = CD % 3 !== 2;
        return {
          rune: pD ? QI[7 * CD % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(cD)*ID).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(cD)*ID).toFixed(3)})`,
            "--spin": 40 * (CD % 5 - 2) + "deg",
            "--size": (pD ? 1 + CD % 4 * .2 : .3 + CD % 2 * .15) + "rem",
            "--duration": `${(1.8+7*CD%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*CD%3).toFixed(2)}s`
          }
        }
      }));

    function SI(DD, CD) {
      return Array.from({
        length: 30 + 3 * DD + (CD ? 10 : 0)
      }, ((DD, CD) => {
        const cD = CD < 4,
          ID = cD ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          pD = cD ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          iD = cD ? 2.2 : .6 + Math.random(),
          fD = cD ? .3 : Math.random() < .5 ? .16 : .24,
          bD = cD ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": ID,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${pD.toFixed(2)}rem`,
          "--length": `${iD.toFixed(2)}rem`,
          "--width": `${fD}rem`,
          "--duration": `${Math.round(bD)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function BI(DD) {
      let {
        zeta: CD,
        period: cD
      } = DD;
      const ID = 2 * Math.PI / cD;
      return {
        w: ID,
        decay: CD * ID / Math.sqrt(1 - CD * CD)
      }
    }
    let yI = !1;

    function MI() {
      if (yI) return;
      yI = !0;
      const DD = document.createElement("style");
      DD.textContent = function() {
        const DD = BI(iI),
          CD = BI(fI),
          cD = CD => Math.exp(-DD.decay * CD) * Math.sin(DD.w * CD),
          ID = cD(Math.atan(DD.w / DD.decay) / DD.w),
          pD = .25,
          iD = 2.15,
          fD = Math.round(215),
          bD = [];
        for (let QD = 0; QD <= fD; QD++) {
          const DD = QD / fD * iD;
          let wD = Math.sin(Math.min(DD, pD) / pD * Math.PI / 2) ** 2,
            SD = 0,
            BD = 1,
            yD = 1 - .2 * wD,
            MD = 1;
          if (DD >= pD) {
            const fD = DD - pD,
              bD = Math.max(0, fD - .05);
            wD = Math.exp(-bD / .05), SD = cD(bD + iI.lead * (1 - Math.exp(-bD / iI.rush))) / ID;
            const QD = bD - fI.delay,
              tD = QD <= 0 ? 0 : 1 - Math.exp(-CD.decay * QD) * (Math.cos(CD.w * QD) + CD.decay / CD.w * Math.sin(CD.w * QD)),
              ZD = Math.max(0, (DD - 1.77) / (iD - 1.77));
            BD = (1 + (fI.to - 1) * tD) * (1 + .08 * ZD), yD = 1.1 + 1.5 * Math.exp(-fD / .07) + .3 * Math.exp(-(((1e3 * fD - bI) / 100) ** 2)) + .8 * ZD, MD = 1 - ZD ** 1.5
          }
          const tD = .15 * wD + cI * SD,
            ZD = -.1 * wD + II * SD,
            oD = 3 * wD + pI * SD;
          bD.push(`${(QD/fD*100).toFixed(3)}% { opacity: ${MD.toFixed(3)}; transform: translate(${tD.toFixed(3)}rem, ${ZD.toFixed(3)}rem) rotate(${oD.toFixed(2)}deg) scale(${BD.toFixed(3)}); filter: brightness(${yD.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${bD.join(" ")} }`
      }(), document.head.append(DD)
    }
    const tI = "skyblockForgeView",
      ZI = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class oI extends BD {
      constructor(DD, CD, cD, ID, pD) {
        super(DD, cD, ID), this.translate = CD, this.requestForge = pD, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (DD, CD) => {
          var cD, ID;
          null !== this.forging || (null !== (cD = this.owned[(0, Fc.t)(CD, DD)]) && void 0 !== cD ? cD : 0) <= 0 || (this.selected[DD] = this.selected[DD] === CD ? null : CD, this.status = null, null === (ID = this.onPartSelected) || void 0 === ID || ID.call(this), this.emit())
        }, this.forge = DD => {
          var CD, cD;
          const ID = this.selectedParts();
          if (null === ID || this.isPending() || !this.open) return;
          const pD = (0, Fc.p)(ID);
          if (null === pD || pD.coalCost > this.coal) return;
          const iD = this.preview(pD),
            fD = null !== (CD = null === (cD = this.onForgeStarted) || void 0 === cD ? void 0 : cD.call(this, iD.tier, iD.named, DD)) && void 0 !== CD ? CD : () => {};
          if (this.dropArrival(), DD) {
            const DD = {
              id: ++this.forgeId,
              preview: iD,
              timers: [],
              stopSounds: fD,
              landed: !1,
              reply: null
            };
            DD.timers.push(setTimeout((() => {
              DD.landed = !0, null !== DD.reply && (this.apply(DD.reply), DD.reply = null, this.emit())
            }), DI), setTimeout((() => {
              this.finishForge(DD)
            }), CI)), this.forging = DD
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(ID)
        }, this.snapshot = this.buildSnapshot()
      }
      kt(DD) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === DD.forgeMessageKind) return this.dropForge(), this.apply(DD), this.status = null, void this.show();
        const CD = this.forging;
        if (null !== CD && null !== DD.forgeRefusalKey) this.dropForge();
        else if (null !== CD && !CD.landed) return void(CD.reply = DD);
        this.apply(DD), this.emit()
      }
      apply(DD) {
        if (this.owned = DD.forgeOwnedParts, this.coal = DD.forgeCoalOwned, this.keepSelectionOwned("open" === DD.forgeMessageKind), null !== DD.forgeForgedSwordId) {
          var CD;
          const cD = (0, Fc.p)(DD.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (CD = null === cD || void 0 === cD ? void 0 : cD.displayName) && void 0 !== CD ? CD : ""
            }
          }
        } else null !== DD.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: DD.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(DD) {
        var CD;
        this.forging = null;
        const cD = this.selectedParts(),
          ID = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: DD.id,
          sameSword: null !== cD && (null === (CD = (0, Fc.p)(cD)) || void 0 === CD ? void 0 : CD.displayName) === DD.preview.name,
          timer: ID
        }, this.emit()
      }
      dropForge() {
        const DD = this.forging;
        if (null !== DD) {
          this.forging = null;
          for (const CD of DD.timers) clearTimeout(CD);
          DD.stopSounds(), null !== DD.reply && this.apply(DD.reply)
        }
      }
      dropArrival() {
        null !== this.arriving && (clearTimeout(this.arriving.timer), this.arriving = null)
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        var DD, CD, cD;
        const ID = this.selectedParts(),
          pD = null === ID ? null : (0, Fc.p)(ID),
          iD = null !== (DD = null === (CD = this.forging) || void 0 === CD ? void 0 : CD.preview) && void 0 !== DD ? DD : null === pD ? null : this.preview(pD);
        return {
          enabled: this.received,
          open: this.open,
          slots: Fc.n.map((DD => ({
            kind: DD,
            label: this.translate(ZI[DD]),
            parts: this.partsFor(DD)
          }))),
          coalOwned: this.coal,
          preview: iD,
          unformedSword: Fc.l[null !== (cD = this.selected.Blade) && void 0 !== cD ? cD : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((DD => DD > 0)),
          canForge: null !== iD && !iD.coalShort && !this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          forging: null === this.forging ? null : {
            id: this.forging.id,
            preview: this.forging.preview
          },
          arriving: null === this.arriving ? null : {
            id: this.arriving.id,
            sameSword: this.arriving.sameSword
          }
        }
      }
      preview(DD) {
        return {
          name: DD.displayName,
          lore: DD.lore,
          baseSword: DD.baseSword,
          enchantmentTier: DD.enchantmentTier,
          tier: Number(DD.enchantmentTier.slice(-1)),
          named: DD.named,
          stats: this.stats(DD),
          effects: DD.effects,
          coalCost: DD.coalCost,
          coalShort: null === this.forging && DD.coalCost > this.coal
        }
      }
      partsFor(DD) {
        const CD = [];
        for (const ID of Fc.h) {
          var cD;
          const pD = (0, Fc.t)(ID, DD),
            iD = null !== (cD = this.owned[pD]) && void 0 !== cD ? cD : 0;
          iD > 0 && CD.push({
            material: ID,
            itemName: pD,
            owned: iD,
            selected: this.selected[DD] === ID,
            placeholder: !1
          })
        }
        if (0 === CD.length) {
          const cD = Fc.h[0];
          CD.push({
            material: cD,
            itemName: (0, Fc.t)(cD, DD),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return CD
      }
      stats(DD) {
        const CD = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${DD.powerMultiplier.toFixed(2)}`,
          better: DD.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${DD.damageMultiplier.toFixed(2)}`,
          better: DD.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/DD.cooldownMultiplier).toFixed(2)}`,
          better: DD.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${DD.knockbackMultiplier.toFixed(2)}`,
          better: DD.knockbackMultiplier > 1
        }];
        return DD.reachBonus > 0 && CD.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${DD.reachBonus.toFixed(1)}`,
          better: !0
        }), DD.damageReduction > 0 && CD.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*DD.damageReduction)}%`,
          better: !0
        }), CD
      }
      selectedParts() {
        const {
          Blade: DD,
          Guard: CD,
          Handle: cD
        } = this.selected;
        return null === DD || null === CD || null === cD ? null : {
          blade: DD,
          guard: CD,
          handle: cD
        }
      }
      keepSelectionOwned(DD) {
        for (const cD of Fc.n) {
          var CD;
          const ID = this.selected[cD];
          if (null !== ID && (null !== (CD = this.owned[(0, Fc.t)(ID, cD)]) && void 0 !== CD ? CD : 0) > 0) continue;
          if (!DD) {
            this.selected[cD] = null;
            continue
          }
          const pD = [...Fc.h].reverse().find((DD => {
            var CD;
            return (null !== (CD = this.owned[(0, Fc.t)(DD, cD)]) && void 0 !== CD ? CD : 0) > 0
          }));
          this.selected[cD] = null !== pD && void 0 !== pD ? pD : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const vI = "skyblockSmugglerView",
      NI = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class gI extends BD {
      constructor(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(DD, cD, ID), this.translate = CD, this.requestBuy = pD, this.now = iD, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = DD => DD, this.onBought = null, this.buy = DD => {
          const CD = this.deals[DD];
          void 0 !== CD && !this.isPending() && this.open && !this.soldOut.has(DD) && this.canAfford(CD) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, DD))
        }, this.snapshot = this.buildSnapshot()
      }
      kt(DD) {
        if (this.received = !0, this.day = DD.smugglerDay, this.deals = DD.smugglerDeals, this.rivets = DD.smugglerRivetsOwned, this.crests = DD.smugglerCrestsOwned, this.soldOut = new Set(DD.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + DD.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === DD.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = DD.smugglerBoughtSlot, null !== DD.smugglerBoughtSlot) {
          var CD, cD;
          const ID = this.deals[DD.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === ID ? "" : this.dealName(ID),
              amount: String(null !== (CD = null === ID || void 0 === ID ? void 0 : ID.smugglerDealAmount) && void 0 !== CD ? CD : 0)
            }
          }, this.boughtCount++, null === (cD = this.onBought) || void 0 === cD || cD.call(this)
        } else null !== DD.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: DD.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, void 0 !== cD && (this.itemName = cD), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(DD) {
        if (null !== DD.smugglerDealUniqueName) return DD.smugglerDealUniqueName;
        const CD = NI[DD.smugglerDealItem];
        return void 0 === CD ? this.itemName(DD.smugglerDealItem) : this.translate(CD)
      }
      canAfford(DD) {
        return DD.smugglerDealRivets <= this.rivets && DD.smugglerDealCrests <= this.crests
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      startCountdown() {
        this.stopCountdown(), this.countdown = setInterval((() => {
          this.emit()
        }), 15e3)
      }
      stopCountdown() {
        null !== this.countdown && (clearInterval(this.countdown), this.countdown = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      rotatesText() {
        const DD = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return DD <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : DD < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(DD)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(DD / 60)),
          minutes: String(DD % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((DD, CD) => ({
            slot: CD,
            itemName: DD.smugglerDealItem,
            displayName: this.dealName(DD),
            enchantmentTier: DD.smugglerDealEnchantmentTier,
            amount: DD.smugglerDealAmount,
            rivets: DD.smugglerDealRivets,
            crests: DD.smugglerDealCrests,
            affordable: this.canAfford(DD),
            soldOut: this.soldOut.has(CD),
            justBought: this.boughtSlot === CD
          }))),
          rivetsOwned: this.rivets,
          crestsOwned: this.crests,
          rotatesText: this.received ? this.rotatesText() : "",
          pending: this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          boughtCount: this.boughtCount
        }
      }
      dispose() {
        this.received = !1, this.clearReplyTimeout(), this.stopCountdown(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const XI = "skyblockPassageView",
      mI = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function nI(DD, CD) {
      return DD(mI[CD])
    }

    function OI(DD, CD, cD, ID) {
      const pD = Math.ceil((cD - ID) / 864e5),
        iD = nI(DD, CD);
      return pD > 1 ? DD("skyblockGame:passageNextDays", {
        phase: iD,
        days: String(pD)
      }) : DD("skyblockGame:passageNextSoon", {
        phase: iD
      })
    }
    class PI extends BD {
      constructor(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(DD, cD, ID), this.translate = CD, this.now = pD, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = DD => DD, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      kt(DD) {
        this.message = DD, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, void 0 !== cD && (this.itemName = cD), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(DD) {
        return {
          itemName: DD.passageFish,
          displayName: this.itemName(DD.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(DD.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const DD = this.message;
        return null === DD ? {
          enabled: !1,
          open: !1,
          phase: "new",
          phaseName: "",
          visitors: [],
          resting: null,
          nextPhase: "waxing",
          next: ""
        } : {
          enabled: !0,
          open: this.open,
          phase: DD.passagePhase,
          phaseName: nI(this.translate, DD.passagePhase),
          visitors: DD.passageVisitors.map((DD => this.describe(DD))),
          resting: this.describe(DD.passageResting),
          nextPhase: DD.passageNextPhase,
          next: OI(this.translate, DD.passageNextPhase, DD.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var HI = cD(37919);
    const UI = "skyblockKeepersChairView";
    class xI extends BD {
      constructor(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new HI.d;
        super(DD, cD, ID), this.translate = CD, this.requestAim = pD, this.now = iD, this.pacer = fD, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = DD => DD, this.aim = DD => {
          !this.awaitingReply && this.open && this.atChair && DD !== this.favoured && (null === DD || this.islands.some((CD => CD.keepersChairIslandId === DD && CD.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== DD && void 0 !== DD ? DD : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = fD.subscribe((() => {
          this.emit()
        }))
      }
      kt(DD) {
        var CD, cD;
        this.received = !0;
        const ID = this.favoured,
          pD = this.atChair;
        var iD;
        return this.islands = DD.keepersChairIslands, this.favoured = DD.keepersChairFavoured, this.passage = null !== (CD = DD.keepersChairPassage) && void 0 !== CD ? CD : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (cD = DD.keepersChairAtChair) || void 0 === cD || cD, "place" === DD.keepersChairMessageKind ? (!pD && this.atChair && "refused" === (null === (iD = this.status) || void 0 === iD ? void 0 : iD.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === DD.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== DD.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: DD.keepersChairRefusalKey,
          island: null
        } : this.favoured !== ID && (this.status = null === this.favoured ? {
          tone: "aimed",
          key: "skyblockGame:keepersChairRestedStatus",
          island: null
        } : {
          tone: "aimed",
          key: "skyblockGame:keepersChairAimedStatus",
          island: this.favoured
        }, this.aimedCount++), this.emit()) : this.emit()))
      }
      isAtChair() {
        return this.atChair
      }
      receivePassage(DD) {
        this.received && (this.passage = DD, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, void 0 !== cD && (this.itemName = cD), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.aimedCount = 0
      }
      isPending() {
        return this.awaitingReply || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      islandName(DD) {
        const CD = this.islands.find((CD => CD.keepersChairIslandId === DD));
        return void 0 === CD ? DD : this.translate(CD.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const DD = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          CD = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((DD => {
            const CD = DD.keepersChairFeaturedFish;
            return {
              id: DD.keepersChairIslandId,
              name: this.translate(DD.keepersChairIslandNameKey),
              relit: DD.keepersChairIslandRelit,
              featuredFish: null === CD ? null : {
                itemName: CD,
                displayName: this.itemName(CD)
              },
              favoured: DD.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === DD ? null : {
            tone: DD.tone,
            text: this.translate(DD.key, null === DD.island ? void 0 : {
              island: this.islandName(DD.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === CD ? null : {
            phase: CD.keepersChairPassagePhase,
            phaseName: nI(this.translate, CD.keepersChairPassagePhase),
            nextPhase: CD.keepersChairPassageNextPhase,
            next: OI(this.translate, CD.keepersChairPassageNextPhase, CD.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const qI = "skyblockReachLogView",
      JI = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      KI = "Caught Fish",
      aI = [1, 2, 4];

    function VI(DD, CD) {
      return DD.map((DD => ({
        ...DD,
        reachLogPageFish: DD.reachLogPageFish.map((DD => ({
          ...DD,
          reachLogFishFresh: CD(DD)
        })))
      })))
    }
    class zI extends BD {
      constructor(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new HI.d;
        super(DD, cD, ID), this.translate = CD, this.requestOpen = pD, this.pacer = iD, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = DD => DD, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = DD => {
          this.pages.some((CD => CD.reachLogIslandId === DD)) && (this.selected = DD, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = iD.subscribe((() => {
          this.emit()
        }))
      }
      kt(DD) {
        if (this.received = !0, "status" === DD.reachLogMessageKind) return !0 === DD.reachLogNews && this.markNews(), this.serverFresh = DD.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const CD = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== DD.reachLogMessageKind)
          if (this.pageViews = null, this.pages = VI(DD.reachLogPages, (DD => DD.reachLogFishFresh || this.heldFresh.has(DD.reachLogFishItem))), this.letGoShown = DD.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, CD) this.showPages();
          else {
            for (const DD of this.pages)
              for (const CD of DD.reachLogPageFish) CD.reachLogFishFresh && this.heldFresh.add(CD.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, this.pageViews = null, void 0 !== cD && (this.itemName = cD), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = VI(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var DD, CD, cD, ID;
        const pD = this.pages.find((DD => DD.reachLogPageFish.some((DD => DD.reachLogFishFresh))));
        if (void 0 !== pD) return pD.reachLogIslandId;
        if (null !== this.selected && this.pages.some((DD => DD.reachLogIslandId === this.selected))) return this.selected;
        return null !== (DD = null !== (CD = null === (cD = this.pages.filter((DD => DD.reachLogIslandAwake)).at(-1)) || void 0 === cD ? void 0 : cD.reachLogIslandId) && void 0 !== CD ? CD : null === (ID = this.pages[0]) || void 0 === ID ? void 0 : ID.reachLogIslandId) && void 0 !== DD ? DD : null
      }
      markNews() {
        this.newsToken++, this.news = !0, this.clearNewsTimeout(), this.newsTimeout = setTimeout((() => {
          this.newsTimeout = null, this.news = !1, this.emit()
        }), 1200)
      }
      clearNewsTimeout() {
        null !== this.newsTimeout && (clearTimeout(this.newsTimeout), this.newsTimeout = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          pending: this.awaitingReply || this.pacer.isPacing(),
          freshCount: this.serverFresh + this.heldFresh.size,
          news: this.news,
          newsToken: this.newsToken,
          selected: this.selected,
          letGoShown: this.letGoShown,
          pages: this.pageViews ??= this.buildPages()
        }
      }
      buildPages() {
        return this.pages.map((DD => {
          var CD;
          return {
            id: DD.reachLogIslandId,
            name: this.translate(DD.reachLogIslandNameKey),
            awake: DD.reachLogIslandAwake,
            gold: DD.reachLogPageGold,
            caught: DD.reachLogPageFish.filter((DD => DD.reachLogFishCaught && !DD.reachLogFishVisitor)).length,
            total: DD.reachLogPageFish.filter((DD => !DD.reachLogFishVisitor)).length,
            fish: DD.reachLogPageFish.map((DD => {
              const CD = DD.reachLogFishBestKg;
              return {
                itemName: DD.reachLogFishItem,
                name: DD.reachLogFishCaught ? this.itemName(DD.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: DD.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / DD.reachLogFishChance))
                }),
                best: DD.reachLogFishCaught ? null === CD ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: CD.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: DD.reachLogFishMarks,
                ribbons: aI.map((CD => 0 !== (DD.reachLogFishRibbons & CD))),
                glimmer: 0 !== (8 & DD.reachLogFishRibbons),
                halo: 0 !== (32 & DD.reachLogFishRibbons),
                fresh: DD.reachLogFishFresh,
                visitor: DD.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (CD = DD.reachLogPageReturner) && void 0 !== CD ? CD : null)
          }
        }))
      }
      buildReturner(DD) {
        return null === DD ? null : {
          itemName: DD.reachLogReturnerFishItem,
          line: this.translate(DD.reachLogReturnerLineKey, {
            name: this.translate(DD.reachLogReturnerNameKey),
            trinket: this.translate(DD.reachLogReturnerTrinketKey)
          }),
          back: DD.reachLogReturnerBack
        }
      }
      receivePassagePhase(DD) {
        null !== this.passagePhase && this.passagePhase !== DD && (this.pagesCurrent = !1), this.passagePhase = DD
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const jI = "skyblockLampLightView";
    class lI {
      constructor(DD, CD, cD, ID) {
        this.Uo = DD, this.translate = CD, this.requestCommand = cD, this.pacer = ID, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Lt = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = DD => {
          DD ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = DD => {
          this.send(`buy ${DD}`)
        }, this.socket = DD => {
          this.send(`socket ${null!==DD&&void 0!==DD?DD:jD}`)
        }, this.wearTint = DD => {
          this.send(`tint ${null!==DD&&void 0!==DD?DD:jD}`)
        }, this.setSituation = DD => {
          this.situation = DD, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ID.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = ID.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      kt(DD) {
        if (this.message = DD, null !== DD.lampLightShop && (this.shop = DD.lampLightShop), "open" === DD.lampLightKind && (this.refusalKey = null), "reply" === DD.lampLightKind) {
          var CD;
          const pD = null !== (CD = DD.lampLightReplyTag) && void 0 !== CD ? CD : null,
            iD = null !== pD && pD === this.offTag;
          var cD, ID;
          if (iD ? this.settleOff() : null !== pD && pD !== this.awaitingTag || this.settleReply(), this.refusalKey = DD.lampLightRefusalKey, null !== DD.lampLightBought && !iD) this.sparkle = {
            id: DD.lampLightBought,
            count: (null !== (cD = null === (ID = this.sparkle) || void 0 === ID ? void 0 : ID.count) && void 0 !== cD ? cD : 0) + 1
          }
        }
        DD.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === DD.lampLightKind && (this.lastGained = DD.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(DD) {
        DD !== this.atChair && (this.atChair = DD, DD && (this.refusalKey = null), this.emit())
      }
      setTranslator(DD, CD) {
        this.translate = DD, this.locale = null !== CD && void 0 !== CD ? CD : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Lt = !0
      }
      send(DD) {
        var CD;
        if (null !== this.awaitingTag || "ready" !== (null === (CD = this.message) || void 0 === CD ? void 0 : CD.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const cD = this.nextTag();
        this.awaitingTag = cD, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${DD} ${cD}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const DD = this.nextTag();
        this.offTag = DD, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${DD}`)
      }
      nextTag() {
        return this.lastTag = this.lastTag % 999999 + 1, this.lastTag
      }
      settleOff() {
        this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, null !== this.offTimeout && (clearTimeout(this.offTimeout), this.offTimeout = null)
      }
      settleReply() {
        this.awaitingTag = null, this.clearReplyTimeout()
      }
      isPending() {
        return null !== this.awaitingTag || this.offQueued || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      emit() {
        this.Lt || (this.snapshot = this.buildSnapshot(), this.Uo(this.snapshot))
      }
      formatLight(DD) {
        return Math.floor(DD).toLocaleString(this.locale)
      }
      formatPercent(DD) {
        const CD = 100 * DD;
        return CD >= 10 ? Math.round(CD).toLocaleString(this.locale) : CD.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(DD, CD) {
        if ("bite" === DD) return this.translate("skyblockGame:lampLightBite", {
          seconds: (CD.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === DD) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(CD.lampLightRareChance)
        });
        if ("notice" === DD) return null === CD.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(CD.lampLightNoticeChance)
        });
        const cD = "meter" === DD ? CD.lampLightMeterCatches : CD.lampLightBloomCatches;
        return null === cD ? null : this.translate("meter" === DD ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(cD))
        })
      }
      oddsLines(DD, CD) {
        const cD = (DD, CD) => {
            var cD;
            return null !== (cD = {
              bite: CD.lampLightBiteMs,
              rare: CD.lampLightRareChance,
              meter: CD.lampLightMeterCatches,
              bloom: CD.lampLightBloomCatches,
              notice: CD.lampLightNoticeChance
            } [DD]) && void 0 !== cD ? cD : 0
          },
          ID = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          pD = [];
        for (const iD of ["bite", "rare", "meter", "bloom", "notice"]) {
          const fD = this.formatOdds(iD, DD),
            bD = this.formatOdds(iD, CD);
          if (null === fD || null === bD || "bite" !== iD && "rare" !== iD && fD === bD) continue;
          const QD = cD(iD, CD) - cD(iD, DD),
            wD = ID[iD] ? QD < 0 : QD > 0;
          pD.push({
            label: iD,
            before: fD,
            after: bD,
            tone: fD === bD ? "same" : wD ? "better" : "worse"
          })
        }
        return pD
      }
      charmView(DD, CD, cD) {
        const ID = DD.lampLightCharmId.charAt(0).toUpperCase() + DD.lampLightCharmId.slice(1),
          pD = "bloom" === this.situation;
        return {
          id: DD.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${ID}`),
          effect: this.translate(`skyblockGame:lampLightCharm${ID}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(DD.lampLightCharmCost)
          }),
          owned: DD.lampLightCharmOwned,
          affordable: cD >= DD.lampLightCharmCost,
          socketed: CD.lampLightSocketed === DD.lampLightCharmId,
          lines: this.oddsLines(pD ? CD.lampLightBareBloom : CD.lampLightBareOpen, pD ? DD.lampLightCharmBloom : DD.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var DD, CD, cD, ID;
        const pD = this.message,
          iD = "ready" === (null === pD || void 0 === pD ? void 0 : pD.lampLightStatus) ? this.shop : null,
          fD = null !== (DD = null === pD || void 0 === pD ? void 0 : pD.lampLightBalance) && void 0 !== DD ? DD : 0,
          bD = this.atChair,
          QD = "loading" === (null === pD || void 0 === pD ? void 0 : pD.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === pD || void 0 === pD ? void 0 : pD.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          wD = "ready" !== (null === pD || void 0 === pD ? void 0 : pD.lampLightStatus) || bD ? null !== (CD = this.refusalKey) && void 0 !== CD ? CD : QD : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== pD && "locked" !== pD.lampLightStatus,
          status: null !== (cD = null === pD || void 0 === pD ? void 0 : pD.lampLightStatus) && void 0 !== cD ? cD : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(fD)
          }),
          releasing: null !== (ID = null === pD || void 0 === pD ? void 0 : pD.lampLightReleasing) && void 0 !== ID && ID,
          gained: null === pD || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === pD || void 0 === pD ? void 0 : pD.lampLightStatus) && bD && !this.isPending(),
          situation: this.situation,
          shop: null === iD ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: iD.lampLightOddsRod,
              island: this.translate(iD.lampLightIslandNameKey)
            }),
            heldRod: null !== iD.lampLightHeldRod,
            charms: iD.lampLightCharms.map((DD => this.charmView(DD, iD, fD))),
            tints: iD.lampLightTints.map((DD => {
              const CD = DD.lampLightTintId,
                [cD, ID, pD] = DD.lampLightTintColour;
              return {
                id: CD,
                name: this.translate(`skyblockGame:lampLightTint${CD.charAt(0).toUpperCase()}${CD.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(DD.lampLightTintCost)
                }),
                owned: DD.lampLightTintOwned,
                affordable: fD >= DD.lampLightTintCost,
                wearing: iD.lampLightTint === CD,
                colour: `rgb(${cD}, ${ID}, ${pD})`
              }
            })),
            wearingIslandColours: null === iD.lampLightTint
          },
          notice: null === wD ? null : this.translate(wD),
          sparkle: this.sparkle
        }
      }
    }
    const LI = "skyblockMagmawardView";
    class TI {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Uo = DD, this.now = CD, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = dD.map((() => 0)), this.wornAt = dD.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      kt(DD) {
        var CD, cD;
        const ID = dD.map(((CD, cD) => !0 === DD.magmawardPiecesWorn[cD]));
        if (!ID.includes(!0)) return this.snapshot = null, void this.Uo(null);
        const pD = this.now(),
          iD = this.snapshot;
        null === iD && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const fD = DD.magmawardFuelCarried,
          bD = !ID.includes(!1);
        let QD = null !== (CD = null === iD || void 0 === iD ? void 0 : iD.pulse) && void 0 !== CD ? CD : null,
          wD = null !== (cD = null === iD || void 0 === iD ? void 0 : iD.flare) && void 0 !== cD ? cD : null;
        DD.magmawardFuelBurned ? (QD = "burn", wD = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = pD, this.flareAt = pD) : null !== iD && fD > iD.fuel && (QD = "gain", this.pulseToken++, this.pulseAt = pD), bD && null !== iD && !iD.fullSet && (wD = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = pD, this.setLitAt = pD);
        const SD = dD.map(((DD, CD) => (ID[CD] && null !== iD && !iD.pieces[CD].worn && (this.wornTokens[CD]++, this.wornAt[CD] = pD), {
          itemName: DD,
          worn: ID[CD],
          wornToken: this.wornTokens[CD],
          justWorn: ID[CD] && this.isPlaying(this.wornAt[CD], pD)
        })));
        this.snapshot = {
          pieces: SD,
          wornCount: ID.filter(Boolean).length,
          fullSet: bD,
          fuel: fD,
          fuelState: fD <= 0 ? "empty" : fD <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, pD) ? QD : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, pD) ? wD : null,
          flareToken: this.flareToken,
          setLit: bD && this.isPlaying(this.setLitAt, pD),
          setLitToken: this.setLitToken
        }, this.Uo(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Uo(null)
      }
      isPlaying(DD, CD) {
        return CD - DD < 1200
      }
    }
    const GI = "skyblockGlowtideView";
    class RI {
      constructor(DD) {
        this.Uo = DD, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = DD => {
          this.arrow = DD, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      kt(DD) {
        this.bloom = DD.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Uo(null))
      }
      afterRender(DD, CD) {
        const cD = this.bloom;
        if (null === cD || null === DD) return;
        const ID = cD.glowtideBloomX - DD[0],
          iD = cD.glowtideBloomZ - DD[2],
          fD = Math.hypot(ID, iD),
          bD = this.snapshot,
          QD = null !== bD && void 0 !== bD && bD.inRange ? 1 : 0,
          wD = fD <= 12.5 + QD && DD[1] - cD.glowtideBloomY <= 10 + QD;
        !wD || null !== bD && void 0 !== bD && bD.inRange || this.inRangeToken++;
        const SD = {
          colour: cD.glowtideBloomColour,
          inRange: wD,
          distance: Math.round(fD),
          inRangeToken: this.inRangeToken
        };
        (null === bD || SD.colour !== bD.colour || SD.inRange !== bD.inRange || !wD && SD.distance !== bD.distance) && (this.snapshot = SD, this.Uo(SD));
        const BD = pD.e.computeShortestRotation(CD, (0, pD.Ab)([ID, 0, iD]));
        null === this.arrow || Math.abs(BD - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${BD}rad)`, this.arrowTurn = BD)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Uo(null)
      }
    }
    const kI = "skyblockGlowMeterView";
    class dI {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Uo = DD, this.now = CD, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      kt(DD) {
        const CD = this.now(),
          {
            glowMeterFill: cD,
            glowMeterCapacity: ID
          } = DD,
          pD = cD >= ID,
          iD = this.snapshot;
        null !== iD && (pD && !iD.full && (this.fullToken++, this.fullAt = CD), iD.full && !pD ? (this.burstToken++, this.burstAt = CD) : cD > iD.fill && (this.gainToken++, this.gainAt = CD)), this.snapshot = {
          fill: cD,
          LB: ID,
          ratio: Math.min(1, Math.max(0, cD / ID)),
          full: pD,
          rares: DD.glowMeterRares,
          ready: pD && this.isPlaying(this.fullAt, CD),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, CD),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, CD),
          gainToken: this.gainToken
        }, this.Uo(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Uo(null)
      }
      isPlaying(DD, CD) {
        return CD - DD < 2e3
      }
    }
    const YI = "skyblockHushWaitView";
    class WI {
      constructor(DD) {
        this.Uo = DD, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      kt(DD) {
        let {
          hushWaitMs: CD,
          hushWaitTotalMs: cD,
          hushWaitLines: ID
        } = DD;
        if (this.clearTimers(), this.token++, 0 === ID.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (CD <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: ID[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const pD = Math.max(null !== cD && void 0 !== cD ? cD : CD, CD),
          iD = pD - CD,
          fD = DD => pD * DD / ID.length,
          bD = DD => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: pD,
              elapsedMs: iD,
              line: ID[DD],
              lineIndex: DD
            })
          };
        let QD = 0;
        for (; QD + 1 < ID.length && fD(QD + 1) <= iD;) QD++;
        bD(QD);
        for (let wD = QD + 1; wD < ID.length; wD++) this.later(fD(wD) - iD, (() => {
          bD(wD)
        }));
        this.later(CD, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(DD) {
        this.snapshot = DD, this.Uo(DD)
      }
      later(DD, CD) {
        this.timers.push(setTimeout(CD, DD))
      }
      clearTimers() {
        for (const DD of this.timers) clearTimeout(DD);
        this.timers = []
      }
    }
    const sI = "skyblockTideChartsView",
      EI = 36e5,
      eI = 864e5;

    function uI(DD, CD, cD) {
      const [ID, pD, iD, fD] = DD.tideChartArea, bD = Math.floor(CD), QD = Math.floor(cD);
      return bD >= ID && bD <= iD && QD >= pD && QD <= fD
    }

    function hI(DD, CD, cD) {
      const [ID, pD, iD, fD] = DD.tideChartWater;
      return function(DD, CD, cD, ID, pD, iD) {
        const fD = 4 - YD(Math.floor(pD) - (DD - cD), cD);
        return 5 * YD(Math.floor(iD) - (CD - ID), ID) + fD
      }(ID, pD, iD, fD, CD, cD)
    }

    function rI(DD, CD, cD) {
      const ID = DD.tideCharts;
      for (let pD = 0; pD < ID.length; pD++)
        if (uI(ID[pD], CD, cD)) return ID[pD];
      return null
    }

    function AI(DD, CD, cD) {
      const ID = Math.max(0, CD - cD);
      return ID > eI ? DD("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(ID / eI))
      }) : ID > EI ? DD("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(ID / EI))
      }) : DD("skyblockGame:tideChartsTurnSoon")
    }
    class FI extends BD {
      constructor(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(DD, cD, ID), this.translate = CD, this.now = pD, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.MM = DD => {
          this.picked = DD, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      kt(DD) {
        const CD = this.message;
        if (null !== CD)
          for (const ID of DD.tideCharts) {
            var cD;
            const DD = CD.tideCharts.find((DD => DD.tideChartIsland === ID.tideChartIsland)),
              pD = ID.tideChartLit & ~(null !== (cD = null === DD || void 0 === DD ? void 0 : DD.tideChartLit) && void 0 !== cD ? cD : 0);
            void 0 !== DD && 0 !== pD && (this.pulse = {
              island: ID.tideChartIsland,
              cells: pD,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = DD, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(DD, CD) {
        var cD;
        const ID = null === this.message || Number.isNaN(DD) ? null : rI(this.message, DD, CD),
          pD = null !== (cD = null === ID || void 0 === ID ? void 0 : ID.tideChartIsland) && void 0 !== cD ? cD : null,
          iD = null === ID ? -1 : function(DD, CD, cD) {
            const [ID, pD, iD, fD] = DD.tideChartWater;
            return function(DD, CD, cD, ID, pD, iD, fD) {
              return ((pD - DD) / (cD + fD)) ** 2 + ((iD - CD) / (ID + fD)) ** 2 <= 1
            }(ID, pD, iD, fD, CD, cD, 2) ? hI(DD, CD, cD) : -1
          }(ID, DD, CD);
        return (pD !== this.hereIsland || iD !== this.hereCell) && (this.hereIsland = pD, this.hereCell = iD, null !== pD && (this.lastIsland = pD), !0)
      }
      afterRender(DD) {
        if (null === this.message) return;
        this.lastX = null === DD ? Number.NaN : DD[0], this.lastZ = null === DD ? Number.NaN : DD[2];
        const CD = this.locate(this.lastX, this.lastZ),
          cD = this.expirePulses();
        (CD || cD || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const DD = this.now();
        return !(!this.open || DD - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = DD, AI(this.translate, this.message.tideChartTurnsInMs, DD - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(DD, CD) {
        const cD = null === this.message ? null : rI(this.message, DD, CD);
        if (null === cD) return;
        const ID = hI(cD, DD, CD);
        0 === (cD.tideChartPreBlank & 1 << ID) && (this.cast = {
          island: cD.tideChartIsland,
          cell: ID,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const DD = this.now();
        let CD = !1;
        return 0 !== this.pulse.cells && DD - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, CD = !0), null !== this.cast && DD - this.cast.atMs >= 1500 && (this.cast = null, CD = !0), CD
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(DD, CD) {
        var cD;
        return null !== (cD = DD.tideCharts.find((DD => DD.tideChartIsland === CD))) && void 0 !== cD ? cD : null
      }
      describe(DD) {
        var CD, cD, ID;
        const pD = DD.tideChartIsland,
          iD = [];
        for (let MD = 0; MD < 25; MD++) {
          const CD = 1 << MD;
          0 !== (DD.tideChartLit & CD) ? iD.push("lit") : 0 !== (DD.tideChartClear & CD) ? iD.push("clear") : 0 !== (DD.tideChartPreBlank & CD) ? iD.push("shore") : iD.push("water")
        }
        const fD = function(DD) {
            let CD = 0;
            for (let cD = DD >>> 0; 0 !== cD; cD &= cD - 1) CD++;
            return CD
          }(DD.tideChartLit),
          bD = DD.tideChartInkCount,
          QD = this.translate(DD.tideChartIslandNameKey),
          wD = this.translate("skyblockGame:tideChartsLit", {
            lit: String(fD),
            ink: String(bD)
          }),
          SD = null === DD.tideChartPictureNameKey ? null : this.translate(DD.tideChartPictureNameKey),
          BD = this.hereIsland === pD && -1 !== this.hereCell ? this.hereCell : null,
          yD = [`${QD}: ${wD}.`];
        if (null !== SD && yD.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: SD
          })), null !== BD) {
          const DD = Math.floor(BD / 5) + 1,
            CD = BD % 5 + 1;
          yD.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(DD),
            column: String(CD)
          }))
        }
        return {
          island: pD,
          islandName: QD,
          cells: iD,
          hereCell: BD,
          lit: fD,
          ink: bD,
          litText: wD,
          pictureName: SD,
          gridLabel: yD.join(" "),
          pulseCells: this.pulse.island === pD ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (CD = this.cast) || void 0 === CD ? void 0 : CD.island) === pD ? this.cast.cell : null,
          castToken: null !== (cD = null === (ID = this.cast) || void 0 === ID ? void 0 : ID.token) && void 0 !== cD ? cD : 0
        }
      }
      buildSnapshot() {
        var DD, CD, cD;
        const ID = this.message;
        if (null === ID || 0 === ID.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const pD = this.findChart(ID, this.hereIsland),
          iD = null !== (DD = null !== (CD = null !== (cD = this.findChart(ID, this.open ? this.picked : null)) && void 0 !== cD ? cD : pD) && void 0 !== CD ? CD : this.findChart(ID, this.lastIsland)) && void 0 !== DD ? DD : ID.tideCharts[0],
          fD = null === pD ? null : this.describe(pD);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: fD,
          card: iD === pD ? fD : this.describe(iD),
          turnsText: AI(this.translate, ID.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(ID.tideChartBookCount)
          }),
          tabs: ID.tideCharts.map((DD => ({
            island: DD.tideChartIsland,
            name: this.translate(DD.tideChartIslandNameKey),
            selected: DD.tideChartIsland === iD.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Dp = "skyblockRegularsView",
      Cp = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      cp = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Ip(DD, CD) {
      return "given" === DD ? CD.given : "owed" === DD ? CD.owed : CD.goal
    }
    class pp extends BD {
      constructor(DD, CD, cD, ID) {
        super(DD, cD, ID), this.translate = CD, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = DD => DD, this.openIsland = DD => {
          this.selected = DD, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = DD => {
          this.selected = DD, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      kt(DD) {
        this.message = DD, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const DD = this.openedFromReachLog;
        return this.openedFromReachLog = !1, DD
      }
      setTranslator(DD, CD, cD) {
        this.translate = DD, void 0 !== cD && (this.itemName = cD), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(DD, CD, cD) {
        return {
          text: this.translate(Ip(DD, CD), cD),
          given: "given" === DD
        }
      }
      describeRegular(DD, CD) {
        const cD = this.translate,
          ID = null !== DD.regularKg,
          pD = DD.regularMeetings,
          iD = ID ? 0 === pD ? cD("skyblockGame:regularsNotMet") : 1 === pD ? cD("skyblockGame:regularsMeetingsOne") : cD("skyblockGame:regularsMeetings", {
            count: pD
          }) : "";
        return {
          id: DD.regularId,
          name: cD(DD.regularNameKey),
          line: cD(DD.regularLineKey),
          itemName: DD.regularFishItem,
          fishName: this.itemName(DD.regularFishItem),
          tagged: ID,
          size: null === DD.regularKg ? cD("skyblockGame:regularsNotTagged") : cD("skyblockGame:regularsSize", {
            kg: DD.regularKg.toFixed(1)
          }),
          meetings: iD,
          chance: cD("skyblockGame:regularsChance", {
            count: DD.regularOneInCasts
          }),
          resting: DD.regularRestingToday,
          gifts: [{
            text: cD("skyblockGame:regularsGiftFlare"),
            given: pD >= 3
          }, this.describeGift(DD.regularTintGift, Cp, {
            tint: cD(DD.regularTintNameKey)
          })],
          history: [...DD.regularHistory].reverse().map((DD => {
            const ID = DD.regularMeetingKg.toFixed(1),
              pD = CD - DD.regularMeetingDay;
            return pD <= 0 ? cD("skyblockGame:regularsToday", {
              kg: ID
            }) : cD("skyblockGame:regularsDaysAgo", {
              days: pD,
              kg: ID
            })
          }))
        }
      }
      describeIsland(DD, CD) {
        return {
          id: DD.regularsIslandId,
          name: this.translate(DD.regularsIslandNameKey),
          charm: this.describeGift(DD.regularsCharmGift, cp, {
            charm: this.translate(DD.regularsCharmNameKey)
          }),
          regulars: DD.regularsList.map((DD => this.describeRegular(DD, CD)))
        }
      }
      buildSnapshot() {
        var DD, CD, cD, ID;
        const pD = this.message;
        if (null === pD) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const iD = pD.regularsIslands.map((DD => this.describeIsland(DD, pD.regularsToday))),
          fD = null !== (DD = null !== (CD = null === (cD = iD.find((DD => DD.id === this.selected))) || void 0 === cD ? void 0 : cD.id) && void 0 !== CD ? CD : null === (ID = iD[0]) || void 0 === ID ? void 0 : ID.id) && void 0 !== DD ? DD : "";
        return {
          enabled: !0,
          open: this.open,
          selected: fD,
          islands: iD
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const ip = "skyblockHiddenWatersView";
    class fp {
      constructor(DD) {
        this.Uo = DD, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      kt(DD) {
        this.snapshot = function(DD) {
          const [CD, cD] = DD.hiddenWatersMapSize, ID = (DD, ID) => ({
            left: 1 - DD / CD,
            top: ID / cD
          }), pD = new Map;
          for (const [fD, bD] of DD.hiddenWatersGlimpses) {
            var iD;
            const DD = null !== (iD = pD.get(fD)) && void 0 !== iD ? iD : [];
            DD.push(bD), pD.set(fD, DD)
          }
          return {
            found: DD.hiddenWatersFound,
            total: DD.hiddenWatersTotal,
            aspect: cD / CD,
            pins: DD.hiddenWatersPins.map((DD => {
              let [CD, cD] = DD;
              return ID(CD, cD)
            })),
            islands: DD.hiddenWatersIslands.map((DD => {
              let [pD, iD, fD, bD] = DD;
              const {
                left: QD,
                top: wD
              } = ID(fD + 1, iD);
              return {
                left: QD,
                top: wD,
                width: (fD + 1 - pD) / CD,
                height: (bD + 1 - iD) / cD
              }
            })),
            glimpses: pD
          }
        }(DD), this.Uo(this.snapshot)
      }
    }
    const bp = "skyblockDialogueView";
    class Qp extends BD {
      constructor(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(DD, cD, ID), this.translate = CD, this.requestDialogue = pD, this.now = iD, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = DD => {
          this.selection = {
            kind: "quest",
            questId: DD
          }, this.request(), this.show()
        }, this.selectCharacter = DD => {
          this.selection = {
            kind: "character",
            npcId: DD
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      kt(DD) {
        this.received = !0, this.scripts = DD.questDialogueScripts, this.speakers = new Map(DD.questDialogueSpeakers.map((DD => [DD.dialogueSpeakerId, DD]))), this.emit()
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const DD = this.now();
        DD >= this.requestAvailableAt && (this.requestAvailableAt = DD + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var DD;
        const CD = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...CD,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const cD = this.selection;
        if ("quest" === cD.kind) {
          const DD = this.scripts.find((DD => DD.dialogueQuestId === cD.questId));
          return {
            ...CD,
            characters: [],
            questFocus: cD.questId,
            conversations: DD ? [this.conversation(DD)] : []
          }
        }
        const ID = [];
        for (let iD = this.scripts.length - 1; iD >= 0; iD--) {
          const DD = this.scripts[iD].dialogueLines;
          for (let CD = DD.length - 1; CD >= 0; CD--) ID.includes(DD[CD].dialogueSpeakerId) || ID.push(DD[CD].dialogueSpeakerId)
        }
        const pD = null !== cD.npcId && ID.includes(cD.npcId) ? cD.npcId : null !== (DD = ID[0]) && void 0 !== DD ? DD : null;
        return {
          ...CD,
          characters: ID.map((DD => {
            var CD, cD;
            return {
              id: DD,
              styling: null !== (CD = null === (cD = this.speakers.get(DD)) || void 0 === cD ? void 0 : cD.dialogueSpeakerStyling) && void 0 !== CD ? CD : DD,
              selected: DD === pD
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((DD => DD.dialogueLines.some((DD => DD.dialogueSpeakerId === pD)))).map((DD => this.conversation(DD))).reverse()
        }
      }
      conversation(DD) {
        let CD = null;
        return {
          questId: DD.dialogueQuestId,
          questName: this.translate(DD.dialogueQuestNameKey),
          completed: DD.dialogueQuestCompleted,
          lines: DD.dialogueLines.map(((DD, cD) => {
            var ID;
            const pD = DD.dialogueSpeakerId === CD || null === (ID = this.speakers.get(DD.dialogueSpeakerId)) || void 0 === ID ? void 0 : ID.dialogueSpeakerStyling;
            return CD = DD.dialogueSpeakerId, {
              key: cD,
              display: {
                line: {
                  translationKey: DD.dialogueLineKey,
                  params: this.params(DD.dialogueLineParams)
                },
                speakerName: pD,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(DD) {
        if (void 0 !== DD) return Object.fromEntries(Object.entries(DD).map((DD => {
          let [CD, cD] = DD;
          return [CD, "string" === typeof cD ? cD : this.translate(cD.translationKey)]
        })))
      }
    }
    var wp = cD(611),
      Sp = cD(1266),
      Bp = cD(90);
    const yp = "skyblockAutographsView";

    function Mp(DD) {
      const CD = wp.h[DD];
      return {
        label: CD.chatTag.map((DD => DD.str)).join(""),
        icon: CD.icon,
        colour: CD.mainRGB
      }
    }
    class tp extends BD {
      constructor(DD) {
        let CD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = CD, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      kt(DD) {
        this.signatures = DD.autographSignatures, DD.autographOpen ? this.show() : this.emit()
      }
      setTranslator(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = CD, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var DD;
        const CD = null !== (DD = this.signatures) && void 0 !== DD ? DD : [],
          cD = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          ID = [...CD].sort(((DD, CD) => Number(null !== CD.autographRank) - Number(null !== DD.autographRank) || CD.autographSignedAtMs - DD.autographSignedAtMs)).map((DD => ({
            key: `${DD.autographSignedAtMs}|${DD.autographSignerName}`,
            name: (0, Sp.d)(DD.autographSignerName, !Bp.featureFlags.canSeeRealPlayerNames),
            rank: null === DD.autographRank ? null : Mp(DD.autographRank),
            signedOn: cD.format(DD.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: ID,
          total: ID.length,
          rankTotal: ID.filter((DD => null !== DD.rank)).length
        }
      }
    }
    const Zp = "skyblockHudView",
      op = () => {},
      vp = {
        getItem: () => null,
        setItem: op,
        removeItem: op
      };
    class Np {
      constructor(DD) {
        let {
          translate: CD,
          translateWithIcons: cD,
          setMenuOpen: ID = op,
          dismissMenu: pD = () => {
            ID(!1)
          },
          publishSkills: iD = op,
          publishQuests: fD = op,
          publishQuestNotification: bD = op,
          publishDungeons: QD = op,
          publishCollections: wD = op,
          publishMap: SD = op,
          publishHud: BD = op,
          publishPortalTransit: yD = op,
          publishDailyReward: tD = op,
          publishMailbox: ZD = op,
          publishQuestGraph: oD = op,
          publishForge: vD = op,
          publishSmuggler: ND = op,
          publishKeepersChair: gD = op,
          publishReachLog: XD = op,
          publishLampLight: mD = op,
          publishMagmaward: nD = op,
          publishGlowtide: PD = op,
          publishGlowMeter: HD = op,
          publishHushWait: UD = op,
          publishPassage: xD = op,
          publishTideCharts: qD = op,
          publishRegulars: JD = op,
          publishHiddenWaters: KD = op,
          publishDialogue: aD = op,
          publishAutographs: VD = op,
          isLoadingScreenUp: zD = () => !1,
          onDailyRewardCoinLanded: jD = op,
          onDailyRewardStarted: lD = op,
          onDailyRewardFinished: LD = op,
          onDailyRewardItemLanded: TD = op,
          onMailboxStarted: GD = op,
          journeyStorage: RD = vp,
          requestTracking: kD = op,
          requestTravel: dD = op,
          requestDungeonEnter: YD = op,
          requestQuestJump: WD = op,
          requestQuestArrive: sD = op,
          requestForge: ED = op,
          requestSmuggle: eD = op,
          requestKeepersChairAim: uD = op,
          requestReachLogOpen: hD = op,
          requestLampLight: rD = op,
          requestDialogue: AD = op
        } = DD;
        this.navigation = void 0, this.map = void 0, this.compass = new OD, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new HI.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = DD => DD, this.close = () => {
          for (const DD of this.panels) DD.close()
        }, this.setMenuOpen = ID, this.publishHud = BD, this.portalTransit = new Gc(yD, RD), this.magmaward = new TI(nD), this.glowtide = new RI(PD), this.glowMeter = new dI(HD), this.hushWait = new WI(UD), this.dailyReward = new dc(tD, (() => zD() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (DD => {
          this.quests.setNotificationsHeld(DD)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), jD, lD, LD, TD);
        const FD = DD => {
          this.panels.some((DD => DD.isOpen())) || (DD ? pD() : this.setMenuOpen(!1))
        };
        this.skills = new fc(iD, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), CD, void 0, void 0, FD), this.quests = new Bc(fD, kD, CD, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, FD, bD), this.dungeons = new tc(QD, CD, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, FD, YD), this.collections = new lc(wD, CD, (() => {
          this.beforePanelOpen(this.collections)
        }), FD), this.map = new MD(SD, dD, CD, (() => {
          this.beforePanelOpen(this.map)
        }), FD), this.questGraph = new Ac(oD, CD, (() => {
          this.beforePanelOpen(this.questGraph)
        }), FD, WD, sD, RD), this.forge = new oI(vD, CD, (() => {
          this.beforePanelOpen(this.forge)
        }), FD, ED), this.smuggler = new gI(ND, CD, (() => {
          this.beforePanelOpen(this.smuggler)
        }), FD, eD), this.lampLight = new lI(mD, CD, rD, this.commandPacer), this.keepersChair = new xI(gD, CD, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (DD => {
          this.lampLight.onChairClosed(), FD(DD)
        }), uD, Date.now, this.commandPacer), this.reachLog = new zI(XD, CD, (() => {
          this.beforePanelOpen(this.reachLog)
        }), FD, hD, this.commandPacer), this.passage = new PI(xD, CD, (() => {
          this.beforePanelOpen(this.passage)
        }), FD), this.tideCharts = new FI(qD, CD, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), FD), this.regulars = new pp(JD, CD, (() => {
          this.beforePanelOpen(this.regulars)
        }), (DD => {
          this.regulars.takeReturnToReachLog() && !DD && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), FD(DD)
        })), this.hiddenWaters = new fp(KD), this.dialogue = new Qp(aD, CD, (() => {
          this.beforePanelOpen(this.dialogue)
        }), FD, AD), this.autographs = new tp(VD, (() => {
          this.beforePanelOpen(this.autographs)
        }), FD), this.mailbox = new Ec(ZD, (() => zD() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), GD), this.quests.translateWithIcons = null !== cD && void 0 !== cD ? cD : null, this.skills.onLevelUp = DD => {
          this.quests.notify(DD)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new pc(this.map, this.quests, this.compass, CD)
      }
      getHudSnapshot() {
        const DD = this.hudSnapshot,
          CD = this.dailyReward.getHeldCoins();
        return null === DD || CD <= 0 || !("hudPurseCoins" in DD) ? DD : {
          ...DD,
          hudPurseCoins: Math.max(0, DD.hudPurseCoins - CD)
        }
      }
      receiveHud(DD) {
        this.hudSnapshot = DD, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(DD) {
        this.setMenuOpen(!0);
        const CD = DD === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = DD;
        for (const cD of this.panels) cD === DD || CD && cD === this.reachLog || cD.close();
        this.openingPanel = null
      }
      setTranslator(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CD => this.resolveItemName(CD, DD);
        this.quests.translateWithIcons = null !== cD && void 0 !== cD ? cD : null, this.navigation.setTranslator(DD, CD), this.lampLight.setTranslator(DD, CD), this.mailbox.setItemName(ID);
        for (const pD of this.panels) pD.setTranslator(DD, CD, ID)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const DD of this.panels) DD.dispose()
      }
    }
    var gp = cD(1049),
      Xp = cD.n(gp),
      mp = cD(16),
      np = cD(35994),
      Op = cD(3200),
      Pp = cD(1893),
      Hp = cD(1872),
      Up = cD(9065),
      xp = cD(1192),
      qp = cD(1440),
      Jp = cD(1093);

    function Kp(DD) {
      let {
        controller: CD,
        minimap: cD,
        children: ID
      } = DD;
      const iD = (0, qp.g)(Zp, CD.getHudSnapshot()),
        [fD, bD] = (0, HD.useState)(CD.skills.getSnapshot().overallLevel);
      (0, qp.f)(ic, (DD => {
        bD(DD.overallLevel)
      }));
      const QD = (0, HD.useRef)(null);
      (0, qp.f)(kc, (DD => {
        ! function(DD, CD) {
          if (null === DD || "function" !== typeof DD.animate) return;
          const cD = CD ? 1.35 : 1.15;
          DD.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${cD})`
          }, {
            transform: "scale(1)"
          }], {
            duration: CD ? 320 : 160,
            easing: "ease-out"
          }), DD.classList.toggle("Receiving", !CD), CD && (DD.classList.remove("Shine"), DD.offsetWidth, DD.classList.add("Shine"))
        }(QD.current, DD)
      }));
      const {
        t: wD
      } = (0, xp.F)(), {
        isTouchScreen: SD
      } = (0, mp.o)(["isTouchScreen"]), [BD, yD] = (0, HD.useState)(null);
      return (0, Op.j)(BD, ".SkyblockRightHud"), null !== iD || cD ? (0, Jp.jsx)(np.e, {
        placement: "topRight",
        children: (0, Jp.jsxs)("div", {
          className: Xp()("SkyblockRightHud", {
            TouchScreen: SD
          }),
          children: [cD, null !== iD && (0, Jp.jsxs)("div", {
            ref: yD,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in iD ? (0, Jp.jsx)("div", {
              className: "SkyblockHudHelp",
              children: iD.hudHelpText
            }) : (0, Jp.jsxs)(Jp.Fragment, {
              children: [(0, Jp.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Jp.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Jp.jsx)("strong", {
                    style: {
                      color: pD.J.cyanUiText
                    },
                    children: wD(iD.hudZoneNameKey)
                  }), null !== fD && (0, Jp.jsx)("span", {
                    style: {
                      color: pD.J.goldUiText
                    },
                    children: wD("skyblockGame:level", {
                      level: (0, Up.g)(fD)
                    })
                  })]
                }), (0, Jp.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: QD,
                  children: [(0, Jp.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Jp.jsx)(Pp.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Up.g)(iD.hudPurseCoins)]
                })]
              }), iD.hudClockText.length > 0 && (0, Jp.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Jp.jsx)(Hp.c, {
                  text: iD.hudClockText
                })
              })]
            }), ID, "hudZoneNameKey" in iD && (0, Jp.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function ap(DD) {
      let {
        icon: CD
      } = DD;
      const cD = (0, HD.useCallback)((DD => {
        null === DD || void 0 === DD || DD.replaceChildren(sC(CD))
      }), [CD]);
      return (0, Jp.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: cD
      })
    }

    function Vp(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)();
      return (0, Jp.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: CD.display.mountPlayer,
        title: cD("skyblockGame:mapYouAreHere"),
        children: (0, Jp.jsx)(ap, {
          icon: "player"
        })
      })
    }
    const zp = cD(37926),
      jp = Object.fromEntries(zp.keys().map((DD => [DD.replace(/^\.\/(.*)\.png$/, "$1"), zp(DD)])));

    function lp(DD, CD) {
      var cD;
      return null !== (cD = jp[DD]) && void 0 !== cD ? cD : jp[CD]
    }

    function Lp(DD) {
      let {
        imageKey: CD,
        fallbackImageKey: cD,
        geometryKey: ID,
        alt: pD,
        className: iD
      } = DD;
      const [fD, bD] = (0, HD.useState)((() => function(DD, CD) {
        return [{
          id: 0,
          imageKey: DD,
          geometryKey: CD,
          phase: "shown"
        }]
      }(CD, ID))), QD = function(DD, CD, cD) {
        const ID = DD[DD.length - 1];
        if (ID.imageKey === CD && ID.geometryKey === cD) return DD;
        const pD = {
          id: ID.id + 1,
          imageKey: CD,
          geometryKey: cD,
          phase: "entering"
        };
        return ID.geometryKey === cD ? [{
          ...ID,
          phase: "leaving"
        }, pD] : [pD]
      }(fD, CD, ID);
      return QD !== fD && bD(QD), (0, Jp.jsx)(Jp.Fragment, {
        children: QD.map((DD => (0, Jp.jsx)("img", {
          className: Xp()("SkyblockMapTerrainImage", iD, {
            Entering: "entering" === DD.phase,
            Leaving: "leaving" === DD.phase
          }),
          src: lp(DD.imageKey, cD),
          alt: "leaving" === DD.phase ? "" : pD,
          onAnimationEnd: () => {
            bD((CD => function(DD, CD) {
              return DD.flatMap((DD => DD.id !== CD ? [DD] : "leaving" === DD.phase ? [] : [{
                ...DD,
                phase: "shown"
              }]))
            }(CD, DD.id)))
          }
        }, DD.id)))
      })
    }
    var Tp = cD(4325),
      Gp = cD(1442);

    function Rp(DD) {
      if ("Tab" !== DD.key) return;
      const CD = Array.from(DD.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        cD = CD.indexOf(document.activeElement);
      var ID;
      if (DD.shiftKey && cD <= 0) DD.preventDefault(), null === (ID = CD.at(-1)) || void 0 === ID || ID.focus();
      else if (!DD.shiftKey && (-1 === cD || cD === CD.length - 1)) {
        var pD;
        DD.preventDefault(), null === (pD = CD[0]) || void 0 === pD || pD.focus()
      }
    }

    function kp() {
      const DD = (0, HD.useRef)(null);
      return (0, HD.useCallback)((CD => {
        var cD;
        CD ? (DD.current = document.activeElement, CD.focus()) : null === (cD = DD.current) || void 0 === cD || cD.focus()
      }), [])
    }

    function dp(DD) {
      let {
        percent: CD,
        label: cD,
        levelUpToken: ID,
        colour: pD
      } = DD;
      return (0, Jp.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": cD,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": CD,
        "aria-valuetext": cD,
        children: [(0, Jp.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${CD/100})`
          }
        }), null !== ID && void 0 !== ID && (0, Jp.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": pD
          }
        }, ID)]
      })
    }

    function Yp(DD) {
      let {
        mount: CD
      } = DD;
      return (0, Jp.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: CD,
        hidden: !0,
        children: (0, Jp.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Jp.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Jp.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Wp(DD, CD, cD, ID) {
      (0, HD.useLayoutEffect)((() => {
        const pD = DD.current;
        if (!cD || null === CD || void 0 === CD || !CD.local || !pD) return;
        const iD = Array.from(pD.querySelectorAll(".SkyblockMapNode")),
          fD = [...CD.points, ...CD.portals],
          bD = () => {
            const DD = pD.clientWidth,
              cD = pD.clientHeight,
              bD = iD.map(((pD, iD) => {
                const bD = fD[iD];
                return {
                  id: bD.id,
                  portal: iD >= CD.points.length,
                  x: bD.position[0] * DD / 100,
                  y: bD.position[1] * cD / 100,
                  width: pD.offsetWidth / ID,
                  height: pD.offsetHeight / ID
                }
              })),
              QD = new Map(fD.map(((DD, CD) => [DD.id, iD[CD]])));
            for (const CD of function(DD, CD, cD) {
                const ID = [],
                  pD = [...DD].sort(((DD, CD) => Number(CD.portal) - Number(DD.portal) || DD.id.localeCompare(CD.id)));
                for (const iD of pD) {
                  const DD = DD => Math.max(iD.width / 2, Math.min(CD - iD.width / 2, DD)),
                    pD = DD => Math.max(iD.height / 2, Math.min(cD - iD.height / 2, DD)),
                    fD = [DD(iD.x)],
                    bD = [pD(iD.y)];
                  for (const CD of ID) fD.push(DD(CD.x - (CD.width + iD.width) / 2 - 4), DD(CD.x + (CD.width + iD.width) / 2 + 4)), bD.push(pD(CD.y - (CD.height + iD.height) / 2 - 4), pD(CD.y + (CD.height + iD.height) / 2 + 4));
                  let QD = {
                      ...iD,
                      x: fD[0],
                      y: bD[0]
                    },
                    wD = 1 / 0,
                    SD = 1 / 0;
                  for (const CD of new Set(fD))
                    for (const DD of new Set(bD)) {
                      let cD = 0;
                      for (const fD of ID) cD += Math.max(0, (iD.width + fD.width) / 2 + 4 - Math.abs(CD - fD.x)) * Math.max(0, (iD.height + fD.height) / 2 + 4 - Math.abs(DD - fD.y));
                      const pD = (CD - iD.x) ** 2 + (DD - iD.y) ** 2;
                      (cD < wD || cD === wD && pD < SD) && (QD = {
                        ...iD,
                        x: CD,
                        y: DD
                      }, wD = cD, SD = pD)
                    }
                  ID.push(QD)
                }
                return ID
              }(bD, DD, cD)) {
              const DD = QD.get(CD.id);
              DD.style.left = `${CD.x}px`, DD.style.top = `${CD.y}px`
            }
          };
        bD();
        const QD = new ResizeObserver(bD);
        QD.observe(pD);
        for (const DD of iD) QD.observe(DD);
        return () => {
          QD.disconnect()
        }
      }), [DD, CD, cD, ID])
    }
    const sp = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Ep = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function ep(DD, CD, cD) {
      return Math.min(cD, Math.max(CD, DD))
    }

    function hp(DD, CD, cD) {
      const ID = Math.min(1, cD * CD / DD),
        pD = Math.min(1, DD / (cD * CD));
      return {
        x0: (1 - ID) / 2,
        y0: (1 - pD) / 2,
        x1: (1 + ID) / 2,
        y1: (1 + pD) / 2
      }
    }

    function rp(DD, CD, cD, ID) {
      const pD = CD * (ID - cD);
      if (pD <= 1) return .5 - CD * (cD + ID) / 2;
      const iD = .45 * Math.min(1, pD - 1);
      return ep(DD, 1 - CD * ID - iD, iD - CD * cD)
    }

    function Ap(DD, CD) {
      const cD = ep(DD.zoom, 1, 12);
      return {
        zoom: cD,
        x: rp(DD.x, cD, CD.x0, CD.x1),
        y: rp(DD.y, cD, CD.y0, CD.y1)
      }
    }

    function Fp(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ep;
      const iD = ep(DD.zoom * CD, 1, 12),
        fD = iD / DD.zoom;
      return Ap({
        zoom: iD,
        x: cD - (cD - DD.x) * fD,
        y: ID - (ID - DD.y) * fD
      }, pD)
    }

    function Di(DD, CD, cD, ID) {
      const [pD, iD] = (0, HD.useState)(sp);
      (0, HD.useEffect)((() => {
        iD(sp)
      }), [cD]), (0, HD.useEffect)((() => {
        const cD = DD.current;
        if (!CD || !cD) return;
        const pD = () => hp(cD.clientWidth, cD.clientHeight, ID),
          fD = DD => {
            const CD = cD.getBoundingClientRect();
            return {
              x: (DD.clientX - CD.left) / CD.width,
              y: (DD.clientY - CD.top) / CD.height
            }
          },
          bD = new Map;
        let QD = {
            x: 0,
            y: 0
          },
          wD = !1,
          SD = 0;
        const BD = DD => {
            DD.preventDefault();
            const CD = DD.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * DD.deltaY : DD.deltaY,
              cD = fD(DD);
            iD((DD => Fp(DD, Math.exp(.0015 * -CD), cD.x, cD.y, pD())))
          },
          yD = DD => {
            "mouse" === DD.pointerType && 0 !== DD.button || (bD.set(DD.pointerId, fD(DD)), 1 === bD.size && (QD = {
              x: DD.clientX,
              y: DD.clientY
            }, wD = !1), SD = 0)
          },
          MD = DD => {
            const CD = bD.get(DD.pointerId);
            if (!CD) return;
            const ID = fD(DD);
            if (bD.set(DD.pointerId, ID), 2 === bD.size) {
              const [DD, CD] = [...bD.values()], cD = Math.hypot(DD.x - CD.x, DD.y - CD.y);
              if (SD > 0) {
                const ID = cD / SD;
                iD((cD => Fp(cD, ID, (DD.x + CD.x) / 2, (DD.y + CD.y) / 2, pD())))
              }
              return SD = cD, void(wD = !0)
            }!wD && Math.hypot(DD.clientX - QD.x, DD.clientY - QD.y) < 4 || (wD || (wD = !0, cD.setPointerCapture(DD.pointerId)), iD((DD => function(DD, CD, cD) {
              let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ep;
              return Ap({
                zoom: DD.zoom,
                x: DD.x + CD,
                y: DD.y + cD
              }, ID)
            }(DD, ID.x - CD.x, ID.y - CD.y, pD()))))
          },
          tD = DD => {
            bD.delete(DD.pointerId), SD = 0
          },
          ZD = DD => {
            wD && (DD.stopPropagation(), DD.preventDefault(), wD = !1)
          },
          oD = new ResizeObserver((() => {
            iD((DD => Ap(DD, pD())))
          }));
        return oD.observe(cD), cD.addEventListener("wheel", BD, {
          passive: !1
        }), cD.addEventListener("pointerdown", yD), cD.addEventListener("pointermove", MD), cD.addEventListener("pointerup", tD), cD.addEventListener("pointercancel", tD), cD.addEventListener("click", ZD, !0), () => {
          oD.disconnect(), cD.removeEventListener("wheel", BD), cD.removeEventListener("pointerdown", yD), cD.removeEventListener("pointermove", MD), cD.removeEventListener("pointerup", tD), cD.removeEventListener("pointercancel", tD), cD.removeEventListener("click", ZD, !0)
        }
      }), [DD, CD, cD, ID]);
      return {
        view: pD,
        zoomBy: CD => {
          const cD = DD.current;
          cD && iD((DD => Fp(DD, CD, .5, .5, hp(cD.clientWidth, cD.clientHeight, ID))))
        }
      }
    }

    function Ci(DD) {
      var CD, cD, ID, pD;
      let {
        controller: iD,
        navigation: fD
      } = DD;
      const bD = (0, qp.g)(yD, iD.getSnapshot()),
        {
          t: QD
        } = (0, xp.F)(),
        wD = kp(),
        SD = bD.presentation,
        BD = (0, HD.useRef)(null),
        MD = (0, HD.useRef)(null),
        tD = Boolean(bD.open && (null === SD || void 0 === SD ? void 0 : SD.local) && SD.background),
        ZD = Di(BD, tD, `${bD.open}|${bD.tab}|${null===SD||void 0===SD||null===(CD=SD.background)||void 0===CD?void 0:CD.geometryKey}`, null !== (cD = null === SD || void 0 === SD || null === (ID = SD.background) || void 0 === ID ? void 0 : ID.ratio) && void 0 !== cD ? cD : 2);
      if (Wp(MD, SD, bD.open, ZD.view.zoom), !SD || !bD.open) return null;
      const oD = SD.local ? SD.background : null,
        vD = {
          "--map-ratio": String(null !== (pD = null === oD || void 0 === oD ? void 0 : oD.ratio) && void 0 !== pD ? pD : 2),
          backgroundColor: null === oD || void 0 === oD ? void 0 : oD.colour
        },
        ND = {
          "--map-zoom": String(ZD.view.zoom),
          transform: `translate(${100*ZD.view.x}%, ${100*ZD.view.y}%) scale(${ZD.view.zoom})`
        };
      return (0, Jp.jsx)(Tp.e, {
        show: bD.open,
        close: iD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: wD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockMapTitle",
                children: QD("skyblockGame:map")
              }), SD.minimap && (0, Jp.jsx)("p", {
                children: SD.minimap.caption
              })]
            }), (0, Jp.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((DD => (0, Jp.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": DD === bD.tab ? "true" : void 0,
                className: Xp()({
                  Selected: DD === bD.tab
                }),
                "aria-pressed": DD === bD.tab,
                onClick: () => {
                  iD.selectTab(DD)
                },
                children: QD("local" === DD ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, DD)))
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: iD.dismiss
            })]
          }), (0, Jp.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Jp.jsxs)("div", {
              ref: BD,
              className: Xp()("SkyblockMapCanvas", {
                Local: SD.local,
                Overview: !SD.local,
                Zoomed: ZD.view.zoom > 1
              }),
              style: vD,
              children: [(0, Jp.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: tD ? ND : void 0,
                children: (0, Jp.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: MD,
                  children: [oD && (0, Jp.jsx)(Lp, {
                    className: "SkyblockMapTerrain",
                    imageKey: oD.imageKey,
                    fallbackImageKey: oD.fallbackImageKey,
                    geometryKey: oD.geometryKey,
                    alt: oD.label
                  }), SD.local && (0, Jp.jsx)(Yp, {
                    mount: fD.display.mountMapSearchArea
                  }), !SD.local && (0, Jp.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: SD.connections.map((DD => (0, Jp.jsx)("line", {
                      className: Xp()({
                        Explored: DD.explored
                      }),
                      x1: DD.start[0],
                      y1: DD.start[1],
                      x2: DD.end[0],
                      y2: DD.end[1]
                    }, DD.id)))
                  }), SD.points.map((DD => {
                    const CD = !SD.local && DD.thumbnail ? jp[DD.thumbnail] : void 0;
                    return (0, Jp.jsxs)("div", {
                      className: Xp()("SkyblockMapNode", {
                        Current: DD.current
                      }),
                      style: {
                        left: `${DD.position[0]}%`,
                        top: `${DD.position[1]}%`
                      },
                      children: [(0, Jp.jsxs)(Gp.i, {
                        className: Xp()("SkyblockMapPin", {
                          Unknown: !DD.visited,
                          Current: DD.current
                        }),
                        disabled: bD.pending,
                        onClick: () => {
                          iD.travel(DD.travelKind, DD.travelId)
                        },
                        children: [CD && (0, Jp.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: CD,
                          alt: ""
                        }), !CD && (0, Jp.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Jp.jsx)(ap, {
                            icon: DD.icon
                          })
                        }), (0, Jp.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: DD.name
                        })]
                      }), DD.current && (0, Jp.jsx)("span", {
                        className: Xp()("SkyblockMapHereBadge", {
                          Above: DD.position[1] > 50
                        }),
                        children: QD("skyblockGame:mapYouAreHere")
                      })]
                    }, DD.id)
                  })), SD.portals.map((DD => (0, Jp.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${DD.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${DD.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Jp.jsxs)(Gp.i, {
                      className: "SkyblockMapPin",
                      disabled: bD.pending,
                      onClick: () => {
                        iD.travel(DD.travelKind, DD.travelId)
                      },
                      children: [(0, Jp.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: DD.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Jp.jsx)(ap, {
                          icon: DD.icon
                        })
                      }), (0, Jp.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: DD.name
                      })]
                    })
                  }, DD.id))), SD.local && (0, Jp.jsx)(Vp, {
                    controller: fD
                  })]
                })
              }), tD && (0, Jp.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Jp.jsx)("button", {
                  type: "button",
                  "aria-label": QD("skyblockGame:mapZoomIn"),
                  disabled: ZD.view.zoom >= 12,
                  onClick: () => {
                    ZD.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Jp.jsx)("button", {
                  type: "button",
                  "aria-label": QD("skyblockGame:mapZoomOut"),
                  disabled: ZD.view.zoom <= 1,
                  onClick: () => {
                    ZD.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Jp.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: bD.feedback
              })]
            })
          }), (0, Jp.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [SD.progress && (0, Jp.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Jp.jsx)("span", {
                children: SD.progress
              }), (0, Jp.jsx)(dp, {
                percent: SD.percent,
                label: SD.progress
              })]
            }), SD.noLandmarks && (0, Jp.jsx)("span", {
              children: QD("skyblockGame:mapNoLandmarks")
            }), SD.canTravel && (0, Jp.jsx)("span", {
              className: "SkyblockMapHint",
              children: QD("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function ci(DD) {
      let {
        view: CD,
        controller: cD,
        navigation: ID
      } = DD;
      const {
        t: pD
      } = (0, xp.F)(), {
        isTouchScreen: iD
      } = (0, mp.o)(["isTouchScreen"]);
      return (0, Jp.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": pD("skyblockGame:mapLocal"),
        children: [iD && (0, Jp.jsx)(Gp.i, {
          className: "SkyblockMinimapOpen",
          onClick: cD.showLocal,
          children: pD("skyblockGame:map")
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: CD.colour
          },
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: ID.display.mountTerrain,
            style: {
              width: CD.width,
              height: CD.height
            },
            children: [(0, Jp.jsx)(Lp, {
              imageKey: CD.imageKey,
              fallbackImageKey: CD.fallbackImageKey,
              geometryKey: CD.geometryKey,
              alt: CD.label
            }), (0, Jp.jsx)(Yp, {
              mount: ID.display.mountMinimapSearchArea
            }), CD.markers.map((DD => (0, Jp.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${DD.position[0]}%`,
                top: `${DD.position[1]}%`,
                color: DD.colour
              },
              title: DD.name,
              children: (0, Jp.jsx)(ap, {
                icon: DD.icon
              })
            }, DD.id)))]
          }), (0, Jp.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: pD("skyblockGame:mapYouAreHere"),
            children: (0, Jp.jsx)(ap, {
              icon: "player"
            })
          })]
        }), (0, Jp.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: CD.caption
        })]
      })
    }

    function Ii(DD) {
      let {
        controller: CD
      } = DD;
      return (0, Jp.jsxs)("div", {
        className: "SkyblockCompass",
        ref: CD.display.mountCompass,
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Jp.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Jp.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function ii(DD) {
      let {
        controller: CD,
        surface: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)(), pD = (0, qp.g)(ic, CD.getSnapshot()), iD = kp();
      return pD.enabled ? (0, Jp.jsxs)(Jp.Fragment, {
        children: ["hud" === cD && (0, Jp.jsx)(np.e, {
          placement: "statBars",
          children: pD.hud && (0, Jp.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": pD.hud.colour
            },
            children: [(0, Jp.jsx)(dp, {
              percent: pD.hud.skill.percent,
              label: pD.hud.skill.xp,
              levelUpToken: pD.hud.levelUpToken,
              colour: pD.hud.colour
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Jp.jsxs)("span", {
                children: [pD.hud.skill.label, " \xb7 ", pD.hud.skill.level]
              }), (0, Jp.jsx)("span", {
                children: pD.hud.gain
              })]
            })]
          })
        }), "hud" === cD && (0, Jp.jsx)(np.e, {
          children: pD.hud && (0, Jp.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Jp.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Jp.jsx)("strong", {
                children: pD.hud.skill.label
              }), (0, Jp.jsx)("span", {
                children: pD.hud.gain
              })]
            }), (0, Jp.jsx)(dp, {
              percent: pD.hud.skill.percent,
              label: pD.hud.skill.xp,
              levelUpToken: pD.hud.levelUpToken,
              colour: pD.hud.colour
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Jp.jsx)("span", {
                children: pD.hud.skill.level
              }), (0, Jp.jsx)("span", {
                children: pD.hud.skill.xp
              })]
            })]
          })
        }), "menu" === cD && (0, Jp.jsx)(Tp.e, {
          show: pD.open,
          close: CD.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Jp.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: iD,
            onKeyDown: Rp,
            children: [(0, Jp.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Jp.jsxs)("div", {
                children: [(0, Jp.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: ID("skyblockGame:skills")
                }), (0, Jp.jsx)("p", {
                  children: ID("skyblockGame:skillsIntro")
                })]
              }), (0, Jp.jsx)(Gp.l, {
                padIgnore: !0,
                onClick: CD.dismiss
              })]
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Jp.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: pD.skills.map((DD => (0, Jp.jsxs)(Gp.i, {
                  className: Xp()("SkyblockSkillCard", {
                    Selected: DD.selected
                  }),
                  ariaPressed: DD.selected,
                  onClick: () => {
                    CD.select(DD.id)
                  },
                  children: [(0, Jp.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Jp.jsx)(Pp.d, {
                      itemName: DD.icon,
                      amount: 0
                    })
                  }), (0, Jp.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Jp.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Jp.jsx)("strong", {
                        children: DD.label
                      }), (0, Jp.jsx)("span", {
                        children: DD.level
                      })]
                    }), (0, Jp.jsx)(dp, {
                      percent: DD.percent,
                      label: `${DD.label}: ${DD.xp}`
                    }), (0, Jp.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: DD.xp
                    })]
                  })]
                }, DD.id)))
              }), pD.detail && (0, Jp.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Jp.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Jp.jsx)(Pp.d, {
                    itemName: pD.detail.icon,
                    amount: 0
                  })
                }), (0, Jp.jsx)("h3", {
                  children: pD.detail.label
                }), (0, Jp.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: pD.detail.level
                }), (0, Jp.jsx)("p", {
                  children: pD.detail.description
                }), (0, Jp.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Jp.jsx)("strong", {
                    children: ID("skyblockGame:currentBenefit")
                  }), (0, Jp.jsx)("span", {
                    children: pD.detail.benefit
                  })]
                }), (0, Jp.jsx)(dp, {
                  percent: pD.detail.percent,
                  label: pD.detail.xp
                }), (0, Jp.jsx)("p", {
                  children: pD.detail.xp
                }), (0, Jp.jsx)("h4", {
                  children: ID("skyblockGame:earnXp")
                }), (0, Jp.jsx)("ul", {
                  children: pD.detail.sources.map((DD => (0, Jp.jsx)("li", {
                    children: DD
                  }, DD)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var fi = cD(1356),
      bi = cD(4606),
      Qi = cD(312);

    function wi(DD) {
      let {
        item: CD
      } = DD;
      return (0, Jp.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Jp.jsx)(Pp.d, {
          itemName: CD,
          amount: 0
        })
      })
    }

    function Si(DD) {
      let {
        name: CD,
        percent: cD,
        progress: ID
      } = DD;
      return (0, Jp.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Jp.jsx)(dp, {
          percent: cD,
          label: `${(0,Qi.qb)(CD)}: ${ID}`
        }), (0, Jp.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: ID
        })]
      })
    }

    function Bi(DD) {
      let {
        subquests: CD,
        showDescriptions: cD = !1
      } = DD;
      return (0, Jp.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: CD.map((DD => {
          const CD = cD && "completed" === DD.status,
            ID = (0, Jp.jsxs)("li", {
              className: Xp()("SkyblockQuestStep", DD.status, {
                JustFinished: DD.justFinished,
                JustUnlocked: DD.justUnlocked
              }),
              tabIndex: CD ? 0 : void 0,
              children: [null !== DD.iconItem && (0, Jp.jsx)(wi, {
                item: DD.iconItem
              }), null === DD.iconItem && (0, Jp.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === DD.status ? "\u2713" : "skipped" === DD.status ? "\u2212" : "\u25cb"
              }), (0, Jp.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Jp.jsx)("strong", {
                  children: (0, Jp.jsx)(bi.b, {
                    text: DD.name
                  })
                }), cD && !CD && (0, Jp.jsx)("span", {
                  children: (0, Jp.jsx)(bi.b, {
                    text: DD.description
                  })
                }), null !== DD.barPercent && (0, Jp.jsx)(Si, {
                  name: DD.name,
                  percent: DD.barPercent,
                  progress: DD.progress
                }), null === DD.barPercent && !CD && (0, Jp.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: DD.statusLabel
                })]
              })]
            }, DD.id);
          return CD ? (0, Jp.jsx)(fi.f, {
            delayShow: 200,
            tooltipInner: (0, Jp.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Jp.jsx)("span", {
                children: (0, Jp.jsx)(bi.b, {
                  text: DD.description
                })
              }), (0, Jp.jsx)("strong", {
                children: DD.statusLabel
              })]
            }),
            children: ID
          }, DD.id) : ID
        }))
      })
    }

    function yi(DD) {
      let {
        quest: CD,
        select: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)(), pD = CD.focusStep;
      return (0, Jp.jsxs)(Gp.i, {
        className: Xp()("SkyblockQuestCard", {
          Selected: CD.selected,
          Tracked: CD.tracked
        }),
        onClick: () => {
          cD(CD.id)
        },
        children: [(0, Jp.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Jp.jsx)("strong", {
            children: (0, Jp.jsx)(bi.b, {
              text: CD.name
            })
          }), CD.tracked && (0, Jp.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: ID("skyblockGame:currentQuest")
          })]
        }), pD && (0, Jp.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== pD.iconItem && (0, Jp.jsx)(wi, {
            item: pD.iconItem
          }), (0, Jp.jsx)(Si, {
            name: pD.name,
            percent: pD.barPercent,
            progress: pD.progress
          })]
        }), (0, Jp.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: CD.progress
        })]
      })
    }

    function Mi(DD) {
      let {
        controller: CD,
        surface: cD
      } = DD;
      const ID = (0, qp.g)(wc, CD.getSnapshot()),
        {
          t: pD
        } = (0, xp.F)(),
        iD = kp();
      return ID.enabled ? (0, Jp.jsxs)(Jp.Fragment, {
        children: ["hud" === cD && (0, Jp.jsx)(Jp.Fragment, {
          children: ID.tracked && (0, Jp.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Qc,
            children: (0, Jp.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [ID.trackedStepPulse > 0 && (0, Jp.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, ID.trackedStepPulse), (0, Jp.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: pD("skyblockGame:currentQuest")
              }), (0, Jp.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Jp.jsx)("strong", {
                  children: (0, Jp.jsx)(bi.b, {
                    text: ID.tracked.name
                  })
                }), null !== ID.tracked.clock && (0, Jp.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: ID.tracked.clock
                })]
              }), (0, Jp.jsx)(Bi, {
                subquests: ID.tracked.subquests
              })]
            })
          })
        }), "menu" === cD && (0, Jp.jsx)(Tp.e, {
          show: ID.open,
          close: CD.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Jp.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: iD,
            onKeyDown: Rp,
            children: [(0, Jp.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Jp.jsx)("div", {
                children: (0, Jp.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: pD("skyblockGame:quests")
                })
              }), (0, Jp.jsx)(Gp.l, {
                padIgnore: !0,
                onClick: CD.dismiss
              })]
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Jp.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Jp.jsx)("h3", {
                  children: pD("skyblockGame:current")
                }), 0 === ID.active.length && (0, Jp.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: pD("skyblockGame:noActiveQuests")
                }), ID.active.map((DD => (0, Jp.jsx)(yi, {
                  quest: DD,
                  select: CD.select
                }, DD.id))), (0, Jp.jsx)("h3", {
                  children: (0, Jp.jsxs)("button", {
                    type: "button",
                    className: Xp()("SkyblockQuestSectionToggle", {
                      Expanded: ID.completedExpanded
                    }),
                    "aria-expanded": ID.completedExpanded,
                    onClick: CD.toggleCompleted,
                    children: [(0, Jp.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), pD("skyblockGame:completed"), (0, Jp.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: ID.completed.length
                    })]
                  })
                }), ID.completedExpanded && 0 === ID.completed.length && (0, Jp.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: pD("skyblockGame:noCompletedQuests")
                }), ID.completedExpanded && ID.completed.map((DD => (0, Jp.jsx)(yi, {
                  quest: DD,
                  select: CD.select
                }, DD.id)))]
              }), ID.detail && (0, Jp.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [ID.detail.completed && (0, Jp.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: pD("skyblockGame:completedQuest")
                }), (0, Jp.jsx)("h3", {
                  children: (0, Jp.jsx)(bi.b, {
                    text: ID.detail.name
                  })
                }), (0, Jp.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Jp.jsx)(bi.b, {
                    text: ID.detail.description
                  })
                }), (0, Jp.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [ID.detail.progress, null !== ID.detail.clock && (0, Jp.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: ID.detail.clock
                  })]
                }), (0, Jp.jsx)(Bi, {
                  subquests: ID.detail.subquests,
                  showDescriptions: !0
                }), ID.detail.tracked && (0, Jp.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: ID.detail.trackLabel
                }), !ID.detail.completed && !ID.detail.tracked && (0, Jp.jsx)(Gp.o, {
                  onClick: CD.trackSelected,
                  disabled: !ID.detail.canTrack,
                  children: ID.detail.trackLabel
                }), ID.detail.canViewDialogue && (0, Jp.jsx)(Gp.i, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: CD.viewDialogue,
                  children: pD("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ti = cD(1064),
      Zi = cD(2482);

    function oi(DD, CD, cD, ID, pD) {
      const iD = DD => "linear" === pD ? DD : {
          Ui: pD,
          point: DD
        },
        fD = {};
      for (const [bD, QD] of ID)
        for (const [CD, cD] of Object.entries(DD(bD, QD, iD))) fD[CD] ??= {
          timeline: []
        }, fD[CD].timeline.push(cD);
      return {
        mi: CD,
        loop: cD,
        Oi: fD
      }
    }
    const vi = .547,
      Ni = .022,
      gi = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Xi = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function mi(DD, CD, cD) {
      const {
        drop: ID = 0,
        shift: pD = 0,
        torso: iD = 0,
        nod: fD = 0,
        tilt: bD = 0,
        legs: QD = [0, 0],
        arms: wD = 0,
        spread: SD = 0
      } = CD, BD = vi * Math.cos(iD) - Ni * Math.sin(iD), yD = vi * Math.sin(iD) + Ni * Math.cos(iD), MD = cD([0, -ID, pD]);
      return {
        LowerBody: {
          timeFraction: DD,
          position: MD,
          rotation: cD([0, 0, 0])
        },
        UpperBody: {
          timeFraction: DD,
          position: MD,
          rotation: cD([iD, 0, bD])
        },
        HeadMesh: {
          timeFraction: DD,
          position: cD([0, BD - vi - ID, yD - Ni + pD]),
          rotation: cD([iD + fD, 0, bD])
        },
        LegLeftMesh: {
          timeFraction: DD,
          rotation: cD([QD[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: DD,
          rotation: cD([QD[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: DD,
          rotation: cD([wD, 0, SD])
        },
        ArmRightMesh: {
          timeFraction: DD,
          rotation: cD([wD, 0, -SD])
        }
      }
    }

    function ni(DD, CD, cD) {
      return oi(mi, DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Oi(DD) {
      return "number" === typeof DD ? [DD, DD] : DD
    }

    function Pi(DD, CD, cD) {
      const {
        rise: ID = 0,
        shift: pD = 0,
        torso: iD = 0,
        twist: fD = 0,
        tilt: bD = 0,
        nod: QD = 0,
        cock: wD = 0,
        arms: SD = 0,
        spread: BD = 0
      } = CD, [yD, MD] = Oi(SD), [tD, ZD] = Oi(BD);
      return {
        TorsoNode: {
          timeFraction: DD,
          position: cD([0, ID, pD]),
          rotation: cD([iD, fD, bD])
        },
        HeadMesh: {
          timeFraction: DD,
          rotation: cD([QD, 0, wD])
        },
        ArmLeftMesh: {
          timeFraction: DD,
          rotation: cD([yD, 0, tD])
        },
        ArmRightMesh: {
          timeFraction: DD,
          rotation: cD([MD, 0, -ZD])
        }
      }
    }
    const Hi = [1.0625, -1, 0];

    function Ui(DD) {
      return "number" === typeof DD ? [DD, DD] : DD
    }

    function xi(DD, CD, cD) {
      const {
        drop: ID = 0,
        shift: pD = 0,
        torso: iD = 0,
        tilt: fD = 0,
        nod: bD = 0,
        cock: QD = 0,
        legs: wD = [0, 0],
        arms: SD = 0,
        spread: BD = 0
      } = CD, [yD, MD] = Ui(SD), [tD, ZD] = Ui(BD), oD = -iD, vD = -fD, [ND, gD, XD] = function(DD, CD) {
        const [cD, ID, pD] = [-Hi[0], Hi[1], -Hi[2]], iD = cD * Math.cos(CD) - ID * Math.sin(CD), fD = cD * Math.sin(CD) + ID * Math.cos(CD);
        return [iD - cD, -(fD * Math.cos(DD) - pD * Math.sin(DD) - ID), fD * Math.sin(DD) + pD * Math.cos(DD) - pD]
      }(oD, vD), mD = cD([0, -ID, pD]);
      return {
        TorsoNode: {
          timeFraction: DD,
          position: cD([ND, gD - ID, XD + pD]),
          rotation: cD([oD, 0, vD])
        },
        HeadMesh: {
          timeFraction: DD,
          rotation: cD([-bD, 0, -QD])
        },
        ArmLeftMesh: {
          timeFraction: DD,
          rotation: cD([-yD, 0, -tD])
        },
        ArmRightMesh: {
          timeFraction: DD,
          rotation: cD([-MD, 0, ZD])
        },
        LegLeftMesh: {
          timeFraction: DD,
          position: mD,
          rotation: cD([-wD[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: DD,
          position: mD,
          rotation: cD([-wD[1], 0, 0])
        }
      }
    }
    var qi = cD(36517),
      Ji = cD(37839),
      Ki = cD(38009);

    function ai(DD, CD, cD) {
      var ID, pD;
      const iD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return DD + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - DD) * cD
        },
        [fD, bD] = null !== (ID = DD.legs) && void 0 !== ID ? ID : [0, 0],
        [QD, wD] = null !== (pD = CD.legs) && void 0 !== pD ? pD : [0, 0];
      return {
        drop: iD(DD.drop, CD.drop),
        shift: iD(DD.shift, CD.shift),
        torso: iD(DD.torso, CD.torso),
        nod: iD(DD.nod, CD.nod),
        tilt: iD(DD.tilt, CD.tilt),
        legs: [iD(fD, QD), iD(bD, wD)],
        arms: iD(DD.arms, CD.arms),
        spread: iD(DD.spread, CD.spread)
      }
    }
    const Vi = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      zi = ni(4400, !0, [
        [0, Vi],
        [.16, {
          ...Vi,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Vi],
        [.44, {
          ...Vi,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, ai(Vi, gi, .7)],
        [.66, ai(Vi, gi, .78)],
        [.74, ai(Vi, Xi, .65)],
        [.86, {
          ...Vi,
          drop: .14
        }],
        [1, Vi]
      ], "catmull-rom-spline"),
      ji = {
        ...Vi,
        drop: .14,
        torso: .3,
        spread: .4
      },
      li = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Li = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Ti = {
        caveGolem: zi,
        magmaGolem: ni(3600, !0, [
          [0, ji],
          [.12, {
            ...ji,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...ji,
            tilt: -.08
          }],
          [.4, {
            ...ji,
            tilt: .06,
            drop: .11
          }],
          [.52, ai(ji, gi, .9)],
          [.62, ai(ji, Xi, .8)],
          [.7, ai(ji, Xi, .45)],
          [.78, ai(ji, Xi, .85)],
          [.9, {
            ...ji,
            drop: .17
          }],
          [1, ji]
        ], "catmull-rom-spline"),
        frostWraith: function(DD, CD, cD) {
          return oi(Pi, DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, li],
          [.14, {
            ...li,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...li,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...li,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...li,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...li,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...li,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...li,
            rise: .16,
            tilt: -.04
          }],
          [1, li]
        ], "catmull-rom-spline"),
        tikiTerror: function(DD, CD, cD) {
          return oi(xi, DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Li],
          [.16, {
            ...Li,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Li],
          [.44, {
            ...Li,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.56, {
            drop: -.03,
            torso: -.28,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.64, {
            drop: -.03,
            torso: -.32,
            tilt: .05,
            nod: -.52,
            legs: [-.12, .12],
            arms: -1.5,
            spread: 1.2
          }],
          [.72, {
            drop: -.03,
            torso: -.28,
            tilt: -.05,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.86, {
            ...Li,
            drop: .1
          }],
          [1, Li]
        ], "catmull-rom-spline")
      },
      Gi = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Ri = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      ki = Object.fromEntries(Object.entries(Ti).map((DD => {
        let [CD, cD] = DD;
        return [CD, (0, Ki.e)((0, qi.f)(cD), CD)]
      })));

    function di(DD) {
      const CD = function(DD) {
        var CD;
        const cD = (0, Ji.c)(DD).poseRig;
        return null !== (CD = Ri[DD]) && void 0 !== CD ? CD : void 0 === cD ? null : Gi[cD]
      }(DD);
      return null === CD ? null : ki[CD]
    }

    function Yi(DD) {
      return {
        "--difficulty-colour": DD
      }
    }
    const Wi = (0, HD.lazy)((() => (0, Zi.c)(cD.e(192).then((() => cD(40574))), (DD => DD.MobPreview))));

    function si(DD) {
      var CD, cD, ID;
      let {
        picker: pD,
        controller: iD
      } = DD;
      const {
        t: fD
      } = (0, xp.F)(), bD = kp(), {
        page: QD
      } = pD;
      return (0, Jp.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: bD,
        onKeyDown: DD => {
          "ArrowLeft" === DD.key ? (DD.preventDefault(), DD.stopPropagation(), iD.previous()) : "ArrowRight" === DD.key ? (DD.preventDefault(), DD.stopPropagation(), iD.next()) : Rp(DD)
        },
        style: Yi(QD.colour),
        children: [(0, Jp.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Jp.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: pD.dungeonName
          }), (0, Jp.jsx)(Gp.l, {
            padIgnore: !0,
            onClick: iD.dismiss
          })]
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Jp.jsx)(Gp.i, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !pD.canPrevious,
              onClick: iD.previous,
              children: (0, Jp.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Jp.jsx)(ti.c, {
                  name: "angle-up"
                })
              })
            }), (0, Jp.jsxs)("div", {
              className: Xp()("SkyblockBossPickerBoss", {
                Locked: !QD.unlocked
              }),
              children: [null !== QD.bossMobType && (0, Jp.jsx)(HD.Suspense, {
                fallback: (0, Jp.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Jp.jsx)(Wi, {
                  className: "SkyblockBossPickerModel",
                  mobType: QD.bossMobType,
                  variation: QD.bossMobVariation,
                  animation: null !== (CD = di(QD.bossMobType)) && void 0 !== CD ? CD : void 0
                })
              }), null === QD.bossMobType && (0, Jp.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Jp.jsx)(Gp.i, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !pD.canNext,
              onClick: iD.next,
              children: (0, Jp.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Jp.jsx)(ti.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Jp.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [QD.beaten && (0, Jp.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), QD.label]
            }), (0, Jp.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (cD = QD.bossName) && void 0 !== cD ? cD : "???"
            }), (0, Jp.jsxs)("span", {
              className: Xp()("SkyblockBossPickerRecord", {
                Locked: null !== QD.lockedHint
              }),
              children: [null !== QD.lockedHintHighlight && (0, Jp.jsxs)(Jp.Fragment, {
                children: [QD.lockedHintHighlight.before, (0, Jp.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Yi(QD.lockedHintHighlight.colour),
                  children: [null !== QD.lockedHintHighlight.icon && (0, Jp.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Jp.jsx)(Pp.d, {
                      itemName: QD.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), QD.lockedHintHighlight.name]
                }), QD.lockedHintHighlight.after]
              }), null === QD.lockedHintHighlight && (null !== (ID = QD.lockedHint) && void 0 !== ID ? ID : QD.summary)]
            })]
          }), (0, Jp.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: pD.pages.map((DD => (0, Jp.jsx)("span", {
              className: Xp()("SkyblockBossPickerDot", {
                Current: DD.current,
                Locked: !DD.unlocked
              }),
              style: Yi(DD.colour)
            }, DD.difficulty)))
          }), (0, Jp.jsx)(Gp.r, {
            className: "SkyblockBossPickerFight",
            disabled: !QD.unlocked,
            onClick: iD.enter,
            children: fD("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Ei(DD) {
      let {
        dungeon: CD,
        select: cD
      } = DD;
      return (0, Jp.jsxs)(Gp.i, {
        className: Xp()("SkyblockDungeonCard", {
          Selected: CD.selected
        }),
        onClick: () => {
          cD(CD.id)
        },
        children: [(0, Jp.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Jp.jsx)("strong", {
            children: CD.name
          }), (0, Jp.jsx)("span", {
            children: CD.beatenSummary
          })]
        }), (0, Jp.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: CD.difficulties.map((DD => (0, Jp.jsxs)("span", {
            className: Xp()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: DD.beaten
            }),
            style: Yi(DD.colour),
            title: DD.summary,
            children: [DD.beaten && (0, Jp.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), DD.label]
          }, DD.difficulty)))
        })]
      })
    }

    function ei(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(Mc, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp();
      return cD.enabled ? (0, Jp.jsxs)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [cD.picker && (0, Jp.jsx)(si, {
          picker: cD.picker,
          controller: CD
        }), !cD.picker && (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: ID("skyblockGame:dungeons")
              }), (0, Jp.jsx)("p", {
                children: ID("skyblockGame:dungeonsIntro")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: CD.dismiss
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Jp.jsx)("div", {
              className: "SkyblockDungeonList",
              children: cD.dungeons.map((DD => (0, Jp.jsx)(Ei, {
                dungeon: DD,
                select: CD.select
              }, DD.id)))
            }), cD.detail && (0, Jp.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Jp.jsx)("h3", {
                children: cD.detail.name
              }), (0, Jp.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: cD.detail.difficulties.map((DD => (0, Jp.jsxs)("li", {
                  className: Xp()("SkyblockDungeonRecord", {
                    Beaten: DD.beaten
                  }),
                  children: [(0, Jp.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Yi(DD.colour),
                    children: [DD.beaten && (0, Jp.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), DD.label]
                  }), (0, Jp.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: DD.summary
                  })]
                }, DD.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function ui(DD) {
      let {
        collection: CD,
        select: cD
      } = DD;
      return (0, Jp.jsxs)(Gp.i, {
        className: Xp()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: CD.selected,
          Locked: CD.locked
        }),
        ariaPressed: CD.selected,
        onClick: () => {
          cD(CD.id)
        },
        children: [(0, Jp.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Jp.jsx)(Pp.d, {
            itemName: CD.icon,
            amount: 0
          })
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Jp.jsx)("strong", {
              children: CD.name
            }), (0, Jp.jsx)("span", {
              children: CD.tier
            })]
          }), (0, Jp.jsx)(dp, {
            percent: CD.percent,
            label: `${CD.name}: ${CD.progress}`
          }), (0, Jp.jsx)("span", {
            className: "SkyblockSkillXp",
            children: CD.progress
          })]
        })]
      })
    }

    function ri(DD) {
      let {
        collection: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)();
      return (0, Jp.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Jp.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Jp.jsx)(Pp.d, {
            itemName: CD.icon,
            amount: 0
          })
        }), (0, Jp.jsx)("h3", {
          children: CD.name
        }), (0, Jp.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: CD.tier
        }), (0, Jp.jsx)("p", {
          children: CD.locked ? cD("skyblockGame:collectionLocked") : CD.count
        }), null !== CD.nextReward && (0, Jp.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Jp.jsx)("strong", {
            children: cD("skyblockGame:collectionNextReward")
          }), (0, Jp.jsx)("span", {
            children: CD.nextReward
          })]
        }), (0, Jp.jsx)(dp, {
          percent: CD.percent,
          label: CD.progress
        }), (0, Jp.jsx)("p", {
          children: CD.progress
        })]
      })
    }

    function Ai(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(jc, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp();
      return cD.enabled ? (0, Jp.jsx)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: ID("skyblockGame:collections")
              }), (0, Jp.jsxs)("p", {
                children: [ID("skyblockGame:collectionsIntro"), " ", cD.tiersUnlocked]
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: CD.dismiss
            })]
          }), (0, Jp.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: cD.categories.map((DD => (0, Jp.jsxs)(Gp.i, {
              className: Xp()("SkyblockCollectionCategory", {
                Selected: DD.selected
              }),
              ariaPressed: DD.selected,
              padTabSelected: DD.selected,
              onClick: () => {
                CD.selectCategory(DD.id)
              },
              children: [(0, Jp.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Jp.jsx)(Pp.d, {
                  itemName: DD.icon,
                  amount: 0
                })
              }), (0, Jp.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Jp.jsx)("strong", {
                  children: DD.label
                }), (0, Jp.jsx)("span", {
                  children: DD.tiers
                })]
              })]
            }, DD.id)))
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Jp.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: cD.collections.map((DD => (0, Jp.jsx)(ui, {
                collection: DD,
                select: CD.select
              }, DD.id)))
            }), cD.detail && (0, Jp.jsx)(ri, {
              collection: cD.detail
            })]
          })]
        })
      }) : null
    }
    const Fi = ["completed", "active", "available", "locked"],
      Df = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Cf(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(ec, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp();
      return cD.enabled ? (0, Jp.jsx)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: ID("skyblockDevQuests:title")
              }), (0, Jp.jsx)("p", {
                children: ID("skyblockDevQuests:intro")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              onClick: CD.dismiss
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Fi.map((DD => (0, Jp.jsx)("span", {
              className: Xp()("SkyblockQuestGraphLegendState", DD),
              children: ID(`skyblockDevQuests:state_${DD}`)
            }, DD))), Df.map((DD => (0, Jp.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Jp.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Jp.jsx)("line", {
                  className: Xp()("SkyblockQuestGraphEdge", DD),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), ID(`skyblockDevQuests:edge_${DD}`)]
            }, DD)))]
          }), (0, Jp.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Jp.jsxs)("div", {
              className: Xp()("SkyblockQuestGraphCanvas", {
                Planning: cD.planning
              }),
              style: {
                width: cD.width,
                height: cD.height
              },
              children: [(0, Jp.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: cD.width,
                height: cD.height,
                "aria-hidden": "true",
                children: [(0, Jp.jsx)("defs", {
                  children: (0, Jp.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Jp.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), cD.edges.map((DD => (0, Jp.jsx)("path", {
                  className: Xp()("SkyblockQuestGraphEdge", DD.kind, {
                    InPlan: DD.inPlan
                  }),
                  d: DD.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, DD.key)))]
              }), cD.nodes.map((DD => (0, Jp.jsxs)("button", {
                type: "button",
                className: Xp()("SkyblockQuestGraphNode", DD.state, {
                  InPlan: DD.inPlan,
                  Hovered: DD.hovered
                }),
                style: {
                  left: DD.left,
                  top: DD.top,
                  width: 190,
                  height: 52
                },
                title: DD.id,
                onMouseEnter: () => {
                  CD.hover(DD.id)
                },
                onMouseLeave: () => {
                  CD.hover(null)
                },
                onFocus: () => {
                  CD.hover(DD.id)
                },
                onBlur: () => {
                  CD.hover(null)
                },
                onClick: () => {
                  CD.jump(DD.id)
                },
                children: [(0, Jp.jsx)("strong", {
                  children: DD.name
                }), (0, Jp.jsx)("span", {
                  children: DD.detail
                })]
              }, DD.id)))]
            })
          })]
        })
      }) : null
    }
    const If = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      pf = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${bI}ms`,
        "--forge-duration": "2150ms"
      },
      ff = Array.from({
        length: 18
      }, ((DD, CD) => ({
        "--ember-left": `${(4+92*(.618034*CD%1)).toFixed(1)}%`,
        "--ember-size": 3 + CD % 3 * 2 + "px",
        "--ember-drift": 14 * (CD % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*CD%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*CD%8).toFixed(2)}s`
      })));

    function bf(DD) {
      if (DD.style.removeProperty("--part-size"), null === DD.parentElement || "wrap" === getComputedStyle(DD.parentElement).flexWrap) return;
      const CD = [...DD.children],
        cD = getComputedStyle(DD),
        ID = parseFloat(cD.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        pD = (DD.clientHeight - parseFloat(cD.rowGap) * (CD.length - 1)) / CD.length,
        iD = CD.map((DD => {
          const CD = getComputedStyle(DD),
            cD = DD.querySelector("h3"),
            iD = DD.querySelector(".SkyblockForgeParts");
          if (null === cD || null === iD) return ID;
          const fD = pD - parseFloat(CD.paddingTop) - parseFloat(CD.paddingBottom) - cD.offsetHeight - parseFloat(getComputedStyle(cD).marginBottom),
            bD = parseFloat(getComputedStyle(iD).columnGap),
            QD = iD.children.length;
          let wD = 0;
          for (let ID = 1; ID <= QD; ID++) {
            const DD = Math.ceil(QD / ID);
            wD = Math.max(wD, Math.min((iD.clientWidth - bD * (ID - 1)) / ID, (fD - bD * (DD - 1)) / DD))
          }
          return wD
        }));
      DD.style.setProperty("--part-size", `${Math.floor(Math.max(ID,Math.min(...iD)))}px`)
    }

    function Qf(DD) {
      var CD, cD, ID, iD, fD;
      let {
        controller: bD
      } = DD;
      const QD = (0, qp.g)(tI, bD.getSnapshot()),
        {
          t: wD
        } = (0, xp.F)(),
        SD = kp(),
        BD = function() {
          const DD = (0, HD.useRef)(null),
            CD = (0, HD.useRef)(null);
          return (0, HD.useLayoutEffect)((() => {
            null !== DD.current && bf(DD.current)
          })), (0, HD.useCallback)((cD => {
            var ID;
            null === (ID = CD.current) || void 0 === ID || ID.disconnect(), CD.current = null, DD.current = cD, null !== cD && (CD.current = new ResizeObserver((() => {
              bf(cD)
            })), CD.current.observe(cD))
          }), [])
        }(),
        yD = function(DD) {
          const CD = (0, HD.useRef)(null);
          return (0, HD.useLayoutEffect)((() => {
            const DD = CD.current;
            if (null !== DD) {
              DD.style.removeProperty("font-size");
              for (let CD = 1.7; CD > 1.1 && DD.scrollWidth > DD.clientWidth; CD -= .1) DD.style.fontSize = CD - .1 + "rem"
            }
          }), [DD]), (0, HD.useCallback)((DD => {
            CD.current = DD
          }), [])
        }(null === (CD = QD.preview) || void 0 === CD ? void 0 : CD.name),
        MD = (0, HD.useRef)(null),
        tD = (0, HD.useRef)({}),
        ZD = QD.forging,
        oD = null !== (cD = null === ZD || void 0 === ZD ? void 0 : ZD.preview.tier) && void 0 !== cD ? cD : 0,
        vD = null !== (ID = null === ZD || void 0 === ZD ? void 0 : ZD.preview.named) && void 0 !== ID && ID,
        ND = (0, HD.useMemo)((() => {
          return null === ZD ? null : {
            flames: (DD = oD, CD = vD, Array.from({
              length: 26 + 6 * DD + (CD ? 20 : 0)
            }, ((DD, CD) => {
              const cD = CD < 6,
                ID = Math.random() * Math.PI * 2,
                pD = cD ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                iD = Math.cos(ID) * pD,
                fD = Math.sin(ID) * pD - 2 - 3 * Math.random(),
                bD = Math.random(),
                [QD, wD, SD] = cD ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : bD < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : bD < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [bD < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": QD,
                "--x0": `${(.15*iD).toFixed(2)}rem`,
                "--y0": `${(.15*fD).toFixed(2)}rem`,
                "--x": `${iD.toFixed(2)}rem`,
                "--y": `${fD.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${wD.toFixed(2)}rem`,
                "--duration": `${Math.round(SD)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: SI(oD, vD)
          };
          var DD, CD
        }), [null === ZD || void 0 === ZD ? void 0 : ZD.id]);
      if (!QD.enabled) return null;
      const gD = QD.preview,
        XD = QD.arriving,
        mD = null !== XD && !XD.sameSword,
        nD = null !== gD && (0, Jp.jsx)(Pp.d, {
          itemName: gD.baseSword,
          amount: 0,
          enchantmentTier: gD.enchantmentTier
        });
      return (0, Jp.jsx)(Tp.e, {
        show: QD.open,
        close: bD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: SD,
          onKeyDown: Rp,
          children: [(0, Jp.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: ff.map(((DD, CD) => (0, Jp.jsx)("span", {
              style: DD
            }, CD)))
          }), (0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: wD("skyblockGame:forgeTitle")
              }), (0, Jp.jsx)("p", {
                children: wD("skyblockGame:forgeIntro")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              onClick: bD.dismiss
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Jp.jsx)("div", {
              ref: BD,
              className: Xp()("SkyblockForgeSlots", {
                Locked: null !== ZD
              }),
              children: QD.slots.map((DD => (0, Jp.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Jp.jsx)("h3", {
                  children: DD.label
                }), (0, Jp.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: DD.parts.map((CD => (0, Jp.jsx)("button", {
                    type: "button",
                    className: Xp()("SkyblockForgePart", {
                      Selected: CD.selected,
                      Missing: CD.placeholder
                    }),
                    disabled: CD.placeholder,
                    title: CD.placeholder ? wD("skyblockGame:forgePickParts") : CD.itemName,
                    "aria-pressed": CD.selected,
                    onClick: () => {
                      bD.select(DD.kind, CD.material)
                    },
                    children: (0, Jp.jsx)(Pp.d, {
                      itemName: CD.itemName,
                      amount: CD.owned
                    })
                  }, CD.material)))
                })]
              }, DD.kind)))
            }), (0, Jp.jsxs)("div", {
              className: Xp()("SkyblockForgeAnvil", {
                Named: null === gD || void 0 === gD ? void 0 : gD.named
              }),
              style: {
                "--tier": null === gD ? "transparent" : pD.lb[gD.enchantmentTier]
              },
              children: [(0, Jp.jsxs)("div", {
                className: Xp()("SkyblockForgeAltar", {
                  Forging: null !== ZD
                }),
                style: null === ZD ? void 0 : pf,
                children: [(0, Jp.jsxs)("div", {
                  className: Xp()("SkyblockForgeMount", {
                    Arrive: null !== XD
                  }),
                  children: [null === gD && (0, Jp.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Jp.jsx)(Pp.d, {
                      itemName: QD.unformedSword,
                      amount: 0
                    })
                  }), null !== gD && (0, Jp.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== gD && null === ZD && (0, Jp.jsx)("div", {
                    ref: MD,
                    className: "SkyblockForgeFloat",
                    children: (0, Jp.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: nD
                    })
                  }), null !== gD && (0, Jp.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: wI.map(((DD, CD) => (0, Jp.jsx)("span", {
                      className: Xp()({
                        Rune: "" !== DD.rune
                      }),
                      style: DD.style,
                      children: DD.rune
                    }, CD)))
                  }), null !== ZD && null !== ND && (0, Jp.jsxs)(Jp.Fragment, {
                    children: [(0, Jp.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Jp.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: ND.flames.map(((DD, CD) => (0, Jp.jsx)("span", {
                        style: DD
                      }, CD)))
                    }), (0, Jp.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: tD.current,
                      children: (0, Jp.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: nD
                      })
                    }), (0, Jp.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Jp.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (oD >= 4 || vD) && (0, Jp.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Jp.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: ND.sparks.map(((DD, CD) => (0, Jp.jsx)("span", {
                        style: DD
                      }, CD)))
                    }), (0, Jp.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Jp.jsx)("p", {
                  className: Xp()("SkyblockForgeStatus", null === (iD = QD.status) || void 0 === iD ? void 0 : iD.tone),
                  children: null === (fD = QD.status) || void 0 === fD ? void 0 : fD.text
                })]
              }), null === gD && (0, Jp.jsx)("p", {
                className: Xp()("SkyblockForgeName Waiting", {
                  ArriveText: mD
                }),
                children: wD(QD.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== gD && (0, Jp.jsx)("h3", {
                ref: yD,
                className: Xp()("SkyblockForgeName", {
                  ArriveText: mD
                }),
                title: gD.name,
                children: gD.name
              }), (null === gD || void 0 === gD ? void 0 : gD.named) && (0, Jp.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: wD("skyblockGame:forgeSecret")
              }), (0, Jp.jsxs)(Gp.r, {
                className: "SkyblockForgeButton",
                disabled: !QD.canForge,
                title: null === gD ? void 0 : wD("skyblockGame:forgeCoalOwned", {
                  owned: String(QD.coalOwned)
                }),
                onClick: () => {
                  tD.current = function(DD) {
                    const CD = null === DD ? "none" : getComputedStyle(DD).transform,
                      cD = new DOMMatrixReadOnly("none" === CD ? void 0 : CD);
                    return {
                      "--settle-y": `${cD.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(cD.b,cD.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(MD.current), MI(), bD.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [wD("skyblockGame:forgeButton"), null !== gD && (0, Jp.jsxs)("span", {
                  className: Xp()("SkyblockForgeCost", {
                    Short: gD.coalShort
                  }),
                  children: [(0, Jp.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Jp.jsx)(Pp.d, {
                      itemName: Fc.d,
                      amount: 0
                    })
                  }), gD.coalCost]
                })]
              })]
            }), (0, Jp.jsxs)("div", {
              className: Xp()("SkyblockForgeDetails", {
                Named: null === gD || void 0 === gD ? void 0 : gD.named
              }),
              children: [(0, Jp.jsx)("p", {
                className: Xp()("SkyblockForgeLore", {
                  ArriveText: mD
                }),
                title: null === gD || void 0 === gD ? void 0 : gD.lore,
                children: null === gD || void 0 === gD ? void 0 : gD.lore
              }), (0, Jp.jsxs)("dl", {
                className: Xp()("SkyblockForgeStats", {
                  ArriveText: mD
                }),
                children: [null === gD && If.map((DD => (0, Jp.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Jp.jsx)("dt", {
                    children: wD(DD)
                  }), (0, Jp.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, DD))), null === gD || void 0 === gD ? void 0 : gD.stats.map((DD => (0, Jp.jsxs)("div", {
                  className: Xp()("SkyblockForgeStat", {
                    Better: DD.better
                  }),
                  children: [(0, Jp.jsx)("dt", {
                    children: DD.label
                  }), (0, Jp.jsx)("dd", {
                    children: DD.value
                  })]
                }, DD.label)))]
              }), (0, Jp.jsx)("ul", {
                className: Xp()("SkyblockForgeEffects", {
                  ArriveText: mD
                }),
                children: null === gD || void 0 === gD ? void 0 : gD.effects.map((DD => (0, Jp.jsx)("li", {
                  children: DD
                }, DD)))
              })]
            })]
          })]
        })
      })
    }
    const wf = "Doom Rivet",
      Sf = "Doom Crest";

    function Bf(DD) {
      let {
        itemName: CD,
        amount: cD,
        owned: ID
      } = DD;
      return (0, Jp.jsxs)("span", {
        className: Xp()("SkyblockSmugglerPrice", {
          Short: cD > ID
        }),
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Jp.jsx)(Pp.d, {
            itemName: CD,
            amount: 0
          })
        }), (0, Jp.jsx)("span", {
          children: cD
        })]
      })
    }

    function yf(DD) {
      return DD.justBought ? "skyblockGame:smugglerJustBought" : DD.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Mf(DD) {
      let {
        deal: CD,
        view: cD,
        buy: ID
      } = DD;
      const {
        t: pD
      } = (0, xp.F)();
      return (0, Jp.jsxs)("div", {
        className: Xp()("SkyblockSmugglerPocket", {
          Bought: CD.justBought,
          Unaffordable: !CD.affordable,
          SoldOut: CD.soldOut && !CD.justBought
        }),
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Jp.jsx)(Pp.d, {
            itemName: CD.itemName,
            amount: 0,
            enchantmentTier: CD.enchantmentTier
          }), CD.amount > 1 && (0, Jp.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: pD("skyblockGame:smugglerAmount", {
              amount: CD.amount
            })
          })]
        }), (0, Jp.jsx)("h3", {
          children: CD.displayName
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [CD.rivets > 0 && (0, Jp.jsx)(Bf, {
              itemName: wf,
              amount: CD.rivets,
              owned: cD.rivetsOwned
            }), CD.crests > 0 && (0, Jp.jsx)(Bf, {
              itemName: Sf,
              amount: CD.crests,
              owned: cD.crestsOwned
            })]
          }), (0, Jp.jsx)(Gp.i, {
            className: "SkyblockSmugglerBuy",
            disabled: CD.soldOut || !CD.affordable || cD.pending,
            onClick: () => {
              ID(CD.slot)
            },
            children: pD(yf(CD))
          })]
        })]
      }, CD.justBought ? cD.boughtCount : 0)
    }

    function tf(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(vI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp();
      return cD.enabled ? (0, Jp.jsx)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Jp.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Jp.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: ID("skyblockGame:smugglerTitle")
              }), (0, Jp.jsx)("p", {
                children: ID("skyblockGame:smugglerIntro")
              })]
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Jp.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Jp.jsx)(Bf, {
                  itemName: wf,
                  amount: cD.rivetsOwned,
                  owned: cD.rivetsOwned
                }), (0, Jp.jsx)(Bf, {
                  itemName: Sf,
                  amount: cD.crestsOwned,
                  owned: cD.crestsOwned
                })]
              }), (0, Jp.jsx)(Gp.l, {
                onClick: CD.dismiss
              })]
            })]
          }), (0, Jp.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: cD.deals.map((DD => (0, Jp.jsx)(Mf, {
              deal: DD,
              view: cD,
              buy: CD.buy
            }, DD.slot)))
          }), (0, Jp.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: cD.rotatesText
            }), null !== cD.status && (0, Jp.jsx)("span", {
              className: Xp()("SkyblockSmugglerStatus", cD.status.tone),
              children: cD.status.text
            })]
          })]
        })
      }) : null
    }

    function Zf(DD) {
      let {
        phase: CD,
        className: cD
      } = DD;
      return (0, Jp.jsx)("span", {
        className: Xp()("SkyblockMoon", `Moon-${CD}`, cD),
        "aria-hidden": "true"
      })
    }

    function of(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(XI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)();
      return cD.enabled ? (0, Jp.jsx)(np.e, {
        placement: "statBars",
        children: (0, Jp.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Xp()("SkyblockPassageChip", cD.open && "Open"),
          "aria-label": ID("skyblockGame:passageChipLabel", {
            phase: cD.phaseName
          }),
          title: ID("skyblockGame:passageChipLabel", {
            phase: cD.phaseName
          }),
          onMouseDown: DD => {
            DD.preventDefault()
          },
          onClick: CD.toggle,
          children: (0, Jp.jsx)(Zf, {
            phase: cD.phase
          }, cD.phase)
        })
      }) : null
    }

    function vf(DD) {
      let {
        fish: CD
      } = DD;
      return (0, Jp.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Jp.jsx)(Pp.d, {
            itemName: CD.itemName,
            amount: 0
          })
        }), (0, Jp.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: CD.displayName
          }), (0, Jp.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: CD.where
          })]
        })]
      })
    }

    function Nf(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(XI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp();
      return cD.enabled ? (0, Jp.jsx)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Jp.jsx)(Zf, {
              phase: cD.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: ID("skyblockGame:passageTitle")
              }), (0, Jp.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: cD.phaseName
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: CD.dismiss
            })]
          }), (0, Jp.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: ID("skyblockGame:passageIntro")
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Jp.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Jp.jsx)("h3", {
                children: ID("skyblockGame:passageVisiting")
              }), (0, Jp.jsx)("ul", {
                className: "SkyblockPassageList",
                children: cD.visitors.map((DD => (0, Jp.jsx)(vf, {
                  fish: DD
                }, DD.itemName)))
              })]
            }), (0, Jp.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== cD.resting && (0, Jp.jsxs)(Jp.Fragment, {
                children: [(0, Jp.jsx)("h3", {
                  children: ID("skyblockGame:passageResting")
                }), (0, Jp.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Jp.jsx)(vf, {
                    fish: cD.resting
                  })
                })]
              }), (0, Jp.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Jp.jsx)(Zf, {
                  phase: cD.nextPhase
                }), (0, Jp.jsx)("span", {
                  children: cD.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function gf() {
      return (0, Jp.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((DD => (0, Jp.jsx)("i", {
          style: {
            "--sparkle-index": DD
          }
        }, DD)))
      })
    }

    function Xf(DD) {
      var CD;
      let {
        charm: cD,
        view: ID,
        controller: pD
      } = DD;
      const {
        t: iD
      } = (0, xp.F)(), fD = ID.shop, bD = (null === (CD = ID.sparkle) || void 0 === CD ? void 0 : CD.id) === cD.id;
      return (0, Jp.jsxs)("li", {
        className: Xp()("SkyblockLampLightCharm", cD.owned && "Owned", cD.socketed && "Socketed"),
        children: [bD && (0, Jp.jsx)(gf, {}, ID.sparkle.count), (0, Jp.jsx)("h4", {
          children: cD.name
        }), (0, Jp.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: cD.effect
        }), (0, Jp.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: cD.lines.map((DD => (0, Jp.jsxs)("li", {
            className: Xp()("SkyblockLampLightOddsLine", "better" === DD.tone ? "Better" : "worse" === DD.tone ? "Worse" : "Same"),
            children: [(0, Jp.jsx)("span", {
              className: "Before",
              children: DD.before
            }), (0, Jp.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Jp.jsx)("span", {
              className: "After",
              children: DD.after
            })]
          }, DD.label)))
        }), (0, Jp.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: cD.owned ? cD.socketed ? (0, Jp.jsxs)(Jp.Fragment, {
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: iD("skyblockGame:lampLightSocketed")
            }), (0, Jp.jsx)(Gp.P, {
              disabled: !ID.canCommand,
              ariaLabel: iD("skyblockGame:lampLightRemoveLabel", {
                charm: cD.name
              }),
              onClick: () => {
                pD.socket(null)
              },
              children: iD("skyblockGame:lampLightRemove")
            })]
          }) : (0, Jp.jsx)(Gp.i, {
            disabled: !ID.canCommand || !fD.heldRod,
            ariaLabel: iD("skyblockGame:lampLightSocketLabel", {
              charm: cD.name
            }),
            onClick: () => {
              pD.socket(cD.id)
            },
            children: iD("skyblockGame:lampLightSocket")
          }) : (0, Jp.jsx)(Gp.i, {
            disabled: !ID.canCommand || !cD.affordable,
            ariaLabel: iD("skyblockGame:lampLightBuyLabel", {
              item: cD.name,
              cost: cD.cost
            }),
            onClick: () => {
              pD.buy(cD.id)
            },
            children: cD.cost
          })
        })]
      })
    }

    function mf(DD) {
      var CD;
      let {
        tint: cD,
        view: ID,
        controller: pD
      } = DD;
      const {
        t: iD
      } = (0, xp.F)();
      return (0, Jp.jsxs)("li", {
        className: Xp()("SkyblockLampLightTint", cD.wearing && "Wearing"),
        style: {
          "--tint-colour": cD.colour
        },
        children: [(null === (CD = ID.sparkle) || void 0 === CD ? void 0 : CD.id) === cD.id && (0, Jp.jsx)(gf, {}, ID.sparkle.count), (0, Jp.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Jp.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: cD.name
        }), cD.wearing ? (0, Jp.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: iD("skyblockGame:lampLightWearing")
        }) : (0, Jp.jsx)(Gp.i, {
          disabled: !ID.canCommand || !cD.owned && !cD.affordable,
          ariaLabel: cD.owned ? iD("skyblockGame:lampLightWearLabel", {
            tint: cD.name
          }) : iD("skyblockGame:lampLightBuyLabel", {
            item: cD.name,
            cost: cD.cost
          }),
          onClick: () => {
            cD.owned ? pD.wearTint(cD.id) : pD.buy(cD.id)
          },
          children: cD.owned ? iD("skyblockGame:lampLightWear") : cD.cost
        })]
      })
    }

    function nf(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(jI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = cD.shop;
      return (0, Jp.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Jp.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: cD.balance
          }), (0, Jp.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": cD.releasing,
            className: Xp()("SkyblockLampLightSwitch", cD.releasing && "On"),
            disabled: cD.releasing ? "ready" !== cD.status : !cD.canCommand,
            onClick: () => {
              CD.setRelease(!cD.releasing)
            },
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Jp.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), ID("skyblockGame:lampLightRelease")]
          }), (0, Jp.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: ID("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== cD.notice && (0, Jp.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: cD.notice
        }), null !== pD && (0, Jp.jsxs)(Jp.Fragment, {
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Jp.jsx)("h3", {
              children: ID("skyblockGame:lampLightCharms")
            }), (0, Jp.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: pD.oddsFor
            }), (0, Jp.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((DD => (0, Jp.jsx)("button", {
                type: "button",
                "aria-pressed": cD.situation === DD,
                className: Xp()("SkyblockLampLightSituation", cD.situation === DD && "Selected"),
                onClick: () => {
                  CD.setSituation(DD)
                },
                children: ID("open" === DD ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, DD)))
            })]
          }), !pD.heldRod && (0, Jp.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: ID("skyblockGame:lampLightHoldRod")
          }), (0, Jp.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: pD.charms.map((DD => (0, Jp.jsx)(Xf, {
              charm: DD,
              view: cD,
              controller: CD
            }, DD.id)))
          }), (0, Jp.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Jp.jsx)("h3", {
              children: ID("skyblockGame:lampLightTints")
            })
          }), (0, Jp.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Jp.jsxs)("li", {
              className: Xp()("SkyblockLampLightTint", "Islands", pD.wearingIslandColours && "Wearing"),
              children: [(0, Jp.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Jp.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: ID("skyblockGame:lampLightIslandColours")
              }), pD.wearingIslandColours ? (0, Jp.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: ID("skyblockGame:lampLightWearing")
              }) : (0, Jp.jsx)(Gp.i, {
                disabled: !cD.canCommand,
                ariaLabel: ID("skyblockGame:lampLightWearLabel", {
                  tint: ID("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  CD.wearTint(null)
                },
                children: ID("skyblockGame:lampLightWear")
              })]
            }), pD.tints.map((DD => (0, Jp.jsx)(mf, {
              tint: DD,
              view: cD,
              controller: CD
            }, DD.id)))]
          })]
        })]
      })
    }

    function Of(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(jI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)();
      return cD.releasing ? (0, Jp.jsx)(np.e, {
        children: (0, Jp.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            CD.setRelease(!1)
          },
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Jp.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [ID("skyblockGame:lampLightReleasing"), " \xb7 ", cD.balance]
          }), (0, Jp.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: ID("skyblockGame:lampLightKeepCatches")
          }), null !== cD.gained && (0, Jp.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: cD.gained.text
          }, cD.gained.count)]
        })
      }) : null
    }

    function Pf(DD) {
      let {
        island: CD,
        view: cD,
        aim: ID
      } = DD;
      const {
        t: pD
      } = (0, xp.F)(), iD = CD.featuredFish;
      return (0, Jp.jsxs)("li", {
        className: Xp()("SkyblockKeepersChairIsland", `Island-${CD.id}`, CD.favoured && "Aimed", !CD.relit && "Dark"),
        children: [(0, Jp.jsx)("h3", {
          children: CD.name
        }), CD.relit && null !== iD ? (0, Jp.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: pD("skyblockGame:keepersChairTideNotice")
          }), (0, Jp.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Jp.jsx)(Pp.d, {
              itemName: iD.itemName,
              amount: 0
            })
          }), (0, Jp.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: iD.displayName
          })]
        }) : (0, Jp.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Jp.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: pD("skyblockGame:keepersChairDark")
          })
        }), CD.relit && (CD.favoured ? (0, Jp.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: pD("skyblockGame:keepersChairAimed")
        }) : (0, Jp.jsx)(Gp.i, {
          className: "SkyblockKeepersChairAim",
          disabled: !cD.canAim,
          ariaLabel: pD("skyblockGame:keepersChairAimLabel", {
            island: CD.name
          }),
          onClick: () => {
            ID(CD.id)
          },
          children: pD("skyblockGame:keepersChairAim")
        }))]
      }, CD.favoured ? cD.aimedCount : 0)
    }

    function Hf(DD) {
      let {
        controller: CD,
        lampLight: cD
      } = DD;
      const ID = (0, qp.g)(UI, CD.getSnapshot()),
        pD = (0, qp.g)(jI, cD.getSnapshot()),
        [iD, fD] = (0, HD.useState)("lamp"),
        {
          t: bD
        } = (0, xp.F)(),
        QD = kp();
      if (!ID.enabled) return null;
      const wD = "light" === iD && pD.enabled;
      return (0, Jp.jsx)(Tp.e, {
        show: ID.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: Xp()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", wD && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: QD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: bD("skyblockGame:keepersChairTitle")
              }), (0, Jp.jsx)("p", {
                children: bD(wD ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              ariaLabel: bD("skyblockGame:keepersChairClose"),
              onClick: CD.dismiss
            })]
          }), pD.enabled && (0, Jp.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((DD => (0, Jp.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === DD === wD,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === DD === wD ? "true" : void 0,
              className: Xp()("SkyblockKeepersChairTab", "light" === DD === wD && "Selected"),
              onClick: () => {
                fD(DD)
              },
              children: [bD("lamp" === DD ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === DD && (0, Jp.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: pD.balance
              })]
            }, DD)))
          }), wD ? (0, Jp.jsx)(nf, {
            controller: cD
          }) : (0, Jp.jsx)(Uf, {
            view: ID,
            controller: CD
          })]
        })
      })
    }

    function Uf(DD) {
      let {
        view: CD,
        controller: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)();
      return (0, Jp.jsxs)(Jp.Fragment, {
        children: [(0, Jp.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: CD.islands.map((DD => (0, Jp.jsx)(Pf, {
            island: DD,
            view: CD,
            aim: cD.aim
          }, DD.id)))
        }), null !== CD.almanac && (0, Jp.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: ID("skyblockGame:passageTitle")
          }), (0, Jp.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Jp.jsx)(Zf, {
              phase: CD.almanac.phase
            }), CD.almanac.phaseName]
          }), (0, Jp.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Jp.jsx)(Zf, {
              phase: CD.almanac.nextPhase
            }), CD.almanac.next]
          })]
        }), (0, Jp.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: ID("skyblockGame:keepersChairFavour")
          }), CD.aimed && (0, Jp.jsx)(Gp.P, {
            className: "SkyblockKeepersChairRest",
            disabled: !CD.canAim,
            onClick: () => {
              cD.aim(null)
            },
            children: ID("skyblockGame:keepersChairRest")
          })]
        }), null !== CD.status && (0, Jp.jsx)("p", {
          className: Xp()("SkyblockKeepersChairStatus", "refused" === CD.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: CD.status.text
        })]
      })
    }

    function xf(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, qp.g)(qI, CD.getSnapshot());
      if (!ID.enabled) return null;
      const pD = ID.freshCount > 0 ? cD("skyblockGame:reachLogOpenNews", {
        count: ID.freshCount
      }) : cD("skyblockGame:reachLogOpen");
      return (0, Jp.jsx)(np.e, {
        placement: "statBars",
        children: (0, Jp.jsxs)("button", {
          type: "button",
          className: Xp()("SkyblockReachLogButton", ID.freshCount > 0 && "HasNews", ID.pending && "Pending"),
          "aria-label": pD,
          title: pD,
          onClick: CD.ask,
          children: [ID.news && (0, Jp.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${ID.newsToken}`), (0, Jp.jsx)("span", {
            className: Xp()("SkyblockReachLogIcon", ID.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Jp.jsx)(Pp.d, {
              itemName: KI,
              amount: 0
            })
          }, `icon:${ID.newsToken}`), ID.freshCount > 0 && (0, Jp.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: ID.freshCount
          })]
        })
      })
    }

    function qf(DD) {
      let {
        gift: CD
      } = DD;
      return (0, Jp.jsx)("li", {
        className: Xp()("SkyblockRegularsGift", CD.given && "Given"),
        children: CD.text
      })
    }

    function Jf(DD) {
      let {
        regular: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)();
      return (0, Jp.jsxs)("li", {
        className: Xp()("SkyblockRegularsCard", CD.tagged ? "Tagged" : "Untagged", CD.resting && "Resting"),
        children: [(0, Jp.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: CD.fishName,
            children: (0, Jp.jsx)(Pp.d, {
              itemName: CD.itemName,
              amount: 0
            })
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Jp.jsx)("h3", {
              children: CD.name
            }), (0, Jp.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: CD.fishName
            })]
          })]
        }), (0, Jp.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: CD.line
        }), (0, Jp.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: CD.size
          }), CD.tagged && (0, Jp.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: CD.resting ? cD("skyblockGame:regularsResting") : CD.meetings
          })]
        }), (0, Jp.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: CD.chance
        }), (0, Jp.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: CD.gifts.map((DD => (0, Jp.jsx)(qf, {
            gift: DD
          }, DD.text)))
        }), CD.history.length > 0 && (0, Jp.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: CD.history.map(((DD, CD) => (0, Jp.jsx)("li", {
            children: DD
          }, CD)))
        })]
      })
    }

    function Kf(DD) {
      let {
        controller: CD,
        island: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)(), pD = (0, qp.g)(Dp, CD.getSnapshot()), iD = pD.islands.find((DD => DD.id === cD));
      if (!pD.enabled || void 0 === iD) return null;
      const fD = ID("skyblockGame:regularsOpen");
      return (0, Jp.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": fD,
        title: fD,
        onClick: () => {
          CD.openIsland(cD)
        },
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: ID("skyblockGame:regularsTitle")
        }), iD.regulars.map((DD => (0, Jp.jsx)("span", {
          className: Xp()("SkyblockRegularsStripIcon", DD.tagged && "Tagged"),
          title: DD.name,
          children: (0, Jp.jsx)(Pp.d, {
            itemName: DD.itemName,
            amount: 0
          })
        }, DD.id)))]
      })
    }

    function af(DD) {
      var CD;
      let {
        controller: cD
      } = DD;
      const ID = (0, qp.g)(Dp, cD.getSnapshot()),
        {
          t: pD
        } = (0, xp.F)(),
        iD = kp();
      if (!ID.enabled) return null;
      const fD = null !== (CD = ID.islands.find((DD => DD.id === ID.selected))) && void 0 !== CD ? CD : null;
      return (0, Jp.jsx)(Tp.e, {
        show: ID.open,
        close: cD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: iD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: pD("skyblockGame:regularsTitle")
              }), (0, Jp.jsx)("p", {
                children: pD("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: cD.dismiss
            })]
          }), (0, Jp.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ID.islands.map((DD => {
              const CD = DD.id === ID.selected;
              return (0, Jp.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": CD,
                "data-pad-tab": !0,
                "data-pad-selected": CD ? "true" : void 0,
                className: Xp()("SkyblockReachLogTab", `Island-${DD.id}`, CD && "Selected", DD.charm.given && "GoldPage"),
                onClick: () => {
                  cD.selectIsland(DD.id)
                },
                children: (0, Jp.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: DD.name
                })
              }, DD.id)
            }))
          }), (0, Jp.jsxs)("div", {
            className: Xp()("SkyblockRegularsPage", null !== fD && `Island-${fD.id}`),
            role: "tabpanel",
            children: [(0, Jp.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: pD("skyblockGame:regularsHow")
            }), null !== fD && (0, Jp.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: fD.regulars.map((DD => (0, Jp.jsx)(Jf, {
                regular: DD
              }, DD.id)))
            })]
          }), null !== fD && (0, Jp.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Jp.jsx)("span", {
              className: Xp()("SkyblockRegularsCharm", fD.charm.given && "Given"),
              children: fD.charm.text
            })
          })]
        })
      })
    }
    const Vf = [{
        "--left": "12%",
        "--tilt": "14deg",
        "--duration": "11s",
        "--delay": "-3s"
      }, {
        "--left": "62%",
        "--tilt": "-10deg",
        "--duration": "14s",
        "--delay": "-9s"
      }],
      zf = Array.from({
        length: 6
      }, ((DD, CD) => ({
        "--x": `${(88*(.618034*CD%1)).toFixed(1)}%`,
        "--y": `${(10+37*CD%70).toFixed(1)}%`,
        "--size": 7 + CD % 3 * 3 + "rem",
        "--drift-x": 3 * (CD % 3 - 1) + "rem",
        "--drift-y": 2 * (CD % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + CD % 4 * 3 + "s",
        "--delay": 2.5 * -CD + "s"
      }))),
      jf = Array.from({
        length: 14
      }, ((DD, CD) => ({
        "--left": `${(3+94*((.618034*CD+.3)%1)).toFixed(1)}%`,
        "--size": 4 + CD % 4 * 2 + "px",
        "--sway": CD % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*CD%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*CD%12).toFixed(2)}s`
      }))),
      lf = (0, HD.memo)((function(DD) {
        let {
          island: CD
        } = DD;
        return (0, Jp.jsxs)("div", {
          className: Xp()("SkyblockReachLogDepths", null !== CD && `Island-${CD}`),
          "aria-hidden": "true",
          children: [Vf.map(((DD, CD) => (0, Jp.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: DD
          }, `shaft${CD}`))), zf.map(((DD, CD) => (0, Jp.jsx)("span", {
            className: Xp()("SkyblockReachLogMote", CD % 2 === 1 && "Violet"),
            style: DD
          }, `mote${CD}`))), jf.map(((DD, CD) => (0, Jp.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: DD
          }, `bubble${CD}`)))]
        })
      })),
      Lf = 100;

    function Tf(DD) {
      let {
        view: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)();
      if (null === CD || 0 === CD.total) return null;
      const ID = Lf * CD.aspect,
        pD = cD("skyblockGame:hiddenWatersCount", {
          found: CD.found,
          total: CD.total
        });
      return (0, Jp.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${cD("skyblockGame:hiddenWatersTitle")}: ${pD}`,
        children: [(0, Jp.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${ID}`,
          "aria-hidden": "true",
          children: [CD.islands.map(((DD, CD) => (0, Jp.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (DD.left + DD.width / 2) * Lf,
            cy: (DD.top + DD.height / 2) * ID,
            rx: DD.width / 2 * Lf,
            ry: DD.height / 2 * ID
          }, CD))), CD.pins.map(((DD, CD) => (0, Jp.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: DD.left * Lf,
            cy: DD.top * ID,
            r: 13
          }, CD)))]
        }), (0, Jp.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: cD("skyblockGame:hiddenWatersTitle")
          }), (0, Jp.jsx)("span", {
            className: CD.found === CD.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: pD
          })]
        })]
      })
    }

    function Gf(DD) {
      let {
        view: CD,
        island: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)(), pD = null === CD || void 0 === CD ? void 0 : CD.glimpses.get(cD);
      return void 0 === pD || 0 === pD.length ? null : (0, Jp.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: ID("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Jp.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: pD.map((DD => (0, Jp.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Jp.jsx)(Pp.d, {
              itemName: DD,
              amount: 0
            })
          }, DD)))
        })]
      })
    }
    const Rf = ["Bronze", "Silver", "Gold"],
      kf = [{
        className: "Bloom",
        titleKey: "skyblockGame:reachLogRibbonBloomTitle",
        legendKey: "skyblockGame:reachLogLegendBloom"
      }, {
        className: "Chart",
        titleKey: "skyblockGame:reachLogRibbonChartTitle",
        legendKey: "skyblockGame:reachLogLegendChart"
      }, {
        className: "LetGo",
        titleKey: "skyblockGame:reachLogRibbonLetGoTitle",
        legendKey: "skyblockGame:reachLogLegendLetGo"
      }],
      df = kf.slice(0, 2);

    function Yf(DD) {
      return DD ? kf : df
    }

    function Wf(DD) {
      let {
        fish: CD,
        letGoShown: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)();
      return (0, Jp.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Rf.map(((DD, cD) => {
          const pD = cD < CD.marks;
          return (0, Jp.jsx)("span", {
            className: Xp()("SkyblockReachLogPip", DD, pD && "Earned", pD && CD.fresh && cD === CD.marks - 1 && "Newest"),
            title: ID(JI[cD])
          }, DD)
        })), (0, Jp.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Yf(cD).map(((DD, cD) => (0, Jp.jsx)("span", {
          className: Xp()("SkyblockReachLogRibbon", DD.className, !0 === CD.ribbons[cD] && "Earned"),
          title: ID(DD.titleKey)
        }, DD.className)))]
      })
    }

    function sf(DD) {
      let {
        letGoShown: CD,
        haloShown: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)();
      return (0, Jp.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Jp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ID("skyblockGame:reachLogMarks"),
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), ID("skyblockGame:reachLogLegendMarks")]
        }), Yf(CD).map((DD => (0, Jp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ID(DD.titleKey),
          children: [(0, Jp.jsx)("span", {
            className: Xp()("SkyblockReachLogRibbon", DD.className, "Earned")
          }), ID(DD.legendKey)]
        }, DD.className))), (0, Jp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ID("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), ID("skyblockGame:reachLogLegendGlimmer")]
        }), cD && (0, Jp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ID("skyblockGame:reachLogHaloTitle"),
          children: [(0, Jp.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), ID("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Ef(DD) {
      let {
        returner: CD
      } = DD;
      return (0, Jp.jsxs)("div", {
        className: Xp()("SkyblockReachLogReturner", CD.back && "Back"),
        children: [(0, Jp.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Jp.jsx)(Pp.d, {
            itemName: CD.itemName,
            amount: 0
          })
        }), (0, Jp.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: CD.line
        })]
      })
    }

    function ef(DD) {
      let {
        fish: CD,
        letGoShown: cD
      } = DD;
      const {
        t: ID
      } = (0, xp.F)();
      return (0, Jp.jsxs)("li", {
        className: Xp()("SkyblockReachLogCard", CD.caught ? "Caught" : "Unknown", CD.marks >= 3 && "GoldCard", CD.fresh && "Fresh", CD.visitor && "Visitor"),
        children: [CD.visitor && (0, Jp.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: ID("skyblockGame:reachLogVisitor")
        }), CD.fresh && Array.from({
          length: 4
        }, ((DD, CD) => (0, Jp.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, CD))), (0, Jp.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [CD.halo && (0, Jp.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: ID("skyblockGame:reachLogHaloTitle")
          }), (0, Jp.jsx)(Pp.d, {
            itemName: CD.itemName,
            amount: 0
          }), CD.glimmer && (0, Jp.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: ID("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Jp.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: CD.name
        }), (0, Jp.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: CD.chance
        }), (0, Jp.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: CD.best
        }), (0, Jp.jsx)(Wf, {
          fish: CD,
          letGoShown: cD
        })]
      })
    }

    function uf(DD) {
      let {
        page: CD,
        letGoShown: cD,
        hiddenWaters: ID
      } = DD;
      const {
        t: pD
      } = (0, xp.F)();
      return CD.awake ? (0, Jp.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: CD.fish.map((DD => (0, Jp.jsx)(ef, {
          fish: DD,
          letGoShown: cD
        }, DD.itemName)))
      }) : (0, Jp.jsxs)(Jp.Fragment, {
        children: [(0, Jp.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: pD("skyblockGame:reachLogAsleep")
        }), (0, Jp.jsx)(Gf, {
          view: ID,
          island: CD.id
        })]
      })
    }

    function hf(DD) {
      var CD, cD;
      let {
        controller: ID,
        regulars: pD,
        hiddenWaters: iD
      } = DD;
      const fD = (0, qp.g)(qI, ID.getSnapshot()),
        bD = function(DD) {
          return (0, qp.g)(ip, DD.getSnapshot())
        }(iD),
        QD = (0, qp.g)(Dp, pD.getSnapshot()),
        {
          t: wD
        } = (0, xp.F)(),
        SD = kp();
      if (!fD.enabled) return null;
      const BD = null !== (CD = fD.pages.find((DD => DD.id === fD.selected))) && void 0 !== CD ? CD : null;
      return (0, Jp.jsx)(Tp.e, {
        show: fD.open,
        close: ID.dismiss,
        togglePointerLock: !1,
        className: Xp()("SkyblockSkillsOverlay", QD.open && "SkyblockReachLogUnderLedger"),
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: SD,
          onKeyDown: Rp,
          children: [(0, Jp.jsx)(lf, {
            island: null !== (cD = null === BD || void 0 === BD ? void 0 : BD.id) && void 0 !== cD ? cD : null
          }), (0, Jp.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: wD("skyblockGame:reachLogTitle")
              }), (0, Jp.jsx)("p", {
                children: wD("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Jp.jsx)(Tf, {
              view: bD
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: ID.dismiss
            })]
          }), (0, Jp.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: fD.pages.map((DD => {
              const CD = DD.id === fD.selected,
                cD = DD.fish.some((DD => DD.fresh));
              return (0, Jp.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": CD,
                "data-pad-tab": !0,
                "data-pad-selected": CD ? "true" : void 0,
                className: Xp()("SkyblockReachLogTab", `Island-${DD.id}`, CD && "Selected", !DD.awake && "Asleep", DD.gold && "GoldPage", cD && "HasNews"),
                onClick: () => {
                  ID.selectPage(DD.id)
                },
                children: [(0, Jp.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: DD.name
                }), DD.awake && (0, Jp.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: wD("skyblockGame:reachLogCaughtCount", {
                    caught: DD.caught,
                    total: DD.total
                  })
                })]
              }, DD.id)
            }))
          }), (0, Jp.jsxs)("div", {
            className: Xp()("SkyblockReachLogPage", null !== BD && `Island-${BD.id}`),
            role: "tabpanel",
            children: [null !== BD && (0, Jp.jsx)(uf, {
              page: BD,
              letGoShown: fD.letGoShown,
              hiddenWaters: bD
            }), !0 === (null === BD || void 0 === BD ? void 0 : BD.awake) && null !== BD.returner && (0, Jp.jsx)(Ef, {
              returner: BD.returner
            }), !0 === (null === BD || void 0 === BD ? void 0 : BD.awake) && (0, Jp.jsx)(Kf, {
              controller: pD,
              island: BD.id
            })]
          }), (0, Jp.jsx)("footer", {
            className: Xp()("SkyblockReachLogFooter", null !== BD && `Island-${BD.id}`, !0 === (null === BD || void 0 === BD ? void 0 : BD.gold) && "GoldPage"),
            children: !0 === (null === BD || void 0 === BD ? void 0 : BD.gold) ? (0, Jp.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: wD("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Jp.jsxs)(Jp.Fragment, {
              children: [(0, Jp.jsx)(sf, {
                letGoShown: fD.letGoShown,
                haloShown: !0 === (null === BD || void 0 === BD ? void 0 : BD.fish.some((DD => DD.halo)))
              }), (0, Jp.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: wD("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var rf = cD(4599);

    function Af(DD) {
      let {
        conversation: CD,
        completedLabel: cD
      } = DD;
      return (0, Jp.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Jp.jsxs)("header", {
          children: [(0, Jp.jsx)("h3", {
            children: CD.questName
          }), CD.completed && (0, Jp.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: cD
          })]
        }), CD.lines.map((DD => (0, Jp.jsx)(rf.c, {
          display: DD.display
        }, DD.key)))]
      })
    }

    function Ff(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, qp.g)(bp, CD.getSnapshot()), pD = kp();
      if (!ID.enabled) return null;
      const iD = !ID.loading && 0 === ID.conversations.length;
      return (0, Jp.jsx)(Tp.e, {
        show: ID.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: cD("skyblockDialogue:title")
              }), (0, Jp.jsx)("p", {
                children: cD("skyblockDialogue:intro")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: CD.dismiss
            })]
          }), (0, Jp.jsxs)("div", {
            className: Xp()("SkyblockDialogueBody", {
              SingleColumn: null !== ID.questFocus || 0 === ID.characters.length
            }),
            children: [null === ID.questFocus && ID.characters.length > 0 && (0, Jp.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: ID.characters.map((DD => (0, Jp.jsx)(Gp.i, {
                className: Xp()("SkyblockDialogueCharacter", {
                  Selected: DD.selected
                }),
                onClick: () => {
                  CD.selectCharacter(DD.id)
                },
                children: (0, Jp.jsx)(Hp.c, {
                  text: DD.styling
                })
              }, DD.id)))
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== ID.questFocus && (0, Jp.jsx)(Gp.i, {
                className: "SkyblockDialogueBack",
                onClick: CD.showCharacters,
                children: cD("skyblockDialogue:allCharacters")
              }), ID.loading && (0, Jp.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: cD("skyblockDialogue:loading")
              }), iD && (0, Jp.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: cD(null === ID.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), ID.conversations.map((DD => (0, Jp.jsx)(Af, {
                conversation: DD,
                completedLabel: ID.completedLabel
              }, DD.questId)))]
            })]
          })]
        })
      })
    }

    function Db(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(yp, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp();
      return cD.enabled ? (0, Jp.jsx)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: ID("skyblockGame:autographBook")
              }), (0, Jp.jsx)("p", {
                children: ID("skyblockGame:autographBookIntro")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              onClick: CD.dismiss
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Jp.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Jp.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Jp.jsx)("strong", {
                  children: cD.total
                }), (0, Jp.jsx)("span", {
                  children: ID("skyblockGame:autographTotal")
                })]
              }), (0, Jp.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Jp.jsx)("strong", {
                  children: cD.rankTotal
                }), (0, Jp.jsx)("span", {
                  children: ID("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === cD.entries.length ? (0, Jp.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: ID("skyblockGame:autographBookEmpty")
            }) : (0, Jp.jsx)("ul", {
              className: "SkyblockAutographList",
              children: cD.entries.map((DD => (0, Jp.jsxs)("li", {
                className: Xp()("SkyblockAutograph", {
                  Ranked: null !== DD.rank
                }),
                style: null === DD.rank ? void 0 : {
                  color: DD.rank.colour
                },
                children: [null !== DD.rank && (0, Jp.jsx)(ti.c, {
                  className: "SkyblockAutographRankIcon",
                  name: DD.rank.icon,
                  kit: (0, ti.g)(DD.rank.icon)
                }), (0, Jp.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Jp.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: DD.name
                  }), (0, Jp.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== DD.rank && (0, Jp.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: DD.rank.label
                    }), (0, Jp.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: DD.signedOn
                    })]
                  })]
                })]
              }, DD.key)))
            })]
          })]
        })
      }) : null
    }
    const Cb = (0, HD.memo)((function(DD) {
        let {
          controller: CD
        } = DD;
        return (0, Jp.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: CD.display.mountWaypoint,
          children: [(0, Jp.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Jp.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Jp.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Jp.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Jp.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Jp.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      cb = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Ib(DD) {
      return "next" === DD.phase ? "\u2192" : cb[DD.kind]
    }
    const pb = (0, HD.memo)((function(DD) {
      let {
        controller: CD,
        display: cD
      } = DD;
      const ID = (0, qp.g)(Sc, CD.getNotificationSnapshot()),
        [pD, iD] = (0, HD.useState)(!1);
      return (0, qp.f)("qteStateUpdated", (DD => {
        iD(DD.isActive)
      })), (0, Jp.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (pD ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [ID && (0, Jp.jsxs)("div", {
          className: `SkyblockQuestNotification ${ID.kind} ${ID.phase}`,
          style: {
            "--quest-notification-duration": `${ID.durationMs}ms`,
            ...ID.accent && {
              "--quest-notification-accent": ID.accent
            }
          },
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (ID.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Ib(ID)
            }), ID.iconItem && (0, Jp.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Jp.jsx)(Pp.d, {
                itemName: ID.iconItem,
                amount: 0
              })
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: ID.title
            }), (0, Jp.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Jp.jsx)(bi.b, {
                text: ID.name
              })
            }), ID.description && (0, Jp.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Jp.jsx)(bi.b, {
                text: ID.description
              })
            }), ID.reward && (0, Jp.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Jp.jsx)(bi.b, {
                text: ID.reward
              })
            })]
          })]
        }, ID.token), (null === ID || void 0 === ID ? void 0 : ID.waypointNameKey) && (0, Jp.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": ID.waypointNameKey,
          "data-notification-token": ID.token,
          ref: cD.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${ID.token}`)]
      })
    }));

    function ib(DD) {
      const CD = parseInt(DD.replace("#", ""), 16);
      return `${CD>>16&255}, ${CD>>8&255}, ${255&CD}`
    }
    const fb = (0, HD.memo)((function(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, qp.g)(Lc, CD.getSnapshot());
      if (!ID) return null;
      const pD = "arrival" === ID.phase;
      return (0, Jp.jsxs)("div", {
        className: Xp()("SkyblockPortalTransit", {
          Departure: !pD,
          Arrival: pD
        }),
        style: {
          "--portal-rgb": ib(ID.colour),
          "--portal-duration": `${ID.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Jp.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Jp.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            CD.finishArrival(ID.token)
          }
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Jp.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !pD && (0, Jp.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: cD("skyblockGame:portalTransitHeading")
          }), (0, Jp.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: cD(ID.zoneNameKey)
          })]
        })]
      }, ID.token)
    }));

    function bb() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Qb() {
      const DD = document.querySelector(".SkyblockHudCoins"),
        CD = null === DD || void 0 === DD ? void 0 : DD.getBoundingClientRect();
      return CD && CD.width > 0 ? {
        x: CD.left + Math.min(CD.width, 24) / 2,
        y: CD.top + CD.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function wb(DD) {
      return {
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2
      }
    }

    function Sb() {
      var DD;
      const CD = null === (DD = document.querySelector(".HotBar")) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
      return CD && CD.width > 0 ? wb(CD) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Bb(DD) {
      let {
        items: CD,
        origins: cD,
        target: ID
      } = DD;
      return (0, Jp.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: CD.map(((DD, CD) => {
          const pD = cD[CD];
          return (0, Jp.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${pD.x}px`,
              top: `${pD.y}px`,
              "--item-dx": ID.x - pD.x + "px",
              "--item-dy": ID.y - pD.y + "px",
              "--item-delay": 2e3 + 160 * CD + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Jp.jsx)(Pp.d, {
              itemName: DD.dailyRewardItemName,
              amount: 0
            })
          }, DD.dailyRewardItemName)
        }))
      })
    }

    function yb(DD, CD) {
      const cD = -Math.PI / 2 + 1.25 * (DD / (CD - 1) * 2 - 1),
        ID = 70 + DD % 3 * 22;
      return {
        x: Math.cos(cD) * ID,
        y: Math.sin(cD) * ID * .7
      }
    }

    function Mb(DD) {
      let {
        origin: CD,
        target: cD,
        count: ID
      } = DD;
      const pD = [];
      for (let iD = 0; iD < ID; iD++) {
        const DD = yb(iD, ID);
        pD.push((0, Jp.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${CD.x}px`,
            top: `${CD.y}px`,
            "--coin-bx": `${DD.x}px`,
            "--coin-by": `${DD.y}px`,
            "--coin-dx": cD.x - CD.x + "px",
            "--coin-dy": cD.y - CD.y + "px",
            "--coin-delay": `${Yc(iD,ID)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Jp.jsx)(Pp.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, iD))
      }
      return (0, Jp.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: pD
      })
    }

    function tb(DD) {
      let {
        day: CD
      } = DD;
      const cD = UD[CD - 1];
      return (0, Jp.jsxs)(Jp.Fragment, {
        children: [(0, Jp.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Jp.jsx)(Pp.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Up.g)(cD.dailyRewardCoins)]
        }), cD.dailyRewardItems.map((DD => (0, Jp.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Jp.jsx)(Pp.d, {
            itemName: DD.dailyRewardItemName,
            amount: 0
          }), "\xd7", DD.dailyRewardItemAmount]
        }, DD.dailyRewardItemName)))]
      })
    }

    function Zb(DD) {
      let {
        day: CD
      } = DD;
      const cD = qD(CD);
      return (0, Jp.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: UD.map(((DD, ID) => {
          const pD = ID + 1;
          return (0, Jp.jsxs)("li", {
            className: Xp()("SkyblockDailyRewardTile", {
              Claimed: pD < CD && pD !== cD,
              Today: pD === CD,
              Tomorrow: pD === cD,
              Jackpot: pD === xD
            }),
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: pD
            }), (0, Jp.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Jp.jsx)(Pp.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Up.g)(DD.dailyRewardCoins)]
            }), DD.dailyRewardItems.map((DD => (0, Jp.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Jp.jsx)(Pp.d, {
                itemName: DD.dailyRewardItemName,
                amount: 0
              }), "\xd7", DD.dailyRewardItemAmount]
            }, DD.dailyRewardItemName)))]
          }, pD)
        }))
      })
    }

    function ob(DD) {
      let {
        view: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, HD.useRef)(null), pD = (0, HD.useRef)(null), [iD, fD] = (0, HD.useState)(null);
      (0, HD.useLayoutEffect)((() => {
        var DD;
        const CD = null === (DD = ID.current) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
        if (CD) {
          var cD, iD;
          const DD = Array.from(null !== (cD = null === (iD = pD.current) || void 0 === iD ? void 0 : iD.children) && void 0 !== cD ? cD : [], (DD => wb(DD.getBoundingClientRect())));
          fD({
            origin: wb(CD),
            target: Qb(),
            itemOrigins: DD,
            itemTarget: Sb()
          })
        }
      }), []);
      const bD = qD(CD.day),
        QD = function(DD, CD) {
          const [cD, ID] = (0, HD.useState)((() => bb() ? DD : 0));
          return (0, HD.useEffect)((() => {
            if (bb()) return;
            const cD = performance.now();
            let pD = 0;
            const iD = fD => {
              const bD = Math.min(Math.max((fD - cD) / CD, 0), 1);
              ID(Math.round(DD * (1 - (1 - bD) ** 3))), bD < 1 && (pD = requestAnimationFrame(iD))
            };
            return pD = requestAnimationFrame(iD), () => {
              cancelAnimationFrame(pD)
            }
          }), [DD, CD]), cD
        }(CD.coins, 450);
      return (0, Jp.jsxs)("div", {
        className: Xp()("SkyblockDailyReward", {
          Jackpot: CD.day === xD
        }),
        style: {
          "--daily-duration": `${CD.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Jp.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Jp.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: cD("skyblockGame:dailyRewardTitle")
            }), (0, Jp.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: cD("skyblockGame:dailyRewardDay", {
                day: String(CD.day)
              })
            })]
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: ID,
            children: [(0, Jp.jsx)(Pp.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Jp.jsxs)("span", {
              children: ["+", (0, Up.g)(QD)]
            })]
          }), CD.items.length > 0 && (0, Jp.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: pD,
            children: CD.items.map((DD => (0, Jp.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Jp.jsx)(Pp.d, {
                itemName: DD.dailyRewardItemName,
                amount: 0
              }), "\xd7", DD.dailyRewardItemAmount]
            }, DD.dailyRewardItemName)))
          }), (0, Jp.jsx)(Zb, {
            day: CD.day
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [cD("skyblockGame:dailyRewardComeBack"), (0, Jp.jsx)(tb, {
              day: bD
            })]
          })]
        }), null !== iD && (0, Jp.jsx)(Mb, {
          origin: iD.origin,
          target: iD.target,
          count: CD.flyingCoins
        }), null !== iD && iD.itemOrigins.length === CD.items.length && (0, Jp.jsx)(Bb, {
          items: CD.items,
          origins: iD.itemOrigins,
          target: iD.itemTarget
        })]
      })
    }
    const vb = (0, HD.memo)((function(DD) {
        let {
          controller: CD
        } = DD;
        const cD = (0, qp.g)(Rc, CD.getSnapshot());
        return cD ? (0, Jp.jsx)(ob, {
          view: cD
        }, cD.token) : null
      })),
      Nb = "Gold Coin";

    function gb(DD) {
      return 650 + 220 * DD
    }

    function Xb(DD) {
      return {
        "--letter-delay": `${gb(DD)}ms`,
        "--letter-land": `${gb(DD)+300}ms`
      }
    }

    function mb(DD) {
      let {
        letterCount: CD
      } = DD;
      return (0, Jp.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Jp.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Jp.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Jp.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: CD
        }, ((DD, CD) => (0, Jp.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Xb(CD),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, CD)))]
      })
    }

    function nb(DD) {
      var CD, cD, ID;
      let {
        letter: pD,
        index: iD
      } = DD;
      const {
        t: fD
      } = (0, xp.F)(), bD = null !== (CD = null === (cD = pD.items[0]) || void 0 === cD ? void 0 : cD.itemName) && void 0 !== CD ? CD : Nb;
      return (0, Jp.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Xb(iD),
        children: [(0, Jp.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Jp.jsx)(Pp.d, {
            itemName: bD,
            amount: 0
          })
        }), (0, Jp.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: fD(pD.reasonKey, null !== (ID = pD.reasonParams) && void 0 !== ID ? ID : void 0)
        }), (0, Jp.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [pD.coins > 0 && (0, Jp.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Jp.jsx)(Pp.d, {
              itemName: Nb,
              amount: 0
            }), "+", (0, Up.g)(pD.coins)]
          }), pD.items.map(((DD, CD) => (0, Jp.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Jp.jsx)(Pp.d, {
              itemName: DD.itemName,
              amount: 0
            }), DD.label, " \xd7", DD.amount]
          }, CD)))]
        })]
      })
    }

    function Ob(DD) {
      let {
        view: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)();
      return (0, Jp.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${CD.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${gb(CD.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Jp.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Jp.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Jp.jsx)(mb, {
              letterCount: CD.letters.length
            }), (0, Jp.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: cD("skyblockGame:mailboxTitle")
            })]
          }), (0, Jp.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: CD.letters.map(((DD, CD) => (0, Jp.jsx)(nb, {
              letter: DD,
              index: CD
            }, CD)))
          }), CD.more > 0 && (0, Jp.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: cD("skyblockGame:mailboxMore", {
              count: String(CD.more)
            })
          })]
        })
      })
    }
    const Pb = (0, HD.memo)((function(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(sc, CD.getSnapshot());
      return cD ? (0, Jp.jsx)(Ob, {
        view: cD
      }, cD.token) : null
    }));

    function Hb(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, qp.g)(LI, CD.getSnapshot());
      if (null === ID) return null;
      const pD = ID.fullSet ? "empty" === ID.fuelState ? {
        text: cD("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: cD("skyblockGame:magmawardHudFullSet", {
          worn: String(ID.wornCount)
        }),
        tone: "partial"
      };
      return (0, Jp.jsx)(np.e, {
        placement: "statBars",
        children: (0, Jp.jsxs)("div", {
          className: Xp()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${ID.fuelState}`, {
            "SkyblockMagmawardHud-partial": !ID.fullSet,
            "SkyblockMagmawardHud-armed": ID.fullSet && "empty" !== ID.fuelState
          }),
          children: [null !== ID.flare && (0, Jp.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${ID.flare}`
          }, `flare:${ID.flareToken}`), (0, Jp.jsx)("div", {
            className: Xp()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: ID.setLit
            }),
            children: ID.pieces.map(((DD, CD) => (0, Jp.jsx)("div", {
              className: Xp()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: DD.worn,
                SkyblockMagmawardPieceJustWorn: DD.justWorn
              }),
              children: (0, Jp.jsx)(Pp.d, {
                itemName: DD.itemName,
                amount: 0
              })
            }, `${CD}:${DD.wornToken}`)))
          }, `pieces:${ID.setLitToken}`), (0, Jp.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Jp.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Jp.jsxs)("div", {
              className: Xp()("SkyblockMagmawardFuelCounter", ID.pulse && `SkyblockMagmawardFuelCounter-${ID.pulse}`),
              children: [(0, Jp.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Jp.jsx)(Pp.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Jp.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: ID.fuel
              })]
            }, `counter:${ID.pulseToken}`), "burn" === ID.pulse && (0, Jp.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${ID.pulseToken}`)]
          }), pD && (0, Jp.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${pD.tone} SmallTextBold`,
            children: pD.text
          })]
        })
      })
    }

    function Ub(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD,
        selectedLanguage: ID
      } = (0, xp.F)(), pD = (0, qp.g)(GI, CD.getSnapshot());
      return null === pD ? null : (0, Jp.jsx)(np.e, {
        placement: "statBars",
        children: (0, Jp.jsxs)("div", {
          className: Xp()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: pD.inRange
          }),
          style: {
            "--glowtide-colour": pD.colour
          },
          "aria-label": cD("skyblockGame:glowtideChipLabel"),
          children: [(0, Jp.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), pD.inRange ? (0, Jp.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: cD("skyblockGame:glowtideChipInRange")
          }, `call:${pD.inRangeToken}`) : (0, Jp.jsxs)(Jp.Fragment, {
            children: [(0, Jp.jsx)("div", {
              ref: CD.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Jp.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: cD("skyblockGame:waypointDistance", {
                distance: nD(pD.distance, ID.code)
              })
            })]
          })]
        })
      })
    }

    function xb(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, qp.g)(kI, CD.getSnapshot());
      return null === ID ? null : (0, Jp.jsx)(np.e, {
        placement: "statBars",
        children: (0, Jp.jsxs)("div", {
          className: Xp()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: ID.full
          }),
          "aria-label": cD("skyblockGame:glowMeterLabel", {
            fill: String(ID.fill),
            LB: String(ID.LB)
          }),
          children: [ID.burst && (0, Jp.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${ID.burstToken}`), (0, Jp.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Jp.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${ID.ratio})`
              }
            }), ID.gained && (0, Jp.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${ID.gainToken}`), ID.full && Array.from({
              length: 5
            }, ((DD, CD) => (0, Jp.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, CD)))]
          }), ID.full && ID.rares.map((DD => (0, Jp.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Jp.jsx)(Pp.d, {
              itemName: DD,
              amount: 0
            })
          }, DD))), ID.ready && (0, Jp.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Jp.jsx)("span", {
              children: cD("skyblockGame:glowMeterReady")
            })
          }, `ready:${ID.fullToken}`)]
        })
      })
    }

    function qb(DD) {
      let {
        controller: CD
      } = DD;
      const {
        t: cD
      } = (0, xp.F)(), ID = (0, qp.g)(YI, CD.getSnapshot());
      if (null === ID) return null;
      const pD = "waiting" === ID.phase,
        iD = {
          animationDuration: `${ID.waitMs}ms`,
          animationDelay: -ID.elapsedMs + "ms"
        },
        fD = pD ? void 0 : {
          animationDuration: `${ID.waitMs}ms`
        };
      return (0, Jp.jsxs)("div", {
        className: pD ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [pD && (0, Jp.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((DD, CD) => (0, Jp.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, CD))), (0, Jp.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: iD
          }), (0, Jp.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Jp.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Jp.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: iD
            })]
          }), (0, Jp.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Jp.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: fD,
          children: cD(ID.line)
        }, ID.lineIndex)]
      }, ID.token)
    }

    function Jb(DD) {
      let {
        chart: CD,
        showHere: cD,
        className: ID
      } = DD;
      return (0, Jp.jsx)("div", {
        className: Xp()("SkyblockTideChartGrid", ID, null !== CD.pictureName && "Complete"),
        "aria-hidden": "true",
        children: CD.cells.map(((DD, ID) => {
          const pD = 0 !== (CD.pulseCells & 1 << ID),
            iD = CD.castCell === ID;
          return (0, Jp.jsx)("span", {
            className: Xp()("SkyblockTideChartCell", `Cell-${DD}`, pD && "Pulse", iD && "Cast", cD && CD.hereCell === ID && "Here")
          }, `${ID}:${pD?`p${CD.pulseToken}`:""}:${iD?`c${CD.castToken}`:""}`)
        }))
      })
    }

    function Kb(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(sI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = cD.chip;
      if (!cD.enabled || null === pD) return null;
      const iD = ID("skyblockGame:tideChartsChipLabel", {
        island: pD.islandName,
        lit: String(pD.lit),
        ink: String(pD.ink)
      });
      return (0, Jp.jsx)(np.e, {
        placement: "statBars",
        children: (0, Jp.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Xp()("SkyblockTideChartsChip", cD.open && "Open", null !== pD.pictureName && "Complete"),
          "aria-label": iD,
          title: iD,
          onMouseDown: DD => {
            DD.preventDefault()
          },
          onClick: CD.toggle,
          children: [(0, Jp.jsx)(Jb, {
            chart: pD,
            showHere: !1,
            className: "Mini"
          }), (0, Jp.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [pD.lit, "/", pD.ink]
          })]
        })
      })
    }

    function ab(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, qp.g)(sI, CD.getSnapshot()),
        {
          t: ID
        } = (0, xp.F)(),
        pD = kp(),
        iD = cD.card;
      return cD.enabled && null !== iD ? (0, Jp.jsx)(Tp.e, {
        show: cD.open,
        close: CD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: pD,
          onKeyDown: Rp,
          children: [(0, Jp.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Jp.jsxs)("div", {
              children: [(0, Jp.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: ID("skyblockGame:tideChartsTitle")
              }), (0, Jp.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: ID("skyblockGame:tideChartsIntro")
              })]
            }), (0, Jp.jsx)(Gp.l, {
              padIgnore: !0,
              ariaLabel: ID("skyblockGame:tideChartsClose"),
              onClick: CD.dismiss
            })]
          }), cD.tabs.length > 1 && (0, Jp.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": ID("skyblockGame:tideChartsIslands"),
            children: cD.tabs.map((DD => (0, Jp.jsx)("button", {
              type: "button",
              className: Xp()("SkyblockTideChartsTab", DD.selected && "Selected"),
              "aria-pressed": DD.selected,
              onClick: () => {
                CD.MM(DD.island)
              },
              children: DD.name
            }, DD.island)))
          }), (0, Jp.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Jp.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": iD.gridLabel,
              children: (0, Jp.jsx)(Jb, {
                chart: iD,
                showHere: !0,
                className: "Large"
              })
            }), (0, Jp.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Jp.jsx)("h3", {
                children: iD.islandName
              }), (0, Jp.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: iD.litText
              }), null === iD.pictureName ? (0, Jp.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: ID("skyblockGame:tideChartsPictureHidden")
              }) : (0, Jp.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: ID("skyblockGame:tideChartsPictureRevealed", {
                  picture: iD.pictureName
                })
              }, iD.pictureName), (0, Jp.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Jp.jsxs)("li", {
                  children: [(0, Jp.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), ID("skyblockGame:tideChartsLegendLit")]
                }), (0, Jp.jsxs)("li", {
                  children: [(0, Jp.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), ID("skyblockGame:tideChartsLegendClear")]
                }), null !== iD.hereCell && (0, Jp.jsxs)("li", {
                  children: [(0, Jp.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), ID("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Jp.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Jp.jsx)("span", {
                  children: cD.turnsText
                }), (0, Jp.jsx)("span", {
                  children: cD.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Vb(DD) {
      var CD;
      let {
        controller: cD
      } = DD;
      const {
        selectedLanguage: ID
      } = (0, xp.F)(), pD = ID.code;
      (0, HD.useEffect)((() => {
        cD.setTranslator(((DD, CD) => (0, xp.y)(pD, DD, CD)), pD, ((DD, CD) => (0, xp.s)(pD, DD, CD)))
      }), [cD, pD]);
      const iD = (0, qp.g)(yD, cD.map.getSnapshot()),
        {
          openInGameMenuName: fD
        } = (0, mp.o)(["openInGameMenuName"]);
      return (0, Jp.jsxs)(Jp.Fragment, {
        children: [(0, Jp.jsx)(pb, {
          controller: cD.quests,
          display: cD.navigation.display
        }), iD.enabled && !fD && (0, Jp.jsx)(Ii, {
          controller: cD.navigation
        }), (0, Jp.jsx)(Kp, {
          controller: cD,
          minimap: iD.enabled && (null === (CD = iD.presentation) || void 0 === CD ? void 0 : CD.minimap) && (0, Jp.jsx)(ci, {
            view: iD.presentation.minimap,
            navigation: cD.navigation,
            controller: cD.map
          }),
          children: (0, Jp.jsx)(Mi, {
            controller: cD.quests,
            surface: "hud"
          })
        }), (0, Jp.jsx)(Cb, {
          controller: cD.navigation
        }), (0, Jp.jsx)(fb, {
          controller: cD.portalTransit
        }), (0, Jp.jsx)(vb, {
          controller: cD.dailyReward
        }), (0, Jp.jsx)(Pb, {
          controller: cD.mailbox
        }), (0, Jp.jsx)(Hb, {
          controller: cD.magmaward
        }), (0, Jp.jsx)(Ub, {
          controller: cD.glowtide
        }), (0, Jp.jsx)(of, {
          controller: cD.passage
        }), (0, Jp.jsx)(Kb, {
          controller: cD.tideCharts
        }), (0, Jp.jsx)(xb, {
          controller: cD.glowMeter
        }), (0, Jp.jsx)(xf, {
          controller: cD.reachLog
        }), (0, Jp.jsx)(qb, {
          controller: cD.hushWait
        }), (0, Jp.jsx)(Of, {
          controller: cD.lampLight
        }), (0, Jp.jsx)(ii, {
          controller: cD.skills,
          surface: "hud"
        })]
      })
    }

    function zb(DD) {
      let {
        controller: CD
      } = DD;
      return (0, Jp.jsxs)(Jp.Fragment, {
        children: [(0, Jp.jsx)(Ci, {
          controller: CD.map,
          navigation: CD.navigation
        }), (0, Jp.jsx)(ii, {
          controller: CD.skills,
          surface: "menu"
        }), (0, Jp.jsx)(Mi, {
          controller: CD.quests,
          surface: "menu"
        }), (0, Jp.jsx)(ei, {
          controller: CD.dungeons
        }), (0, Jp.jsx)(Ai, {
          controller: CD.collections
        }), (0, Jp.jsx)(Cf, {
          controller: CD.questGraph
        }), (0, Jp.jsx)(Qf, {
          controller: CD.forge
        }), (0, Jp.jsx)(tf, {
          controller: CD.smuggler
        }), (0, Jp.jsx)(Hf, {
          controller: CD.keepersChair,
          lampLight: CD.lampLight
        }), (0, Jp.jsx)(hf, {
          controller: CD.reachLog,
          regulars: CD.regulars,
          hiddenWaters: CD.hiddenWaters
        }), (0, Jp.jsx)(af, {
          controller: CD.regulars
        }), (0, Jp.jsx)(Nf, {
          controller: CD.passage
        }), (0, Jp.jsx)(ab, {
          controller: CD.tideCharts
        }), (0, Jp.jsx)(Ff, {
          controller: CD.dialogue
        }), (0, Jp.jsx)(Db, {
          controller: CD.autographs
        })]
      })
    }
    var jb = cD(36122);
    const lb = DI + bI;

    function Lb(DD, CD, cD, ID, pD) {
      const iD = [],
        fD = [],
        bD = cD => {
          const ID = DD.playSound(CD, cD.sound, cD.volume, cD.rate);
          ID && (fD.push(ID), void 0 !== cD.cutAfter && iD.push(setTimeout((() => {
            ID.fade(ID.getVolume(), 0, 300)
          }), cD.cutAfter)))
        };
      for (const QD of function(DD, CD) {
          const cD = [{
            sound: "rpgKnifeSlice1",
            beat: DI,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: DI,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: DI,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: DI,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: DI,
            lead: 60,
            volume: .6,
            rate: 1
          }, {
            sound: "zapAccent1",
            beat: 360,
            lead: 60,
            volume: .3,
            rate: 1.3
          }, {
            sound: (0, jb.c)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: lb + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, jb.c)("bigDrumSwish"),
            beat: lb + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: lb + 60,
            lead: 180,
            volume: .5 + .06 * DD,
            rate: .82 + .07 * DD
          }];
          return DD >= 4 && cD.push({
            sound: "exp_levelup",
            beat: lb + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), CD && cD.push({
            sound: "trumpetFlare",
            beat: lb + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), cD.push({
            sound: "harp_pling",
            beat: CI,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), cD
        }(cD, ID)) pD ? iD.push(setTimeout((() => {
        bD(QD)
      }), Math.max(0, QD.beat - QD.lead / QD.rate))) : QD.beat !== DI && "magicAccent2" !== QD.sound && "trumpetFlare" !== QD.sound || bD(QD);
      return () => {
        for (const DD of iD) clearTimeout(DD);
        for (const DD of fD) DD.fade(DD.getVolume(), 0, 120)
      }
    }
    class Tb {
      constructor(DD) {
        this.deps = DD, this.pending = new Map, this.localHook = null
      }
      hookWaiting(DD, CD) {
        this.pending.delete(DD);
        const cD = this.deps.now();
        if (null === CD) {
          var ID;
          if ((null === (ID = this.localHook) || void 0 === ID ? void 0 : ID.hookId) === DD) {
            const DD = cD >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(DD)
          }
          return
        }
        const pD = cD + CD;
        this.settle(DD, pD) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(DD, {
          untilMs: cD + 1e3,
          biteAtMs: pD
        }))
      }
      getLocalHook() {
        var DD, CD;
        return null !== (DD = null === (CD = this.localHook) || void 0 === CD ? void 0 : CD.hookId) && void 0 !== DD ? DD : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const DD = this.deps.now();
        for (const [CD, {
            untilMs: cD,
            biteAtMs: ID
          }] of this.pending)(this.settle(CD, ID) || DD > cD) && this.pending.delete(CD)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(DD, CD) {
        const cD = this.deps.getLineOwner(DD);
        if (null === cD) return !1;
        if (!this.deps.isLocalPlayer(cD)) return !0;
        if (this.localHook = {
            hookId: DD,
            biteAtMs: CD
          }, !this.deps.isHushWaiting()) {
          const [CD, cD] = this.deps.getHookPosition(DD);
          this.deps.onCastLanded(CD, cD)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Gb = cD(4081);
    const Rb = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      kb = {
        1: {
          count: 24,
          rise: 2.5,
          colour: [79, 237, 237]
        },
        2: {
          count: 40,
          rise: 3.5,
          colour: [245, 209, 66]
        },
        3: {
          count: 64,
          rise: 5,
          colour: [206, 145, 206]
        }
      };
    class db {
      constructor(DD) {
        this.deps = DD, this.tell = null
      }
      receiveTell(DD) {
        let {
          biteTellTier: CD
        } = DD;
        this.tell = {
          tier: CD,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(DD) {
        const CD = this.tell;
        if (this.tell = null, !DD) return;
        const cD = null !== CD && this.deps.now() - CD.atMs <= 3e3 ? CD.tier : 0;
        this.deps.vibrate(Rb[cD])
      }
      burstAtHook() {
        const DD = this.tell,
          CD = this.deps.getLocalHookPosition();
        null === DD || DD.burst || null === CD || (DD.burst = !0, this.deps.playParticles(function(DD, CD) {
          let [cD, ID, pD] = CD;
          const {
            count: iD,
            rise: fD,
            colour: bD
          } = kb[DD], [QD, wD, SD] = bD;
          return {
            texture: "glint",
            pos1: [cD - .3, ID, pD - .3],
            pos2: [cD + .3, ID + .2, pD + .3],
            dir1: [-.6, fD, -.6],
            dir2: [.6, 1.4 * fD, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: iD,
            gravity: [0, -4, 0],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }, {
              timeFraction: 1,
              factor: .2,
              factor2: .2
            }],
            colorGradients: [{
              timeFraction: 0,
              minColor: [QD, wD, SD, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [QD, wD, SD, 0],
              maxColor: [QD, wD, SD, 0]
            }],
            blendMode: Gb.c.Add,
            hideDist: 48
          }
        }(DD.tier, CD)))
      }
    }
    var Yb = cD(1250),
      Wb = cD(1913),
      sb = cD(36);

    function Eb(DD, CD) {
      return [{
        timeFraction: 0,
        minColor: [255 * DD[0], 255 * DD[1], 255 * DD[2], 1],
        maxColor: [255 * CD[0], 255 * CD[1], 255 * CD[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const eb = [0, 0, 0],
      ub = {
        texture: "glint",
        mipmaps: !1,
        LB: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: eb,
        dir2: eb,
        blendMode: Gb.c.OneOne
      },
      hb = {
        ...ub,
        colorGradients: Eb([1, .88, .38], [1, .65, .15])
      },
      rb = {
        ...ub,
        colorGradients: Eb([.55, .95, 1], [.9, 1, 1])
      },
      Ab = [.5, .5, .5],
      Fb = {
        texture: "glint",
        mipmaps: !1,
        LB: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Eb([1, .12, .12], [1, .35, .2]),
        blendMode: Gb.c.OneOne
      };
    class DQ {
      constructor() {
        this.drops = new Map
      }
      kt(DD, CD) {
        if ("overflowFlash" === CD.kind) {
          const [cD, ID, pD] = CD.position, iD = DD.createParticles(Fb, {
            pos: [cD, ID, pD],
            half: Ab
          });
          return iD.emit(18), void iD.stop()
        }
        this.drops.has(CD.itemId) || this.drops.set(CD.itemId, {
          owner: CD.owner,
          cosmetic: CD.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      wy(DD) {
        if (0 === this.drops.size) return;
        const CD = performance.now(),
          cD = DD.getCameraPosition();
        let ID = 0;
        for (const iD of this.drops.values()) null !== iD.particles && ID++;
        for (const [iD, fD] of this.drops) {
          const bD = DD.getPositionView(iD);
          if (null === bD) {
            var pD;
            if (fD.seen || CD - fD.markedAt > 5e3) null !== fD.particles && ID--, null === (pD = fD.particles) || void 0 === pD || pD.stop(), this.drops.delete(iD);
            continue
          }
          fD.cosmetic || !DD.isLocalPlayer(fD.owner) || fD.pickupDelayCleared || (DD.clearPickupDelay(iD), fD.pickupDelayCleared = !0);
          const QD = fD.lastPosition,
            wD = fD.seen && (bD[0] - QD[0]) ** 2 + (bD[1] - QD[1]) ** 2 + (bD[2] - QD[2]) ** 2 > 4e-4,
            SD = (bD[0] - cD[0]) ** 2 + (bD[1] - cD[1]) ** 2 + (bD[2] - cD[2]) ** 2 < 2025;
          fD.seen = !0, QD[0] = bD[0], QD[1] = bD[1], QD[2] = bD[2], wD && (fD.lastMovingAt = CD), null !== fD.particles && (!SD || CD - fD.lastMovingAt > 500) && (fD.particles.stop(), fD.particles = null, ID--), wD && SD && null === fD.particles && ID < 32 && (fD.particles = DD.createParticles(fD.cosmetic ? rb : hb, {
            pos: bD
          }), ID++), null !== fD.particles && (fD.particles.moveTo(bD), fD.particles.setEmitRate(wD ? 12 : 0)), !wD && null === fD.particles && CD - Math.max(fD.lastMovingAt, fD.markedAt) > 2e3 && this.drops.delete(iD)
        }
      }
      dispose() {
        for (const CD of this.drops.values()) {
          var DD;
          null === (DD = CD.particles) || void 0 === DD || DD.stop()
        }
        this.drops.clear()
      }
    }
    var CQ = cD(194);
    const cQ = CQ.h.XN * CQ.h.playerEyeToHeightRatio;
    class IQ {
      constructor(DD) {
        this.host = DD, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      kt(DD) {
        this.lava = DD, this.nextUpdateAt = 0
      }
      wy() {
        var DD;
        const CD = this.host.now();
        if (CD < this.nextUpdateAt) return;
        this.nextUpdateAt = CD + 250;
        const cD = this.host.playerPosition(),
          ID = cD && this.findNearest([cD[0], cD[1] + cQ, cD[2]]);
        if (!ID || ID.distance >= 40) return void this.stop();
        const pD = .5 * Math.min(1, (40 - ID.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(pD) : this.loop = this.host.play("lavaFlow", pD, ID.position, 40 + cQ, 9, !0), null === (DD = this.loop) || void 0 === DD || DD.setPosition(ID.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var DD;
        null === (DD = this.loop) || void 0 === DD || DD.stop(), this.loop = null
      }
      findNearest(DD) {
        let CD = -1,
          cD = 1 / 0;
        for (let ID = 0; ID < this.lava.length; ID += 3) {
          const pD = this.lava[ID] - DD[0],
            iD = this.lava[ID + 1] - DD[1],
            fD = this.lava[ID + 2] - DD[2],
            bD = pD * pD + iD * iD + fD * fD;
          bD < cD && (cD = bD, CD = ID)
        }
        return CD < 0 ? null : {
          position: [this.lava[CD], this.lava[CD + 1], this.lava[CD + 2]],
          distance: Math.sqrt(cD)
        }
      }
    }
    var pQ = cD(1886),
      iQ = cD(38013);
    const fQ = {
      "Grey Portal": "Gray"
    };
    for (const yQ of pD.Gc) fQ[`${yQ} Portal`] = yQ;
    const bQ = Object.keys(fQ),
      QQ = Object.fromEntries(bQ.map((DD => [DD, (0, pD.V)(pD.J[`${(0,pD.le)(fQ[DD])}Team`])])));
    Object.fromEntries(bQ.map((DD => [DD, pD.J[`${(0,pD.le)(fQ[DD])}UiText`]])));
    class wQ {
      constructor(DD, CD) {
        this.presentation = DD, this.portal = CD, this.unlocked = void 0
      }
      kt(DD) {
        const CD = !1 === this.unlocked && DD;
        this.unlocked = DD, this.wy();
        const {
          min: cD,
          max: ID,
          unlockedBlock: pD
        } = this.portal;
        if (CD && this.presentation.hasChunk(...cD)) {
          const [DD, CD, iD] = QQ[pD];
          this.presentation.playParticles({
            pos1: [...cD],
            pos2: ID.map((DD => DD + 1)),
            dir1: [-1, 0, -1],
            dir2: [1, 1, 1],
            texture: "glint",
            minLifeTime: .4,
            maxLifeTime: 1.2,
            minEmitPower: .5,
            maxEmitPower: 1.5,
            minSize: .12,
            maxSize: .25,
            manualEmitCount: 80,
            hideDist: 64,
            gravity: [0, .5, 0],
            colorGradients: [{
              timeFraction: 0,
              minColor: [DD, CD, iD, 1],
              maxColor: [Math.min(255, DD + 55), Math.min(255, CD + 55), Math.min(255, iD + 90), 1]
            }],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }],
            blendMode: 1
          })
        }
      }
      wy() {
        var DD;
        const CD = this.unlocked ? this.portal.unlockedBlock : null !== (DD = this.portal.lockedBlock) && void 0 !== DD ? DD : "Light Gray Portal",
          {
            min: cD,
            max: ID
          } = this.portal;
        for (let pD = cD[0]; pD <= ID[0]; pD++)
          for (let DD = cD[1]; DD <= ID[1]; DD++)
            for (let iD = cD[2]; iD <= ID[2]; iD++) this.presentation.hasChunk(pD, DD, iD) && this.presentation.hN(pD, DD, iD) !== CD && this.presentation.Hx(pD, DD, iD, CD)
      }
    }
    const SQ = {
        farming_1: {
          raises: DD => "NPC" === DD.type && "chef" === DD.variation,
          rise: .4
        },
        fishing_1: {
          raises: DD => "Draugr Warper" === DD.type,
          rise: .4
        }
      },
      BQ = (DD, CD, cD, iD) => {
        let {
          localPlayerId: fD
        } = iD;
        const bD = new Np({
          translate: (DD, CD) => (0, xp.y)(Yb.e.get().getCurrentLanguageCode(), DD, CD),
          translateWithIcons: (DD, CD) => (0, xp.s)(Yb.e.get().getCurrentLanguageCode(), DD, CD),
          setMenuOpen: DD => {
            DD ? (0, ED.s)() : (0, ED.e)()
          },
          dismissMenu: ED.i,
          publishSkills: DD => {
            eD.i.Uo(ic, DD, !0)
          },
          publishQuests: DD => {
            eD.i.Uo(wc, DD, !0)
          },
          publishQuestNotification: DD => {
            eD.i.Uo(Sc, DD, !0)
          },
          publishDungeons: DD => {
            eD.i.Uo(Mc, DD, !0)
          },
          publishCollections: DD => {
            eD.i.Uo(jc, DD, !0)
          },
          publishMap: DD => {
            eD.i.Uo(yD, DD, !0)
          },
          publishHud: DD => {
            eD.i.Uo(Zp, DD, !0)
          },
          publishPortalTransit: DD => {
            eD.i.Uo(Lc, DD, !0)
          },
          isLoadingScreenUp: () => mp.d.get("loadingOverlayVisible"),
          publishDailyReward: DD => {
            eD.i.Uo(Rc, DD, !0)
          },
          publishMailbox: DD => {
            eD.i.Uo(sc, DD, !0)
          },
          publishQuestGraph: DD => {
            eD.i.Uo(ec, DD, !0)
          },
          publishForge: DD => {
            eD.i.Uo(tI, DD, !0)
          },
          publishSmuggler: DD => {
            eD.i.Uo(vI, DD, !0)
          },
          publishKeepersChair: DD => {
            eD.i.Uo(UI, DD, !0)
          },
          publishReachLog: DD => {
            eD.i.Uo(qI, DD, !0)
          },
          publishLampLight: DD => {
            eD.i.Uo(jI, DD, !0)
          },
          publishMagmaward: DD => {
            eD.i.Uo(LI, DD, !0)
          },
          publishGlowtide: DD => {
            eD.i.Uo(GI, DD, !0)
          },
          publishGlowMeter: DD => {
            eD.i.Uo(kI, DD, !0)
          },
          publishHushWait: DD => {
            eD.i.Uo(YI, DD, !0)
          },
          publishPassage: DD => {
            eD.i.Uo(XI, DD, !0)
          },
          publishTideCharts: DD => {
            eD.i.Uo(sI, DD, !0)
          },
          publishRegulars: DD => {
            eD.i.Uo(Dp, DD, !0)
          },
          publishHiddenWaters: DD => {
            eD.i.Uo(ip, DD, !0)
          },
          publishDialogue: DD => {
            eD.i.Uo(bp, DD, !0)
          },
          publishAutographs: DD => {
            eD.i.Uo(yp, DD, !0)
          },
          onDailyRewardStarted: DD => {
            aD.playSound(fD, DD.day === xD ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (DD, CD) => {
            aD.playSound(fD, "exp_collect", .35, 1 + .6 * DD / (CD - 1)), eD.i.Uo(kc, DD === CD - 1)
          },
          onDailyRewardItemLanded: DD => {
            aD.playSound(fD, "pickUp", .6, 1 + .15 * DD)
          },
          onMailboxStarted: () => {
            aD.playSound(fD, "rpgMetalClick", .6, 1), aD.playSound(fD, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            aD.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: sb.j,
          requestTracking: DD => {
            aD.sendCommand(`quests track ${DD}`)
          },
          requestDungeonEnter: (DD, CD) => {
            aD.sendCommand(`dungeonEnter ${DD} ${CD}`)
          },
          requestQuestJump: DD => {
            aD.sendCommand(`${zD} jump ${DD}`)
          },
          requestQuestArrive: (DD, CD) => {
            const cD = `${zD} arrive ${DD}`;
            aD.sendCommand(CD ? `${cD} complete` : cD)
          },
          requestForge: DD => {
            let {
              blade: CD,
              guard: cD,
              handle: ID
            } = DD;
            aD.sendCommand(`forge ${CD} ${cD} ${ID}`)
          },
          requestDialogue: () => {
            aD.sendCommand("quests dialogue")
          },
          requestSmuggle: (DD, CD) => {
            aD.sendCommand(`smuggle ${DD} ${CD}`)
          },
          requestKeepersChairAim: DD => {
            aD.sendCommand(`keeperschair-aim ${DD}`)
          },
          requestReachLogOpen: () => {
            aD.sendCommand("reachlog-open")
          },
          requestLampLight: DD => {
            aD.sendCommand(`${DD}`)
          },
          requestTravel: DD => {
            aD.sendCommand(`map travel ${DD.kind} ${DD.id} ${DD.requestId}`)
          }
        });
        let QD, wD, SD, BD, MD, tD, ZD, XD, mD, nD, OD, UD, qD;
        const KD = new DQ;
        let aD, VD = null;
        const jD = SQ[null !== cD && void 0 !== cD ? cD : ""],
          GD = (DD, CD) => {
            null !== jD && void 0 !== jD && jD.raises(CD) && aD.setNametagOffset(DD, jD.rise)
          },
          dD = new db({
            getLocalHookPosition: () => {
              const DD = YD.getLocalHook();
              return null !== DD && aD.checkValid(DD) ? aD.FX(DD) : null
            },
            playParticles: DD => {
              aD.playParticleEffect(DD)
            },
            vibrate: DD => {
              uD.d.play("fishBite", DD)
            },
            now: () => performance.now()
          }),
          YD = new Tb({
            getLineOwner: DD => aD.checkValid(DD) ? aD.getLineOwner(DD) : null,
            isLocalPlayer: DD => aD.isLocalPlayer(DD),
            getHookPosition: DD => {
              const [CD, , cD] = aD.FX(DD);
              return [CD, cD]
            },
            isHushWaiting: () => {
              var DD;
              return "waiting" === (null === (DD = bD.hushWait.getSnapshot()) || void 0 === DD ? void 0 : DD.phase)
            },
            onCastLanded: (DD, CD) => {
              bD.tideCharts.castLanded(DD, CD)
            },
            onLocalHookSettled: () => {
              dD.onLocalHookSettled()
            },
            onLocalWaitEnded: DD => {
              dD.onLocalWaitEnded(DD)
            },
            now: () => performance.now()
          }),
          hD = new IQ({
            now: () => performance.now(),
            playerPosition: () => aD.checkValid(fD) ? aD.FX(fD) : null,
            play: (DD, CD, cD, ID, pD, iD) => aD.playSound(fD, DD, CD, 1, {
              xp: cD,
              maxHearDist: ID,
              refDistance: pD
            }, iD)
          }),
          rD = new Map;
        let AD;
        return {
          onCreate: DD => {
            if (aD = DD, VD = new iQ.SkyblockEntityFacing(DD, jD ? GD : null), bD.portalTransit.resumeArrival(null !== cD && void 0 !== cD ? cD : null), (null !== cD && void 0 !== cD ? cD : ID) === ID) {
              let DD = -1 / 0;
              AD = eD.i.subscribe("toggleMenu", (CD => {
                const cD = performance.now();
                "inventory|Workbench" !== CD || "cross_to_hub" !== bD.quests.getTrackedQuestId() || cD - DD < 1e4 || (DD = cD, aD.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [ID, pD] of Object.entries(null !== (CD = lD[null !== cD && void 0 !== cD ? cD : ""]) && void 0 !== CD ? CD : {})) {
              var CD;
              rD.set(ID, new wQ({
                hasChunk: (CD, cD, ID) => DD.isBlockInLoadedChunk(CD, cD, ID),
                hN: (CD, cD, ID) => DD.blockIdToBlockName(DD.getBlockId(CD, cD, ID)),
                Hx: (CD, cD, ID, pD) => {
                  DD.Hx(CD, cD, ID, pD)
                },
                playParticles: CD => {
                  DD.playParticleEffect(CD)
                }
              }, pD))
            }
            qD = (0, pQ.e)((DD => function(DD) {
              return Object.hasOwn(YC, DD) || DD.startsWith("npc_")
            }(DD) ? sC(DD) : null)), bD.resolveItemName = (CD, cD) => {
              const ID = DD.getItemStat(fD, CD, "displayName");
              return ID && "object" === typeof ID && "translationKey" in ID ? cD(ID.translationKey, (0, xp.o)(ID.params, Wb.c.shown)) : "string" === typeof ID ? cD(ID) : CD
            }, bD.quests.notifications.onShown = DD => {
              "quest" === DD ? aD.playSound(fD, "magicAccent1", 1, 1) : "skillLevel" === DD ? aD.playSound(fD, "magicAccent1", 1, .6) : "landmark" === DD ? aD.playSound(fD, "trumpetFlare", 1, .6) : "npcNote" === DD ? aD.playSound(fD, "magicAccent2", .8, 1.1) : "started" === DD ? aD.playSound(fD, (0, jb.c)("bigDrumSwish"), 1, 1) : aD.playSound(fD, (0, jb.c)("rpgHandleSmallLeather"), 1, 1)
            }, bD.forge.onPartSelected = () => {
              aD.playSound(fD, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, bD.forge.onForgeStarted = (CD, cD, ID) => Lb(DD, fD, CD, cD, ID), bD.smuggler.onBought = () => {
              aD.playSound(fD, (0, jb.c)("rpgHandleSmallLeather"), 1, 1), aD.playSound(fD, "chestOpen", .6, 1)
            }, bD.compass.register(new oD(bD.map, !0)), bD.compass.register(new oD(bD.map, !1)), bD.compass.register(new ND(bD.map)), bD.compass.register(new gD((() => bD.quests.getSnapshot().compassTarget)));
            for (const cD of ["enemy", "npc"]) bD.compass.register(new vD(bD.map, cD, (CD => DD.checkValid(CD) ? DD.FX(CD) : void 0), (CD => DD.isAlive(CD))))
          },
          onAfterRender: (DD, CD) => {
            const cD = aD.checkValid(fD) ? aD.FX(fD) : null;
            bD.navigation.afterRender(cD, performance.now(), CD), bD.glowtide.afterRender(cD, CD.cameraHeading), bD.tideCharts.afterRender(cD), YD.afterRender()
          },
          onClose: () => {
            var DD, CD, cD, ID, pD, iD, fD, yD, tD, oD, vD, ND, gD, PD, HD;
            AD && eD.i.unsubscribe(AD), null === (DD = qD) || void 0 === DD || DD(), KD.dispose(), hD.dispose(), null === (CD = VD) || void 0 === CD || CD.dispose(), YD.dispose(), bD.dispose(), null === (cD = QD) || void 0 === cD || cD(), null === (ID = wD) || void 0 === ID || ID(), null === (pD = SD) || void 0 === pD || pD(), null === (iD = BD) || void 0 === iD || iD(), null === (fD = MD) || void 0 === fD || fD(), null === (yD = ZD) || void 0 === yD || yD(), null === (tD = undefined) || void 0 === tD || tD(), null === (oD = XD) || void 0 === oD || oD(), null === (vD = mD) || void 0 === vD || vD(), null === (ND = nD) || void 0 === ND || ND(), null === (gD = OD) || void 0 === gD || gD(), null === (PD = undefined) || void 0 === PD || PD(), null === (HD = UD) || void 0 === HD || HD()
          },
          onPlayerChangeBlock: (DD, CD, ID, iD, QD, wD) => {
            if (DD === fD && "Air" === wD) {
              const DD = aD.getClientOption(fD, "creative");
              bD.skills.predictBlock([CD, ID, iD], QD, DD);
              const wD = function(DD, CD) {
                  if ("hub" === CD || "farming_1" === CD || "mining_1" === CD) return !RD.has(DD) || "hub" !== CD && "mining_1" !== CD ? Object.hasOwn(TD, DD) ? TD[DD] : void 0 : LD
                }(QD, cD),
                SD = ("hub" === cD || "mining_1" === cD) && (pD.qd.some((DD => DD === QD)) || Object.hasOwn(kD, QD) || "mining_1" === cD && "Block of Coal" === QD);
              DD || void 0 === wD && !SD || aD.Hx(CD, ID, iD, null !== wD && void 0 !== wD ? wD : LD)
            }
          },
          onPlayerAttackEntity: (DD, CD) => {
            if (DD !== fD || "Player" !== aD.getEntityType(CD)) return;
            const [cD, ID, pD] = aD.FX(CD);
            aD.burstParticlePreset("critical", [cD, ID + 1, pD], 10)
          },
          onChangeBlockFail: DD => {
            for (const {
                Ti: CD
              }
              of DD) bD.skills.rejectBlock(CD)
          },
          onReceivedMessageFromServer: (DD, CD) => {
            if ("skyblockGatedPortal" === DD) {
              var cD;
              const [DD, ID] = CD;
              return void(null === (cD = rD.get(DD)) || void 0 === cD || cD.kt(ID))
            }
            if ("skyblockDailyReward" === DD) return void bD.dailyReward.kt(CD);
            if ("skyblockMailbox" === DD) return void bD.mailbox.kt(CD);
            if ("skyblockPortalTransit" === DD) return void bD.portalTransit.kt(CD);
            if ("skyblockLoot" === DD) return void KD.kt(aD, CD);
            if ("skyblockLava" === DD) return void hD.kt(CD);
            if ("skyblockForge" === DD) return void bD.forge.kt(CD);
            if ("skyblockMagmaward" === DD) return void bD.magmaward.kt(CD);
            if ("skyblockGlowtide" === DD) return void bD.glowtide.kt(CD);
            if ("skyblockGlowMeter" === DD) return void bD.glowMeter.kt(CD);
            if ("skyblockHushWait" === DD) return void bD.hushWait.kt(CD);
            if ("skyblockPassage" === DD) {
              const DD = CD;
              return bD.passage.kt(DD), bD.reachLog.receivePassagePhase(DD.passagePhase), nD ??= (0, PD.x)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: bD.passage.show
              }), void bD.keepersChair.receivePassage({
                keepersChairPassagePhase: DD.passagePhase,
                keepersChairPassageNextPhase: DD.passageNextPhase,
                keepersChairPassageTurnsInMs: DD.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === DD) {
              const DD = CD;
              return bD.tideCharts.kt(DD), void(DD.tideCharts.length > 0 && (OD ??= (0, PD.x)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: bD.tideCharts.show
              })))
            }
            if (DD === WD.w) {
              var ID;
              const {
                hookId: DD,
                waiting: cD
              } = CD;
              return void YD.hookWaiting(DD, null !== (ID = null === cD || void 0 === cD ? void 0 : cD.remainingMs) && void 0 !== ID ? ID : null)
            }
            if ("skyblockBiteTell" === DD) return void dD.receiveTell(CD);
            if ("skyblockSmuggler" === DD) return void bD.smuggler.kt(CD);
            if ("skyblockKeepersChair" === DD) return bD.keepersChair.kt(CD), void bD.lampLight.setAtChair(bD.keepersChair.isAtChair());
            if ("skyblockLampLight" === DD) {
              const DD = CD;
              var pD;
              if (bD.lampLight.kt(DD), DD.lampLightReleasing) mD ??= (0, PD.x)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  bD.lampLight.setRelease(!1)
                }
              });
              else null === (pD = mD) || void 0 === pD || pD(), mD = void 0;
              return
            }
            if ("skyblockRegulars" === DD) return void bD.regulars.kt(CD);
            if ("skyblockHiddenWaters" === DD) return void bD.hiddenWaters.kt(CD);
            if ("skyblockReachLog" === DD) return bD.reachLog.kt(CD), void(XD ??= (0, PD.x)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: KI
              },
              onClick: bD.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === DD) {
              for (const [DD, cD, ID, pD] of CD) aD.Hx(DD, cD, ID, pD);
              return
            }
            if ("skyblockHud" === DD) bD.receiveHud(CD);
            else if ("skyblockMap" === DD) bD.map.kt(CD);
            else if (DD === sD.e) bD.skills.kt(CD);
            else if (DD === JD && "dialogue" === CD.kind) bD.dialogue.kt(CD);
            else if (DD === JD) bD.quests.kt(CD);
            else if ("skyblockDungeons" === DD) bD.dungeons.kt(CD);
            else if ("sbCollections" === DD) bD.collections.kt(CD);
            else if ("skyblockQuestGraph" === DD) bD.questGraph.kt(CD);
            else {
              if ("skyblockAutographs" !== DD) return;
              bD.autographs.kt(CD)
            }
            if (!wD && bD.map.getSnapshot().enabled) {
              const DD = (0, PD.x)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: bD.map.show
                }),
                CD = (0, ED.u)(bD.map.show);
              wD = () => {
                DD(), CD()
              }
            }!SD && bD.skills.getSnapshot().enabled && (SD = (0, PD.x)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: bD.skills.show
            })), !ZD && bD.collections.getSnapshot().enabled && (ZD = (0, PD.x)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: bD.collections.show
            })), !BD && bD.quests.getSnapshot().enabled && (BD = (0, PD.x)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: bD.quests.show
            })), !UD && bD.autographs.getSnapshot().enabled && (UD = (0, PD.x)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: bD.autographs.show
            }));
            const iD = bD.dungeons.getSnapshot().enabled;
            var fD;
            (SD || BD || iD) && tD !== iD && (tD = iD, null === (fD = MD) || void 0 === fD || fD(), MD = (0, PD.x)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: VC
              },
              disabled: !iD,
              panel: !0,
              onClick: bD.dungeons.show
            }));
            QD || (QD = (0, ED.v)((0, HD.createElement)(Vb, {
              controller: bD
            }), {
              content: (0, HD.createElement)(zb, {
                controller: bD
              }),
              onClose: bD.close
            }))
          },
          wy: () => {
            var DD;
            for (const CD of rD.values()) CD.wy();
            KD.wy(aD), hD.wy(), null === (DD = VD) || void 0 === DD || DD.wy(), bD.skills.wy(), bD.quests.wy(), bD.dailyReward.wy(), bD.mailbox.wy(), bD.map.wy()
          }
        }
      }
  },
  35788: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => ID
    });
    const ID = "skyblockSkills",
      pD = "skills_test_gym"
  },
  9065: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      g: () => fD
    });
    const ID = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function pD(DD) {
      let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof DD) {
        if (!Number.isFinite(DD)) return "0";
        if (Math.abs(DD) < 100) {
          const CD = DD < 0 ? "-" : "",
            cD = Math.abs(DD);
          return cD >= 10 ? `${CD}${cD.toFixed(1).replace(/\.0$/,"")}` : `${CD}${cD.toFixed(2).replace(/\.?0+$/,"")}`
        }
        CD = BigInt(Math.floor(DD))
      } else CD = DD;
      const pD = CD < 0n ? -CD : CD,
        iD = CD < 0n ? "-" : "",
        fD = pD.toString();
      if (fD.length <= cD) return `${iD}${fD}`;
      const bD = 3 * Math.floor((fD.length - 1) / 3);
      if (bD < 3) return `${iD}${fD}`;
      if (bD > 3 * ID.length) {
        const DD = fD[0],
          CD = fD.slice(1, 3).replace(/0+$/, "");
        return `${iD}${CD?`${DD}.${CD}`:DD}e${fD.length-1}`
      }
      const {
        threshold: QD,
        suffix: wD
      } = ID[ID.length - bD / 3], SD = pD / QD, BD = Number(1000n * (pD % QD) / QD), yD = Number(SD) + BD / 1e3;
      let MD;
      return MD = yD >= 100 ? Math.floor(yD).toString() : yD >= 10 ? yD.toFixed(1).replace(/\.0$/, "") : yD.toFixed(2).replace(/\.?0+$/, ""), `${iD}${MD}${wD}`
    }
    const iD = ID.map((DD => {
      let {
        threshold: CD,
        suffix: cD
      } = DD;
      return {
        threshold: Number(CD),
        suffix: cD
      }
    })).filter((DD => {
      let {
        threshold: CD
      } = DD;
      return Number.isFinite(CD)
    }));

    function fD(DD) {
      const CD = Math.abs(DD),
        cD = DD < 0 ? "-" : "";
      for (const {
          threshold: ID,
          suffix: pD
        }
        of iD)
        if (CD >= ID) {
          const DD = CD / ID;
          if (DD >= 1e3) return `${cD}${CD.toExponential(2).replace("e+","e")}`;
          let iD;
          return iD = DD >= 100 ? Math.floor(DD).toString() : DD >= 10 ? DD.toFixed(1).replace(/\.0$/, "") : DD.toFixed(2).replace(/\.?0+$/, ""), `${cD}${iD}${pD}`
        } return `${cD}${CD}`
    }
  },
  37926: (DD, CD, cD) => {
    var ID = {
      "./combat_1.png": 37933,
      "./dungeon_crumbling_crypt.png": 37937,
      "./dungeon_frozen_hollow.png": 37941,
      "./dungeon_wildwood_grove.png": 37950,
      "./dungeons.png": 37959,
      "./farming_1.png": 37964,
      "./fishing_1.png": 37966,
      "./hub.png": 37971,
      "./island.png": 37978,
      "./mining_1.png": 37984,
      "./mining_1_bridge.png": 37992,
      "./mining_1_gallery.png": 37996,
      "./mining_1_hollow.png": 37998,
      "./mining_1_village.png": 38e3
    };

    function pD(DD) {
      var CD = iD(DD);
      return cD(CD)
    }

    function iD(DD) {
      if (!cD.o(ID, DD)) {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }
      return ID[DD]
    }
    pD.keys = function() {
      return Object.keys(ID)
    }, pD.resolve = iD, DD.exports = pD, pD.id = 37926
  },
  37933: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37937: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37941: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37950: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37959: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37964: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37966: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37971: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37978: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37984: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37992: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37996: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37998: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38e3: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18288: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20299: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22679: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24196: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25869: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25882: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37912: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);