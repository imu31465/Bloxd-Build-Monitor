export const id = 61;
export const ids = [61];
export const modules = {
  37062: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      f: () => rB
    });
    var QB = zB(658),
      nB = zB(41),
      dB = zB(37012);
    const IB = "replayFileKeptForReload",
      NB = "replayFileKeptForReloadAt",
      uB = "replayFileKeptForReloadTab",
      UB = 3e5,
      aB = 5e3;
    async function pB(BB, jB) {
      const zB = Date.now(),
        dB = {
          at: zB,
          bytes: BB,
          source: jB
        },
        UB = await Promise.race([(async () => await nB.g.setItem(NB, zB) && nB.g.setItem(IB, dB))(), (0, QB.M)(aB).then((() => !1))]);
      UB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pB = {
        at: zB,
        Cs: UB
      };
      nB.k.setItem(uB, pB)
    }
    async function rB() {
      var BB;
      const jB = nB.k.getItem(uB);
      null !== jB && nB.k.removeItem(uB);
      const zB = Date.now(),
        QB = await nB.g.getItem(NB),
        aB = null !== jB && zB - jB.at <= UB,
        pB = null !== jB && QB === jB.at;
      let rB = null;
      if (null !== QB && (pB || ("number" !== typeof QB || zB - QB > UB)) && (rB = aB && pB && jB.Cs ? await nB.g.getItem(IB) : null, await Promise.all([nB.g.removeItem(NB), nB.g.removeItem(IB)])), !aB) return null;
      if ((null === (BB = rB) || void 0 === BB ? void 0 : BB.at) !== jB.at) throw new Error(dB.d.replayNotKept.text);
      return {
        bytes: rB.bytes,
        source: rB.source
      }
    }
  },
  37059: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      f: () => dB,
      j: () => nB
    });
    const QB = [9];

    function nB(BB) {
      return QB.includes(BB)
    }

    function dB(BB) {
      return null !== BB && BB >= 3 && BB < QB[0]
    }
  },
  37073: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      f: () => nB
    });
    const QB = "data-replay-ui-active",
      nB = [{
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
  37082: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      g: () => pB,
      k: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(37073);

    function IB() {
      const BB = {};
      for (const {
          group: jB
        }
        of dB.f) BB[jB] = !0;
      return BB
    }
    let NB = IB();

    function uB() {
      nB.n.Ly("replayViewer|uiVisibilityChanged")
    }

    function UB() {
      return NB
    }

    function aB(BB, jB) {
      NB[BB] !== jB && (NB = {
        ...NB,
        [BB]: jB
      }, "nametag" === BB && QB.c.set({
        areNametagsHidden: !jB
      }), uB())
    }

    function pB() {
      NB = IB(), QB.c.set({
        areNametagsHidden: !1
      }), uB()
    }
  },
  60764: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      HOLD_TIMEOUT_MS: () => UB,
      ReplayViewer: () => pB
    });
    var QB = zB(37012),
      nB = zB(37062),
      dB = zB(37059),
      IB = zB(37082),
      NB = zB(4887),
      uB = zB(42723);
    const UB = 1e4,
      aB = new Set(["mJ"]);
    class pB {
      constructor(BB) {
        var jB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (jB = BB.now) && void 0 !== jB ? jB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== NB.gd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get DN() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? QB.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, jB) {
        var zB, dB, IB, uB;
        const {
          client: UB
        } = this.deps;
        if (!this.playback) {
          if (!UB.setPlayback(!0)) throw new Error(QB.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const aB = this.epoch;
        let pB;
        try {
          pB = await UB.open(BB, (() => (0, nB.b)(BB, jB)))
        } finally {
          this.loadingOpens--
        }
        if (aB !== this.epoch && "reloading" !== pB) throw new Error(QB.d.coreStopped.text);
        if ("opening" !== pB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case NB.Xc.ModuleTrap:
                return QB.d.coreStopped;
              case NB.Xc.ModuleLoad:
                return QB.d.viewerLoadFailed;
              case NB.Xc.TooLarge:
                return QB.d.cantOpen
            }
          }(pB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(QB.d.saveClosed.text)), this.fileName = null !== (zB = null !== (dB = jB.fileName) && void 0 !== dB ? dB : null === (IB = jB.fileHandle) || void 0 === IB ? void 0 : IB.name) && void 0 !== zB ? zB : null, this.fileHandle = null !== (uB = jB.fileHandle) && void 0 !== uB ? uB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, jB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: jB
          }
        }))
      }
      play() {
        this.holds.has("mJ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("mJ")
      }
      seek(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this.lastView;
        null !== zB && (jB || BB < zB.vp) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, jB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== NB.gd.None && this.setCameraMode(uB.b[(uB.b.indexOf(BB.cameraMode) + 1) % uB.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, jB) {
        this.edited(this.deps.client.moveKeyframe(BB, jB))
      }
      deleteKeyframes(BB, jB) {
        this.edited(this.deps.client.deleteKeyframes(BB, jB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, jB) {
        return !(jB <= BB) && (null !== this.pendingSave ? (this.deps.notify(QB.d.saveBusy), !1) : !!this.deps.client.crop(BB, jB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(QB.d.saveBusy.text)) : new Promise(((BB, jB) => {
          const zB = {
            resolve: BB,
            reject: jB
          };
          this.pendingSave = zB, this.editsAtSave = this.edits, this.deps.client.save((0, uB.c)()).then((BB => {
            this.pendingSave === zB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === zB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
          }))
        }))
      }
      saveStarted(BB) {
        switch (BB) {
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
      markSaved(BB, jB) {
        var zB, QB;
        this.fileHandle = BB, this.fileName = null !== (zB = null !== (QB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== QB ? QB : jB) && void 0 !== zB ? zB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(QB.d.coreStopped.text)), this.rejectSave(new Error(QB.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, jB, zB;
        const QB = this.deps.client.view(),
          nB = QB !== this.lastView;
        this.lastView = QB, this.opening && null !== QB && QB.state !== NB.gd.None && QB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, IB.g)()), this.cropAsked ? (this.cropAsked = !1, null !== QB && QB.state === NB.gd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== QB && QB.state !== NB.gd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const dB = 0 === this.settleFrames && 0 === (null !== (BB = null === (jB = (zB = this.deps).meshPending) || void 0 === jB ? void 0 : jB.call(zB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && dB && this.release("opening"), this.holds.has("seek") && dB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && dB && this.release("crop");
        const uB = this.now();
        for (const [IB, NB] of this.holds) !aB.has(IB) && uB - NB >= UB && this.release(IB);
        this.saveRefused && !this.cropping && this.saveFailed(!1), nB && this.deps.onChange()
      }
      cropped() {
        (0, IB.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case NB.Xc.TooLarge:
            break;
          case NB.Xc.Open:
          case NB.Xc.NothingStaged: {
            this.opening = !1, this.release("opening");
            const jB = (0, dB.f)(BB.version) ? QB.d.replayTooOld : QB.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(jB), this.settleOpen(new Error(jB.text));
            break
          }
          case NB.Xc.Crop:
            if (BB.code === NB.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(QB.d.cropFailed);
            break;
          case NB.Xc.ModuleTrap:
          case NB.Xc.ModuleLoad:
          case NB.Xc.Port:
            this.moduleEnded(BB.reason === NB.Xc.ModuleTrap ? QB.d.coreStopped : QB.d.cantOpen);
            break;
          case NB.Xc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${BB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(BB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(BB), this.settleOpen(new Error(BB.text))
      }
      saveDone(BB) {
        const jB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === jB || void 0 === jB || jB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? QB.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(QB.d.cropBusy.text)) : this.deps.notify(QB.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const jB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === jB || void 0 === jB || jB.resolve() : null === jB || void 0 === jB || jB.reject(BB)
      }
      rejectSave(BB) {
        const jB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === jB || void 0 === jB || jB.reject(BB)
      }
      hold(BB) {
        const jB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), jB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);