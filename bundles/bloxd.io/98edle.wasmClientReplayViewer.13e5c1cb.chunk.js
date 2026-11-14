export const id = 49;
export const ids = [49];
export const modules = {
  35169: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      f: () => CW
    });
    const wW = "data-replay-ui-active",
      CW = [{
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
  35171: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW,
      g: () => BW,
      k: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(35169);

    function AW() {
      const WW = {};
      for (const {
          group: RW
        }
        of zR.f) WW[RW] = !0;
      return WW
    }
    let bR = AW();

    function yR() {
      CW.k.Sz("replayViewer|uiVisibilityChanged")
    }

    function NW() {
      return bR
    }

    function eW(WW, RW) {
      bR[WW] !== RW && (bR = {
        ...bR,
        [WW]: RW
      }, "nametag" === WW && wW.b.set({
        areNametagsHidden: !RW
      }), yR())
    }

    function BW() {
      bR = AW(), wW.b.set({
        areNametagsHidden: !1
      }), yR()
    }
  },
  40051: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      HOLD_TIMEOUT_MS: () => bR,
      ReplayViewer: () => NW
    });
    var wW = MW(35161),
      CW = MW(35171),
      zR = MW(3773),
      AW = MW(40011);
    const bR = 1e4,
      yR = new Set(["ww"]);
    class NW {
      constructor(WW) {
        var RW;
        this.deps = WW, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (RW = WW.now) && void 0 !== RW ? RW : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== zR.Lc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get mM() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? wW.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(WW, RW) {
        var MW, CW, AW, bR;
        const {
          client: yR
        } = this.deps;
        if (!this.playback) {
          if (!yR.setPlayback(!0)) throw new Error(wW.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const NW = this.epoch;
        let eW;
        try {
          eW = await yR.open(WW)
        } finally {
          this.loadingOpens--
        }
        if (NW !== this.epoch) throw new Error(wW.d.coreStopped.text);
        if ("opening" !== eW) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const WW = function(WW) {
            switch (WW) {
              case "reloading":
                return null;
              case "stopped":
              case zR.Dc.ModuleTrap:
                return wW.d.coreStopped;
              case zR.Dc.ModuleLoad:
                return wW.d.viewerLoadFailed;
              case zR.Dc.TooLarge:
                return wW.d.cantOpen
            }
          }(eW);
          if (null === WW) return;
          throw new Error(WW.text)
        }
        return this.rejectSave(new Error(wW.d.saveClosed.text)), this.fileName = null !== (MW = null !== (CW = RW.fileName) && void 0 !== CW ? CW : null === (AW = RW.fileHandle) || void 0 === AW ? void 0 : AW.name) && void 0 !== MW ? MW : null, this.fileHandle = null !== (bR = RW.fileHandle) && void 0 !== bR ? bR : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((WW, RW) => {
          this.pendingOpen = {
            resolve: WW,
            reject: RW
          }
        }))
      }
      play() {
        this.holds.has("ww") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ww")
      }
      seek(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this.lastView;
        null !== MW && (RW || WW < MW.WR) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(WW, RW)
      }
      setSpeed(WW) {
        this.deps.client.setSpeed(WW)
      }
      setCameraMode(WW) {
        this.deps.client.setCameraMode(WW)
      }
      cycleCameraMode() {
        const WW = this.lastView;
        null !== WW && WW.state !== zR.Lc.None && this.setCameraMode(AW.e[(AW.e.indexOf(WW.cameraMode) + 1) % AW.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(WW) {
        this.edited(this.deps.client.setKeyframe(WW))
      }
      moveKeyframe(WW, RW) {
        this.edited(this.deps.client.moveKeyframe(WW, RW))
      }
      deleteKeyframes(WW, RW) {
        this.edited(this.deps.client.deleteKeyframes(WW, RW))
      }
      setMark(WW) {
        this.edited(this.deps.client.setMark(WW))
      }
      crop(WW, RW) {
        return !(RW <= WW) && (null !== this.pendingSave ? (this.deps.notify(wW.d.saveBusy), !1) : !!this.deps.client.crop(WW, RW) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(wW.d.saveBusy.text)) : new Promise(((WW, RW) => {
          const MW = {
            resolve: WW,
            reject: RW
          };
          this.pendingSave = MW, this.editsAtSave = this.edits, this.deps.client.save((0, AW.g)()).then((WW => {
            this.pendingSave === MW && this.saveStarted(WW)
          }), (WW => {
            this.pendingSave === MW && this.rejectSave(WW instanceof Error ? WW : new Error(String(WW)))
          }))
        }))
      }
      saveStarted(WW) {
        switch (WW) {
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
      markSaved(WW, RW) {
        var MW, wW;
        this.fileHandle = WW, this.fileName = null !== (MW = null !== (wW = null === WW || void 0 === WW ? void 0 : WW.name) && void 0 !== wW ? wW : RW) && void 0 !== MW ? MW : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(wW.d.coreStopped.text)), this.rejectSave(new Error(wW.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var WW, RW, MW;
        const wW = this.deps.client.view(),
          AW = wW !== this.lastView;
        this.lastView = wW, this.opening && null !== wW && wW.state !== zR.Lc.None && wW.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, CW.g)()), this.cropAsked ? (this.cropAsked = !1, null !== wW && wW.state === zR.Lc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== wW && wW.state !== zR.Lc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const NW = 0 === this.settleFrames && 0 === (null !== (WW = null === (RW = (MW = this.deps).meshPending) || void 0 === RW ? void 0 : RW.call(MW)) && void 0 !== WW ? WW : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && NW && this.release("opening"), this.holds.has("seek") && NW && this.release("seek"), this.holds.has("crop") && !this.cropRunning && NW && this.release("crop");
        const eW = this.now();
        for (const [CW, zR] of this.holds) !yR.has(CW) && eW - zR >= bR && (this.release(CW), "opening" === CW && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), AW && this.deps.onChange()
      }
      cropped() {
        (0, CW.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(WW) {
        switch (WW.reason) {
          case zR.Dc.TooLarge:
            break;
          case zR.Dc.Open:
          case zR.Dc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(wW.d.cantOpen), this.settleOpen(new Error(wW.d.cantOpen.text));
            break;
          case zR.Dc.Crop:
            if (WW.code === zR.Ac.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(wW.d.cropFailed);
            break;
          case zR.Dc.ModuleTrap:
          case zR.Dc.ModuleLoad:
          case zR.Dc.Port:
            this.moduleEnded(WW.reason === zR.Dc.ModuleTrap ? wW.d.coreStopped : wW.d.cantOpen);
            break;
          case zR.Dc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${WW.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(WW) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(WW), this.settleOpen(new Error(WW.text))
      }
      saveDone(WW) {
        const RW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RW || void 0 === RW || RW.resolve(WW)
      }
      saveFailed(WW) {
        this.rejectSave(new Error(WW ? wW.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(WW) {
        WW && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wW.d.cropBusy.text)) : this.deps.notify(wW.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(WW) {
        const RW = this.pendingOpen;
        this.pendingOpen = null, null === WW ? null === RW || void 0 === RW || RW.resolve() : null === RW || void 0 === RW || RW.reject(WW)
      }
      rejectSave(WW) {
        const RW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RW || void 0 === RW || RW.reject(WW)
      }
      hold(WW) {
        const RW = 0 === this.holds.size;
        this.holds.set(WW, this.now()), RW && this.deps.setHoldDraws(!0)
      }
      release(WW) {
        this.holds.delete(WW) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);