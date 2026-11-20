export const id = 58;
export const ids = [58];
export const modules = {
  36656: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      c: () => Ob
    });
    const Bb = "data-replay-ui-active",
      Ob = [{
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
  36659: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      f: () => Hb,
      i: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(36656);

    function Ub() {
      const bb = {};
      for (const {
          group: ub
        }
        of Gb.c) bb[ub] = !0;
      return bb
    }
    let Lb = Ub();

    function Yb() {
      Ob.i.vp("replayViewer|uiVisibilityChanged")
    }

    function Sb() {
      return Lb
    }

    function ab(bb, ub) {
      Lb[bb] !== ub && (Lb = {
        ...Lb,
        [bb]: ub
      }, "nametag" === bb && Bb.d.set({
        areNametagsHidden: !ub
      }), Yb())
    }

    function Hb() {
      Lb = Ub(), Bb.d.set({
        areNametagsHidden: !1
      }), Yb()
    }
  },
  42033: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      HOLD_TIMEOUT_MS: () => Lb,
      ReplayViewer: () => Sb
    });
    var Bb = hb(36644),
      Ob = hb(36659),
      Gb = hb(4555),
      Ub = hb(42002);
    const Lb = 1e4,
      Yb = new Set(["vZ"]);
    class Sb {
      constructor(bb) {
        var ub;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ub = bb.now) && void 0 !== ub ? ub : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Gb.Xc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get MS() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Bb.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, ub) {
        var hb, Ob, Ub, Lb;
        const {
          client: Yb
        } = this.deps;
        if (!this.playback) {
          if (!Yb.setPlayback(!0)) throw new Error(Bb.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Sb = this.epoch;
        let ab;
        try {
          ab = await Yb.open(bb)
        } finally {
          this.loadingOpens--
        }
        if (Sb !== this.epoch) throw new Error(Bb.e.coreStopped.text);
        if ("opening" !== ab) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case Gb.Mc.ModuleTrap:
                return Bb.e.coreStopped;
              case Gb.Mc.ModuleLoad:
                return Bb.e.viewerLoadFailed;
              case Gb.Mc.TooLarge:
                return Bb.e.cantOpen
            }
          }(ab);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(Bb.e.saveClosed.text)), this.fileName = null !== (hb = null !== (Ob = ub.fileName) && void 0 !== Ob ? Ob : null === (Ub = ub.fileHandle) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== hb ? hb : null, this.fileHandle = null !== (Lb = ub.fileHandle) && void 0 !== Lb ? Lb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, ub) => {
          this.pendingOpen = {
            resolve: bb,
            reject: ub
          }
        }))
      }
      play() {
        this.holds.has("vZ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("vZ")
      }
      seek(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this.lastView;
        null !== hb && (ub || bb < hb.gH) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, ub)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== Gb.Xc.None && this.setCameraMode(Ub.e[(Ub.e.indexOf(bb.cameraMode) + 1) % Ub.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, ub) {
        this.edited(this.deps.client.moveKeyframe(bb, ub))
      }
      deleteKeyframes(bb, ub) {
        this.edited(this.deps.client.deleteKeyframes(bb, ub))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, ub) {
        return !(ub <= bb) && (null !== this.pendingSave ? (this.deps.notify(Bb.e.saveBusy), !1) : !!this.deps.client.crop(bb, ub) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Bb.e.saveBusy.text)) : new Promise(((bb, ub) => {
          const hb = {
            resolve: bb,
            reject: ub
          };
          this.pendingSave = hb, this.editsAtSave = this.edits, this.deps.client.save((0, Ub.f)()).then((bb => {
            this.pendingSave === hb && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === hb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
          }))
        }))
      }
      saveStarted(bb) {
        switch (bb) {
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
      markSaved(bb, ub) {
        var hb, Bb;
        this.fileHandle = bb, this.fileName = null !== (hb = null !== (Bb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== Bb ? Bb : ub) && void 0 !== hb ? hb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Bb.e.coreStopped.text)), this.rejectSave(new Error(Bb.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, ub, hb;
        const Bb = this.deps.client.view(),
          Ub = Bb !== this.lastView;
        this.lastView = Bb, this.opening && null !== Bb && Bb.state !== Gb.Xc.None && Bb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ob.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Bb && Bb.state === Gb.Xc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Bb && Bb.state !== Gb.Xc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Sb = 0 === this.settleFrames && 0 === (null !== (bb = null === (ub = (hb = this.deps).meshPending) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Sb && this.release("opening"), this.holds.has("seek") && Sb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Sb && this.release("crop");
        const ab = this.now();
        for (const [Ob, Gb] of this.holds) !Yb.has(Ob) && ab - Gb >= Lb && (this.release(Ob), "opening" === Ob && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Ub && this.deps.onChange()
      }
      cropped() {
        (0, Ob.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case Gb.Mc.TooLarge:
            break;
          case Gb.Mc.Open:
          case Gb.Mc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Bb.e.cantOpen), this.settleOpen(new Error(Bb.e.cantOpen.text));
            break;
          case Gb.Mc.Crop:
            if (bb.code === Gb.Kc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Bb.e.cropFailed);
            break;
          case Gb.Mc.ModuleTrap:
          case Gb.Mc.ModuleLoad:
          case Gb.Mc.Port:
            this.moduleEnded(bb.reason === Gb.Mc.ModuleTrap ? Bb.e.coreStopped : Bb.e.cantOpen);
            break;
          case Gb.Mc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${bb.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(bb) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(bb), this.settleOpen(new Error(bb.text))
      }
      saveDone(bb) {
        const ub = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ub || void 0 === ub || ub.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? Bb.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Bb.e.cropBusy.text)) : this.deps.notify(Bb.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const ub = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === ub || void 0 === ub || ub.resolve() : null === ub || void 0 === ub || ub.reject(bb)
      }
      rejectSave(bb) {
        const ub = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ub || void 0 === ub || ub.reject(bb)
      }
      hold(bb) {
        const ub = 0 === this.holds.size;
        this.holds.set(bb, this.now()), ub && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);