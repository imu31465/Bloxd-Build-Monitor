export const id = 267;
export const ids = [267];
export const modules = {
  38685: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      f: () => Xd,
      h: () => Fd
    });
    const Wd = 1024,
      Fd = 16,
      Rd = 36e4;
    class Xd {
      constructor(dd) {
        this.boneCount = dd, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * dd), this.position = new Float64Array(3 * dd), this.scale = new Float64Array(3 * dd).fill(1), this.touched = new Uint8Array(dd)
      }
      clampToLimits() {
        for (let dd = 0; dd < this.boneCount; dd++)
          if (0 !== this.touched[dd])
            for (let Od = 3 * dd; Od < 3 * dd + 3; Od++) {
              const dd = this.rotation[Od],
                md = this.position[Od],
                Xd = this.scale[Od];
              dd >= -36e4 && dd <= Rd || (this.rotation[Od] = hd(dd, Rd)), md >= -1024 && md <= Wd || (this.position[Od] = hd(md, Wd)), Xd >= -Fd && Xd <= Fd || (this.scale[Od] = hd(Xd, Fd, 1))
            }
      }
      reset() {
        for (let dd = 0; dd < this.boneCount; dd++)
          if (0 !== this.touched[dd]) {
            this.touched[dd] = 0;
            for (let Od = 3 * dd; Od < 3 * dd + 3; Od++) this.rotation[Od] = 0, this.position[Od] = 0, this.scale[Od] = 1
          }
      }
    }
    class Kd {
      constructor(dd) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * dd), this.position = new Float64Array(3 * dd), this.scaleDelta = new Float64Array(3 * dd), this.boneWeight = new Float64Array(dd), this.touched = new Uint8Array(dd), this.overrides = new Uint8Array(dd), this.touchedBones = new Int32Array(dd)
      }
      touch(dd, Od, md) {
        0 === this.touched[dd] && (this.touched[dd] = 1, this.touchedBones[this.touchedCount++] = dd), this.boneWeight[dd] += Od, md && (this.overrides[dd] = 1)
      }
      applyTo(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let Fd = 0; Fd < this.touchedCount; Fd++) {
          const Rd = this.touchedBones[Fd],
            Xd = this.boneWeight[Rd];
          if (md || 1 === this.overrides[Rd]) {
            const md = Od * Math.min(1, Xd);
            for (let Od = 3 * Rd; Od < 3 * Rd + 3; Od++) dd.rotation[Od] += (this.rotation[Od] / Xd - dd.rotation[Od]) * md, dd.position[Od] += (this.position[Od] / Xd - dd.position[Od]) * md, dd.scale[Od] += (1 + this.scaleDelta[Od] / Xd - dd.scale[Od]) * md
          } else {
            const md = Wd && Xd > 1 ? Od / Xd : Od;
            for (let Od = 3 * Rd; Od < 3 * Rd + 3; Od++) dd.rotation[Od] += this.rotation[Od] * md, dd.position[Od] += this.position[Od] * md, dd.scale[Od] *= 1 + this.scaleDelta[Od] * md
          }
          dd.touched[Rd] = 1
        }
      }
      clear() {
        for (let dd = 0; dd < this.touchedCount; dd++) {
          const Od = this.touchedBones[dd];
          this.touched[Od] = 0, this.overrides[Od] = 0, this.boneWeight[Od] = 0;
          for (let dd = 3 * Od; dd < 3 * Od + 3; dd++) this.rotation[dd] = 0, this.position[dd] = 0, this.scaleDelta[dd] = 0
        }
        this.touchedCount = 0
      }
    }

    function hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(dd) ? md : Math.min(Od, Math.max(-Od, dd))
    }
  },
  38682: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      h: () => Kd
    });
    var Wd = md(38673),
      Fd = md(405),
      Rd = md(2057),
      Xd = md(38685);

    function Kd(dd) {
      if ("gm" in dd) return Ud.createAnimationScript(dd);
      return new Qd(dd).createAnimationScript()
    }

    function hd(dd, Od, md, Fd) {
      const Rd = dd.gm <= 0 ? 1 : Od + md * Math.max(0, Fd) / dd.gm;
      return dd.wm === Wd.f.LoopOnLastFrame ? Rd % 1 : dd.wm === Wd.f.NoLoop && Rd >= 1 ? null : Math.min(1, Rd)
    }
    class vd {
      createAnimationScript(dd) {
        const {
          gm: Od,
          loop: md,
          am: Wd
        } = dd;
        return {
          gm: Math.round(Od),
          wm: this.createLoopMode(null !== md && void 0 !== md && md),
          am: this.createNodeSkeletonAnimationScript(null !== Wd && void 0 !== Wd ? Wd : null)
        }
      }
      createLoopMode(dd) {
        switch (dd) {
          case !1:
            return Wd.f.NoLoop;
          case !0:
            return Wd.f.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Wd.f.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${dd}`)
      }
      createNodeSkeletonAnimationScript(dd) {
        if (null === dd) return null;
        const Od = {};
        for (const md in dd) {
          const Wd = dd[md];
          Od[md] = this.createNodeAnimationScript(Wd)
        }
        return Od
      }
      createNodeAnimationScript(dd) {
        const {
          timeline: Od
        } = dd, md = Od.filter((dd => Number.isFinite(dd.timeFraction)));
        return md.sort(((dd, Od) => dd.timeFraction - Od.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(md, "rotation", Nd),
          position: this.createTimelineFromKeyframes(md, "position", Hd),
          scale: this.createTimelineFromKeyframes(md, "scale", Hd, bd)
        }
      }
      createTimelineFromKeyframes(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd => dd;
        const Fd = [];
        for (const vd of dd) {
          const dd = vd[Od];
          if (dd) {
            const Od = this.createAnimationFrameWithoutPrecomputes(vd.timeFraction, dd, Wd);
            td(Od) && Fd.push(Od)
          }
        }
        const Rd = [];
        for (let vd = 0; vd < Fd.length; vd++) {
          var Xd, Kd, hd;
          const dd = Fd[vd],
            Od = null !== (Xd = Fd[vd - 1]) && void 0 !== Xd ? Xd : dd,
            Wd = null !== (Kd = Fd[vd + 1]) && void 0 !== Kd ? Kd : dd,
            Qd = null !== (hd = Fd[vd + 2]) && void 0 !== hd ? hd : Wd;
          Rd.push({
            ...dd,
            ...md(Od.post, Od.timeFraction, dd.post, dd.timeFraction, Wd.pre, Wd.timeFraction, Qd.pre, Qd.timeFraction)
          })
        }
        return Rd
      }
      createAnimationFrameWithoutPrecomputes(dd, Od, md) {
        let Wd, Fd, Rd = null;
        var Xd;
        if ("object" === typeof Od && "point" in Od) Rd = null !== (Xd = Od.Um) && void 0 !== Xd ? Xd : null, Wd = Od.point, Fd = Od.point;
        else if ("object" === typeof Od && "pre" in Od) {
          var Kd;
          Rd = null !== (Kd = Od.Um) && void 0 !== Kd ? Kd : null, Wd = Od.pre, Fd = Od.post
        } else Wd = Od, Fd = Od;
        return {
          timeFraction: dd,
          Um: this.createLerpMode(Rd),
          pre: md(Wd),
          post: md(Fd)
        }
      }
      createLerpMode(dd) {
        return null === dd ? Wd.e.Linear : vd.LERP_MODE_SCHEMA_MAPPING[dd]
      }
    }
    vd.LERP_MODE_SCHEMA_MAPPING = {
      linear: Wd.e.Linear,
      "catmull-rom-spline": Wd.e.CatmullRomSpline
    };
    class Qd {
      constructor(dd) {
        this.animationSchema = dd
      }
      createAnimationScript() {
        const {
          animation_length: dd,
          loop: Od,
          bones: md
        } = this.animationSchema;
        return {
          gm: Math.round(1e3 * dd),
          wm: this.createLoopMode(null !== Od && void 0 !== Od && Od),
          am: this.createNodeSkeletonAnimationScript(null !== md && void 0 !== md ? md : null)
        }
      }
      createLoopMode(dd) {
        switch (dd) {
          case !1:
            return Wd.f.NoLoop;
          case !0:
            return Wd.f.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Wd.f.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${dd}`)
      }
      createNodeSkeletonAnimationScript(dd) {
        if (null === dd) return null;
        const Od = {};
        for (const md in dd) {
          const Wd = dd[md];
          Od[md] = this.createNodeAnimationScript(Wd)
        }
        return Od
      }
      createNodeAnimationScript(dd) {
        const {
          rotation: Od,
          position: md,
          scale: Wd
        } = dd;
        return {
          rotation: this.createAnimationTimeline(null !== Od && void 0 !== Od ? Od : null, pd, Nd, !0),
          position: this.createAnimationTimeline(null !== md && void 0 !== md ? md : null, gd, Hd, !1),
          scale: this.createAnimationTimeline(null !== Wd && void 0 !== Wd ? Wd : null, yd, Hd, !1)
        }
      }
      createAnimationTimeline(dd, Od, md, Wd) {
        if (null === dd) return [];
        (Array.isArray(dd) || "number" === typeof dd) && (dd = {
          "0.0": dd
        });
        const Fd = Object.entries(dd).map((dd => {
          let [md, Wd] = dd;
          const Fd = Number(md) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Fd, Wd, Od)
        })).filter(td);
        Fd.sort(((dd, Od) => dd.timeFraction - Od.timeFraction)), Wd && function(dd) {
          for (let Od = 1; Od < dd.length; Od++) {
            const md = dd[Od - 1].post,
              Wd = dd[Od],
              Fd = wd(Wd.pre),
              Rd = wd(Wd.post),
              Xd = Jd(md, Wd.pre);
            Jd(md, Fd) < Xd && (dd[Od] = {
              ...Wd,
              pre: Fd,
              post: Rd
            })
          }
        }(Fd);
        const Rd = [];
        for (let vd = 0; vd < Fd.length; vd++) {
          var Xd, Kd, hd;
          const dd = Fd[vd],
            Od = null !== (Xd = Fd[vd - 1]) && void 0 !== Xd ? Xd : dd,
            Wd = null !== (Kd = Fd[vd + 1]) && void 0 !== Kd ? Kd : dd,
            Qd = null !== (hd = Fd[vd + 2]) && void 0 !== hd ? hd : Wd;
          Rd.push({
            ...dd,
            ...md(Od.post, Od.timeFraction, dd.post, dd.timeFraction, Wd.pre, Wd.timeFraction, Qd.pre, Qd.timeFraction)
          })
        }
        return Rd
      }
      createAnimationFrameWithoutPrecomputes(dd, Od, md) {
        let Wd, Fd, Rd = null;
        if ("object" === typeof Od && "post" in Od) {
          var Xd;
          Rd = null !== (Xd = Od.lerp_mode) && void 0 !== Xd ? Xd : null, Fd = md(Od.post), Wd = void 0 !== Od.pre ? md(Od.pre) : Fd
        } else {
          const dd = md(Od);
          Fd = dd, Wd = dd
        }
        return {
          timeFraction: dd,
          Um: this.createLerpMode(Rd),
          pre: Wd,
          post: Fd
        }
      }
      createLerpMode(dd) {
        return null === dd ? Wd.e.Linear : Qd.LERP_MODE_SCHEMA_MAPPING[dd]
      }
    }

    function td(dd) {
      return Number.isFinite(dd.timeFraction) && od(dd.pre) && od(dd.post)
    }

    function od(dd) {
      return Number.isFinite(dd[0]) && Number.isFinite(dd[1]) && Number.isFinite(dd[2])
    }

    function Nd(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
      const hd = Rd - Od,
        vd = Rd - Wd,
        Qd = Kd - Wd,
        td = [null, null, null];
      for (let od = 0; od < td.length; od++) td[od] = qd(dd[od], md[od], Fd[od], Xd[od], hd, Qd);
      return {
        xm: vd,
        Bm: td
      }
    }

    function qd(dd, Od, md, Wd, Rd, Xd) {
      return {
        sm: Fd.b.computeShortestRotation(dd, md) / Rd,
        um: Fd.b.computeShortestRotation(Od, Wd) / Xd,
        delta: Fd.b.computeShortestRotation(Od, md)
      }
    }

    function Hd(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
      const hd = Rd - Od,
        vd = Rd - Wd,
        Qd = Kd - Wd,
        td = [null, null, null];
      for (let od = 0; od < td.length; od++) td[od] = {
        sm: (Fd[od] - dd[od]) / hd,
        um: (Xd[od] - md[od]) / Qd,
        delta: Fd[od] - md[od]
      };
      return {
        xm: vd,
        Bm: td
      }
    }

    function yd(dd) {
      return bd("number" === typeof dd ? [dd, dd, dd] : dd)
    }

    function bd(dd) {
      return [Td(dd[0]), Td(dd[1]), Td(dd[2])]
    }

    function Td(dd) {
      return Number.isFinite(dd) ? Math.min(Xd.h, Math.max(-Xd.h, dd)) : dd
    }

    function pd(dd) {
      const [Od, md, Wd] = dd, Xd = -(0, Rd.n)(Od), Kd = -(0, Rd.n)(md), hd = (0, Rd.n)(Wd), vd = Fd.b.quaternionFromEulerZYX(Xd, Kd, hd);
      return Fd.b.eulerYXZFromQuaternion(vd)
    }
    Qd.LERP_MODE_SCHEMA_MAPPING = {
      linear: Wd.e.Linear,
      catmullrom: Wd.e.CatmullRomSpline
    };
    const Yd = 1 / 16;

    function gd(dd) {
      return [-dd[0] * Yd, dd[1] * Yd, dd[2] * Yd]
    }

    function wd(dd) {
      const [Od, md, Wd] = dd;
      return [Od >= 0 ? Math.PI - Od : -Math.PI - Od, Ed(md + Math.PI), Ed(Wd + Math.PI)]
    }

    function Ed(dd) {
      return Fd.b.mod(dd + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Jd(dd, Od) {
      return Math.abs(Fd.b.computeShortestRotation(dd[0], Od[0])) + Math.abs(Fd.b.computeShortestRotation(dd[1], Od[1])) + Math.abs(Fd.b.computeShortestRotation(dd[2], Od[2]))
    }
    const Ud = new vd
  },
  38673: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Rd,
      e: () => Wd,
      f: () => Fd
    });
    let Wd = function(dd) {
        return dd[dd.Linear = 0] = "Linear", dd[dd.CatmullRomSpline = 1] = "CatmullRomSpline", dd
      }({}),
      Fd = function(dd) {
        return dd[dd.NoLoop = 0] = "NoLoop", dd[dd.LoopOnLastFrame = 1] = "LoopOnLastFrame", dd[dd.HoldOnLastFrame = 2] = "HoldOnLastFrame", dd
      }({}),
      Rd = function(dd) {
        return dd[dd.Movement = 0] = "Movement", dd[dd.Action = 1] = "Action", dd[dd.Emote = 2] = "Emote", dd[dd.Custom = 3] = "Custom", dd
      }({}),
      Xd = function(dd) {
        return dd[dd.Start = 0] = "Start", dd[dd.Stop = 1] = "Stop", dd
      }({})
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);