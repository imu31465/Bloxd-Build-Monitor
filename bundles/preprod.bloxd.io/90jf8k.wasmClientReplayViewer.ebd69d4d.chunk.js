export const id = 49;
export const ids = [49];
export const modules = {
  35472: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      e: () => AF
    });
    const CF = "data-replay-ui-active",
      AF = [{
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
  35478: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF,
      g: () => iW,
      h: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(35472);

    function hF() {
      const FF = {};
      for (const {
          group: WF
        }
        of uF.e) FF[WF] = !0;
      return FF
    }
    let bW = hF();

    function dF() {
      AF.j.Uu("replayViewer|uiVisibilityChanged")
    }

    function PF() {
      return bW
    }

    function RF(FF, WF) {
      bW[FF] !== WF && (bW = {
        ...bW,
        [FF]: WF
      }, "nametag" === FF && CF.b.set({
        areNametagsHidden: !WF
      }), dF())
    }

    function iW() {
      bW = hF(), CF.b.set({
        areNametagsHidden: !1
      }), dF()
    }
  },
  40473: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      HOLD_TIMEOUT_MS: () => bW,
      ReplayViewer: () => PF
    });
    var CF = SF(35461),
      AF = SF(35478),
      uF = SF(3786),
      hF = SF(40438);
    const bW = 1e4,
      dF = new Set(["CC"]);
    class PF {
      constructor(FF) {
        var WF;
        this.deps = FF, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (WF = FF.now) && void 0 !== WF ? WF : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== uF.Lc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get yS() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? CF.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(FF, WF) {
        var SF, AF, hF, bW;
        const {
          client: dF
        } = this.deps;
        if (!this.playback) {
          if (!dF.setPlayback(!0)) throw new Error(CF.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const PF = this.epoch;
        let RF;
        try {
          RF = await dF.open(FF)
        } finally {
          this.loadingOpens--
        }
        if (PF !== this.epoch) throw new Error(CF.d.coreStopped.text);
        if ("opening" !== RF) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const FF = function(FF) {
            switch (FF) {
              case "reloading":
                return null;
              case "stopped":
              case uF.zc.ModuleTrap:
                return CF.d.coreStopped;
              case uF.zc.ModuleLoad:
                return CF.d.viewerLoadFailed;
              case uF.zc.TooLarge:
                return CF.d.cantOpen
            }
          }(RF);
          if (null === FF) return;
          throw new Error(FF.text)
        }
        return this.rejectSave(new Error(CF.d.saveClosed.text)), this.fileName = null !== (SF = null !== (AF = WF.fileName) && void 0 !== AF ? AF : null === (hF = WF.fileHandle) || void 0 === hF ? void 0 : hF.name) && void 0 !== SF ? SF : null, this.fileHandle = null !== (bW = WF.fileHandle) && void 0 !== bW ? bW : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((FF, WF) => {
          this.pendingOpen = {
            resolve: FF,
            reject: WF
          }
        }))
      }
      play() {
        this.holds.has("CC") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("CC")
      }
      seek(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this.lastView;
        null !== SF && (WF || FF < SF.lF) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(FF, WF)
      }
      setSpeed(FF) {
        this.deps.client.setSpeed(FF)
      }
      setCameraMode(FF) {
        this.deps.client.setCameraMode(FF)
      }
      cycleCameraMode() {
        const FF = this.lastView;
        null !== FF && FF.state !== uF.Lc.None && this.setCameraMode(hF.c[(hF.c.indexOf(FF.cameraMode) + 1) % hF.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(FF) {
        this.edited(this.deps.client.setKeyframe(FF))
      }
      moveKeyframe(FF, WF) {
        this.edited(this.deps.client.moveKeyframe(FF, WF))
      }
      deleteKeyframes(FF, WF) {
        this.edited(this.deps.client.deleteKeyframes(FF, WF))
      }
      setMark(FF) {
        this.edited(this.deps.client.setMark(FF))
      }
      crop(FF, WF) {
        return !(WF <= FF) && (null !== this.pendingSave ? (this.deps.notify(CF.d.saveBusy), !1) : !!this.deps.client.crop(FF, WF) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(CF.d.saveBusy.text)) : new Promise(((FF, WF) => {
          const SF = {
            resolve: FF,
            reject: WF
          };
          this.pendingSave = SF, this.editsAtSave = this.edits, this.deps.client.save((0, hF.e)()).then((FF => {
            this.pendingSave === SF && this.saveStarted(FF)
          }), (FF => {
            this.pendingSave === SF && this.rejectSave(FF instanceof Error ? FF : new Error(String(FF)))
          }))
        }))
      }
      saveStarted(FF) {
        switch (FF) {
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
      markSaved(FF, WF) {
        var SF, CF;
        this.fileHandle = FF, this.fileName = null !== (SF = null !== (CF = null === FF || void 0 === FF ? void 0 : FF.name) && void 0 !== CF ? CF : WF) && void 0 !== SF ? SF : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(CF.d.coreStopped.text)), this.rejectSave(new Error(CF.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var FF, WF, SF;
        const CF = this.deps.client.view(),
          hF = CF !== this.lastView;
        this.lastView = CF, this.opening && null !== CF && CF.state !== uF.Lc.None && CF.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, AF.g)()), this.cropAsked ? (this.cropAsked = !1, null !== CF && CF.state === uF.Lc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== CF && CF.state !== uF.Lc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const PF = 0 === this.settleFrames && 0 === (null !== (FF = null === (WF = (SF = this.deps).meshPending) || void 0 === WF ? void 0 : WF.call(SF)) && void 0 !== FF ? FF : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && PF && this.release("opening"), this.holds.has("seek") && PF && this.release("seek"), this.holds.has("crop") && !this.cropRunning && PF && this.release("crop");
        const RF = this.now();
        for (const [AF, uF] of this.holds) !dF.has(AF) && RF - uF >= bW && (this.release(AF), "opening" === AF && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), hF && this.deps.onChange()
      }
      cropped() {
        (0, AF.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(FF) {
        switch (FF.reason) {
          case uF.zc.TooLarge:
            break;
          case uF.zc.Open:
          case uF.zc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(CF.d.cantOpen), this.settleOpen(new Error(CF.d.cantOpen.text));
            break;
          case uF.zc.Crop:
            if (FF.code === uF.vc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(CF.d.cropFailed);
            break;
          case uF.zc.ModuleTrap:
          case uF.zc.ModuleLoad:
          case uF.zc.Port:
            this.moduleEnded(FF.reason === uF.zc.ModuleTrap ? CF.d.coreStopped : CF.d.cantOpen);
            break;
          case uF.zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${FF.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(FF) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(FF), this.settleOpen(new Error(FF.text))
      }
      saveDone(FF) {
        const WF = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WF || void 0 === WF || WF.resolve(FF)
      }
      saveFailed(FF) {
        this.rejectSave(new Error(FF ? CF.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(FF) {
        FF && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(CF.d.cropBusy.text)) : this.deps.notify(CF.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(FF) {
        const WF = this.pendingOpen;
        this.pendingOpen = null, null === FF ? null === WF || void 0 === WF || WF.resolve() : null === WF || void 0 === WF || WF.reject(FF)
      }
      rejectSave(FF) {
        const WF = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WF || void 0 === WF || WF.reject(FF)
      }
      hold(FF) {
        const WF = 0 === this.holds.size;
        this.holds.set(FF, this.now()), WF && this.deps.setHoldDraws(!0)
      }
      release(FF) {
        this.holds.delete(FF) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);