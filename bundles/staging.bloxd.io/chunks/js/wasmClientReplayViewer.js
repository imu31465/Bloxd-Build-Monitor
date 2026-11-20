export const id = 57;
export const ids = [57];
export const modules = {
  36670: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      h: () => tk
    });
    const Rk = "data-replay-ui-active",
      tk = [{
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
  36674: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      g: () => Vk,
      h: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(36670);

    function Xk() {
      const kk = {};
      for (const {
          group: Fk
        }
        of ak.h) kk[Fk] = !0;
      return kk
    }
    let bk = Xk();

    function wk() {
      tk.o.Hf("replayViewer|uiVisibilityChanged")
    }

    function dk() {
      return bk
    }

    function sk(kk, Fk) {
      bk[kk] !== Fk && (bk = {
        ...bk,
        [kk]: Fk
      }, "nametag" === kk && Rk.c.set({
        areNametagsHidden: !Fk
      }), wk())
    }

    function Vk() {
      bk = Xk(), Rk.c.set({
        areNametagsHidden: !1
      }), wk()
    }
  },
  42025: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      HOLD_TIMEOUT_MS: () => bk,
      ReplayViewer: () => dk
    });
    var Rk = Bk(36659),
      tk = Bk(36674),
      ak = Bk(4524),
      Xk = Bk(41998);
    const bk = 1e4,
      wk = new Set(["ie"]);
    class dk {
      constructor(kk) {
        var Fk;
        this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Fk = kk.now) && void 0 !== Fk ? Fk : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== ak.Cc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Hb() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Rk.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(kk, Fk) {
        var Bk, tk, Xk, bk;
        const {
          client: wk
        } = this.deps;
        if (!this.playback) {
          if (!wk.setPlayback(!0)) throw new Error(Rk.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const dk = this.epoch;
        let sk;
        try {
          sk = await wk.open(kk)
        } finally {
          this.loadingOpens--
        }
        if (dk !== this.epoch) throw new Error(Rk.d.coreStopped.text);
        if ("opening" !== sk) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const kk = function(kk) {
            switch (kk) {
              case "reloading":
                return null;
              case "stopped":
              case ak.sc.ModuleTrap:
                return Rk.d.coreStopped;
              case ak.sc.ModuleLoad:
                return Rk.d.viewerLoadFailed;
              case ak.sc.TooLarge:
                return Rk.d.cantOpen
            }
          }(sk);
          if (null === kk) return;
          throw new Error(kk.text)
        }
        return this.rejectSave(new Error(Rk.d.saveClosed.text)), this.fileName = null !== (Bk = null !== (tk = Fk.fileName) && void 0 !== tk ? tk : null === (Xk = Fk.fileHandle) || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Bk ? Bk : null, this.fileHandle = null !== (bk = Fk.fileHandle) && void 0 !== bk ? bk : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((kk, Fk) => {
          this.pendingOpen = {
            resolve: kk,
            reject: Fk
          }
        }))
      }
      play() {
        this.holds.has("ie") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ie")
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this.lastView;
        null !== Bk && (Fk || kk < Bk.yJ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
      }
      setSpeed(kk) {
        this.deps.client.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.client.setCameraMode(kk)
      }
      cycleCameraMode() {
        const kk = this.lastView;
        null !== kk && kk.state !== ak.Cc.None && this.setCameraMode(Xk.c[(Xk.c.indexOf(kk.cameraMode) + 1) % Xk.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(kk) {
        this.edited(this.deps.client.setKeyframe(kk))
      }
      moveKeyframe(kk, Fk) {
        this.edited(this.deps.client.moveKeyframe(kk, Fk))
      }
      deleteKeyframes(kk, Fk) {
        this.edited(this.deps.client.deleteKeyframes(kk, Fk))
      }
      setMark(kk) {
        this.edited(this.deps.client.setMark(kk))
      }
      crop(kk, Fk) {
        return !(Fk <= kk) && (null !== this.pendingSave ? (this.deps.notify(Rk.d.saveBusy), !1) : !!this.deps.client.crop(kk, Fk) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Rk.d.saveBusy.text)) : new Promise(((kk, Fk) => {
          const Bk = {
            resolve: kk,
            reject: Fk
          };
          this.pendingSave = Bk, this.editsAtSave = this.edits, this.deps.client.save((0, Xk.f)()).then((kk => {
            this.pendingSave === Bk && this.saveStarted(kk)
          }), (kk => {
            this.pendingSave === Bk && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
          }))
        }))
      }
      saveStarted(kk) {
        switch (kk) {
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
      markSaved(kk, Fk) {
        var Bk, Rk;
        this.fileHandle = kk, this.fileName = null !== (Bk = null !== (Rk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Rk ? Rk : Fk) && void 0 !== Bk ? Bk : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Rk.d.coreStopped.text)), this.rejectSave(new Error(Rk.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var kk, Fk, Bk;
        const Rk = this.deps.client.view(),
          Xk = Rk !== this.lastView;
        this.lastView = Rk, this.opening && null !== Rk && Rk.state !== ak.Cc.None && Rk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, tk.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Rk && Rk.state === ak.Cc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Rk && Rk.state !== ak.Cc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const dk = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Bk = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Bk)) && void 0 !== kk ? kk : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && dk && this.release("opening"), this.holds.has("seek") && dk && this.release("seek"), this.holds.has("crop") && !this.cropRunning && dk && this.release("crop");
        const sk = this.now();
        for (const [tk, ak] of this.holds) !wk.has(tk) && sk - ak >= bk && (this.release(tk), "opening" === tk && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Xk && this.deps.onChange()
      }
      cropped() {
        (0, tk.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(kk) {
        switch (kk.reason) {
          case ak.sc.TooLarge:
            break;
          case ak.sc.Open:
          case ak.sc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Rk.d.cantOpen), this.settleOpen(new Error(Rk.d.cantOpen.text));
            break;
          case ak.sc.Crop:
            if (kk.code === ak.rc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Rk.d.cropFailed);
            break;
          case ak.sc.ModuleTrap:
          case ak.sc.ModuleLoad:
          case ak.sc.Port:
            this.moduleEnded(kk.reason === ak.sc.ModuleTrap ? Rk.d.coreStopped : Rk.d.cantOpen);
            break;
          case ak.sc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(kk) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(kk), this.settleOpen(new Error(kk.text))
      }
      saveDone(kk) {
        const Fk = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Fk || void 0 === Fk || Fk.resolve(kk)
      }
      saveFailed(kk) {
        this.rejectSave(new Error(kk ? Rk.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(kk) {
        kk && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Rk.d.cropBusy.text)) : this.deps.notify(Rk.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(kk) {
        const Fk = this.pendingOpen;
        this.pendingOpen = null, null === kk ? null === Fk || void 0 === Fk || Fk.resolve() : null === Fk || void 0 === Fk || Fk.reject(kk)
      }
      rejectSave(kk) {
        const Fk = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Fk || void 0 === Fk || Fk.reject(kk)
      }
      hold(kk) {
        const Fk = 0 === this.holds.size;
        this.holds.set(kk, this.now()), Fk && this.deps.setHoldDraws(!0)
      }
      release(kk) {
        this.holds.delete(kk) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);