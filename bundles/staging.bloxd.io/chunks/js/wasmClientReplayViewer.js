export const id = 60;
export const ids = [60];
export const modules = {
  36964: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => AD,
      f: () => UD
    });
    var pD = wD(619),
      sD = wD(35),
      KD = wD(36910);
    const rD = "replayFileKeptForReload",
      LD = "replayFileKeptForReloadAt",
      cD = "replayFileKeptForReloadTab",
      gD = 3e5,
      RD = 5e3;
    async function AD(DD, zD) {
      const wD = Date.now(),
        KD = {
          at: wD,
          bytes: DD,
          source: zD
        },
        gD = await Promise.race([(async () => await sD.g.setItem(LD, wD) && sD.g.setItem(rD, KD))(), (0, pD.H)(RD).then((() => !1))]);
      gD || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const AD = {
        at: wD,
        Nf: gD
      };
      sD.k.setItem(cD, AD)
    }
    async function UD() {
      var DD;
      const zD = sD.k.getItem(cD);
      null !== zD && sD.k.removeItem(cD);
      const wD = Date.now(),
        pD = await sD.g.getItem(LD),
        RD = null !== zD && wD - zD.at <= gD,
        AD = null !== zD && pD === zD.at;
      let UD = null;
      if (null !== pD && (AD || ("number" !== typeof pD || wD - pD > gD)) && (UD = RD && AD && zD.Nf ? await sD.g.getItem(rD) : null, await Promise.all([sD.g.removeItem(LD), sD.g.removeItem(rD)])), !RD) return null;
      if ((null === (DD = UD) || void 0 === DD ? void 0 : DD.at) !== zD.at) throw new Error(KD.e.replayNotKept.text);
      return {
        bytes: UD.bytes,
        source: UD.source
      }
    }
  },
  36956: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      f: () => KD,
      j: () => sD
    });
    const pD = [9];

    function sD(DD) {
      return pD.includes(DD)
    }

    function KD(DD) {
      return null !== DD && DD >= 3 && DD < pD[0]
    }
  },
  36975: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      f: () => sD
    });
    const pD = "data-replay-ui-active",
      sD = [{
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
  36981: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      f: () => AD,
      j: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(36975);

    function rD() {
      const DD = {};
      for (const {
          group: zD
        }
        of KD.f) DD[zD] = !0;
      return DD
    }
    let LD = rD();

    function cD() {
      sD.l.KG("replayViewer|uiVisibilityChanged")
    }

    function gD() {
      return LD
    }

    function RD(DD, zD) {
      LD[DD] !== zD && (LD = {
        ...LD,
        [DD]: zD
      }, "nametag" === DD && pD.e.set({
        areNametagsHidden: !zD
      }), cD())
    }

    function AD() {
      LD = rD(), pD.e.set({
        areNametagsHidden: !1
      }), cD()
    }
  },
  60390: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      HOLD_TIMEOUT_MS: () => gD,
      ReplayViewer: () => AD
    });
    var pD = wD(36910),
      sD = wD(36964),
      KD = wD(36956),
      rD = wD(36981),
      LD = wD(4817),
      cD = wD(42450);
    const gD = 1e4,
      RD = new Set(["KI"]);
    class AD {
      constructor(DD) {
        var zD;
        this.deps = DD, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (zD = DD.now) && void 0 !== zD ? zD : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== LD.nd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Qg() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? pD.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(DD, zD) {
        var wD, KD, rD, cD;
        const {
          client: gD
        } = this.deps;
        if (!this.playback) {
          if (!gD.setPlayback(!0)) throw new Error(pD.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const RD = this.epoch;
        let AD;
        try {
          AD = await gD.open(DD, (() => (0, sD.c)(DD, zD)))
        } finally {
          this.loadingOpens--
        }
        if (RD !== this.epoch && "reloading" !== AD) throw new Error(pD.e.coreStopped.text);
        if ("opening" !== AD) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const DD = function(DD) {
            switch (DD) {
              case "reloading":
                return null;
              case "stopped":
              case LD.fd.ModuleTrap:
                return pD.e.coreStopped;
              case LD.fd.ModuleLoad:
                return pD.e.viewerLoadFailed;
              case LD.fd.TooLarge:
                return pD.e.cantOpen
            }
          }(AD);
          if (null === DD) return;
          throw new Error(DD.text)
        }
        return this.rejectSave(new Error(pD.e.saveClosed.text)), this.fileName = null !== (wD = null !== (KD = zD.fileName) && void 0 !== KD ? KD : null === (rD = zD.fileHandle) || void 0 === rD ? void 0 : rD.name) && void 0 !== wD ? wD : null, this.fileHandle = null !== (cD = zD.fileHandle) && void 0 !== cD ? cD : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((DD, zD) => {
          this.pendingOpen = {
            resolve: DD,
            reject: zD
          }
        }))
      }
      play() {
        this.holds.has("KI") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("KI")
      }
      seek(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this.lastView;
        null !== wD && (zD || DD < wD.DU) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(DD, zD)
      }
      setSpeed(DD) {
        this.deps.client.setSpeed(DD)
      }
      setCameraMode(DD) {
        this.deps.client.setCameraMode(DD)
      }
      cycleCameraMode() {
        const DD = this.lastView;
        null !== DD && DD.state !== LD.nd.None && this.setCameraMode(cD.c[(cD.c.indexOf(DD.cameraMode) + 1) % cD.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(DD) {
        this.edited(this.deps.client.setKeyframe(DD))
      }
      moveKeyframe(DD, zD) {
        this.edited(this.deps.client.moveKeyframe(DD, zD))
      }
      deleteKeyframes(DD, zD) {
        this.edited(this.deps.client.deleteKeyframes(DD, zD))
      }
      setMark(DD) {
        this.edited(this.deps.client.setMark(DD))
      }
      crop(DD, zD) {
        return !(zD <= DD) && (null !== this.pendingSave ? (this.deps.notify(pD.e.saveBusy), !1) : !!this.deps.client.crop(DD, zD) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(pD.e.saveBusy.text)) : new Promise(((DD, zD) => {
          const wD = {
            resolve: DD,
            reject: zD
          };
          this.pendingSave = wD, this.editsAtSave = this.edits, this.deps.client.save((0, cD.e)()).then((DD => {
            this.pendingSave === wD && this.saveStarted(DD)
          }), (DD => {
            this.pendingSave === wD && this.rejectSave(DD instanceof Error ? DD : new Error(String(DD)))
          }))
        }))
      }
      saveStarted(DD) {
        switch (DD) {
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
      markSaved(DD, zD) {
        var wD, pD;
        this.fileHandle = DD, this.fileName = null !== (wD = null !== (pD = null === DD || void 0 === DD ? void 0 : DD.name) && void 0 !== pD ? pD : zD) && void 0 !== wD ? wD : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(pD.e.coreStopped.text)), this.rejectSave(new Error(pD.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var DD, zD, wD;
        const pD = this.deps.client.view(),
          sD = pD !== this.lastView;
        this.lastView = pD, this.opening && null !== pD && pD.state !== LD.nd.None && pD.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, rD.f)()), this.cropAsked ? (this.cropAsked = !1, null !== pD && pD.state === LD.nd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== pD && pD.state !== LD.nd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const KD = 0 === this.settleFrames && 0 === (null !== (DD = null === (zD = (wD = this.deps).meshPending) || void 0 === zD ? void 0 : zD.call(wD)) && void 0 !== DD ? DD : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && KD && this.release("opening"), this.holds.has("seek") && KD && this.release("seek"), this.holds.has("crop") && !this.cropRunning && KD && this.release("crop");
        const cD = this.now();
        for (const [rD, LD] of this.holds) !RD.has(rD) && cD - LD >= gD && this.release(rD);
        this.saveRefused && !this.cropping && this.saveFailed(!1), sD && this.deps.onChange()
      }
      cropped() {
        (0, rD.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(DD) {
        switch (DD.reason) {
          case LD.fd.TooLarge:
            break;
          case LD.fd.Open:
          case LD.fd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const zD = (0, KD.f)(DD.version) ? pD.e.replayTooOld : pD.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(zD), this.settleOpen(new Error(zD.text));
            break
          }
          case LD.fd.Crop:
            if (DD.code === LD.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(pD.e.cropFailed);
            break;
          case LD.fd.ModuleTrap:
          case LD.fd.ModuleLoad:
          case LD.fd.Port:
            this.moduleEnded(DD.reason === LD.fd.ModuleTrap ? pD.e.coreStopped : pD.e.cantOpen);
            break;
          case LD.fd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${DD.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(DD) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(DD), this.settleOpen(new Error(DD.text))
      }
      saveDone(DD) {
        const zD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zD || void 0 === zD || zD.resolve(DD)
      }
      saveFailed(DD) {
        this.rejectSave(new Error(DD ? pD.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(DD) {
        DD && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(pD.e.cropBusy.text)) : this.deps.notify(pD.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(DD) {
        const zD = this.pendingOpen;
        this.pendingOpen = null, null === DD ? null === zD || void 0 === zD || zD.resolve() : null === zD || void 0 === zD || zD.reject(DD)
      }
      rejectSave(DD) {
        const zD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zD || void 0 === zD || zD.reject(DD)
      }
      hold(DD) {
        const zD = 0 === this.holds.size;
        this.holds.set(DD, this.now()), zD && this.deps.setHoldDraws(!0)
      }
      release(DD) {
        this.holds.delete(DD) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);