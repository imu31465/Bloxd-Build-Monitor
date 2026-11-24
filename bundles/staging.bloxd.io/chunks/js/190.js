export const id = 190;
export const ids = [51, 190];
export const modules = {
  38644: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => XS
    });
    const tS = new WeakMap;

    function bS(SS, HS) {
      return tS.set(SS, HS), SS
    }

    function XS(SS) {
      var HS;
      return null !== (HS = tS.get(SS)) && void 0 !== HS ? HS : null
    }
  },
  38555: (SS, HS, gS) => {
    function tS(SS, HS, gS) {
      var tS;
      const {
        width: bS,
        height: XS
      } = gS, xS = null !== (tS = SS.text) && void 0 !== tS ? tS : SS, NS = (xS.x / 100 - .5) * bS, qS = (xS.y / 100 - .5) * XS, uS = bS / 2 - HS.x;
      if (null !== SS.text && Math.abs(NS) <= uS && qS >= HS.top - XS / 2 && qS <= XS / 2 - HS.bottom) return {
        x: xS.x,
        y: xS.y
      };
      const IS = Math.min(0 === NS ? 1 / 0 : uS / Math.abs(NS), qS > 0 ? (XS / 2 - HS.bottom) / qS : qS < 0 ? (HS.top - XS / 2) / qS : 1 / 0);
      return !Number.isFinite(IS) || IS < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + NS * IS / bS * 100,
        y: 50 + qS * IS / XS * 100
      }
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  38564: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    const tS = 4,
      bS = 12e3,
      XS = 1e3;
    class xS {
      constructor() {
        let {
          limit: SS = tS,
          windowMs: HS = bS,
          spacingMs: gS = XS,
          now: xS = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = SS, this.windowMs = HS, this.spacingMs = gS, this.now = xS
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const SS of this.priority) SS.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const SS = this.now();
        this.sent.push(SS), this.lastSentAt = SS, this.schedule(), this.notify()
      }
      addPriority(SS) {
        return this.priority.add(SS), () => {
          this.priority.delete(SS)
        }
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const SS of this.priority)
          if (SS.waiting()) return !0;
        return !1
      }
      prune() {
        const SS = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= SS;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const SS = this.now(),
          HS = this.lastSentAt + this.spacingMs,
          gS = Math.min(HS > SS ? HS : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        gS !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, gS - SS)))
      }
      notify() {
        for (const SS of this.listeners) SS()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38549: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {
      constructor(SS, HS, gS) {
        this.cj = SS, this.beforeOpen = HS, this.afterClose = gS, this.open = !1, this.nK = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.nK && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(SS) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(SS)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.nK = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.nK || (this.snapshot = this.buildSnapshot(), this.cj(this.snapshot))
      }
    }
  },
  38650: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      SkyblockEntityFacing: () => NS,
      needsSkyblockEntityFacing: () => xS
    });
    var tS = gS(672),
      bS = gS(4356),
      XS = gS(38659);

    function xS(SS, HS) {
      if (SS.metaInfo === tS.d || "Iron Guardian" === SS.type || "Gold Guardian" === SS.type) return !0;
      if ("Pig" === SS.type) return "sitting" === SS.pose;
      if ("Person" !== SS.meshKind || void 0 === SS.meshOpts) return !1;
      let gS = null === HS || void 0 === HS ? void 0 : HS.get(SS.meshOpts);
      if (void 0 === gS) {
        var XS, xS;
        const tS = (0, bS.k)(SS);
        gS = !1, "pig_napoleon" === (null === tS || void 0 === tS || null === (XS = tS.opts.textures) || void 0 === XS ? void 0 : XS.head) ? gS = !0 : "npc_pig_head" === (null === tS || void 0 === tS || null === (xS = tS.opts.textures) || void 0 === xS ? void 0 : xS.head) && (gS = "sitting" === tS.opts.pose || "sitting"), HS && (HS.size >= 256 && HS.clear(), HS.set(SS.meshOpts, gS))
      }
      return "sitting" === gS ? "sitting" === SS.pose : gS
    }(0, XS.d)("skyblock", ((SS, HS) => {
      HS.setFacingTolerance(xS(SS) ? 0 : null)
    }));
    class NS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = SS, this.alsoVisit = HS, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = SS => {
          var HS;
          const gS = this.api.getEntityInfo(SS);
          gS && (xS(gS, this.meshFacingCache) && (this.api.setFacingTolerance(SS, 0), this.nextFacing.add(SS)), null === (HS = this.alsoVisit) || void 0 === HS || HS.call(this, SS, gS))
        }
      }
      mf() {
        const {
          api: SS
        } = this, HS = this.nextFacing;
        SS.forEachEntity(this.visit);
        for (const gS of this.facing) HS.has(gS) || SS.setFacingTolerance(gS, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = HS
      }
      dispose() {
        for (const SS of this.facing) this.api.setFacingTolerance(SS, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38546: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => Nq
    });
    const tS = "island";
    var bS = gS(387);
    const XS = (0, bS.ob)([0, 0, -1]),
      xS = [{
        name: "S",
        bearing: (0, bS.ob)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, bS.ob)([-1, 0, 0])
      }, {
        name: "N",
        bearing: XS
      }, {
        name: "W",
        bearing: (0, bS.ob)([1, 0, 0])
      }];

    function NS(SS, HS, gS) {
      return [100 * (gS.mapMaxX - SS) / (gS.mapMaxX - gS.mapMinX), 100 * (HS - gS.mapMinZ) / (gS.mapMaxZ - gS.mapMinZ)]
    }

    function qS(SS, HS, gS) {
      const bS = "local" === HS,
        XS = SS.background,
        xS = HS => XS ? NS(HS[0] - SS.mapOrigin[0], HS[2] - SS.mapOrigin[2], XS.bounds) : [50, 50],
        qS = (SS.insideDungeon ? [] : SS.landmarks).map((SS => {
          var HS, tS;
          return {
            id: SS.id,
            name: gS(SS.visited && SS.nameKey ? null !== (HS = SS.mapLabelKey) && void 0 !== HS ? HS : SS.nameKey : "skyblockGame:mapUnknown"),
            icon: SS.visited && null !== (tS = SS.icon) && void 0 !== tS ? tS : "unknown",
            visited: SS.visited,
            current: !1,
            position: xS(SS.position),
            travelKind: "landmark",
            travelId: SS.id
          }
        })),
        IS = SS.zones.map((HS => {
          var tS;
          return {
            id: HS.id,
            name: gS(HS.visited && HS.nameKey ? HS.nameKey : "skyblockGame:mapUnknown"),
            icon: HS.visited && null !== (tS = HS.icon) && void 0 !== tS ? tS : "unknown",
            visited: HS.visited,
            current: HS.id === SS.zoneId,
            position: HS.position,
            thumbnail: HS.visited ? HS.id : void 0,
            travelKind: "zone",
            travelId: HS.id
          }
        })),
        fS = SS.insideDungeon || !XS ? [] : SS.portals.map((SS => {
          var HS;
          return {
            id: SS.id,
            name: gS(null !== (HS = SS.nameKey) && void 0 !== HS ? HS : "skyblockGame:mapUnknown"),
            icon: SS.visited ? "dungeons" === SS.destination ? "portal_orange" : "portal" : "unknown",
            visited: SS.visited,
            current: !1,
            position: xS(SS.position),
            colour: SS.colour,
            travelKind: "zone",
            travelId: SS.destination
          }
        })),
        kS = bS ? qS : IS,
        aS = kS.filter((SS => SS.visited)).length,
        KS = XS ? (XS.bounds.mapMaxX - XS.bounds.mapMinX) / (XS.bounds.mapMaxZ - XS.bounds.mapMinZ) : 2,
        jS = XS ? JSON.stringify([XS.bounds, SS.mapOrigin]) : "";
      return {
        local: bS,
        points: kS,
        portals: bS ? fS : [],
        progress: kS.length ? gS("skyblockGame:mapDiscovered", {
          current: String(aS),
          total: String(kS.length)
        }) : null,
        percent: kS.length ? 100 * aS / kS.length : 0,
        canTravel: [...kS, ...bS ? fS : []].some((SS => SS.visited && !SS.current)),
        noLandmarks: bS && !SS.insideDungeon && 0 === qS.length,
        background: XS ? {
          imageKey: XS.imageKey,
          fallbackImageKey: SS.zoneId,
          geometryKey: jS,
          label: gS(XS.labelKey),
          colour: XS.backgroundColour,
          ratio: KS
        } : null,
        connections: uS(SS.zones),
        minimap: XS ? {
          imageKey: XS.imageKey,
          fallbackImageKey: SS.zoneId,
          geometryKey: jS,
          label: gS(XS.labelKey),
          colour: XS.backgroundColour,
          caption: gS(SS.zoneId === tS ? "skyblockGame:zoneIsland" : XS.labelKey),
          width: (XS.bounds.mapMaxX - XS.bounds.mapMinX) / XS.minimapSpan * 100 + "%",
          height: (XS.bounds.mapMaxZ - XS.bounds.mapMinZ) / XS.minimapSpan * 100 + "%",
          markers: [...qS, ...fS]
        } : null
      }
    }

    function uS(SS) {
      const HS = new Set;
      return SS.flatMap((gS => gS.connections.flatMap((tS => {
        const bS = SS.find((SS => SS.id === tS)),
          XS = [gS.id, tS].sort().join("|");
        return !bS || HS.has(XS) ? [] : (HS.add(XS), [{
          id: `${gS.id}-${tS}`,
          start: gS.position,
          end: bS.position,
          explored: gS.visited && bS.visited
        }])
      }))))
    }
    var IS = gS(38549);
    class fS extends IS.e {}
    const kS = "skyblockMapView";
    class aS extends fS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(SS, tS, bS), this.requestTravel = HS, this.translate = gS, this.now = XS, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = SS => {
          this.tab = SS, this.feedbackKey = "", this.emit()
        }, this.travel = (SS, HS) => {
          if (!this.map || this.pending || this.nK) return;
          const gS = ("zone" === SS ? this.map.zones : this.map.landmarks).find((SS => SS.id === HS));
          if (gS) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in gS && !gS.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (gS.visited)
              if ("zone" === SS && HS === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const gS = ++this.nextRequestId;
                this.pending = {
                  requestId: gS,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: SS,
                  id: HS,
                  requestId: gS
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
      setTranslator(SS) {
        this.translate = SS, this.emit()
      }
      wK(SS) {
        var HS;
        if (!this.nK)
          if ("entities" !== SS.kind)
            if ("open" !== SS.kind) {
              var gS, tS;
              if ("snapshot" === SS.kind)(null === (gS = SS.snapshot) || void 0 === gS ? void 0 : gS.zoneId) !== (null === (tS = this.map) || void 0 === tS ? void 0 : tS.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = SS.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === SS.kind) {
                var bS;
                SS.requestId === (null === (bS = this.pending) || void 0 === bS ? void 0 : bS.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (SS.requestId === (null === (HS = this.pending) || void 0 === HS ? void 0 : HS.requestId)) {
                var XS;
                this.pending = null, this.feedbackKey = null !== (XS = SS.errorKey) && void 0 !== XS ? XS : "", null === SS.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = SS.entities
      }
      mf() {
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
          presentation: this.map ? qS(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const KS = 67.5 * Math.PI / 180;

    function jS(SS, HS) {
      const gS = Math.abs(SS);
      if (gS > KS || HS.trackHalfWidth <= 0) return null;
      const tS = HS.trackHalfWidth,
        bS = HS.screenHalfWidth / (HS.tanHalfFovX * Math.max(.5, Math.cos(HS.pitch))),
        XS = Math.min(Math.atan(.6 * tS / bS), .75 * KS),
        xS = bS * Math.tan(XS);
      let NS;
      if (gS <= XS) NS = bS * Math.tan(gS);
      else {
        const SS = KS - XS,
          HS = Math.max(0, bS * SS / (Math.cos(XS) ** 2 * (tS - xS)) - 1),
          qS = (gS - XS) / SS;
        NS = xS + (tS - xS) * (1 + HS) * qS / (1 + HS * qS)
      }
      return 50 + Math.sign(SS) * NS * 50 / tS
    }
    class GS {
      constructor(SS, HS) {
        this.map = SS, this.visited = HS, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = HS ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const SS = this.map.getSnapshot().map;
        return !SS || SS.insideDungeon ? [] : SS.landmarks.filter((SS => SS.visited === this.visited)).map((SS => {
          var HS, gS;
          return {
            id: `landmark:${SS.id}`,
            position: SS.position,
            icon: null !== (HS = SS.icon) && void 0 !== HS ? HS : "unknown",
            nameKey: null !== (gS = SS.nameKey) && void 0 !== gS ? gS : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class CS {
      constructor(SS, HS, gS, tS) {
        this.map = SS, this.kind = HS, this.position = gS, this.alive = tS, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = HS, this.range = "enemy" === HS ? 48 : 64, this.limit = 12
      }
      lC(SS) {
        if ("enemy" !== this.kind || this.alive(SS.SX)) return this.position(SS.SX)
      }
      getPoints() {
        const SS = [];
        for (const tS of this.map.getEntities()) {
          if (tS.kind !== this.kind || "enemy" === this.kind && !this.alive(tS.compassEntityId)) continue;
          const bS = this.position(tS.compassEntityId);
          var HS, gS;
          if (bS) SS.push({
            id: `${this.kind}:${tS.compassEntityId}`,
            SX: tS.compassEntityId,
            kind: this.kind,
            icon: null !== (HS = tS.icon) && void 0 !== HS ? HS : tS.npcSkin ? `npc_${tS.npcSkin}` : this.kind,
            displayName: tS.displayName,
            position: bS,
            nameKey: null !== (gS = tS.nameKey) && void 0 !== gS ? gS : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return SS
      }
    }
    class nS {
      constructor(SS) {
        this.map = SS, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const SS = this.map.getSnapshot().map;
        return !SS || SS.insideDungeon ? [] : SS.portals.map((SS => {
          var HS;
          return {
            id: "portal:" + SS.id,
            kind: "portal",
            position: SS.position,
            nameKey: null !== (HS = SS.nameKey) && void 0 !== HS ? HS : "skyblockGame:compassUnvisitedZone",
            icon: SS.visited ? "dungeons" === SS.destination ? "portal_orange" : "portal" : "unknown",
            colour: SS.colour
          }
        }))
      }
    }
    class PS {
      constructor(SS) {
        this.target = SS, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const SS = this.target();
        return SS ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: SS.position,
          nameKey: SS.nameKey
        }] : []
      }
    }

    function QS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.position;
      const XS = tS[0] - HS[0],
        xS = tS[2] - HS[2];
      return {
        ...SS,
        position: tS,
        offset: bS.b.computeShortestRotation(gS, (0, bS.ob)([XS, 0, xS])),
        distance: Math.hypot(XS, tS[1] - HS[1], xS)
      }
    }
    let DS;

    function wS(SS, HS) {
      var gS;
      return (null === (gS = DS) || void 0 === gS ? void 0 : gS.locale) !== HS && (DS = {
        locale: HS,
        near: new Intl.NumberFormat(HS, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(HS, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (SS < 10 ? DS.near : DS.far).format(SS)
    }
    class hS {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(SS) {
        return this.providers.set(SS.id, SS), this.refreshAt = 0, () => {
          this.providers.get(SS.id) === SS && (this.providers.delete(SS.id), this.refreshAt = 0)
        }
      }
      frame(SS, HS, gS) {
        if (gS >= this.refreshAt) {
          this.refreshAt = gS + 200, this.candidates = [];
          for (const HS of this.providers.values()) {
            if (!HS.enabled) continue;
            const gS = HS.getPoints().map((HS => {
              const gS = HS.position;
              return {
                point: HS,
                distance: Math.hypot(gS[0] - SS[0], gS[1] - SS[1], gS[2] - SS[2])
              }
            })).filter((SS => SS.distance <= HS.range)).sort(((SS, HS) => SS.distance - HS.distance)).slice(0, HS.limit);
            for (const {
                point: SS
              }
              of gS) this.candidates.push({
              provider: HS,
              point: SS
            })
          }
        }
        const tS = [];
        for (const {
            point: bS,
            provider: XS
          }
          of this.candidates) {
          if (!XS.enabled) continue;
          const gS = XS.lC ? XS.lC(bS) : bS.position;
          if (gS) {
            const XS = QS(bS, SS, HS, gS);
            Math.abs(XS.offset) <= KS && tS.push(XS)
          }
        }
        return tS
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var ZS = gS(36632),
      JS = gS(64);
    const OS = [{
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
      dS = OS.length;

    function cS(SS) {
      return SS >= dS ? 1 : SS + 1
    }
    const vS = "skyblockQuests",
      ES = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      LS = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function YS(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const gS = Math.max(0, Math.floor(SS)),
        tS = Math.floor(gS % 1e3 / 100),
        bS = Math.floor(gS / 1e3),
        XS = bS % 60,
        xS = Math.floor(bS / 60),
        NS = xS % 60,
        qS = Math.floor(xS / 60),
        uS = SS => SS < 10 ? `0${SS}` : String(SS),
        IS = HS ? `.${tS}` : "";
      return qS > 0 ? `${qS}:${uS(NS)}:${uS(XS)}${IS}` : `${NS}:${uS(XS)}${IS}`
    }
    const AS = "devquests",
      yS = "none",
      VS = {
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
      iS = "Compressed Messy Stone",
      WS = {
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
      zS = ["Stone", "Diorite", "Andesite", "Granite"],
      US = new Set(zS),
      pS = (Object.keys(WS), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const sS = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function BS(SS, HS) {
      const gS = Math.floor(5 * SS / (2 * HS + 1));
      return Math.min(4, Math.max(0, gS))
    }
    var MS = gS(1327);
    var FS = gS(36381);
    var RS = gS(36624),
      TS = gS(31),
      oS = gS(9079);
    const lS = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      mS = 1e3;

    function eS(SS) {
      return Math.max(0, SS)
    }

    function rS(SS) {
      return 1 + .01 * eS(SS)
    }

    function SH(SS) {
      return 1 + .005 * eS(SS)
    }

    function HH(SS) {
      return 1 + .005 * eS(SS)
    }

    function gH(SS) {
      return .01 * eS(SS)
    }

    function tH(SS) {
      return 150 / (150 + eS(SS))
    }

    function bH(SS) {
      return 1 + .002 * eS(SS)
    }

    function XH(SS) {
      return Math.round(10 * SS) / 10
    }

    function xH(SS, HS) {
      switch (SS) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: XH(100 * (SH(HS) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: XH(100 * (rS(HS) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: XH(100 * (HH(HS) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: XH(100 * gH(HS))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: XH(100 * (1 - tH(HS)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: XH(100 * (bH(HS) - 1))
          }
      }
    }

    function NH(SS) {
      return "farming" === SS ? 200 : 100
    }

    function qH(SS, HS) {
      if (!Number.isSafeInteger(SS) || SS < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const gS = NH(HS),
        tS = SS => function(SS, HS) {
          return NH(SS) * HS * (HS + 1) / 2
        }(HS, SS);
      let bS = Math.min(mS, Math.floor((Math.sqrt(8 * SS / gS + 1) - 1) / 2));
      return bS < mS && tS(bS + 1) <= SS ? bS++ : tS(bS) > SS && bS--, {
        totalXp: SS,
        level: bS,
        xpIntoLevel: SS - tS(bS),
        xpForNextLevel: bS === mS ? null : gS * (bS + 1)
      }
    }
    const uH = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function IH(SS) {
      return uH.has(SS)
    }
    const fH = new Set(bS.ab);

    function kH(SS) {
      return fH.has(SS)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const aH = {
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
      KH = {
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
      jH = {
        ...KH,
        ...Object.fromEntries(Object.entries(pS).map((SS => {
          let [HS, gS] = SS;
          return [HS, 9 * KH[gS]]
        })))
      },
      GH = {
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
      CH = {
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
    const nH = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      PH = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function QH(SS) {
      return `rgb(${PH[SS].join(", ")})`
    }

    function DH(SS, HS, gS) {
      if (!gS) return SS(HS);
      const tS = {};
      for (const [bS, XS] of Object.entries(gS)) tS[bS] = "string" === typeof XS ? XS : SS(XS.translationKey);
      return SS(HS, tS)
    }
    class wH {
      constructor(SS, HS) {
        this.now = SS, this.getJournal = HS, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Ku = !1, this.onShown = () => {}
      }
      enqueue(SS) {
        const HS = hH(SS);
        if (HS) this.pending.push(SS);
        else {
          const HS = this.pending.findIndex(hH);
          this.pending.splice(-1 === HS ? this.pending.length : HS, 0, SS)
        }
        return (null === this.current || null !== this.followUp && !HS) && (this.advance(), !0)
      }
      setHeld(SS) {
        return this.Ku = SS, !SS && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      mf() {
        const SS = this.getJournal(),
          HS = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === HS ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === HS || void 0 === HS ? void 0 : HS.kind) && SS && SS.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === HS || void 0 === HS ? void 0 : HS.kind)) {
          const SS = this.findFollowUp(this.current);
          if ("step" !== (null === SS || void 0 === SS ? void 0 : SS.kind) || SS.questId !== HS.questId || SS.step.id !== HS.step.id) return this.showFollowUp(SS, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(SS, HS, gS) {
        var tS, bS, XS, xS;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, SS, gS);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, SS);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, SS, HS);
        const {
          questCompletionKind: NS,
          questCompletionNameKey: qS
        } = this.current, uS = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, IS = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, fS = "step" === (null === (tS = this.followUp) || void 0 === tS ? void 0 : tS.kind) ? this.followUp : null, kS = "explore" === (null === (bS = this.followUp) || void 0 === bS ? void 0 : bS.kind);
        let aS;
        return aS = kS ? SS("skyblockGame:questExploreTitle") : null !== fS ? "quest" === NS ? SS("skyblockGame:questNextQuestTitle", {
          quest: SS(fS.questNameKey)
        }) : SS("skyblockGame:questNextStepTitle") : SS("started" === NS ? "skyblockGame:questStartedTitle" : "quest" === NS ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? NS : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: aS,
          name: kS ? HS("skyblockGame:questExploreName") : null !== fS ? DH(HS, fS.step.nameKey, fS.step.nameParams) : DH(HS, qS, uS),
          description: kS ? HS("skyblockGame:questExploreDescription") : null === fS ? null : DH(HS, fS.step.descriptionKey, fS.step.descriptionParams),
          reward: null === this.followUp && IS > 0 ? HS("skyblockGame:questCoinRewardSuffix", {
            amount: IS.toLocaleString(gS)
          }) : null,
          iconItem: null !== (XS = null === fS || void 0 === fS ? void 0 : fS.step.questIconItem) && void 0 !== XS ? XS : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== fS && (null === (xS = this.getJournal()) || void 0 === xS ? void 0 : xS.trackedQuestId) === fS.questId ? fS.step.nameKey : null
        }
      }
      getSkillLevelView(SS, HS, gS) {
        let {
          skill: tS,
          beforeLevel: bS,
          level: XS
        } = SS;
        const xS = xH(tS, bS),
          NS = xH(tS, XS);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: HS(`skyblockGame:${tS}`),
          name: HS("skyblockGame:skillLevelUp", {
            to: XS.toLocaleString(gS)
          }),
          description: xS.percent === NS.percent ? null : HS(`${NS.translationKey}Change`, {
            before: xS.percent.toLocaleString(gS),
            after: NS.percent.toLocaleString(gS)
          }),
          reward: null,
          iconItem: nH[tS],
          accent: QH(tS),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(SS, HS) {
        let {
          landmarkNameKey: gS
        } = SS;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: HS("skyblockGame:landmarkDiscovered"),
          name: HS(gS),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(SS, HS, gS) {
        let {
          titleKey: tS,
          textKey: bS,
          params: XS = {},
          nameKeys: xS = {},
          iconItem: NS = null
        } = SS;
        const qS = {
          ...XS
        };
        for (const [uS, IS] of Object.entries(xS)) qS[uS] = HS(IS);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: HS(tS),
          name: gS(bS, qS),
          description: null,
          reward: null,
          iconItem: NS,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var SS;
        if (null !== this.followUp) return 5600;
        switch (null === (SS = this.current) || void 0 === SS ? void 0 : SS.questCompletionKind) {
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
      showFollowUp(SS, HS) {
        null === SS || this.Ku ? this.advance() : (this.followUp = SS, this.token++, this.shownAt = this.now(), this.expiresAt = null !== HS && void 0 !== HS ? HS : this.shownAt + this.durationMs())
      }
      findFollowUp(SS) {
        var HS;
        const gS = this.getJournal();
        if (!gS || this.hasPendingQuestPopup() || hH(SS)) return null;
        const tS = "started" === SS.questCompletionKind ? gS.active.some((HS => HS.id === SS.questCompletionQuestId)) : "quest" === SS.questCompletionKind ? gS.completed.some((HS => HS.id === SS.questCompletionQuestId)) : [...gS.active, ...gS.completed].some((HS => HS.id === SS.questCompletionQuestId && HS.subquests.some((HS => HS.id === SS.questCompletionStepId && "completed" === HS.status))));
        if (!tS) return null;
        if ("quest" === SS.questCompletionKind && 0 === gS.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const bS = gS.active.find((SS => SS.id === gS.trackedQuestId)),
          XS = null !== (HS = null === bS || void 0 === bS ? void 0 : bS.subquests.find((SS => "ready" === SS.status))) && void 0 !== HS ? HS : null === bS || void 0 === bS ? void 0 : bS.subquests.find((SS => "active" === SS.status));
        return XS ? {
          kind: "step",
          questId: bS.id,
          questNameKey: bS.nameKey,
          step: XS
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((SS => !hH(SS)))
      }
      advance() {
        var SS;
        this.current = this.Ku ? null : null !== (SS = this.pending.shift()) && void 0 !== SS ? SS : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function hH(SS) {
      return ZH(SS.questCompletionKind)
    }

    function ZH(SS) {
      return "skillLevel" === SS || "landmark" === SS || "npcNote" === SS
    }
    var JH = gS(38555);
    const OH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      dH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      cH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      vH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      EH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var LH = gS(38558);
    const YH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      AH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const yH = gS.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const VH = gS.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      iH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var WH = gS(18698),
      zH = gS(20777),
      UH = gS(23061),
      pH = gS(24565),
      sH = gS(26194);
    const BH = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: WH,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: zH,
      cow: EH,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: gS(26208),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: OH,
      fishing_1: OH,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: dH,
      guardian_iron: cH,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: UH,
      mines: pH,
      mining_1: pH,
      npc: vH,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: EH,
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
      npc_gold_guardian: dH,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: cH,
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
      npc_tentacle_guy: LH,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: YH,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: yH,
      quest_talk: VH,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: iH,
      watermelon: sH
    };

    function MH(SS, HS) {
      const gS = document.createElement("img");
      return gS.className = HS, gS.src = SS, gS.alt = "", gS.draggable = !1, gS
    }

    function FH(SS) {
      var HS;
      const gS = null !== (HS = BH[SS]) && void 0 !== HS ? HS : SS.startsWith("npc_") ? vH : iH;
      if ("portal" !== SS) return MH(gS, "SkyblockMapIcon");
      const tS = document.createElement("span");
      tS.className = "SkyblockMapIcon Portal";
      const bS = document.createElement("span");
      return bS.className = "SkyblockMapIconTint", bS.style.maskImage = bS.style.webkitMaskImage = `url("${AH}")`, tS.append(MH(gS, "SkyblockMapIconLayer"), bS, MH(AH, "SkyblockMapIconLayer SkyblockMapIconShade")), tS
    }
    var RH = gS(38534),
      TH = gS(4370);
    const oH = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function lH(SS) {
      const HS = new TH.i(SS);
      return {
        radius: 45,
        squareness: 3,
        wobbles: oH.map((SS => {
          let {
            lobes: gS,
            amount: tS
          } = SS;
          return {
            lobes: gS[Math.floor(HS.next() * gS.length)],
            amount: tS[0] + HS.next() * (tS[1] - tS[0]),
            phase: 2 * HS.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function mH(SS) {
      let {
        radius: HS,
        squareness: gS,
        wobbles: tS,
        samples: bS
      } = SS;
      const XS = [];
      for (let xS = 0; xS < bS; xS++) {
        const SS = 2 * Math.PI * xS / bS,
          NS = Math.cos(SS),
          qS = Math.sin(SS),
          uS = HS * (Math.abs(NS) ** gS + Math.abs(qS) ** gS) ** (-1 / gS) * tS.reduce(((HS, gS) => {
            let {
              lobes: tS,
              amount: bS,
              phase: XS
            } = gS;
            return HS + bS * Math.sin(tS * SS + XS)
          }), 1);
        XS.push(`${(50+uS*NS).toFixed(2)} ${(50+uS*qS).toFixed(2)}`)
      }
      return `M${XS.join("L")}Z`
    }
    const eH = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class rH {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.nK = !1, this.mountCompass = SS => {
          var HS;
          if (null === (HS = this.stopLayout) || void 0 === HS || HS.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !SS || this.nK) return;
          const gS = SS.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: SS,
            track: gS,
            label: SS.querySelector(".SkyblockCompassLabel")
          }, gS.replaceChildren();
          for (let bS = 0; bS < 4; bS++) {
            const SS = document.createElement("span");
            SS.className = "SkyblockCompassCardinal", gS.appendChild(SS), this.cardinals.push(SS)
          }
          const tS = (0, RH.d)(eH, [SS], this.layout);
          this.stopLayout = () => {
            tS(), gS.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = SS => {
          this.terrain = this.nK ? null : SS, this.render(this.frame)
        }, this.mountMinimapSearchArea = SS => {
          this.mountSearchArea("minimap", SS)
        }, this.mountMapSearchArea = SS => {
          this.mountSearchArea("map", SS)
        }, this.mountPlayer = SS => {
          this.player = this.nK ? null : SS, this.render(this.frame)
        }, this.mountWaypoint = SS => {
          var HS, gS;
          if (null === (HS = this.stopWaypoint) || void 0 === HS || HS.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !SS || this.nK) return;
          const tS = SS.querySelector(".SkyblockQuestWaypointMarker");
          tS.replaceChildren(FH("quest")), this.markerIcon = "quest", this.waypoint = {
            root: SS,
            marker: tS,
            clip: SS.querySelector(".SkyblockQuestWaypointTextClip"),
            text: SS.querySelector(".SkyblockQuestWaypointText"),
            label: SS.querySelector(".SkyblockQuestWaypointLabel"),
            distance: SS.querySelector(".SkyblockQuestWaypointDistance"),
            hint: SS.querySelector(".SkyblockQuestWaypointHint")
          };
          const bS = () => {
              this.waypointMarkerSize = {
                width: tS.offsetWidth,
                height: tS.offsetHeight
              }, this.waypointInset = {
                x: tS.offsetWidth / 2 + 8,
                top: tS.offsetHeight + 8,
                bottom: 8
              }
            },
            XS = new ResizeObserver((() => {
              bS(), this.render(this.frame)
            }));
          XS.observe(tS, {
            box: "border-box"
          });
          const xS = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", xS), null === (gS = window.visualViewport) || void 0 === gS || gS.addEventListener("resize", xS), this.stopWaypoint = () => {
            var SS;
            XS.disconnect(), window.removeEventListener("resize", xS), null === (SS = window.visualViewport) || void 0 === SS || SS.removeEventListener("resize", xS)
          }, xS(), bS(), this.render(this.frame)
        }, this.mountWaypointOrigin = SS => {
          var HS;
          if (null === (HS = this.stopWaypointOrigin) || void 0 === HS || HS.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = SS && !this.nK ? Number(SS.dataset.notificationToken) : null, SS && !this.nK && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const HS = {
              nameKey: SS.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = HS;
            const gS = () => {
                const gS = SS.getBoundingClientRect();
                HS.x = (gS.left + gS.width / 2) / window.innerWidth * 100, HS.y = (gS.top + gS.height / 2) / window.innerHeight * 100
              },
              tS = new ResizeObserver(gS);
            tS.observe(SS.parentElement), tS.observe(SS), window.addEventListener("resize", gS), this.stopWaypointOrigin = () => {
              tS.disconnect(), window.removeEventListener("resize", gS)
            }, gS()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const SS = this.compass.root,
            HS = getComputedStyle(SS),
            gS = getComputedStyle(document.documentElement),
            tS = parseFloat(gS.fontSize),
            bS = parseFloat(HS.getPropertyValue("--compass-icon-size")) * tS,
            XS = "1" === HS.getPropertyValue("--compass-fit-top").trim(),
            xS = XS ? 1 : 8,
            NS = Array.from(document.querySelectorAll(eH), (SS => {
              var HS;
              return (null !== (HS = SS.querySelector(".MiddleTextTop")) && void 0 !== HS ? HS : SS).getBoundingClientRect()
            })).filter((SS => SS.width > 0 && SS.height > 0));
          let qS = (parseFloat(gS.getPropertyValue("--notchTop")) || 0) + xS,
            uS = "";
          if (XS) {
            const HS = window.innerWidth / 2,
              gS = SS.getBoundingClientRect().height,
              XS = [qS, ...NS.map((SS => Math.max(qS, SS.bottom + xS)))].sort(((SS, HS) => SS - HS));
            for (const SS of XS) {
              let XS = HS - 8;
              for (const tS of NS) tS.bottom + xS <= SS || tS.top >= SS + gS + xS || (XS = Math.min(XS, tS.right <= HS ? HS - tS.right - 8 : tS.left - HS - 8));
              const IS = 2 * XS - bS;
              if (IS >= 16 * tS) {
                uS = `${IS}px`, qS = SS;
                break
              }
            }
          }
          SS.style.maxWidth !== uS && (SS.style.maxWidth = uS);
          const IS = SS.getBoundingClientRect(),
            fS = this.compassSize.trackHalfWidth;
          if (IS.width > 0) {
            const SS = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: SS.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * bS / SS.width
          }
          if (!uS)
            for (const kS of NS) kS.right > IS.left - 8 && kS.left < IS.right + 8 && (qS = Math.max(qS, kS.bottom + xS));
          SS.style.top = `${qS}px`, this.compassSize.trackHalfWidth !== fS && this.render(this.frame)
        }
      }
      mountSearchArea(SS, HS) {
        this.searchAreas[SS] = this.nK ? null : HS, this.render(this.frame)
      }
      render(SS) {
        if (this.nK) return;
        if (this.frame = SS, this.compass && (Sg(this.compass.root, !SS), SS)) {
          const HS = this.compassSize.trackHalfWidth / 50;
          SS.compass.cardinals.forEach(((SS, gS) => {
            const tS = this.cardinals[gS];
            tS.textContent !== SS.name && (tS.textContent = SS.name), Sg(tS, SS.hidden), tS.style.translate = SS.left * HS + "px"
          }));
          const gS = new Set;
          SS.compass.markers.forEach(((tS, bS) => {
            var XS;
            gS.add(tS.id);
            let xS = this.markers.get(tS.id);
            xS || (xS = document.createElement("span"), xS.className = "SkyblockCompassMarker", this.markers.set(tS.id, xS), this.compass.track.appendChild(xS)), xS.dataset.icon !== tS.icon && (xS.dataset.icon = tS.icon, xS.replaceChildren(FH(tS.icon))), xS.style.color = null !== (XS = tS.colour) && void 0 !== XS ? XS : "", xS.style.translate = tS.left * HS + "px", xS.style.zIndex = String(SS.compass.markers.length - bS), xS.title !== tS.name && (xS.title = tS.name)
          }));
          for (const [SS, tS] of this.markers) gS.has(SS) || (tS.remove(), this.markers.delete(SS));
          this.compass.label.textContent !== SS.compass.label && (this.compass.label.textContent = SS.compass.label)
        }
        this.terrain && (Sg(this.terrain, !(null !== SS && void 0 !== SS && SS.minimap)), null !== SS && void 0 !== SS && SS.minimap && (this.terrain.style.transform = SS.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", SS.minimap.iconRotation)));
        const HS = null === SS || void 0 === SS ? void 0 : SS.searchArea;
        for (const gS of [this.searchAreas.minimap, this.searchAreas.map])
          if (gS && (Sg(gS, !HS), HS)) {
            if (this.searchAreaPath.seed !== HS.shapeSeed && (this.searchAreaPath = {
                seed: HS.shapeSeed,
                d: mH(lH(HS.shapeSeed))
              }), gS.dataset.shapeSeed !== HS.shapeSeed) {
              gS.dataset.shapeSeed = HS.shapeSeed;
              for (const SS of gS.querySelectorAll("path")) SS.setAttribute("d", this.searchAreaPath.d)
            }
            gS.style.left = `${HS.left}%`, gS.style.top = `${HS.top}%`, gS.style.width = `${HS.width}%`, gS.style.height = `${HS.height}%`
          } if (this.player && (Sg(this.player, !(null !== SS && void 0 !== SS && SS.player) || SS.player.hidden), null !== SS && void 0 !== SS && SS.player && (this.player.style.left = `${SS.player.left}%`, this.player.style.top = `${SS.player.top}%`, this.player.style.setProperty("--map-player-rotation", SS.player.rotation))), this.waypoint) {
          const {
            root: HS,
            marker: gS,
            clip: tS,
            text: bS,
            label: XS,
            distance: xS,
            hint: NS
          } = this.waypoint, qS = !(null !== SS && void 0 !== SS && SS.waypoint) || null !== SS.waypoint.popupToken && SS.waypoint.popupToken !== this.waypointOriginToken;
          Sg(HS, qS);
          let uS = 1;
          const IS = this.waypointLaunch;
          if (!qS && IS && SS.waypoint.nameKey === IS.nameKey) {
            const SS = performance.now();
            IS.startedAt ??= SS, uS = Math.min(1, Math.max(0, (SS - IS.startedAt - 450) / 1e3)), gS.style.opacity = String(Math.min(1, (SS - IS.startedAt) / 150)), 1 === uS && (this.waypointLaunch = null)
          } else gS.style.opacity = "", IS && null !== IS.startedAt && (this.waypointLaunch = null);
          if (HS.classList.toggle("Launching", uS < 1), null !== SS && void 0 !== SS && SS.waypoint) {
            const HS = this.waypointInset,
              qS = "quest_talk" === SS.waypoint.markerIcon ? function(SS, HS, gS) {
                if (!SS.text || null === SS.blockHeight || 0 === SS.nearness) return SS;
                const tS = SS.blockHeight / 100 * gS.height,
                  bS = -SS.nearness * (Hg * tS + HS.width / 2),
                  XS = SS.nearness * (gg * tS + HS.height / 2);
                return {
                  ...SS,
                  text: {
                    x: SS.text.x + bS / gS.width * 100,
                    y: SS.text.y + XS / gS.height * 100
                  }
                }
              }(SS.waypoint, this.waypointMarkerSize, this.viewport) : SS.waypoint,
              fS = (0, JH.e)(qS, HS, this.viewport),
              kS = uS * uS * (3 - 2 * uS),
              aS = uS < 1 ? IS.x + (fS.x - IS.x) * kS : fS.x,
              KS = uS < 1 ? IS.y + (fS.y - IS.y) * kS : fS.y;
            gS.style.translate = `${aS}vw ${KS}vh`, tS.style.clipPath = `inset(${HS.top}px ${HS.x}px ${HS.bottom}px)`, Sg(bS, uS < 1 || !SS.waypoint.text), bS.style.opacity = String(1 - SS.waypoint.nearness), SS.waypoint.text && (bS.style.translate = `${SS.waypoint.text.x}vw ${SS.waypoint.text.y}vh`), XS.textContent !== SS.waypoint.name && (XS.textContent = SS.waypoint.name), this.markerIcon !== SS.waypoint.markerIcon && (this.markerIcon = SS.waypoint.markerIcon, gS.replaceChildren(FH(this.markerIcon))), xS.textContent !== SS.waypoint.distance && (xS.textContent = SS.waypoint.distance), Sg(NS, null === SS.waypoint.hint), null !== SS.waypoint.hint && NS.textContent !== SS.waypoint.hint && (NS.textContent = SS.waypoint.hint)
          }
        }
      }
      dispose() {
        var SS, HS;
        this.mountWaypointOrigin(null), this.render(null), null === (SS = this.stopLayout) || void 0 === SS || SS.call(this), this.stopLayout = null, null === (HS = this.stopWaypoint) || void 0 === HS || HS.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.nK = !0
      }
    }

    function Sg(SS, HS) {
      SS.hidden !== HS && (SS.hidden = HS)
    }
    const Hg = .55,
      gg = .6;
    const tg = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class bg {
      constructor(SS, HS, gS, tS) {
        this.map = SS, this.quests = HS, this.compass = gS, this.display = new rH, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.nK = !1, this.snapshot = null, this.texts = new Map, this.translate = tS
      }
      setTranslator(SS, HS) {
        this.translate = SS, this.locale = HS, this.metresFormat = new Intl.NumberFormat(HS), this.texts.clear()
      }
      translateCached(SS, HS) {
        const gS = void 0 === HS ? SS : `${SS} ${HS}`;
        let tS = this.texts.get(gS);
        return void 0 === tS && (this.texts.size >= 500 && this.texts.clear(), tS = this.translate(SS, void 0 === HS ? void 0 : {
          distance: HS
        }), this.texts.set(gS, tS)), tS
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(SS, HS, gS) {
        if (this.nK) return;
        if (!SS) return this.snapshot = null, void this.display.render(null);
        const tS = this.map.getSnapshot().map,
          qS = gS.cameraHeading,
          uS = {
            ...this.display.compassSize,
            tanHalfFovX: gS.tanHalfFovX,
            pitch: gS.cameraPitch
          },
          IS = [];
        if (tS)
          for (const bS of this.compass.frame(SS, qS, HS)) {
            const SS = jS(bS.offset, uS);
            null !== SS && IS.push({
              ...bS,
              left: SS
            })
          }
        const fS = function(SS, HS) {
            const gS = [],
              tS = SS => "quest" === SS.kind ? SS.distance - 1 : SS.distance,
              bS = [...SS].sort(((SS, HS) => tS(SS) - tS(HS) || SS.id.localeCompare(HS.id)));
            for (const XS of bS) {
              let SS = !1;
              if ("quest" !== XS.kind)
                for (const tS of gS)
                  if (Math.abs(tS.left - XS.left) < HS) {
                    SS = !0;
                    break
                  } SS || gS.push(XS)
            }
            return gS
          }(IS, this.display.compassSpacing),
          kS = function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              gS = null;
            for (const tS of SS) Math.abs(tS.offset) <= HS && (!gS || tS.distance < gS.distance || tS.distance === gS.distance && Math.abs(tS.offset) < Math.abs(gS.offset)) && (gS = tS);
            return gS
          }(fS),
          aS = SS => {
            var HS;
            return null !== (HS = SS.displayName) && void 0 !== HS ? HS : this.translateCached(SS.nameKey)
          },
          KS = {
            compass: {
              markers: fS.map((SS => ({
                id: SS.id,
                icon: SS.icon,
                colour: SS.colour,
                name: aS(SS),
                left: SS.left
              }))),
              cardinals: xS.map((SS => {
                let {
                  name: HS,
                  bearing: gS
                } = SS;
                const tS = jS(bS.b.computeShortestRotation(qS, gS), uS);
                return {
                  name: HS,
                  left: null !== tS && void 0 !== tS ? tS : 0,
                  hidden: null === tS
                }
              })),
              label: kS ? `${aS(kS)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",wS(kS.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== tS && void 0 !== tS && tS.background) {
          const HS = SS[0] - tS.mapOrigin[0],
            gS = SS[2] - tS.mapOrigin[2],
            {
              rotation: bS,
              transform: xS
            } = function(SS, HS, gS, tS) {
              const [bS, xS] = NS(SS, HS, tS), qS = XS - gS;
              return {
                rotation: qS,
                transform: `rotate(${qS}rad) translate(-${bS}%, -${xS}%)`
              }
            }(HS, gS, qS, tS.background.bounds);
          KS.minimap = {
            transform: xS,
            iconRotation: -bS + "rad"
          };
          const [uS, IS] = NS(HS, gS, tS.background.bounds);
          KS.player = {
            left: uS,
            top: IS,
            hidden: uS < 0 || IS < 0 || uS > 100 || IS > 100,
            rotation: -bS + "rad"
          }
        }
        const {
          waypoint: GS
        } = this.quests.getSnapshot();
        if ("search" === (null === GS || void 0 === GS ? void 0 : GS.questMarkerIcon) && null !== tS && void 0 !== tS && tS.background) {
          const {
            bounds: SS
          } = tS.background, [HS, gS] = NS(GS.position[0] - tS.mapOrigin[0], GS.position[2] - tS.mapOrigin[2], SS);
          KS.searchArea = {
            left: HS,
            top: gS,
            width: 6400 / (SS.mapMaxX - SS.mapMinX),
            height: 6400 / (SS.mapMaxZ - SS.mapMinZ),
            shapeSeed: GS.nameKey
          }
        }
        const CS = this.quests.getNotificationSnapshot(),
          nS = "completion" === (null === CS || void 0 === CS ? void 0 : CS.phase) && !ZH(CS.kind);
        if (GS && !nS) {
          const HS = Math.hypot(...GS.position.map(((HS, gS) => HS - SS[gS]))),
            tS = Math.round(HS),
            bS = "talk" === GS.questMarkerIcon ? Math.min(1, Math.max(0, (10 - HS) / 5)) : 0,
            XS = gS.projectWorldPosToViewport(GS.position),
            xS = XS && gS.projectWorldPosToViewport([GS.position[0], GS.position[1] - 1, GS.position[2]]);
          KS.waypoint = {
            ...gS.projectWorldPosToScreenPos(GS.position),
            text: XS,
            nearness: bS * bS * (3 - 2 * bS),
            blockHeight: XS && xS ? xS.y - XS.y : null,
            name: this.translateCached(GS.nameKey),
            nameKey: GS.nameKey,
            markerIcon: GS.questMarkerIcon ? tg[GS.questMarkerIcon] : "quest",
            popupToken: (null === CS || void 0 === CS ? void 0 : CS.waypointNameKey) === GS.nameKey ? CS.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(tS)),
            hint: "search" === GS.questMarkerIcon && Math.hypot(GS.position[0] - SS[0], GS.position[2] - SS[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = KS, this.display.render(KS)
      }
      dispose() {
        this.nK = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Xg = "skyblockSkillsView";
    class xg extends fS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          gS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS => SS,
          tS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          bS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : SS => SS;
        super(SS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = HS, this.translate = gS, this.locale = tS, this.itemName = bS, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = SS => {
          this.selected = SS, this.emit()
        }
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, this.locale = HS, this.itemName = gS, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(SS) {
        let HS = this.skillText.get(SS);
        return HS || (HS = {
          label: this.translate(`skyblockGame:${SS}`),
          description: this.translate(`skyblockGame:${SS}Description`)
        }, this.skillText.set(SS, HS)), HS
      }
      sources(SS) {
        if ("mining" === SS || "fishing" === SS) return this.buildSources(SS);
        let HS = this.sourceText.get(SS);
        return HS || (HS = this.buildSources(SS), this.sourceText.set(SS, HS)), HS
      }
      buildSources(SS) {
        const HS = this.translate;
        return "exploration" === SS ? [HS("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), HS("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === SS ? [HS("skyblockGame:logSource", {
          xp: this.number(aH["Maple Log"])
        })] : "combat" === SS ? [HS("skyblockGame:creatureKillSource"), HS("skyblockGame:noEnvironmentalXp")] : "farming" === SS ? [HS("skyblockGame:cropSource", {
          xp: this.number(GH["Wheat|FreshlyGrown"])
        }), HS("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), HS("skyblockGame:noYoungCropXp")] : Object.entries("mining" === SS ? jH : CH).map((SS => {
          let [gS, tS] = SS;
          return HS("skyblockGame:itemXpSource", {
            item: this.itemName(gS),
            xp: this.number(tS)
          })
        }))
      }
      number(SS) {
        return SS.toLocaleString(this.locale)
      }
      benefit(SS, HS) {
        const gS = xH(SS, HS);
        return this.translate(gS.translationKey, {
          bonus: this.number(gS.percent)
        })
      }
      wK(SS) {
        if (!this.nK) {
          if ("snapshot" === SS.kind) this.progress = SS.progress, this.pending.clear(), this.recent = null;
          else if ("award" === SS.kind && this.progress) {
            const {
              award: HS
            } = SS;
            this.progress = {
              ...this.progress,
              [HS.skill]: HS.after
            };
            for (const [SS, tS] of this.pending) tS.skill === HS.skill && this.pending.delete(SS);
            const gS = HS.after.level > HS.before.level;
            this.recordGain(HS.skill, HS.amount, gS ? ++this.nextLevelUpToken : null), gS && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: HS.skill,
              beforeLevel: HS.before.level,
              level: HS.after.level
            })
          } else {
            if ("rejectBlock" === SS.kind) return void this.rejectBlock(SS.position);
            if ("open" === SS.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(SS, HS, gS) {
        if (!this.progress || this.nK || gS) return;
        const tS = function(SS, HS) {
          const gS = SS.split("|")[0];
          return "Air" === HS || HS === `Barkless ${SS}` ? Object.hasOwn(aH, gS) ? {
            skill: "foraging",
            amount: aH[gS]
          } : "Air" !== HS ? null : Object.hasOwn(jH, SS) ? {
            skill: "mining",
            amount: jH[SS]
          } : IH(SS) ? {
            skill: "farming",
            amount: 10
          } : kH(SS) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(GH, SS) ? {
            skill: "farming",
            amount: GH[SS]
          } : Object.hasOwn(WS, SS) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(HS, "Air");
        if (!tS) return;
        const bS = SS.join(",");
        if (this.pending.has(bS)) return;
        const XS = this.predictedProgress(tS.skill).totalXp + tS.amount;
        Number.isSafeInteger(XS) && (this.pending.set(bS, {
          ...tS,
          expires: this.now() + 2e3
        }), this.recordGain(tS.skill, 0), this.emit())
      }
      rejectBlock(SS) {
        this.pending.delete(SS.join(",")) && this.emit()
      }
      mf() {
        if (this.nK) return;
        let SS = !1;
        for (const [HS, gS] of this.pending) gS.expires <= this.now() && (this.pending.delete(HS), SS = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, SS = !0), SS && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(SS, HS) {
        var gS, tS;
        let bS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const XS = (null === (gS = this.recent) || void 0 === gS ? void 0 : gS.skill) === SS && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          xS = (null === (tS = this.recent) || void 0 === tS ? void 0 : tS.skill) === SS && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: SS,
          confirmed: XS + HS,
          expires: this.now() + 3e3,
          levelUpToken: null !== bS && void 0 !== bS ? bS : xS
        }
      }
      pendingXp(SS) {
        let HS = 0;
        for (const gS of this.pending.values()) gS.skill === SS && (HS += gS.amount);
        return HS
      }
      predictedProgress(SS) {
        const HS = this.progress[SS],
          gS = this.pendingXp(SS);
        return gS ? qH(HS.totalXp + gS, SS) : HS
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var SS, HS, gS;
        const tS = this.progress ? lS.map((SS => {
            const HS = this.predictedProgress(SS);
            return {
              ...this.text(SS),
              icon: nH[SS],
              benefit: this.benefit(SS, HS.level),
              sources: this.sources(SS),
              id: SS,
              selected: SS === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(HS.level)
              }),
              xp: null === HS.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(HS.xpIntoLevel),
                target: this.number(HS.xpForNextLevel)
              }),
              percent: null === HS.xpForNextLevel ? 100 : Math.min(100, HS.xpIntoLevel / HS.xpForNextLevel * 100)
            }
          })) : [],
          bS = tS.find((SS => {
            var HS;
            return SS.id === (null === (HS = this.recent) || void 0 === HS ? void 0 : HS.skill)
          })),
          XS = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: tS,
          detail: null !== (SS = tS.find((SS => SS.selected))) && void 0 !== SS ? SS : null,
          overallLevel: this.progress ? lS.reduce(((SS, HS) => SS + this.predictedProgress(HS).level), 0) : null,
          hud: bS && XS > 0 ? {
            skill: bS,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(XS)
            }),
            levelUpToken: null !== (HS = null === (gS = this.recent) || void 0 === gS ? void 0 : gS.levelUpToken) && void 0 !== HS ? HS : null,
            colour: QH(bS.id)
          } : null
        }
      }
    }
    const Ng = Math.max(1600, 600, 950) + 400,
      qg = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      ug = "skyblockQuestsView",
      Ig = "skyblockQuestNotificationView";
    class fg extends fS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          xS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(SS, tS, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = HS, this.translate = gS, this.now = bS, this.locale = XS, this.publishNotification = xS, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var SS, HS;
          this.selected = null !== (SS = null === (HS = this.authoritative) || void 0 === HS ? void 0 : HS.trackedQuestId) && void 0 !== SS ? SS : null, this.show()
        }, this.select = SS => {
          this.selected = SS, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const SS = this.snapshot.detail;
          !this.nK && null !== SS && void 0 !== SS && SS.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(SS.id), this.emit())
        }, this.viewDialogue = () => {
          const SS = this.snapshot.detail;
          var HS;
          SS && (null === (HS = this.onViewDialogue) || void 0 === HS || HS.call(this, SS.id))
        }, this.notifications = new wH(bS, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var SS, HS;
        return null !== (SS = null === (HS = this.authoritative) || void 0 === HS ? void 0 : HS.trackedQuestId) && void 0 !== SS ? SS : null
      }
      notify(SS) {
        !this.nK && this.notifications.enqueue(SS) && this.emitNotification()
      }
      setNotificationsHeld(SS) {
        (this.notifications.setHeld(SS) || SS) && this.emitNotification()
      }
      mf() {
        var SS, HS;
        if (this.nK) return;
        this.notifications.mf() && this.emitNotification();
        let gS = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, gS = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, gS = !0);
        const tS = kg(this.authoritative);
        null !== tS && void 0 !== tS && null !== (SS = tS.questClock) && void 0 !== SS && SS.running && this.clockText(tS) !== (null === (HS = this.snapshot.tracked) || void 0 === HS ? void 0 : HS.clock) && (gS = !0), gS && this.emit()
      }
      setTranslator(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = SS, this.locale = HS, this.emitNotification(), this.emit()
      }
      wK(SS) {
        if (!this.nK)
          if ("completion" === SS.kind) this.notify(SS.questCompletion);
          else if ("landmark" === SS.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: SS.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === SS.kind) {
          var HS, gS, tS;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: SS.npcNoteTitleKey,
            textKey: SS.npcNoteTextKey,
            params: null !== (HS = SS.npcNoteParams) && void 0 !== HS ? HS : {},
            nameKeys: null !== (gS = SS.npcNoteNameKeys) && void 0 !== gS ? gS : {},
            iconItem: null !== (tS = SS.npcNoteIconItem) && void 0 !== tS ? tS : null
          })
        } else if ("open" === SS.kind) this.show();
        else if ("guidance" === SS.kind) this.waypoint = SS.waypoint, this.compassTarget = SS.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === SS.kind) {
          this.authoritative = SS.snapshot, this.notifications.mf() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const HS = this.trackedStepPulse;
          this.updateTrackedStepPulse(SS.snapshot), this.emit(), this.trackedStepPulse > HS && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.nK || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var SS;
        return null !== (SS = this.translateWithIcons) && void 0 !== SS ? SS : this.translate
      }
      clockText(SS) {
        const HS = SS.questClock;
        if (!HS) return null;
        const gS = HS.elapsedMs + (HS.running ? this.now() - this.receivedAt : 0);
        return void 0 === HS.countdownFromMs ? YS(gS, !1) : YS(1e3 * Math.ceil(Math.max(0, HS.countdownFromMs - gS) / 1e3), !1)
      }
      updateTrackedStepPulse(SS) {
        var HS, gS, tS;
        const bS = kg(SS);
        if (!bS) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const XS = SS => bS.subquests.filter((HS => SS(HS.status))).map((SS => SS.id)),
          xS = XS((SS => "completed" === SS || "skipped" === SS)),
          NS = XS((SS => "locked" !== SS)),
          qS = (null === (HS = this.trackedSteps) || void 0 === HS ? void 0 : HS.questId) === bS.id && bS.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (qS) {
          const SS = xS.filter((SS => !qS.finished.has(SS))),
            HS = XS((SS => "active" === SS || "ready" === SS)).filter((SS => !qS.unlocked.has(SS)));
          SS.length > 0 && this.trackedStepPulse++, (SS.length > 0 || HS.length > 0) && (this.trackedChange = {
            finished: new Set(SS),
            unlocked: new Set(HS),
            expiresAt: this.now() + Ng
          })
        } else {
          var uS;
          this.trackedStepPulse = (null === (uS = this.trackedSteps) || void 0 === uS ? void 0 : uS.questId) === bS.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: bS.id,
          progress: bS.progress,
          finished: new Set([...null !== (gS = null === qS || void 0 === qS ? void 0 : qS.finished) && void 0 !== gS ? gS : [], ...xS]),
          unlocked: new Set([...null !== (tS = null === qS || void 0 === qS ? void 0 : qS.unlocked) && void 0 !== tS ? tS : [], ...NS])
        }
      }
      entry(SS, HS) {
        var gS, tS;
        const bS = SS.id === (null === (gS = this.authoritative) || void 0 === gS ? void 0 : gS.trackedQuestId),
          XS = this.now() < this.trackAvailableAt,
          xS = this.questTextTranslator(),
          NS = SS.subquests.map((HS => {
            var gS, tS, XS, NS, qS, uS;
            const IS = null !== (gS = HS.handInNpcName) && void 0 !== gS ? gS : SS.giverName,
              fS = this.translate("skyblockGame:progress", {
                current: HS.progress.toLocaleString(this.locale),
                target: HS.target.toLocaleString(this.locale)
              }),
              kS = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: IS ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [HS.status],
              aS = "active" === HS.status || "ready" === HS.status;
            return {
              id: HS.id,
              name: DH(xS, HS.nameKey, HS.nameParams),
              description: DH(xS, HS.descriptionKey, HS.descriptionParams),
              progress: fS,
              status: HS.status,
              statusLabel: kS ? this.translate(kS, {
                npc: IS
              }) : fS,
              iconItem: aS && null !== (tS = HS.questIconItem) && void 0 !== tS ? tS : null,
              barPercent: "active" === HS.status && HS.showsProgressBar ? Math.min(100, 100 * HS.progress / HS.target) : null,
              justFinished: bS && null !== (XS = null === (NS = this.trackedChange) || void 0 === NS ? void 0 : NS.finished.has(HS.id)) && void 0 !== XS && XS,
              justUnlocked: bS && null !== (qS = null === (uS = this.trackedChange) || void 0 === uS ? void 0 : uS.unlocked.has(HS.id)) && void 0 !== qS && qS
            }
          }));
        return {
          id: SS.id,
          name: DH(xS, SS.nameKey, SS.nameParams),
          description: DH(xS, SS.descriptionKey, SS.descriptionParams),
          progress: HS ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: SS.progress.toLocaleString(this.locale),
            target: SS.target.toLocaleString(this.locale)
          }),
          completed: HS,
          tracked: bS,
          selected: SS.id === this.selected,
          canTrack: !HS && !bS && !XS,
          trackLabel: this.translate(bS ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : XS ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== SS.id,
          subquests: NS,
          focusStep: null !== (tS = NS.find((SS => null !== SS.barPercent))) && void 0 !== tS ? tS : null,
          clock: this.clockText(SS)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var SS, HS, gS, tS, bS, XS, xS, NS, qS, uS;
        const IS = [...null !== (SS = null === (HS = this.authoritative) || void 0 === HS ? void 0 : HS.active) && void 0 !== SS ? SS : [], ...null !== (gS = null === (tS = this.authoritative) || void 0 === tS ? void 0 : tS.completed) && void 0 !== gS ? gS : []];
        var fS, kS, aS, KS;
        IS.some((SS => SS.id === this.selected)) || (this.selected = null !== (fS = null !== (kS = null === (aS = this.authoritative) || void 0 === aS ? void 0 : aS.trackedQuestId) && void 0 !== kS ? kS : null === (KS = IS[0]) || void 0 === KS ? void 0 : KS.id) && void 0 !== fS ? fS : null);
        const jS = null !== (bS = null === (XS = this.authoritative) || void 0 === XS ? void 0 : XS.active.map((SS => this.entry(SS, !1)))) && void 0 !== bS ? bS : [];
        jS.sort(((SS, HS) => Number(HS.tracked) - Number(SS.tracked)));
        const GS = null !== (xS = null === (NS = this.authoritative) || void 0 === NS ? void 0 : NS.completed.map((SS => this.entry(SS, !0)))) && void 0 !== xS ? xS : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: jS,
          completed: GS,
          completedExpanded: this.completedExpanded,
          detail: null !== (qS = [...jS, ...GS].find((SS => SS.selected))) && void 0 !== qS ? qS : null,
          tracked: null !== (uS = jS.find((SS => SS.tracked))) && void 0 !== uS ? uS : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function kg(SS) {
      var HS;
      return null !== (HS = null === SS || void 0 === SS ? void 0 : SS.active.find((HS => HS.id === SS.trackedQuestId))) && void 0 !== HS ? HS : null
    }
    const ag = "skyblockDungeonsView";
    class Kg extends fS {
      constructor(SS, HS) {
        let gS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          tS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(SS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = HS, this.locale = gS, this.requestEnter = tS, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = SS => {
          this.selected = SS, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const SS = this.pickerEntry(),
            HS = null === SS || void 0 === SS ? void 0 : SS.difficulties[this.pageIndex];
          void 0 !== HS && null !== HS.unlockedBoss && (this.close(), this.requestEnter(SS.id, HS.difficulty))
        }
      }
      setTranslator(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = SS, this.locale = HS, this.emit()
      }
      wK(SS) {
        var HS, gS;
        if (!this.nK) return "open" === SS.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== SS.kind ? "snapshot" === SS.kind && (this.authoritative = SS.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (HS = null === (gS = this.pickerEntry()) || void 0 === gS ? void 0 : gS.difficulties.length) && void 0 !== HS ? HS : 1) - 1)), null === SS.snapshot && this.open ? this.close() : this.emit()) : this.choose(SS.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(SS) {
        var HS;
        const gS = null === (HS = this.authoritative) || void 0 === HS ? void 0 : HS.dungeons.find((HS => HS.id === SS));
        void 0 !== gS ? this.open && this.pickerDungeonId === SS || (this.pickerDungeonId = SS, this.pageIndex = Math.max(0, gS.difficulties.findLastIndex((SS => null !== SS.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${SS}`)
      }
      turnTo(SS) {
        var HS, gS;
        const tS = null !== (HS = null === (gS = this.pickerEntry()) || void 0 === gS ? void 0 : gS.difficulties.length) && void 0 !== HS ? HS : 0;
        SS < 0 || SS >= tS || SS === this.pageIndex || (this.pageIndex = SS, this.emit())
      }
      pickerEntry() {
        var SS, HS;
        return null !== (SS = null === (HS = this.authoritative) || void 0 === HS ? void 0 : HS.dungeons.find((SS => SS.id === this.pickerDungeonId))) && void 0 !== SS ? SS : null
      }
      difficulty(SS) {
        const HS = SS.completions > 0,
          gS = null === SS.bestMs ? null : YS(SS.bestMs);
        return {
          difficulty: SS.difficulty,
          label: this.translate(ES[SS.difficulty]),
          colour: LS[SS.difficulty],
          beaten: HS,
          bestTime: gS,
          completions: SS.completions,
          summary: HS ? [null === gS ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: gS
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: SS.completions.toLocaleString(this.locale)
          })].filter((SS => null !== SS)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(SS) {
        const HS = SS.difficulties.map((SS => this.difficulty(SS))),
          gS = HS.filter((SS => SS.beaten)).length;
        return {
          id: SS.id,
          name: this.translate(SS.nameKey),
          selected: SS.id === this.selected,
          beatenSummary: `${gS} / ${HS.length}`,
          difficulties: HS
        }
      }
      picker() {
        const SS = this.pickerEntry();
        if (null === SS || 0 === SS.difficulties.length) return null;
        const HS = SS.difficulties.map(((HS, gS) => {
          var tS, bS, XS, xS;
          const NS = HS.unlockedBoss,
            qS = null === NS ? this.lockedHint(SS, gS) : null;
          return {
            ...this.difficulty(HS),
            unlocked: null !== NS,
            bossName: null === NS ? null : this.translate(NS.bossNameKey),
            bossMobType: null !== (tS = null === NS || void 0 === NS ? void 0 : NS.bossMobType) && void 0 !== tS ? tS : null,
            bossMobVariation: null !== (bS = null === NS || void 0 === NS ? void 0 : NS.bossMobVariation) && void 0 !== bS ? bS : null,
            lockedHint: null !== (XS = null === qS || void 0 === qS ? void 0 : qS.text) && void 0 !== XS ? XS : null,
            lockedHintHighlight: null !== (xS = null === qS || void 0 === qS ? void 0 : qS.highlight) && void 0 !== xS ? xS : null,
            current: gS === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(SS.nameKey),
          pages: HS,
          page: HS[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < HS.length - 1
        }
      }
      lockedHint(SS, HS) {
        var gS, tS, bS;
        if (0 === HS && "number" === typeof SS.combatLevelLock) {
          const HS = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: SS.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: HS,
            colour: QH("combat"),
            icon: nH.combat
          })
        }
        const XS = null !== (gS = null === (tS = this.authoritative) || void 0 === tS ? void 0 : tS.dungeons) && void 0 !== gS ? gS : [],
          xS = HS > 0 ? SS : null !== (bS = XS[XS.indexOf(SS) - 1]) && void 0 !== bS ? bS : null,
          NS = HS > 0 ? SS.difficulties[HS - 1] : null === xS || void 0 === xS ? void 0 : xS.difficulties[0];
        if (null === xS || void 0 === NS) return null;
        const qS = this.translate(xS.nameKey);
        if (null === NS.unlockedBoss) return xS === SS ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, NS.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: qS
        }, NS.difficulty);
        const uS = this.translate(NS.unlockedBoss.bossNameKey);
        return xS === SS ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: uS
        }, NS.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: uS,
            dungeon: qS
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(SS, HS, gS) {
        return this.hintHighlighting(SS, HS, "difficulty", {
          name: this.translate(ES[gS]),
          colour: LS[gS],
          icon: null
        })
      }
      hintHighlighting(SS, HS, gS, tS) {
        let {
          name: bS,
          colour: XS,
          icon: xS
        } = tS;
        const NS = this.translate(SS, {
          ...HS,
          [gS]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(SS, {
            ...HS,
            [gS]: bS
          }),
          highlight: 2 === NS.length ? {
            before: NS[0],
            name: bS,
            after: NS[1],
            colour: XS,
            icon: xS
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var SS, HS, gS;
        const tS = null !== (SS = null === (HS = this.authoritative) || void 0 === HS ? void 0 : HS.dungeons) && void 0 !== SS ? SS : [];
        var bS, XS;
        tS.some((SS => SS.id === this.selected)) || (this.selected = null !== (bS = null === (XS = tS[0]) || void 0 === XS ? void 0 : XS.id) && void 0 !== bS ? bS : null);
        const xS = tS.map((SS => this.entry(SS)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: xS,
          detail: null !== (gS = xS.find((SS => SS.selected))) && void 0 !== gS ? gS : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const jg = ["mining", "farming", "foraging", "fishing", "combat"],
      Gg = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Cg = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function ng() {
      for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
      return HS.map(((SS, HS) => ({
        amount: SS,
        coins: Gg[HS],
        xp: Cg[HS]
      })))
    }
    const Pg = ng(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Qg = ng(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Dg = ng(50, 100, 250, 500, 1e3, 2500, 5e3),
      wg = ng(25, 50, 100, 250, 500, 1e3),
      hg = ng(10, 25, 50, 100, 250, 500, 1e3),
      Zg = ng(1, 5, 10, 25, 50);

    function Jg(SS, HS) {
      return {
        id: SS,
        category: "fishing",
        item: HS,
        drops: [HS],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hg
      }
    }
    const Og = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Qg
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Dg
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Dg
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: wg
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: wg
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Qg
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Pg
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Pg
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Pg
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Dg
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Qg
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Qg
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Qg
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Dg
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Dg
      }, Jg("wheatfish", "Wheatfish"), Jg("darter", "Darter"), Jg("sunset_minnow", "Sunset Minnow"), Jg("root_flounder", "Root Flounder"), Jg("greenfin_loach", "Greenfin Loach"), Jg("red_strongfish", "Red Strongfish"), Jg("green_strongfish", "Green Strongfish"), Jg("boomerang_fish", "Boomerang Fish"), Jg("seahorse", "Seahorse"), Jg("spined_stickleback", "Spined Stickleback"), Jg("moon_strongfish", "Moon Strongfish"), Jg("boulder_bass", "Boulder Bass"), Jg("grass_snapper", "Grass Snapper"), Jg("crystal_wheatfish", "Crystalized Wheatfish", Zg), Jg("moonstone_pupfish", "Moonstone Pupfish", Zg), Jg("reedglass_minnow", "Reedglass Minnow"), Jg("mangrove_herring", "Mangrove Herring"), Jg("mudline_perch", "Mudline Perch"), Jg("coastal_mullet", "Coastal Mullet"), Jg("reef_sardine", "Reef Sardine"), Jg("root_perch", "Root Perch"), Jg("driftwood_catfish", "Driftwood Catfish"), Jg("aether_minnow", "Aether Minnow"), Jg("needlefish", "Tri-Pointed Needlefish"), Jg("threadfin_bream", "Threadfin Bream"), Jg("mudbelly_tilapia", "Mudbelly Tilapia"), Jg("rotslab_eel", "Rotslab Eel"), Jg("polarflash_electron", "Polarflash Electron"), Jg("mireback_carp", "Mireback Carp"), Jg("blackwater_bream", "Blackwater Bream"), Jg("stone_grouper", "Stone Grouper"), Jg("shadeback_ray", "Shadeback Ray"), Jg("glacial_silverfish", "Glacial Silverfish"), Jg("hatchetfish", "Hatchetfish"), Jg("moonlit_boomerang", "Moonlit Boomerang Fish"), Jg("murkborne_ray", "Murkborne Ray"), Jg("bamboo_catfish", "Bamboo Catfish"), Jg("mossback_arapaima", "Mossback Arapaima"), Jg("murk_stingray", "Murk Stingray"), Jg("channel_sawfish", "Channel Sawfish"), Jg("boned_sturgeon", "Boned Sturgeon"), Jg("oarfish", "Oarfish"), Jg("snakehead", "Snakehead", Zg), Jg("eldertide_leviathan", "Eldertide Leviathan", Zg), Jg("pithead", "Pithead"), Jg("electric_eel", "Electric Eel"), Jg("shadow_darter", "Shadow Darter"), Jg("abyss_carp", "Abyss Carp"), Jg("nomai_moray", "Nomai Moray"), Jg("silver_dragonfish", "Silver Dragonfish"), Jg("giant_moray", "Giant Moray"), Jg("coelacanth", "Coelacanth", Zg), Jg("frost_herring", "Frost Herring"), Jg("permafrost_halibut", "Permafrost Halibut"), Jg("glacial_lanternfish", "Glacial Lanternfish"), Jg("frozen_grenadier", "Frozen Grenadier"), Jg("blackfin_icefish", "Blackfin Icefish"), Jg("moonfish", "Moonfish"), Jg("alpha_strongfish", "Alpha Moon Strongfish"), Jg("deep_lanternfish", "Deepwater Lanternfish", Zg), Jg("pearlescent_moonfish", "Pearlescent Moonfish", Zg), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Qg
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: wg
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: wg
      }],
      dg = (new Map(Og.map((SS => [SS.id, SS]))), new Map),
      cg = new Map;
    for (const qq of Og) {
      for (const [SS, HS] of Object.entries(null !== (vg = qq.blocks) && void 0 !== vg ? vg : {})) {
        var vg;
        dg.set(SS, {
          collection: qq,
          amount: HS
        })
      }
      for (const SS of null !== (Eg = qq.drops) && void 0 !== Eg ? Eg : []) {
        var Eg;
        cg.set(SS, qq)
      }
    }

    function Lg(SS, HS) {
      let gS = 0;
      for (; gS < SS.tiers.length && HS >= SS.tiers[gS].amount;) gS++;
      return gS
    }
    const Yg = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Ag(SS) {
      return Yg[SS - 1]
    }
    const yg = "skyblockCollectionsView";
    class Vg extends fS {
      constructor(SS, HS) {
        let gS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          tS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : SS => SS;
        super(SS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = HS, this.locale = gS, this.itemName = tS, this.counts = null, this.category = "mining", this.selected = Og[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = SS => {
          this.category = SS, this.selected = this.inCategory(SS)[0].id, this.emit()
        }, this.select = SS => {
          this.selected = SS, this.emit()
        }
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, this.locale = HS, this.itemName = gS, this.emit()
      }
      wK(SS) {
        if (!this.nK)
          if ("collOpen" !== SS.kind) {
            (SS.collFull || null === this.counts) && (this.counts = new Map);
            for (const [HS, gS] of SS.collCounts) this.counts.set(HS, gS);
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
        var SS;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const HS = this.inCategory(this.category).map((SS => this.collectionView(SS))),
          gS = Og.reduce(((SS, HS) => SS + this.tierOf(HS)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: jg.map((SS => this.categoryView(SS))),
          collections: HS,
          detail: null !== (SS = HS.find((SS => SS.selected))) && void 0 !== SS ? SS : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(gS)
          })
        }
      }
      categoryView(SS) {
        const HS = this.inCategory(SS),
          gS = HS.reduce(((SS, HS) => SS + this.tierOf(HS)), 0),
          tS = HS.reduce(((SS, HS) => SS + HS.tiers.length), 0);
        return {
          id: SS,
          label: this.translate(`skyblockGame:${SS}`),
          icon: nH[SS],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(gS),
            target: this.number(tS)
          }),
          selected: SS === this.category
        }
      }
      collectionView(SS) {
        var HS, gS;
        const tS = null !== (HS = this.counts.get(SS.id)) && void 0 !== HS ? HS : 0,
          bS = Lg(SS, tS),
          XS = null !== (gS = SS.tiers[bS]) && void 0 !== gS ? gS : null,
          xS = 0 === bS ? 0 : SS.tiers[bS - 1].amount;
        return {
          id: SS.id,
          name: this.itemName(SS.item),
          icon: SS.item,
          selected: SS.id === this.selected,
          locked: 0 === tS,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(tS)
          }),
          tier: 0 === bS ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(bS),
          percent: null === XS ? 100 : Math.min(100, (tS - xS) / (XS.amount - xS) * 100),
          progress: null === XS ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(tS),
            target: this.number(XS.amount)
          }),
          nextReward: null === XS ? null : this.reward(SS, XS.coins, XS.xp)
        }
      }
      reward(SS, HS, gS) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(HS),
          xp: this.number(gS),
          skill: this.translate(`skyblockGame:${SS.category}`)
        })
      }
      tierLabel(SS) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Ag(SS)
        })
      }
      tierOf(SS) {
        var HS;
        return Lg(SS, null !== (HS = this.counts.get(SS.id)) && void 0 !== HS ? HS : 0)
      }
      inCategory(SS) {
        return Og.filter((HS => HS.category === SS))
      }
      number(SS) {
        return SS.toLocaleString(this.locale)
      }
    }
    const ig = "skyblockPortalTransitView",
      Wg = "skyblockPortalArrival";
    class zg {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.cj = SS, this.storage = HS, this.now = gS, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      wK(SS) {
        const HS = {
          zoneNameKey: SS.transitZoneNameKey,
          variation: SS.transitZoneVariation,
          colour: SS.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Wg, HS), this.show("departure", HS.zoneNameKey, HS.colour, SS.transitDurationMs, SS.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Wg)
        }))
      }
      resumeArrival(SS) {
        const HS = this.storage.getItem(Wg);
        this.storage.removeItem(Wg), null === HS || HS.variation !== SS || this.now() - HS.departedAt > 3e4 || this.show("arrival", HS.zoneNameKey, HS.colour, 3200, 2e4)
      }
      finishArrival(SS) {
        var HS;
        "arrival" === (null === (HS = this.view) || void 0 === HS ? void 0 : HS.phase) && this.view.token === SS && (this.clearTimer(), this.view = null, this.cj(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(SS, HS, gS, tS, bS, XS) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: SS,
          zoneNameKey: HS,
          colour: gS,
          durationMs: tS
        }, this.cj(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.cj(null), null === XS || void 0 === XS || XS()
        }), bS)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Ug = "skyblockDailyRewardView",
      pg = "skyblockDailyRewardCoin";
    class sg {
      constructor(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          qS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.cj = SS, this.isBusy = HS, this.holdQuestPopups = gS, this.onHeldCoinsChanged = tS, this.onCoinLanded = bS, this.onStarted = XS, this.onFinished = xS, this.onItemLanded = NS, this.now = qS, this.Ku = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var SS, HS;
        return null !== (SS = null === (HS = this.playing) || void 0 === HS ? void 0 : HS.view) && void 0 !== SS ? SS : null
      }
      getHeldCoins() {
        var SS, HS;
        let gS = 0;
        for (const tS of this.Ku) gS += tS.coins;
        return gS - (null !== (SS = null === (HS = this.playing) || void 0 === HS ? void 0 : HS.released) && void 0 !== SS ? SS : 0)
      }
      wK(SS) {
        "dailyRewardClaimed" !== SS.kind ? (this.queue.push(SS), this.mf()) : this.Ku.push({
          coins: SS.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      mf() {
        const SS = this.now();
        if (null === this.playing) return this.releaseUnshown(SS), void this.startNext(SS);
        const HS = this.playing,
          gS = SS - HS.startedAt,
          tS = HS.view.flyingCoins,
          bS = function(SS, HS) {
            let gS = 0;
            for (; gS < HS && Mg(gS, HS) <= SS;) gS++;
            return gS
          }(gS, tS);
        if (bS !== HS.landed) {
          for (let SS = bS - HS.landed > 2 ? bS - 1 : HS.landed; SS < bS; SS++) this.onCoinLanded(SS, tS);
          HS.landed = bS, HS.released = Math.round(HS.view.coins * bS / tS), this.onHeldCoinsChanged()
        }
        for (; HS.itemsLanded < HS.view.items.length && 2e3 + 160 * HS.itemsLanded + 630 <= gS;) this.onItemLanded(HS.itemsLanded), HS.itemsLanded++;
        gS >= HS.view.durationMs && (this.finish(), this.startNext(SS))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Ku = [], this.cj(null)
      }
      startNext(SS) {
        if (0 === this.queue.length || this.isBusy()) return;
        const HS = this.queue.shift();
        this.token++;
        const gS = {
          token: this.token,
          day: HS.dailyRewardDay,
          coins: HS.dailyRewardCoins,
          items: HS.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: HS.dailyRewardDay === dS ? 24 : 14
        };
        this.playing = {
          view: gS,
          startedAt: SS,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.cj(gS), this.onStarted(gS)
      }
      finish() {
        this.Ku.shift(), this.playing = null, this.holdQuestPopups(!1), this.cj(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(SS) {
        if (this.queue.length > 0 || 0 === this.Ku.length) return;
        const HS = this.Ku.length;
        this.Ku = this.Ku.filter((HS => SS - HS.receivedAt < 6e4)), this.Ku.length !== HS && this.onHeldCoinsChanged()
      }
    }

    function Bg(SS, HS) {
      return 450 + 715 * SS / (HS - 1)
    }

    function Mg(SS, HS) {
      return Bg(SS, HS) + 650
    }
    const Fg = "skyblockMailboxView";
    class Rg {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.cj = SS, this.isBusy = HS, this.onStarted = gS, this.now = tS, this.waiting = [], this.playing = null, this.token = 0, this.itemName = SS => SS
      }
      getSnapshot() {
        var SS, HS;
        return null !== (SS = null === (HS = this.playing) || void 0 === HS ? void 0 : HS.view) && void 0 !== SS ? SS : null
      }
      setItemName(SS) {
        this.itemName = SS
      }
      wK(SS) {
        this.waiting.push(...SS.mailLetters), this.mf()
      }
      mf() {
        const SS = this.now();
        null !== this.playing && SS - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.cj(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(SS)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.cj(null)
      }
      start(SS) {
        const HS = this.waiting.slice(0, 3);
        this.token++;
        const gS = {
          token: this.token,
          letters: HS.map((SS => this.toView(SS))),
          more: this.waiting.length - HS.length,
          durationMs: 4500 + 700 * HS.length
        };
        this.waiting = [], this.playing = {
          view: gS,
          startedAt: SS
        }, this.cj(gS), this.onStarted(gS)
      }
      toView(SS) {
        return {
          coins: SS.mailCoins,
          items: SS.mailItems.map((SS => {
            var HS;
            return {
              itemName: SS.mailItemName,
              amount: SS.mailItemAmount,
              label: null !== (HS = SS.mailItemLabel) && void 0 !== HS ? HS : this.itemName(SS.mailItemName)
            }
          })),
          reasonKey: SS.mailReasonKey,
          reasonParams: SS.mailReasonParams
        }
      }
    }
    const Tg = "skyblockQuestGraphView",
      og = "skyblockDevQuestJump";

    function lg(SS) {
      if (0 === SS.length) return "";
      const HS = [`M ${SS[0].x} ${SS[0].y}`];
      for (let tS = 1; tS < SS.length - 1; tS++) {
        const gS = SS[tS + 1];
        HS.push(`Q ${SS[tS].x} ${SS[tS].y} ${(SS[tS].x+gS.x)/2} ${(SS[tS].y+gS.y)/2}`)
      }
      const gS = SS[SS.length - 1];
      return HS.push(`L ${gS.x} ${gS.y}`), HS.join(" ")
    }

    function mg(SS, HS) {
      return SS < HS ? `${SS}|${HS}` : `${HS}|${SS}`
    }
    class eg extends fS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(SS, gS, tS), this.translate = HS, this.requestJump = bS, this.requestArrive = XS, this.storage = xS, this.now = NS, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = SS => {
          SS !== this.hoveredId && (this.hoveredId = SS, this.emit())
        }, this.jump = SS => {
          this.close(), this.requestJump(SS)
        }
      }
      wK(SS) {
        if (!this.nK)
          if ("graph" !== SS.kind) {
            if ("jumping" === SS.kind) {
              const HS = {
                questId: SS.graphQuestId,
                variation: SS.graphVariation,
                completes: SS.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(og, HS)
            }
          } else {
            const HS = ++this.graphCount;
            gS.e(118).then((() => gS(6637))).then((gS => {
              let {
                default: tS
              } = gS;
              this.nK || HS !== this.graphCount || (this.layout = function(SS, HS, gS) {
                var tS, bS;
                const XS = new SS.graphlib.Graph;
                XS.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), XS.setDefaultEdgeLabel((() => ({})));
                const xS = new Set;
                for (const IS of HS) xS.add(IS.graphQuestId), XS.setNode(IS.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const NS = gS.filter((SS => xS.has(SS.graphFromId) && xS.has(SS.graphToId) && SS.graphFromId !== SS.graphToId)),
                  qS = new Map;
                for (const IS of [...NS].sort(((SS, HS) => Number("awaits" === SS.graphEdgeKind) - Number("awaits" === HS.graphEdgeKind)))) {
                  const SS = mg(IS.graphFromId, IS.graphToId);
                  qS.has(SS) || (qS.set(SS, IS), XS.setEdge(IS.graphFromId, IS.graphToId))
                }
                SS.layout(XS);
                const uS = XS.graph();
                return {
                  width: Math.ceil(null !== (tS = uS.width) && void 0 !== tS ? tS : 0),
                  height: Math.ceil(null !== (bS = uS.height) && void 0 !== bS ? bS : 0),
                  nodes: HS.map((SS => {
                    var HS, gS;
                    const tS = XS.node(SS.graphQuestId);
                    return {
                      node: SS,
                      left: (null !== (HS = tS.x) && void 0 !== HS ? HS : 0) - 95,
                      top: (null !== (gS = tS.y) && void 0 !== gS ? gS : 0) - 26
                    }
                  })),
                  edges: NS.map((SS => {
                    var HS;
                    const gS = qS.get(mg(SS.graphFromId, SS.graphToId)),
                      tS = null !== (HS = XS.edge(gS.graphFromId, gS.graphToId).points) && void 0 !== HS ? HS : [];
                    return {
                      edge: SS,
                      key: `${SS.graphFromId}|${SS.graphToId}|${SS.graphEdgeKind}`,
                      path: lg(gS.graphFromId === SS.graphFromId ? tS : [...tS].reverse())
                    }
                  })),
                  plans: new Map(HS.map((SS => [SS.graphQuestId, new Set([SS.graphQuestId, ...SS.graphPlanIds])])))
                }
              }(tS, SS.graphNodes, SS.graphEdges), this.show())
            })).catch((SS => {
              console.error("The quest graph could not be laid out", SS)
            }))
          }
      }
      resumeJump(SS) {
        const HS = this.storage.getItem(og);
        this.storage.removeItem(og), null === HS || HS.variation !== SS || this.now() - HS.departedAt > 6e4 || this.requestArrive(HS.questId, HS.completes)
      }
      setTranslator(SS) {
        this.translate = SS, this.emit()
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
        var SS, HS;
        return null !== (SS = null === this.hoveredId || null === (HS = this.layout) || void 0 === HS ? void 0 : HS.plans.get(this.hoveredId)) && void 0 !== SS ? SS : new Set
      }
      buildSnapshot() {
        const SS = this.layout;
        if (null === SS) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const HS = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: SS.width,
          height: SS.height,
          nodes: SS.nodes.map((SS => {
            let {
              node: gS,
              left: tS,
              top: bS
            } = SS;
            return {
              id: gS.graphQuestId,
              name: this.translate(gS.graphNameKey),
              detail: null === gS.graphGiverName ? gS.graphZoneId : `${gS.graphGiverName} \xb7 ${gS.graphZoneId}`,
              state: gS.graphState,
              left: tS,
              top: bS,
              inPlan: HS.has(gS.graphQuestId),
              hovered: gS.graphQuestId === this.hoveredId
            }
          })),
          edges: SS.edges.map((SS => {
            let {
              edge: gS,
              key: tS,
              path: bS
            } = SS;
            return {
              key: tS,
              kind: gS.graphEdgeKind,
              path: bS,
              inPlan: HS.has(gS.graphFromId) && HS.has(gS.graphToId)
            }
          })),
          planning: HS.size > 0
        }
      }
    }
    var rg = gS(37089);
    const St = 250,
      Ht = 2150,
      gt = -2.8,
      tt = 2.2,
      bt = -27,
      Xt = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      xt = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Nt = Math.round(50 + 1e3 * (xt.delay + xt.period / 2)),
      qt = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      ut = Array.from({
        length: 26
      }, ((SS, HS) => {
        const gS = 2.39996 * HS,
          tS = .5 + .618034 * HS % 1 * .23,
          bS = HS % 3 !== 2;
        return {
          rune: bS ? qt[7 * HS % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(gS)*tS).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(gS)*tS).toFixed(3)})`,
            "--spin": 40 * (HS % 5 - 2) + "deg",
            "--size": (bS ? 1 + HS % 4 * .2 : .3 + HS % 2 * .15) + "rem",
            "--duration": `${(1.8+7*HS%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*HS%3).toFixed(2)}s`
          }
        }
      }));

    function It(SS, HS) {
      return Array.from({
        length: 30 + 3 * SS + (HS ? 10 : 0)
      }, ((SS, HS) => {
        const gS = HS < 4,
          tS = gS ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          bS = gS ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          XS = gS ? 2.2 : .6 + Math.random(),
          xS = gS ? .3 : Math.random() < .5 ? .16 : .24,
          NS = gS ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": tS,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${bS.toFixed(2)}rem`,
          "--length": `${XS.toFixed(2)}rem`,
          "--width": `${xS}rem`,
          "--duration": `${Math.round(NS)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function ft(SS) {
      let {
        zeta: HS,
        period: gS
      } = SS;
      const tS = 2 * Math.PI / gS;
      return {
        w: tS,
        decay: HS * tS / Math.sqrt(1 - HS * HS)
      }
    }
    let kt = !1;

    function Kt() {
      if (kt) return;
      kt = !0;
      const SS = document.createElement("style");
      SS.textContent = function() {
        const SS = ft(Xt),
          HS = ft(xt),
          gS = HS => Math.exp(-SS.decay * HS) * Math.sin(SS.w * HS),
          tS = gS(Math.atan(SS.w / SS.decay) / SS.w),
          bS = .25,
          XS = 2.15,
          xS = Math.round(215),
          NS = [];
        for (let qS = 0; qS <= xS; qS++) {
          const SS = qS / xS * XS;
          let uS = Math.sin(Math.min(SS, bS) / bS * Math.PI / 2) ** 2,
            IS = 0,
            fS = 1,
            kS = 1 - .2 * uS,
            aS = 1;
          if (SS >= bS) {
            const xS = SS - bS,
              NS = Math.max(0, xS - .05);
            uS = Math.exp(-NS / .05), IS = gS(NS + Xt.lead * (1 - Math.exp(-NS / Xt.rush))) / tS;
            const qS = NS - xt.delay,
              KS = qS <= 0 ? 0 : 1 - Math.exp(-HS.decay * qS) * (Math.cos(HS.w * qS) + HS.decay / HS.w * Math.sin(HS.w * qS)),
              jS = Math.max(0, (SS - 1.77) / (XS - 1.77));
            fS = (1 + (xt.to - 1) * KS) * (1 + .08 * jS), kS = 1.1 + 1.5 * Math.exp(-xS / .07) + .3 * Math.exp(-(((1e3 * xS - Nt) / 100) ** 2)) + .8 * jS, aS = 1 - jS ** 1.5
          }
          const KS = .15 * uS + gt * IS,
            jS = -.1 * uS + tt * IS,
            GS = 3 * uS + bt * IS;
          NS.push(`${(qS/xS*100).toFixed(3)}% { opacity: ${aS.toFixed(3)}; transform: translate(${KS.toFixed(3)}rem, ${jS.toFixed(3)}rem) rotate(${GS.toFixed(2)}deg) scale(${fS.toFixed(3)}); filter: brightness(${kS.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${NS.join(" ")} }`
      }(), document.head.append(SS)
    }
    const jt = "skyblockForgeView",
      Gt = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Ct extends fS {
      constructor(SS, HS, gS, tS, bS) {
        super(SS, gS, tS), this.translate = HS, this.requestForge = bS, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (SS, HS) => {
          var gS, tS;
          null !== this.forging || (null !== (gS = this.owned[(0, rg.p)(HS, SS)]) && void 0 !== gS ? gS : 0) <= 0 || (this.selected[SS] = this.selected[SS] === HS ? null : HS, this.status = null, null === (tS = this.onPartSelected) || void 0 === tS || tS.call(this), this.emit())
        }, this.forge = SS => {
          var HS, gS;
          const tS = this.selectedParts();
          if (null === tS || this.isPending() || !this.open) return;
          const bS = (0, rg.l)(tS);
          if (null === bS || bS.coalCost > this.coal) return;
          const XS = this.preview(bS),
            xS = null !== (HS = null === (gS = this.onForgeStarted) || void 0 === gS ? void 0 : gS.call(this, XS.tier, XS.named, SS)) && void 0 !== HS ? HS : () => {};
          if (this.dropArrival(), SS) {
            const SS = {
              id: ++this.forgeId,
              preview: XS,
              timers: [],
              stopSounds: xS,
              landed: !1,
              reply: null
            };
            SS.timers.push(setTimeout((() => {
              SS.landed = !0, null !== SS.reply && (this.apply(SS.reply), SS.reply = null, this.emit())
            }), St), setTimeout((() => {
              this.finishForge(SS)
            }), Ht)), this.forging = SS
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(tS)
        }, this.snapshot = this.buildSnapshot()
      }
      wK(SS) {
        var HS;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === SS.forgeMessageKind) return this.dropForge(), this.apply(SS), this.status = null, this.show(), void(null === (HS = this.onOpened) || void 0 === HS || HS.call(this));
        const gS = this.forging;
        if (null !== gS && null !== SS.forgeRefusalKey) this.dropForge();
        else if (null !== gS && !gS.landed) return void(gS.reply = SS);
        this.apply(SS), this.emit()
      }
      apply(SS) {
        if (this.owned = SS.forgeOwnedParts, this.coal = SS.forgeCoalOwned, this.keepSelectionOwned("open" === SS.forgeMessageKind), null !== SS.forgeForgedSwordId) {
          var HS;
          const gS = (0, rg.l)(SS.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (HS = null === gS || void 0 === gS ? void 0 : gS.displayName) && void 0 !== HS ? HS : ""
            }
          }
        } else null !== SS.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: SS.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(SS) {
        this.translate = SS, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(SS) {
        var HS;
        this.forging = null;
        const gS = this.selectedParts(),
          tS = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: SS.id,
          sameSword: null !== gS && (null === (HS = (0, rg.l)(gS)) || void 0 === HS ? void 0 : HS.displayName) === SS.preview.name,
          timer: tS
        }, this.emit()
      }
      dropForge() {
        const SS = this.forging;
        if (null !== SS) {
          this.forging = null;
          for (const HS of SS.timers) clearTimeout(HS);
          SS.stopSounds(), null !== SS.reply && this.apply(SS.reply)
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
        var SS, HS, gS;
        const tS = this.selectedParts(),
          bS = null === tS ? null : (0, rg.l)(tS),
          XS = null !== (SS = null === (HS = this.forging) || void 0 === HS ? void 0 : HS.preview) && void 0 !== SS ? SS : null === bS ? null : this.preview(bS);
        return {
          enabled: this.received,
          open: this.open,
          slots: rg.i.map((SS => ({
            kind: SS,
            label: this.translate(Gt[SS]),
            parts: this.partsFor(SS)
          }))),
          coalOwned: this.coal,
          preview: XS,
          unformedSword: rg.h[null !== (gS = this.selected.Blade) && void 0 !== gS ? gS : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((SS => SS > 0)),
          canForge: null !== XS && !XS.coalShort && !this.isPending(),
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
      preview(SS) {
        return {
          name: SS.displayName,
          lore: SS.lore,
          baseSword: SS.baseSword,
          enchantmentTier: SS.enchantmentTier,
          tier: Number(SS.enchantmentTier.slice(-1)),
          named: SS.named,
          stats: this.stats(SS),
          effects: SS.effects,
          coalCost: SS.coalCost,
          coalShort: null === this.forging && SS.coalCost > this.coal
        }
      }
      partsFor(SS) {
        const HS = [];
        for (const tS of rg.g) {
          var gS;
          const bS = (0, rg.p)(tS, SS),
            XS = null !== (gS = this.owned[bS]) && void 0 !== gS ? gS : 0;
          XS > 0 && HS.push({
            material: tS,
            itemName: bS,
            owned: XS,
            selected: this.selected[SS] === tS,
            placeholder: !1
          })
        }
        if (0 === HS.length) {
          const gS = rg.g[0];
          HS.push({
            material: gS,
            itemName: (0, rg.p)(gS, SS),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return HS
      }
      stats(SS) {
        const HS = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${SS.powerMultiplier.toFixed(2)}`,
          better: SS.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${SS.damageMultiplier.toFixed(2)}`,
          better: SS.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/SS.cooldownMultiplier).toFixed(2)}`,
          better: SS.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${SS.knockbackMultiplier.toFixed(2)}`,
          better: SS.knockbackMultiplier > 1
        }];
        return SS.reachBonus > 0 && HS.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${SS.reachBonus.toFixed(1)}`,
          better: !0
        }), SS.damageReduction > 0 && HS.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*SS.damageReduction)}%`,
          better: !0
        }), HS
      }
      selectedParts() {
        const {
          Blade: SS,
          Guard: HS,
          Handle: gS
        } = this.selected;
        return null === SS || null === HS || null === gS ? null : {
          blade: SS,
          guard: HS,
          handle: gS
        }
      }
      keepSelectionOwned(SS) {
        for (const gS of rg.i) {
          var HS;
          const tS = this.selected[gS];
          if (null !== tS && (null !== (HS = this.owned[(0, rg.p)(tS, gS)]) && void 0 !== HS ? HS : 0) > 0) continue;
          if (!SS) {
            this.selected[gS] = null;
            continue
          }
          const bS = [...rg.g].reverse().find((SS => {
            var HS;
            return (null !== (HS = this.owned[(0, rg.p)(SS, gS)]) && void 0 !== HS ? HS : 0) > 0
          }));
          this.selected[gS] = null !== bS && void 0 !== bS ? bS : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const nt = "skyblockSmugglerView",
      Pt = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Qt extends fS {
      constructor(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(SS, gS, tS), this.translate = HS, this.requestBuy = bS, this.now = XS, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = SS => SS, this.onBought = null, this.buy = SS => {
          const HS = this.deals[SS];
          void 0 !== HS && !this.isPending() && this.open && !this.soldOut.has(SS) && this.canAfford(HS) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, SS))
        }, this.snapshot = this.buildSnapshot()
      }
      wK(SS) {
        if (this.received = !0, this.day = SS.smugglerDay, this.deals = SS.smugglerDeals, this.rivets = SS.smugglerRivetsOwned, this.crests = SS.smugglerCrestsOwned, this.soldOut = new Set(SS.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + SS.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === SS.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = SS.smugglerBoughtSlot, null !== SS.smugglerBoughtSlot) {
          var HS, gS;
          const tS = this.deals[SS.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === tS ? "" : this.dealName(tS),
              amount: String(null !== (HS = null === tS || void 0 === tS ? void 0 : tS.smugglerDealAmount) && void 0 !== HS ? HS : 0)
            }
          }, this.boughtCount++, null === (gS = this.onBought) || void 0 === gS || gS.call(this)
        } else null !== SS.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: SS.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, void 0 !== gS && (this.itemName = gS), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(SS) {
        if (null !== SS.smugglerDealUniqueName) return SS.smugglerDealUniqueName;
        const HS = Pt[SS.smugglerDealItem];
        return void 0 === HS ? this.itemName(SS.smugglerDealItem) : this.translate(HS)
      }
      canAfford(SS) {
        return SS.smugglerDealRivets <= this.rivets && SS.smugglerDealCrests <= this.crests
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
        const SS = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return SS <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : SS < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(SS)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(SS / 60)),
          minutes: String(SS % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((SS, HS) => ({
            slot: HS,
            itemName: SS.smugglerDealItem,
            displayName: this.dealName(SS),
            enchantmentTier: SS.smugglerDealEnchantmentTier,
            amount: SS.smugglerDealAmount,
            rivets: SS.smugglerDealRivets,
            crests: SS.smugglerDealCrests,
            affordable: this.canAfford(SS),
            soldOut: this.soldOut.has(HS),
            justBought: this.boughtSlot === HS
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
    const Dt = "skyblockPassageView",
      wt = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function ht(SS, HS) {
      return SS(wt[HS])
    }

    function Zt(SS, HS, gS, tS) {
      const bS = Math.ceil((gS - tS) / 864e5),
        XS = ht(SS, HS);
      return bS > 1 ? SS("skyblockGame:passageNextDays", {
        phase: XS,
        days: String(bS)
      }) : SS("skyblockGame:passageNextSoon", {
        phase: XS
      })
    }
    class Jt extends fS {
      constructor(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(SS, gS, tS), this.translate = HS, this.now = bS, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = SS => SS, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      wK(SS) {
        this.message = SS, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, void 0 !== gS && (this.itemName = gS), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(SS) {
        return {
          itemName: SS.passageFish,
          displayName: this.itemName(SS.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(SS.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const SS = this.message;
        return null === SS ? {
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
          phase: SS.passagePhase,
          phaseName: ht(this.translate, SS.passagePhase),
          visitors: SS.passageVisitors.map((SS => this.describe(SS))),
          resting: this.describe(SS.passageResting),
          nextPhase: SS.passageNextPhase,
          next: Zt(this.translate, SS.passageNextPhase, SS.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Ot = gS(38564);
    const dt = "skyblockKeepersChairView";
    class ct extends fS {
      constructor(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Ot.b;
        super(SS, gS, tS), this.translate = HS, this.requestAim = bS, this.now = XS, this.pacer = xS, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = SS => SS, this.aim = SS => {
          !this.awaitingReply && this.open && this.atChair && SS !== this.favoured && (null === SS || this.islands.some((HS => HS.keepersChairIslandId === SS && HS.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== SS && void 0 !== SS ? SS : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = xS.subscribe((() => {
          this.emit()
        }))
      }
      wK(SS) {
        var HS, gS;
        this.received = !0;
        const tS = this.favoured,
          bS = this.atChair;
        var XS;
        return this.islands = SS.keepersChairIslands, this.favoured = SS.keepersChairFavoured, this.passage = null !== (HS = SS.keepersChairPassage) && void 0 !== HS ? HS : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (gS = SS.keepersChairAtChair) || void 0 === gS || gS, "place" === SS.keepersChairMessageKind ? (!bS && this.atChair && "refused" === (null === (XS = this.status) || void 0 === XS ? void 0 : XS.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === SS.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== SS.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: SS.keepersChairRefusalKey,
          island: null
        } : this.favoured !== tS && (this.status = null === this.favoured ? {
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
      receivePassage(SS) {
        this.received && (this.passage = SS, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, void 0 !== gS && (this.itemName = gS), this.emit()
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
      islandName(SS) {
        const HS = this.islands.find((HS => HS.keepersChairIslandId === SS));
        return void 0 === HS ? SS : this.translate(HS.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const SS = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          HS = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((SS => {
            const HS = SS.keepersChairFeaturedFish;
            return {
              id: SS.keepersChairIslandId,
              name: this.translate(SS.keepersChairIslandNameKey),
              relit: SS.keepersChairIslandRelit,
              featuredFish: null === HS ? null : {
                itemName: HS,
                displayName: this.itemName(HS)
              },
              favoured: SS.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === SS ? null : {
            tone: SS.tone,
            text: this.translate(SS.key, null === SS.island ? void 0 : {
              island: this.islandName(SS.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === HS ? null : {
            phase: HS.keepersChairPassagePhase,
            phaseName: ht(this.translate, HS.keepersChairPassagePhase),
            nextPhase: HS.keepersChairPassageNextPhase,
            next: Zt(this.translate, HS.keepersChairPassageNextPhase, HS.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const vt = "skyblockReachLogView",
      Et = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Lt = "Caught Fish",
      Yt = [1, 2, 4];

    function At(SS, HS) {
      return SS.map((SS => ({
        ...SS,
        reachLogPageFish: SS.reachLogPageFish.map((SS => ({
          ...SS,
          reachLogFishFresh: HS(SS)
        })))
      })))
    }
    class yt extends fS {
      constructor(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Ot.b;
        super(SS, gS, tS), this.translate = HS, this.requestOpen = bS, this.pacer = XS, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = SS => SS, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = SS => {
          this.pages.some((HS => HS.reachLogIslandId === SS)) && (this.selected = SS, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = XS.subscribe((() => {
          this.emit()
        }))
      }
      wK(SS) {
        if (this.received = !0, "status" === SS.reachLogMessageKind) return !0 === SS.reachLogNews && this.markNews(), this.serverFresh = SS.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const HS = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== SS.reachLogMessageKind)
          if (this.pageViews = null, this.pages = At(SS.reachLogPages, (SS => SS.reachLogFishFresh || this.heldFresh.has(SS.reachLogFishItem))), this.letGoShown = SS.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, HS) this.showPages();
          else {
            for (const SS of this.pages)
              for (const HS of SS.reachLogPageFish) HS.reachLogFishFresh && this.heldFresh.add(HS.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, this.pageViews = null, void 0 !== gS && (this.itemName = gS), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = At(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var SS, HS, gS, tS;
        const bS = this.pages.find((SS => SS.reachLogPageFish.some((SS => SS.reachLogFishFresh))));
        if (void 0 !== bS) return bS.reachLogIslandId;
        if (null !== this.selected && this.pages.some((SS => SS.reachLogIslandId === this.selected))) return this.selected;
        return null !== (SS = null !== (HS = null === (gS = this.pages.filter((SS => SS.reachLogIslandAwake)).at(-1)) || void 0 === gS ? void 0 : gS.reachLogIslandId) && void 0 !== HS ? HS : null === (tS = this.pages[0]) || void 0 === tS ? void 0 : tS.reachLogIslandId) && void 0 !== SS ? SS : null
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
        return this.pages.map((SS => {
          var HS;
          return {
            id: SS.reachLogIslandId,
            name: this.translate(SS.reachLogIslandNameKey),
            awake: SS.reachLogIslandAwake,
            gold: SS.reachLogPageGold,
            caught: SS.reachLogPageFish.filter((SS => SS.reachLogFishCaught && !SS.reachLogFishVisitor)).length,
            total: SS.reachLogPageFish.filter((SS => !SS.reachLogFishVisitor)).length,
            fish: SS.reachLogPageFish.map((SS => {
              const HS = SS.reachLogFishBestKg;
              return {
                itemName: SS.reachLogFishItem,
                name: SS.reachLogFishCaught ? this.itemName(SS.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: SS.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / SS.reachLogFishChance))
                }),
                best: SS.reachLogFishCaught ? null === HS ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: HS.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: SS.reachLogFishMarks,
                ribbons: Yt.map((HS => 0 !== (SS.reachLogFishRibbons & HS))),
                glimmer: 0 !== (8 & SS.reachLogFishRibbons),
                halo: 0 !== (32 & SS.reachLogFishRibbons),
                fresh: SS.reachLogFishFresh,
                visitor: SS.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (HS = SS.reachLogPageReturner) && void 0 !== HS ? HS : null)
          }
        }))
      }
      buildReturner(SS) {
        return null === SS ? null : {
          itemName: SS.reachLogReturnerFishItem,
          line: this.translate(SS.reachLogReturnerLineKey, {
            name: this.translate(SS.reachLogReturnerNameKey),
            trinket: this.translate(SS.reachLogReturnerTrinketKey)
          }),
          back: SS.reachLogReturnerBack
        }
      }
      receivePassagePhase(SS) {
        null !== this.passagePhase && this.passagePhase !== SS && (this.pagesCurrent = !1), this.passagePhase = SS
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Vt = "skyblockLampLightView";
    class it {
      constructor(SS, HS, gS, tS) {
        this.cj = SS, this.translate = HS, this.requestCommand = gS, this.pacer = tS, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.nK = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = SS => {
          SS ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = SS => {
          this.send(`buy ${SS}`)
        }, this.socket = SS => {
          this.send(`socket ${null!==SS&&void 0!==SS?SS:yS}`)
        }, this.wearTint = SS => {
          this.send(`tint ${null!==SS&&void 0!==SS?SS:yS}`)
        }, this.setSituation = SS => {
          this.situation = SS, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = tS.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = tS.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      wK(SS) {
        if (this.message = SS, null !== SS.lampLightShop && (this.shop = SS.lampLightShop), "open" === SS.lampLightKind && (this.refusalKey = null), "reply" === SS.lampLightKind) {
          var HS;
          const bS = null !== (HS = SS.lampLightReplyTag) && void 0 !== HS ? HS : null,
            XS = null !== bS && bS === this.offTag;
          var gS, tS;
          if (XS ? this.settleOff() : null !== bS && bS !== this.awaitingTag || this.settleReply(), this.refusalKey = SS.lampLightRefusalKey, null !== SS.lampLightBought && !XS) this.sparkle = {
            id: SS.lampLightBought,
            count: (null !== (gS = null === (tS = this.sparkle) || void 0 === tS ? void 0 : tS.count) && void 0 !== gS ? gS : 0) + 1
          }
        }
        SS.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === SS.lampLightKind && (this.lastGained = SS.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(SS) {
        SS !== this.atChair && (this.atChair = SS, SS && (this.refusalKey = null), this.emit())
      }
      setTranslator(SS, HS) {
        this.translate = SS, this.locale = null !== HS && void 0 !== HS ? HS : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.nK = !0
      }
      send(SS) {
        var HS;
        if (null !== this.awaitingTag || "ready" !== (null === (HS = this.message) || void 0 === HS ? void 0 : HS.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const gS = this.nextTag();
        this.awaitingTag = gS, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${SS} ${gS}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const SS = this.nextTag();
        this.offTag = SS, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${SS}`)
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
        this.nK || (this.snapshot = this.buildSnapshot(), this.cj(this.snapshot))
      }
      formatLight(SS) {
        return Math.floor(SS).toLocaleString(this.locale)
      }
      formatPercent(SS) {
        const HS = 100 * SS;
        return HS >= 10 ? Math.round(HS).toLocaleString(this.locale) : HS.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(SS, HS) {
        if ("bite" === SS) return this.translate("skyblockGame:lampLightBite", {
          seconds: (HS.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === SS) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(HS.lampLightRareChance)
        });
        if ("notice" === SS) return null === HS.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(HS.lampLightNoticeChance)
        });
        const gS = "meter" === SS ? HS.lampLightMeterCatches : HS.lampLightBloomCatches;
        return null === gS ? null : this.translate("meter" === SS ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(gS))
        })
      }
      oddsLines(SS, HS) {
        const gS = (SS, HS) => {
            var gS;
            return null !== (gS = {
              bite: HS.lampLightBiteMs,
              rare: HS.lampLightRareChance,
              meter: HS.lampLightMeterCatches,
              bloom: HS.lampLightBloomCatches,
              notice: HS.lampLightNoticeChance
            } [SS]) && void 0 !== gS ? gS : 0
          },
          tS = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          bS = [];
        for (const XS of ["bite", "rare", "meter", "bloom", "notice"]) {
          const xS = this.formatOdds(XS, SS),
            NS = this.formatOdds(XS, HS);
          if (null === xS || null === NS || "bite" !== XS && "rare" !== XS && xS === NS) continue;
          const qS = gS(XS, HS) - gS(XS, SS),
            uS = tS[XS] ? qS < 0 : qS > 0;
          bS.push({
            label: XS,
            before: xS,
            after: NS,
            tone: xS === NS ? "same" : uS ? "better" : "worse"
          })
        }
        return bS
      }
      charmView(SS, HS, gS) {
        const tS = SS.lampLightCharmId.charAt(0).toUpperCase() + SS.lampLightCharmId.slice(1),
          bS = "bloom" === this.situation;
        return {
          id: SS.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${tS}`),
          effect: this.translate(`skyblockGame:lampLightCharm${tS}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(SS.lampLightCharmCost)
          }),
          owned: SS.lampLightCharmOwned,
          affordable: gS >= SS.lampLightCharmCost,
          socketed: HS.lampLightSocketed === SS.lampLightCharmId,
          lines: this.oddsLines(bS ? HS.lampLightBareBloom : HS.lampLightBareOpen, bS ? SS.lampLightCharmBloom : SS.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var SS, HS, gS, tS;
        const bS = this.message,
          XS = "ready" === (null === bS || void 0 === bS ? void 0 : bS.lampLightStatus) ? this.shop : null,
          xS = null !== (SS = null === bS || void 0 === bS ? void 0 : bS.lampLightBalance) && void 0 !== SS ? SS : 0,
          NS = this.atChair,
          qS = "loading" === (null === bS || void 0 === bS ? void 0 : bS.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === bS || void 0 === bS ? void 0 : bS.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          uS = "ready" !== (null === bS || void 0 === bS ? void 0 : bS.lampLightStatus) || NS ? null !== (HS = this.refusalKey) && void 0 !== HS ? HS : qS : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== bS && "locked" !== bS.lampLightStatus,
          status: null !== (gS = null === bS || void 0 === bS ? void 0 : bS.lampLightStatus) && void 0 !== gS ? gS : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(xS)
          }),
          releasing: null !== (tS = null === bS || void 0 === bS ? void 0 : bS.lampLightReleasing) && void 0 !== tS && tS,
          gained: null === bS || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === bS || void 0 === bS ? void 0 : bS.lampLightStatus) && NS && !this.isPending(),
          situation: this.situation,
          shop: null === XS ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: XS.lampLightOddsRod,
              island: this.translate(XS.lampLightIslandNameKey)
            }),
            heldRod: null !== XS.lampLightHeldRod,
            charms: XS.lampLightCharms.map((SS => this.charmView(SS, XS, xS))),
            tints: XS.lampLightTints.map((SS => {
              const HS = SS.lampLightTintId,
                [gS, tS, bS] = SS.lampLightTintColour;
              return {
                id: HS,
                name: this.translate(`skyblockGame:lampLightTint${HS.charAt(0).toUpperCase()}${HS.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(SS.lampLightTintCost)
                }),
                owned: SS.lampLightTintOwned,
                affordable: xS >= SS.lampLightTintCost,
                wearing: XS.lampLightTint === HS,
                colour: `rgb(${gS}, ${tS}, ${bS})`
              }
            })),
            wearingIslandColours: null === XS.lampLightTint
          },
          notice: null === uS ? null : this.translate(uS),
          sparkle: this.sparkle
        }
      }
    }
    const Wt = "skyblockMagmawardView";
    class zt {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.cj = SS, this.now = HS, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = sS.map((() => 0)), this.wornAt = sS.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      wK(SS) {
        var HS, gS;
        const tS = sS.map(((HS, gS) => !0 === SS.magmawardPiecesWorn[gS]));
        if (!tS.includes(!0)) return this.snapshot = null, void this.cj(null);
        const bS = this.now(),
          XS = this.snapshot;
        null === XS && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const xS = SS.magmawardFuelCarried,
          NS = !tS.includes(!1);
        let qS = null !== (HS = null === XS || void 0 === XS ? void 0 : XS.pulse) && void 0 !== HS ? HS : null,
          uS = null !== (gS = null === XS || void 0 === XS ? void 0 : XS.flare) && void 0 !== gS ? gS : null;
        SS.magmawardFuelBurned ? (qS = "burn", uS = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = bS, this.flareAt = bS) : null !== XS && xS > XS.fuel && (qS = "gain", this.pulseToken++, this.pulseAt = bS), NS && null !== XS && !XS.fullSet && (uS = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = bS, this.setLitAt = bS);
        const IS = sS.map(((SS, HS) => (tS[HS] && null !== XS && !XS.pieces[HS].worn && (this.wornTokens[HS]++, this.wornAt[HS] = bS), {
          itemName: SS,
          worn: tS[HS],
          wornToken: this.wornTokens[HS],
          justWorn: tS[HS] && this.isPlaying(this.wornAt[HS], bS)
        })));
        this.snapshot = {
          pieces: IS,
          wornCount: tS.filter(Boolean).length,
          fullSet: NS,
          fuel: xS,
          fuelState: xS <= 0 ? "empty" : xS <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, bS) ? qS : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, bS) ? uS : null,
          flareToken: this.flareToken,
          setLit: NS && this.isPlaying(this.setLitAt, bS),
          setLitToken: this.setLitToken
        }, this.cj(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.cj(null)
      }
      isPlaying(SS, HS) {
        return HS - SS < 1200
      }
    }
    const Ut = "skyblockGlowtideView";
    class pt {
      constructor(SS) {
        this.cj = SS, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = SS => {
          this.arrow = SS, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      wK(SS) {
        this.bloom = SS.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.cj(null))
      }
      afterRender(SS, HS) {
        const gS = this.bloom;
        if (null === gS || null === SS) return;
        const tS = gS.glowtideBloomX - SS[0],
          XS = gS.glowtideBloomZ - SS[2],
          xS = Math.hypot(tS, XS),
          NS = this.snapshot,
          qS = null !== NS && void 0 !== NS && NS.inRange ? 1 : 0,
          uS = xS <= 12.5 + qS && SS[1] - gS.glowtideBloomY <= 10 + qS;
        !uS || null !== NS && void 0 !== NS && NS.inRange || this.inRangeToken++;
        const IS = {
          colour: gS.glowtideBloomColour,
          inRange: uS,
          distance: Math.round(xS),
          inRangeToken: this.inRangeToken
        };
        (null === NS || IS.colour !== NS.colour || IS.inRange !== NS.inRange || !uS && IS.distance !== NS.distance) && (this.snapshot = IS, this.cj(IS));
        const fS = bS.b.computeShortestRotation(HS, (0, bS.ob)([tS, 0, XS]));
        null === this.arrow || Math.abs(fS - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${fS}rad)`, this.arrowTurn = fS)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.cj(null)
      }
    }
    const st = "skyblockGlowMeterView";
    class Bt {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.cj = SS, this.now = HS, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      wK(SS) {
        const HS = this.now(),
          {
            glowMeterFill: gS,
            glowMeterCapacity: tS
          } = SS,
          bS = gS >= tS,
          XS = this.snapshot;
        null !== XS && (bS && !XS.full && (this.fullToken++, this.fullAt = HS), XS.full && !bS ? (this.burstToken++, this.burstAt = HS) : gS > XS.fill && (this.gainToken++, this.gainAt = HS)), this.snapshot = {
          fill: gS,
          hf: tS,
          ratio: Math.min(1, Math.max(0, gS / tS)),
          full: bS,
          rares: SS.glowMeterRares,
          ready: bS && this.isPlaying(this.fullAt, HS),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, HS),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, HS),
          gainToken: this.gainToken
        }, this.cj(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.cj(null)
      }
      isPlaying(SS, HS) {
        return HS - SS < 2e3
      }
    }
    const Mt = "skyblockHushWaitView";
    class Ft {
      constructor(SS) {
        this.cj = SS, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      wK(SS) {
        let {
          hushWaitMs: HS,
          hushWaitTotalMs: gS,
          hushWaitLines: tS
        } = SS;
        if (this.clearTimers(), this.token++, 0 === tS.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (HS <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: tS[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const bS = Math.max(null !== gS && void 0 !== gS ? gS : HS, HS),
          XS = bS - HS,
          xS = SS => bS * SS / tS.length,
          NS = SS => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: bS,
              elapsedMs: XS,
              line: tS[SS],
              lineIndex: SS
            })
          };
        let qS = 0;
        for (; qS + 1 < tS.length && xS(qS + 1) <= XS;) qS++;
        NS(qS);
        for (let uS = qS + 1; uS < tS.length; uS++) this.later(xS(uS) - XS, (() => {
          NS(uS)
        }));
        this.later(HS, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(SS) {
        this.snapshot = SS, this.cj(SS)
      }
      later(SS, HS) {
        this.timers.push(setTimeout(HS, SS))
      }
      clearTimers() {
        for (const SS of this.timers) clearTimeout(SS);
        this.timers = []
      }
    }
    const Rt = "skyblockTideChartsView",
      Tt = 36e5,
      ot = 864e5;

    function lt(SS, HS, gS) {
      const [tS, bS, XS, xS] = SS.tideChartArea, NS = Math.floor(HS), qS = Math.floor(gS);
      return NS >= tS && NS <= XS && qS >= bS && qS <= xS
    }

    function mt(SS, HS, gS) {
      const [tS, bS, XS, xS] = SS.tideChartWater;
      return function(SS, HS, gS, tS, bS, XS) {
        const xS = 4 - BS(Math.floor(bS) - (SS - gS), gS);
        return 5 * BS(Math.floor(XS) - (HS - tS), tS) + xS
      }(tS, bS, XS, xS, HS, gS)
    }

    function et(SS, HS, gS) {
      const tS = SS.tideCharts;
      for (let bS = 0; bS < tS.length; bS++)
        if (lt(tS[bS], HS, gS)) return tS[bS];
      return null
    }

    function rt(SS, HS, gS) {
      const tS = Math.max(0, HS - gS);
      return tS > ot ? SS("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(tS / ot))
      }) : tS > Tt ? SS("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(tS / Tt))
      }) : SS("skyblockGame:tideChartsTurnSoon")
    }
    class Sb extends fS {
      constructor(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(SS, gS, tS), this.translate = HS, this.now = bS, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Sa = SS => {
          this.picked = SS, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      wK(SS) {
        const HS = this.message;
        if (null !== HS)
          for (const tS of SS.tideCharts) {
            var gS;
            const SS = HS.tideCharts.find((SS => SS.tideChartIsland === tS.tideChartIsland)),
              bS = tS.tideChartLit & ~(null !== (gS = null === SS || void 0 === SS ? void 0 : SS.tideChartLit) && void 0 !== gS ? gS : 0);
            void 0 !== SS && 0 !== bS && (this.pulse = {
              island: tS.tideChartIsland,
              cells: bS,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = SS, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(SS, HS) {
        var gS;
        const tS = null === this.message || Number.isNaN(SS) ? null : et(this.message, SS, HS),
          bS = null !== (gS = null === tS || void 0 === tS ? void 0 : tS.tideChartIsland) && void 0 !== gS ? gS : null,
          XS = null === tS ? -1 : function(SS, HS, gS) {
            const [tS, bS, XS, xS] = SS.tideChartWater;
            return function(SS, HS, gS, tS, bS, XS, xS) {
              return ((bS - SS) / (gS + xS)) ** 2 + ((XS - HS) / (tS + xS)) ** 2 <= 1
            }(tS, bS, XS, xS, HS, gS, 2) ? mt(SS, HS, gS) : -1
          }(tS, SS, HS);
        return (bS !== this.hereIsland || XS !== this.hereCell) && (this.hereIsland = bS, this.hereCell = XS, null !== bS && (this.lastIsland = bS), !0)
      }
      afterRender(SS) {
        if (null === this.message) return;
        this.lastX = null === SS ? Number.NaN : SS[0], this.lastZ = null === SS ? Number.NaN : SS[2];
        const HS = this.locate(this.lastX, this.lastZ),
          gS = this.expirePulses();
        (HS || gS || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const SS = this.now();
        return !(!this.open || SS - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = SS, rt(this.translate, this.message.tideChartTurnsInMs, SS - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(SS, HS) {
        const gS = null === this.message ? null : et(this.message, SS, HS);
        if (null === gS) return;
        const tS = mt(gS, SS, HS);
        0 === (gS.tideChartPreBlank & 1 << tS) && (this.cast = {
          island: gS.tideChartIsland,
          cell: tS,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const SS = this.now();
        let HS = !1;
        return 0 !== this.pulse.cells && SS - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, HS = !0), null !== this.cast && SS - this.cast.atMs >= 1500 && (this.cast = null, HS = !0), HS
      }
      setTranslator(SS) {
        this.translate = SS, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(SS, HS) {
        var gS;
        return null !== (gS = SS.tideCharts.find((SS => SS.tideChartIsland === HS))) && void 0 !== gS ? gS : null
      }
      describe(SS) {
        var HS, gS, tS;
        const bS = SS.tideChartIsland,
          XS = [];
        for (let aS = 0; aS < 25; aS++) {
          const HS = 1 << aS;
          0 !== (SS.tideChartLit & HS) ? XS.push("lit") : 0 !== (SS.tideChartClear & HS) ? XS.push("clear") : 0 !== (SS.tideChartPreBlank & HS) ? XS.push("shore") : XS.push("water")
        }
        const xS = function(SS) {
            let HS = 0;
            for (let gS = SS >>> 0; 0 !== gS; gS &= gS - 1) HS++;
            return HS
          }(SS.tideChartLit),
          NS = SS.tideChartInkCount,
          qS = this.translate(SS.tideChartIslandNameKey),
          uS = this.translate("skyblockGame:tideChartsLit", {
            lit: String(xS),
            ink: String(NS)
          }),
          IS = null === SS.tideChartPictureNameKey ? null : this.translate(SS.tideChartPictureNameKey),
          fS = this.hereIsland === bS && -1 !== this.hereCell ? this.hereCell : null,
          kS = [`${qS}: ${uS}.`];
        if (null !== IS && kS.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: IS
          })), null !== fS) {
          const SS = Math.floor(fS / 5) + 1,
            HS = fS % 5 + 1;
          kS.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(SS),
            column: String(HS)
          }))
        }
        return {
          island: bS,
          islandName: qS,
          cells: XS,
          hereCell: fS,
          lit: xS,
          ink: NS,
          litText: uS,
          pictureName: IS,
          gridLabel: kS.join(" "),
          pulseCells: this.pulse.island === bS ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (HS = this.cast) || void 0 === HS ? void 0 : HS.island) === bS ? this.cast.cell : null,
          castToken: null !== (gS = null === (tS = this.cast) || void 0 === tS ? void 0 : tS.token) && void 0 !== gS ? gS : 0
        }
      }
      buildSnapshot() {
        var SS, HS, gS;
        const tS = this.message;
        if (null === tS || 0 === tS.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const bS = this.findChart(tS, this.hereIsland),
          XS = null !== (SS = null !== (HS = null !== (gS = this.findChart(tS, this.open ? this.picked : null)) && void 0 !== gS ? gS : bS) && void 0 !== HS ? HS : this.findChart(tS, this.lastIsland)) && void 0 !== SS ? SS : tS.tideCharts[0],
          xS = null === bS ? null : this.describe(bS);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: xS,
          card: XS === bS ? xS : this.describe(XS),
          turnsText: rt(this.translate, tS.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(tS.tideChartBookCount)
          }),
          tabs: tS.tideCharts.map((SS => ({
            island: SS.tideChartIsland,
            name: this.translate(SS.tideChartIslandNameKey),
            selected: SS.tideChartIsland === XS.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Hb = "skyblockRegularsView",
      gb = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      tb = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function bb(SS, HS) {
      return "given" === SS ? HS.given : "owed" === SS ? HS.owed : HS.goal
    }
    class Xb extends fS {
      constructor(SS, HS, gS, tS) {
        super(SS, gS, tS), this.translate = HS, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = SS => SS, this.openIsland = SS => {
          this.selected = SS, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = SS => {
          this.selected = SS, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      wK(SS) {
        this.message = SS, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const SS = this.openedFromReachLog;
        return this.openedFromReachLog = !1, SS
      }
      setTranslator(SS, HS, gS) {
        this.translate = SS, void 0 !== gS && (this.itemName = gS), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(SS, HS, gS) {
        return {
          text: this.translate(bb(SS, HS), gS),
          given: "given" === SS
        }
      }
      describeRegular(SS, HS) {
        const gS = this.translate,
          tS = null !== SS.regularKg,
          bS = SS.regularMeetings,
          XS = tS ? 0 === bS ? gS("skyblockGame:regularsNotMet") : 1 === bS ? gS("skyblockGame:regularsMeetingsOne") : gS("skyblockGame:regularsMeetings", {
            count: bS
          }) : "";
        return {
          id: SS.regularId,
          name: gS(SS.regularNameKey),
          line: gS(SS.regularLineKey),
          itemName: SS.regularFishItem,
          fishName: this.itemName(SS.regularFishItem),
          tagged: tS,
          size: null === SS.regularKg ? gS("skyblockGame:regularsNotTagged") : gS("skyblockGame:regularsSize", {
            kg: SS.regularKg.toFixed(1)
          }),
          meetings: XS,
          chance: gS("skyblockGame:regularsChance", {
            count: SS.regularOneInCasts
          }),
          resting: SS.regularRestingToday,
          gifts: [{
            text: gS("skyblockGame:regularsGiftFlare"),
            given: bS >= 3
          }, this.describeGift(SS.regularTintGift, gb, {
            tint: gS(SS.regularTintNameKey)
          })],
          history: [...SS.regularHistory].reverse().map((SS => {
            const tS = SS.regularMeetingKg.toFixed(1),
              bS = HS - SS.regularMeetingDay;
            return bS <= 0 ? gS("skyblockGame:regularsToday", {
              kg: tS
            }) : gS("skyblockGame:regularsDaysAgo", {
              days: bS,
              kg: tS
            })
          }))
        }
      }
      describeIsland(SS, HS) {
        return {
          id: SS.regularsIslandId,
          name: this.translate(SS.regularsIslandNameKey),
          charm: this.describeGift(SS.regularsCharmGift, tb, {
            charm: this.translate(SS.regularsCharmNameKey)
          }),
          regulars: SS.regularsList.map((SS => this.describeRegular(SS, HS)))
        }
      }
      buildSnapshot() {
        var SS, HS, gS, tS;
        const bS = this.message;
        if (null === bS) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const XS = bS.regularsIslands.map((SS => this.describeIsland(SS, bS.regularsToday))),
          xS = null !== (SS = null !== (HS = null === (gS = XS.find((SS => SS.id === this.selected))) || void 0 === gS ? void 0 : gS.id) && void 0 !== HS ? HS : null === (tS = XS[0]) || void 0 === tS ? void 0 : tS.id) && void 0 !== SS ? SS : "";
        return {
          enabled: !0,
          open: this.open,
          selected: xS,
          islands: XS
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const xb = "skyblockHiddenWatersView";
    class Nb {
      constructor(SS) {
        this.cj = SS, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      wK(SS) {
        this.snapshot = function(SS) {
          const [HS, gS] = SS.hiddenWatersMapSize, tS = (SS, tS) => ({
            left: 1 - SS / HS,
            top: tS / gS
          }), bS = new Map;
          for (const [xS, NS] of SS.hiddenWatersGlimpses) {
            var XS;
            const SS = null !== (XS = bS.get(xS)) && void 0 !== XS ? XS : [];
            SS.push(NS), bS.set(xS, SS)
          }
          return {
            found: SS.hiddenWatersFound,
            total: SS.hiddenWatersTotal,
            aspect: gS / HS,
            pins: SS.hiddenWatersPins.map((SS => {
              let [HS, gS] = SS;
              return tS(HS, gS)
            })),
            islands: SS.hiddenWatersIslands.map((SS => {
              let [bS, XS, xS, NS] = SS;
              const {
                left: qS,
                top: uS
              } = tS(xS + 1, XS);
              return {
                left: qS,
                top: uS,
                width: (xS + 1 - bS) / HS,
                height: (NS + 1 - XS) / gS
              }
            })),
            glimpses: bS
          }
        }(SS), this.cj(this.snapshot)
      }
    }
    const qb = "skyblockDialogueView";
    class ub extends fS {
      constructor(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(SS, gS, tS), this.translate = HS, this.requestDialogue = bS, this.now = XS, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = SS => {
          this.selection = {
            kind: "quest",
            questId: SS
          }, this.request(), this.show()
        }, this.selectCharacter = SS => {
          this.selection = {
            kind: "character",
            npcId: SS
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      wK(SS) {
        this.received = !0, this.scripts = SS.questDialogueScripts, this.speakers = new Map(SS.questDialogueSpeakers.map((SS => [SS.dialogueSpeakerId, SS]))), this.emit()
      }
      setTranslator(SS) {
        this.translate = SS, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const SS = this.now();
        SS >= this.requestAvailableAt && (this.requestAvailableAt = SS + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var SS;
        const HS = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...HS,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const gS = this.selection;
        if ("quest" === gS.kind) {
          const SS = this.scripts.find((SS => SS.dialogueQuestId === gS.questId));
          return {
            ...HS,
            characters: [],
            questFocus: gS.questId,
            conversations: SS ? [this.conversation(SS)] : []
          }
        }
        const tS = [];
        for (let XS = this.scripts.length - 1; XS >= 0; XS--) {
          const SS = this.scripts[XS].dialogueLines;
          for (let HS = SS.length - 1; HS >= 0; HS--) tS.includes(SS[HS].dialogueSpeakerId) || tS.push(SS[HS].dialogueSpeakerId)
        }
        const bS = null !== gS.npcId && tS.includes(gS.npcId) ? gS.npcId : null !== (SS = tS[0]) && void 0 !== SS ? SS : null;
        return {
          ...HS,
          characters: tS.map((SS => {
            var HS, gS;
            return {
              id: SS,
              styling: null !== (HS = null === (gS = this.speakers.get(SS)) || void 0 === gS ? void 0 : gS.dialogueSpeakerStyling) && void 0 !== HS ? HS : SS,
              selected: SS === bS
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((SS => SS.dialogueLines.some((SS => SS.dialogueSpeakerId === bS)))).map((SS => this.conversation(SS))).reverse()
        }
      }
      conversation(SS) {
        let HS = null;
        return {
          questId: SS.dialogueQuestId,
          questName: this.translate(SS.dialogueQuestNameKey),
          completed: SS.dialogueQuestCompleted,
          lines: SS.dialogueLines.map(((SS, gS) => {
            var tS;
            const bS = SS.dialogueSpeakerId === HS || null === (tS = this.speakers.get(SS.dialogueSpeakerId)) || void 0 === tS ? void 0 : tS.dialogueSpeakerStyling;
            return HS = SS.dialogueSpeakerId, {
              key: gS,
              display: {
                line: {
                  translationKey: SS.dialogueLineKey,
                  params: this.params(SS.dialogueLineParams)
                },
                speakerName: bS,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(SS) {
        if (void 0 !== SS) return Object.fromEntries(Object.entries(SS).map((SS => {
          let [HS, gS] = SS;
          return [HS, "string" === typeof gS ? gS : this.translate(gS.translationKey)]
        })))
      }
    }
    var Ib = gS(656),
      fb = gS(1348),
      kb = gS(104);
    const ab = "skyblockAutographsView";

    function Kb(SS) {
      const HS = Ib.m[SS];
      return {
        label: HS.chatTag.map((SS => SS.str)).join(""),
        icon: HS.icon,
        colour: HS.mainRGB
      }
    }
    class jb extends fS {
      constructor(SS) {
        let HS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = HS, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      wK(SS) {
        this.signatures = SS.autographSignatures, SS.autographOpen ? this.show() : this.emit()
      }
      setTranslator(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = HS, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var SS;
        const HS = null !== (SS = this.signatures) && void 0 !== SS ? SS : [],
          gS = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          tS = [...HS].sort(((SS, HS) => Number(null !== HS.autographRank) - Number(null !== SS.autographRank) || HS.autographSignedAtMs - SS.autographSignedAtMs)).map((SS => ({
            key: `${SS.autographSignedAtMs}|${SS.autographSignerName}`,
            name: (0, fb.d)(SS.autographSignerName, !kb.featureFlags.canSeeRealPlayerNames),
            rank: null === SS.autographRank ? null : Kb(SS.autographRank),
            signedOn: gS.format(SS.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: tS,
          total: tS.length,
          rankTotal: tS.filter((SS => null !== SS.rank)).length
        }
      }
    }
    const Gb = "skyblockHudView",
      Cb = () => {},
      nb = {
        getItem: () => null,
        setItem: Cb,
        removeItem: Cb
      };
    class Pb {
      constructor(SS) {
        let {
          translate: HS,
          translateWithIcons: gS,
          setMenuOpen: tS = Cb,
          dismissMenu: bS = () => {
            tS(!1)
          },
          publishSkills: XS = Cb,
          publishQuests: xS = Cb,
          publishQuestNotification: NS = Cb,
          publishDungeons: qS = Cb,
          publishCollections: uS = Cb,
          publishMap: IS = Cb,
          publishHud: fS = Cb,
          publishPortalTransit: kS = Cb,
          publishDailyReward: KS = Cb,
          publishMailbox: jS = Cb,
          publishQuestGraph: GS = Cb,
          publishForge: CS = Cb,
          publishSmuggler: nS = Cb,
          publishKeepersChair: PS = Cb,
          publishReachLog: QS = Cb,
          publishLampLight: DS = Cb,
          publishMagmaward: wS = Cb,
          publishGlowtide: ZS = Cb,
          publishGlowMeter: JS = Cb,
          publishHushWait: OS = Cb,
          publishPassage: dS = Cb,
          publishTideCharts: cS = Cb,
          publishRegulars: vS = Cb,
          publishHiddenWaters: ES = Cb,
          publishDialogue: LS = Cb,
          publishAutographs: YS = Cb,
          isLoadingScreenUp: AS = () => !1,
          onDailyRewardCoinLanded: yS = Cb,
          onDailyRewardStarted: VS = Cb,
          onDailyRewardFinished: iS = Cb,
          onDailyRewardItemLanded: WS = Cb,
          onMailboxStarted: zS = Cb,
          journeyStorage: US = nb,
          requestTracking: pS = Cb,
          requestTravel: sS = Cb,
          requestDungeonEnter: BS = Cb,
          requestQuestJump: MS = Cb,
          requestQuestArrive: FS = Cb,
          requestForge: RS = Cb,
          requestSmuggle: TS = Cb,
          requestKeepersChairAim: oS = Cb,
          requestReachLogOpen: lS = Cb,
          requestLampLight: mS = Cb,
          requestDialogue: eS = Cb
        } = SS;
        this.navigation = void 0, this.map = void 0, this.compass = new hS, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Ot.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = SS => SS, this.close = () => {
          for (const SS of this.panels) SS.close()
        }, this.setMenuOpen = tS, this.publishHud = fS, this.portalTransit = new zg(kS, US), this.magmaward = new zt(wS), this.glowtide = new pt(ZS), this.glowMeter = new Bt(JS), this.hushWait = new Ft(OS), this.dailyReward = new sg(KS, (() => AS() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (SS => {
          this.quests.setNotificationsHeld(SS)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), yS, VS, iS, WS);
        const rS = SS => {
          this.panels.some((SS => SS.isOpen())) || (SS ? bS() : this.setMenuOpen(!1))
        };
        this.skills = new xg(XS, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), HS, void 0, void 0, rS), this.quests = new fg(xS, pS, HS, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, rS, NS), this.dungeons = new Kg(qS, HS, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, rS, BS), this.collections = new Vg(uS, HS, (() => {
          this.beforePanelOpen(this.collections)
        }), rS), this.map = new aS(IS, sS, HS, (() => {
          this.beforePanelOpen(this.map)
        }), rS), this.questGraph = new eg(GS, HS, (() => {
          this.beforePanelOpen(this.questGraph)
        }), rS, MS, FS, US), this.forge = new Ct(CS, HS, (() => {
          this.beforePanelOpen(this.forge)
        }), rS, RS), this.smuggler = new Qt(nS, HS, (() => {
          this.beforePanelOpen(this.smuggler)
        }), rS, TS), this.lampLight = new it(DS, HS, mS, this.commandPacer), this.keepersChair = new ct(PS, HS, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (SS => {
          this.lampLight.onChairClosed(), rS(SS)
        }), oS, Date.now, this.commandPacer), this.reachLog = new yt(QS, HS, (() => {
          this.beforePanelOpen(this.reachLog)
        }), rS, lS, this.commandPacer), this.passage = new Jt(dS, HS, (() => {
          this.beforePanelOpen(this.passage)
        }), rS), this.tideCharts = new Sb(cS, HS, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), rS), this.regulars = new Xb(vS, HS, (() => {
          this.beforePanelOpen(this.regulars)
        }), (SS => {
          this.regulars.takeReturnToReachLog() && !SS && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), rS(SS)
        })), this.hiddenWaters = new Nb(ES), this.dialogue = new ub(LS, HS, (() => {
          this.beforePanelOpen(this.dialogue)
        }), rS, eS), this.autographs = new jb(YS, (() => {
          this.beforePanelOpen(this.autographs)
        }), rS), this.mailbox = new Rg(jS, (() => AS() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), zS), this.quests.translateWithIcons = null !== gS && void 0 !== gS ? gS : null, this.skills.onLevelUp = SS => {
          this.quests.notify(SS)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new bg(this.map, this.quests, this.compass, HS)
      }
      getHudSnapshot() {
        const SS = this.hudSnapshot,
          HS = this.dailyReward.getHeldCoins();
        return null === SS || HS <= 0 || !("hudPurseCoins" in SS) ? SS : {
          ...SS,
          hudPurseCoins: Math.max(0, SS.hudPurseCoins - HS)
        }
      }
      receiveHud(SS) {
        this.hudSnapshot = SS, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(SS) {
        this.setMenuOpen(!0);
        const HS = SS === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = SS;
        for (const gS of this.panels) gS === SS || HS && gS === this.reachLog || gS.close();
        this.openingPanel = null
      }
      setTranslator(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HS => this.resolveItemName(HS, SS);
        this.quests.translateWithIcons = null !== gS && void 0 !== gS ? gS : null, this.navigation.setTranslator(SS, HS), this.lampLight.setTranslator(SS, HS), this.mailbox.setItemName(tS);
        for (const bS of this.panels) bS.setTranslator(SS, HS, tS)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const SS of this.panels) SS.dispose()
      }
    }
    var Qb = gS(1121),
      Db = gS.n(Qb),
      wb = gS(24),
      hb = gS(36616),
      Zb = gS(3544),
      Jb = gS(2050),
      Ob = gS(2031),
      db = gS(34256),
      cb = gS(1281),
      vb = gS(1522),
      Eb = gS(1181);

    function Lb(SS) {
      let {
        controller: HS,
        minimap: gS,
        children: tS
      } = SS;
      const XS = (0, vb.i)(Gb, HS.getHudSnapshot()),
        [xS, NS] = (0, JS.useState)(HS.skills.getSnapshot().overallLevel);
      (0, vb.g)(Xg, (SS => {
        NS(SS.overallLevel)
      }));
      const qS = (0, JS.useRef)(null);
      (0, vb.g)(pg, (SS => {
        ! function(SS, HS) {
          if (null === SS || "function" !== typeof SS.animate) return;
          const gS = HS ? 1.35 : 1.15;
          SS.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${gS})`
          }, {
            transform: "scale(1)"
          }], {
            duration: HS ? 320 : 160,
            easing: "ease-out"
          }), SS.classList.toggle("Receiving", !HS), HS && (SS.classList.remove("Shine"), SS.offsetWidth, SS.classList.add("Shine"))
        }(qS.current, SS)
      }));
      const {
        t: uS
      } = (0, cb.F)(), {
        isTouchScreen: IS
      } = (0, wb.m)(["isTouchScreen"]), [fS, kS] = (0, JS.useState)(null);
      return (0, Zb.i)(fS, ".SkyblockRightHud"), null !== XS || gS ? (0, Eb.jsx)(hb.g, {
        placement: "topRight",
        children: (0, Eb.jsxs)("div", {
          className: Db()("SkyblockRightHud", {
            TouchScreen: IS
          }),
          children: [gS, null !== XS && (0, Eb.jsxs)("div", {
            ref: kS,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in XS ? (0, Eb.jsx)("div", {
              className: "SkyblockHudHelp",
              children: XS.hudHelpText
            }) : (0, Eb.jsxs)(Eb.Fragment, {
              children: [(0, Eb.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Eb.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Eb.jsx)("strong", {
                    style: {
                      color: bS.B.cyanUiText
                    },
                    children: uS(XS.hudZoneNameKey)
                  }), null !== xS && (0, Eb.jsx)("span", {
                    style: {
                      color: bS.B.goldUiText
                    },
                    children: uS("skyblockGame:level", {
                      level: (0, db.f)(xS)
                    })
                  })]
                }), (0, Eb.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: qS,
                  children: [(0, Eb.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Eb.jsx)(Jb.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, db.f)(XS.hudPurseCoins)]
                })]
              }), XS.hudClockText.length > 0 && (0, Eb.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Eb.jsx)(Ob.c, {
                  text: XS.hudClockText
                })
              })]
            }), tS, "hudZoneNameKey" in XS && (0, Eb.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Yb(SS) {
      let {
        icon: HS
      } = SS;
      const gS = (0, JS.useCallback)((SS => {
        null === SS || void 0 === SS || SS.replaceChildren(FH(HS))
      }), [HS]);
      return (0, Eb.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: gS
      })
    }

    function Ab(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)();
      return (0, Eb.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: HS.display.mountPlayer,
        title: gS("skyblockGame:mapYouAreHere"),
        children: (0, Eb.jsx)(Yb, {
          icon: "player"
        })
      })
    }
    const yb = gS(38570),
      Vb = Object.fromEntries(yb.keys().map((SS => [SS.replace(/^\.\/(.*)\.png$/, "$1"), yb(SS)])));

    function ib(SS, HS) {
      var gS;
      return null !== (gS = Vb[SS]) && void 0 !== gS ? gS : Vb[HS]
    }

    function Wb(SS) {
      let {
        imageKey: HS,
        fallbackImageKey: gS,
        geometryKey: tS,
        alt: bS,
        className: XS
      } = SS;
      const [xS, NS] = (0, JS.useState)((() => function(SS, HS) {
        return [{
          id: 0,
          imageKey: SS,
          geometryKey: HS,
          phase: "shown"
        }]
      }(HS, tS))), qS = function(SS, HS, gS) {
        const tS = SS[SS.length - 1];
        if (tS.imageKey === HS && tS.geometryKey === gS) return SS;
        const bS = {
          id: tS.id + 1,
          imageKey: HS,
          geometryKey: gS,
          phase: "entering"
        };
        return tS.geometryKey === gS ? [{
          ...tS,
          phase: "leaving"
        }, bS] : [bS]
      }(xS, HS, tS);
      return qS !== xS && NS(qS), (0, Eb.jsx)(Eb.Fragment, {
        children: qS.map((SS => (0, Eb.jsx)("img", {
          className: Db()("SkyblockMapTerrainImage", XS, {
            Entering: "entering" === SS.phase,
            Leaving: "leaving" === SS.phase
          }),
          src: ib(SS.imageKey, gS),
          alt: "leaving" === SS.phase ? "" : bS,
          onAnimationEnd: () => {
            NS((HS => function(SS, HS) {
              return SS.flatMap((SS => SS.id !== HS ? [SS] : "leaving" === SS.phase ? [] : [{
                ...SS,
                phase: "shown"
              }]))
            }(HS, SS.id)))
          }
        }, SS.id)))
      })
    }
    var zb = gS(4662),
      Ub = gS(1528);

    function pb(SS) {
      if ("Tab" !== SS.key) return;
      const HS = Array.from(SS.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        gS = HS.indexOf(document.activeElement);
      var tS;
      if (SS.shiftKey && gS <= 0) SS.preventDefault(), null === (tS = HS.at(-1)) || void 0 === tS || tS.focus();
      else if (!SS.shiftKey && (-1 === gS || gS === HS.length - 1)) {
        var bS;
        SS.preventDefault(), null === (bS = HS[0]) || void 0 === bS || bS.focus()
      }
    }

    function sb() {
      const SS = (0, JS.useRef)(null);
      return (0, JS.useCallback)((HS => {
        var gS;
        HS ? (SS.current = document.activeElement, HS.focus()) : null === (gS = SS.current) || void 0 === gS || gS.focus()
      }), [])
    }

    function Bb(SS) {
      let {
        percent: HS,
        label: gS,
        levelUpToken: tS,
        colour: bS
      } = SS;
      return (0, Eb.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": gS,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": HS,
        "aria-valuetext": gS,
        children: [(0, Eb.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${HS/100})`
          }
        }), null !== tS && void 0 !== tS && (0, Eb.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": bS
          }
        }, tS)]
      })
    }

    function Mb(SS) {
      let {
        mount: HS
      } = SS;
      return (0, Eb.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: HS,
        hidden: !0,
        children: (0, Eb.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Eb.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Eb.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Fb(SS, HS, gS, tS) {
      (0, JS.useLayoutEffect)((() => {
        const bS = SS.current;
        if (!gS || null === HS || void 0 === HS || !HS.local || !bS) return;
        const XS = Array.from(bS.querySelectorAll(".SkyblockMapNode")),
          xS = [...HS.points, ...HS.portals],
          NS = () => {
            const SS = bS.clientWidth,
              gS = bS.clientHeight,
              NS = XS.map(((bS, XS) => {
                const NS = xS[XS];
                return {
                  id: NS.id,
                  portal: XS >= HS.points.length,
                  x: NS.position[0] * SS / 100,
                  y: NS.position[1] * gS / 100,
                  width: bS.offsetWidth / tS,
                  height: bS.offsetHeight / tS
                }
              })),
              qS = new Map(xS.map(((SS, HS) => [SS.id, XS[HS]])));
            for (const HS of function(SS, HS, gS) {
                const tS = [],
                  bS = [...SS].sort(((SS, HS) => Number(HS.portal) - Number(SS.portal) || SS.id.localeCompare(HS.id)));
                for (const XS of bS) {
                  const SS = SS => Math.max(XS.width / 2, Math.min(HS - XS.width / 2, SS)),
                    bS = SS => Math.max(XS.height / 2, Math.min(gS - XS.height / 2, SS)),
                    xS = [SS(XS.x)],
                    NS = [bS(XS.y)];
                  for (const HS of tS) xS.push(SS(HS.x - (HS.width + XS.width) / 2 - 4), SS(HS.x + (HS.width + XS.width) / 2 + 4)), NS.push(bS(HS.y - (HS.height + XS.height) / 2 - 4), bS(HS.y + (HS.height + XS.height) / 2 + 4));
                  let qS = {
                      ...XS,
                      x: xS[0],
                      y: NS[0]
                    },
                    uS = 1 / 0,
                    IS = 1 / 0;
                  for (const HS of new Set(xS))
                    for (const SS of new Set(NS)) {
                      let gS = 0;
                      for (const xS of tS) gS += Math.max(0, (XS.width + xS.width) / 2 + 4 - Math.abs(HS - xS.x)) * Math.max(0, (XS.height + xS.height) / 2 + 4 - Math.abs(SS - xS.y));
                      const bS = (HS - XS.x) ** 2 + (SS - XS.y) ** 2;
                      (gS < uS || gS === uS && bS < IS) && (qS = {
                        ...XS,
                        x: HS,
                        y: SS
                      }, uS = gS, IS = bS)
                    }
                  tS.push(qS)
                }
                return tS
              }(NS, SS, gS)) {
              const SS = qS.get(HS.id);
              SS.style.left = `${HS.x}px`, SS.style.top = `${HS.y}px`
            }
          };
        NS();
        const qS = new ResizeObserver(NS);
        qS.observe(bS);
        for (const SS of XS) qS.observe(SS);
        return () => {
          qS.disconnect()
        }
      }), [SS, HS, gS, tS])
    }
    const Rb = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Tb = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function ob(SS, HS, gS) {
      return Math.min(gS, Math.max(HS, SS))
    }

    function lb(SS, HS, gS) {
      const tS = Math.min(1, gS * HS / SS),
        bS = Math.min(1, SS / (gS * HS));
      return {
        x0: (1 - tS) / 2,
        y0: (1 - bS) / 2,
        x1: (1 + tS) / 2,
        y1: (1 + bS) / 2
      }
    }

    function mb(SS, HS, gS, tS) {
      const bS = HS * (tS - gS);
      if (bS <= 1) return .5 - HS * (gS + tS) / 2;
      const XS = .45 * Math.min(1, bS - 1);
      return ob(SS, 1 - HS * tS - XS, XS - HS * gS)
    }

    function eb(SS, HS) {
      const gS = ob(SS.zoom, 1, 12);
      return {
        zoom: gS,
        x: mb(SS.x, gS, HS.x0, HS.x1),
        y: mb(SS.y, gS, HS.y0, HS.y1)
      }
    }

    function rb(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Tb;
      const XS = ob(SS.zoom * HS, 1, 12),
        xS = XS / SS.zoom;
      return eb({
        zoom: XS,
        x: gS - (gS - SS.x) * xS,
        y: tS - (tS - SS.y) * xS
      }, bS)
    }

    function SX(SS, HS, gS, tS) {
      const [bS, XS] = (0, JS.useState)(Rb);
      (0, JS.useEffect)((() => {
        XS(Rb)
      }), [gS]), (0, JS.useEffect)((() => {
        const gS = SS.current;
        if (!HS || !gS) return;
        const bS = () => lb(gS.clientWidth, gS.clientHeight, tS),
          xS = SS => {
            const HS = gS.getBoundingClientRect();
            return {
              x: (SS.clientX - HS.left) / HS.width,
              y: (SS.clientY - HS.top) / HS.height
            }
          },
          NS = new Map;
        let qS = {
            x: 0,
            y: 0
          },
          uS = !1,
          IS = 0;
        const fS = SS => {
            SS.preventDefault();
            const HS = SS.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * SS.deltaY : SS.deltaY,
              gS = xS(SS);
            XS((SS => rb(SS, Math.exp(.0015 * -HS), gS.x, gS.y, bS())))
          },
          kS = SS => {
            "mouse" === SS.pointerType && 0 !== SS.button || (NS.set(SS.pointerId, xS(SS)), 1 === NS.size && (qS = {
              x: SS.clientX,
              y: SS.clientY
            }, uS = !1), IS = 0)
          },
          aS = SS => {
            const HS = NS.get(SS.pointerId);
            if (!HS) return;
            const tS = xS(SS);
            if (NS.set(SS.pointerId, tS), 2 === NS.size) {
              const [SS, HS] = [...NS.values()], gS = Math.hypot(SS.x - HS.x, SS.y - HS.y);
              if (IS > 0) {
                const tS = gS / IS;
                XS((gS => rb(gS, tS, (SS.x + HS.x) / 2, (SS.y + HS.y) / 2, bS())))
              }
              return IS = gS, void(uS = !0)
            }!uS && Math.hypot(SS.clientX - qS.x, SS.clientY - qS.y) < 4 || (uS || (uS = !0, gS.setPointerCapture(SS.pointerId)), XS((SS => function(SS, HS, gS) {
              let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tb;
              return eb({
                zoom: SS.zoom,
                x: SS.x + HS,
                y: SS.y + gS
              }, tS)
            }(SS, tS.x - HS.x, tS.y - HS.y, bS()))))
          },
          KS = SS => {
            NS.delete(SS.pointerId), IS = 0
          },
          jS = SS => {
            uS && (SS.stopPropagation(), SS.preventDefault(), uS = !1)
          },
          GS = new ResizeObserver((() => {
            XS((SS => eb(SS, bS())))
          }));
        return GS.observe(gS), gS.addEventListener("wheel", fS, {
          passive: !1
        }), gS.addEventListener("pointerdown", kS), gS.addEventListener("pointermove", aS), gS.addEventListener("pointerup", KS), gS.addEventListener("pointercancel", KS), gS.addEventListener("click", jS, !0), () => {
          GS.disconnect(), gS.removeEventListener("wheel", fS), gS.removeEventListener("pointerdown", kS), gS.removeEventListener("pointermove", aS), gS.removeEventListener("pointerup", KS), gS.removeEventListener("pointercancel", KS), gS.removeEventListener("click", jS, !0)
        }
      }), [SS, HS, gS, tS]);
      return {
        view: bS,
        zoomBy: HS => {
          const gS = SS.current;
          gS && XS((SS => rb(SS, HS, .5, .5, lb(gS.clientWidth, gS.clientHeight, tS))))
        }
      }
    }

    function HX(SS) {
      var HS, gS, tS, bS;
      let {
        controller: XS,
        navigation: xS
      } = SS;
      const NS = (0, vb.i)(kS, XS.getSnapshot()),
        {
          t: qS
        } = (0, cb.F)(),
        uS = sb(),
        IS = NS.presentation,
        fS = (0, JS.useRef)(null),
        aS = (0, JS.useRef)(null),
        KS = Boolean(NS.open && (null === IS || void 0 === IS ? void 0 : IS.local) && IS.background),
        jS = SX(fS, KS, `${NS.open}|${NS.tab}|${null===IS||void 0===IS||null===(HS=IS.background)||void 0===HS?void 0:HS.geometryKey}`, null !== (gS = null === IS || void 0 === IS || null === (tS = IS.background) || void 0 === tS ? void 0 : tS.ratio) && void 0 !== gS ? gS : 2);
      if (Fb(aS, IS, NS.open, jS.view.zoom), !IS || !NS.open) return null;
      const GS = IS.local ? IS.background : null,
        CS = {
          "--map-ratio": String(null !== (bS = null === GS || void 0 === GS ? void 0 : GS.ratio) && void 0 !== bS ? bS : 2),
          backgroundColor: null === GS || void 0 === GS ? void 0 : GS.colour
        },
        nS = {
          "--map-zoom": String(jS.view.zoom),
          transform: `translate(${100*jS.view.x}%, ${100*jS.view.y}%) scale(${jS.view.zoom})`
        };
      return (0, Eb.jsx)(zb.c, {
        show: NS.open,
        close: XS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: uS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockMapTitle",
                children: qS("skyblockGame:map")
              }), IS.minimap && (0, Eb.jsx)("p", {
                children: IS.minimap.caption
              })]
            }), (0, Eb.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((SS => (0, Eb.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": SS === NS.tab ? "true" : void 0,
                className: Db()({
                  Selected: SS === NS.tab
                }),
                "aria-pressed": SS === NS.tab,
                onClick: () => {
                  XS.selectTab(SS)
                },
                children: qS("local" === SS ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, SS)))
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: XS.dismiss
            })]
          }), (0, Eb.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Eb.jsxs)("div", {
              ref: fS,
              className: Db()("SkyblockMapCanvas", {
                Local: IS.local,
                Overview: !IS.local,
                Zoomed: jS.view.zoom > 1
              }),
              style: CS,
              children: [(0, Eb.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: KS ? nS : void 0,
                children: (0, Eb.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: aS,
                  children: [GS && (0, Eb.jsx)(Wb, {
                    className: "SkyblockMapTerrain",
                    imageKey: GS.imageKey,
                    fallbackImageKey: GS.fallbackImageKey,
                    geometryKey: GS.geometryKey,
                    alt: GS.label
                  }), IS.local && (0, Eb.jsx)(Mb, {
                    mount: xS.display.mountMapSearchArea
                  }), !IS.local && (0, Eb.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: IS.connections.map((SS => (0, Eb.jsx)("line", {
                      className: Db()({
                        Explored: SS.explored
                      }),
                      x1: SS.start[0],
                      y1: SS.start[1],
                      x2: SS.end[0],
                      y2: SS.end[1]
                    }, SS.id)))
                  }), IS.points.map((SS => {
                    const HS = !IS.local && SS.thumbnail ? Vb[SS.thumbnail] : void 0;
                    return (0, Eb.jsxs)("div", {
                      className: Db()("SkyblockMapNode", {
                        Current: SS.current
                      }),
                      style: {
                        left: `${SS.position[0]}%`,
                        top: `${SS.position[1]}%`
                      },
                      children: [(0, Eb.jsxs)(Ub.g, {
                        className: Db()("SkyblockMapPin", {
                          Unknown: !SS.visited,
                          Current: SS.current
                        }),
                        disabled: NS.pending,
                        onClick: () => {
                          XS.travel(SS.travelKind, SS.travelId)
                        },
                        children: [HS && (0, Eb.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: HS,
                          alt: ""
                        }), !HS && (0, Eb.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Eb.jsx)(Yb, {
                            icon: SS.icon
                          })
                        }), (0, Eb.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: SS.name
                        })]
                      }), SS.current && (0, Eb.jsx)("span", {
                        className: Db()("SkyblockMapHereBadge", {
                          Above: SS.position[1] > 50
                        }),
                        children: qS("skyblockGame:mapYouAreHere")
                      })]
                    }, SS.id)
                  })), IS.portals.map((SS => (0, Eb.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${SS.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${SS.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Eb.jsxs)(Ub.g, {
                      className: "SkyblockMapPin",
                      disabled: NS.pending,
                      onClick: () => {
                        XS.travel(SS.travelKind, SS.travelId)
                      },
                      children: [(0, Eb.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: SS.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Eb.jsx)(Yb, {
                          icon: SS.icon
                        })
                      }), (0, Eb.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: SS.name
                      })]
                    })
                  }, SS.id))), IS.local && (0, Eb.jsx)(Ab, {
                    controller: xS
                  })]
                })
              }), KS && (0, Eb.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Eb.jsx)("button", {
                  type: "button",
                  "aria-label": qS("skyblockGame:mapZoomIn"),
                  disabled: jS.view.zoom >= 12,
                  onClick: () => {
                    jS.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Eb.jsx)("button", {
                  type: "button",
                  "aria-label": qS("skyblockGame:mapZoomOut"),
                  disabled: jS.view.zoom <= 1,
                  onClick: () => {
                    jS.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Eb.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: NS.feedback
              })]
            })
          }), (0, Eb.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [IS.progress && (0, Eb.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Eb.jsx)("span", {
                children: IS.progress
              }), (0, Eb.jsx)(Bb, {
                percent: IS.percent,
                label: IS.progress
              })]
            }), IS.noLandmarks && (0, Eb.jsx)("span", {
              children: qS("skyblockGame:mapNoLandmarks")
            }), IS.canTravel && (0, Eb.jsx)("span", {
              className: "SkyblockMapHint",
              children: qS("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function gX(SS) {
      let {
        view: HS,
        controller: gS,
        navigation: tS
      } = SS;
      const {
        t: bS
      } = (0, cb.F)(), {
        isTouchScreen: XS
      } = (0, wb.m)(["isTouchScreen"]);
      return (0, Eb.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": bS("skyblockGame:mapLocal"),
        children: [XS && (0, Eb.jsx)(Ub.g, {
          className: "SkyblockMinimapOpen",
          onClick: gS.showLocal,
          children: bS("skyblockGame:map")
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: HS.colour
          },
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: tS.display.mountTerrain,
            style: {
              width: HS.width,
              height: HS.height
            },
            children: [(0, Eb.jsx)(Wb, {
              imageKey: HS.imageKey,
              fallbackImageKey: HS.fallbackImageKey,
              geometryKey: HS.geometryKey,
              alt: HS.label
            }), (0, Eb.jsx)(Mb, {
              mount: tS.display.mountMinimapSearchArea
            }), HS.markers.map((SS => (0, Eb.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${SS.position[0]}%`,
                top: `${SS.position[1]}%`,
                color: SS.colour
              },
              title: SS.name,
              children: (0, Eb.jsx)(Yb, {
                icon: SS.icon
              })
            }, SS.id)))]
          }), (0, Eb.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: bS("skyblockGame:mapYouAreHere"),
            children: (0, Eb.jsx)(Yb, {
              icon: "player"
            })
          })]
        }), (0, Eb.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: HS.caption
        })]
      })
    }

    function tX(SS) {
      let {
        controller: HS
      } = SS;
      return (0, Eb.jsxs)("div", {
        className: "SkyblockCompass",
        ref: HS.display.mountCompass,
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Eb.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Eb.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function bX(SS) {
      let {
        controller: HS,
        surface: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)(), bS = (0, vb.i)(Xg, HS.getSnapshot()), XS = sb();
      return bS.enabled ? (0, Eb.jsxs)(Eb.Fragment, {
        children: ["hud" === gS && (0, Eb.jsx)(hb.g, {
          placement: "statBars",
          children: bS.hud && (0, Eb.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": bS.hud.colour
            },
            children: [(0, Eb.jsx)(Bb, {
              percent: bS.hud.skill.percent,
              label: bS.hud.skill.xp,
              levelUpToken: bS.hud.levelUpToken,
              colour: bS.hud.colour
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Eb.jsxs)("span", {
                children: [bS.hud.skill.label, " \xb7 ", bS.hud.skill.level]
              }), (0, Eb.jsx)("span", {
                children: bS.hud.gain
              })]
            })]
          })
        }), "hud" === gS && (0, Eb.jsx)(hb.g, {
          children: bS.hud && (0, Eb.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Eb.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Eb.jsx)("strong", {
                children: bS.hud.skill.label
              }), (0, Eb.jsx)("span", {
                children: bS.hud.gain
              })]
            }), (0, Eb.jsx)(Bb, {
              percent: bS.hud.skill.percent,
              label: bS.hud.skill.xp,
              levelUpToken: bS.hud.levelUpToken,
              colour: bS.hud.colour
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Eb.jsx)("span", {
                children: bS.hud.skill.level
              }), (0, Eb.jsx)("span", {
                children: bS.hud.skill.xp
              })]
            })]
          })
        }), "menu" === gS && (0, Eb.jsx)(zb.c, {
          show: bS.open,
          close: HS.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Eb.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: XS,
            onKeyDown: pb,
            children: [(0, Eb.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Eb.jsxs)("div", {
                children: [(0, Eb.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: tS("skyblockGame:skills")
                }), (0, Eb.jsx)("p", {
                  children: tS("skyblockGame:skillsIntro")
                })]
              }), (0, Eb.jsx)(Ub.l, {
                padIgnore: !0,
                onClick: HS.dismiss
              })]
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Eb.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: bS.skills.map((SS => (0, Eb.jsxs)(Ub.g, {
                  className: Db()("SkyblockSkillCard", {
                    Selected: SS.selected
                  }),
                  ariaPressed: SS.selected,
                  onClick: () => {
                    HS.select(SS.id)
                  },
                  children: [(0, Eb.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Eb.jsx)(Jb.e, {
                      itemName: SS.icon,
                      amount: 0
                    })
                  }), (0, Eb.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Eb.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Eb.jsx)("strong", {
                        children: SS.label
                      }), (0, Eb.jsx)("span", {
                        children: SS.level
                      })]
                    }), (0, Eb.jsx)(Bb, {
                      percent: SS.percent,
                      label: `${SS.label}: ${SS.xp}`
                    }), (0, Eb.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: SS.xp
                    })]
                  })]
                }, SS.id)))
              }), bS.detail && (0, Eb.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Eb.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Eb.jsx)(Jb.e, {
                    itemName: bS.detail.icon,
                    amount: 0
                  })
                }), (0, Eb.jsx)("h3", {
                  children: bS.detail.label
                }), (0, Eb.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: bS.detail.level
                }), (0, Eb.jsx)("p", {
                  children: bS.detail.description
                }), (0, Eb.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Eb.jsx)("strong", {
                    children: tS("skyblockGame:currentBenefit")
                  }), (0, Eb.jsx)("span", {
                    children: bS.detail.benefit
                  })]
                }), (0, Eb.jsx)(Bb, {
                  percent: bS.detail.percent,
                  label: bS.detail.xp
                }), (0, Eb.jsx)("p", {
                  children: bS.detail.xp
                }), (0, Eb.jsx)("h4", {
                  children: tS("skyblockGame:earnXp")
                }), (0, Eb.jsx)("ul", {
                  children: bS.detail.sources.map((SS => (0, Eb.jsx)("li", {
                    children: SS
                  }, SS)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var XX = gS(1444),
      xX = gS(4976),
      NX = gS(369);

    function qX(SS) {
      let {
        item: HS
      } = SS;
      return (0, Eb.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Eb.jsx)(Jb.e, {
          itemName: HS,
          amount: 0
        })
      })
    }

    function uX(SS) {
      let {
        name: HS,
        percent: gS,
        progress: tS
      } = SS;
      return (0, Eb.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Eb.jsx)(Bb, {
          percent: gS,
          label: `${(0,NX.ub)(HS)}: ${tS}`
        }), (0, Eb.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: tS
        })]
      })
    }

    function IX(SS) {
      let {
        subquests: HS,
        showDescriptions: gS = !1
      } = SS;
      return (0, Eb.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: HS.map((SS => {
          const HS = gS && "completed" === SS.status,
            tS = (0, Eb.jsxs)("li", {
              className: Db()("SkyblockQuestStep", SS.status, {
                JustFinished: SS.justFinished,
                JustUnlocked: SS.justUnlocked
              }),
              tabIndex: HS ? 0 : void 0,
              children: [null !== SS.iconItem && (0, Eb.jsx)(qX, {
                item: SS.iconItem
              }), null === SS.iconItem && (0, Eb.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === SS.status ? "\u2713" : "skipped" === SS.status ? "\u2212" : "\u25cb"
              }), (0, Eb.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Eb.jsx)("strong", {
                  children: (0, Eb.jsx)(xX.c, {
                    text: SS.name
                  })
                }), gS && !HS && (0, Eb.jsx)("span", {
                  children: (0, Eb.jsx)(xX.c, {
                    text: SS.description
                  })
                }), null !== SS.barPercent && (0, Eb.jsx)(uX, {
                  name: SS.name,
                  percent: SS.barPercent,
                  progress: SS.progress
                }), null === SS.barPercent && !HS && (0, Eb.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: SS.statusLabel
                })]
              })]
            }, SS.id);
          return HS ? (0, Eb.jsx)(XX.h, {
            delayShow: 200,
            tooltipInner: (0, Eb.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Eb.jsx)("span", {
                children: (0, Eb.jsx)(xX.c, {
                  text: SS.description
                })
              }), (0, Eb.jsx)("strong", {
                children: SS.statusLabel
              })]
            }),
            children: tS
          }, SS.id) : tS
        }))
      })
    }

    function fX(SS) {
      let {
        quest: HS,
        select: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)(), bS = HS.focusStep;
      return (0, Eb.jsxs)(Ub.g, {
        className: Db()("SkyblockQuestCard", {
          Selected: HS.selected,
          Tracked: HS.tracked
        }),
        onClick: () => {
          gS(HS.id)
        },
        children: [(0, Eb.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Eb.jsx)("strong", {
            children: (0, Eb.jsx)(xX.c, {
              text: HS.name
            })
          }), HS.tracked && (0, Eb.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: tS("skyblockGame:currentQuest")
          })]
        }), bS && (0, Eb.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== bS.iconItem && (0, Eb.jsx)(qX, {
            item: bS.iconItem
          }), (0, Eb.jsx)(uX, {
            name: bS.name,
            percent: bS.barPercent,
            progress: bS.progress
          })]
        }), (0, Eb.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: HS.progress
        })]
      })
    }

    function kX(SS) {
      let {
        controller: HS,
        surface: gS
      } = SS;
      const tS = (0, vb.i)(ug, HS.getSnapshot()),
        {
          t: bS
        } = (0, cb.F)(),
        XS = sb();
      return tS.enabled ? (0, Eb.jsxs)(Eb.Fragment, {
        children: ["hud" === gS && (0, Eb.jsx)(Eb.Fragment, {
          children: tS.tracked && (0, Eb.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: qg,
            children: (0, Eb.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [tS.trackedStepPulse > 0 && (0, Eb.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, tS.trackedStepPulse), (0, Eb.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: bS("skyblockGame:currentQuest")
              }), (0, Eb.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Eb.jsx)("strong", {
                  children: (0, Eb.jsx)(xX.c, {
                    text: tS.tracked.name
                  })
                }), null !== tS.tracked.clock && (0, Eb.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: tS.tracked.clock
                })]
              }), (0, Eb.jsx)(IX, {
                subquests: tS.tracked.subquests
              })]
            })
          })
        }), "menu" === gS && (0, Eb.jsx)(zb.c, {
          show: tS.open,
          close: HS.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Eb.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: XS,
            onKeyDown: pb,
            children: [(0, Eb.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Eb.jsx)("div", {
                children: (0, Eb.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: bS("skyblockGame:quests")
                })
              }), (0, Eb.jsx)(Ub.l, {
                padIgnore: !0,
                onClick: HS.dismiss
              })]
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Eb.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Eb.jsx)("h3", {
                  children: bS("skyblockGame:current")
                }), 0 === tS.active.length && (0, Eb.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: bS("skyblockGame:noActiveQuests")
                }), tS.active.map((SS => (0, Eb.jsx)(fX, {
                  quest: SS,
                  select: HS.select
                }, SS.id))), (0, Eb.jsx)("h3", {
                  children: (0, Eb.jsxs)("button", {
                    type: "button",
                    className: Db()("SkyblockQuestSectionToggle", {
                      Expanded: tS.completedExpanded
                    }),
                    "aria-expanded": tS.completedExpanded,
                    onClick: HS.toggleCompleted,
                    children: [(0, Eb.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), bS("skyblockGame:completed"), (0, Eb.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: tS.completed.length
                    })]
                  })
                }), tS.completedExpanded && 0 === tS.completed.length && (0, Eb.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: bS("skyblockGame:noCompletedQuests")
                }), tS.completedExpanded && tS.completed.map((SS => (0, Eb.jsx)(fX, {
                  quest: SS,
                  select: HS.select
                }, SS.id)))]
              }), tS.detail && (0, Eb.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [tS.detail.completed && (0, Eb.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: bS("skyblockGame:completedQuest")
                }), (0, Eb.jsx)("h3", {
                  children: (0, Eb.jsx)(xX.c, {
                    text: tS.detail.name
                  })
                }), (0, Eb.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Eb.jsx)(xX.c, {
                    text: tS.detail.description
                  })
                }), (0, Eb.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [tS.detail.progress, null !== tS.detail.clock && (0, Eb.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: tS.detail.clock
                  })]
                }), (0, Eb.jsx)(IX, {
                  subquests: tS.detail.subquests,
                  showDescriptions: !0
                }), tS.detail.tracked && (0, Eb.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: tS.detail.trackLabel
                }), !tS.detail.completed && !tS.detail.tracked && (0, Eb.jsx)(Ub.p, {
                  onClick: HS.trackSelected,
                  disabled: !tS.detail.canTrack,
                  children: tS.detail.trackLabel
                }), tS.detail.canViewDialogue && (0, Eb.jsx)(Ub.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: HS.viewDialogue,
                  children: bS("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var aX = gS(1127),
      KX = gS(2748);

    function jX(SS, HS, gS, tS, bS) {
      const XS = SS => "linear" === bS ? SS : {
          kX: bS,
          point: SS
        },
        xS = {};
      for (const [NS, qS] of tS)
        for (const [HS, gS] of Object.entries(SS(NS, qS, XS))) xS[HS] ??= {
          timeline: []
        }, xS[HS].timeline.push(gS);
      return {
        NX: HS,
        loop: gS,
        uX: xS
      }
    }
    const GX = .547,
      CX = .022,
      nX = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      PX = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function QX(SS, HS, gS) {
      const {
        drop: tS = 0,
        shift: bS = 0,
        torso: XS = 0,
        nod: xS = 0,
        tilt: NS = 0,
        legs: qS = [0, 0],
        arms: uS = 0,
        spread: IS = 0
      } = HS, fS = GX * Math.cos(XS) - CX * Math.sin(XS), kS = GX * Math.sin(XS) + CX * Math.cos(XS), aS = gS([0, -tS, bS]);
      return {
        LowerBody: {
          timeFraction: SS,
          position: aS,
          rotation: gS([0, 0, 0])
        },
        UpperBody: {
          timeFraction: SS,
          position: aS,
          rotation: gS([XS, 0, NS])
        },
        HeadMesh: {
          timeFraction: SS,
          position: gS([0, fS - GX - tS, kS - CX + bS]),
          rotation: gS([XS + xS, 0, NS])
        },
        LegLeftMesh: {
          timeFraction: SS,
          rotation: gS([qS[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: SS,
          rotation: gS([qS[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: SS,
          rotation: gS([uS, 0, IS])
        },
        ArmRightMesh: {
          timeFraction: SS,
          rotation: gS([uS, 0, -IS])
        }
      }
    }

    function DX(SS, HS, gS) {
      return jX(QX, SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function wX(SS) {
      return "number" === typeof SS ? [SS, SS] : SS
    }

    function hX(SS, HS, gS) {
      const {
        rise: tS = 0,
        shift: bS = 0,
        torso: XS = 0,
        twist: xS = 0,
        tilt: NS = 0,
        nod: qS = 0,
        cock: uS = 0,
        arms: IS = 0,
        spread: fS = 0
      } = HS, [kS, aS] = wX(IS), [KS, jS] = wX(fS);
      return {
        TorsoNode: {
          timeFraction: SS,
          position: gS([0, tS, bS]),
          rotation: gS([XS, xS, NS])
        },
        HeadMesh: {
          timeFraction: SS,
          rotation: gS([qS, 0, uS])
        },
        ArmLeftMesh: {
          timeFraction: SS,
          rotation: gS([kS, 0, KS])
        },
        ArmRightMesh: {
          timeFraction: SS,
          rotation: gS([aS, 0, -jS])
        }
      }
    }
    const ZX = [1.0625, -1, 0];

    function JX(SS) {
      return "number" === typeof SS ? [SS, SS] : SS
    }

    function OX(SS, HS, gS) {
      const {
        drop: tS = 0,
        shift: bS = 0,
        torso: XS = 0,
        tilt: xS = 0,
        nod: NS = 0,
        cock: qS = 0,
        legs: uS = [0, 0],
        arms: IS = 0,
        spread: fS = 0
      } = HS, [kS, aS] = JX(IS), [KS, jS] = JX(fS), GS = -XS, CS = -xS, [nS, PS, QS] = function(SS, HS) {
        const [gS, tS, bS] = [-ZX[0], ZX[1], -ZX[2]], XS = gS * Math.cos(HS) - tS * Math.sin(HS), xS = gS * Math.sin(HS) + tS * Math.cos(HS);
        return [XS - gS, -(xS * Math.cos(SS) - bS * Math.sin(SS) - tS), xS * Math.sin(SS) + bS * Math.cos(SS) - bS]
      }(GS, CS), DS = gS([0, -tS, bS]);
      return {
        TorsoNode: {
          timeFraction: SS,
          position: gS([nS, PS - tS, QS + bS]),
          rotation: gS([GS, 0, CS])
        },
        HeadMesh: {
          timeFraction: SS,
          rotation: gS([-NS, 0, -qS])
        },
        ArmLeftMesh: {
          timeFraction: SS,
          rotation: gS([-kS, 0, -KS])
        },
        ArmRightMesh: {
          timeFraction: SS,
          rotation: gS([-aS, 0, jS])
        },
        LegLeftMesh: {
          timeFraction: SS,
          position: DS,
          rotation: gS([-uS[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: SS,
          position: DS,
          rotation: gS([-uS[1], 0, 0])
        }
      }
    }
    var dX = gS(37181),
      cX = gS(38502),
      vX = gS(38644);

    function EX(SS, HS, gS) {
      var tS, bS;
      const XS = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return SS + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - SS) * gS
        },
        [xS, NS] = null !== (tS = SS.legs) && void 0 !== tS ? tS : [0, 0],
        [qS, uS] = null !== (bS = HS.legs) && void 0 !== bS ? bS : [0, 0];
      return {
        drop: XS(SS.drop, HS.drop),
        shift: XS(SS.shift, HS.shift),
        torso: XS(SS.torso, HS.torso),
        nod: XS(SS.nod, HS.nod),
        tilt: XS(SS.tilt, HS.tilt),
        legs: [XS(xS, qS), XS(NS, uS)],
        arms: XS(SS.arms, HS.arms),
        spread: XS(SS.spread, HS.spread)
      }
    }
    const LX = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      YX = DX(4400, !0, [
        [0, LX],
        [.16, {
          ...LX,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, LX],
        [.44, {
          ...LX,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, EX(LX, nX, .7)],
        [.66, EX(LX, nX, .78)],
        [.74, EX(LX, PX, .65)],
        [.86, {
          ...LX,
          drop: .14
        }],
        [1, LX]
      ], "catmull-rom-spline"),
      AX = {
        ...LX,
        drop: .14,
        torso: .3,
        spread: .4
      },
      yX = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      VX = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      iX = {
        caveGolem: YX,
        magmaGolem: DX(3600, !0, [
          [0, AX],
          [.12, {
            ...AX,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...AX,
            tilt: -.08
          }],
          [.4, {
            ...AX,
            tilt: .06,
            drop: .11
          }],
          [.52, EX(AX, nX, .9)],
          [.62, EX(AX, PX, .8)],
          [.7, EX(AX, PX, .45)],
          [.78, EX(AX, PX, .85)],
          [.9, {
            ...AX,
            drop: .17
          }],
          [1, AX]
        ], "catmull-rom-spline"),
        frostWraith: function(SS, HS, gS) {
          return jX(hX, SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, yX],
          [.14, {
            ...yX,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...yX,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...yX,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...yX,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...yX,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...yX,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...yX,
            rise: .16,
            tilt: -.04
          }],
          [1, yX]
        ], "catmull-rom-spline"),
        tikiTerror: function(SS, HS, gS) {
          return jX(OX, SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, VX],
          [.16, {
            ...VX,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, VX],
          [.44, {
            ...VX,
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
            ...VX,
            drop: .1
          }],
          [1, VX]
        ], "catmull-rom-spline")
      },
      WX = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      zX = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      UX = Object.fromEntries(Object.entries(iX).map((SS => {
        let [HS, gS] = SS;
        return [HS, (0, vX.b)((0, dX.d)(gS), HS)]
      })));

    function pX(SS) {
      const HS = function(SS) {
        var HS;
        const gS = (0, cX.c)(SS).poseRig;
        return null !== (HS = zX[SS]) && void 0 !== HS ? HS : void 0 === gS ? null : WX[gS]
      }(SS);
      return null === HS ? null : UX[HS]
    }

    function sX(SS) {
      return {
        "--difficulty-colour": SS
      }
    }
    const BX = (0, JS.lazy)((() => (0, KX.e)(gS.e(200).then((() => gS(41542))), (SS => SS.MobPreview))));

    function MX(SS) {
      var HS, gS, tS;
      let {
        picker: bS,
        controller: XS
      } = SS;
      const {
        t: xS
      } = (0, cb.F)(), NS = sb(), {
        page: qS
      } = bS;
      return (0, Eb.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: NS,
        onKeyDown: SS => {
          "ArrowLeft" === SS.key ? (SS.preventDefault(), SS.stopPropagation(), XS.previous()) : "ArrowRight" === SS.key ? (SS.preventDefault(), SS.stopPropagation(), XS.next()) : pb(SS)
        },
        style: sX(qS.colour),
        children: [(0, Eb.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Eb.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: bS.dungeonName
          }), (0, Eb.jsx)(Ub.l, {
            padIgnore: !0,
            onClick: XS.dismiss
          })]
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Eb.jsx)(Ub.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !bS.canPrevious,
              onClick: XS.previous,
              children: (0, Eb.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Eb.jsx)(aX.d, {
                  name: "angle-up"
                })
              })
            }), (0, Eb.jsxs)("div", {
              className: Db()("SkyblockBossPickerBoss", {
                Locked: !qS.unlocked
              }),
              children: [null !== qS.bossMobType && (0, Eb.jsx)(JS.Suspense, {
                fallback: (0, Eb.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Eb.jsx)(BX, {
                  className: "SkyblockBossPickerModel",
                  mobType: qS.bossMobType,
                  variation: qS.bossMobVariation,
                  animation: null !== (HS = pX(qS.bossMobType)) && void 0 !== HS ? HS : void 0
                })
              }), null === qS.bossMobType && (0, Eb.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Eb.jsx)(Ub.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !bS.canNext,
              onClick: XS.next,
              children: (0, Eb.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Eb.jsx)(aX.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Eb.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [qS.beaten && (0, Eb.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), qS.label]
            }), (0, Eb.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (gS = qS.bossName) && void 0 !== gS ? gS : "???"
            }), (0, Eb.jsxs)("span", {
              className: Db()("SkyblockBossPickerRecord", {
                Locked: null !== qS.lockedHint
              }),
              children: [null !== qS.lockedHintHighlight && (0, Eb.jsxs)(Eb.Fragment, {
                children: [qS.lockedHintHighlight.before, (0, Eb.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: sX(qS.lockedHintHighlight.colour),
                  children: [null !== qS.lockedHintHighlight.icon && (0, Eb.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Eb.jsx)(Jb.e, {
                      itemName: qS.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), qS.lockedHintHighlight.name]
                }), qS.lockedHintHighlight.after]
              }), null === qS.lockedHintHighlight && (null !== (tS = qS.lockedHint) && void 0 !== tS ? tS : qS.summary)]
            })]
          }), (0, Eb.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: bS.pages.map((SS => (0, Eb.jsx)("span", {
              className: Db()("SkyblockBossPickerDot", {
                Current: SS.current,
                Locked: !SS.unlocked
              }),
              style: sX(SS.colour)
            }, SS.difficulty)))
          }), (0, Eb.jsx)(Ub.u, {
            className: "SkyblockBossPickerFight",
            disabled: !qS.unlocked,
            onClick: XS.enter,
            children: xS("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function FX(SS) {
      let {
        dungeon: HS,
        select: gS
      } = SS;
      return (0, Eb.jsxs)(Ub.g, {
        className: Db()("SkyblockDungeonCard", {
          Selected: HS.selected
        }),
        onClick: () => {
          gS(HS.id)
        },
        children: [(0, Eb.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Eb.jsx)("strong", {
            children: HS.name
          }), (0, Eb.jsx)("span", {
            children: HS.beatenSummary
          })]
        }), (0, Eb.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: HS.difficulties.map((SS => (0, Eb.jsxs)("span", {
            className: Db()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: SS.beaten
            }),
            style: sX(SS.colour),
            title: SS.summary,
            children: [SS.beaten && (0, Eb.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), SS.label]
          }, SS.difficulty)))
        })]
      })
    }

    function RX(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(ag, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb();
      return gS.enabled ? (0, Eb.jsxs)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [gS.picker && (0, Eb.jsx)(MX, {
          picker: gS.picker,
          controller: HS
        }), !gS.picker && (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: tS("skyblockGame:dungeons")
              }), (0, Eb.jsx)("p", {
                children: tS("skyblockGame:dungeonsIntro")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: HS.dismiss
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Eb.jsx)("div", {
              className: "SkyblockDungeonList",
              children: gS.dungeons.map((SS => (0, Eb.jsx)(FX, {
                dungeon: SS,
                select: HS.select
              }, SS.id)))
            }), gS.detail && (0, Eb.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Eb.jsx)("h3", {
                children: gS.detail.name
              }), (0, Eb.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: gS.detail.difficulties.map((SS => (0, Eb.jsxs)("li", {
                  className: Db()("SkyblockDungeonRecord", {
                    Beaten: SS.beaten
                  }),
                  children: [(0, Eb.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: sX(SS.colour),
                    children: [SS.beaten && (0, Eb.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), SS.label]
                  }), (0, Eb.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: SS.summary
                  })]
                }, SS.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function TX(SS) {
      let {
        collection: HS,
        select: gS
      } = SS;
      return (0, Eb.jsxs)(Ub.g, {
        className: Db()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: HS.selected,
          Locked: HS.locked
        }),
        ariaPressed: HS.selected,
        onClick: () => {
          gS(HS.id)
        },
        children: [(0, Eb.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Eb.jsx)(Jb.e, {
            itemName: HS.icon,
            amount: 0
          })
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Eb.jsx)("strong", {
              children: HS.name
            }), (0, Eb.jsx)("span", {
              children: HS.tier
            })]
          }), (0, Eb.jsx)(Bb, {
            percent: HS.percent,
            label: `${HS.name}: ${HS.progress}`
          }), (0, Eb.jsx)("span", {
            className: "SkyblockSkillXp",
            children: HS.progress
          })]
        })]
      })
    }

    function oX(SS) {
      let {
        collection: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Eb.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Eb.jsx)(Jb.e, {
            itemName: HS.icon,
            amount: 0
          })
        }), (0, Eb.jsx)("h3", {
          children: HS.name
        }), (0, Eb.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: HS.tier
        }), (0, Eb.jsx)("p", {
          children: HS.locked ? gS("skyblockGame:collectionLocked") : HS.count
        }), null !== HS.nextReward && (0, Eb.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Eb.jsx)("strong", {
            children: gS("skyblockGame:collectionNextReward")
          }), (0, Eb.jsx)("span", {
            children: HS.nextReward
          })]
        }), (0, Eb.jsx)(Bb, {
          percent: HS.percent,
          label: HS.progress
        }), (0, Eb.jsx)("p", {
          children: HS.progress
        })]
      })
    }

    function lX(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(yg, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb();
      return gS.enabled ? (0, Eb.jsx)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: tS("skyblockGame:collections")
              }), (0, Eb.jsxs)("p", {
                children: [tS("skyblockGame:collectionsIntro"), " ", gS.tiersUnlocked]
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: HS.dismiss
            })]
          }), (0, Eb.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: gS.categories.map((SS => (0, Eb.jsxs)(Ub.g, {
              className: Db()("SkyblockCollectionCategory", {
                Selected: SS.selected
              }),
              ariaPressed: SS.selected,
              padTabSelected: SS.selected,
              onClick: () => {
                HS.selectCategory(SS.id)
              },
              children: [(0, Eb.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Eb.jsx)(Jb.e, {
                  itemName: SS.icon,
                  amount: 0
                })
              }), (0, Eb.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Eb.jsx)("strong", {
                  children: SS.label
                }), (0, Eb.jsx)("span", {
                  children: SS.tiers
                })]
              })]
            }, SS.id)))
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Eb.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: gS.collections.map((SS => (0, Eb.jsx)(TX, {
                collection: SS,
                select: HS.select
              }, SS.id)))
            }), gS.detail && (0, Eb.jsx)(oX, {
              collection: gS.detail
            })]
          })]
        })
      }) : null
    }
    const mX = ["completed", "active", "available", "locked"],
      eX = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function rX(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Tg, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb();
      return gS.enabled ? (0, Eb.jsx)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: tS("skyblockDevQuests:title")
              }), (0, Eb.jsx)("p", {
                children: tS("skyblockDevQuests:intro")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              onClick: HS.dismiss
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [mX.map((SS => (0, Eb.jsx)("span", {
              className: Db()("SkyblockQuestGraphLegendState", SS),
              children: tS(`skyblockDevQuests:state_${SS}`)
            }, SS))), eX.map((SS => (0, Eb.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Eb.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Eb.jsx)("line", {
                  className: Db()("SkyblockQuestGraphEdge", SS),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), tS(`skyblockDevQuests:edge_${SS}`)]
            }, SS)))]
          }), (0, Eb.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Eb.jsxs)("div", {
              className: Db()("SkyblockQuestGraphCanvas", {
                Planning: gS.planning
              }),
              style: {
                width: gS.width,
                height: gS.height
              },
              children: [(0, Eb.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: gS.width,
                height: gS.height,
                "aria-hidden": "true",
                children: [(0, Eb.jsx)("defs", {
                  children: (0, Eb.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Eb.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), gS.edges.map((SS => (0, Eb.jsx)("path", {
                  className: Db()("SkyblockQuestGraphEdge", SS.kind, {
                    InPlan: SS.inPlan
                  }),
                  d: SS.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, SS.key)))]
              }), gS.nodes.map((SS => (0, Eb.jsxs)("button", {
                type: "button",
                className: Db()("SkyblockQuestGraphNode", SS.state, {
                  InPlan: SS.inPlan,
                  Hovered: SS.hovered
                }),
                style: {
                  left: SS.left,
                  top: SS.top,
                  width: 190,
                  height: 52
                },
                title: SS.id,
                onMouseEnter: () => {
                  HS.hover(SS.id)
                },
                onMouseLeave: () => {
                  HS.hover(null)
                },
                onFocus: () => {
                  HS.hover(SS.id)
                },
                onBlur: () => {
                  HS.hover(null)
                },
                onClick: () => {
                  HS.jump(SS.id)
                },
                children: [(0, Eb.jsx)("strong", {
                  children: SS.name
                }), (0, Eb.jsx)("span", {
                  children: SS.detail
                })]
              }, SS.id)))]
            })
          })]
        })
      }) : null
    }
    const Sx = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Hx = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Nt}ms`,
        "--forge-duration": "2150ms"
      },
      gx = Array.from({
        length: 18
      }, ((SS, HS) => ({
        "--ember-left": `${(4+92*(.618034*HS%1)).toFixed(1)}%`,
        "--ember-size": 3 + HS % 3 * 2 + "px",
        "--ember-drift": 14 * (HS % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*HS%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*HS%8).toFixed(2)}s`
      })));

    function tx(SS) {
      if (SS.style.removeProperty("--part-size"), null === SS.parentElement || "wrap" === getComputedStyle(SS.parentElement).flexWrap) return;
      const HS = [...SS.children],
        gS = getComputedStyle(SS),
        tS = parseFloat(gS.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        bS = (SS.clientHeight - parseFloat(gS.rowGap) * (HS.length - 1)) / HS.length,
        XS = HS.map((SS => {
          const HS = getComputedStyle(SS),
            gS = SS.querySelector("h3"),
            XS = SS.querySelector(".SkyblockForgeParts");
          if (null === gS || null === XS) return tS;
          const xS = bS - parseFloat(HS.paddingTop) - parseFloat(HS.paddingBottom) - gS.offsetHeight - parseFloat(getComputedStyle(gS).marginBottom),
            NS = parseFloat(getComputedStyle(XS).columnGap),
            qS = XS.children.length;
          let uS = 0;
          for (let tS = 1; tS <= qS; tS++) {
            const SS = Math.ceil(qS / tS);
            uS = Math.max(uS, Math.min((XS.clientWidth - NS * (tS - 1)) / tS, (xS - NS * (SS - 1)) / SS))
          }
          return uS
        }));
      SS.style.setProperty("--part-size", `${Math.floor(Math.max(tS,Math.min(...XS)))}px`)
    }

    function bx(SS) {
      var HS, gS, tS, XS, xS;
      let {
        controller: NS
      } = SS;
      const qS = (0, vb.i)(jt, NS.getSnapshot()),
        {
          t: uS
        } = (0, cb.F)(),
        IS = sb(),
        fS = function() {
          const SS = (0, JS.useRef)(null),
            HS = (0, JS.useRef)(null);
          return (0, JS.useLayoutEffect)((() => {
            null !== SS.current && tx(SS.current)
          })), (0, JS.useCallback)((gS => {
            var tS;
            null === (tS = HS.current) || void 0 === tS || tS.disconnect(), HS.current = null, SS.current = gS, null !== gS && (HS.current = new ResizeObserver((() => {
              tx(gS)
            })), HS.current.observe(gS))
          }), [])
        }(),
        kS = function(SS) {
          const HS = (0, JS.useRef)(null);
          return (0, JS.useLayoutEffect)((() => {
            const SS = HS.current;
            if (null !== SS) {
              SS.style.removeProperty("font-size");
              for (let HS = 1.7; HS > 1.1 && SS.scrollWidth > SS.clientWidth; HS -= .1) SS.style.fontSize = HS - .1 + "rem"
            }
          }), [SS]), (0, JS.useCallback)((SS => {
            HS.current = SS
          }), [])
        }(null === (HS = qS.preview) || void 0 === HS ? void 0 : HS.name),
        aS = (0, JS.useRef)(null),
        KS = (0, JS.useRef)({}),
        jS = qS.forging,
        GS = null !== (gS = null === jS || void 0 === jS ? void 0 : jS.preview.tier) && void 0 !== gS ? gS : 0,
        CS = null !== (tS = null === jS || void 0 === jS ? void 0 : jS.preview.named) && void 0 !== tS && tS,
        nS = (0, JS.useMemo)((() => {
          return null === jS ? null : {
            flames: (SS = GS, HS = CS, Array.from({
              length: 26 + 6 * SS + (HS ? 20 : 0)
            }, ((SS, HS) => {
              const gS = HS < 6,
                tS = Math.random() * Math.PI * 2,
                bS = gS ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                XS = Math.cos(tS) * bS,
                xS = Math.sin(tS) * bS - 2 - 3 * Math.random(),
                NS = Math.random(),
                [qS, uS, IS] = gS ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : NS < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : NS < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [NS < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": qS,
                "--x0": `${(.15*XS).toFixed(2)}rem`,
                "--y0": `${(.15*xS).toFixed(2)}rem`,
                "--x": `${XS.toFixed(2)}rem`,
                "--y": `${xS.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${uS.toFixed(2)}rem`,
                "--duration": `${Math.round(IS)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: It(GS, CS)
          };
          var SS, HS
        }), [null === jS || void 0 === jS ? void 0 : jS.id]);
      if (!qS.enabled) return null;
      const PS = qS.preview,
        QS = qS.arriving,
        DS = null !== QS && !QS.sameSword,
        wS = null !== PS && (0, Eb.jsx)(Jb.e, {
          itemName: PS.baseSword,
          amount: 0,
          enchantmentTier: PS.enchantmentTier
        });
      return (0, Eb.jsx)(zb.c, {
        show: qS.open,
        close: NS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: IS,
          onKeyDown: pb,
          children: [(0, Eb.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: gx.map(((SS, HS) => (0, Eb.jsx)("span", {
              style: SS
            }, HS)))
          }), (0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: uS("skyblockGame:forgeTitle")
              }), (0, Eb.jsx)("p", {
                children: uS("skyblockGame:forgeIntro")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              onClick: NS.dismiss
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Eb.jsx)("div", {
              ref: fS,
              className: Db()("SkyblockForgeSlots", {
                Locked: null !== jS
              }),
              children: qS.slots.map((SS => (0, Eb.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Eb.jsx)("h3", {
                  children: SS.label
                }), (0, Eb.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: SS.parts.map((HS => (0, Eb.jsx)("button", {
                    type: "button",
                    className: Db()("SkyblockForgePart", {
                      Selected: HS.selected,
                      Missing: HS.placeholder
                    }),
                    disabled: HS.placeholder,
                    title: HS.placeholder ? uS("skyblockGame:forgePickParts") : HS.itemName,
                    "aria-pressed": HS.selected,
                    onClick: () => {
                      NS.select(SS.kind, HS.material)
                    },
                    children: (0, Eb.jsx)(Jb.e, {
                      itemName: HS.itemName,
                      amount: HS.owned
                    })
                  }, HS.material)))
                })]
              }, SS.kind)))
            }), (0, Eb.jsxs)("div", {
              className: Db()("SkyblockForgeAnvil", {
                Named: null === PS || void 0 === PS ? void 0 : PS.named
              }),
              style: {
                "--tier": null === PS ? "transparent" : bS.$[PS.enchantmentTier]
              },
              children: [(0, Eb.jsxs)("div", {
                className: Db()("SkyblockForgeAltar", {
                  Forging: null !== jS
                }),
                style: null === jS ? void 0 : Hx,
                children: [(0, Eb.jsxs)("div", {
                  className: Db()("SkyblockForgeMount", {
                    Arrive: null !== QS
                  }),
                  children: [null === PS && (0, Eb.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Eb.jsx)(Jb.e, {
                      itemName: qS.unformedSword,
                      amount: 0
                    })
                  }), null !== PS && (0, Eb.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== PS && null === jS && (0, Eb.jsx)("div", {
                    ref: aS,
                    className: "SkyblockForgeFloat",
                    children: (0, Eb.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: wS
                    })
                  }), null !== PS && (0, Eb.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: ut.map(((SS, HS) => (0, Eb.jsx)("span", {
                      className: Db()({
                        Rune: "" !== SS.rune
                      }),
                      style: SS.style,
                      children: SS.rune
                    }, HS)))
                  }), null !== jS && null !== nS && (0, Eb.jsxs)(Eb.Fragment, {
                    children: [(0, Eb.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Eb.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: nS.flames.map(((SS, HS) => (0, Eb.jsx)("span", {
                        style: SS
                      }, HS)))
                    }), (0, Eb.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: KS.current,
                      children: (0, Eb.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: wS
                      })
                    }), (0, Eb.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Eb.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (GS >= 4 || CS) && (0, Eb.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Eb.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: nS.sparks.map(((SS, HS) => (0, Eb.jsx)("span", {
                        style: SS
                      }, HS)))
                    }), (0, Eb.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Eb.jsx)("p", {
                  className: Db()("SkyblockForgeStatus", null === (XS = qS.status) || void 0 === XS ? void 0 : XS.tone),
                  children: null === (xS = qS.status) || void 0 === xS ? void 0 : xS.text
                })]
              }), null === PS && (0, Eb.jsx)("p", {
                className: Db()("SkyblockForgeName Waiting", {
                  ArriveText: DS
                }),
                children: uS(qS.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== PS && (0, Eb.jsx)("h3", {
                ref: kS,
                className: Db()("SkyblockForgeName", {
                  ArriveText: DS
                }),
                title: PS.name,
                children: PS.name
              }), (null === PS || void 0 === PS ? void 0 : PS.named) && (0, Eb.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: uS("skyblockGame:forgeSecret")
              }), (0, Eb.jsxs)(Ub.u, {
                className: "SkyblockForgeButton",
                disabled: !qS.canForge,
                title: null === PS ? void 0 : uS("skyblockGame:forgeCoalOwned", {
                  owned: String(qS.coalOwned)
                }),
                onClick: () => {
                  KS.current = function(SS) {
                    const HS = null === SS ? "none" : getComputedStyle(SS).transform,
                      gS = new DOMMatrixReadOnly("none" === HS ? void 0 : HS);
                    return {
                      "--settle-y": `${gS.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(gS.b,gS.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(aS.current), Kt(), NS.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [uS("skyblockGame:forgeButton"), null !== PS && (0, Eb.jsxs)("span", {
                  className: Db()("SkyblockForgeCost", {
                    Short: PS.coalShort
                  }),
                  children: [(0, Eb.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Eb.jsx)(Jb.e, {
                      itemName: rg.c,
                      amount: 0
                    })
                  }), PS.coalCost]
                })]
              })]
            }), (0, Eb.jsxs)("div", {
              className: Db()("SkyblockForgeDetails", {
                Named: null === PS || void 0 === PS ? void 0 : PS.named
              }),
              children: [(0, Eb.jsx)("p", {
                className: Db()("SkyblockForgeLore", {
                  ArriveText: DS
                }),
                title: null === PS || void 0 === PS ? void 0 : PS.lore,
                children: null === PS || void 0 === PS ? void 0 : PS.lore
              }), (0, Eb.jsxs)("dl", {
                className: Db()("SkyblockForgeStats", {
                  ArriveText: DS
                }),
                children: [null === PS && Sx.map((SS => (0, Eb.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Eb.jsx)("dt", {
                    children: uS(SS)
                  }), (0, Eb.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, SS))), null === PS || void 0 === PS ? void 0 : PS.stats.map((SS => (0, Eb.jsxs)("div", {
                  className: Db()("SkyblockForgeStat", {
                    Better: SS.better
                  }),
                  children: [(0, Eb.jsx)("dt", {
                    children: SS.label
                  }), (0, Eb.jsx)("dd", {
                    children: SS.value
                  })]
                }, SS.label)))]
              }), (0, Eb.jsx)("ul", {
                className: Db()("SkyblockForgeEffects", {
                  ArriveText: DS
                }),
                children: null === PS || void 0 === PS ? void 0 : PS.effects.map((SS => (0, Eb.jsx)("li", {
                  children: SS
                }, SS)))
              })]
            })]
          })]
        })
      })
    }
    const Xx = "Doom Rivet",
      xx = "Doom Crest";

    function Nx(SS) {
      let {
        itemName: HS,
        amount: gS,
        owned: tS
      } = SS;
      return (0, Eb.jsxs)("span", {
        className: Db()("SkyblockSmugglerPrice", {
          Short: gS > tS
        }),
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Eb.jsx)(Jb.e, {
            itemName: HS,
            amount: 0
          })
        }), (0, Eb.jsx)("span", {
          children: gS
        })]
      })
    }

    function qx(SS) {
      return SS.justBought ? "skyblockGame:smugglerJustBought" : SS.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function ux(SS) {
      let {
        deal: HS,
        view: gS,
        buy: tS
      } = SS;
      const {
        t: bS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("div", {
        className: Db()("SkyblockSmugglerPocket", {
          Bought: HS.justBought,
          Unaffordable: !HS.affordable,
          SoldOut: HS.soldOut && !HS.justBought
        }),
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Eb.jsx)(Jb.e, {
            itemName: HS.itemName,
            amount: 0,
            enchantmentTier: HS.enchantmentTier
          }), HS.amount > 1 && (0, Eb.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: bS("skyblockGame:smugglerAmount", {
              amount: HS.amount
            })
          })]
        }), (0, Eb.jsx)("h3", {
          children: HS.displayName
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [HS.rivets > 0 && (0, Eb.jsx)(Nx, {
              itemName: Xx,
              amount: HS.rivets,
              owned: gS.rivetsOwned
            }), HS.crests > 0 && (0, Eb.jsx)(Nx, {
              itemName: xx,
              amount: HS.crests,
              owned: gS.crestsOwned
            })]
          }), (0, Eb.jsx)(Ub.g, {
            className: "SkyblockSmugglerBuy",
            disabled: HS.soldOut || !HS.affordable || gS.pending,
            onClick: () => {
              tS(HS.slot)
            },
            children: bS(qx(HS))
          })]
        })]
      }, HS.justBought ? gS.boughtCount : 0)
    }

    function Ix(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(nt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb();
      return gS.enabled ? (0, Eb.jsx)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Eb.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Eb.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: tS("skyblockGame:smugglerTitle")
              }), (0, Eb.jsx)("p", {
                children: tS("skyblockGame:smugglerIntro")
              })]
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Eb.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Eb.jsx)(Nx, {
                  itemName: Xx,
                  amount: gS.rivetsOwned,
                  owned: gS.rivetsOwned
                }), (0, Eb.jsx)(Nx, {
                  itemName: xx,
                  amount: gS.crestsOwned,
                  owned: gS.crestsOwned
                })]
              }), (0, Eb.jsx)(Ub.l, {
                onClick: HS.dismiss
              })]
            })]
          }), (0, Eb.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: gS.deals.map((SS => (0, Eb.jsx)(ux, {
              deal: SS,
              view: gS,
              buy: HS.buy
            }, SS.slot)))
          }), (0, Eb.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: gS.rotatesText
            }), null !== gS.status && (0, Eb.jsx)("span", {
              className: Db()("SkyblockSmugglerStatus", gS.status.tone),
              children: gS.status.text
            })]
          })]
        })
      }) : null
    }

    function fx(SS) {
      let {
        phase: HS,
        className: gS
      } = SS;
      return (0, Eb.jsx)("span", {
        className: Db()("SkyblockMoon", `Moon-${HS}`, gS),
        "aria-hidden": "true"
      })
    }

    function kx(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Dt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)();
      return gS.enabled ? (0, Eb.jsx)(hb.g, {
        placement: "statBars",
        children: (0, Eb.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Db()("SkyblockPassageChip", gS.open && "Open"),
          "aria-label": tS("skyblockGame:passageChipLabel", {
            phase: gS.phaseName
          }),
          title: tS("skyblockGame:passageChipLabel", {
            phase: gS.phaseName
          }),
          onMouseDown: SS => {
            SS.preventDefault()
          },
          onClick: HS.toggle,
          children: (0, Eb.jsx)(fx, {
            phase: gS.phase
          }, gS.phase)
        })
      }) : null
    }

    function ax(SS) {
      let {
        fish: HS
      } = SS;
      return (0, Eb.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Eb.jsx)(Jb.e, {
            itemName: HS.itemName,
            amount: 0
          })
        }), (0, Eb.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: HS.displayName
          }), (0, Eb.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: HS.where
          })]
        })]
      })
    }

    function Kx(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Dt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb();
      return gS.enabled ? (0, Eb.jsx)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Eb.jsx)(fx, {
              phase: gS.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: tS("skyblockGame:passageTitle")
              }), (0, Eb.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: gS.phaseName
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: HS.dismiss
            })]
          }), (0, Eb.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: tS("skyblockGame:passageIntro")
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Eb.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Eb.jsx)("h3", {
                children: tS("skyblockGame:passageVisiting")
              }), (0, Eb.jsx)("ul", {
                className: "SkyblockPassageList",
                children: gS.visitors.map((SS => (0, Eb.jsx)(ax, {
                  fish: SS
                }, SS.itemName)))
              })]
            }), (0, Eb.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== gS.resting && (0, Eb.jsxs)(Eb.Fragment, {
                children: [(0, Eb.jsx)("h3", {
                  children: tS("skyblockGame:passageResting")
                }), (0, Eb.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Eb.jsx)(ax, {
                    fish: gS.resting
                  })
                })]
              }), (0, Eb.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Eb.jsx)(fx, {
                  phase: gS.nextPhase
                }), (0, Eb.jsx)("span", {
                  children: gS.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function jx() {
      return (0, Eb.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((SS => (0, Eb.jsx)("i", {
          style: {
            "--sparkle-index": SS
          }
        }, SS)))
      })
    }

    function Gx(SS) {
      var HS;
      let {
        charm: gS,
        view: tS,
        controller: bS
      } = SS;
      const {
        t: XS
      } = (0, cb.F)(), xS = tS.shop, NS = (null === (HS = tS.sparkle) || void 0 === HS ? void 0 : HS.id) === gS.id;
      return (0, Eb.jsxs)("li", {
        className: Db()("SkyblockLampLightCharm", gS.owned && "Owned", gS.socketed && "Socketed"),
        children: [NS && (0, Eb.jsx)(jx, {}, tS.sparkle.count), (0, Eb.jsx)("h4", {
          children: gS.name
        }), (0, Eb.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: gS.effect
        }), (0, Eb.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: gS.lines.map((SS => (0, Eb.jsxs)("li", {
            className: Db()("SkyblockLampLightOddsLine", "better" === SS.tone ? "Better" : "worse" === SS.tone ? "Worse" : "Same"),
            children: [(0, Eb.jsx)("span", {
              className: "Before",
              children: SS.before
            }), (0, Eb.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Eb.jsx)("span", {
              className: "After",
              children: SS.after
            })]
          }, SS.label)))
        }), (0, Eb.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: gS.owned ? gS.socketed ? (0, Eb.jsxs)(Eb.Fragment, {
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: XS("skyblockGame:lampLightSocketed")
            }), (0, Eb.jsx)(Ub.P, {
              disabled: !tS.canCommand,
              ariaLabel: XS("skyblockGame:lampLightRemoveLabel", {
                charm: gS.name
              }),
              onClick: () => {
                bS.socket(null)
              },
              children: XS("skyblockGame:lampLightRemove")
            })]
          }) : (0, Eb.jsx)(Ub.g, {
            disabled: !tS.canCommand || !xS.heldRod,
            ariaLabel: XS("skyblockGame:lampLightSocketLabel", {
              charm: gS.name
            }),
            onClick: () => {
              bS.socket(gS.id)
            },
            children: XS("skyblockGame:lampLightSocket")
          }) : (0, Eb.jsx)(Ub.g, {
            disabled: !tS.canCommand || !gS.affordable,
            ariaLabel: XS("skyblockGame:lampLightBuyLabel", {
              item: gS.name,
              cost: gS.cost
            }),
            onClick: () => {
              bS.buy(gS.id)
            },
            children: gS.cost
          })
        })]
      })
    }

    function Cx(SS) {
      var HS;
      let {
        tint: gS,
        view: tS,
        controller: bS
      } = SS;
      const {
        t: XS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("li", {
        className: Db()("SkyblockLampLightTint", gS.wearing && "Wearing"),
        style: {
          "--tint-colour": gS.colour
        },
        children: [(null === (HS = tS.sparkle) || void 0 === HS ? void 0 : HS.id) === gS.id && (0, Eb.jsx)(jx, {}, tS.sparkle.count), (0, Eb.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Eb.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: gS.name
        }), gS.wearing ? (0, Eb.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: XS("skyblockGame:lampLightWearing")
        }) : (0, Eb.jsx)(Ub.g, {
          disabled: !tS.canCommand || !gS.owned && !gS.affordable,
          ariaLabel: gS.owned ? XS("skyblockGame:lampLightWearLabel", {
            tint: gS.name
          }) : XS("skyblockGame:lampLightBuyLabel", {
            item: gS.name,
            cost: gS.cost
          }),
          onClick: () => {
            gS.owned ? bS.wearTint(gS.id) : bS.buy(gS.id)
          },
          children: gS.owned ? XS("skyblockGame:lampLightWear") : gS.cost
        })]
      })
    }

    function nx(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Vt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = gS.shop;
      return (0, Eb.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Eb.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: gS.balance
          }), (0, Eb.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": gS.releasing,
            className: Db()("SkyblockLampLightSwitch", gS.releasing && "On"),
            disabled: gS.releasing ? "ready" !== gS.status : !gS.canCommand,
            onClick: () => {
              HS.setRelease(!gS.releasing)
            },
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Eb.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), tS("skyblockGame:lampLightRelease")]
          }), (0, Eb.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: tS("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== gS.notice && (0, Eb.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: gS.notice
        }), null !== bS && (0, Eb.jsxs)(Eb.Fragment, {
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Eb.jsx)("h3", {
              children: tS("skyblockGame:lampLightCharms")
            }), (0, Eb.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: bS.oddsFor
            }), (0, Eb.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((SS => (0, Eb.jsx)("button", {
                type: "button",
                "aria-pressed": gS.situation === SS,
                className: Db()("SkyblockLampLightSituation", gS.situation === SS && "Selected"),
                onClick: () => {
                  HS.setSituation(SS)
                },
                children: tS("open" === SS ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, SS)))
            })]
          }), !bS.heldRod && (0, Eb.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: tS("skyblockGame:lampLightHoldRod")
          }), (0, Eb.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: bS.charms.map((SS => (0, Eb.jsx)(Gx, {
              charm: SS,
              view: gS,
              controller: HS
            }, SS.id)))
          }), (0, Eb.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Eb.jsx)("h3", {
              children: tS("skyblockGame:lampLightTints")
            })
          }), (0, Eb.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Eb.jsxs)("li", {
              className: Db()("SkyblockLampLightTint", "Islands", bS.wearingIslandColours && "Wearing"),
              children: [(0, Eb.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Eb.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: tS("skyblockGame:lampLightIslandColours")
              }), bS.wearingIslandColours ? (0, Eb.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: tS("skyblockGame:lampLightWearing")
              }) : (0, Eb.jsx)(Ub.g, {
                disabled: !gS.canCommand,
                ariaLabel: tS("skyblockGame:lampLightWearLabel", {
                  tint: tS("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  HS.wearTint(null)
                },
                children: tS("skyblockGame:lampLightWear")
              })]
            }), bS.tints.map((SS => (0, Eb.jsx)(Cx, {
              tint: SS,
              view: gS,
              controller: HS
            }, SS.id)))]
          })]
        })]
      })
    }

    function Px(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Vt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)();
      return gS.releasing ? (0, Eb.jsx)(hb.g, {
        children: (0, Eb.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            HS.setRelease(!1)
          },
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Eb.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [tS("skyblockGame:lampLightReleasing"), " \xb7 ", gS.balance]
          }), (0, Eb.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: tS("skyblockGame:lampLightKeepCatches")
          }), null !== gS.gained && (0, Eb.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: gS.gained.text
          }, gS.gained.count)]
        })
      }) : null
    }

    function Qx(SS) {
      let {
        island: HS,
        view: gS,
        aim: tS
      } = SS;
      const {
        t: bS
      } = (0, cb.F)(), XS = HS.featuredFish;
      return (0, Eb.jsxs)("li", {
        className: Db()("SkyblockKeepersChairIsland", `Island-${HS.id}`, HS.favoured && "Aimed", !HS.relit && "Dark"),
        children: [(0, Eb.jsx)("h3", {
          children: HS.name
        }), HS.relit && null !== XS ? (0, Eb.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: bS("skyblockGame:keepersChairTideNotice")
          }), (0, Eb.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Eb.jsx)(Jb.e, {
              itemName: XS.itemName,
              amount: 0
            })
          }), (0, Eb.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: XS.displayName
          })]
        }) : (0, Eb.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Eb.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: bS("skyblockGame:keepersChairDark")
          })
        }), HS.relit && (HS.favoured ? (0, Eb.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: bS("skyblockGame:keepersChairAimed")
        }) : (0, Eb.jsx)(Ub.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !gS.canAim,
          ariaLabel: bS("skyblockGame:keepersChairAimLabel", {
            island: HS.name
          }),
          onClick: () => {
            tS(HS.id)
          },
          children: bS("skyblockGame:keepersChairAim")
        }))]
      }, HS.favoured ? gS.aimedCount : 0)
    }

    function Dx(SS) {
      let {
        controller: HS,
        lampLight: gS
      } = SS;
      const tS = (0, vb.i)(dt, HS.getSnapshot()),
        bS = (0, vb.i)(Vt, gS.getSnapshot()),
        [XS, xS] = (0, JS.useState)("lamp"),
        {
          t: NS
        } = (0, cb.F)(),
        qS = sb();
      if (!tS.enabled) return null;
      const uS = "light" === XS && bS.enabled;
      return (0, Eb.jsx)(zb.c, {
        show: tS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: Db()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", uS && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: qS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: NS("skyblockGame:keepersChairTitle")
              }), (0, Eb.jsx)("p", {
                children: NS(uS ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              ariaLabel: NS("skyblockGame:keepersChairClose"),
              onClick: HS.dismiss
            })]
          }), bS.enabled && (0, Eb.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((SS => (0, Eb.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === SS === uS,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === SS === uS ? "true" : void 0,
              className: Db()("SkyblockKeepersChairTab", "light" === SS === uS && "Selected"),
              onClick: () => {
                xS(SS)
              },
              children: [NS("lamp" === SS ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === SS && (0, Eb.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: bS.balance
              })]
            }, SS)))
          }), uS ? (0, Eb.jsx)(nx, {
            controller: gS
          }) : (0, Eb.jsx)(wx, {
            view: tS,
            controller: HS
          })]
        })
      })
    }

    function wx(SS) {
      let {
        view: HS,
        controller: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)();
      return (0, Eb.jsxs)(Eb.Fragment, {
        children: [(0, Eb.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: HS.islands.map((SS => (0, Eb.jsx)(Qx, {
            island: SS,
            view: HS,
            aim: gS.aim
          }, SS.id)))
        }), null !== HS.almanac && (0, Eb.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: tS("skyblockGame:passageTitle")
          }), (0, Eb.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Eb.jsx)(fx, {
              phase: HS.almanac.phase
            }), HS.almanac.phaseName]
          }), (0, Eb.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Eb.jsx)(fx, {
              phase: HS.almanac.nextPhase
            }), HS.almanac.next]
          })]
        }), (0, Eb.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: tS("skyblockGame:keepersChairFavour")
          }), HS.aimed && (0, Eb.jsx)(Ub.P, {
            className: "SkyblockKeepersChairRest",
            disabled: !HS.canAim,
            onClick: () => {
              gS.aim(null)
            },
            children: tS("skyblockGame:keepersChairRest")
          })]
        }), null !== HS.status && (0, Eb.jsx)("p", {
          className: Db()("SkyblockKeepersChairStatus", "refused" === HS.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: HS.status.text
        })]
      })
    }

    function hx(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, vb.i)(vt, HS.getSnapshot());
      if (!tS.enabled) return null;
      const bS = tS.freshCount > 0 ? gS("skyblockGame:reachLogOpenNews", {
        count: tS.freshCount
      }) : gS("skyblockGame:reachLogOpen");
      return (0, Eb.jsx)(hb.g, {
        placement: "statBars",
        children: (0, Eb.jsxs)("button", {
          type: "button",
          className: Db()("SkyblockReachLogButton", tS.freshCount > 0 && "HasNews", tS.pending && "Pending"),
          "aria-label": bS,
          title: bS,
          onClick: HS.ask,
          children: [tS.news && (0, Eb.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${tS.newsToken}`), (0, Eb.jsx)("span", {
            className: Db()("SkyblockReachLogIcon", tS.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Eb.jsx)(Jb.e, {
              itemName: Lt,
              amount: 0
            })
          }, `icon:${tS.newsToken}`), tS.freshCount > 0 && (0, Eb.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: tS.freshCount
          })]
        })
      })
    }

    function Zx(SS) {
      let {
        gift: HS
      } = SS;
      return (0, Eb.jsx)("li", {
        className: Db()("SkyblockRegularsGift", HS.given && "Given"),
        children: HS.text
      })
    }

    function Jx(SS) {
      let {
        regular: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("li", {
        className: Db()("SkyblockRegularsCard", HS.tagged ? "Tagged" : "Untagged", HS.resting && "Resting"),
        children: [(0, Eb.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: HS.fishName,
            children: (0, Eb.jsx)(Jb.e, {
              itemName: HS.itemName,
              amount: 0
            })
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Eb.jsx)("h3", {
              children: HS.name
            }), (0, Eb.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: HS.fishName
            })]
          })]
        }), (0, Eb.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: HS.line
        }), (0, Eb.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: HS.size
          }), HS.tagged && (0, Eb.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: HS.resting ? gS("skyblockGame:regularsResting") : HS.meetings
          })]
        }), (0, Eb.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: HS.chance
        }), (0, Eb.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: HS.gifts.map((SS => (0, Eb.jsx)(Zx, {
            gift: SS
          }, SS.text)))
        }), HS.history.length > 0 && (0, Eb.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: HS.history.map(((SS, HS) => (0, Eb.jsx)("li", {
            children: SS
          }, HS)))
        })]
      })
    }

    function Ox(SS) {
      let {
        controller: HS,
        island: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)(), bS = (0, vb.i)(Hb, HS.getSnapshot()), XS = bS.islands.find((SS => SS.id === gS));
      if (!bS.enabled || void 0 === XS) return null;
      const xS = tS("skyblockGame:regularsOpen");
      return (0, Eb.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": xS,
        title: xS,
        onClick: () => {
          HS.openIsland(gS)
        },
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: tS("skyblockGame:regularsTitle")
        }), XS.regulars.map((SS => (0, Eb.jsx)("span", {
          className: Db()("SkyblockRegularsStripIcon", SS.tagged && "Tagged"),
          title: SS.name,
          children: (0, Eb.jsx)(Jb.e, {
            itemName: SS.itemName,
            amount: 0
          })
        }, SS.id)))]
      })
    }

    function dx(SS) {
      var HS;
      let {
        controller: gS
      } = SS;
      const tS = (0, vb.i)(Hb, gS.getSnapshot()),
        {
          t: bS
        } = (0, cb.F)(),
        XS = sb();
      if (!tS.enabled) return null;
      const xS = null !== (HS = tS.islands.find((SS => SS.id === tS.selected))) && void 0 !== HS ? HS : null;
      return (0, Eb.jsx)(zb.c, {
        show: tS.open,
        close: gS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: XS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: bS("skyblockGame:regularsTitle")
              }), (0, Eb.jsx)("p", {
                children: bS("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: gS.dismiss
            })]
          }), (0, Eb.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: tS.islands.map((SS => {
              const HS = SS.id === tS.selected;
              return (0, Eb.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": HS,
                "data-pad-tab": !0,
                "data-pad-selected": HS ? "true" : void 0,
                className: Db()("SkyblockReachLogTab", `Island-${SS.id}`, HS && "Selected", SS.charm.given && "GoldPage"),
                onClick: () => {
                  gS.selectIsland(SS.id)
                },
                children: (0, Eb.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: SS.name
                })
              }, SS.id)
            }))
          }), (0, Eb.jsxs)("div", {
            className: Db()("SkyblockRegularsPage", null !== xS && `Island-${xS.id}`),
            role: "tabpanel",
            children: [(0, Eb.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: bS("skyblockGame:regularsHow")
            }), null !== xS && (0, Eb.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: xS.regulars.map((SS => (0, Eb.jsx)(Jx, {
                regular: SS
              }, SS.id)))
            })]
          }), null !== xS && (0, Eb.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Eb.jsx)("span", {
              className: Db()("SkyblockRegularsCharm", xS.charm.given && "Given"),
              children: xS.charm.text
            })
          })]
        })
      })
    }
    const cx = [{
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
      vx = Array.from({
        length: 6
      }, ((SS, HS) => ({
        "--x": `${(88*(.618034*HS%1)).toFixed(1)}%`,
        "--y": `${(10+37*HS%70).toFixed(1)}%`,
        "--size": 7 + HS % 3 * 3 + "rem",
        "--drift-x": 3 * (HS % 3 - 1) + "rem",
        "--drift-y": 2 * (HS % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + HS % 4 * 3 + "s",
        "--delay": 2.5 * -HS + "s"
      }))),
      Ex = Array.from({
        length: 14
      }, ((SS, HS) => ({
        "--left": `${(3+94*((.618034*HS+.3)%1)).toFixed(1)}%`,
        "--size": 4 + HS % 4 * 2 + "px",
        "--sway": HS % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*HS%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*HS%12).toFixed(2)}s`
      }))),
      Lx = (0, JS.memo)((function(SS) {
        let {
          island: HS
        } = SS;
        return (0, Eb.jsxs)("div", {
          className: Db()("SkyblockReachLogDepths", null !== HS && `Island-${HS}`),
          "aria-hidden": "true",
          children: [cx.map(((SS, HS) => (0, Eb.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: SS
          }, `shaft${HS}`))), vx.map(((SS, HS) => (0, Eb.jsx)("span", {
            className: Db()("SkyblockReachLogMote", HS % 2 === 1 && "Violet"),
            style: SS
          }, `mote${HS}`))), Ex.map(((SS, HS) => (0, Eb.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: SS
          }, `bubble${HS}`)))]
        })
      })),
      Yx = 100;

    function Ax(SS) {
      let {
        view: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)();
      if (null === HS || 0 === HS.total) return null;
      const tS = Yx * HS.aspect,
        bS = gS("skyblockGame:hiddenWatersCount", {
          found: HS.found,
          total: HS.total
        });
      return (0, Eb.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${gS("skyblockGame:hiddenWatersTitle")}: ${bS}`,
        children: [(0, Eb.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${tS}`,
          "aria-hidden": "true",
          children: [HS.islands.map(((SS, HS) => (0, Eb.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (SS.left + SS.width / 2) * Yx,
            cy: (SS.top + SS.height / 2) * tS,
            rx: SS.width / 2 * Yx,
            ry: SS.height / 2 * tS
          }, HS))), HS.pins.map(((SS, HS) => (0, Eb.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: SS.left * Yx,
            cy: SS.top * tS,
            r: 13
          }, HS)))]
        }), (0, Eb.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: gS("skyblockGame:hiddenWatersTitle")
          }), (0, Eb.jsx)("span", {
            className: HS.found === HS.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: bS
          })]
        })]
      })
    }

    function yx(SS) {
      let {
        view: HS,
        island: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)(), bS = null === HS || void 0 === HS ? void 0 : HS.glimpses.get(gS);
      return void 0 === bS || 0 === bS.length ? null : (0, Eb.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: tS("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Eb.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: bS.map((SS => (0, Eb.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Eb.jsx)(Jb.e, {
              itemName: SS,
              amount: 0
            })
          }, SS)))
        })]
      })
    }
    const Vx = ["Bronze", "Silver", "Gold"],
      ix = [{
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
      Wx = ix.slice(0, 2);

    function zx(SS) {
      return SS ? ix : Wx
    }

    function Ux(SS) {
      let {
        fish: HS,
        letGoShown: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Vx.map(((SS, gS) => {
          const bS = gS < HS.marks;
          return (0, Eb.jsx)("span", {
            className: Db()("SkyblockReachLogPip", SS, bS && "Earned", bS && HS.fresh && gS === HS.marks - 1 && "Newest"),
            title: tS(Et[gS])
          }, SS)
        })), (0, Eb.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), zx(gS).map(((SS, gS) => (0, Eb.jsx)("span", {
          className: Db()("SkyblockReachLogRibbon", SS.className, !0 === HS.ribbons[gS] && "Earned"),
          title: tS(SS.titleKey)
        }, SS.className)))]
      })
    }

    function px(SS) {
      let {
        letGoShown: HS,
        haloShown: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Eb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tS("skyblockGame:reachLogMarks"),
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), tS("skyblockGame:reachLogLegendMarks")]
        }), zx(HS).map((SS => (0, Eb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tS(SS.titleKey),
          children: [(0, Eb.jsx)("span", {
            className: Db()("SkyblockReachLogRibbon", SS.className, "Earned")
          }), tS(SS.legendKey)]
        }, SS.className))), (0, Eb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tS("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), tS("skyblockGame:reachLogLegendGlimmer")]
        }), gS && (0, Eb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tS("skyblockGame:reachLogHaloTitle"),
          children: [(0, Eb.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), tS("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function sx(SS) {
      let {
        returner: HS
      } = SS;
      return (0, Eb.jsxs)("div", {
        className: Db()("SkyblockReachLogReturner", HS.back && "Back"),
        children: [(0, Eb.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Eb.jsx)(Jb.e, {
            itemName: HS.itemName,
            amount: 0
          })
        }), (0, Eb.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: HS.line
        })]
      })
    }

    function Bx(SS) {
      let {
        fish: HS,
        letGoShown: gS
      } = SS;
      const {
        t: tS
      } = (0, cb.F)();
      return (0, Eb.jsxs)("li", {
        className: Db()("SkyblockReachLogCard", HS.caught ? "Caught" : "Unknown", HS.marks >= 3 && "GoldCard", HS.fresh && "Fresh", HS.visitor && "Visitor"),
        children: [HS.visitor && (0, Eb.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: tS("skyblockGame:reachLogVisitor")
        }), HS.fresh && Array.from({
          length: 4
        }, ((SS, HS) => (0, Eb.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, HS))), (0, Eb.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [HS.halo && (0, Eb.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: tS("skyblockGame:reachLogHaloTitle")
          }), (0, Eb.jsx)(Jb.e, {
            itemName: HS.itemName,
            amount: 0
          }), HS.glimmer && (0, Eb.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: tS("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Eb.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: HS.name
        }), (0, Eb.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: HS.chance
        }), (0, Eb.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: HS.best
        }), (0, Eb.jsx)(Ux, {
          fish: HS,
          letGoShown: gS
        })]
      })
    }

    function Mx(SS) {
      let {
        page: HS,
        letGoShown: gS,
        hiddenWaters: tS
      } = SS;
      const {
        t: bS
      } = (0, cb.F)();
      return HS.awake ? (0, Eb.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: HS.fish.map((SS => (0, Eb.jsx)(Bx, {
          fish: SS,
          letGoShown: gS
        }, SS.itemName)))
      }) : (0, Eb.jsxs)(Eb.Fragment, {
        children: [(0, Eb.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: bS("skyblockGame:reachLogAsleep")
        }), (0, Eb.jsx)(yx, {
          view: tS,
          island: HS.id
        })]
      })
    }

    function Fx(SS) {
      var HS, gS;
      let {
        controller: tS,
        regulars: bS,
        hiddenWaters: XS
      } = SS;
      const xS = (0, vb.i)(vt, tS.getSnapshot()),
        NS = function(SS) {
          return (0, vb.i)(xb, SS.getSnapshot())
        }(XS),
        qS = (0, vb.i)(Hb, bS.getSnapshot()),
        {
          t: uS
        } = (0, cb.F)(),
        IS = sb();
      if (!xS.enabled) return null;
      const fS = null !== (HS = xS.pages.find((SS => SS.id === xS.selected))) && void 0 !== HS ? HS : null;
      return (0, Eb.jsx)(zb.c, {
        show: xS.open,
        close: tS.dismiss,
        togglePointerLock: !1,
        className: Db()("SkyblockSkillsOverlay", qS.open && "SkyblockReachLogUnderLedger"),
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: IS,
          onKeyDown: pb,
          children: [(0, Eb.jsx)(Lx, {
            island: null !== (gS = null === fS || void 0 === fS ? void 0 : fS.id) && void 0 !== gS ? gS : null
          }), (0, Eb.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: uS("skyblockGame:reachLogTitle")
              }), (0, Eb.jsx)("p", {
                children: uS("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Eb.jsx)(Ax, {
              view: NS
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: tS.dismiss
            })]
          }), (0, Eb.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: xS.pages.map((SS => {
              const HS = SS.id === xS.selected,
                gS = SS.fish.some((SS => SS.fresh));
              return (0, Eb.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": HS,
                "data-pad-tab": !0,
                "data-pad-selected": HS ? "true" : void 0,
                className: Db()("SkyblockReachLogTab", `Island-${SS.id}`, HS && "Selected", !SS.awake && "Asleep", SS.gold && "GoldPage", gS && "HasNews"),
                onClick: () => {
                  tS.selectPage(SS.id)
                },
                children: [(0, Eb.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: SS.name
                }), SS.awake && (0, Eb.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: uS("skyblockGame:reachLogCaughtCount", {
                    caught: SS.caught,
                    total: SS.total
                  })
                })]
              }, SS.id)
            }))
          }), (0, Eb.jsxs)("div", {
            className: Db()("SkyblockReachLogPage", null !== fS && `Island-${fS.id}`),
            role: "tabpanel",
            children: [null !== fS && (0, Eb.jsx)(Mx, {
              page: fS,
              letGoShown: xS.letGoShown,
              hiddenWaters: NS
            }), !0 === (null === fS || void 0 === fS ? void 0 : fS.awake) && null !== fS.returner && (0, Eb.jsx)(sx, {
              returner: fS.returner
            }), !0 === (null === fS || void 0 === fS ? void 0 : fS.awake) && (0, Eb.jsx)(Ox, {
              controller: bS,
              island: fS.id
            })]
          }), (0, Eb.jsx)("footer", {
            className: Db()("SkyblockReachLogFooter", null !== fS && `Island-${fS.id}`, !0 === (null === fS || void 0 === fS ? void 0 : fS.gold) && "GoldPage"),
            children: !0 === (null === fS || void 0 === fS ? void 0 : fS.gold) ? (0, Eb.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: uS("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Eb.jsxs)(Eb.Fragment, {
              children: [(0, Eb.jsx)(px, {
                letGoShown: xS.letGoShown,
                haloShown: !0 === (null === fS || void 0 === fS ? void 0 : fS.fish.some((SS => SS.halo)))
              }), (0, Eb.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: uS("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Rx = gS(4967);

    function Tx(SS) {
      let {
        conversation: HS,
        completedLabel: gS
      } = SS;
      return (0, Eb.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Eb.jsxs)("header", {
          children: [(0, Eb.jsx)("h3", {
            children: HS.questName
          }), HS.completed && (0, Eb.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: gS
          })]
        }), HS.lines.map((SS => (0, Eb.jsx)(Rx.e, {
          display: SS.display
        }, SS.key)))]
      })
    }

    function ox(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, vb.i)(qb, HS.getSnapshot()), bS = sb();
      if (!tS.enabled) return null;
      const XS = !tS.loading && 0 === tS.conversations.length;
      return (0, Eb.jsx)(zb.c, {
        show: tS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: gS("skyblockDialogue:title")
              }), (0, Eb.jsx)("p", {
                children: gS("skyblockDialogue:intro")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: HS.dismiss
            })]
          }), (0, Eb.jsxs)("div", {
            className: Db()("SkyblockDialogueBody", {
              SingleColumn: null !== tS.questFocus || 0 === tS.characters.length
            }),
            children: [null === tS.questFocus && tS.characters.length > 0 && (0, Eb.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: tS.characters.map((SS => (0, Eb.jsx)(Ub.g, {
                className: Db()("SkyblockDialogueCharacter", {
                  Selected: SS.selected
                }),
                onClick: () => {
                  HS.selectCharacter(SS.id)
                },
                children: (0, Eb.jsx)(Ob.c, {
                  text: SS.styling
                })
              }, SS.id)))
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== tS.questFocus && (0, Eb.jsx)(Ub.g, {
                className: "SkyblockDialogueBack",
                onClick: HS.showCharacters,
                children: gS("skyblockDialogue:allCharacters")
              }), tS.loading && (0, Eb.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: gS("skyblockDialogue:loading")
              }), XS && (0, Eb.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: gS(null === tS.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), tS.conversations.map((SS => (0, Eb.jsx)(Tx, {
                conversation: SS,
                completedLabel: tS.completedLabel
              }, SS.questId)))]
            })]
          })]
        })
      })
    }

    function lx(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(ab, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb();
      return gS.enabled ? (0, Eb.jsx)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: tS("skyblockGame:autographBook")
              }), (0, Eb.jsx)("p", {
                children: tS("skyblockGame:autographBookIntro")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              onClick: HS.dismiss
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Eb.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Eb.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Eb.jsx)("strong", {
                  children: gS.total
                }), (0, Eb.jsx)("span", {
                  children: tS("skyblockGame:autographTotal")
                })]
              }), (0, Eb.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Eb.jsx)("strong", {
                  children: gS.rankTotal
                }), (0, Eb.jsx)("span", {
                  children: tS("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === gS.entries.length ? (0, Eb.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: tS("skyblockGame:autographBookEmpty")
            }) : (0, Eb.jsx)("ul", {
              className: "SkyblockAutographList",
              children: gS.entries.map((SS => (0, Eb.jsxs)("li", {
                className: Db()("SkyblockAutograph", {
                  Ranked: null !== SS.rank
                }),
                style: null === SS.rank ? void 0 : {
                  color: SS.rank.colour
                },
                children: [null !== SS.rank && (0, Eb.jsx)(aX.d, {
                  className: "SkyblockAutographRankIcon",
                  name: SS.rank.icon,
                  kit: (0, aX.h)(SS.rank.icon)
                }), (0, Eb.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Eb.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: SS.name
                  }), (0, Eb.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== SS.rank && (0, Eb.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: SS.rank.label
                    }), (0, Eb.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: SS.signedOn
                    })]
                  })]
                })]
              }, SS.key)))
            })]
          })]
        })
      }) : null
    }
    const mx = (0, JS.memo)((function(SS) {
        let {
          controller: HS
        } = SS;
        return (0, Eb.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: HS.display.mountWaypoint,
          children: [(0, Eb.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Eb.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Eb.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Eb.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Eb.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Eb.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      ex = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function rx(SS) {
      return "next" === SS.phase ? "\u2192" : ex[SS.kind]
    }
    const SN = (0, JS.memo)((function(SS) {
      let {
        controller: HS,
        display: gS
      } = SS;
      const tS = (0, vb.i)(Ig, HS.getNotificationSnapshot()),
        [bS, XS] = (0, JS.useState)(!1);
      return (0, vb.g)("qteStateUpdated", (SS => {
        XS(SS.isActive)
      })), (0, Eb.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (bS ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [tS && (0, Eb.jsxs)("div", {
          className: `SkyblockQuestNotification ${tS.kind} ${tS.phase}`,
          style: {
            "--quest-notification-duration": `${tS.durationMs}ms`,
            ...tS.accent && {
              "--quest-notification-accent": tS.accent
            }
          },
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (tS.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: rx(tS)
            }), tS.iconItem && (0, Eb.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Eb.jsx)(Jb.e, {
                itemName: tS.iconItem,
                amount: 0
              })
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: tS.title
            }), (0, Eb.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Eb.jsx)(xX.c, {
                text: tS.name
              })
            }), tS.description && (0, Eb.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Eb.jsx)(xX.c, {
                text: tS.description
              })
            }), tS.reward && (0, Eb.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Eb.jsx)(xX.c, {
                text: tS.reward
              })
            })]
          })]
        }, tS.token), (null === tS || void 0 === tS ? void 0 : tS.waypointNameKey) && (0, Eb.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": tS.waypointNameKey,
          "data-notification-token": tS.token,
          ref: gS.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${tS.token}`)]
      })
    }));

    function HN(SS) {
      const HS = parseInt(SS.replace("#", ""), 16);
      return `${HS>>16&255}, ${HS>>8&255}, ${255&HS}`
    }
    const gN = (0, JS.memo)((function(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, vb.i)(ig, HS.getSnapshot());
      if (!tS) return null;
      const bS = "arrival" === tS.phase;
      return (0, Eb.jsxs)("div", {
        className: Db()("SkyblockPortalTransit", {
          Departure: !bS,
          Arrival: bS
        }),
        style: {
          "--portal-rgb": HN(tS.colour),
          "--portal-duration": `${tS.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Eb.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Eb.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            HS.finishArrival(tS.token)
          }
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Eb.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !bS && (0, Eb.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: gS("skyblockGame:portalTransitHeading")
          }), (0, Eb.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: gS(tS.zoneNameKey)
          })]
        })]
      }, tS.token)
    }));

    function tN() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function bN() {
      const SS = document.querySelector(".SkyblockHudCoins"),
        HS = null === SS || void 0 === SS ? void 0 : SS.getBoundingClientRect();
      return HS && HS.width > 0 ? {
        x: HS.left + Math.min(HS.width, 24) / 2,
        y: HS.top + HS.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function XN(SS) {
      return {
        x: SS.left + SS.width / 2,
        y: SS.top + SS.height / 2
      }
    }

    function xN() {
      var SS;
      const HS = null === (SS = document.querySelector(".HotBar")) || void 0 === SS ? void 0 : SS.getBoundingClientRect();
      return HS && HS.width > 0 ? XN(HS) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function NN(SS) {
      let {
        items: HS,
        origins: gS,
        target: tS
      } = SS;
      return (0, Eb.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: HS.map(((SS, HS) => {
          const bS = gS[HS];
          return (0, Eb.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${bS.x}px`,
              top: `${bS.y}px`,
              "--item-dx": tS.x - bS.x + "px",
              "--item-dy": tS.y - bS.y + "px",
              "--item-delay": 2e3 + 160 * HS + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Eb.jsx)(Jb.e, {
              itemName: SS.dailyRewardItemName,
              amount: 0
            })
          }, SS.dailyRewardItemName)
        }))
      })
    }

    function qN(SS, HS) {
      const gS = -Math.PI / 2 + 1.25 * (SS / (HS - 1) * 2 - 1),
        tS = 70 + SS % 3 * 22;
      return {
        x: Math.cos(gS) * tS,
        y: Math.sin(gS) * tS * .7
      }
    }

    function uN(SS) {
      let {
        origin: HS,
        target: gS,
        count: tS
      } = SS;
      const bS = [];
      for (let XS = 0; XS < tS; XS++) {
        const SS = qN(XS, tS);
        bS.push((0, Eb.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${HS.x}px`,
            top: `${HS.y}px`,
            "--coin-bx": `${SS.x}px`,
            "--coin-by": `${SS.y}px`,
            "--coin-dx": gS.x - HS.x + "px",
            "--coin-dy": gS.y - HS.y + "px",
            "--coin-delay": `${Bg(XS,tS)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Eb.jsx)(Jb.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, XS))
      }
      return (0, Eb.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: bS
      })
    }

    function IN(SS) {
      let {
        day: HS
      } = SS;
      const gS = OS[HS - 1];
      return (0, Eb.jsxs)(Eb.Fragment, {
        children: [(0, Eb.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Eb.jsx)(Jb.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, db.f)(gS.dailyRewardCoins)]
        }), gS.dailyRewardItems.map((SS => (0, Eb.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Eb.jsx)(Jb.e, {
            itemName: SS.dailyRewardItemName,
            amount: 0
          }), "\xd7", SS.dailyRewardItemAmount]
        }, SS.dailyRewardItemName)))]
      })
    }

    function fN(SS) {
      let {
        day: HS
      } = SS;
      const gS = cS(HS);
      return (0, Eb.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: OS.map(((SS, tS) => {
          const bS = tS + 1;
          return (0, Eb.jsxs)("li", {
            className: Db()("SkyblockDailyRewardTile", {
              Claimed: bS < HS && bS !== gS,
              Today: bS === HS,
              Tomorrow: bS === gS,
              Jackpot: bS === dS
            }),
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: bS
            }), (0, Eb.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Eb.jsx)(Jb.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, db.f)(SS.dailyRewardCoins)]
            }), SS.dailyRewardItems.map((SS => (0, Eb.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Eb.jsx)(Jb.e, {
                itemName: SS.dailyRewardItemName,
                amount: 0
              }), "\xd7", SS.dailyRewardItemAmount]
            }, SS.dailyRewardItemName)))]
          }, bS)
        }))
      })
    }

    function kN(SS) {
      let {
        view: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, JS.useRef)(null), bS = (0, JS.useRef)(null), [XS, xS] = (0, JS.useState)(null);
      (0, JS.useLayoutEffect)((() => {
        var SS;
        const HS = null === (SS = tS.current) || void 0 === SS ? void 0 : SS.getBoundingClientRect();
        if (HS) {
          var gS, XS;
          const SS = Array.from(null !== (gS = null === (XS = bS.current) || void 0 === XS ? void 0 : XS.children) && void 0 !== gS ? gS : [], (SS => XN(SS.getBoundingClientRect())));
          xS({
            origin: XN(HS),
            target: bN(),
            itemOrigins: SS,
            itemTarget: xN()
          })
        }
      }), []);
      const NS = cS(HS.day),
        qS = function(SS, HS) {
          const [gS, tS] = (0, JS.useState)((() => tN() ? SS : 0));
          return (0, JS.useEffect)((() => {
            if (tN()) return;
            const gS = performance.now();
            let bS = 0;
            const XS = xS => {
              const NS = Math.min(Math.max((xS - gS) / HS, 0), 1);
              tS(Math.round(SS * (1 - (1 - NS) ** 3))), NS < 1 && (bS = requestAnimationFrame(XS))
            };
            return bS = requestAnimationFrame(XS), () => {
              cancelAnimationFrame(bS)
            }
          }), [SS, HS]), gS
        }(HS.coins, 450);
      return (0, Eb.jsxs)("div", {
        className: Db()("SkyblockDailyReward", {
          Jackpot: HS.day === dS
        }),
        style: {
          "--daily-duration": `${HS.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Eb.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Eb.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: gS("skyblockGame:dailyRewardTitle")
            }), (0, Eb.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: gS("skyblockGame:dailyRewardDay", {
                day: String(HS.day)
              })
            })]
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: tS,
            children: [(0, Eb.jsx)(Jb.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Eb.jsxs)("span", {
              children: ["+", (0, db.f)(qS)]
            })]
          }), HS.items.length > 0 && (0, Eb.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: bS,
            children: HS.items.map((SS => (0, Eb.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Eb.jsx)(Jb.e, {
                itemName: SS.dailyRewardItemName,
                amount: 0
              }), "\xd7", SS.dailyRewardItemAmount]
            }, SS.dailyRewardItemName)))
          }), (0, Eb.jsx)(fN, {
            day: HS.day
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [gS("skyblockGame:dailyRewardComeBack"), (0, Eb.jsx)(IN, {
              day: NS
            })]
          })]
        }), null !== XS && (0, Eb.jsx)(uN, {
          origin: XS.origin,
          target: XS.target,
          count: HS.flyingCoins
        }), null !== XS && XS.itemOrigins.length === HS.items.length && (0, Eb.jsx)(NN, {
          items: HS.items,
          origins: XS.itemOrigins,
          target: XS.itemTarget
        })]
      })
    }
    const aN = (0, JS.memo)((function(SS) {
        let {
          controller: HS
        } = SS;
        const gS = (0, vb.i)(Ug, HS.getSnapshot());
        return gS ? (0, Eb.jsx)(kN, {
          view: gS
        }, gS.token) : null
      })),
      KN = "Gold Coin";

    function jN(SS) {
      return 650 + 220 * SS
    }

    function GN(SS) {
      return {
        "--letter-delay": `${jN(SS)}ms`,
        "--letter-land": `${jN(SS)+300}ms`
      }
    }

    function CN(SS) {
      let {
        letterCount: HS
      } = SS;
      return (0, Eb.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Eb.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Eb.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Eb.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: HS
        }, ((SS, HS) => (0, Eb.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: GN(HS),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, HS)))]
      })
    }

    function nN(SS) {
      var HS, gS, tS;
      let {
        letter: bS,
        index: XS
      } = SS;
      const {
        t: xS
      } = (0, cb.F)(), NS = null !== (HS = null === (gS = bS.items[0]) || void 0 === gS ? void 0 : gS.itemName) && void 0 !== HS ? HS : KN;
      return (0, Eb.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: GN(XS),
        children: [(0, Eb.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Eb.jsx)(Jb.e, {
            itemName: NS,
            amount: 0
          })
        }), (0, Eb.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: xS(bS.reasonKey, null !== (tS = bS.reasonParams) && void 0 !== tS ? tS : void 0)
        }), (0, Eb.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [bS.coins > 0 && (0, Eb.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Eb.jsx)(Jb.e, {
              itemName: KN,
              amount: 0
            }), "+", (0, db.f)(bS.coins)]
          }), bS.items.map(((SS, HS) => (0, Eb.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Eb.jsx)(Jb.e, {
              itemName: SS.itemName,
              amount: 0
            }), SS.label, " \xd7", SS.amount]
          }, HS)))]
        })]
      })
    }

    function PN(SS) {
      let {
        view: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)();
      return (0, Eb.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${HS.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${jN(HS.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Eb.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Eb.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Eb.jsx)(CN, {
              letterCount: HS.letters.length
            }), (0, Eb.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: gS("skyblockGame:mailboxTitle")
            })]
          }), (0, Eb.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: HS.letters.map(((SS, HS) => (0, Eb.jsx)(nN, {
              letter: SS,
              index: HS
            }, HS)))
          }), HS.more > 0 && (0, Eb.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: gS("skyblockGame:mailboxMore", {
              count: String(HS.more)
            })
          })]
        })
      })
    }
    const QN = (0, JS.memo)((function(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Fg, HS.getSnapshot());
      return gS ? (0, Eb.jsx)(PN, {
        view: gS
      }, gS.token) : null
    }));

    function DN(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, vb.i)(Wt, HS.getSnapshot());
      if (null === tS) return null;
      const bS = tS.fullSet ? "empty" === tS.fuelState ? {
        text: gS("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: gS("skyblockGame:magmawardHudFullSet", {
          worn: String(tS.wornCount)
        }),
        tone: "partial"
      };
      return (0, Eb.jsx)(hb.g, {
        placement: "statBars",
        children: (0, Eb.jsxs)("div", {
          className: Db()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${tS.fuelState}`, {
            "SkyblockMagmawardHud-partial": !tS.fullSet,
            "SkyblockMagmawardHud-armed": tS.fullSet && "empty" !== tS.fuelState
          }),
          children: [null !== tS.flare && (0, Eb.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${tS.flare}`
          }, `flare:${tS.flareToken}`), (0, Eb.jsx)("div", {
            className: Db()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: tS.setLit
            }),
            children: tS.pieces.map(((SS, HS) => (0, Eb.jsx)("div", {
              className: Db()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: SS.worn,
                SkyblockMagmawardPieceJustWorn: SS.justWorn
              }),
              children: (0, Eb.jsx)(Jb.e, {
                itemName: SS.itemName,
                amount: 0
              })
            }, `${HS}:${SS.wornToken}`)))
          }, `pieces:${tS.setLitToken}`), (0, Eb.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Eb.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Eb.jsxs)("div", {
              className: Db()("SkyblockMagmawardFuelCounter", tS.pulse && `SkyblockMagmawardFuelCounter-${tS.pulse}`),
              children: [(0, Eb.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Eb.jsx)(Jb.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Eb.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: tS.fuel
              })]
            }, `counter:${tS.pulseToken}`), "burn" === tS.pulse && (0, Eb.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${tS.pulseToken}`)]
          }), bS && (0, Eb.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${bS.tone} SmallTextBold`,
            children: bS.text
          })]
        })
      })
    }

    function wN(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS,
        selectedLanguage: tS
      } = (0, cb.F)(), bS = (0, vb.i)(Ut, HS.getSnapshot());
      return null === bS ? null : (0, Eb.jsx)(hb.g, {
        placement: "statBars",
        children: (0, Eb.jsxs)("div", {
          className: Db()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: bS.inRange
          }),
          style: {
            "--glowtide-colour": bS.colour
          },
          "aria-label": gS("skyblockGame:glowtideChipLabel"),
          children: [(0, Eb.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), bS.inRange ? (0, Eb.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: gS("skyblockGame:glowtideChipInRange")
          }, `call:${bS.inRangeToken}`) : (0, Eb.jsxs)(Eb.Fragment, {
            children: [(0, Eb.jsx)("div", {
              ref: HS.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Eb.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: gS("skyblockGame:waypointDistance", {
                distance: wS(bS.distance, tS.code)
              })
            })]
          })]
        })
      })
    }

    function hN(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, vb.i)(st, HS.getSnapshot());
      return null === tS ? null : (0, Eb.jsx)(hb.g, {
        placement: "statBars",
        children: (0, Eb.jsxs)("div", {
          className: Db()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: tS.full
          }),
          "aria-label": gS("skyblockGame:glowMeterLabel", {
            fill: String(tS.fill),
            hf: String(tS.hf)
          }),
          children: [tS.burst && (0, Eb.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${tS.burstToken}`), (0, Eb.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Eb.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${tS.ratio})`
              }
            }), tS.gained && (0, Eb.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${tS.gainToken}`), tS.full && Array.from({
              length: 5
            }, ((SS, HS) => (0, Eb.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, HS)))]
          }), tS.full && tS.rares.map((SS => (0, Eb.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Eb.jsx)(Jb.e, {
              itemName: SS,
              amount: 0
            })
          }, SS))), tS.ready && (0, Eb.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Eb.jsx)("span", {
              children: gS("skyblockGame:glowMeterReady")
            })
          }, `ready:${tS.fullToken}`)]
        })
      })
    }

    function ZN(SS) {
      let {
        controller: HS
      } = SS;
      const {
        t: gS
      } = (0, cb.F)(), tS = (0, vb.i)(Mt, HS.getSnapshot());
      if (null === tS) return null;
      const bS = "waiting" === tS.phase,
        XS = {
          animationDuration: `${tS.waitMs}ms`,
          animationDelay: -tS.elapsedMs + "ms"
        },
        xS = bS ? void 0 : {
          animationDuration: `${tS.waitMs}ms`
        };
      return (0, Eb.jsxs)("div", {
        className: bS ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [bS && (0, Eb.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((SS, HS) => (0, Eb.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, HS))), (0, Eb.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: XS
          }), (0, Eb.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Eb.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Eb.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: XS
            })]
          }), (0, Eb.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Eb.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: xS,
          children: gS(tS.line)
        }, tS.lineIndex)]
      }, tS.token)
    }

    function JN(SS) {
      let {
        chart: HS,
        showHere: gS,
        className: tS
      } = SS;
      return (0, Eb.jsx)("div", {
        className: Db()("SkyblockTideChartGrid", tS, null !== HS.pictureName && "Complete"),
        "aria-hidden": "true",
        children: HS.cells.map(((SS, tS) => {
          const bS = 0 !== (HS.pulseCells & 1 << tS),
            XS = HS.castCell === tS;
          return (0, Eb.jsx)("span", {
            className: Db()("SkyblockTideChartCell", `Cell-${SS}`, bS && "Pulse", XS && "Cast", gS && HS.hereCell === tS && "Here")
          }, `${tS}:${bS?`p${HS.pulseToken}`:""}:${XS?`c${HS.castToken}`:""}`)
        }))
      })
    }

    function ON(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Rt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = gS.chip;
      if (!gS.enabled || null === bS) return null;
      const XS = tS("skyblockGame:tideChartsChipLabel", {
        island: bS.islandName,
        lit: String(bS.lit),
        ink: String(bS.ink)
      });
      return (0, Eb.jsx)(hb.g, {
        placement: "statBars",
        children: (0, Eb.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Db()("SkyblockTideChartsChip", gS.open && "Open", null !== bS.pictureName && "Complete"),
          "aria-label": XS,
          title: XS,
          onMouseDown: SS => {
            SS.preventDefault()
          },
          onClick: HS.toggle,
          children: [(0, Eb.jsx)(JN, {
            chart: bS,
            showHere: !1,
            className: "Mini"
          }), (0, Eb.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [bS.lit, "/", bS.ink]
          })]
        })
      })
    }

    function dN(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, vb.i)(Rt, HS.getSnapshot()),
        {
          t: tS
        } = (0, cb.F)(),
        bS = sb(),
        XS = gS.card;
      return gS.enabled && null !== XS ? (0, Eb.jsx)(zb.c, {
        show: gS.open,
        close: HS.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Eb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: bS,
          onKeyDown: pb,
          children: [(0, Eb.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Eb.jsxs)("div", {
              children: [(0, Eb.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: tS("skyblockGame:tideChartsTitle")
              }), (0, Eb.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: tS("skyblockGame:tideChartsIntro")
              })]
            }), (0, Eb.jsx)(Ub.l, {
              padIgnore: !0,
              ariaLabel: tS("skyblockGame:tideChartsClose"),
              onClick: HS.dismiss
            })]
          }), gS.tabs.length > 1 && (0, Eb.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": tS("skyblockGame:tideChartsIslands"),
            children: gS.tabs.map((SS => (0, Eb.jsx)("button", {
              type: "button",
              className: Db()("SkyblockTideChartsTab", SS.selected && "Selected"),
              "aria-pressed": SS.selected,
              onClick: () => {
                HS.Sa(SS.island)
              },
              children: SS.name
            }, SS.island)))
          }), (0, Eb.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Eb.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": XS.gridLabel,
              children: (0, Eb.jsx)(JN, {
                chart: XS,
                showHere: !0,
                className: "Large"
              })
            }), (0, Eb.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Eb.jsx)("h3", {
                children: XS.islandName
              }), (0, Eb.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: XS.litText
              }), null === XS.pictureName ? (0, Eb.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: tS("skyblockGame:tideChartsPictureHidden")
              }) : (0, Eb.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: tS("skyblockGame:tideChartsPictureRevealed", {
                  picture: XS.pictureName
                })
              }, XS.pictureName), (0, Eb.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Eb.jsxs)("li", {
                  children: [(0, Eb.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), tS("skyblockGame:tideChartsLegendLit")]
                }), (0, Eb.jsxs)("li", {
                  children: [(0, Eb.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), tS("skyblockGame:tideChartsLegendClear")]
                }), null !== XS.hereCell && (0, Eb.jsxs)("li", {
                  children: [(0, Eb.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), tS("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Eb.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Eb.jsx)("span", {
                  children: gS.turnsText
                }), (0, Eb.jsx)("span", {
                  children: gS.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function cN(SS) {
      var HS;
      let {
        controller: gS
      } = SS;
      const {
        selectedLanguage: tS
      } = (0, cb.F)(), bS = tS.code;
      (0, JS.useEffect)((() => {
        gS.setTranslator(((SS, HS) => (0, cb.C)(bS, SS, HS)), bS, ((SS, HS) => (0, cb.x)(bS, SS, HS)))
      }), [gS, bS]);
      const XS = (0, vb.i)(kS, gS.map.getSnapshot()),
        {
          openInGameMenuName: xS
        } = (0, wb.m)(["openInGameMenuName"]);
      return (0, Eb.jsxs)(Eb.Fragment, {
        children: [(0, Eb.jsx)(SN, {
          controller: gS.quests,
          display: gS.navigation.display
        }), XS.enabled && !xS && (0, Eb.jsx)(tX, {
          controller: gS.navigation
        }), (0, Eb.jsx)(Lb, {
          controller: gS,
          minimap: XS.enabled && (null === (HS = XS.presentation) || void 0 === HS ? void 0 : HS.minimap) && (0, Eb.jsx)(gX, {
            view: XS.presentation.minimap,
            navigation: gS.navigation,
            controller: gS.map
          }),
          children: (0, Eb.jsx)(kX, {
            controller: gS.quests,
            surface: "hud"
          })
        }), (0, Eb.jsx)(mx, {
          controller: gS.navigation
        }), (0, Eb.jsx)(gN, {
          controller: gS.portalTransit
        }), (0, Eb.jsx)(aN, {
          controller: gS.dailyReward
        }), (0, Eb.jsx)(QN, {
          controller: gS.mailbox
        }), (0, Eb.jsx)(DN, {
          controller: gS.magmaward
        }), (0, Eb.jsx)(wN, {
          controller: gS.glowtide
        }), (0, Eb.jsx)(kx, {
          controller: gS.passage
        }), (0, Eb.jsx)(ON, {
          controller: gS.tideCharts
        }), (0, Eb.jsx)(hN, {
          controller: gS.glowMeter
        }), (0, Eb.jsx)(hx, {
          controller: gS.reachLog
        }), (0, Eb.jsx)(ZN, {
          controller: gS.hushWait
        }), (0, Eb.jsx)(Px, {
          controller: gS.lampLight
        }), (0, Eb.jsx)(bX, {
          controller: gS.skills,
          surface: "hud"
        })]
      })
    }

    function vN(SS) {
      let {
        controller: HS
      } = SS;
      return (0, Eb.jsxs)(Eb.Fragment, {
        children: [(0, Eb.jsx)(HX, {
          controller: HS.map,
          navigation: HS.navigation
        }), (0, Eb.jsx)(bX, {
          controller: HS.skills,
          surface: "menu"
        }), (0, Eb.jsx)(kX, {
          controller: HS.quests,
          surface: "menu"
        }), (0, Eb.jsx)(RX, {
          controller: HS.dungeons
        }), (0, Eb.jsx)(lX, {
          controller: HS.collections
        }), (0, Eb.jsx)(rX, {
          controller: HS.questGraph
        }), (0, Eb.jsx)(bx, {
          controller: HS.forge
        }), (0, Eb.jsx)(Ix, {
          controller: HS.smuggler
        }), (0, Eb.jsx)(Dx, {
          controller: HS.keepersChair,
          lampLight: HS.lampLight
        }), (0, Eb.jsx)(Fx, {
          controller: HS.reachLog,
          regulars: HS.regulars,
          hiddenWaters: HS.hiddenWaters
        }), (0, Eb.jsx)(dx, {
          controller: HS.regulars
        }), (0, Eb.jsx)(Kx, {
          controller: HS.passage
        }), (0, Eb.jsx)(dN, {
          controller: HS.tideCharts
        }), (0, Eb.jsx)(ox, {
          controller: HS.dialogue
        }), (0, Eb.jsx)(lx, {
          controller: HS.autographs
        })]
      })
    }
    var EN = gS(36773);
    const LN = St + Nt;

    function YN(SS, HS, gS, tS, bS) {
      const XS = [],
        xS = [],
        NS = gS => {
          const tS = SS.playSound(HS, gS.sound, gS.volume, gS.rate);
          tS && (xS.push(tS), void 0 !== gS.cutAfter && XS.push(setTimeout((() => {
            tS.fade(tS.getVolume(), 0, 300)
          }), gS.cutAfter)))
        };
      for (const qS of function(SS, HS) {
          const gS = [{
            sound: "rpgKnifeSlice1",
            beat: St,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: St,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: St,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: St,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: St,
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
            sound: (0, EN.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: LN + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, EN.e)("bigDrumSwish"),
            beat: LN + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: LN + 60,
            lead: 180,
            volume: .5 + .06 * SS,
            rate: .82 + .07 * SS
          }];
          return SS >= 4 && gS.push({
            sound: "exp_levelup",
            beat: LN + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), HS && gS.push({
            sound: "trumpetFlare",
            beat: LN + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), gS.push({
            sound: "harp_pling",
            beat: Ht,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), gS
        }(gS, tS)) bS ? XS.push(setTimeout((() => {
        NS(qS)
      }), Math.max(0, qS.beat - qS.lead / qS.rate))) : qS.beat !== St && "magicAccent2" !== qS.sound && "trumpetFlare" !== qS.sound || NS(qS);
      return () => {
        for (const SS of XS) clearTimeout(SS);
        for (const SS of xS) SS.fade(SS.getVolume(), 0, 120)
      }
    }
    class AN {
      constructor(SS) {
        this.deps = SS, this.pending = new Map, this.localHook = null
      }
      hookWaiting(SS, HS) {
        this.pending.delete(SS);
        const gS = this.deps.now();
        if (null === HS) {
          var tS;
          if ((null === (tS = this.localHook) || void 0 === tS ? void 0 : tS.hookId) === SS) {
            const SS = gS >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(SS)
          }
          return
        }
        const bS = gS + HS;
        this.settle(SS, bS) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(SS, {
          untilMs: gS + 1e3,
          biteAtMs: bS
        }))
      }
      getLocalHook() {
        var SS, HS;
        return null !== (SS = null === (HS = this.localHook) || void 0 === HS ? void 0 : HS.hookId) && void 0 !== SS ? SS : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const SS = this.deps.now();
        for (const [HS, {
            untilMs: gS,
            biteAtMs: tS
          }] of this.pending)(this.settle(HS, tS) || SS > gS) && this.pending.delete(HS)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(SS, HS) {
        const gS = this.deps.getLineOwner(SS);
        if (null === gS) return !1;
        if (!this.deps.isLocalPlayer(gS)) return !0;
        if (this.localHook = {
            hookId: SS,
            biteAtMs: HS
          }, !this.deps.isHushWaiting()) {
          const [HS, gS] = this.deps.getHookPosition(SS);
          this.deps.onCastLanded(HS, gS)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var yN = gS(4356);
    const VN = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      iN = {
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
    class WN {
      constructor(SS) {
        this.deps = SS, this.tell = null
      }
      receiveTell(SS) {
        let {
          biteTellTier: HS
        } = SS;
        this.tell = {
          tier: HS,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(SS) {
        const HS = this.tell;
        if (this.tell = null, !SS) return;
        const gS = null !== HS && this.deps.now() - HS.atMs <= 3e3 ? HS.tier : 0;
        this.deps.vibrate(VN[gS])
      }
      burstAtHook() {
        const SS = this.tell,
          HS = this.deps.getLocalHookPosition();
        null === SS || SS.burst || null === HS || (SS.burst = !0, this.deps.playParticles(function(SS, HS) {
          let [gS, tS, bS] = HS;
          const {
            count: XS,
            rise: xS,
            colour: NS
          } = iN[SS], [qS, uS, IS] = NS;
          return {
            texture: "glint",
            pos1: [gS - .3, tS, bS - .3],
            pos2: [gS + .3, tS + .2, bS + .3],
            dir1: [-.6, xS, -.6],
            dir2: [.6, 1.4 * xS, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: XS,
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
              minColor: [qS, uS, IS, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [qS, uS, IS, 0],
              maxColor: [qS, uS, IS, 0]
            }],
            blendMode: yN.g.Add,
            hideDist: 48
          }
        }(SS.tier, HS)))
      }
    }
    var zN = gS(1334),
      UN = gS(2069),
      pN = gS(45);

    function sN(SS, HS) {
      return [{
        timeFraction: 0,
        minColor: [255 * SS[0], 255 * SS[1], 255 * SS[2], 1],
        maxColor: [255 * HS[0], 255 * HS[1], 255 * HS[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const BN = [0, 0, 0],
      MN = {
        texture: "glint",
        mipmaps: !1,
        hf: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: BN,
        dir2: BN,
        blendMode: yN.g.OneOne
      },
      FN = {
        ...MN,
        colorGradients: sN([1, .88, .38], [1, .65, .15])
      },
      RN = {
        ...MN,
        colorGradients: sN([.55, .95, 1], [.9, 1, 1])
      },
      TN = [.5, .5, .5],
      oN = {
        texture: "glint",
        mipmaps: !1,
        hf: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: sN([1, .12, .12], [1, .35, .2]),
        blendMode: yN.g.OneOne
      };
    class lN {
      constructor() {
        this.drops = new Map
      }
      wK(SS, HS) {
        if ("overflowFlash" === HS.kind) {
          const [gS, tS, bS] = HS.position, XS = SS.createParticles(oN, {
            pos: [gS, tS, bS],
            half: TN
          });
          return XS.emit(18), void XS.stop()
        }
        this.drops.has(HS.itemId) || this.drops.set(HS.itemId, {
          owner: HS.owner,
          cosmetic: HS.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      mf(SS) {
        if (0 === this.drops.size) return;
        const HS = performance.now(),
          gS = SS.getCameraPosition();
        let tS = 0;
        for (const XS of this.drops.values()) null !== XS.particles && tS++;
        for (const [XS, xS] of this.drops) {
          const NS = SS.getPositionView(XS);
          if (null === NS) {
            var bS;
            if (xS.seen || HS - xS.markedAt > 5e3) null !== xS.particles && tS--, null === (bS = xS.particles) || void 0 === bS || bS.stop(), this.drops.delete(XS);
            continue
          }
          xS.cosmetic || !SS.isLocalPlayer(xS.owner) || xS.pickupDelayCleared || (SS.clearPickupDelay(XS), xS.pickupDelayCleared = !0);
          const qS = xS.lastPosition,
            uS = xS.seen && (NS[0] - qS[0]) ** 2 + (NS[1] - qS[1]) ** 2 + (NS[2] - qS[2]) ** 2 > 4e-4,
            IS = (NS[0] - gS[0]) ** 2 + (NS[1] - gS[1]) ** 2 + (NS[2] - gS[2]) ** 2 < 2025;
          xS.seen = !0, qS[0] = NS[0], qS[1] = NS[1], qS[2] = NS[2], uS && (xS.lastMovingAt = HS), null !== xS.particles && (!IS || HS - xS.lastMovingAt > 500) && (xS.particles.stop(), xS.particles = null, tS--), uS && IS && null === xS.particles && tS < 32 && (xS.particles = SS.createParticles(xS.cosmetic ? RN : FN, {
            pos: NS
          }), tS++), null !== xS.particles && (xS.particles.moveTo(NS), xS.particles.setEmitRate(uS ? 12 : 0)), !uS && null === xS.particles && HS - Math.max(xS.lastMovingAt, xS.markedAt) > 2e3 && this.drops.delete(XS)
        }
      }
      dispose() {
        for (const HS of this.drops.values()) {
          var SS;
          null === (SS = HS.particles) || void 0 === SS || SS.stop()
        }
        this.drops.clear()
      }
    }
    var mN = gS(198);
    const eN = mN.e.pG * mN.e.playerEyeToHeightRatio;
    class rN {
      constructor(SS) {
        this.host = SS, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      wK(SS) {
        this.lava = SS, this.nextUpdateAt = 0
      }
      mf() {
        var SS;
        const HS = this.host.now();
        if (HS < this.nextUpdateAt) return;
        this.nextUpdateAt = HS + 250;
        const gS = this.host.playerPosition(),
          tS = gS && this.findNearest([gS[0], gS[1] + eN, gS[2]]);
        if (!tS || tS.distance >= 40) return void this.stop();
        const bS = .5 * Math.min(1, (40 - tS.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(bS) : this.loop = this.host.play("lavaFlow", bS, tS.position, 40 + eN, 9, !0), null === (SS = this.loop) || void 0 === SS || SS.setPosition(tS.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var SS;
        null === (SS = this.loop) || void 0 === SS || SS.stop(), this.loop = null
      }
      findNearest(SS) {
        let HS = -1,
          gS = 1 / 0;
        for (let tS = 0; tS < this.lava.length; tS += 3) {
          const bS = this.lava[tS] - SS[0],
            XS = this.lava[tS + 1] - SS[1],
            xS = this.lava[tS + 2] - SS[2],
            NS = bS * bS + XS * XS + xS * xS;
          NS < gS && (gS = NS, HS = tS)
        }
        return HS < 0 ? null : {
          position: [this.lava[HS], this.lava[HS + 1], this.lava[HS + 2]],
          distance: Math.sqrt(gS)
        }
      }
    }
    var Sq = gS(2046),
      Hq = gS(38650);
    const gq = {
      "Grey Portal": "Gray"
    };
    for (const qq of bS.Cc) gq[`${qq} Portal`] = qq;
    const tq = Object.keys(gq),
      bq = Object.fromEntries(tq.map((SS => [SS, (0, bS.M)(bS.B[`${(0,bS.ue)(gq[SS])}Team`])])));
    Object.fromEntries(tq.map((SS => [SS, bS.B[`${(0,bS.ue)(gq[SS])}UiText`]])));
    class Xq {
      constructor(SS, HS) {
        this.presentation = SS, this.portal = HS, this.unlocked = void 0
      }
      wK(SS) {
        const HS = !1 === this.unlocked && SS;
        this.unlocked = SS, this.mf();
        const {
          min: gS,
          max: tS,
          unlockedBlock: bS
        } = this.portal;
        if (HS && this.presentation.hasChunk(...gS)) {
          const [SS, HS, XS] = bq[bS];
          this.presentation.playParticles({
            pos1: [...gS],
            pos2: tS.map((SS => SS + 1)),
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
              minColor: [SS, HS, XS, 1],
              maxColor: [Math.min(255, SS + 55), Math.min(255, HS + 55), Math.min(255, XS + 90), 1]
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
      mf() {
        var SS;
        const HS = this.unlocked ? this.portal.unlockedBlock : null !== (SS = this.portal.lockedBlock) && void 0 !== SS ? SS : "Light Gray Portal",
          {
            min: gS,
            max: tS
          } = this.portal;
        for (let bS = gS[0]; bS <= tS[0]; bS++)
          for (let SS = gS[1]; SS <= tS[1]; SS++)
            for (let XS = gS[2]; XS <= tS[2]; XS++) this.presentation.hasChunk(bS, SS, XS) && this.presentation.pC(bS, SS, XS) !== HS && this.presentation.TE(bS, SS, XS, HS)
      }
    }
    const xq = {
        farming_1: {
          raises: SS => "NPC" === SS.type && "chef" === SS.variation,
          rise: .4
        },
        fishing_1: {
          raises: SS => "Draugr Warper" === SS.type,
          rise: .4
        }
      },
      Nq = (SS, HS, gS, XS) => {
        let {
          localPlayerId: xS
        } = XS;
        const NS = new Pb({
          translate: (SS, HS) => (0, cb.C)(zN.f.get().getCurrentLanguageCode(), SS, HS),
          translateWithIcons: (SS, HS) => (0, cb.x)(zN.f.get().getCurrentLanguageCode(), SS, HS),
          setMenuOpen: SS => {
            SS ? (0, RS.u)() : (0, RS.h)()
          },
          dismissMenu: RS.k,
          publishSkills: SS => {
            TS.k.cj(Xg, SS, !0)
          },
          publishQuests: SS => {
            TS.k.cj(ug, SS, !0)
          },
          publishQuestNotification: SS => {
            TS.k.cj(Ig, SS, !0)
          },
          publishDungeons: SS => {
            TS.k.cj(ag, SS, !0)
          },
          publishCollections: SS => {
            TS.k.cj(yg, SS, !0)
          },
          publishMap: SS => {
            TS.k.cj(kS, SS, !0)
          },
          publishHud: SS => {
            TS.k.cj(Gb, SS, !0)
          },
          publishPortalTransit: SS => {
            TS.k.cj(ig, SS, !0)
          },
          isLoadingScreenUp: () => wb.b.get("loadingOverlayVisible"),
          publishDailyReward: SS => {
            TS.k.cj(Ug, SS, !0)
          },
          publishMailbox: SS => {
            TS.k.cj(Fg, SS, !0)
          },
          publishQuestGraph: SS => {
            TS.k.cj(Tg, SS, !0)
          },
          publishForge: SS => {
            TS.k.cj(jt, SS, !0)
          },
          publishSmuggler: SS => {
            TS.k.cj(nt, SS, !0)
          },
          publishKeepersChair: SS => {
            TS.k.cj(dt, SS, !0)
          },
          publishReachLog: SS => {
            TS.k.cj(vt, SS, !0)
          },
          publishLampLight: SS => {
            TS.k.cj(Vt, SS, !0)
          },
          publishMagmaward: SS => {
            TS.k.cj(Wt, SS, !0)
          },
          publishGlowtide: SS => {
            TS.k.cj(Ut, SS, !0)
          },
          publishGlowMeter: SS => {
            TS.k.cj(st, SS, !0)
          },
          publishHushWait: SS => {
            TS.k.cj(Mt, SS, !0)
          },
          publishPassage: SS => {
            TS.k.cj(Dt, SS, !0)
          },
          publishTideCharts: SS => {
            TS.k.cj(Rt, SS, !0)
          },
          publishRegulars: SS => {
            TS.k.cj(Hb, SS, !0)
          },
          publishHiddenWaters: SS => {
            TS.k.cj(xb, SS, !0)
          },
          publishDialogue: SS => {
            TS.k.cj(qb, SS, !0)
          },
          publishAutographs: SS => {
            TS.k.cj(ab, SS, !0)
          },
          onDailyRewardStarted: SS => {
            LS.playSound(xS, SS.day === dS ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (SS, HS) => {
            LS.playSound(xS, "exp_collect", .35, 1 + .6 * SS / (HS - 1)), TS.k.cj(pg, SS === HS - 1)
          },
          onDailyRewardItemLanded: SS => {
            LS.playSound(xS, "pickUp", .6, 1 + .15 * SS)
          },
          onMailboxStarted: () => {
            LS.playSound(xS, "rpgMetalClick", .6, 1), LS.playSound(xS, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            LS.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: pN.h,
          requestTracking: SS => {
            LS.sendCommand(`quests track ${SS}`)
          },
          requestDungeonEnter: (SS, HS) => {
            LS.sendCommand(`dungeonEnter ${SS} ${HS}`)
          },
          requestQuestJump: SS => {
            LS.sendCommand(`${AS} jump ${SS}`)
          },
          requestQuestArrive: (SS, HS) => {
            const gS = `${AS} arrive ${SS}`;
            LS.sendCommand(HS ? `${gS} complete` : gS)
          },
          requestForge: SS => {
            let {
              blade: HS,
              guard: gS,
              handle: tS
            } = SS;
            LS.sendCommand(`forge ${HS} ${gS} ${tS}`)
          },
          requestDialogue: () => {
            LS.sendCommand("quests dialogue")
          },
          requestSmuggle: (SS, HS) => {
            LS.sendCommand(`smuggle ${SS} ${HS}`)
          },
          requestKeepersChairAim: SS => {
            LS.sendCommand(`keeperschair-aim ${SS}`)
          },
          requestReachLogOpen: () => {
            LS.sendCommand("reachlog-open")
          },
          requestLampLight: SS => {
            LS.sendCommand(`${SS}`)
          },
          requestTravel: SS => {
            LS.sendCommand(`map travel ${SS.kind} ${SS.id} ${SS.requestId}`)
          }
        });
        let qS, uS, IS, fS, aS, KS, jS, QS, DS, wS, hS, OS, cS;
        const ES = new lN;
        let LS, YS = null;
        const yS = xq[null !== gS && void 0 !== gS ? gS : ""],
          zS = (SS, HS) => {
            null !== yS && void 0 !== yS && yS.raises(HS) && LS.setNametagOffset(SS, yS.rise)
          },
          sS = new WN({
            getLocalHookPosition: () => {
              const SS = BS.getLocalHook();
              return null !== SS && LS.checkValid(SS) ? LS.lC(SS) : null
            },
            playParticles: SS => {
              LS.playParticleEffect(SS)
            },
            vibrate: SS => {
              oS.g.play("fishBite", SS)
            },
            now: () => performance.now()
          }),
          BS = new AN({
            getLineOwner: SS => LS.checkValid(SS) ? LS.getLineOwner(SS) : null,
            isLocalPlayer: SS => LS.isLocalPlayer(SS),
            getHookPosition: SS => {
              const [HS, , gS] = LS.lC(SS);
              return [HS, gS]
            },
            isHushWaiting: () => {
              var SS;
              return "waiting" === (null === (SS = NS.hushWait.getSnapshot()) || void 0 === SS ? void 0 : SS.phase)
            },
            onCastLanded: (SS, HS) => {
              NS.tideCharts.castLanded(SS, HS)
            },
            onLocalHookSettled: () => {
              sS.onLocalHookSettled()
            },
            onLocalWaitEnded: SS => {
              sS.onLocalWaitEnded(SS)
            },
            now: () => performance.now()
          }),
          lS = new rN({
            now: () => performance.now(),
            playerPosition: () => LS.checkValid(xS) ? LS.lC(xS) : null,
            play: (SS, HS, gS, tS, bS, XS) => LS.playSound(xS, SS, HS, 1, {
              Sb: gS,
              maxHearDist: tS,
              refDistance: bS
            }, XS)
          }),
          mS = new Map;
        let eS;
        return {
          onCreate: SS => {
            if (LS = SS, YS = new Hq.SkyblockEntityFacing(SS, yS ? zS : null), NS.portalTransit.resumeArrival(null !== gS && void 0 !== gS ? gS : null), (null !== gS && void 0 !== gS ? gS : tS) === tS) {
              let SS = -1 / 0;
              eS = TS.k.subscribe("toggleMenu", (HS => {
                const gS = performance.now();
                "inventory|Workbench" !== HS || "cross_to_hub" !== NS.quests.getTrackedQuestId() || gS - SS < 1e4 || (SS = gS, LS.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [tS, bS] of Object.entries(null !== (HS = VS[null !== gS && void 0 !== gS ? gS : ""]) && void 0 !== HS ? HS : {})) {
              var HS;
              mS.set(tS, new Xq({
                hasChunk: (HS, gS, tS) => SS.isBlockInLoadedChunk(HS, gS, tS),
                pC: (HS, gS, tS) => SS.blockIdToBlockName(SS.getBlockId(HS, gS, tS)),
                TE: (HS, gS, tS, bS) => {
                  SS.TE(HS, gS, tS, bS)
                },
                playParticles: HS => {
                  SS.playParticleEffect(HS)
                }
              }, bS))
            }
            cS = (0, Sq.g)((SS => function(SS) {
              return Object.hasOwn(BH, SS) || SS.startsWith("npc_")
            }(SS) ? FH(SS) : null)), NS.resolveItemName = (HS, gS) => {
              const tS = SS.getItemStat(xS, HS, "displayName");
              return tS && "object" === typeof tS && "translationKey" in tS ? gS(tS.translationKey, (0, cb.t)(tS.params, UN.c.shown)) : "string" === typeof tS ? gS(tS) : HS
            }, NS.quests.notifications.onShown = SS => {
              "quest" === SS ? LS.playSound(xS, "magicAccent1", 1, 1) : "skillLevel" === SS ? LS.playSound(xS, "magicAccent1", 1, .6) : "landmark" === SS ? LS.playSound(xS, "trumpetFlare", 1, .6) : "npcNote" === SS ? LS.playSound(xS, "magicAccent2", .8, 1.1) : "started" === SS ? LS.playSound(xS, (0, EN.e)("bigDrumSwish"), 1, 1) : LS.playSound(xS, (0, EN.e)("rpgHandleSmallLeather"), 1, 1)
            }, NS.forge.onPartSelected = () => {
              LS.playSound(xS, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, NS.forge.onOpened = () => {
              ! function(SS) {
                SS.preloadSounds([(0, EN.e)("firecracker"), "fireBurn", "magicAccent2"])
              }(SS)
            }, NS.forge.onForgeStarted = (HS, gS, tS) => YN(SS, xS, HS, gS, tS), NS.smuggler.onBought = () => {
              LS.playSound(xS, (0, EN.e)("rpgHandleSmallLeather"), 1, 1), LS.playSound(xS, "chestOpen", .6, 1)
            }, NS.compass.register(new GS(NS.map, !0)), NS.compass.register(new GS(NS.map, !1)), NS.compass.register(new nS(NS.map)), NS.compass.register(new PS((() => NS.quests.getSnapshot().compassTarget)));
            for (const gS of ["enemy", "npc"]) NS.compass.register(new CS(NS.map, gS, (HS => SS.checkValid(HS) ? SS.lC(HS) : void 0), (HS => SS.isAlive(HS))))
          },
          onAfterRender: (SS, HS) => {
            const gS = LS.checkValid(xS) ? LS.lC(xS) : null;
            NS.navigation.afterRender(gS, performance.now(), HS), NS.glowtide.afterRender(gS, HS.cameraHeading), NS.tideCharts.afterRender(gS), BS.afterRender()
          },
          onClose: () => {
            var SS, HS, gS, tS, bS, XS, xS, kS, KS, GS, CS, nS, PS, ZS, JS;
            eS && TS.k.unsubscribe(eS), null === (SS = cS) || void 0 === SS || SS(), ES.dispose(), lS.dispose(), null === (HS = YS) || void 0 === HS || HS.dispose(), BS.dispose(), NS.dispose(), null === (gS = qS) || void 0 === gS || gS(), null === (tS = uS) || void 0 === tS || tS(), null === (bS = IS) || void 0 === bS || bS(), null === (XS = fS) || void 0 === XS || XS(), null === (xS = aS) || void 0 === xS || xS(), null === (kS = jS) || void 0 === kS || kS(), null === (KS = undefined) || void 0 === KS || KS(), null === (GS = QS) || void 0 === GS || GS(), null === (CS = DS) || void 0 === CS || CS(), null === (nS = wS) || void 0 === nS || nS(), null === (PS = hS) || void 0 === PS || PS(), null === (ZS = undefined) || void 0 === ZS || ZS(), null === (JS = OS) || void 0 === JS || JS()
          },
          onPlayerChangeBlock: (SS, HS, tS, XS, qS, uS) => {
            if (SS === xS && "Air" === uS) {
              const SS = LS.getClientOption(xS, "creative");
              NS.skills.predictBlock([HS, tS, XS], qS, SS);
              const uS = function(SS, HS) {
                  if ("hub" === HS || "farming_1" === HS || "mining_1" === HS) return !US.has(SS) || "hub" !== HS && "mining_1" !== HS ? Object.hasOwn(WS, SS) ? WS[SS] : void 0 : iS
                }(qS, gS),
                IS = ("hub" === gS || "mining_1" === gS) && (bS.id.some((SS => SS === qS)) || Object.hasOwn(pS, qS) || "mining_1" === gS && "Block of Coal" === qS);
              SS || void 0 === uS && !IS || LS.TE(HS, tS, XS, null !== uS && void 0 !== uS ? uS : iS)
            }
          },
          onPlayerAttackEntity: (SS, HS) => {
            if (SS !== xS || "Player" !== LS.getEntityType(HS)) return;
            const [gS, tS, bS] = LS.lC(HS);
            LS.burstParticlePreset("critical", [gS, tS + 1, bS], 10)
          },
          onChangeBlockFail: SS => {
            for (const {
                UX: HS
              }
              of SS) NS.skills.rejectBlock(HS)
          },
          onReceivedMessageFromServer: (SS, HS) => {
            if ("skyblockGatedPortal" === SS) {
              var gS;
              const [SS, tS] = HS;
              return void(null === (gS = mS.get(SS)) || void 0 === gS || gS.wK(tS))
            }
            if ("skyblockDailyReward" === SS) return void NS.dailyReward.wK(HS);
            if ("skyblockMailbox" === SS) return void NS.mailbox.wK(HS);
            if ("skyblockPortalTransit" === SS) return void NS.portalTransit.wK(HS);
            if ("skyblockLoot" === SS) return void ES.wK(LS, HS);
            if ("skyblockLava" === SS) return void lS.wK(HS);
            if ("skyblockForge" === SS) return void NS.forge.wK(HS);
            if ("skyblockMagmaward" === SS) return void NS.magmaward.wK(HS);
            if ("skyblockGlowtide" === SS) return void NS.glowtide.wK(HS);
            if ("skyblockGlowMeter" === SS) return void NS.glowMeter.wK(HS);
            if ("skyblockHushWait" === SS) return void NS.hushWait.wK(HS);
            if ("skyblockPassage" === SS) {
              const SS = HS;
              return NS.passage.wK(SS), NS.reachLog.receivePassagePhase(SS.passagePhase), wS ??= (0, ZS.u)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: NS.passage.show
              }), void NS.keepersChair.receivePassage({
                keepersChairPassagePhase: SS.passagePhase,
                keepersChairPassageNextPhase: SS.passageNextPhase,
                keepersChairPassageTurnsInMs: SS.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === SS) {
              const SS = HS;
              return NS.tideCharts.wK(SS), void(SS.tideCharts.length > 0 && (hS ??= (0, ZS.u)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: NS.tideCharts.show
              })))
            }
            if (SS === MS.z) {
              var tS;
              const {
                hookId: SS,
                waiting: gS
              } = HS;
              return void BS.hookWaiting(SS, null !== (tS = null === gS || void 0 === gS ? void 0 : gS.remainingMs) && void 0 !== tS ? tS : null)
            }
            if ("skyblockBiteTell" === SS) return void sS.receiveTell(HS);
            if ("skyblockSmuggler" === SS) return void NS.smuggler.wK(HS);
            if ("skyblockKeepersChair" === SS) return NS.keepersChair.wK(HS), void NS.lampLight.setAtChair(NS.keepersChair.isAtChair());
            if ("skyblockLampLight" === SS) {
              const SS = HS;
              var bS;
              if (NS.lampLight.wK(SS), SS.lampLightReleasing) DS ??= (0, ZS.u)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  NS.lampLight.setRelease(!1)
                }
              });
              else null === (bS = DS) || void 0 === bS || bS(), DS = void 0;
              return
            }
            if ("skyblockRegulars" === SS) return void NS.regulars.wK(HS);
            if ("skyblockHiddenWaters" === SS) return void NS.hiddenWaters.wK(HS);
            if ("skyblockReachLog" === SS) return NS.reachLog.wK(HS), void(QS ??= (0, ZS.u)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Lt
              },
              onClick: NS.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === SS) {
              for (const [SS, gS, tS, bS] of HS) LS.TE(SS, gS, tS, bS);
              return
            }
            if ("skyblockHud" === SS) NS.receiveHud(HS);
            else if ("skyblockMap" === SS) NS.map.wK(HS);
            else if (SS === FS.i) NS.skills.wK(HS);
            else if (SS === vS && "dialogue" === HS.kind) NS.dialogue.wK(HS);
            else if (SS === vS) NS.quests.wK(HS);
            else if ("skyblockDungeons" === SS) NS.dungeons.wK(HS);
            else if ("sbCollections" === SS) NS.collections.wK(HS);
            else if ("skyblockQuestGraph" === SS) NS.questGraph.wK(HS);
            else {
              if ("skyblockAutographs" !== SS) return;
              NS.autographs.wK(HS)
            }
            if (!uS && NS.map.getSnapshot().enabled) {
              const SS = (0, ZS.u)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: NS.map.show
                }),
                HS = (0, RS.w)(NS.map.show);
              uS = () => {
                SS(), HS()
              }
            }!IS && NS.skills.getSnapshot().enabled && (IS = (0, ZS.u)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: NS.skills.show
            })), !jS && NS.collections.getSnapshot().enabled && (jS = (0, ZS.u)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: NS.collections.show
            })), !fS && NS.quests.getSnapshot().enabled && (fS = (0, ZS.u)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: NS.quests.show
            })), !OS && NS.autographs.getSnapshot().enabled && (OS = (0, ZS.u)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: NS.autographs.show
            }));
            const XS = NS.dungeons.getSnapshot().enabled;
            var xS;
            (IS || fS || XS) && KS !== XS && (KS = XS, null === (xS = aS) || void 0 === xS || xS(), aS = (0, ZS.u)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: YH
              },
              disabled: !XS,
              panel: !0,
              onClick: NS.dungeons.show
            }));
            qS || (qS = (0, RS.y)((0, JS.createElement)(cN, {
              controller: NS
            }), {
              content: (0, JS.createElement)(vN, {
                controller: NS
              }),
              onClose: NS.close
            }))
          },
          mf: () => {
            var SS;
            for (const HS of mS.values()) HS.mf();
            ES.mf(LS), lS.mf(), null === (SS = YS) || void 0 === SS || SS.mf(), NS.skills.mf(), NS.quests.mf(), NS.dailyReward.mf(), NS.mailbox.mf(), NS.map.mf()
          }
        }
      }
  },
  36381: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      i: () => tS
    });
    const tS = "skyblockSkills",
      bS = "skills_test_gym"
  },
  34256: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      f: () => xS
    });
    const tS = [{
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

    function bS(SS) {
      let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof SS) {
        if (!Number.isFinite(SS)) return "0";
        if (Math.abs(SS) < 100) {
          const HS = SS < 0 ? "-" : "",
            gS = Math.abs(SS);
          return gS >= 10 ? `${HS}${gS.toFixed(1).replace(/\.0$/,"")}` : `${HS}${gS.toFixed(2).replace(/\.?0+$/,"")}`
        }
        HS = BigInt(Math.floor(SS))
      } else HS = SS;
      const bS = HS < 0n ? -HS : HS,
        XS = HS < 0n ? "-" : "",
        xS = bS.toString();
      if (xS.length <= gS) return `${XS}${xS}`;
      const NS = 3 * Math.floor((xS.length - 1) / 3);
      if (NS < 3) return `${XS}${xS}`;
      if (NS > 3 * tS.length) {
        const SS = xS[0],
          HS = xS.slice(1, 3).replace(/0+$/, "");
        return `${XS}${HS?`${SS}.${HS}`:SS}e${xS.length-1}`
      }
      const {
        threshold: qS,
        suffix: uS
      } = tS[tS.length - NS / 3], IS = bS / qS, fS = Number(1000n * (bS % qS) / qS), kS = Number(IS) + fS / 1e3;
      let aS;
      return aS = kS >= 100 ? Math.floor(kS).toString() : kS >= 10 ? kS.toFixed(1).replace(/\.0$/, "") : kS.toFixed(2).replace(/\.?0+$/, ""), `${XS}${aS}${uS}`
    }
    const XS = tS.map((SS => {
      let {
        threshold: HS,
        suffix: gS
      } = SS;
      return {
        threshold: Number(HS),
        suffix: gS
      }
    })).filter((SS => {
      let {
        threshold: HS
      } = SS;
      return Number.isFinite(HS)
    }));

    function xS(SS) {
      const HS = Math.abs(SS),
        gS = SS < 0 ? "-" : "";
      for (const {
          threshold: tS,
          suffix: bS
        }
        of XS)
        if (HS >= tS) {
          const SS = HS / tS;
          if (SS >= 1e3) return `${gS}${HS.toExponential(2).replace("e+","e")}`;
          let XS;
          return XS = SS >= 100 ? Math.floor(SS).toString() : SS >= 10 ? SS.toFixed(1).replace(/\.0$/, "") : SS.toFixed(2).replace(/\.?0+$/, ""), `${gS}${XS}${bS}`
        } return `${gS}${HS}`
    }
  },
  38570: (SS, HS, gS) => {
    var tS = {
      "./combat_1.png": 38575,
      "./dungeon_crumbling_crypt.png": 38578,
      "./dungeon_frozen_hollow.png": 38584,
      "./dungeon_wildwood_grove.png": 38587,
      "./dungeons.png": 38591,
      "./farming_1.png": 38596,
      "./fishing_1.png": 38601,
      "./hub.png": 38610,
      "./island.png": 38619,
      "./mining_1.png": 38624,
      "./mining_1_bridge.png": 38628,
      "./mining_1_gallery.png": 38630,
      "./mining_1_hollow.png": 38633,
      "./mining_1_village.png": 38638
    };

    function bS(SS) {
      var HS = XS(SS);
      return gS(HS)
    }

    function XS(SS) {
      if (!gS.o(tS, SS)) {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }
      return tS[SS]
    }
    bS.keys = function() {
      return Object.keys(tS)
    }, bS.resolve = XS, SS.exports = bS, bS.id = 38570
  },
  38575: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38578: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38584: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38587: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38591: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38596: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38601: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38610: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38619: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38624: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38628: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38630: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38633: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38638: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18698: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20777: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23061: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24565: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26194: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26208: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38558: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);