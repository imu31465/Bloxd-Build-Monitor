export const id = 57;
export const ids = [57];
export const modules = {
  36435: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      g: () => nz
    });
    const Ez = "data-replay-ui-active",
      nz = [{
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
  36441: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      i: () => pz,
      m: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(36435);

    function lz() {
      const zz = {};
      for (const {
          group: uz
        }
        of iz.g) zz[uz] = !0;
      return zz
    }
    let Mz = lz();

    function tz() {
      nz.k.sK("replayViewer|uiVisibilityChanged")
    }

    function Hz() {
      return Mz
    }

    function Oz(zz, uz) {
      Mz[zz] !== uz && (Mz = {
        ...Mz,
        [zz]: uz
      }, "nametag" === zz && Ez.e.set({
        areNametagsHidden: !uz
      }), tz())
    }

    function pz() {
      Mz = lz(), Ez.e.set({
        areNametagsHidden: !1
      }), tz()
    }
  },
  41840: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      HOLD_TIMEOUT_MS: () => Mz,
      ReplayViewer: () => Hz
    });
    var Ez = bz(36422),
      nz = bz(36441),
      iz = bz(4560),
      lz = bz(41809);
    const Mz = 1e4,
      tz = new Set(["JZ"]);
    class Hz {
      constructor(zz) {
        var uz;
        this.deps = zz, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (uz = zz.now) && void 0 !== uz ? uz : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== iz.dd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get yM() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Ez.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(zz, uz) {
        var bz, nz, lz, Mz;
        const {
          client: tz
        } = this.deps;
        if (!this.playback) {
          if (!tz.setPlayback(!0)) throw new Error(Ez.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Hz = this.epoch;
        let Oz;
        try {
          Oz = await tz.open(zz)
        } finally {
          this.loadingOpens--
        }
        if (Hz !== this.epoch) throw new Error(Ez.d.coreStopped.text);
        if ("opening" !== Oz) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const zz = function(zz) {
            switch (zz) {
              case "reloading":
                return null;
              case "stopped":
              case iz.Vc.ModuleTrap:
                return Ez.d.coreStopped;
              case iz.Vc.ModuleLoad:
                return Ez.d.viewerLoadFailed;
              case iz.Vc.TooLarge:
                return Ez.d.cantOpen
            }
          }(Oz);
          if (null === zz) return;
          throw new Error(zz.text)
        }
        return this.rejectSave(new Error(Ez.d.saveClosed.text)), this.fileName = null !== (bz = null !== (nz = uz.fileName) && void 0 !== nz ? nz : null === (lz = uz.fileHandle) || void 0 === lz ? void 0 : lz.name) && void 0 !== bz ? bz : null, this.fileHandle = null !== (Mz = uz.fileHandle) && void 0 !== Mz ? Mz : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((zz, uz) => {
          this.pendingOpen = {
            resolve: zz,
            reject: uz
          }
        }))
      }
      play() {
        this.holds.has("JZ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("JZ")
      }
      seek(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this.lastView;
        null !== bz && (uz || zz < bz.sd) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(zz, uz)
      }
      setSpeed(zz) {
        this.deps.client.setSpeed(zz)
      }
      setCameraMode(zz) {
        this.deps.client.setCameraMode(zz)
      }
      cycleCameraMode() {
        const zz = this.lastView;
        null !== zz && zz.state !== iz.dd.None && this.setCameraMode(lz.c[(lz.c.indexOf(zz.cameraMode) + 1) % lz.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(zz) {
        this.edited(this.deps.client.setKeyframe(zz))
      }
      moveKeyframe(zz, uz) {
        this.edited(this.deps.client.moveKeyframe(zz, uz))
      }
      deleteKeyframes(zz, uz) {
        this.edited(this.deps.client.deleteKeyframes(zz, uz))
      }
      setMark(zz) {
        this.edited(this.deps.client.setMark(zz))
      }
      crop(zz, uz) {
        return !(uz <= zz) && (null !== this.pendingSave ? (this.deps.notify(Ez.d.saveBusy), !1) : !!this.deps.client.crop(zz, uz) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Ez.d.saveBusy.text)) : new Promise(((zz, uz) => {
          const bz = {
            resolve: zz,
            reject: uz
          };
          this.pendingSave = bz, this.editsAtSave = this.edits, this.deps.client.save((0, lz.e)()).then((zz => {
            this.pendingSave === bz && this.saveStarted(zz)
          }), (zz => {
            this.pendingSave === bz && this.rejectSave(zz instanceof Error ? zz : new Error(String(zz)))
          }))
        }))
      }
      saveStarted(zz) {
        switch (zz) {
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
      markSaved(zz, uz) {
        var bz, Ez;
        this.fileHandle = zz, this.fileName = null !== (bz = null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.name) && void 0 !== Ez ? Ez : uz) && void 0 !== bz ? bz : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Ez.d.coreStopped.text)), this.rejectSave(new Error(Ez.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var zz, uz, bz;
        const Ez = this.deps.client.view(),
          lz = Ez !== this.lastView;
        this.lastView = Ez, this.opening && null !== Ez && Ez.state !== iz.dd.None && Ez.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, nz.i)()), this.cropAsked ? (this.cropAsked = !1, null !== Ez && Ez.state === iz.dd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Ez && Ez.state !== iz.dd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Hz = 0 === this.settleFrames && 0 === (null !== (zz = null === (uz = (bz = this.deps).meshPending) || void 0 === uz ? void 0 : uz.call(bz)) && void 0 !== zz ? zz : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Hz && this.release("opening"), this.holds.has("seek") && Hz && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Hz && this.release("crop");
        const Oz = this.now();
        for (const [nz, iz] of this.holds) !tz.has(nz) && Oz - iz >= Mz && (this.release(nz), "opening" === nz && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), lz && this.deps.onChange()
      }
      cropped() {
        (0, nz.i)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(zz) {
        switch (zz.reason) {
          case iz.Vc.TooLarge:
            break;
          case iz.Vc.Open:
          case iz.Vc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Ez.d.cantOpen), this.settleOpen(new Error(Ez.d.cantOpen.text));
            break;
          case iz.Vc.Crop:
            if (zz.code === iz.Tc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Ez.d.cropFailed);
            break;
          case iz.Vc.ModuleTrap:
          case iz.Vc.ModuleLoad:
          case iz.Vc.Port:
            this.moduleEnded(zz.reason === iz.Vc.ModuleTrap ? Ez.d.coreStopped : Ez.d.cantOpen);
            break;
          case iz.Vc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${zz.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(zz) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(zz), this.settleOpen(new Error(zz.text))
      }
      saveDone(zz) {
        const uz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === uz || void 0 === uz || uz.resolve(zz)
      }
      saveFailed(zz) {
        this.rejectSave(new Error(zz ? Ez.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(zz) {
        zz && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Ez.d.cropBusy.text)) : this.deps.notify(Ez.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(zz) {
        const uz = this.pendingOpen;
        this.pendingOpen = null, null === zz ? null === uz || void 0 === uz || uz.resolve() : null === uz || void 0 === uz || uz.reject(zz)
      }
      rejectSave(zz) {
        const uz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === uz || void 0 === uz || uz.reject(zz)
      }
      hold(zz) {
        const uz = 0 === this.holds.size;
        this.holds.set(zz, this.now()), uz && this.deps.setHoldDraws(!0)
      }
      release(zz) {
        this.holds.delete(zz) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);