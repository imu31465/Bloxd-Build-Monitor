export const id = 57;
export const ids = [57];
export const modules = {
  36375: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      f: () => pD
    });
    const ID = "data-replay-ui-active",
      pD = [{
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
  36379: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      d: () => BD,
      h: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(36375);

    function fD() {
      const DD = {};
      for (const {
          group: CD
        }
        of iD.f) DD[CD] = !0;
      return DD
    }
    let bD = fD();

    function QD() {
      pD.i.Uo("replayViewer|uiVisibilityChanged")
    }

    function wD() {
      return bD
    }

    function SD(DD, CD) {
      bD[DD] !== CD && (bD = {
        ...bD,
        [DD]: CD
      }, "nametag" === DD && ID.d.set({
        areNametagsHidden: !CD
      }), QD())
    }

    function BD() {
      bD = fD(), ID.d.set({
        areNametagsHidden: !1
      }), QD()
    }
  },
  41764: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      HOLD_TIMEOUT_MS: () => bD,
      ReplayViewer: () => wD
    });
    var ID = cD(36359),
      pD = cD(36379),
      iD = cD(4581),
      fD = cD(41735);
    const bD = 1e4,
      QD = new Set(["gt"]);
    class wD {
      constructor(DD) {
        var CD;
        this.deps = DD, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (CD = DD.now) && void 0 !== CD ? CD : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== iD.ad.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Lb() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? ID.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(DD, CD) {
        var cD, pD, fD, bD;
        const {
          client: QD
        } = this.deps;
        if (!this.playback) {
          if (!QD.setPlayback(!0)) throw new Error(ID.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const wD = this.epoch;
        let SD;
        try {
          SD = await QD.open(DD)
        } finally {
          this.loadingOpens--
        }
        if (wD !== this.epoch) throw new Error(ID.c.coreStopped.text);
        if ("opening" !== SD) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const DD = function(DD) {
            switch (DD) {
              case "reloading":
                return null;
              case "stopped":
              case iD.Tc.ModuleTrap:
                return ID.c.coreStopped;
              case iD.Tc.ModuleLoad:
                return ID.c.viewerLoadFailed;
              case iD.Tc.TooLarge:
                return ID.c.cantOpen
            }
          }(SD);
          if (null === DD) return;
          throw new Error(DD.text)
        }
        return this.rejectSave(new Error(ID.c.saveClosed.text)), this.fileName = null !== (cD = null !== (pD = CD.fileName) && void 0 !== pD ? pD : null === (fD = CD.fileHandle) || void 0 === fD ? void 0 : fD.name) && void 0 !== cD ? cD : null, this.fileHandle = null !== (bD = CD.fileHandle) && void 0 !== bD ? bD : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((DD, CD) => {
          this.pendingOpen = {
            resolve: DD,
            reject: CD
          }
        }))
      }
      play() {
        this.holds.has("gt") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("gt")
      }
      seek(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this.lastView;
        null !== cD && (CD || DD < cD.wy) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(DD, CD)
      }
      setSpeed(DD) {
        this.deps.client.setSpeed(DD)
      }
      setCameraMode(DD) {
        this.deps.client.setCameraMode(DD)
      }
      cycleCameraMode() {
        const DD = this.lastView;
        null !== DD && DD.state !== iD.ad.None && this.setCameraMode(fD.b[(fD.b.indexOf(DD.cameraMode) + 1) % fD.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(DD) {
        this.edited(this.deps.client.setKeyframe(DD))
      }
      moveKeyframe(DD, CD) {
        this.edited(this.deps.client.moveKeyframe(DD, CD))
      }
      deleteKeyframes(DD, CD) {
        this.edited(this.deps.client.deleteKeyframes(DD, CD))
      }
      setMark(DD) {
        this.edited(this.deps.client.setMark(DD))
      }
      crop(DD, CD) {
        return !(CD <= DD) && (null !== this.pendingSave ? (this.deps.notify(ID.c.saveBusy), !1) : !!this.deps.client.crop(DD, CD) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(ID.c.saveBusy.text)) : new Promise(((DD, CD) => {
          const cD = {
            resolve: DD,
            reject: CD
          };
          this.pendingSave = cD, this.editsAtSave = this.edits, this.deps.client.save((0, fD.f)()).then((DD => {
            this.pendingSave === cD && this.saveStarted(DD)
          }), (DD => {
            this.pendingSave === cD && this.rejectSave(DD instanceof Error ? DD : new Error(String(DD)))
          }))
        }))
      }
      saveStarted(DD) {
        switch (DD) {
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
      markSaved(DD, CD) {
        var cD, ID;
        this.fileHandle = DD, this.fileName = null !== (cD = null !== (ID = null === DD || void 0 === DD ? void 0 : DD.name) && void 0 !== ID ? ID : CD) && void 0 !== cD ? cD : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(ID.c.coreStopped.text)), this.rejectSave(new Error(ID.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var DD, CD, cD;
        const ID = this.deps.client.view(),
          fD = ID !== this.lastView;
        this.lastView = ID, this.opening && null !== ID && ID.state !== iD.ad.None && ID.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, pD.d)()), this.cropAsked ? (this.cropAsked = !1, null !== ID && ID.state === iD.ad.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== ID && ID.state !== iD.ad.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const wD = 0 === this.settleFrames && 0 === (null !== (DD = null === (CD = (cD = this.deps).meshPending) || void 0 === CD ? void 0 : CD.call(cD)) && void 0 !== DD ? DD : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && wD && this.release("opening"), this.holds.has("seek") && wD && this.release("seek"), this.holds.has("crop") && !this.cropRunning && wD && this.release("crop");
        const SD = this.now();
        for (const [pD, iD] of this.holds) !QD.has(pD) && SD - iD >= bD && (this.release(pD), "opening" === pD && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), fD && this.deps.onChange()
      }
      cropped() {
        (0, pD.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(DD) {
        switch (DD.reason) {
          case iD.Tc.TooLarge:
            break;
          case iD.Tc.Open:
          case iD.Tc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(ID.c.cantOpen), this.settleOpen(new Error(ID.c.cantOpen.text));
            break;
          case iD.Tc.Crop:
            if (DD.code === iD.Qc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(ID.c.cropFailed);
            break;
          case iD.Tc.ModuleTrap:
          case iD.Tc.ModuleLoad:
          case iD.Tc.Port:
            this.moduleEnded(DD.reason === iD.Tc.ModuleTrap ? ID.c.coreStopped : ID.c.cantOpen);
            break;
          case iD.Tc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${DD.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(DD) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(DD), this.settleOpen(new Error(DD.text))
      }
      saveDone(DD) {
        const CD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === CD || void 0 === CD || CD.resolve(DD)
      }
      saveFailed(DD) {
        this.rejectSave(new Error(DD ? ID.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(DD) {
        DD && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(ID.c.cropBusy.text)) : this.deps.notify(ID.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(DD) {
        const CD = this.pendingOpen;
        this.pendingOpen = null, null === DD ? null === CD || void 0 === CD || CD.resolve() : null === CD || void 0 === CD || CD.reject(DD)
      }
      rejectSave(DD) {
        const CD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === CD || void 0 === CD || CD.reject(DD)
      }
      hold(DD) {
        const CD = 0 === this.holds.size;
        this.holds.set(DD, this.now()), CD && this.deps.setHoldDraws(!0)
      }
      release(DD) {
        this.holds.delete(DD) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);