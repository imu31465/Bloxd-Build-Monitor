export const id = 73;
export const ids = [73];
export const modules = {
  38146: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW,
      d: () => xW
    });
    var mW = OW(643),
      EW = OW(39),
      NW = OW(38105);
    const PW = "replayFileKeptForReload",
      LW = "replayFileKeptForReloadAt",
      cW = "replayFileKeptForReloadTab",
      wW = 3e5,
      tW = 5e3;
    async function ZW(WW, iW) {
      const OW = Date.now(),
        NW = {
          at: OW,
          bytes: WW,
          source: iW
        },
        wW = await Promise.race([(async () => await EW.f.setItem(LW, OW) && EW.f.setItem(PW, NW))(), (0, mW.R)(tW).then((() => !1))]);
      wW || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const ZW = {
        at: OW,
        EZ: wW
      };
      EW.j.setItem(cW, ZW)
    }
    async function xW() {
      var WW;
      const iW = EW.j.getItem(cW);
      null !== iW && EW.j.removeItem(cW);
      const OW = Date.now(),
        mW = await EW.f.getItem(LW),
        tW = null !== iW && OW - iW.at <= wW,
        ZW = null !== iW && mW === iW.at;
      let xW = null;
      if (null !== mW && (ZW || ("number" !== typeof mW || OW - mW > wW)) && (xW = tW && ZW && iW.EZ ? await EW.f.getItem(PW) : null, await Promise.all([EW.f.removeItem(LW), EW.f.removeItem(PW)])), !tW) return null;
      if ((null === (WW = xW) || void 0 === WW ? void 0 : WW.at) !== iW.at) throw new Error(NW.e.replayNotKept.text);
      return {
        bytes: xW.bytes,
        source: xW.source
      }
    }
  },
  38142: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      c: () => NW,
      g: () => EW
    });
    const mW = [9];

    function EW(WW) {
      return mW.includes(WW)
    }

    function NW(WW) {
      return null !== WW && WW >= 3 && WW < mW[0]
    }
  },
  38153: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      c: () => EW
    });
    const mW = "data-replay-ui-active",
      EW = [{
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
  38159: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      i: () => ZW,
      k: () => tW
    });
    var mW = OW(25),
      EW = OW(27),
      NW = OW(38153);

    function PW() {
      const WW = {};
      for (const {
          group: iW
        }
        of NW.c) WW[iW] = !0;
      return WW
    }
    let LW = PW();

    function cW() {
      EW.l.iZ("replayViewer|uiVisibilityChanged")
    }

    function wW() {
      return LW
    }

    function tW(WW, iW) {
      LW[WW] !== iW && (LW = {
        ...LW,
        [WW]: iW
      }, "nametag" === WW && mW.d.set({
        areNametagsHidden: !iW
      }), cW())
    }

    function ZW() {
      LW = PW(), mW.d.set({
        areNametagsHidden: !1
      }), cW()
    }
  },
  64370: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      HOLD_TIMEOUT_MS: () => wW,
      ReplayViewer: () => ZW
    });
    var mW = OW(38105),
      EW = OW(38146),
      NW = OW(38142),
      PW = OW(38159),
      LW = OW(5546),
      cW = OW(54737);
    const wW = 1e4,
      tW = new Set(["kA"]);
    class ZW {
      constructor(WW) {
        var iW;
        this.deps = WW, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (iW = WW.now) && void 0 !== iW ? iW : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== LW.td.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get BL() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? mW.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(WW, iW) {
        var OW, NW, PW, cW;
        const {
          client: wW
        } = this.deps;
        if (!this.playback) {
          if (!wW.setPlayback(!0)) throw new Error(mW.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const tW = this.epoch;
        let ZW;
        try {
          ZW = await wW.open(WW, (() => (0, EW.b)(WW, iW)))
        } finally {
          this.loadingOpens--
        }
        if (tW !== this.epoch && "reloading" !== ZW) throw new Error(mW.e.coreStopped.text);
        if ("opening" !== ZW) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const WW = function(WW) {
            switch (WW) {
              case "reloading":
                return null;
              case "stopped":
              case LW.gd.ModuleTrap:
                return mW.e.coreStopped;
              case LW.gd.ModuleLoad:
                return mW.e.viewerLoadFailed;
              case LW.gd.TooLarge:
                return mW.e.cantOpen
            }
          }(ZW);
          if (null === WW) return;
          throw new Error(WW.text)
        }
        return this.rejectSave(new Error(mW.e.saveClosed.text)), this.fileName = null !== (OW = null !== (NW = iW.fileName) && void 0 !== NW ? NW : null === (PW = iW.fileHandle) || void 0 === PW ? void 0 : PW.name) && void 0 !== OW ? OW : null, this.fileHandle = null !== (cW = iW.fileHandle) && void 0 !== cW ? cW : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((WW, iW) => {
          this.pendingOpen = {
            resolve: WW,
            reject: iW
          }
        }))
      }
      play() {
        this.holds.has("kA") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("kA")
      }
      seek(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this.lastView;
        null !== OW && (iW || WW < OW.hZ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(WW, iW)
      }
      setSpeed(WW) {
        this.deps.client.setSpeed(WW)
      }
      setCameraMode(WW) {
        this.deps.client.setCameraMode(WW)
      }
      cycleCameraMode() {
        const WW = this.lastView;
        null !== WW && WW.state !== LW.td.None && this.setCameraMode(cW.b[(cW.b.indexOf(WW.cameraMode) + 1) % cW.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(WW) {
        this.edited(this.deps.client.setKeyframe(WW))
      }
      moveKeyframe(WW, iW) {
        this.edited(this.deps.client.moveKeyframe(WW, iW))
      }
      deleteKeyframes(WW, iW) {
        this.edited(this.deps.client.deleteKeyframes(WW, iW))
      }
      setMark(WW) {
        this.edited(this.deps.client.setMark(WW))
      }
      crop(WW, iW) {
        return !(iW <= WW) && (null !== this.pendingSave ? (this.deps.notify(mW.e.saveBusy), !1) : !!this.deps.client.crop(WW, iW) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(mW.e.saveBusy.text)) : new Promise(((WW, iW) => {
          const OW = {
            resolve: WW,
            reject: iW
          };
          this.pendingSave = OW, this.editsAtSave = this.edits, this.deps.client.save((0, cW.e)()).then((WW => {
            this.pendingSave === OW && this.saveStarted(WW)
          }), (WW => {
            this.pendingSave === OW && this.rejectSave(WW instanceof Error ? WW : new Error(String(WW)))
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
      markSaved(WW, iW) {
        var OW, mW;
        this.fileHandle = WW, this.fileName = null !== (OW = null !== (mW = null === WW || void 0 === WW ? void 0 : WW.name) && void 0 !== mW ? mW : iW) && void 0 !== OW ? OW : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(mW.e.coreStopped.text)), this.rejectSave(new Error(mW.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var WW, iW, OW;
        const mW = this.deps.client.view(),
          EW = mW !== this.lastView;
        this.lastView = mW, this.opening && null !== mW && mW.state !== LW.td.None && mW.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, PW.i)()), this.cropAsked ? (this.cropAsked = !1, null !== mW && mW.state === LW.td.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== mW && mW.state !== LW.td.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const NW = 0 === this.settleFrames && 0 === (null !== (WW = null === (iW = (OW = this.deps).meshPending) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && NW && this.release("opening"), this.holds.has("seek") && NW && this.release("seek"), this.holds.has("crop") && !this.cropRunning && NW && this.release("crop");
        const cW = this.now();
        for (const [PW, LW] of this.holds) !tW.has(PW) && cW - LW >= wW && this.release(PW);
        this.saveRefused && !this.cropping && this.saveFailed(!1), EW && this.deps.onChange()
      }
      cropped() {
        (0, PW.i)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(WW) {
        switch (WW.reason) {
          case LW.gd.TooLarge:
            break;
          case LW.gd.Open:
          case LW.gd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const iW = (0, NW.c)(WW.version) ? mW.e.replayTooOld : mW.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(iW), this.settleOpen(new Error(iW.text));
            break
          }
          case LW.gd.Crop:
            if (WW.code === LW.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(mW.e.cropFailed);
            break;
          case LW.gd.ModuleTrap:
          case LW.gd.ModuleLoad:
          case LW.gd.Port:
            this.moduleEnded(WW.reason === LW.gd.ModuleTrap ? mW.e.coreStopped : mW.e.cantOpen);
            break;
          case LW.gd.NotLive:
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
        const iW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === iW || void 0 === iW || iW.resolve(WW)
      }
      saveFailed(WW) {
        this.rejectSave(new Error(WW ? mW.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(WW) {
        WW && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(mW.e.cropBusy.text)) : this.deps.notify(mW.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(WW) {
        const iW = this.pendingOpen;
        this.pendingOpen = null, null === WW ? null === iW || void 0 === iW || iW.resolve() : null === iW || void 0 === iW || iW.reject(WW)
      }
      rejectSave(WW) {
        const iW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === iW || void 0 === iW || iW.reject(WW)
      }
      hold(WW) {
        const iW = 0 === this.holds.size;
        this.holds.set(WW, this.now()), iW && this.deps.setHoldDraws(!0)
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