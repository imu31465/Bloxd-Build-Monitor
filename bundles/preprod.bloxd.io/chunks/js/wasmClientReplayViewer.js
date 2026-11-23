export const id = 60;
export const ids = [60];
export const modules = {
  36858: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      i: () => NC
    });
    var QC = ZC(600),
      wC = ZC(38),
      bC = ZC(36811);
    const nC = "replayFileKeptForReload",
      fC = "replayFileKeptForReloadAt",
      oC = "replayFileKeptForReloadTab",
      qC = 3e5,
      FC = 5e3;
    async function WC(CC, zC) {
      const ZC = Date.now(),
        bC = {
          at: ZC,
          bytes: CC,
          source: zC
        },
        qC = await Promise.race([(async () => await wC.g.setItem(fC, ZC) && wC.g.setItem(nC, bC))(), (0, QC.N)(FC).then((() => !1))]);
      qC || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const WC = {
        at: ZC,
        lM: qC
      };
      wC.k.setItem(oC, WC)
    }
    async function NC() {
      var CC;
      const zC = wC.k.getItem(oC);
      null !== zC && wC.k.removeItem(oC);
      const ZC = Date.now(),
        QC = await wC.g.getItem(fC),
        FC = null !== zC && ZC - zC.at <= qC,
        WC = null !== zC && QC === zC.at;
      let NC = null;
      if (null !== QC && (WC || ("number" !== typeof QC || ZC - QC > qC)) && (NC = FC && WC && zC.lM ? await wC.g.getItem(nC) : null, await Promise.all([wC.g.removeItem(fC), wC.g.removeItem(nC)])), !FC) return null;
      if ((null === (CC = NC) || void 0 === CC ? void 0 : CC.at) !== zC.at) throw new Error(bC.c.replayNotKept.text);
      return {
        bytes: NC.bytes,
        source: NC.source
      }
    }
  },
  36851: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => bC,
      l: () => wC
    });
    const QC = [9];

    function wC(CC) {
      return QC.includes(CC)
    }

    function bC(CC) {
      return null !== CC && CC >= 3 && CC < QC[0]
    }
  },
  36870: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      g: () => wC
    });
    const QC = "data-replay-ui-active",
      wC = [{
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
  36873: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      f: () => WC,
      g: () => FC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(36870);

    function nC() {
      const CC = {};
      for (const {
          group: zC
        }
        of bC.g) CC[zC] = !0;
      return CC
    }
    let fC = nC();

    function oC() {
      wC.o.bp("replayViewer|uiVisibilityChanged")
    }

    function qC() {
      return fC
    }

    function FC(CC, zC) {
      fC[CC] !== zC && (fC = {
        ...fC,
        [CC]: zC
      }, "nametag" === CC && QC.b.set({
        areNametagsHidden: !zC
      }), oC())
    }

    function WC() {
      fC = nC(), QC.b.set({
        areNametagsHidden: !1
      }), oC()
    }
  },
  60273: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      HOLD_TIMEOUT_MS: () => qC,
      ReplayViewer: () => WC
    });
    var QC = ZC(36811),
      wC = ZC(36858),
      bC = ZC(36851),
      nC = ZC(36873),
      fC = ZC(4727),
      oC = ZC(42382);
    const qC = 1e4,
      FC = new Set(["zg"]);
    class WC {
      constructor(CC) {
        var zC;
        this.deps = CC, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (zC = CC.now) && void 0 !== zC ? zC : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== fC.id.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get vq() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? QC.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(CC, zC) {
        var ZC, bC, nC, oC;
        const {
          client: qC
        } = this.deps;
        if (!this.playback) {
          if (!qC.setPlayback(!0)) throw new Error(QC.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const FC = this.epoch;
        let WC;
        try {
          WC = await qC.open(CC, (() => (0, wC.e)(CC, zC)))
        } finally {
          this.loadingOpens--
        }
        if (FC !== this.epoch && "reloading" !== WC) throw new Error(QC.c.coreStopped.text);
        if ("opening" !== WC) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const CC = function(CC) {
            switch (CC) {
              case "reloading":
                return null;
              case "stopped":
              case fC._c.ModuleTrap:
                return QC.c.coreStopped;
              case fC._c.ModuleLoad:
                return QC.c.viewerLoadFailed;
              case fC._c.TooLarge:
                return QC.c.cantOpen
            }
          }(WC);
          if (null === CC) return;
          throw new Error(CC.text)
        }
        return this.rejectSave(new Error(QC.c.saveClosed.text)), this.fileName = null !== (ZC = null !== (bC = zC.fileName) && void 0 !== bC ? bC : null === (nC = zC.fileHandle) || void 0 === nC ? void 0 : nC.name) && void 0 !== ZC ? ZC : null, this.fileHandle = null !== (oC = zC.fileHandle) && void 0 !== oC ? oC : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((CC, zC) => {
          this.pendingOpen = {
            resolve: CC,
            reject: zC
          }
        }))
      }
      play() {
        this.holds.has("zg") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("zg")
      }
      seek(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this.lastView;
        null !== ZC && (zC || CC < ZC.ZN) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(CC, zC)
      }
      setSpeed(CC) {
        this.deps.client.setSpeed(CC)
      }
      setCameraMode(CC) {
        this.deps.client.setCameraMode(CC)
      }
      cycleCameraMode() {
        const CC = this.lastView;
        null !== CC && CC.state !== fC.id.None && this.setCameraMode(oC.e[(oC.e.indexOf(CC.cameraMode) + 1) % oC.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(CC) {
        this.edited(this.deps.client.setKeyframe(CC))
      }
      moveKeyframe(CC, zC) {
        this.edited(this.deps.client.moveKeyframe(CC, zC))
      }
      deleteKeyframes(CC, zC) {
        this.edited(this.deps.client.deleteKeyframes(CC, zC))
      }
      setMark(CC) {
        this.edited(this.deps.client.setMark(CC))
      }
      crop(CC, zC) {
        return !(zC <= CC) && (null !== this.pendingSave ? (this.deps.notify(QC.c.saveBusy), !1) : !!this.deps.client.crop(CC, zC) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(QC.c.saveBusy.text)) : new Promise(((CC, zC) => {
          const ZC = {
            resolve: CC,
            reject: zC
          };
          this.pendingSave = ZC, this.editsAtSave = this.edits, this.deps.client.save((0, oC.i)()).then((CC => {
            this.pendingSave === ZC && this.saveStarted(CC)
          }), (CC => {
            this.pendingSave === ZC && this.rejectSave(CC instanceof Error ? CC : new Error(String(CC)))
          }))
        }))
      }
      saveStarted(CC) {
        switch (CC) {
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
      markSaved(CC, zC) {
        var ZC, QC;
        this.fileHandle = CC, this.fileName = null !== (ZC = null !== (QC = null === CC || void 0 === CC ? void 0 : CC.name) && void 0 !== QC ? QC : zC) && void 0 !== ZC ? ZC : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(QC.c.coreStopped.text)), this.rejectSave(new Error(QC.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var CC, zC, ZC;
        const QC = this.deps.client.view(),
          wC = QC !== this.lastView;
        this.lastView = QC, this.opening && null !== QC && QC.state !== fC.id.None && QC.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, nC.f)()), this.cropAsked ? (this.cropAsked = !1, null !== QC && QC.state === fC.id.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== QC && QC.state !== fC.id.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const bC = 0 === this.settleFrames && 0 === (null !== (CC = null === (zC = (ZC = this.deps).meshPending) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && bC && this.release("opening"), this.holds.has("seek") && bC && this.release("seek"), this.holds.has("crop") && !this.cropRunning && bC && this.release("crop");
        const oC = this.now();
        for (const [nC, fC] of this.holds) !FC.has(nC) && oC - fC >= qC && this.release(nC);
        this.saveRefused && !this.cropping && this.saveFailed(!1), wC && this.deps.onChange()
      }
      cropped() {
        (0, nC.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(CC) {
        switch (CC.reason) {
          case fC._c.TooLarge:
            break;
          case fC._c.Open:
          case fC._c.NothingStaged: {
            this.opening = !1, this.release("opening");
            const zC = (0, bC.i)(CC.version) ? QC.c.replayTooOld : QC.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(zC), this.settleOpen(new Error(zC.text));
            break
          }
          case fC._c.Crop:
            if (CC.code === fC.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(QC.c.cropFailed);
            break;
          case fC._c.ModuleTrap:
          case fC._c.ModuleLoad:
          case fC._c.Port:
            this.moduleEnded(CC.reason === fC._c.ModuleTrap ? QC.c.coreStopped : QC.c.cantOpen);
            break;
          case fC._c.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${CC.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(CC) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(CC), this.settleOpen(new Error(CC.text))
      }
      saveDone(CC) {
        const zC = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zC || void 0 === zC || zC.resolve(CC)
      }
      saveFailed(CC) {
        this.rejectSave(new Error(CC ? QC.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(CC) {
        CC && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(QC.c.cropBusy.text)) : this.deps.notify(QC.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(CC) {
        const zC = this.pendingOpen;
        this.pendingOpen = null, null === CC ? null === zC || void 0 === zC || zC.resolve() : null === zC || void 0 === zC || zC.reject(CC)
      }
      rejectSave(CC) {
        const zC = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zC || void 0 === zC || zC.reject(CC)
      }
      hold(CC) {
        const zC = 0 === this.holds.size;
        this.holds.set(CC, this.now()), zC && this.deps.setHoldDraws(!0)
      }
      release(CC) {
        this.holds.delete(CC) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);