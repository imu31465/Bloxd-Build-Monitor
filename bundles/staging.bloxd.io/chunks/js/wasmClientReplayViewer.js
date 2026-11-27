export const id = 73;
export const ids = [73];
export const modules = {
  38101: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => KR,
      g: () => wR
    });
    var yR = GR(679),
      tR = GR(46),
      uR = GR(38053);
    const ZR = "replayFileKeptForReload",
      qR = "replayFileKeptForReloadAt",
      iR = "replayFileKeptForReloadTab",
      fR = 3e5,
      VR = 5e3;
    async function KR(RR, JR) {
      const GR = Date.now(),
        uR = {
          at: GR,
          bytes: RR,
          source: JR
        },
        fR = await Promise.race([(async () => await tR.g.setItem(qR, GR) && tR.g.setItem(ZR, uR))(), (0, yR.T)(VR).then((() => !1))]);
      fR || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const KR = {
        at: GR,
        tK: fR
      };
      tR.k.setItem(iR, KR)
    }
    async function wR() {
      var RR;
      const JR = tR.k.getItem(iR);
      null !== JR && tR.k.removeItem(iR);
      const GR = Date.now(),
        yR = await tR.g.getItem(qR),
        VR = null !== JR && GR - JR.at <= fR,
        KR = null !== JR && yR === JR.at;
      let wR = null;
      if (null !== yR && (KR || ("number" !== typeof yR || GR - yR > fR)) && (wR = VR && KR && JR.tK ? await tR.g.getItem(ZR) : null, await Promise.all([tR.g.removeItem(qR), tR.g.removeItem(ZR)])), !VR) return null;
      if ((null === (RR = wR) || void 0 === RR ? void 0 : RR.at) !== JR.at) throw new Error(uR.d.replayNotKept.text);
      return {
        bytes: wR.bytes,
        source: wR.source
      }
    }
  },
  38094: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      g: () => uR,
      k: () => tR
    });
    const yR = [9];

    function tR(RR) {
      return yR.includes(RR)
    }

    function uR(RR) {
      return null !== RR && RR >= 3 && RR < yR[0]
    }
  },
  38112: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      h: () => tR
    });
    const yR = "data-replay-ui-active",
      tR = [{
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
  38116: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      f: () => KR,
      i: () => VR
    });
    var yR = GR(25),
      tR = GR(32),
      uR = GR(38112);

    function ZR() {
      const RR = {};
      for (const {
          group: JR
        }
        of uR.h) RR[JR] = !0;
      return RR
    }
    let qR = ZR();

    function iR() {
      tR.n.JK("replayViewer|uiVisibilityChanged")
    }

    function fR() {
      return qR
    }

    function VR(RR, JR) {
      qR[RR] !== JR && (qR = {
        ...qR,
        [RR]: JR
      }, "nametag" === RR && yR.d.set({
        areNametagsHidden: !JR
      }), iR())
    }

    function KR() {
      qR = ZR(), yR.d.set({
        areNametagsHidden: !1
      }), iR()
    }
  },
  64119: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      HOLD_TIMEOUT_MS: () => fR,
      ReplayViewer: () => KR
    });
    var yR = GR(38053),
      tR = GR(38101),
      uR = GR(38094),
      ZR = GR(38116),
      qR = GR(5676),
      iR = GR(54582);
    const fR = 1e4,
      VR = new Set(["Be"]);
    class KR {
      constructor(RR) {
        var JR;
        this.deps = RR, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (JR = RR.now) && void 0 !== JR ? JR : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== qR.ld.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Qq() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? yR.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(RR, JR) {
        var GR, uR, ZR, iR;
        const {
          client: fR
        } = this.deps;
        if (!this.playback) {
          if (!fR.setPlayback(!0)) throw new Error(yR.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const VR = this.epoch;
        let KR;
        try {
          KR = await fR.open(RR, (() => (0, tR.c)(RR, JR)))
        } finally {
          this.loadingOpens--
        }
        if (VR !== this.epoch && "reloading" !== KR) throw new Error(yR.d.coreStopped.text);
        if ("opening" !== KR) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const RR = function(RR) {
            switch (RR) {
              case "reloading":
                return null;
              case "stopped":
              case qR.cd.ModuleTrap:
                return yR.d.coreStopped;
              case qR.cd.ModuleLoad:
                return yR.d.viewerLoadFailed;
              case qR.cd.TooLarge:
                return yR.d.cantOpen
            }
          }(KR);
          if (null === RR) return;
          throw new Error(RR.text)
        }
        return this.rejectSave(new Error(yR.d.saveClosed.text)), this.fileName = null !== (GR = null !== (uR = JR.fileName) && void 0 !== uR ? uR : null === (ZR = JR.fileHandle) || void 0 === ZR ? void 0 : ZR.name) && void 0 !== GR ? GR : null, this.fileHandle = null !== (iR = JR.fileHandle) && void 0 !== iR ? iR : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((RR, JR) => {
          this.pendingOpen = {
            resolve: RR,
            reject: JR
          }
        }))
      }
      play() {
        this.holds.has("Be") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Be")
      }
      seek(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this.lastView;
        null !== GR && (JR || RR < GR.gK) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(RR, JR)
      }
      setSpeed(RR) {
        this.deps.client.setSpeed(RR)
      }
      setCameraMode(RR) {
        this.deps.client.setCameraMode(RR)
      }
      cycleCameraMode() {
        const RR = this.lastView;
        null !== RR && RR.state !== qR.ld.None && this.setCameraMode(iR.d[(iR.d.indexOf(RR.cameraMode) + 1) % iR.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(RR) {
        this.edited(this.deps.client.setKeyframe(RR))
      }
      moveKeyframe(RR, JR) {
        this.edited(this.deps.client.moveKeyframe(RR, JR))
      }
      deleteKeyframes(RR, JR) {
        this.edited(this.deps.client.deleteKeyframes(RR, JR))
      }
      setMark(RR) {
        this.edited(this.deps.client.setMark(RR))
      }
      crop(RR, JR) {
        return !(JR <= RR) && (null !== this.pendingSave ? (this.deps.notify(yR.d.saveBusy), !1) : !!this.deps.client.crop(RR, JR) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(yR.d.saveBusy.text)) : new Promise(((RR, JR) => {
          const GR = {
            resolve: RR,
            reject: JR
          };
          this.pendingSave = GR, this.editsAtSave = this.edits, this.deps.client.save((0, iR.g)()).then((RR => {
            this.pendingSave === GR && this.saveStarted(RR)
          }), (RR => {
            this.pendingSave === GR && this.rejectSave(RR instanceof Error ? RR : new Error(String(RR)))
          }))
        }))
      }
      saveStarted(RR) {
        switch (RR) {
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
      markSaved(RR, JR) {
        var GR, yR;
        this.fileHandle = RR, this.fileName = null !== (GR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.name) && void 0 !== yR ? yR : JR) && void 0 !== GR ? GR : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(yR.d.coreStopped.text)), this.rejectSave(new Error(yR.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var RR, JR, GR;
        const yR = this.deps.client.view(),
          tR = yR !== this.lastView;
        this.lastView = yR, this.opening && null !== yR && yR.state !== qR.ld.None && yR.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, ZR.f)()), this.cropAsked ? (this.cropAsked = !1, null !== yR && yR.state === qR.ld.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== yR && yR.state !== qR.ld.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const uR = 0 === this.settleFrames && 0 === (null !== (RR = null === (JR = (GR = this.deps).meshPending) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && uR && this.release("opening"), this.holds.has("seek") && uR && this.release("seek"), this.holds.has("crop") && !this.cropRunning && uR && this.release("crop");
        const iR = this.now();
        for (const [ZR, qR] of this.holds) !VR.has(ZR) && iR - qR >= fR && this.release(ZR);
        this.saveRefused && !this.cropping && this.saveFailed(!1), tR && this.deps.onChange()
      }
      cropped() {
        (0, ZR.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(RR) {
        switch (RR.reason) {
          case qR.cd.TooLarge:
            break;
          case qR.cd.Open:
          case qR.cd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const JR = (0, uR.g)(RR.version) ? yR.d.replayTooOld : yR.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(JR), this.settleOpen(new Error(JR.text));
            break
          }
          case qR.cd.Crop:
            if (RR.code === qR.ad.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(yR.d.cropFailed);
            break;
          case qR.cd.ModuleTrap:
          case qR.cd.ModuleLoad:
          case qR.cd.Port:
            this.moduleEnded(RR.reason === qR.cd.ModuleTrap ? yR.d.coreStopped : yR.d.cantOpen);
            break;
          case qR.cd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${RR.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(RR) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(RR), this.settleOpen(new Error(RR.text))
      }
      saveDone(RR) {
        const JR = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === JR || void 0 === JR || JR.resolve(RR)
      }
      saveFailed(RR) {
        this.rejectSave(new Error(RR ? yR.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(RR) {
        RR && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(yR.d.cropBusy.text)) : this.deps.notify(yR.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(RR) {
        const JR = this.pendingOpen;
        this.pendingOpen = null, null === RR ? null === JR || void 0 === JR || JR.resolve() : null === JR || void 0 === JR || JR.reject(RR)
      }
      rejectSave(RR) {
        const JR = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === JR || void 0 === JR || JR.reject(RR)
      }
      hold(RR) {
        const JR = 0 === this.holds.size;
        this.holds.set(RR, this.now()), JR && this.deps.setHoldDraws(!0)
      }
      release(RR) {
        this.holds.delete(RR) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);