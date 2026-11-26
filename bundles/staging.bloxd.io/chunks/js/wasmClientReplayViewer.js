export const id = 72;
export const ids = [72];
export const modules = {
  38165: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      e: () => vV
    });
    var JV = xV(657),
      YV = xV(40),
      UV = xV(38125);
    const yV = "replayFileKeptForReload",
      pV = "replayFileKeptForReloadAt",
      QV = "replayFileKeptForReloadTab",
      nV = 3e5,
      wV = 5e3;
    async function ZV(VV, eV) {
      const xV = Date.now(),
        UV = {
          at: xV,
          bytes: VV,
          source: eV
        },
        nV = await Promise.race([(async () => await YV.i.setItem(pV, xV) && YV.i.setItem(yV, UV))(), (0, JV.R)(wV).then((() => !1))]);
      nV || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const ZV = {
        at: xV,
        ZZ: nV
      };
      YV.q.setItem(QV, ZV)
    }
    async function vV() {
      var VV;
      const eV = YV.q.getItem(QV);
      null !== eV && YV.q.removeItem(QV);
      const xV = Date.now(),
        JV = await YV.i.getItem(pV),
        wV = null !== eV && xV - eV.at <= nV,
        ZV = null !== eV && JV === eV.at;
      let vV = null;
      if (null !== JV && (ZV || ("number" !== typeof JV || xV - JV > nV)) && (vV = wV && ZV && eV.ZZ ? await YV.i.getItem(yV) : null, await Promise.all([YV.i.removeItem(pV), YV.i.removeItem(yV)])), !wV) return null;
      if ((null === (VV = vV) || void 0 === VV ? void 0 : VV.at) !== eV.at) throw new Error(UV.b.replayNotKept.text);
      return {
        bytes: vV.bytes,
        source: vV.source
      }
    }
  },
  38161: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      e: () => UV,
      i: () => YV
    });
    const JV = [9];

    function YV(VV) {
      return JV.includes(VV)
    }

    function UV(VV) {
      return null !== VV && VV >= 3 && VV < JV[0]
    }
  },
  38172: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      c: () => YV
    });
    const JV = "data-replay-ui-active",
      YV = [{
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
  38174: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      g: () => ZV,
      k: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(38172);

    function yV() {
      const VV = {};
      for (const {
          group: eV
        }
        of UV.c) VV[eV] = !0;
      return VV
    }
    let pV = yV();

    function QV() {
      YV.h.QZ("replayViewer|uiVisibilityChanged")
    }

    function nV() {
      return pV
    }

    function wV(VV, eV) {
      pV[VV] !== eV && (pV = {
        ...pV,
        [VV]: eV
      }, "nametag" === VV && JV.b.set({
        areNametagsHidden: !eV
      }), QV())
    }

    function ZV() {
      pV = yV(), JV.b.set({
        areNametagsHidden: !1
      }), QV()
    }
  },
  63638: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      HOLD_TIMEOUT_MS: () => nV,
      ReplayViewer: () => ZV
    });
    var JV = xV(38125),
      YV = xV(38165),
      UV = xV(38161),
      yV = xV(38174),
      pV = xV(5297),
      QV = xV(53866);
    const nV = 1e4,
      wV = new Set(["Xk"]);
    class ZV {
      constructor(VV) {
        var eV;
        this.deps = VV, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (eV = VV.now) && void 0 !== eV ? eV : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== pV.qd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get hn() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? JV.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(VV, eV) {
        var xV, UV, yV, QV;
        const {
          client: nV
        } = this.deps;
        if (!this.playback) {
          if (!nV.setPlayback(!0)) throw new Error(JV.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const wV = this.epoch;
        let ZV;
        try {
          ZV = await nV.open(VV, (() => (0, YV.d)(VV, eV)))
        } finally {
          this.loadingOpens--
        }
        if (wV !== this.epoch && "reloading" !== ZV) throw new Error(JV.b.coreStopped.text);
        if ("opening" !== ZV) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const VV = function(VV) {
            switch (VV) {
              case "reloading":
                return null;
              case "stopped":
              case pV.fd.ModuleTrap:
                return JV.b.coreStopped;
              case pV.fd.ModuleLoad:
                return JV.b.viewerLoadFailed;
              case pV.fd.TooLarge:
                return JV.b.cantOpen
            }
          }(ZV);
          if (null === VV) return;
          throw new Error(VV.text)
        }
        return this.rejectSave(new Error(JV.b.saveClosed.text)), this.fileName = null !== (xV = null !== (UV = eV.fileName) && void 0 !== UV ? UV : null === (yV = eV.fileHandle) || void 0 === yV ? void 0 : yV.name) && void 0 !== xV ? xV : null, this.fileHandle = null !== (QV = eV.fileHandle) && void 0 !== QV ? QV : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((VV, eV) => {
          this.pendingOpen = {
            resolve: VV,
            reject: eV
          }
        }))
      }
      play() {
        this.holds.has("Xk") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Xk")
      }
      seek(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this.lastView;
        null !== xV && (eV || VV < xV.iZ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(VV, eV)
      }
      setSpeed(VV) {
        this.deps.client.setSpeed(VV)
      }
      setCameraMode(VV) {
        this.deps.client.setCameraMode(VV)
      }
      cycleCameraMode() {
        const VV = this.lastView;
        null !== VV && VV.state !== pV.qd.None && this.setCameraMode(QV.e[(QV.e.indexOf(VV.cameraMode) + 1) % QV.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(VV) {
        this.edited(this.deps.client.setKeyframe(VV))
      }
      moveKeyframe(VV, eV) {
        this.edited(this.deps.client.moveKeyframe(VV, eV))
      }
      deleteKeyframes(VV, eV) {
        this.edited(this.deps.client.deleteKeyframes(VV, eV))
      }
      setMark(VV) {
        this.edited(this.deps.client.setMark(VV))
      }
      crop(VV, eV) {
        return !(eV <= VV) && (null !== this.pendingSave ? (this.deps.notify(JV.b.saveBusy), !1) : !!this.deps.client.crop(VV, eV) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(JV.b.saveBusy.text)) : new Promise(((VV, eV) => {
          const xV = {
            resolve: VV,
            reject: eV
          };
          this.pendingSave = xV, this.editsAtSave = this.edits, this.deps.client.save((0, QV.g)()).then((VV => {
            this.pendingSave === xV && this.saveStarted(VV)
          }), (VV => {
            this.pendingSave === xV && this.rejectSave(VV instanceof Error ? VV : new Error(String(VV)))
          }))
        }))
      }
      saveStarted(VV) {
        switch (VV) {
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
      markSaved(VV, eV) {
        var xV, JV;
        this.fileHandle = VV, this.fileName = null !== (xV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.name) && void 0 !== JV ? JV : eV) && void 0 !== xV ? xV : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(JV.b.coreStopped.text)), this.rejectSave(new Error(JV.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var VV, eV, xV;
        const JV = this.deps.client.view(),
          YV = JV !== this.lastView;
        this.lastView = JV, this.opening && null !== JV && JV.state !== pV.qd.None && JV.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yV.g)()), this.cropAsked ? (this.cropAsked = !1, null !== JV && JV.state === pV.qd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== JV && JV.state !== pV.qd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const UV = 0 === this.settleFrames && 0 === (null !== (VV = null === (eV = (xV = this.deps).meshPending) || void 0 === eV ? void 0 : eV.call(xV)) && void 0 !== VV ? VV : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && UV && this.release("opening"), this.holds.has("seek") && UV && this.release("seek"), this.holds.has("crop") && !this.cropRunning && UV && this.release("crop");
        const QV = this.now();
        for (const [yV, pV] of this.holds) !wV.has(yV) && QV - pV >= nV && this.release(yV);
        this.saveRefused && !this.cropping && this.saveFailed(!1), YV && this.deps.onChange()
      }
      cropped() {
        (0, yV.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(VV) {
        switch (VV.reason) {
          case pV.fd.TooLarge:
            break;
          case pV.fd.Open:
          case pV.fd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const eV = (0, UV.e)(VV.version) ? JV.b.replayTooOld : JV.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(eV), this.settleOpen(new Error(eV.text));
            break
          }
          case pV.fd.Crop:
            if (VV.code === pV.ed.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(JV.b.cropFailed);
            break;
          case pV.fd.ModuleTrap:
          case pV.fd.ModuleLoad:
          case pV.fd.Port:
            this.moduleEnded(VV.reason === pV.fd.ModuleTrap ? JV.b.coreStopped : JV.b.cantOpen);
            break;
          case pV.fd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${VV.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(VV) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(VV), this.settleOpen(new Error(VV.text))
      }
      saveDone(VV) {
        const eV = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === eV || void 0 === eV || eV.resolve(VV)
      }
      saveFailed(VV) {
        this.rejectSave(new Error(VV ? JV.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(VV) {
        VV && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(JV.b.cropBusy.text)) : this.deps.notify(JV.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(VV) {
        const eV = this.pendingOpen;
        this.pendingOpen = null, null === VV ? null === eV || void 0 === eV || eV.resolve() : null === eV || void 0 === eV || eV.reject(VV)
      }
      rejectSave(VV) {
        const eV = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === eV || void 0 === eV || eV.reject(VV)
      }
      hold(VV) {
        const eV = 0 === this.holds.size;
        this.holds.set(VV, this.now()), eV && this.deps.setHoldDraws(!0)
      }
      release(VV) {
        this.holds.delete(VV) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);