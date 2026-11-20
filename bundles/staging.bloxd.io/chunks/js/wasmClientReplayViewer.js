export const id = 57;
export const ids = [57];
export const modules = {
  36760: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      e: () => Ku
    });
    const Eu = "data-replay-ui-active",
      Ku = [{
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
  36762: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      f: () => ru,
      j: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(36760);

    function mu() {
      const uu = {};
      for (const {
          group: Ru
        }
        of Qu.e) uu[Ru] = !0;
      return uu
    }
    let Ju = mu();

    function Nu() {
      Ku.k.Op("replayViewer|uiVisibilityChanged")
    }

    function Xu() {
      return Ju
    }

    function Vu(uu, Ru) {
      Ju[uu] !== Ru && (Ju = {
        ...Ju,
        [uu]: Ru
      }, "nametag" === uu && Eu.d.set({
        areNametagsHidden: !Ru
      }), Nu())
    }

    function ru() {
      Ju = mu(), Eu.d.set({
        areNametagsHidden: !1
      }), Nu()
    }
  },
  42174: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      HOLD_TIMEOUT_MS: () => Ju,
      ReplayViewer: () => Xu
    });
    var Eu = yu(36755),
      Ku = yu(36762),
      Qu = yu(4562),
      mu = yu(42132);
    const Ju = 1e4,
      Nu = new Set(["ix"]);
    class Xu {
      constructor(uu) {
        var Ru;
        this.deps = uu, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Ru = uu.now) && void 0 !== Ru ? Ru : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Qu.bd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get jJ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Eu.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(uu, Ru) {
        var yu, Ku, mu, Ju;
        const {
          client: Nu
        } = this.deps;
        if (!this.playback) {
          if (!Nu.setPlayback(!0)) throw new Error(Eu.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Xu = this.epoch;
        let Vu;
        try {
          Vu = await Nu.open(uu)
        } finally {
          this.loadingOpens--
        }
        if (Xu !== this.epoch) throw new Error(Eu.d.coreStopped.text);
        if ("opening" !== Vu) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const uu = function(uu) {
            switch (uu) {
              case "reloading":
                return null;
              case "stopped":
              case Qu.Xc.ModuleTrap:
                return Eu.d.coreStopped;
              case Qu.Xc.ModuleLoad:
                return Eu.d.viewerLoadFailed;
              case Qu.Xc.TooLarge:
                return Eu.d.cantOpen
            }
          }(Vu);
          if (null === uu) return;
          throw new Error(uu.text)
        }
        return this.rejectSave(new Error(Eu.d.saveClosed.text)), this.fileName = null !== (yu = null !== (Ku = Ru.fileName) && void 0 !== Ku ? Ku : null === (mu = Ru.fileHandle) || void 0 === mu ? void 0 : mu.name) && void 0 !== yu ? yu : null, this.fileHandle = null !== (Ju = Ru.fileHandle) && void 0 !== Ju ? Ju : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((uu, Ru) => {
          this.pendingOpen = {
            resolve: uu,
            reject: Ru
          }
        }))
      }
      play() {
        this.holds.has("ix") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ix")
      }
      seek(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this.lastView;
        null !== yu && (Ru || uu < yu.sr) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(uu, Ru)
      }
      setSpeed(uu) {
        this.deps.client.setSpeed(uu)
      }
      setCameraMode(uu) {
        this.deps.client.setCameraMode(uu)
      }
      cycleCameraMode() {
        const uu = this.lastView;
        null !== uu && uu.state !== Qu.bd.None && this.setCameraMode(mu.c[(mu.c.indexOf(uu.cameraMode) + 1) % mu.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(uu) {
        this.edited(this.deps.client.setKeyframe(uu))
      }
      moveKeyframe(uu, Ru) {
        this.edited(this.deps.client.moveKeyframe(uu, Ru))
      }
      deleteKeyframes(uu, Ru) {
        this.edited(this.deps.client.deleteKeyframes(uu, Ru))
      }
      setMark(uu) {
        this.edited(this.deps.client.setMark(uu))
      }
      crop(uu, Ru) {
        return !(Ru <= uu) && (null !== this.pendingSave ? (this.deps.notify(Eu.d.saveBusy), !1) : !!this.deps.client.crop(uu, Ru) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Eu.d.saveBusy.text)) : new Promise(((uu, Ru) => {
          const yu = {
            resolve: uu,
            reject: Ru
          };
          this.pendingSave = yu, this.editsAtSave = this.edits, this.deps.client.save((0, mu.g)()).then((uu => {
            this.pendingSave === yu && this.saveStarted(uu)
          }), (uu => {
            this.pendingSave === yu && this.rejectSave(uu instanceof Error ? uu : new Error(String(uu)))
          }))
        }))
      }
      saveStarted(uu) {
        switch (uu) {
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
      markSaved(uu, Ru) {
        var yu, Eu;
        this.fileHandle = uu, this.fileName = null !== (yu = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.name) && void 0 !== Eu ? Eu : Ru) && void 0 !== yu ? yu : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Eu.d.coreStopped.text)), this.rejectSave(new Error(Eu.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var uu, Ru, yu;
        const Eu = this.deps.client.view(),
          mu = Eu !== this.lastView;
        this.lastView = Eu, this.opening && null !== Eu && Eu.state !== Qu.bd.None && Eu.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ku.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Eu && Eu.state === Qu.bd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Eu && Eu.state !== Qu.bd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Xu = 0 === this.settleFrames && 0 === (null !== (uu = null === (Ru = (yu = this.deps).meshPending) || void 0 === Ru ? void 0 : Ru.call(yu)) && void 0 !== uu ? uu : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Xu && this.release("opening"), this.holds.has("seek") && Xu && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Xu && this.release("crop");
        const Vu = this.now();
        for (const [Ku, Qu] of this.holds) !Nu.has(Ku) && Vu - Qu >= Ju && (this.release(Ku), "opening" === Ku && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), mu && this.deps.onChange()
      }
      cropped() {
        (0, Ku.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(uu) {
        switch (uu.reason) {
          case Qu.Xc.TooLarge:
            break;
          case Qu.Xc.Open:
          case Qu.Xc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Eu.d.cantOpen), this.settleOpen(new Error(Eu.d.cantOpen.text));
            break;
          case Qu.Xc.Crop:
            if (uu.code === Qu.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Eu.d.cropFailed);
            break;
          case Qu.Xc.ModuleTrap:
          case Qu.Xc.ModuleLoad:
          case Qu.Xc.Port:
            this.moduleEnded(uu.reason === Qu.Xc.ModuleTrap ? Eu.d.coreStopped : Eu.d.cantOpen);
            break;
          case Qu.Xc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${uu.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(uu) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(uu), this.settleOpen(new Error(uu.text))
      }
      saveDone(uu) {
        const Ru = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Ru || void 0 === Ru || Ru.resolve(uu)
      }
      saveFailed(uu) {
        this.rejectSave(new Error(uu ? Eu.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(uu) {
        uu && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Eu.d.cropBusy.text)) : this.deps.notify(Eu.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(uu) {
        const Ru = this.pendingOpen;
        this.pendingOpen = null, null === uu ? null === Ru || void 0 === Ru || Ru.resolve() : null === Ru || void 0 === Ru || Ru.reject(uu)
      }
      rejectSave(uu) {
        const Ru = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Ru || void 0 === Ru || Ru.reject(uu)
      }
      hold(uu) {
        const Ru = 0 === this.holds.size;
        this.holds.set(uu, this.now()), Ru && this.deps.setHoldDraws(!0)
      }
      release(uu) {
        this.holds.delete(uu) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);