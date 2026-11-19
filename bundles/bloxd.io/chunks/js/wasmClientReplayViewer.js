export const id = 57;
export const ids = [57];
export const modules = {
  35956: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      d: () => zT
    });
    const iT = "data-replay-ui-active",
      zT = [{
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
  35965: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      e: () => DT,
      i: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(35956);

    function WT() {
      const TT = {};
      for (const {
          group: oT
        }
        of kT.d) TT[oT] = !0;
      return TT
    }
    let XT = WT();

    function BT() {
      zT.h.XM("replayViewer|uiVisibilityChanged")
    }

    function FT() {
      return XT
    }

    function ST(TT, oT) {
      XT[TT] !== oT && (XT = {
        ...XT,
        [TT]: oT
      }, "nametag" === TT && iT.c.set({
        areNametagsHidden: !oT
      }), BT())
    }

    function DT() {
      XT = WT(), iT.c.set({
        areNametagsHidden: !1
      }), BT()
    }
  },
  41417: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      HOLD_TIMEOUT_MS: () => XT,
      ReplayViewer: () => FT
    });
    var iT = IT(35944),
      zT = IT(35965),
      kT = IT(4276),
      WT = IT(41386);
    const XT = 1e4,
      BT = new Set(["Fc"]);
    class FT {
      constructor(TT) {
        var oT;
        this.deps = TT, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (oT = TT.now) && void 0 !== oT ? oT : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== kT.pd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get kS() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? iT.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(TT, oT) {
        var IT, zT, WT, XT;
        const {
          client: BT
        } = this.deps;
        if (!this.playback) {
          if (!BT.setPlayback(!0)) throw new Error(iT.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const FT = this.epoch;
        let ST;
        try {
          ST = await BT.open(TT)
        } finally {
          this.loadingOpens--
        }
        if (FT !== this.epoch) throw new Error(iT.e.coreStopped.text);
        if ("opening" !== ST) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const TT = function(TT) {
            switch (TT) {
              case "reloading":
                return null;
              case "stopped":
              case kT.ed.ModuleTrap:
                return iT.e.coreStopped;
              case kT.ed.ModuleLoad:
                return iT.e.viewerLoadFailed;
              case kT.ed.TooLarge:
                return iT.e.cantOpen
            }
          }(ST);
          if (null === TT) return;
          throw new Error(TT.text)
        }
        return this.rejectSave(new Error(iT.e.saveClosed.text)), this.fileName = null !== (IT = null !== (zT = oT.fileName) && void 0 !== zT ? zT : null === (WT = oT.fileHandle) || void 0 === WT ? void 0 : WT.name) && void 0 !== IT ? IT : null, this.fileHandle = null !== (XT = oT.fileHandle) && void 0 !== XT ? XT : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((TT, oT) => {
          this.pendingOpen = {
            resolve: TT,
            reject: oT
          }
        }))
      }
      play() {
        this.holds.has("Fc") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Fc")
      }
      seek(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this.lastView;
        null !== IT && (oT || TT < IT.dD) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(TT, oT)
      }
      setSpeed(TT) {
        this.deps.client.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.client.setCameraMode(TT)
      }
      cycleCameraMode() {
        const TT = this.lastView;
        null !== TT && TT.state !== kT.pd.None && this.setCameraMode(WT.e[(WT.e.indexOf(TT.cameraMode) + 1) % WT.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(TT) {
        this.edited(this.deps.client.setKeyframe(TT))
      }
      moveKeyframe(TT, oT) {
        this.edited(this.deps.client.moveKeyframe(TT, oT))
      }
      deleteKeyframes(TT, oT) {
        this.edited(this.deps.client.deleteKeyframes(TT, oT))
      }
      setMark(TT) {
        this.edited(this.deps.client.setMark(TT))
      }
      crop(TT, oT) {
        return !(oT <= TT) && (null !== this.pendingSave ? (this.deps.notify(iT.e.saveBusy), !1) : !!this.deps.client.crop(TT, oT) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(iT.e.saveBusy.text)) : new Promise(((TT, oT) => {
          const IT = {
            resolve: TT,
            reject: oT
          };
          this.pendingSave = IT, this.editsAtSave = this.edits, this.deps.client.save((0, WT.f)()).then((TT => {
            this.pendingSave === IT && this.saveStarted(TT)
          }), (TT => {
            this.pendingSave === IT && this.rejectSave(TT instanceof Error ? TT : new Error(String(TT)))
          }))
        }))
      }
      saveStarted(TT) {
        switch (TT) {
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
      markSaved(TT, oT) {
        var IT, iT;
        this.fileHandle = TT, this.fileName = null !== (IT = null !== (iT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== iT ? iT : oT) && void 0 !== IT ? IT : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(iT.e.coreStopped.text)), this.rejectSave(new Error(iT.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var TT, oT, IT;
        const iT = this.deps.client.view(),
          WT = iT !== this.lastView;
        this.lastView = iT, this.opening && null !== iT && iT.state !== kT.pd.None && iT.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, zT.e)()), this.cropAsked ? (this.cropAsked = !1, null !== iT && iT.state === kT.pd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== iT && iT.state !== kT.pd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const FT = 0 === this.settleFrames && 0 === (null !== (TT = null === (oT = (IT = this.deps).meshPending) || void 0 === oT ? void 0 : oT.call(IT)) && void 0 !== TT ? TT : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && FT && this.release("opening"), this.holds.has("seek") && FT && this.release("seek"), this.holds.has("crop") && !this.cropRunning && FT && this.release("crop");
        const ST = this.now();
        for (const [zT, kT] of this.holds) !BT.has(zT) && ST - kT >= XT && (this.release(zT), "opening" === zT && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), WT && this.deps.onChange()
      }
      cropped() {
        (0, zT.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(TT) {
        switch (TT.reason) {
          case kT.ed.TooLarge:
            break;
          case kT.ed.Open:
          case kT.ed.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(iT.e.cantOpen), this.settleOpen(new Error(iT.e.cantOpen.text));
            break;
          case kT.ed.Crop:
            if (TT.code === kT.dd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(iT.e.cropFailed);
            break;
          case kT.ed.ModuleTrap:
          case kT.ed.ModuleLoad:
          case kT.ed.Port:
            this.moduleEnded(TT.reason === kT.ed.ModuleTrap ? iT.e.coreStopped : iT.e.cantOpen);
            break;
          case kT.ed.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${TT.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(TT) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(TT), this.settleOpen(new Error(TT.text))
      }
      saveDone(TT) {
        const oT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === oT || void 0 === oT || oT.resolve(TT)
      }
      saveFailed(TT) {
        this.rejectSave(new Error(TT ? iT.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(TT) {
        TT && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(iT.e.cropBusy.text)) : this.deps.notify(iT.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(TT) {
        const oT = this.pendingOpen;
        this.pendingOpen = null, null === TT ? null === oT || void 0 === oT || oT.resolve() : null === oT || void 0 === oT || oT.reject(TT)
      }
      rejectSave(TT) {
        const oT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === oT || void 0 === oT || oT.reject(TT)
      }
      hold(TT) {
        const oT = 0 === this.holds.size;
        this.holds.set(TT, this.now()), oT && this.deps.setHoldDraws(!0)
      }
      release(TT) {
        this.holds.delete(TT) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);