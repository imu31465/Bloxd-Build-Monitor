export const id = 58;
export const ids = [58];
export const modules = {
  36614: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      g: () => qQ
    });
    const LQ = "data-replay-ui-active",
      qQ = [{
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
  36619: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => HQ,
      g: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(36614);

    function DQ() {
      const QQ = {};
      for (const {
          group: FQ
        }
        of oQ.g) QQ[FQ] = !0;
      return QQ
    }
    let kQ = DQ();

    function vQ() {
      qQ.l.GA("replayViewer|uiVisibilityChanged")
    }

    function mQ() {
      return kQ
    }

    function uQ(QQ, FQ) {
      kQ[QQ] !== FQ && (kQ = {
        ...kQ,
        [QQ]: FQ
      }, "nametag" === QQ && LQ.c.set({
        areNametagsHidden: !FQ
      }), vQ())
    }

    function HQ() {
      kQ = DQ(), LQ.c.set({
        areNametagsHidden: !1
      }), vQ()
    }
  },
  41999: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      HOLD_TIMEOUT_MS: () => kQ,
      ReplayViewer: () => mQ
    });
    var LQ = wQ(36605),
      qQ = wQ(36619),
      oQ = wQ(4632),
      DQ = wQ(41962);
    const kQ = 1e4,
      vQ = new Set(["JY"]);
    class mQ {
      constructor(QQ) {
        var FQ;
        this.deps = QQ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (FQ = QQ.now) && void 0 !== FQ ? FQ : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== oQ.Uc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ym() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? LQ.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(QQ, FQ) {
        var wQ, qQ, DQ, kQ;
        const {
          client: vQ
        } = this.deps;
        if (!this.playback) {
          if (!vQ.setPlayback(!0)) throw new Error(LQ.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const mQ = this.epoch;
        let uQ;
        try {
          uQ = await vQ.open(QQ)
        } finally {
          this.loadingOpens--
        }
        if (mQ !== this.epoch) throw new Error(LQ.c.coreStopped.text);
        if ("opening" !== uQ) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const QQ = function(QQ) {
            switch (QQ) {
              case "reloading":
                return null;
              case "stopped":
              case oQ.Oc.ModuleTrap:
                return LQ.c.coreStopped;
              case oQ.Oc.ModuleLoad:
                return LQ.c.viewerLoadFailed;
              case oQ.Oc.TooLarge:
                return LQ.c.cantOpen
            }
          }(uQ);
          if (null === QQ) return;
          throw new Error(QQ.text)
        }
        return this.rejectSave(new Error(LQ.c.saveClosed.text)), this.fileName = null !== (wQ = null !== (qQ = FQ.fileName) && void 0 !== qQ ? qQ : null === (DQ = FQ.fileHandle) || void 0 === DQ ? void 0 : DQ.name) && void 0 !== wQ ? wQ : null, this.fileHandle = null !== (kQ = FQ.fileHandle) && void 0 !== kQ ? kQ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((QQ, FQ) => {
          this.pendingOpen = {
            resolve: QQ,
            reject: FQ
          }
        }))
      }
      play() {
        this.holds.has("JY") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("JY")
      }
      seek(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this.lastView;
        null !== wQ && (FQ || QQ < wQ.fH) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(QQ, FQ)
      }
      setSpeed(QQ) {
        this.deps.client.setSpeed(QQ)
      }
      setCameraMode(QQ) {
        this.deps.client.setCameraMode(QQ)
      }
      cycleCameraMode() {
        const QQ = this.lastView;
        null !== QQ && QQ.state !== oQ.Uc.None && this.setCameraMode(DQ.c[(DQ.c.indexOf(QQ.cameraMode) + 1) % DQ.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(QQ) {
        this.edited(this.deps.client.setKeyframe(QQ))
      }
      moveKeyframe(QQ, FQ) {
        this.edited(this.deps.client.moveKeyframe(QQ, FQ))
      }
      deleteKeyframes(QQ, FQ) {
        this.edited(this.deps.client.deleteKeyframes(QQ, FQ))
      }
      setMark(QQ) {
        this.edited(this.deps.client.setMark(QQ))
      }
      crop(QQ, FQ) {
        return !(FQ <= QQ) && (null !== this.pendingSave ? (this.deps.notify(LQ.c.saveBusy), !1) : !!this.deps.client.crop(QQ, FQ) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(LQ.c.saveBusy.text)) : new Promise(((QQ, FQ) => {
          const wQ = {
            resolve: QQ,
            reject: FQ
          };
          this.pendingSave = wQ, this.editsAtSave = this.edits, this.deps.client.save((0, DQ.d)()).then((QQ => {
            this.pendingSave === wQ && this.saveStarted(QQ)
          }), (QQ => {
            this.pendingSave === wQ && this.rejectSave(QQ instanceof Error ? QQ : new Error(String(QQ)))
          }))
        }))
      }
      saveStarted(QQ) {
        switch (QQ) {
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
      markSaved(QQ, FQ) {
        var wQ, LQ;
        this.fileHandle = QQ, this.fileName = null !== (wQ = null !== (LQ = null === QQ || void 0 === QQ ? void 0 : QQ.name) && void 0 !== LQ ? LQ : FQ) && void 0 !== wQ ? wQ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(LQ.c.coreStopped.text)), this.rejectSave(new Error(LQ.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var QQ, FQ, wQ;
        const LQ = this.deps.client.view(),
          DQ = LQ !== this.lastView;
        this.lastView = LQ, this.opening && null !== LQ && LQ.state !== oQ.Uc.None && LQ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, qQ.f)()), this.cropAsked ? (this.cropAsked = !1, null !== LQ && LQ.state === oQ.Uc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== LQ && LQ.state !== oQ.Uc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const mQ = 0 === this.settleFrames && 0 === (null !== (QQ = null === (FQ = (wQ = this.deps).meshPending) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && mQ && this.release("opening"), this.holds.has("seek") && mQ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && mQ && this.release("crop");
        const uQ = this.now();
        for (const [qQ, oQ] of this.holds) !vQ.has(qQ) && uQ - oQ >= kQ && (this.release(qQ), "opening" === qQ && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), DQ && this.deps.onChange()
      }
      cropped() {
        (0, qQ.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(QQ) {
        switch (QQ.reason) {
          case oQ.Oc.TooLarge:
            break;
          case oQ.Oc.Open:
          case oQ.Oc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(LQ.c.cantOpen), this.settleOpen(new Error(LQ.c.cantOpen.text));
            break;
          case oQ.Oc.Crop:
            if (QQ.code === oQ.Kc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(LQ.c.cropFailed);
            break;
          case oQ.Oc.ModuleTrap:
          case oQ.Oc.ModuleLoad:
          case oQ.Oc.Port:
            this.moduleEnded(QQ.reason === oQ.Oc.ModuleTrap ? LQ.c.coreStopped : LQ.c.cantOpen);
            break;
          case oQ.Oc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${QQ.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(QQ) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(QQ), this.settleOpen(new Error(QQ.text))
      }
      saveDone(QQ) {
        const FQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === FQ || void 0 === FQ || FQ.resolve(QQ)
      }
      saveFailed(QQ) {
        this.rejectSave(new Error(QQ ? LQ.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(QQ) {
        QQ && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(LQ.c.cropBusy.text)) : this.deps.notify(LQ.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(QQ) {
        const FQ = this.pendingOpen;
        this.pendingOpen = null, null === QQ ? null === FQ || void 0 === FQ || FQ.resolve() : null === FQ || void 0 === FQ || FQ.reject(QQ)
      }
      rejectSave(QQ) {
        const FQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === FQ || void 0 === FQ || FQ.reject(QQ)
      }
      hold(QQ) {
        const FQ = 0 === this.holds.size;
        this.holds.set(QQ, this.now()), FQ && this.deps.setHoldDraws(!0)
      }
      release(QQ) {
        this.holds.delete(QQ) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);