export const id = 73;
export const ids = [73];
export const modules = {
  38521: (dd, Od, md) => {
    md.d(Od, {
      e: () => td,
      h: () => od
    });
    var Wd = md(701),
      Fd = md(46),
      Rd = md(38483);
    const Xd = "replayFileKeptForReload",
      Kd = "replayFileKeptForReloadAt",
      hd = "replayFileKeptForReloadTab",
      vd = 3e5,
      Qd = 5e3;
    async function td(dd, Od) {
      const md = Date.now(),
        Rd = {
          at: md,
          bytes: dd,
          source: Od
        },
        vd = await Promise.race([(async () => await Fd.h.setItem(Kd, md) && Fd.h.setItem(Xd, Rd))(), (0, Wd.S)(Qd).then((() => !1))]);
      vd || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const td = {
        at: md,
        kQ: vd
      };
      Fd.o.setItem(hd, td)
    }
    async function od() {
      var dd;
      const Od = Fd.o.getItem(hd);
      null !== Od && Fd.o.removeItem(hd);
      const md = Date.now(),
        Wd = await Fd.h.getItem(Kd),
        Qd = null !== Od && md - Od.at <= vd,
        td = null !== Od && Wd === Od.at;
      let od = null;
      if (null !== Wd && (td || ("number" !== typeof Wd || md - Wd > vd)) && (od = Qd && td && Od.kQ ? await Fd.h.getItem(Xd) : null, await Promise.all([Fd.h.removeItem(Kd), Fd.h.removeItem(Xd)])), !Qd) return null;
      if ((null === (dd = od) || void 0 === dd ? void 0 : dd.at) !== Od.at) throw new Error(Rd.c.replayNotKept.text);
      return {
        bytes: od.bytes,
        source: od.source
      }
    }
  },
  38517: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Rd,
      g: () => Fd
    });
    const Wd = [9];

    function Fd(dd) {
      return Wd.includes(dd)
    }

    function Rd(dd) {
      return null !== dd && dd >= 3 && dd < Wd[0]
    }
  },
  38529: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      d: () => Fd
    });
    const Wd = "data-replay-ui-active",
      Fd = [{
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
  38538: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      g: () => td,
      k: () => Qd
    });
    var Wd = md(29),
      Fd = md(32),
      Rd = md(38529);

    function Xd() {
      const dd = {};
      for (const {
          group: Od
        }
        of Rd.d) dd[Od] = !0;
      return dd
    }
    let Kd = Xd();

    function hd() {
      Fd.j.lQ("replayViewer|uiVisibilityChanged")
    }

    function vd() {
      return Kd
    }

    function Qd(dd, Od) {
      Kd[dd] !== Od && (Kd = {
        ...Kd,
        [dd]: Od
      }, "nametag" === dd && Wd.e.set({
        areNametagsHidden: !Od
      }), hd())
    }

    function td() {
      Kd = Xd(), Wd.e.set({
        areNametagsHidden: !1
      }), hd()
    }
  },
  64753: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      HOLD_TIMEOUT_MS: () => vd,
      ReplayViewer: () => td
    });
    var Wd = md(38483),
      Fd = md(38521),
      Rd = md(38517),
      Xd = md(38538),
      Kd = md(5568),
      hd = md(55017);
    const vd = 1e4,
      Qd = new Set(["Jq"]);
    class td {
      constructor(dd) {
        var Od;
        this.deps = dd, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Od = dd.now) && void 0 !== Od ? Od : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Kd.ld.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get jK() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Wd.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(dd, Od) {
        var md, Rd, Xd, hd;
        const {
          client: vd
        } = this.deps;
        if (!this.playback) {
          if (!vd.setPlayback(!0)) throw new Error(Wd.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Qd = this.epoch;
        let td;
        try {
          td = await vd.open(dd, (() => (0, Fd.e)(dd, Od)))
        } finally {
          this.loadingOpens--
        }
        if (Qd !== this.epoch && "reloading" !== td) throw new Error(Wd.c.coreStopped.text);
        if ("opening" !== td) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const dd = function(dd) {
            switch (dd) {
              case "reloading":
                return null;
              case "stopped":
              case Kd.fd.ModuleTrap:
                return Wd.c.coreStopped;
              case Kd.fd.ModuleLoad:
                return Wd.c.viewerLoadFailed;
              case Kd.fd.TooLarge:
                return Wd.c.cantOpen
            }
          }(td);
          if (null === dd) return;
          throw new Error(dd.text)
        }
        return this.rejectSave(new Error(Wd.c.saveClosed.text)), this.fileName = null !== (md = null !== (Rd = Od.fileName) && void 0 !== Rd ? Rd : null === (Xd = Od.fileHandle) || void 0 === Xd ? void 0 : Xd.name) && void 0 !== md ? md : null, this.fileHandle = null !== (hd = Od.fileHandle) && void 0 !== hd ? hd : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((dd, Od) => {
          this.pendingOpen = {
            resolve: dd,
            reject: Od
          }
        }))
      }
      play() {
        this.holds.has("Jq") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Jq")
      }
      seek(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this.lastView;
        null !== md && (Od || dd < md.Et) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(dd, Od)
      }
      setSpeed(dd) {
        this.deps.client.setSpeed(dd)
      }
      setCameraMode(dd) {
        this.deps.client.setCameraMode(dd)
      }
      cycleCameraMode() {
        const dd = this.lastView;
        null !== dd && dd.state !== Kd.ld.None && this.setCameraMode(hd.d[(hd.d.indexOf(dd.cameraMode) + 1) % hd.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(dd) {
        this.edited(this.deps.client.setKeyframe(dd))
      }
      moveKeyframe(dd, Od) {
        this.edited(this.deps.client.moveKeyframe(dd, Od))
      }
      deleteKeyframes(dd, Od) {
        this.edited(this.deps.client.deleteKeyframes(dd, Od))
      }
      setMark(dd) {
        this.edited(this.deps.client.setMark(dd))
      }
      crop(dd, Od) {
        return !(Od <= dd) && (null !== this.pendingSave ? (this.deps.notify(Wd.c.saveBusy), !1) : !!this.deps.client.crop(dd, Od) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Wd.c.saveBusy.text)) : new Promise(((dd, Od) => {
          const md = {
            resolve: dd,
            reject: Od
          };
          this.pendingSave = md, this.editsAtSave = this.edits, this.deps.client.save((0, hd.f)()).then((dd => {
            this.pendingSave === md && this.saveStarted(dd)
          }), (dd => {
            this.pendingSave === md && this.rejectSave(dd instanceof Error ? dd : new Error(String(dd)))
          }))
        }))
      }
      saveStarted(dd) {
        switch (dd) {
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
      markSaved(dd, Od) {
        var md, Wd;
        this.fileHandle = dd, this.fileName = null !== (md = null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.name) && void 0 !== Wd ? Wd : Od) && void 0 !== md ? md : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Wd.c.coreStopped.text)), this.rejectSave(new Error(Wd.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var dd, Od, md;
        const Wd = this.deps.client.view(),
          Fd = Wd !== this.lastView;
        this.lastView = Wd, this.opening && null !== Wd && Wd.state !== Kd.ld.None && Wd.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Xd.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Wd && Wd.state === Kd.ld.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Wd && Wd.state !== Kd.ld.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Rd = 0 === this.settleFrames && 0 === (null !== (dd = null === (Od = (md = this.deps).meshPending) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Rd && this.release("opening"), this.holds.has("seek") && Rd && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Rd && this.release("crop");
        const hd = this.now();
        for (const [Xd, Kd] of this.holds) !Qd.has(Xd) && hd - Kd >= vd && this.release(Xd);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Fd && this.deps.onChange()
      }
      cropped() {
        (0, Xd.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(dd) {
        switch (dd.reason) {
          case Kd.fd.TooLarge:
            break;
          case Kd.fd.Open:
          case Kd.fd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Od = (0, Rd.f)(dd.version) ? Wd.c.replayTooOld : Wd.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(Od), this.settleOpen(new Error(Od.text));
            break
          }
          case Kd.fd.Crop:
            if (dd.code === Kd.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Wd.c.cropFailed);
            break;
          case Kd.fd.ModuleTrap:
          case Kd.fd.ModuleLoad:
          case Kd.fd.Port:
            this.moduleEnded(dd.reason === Kd.fd.ModuleTrap ? Wd.c.coreStopped : Wd.c.cantOpen);
            break;
          case Kd.fd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(dd) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(dd), this.settleOpen(new Error(dd.text))
      }
      saveDone(dd) {
        const Od = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Od || void 0 === Od || Od.resolve(dd)
      }
      saveFailed(dd) {
        this.rejectSave(new Error(dd ? Wd.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(dd) {
        dd && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Wd.c.cropBusy.text)) : this.deps.notify(Wd.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(dd) {
        const Od = this.pendingOpen;
        this.pendingOpen = null, null === dd ? null === Od || void 0 === Od || Od.resolve() : null === Od || void 0 === Od || Od.reject(dd)
      }
      rejectSave(dd) {
        const Od = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Od || void 0 === Od || Od.reject(dd)
      }
      hold(dd) {
        const Od = 0 === this.holds.size;
        this.holds.set(dd, this.now()), Od && this.deps.setHoldDraws(!0)
      }
      release(dd) {
        this.holds.delete(dd) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);