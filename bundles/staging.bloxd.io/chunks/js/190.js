export const id = 190;
export const ids = [51, 190];
export const modules = {
  38730: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    const hm = new WeakMap;

    function Am(mm, Tm) {
      return hm.set(mm, Tm), mm
    }

    function am(mm) {
      var Tm;
      return null !== (Tm = hm.get(mm)) && void 0 !== Tm ? Tm : null
    }
  },
  38628: (mm, Tm, fm) => {
    function hm(mm, Tm, fm) {
      var hm;
      const {
        width: Am,
        height: am
      } = fm, xm = null !== (hm = mm.text) && void 0 !== hm ? hm : mm, wm = (xm.x / 100 - .5) * Am, Dm = (xm.y / 100 - .5) * am, im = Am / 2 - Tm.x;
      if (null !== mm.text && Math.abs(wm) <= im && Dm >= Tm.top - am / 2 && Dm <= am / 2 - Tm.bottom) return {
        x: xm.x,
        y: xm.y
      };
      const Rm = Math.min(0 === wm ? 1 / 0 : im / Math.abs(wm), Dm > 0 ? (am / 2 - Tm.bottom) / Dm : Dm < 0 ? (Tm.top - am / 2) / Dm : 1 / 0);
      return !Number.isFinite(Rm) || Rm < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + wm * Rm / Am * 100,
        y: 50 + Dm * Rm / am * 100
      }
    }
    fm.d(Tm, {
      d: () => hm
    })
  },
  38637: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    const hm = 4,
      Am = 12e3,
      am = 1e3;
    class xm {
      constructor() {
        let {
          limit: mm = hm,
          windowMs: Tm = Am,
          spacingMs: fm = am,
          now: xm = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = mm, this.windowMs = Tm, this.spacingMs = fm, this.now = xm
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const mm of this.priority) mm.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const mm = this.now();
        this.sent.push(mm), this.lastSentAt = mm, this.schedule(), this.notify()
      }
      addPriority(mm) {
        return this.priority.add(mm), () => {
          this.priority.delete(mm)
        }
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const mm of this.priority)
          if (mm.waiting()) return !0;
        return !1
      }
      prune() {
        const mm = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= mm;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const mm = this.now(),
          Tm = this.lastSentAt + this.spacingMs,
          fm = Math.min(Tm > mm ? Tm : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        fm !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, fm - mm)))
      }
      notify() {
        for (const mm of this.listeners) mm()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38621: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      constructor(mm, Tm, fm) {
        this.gp = mm, this.beforeOpen = Tm, this.afterClose = fm, this.open = !1, this.PO = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.PO && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(mm) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(mm)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.PO = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.PO || (this.snapshot = this.buildSnapshot(), this.gp(this.snapshot))
      }
    }
  },
  38739: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      SkyblockEntityFacing: () => wm,
      needsSkyblockEntityFacing: () => xm
    });
    var hm = fm(649),
      Am = fm(4171),
      am = fm(38743);

    function xm(mm, Tm) {
      if (mm.metaInfo === hm.c || "Iron Guardian" === mm.type || "Gold Guardian" === mm.type) return !0;
      if ("Pig" === mm.type) return "sitting" === mm.pose;
      if ("Person" !== mm.meshKind || void 0 === mm.meshOpts) return !1;
      let fm = null === Tm || void 0 === Tm ? void 0 : Tm.get(mm.meshOpts);
      if (void 0 === fm) {
        var am, xm;
        const hm = (0, Am.k)(mm);
        fm = !1, "pig_napoleon" === (null === hm || void 0 === hm || null === (am = hm.opts.textures) || void 0 === am ? void 0 : am.head) ? fm = !0 : "npc_pig_head" === (null === hm || void 0 === hm || null === (xm = hm.opts.textures) || void 0 === xm ? void 0 : xm.head) && (fm = "sitting" === hm.opts.pose || "sitting"), Tm && (Tm.size >= 256 && Tm.clear(), Tm.set(mm.meshOpts, fm))
      }
      return "sitting" === fm ? "sitting" === mm.pose : fm
    }(0, am.f)("skyblock", ((mm, Tm) => {
      Tm.setFacingTolerance(xm(mm) ? 0 : null)
    }));
    class wm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = mm, this.alsoVisit = Tm, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = mm => {
          var Tm;
          const fm = this.api.getEntityInfo(mm);
          fm && (xm(fm, this.meshFacingCache) && (this.api.setFacingTolerance(mm, 0), this.nextFacing.add(mm)), null === (Tm = this.alsoVisit) || void 0 === Tm || Tm.call(this, mm, fm))
        }
      }
      DE() {
        const {
          api: mm
        } = this, Tm = this.nextFacing;
        mm.forEachEntity(this.visit);
        for (const fm of this.facing) Tm.has(fm) || mm.setFacingTolerance(fm, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Tm
      }
      dispose() {
        for (const mm of this.facing) this.api.setFacingTolerance(mm, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38616: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => RD
    });
    const hm = "island";
    var Am = fm(354);
    const am = (0, Am.yb)([0, 0, -1]),
      xm = [{
        name: "S",
        bearing: (0, Am.yb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Am.yb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: am
      }, {
        name: "W",
        bearing: (0, Am.yb)([1, 0, 0])
      }];

    function wm(mm, Tm, fm) {
      return [100 * (fm.mapMaxX - mm) / (fm.mapMaxX - fm.mapMinX), 100 * (Tm - fm.mapMinZ) / (fm.mapMaxZ - fm.mapMinZ)]
    }

    function Dm(mm, Tm, fm) {
      const Am = "local" === Tm,
        am = mm.background,
        xm = Tm => am ? wm(Tm[0] - mm.mapOrigin[0], Tm[2] - mm.mapOrigin[2], am.bounds) : [50, 50],
        Dm = (mm.insideDungeon ? [] : mm.landmarks).map((mm => {
          var Tm, hm;
          return {
            id: mm.id,
            name: fm(mm.visited && mm.nameKey ? null !== (Tm = mm.mapLabelKey) && void 0 !== Tm ? Tm : mm.nameKey : "skyblockGame:mapUnknown"),
            icon: mm.visited && null !== (hm = mm.icon) && void 0 !== hm ? hm : "unknown",
            visited: mm.visited,
            current: !1,
            position: xm(mm.position),
            travelKind: "landmark",
            travelId: mm.id
          }
        })),
        Rm = mm.zones.map((Tm => {
          var hm;
          return {
            id: Tm.id,
            name: fm(Tm.visited && Tm.nameKey ? Tm.nameKey : "skyblockGame:mapUnknown"),
            icon: Tm.visited && null !== (hm = Tm.icon) && void 0 !== hm ? hm : "unknown",
            visited: Tm.visited,
            current: Tm.id === mm.zoneId,
            position: Tm.position,
            thumbnail: Tm.visited ? Tm.id : void 0,
            travelKind: "zone",
            travelId: Tm.id
          }
        })),
        pm = mm.insideDungeon || !am ? [] : mm.portals.map((mm => {
          var Tm;
          return {
            id: mm.id,
            name: fm(null !== (Tm = mm.nameKey) && void 0 !== Tm ? Tm : "skyblockGame:mapUnknown"),
            icon: mm.visited ? "dungeons" === mm.destination ? "portal_orange" : "portal" : "unknown",
            visited: mm.visited,
            current: !1,
            position: xm(mm.position),
            colour: mm.colour,
            travelKind: "zone",
            travelId: mm.destination
          }
        })),
        Em = Am ? Dm : Rm,
        om = Em.filter((mm => mm.visited)).length,
        Om = am ? (am.bounds.mapMaxX - am.bounds.mapMinX) / (am.bounds.mapMaxZ - am.bounds.mapMinZ) : 2,
        Ym = am ? JSON.stringify([am.bounds, mm.mapOrigin]) : "";
      return {
        local: Am,
        points: Em,
        portals: Am ? pm : [],
        progress: Em.length ? fm("skyblockGame:mapDiscovered", {
          current: String(om),
          total: String(Em.length)
        }) : null,
        percent: Em.length ? 100 * om / Em.length : 0,
        canTravel: [...Em, ...Am ? pm : []].some((mm => mm.visited && !mm.current)),
        noLandmarks: Am && !mm.insideDungeon && 0 === Dm.length,
        background: am ? {
          imageKey: am.imageKey,
          fallbackImageKey: mm.zoneId,
          geometryKey: Ym,
          label: fm(am.labelKey),
          colour: am.backgroundColour,
          ratio: Om
        } : null,
        connections: im(mm.zones),
        minimap: am ? {
          imageKey: am.imageKey,
          fallbackImageKey: mm.zoneId,
          geometryKey: Ym,
          label: fm(am.labelKey),
          colour: am.backgroundColour,
          caption: fm(mm.zoneId === hm ? "skyblockGame:zoneIsland" : am.labelKey),
          width: (am.bounds.mapMaxX - am.bounds.mapMinX) / am.minimapSpan * 100 + "%",
          height: (am.bounds.mapMaxZ - am.bounds.mapMinZ) / am.minimapSpan * 100 + "%",
          markers: [...Dm, ...pm]
        } : null
      }
    }

    function im(mm) {
      const Tm = new Set;
      return mm.flatMap((fm => fm.connections.flatMap((hm => {
        const Am = mm.find((mm => mm.id === hm)),
          am = [fm.id, hm].sort().join("|");
        return !Am || Tm.has(am) ? [] : (Tm.add(am), [{
          id: `${fm.id}-${hm}`,
          start: fm.position,
          end: Am.position,
          explored: fm.visited && Am.visited
        }])
      }))))
    }
    var Rm = fm(38621);
    class pm extends Rm.e {}
    const Em = "skyblockMapView";
    class om extends pm {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(mm, hm, Am), this.requestTravel = Tm, this.translate = fm, this.now = am, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = mm => {
          this.tab = mm, this.feedbackKey = "", this.emit()
        }, this.travel = (mm, Tm) => {
          if (!this.map || this.pending || this.PO) return;
          const fm = ("zone" === mm ? this.map.zones : this.map.landmarks).find((mm => mm.id === Tm));
          if (fm) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in fm && !fm.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (fm.visited)
              if ("zone" === mm && Tm === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const fm = ++this.nextRequestId;
                this.pending = {
                  requestId: fm,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: mm,
                  id: Tm,
                  requestId: fm
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
      setTranslator(mm) {
        this.translate = mm, this.emit()
      }
      rO(mm) {
        var Tm;
        if (!this.PO)
          if ("entities" !== mm.kind)
            if ("open" !== mm.kind) {
              var fm, hm;
              if ("snapshot" === mm.kind)(null === (fm = mm.snapshot) || void 0 === fm ? void 0 : fm.zoneId) !== (null === (hm = this.map) || void 0 === hm ? void 0 : hm.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = mm.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === mm.kind) {
                var Am;
                mm.requestId === (null === (Am = this.pending) || void 0 === Am ? void 0 : Am.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (mm.requestId === (null === (Tm = this.pending) || void 0 === Tm ? void 0 : Tm.requestId)) {
                var am;
                this.pending = null, this.feedbackKey = null !== (am = mm.errorKey) && void 0 !== am ? am : "", null === mm.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = mm.entities
      }
      DE() {
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
          presentation: this.map ? Dm(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Om = 67.5 * Math.PI / 180;

    function Ym(mm, Tm) {
      const fm = Math.abs(mm);
      if (fm > Om || Tm.trackHalfWidth <= 0) return null;
      const hm = Tm.trackHalfWidth,
        Am = Tm.screenHalfWidth / (Tm.tanHalfFovX * Math.max(.5, Math.cos(Tm.pitch))),
        am = Math.min(Math.atan(.6 * hm / Am), .75 * Om),
        xm = Am * Math.tan(am);
      let wm;
      if (fm <= am) wm = Am * Math.tan(fm);
      else {
        const mm = Om - am,
          Tm = Math.max(0, Am * mm / (Math.cos(am) ** 2 * (hm - xm)) - 1),
          Dm = (fm - am) / mm;
        wm = xm + (hm - xm) * (1 + Tm) * Dm / (1 + Tm * Dm)
      }
      return 50 + Math.sign(mm) * wm * 50 / hm
    }
    class qm {
      constructor(mm, Tm) {
        this.map = mm, this.visited = Tm, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Tm ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const mm = this.map.getSnapshot().map;
        return !mm || mm.insideDungeon ? [] : mm.landmarks.filter((mm => mm.visited === this.visited)).map((mm => {
          var Tm, fm;
          return {
            id: `landmark:${mm.id}`,
            position: mm.position,
            icon: null !== (Tm = mm.icon) && void 0 !== Tm ? Tm : "unknown",
            nameKey: null !== (fm = mm.nameKey) && void 0 !== fm ? fm : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class jm {
      constructor(mm, Tm, fm, hm) {
        this.map = mm, this.kind = Tm, this.position = fm, this.alive = hm, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Tm, this.range = "enemy" === Tm ? 48 : 64, this.limit = 12
      }
      rV(mm) {
        if ("enemy" !== this.kind || this.alive(mm.fa)) return this.position(mm.fa)
      }
      getPoints() {
        const mm = [];
        for (const hm of this.map.getEntities()) {
          if (hm.kind !== this.kind || "enemy" === this.kind && !this.alive(hm.compassEntityId)) continue;
          const Am = this.position(hm.compassEntityId);
          var Tm, fm;
          if (Am) mm.push({
            id: `${this.kind}:${hm.compassEntityId}`,
            fa: hm.compassEntityId,
            kind: this.kind,
            icon: null !== (Tm = hm.icon) && void 0 !== Tm ? Tm : hm.npcSkin ? `npc_${hm.npcSkin}` : this.kind,
            displayName: hm.displayName,
            position: Am,
            nameKey: null !== (fm = hm.nameKey) && void 0 !== fm ? fm : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return mm
      }
    }
    class Vm {
      constructor(mm) {
        this.map = mm, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const mm = this.map.getSnapshot().map;
        return !mm || mm.insideDungeon ? [] : mm.portals.map((mm => {
          var Tm;
          return {
            id: "portal:" + mm.id,
            kind: "portal",
            position: mm.position,
            nameKey: null !== (Tm = mm.nameKey) && void 0 !== Tm ? Tm : "skyblockGame:compassUnvisitedZone",
            icon: mm.visited ? "dungeons" === mm.destination ? "portal_orange" : "portal" : "unknown",
            colour: mm.colour
          }
        }))
      }
    }
    class Im {
      constructor(mm) {
        this.target = mm, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const mm = this.target();
        return mm ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: mm.position,
          nameKey: mm.nameKey
        }] : []
      }
    }

    function Km(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.position;
      const am = hm[0] - Tm[0],
        xm = hm[2] - Tm[2];
      return {
        ...mm,
        position: hm,
        offset: Am.c.computeShortestRotation(fm, (0, Am.yb)([am, 0, xm])),
        distance: Math.hypot(am, hm[1] - Tm[1], xm)
      }
    }
    let Qm;

    function nm(mm, Tm) {
      var fm;
      return (null === (fm = Qm) || void 0 === fm ? void 0 : fm.locale) !== Tm && (Qm = {
        locale: Tm,
        near: new Intl.NumberFormat(Tm, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Tm, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (mm < 10 ? Qm.near : Qm.far).format(mm)
    }
    class Jm {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(mm) {
        return this.providers.set(mm.id, mm), this.refreshAt = 0, () => {
          this.providers.get(mm.id) === mm && (this.providers.delete(mm.id), this.refreshAt = 0)
        }
      }
      frame(mm, Tm, fm) {
        if (fm >= this.refreshAt) {
          this.refreshAt = fm + 200, this.candidates = [];
          for (const Tm of this.providers.values()) {
            if (!Tm.enabled) continue;
            const fm = Tm.getPoints().map((Tm => {
              const fm = Tm.position;
              return {
                point: Tm,
                distance: Math.hypot(fm[0] - mm[0], fm[1] - mm[1], fm[2] - mm[2])
              }
            })).filter((mm => mm.distance <= Tm.range)).sort(((mm, Tm) => mm.distance - Tm.distance)).slice(0, Tm.limit);
            for (const {
                point: mm
              }
              of fm) this.candidates.push({
              provider: Tm,
              point: mm
            })
          }
        }
        const hm = [];
        for (const {
            point: Am,
            provider: am
          }
          of this.candidates) {
          if (!am.enabled) continue;
          const fm = am.rV ? am.rV(Am) : Am.position;
          if (fm) {
            const am = Km(Am, mm, Tm, fm);
            Math.abs(am.offset) <= Om && hm.push(am)
          }
        }
        return hm
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var cm = fm(36689),
      zm = fm(59);
    const Zm = [{
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
      km = Zm.length;

    function bm(mm) {
      return mm >= km ? 1 : mm + 1
    }
    const Sm = "skyblockQuests",
      em = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Nm = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Gm(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const fm = Math.max(0, Math.floor(mm)),
        hm = Math.floor(fm % 1e3 / 100),
        Am = Math.floor(fm / 1e3),
        am = Am % 60,
        xm = Math.floor(Am / 60),
        wm = xm % 60,
        Dm = Math.floor(xm / 60),
        im = mm => mm < 10 ? `0${mm}` : String(mm),
        Rm = Tm ? `.${hm}` : "";
      return Dm > 0 ? `${Dm}:${im(wm)}:${im(am)}${Rm}` : `${wm}:${im(am)}${Rm}`
    }
    const Xm = "devquests",
      Pm = "none",
      Hm = {
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
      ym = "Compressed Messy Stone",
      Cm = {
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
      rm = ["Stone", "Diorite", "Andesite", "Granite"],
      sm = new Set(rm),
      lm = (Object.keys(Cm), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Mm = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function um(mm, Tm) {
      const fm = Math.floor(5 * mm / (2 * Tm + 1));
      return Math.min(4, Math.max(0, fm))
    }
    var Bm = fm(1247);
    var Lm = fm(36444);
    var tm = fm(36686),
      Um = fm(31),
      dm = fm(8824);
    const gm = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Wm = 1e3;

    function Fm(mm) {
      return Math.max(0, mm)
    }

    function mT(mm) {
      return 1 + .01 * Fm(mm)
    }

    function TT(mm) {
      return 1 + .005 * Fm(mm)
    }

    function fT(mm) {
      return 1 + .005 * Fm(mm)
    }

    function hT(mm) {
      return .01 * Fm(mm)
    }

    function AT(mm) {
      return 150 / (150 + Fm(mm))
    }

    function aT(mm) {
      return 1 + .002 * Fm(mm)
    }

    function xT(mm) {
      return Math.round(10 * mm) / 10
    }

    function wT(mm, Tm) {
      switch (mm) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: xT(100 * (TT(Tm) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: xT(100 * (mT(Tm) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: xT(100 * (fT(Tm) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: xT(100 * hT(Tm))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: xT(100 * (1 - AT(Tm)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: xT(100 * (aT(Tm) - 1))
          }
      }
    }

    function DT(mm) {
      return "farming" === mm ? 200 : 100
    }

    function iT(mm, Tm) {
      if (!Number.isSafeInteger(mm) || mm < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const fm = DT(Tm),
        hm = mm => function(mm, Tm) {
          return DT(mm) * Tm * (Tm + 1) / 2
        }(Tm, mm);
      let Am = Math.min(Wm, Math.floor((Math.sqrt(8 * mm / fm + 1) - 1) / 2));
      return Am < Wm && hm(Am + 1) <= mm ? Am++ : hm(Am) > mm && Am--, {
        totalXp: mm,
        level: Am,
        xpIntoLevel: mm - hm(Am),
        xpForNextLevel: Am === Wm ? null : fm * (Am + 1)
      }
    }
    const RT = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function pT(mm) {
      return RT.has(mm)
    }
    const ET = new Set(Am.nb);

    function oT(mm) {
      return ET.has(mm)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const OT = {
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
      YT = {
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
      qT = {
        ...YT,
        ...Object.fromEntries(Object.entries(lm).map((mm => {
          let [Tm, fm] = mm;
          return [Tm, 9 * YT[fm]]
        })))
      },
      jT = {
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
      VT = {
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
    const IT = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      KT = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function QT(mm) {
      return `rgb(${KT[mm].join(", ")})`
    }

    function nT(mm, Tm, fm) {
      if (!fm) return mm(Tm);
      const hm = {};
      for (const [Am, am] of Object.entries(fm)) hm[Am] = "string" === typeof am ? am : mm(am.translationKey);
      return mm(Tm, hm)
    }
    class JT {
      constructor(mm, Tm) {
        this.now = mm, this.getJournal = Tm, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.ni = !1, this.onShown = () => {}
      }
      enqueue(mm) {
        const Tm = cT(mm);
        if (Tm) this.pending.push(mm);
        else {
          const Tm = this.pending.findIndex(cT);
          this.pending.splice(-1 === Tm ? this.pending.length : Tm, 0, mm)
        }
        return (null === this.current || null !== this.followUp && !Tm) && (this.advance(), !0)
      }
      setHeld(mm) {
        return this.ni = mm, !mm && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      DE() {
        const mm = this.getJournal(),
          Tm = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Tm ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Tm || void 0 === Tm ? void 0 : Tm.kind) && mm && mm.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Tm || void 0 === Tm ? void 0 : Tm.kind)) {
          const mm = this.findFollowUp(this.current);
          if ("step" !== (null === mm || void 0 === mm ? void 0 : mm.kind) || mm.questId !== Tm.questId || mm.step.id !== Tm.step.id) return this.showFollowUp(mm, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(mm, Tm, fm) {
        var hm, Am, am, xm;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, mm, fm);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, mm);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, mm, Tm);
        const {
          questCompletionKind: wm,
          questCompletionNameKey: Dm
        } = this.current, im = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Rm = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, pm = "step" === (null === (hm = this.followUp) || void 0 === hm ? void 0 : hm.kind) ? this.followUp : null, Em = "explore" === (null === (Am = this.followUp) || void 0 === Am ? void 0 : Am.kind);
        let om;
        return om = Em ? mm("skyblockGame:questExploreTitle") : null !== pm ? "quest" === wm ? mm("skyblockGame:questNextQuestTitle", {
          quest: mm(pm.questNameKey)
        }) : mm("skyblockGame:questNextStepTitle") : mm("started" === wm ? "skyblockGame:questStartedTitle" : "quest" === wm ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? wm : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: om,
          name: Em ? Tm("skyblockGame:questExploreName") : null !== pm ? nT(Tm, pm.step.nameKey, pm.step.nameParams) : nT(Tm, Dm, im),
          description: Em ? Tm("skyblockGame:questExploreDescription") : null === pm ? null : nT(Tm, pm.step.descriptionKey, pm.step.descriptionParams),
          reward: null === this.followUp && Rm > 0 ? Tm("skyblockGame:questCoinRewardSuffix", {
            amount: Rm.toLocaleString(fm)
          }) : null,
          iconItem: null !== (am = null === pm || void 0 === pm ? void 0 : pm.step.questIconItem) && void 0 !== am ? am : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== pm && (null === (xm = this.getJournal()) || void 0 === xm ? void 0 : xm.trackedQuestId) === pm.questId ? pm.step.nameKey : null
        }
      }
      getSkillLevelView(mm, Tm, fm) {
        let {
          skill: hm,
          beforeLevel: Am,
          level: am
        } = mm;
        const xm = wT(hm, Am),
          wm = wT(hm, am);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Tm(`skyblockGame:${hm}`),
          name: Tm("skyblockGame:skillLevelUp", {
            to: am.toLocaleString(fm)
          }),
          description: xm.percent === wm.percent ? null : Tm(`${wm.translationKey}Change`, {
            before: xm.percent.toLocaleString(fm),
            after: wm.percent.toLocaleString(fm)
          }),
          reward: null,
          iconItem: IT[hm],
          accent: QT(hm),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(mm, Tm) {
        let {
          landmarkNameKey: fm
        } = mm;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Tm("skyblockGame:landmarkDiscovered"),
          name: Tm(fm),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(mm, Tm, fm) {
        let {
          titleKey: hm,
          textKey: Am,
          params: am = {},
          nameKeys: xm = {},
          iconItem: wm = null
        } = mm;
        const Dm = {
          ...am
        };
        for (const [im, Rm] of Object.entries(xm)) Dm[im] = Tm(Rm);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Tm(hm),
          name: fm(Am, Dm),
          description: null,
          reward: null,
          iconItem: wm,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var mm;
        if (null !== this.followUp) return 5600;
        switch (null === (mm = this.current) || void 0 === mm ? void 0 : mm.questCompletionKind) {
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
      showFollowUp(mm, Tm) {
        null === mm || this.ni ? this.advance() : (this.followUp = mm, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Tm && void 0 !== Tm ? Tm : this.shownAt + this.durationMs())
      }
      findFollowUp(mm) {
        var Tm;
        const fm = this.getJournal();
        if (!fm || this.hasPendingQuestPopup() || cT(mm)) return null;
        const hm = "started" === mm.questCompletionKind ? fm.active.some((Tm => Tm.id === mm.questCompletionQuestId)) : "quest" === mm.questCompletionKind ? fm.completed.some((Tm => Tm.id === mm.questCompletionQuestId)) : [...fm.active, ...fm.completed].some((Tm => Tm.id === mm.questCompletionQuestId && Tm.subquests.some((Tm => Tm.id === mm.questCompletionStepId && "completed" === Tm.status))));
        if (!hm) return null;
        if ("quest" === mm.questCompletionKind && 0 === fm.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Am = fm.active.find((mm => mm.id === fm.trackedQuestId)),
          am = null !== (Tm = null === Am || void 0 === Am ? void 0 : Am.subquests.find((mm => "ready" === mm.status))) && void 0 !== Tm ? Tm : null === Am || void 0 === Am ? void 0 : Am.subquests.find((mm => "active" === mm.status));
        return am ? {
          kind: "step",
          questId: Am.id,
          questNameKey: Am.nameKey,
          step: am
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((mm => !cT(mm)))
      }
      advance() {
        var mm;
        this.current = this.ni ? null : null !== (mm = this.pending.shift()) && void 0 !== mm ? mm : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function cT(mm) {
      return zT(mm.questCompletionKind)
    }

    function zT(mm) {
      return "skillLevel" === mm || "landmark" === mm || "npcNote" === mm
    }
    var ZT = fm(38628);
    const kT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      bT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      ST = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      eT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      NT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var GT = fm(38632);
    const XT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      PT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const HT = fm.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const yT = fm.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      CT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var rT = fm(18308),
      sT = fm(20446),
      lT = fm(22768),
      MT = fm(24321),
      uT = fm(25953);
    const BT = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: rT,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: sT,
      cow: NT,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: fm(25972),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: kT,
      fishing_1: kT,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: bT,
      guardian_iron: ST,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: lT,
      mines: MT,
      mining_1: MT,
      npc: eT,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: NT,
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
      npc_gold_guardian: bT,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: ST,
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
      npc_tentacle_guy: GT,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: XT,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: HT,
      quest_talk: yT,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: CT,
      watermelon: uT
    };

    function LT(mm, Tm) {
      const fm = document.createElement("img");
      return fm.className = Tm, fm.src = mm, fm.alt = "", fm.draggable = !1, fm
    }

    function vT(mm) {
      var Tm;
      const fm = null !== (Tm = BT[mm]) && void 0 !== Tm ? Tm : mm.startsWith("npc_") ? eT : CT;
      if ("portal" !== mm) return LT(fm, "SkyblockMapIcon");
      const hm = document.createElement("span");
      hm.className = "SkyblockMapIcon Portal";
      const Am = document.createElement("span");
      return Am.className = "SkyblockMapIconTint", Am.style.maskImage = Am.style.webkitMaskImage = `url("${PT}")`, hm.append(LT(fm, "SkyblockMapIconLayer"), Am, LT(PT, "SkyblockMapIconLayer SkyblockMapIconShade")), hm
    }
    var tT = fm(38609),
      UT = fm(4184);
    const dT = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function gT(mm) {
      const Tm = new UT.k(mm);
      return {
        radius: 45,
        squareness: 3,
        wobbles: dT.map((mm => {
          let {
            lobes: fm,
            amount: hm
          } = mm;
          return {
            lobes: fm[Math.floor(Tm.next() * fm.length)],
            amount: hm[0] + Tm.next() * (hm[1] - hm[0]),
            phase: 2 * Tm.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function WT(mm) {
      let {
        radius: Tm,
        squareness: fm,
        wobbles: hm,
        samples: Am
      } = mm;
      const am = [];
      for (let xm = 0; xm < Am; xm++) {
        const mm = 2 * Math.PI * xm / Am,
          wm = Math.cos(mm),
          Dm = Math.sin(mm),
          im = Tm * (Math.abs(wm) ** fm + Math.abs(Dm) ** fm) ** (-1 / fm) * hm.reduce(((Tm, fm) => {
            let {
              lobes: hm,
              amount: Am,
              phase: am
            } = fm;
            return Tm + Am * Math.sin(hm * mm + am)
          }), 1);
        am.push(`${(50+im*wm).toFixed(2)} ${(50+im*Dm).toFixed(2)}`)
      }
      return `M${am.join("L")}Z`
    }
    const FT = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class mf {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.PO = !1, this.mountCompass = mm => {
          var Tm;
          if (null === (Tm = this.stopLayout) || void 0 === Tm || Tm.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !mm || this.PO) return;
          const fm = mm.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: mm,
            track: fm,
            label: mm.querySelector(".SkyblockCompassLabel")
          }, fm.replaceChildren();
          for (let Am = 0; Am < 4; Am++) {
            const mm = document.createElement("span");
            mm.className = "SkyblockCompassCardinal", fm.appendChild(mm), this.cardinals.push(mm)
          }
          const hm = (0, tT.e)(FT, [mm], this.layout);
          this.stopLayout = () => {
            hm(), fm.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = mm => {
          this.terrain = this.PO ? null : mm, this.render(this.frame)
        }, this.mountMinimapSearchArea = mm => {
          this.mountSearchArea("minimap", mm)
        }, this.mountMapSearchArea = mm => {
          this.mountSearchArea("map", mm)
        }, this.mountPlayer = mm => {
          this.player = this.PO ? null : mm, this.render(this.frame)
        }, this.mountWaypoint = mm => {
          var Tm, fm;
          if (null === (Tm = this.stopWaypoint) || void 0 === Tm || Tm.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !mm || this.PO) return;
          const hm = mm.querySelector(".SkyblockQuestWaypointMarker");
          hm.replaceChildren(vT("quest")), this.markerIcon = "quest", this.waypoint = {
            root: mm,
            marker: hm,
            clip: mm.querySelector(".SkyblockQuestWaypointTextClip"),
            text: mm.querySelector(".SkyblockQuestWaypointText"),
            label: mm.querySelector(".SkyblockQuestWaypointLabel"),
            distance: mm.querySelector(".SkyblockQuestWaypointDistance"),
            hint: mm.querySelector(".SkyblockQuestWaypointHint")
          };
          const Am = () => {
              this.waypointMarkerSize = {
                width: hm.offsetWidth,
                height: hm.offsetHeight
              }, this.waypointInset = {
                x: hm.offsetWidth / 2 + 8,
                top: hm.offsetHeight + 8,
                bottom: 8
              }
            },
            am = new ResizeObserver((() => {
              Am(), this.render(this.frame)
            }));
          am.observe(hm, {
            box: "border-box"
          });
          const xm = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", xm), null === (fm = window.visualViewport) || void 0 === fm || fm.addEventListener("resize", xm), this.stopWaypoint = () => {
            var mm;
            am.disconnect(), window.removeEventListener("resize", xm), null === (mm = window.visualViewport) || void 0 === mm || mm.removeEventListener("resize", xm)
          }, xm(), Am(), this.render(this.frame)
        }, this.mountWaypointOrigin = mm => {
          var Tm;
          if (null === (Tm = this.stopWaypointOrigin) || void 0 === Tm || Tm.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = mm && !this.PO ? Number(mm.dataset.notificationToken) : null, mm && !this.PO && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Tm = {
              nameKey: mm.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Tm;
            const fm = () => {
                const fm = mm.getBoundingClientRect();
                Tm.x = (fm.left + fm.width / 2) / window.innerWidth * 100, Tm.y = (fm.top + fm.height / 2) / window.innerHeight * 100
              },
              hm = new ResizeObserver(fm);
            hm.observe(mm.parentElement), hm.observe(mm), window.addEventListener("resize", fm), this.stopWaypointOrigin = () => {
              hm.disconnect(), window.removeEventListener("resize", fm)
            }, fm()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const mm = this.compass.root,
            Tm = getComputedStyle(mm),
            fm = getComputedStyle(document.documentElement),
            hm = parseFloat(fm.fontSize),
            Am = parseFloat(Tm.getPropertyValue("--compass-icon-size")) * hm,
            am = "1" === Tm.getPropertyValue("--compass-fit-top").trim(),
            xm = am ? 1 : 8,
            wm = Array.from(document.querySelectorAll(FT), (mm => {
              var Tm;
              return (null !== (Tm = mm.querySelector(".MiddleTextTop")) && void 0 !== Tm ? Tm : mm).getBoundingClientRect()
            })).filter((mm => mm.width > 0 && mm.height > 0));
          let Dm = (parseFloat(fm.getPropertyValue("--notchTop")) || 0) + xm,
            im = "";
          if (am) {
            const Tm = window.innerWidth / 2,
              fm = mm.getBoundingClientRect().height,
              am = [Dm, ...wm.map((mm => Math.max(Dm, mm.bottom + xm)))].sort(((mm, Tm) => mm - Tm));
            for (const mm of am) {
              let am = Tm - 8;
              for (const hm of wm) hm.bottom + xm <= mm || hm.top >= mm + fm + xm || (am = Math.min(am, hm.right <= Tm ? Tm - hm.right - 8 : hm.left - Tm - 8));
              const Rm = 2 * am - Am;
              if (Rm >= 16 * hm) {
                im = `${Rm}px`, Dm = mm;
                break
              }
            }
          }
          mm.style.maxWidth !== im && (mm.style.maxWidth = im);
          const Rm = mm.getBoundingClientRect(),
            pm = this.compassSize.trackHalfWidth;
          if (Rm.width > 0) {
            const mm = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: mm.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Am / mm.width
          }
          if (!im)
            for (const Em of wm) Em.right > Rm.left - 8 && Em.left < Rm.right + 8 && (Dm = Math.max(Dm, Em.bottom + xm));
          mm.style.top = `${Dm}px`, this.compassSize.trackHalfWidth !== pm && this.render(this.frame)
        }
      }
      mountSearchArea(mm, Tm) {
        this.searchAreas[mm] = this.PO ? null : Tm, this.render(this.frame)
      }
      render(mm) {
        if (this.PO) return;
        if (this.frame = mm, this.compass && (Tf(this.compass.root, !mm), mm)) {
          const Tm = this.compassSize.trackHalfWidth / 50;
          mm.compass.cardinals.forEach(((mm, fm) => {
            const hm = this.cardinals[fm];
            hm.textContent !== mm.name && (hm.textContent = mm.name), Tf(hm, mm.hidden), hm.style.translate = mm.left * Tm + "px"
          }));
          const fm = new Set;
          mm.compass.markers.forEach(((hm, Am) => {
            var am;
            fm.add(hm.id);
            let xm = this.markers.get(hm.id);
            xm || (xm = document.createElement("span"), xm.className = "SkyblockCompassMarker", this.markers.set(hm.id, xm), this.compass.track.appendChild(xm)), xm.dataset.icon !== hm.icon && (xm.dataset.icon = hm.icon, xm.replaceChildren(vT(hm.icon))), xm.style.color = null !== (am = hm.colour) && void 0 !== am ? am : "", xm.style.translate = hm.left * Tm + "px", xm.style.zIndex = String(mm.compass.markers.length - Am), xm.title !== hm.name && (xm.title = hm.name)
          }));
          for (const [mm, hm] of this.markers) fm.has(mm) || (hm.remove(), this.markers.delete(mm));
          this.compass.label.textContent !== mm.compass.label && (this.compass.label.textContent = mm.compass.label)
        }
        this.terrain && (Tf(this.terrain, !(null !== mm && void 0 !== mm && mm.minimap)), null !== mm && void 0 !== mm && mm.minimap && (this.terrain.style.transform = mm.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", mm.minimap.iconRotation)));
        const Tm = null === mm || void 0 === mm ? void 0 : mm.searchArea;
        for (const fm of [this.searchAreas.minimap, this.searchAreas.map])
          if (fm && (Tf(fm, !Tm), Tm)) {
            if (this.searchAreaPath.seed !== Tm.shapeSeed && (this.searchAreaPath = {
                seed: Tm.shapeSeed,
                d: WT(gT(Tm.shapeSeed))
              }), fm.dataset.shapeSeed !== Tm.shapeSeed) {
              fm.dataset.shapeSeed = Tm.shapeSeed;
              for (const mm of fm.querySelectorAll("path")) mm.setAttribute("d", this.searchAreaPath.d)
            }
            fm.style.left = `${Tm.left}%`, fm.style.top = `${Tm.top}%`, fm.style.width = `${Tm.width}%`, fm.style.height = `${Tm.height}%`
          } if (this.player && (Tf(this.player, !(null !== mm && void 0 !== mm && mm.player) || mm.player.hidden), null !== mm && void 0 !== mm && mm.player && (this.player.style.left = `${mm.player.left}%`, this.player.style.top = `${mm.player.top}%`, this.player.style.setProperty("--map-player-rotation", mm.player.rotation))), this.waypoint) {
          const {
            root: Tm,
            marker: fm,
            clip: hm,
            text: Am,
            label: am,
            distance: xm,
            hint: wm
          } = this.waypoint, Dm = !(null !== mm && void 0 !== mm && mm.waypoint) || null !== mm.waypoint.popupToken && mm.waypoint.popupToken !== this.waypointOriginToken;
          Tf(Tm, Dm);
          let im = 1;
          const Rm = this.waypointLaunch;
          if (!Dm && Rm && mm.waypoint.nameKey === Rm.nameKey) {
            const mm = performance.now();
            Rm.startedAt ??= mm, im = Math.min(1, Math.max(0, (mm - Rm.startedAt - 450) / 1e3)), fm.style.opacity = String(Math.min(1, (mm - Rm.startedAt) / 150)), 1 === im && (this.waypointLaunch = null)
          } else fm.style.opacity = "", Rm && null !== Rm.startedAt && (this.waypointLaunch = null);
          if (Tm.classList.toggle("Launching", im < 1), null !== mm && void 0 !== mm && mm.waypoint) {
            const Tm = this.waypointInset,
              Dm = "quest_talk" === mm.waypoint.markerIcon ? function(mm, Tm, fm) {
                if (!mm.text || null === mm.blockHeight || 0 === mm.nearness) return mm;
                const hm = mm.blockHeight / 100 * fm.height,
                  Am = -mm.nearness * (ff * hm + Tm.width / 2),
                  am = mm.nearness * (hf * hm + Tm.height / 2);
                return {
                  ...mm,
                  text: {
                    x: mm.text.x + Am / fm.width * 100,
                    y: mm.text.y + am / fm.height * 100
                  }
                }
              }(mm.waypoint, this.waypointMarkerSize, this.viewport) : mm.waypoint,
              pm = (0, ZT.d)(Dm, Tm, this.viewport),
              Em = im * im * (3 - 2 * im),
              om = im < 1 ? Rm.x + (pm.x - Rm.x) * Em : pm.x,
              Om = im < 1 ? Rm.y + (pm.y - Rm.y) * Em : pm.y;
            fm.style.translate = `${om}vw ${Om}vh`, hm.style.clipPath = `inset(${Tm.top}px ${Tm.x}px ${Tm.bottom}px)`, Tf(Am, im < 1 || !mm.waypoint.text), Am.style.opacity = String(1 - mm.waypoint.nearness), mm.waypoint.text && (Am.style.translate = `${mm.waypoint.text.x}vw ${mm.waypoint.text.y}vh`), am.textContent !== mm.waypoint.name && (am.textContent = mm.waypoint.name), this.markerIcon !== mm.waypoint.markerIcon && (this.markerIcon = mm.waypoint.markerIcon, fm.replaceChildren(vT(this.markerIcon))), xm.textContent !== mm.waypoint.distance && (xm.textContent = mm.waypoint.distance), Tf(wm, null === mm.waypoint.hint), null !== mm.waypoint.hint && wm.textContent !== mm.waypoint.hint && (wm.textContent = mm.waypoint.hint)
          }
        }
      }
      dispose() {
        var mm, Tm;
        this.mountWaypointOrigin(null), this.render(null), null === (mm = this.stopLayout) || void 0 === mm || mm.call(this), this.stopLayout = null, null === (Tm = this.stopWaypoint) || void 0 === Tm || Tm.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.PO = !0
      }
    }

    function Tf(mm, Tm) {
      mm.hidden !== Tm && (mm.hidden = Tm)
    }
    const ff = .55,
      hf = .6;
    const Af = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class af {
      constructor(mm, Tm, fm, hm) {
        this.map = mm, this.quests = Tm, this.compass = fm, this.display = new mf, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.PO = !1, this.snapshot = null, this.texts = new Map, this.translate = hm
      }
      setTranslator(mm, Tm) {
        this.translate = mm, this.locale = Tm, this.metresFormat = new Intl.NumberFormat(Tm), this.texts.clear()
      }
      translateCached(mm, Tm) {
        const fm = void 0 === Tm ? mm : `${mm} ${Tm}`;
        let hm = this.texts.get(fm);
        return void 0 === hm && (this.texts.size >= 500 && this.texts.clear(), hm = this.translate(mm, void 0 === Tm ? void 0 : {
          distance: Tm
        }), this.texts.set(fm, hm)), hm
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(mm, Tm, fm) {
        if (this.PO) return;
        if (!mm) return this.snapshot = null, void this.display.render(null);
        const hm = this.map.getSnapshot().map,
          Dm = fm.cameraHeading,
          im = {
            ...this.display.compassSize,
            tanHalfFovX: fm.tanHalfFovX,
            pitch: fm.cameraPitch
          },
          Rm = [];
        if (hm)
          for (const Am of this.compass.frame(mm, Dm, Tm)) {
            const mm = Ym(Am.offset, im);
            null !== mm && Rm.push({
              ...Am,
              left: mm
            })
          }
        const pm = function(mm, Tm) {
            const fm = [],
              hm = mm => "quest" === mm.kind ? mm.distance - 1 : mm.distance,
              Am = [...mm].sort(((mm, Tm) => hm(mm) - hm(Tm) || mm.id.localeCompare(Tm.id)));
            for (const am of Am) {
              let mm = !1;
              if ("quest" !== am.kind)
                for (const hm of fm)
                  if (Math.abs(hm.left - am.left) < Tm) {
                    mm = !0;
                    break
                  } mm || fm.push(am)
            }
            return fm
          }(Rm, this.display.compassSpacing),
          Em = function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              fm = null;
            for (const hm of mm) Math.abs(hm.offset) <= Tm && (!fm || hm.distance < fm.distance || hm.distance === fm.distance && Math.abs(hm.offset) < Math.abs(fm.offset)) && (fm = hm);
            return fm
          }(pm),
          om = mm => {
            var Tm;
            return null !== (Tm = mm.displayName) && void 0 !== Tm ? Tm : this.translateCached(mm.nameKey)
          },
          Om = {
            compass: {
              markers: pm.map((mm => ({
                id: mm.id,
                icon: mm.icon,
                colour: mm.colour,
                name: om(mm),
                left: mm.left
              }))),
              cardinals: xm.map((mm => {
                let {
                  name: Tm,
                  bearing: fm
                } = mm;
                const hm = Ym(Am.c.computeShortestRotation(Dm, fm), im);
                return {
                  name: Tm,
                  left: null !== hm && void 0 !== hm ? hm : 0,
                  hidden: null === hm
                }
              })),
              label: Em ? `${om(Em)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",nm(Em.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== hm && void 0 !== hm && hm.background) {
          const Tm = mm[0] - hm.mapOrigin[0],
            fm = mm[2] - hm.mapOrigin[2],
            {
              rotation: Am,
              transform: xm
            } = function(mm, Tm, fm, hm) {
              const [Am, xm] = wm(mm, Tm, hm), Dm = am - fm;
              return {
                rotation: Dm,
                transform: `rotate(${Dm}rad) translate(-${Am}%, -${xm}%)`
              }
            }(Tm, fm, Dm, hm.background.bounds);
          Om.minimap = {
            transform: xm,
            iconRotation: -Am + "rad"
          };
          const [im, Rm] = wm(Tm, fm, hm.background.bounds);
          Om.player = {
            left: im,
            top: Rm,
            hidden: im < 0 || Rm < 0 || im > 100 || Rm > 100,
            rotation: -Am + "rad"
          }
        }
        const {
          waypoint: qm
        } = this.quests.getSnapshot();
        if ("search" === (null === qm || void 0 === qm ? void 0 : qm.questMarkerIcon) && null !== hm && void 0 !== hm && hm.background) {
          const {
            bounds: mm
          } = hm.background, [Tm, fm] = wm(qm.position[0] - hm.mapOrigin[0], qm.position[2] - hm.mapOrigin[2], mm);
          Om.searchArea = {
            left: Tm,
            top: fm,
            width: 6400 / (mm.mapMaxX - mm.mapMinX),
            height: 6400 / (mm.mapMaxZ - mm.mapMinZ),
            shapeSeed: qm.nameKey
          }
        }
        const jm = this.quests.getNotificationSnapshot(),
          Vm = "completion" === (null === jm || void 0 === jm ? void 0 : jm.phase) && !zT(jm.kind);
        if (qm && !Vm) {
          const Tm = Math.hypot(...qm.position.map(((Tm, fm) => Tm - mm[fm]))),
            hm = Math.round(Tm),
            Am = "talk" === qm.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Tm) / 5)) : 0,
            am = fm.projectWorldPosToViewport(qm.position),
            xm = am && fm.projectWorldPosToViewport([qm.position[0], qm.position[1] - 1, qm.position[2]]);
          Om.waypoint = {
            ...fm.projectWorldPosToScreenPos(qm.position),
            text: am,
            nearness: Am * Am * (3 - 2 * Am),
            blockHeight: am && xm ? xm.y - am.y : null,
            name: this.translateCached(qm.nameKey),
            nameKey: qm.nameKey,
            markerIcon: qm.questMarkerIcon ? Af[qm.questMarkerIcon] : "quest",
            popupToken: (null === jm || void 0 === jm ? void 0 : jm.waypointNameKey) === qm.nameKey ? jm.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(hm)),
            hint: "search" === qm.questMarkerIcon && Math.hypot(qm.position[0] - mm[0], qm.position[2] - mm[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Om, this.display.render(Om)
      }
      dispose() {
        this.PO = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const xf = "skyblockSkillsView";
    class wf extends pm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          fm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm => mm,
          hm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mm => mm;
        super(mm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Tm, this.translate = fm, this.locale = hm, this.itemName = Am, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = mm => {
          this.selected = mm, this.emit()
        }
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, this.locale = Tm, this.itemName = fm, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(mm) {
        let Tm = this.skillText.get(mm);
        return Tm || (Tm = {
          label: this.translate(`skyblockGame:${mm}`),
          description: this.translate(`skyblockGame:${mm}Description`)
        }, this.skillText.set(mm, Tm)), Tm
      }
      sources(mm) {
        if ("mining" === mm || "fishing" === mm) return this.buildSources(mm);
        let Tm = this.sourceText.get(mm);
        return Tm || (Tm = this.buildSources(mm), this.sourceText.set(mm, Tm)), Tm
      }
      buildSources(mm) {
        const Tm = this.translate;
        return "exploration" === mm ? [Tm("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Tm("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === mm ? [Tm("skyblockGame:logSource", {
          xp: this.number(OT["Maple Log"])
        })] : "combat" === mm ? [Tm("skyblockGame:creatureKillSource"), Tm("skyblockGame:noEnvironmentalXp")] : "farming" === mm ? [Tm("skyblockGame:cropSource", {
          xp: this.number(jT["Wheat|FreshlyGrown"])
        }), Tm("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Tm("skyblockGame:noYoungCropXp")] : Object.entries("mining" === mm ? qT : VT).map((mm => {
          let [fm, hm] = mm;
          return Tm("skyblockGame:itemXpSource", {
            item: this.itemName(fm),
            xp: this.number(hm)
          })
        }))
      }
      number(mm) {
        return mm.toLocaleString(this.locale)
      }
      benefit(mm, Tm) {
        const fm = wT(mm, Tm);
        return this.translate(fm.translationKey, {
          bonus: this.number(fm.percent)
        })
      }
      rO(mm) {
        if (!this.PO) {
          if ("snapshot" === mm.kind) this.progress = mm.progress, this.pending.clear(), this.recent = null;
          else if ("award" === mm.kind && this.progress) {
            const {
              award: Tm
            } = mm;
            this.progress = {
              ...this.progress,
              [Tm.skill]: Tm.after
            };
            for (const [mm, hm] of this.pending) hm.skill === Tm.skill && this.pending.delete(mm);
            const fm = Tm.after.level > Tm.before.level;
            this.recordGain(Tm.skill, Tm.amount, fm ? ++this.nextLevelUpToken : null), fm && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Tm.skill,
              beforeLevel: Tm.before.level,
              level: Tm.after.level
            })
          } else {
            if ("rejectBlock" === mm.kind) return void this.rejectBlock(mm.position);
            if ("open" === mm.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(mm, Tm, fm) {
        if (!this.progress || this.PO || fm) return;
        const hm = function(mm, Tm) {
          const fm = mm.split("|")[0];
          return "Air" === Tm || Tm === `Barkless ${mm}` ? Object.hasOwn(OT, fm) ? {
            skill: "foraging",
            amount: OT[fm]
          } : "Air" !== Tm ? null : Object.hasOwn(qT, mm) ? {
            skill: "mining",
            amount: qT[mm]
          } : pT(mm) ? {
            skill: "farming",
            amount: 10
          } : oT(mm) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(jT, mm) ? {
            skill: "farming",
            amount: jT[mm]
          } : Object.hasOwn(Cm, mm) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Tm, "Air");
        if (!hm) return;
        const Am = mm.join(",");
        if (this.pending.has(Am)) return;
        const am = this.predictedProgress(hm.skill).totalXp + hm.amount;
        Number.isSafeInteger(am) && (this.pending.set(Am, {
          ...hm,
          expires: this.now() + 2e3
        }), this.recordGain(hm.skill, 0), this.emit())
      }
      rejectBlock(mm) {
        this.pending.delete(mm.join(",")) && this.emit()
      }
      DE() {
        if (this.PO) return;
        let mm = !1;
        for (const [Tm, fm] of this.pending) fm.expires <= this.now() && (this.pending.delete(Tm), mm = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, mm = !0), mm && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(mm, Tm) {
        var fm, hm;
        let Am = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const am = (null === (fm = this.recent) || void 0 === fm ? void 0 : fm.skill) === mm && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          xm = (null === (hm = this.recent) || void 0 === hm ? void 0 : hm.skill) === mm && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: mm,
          confirmed: am + Tm,
          expires: this.now() + 3e3,
          levelUpToken: null !== Am && void 0 !== Am ? Am : xm
        }
      }
      pendingXp(mm) {
        let Tm = 0;
        for (const fm of this.pending.values()) fm.skill === mm && (Tm += fm.amount);
        return Tm
      }
      predictedProgress(mm) {
        const Tm = this.progress[mm],
          fm = this.pendingXp(mm);
        return fm ? iT(Tm.totalXp + fm, mm) : Tm
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var mm, Tm, fm;
        const hm = this.progress ? gm.map((mm => {
            const Tm = this.predictedProgress(mm);
            return {
              ...this.text(mm),
              icon: IT[mm],
              benefit: this.benefit(mm, Tm.level),
              sources: this.sources(mm),
              id: mm,
              selected: mm === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Tm.level)
              }),
              xp: null === Tm.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Tm.xpIntoLevel),
                target: this.number(Tm.xpForNextLevel)
              }),
              percent: null === Tm.xpForNextLevel ? 100 : Math.min(100, Tm.xpIntoLevel / Tm.xpForNextLevel * 100)
            }
          })) : [],
          Am = hm.find((mm => {
            var Tm;
            return mm.id === (null === (Tm = this.recent) || void 0 === Tm ? void 0 : Tm.skill)
          })),
          am = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: hm,
          detail: null !== (mm = hm.find((mm => mm.selected))) && void 0 !== mm ? mm : null,
          overallLevel: this.progress ? gm.reduce(((mm, Tm) => mm + this.predictedProgress(Tm).level), 0) : null,
          hud: Am && am > 0 ? {
            skill: Am,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(am)
            }),
            levelUpToken: null !== (Tm = null === (fm = this.recent) || void 0 === fm ? void 0 : fm.levelUpToken) && void 0 !== Tm ? Tm : null,
            colour: QT(Am.id)
          } : null
        }
      }
    }
    const Df = Math.max(1600, 600, 950) + 400,
      Rf = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      pf = "skyblockQuestsView",
      Ef = "skyblockQuestNotificationView";
    class of extends pm {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          xm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(mm, hm, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Tm, this.translate = fm, this.now = Am, this.locale = am, this.publishNotification = xm, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var mm, Tm;
          this.selected = null !== (mm = null === (Tm = this.authoritative) || void 0 === Tm ? void 0 : Tm.trackedQuestId) && void 0 !== mm ? mm : null, this.show()
        }, this.select = mm => {
          this.selected = mm, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const mm = this.snapshot.detail;
          !this.PO && null !== mm && void 0 !== mm && mm.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(mm.id), this.emit())
        }, this.viewDialogue = () => {
          const mm = this.snapshot.detail;
          var Tm;
          mm && (null === (Tm = this.onViewDialogue) || void 0 === Tm || Tm.call(this, mm.id))
        }, this.notifications = new JT(Am, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.authoritative) || void 0 === Tm ? void 0 : Tm.trackedQuestId) && void 0 !== mm ? mm : null
      }
      notify(mm) {
        !this.PO && this.notifications.enqueue(mm) && this.emitNotification()
      }
      setNotificationsHeld(mm) {
        (this.notifications.setHeld(mm) || mm) && this.emitNotification()
      }
      DE() {
        var mm, Tm;
        if (this.PO) return;
        this.notifications.DE() && this.emitNotification();
        let fm = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, fm = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, fm = !0);
        const hm = Of(this.authoritative);
        null !== hm && void 0 !== hm && null !== (mm = hm.questClock) && void 0 !== mm && mm.running && this.clockText(hm) !== (null === (Tm = this.snapshot.tracked) || void 0 === Tm ? void 0 : Tm.clock) && (fm = !0), fm && this.emit()
      }
      setTranslator(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = mm, this.locale = Tm, this.emitNotification(), this.emit()
      }
      rO(mm) {
        if (!this.PO)
          if ("completion" === mm.kind) this.notify(mm.questCompletion);
          else if ("landmark" === mm.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: mm.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === mm.kind) {
          var Tm, fm, hm;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: mm.npcNoteTitleKey,
            textKey: mm.npcNoteTextKey,
            params: null !== (Tm = mm.npcNoteParams) && void 0 !== Tm ? Tm : {},
            nameKeys: null !== (fm = mm.npcNoteNameKeys) && void 0 !== fm ? fm : {},
            iconItem: null !== (hm = mm.npcNoteIconItem) && void 0 !== hm ? hm : null
          })
        } else if ("open" === mm.kind) this.show();
        else if ("guidance" === mm.kind) this.waypoint = mm.waypoint, this.compassTarget = mm.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === mm.kind) {
          this.authoritative = mm.snapshot, this.notifications.DE() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Tm = this.trackedStepPulse;
          this.updateTrackedStepPulse(mm.snapshot), this.emit(), this.trackedStepPulse > Tm && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.PO || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var mm;
        return null !== (mm = this.translateWithIcons) && void 0 !== mm ? mm : this.translate
      }
      clockText(mm) {
        const Tm = mm.questClock;
        if (!Tm) return null;
        const fm = Tm.elapsedMs + (Tm.running ? this.now() - this.receivedAt : 0);
        return void 0 === Tm.countdownFromMs ? Gm(fm, !1) : Gm(1e3 * Math.ceil(Math.max(0, Tm.countdownFromMs - fm) / 1e3), !1)
      }
      updateTrackedStepPulse(mm) {
        var Tm, fm, hm;
        const Am = Of(mm);
        if (!Am) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const am = mm => Am.subquests.filter((Tm => mm(Tm.status))).map((mm => mm.id)),
          xm = am((mm => "completed" === mm || "skipped" === mm)),
          wm = am((mm => "locked" !== mm)),
          Dm = (null === (Tm = this.trackedSteps) || void 0 === Tm ? void 0 : Tm.questId) === Am.id && Am.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Dm) {
          const mm = xm.filter((mm => !Dm.finished.has(mm))),
            Tm = am((mm => "active" === mm || "ready" === mm)).filter((mm => !Dm.unlocked.has(mm)));
          mm.length > 0 && this.trackedStepPulse++, (mm.length > 0 || Tm.length > 0) && (this.trackedChange = {
            finished: new Set(mm),
            unlocked: new Set(Tm),
            expiresAt: this.now() + Df
          })
        } else {
          var im;
          this.trackedStepPulse = (null === (im = this.trackedSteps) || void 0 === im ? void 0 : im.questId) === Am.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Am.id,
          progress: Am.progress,
          finished: new Set([...null !== (fm = null === Dm || void 0 === Dm ? void 0 : Dm.finished) && void 0 !== fm ? fm : [], ...xm]),
          unlocked: new Set([...null !== (hm = null === Dm || void 0 === Dm ? void 0 : Dm.unlocked) && void 0 !== hm ? hm : [], ...wm])
        }
      }
      entry(mm, Tm) {
        var fm, hm;
        const Am = mm.id === (null === (fm = this.authoritative) || void 0 === fm ? void 0 : fm.trackedQuestId),
          am = this.now() < this.trackAvailableAt,
          xm = this.questTextTranslator(),
          wm = mm.subquests.map((Tm => {
            var fm, hm, am, wm, Dm, im;
            const Rm = null !== (fm = Tm.handInNpcName) && void 0 !== fm ? fm : mm.giverName,
              pm = this.translate("skyblockGame:progress", {
                current: Tm.progress.toLocaleString(this.locale),
                target: Tm.target.toLocaleString(this.locale)
              }),
              Em = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Rm ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Tm.status],
              om = "active" === Tm.status || "ready" === Tm.status;
            return {
              id: Tm.id,
              name: nT(xm, Tm.nameKey, Tm.nameParams),
              description: nT(xm, Tm.descriptionKey, Tm.descriptionParams),
              progress: pm,
              status: Tm.status,
              statusLabel: Em ? this.translate(Em, {
                npc: Rm
              }) : pm,
              iconItem: om && null !== (hm = Tm.questIconItem) && void 0 !== hm ? hm : null,
              barPercent: "active" === Tm.status && Tm.showsProgressBar ? Math.min(100, 100 * Tm.progress / Tm.target) : null,
              justFinished: Am && null !== (am = null === (wm = this.trackedChange) || void 0 === wm ? void 0 : wm.finished.has(Tm.id)) && void 0 !== am && am,
              justUnlocked: Am && null !== (Dm = null === (im = this.trackedChange) || void 0 === im ? void 0 : im.unlocked.has(Tm.id)) && void 0 !== Dm && Dm
            }
          }));
        return {
          id: mm.id,
          name: nT(xm, mm.nameKey, mm.nameParams),
          description: nT(xm, mm.descriptionKey, mm.descriptionParams),
          progress: Tm ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: mm.progress.toLocaleString(this.locale),
            target: mm.target.toLocaleString(this.locale)
          }),
          completed: Tm,
          tracked: Am,
          selected: mm.id === this.selected,
          canTrack: !Tm && !Am && !am,
          trackLabel: this.translate(Am ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : am ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== mm.id,
          subquests: wm,
          focusStep: null !== (hm = wm.find((mm => null !== mm.barPercent))) && void 0 !== hm ? hm : null,
          clock: this.clockText(mm)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var mm, Tm, fm, hm, Am, am, xm, wm, Dm, im;
        const Rm = [...null !== (mm = null === (Tm = this.authoritative) || void 0 === Tm ? void 0 : Tm.active) && void 0 !== mm ? mm : [], ...null !== (fm = null === (hm = this.authoritative) || void 0 === hm ? void 0 : hm.completed) && void 0 !== fm ? fm : []];
        var pm, Em, om, Om;
        Rm.some((mm => mm.id === this.selected)) || (this.selected = null !== (pm = null !== (Em = null === (om = this.authoritative) || void 0 === om ? void 0 : om.trackedQuestId) && void 0 !== Em ? Em : null === (Om = Rm[0]) || void 0 === Om ? void 0 : Om.id) && void 0 !== pm ? pm : null);
        const Ym = null !== (Am = null === (am = this.authoritative) || void 0 === am ? void 0 : am.active.map((mm => this.entry(mm, !1)))) && void 0 !== Am ? Am : [];
        Ym.sort(((mm, Tm) => Number(Tm.tracked) - Number(mm.tracked)));
        const qm = null !== (xm = null === (wm = this.authoritative) || void 0 === wm ? void 0 : wm.completed.map((mm => this.entry(mm, !0)))) && void 0 !== xm ? xm : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Ym,
          completed: qm,
          completedExpanded: this.completedExpanded,
          detail: null !== (Dm = [...Ym, ...qm].find((mm => mm.selected))) && void 0 !== Dm ? Dm : null,
          tracked: null !== (im = Ym.find((mm => mm.tracked))) && void 0 !== im ? im : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Of(mm) {
      var Tm;
      return null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.active.find((Tm => Tm.id === mm.trackedQuestId))) && void 0 !== Tm ? Tm : null
    }
    const Yf = "skyblockDungeonsView";
    class qf extends pm {
      constructor(mm, Tm) {
        let fm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          hm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(mm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Tm, this.locale = fm, this.requestEnter = hm, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = mm => {
          this.selected = mm, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const mm = this.pickerEntry(),
            Tm = null === mm || void 0 === mm ? void 0 : mm.difficulties[this.pageIndex];
          void 0 !== Tm && null !== Tm.unlockedBoss && (this.close(), this.requestEnter(mm.id, Tm.difficulty))
        }
      }
      setTranslator(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = mm, this.locale = Tm, this.emit()
      }
      rO(mm) {
        var Tm, fm;
        if (!this.PO) return "open" === mm.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== mm.kind ? "snapshot" === mm.kind && (this.authoritative = mm.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Tm = null === (fm = this.pickerEntry()) || void 0 === fm ? void 0 : fm.difficulties.length) && void 0 !== Tm ? Tm : 1) - 1)), null === mm.snapshot && this.open ? this.close() : this.emit()) : this.choose(mm.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(mm) {
        var Tm;
        const fm = null === (Tm = this.authoritative) || void 0 === Tm ? void 0 : Tm.dungeons.find((Tm => Tm.id === mm));
        void 0 !== fm ? this.open && this.pickerDungeonId === mm || (this.pickerDungeonId = mm, this.pageIndex = Math.max(0, fm.difficulties.findLastIndex((mm => null !== mm.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${mm}`)
      }
      turnTo(mm) {
        var Tm, fm;
        const hm = null !== (Tm = null === (fm = this.pickerEntry()) || void 0 === fm ? void 0 : fm.difficulties.length) && void 0 !== Tm ? Tm : 0;
        mm < 0 || mm >= hm || mm === this.pageIndex || (this.pageIndex = mm, this.emit())
      }
      pickerEntry() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.authoritative) || void 0 === Tm ? void 0 : Tm.dungeons.find((mm => mm.id === this.pickerDungeonId))) && void 0 !== mm ? mm : null
      }
      difficulty(mm) {
        const Tm = mm.completions > 0,
          fm = null === mm.bestMs ? null : Gm(mm.bestMs);
        return {
          difficulty: mm.difficulty,
          label: this.translate(em[mm.difficulty]),
          colour: Nm[mm.difficulty],
          beaten: Tm,
          bestTime: fm,
          completions: mm.completions,
          summary: Tm ? [null === fm ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: fm
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: mm.completions.toLocaleString(this.locale)
          })].filter((mm => null !== mm)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(mm) {
        const Tm = mm.difficulties.map((mm => this.difficulty(mm))),
          fm = Tm.filter((mm => mm.beaten)).length;
        return {
          id: mm.id,
          name: this.translate(mm.nameKey),
          selected: mm.id === this.selected,
          beatenSummary: `${fm} / ${Tm.length}`,
          difficulties: Tm
        }
      }
      picker() {
        const mm = this.pickerEntry();
        if (null === mm || 0 === mm.difficulties.length) return null;
        const Tm = mm.difficulties.map(((Tm, fm) => {
          var hm, Am, am, xm;
          const wm = Tm.unlockedBoss,
            Dm = null === wm ? this.lockedHint(mm, fm) : null;
          return {
            ...this.difficulty(Tm),
            unlocked: null !== wm,
            bossName: null === wm ? null : this.translate(wm.bossNameKey),
            bossMobType: null !== (hm = null === wm || void 0 === wm ? void 0 : wm.bossMobType) && void 0 !== hm ? hm : null,
            bossMobVariation: null !== (Am = null === wm || void 0 === wm ? void 0 : wm.bossMobVariation) && void 0 !== Am ? Am : null,
            lockedHint: null !== (am = null === Dm || void 0 === Dm ? void 0 : Dm.text) && void 0 !== am ? am : null,
            lockedHintHighlight: null !== (xm = null === Dm || void 0 === Dm ? void 0 : Dm.highlight) && void 0 !== xm ? xm : null,
            current: fm === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(mm.nameKey),
          pages: Tm,
          page: Tm[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Tm.length - 1
        }
      }
      lockedHint(mm, Tm) {
        var fm, hm, Am;
        if (0 === Tm && "number" === typeof mm.combatLevelLock) {
          const Tm = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: mm.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Tm,
            colour: QT("combat"),
            icon: IT.combat
          })
        }
        const am = null !== (fm = null === (hm = this.authoritative) || void 0 === hm ? void 0 : hm.dungeons) && void 0 !== fm ? fm : [],
          xm = Tm > 0 ? mm : null !== (Am = am[am.indexOf(mm) - 1]) && void 0 !== Am ? Am : null,
          wm = Tm > 0 ? mm.difficulties[Tm - 1] : null === xm || void 0 === xm ? void 0 : xm.difficulties[0];
        if (null === xm || void 0 === wm) return null;
        const Dm = this.translate(xm.nameKey);
        if (null === wm.unlockedBoss) return xm === mm ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, wm.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Dm
        }, wm.difficulty);
        const im = this.translate(wm.unlockedBoss.bossNameKey);
        return xm === mm ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: im
        }, wm.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: im,
            dungeon: Dm
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(mm, Tm, fm) {
        return this.hintHighlighting(mm, Tm, "difficulty", {
          name: this.translate(em[fm]),
          colour: Nm[fm],
          icon: null
        })
      }
      hintHighlighting(mm, Tm, fm, hm) {
        let {
          name: Am,
          colour: am,
          icon: xm
        } = hm;
        const wm = this.translate(mm, {
          ...Tm,
          [fm]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(mm, {
            ...Tm,
            [fm]: Am
          }),
          highlight: 2 === wm.length ? {
            before: wm[0],
            name: Am,
            after: wm[1],
            colour: am,
            icon: xm
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var mm, Tm, fm;
        const hm = null !== (mm = null === (Tm = this.authoritative) || void 0 === Tm ? void 0 : Tm.dungeons) && void 0 !== mm ? mm : [];
        var Am, am;
        hm.some((mm => mm.id === this.selected)) || (this.selected = null !== (Am = null === (am = hm[0]) || void 0 === am ? void 0 : am.id) && void 0 !== Am ? Am : null);
        const xm = hm.map((mm => this.entry(mm)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: xm,
          detail: null !== (fm = xm.find((mm => mm.selected))) && void 0 !== fm ? fm : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const jf = ["mining", "farming", "foraging", "fishing", "combat"],
      Vf = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      If = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Kf() {
      for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
      return Tm.map(((mm, Tm) => ({
        amount: mm,
        coins: Vf[Tm],
        xp: If[Tm]
      })))
    }
    const Qf = Kf(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      nf = Kf(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Jf = Kf(50, 100, 250, 500, 1e3, 2500, 5e3),
      zf = Kf(25, 50, 100, 250, 500, 1e3),
      Zf = Kf(10, 25, 50, 100, 250, 500, 1e3),
      kf = Kf(1, 5, 10, 25, 50);

    function bf(mm, Tm) {
      return {
        id: mm,
        category: "fishing",
        item: Tm,
        drops: [Tm],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zf
      }
    }
    const Sf = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: nf
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Jf
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Jf
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: zf
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: zf
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: nf
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Qf
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Qf
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Qf
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Jf
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: nf
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: nf
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: nf
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Jf
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Jf
      }, bf("wheatfish", "Wheatfish"), bf("darter", "Darter"), bf("sunset_minnow", "Sunset Minnow"), bf("root_flounder", "Root Flounder"), bf("greenfin_loach", "Greenfin Loach"), bf("red_strongfish", "Red Strongfish"), bf("green_strongfish", "Green Strongfish"), bf("boomerang_fish", "Boomerang Fish"), bf("seahorse", "Seahorse"), bf("spined_stickleback", "Spined Stickleback"), bf("moon_strongfish", "Moon Strongfish"), bf("boulder_bass", "Boulder Bass"), bf("grass_snapper", "Grass Snapper"), bf("crystal_wheatfish", "Crystalized Wheatfish", kf), bf("moonstone_pupfish", "Moonstone Pupfish", kf), bf("reedglass_minnow", "Reedglass Minnow"), bf("mangrove_herring", "Mangrove Herring"), bf("mudline_perch", "Mudline Perch"), bf("coastal_mullet", "Coastal Mullet"), bf("reef_sardine", "Reef Sardine"), bf("root_perch", "Root Perch"), bf("driftwood_catfish", "Driftwood Catfish"), bf("aether_minnow", "Aether Minnow"), bf("needlefish", "Tri-Pointed Needlefish"), bf("threadfin_bream", "Threadfin Bream"), bf("mudbelly_tilapia", "Mudbelly Tilapia"), bf("rotslab_eel", "Rotslab Eel"), bf("polarflash_electron", "Polarflash Electron"), bf("mireback_carp", "Mireback Carp"), bf("blackwater_bream", "Blackwater Bream"), bf("stone_grouper", "Stone Grouper"), bf("shadeback_ray", "Shadeback Ray"), bf("glacial_silverfish", "Glacial Silverfish"), bf("hatchetfish", "Hatchetfish"), bf("moonlit_boomerang", "Moonlit Boomerang Fish"), bf("murkborne_ray", "Murkborne Ray"), bf("bamboo_catfish", "Bamboo Catfish"), bf("mossback_arapaima", "Mossback Arapaima"), bf("murk_stingray", "Murk Stingray"), bf("channel_sawfish", "Channel Sawfish"), bf("boned_sturgeon", "Boned Sturgeon"), bf("oarfish", "Oarfish"), bf("snakehead", "Snakehead", kf), bf("eldertide_leviathan", "Eldertide Leviathan", kf), bf("pithead", "Pithead"), bf("electric_eel", "Electric Eel"), bf("shadow_darter", "Shadow Darter"), bf("abyss_carp", "Abyss Carp"), bf("nomai_moray", "Nomai Moray"), bf("silver_dragonfish", "Silver Dragonfish"), bf("giant_moray", "Giant Moray"), bf("coelacanth", "Coelacanth", kf), bf("frost_herring", "Frost Herring"), bf("permafrost_halibut", "Permafrost Halibut"), bf("glacial_lanternfish", "Glacial Lanternfish"), bf("frozen_grenadier", "Frozen Grenadier"), bf("blackfin_icefish", "Blackfin Icefish"), bf("moonfish", "Moonfish"), bf("alpha_strongfish", "Alpha Moon Strongfish"), bf("deep_lanternfish", "Deepwater Lanternfish", kf), bf("pearlescent_moonfish", "Pearlescent Moonfish", kf), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: nf
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: zf
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: zf
      }],
      ef = (new Map(Sf.map((mm => [mm.id, mm]))), new Map),
      Nf = new Map;
    for (const pD of Sf) {
      for (const [mm, Tm] of Object.entries(null !== (Gf = pD.blocks) && void 0 !== Gf ? Gf : {})) {
        var Gf;
        ef.set(mm, {
          collection: pD,
          amount: Tm
        })
      }
      for (const mm of null !== (Xf = pD.drops) && void 0 !== Xf ? Xf : []) {
        var Xf;
        Nf.set(mm, pD)
      }
    }

    function Pf(mm, Tm) {
      let fm = 0;
      for (; fm < mm.tiers.length && Tm >= mm.tiers[fm].amount;) fm++;
      return fm
    }
    const Hf = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function yf(mm) {
      return Hf[mm - 1]
    }
    const Cf = "skyblockCollectionsView";
    class rf extends pm {
      constructor(mm, Tm) {
        let fm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          hm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mm => mm;
        super(mm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Tm, this.locale = fm, this.itemName = hm, this.counts = null, this.category = "mining", this.selected = Sf[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = mm => {
          this.category = mm, this.selected = this.inCategory(mm)[0].id, this.emit()
        }, this.select = mm => {
          this.selected = mm, this.emit()
        }
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, this.locale = Tm, this.itemName = fm, this.emit()
      }
      rO(mm) {
        if (!this.PO)
          if ("collOpen" !== mm.kind) {
            (mm.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Tm, fm] of mm.collCounts) this.counts.set(Tm, fm);
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
        var mm;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const Tm = this.inCategory(this.category).map((mm => this.collectionView(mm))),
          fm = Sf.reduce(((mm, Tm) => mm + this.tierOf(Tm)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: jf.map((mm => this.categoryView(mm))),
          collections: Tm,
          detail: null !== (mm = Tm.find((mm => mm.selected))) && void 0 !== mm ? mm : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(fm)
          })
        }
      }
      categoryView(mm) {
        const Tm = this.inCategory(mm),
          fm = Tm.reduce(((mm, Tm) => mm + this.tierOf(Tm)), 0),
          hm = Tm.reduce(((mm, Tm) => mm + Tm.tiers.length), 0);
        return {
          id: mm,
          label: this.translate(`skyblockGame:${mm}`),
          icon: IT[mm],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(fm),
            target: this.number(hm)
          }),
          selected: mm === this.category
        }
      }
      collectionView(mm) {
        var Tm, fm;
        const hm = null !== (Tm = this.counts.get(mm.id)) && void 0 !== Tm ? Tm : 0,
          Am = Pf(mm, hm),
          am = null !== (fm = mm.tiers[Am]) && void 0 !== fm ? fm : null,
          xm = 0 === Am ? 0 : mm.tiers[Am - 1].amount;
        return {
          id: mm.id,
          name: this.itemName(mm.item),
          icon: mm.item,
          selected: mm.id === this.selected,
          locked: 0 === hm,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(hm)
          }),
          tier: 0 === Am ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Am),
          percent: null === am ? 100 : Math.min(100, (hm - xm) / (am.amount - xm) * 100),
          progress: null === am ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(hm),
            target: this.number(am.amount)
          }),
          nextReward: null === am ? null : this.reward(mm, am.coins, am.xp)
        }
      }
      reward(mm, Tm, fm) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Tm),
          xp: this.number(fm),
          skill: this.translate(`skyblockGame:${mm.category}`)
        })
      }
      tierLabel(mm) {
        return this.translate("skyblockGame:collectionTier", {
          tier: yf(mm)
        })
      }
      tierOf(mm) {
        var Tm;
        return Pf(mm, null !== (Tm = this.counts.get(mm.id)) && void 0 !== Tm ? Tm : 0)
      }
      inCategory(mm) {
        return Sf.filter((Tm => Tm.category === mm))
      }
      number(mm) {
        return mm.toLocaleString(this.locale)
      }
    }
    const sf = "skyblockPortalTransitView",
      lf = "skyblockPortalArrival";
    class Mf {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.gp = mm, this.storage = Tm, this.now = fm, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      rO(mm) {
        const Tm = {
          zoneNameKey: mm.transitZoneNameKey,
          variation: mm.transitZoneVariation,
          colour: mm.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(lf, Tm), this.show("departure", Tm.zoneNameKey, Tm.colour, mm.transitDurationMs, mm.transitDurationMs + 1500, (() => {
          this.storage.removeItem(lf)
        }))
      }
      resumeArrival(mm) {
        const Tm = this.storage.getItem(lf);
        this.storage.removeItem(lf), null === Tm || Tm.variation !== mm || this.now() - Tm.departedAt > 3e4 || this.show("arrival", Tm.zoneNameKey, Tm.colour, 3200, 2e4)
      }
      finishArrival(mm) {
        var Tm;
        "arrival" === (null === (Tm = this.view) || void 0 === Tm ? void 0 : Tm.phase) && this.view.token === mm && (this.clearTimer(), this.view = null, this.gp(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(mm, Tm, fm, hm, Am, am) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: mm,
          zoneNameKey: Tm,
          colour: fm,
          durationMs: hm
        }, this.gp(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.gp(null), null === am || void 0 === am || am()
        }), Am)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const uf = "skyblockDailyRewardView",
      Bf = "skyblockDailyRewardCoin";
    class Lf {
      constructor(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Dm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.gp = mm, this.isBusy = Tm, this.holdQuestPopups = fm, this.onHeldCoinsChanged = hm, this.onCoinLanded = Am, this.onStarted = am, this.onFinished = xm, this.onItemLanded = wm, this.now = Dm, this.ni = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.playing) || void 0 === Tm ? void 0 : Tm.view) && void 0 !== mm ? mm : null
      }
      getHeldCoins() {
        var mm, Tm;
        let fm = 0;
        for (const hm of this.ni) fm += hm.coins;
        return fm - (null !== (mm = null === (Tm = this.playing) || void 0 === Tm ? void 0 : Tm.released) && void 0 !== mm ? mm : 0)
      }
      rO(mm) {
        "dailyRewardClaimed" !== mm.kind ? (this.queue.push(mm), this.DE()) : this.ni.push({
          coins: mm.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      DE() {
        const mm = this.now();
        if (null === this.playing) return this.releaseUnshown(mm), void this.startNext(mm);
        const Tm = this.playing,
          fm = mm - Tm.startedAt,
          hm = Tm.view.flyingCoins,
          Am = function(mm, Tm) {
            let fm = 0;
            for (; fm < Tm && tf(fm, Tm) <= mm;) fm++;
            return fm
          }(fm, hm);
        if (Am !== Tm.landed) {
          for (let mm = Am - Tm.landed > 2 ? Am - 1 : Tm.landed; mm < Am; mm++) this.onCoinLanded(mm, hm);
          Tm.landed = Am, Tm.released = Math.round(Tm.view.coins * Am / hm), this.onHeldCoinsChanged()
        }
        for (; Tm.itemsLanded < Tm.view.items.length && 2e3 + 160 * Tm.itemsLanded + 630 <= fm;) this.onItemLanded(Tm.itemsLanded), Tm.itemsLanded++;
        fm >= Tm.view.durationMs && (this.finish(), this.startNext(mm))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.ni = [], this.gp(null)
      }
      startNext(mm) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Tm = this.queue.shift();
        this.token++;
        const fm = {
          token: this.token,
          day: Tm.dailyRewardDay,
          coins: Tm.dailyRewardCoins,
          items: Tm.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Tm.dailyRewardDay === km ? 24 : 14
        };
        this.playing = {
          view: fm,
          startedAt: mm,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.gp(fm), this.onStarted(fm)
      }
      finish() {
        this.ni.shift(), this.playing = null, this.holdQuestPopups(!1), this.gp(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(mm) {
        if (this.queue.length > 0 || 0 === this.ni.length) return;
        const Tm = this.ni.length;
        this.ni = this.ni.filter((Tm => mm - Tm.receivedAt < 6e4)), this.ni.length !== Tm && this.onHeldCoinsChanged()
      }
    }

    function vf(mm, Tm) {
      return 450 + 715 * mm / (Tm - 1)
    }

    function tf(mm, Tm) {
      return vf(mm, Tm) + 650
    }
    const Uf = "skyblockMailboxView";
    class df {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.gp = mm, this.isBusy = Tm, this.onStarted = fm, this.now = hm, this.waiting = [], this.playing = null, this.token = 0, this.itemName = mm => mm
      }
      getSnapshot() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.playing) || void 0 === Tm ? void 0 : Tm.view) && void 0 !== mm ? mm : null
      }
      setItemName(mm) {
        this.itemName = mm
      }
      rO(mm) {
        this.waiting.push(...mm.mailLetters), this.DE()
      }
      DE() {
        const mm = this.now();
        null !== this.playing && mm - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.gp(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(mm)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.gp(null)
      }
      start(mm) {
        const Tm = this.waiting.slice(0, 3);
        this.token++;
        const fm = {
          token: this.token,
          letters: Tm.map((mm => this.toView(mm))),
          more: this.waiting.length - Tm.length,
          durationMs: 4500 + 700 * Tm.length
        };
        this.waiting = [], this.playing = {
          view: fm,
          startedAt: mm
        }, this.gp(fm), this.onStarted(fm)
      }
      toView(mm) {
        return {
          coins: mm.mailCoins,
          items: mm.mailItems.map((mm => {
            var Tm;
            return {
              itemName: mm.mailItemName,
              amount: mm.mailItemAmount,
              label: null !== (Tm = mm.mailItemLabel) && void 0 !== Tm ? Tm : this.itemName(mm.mailItemName)
            }
          })),
          reasonKey: mm.mailReasonKey,
          reasonParams: mm.mailReasonParams
        }
      }
    }
    const gf = "skyblockQuestGraphView",
      Wf = "skyblockDevQuestJump";

    function Ff(mm) {
      if (0 === mm.length) return "";
      const Tm = [`M ${mm[0].x} ${mm[0].y}`];
      for (let hm = 1; hm < mm.length - 1; hm++) {
        const fm = mm[hm + 1];
        Tm.push(`Q ${mm[hm].x} ${mm[hm].y} ${(mm[hm].x+fm.x)/2} ${(mm[hm].y+fm.y)/2}`)
      }
      const fm = mm[mm.length - 1];
      return Tm.push(`L ${fm.x} ${fm.y}`), Tm.join(" ")
    }

    function mh(mm, Tm) {
      return mm < Tm ? `${mm}|${Tm}` : `${Tm}|${mm}`
    }
    class Th extends pm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(mm, fm, hm), this.translate = Tm, this.requestJump = Am, this.requestArrive = am, this.storage = xm, this.now = wm, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = mm => {
          mm !== this.hoveredId && (this.hoveredId = mm, this.emit())
        }, this.jump = mm => {
          this.close(), this.requestJump(mm)
        }
      }
      rO(mm) {
        if (!this.PO)
          if ("graph" !== mm.kind) {
            if ("jumping" === mm.kind) {
              const Tm = {
                questId: mm.graphQuestId,
                variation: mm.graphVariation,
                completes: mm.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Wf, Tm)
            }
          } else {
            const Tm = ++this.graphCount;
            fm.e(118).then((() => fm(6427))).then((fm => {
              let {
                default: hm
              } = fm;
              this.PO || Tm !== this.graphCount || (this.layout = function(mm, Tm, fm) {
                var hm, Am;
                const am = new mm.graphlib.Graph;
                am.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), am.setDefaultEdgeLabel((() => ({})));
                const xm = new Set;
                for (const Rm of Tm) xm.add(Rm.graphQuestId), am.setNode(Rm.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const wm = fm.filter((mm => xm.has(mm.graphFromId) && xm.has(mm.graphToId) && mm.graphFromId !== mm.graphToId)),
                  Dm = new Map;
                for (const Rm of [...wm].sort(((mm, Tm) => Number("awaits" === mm.graphEdgeKind) - Number("awaits" === Tm.graphEdgeKind)))) {
                  const mm = mh(Rm.graphFromId, Rm.graphToId);
                  Dm.has(mm) || (Dm.set(mm, Rm), am.setEdge(Rm.graphFromId, Rm.graphToId))
                }
                mm.layout(am);
                const im = am.graph();
                return {
                  width: Math.ceil(null !== (hm = im.width) && void 0 !== hm ? hm : 0),
                  height: Math.ceil(null !== (Am = im.height) && void 0 !== Am ? Am : 0),
                  nodes: Tm.map((mm => {
                    var Tm, fm;
                    const hm = am.node(mm.graphQuestId);
                    return {
                      node: mm,
                      left: (null !== (Tm = hm.x) && void 0 !== Tm ? Tm : 0) - 95,
                      top: (null !== (fm = hm.y) && void 0 !== fm ? fm : 0) - 26
                    }
                  })),
                  edges: wm.map((mm => {
                    var Tm;
                    const fm = Dm.get(mh(mm.graphFromId, mm.graphToId)),
                      hm = null !== (Tm = am.edge(fm.graphFromId, fm.graphToId).points) && void 0 !== Tm ? Tm : [];
                    return {
                      edge: mm,
                      key: `${mm.graphFromId}|${mm.graphToId}|${mm.graphEdgeKind}`,
                      path: Ff(fm.graphFromId === mm.graphFromId ? hm : [...hm].reverse())
                    }
                  })),
                  plans: new Map(Tm.map((mm => [mm.graphQuestId, new Set([mm.graphQuestId, ...mm.graphPlanIds])])))
                }
              }(hm, mm.graphNodes, mm.graphEdges), this.show())
            })).catch((mm => {
              console.error("The quest graph could not be laid out", mm)
            }))
          }
      }
      resumeJump(mm) {
        const Tm = this.storage.getItem(Wf);
        this.storage.removeItem(Wf), null === Tm || Tm.variation !== mm || this.now() - Tm.departedAt > 6e4 || this.requestArrive(Tm.questId, Tm.completes)
      }
      setTranslator(mm) {
        this.translate = mm, this.emit()
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
        var mm, Tm;
        return null !== (mm = null === this.hoveredId || null === (Tm = this.layout) || void 0 === Tm ? void 0 : Tm.plans.get(this.hoveredId)) && void 0 !== mm ? mm : new Set
      }
      buildSnapshot() {
        const mm = this.layout;
        if (null === mm) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const Tm = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: mm.width,
          height: mm.height,
          nodes: mm.nodes.map((mm => {
            let {
              node: fm,
              left: hm,
              top: Am
            } = mm;
            return {
              id: fm.graphQuestId,
              name: this.translate(fm.graphNameKey),
              detail: null === fm.graphGiverName ? fm.graphZoneId : `${fm.graphGiverName} \xb7 ${fm.graphZoneId}`,
              state: fm.graphState,
              left: hm,
              top: Am,
              inPlan: Tm.has(fm.graphQuestId),
              hovered: fm.graphQuestId === this.hoveredId
            }
          })),
          edges: mm.edges.map((mm => {
            let {
              edge: fm,
              key: hm,
              path: Am
            } = mm;
            return {
              key: hm,
              kind: fm.graphEdgeKind,
              path: Am,
              inPlan: Tm.has(fm.graphFromId) && Tm.has(fm.graphToId)
            }
          })),
          planning: Tm.size > 0
        }
      }
    }
    var fh = fm(37158);
    const hh = 250,
      Ah = 2150,
      ah = -2.8,
      xh = 2.2,
      wh = -27,
      Dh = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      ih = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Rh = Math.round(50 + 1e3 * (ih.delay + ih.period / 2)),
      ph = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Eh = Array.from({
        length: 26
      }, ((mm, Tm) => {
        const fm = 2.39996 * Tm,
          hm = .5 + .618034 * Tm % 1 * .23,
          Am = Tm % 3 !== 2;
        return {
          rune: Am ? ph[7 * Tm % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(fm)*hm).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(fm)*hm).toFixed(3)})`,
            "--spin": 40 * (Tm % 5 - 2) + "deg",
            "--size": (Am ? 1 + Tm % 4 * .2 : .3 + Tm % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Tm%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Tm%3).toFixed(2)}s`
          }
        }
      }));

    function oh(mm, Tm) {
      return Array.from({
        length: 30 + 3 * mm + (Tm ? 10 : 0)
      }, ((mm, Tm) => {
        const fm = Tm < 4,
          hm = fm ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Am = fm ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          am = fm ? 2.2 : .6 + Math.random(),
          xm = fm ? .3 : Math.random() < .5 ? .16 : .24,
          wm = fm ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": hm,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Am.toFixed(2)}rem`,
          "--length": `${am.toFixed(2)}rem`,
          "--width": `${xm}rem`,
          "--duration": `${Math.round(wm)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Oh(mm) {
      let {
        zeta: Tm,
        period: fm
      } = mm;
      const hm = 2 * Math.PI / fm;
      return {
        w: hm,
        decay: Tm * hm / Math.sqrt(1 - Tm * Tm)
      }
    }
    let Yh = !1;

    function qh() {
      if (Yh) return;
      Yh = !0;
      const mm = document.createElement("style");
      mm.textContent = function() {
        const mm = Oh(Dh),
          Tm = Oh(ih),
          fm = Tm => Math.exp(-mm.decay * Tm) * Math.sin(mm.w * Tm),
          hm = fm(Math.atan(mm.w / mm.decay) / mm.w),
          Am = .25,
          am = 2.15,
          xm = Math.round(215),
          wm = [];
        for (let Dm = 0; Dm <= xm; Dm++) {
          const mm = Dm / xm * am;
          let im = Math.sin(Math.min(mm, Am) / Am * Math.PI / 2) ** 2,
            Rm = 0,
            pm = 1,
            Em = 1 - .2 * im,
            om = 1;
          if (mm >= Am) {
            const xm = mm - Am,
              wm = Math.max(0, xm - .05);
            im = Math.exp(-wm / .05), Rm = fm(wm + Dh.lead * (1 - Math.exp(-wm / Dh.rush))) / hm;
            const Dm = wm - ih.delay,
              Om = Dm <= 0 ? 0 : 1 - Math.exp(-Tm.decay * Dm) * (Math.cos(Tm.w * Dm) + Tm.decay / Tm.w * Math.sin(Tm.w * Dm)),
              Ym = Math.max(0, (mm - 1.77) / (am - 1.77));
            pm = (1 + (ih.to - 1) * Om) * (1 + .08 * Ym), Em = 1.1 + 1.5 * Math.exp(-xm / .07) + .3 * Math.exp(-(((1e3 * xm - Rh) / 100) ** 2)) + .8 * Ym, om = 1 - Ym ** 1.5
          }
          const Om = .15 * im + ah * Rm,
            Ym = -.1 * im + xh * Rm,
            qm = 3 * im + wh * Rm;
          wm.push(`${(Dm/xm*100).toFixed(3)}% { opacity: ${om.toFixed(3)}; transform: translate(${Om.toFixed(3)}rem, ${Ym.toFixed(3)}rem) rotate(${qm.toFixed(2)}deg) scale(${pm.toFixed(3)}); filter: brightness(${Em.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${wm.join(" ")} }`
      }(), document.head.append(mm)
    }
    const jh = "skyblockForgeView",
      Vh = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Ih extends pm {
      constructor(mm, Tm, fm, hm, Am) {
        super(mm, fm, hm), this.translate = Tm, this.requestForge = Am, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (mm, Tm) => {
          var fm, hm;
          null !== this.forging || (null !== (fm = this.owned[(0, fh.n)(Tm, mm)]) && void 0 !== fm ? fm : 0) <= 0 || (this.selected[mm] = this.selected[mm] === Tm ? null : Tm, this.status = null, null === (hm = this.onPartSelected) || void 0 === hm || hm.call(this), this.emit())
        }, this.forge = mm => {
          var Tm, fm;
          const hm = this.selectedParts();
          if (null === hm || this.isPending() || !this.open) return;
          const Am = (0, fh.l)(hm);
          if (null === Am || Am.coalCost > this.coal) return;
          const am = this.preview(Am),
            xm = null !== (Tm = null === (fm = this.onForgeStarted) || void 0 === fm ? void 0 : fm.call(this, am.tier, am.named, mm)) && void 0 !== Tm ? Tm : () => {};
          if (this.dropArrival(), mm) {
            const mm = {
              id: ++this.forgeId,
              preview: am,
              timers: [],
              stopSounds: xm,
              landed: !1,
              reply: null
            };
            mm.timers.push(setTimeout((() => {
              mm.landed = !0, null !== mm.reply && (this.apply(mm.reply), mm.reply = null, this.emit())
            }), hh), setTimeout((() => {
              this.finishForge(mm)
            }), Ah)), this.forging = mm
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(hm)
        }, this.snapshot = this.buildSnapshot()
      }
      rO(mm) {
        var Tm;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === mm.forgeMessageKind) return this.dropForge(), this.apply(mm), this.status = null, this.show(), void(null === (Tm = this.onOpened) || void 0 === Tm || Tm.call(this));
        const fm = this.forging;
        if (null !== fm && null !== mm.forgeRefusalKey) this.dropForge();
        else if (null !== fm && !fm.landed) return void(fm.reply = mm);
        this.apply(mm), this.emit()
      }
      apply(mm) {
        if (this.owned = mm.forgeOwnedParts, this.coal = mm.forgeCoalOwned, this.keepSelectionOwned("open" === mm.forgeMessageKind), null !== mm.forgeForgedSwordId) {
          var Tm;
          const fm = (0, fh.l)(mm.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.displayName) && void 0 !== Tm ? Tm : ""
            }
          }
        } else null !== mm.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: mm.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(mm) {
        this.translate = mm, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(mm) {
        var Tm;
        this.forging = null;
        const fm = this.selectedParts(),
          hm = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: mm.id,
          sameSword: null !== fm && (null === (Tm = (0, fh.l)(fm)) || void 0 === Tm ? void 0 : Tm.displayName) === mm.preview.name,
          timer: hm
        }, this.emit()
      }
      dropForge() {
        const mm = this.forging;
        if (null !== mm) {
          this.forging = null;
          for (const Tm of mm.timers) clearTimeout(Tm);
          mm.stopSounds(), null !== mm.reply && this.apply(mm.reply)
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
        var mm, Tm, fm;
        const hm = this.selectedParts(),
          Am = null === hm ? null : (0, fh.l)(hm),
          am = null !== (mm = null === (Tm = this.forging) || void 0 === Tm ? void 0 : Tm.preview) && void 0 !== mm ? mm : null === Am ? null : this.preview(Am);
        return {
          enabled: this.received,
          open: this.open,
          slots: fh.i.map((mm => ({
            kind: mm,
            label: this.translate(Vh[mm]),
            parts: this.partsFor(mm)
          }))),
          coalOwned: this.coal,
          preview: am,
          unformedSword: fh.h[null !== (fm = this.selected.Blade) && void 0 !== fm ? fm : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((mm => mm > 0)),
          canForge: null !== am && !am.coalShort && !this.isPending(),
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
      preview(mm) {
        return {
          name: mm.displayName,
          lore: mm.lore,
          baseSword: mm.baseSword,
          enchantmentTier: mm.enchantmentTier,
          tier: Number(mm.enchantmentTier.slice(-1)),
          named: mm.named,
          stats: this.stats(mm),
          effects: mm.effects,
          coalCost: mm.coalCost,
          coalShort: null === this.forging && mm.coalCost > this.coal
        }
      }
      partsFor(mm) {
        const Tm = [];
        for (const hm of fh.g) {
          var fm;
          const Am = (0, fh.n)(hm, mm),
            am = null !== (fm = this.owned[Am]) && void 0 !== fm ? fm : 0;
          am > 0 && Tm.push({
            material: hm,
            itemName: Am,
            owned: am,
            selected: this.selected[mm] === hm,
            placeholder: !1
          })
        }
        if (0 === Tm.length) {
          const fm = fh.g[0];
          Tm.push({
            material: fm,
            itemName: (0, fh.n)(fm, mm),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Tm
      }
      stats(mm) {
        const Tm = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${mm.powerMultiplier.toFixed(2)}`,
          better: mm.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${mm.damageMultiplier.toFixed(2)}`,
          better: mm.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/mm.cooldownMultiplier).toFixed(2)}`,
          better: mm.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${mm.knockbackMultiplier.toFixed(2)}`,
          better: mm.knockbackMultiplier > 1
        }];
        return mm.reachBonus > 0 && Tm.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${mm.reachBonus.toFixed(1)}`,
          better: !0
        }), mm.damageReduction > 0 && Tm.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*mm.damageReduction)}%`,
          better: !0
        }), Tm
      }
      selectedParts() {
        const {
          Blade: mm,
          Guard: Tm,
          Handle: fm
        } = this.selected;
        return null === mm || null === Tm || null === fm ? null : {
          blade: mm,
          guard: Tm,
          handle: fm
        }
      }
      keepSelectionOwned(mm) {
        for (const fm of fh.i) {
          var Tm;
          const hm = this.selected[fm];
          if (null !== hm && (null !== (Tm = this.owned[(0, fh.n)(hm, fm)]) && void 0 !== Tm ? Tm : 0) > 0) continue;
          if (!mm) {
            this.selected[fm] = null;
            continue
          }
          const Am = [...fh.g].reverse().find((mm => {
            var Tm;
            return (null !== (Tm = this.owned[(0, fh.n)(mm, fm)]) && void 0 !== Tm ? Tm : 0) > 0
          }));
          this.selected[fm] = null !== Am && void 0 !== Am ? Am : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Kh = "skyblockSmugglerView",
      Qh = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class nh extends pm {
      constructor(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(mm, fm, hm), this.translate = Tm, this.requestBuy = Am, this.now = am, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = mm => mm, this.onBought = null, this.buy = mm => {
          const Tm = this.deals[mm];
          void 0 !== Tm && !this.isPending() && this.open && !this.soldOut.has(mm) && this.canAfford(Tm) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, mm))
        }, this.snapshot = this.buildSnapshot()
      }
      rO(mm) {
        if (this.received = !0, this.day = mm.smugglerDay, this.deals = mm.smugglerDeals, this.rivets = mm.smugglerRivetsOwned, this.crests = mm.smugglerCrestsOwned, this.soldOut = new Set(mm.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + mm.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === mm.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = mm.smugglerBoughtSlot, null !== mm.smugglerBoughtSlot) {
          var Tm, fm;
          const hm = this.deals[mm.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === hm ? "" : this.dealName(hm),
              amount: String(null !== (Tm = null === hm || void 0 === hm ? void 0 : hm.smugglerDealAmount) && void 0 !== Tm ? Tm : 0)
            }
          }, this.boughtCount++, null === (fm = this.onBought) || void 0 === fm || fm.call(this)
        } else null !== mm.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: mm.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, void 0 !== fm && (this.itemName = fm), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(mm) {
        if (null !== mm.smugglerDealUniqueName) return mm.smugglerDealUniqueName;
        const Tm = Qh[mm.smugglerDealItem];
        return void 0 === Tm ? this.itemName(mm.smugglerDealItem) : this.translate(Tm)
      }
      canAfford(mm) {
        return mm.smugglerDealRivets <= this.rivets && mm.smugglerDealCrests <= this.crests
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
        const mm = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return mm <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : mm < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(mm)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(mm / 60)),
          minutes: String(mm % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((mm, Tm) => ({
            slot: Tm,
            itemName: mm.smugglerDealItem,
            displayName: this.dealName(mm),
            enchantmentTier: mm.smugglerDealEnchantmentTier,
            amount: mm.smugglerDealAmount,
            rivets: mm.smugglerDealRivets,
            crests: mm.smugglerDealCrests,
            affordable: this.canAfford(mm),
            soldOut: this.soldOut.has(Tm),
            justBought: this.boughtSlot === Tm
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
    const Jh = "skyblockPassageView",
      ch = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function zh(mm, Tm) {
      return mm(ch[Tm])
    }

    function Zh(mm, Tm, fm, hm) {
      const Am = Math.ceil((fm - hm) / 864e5),
        am = zh(mm, Tm);
      return Am > 1 ? mm("skyblockGame:passageNextDays", {
        phase: am,
        days: String(Am)
      }) : mm("skyblockGame:passageNextSoon", {
        phase: am
      })
    }
    class kh extends pm {
      constructor(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(mm, fm, hm), this.translate = Tm, this.now = Am, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = mm => mm, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      rO(mm) {
        this.message = mm, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, void 0 !== fm && (this.itemName = fm), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(mm) {
        return {
          itemName: mm.passageFish,
          displayName: this.itemName(mm.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(mm.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const mm = this.message;
        return null === mm ? {
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
          phase: mm.passagePhase,
          phaseName: zh(this.translate, mm.passagePhase),
          visitors: mm.passageVisitors.map((mm => this.describe(mm))),
          resting: this.describe(mm.passageResting),
          nextPhase: mm.passageNextPhase,
          next: Zh(this.translate, mm.passageNextPhase, mm.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var bh = fm(38637);
    const Sh = "skyblockKeepersChairView";
    class eh extends pm {
      constructor(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new bh.c;
        super(mm, fm, hm), this.translate = Tm, this.requestAim = Am, this.now = am, this.pacer = xm, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = mm => mm, this.aim = mm => {
          !this.awaitingReply && this.open && this.atChair && mm !== this.favoured && (null === mm || this.islands.some((Tm => Tm.keepersChairIslandId === mm && Tm.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== mm && void 0 !== mm ? mm : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = xm.subscribe((() => {
          this.emit()
        }))
      }
      rO(mm) {
        var Tm, fm;
        this.received = !0;
        const hm = this.favoured,
          Am = this.atChair;
        var am;
        return this.islands = mm.keepersChairIslands, this.favoured = mm.keepersChairFavoured, this.passage = null !== (Tm = mm.keepersChairPassage) && void 0 !== Tm ? Tm : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (fm = mm.keepersChairAtChair) || void 0 === fm || fm, "place" === mm.keepersChairMessageKind ? (!Am && this.atChair && "refused" === (null === (am = this.status) || void 0 === am ? void 0 : am.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === mm.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== mm.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: mm.keepersChairRefusalKey,
          island: null
        } : this.favoured !== hm && (this.status = null === this.favoured ? {
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
      receivePassage(mm) {
        this.received && (this.passage = mm, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, void 0 !== fm && (this.itemName = fm), this.emit()
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
      islandName(mm) {
        const Tm = this.islands.find((Tm => Tm.keepersChairIslandId === mm));
        return void 0 === Tm ? mm : this.translate(Tm.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const mm = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Tm = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((mm => {
            const Tm = mm.keepersChairFeaturedFish;
            return {
              id: mm.keepersChairIslandId,
              name: this.translate(mm.keepersChairIslandNameKey),
              relit: mm.keepersChairIslandRelit,
              featuredFish: null === Tm ? null : {
                itemName: Tm,
                displayName: this.itemName(Tm)
              },
              favoured: mm.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === mm ? null : {
            tone: mm.tone,
            text: this.translate(mm.key, null === mm.island ? void 0 : {
              island: this.islandName(mm.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === Tm ? null : {
            phase: Tm.keepersChairPassagePhase,
            phaseName: zh(this.translate, Tm.keepersChairPassagePhase),
            nextPhase: Tm.keepersChairPassageNextPhase,
            next: Zh(this.translate, Tm.keepersChairPassageNextPhase, Tm.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Nh = "skyblockReachLogView",
      Gh = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Xh = "Caught Fish",
      Ph = [1, 2, 4];

    function Hh(mm, Tm) {
      return mm.map((mm => ({
        ...mm,
        reachLogPageFish: mm.reachLogPageFish.map((mm => ({
          ...mm,
          reachLogFishFresh: Tm(mm)
        })))
      })))
    }
    class yh extends pm {
      constructor(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new bh.c;
        super(mm, fm, hm), this.translate = Tm, this.requestOpen = Am, this.pacer = am, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = mm => mm, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = mm => {
          this.pages.some((Tm => Tm.reachLogIslandId === mm)) && (this.selected = mm, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = am.subscribe((() => {
          this.emit()
        }))
      }
      rO(mm) {
        if (this.received = !0, "status" === mm.reachLogMessageKind) return !0 === mm.reachLogNews && this.markNews(), this.serverFresh = mm.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Tm = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== mm.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Hh(mm.reachLogPages, (mm => mm.reachLogFishFresh || this.heldFresh.has(mm.reachLogFishItem))), this.letGoShown = mm.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Tm) this.showPages();
          else {
            for (const mm of this.pages)
              for (const Tm of mm.reachLogPageFish) Tm.reachLogFishFresh && this.heldFresh.add(Tm.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, this.pageViews = null, void 0 !== fm && (this.itemName = fm), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Hh(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var mm, Tm, fm, hm;
        const Am = this.pages.find((mm => mm.reachLogPageFish.some((mm => mm.reachLogFishFresh))));
        if (void 0 !== Am) return Am.reachLogIslandId;
        if (null !== this.selected && this.pages.some((mm => mm.reachLogIslandId === this.selected))) return this.selected;
        return null !== (mm = null !== (Tm = null === (fm = this.pages.filter((mm => mm.reachLogIslandAwake)).at(-1)) || void 0 === fm ? void 0 : fm.reachLogIslandId) && void 0 !== Tm ? Tm : null === (hm = this.pages[0]) || void 0 === hm ? void 0 : hm.reachLogIslandId) && void 0 !== mm ? mm : null
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
        return this.pages.map((mm => {
          var Tm;
          return {
            id: mm.reachLogIslandId,
            name: this.translate(mm.reachLogIslandNameKey),
            awake: mm.reachLogIslandAwake,
            gold: mm.reachLogPageGold,
            caught: mm.reachLogPageFish.filter((mm => mm.reachLogFishCaught && !mm.reachLogFishVisitor)).length,
            total: mm.reachLogPageFish.filter((mm => !mm.reachLogFishVisitor)).length,
            fish: mm.reachLogPageFish.map((mm => {
              const Tm = mm.reachLogFishBestKg;
              return {
                itemName: mm.reachLogFishItem,
                name: mm.reachLogFishCaught ? this.itemName(mm.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: mm.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / mm.reachLogFishChance))
                }),
                best: mm.reachLogFishCaught ? null === Tm ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Tm.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: mm.reachLogFishMarks,
                ribbons: Ph.map((Tm => 0 !== (mm.reachLogFishRibbons & Tm))),
                glimmer: 0 !== (8 & mm.reachLogFishRibbons),
                halo: 0 !== (32 & mm.reachLogFishRibbons),
                fresh: mm.reachLogFishFresh,
                visitor: mm.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Tm = mm.reachLogPageReturner) && void 0 !== Tm ? Tm : null)
          }
        }))
      }
      buildReturner(mm) {
        return null === mm ? null : {
          itemName: mm.reachLogReturnerFishItem,
          line: this.translate(mm.reachLogReturnerLineKey, {
            name: this.translate(mm.reachLogReturnerNameKey),
            trinket: this.translate(mm.reachLogReturnerTrinketKey)
          }),
          back: mm.reachLogReturnerBack
        }
      }
      receivePassagePhase(mm) {
        null !== this.passagePhase && this.passagePhase !== mm && (this.pagesCurrent = !1), this.passagePhase = mm
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Ch = "skyblockLampLightView";
    class rh {
      constructor(mm, Tm, fm, hm) {
        this.gp = mm, this.translate = Tm, this.requestCommand = fm, this.pacer = hm, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.PO = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = mm => {
          mm ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = mm => {
          this.send(`buy ${mm}`)
        }, this.socket = mm => {
          this.send(`socket ${null!==mm&&void 0!==mm?mm:Pm}`)
        }, this.wearTint = mm => {
          this.send(`tint ${null!==mm&&void 0!==mm?mm:Pm}`)
        }, this.setSituation = mm => {
          this.situation = mm, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = hm.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = hm.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      rO(mm) {
        if (this.message = mm, null !== mm.lampLightShop && (this.shop = mm.lampLightShop), "open" === mm.lampLightKind && (this.refusalKey = null), "reply" === mm.lampLightKind) {
          var Tm;
          const Am = null !== (Tm = mm.lampLightReplyTag) && void 0 !== Tm ? Tm : null,
            am = null !== Am && Am === this.offTag;
          var fm, hm;
          if (am ? this.settleOff() : null !== Am && Am !== this.awaitingTag || this.settleReply(), this.refusalKey = mm.lampLightRefusalKey, null !== mm.lampLightBought && !am) this.sparkle = {
            id: mm.lampLightBought,
            count: (null !== (fm = null === (hm = this.sparkle) || void 0 === hm ? void 0 : hm.count) && void 0 !== fm ? fm : 0) + 1
          }
        }
        mm.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === mm.lampLightKind && (this.lastGained = mm.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(mm) {
        mm !== this.atChair && (this.atChair = mm, mm && (this.refusalKey = null), this.emit())
      }
      setTranslator(mm, Tm) {
        this.translate = mm, this.locale = null !== Tm && void 0 !== Tm ? Tm : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.PO = !0
      }
      send(mm) {
        var Tm;
        if (null !== this.awaitingTag || "ready" !== (null === (Tm = this.message) || void 0 === Tm ? void 0 : Tm.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const fm = this.nextTag();
        this.awaitingTag = fm, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${mm} ${fm}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const mm = this.nextTag();
        this.offTag = mm, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${mm}`)
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
        this.PO || (this.snapshot = this.buildSnapshot(), this.gp(this.snapshot))
      }
      formatLight(mm) {
        return Math.floor(mm).toLocaleString(this.locale)
      }
      formatPercent(mm) {
        const Tm = 100 * mm;
        return Tm >= 10 ? Math.round(Tm).toLocaleString(this.locale) : Tm.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(mm, Tm) {
        if ("bite" === mm) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Tm.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === mm) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Tm.lampLightRareChance)
        });
        if ("notice" === mm) return null === Tm.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Tm.lampLightNoticeChance)
        });
        const fm = "meter" === mm ? Tm.lampLightMeterCatches : Tm.lampLightBloomCatches;
        return null === fm ? null : this.translate("meter" === mm ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(fm))
        })
      }
      oddsLines(mm, Tm) {
        const fm = (mm, Tm) => {
            var fm;
            return null !== (fm = {
              bite: Tm.lampLightBiteMs,
              rare: Tm.lampLightRareChance,
              meter: Tm.lampLightMeterCatches,
              bloom: Tm.lampLightBloomCatches,
              notice: Tm.lampLightNoticeChance
            } [mm]) && void 0 !== fm ? fm : 0
          },
          hm = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Am = [];
        for (const am of ["bite", "rare", "meter", "bloom", "notice"]) {
          const xm = this.formatOdds(am, mm),
            wm = this.formatOdds(am, Tm);
          if (null === xm || null === wm || "bite" !== am && "rare" !== am && xm === wm) continue;
          const Dm = fm(am, Tm) - fm(am, mm),
            im = hm[am] ? Dm < 0 : Dm > 0;
          Am.push({
            label: am,
            before: xm,
            after: wm,
            tone: xm === wm ? "same" : im ? "better" : "worse"
          })
        }
        return Am
      }
      charmView(mm, Tm, fm) {
        const hm = mm.lampLightCharmId.charAt(0).toUpperCase() + mm.lampLightCharmId.slice(1),
          Am = "bloom" === this.situation;
        return {
          id: mm.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${hm}`),
          effect: this.translate(`skyblockGame:lampLightCharm${hm}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(mm.lampLightCharmCost)
          }),
          owned: mm.lampLightCharmOwned,
          affordable: fm >= mm.lampLightCharmCost,
          socketed: Tm.lampLightSocketed === mm.lampLightCharmId,
          lines: this.oddsLines(Am ? Tm.lampLightBareBloom : Tm.lampLightBareOpen, Am ? mm.lampLightCharmBloom : mm.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var mm, Tm, fm, hm;
        const Am = this.message,
          am = "ready" === (null === Am || void 0 === Am ? void 0 : Am.lampLightStatus) ? this.shop : null,
          xm = null !== (mm = null === Am || void 0 === Am ? void 0 : Am.lampLightBalance) && void 0 !== mm ? mm : 0,
          wm = this.atChair,
          Dm = "loading" === (null === Am || void 0 === Am ? void 0 : Am.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Am || void 0 === Am ? void 0 : Am.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          im = "ready" !== (null === Am || void 0 === Am ? void 0 : Am.lampLightStatus) || wm ? null !== (Tm = this.refusalKey) && void 0 !== Tm ? Tm : Dm : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Am && "locked" !== Am.lampLightStatus,
          status: null !== (fm = null === Am || void 0 === Am ? void 0 : Am.lampLightStatus) && void 0 !== fm ? fm : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(xm)
          }),
          releasing: null !== (hm = null === Am || void 0 === Am ? void 0 : Am.lampLightReleasing) && void 0 !== hm && hm,
          gained: null === Am || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Am || void 0 === Am ? void 0 : Am.lampLightStatus) && wm && !this.isPending(),
          situation: this.situation,
          shop: null === am ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: am.lampLightOddsRod,
              island: this.translate(am.lampLightIslandNameKey)
            }),
            heldRod: null !== am.lampLightHeldRod,
            charms: am.lampLightCharms.map((mm => this.charmView(mm, am, xm))),
            tints: am.lampLightTints.map((mm => {
              const Tm = mm.lampLightTintId,
                [fm, hm, Am] = mm.lampLightTintColour;
              return {
                id: Tm,
                name: this.translate(`skyblockGame:lampLightTint${Tm.charAt(0).toUpperCase()}${Tm.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(mm.lampLightTintCost)
                }),
                owned: mm.lampLightTintOwned,
                affordable: xm >= mm.lampLightTintCost,
                wearing: am.lampLightTint === Tm,
                colour: `rgb(${fm}, ${hm}, ${Am})`
              }
            })),
            wearingIslandColours: null === am.lampLightTint
          },
          notice: null === im ? null : this.translate(im),
          sparkle: this.sparkle
        }
      }
    }
    const sh = "skyblockMagmawardView";
    class lh {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.gp = mm, this.now = Tm, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Mm.map((() => 0)), this.wornAt = Mm.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      rO(mm) {
        var Tm, fm;
        const hm = Mm.map(((Tm, fm) => !0 === mm.magmawardPiecesWorn[fm]));
        if (!hm.includes(!0)) return this.snapshot = null, void this.gp(null);
        const Am = this.now(),
          am = this.snapshot;
        null === am && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const xm = mm.magmawardFuelCarried,
          wm = !hm.includes(!1);
        let Dm = null !== (Tm = null === am || void 0 === am ? void 0 : am.pulse) && void 0 !== Tm ? Tm : null,
          im = null !== (fm = null === am || void 0 === am ? void 0 : am.flare) && void 0 !== fm ? fm : null;
        mm.magmawardFuelBurned ? (Dm = "burn", im = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Am, this.flareAt = Am) : null !== am && xm > am.fuel && (Dm = "gain", this.pulseToken++, this.pulseAt = Am), wm && null !== am && !am.fullSet && (im = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Am, this.setLitAt = Am);
        const Rm = Mm.map(((mm, Tm) => (hm[Tm] && null !== am && !am.pieces[Tm].worn && (this.wornTokens[Tm]++, this.wornAt[Tm] = Am), {
          itemName: mm,
          worn: hm[Tm],
          wornToken: this.wornTokens[Tm],
          justWorn: hm[Tm] && this.isPlaying(this.wornAt[Tm], Am)
        })));
        this.snapshot = {
          pieces: Rm,
          wornCount: hm.filter(Boolean).length,
          fullSet: wm,
          fuel: xm,
          fuelState: xm <= 0 ? "empty" : xm <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Am) ? Dm : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Am) ? im : null,
          flareToken: this.flareToken,
          setLit: wm && this.isPlaying(this.setLitAt, Am),
          setLitToken: this.setLitToken
        }, this.gp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.gp(null)
      }
      isPlaying(mm, Tm) {
        return Tm - mm < 1200
      }
    }
    const Mh = "skyblockGlowtideView";
    class uh {
      constructor(mm) {
        this.gp = mm, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = mm => {
          this.arrow = mm, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      rO(mm) {
        this.bloom = mm.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.gp(null))
      }
      afterRender(mm, Tm) {
        const fm = this.bloom;
        if (null === fm || null === mm) return;
        const hm = fm.glowtideBloomX - mm[0],
          am = fm.glowtideBloomZ - mm[2],
          xm = Math.hypot(hm, am),
          wm = this.snapshot,
          Dm = null !== wm && void 0 !== wm && wm.inRange ? 1 : 0,
          im = xm <= 12.5 + Dm && mm[1] - fm.glowtideBloomY <= 10 + Dm;
        !im || null !== wm && void 0 !== wm && wm.inRange || this.inRangeToken++;
        const Rm = {
          colour: fm.glowtideBloomColour,
          inRange: im,
          distance: Math.round(xm),
          inRangeToken: this.inRangeToken
        };
        (null === wm || Rm.colour !== wm.colour || Rm.inRange !== wm.inRange || !im && Rm.distance !== wm.distance) && (this.snapshot = Rm, this.gp(Rm));
        const pm = Am.c.computeShortestRotation(Tm, (0, Am.yb)([hm, 0, am]));
        null === this.arrow || Math.abs(pm - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${pm}rad)`, this.arrowTurn = pm)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.gp(null)
      }
    }
    const Bh = "skyblockGlowMeterView";
    class Lh {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.gp = mm, this.now = Tm, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      rO(mm) {
        const Tm = this.now(),
          {
            glowMeterFill: fm,
            glowMeterCapacity: hm
          } = mm,
          Am = fm >= hm,
          am = this.snapshot;
        null !== am && (Am && !am.full && (this.fullToken++, this.fullAt = Tm), am.full && !Am ? (this.burstToken++, this.burstAt = Tm) : fm > am.fill && (this.gainToken++, this.gainAt = Tm)), this.snapshot = {
          fill: fm,
          yp: hm,
          ratio: Math.min(1, Math.max(0, fm / hm)),
          full: Am,
          rares: mm.glowMeterRares,
          ready: Am && this.isPlaying(this.fullAt, Tm),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Tm),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Tm),
          gainToken: this.gainToken
        }, this.gp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.gp(null)
      }
      isPlaying(mm, Tm) {
        return Tm - mm < 2e3
      }
    }
    const vh = "skyblockHushWaitView";
    class th {
      constructor(mm) {
        this.gp = mm, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      rO(mm) {
        let {
          hushWaitMs: Tm,
          hushWaitTotalMs: fm,
          hushWaitLines: hm
        } = mm;
        if (this.clearTimers(), this.token++, 0 === hm.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Tm <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: hm[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Am = Math.max(null !== fm && void 0 !== fm ? fm : Tm, Tm),
          am = Am - Tm,
          xm = mm => Am * mm / hm.length,
          wm = mm => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Am,
              elapsedMs: am,
              line: hm[mm],
              lineIndex: mm
            })
          };
        let Dm = 0;
        for (; Dm + 1 < hm.length && xm(Dm + 1) <= am;) Dm++;
        wm(Dm);
        for (let im = Dm + 1; im < hm.length; im++) this.later(xm(im) - am, (() => {
          wm(im)
        }));
        this.later(Tm, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(mm) {
        this.snapshot = mm, this.gp(mm)
      }
      later(mm, Tm) {
        this.timers.push(setTimeout(Tm, mm))
      }
      clearTimers() {
        for (const mm of this.timers) clearTimeout(mm);
        this.timers = []
      }
    }
    const Uh = "skyblockTideChartsView",
      dh = 36e5,
      gh = 864e5;

    function Wh(mm, Tm, fm) {
      const [hm, Am, am, xm] = mm.tideChartArea, wm = Math.floor(Tm), Dm = Math.floor(fm);
      return wm >= hm && wm <= am && Dm >= Am && Dm <= xm
    }

    function Fh(mm, Tm, fm) {
      const [hm, Am, am, xm] = mm.tideChartWater;
      return function(mm, Tm, fm, hm, Am, am) {
        const xm = 4 - um(Math.floor(Am) - (mm - fm), fm);
        return 5 * um(Math.floor(am) - (Tm - hm), hm) + xm
      }(hm, Am, am, xm, Tm, fm)
    }

    function mA(mm, Tm, fm) {
      const hm = mm.tideCharts;
      for (let Am = 0; Am < hm.length; Am++)
        if (Wh(hm[Am], Tm, fm)) return hm[Am];
      return null
    }

    function TA(mm, Tm, fm) {
      const hm = Math.max(0, Tm - fm);
      return hm > gh ? mm("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(hm / gh))
      }) : hm > dh ? mm("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(hm / dh))
      }) : mm("skyblockGame:tideChartsTurnSoon")
    }
    class fA extends pm {
      constructor(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(mm, fm, hm), this.translate = Tm, this.now = Am, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Do = mm => {
          this.picked = mm, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      rO(mm) {
        const Tm = this.message;
        if (null !== Tm)
          for (const hm of mm.tideCharts) {
            var fm;
            const mm = Tm.tideCharts.find((mm => mm.tideChartIsland === hm.tideChartIsland)),
              Am = hm.tideChartLit & ~(null !== (fm = null === mm || void 0 === mm ? void 0 : mm.tideChartLit) && void 0 !== fm ? fm : 0);
            void 0 !== mm && 0 !== Am && (this.pulse = {
              island: hm.tideChartIsland,
              cells: Am,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = mm, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(mm, Tm) {
        var fm;
        const hm = null === this.message || Number.isNaN(mm) ? null : mA(this.message, mm, Tm),
          Am = null !== (fm = null === hm || void 0 === hm ? void 0 : hm.tideChartIsland) && void 0 !== fm ? fm : null,
          am = null === hm ? -1 : function(mm, Tm, fm) {
            const [hm, Am, am, xm] = mm.tideChartWater;
            return function(mm, Tm, fm, hm, Am, am, xm) {
              return ((Am - mm) / (fm + xm)) ** 2 + ((am - Tm) / (hm + xm)) ** 2 <= 1
            }(hm, Am, am, xm, Tm, fm, 2) ? Fh(mm, Tm, fm) : -1
          }(hm, mm, Tm);
        return (Am !== this.hereIsland || am !== this.hereCell) && (this.hereIsland = Am, this.hereCell = am, null !== Am && (this.lastIsland = Am), !0)
      }
      afterRender(mm) {
        if (null === this.message) return;
        this.lastX = null === mm ? Number.NaN : mm[0], this.lastZ = null === mm ? Number.NaN : mm[2];
        const Tm = this.locate(this.lastX, this.lastZ),
          fm = this.expirePulses();
        (Tm || fm || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const mm = this.now();
        return !(!this.open || mm - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = mm, TA(this.translate, this.message.tideChartTurnsInMs, mm - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(mm, Tm) {
        const fm = null === this.message ? null : mA(this.message, mm, Tm);
        if (null === fm) return;
        const hm = Fh(fm, mm, Tm);
        0 === (fm.tideChartPreBlank & 1 << hm) && (this.cast = {
          island: fm.tideChartIsland,
          cell: hm,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const mm = this.now();
        let Tm = !1;
        return 0 !== this.pulse.cells && mm - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Tm = !0), null !== this.cast && mm - this.cast.atMs >= 1500 && (this.cast = null, Tm = !0), Tm
      }
      setTranslator(mm) {
        this.translate = mm, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(mm, Tm) {
        var fm;
        return null !== (fm = mm.tideCharts.find((mm => mm.tideChartIsland === Tm))) && void 0 !== fm ? fm : null
      }
      describe(mm) {
        var Tm, fm, hm;
        const Am = mm.tideChartIsland,
          am = [];
        for (let om = 0; om < 25; om++) {
          const Tm = 1 << om;
          0 !== (mm.tideChartLit & Tm) ? am.push("lit") : 0 !== (mm.tideChartClear & Tm) ? am.push("clear") : 0 !== (mm.tideChartPreBlank & Tm) ? am.push("shore") : am.push("water")
        }
        const xm = function(mm) {
            let Tm = 0;
            for (let fm = mm >>> 0; 0 !== fm; fm &= fm - 1) Tm++;
            return Tm
          }(mm.tideChartLit),
          wm = mm.tideChartInkCount,
          Dm = this.translate(mm.tideChartIslandNameKey),
          im = this.translate("skyblockGame:tideChartsLit", {
            lit: String(xm),
            ink: String(wm)
          }),
          Rm = null === mm.tideChartPictureNameKey ? null : this.translate(mm.tideChartPictureNameKey),
          pm = this.hereIsland === Am && -1 !== this.hereCell ? this.hereCell : null,
          Em = [`${Dm}: ${im}.`];
        if (null !== Rm && Em.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Rm
          })), null !== pm) {
          const mm = Math.floor(pm / 5) + 1,
            Tm = pm % 5 + 1;
          Em.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(mm),
            column: String(Tm)
          }))
        }
        return {
          island: Am,
          islandName: Dm,
          cells: am,
          hereCell: pm,
          lit: xm,
          ink: wm,
          litText: im,
          pictureName: Rm,
          gridLabel: Em.join(" "),
          pulseCells: this.pulse.island === Am ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Tm = this.cast) || void 0 === Tm ? void 0 : Tm.island) === Am ? this.cast.cell : null,
          castToken: null !== (fm = null === (hm = this.cast) || void 0 === hm ? void 0 : hm.token) && void 0 !== fm ? fm : 0
        }
      }
      buildSnapshot() {
        var mm, Tm, fm;
        const hm = this.message;
        if (null === hm || 0 === hm.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Am = this.findChart(hm, this.hereIsland),
          am = null !== (mm = null !== (Tm = null !== (fm = this.findChart(hm, this.open ? this.picked : null)) && void 0 !== fm ? fm : Am) && void 0 !== Tm ? Tm : this.findChart(hm, this.lastIsland)) && void 0 !== mm ? mm : hm.tideCharts[0],
          xm = null === Am ? null : this.describe(Am);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: xm,
          card: am === Am ? xm : this.describe(am),
          turnsText: TA(this.translate, hm.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(hm.tideChartBookCount)
          }),
          tabs: hm.tideCharts.map((mm => ({
            island: mm.tideChartIsland,
            name: this.translate(mm.tideChartIslandNameKey),
            selected: mm.tideChartIsland === am.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const hA = "skyblockRegularsView",
      AA = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      aA = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function xA(mm, Tm) {
      return "given" === mm ? Tm.given : "owed" === mm ? Tm.owed : Tm.goal
    }
    class wA extends pm {
      constructor(mm, Tm, fm, hm) {
        super(mm, fm, hm), this.translate = Tm, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = mm => mm, this.openIsland = mm => {
          this.selected = mm, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = mm => {
          this.selected = mm, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      rO(mm) {
        this.message = mm, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const mm = this.openedFromReachLog;
        return this.openedFromReachLog = !1, mm
      }
      setTranslator(mm, Tm, fm) {
        this.translate = mm, void 0 !== fm && (this.itemName = fm), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(mm, Tm, fm) {
        return {
          text: this.translate(xA(mm, Tm), fm),
          given: "given" === mm
        }
      }
      describeRegular(mm, Tm) {
        const fm = this.translate,
          hm = null !== mm.regularKg,
          Am = mm.regularMeetings,
          am = hm ? 0 === Am ? fm("skyblockGame:regularsNotMet") : 1 === Am ? fm("skyblockGame:regularsMeetingsOne") : fm("skyblockGame:regularsMeetings", {
            count: Am
          }) : "";
        return {
          id: mm.regularId,
          name: fm(mm.regularNameKey),
          line: fm(mm.regularLineKey),
          itemName: mm.regularFishItem,
          fishName: this.itemName(mm.regularFishItem),
          tagged: hm,
          size: null === mm.regularKg ? fm("skyblockGame:regularsNotTagged") : fm("skyblockGame:regularsSize", {
            kg: mm.regularKg.toFixed(1)
          }),
          meetings: am,
          chance: fm("skyblockGame:regularsChance", {
            count: mm.regularOneInCasts
          }),
          resting: mm.regularRestingToday,
          gifts: [{
            text: fm("skyblockGame:regularsGiftFlare"),
            given: Am >= 3
          }, this.describeGift(mm.regularTintGift, AA, {
            tint: fm(mm.regularTintNameKey)
          })],
          history: [...mm.regularHistory].reverse().map((mm => {
            const hm = mm.regularMeetingKg.toFixed(1),
              Am = Tm - mm.regularMeetingDay;
            return Am <= 0 ? fm("skyblockGame:regularsToday", {
              kg: hm
            }) : fm("skyblockGame:regularsDaysAgo", {
              days: Am,
              kg: hm
            })
          }))
        }
      }
      describeIsland(mm, Tm) {
        return {
          id: mm.regularsIslandId,
          name: this.translate(mm.regularsIslandNameKey),
          charm: this.describeGift(mm.regularsCharmGift, aA, {
            charm: this.translate(mm.regularsCharmNameKey)
          }),
          regulars: mm.regularsList.map((mm => this.describeRegular(mm, Tm)))
        }
      }
      buildSnapshot() {
        var mm, Tm, fm, hm;
        const Am = this.message;
        if (null === Am) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const am = Am.regularsIslands.map((mm => this.describeIsland(mm, Am.regularsToday))),
          xm = null !== (mm = null !== (Tm = null === (fm = am.find((mm => mm.id === this.selected))) || void 0 === fm ? void 0 : fm.id) && void 0 !== Tm ? Tm : null === (hm = am[0]) || void 0 === hm ? void 0 : hm.id) && void 0 !== mm ? mm : "";
        return {
          enabled: !0,
          open: this.open,
          selected: xm,
          islands: am
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const DA = "skyblockHiddenWatersView";
    class iA {
      constructor(mm) {
        this.gp = mm, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      rO(mm) {
        this.snapshot = function(mm) {
          const [Tm, fm] = mm.hiddenWatersMapSize, hm = (mm, hm) => ({
            left: 1 - mm / Tm,
            top: hm / fm
          }), Am = new Map;
          for (const [xm, wm] of mm.hiddenWatersGlimpses) {
            var am;
            const mm = null !== (am = Am.get(xm)) && void 0 !== am ? am : [];
            mm.push(wm), Am.set(xm, mm)
          }
          return {
            found: mm.hiddenWatersFound,
            total: mm.hiddenWatersTotal,
            aspect: fm / Tm,
            pins: mm.hiddenWatersPins.map((mm => {
              let [Tm, fm] = mm;
              return hm(Tm, fm)
            })),
            islands: mm.hiddenWatersIslands.map((mm => {
              let [Am, am, xm, wm] = mm;
              const {
                left: Dm,
                top: im
              } = hm(xm + 1, am);
              return {
                left: Dm,
                top: im,
                width: (xm + 1 - Am) / Tm,
                height: (wm + 1 - am) / fm
              }
            })),
            glimpses: Am
          }
        }(mm), this.gp(this.snapshot)
      }
    }
    const RA = "skyblockDialogueView";
    class pA extends pm {
      constructor(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(mm, fm, hm), this.translate = Tm, this.requestDialogue = Am, this.now = am, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = mm => {
          this.selection = {
            kind: "quest",
            questId: mm
          }, this.request(), this.show()
        }, this.selectCharacter = mm => {
          this.selection = {
            kind: "character",
            npcId: mm
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      rO(mm) {
        this.received = !0, this.scripts = mm.questDialogueScripts, this.speakers = new Map(mm.questDialogueSpeakers.map((mm => [mm.dialogueSpeakerId, mm]))), this.emit()
      }
      setTranslator(mm) {
        this.translate = mm, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const mm = this.now();
        mm >= this.requestAvailableAt && (this.requestAvailableAt = mm + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var mm;
        const Tm = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Tm,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const fm = this.selection;
        if ("quest" === fm.kind) {
          const mm = this.scripts.find((mm => mm.dialogueQuestId === fm.questId));
          return {
            ...Tm,
            characters: [],
            questFocus: fm.questId,
            conversations: mm ? [this.conversation(mm)] : []
          }
        }
        const hm = [];
        for (let am = this.scripts.length - 1; am >= 0; am--) {
          const mm = this.scripts[am].dialogueLines;
          for (let Tm = mm.length - 1; Tm >= 0; Tm--) hm.includes(mm[Tm].dialogueSpeakerId) || hm.push(mm[Tm].dialogueSpeakerId)
        }
        const Am = null !== fm.npcId && hm.includes(fm.npcId) ? fm.npcId : null !== (mm = hm[0]) && void 0 !== mm ? mm : null;
        return {
          ...Tm,
          characters: hm.map((mm => {
            var Tm, fm;
            return {
              id: mm,
              styling: null !== (Tm = null === (fm = this.speakers.get(mm)) || void 0 === fm ? void 0 : fm.dialogueSpeakerStyling) && void 0 !== Tm ? Tm : mm,
              selected: mm === Am
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((mm => mm.dialogueLines.some((mm => mm.dialogueSpeakerId === Am)))).map((mm => this.conversation(mm))).reverse()
        }
      }
      conversation(mm) {
        let Tm = null;
        return {
          questId: mm.dialogueQuestId,
          questName: this.translate(mm.dialogueQuestNameKey),
          completed: mm.dialogueQuestCompleted,
          lines: mm.dialogueLines.map(((mm, fm) => {
            var hm;
            const Am = mm.dialogueSpeakerId === Tm || null === (hm = this.speakers.get(mm.dialogueSpeakerId)) || void 0 === hm ? void 0 : hm.dialogueSpeakerStyling;
            return Tm = mm.dialogueSpeakerId, {
              key: fm,
              display: {
                line: {
                  translationKey: mm.dialogueLineKey,
                  params: this.params(mm.dialogueLineParams)
                },
                speakerName: Am,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(mm) {
        if (void 0 !== mm) return Object.fromEntries(Object.entries(mm).map((mm => {
          let [Tm, fm] = mm;
          return [Tm, "string" === typeof fm ? fm : this.translate(fm.translationKey)]
        })))
      }
    }
    var EA = fm(641),
      oA = fm(1270),
      OA = fm(105);
    const YA = "skyblockAutographsView";

    function qA(mm) {
      const Tm = EA.h[mm];
      return {
        label: Tm.chatTag.map((mm => mm.str)).join(""),
        icon: Tm.icon,
        colour: Tm.mainRGB
      }
    }
    class jA extends pm {
      constructor(mm) {
        let Tm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Tm, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      rO(mm) {
        this.signatures = mm.autographSignatures, mm.autographOpen ? this.show() : this.emit()
      }
      setTranslator(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Tm, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var mm;
        const Tm = null !== (mm = this.signatures) && void 0 !== mm ? mm : [],
          fm = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          hm = [...Tm].sort(((mm, Tm) => Number(null !== Tm.autographRank) - Number(null !== mm.autographRank) || Tm.autographSignedAtMs - mm.autographSignedAtMs)).map((mm => ({
            key: `${mm.autographSignedAtMs}|${mm.autographSignerName}`,
            name: (0, oA.e)(mm.autographSignerName, !OA.featureFlags.canSeeRealPlayerNames),
            rank: null === mm.autographRank ? null : qA(mm.autographRank),
            signedOn: fm.format(mm.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: hm,
          total: hm.length,
          rankTotal: hm.filter((mm => null !== mm.rank)).length
        }
      }
    }
    const VA = "skyblockHudView",
      IA = () => {},
      KA = {
        getItem: () => null,
        setItem: IA,
        removeItem: IA
      };
    class QA {
      constructor(mm) {
        let {
          translate: Tm,
          translateWithIcons: fm,
          setMenuOpen: hm = IA,
          dismissMenu: Am = () => {
            hm(!1)
          },
          publishSkills: am = IA,
          publishQuests: xm = IA,
          publishQuestNotification: wm = IA,
          publishDungeons: Dm = IA,
          publishCollections: im = IA,
          publishMap: Rm = IA,
          publishHud: pm = IA,
          publishPortalTransit: Em = IA,
          publishDailyReward: Om = IA,
          publishMailbox: Ym = IA,
          publishQuestGraph: qm = IA,
          publishForge: jm = IA,
          publishSmuggler: Vm = IA,
          publishKeepersChair: Im = IA,
          publishReachLog: Km = IA,
          publishLampLight: Qm = IA,
          publishMagmaward: nm = IA,
          publishGlowtide: cm = IA,
          publishGlowMeter: zm = IA,
          publishHushWait: Zm = IA,
          publishPassage: km = IA,
          publishTideCharts: bm = IA,
          publishRegulars: Sm = IA,
          publishHiddenWaters: em = IA,
          publishDialogue: Nm = IA,
          publishAutographs: Gm = IA,
          isLoadingScreenUp: Xm = () => !1,
          onDailyRewardCoinLanded: Pm = IA,
          onDailyRewardStarted: Hm = IA,
          onDailyRewardFinished: ym = IA,
          onDailyRewardItemLanded: Cm = IA,
          onMailboxStarted: rm = IA,
          journeyStorage: sm = KA,
          requestTracking: lm = IA,
          requestTravel: Mm = IA,
          requestDungeonEnter: um = IA,
          requestQuestJump: Bm = IA,
          requestQuestArrive: Lm = IA,
          requestForge: tm = IA,
          requestSmuggle: Um = IA,
          requestKeepersChairAim: dm = IA,
          requestReachLogOpen: gm = IA,
          requestLampLight: Wm = IA,
          requestDialogue: Fm = IA
        } = mm;
        this.navigation = void 0, this.map = void 0, this.compass = new Jm, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new bh.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = mm => mm, this.close = () => {
          for (const mm of this.panels) mm.close()
        }, this.setMenuOpen = hm, this.publishHud = pm, this.portalTransit = new Mf(Em, sm), this.magmaward = new lh(nm), this.glowtide = new uh(cm), this.glowMeter = new Lh(zm), this.hushWait = new th(Zm), this.dailyReward = new Lf(Om, (() => Xm() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (mm => {
          this.quests.setNotificationsHeld(mm)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Pm, Hm, ym, Cm);
        const mT = mm => {
          this.panels.some((mm => mm.isOpen())) || (mm ? Am() : this.setMenuOpen(!1))
        };
        this.skills = new wf(am, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Tm, void 0, void 0, mT), this.quests = new of(xm, lm, Tm, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, mT, wm), this.dungeons = new qf(Dm, Tm, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, mT, um), this.collections = new rf(im, Tm, (() => {
          this.beforePanelOpen(this.collections)
        }), mT), this.map = new om(Rm, Mm, Tm, (() => {
          this.beforePanelOpen(this.map)
        }), mT), this.questGraph = new Th(qm, Tm, (() => {
          this.beforePanelOpen(this.questGraph)
        }), mT, Bm, Lm, sm), this.forge = new Ih(jm, Tm, (() => {
          this.beforePanelOpen(this.forge)
        }), mT, tm), this.smuggler = new nh(Vm, Tm, (() => {
          this.beforePanelOpen(this.smuggler)
        }), mT, Um), this.lampLight = new rh(Qm, Tm, Wm, this.commandPacer), this.keepersChair = new eh(Im, Tm, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (mm => {
          this.lampLight.onChairClosed(), mT(mm)
        }), dm, Date.now, this.commandPacer), this.reachLog = new yh(Km, Tm, (() => {
          this.beforePanelOpen(this.reachLog)
        }), mT, gm, this.commandPacer), this.passage = new kh(km, Tm, (() => {
          this.beforePanelOpen(this.passage)
        }), mT), this.tideCharts = new fA(bm, Tm, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), mT), this.regulars = new wA(Sm, Tm, (() => {
          this.beforePanelOpen(this.regulars)
        }), (mm => {
          this.regulars.takeReturnToReachLog() && !mm && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), mT(mm)
        })), this.hiddenWaters = new iA(em), this.dialogue = new pA(Nm, Tm, (() => {
          this.beforePanelOpen(this.dialogue)
        }), mT, Fm), this.autographs = new jA(Gm, (() => {
          this.beforePanelOpen(this.autographs)
        }), mT), this.mailbox = new df(Ym, (() => Xm() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), rm), this.quests.translateWithIcons = null !== fm && void 0 !== fm ? fm : null, this.skills.onLevelUp = mm => {
          this.quests.notify(mm)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new af(this.map, this.quests, this.compass, Tm)
      }
      getHudSnapshot() {
        const mm = this.hudSnapshot,
          Tm = this.dailyReward.getHeldCoins();
        return null === mm || Tm <= 0 || !("hudPurseCoins" in mm) ? mm : {
          ...mm,
          hudPurseCoins: Math.max(0, mm.hudPurseCoins - Tm)
        }
      }
      receiveHud(mm) {
        this.hudSnapshot = mm, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(mm) {
        this.setMenuOpen(!0);
        const Tm = mm === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = mm;
        for (const fm of this.panels) fm === mm || Tm && fm === this.reachLog || fm.close();
        this.openingPanel = null
      }
      setTranslator(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tm => this.resolveItemName(Tm, mm);
        this.quests.translateWithIcons = null !== fm && void 0 !== fm ? fm : null, this.navigation.setTranslator(mm, Tm), this.lampLight.setTranslator(mm, Tm), this.mailbox.setItemName(hm);
        for (const Am of this.panels) Am.setTranslator(mm, Tm, hm)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const mm of this.panels) mm.dispose()
      }
    }
    var nA = fm(1080),
      JA = fm.n(nA),
      cA = fm(23),
      zA = fm(36681),
      ZA = fm(3413),
      kA = fm(1893),
      bA = fm(1884),
      SA = fm(34315),
      eA = fm(1208),
      NA = fm(1449),
      GA = fm(1135);

    function XA(mm) {
      let {
        controller: Tm,
        minimap: fm,
        children: hm
      } = mm;
      const am = (0, NA.i)(VA, Tm.getHudSnapshot()),
        [xm, wm] = (0, zm.useState)(Tm.skills.getSnapshot().overallLevel);
      (0, NA.g)(xf, (mm => {
        wm(mm.overallLevel)
      }));
      const Dm = (0, zm.useRef)(null);
      (0, NA.g)(Bf, (mm => {
        ! function(mm, Tm) {
          if (null === mm || "function" !== typeof mm.animate) return;
          const fm = Tm ? 1.35 : 1.15;
          mm.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${fm})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Tm ? 320 : 160,
            easing: "ease-out"
          }), mm.classList.toggle("Receiving", !Tm), Tm && (mm.classList.remove("Shine"), mm.offsetWidth, mm.classList.add("Shine"))
        }(Dm.current, mm)
      }));
      const {
        t: im
      } = (0, eA.A)(), {
        isTouchScreen: Rm
      } = (0, cA.m)(["isTouchScreen"]), [pm, Em] = (0, zm.useState)(null);
      return (0, ZA.g)(pm, ".SkyblockRightHud"), null !== am || fm ? (0, GA.jsx)(zA.e, {
        placement: "topRight",
        children: (0, GA.jsxs)("div", {
          className: JA()("SkyblockRightHud", {
            TouchScreen: Rm
          }),
          children: [fm, null !== am && (0, GA.jsxs)("div", {
            ref: Em,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in am ? (0, GA.jsx)("div", {
              className: "SkyblockHudHelp",
              children: am.hudHelpText
            }) : (0, GA.jsxs)(GA.Fragment, {
              children: [(0, GA.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, GA.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, GA.jsx)("strong", {
                    style: {
                      color: Am.J.cyanUiText
                    },
                    children: im(am.hudZoneNameKey)
                  }), null !== xm && (0, GA.jsx)("span", {
                    style: {
                      color: Am.J.goldUiText
                    },
                    children: im("skyblockGame:level", {
                      level: (0, SA.f)(xm)
                    })
                  })]
                }), (0, GA.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Dm,
                  children: [(0, GA.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, GA.jsx)(kA.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, SA.f)(am.hudPurseCoins)]
                })]
              }), am.hudClockText.length > 0 && (0, GA.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, GA.jsx)(bA.b, {
                  text: am.hudClockText
                })
              })]
            }), hm, "hudZoneNameKey" in am && (0, GA.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function PA(mm) {
      let {
        icon: Tm
      } = mm;
      const fm = (0, zm.useCallback)((mm => {
        null === mm || void 0 === mm || mm.replaceChildren(vT(Tm))
      }), [Tm]);
      return (0, GA.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: fm
      })
    }

    function HA(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)();
      return (0, GA.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Tm.display.mountPlayer,
        title: fm("skyblockGame:mapYouAreHere"),
        children: (0, GA.jsx)(PA, {
          icon: "player"
        })
      })
    }
    const yA = fm(38645),
      CA = Object.fromEntries(yA.keys().map((mm => [mm.replace(/^\.\/(.*)\.png$/, "$1"), yA(mm)])));

    function rA(mm, Tm) {
      var fm;
      return null !== (fm = CA[mm]) && void 0 !== fm ? fm : CA[Tm]
    }

    function sA(mm) {
      let {
        imageKey: Tm,
        fallbackImageKey: fm,
        geometryKey: hm,
        alt: Am,
        className: am
      } = mm;
      const [xm, wm] = (0, zm.useState)((() => function(mm, Tm) {
        return [{
          id: 0,
          imageKey: mm,
          geometryKey: Tm,
          phase: "shown"
        }]
      }(Tm, hm))), Dm = function(mm, Tm, fm) {
        const hm = mm[mm.length - 1];
        if (hm.imageKey === Tm && hm.geometryKey === fm) return mm;
        const Am = {
          id: hm.id + 1,
          imageKey: Tm,
          geometryKey: fm,
          phase: "entering"
        };
        return hm.geometryKey === fm ? [{
          ...hm,
          phase: "leaving"
        }, Am] : [Am]
      }(xm, Tm, hm);
      return Dm !== xm && wm(Dm), (0, GA.jsx)(GA.Fragment, {
        children: Dm.map((mm => (0, GA.jsx)("img", {
          className: JA()("SkyblockMapTerrainImage", am, {
            Entering: "entering" === mm.phase,
            Leaving: "leaving" === mm.phase
          }),
          src: rA(mm.imageKey, fm),
          alt: "leaving" === mm.phase ? "" : Am,
          onAnimationEnd: () => {
            wm((Tm => function(mm, Tm) {
              return mm.flatMap((mm => mm.id !== Tm ? [mm] : "leaving" === mm.phase ? [] : [{
                ...mm,
                phase: "shown"
              }]))
            }(Tm, mm.id)))
          }
        }, mm.id)))
      })
    }
    var lA = fm(4471),
      MA = fm(1454);

    function uA(mm) {
      if ("Tab" !== mm.key) return;
      const Tm = Array.from(mm.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        fm = Tm.indexOf(document.activeElement);
      var hm;
      if (mm.shiftKey && fm <= 0) mm.preventDefault(), null === (hm = Tm.at(-1)) || void 0 === hm || hm.focus();
      else if (!mm.shiftKey && (-1 === fm || fm === Tm.length - 1)) {
        var Am;
        mm.preventDefault(), null === (Am = Tm[0]) || void 0 === Am || Am.focus()
      }
    }

    function BA() {
      const mm = (0, zm.useRef)(null);
      return (0, zm.useCallback)((Tm => {
        var fm;
        Tm ? (mm.current = document.activeElement, Tm.focus()) : null === (fm = mm.current) || void 0 === fm || fm.focus()
      }), [])
    }

    function LA(mm) {
      let {
        percent: Tm,
        label: fm,
        levelUpToken: hm,
        colour: Am
      } = mm;
      return (0, GA.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": fm,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Tm,
        "aria-valuetext": fm,
        children: [(0, GA.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Tm/100})`
          }
        }), null !== hm && void 0 !== hm && (0, GA.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Am
          }
        }, hm)]
      })
    }

    function vA(mm) {
      let {
        mount: Tm
      } = mm;
      return (0, GA.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Tm,
        hidden: !0,
        children: (0, GA.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, GA.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, GA.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function tA(mm, Tm, fm, hm) {
      (0, zm.useLayoutEffect)((() => {
        const Am = mm.current;
        if (!fm || null === Tm || void 0 === Tm || !Tm.local || !Am) return;
        const am = Array.from(Am.querySelectorAll(".SkyblockMapNode")),
          xm = [...Tm.points, ...Tm.portals],
          wm = () => {
            const mm = Am.clientWidth,
              fm = Am.clientHeight,
              wm = am.map(((Am, am) => {
                const wm = xm[am];
                return {
                  id: wm.id,
                  portal: am >= Tm.points.length,
                  x: wm.position[0] * mm / 100,
                  y: wm.position[1] * fm / 100,
                  width: Am.offsetWidth / hm,
                  height: Am.offsetHeight / hm
                }
              })),
              Dm = new Map(xm.map(((mm, Tm) => [mm.id, am[Tm]])));
            for (const Tm of function(mm, Tm, fm) {
                const hm = [],
                  Am = [...mm].sort(((mm, Tm) => Number(Tm.portal) - Number(mm.portal) || mm.id.localeCompare(Tm.id)));
                for (const am of Am) {
                  const mm = mm => Math.max(am.width / 2, Math.min(Tm - am.width / 2, mm)),
                    Am = mm => Math.max(am.height / 2, Math.min(fm - am.height / 2, mm)),
                    xm = [mm(am.x)],
                    wm = [Am(am.y)];
                  for (const Tm of hm) xm.push(mm(Tm.x - (Tm.width + am.width) / 2 - 4), mm(Tm.x + (Tm.width + am.width) / 2 + 4)), wm.push(Am(Tm.y - (Tm.height + am.height) / 2 - 4), Am(Tm.y + (Tm.height + am.height) / 2 + 4));
                  let Dm = {
                      ...am,
                      x: xm[0],
                      y: wm[0]
                    },
                    im = 1 / 0,
                    Rm = 1 / 0;
                  for (const Tm of new Set(xm))
                    for (const mm of new Set(wm)) {
                      let fm = 0;
                      for (const xm of hm) fm += Math.max(0, (am.width + xm.width) / 2 + 4 - Math.abs(Tm - xm.x)) * Math.max(0, (am.height + xm.height) / 2 + 4 - Math.abs(mm - xm.y));
                      const Am = (Tm - am.x) ** 2 + (mm - am.y) ** 2;
                      (fm < im || fm === im && Am < Rm) && (Dm = {
                        ...am,
                        x: Tm,
                        y: mm
                      }, im = fm, Rm = Am)
                    }
                  hm.push(Dm)
                }
                return hm
              }(wm, mm, fm)) {
              const mm = Dm.get(Tm.id);
              mm.style.left = `${Tm.x}px`, mm.style.top = `${Tm.y}px`
            }
          };
        wm();
        const Dm = new ResizeObserver(wm);
        Dm.observe(Am);
        for (const mm of am) Dm.observe(mm);
        return () => {
          Dm.disconnect()
        }
      }), [mm, Tm, fm, hm])
    }
    const UA = {
        zoom: 1,
        x: 0,
        y: 0
      },
      dA = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function gA(mm, Tm, fm) {
      return Math.min(fm, Math.max(Tm, mm))
    }

    function WA(mm, Tm, fm) {
      const hm = Math.min(1, fm * Tm / mm),
        Am = Math.min(1, mm / (fm * Tm));
      return {
        x0: (1 - hm) / 2,
        y0: (1 - Am) / 2,
        x1: (1 + hm) / 2,
        y1: (1 + Am) / 2
      }
    }

    function FA(mm, Tm, fm, hm) {
      const Am = Tm * (hm - fm);
      if (Am <= 1) return .5 - Tm * (fm + hm) / 2;
      const am = .45 * Math.min(1, Am - 1);
      return gA(mm, 1 - Tm * hm - am, am - Tm * fm)
    }

    function ma(mm, Tm) {
      const fm = gA(mm.zoom, 1, 12);
      return {
        zoom: fm,
        x: FA(mm.x, fm, Tm.x0, Tm.x1),
        y: FA(mm.y, fm, Tm.y0, Tm.y1)
      }
    }

    function Ta(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dA;
      const am = gA(mm.zoom * Tm, 1, 12),
        xm = am / mm.zoom;
      return ma({
        zoom: am,
        x: fm - (fm - mm.x) * xm,
        y: hm - (hm - mm.y) * xm
      }, Am)
    }

    function fa(mm, Tm, fm, hm) {
      const [Am, am] = (0, zm.useState)(UA);
      (0, zm.useEffect)((() => {
        am(UA)
      }), [fm]), (0, zm.useEffect)((() => {
        const fm = mm.current;
        if (!Tm || !fm) return;
        const Am = () => WA(fm.clientWidth, fm.clientHeight, hm),
          xm = mm => {
            const Tm = fm.getBoundingClientRect();
            return {
              x: (mm.clientX - Tm.left) / Tm.width,
              y: (mm.clientY - Tm.top) / Tm.height
            }
          },
          wm = new Map;
        let Dm = {
            x: 0,
            y: 0
          },
          im = !1,
          Rm = 0;
        const pm = mm => {
            mm.preventDefault();
            const Tm = mm.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * mm.deltaY : mm.deltaY,
              fm = xm(mm);
            am((mm => Ta(mm, Math.exp(.0015 * -Tm), fm.x, fm.y, Am())))
          },
          Em = mm => {
            "mouse" === mm.pointerType && 0 !== mm.button || (wm.set(mm.pointerId, xm(mm)), 1 === wm.size && (Dm = {
              x: mm.clientX,
              y: mm.clientY
            }, im = !1), Rm = 0)
          },
          om = mm => {
            const Tm = wm.get(mm.pointerId);
            if (!Tm) return;
            const hm = xm(mm);
            if (wm.set(mm.pointerId, hm), 2 === wm.size) {
              const [mm, Tm] = [...wm.values()], fm = Math.hypot(mm.x - Tm.x, mm.y - Tm.y);
              if (Rm > 0) {
                const hm = fm / Rm;
                am((fm => Ta(fm, hm, (mm.x + Tm.x) / 2, (mm.y + Tm.y) / 2, Am())))
              }
              return Rm = fm, void(im = !0)
            }!im && Math.hypot(mm.clientX - Dm.x, mm.clientY - Dm.y) < 4 || (im || (im = !0, fm.setPointerCapture(mm.pointerId)), am((mm => function(mm, Tm, fm) {
              let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dA;
              return ma({
                zoom: mm.zoom,
                x: mm.x + Tm,
                y: mm.y + fm
              }, hm)
            }(mm, hm.x - Tm.x, hm.y - Tm.y, Am()))))
          },
          Om = mm => {
            wm.delete(mm.pointerId), Rm = 0
          },
          Ym = mm => {
            im && (mm.stopPropagation(), mm.preventDefault(), im = !1)
          },
          qm = new ResizeObserver((() => {
            am((mm => ma(mm, Am())))
          }));
        return qm.observe(fm), fm.addEventListener("wheel", pm, {
          passive: !1
        }), fm.addEventListener("pointerdown", Em), fm.addEventListener("pointermove", om), fm.addEventListener("pointerup", Om), fm.addEventListener("pointercancel", Om), fm.addEventListener("click", Ym, !0), () => {
          qm.disconnect(), fm.removeEventListener("wheel", pm), fm.removeEventListener("pointerdown", Em), fm.removeEventListener("pointermove", om), fm.removeEventListener("pointerup", Om), fm.removeEventListener("pointercancel", Om), fm.removeEventListener("click", Ym, !0)
        }
      }), [mm, Tm, fm, hm]);
      return {
        view: Am,
        zoomBy: Tm => {
          const fm = mm.current;
          fm && am((mm => Ta(mm, Tm, .5, .5, WA(fm.clientWidth, fm.clientHeight, hm))))
        }
      }
    }

    function ha(mm) {
      var Tm, fm, hm, Am;
      let {
        controller: am,
        navigation: xm
      } = mm;
      const wm = (0, NA.i)(Em, am.getSnapshot()),
        {
          t: Dm
        } = (0, eA.A)(),
        im = BA(),
        Rm = wm.presentation,
        pm = (0, zm.useRef)(null),
        om = (0, zm.useRef)(null),
        Om = Boolean(wm.open && (null === Rm || void 0 === Rm ? void 0 : Rm.local) && Rm.background),
        Ym = fa(pm, Om, `${wm.open}|${wm.tab}|${null===Rm||void 0===Rm||null===(Tm=Rm.background)||void 0===Tm?void 0:Tm.geometryKey}`, null !== (fm = null === Rm || void 0 === Rm || null === (hm = Rm.background) || void 0 === hm ? void 0 : hm.ratio) && void 0 !== fm ? fm : 2);
      if (tA(om, Rm, wm.open, Ym.view.zoom), !Rm || !wm.open) return null;
      const qm = Rm.local ? Rm.background : null,
        jm = {
          "--map-ratio": String(null !== (Am = null === qm || void 0 === qm ? void 0 : qm.ratio) && void 0 !== Am ? Am : 2),
          backgroundColor: null === qm || void 0 === qm ? void 0 : qm.colour
        },
        Vm = {
          "--map-zoom": String(Ym.view.zoom),
          transform: `translate(${100*Ym.view.x}%, ${100*Ym.view.y}%) scale(${Ym.view.zoom})`
        };
      return (0, GA.jsx)(lA.d, {
        show: wm.open,
        close: am.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: im,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, GA.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Dm("skyblockGame:map")
              }), Rm.minimap && (0, GA.jsx)("p", {
                children: Rm.minimap.caption
              })]
            }), (0, GA.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((mm => (0, GA.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": mm === wm.tab ? "true" : void 0,
                className: JA()({
                  Selected: mm === wm.tab
                }),
                "aria-pressed": mm === wm.tab,
                onClick: () => {
                  am.selectTab(mm)
                },
                children: Dm("local" === mm ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, mm)))
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: am.dismiss
            })]
          }), (0, GA.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, GA.jsxs)("div", {
              ref: pm,
              className: JA()("SkyblockMapCanvas", {
                Local: Rm.local,
                Overview: !Rm.local,
                Zoomed: Ym.view.zoom > 1
              }),
              style: jm,
              children: [(0, GA.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Om ? Vm : void 0,
                children: (0, GA.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: om,
                  children: [qm && (0, GA.jsx)(sA, {
                    className: "SkyblockMapTerrain",
                    imageKey: qm.imageKey,
                    fallbackImageKey: qm.fallbackImageKey,
                    geometryKey: qm.geometryKey,
                    alt: qm.label
                  }), Rm.local && (0, GA.jsx)(vA, {
                    mount: xm.display.mountMapSearchArea
                  }), !Rm.local && (0, GA.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Rm.connections.map((mm => (0, GA.jsx)("line", {
                      className: JA()({
                        Explored: mm.explored
                      }),
                      x1: mm.start[0],
                      y1: mm.start[1],
                      x2: mm.end[0],
                      y2: mm.end[1]
                    }, mm.id)))
                  }), Rm.points.map((mm => {
                    const Tm = !Rm.local && mm.thumbnail ? CA[mm.thumbnail] : void 0;
                    return (0, GA.jsxs)("div", {
                      className: JA()("SkyblockMapNode", {
                        Current: mm.current
                      }),
                      style: {
                        left: `${mm.position[0]}%`,
                        top: `${mm.position[1]}%`
                      },
                      children: [(0, GA.jsxs)(MA.e, {
                        className: JA()("SkyblockMapPin", {
                          Unknown: !mm.visited,
                          Current: mm.current
                        }),
                        disabled: wm.pending,
                        onClick: () => {
                          am.travel(mm.travelKind, mm.travelId)
                        },
                        children: [Tm && (0, GA.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Tm,
                          alt: ""
                        }), !Tm && (0, GA.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, GA.jsx)(PA, {
                            icon: mm.icon
                          })
                        }), (0, GA.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: mm.name
                        })]
                      }), mm.current && (0, GA.jsx)("span", {
                        className: JA()("SkyblockMapHereBadge", {
                          Above: mm.position[1] > 50
                        }),
                        children: Dm("skyblockGame:mapYouAreHere")
                      })]
                    }, mm.id)
                  })), Rm.portals.map((mm => (0, GA.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${mm.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${mm.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, GA.jsxs)(MA.e, {
                      className: "SkyblockMapPin",
                      disabled: wm.pending,
                      onClick: () => {
                        am.travel(mm.travelKind, mm.travelId)
                      },
                      children: [(0, GA.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: mm.colour
                        },
                        "aria-hidden": "true",
                        children: (0, GA.jsx)(PA, {
                          icon: mm.icon
                        })
                      }), (0, GA.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: mm.name
                      })]
                    })
                  }, mm.id))), Rm.local && (0, GA.jsx)(HA, {
                    controller: xm
                  })]
                })
              }), Om && (0, GA.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, GA.jsx)("button", {
                  type: "button",
                  "aria-label": Dm("skyblockGame:mapZoomIn"),
                  disabled: Ym.view.zoom >= 12,
                  onClick: () => {
                    Ym.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, GA.jsx)("button", {
                  type: "button",
                  "aria-label": Dm("skyblockGame:mapZoomOut"),
                  disabled: Ym.view.zoom <= 1,
                  onClick: () => {
                    Ym.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, GA.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: wm.feedback
              })]
            })
          }), (0, GA.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Rm.progress && (0, GA.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, GA.jsx)("span", {
                children: Rm.progress
              }), (0, GA.jsx)(LA, {
                percent: Rm.percent,
                label: Rm.progress
              })]
            }), Rm.noLandmarks && (0, GA.jsx)("span", {
              children: Dm("skyblockGame:mapNoLandmarks")
            }), Rm.canTravel && (0, GA.jsx)("span", {
              className: "SkyblockMapHint",
              children: Dm("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Aa(mm) {
      let {
        view: Tm,
        controller: fm,
        navigation: hm
      } = mm;
      const {
        t: Am
      } = (0, eA.A)(), {
        isTouchScreen: am
      } = (0, cA.m)(["isTouchScreen"]);
      return (0, GA.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Am("skyblockGame:mapLocal"),
        children: [am && (0, GA.jsx)(MA.e, {
          className: "SkyblockMinimapOpen",
          onClick: fm.showLocal,
          children: Am("skyblockGame:map")
        }), (0, GA.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Tm.colour
          },
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: hm.display.mountTerrain,
            style: {
              width: Tm.width,
              height: Tm.height
            },
            children: [(0, GA.jsx)(sA, {
              imageKey: Tm.imageKey,
              fallbackImageKey: Tm.fallbackImageKey,
              geometryKey: Tm.geometryKey,
              alt: Tm.label
            }), (0, GA.jsx)(vA, {
              mount: hm.display.mountMinimapSearchArea
            }), Tm.markers.map((mm => (0, GA.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${mm.position[0]}%`,
                top: `${mm.position[1]}%`,
                color: mm.colour
              },
              title: mm.name,
              children: (0, GA.jsx)(PA, {
                icon: mm.icon
              })
            }, mm.id)))]
          }), (0, GA.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Am("skyblockGame:mapYouAreHere"),
            children: (0, GA.jsx)(PA, {
              icon: "player"
            })
          })]
        }), (0, GA.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Tm.caption
        })]
      })
    }

    function aa(mm) {
      let {
        controller: Tm
      } = mm;
      return (0, GA.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Tm.display.mountCompass,
        children: [(0, GA.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, GA.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, GA.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function xa(mm) {
      let {
        controller: Tm,
        surface: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)(), Am = (0, NA.i)(xf, Tm.getSnapshot()), am = BA();
      return Am.enabled ? (0, GA.jsxs)(GA.Fragment, {
        children: ["hud" === fm && (0, GA.jsx)(zA.e, {
          placement: "statBars",
          children: Am.hud && (0, GA.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Am.hud.colour
            },
            children: [(0, GA.jsx)(LA, {
              percent: Am.hud.skill.percent,
              label: Am.hud.skill.xp,
              levelUpToken: Am.hud.levelUpToken,
              colour: Am.hud.colour
            }), (0, GA.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, GA.jsxs)("span", {
                children: [Am.hud.skill.label, " \xb7 ", Am.hud.skill.level]
              }), (0, GA.jsx)("span", {
                children: Am.hud.gain
              })]
            })]
          })
        }), "hud" === fm && (0, GA.jsx)(zA.e, {
          children: Am.hud && (0, GA.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, GA.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, GA.jsx)("strong", {
                children: Am.hud.skill.label
              }), (0, GA.jsx)("span", {
                children: Am.hud.gain
              })]
            }), (0, GA.jsx)(LA, {
              percent: Am.hud.skill.percent,
              label: Am.hud.skill.xp,
              levelUpToken: Am.hud.levelUpToken,
              colour: Am.hud.colour
            }), (0, GA.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, GA.jsx)("span", {
                children: Am.hud.skill.level
              }), (0, GA.jsx)("span", {
                children: Am.hud.skill.xp
              })]
            })]
          })
        }), "menu" === fm && (0, GA.jsx)(lA.d, {
          show: Am.open,
          close: Tm.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, GA.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: am,
            onKeyDown: uA,
            children: [(0, GA.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, GA.jsxs)("div", {
                children: [(0, GA.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: hm("skyblockGame:skills")
                }), (0, GA.jsx)("p", {
                  children: hm("skyblockGame:skillsIntro")
                })]
              }), (0, GA.jsx)(MA.j, {
                padIgnore: !0,
                onClick: Tm.dismiss
              })]
            }), (0, GA.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, GA.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Am.skills.map((mm => (0, GA.jsxs)(MA.e, {
                  className: JA()("SkyblockSkillCard", {
                    Selected: mm.selected
                  }),
                  ariaPressed: mm.selected,
                  onClick: () => {
                    Tm.select(mm.id)
                  },
                  children: [(0, GA.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, GA.jsx)(kA.d, {
                      itemName: mm.icon,
                      amount: 0
                    })
                  }), (0, GA.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, GA.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, GA.jsx)("strong", {
                        children: mm.label
                      }), (0, GA.jsx)("span", {
                        children: mm.level
                      })]
                    }), (0, GA.jsx)(LA, {
                      percent: mm.percent,
                      label: `${mm.label}: ${mm.xp}`
                    }), (0, GA.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: mm.xp
                    })]
                  })]
                }, mm.id)))
              }), Am.detail && (0, GA.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, GA.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, GA.jsx)(kA.d, {
                    itemName: Am.detail.icon,
                    amount: 0
                  })
                }), (0, GA.jsx)("h3", {
                  children: Am.detail.label
                }), (0, GA.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Am.detail.level
                }), (0, GA.jsx)("p", {
                  children: Am.detail.description
                }), (0, GA.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, GA.jsx)("strong", {
                    children: hm("skyblockGame:currentBenefit")
                  }), (0, GA.jsx)("span", {
                    children: Am.detail.benefit
                  })]
                }), (0, GA.jsx)(LA, {
                  percent: Am.detail.percent,
                  label: Am.detail.xp
                }), (0, GA.jsx)("p", {
                  children: Am.detail.xp
                }), (0, GA.jsx)("h4", {
                  children: hm("skyblockGame:earnXp")
                }), (0, GA.jsx)("ul", {
                  children: Am.detail.sources.map((mm => (0, GA.jsx)("li", {
                    children: mm
                  }, mm)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var wa = fm(1362),
      Da = fm(4782),
      ia = fm(339);

    function Ra(mm) {
      let {
        item: Tm
      } = mm;
      return (0, GA.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, GA.jsx)(kA.d, {
          itemName: Tm,
          amount: 0
        })
      })
    }

    function pa(mm) {
      let {
        name: Tm,
        percent: fm,
        progress: hm
      } = mm;
      return (0, GA.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, GA.jsx)(LA, {
          percent: fm,
          label: `${(0,ia.ob)(Tm)}: ${hm}`
        }), (0, GA.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: hm
        })]
      })
    }

    function Ea(mm) {
      let {
        subquests: Tm,
        showDescriptions: fm = !1
      } = mm;
      return (0, GA.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Tm.map((mm => {
          const Tm = fm && "completed" === mm.status,
            hm = (0, GA.jsxs)("li", {
              className: JA()("SkyblockQuestStep", mm.status, {
                JustFinished: mm.justFinished,
                JustUnlocked: mm.justUnlocked
              }),
              tabIndex: Tm ? 0 : void 0,
              children: [null !== mm.iconItem && (0, GA.jsx)(Ra, {
                item: mm.iconItem
              }), null === mm.iconItem && (0, GA.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === mm.status ? "\u2713" : "skipped" === mm.status ? "\u2212" : "\u25cb"
              }), (0, GA.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, GA.jsx)("strong", {
                  children: (0, GA.jsx)(Da.e, {
                    text: mm.name
                  })
                }), fm && !Tm && (0, GA.jsx)("span", {
                  children: (0, GA.jsx)(Da.e, {
                    text: mm.description
                  })
                }), null !== mm.barPercent && (0, GA.jsx)(pa, {
                  name: mm.name,
                  percent: mm.barPercent,
                  progress: mm.progress
                }), null === mm.barPercent && !Tm && (0, GA.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: mm.statusLabel
                })]
              })]
            }, mm.id);
          return Tm ? (0, GA.jsx)(wa.h, {
            delayShow: 200,
            tooltipInner: (0, GA.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, GA.jsx)("span", {
                children: (0, GA.jsx)(Da.e, {
                  text: mm.description
                })
              }), (0, GA.jsx)("strong", {
                children: mm.statusLabel
              })]
            }),
            children: hm
          }, mm.id) : hm
        }))
      })
    }

    function oa(mm) {
      let {
        quest: Tm,
        select: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)(), Am = Tm.focusStep;
      return (0, GA.jsxs)(MA.e, {
        className: JA()("SkyblockQuestCard", {
          Selected: Tm.selected,
          Tracked: Tm.tracked
        }),
        onClick: () => {
          fm(Tm.id)
        },
        children: [(0, GA.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, GA.jsx)("strong", {
            children: (0, GA.jsx)(Da.e, {
              text: Tm.name
            })
          }), Tm.tracked && (0, GA.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: hm("skyblockGame:currentQuest")
          })]
        }), Am && (0, GA.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Am.iconItem && (0, GA.jsx)(Ra, {
            item: Am.iconItem
          }), (0, GA.jsx)(pa, {
            name: Am.name,
            percent: Am.barPercent,
            progress: Am.progress
          })]
        }), (0, GA.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Tm.progress
        })]
      })
    }

    function Oa(mm) {
      let {
        controller: Tm,
        surface: fm
      } = mm;
      const hm = (0, NA.i)(pf, Tm.getSnapshot()),
        {
          t: Am
        } = (0, eA.A)(),
        am = BA();
      return hm.enabled ? (0, GA.jsxs)(GA.Fragment, {
        children: ["hud" === fm && (0, GA.jsx)(GA.Fragment, {
          children: hm.tracked && (0, GA.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Rf,
            children: (0, GA.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [hm.trackedStepPulse > 0 && (0, GA.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, hm.trackedStepPulse), (0, GA.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Am("skyblockGame:currentQuest")
              }), (0, GA.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, GA.jsx)("strong", {
                  children: (0, GA.jsx)(Da.e, {
                    text: hm.tracked.name
                  })
                }), null !== hm.tracked.clock && (0, GA.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: hm.tracked.clock
                })]
              }), (0, GA.jsx)(Ea, {
                subquests: hm.tracked.subquests
              })]
            })
          })
        }), "menu" === fm && (0, GA.jsx)(lA.d, {
          show: hm.open,
          close: Tm.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, GA.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: am,
            onKeyDown: uA,
            children: [(0, GA.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, GA.jsx)("div", {
                children: (0, GA.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Am("skyblockGame:quests")
                })
              }), (0, GA.jsx)(MA.j, {
                padIgnore: !0,
                onClick: Tm.dismiss
              })]
            }), (0, GA.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, GA.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, GA.jsx)("h3", {
                  children: Am("skyblockGame:current")
                }), 0 === hm.active.length && (0, GA.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Am("skyblockGame:noActiveQuests")
                }), hm.active.map((mm => (0, GA.jsx)(oa, {
                  quest: mm,
                  select: Tm.select
                }, mm.id))), (0, GA.jsx)("h3", {
                  children: (0, GA.jsxs)("button", {
                    type: "button",
                    className: JA()("SkyblockQuestSectionToggle", {
                      Expanded: hm.completedExpanded
                    }),
                    "aria-expanded": hm.completedExpanded,
                    onClick: Tm.toggleCompleted,
                    children: [(0, GA.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Am("skyblockGame:completed"), (0, GA.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: hm.completed.length
                    })]
                  })
                }), hm.completedExpanded && 0 === hm.completed.length && (0, GA.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Am("skyblockGame:noCompletedQuests")
                }), hm.completedExpanded && hm.completed.map((mm => (0, GA.jsx)(oa, {
                  quest: mm,
                  select: Tm.select
                }, mm.id)))]
              }), hm.detail && (0, GA.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [hm.detail.completed && (0, GA.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Am("skyblockGame:completedQuest")
                }), (0, GA.jsx)("h3", {
                  children: (0, GA.jsx)(Da.e, {
                    text: hm.detail.name
                  })
                }), (0, GA.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, GA.jsx)(Da.e, {
                    text: hm.detail.description
                  })
                }), (0, GA.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [hm.detail.progress, null !== hm.detail.clock && (0, GA.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: hm.detail.clock
                  })]
                }), (0, GA.jsx)(Ea, {
                  subquests: hm.detail.subquests,
                  showDescriptions: !0
                }), hm.detail.tracked && (0, GA.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: hm.detail.trackLabel
                }), !hm.detail.completed && !hm.detail.tracked && (0, GA.jsx)(MA.m, {
                  onClick: Tm.trackSelected,
                  disabled: !hm.detail.canTrack,
                  children: hm.detail.trackLabel
                }), hm.detail.canViewDialogue && (0, GA.jsx)(MA.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Tm.viewDialogue,
                  children: Am("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Ya = fm(1089),
      qa = fm(2616);

    function ja(mm, Tm, fm, hm, Am) {
      const am = mm => "linear" === Am ? mm : {
          qa: Am,
          point: mm
        },
        xm = {};
      for (const [wm, Dm] of hm)
        for (const [Tm, fm] of Object.entries(mm(wm, Dm, am))) xm[Tm] ??= {
          timeline: []
        }, xm[Tm].timeline.push(fm);
      return {
        Ra: Tm,
        loop: fm,
        oa: xm
      }
    }
    const Va = .547,
      Ia = .022,
      Ka = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Qa = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function na(mm, Tm, fm) {
      const {
        drop: hm = 0,
        shift: Am = 0,
        torso: am = 0,
        nod: xm = 0,
        tilt: wm = 0,
        legs: Dm = [0, 0],
        arms: im = 0,
        spread: Rm = 0
      } = Tm, pm = Va * Math.cos(am) - Ia * Math.sin(am), Em = Va * Math.sin(am) + Ia * Math.cos(am), om = fm([0, -hm, Am]);
      return {
        LowerBody: {
          timeFraction: mm,
          position: om,
          rotation: fm([0, 0, 0])
        },
        UpperBody: {
          timeFraction: mm,
          position: om,
          rotation: fm([am, 0, wm])
        },
        HeadMesh: {
          timeFraction: mm,
          position: fm([0, pm - Va - hm, Em - Ia + Am]),
          rotation: fm([am + xm, 0, wm])
        },
        LegLeftMesh: {
          timeFraction: mm,
          rotation: fm([Dm[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: mm,
          rotation: fm([Dm[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: mm,
          rotation: fm([im, 0, Rm])
        },
        ArmRightMesh: {
          timeFraction: mm,
          rotation: fm([im, 0, -Rm])
        }
      }
    }

    function Ja(mm, Tm, fm) {
      return ja(na, mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function ca(mm) {
      return "number" === typeof mm ? [mm, mm] : mm
    }

    function za(mm, Tm, fm) {
      const {
        rise: hm = 0,
        shift: Am = 0,
        torso: am = 0,
        twist: xm = 0,
        tilt: wm = 0,
        nod: Dm = 0,
        cock: im = 0,
        arms: Rm = 0,
        spread: pm = 0
      } = Tm, [Em, om] = ca(Rm), [Om, Ym] = ca(pm);
      return {
        TorsoNode: {
          timeFraction: mm,
          position: fm([0, hm, Am]),
          rotation: fm([am, xm, wm])
        },
        HeadMesh: {
          timeFraction: mm,
          rotation: fm([Dm, 0, im])
        },
        ArmLeftMesh: {
          timeFraction: mm,
          rotation: fm([Em, 0, Om])
        },
        ArmRightMesh: {
          timeFraction: mm,
          rotation: fm([om, 0, -Ym])
        }
      }
    }
    const Za = [1.0625, -1, 0];

    function ka(mm) {
      return "number" === typeof mm ? [mm, mm] : mm
    }

    function ba(mm, Tm, fm) {
      const {
        drop: hm = 0,
        shift: Am = 0,
        torso: am = 0,
        tilt: xm = 0,
        nod: wm = 0,
        cock: Dm = 0,
        legs: im = [0, 0],
        arms: Rm = 0,
        spread: pm = 0
      } = Tm, [Em, om] = ka(Rm), [Om, Ym] = ka(pm), qm = -am, jm = -xm, [Vm, Im, Km] = function(mm, Tm) {
        const [fm, hm, Am] = [-Za[0], Za[1], -Za[2]], am = fm * Math.cos(Tm) - hm * Math.sin(Tm), xm = fm * Math.sin(Tm) + hm * Math.cos(Tm);
        return [am - fm, -(xm * Math.cos(mm) - Am * Math.sin(mm) - hm), xm * Math.sin(mm) + Am * Math.cos(mm) - Am]
      }(qm, jm), Qm = fm([0, -hm, Am]);
      return {
        TorsoNode: {
          timeFraction: mm,
          position: fm([Vm, Im - hm, Km + Am]),
          rotation: fm([qm, 0, jm])
        },
        HeadMesh: {
          timeFraction: mm,
          rotation: fm([-wm, 0, -Dm])
        },
        ArmLeftMesh: {
          timeFraction: mm,
          rotation: fm([-Em, 0, -Om])
        },
        ArmRightMesh: {
          timeFraction: mm,
          rotation: fm([-om, 0, Ym])
        },
        LegLeftMesh: {
          timeFraction: mm,
          position: Qm,
          rotation: fm([-im[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: mm,
          position: Qm,
          rotation: fm([-im[1], 0, 0])
        }
      }
    }
    var Sa = fm(37243),
      ea = fm(38570),
      Na = fm(38730);

    function Ga(mm, Tm, fm) {
      var hm, Am;
      const am = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return mm + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - mm) * fm
        },
        [xm, wm] = null !== (hm = mm.legs) && void 0 !== hm ? hm : [0, 0],
        [Dm, im] = null !== (Am = Tm.legs) && void 0 !== Am ? Am : [0, 0];
      return {
        drop: am(mm.drop, Tm.drop),
        shift: am(mm.shift, Tm.shift),
        torso: am(mm.torso, Tm.torso),
        nod: am(mm.nod, Tm.nod),
        tilt: am(mm.tilt, Tm.tilt),
        legs: [am(xm, Dm), am(wm, im)],
        arms: am(mm.arms, Tm.arms),
        spread: am(mm.spread, Tm.spread)
      }
    }
    const Xa = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Pa = Ja(4400, !0, [
        [0, Xa],
        [.16, {
          ...Xa,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Xa],
        [.44, {
          ...Xa,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Ga(Xa, Ka, .7)],
        [.66, Ga(Xa, Ka, .78)],
        [.74, Ga(Xa, Qa, .65)],
        [.86, {
          ...Xa,
          drop: .14
        }],
        [1, Xa]
      ], "catmull-rom-spline"),
      Ha = {
        ...Xa,
        drop: .14,
        torso: .3,
        spread: .4
      },
      ya = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Ca = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      ra = {
        caveGolem: Pa,
        magmaGolem: Ja(3600, !0, [
          [0, Ha],
          [.12, {
            ...Ha,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ha,
            tilt: -.08
          }],
          [.4, {
            ...Ha,
            tilt: .06,
            drop: .11
          }],
          [.52, Ga(Ha, Ka, .9)],
          [.62, Ga(Ha, Qa, .8)],
          [.7, Ga(Ha, Qa, .45)],
          [.78, Ga(Ha, Qa, .85)],
          [.9, {
            ...Ha,
            drop: .17
          }],
          [1, Ha]
        ], "catmull-rom-spline"),
        frostWraith: function(mm, Tm, fm) {
          return ja(za, mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, ya],
          [.14, {
            ...ya,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...ya,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...ya,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...ya,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...ya,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...ya,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...ya,
            rise: .16,
            tilt: -.04
          }],
          [1, ya]
        ], "catmull-rom-spline"),
        tikiTerror: function(mm, Tm, fm) {
          return ja(ba, mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Ca],
          [.16, {
            ...Ca,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Ca],
          [.44, {
            ...Ca,
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
            ...Ca,
            drop: .1
          }],
          [1, Ca]
        ], "catmull-rom-spline")
      },
      sa = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      la = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Ma = Object.fromEntries(Object.entries(ra).map((mm => {
        let [Tm, fm] = mm;
        return [Tm, (0, Na.e)((0, Sa.c)(fm), Tm)]
      })));

    function ua(mm) {
      const Tm = function(mm) {
        var Tm;
        const fm = (0, ea.b)(mm).poseRig;
        return null !== (Tm = la[mm]) && void 0 !== Tm ? Tm : void 0 === fm ? null : sa[fm]
      }(mm);
      return null === Tm ? null : Ma[Tm]
    }

    function Ba(mm) {
      return {
        "--difficulty-colour": mm
      }
    }
    const La = (0, zm.lazy)((() => (0, qa.c)(fm.e(200).then((() => fm(41560))), (mm => mm.MobPreview))));

    function va(mm) {
      var Tm, fm, hm;
      let {
        picker: Am,
        controller: am
      } = mm;
      const {
        t: xm
      } = (0, eA.A)(), wm = BA(), {
        page: Dm
      } = Am;
      return (0, GA.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: wm,
        onKeyDown: mm => {
          "ArrowLeft" === mm.key ? (mm.preventDefault(), mm.stopPropagation(), am.previous()) : "ArrowRight" === mm.key ? (mm.preventDefault(), mm.stopPropagation(), am.next()) : uA(mm)
        },
        style: Ba(Dm.colour),
        children: [(0, GA.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, GA.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Am.dungeonName
          }), (0, GA.jsx)(MA.j, {
            padIgnore: !0,
            onClick: am.dismiss
          })]
        }), (0, GA.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, GA.jsx)(MA.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Am.canPrevious,
              onClick: am.previous,
              children: (0, GA.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, GA.jsx)(Ya.c, {
                  name: "angle-up"
                })
              })
            }), (0, GA.jsxs)("div", {
              className: JA()("SkyblockBossPickerBoss", {
                Locked: !Dm.unlocked
              }),
              children: [null !== Dm.bossMobType && (0, GA.jsx)(zm.Suspense, {
                fallback: (0, GA.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, GA.jsx)(La, {
                  className: "SkyblockBossPickerModel",
                  mobType: Dm.bossMobType,
                  variation: Dm.bossMobVariation,
                  animation: null !== (Tm = ua(Dm.bossMobType)) && void 0 !== Tm ? Tm : void 0
                })
              }), null === Dm.bossMobType && (0, GA.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, GA.jsx)(MA.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Am.canNext,
              onClick: am.next,
              children: (0, GA.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, GA.jsx)(Ya.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, GA.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Dm.beaten && (0, GA.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Dm.label]
            }), (0, GA.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (fm = Dm.bossName) && void 0 !== fm ? fm : "???"
            }), (0, GA.jsxs)("span", {
              className: JA()("SkyblockBossPickerRecord", {
                Locked: null !== Dm.lockedHint
              }),
              children: [null !== Dm.lockedHintHighlight && (0, GA.jsxs)(GA.Fragment, {
                children: [Dm.lockedHintHighlight.before, (0, GA.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Ba(Dm.lockedHintHighlight.colour),
                  children: [null !== Dm.lockedHintHighlight.icon && (0, GA.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, GA.jsx)(kA.d, {
                      itemName: Dm.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Dm.lockedHintHighlight.name]
                }), Dm.lockedHintHighlight.after]
              }), null === Dm.lockedHintHighlight && (null !== (hm = Dm.lockedHint) && void 0 !== hm ? hm : Dm.summary)]
            })]
          }), (0, GA.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Am.pages.map((mm => (0, GA.jsx)("span", {
              className: JA()("SkyblockBossPickerDot", {
                Current: mm.current,
                Locked: !mm.unlocked
              }),
              style: Ba(mm.colour)
            }, mm.difficulty)))
          }), (0, GA.jsx)(MA.q, {
            className: "SkyblockBossPickerFight",
            disabled: !Dm.unlocked,
            onClick: am.enter,
            children: xm("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function ta(mm) {
      let {
        dungeon: Tm,
        select: fm
      } = mm;
      return (0, GA.jsxs)(MA.e, {
        className: JA()("SkyblockDungeonCard", {
          Selected: Tm.selected
        }),
        onClick: () => {
          fm(Tm.id)
        },
        children: [(0, GA.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, GA.jsx)("strong", {
            children: Tm.name
          }), (0, GA.jsx)("span", {
            children: Tm.beatenSummary
          })]
        }), (0, GA.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Tm.difficulties.map((mm => (0, GA.jsxs)("span", {
            className: JA()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: mm.beaten
            }),
            style: Ba(mm.colour),
            title: mm.summary,
            children: [mm.beaten && (0, GA.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), mm.label]
          }, mm.difficulty)))
        })]
      })
    }

    function Ua(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Yf, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA();
      return fm.enabled ? (0, GA.jsxs)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [fm.picker && (0, GA.jsx)(va, {
          picker: fm.picker,
          controller: Tm
        }), !fm.picker && (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: hm("skyblockGame:dungeons")
              }), (0, GA.jsx)("p", {
                children: hm("skyblockGame:dungeonsIntro")
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: Tm.dismiss
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, GA.jsx)("div", {
              className: "SkyblockDungeonList",
              children: fm.dungeons.map((mm => (0, GA.jsx)(ta, {
                dungeon: mm,
                select: Tm.select
              }, mm.id)))
            }), fm.detail && (0, GA.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, GA.jsx)("h3", {
                children: fm.detail.name
              }), (0, GA.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: fm.detail.difficulties.map((mm => (0, GA.jsxs)("li", {
                  className: JA()("SkyblockDungeonRecord", {
                    Beaten: mm.beaten
                  }),
                  children: [(0, GA.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Ba(mm.colour),
                    children: [mm.beaten && (0, GA.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), mm.label]
                  }), (0, GA.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: mm.summary
                  })]
                }, mm.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function da(mm) {
      let {
        collection: Tm,
        select: fm
      } = mm;
      return (0, GA.jsxs)(MA.e, {
        className: JA()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Tm.selected,
          Locked: Tm.locked
        }),
        ariaPressed: Tm.selected,
        onClick: () => {
          fm(Tm.id)
        },
        children: [(0, GA.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, GA.jsx)(kA.d, {
            itemName: Tm.icon,
            amount: 0
          })
        }), (0, GA.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, GA.jsx)("strong", {
              children: Tm.name
            }), (0, GA.jsx)("span", {
              children: Tm.tier
            })]
          }), (0, GA.jsx)(LA, {
            percent: Tm.percent,
            label: `${Tm.name}: ${Tm.progress}`
          }), (0, GA.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Tm.progress
          })]
        })]
      })
    }

    function ga(mm) {
      let {
        collection: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)();
      return (0, GA.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, GA.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, GA.jsx)(kA.d, {
            itemName: Tm.icon,
            amount: 0
          })
        }), (0, GA.jsx)("h3", {
          children: Tm.name
        }), (0, GA.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Tm.tier
        }), (0, GA.jsx)("p", {
          children: Tm.locked ? fm("skyblockGame:collectionLocked") : Tm.count
        }), null !== Tm.nextReward && (0, GA.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, GA.jsx)("strong", {
            children: fm("skyblockGame:collectionNextReward")
          }), (0, GA.jsx)("span", {
            children: Tm.nextReward
          })]
        }), (0, GA.jsx)(LA, {
          percent: Tm.percent,
          label: Tm.progress
        }), (0, GA.jsx)("p", {
          children: Tm.progress
        })]
      })
    }

    function Wa(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Cf, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA();
      return fm.enabled ? (0, GA.jsx)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: hm("skyblockGame:collections")
              }), (0, GA.jsxs)("p", {
                children: [hm("skyblockGame:collectionsIntro"), " ", fm.tiersUnlocked]
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: Tm.dismiss
            })]
          }), (0, GA.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: fm.categories.map((mm => (0, GA.jsxs)(MA.e, {
              className: JA()("SkyblockCollectionCategory", {
                Selected: mm.selected
              }),
              ariaPressed: mm.selected,
              padTabSelected: mm.selected,
              onClick: () => {
                Tm.selectCategory(mm.id)
              },
              children: [(0, GA.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, GA.jsx)(kA.d, {
                  itemName: mm.icon,
                  amount: 0
                })
              }), (0, GA.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, GA.jsx)("strong", {
                  children: mm.label
                }), (0, GA.jsx)("span", {
                  children: mm.tiers
                })]
              })]
            }, mm.id)))
          }), (0, GA.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, GA.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: fm.collections.map((mm => (0, GA.jsx)(da, {
                collection: mm,
                select: Tm.select
              }, mm.id)))
            }), fm.detail && (0, GA.jsx)(ga, {
              collection: fm.detail
            })]
          })]
        })
      }) : null
    }
    const Fa = ["completed", "active", "available", "locked"],
      mx = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Tx(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(gf, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA();
      return fm.enabled ? (0, GA.jsx)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: hm("skyblockDevQuests:title")
              }), (0, GA.jsx)("p", {
                children: hm("skyblockDevQuests:intro")
              })]
            }), (0, GA.jsx)(MA.j, {
              onClick: Tm.dismiss
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Fa.map((mm => (0, GA.jsx)("span", {
              className: JA()("SkyblockQuestGraphLegendState", mm),
              children: hm(`skyblockDevQuests:state_${mm}`)
            }, mm))), mx.map((mm => (0, GA.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, GA.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, GA.jsx)("line", {
                  className: JA()("SkyblockQuestGraphEdge", mm),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), hm(`skyblockDevQuests:edge_${mm}`)]
            }, mm)))]
          }), (0, GA.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, GA.jsxs)("div", {
              className: JA()("SkyblockQuestGraphCanvas", {
                Planning: fm.planning
              }),
              style: {
                width: fm.width,
                height: fm.height
              },
              children: [(0, GA.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: fm.width,
                height: fm.height,
                "aria-hidden": "true",
                children: [(0, GA.jsx)("defs", {
                  children: (0, GA.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, GA.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), fm.edges.map((mm => (0, GA.jsx)("path", {
                  className: JA()("SkyblockQuestGraphEdge", mm.kind, {
                    InPlan: mm.inPlan
                  }),
                  d: mm.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, mm.key)))]
              }), fm.nodes.map((mm => (0, GA.jsxs)("button", {
                type: "button",
                className: JA()("SkyblockQuestGraphNode", mm.state, {
                  InPlan: mm.inPlan,
                  Hovered: mm.hovered
                }),
                style: {
                  left: mm.left,
                  top: mm.top,
                  width: 190,
                  height: 52
                },
                title: mm.id,
                onMouseEnter: () => {
                  Tm.hover(mm.id)
                },
                onMouseLeave: () => {
                  Tm.hover(null)
                },
                onFocus: () => {
                  Tm.hover(mm.id)
                },
                onBlur: () => {
                  Tm.hover(null)
                },
                onClick: () => {
                  Tm.jump(mm.id)
                },
                children: [(0, GA.jsx)("strong", {
                  children: mm.name
                }), (0, GA.jsx)("span", {
                  children: mm.detail
                })]
              }, mm.id)))]
            })
          })]
        })
      }) : null
    }
    const fx = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      hx = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Rh}ms`,
        "--forge-duration": "2150ms"
      },
      Ax = Array.from({
        length: 18
      }, ((mm, Tm) => ({
        "--ember-left": `${(4+92*(.618034*Tm%1)).toFixed(1)}%`,
        "--ember-size": 3 + Tm % 3 * 2 + "px",
        "--ember-drift": 14 * (Tm % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Tm%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Tm%8).toFixed(2)}s`
      })));

    function ax(mm) {
      if (mm.style.removeProperty("--part-size"), null === mm.parentElement || "wrap" === getComputedStyle(mm.parentElement).flexWrap) return;
      const Tm = [...mm.children],
        fm = getComputedStyle(mm),
        hm = parseFloat(fm.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Am = (mm.clientHeight - parseFloat(fm.rowGap) * (Tm.length - 1)) / Tm.length,
        am = Tm.map((mm => {
          const Tm = getComputedStyle(mm),
            fm = mm.querySelector("h3"),
            am = mm.querySelector(".SkyblockForgeParts");
          if (null === fm || null === am) return hm;
          const xm = Am - parseFloat(Tm.paddingTop) - parseFloat(Tm.paddingBottom) - fm.offsetHeight - parseFloat(getComputedStyle(fm).marginBottom),
            wm = parseFloat(getComputedStyle(am).columnGap),
            Dm = am.children.length;
          let im = 0;
          for (let hm = 1; hm <= Dm; hm++) {
            const mm = Math.ceil(Dm / hm);
            im = Math.max(im, Math.min((am.clientWidth - wm * (hm - 1)) / hm, (xm - wm * (mm - 1)) / mm))
          }
          return im
        }));
      mm.style.setProperty("--part-size", `${Math.floor(Math.max(hm,Math.min(...am)))}px`)
    }

    function xx(mm) {
      var Tm, fm, hm, am, xm;
      let {
        controller: wm
      } = mm;
      const Dm = (0, NA.i)(jh, wm.getSnapshot()),
        {
          t: im
        } = (0, eA.A)(),
        Rm = BA(),
        pm = function() {
          const mm = (0, zm.useRef)(null),
            Tm = (0, zm.useRef)(null);
          return (0, zm.useLayoutEffect)((() => {
            null !== mm.current && ax(mm.current)
          })), (0, zm.useCallback)((fm => {
            var hm;
            null === (hm = Tm.current) || void 0 === hm || hm.disconnect(), Tm.current = null, mm.current = fm, null !== fm && (Tm.current = new ResizeObserver((() => {
              ax(fm)
            })), Tm.current.observe(fm))
          }), [])
        }(),
        Em = function(mm) {
          const Tm = (0, zm.useRef)(null);
          return (0, zm.useLayoutEffect)((() => {
            const mm = Tm.current;
            if (null !== mm) {
              mm.style.removeProperty("font-size");
              for (let Tm = 1.7; Tm > 1.1 && mm.scrollWidth > mm.clientWidth; Tm -= .1) mm.style.fontSize = Tm - .1 + "rem"
            }
          }), [mm]), (0, zm.useCallback)((mm => {
            Tm.current = mm
          }), [])
        }(null === (Tm = Dm.preview) || void 0 === Tm ? void 0 : Tm.name),
        om = (0, zm.useRef)(null),
        Om = (0, zm.useRef)({}),
        Ym = Dm.forging,
        qm = null !== (fm = null === Ym || void 0 === Ym ? void 0 : Ym.preview.tier) && void 0 !== fm ? fm : 0,
        jm = null !== (hm = null === Ym || void 0 === Ym ? void 0 : Ym.preview.named) && void 0 !== hm && hm,
        Vm = (0, zm.useMemo)((() => {
          return null === Ym ? null : {
            flames: (mm = qm, Tm = jm, Array.from({
              length: 26 + 6 * mm + (Tm ? 20 : 0)
            }, ((mm, Tm) => {
              const fm = Tm < 6,
                hm = Math.random() * Math.PI * 2,
                Am = fm ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                am = Math.cos(hm) * Am,
                xm = Math.sin(hm) * Am - 2 - 3 * Math.random(),
                wm = Math.random(),
                [Dm, im, Rm] = fm ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : wm < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : wm < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [wm < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Dm,
                "--x0": `${(.15*am).toFixed(2)}rem`,
                "--y0": `${(.15*xm).toFixed(2)}rem`,
                "--x": `${am.toFixed(2)}rem`,
                "--y": `${xm.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${im.toFixed(2)}rem`,
                "--duration": `${Math.round(Rm)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: oh(qm, jm)
          };
          var mm, Tm
        }), [null === Ym || void 0 === Ym ? void 0 : Ym.id]);
      if (!Dm.enabled) return null;
      const Im = Dm.preview,
        Km = Dm.arriving,
        Qm = null !== Km && !Km.sameSword,
        nm = null !== Im && (0, GA.jsx)(kA.d, {
          itemName: Im.baseSword,
          amount: 0,
          enchantmentTier: Im.enchantmentTier
        });
      return (0, GA.jsx)(lA.d, {
        show: Dm.open,
        close: wm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Rm,
          onKeyDown: uA,
          children: [(0, GA.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Ax.map(((mm, Tm) => (0, GA.jsx)("span", {
              style: mm
            }, Tm)))
          }), (0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: im("skyblockGame:forgeTitle")
              }), (0, GA.jsx)("p", {
                children: im("skyblockGame:forgeIntro")
              })]
            }), (0, GA.jsx)(MA.j, {
              onClick: wm.dismiss
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, GA.jsx)("div", {
              ref: pm,
              className: JA()("SkyblockForgeSlots", {
                Locked: null !== Ym
              }),
              children: Dm.slots.map((mm => (0, GA.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, GA.jsx)("h3", {
                  children: mm.label
                }), (0, GA.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: mm.parts.map((Tm => (0, GA.jsx)("button", {
                    type: "button",
                    className: JA()("SkyblockForgePart", {
                      Selected: Tm.selected,
                      Missing: Tm.placeholder
                    }),
                    disabled: Tm.placeholder,
                    title: Tm.placeholder ? im("skyblockGame:forgePickParts") : Tm.itemName,
                    "aria-pressed": Tm.selected,
                    onClick: () => {
                      wm.select(mm.kind, Tm.material)
                    },
                    children: (0, GA.jsx)(kA.d, {
                      itemName: Tm.itemName,
                      amount: Tm.owned
                    })
                  }, Tm.material)))
                })]
              }, mm.kind)))
            }), (0, GA.jsxs)("div", {
              className: JA()("SkyblockForgeAnvil", {
                Named: null === Im || void 0 === Im ? void 0 : Im.named
              }),
              style: {
                "--tier": null === Im ? "transparent" : Am.kb[Im.enchantmentTier]
              },
              children: [(0, GA.jsxs)("div", {
                className: JA()("SkyblockForgeAltar", {
                  Forging: null !== Ym
                }),
                style: null === Ym ? void 0 : hx,
                children: [(0, GA.jsxs)("div", {
                  className: JA()("SkyblockForgeMount", {
                    Arrive: null !== Km
                  }),
                  children: [null === Im && (0, GA.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, GA.jsx)(kA.d, {
                      itemName: Dm.unformedSword,
                      amount: 0
                    })
                  }), null !== Im && (0, GA.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Im && null === Ym && (0, GA.jsx)("div", {
                    ref: om,
                    className: "SkyblockForgeFloat",
                    children: (0, GA.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: nm
                    })
                  }), null !== Im && (0, GA.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Eh.map(((mm, Tm) => (0, GA.jsx)("span", {
                      className: JA()({
                        Rune: "" !== mm.rune
                      }),
                      style: mm.style,
                      children: mm.rune
                    }, Tm)))
                  }), null !== Ym && null !== Vm && (0, GA.jsxs)(GA.Fragment, {
                    children: [(0, GA.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, GA.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Vm.flames.map(((mm, Tm) => (0, GA.jsx)("span", {
                        style: mm
                      }, Tm)))
                    }), (0, GA.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Om.current,
                      children: (0, GA.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: nm
                      })
                    }), (0, GA.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, GA.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (qm >= 4 || jm) && (0, GA.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, GA.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Vm.sparks.map(((mm, Tm) => (0, GA.jsx)("span", {
                        style: mm
                      }, Tm)))
                    }), (0, GA.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, GA.jsx)("p", {
                  className: JA()("SkyblockForgeStatus", null === (am = Dm.status) || void 0 === am ? void 0 : am.tone),
                  children: null === (xm = Dm.status) || void 0 === xm ? void 0 : xm.text
                })]
              }), null === Im && (0, GA.jsx)("p", {
                className: JA()("SkyblockForgeName Waiting", {
                  ArriveText: Qm
                }),
                children: im(Dm.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Im && (0, GA.jsx)("h3", {
                ref: Em,
                className: JA()("SkyblockForgeName", {
                  ArriveText: Qm
                }),
                title: Im.name,
                children: Im.name
              }), (null === Im || void 0 === Im ? void 0 : Im.named) && (0, GA.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: im("skyblockGame:forgeSecret")
              }), (0, GA.jsxs)(MA.q, {
                className: "SkyblockForgeButton",
                disabled: !Dm.canForge,
                title: null === Im ? void 0 : im("skyblockGame:forgeCoalOwned", {
                  owned: String(Dm.coalOwned)
                }),
                onClick: () => {
                  Om.current = function(mm) {
                    const Tm = null === mm ? "none" : getComputedStyle(mm).transform,
                      fm = new DOMMatrixReadOnly("none" === Tm ? void 0 : Tm);
                    return {
                      "--settle-y": `${fm.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(fm.b,fm.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(om.current), qh(), wm.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [im("skyblockGame:forgeButton"), null !== Im && (0, GA.jsxs)("span", {
                  className: JA()("SkyblockForgeCost", {
                    Short: Im.coalShort
                  }),
                  children: [(0, GA.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, GA.jsx)(kA.d, {
                      itemName: fh.d,
                      amount: 0
                    })
                  }), Im.coalCost]
                })]
              })]
            }), (0, GA.jsxs)("div", {
              className: JA()("SkyblockForgeDetails", {
                Named: null === Im || void 0 === Im ? void 0 : Im.named
              }),
              children: [(0, GA.jsx)("p", {
                className: JA()("SkyblockForgeLore", {
                  ArriveText: Qm
                }),
                title: null === Im || void 0 === Im ? void 0 : Im.lore,
                children: null === Im || void 0 === Im ? void 0 : Im.lore
              }), (0, GA.jsxs)("dl", {
                className: JA()("SkyblockForgeStats", {
                  ArriveText: Qm
                }),
                children: [null === Im && fx.map((mm => (0, GA.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, GA.jsx)("dt", {
                    children: im(mm)
                  }), (0, GA.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, mm))), null === Im || void 0 === Im ? void 0 : Im.stats.map((mm => (0, GA.jsxs)("div", {
                  className: JA()("SkyblockForgeStat", {
                    Better: mm.better
                  }),
                  children: [(0, GA.jsx)("dt", {
                    children: mm.label
                  }), (0, GA.jsx)("dd", {
                    children: mm.value
                  })]
                }, mm.label)))]
              }), (0, GA.jsx)("ul", {
                className: JA()("SkyblockForgeEffects", {
                  ArriveText: Qm
                }),
                children: null === Im || void 0 === Im ? void 0 : Im.effects.map((mm => (0, GA.jsx)("li", {
                  children: mm
                }, mm)))
              })]
            })]
          })]
        })
      })
    }
    const wx = "Doom Rivet",
      Dx = "Doom Crest";

    function ix(mm) {
      let {
        itemName: Tm,
        amount: fm,
        owned: hm
      } = mm;
      return (0, GA.jsxs)("span", {
        className: JA()("SkyblockSmugglerPrice", {
          Short: fm > hm
        }),
        children: [(0, GA.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, GA.jsx)(kA.d, {
            itemName: Tm,
            amount: 0
          })
        }), (0, GA.jsx)("span", {
          children: fm
        })]
      })
    }

    function Rx(mm) {
      return mm.justBought ? "skyblockGame:smugglerJustBought" : mm.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function px(mm) {
      let {
        deal: Tm,
        view: fm,
        buy: hm
      } = mm;
      const {
        t: Am
      } = (0, eA.A)();
      return (0, GA.jsxs)("div", {
        className: JA()("SkyblockSmugglerPocket", {
          Bought: Tm.justBought,
          Unaffordable: !Tm.affordable,
          SoldOut: Tm.soldOut && !Tm.justBought
        }),
        children: [(0, GA.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, GA.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, GA.jsx)(kA.d, {
            itemName: Tm.itemName,
            amount: 0,
            enchantmentTier: Tm.enchantmentTier
          }), Tm.amount > 1 && (0, GA.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Am("skyblockGame:smugglerAmount", {
              amount: Tm.amount
            })
          })]
        }), (0, GA.jsx)("h3", {
          children: Tm.displayName
        }), (0, GA.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Tm.rivets > 0 && (0, GA.jsx)(ix, {
              itemName: wx,
              amount: Tm.rivets,
              owned: fm.rivetsOwned
            }), Tm.crests > 0 && (0, GA.jsx)(ix, {
              itemName: Dx,
              amount: Tm.crests,
              owned: fm.crestsOwned
            })]
          }), (0, GA.jsx)(MA.e, {
            className: "SkyblockSmugglerBuy",
            disabled: Tm.soldOut || !Tm.affordable || fm.pending,
            onClick: () => {
              hm(Tm.slot)
            },
            children: Am(Rx(Tm))
          })]
        })]
      }, Tm.justBought ? fm.boughtCount : 0)
    }

    function Ex(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Kh, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA();
      return fm.enabled ? (0, GA.jsx)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, GA.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, GA.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: hm("skyblockGame:smugglerTitle")
              }), (0, GA.jsx)("p", {
                children: hm("skyblockGame:smugglerIntro")
              })]
            }), (0, GA.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, GA.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, GA.jsx)(ix, {
                  itemName: wx,
                  amount: fm.rivetsOwned,
                  owned: fm.rivetsOwned
                }), (0, GA.jsx)(ix, {
                  itemName: Dx,
                  amount: fm.crestsOwned,
                  owned: fm.crestsOwned
                })]
              }), (0, GA.jsx)(MA.j, {
                onClick: Tm.dismiss
              })]
            })]
          }), (0, GA.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: fm.deals.map((mm => (0, GA.jsx)(px, {
              deal: mm,
              view: fm,
              buy: Tm.buy
            }, mm.slot)))
          }), (0, GA.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, GA.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: fm.rotatesText
            }), null !== fm.status && (0, GA.jsx)("span", {
              className: JA()("SkyblockSmugglerStatus", fm.status.tone),
              children: fm.status.text
            })]
          })]
        })
      }) : null
    }

    function ox(mm) {
      let {
        phase: Tm,
        className: fm
      } = mm;
      return (0, GA.jsx)("span", {
        className: JA()("SkyblockMoon", `Moon-${Tm}`, fm),
        "aria-hidden": "true"
      })
    }

    function Ox(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Jh, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)();
      return fm.enabled ? (0, GA.jsx)(zA.e, {
        placement: "statBars",
        children: (0, GA.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: JA()("SkyblockPassageChip", fm.open && "Open"),
          "aria-label": hm("skyblockGame:passageChipLabel", {
            phase: fm.phaseName
          }),
          title: hm("skyblockGame:passageChipLabel", {
            phase: fm.phaseName
          }),
          onMouseDown: mm => {
            mm.preventDefault()
          },
          onClick: Tm.toggle,
          children: (0, GA.jsx)(ox, {
            phase: fm.phase
          }, fm.phase)
        })
      }) : null
    }

    function Yx(mm) {
      let {
        fish: Tm
      } = mm;
      return (0, GA.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, GA.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, GA.jsx)(kA.d, {
            itemName: Tm.itemName,
            amount: 0
          })
        }), (0, GA.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Tm.displayName
          }), (0, GA.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Tm.where
          })]
        })]
      })
    }

    function qx(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Jh, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA();
      return fm.enabled ? (0, GA.jsx)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, GA.jsx)(ox, {
              phase: fm.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: hm("skyblockGame:passageTitle")
              }), (0, GA.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: fm.phaseName
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: Tm.dismiss
            })]
          }), (0, GA.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: hm("skyblockGame:passageIntro")
          }), (0, GA.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, GA.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, GA.jsx)("h3", {
                children: hm("skyblockGame:passageVisiting")
              }), (0, GA.jsx)("ul", {
                className: "SkyblockPassageList",
                children: fm.visitors.map((mm => (0, GA.jsx)(Yx, {
                  fish: mm
                }, mm.itemName)))
              })]
            }), (0, GA.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== fm.resting && (0, GA.jsxs)(GA.Fragment, {
                children: [(0, GA.jsx)("h3", {
                  children: hm("skyblockGame:passageResting")
                }), (0, GA.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, GA.jsx)(Yx, {
                    fish: fm.resting
                  })
                })]
              }), (0, GA.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, GA.jsx)(ox, {
                  phase: fm.nextPhase
                }), (0, GA.jsx)("span", {
                  children: fm.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function jx() {
      return (0, GA.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((mm => (0, GA.jsx)("i", {
          style: {
            "--sparkle-index": mm
          }
        }, mm)))
      })
    }

    function Vx(mm) {
      var Tm;
      let {
        charm: fm,
        view: hm,
        controller: Am
      } = mm;
      const {
        t: am
      } = (0, eA.A)(), xm = hm.shop, wm = (null === (Tm = hm.sparkle) || void 0 === Tm ? void 0 : Tm.id) === fm.id;
      return (0, GA.jsxs)("li", {
        className: JA()("SkyblockLampLightCharm", fm.owned && "Owned", fm.socketed && "Socketed"),
        children: [wm && (0, GA.jsx)(jx, {}, hm.sparkle.count), (0, GA.jsx)("h4", {
          children: fm.name
        }), (0, GA.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: fm.effect
        }), (0, GA.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: fm.lines.map((mm => (0, GA.jsxs)("li", {
            className: JA()("SkyblockLampLightOddsLine", "better" === mm.tone ? "Better" : "worse" === mm.tone ? "Worse" : "Same"),
            children: [(0, GA.jsx)("span", {
              className: "Before",
              children: mm.before
            }), (0, GA.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, GA.jsx)("span", {
              className: "After",
              children: mm.after
            })]
          }, mm.label)))
        }), (0, GA.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: fm.owned ? fm.socketed ? (0, GA.jsxs)(GA.Fragment, {
            children: [(0, GA.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: am("skyblockGame:lampLightSocketed")
            }), (0, GA.jsx)(MA.V, {
              disabled: !hm.canCommand,
              ariaLabel: am("skyblockGame:lampLightRemoveLabel", {
                charm: fm.name
              }),
              onClick: () => {
                Am.socket(null)
              },
              children: am("skyblockGame:lampLightRemove")
            })]
          }) : (0, GA.jsx)(MA.e, {
            disabled: !hm.canCommand || !xm.heldRod,
            ariaLabel: am("skyblockGame:lampLightSocketLabel", {
              charm: fm.name
            }),
            onClick: () => {
              Am.socket(fm.id)
            },
            children: am("skyblockGame:lampLightSocket")
          }) : (0, GA.jsx)(MA.e, {
            disabled: !hm.canCommand || !fm.affordable,
            ariaLabel: am("skyblockGame:lampLightBuyLabel", {
              item: fm.name,
              cost: fm.cost
            }),
            onClick: () => {
              Am.buy(fm.id)
            },
            children: fm.cost
          })
        })]
      })
    }

    function Ix(mm) {
      var Tm;
      let {
        tint: fm,
        view: hm,
        controller: Am
      } = mm;
      const {
        t: am
      } = (0, eA.A)();
      return (0, GA.jsxs)("li", {
        className: JA()("SkyblockLampLightTint", fm.wearing && "Wearing"),
        style: {
          "--tint-colour": fm.colour
        },
        children: [(null === (Tm = hm.sparkle) || void 0 === Tm ? void 0 : Tm.id) === fm.id && (0, GA.jsx)(jx, {}, hm.sparkle.count), (0, GA.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, GA.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: fm.name
        }), fm.wearing ? (0, GA.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: am("skyblockGame:lampLightWearing")
        }) : (0, GA.jsx)(MA.e, {
          disabled: !hm.canCommand || !fm.owned && !fm.affordable,
          ariaLabel: fm.owned ? am("skyblockGame:lampLightWearLabel", {
            tint: fm.name
          }) : am("skyblockGame:lampLightBuyLabel", {
            item: fm.name,
            cost: fm.cost
          }),
          onClick: () => {
            fm.owned ? Am.wearTint(fm.id) : Am.buy(fm.id)
          },
          children: fm.owned ? am("skyblockGame:lampLightWear") : fm.cost
        })]
      })
    }

    function Kx(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Ch, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = fm.shop;
      return (0, GA.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, GA.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: fm.balance
          }), (0, GA.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": fm.releasing,
            className: JA()("SkyblockLampLightSwitch", fm.releasing && "On"),
            disabled: fm.releasing ? "ready" !== fm.status : !fm.canCommand,
            onClick: () => {
              Tm.setRelease(!fm.releasing)
            },
            children: [(0, GA.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, GA.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), hm("skyblockGame:lampLightRelease")]
          }), (0, GA.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: hm("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== fm.notice && (0, GA.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: fm.notice
        }), null !== Am && (0, GA.jsxs)(GA.Fragment, {
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, GA.jsx)("h3", {
              children: hm("skyblockGame:lampLightCharms")
            }), (0, GA.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Am.oddsFor
            }), (0, GA.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((mm => (0, GA.jsx)("button", {
                type: "button",
                "aria-pressed": fm.situation === mm,
                className: JA()("SkyblockLampLightSituation", fm.situation === mm && "Selected"),
                onClick: () => {
                  Tm.setSituation(mm)
                },
                children: hm("open" === mm ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, mm)))
            })]
          }), !Am.heldRod && (0, GA.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: hm("skyblockGame:lampLightHoldRod")
          }), (0, GA.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Am.charms.map((mm => (0, GA.jsx)(Vx, {
              charm: mm,
              view: fm,
              controller: Tm
            }, mm.id)))
          }), (0, GA.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, GA.jsx)("h3", {
              children: hm("skyblockGame:lampLightTints")
            })
          }), (0, GA.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, GA.jsxs)("li", {
              className: JA()("SkyblockLampLightTint", "Islands", Am.wearingIslandColours && "Wearing"),
              children: [(0, GA.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, GA.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: hm("skyblockGame:lampLightIslandColours")
              }), Am.wearingIslandColours ? (0, GA.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: hm("skyblockGame:lampLightWearing")
              }) : (0, GA.jsx)(MA.e, {
                disabled: !fm.canCommand,
                ariaLabel: hm("skyblockGame:lampLightWearLabel", {
                  tint: hm("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Tm.wearTint(null)
                },
                children: hm("skyblockGame:lampLightWear")
              })]
            }), Am.tints.map((mm => (0, GA.jsx)(Ix, {
              tint: mm,
              view: fm,
              controller: Tm
            }, mm.id)))]
          })]
        })]
      })
    }

    function Qx(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Ch, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)();
      return fm.releasing ? (0, GA.jsx)(zA.e, {
        children: (0, GA.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Tm.setRelease(!1)
          },
          children: [(0, GA.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, GA.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [hm("skyblockGame:lampLightReleasing"), " \xb7 ", fm.balance]
          }), (0, GA.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: hm("skyblockGame:lampLightKeepCatches")
          }), null !== fm.gained && (0, GA.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: fm.gained.text
          }, fm.gained.count)]
        })
      }) : null
    }

    function nx(mm) {
      let {
        island: Tm,
        view: fm,
        aim: hm
      } = mm;
      const {
        t: Am
      } = (0, eA.A)(), am = Tm.featuredFish;
      return (0, GA.jsxs)("li", {
        className: JA()("SkyblockKeepersChairIsland", `Island-${Tm.id}`, Tm.favoured && "Aimed", !Tm.relit && "Dark"),
        children: [(0, GA.jsx)("h3", {
          children: Tm.name
        }), Tm.relit && null !== am ? (0, GA.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Am("skyblockGame:keepersChairTideNotice")
          }), (0, GA.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, GA.jsx)(kA.d, {
              itemName: am.itemName,
              amount: 0
            })
          }), (0, GA.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: am.displayName
          })]
        }) : (0, GA.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, GA.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Am("skyblockGame:keepersChairDark")
          })
        }), Tm.relit && (Tm.favoured ? (0, GA.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Am("skyblockGame:keepersChairAimed")
        }) : (0, GA.jsx)(MA.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !fm.canAim,
          ariaLabel: Am("skyblockGame:keepersChairAimLabel", {
            island: Tm.name
          }),
          onClick: () => {
            hm(Tm.id)
          },
          children: Am("skyblockGame:keepersChairAim")
        }))]
      }, Tm.favoured ? fm.aimedCount : 0)
    }

    function Jx(mm) {
      let {
        controller: Tm,
        lampLight: fm
      } = mm;
      const hm = (0, NA.i)(Sh, Tm.getSnapshot()),
        Am = (0, NA.i)(Ch, fm.getSnapshot()),
        [am, xm] = (0, zm.useState)("lamp"),
        {
          t: wm
        } = (0, eA.A)(),
        Dm = BA();
      if (!hm.enabled) return null;
      const im = "light" === am && Am.enabled;
      return (0, GA.jsx)(lA.d, {
        show: hm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: JA()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", im && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Dm,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: wm("skyblockGame:keepersChairTitle")
              }), (0, GA.jsx)("p", {
                children: wm(im ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              ariaLabel: wm("skyblockGame:keepersChairClose"),
              onClick: Tm.dismiss
            })]
          }), Am.enabled && (0, GA.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((mm => (0, GA.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === mm === im,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === mm === im ? "true" : void 0,
              className: JA()("SkyblockKeepersChairTab", "light" === mm === im && "Selected"),
              onClick: () => {
                xm(mm)
              },
              children: [wm("lamp" === mm ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === mm && (0, GA.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Am.balance
              })]
            }, mm)))
          }), im ? (0, GA.jsx)(Kx, {
            controller: fm
          }) : (0, GA.jsx)(cx, {
            view: hm,
            controller: Tm
          })]
        })
      })
    }

    function cx(mm) {
      let {
        view: Tm,
        controller: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)();
      return (0, GA.jsxs)(GA.Fragment, {
        children: [(0, GA.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Tm.islands.map((mm => (0, GA.jsx)(nx, {
            island: mm,
            view: Tm,
            aim: fm.aim
          }, mm.id)))
        }), null !== Tm.almanac && (0, GA.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: hm("skyblockGame:passageTitle")
          }), (0, GA.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, GA.jsx)(ox, {
              phase: Tm.almanac.phase
            }), Tm.almanac.phaseName]
          }), (0, GA.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, GA.jsx)(ox, {
              phase: Tm.almanac.nextPhase
            }), Tm.almanac.next]
          })]
        }), (0, GA.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: hm("skyblockGame:keepersChairFavour")
          }), Tm.aimed && (0, GA.jsx)(MA.V, {
            className: "SkyblockKeepersChairRest",
            disabled: !Tm.canAim,
            onClick: () => {
              fm.aim(null)
            },
            children: hm("skyblockGame:keepersChairRest")
          })]
        }), null !== Tm.status && (0, GA.jsx)("p", {
          className: JA()("SkyblockKeepersChairStatus", "refused" === Tm.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Tm.status.text
        })]
      })
    }

    function zx(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, NA.i)(Nh, Tm.getSnapshot());
      if (!hm.enabled) return null;
      const Am = hm.freshCount > 0 ? fm("skyblockGame:reachLogOpenNews", {
        count: hm.freshCount
      }) : fm("skyblockGame:reachLogOpen");
      return (0, GA.jsx)(zA.e, {
        placement: "statBars",
        children: (0, GA.jsxs)("button", {
          type: "button",
          className: JA()("SkyblockReachLogButton", hm.freshCount > 0 && "HasNews", hm.pending && "Pending"),
          "aria-label": Am,
          title: Am,
          onClick: Tm.ask,
          children: [hm.news && (0, GA.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${hm.newsToken}`), (0, GA.jsx)("span", {
            className: JA()("SkyblockReachLogIcon", hm.news && "Jump"),
            "aria-hidden": "true",
            children: (0, GA.jsx)(kA.d, {
              itemName: Xh,
              amount: 0
            })
          }, `icon:${hm.newsToken}`), hm.freshCount > 0 && (0, GA.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: hm.freshCount
          })]
        })
      })
    }

    function Zx(mm) {
      let {
        gift: Tm
      } = mm;
      return (0, GA.jsx)("li", {
        className: JA()("SkyblockRegularsGift", Tm.given && "Given"),
        children: Tm.text
      })
    }

    function kx(mm) {
      let {
        regular: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)();
      return (0, GA.jsxs)("li", {
        className: JA()("SkyblockRegularsCard", Tm.tagged ? "Tagged" : "Untagged", Tm.resting && "Resting"),
        children: [(0, GA.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Tm.fishName,
            children: (0, GA.jsx)(kA.d, {
              itemName: Tm.itemName,
              amount: 0
            })
          }), (0, GA.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, GA.jsx)("h3", {
              children: Tm.name
            }), (0, GA.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Tm.fishName
            })]
          })]
        }), (0, GA.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Tm.line
        }), (0, GA.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Tm.size
          }), Tm.tagged && (0, GA.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Tm.resting ? fm("skyblockGame:regularsResting") : Tm.meetings
          })]
        }), (0, GA.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Tm.chance
        }), (0, GA.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Tm.gifts.map((mm => (0, GA.jsx)(Zx, {
            gift: mm
          }, mm.text)))
        }), Tm.history.length > 0 && (0, GA.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Tm.history.map(((mm, Tm) => (0, GA.jsx)("li", {
            children: mm
          }, Tm)))
        })]
      })
    }

    function bx(mm) {
      let {
        controller: Tm,
        island: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)(), Am = (0, NA.i)(hA, Tm.getSnapshot()), am = Am.islands.find((mm => mm.id === fm));
      if (!Am.enabled || void 0 === am) return null;
      const xm = hm("skyblockGame:regularsOpen");
      return (0, GA.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": xm,
        title: xm,
        onClick: () => {
          Tm.openIsland(fm)
        },
        children: [(0, GA.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: hm("skyblockGame:regularsTitle")
        }), am.regulars.map((mm => (0, GA.jsx)("span", {
          className: JA()("SkyblockRegularsStripIcon", mm.tagged && "Tagged"),
          title: mm.name,
          children: (0, GA.jsx)(kA.d, {
            itemName: mm.itemName,
            amount: 0
          })
        }, mm.id)))]
      })
    }

    function Sx(mm) {
      var Tm;
      let {
        controller: fm
      } = mm;
      const hm = (0, NA.i)(hA, fm.getSnapshot()),
        {
          t: Am
        } = (0, eA.A)(),
        am = BA();
      if (!hm.enabled) return null;
      const xm = null !== (Tm = hm.islands.find((mm => mm.id === hm.selected))) && void 0 !== Tm ? Tm : null;
      return (0, GA.jsx)(lA.d, {
        show: hm.open,
        close: fm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Am("skyblockGame:regularsTitle")
              }), (0, GA.jsx)("p", {
                children: Am("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: fm.dismiss
            })]
          }), (0, GA.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: hm.islands.map((mm => {
              const Tm = mm.id === hm.selected;
              return (0, GA.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Tm,
                "data-pad-tab": !0,
                "data-pad-selected": Tm ? "true" : void 0,
                className: JA()("SkyblockReachLogTab", `Island-${mm.id}`, Tm && "Selected", mm.charm.given && "GoldPage"),
                onClick: () => {
                  fm.selectIsland(mm.id)
                },
                children: (0, GA.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: mm.name
                })
              }, mm.id)
            }))
          }), (0, GA.jsxs)("div", {
            className: JA()("SkyblockRegularsPage", null !== xm && `Island-${xm.id}`),
            role: "tabpanel",
            children: [(0, GA.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Am("skyblockGame:regularsHow")
            }), null !== xm && (0, GA.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: xm.regulars.map((mm => (0, GA.jsx)(kx, {
                regular: mm
              }, mm.id)))
            })]
          }), null !== xm && (0, GA.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, GA.jsx)("span", {
              className: JA()("SkyblockRegularsCharm", xm.charm.given && "Given"),
              children: xm.charm.text
            })
          })]
        })
      })
    }
    const ex = [{
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
      Nx = Array.from({
        length: 6
      }, ((mm, Tm) => ({
        "--x": `${(88*(.618034*Tm%1)).toFixed(1)}%`,
        "--y": `${(10+37*Tm%70).toFixed(1)}%`,
        "--size": 7 + Tm % 3 * 3 + "rem",
        "--drift-x": 3 * (Tm % 3 - 1) + "rem",
        "--drift-y": 2 * (Tm % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Tm % 4 * 3 + "s",
        "--delay": 2.5 * -Tm + "s"
      }))),
      Gx = Array.from({
        length: 14
      }, ((mm, Tm) => ({
        "--left": `${(3+94*((.618034*Tm+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Tm % 4 * 2 + "px",
        "--sway": Tm % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Tm%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Tm%12).toFixed(2)}s`
      }))),
      Xx = (0, zm.memo)((function(mm) {
        let {
          island: Tm
        } = mm;
        return (0, GA.jsxs)("div", {
          className: JA()("SkyblockReachLogDepths", null !== Tm && `Island-${Tm}`),
          "aria-hidden": "true",
          children: [ex.map(((mm, Tm) => (0, GA.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: mm
          }, `shaft${Tm}`))), Nx.map(((mm, Tm) => (0, GA.jsx)("span", {
            className: JA()("SkyblockReachLogMote", Tm % 2 === 1 && "Violet"),
            style: mm
          }, `mote${Tm}`))), Gx.map(((mm, Tm) => (0, GA.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: mm
          }, `bubble${Tm}`)))]
        })
      })),
      Px = 100;

    function Hx(mm) {
      let {
        view: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)();
      if (null === Tm || 0 === Tm.total) return null;
      const hm = Px * Tm.aspect,
        Am = fm("skyblockGame:hiddenWatersCount", {
          found: Tm.found,
          total: Tm.total
        });
      return (0, GA.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${fm("skyblockGame:hiddenWatersTitle")}: ${Am}`,
        children: [(0, GA.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${hm}`,
          "aria-hidden": "true",
          children: [Tm.islands.map(((mm, Tm) => (0, GA.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (mm.left + mm.width / 2) * Px,
            cy: (mm.top + mm.height / 2) * hm,
            rx: mm.width / 2 * Px,
            ry: mm.height / 2 * hm
          }, Tm))), Tm.pins.map(((mm, Tm) => (0, GA.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: mm.left * Px,
            cy: mm.top * hm,
            r: 13
          }, Tm)))]
        }), (0, GA.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, GA.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: fm("skyblockGame:hiddenWatersTitle")
          }), (0, GA.jsx)("span", {
            className: Tm.found === Tm.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Am
          })]
        })]
      })
    }

    function yx(mm) {
      let {
        view: Tm,
        island: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)(), Am = null === Tm || void 0 === Tm ? void 0 : Tm.glimpses.get(fm);
      return void 0 === Am || 0 === Am.length ? null : (0, GA.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, GA.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: hm("skyblockGame:hiddenWatersGlimpsed")
        }), (0, GA.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Am.map((mm => (0, GA.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, GA.jsx)(kA.d, {
              itemName: mm,
              amount: 0
            })
          }, mm)))
        })]
      })
    }
    const Cx = ["Bronze", "Silver", "Gold"],
      rx = [{
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
      sx = rx.slice(0, 2);

    function lx(mm) {
      return mm ? rx : sx
    }

    function Mx(mm) {
      let {
        fish: Tm,
        letGoShown: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)();
      return (0, GA.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Cx.map(((mm, fm) => {
          const Am = fm < Tm.marks;
          return (0, GA.jsx)("span", {
            className: JA()("SkyblockReachLogPip", mm, Am && "Earned", Am && Tm.fresh && fm === Tm.marks - 1 && "Newest"),
            title: hm(Gh[fm])
          }, mm)
        })), (0, GA.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), lx(fm).map(((mm, fm) => (0, GA.jsx)("span", {
          className: JA()("SkyblockReachLogRibbon", mm.className, !0 === Tm.ribbons[fm] && "Earned"),
          title: hm(mm.titleKey)
        }, mm.className)))]
      })
    }

    function ux(mm) {
      let {
        letGoShown: Tm,
        haloShown: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)();
      return (0, GA.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, GA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hm("skyblockGame:reachLogMarks"),
          children: [(0, GA.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), hm("skyblockGame:reachLogLegendMarks")]
        }), lx(Tm).map((mm => (0, GA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hm(mm.titleKey),
          children: [(0, GA.jsx)("span", {
            className: JA()("SkyblockReachLogRibbon", mm.className, "Earned")
          }), hm(mm.legendKey)]
        }, mm.className))), (0, GA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hm("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, GA.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), hm("skyblockGame:reachLogLegendGlimmer")]
        }), fm && (0, GA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hm("skyblockGame:reachLogHaloTitle"),
          children: [(0, GA.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), hm("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Bx(mm) {
      let {
        returner: Tm
      } = mm;
      return (0, GA.jsxs)("div", {
        className: JA()("SkyblockReachLogReturner", Tm.back && "Back"),
        children: [(0, GA.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, GA.jsx)(kA.d, {
            itemName: Tm.itemName,
            amount: 0
          })
        }), (0, GA.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Tm.line
        })]
      })
    }

    function Lx(mm) {
      let {
        fish: Tm,
        letGoShown: fm
      } = mm;
      const {
        t: hm
      } = (0, eA.A)();
      return (0, GA.jsxs)("li", {
        className: JA()("SkyblockReachLogCard", Tm.caught ? "Caught" : "Unknown", Tm.marks >= 3 && "GoldCard", Tm.fresh && "Fresh", Tm.visitor && "Visitor"),
        children: [Tm.visitor && (0, GA.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: hm("skyblockGame:reachLogVisitor")
        }), Tm.fresh && Array.from({
          length: 4
        }, ((mm, Tm) => (0, GA.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Tm))), (0, GA.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Tm.halo && (0, GA.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: hm("skyblockGame:reachLogHaloTitle")
          }), (0, GA.jsx)(kA.d, {
            itemName: Tm.itemName,
            amount: 0
          }), Tm.glimmer && (0, GA.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: hm("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, GA.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Tm.name
        }), (0, GA.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Tm.chance
        }), (0, GA.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Tm.best
        }), (0, GA.jsx)(Mx, {
          fish: Tm,
          letGoShown: fm
        })]
      })
    }

    function vx(mm) {
      let {
        page: Tm,
        letGoShown: fm,
        hiddenWaters: hm
      } = mm;
      const {
        t: Am
      } = (0, eA.A)();
      return Tm.awake ? (0, GA.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Tm.fish.map((mm => (0, GA.jsx)(Lx, {
          fish: mm,
          letGoShown: fm
        }, mm.itemName)))
      }) : (0, GA.jsxs)(GA.Fragment, {
        children: [(0, GA.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Am("skyblockGame:reachLogAsleep")
        }), (0, GA.jsx)(yx, {
          view: hm,
          island: Tm.id
        })]
      })
    }

    function tx(mm) {
      var Tm, fm;
      let {
        controller: hm,
        regulars: Am,
        hiddenWaters: am
      } = mm;
      const xm = (0, NA.i)(Nh, hm.getSnapshot()),
        wm = function(mm) {
          return (0, NA.i)(DA, mm.getSnapshot())
        }(am),
        Dm = (0, NA.i)(hA, Am.getSnapshot()),
        {
          t: im
        } = (0, eA.A)(),
        Rm = BA();
      if (!xm.enabled) return null;
      const pm = null !== (Tm = xm.pages.find((mm => mm.id === xm.selected))) && void 0 !== Tm ? Tm : null;
      return (0, GA.jsx)(lA.d, {
        show: xm.open,
        close: hm.dismiss,
        togglePointerLock: !1,
        className: JA()("SkyblockSkillsOverlay", Dm.open && "SkyblockReachLogUnderLedger"),
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Rm,
          onKeyDown: uA,
          children: [(0, GA.jsx)(Xx, {
            island: null !== (fm = null === pm || void 0 === pm ? void 0 : pm.id) && void 0 !== fm ? fm : null
          }), (0, GA.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: im("skyblockGame:reachLogTitle")
              }), (0, GA.jsx)("p", {
                children: im("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, GA.jsx)(Hx, {
              view: wm
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: hm.dismiss
            })]
          }), (0, GA.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: xm.pages.map((mm => {
              const Tm = mm.id === xm.selected,
                fm = mm.fish.some((mm => mm.fresh));
              return (0, GA.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Tm,
                "data-pad-tab": !0,
                "data-pad-selected": Tm ? "true" : void 0,
                className: JA()("SkyblockReachLogTab", `Island-${mm.id}`, Tm && "Selected", !mm.awake && "Asleep", mm.gold && "GoldPage", fm && "HasNews"),
                onClick: () => {
                  hm.selectPage(mm.id)
                },
                children: [(0, GA.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: mm.name
                }), mm.awake && (0, GA.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: im("skyblockGame:reachLogCaughtCount", {
                    caught: mm.caught,
                    total: mm.total
                  })
                })]
              }, mm.id)
            }))
          }), (0, GA.jsxs)("div", {
            className: JA()("SkyblockReachLogPage", null !== pm && `Island-${pm.id}`),
            role: "tabpanel",
            children: [null !== pm && (0, GA.jsx)(vx, {
              page: pm,
              letGoShown: xm.letGoShown,
              hiddenWaters: wm
            }), !0 === (null === pm || void 0 === pm ? void 0 : pm.awake) && null !== pm.returner && (0, GA.jsx)(Bx, {
              returner: pm.returner
            }), !0 === (null === pm || void 0 === pm ? void 0 : pm.awake) && (0, GA.jsx)(bx, {
              controller: Am,
              island: pm.id
            })]
          }), (0, GA.jsx)("footer", {
            className: JA()("SkyblockReachLogFooter", null !== pm && `Island-${pm.id}`, !0 === (null === pm || void 0 === pm ? void 0 : pm.gold) && "GoldPage"),
            children: !0 === (null === pm || void 0 === pm ? void 0 : pm.gold) ? (0, GA.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: im("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, GA.jsxs)(GA.Fragment, {
              children: [(0, GA.jsx)(ux, {
                letGoShown: xm.letGoShown,
                haloShown: !0 === (null === pm || void 0 === pm ? void 0 : pm.fish.some((mm => mm.halo)))
              }), (0, GA.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: im("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Ux = fm(4773);

    function dx(mm) {
      let {
        conversation: Tm,
        completedLabel: fm
      } = mm;
      return (0, GA.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, GA.jsxs)("header", {
          children: [(0, GA.jsx)("h3", {
            children: Tm.questName
          }), Tm.completed && (0, GA.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: fm
          })]
        }), Tm.lines.map((mm => (0, GA.jsx)(Ux.d, {
          display: mm.display
        }, mm.key)))]
      })
    }

    function gx(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, NA.i)(RA, Tm.getSnapshot()), Am = BA();
      if (!hm.enabled) return null;
      const am = !hm.loading && 0 === hm.conversations.length;
      return (0, GA.jsx)(lA.d, {
        show: hm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: fm("skyblockDialogue:title")
              }), (0, GA.jsx)("p", {
                children: fm("skyblockDialogue:intro")
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: Tm.dismiss
            })]
          }), (0, GA.jsxs)("div", {
            className: JA()("SkyblockDialogueBody", {
              SingleColumn: null !== hm.questFocus || 0 === hm.characters.length
            }),
            children: [null === hm.questFocus && hm.characters.length > 0 && (0, GA.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: hm.characters.map((mm => (0, GA.jsx)(MA.e, {
                className: JA()("SkyblockDialogueCharacter", {
                  Selected: mm.selected
                }),
                onClick: () => {
                  Tm.selectCharacter(mm.id)
                },
                children: (0, GA.jsx)(bA.b, {
                  text: mm.styling
                })
              }, mm.id)))
            }), (0, GA.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== hm.questFocus && (0, GA.jsx)(MA.e, {
                className: "SkyblockDialogueBack",
                onClick: Tm.showCharacters,
                children: fm("skyblockDialogue:allCharacters")
              }), hm.loading && (0, GA.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: fm("skyblockDialogue:loading")
              }), am && (0, GA.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: fm(null === hm.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), hm.conversations.map((mm => (0, GA.jsx)(dx, {
                conversation: mm,
                completedLabel: hm.completedLabel
              }, mm.questId)))]
            })]
          })]
        })
      })
    }

    function Wx(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(YA, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA();
      return fm.enabled ? (0, GA.jsx)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: hm("skyblockGame:autographBook")
              }), (0, GA.jsx)("p", {
                children: hm("skyblockGame:autographBookIntro")
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              onClick: Tm.dismiss
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, GA.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, GA.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, GA.jsx)("strong", {
                  children: fm.total
                }), (0, GA.jsx)("span", {
                  children: hm("skyblockGame:autographTotal")
                })]
              }), (0, GA.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, GA.jsx)("strong", {
                  children: fm.rankTotal
                }), (0, GA.jsx)("span", {
                  children: hm("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === fm.entries.length ? (0, GA.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: hm("skyblockGame:autographBookEmpty")
            }) : (0, GA.jsx)("ul", {
              className: "SkyblockAutographList",
              children: fm.entries.map((mm => (0, GA.jsxs)("li", {
                className: JA()("SkyblockAutograph", {
                  Ranked: null !== mm.rank
                }),
                style: null === mm.rank ? void 0 : {
                  color: mm.rank.colour
                },
                children: [null !== mm.rank && (0, GA.jsx)(Ya.c, {
                  className: "SkyblockAutographRankIcon",
                  name: mm.rank.icon,
                  kit: (0, Ya.d)(mm.rank.icon)
                }), (0, GA.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, GA.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: mm.name
                  }), (0, GA.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== mm.rank && (0, GA.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: mm.rank.label
                    }), (0, GA.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: mm.signedOn
                    })]
                  })]
                })]
              }, mm.key)))
            })]
          })]
        })
      }) : null
    }
    const Fx = (0, zm.memo)((function(mm) {
        let {
          controller: Tm
        } = mm;
        return (0, GA.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Tm.display.mountWaypoint,
          children: [(0, GA.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, GA.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, GA.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, GA.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, GA.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, GA.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      mw = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Tw(mm) {
      return "next" === mm.phase ? "\u2192" : mw[mm.kind]
    }
    const fw = (0, zm.memo)((function(mm) {
      let {
        controller: Tm,
        display: fm
      } = mm;
      const hm = (0, NA.i)(Ef, Tm.getNotificationSnapshot()),
        [Am, am] = (0, zm.useState)(!1);
      return (0, NA.g)("qteStateUpdated", (mm => {
        am(mm.isActive)
      })), (0, GA.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Am ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [hm && (0, GA.jsxs)("div", {
          className: `SkyblockQuestNotification ${hm.kind} ${hm.phase}`,
          style: {
            "--quest-notification-duration": `${hm.durationMs}ms`,
            ...hm.accent && {
              "--quest-notification-accent": hm.accent
            }
          },
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (hm.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, GA.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Tw(hm)
            }), hm.iconItem && (0, GA.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, GA.jsx)(kA.d, {
                itemName: hm.iconItem,
                amount: 0
              })
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, GA.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: hm.title
            }), (0, GA.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, GA.jsx)(Da.e, {
                text: hm.name
              })
            }), hm.description && (0, GA.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, GA.jsx)(Da.e, {
                text: hm.description
              })
            }), hm.reward && (0, GA.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, GA.jsx)(Da.e, {
                text: hm.reward
              })
            })]
          })]
        }, hm.token), (null === hm || void 0 === hm ? void 0 : hm.waypointNameKey) && (0, GA.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": hm.waypointNameKey,
          "data-notification-token": hm.token,
          ref: fm.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${hm.token}`)]
      })
    }));

    function hw(mm) {
      const Tm = parseInt(mm.replace("#", ""), 16);
      return `${Tm>>16&255}, ${Tm>>8&255}, ${255&Tm}`
    }
    const Aw = (0, zm.memo)((function(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, NA.i)(sf, Tm.getSnapshot());
      if (!hm) return null;
      const Am = "arrival" === hm.phase;
      return (0, GA.jsxs)("div", {
        className: JA()("SkyblockPortalTransit", {
          Departure: !Am,
          Arrival: Am
        }),
        style: {
          "--portal-rgb": hw(hm.colour),
          "--portal-duration": `${hm.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, GA.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, GA.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Tm.finishArrival(hm.token)
          }
        }), (0, GA.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, GA.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Am && (0, GA.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: fm("skyblockGame:portalTransitHeading")
          }), (0, GA.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: fm(hm.zoneNameKey)
          })]
        })]
      }, hm.token)
    }));

    function aw() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function xw() {
      const mm = document.querySelector(".SkyblockHudCoins"),
        Tm = null === mm || void 0 === mm ? void 0 : mm.getBoundingClientRect();
      return Tm && Tm.width > 0 ? {
        x: Tm.left + Math.min(Tm.width, 24) / 2,
        y: Tm.top + Tm.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function ww(mm) {
      return {
        x: mm.left + mm.width / 2,
        y: mm.top + mm.height / 2
      }
    }

    function Dw() {
      var mm;
      const Tm = null === (mm = document.querySelector(".HotBar")) || void 0 === mm ? void 0 : mm.getBoundingClientRect();
      return Tm && Tm.width > 0 ? ww(Tm) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function iw(mm) {
      let {
        items: Tm,
        origins: fm,
        target: hm
      } = mm;
      return (0, GA.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Tm.map(((mm, Tm) => {
          const Am = fm[Tm];
          return (0, GA.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Am.x}px`,
              top: `${Am.y}px`,
              "--item-dx": hm.x - Am.x + "px",
              "--item-dy": hm.y - Am.y + "px",
              "--item-delay": 2e3 + 160 * Tm + "ms",
              "--item-flight": "700ms"
            },
            children: (0, GA.jsx)(kA.d, {
              itemName: mm.dailyRewardItemName,
              amount: 0
            })
          }, mm.dailyRewardItemName)
        }))
      })
    }

    function Rw(mm, Tm) {
      const fm = -Math.PI / 2 + 1.25 * (mm / (Tm - 1) * 2 - 1),
        hm = 70 + mm % 3 * 22;
      return {
        x: Math.cos(fm) * hm,
        y: Math.sin(fm) * hm * .7
      }
    }

    function pw(mm) {
      let {
        origin: Tm,
        target: fm,
        count: hm
      } = mm;
      const Am = [];
      for (let am = 0; am < hm; am++) {
        const mm = Rw(am, hm);
        Am.push((0, GA.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Tm.x}px`,
            top: `${Tm.y}px`,
            "--coin-bx": `${mm.x}px`,
            "--coin-by": `${mm.y}px`,
            "--coin-dx": fm.x - Tm.x + "px",
            "--coin-dy": fm.y - Tm.y + "px",
            "--coin-delay": `${vf(am,hm)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, GA.jsx)(kA.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, am))
      }
      return (0, GA.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Am
      })
    }

    function Ew(mm) {
      let {
        day: Tm
      } = mm;
      const fm = Zm[Tm - 1];
      return (0, GA.jsxs)(GA.Fragment, {
        children: [(0, GA.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, GA.jsx)(kA.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, SA.f)(fm.dailyRewardCoins)]
        }), fm.dailyRewardItems.map((mm => (0, GA.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, GA.jsx)(kA.d, {
            itemName: mm.dailyRewardItemName,
            amount: 0
          }), "\xd7", mm.dailyRewardItemAmount]
        }, mm.dailyRewardItemName)))]
      })
    }

    function ow(mm) {
      let {
        day: Tm
      } = mm;
      const fm = bm(Tm);
      return (0, GA.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Zm.map(((mm, hm) => {
          const Am = hm + 1;
          return (0, GA.jsxs)("li", {
            className: JA()("SkyblockDailyRewardTile", {
              Claimed: Am < Tm && Am !== fm,
              Today: Am === Tm,
              Tomorrow: Am === fm,
              Jackpot: Am === km
            }),
            children: [(0, GA.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Am
            }), (0, GA.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, GA.jsx)(kA.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, SA.f)(mm.dailyRewardCoins)]
            }), mm.dailyRewardItems.map((mm => (0, GA.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, GA.jsx)(kA.d, {
                itemName: mm.dailyRewardItemName,
                amount: 0
              }), "\xd7", mm.dailyRewardItemAmount]
            }, mm.dailyRewardItemName)))]
          }, Am)
        }))
      })
    }

    function Ow(mm) {
      let {
        view: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, zm.useRef)(null), Am = (0, zm.useRef)(null), [am, xm] = (0, zm.useState)(null);
      (0, zm.useLayoutEffect)((() => {
        var mm;
        const Tm = null === (mm = hm.current) || void 0 === mm ? void 0 : mm.getBoundingClientRect();
        if (Tm) {
          var fm, am;
          const mm = Array.from(null !== (fm = null === (am = Am.current) || void 0 === am ? void 0 : am.children) && void 0 !== fm ? fm : [], (mm => ww(mm.getBoundingClientRect())));
          xm({
            origin: ww(Tm),
            target: xw(),
            itemOrigins: mm,
            itemTarget: Dw()
          })
        }
      }), []);
      const wm = bm(Tm.day),
        Dm = function(mm, Tm) {
          const [fm, hm] = (0, zm.useState)((() => aw() ? mm : 0));
          return (0, zm.useEffect)((() => {
            if (aw()) return;
            const fm = performance.now();
            let Am = 0;
            const am = xm => {
              const wm = Math.min(Math.max((xm - fm) / Tm, 0), 1);
              hm(Math.round(mm * (1 - (1 - wm) ** 3))), wm < 1 && (Am = requestAnimationFrame(am))
            };
            return Am = requestAnimationFrame(am), () => {
              cancelAnimationFrame(Am)
            }
          }), [mm, Tm]), fm
        }(Tm.coins, 450);
      return (0, GA.jsxs)("div", {
        className: JA()("SkyblockDailyReward", {
          Jackpot: Tm.day === km
        }),
        style: {
          "--daily-duration": `${Tm.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, GA.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, GA.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, GA.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: fm("skyblockGame:dailyRewardTitle")
            }), (0, GA.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: fm("skyblockGame:dailyRewardDay", {
                day: String(Tm.day)
              })
            })]
          }), (0, GA.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: hm,
            children: [(0, GA.jsx)(kA.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, GA.jsxs)("span", {
              children: ["+", (0, SA.f)(Dm)]
            })]
          }), Tm.items.length > 0 && (0, GA.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Am,
            children: Tm.items.map((mm => (0, GA.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, GA.jsx)(kA.d, {
                itemName: mm.dailyRewardItemName,
                amount: 0
              }), "\xd7", mm.dailyRewardItemAmount]
            }, mm.dailyRewardItemName)))
          }), (0, GA.jsx)(ow, {
            day: Tm.day
          }), (0, GA.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [fm("skyblockGame:dailyRewardComeBack"), (0, GA.jsx)(Ew, {
              day: wm
            })]
          })]
        }), null !== am && (0, GA.jsx)(pw, {
          origin: am.origin,
          target: am.target,
          count: Tm.flyingCoins
        }), null !== am && am.itemOrigins.length === Tm.items.length && (0, GA.jsx)(iw, {
          items: Tm.items,
          origins: am.itemOrigins,
          target: am.itemTarget
        })]
      })
    }
    const Yw = (0, zm.memo)((function(mm) {
        let {
          controller: Tm
        } = mm;
        const fm = (0, NA.i)(uf, Tm.getSnapshot());
        return fm ? (0, GA.jsx)(Ow, {
          view: fm
        }, fm.token) : null
      })),
      qw = "Gold Coin";

    function jw(mm) {
      return 650 + 220 * mm
    }

    function Vw(mm) {
      return {
        "--letter-delay": `${jw(mm)}ms`,
        "--letter-land": `${jw(mm)+300}ms`
      }
    }

    function Iw(mm) {
      let {
        letterCount: Tm
      } = mm;
      return (0, GA.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, GA.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, GA.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, GA.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Tm
        }, ((mm, Tm) => (0, GA.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Vw(Tm),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Tm)))]
      })
    }

    function Kw(mm) {
      var Tm, fm, hm;
      let {
        letter: Am,
        index: am
      } = mm;
      const {
        t: xm
      } = (0, eA.A)(), wm = null !== (Tm = null === (fm = Am.items[0]) || void 0 === fm ? void 0 : fm.itemName) && void 0 !== Tm ? Tm : qw;
      return (0, GA.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Vw(am),
        children: [(0, GA.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, GA.jsx)(kA.d, {
            itemName: wm,
            amount: 0
          })
        }), (0, GA.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: xm(Am.reasonKey, null !== (hm = Am.reasonParams) && void 0 !== hm ? hm : void 0)
        }), (0, GA.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Am.coins > 0 && (0, GA.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, GA.jsx)(kA.d, {
              itemName: qw,
              amount: 0
            }), "+", (0, SA.f)(Am.coins)]
          }), Am.items.map(((mm, Tm) => (0, GA.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, GA.jsx)(kA.d, {
              itemName: mm.itemName,
              amount: 0
            }), mm.label, " \xd7", mm.amount]
          }, Tm)))]
        })]
      })
    }

    function Qw(mm) {
      let {
        view: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)();
      return (0, GA.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Tm.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${jw(Tm.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, GA.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, GA.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, GA.jsx)(Iw, {
              letterCount: Tm.letters.length
            }), (0, GA.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: fm("skyblockGame:mailboxTitle")
            })]
          }), (0, GA.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Tm.letters.map(((mm, Tm) => (0, GA.jsx)(Kw, {
              letter: mm,
              index: Tm
            }, Tm)))
          }), Tm.more > 0 && (0, GA.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: fm("skyblockGame:mailboxMore", {
              count: String(Tm.more)
            })
          })]
        })
      })
    }
    const nw = (0, zm.memo)((function(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Uf, Tm.getSnapshot());
      return fm ? (0, GA.jsx)(Qw, {
        view: fm
      }, fm.token) : null
    }));

    function Jw(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, NA.i)(sh, Tm.getSnapshot());
      if (null === hm) return null;
      const Am = hm.fullSet ? "empty" === hm.fuelState ? {
        text: fm("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: fm("skyblockGame:magmawardHudFullSet", {
          worn: String(hm.wornCount)
        }),
        tone: "partial"
      };
      return (0, GA.jsx)(zA.e, {
        placement: "statBars",
        children: (0, GA.jsxs)("div", {
          className: JA()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${hm.fuelState}`, {
            "SkyblockMagmawardHud-partial": !hm.fullSet,
            "SkyblockMagmawardHud-armed": hm.fullSet && "empty" !== hm.fuelState
          }),
          children: [null !== hm.flare && (0, GA.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${hm.flare}`
          }, `flare:${hm.flareToken}`), (0, GA.jsx)("div", {
            className: JA()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: hm.setLit
            }),
            children: hm.pieces.map(((mm, Tm) => (0, GA.jsx)("div", {
              className: JA()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: mm.worn,
                SkyblockMagmawardPieceJustWorn: mm.justWorn
              }),
              children: (0, GA.jsx)(kA.d, {
                itemName: mm.itemName,
                amount: 0
              })
            }, `${Tm}:${mm.wornToken}`)))
          }, `pieces:${hm.setLitToken}`), (0, GA.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, GA.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, GA.jsxs)("div", {
              className: JA()("SkyblockMagmawardFuelCounter", hm.pulse && `SkyblockMagmawardFuelCounter-${hm.pulse}`),
              children: [(0, GA.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, GA.jsx)(kA.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, GA.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: hm.fuel
              })]
            }, `counter:${hm.pulseToken}`), "burn" === hm.pulse && (0, GA.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${hm.pulseToken}`)]
          }), Am && (0, GA.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Am.tone} SmallTextBold`,
            children: Am.text
          })]
        })
      })
    }

    function zw(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm,
        selectedLanguage: hm
      } = (0, eA.A)(), Am = (0, NA.i)(Mh, Tm.getSnapshot());
      return null === Am ? null : (0, GA.jsx)(zA.e, {
        placement: "statBars",
        children: (0, GA.jsxs)("div", {
          className: JA()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Am.inRange
          }),
          style: {
            "--glowtide-colour": Am.colour
          },
          "aria-label": fm("skyblockGame:glowtideChipLabel"),
          children: [(0, GA.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Am.inRange ? (0, GA.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: fm("skyblockGame:glowtideChipInRange")
          }, `call:${Am.inRangeToken}`) : (0, GA.jsxs)(GA.Fragment, {
            children: [(0, GA.jsx)("div", {
              ref: Tm.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, GA.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: fm("skyblockGame:waypointDistance", {
                distance: nm(Am.distance, hm.code)
              })
            })]
          })]
        })
      })
    }

    function Zw(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, NA.i)(Bh, Tm.getSnapshot());
      return null === hm ? null : (0, GA.jsx)(zA.e, {
        placement: "statBars",
        children: (0, GA.jsxs)("div", {
          className: JA()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: hm.full
          }),
          "aria-label": fm("skyblockGame:glowMeterLabel", {
            fill: String(hm.fill),
            yp: String(hm.yp)
          }),
          children: [hm.burst && (0, GA.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${hm.burstToken}`), (0, GA.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, GA.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${hm.ratio})`
              }
            }), hm.gained && (0, GA.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${hm.gainToken}`), hm.full && Array.from({
              length: 5
            }, ((mm, Tm) => (0, GA.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Tm)))]
          }), hm.full && hm.rares.map((mm => (0, GA.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, GA.jsx)(kA.d, {
              itemName: mm,
              amount: 0
            })
          }, mm))), hm.ready && (0, GA.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, GA.jsx)("span", {
              children: fm("skyblockGame:glowMeterReady")
            })
          }, `ready:${hm.fullToken}`)]
        })
      })
    }

    function kw(mm) {
      let {
        controller: Tm
      } = mm;
      const {
        t: fm
      } = (0, eA.A)(), hm = (0, NA.i)(vh, Tm.getSnapshot());
      if (null === hm) return null;
      const Am = "waiting" === hm.phase,
        am = {
          animationDuration: `${hm.waitMs}ms`,
          animationDelay: -hm.elapsedMs + "ms"
        },
        xm = Am ? void 0 : {
          animationDuration: `${hm.waitMs}ms`
        };
      return (0, GA.jsxs)("div", {
        className: Am ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Am && (0, GA.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((mm, Tm) => (0, GA.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Tm))), (0, GA.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: am
          }), (0, GA.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, GA.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, GA.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: am
            })]
          }), (0, GA.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, GA.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: xm,
          children: fm(hm.line)
        }, hm.lineIndex)]
      }, hm.token)
    }

    function bw(mm) {
      let {
        chart: Tm,
        showHere: fm,
        className: hm
      } = mm;
      return (0, GA.jsx)("div", {
        className: JA()("SkyblockTideChartGrid", hm, null !== Tm.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Tm.cells.map(((mm, hm) => {
          const Am = 0 !== (Tm.pulseCells & 1 << hm),
            am = Tm.castCell === hm;
          return (0, GA.jsx)("span", {
            className: JA()("SkyblockTideChartCell", `Cell-${mm}`, Am && "Pulse", am && "Cast", fm && Tm.hereCell === hm && "Here")
          }, `${hm}:${Am?`p${Tm.pulseToken}`:""}:${am?`c${Tm.castToken}`:""}`)
        }))
      })
    }

    function Sw(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Uh, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = fm.chip;
      if (!fm.enabled || null === Am) return null;
      const am = hm("skyblockGame:tideChartsChipLabel", {
        island: Am.islandName,
        lit: String(Am.lit),
        ink: String(Am.ink)
      });
      return (0, GA.jsx)(zA.e, {
        placement: "statBars",
        children: (0, GA.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: JA()("SkyblockTideChartsChip", fm.open && "Open", null !== Am.pictureName && "Complete"),
          "aria-label": am,
          title: am,
          onMouseDown: mm => {
            mm.preventDefault()
          },
          onClick: Tm.toggle,
          children: [(0, GA.jsx)(bw, {
            chart: Am,
            showHere: !1,
            className: "Mini"
          }), (0, GA.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Am.lit, "/", Am.ink]
          })]
        })
      })
    }

    function ew(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, NA.i)(Uh, Tm.getSnapshot()),
        {
          t: hm
        } = (0, eA.A)(),
        Am = BA(),
        am = fm.card;
      return fm.enabled && null !== am ? (0, GA.jsx)(lA.d, {
        show: fm.open,
        close: Tm.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Am,
          onKeyDown: uA,
          children: [(0, GA.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, GA.jsxs)("div", {
              children: [(0, GA.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: hm("skyblockGame:tideChartsTitle")
              }), (0, GA.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: hm("skyblockGame:tideChartsIntro")
              })]
            }), (0, GA.jsx)(MA.j, {
              padIgnore: !0,
              ariaLabel: hm("skyblockGame:tideChartsClose"),
              onClick: Tm.dismiss
            })]
          }), fm.tabs.length > 1 && (0, GA.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": hm("skyblockGame:tideChartsIslands"),
            children: fm.tabs.map((mm => (0, GA.jsx)("button", {
              type: "button",
              className: JA()("SkyblockTideChartsTab", mm.selected && "Selected"),
              "aria-pressed": mm.selected,
              onClick: () => {
                Tm.Do(mm.island)
              },
              children: mm.name
            }, mm.island)))
          }), (0, GA.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, GA.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": am.gridLabel,
              children: (0, GA.jsx)(bw, {
                chart: am,
                showHere: !0,
                className: "Large"
              })
            }), (0, GA.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, GA.jsx)("h3", {
                children: am.islandName
              }), (0, GA.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: am.litText
              }), null === am.pictureName ? (0, GA.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: hm("skyblockGame:tideChartsPictureHidden")
              }) : (0, GA.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: hm("skyblockGame:tideChartsPictureRevealed", {
                  picture: am.pictureName
                })
              }, am.pictureName), (0, GA.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, GA.jsxs)("li", {
                  children: [(0, GA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), hm("skyblockGame:tideChartsLegendLit")]
                }), (0, GA.jsxs)("li", {
                  children: [(0, GA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), hm("skyblockGame:tideChartsLegendClear")]
                }), null !== am.hereCell && (0, GA.jsxs)("li", {
                  children: [(0, GA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), hm("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, GA.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, GA.jsx)("span", {
                  children: fm.turnsText
                }), (0, GA.jsx)("span", {
                  children: fm.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Nw(mm) {
      var Tm;
      let {
        controller: fm
      } = mm;
      const {
        selectedLanguage: hm
      } = (0, eA.A)(), Am = hm.code;
      (0, zm.useEffect)((() => {
        fm.setTranslator(((mm, Tm) => (0, eA.w)(Am, mm, Tm)), Am, ((mm, Tm) => (0, eA.t)(Am, mm, Tm)))
      }), [fm, Am]);
      const am = (0, NA.i)(Em, fm.map.getSnapshot()),
        {
          openInGameMenuName: xm
        } = (0, cA.m)(["openInGameMenuName"]);
      return (0, GA.jsxs)(GA.Fragment, {
        children: [(0, GA.jsx)(fw, {
          controller: fm.quests,
          display: fm.navigation.display
        }), am.enabled && !xm && (0, GA.jsx)(aa, {
          controller: fm.navigation
        }), (0, GA.jsx)(XA, {
          controller: fm,
          minimap: am.enabled && (null === (Tm = am.presentation) || void 0 === Tm ? void 0 : Tm.minimap) && (0, GA.jsx)(Aa, {
            view: am.presentation.minimap,
            navigation: fm.navigation,
            controller: fm.map
          }),
          children: (0, GA.jsx)(Oa, {
            controller: fm.quests,
            surface: "hud"
          })
        }), (0, GA.jsx)(Fx, {
          controller: fm.navigation
        }), (0, GA.jsx)(Aw, {
          controller: fm.portalTransit
        }), (0, GA.jsx)(Yw, {
          controller: fm.dailyReward
        }), (0, GA.jsx)(nw, {
          controller: fm.mailbox
        }), (0, GA.jsx)(Jw, {
          controller: fm.magmaward
        }), (0, GA.jsx)(zw, {
          controller: fm.glowtide
        }), (0, GA.jsx)(Ox, {
          controller: fm.passage
        }), (0, GA.jsx)(Sw, {
          controller: fm.tideCharts
        }), (0, GA.jsx)(Zw, {
          controller: fm.glowMeter
        }), (0, GA.jsx)(zx, {
          controller: fm.reachLog
        }), (0, GA.jsx)(kw, {
          controller: fm.hushWait
        }), (0, GA.jsx)(Qx, {
          controller: fm.lampLight
        }), (0, GA.jsx)(xa, {
          controller: fm.skills,
          surface: "hud"
        })]
      })
    }

    function Gw(mm) {
      let {
        controller: Tm
      } = mm;
      return (0, GA.jsxs)(GA.Fragment, {
        children: [(0, GA.jsx)(ha, {
          controller: Tm.map,
          navigation: Tm.navigation
        }), (0, GA.jsx)(xa, {
          controller: Tm.skills,
          surface: "menu"
        }), (0, GA.jsx)(Oa, {
          controller: Tm.quests,
          surface: "menu"
        }), (0, GA.jsx)(Ua, {
          controller: Tm.dungeons
        }), (0, GA.jsx)(Wa, {
          controller: Tm.collections
        }), (0, GA.jsx)(Tx, {
          controller: Tm.questGraph
        }), (0, GA.jsx)(xx, {
          controller: Tm.forge
        }), (0, GA.jsx)(Ex, {
          controller: Tm.smuggler
        }), (0, GA.jsx)(Jx, {
          controller: Tm.keepersChair,
          lampLight: Tm.lampLight
        }), (0, GA.jsx)(tx, {
          controller: Tm.reachLog,
          regulars: Tm.regulars,
          hiddenWaters: Tm.hiddenWaters
        }), (0, GA.jsx)(Sx, {
          controller: Tm.regulars
        }), (0, GA.jsx)(qx, {
          controller: Tm.passage
        }), (0, GA.jsx)(ew, {
          controller: Tm.tideCharts
        }), (0, GA.jsx)(gx, {
          controller: Tm.dialogue
        }), (0, GA.jsx)(Wx, {
          controller: Tm.autographs
        })]
      })
    }
    var Xw = fm(36846);
    const Pw = hh + Rh;

    function Hw(mm, Tm, fm, hm, Am) {
      const am = [],
        xm = [],
        wm = fm => {
          const hm = mm.playSound(Tm, fm.sound, fm.volume, fm.rate);
          hm && (xm.push(hm), void 0 !== fm.cutAfter && am.push(setTimeout((() => {
            hm.fade(hm.getVolume(), 0, 300)
          }), fm.cutAfter)))
        };
      for (const Dm of function(mm, Tm) {
          const fm = [{
            sound: "rpgKnifeSlice1",
            beat: hh,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: hh,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: hh,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: hh,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: hh,
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
            sound: (0, Xw.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Pw + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Xw.g)("bigDrumSwish"),
            beat: Pw + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Pw + 60,
            lead: 180,
            volume: .5 + .06 * mm,
            rate: .82 + .07 * mm
          }];
          return mm >= 4 && fm.push({
            sound: "exp_levelup",
            beat: Pw + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Tm && fm.push({
            sound: "trumpetFlare",
            beat: Pw + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), fm.push({
            sound: "harp_pling",
            beat: Ah,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), fm
        }(fm, hm)) Am ? am.push(setTimeout((() => {
        wm(Dm)
      }), Math.max(0, Dm.beat - Dm.lead / Dm.rate))) : Dm.beat !== hh && "magicAccent2" !== Dm.sound && "trumpetFlare" !== Dm.sound || wm(Dm);
      return () => {
        for (const mm of am) clearTimeout(mm);
        for (const mm of xm) mm.fade(mm.getVolume(), 0, 120)
      }
    }
    class yw {
      constructor(mm) {
        this.deps = mm, this.pending = new Map, this.localHook = null
      }
      hookWaiting(mm, Tm) {
        this.pending.delete(mm);
        const fm = this.deps.now();
        if (null === Tm) {
          var hm;
          if ((null === (hm = this.localHook) || void 0 === hm ? void 0 : hm.hookId) === mm) {
            const mm = fm >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(mm)
          }
          return
        }
        const Am = fm + Tm;
        this.settle(mm, Am) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(mm, {
          untilMs: fm + 1e3,
          biteAtMs: Am
        }))
      }
      getLocalHook() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.localHook) || void 0 === Tm ? void 0 : Tm.hookId) && void 0 !== mm ? mm : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const mm = this.deps.now();
        for (const [Tm, {
            untilMs: fm,
            biteAtMs: hm
          }] of this.pending)(this.settle(Tm, hm) || mm > fm) && this.pending.delete(Tm)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(mm, Tm) {
        const fm = this.deps.getLineOwner(mm);
        if (null === fm) return !1;
        if (!this.deps.isLocalPlayer(fm)) return !0;
        if (this.localHook = {
            hookId: mm,
            biteAtMs: Tm
          }, !this.deps.isHushWaiting()) {
          const [Tm, fm] = this.deps.getHookPosition(mm);
          this.deps.onCastLanded(Tm, fm)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Cw = fm(4171);
    const rw = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      sw = {
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
    class lw {
      constructor(mm) {
        this.deps = mm, this.tell = null
      }
      receiveTell(mm) {
        let {
          biteTellTier: Tm
        } = mm;
        this.tell = {
          tier: Tm,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(mm) {
        const Tm = this.tell;
        if (this.tell = null, !mm) return;
        const fm = null !== Tm && this.deps.now() - Tm.atMs <= 3e3 ? Tm.tier : 0;
        this.deps.vibrate(rw[fm])
      }
      burstAtHook() {
        const mm = this.tell,
          Tm = this.deps.getLocalHookPosition();
        null === mm || mm.burst || null === Tm || (mm.burst = !0, this.deps.playParticles(function(mm, Tm) {
          let [fm, hm, Am] = Tm;
          const {
            count: am,
            rise: xm,
            colour: wm
          } = sw[mm], [Dm, im, Rm] = wm;
          return {
            texture: "glint",
            pos1: [fm - .3, hm, Am - .3],
            pos2: [fm + .3, hm + .2, Am + .3],
            dir1: [-.6, xm, -.6],
            dir2: [.6, 1.4 * xm, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: am,
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
              minColor: [Dm, im, Rm, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Dm, im, Rm, 0],
              maxColor: [Dm, im, Rm, 0]
            }],
            blendMode: Cw.g.Add,
            hideDist: 48
          }
        }(mm.tier, Tm)))
      }
    }
    var Mw = fm(1259),
      uw = fm(1912),
      Bw = fm(37);

    function Lw(mm, Tm) {
      return [{
        timeFraction: 0,
        minColor: [255 * mm[0], 255 * mm[1], 255 * mm[2], 1],
        maxColor: [255 * Tm[0], 255 * Tm[1], 255 * Tm[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const vw = [0, 0, 0],
      tw = {
        texture: "glint",
        mipmaps: !1,
        yp: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: vw,
        dir2: vw,
        blendMode: Cw.g.OneOne
      },
      Uw = {
        ...tw,
        colorGradients: Lw([1, .88, .38], [1, .65, .15])
      },
      dw = {
        ...tw,
        colorGradients: Lw([.55, .95, 1], [.9, 1, 1])
      },
      gw = [.5, .5, .5],
      Ww = {
        texture: "glint",
        mipmaps: !1,
        yp: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Lw([1, .12, .12], [1, .35, .2]),
        blendMode: Cw.g.OneOne
      };
    class Fw {
      constructor() {
        this.drops = new Map
      }
      rO(mm, Tm) {
        if ("overflowFlash" === Tm.kind) {
          const [fm, hm, Am] = Tm.position, am = mm.createParticles(Ww, {
            pos: [fm, hm, Am],
            half: gw
          });
          return am.emit(18), void am.stop()
        }
        this.drops.has(Tm.itemId) || this.drops.set(Tm.itemId, {
          owner: Tm.owner,
          cosmetic: Tm.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      DE(mm) {
        if (0 === this.drops.size) return;
        const Tm = performance.now(),
          fm = mm.getCameraPosition();
        let hm = 0;
        for (const am of this.drops.values()) null !== am.particles && hm++;
        for (const [am, xm] of this.drops) {
          const wm = mm.getPositionView(am);
          if (null === wm) {
            var Am;
            if (xm.seen || Tm - xm.markedAt > 5e3) null !== xm.particles && hm--, null === (Am = xm.particles) || void 0 === Am || Am.stop(), this.drops.delete(am);
            continue
          }
          xm.cosmetic || !mm.isLocalPlayer(xm.owner) || xm.pickupDelayCleared || (mm.clearPickupDelay(am), xm.pickupDelayCleared = !0);
          const Dm = xm.lastPosition,
            im = xm.seen && (wm[0] - Dm[0]) ** 2 + (wm[1] - Dm[1]) ** 2 + (wm[2] - Dm[2]) ** 2 > 4e-4,
            Rm = (wm[0] - fm[0]) ** 2 + (wm[1] - fm[1]) ** 2 + (wm[2] - fm[2]) ** 2 < 2025;
          xm.seen = !0, Dm[0] = wm[0], Dm[1] = wm[1], Dm[2] = wm[2], im && (xm.lastMovingAt = Tm), null !== xm.particles && (!Rm || Tm - xm.lastMovingAt > 500) && (xm.particles.stop(), xm.particles = null, hm--), im && Rm && null === xm.particles && hm < 32 && (xm.particles = mm.createParticles(xm.cosmetic ? dw : Uw, {
            pos: wm
          }), hm++), null !== xm.particles && (xm.particles.moveTo(wm), xm.particles.setEmitRate(im ? 12 : 0)), !im && null === xm.particles && Tm - Math.max(xm.lastMovingAt, xm.markedAt) > 2e3 && this.drops.delete(am)
        }
      }
      dispose() {
        for (const Tm of this.drops.values()) {
          var mm;
          null === (mm = Tm.particles) || void 0 === mm || mm.stop()
        }
        this.drops.clear()
      }
    }
    var mD = fm(198);
    const TD = mD.f.gq * mD.f.playerEyeToHeightRatio;
    class fD {
      constructor(mm) {
        this.host = mm, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      rO(mm) {
        this.lava = mm, this.nextUpdateAt = 0
      }
      DE() {
        var mm;
        const Tm = this.host.now();
        if (Tm < this.nextUpdateAt) return;
        this.nextUpdateAt = Tm + 250;
        const fm = this.host.playerPosition(),
          hm = fm && this.findNearest([fm[0], fm[1] + TD, fm[2]]);
        if (!hm || hm.distance >= 40) return void this.stop();
        const Am = .5 * Math.min(1, (40 - hm.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Am) : this.loop = this.host.play("lavaFlow", Am, hm.position, 40 + TD, 9, !0), null === (mm = this.loop) || void 0 === mm || mm.setPosition(hm.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var mm;
        null === (mm = this.loop) || void 0 === mm || mm.stop(), this.loop = null
      }
      findNearest(mm) {
        let Tm = -1,
          fm = 1 / 0;
        for (let hm = 0; hm < this.lava.length; hm += 3) {
          const Am = this.lava[hm] - mm[0],
            am = this.lava[hm + 1] - mm[1],
            xm = this.lava[hm + 2] - mm[2],
            wm = Am * Am + am * am + xm * xm;
          wm < fm && (fm = wm, Tm = hm)
        }
        return Tm < 0 ? null : {
          position: [this.lava[Tm], this.lava[Tm + 1], this.lava[Tm + 2]],
          distance: Math.sqrt(fm)
        }
      }
    }
    var hD = fm(1889),
      AD = fm(38739);
    const aD = {
      "Grey Portal": "Gray"
    };
    for (const pD of Am.Bc) aD[`${pD} Portal`] = pD;
    const xD = Object.keys(aD),
      wD = Object.fromEntries(xD.map((mm => [mm, (0, Am.X)(Am.J[`${(0,Am.ue)(aD[mm])}Team`])])));
    Object.fromEntries(xD.map((mm => [mm, Am.J[`${(0,Am.ue)(aD[mm])}UiText`]])));
    class DD {
      constructor(mm, Tm) {
        this.presentation = mm, this.portal = Tm, this.unlocked = void 0
      }
      rO(mm) {
        const Tm = !1 === this.unlocked && mm;
        this.unlocked = mm, this.DE();
        const {
          min: fm,
          max: hm,
          unlockedBlock: Am
        } = this.portal;
        if (Tm && this.presentation.hasChunk(...fm)) {
          const [mm, Tm, am] = wD[Am];
          this.presentation.playParticles({
            pos1: [...fm],
            pos2: hm.map((mm => mm + 1)),
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
              minColor: [mm, Tm, am, 1],
              maxColor: [Math.min(255, mm + 55), Math.min(255, Tm + 55), Math.min(255, am + 90), 1]
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
      DE() {
        var mm;
        const Tm = this.unlocked ? this.portal.unlockedBlock : null !== (mm = this.portal.lockedBlock) && void 0 !== mm ? mm : "Light Gray Portal",
          {
            min: fm,
            max: hm
          } = this.portal;
        for (let Am = fm[0]; Am <= hm[0]; Am++)
          for (let mm = fm[1]; mm <= hm[1]; mm++)
            for (let am = fm[2]; am <= hm[2]; am++) this.presentation.hasChunk(Am, mm, am) && this.presentation.XV(Am, mm, am) !== Tm && this.presentation.zN(Am, mm, am, Tm)
      }
    }
    const iD = {
        farming_1: {
          raises: mm => "NPC" === mm.type && "chef" === mm.variation,
          rise: .4
        },
        fishing_1: {
          raises: mm => "Draugr Warper" === mm.type,
          rise: .4
        }
      },
      RD = (mm, Tm, fm, am) => {
        let {
          localPlayerId: xm
        } = am;
        const wm = new QA({
          translate: (mm, Tm) => (0, eA.w)(Mw.e.get().getCurrentLanguageCode(), mm, Tm),
          translateWithIcons: (mm, Tm) => (0, eA.t)(Mw.e.get().getCurrentLanguageCode(), mm, Tm),
          setMenuOpen: mm => {
            mm ? (0, tm.s)() : (0, tm.h)()
          },
          dismissMenu: tm.j,
          publishSkills: mm => {
            Um.j.gp(xf, mm, !0)
          },
          publishQuests: mm => {
            Um.j.gp(pf, mm, !0)
          },
          publishQuestNotification: mm => {
            Um.j.gp(Ef, mm, !0)
          },
          publishDungeons: mm => {
            Um.j.gp(Yf, mm, !0)
          },
          publishCollections: mm => {
            Um.j.gp(Cf, mm, !0)
          },
          publishMap: mm => {
            Um.j.gp(Em, mm, !0)
          },
          publishHud: mm => {
            Um.j.gp(VA, mm, !0)
          },
          publishPortalTransit: mm => {
            Um.j.gp(sf, mm, !0)
          },
          isLoadingScreenUp: () => cA.c.get("loadingOverlayVisible"),
          publishDailyReward: mm => {
            Um.j.gp(uf, mm, !0)
          },
          publishMailbox: mm => {
            Um.j.gp(Uf, mm, !0)
          },
          publishQuestGraph: mm => {
            Um.j.gp(gf, mm, !0)
          },
          publishForge: mm => {
            Um.j.gp(jh, mm, !0)
          },
          publishSmuggler: mm => {
            Um.j.gp(Kh, mm, !0)
          },
          publishKeepersChair: mm => {
            Um.j.gp(Sh, mm, !0)
          },
          publishReachLog: mm => {
            Um.j.gp(Nh, mm, !0)
          },
          publishLampLight: mm => {
            Um.j.gp(Ch, mm, !0)
          },
          publishMagmaward: mm => {
            Um.j.gp(sh, mm, !0)
          },
          publishGlowtide: mm => {
            Um.j.gp(Mh, mm, !0)
          },
          publishGlowMeter: mm => {
            Um.j.gp(Bh, mm, !0)
          },
          publishHushWait: mm => {
            Um.j.gp(vh, mm, !0)
          },
          publishPassage: mm => {
            Um.j.gp(Jh, mm, !0)
          },
          publishTideCharts: mm => {
            Um.j.gp(Uh, mm, !0)
          },
          publishRegulars: mm => {
            Um.j.gp(hA, mm, !0)
          },
          publishHiddenWaters: mm => {
            Um.j.gp(DA, mm, !0)
          },
          publishDialogue: mm => {
            Um.j.gp(RA, mm, !0)
          },
          publishAutographs: mm => {
            Um.j.gp(YA, mm, !0)
          },
          onDailyRewardStarted: mm => {
            Nm.playSound(xm, mm.day === km ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (mm, Tm) => {
            Nm.playSound(xm, "exp_collect", .35, 1 + .6 * mm / (Tm - 1)), Um.j.gp(Bf, mm === Tm - 1)
          },
          onDailyRewardItemLanded: mm => {
            Nm.playSound(xm, "pickUp", .6, 1 + .15 * mm)
          },
          onMailboxStarted: () => {
            Nm.playSound(xm, "rpgMetalClick", .6, 1), Nm.playSound(xm, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Nm.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Bw.k,
          requestTracking: mm => {
            Nm.sendCommand(`quests track ${mm}`)
          },
          requestDungeonEnter: (mm, Tm) => {
            Nm.sendCommand(`dungeonEnter ${mm} ${Tm}`)
          },
          requestQuestJump: mm => {
            Nm.sendCommand(`${Xm} jump ${mm}`)
          },
          requestQuestArrive: (mm, Tm) => {
            const fm = `${Xm} arrive ${mm}`;
            Nm.sendCommand(Tm ? `${fm} complete` : fm)
          },
          requestForge: mm => {
            let {
              blade: Tm,
              guard: fm,
              handle: hm
            } = mm;
            Nm.sendCommand(`forge ${Tm} ${fm} ${hm}`)
          },
          requestDialogue: () => {
            Nm.sendCommand("quests dialogue")
          },
          requestSmuggle: (mm, Tm) => {
            Nm.sendCommand(`smuggle ${mm} ${Tm}`)
          },
          requestKeepersChairAim: mm => {
            Nm.sendCommand(`keeperschair-aim ${mm}`)
          },
          requestReachLogOpen: () => {
            Nm.sendCommand("reachlog-open")
          },
          requestLampLight: mm => {
            Nm.sendCommand(`${mm}`)
          },
          requestTravel: mm => {
            Nm.sendCommand(`map travel ${mm.kind} ${mm.id} ${mm.requestId}`)
          }
        });
        let Dm, im, Rm, pm, om, Om, Ym, Km, Qm, nm, Jm, Zm, bm;
        const em = new Fw;
        let Nm, Gm = null;
        const Pm = iD[null !== fm && void 0 !== fm ? fm : ""],
          rm = (mm, Tm) => {
            null !== Pm && void 0 !== Pm && Pm.raises(Tm) && Nm.setNametagOffset(mm, Pm.rise)
          },
          Mm = new lw({
            getLocalHookPosition: () => {
              const mm = um.getLocalHook();
              return null !== mm && Nm.checkValid(mm) ? Nm.rV(mm) : null
            },
            playParticles: mm => {
              Nm.playParticleEffect(mm)
            },
            vibrate: mm => {
              dm.g.play("fishBite", mm)
            },
            now: () => performance.now()
          }),
          um = new yw({
            getLineOwner: mm => Nm.checkValid(mm) ? Nm.getLineOwner(mm) : null,
            isLocalPlayer: mm => Nm.isLocalPlayer(mm),
            getHookPosition: mm => {
              const [Tm, , fm] = Nm.rV(mm);
              return [Tm, fm]
            },
            isHushWaiting: () => {
              var mm;
              return "waiting" === (null === (mm = wm.hushWait.getSnapshot()) || void 0 === mm ? void 0 : mm.phase)
            },
            onCastLanded: (mm, Tm) => {
              wm.tideCharts.castLanded(mm, Tm)
            },
            onLocalHookSettled: () => {
              Mm.onLocalHookSettled()
            },
            onLocalWaitEnded: mm => {
              Mm.onLocalWaitEnded(mm)
            },
            now: () => performance.now()
          }),
          gm = new fD({
            now: () => performance.now(),
            playerPosition: () => Nm.checkValid(xm) ? Nm.rV(xm) : null,
            play: (mm, Tm, fm, hm, Am, am) => Nm.playSound(xm, mm, Tm, 1, {
              aA: fm,
              maxHearDist: hm,
              refDistance: Am
            }, am)
          }),
          Wm = new Map;
        let Fm;
        return {
          onCreate: mm => {
            if (Nm = mm, Gm = new AD.SkyblockEntityFacing(mm, Pm ? rm : null), wm.portalTransit.resumeArrival(null !== fm && void 0 !== fm ? fm : null), (null !== fm && void 0 !== fm ? fm : hm) === hm) {
              let mm = -1 / 0;
              Fm = Um.j.subscribe("toggleMenu", (Tm => {
                const fm = performance.now();
                "inventory|Workbench" !== Tm || "cross_to_hub" !== wm.quests.getTrackedQuestId() || fm - mm < 1e4 || (mm = fm, Nm.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [hm, Am] of Object.entries(null !== (Tm = Hm[null !== fm && void 0 !== fm ? fm : ""]) && void 0 !== Tm ? Tm : {})) {
              var Tm;
              Wm.set(hm, new DD({
                hasChunk: (Tm, fm, hm) => mm.isBlockInLoadedChunk(Tm, fm, hm),
                XV: (Tm, fm, hm) => mm.blockIdToBlockName(mm.getBlockId(Tm, fm, hm)),
                zN: (Tm, fm, hm, Am) => {
                  mm.zN(Tm, fm, hm, Am)
                },
                playParticles: Tm => {
                  mm.playParticleEffect(Tm)
                }
              }, Am))
            }
            bm = (0, hD.e)((mm => function(mm) {
              return Object.hasOwn(BT, mm) || mm.startsWith("npc_")
            }(mm) ? vT(mm) : null)), wm.resolveItemName = (Tm, fm) => {
              const hm = mm.getItemStat(xm, Tm, "displayName");
              return hm && "object" === typeof hm && "translationKey" in hm ? fm(hm.translationKey, (0, eA.r)(hm.params, uw.e.shown)) : "string" === typeof hm ? fm(hm) : Tm
            }, wm.quests.notifications.onShown = mm => {
              "quest" === mm ? Nm.playSound(xm, "magicAccent1", 1, 1) : "skillLevel" === mm ? Nm.playSound(xm, "magicAccent1", 1, .6) : "landmark" === mm ? Nm.playSound(xm, "trumpetFlare", 1, .6) : "npcNote" === mm ? Nm.playSound(xm, "magicAccent2", .8, 1.1) : "started" === mm ? Nm.playSound(xm, (0, Xw.g)("bigDrumSwish"), 1, 1) : Nm.playSound(xm, (0, Xw.g)("rpgHandleSmallLeather"), 1, 1)
            }, wm.forge.onPartSelected = () => {
              Nm.playSound(xm, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, wm.forge.onOpened = () => {
              ! function(mm) {
                mm.preloadSounds([(0, Xw.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(mm)
            }, wm.forge.onForgeStarted = (Tm, fm, hm) => Hw(mm, xm, Tm, fm, hm), wm.smuggler.onBought = () => {
              Nm.playSound(xm, (0, Xw.g)("rpgHandleSmallLeather"), 1, 1), Nm.playSound(xm, "chestOpen", .6, 1)
            }, wm.compass.register(new qm(wm.map, !0)), wm.compass.register(new qm(wm.map, !1)), wm.compass.register(new Vm(wm.map)), wm.compass.register(new Im((() => wm.quests.getSnapshot().compassTarget)));
            for (const fm of ["enemy", "npc"]) wm.compass.register(new jm(wm.map, fm, (Tm => mm.checkValid(Tm) ? mm.rV(Tm) : void 0), (Tm => mm.isAlive(Tm))))
          },
          onAfterRender: (mm, Tm) => {
            const fm = Nm.checkValid(xm) ? Nm.rV(xm) : null;
            wm.navigation.afterRender(fm, performance.now(), Tm), wm.glowtide.afterRender(fm, Tm.cameraHeading), wm.tideCharts.afterRender(fm), um.afterRender()
          },
          onClose: () => {
            var mm, Tm, fm, hm, Am, am, xm, Em, Om, qm, jm, Vm, Im, cm, zm;
            Fm && Um.j.unsubscribe(Fm), null === (mm = bm) || void 0 === mm || mm(), em.dispose(), gm.dispose(), null === (Tm = Gm) || void 0 === Tm || Tm.dispose(), um.dispose(), wm.dispose(), null === (fm = Dm) || void 0 === fm || fm(), null === (hm = im) || void 0 === hm || hm(), null === (Am = Rm) || void 0 === Am || Am(), null === (am = pm) || void 0 === am || am(), null === (xm = om) || void 0 === xm || xm(), null === (Em = Ym) || void 0 === Em || Em(), null === (Om = undefined) || void 0 === Om || Om(), null === (qm = Km) || void 0 === qm || qm(), null === (jm = Qm) || void 0 === jm || jm(), null === (Vm = nm) || void 0 === Vm || Vm(), null === (Im = Jm) || void 0 === Im || Im(), null === (cm = undefined) || void 0 === cm || cm(), null === (zm = Zm) || void 0 === zm || zm()
          },
          onPlayerChangeBlock: (mm, Tm, hm, am, Dm, im) => {
            if (mm === xm && "Air" === im) {
              const mm = Nm.getClientOption(xm, "creative");
              wm.skills.predictBlock([Tm, hm, am], Dm, mm);
              const im = function(mm, Tm) {
                  if ("hub" === Tm || "farming_1" === Tm || "mining_1" === Tm) return !sm.has(mm) || "hub" !== Tm && "mining_1" !== Tm ? Object.hasOwn(Cm, mm) ? Cm[mm] : void 0 : ym
                }(Dm, fm),
                Rm = ("hub" === fm || "mining_1" === fm) && (Am.ld.some((mm => mm === Dm)) || Object.hasOwn(lm, Dm) || "mining_1" === fm && "Block of Coal" === Dm);
              mm || void 0 === im && !Rm || Nm.zN(Tm, hm, am, null !== im && void 0 !== im ? im : ym)
            }
          },
          onPlayerAttackEntity: (mm, Tm) => {
            if (mm !== xm || "Player" !== Nm.getEntityType(Tm)) return;
            const [fm, hm, Am] = Nm.rV(Tm);
            Nm.burstParticlePreset("critical", [fm, hm + 1, Am], 10)
          },
          onChangeBlockFail: mm => {
            for (const {
                ua: Tm
              }
              of mm) wm.skills.rejectBlock(Tm)
          },
          onReceivedMessageFromServer: (mm, Tm) => {
            if ("skyblockGatedPortal" === mm) {
              var fm;
              const [mm, hm] = Tm;
              return void(null === (fm = Wm.get(mm)) || void 0 === fm || fm.rO(hm))
            }
            if ("skyblockDailyReward" === mm) return void wm.dailyReward.rO(Tm);
            if ("skyblockMailbox" === mm) return void wm.mailbox.rO(Tm);
            if ("skyblockPortalTransit" === mm) return void wm.portalTransit.rO(Tm);
            if ("skyblockLoot" === mm) return void em.rO(Nm, Tm);
            if ("skyblockLava" === mm) return void gm.rO(Tm);
            if ("skyblockForge" === mm) return void wm.forge.rO(Tm);
            if ("skyblockMagmaward" === mm) return void wm.magmaward.rO(Tm);
            if ("skyblockGlowtide" === mm) return void wm.glowtide.rO(Tm);
            if ("skyblockGlowMeter" === mm) return void wm.glowMeter.rO(Tm);
            if ("skyblockHushWait" === mm) return void wm.hushWait.rO(Tm);
            if ("skyblockPassage" === mm) {
              const mm = Tm;
              return wm.passage.rO(mm), wm.reachLog.receivePassagePhase(mm.passagePhase), nm ??= (0, cm.r)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: wm.passage.show
              }), void wm.keepersChair.receivePassage({
                keepersChairPassagePhase: mm.passagePhase,
                keepersChairPassageNextPhase: mm.passageNextPhase,
                keepersChairPassageTurnsInMs: mm.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === mm) {
              const mm = Tm;
              return wm.tideCharts.rO(mm), void(mm.tideCharts.length > 0 && (Jm ??= (0, cm.r)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: wm.tideCharts.show
              })))
            }
            if (mm === Bm.t) {
              var hm;
              const {
                hookId: mm,
                waiting: fm
              } = Tm;
              return void um.hookWaiting(mm, null !== (hm = null === fm || void 0 === fm ? void 0 : fm.remainingMs) && void 0 !== hm ? hm : null)
            }
            if ("skyblockBiteTell" === mm) return void Mm.receiveTell(Tm);
            if ("skyblockSmuggler" === mm) return void wm.smuggler.rO(Tm);
            if ("skyblockKeepersChair" === mm) return wm.keepersChair.rO(Tm), void wm.lampLight.setAtChair(wm.keepersChair.isAtChair());
            if ("skyblockLampLight" === mm) {
              const mm = Tm;
              var Am;
              if (wm.lampLight.rO(mm), mm.lampLightReleasing) Qm ??= (0, cm.r)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  wm.lampLight.setRelease(!1)
                }
              });
              else null === (Am = Qm) || void 0 === Am || Am(), Qm = void 0;
              return
            }
            if ("skyblockRegulars" === mm) return void wm.regulars.rO(Tm);
            if ("skyblockHiddenWaters" === mm) return void wm.hiddenWaters.rO(Tm);
            if ("skyblockReachLog" === mm) return wm.reachLog.rO(Tm), void(Km ??= (0, cm.r)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Xh
              },
              onClick: wm.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === mm) {
              for (const [mm, fm, hm, Am] of Tm) Nm.zN(mm, fm, hm, Am);
              return
            }
            if ("skyblockHud" === mm) wm.receiveHud(Tm);
            else if ("skyblockMap" === mm) wm.map.rO(Tm);
            else if (mm === Lm.d) wm.skills.rO(Tm);
            else if (mm === Sm && "dialogue" === Tm.kind) wm.dialogue.rO(Tm);
            else if (mm === Sm) wm.quests.rO(Tm);
            else if ("skyblockDungeons" === mm) wm.dungeons.rO(Tm);
            else if ("sbCollections" === mm) wm.collections.rO(Tm);
            else if ("skyblockQuestGraph" === mm) wm.questGraph.rO(Tm);
            else {
              if ("skyblockAutographs" !== mm) return;
              wm.autographs.rO(Tm)
            }
            if (!im && wm.map.getSnapshot().enabled) {
              const mm = (0, cm.r)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: wm.map.show
                }),
                Tm = (0, tm.u)(wm.map.show);
              im = () => {
                mm(), Tm()
              }
            }!Rm && wm.skills.getSnapshot().enabled && (Rm = (0, cm.r)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: wm.skills.show
            })), !Ym && wm.collections.getSnapshot().enabled && (Ym = (0, cm.r)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: wm.collections.show
            })), !pm && wm.quests.getSnapshot().enabled && (pm = (0, cm.r)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: wm.quests.show
            })), !Zm && wm.autographs.getSnapshot().enabled && (Zm = (0, cm.r)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: wm.autographs.show
            }));
            const am = wm.dungeons.getSnapshot().enabled;
            var xm;
            (Rm || pm || am) && Om !== am && (Om = am, null === (xm = om) || void 0 === xm || xm(), om = (0, cm.r)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: XT
              },
              disabled: !am,
              panel: !0,
              onClick: wm.dungeons.show
            }));
            Dm || (Dm = (0, tm.w)((0, zm.createElement)(Nw, {
              controller: wm
            }), {
              content: (0, zm.createElement)(Gw, {
                controller: wm
              }),
              onClose: wm.close
            }))
          },
          DE: () => {
            var mm;
            for (const Tm of Wm.values()) Tm.DE();
            em.DE(Nm), gm.DE(), null === (mm = Gm) || void 0 === mm || mm.DE(), wm.skills.DE(), wm.quests.DE(), wm.dailyReward.DE(), wm.mailbox.DE(), wm.map.DE()
          }
        }
      }
  },
  36444: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      d: () => hm
    });
    const hm = "skyblockSkills",
      Am = "skills_test_gym"
  },
  34315: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      f: () => xm
    });
    const hm = [{
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

    function Am(mm) {
      let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof mm) {
        if (!Number.isFinite(mm)) return "0";
        if (Math.abs(mm) < 100) {
          const Tm = mm < 0 ? "-" : "",
            fm = Math.abs(mm);
          return fm >= 10 ? `${Tm}${fm.toFixed(1).replace(/\.0$/,"")}` : `${Tm}${fm.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Tm = BigInt(Math.floor(mm))
      } else Tm = mm;
      const Am = Tm < 0n ? -Tm : Tm,
        am = Tm < 0n ? "-" : "",
        xm = Am.toString();
      if (xm.length <= fm) return `${am}${xm}`;
      const wm = 3 * Math.floor((xm.length - 1) / 3);
      if (wm < 3) return `${am}${xm}`;
      if (wm > 3 * hm.length) {
        const mm = xm[0],
          Tm = xm.slice(1, 3).replace(/0+$/, "");
        return `${am}${Tm?`${mm}.${Tm}`:mm}e${xm.length-1}`
      }
      const {
        threshold: Dm,
        suffix: im
      } = hm[hm.length - wm / 3], Rm = Am / Dm, pm = Number(1000n * (Am % Dm) / Dm), Em = Number(Rm) + pm / 1e3;
      let om;
      return om = Em >= 100 ? Math.floor(Em).toString() : Em >= 10 ? Em.toFixed(1).replace(/\.0$/, "") : Em.toFixed(2).replace(/\.?0+$/, ""), `${am}${om}${im}`
    }
    const am = hm.map((mm => {
      let {
        threshold: Tm,
        suffix: fm
      } = mm;
      return {
        threshold: Number(Tm),
        suffix: fm
      }
    })).filter((mm => {
      let {
        threshold: Tm
      } = mm;
      return Number.isFinite(Tm)
    }));

    function xm(mm) {
      const Tm = Math.abs(mm),
        fm = mm < 0 ? "-" : "";
      for (const {
          threshold: hm,
          suffix: Am
        }
        of am)
        if (Tm >= hm) {
          const mm = Tm / hm;
          if (mm >= 1e3) return `${fm}${Tm.toExponential(2).replace("e+","e")}`;
          let am;
          return am = mm >= 100 ? Math.floor(mm).toString() : mm >= 10 ? mm.toFixed(1).replace(/\.0$/, "") : mm.toFixed(2).replace(/\.?0+$/, ""), `${fm}${am}${Am}`
        } return `${fm}${Tm}`
    }
  },
  38645: (mm, Tm, fm) => {
    var hm = {
      "./combat_1.png": 38647,
      "./dungeon_crumbling_crypt.png": 38650,
      "./dungeon_frozen_hollow.png": 38659,
      "./dungeon_wildwood_grove.png": 38662,
      "./dungeons.png": 38665,
      "./farming_1.png": 38671,
      "./fishing_1.png": 38674,
      "./hub.png": 38683,
      "./island.png": 38692,
      "./mining_1.png": 38695,
      "./mining_1_bridge.png": 38702,
      "./mining_1_gallery.png": 38708,
      "./mining_1_hollow.png": 38714,
      "./mining_1_village.png": 38721
    };

    function Am(mm) {
      var Tm = am(mm);
      return fm(Tm)
    }

    function am(mm) {
      if (!fm.o(hm, mm)) {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }
      return hm[mm]
    }
    Am.keys = function() {
      return Object.keys(hm)
    }, Am.resolve = am, mm.exports = Am, Am.id = 38645
  },
  38647: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38650: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38659: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38662: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38665: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38671: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38674: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38683: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38692: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38695: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38702: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38708: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38714: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38721: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18308: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20446: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22768: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24321: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25953: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25972: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38632: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);