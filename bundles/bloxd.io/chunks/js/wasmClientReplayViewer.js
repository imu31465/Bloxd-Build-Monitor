export const id = 72;
export const ids = [72];
export const modules = {
  37853: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      g: () => GH
    });
    var AH = LH(619),
      rH = LH(30),
      SH = LH(37809);
    const hH = "replayFileKeptForReload",
      tH = "replayFileKeptForReloadAt",
      zH = "replayFileKeptForReloadTab",
      CH = 3e5,
      EH = 5e3;
    async function XH(HH, BH) {
      const LH = Date.now(),
        SH = {
          at: LH,
          bytes: HH,
          source: BH
        },
        CH = await Promise.race([(async () => await rH.c.setItem(tH, LH) && rH.c.setItem(hH, SH))(), (0, AH.Q)(EH).then((() => !1))]);
      CH || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const XH = {
        at: LH,
        hX: CH
      };
      rH.f.setItem(zH, XH)
    }
    async function GH() {
      var HH;
      const BH = rH.f.getItem(zH);
      null !== BH && rH.f.removeItem(zH);
      const LH = Date.now(),
        AH = await rH.c.getItem(tH),
        EH = null !== BH && LH - BH.at <= CH,
        XH = null !== BH && AH === BH.at;
      let GH = null;
      if (null !== AH && (XH || ("number" !== typeof AH || LH - AH > CH)) && (GH = EH && XH && BH.hX ? await rH.c.getItem(hH) : null, await Promise.all([rH.c.removeItem(tH), rH.c.removeItem(hH)])), !EH) return null;
      if ((null === (HH = GH) || void 0 === HH ? void 0 : HH.at) !== BH.at) throw new Error(SH.e.replayNotKept.text);
      return {
        bytes: GH.bytes,
        source: GH.source
      }
    }
  },
  37844: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH,
      i: () => SH,
      m: () => rH
    });
    const AH = [9];

    function rH(HH) {
      return AH.includes(HH)
    }

    function SH(HH) {
      return null !== HH && HH >= 3 && HH < AH[0]
    }
  },
  37864: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      f: () => rH
    });
    const AH = "data-replay-ui-active",
      rH = [{
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
  37869: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      f: () => XH,
      i: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(37864);

    function hH() {
      const HH = {};
      for (const {
          group: BH
        }
        of SH.f) HH[BH] = !0;
      return HH
    }
    let tH = hH();

    function zH() {
      rH.k.AX("replayViewer|uiVisibilityChanged")
    }

    function CH() {
      return tH
    }

    function EH(HH, BH) {
      tH[HH] !== BH && (tH = {
        ...tH,
        [HH]: BH
      }, "nametag" === HH && AH.c.set({
        areNametagsHidden: !BH
      }), zH())
    }

    function XH() {
      tH = hH(), AH.c.set({
        areNametagsHidden: !1
      }), zH()
    }
  },
  64081: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      HOLD_TIMEOUT_MS: () => CH,
      ReplayViewer: () => XH
    });
    var AH = LH(37809),
      rH = LH(37853),
      SH = LH(37844),
      hH = LH(37869),
      tH = LH(5265),
      zH = LH(54466);
    const CH = 1e4,
      EH = new Set(["Cu"]);
    class XH {
      constructor(HH) {
        var BH;
        this.deps = HH, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (BH = HH.now) && void 0 !== BH ? BH : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== tH.hd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get LX() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? AH.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(HH, BH) {
        var LH, SH, hH, zH;
        const {
          client: CH
        } = this.deps;
        if (!this.playback) {
          if (!CH.setPlayback(!0)) throw new Error(AH.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const EH = this.epoch;
        let XH;
        try {
          XH = await CH.open(HH, (() => (0, rH.e)(HH, BH)))
        } finally {
          this.loadingOpens--
        }
        if (EH !== this.epoch && "reloading" !== XH) throw new Error(AH.e.coreStopped.text);
        if ("opening" !== XH) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const HH = function(HH) {
            switch (HH) {
              case "reloading":
                return null;
              case "stopped":
              case tH.$c.ModuleTrap:
                return AH.e.coreStopped;
              case tH.$c.ModuleLoad:
                return AH.e.viewerLoadFailed;
              case tH.$c.TooLarge:
                return AH.e.cantOpen
            }
          }(XH);
          if (null === HH) return;
          throw new Error(HH.text)
        }
        return this.rejectSave(new Error(AH.e.saveClosed.text)), this.fileName = null !== (LH = null !== (SH = BH.fileName) && void 0 !== SH ? SH : null === (hH = BH.fileHandle) || void 0 === hH ? void 0 : hH.name) && void 0 !== LH ? LH : null, this.fileHandle = null !== (zH = BH.fileHandle) && void 0 !== zH ? zH : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((HH, BH) => {
          this.pendingOpen = {
            resolve: HH,
            reject: BH
          }
        }))
      }
      play() {
        this.holds.has("Cu") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Cu")
      }
      seek(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this.lastView;
        null !== LH && (BH || HH < LH.IX) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(HH, BH)
      }
      setSpeed(HH) {
        this.deps.client.setSpeed(HH)
      }
      setCameraMode(HH) {
        this.deps.client.setCameraMode(HH)
      }
      cycleCameraMode() {
        const HH = this.lastView;
        null !== HH && HH.state !== tH.hd.None && this.setCameraMode(zH.b[(zH.b.indexOf(HH.cameraMode) + 1) % zH.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(HH) {
        this.edited(this.deps.client.setKeyframe(HH))
      }
      moveKeyframe(HH, BH) {
        this.edited(this.deps.client.moveKeyframe(HH, BH))
      }
      deleteKeyframes(HH, BH) {
        this.edited(this.deps.client.deleteKeyframes(HH, BH))
      }
      setMark(HH) {
        this.edited(this.deps.client.setMark(HH))
      }
      crop(HH, BH) {
        return !(BH <= HH) && (null !== this.pendingSave ? (this.deps.notify(AH.e.saveBusy), !1) : !!this.deps.client.crop(HH, BH) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(AH.e.saveBusy.text)) : new Promise(((HH, BH) => {
          const LH = {
            resolve: HH,
            reject: BH
          };
          this.pendingSave = LH, this.editsAtSave = this.edits, this.deps.client.save((0, zH.d)()).then((HH => {
            this.pendingSave === LH && this.saveStarted(HH)
          }), (HH => {
            this.pendingSave === LH && this.rejectSave(HH instanceof Error ? HH : new Error(String(HH)))
          }))
        }))
      }
      saveStarted(HH) {
        switch (HH) {
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
      markSaved(HH, BH) {
        var LH, AH;
        this.fileHandle = HH, this.fileName = null !== (LH = null !== (AH = null === HH || void 0 === HH ? void 0 : HH.name) && void 0 !== AH ? AH : BH) && void 0 !== LH ? LH : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(AH.e.coreStopped.text)), this.rejectSave(new Error(AH.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var HH, BH, LH;
        const AH = this.deps.client.view(),
          rH = AH !== this.lastView;
        this.lastView = AH, this.opening && null !== AH && AH.state !== tH.hd.None && AH.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, hH.f)()), this.cropAsked ? (this.cropAsked = !1, null !== AH && AH.state === tH.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== AH && AH.state !== tH.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const SH = 0 === this.settleFrames && 0 === (null !== (HH = null === (BH = (LH = this.deps).meshPending) || void 0 === BH ? void 0 : BH.call(LH)) && void 0 !== HH ? HH : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && SH && this.release("opening"), this.holds.has("seek") && SH && this.release("seek"), this.holds.has("crop") && !this.cropRunning && SH && this.release("crop");
        const zH = this.now();
        for (const [hH, tH] of this.holds) !EH.has(hH) && zH - tH >= CH && this.release(hH);
        this.saveRefused && !this.cropping && this.saveFailed(!1), rH && this.deps.onChange()
      }
      cropped() {
        (0, hH.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(HH) {
        switch (HH.reason) {
          case tH.$c.TooLarge:
            break;
          case tH.$c.Open:
          case tH.$c.NothingStaged: {
            this.opening = !1, this.release("opening");
            const BH = (0, SH.i)(HH.version) ? AH.e.replayTooOld : AH.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(BH), this.settleOpen(new Error(BH.text));
            break
          }
          case tH.$c.Crop:
            if (HH.code === tH.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(AH.e.cropFailed);
            break;
          case tH.$c.ModuleTrap:
          case tH.$c.ModuleLoad:
          case tH.$c.Port:
            this.moduleEnded(HH.reason === tH.$c.ModuleTrap ? AH.e.coreStopped : AH.e.cantOpen);
            break;
          case tH.$c.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${HH.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(HH) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(HH), this.settleOpen(new Error(HH.text))
      }
      saveDone(HH) {
        const BH = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === BH || void 0 === BH || BH.resolve(HH)
      }
      saveFailed(HH) {
        this.rejectSave(new Error(HH ? AH.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(HH) {
        HH && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(AH.e.cropBusy.text)) : this.deps.notify(AH.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(HH) {
        const BH = this.pendingOpen;
        this.pendingOpen = null, null === HH ? null === BH || void 0 === BH || BH.resolve() : null === BH || void 0 === BH || BH.reject(HH)
      }
      rejectSave(HH) {
        const BH = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === BH || void 0 === BH || BH.reject(HH)
      }
      hold(HH) {
        const BH = 0 === this.holds.size;
        this.holds.set(HH, this.now()), BH && this.deps.setHoldDraws(!0)
      }
      release(HH) {
        this.holds.delete(HH) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);