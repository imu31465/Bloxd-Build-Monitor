export const id = 53;
export const ids = [53];
export const modules = {
  35950: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    });
    const VB = "data-replay-ui-active",
      yB = [{
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
  35959: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      e: () => kB,
      g: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(35950);

    function lB() {
      const BB = {};
      for (const {
          group: TB
        }
        of pB.g) BB[TB] = !0;
      return BB
    }
    let JB = lB();

    function YB() {
      yB.h.yH("replayViewer|uiVisibilityChanged")
    }

    function gB() {
      return JB
    }

    function oB(BB, TB) {
      JB[BB] !== TB && (JB = {
        ...JB,
        [BB]: TB
      }, "nametag" === BB && VB.d.set({
        areNametagsHidden: !TB
      }), YB())
    }

    function kB() {
      JB = lB(), VB.d.set({
        areNametagsHidden: !1
      }), YB()
    }
  },
  41304: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      HOLD_TIMEOUT_MS: () => JB,
      ReplayViewer: () => gB
    });
    var VB = dB(35941),
      yB = dB(35959),
      pB = dB(4186),
      lB = dB(41274);
    const JB = 1e4,
      YB = new Set(["pD"]);
    class gB {
      constructor(BB) {
        var TB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (TB = BB.now) && void 0 !== TB ? TB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== pB.hd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Dg() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? VB.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, TB) {
        var dB, yB, lB, JB;
        const {
          client: YB
        } = this.deps;
        if (!this.playback) {
          if (!YB.setPlayback(!0)) throw new Error(VB.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const gB = this.epoch;
        let oB;
        try {
          oB = await YB.open(BB)
        } finally {
          this.loadingOpens--
        }
        if (gB !== this.epoch) throw new Error(VB.d.coreStopped.text);
        if ("opening" !== oB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case pB.Wc.ModuleTrap:
                return VB.d.coreStopped;
              case pB.Wc.ModuleLoad:
                return VB.d.viewerLoadFailed;
              case pB.Wc.TooLarge:
                return VB.d.cantOpen
            }
          }(oB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(VB.d.saveClosed.text)), this.fileName = null !== (dB = null !== (yB = TB.fileName) && void 0 !== yB ? yB : null === (lB = TB.fileHandle) || void 0 === lB ? void 0 : lB.name) && void 0 !== dB ? dB : null, this.fileHandle = null !== (JB = TB.fileHandle) && void 0 !== JB ? JB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, TB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: TB
          }
        }))
      }
      play() {
        this.holds.has("pD") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("pD")
      }
      seek(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this.lastView;
        null !== dB && (TB || BB < dB.dL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, TB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== pB.hd.None && this.setCameraMode(lB.b[(lB.b.indexOf(BB.cameraMode) + 1) % lB.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, TB) {
        this.edited(this.deps.client.moveKeyframe(BB, TB))
      }
      deleteKeyframes(BB, TB) {
        this.edited(this.deps.client.deleteKeyframes(BB, TB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, TB) {
        return !(TB <= BB) && (null !== this.pendingSave ? (this.deps.notify(VB.d.saveBusy), !1) : !!this.deps.client.crop(BB, TB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(VB.d.saveBusy.text)) : new Promise(((BB, TB) => {
          const dB = {
            resolve: BB,
            reject: TB
          };
          this.pendingSave = dB, this.editsAtSave = this.edits, this.deps.client.save((0, lB.d)()).then((BB => {
            this.pendingSave === dB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === dB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
          }))
        }))
      }
      saveStarted(BB) {
        switch (BB) {
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
      markSaved(BB, TB) {
        var dB, VB;
        this.fileHandle = BB, this.fileName = null !== (dB = null !== (VB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== VB ? VB : TB) && void 0 !== dB ? dB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(VB.d.coreStopped.text)), this.rejectSave(new Error(VB.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, TB, dB;
        const VB = this.deps.client.view(),
          lB = VB !== this.lastView;
        this.lastView = VB, this.opening && null !== VB && VB.state !== pB.hd.None && VB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yB.e)()), this.cropAsked ? (this.cropAsked = !1, null !== VB && VB.state === pB.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== VB && VB.state !== pB.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const gB = 0 === this.settleFrames && 0 === (null !== (BB = null === (TB = (dB = this.deps).meshPending) || void 0 === TB ? void 0 : TB.call(dB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && gB && this.release("opening"), this.holds.has("seek") && gB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && gB && this.release("crop");
        const oB = this.now();
        for (const [yB, pB] of this.holds) !YB.has(yB) && oB - pB >= JB && (this.release(yB), "opening" === yB && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), lB && this.deps.onChange()
      }
      cropped() {
        (0, yB.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case pB.Wc.TooLarge:
            break;
          case pB.Wc.Open:
          case pB.Wc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(VB.d.cantOpen), this.settleOpen(new Error(VB.d.cantOpen.text));
            break;
          case pB.Wc.Crop:
            if (BB.code === pB.Tc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(VB.d.cropFailed);
            break;
          case pB.Wc.ModuleTrap:
          case pB.Wc.ModuleLoad:
          case pB.Wc.Port:
            this.moduleEnded(BB.reason === pB.Wc.ModuleTrap ? VB.d.coreStopped : VB.d.cantOpen);
            break;
          case pB.Wc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${BB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(BB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(BB), this.settleOpen(new Error(BB.text))
      }
      saveDone(BB) {
        const TB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === TB || void 0 === TB || TB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? VB.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(VB.d.cropBusy.text)) : this.deps.notify(VB.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const TB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === TB || void 0 === TB || TB.resolve() : null === TB || void 0 === TB || TB.reject(BB)
      }
      rejectSave(BB) {
        const TB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === TB || void 0 === TB || TB.reject(BB)
      }
      hold(BB) {
        const TB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), TB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);