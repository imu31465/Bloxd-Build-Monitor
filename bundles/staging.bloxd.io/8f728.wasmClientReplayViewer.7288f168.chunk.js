export const id = 50;
export const ids = [50];
export const modules = {
  35594: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      g: () => Ic
    });
    const Vc = "data-replay-ui-active",
      Ic = [{
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
  35601: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc,
      e: () => Oc,
      f: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(35594);

    function uc() {
      const cB = {};
      for (const {
          group: Bc
        }
        of rB.g) cB[Bc] = !0;
      return cB
    }
    let sc = uc();

    function Mc() {
      Ic.i.Vu("replayViewer|uiVisibilityChanged")
    }

    function Pc() {
      return sc
    }

    function qB(cB, Bc) {
      sc[cB] !== Bc && (sc = {
        ...sc,
        [cB]: Bc
      }, "nametag" === cB && Vc.d.set({
        areNametagsHidden: !Bc
      }), Mc())
    }

    function Oc() {
      sc = uc(), Vc.d.set({
        areNametagsHidden: !1
      }), Mc()
    }
  },
  40573: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      HOLD_TIMEOUT_MS: () => sc,
      ReplayViewer: () => Pc
    });
    var Vc = nc(35584),
      Ic = nc(35601),
      rB = nc(3838),
      uc = nc(40530);
    const sc = 1e4,
      Mc = new Set(["qI"]);
    class Pc {
      constructor(cB) {
        var Bc;
        this.deps = cB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Bc = cB.now) && void 0 !== Bc ? Bc : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== rB.Ac.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get XB() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Vc.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(cB, Bc) {
        var nc, Ic, uc, sc;
        const {
          client: Mc
        } = this.deps;
        if (!this.playback) {
          if (!Mc.setPlayback(!0)) throw new Error(Vc.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Pc = this.epoch;
        let qB;
        try {
          qB = await Mc.open(cB)
        } finally {
          this.loadingOpens--
        }
        if (Pc !== this.epoch) throw new Error(Vc.b.coreStopped.text);
        if ("opening" !== qB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const cB = function(cB) {
            switch (cB) {
              case "reloading":
                return null;
              case "stopped":
              case rB.uc.ModuleTrap:
                return Vc.b.coreStopped;
              case rB.uc.ModuleLoad:
                return Vc.b.viewerLoadFailed;
              case rB.uc.TooLarge:
                return Vc.b.cantOpen
            }
          }(qB);
          if (null === cB) return;
          throw new Error(cB.text)
        }
        return this.rejectSave(new Error(Vc.b.saveClosed.text)), this.fileName = null !== (nc = null !== (Ic = Bc.fileName) && void 0 !== Ic ? Ic : null === (uc = Bc.fileHandle) || void 0 === uc ? void 0 : uc.name) && void 0 !== nc ? nc : null, this.fileHandle = null !== (sc = Bc.fileHandle) && void 0 !== sc ? sc : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((cB, Bc) => {
          this.pendingOpen = {
            resolve: cB,
            reject: Bc
          }
        }))
      }
      play() {
        this.holds.has("qI") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("qI")
      }
      seek(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this.lastView;
        null !== nc && (Bc || cB < nc.cn) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(cB, Bc)
      }
      setSpeed(cB) {
        this.deps.client.setSpeed(cB)
      }
      setCameraMode(cB) {
        this.deps.client.setCameraMode(cB)
      }
      cycleCameraMode() {
        const cB = this.lastView;
        null !== cB && cB.state !== rB.Ac.None && this.setCameraMode(uc.d[(uc.d.indexOf(cB.cameraMode) + 1) % uc.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(cB) {
        this.edited(this.deps.client.setKeyframe(cB))
      }
      moveKeyframe(cB, Bc) {
        this.edited(this.deps.client.moveKeyframe(cB, Bc))
      }
      deleteKeyframes(cB, Bc) {
        this.edited(this.deps.client.deleteKeyframes(cB, Bc))
      }
      setMark(cB) {
        this.edited(this.deps.client.setMark(cB))
      }
      crop(cB, Bc) {
        return !(Bc <= cB) && (null !== this.pendingSave ? (this.deps.notify(Vc.b.saveBusy), !1) : !!this.deps.client.crop(cB, Bc) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Vc.b.saveBusy.text)) : new Promise(((cB, Bc) => {
          const nc = {
            resolve: cB,
            reject: Bc
          };
          this.pendingSave = nc, this.editsAtSave = this.edits, this.deps.client.save((0, uc.h)()).then((cB => {
            this.pendingSave === nc && this.saveStarted(cB)
          }), (cB => {
            this.pendingSave === nc && this.rejectSave(cB instanceof Error ? cB : new Error(String(cB)))
          }))
        }))
      }
      saveStarted(cB) {
        switch (cB) {
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
      markSaved(cB, Bc) {
        var nc, Vc;
        this.fileHandle = cB, this.fileName = null !== (nc = null !== (Vc = null === cB || void 0 === cB ? void 0 : cB.name) && void 0 !== Vc ? Vc : Bc) && void 0 !== nc ? nc : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Vc.b.coreStopped.text)), this.rejectSave(new Error(Vc.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var cB, Bc, nc;
        const Vc = this.deps.client.view(),
          uc = Vc !== this.lastView;
        this.lastView = Vc, this.opening && null !== Vc && Vc.state !== rB.Ac.None && Vc.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ic.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Vc && Vc.state === rB.Ac.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Vc && Vc.state !== rB.Ac.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Pc = 0 === this.settleFrames && 0 === (null !== (cB = null === (Bc = (nc = this.deps).meshPending) || void 0 === Bc ? void 0 : Bc.call(nc)) && void 0 !== cB ? cB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Pc && this.release("opening"), this.holds.has("seek") && Pc && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Pc && this.release("crop");
        const qB = this.now();
        for (const [Ic, rB] of this.holds) !Mc.has(Ic) && qB - rB >= sc && (this.release(Ic), "opening" === Ic && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), uc && this.deps.onChange()
      }
      cropped() {
        (0, Ic.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(cB) {
        switch (cB.reason) {
          case rB.uc.TooLarge:
            break;
          case rB.uc.Open:
          case rB.uc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Vc.b.cantOpen), this.settleOpen(new Error(Vc.b.cantOpen.text));
            break;
          case rB.uc.Crop:
            if (cB.code === rB.sc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Vc.b.cropFailed);
            break;
          case rB.uc.ModuleTrap:
          case rB.uc.ModuleLoad:
          case rB.uc.Port:
            this.moduleEnded(cB.reason === rB.uc.ModuleTrap ? Vc.b.coreStopped : Vc.b.cantOpen);
            break;
          case rB.uc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${cB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(cB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(cB), this.settleOpen(new Error(cB.text))
      }
      saveDone(cB) {
        const Bc = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Bc || void 0 === Bc || Bc.resolve(cB)
      }
      saveFailed(cB) {
        this.rejectSave(new Error(cB ? Vc.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(cB) {
        cB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Vc.b.cropBusy.text)) : this.deps.notify(Vc.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(cB) {
        const Bc = this.pendingOpen;
        this.pendingOpen = null, null === cB ? null === Bc || void 0 === Bc || Bc.resolve() : null === Bc || void 0 === Bc || Bc.reject(cB)
      }
      rejectSave(cB) {
        const Bc = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Bc || void 0 === Bc || Bc.reject(cB)
      }
      hold(cB) {
        const Bc = 0 === this.holds.size;
        this.holds.set(cB, this.now()), Bc && this.deps.setHoldDraws(!0)
      }
      release(cB) {
        this.holds.delete(cB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);