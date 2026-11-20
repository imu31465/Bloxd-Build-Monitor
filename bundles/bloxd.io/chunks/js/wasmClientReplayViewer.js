export const id = 58;
export const ids = [58];
export const modules = {
  36512: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Sv
    });
    const hv = "data-replay-ui-active",
      Sv = [{
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
  36515: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      h: () => Tv,
      l: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(36512);

    function gv() {
      const vv = {};
      for (const {
          group: zv
        }
        of ev.e) vv[zv] = !0;
      return vv
    }
    let pv = gv();

    function dv() {
      Sv.j.zC("replayViewer|uiVisibilityChanged")
    }

    function Nv() {
      return pv
    }

    function lv(vv, zv) {
      pv[vv] !== zv && (pv = {
        ...pv,
        [vv]: zv
      }, "nametag" === vv && hv.c.set({
        areNametagsHidden: !zv
      }), dv())
    }

    function Tv() {
      pv = gv(), hv.c.set({
        areNametagsHidden: !1
      }), dv()
    }
  },
  41945: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      HOLD_TIMEOUT_MS: () => pv,
      ReplayViewer: () => Nv
    });
    var hv = Pv(36498),
      Sv = Pv(36515),
      ev = Pv(4535),
      gv = Pv(41899);
    const pv = 1e4,
      dv = new Set(["Bw"]);
    class Nv {
      constructor(vv) {
        var zv;
        this.deps = vv, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (zv = vv.now) && void 0 !== zv ? zv : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== ev.Cd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Vp() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? hv.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(vv, zv) {
        var Pv, Sv, gv, pv;
        const {
          client: dv
        } = this.deps;
        if (!this.playback) {
          if (!dv.setPlayback(!0)) throw new Error(hv.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Nv = this.epoch;
        let lv;
        try {
          lv = await dv.open(vv)
        } finally {
          this.loadingOpens--
        }
        if (Nv !== this.epoch) throw new Error(hv.c.coreStopped.text);
        if ("opening" !== lv) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const vv = function(vv) {
            switch (vv) {
              case "reloading":
                return null;
              case "stopped":
              case ev.md.ModuleTrap:
                return hv.c.coreStopped;
              case ev.md.ModuleLoad:
                return hv.c.viewerLoadFailed;
              case ev.md.TooLarge:
                return hv.c.cantOpen
            }
          }(lv);
          if (null === vv) return;
          throw new Error(vv.text)
        }
        return this.rejectSave(new Error(hv.c.saveClosed.text)), this.fileName = null !== (Pv = null !== (Sv = zv.fileName) && void 0 !== Sv ? Sv : null === (gv = zv.fileHandle) || void 0 === gv ? void 0 : gv.name) && void 0 !== Pv ? Pv : null, this.fileHandle = null !== (pv = zv.fileHandle) && void 0 !== pv ? pv : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((vv, zv) => {
          this.pendingOpen = {
            resolve: vv,
            reject: zv
          }
        }))
      }
      play() {
        this.holds.has("Bw") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Bw")
      }
      seek(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this.lastView;
        null !== Pv && (zv || vv < Pv.MT) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(vv, zv)
      }
      setSpeed(vv) {
        this.deps.client.setSpeed(vv)
      }
      setCameraMode(vv) {
        this.deps.client.setCameraMode(vv)
      }
      cycleCameraMode() {
        const vv = this.lastView;
        null !== vv && vv.state !== ev.Cd.None && this.setCameraMode(gv.b[(gv.b.indexOf(vv.cameraMode) + 1) % gv.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(vv) {
        this.edited(this.deps.client.setKeyframe(vv))
      }
      moveKeyframe(vv, zv) {
        this.edited(this.deps.client.moveKeyframe(vv, zv))
      }
      deleteKeyframes(vv, zv) {
        this.edited(this.deps.client.deleteKeyframes(vv, zv))
      }
      setMark(vv) {
        this.edited(this.deps.client.setMark(vv))
      }
      crop(vv, zv) {
        return !(zv <= vv) && (null !== this.pendingSave ? (this.deps.notify(hv.c.saveBusy), !1) : !!this.deps.client.crop(vv, zv) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(hv.c.saveBusy.text)) : new Promise(((vv, zv) => {
          const Pv = {
            resolve: vv,
            reject: zv
          };
          this.pendingSave = Pv, this.editsAtSave = this.edits, this.deps.client.save((0, gv.c)()).then((vv => {
            this.pendingSave === Pv && this.saveStarted(vv)
          }), (vv => {
            this.pendingSave === Pv && this.rejectSave(vv instanceof Error ? vv : new Error(String(vv)))
          }))
        }))
      }
      saveStarted(vv) {
        switch (vv) {
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
      markSaved(vv, zv) {
        var Pv, hv;
        this.fileHandle = vv, this.fileName = null !== (Pv = null !== (hv = null === vv || void 0 === vv ? void 0 : vv.name) && void 0 !== hv ? hv : zv) && void 0 !== Pv ? Pv : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(hv.c.coreStopped.text)), this.rejectSave(new Error(hv.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var vv, zv, Pv;
        const hv = this.deps.client.view(),
          gv = hv !== this.lastView;
        this.lastView = hv, this.opening && null !== hv && hv.state !== ev.Cd.None && hv.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Sv.h)()), this.cropAsked ? (this.cropAsked = !1, null !== hv && hv.state === ev.Cd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== hv && hv.state !== ev.Cd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Nv = 0 === this.settleFrames && 0 === (null !== (vv = null === (zv = (Pv = this.deps).meshPending) || void 0 === zv ? void 0 : zv.call(Pv)) && void 0 !== vv ? vv : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Nv && this.release("opening"), this.holds.has("seek") && Nv && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Nv && this.release("crop");
        const lv = this.now();
        for (const [Sv, ev] of this.holds) !dv.has(Sv) && lv - ev >= pv && (this.release(Sv), "opening" === Sv && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), gv && this.deps.onChange()
      }
      cropped() {
        (0, Sv.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(vv) {
        switch (vv.reason) {
          case ev.md.TooLarge:
            break;
          case ev.md.Open:
          case ev.md.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(hv.c.cantOpen), this.settleOpen(new Error(hv.c.cantOpen.text));
            break;
          case ev.md.Crop:
            if (vv.code === ev.kd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(hv.c.cropFailed);
            break;
          case ev.md.ModuleTrap:
          case ev.md.ModuleLoad:
          case ev.md.Port:
            this.moduleEnded(vv.reason === ev.md.ModuleTrap ? hv.c.coreStopped : hv.c.cantOpen);
            break;
          case ev.md.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${vv.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(vv) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(vv), this.settleOpen(new Error(vv.text))
      }
      saveDone(vv) {
        const zv = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zv || void 0 === zv || zv.resolve(vv)
      }
      saveFailed(vv) {
        this.rejectSave(new Error(vv ? hv.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(vv) {
        vv && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(hv.c.cropBusy.text)) : this.deps.notify(hv.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(vv) {
        const zv = this.pendingOpen;
        this.pendingOpen = null, null === vv ? null === zv || void 0 === zv || zv.resolve() : null === zv || void 0 === zv || zv.reject(vv)
      }
      rejectSave(vv) {
        const zv = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zv || void 0 === zv || zv.reject(vv)
      }
      hold(vv) {
        const zv = 0 === this.holds.size;
        this.holds.set(vv, this.now()), zv && this.deps.setHoldDraws(!0)
      }
      release(vv) {
        this.holds.delete(vv) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);