export const id = 239;
export const ids = [239];
export const modules = {
  37399: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      e: () => Sp,
      f: () => op
    });
    const Op = 1024,
      op = 16,
      Ip = 36e4;
    class Sp {
      constructor(pp) {
        this.boneCount = pp, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * pp), this.position = new Float64Array(3 * pp), this.scale = new Float64Array(3 * pp).fill(1), this.touched = new Uint8Array(pp)
      }
      clampToLimits() {
        for (let pp = 0; pp < this.boneCount; pp++)
          if (0 !== this.touched[pp])
            for (let ip = 3 * pp; ip < 3 * pp + 3; ip++) {
              const pp = this.rotation[ip],
                cp = this.position[ip],
                Sp = this.scale[ip];
              pp >= -36e4 && pp <= Ip || (this.rotation[ip] = Lp(pp, Ip)), cp >= -1024 && cp <= Op || (this.position[ip] = Lp(cp, Op)), Sp >= -op && Sp <= op || (this.scale[ip] = Lp(Sp, op, 1))
            }
      }
      reset() {
        for (let pp = 0; pp < this.boneCount; pp++)
          if (0 !== this.touched[pp]) {
            this.touched[pp] = 0;
            for (let ip = 3 * pp; ip < 3 * pp + 3; ip++) this.rotation[ip] = 0, this.position[ip] = 0, this.scale[ip] = 1
          }
      }
    }
    class xp {
      constructor(pp) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * pp), this.position = new Float64Array(3 * pp), this.scaleDelta = new Float64Array(3 * pp), this.boneWeight = new Float64Array(pp), this.touched = new Uint8Array(pp), this.overrides = new Uint8Array(pp), this.touchedBones = new Int32Array(pp)
      }
      touch(pp, ip, cp) {
        0 === this.touched[pp] && (this.touched[pp] = 1, this.touchedBones[this.touchedCount++] = pp), this.boneWeight[pp] += ip, cp && (this.overrides[pp] = 1)
      }
      applyTo(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let op = 0; op < this.touchedCount; op++) {
          const Ip = this.touchedBones[op],
            Sp = this.boneWeight[Ip];
          if (cp || 1 === this.overrides[Ip]) {
            const cp = ip * Math.min(1, Sp);
            for (let ip = 3 * Ip; ip < 3 * Ip + 3; ip++) pp.rotation[ip] += (this.rotation[ip] / Sp - pp.rotation[ip]) * cp, pp.position[ip] += (this.position[ip] / Sp - pp.position[ip]) * cp, pp.scale[ip] += (1 + this.scaleDelta[ip] / Sp - pp.scale[ip]) * cp
          } else {
            const cp = Op && Sp > 1 ? ip / Sp : ip;
            for (let ip = 3 * Ip; ip < 3 * Ip + 3; ip++) pp.rotation[ip] += this.rotation[ip] * cp, pp.position[ip] += this.position[ip] * cp, pp.scale[ip] *= 1 + this.scaleDelta[ip] * cp
          }
          pp.touched[Ip] = 1
        }
      }
      clear() {
        for (let pp = 0; pp < this.touchedCount; pp++) {
          const ip = this.touchedBones[pp];
          this.touched[ip] = 0, this.overrides[ip] = 0, this.boneWeight[ip] = 0;
          for (let pp = 3 * ip; pp < 3 * ip + 3; pp++) this.rotation[pp] = 0, this.position[pp] = 0, this.scaleDelta[pp] = 0
        }
        this.touchedCount = 0
      }
    }

    function Lp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(pp) ? cp : Math.min(ip, Math.max(-ip, pp))
    }
  },
  37395: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      d: () => xp
    });
    var Op = cp(37385),
      op = cp(337),
      Ip = cp(1927),
      Sp = cp(37399);

    function xp(pp) {
      if ("Lo" in pp) return Rp.createAnimationScript(pp);
      return new Dp(pp).createAnimationScript()
    }

    function Lp(pp, ip, cp, op) {
      const Ip = pp.Lo <= 0 ? 1 : ip + cp * Math.max(0, op) / pp.Lo;
      return pp.Yo === Op.j.LoopOnLastFrame ? Ip % 1 : pp.Yo === Op.j.NoLoop && Ip >= 1 ? null : Math.min(1, Ip)
    }
    class Yp {
      createAnimationScript(pp) {
        const {
          Lo: ip,
          loop: cp,
          Do: Op
        } = pp;
        return {
          Lo: Math.round(ip),
          Yo: this.createLoopMode(null !== cp && void 0 !== cp && cp),
          Do: this.createNodeSkeletonAnimationScript(null !== Op && void 0 !== Op ? Op : null)
        }
      }
      createLoopMode(pp) {
        switch (pp) {
          case !1:
            return Op.j.NoLoop;
          case !0:
            return Op.j.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Op.j.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${pp}`)
      }
      createNodeSkeletonAnimationScript(pp) {
        if (null === pp) return null;
        const ip = {};
        for (const cp in pp) {
          const Op = pp[cp];
          ip[cp] = this.createNodeAnimationScript(Op)
        }
        return ip
      }
      createNodeAnimationScript(pp) {
        const {
          timeline: ip
        } = pp, cp = ip.filter((pp => Number.isFinite(pp.timeFraction)));
        return cp.sort(((pp, ip) => pp.timeFraction - ip.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(cp, "rotation", Wp),
          position: this.createTimelineFromKeyframes(cp, "position", Up),
          scale: this.createTimelineFromKeyframes(cp, "scale", Up, vp)
        }
      }
      createTimelineFromKeyframes(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp => pp;
        const op = [];
        for (const Yp of pp) {
          const pp = Yp[ip];
          if (pp) {
            const ip = this.createAnimationFrameWithoutPrecomputes(Yp.timeFraction, pp, Op);
            Ap(ip) && op.push(ip)
          }
        }
        const Ip = [];
        for (let Yp = 0; Yp < op.length; Yp++) {
          var Sp, xp, Lp;
          const pp = op[Yp],
            ip = null !== (Sp = op[Yp - 1]) && void 0 !== Sp ? Sp : pp,
            Op = null !== (xp = op[Yp + 1]) && void 0 !== xp ? xp : pp,
            Dp = null !== (Lp = op[Yp + 2]) && void 0 !== Lp ? Lp : Op;
          Ip.push({
            ...pp,
            ...cp(ip.post, ip.timeFraction, pp.post, pp.timeFraction, Op.pre, Op.timeFraction, Dp.pre, Dp.timeFraction)
          })
        }
        return Ip
      }
      createAnimationFrameWithoutPrecomputes(pp, ip, cp) {
        let Op, op, Ip = null;
        var Sp;
        if ("object" === typeof ip && "point" in ip) Ip = null !== (Sp = ip.Wo) && void 0 !== Sp ? Sp : null, Op = ip.point, op = ip.point;
        else if ("object" === typeof ip && "pre" in ip) {
          var xp;
          Ip = null !== (xp = ip.Wo) && void 0 !== xp ? xp : null, Op = ip.pre, op = ip.post
        } else Op = ip, op = ip;
        return {
          timeFraction: pp,
          Wo: this.createLerpMode(Ip),
          pre: cp(Op),
          post: cp(op)
        }
      }
      createLerpMode(pp) {
        return null === pp ? Op.f.Linear : Yp.LERP_MODE_SCHEMA_MAPPING[pp]
      }
    }
    Yp.LERP_MODE_SCHEMA_MAPPING = {
      linear: Op.f.Linear,
      "catmull-rom-spline": Op.f.CatmullRomSpline
    };
    class Dp {
      constructor(pp) {
        this.animationSchema = pp
      }
      createAnimationScript() {
        const {
          animation_length: pp,
          loop: ip,
          bones: cp
        } = this.animationSchema;
        return {
          Lo: Math.round(1e3 * pp),
          Yo: this.createLoopMode(null !== ip && void 0 !== ip && ip),
          Do: this.createNodeSkeletonAnimationScript(null !== cp && void 0 !== cp ? cp : null)
        }
      }
      createLoopMode(pp) {
        switch (pp) {
          case !1:
            return Op.j.NoLoop;
          case !0:
            return Op.j.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Op.j.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${pp}`)
      }
      createNodeSkeletonAnimationScript(pp) {
        if (null === pp) return null;
        const ip = {};
        for (const cp in pp) {
          const Op = pp[cp];
          ip[cp] = this.createNodeAnimationScript(Op)
        }
        return ip
      }
      createNodeAnimationScript(pp) {
        const {
          rotation: ip,
          position: cp,
          scale: Op
        } = pp;
        return {
          rotation: this.createAnimationTimeline(null !== ip && void 0 !== ip ? ip : null, Hp, Wp, !0),
          position: this.createAnimationTimeline(null !== cp && void 0 !== cp ? cp : null, ep, Up, !1),
          scale: this.createAnimationTimeline(null !== Op && void 0 !== Op ? Op : null, wp, Up, !1)
        }
      }
      createAnimationTimeline(pp, ip, cp, Op) {
        if (null === pp) return [];
        (Array.isArray(pp) || "number" === typeof pp) && (pp = {
          "0.0": pp
        });
        const op = Object.entries(pp).map((pp => {
          let [cp, Op] = pp;
          const op = Number(cp) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(op, Op, ip)
        })).filter(Ap);
        op.sort(((pp, ip) => pp.timeFraction - ip.timeFraction)), Op && function(pp) {
          for (let ip = 1; ip < pp.length; ip++) {
            const cp = pp[ip - 1].post,
              Op = pp[ip],
              op = jp(Op.pre),
              Ip = jp(Op.post),
              Sp = mp(cp, Op.pre);
            mp(cp, op) < Sp && (pp[ip] = {
              ...Op,
              pre: op,
              post: Ip
            })
          }
        }(op);
        const Ip = [];
        for (let Yp = 0; Yp < op.length; Yp++) {
          var Sp, xp, Lp;
          const pp = op[Yp],
            ip = null !== (Sp = op[Yp - 1]) && void 0 !== Sp ? Sp : pp,
            Op = null !== (xp = op[Yp + 1]) && void 0 !== xp ? xp : pp,
            Dp = null !== (Lp = op[Yp + 2]) && void 0 !== Lp ? Lp : Op;
          Ip.push({
            ...pp,
            ...cp(ip.post, ip.timeFraction, pp.post, pp.timeFraction, Op.pre, Op.timeFraction, Dp.pre, Dp.timeFraction)
          })
        }
        return Ip
      }
      createAnimationFrameWithoutPrecomputes(pp, ip, cp) {
        let Op, op, Ip = null;
        if ("object" === typeof ip && "post" in ip) {
          var Sp;
          Ip = null !== (Sp = ip.lerp_mode) && void 0 !== Sp ? Sp : null, op = cp(ip.post), Op = void 0 !== ip.pre ? cp(ip.pre) : op
        } else {
          const pp = cp(ip);
          op = pp, Op = pp
        }
        return {
          timeFraction: pp,
          Wo: this.createLerpMode(Ip),
          pre: Op,
          post: op
        }
      }
      createLerpMode(pp) {
        return null === pp ? Op.f.Linear : Dp.LERP_MODE_SCHEMA_MAPPING[pp]
      }
    }

    function Ap(pp) {
      return Number.isFinite(pp.timeFraction) && Pp(pp.pre) && Pp(pp.post)
    }

    function Pp(pp) {
      return Number.isFinite(pp[0]) && Number.isFinite(pp[1]) && Number.isFinite(pp[2])
    }

    function Wp(pp, ip, cp, Op, op, Ip, Sp, xp) {
      const Lp = Ip - ip,
        Yp = Ip - Op,
        Dp = xp - Op,
        Ap = [null, null, null];
      for (let Pp = 0; Pp < Ap.length; Pp++) Ap[Pp] = yp(pp[Pp], cp[Pp], op[Pp], Sp[Pp], Lp, Dp);
      return {
        yo: Yp,
        Uo: Ap
      }
    }

    function yp(pp, ip, cp, Op, Ip, Sp) {
      return {
        vo: op.d.computeShortestRotation(pp, cp) / Ip,
        Ho: op.d.computeShortestRotation(ip, Op) / Sp,
        delta: op.d.computeShortestRotation(ip, cp)
      }
    }

    function Up(pp, ip, cp, Op, op, Ip, Sp, xp) {
      const Lp = Ip - ip,
        Yp = Ip - Op,
        Dp = xp - Op,
        Ap = [null, null, null];
      for (let Pp = 0; Pp < Ap.length; Pp++) Ap[Pp] = {
        vo: (op[Pp] - pp[Pp]) / Lp,
        Ho: (Sp[Pp] - cp[Pp]) / Dp,
        delta: op[Pp] - cp[Pp]
      };
      return {
        yo: Yp,
        Uo: Ap
      }
    }

    function wp(pp) {
      return vp("number" === typeof pp ? [pp, pp, pp] : pp)
    }

    function vp(pp) {
      return [tp(pp[0]), tp(pp[1]), tp(pp[2])]
    }

    function tp(pp) {
      return Number.isFinite(pp) ? Math.min(Sp.f, Math.max(-Sp.f, pp)) : pp
    }

    function Hp(pp) {
      const [ip, cp, Op] = pp, Sp = -(0, Ip.o)(ip), xp = -(0, Ip.o)(cp), Lp = (0, Ip.o)(Op), Yp = op.d.quaternionFromEulerZYX(Sp, xp, Lp);
      return op.d.eulerYXZFromQuaternion(Yp)
    }
    Dp.LERP_MODE_SCHEMA_MAPPING = {
      linear: Op.f.Linear,
      catmullrom: Op.f.CatmullRomSpline
    };
    const dp = 1 / 16;

    function ep(pp) {
      return [-pp[0] * dp, pp[1] * dp, pp[2] * dp]
    }

    function jp(pp) {
      const [ip, cp, Op] = pp;
      return [ip >= 0 ? Math.PI - ip : -Math.PI - ip, kp(cp + Math.PI), kp(Op + Math.PI)]
    }

    function kp(pp) {
      return op.d.mod(pp + Math.PI, 2 * Math.PI) - Math.PI
    }

    function mp(pp, ip) {
      return Math.abs(op.d.computeShortestRotation(pp[0], ip[0])) + Math.abs(op.d.computeShortestRotation(pp[1], ip[1])) + Math.abs(op.d.computeShortestRotation(pp[2], ip[2]))
    }
    const Rp = new Yp
  },
  37385: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      e: () => Ip,
      f: () => Op,
      j: () => op
    });
    let Op = function(pp) {
        return pp[pp.Linear = 0] = "Linear", pp[pp.CatmullRomSpline = 1] = "CatmullRomSpline", pp
      }({}),
      op = function(pp) {
        return pp[pp.NoLoop = 0] = "NoLoop", pp[pp.LoopOnLastFrame = 1] = "LoopOnLastFrame", pp[pp.HoldOnLastFrame = 2] = "HoldOnLastFrame", pp
      }({}),
      Ip = function(pp) {
        return pp[pp.Movement = 0] = "Movement", pp[pp.Action = 1] = "Action", pp[pp.Emote = 2] = "Emote", pp[pp.Custom = 3] = "Custom", pp
      }({}),
      Sp = function(pp) {
        return pp[pp.Start = 0] = "Start", pp[pp.Stop = 1] = "Stop", pp
      }({})
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);