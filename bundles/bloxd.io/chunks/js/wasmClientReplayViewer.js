export const id = 61;
export const ids = [61];
export const modules = {
  37353: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      d: () => fG
    });
    var wG = ZG(604),
      SG = ZG(29),
      LG = ZG(37301);
    const yG = "replayFileKeptForReload",
      kG = "replayFileKeptForReloadAt",
      UG = "replayFileKeptForReloadTab",
      YG = 3e5,
      VG = 5e3;
    async function pG(GG, bG) {
      const ZG = Date.now(),
        LG = {
          at: ZG,
          bytes: GG,
          source: bG
        },
        YG = await Promise.race([(async () => await SG.e.setItem(kG, ZG) && SG.e.setItem(yG, LG))(), (0, wG.R)(VG).then((() => !1))]);
      YG || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pG = {
        at: ZG,
        vQ: YG
      };
      SG.l.setItem(UG, pG)
    }
    async function fG() {
      var GG;
      const bG = SG.l.getItem(UG);
      null !== bG && SG.l.removeItem(UG);
      const ZG = Date.now(),
        wG = await SG.e.getItem(kG),
        VG = null !== bG && ZG - bG.at <= YG,
        pG = null !== bG && wG === bG.at;
      let fG = null;
      if (null !== wG && (pG || ("number" !== typeof wG || ZG - wG > YG)) && (fG = VG && pG && bG.vQ ? await SG.e.getItem(yG) : null, await Promise.all([SG.e.removeItem(kG), SG.e.removeItem(yG)])), !VG) return null;
      if ((null === (GG = fG) || void 0 === GG ? void 0 : GG.at) !== bG.at) throw new Error(LG.e.replayNotKept.text);
      return {
        bytes: fG.bytes,
        source: fG.source
      }
    }
  },
  37348: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      g: () => LG,
      k: () => SG
    });
    const wG = [9];

    function SG(GG) {
      return wG.includes(GG)
    }

    function LG(GG) {
      return null !== GG && GG >= 3 && GG < wG[0]
    }
  },
  37363: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      f: () => SG
    });
    const wG = "data-replay-ui-active",
      SG = [{
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
  37368: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      f: () => pG,
      h: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(37363);

    function yG() {
      const GG = {};
      for (const {
          group: bG
        }
        of LG.f) GG[bG] = !0;
      return GG
    }
    let kG = yG();

    function UG() {
      SG.l.xh("replayViewer|uiVisibilityChanged")
    }

    function YG() {
      return kG
    }

    function VG(GG, bG) {
      kG[GG] !== bG && (kG = {
        ...kG,
        [GG]: bG
      }, "nametag" === GG && wG.e.set({
        areNametagsHidden: !bG
      }), UG())
    }

    function pG() {
      kG = yG(), wG.e.set({
        areNametagsHidden: !1
      }), UG()
    }
  },
  61147: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      HOLD_TIMEOUT_MS: () => YG,
      ReplayViewer: () => pG
    });
    var wG = ZG(37301),
      SG = ZG(37353),
      LG = ZG(37348),
      yG = ZG(37368),
      kG = ZG(4810),
      UG = ZG(43029);
    const YG = 1e4,
      VG = new Set(["OQ"]);
    class pG {
      constructor(GG) {
        var bG;
        this.deps = GG, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (bG = GG.now) && void 0 !== bG ? bG : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== kG.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Ik() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? wG.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(GG, bG) {
        var ZG, LG, yG, UG;
        const {
          client: YG
        } = this.deps;
        if (!this.playback) {
          if (!YG.setPlayback(!0)) throw new Error(wG.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const VG = this.epoch;
        let pG;
        try {
          pG = await YG.open(GG, (() => (0, SG.c)(GG, bG)))
        } finally {
          this.loadingOpens--
        }
        if (VG !== this.epoch && "reloading" !== pG) throw new Error(wG.e.coreStopped.text);
        if ("opening" !== pG) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const GG = function(GG) {
            switch (GG) {
              case "reloading":
                return null;
              case "stopped":
              case kG.ld.ModuleTrap:
                return wG.e.coreStopped;
              case kG.ld.ModuleLoad:
                return wG.e.viewerLoadFailed;
              case kG.ld.TooLarge:
                return wG.e.cantOpen
            }
          }(pG);
          if (null === GG) return;
          throw new Error(GG.text)
        }
        return this.rejectSave(new Error(wG.e.saveClosed.text)), this.fileName = null !== (ZG = null !== (LG = bG.fileName) && void 0 !== LG ? LG : null === (yG = bG.fileHandle) || void 0 === yG ? void 0 : yG.name) && void 0 !== ZG ? ZG : null, this.fileHandle = null !== (UG = bG.fileHandle) && void 0 !== UG ? UG : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((GG, bG) => {
          this.pendingOpen = {
            resolve: GG,
            reject: bG
          }
        }))
      }
      play() {
        this.holds.has("OQ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("OQ")
      }
      seek(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this.lastView;
        null !== ZG && (bG || GG < ZG.Tp) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(GG, bG)
      }
      setSpeed(GG) {
        this.deps.client.setSpeed(GG)
      }
      setCameraMode(GG) {
        this.deps.client.setCameraMode(GG)
      }
      cycleCameraMode() {
        const GG = this.lastView;
        null !== GG && GG.state !== kG.sd.None && this.setCameraMode(UG.b[(UG.b.indexOf(GG.cameraMode) + 1) % UG.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(GG) {
        this.edited(this.deps.client.setKeyframe(GG))
      }
      moveKeyframe(GG, bG) {
        this.edited(this.deps.client.moveKeyframe(GG, bG))
      }
      deleteKeyframes(GG, bG) {
        this.edited(this.deps.client.deleteKeyframes(GG, bG))
      }
      setMark(GG) {
        this.edited(this.deps.client.setMark(GG))
      }
      crop(GG, bG) {
        return !(bG <= GG) && (null !== this.pendingSave ? (this.deps.notify(wG.e.saveBusy), !1) : !!this.deps.client.crop(GG, bG) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(wG.e.saveBusy.text)) : new Promise(((GG, bG) => {
          const ZG = {
            resolve: GG,
            reject: bG
          };
          this.pendingSave = ZG, this.editsAtSave = this.edits, this.deps.client.save((0, UG.d)()).then((GG => {
            this.pendingSave === ZG && this.saveStarted(GG)
          }), (GG => {
            this.pendingSave === ZG && this.rejectSave(GG instanceof Error ? GG : new Error(String(GG)))
          }))
        }))
      }
      saveStarted(GG) {
        switch (GG) {
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
      markSaved(GG, bG) {
        var ZG, wG;
        this.fileHandle = GG, this.fileName = null !== (ZG = null !== (wG = null === GG || void 0 === GG ? void 0 : GG.name) && void 0 !== wG ? wG : bG) && void 0 !== ZG ? ZG : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(wG.e.coreStopped.text)), this.rejectSave(new Error(wG.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var GG, bG, ZG;
        const wG = this.deps.client.view(),
          SG = wG !== this.lastView;
        this.lastView = wG, this.opening && null !== wG && wG.state !== kG.sd.None && wG.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yG.f)()), this.cropAsked ? (this.cropAsked = !1, null !== wG && wG.state === kG.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== wG && wG.state !== kG.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const LG = 0 === this.settleFrames && 0 === (null !== (GG = null === (bG = (ZG = this.deps).meshPending) || void 0 === bG ? void 0 : bG.call(ZG)) && void 0 !== GG ? GG : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && LG && this.release("opening"), this.holds.has("seek") && LG && this.release("seek"), this.holds.has("crop") && !this.cropRunning && LG && this.release("crop");
        const UG = this.now();
        for (const [yG, kG] of this.holds) !VG.has(yG) && UG - kG >= YG && this.release(yG);
        this.saveRefused && !this.cropping && this.saveFailed(!1), SG && this.deps.onChange()
      }
      cropped() {
        (0, yG.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(GG) {
        switch (GG.reason) {
          case kG.ld.TooLarge:
            break;
          case kG.ld.Open:
          case kG.ld.NothingStaged: {
            this.opening = !1, this.release("opening");
            const bG = (0, LG.g)(GG.version) ? wG.e.replayTooOld : wG.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(bG), this.settleOpen(new Error(bG.text));
            break
          }
          case kG.ld.Crop:
            if (GG.code === kG.id.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(wG.e.cropFailed);
            break;
          case kG.ld.ModuleTrap:
          case kG.ld.ModuleLoad:
          case kG.ld.Port:
            this.moduleEnded(GG.reason === kG.ld.ModuleTrap ? wG.e.coreStopped : wG.e.cantOpen);
            break;
          case kG.ld.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${GG.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(GG) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(GG), this.settleOpen(new Error(GG.text))
      }
      saveDone(GG) {
        const bG = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === bG || void 0 === bG || bG.resolve(GG)
      }
      saveFailed(GG) {
        this.rejectSave(new Error(GG ? wG.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(GG) {
        GG && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wG.e.cropBusy.text)) : this.deps.notify(wG.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(GG) {
        const bG = this.pendingOpen;
        this.pendingOpen = null, null === GG ? null === bG || void 0 === bG || bG.resolve() : null === bG || void 0 === bG || bG.reject(GG)
      }
      rejectSave(GG) {
        const bG = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === bG || void 0 === bG || bG.reject(GG)
      }
      hold(GG) {
        const bG = 0 === this.holds.size;
        this.holds.set(GG, this.now()), bG && this.deps.setHoldDraws(!0)
      }
      release(GG) {
        this.holds.delete(GG) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);