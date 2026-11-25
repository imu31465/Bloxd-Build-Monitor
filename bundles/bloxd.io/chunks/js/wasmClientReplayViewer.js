export const id = 61;
export const ids = [61];
export const modules = {
  37383: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      e: () => cu
    });
    var su = ju(649),
      Uu = ju(31),
      Zu = ju(37341);
    const Xu = "replayFileKeptForReload",
      lu = "replayFileKeptForReloadAt",
      qu = "replayFileKeptForReloadTab",
      fu = 3e5,
      Cu = 5e3;
    async function bu(uu, Eu) {
      const ju = Date.now(),
        Zu = {
          at: ju,
          bytes: uu,
          source: Eu
        },
        fu = await Promise.race([(async () => await Uu.h.setItem(lu, ju) && Uu.h.setItem(Xu, Zu))(), (0, su.K)(Cu).then((() => !1))]);
      fu || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const bu = {
        at: ju,
        oN: fu
      };
      Uu.l.setItem(qu, bu)
    }
    async function cu() {
      var uu;
      const Eu = Uu.l.getItem(qu);
      null !== Eu && Uu.l.removeItem(qu);
      const ju = Date.now(),
        su = await Uu.h.getItem(lu),
        Cu = null !== Eu && ju - Eu.at <= fu,
        bu = null !== Eu && su === Eu.at;
      let cu = null;
      if (null !== su && (bu || ("number" !== typeof su || ju - su > fu)) && (cu = Cu && bu && Eu.oN ? await Uu.h.getItem(Xu) : null, await Promise.all([Uu.h.removeItem(lu), Uu.h.removeItem(Xu)])), !Cu) return null;
      if ((null === (uu = cu) || void 0 === uu ? void 0 : uu.at) !== Eu.at) throw new Error(Zu.c.replayNotKept.text);
      return {
        bytes: cu.bytes,
        source: cu.source
      }
    }
  },
  37375: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su,
      f: () => Zu,
      i: () => Uu
    });
    const su = [9];

    function Uu(uu) {
      return su.includes(uu)
    }

    function Zu(uu) {
      return null !== uu && uu >= 3 && uu < su[0]
    }
  },
  37391: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Uu
    });
    const su = "data-replay-ui-active",
      Uu = [{
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
  37400: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      f: () => bu,
      j: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(37391);

    function Xu() {
      const uu = {};
      for (const {
          group: Eu
        }
        of Zu.f) uu[Eu] = !0;
      return uu
    }
    let lu = Xu();

    function qu() {
      Uu.h.TY("replayViewer|uiVisibilityChanged")
    }

    function fu() {
      return lu
    }

    function Cu(uu, Eu) {
      lu[uu] !== Eu && (lu = {
        ...lu,
        [uu]: Eu
      }, "nametag" === uu && su.d.set({
        areNametagsHidden: !Eu
      }), qu())
    }

    function bu() {
      lu = Xu(), su.d.set({
        areNametagsHidden: !1
      }), qu()
    }
  },
  60870: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      HOLD_TIMEOUT_MS: () => fu,
      ReplayViewer: () => bu
    });
    var su = ju(37341),
      Uu = ju(37383),
      Zu = ju(37375),
      Xu = ju(37400),
      lu = ju(4970),
      qu = ju(42864);
    const fu = 1e4,
      Cu = new Set(["AN"]);
    class bu {
      constructor(uu) {
        var Eu;
        this.deps = uu, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Eu = uu.now) && void 0 !== Eu ? Eu : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== lu.od.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get dl() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? su.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(uu, Eu) {
        var ju, Zu, Xu, qu;
        const {
          client: fu
        } = this.deps;
        if (!this.playback) {
          if (!fu.setPlayback(!0)) throw new Error(su.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Cu = this.epoch;
        let bu;
        try {
          bu = await fu.open(uu, (() => (0, Uu.b)(uu, Eu)))
        } finally {
          this.loadingOpens--
        }
        if (Cu !== this.epoch && "reloading" !== bu) throw new Error(su.c.coreStopped.text);
        if ("opening" !== bu) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const uu = function(uu) {
            switch (uu) {
              case "reloading":
                return null;
              case "stopped":
              case lu.ed.ModuleTrap:
                return su.c.coreStopped;
              case lu.ed.ModuleLoad:
                return su.c.viewerLoadFailed;
              case lu.ed.TooLarge:
                return su.c.cantOpen
            }
          }(bu);
          if (null === uu) return;
          throw new Error(uu.text)
        }
        return this.rejectSave(new Error(su.c.saveClosed.text)), this.fileName = null !== (ju = null !== (Zu = Eu.fileName) && void 0 !== Zu ? Zu : null === (Xu = Eu.fileHandle) || void 0 === Xu ? void 0 : Xu.name) && void 0 !== ju ? ju : null, this.fileHandle = null !== (qu = Eu.fileHandle) && void 0 !== qu ? qu : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((uu, Eu) => {
          this.pendingOpen = {
            resolve: uu,
            reject: Eu
          }
        }))
      }
      play() {
        this.holds.has("AN") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("AN")
      }
      seek(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this.lastView;
        null !== ju && (Eu || uu < ju.Tb) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(uu, Eu)
      }
      setSpeed(uu) {
        this.deps.client.setSpeed(uu)
      }
      setCameraMode(uu) {
        this.deps.client.setCameraMode(uu)
      }
      cycleCameraMode() {
        const uu = this.lastView;
        null !== uu && uu.state !== lu.od.None && this.setCameraMode(qu.c[(qu.c.indexOf(uu.cameraMode) + 1) % qu.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(uu) {
        this.edited(this.deps.client.setKeyframe(uu))
      }
      moveKeyframe(uu, Eu) {
        this.edited(this.deps.client.moveKeyframe(uu, Eu))
      }
      deleteKeyframes(uu, Eu) {
        this.edited(this.deps.client.deleteKeyframes(uu, Eu))
      }
      setMark(uu) {
        this.edited(this.deps.client.setMark(uu))
      }
      crop(uu, Eu) {
        return !(Eu <= uu) && (null !== this.pendingSave ? (this.deps.notify(su.c.saveBusy), !1) : !!this.deps.client.crop(uu, Eu) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(su.c.saveBusy.text)) : new Promise(((uu, Eu) => {
          const ju = {
            resolve: uu,
            reject: Eu
          };
          this.pendingSave = ju, this.editsAtSave = this.edits, this.deps.client.save((0, qu.g)()).then((uu => {
            this.pendingSave === ju && this.saveStarted(uu)
          }), (uu => {
            this.pendingSave === ju && this.rejectSave(uu instanceof Error ? uu : new Error(String(uu)))
          }))
        }))
      }
      saveStarted(uu) {
        switch (uu) {
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
      markSaved(uu, Eu) {
        var ju, su;
        this.fileHandle = uu, this.fileName = null !== (ju = null !== (su = null === uu || void 0 === uu ? void 0 : uu.name) && void 0 !== su ? su : Eu) && void 0 !== ju ? ju : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(su.c.coreStopped.text)), this.rejectSave(new Error(su.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var uu, Eu, ju;
        const su = this.deps.client.view(),
          Uu = su !== this.lastView;
        this.lastView = su, this.opening && null !== su && su.state !== lu.od.None && su.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Xu.f)()), this.cropAsked ? (this.cropAsked = !1, null !== su && su.state === lu.od.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== su && su.state !== lu.od.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Zu = 0 === this.settleFrames && 0 === (null !== (uu = null === (Eu = (ju = this.deps).meshPending) || void 0 === Eu ? void 0 : Eu.call(ju)) && void 0 !== uu ? uu : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Zu && this.release("opening"), this.holds.has("seek") && Zu && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Zu && this.release("crop");
        const qu = this.now();
        for (const [Xu, lu] of this.holds) !Cu.has(Xu) && qu - lu >= fu && this.release(Xu);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Uu && this.deps.onChange()
      }
      cropped() {
        (0, Xu.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(uu) {
        switch (uu.reason) {
          case lu.ed.TooLarge:
            break;
          case lu.ed.Open:
          case lu.ed.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Eu = (0, Zu.f)(uu.version) ? su.c.replayTooOld : su.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(Eu), this.settleOpen(new Error(Eu.text));
            break
          }
          case lu.ed.Crop:
            if (uu.code === lu.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(su.c.cropFailed);
            break;
          case lu.ed.ModuleTrap:
          case lu.ed.ModuleLoad:
          case lu.ed.Port:
            this.moduleEnded(uu.reason === lu.ed.ModuleTrap ? su.c.coreStopped : su.c.cantOpen);
            break;
          case lu.ed.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${uu.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(uu) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(uu), this.settleOpen(new Error(uu.text))
      }
      saveDone(uu) {
        const Eu = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eu || void 0 === Eu || Eu.resolve(uu)
      }
      saveFailed(uu) {
        this.rejectSave(new Error(uu ? su.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(uu) {
        uu && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(su.c.cropBusy.text)) : this.deps.notify(su.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(uu) {
        const Eu = this.pendingOpen;
        this.pendingOpen = null, null === uu ? null === Eu || void 0 === Eu || Eu.resolve() : null === Eu || void 0 === Eu || Eu.reject(uu)
      }
      rejectSave(uu) {
        const Eu = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eu || void 0 === Eu || Eu.reject(uu)
      }
      hold(uu) {
        const Eu = 0 === this.holds.size;
        this.holds.set(uu, this.now()), Eu && this.deps.setHoldDraws(!0)
      }
      release(uu) {
        this.holds.delete(uu) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);