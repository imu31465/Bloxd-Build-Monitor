export const id = 187;
export const ids = [49, 187];
export const modules = {
  37629: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      g: () => kT
    });
    const iT = new WeakMap;

    function zT(TT, oT) {
      return iT.set(TT, oT), TT
    }

    function kT(TT) {
      var oT;
      return null !== (oT = iT.get(TT)) && void 0 !== oT ? oT : null
    }
  },
  37514: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      var iT;
      const {
        width: zT,
        height: kT
      } = IT, WT = null !== (iT = TT.text) && void 0 !== iT ? iT : TT, XT = (WT.x / 100 - .5) * zT, BT = (WT.y / 100 - .5) * kT, FT = zT / 2 - oT.x;
      if (null !== TT.text && Math.abs(XT) <= FT && BT >= oT.top - kT / 2 && BT <= kT / 2 - oT.bottom) return {
        x: WT.x,
        y: WT.y
      };
      const ST = Math.min(0 === XT ? 1 / 0 : FT / Math.abs(XT), BT > 0 ? (kT / 2 - oT.bottom) / BT : BT < 0 ? (oT.top - kT / 2) / BT : 1 / 0);
      return !Number.isFinite(ST) || ST < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + XT * ST / zT * 100,
        y: 50 + BT * ST / kT * 100
      }
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  37532: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    const iT = 4,
      zT = 12e3,
      kT = 1e3;
    class WT {
      constructor() {
        let {
          limit: TT = iT,
          windowMs: oT = zT,
          spacingMs: IT = kT,
          now: WT = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = TT, this.windowMs = oT, this.spacingMs = IT, this.now = WT
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const TT of this.priority) TT.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const TT = this.now();
        this.sent.push(TT), this.lastSentAt = TT, this.schedule(), this.notify()
      }
      addPriority(TT) {
        return this.priority.add(TT), () => {
          this.priority.delete(TT)
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const TT of this.priority)
          if (TT.waiting()) return !0;
        return !1
      }
      prune() {
        const TT = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= TT;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const TT = this.now(),
          oT = this.lastSentAt + this.spacingMs,
          IT = Math.min(oT > TT ? oT : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        IT !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, IT - TT)))
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37506: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor(TT, oT, IT) {
        this.XM = TT, this.beforeOpen = oT, this.afterClose = IT, this.open = !1, this.Ec = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Ec && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(TT) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(TT)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Ec = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Ec || (this.snapshot = this.buildSnapshot(), this.XM(this.snapshot))
      }
    }
  },
  37632: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      SkyblockEntityFacing: () => XT,
      needsSkyblockEntityFacing: () => WT
    });
    var iT = IT(37524),
      zT = IT(3811),
      kT = IT(37636);

    function WT(TT, oT) {
      if (TT.metaInfo === iT.q || "Iron Guardian" === TT.type || "Gold Guardian" === TT.type) return !0;
      if ("Pig" === TT.type) return "sitting" === TT.pose;
      if ("Person" !== TT.meshKind || void 0 === TT.meshOpts) return !1;
      let IT = null === oT || void 0 === oT ? void 0 : oT.get(TT.meshOpts);
      if (void 0 === IT) {
        var kT, WT;
        const iT = (0, zT.l)(TT);
        IT = !1, "pig_napoleon" === (null === iT || void 0 === iT || null === (kT = iT.opts.textures) || void 0 === kT ? void 0 : kT.head) ? IT = !0 : "npc_pig_head" === (null === iT || void 0 === iT || null === (WT = iT.opts.textures) || void 0 === WT ? void 0 : WT.head) && (IT = "sitting" === iT.opts.pose || "sitting"), oT && (oT.size >= 256 && oT.clear(), oT.set(TT.meshOpts, IT))
      }
      return "sitting" === IT ? "sitting" === TT.pose : IT
    }(0, kT.g)("skyblock", ((TT, oT) => {
      oT.setFacingTolerance(WT(TT) ? 0 : null)
    }));
    class XT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = TT, this.alsoVisit = oT, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = TT => {
          var oT;
          const IT = this.api.getEntityInfo(TT);
          IT && (WT(IT, this.meshFacingCache) && (this.api.setFacingTolerance(TT, 0), this.nextFacing.add(TT)), null === (oT = this.alsoVisit) || void 0 === oT || oT.call(this, TT, IT))
        }
      }
      dD() {
        const {
          api: TT
        } = this, oT = this.nextFacing;
        TT.forEachEntity(this.visit);
        for (const IT of this.facing) oT.has(IT) || TT.setFacingTolerance(IT, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = oT
      }
      dispose() {
        for (const TT of this.facing) this.api.setFacingTolerance(TT, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37498: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => FB
    });
    const iT = "island";
    var zT = IT(314);
    const kT = (0, zT.wb)([0, 0, -1]),
      WT = [{
        name: "S",
        bearing: (0, zT.wb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, zT.wb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: kT
      }, {
        name: "W",
        bearing: (0, zT.wb)([1, 0, 0])
      }];

    function XT(TT, oT, IT) {
      return [100 * (IT.mapMaxX - TT) / (IT.mapMaxX - IT.mapMinX), 100 * (oT - IT.mapMinZ) / (IT.mapMaxZ - IT.mapMinZ)]
    }

    function BT(TT, oT, IT) {
      const zT = "local" === oT,
        kT = TT.background,
        WT = oT => kT ? XT(oT[0] - TT.mapOrigin[0], oT[2] - TT.mapOrigin[2], kT.bounds) : [50, 50],
        BT = (TT.insideDungeon ? [] : TT.landmarks).map((TT => {
          var oT, iT;
          return {
            id: TT.id,
            name: IT(TT.visited && TT.nameKey ? null !== (oT = TT.mapLabelKey) && void 0 !== oT ? oT : TT.nameKey : "skyblockGame:mapUnknown"),
            icon: TT.visited && null !== (iT = TT.icon) && void 0 !== iT ? iT : "unknown",
            visited: TT.visited,
            current: !1,
            position: WT(TT.position),
            travelKind: "landmark",
            travelId: TT.id
          }
        })),
        ST = TT.zones.map((oT => {
          var iT;
          return {
            id: oT.id,
            name: IT(oT.visited && oT.nameKey ? oT.nameKey : "skyblockGame:mapUnknown"),
            icon: oT.visited && null !== (iT = oT.icon) && void 0 !== iT ? iT : "unknown",
            visited: oT.visited,
            current: oT.id === TT.zoneId,
            position: oT.position,
            thumbnail: oT.visited ? oT.id : void 0,
            travelKind: "zone",
            travelId: oT.id
          }
        })),
        DT = TT.insideDungeon || !kT ? [] : TT.portals.map((TT => {
          var oT;
          return {
            id: TT.id,
            name: IT(null !== (oT = TT.nameKey) && void 0 !== oT ? oT : "skyblockGame:mapUnknown"),
            icon: TT.visited ? "dungeons" === TT.destination ? "portal_orange" : "portal" : "unknown",
            visited: TT.visited,
            current: !1,
            position: WT(TT.position),
            colour: TT.colour,
            travelKind: "zone",
            travelId: TT.destination
          }
        })),
        LT = zT ? BT : ST,
        xT = LT.filter((TT => TT.visited)).length,
        cT = kT ? (kT.bounds.mapMaxX - kT.bounds.mapMinX) / (kT.bounds.mapMaxZ - kT.bounds.mapMinZ) : 2,
        KT = kT ? JSON.stringify([kT.bounds, TT.mapOrigin]) : "";
      return {
        local: zT,
        points: LT,
        portals: zT ? DT : [],
        progress: LT.length ? IT("skyblockGame:mapDiscovered", {
          current: String(xT),
          total: String(LT.length)
        }) : null,
        percent: LT.length ? 100 * xT / LT.length : 0,
        canTravel: [...LT, ...zT ? DT : []].some((TT => TT.visited && !TT.current)),
        noLandmarks: zT && !TT.insideDungeon && 0 === BT.length,
        background: kT ? {
          imageKey: kT.imageKey,
          fallbackImageKey: TT.zoneId,
          geometryKey: KT,
          label: IT(kT.labelKey),
          colour: kT.backgroundColour,
          ratio: cT
        } : null,
        connections: FT(TT.zones),
        minimap: kT ? {
          imageKey: kT.imageKey,
          fallbackImageKey: TT.zoneId,
          geometryKey: KT,
          label: IT(kT.labelKey),
          colour: kT.backgroundColour,
          caption: IT(TT.zoneId === iT ? "skyblockGame:zoneIsland" : kT.labelKey),
          width: (kT.bounds.mapMaxX - kT.bounds.mapMinX) / kT.minimapSpan * 100 + "%",
          height: (kT.bounds.mapMaxZ - kT.bounds.mapMinZ) / kT.minimapSpan * 100 + "%",
          markers: [...BT, ...DT]
        } : null
      }
    }

    function FT(TT) {
      const oT = new Set;
      return TT.flatMap((IT => IT.connections.flatMap((iT => {
        const zT = TT.find((TT => TT.id === iT)),
          kT = [IT.id, iT].sort().join("|");
        return !zT || oT.has(kT) ? [] : (oT.add(kT), [{
          id: `${IT.id}-${iT}`,
          start: IT.position,
          end: zT.position,
          explored: IT.visited && zT.visited
        }])
      }))))
    }
    var ST = IT(37506);
    class DT extends ST.d {}
    const LT = "skyblockMapView";
    class xT extends DT {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, iT, zT), this.requestTravel = oT, this.translate = IT, this.now = kT, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = TT => {
          this.tab = TT, this.feedbackKey = "", this.emit()
        }, this.travel = (TT, oT) => {
          if (!this.map || this.pending || this.Ec) return;
          const IT = ("zone" === TT ? this.map.zones : this.map.landmarks).find((TT => TT.id === oT));
          if (IT) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in IT && !IT.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (IT.visited)
              if ("zone" === TT && oT === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const IT = ++this.nextRequestId;
                this.pending = {
                  requestId: IT,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: TT,
                  id: oT,
                  requestId: IT
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
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      Jc(TT) {
        var oT;
        if (!this.Ec)
          if ("entities" !== TT.kind)
            if ("open" !== TT.kind) {
              var IT, iT;
              if ("snapshot" === TT.kind)(null === (IT = TT.snapshot) || void 0 === IT ? void 0 : IT.zoneId) !== (null === (iT = this.map) || void 0 === iT ? void 0 : iT.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = TT.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === TT.kind) {
                var zT;
                TT.requestId === (null === (zT = this.pending) || void 0 === zT ? void 0 : zT.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (TT.requestId === (null === (oT = this.pending) || void 0 === oT ? void 0 : oT.requestId)) {
                var kT;
                this.pending = null, this.feedbackKey = null !== (kT = TT.errorKey) && void 0 !== kT ? kT : "", null === TT.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = TT.entities
      }
      dD() {
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
          presentation: this.map ? BT(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const cT = 67.5 * Math.PI / 180;

    function KT(TT, oT) {
      const IT = Math.abs(TT);
      if (IT > cT || oT.trackHalfWidth <= 0) return null;
      const iT = oT.trackHalfWidth,
        zT = oT.screenHalfWidth / (oT.tanHalfFovX * Math.max(.5, Math.cos(oT.pitch))),
        kT = Math.min(Math.atan(.6 * iT / zT), .75 * cT),
        WT = zT * Math.tan(kT);
      let XT;
      if (IT <= kT) XT = zT * Math.tan(IT);
      else {
        const TT = cT - kT,
          oT = Math.max(0, zT * TT / (Math.cos(kT) ** 2 * (iT - WT)) - 1),
          BT = (IT - kT) / TT;
        XT = WT + (iT - WT) * (1 + oT) * BT / (1 + oT * BT)
      }
      return 50 + Math.sign(TT) * XT * 50 / iT
    }
    class MT {
      constructor(TT, oT) {
        this.map = TT, this.visited = oT, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = oT ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const TT = this.map.getSnapshot().map;
        return !TT || TT.insideDungeon ? [] : TT.landmarks.filter((TT => TT.visited === this.visited)).map((TT => {
          var oT, IT;
          return {
            id: `landmark:${TT.id}`,
            position: TT.position,
            icon: null !== (oT = TT.icon) && void 0 !== oT ? oT : "unknown",
            nameKey: null !== (IT = TT.nameKey) && void 0 !== IT ? IT : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class rT {
      constructor(TT, oT, IT, iT) {
        this.map = TT, this.kind = oT, this.position = IT, this.alive = iT, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = oT, this.range = "enemy" === oT ? 48 : 64, this.limit = 12
      }
      Wm(TT) {
        if ("enemy" !== this.kind || this.alive(TT.Wz)) return this.position(TT.Wz)
      }
      getPoints() {
        const TT = [];
        for (const iT of this.map.getEntities()) {
          if (iT.kind !== this.kind || "enemy" === this.kind && !this.alive(iT.compassEntityId)) continue;
          const zT = this.position(iT.compassEntityId);
          var oT, IT;
          if (zT) TT.push({
            id: `${this.kind}:${iT.compassEntityId}`,
            Wz: iT.compassEntityId,
            kind: this.kind,
            icon: null !== (oT = iT.icon) && void 0 !== oT ? oT : iT.npcSkin ? `npc_${iT.npcSkin}` : this.kind,
            displayName: iT.displayName,
            position: zT,
            nameKey: null !== (IT = iT.nameKey) && void 0 !== IT ? IT : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return TT
      }
    }
    class AT {
      constructor(TT) {
        this.map = TT, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const TT = this.map.getSnapshot().map;
        return !TT || TT.insideDungeon ? [] : TT.portals.map((TT => {
          var oT;
          return {
            id: "portal:" + TT.id,
            kind: "portal",
            position: TT.position,
            nameKey: null !== (oT = TT.nameKey) && void 0 !== oT ? oT : "skyblockGame:compassUnvisitedZone",
            icon: TT.visited ? "dungeons" === TT.destination ? "portal_orange" : "portal" : "unknown",
            colour: TT.colour
          }
        }))
      }
    }
    class gT {
      constructor(TT) {
        this.target = TT, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const TT = this.target();
        return TT ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: TT.position,
          nameKey: TT.nameKey
        }] : []
      }
    }

    function hT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.position;
      const kT = iT[0] - oT[0],
        WT = iT[2] - oT[2];
      return {
        ...TT,
        position: iT,
        offset: zT.e.computeShortestRotation(IT, (0, zT.wb)([kT, 0, WT])),
        distance: Math.hypot(kT, iT[1] - oT[1], WT)
      }
    }
    let wT;

    function mT(TT, oT) {
      var IT;
      return (null === (IT = wT) || void 0 === IT ? void 0 : IT.locale) !== oT && (wT = {
        locale: oT,
        near: new Intl.NumberFormat(oT, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(oT, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (TT < 10 ? wT.near : wT.far).format(TT)
    }
    class eT {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(TT) {
        return this.providers.set(TT.id, TT), this.refreshAt = 0, () => {
          this.providers.get(TT.id) === TT && (this.providers.delete(TT.id), this.refreshAt = 0)
        }
      }
      frame(TT, oT, IT) {
        if (IT >= this.refreshAt) {
          this.refreshAt = IT + 200, this.candidates = [];
          for (const oT of this.providers.values()) {
            if (!oT.enabled) continue;
            const IT = oT.getPoints().map((oT => {
              const IT = oT.position;
              return {
                point: oT,
                distance: Math.hypot(IT[0] - TT[0], IT[1] - TT[1], IT[2] - TT[2])
              }
            })).filter((TT => TT.distance <= oT.range)).sort(((TT, oT) => TT.distance - oT.distance)).slice(0, oT.limit);
            for (const {
                point: TT
              }
              of IT) this.candidates.push({
              provider: oT,
              point: TT
            })
          }
        }
        const iT = [];
        for (const {
            point: zT,
            provider: kT
          }
          of this.candidates) {
          if (!kT.enabled) continue;
          const IT = kT.Wm ? kT.Wm(zT) : zT.position;
          if (IT) {
            const kT = hT(zT, TT, oT, IT);
            Math.abs(kT.offset) <= cT && iT.push(kT)
          }
        }
        return iT
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var RT = IT(35601),
      uT = IT(46);
    const vT = [{
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
      ET = vT.length;

    function fT(TT) {
      return TT >= ET ? 1 : TT + 1
    }
    const CT = "skyblockQuests";
    var jT = IT(37524);
    const JT = "devquests",
      UT = "none",
      aT = {
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
      YT = "Compressed Messy Stone",
      QT = {
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
      OT = ["Stone", "Diorite", "Andesite", "Granite"],
      HT = new Set(OT),
      nT = (Object.keys(QT), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const qT = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function ZT(TT, oT) {
      const IT = Math.floor(5 * TT / (2 * oT + 1));
      return Math.min(4, Math.max(0, IT))
    }
    var lT = IT(1214);
    var sT = IT(35376);
    var tT = IT(35599),
      GT = IT(16),
      pT = IT(8307);
    const bT = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      yT = 1e3;

    function NT(TT) {
      return Math.max(0, TT)
    }

    function PT(TT) {
      return 1 + .01 * NT(TT)
    }

    function dT(TT) {
      return 1 + .005 * NT(TT)
    }

    function VT(TT) {
      return 1 + .005 * NT(TT)
    }

    function To(TT) {
      return .01 * NT(TT)
    }

    function oo(TT) {
      return 150 / (150 + NT(TT))
    }

    function Io(TT) {
      return 1 + .002 * NT(TT)
    }

    function io(TT) {
      return Math.round(10 * TT) / 10
    }

    function zo(TT, oT) {
      switch (TT) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: io(100 * (dT(oT) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: io(100 * (PT(oT) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: io(100 * (VT(oT) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: io(100 * To(oT))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: io(100 * (1 - oo(oT)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: io(100 * (Io(oT) - 1))
          }
      }
    }

    function ko(TT) {
      return "farming" === TT ? 200 : 100
    }

    function Wo(TT, oT) {
      if (!Number.isSafeInteger(TT) || TT < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const IT = ko(oT),
        iT = TT => function(TT, oT) {
          return ko(TT) * oT * (oT + 1) / 2
        }(oT, TT);
      let zT = Math.min(yT, Math.floor((Math.sqrt(8 * TT / IT + 1) - 1) / 2));
      return zT < yT && iT(zT + 1) <= TT ? zT++ : iT(zT) > TT && zT--, {
        totalXp: TT,
        level: zT,
        xpIntoLevel: TT - iT(zT),
        xpForNextLevel: zT === yT ? null : IT * (zT + 1)
      }
    }
    const Xo = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Bo(TT) {
      return Xo.has(TT)
    }
    const Fo = new Set(zT.nb);

    function So(TT) {
      return Fo.has(TT)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Do = {
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
      Lo = {
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
      xo = {
        ...Lo,
        ...Object.fromEntries(Object.entries(nT).map((TT => {
          let [oT, IT] = TT;
          return [oT, 9 * Lo[IT]]
        })))
      },
      co = {
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
      Ko = {
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
    const Mo = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      ro = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Ao(TT) {
      return `rgb(${ro[TT].join(", ")})`
    }

    function go(TT, oT, IT) {
      if (!IT) return TT(oT);
      const iT = {};
      for (const [zT, kT] of Object.entries(IT)) iT[zT] = "string" === typeof kT ? kT : TT(kT.translationKey);
      return TT(oT, iT)
    }
    class ho {
      constructor(TT, oT) {
        this.now = TT, this.getJournal = oT, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.kS = !1, this.onShown = () => {}
      }
      enqueue(TT) {
        const oT = wo(TT);
        if (oT) this.pending.push(TT);
        else {
          const oT = this.pending.findIndex(wo);
          this.pending.splice(-1 === oT ? this.pending.length : oT, 0, TT)
        }
        return (null === this.current || null !== this.followUp && !oT) && (this.advance(), !0)
      }
      setHeld(TT) {
        return this.kS = TT, !TT && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      dD() {
        const TT = this.getJournal(),
          oT = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === oT ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === oT || void 0 === oT ? void 0 : oT.kind) && TT && TT.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === oT || void 0 === oT ? void 0 : oT.kind)) {
          const TT = this.findFollowUp(this.current);
          if ("step" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || TT.questId !== oT.questId || TT.step.id !== oT.step.id) return this.showFollowUp(TT, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(TT, oT, IT) {
        var iT, zT, kT, WT;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, TT, IT);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, TT);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, TT, oT);
        const {
          questCompletionKind: XT,
          questCompletionNameKey: BT
        } = this.current, FT = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, ST = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, DT = "step" === (null === (iT = this.followUp) || void 0 === iT ? void 0 : iT.kind) ? this.followUp : null, LT = "explore" === (null === (zT = this.followUp) || void 0 === zT ? void 0 : zT.kind);
        let xT;
        return xT = LT ? TT("skyblockGame:questExploreTitle") : null !== DT ? "quest" === XT ? TT("skyblockGame:questNextQuestTitle", {
          quest: TT(DT.questNameKey)
        }) : TT("skyblockGame:questNextStepTitle") : TT("started" === XT ? "skyblockGame:questStartedTitle" : "quest" === XT ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? XT : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: xT,
          name: LT ? oT("skyblockGame:questExploreName") : null !== DT ? go(oT, DT.step.nameKey, DT.step.nameParams) : go(oT, BT, FT),
          description: LT ? oT("skyblockGame:questExploreDescription") : null === DT ? null : go(oT, DT.step.descriptionKey, DT.step.descriptionParams),
          reward: null === this.followUp && ST > 0 ? oT("skyblockGame:questCoinRewardSuffix", {
            amount: ST.toLocaleString(IT)
          }) : null,
          iconItem: null !== (kT = null === DT || void 0 === DT ? void 0 : DT.step.questIconItem) && void 0 !== kT ? kT : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== DT && (null === (WT = this.getJournal()) || void 0 === WT ? void 0 : WT.trackedQuestId) === DT.questId ? DT.step.nameKey : null
        }
      }
      getSkillLevelView(TT, oT, IT) {
        let {
          skill: iT,
          beforeLevel: zT,
          level: kT
        } = TT;
        const WT = zo(iT, zT),
          XT = zo(iT, kT);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: oT(`skyblockGame:${iT}`),
          name: oT("skyblockGame:skillLevelUp", {
            to: kT.toLocaleString(IT)
          }),
          description: WT.percent === XT.percent ? null : oT(`${XT.translationKey}Change`, {
            before: WT.percent.toLocaleString(IT),
            after: XT.percent.toLocaleString(IT)
          }),
          reward: null,
          iconItem: Mo[iT],
          accent: Ao(iT),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(TT, oT) {
        let {
          landmarkNameKey: IT
        } = TT;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: oT("skyblockGame:landmarkDiscovered"),
          name: oT(IT),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(TT, oT, IT) {
        let {
          titleKey: iT,
          textKey: zT,
          params: kT = {},
          nameKeys: WT = {},
          iconItem: XT = null
        } = TT;
        const BT = {
          ...kT
        };
        for (const [FT, ST] of Object.entries(WT)) BT[FT] = oT(ST);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: oT(iT),
          name: IT(zT, BT),
          description: null,
          reward: null,
          iconItem: XT,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var TT;
        if (null !== this.followUp) return 5600;
        switch (null === (TT = this.current) || void 0 === TT ? void 0 : TT.questCompletionKind) {
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
      showFollowUp(TT, oT) {
        null === TT || this.kS ? this.advance() : (this.followUp = TT, this.token++, this.shownAt = this.now(), this.expiresAt = null !== oT && void 0 !== oT ? oT : this.shownAt + this.durationMs())
      }
      findFollowUp(TT) {
        var oT;
        const IT = this.getJournal();
        if (!IT || this.hasPendingQuestPopup() || wo(TT)) return null;
        const iT = "started" === TT.questCompletionKind ? IT.active.some((oT => oT.id === TT.questCompletionQuestId)) : "quest" === TT.questCompletionKind ? IT.completed.some((oT => oT.id === TT.questCompletionQuestId)) : [...IT.active, ...IT.completed].some((oT => oT.id === TT.questCompletionQuestId && oT.subquests.some((oT => oT.id === TT.questCompletionStepId && "completed" === oT.status))));
        if (!iT) return null;
        if ("quest" === TT.questCompletionKind && 0 === IT.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const zT = IT.active.find((TT => TT.id === IT.trackedQuestId)),
          kT = null !== (oT = null === zT || void 0 === zT ? void 0 : zT.subquests.find((TT => "ready" === TT.status))) && void 0 !== oT ? oT : null === zT || void 0 === zT ? void 0 : zT.subquests.find((TT => "active" === TT.status));
        return kT ? {
          kind: "step",
          questId: zT.id,
          questNameKey: zT.nameKey,
          step: kT
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((TT => !wo(TT)))
      }
      advance() {
        var TT;
        this.current = this.kS ? null : null !== (TT = this.pending.shift()) && void 0 !== TT ? TT : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function wo(TT) {
      return mo(TT.questCompletionKind)
    }

    function mo(TT) {
      return "skillLevel" === TT || "landmark" === TT || "npcNote" === TT
    }
    var eo = IT(37514);
    const Ro = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      vo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Eo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Co = IT(37516);
    const jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Uo = IT.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const ao = IT.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Yo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Qo = IT(17906),
      Oo = IT(19969),
      Ho = IT(22296),
      no = IT(23773),
      qo = IT(25472);
    const Zo = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Qo,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: Oo,
      cow: fo,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: IT(25488),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Ro,
      fishing_1: Ro,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: uo,
      guardian_iron: vo,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Ho,
      mines: no,
      mining_1: no,
      npc: Eo,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: fo,
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
      npc_gold_guardian: uo,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: vo,
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
      npc_tentacle_guy: Co,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: jo,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Uo,
      quest_talk: ao,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Yo,
      watermelon: qo
    };

    function so(TT, oT) {
      const IT = document.createElement("img");
      return IT.className = oT, IT.src = TT, IT.alt = "", IT.draggable = !1, IT
    }

    function to(TT) {
      var oT;
      const IT = null !== (oT = Zo[TT]) && void 0 !== oT ? oT : TT.startsWith("npc_") ? Eo : Yo;
      if ("portal" !== TT) return so(IT, "SkyblockMapIcon");
      const iT = document.createElement("span");
      iT.className = "SkyblockMapIcon Portal";
      const zT = document.createElement("span");
      return zT.className = "SkyblockMapIconTint", zT.style.maskImage = zT.style.webkitMaskImage = `url("${Jo}")`, iT.append(so(IT, "SkyblockMapIconLayer"), zT, so(Jo, "SkyblockMapIconLayer SkyblockMapIconShade")), iT
    }
    var Go = IT(37489),
      po = IT(3822);
    const bo = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function yo(TT) {
      const oT = new po.g(TT);
      return {
        radius: 45,
        squareness: 3,
        wobbles: bo.map((TT => {
          let {
            lobes: IT,
            amount: iT
          } = TT;
          return {
            lobes: IT[Math.floor(oT.next() * IT.length)],
            amount: iT[0] + oT.next() * (iT[1] - iT[0]),
            phase: 2 * oT.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function No(TT) {
      let {
        radius: oT,
        squareness: IT,
        wobbles: iT,
        samples: zT
      } = TT;
      const kT = [];
      for (let WT = 0; WT < zT; WT++) {
        const TT = 2 * Math.PI * WT / zT,
          XT = Math.cos(TT),
          BT = Math.sin(TT),
          FT = oT * (Math.abs(XT) ** IT + Math.abs(BT) ** IT) ** (-1 / IT) * iT.reduce(((oT, IT) => {
            let {
              lobes: iT,
              amount: zT,
              phase: kT
            } = IT;
            return oT + zT * Math.sin(iT * TT + kT)
          }), 1);
        kT.push(`${(50+FT*XT).toFixed(2)} ${(50+FT*BT).toFixed(2)}`)
      }
      return `M${kT.join("L")}Z`
    }
    const Po = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Vo {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Ec = !1, this.mountCompass = TT => {
          var oT;
          if (null === (oT = this.stopLayout) || void 0 === oT || oT.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !TT || this.Ec) return;
          const IT = TT.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: TT,
            track: IT,
            label: TT.querySelector(".SkyblockCompassLabel")
          }, IT.replaceChildren();
          for (let zT = 0; zT < 4; zT++) {
            const TT = document.createElement("span");
            TT.className = "SkyblockCompassCardinal", IT.appendChild(TT), this.cardinals.push(TT)
          }
          const iT = (0, Go.e)(Po, [TT], this.layout);
          this.stopLayout = () => {
            iT(), IT.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = TT => {
          this.terrain = this.Ec ? null : TT, this.render(this.frame)
        }, this.mountMinimapSearchArea = TT => {
          this.mountSearchArea("minimap", TT)
        }, this.mountMapSearchArea = TT => {
          this.mountSearchArea("map", TT)
        }, this.mountPlayer = TT => {
          this.player = this.Ec ? null : TT, this.render(this.frame)
        }, this.mountWaypoint = TT => {
          var oT, IT;
          if (null === (oT = this.stopWaypoint) || void 0 === oT || oT.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !TT || this.Ec) return;
          const iT = TT.querySelector(".SkyblockQuestWaypointMarker");
          iT.replaceChildren(to("quest")), this.markerIcon = "quest", this.waypoint = {
            root: TT,
            marker: iT,
            clip: TT.querySelector(".SkyblockQuestWaypointTextClip"),
            text: TT.querySelector(".SkyblockQuestWaypointText"),
            label: TT.querySelector(".SkyblockQuestWaypointLabel"),
            distance: TT.querySelector(".SkyblockQuestWaypointDistance"),
            hint: TT.querySelector(".SkyblockQuestWaypointHint")
          };
          const zT = () => {
              this.waypointMarkerSize = {
                width: iT.offsetWidth,
                height: iT.offsetHeight
              }, this.waypointInset = {
                x: iT.offsetWidth / 2 + 8,
                top: iT.offsetHeight + 8,
                bottom: 8
              }
            },
            kT = new ResizeObserver((() => {
              zT(), this.render(this.frame)
            }));
          kT.observe(iT, {
            box: "border-box"
          });
          const WT = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", WT), null === (IT = window.visualViewport) || void 0 === IT || IT.addEventListener("resize", WT), this.stopWaypoint = () => {
            var TT;
            kT.disconnect(), window.removeEventListener("resize", WT), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", WT)
          }, WT(), zT(), this.render(this.frame)
        }, this.mountWaypointOrigin = TT => {
          var oT;
          if (null === (oT = this.stopWaypointOrigin) || void 0 === oT || oT.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = TT && !this.Ec ? Number(TT.dataset.notificationToken) : null, TT && !this.Ec && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const oT = {
              nameKey: TT.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = oT;
            const IT = () => {
                const IT = TT.getBoundingClientRect();
                oT.x = (IT.left + IT.width / 2) / window.innerWidth * 100, oT.y = (IT.top + IT.height / 2) / window.innerHeight * 100
              },
              iT = new ResizeObserver(IT);
            iT.observe(TT.parentElement), iT.observe(TT), window.addEventListener("resize", IT), this.stopWaypointOrigin = () => {
              iT.disconnect(), window.removeEventListener("resize", IT)
            }, IT()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const TT = this.compass.root,
            oT = getComputedStyle(TT),
            IT = getComputedStyle(document.documentElement),
            iT = parseFloat(IT.fontSize),
            zT = parseFloat(oT.getPropertyValue("--compass-icon-size")) * iT,
            kT = "1" === oT.getPropertyValue("--compass-fit-top").trim(),
            WT = kT ? 1 : 8,
            XT = Array.from(document.querySelectorAll(Po), (TT => {
              var oT;
              return (null !== (oT = TT.querySelector(".MiddleTextTop")) && void 0 !== oT ? oT : TT).getBoundingClientRect()
            })).filter((TT => TT.width > 0 && TT.height > 0));
          let BT = (parseFloat(IT.getPropertyValue("--notchTop")) || 0) + WT,
            FT = "";
          if (kT) {
            const oT = window.innerWidth / 2,
              IT = TT.getBoundingClientRect().height,
              kT = [BT, ...XT.map((TT => Math.max(BT, TT.bottom + WT)))].sort(((TT, oT) => TT - oT));
            for (const TT of kT) {
              let kT = oT - 8;
              for (const iT of XT) iT.bottom + WT <= TT || iT.top >= TT + IT + WT || (kT = Math.min(kT, iT.right <= oT ? oT - iT.right - 8 : iT.left - oT - 8));
              const ST = 2 * kT - zT;
              if (ST >= 16 * iT) {
                FT = `${ST}px`, BT = TT;
                break
              }
            }
          }
          TT.style.maxWidth !== FT && (TT.style.maxWidth = FT);
          const ST = TT.getBoundingClientRect(),
            DT = this.compassSize.trackHalfWidth;
          if (ST.width > 0) {
            const TT = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: TT.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * zT / TT.width
          }
          if (!FT)
            for (const LT of XT) LT.right > ST.left - 8 && LT.left < ST.right + 8 && (BT = Math.max(BT, LT.bottom + WT));
          TT.style.top = `${BT}px`, this.compassSize.trackHalfWidth !== DT && this.render(this.frame)
        }
      }
      mountSearchArea(TT, oT) {
        this.searchAreas[TT] = this.Ec ? null : oT, this.render(this.frame)
      }
      render(TT) {
        if (this.Ec) return;
        if (this.frame = TT, this.compass && (TI(this.compass.root, !TT), TT)) {
          const oT = this.compassSize.trackHalfWidth / 50;
          TT.compass.cardinals.forEach(((TT, IT) => {
            const iT = this.cardinals[IT];
            iT.textContent !== TT.name && (iT.textContent = TT.name), TI(iT, TT.hidden), iT.style.translate = TT.left * oT + "px"
          }));
          const IT = new Set;
          TT.compass.markers.forEach(((iT, zT) => {
            var kT;
            IT.add(iT.id);
            let WT = this.markers.get(iT.id);
            WT || (WT = document.createElement("span"), WT.className = "SkyblockCompassMarker", this.markers.set(iT.id, WT), this.compass.track.appendChild(WT)), WT.dataset.icon !== iT.icon && (WT.dataset.icon = iT.icon, WT.replaceChildren(to(iT.icon))), WT.style.color = null !== (kT = iT.colour) && void 0 !== kT ? kT : "", WT.style.translate = iT.left * oT + "px", WT.style.zIndex = String(TT.compass.markers.length - zT), WT.title !== iT.name && (WT.title = iT.name)
          }));
          for (const [TT, iT] of this.markers) IT.has(TT) || (iT.remove(), this.markers.delete(TT));
          this.compass.label.textContent !== TT.compass.label && (this.compass.label.textContent = TT.compass.label)
        }
        this.terrain && (TI(this.terrain, !(null !== TT && void 0 !== TT && TT.minimap)), null !== TT && void 0 !== TT && TT.minimap && (this.terrain.style.transform = TT.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", TT.minimap.iconRotation)));
        const oT = null === TT || void 0 === TT ? void 0 : TT.searchArea;
        for (const IT of [this.searchAreas.minimap, this.searchAreas.map])
          if (IT && (TI(IT, !oT), oT)) {
            if (this.searchAreaPath.seed !== oT.shapeSeed && (this.searchAreaPath = {
                seed: oT.shapeSeed,
                d: No(yo(oT.shapeSeed))
              }), IT.dataset.shapeSeed !== oT.shapeSeed) {
              IT.dataset.shapeSeed = oT.shapeSeed;
              for (const TT of IT.querySelectorAll("path")) TT.setAttribute("d", this.searchAreaPath.d)
            }
            IT.style.left = `${oT.left}%`, IT.style.top = `${oT.top}%`, IT.style.width = `${oT.width}%`, IT.style.height = `${oT.height}%`
          } if (this.player && (TI(this.player, !(null !== TT && void 0 !== TT && TT.player) || TT.player.hidden), null !== TT && void 0 !== TT && TT.player && (this.player.style.left = `${TT.player.left}%`, this.player.style.top = `${TT.player.top}%`, this.player.style.setProperty("--map-player-rotation", TT.player.rotation))), this.waypoint) {
          const {
            root: oT,
            marker: IT,
            clip: iT,
            text: zT,
            label: kT,
            distance: WT,
            hint: XT
          } = this.waypoint, BT = !(null !== TT && void 0 !== TT && TT.waypoint) || null !== TT.waypoint.popupToken && TT.waypoint.popupToken !== this.waypointOriginToken;
          TI(oT, BT);
          let FT = 1;
          const ST = this.waypointLaunch;
          if (!BT && ST && TT.waypoint.nameKey === ST.nameKey) {
            const TT = performance.now();
            ST.startedAt ??= TT, FT = Math.min(1, Math.max(0, (TT - ST.startedAt - 450) / 1e3)), IT.style.opacity = String(Math.min(1, (TT - ST.startedAt) / 150)), 1 === FT && (this.waypointLaunch = null)
          } else IT.style.opacity = "", ST && null !== ST.startedAt && (this.waypointLaunch = null);
          if (oT.classList.toggle("Launching", FT < 1), null !== TT && void 0 !== TT && TT.waypoint) {
            const oT = this.waypointInset,
              BT = "quest_talk" === TT.waypoint.markerIcon ? function(TT, oT, IT) {
                if (!TT.text || null === TT.blockHeight || 0 === TT.nearness) return TT;
                const iT = TT.blockHeight / 100 * IT.height,
                  zT = -TT.nearness * (oI * iT + oT.width / 2),
                  kT = TT.nearness * (II * iT + oT.height / 2);
                return {
                  ...TT,
                  text: {
                    x: TT.text.x + zT / IT.width * 100,
                    y: TT.text.y + kT / IT.height * 100
                  }
                }
              }(TT.waypoint, this.waypointMarkerSize, this.viewport) : TT.waypoint,
              DT = (0, eo.d)(BT, oT, this.viewport),
              LT = FT * FT * (3 - 2 * FT),
              xT = FT < 1 ? ST.x + (DT.x - ST.x) * LT : DT.x,
              cT = FT < 1 ? ST.y + (DT.y - ST.y) * LT : DT.y;
            IT.style.translate = `${xT}vw ${cT}vh`, iT.style.clipPath = `inset(${oT.top}px ${oT.x}px ${oT.bottom}px)`, TI(zT, FT < 1 || !TT.waypoint.text), zT.style.opacity = String(1 - TT.waypoint.nearness), TT.waypoint.text && (zT.style.translate = `${TT.waypoint.text.x}vw ${TT.waypoint.text.y}vh`), kT.textContent !== TT.waypoint.name && (kT.textContent = TT.waypoint.name), this.markerIcon !== TT.waypoint.markerIcon && (this.markerIcon = TT.waypoint.markerIcon, IT.replaceChildren(to(this.markerIcon))), WT.textContent !== TT.waypoint.distance && (WT.textContent = TT.waypoint.distance), TI(XT, null === TT.waypoint.hint), null !== TT.waypoint.hint && XT.textContent !== TT.waypoint.hint && (XT.textContent = TT.waypoint.hint)
          }
        }
      }
      dispose() {
        var TT, oT;
        this.mountWaypointOrigin(null), this.render(null), null === (TT = this.stopLayout) || void 0 === TT || TT.call(this), this.stopLayout = null, null === (oT = this.stopWaypoint) || void 0 === oT || oT.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Ec = !0
      }
    }

    function TI(TT, oT) {
      TT.hidden !== oT && (TT.hidden = oT)
    }
    const oI = .55,
      II = .6;
    const iI = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class zI {
      constructor(TT, oT, IT, iT) {
        this.map = TT, this.quests = oT, this.compass = IT, this.display = new Vo, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Ec = !1, this.snapshot = null, this.texts = new Map, this.translate = iT
      }
      setTranslator(TT, oT) {
        this.translate = TT, this.locale = oT, this.metresFormat = new Intl.NumberFormat(oT), this.texts.clear()
      }
      translateCached(TT, oT) {
        const IT = void 0 === oT ? TT : `${TT} ${oT}`;
        let iT = this.texts.get(IT);
        return void 0 === iT && (this.texts.size >= 500 && this.texts.clear(), iT = this.translate(TT, void 0 === oT ? void 0 : {
          distance: oT
        }), this.texts.set(IT, iT)), iT
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(TT, oT, IT) {
        if (this.Ec) return;
        if (!TT) return this.snapshot = null, void this.display.render(null);
        const iT = this.map.getSnapshot().map,
          BT = IT.cameraHeading,
          FT = {
            ...this.display.compassSize,
            tanHalfFovX: IT.tanHalfFovX,
            pitch: IT.cameraPitch
          },
          ST = [];
        if (iT)
          for (const zT of this.compass.frame(TT, BT, oT)) {
            const TT = KT(zT.offset, FT);
            null !== TT && ST.push({
              ...zT,
              left: TT
            })
          }
        const DT = function(TT, oT) {
            const IT = [],
              iT = TT => "quest" === TT.kind ? TT.distance - 1 : TT.distance,
              zT = [...TT].sort(((TT, oT) => iT(TT) - iT(oT) || TT.id.localeCompare(oT.id)));
            for (const kT of zT) {
              let TT = !1;
              if ("quest" !== kT.kind)
                for (const iT of IT)
                  if (Math.abs(iT.left - kT.left) < oT) {
                    TT = !0;
                    break
                  } TT || IT.push(kT)
            }
            return IT
          }(ST, this.display.compassSpacing),
          LT = function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              IT = null;
            for (const iT of TT) Math.abs(iT.offset) <= oT && (!IT || iT.distance < IT.distance || iT.distance === IT.distance && Math.abs(iT.offset) < Math.abs(IT.offset)) && (IT = iT);
            return IT
          }(DT),
          xT = TT => {
            var oT;
            return null !== (oT = TT.displayName) && void 0 !== oT ? oT : this.translateCached(TT.nameKey)
          },
          cT = {
            compass: {
              markers: DT.map((TT => ({
                id: TT.id,
                icon: TT.icon,
                colour: TT.colour,
                name: xT(TT),
                left: TT.left
              }))),
              cardinals: WT.map((TT => {
                let {
                  name: oT,
                  bearing: IT
                } = TT;
                const iT = KT(zT.e.computeShortestRotation(BT, IT), FT);
                return {
                  name: oT,
                  left: null !== iT && void 0 !== iT ? iT : 0,
                  hidden: null === iT
                }
              })),
              label: LT ? `${xT(LT)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",mT(LT.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== iT && void 0 !== iT && iT.background) {
          const oT = TT[0] - iT.mapOrigin[0],
            IT = TT[2] - iT.mapOrigin[2],
            {
              rotation: zT,
              transform: WT
            } = function(TT, oT, IT, iT) {
              const [zT, WT] = XT(TT, oT, iT), BT = kT - IT;
              return {
                rotation: BT,
                transform: `rotate(${BT}rad) translate(-${zT}%, -${WT}%)`
              }
            }(oT, IT, BT, iT.background.bounds);
          cT.minimap = {
            transform: WT,
            iconRotation: -zT + "rad"
          };
          const [FT, ST] = XT(oT, IT, iT.background.bounds);
          cT.player = {
            left: FT,
            top: ST,
            hidden: FT < 0 || ST < 0 || FT > 100 || ST > 100,
            rotation: -zT + "rad"
          }
        }
        const {
          waypoint: MT
        } = this.quests.getSnapshot();
        if ("search" === (null === MT || void 0 === MT ? void 0 : MT.questMarkerIcon) && null !== iT && void 0 !== iT && iT.background) {
          const {
            bounds: TT
          } = iT.background, [oT, IT] = XT(MT.position[0] - iT.mapOrigin[0], MT.position[2] - iT.mapOrigin[2], TT);
          cT.searchArea = {
            left: oT,
            top: IT,
            width: 6400 / (TT.mapMaxX - TT.mapMinX),
            height: 6400 / (TT.mapMaxZ - TT.mapMinZ),
            shapeSeed: MT.nameKey
          }
        }
        const rT = this.quests.getNotificationSnapshot(),
          AT = "completion" === (null === rT || void 0 === rT ? void 0 : rT.phase) && !mo(rT.kind);
        if (MT && !AT) {
          const oT = Math.hypot(...MT.position.map(((oT, IT) => oT - TT[IT]))),
            iT = Math.round(oT),
            zT = "talk" === MT.questMarkerIcon ? Math.min(1, Math.max(0, (10 - oT) / 5)) : 0,
            kT = IT.projectWorldPosToViewport(MT.position),
            WT = kT && IT.projectWorldPosToViewport([MT.position[0], MT.position[1] - 1, MT.position[2]]);
          cT.waypoint = {
            ...IT.projectWorldPosToScreenPos(MT.position),
            text: kT,
            nearness: zT * zT * (3 - 2 * zT),
            blockHeight: kT && WT ? WT.y - kT.y : null,
            name: this.translateCached(MT.nameKey),
            nameKey: MT.nameKey,
            markerIcon: MT.questMarkerIcon ? iI[MT.questMarkerIcon] : "quest",
            popupToken: (null === rT || void 0 === rT ? void 0 : rT.waypointNameKey) === MT.nameKey ? rT.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(iT)),
            hint: "search" === MT.questMarkerIcon && Math.hypot(MT.position[0] - TT[0], MT.position[2] - TT[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = cT, this.display.render(cT)
      }
      dispose() {
        this.Ec = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const kI = "skyblockSkillsView";
    class WI extends DT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          IT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT => TT,
          iT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          zT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => TT;
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = oT, this.translate = IT, this.locale = iT, this.itemName = zT, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, this.locale = oT, this.itemName = IT, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(TT) {
        let oT = this.skillText.get(TT);
        return oT || (oT = {
          label: this.translate(`skyblockGame:${TT}`),
          description: this.translate(`skyblockGame:${TT}Description`)
        }, this.skillText.set(TT, oT)), oT
      }
      sources(TT) {
        if ("mining" === TT || "fishing" === TT) return this.buildSources(TT);
        let oT = this.sourceText.get(TT);
        return oT || (oT = this.buildSources(TT), this.sourceText.set(TT, oT)), oT
      }
      buildSources(TT) {
        const oT = this.translate;
        return "exploration" === TT ? [oT("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), oT("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === TT ? [oT("skyblockGame:logSource", {
          xp: this.number(Do["Maple Log"])
        })] : "combat" === TT ? [oT("skyblockGame:creatureKillSource"), oT("skyblockGame:noEnvironmentalXp")] : "farming" === TT ? [oT("skyblockGame:cropSource", {
          xp: this.number(co["Wheat|FreshlyGrown"])
        }), oT("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), oT("skyblockGame:noYoungCropXp")] : Object.entries("mining" === TT ? xo : Ko).map((TT => {
          let [IT, iT] = TT;
          return oT("skyblockGame:itemXpSource", {
            item: this.itemName(IT),
            xp: this.number(iT)
          })
        }))
      }
      number(TT) {
        return TT.toLocaleString(this.locale)
      }
      benefit(TT, oT) {
        const IT = zo(TT, oT);
        return this.translate(IT.translationKey, {
          bonus: this.number(IT.percent)
        })
      }
      Jc(TT) {
        if (!this.Ec) {
          if ("snapshot" === TT.kind) this.progress = TT.progress, this.pending.clear(), this.recent = null;
          else if ("award" === TT.kind && this.progress) {
            const {
              award: oT
            } = TT;
            this.progress = {
              ...this.progress,
              [oT.skill]: oT.after
            };
            for (const [TT, iT] of this.pending) iT.skill === oT.skill && this.pending.delete(TT);
            const IT = oT.after.level > oT.before.level;
            this.recordGain(oT.skill, oT.amount, IT ? ++this.nextLevelUpToken : null), IT && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: oT.skill,
              beforeLevel: oT.before.level,
              level: oT.after.level
            })
          } else {
            if ("rejectBlock" === TT.kind) return void this.rejectBlock(TT.position);
            if ("open" === TT.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(TT, oT, IT) {
        if (!this.progress || this.Ec || IT) return;
        const iT = function(TT, oT) {
          const IT = TT.split("|")[0];
          return "Air" === oT || oT === `Barkless ${TT}` ? Object.hasOwn(Do, IT) ? {
            skill: "foraging",
            amount: Do[IT]
          } : "Air" !== oT ? null : Object.hasOwn(xo, TT) ? {
            skill: "mining",
            amount: xo[TT]
          } : Bo(TT) ? {
            skill: "farming",
            amount: 10
          } : So(TT) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(co, TT) ? {
            skill: "farming",
            amount: co[TT]
          } : Object.hasOwn(QT, TT) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(oT, "Air");
        if (!iT) return;
        const zT = TT.join(",");
        if (this.pending.has(zT)) return;
        const kT = this.predictedProgress(iT.skill).totalXp + iT.amount;
        Number.isSafeInteger(kT) && (this.pending.set(zT, {
          ...iT,
          expires: this.now() + 2e3
        }), this.recordGain(iT.skill, 0), this.emit())
      }
      rejectBlock(TT) {
        this.pending.delete(TT.join(",")) && this.emit()
      }
      dD() {
        if (this.Ec) return;
        let TT = !1;
        for (const [oT, IT] of this.pending) IT.expires <= this.now() && (this.pending.delete(oT), TT = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, TT = !0), TT && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(TT, oT) {
        var IT, iT;
        let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const kT = (null === (IT = this.recent) || void 0 === IT ? void 0 : IT.skill) === TT && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          WT = (null === (iT = this.recent) || void 0 === iT ? void 0 : iT.skill) === TT && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: TT,
          confirmed: kT + oT,
          expires: this.now() + 3e3,
          levelUpToken: null !== zT && void 0 !== zT ? zT : WT
        }
      }
      pendingXp(TT) {
        let oT = 0;
        for (const IT of this.pending.values()) IT.skill === TT && (oT += IT.amount);
        return oT
      }
      predictedProgress(TT) {
        const oT = this.progress[TT],
          IT = this.pendingXp(TT);
        return IT ? Wo(oT.totalXp + IT, TT) : oT
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var TT, oT, IT;
        const iT = this.progress ? bT.map((TT => {
            const oT = this.predictedProgress(TT);
            return {
              ...this.text(TT),
              icon: Mo[TT],
              benefit: this.benefit(TT, oT.level),
              sources: this.sources(TT),
              id: TT,
              selected: TT === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(oT.level)
              }),
              xp: null === oT.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(oT.xpIntoLevel),
                target: this.number(oT.xpForNextLevel)
              }),
              percent: null === oT.xpForNextLevel ? 100 : Math.min(100, oT.xpIntoLevel / oT.xpForNextLevel * 100)
            }
          })) : [],
          zT = iT.find((TT => {
            var oT;
            return TT.id === (null === (oT = this.recent) || void 0 === oT ? void 0 : oT.skill)
          })),
          kT = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: iT,
          detail: null !== (TT = iT.find((TT => TT.selected))) && void 0 !== TT ? TT : null,
          overallLevel: this.progress ? bT.reduce(((TT, oT) => TT + this.predictedProgress(oT).level), 0) : null,
          hud: zT && kT > 0 ? {
            skill: zT,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(kT)
            }),
            levelUpToken: null !== (oT = null === (IT = this.recent) || void 0 === IT ? void 0 : IT.levelUpToken) && void 0 !== oT ? oT : null,
            colour: Ao(zT.id)
          } : null
        }
      }
    }
    const XI = Math.max(1600, 600, 950) + 400,
      BI = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      FI = "skyblockQuestsView",
      SI = "skyblockQuestNotificationView";
    class DI extends DT {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          WT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(TT, iT, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = oT, this.translate = IT, this.now = zT, this.locale = kT, this.publishNotification = WT, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var TT, oT;
          this.selected = null !== (TT = null === (oT = this.authoritative) || void 0 === oT ? void 0 : oT.trackedQuestId) && void 0 !== TT ? TT : null, this.show()
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const TT = this.snapshot.detail;
          !this.Ec && null !== TT && void 0 !== TT && TT.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(TT.id), this.emit())
        }, this.viewDialogue = () => {
          const TT = this.snapshot.detail;
          var oT;
          TT && (null === (oT = this.onViewDialogue) || void 0 === oT || oT.call(this, TT.id))
        }, this.notifications = new ho(zT, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var TT, oT;
        return null !== (TT = null === (oT = this.authoritative) || void 0 === oT ? void 0 : oT.trackedQuestId) && void 0 !== TT ? TT : null
      }
      notify(TT) {
        !this.Ec && this.notifications.enqueue(TT) && this.emitNotification()
      }
      setNotificationsHeld(TT) {
        (this.notifications.setHeld(TT) || TT) && this.emitNotification()
      }
      dD() {
        var TT, oT;
        if (this.Ec) return;
        this.notifications.dD() && this.emitNotification();
        let IT = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, IT = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, IT = !0);
        const iT = LI(this.authoritative);
        null !== iT && void 0 !== iT && null !== (TT = iT.questClock) && void 0 !== TT && TT.running && this.clockText(iT) !== (null === (oT = this.snapshot.tracked) || void 0 === oT ? void 0 : oT.clock) && (IT = !0), IT && this.emit()
      }
      setTranslator(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = TT, this.locale = oT, this.emitNotification(), this.emit()
      }
      Jc(TT) {
        if (!this.Ec)
          if ("completion" === TT.kind) this.notify(TT.questCompletion);
          else if ("landmark" === TT.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: TT.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === TT.kind) {
          var oT, IT, iT;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: TT.npcNoteTitleKey,
            textKey: TT.npcNoteTextKey,
            params: null !== (oT = TT.npcNoteParams) && void 0 !== oT ? oT : {},
            nameKeys: null !== (IT = TT.npcNoteNameKeys) && void 0 !== IT ? IT : {},
            iconItem: null !== (iT = TT.npcNoteIconItem) && void 0 !== iT ? iT : null
          })
        } else if ("open" === TT.kind) this.show();
        else if ("guidance" === TT.kind) this.waypoint = TT.waypoint, this.compassTarget = TT.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === TT.kind) {
          this.authoritative = TT.snapshot, this.notifications.dD() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const oT = this.trackedStepPulse;
          this.updateTrackedStepPulse(TT.snapshot), this.emit(), this.trackedStepPulse > oT && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Ec || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var TT;
        return null !== (TT = this.translateWithIcons) && void 0 !== TT ? TT : this.translate
      }
      clockText(TT) {
        const oT = TT.questClock;
        if (!oT) return null;
        const IT = oT.elapsedMs + (oT.running ? this.now() - this.receivedAt : 0);
        return void 0 === oT.countdownFromMs ? (0, jT.t)(IT, !1) : (0, jT.t)(1e3 * Math.ceil(Math.max(0, oT.countdownFromMs - IT) / 1e3), !1)
      }
      updateTrackedStepPulse(TT) {
        var oT, IT, iT;
        const zT = LI(TT);
        if (!zT) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const kT = TT => zT.subquests.filter((oT => TT(oT.status))).map((TT => TT.id)),
          WT = kT((TT => "completed" === TT || "skipped" === TT)),
          XT = kT((TT => "locked" !== TT)),
          BT = (null === (oT = this.trackedSteps) || void 0 === oT ? void 0 : oT.questId) === zT.id && zT.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (BT) {
          const TT = WT.filter((TT => !BT.finished.has(TT))),
            oT = kT((TT => "active" === TT || "ready" === TT)).filter((TT => !BT.unlocked.has(TT)));
          TT.length > 0 && this.trackedStepPulse++, (TT.length > 0 || oT.length > 0) && (this.trackedChange = {
            finished: new Set(TT),
            unlocked: new Set(oT),
            expiresAt: this.now() + XI
          })
        } else {
          var FT;
          this.trackedStepPulse = (null === (FT = this.trackedSteps) || void 0 === FT ? void 0 : FT.questId) === zT.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: zT.id,
          progress: zT.progress,
          finished: new Set([...null !== (IT = null === BT || void 0 === BT ? void 0 : BT.finished) && void 0 !== IT ? IT : [], ...WT]),
          unlocked: new Set([...null !== (iT = null === BT || void 0 === BT ? void 0 : BT.unlocked) && void 0 !== iT ? iT : [], ...XT])
        }
      }
      entry(TT, oT) {
        var IT, iT;
        const zT = TT.id === (null === (IT = this.authoritative) || void 0 === IT ? void 0 : IT.trackedQuestId),
          kT = this.now() < this.trackAvailableAt,
          WT = this.questTextTranslator(),
          XT = TT.subquests.map((oT => {
            var IT, iT, kT, XT, BT, FT;
            const ST = null !== (IT = oT.handInNpcName) && void 0 !== IT ? IT : TT.giverName,
              DT = this.translate("skyblockGame:progress", {
                current: oT.progress.toLocaleString(this.locale),
                target: oT.target.toLocaleString(this.locale)
              }),
              LT = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: ST ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [oT.status],
              xT = "active" === oT.status || "ready" === oT.status;
            return {
              id: oT.id,
              name: go(WT, oT.nameKey, oT.nameParams),
              description: go(WT, oT.descriptionKey, oT.descriptionParams),
              progress: DT,
              status: oT.status,
              statusLabel: LT ? this.translate(LT, {
                npc: ST
              }) : DT,
              iconItem: xT && null !== (iT = oT.questIconItem) && void 0 !== iT ? iT : null,
              barPercent: "active" === oT.status && oT.showsProgressBar ? Math.min(100, 100 * oT.progress / oT.target) : null,
              justFinished: zT && null !== (kT = null === (XT = this.trackedChange) || void 0 === XT ? void 0 : XT.finished.has(oT.id)) && void 0 !== kT && kT,
              justUnlocked: zT && null !== (BT = null === (FT = this.trackedChange) || void 0 === FT ? void 0 : FT.unlocked.has(oT.id)) && void 0 !== BT && BT
            }
          }));
        return {
          id: TT.id,
          name: go(WT, TT.nameKey, TT.nameParams),
          description: go(WT, TT.descriptionKey, TT.descriptionParams),
          progress: oT ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: TT.progress.toLocaleString(this.locale),
            target: TT.target.toLocaleString(this.locale)
          }),
          completed: oT,
          tracked: zT,
          selected: TT.id === this.selected,
          canTrack: !oT && !zT && !kT,
          trackLabel: this.translate(zT ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : kT ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== TT.id,
          subquests: XT,
          focusStep: null !== (iT = XT.find((TT => null !== TT.barPercent))) && void 0 !== iT ? iT : null,
          clock: this.clockText(TT)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var TT, oT, IT, iT, zT, kT, WT, XT, BT, FT;
        const ST = [...null !== (TT = null === (oT = this.authoritative) || void 0 === oT ? void 0 : oT.active) && void 0 !== TT ? TT : [], ...null !== (IT = null === (iT = this.authoritative) || void 0 === iT ? void 0 : iT.completed) && void 0 !== IT ? IT : []];
        var DT, LT, xT, cT;
        ST.some((TT => TT.id === this.selected)) || (this.selected = null !== (DT = null !== (LT = null === (xT = this.authoritative) || void 0 === xT ? void 0 : xT.trackedQuestId) && void 0 !== LT ? LT : null === (cT = ST[0]) || void 0 === cT ? void 0 : cT.id) && void 0 !== DT ? DT : null);
        const KT = null !== (zT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.active.map((TT => this.entry(TT, !1)))) && void 0 !== zT ? zT : [];
        KT.sort(((TT, oT) => Number(oT.tracked) - Number(TT.tracked)));
        const MT = null !== (WT = null === (XT = this.authoritative) || void 0 === XT ? void 0 : XT.completed.map((TT => this.entry(TT, !0)))) && void 0 !== WT ? WT : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: KT,
          completed: MT,
          completedExpanded: this.completedExpanded,
          detail: null !== (BT = [...KT, ...MT].find((TT => TT.selected))) && void 0 !== BT ? BT : null,
          tracked: null !== (FT = KT.find((TT => TT.tracked))) && void 0 !== FT ? FT : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function LI(TT) {
      var oT;
      return null !== (oT = null === TT || void 0 === TT ? void 0 : TT.active.find((oT => oT.id === TT.trackedQuestId))) && void 0 !== oT ? oT : null
    }
    const xI = "skyblockDungeonsView";
    class cI extends DT {
      constructor(TT, oT) {
        let IT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          iT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = oT, this.locale = IT, this.requestEnter = iT, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const TT = this.pickerEntry(),
            oT = null === TT || void 0 === TT ? void 0 : TT.difficulties[this.pageIndex];
          void 0 !== oT && null !== oT.unlockedBoss && (this.close(), this.requestEnter(TT.id, oT.difficulty))
        }
      }
      setTranslator(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = TT, this.locale = oT, this.emit()
      }
      Jc(TT) {
        var oT, IT;
        if (!this.Ec) return "open" === TT.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== TT.kind ? "snapshot" === TT.kind && (this.authoritative = TT.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (oT = null === (IT = this.pickerEntry()) || void 0 === IT ? void 0 : IT.difficulties.length) && void 0 !== oT ? oT : 1) - 1)), null === TT.snapshot && this.open ? this.close() : this.emit()) : this.choose(TT.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(TT) {
        var oT;
        const IT = null === (oT = this.authoritative) || void 0 === oT ? void 0 : oT.dungeons.find((oT => oT.id === TT));
        void 0 !== IT ? this.open && this.pickerDungeonId === TT || (this.pickerDungeonId = TT, this.pageIndex = Math.max(0, IT.difficulties.findLastIndex((TT => null !== TT.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${TT}`)
      }
      turnTo(TT) {
        var oT, IT;
        const iT = null !== (oT = null === (IT = this.pickerEntry()) || void 0 === IT ? void 0 : IT.difficulties.length) && void 0 !== oT ? oT : 0;
        TT < 0 || TT >= iT || TT === this.pageIndex || (this.pageIndex = TT, this.emit())
      }
      pickerEntry() {
        var TT, oT;
        return null !== (TT = null === (oT = this.authoritative) || void 0 === oT ? void 0 : oT.dungeons.find((TT => TT.id === this.pickerDungeonId))) && void 0 !== TT ? TT : null
      }
      difficulty(TT) {
        const oT = TT.completions > 0,
          IT = null === TT.bestMs ? null : (0, jT.t)(TT.bestMs);
        return {
          difficulty: TT.difficulty,
          label: this.translate(jT.e[TT.difficulty]),
          colour: jT.i[TT.difficulty],
          beaten: oT,
          bestTime: IT,
          completions: TT.completions,
          summary: oT ? [null === IT ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: IT
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: TT.completions.toLocaleString(this.locale)
          })].filter((TT => null !== TT)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(TT) {
        const oT = TT.difficulties.map((TT => this.difficulty(TT))),
          IT = oT.filter((TT => TT.beaten)).length;
        return {
          id: TT.id,
          name: this.translate(TT.nameKey),
          selected: TT.id === this.selected,
          beatenSummary: `${IT} / ${oT.length}`,
          difficulties: oT
        }
      }
      picker() {
        const TT = this.pickerEntry();
        if (null === TT || 0 === TT.difficulties.length) return null;
        const oT = TT.difficulties.map(((oT, IT) => {
          var iT, zT, kT, WT;
          const XT = oT.unlockedBoss,
            BT = null === XT ? this.lockedHint(TT, IT) : null;
          return {
            ...this.difficulty(oT),
            unlocked: null !== XT,
            bossName: null === XT ? null : this.translate(XT.bossNameKey),
            bossMobType: null !== (iT = null === XT || void 0 === XT ? void 0 : XT.bossMobType) && void 0 !== iT ? iT : null,
            bossMobVariation: null !== (zT = null === XT || void 0 === XT ? void 0 : XT.bossMobVariation) && void 0 !== zT ? zT : null,
            lockedHint: null !== (kT = null === BT || void 0 === BT ? void 0 : BT.text) && void 0 !== kT ? kT : null,
            lockedHintHighlight: null !== (WT = null === BT || void 0 === BT ? void 0 : BT.highlight) && void 0 !== WT ? WT : null,
            current: IT === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(TT.nameKey),
          pages: oT,
          page: oT[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < oT.length - 1
        }
      }
      lockedHint(TT, oT) {
        var IT, iT, zT;
        if (0 === oT && "number" === typeof TT.combatLevelLock) {
          const oT = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: TT.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: oT,
            colour: Ao("combat"),
            icon: Mo.combat
          })
        }
        const kT = null !== (IT = null === (iT = this.authoritative) || void 0 === iT ? void 0 : iT.dungeons) && void 0 !== IT ? IT : [],
          WT = oT > 0 ? TT : null !== (zT = kT[kT.indexOf(TT) - 1]) && void 0 !== zT ? zT : null,
          XT = oT > 0 ? TT.difficulties[oT - 1] : null === WT || void 0 === WT ? void 0 : WT.difficulties[0];
        if (null === WT || void 0 === XT) return null;
        const BT = this.translate(WT.nameKey);
        if (null === XT.unlockedBoss) return WT === TT ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, XT.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: BT
        }, XT.difficulty);
        const FT = this.translate(XT.unlockedBoss.bossNameKey);
        return WT === TT ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: FT
        }, XT.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: FT,
            dungeon: BT
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(TT, oT, IT) {
        return this.hintHighlighting(TT, oT, "difficulty", {
          name: this.translate(jT.e[IT]),
          colour: jT.i[IT],
          icon: null
        })
      }
      hintHighlighting(TT, oT, IT, iT) {
        let {
          name: zT,
          colour: kT,
          icon: WT
        } = iT;
        const XT = this.translate(TT, {
          ...oT,
          [IT]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(TT, {
            ...oT,
            [IT]: zT
          }),
          highlight: 2 === XT.length ? {
            before: XT[0],
            name: zT,
            after: XT[1],
            colour: kT,
            icon: WT
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var TT, oT, IT;
        const iT = null !== (TT = null === (oT = this.authoritative) || void 0 === oT ? void 0 : oT.dungeons) && void 0 !== TT ? TT : [];
        var zT, kT;
        iT.some((TT => TT.id === this.selected)) || (this.selected = null !== (zT = null === (kT = iT[0]) || void 0 === kT ? void 0 : kT.id) && void 0 !== zT ? zT : null);
        const WT = iT.map((TT => this.entry(TT)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: WT,
          detail: null !== (IT = WT.find((TT => TT.selected))) && void 0 !== IT ? IT : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const KI = ["mining", "farming", "foraging", "fishing", "combat"],
      MI = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      rI = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function AI() {
      for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
      return oT.map(((TT, oT) => ({
        amount: TT,
        coins: MI[oT],
        xp: rI[oT]
      })))
    }
    const gI = AI(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      hI = AI(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      wI = AI(50, 100, 250, 500, 1e3, 2500, 5e3),
      mI = AI(25, 50, 100, 250, 500, 1e3),
      eI = AI(10, 25, 50, 100, 250, 500, 1e3),
      RI = AI(1, 5, 10, 25, 50);

    function uI(TT, oT) {
      return {
        id: TT,
        category: "fishing",
        item: oT,
        drops: [oT],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eI
      }
    }
    const vI = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: hI
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: wI
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: wI
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: mI
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: mI
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: hI
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: gI
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: gI
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: gI
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: wI
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: hI
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: hI
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: hI
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: wI
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: wI
      }, uI("wheatfish", "Wheatfish"), uI("darter", "Darter"), uI("sunset_minnow", "Sunset Minnow"), uI("root_flounder", "Root Flounder"), uI("greenfin_loach", "Greenfin Loach"), uI("red_strongfish", "Red Strongfish"), uI("green_strongfish", "Green Strongfish"), uI("boomerang_fish", "Boomerang Fish"), uI("seahorse", "Seahorse"), uI("spined_stickleback", "Spined Stickleback"), uI("moon_strongfish", "Moon Strongfish"), uI("boulder_bass", "Boulder Bass"), uI("grass_snapper", "Grass Snapper"), uI("crystal_wheatfish", "Crystalized Wheatfish", RI), uI("moonstone_pupfish", "Moonstone Pupfish", RI), uI("reedglass_minnow", "Reedglass Minnow"), uI("mangrove_herring", "Mangrove Herring"), uI("mudline_perch", "Mudline Perch"), uI("coastal_mullet", "Coastal Mullet"), uI("reef_sardine", "Reef Sardine"), uI("root_perch", "Root Perch"), uI("driftwood_catfish", "Driftwood Catfish"), uI("aether_minnow", "Aether Minnow"), uI("needlefish", "Tri-Pointed Needlefish"), uI("threadfin_bream", "Threadfin Bream"), uI("mudbelly_tilapia", "Mudbelly Tilapia"), uI("rotslab_eel", "Rotslab Eel"), uI("polarflash_electron", "Polarflash Electron"), uI("mireback_carp", "Mireback Carp"), uI("blackwater_bream", "Blackwater Bream"), uI("stone_grouper", "Stone Grouper"), uI("shadeback_ray", "Shadeback Ray"), uI("glacial_silverfish", "Glacial Silverfish"), uI("hatchetfish", "Hatchetfish"), uI("moonlit_boomerang", "Moonlit Boomerang Fish"), uI("murkborne_ray", "Murkborne Ray"), uI("bamboo_catfish", "Bamboo Catfish"), uI("mossback_arapaima", "Mossback Arapaima"), uI("murk_stingray", "Murk Stingray"), uI("channel_sawfish", "Channel Sawfish"), uI("boned_sturgeon", "Boned Sturgeon"), uI("oarfish", "Oarfish"), uI("snakehead", "Snakehead", RI), uI("eldertide_leviathan", "Eldertide Leviathan", RI), uI("pithead", "Pithead"), uI("electric_eel", "Electric Eel"), uI("shadow_darter", "Shadow Darter"), uI("abyss_carp", "Abyss Carp"), uI("nomai_moray", "Nomai Moray"), uI("silver_dragonfish", "Silver Dragonfish"), uI("giant_moray", "Giant Moray"), uI("coelacanth", "Coelacanth", RI), uI("frost_herring", "Frost Herring"), uI("permafrost_halibut", "Permafrost Halibut"), uI("glacial_lanternfish", "Glacial Lanternfish"), uI("frozen_grenadier", "Frozen Grenadier"), uI("blackfin_icefish", "Blackfin Icefish"), uI("moonfish", "Moonfish"), uI("alpha_strongfish", "Alpha Moon Strongfish"), uI("deep_lanternfish", "Deepwater Lanternfish", RI), uI("pearlescent_moonfish", "Pearlescent Moonfish", RI), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: hI
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: mI
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: mI
      }],
      EI = (new Map(vI.map((TT => [TT.id, TT]))), new Map),
      fI = new Map;
    for (const SB of vI) {
      for (const [TT, oT] of Object.entries(null !== (CI = SB.blocks) && void 0 !== CI ? CI : {})) {
        var CI;
        EI.set(TT, {
          collection: SB,
          amount: oT
        })
      }
      for (const TT of null !== (jI = SB.drops) && void 0 !== jI ? jI : []) {
        var jI;
        fI.set(TT, SB)
      }
    }

    function JI(TT, oT) {
      let IT = 0;
      for (; IT < TT.tiers.length && oT >= TT.tiers[IT].amount;) IT++;
      return IT
    }
    const UI = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function aI(TT) {
      return UI[TT - 1]
    }
    const YI = "skyblockCollectionsView";
    class QI extends DT {
      constructor(TT, oT) {
        let IT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          iT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => TT;
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = oT, this.locale = IT, this.itemName = iT, this.counts = null, this.category = "mining", this.selected = vI[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = TT => {
          this.category = TT, this.selected = this.inCategory(TT)[0].id, this.emit()
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, this.locale = oT, this.itemName = IT, this.emit()
      }
      Jc(TT) {
        if (!this.Ec)
          if ("collOpen" !== TT.kind) {
            (TT.collFull || null === this.counts) && (this.counts = new Map);
            for (const [oT, IT] of TT.collCounts) this.counts.set(oT, IT);
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
        var TT;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const oT = this.inCategory(this.category).map((TT => this.collectionView(TT))),
          IT = vI.reduce(((TT, oT) => TT + this.tierOf(oT)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: KI.map((TT => this.categoryView(TT))),
          collections: oT,
          detail: null !== (TT = oT.find((TT => TT.selected))) && void 0 !== TT ? TT : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(IT)
          })
        }
      }
      categoryView(TT) {
        const oT = this.inCategory(TT),
          IT = oT.reduce(((TT, oT) => TT + this.tierOf(oT)), 0),
          iT = oT.reduce(((TT, oT) => TT + oT.tiers.length), 0);
        return {
          id: TT,
          label: this.translate(`skyblockGame:${TT}`),
          icon: Mo[TT],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(IT),
            target: this.number(iT)
          }),
          selected: TT === this.category
        }
      }
      collectionView(TT) {
        var oT, IT;
        const iT = null !== (oT = this.counts.get(TT.id)) && void 0 !== oT ? oT : 0,
          zT = JI(TT, iT),
          kT = null !== (IT = TT.tiers[zT]) && void 0 !== IT ? IT : null,
          WT = 0 === zT ? 0 : TT.tiers[zT - 1].amount;
        return {
          id: TT.id,
          name: this.itemName(TT.item),
          icon: TT.item,
          selected: TT.id === this.selected,
          locked: 0 === iT,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(iT)
          }),
          tier: 0 === zT ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(zT),
          percent: null === kT ? 100 : Math.min(100, (iT - WT) / (kT.amount - WT) * 100),
          progress: null === kT ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(iT),
            target: this.number(kT.amount)
          }),
          nextReward: null === kT ? null : this.reward(TT, kT.coins, kT.xp)
        }
      }
      reward(TT, oT, IT) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(oT),
          xp: this.number(IT),
          skill: this.translate(`skyblockGame:${TT.category}`)
        })
      }
      tierLabel(TT) {
        return this.translate("skyblockGame:collectionTier", {
          tier: aI(TT)
        })
      }
      tierOf(TT) {
        var oT;
        return JI(TT, null !== (oT = this.counts.get(TT.id)) && void 0 !== oT ? oT : 0)
      }
      inCategory(TT) {
        return vI.filter((oT => oT.category === TT))
      }
      number(TT) {
        return TT.toLocaleString(this.locale)
      }
    }
    const OI = "skyblockPortalTransitView",
      HI = "skyblockPortalArrival";
    class nI {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.XM = TT, this.storage = oT, this.now = IT, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Jc(TT) {
        const oT = {
          zoneNameKey: TT.transitZoneNameKey,
          variation: TT.transitZoneVariation,
          colour: TT.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(HI, oT), this.show("departure", oT.zoneNameKey, oT.colour, TT.transitDurationMs, TT.transitDurationMs + 1500, (() => {
          this.storage.removeItem(HI)
        }))
      }
      resumeArrival(TT) {
        const oT = this.storage.getItem(HI);
        this.storage.removeItem(HI), null === oT || oT.variation !== TT || this.now() - oT.departedAt > 3e4 || this.show("arrival", oT.zoneNameKey, oT.colour, 3200, 2e4)
      }
      finishArrival(TT) {
        var oT;
        "arrival" === (null === (oT = this.view) || void 0 === oT ? void 0 : oT.phase) && this.view.token === TT && (this.clearTimer(), this.view = null, this.XM(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(TT, oT, IT, iT, zT, kT) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: TT,
          zoneNameKey: oT,
          colour: IT,
          durationMs: iT
        }, this.XM(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.XM(null), null === kT || void 0 === kT || kT()
        }), zT)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const qI = "skyblockDailyRewardView",
      ZI = "skyblockDailyRewardCoin";
    class lI {
      constructor(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          BT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.XM = TT, this.isBusy = oT, this.holdQuestPopups = IT, this.onHeldCoinsChanged = iT, this.onCoinLanded = zT, this.onStarted = kT, this.onFinished = WT, this.onItemLanded = XT, this.now = BT, this.kS = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var TT, oT;
        return null !== (TT = null === (oT = this.playing) || void 0 === oT ? void 0 : oT.view) && void 0 !== TT ? TT : null
      }
      getHeldCoins() {
        var TT, oT;
        let IT = 0;
        for (const iT of this.kS) IT += iT.coins;
        return IT - (null !== (TT = null === (oT = this.playing) || void 0 === oT ? void 0 : oT.released) && void 0 !== TT ? TT : 0)
      }
      Jc(TT) {
        "dailyRewardClaimed" !== TT.kind ? (this.queue.push(TT), this.dD()) : this.kS.push({
          coins: TT.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      dD() {
        const TT = this.now();
        if (null === this.playing) return this.releaseUnshown(TT), void this.startNext(TT);
        const oT = this.playing,
          IT = TT - oT.startedAt,
          iT = oT.view.flyingCoins,
          zT = function(TT, oT) {
            let IT = 0;
            for (; IT < oT && tI(IT, oT) <= TT;) IT++;
            return IT
          }(IT, iT);
        if (zT !== oT.landed) {
          for (let TT = zT - oT.landed > 2 ? zT - 1 : oT.landed; TT < zT; TT++) this.onCoinLanded(TT, iT);
          oT.landed = zT, oT.released = Math.round(oT.view.coins * zT / iT), this.onHeldCoinsChanged()
        }
        for (; oT.itemsLanded < oT.view.items.length && 2e3 + 160 * oT.itemsLanded + 630 <= IT;) this.onItemLanded(oT.itemsLanded), oT.itemsLanded++;
        IT >= oT.view.durationMs && (this.finish(), this.startNext(TT))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.kS = [], this.XM(null)
      }
      startNext(TT) {
        if (0 === this.queue.length || this.isBusy()) return;
        const oT = this.queue.shift();
        this.token++;
        const IT = {
          token: this.token,
          day: oT.dailyRewardDay,
          coins: oT.dailyRewardCoins,
          items: oT.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: oT.dailyRewardDay === ET ? 24 : 14
        };
        this.playing = {
          view: IT,
          startedAt: TT,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.XM(IT), this.onStarted(IT)
      }
      finish() {
        this.kS.shift(), this.playing = null, this.holdQuestPopups(!1), this.XM(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(TT) {
        if (this.queue.length > 0 || 0 === this.kS.length) return;
        const oT = this.kS.length;
        this.kS = this.kS.filter((oT => TT - oT.receivedAt < 6e4)), this.kS.length !== oT && this.onHeldCoinsChanged()
      }
    }

    function sI(TT, oT) {
      return 450 + 715 * TT / (oT - 1)
    }

    function tI(TT, oT) {
      return sI(TT, oT) + 650
    }
    const GI = "skyblockMailboxView";
    class pI {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.XM = TT, this.isBusy = oT, this.onStarted = IT, this.now = iT, this.waiting = [], this.playing = null, this.token = 0, this.itemName = TT => TT
      }
      getSnapshot() {
        var TT, oT;
        return null !== (TT = null === (oT = this.playing) || void 0 === oT ? void 0 : oT.view) && void 0 !== TT ? TT : null
      }
      setItemName(TT) {
        this.itemName = TT
      }
      Jc(TT) {
        this.waiting.push(...TT.mailLetters), this.dD()
      }
      dD() {
        const TT = this.now();
        null !== this.playing && TT - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.XM(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(TT)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.XM(null)
      }
      start(TT) {
        const oT = this.waiting.slice(0, 3);
        this.token++;
        const IT = {
          token: this.token,
          letters: oT.map((TT => this.toView(TT))),
          more: this.waiting.length - oT.length,
          durationMs: 4500 + 700 * oT.length
        };
        this.waiting = [], this.playing = {
          view: IT,
          startedAt: TT
        }, this.XM(IT), this.onStarted(IT)
      }
      toView(TT) {
        return {
          coins: TT.mailCoins,
          items: TT.mailItems.map((TT => {
            var oT;
            return {
              itemName: TT.mailItemName,
              amount: TT.mailItemAmount,
              label: null !== (oT = TT.mailItemLabel) && void 0 !== oT ? oT : this.itemName(TT.mailItemName)
            }
          })),
          reasonKey: TT.mailReasonKey,
          reasonParams: TT.mailReasonParams
        }
      }
    }
    const bI = "skyblockQuestGraphView",
      yI = "skyblockDevQuestJump";

    function NI(TT) {
      if (0 === TT.length) return "";
      const oT = [`M ${TT[0].x} ${TT[0].y}`];
      for (let iT = 1; iT < TT.length - 1; iT++) {
        const IT = TT[iT + 1];
        oT.push(`Q ${TT[iT].x} ${TT[iT].y} ${(TT[iT].x+IT.x)/2} ${(TT[iT].y+IT.y)/2}`)
      }
      const IT = TT[TT.length - 1];
      return oT.push(`L ${IT.x} ${IT.y}`), oT.join(" ")
    }

    function PI(TT, oT) {
      return TT < oT ? `${TT}|${oT}` : `${oT}|${TT}`
    }
    class dI extends DT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(TT, IT, iT), this.translate = oT, this.requestJump = zT, this.requestArrive = kT, this.storage = WT, this.now = XT, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = TT => {
          TT !== this.hoveredId && (this.hoveredId = TT, this.emit())
        }, this.jump = TT => {
          this.close(), this.requestJump(TT)
        }
      }
      Jc(TT) {
        if (!this.Ec)
          if ("graph" !== TT.kind) {
            if ("jumping" === TT.kind) {
              const oT = {
                questId: TT.graphQuestId,
                variation: TT.graphVariation,
                completes: TT.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(yI, oT)
            }
          } else {
            const oT = ++this.graphCount;
            IT.e(112).then((() => IT(5927))).then((IT => {
              let {
                default: iT
              } = IT;
              this.Ec || oT !== this.graphCount || (this.layout = function(TT, oT, IT) {
                var iT, zT;
                const kT = new TT.graphlib.Graph;
                kT.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), kT.setDefaultEdgeLabel((() => ({})));
                const WT = new Set;
                for (const ST of oT) WT.add(ST.graphQuestId), kT.setNode(ST.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const XT = IT.filter((TT => WT.has(TT.graphFromId) && WT.has(TT.graphToId) && TT.graphFromId !== TT.graphToId)),
                  BT = new Map;
                for (const ST of [...XT].sort(((TT, oT) => Number("awaits" === TT.graphEdgeKind) - Number("awaits" === oT.graphEdgeKind)))) {
                  const TT = PI(ST.graphFromId, ST.graphToId);
                  BT.has(TT) || (BT.set(TT, ST), kT.setEdge(ST.graphFromId, ST.graphToId))
                }
                TT.layout(kT);
                const FT = kT.graph();
                return {
                  width: Math.ceil(null !== (iT = FT.width) && void 0 !== iT ? iT : 0),
                  height: Math.ceil(null !== (zT = FT.height) && void 0 !== zT ? zT : 0),
                  nodes: oT.map((TT => {
                    var oT, IT;
                    const iT = kT.node(TT.graphQuestId);
                    return {
                      node: TT,
                      left: (null !== (oT = iT.x) && void 0 !== oT ? oT : 0) - 95,
                      top: (null !== (IT = iT.y) && void 0 !== IT ? IT : 0) - 26
                    }
                  })),
                  edges: XT.map((TT => {
                    var oT;
                    const IT = BT.get(PI(TT.graphFromId, TT.graphToId)),
                      iT = null !== (oT = kT.edge(IT.graphFromId, IT.graphToId).points) && void 0 !== oT ? oT : [];
                    return {
                      edge: TT,
                      key: `${TT.graphFromId}|${TT.graphToId}|${TT.graphEdgeKind}`,
                      path: NI(IT.graphFromId === TT.graphFromId ? iT : [...iT].reverse())
                    }
                  })),
                  plans: new Map(oT.map((TT => [TT.graphQuestId, new Set([TT.graphQuestId, ...TT.graphPlanIds])])))
                }
              }(iT, TT.graphNodes, TT.graphEdges), this.show())
            })).catch((TT => {
              console.error("The quest graph could not be laid out", TT)
            }))
          }
      }
      resumeJump(TT) {
        const oT = this.storage.getItem(yI);
        this.storage.removeItem(yI), null === oT || oT.variation !== TT || this.now() - oT.departedAt > 6e4 || this.requestArrive(oT.questId, oT.completes)
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
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
        var TT, oT;
        return null !== (TT = null === this.hoveredId || null === (oT = this.layout) || void 0 === oT ? void 0 : oT.plans.get(this.hoveredId)) && void 0 !== TT ? TT : new Set
      }
      buildSnapshot() {
        const TT = this.layout;
        if (null === TT) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const oT = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: TT.width,
          height: TT.height,
          nodes: TT.nodes.map((TT => {
            let {
              node: IT,
              left: iT,
              top: zT
            } = TT;
            return {
              id: IT.graphQuestId,
              name: this.translate(IT.graphNameKey),
              detail: null === IT.graphGiverName ? IT.graphZoneId : `${IT.graphGiverName} \xb7 ${IT.graphZoneId}`,
              state: IT.graphState,
              left: iT,
              top: zT,
              inPlan: oT.has(IT.graphQuestId),
              hovered: IT.graphQuestId === this.hoveredId
            }
          })),
          edges: TT.edges.map((TT => {
            let {
              edge: IT,
              key: iT,
              path: zT
            } = TT;
            return {
              key: iT,
              kind: IT.graphEdgeKind,
              path: zT,
              inPlan: oT.has(IT.graphFromId) && oT.has(IT.graphToId)
            }
          })),
          planning: oT.size > 0
        }
      }
    }
    var VI = IT(36014);
    const Ti = 250,
      oi = 2150,
      Ii = -2.8,
      ii = 2.2,
      zi = -27,
      ki = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      Wi = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Xi = Math.round(50 + 1e3 * (Wi.delay + Wi.period / 2)),
      Bi = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Fi = Array.from({
        length: 26
      }, ((TT, oT) => {
        const IT = 2.39996 * oT,
          iT = .5 + .618034 * oT % 1 * .23,
          zT = oT % 3 !== 2;
        return {
          rune: zT ? Bi[7 * oT % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(IT)*iT).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(IT)*iT).toFixed(3)})`,
            "--spin": 40 * (oT % 5 - 2) + "deg",
            "--size": (zT ? 1 + oT % 4 * .2 : .3 + oT % 2 * .15) + "rem",
            "--duration": `${(1.8+7*oT%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*oT%3).toFixed(2)}s`
          }
        }
      }));

    function Si(TT, oT) {
      return Array.from({
        length: 30 + 3 * TT + (oT ? 10 : 0)
      }, ((TT, oT) => {
        const IT = oT < 4,
          iT = IT ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          zT = IT ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          kT = IT ? 2.2 : .6 + Math.random(),
          WT = IT ? .3 : Math.random() < .5 ? .16 : .24,
          XT = IT ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": iT,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${zT.toFixed(2)}rem`,
          "--length": `${kT.toFixed(2)}rem`,
          "--width": `${WT}rem`,
          "--duration": `${Math.round(XT)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Di(TT) {
      let {
        zeta: oT,
        period: IT
      } = TT;
      const iT = 2 * Math.PI / IT;
      return {
        w: iT,
        decay: oT * iT / Math.sqrt(1 - oT * oT)
      }
    }
    let Li = !1;

    function xi() {
      if (Li) return;
      Li = !0;
      const TT = document.createElement("style");
      TT.textContent = function() {
        const TT = Di(ki),
          oT = Di(Wi),
          IT = oT => Math.exp(-TT.decay * oT) * Math.sin(TT.w * oT),
          iT = IT(Math.atan(TT.w / TT.decay) / TT.w),
          zT = .25,
          kT = 2.15,
          WT = Math.round(215),
          XT = [];
        for (let BT = 0; BT <= WT; BT++) {
          const TT = BT / WT * kT;
          let FT = Math.sin(Math.min(TT, zT) / zT * Math.PI / 2) ** 2,
            ST = 0,
            DT = 1,
            LT = 1 - .2 * FT,
            xT = 1;
          if (TT >= zT) {
            const WT = TT - zT,
              XT = Math.max(0, WT - .05);
            FT = Math.exp(-XT / .05), ST = IT(XT + ki.lead * (1 - Math.exp(-XT / ki.rush))) / iT;
            const BT = XT - Wi.delay,
              cT = BT <= 0 ? 0 : 1 - Math.exp(-oT.decay * BT) * (Math.cos(oT.w * BT) + oT.decay / oT.w * Math.sin(oT.w * BT)),
              KT = Math.max(0, (TT - 1.77) / (kT - 1.77));
            DT = (1 + (Wi.to - 1) * cT) * (1 + .08 * KT), LT = 1.1 + 1.5 * Math.exp(-WT / .07) + .3 * Math.exp(-(((1e3 * WT - Xi) / 100) ** 2)) + .8 * KT, xT = 1 - KT ** 1.5
          }
          const cT = .15 * FT + Ii * ST,
            KT = -.1 * FT + ii * ST,
            MT = 3 * FT + zi * ST;
          XT.push(`${(BT/WT*100).toFixed(3)}% { opacity: ${xT.toFixed(3)}; transform: translate(${cT.toFixed(3)}rem, ${KT.toFixed(3)}rem) rotate(${MT.toFixed(2)}deg) scale(${DT.toFixed(3)}); filter: brightness(${LT.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${XT.join(" ")} }`
      }(), document.head.append(TT)
    }
    const ci = "skyblockForgeView",
      Ki = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Mi extends DT {
      constructor(TT, oT, IT, iT, zT) {
        super(TT, IT, iT), this.translate = oT, this.requestForge = zT, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (TT, oT) => {
          var IT, iT;
          null !== this.forging || (null !== (IT = this.owned[(0, VI.m)(oT, TT)]) && void 0 !== IT ? IT : 0) <= 0 || (this.selected[TT] = this.selected[TT] === oT ? null : oT, this.status = null, null === (iT = this.onPartSelected) || void 0 === iT || iT.call(this), this.emit())
        }, this.forge = TT => {
          var oT, IT;
          const iT = this.selectedParts();
          if (null === iT || this.isPending() || !this.open) return;
          const zT = (0, VI.j)(iT);
          if (null === zT || zT.coalCost > this.coal) return;
          const kT = this.preview(zT),
            WT = null !== (oT = null === (IT = this.onForgeStarted) || void 0 === IT ? void 0 : IT.call(this, kT.tier, kT.named, TT)) && void 0 !== oT ? oT : () => {};
          if (this.dropArrival(), TT) {
            const TT = {
              id: ++this.forgeId,
              preview: kT,
              timers: [],
              stopSounds: WT,
              landed: !1,
              reply: null
            };
            TT.timers.push(setTimeout((() => {
              TT.landed = !0, null !== TT.reply && (this.apply(TT.reply), TT.reply = null, this.emit())
            }), Ti), setTimeout((() => {
              this.finishForge(TT)
            }), oi)), this.forging = TT
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(iT)
        }, this.snapshot = this.buildSnapshot()
      }
      Jc(TT) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.forgeMessageKind) return this.dropForge(), this.apply(TT), this.status = null, void this.show();
        const oT = this.forging;
        if (null !== oT && null !== TT.forgeRefusalKey) this.dropForge();
        else if (null !== oT && !oT.landed) return void(oT.reply = TT);
        this.apply(TT), this.emit()
      }
      apply(TT) {
        if (this.owned = TT.forgeOwnedParts, this.coal = TT.forgeCoalOwned, this.keepSelectionOwned("open" === TT.forgeMessageKind), null !== TT.forgeForgedSwordId) {
          var oT;
          const IT = (0, VI.j)(TT.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (oT = null === IT || void 0 === IT ? void 0 : IT.displayName) && void 0 !== oT ? oT : ""
            }
          }
        } else null !== TT.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: TT.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(TT) {
        var oT;
        this.forging = null;
        const IT = this.selectedParts(),
          iT = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: TT.id,
          sameSword: null !== IT && (null === (oT = (0, VI.j)(IT)) || void 0 === oT ? void 0 : oT.displayName) === TT.preview.name,
          timer: iT
        }, this.emit()
      }
      dropForge() {
        const TT = this.forging;
        if (null !== TT) {
          this.forging = null;
          for (const oT of TT.timers) clearTimeout(oT);
          TT.stopSounds(), null !== TT.reply && this.apply(TT.reply)
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
        var TT, oT, IT;
        const iT = this.selectedParts(),
          zT = null === iT ? null : (0, VI.j)(iT),
          kT = null !== (TT = null === (oT = this.forging) || void 0 === oT ? void 0 : oT.preview) && void 0 !== TT ? TT : null === zT ? null : this.preview(zT);
        return {
          enabled: this.received,
          open: this.open,
          slots: VI.g.map((TT => ({
            kind: TT,
            label: this.translate(Ki[TT]),
            parts: this.partsFor(TT)
          }))),
          coalOwned: this.coal,
          preview: kT,
          unformedSword: VI.f[null !== (IT = this.selected.Blade) && void 0 !== IT ? IT : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((TT => TT > 0)),
          canForge: null !== kT && !kT.coalShort && !this.isPending(),
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
      preview(TT) {
        return {
          name: TT.displayName,
          lore: TT.lore,
          baseSword: TT.baseSword,
          enchantmentTier: TT.enchantmentTier,
          tier: Number(TT.enchantmentTier.slice(-1)),
          named: TT.named,
          stats: this.stats(TT),
          effects: TT.effects,
          coalCost: TT.coalCost,
          coalShort: null === this.forging && TT.coalCost > this.coal
        }
      }
      partsFor(TT) {
        const oT = [];
        for (const iT of VI.e) {
          var IT;
          const zT = (0, VI.m)(iT, TT),
            kT = null !== (IT = this.owned[zT]) && void 0 !== IT ? IT : 0;
          kT > 0 && oT.push({
            material: iT,
            itemName: zT,
            owned: kT,
            selected: this.selected[TT] === iT,
            placeholder: !1
          })
        }
        if (0 === oT.length) {
          const IT = VI.e[0];
          oT.push({
            material: IT,
            itemName: (0, VI.m)(IT, TT),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return oT
      }
      stats(TT) {
        const oT = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${TT.powerMultiplier.toFixed(2)}`,
          better: TT.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${TT.damageMultiplier.toFixed(2)}`,
          better: TT.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/TT.cooldownMultiplier).toFixed(2)}`,
          better: TT.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${TT.knockbackMultiplier.toFixed(2)}`,
          better: TT.knockbackMultiplier > 1
        }];
        return TT.reachBonus > 0 && oT.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${TT.reachBonus.toFixed(1)}`,
          better: !0
        }), TT.damageReduction > 0 && oT.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*TT.damageReduction)}%`,
          better: !0
        }), oT
      }
      selectedParts() {
        const {
          Blade: TT,
          Guard: oT,
          Handle: IT
        } = this.selected;
        return null === TT || null === oT || null === IT ? null : {
          blade: TT,
          guard: oT,
          handle: IT
        }
      }
      keepSelectionOwned(TT) {
        for (const IT of VI.g) {
          var oT;
          const iT = this.selected[IT];
          if (null !== iT && (null !== (oT = this.owned[(0, VI.m)(iT, IT)]) && void 0 !== oT ? oT : 0) > 0) continue;
          if (!TT) {
            this.selected[IT] = null;
            continue
          }
          const zT = [...VI.e].reverse().find((TT => {
            var oT;
            return (null !== (oT = this.owned[(0, VI.m)(TT, IT)]) && void 0 !== oT ? oT : 0) > 0
          }));
          this.selected[IT] = null !== zT && void 0 !== zT ? zT : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const ri = "skyblockSmugglerView",
      Ai = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class gi extends DT {
      constructor(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, IT, iT), this.translate = oT, this.requestBuy = zT, this.now = kT, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = TT => TT, this.onBought = null, this.buy = TT => {
          const oT = this.deals[TT];
          void 0 !== oT && !this.isPending() && this.open && !this.soldOut.has(TT) && this.canAfford(oT) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, TT))
        }, this.snapshot = this.buildSnapshot()
      }
      Jc(TT) {
        if (this.received = !0, this.day = TT.smugglerDay, this.deals = TT.smugglerDeals, this.rivets = TT.smugglerRivetsOwned, this.crests = TT.smugglerCrestsOwned, this.soldOut = new Set(TT.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + TT.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = TT.smugglerBoughtSlot, null !== TT.smugglerBoughtSlot) {
          var oT, IT;
          const iT = this.deals[TT.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === iT ? "" : this.dealName(iT),
              amount: String(null !== (oT = null === iT || void 0 === iT ? void 0 : iT.smugglerDealAmount) && void 0 !== oT ? oT : 0)
            }
          }, this.boughtCount++, null === (IT = this.onBought) || void 0 === IT || IT.call(this)
        } else null !== TT.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: TT.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, void 0 !== IT && (this.itemName = IT), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(TT) {
        if (null !== TT.smugglerDealUniqueName) return TT.smugglerDealUniqueName;
        const oT = Ai[TT.smugglerDealItem];
        return void 0 === oT ? this.itemName(TT.smugglerDealItem) : this.translate(oT)
      }
      canAfford(TT) {
        return TT.smugglerDealRivets <= this.rivets && TT.smugglerDealCrests <= this.crests
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
        const TT = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return TT <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : TT < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(TT)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(TT / 60)),
          minutes: String(TT % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((TT, oT) => ({
            slot: oT,
            itemName: TT.smugglerDealItem,
            displayName: this.dealName(TT),
            enchantmentTier: TT.smugglerDealEnchantmentTier,
            amount: TT.smugglerDealAmount,
            rivets: TT.smugglerDealRivets,
            crests: TT.smugglerDealCrests,
            affordable: this.canAfford(TT),
            soldOut: this.soldOut.has(oT),
            justBought: this.boughtSlot === oT
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
    const wi = "skyblockPassageView",
      mi = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function ei(TT, oT) {
      return TT(mi[oT])
    }

    function Ri(TT, oT, IT, iT) {
      const zT = Math.ceil((IT - iT) / 864e5),
        kT = ei(TT, oT);
      return zT > 1 ? TT("skyblockGame:passageNextDays", {
        phase: kT,
        days: String(zT)
      }) : TT("skyblockGame:passageNextSoon", {
        phase: kT
      })
    }
    class ui extends DT {
      constructor(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(TT, IT, iT), this.translate = oT, this.now = zT, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = TT => TT, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Jc(TT) {
        this.message = TT, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, void 0 !== IT && (this.itemName = IT), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(TT) {
        return {
          itemName: TT.passageFish,
          displayName: this.itemName(TT.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(TT.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const TT = this.message;
        return null === TT ? {
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
          phase: TT.passagePhase,
          phaseName: ei(this.translate, TT.passagePhase),
          visitors: TT.passageVisitors.map((TT => this.describe(TT))),
          resting: this.describe(TT.passageResting),
          nextPhase: TT.passageNextPhase,
          next: Ri(this.translate, TT.passageNextPhase, TT.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var vi = IT(37532);
    const Ei = "skyblockKeepersChairView";
    class fi extends DT {
      constructor(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new vi.e;
        super(TT, IT, iT), this.translate = oT, this.requestAim = zT, this.now = kT, this.pacer = WT, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = TT => TT, this.aim = TT => {
          !this.awaitingReply && this.open && this.atChair && TT !== this.favoured && (null === TT || this.islands.some((oT => oT.keepersChairIslandId === TT && oT.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== TT && void 0 !== TT ? TT : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = WT.subscribe((() => {
          this.emit()
        }))
      }
      Jc(TT) {
        var oT, IT;
        this.received = !0;
        const iT = this.favoured,
          zT = this.atChair;
        var kT;
        return this.islands = TT.keepersChairIslands, this.favoured = TT.keepersChairFavoured, this.passage = null !== (oT = TT.keepersChairPassage) && void 0 !== oT ? oT : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (IT = TT.keepersChairAtChair) || void 0 === IT || IT, "place" === TT.keepersChairMessageKind ? (!zT && this.atChair && "refused" === (null === (kT = this.status) || void 0 === kT ? void 0 : kT.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== TT.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: TT.keepersChairRefusalKey,
          island: null
        } : this.favoured !== iT && (this.status = null === this.favoured ? {
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
      receivePassage(TT) {
        this.received && (this.passage = TT, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, void 0 !== IT && (this.itemName = IT), this.emit()
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
      islandName(TT) {
        const oT = this.islands.find((oT => oT.keepersChairIslandId === TT));
        return void 0 === oT ? TT : this.translate(oT.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const TT = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          oT = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((TT => {
            const oT = TT.keepersChairFeaturedFish;
            return {
              id: TT.keepersChairIslandId,
              name: this.translate(TT.keepersChairIslandNameKey),
              relit: TT.keepersChairIslandRelit,
              featuredFish: null === oT ? null : {
                itemName: oT,
                displayName: this.itemName(oT)
              },
              favoured: TT.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === TT ? null : {
            tone: TT.tone,
            text: this.translate(TT.key, null === TT.island ? void 0 : {
              island: this.islandName(TT.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === oT ? null : {
            phase: oT.keepersChairPassagePhase,
            phaseName: ei(this.translate, oT.keepersChairPassagePhase),
            nextPhase: oT.keepersChairPassageNextPhase,
            next: Ri(this.translate, oT.keepersChairPassageNextPhase, oT.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Ci = "skyblockReachLogView",
      ji = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Ji = "Caught Fish",
      Ui = [1, 2, 4];

    function ai(TT, oT) {
      return TT.map((TT => ({
        ...TT,
        reachLogPageFish: TT.reachLogPageFish.map((TT => ({
          ...TT,
          reachLogFishFresh: oT(TT)
        })))
      })))
    }
    class Yi extends DT {
      constructor(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new vi.e;
        super(TT, IT, iT), this.translate = oT, this.requestOpen = zT, this.pacer = kT, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = TT => TT, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = TT => {
          this.pages.some((oT => oT.reachLogIslandId === TT)) && (this.selected = TT, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = kT.subscribe((() => {
          this.emit()
        }))
      }
      Jc(TT) {
        if (this.received = !0, "status" === TT.reachLogMessageKind) return !0 === TT.reachLogNews && this.markNews(), this.serverFresh = TT.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const oT = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== TT.reachLogMessageKind)
          if (this.pageViews = null, this.pages = ai(TT.reachLogPages, (TT => TT.reachLogFishFresh || this.heldFresh.has(TT.reachLogFishItem))), this.letGoShown = TT.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, oT) this.showPages();
          else {
            for (const TT of this.pages)
              for (const oT of TT.reachLogPageFish) oT.reachLogFishFresh && this.heldFresh.add(oT.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, this.pageViews = null, void 0 !== IT && (this.itemName = IT), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = ai(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var TT, oT, IT, iT;
        const zT = this.pages.find((TT => TT.reachLogPageFish.some((TT => TT.reachLogFishFresh))));
        if (void 0 !== zT) return zT.reachLogIslandId;
        if (null !== this.selected && this.pages.some((TT => TT.reachLogIslandId === this.selected))) return this.selected;
        return null !== (TT = null !== (oT = null === (IT = this.pages.filter((TT => TT.reachLogIslandAwake)).at(-1)) || void 0 === IT ? void 0 : IT.reachLogIslandId) && void 0 !== oT ? oT : null === (iT = this.pages[0]) || void 0 === iT ? void 0 : iT.reachLogIslandId) && void 0 !== TT ? TT : null
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
        return this.pages.map((TT => {
          var oT;
          return {
            id: TT.reachLogIslandId,
            name: this.translate(TT.reachLogIslandNameKey),
            awake: TT.reachLogIslandAwake,
            gold: TT.reachLogPageGold,
            caught: TT.reachLogPageFish.filter((TT => TT.reachLogFishCaught && !TT.reachLogFishVisitor)).length,
            total: TT.reachLogPageFish.filter((TT => !TT.reachLogFishVisitor)).length,
            fish: TT.reachLogPageFish.map((TT => {
              const oT = TT.reachLogFishBestKg;
              return {
                itemName: TT.reachLogFishItem,
                name: TT.reachLogFishCaught ? this.itemName(TT.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: TT.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / TT.reachLogFishChance))
                }),
                best: TT.reachLogFishCaught ? null === oT ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: oT.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: TT.reachLogFishMarks,
                ribbons: Ui.map((oT => 0 !== (TT.reachLogFishRibbons & oT))),
                glimmer: 0 !== (8 & TT.reachLogFishRibbons),
                halo: 0 !== (32 & TT.reachLogFishRibbons),
                fresh: TT.reachLogFishFresh,
                visitor: TT.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (oT = TT.reachLogPageReturner) && void 0 !== oT ? oT : null)
          }
        }))
      }
      buildReturner(TT) {
        return null === TT ? null : {
          itemName: TT.reachLogReturnerFishItem,
          line: this.translate(TT.reachLogReturnerLineKey, {
            name: this.translate(TT.reachLogReturnerNameKey),
            trinket: this.translate(TT.reachLogReturnerTrinketKey)
          }),
          back: TT.reachLogReturnerBack
        }
      }
      receivePassagePhase(TT) {
        null !== this.passagePhase && this.passagePhase !== TT && (this.pagesCurrent = !1), this.passagePhase = TT
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Qi = "skyblockLampLightView";
    class Oi {
      constructor(TT, oT, IT, iT) {
        this.XM = TT, this.translate = oT, this.requestCommand = IT, this.pacer = iT, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Ec = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = TT => {
          TT ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = TT => {
          this.send(`buy ${TT}`)
        }, this.socket = TT => {
          this.send(`socket ${null!==TT&&void 0!==TT?TT:UT}`)
        }, this.wearTint = TT => {
          this.send(`tint ${null!==TT&&void 0!==TT?TT:UT}`)
        }, this.setSituation = TT => {
          this.situation = TT, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = iT.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = iT.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Jc(TT) {
        if (this.message = TT, null !== TT.lampLightShop && (this.shop = TT.lampLightShop), "open" === TT.lampLightKind && (this.refusalKey = null), "reply" === TT.lampLightKind) {
          var oT;
          const zT = null !== (oT = TT.lampLightReplyTag) && void 0 !== oT ? oT : null,
            kT = null !== zT && zT === this.offTag;
          var IT, iT;
          if (kT ? this.settleOff() : null !== zT && zT !== this.awaitingTag || this.settleReply(), this.refusalKey = TT.lampLightRefusalKey, null !== TT.lampLightBought && !kT) this.sparkle = {
            id: TT.lampLightBought,
            count: (null !== (IT = null === (iT = this.sparkle) || void 0 === iT ? void 0 : iT.count) && void 0 !== IT ? IT : 0) + 1
          }
        }
        TT.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === TT.lampLightKind && (this.lastGained = TT.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(TT) {
        TT !== this.atChair && (this.atChair = TT, TT && (this.refusalKey = null), this.emit())
      }
      setTranslator(TT, oT) {
        this.translate = TT, this.locale = null !== oT && void 0 !== oT ? oT : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Ec = !0
      }
      send(TT) {
        var oT;
        if (null !== this.awaitingTag || "ready" !== (null === (oT = this.message) || void 0 === oT ? void 0 : oT.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const IT = this.nextTag();
        this.awaitingTag = IT, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${TT} ${IT}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const TT = this.nextTag();
        this.offTag = TT, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${TT}`)
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
        this.Ec || (this.snapshot = this.buildSnapshot(), this.XM(this.snapshot))
      }
      formatLight(TT) {
        return Math.floor(TT).toLocaleString(this.locale)
      }
      formatPercent(TT) {
        const oT = 100 * TT;
        return oT >= 10 ? Math.round(oT).toLocaleString(this.locale) : oT.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(TT, oT) {
        if ("bite" === TT) return this.translate("skyblockGame:lampLightBite", {
          seconds: (oT.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === TT) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(oT.lampLightRareChance)
        });
        if ("notice" === TT) return null === oT.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(oT.lampLightNoticeChance)
        });
        const IT = "meter" === TT ? oT.lampLightMeterCatches : oT.lampLightBloomCatches;
        return null === IT ? null : this.translate("meter" === TT ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(IT))
        })
      }
      oddsLines(TT, oT) {
        const IT = (TT, oT) => {
            var IT;
            return null !== (IT = {
              bite: oT.lampLightBiteMs,
              rare: oT.lampLightRareChance,
              meter: oT.lampLightMeterCatches,
              bloom: oT.lampLightBloomCatches,
              notice: oT.lampLightNoticeChance
            } [TT]) && void 0 !== IT ? IT : 0
          },
          iT = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          zT = [];
        for (const kT of ["bite", "rare", "meter", "bloom", "notice"]) {
          const WT = this.formatOdds(kT, TT),
            XT = this.formatOdds(kT, oT);
          if (null === WT || null === XT || "bite" !== kT && "rare" !== kT && WT === XT) continue;
          const BT = IT(kT, oT) - IT(kT, TT),
            FT = iT[kT] ? BT < 0 : BT > 0;
          zT.push({
            label: kT,
            before: WT,
            after: XT,
            tone: WT === XT ? "same" : FT ? "better" : "worse"
          })
        }
        return zT
      }
      charmView(TT, oT, IT) {
        const iT = TT.lampLightCharmId.charAt(0).toUpperCase() + TT.lampLightCharmId.slice(1),
          zT = "bloom" === this.situation;
        return {
          id: TT.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${iT}`),
          effect: this.translate(`skyblockGame:lampLightCharm${iT}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(TT.lampLightCharmCost)
          }),
          owned: TT.lampLightCharmOwned,
          affordable: IT >= TT.lampLightCharmCost,
          socketed: oT.lampLightSocketed === TT.lampLightCharmId,
          lines: this.oddsLines(zT ? oT.lampLightBareBloom : oT.lampLightBareOpen, zT ? TT.lampLightCharmBloom : TT.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var TT, oT, IT, iT;
        const zT = this.message,
          kT = "ready" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) ? this.shop : null,
          WT = null !== (TT = null === zT || void 0 === zT ? void 0 : zT.lampLightBalance) && void 0 !== TT ? TT : 0,
          XT = this.atChair,
          BT = "loading" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          FT = "ready" !== (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) || XT ? null !== (oT = this.refusalKey) && void 0 !== oT ? oT : BT : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== zT && "locked" !== zT.lampLightStatus,
          status: null !== (IT = null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) && void 0 !== IT ? IT : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(WT)
          }),
          releasing: null !== (iT = null === zT || void 0 === zT ? void 0 : zT.lampLightReleasing) && void 0 !== iT && iT,
          gained: null === zT || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) && XT && !this.isPending(),
          situation: this.situation,
          shop: null === kT ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: kT.lampLightOddsRod,
              island: this.translate(kT.lampLightIslandNameKey)
            }),
            heldRod: null !== kT.lampLightHeldRod,
            charms: kT.lampLightCharms.map((TT => this.charmView(TT, kT, WT))),
            tints: kT.lampLightTints.map((TT => {
              const oT = TT.lampLightTintId,
                [IT, iT, zT] = TT.lampLightTintColour;
              return {
                id: oT,
                name: this.translate(`skyblockGame:lampLightTint${oT.charAt(0).toUpperCase()}${oT.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(TT.lampLightTintCost)
                }),
                owned: TT.lampLightTintOwned,
                affordable: WT >= TT.lampLightTintCost,
                wearing: kT.lampLightTint === oT,
                colour: `rgb(${IT}, ${iT}, ${zT})`
              }
            })),
            wearingIslandColours: null === kT.lampLightTint
          },
          notice: null === FT ? null : this.translate(FT),
          sparkle: this.sparkle
        }
      }
    }
    const Hi = "skyblockMagmawardView";
    class ni {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.XM = TT, this.now = oT, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = qT.map((() => 0)), this.wornAt = qT.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Jc(TT) {
        var oT, IT;
        const iT = qT.map(((oT, IT) => !0 === TT.magmawardPiecesWorn[IT]));
        if (!iT.includes(!0)) return this.snapshot = null, void this.XM(null);
        const zT = this.now(),
          kT = this.snapshot;
        null === kT && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const WT = TT.magmawardFuelCarried,
          XT = !iT.includes(!1);
        let BT = null !== (oT = null === kT || void 0 === kT ? void 0 : kT.pulse) && void 0 !== oT ? oT : null,
          FT = null !== (IT = null === kT || void 0 === kT ? void 0 : kT.flare) && void 0 !== IT ? IT : null;
        TT.magmawardFuelBurned ? (BT = "burn", FT = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = zT, this.flareAt = zT) : null !== kT && WT > kT.fuel && (BT = "gain", this.pulseToken++, this.pulseAt = zT), XT && null !== kT && !kT.fullSet && (FT = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = zT, this.setLitAt = zT);
        const ST = qT.map(((TT, oT) => (iT[oT] && null !== kT && !kT.pieces[oT].worn && (this.wornTokens[oT]++, this.wornAt[oT] = zT), {
          itemName: TT,
          worn: iT[oT],
          wornToken: this.wornTokens[oT],
          justWorn: iT[oT] && this.isPlaying(this.wornAt[oT], zT)
        })));
        this.snapshot = {
          pieces: ST,
          wornCount: iT.filter(Boolean).length,
          fullSet: XT,
          fuel: WT,
          fuelState: WT <= 0 ? "empty" : WT <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, zT) ? BT : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, zT) ? FT : null,
          flareToken: this.flareToken,
          setLit: XT && this.isPlaying(this.setLitAt, zT),
          setLitToken: this.setLitToken
        }, this.XM(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.XM(null)
      }
      isPlaying(TT, oT) {
        return oT - TT < 1200
      }
    }
    const qi = "skyblockGlowtideView";
    class Zi {
      constructor(TT) {
        this.XM = TT, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = TT => {
          this.arrow = TT, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Jc(TT) {
        this.bloom = TT.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.XM(null))
      }
      afterRender(TT, oT) {
        const IT = this.bloom;
        if (null === IT || null === TT) return;
        const iT = IT.glowtideBloomX - TT[0],
          kT = IT.glowtideBloomZ - TT[2],
          WT = Math.hypot(iT, kT),
          XT = this.snapshot,
          BT = null !== XT && void 0 !== XT && XT.inRange ? 1 : 0,
          FT = WT <= 12.5 + BT && TT[1] - IT.glowtideBloomY <= 10 + BT;
        !FT || null !== XT && void 0 !== XT && XT.inRange || this.inRangeToken++;
        const ST = {
          colour: IT.glowtideBloomColour,
          inRange: FT,
          distance: Math.round(WT),
          inRangeToken: this.inRangeToken
        };
        (null === XT || ST.colour !== XT.colour || ST.inRange !== XT.inRange || !FT && ST.distance !== XT.distance) && (this.snapshot = ST, this.XM(ST));
        const DT = zT.e.computeShortestRotation(oT, (0, zT.wb)([iT, 0, kT]));
        null === this.arrow || Math.abs(DT - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${DT}rad)`, this.arrowTurn = DT)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.XM(null)
      }
    }
    const li = "skyblockGlowMeterView";
    class si {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.XM = TT, this.now = oT, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Jc(TT) {
        const oT = this.now(),
          {
            glowMeterFill: IT,
            glowMeterCapacity: iT
          } = TT,
          zT = IT >= iT,
          kT = this.snapshot;
        null !== kT && (zT && !kT.full && (this.fullToken++, this.fullAt = oT), kT.full && !zT ? (this.burstToken++, this.burstAt = oT) : IT > kT.fill && (this.gainToken++, this.gainAt = oT)), this.snapshot = {
          fill: IT,
          fD: iT,
          ratio: Math.min(1, Math.max(0, IT / iT)),
          full: zT,
          rares: TT.glowMeterRares,
          ready: zT && this.isPlaying(this.fullAt, oT),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, oT),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, oT),
          gainToken: this.gainToken
        }, this.XM(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.XM(null)
      }
      isPlaying(TT, oT) {
        return oT - TT < 2e3
      }
    }
    const ti = "skyblockHushWaitView";
    class Gi {
      constructor(TT) {
        this.XM = TT, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Jc(TT) {
        let {
          hushWaitMs: oT,
          hushWaitTotalMs: IT,
          hushWaitLines: iT
        } = TT;
        if (this.clearTimers(), this.token++, 0 === iT.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (oT <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: iT[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const zT = Math.max(null !== IT && void 0 !== IT ? IT : oT, oT),
          kT = zT - oT,
          WT = TT => zT * TT / iT.length,
          XT = TT => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: zT,
              elapsedMs: kT,
              line: iT[TT],
              lineIndex: TT
            })
          };
        let BT = 0;
        for (; BT + 1 < iT.length && WT(BT + 1) <= kT;) BT++;
        XT(BT);
        for (let FT = BT + 1; FT < iT.length; FT++) this.later(WT(FT) - kT, (() => {
          XT(FT)
        }));
        this.later(oT, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(TT) {
        this.snapshot = TT, this.XM(TT)
      }
      later(TT, oT) {
        this.timers.push(setTimeout(oT, TT))
      }
      clearTimers() {
        for (const TT of this.timers) clearTimeout(TT);
        this.timers = []
      }
    }
    const bi = "skyblockTideChartsView",
      yi = 36e5,
      Ni = 864e5;

    function Pi(TT, oT, IT) {
      const [iT, zT, kT, WT] = TT.tideChartArea, XT = Math.floor(oT), BT = Math.floor(IT);
      return XT >= iT && XT <= kT && BT >= zT && BT <= WT
    }

    function di(TT, oT, IT) {
      const [iT, zT, kT, WT] = TT.tideChartWater;
      return function(TT, oT, IT, iT, zT, kT) {
        const WT = 4 - ZT(Math.floor(zT) - (TT - IT), IT);
        return 5 * ZT(Math.floor(kT) - (oT - iT), iT) + WT
      }(iT, zT, kT, WT, oT, IT)
    }

    function Vi(TT, oT, IT) {
      const iT = TT.tideCharts;
      for (let zT = 0; zT < iT.length; zT++)
        if (Pi(iT[zT], oT, IT)) return iT[zT];
      return null
    }

    function Tz(TT, oT, IT) {
      const iT = Math.max(0, oT - IT);
      return iT > Ni ? TT("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(iT / Ni))
      }) : iT > yi ? TT("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(iT / yi))
      }) : TT("skyblockGame:tideChartsTurnSoon")
    }
    class oz extends DT {
      constructor(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(TT, IT, iT), this.translate = oT, this.now = zT, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.PL = TT => {
          this.picked = TT, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Jc(TT) {
        const oT = this.message;
        if (null !== oT)
          for (const iT of TT.tideCharts) {
            var IT;
            const TT = oT.tideCharts.find((TT => TT.tideChartIsland === iT.tideChartIsland)),
              zT = iT.tideChartLit & ~(null !== (IT = null === TT || void 0 === TT ? void 0 : TT.tideChartLit) && void 0 !== IT ? IT : 0);
            void 0 !== TT && 0 !== zT && (this.pulse = {
              island: iT.tideChartIsland,
              cells: zT,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = TT, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(TT, oT) {
        var IT;
        const iT = null === this.message || Number.isNaN(TT) ? null : Vi(this.message, TT, oT),
          zT = null !== (IT = null === iT || void 0 === iT ? void 0 : iT.tideChartIsland) && void 0 !== IT ? IT : null,
          kT = null === iT ? -1 : function(TT, oT, IT) {
            const [iT, zT, kT, WT] = TT.tideChartWater;
            return function(TT, oT, IT, iT, zT, kT, WT) {
              return ((zT - TT) / (IT + WT)) ** 2 + ((kT - oT) / (iT + WT)) ** 2 <= 1
            }(iT, zT, kT, WT, oT, IT, 2) ? di(TT, oT, IT) : -1
          }(iT, TT, oT);
        return (zT !== this.hereIsland || kT !== this.hereCell) && (this.hereIsland = zT, this.hereCell = kT, null !== zT && (this.lastIsland = zT), !0)
      }
      afterRender(TT) {
        if (null === this.message) return;
        this.lastX = null === TT ? Number.NaN : TT[0], this.lastZ = null === TT ? Number.NaN : TT[2];
        const oT = this.locate(this.lastX, this.lastZ),
          IT = this.expirePulses();
        (oT || IT || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const TT = this.now();
        return !(!this.open || TT - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = TT, Tz(this.translate, this.message.tideChartTurnsInMs, TT - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(TT, oT) {
        const IT = null === this.message ? null : Vi(this.message, TT, oT);
        if (null === IT) return;
        const iT = di(IT, TT, oT);
        0 === (IT.tideChartPreBlank & 1 << iT) && (this.cast = {
          island: IT.tideChartIsland,
          cell: iT,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const TT = this.now();
        let oT = !1;
        return 0 !== this.pulse.cells && TT - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, oT = !0), null !== this.cast && TT - this.cast.atMs >= 1500 && (this.cast = null, oT = !0), oT
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(TT, oT) {
        var IT;
        return null !== (IT = TT.tideCharts.find((TT => TT.tideChartIsland === oT))) && void 0 !== IT ? IT : null
      }
      describe(TT) {
        var oT, IT, iT;
        const zT = TT.tideChartIsland,
          kT = [];
        for (let xT = 0; xT < 25; xT++) {
          const oT = 1 << xT;
          0 !== (TT.tideChartLit & oT) ? kT.push("lit") : 0 !== (TT.tideChartClear & oT) ? kT.push("clear") : 0 !== (TT.tideChartPreBlank & oT) ? kT.push("shore") : kT.push("water")
        }
        const WT = function(TT) {
            let oT = 0;
            for (let IT = TT >>> 0; 0 !== IT; IT &= IT - 1) oT++;
            return oT
          }(TT.tideChartLit),
          XT = TT.tideChartInkCount,
          BT = this.translate(TT.tideChartIslandNameKey),
          FT = this.translate("skyblockGame:tideChartsLit", {
            lit: String(WT),
            ink: String(XT)
          }),
          ST = null === TT.tideChartPictureNameKey ? null : this.translate(TT.tideChartPictureNameKey),
          DT = this.hereIsland === zT && -1 !== this.hereCell ? this.hereCell : null,
          LT = [`${BT}: ${FT}.`];
        if (null !== ST && LT.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: ST
          })), null !== DT) {
          const TT = Math.floor(DT / 5) + 1,
            oT = DT % 5 + 1;
          LT.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(TT),
            column: String(oT)
          }))
        }
        return {
          island: zT,
          islandName: BT,
          cells: kT,
          hereCell: DT,
          lit: WT,
          ink: XT,
          litText: FT,
          pictureName: ST,
          gridLabel: LT.join(" "),
          pulseCells: this.pulse.island === zT ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (oT = this.cast) || void 0 === oT ? void 0 : oT.island) === zT ? this.cast.cell : null,
          castToken: null !== (IT = null === (iT = this.cast) || void 0 === iT ? void 0 : iT.token) && void 0 !== IT ? IT : 0
        }
      }
      buildSnapshot() {
        var TT, oT, IT;
        const iT = this.message;
        if (null === iT || 0 === iT.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const zT = this.findChart(iT, this.hereIsland),
          kT = null !== (TT = null !== (oT = null !== (IT = this.findChart(iT, this.open ? this.picked : null)) && void 0 !== IT ? IT : zT) && void 0 !== oT ? oT : this.findChart(iT, this.lastIsland)) && void 0 !== TT ? TT : iT.tideCharts[0],
          WT = null === zT ? null : this.describe(zT);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: WT,
          card: kT === zT ? WT : this.describe(kT),
          turnsText: Tz(this.translate, iT.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(iT.tideChartBookCount)
          }),
          tabs: iT.tideCharts.map((TT => ({
            island: TT.tideChartIsland,
            name: this.translate(TT.tideChartIslandNameKey),
            selected: TT.tideChartIsland === kT.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Iz = "skyblockRegularsView",
      iz = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      zz = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function kz(TT, oT) {
      return "given" === TT ? oT.given : "owed" === TT ? oT.owed : oT.goal
    }
    class Wz extends DT {
      constructor(TT, oT, IT, iT) {
        super(TT, IT, iT), this.translate = oT, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = TT => TT, this.openIsland = TT => {
          this.selected = TT, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = TT => {
          this.selected = TT, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Jc(TT) {
        this.message = TT, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const TT = this.openedFromReachLog;
        return this.openedFromReachLog = !1, TT
      }
      setTranslator(TT, oT, IT) {
        this.translate = TT, void 0 !== IT && (this.itemName = IT), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(TT, oT, IT) {
        return {
          text: this.translate(kz(TT, oT), IT),
          given: "given" === TT
        }
      }
      describeRegular(TT, oT) {
        const IT = this.translate,
          iT = null !== TT.regularKg,
          zT = TT.regularMeetings,
          kT = iT ? 0 === zT ? IT("skyblockGame:regularsNotMet") : 1 === zT ? IT("skyblockGame:regularsMeetingsOne") : IT("skyblockGame:regularsMeetings", {
            count: zT
          }) : "";
        return {
          id: TT.regularId,
          name: IT(TT.regularNameKey),
          line: IT(TT.regularLineKey),
          itemName: TT.regularFishItem,
          fishName: this.itemName(TT.regularFishItem),
          tagged: iT,
          size: null === TT.regularKg ? IT("skyblockGame:regularsNotTagged") : IT("skyblockGame:regularsSize", {
            kg: TT.regularKg.toFixed(1)
          }),
          meetings: kT,
          chance: IT("skyblockGame:regularsChance", {
            count: TT.regularOneInCasts
          }),
          resting: TT.regularRestingToday,
          gifts: [{
            text: IT("skyblockGame:regularsGiftFlare"),
            given: zT >= 3
          }, this.describeGift(TT.regularTintGift, iz, {
            tint: IT(TT.regularTintNameKey)
          })],
          history: [...TT.regularHistory].reverse().map((TT => {
            const iT = TT.regularMeetingKg.toFixed(1),
              zT = oT - TT.regularMeetingDay;
            return zT <= 0 ? IT("skyblockGame:regularsToday", {
              kg: iT
            }) : IT("skyblockGame:regularsDaysAgo", {
              days: zT,
              kg: iT
            })
          }))
        }
      }
      describeIsland(TT, oT) {
        return {
          id: TT.regularsIslandId,
          name: this.translate(TT.regularsIslandNameKey),
          charm: this.describeGift(TT.regularsCharmGift, zz, {
            charm: this.translate(TT.regularsCharmNameKey)
          }),
          regulars: TT.regularsList.map((TT => this.describeRegular(TT, oT)))
        }
      }
      buildSnapshot() {
        var TT, oT, IT, iT;
        const zT = this.message;
        if (null === zT) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const kT = zT.regularsIslands.map((TT => this.describeIsland(TT, zT.regularsToday))),
          WT = null !== (TT = null !== (oT = null === (IT = kT.find((TT => TT.id === this.selected))) || void 0 === IT ? void 0 : IT.id) && void 0 !== oT ? oT : null === (iT = kT[0]) || void 0 === iT ? void 0 : iT.id) && void 0 !== TT ? TT : "";
        return {
          enabled: !0,
          open: this.open,
          selected: WT,
          islands: kT
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Xz = "skyblockHiddenWatersView";
    class Bz {
      constructor(TT) {
        this.XM = TT, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Jc(TT) {
        this.snapshot = function(TT) {
          const [oT, IT] = TT.hiddenWatersMapSize, iT = (TT, iT) => ({
            left: 1 - TT / oT,
            top: iT / IT
          }), zT = new Map;
          for (const [WT, XT] of TT.hiddenWatersGlimpses) {
            var kT;
            const TT = null !== (kT = zT.get(WT)) && void 0 !== kT ? kT : [];
            TT.push(XT), zT.set(WT, TT)
          }
          return {
            found: TT.hiddenWatersFound,
            total: TT.hiddenWatersTotal,
            aspect: IT / oT,
            pins: TT.hiddenWatersPins.map((TT => {
              let [oT, IT] = TT;
              return iT(oT, IT)
            })),
            islands: TT.hiddenWatersIslands.map((TT => {
              let [zT, kT, WT, XT] = TT;
              const {
                left: BT,
                top: FT
              } = iT(WT + 1, kT);
              return {
                left: BT,
                top: FT,
                width: (WT + 1 - zT) / oT,
                height: (XT + 1 - kT) / IT
              }
            })),
            glimpses: zT
          }
        }(TT), this.XM(this.snapshot)
      }
    }
    const Fz = "skyblockDialogueView";
    class Sz extends DT {
      constructor(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, IT, iT), this.translate = oT, this.requestDialogue = zT, this.now = kT, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = TT => {
          this.selection = {
            kind: "quest",
            questId: TT
          }, this.request(), this.show()
        }, this.selectCharacter = TT => {
          this.selection = {
            kind: "character",
            npcId: TT
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Jc(TT) {
        this.received = !0, this.scripts = TT.questDialogueScripts, this.speakers = new Map(TT.questDialogueSpeakers.map((TT => [TT.dialogueSpeakerId, TT]))), this.emit()
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const TT = this.now();
        TT >= this.requestAvailableAt && (this.requestAvailableAt = TT + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var TT;
        const oT = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...oT,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const IT = this.selection;
        if ("quest" === IT.kind) {
          const TT = this.scripts.find((TT => TT.dialogueQuestId === IT.questId));
          return {
            ...oT,
            characters: [],
            questFocus: IT.questId,
            conversations: TT ? [this.conversation(TT)] : []
          }
        }
        const iT = [];
        for (let kT = this.scripts.length - 1; kT >= 0; kT--) {
          const TT = this.scripts[kT].dialogueLines;
          for (let oT = TT.length - 1; oT >= 0; oT--) iT.includes(TT[oT].dialogueSpeakerId) || iT.push(TT[oT].dialogueSpeakerId)
        }
        const zT = null !== IT.npcId && iT.includes(IT.npcId) ? IT.npcId : null !== (TT = iT[0]) && void 0 !== TT ? TT : null;
        return {
          ...oT,
          characters: iT.map((TT => {
            var oT, IT;
            return {
              id: TT,
              styling: null !== (oT = null === (IT = this.speakers.get(TT)) || void 0 === IT ? void 0 : IT.dialogueSpeakerStyling) && void 0 !== oT ? oT : TT,
              selected: TT === zT
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((TT => TT.dialogueLines.some((TT => TT.dialogueSpeakerId === zT)))).map((TT => this.conversation(TT))).reverse()
        }
      }
      conversation(TT) {
        let oT = null;
        return {
          questId: TT.dialogueQuestId,
          questName: this.translate(TT.dialogueQuestNameKey),
          completed: TT.dialogueQuestCompleted,
          lines: TT.dialogueLines.map(((TT, IT) => {
            var iT;
            const zT = TT.dialogueSpeakerId === oT || null === (iT = this.speakers.get(TT.dialogueSpeakerId)) || void 0 === iT ? void 0 : iT.dialogueSpeakerStyling;
            return oT = TT.dialogueSpeakerId, {
              key: IT,
              display: {
                line: {
                  translationKey: TT.dialogueLineKey,
                  params: this.params(TT.dialogueLineParams)
                },
                speakerName: zT,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(TT) {
        if (void 0 !== TT) return Object.fromEntries(Object.entries(TT).map((TT => {
          let [oT, IT] = TT;
          return [oT, "string" === typeof IT ? IT : this.translate(IT.translationKey)]
        })))
      }
    }
    var Dz = IT(596),
      Lz = IT(1236),
      xz = IT(90);
    const cz = "skyblockAutographsView";

    function Kz(TT) {
      const oT = Dz.o[TT];
      return {
        label: oT.chatTag.map((TT => TT.str)).join(""),
        icon: oT.icon,
        colour: oT.mainRGB
      }
    }
    class Mz extends DT {
      constructor(TT) {
        let oT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = oT, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Jc(TT) {
        this.signatures = TT.autographSignatures, TT.autographOpen ? this.show() : this.emit()
      }
      setTranslator(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = oT, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var TT;
        const oT = null !== (TT = this.signatures) && void 0 !== TT ? TT : [],
          IT = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          iT = [...oT].sort(((TT, oT) => Number(null !== oT.autographRank) - Number(null !== TT.autographRank) || oT.autographSignedAtMs - TT.autographSignedAtMs)).map((TT => ({
            key: `${TT.autographSignedAtMs}|${TT.autographSignerName}`,
            name: (0, Lz.b)(TT.autographSignerName, !xz.featureFlags.canSeeRealPlayerNames),
            rank: null === TT.autographRank ? null : Kz(TT.autographRank),
            signedOn: IT.format(TT.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: iT,
          total: iT.length,
          rankTotal: iT.filter((TT => null !== TT.rank)).length
        }
      }
    }
    const rz = "skyblockHudView",
      Az = () => {},
      gz = {
        getItem: () => null,
        setItem: Az,
        removeItem: Az
      };
    class hz {
      constructor(TT) {
        let {
          translate: oT,
          translateWithIcons: IT,
          setMenuOpen: iT = Az,
          dismissMenu: zT = () => {
            iT(!1)
          },
          publishSkills: kT = Az,
          publishQuests: WT = Az,
          publishQuestNotification: XT = Az,
          publishDungeons: BT = Az,
          publishCollections: FT = Az,
          publishMap: ST = Az,
          publishHud: DT = Az,
          publishPortalTransit: LT = Az,
          publishDailyReward: cT = Az,
          publishMailbox: KT = Az,
          publishQuestGraph: MT = Az,
          publishForge: rT = Az,
          publishSmuggler: AT = Az,
          publishKeepersChair: gT = Az,
          publishReachLog: hT = Az,
          publishLampLight: wT = Az,
          publishMagmaward: mT = Az,
          publishGlowtide: RT = Az,
          publishGlowMeter: uT = Az,
          publishHushWait: vT = Az,
          publishPassage: ET = Az,
          publishTideCharts: fT = Az,
          publishRegulars: CT = Az,
          publishHiddenWaters: jT = Az,
          publishDialogue: JT = Az,
          publishAutographs: UT = Az,
          isLoadingScreenUp: aT = () => !1,
          onDailyRewardCoinLanded: YT = Az,
          onDailyRewardStarted: QT = Az,
          onDailyRewardFinished: OT = Az,
          onDailyRewardItemLanded: HT = Az,
          onMailboxStarted: nT = Az,
          journeyStorage: qT = gz,
          requestTracking: ZT = Az,
          requestTravel: lT = Az,
          requestDungeonEnter: sT = Az,
          requestQuestJump: tT = Az,
          requestQuestArrive: GT = Az,
          requestForge: pT = Az,
          requestSmuggle: bT = Az,
          requestKeepersChairAim: yT = Az,
          requestReachLogOpen: NT = Az,
          requestLampLight: PT = Az,
          requestDialogue: dT = Az
        } = TT;
        this.navigation = void 0, this.map = void 0, this.compass = new eT, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new vi.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = TT => TT, this.close = () => {
          for (const TT of this.panels) TT.close()
        }, this.setMenuOpen = iT, this.publishHud = DT, this.portalTransit = new nI(LT, qT), this.magmaward = new ni(mT), this.glowtide = new Zi(RT), this.glowMeter = new si(uT), this.hushWait = new Gi(vT), this.dailyReward = new lI(cT, (() => aT() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (TT => {
          this.quests.setNotificationsHeld(TT)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), YT, QT, OT, HT);
        const VT = TT => {
          this.panels.some((TT => TT.isOpen())) || (TT ? zT() : this.setMenuOpen(!1))
        };
        this.skills = new WI(kT, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), oT, void 0, void 0, VT), this.quests = new DI(WT, ZT, oT, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, VT, XT), this.dungeons = new cI(BT, oT, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, VT, sT), this.collections = new QI(FT, oT, (() => {
          this.beforePanelOpen(this.collections)
        }), VT), this.map = new xT(ST, lT, oT, (() => {
          this.beforePanelOpen(this.map)
        }), VT), this.questGraph = new dI(MT, oT, (() => {
          this.beforePanelOpen(this.questGraph)
        }), VT, tT, GT, qT), this.forge = new Mi(rT, oT, (() => {
          this.beforePanelOpen(this.forge)
        }), VT, pT), this.smuggler = new gi(AT, oT, (() => {
          this.beforePanelOpen(this.smuggler)
        }), VT, bT), this.lampLight = new Oi(wT, oT, PT, this.commandPacer), this.keepersChair = new fi(gT, oT, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (TT => {
          this.lampLight.onChairClosed(), VT(TT)
        }), yT, Date.now, this.commandPacer), this.reachLog = new Yi(hT, oT, (() => {
          this.beforePanelOpen(this.reachLog)
        }), VT, NT, this.commandPacer), this.passage = new ui(ET, oT, (() => {
          this.beforePanelOpen(this.passage)
        }), VT), this.tideCharts = new oz(fT, oT, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), VT), this.regulars = new Wz(CT, oT, (() => {
          this.beforePanelOpen(this.regulars)
        }), (TT => {
          this.regulars.takeReturnToReachLog() && !TT && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), VT(TT)
        })), this.hiddenWaters = new Bz(jT), this.dialogue = new Sz(JT, oT, (() => {
          this.beforePanelOpen(this.dialogue)
        }), VT, dT), this.autographs = new Mz(UT, (() => {
          this.beforePanelOpen(this.autographs)
        }), VT), this.mailbox = new pI(KT, (() => aT() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), nT), this.quests.translateWithIcons = null !== IT && void 0 !== IT ? IT : null, this.skills.onLevelUp = TT => {
          this.quests.notify(TT)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new zI(this.map, this.quests, this.compass, oT)
      }
      getHudSnapshot() {
        const TT = this.hudSnapshot,
          oT = this.dailyReward.getHeldCoins();
        return null === TT || oT <= 0 || !("hudPurseCoins" in TT) ? TT : {
          ...TT,
          hudPurseCoins: Math.max(0, TT.hudPurseCoins - oT)
        }
      }
      receiveHud(TT) {
        this.hudSnapshot = TT, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(TT) {
        this.setMenuOpen(!0);
        const oT = TT === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = TT;
        for (const IT of this.panels) IT === TT || oT && IT === this.reachLog || IT.close();
        this.openingPanel = null
      }
      setTranslator(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oT => this.resolveItemName(oT, TT);
        this.quests.translateWithIcons = null !== IT && void 0 !== IT ? IT : null, this.navigation.setTranslator(TT, oT), this.lampLight.setTranslator(TT, oT), this.mailbox.setItemName(iT);
        for (const zT of this.panels) zT.setTranslator(TT, oT, iT)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const TT of this.panels) TT.dispose()
      }
    }
    var wz = IT(1042),
      mz = IT.n(wz),
      ez = IT(12),
      Rz = IT(35594),
      uz = IT(2961),
      vz = IT(1747),
      Ez = IT(1729),
      fz = IT(8766),
      Cz = IT(1171),
      jz = IT(1403),
      Jz = IT(1083);

    function Uz(TT) {
      let {
        controller: oT,
        minimap: IT,
        children: iT
      } = TT;
      const kT = (0, jz.i)(rz, oT.getHudSnapshot()),
        [WT, XT] = (0, uT.useState)(oT.skills.getSnapshot().overallLevel);
      (0, jz.g)(kI, (TT => {
        XT(TT.overallLevel)
      }));
      const BT = (0, uT.useRef)(null);
      (0, jz.g)(ZI, (TT => {
        ! function(TT, oT) {
          if (null === TT || "function" !== typeof TT.animate) return;
          const IT = oT ? 1.35 : 1.15;
          TT.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${IT})`
          }, {
            transform: "scale(1)"
          }], {
            duration: oT ? 320 : 160,
            easing: "ease-out"
          }), TT.classList.toggle("Receiving", !oT), oT && (TT.classList.remove("Shine"), TT.offsetWidth, TT.classList.add("Shine"))
        }(BT.current, TT)
      }));
      const {
        t: FT
      } = (0, Cz.t)(), {
        isTouchScreen: ST
      } = (0, ez.k)(["isTouchScreen"]), [DT, LT] = (0, uT.useState)(null);
      return (0, uz.f)(DT, ".SkyblockRightHud"), null !== kT || IT ? (0, Jz.jsx)(Rz.e, {
        placement: "topRight",
        children: (0, Jz.jsxs)("div", {
          className: mz()("SkyblockRightHud", {
            TouchScreen: ST
          }),
          children: [IT, null !== kT && (0, Jz.jsxs)("div", {
            ref: LT,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in kT ? (0, Jz.jsx)("div", {
              className: "SkyblockHudHelp",
              children: kT.hudHelpText
            }) : (0, Jz.jsxs)(Jz.Fragment, {
              children: [(0, Jz.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Jz.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Jz.jsx)("strong", {
                    style: {
                      color: zT.L.cyanUiText
                    },
                    children: FT(kT.hudZoneNameKey)
                  }), null !== WT && (0, Jz.jsx)("span", {
                    style: {
                      color: zT.L.goldUiText
                    },
                    children: FT("skyblockGame:level", {
                      level: (0, fz.d)(WT)
                    })
                  })]
                }), (0, Jz.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: BT,
                  children: [(0, Jz.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Jz.jsx)(vz.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, fz.d)(kT.hudPurseCoins)]
                })]
              }), kT.hudClockText.length > 0 && (0, Jz.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Jz.jsx)(Ez.c, {
                  text: kT.hudClockText
                })
              })]
            }), iT, "hudZoneNameKey" in kT && (0, Jz.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function az(TT) {
      let {
        icon: oT
      } = TT;
      const IT = (0, uT.useCallback)((TT => {
        null === TT || void 0 === TT || TT.replaceChildren(to(oT))
      }), [oT]);
      return (0, Jz.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: IT
      })
    }

    function Yz(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)();
      return (0, Jz.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: oT.display.mountPlayer,
        title: IT("skyblockGame:mapYouAreHere"),
        children: (0, Jz.jsx)(az, {
          icon: "player"
        })
      })
    }
    const Qz = IT(37535),
      Oz = Object.fromEntries(Qz.keys().map((TT => [TT.replace(/^\.\/(.*)\.png$/, "$1"), Qz(TT)])));

    function Hz(TT, oT) {
      var IT;
      return null !== (IT = Oz[TT]) && void 0 !== IT ? IT : Oz[oT]
    }

    function nz(TT) {
      let {
        imageKey: oT,
        fallbackImageKey: IT,
        geometryKey: iT,
        alt: zT,
        className: kT
      } = TT;
      const [WT, XT] = (0, uT.useState)((() => function(TT, oT) {
        return [{
          id: 0,
          imageKey: TT,
          geometryKey: oT,
          phase: "shown"
        }]
      }(oT, iT))), BT = function(TT, oT, IT) {
        const iT = TT[TT.length - 1];
        if (iT.imageKey === oT && iT.geometryKey === IT) return TT;
        const zT = {
          id: iT.id + 1,
          imageKey: oT,
          geometryKey: IT,
          phase: "entering"
        };
        return iT.geometryKey === IT ? [{
          ...iT,
          phase: "leaving"
        }, zT] : [zT]
      }(WT, oT, iT);
      return BT !== WT && XT(BT), (0, Jz.jsx)(Jz.Fragment, {
        children: BT.map((TT => (0, Jz.jsx)("img", {
          className: mz()("SkyblockMapTerrainImage", kT, {
            Entering: "entering" === TT.phase,
            Leaving: "leaving" === TT.phase
          }),
          src: Hz(TT.imageKey, IT),
          alt: "leaving" === TT.phase ? "" : zT,
          onAnimationEnd: () => {
            XT((oT => function(TT, oT) {
              return TT.flatMap((TT => TT.id !== oT ? [TT] : "leaving" === TT.phase ? [] : [{
                ...TT,
                phase: "shown"
              }]))
            }(oT, TT.id)))
          }
        }, TT.id)))
      })
    }
    var qz = IT(4050),
      Zz = IT(1408);

    function lz(TT) {
      if ("Tab" !== TT.key) return;
      const oT = Array.from(TT.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        IT = oT.indexOf(document.activeElement);
      var iT;
      if (TT.shiftKey && IT <= 0) TT.preventDefault(), null === (iT = oT.at(-1)) || void 0 === iT || iT.focus();
      else if (!TT.shiftKey && (-1 === IT || IT === oT.length - 1)) {
        var zT;
        TT.preventDefault(), null === (zT = oT[0]) || void 0 === zT || zT.focus()
      }
    }

    function sz() {
      const TT = (0, uT.useRef)(null);
      return (0, uT.useCallback)((oT => {
        var IT;
        oT ? (TT.current = document.activeElement, oT.focus()) : null === (IT = TT.current) || void 0 === IT || IT.focus()
      }), [])
    }

    function tz(TT) {
      let {
        percent: oT,
        label: IT,
        levelUpToken: iT,
        colour: zT
      } = TT;
      return (0, Jz.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": IT,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": oT,
        "aria-valuetext": IT,
        children: [(0, Jz.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${oT/100})`
          }
        }), null !== iT && void 0 !== iT && (0, Jz.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": zT
          }
        }, iT)]
      })
    }

    function Gz(TT) {
      let {
        mount: oT
      } = TT;
      return (0, Jz.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: oT,
        hidden: !0,
        children: (0, Jz.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Jz.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Jz.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function pz(TT, oT, IT, iT) {
      (0, uT.useLayoutEffect)((() => {
        const zT = TT.current;
        if (!IT || null === oT || void 0 === oT || !oT.local || !zT) return;
        const kT = Array.from(zT.querySelectorAll(".SkyblockMapNode")),
          WT = [...oT.points, ...oT.portals],
          XT = () => {
            const TT = zT.clientWidth,
              IT = zT.clientHeight,
              XT = kT.map(((zT, kT) => {
                const XT = WT[kT];
                return {
                  id: XT.id,
                  portal: kT >= oT.points.length,
                  x: XT.position[0] * TT / 100,
                  y: XT.position[1] * IT / 100,
                  width: zT.offsetWidth / iT,
                  height: zT.offsetHeight / iT
                }
              })),
              BT = new Map(WT.map(((TT, oT) => [TT.id, kT[oT]])));
            for (const oT of function(TT, oT, IT) {
                const iT = [],
                  zT = [...TT].sort(((TT, oT) => Number(oT.portal) - Number(TT.portal) || TT.id.localeCompare(oT.id)));
                for (const kT of zT) {
                  const TT = TT => Math.max(kT.width / 2, Math.min(oT - kT.width / 2, TT)),
                    zT = TT => Math.max(kT.height / 2, Math.min(IT - kT.height / 2, TT)),
                    WT = [TT(kT.x)],
                    XT = [zT(kT.y)];
                  for (const oT of iT) WT.push(TT(oT.x - (oT.width + kT.width) / 2 - 4), TT(oT.x + (oT.width + kT.width) / 2 + 4)), XT.push(zT(oT.y - (oT.height + kT.height) / 2 - 4), zT(oT.y + (oT.height + kT.height) / 2 + 4));
                  let BT = {
                      ...kT,
                      x: WT[0],
                      y: XT[0]
                    },
                    FT = 1 / 0,
                    ST = 1 / 0;
                  for (const oT of new Set(WT))
                    for (const TT of new Set(XT)) {
                      let IT = 0;
                      for (const WT of iT) IT += Math.max(0, (kT.width + WT.width) / 2 + 4 - Math.abs(oT - WT.x)) * Math.max(0, (kT.height + WT.height) / 2 + 4 - Math.abs(TT - WT.y));
                      const zT = (oT - kT.x) ** 2 + (TT - kT.y) ** 2;
                      (IT < FT || IT === FT && zT < ST) && (BT = {
                        ...kT,
                        x: oT,
                        y: TT
                      }, FT = IT, ST = zT)
                    }
                  iT.push(BT)
                }
                return iT
              }(XT, TT, IT)) {
              const TT = BT.get(oT.id);
              TT.style.left = `${oT.x}px`, TT.style.top = `${oT.y}px`
            }
          };
        XT();
        const BT = new ResizeObserver(XT);
        BT.observe(zT);
        for (const TT of kT) BT.observe(TT);
        return () => {
          BT.disconnect()
        }
      }), [TT, oT, IT, iT])
    }
    const bz = {
        zoom: 1,
        x: 0,
        y: 0
      },
      yz = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Nz(TT, oT, IT) {
      return Math.min(IT, Math.max(oT, TT))
    }

    function Pz(TT, oT, IT) {
      const iT = Math.min(1, IT * oT / TT),
        zT = Math.min(1, TT / (IT * oT));
      return {
        x0: (1 - iT) / 2,
        y0: (1 - zT) / 2,
        x1: (1 + iT) / 2,
        y1: (1 + zT) / 2
      }
    }

    function dz(TT, oT, IT, iT) {
      const zT = oT * (iT - IT);
      if (zT <= 1) return .5 - oT * (IT + iT) / 2;
      const kT = .45 * Math.min(1, zT - 1);
      return Nz(TT, 1 - oT * iT - kT, kT - oT * IT)
    }

    function Vz(TT, oT) {
      const IT = Nz(TT.zoom, 1, 12);
      return {
        zoom: IT,
        x: dz(TT.x, IT, oT.x0, oT.x1),
        y: dz(TT.y, IT, oT.y0, oT.y1)
      }
    }

    function Tk(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yz;
      const kT = Nz(TT.zoom * oT, 1, 12),
        WT = kT / TT.zoom;
      return Vz({
        zoom: kT,
        x: IT - (IT - TT.x) * WT,
        y: iT - (iT - TT.y) * WT
      }, zT)
    }

    function Ik(TT, oT, IT, iT) {
      const [zT, kT] = (0, uT.useState)(bz);
      (0, uT.useEffect)((() => {
        kT(bz)
      }), [IT]), (0, uT.useEffect)((() => {
        const IT = TT.current;
        if (!oT || !IT) return;
        const zT = () => Pz(IT.clientWidth, IT.clientHeight, iT),
          WT = TT => {
            const oT = IT.getBoundingClientRect();
            return {
              x: (TT.clientX - oT.left) / oT.width,
              y: (TT.clientY - oT.top) / oT.height
            }
          },
          XT = new Map;
        let BT = {
            x: 0,
            y: 0
          },
          FT = !1,
          ST = 0;
        const DT = TT => {
            TT.preventDefault();
            const oT = TT.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * TT.deltaY : TT.deltaY,
              IT = WT(TT);
            kT((TT => Tk(TT, Math.exp(.0015 * -oT), IT.x, IT.y, zT())))
          },
          LT = TT => {
            "mouse" === TT.pointerType && 0 !== TT.button || (XT.set(TT.pointerId, WT(TT)), 1 === XT.size && (BT = {
              x: TT.clientX,
              y: TT.clientY
            }, FT = !1), ST = 0)
          },
          xT = TT => {
            const oT = XT.get(TT.pointerId);
            if (!oT) return;
            const iT = WT(TT);
            if (XT.set(TT.pointerId, iT), 2 === XT.size) {
              const [TT, oT] = [...XT.values()], IT = Math.hypot(TT.x - oT.x, TT.y - oT.y);
              if (ST > 0) {
                const iT = IT / ST;
                kT((IT => Tk(IT, iT, (TT.x + oT.x) / 2, (TT.y + oT.y) / 2, zT())))
              }
              return ST = IT, void(FT = !0)
            }!FT && Math.hypot(TT.clientX - BT.x, TT.clientY - BT.y) < 4 || (FT || (FT = !0, IT.setPointerCapture(TT.pointerId)), kT((TT => function(TT, oT, IT) {
              let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yz;
              return Vz({
                zoom: TT.zoom,
                x: TT.x + oT,
                y: TT.y + IT
              }, iT)
            }(TT, iT.x - oT.x, iT.y - oT.y, zT()))))
          },
          cT = TT => {
            XT.delete(TT.pointerId), ST = 0
          },
          KT = TT => {
            FT && (TT.stopPropagation(), TT.preventDefault(), FT = !1)
          },
          MT = new ResizeObserver((() => {
            kT((TT => Vz(TT, zT())))
          }));
        return MT.observe(IT), IT.addEventListener("wheel", DT, {
          passive: !1
        }), IT.addEventListener("pointerdown", LT), IT.addEventListener("pointermove", xT), IT.addEventListener("pointerup", cT), IT.addEventListener("pointercancel", cT), IT.addEventListener("click", KT, !0), () => {
          MT.disconnect(), IT.removeEventListener("wheel", DT), IT.removeEventListener("pointerdown", LT), IT.removeEventListener("pointermove", xT), IT.removeEventListener("pointerup", cT), IT.removeEventListener("pointercancel", cT), IT.removeEventListener("click", KT, !0)
        }
      }), [TT, oT, IT, iT]);
      return {
        view: zT,
        zoomBy: oT => {
          const IT = TT.current;
          IT && kT((TT => Tk(TT, oT, .5, .5, Pz(IT.clientWidth, IT.clientHeight, iT))))
        }
      }
    }

    function ik(TT) {
      var oT, IT, iT, zT;
      let {
        controller: kT,
        navigation: WT
      } = TT;
      const XT = (0, jz.i)(LT, kT.getSnapshot()),
        {
          t: BT
        } = (0, Cz.t)(),
        FT = sz(),
        ST = XT.presentation,
        DT = (0, uT.useRef)(null),
        xT = (0, uT.useRef)(null),
        cT = Boolean(XT.open && (null === ST || void 0 === ST ? void 0 : ST.local) && ST.background),
        KT = Ik(DT, cT, `${XT.open}|${XT.tab}|${null===ST||void 0===ST||null===(oT=ST.background)||void 0===oT?void 0:oT.geometryKey}`, null !== (IT = null === ST || void 0 === ST || null === (iT = ST.background) || void 0 === iT ? void 0 : iT.ratio) && void 0 !== IT ? IT : 2);
      if (pz(xT, ST, XT.open, KT.view.zoom), !ST || !XT.open) return null;
      const MT = ST.local ? ST.background : null,
        rT = {
          "--map-ratio": String(null !== (zT = null === MT || void 0 === MT ? void 0 : MT.ratio) && void 0 !== zT ? zT : 2),
          backgroundColor: null === MT || void 0 === MT ? void 0 : MT.colour
        },
        AT = {
          "--map-zoom": String(KT.view.zoom),
          transform: `translate(${100*KT.view.x}%, ${100*KT.view.y}%) scale(${KT.view.zoom})`
        };
      return (0, Jz.jsx)(qz.e, {
        show: XT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: FT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockMapTitle",
                children: BT("skyblockGame:map")
              }), ST.minimap && (0, Jz.jsx)("p", {
                children: ST.minimap.caption
              })]
            }), (0, Jz.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((TT => (0, Jz.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": TT === XT.tab ? "true" : void 0,
                className: mz()({
                  Selected: TT === XT.tab
                }),
                "aria-pressed": TT === XT.tab,
                onClick: () => {
                  kT.selectTab(TT)
                },
                children: BT("local" === TT ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, TT)))
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: kT.dismiss
            })]
          }), (0, Jz.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Jz.jsxs)("div", {
              ref: DT,
              className: mz()("SkyblockMapCanvas", {
                Local: ST.local,
                Overview: !ST.local,
                Zoomed: KT.view.zoom > 1
              }),
              style: rT,
              children: [(0, Jz.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: cT ? AT : void 0,
                children: (0, Jz.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: xT,
                  children: [MT && (0, Jz.jsx)(nz, {
                    className: "SkyblockMapTerrain",
                    imageKey: MT.imageKey,
                    fallbackImageKey: MT.fallbackImageKey,
                    geometryKey: MT.geometryKey,
                    alt: MT.label
                  }), ST.local && (0, Jz.jsx)(Gz, {
                    mount: WT.display.mountMapSearchArea
                  }), !ST.local && (0, Jz.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: ST.connections.map((TT => (0, Jz.jsx)("line", {
                      className: mz()({
                        Explored: TT.explored
                      }),
                      x1: TT.start[0],
                      y1: TT.start[1],
                      x2: TT.end[0],
                      y2: TT.end[1]
                    }, TT.id)))
                  }), ST.points.map((TT => {
                    const oT = !ST.local && TT.thumbnail ? Oz[TT.thumbnail] : void 0;
                    return (0, Jz.jsxs)("div", {
                      className: mz()("SkyblockMapNode", {
                        Current: TT.current
                      }),
                      style: {
                        left: `${TT.position[0]}%`,
                        top: `${TT.position[1]}%`
                      },
                      children: [(0, Jz.jsxs)(Zz.e, {
                        className: mz()("SkyblockMapPin", {
                          Unknown: !TT.visited,
                          Current: TT.current
                        }),
                        disabled: XT.pending,
                        onClick: () => {
                          kT.travel(TT.travelKind, TT.travelId)
                        },
                        children: [oT && (0, Jz.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: oT,
                          alt: ""
                        }), !oT && (0, Jz.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Jz.jsx)(az, {
                            icon: TT.icon
                          })
                        }), (0, Jz.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: TT.name
                        })]
                      }), TT.current && (0, Jz.jsx)("span", {
                        className: mz()("SkyblockMapHereBadge", {
                          Above: TT.position[1] > 50
                        }),
                        children: BT("skyblockGame:mapYouAreHere")
                      })]
                    }, TT.id)
                  })), ST.portals.map((TT => (0, Jz.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${TT.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${TT.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Jz.jsxs)(Zz.e, {
                      className: "SkyblockMapPin",
                      disabled: XT.pending,
                      onClick: () => {
                        kT.travel(TT.travelKind, TT.travelId)
                      },
                      children: [(0, Jz.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: TT.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Jz.jsx)(az, {
                          icon: TT.icon
                        })
                      }), (0, Jz.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: TT.name
                      })]
                    })
                  }, TT.id))), ST.local && (0, Jz.jsx)(Yz, {
                    controller: WT
                  })]
                })
              }), cT && (0, Jz.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Jz.jsx)("button", {
                  type: "button",
                  "aria-label": BT("skyblockGame:mapZoomIn"),
                  disabled: KT.view.zoom >= 12,
                  onClick: () => {
                    KT.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Jz.jsx)("button", {
                  type: "button",
                  "aria-label": BT("skyblockGame:mapZoomOut"),
                  disabled: KT.view.zoom <= 1,
                  onClick: () => {
                    KT.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Jz.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: XT.feedback
              })]
            })
          }), (0, Jz.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [ST.progress && (0, Jz.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Jz.jsx)("span", {
                children: ST.progress
              }), (0, Jz.jsx)(tz, {
                percent: ST.percent,
                label: ST.progress
              })]
            }), ST.noLandmarks && (0, Jz.jsx)("span", {
              children: BT("skyblockGame:mapNoLandmarks")
            }), ST.canTravel && (0, Jz.jsx)("span", {
              className: "SkyblockMapHint",
              children: BT("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function zk(TT) {
      let {
        view: oT,
        controller: IT,
        navigation: iT
      } = TT;
      const {
        t: zT
      } = (0, Cz.t)(), {
        isTouchScreen: kT
      } = (0, ez.k)(["isTouchScreen"]);
      return (0, Jz.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": zT("skyblockGame:mapLocal"),
        children: [kT && (0, Jz.jsx)(Zz.e, {
          className: "SkyblockMinimapOpen",
          onClick: IT.showLocal,
          children: zT("skyblockGame:map")
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: oT.colour
          },
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: iT.display.mountTerrain,
            style: {
              width: oT.width,
              height: oT.height
            },
            children: [(0, Jz.jsx)(nz, {
              imageKey: oT.imageKey,
              fallbackImageKey: oT.fallbackImageKey,
              geometryKey: oT.geometryKey,
              alt: oT.label
            }), (0, Jz.jsx)(Gz, {
              mount: iT.display.mountMinimapSearchArea
            }), oT.markers.map((TT => (0, Jz.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${TT.position[0]}%`,
                top: `${TT.position[1]}%`,
                color: TT.colour
              },
              title: TT.name,
              children: (0, Jz.jsx)(az, {
                icon: TT.icon
              })
            }, TT.id)))]
          }), (0, Jz.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: zT("skyblockGame:mapYouAreHere"),
            children: (0, Jz.jsx)(az, {
              icon: "player"
            })
          })]
        }), (0, Jz.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: oT.caption
        })]
      })
    }

    function kk(TT) {
      let {
        controller: oT
      } = TT;
      return (0, Jz.jsxs)("div", {
        className: "SkyblockCompass",
        ref: oT.display.mountCompass,
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Jz.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Jz.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function Wk(TT) {
      let {
        controller: oT,
        surface: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)(), zT = (0, jz.i)(kI, oT.getSnapshot()), kT = sz();
      return zT.enabled ? (0, Jz.jsxs)(Jz.Fragment, {
        children: ["hud" === IT && (0, Jz.jsx)(Rz.e, {
          placement: "statBars",
          children: zT.hud && (0, Jz.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": zT.hud.colour
            },
            children: [(0, Jz.jsx)(tz, {
              percent: zT.hud.skill.percent,
              label: zT.hud.skill.xp,
              levelUpToken: zT.hud.levelUpToken,
              colour: zT.hud.colour
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Jz.jsxs)("span", {
                children: [zT.hud.skill.label, " \xb7 ", zT.hud.skill.level]
              }), (0, Jz.jsx)("span", {
                children: zT.hud.gain
              })]
            })]
          })
        }), "hud" === IT && (0, Jz.jsx)(Rz.e, {
          children: zT.hud && (0, Jz.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Jz.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Jz.jsx)("strong", {
                children: zT.hud.skill.label
              }), (0, Jz.jsx)("span", {
                children: zT.hud.gain
              })]
            }), (0, Jz.jsx)(tz, {
              percent: zT.hud.skill.percent,
              label: zT.hud.skill.xp,
              levelUpToken: zT.hud.levelUpToken,
              colour: zT.hud.colour
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Jz.jsx)("span", {
                children: zT.hud.skill.level
              }), (0, Jz.jsx)("span", {
                children: zT.hud.skill.xp
              })]
            })]
          })
        }), "menu" === IT && (0, Jz.jsx)(qz.e, {
          show: zT.open,
          close: oT.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Jz.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: kT,
            onKeyDown: lz,
            children: [(0, Jz.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Jz.jsxs)("div", {
                children: [(0, Jz.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: iT("skyblockGame:skills")
                }), (0, Jz.jsx)("p", {
                  children: iT("skyblockGame:skillsIntro")
                })]
              }), (0, Jz.jsx)(Zz.j, {
                padIgnore: !0,
                onClick: oT.dismiss
              })]
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Jz.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: zT.skills.map((TT => (0, Jz.jsxs)(Zz.e, {
                  className: mz()("SkyblockSkillCard", {
                    Selected: TT.selected
                  }),
                  ariaPressed: TT.selected,
                  onClick: () => {
                    oT.select(TT.id)
                  },
                  children: [(0, Jz.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Jz.jsx)(vz.c, {
                      itemName: TT.icon,
                      amount: 0
                    })
                  }), (0, Jz.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Jz.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Jz.jsx)("strong", {
                        children: TT.label
                      }), (0, Jz.jsx)("span", {
                        children: TT.level
                      })]
                    }), (0, Jz.jsx)(tz, {
                      percent: TT.percent,
                      label: `${TT.label}: ${TT.xp}`
                    }), (0, Jz.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: TT.xp
                    })]
                  })]
                }, TT.id)))
              }), zT.detail && (0, Jz.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Jz.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Jz.jsx)(vz.c, {
                    itemName: zT.detail.icon,
                    amount: 0
                  })
                }), (0, Jz.jsx)("h3", {
                  children: zT.detail.label
                }), (0, Jz.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: zT.detail.level
                }), (0, Jz.jsx)("p", {
                  children: zT.detail.description
                }), (0, Jz.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Jz.jsx)("strong", {
                    children: iT("skyblockGame:currentBenefit")
                  }), (0, Jz.jsx)("span", {
                    children: zT.detail.benefit
                  })]
                }), (0, Jz.jsx)(tz, {
                  percent: zT.detail.percent,
                  label: zT.detail.xp
                }), (0, Jz.jsx)("p", {
                  children: zT.detail.xp
                }), (0, Jz.jsx)("h4", {
                  children: iT("skyblockGame:earnXp")
                }), (0, Jz.jsx)("ul", {
                  children: zT.detail.sources.map((TT => (0, Jz.jsx)("li", {
                    children: TT
                  }, TT)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Xk = IT(1337),
      Bk = IT(4320),
      Fk = IT(306);

    function Sk(TT) {
      let {
        item: oT
      } = TT;
      return (0, Jz.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Jz.jsx)(vz.c, {
          itemName: oT,
          amount: 0
        })
      })
    }

    function Dk(TT) {
      let {
        name: oT,
        percent: IT,
        progress: iT
      } = TT;
      return (0, Jz.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Jz.jsx)(tz, {
          percent: IT,
          label: `${(0,Fk.sb)(oT)}: ${iT}`
        }), (0, Jz.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: iT
        })]
      })
    }

    function Lk(TT) {
      let {
        subquests: oT,
        showDescriptions: IT = !1
      } = TT;
      return (0, Jz.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: oT.map((TT => {
          const oT = IT && "completed" === TT.status,
            iT = (0, Jz.jsxs)("li", {
              className: mz()("SkyblockQuestStep", TT.status, {
                JustFinished: TT.justFinished,
                JustUnlocked: TT.justUnlocked
              }),
              tabIndex: oT ? 0 : void 0,
              children: [null !== TT.iconItem && (0, Jz.jsx)(Sk, {
                item: TT.iconItem
              }), null === TT.iconItem && (0, Jz.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === TT.status ? "\u2713" : "skipped" === TT.status ? "\u2212" : "\u25cb"
              }), (0, Jz.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Jz.jsx)("strong", {
                  children: (0, Jz.jsx)(Bk.c, {
                    text: TT.name
                  })
                }), IT && !oT && (0, Jz.jsx)("span", {
                  children: (0, Jz.jsx)(Bk.c, {
                    text: TT.description
                  })
                }), null !== TT.barPercent && (0, Jz.jsx)(Dk, {
                  name: TT.name,
                  percent: TT.barPercent,
                  progress: TT.progress
                }), null === TT.barPercent && !oT && (0, Jz.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: TT.statusLabel
                })]
              })]
            }, TT.id);
          return oT ? (0, Jz.jsx)(Xk.e, {
            delayShow: 200,
            tooltipInner: (0, Jz.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Jz.jsx)("span", {
                children: (0, Jz.jsx)(Bk.c, {
                  text: TT.description
                })
              }), (0, Jz.jsx)("strong", {
                children: TT.statusLabel
              })]
            }),
            children: iT
          }, TT.id) : iT
        }))
      })
    }

    function xk(TT) {
      let {
        quest: oT,
        select: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)(), zT = oT.focusStep;
      return (0, Jz.jsxs)(Zz.e, {
        className: mz()("SkyblockQuestCard", {
          Selected: oT.selected,
          Tracked: oT.tracked
        }),
        onClick: () => {
          IT(oT.id)
        },
        children: [(0, Jz.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Jz.jsx)("strong", {
            children: (0, Jz.jsx)(Bk.c, {
              text: oT.name
            })
          }), oT.tracked && (0, Jz.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: iT("skyblockGame:currentQuest")
          })]
        }), zT && (0, Jz.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== zT.iconItem && (0, Jz.jsx)(Sk, {
            item: zT.iconItem
          }), (0, Jz.jsx)(Dk, {
            name: zT.name,
            percent: zT.barPercent,
            progress: zT.progress
          })]
        }), (0, Jz.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: oT.progress
        })]
      })
    }

    function ck(TT) {
      let {
        controller: oT,
        surface: IT
      } = TT;
      const iT = (0, jz.i)(FI, oT.getSnapshot()),
        {
          t: zT
        } = (0, Cz.t)(),
        kT = sz();
      return iT.enabled ? (0, Jz.jsxs)(Jz.Fragment, {
        children: ["hud" === IT && (0, Jz.jsx)(Jz.Fragment, {
          children: iT.tracked && (0, Jz.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: BI,
            children: (0, Jz.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [iT.trackedStepPulse > 0 && (0, Jz.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, iT.trackedStepPulse), (0, Jz.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: zT("skyblockGame:currentQuest")
              }), (0, Jz.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Jz.jsx)("strong", {
                  children: (0, Jz.jsx)(Bk.c, {
                    text: iT.tracked.name
                  })
                }), null !== iT.tracked.clock && (0, Jz.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: iT.tracked.clock
                })]
              }), (0, Jz.jsx)(Lk, {
                subquests: iT.tracked.subquests
              })]
            })
          })
        }), "menu" === IT && (0, Jz.jsx)(qz.e, {
          show: iT.open,
          close: oT.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Jz.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: kT,
            onKeyDown: lz,
            children: [(0, Jz.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Jz.jsx)("div", {
                children: (0, Jz.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: zT("skyblockGame:quests")
                })
              }), (0, Jz.jsx)(Zz.j, {
                padIgnore: !0,
                onClick: oT.dismiss
              })]
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Jz.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Jz.jsx)("h3", {
                  children: zT("skyblockGame:current")
                }), 0 === iT.active.length && (0, Jz.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: zT("skyblockGame:noActiveQuests")
                }), iT.active.map((TT => (0, Jz.jsx)(xk, {
                  quest: TT,
                  select: oT.select
                }, TT.id))), (0, Jz.jsx)("h3", {
                  children: (0, Jz.jsxs)("button", {
                    type: "button",
                    className: mz()("SkyblockQuestSectionToggle", {
                      Expanded: iT.completedExpanded
                    }),
                    "aria-expanded": iT.completedExpanded,
                    onClick: oT.toggleCompleted,
                    children: [(0, Jz.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), zT("skyblockGame:completed"), (0, Jz.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: iT.completed.length
                    })]
                  })
                }), iT.completedExpanded && 0 === iT.completed.length && (0, Jz.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: zT("skyblockGame:noCompletedQuests")
                }), iT.completedExpanded && iT.completed.map((TT => (0, Jz.jsx)(xk, {
                  quest: TT,
                  select: oT.select
                }, TT.id)))]
              }), iT.detail && (0, Jz.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [iT.detail.completed && (0, Jz.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: zT("skyblockGame:completedQuest")
                }), (0, Jz.jsx)("h3", {
                  children: (0, Jz.jsx)(Bk.c, {
                    text: iT.detail.name
                  })
                }), (0, Jz.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Jz.jsx)(Bk.c, {
                    text: iT.detail.description
                  })
                }), (0, Jz.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [iT.detail.progress, null !== iT.detail.clock && (0, Jz.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: iT.detail.clock
                  })]
                }), (0, Jz.jsx)(Lk, {
                  subquests: iT.detail.subquests,
                  showDescriptions: !0
                }), iT.detail.tracked && (0, Jz.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: iT.detail.trackLabel
                }), !iT.detail.completed && !iT.detail.tracked && (0, Jz.jsx)(Zz.m, {
                  onClick: oT.trackSelected,
                  disabled: !iT.detail.canTrack,
                  children: iT.detail.trackLabel
                }), iT.detail.canViewDialogue && (0, Jz.jsx)(Zz.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: oT.viewDialogue,
                  children: zT("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Kk = IT(1055),
      Mk = IT(2327);

    function rk(TT, oT, IT, iT, zT) {
      const kT = TT => "linear" === zT ? TT : {
          gz: zT,
          point: TT
        },
        WT = {};
      for (const [XT, BT] of iT)
        for (const [oT, IT] of Object.entries(TT(XT, BT, kT))) WT[oT] ??= {
          timeline: []
        }, WT[oT].timeline.push(IT);
      return {
        xz: oT,
        loop: IT,
        Mz: WT
      }
    }
    const Ak = .547,
      gk = .022,
      hk = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      wk = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function mk(TT, oT, IT) {
      const {
        drop: iT = 0,
        shift: zT = 0,
        torso: kT = 0,
        nod: WT = 0,
        tilt: XT = 0,
        legs: BT = [0, 0],
        arms: FT = 0,
        spread: ST = 0
      } = oT, DT = Ak * Math.cos(kT) - gk * Math.sin(kT), LT = Ak * Math.sin(kT) + gk * Math.cos(kT), xT = IT([0, -iT, zT]);
      return {
        LowerBody: {
          timeFraction: TT,
          position: xT,
          rotation: IT([0, 0, 0])
        },
        UpperBody: {
          timeFraction: TT,
          position: xT,
          rotation: IT([kT, 0, XT])
        },
        HeadMesh: {
          timeFraction: TT,
          position: IT([0, DT - Ak - iT, LT - gk + zT]),
          rotation: IT([kT + WT, 0, XT])
        },
        LegLeftMesh: {
          timeFraction: TT,
          rotation: IT([BT[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: TT,
          rotation: IT([BT[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: IT([FT, 0, ST])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: IT([FT, 0, -ST])
        }
      }
    }

    function ek(TT, oT, IT) {
      return rk(mk, TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Rk(TT) {
      return "number" === typeof TT ? [TT, TT] : TT
    }

    function uk(TT, oT, IT) {
      const {
        rise: iT = 0,
        shift: zT = 0,
        torso: kT = 0,
        twist: WT = 0,
        tilt: XT = 0,
        nod: BT = 0,
        cock: FT = 0,
        arms: ST = 0,
        spread: DT = 0
      } = oT, [LT, xT] = Rk(ST), [cT, KT] = Rk(DT);
      return {
        TorsoNode: {
          timeFraction: TT,
          position: IT([0, iT, zT]),
          rotation: IT([kT, WT, XT])
        },
        HeadMesh: {
          timeFraction: TT,
          rotation: IT([BT, 0, FT])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: IT([LT, 0, cT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: IT([xT, 0, -KT])
        }
      }
    }
    const vk = [1.0625, -1, 0];

    function Ek(TT) {
      return "number" === typeof TT ? [TT, TT] : TT
    }

    function fk(TT, oT, IT) {
      const {
        drop: iT = 0,
        shift: zT = 0,
        torso: kT = 0,
        tilt: WT = 0,
        nod: XT = 0,
        cock: BT = 0,
        legs: FT = [0, 0],
        arms: ST = 0,
        spread: DT = 0
      } = oT, [LT, xT] = Ek(ST), [cT, KT] = Ek(DT), MT = -kT, rT = -WT, [AT, gT, hT] = function(TT, oT) {
        const [IT, iT, zT] = [-vk[0], vk[1], -vk[2]], kT = IT * Math.cos(oT) - iT * Math.sin(oT), WT = IT * Math.sin(oT) + iT * Math.cos(oT);
        return [kT - IT, -(WT * Math.cos(TT) - zT * Math.sin(TT) - iT), WT * Math.sin(TT) + zT * Math.cos(TT) - zT]
      }(MT, rT), wT = IT([0, -iT, zT]);
      return {
        TorsoNode: {
          timeFraction: TT,
          position: IT([AT, gT - iT, hT + zT]),
          rotation: IT([MT, 0, rT])
        },
        HeadMesh: {
          timeFraction: TT,
          rotation: IT([-XT, 0, -BT])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: IT([-LT, 0, -cT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: IT([-xT, 0, KT])
        },
        LegLeftMesh: {
          timeFraction: TT,
          position: wT,
          rotation: IT([-FT[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: TT,
          position: wT,
          rotation: IT([-FT[1], 0, 0])
        }
      }
    }
    var Ck = IT(36510),
      jk = IT(37453),
      Jk = IT(37629);

    function Uk(TT, oT, IT) {
      var iT, zT;
      const kT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return TT + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - TT) * IT
        },
        [WT, XT] = null !== (iT = TT.legs) && void 0 !== iT ? iT : [0, 0],
        [BT, FT] = null !== (zT = oT.legs) && void 0 !== zT ? zT : [0, 0];
      return {
        drop: kT(TT.drop, oT.drop),
        shift: kT(TT.shift, oT.shift),
        torso: kT(TT.torso, oT.torso),
        nod: kT(TT.nod, oT.nod),
        tilt: kT(TT.tilt, oT.tilt),
        legs: [kT(WT, BT), kT(XT, FT)],
        arms: kT(TT.arms, oT.arms),
        spread: kT(TT.spread, oT.spread)
      }
    }
    const ak = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Yk = ek(4400, !0, [
        [0, ak],
        [.16, {
          ...ak,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, ak],
        [.44, {
          ...ak,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Uk(ak, hk, .7)],
        [.66, Uk(ak, hk, .78)],
        [.74, Uk(ak, wk, .65)],
        [.86, {
          ...ak,
          drop: .14
        }],
        [1, ak]
      ], "catmull-rom-spline"),
      Qk = {
        ...ak,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Ok = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Hk = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      nk = {
        caveGolem: Yk,
        magmaGolem: ek(3600, !0, [
          [0, Qk],
          [.12, {
            ...Qk,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Qk,
            tilt: -.08
          }],
          [.4, {
            ...Qk,
            tilt: .06,
            drop: .11
          }],
          [.52, Uk(Qk, hk, .9)],
          [.62, Uk(Qk, wk, .8)],
          [.7, Uk(Qk, wk, .45)],
          [.78, Uk(Qk, wk, .85)],
          [.9, {
            ...Qk,
            drop: .17
          }],
          [1, Qk]
        ], "catmull-rom-spline"),
        frostWraith: function(TT, oT, IT) {
          return rk(uk, TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Ok],
          [.14, {
            ...Ok,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Ok,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Ok,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Ok,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Ok,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Ok,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Ok,
            rise: .16,
            tilt: -.04
          }],
          [1, Ok]
        ], "catmull-rom-spline"),
        tikiTerror: function(TT, oT, IT) {
          return rk(fk, TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Hk],
          [.16, {
            ...Hk,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Hk],
          [.44, {
            ...Hk,
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
            ...Hk,
            drop: .1
          }],
          [1, Hk]
        ], "catmull-rom-spline")
      },
      qk = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Zk = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      lk = Object.fromEntries(Object.entries(nk).map((TT => {
        let [oT, IT] = TT;
        return [oT, (0, Jk.e)((0, Ck.e)(IT), oT)]
      })));

    function sk(TT) {
      const oT = function(TT) {
        var oT;
        const IT = (0, jk.c)(TT).poseRig;
        return null !== (oT = Zk[TT]) && void 0 !== oT ? oT : void 0 === IT ? null : qk[IT]
      }(TT);
      return null === oT ? null : lk[oT]
    }

    function tk(TT) {
      return {
        "--difficulty-colour": TT
      }
    }
    const Gk = (0, uT.lazy)((() => (0, Mk.e)(IT.e(213).then((() => IT(40338))), (TT => TT.MobPreview))));

    function pk(TT) {
      var oT, IT, iT;
      let {
        picker: zT,
        controller: kT
      } = TT;
      const {
        t: WT
      } = (0, Cz.t)(), XT = sz(), {
        page: BT
      } = zT;
      return (0, Jz.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: XT,
        onKeyDown: TT => {
          "ArrowLeft" === TT.key ? (TT.preventDefault(), TT.stopPropagation(), kT.previous()) : "ArrowRight" === TT.key ? (TT.preventDefault(), TT.stopPropagation(), kT.next()) : lz(TT)
        },
        style: tk(BT.colour),
        children: [(0, Jz.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Jz.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: zT.dungeonName
          }), (0, Jz.jsx)(Zz.j, {
            padIgnore: !0,
            onClick: kT.dismiss
          })]
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Jz.jsx)(Zz.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !zT.canPrevious,
              onClick: kT.previous,
              children: (0, Jz.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Jz.jsx)(Kk.e, {
                  name: "angle-up"
                })
              })
            }), (0, Jz.jsxs)("div", {
              className: mz()("SkyblockBossPickerBoss", {
                Locked: !BT.unlocked
              }),
              children: [null !== BT.bossMobType && (0, Jz.jsx)(uT.Suspense, {
                fallback: (0, Jz.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Jz.jsx)(Gk, {
                  className: "SkyblockBossPickerModel",
                  mobType: BT.bossMobType,
                  variation: BT.bossMobVariation,
                  animation: null !== (oT = sk(BT.bossMobType)) && void 0 !== oT ? oT : void 0
                })
              }), null === BT.bossMobType && (0, Jz.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Jz.jsx)(Zz.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !zT.canNext,
              onClick: kT.next,
              children: (0, Jz.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Jz.jsx)(Kk.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Jz.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [BT.beaten && (0, Jz.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), BT.label]
            }), (0, Jz.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (IT = BT.bossName) && void 0 !== IT ? IT : "???"
            }), (0, Jz.jsxs)("span", {
              className: mz()("SkyblockBossPickerRecord", {
                Locked: null !== BT.lockedHint
              }),
              children: [null !== BT.lockedHintHighlight && (0, Jz.jsxs)(Jz.Fragment, {
                children: [BT.lockedHintHighlight.before, (0, Jz.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: tk(BT.lockedHintHighlight.colour),
                  children: [null !== BT.lockedHintHighlight.icon && (0, Jz.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Jz.jsx)(vz.c, {
                      itemName: BT.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), BT.lockedHintHighlight.name]
                }), BT.lockedHintHighlight.after]
              }), null === BT.lockedHintHighlight && (null !== (iT = BT.lockedHint) && void 0 !== iT ? iT : BT.summary)]
            })]
          }), (0, Jz.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: zT.pages.map((TT => (0, Jz.jsx)("span", {
              className: mz()("SkyblockBossPickerDot", {
                Current: TT.current,
                Locked: !TT.unlocked
              }),
              style: tk(TT.colour)
            }, TT.difficulty)))
          }), (0, Jz.jsx)(Zz.r, {
            className: "SkyblockBossPickerFight",
            disabled: !BT.unlocked,
            onClick: kT.enter,
            children: WT("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function bk(TT) {
      let {
        dungeon: oT,
        select: IT
      } = TT;
      return (0, Jz.jsxs)(Zz.e, {
        className: mz()("SkyblockDungeonCard", {
          Selected: oT.selected
        }),
        onClick: () => {
          IT(oT.id)
        },
        children: [(0, Jz.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Jz.jsx)("strong", {
            children: oT.name
          }), (0, Jz.jsx)("span", {
            children: oT.beatenSummary
          })]
        }), (0, Jz.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: oT.difficulties.map((TT => (0, Jz.jsxs)("span", {
            className: mz()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: TT.beaten
            }),
            style: tk(TT.colour),
            title: TT.summary,
            children: [TT.beaten && (0, Jz.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), TT.label]
          }, TT.difficulty)))
        })]
      })
    }

    function yk(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(xI, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz();
      return IT.enabled ? (0, Jz.jsxs)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [IT.picker && (0, Jz.jsx)(pk, {
          picker: IT.picker,
          controller: oT
        }), !IT.picker && (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: iT("skyblockGame:dungeons")
              }), (0, Jz.jsx)("p", {
                children: iT("skyblockGame:dungeonsIntro")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: oT.dismiss
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Jz.jsx)("div", {
              className: "SkyblockDungeonList",
              children: IT.dungeons.map((TT => (0, Jz.jsx)(bk, {
                dungeon: TT,
                select: oT.select
              }, TT.id)))
            }), IT.detail && (0, Jz.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Jz.jsx)("h3", {
                children: IT.detail.name
              }), (0, Jz.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: IT.detail.difficulties.map((TT => (0, Jz.jsxs)("li", {
                  className: mz()("SkyblockDungeonRecord", {
                    Beaten: TT.beaten
                  }),
                  children: [(0, Jz.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: tk(TT.colour),
                    children: [TT.beaten && (0, Jz.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), TT.label]
                  }), (0, Jz.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: TT.summary
                  })]
                }, TT.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Nk(TT) {
      let {
        collection: oT,
        select: IT
      } = TT;
      return (0, Jz.jsxs)(Zz.e, {
        className: mz()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: oT.selected,
          Locked: oT.locked
        }),
        ariaPressed: oT.selected,
        onClick: () => {
          IT(oT.id)
        },
        children: [(0, Jz.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Jz.jsx)(vz.c, {
            itemName: oT.icon,
            amount: 0
          })
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Jz.jsx)("strong", {
              children: oT.name
            }), (0, Jz.jsx)("span", {
              children: oT.tier
            })]
          }), (0, Jz.jsx)(tz, {
            percent: oT.percent,
            label: `${oT.name}: ${oT.progress}`
          }), (0, Jz.jsx)("span", {
            className: "SkyblockSkillXp",
            children: oT.progress
          })]
        })]
      })
    }

    function Pk(TT) {
      let {
        collection: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Jz.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Jz.jsx)(vz.c, {
            itemName: oT.icon,
            amount: 0
          })
        }), (0, Jz.jsx)("h3", {
          children: oT.name
        }), (0, Jz.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: oT.tier
        }), (0, Jz.jsx)("p", {
          children: oT.locked ? IT("skyblockGame:collectionLocked") : oT.count
        }), null !== oT.nextReward && (0, Jz.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Jz.jsx)("strong", {
            children: IT("skyblockGame:collectionNextReward")
          }), (0, Jz.jsx)("span", {
            children: oT.nextReward
          })]
        }), (0, Jz.jsx)(tz, {
          percent: oT.percent,
          label: oT.progress
        }), (0, Jz.jsx)("p", {
          children: oT.progress
        })]
      })
    }

    function dk(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(YI, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz();
      return IT.enabled ? (0, Jz.jsx)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: iT("skyblockGame:collections")
              }), (0, Jz.jsxs)("p", {
                children: [iT("skyblockGame:collectionsIntro"), " ", IT.tiersUnlocked]
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: oT.dismiss
            })]
          }), (0, Jz.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: IT.categories.map((TT => (0, Jz.jsxs)(Zz.e, {
              className: mz()("SkyblockCollectionCategory", {
                Selected: TT.selected
              }),
              ariaPressed: TT.selected,
              padTabSelected: TT.selected,
              onClick: () => {
                oT.selectCategory(TT.id)
              },
              children: [(0, Jz.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Jz.jsx)(vz.c, {
                  itemName: TT.icon,
                  amount: 0
                })
              }), (0, Jz.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Jz.jsx)("strong", {
                  children: TT.label
                }), (0, Jz.jsx)("span", {
                  children: TT.tiers
                })]
              })]
            }, TT.id)))
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Jz.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: IT.collections.map((TT => (0, Jz.jsx)(Nk, {
                collection: TT,
                select: oT.select
              }, TT.id)))
            }), IT.detail && (0, Jz.jsx)(Pk, {
              collection: IT.detail
            })]
          })]
        })
      }) : null
    }
    const Vk = ["completed", "active", "available", "locked"],
      TW = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function oW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(bI, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz();
      return IT.enabled ? (0, Jz.jsx)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: iT("skyblockDevQuests:title")
              }), (0, Jz.jsx)("p", {
                children: iT("skyblockDevQuests:intro")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              onClick: oT.dismiss
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Vk.map((TT => (0, Jz.jsx)("span", {
              className: mz()("SkyblockQuestGraphLegendState", TT),
              children: iT(`skyblockDevQuests:state_${TT}`)
            }, TT))), TW.map((TT => (0, Jz.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Jz.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Jz.jsx)("line", {
                  className: mz()("SkyblockQuestGraphEdge", TT),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), iT(`skyblockDevQuests:edge_${TT}`)]
            }, TT)))]
          }), (0, Jz.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Jz.jsxs)("div", {
              className: mz()("SkyblockQuestGraphCanvas", {
                Planning: IT.planning
              }),
              style: {
                width: IT.width,
                height: IT.height
              },
              children: [(0, Jz.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: IT.width,
                height: IT.height,
                "aria-hidden": "true",
                children: [(0, Jz.jsx)("defs", {
                  children: (0, Jz.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Jz.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), IT.edges.map((TT => (0, Jz.jsx)("path", {
                  className: mz()("SkyblockQuestGraphEdge", TT.kind, {
                    InPlan: TT.inPlan
                  }),
                  d: TT.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, TT.key)))]
              }), IT.nodes.map((TT => (0, Jz.jsxs)("button", {
                type: "button",
                className: mz()("SkyblockQuestGraphNode", TT.state, {
                  InPlan: TT.inPlan,
                  Hovered: TT.hovered
                }),
                style: {
                  left: TT.left,
                  top: TT.top,
                  width: 190,
                  height: 52
                },
                title: TT.id,
                onMouseEnter: () => {
                  oT.hover(TT.id)
                },
                onMouseLeave: () => {
                  oT.hover(null)
                },
                onFocus: () => {
                  oT.hover(TT.id)
                },
                onBlur: () => {
                  oT.hover(null)
                },
                onClick: () => {
                  oT.jump(TT.id)
                },
                children: [(0, Jz.jsx)("strong", {
                  children: TT.name
                }), (0, Jz.jsx)("span", {
                  children: TT.detail
                })]
              }, TT.id)))]
            })
          })]
        })
      }) : null
    }
    const IW = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      iW = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Xi}ms`,
        "--forge-duration": "2150ms"
      },
      zW = Array.from({
        length: 18
      }, ((TT, oT) => ({
        "--ember-left": `${(4+92*(.618034*oT%1)).toFixed(1)}%`,
        "--ember-size": 3 + oT % 3 * 2 + "px",
        "--ember-drift": 14 * (oT % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*oT%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*oT%8).toFixed(2)}s`
      })));

    function kW(TT) {
      if (TT.style.removeProperty("--part-size"), null === TT.parentElement || "wrap" === getComputedStyle(TT.parentElement).flexWrap) return;
      const oT = [...TT.children],
        IT = getComputedStyle(TT),
        iT = parseFloat(IT.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        zT = (TT.clientHeight - parseFloat(IT.rowGap) * (oT.length - 1)) / oT.length,
        kT = oT.map((TT => {
          const oT = getComputedStyle(TT),
            IT = TT.querySelector("h3"),
            kT = TT.querySelector(".SkyblockForgeParts");
          if (null === IT || null === kT) return iT;
          const WT = zT - parseFloat(oT.paddingTop) - parseFloat(oT.paddingBottom) - IT.offsetHeight - parseFloat(getComputedStyle(IT).marginBottom),
            XT = parseFloat(getComputedStyle(kT).columnGap),
            BT = kT.children.length;
          let FT = 0;
          for (let iT = 1; iT <= BT; iT++) {
            const TT = Math.ceil(BT / iT);
            FT = Math.max(FT, Math.min((kT.clientWidth - XT * (iT - 1)) / iT, (WT - XT * (TT - 1)) / TT))
          }
          return FT
        }));
      TT.style.setProperty("--part-size", `${Math.floor(Math.max(iT,Math.min(...kT)))}px`)
    }

    function WW(TT) {
      var oT, IT, iT, kT, WT;
      let {
        controller: XT
      } = TT;
      const BT = (0, jz.i)(ci, XT.getSnapshot()),
        {
          t: FT
        } = (0, Cz.t)(),
        ST = sz(),
        DT = function() {
          const TT = (0, uT.useRef)(null),
            oT = (0, uT.useRef)(null);
          return (0, uT.useLayoutEffect)((() => {
            null !== TT.current && kW(TT.current)
          })), (0, uT.useCallback)((IT => {
            var iT;
            null === (iT = oT.current) || void 0 === iT || iT.disconnect(), oT.current = null, TT.current = IT, null !== IT && (oT.current = new ResizeObserver((() => {
              kW(IT)
            })), oT.current.observe(IT))
          }), [])
        }(),
        LT = function(TT) {
          const oT = (0, uT.useRef)(null);
          return (0, uT.useLayoutEffect)((() => {
            const TT = oT.current;
            if (null !== TT) {
              TT.style.removeProperty("font-size");
              for (let oT = 1.7; oT > 1.1 && TT.scrollWidth > TT.clientWidth; oT -= .1) TT.style.fontSize = oT - .1 + "rem"
            }
          }), [TT]), (0, uT.useCallback)((TT => {
            oT.current = TT
          }), [])
        }(null === (oT = BT.preview) || void 0 === oT ? void 0 : oT.name),
        xT = (0, uT.useRef)(null),
        cT = (0, uT.useRef)({}),
        KT = BT.forging,
        MT = null !== (IT = null === KT || void 0 === KT ? void 0 : KT.preview.tier) && void 0 !== IT ? IT : 0,
        rT = null !== (iT = null === KT || void 0 === KT ? void 0 : KT.preview.named) && void 0 !== iT && iT,
        AT = (0, uT.useMemo)((() => {
          return null === KT ? null : {
            flames: (TT = MT, oT = rT, Array.from({
              length: 26 + 6 * TT + (oT ? 20 : 0)
            }, ((TT, oT) => {
              const IT = oT < 6,
                iT = Math.random() * Math.PI * 2,
                zT = IT ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                kT = Math.cos(iT) * zT,
                WT = Math.sin(iT) * zT - 2 - 3 * Math.random(),
                XT = Math.random(),
                [BT, FT, ST] = IT ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : XT < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : XT < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [XT < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": BT,
                "--x0": `${(.15*kT).toFixed(2)}rem`,
                "--y0": `${(.15*WT).toFixed(2)}rem`,
                "--x": `${kT.toFixed(2)}rem`,
                "--y": `${WT.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${FT.toFixed(2)}rem`,
                "--duration": `${Math.round(ST)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Si(MT, rT)
          };
          var TT, oT
        }), [null === KT || void 0 === KT ? void 0 : KT.id]);
      if (!BT.enabled) return null;
      const gT = BT.preview,
        hT = BT.arriving,
        wT = null !== hT && !hT.sameSword,
        mT = null !== gT && (0, Jz.jsx)(vz.c, {
          itemName: gT.baseSword,
          amount: 0,
          enchantmentTier: gT.enchantmentTier
        });
      return (0, Jz.jsx)(qz.e, {
        show: BT.open,
        close: XT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: ST,
          onKeyDown: lz,
          children: [(0, Jz.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: zW.map(((TT, oT) => (0, Jz.jsx)("span", {
              style: TT
            }, oT)))
          }), (0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: FT("skyblockGame:forgeTitle")
              }), (0, Jz.jsx)("p", {
                children: FT("skyblockGame:forgeIntro")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              onClick: XT.dismiss
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Jz.jsx)("div", {
              ref: DT,
              className: mz()("SkyblockForgeSlots", {
                Locked: null !== KT
              }),
              children: BT.slots.map((TT => (0, Jz.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Jz.jsx)("h3", {
                  children: TT.label
                }), (0, Jz.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: TT.parts.map((oT => (0, Jz.jsx)("button", {
                    type: "button",
                    className: mz()("SkyblockForgePart", {
                      Selected: oT.selected,
                      Missing: oT.placeholder
                    }),
                    disabled: oT.placeholder,
                    title: oT.placeholder ? FT("skyblockGame:forgePickParts") : oT.itemName,
                    "aria-pressed": oT.selected,
                    onClick: () => {
                      XT.select(TT.kind, oT.material)
                    },
                    children: (0, Jz.jsx)(vz.c, {
                      itemName: oT.itemName,
                      amount: oT.owned
                    })
                  }, oT.material)))
                })]
              }, TT.kind)))
            }), (0, Jz.jsxs)("div", {
              className: mz()("SkyblockForgeAnvil", {
                Named: null === gT || void 0 === gT ? void 0 : gT.named
              }),
              style: {
                "--tier": null === gT ? "transparent" : zT.lb[gT.enchantmentTier]
              },
              children: [(0, Jz.jsxs)("div", {
                className: mz()("SkyblockForgeAltar", {
                  Forging: null !== KT
                }),
                style: null === KT ? void 0 : iW,
                children: [(0, Jz.jsxs)("div", {
                  className: mz()("SkyblockForgeMount", {
                    Arrive: null !== hT
                  }),
                  children: [null === gT && (0, Jz.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Jz.jsx)(vz.c, {
                      itemName: BT.unformedSword,
                      amount: 0
                    })
                  }), null !== gT && (0, Jz.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== gT && null === KT && (0, Jz.jsx)("div", {
                    ref: xT,
                    className: "SkyblockForgeFloat",
                    children: (0, Jz.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: mT
                    })
                  }), null !== gT && (0, Jz.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Fi.map(((TT, oT) => (0, Jz.jsx)("span", {
                      className: mz()({
                        Rune: "" !== TT.rune
                      }),
                      style: TT.style,
                      children: TT.rune
                    }, oT)))
                  }), null !== KT && null !== AT && (0, Jz.jsxs)(Jz.Fragment, {
                    children: [(0, Jz.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Jz.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: AT.flames.map(((TT, oT) => (0, Jz.jsx)("span", {
                        style: TT
                      }, oT)))
                    }), (0, Jz.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: cT.current,
                      children: (0, Jz.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: mT
                      })
                    }), (0, Jz.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Jz.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (MT >= 4 || rT) && (0, Jz.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Jz.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: AT.sparks.map(((TT, oT) => (0, Jz.jsx)("span", {
                        style: TT
                      }, oT)))
                    }), (0, Jz.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Jz.jsx)("p", {
                  className: mz()("SkyblockForgeStatus", null === (kT = BT.status) || void 0 === kT ? void 0 : kT.tone),
                  children: null === (WT = BT.status) || void 0 === WT ? void 0 : WT.text
                })]
              }), null === gT && (0, Jz.jsx)("p", {
                className: mz()("SkyblockForgeName Waiting", {
                  ArriveText: wT
                }),
                children: FT(BT.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== gT && (0, Jz.jsx)("h3", {
                ref: LT,
                className: mz()("SkyblockForgeName", {
                  ArriveText: wT
                }),
                title: gT.name,
                children: gT.name
              }), (null === gT || void 0 === gT ? void 0 : gT.named) && (0, Jz.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: FT("skyblockGame:forgeSecret")
              }), (0, Jz.jsxs)(Zz.r, {
                className: "SkyblockForgeButton",
                disabled: !BT.canForge,
                title: null === gT ? void 0 : FT("skyblockGame:forgeCoalOwned", {
                  owned: String(BT.coalOwned)
                }),
                onClick: () => {
                  cT.current = function(TT) {
                    const oT = null === TT ? "none" : getComputedStyle(TT).transform,
                      IT = new DOMMatrixReadOnly("none" === oT ? void 0 : oT);
                    return {
                      "--settle-y": `${IT.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(IT.b,IT.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(xT.current), xi(), XT.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [FT("skyblockGame:forgeButton"), null !== gT && (0, Jz.jsxs)("span", {
                  className: mz()("SkyblockForgeCost", {
                    Short: gT.coalShort
                  }),
                  children: [(0, Jz.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Jz.jsx)(vz.c, {
                      itemName: VI.b,
                      amount: 0
                    })
                  }), gT.coalCost]
                })]
              })]
            }), (0, Jz.jsxs)("div", {
              className: mz()("SkyblockForgeDetails", {
                Named: null === gT || void 0 === gT ? void 0 : gT.named
              }),
              children: [(0, Jz.jsx)("p", {
                className: mz()("SkyblockForgeLore", {
                  ArriveText: wT
                }),
                title: null === gT || void 0 === gT ? void 0 : gT.lore,
                children: null === gT || void 0 === gT ? void 0 : gT.lore
              }), (0, Jz.jsxs)("dl", {
                className: mz()("SkyblockForgeStats", {
                  ArriveText: wT
                }),
                children: [null === gT && IW.map((TT => (0, Jz.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Jz.jsx)("dt", {
                    children: FT(TT)
                  }), (0, Jz.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, TT))), null === gT || void 0 === gT ? void 0 : gT.stats.map((TT => (0, Jz.jsxs)("div", {
                  className: mz()("SkyblockForgeStat", {
                    Better: TT.better
                  }),
                  children: [(0, Jz.jsx)("dt", {
                    children: TT.label
                  }), (0, Jz.jsx)("dd", {
                    children: TT.value
                  })]
                }, TT.label)))]
              }), (0, Jz.jsx)("ul", {
                className: mz()("SkyblockForgeEffects", {
                  ArriveText: wT
                }),
                children: null === gT || void 0 === gT ? void 0 : gT.effects.map((TT => (0, Jz.jsx)("li", {
                  children: TT
                }, TT)))
              })]
            })]
          })]
        })
      })
    }
    const XW = "Doom Rivet",
      BW = "Doom Crest";

    function FW(TT) {
      let {
        itemName: oT,
        amount: IT,
        owned: iT
      } = TT;
      return (0, Jz.jsxs)("span", {
        className: mz()("SkyblockSmugglerPrice", {
          Short: IT > iT
        }),
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Jz.jsx)(vz.c, {
            itemName: oT,
            amount: 0
          })
        }), (0, Jz.jsx)("span", {
          children: IT
        })]
      })
    }

    function SW(TT) {
      return TT.justBought ? "skyblockGame:smugglerJustBought" : TT.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function DW(TT) {
      let {
        deal: oT,
        view: IT,
        buy: iT
      } = TT;
      const {
        t: zT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("div", {
        className: mz()("SkyblockSmugglerPocket", {
          Bought: oT.justBought,
          Unaffordable: !oT.affordable,
          SoldOut: oT.soldOut && !oT.justBought
        }),
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Jz.jsx)(vz.c, {
            itemName: oT.itemName,
            amount: 0,
            enchantmentTier: oT.enchantmentTier
          }), oT.amount > 1 && (0, Jz.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: zT("skyblockGame:smugglerAmount", {
              amount: oT.amount
            })
          })]
        }), (0, Jz.jsx)("h3", {
          children: oT.displayName
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [oT.rivets > 0 && (0, Jz.jsx)(FW, {
              itemName: XW,
              amount: oT.rivets,
              owned: IT.rivetsOwned
            }), oT.crests > 0 && (0, Jz.jsx)(FW, {
              itemName: BW,
              amount: oT.crests,
              owned: IT.crestsOwned
            })]
          }), (0, Jz.jsx)(Zz.e, {
            className: "SkyblockSmugglerBuy",
            disabled: oT.soldOut || !oT.affordable || IT.pending,
            onClick: () => {
              iT(oT.slot)
            },
            children: zT(SW(oT))
          })]
        })]
      }, oT.justBought ? IT.boughtCount : 0)
    }

    function LW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(ri, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz();
      return IT.enabled ? (0, Jz.jsx)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Jz.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Jz.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: iT("skyblockGame:smugglerTitle")
              }), (0, Jz.jsx)("p", {
                children: iT("skyblockGame:smugglerIntro")
              })]
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Jz.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Jz.jsx)(FW, {
                  itemName: XW,
                  amount: IT.rivetsOwned,
                  owned: IT.rivetsOwned
                }), (0, Jz.jsx)(FW, {
                  itemName: BW,
                  amount: IT.crestsOwned,
                  owned: IT.crestsOwned
                })]
              }), (0, Jz.jsx)(Zz.j, {
                onClick: oT.dismiss
              })]
            })]
          }), (0, Jz.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: IT.deals.map((TT => (0, Jz.jsx)(DW, {
              deal: TT,
              view: IT,
              buy: oT.buy
            }, TT.slot)))
          }), (0, Jz.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: IT.rotatesText
            }), null !== IT.status && (0, Jz.jsx)("span", {
              className: mz()("SkyblockSmugglerStatus", IT.status.tone),
              children: IT.status.text
            })]
          })]
        })
      }) : null
    }

    function xW(TT) {
      let {
        phase: oT,
        className: IT
      } = TT;
      return (0, Jz.jsx)("span", {
        className: mz()("SkyblockMoon", `Moon-${oT}`, IT),
        "aria-hidden": "true"
      })
    }

    function cW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(wi, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)();
      return IT.enabled ? (0, Jz.jsx)(Rz.e, {
        placement: "statBars",
        children: (0, Jz.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: mz()("SkyblockPassageChip", IT.open && "Open"),
          "aria-label": iT("skyblockGame:passageChipLabel", {
            phase: IT.phaseName
          }),
          title: iT("skyblockGame:passageChipLabel", {
            phase: IT.phaseName
          }),
          onMouseDown: TT => {
            TT.preventDefault()
          },
          onClick: oT.toggle,
          children: (0, Jz.jsx)(xW, {
            phase: IT.phase
          }, IT.phase)
        })
      }) : null
    }

    function KW(TT) {
      let {
        fish: oT
      } = TT;
      return (0, Jz.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Jz.jsx)(vz.c, {
            itemName: oT.itemName,
            amount: 0
          })
        }), (0, Jz.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: oT.displayName
          }), (0, Jz.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: oT.where
          })]
        })]
      })
    }

    function MW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(wi, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz();
      return IT.enabled ? (0, Jz.jsx)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Jz.jsx)(xW, {
              phase: IT.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: iT("skyblockGame:passageTitle")
              }), (0, Jz.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: IT.phaseName
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: oT.dismiss
            })]
          }), (0, Jz.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: iT("skyblockGame:passageIntro")
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Jz.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Jz.jsx)("h3", {
                children: iT("skyblockGame:passageVisiting")
              }), (0, Jz.jsx)("ul", {
                className: "SkyblockPassageList",
                children: IT.visitors.map((TT => (0, Jz.jsx)(KW, {
                  fish: TT
                }, TT.itemName)))
              })]
            }), (0, Jz.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== IT.resting && (0, Jz.jsxs)(Jz.Fragment, {
                children: [(0, Jz.jsx)("h3", {
                  children: iT("skyblockGame:passageResting")
                }), (0, Jz.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Jz.jsx)(KW, {
                    fish: IT.resting
                  })
                })]
              }), (0, Jz.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Jz.jsx)(xW, {
                  phase: IT.nextPhase
                }), (0, Jz.jsx)("span", {
                  children: IT.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function rW() {
      return (0, Jz.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((TT => (0, Jz.jsx)("i", {
          style: {
            "--sparkle-index": TT
          }
        }, TT)))
      })
    }

    function AW(TT) {
      var oT;
      let {
        charm: IT,
        view: iT,
        controller: zT
      } = TT;
      const {
        t: kT
      } = (0, Cz.t)(), WT = iT.shop, XT = (null === (oT = iT.sparkle) || void 0 === oT ? void 0 : oT.id) === IT.id;
      return (0, Jz.jsxs)("li", {
        className: mz()("SkyblockLampLightCharm", IT.owned && "Owned", IT.socketed && "Socketed"),
        children: [XT && (0, Jz.jsx)(rW, {}, iT.sparkle.count), (0, Jz.jsx)("h4", {
          children: IT.name
        }), (0, Jz.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: IT.effect
        }), (0, Jz.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: IT.lines.map((TT => (0, Jz.jsxs)("li", {
            className: mz()("SkyblockLampLightOddsLine", "better" === TT.tone ? "Better" : "worse" === TT.tone ? "Worse" : "Same"),
            children: [(0, Jz.jsx)("span", {
              className: "Before",
              children: TT.before
            }), (0, Jz.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Jz.jsx)("span", {
              className: "After",
              children: TT.after
            })]
          }, TT.label)))
        }), (0, Jz.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: IT.owned ? IT.socketed ? (0, Jz.jsxs)(Jz.Fragment, {
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: kT("skyblockGame:lampLightSocketed")
            }), (0, Jz.jsx)(Zz.J, {
              disabled: !iT.canCommand,
              ariaLabel: kT("skyblockGame:lampLightRemoveLabel", {
                charm: IT.name
              }),
              onClick: () => {
                zT.socket(null)
              },
              children: kT("skyblockGame:lampLightRemove")
            })]
          }) : (0, Jz.jsx)(Zz.e, {
            disabled: !iT.canCommand || !WT.heldRod,
            ariaLabel: kT("skyblockGame:lampLightSocketLabel", {
              charm: IT.name
            }),
            onClick: () => {
              zT.socket(IT.id)
            },
            children: kT("skyblockGame:lampLightSocket")
          }) : (0, Jz.jsx)(Zz.e, {
            disabled: !iT.canCommand || !IT.affordable,
            ariaLabel: kT("skyblockGame:lampLightBuyLabel", {
              item: IT.name,
              cost: IT.cost
            }),
            onClick: () => {
              zT.buy(IT.id)
            },
            children: IT.cost
          })
        })]
      })
    }

    function gW(TT) {
      var oT;
      let {
        tint: IT,
        view: iT,
        controller: zT
      } = TT;
      const {
        t: kT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("li", {
        className: mz()("SkyblockLampLightTint", IT.wearing && "Wearing"),
        style: {
          "--tint-colour": IT.colour
        },
        children: [(null === (oT = iT.sparkle) || void 0 === oT ? void 0 : oT.id) === IT.id && (0, Jz.jsx)(rW, {}, iT.sparkle.count), (0, Jz.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Jz.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: IT.name
        }), IT.wearing ? (0, Jz.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: kT("skyblockGame:lampLightWearing")
        }) : (0, Jz.jsx)(Zz.e, {
          disabled: !iT.canCommand || !IT.owned && !IT.affordable,
          ariaLabel: IT.owned ? kT("skyblockGame:lampLightWearLabel", {
            tint: IT.name
          }) : kT("skyblockGame:lampLightBuyLabel", {
            item: IT.name,
            cost: IT.cost
          }),
          onClick: () => {
            IT.owned ? zT.wearTint(IT.id) : zT.buy(IT.id)
          },
          children: IT.owned ? kT("skyblockGame:lampLightWear") : IT.cost
        })]
      })
    }

    function hW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(Qi, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = IT.shop;
      return (0, Jz.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Jz.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: IT.balance
          }), (0, Jz.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": IT.releasing,
            className: mz()("SkyblockLampLightSwitch", IT.releasing && "On"),
            disabled: IT.releasing ? "ready" !== IT.status : !IT.canCommand,
            onClick: () => {
              oT.setRelease(!IT.releasing)
            },
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Jz.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), iT("skyblockGame:lampLightRelease")]
          }), (0, Jz.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: iT("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== IT.notice && (0, Jz.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: IT.notice
        }), null !== zT && (0, Jz.jsxs)(Jz.Fragment, {
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Jz.jsx)("h3", {
              children: iT("skyblockGame:lampLightCharms")
            }), (0, Jz.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: zT.oddsFor
            }), (0, Jz.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((TT => (0, Jz.jsx)("button", {
                type: "button",
                "aria-pressed": IT.situation === TT,
                className: mz()("SkyblockLampLightSituation", IT.situation === TT && "Selected"),
                onClick: () => {
                  oT.setSituation(TT)
                },
                children: iT("open" === TT ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, TT)))
            })]
          }), !zT.heldRod && (0, Jz.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: iT("skyblockGame:lampLightHoldRod")
          }), (0, Jz.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: zT.charms.map((TT => (0, Jz.jsx)(AW, {
              charm: TT,
              view: IT,
              controller: oT
            }, TT.id)))
          }), (0, Jz.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Jz.jsx)("h3", {
              children: iT("skyblockGame:lampLightTints")
            })
          }), (0, Jz.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Jz.jsxs)("li", {
              className: mz()("SkyblockLampLightTint", "Islands", zT.wearingIslandColours && "Wearing"),
              children: [(0, Jz.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Jz.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: iT("skyblockGame:lampLightIslandColours")
              }), zT.wearingIslandColours ? (0, Jz.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: iT("skyblockGame:lampLightWearing")
              }) : (0, Jz.jsx)(Zz.e, {
                disabled: !IT.canCommand,
                ariaLabel: iT("skyblockGame:lampLightWearLabel", {
                  tint: iT("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  oT.wearTint(null)
                },
                children: iT("skyblockGame:lampLightWear")
              })]
            }), zT.tints.map((TT => (0, Jz.jsx)(gW, {
              tint: TT,
              view: IT,
              controller: oT
            }, TT.id)))]
          })]
        })]
      })
    }

    function wW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(Qi, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)();
      return IT.releasing ? (0, Jz.jsx)(Rz.e, {
        children: (0, Jz.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            oT.setRelease(!1)
          },
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Jz.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [iT("skyblockGame:lampLightReleasing"), " \xb7 ", IT.balance]
          }), (0, Jz.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: iT("skyblockGame:lampLightKeepCatches")
          }), null !== IT.gained && (0, Jz.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: IT.gained.text
          }, IT.gained.count)]
        })
      }) : null
    }

    function mW(TT) {
      let {
        island: oT,
        view: IT,
        aim: iT
      } = TT;
      const {
        t: zT
      } = (0, Cz.t)(), kT = oT.featuredFish;
      return (0, Jz.jsxs)("li", {
        className: mz()("SkyblockKeepersChairIsland", `Island-${oT.id}`, oT.favoured && "Aimed", !oT.relit && "Dark"),
        children: [(0, Jz.jsx)("h3", {
          children: oT.name
        }), oT.relit && null !== kT ? (0, Jz.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: zT("skyblockGame:keepersChairTideNotice")
          }), (0, Jz.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Jz.jsx)(vz.c, {
              itemName: kT.itemName,
              amount: 0
            })
          }), (0, Jz.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: kT.displayName
          })]
        }) : (0, Jz.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Jz.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: zT("skyblockGame:keepersChairDark")
          })
        }), oT.relit && (oT.favoured ? (0, Jz.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: zT("skyblockGame:keepersChairAimed")
        }) : (0, Jz.jsx)(Zz.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !IT.canAim,
          ariaLabel: zT("skyblockGame:keepersChairAimLabel", {
            island: oT.name
          }),
          onClick: () => {
            iT(oT.id)
          },
          children: zT("skyblockGame:keepersChairAim")
        }))]
      }, oT.favoured ? IT.aimedCount : 0)
    }

    function eW(TT) {
      let {
        controller: oT,
        lampLight: IT
      } = TT;
      const iT = (0, jz.i)(Ei, oT.getSnapshot()),
        zT = (0, jz.i)(Qi, IT.getSnapshot()),
        [kT, WT] = (0, uT.useState)("lamp"),
        {
          t: XT
        } = (0, Cz.t)(),
        BT = sz();
      if (!iT.enabled) return null;
      const FT = "light" === kT && zT.enabled;
      return (0, Jz.jsx)(qz.e, {
        show: iT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: mz()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", FT && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: BT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: XT("skyblockGame:keepersChairTitle")
              }), (0, Jz.jsx)("p", {
                children: XT(FT ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              ariaLabel: XT("skyblockGame:keepersChairClose"),
              onClick: oT.dismiss
            })]
          }), zT.enabled && (0, Jz.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((TT => (0, Jz.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === TT === FT,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === TT === FT ? "true" : void 0,
              className: mz()("SkyblockKeepersChairTab", "light" === TT === FT && "Selected"),
              onClick: () => {
                WT(TT)
              },
              children: [XT("lamp" === TT ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === TT && (0, Jz.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: zT.balance
              })]
            }, TT)))
          }), FT ? (0, Jz.jsx)(hW, {
            controller: IT
          }) : (0, Jz.jsx)(RW, {
            view: iT,
            controller: oT
          })]
        })
      })
    }

    function RW(TT) {
      let {
        view: oT,
        controller: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: oT.islands.map((TT => (0, Jz.jsx)(mW, {
            island: TT,
            view: oT,
            aim: IT.aim
          }, TT.id)))
        }), null !== oT.almanac && (0, Jz.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: iT("skyblockGame:passageTitle")
          }), (0, Jz.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Jz.jsx)(xW, {
              phase: oT.almanac.phase
            }), oT.almanac.phaseName]
          }), (0, Jz.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Jz.jsx)(xW, {
              phase: oT.almanac.nextPhase
            }), oT.almanac.next]
          })]
        }), (0, Jz.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: iT("skyblockGame:keepersChairFavour")
          }), oT.aimed && (0, Jz.jsx)(Zz.J, {
            className: "SkyblockKeepersChairRest",
            disabled: !oT.canAim,
            onClick: () => {
              IT.aim(null)
            },
            children: iT("skyblockGame:keepersChairRest")
          })]
        }), null !== oT.status && (0, Jz.jsx)("p", {
          className: mz()("SkyblockKeepersChairStatus", "refused" === oT.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: oT.status.text
        })]
      })
    }

    function uW(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, jz.i)(Ci, oT.getSnapshot());
      if (!iT.enabled) return null;
      const zT = iT.freshCount > 0 ? IT("skyblockGame:reachLogOpenNews", {
        count: iT.freshCount
      }) : IT("skyblockGame:reachLogOpen");
      return (0, Jz.jsx)(Rz.e, {
        placement: "statBars",
        children: (0, Jz.jsxs)("button", {
          type: "button",
          className: mz()("SkyblockReachLogButton", iT.freshCount > 0 && "HasNews", iT.pending && "Pending"),
          "aria-label": zT,
          title: zT,
          onClick: oT.ask,
          children: [iT.news && (0, Jz.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${iT.newsToken}`), (0, Jz.jsx)("span", {
            className: mz()("SkyblockReachLogIcon", iT.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Jz.jsx)(vz.c, {
              itemName: Ji,
              amount: 0
            })
          }, `icon:${iT.newsToken}`), iT.freshCount > 0 && (0, Jz.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: iT.freshCount
          })]
        })
      })
    }

    function vW(TT) {
      let {
        gift: oT
      } = TT;
      return (0, Jz.jsx)("li", {
        className: mz()("SkyblockRegularsGift", oT.given && "Given"),
        children: oT.text
      })
    }

    function EW(TT) {
      let {
        regular: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("li", {
        className: mz()("SkyblockRegularsCard", oT.tagged ? "Tagged" : "Untagged", oT.resting && "Resting"),
        children: [(0, Jz.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: oT.fishName,
            children: (0, Jz.jsx)(vz.c, {
              itemName: oT.itemName,
              amount: 0
            })
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Jz.jsx)("h3", {
              children: oT.name
            }), (0, Jz.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: oT.fishName
            })]
          })]
        }), (0, Jz.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: oT.line
        }), (0, Jz.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: oT.size
          }), oT.tagged && (0, Jz.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: oT.resting ? IT("skyblockGame:regularsResting") : oT.meetings
          })]
        }), (0, Jz.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: oT.chance
        }), (0, Jz.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: oT.gifts.map((TT => (0, Jz.jsx)(vW, {
            gift: TT
          }, TT.text)))
        }), oT.history.length > 0 && (0, Jz.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: oT.history.map(((TT, oT) => (0, Jz.jsx)("li", {
            children: TT
          }, oT)))
        })]
      })
    }

    function fW(TT) {
      let {
        controller: oT,
        island: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)(), zT = (0, jz.i)(Iz, oT.getSnapshot()), kT = zT.islands.find((TT => TT.id === IT));
      if (!zT.enabled || void 0 === kT) return null;
      const WT = iT("skyblockGame:regularsOpen");
      return (0, Jz.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": WT,
        title: WT,
        onClick: () => {
          oT.openIsland(IT)
        },
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: iT("skyblockGame:regularsTitle")
        }), kT.regulars.map((TT => (0, Jz.jsx)("span", {
          className: mz()("SkyblockRegularsStripIcon", TT.tagged && "Tagged"),
          title: TT.name,
          children: (0, Jz.jsx)(vz.c, {
            itemName: TT.itemName,
            amount: 0
          })
        }, TT.id)))]
      })
    }

    function CW(TT) {
      var oT;
      let {
        controller: IT
      } = TT;
      const iT = (0, jz.i)(Iz, IT.getSnapshot()),
        {
          t: zT
        } = (0, Cz.t)(),
        kT = sz();
      if (!iT.enabled) return null;
      const WT = null !== (oT = iT.islands.find((TT => TT.id === iT.selected))) && void 0 !== oT ? oT : null;
      return (0, Jz.jsx)(qz.e, {
        show: iT.open,
        close: IT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: kT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: zT("skyblockGame:regularsTitle")
              }), (0, Jz.jsx)("p", {
                children: zT("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: IT.dismiss
            })]
          }), (0, Jz.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: iT.islands.map((TT => {
              const oT = TT.id === iT.selected;
              return (0, Jz.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": oT,
                "data-pad-tab": !0,
                "data-pad-selected": oT ? "true" : void 0,
                className: mz()("SkyblockReachLogTab", `Island-${TT.id}`, oT && "Selected", TT.charm.given && "GoldPage"),
                onClick: () => {
                  IT.selectIsland(TT.id)
                },
                children: (0, Jz.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: TT.name
                })
              }, TT.id)
            }))
          }), (0, Jz.jsxs)("div", {
            className: mz()("SkyblockRegularsPage", null !== WT && `Island-${WT.id}`),
            role: "tabpanel",
            children: [(0, Jz.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: zT("skyblockGame:regularsHow")
            }), null !== WT && (0, Jz.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: WT.regulars.map((TT => (0, Jz.jsx)(EW, {
                regular: TT
              }, TT.id)))
            })]
          }), null !== WT && (0, Jz.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Jz.jsx)("span", {
              className: mz()("SkyblockRegularsCharm", WT.charm.given && "Given"),
              children: WT.charm.text
            })
          })]
        })
      })
    }
    const jW = [{
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
      JW = Array.from({
        length: 6
      }, ((TT, oT) => ({
        "--x": `${(88*(.618034*oT%1)).toFixed(1)}%`,
        "--y": `${(10+37*oT%70).toFixed(1)}%`,
        "--size": 7 + oT % 3 * 3 + "rem",
        "--drift-x": 3 * (oT % 3 - 1) + "rem",
        "--drift-y": 2 * (oT % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + oT % 4 * 3 + "s",
        "--delay": 2.5 * -oT + "s"
      }))),
      UW = Array.from({
        length: 14
      }, ((TT, oT) => ({
        "--left": `${(3+94*((.618034*oT+.3)%1)).toFixed(1)}%`,
        "--size": 4 + oT % 4 * 2 + "px",
        "--sway": oT % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*oT%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*oT%12).toFixed(2)}s`
      }))),
      aW = (0, uT.memo)((function(TT) {
        let {
          island: oT
        } = TT;
        return (0, Jz.jsxs)("div", {
          className: mz()("SkyblockReachLogDepths", null !== oT && `Island-${oT}`),
          "aria-hidden": "true",
          children: [jW.map(((TT, oT) => (0, Jz.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: TT
          }, `shaft${oT}`))), JW.map(((TT, oT) => (0, Jz.jsx)("span", {
            className: mz()("SkyblockReachLogMote", oT % 2 === 1 && "Violet"),
            style: TT
          }, `mote${oT}`))), UW.map(((TT, oT) => (0, Jz.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: TT
          }, `bubble${oT}`)))]
        })
      })),
      YW = 100;

    function QW(TT) {
      let {
        view: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)();
      if (null === oT || 0 === oT.total) return null;
      const iT = YW * oT.aspect,
        zT = IT("skyblockGame:hiddenWatersCount", {
          found: oT.found,
          total: oT.total
        });
      return (0, Jz.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${IT("skyblockGame:hiddenWatersTitle")}: ${zT}`,
        children: [(0, Jz.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${iT}`,
          "aria-hidden": "true",
          children: [oT.islands.map(((TT, oT) => (0, Jz.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (TT.left + TT.width / 2) * YW,
            cy: (TT.top + TT.height / 2) * iT,
            rx: TT.width / 2 * YW,
            ry: TT.height / 2 * iT
          }, oT))), oT.pins.map(((TT, oT) => (0, Jz.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: TT.left * YW,
            cy: TT.top * iT,
            r: 13
          }, oT)))]
        }), (0, Jz.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: IT("skyblockGame:hiddenWatersTitle")
          }), (0, Jz.jsx)("span", {
            className: oT.found === oT.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: zT
          })]
        })]
      })
    }

    function OW(TT) {
      let {
        view: oT,
        island: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)(), zT = null === oT || void 0 === oT ? void 0 : oT.glimpses.get(IT);
      return void 0 === zT || 0 === zT.length ? null : (0, Jz.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: iT("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Jz.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: zT.map((TT => (0, Jz.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Jz.jsx)(vz.c, {
              itemName: TT,
              amount: 0
            })
          }, TT)))
        })]
      })
    }
    const HW = ["Bronze", "Silver", "Gold"],
      nW = [{
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
      qW = nW.slice(0, 2);

    function ZW(TT) {
      return TT ? nW : qW
    }

    function lW(TT) {
      let {
        fish: oT,
        letGoShown: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [HW.map(((TT, IT) => {
          const zT = IT < oT.marks;
          return (0, Jz.jsx)("span", {
            className: mz()("SkyblockReachLogPip", TT, zT && "Earned", zT && oT.fresh && IT === oT.marks - 1 && "Newest"),
            title: iT(ji[IT])
          }, TT)
        })), (0, Jz.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), ZW(IT).map(((TT, IT) => (0, Jz.jsx)("span", {
          className: mz()("SkyblockReachLogRibbon", TT.className, !0 === oT.ribbons[IT] && "Earned"),
          title: iT(TT.titleKey)
        }, TT.className)))]
      })
    }

    function sW(TT) {
      let {
        letGoShown: oT,
        haloShown: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Jz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: iT("skyblockGame:reachLogMarks"),
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), iT("skyblockGame:reachLogLegendMarks")]
        }), ZW(oT).map((TT => (0, Jz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: iT(TT.titleKey),
          children: [(0, Jz.jsx)("span", {
            className: mz()("SkyblockReachLogRibbon", TT.className, "Earned")
          }), iT(TT.legendKey)]
        }, TT.className))), (0, Jz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: iT("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), iT("skyblockGame:reachLogLegendGlimmer")]
        }), IT && (0, Jz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: iT("skyblockGame:reachLogHaloTitle"),
          children: [(0, Jz.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), iT("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function tW(TT) {
      let {
        returner: oT
      } = TT;
      return (0, Jz.jsxs)("div", {
        className: mz()("SkyblockReachLogReturner", oT.back && "Back"),
        children: [(0, Jz.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Jz.jsx)(vz.c, {
            itemName: oT.itemName,
            amount: 0
          })
        }), (0, Jz.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: oT.line
        })]
      })
    }

    function GW(TT) {
      let {
        fish: oT,
        letGoShown: IT
      } = TT;
      const {
        t: iT
      } = (0, Cz.t)();
      return (0, Jz.jsxs)("li", {
        className: mz()("SkyblockReachLogCard", oT.caught ? "Caught" : "Unknown", oT.marks >= 3 && "GoldCard", oT.fresh && "Fresh", oT.visitor && "Visitor"),
        children: [oT.visitor && (0, Jz.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: iT("skyblockGame:reachLogVisitor")
        }), oT.fresh && Array.from({
          length: 4
        }, ((TT, oT) => (0, Jz.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, oT))), (0, Jz.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [oT.halo && (0, Jz.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: iT("skyblockGame:reachLogHaloTitle")
          }), (0, Jz.jsx)(vz.c, {
            itemName: oT.itemName,
            amount: 0
          }), oT.glimmer && (0, Jz.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: iT("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Jz.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: oT.name
        }), (0, Jz.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: oT.chance
        }), (0, Jz.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: oT.best
        }), (0, Jz.jsx)(lW, {
          fish: oT,
          letGoShown: IT
        })]
      })
    }

    function pW(TT) {
      let {
        page: oT,
        letGoShown: IT,
        hiddenWaters: iT
      } = TT;
      const {
        t: zT
      } = (0, Cz.t)();
      return oT.awake ? (0, Jz.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: oT.fish.map((TT => (0, Jz.jsx)(GW, {
          fish: TT,
          letGoShown: IT
        }, TT.itemName)))
      }) : (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: zT("skyblockGame:reachLogAsleep")
        }), (0, Jz.jsx)(OW, {
          view: iT,
          island: oT.id
        })]
      })
    }

    function bW(TT) {
      var oT, IT;
      let {
        controller: iT,
        regulars: zT,
        hiddenWaters: kT
      } = TT;
      const WT = (0, jz.i)(Ci, iT.getSnapshot()),
        XT = function(TT) {
          return (0, jz.i)(Xz, TT.getSnapshot())
        }(kT),
        BT = (0, jz.i)(Iz, zT.getSnapshot()),
        {
          t: FT
        } = (0, Cz.t)(),
        ST = sz();
      if (!WT.enabled) return null;
      const DT = null !== (oT = WT.pages.find((TT => TT.id === WT.selected))) && void 0 !== oT ? oT : null;
      return (0, Jz.jsx)(qz.e, {
        show: WT.open,
        close: iT.dismiss,
        togglePointerLock: !1,
        className: mz()("SkyblockSkillsOverlay", BT.open && "SkyblockReachLogUnderLedger"),
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: ST,
          onKeyDown: lz,
          children: [(0, Jz.jsx)(aW, {
            island: null !== (IT = null === DT || void 0 === DT ? void 0 : DT.id) && void 0 !== IT ? IT : null
          }), (0, Jz.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: FT("skyblockGame:reachLogTitle")
              }), (0, Jz.jsx)("p", {
                children: FT("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Jz.jsx)(QW, {
              view: XT
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: iT.dismiss
            })]
          }), (0, Jz.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: WT.pages.map((TT => {
              const oT = TT.id === WT.selected,
                IT = TT.fish.some((TT => TT.fresh));
              return (0, Jz.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": oT,
                "data-pad-tab": !0,
                "data-pad-selected": oT ? "true" : void 0,
                className: mz()("SkyblockReachLogTab", `Island-${TT.id}`, oT && "Selected", !TT.awake && "Asleep", TT.gold && "GoldPage", IT && "HasNews"),
                onClick: () => {
                  iT.selectPage(TT.id)
                },
                children: [(0, Jz.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: TT.name
                }), TT.awake && (0, Jz.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: FT("skyblockGame:reachLogCaughtCount", {
                    caught: TT.caught,
                    total: TT.total
                  })
                })]
              }, TT.id)
            }))
          }), (0, Jz.jsxs)("div", {
            className: mz()("SkyblockReachLogPage", null !== DT && `Island-${DT.id}`),
            role: "tabpanel",
            children: [null !== DT && (0, Jz.jsx)(pW, {
              page: DT,
              letGoShown: WT.letGoShown,
              hiddenWaters: XT
            }), !0 === (null === DT || void 0 === DT ? void 0 : DT.awake) && null !== DT.returner && (0, Jz.jsx)(tW, {
              returner: DT.returner
            }), !0 === (null === DT || void 0 === DT ? void 0 : DT.awake) && (0, Jz.jsx)(fW, {
              controller: zT,
              island: DT.id
            })]
          }), (0, Jz.jsx)("footer", {
            className: mz()("SkyblockReachLogFooter", null !== DT && `Island-${DT.id}`, !0 === (null === DT || void 0 === DT ? void 0 : DT.gold) && "GoldPage"),
            children: !0 === (null === DT || void 0 === DT ? void 0 : DT.gold) ? (0, Jz.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: FT("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Jz.jsxs)(Jz.Fragment, {
              children: [(0, Jz.jsx)(sW, {
                letGoShown: WT.letGoShown,
                haloShown: !0 === (null === DT || void 0 === DT ? void 0 : DT.fish.some((TT => TT.halo)))
              }), (0, Jz.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: FT("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var yW = IT(4311);

    function NW(TT) {
      let {
        conversation: oT,
        completedLabel: IT
      } = TT;
      return (0, Jz.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Jz.jsxs)("header", {
          children: [(0, Jz.jsx)("h3", {
            children: oT.questName
          }), oT.completed && (0, Jz.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: IT
          })]
        }), oT.lines.map((TT => (0, Jz.jsx)(yW.d, {
          display: TT.display
        }, TT.key)))]
      })
    }

    function PW(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, jz.i)(Fz, oT.getSnapshot()), zT = sz();
      if (!iT.enabled) return null;
      const kT = !iT.loading && 0 === iT.conversations.length;
      return (0, Jz.jsx)(qz.e, {
        show: iT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: IT("skyblockDialogue:title")
              }), (0, Jz.jsx)("p", {
                children: IT("skyblockDialogue:intro")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: oT.dismiss
            })]
          }), (0, Jz.jsxs)("div", {
            className: mz()("SkyblockDialogueBody", {
              SingleColumn: null !== iT.questFocus || 0 === iT.characters.length
            }),
            children: [null === iT.questFocus && iT.characters.length > 0 && (0, Jz.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: iT.characters.map((TT => (0, Jz.jsx)(Zz.e, {
                className: mz()("SkyblockDialogueCharacter", {
                  Selected: TT.selected
                }),
                onClick: () => {
                  oT.selectCharacter(TT.id)
                },
                children: (0, Jz.jsx)(Ez.c, {
                  text: TT.styling
                })
              }, TT.id)))
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== iT.questFocus && (0, Jz.jsx)(Zz.e, {
                className: "SkyblockDialogueBack",
                onClick: oT.showCharacters,
                children: IT("skyblockDialogue:allCharacters")
              }), iT.loading && (0, Jz.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: IT("skyblockDialogue:loading")
              }), kT && (0, Jz.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: IT(null === iT.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), iT.conversations.map((TT => (0, Jz.jsx)(NW, {
                conversation: TT,
                completedLabel: iT.completedLabel
              }, TT.questId)))]
            })]
          })]
        })
      })
    }

    function dW(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(cz, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz();
      return IT.enabled ? (0, Jz.jsx)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: iT("skyblockGame:autographBook")
              }), (0, Jz.jsx)("p", {
                children: iT("skyblockGame:autographBookIntro")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              onClick: oT.dismiss
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Jz.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Jz.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Jz.jsx)("strong", {
                  children: IT.total
                }), (0, Jz.jsx)("span", {
                  children: iT("skyblockGame:autographTotal")
                })]
              }), (0, Jz.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Jz.jsx)("strong", {
                  children: IT.rankTotal
                }), (0, Jz.jsx)("span", {
                  children: iT("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === IT.entries.length ? (0, Jz.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: iT("skyblockGame:autographBookEmpty")
            }) : (0, Jz.jsx)("ul", {
              className: "SkyblockAutographList",
              children: IT.entries.map((TT => (0, Jz.jsxs)("li", {
                className: mz()("SkyblockAutograph", {
                  Ranked: null !== TT.rank
                }),
                style: null === TT.rank ? void 0 : {
                  color: TT.rank.colour
                },
                children: [null !== TT.rank && (0, Jz.jsx)(Kk.e, {
                  className: "SkyblockAutographRankIcon",
                  name: TT.rank.icon,
                  kit: (0, Kk.f)(TT.rank.icon)
                }), (0, Jz.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Jz.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: TT.name
                  }), (0, Jz.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== TT.rank && (0, Jz.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: TT.rank.label
                    }), (0, Jz.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: TT.signedOn
                    })]
                  })]
                })]
              }, TT.key)))
            })]
          })]
        })
      }) : null
    }
    const VW = (0, uT.memo)((function(TT) {
        let {
          controller: oT
        } = TT;
        return (0, Jz.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: oT.display.mountWaypoint,
          children: [(0, Jz.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Jz.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Jz.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Jz.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Jz.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Jz.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      TX = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function oX(TT) {
      return "next" === TT.phase ? "\u2192" : TX[TT.kind]
    }
    const IX = (0, uT.memo)((function(TT) {
      let {
        controller: oT,
        display: IT
      } = TT;
      const iT = (0, jz.i)(SI, oT.getNotificationSnapshot()),
        [zT, kT] = (0, uT.useState)(!1);
      return (0, jz.g)("qteStateUpdated", (TT => {
        kT(TT.isActive)
      })), (0, Jz.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (zT ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [iT && (0, Jz.jsxs)("div", {
          className: `SkyblockQuestNotification ${iT.kind} ${iT.phase}`,
          style: {
            "--quest-notification-duration": `${iT.durationMs}ms`,
            ...iT.accent && {
              "--quest-notification-accent": iT.accent
            }
          },
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (iT.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: oX(iT)
            }), iT.iconItem && (0, Jz.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Jz.jsx)(vz.c, {
                itemName: iT.iconItem,
                amount: 0
              })
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: iT.title
            }), (0, Jz.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Jz.jsx)(Bk.c, {
                text: iT.name
              })
            }), iT.description && (0, Jz.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Jz.jsx)(Bk.c, {
                text: iT.description
              })
            }), iT.reward && (0, Jz.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Jz.jsx)(Bk.c, {
                text: iT.reward
              })
            })]
          })]
        }, iT.token), (null === iT || void 0 === iT ? void 0 : iT.waypointNameKey) && (0, Jz.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": iT.waypointNameKey,
          "data-notification-token": iT.token,
          ref: IT.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${iT.token}`)]
      })
    }));

    function iX(TT) {
      const oT = parseInt(TT.replace("#", ""), 16);
      return `${oT>>16&255}, ${oT>>8&255}, ${255&oT}`
    }
    const zX = (0, uT.memo)((function(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, jz.i)(OI, oT.getSnapshot());
      if (!iT) return null;
      const zT = "arrival" === iT.phase;
      return (0, Jz.jsxs)("div", {
        className: mz()("SkyblockPortalTransit", {
          Departure: !zT,
          Arrival: zT
        }),
        style: {
          "--portal-rgb": iX(iT.colour),
          "--portal-duration": `${iT.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Jz.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Jz.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            oT.finishArrival(iT.token)
          }
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Jz.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !zT && (0, Jz.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: IT("skyblockGame:portalTransitHeading")
          }), (0, Jz.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: IT(iT.zoneNameKey)
          })]
        })]
      }, iT.token)
    }));

    function kX() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function WX() {
      const TT = document.querySelector(".SkyblockHudCoins"),
        oT = null === TT || void 0 === TT ? void 0 : TT.getBoundingClientRect();
      return oT && oT.width > 0 ? {
        x: oT.left + Math.min(oT.width, 24) / 2,
        y: oT.top + oT.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function XX(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2
      }
    }

    function BX() {
      var TT;
      const oT = null === (TT = document.querySelector(".HotBar")) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
      return oT && oT.width > 0 ? XX(oT) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function FX(TT) {
      let {
        items: oT,
        origins: IT,
        target: iT
      } = TT;
      return (0, Jz.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: oT.map(((TT, oT) => {
          const zT = IT[oT];
          return (0, Jz.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${zT.x}px`,
              top: `${zT.y}px`,
              "--item-dx": iT.x - zT.x + "px",
              "--item-dy": iT.y - zT.y + "px",
              "--item-delay": 2e3 + 160 * oT + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Jz.jsx)(vz.c, {
              itemName: TT.dailyRewardItemName,
              amount: 0
            })
          }, TT.dailyRewardItemName)
        }))
      })
    }

    function SX(TT, oT) {
      const IT = -Math.PI / 2 + 1.25 * (TT / (oT - 1) * 2 - 1),
        iT = 70 + TT % 3 * 22;
      return {
        x: Math.cos(IT) * iT,
        y: Math.sin(IT) * iT * .7
      }
    }

    function DX(TT) {
      let {
        origin: oT,
        target: IT,
        count: iT
      } = TT;
      const zT = [];
      for (let kT = 0; kT < iT; kT++) {
        const TT = SX(kT, iT);
        zT.push((0, Jz.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${oT.x}px`,
            top: `${oT.y}px`,
            "--coin-bx": `${TT.x}px`,
            "--coin-by": `${TT.y}px`,
            "--coin-dx": IT.x - oT.x + "px",
            "--coin-dy": IT.y - oT.y + "px",
            "--coin-delay": `${sI(kT,iT)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Jz.jsx)(vz.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, kT))
      }
      return (0, Jz.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: zT
      })
    }

    function LX(TT) {
      let {
        day: oT
      } = TT;
      const IT = vT[oT - 1];
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Jz.jsx)(vz.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, fz.d)(IT.dailyRewardCoins)]
        }), IT.dailyRewardItems.map((TT => (0, Jz.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Jz.jsx)(vz.c, {
            itemName: TT.dailyRewardItemName,
            amount: 0
          }), "\xd7", TT.dailyRewardItemAmount]
        }, TT.dailyRewardItemName)))]
      })
    }

    function xX(TT) {
      let {
        day: oT
      } = TT;
      const IT = fT(oT);
      return (0, Jz.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: vT.map(((TT, iT) => {
          const zT = iT + 1;
          return (0, Jz.jsxs)("li", {
            className: mz()("SkyblockDailyRewardTile", {
              Claimed: zT < oT && zT !== IT,
              Today: zT === oT,
              Tomorrow: zT === IT,
              Jackpot: zT === ET
            }),
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: zT
            }), (0, Jz.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Jz.jsx)(vz.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, fz.d)(TT.dailyRewardCoins)]
            }), TT.dailyRewardItems.map((TT => (0, Jz.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Jz.jsx)(vz.c, {
                itemName: TT.dailyRewardItemName,
                amount: 0
              }), "\xd7", TT.dailyRewardItemAmount]
            }, TT.dailyRewardItemName)))]
          }, zT)
        }))
      })
    }

    function cX(TT) {
      let {
        view: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, uT.useRef)(null), zT = (0, uT.useRef)(null), [kT, WT] = (0, uT.useState)(null);
      (0, uT.useLayoutEffect)((() => {
        var TT;
        const oT = null === (TT = iT.current) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
        if (oT) {
          var IT, kT;
          const TT = Array.from(null !== (IT = null === (kT = zT.current) || void 0 === kT ? void 0 : kT.children) && void 0 !== IT ? IT : [], (TT => XX(TT.getBoundingClientRect())));
          WT({
            origin: XX(oT),
            target: WX(),
            itemOrigins: TT,
            itemTarget: BX()
          })
        }
      }), []);
      const XT = fT(oT.day),
        BT = function(TT, oT) {
          const [IT, iT] = (0, uT.useState)((() => kX() ? TT : 0));
          return (0, uT.useEffect)((() => {
            if (kX()) return;
            const IT = performance.now();
            let zT = 0;
            const kT = WT => {
              const XT = Math.min(Math.max((WT - IT) / oT, 0), 1);
              iT(Math.round(TT * (1 - (1 - XT) ** 3))), XT < 1 && (zT = requestAnimationFrame(kT))
            };
            return zT = requestAnimationFrame(kT), () => {
              cancelAnimationFrame(zT)
            }
          }), [TT, oT]), IT
        }(oT.coins, 450);
      return (0, Jz.jsxs)("div", {
        className: mz()("SkyblockDailyReward", {
          Jackpot: oT.day === ET
        }),
        style: {
          "--daily-duration": `${oT.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Jz.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Jz.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: IT("skyblockGame:dailyRewardTitle")
            }), (0, Jz.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: IT("skyblockGame:dailyRewardDay", {
                day: String(oT.day)
              })
            })]
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: iT,
            children: [(0, Jz.jsx)(vz.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Jz.jsxs)("span", {
              children: ["+", (0, fz.d)(BT)]
            })]
          }), oT.items.length > 0 && (0, Jz.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: zT,
            children: oT.items.map((TT => (0, Jz.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Jz.jsx)(vz.c, {
                itemName: TT.dailyRewardItemName,
                amount: 0
              }), "\xd7", TT.dailyRewardItemAmount]
            }, TT.dailyRewardItemName)))
          }), (0, Jz.jsx)(xX, {
            day: oT.day
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [IT("skyblockGame:dailyRewardComeBack"), (0, Jz.jsx)(LX, {
              day: XT
            })]
          })]
        }), null !== kT && (0, Jz.jsx)(DX, {
          origin: kT.origin,
          target: kT.target,
          count: oT.flyingCoins
        }), null !== kT && kT.itemOrigins.length === oT.items.length && (0, Jz.jsx)(FX, {
          items: oT.items,
          origins: kT.itemOrigins,
          target: kT.itemTarget
        })]
      })
    }
    const KX = (0, uT.memo)((function(TT) {
        let {
          controller: oT
        } = TT;
        const IT = (0, jz.i)(qI, oT.getSnapshot());
        return IT ? (0, Jz.jsx)(cX, {
          view: IT
        }, IT.token) : null
      })),
      MX = "Gold Coin";

    function rX(TT) {
      return 650 + 220 * TT
    }

    function AX(TT) {
      return {
        "--letter-delay": `${rX(TT)}ms`,
        "--letter-land": `${rX(TT)+300}ms`
      }
    }

    function gX(TT) {
      let {
        letterCount: oT
      } = TT;
      return (0, Jz.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Jz.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Jz.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Jz.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: oT
        }, ((TT, oT) => (0, Jz.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: AX(oT),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, oT)))]
      })
    }

    function hX(TT) {
      var oT, IT, iT;
      let {
        letter: zT,
        index: kT
      } = TT;
      const {
        t: WT
      } = (0, Cz.t)(), XT = null !== (oT = null === (IT = zT.items[0]) || void 0 === IT ? void 0 : IT.itemName) && void 0 !== oT ? oT : MX;
      return (0, Jz.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: AX(kT),
        children: [(0, Jz.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Jz.jsx)(vz.c, {
            itemName: XT,
            amount: 0
          })
        }), (0, Jz.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: WT(zT.reasonKey, null !== (iT = zT.reasonParams) && void 0 !== iT ? iT : void 0)
        }), (0, Jz.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [zT.coins > 0 && (0, Jz.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Jz.jsx)(vz.c, {
              itemName: MX,
              amount: 0
            }), "+", (0, fz.d)(zT.coins)]
          }), zT.items.map(((TT, oT) => (0, Jz.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Jz.jsx)(vz.c, {
              itemName: TT.itemName,
              amount: 0
            }), TT.label, " \xd7", TT.amount]
          }, oT)))]
        })]
      })
    }

    function wX(TT) {
      let {
        view: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)();
      return (0, Jz.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${oT.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${rX(oT.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Jz.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Jz.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Jz.jsx)(gX, {
              letterCount: oT.letters.length
            }), (0, Jz.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: IT("skyblockGame:mailboxTitle")
            })]
          }), (0, Jz.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: oT.letters.map(((TT, oT) => (0, Jz.jsx)(hX, {
              letter: TT,
              index: oT
            }, oT)))
          }), oT.more > 0 && (0, Jz.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: IT("skyblockGame:mailboxMore", {
              count: String(oT.more)
            })
          })]
        })
      })
    }
    const mX = (0, uT.memo)((function(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(GI, oT.getSnapshot());
      return IT ? (0, Jz.jsx)(wX, {
        view: IT
      }, IT.token) : null
    }));

    function eX(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, jz.i)(Hi, oT.getSnapshot());
      if (null === iT) return null;
      const zT = iT.fullSet ? "empty" === iT.fuelState ? {
        text: IT("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: IT("skyblockGame:magmawardHudFullSet", {
          worn: String(iT.wornCount)
        }),
        tone: "partial"
      };
      return (0, Jz.jsx)(Rz.e, {
        placement: "statBars",
        children: (0, Jz.jsxs)("div", {
          className: mz()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${iT.fuelState}`, {
            "SkyblockMagmawardHud-partial": !iT.fullSet,
            "SkyblockMagmawardHud-armed": iT.fullSet && "empty" !== iT.fuelState
          }),
          children: [null !== iT.flare && (0, Jz.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${iT.flare}`
          }, `flare:${iT.flareToken}`), (0, Jz.jsx)("div", {
            className: mz()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: iT.setLit
            }),
            children: iT.pieces.map(((TT, oT) => (0, Jz.jsx)("div", {
              className: mz()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: TT.worn,
                SkyblockMagmawardPieceJustWorn: TT.justWorn
              }),
              children: (0, Jz.jsx)(vz.c, {
                itemName: TT.itemName,
                amount: 0
              })
            }, `${oT}:${TT.wornToken}`)))
          }, `pieces:${iT.setLitToken}`), (0, Jz.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Jz.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Jz.jsxs)("div", {
              className: mz()("SkyblockMagmawardFuelCounter", iT.pulse && `SkyblockMagmawardFuelCounter-${iT.pulse}`),
              children: [(0, Jz.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Jz.jsx)(vz.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Jz.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: iT.fuel
              })]
            }, `counter:${iT.pulseToken}`), "burn" === iT.pulse && (0, Jz.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${iT.pulseToken}`)]
          }), zT && (0, Jz.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${zT.tone} SmallTextBold`,
            children: zT.text
          })]
        })
      })
    }

    function RX(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT,
        selectedLanguage: iT
      } = (0, Cz.t)(), zT = (0, jz.i)(qi, oT.getSnapshot());
      return null === zT ? null : (0, Jz.jsx)(Rz.e, {
        placement: "statBars",
        children: (0, Jz.jsxs)("div", {
          className: mz()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: zT.inRange
          }),
          style: {
            "--glowtide-colour": zT.colour
          },
          "aria-label": IT("skyblockGame:glowtideChipLabel"),
          children: [(0, Jz.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), zT.inRange ? (0, Jz.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: IT("skyblockGame:glowtideChipInRange")
          }, `call:${zT.inRangeToken}`) : (0, Jz.jsxs)(Jz.Fragment, {
            children: [(0, Jz.jsx)("div", {
              ref: oT.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Jz.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: IT("skyblockGame:waypointDistance", {
                distance: mT(zT.distance, iT.code)
              })
            })]
          })]
        })
      })
    }

    function uX(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, jz.i)(li, oT.getSnapshot());
      return null === iT ? null : (0, Jz.jsx)(Rz.e, {
        placement: "statBars",
        children: (0, Jz.jsxs)("div", {
          className: mz()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: iT.full
          }),
          "aria-label": IT("skyblockGame:glowMeterLabel", {
            fill: String(iT.fill),
            fD: String(iT.fD)
          }),
          children: [iT.burst && (0, Jz.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${iT.burstToken}`), (0, Jz.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Jz.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${iT.ratio})`
              }
            }), iT.gained && (0, Jz.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${iT.gainToken}`), iT.full && Array.from({
              length: 5
            }, ((TT, oT) => (0, Jz.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, oT)))]
          }), iT.full && iT.rares.map((TT => (0, Jz.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Jz.jsx)(vz.c, {
              itemName: TT,
              amount: 0
            })
          }, TT))), iT.ready && (0, Jz.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Jz.jsx)("span", {
              children: IT("skyblockGame:glowMeterReady")
            })
          }, `ready:${iT.fullToken}`)]
        })
      })
    }

    function vX(TT) {
      let {
        controller: oT
      } = TT;
      const {
        t: IT
      } = (0, Cz.t)(), iT = (0, jz.i)(ti, oT.getSnapshot());
      if (null === iT) return null;
      const zT = "waiting" === iT.phase,
        kT = {
          animationDuration: `${iT.waitMs}ms`,
          animationDelay: -iT.elapsedMs + "ms"
        },
        WT = zT ? void 0 : {
          animationDuration: `${iT.waitMs}ms`
        };
      return (0, Jz.jsxs)("div", {
        className: zT ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [zT && (0, Jz.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((TT, oT) => (0, Jz.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, oT))), (0, Jz.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: kT
          }), (0, Jz.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Jz.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Jz.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: kT
            })]
          }), (0, Jz.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Jz.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: WT,
          children: IT(iT.line)
        }, iT.lineIndex)]
      }, iT.token)
    }

    function EX(TT) {
      let {
        chart: oT,
        showHere: IT,
        className: iT
      } = TT;
      return (0, Jz.jsx)("div", {
        className: mz()("SkyblockTideChartGrid", iT, null !== oT.pictureName && "Complete"),
        "aria-hidden": "true",
        children: oT.cells.map(((TT, iT) => {
          const zT = 0 !== (oT.pulseCells & 1 << iT),
            kT = oT.castCell === iT;
          return (0, Jz.jsx)("span", {
            className: mz()("SkyblockTideChartCell", `Cell-${TT}`, zT && "Pulse", kT && "Cast", IT && oT.hereCell === iT && "Here")
          }, `${iT}:${zT?`p${oT.pulseToken}`:""}:${kT?`c${oT.castToken}`:""}`)
        }))
      })
    }

    function fX(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(bi, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = IT.chip;
      if (!IT.enabled || null === zT) return null;
      const kT = iT("skyblockGame:tideChartsChipLabel", {
        island: zT.islandName,
        lit: String(zT.lit),
        ink: String(zT.ink)
      });
      return (0, Jz.jsx)(Rz.e, {
        placement: "statBars",
        children: (0, Jz.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: mz()("SkyblockTideChartsChip", IT.open && "Open", null !== zT.pictureName && "Complete"),
          "aria-label": kT,
          title: kT,
          onMouseDown: TT => {
            TT.preventDefault()
          },
          onClick: oT.toggle,
          children: [(0, Jz.jsx)(EX, {
            chart: zT,
            showHere: !1,
            className: "Mini"
          }), (0, Jz.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [zT.lit, "/", zT.ink]
          })]
        })
      })
    }

    function CX(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, jz.i)(bi, oT.getSnapshot()),
        {
          t: iT
        } = (0, Cz.t)(),
        zT = sz(),
        kT = IT.card;
      return IT.enabled && null !== kT ? (0, Jz.jsx)(qz.e, {
        show: IT.open,
        close: oT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Jz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: lz,
          children: [(0, Jz.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Jz.jsxs)("div", {
              children: [(0, Jz.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: iT("skyblockGame:tideChartsTitle")
              }), (0, Jz.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: iT("skyblockGame:tideChartsIntro")
              })]
            }), (0, Jz.jsx)(Zz.j, {
              padIgnore: !0,
              ariaLabel: iT("skyblockGame:tideChartsClose"),
              onClick: oT.dismiss
            })]
          }), IT.tabs.length > 1 && (0, Jz.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": iT("skyblockGame:tideChartsIslands"),
            children: IT.tabs.map((TT => (0, Jz.jsx)("button", {
              type: "button",
              className: mz()("SkyblockTideChartsTab", TT.selected && "Selected"),
              "aria-pressed": TT.selected,
              onClick: () => {
                oT.PL(TT.island)
              },
              children: TT.name
            }, TT.island)))
          }), (0, Jz.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Jz.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": kT.gridLabel,
              children: (0, Jz.jsx)(EX, {
                chart: kT,
                showHere: !0,
                className: "Large"
              })
            }), (0, Jz.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Jz.jsx)("h3", {
                children: kT.islandName
              }), (0, Jz.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: kT.litText
              }), null === kT.pictureName ? (0, Jz.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: iT("skyblockGame:tideChartsPictureHidden")
              }) : (0, Jz.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: iT("skyblockGame:tideChartsPictureRevealed", {
                  picture: kT.pictureName
                })
              }, kT.pictureName), (0, Jz.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Jz.jsxs)("li", {
                  children: [(0, Jz.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), iT("skyblockGame:tideChartsLegendLit")]
                }), (0, Jz.jsxs)("li", {
                  children: [(0, Jz.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), iT("skyblockGame:tideChartsLegendClear")]
                }), null !== kT.hereCell && (0, Jz.jsxs)("li", {
                  children: [(0, Jz.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), iT("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Jz.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Jz.jsx)("span", {
                  children: IT.turnsText
                }), (0, Jz.jsx)("span", {
                  children: IT.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function jX(TT) {
      var oT;
      let {
        controller: IT
      } = TT;
      const {
        selectedLanguage: iT
      } = (0, Cz.t)(), zT = iT.code;
      (0, uT.useEffect)((() => {
        IT.setTranslator(((TT, oT) => (0, Cz.p)(zT, TT, oT)), zT, ((TT, oT) => (0, Cz.n)(zT, TT, oT)))
      }), [IT, zT]);
      const kT = (0, jz.i)(LT, IT.map.getSnapshot()),
        {
          openInGameMenuName: WT
        } = (0, ez.k)(["openInGameMenuName"]);
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)(IX, {
          controller: IT.quests,
          display: IT.navigation.display
        }), kT.enabled && !WT && (0, Jz.jsx)(kk, {
          controller: IT.navigation
        }), (0, Jz.jsx)(Uz, {
          controller: IT,
          minimap: kT.enabled && (null === (oT = kT.presentation) || void 0 === oT ? void 0 : oT.minimap) && (0, Jz.jsx)(zk, {
            view: kT.presentation.minimap,
            navigation: IT.navigation,
            controller: IT.map
          }),
          children: (0, Jz.jsx)(ck, {
            controller: IT.quests,
            surface: "hud"
          })
        }), (0, Jz.jsx)(VW, {
          controller: IT.navigation
        }), (0, Jz.jsx)(zX, {
          controller: IT.portalTransit
        }), (0, Jz.jsx)(KX, {
          controller: IT.dailyReward
        }), (0, Jz.jsx)(mX, {
          controller: IT.mailbox
        }), (0, Jz.jsx)(eX, {
          controller: IT.magmaward
        }), (0, Jz.jsx)(RX, {
          controller: IT.glowtide
        }), (0, Jz.jsx)(cW, {
          controller: IT.passage
        }), (0, Jz.jsx)(fX, {
          controller: IT.tideCharts
        }), (0, Jz.jsx)(uX, {
          controller: IT.glowMeter
        }), (0, Jz.jsx)(uW, {
          controller: IT.reachLog
        }), (0, Jz.jsx)(vX, {
          controller: IT.hushWait
        }), (0, Jz.jsx)(wW, {
          controller: IT.lampLight
        }), (0, Jz.jsx)(Wk, {
          controller: IT.skills,
          surface: "hud"
        })]
      })
    }

    function JX(TT) {
      let {
        controller: oT
      } = TT;
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)(ik, {
          controller: oT.map,
          navigation: oT.navigation
        }), (0, Jz.jsx)(Wk, {
          controller: oT.skills,
          surface: "menu"
        }), (0, Jz.jsx)(ck, {
          controller: oT.quests,
          surface: "menu"
        }), (0, Jz.jsx)(yk, {
          controller: oT.dungeons
        }), (0, Jz.jsx)(dk, {
          controller: oT.collections
        }), (0, Jz.jsx)(oW, {
          controller: oT.questGraph
        }), (0, Jz.jsx)(WW, {
          controller: oT.forge
        }), (0, Jz.jsx)(LW, {
          controller: oT.smuggler
        }), (0, Jz.jsx)(eW, {
          controller: oT.keepersChair,
          lampLight: oT.lampLight
        }), (0, Jz.jsx)(bW, {
          controller: oT.reachLog,
          regulars: oT.regulars,
          hiddenWaters: oT.hiddenWaters
        }), (0, Jz.jsx)(CW, {
          controller: oT.regulars
        }), (0, Jz.jsx)(MW, {
          controller: oT.passage
        }), (0, Jz.jsx)(CX, {
          controller: oT.tideCharts
        }), (0, Jz.jsx)(PW, {
          controller: oT.dialogue
        }), (0, Jz.jsx)(dW, {
          controller: oT.autographs
        })]
      })
    }
    var UX = IT(35713);
    const aX = Ti + Xi;

    function YX(TT, oT, IT, iT, zT) {
      const kT = [],
        WT = [],
        XT = IT => {
          const iT = TT.playSound(oT, IT.sound, IT.volume, IT.rate);
          iT && (WT.push(iT), void 0 !== IT.cutAfter && kT.push(setTimeout((() => {
            iT.fade(iT.getVolume(), 0, 300)
          }), IT.cutAfter)))
        };
      for (const BT of function(TT, oT) {
          const IT = [{
            sound: "rpgKnifeSlice1",
            beat: Ti,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: Ti,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: Ti,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: Ti,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: Ti,
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
            sound: (0, UX.b)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: aX + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, UX.b)("bigDrumSwish"),
            beat: aX + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: aX + 60,
            lead: 180,
            volume: .5 + .06 * TT,
            rate: .82 + .07 * TT
          }];
          return TT >= 4 && IT.push({
            sound: "exp_levelup",
            beat: aX + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), oT && IT.push({
            sound: "trumpetFlare",
            beat: aX + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), IT.push({
            sound: "harp_pling",
            beat: oi,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), IT
        }(IT, iT)) zT ? kT.push(setTimeout((() => {
        XT(BT)
      }), Math.max(0, BT.beat - BT.lead / BT.rate))) : BT.beat !== Ti && "magicAccent2" !== BT.sound && "trumpetFlare" !== BT.sound || XT(BT);
      return () => {
        for (const TT of kT) clearTimeout(TT);
        for (const TT of WT) TT.fade(TT.getVolume(), 0, 120)
      }
    }
    class QX {
      constructor(TT) {
        this.deps = TT, this.pending = new Map, this.localHook = null
      }
      hookWaiting(TT, oT) {
        this.pending.delete(TT);
        const IT = this.deps.now();
        if (null === oT) {
          var iT;
          if ((null === (iT = this.localHook) || void 0 === iT ? void 0 : iT.hookId) === TT) {
            const TT = IT >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(TT)
          }
          return
        }
        const zT = IT + oT;
        this.settle(TT, zT) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(TT, {
          untilMs: IT + 1e3,
          biteAtMs: zT
        }))
      }
      getLocalHook() {
        var TT, oT;
        return null !== (TT = null === (oT = this.localHook) || void 0 === oT ? void 0 : oT.hookId) && void 0 !== TT ? TT : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const TT = this.deps.now();
        for (const [oT, {
            untilMs: IT,
            biteAtMs: iT
          }] of this.pending)(this.settle(oT, iT) || TT > IT) && this.pending.delete(oT)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(TT, oT) {
        const IT = this.deps.getLineOwner(TT);
        if (null === IT) return !1;
        if (!this.deps.isLocalPlayer(IT)) return !0;
        if (this.localHook = {
            hookId: TT,
            biteAtMs: oT
          }, !this.deps.isHushWaiting()) {
          const [oT, IT] = this.deps.getHookPosition(TT);
          this.deps.onCastLanded(oT, IT)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var OX = IT(3811);
    const HX = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      nX = {
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
    class qX {
      constructor(TT) {
        this.deps = TT, this.tell = null
      }
      receiveTell(TT) {
        let {
          biteTellTier: oT
        } = TT;
        this.tell = {
          tier: oT,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(TT) {
        const oT = this.tell;
        if (this.tell = null, !TT) return;
        const IT = null !== oT && this.deps.now() - oT.atMs <= 3e3 ? oT.tier : 0;
        this.deps.vibrate(HX[IT])
      }
      burstAtHook() {
        const TT = this.tell,
          oT = this.deps.getLocalHookPosition();
        null === TT || TT.burst || null === oT || (TT.burst = !0, this.deps.playParticles(function(TT, oT) {
          let [IT, iT, zT] = oT;
          const {
            count: kT,
            rise: WT,
            colour: XT
          } = nX[TT], [BT, FT, ST] = XT;
          return {
            texture: "glint",
            pos1: [IT - .3, iT, zT - .3],
            pos2: [IT + .3, iT + .2, zT + .3],
            dir1: [-.6, WT, -.6],
            dir2: [.6, 1.4 * WT, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: kT,
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
              minColor: [BT, FT, ST, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [BT, FT, ST, 0],
              maxColor: [BT, FT, ST, 0]
            }],
            blendMode: OX.h.Add,
            hideDist: 48
          }
        }(TT.tier, oT)))
      }
    }
    var ZX = IT(1220),
      lX = IT(1755),
      sX = IT(26);

    function tX(TT, oT) {
      return [{
        timeFraction: 0,
        minColor: [255 * TT[0], 255 * TT[1], 255 * TT[2], 1],
        maxColor: [255 * oT[0], 255 * oT[1], 255 * oT[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const GX = [0, 0, 0],
      pX = {
        texture: "glint",
        mipmaps: !1,
        fD: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: GX,
        dir2: GX,
        blendMode: OX.h.OneOne
      },
      bX = {
        ...pX,
        colorGradients: tX([1, .88, .38], [1, .65, .15])
      },
      yX = {
        ...pX,
        colorGradients: tX([.55, .95, 1], [.9, 1, 1])
      },
      NX = [.5, .5, .5],
      PX = {
        texture: "glint",
        mipmaps: !1,
        fD: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: tX([1, .12, .12], [1, .35, .2]),
        blendMode: OX.h.OneOne
      };
    class dX {
      constructor() {
        this.drops = new Map
      }
      Jc(TT, oT) {
        if ("overflowFlash" === oT.kind) {
          const [IT, iT, zT] = oT.position, kT = TT.createParticles(PX, {
            pos: [IT, iT, zT],
            half: NX
          });
          return kT.emit(18), void kT.stop()
        }
        this.drops.has(oT.itemId) || this.drops.set(oT.itemId, {
          owner: oT.owner,
          cosmetic: oT.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      dD(TT) {
        if (0 === this.drops.size) return;
        const oT = performance.now(),
          IT = TT.getCameraPosition();
        let iT = 0;
        for (const kT of this.drops.values()) null !== kT.particles && iT++;
        for (const [kT, WT] of this.drops) {
          const XT = TT.getPositionView(kT);
          if (null === XT) {
            var zT;
            if (WT.seen || oT - WT.markedAt > 5e3) null !== WT.particles && iT--, null === (zT = WT.particles) || void 0 === zT || zT.stop(), this.drops.delete(kT);
            continue
          }
          WT.cosmetic || !TT.isLocalPlayer(WT.owner) || WT.pickupDelayCleared || (TT.clearPickupDelay(kT), WT.pickupDelayCleared = !0);
          const BT = WT.lastPosition,
            FT = WT.seen && (XT[0] - BT[0]) ** 2 + (XT[1] - BT[1]) ** 2 + (XT[2] - BT[2]) ** 2 > 4e-4,
            ST = (XT[0] - IT[0]) ** 2 + (XT[1] - IT[1]) ** 2 + (XT[2] - IT[2]) ** 2 < 2025;
          WT.seen = !0, BT[0] = XT[0], BT[1] = XT[1], BT[2] = XT[2], FT && (WT.lastMovingAt = oT), null !== WT.particles && (!ST || oT - WT.lastMovingAt > 500) && (WT.particles.stop(), WT.particles = null, iT--), FT && ST && null === WT.particles && iT < 32 && (WT.particles = TT.createParticles(WT.cosmetic ? yX : bX, {
            pos: XT
          }), iT++), null !== WT.particles && (WT.particles.moveTo(XT), WT.particles.setEmitRate(FT ? 12 : 0)), !FT && null === WT.particles && oT - Math.max(WT.lastMovingAt, WT.markedAt) > 2e3 && this.drops.delete(kT)
        }
      }
      dispose() {
        for (const oT of this.drops.values()) {
          var TT;
          null === (TT = oT.particles) || void 0 === TT || TT.stop()
        }
        this.drops.clear()
      }
    }
    var VX = IT(193);
    const TB = VX.c.Xw * VX.c.playerEyeToHeightRatio;
    class oB {
      constructor(TT) {
        this.host = TT, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Jc(TT) {
        this.lava = TT, this.nextUpdateAt = 0
      }
      dD() {
        var TT;
        const oT = this.host.now();
        if (oT < this.nextUpdateAt) return;
        this.nextUpdateAt = oT + 250;
        const IT = this.host.playerPosition(),
          iT = IT && this.findNearest([IT[0], IT[1] + TB, IT[2]]);
        if (!iT || iT.distance >= 40) return void this.stop();
        const zT = .5 * Math.min(1, (40 - iT.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(zT) : this.loop = this.host.play("lavaFlow", zT, iT.position, 40 + TB, 9, !0), null === (TT = this.loop) || void 0 === TT || TT.setPosition(iT.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var TT;
        null === (TT = this.loop) || void 0 === TT || TT.stop(), this.loop = null
      }
      findNearest(TT) {
        let oT = -1,
          IT = 1 / 0;
        for (let iT = 0; iT < this.lava.length; iT += 3) {
          const zT = this.lava[iT] - TT[0],
            kT = this.lava[iT + 1] - TT[1],
            WT = this.lava[iT + 2] - TT[2],
            XT = zT * zT + kT * kT + WT * WT;
          XT < IT && (IT = XT, oT = iT)
        }
        return oT < 0 ? null : {
          position: [this.lava[oT], this.lava[oT + 1], this.lava[oT + 2]],
          distance: Math.sqrt(IT)
        }
      }
    }
    var IB = IT(1738),
      iB = IT(37632);
    const zB = {
      "Grey Portal": "Gray"
    };
    for (const SB of zT.vc) zB[`${SB} Portal`] = SB;
    const kB = Object.keys(zB),
      WB = Object.fromEntries(kB.map((TT => [TT, (0, zT.X)(zT.L[`${(0,zT.re)(zB[TT])}Team`])])));
    Object.fromEntries(kB.map((TT => [TT, zT.L[`${(0,zT.re)(zB[TT])}UiText`]])));
    class XB {
      constructor(TT, oT) {
        this.presentation = TT, this.portal = oT, this.unlocked = void 0
      }
      Jc(TT) {
        const oT = !1 === this.unlocked && TT;
        this.unlocked = TT, this.dD();
        const {
          min: IT,
          max: iT,
          unlockedBlock: zT
        } = this.portal;
        if (oT && this.presentation.hasChunk(...IT)) {
          const [TT, oT, kT] = WB[zT];
          this.presentation.playParticles({
            pos1: [...IT],
            pos2: iT.map((TT => TT + 1)),
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
              minColor: [TT, oT, kT, 1],
              maxColor: [Math.min(255, TT + 55), Math.min(255, oT + 55), Math.min(255, kT + 90), 1]
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
      dD() {
        var TT;
        const oT = this.unlocked ? this.portal.unlockedBlock : null !== (TT = this.portal.lockedBlock) && void 0 !== TT ? TT : "Light Gray Portal",
          {
            min: IT,
            max: iT
          } = this.portal;
        for (let zT = IT[0]; zT <= iT[0]; zT++)
          for (let TT = IT[1]; TT <= iT[1]; TT++)
            for (let kT = IT[2]; kT <= iT[2]; kT++) this.presentation.hasChunk(zT, TT, kT) && this.presentation.Gw(zT, TT, kT) !== oT && this.presentation.gC(zT, TT, kT, oT)
      }
    }
    const BB = {
        farming_1: {
          raises: TT => "NPC" === TT.type && "chef" === TT.variation,
          rise: .4
        },
        fishing_1: {
          raises: TT => "Draugr Warper" === TT.type,
          rise: .4
        }
      },
      FB = (TT, oT, IT, kT) => {
        let {
          localPlayerId: WT
        } = kT;
        const XT = new hz({
          translate: (TT, oT) => (0, Cz.p)(ZX.d.get().getCurrentLanguageCode(), TT, oT),
          translateWithIcons: (TT, oT) => (0, Cz.n)(ZX.d.get().getCurrentLanguageCode(), TT, oT),
          setMenuOpen: TT => {
            TT ? (0, tT.o)() : (0, tT.e)()
          },
          dismissMenu: tT.h,
          publishSkills: TT => {
            GT.h.XM(kI, TT, !0)
          },
          publishQuests: TT => {
            GT.h.XM(FI, TT, !0)
          },
          publishQuestNotification: TT => {
            GT.h.XM(SI, TT, !0)
          },
          publishDungeons: TT => {
            GT.h.XM(xI, TT, !0)
          },
          publishCollections: TT => {
            GT.h.XM(YI, TT, !0)
          },
          publishMap: TT => {
            GT.h.XM(LT, TT, !0)
          },
          publishHud: TT => {
            GT.h.XM(rz, TT, !0)
          },
          publishPortalTransit: TT => {
            GT.h.XM(OI, TT, !0)
          },
          isLoadingScreenUp: () => ez.c.get("loadingOverlayVisible"),
          publishDailyReward: TT => {
            GT.h.XM(qI, TT, !0)
          },
          publishMailbox: TT => {
            GT.h.XM(GI, TT, !0)
          },
          publishQuestGraph: TT => {
            GT.h.XM(bI, TT, !0)
          },
          publishForge: TT => {
            GT.h.XM(ci, TT, !0)
          },
          publishSmuggler: TT => {
            GT.h.XM(ri, TT, !0)
          },
          publishKeepersChair: TT => {
            GT.h.XM(Ei, TT, !0)
          },
          publishReachLog: TT => {
            GT.h.XM(Ci, TT, !0)
          },
          publishLampLight: TT => {
            GT.h.XM(Qi, TT, !0)
          },
          publishMagmaward: TT => {
            GT.h.XM(Hi, TT, !0)
          },
          publishGlowtide: TT => {
            GT.h.XM(qi, TT, !0)
          },
          publishGlowMeter: TT => {
            GT.h.XM(li, TT, !0)
          },
          publishHushWait: TT => {
            GT.h.XM(ti, TT, !0)
          },
          publishPassage: TT => {
            GT.h.XM(wi, TT, !0)
          },
          publishTideCharts: TT => {
            GT.h.XM(bi, TT, !0)
          },
          publishRegulars: TT => {
            GT.h.XM(Iz, TT, !0)
          },
          publishHiddenWaters: TT => {
            GT.h.XM(Xz, TT, !0)
          },
          publishDialogue: TT => {
            GT.h.XM(Fz, TT, !0)
          },
          publishAutographs: TT => {
            GT.h.XM(cz, TT, !0)
          },
          onDailyRewardStarted: TT => {
            OT.playSound(WT, TT.day === ET ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (TT, oT) => {
            OT.playSound(WT, "exp_collect", .35, 1 + .6 * TT / (oT - 1)), GT.h.XM(ZI, TT === oT - 1)
          },
          onDailyRewardItemLanded: TT => {
            OT.playSound(WT, "pickUp", .6, 1 + .15 * TT)
          },
          onMailboxStarted: () => {
            OT.playSound(WT, "rpgMetalClick", .6, 1), OT.playSound(WT, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            OT.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: sX.h,
          requestTracking: TT => {
            OT.sendCommand(`quests track ${TT}`)
          },
          requestDungeonEnter: (TT, oT) => {
            OT.sendCommand(`${jT.o}${TT} ${oT}`)
          },
          requestQuestJump: TT => {
            OT.sendCommand(`${JT} jump ${TT}`)
          },
          requestQuestArrive: (TT, oT) => {
            const IT = `${JT} arrive ${TT}`;
            OT.sendCommand(oT ? `${IT} complete` : IT)
          },
          requestForge: TT => {
            let {
              blade: oT,
              guard: IT,
              handle: iT
            } = TT;
            OT.sendCommand(`forge ${oT} ${IT} ${iT}`)
          },
          requestDialogue: () => {
            OT.sendCommand("quests dialogue")
          },
          requestSmuggle: (TT, oT) => {
            OT.sendCommand(`smuggle ${TT} ${oT}`)
          },
          requestKeepersChairAim: TT => {
            OT.sendCommand(`keeperschair-aim ${TT}`)
          },
          requestReachLogOpen: () => {
            OT.sendCommand("reachlog-open")
          },
          requestLampLight: TT => {
            OT.sendCommand(`${TT}`)
          },
          requestTravel: TT => {
            OT.sendCommand(`map travel ${TT.kind} ${TT.id} ${TT.requestId}`)
          }
        });
        let BT, FT, ST, DT, xT, cT, KT, hT, wT, mT, eT, vT, fT;
        const UT = new dX;
        let OT, qT = null;
        const ZT = BB[null !== IT && void 0 !== IT ? IT : ""],
          bT = (TT, oT) => {
            null !== ZT && void 0 !== ZT && ZT.raises(oT) && OT.setNametagOffset(TT, ZT.rise)
          },
          yT = new qX({
            getLocalHookPosition: () => {
              const TT = NT.getLocalHook();
              return null !== TT && OT.checkValid(TT) ? OT.Wm(TT) : null
            },
            playParticles: TT => {
              OT.playParticleEffect(TT)
            },
            vibrate: TT => {
              pT.g.play("fishBite", TT)
            },
            now: () => performance.now()
          }),
          NT = new QX({
            getLineOwner: TT => OT.checkValid(TT) ? OT.getLineOwner(TT) : null,
            isLocalPlayer: TT => OT.isLocalPlayer(TT),
            getHookPosition: TT => {
              const [oT, , IT] = OT.Wm(TT);
              return [oT, IT]
            },
            isHushWaiting: () => {
              var TT;
              return "waiting" === (null === (TT = XT.hushWait.getSnapshot()) || void 0 === TT ? void 0 : TT.phase)
            },
            onCastLanded: (TT, oT) => {
              XT.tideCharts.castLanded(TT, oT)
            },
            onLocalHookSettled: () => {
              yT.onLocalHookSettled()
            },
            onLocalWaitEnded: TT => {
              yT.onLocalWaitEnded(TT)
            },
            now: () => performance.now()
          }),
          PT = new oB({
            now: () => performance.now(),
            playerPosition: () => OT.checkValid(WT) ? OT.Wm(WT) : null,
            play: (TT, oT, IT, iT, zT, kT) => OT.playSound(WT, TT, oT, 1, {
              jT: IT,
              maxHearDist: iT,
              refDistance: zT
            }, kT)
          }),
          dT = new Map;
        let VT;
        return {
          onCreate: TT => {
            if (OT = TT, qT = new iB.SkyblockEntityFacing(TT, ZT ? bT : null), XT.portalTransit.resumeArrival(null !== IT && void 0 !== IT ? IT : null), (null !== IT && void 0 !== IT ? IT : iT) === iT) {
              let TT = -1 / 0;
              VT = GT.h.subscribe("toggleMenu", (oT => {
                const IT = performance.now();
                "inventory|Workbench" !== oT || "cross_to_hub" !== XT.quests.getTrackedQuestId() || IT - TT < 1e4 || (TT = IT, OT.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [iT, zT] of Object.entries(null !== (oT = aT[null !== IT && void 0 !== IT ? IT : ""]) && void 0 !== oT ? oT : {})) {
              var oT;
              dT.set(iT, new XB({
                hasChunk: (oT, IT, iT) => TT.isBlockInLoadedChunk(oT, IT, iT),
                Gw: (oT, IT, iT) => TT.blockIdToBlockName(TT.getBlockId(oT, IT, iT)),
                gC: (oT, IT, iT, zT) => {
                  TT.gC(oT, IT, iT, zT)
                },
                playParticles: oT => {
                  TT.playParticleEffect(oT)
                }
              }, zT))
            }
            fT = (0, IB.h)((TT => function(TT) {
              return Object.hasOwn(Zo, TT) || TT.startsWith("npc_")
            }(TT) ? to(TT) : null)), XT.resolveItemName = (oT, IT) => {
              const iT = TT.getItemStat(WT, oT, "displayName");
              return iT && "object" === typeof iT && "translationKey" in iT ? IT(iT.translationKey, (0, Cz.m)(iT.params, lX.e.shown)) : "string" === typeof iT ? IT(iT) : oT
            }, XT.quests.notifications.onShown = TT => {
              "quest" === TT ? OT.playSound(WT, "magicAccent1", 1, 1) : "skillLevel" === TT ? OT.playSound(WT, "magicAccent1", 1, .6) : "landmark" === TT ? OT.playSound(WT, "trumpetFlare", 1, .6) : "npcNote" === TT ? OT.playSound(WT, "magicAccent2", .8, 1.1) : "started" === TT ? OT.playSound(WT, (0, UX.b)("bigDrumSwish"), 1, 1) : OT.playSound(WT, (0, UX.b)("rpgHandleSmallLeather"), 1, 1)
            }, XT.forge.onPartSelected = () => {
              OT.playSound(WT, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, XT.forge.onForgeStarted = (oT, IT, iT) => YX(TT, WT, oT, IT, iT), XT.smuggler.onBought = () => {
              OT.playSound(WT, (0, UX.b)("rpgHandleSmallLeather"), 1, 1), OT.playSound(WT, "chestOpen", .6, 1)
            }, XT.compass.register(new MT(XT.map, !0)), XT.compass.register(new MT(XT.map, !1)), XT.compass.register(new AT(XT.map)), XT.compass.register(new gT((() => XT.quests.getSnapshot().compassTarget)));
            for (const IT of ["enemy", "npc"]) XT.compass.register(new rT(XT.map, IT, (oT => TT.checkValid(oT) ? TT.Wm(oT) : void 0), (oT => TT.isAlive(oT))))
          },
          onAfterRender: (TT, oT) => {
            const IT = OT.checkValid(WT) ? OT.Wm(WT) : null;
            XT.navigation.afterRender(IT, performance.now(), oT), XT.glowtide.afterRender(IT, oT.cameraHeading), XT.tideCharts.afterRender(IT), NT.afterRender()
          },
          onClose: () => {
            var TT, oT, IT, iT, zT, kT, WT, LT, cT, MT, rT, AT, gT, RT, uT;
            VT && GT.h.unsubscribe(VT), null === (TT = fT) || void 0 === TT || TT(), UT.dispose(), PT.dispose(), null === (oT = qT) || void 0 === oT || oT.dispose(), NT.dispose(), XT.dispose(), null === (IT = BT) || void 0 === IT || IT(), null === (iT = FT) || void 0 === iT || iT(), null === (zT = ST) || void 0 === zT || zT(), null === (kT = DT) || void 0 === kT || kT(), null === (WT = xT) || void 0 === WT || WT(), null === (LT = KT) || void 0 === LT || LT(), null === (cT = undefined) || void 0 === cT || cT(), null === (MT = hT) || void 0 === MT || MT(), null === (rT = wT) || void 0 === rT || rT(), null === (AT = mT) || void 0 === AT || AT(), null === (gT = eT) || void 0 === gT || gT(), null === (RT = undefined) || void 0 === RT || RT(), null === (uT = vT) || void 0 === uT || uT()
          },
          onPlayerChangeBlock: (TT, oT, iT, kT, BT, FT) => {
            if (TT === WT && "Air" === FT) {
              const TT = OT.getClientOption(WT, "creative");
              XT.skills.predictBlock([oT, iT, kT], BT, TT);
              const FT = function(TT, oT) {
                  if ("hub" === oT || "farming_1" === oT || "mining_1" === oT) return !HT.has(TT) || "hub" !== oT && "mining_1" !== oT ? Object.hasOwn(QT, TT) ? QT[TT] : void 0 : YT
                }(BT, IT),
                ST = ("hub" === IT || "mining_1" === IT) && (zT.fd.some((TT => TT === BT)) || Object.hasOwn(nT, BT) || "mining_1" === IT && "Block of Coal" === BT);
              TT || void 0 === FT && !ST || OT.gC(oT, iT, kT, null !== FT && void 0 !== FT ? FT : YT)
            }
          },
          onPlayerAttackEntity: (TT, oT) => {
            if (TT !== WT || "Player" !== OT.getEntityType(oT)) return;
            const [IT, iT, zT] = OT.Wm(oT);
            OT.burstParticlePreset("critical", [IT, iT + 1, zT], 10)
          },
          onChangeBlockFail: TT => {
            for (const {
                hI: oT
              }
              of TT) XT.skills.rejectBlock(oT)
          },
          onReceivedMessageFromServer: (TT, oT) => {
            if ("skyblockGatedPortal" === TT) {
              var IT;
              const [TT, iT] = oT;
              return void(null === (IT = dT.get(TT)) || void 0 === IT || IT.Jc(iT))
            }
            if ("skyblockDailyReward" === TT) return void XT.dailyReward.Jc(oT);
            if ("skyblockMailbox" === TT) return void XT.mailbox.Jc(oT);
            if ("skyblockPortalTransit" === TT) return void XT.portalTransit.Jc(oT);
            if ("skyblockLoot" === TT) return void UT.Jc(OT, oT);
            if ("skyblockLava" === TT) return void PT.Jc(oT);
            if ("skyblockForge" === TT) return void XT.forge.Jc(oT);
            if ("skyblockMagmaward" === TT) return void XT.magmaward.Jc(oT);
            if ("skyblockGlowtide" === TT) return void XT.glowtide.Jc(oT);
            if ("skyblockGlowMeter" === TT) return void XT.glowMeter.Jc(oT);
            if ("skyblockHushWait" === TT) return void XT.hushWait.Jc(oT);
            if ("skyblockPassage" === TT) {
              const TT = oT;
              return XT.passage.Jc(TT), XT.reachLog.receivePassagePhase(TT.passagePhase), mT ??= (0, RT.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: XT.passage.show
              }), void XT.keepersChair.receivePassage({
                keepersChairPassagePhase: TT.passagePhase,
                keepersChairPassageNextPhase: TT.passageNextPhase,
                keepersChairPassageTurnsInMs: TT.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === TT) {
              const TT = oT;
              return XT.tideCharts.Jc(TT), void(TT.tideCharts.length > 0 && (eT ??= (0, RT.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: XT.tideCharts.show
              })))
            }
            if (TT === lT.y) {
              var iT;
              const {
                hookId: TT,
                waiting: IT
              } = oT;
              return void NT.hookWaiting(TT, null !== (iT = null === IT || void 0 === IT ? void 0 : IT.remainingMs) && void 0 !== iT ? iT : null)
            }
            if ("skyblockBiteTell" === TT) return void yT.receiveTell(oT);
            if ("skyblockSmuggler" === TT) return void XT.smuggler.Jc(oT);
            if ("skyblockKeepersChair" === TT) return XT.keepersChair.Jc(oT), void XT.lampLight.setAtChair(XT.keepersChair.isAtChair());
            if ("skyblockLampLight" === TT) {
              const TT = oT;
              var zT;
              if (XT.lampLight.Jc(TT), TT.lampLightReleasing) wT ??= (0, RT.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  XT.lampLight.setRelease(!1)
                }
              });
              else null === (zT = wT) || void 0 === zT || zT(), wT = void 0;
              return
            }
            if ("skyblockRegulars" === TT) return void XT.regulars.Jc(oT);
            if ("skyblockHiddenWaters" === TT) return void XT.hiddenWaters.Jc(oT);
            if ("skyblockReachLog" === TT) return XT.reachLog.Jc(oT), void(hT ??= (0, RT.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Ji
              },
              onClick: XT.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === TT) {
              for (const [TT, IT, iT, zT] of oT) OT.gC(TT, IT, iT, zT);
              return
            }
            if ("skyblockHud" === TT) XT.receiveHud(oT);
            else if ("skyblockMap" === TT) XT.map.Jc(oT);
            else if (TT === sT.d) XT.skills.Jc(oT);
            else if (TT === CT && "dialogue" === oT.kind) XT.dialogue.Jc(oT);
            else if (TT === CT) XT.quests.Jc(oT);
            else if (TT === jT.k) XT.dungeons.Jc(oT);
            else if ("sbCollections" === TT) XT.collections.Jc(oT);
            else if ("skyblockQuestGraph" === TT) XT.questGraph.Jc(oT);
            else {
              if ("skyblockAutographs" !== TT) return;
              XT.autographs.Jc(oT)
            }
            if (!FT && XT.map.getSnapshot().enabled) {
              const TT = (0, RT.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: XT.map.show
                }),
                oT = (0, tT.s)(XT.map.show);
              FT = () => {
                TT(), oT()
              }
            }!ST && XT.skills.getSnapshot().enabled && (ST = (0, RT.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: XT.skills.show
            })), !KT && XT.collections.getSnapshot().enabled && (KT = (0, RT.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: XT.collections.show
            })), !DT && XT.quests.getSnapshot().enabled && (DT = (0, RT.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: XT.quests.show
            })), !vT && XT.autographs.getSnapshot().enabled && (vT = (0, RT.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: XT.autographs.show
            }));
            const kT = XT.dungeons.getSnapshot().enabled;
            var WT;
            (ST || DT || kT) && cT !== kT && (cT = kT, null === (WT = xT) || void 0 === WT || WT(), xT = (0, RT.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: jo
              },
              disabled: !kT,
              panel: !0,
              onClick: XT.dungeons.show
            }));
            BT || (BT = (0, tT.u)((0, uT.createElement)(jX, {
              controller: XT
            }), {
              content: (0, uT.createElement)(JX, {
                controller: XT
              }),
              onClose: XT.close
            }))
          },
          dD: () => {
            var TT;
            for (const oT of dT.values()) oT.dD();
            UT.dD(OT), PT.dD(), null === (TT = qT) || void 0 === TT || TT.dD(), XT.skills.dD(), XT.quests.dD(), XT.dailyReward.dD(), XT.mailbox.dD(), XT.map.dD()
          }
        }
      }
  },
  37524: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      i: () => XT,
      k: () => iT,
      o: () => kT,
      q: () => zT,
      t: () => BT
    });
    const iT = "skyblockDungeons",
      zT = "skyblockHeldBoss",
      kT = "dungeonEnter ",
      WT = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      XT = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function BT(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const IT = Math.max(0, Math.floor(TT)),
        iT = Math.floor(IT % 1e3 / 100),
        zT = Math.floor(IT / 1e3),
        kT = zT % 60,
        WT = Math.floor(zT / 60),
        XT = WT % 60,
        BT = Math.floor(WT / 60),
        FT = TT => TT < 10 ? `0${TT}` : String(TT),
        ST = oT ? `.${iT}` : "";
      return BT > 0 ? `${BT}:${FT(XT)}:${FT(kT)}${ST}` : `${XT}:${FT(kT)}${ST}`
    }
  },
  35376: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      d: () => iT
    });
    const iT = "skyblockSkills",
      zT = "skills_test_gym"
  },
  8766: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => WT
    });
    const iT = [{
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

    function zT(TT) {
      let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const oT = TT < 0 ? "-" : "",
            IT = Math.abs(TT);
          return IT >= 10 ? `${oT}${IT.toFixed(1).replace(/\.0$/,"")}` : `${oT}${IT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        oT = BigInt(Math.floor(TT))
      } else oT = TT;
      const zT = oT < 0n ? -oT : oT,
        kT = oT < 0n ? "-" : "",
        WT = zT.toString();
      if (WT.length <= IT) return `${kT}${WT}`;
      const XT = 3 * Math.floor((WT.length - 1) / 3);
      if (XT < 3) return `${kT}${WT}`;
      if (XT > 3 * iT.length) {
        const TT = WT[0],
          oT = WT.slice(1, 3).replace(/0+$/, "");
        return `${kT}${oT?`${TT}.${oT}`:TT}e${WT.length-1}`
      }
      const {
        threshold: BT,
        suffix: FT
      } = iT[iT.length - XT / 3], ST = zT / BT, DT = Number(1000n * (zT % BT) / BT), LT = Number(ST) + DT / 1e3;
      let xT;
      return xT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${kT}${xT}${FT}`
    }
    const kT = iT.map((TT => {
      let {
        threshold: oT,
        suffix: IT
      } = TT;
      return {
        threshold: Number(oT),
        suffix: IT
      }
    })).filter((TT => {
      let {
        threshold: oT
      } = TT;
      return Number.isFinite(oT)
    }));

    function WT(TT) {
      const oT = Math.abs(TT),
        IT = TT < 0 ? "-" : "";
      for (const {
          threshold: iT,
          suffix: zT
        }
        of kT)
        if (oT >= iT) {
          const TT = oT / iT;
          if (TT >= 1e3) return `${IT}${oT.toExponential(2).replace("e+","e")}`;
          let kT;
          return kT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${IT}${kT}${zT}`
        } return `${IT}${oT}`
    }
  },
  37535: (TT, oT, IT) => {
    var iT = {
      "./combat_1.png": 37543,
      "./dungeon_crumbling_crypt.png": 37551,
      "./dungeon_frozen_hollow.png": 37553,
      "./dungeon_wildwood_grove.png": 37556,
      "./dungeons.png": 37562,
      "./farming_1.png": 37571,
      "./fishing_1.png": 37578,
      "./hub.png": 37582,
      "./island.png": 37588,
      "./mining_1.png": 37593,
      "./mining_1_bridge.png": 37602,
      "./mining_1_gallery.png": 37606,
      "./mining_1_hollow.png": 37615,
      "./mining_1_village.png": 37620
    };

    function zT(TT) {
      var oT = kT(TT);
      return IT(oT)
    }

    function kT(TT) {
      if (!IT.o(iT, TT)) {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }
      return iT[TT]
    }
    zT.keys = function() {
      return Object.keys(iT)
    }, zT.resolve = kT, TT.exports = zT, zT.id = 37535
  },
  37543: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37551: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37553: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37556: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37562: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37571: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37578: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37582: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37588: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37593: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37602: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37606: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37615: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37620: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  17906: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19969: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22296: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23773: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25472: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25488: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37516: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);