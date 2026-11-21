export const id = 58;
export const ids = [58];
export const modules = {
  37154: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      f: () => Nd
    });
    const pd = "data-replay-ui-active",
      Nd = [{
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
  37160: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Cd,
      e: () => od,
      h: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(37154);

    function Pd() {
      const dd = {};
      for (const {
          group: Jd
        }
        of Wd.f) dd[Jd] = !0;
      return dd
    }
    let Zd = Pd();

    function gd() {
      Nd.j.nO("replayViewer|uiVisibilityChanged")
    }

    function Cd() {
      return Zd
    }

    function Kd(dd, Jd) {
      Zd[dd] !== Jd && (Zd = {
        ...Zd,
        [dd]: Jd
      }, "nametag" === dd && pd.d.set({
        areNametagsHidden: !Jd
      }), gd())
    }

    function od() {
      Zd = Pd(), pd.d.set({
        areNametagsHidden: !1
      }), gd()
    }
  },
  42535: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      HOLD_TIMEOUT_MS: () => Zd,
      ReplayViewer: () => Cd
    });
    var pd = kd(37141),
      Nd = kd(37160),
      Wd = kd(4680),
      Pd = kd(42497);
    const Zd = 1e4,
      gd = new Set(["EQ"]);
    class Cd {
      constructor(dd) {
        var Jd;
        this.deps = dd, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Jd = dd.now) && void 0 !== Jd ? Jd : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Wd.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get EC() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? pd.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(dd, Jd) {
        var kd, Nd, Pd, Zd;
        const {
          client: gd
        } = this.deps;
        if (!this.playback) {
          if (!gd.setPlayback(!0)) throw new Error(pd.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Cd = this.epoch;
        let Kd;
        try {
          Kd = await gd.open(dd)
        } finally {
          this.loadingOpens--
        }
        if (Cd !== this.epoch) throw new Error(pd.e.coreStopped.text);
        if ("opening" !== Kd) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const dd = function(dd) {
            switch (dd) {
              case "reloading":
                return null;
              case "stopped":
              case Wd.ed.ModuleTrap:
                return pd.e.coreStopped;
              case Wd.ed.ModuleLoad:
                return pd.e.viewerLoadFailed;
              case Wd.ed.TooLarge:
                return pd.e.cantOpen
            }
          }(Kd);
          if (null === dd) return;
          throw new Error(dd.text)
        }
        return this.rejectSave(new Error(pd.e.saveClosed.text)), this.fileName = null !== (kd = null !== (Nd = Jd.fileName) && void 0 !== Nd ? Nd : null === (Pd = Jd.fileHandle) || void 0 === Pd ? void 0 : Pd.name) && void 0 !== kd ? kd : null, this.fileHandle = null !== (Zd = Jd.fileHandle) && void 0 !== Zd ? Zd : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((dd, Jd) => {
          this.pendingOpen = {
            resolve: dd,
            reject: Jd
          }
        }))
      }
      play() {
        this.holds.has("EQ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("EQ")
      }
      seek(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this.lastView;
        null !== kd && (Jd || dd < kd.Do) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(dd, Jd)
      }
      setSpeed(dd) {
        this.deps.client.setSpeed(dd)
      }
      setCameraMode(dd) {
        this.deps.client.setCameraMode(dd)
      }
      cycleCameraMode() {
        const dd = this.lastView;
        null !== dd && dd.state !== Wd.sd.None && this.setCameraMode(Pd.b[(Pd.b.indexOf(dd.cameraMode) + 1) % Pd.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(dd) {
        this.edited(this.deps.client.setKeyframe(dd))
      }
      moveKeyframe(dd, Jd) {
        this.edited(this.deps.client.moveKeyframe(dd, Jd))
      }
      deleteKeyframes(dd, Jd) {
        this.edited(this.deps.client.deleteKeyframes(dd, Jd))
      }
      setMark(dd) {
        this.edited(this.deps.client.setMark(dd))
      }
      crop(dd, Jd) {
        return !(Jd <= dd) && (null !== this.pendingSave ? (this.deps.notify(pd.e.saveBusy), !1) : !!this.deps.client.crop(dd, Jd) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(pd.e.saveBusy.text)) : new Promise(((dd, Jd) => {
          const kd = {
            resolve: dd,
            reject: Jd
          };
          this.pendingSave = kd, this.editsAtSave = this.edits, this.deps.client.save((0, Pd.f)()).then((dd => {
            this.pendingSave === kd && this.saveStarted(dd)
          }), (dd => {
            this.pendingSave === kd && this.rejectSave(dd instanceof Error ? dd : new Error(String(dd)))
          }))
        }))
      }
      saveStarted(dd) {
        switch (dd) {
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
      markSaved(dd, Jd) {
        var kd, pd;
        this.fileHandle = dd, this.fileName = null !== (kd = null !== (pd = null === dd || void 0 === dd ? void 0 : dd.name) && void 0 !== pd ? pd : Jd) && void 0 !== kd ? kd : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(pd.e.coreStopped.text)), this.rejectSave(new Error(pd.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var dd, Jd, kd;
        const pd = this.deps.client.view(),
          Pd = pd !== this.lastView;
        this.lastView = pd, this.opening && null !== pd && pd.state !== Wd.sd.None && pd.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Nd.e)()), this.cropAsked ? (this.cropAsked = !1, null !== pd && pd.state === Wd.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== pd && pd.state !== Wd.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Cd = 0 === this.settleFrames && 0 === (null !== (dd = null === (Jd = (kd = this.deps).meshPending) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Cd && this.release("opening"), this.holds.has("seek") && Cd && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Cd && this.release("crop");
        const Kd = this.now();
        for (const [Nd, Wd] of this.holds) !gd.has(Nd) && Kd - Wd >= Zd && (this.release(Nd), "opening" === Nd && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Pd && this.deps.onChange()
      }
      cropped() {
        (0, Nd.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(dd) {
        switch (dd.reason) {
          case Wd.ed.TooLarge:
            break;
          case Wd.ed.Open:
          case Wd.ed.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(pd.e.cantOpen), this.settleOpen(new Error(pd.e.cantOpen.text));
            break;
          case Wd.ed.Crop:
            if (dd.code === Wd.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(pd.e.cropFailed);
            break;
          case Wd.ed.ModuleTrap:
          case Wd.ed.ModuleLoad:
          case Wd.ed.Port:
            this.moduleEnded(dd.reason === Wd.ed.ModuleTrap ? pd.e.coreStopped : pd.e.cantOpen);
            break;
          case Wd.ed.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(dd) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(dd), this.settleOpen(new Error(dd.text))
      }
      saveDone(dd) {
        const Jd = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Jd || void 0 === Jd || Jd.resolve(dd)
      }
      saveFailed(dd) {
        this.rejectSave(new Error(dd ? pd.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(dd) {
        dd && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(pd.e.cropBusy.text)) : this.deps.notify(pd.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(dd) {
        const Jd = this.pendingOpen;
        this.pendingOpen = null, null === dd ? null === Jd || void 0 === Jd || Jd.resolve() : null === Jd || void 0 === Jd || Jd.reject(dd)
      }
      rejectSave(dd) {
        const Jd = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Jd || void 0 === Jd || Jd.reject(dd)
      }
      hold(dd) {
        const Jd = 0 === this.holds.size;
        this.holds.set(dd, this.now()), Jd && this.deps.setHoldDraws(!0)
      }
      release(dd) {
        this.holds.delete(dd) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);