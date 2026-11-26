export const id = 72;
export const ids = [72];
export const modules = {
  37717: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      f: () => NU
    });
    var cU = zU(646),
      yU = zU(42),
      QU = zU(37674);
    const AU = "replayFileKeptForReload",
      FU = "replayFileKeptForReloadAt",
      oU = "replayFileKeptForReloadTab",
      DU = 3e5,
      EU = 5e3;
    async function YU(UU, XU) {
      const zU = Date.now(),
        QU = {
          at: zU,
          bytes: UU,
          source: XU
        },
        DU = await Promise.race([(async () => await yU.g.setItem(FU, zU) && yU.g.setItem(AU, QU))(), (0, cU.S)(EU).then((() => !1))]);
      DU || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const YU = {
        at: zU,
        cY: DU
      };
      yU.n.setItem(oU, YU)
    }
    async function NU() {
      var UU;
      const XU = yU.n.getItem(oU);
      null !== XU && yU.n.removeItem(oU);
      const zU = Date.now(),
        cU = await yU.g.getItem(FU),
        EU = null !== XU && zU - XU.at <= DU,
        YU = null !== XU && cU === XU.at;
      let NU = null;
      if (null !== cU && (YU || ("number" !== typeof cU || zU - cU > DU)) && (NU = EU && YU && XU.cY ? await yU.g.getItem(AU) : null, await Promise.all([yU.g.removeItem(FU), yU.g.removeItem(AU)])), !EU) return null;
      if ((null === (UU = NU) || void 0 === UU ? void 0 : UU.at) !== XU.at) throw new Error(QU.e.replayNotKept.text);
      return {
        bytes: NU.bytes,
        source: NU.source
      }
    }
  },
  37708: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => QU,
      g: () => yU
    });
    const cU = [9];

    function yU(UU) {
      return cU.includes(UU)
    }

    function QU(UU) {
      return null !== UU && UU >= 3 && UU < cU[0]
    }
  },
  37728: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      g: () => yU
    });
    const cU = "data-replay-ui-active",
      yU = [{
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
  37732: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      g: () => YU,
      h: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(37728);

    function AU() {
      const UU = {};
      for (const {
          group: XU
        }
        of QU.g) UU[XU] = !0;
      return UU
    }
    let FU = AU();

    function oU() {
      yU.k.UY("replayViewer|uiVisibilityChanged")
    }

    function DU() {
      return FU
    }

    function EU(UU, XU) {
      FU[UU] !== XU && (FU = {
        ...FU,
        [UU]: XU
      }, "nametag" === UU && cU.e.set({
        areNametagsHidden: !XU
      }), oU())
    }

    function YU() {
      FU = AU(), cU.e.set({
        areNametagsHidden: !1
      }), oU()
    }
  },
  63283: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      HOLD_TIMEOUT_MS: () => DU,
      ReplayViewer: () => YU
    });
    var cU = zU(37674),
      yU = zU(37717),
      QU = zU(37708),
      AU = zU(37732),
      FU = zU(5318),
      oU = zU(53645);
    const DU = 1e4,
      EU = new Set(["Fp"]);
    class YU {
      constructor(UU) {
        var XU;
        this.deps = UU, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (XU = UU.now) && void 0 !== XU ? XU : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== FU.od.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get uD() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? cU.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(UU, XU) {
        var zU, QU, AU, oU;
        const {
          client: DU
        } = this.deps;
        if (!this.playback) {
          if (!DU.setPlayback(!0)) throw new Error(cU.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const EU = this.epoch;
        let YU;
        try {
          YU = await DU.open(UU, (() => (0, yU.b)(UU, XU)))
        } finally {
          this.loadingOpens--
        }
        if (EU !== this.epoch && "reloading" !== YU) throw new Error(cU.e.coreStopped.text);
        if ("opening" !== YU) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const UU = function(UU) {
            switch (UU) {
              case "reloading":
                return null;
              case "stopped":
              case FU.bd.ModuleTrap:
                return cU.e.coreStopped;
              case FU.bd.ModuleLoad:
                return cU.e.viewerLoadFailed;
              case FU.bd.TooLarge:
                return cU.e.cantOpen
            }
          }(YU);
          if (null === UU) return;
          throw new Error(UU.text)
        }
        return this.rejectSave(new Error(cU.e.saveClosed.text)), this.fileName = null !== (zU = null !== (QU = XU.fileName) && void 0 !== QU ? QU : null === (AU = XU.fileHandle) || void 0 === AU ? void 0 : AU.name) && void 0 !== zU ? zU : null, this.fileHandle = null !== (oU = XU.fileHandle) && void 0 !== oU ? oU : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((UU, XU) => {
          this.pendingOpen = {
            resolve: UU,
            reject: XU
          }
        }))
      }
      play() {
        this.holds.has("Fp") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Fp")
      }
      seek(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this.lastView;
        null !== zU && (XU || UU < zU.LY) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(UU, XU)
      }
      setSpeed(UU) {
        this.deps.client.setSpeed(UU)
      }
      setCameraMode(UU) {
        this.deps.client.setCameraMode(UU)
      }
      cycleCameraMode() {
        const UU = this.lastView;
        null !== UU && UU.state !== FU.od.None && this.setCameraMode(oU.d[(oU.d.indexOf(UU.cameraMode) + 1) % oU.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(UU) {
        this.edited(this.deps.client.setKeyframe(UU))
      }
      moveKeyframe(UU, XU) {
        this.edited(this.deps.client.moveKeyframe(UU, XU))
      }
      deleteKeyframes(UU, XU) {
        this.edited(this.deps.client.deleteKeyframes(UU, XU))
      }
      setMark(UU) {
        this.edited(this.deps.client.setMark(UU))
      }
      crop(UU, XU) {
        return !(XU <= UU) && (null !== this.pendingSave ? (this.deps.notify(cU.e.saveBusy), !1) : !!this.deps.client.crop(UU, XU) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(cU.e.saveBusy.text)) : new Promise(((UU, XU) => {
          const zU = {
            resolve: UU,
            reject: XU
          };
          this.pendingSave = zU, this.editsAtSave = this.edits, this.deps.client.save((0, oU.f)()).then((UU => {
            this.pendingSave === zU && this.saveStarted(UU)
          }), (UU => {
            this.pendingSave === zU && this.rejectSave(UU instanceof Error ? UU : new Error(String(UU)))
          }))
        }))
      }
      saveStarted(UU) {
        switch (UU) {
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
      markSaved(UU, XU) {
        var zU, cU;
        this.fileHandle = UU, this.fileName = null !== (zU = null !== (cU = null === UU || void 0 === UU ? void 0 : UU.name) && void 0 !== cU ? cU : XU) && void 0 !== zU ? zU : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(cU.e.coreStopped.text)), this.rejectSave(new Error(cU.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var UU, XU, zU;
        const cU = this.deps.client.view(),
          yU = cU !== this.lastView;
        this.lastView = cU, this.opening && null !== cU && cU.state !== FU.od.None && cU.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, AU.g)()), this.cropAsked ? (this.cropAsked = !1, null !== cU && cU.state === FU.od.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== cU && cU.state !== FU.od.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const QU = 0 === this.settleFrames && 0 === (null !== (UU = null === (XU = (zU = this.deps).meshPending) || void 0 === XU ? void 0 : XU.call(zU)) && void 0 !== UU ? UU : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && QU && this.release("opening"), this.holds.has("seek") && QU && this.release("seek"), this.holds.has("crop") && !this.cropRunning && QU && this.release("crop");
        const oU = this.now();
        for (const [AU, FU] of this.holds) !EU.has(AU) && oU - FU >= DU && this.release(AU);
        this.saveRefused && !this.cropping && this.saveFailed(!1), yU && this.deps.onChange()
      }
      cropped() {
        (0, AU.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(UU) {
        switch (UU.reason) {
          case FU.bd.TooLarge:
            break;
          case FU.bd.Open:
          case FU.bd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const XU = (0, QU.e)(UU.version) ? cU.e.replayTooOld : cU.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(XU), this.settleOpen(new Error(XU.text));
            break
          }
          case FU.bd.Crop:
            if (UU.code === FU.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(cU.e.cropFailed);
            break;
          case FU.bd.ModuleTrap:
          case FU.bd.ModuleLoad:
          case FU.bd.Port:
            this.moduleEnded(UU.reason === FU.bd.ModuleTrap ? cU.e.coreStopped : cU.e.cantOpen);
            break;
          case FU.bd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${UU.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(UU) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(UU), this.settleOpen(new Error(UU.text))
      }
      saveDone(UU) {
        const XU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === XU || void 0 === XU || XU.resolve(UU)
      }
      saveFailed(UU) {
        this.rejectSave(new Error(UU ? cU.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(UU) {
        UU && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(cU.e.cropBusy.text)) : this.deps.notify(cU.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(UU) {
        const XU = this.pendingOpen;
        this.pendingOpen = null, null === UU ? null === XU || void 0 === XU || XU.resolve() : null === XU || void 0 === XU || XU.reject(UU)
      }
      rejectSave(UU) {
        const XU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === XU || void 0 === XU || XU.reject(UU)
      }
      hold(UU) {
        const XU = 0 === this.holds.size;
        this.holds.set(UU, this.now()), XU && this.deps.setHoldDraws(!0)
      }
      release(UU) {
        this.holds.delete(UU) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);