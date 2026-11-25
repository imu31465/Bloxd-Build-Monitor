export const id = 239;
export const ids = [239];
export const modules = {
  37411: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      h: () => mt,
      j: () => qt
    });
    const Ot = 1024,
      qt = 16,
      Dt = 36e4;
    class mt {
      constructor(tt) {
        this.boneCount = tt, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * tt), this.position = new Float64Array(3 * tt), this.scale = new Float64Array(3 * tt).fill(1), this.touched = new Uint8Array(tt)
      }
      clampToLimits() {
        for (let tt = 0; tt < this.boneCount; tt++)
          if (0 !== this.touched[tt])
            for (let et = 3 * tt; et < 3 * tt + 3; et++) {
              const tt = this.rotation[et],
                Vt = this.position[et],
                mt = this.scale[et];
              tt >= -36e4 && tt <= Dt || (this.rotation[et] = jt(tt, Dt)), Vt >= -1024 && Vt <= Ot || (this.position[et] = jt(Vt, Ot)), mt >= -qt && mt <= qt || (this.scale[et] = jt(mt, qt, 1))
            }
      }
      reset() {
        for (let tt = 0; tt < this.boneCount; tt++)
          if (0 !== this.touched[tt]) {
            this.touched[tt] = 0;
            for (let et = 3 * tt; et < 3 * tt + 3; et++) this.rotation[et] = 0, this.position[et] = 0, this.scale[et] = 1
          }
      }
    }
    class dt {
      constructor(tt) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * tt), this.position = new Float64Array(3 * tt), this.scaleDelta = new Float64Array(3 * tt), this.boneWeight = new Float64Array(tt), this.touched = new Uint8Array(tt), this.overrides = new Uint8Array(tt), this.touchedBones = new Int32Array(tt)
      }
      touch(tt, et, Vt) {
        0 === this.touched[tt] && (this.touched[tt] = 1, this.touchedBones[this.touchedCount++] = tt), this.boneWeight[tt] += et, Vt && (this.overrides[tt] = 1)
      }
      applyTo(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let qt = 0; qt < this.touchedCount; qt++) {
          const Dt = this.touchedBones[qt],
            mt = this.boneWeight[Dt];
          if (Vt || 1 === this.overrides[Dt]) {
            const Vt = et * Math.min(1, mt);
            for (let et = 3 * Dt; et < 3 * Dt + 3; et++) tt.rotation[et] += (this.rotation[et] / mt - tt.rotation[et]) * Vt, tt.position[et] += (this.position[et] / mt - tt.position[et]) * Vt, tt.scale[et] += (1 + this.scaleDelta[et] / mt - tt.scale[et]) * Vt
          } else {
            const Vt = Ot && mt > 1 ? et / mt : et;
            for (let et = 3 * Dt; et < 3 * Dt + 3; et++) tt.rotation[et] += this.rotation[et] * Vt, tt.position[et] += this.position[et] * Vt, tt.scale[et] *= 1 + this.scaleDelta[et] * Vt
          }
          tt.touched[Dt] = 1
        }
      }
      clear() {
        for (let tt = 0; tt < this.touchedCount; tt++) {
          const et = this.touchedBones[tt];
          this.touched[et] = 0, this.overrides[et] = 0, this.boneWeight[et] = 0;
          for (let tt = 3 * et; tt < 3 * et + 3; tt++) this.rotation[tt] = 0, this.position[tt] = 0, this.scaleDelta[tt] = 0
        }
        this.touchedCount = 0
      }
    }

    function jt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(tt) ? Vt : Math.min(et, Math.max(-et, tt))
    }
  },
  37403: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt,
      e: () => dt
    });
    var Ot = Vt(37398),
      qt = Vt(391),
      Dt = Vt(1993),
      mt = Vt(37411);

    function dt(tt) {
      if ("eq" in tt) return vt.createAnimationScript(tt);
      return new Xt(tt).createAnimationScript()
    }

    function jt(tt, et, Vt, qt) {
      const Dt = tt.eq <= 0 ? 1 : et + Vt * Math.max(0, qt) / tt.eq;
      return tt.Vq === Ot.k.LoopOnLastFrame ? Dt % 1 : tt.Vq === Ot.k.NoLoop && Dt >= 1 ? null : Math.min(1, Dt)
    }
    class Ht {
      createAnimationScript(tt) {
        const {
          eq: et,
          loop: Vt,
          Oq: Ot
        } = tt;
        return {
          eq: Math.round(et),
          Vq: this.createLoopMode(null !== Vt && void 0 !== Vt && Vt),
          Oq: this.createNodeSkeletonAnimationScript(null !== Ot && void 0 !== Ot ? Ot : null)
        }
      }
      createLoopMode(tt) {
        switch (tt) {
          case !1:
            return Ot.k.NoLoop;
          case !0:
            return Ot.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Ot.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${tt}`)
      }
      createNodeSkeletonAnimationScript(tt) {
        if (null === tt) return null;
        const et = {};
        for (const Vt in tt) {
          const Ot = tt[Vt];
          et[Vt] = this.createNodeAnimationScript(Ot)
        }
        return et
      }
      createNodeAnimationScript(tt) {
        const {
          timeline: et
        } = tt, Vt = et.filter((tt => Number.isFinite(tt.timeFraction)));
        return Vt.sort(((tt, et) => tt.timeFraction - et.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Vt, "rotation", Et),
          position: this.createTimelineFromKeyframes(Vt, "position", wt),
          scale: this.createTimelineFromKeyframes(Vt, "scale", wt, Nt)
        }
      }
      createTimelineFromKeyframes(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt => tt;
        const qt = [];
        for (const Ht of tt) {
          const tt = Ht[et];
          if (tt) {
            const et = this.createAnimationFrameWithoutPrecomputes(Ht.timeFraction, tt, Ot);
            Qt(et) && qt.push(et)
          }
        }
        const Dt = [];
        for (let Ht = 0; Ht < qt.length; Ht++) {
          var mt, dt, jt;
          const tt = qt[Ht],
            et = null !== (mt = qt[Ht - 1]) && void 0 !== mt ? mt : tt,
            Ot = null !== (dt = qt[Ht + 1]) && void 0 !== dt ? dt : tt,
            Xt = null !== (jt = qt[Ht + 2]) && void 0 !== jt ? jt : Ot;
          Dt.push({
            ...tt,
            ...Vt(et.post, et.timeFraction, tt.post, tt.timeFraction, Ot.pre, Ot.timeFraction, Xt.pre, Xt.timeFraction)
          })
        }
        return Dt
      }
      createAnimationFrameWithoutPrecomputes(tt, et, Vt) {
        let Ot, qt, Dt = null;
        var mt;
        if ("object" === typeof et && "point" in et) Dt = null !== (mt = et.mq) && void 0 !== mt ? mt : null, Ot = et.point, qt = et.point;
        else if ("object" === typeof et && "pre" in et) {
          var dt;
          Dt = null !== (dt = et.mq) && void 0 !== dt ? dt : null, Ot = et.pre, qt = et.post
        } else Ot = et, qt = et;
        return {
          timeFraction: tt,
          mq: this.createLerpMode(Dt),
          pre: Vt(Ot),
          post: Vt(qt)
        }
      }
      createLerpMode(tt) {
        return null === tt ? Ot.i.Linear : Ht.LERP_MODE_SCHEMA_MAPPING[tt]
      }
    }
    Ht.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ot.i.Linear,
      "catmull-rom-spline": Ot.i.CatmullRomSpline
    };
    class Xt {
      constructor(tt) {
        this.animationSchema = tt
      }
      createAnimationScript() {
        const {
          animation_length: tt,
          loop: et,
          bones: Vt
        } = this.animationSchema;
        return {
          eq: Math.round(1e3 * tt),
          Vq: this.createLoopMode(null !== et && void 0 !== et && et),
          Oq: this.createNodeSkeletonAnimationScript(null !== Vt && void 0 !== Vt ? Vt : null)
        }
      }
      createLoopMode(tt) {
        switch (tt) {
          case !1:
            return Ot.k.NoLoop;
          case !0:
            return Ot.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Ot.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${tt}`)
      }
      createNodeSkeletonAnimationScript(tt) {
        if (null === tt) return null;
        const et = {};
        for (const Vt in tt) {
          const Ot = tt[Vt];
          et[Vt] = this.createNodeAnimationScript(Ot)
        }
        return et
      }
      createNodeAnimationScript(tt) {
        const {
          rotation: et,
          position: Vt,
          scale: Ot
        } = tt;
        return {
          rotation: this.createAnimationTimeline(null !== et && void 0 !== et ? et : null, bt, Et, !0),
          position: this.createAnimationTimeline(null !== Vt && void 0 !== Vt ? Vt : null, Ct, wt, !1),
          scale: this.createAnimationTimeline(null !== Ot && void 0 !== Ot ? Ot : null, yt, wt, !1)
        }
      }
      createAnimationTimeline(tt, et, Vt, Ot) {
        if (null === tt) return [];
        (Array.isArray(tt) || "number" === typeof tt) && (tt = {
          "0.0": tt
        });
        const qt = Object.entries(tt).map((tt => {
          let [Vt, Ot] = tt;
          const qt = Number(Vt) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(qt, Ot, et)
        })).filter(Qt);
        qt.sort(((tt, et) => tt.timeFraction - et.timeFraction)), Ot && function(tt) {
          for (let et = 1; et < tt.length; et++) {
            const Vt = tt[et - 1].post,
              Ot = tt[et],
              qt = ut(Ot.pre),
              Dt = ut(Ot.post),
              mt = ht(Vt, Ot.pre);
            ht(Vt, qt) < mt && (tt[et] = {
              ...Ot,
              pre: qt,
              post: Dt
            })
          }
        }(qt);
        const Dt = [];
        for (let Ht = 0; Ht < qt.length; Ht++) {
          var mt, dt, jt;
          const tt = qt[Ht],
            et = null !== (mt = qt[Ht - 1]) && void 0 !== mt ? mt : tt,
            Ot = null !== (dt = qt[Ht + 1]) && void 0 !== dt ? dt : tt,
            Xt = null !== (jt = qt[Ht + 2]) && void 0 !== jt ? jt : Ot;
          Dt.push({
            ...tt,
            ...Vt(et.post, et.timeFraction, tt.post, tt.timeFraction, Ot.pre, Ot.timeFraction, Xt.pre, Xt.timeFraction)
          })
        }
        return Dt
      }
      createAnimationFrameWithoutPrecomputes(tt, et, Vt) {
        let Ot, qt, Dt = null;
        if ("object" === typeof et && "post" in et) {
          var mt;
          Dt = null !== (mt = et.lerp_mode) && void 0 !== mt ? mt : null, qt = Vt(et.post), Ot = void 0 !== et.pre ? Vt(et.pre) : qt
        } else {
          const tt = Vt(et);
          qt = tt, Ot = tt
        }
        return {
          timeFraction: tt,
          mq: this.createLerpMode(Dt),
          pre: Ot,
          post: qt
        }
      }
      createLerpMode(tt) {
        return null === tt ? Ot.i.Linear : Xt.LERP_MODE_SCHEMA_MAPPING[tt]
      }
    }

    function Qt(tt) {
      return Number.isFinite(tt.timeFraction) && lt(tt.pre) && lt(tt.post)
    }

    function lt(tt) {
      return Number.isFinite(tt[0]) && Number.isFinite(tt[1]) && Number.isFinite(tt[2])
    }

    function Et(tt, et, Vt, Ot, qt, Dt, mt, dt) {
      const jt = Dt - et,
        Ht = Dt - Ot,
        Xt = dt - Ot,
        Qt = [null, null, null];
      for (let lt = 0; lt < Qt.length; lt++) Qt[lt] = ft(tt[lt], Vt[lt], qt[lt], mt[lt], jt, Xt);
      return {
        dq: Ht,
        jq: Qt
      }
    }

    function ft(tt, et, Vt, Ot, Dt, mt) {
      return {
        Xq: qt.e.computeShortestRotation(tt, Vt) / Dt,
        Qq: qt.e.computeShortestRotation(et, Ot) / mt,
        delta: qt.e.computeShortestRotation(et, Vt)
      }
    }

    function wt(tt, et, Vt, Ot, qt, Dt, mt, dt) {
      const jt = Dt - et,
        Ht = Dt - Ot,
        Xt = dt - Ot,
        Qt = [null, null, null];
      for (let lt = 0; lt < Qt.length; lt++) Qt[lt] = {
        Xq: (qt[lt] - tt[lt]) / jt,
        Qq: (mt[lt] - Vt[lt]) / Xt,
        delta: qt[lt] - Vt[lt]
      };
      return {
        dq: Ht,
        jq: Qt
      }
    }

    function yt(tt) {
      return Nt("number" === typeof tt ? [tt, tt, tt] : tt)
    }

    function Nt(tt) {
      return [Mt(tt[0]), Mt(tt[1]), Mt(tt[2])]
    }

    function Mt(tt) {
      return Number.isFinite(tt) ? Math.min(mt.j, Math.max(-mt.j, tt)) : tt
    }

    function bt(tt) {
      const [et, Vt, Ot] = tt, mt = -(0, Dt.l)(et), dt = -(0, Dt.l)(Vt), jt = (0, Dt.l)(Ot), Ht = qt.e.quaternionFromEulerZYX(mt, dt, jt);
      return qt.e.eulerYXZFromQuaternion(Ht)
    }
    Xt.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ot.i.Linear,
      catmullrom: Ot.i.CatmullRomSpline
    };
    const Jt = 1 / 16;

    function Ct(tt) {
      return [-tt[0] * Jt, tt[1] * Jt, tt[2] * Jt]
    }

    function ut(tt) {
      const [et, Vt, Ot] = tt;
      return [et >= 0 ? Math.PI - et : -Math.PI - et, Kt(Vt + Math.PI), Kt(Ot + Math.PI)]
    }

    function Kt(tt) {
      return qt.e.mod(tt + Math.PI, 2 * Math.PI) - Math.PI
    }

    function ht(tt, et) {
      return Math.abs(qt.e.computeShortestRotation(tt[0], et[0])) + Math.abs(qt.e.computeShortestRotation(tt[1], et[1])) + Math.abs(qt.e.computeShortestRotation(tt[2], et[2]))
    }
    const vt = new Ht
  },
  37398: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      g: () => Dt,
      i: () => Ot,
      k: () => qt
    });
    let Ot = function(tt) {
        return tt[tt.Linear = 0] = "Linear", tt[tt.CatmullRomSpline = 1] = "CatmullRomSpline", tt
      }({}),
      qt = function(tt) {
        return tt[tt.NoLoop = 0] = "NoLoop", tt[tt.LoopOnLastFrame = 1] = "LoopOnLastFrame", tt[tt.HoldOnLastFrame = 2] = "HoldOnLastFrame", tt
      }({}),
      Dt = function(tt) {
        return tt[tt.Movement = 0] = "Movement", tt[tt.Action = 1] = "Action", tt[tt.Emote = 2] = "Emote", tt[tt.Custom = 3] = "Custom", tt
      }({}),
      mt = function(tt) {
        return tt[tt.Start = 0] = "Start", tt[tt.Stop = 1] = "Stop", tt
      }({})
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);