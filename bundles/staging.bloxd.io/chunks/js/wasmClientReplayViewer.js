export const id = 58;
export const ids = [58];
export const modules = {
  36814: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      g: () => MT
    });
    const lT = "data-replay-ui-active",
      MT = [{
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
  36818: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      f: () => AT,
      h: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(36814);

    function OT() {
      const TT = {};
      for (const {
          group: kT
        }
        of KT.g) TT[kT] = !0;
      return TT
    }
    let yT = OT();

    function fT() {
      MT.k.nt("replayViewer|uiVisibilityChanged")
    }

    function xT() {
      return yT
    }

    function IT(TT, kT) {
      yT[TT] !== kT && (yT = {
        ...yT,
        [TT]: kT
      }, "nametag" === TT && lT.e.set({
        areNametagsHidden: !kT
      }), fT())
    }

    function AT() {
      yT = OT(), lT.e.set({
        areNametagsHidden: !1
      }), fT()
    }
  },
  42156: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      HOLD_TIMEOUT_MS: () => yT,
      ReplayViewer: () => xT
    });
    var lT = cT(36807),
      MT = cT(36818),
      KT = cT(4761),
      OT = cT(42126);
    const yT = 1e4,
      fT = new Set(["Bj"]);
    class xT {
      constructor(TT) {
        var kT;
        this.deps = TT, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (kT = TT.now) && void 0 !== kT ? kT : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== KT.kd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ty() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? lT.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(TT, kT) {
        var cT, MT, OT, yT;
        const {
          client: fT
        } = this.deps;
        if (!this.playback) {
          if (!fT.setPlayback(!0)) throw new Error(lT.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const xT = this.epoch;
        let IT;
        try {
          IT = await fT.open(TT)
        } finally {
          this.loadingOpens--
        }
        if (xT !== this.epoch) throw new Error(lT.d.coreStopped.text);
        if ("opening" !== IT) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const TT = function(TT) {
            switch (TT) {
              case "reloading":
                return null;
              case "stopped":
              case KT.$c.ModuleTrap:
                return lT.d.coreStopped;
              case KT.$c.ModuleLoad:
                return lT.d.viewerLoadFailed;
              case KT.$c.TooLarge:
                return lT.d.cantOpen
            }
          }(IT);
          if (null === TT) return;
          throw new Error(TT.text)
        }
        return this.rejectSave(new Error(lT.d.saveClosed.text)), this.fileName = null !== (cT = null !== (MT = kT.fileName) && void 0 !== MT ? MT : null === (OT = kT.fileHandle) || void 0 === OT ? void 0 : OT.name) && void 0 !== cT ? cT : null, this.fileHandle = null !== (yT = kT.fileHandle) && void 0 !== yT ? yT : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((TT, kT) => {
          this.pendingOpen = {
            resolve: TT,
            reject: kT
          }
        }))
      }
      play() {
        this.holds.has("Bj") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Bj")
      }
      seek(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this.lastView;
        null !== cT && (kT || TT < cT.UA) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(TT, kT)
      }
      setSpeed(TT) {
        this.deps.client.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.client.setCameraMode(TT)
      }
      cycleCameraMode() {
        const TT = this.lastView;
        null !== TT && TT.state !== KT.kd.None && this.setCameraMode(OT.d[(OT.d.indexOf(TT.cameraMode) + 1) % OT.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(TT) {
        this.edited(this.deps.client.setKeyframe(TT))
      }
      moveKeyframe(TT, kT) {
        this.edited(this.deps.client.moveKeyframe(TT, kT))
      }
      deleteKeyframes(TT, kT) {
        this.edited(this.deps.client.deleteKeyframes(TT, kT))
      }
      setMark(TT) {
        this.edited(this.deps.client.setMark(TT))
      }
      crop(TT, kT) {
        return !(kT <= TT) && (null !== this.pendingSave ? (this.deps.notify(lT.d.saveBusy), !1) : !!this.deps.client.crop(TT, kT) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(lT.d.saveBusy.text)) : new Promise(((TT, kT) => {
          const cT = {
            resolve: TT,
            reject: kT
          };
          this.pendingSave = cT, this.editsAtSave = this.edits, this.deps.client.save((0, OT.g)()).then((TT => {
            this.pendingSave === cT && this.saveStarted(TT)
          }), (TT => {
            this.pendingSave === cT && this.rejectSave(TT instanceof Error ? TT : new Error(String(TT)))
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
      markSaved(TT, kT) {
        var cT, lT;
        this.fileHandle = TT, this.fileName = null !== (cT = null !== (lT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== lT ? lT : kT) && void 0 !== cT ? cT : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(lT.d.coreStopped.text)), this.rejectSave(new Error(lT.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var TT, kT, cT;
        const lT = this.deps.client.view(),
          OT = lT !== this.lastView;
        this.lastView = lT, this.opening && null !== lT && lT.state !== KT.kd.None && lT.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, MT.f)()), this.cropAsked ? (this.cropAsked = !1, null !== lT && lT.state === KT.kd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== lT && lT.state !== KT.kd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const xT = 0 === this.settleFrames && 0 === (null !== (TT = null === (kT = (cT = this.deps).meshPending) || void 0 === kT ? void 0 : kT.call(cT)) && void 0 !== TT ? TT : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && xT && this.release("opening"), this.holds.has("seek") && xT && this.release("seek"), this.holds.has("crop") && !this.cropRunning && xT && this.release("crop");
        const IT = this.now();
        for (const [MT, KT] of this.holds) !fT.has(MT) && IT - KT >= yT && (this.release(MT), "opening" === MT && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), OT && this.deps.onChange()
      }
      cropped() {
        (0, MT.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(TT) {
        switch (TT.reason) {
          case KT.$c.TooLarge:
            break;
          case KT.$c.Open:
          case KT.$c.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(lT.d.cantOpen), this.settleOpen(new Error(lT.d.cantOpen.text));
            break;
          case KT.$c.Crop:
            if (TT.code === KT.Xc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(lT.d.cropFailed);
            break;
          case KT.$c.ModuleTrap:
          case KT.$c.ModuleLoad:
          case KT.$c.Port:
            this.moduleEnded(TT.reason === KT.$c.ModuleTrap ? lT.d.coreStopped : lT.d.cantOpen);
            break;
          case KT.$c.NotLive:
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
        const kT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === kT || void 0 === kT || kT.resolve(TT)
      }
      saveFailed(TT) {
        this.rejectSave(new Error(TT ? lT.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(TT) {
        TT && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(lT.d.cropBusy.text)) : this.deps.notify(lT.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(TT) {
        const kT = this.pendingOpen;
        this.pendingOpen = null, null === TT ? null === kT || void 0 === kT || kT.resolve() : null === kT || void 0 === kT || kT.reject(TT)
      }
      rejectSave(TT) {
        const kT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === kT || void 0 === kT || kT.reject(TT)
      }
      hold(TT) {
        const kT = 0 === this.holds.size;
        this.holds.set(TT, this.now()), kT && this.deps.setHoldDraws(!0)
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