export const id = 61;
export const ids = [61];
export const modules = {
  37084: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      e: () => LT
    });
    var WT = mT(653),
      zT = mT(44),
      MT = mT(37042);
    const gT = "replayFileKeptForReload",
      nT = "replayFileKeptForReloadAt",
      HT = "replayFileKeptForReloadTab",
      kT = 3e5,
      jT = 5e3;
    async function lT(TT, UT) {
      const mT = Date.now(),
        MT = {
          at: mT,
          bytes: TT,
          source: UT
        },
        kT = await Promise.race([(async () => await zT.h.setItem(nT, mT) && zT.h.setItem(gT, MT))(), (0, WT.G)(jT).then((() => !1))]);
      kT || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const lT = {
        at: mT,
        Jp: kT
      };
      zT.m.setItem(HT, lT)
    }
    async function LT() {
      var TT;
      const UT = zT.m.getItem(HT);
      null !== UT && zT.m.removeItem(HT);
      const mT = Date.now(),
        WT = await zT.h.getItem(nT),
        jT = null !== UT && mT - UT.at <= kT,
        lT = null !== UT && WT === UT.at;
      let LT = null;
      if (null !== WT && (lT || ("number" !== typeof WT || mT - WT > kT)) && (LT = jT && lT && UT.Jp ? await zT.h.getItem(gT) : null, await Promise.all([zT.h.removeItem(nT), zT.h.removeItem(gT)])), !jT) return null;
      if ((null === (TT = LT) || void 0 === TT ? void 0 : TT.at) !== UT.at) throw new Error(MT.c.replayNotKept.text);
      return {
        bytes: LT.bytes,
        source: LT.source
      }
    }
  },
  37076: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      g: () => MT,
      i: () => zT
    });
    const WT = [9];

    function zT(TT) {
      return WT.includes(TT)
    }

    function MT(TT) {
      return null !== TT && TT >= 3 && TT < WT[0]
    }
  },
  37090: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      g: () => zT
    });
    const WT = "data-replay-ui-active",
      zT = [{
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
  37095: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      f: () => lT,
      i: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(37090);

    function gT() {
      const TT = {};
      for (const {
          group: UT
        }
        of MT.g) TT[UT] = !0;
      return TT
    }
    let nT = gT();

    function HT() {
      zT.j.EZ("replayViewer|uiVisibilityChanged")
    }

    function kT() {
      return nT
    }

    function jT(TT, UT) {
      nT[TT] !== UT && (nT = {
        ...nT,
        [TT]: UT
      }, "nametag" === TT && WT.b.set({
        areNametagsHidden: !UT
      }), HT())
    }

    function lT() {
      nT = gT(), WT.b.set({
        areNametagsHidden: !1
      }), HT()
    }
  },
  60490: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      HOLD_TIMEOUT_MS: () => kT,
      ReplayViewer: () => lT
    });
    var WT = mT(37042),
      zT = mT(37084),
      MT = mT(37076),
      gT = mT(37095),
      nT = mT(4895),
      HT = mT(42746);
    const kT = 1e4,
      jT = new Set(["Np"]);
    class lT {
      constructor(TT) {
        var UT;
        this.deps = TT, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (UT = TT.now) && void 0 !== UT ? UT : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== nT.qd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get fn() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? WT.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(TT, UT) {
        var mT, MT, gT, HT;
        const {
          client: kT
        } = this.deps;
        if (!this.playback) {
          if (!kT.setPlayback(!0)) throw new Error(WT.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const jT = this.epoch;
        let lT;
        try {
          lT = await kT.open(TT, (() => (0, zT.d)(TT, UT)))
        } finally {
          this.loadingOpens--
        }
        if (jT !== this.epoch && "reloading" !== lT) throw new Error(WT.c.coreStopped.text);
        if ("opening" !== lT) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const TT = function(TT) {
            switch (TT) {
              case "reloading":
                return null;
              case "stopped":
              case nT.dd.ModuleTrap:
                return WT.c.coreStopped;
              case nT.dd.ModuleLoad:
                return WT.c.viewerLoadFailed;
              case nT.dd.TooLarge:
                return WT.c.cantOpen
            }
          }(lT);
          if (null === TT) return;
          throw new Error(TT.text)
        }
        return this.rejectSave(new Error(WT.c.saveClosed.text)), this.fileName = null !== (mT = null !== (MT = UT.fileName) && void 0 !== MT ? MT : null === (gT = UT.fileHandle) || void 0 === gT ? void 0 : gT.name) && void 0 !== mT ? mT : null, this.fileHandle = null !== (HT = UT.fileHandle) && void 0 !== HT ? HT : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((TT, UT) => {
          this.pendingOpen = {
            resolve: TT,
            reject: UT
          }
        }))
      }
      play() {
        this.holds.has("Np") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Np")
      }
      seek(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this.lastView;
        null !== mT && (UT || TT < mT.Cl) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(TT, UT)
      }
      setSpeed(TT) {
        this.deps.client.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.client.setCameraMode(TT)
      }
      cycleCameraMode() {
        const TT = this.lastView;
        null !== TT && TT.state !== nT.qd.None && this.setCameraMode(HT.c[(HT.c.indexOf(TT.cameraMode) + 1) % HT.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(TT) {
        this.edited(this.deps.client.setKeyframe(TT))
      }
      moveKeyframe(TT, UT) {
        this.edited(this.deps.client.moveKeyframe(TT, UT))
      }
      deleteKeyframes(TT, UT) {
        this.edited(this.deps.client.deleteKeyframes(TT, UT))
      }
      setMark(TT) {
        this.edited(this.deps.client.setMark(TT))
      }
      crop(TT, UT) {
        return !(UT <= TT) && (null !== this.pendingSave ? (this.deps.notify(WT.c.saveBusy), !1) : !!this.deps.client.crop(TT, UT) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(WT.c.saveBusy.text)) : new Promise(((TT, UT) => {
          const mT = {
            resolve: TT,
            reject: UT
          };
          this.pendingSave = mT, this.editsAtSave = this.edits, this.deps.client.save((0, HT.e)()).then((TT => {
            this.pendingSave === mT && this.saveStarted(TT)
          }), (TT => {
            this.pendingSave === mT && this.rejectSave(TT instanceof Error ? TT : new Error(String(TT)))
          }))
        }))
      }
      saveStarted(TT) {
        switch (TT) {
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
      markSaved(TT, UT) {
        var mT, WT;
        this.fileHandle = TT, this.fileName = null !== (mT = null !== (WT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== WT ? WT : UT) && void 0 !== mT ? mT : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(WT.c.coreStopped.text)), this.rejectSave(new Error(WT.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var TT, UT, mT;
        const WT = this.deps.client.view(),
          zT = WT !== this.lastView;
        this.lastView = WT, this.opening && null !== WT && WT.state !== nT.qd.None && WT.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, gT.f)()), this.cropAsked ? (this.cropAsked = !1, null !== WT && WT.state === nT.qd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== WT && WT.state !== nT.qd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const MT = 0 === this.settleFrames && 0 === (null !== (TT = null === (UT = (mT = this.deps).meshPending) || void 0 === UT ? void 0 : UT.call(mT)) && void 0 !== TT ? TT : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && MT && this.release("opening"), this.holds.has("seek") && MT && this.release("seek"), this.holds.has("crop") && !this.cropRunning && MT && this.release("crop");
        const HT = this.now();
        for (const [gT, nT] of this.holds) !jT.has(gT) && HT - nT >= kT && this.release(gT);
        this.saveRefused && !this.cropping && this.saveFailed(!1), zT && this.deps.onChange()
      }
      cropped() {
        (0, gT.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(TT) {
        switch (TT.reason) {
          case nT.dd.TooLarge:
            break;
          case nT.dd.Open:
          case nT.dd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const UT = (0, MT.g)(TT.version) ? WT.c.replayTooOld : WT.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(UT), this.settleOpen(new Error(UT.text));
            break
          }
          case nT.dd.Crop:
            if (TT.code === nT.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(WT.c.cropFailed);
            break;
          case nT.dd.ModuleTrap:
          case nT.dd.ModuleLoad:
          case nT.dd.Port:
            this.moduleEnded(TT.reason === nT.dd.ModuleTrap ? WT.c.coreStopped : WT.c.cantOpen);
            break;
          case nT.dd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${TT.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(TT) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(TT), this.settleOpen(new Error(TT.text))
      }
      saveDone(TT) {
        const UT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === UT || void 0 === UT || UT.resolve(TT)
      }
      saveFailed(TT) {
        this.rejectSave(new Error(TT ? WT.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(TT) {
        TT && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(WT.c.cropBusy.text)) : this.deps.notify(WT.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(TT) {
        const UT = this.pendingOpen;
        this.pendingOpen = null, null === TT ? null === UT || void 0 === UT || UT.resolve() : null === UT || void 0 === UT || UT.reject(TT)
      }
      rejectSave(TT) {
        const UT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === UT || void 0 === UT || UT.reject(TT)
      }
      hold(TT) {
        const UT = 0 === this.holds.size;
        this.holds.set(TT, this.now()), UT && this.deps.setHoldDraws(!0)
      }
      release(TT) {
        this.holds.delete(TT) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);