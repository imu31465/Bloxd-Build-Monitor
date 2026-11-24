export const id = 60;
export const ids = [60];
export const modules = {
  37014: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS,
      d: () => kS
    });
    var tS = gS(680),
      bS = gS(45),
      XS = gS(36973);
    const xS = "replayFileKeptForReload",
      NS = "replayFileKeptForReloadAt",
      qS = "replayFileKeptForReloadTab",
      uS = 3e5,
      IS = 5e3;
    async function fS(SS, HS) {
      const gS = Date.now(),
        XS = {
          at: gS,
          bytes: SS,
          source: HS
        },
        uS = await Promise.race([(async () => await bS.e.setItem(NS, gS) && bS.e.setItem(xS, XS))(), (0, tS.Q)(IS).then((() => !1))]);
      uS || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const fS = {
        at: gS,
        ia: uS
      };
      bS.h.setItem(qS, fS)
    }
    async function kS() {
      var SS;
      const HS = bS.h.getItem(qS);
      null !== HS && bS.h.removeItem(qS);
      const gS = Date.now(),
        tS = await bS.e.getItem(NS),
        IS = null !== HS && gS - HS.at <= uS,
        fS = null !== HS && tS === HS.at;
      let kS = null;
      if (null !== tS && (fS || ("number" !== typeof tS || gS - tS > uS)) && (kS = IS && fS && HS.ia ? await bS.e.getItem(xS) : null, await Promise.all([bS.e.removeItem(NS), bS.e.removeItem(xS)])), !IS) return null;
      if ((null === (SS = kS) || void 0 === SS ? void 0 : SS.at) !== HS.at) throw new Error(XS.b.replayNotKept.text);
      return {
        bytes: kS.bytes,
        source: kS.source
      }
    }
  },
  37005: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      e: () => XS,
      f: () => bS
    });
    const tS = [9];

    function bS(SS) {
      return tS.includes(SS)
    }

    function XS(SS) {
      return null !== SS && SS >= 3 && SS < tS[0]
    }
  },
  37023: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      f: () => bS
    });
    const tS = "data-replay-ui-active",
      bS = [{
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
  37029: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS,
      g: () => fS,
      j: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(37023);

    function xS() {
      const SS = {};
      for (const {
          group: HS
        }
        of XS.f) SS[HS] = !0;
      return SS
    }
    let NS = xS();

    function qS() {
      bS.k.cj("replayViewer|uiVisibilityChanged")
    }

    function uS() {
      return NS
    }

    function IS(SS, HS) {
      NS[SS] !== HS && (NS = {
        ...NS,
        [SS]: HS
      }, "nametag" === SS && tS.b.set({
        areNametagsHidden: !HS
      }), qS())
    }

    function fS() {
      NS = xS(), tS.b.set({
        areNametagsHidden: !1
      }), qS()
    }
  },
  60676: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      HOLD_TIMEOUT_MS: () => uS,
      ReplayViewer: () => fS
    });
    var tS = gS(36973),
      bS = gS(37014),
      XS = gS(37005),
      xS = gS(37029),
      NS = gS(4926),
      qS = gS(42596);
    const uS = 1e4,
      IS = new Set(["bK"]);
    class fS {
      constructor(SS) {
        var HS;
        this.deps = SS, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (HS = SS.now) && void 0 !== HS ? HS : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== NS.qd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Ku() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? tS.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(SS, HS) {
        var gS, XS, xS, qS;
        const {
          client: uS
        } = this.deps;
        if (!this.playback) {
          if (!uS.setPlayback(!0)) throw new Error(tS.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const IS = this.epoch;
        let fS;
        try {
          fS = await uS.open(SS, (() => (0, bS.b)(SS, HS)))
        } finally {
          this.loadingOpens--
        }
        if (IS !== this.epoch && "reloading" !== fS) throw new Error(tS.b.coreStopped.text);
        if ("opening" !== fS) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const SS = function(SS) {
            switch (SS) {
              case "reloading":
                return null;
              case "stopped":
              case NS.ld.ModuleTrap:
                return tS.b.coreStopped;
              case NS.ld.ModuleLoad:
                return tS.b.viewerLoadFailed;
              case NS.ld.TooLarge:
                return tS.b.cantOpen
            }
          }(fS);
          if (null === SS) return;
          throw new Error(SS.text)
        }
        return this.rejectSave(new Error(tS.b.saveClosed.text)), this.fileName = null !== (gS = null !== (XS = HS.fileName) && void 0 !== XS ? XS : null === (xS = HS.fileHandle) || void 0 === xS ? void 0 : xS.name) && void 0 !== gS ? gS : null, this.fileHandle = null !== (qS = HS.fileHandle) && void 0 !== qS ? qS : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((SS, HS) => {
          this.pendingOpen = {
            resolve: SS,
            reject: HS
          }
        }))
      }
      play() {
        this.holds.has("bK") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("bK")
      }
      seek(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this.lastView;
        null !== gS && (HS || SS < gS.mf) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(SS, HS)
      }
      setSpeed(SS) {
        this.deps.client.setSpeed(SS)
      }
      setCameraMode(SS) {
        this.deps.client.setCameraMode(SS)
      }
      cycleCameraMode() {
        const SS = this.lastView;
        null !== SS && SS.state !== NS.qd.None && this.setCameraMode(qS.c[(qS.c.indexOf(SS.cameraMode) + 1) % qS.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(SS) {
        this.edited(this.deps.client.setKeyframe(SS))
      }
      moveKeyframe(SS, HS) {
        this.edited(this.deps.client.moveKeyframe(SS, HS))
      }
      deleteKeyframes(SS, HS) {
        this.edited(this.deps.client.deleteKeyframes(SS, HS))
      }
      setMark(SS) {
        this.edited(this.deps.client.setMark(SS))
      }
      crop(SS, HS) {
        return !(HS <= SS) && (null !== this.pendingSave ? (this.deps.notify(tS.b.saveBusy), !1) : !!this.deps.client.crop(SS, HS) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(tS.b.saveBusy.text)) : new Promise(((SS, HS) => {
          const gS = {
            resolve: SS,
            reject: HS
          };
          this.pendingSave = gS, this.editsAtSave = this.edits, this.deps.client.save((0, qS.f)()).then((SS => {
            this.pendingSave === gS && this.saveStarted(SS)
          }), (SS => {
            this.pendingSave === gS && this.rejectSave(SS instanceof Error ? SS : new Error(String(SS)))
          }))
        }))
      }
      saveStarted(SS) {
        switch (SS) {
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
      markSaved(SS, HS) {
        var gS, tS;
        this.fileHandle = SS, this.fileName = null !== (gS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.name) && void 0 !== tS ? tS : HS) && void 0 !== gS ? gS : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(tS.b.coreStopped.text)), this.rejectSave(new Error(tS.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var SS, HS, gS;
        const tS = this.deps.client.view(),
          bS = tS !== this.lastView;
        this.lastView = tS, this.opening && null !== tS && tS.state !== NS.qd.None && tS.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xS.g)()), this.cropAsked ? (this.cropAsked = !1, null !== tS && tS.state === NS.qd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== tS && tS.state !== NS.qd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const XS = 0 === this.settleFrames && 0 === (null !== (SS = null === (HS = (gS = this.deps).meshPending) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && XS && this.release("opening"), this.holds.has("seek") && XS && this.release("seek"), this.holds.has("crop") && !this.cropRunning && XS && this.release("crop");
        const qS = this.now();
        for (const [xS, NS] of this.holds) !IS.has(xS) && qS - NS >= uS && this.release(xS);
        this.saveRefused && !this.cropping && this.saveFailed(!1), bS && this.deps.onChange()
      }
      cropped() {
        (0, xS.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(SS) {
        switch (SS.reason) {
          case NS.ld.TooLarge:
            break;
          case NS.ld.Open:
          case NS.ld.NothingStaged: {
            this.opening = !1, this.release("opening");
            const HS = (0, XS.e)(SS.version) ? tS.b.replayTooOld : tS.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(HS), this.settleOpen(new Error(HS.text));
            break
          }
          case NS.ld.Crop:
            if (SS.code === NS.jd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(tS.b.cropFailed);
            break;
          case NS.ld.ModuleTrap:
          case NS.ld.ModuleLoad:
          case NS.ld.Port:
            this.moduleEnded(SS.reason === NS.ld.ModuleTrap ? tS.b.coreStopped : tS.b.cantOpen);
            break;
          case NS.ld.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${SS.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(SS) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(SS), this.settleOpen(new Error(SS.text))
      }
      saveDone(SS) {
        const HS = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === HS || void 0 === HS || HS.resolve(SS)
      }
      saveFailed(SS) {
        this.rejectSave(new Error(SS ? tS.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(SS) {
        SS && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(tS.b.cropBusy.text)) : this.deps.notify(tS.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(SS) {
        const HS = this.pendingOpen;
        this.pendingOpen = null, null === SS ? null === HS || void 0 === HS || HS.resolve() : null === HS || void 0 === HS || HS.reject(SS)
      }
      rejectSave(SS) {
        const HS = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === HS || void 0 === HS || HS.reject(SS)
      }
      hold(SS) {
        const HS = 0 === this.holds.size;
        this.holds.set(SS, this.now()), HS && this.deps.setHoldDraws(!0)
      }
      release(SS) {
        this.holds.delete(SS) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);