export const id = 61;
export const ids = [61];
export const modules = {
  37226: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      g: () => lt
    });
    var Ot = Vt(710),
      qt = Vt(39),
      Dt = Vt(37182);
    const mt = "replayFileKeptForReload",
      dt = "replayFileKeptForReloadAt",
      jt = "replayFileKeptForReloadTab",
      Ht = 3e5,
      Xt = 5e3;
    async function Qt(tt, et) {
      const Vt = Date.now(),
        Dt = {
          at: Vt,
          bytes: tt,
          source: et
        },
        Ht = await Promise.race([(async () => await qt.c.setItem(dt, Vt) && qt.c.setItem(mt, Dt))(), (0, Ot.G)(Xt).then((() => !1))]);
      Ht || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Qt = {
        at: Vt,
        hE: Ht
      };
      qt.h.setItem(jt, Qt)
    }
    async function lt() {
      var tt;
      const et = qt.h.getItem(jt);
      null !== et && qt.h.removeItem(jt);
      const Vt = Date.now(),
        Ot = await qt.c.getItem(dt),
        Xt = null !== et && Vt - et.at <= Ht,
        Qt = null !== et && Ot === et.at;
      let lt = null;
      if (null !== Ot && (Qt || ("number" !== typeof Ot || Vt - Ot > Ht)) && (lt = Xt && Qt && et.hE ? await qt.c.getItem(mt) : null, await Promise.all([qt.c.removeItem(dt), qt.c.removeItem(mt)])), !Xt) return null;
      if ((null === (tt = lt) || void 0 === tt ? void 0 : tt.at) !== et.at) throw new Error(Dt.d.replayNotKept.text);
      return {
        bytes: lt.bytes,
        source: lt.source
      }
    }
  },
  37220: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => Dt,
      j: () => qt
    });
    const Ot = [9];

    function qt(tt) {
      return Ot.includes(tt)
    }

    function Dt(tt) {
      return null !== tt && tt >= 3 && tt < Ot[0]
    }
  },
  37238: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => qt
    });
    const Ot = "data-replay-ui-active",
      qt = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  37243: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht,
      g: () => Qt,
      i: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(37238);

    function mt() {
      const tt = {};
      for (const {
          group: et
        }
        of Dt.g) tt[et] = !0;
      return tt
    }
    let dt = mt();

    function jt() {
      qt.j.sw("replayViewer|uiVisibilityChanged")
    }

    function Ht() {
      return dt
    }

    function Xt(tt, et) {
      dt[tt] !== et && (dt = {
        ...dt,
        [tt]: et
      }, "nametag" === tt && Ot.b.set({
        areNametagsHidden: !et
      }), jt())
    }

    function Qt() {
      dt = mt(), Ot.b.set({
        areNametagsHidden: !1
      }), jt()
    }
  },
  60845: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      HOLD_TIMEOUT_MS: () => Ht,
      ReplayViewer: () => Qt
    });
    var Ot = Vt(37182),
      qt = Vt(37226),
      Dt = Vt(37220),
      mt = Vt(37243),
      dt = Vt(4960),
      jt = Vt(42829);
    const Ht = 1e4,
      Xt = new Set(["YE"]);
    class Qt {
      constructor(tt) {
        var et;
        this.deps = tt, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (et = tt.now) && void 0 !== et ? et : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== dt.wd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Pd() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Ot.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(tt, et) {
        var Vt, Dt, mt, jt;
        const {
          client: Ht
        } = this.deps;
        if (!this.playback) {
          if (!Ht.setPlayback(!0)) throw new Error(Ot.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Xt = this.epoch;
        let Qt;
        try {
          Qt = await Ht.open(tt, (() => (0, qt.c)(tt, et)))
        } finally {
          this.loadingOpens--
        }
        if (Xt !== this.epoch && "reloading" !== Qt) throw new Error(Ot.d.coreStopped.text);
        if ("opening" !== Qt) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const tt = function(tt) {
            switch (tt) {
              case "reloading":
                return null;
              case "stopped":
              case dt.md.ModuleTrap:
                return Ot.d.coreStopped;
              case dt.md.ModuleLoad:
                return Ot.d.viewerLoadFailed;
              case dt.md.TooLarge:
                return Ot.d.cantOpen
            }
          }(Qt);
          if (null === tt) return;
          throw new Error(tt.text)
        }
        return this.rejectSave(new Error(Ot.d.saveClosed.text)), this.fileName = null !== (Vt = null !== (Dt = et.fileName) && void 0 !== Dt ? Dt : null === (mt = et.fileHandle) || void 0 === mt ? void 0 : mt.name) && void 0 !== Vt ? Vt : null, this.fileHandle = null !== (jt = et.fileHandle) && void 0 !== jt ? jt : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((tt, et) => {
          this.pendingOpen = {
            resolve: tt,
            reject: et
          }
        }))
      }
      play() {
        this.holds.has("YE") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("YE")
      }
      seek(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this.lastView;
        null !== Vt && (et || tt < Vt.BQ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(tt, et)
      }
      setSpeed(tt) {
        this.deps.client.setSpeed(tt)
      }
      setCameraMode(tt) {
        this.deps.client.setCameraMode(tt)
      }
      cycleCameraMode() {
        const tt = this.lastView;
        null !== tt && tt.state !== dt.wd.None && this.setCameraMode(jt.b[(jt.b.indexOf(tt.cameraMode) + 1) % jt.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(tt) {
        this.edited(this.deps.client.setKeyframe(tt))
      }
      moveKeyframe(tt, et) {
        this.edited(this.deps.client.moveKeyframe(tt, et))
      }
      deleteKeyframes(tt, et) {
        this.edited(this.deps.client.deleteKeyframes(tt, et))
      }
      setMark(tt) {
        this.edited(this.deps.client.setMark(tt))
      }
      crop(tt, et) {
        return !(et <= tt) && (null !== this.pendingSave ? (this.deps.notify(Ot.d.saveBusy), !1) : !!this.deps.client.crop(tt, et) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Ot.d.saveBusy.text)) : new Promise(((tt, et) => {
          const Vt = {
            resolve: tt,
            reject: et
          };
          this.pendingSave = Vt, this.editsAtSave = this.edits, this.deps.client.save((0, jt.c)()).then((tt => {
            this.pendingSave === Vt && this.saveStarted(tt)
          }), (tt => {
            this.pendingSave === Vt && this.rejectSave(tt instanceof Error ? tt : new Error(String(tt)))
          }))
        }))
      }
      saveStarted(tt) {
        switch (tt) {
          case "sealing":
            return;
          case "busy":
            return void this.saveFailed(!0);
          case "refused":
            return void(this.saveRefused = !0);
          case "tooLarge":
            return void this.saveFailed(!1)
        }
      }
      markSaved(tt, et) {
        var Vt, Ot;
        this.fileHandle = tt, this.fileName = null !== (Vt = null !== (Ot = null === tt || void 0 === tt ? void 0 : tt.name) && void 0 !== Ot ? Ot : et) && void 0 !== Vt ? Vt : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Ot.d.coreStopped.text)), this.rejectSave(new Error(Ot.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var tt, et, Vt;
        const Ot = this.deps.client.view(),
          qt = Ot !== this.lastView;
        this.lastView = Ot, this.opening && null !== Ot && Ot.state !== dt.wd.None && Ot.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, mt.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Ot && Ot.state === dt.wd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Ot && Ot.state !== dt.wd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Dt = 0 === this.settleFrames && 0 === (null !== (tt = null === (et = (Vt = this.deps).meshPending) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Dt && this.release("opening"), this.holds.has("seek") && Dt && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Dt && this.release("crop");
        const jt = this.now();
        for (const [mt, dt] of this.holds) !Xt.has(mt) && jt - dt >= Ht && this.release(mt);
        this.saveRefused && !this.cropping && this.saveFailed(!1), qt && this.deps.onChange()
      }
      cropped() {
        (0, mt.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(tt) {
        switch (tt.reason) {
          case dt.md.TooLarge:
            break;
          case dt.md.Open:
          case dt.md.NothingStaged: {
            this.opening = !1, this.release("opening");
            const et = (0, Dt.g)(tt.version) ? Ot.d.replayTooOld : Ot.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(et), this.settleOpen(new Error(et.text));
            break
          }
          case dt.md.Crop:
            if (tt.code === dt.ld.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Ot.d.cropFailed);
            break;
          case dt.md.ModuleTrap:
          case dt.md.ModuleLoad:
          case dt.md.Port:
            this.moduleEnded(tt.reason === dt.md.ModuleTrap ? Ot.d.coreStopped : Ot.d.cantOpen);
            break;
          case dt.md.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${tt.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(tt) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(tt), this.settleOpen(new Error(tt.text))
      }
      saveDone(tt) {
        const et = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === et || void 0 === et || et.resolve(tt)
      }
      saveFailed(tt) {
        this.rejectSave(new Error(tt ? Ot.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(tt) {
        tt && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Ot.d.cropBusy.text)) : this.deps.notify(Ot.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(tt) {
        const et = this.pendingOpen;
        this.pendingOpen = null, null === tt ? null === et || void 0 === et || et.resolve() : null === et || void 0 === et || et.reject(tt)
      }
      rejectSave(tt) {
        const et = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === et || void 0 === et || et.reject(tt)
      }
      hold(tt) {
        const et = 0 === this.holds.size;
        this.holds.set(tt, this.now()), et && this.deps.setHoldDraws(!0)
      }
      release(tt) {
        this.holds.delete(tt) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);