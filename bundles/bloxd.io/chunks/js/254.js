export const id = 254;
export const ids = [254];
export const modules = {
  39602: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv, Pv) {
        this.bu = vv, this.bv = zv, this.distance = Pv, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39611: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(36602),
      Sv = Pv(36594),
      ev = Pv(36599);
    class gv {
      constructor(vv, zv, Pv) {
        this.vectors = (0, hv.e)(8, Sv.l.Zero), this.center = Sv.l.Zero(), this.centerWorld = Sv.l.Zero(), this.extendSize = Sv.l.Zero(), this.extendSizeWorld = Sv.l.Zero(), this.directions = (0, hv.e)(3, Sv.l.Zero), this.vectorsWorld = (0, hv.e)(8, Sv.l.Zero), this.minimumWorld = Sv.l.Zero(), this.maximumWorld = Sv.l.Zero(), this.minimum = Sv.l.Zero(), this.maximum = Sv.l.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(vv, zv, Pv)
      }
      reConstruct(vv, zv, Pv) {
        const hv = vv.x,
          ev = vv.y,
          gv = vv.z,
          pv = zv.x,
          dv = zv.y,
          Nv = zv.z,
          lv = this.vectors;
        this.minimum.f_(hv, ev, gv), this.maximum.f_(pv, dv, Nv), lv[0].f_(hv, ev, gv), lv[1].f_(pv, dv, Nv), lv[2].f_(pv, ev, gv), lv[3].f_(hv, dv, gv), lv[4].f_(hv, ev, Nv), lv[5].f_(pv, dv, gv), lv[6].f_(hv, dv, Nv), lv[7].f_(pv, ev, Nv), zv.addToRef(vv, this.center).scaleInPlace(.5), zv.subtractToRef(vv, this.extendSize).scaleInPlace(.5), this._worldMatrix = Pv || Sv.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(vv) {
        const zv = gv._TmpVector3,
          Pv = this.maximum.subtractToRef(this.minimum, zv[0]),
          hv = Pv.length();
        Pv.normalizeFromLength(hv);
        const Sv = hv * vv,
          ev = Pv.scaleInPlace(.5 * Sv),
          pv = this.center.subtractToRef(ev, zv[1]),
          dv = this.center.addToRef(ev, zv[2]);
        return this.reConstruct(pv, dv, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(vv) {
        const zv = this.minimumWorld,
          Pv = this.maximumWorld,
          hv = this.directions,
          ev = this.vectorsWorld,
          gv = this.vectors;
        if (vv.isIdentity()) {
          zv.Vzv(this.minimum), Pv.Vzv(this.maximum);
          for (let vv = 0; vv < 8; ++vv) ev[vv].Vzv(gv[vv]);
          this.extendSizeWorld.Vzv(this.extendSize), this.centerWorld.Vzv(this.center)
        } else {
          zv.Dk(Number.MAX_VALUE), Pv.Dk(-Number.MAX_VALUE);
          for (let hv = 0; hv < 8; ++hv) {
            const pv = ev[hv];
            Sv.l.TransformCoordinatesToRef(gv[hv], vv, pv), zv.minimizeInPlace(pv), Pv.maximizeInPlace(pv)
          }
          Pv.subtractToRef(zv, this.extendSizeWorld).scaleInPlace(.5), Pv.addToRef(zv, this.centerWorld).scaleInPlace(.5)
        }
        Sv.l.FromArrayToRef(vv.m, 0, hv[0]), Sv.l.FromArrayToRef(vv.m, 4, hv[1]), Sv.l.FromArrayToRef(vv.m, 8, hv[2]), this._worldMatrix = vv
      }
      isInFrustum(vv) {
        return gv.IsInFrustum(this.vectorsWorld, vv)
      }
      isCompletelyInFrustum(vv) {
        return gv.IsCompletelyInFrustum(this.vectorsWorld, vv)
      }
      intersectsPoint(vv) {
        const zv = this.minimumWorld,
          Pv = this.maximumWorld,
          hv = zv.x,
          Sv = zv.y,
          gv = zv.z,
          pv = Pv.x,
          dv = Pv.y,
          Nv = Pv.z,
          lv = vv.x,
          Tv = vv.y,
          Wv = vv.z,
          wv = -ev.e;
        return !(pv - lv < wv || wv > lv - hv) && (!(dv - Tv < wv || wv > Tv - Sv) && !(Nv - Wv < wv || wv > Wv - gv))
      }
      intersectsSphere(vv) {
        return gv.IntersectsSphere(this.minimumWorld, this.maximumWorld, vv.centerWorld, vv.radiusWorld)
      }
      intersectsMinMax(vv, zv) {
        const Pv = this.minimumWorld,
          hv = this.maximumWorld,
          Sv = Pv.x,
          ev = Pv.y,
          gv = Pv.z,
          pv = hv.x,
          dv = hv.y,
          Nv = hv.z,
          lv = vv.x,
          Tv = vv.y,
          Wv = vv.z,
          wv = zv.x,
          av = zv.y,
          sv = zv.z;
        return !(pv < lv || Sv > wv) && (!(dv < Tv || ev > av) && !(Nv < Wv || gv > sv))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(vv, zv) {
        return vv.intersectsMinMax(zv.minimumWorld, zv.maximumWorld)
      }
      static IntersectsSphere(vv, zv, Pv, hv) {
        const ev = gv._TmpVector3[0];
        Sv.l.ClampToRef(Pv, vv, zv, ev);
        return Sv.l.DistanceSquared(Pv, ev) <= hv * hv
      }
      static IsCompletelyInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; ++Pv) {
          const hv = zv[Pv];
          for (let zv = 0; zv < 8; ++zv)
            if (hv.dotCoordinate(vv[zv]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; ++Pv) {
          let hv = !0;
          const Sv = zv[Pv];
          for (let zv = 0; zv < 8; ++zv)
            if (Sv.dotCoordinate(vv[zv]) >= 0) {
              hv = !1;
              break
            } if (hv) return !1
        }
        return !0
      }
    }
    gv._TmpVector3 = (0, hv.e)(3, Sv.l.Zero)
  },
  39609: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Tv
    });
    var hv = Pv(36602),
      Sv = Pv(36594),
      ev = Pv(39611);
    class gv {
      constructor(vv, zv, Pv) {
        this.center = Sv.l.Zero(), this.centerWorld = Sv.l.Zero(), this.minimum = Sv.l.Zero(), this.maximum = Sv.l.Zero(), this.reConstruct(vv, zv, Pv)
      }
      reConstruct(vv, zv, Pv) {
        this.minimum.Vzv(vv), this.maximum.Vzv(zv);
        const hv = Sv.l.Distance(vv, zv);
        zv.addToRef(vv, this.center).scaleInPlace(.5), this.radius = .5 * hv, this._update(Pv || Sv.c.IdentityReadOnly)
      }
      scale(vv) {
        const zv = gv._TmpVector3,
          Pv = this.maximum.subtractToRef(this.minimum, zv[0]),
          hv = Pv.length();
        Pv.normalizeFromLength(hv);
        const Sv = hv * vv,
          ev = Pv.scaleInPlace(.5 * Sv),
          pv = this.center.subtractToRef(ev, zv[1]),
          dv = this.center.addToRef(ev, zv[2]);
        return this.reConstruct(pv, dv, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(vv) {
        if (vv.isIdentity()) this.centerWorld.Vzv(this.center), this.radiusWorld = this.radius;
        else {
          Sv.l.TransformCoordinatesToRef(this.center, vv, this.centerWorld);
          const zv = gv._TmpVector3[0];
          Sv.l.TransformNormalFromFloatsToRef(1, 1, 1, vv, zv), this.radiusWorld = Math.max(Math.abs(zv.x), Math.abs(zv.y), Math.abs(zv.z)) * this.radius
        }
      }
      isInFrustum(vv) {
        const zv = this.centerWorld,
          Pv = this.radiusWorld;
        for (let hv = 0; hv < 6; hv++)
          if (vv[hv].dotCoordinate(zv) <= -Pv) return !1;
        return !0
      }
      isCenterInFrustum(vv) {
        const zv = this.centerWorld;
        for (let Pv = 0; Pv < 6; Pv++)
          if (vv[Pv].dotCoordinate(zv) < 0) return !1;
        return !0
      }
      intersectsPoint(vv) {
        const zv = Sv.l.DistanceSquared(this.centerWorld, vv);
        return !(this.radiusWorld * this.radiusWorld < zv)
      }
      static Intersects(vv, zv) {
        const Pv = Sv.l.DistanceSquared(vv.centerWorld, zv.centerWorld),
          hv = vv.radiusWorld + zv.radiusWorld;
        return !(hv * hv < Pv)
      }
      static CreateFromCenterAndRadius(vv, zv, Pv) {
        this._TmpVector3[0].Vzv(vv), this._TmpVector3[1].f_(0, 0, zv), this._TmpVector3[2].Vzv(vv), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].VPv(this._TmpVector3[1]);
        const hv = new gv(this._TmpVector3[0], this._TmpVector3[2]);
        return hv._worldMatrix = Pv || Sv.c.Identity(), hv
      }
    }
    gv._TmpVector3 = (0, hv.e)(3, Sv.l.Zero);
    const pv = {
        min: 0,
        max: 0
      },
      dv = {
        min: 0,
        max: 0
      },
      Nv = (vv, zv, Pv) => {
        const hv = Sv.l.Dot(zv.centerWorld, vv),
          ev = Math.abs(Sv.l.Dot(zv.directions[0], vv)) * zv.extendSize.x + Math.abs(Sv.l.Dot(zv.directions[1], vv)) * zv.extendSize.y + Math.abs(Sv.l.Dot(zv.directions[2], vv)) * zv.extendSize.z;
        Pv.min = hv - ev, Pv.max = hv + ev
      },
      lv = (vv, zv, Pv) => (Nv(vv, zv, pv), Nv(vv, Pv, dv), !(pv.min > dv.max || dv.min > pv.max));
    class Tv {
      constructor(vv, zv, Pv) {
        this._isLocked = !1, this.boundingBox = new ev.c(vv, zv, Pv), this.tPv = new gv(vv, zv, Pv)
      }
      reConstruct(vv, zv, Pv) {
        this.boundingBox.reConstruct(vv, zv, Pv), this.tPv.reConstruct(vv, zv, Pv)
      }
      get minimum() {
        return this.boundingBox.minimum
      }
      get maximum() {
        return this.boundingBox.maximum
      }
      get isLocked() {
        return this._isLocked
      }
      set isLocked(vv) {
        this._isLocked = vv
      }
      update(vv) {
        this._isLocked || (this.boundingBox._update(vv), this.tPv._update(vv))
      }
      centerOn(vv, zv) {
        const Pv = Tv._TmpVector3[0].Vzv(vv).VPv(zv),
          hv = Tv._TmpVector3[1].Vzv(vv).addInPlace(zv);
        return this.boundingBox.reConstruct(Pv, hv, this.boundingBox.getWorldMatrix()), this.tPv.reConstruct(Pv, hv, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(vv) {
        const zv = Sv.l.Minimize(this.minimum, vv),
          Pv = Sv.l.Maximize(this.maximum, vv);
        return this.reConstruct(zv, Pv, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(vv) {
        const zv = Sv.i.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(zv);
        const Pv = Sv.i.fa[0];
        return Sv.l.TransformCoordinatesToRef(vv.boundingBox.minimumWorld, zv, Pv), this.encapsulate(Pv), Sv.l.TransformCoordinatesToRef(vv.boundingBox.maximumWorld, zv, Pv), this.encapsulate(Pv), this
      }
      scale(vv) {
        return this.boundingBox.scale(vv), this.tPv.scale(vv), this
      }
      isInFrustum(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === zv || 3 === zv) && this.tPv.isCenterInFrustum(vv)) return !0;
        if (!this.tPv.isInFrustum(vv)) return !1;
        return !(1 !== zv && 3 !== zv) || this.boundingBox.isInFrustum(vv)
      }
      get diagonalLength() {
        const vv = this.boundingBox;
        return vv.maximumWorld.subtractToRef(vv.minimumWorld, Tv._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(vv) {
        return this.boundingBox.isCompletelyInFrustum(vv)
      }
      _checkCollision(vv) {
        return vv._canDoCollision(this.tPv.centerWorld, this.tPv.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(vv) {
        return !!this.tPv.centerWorld && (!!this.tPv.intersectsPoint(vv) && !!this.boundingBox.intersectsPoint(vv))
      }
      intersects(vv, zv) {
        if (!gv.Intersects(this.tPv, vv.tPv)) return !1;
        if (!ev.c.Intersects(this.boundingBox, vv.boundingBox)) return !1;
        if (!zv) return !0;
        const Pv = this.boundingBox,
          hv = vv.boundingBox;
        return !!lv(Pv.directions[0], Pv, hv) && (!!lv(Pv.directions[1], Pv, hv) && (!!lv(Pv.directions[2], Pv, hv) && (!!lv(hv.directions[0], Pv, hv) && (!!lv(hv.directions[1], Pv, hv) && (!!lv(hv.directions[2], Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[0], hv.directions[0]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[0], hv.directions[1]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[0], hv.directions[2]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[1], hv.directions[0]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[1], hv.directions[1]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[1], hv.directions[2]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[2], hv.directions[0]), Pv, hv) && (!!lv(Sv.l.Cross(Pv.directions[2], hv.directions[1]), Pv, hv) && !!lv(Sv.l.Cross(Pv.directions[2], hv.directions[2]), Pv, hv))))))))))))))
      }
    }
    Tv._TmpVector3 = (0, hv.e)(2, Sv.l.Zero)
  },
  39636: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => dv,
      i: () => pv,
      m: () => gv
    });
    var hv = Pv(39455),
      Sv = Pv(36594);

    function ev(vv) {
      -1 === vv.indexOf("vClipPlane") && vv.push("vClipPlane"), -1 === vv.indexOf("vClipPlane2") && vv.push("vClipPlane2"), -1 === vv.indexOf("vClipPlane3") && vv.push("vClipPlane3"), -1 === vv.indexOf("vClipPlane4") && vv.push("vClipPlane4"), -1 === vv.indexOf("vClipPlane5") && vv.push("vClipPlane5"), -1 === vv.indexOf("vClipPlane6") && vv.push("vClipPlane6")
    }

    function gv(vv, zv, Pv) {
      const hv = !!(vv.clipPlane ?? zv.clipPlane),
        Sv = !!(vv.clipPlane2 ?? zv.clipPlane2),
        ev = !!(vv.clipPlane3 ?? zv.clipPlane3),
        gv = !!(vv.clipPlane4 ?? zv.clipPlane4),
        pv = !!(vv.clipPlane5 ?? zv.clipPlane5),
        dv = !!(vv.clipPlane6 ?? zv.clipPlane6);
      hv && Pv.push("#define CLIPPLANE"), Sv && Pv.push("#define CLIPPLANE2"), ev && Pv.push("#define CLIPPLANE3"), gv && Pv.push("#define CLIPPLANE4"), pv && Pv.push("#define CLIPPLANE5"), dv && Pv.push("#define CLIPPLANE6")
    }

    function pv(vv, zv, Pv) {
      let hv = !1;
      const Sv = !!(vv.clipPlane ?? zv.clipPlane),
        ev = !!(vv.clipPlane2 ?? zv.clipPlane2),
        gv = !!(vv.clipPlane3 ?? zv.clipPlane3),
        pv = !!(vv.clipPlane4 ?? zv.clipPlane4),
        dv = !!(vv.clipPlane5 ?? zv.clipPlane5),
        Nv = !!(vv.clipPlane6 ?? zv.clipPlane6);
      return Pv.CLIPPLANE !== Sv && (Pv.CLIPPLANE = Sv, hv = !0), Pv.CLIPPLANE2 !== ev && (Pv.CLIPPLANE2 = ev, hv = !0), Pv.CLIPPLANE3 !== gv && (Pv.CLIPPLANE3 = gv, hv = !0), Pv.CLIPPLANE4 !== pv && (Pv.CLIPPLANE4 = pv, hv = !0), Pv.CLIPPLANE5 !== dv && (Pv.CLIPPLANE5 = dv, hv = !0), Pv.CLIPPLANE6 !== Nv && (Pv.CLIPPLANE6 = Nv, hv = !0), hv
    }

    function dv(vv, zv, Pv) {
      let hv = zv.clipPlane ?? Pv.clipPlane;
      Nv(vv, "vClipPlane", hv), hv = zv.clipPlane2 ?? Pv.clipPlane2, Nv(vv, "vClipPlane2", hv), hv = zv.clipPlane3 ?? Pv.clipPlane3, Nv(vv, "vClipPlane3", hv), hv = zv.clipPlane4 ?? Pv.clipPlane4, Nv(vv, "vClipPlane4", hv), hv = zv.clipPlane5 ?? Pv.clipPlane5, Nv(vv, "vClipPlane5", hv), hv = zv.clipPlane6 ?? Pv.clipPlane6, Nv(vv, "vClipPlane6", hv)
    }

    function Nv(vv, zv, Pv) {
      if (Pv) {
        const ev = hv.d.rD()?.floatingOriginOffset || Sv.l.ZeroReadOnly;
        vv.setFloat4(zv, Pv.normal.x, Pv.normal.y, Pv.normal.z, Pv.d + Sv.l.Dot(Pv.normal, ev))
      }
    }
  },
  39656: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(vv, zv) {
        this._defines[vv] || (vv < this._currentRank && (this._currentRank = vv), vv > this._maxRank && (this._maxRank = vv), this._defines[vv] = new Array), this._defines[vv].push(zv)
      }
      addCPUSkinningFallback(vv, zv) {
        this._mesh = zv, vv < this._currentRank && (this._currentRank = vv), vv > this._maxRank && (this._maxRank = vv)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(vv, zv) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, vv = vv.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), zv._bonesComputationForcedToCPU = !0;
          const Pv = this._mesh.rD();
          for (let vv = 0; vv < Pv.meshes.length; vv++) {
            const hv = Pv.meshes[vv];
            if (hv.material) {
              if (hv.computeBonesUsingShaders && 0 !== hv.numBoneInfluencers)
                if (hv.material.getEffect() === zv) hv.computeBonesUsingShaders = !1;
                else if (hv.sF)
                for (const vv of hv.sF) {
                  if (vv.effect === zv) {
                    hv.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && hv.computeBonesUsingShaders && hv.numBoneInfluencers > 0 && (hv.computeBonesUsingShaders = !1)
          }
        } else {
          const zv = this._defines[this._currentRank];
          if (zv)
            for (let Pv = 0; Pv < zv.length; Pv++) vv = vv.replace("#define " + zv[Pv], "");
          this._currentRank++
        }
        return vv
      }
    }
  },
  39593: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => cv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39399),
      gv = Pv(36618),
      pv = Pv(36615),
      dv = Pv(39598),
      Nv = Pv(39435),
      lv = Pv(38209),
      Tv = Pv(37293),
      Wv = Pv(39621),
      wv = Pv(39312);
    let av = (() => {
      var vv;
      let zv, Pv, ev, gv, pv, dv, Nv, lv, Tv, Wv, av, sv, Cv = [];
      return vv = class {
        constructor() {
          this._func = (0, hv.f)(this, Cv), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(vv) {
          this._func = vv
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(vv) {
          this._backFunc = vv
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(vv) {
          this._funcRef = vv
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(vv) {
          this._funcMask = vv
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(vv) {
          this._opStencilFail = vv
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(vv) {
          this._opDepthFail = vv
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(vv) {
          this._opStencilDepthPass = vv
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(vv) {
          this._backOpStencilFail = vv
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(vv) {
          this._backOpDepthFail = vv
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(vv) {
          this._backOpStencilDepthPass = vv
        }
        get mask() {
          return this._mask
        }
        set mask(vv) {
          this._mask = vv
        }
        get enabled() {
          return this._enabled
        }
        set enabled(vv) {
          this._enabled = vv
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(vv) {
          wv.c.Clone((() => vv), this)
        }
        serialize() {
          return wv.c.Serialize(this)
        }
        parse(vv, zv, Pv) {
          wv.c.Parse((() => this), vv, zv, Pv)
        }
      }, (() => {
        const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], gv = [(0, Sv.L)()], pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], lv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], Wv = [(0, Sv.L)()], av = [(0, Sv.L)()], sv = [(0, Sv.L)()], (0, hv.e)(vv, null, zv, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: vv => "func" in vv,
            get: vv => vv.func
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, Pv, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: vv => "backFunc" in vv,
            get: vv => vv.backFunc
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, ev, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: vv => "funcRef" in vv,
            get: vv => vv.funcRef
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, gv, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: vv => "funcMask" in vv,
            get: vv => vv.funcMask
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, pv, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: vv => "opStencilFail" in vv,
            get: vv => vv.opStencilFail
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, dv, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: vv => "opDepthFail" in vv,
            get: vv => vv.opDepthFail
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, Nv, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: vv => "opStencilDepthPass" in vv,
            get: vv => vv.opStencilDepthPass
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, lv, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: vv => "backOpStencilFail" in vv,
            get: vv => vv.backOpStencilFail
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, Tv, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: vv => "backOpDepthFail" in vv,
            get: vv => vv.backOpDepthFail
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, Wv, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: vv => "backOpStencilDepthPass" in vv,
            get: vv => vv.backOpStencilDepthPass
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, av, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: vv => "mask" in vv,
            get: vv => vv.mask
          },
          metadata: wv
        }, null, Cv), (0, hv.e)(vv, null, sv, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "enabled" in vv,
            get: vv => vv.enabled
          },
          metadata: wv
        }, null, Cv), wv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wv
        })
      })(), vv
    })();
    var sv = Pv(39629),
      Cv = Pv(39230),
      iv = Pv(39190);
    let cv = (() => {
      var vv;
      let zv, Pv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Jv = [],
        Ev = [],
        ov = [],
        bv = [],
        rv = [],
        kv = [],
        Xv = [],
        uv = [],
        vz = [],
        zz = [],
        Pz = [],
        hz = [],
        Sz = [],
        ez = [],
        gz = [],
        pz = [],
        dz = [],
        Nz = [],
        lz = [],
        Tz = [],
        Wz = [],
        wz = [],
        az = [],
        sz = [],
        Cz = [],
        iz = [],
        cz = [],
        Gz = [],
        mz = [],
        jz = [],
        fz = [],
        Fz = [],
        Yz = [],
        nz = [],
        Oz = [],
        Dz = [],
        Kz = [],
        Vz = [],
        Uz = [],
        Rz = [],
        xz = [],
        tz = [],
        qz = [],
        Iz = [],
        Qz = [],
        Zz = [],
        Az = [],
        Lz = [],
        Hz = [],
        Mz = [],
        yz = [];
      return vv = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(zv) {
          this._useVertexPulling !== zv && (this._useVertexPulling = zv, this.xvv(vv.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(vv) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(zv) {
          if (this._alpha === zv) return;
          const Pv = this._alpha;
          this._alpha = zv, 1 !== Pv && 1 !== zv || this.xvv(vv.MiscDirtyFlag + vv.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(zv) {
          this._backFaceCulling !== zv && (this._backFaceCulling = zv, this.xvv(vv.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(zv) {
          const Pv = Math.max(0, Math.min(0 | zv, 4));
          this._textureRepetitionMode !== Pv && (this._textureRepetitionMode = Pv, this.xvv(vv.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(zv) {
          this._cullBackFaces !== zv && (this._cullBackFaces = zv, this.xvv(vv.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(vv) {
          this._blockDirtyMechanism !== vv && (this._blockDirtyMechanism = vv, vv || this.markDirty())
        }
        atomicMaterialsUpdate(vv) {
          this.blockDirtyMechanism = !0;
          try {
            vv(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(vv) {
          this._onDisposeObserver && this.uD.remove(this._onDisposeObserver), this._onDisposeObserver = this.uD.add(vv)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new gv.c), this._onBindObservable
        }
        set onBind(vv) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(vv)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new gv.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new gv.c), this._onEffectCreatedObservable
        }
        set alphaMode(vv) {
          this._alphaMode[0] = vv
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Pv] !== zv && (this._alphaMode[Pv] = zv, this.xvv(vv.TextureDirtyFlag))
        }
        set needDepthPrePass(vv) {
          this._needDepthPrePass !== vv && (this._needDepthPrePass = vv, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(zv) {
          this._fogEnabled !== zv && (this._fogEnabled = zv, this.xvv(vv.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case vv.WireFrameFillMode:
            case vv.LineListDrawMode:
            case vv.LineLoopDrawMode:
            case vv.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(zv) {
          this.fillMode = zv ? vv.WireFrameFillMode : vv.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case vv.PointFillMode:
            case vv.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(zv) {
          this.fillMode = zv ? vv.PointFillMode : vv.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(zv) {
          this._fillMode !== zv && (this._fillMode = zv, this.xvv(vv.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(vv) {
          const zv = this.rD().ma().getCaps().fragmentDepthSupported;
          vv && !zv && lv.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = vv && zv, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(vv) {
          this._isVertexOutputInvariant !== vv && (this._isVertexOutputInvariant = vv, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(vv) {
          this._drawWrapper = vv
        }
        constructor(zv, Pv, Sv) {
          let dv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, hv.f)(this, Jv), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, hv.f)(this, Ev, void 0), this.uniqueId = ((0, hv.f)(this, ov), (0, hv.f)(this, bv, void 0)), this._loadedUniqueId = (0, hv.f)(this, rv), this.name = (0, hv.f)(this, kv, void 0), this.metadata = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, null)), this._internalMetadata = (0, hv.f)(this, vz), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, hv.f)(this, zz, !1), this.checkReadyOnlyOnce = ((0, hv.f)(this, Pz), (0, hv.f)(this, hz, !1)), this.state = ((0, hv.f)(this, Sz), (0, hv.f)(this, ez, "")), this._alpha = ((0, hv.f)(this, gz), (0, hv.f)(this, pz, 1)), this.inspectableCustomProperties = (0, hv.f)(this, dz), this._backFaceCulling = (0, hv.f)(this, Nz, !0), this._textureRepetitionMode = ((0, hv.f)(this, lz), (0, hv.f)(this, Tz, 0)), this.textureRepetitionHexTilingParams = ((0, hv.f)(this, Wz), (0, hv.f)(this, wz, [1, .6, 7, .5])), this._cullBackFaces = ((0, hv.f)(this, az), (0, hv.f)(this, sz, !0)), this._blockDirtyMechanism = ((0, hv.f)(this, Cz), !1), this.sideOrientation = (0, hv.f)(this, iz, null), this.onCompiled = ((0, hv.f)(this, cz), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.uD = new gv.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, hv.f)(this, Gz, [2]), this._needDepthPrePass = ((0, hv.f)(this, mz), (0, hv.f)(this, jz, !1)), this.disableDepthWrite = ((0, hv.f)(this, fz), (0, hv.f)(this, Fz, !1)), this.disableColorWrite = ((0, hv.f)(this, Yz), (0, hv.f)(this, nz, !1)), this.forceDepthWrite = ((0, hv.f)(this, Oz), (0, hv.f)(this, Dz, !1)), this.depthFunction = ((0, hv.f)(this, Kz), (0, hv.f)(this, Vz, 0)), this.separateCullingPass = ((0, hv.f)(this, Uz), (0, hv.f)(this, Rz, !1)), this._fogEnabled = ((0, hv.f)(this, xz), (0, hv.f)(this, tz, !0)), this.pointSize = ((0, hv.f)(this, qz), (0, hv.f)(this, Iz, 1)), this.zOffset = ((0, hv.f)(this, Qz), (0, hv.f)(this, Zz, 0)), this.zOffsetUnits = ((0, hv.f)(this, Az), (0, hv.f)(this, Lz, 0)), this.clipPlane = (0, hv.f)(this, Hz), this.stencil = new av, this._isVertexOutputInvariant = (0, hv.f)(this, Mz, vv.ForceVertexOutputInvariant), this._materialContext = (0, hv.f)(this, yz), this._useUBO = !1, this._fillMode = vv.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = zv;
          const lv = Pv || pv.e.LastCreatedScene;
          lv && (this._scene = lv, this._dirtyCallbacks = {}, this._forceGLSL = dv, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = zv || ev.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.ma().createMaterialContext(), this._drawWrapper = new Wv.c(this._scene.ma(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Nv.e(this._scene.ma(), void 0, void 0, zv), this._useUBO = this.rD().ma().supportsUniformBuffers, this._createUniformBuffer(), Sv || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), vv.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const vv = this.rD().ma();
          this._uniformBuffer?.dispose(), vv.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Nv.e(vv, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Nv.e(this._scene.ma(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(vv) {
          return "Name: " + this.name
        }
        getClassName() {
          return "Material"
        }
        get _isMaterial() {
          return !0
        }
        get isFrozen() {
          return this.checkReadyOnlyOnce
        }
        freeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !0
        }
        unfreeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !1
        }
        isReady(vv, zv) {
          return !0
        }
        isReadyForSubMesh(vv, zv, Pv) {
          const hv = zv.materialDefines;
          return !!hv && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = hv, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        rD() {
          return this._scene
        }
        _getEffectiveOrientation(vv) {
          return null !== this.sideOrientation ? this.sideOrientation : vv.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(vv) {
          this._transparencyMode = vv
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === vv.MATERIAL_ALPHABLEND || this._transparencyMode === vv.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === vv.MATERIAL_ALPHATEST || this._transparencyMode === vv.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === vv.MATERIAL_OPAQUE || this._transparencyMode === vv.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(vv) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : vv.visibility < 1 || !this._disableAlphaBlending && (vv.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(vv) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(vv) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Pv = this.rD().meshes;
          for (const vv of Pv)
            if (vv.sF)
              for (const Pv of vv.sF)
                if (Pv.na() === this)
                  for (const vv of Pv._drawWrappers) vv && this._materialContext === vv.materialContext && (vv._wasPreviouslyReady = !1, vv._wasPreviouslyUsingInstances = null, vv._forceRebindOnNextCall = zv);
          zv && this.xvv(vv.AllDirtyFlag)
        }
        _preBind(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const hv = this._scene.ma(),
            Sv = (null == Pv ? this.sideOrientation : Pv) === vv.ClockWiseSideOrientation,
            ev = zv || this._getDrawWrapper();
          return (0, Cv.e)(ev) && ev.materialContext && (ev.materialContext.useVertexPulling = this.useVertexPulling), hv.enableEffect(ev), hv.setState(this.backFaceCulling, this.zOffset, !1, Sv, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Sv
        }
        bind(vv, zv) {}
        buildUniformLayout() {
          const vv = this._uniformBuffer;
          this._eventInfo.ubo = vv, this._callbackPluginEventGeneric(8, this._eventInfo), vv.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(vv, zv, Pv) {
          const hv = Pv._drawWrapper;
          this._eventInfo.subMesh = Pv, this._callbackPluginEventBindForSubMesh(this._eventInfo), hv._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(vv) {}
        bindView(vv) {
          this._useUBO ? this._needToBindSceneUbo = !0 : vv.setMatrix("view", this.rD().getViewMatrix())
        }
        bindViewProjection(vv) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (vv.setMatrix("viewProjection", this.rD().getTransformMatrix()), vv.setMatrix("projection", this.rD().getProjectionMatrix()), vv.setMatrix("inverseProjection", this.rD().getInverseProjectionMatrix()))
        }
        bindEyePosition(vv, zv) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(vv, zv)
        }
        _afterBind(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && zv && (this._needToBindSceneUbo = !1, (0, sv.x)(zv, this.rD().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = vv ? vv.visibility : 1, this._onBindObservable && vv && this._onBindObservable.notifyObservers(vv), this.disableDepthWrite) {
            const vv = this._scene.ma();
            this._cachedDepthWriteState = vv.getDepthWrite(), vv.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const vv = this._scene.ma();
            this._cachedColorWriteState = vv.getColorWrite(), vv.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const vv = this._scene.ma();
            this._cachedDepthFunctionState = vv.getDepthFunction() || 0, vv.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.ma().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.ma().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.ma().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(vv) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = vv, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(vv) {
          return null
        }
        _clonePlugins(zv, Pv) {
          const hv = {};
          if (this._serializePlugins(hv), vv._ParsePlugins(hv, zv, this._scene, Pv), this.pluginManager)
            for (const vv of this.pluginManager._plugins) {
              const Pv = zv.pluginManager.getPlugin(vv.name);
              Pv && vv.copyTo(Pv)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const vv = [];
            for (const zv in this.meshMap) {
              const Pv = this.meshMap[zv];
              Pv && vv.push(Pv)
            }
            return vv
          }
          return this._scene.meshes.filter((vv => vv.material === this))
        }
        forceCompilation(vv, zv, Pv, hv) {
          const Sv = {
              clipPlane: !1,
              useInstances: !1,
              ...Pv
            },
            ev = this.rD(),
            gv = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const pv = () => {
            if (!this._scene || !this._scene.ma()) return;
            const Pv = ev.clipPlane;
            if (Sv.clipPlane && (ev.clipPlane = new Tv.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Pv = !0,
                ev = null;
              if (vv.sF) {
                const zv = new dv.c(0, 0, 0, 0, 0, vv, void 0, !1, !1);
                zv.materialDefines && (zv.materialDefines._renderId = -1), this.isReadyForSubMesh(vv, zv, Sv.useInstances) || (zv.effect && zv.effect.getCompilationError() && zv.effect.allFallbacksProcessed() ? ev = zv.effect.getCompilationError() : (Pv = !1, setTimeout(pv, 16)))
              }
              Pv && (this.allowShaderHotSwapping = gv, ev && hv && hv(ev), zv && zv(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = gv, zv && zv(this)) : setTimeout(pv, 16);
            Sv.clipPlane && (ev.clipPlane = Pv)
          };
          pv()
        }
        async forceCompilationAsync(vv, zv) {
          return await new Promise(((Pv, hv) => {
            this.forceCompilation(vv, (() => {
              Pv()
            }), zv, (vv => {
              hv(vv)
            }))
          }))
        }
        xvv(zv) {
          this.rD().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (vv._DirtyCallbackArray.length = 0, zv & vv.ImageProcessingDirtyFlag && vv._DirtyCallbackArray.push(vv._ImageProcessingDirtyCallBack), zv & vv.TextureDirtyFlag && vv._DirtyCallbackArray.push(vv._TextureDirtyCallBack), zv & vv.LightDirtyFlag && vv._DirtyCallbackArray.push(vv._LightsDirtyCallBack), zv & vv.FresnelDirtyFlag && vv._DirtyCallbackArray.push(vv._FresnelDirtyCallBack), zv & vv.AttributesDirtyFlag && vv._DirtyCallbackArray.push(vv._AttributeDirtyCallBack), zv & vv.MiscDirtyFlag && vv._DirtyCallbackArray.push(vv._MiscDirtyCallBack), zv & vv.PrePassDirtyFlag && vv._DirtyCallbackArray.push(vv._PrePassDirtyCallBack), vv._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(vv._RunDirtyCallBacks), this.rD().resetCachedMaterial())
        }
        resetDrawCache() {
          const vv = this.rD().meshes;
          for (const zv of vv)
            if (zv.sF)
              for (const vv of zv.sF) vv.na() === this && vv.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(vv) {
          const zv = this.rD();
          if (zv.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Pv = zv.meshes;
          for (const hv of Pv)
            if (hv.sF)
              for (const Pv of hv.sF) {
                if ((Pv.na() || (zv._hasDefaultMaterial ? zv.defaultMaterial : null)) === this)
                  for (const zv of Pv._drawWrappers) zv && zv.defines && zv.defines.markAllAsDirty && this._materialContext === zv.materialContext && vv(zv.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.rD().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const vv = this.rD().enablePrePassRenderer();
          vv && vv.xvv()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(vv._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(vv._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(vv._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(vv._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(vv._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(vv._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(vv._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(vv._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(vv._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(vv._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const vv = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.uD.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(vv)
            }))
          }
        }
        setPrePassRenderer(vv) {
          return !1
        }
        dispose(vv, zv, Pv) {
          const hv = this.rD();
          if (hv.stopAnimation(this), hv.freeProcessedMaterials(), hv.removeMaterial(this), this._eventInfo.forceDisposeTextures = zv, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const vv = this._parentContainer.materials.indexOf(this);
            vv > -1 && this._parentContainer.materials.splice(vv, 1), this._parentContainer = null
          }
          if (!0 !== Pv)
            if (this.meshMap)
              for (const Sv in this.meshMap) {
                const vv = this.meshMap[Sv];
                this._disposeMeshResources(vv)
              } else {
                const vv = hv.meshes;
                for (const zv of vv) this._disposeMeshResources(zv)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.uD.notifyObservers(this), this.uD.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(vv) {
          if (!vv) return;
          const zv = vv.geometry,
            Pv = vv._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (vv.sF && Pv)
              for (const hv of vv.sF) {
                const vv = hv._drawWrappers;
                for (let Sv = 0; Sv < vv.length; Sv++) {
                  const ev = vv[Sv]?.effect;
                  if (!ev) continue;
                  Pv[Sv] === this && (zv?._releaseVertexArrayObject(ev), hv._removeDrawWrapper(Sv, !0, !0))
                }
              }
          } else zv?._releaseVertexArrayObject(this._drawWrapper.effect);
          vv.material !== this || vv.hhv || (vv.material = null)
        }
        serialize() {
          const vv = wv.c.Serialize(this);
          return vv.stencil = this.stencil.serialize(), vv.uniqueId = this.uniqueId, this._serializePlugins(vv), vv
        }
        _serializePlugins(vv) {
          if (vv.plugins = {}, this.pluginManager)
            for (const zv of this.pluginManager._plugins) zv.doNotSerialize || (vv.plugins[zv.getClassName()] = zv.serialize())
        }
        static ParseAlphaMode(vv, zv) {
          void 0 !== vv._alphaMode ? zv._alphaMode = Array.isArray(vv._alphaMode) ? [...vv._alphaMode] : [vv._alphaMode] : void 0 !== vv.alphaMode ? zv._alphaMode = Array.isArray(vv.alphaMode) ? [...vv.alphaMode] : [vv.alphaMode] : zv._alphaMode = [2]
        }
        static Parse(zv, Pv, hv) {
          if (zv.customType) {
            if ("BABYLON.PBRMaterial" === zv.customType && zv.overloadedAlbedo && (zv.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return lv.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else zv.customType = "BABYLON.StandardMaterial";
          const Sv = ev.h.Instantiate(zv.customType).Parse(zv, Pv, hv);
          return Sv._loadedUniqueId = zv.uniqueId, vv.ParseAlphaMode(zv, Sv), Sv
        }
        static _ParsePlugins(vv, zv, Pv, hv) {
          if (vv.plugins)
            for (const Sv in vv.plugins) {
              const gv = vv.plugins[Sv];
              let pv = zv.pluginManager?.getPlugin(gv.name);
              if (!pv) {
                const vv = ev.h.Instantiate("BABYLON." + Sv);
                vv && (pv = new vv(zv))
              }
              pv?.parse(gv, Pv, hv)
            }
        }
      }, (() => {
        const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], iv = [(0, Sv.L)()], cv = [(0, Sv.L)()], Gv = [(0, Sv.L)()], mv = [(0, Sv.L)()], jv = [(0, Sv.L)()], fv = [(0, Sv.L)("alpha")], Fv = [(0, Sv.L)("backFaceCulling")], Yv = [(0, Sv.L)("textureRepetitionMode")], nv = [(0, Sv.L)("textureRepetitionHexTilingParams")], Ov = [(0, Sv.L)("cullBackFaces")], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], Vv = [(0, Sv.L)()], Uv = [(0, Sv.L)()], Rv = [(0, Sv.L)()], xv = [(0, Sv.L)()], tv = [(0, Sv.L)()], qv = [(0, Sv.L)()], Iv = [(0, Sv.L)("fogEnabled")], Qv = [(0, Sv.L)()], Zv = [(0, Sv.L)()], Av = [(0, Sv.L)()], Lv = [(0, Sv.L)()], Hv = [(0, Sv.L)()], Mv = [(0, Sv.L)()], yv = [(0, Sv.L)()], Bv = [(0, Sv.L)()], (0, hv.e)(vv, null, Lv, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: vv => "pointsCloud" in vv,
            get: vv => vv.pointsCloud
          },
          metadata: ev
        }, null, Jv), (0, hv.e)(vv, null, Hv, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "fillMode" in vv,
            get: vv => vv.fillMode
          },
          metadata: ev
        }, null, Jv), (0, hv.e)(vv, null, Mv, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: vv => "useLogarithmicDepth" in vv,
            get: vv => vv.useLogarithmicDepth
          },
          metadata: ev
        }, null, Jv), (0, hv.e)(vv, null, Bv, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "transparencyMode" in vv,
            get: vv => vv.transparencyMode
          },
          metadata: ev
        }, null, Jv), (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: vv => "id" in vv,
            get: vv => vv.id,
            set: (vv, zv) => {
              vv.id = zv
            }
          },
          metadata: ev
        }, Ev, ov), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: vv => "uniqueId" in vv,
            get: vv => vv.uniqueId,
            set: (vv, zv) => {
              vv.uniqueId = zv
            }
          },
          metadata: ev
        }, bv, rv), (0, hv.e)(null, null, iv, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: vv => "name" in vv,
            get: vv => vv.name,
            set: (vv, zv) => {
              vv.name = zv
            }
          },
          metadata: ev
        }, kv, Xv), (0, hv.e)(null, null, cv, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: vv => "metadata" in vv,
            get: vv => vv.metadata,
            set: (vv, zv) => {
              vv.metadata = zv
            }
          },
          metadata: ev
        }, uv, vz), (0, hv.e)(null, null, Gv, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: vv => "checkReadyOnEveryCall" in vv,
            get: vv => vv.checkReadyOnEveryCall,
            set: (vv, zv) => {
              vv.checkReadyOnEveryCall = zv
            }
          },
          metadata: ev
        }, zz, Pz), (0, hv.e)(null, null, mv, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: vv => "checkReadyOnlyOnce" in vv,
            get: vv => vv.checkReadyOnlyOnce,
            set: (vv, zv) => {
              vv.checkReadyOnlyOnce = zv
            }
          },
          metadata: ev
        }, hz, Sz), (0, hv.e)(null, null, jv, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: vv => "state" in vv,
            get: vv => vv.state,
            set: (vv, zv) => {
              vv.state = zv
            }
          },
          metadata: ev
        }, ez, gz), (0, hv.e)(null, null, fv, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "_alpha" in vv,
            get: vv => vv._alpha,
            set: (vv, zv) => {
              vv._alpha = zv
            }
          },
          metadata: ev
        }, pz, dz), (0, hv.e)(null, null, Fv, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: vv => "_backFaceCulling" in vv,
            get: vv => vv._backFaceCulling,
            set: (vv, zv) => {
              vv._backFaceCulling = zv
            }
          },
          metadata: ev
        }, Nz, lz), (0, hv.e)(null, null, Yv, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "_textureRepetitionMode" in vv,
            get: vv => vv._textureRepetitionMode,
            set: (vv, zv) => {
              vv._textureRepetitionMode = zv
            }
          },
          metadata: ev
        }, Tz, Wz), (0, hv.e)(null, null, nv, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: vv => "textureRepetitionHexTilingParams" in vv,
            get: vv => vv.textureRepetitionHexTilingParams,
            set: (vv, zv) => {
              vv.textureRepetitionHexTilingParams = zv
            }
          },
          metadata: ev
        }, wz, az), (0, hv.e)(null, null, Ov, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: vv => "_cullBackFaces" in vv,
            get: vv => vv._cullBackFaces,
            set: (vv, zv) => {
              vv._cullBackFaces = zv
            }
          },
          metadata: ev
        }, sz, Cz), (0, hv.e)(null, null, Dv, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: vv => "sideOrientation" in vv,
            get: vv => vv.sideOrientation,
            set: (vv, zv) => {
              vv.sideOrientation = zv
            }
          },
          metadata: ev
        }, iz, cz), (0, hv.e)(null, null, Kv, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "_alphaMode" in vv,
            get: vv => vv._alphaMode,
            set: (vv, zv) => {
              vv._alphaMode = zv
            }
          },
          metadata: ev
        }, Gz, mz), (0, hv.e)(null, null, Vv, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: vv => "_needDepthPrePass" in vv,
            get: vv => vv._needDepthPrePass,
            set: (vv, zv) => {
              vv._needDepthPrePass = zv
            }
          },
          metadata: ev
        }, jz, fz), (0, hv.e)(null, null, Uv, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: vv => "disableDepthWrite" in vv,
            get: vv => vv.disableDepthWrite,
            set: (vv, zv) => {
              vv.disableDepthWrite = zv
            }
          },
          metadata: ev
        }, Fz, Yz), (0, hv.e)(null, null, Rv, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: vv => "disableColorWrite" in vv,
            get: vv => vv.disableColorWrite,
            set: (vv, zv) => {
              vv.disableColorWrite = zv
            }
          },
          metadata: ev
        }, nz, Oz), (0, hv.e)(null, null, xv, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: vv => "forceDepthWrite" in vv,
            get: vv => vv.forceDepthWrite,
            set: (vv, zv) => {
              vv.forceDepthWrite = zv
            }
          },
          metadata: ev
        }, Dz, Kz), (0, hv.e)(null, null, tv, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: vv => "depthFunction" in vv,
            get: vv => vv.depthFunction,
            set: (vv, zv) => {
              vv.depthFunction = zv
            }
          },
          metadata: ev
        }, Vz, Uz), (0, hv.e)(null, null, qv, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: vv => "separateCullingPass" in vv,
            get: vv => vv.separateCullingPass,
            set: (vv, zv) => {
              vv.separateCullingPass = zv
            }
          },
          metadata: ev
        }, Rz, xz), (0, hv.e)(null, null, Iv, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "_fogEnabled" in vv,
            get: vv => vv._fogEnabled,
            set: (vv, zv) => {
              vv._fogEnabled = zv
            }
          },
          metadata: ev
        }, tz, qz), (0, hv.e)(null, null, Qv, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: vv => "pointSize" in vv,
            get: vv => vv.pointSize,
            set: (vv, zv) => {
              vv.pointSize = zv
            }
          },
          metadata: ev
        }, Iz, Qz), (0, hv.e)(null, null, Zv, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: vv => "zOffset" in vv,
            get: vv => vv.zOffset,
            set: (vv, zv) => {
              vv.zOffset = zv
            }
          },
          metadata: ev
        }, Zz, Az), (0, hv.e)(null, null, Av, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: vv => "zOffsetUnits" in vv,
            get: vv => vv.zOffsetUnits,
            set: (vv, zv) => {
              vv.zOffsetUnits = zv
            }
          },
          metadata: ev
        }, Lz, Hz), (0, hv.e)(null, null, yv, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: vv => "_isVertexOutputInvariant" in vv,
            get: vv => vv._isVertexOutputInvariant,
            set: (vv, zv) => {
              vv._isVertexOutputInvariant = zv
            }
          },
          metadata: ev
        }, Mz, yz), ev && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ev
        })
      })(), vv.TriangleFillMode = 0, vv.WireFrameFillMode = 1, vv.PointFillMode = 2, vv.PointListDrawMode = 3, vv.LineListDrawMode = 4, vv.LineLoopDrawMode = 5, vv.LineStripDrawMode = 6, vv.TriangleStripDrawMode = 7, vv.TriangleFanDrawMode = 8, vv.ClockWiseSideOrientation = 0, vv.CounterClockWiseSideOrientation = 1, vv.ImageProcessingDirtyFlag = 64, vv.TextureDirtyFlag = 1, vv.LightDirtyFlag = 2, vv.FresnelDirtyFlag = 4, vv.AttributesDirtyFlag = 8, vv.MiscDirtyFlag = 16, vv.PrePassDirtyFlag = 32, vv.AllDirtyFlag = 127, vv.MATERIAL_OPAQUE = 0, vv.MATERIAL_ALPHATEST = 1, vv.MATERIAL_ALPHABLEND = 2, vv.MATERIAL_ALPHATESTANDBLEND = 3, vv.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, vv.MATERIAL_NORMALBLENDMETHOD_RNM = 1, vv.LIGHTFALLOFF_PHYSICAL = 0, vv.LIGHTFALLOFF_GLTF = 1, vv.LIGHTFALLOFF_STANDARD = 2, vv.OnEventObservable = new gv.c, vv.ForceVertexOutputInvariant = !1, vv._AllDirtyCallBack = vv => vv.markAllAsDirty(), vv._ImageProcessingDirtyCallBack = vv => vv.markAsImageProcessingDirty(), vv._TextureDirtyCallBack = vv => vv.markAsTexturesDirty(), vv._FresnelDirtyCallBack = vv => vv.markAsFresnelDirty(), vv._MiscDirtyCallBack = vv => vv.markAsMiscDirty(), vv._PrePassDirtyCallBack = vv => vv.markAsPrePassDirty(), vv._LightsDirtyCallBack = vv => vv.markAsLightDirty(), vv._AttributeDirtyCallBack = vv => vv.markAsAttributesDirty(), vv._FresnelAndMiscDirtyCallBack = zv => {
        vv._FresnelDirtyCallBack(zv), vv._MiscDirtyCallBack(zv)
      }, vv._TextureAndMiscDirtyCallBack = zv => {
        vv._TextureDirtyCallBack(zv), vv._MiscDirtyCallBack(zv)
      }, vv._DirtyCallbackArray = [], vv._RunDirtyCallBacks = zv => {
        for (const Pv of vv._DirtyCallbackArray) Pv(zv)
      }, vv
    })();
    Object.getOwnPropertyDescriptor(cv.prototype, "pluginManager") || Object.defineProperty(cv.prototype, "pluginManager", (0, iv.g)("Material", "pluginManager"))
  },
  39644: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    var hv = Pv(39212);
    class Sv {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(vv) {
        this._DiffuseTextureEnabled !== vv && (this._DiffuseTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(vv) {
        this._BaseWeightTextureEnabled !== vv && (this._BaseWeightTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(vv) {
        this._BaseDiffuseRoughnessTextureEnabled !== vv && (this._BaseDiffuseRoughnessTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(vv) {
        this._DetailTextureEnabled !== vv && (this._DetailTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(vv) {
        this._DecalMapEnabled !== vv && (this._DecalMapEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(vv) {
        this._AmbientTextureEnabled !== vv && (this._AmbientTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(vv) {
        this._OpacityTextureEnabled !== vv && (this._OpacityTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(vv) {
        this._ReflectionTextureEnabled !== vv && (this._ReflectionTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(vv) {
        this._EmissiveTextureEnabled !== vv && (this._EmissiveTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(vv) {
        this._SpecularTextureEnabled !== vv && (this._SpecularTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(vv) {
        this._BumpTextureEnabled !== vv && (this._BumpTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(vv) {
        this._LightmapTextureEnabled !== vv && (this._LightmapTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(vv) {
        this._RefractionTextureEnabled !== vv && (this._RefractionTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(vv) {
        this._ColorGradingTextureEnabled !== vv && (this._ColorGradingTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(vv) {
        this._FresnelEnabled !== vv && (this._FresnelEnabled = vv, hv.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(vv) {
        this._ClearCoatTextureEnabled !== vv && (this._ClearCoatTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(vv) {
        this._ClearCoatBumpTextureEnabled !== vv && (this._ClearCoatBumpTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(vv) {
        this._ClearCoatTintTextureEnabled !== vv && (this._ClearCoatTintTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(vv) {
        this._SheenTextureEnabled !== vv && (this._SheenTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(vv) {
        this._AnisotropicTextureEnabled !== vv && (this._AnisotropicTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(vv) {
        this._ThicknessTextureEnabled !== vv && (this._ThicknessTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(vv) {
        this._RefractionIntensityTextureEnabled !== vv && (this._RefractionIntensityTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(vv) {
        this._TranslucencyIntensityTextureEnabled !== vv && (this._TranslucencyIntensityTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(vv) {
        this._TranslucencyColorTextureEnabled !== vv && (this._TranslucencyColorTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(vv) {
        this._IridescenceTextureEnabled !== vv && (this._IridescenceTextureEnabled = vv, hv.b.MarkAllMaterialsAsDirty(1))
      }
    }
    Sv._DiffuseTextureEnabled = !0, Sv._BaseWeightTextureEnabled = !0, Sv._BaseDiffuseRoughnessTextureEnabled = !0, Sv._DetailTextureEnabled = !0, Sv._DecalMapEnabled = !0, Sv._AmbientTextureEnabled = !0, Sv._OpacityTextureEnabled = !0, Sv._ReflectionTextureEnabled = !0, Sv._EmissiveTextureEnabled = !0, Sv._SpecularTextureEnabled = !0, Sv._BumpTextureEnabled = !0, Sv._LightmapTextureEnabled = !0, Sv._RefractionTextureEnabled = !0, Sv._ColorGradingTextureEnabled = !0, Sv._FresnelEnabled = !0, Sv._ClearCoatTextureEnabled = !0, Sv._ClearCoatBumpTextureEnabled = !0, Sv._ClearCoatTintTextureEnabled = !0, Sv._SheenTextureEnabled = !0, Sv._AnisotropicTextureEnabled = !0, Sv._ThicknessTextureEnabled = !0, Sv._RefractionIntensityTextureEnabled = !0, Sv._TranslucencyIntensityTextureEnabled = !0, Sv._TranslucencyColorTextureEnabled = !0, Sv._IridescenceTextureEnabled = !0
  },
  39629: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => Uv,
      A: () => mv,
      B: () => Vv,
      F: () => jv,
      G: () => Dv,
      J: () => Kv,
      L: () => wv,
      M: () => Wv,
      P: () => Hv,
      S: () => Iv,
      T: () => tv,
      W: () => xv,
      _: () => Gv,
      cb: () => Mv,
      d: () => Rv,
      e: () => fv,
      eb: () => yv,
      g: () => Tv,
      ib: () => Bv,
      j: () => iv,
      jb: () => bv,
      kb: () => Ev,
      lb: () => ov,
      mb: () => av,
      n: () => cv,
      r: () => Ov,
      u: () => dv,
      v: () => sv,
      x: () => Cv
    });
    var hv = Pv(38209),
      Sv = Pv(36615),
      ev = Pv(39500),
      gv = Pv(39636),
      pv = Pv(39644);

    function dv(vv, zv, Pv) {
      if (!vv || vv.LOGARITHMICDEPTH || vv.indexOf && vv.indexOf("LOGARITHMICDEPTH") >= 0) {
        const vv = Pv.activeCamera;
        1 === vv.mode && hv.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), zv.setFloat("logarithmicDepthConstant", 2 / (Math.log(vv.maxZ + 1) / Math.LN2))
      }
    }
    const Nv = {
        r: 0,
        g: 0,
        b: 0
      },
      lv = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Tv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Pv && vv.fogEnabled && (!zv || zv.applyFog) && 0 !== vv.fogMode && (Pv.setFloat4("vFogInfos", vv.fogMode, vv.fogStart, vv.fogEnd, vv.fogDensity), hv ? (vv.fogColor.toLinearSpaceToRef(Nv, vv.ma().useExactSrgbConversions), Pv.setColor3("vFogColor", Nv)) : Pv.setColor3("vFogColor", vv.fogColor))
    }

    function Wv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
      const Tv = vv.numMaxInfluencers || vv.numInfluencers;
      return Tv <= 0 ? 0 : (zv.push("#define MORPHTARGETS"), vv.hasPositions && zv.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), vv.hasNormals && zv.push("#define MORPHTARGETTEXTURE_HASNORMALS"), vv.hasTangents && zv.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), vv.hasUVs && zv.push("#define MORPHTARGETTEXTURE_HASUVS"), vv.hasUV2s && zv.push("#define MORPHTARGETTEXTURE_HASUV2S"), vv.hasColors && zv.push("#define MORPHTARGETTEXTURE_HASCOLORS"), vv.supportsPositions && Sv && zv.push("#define MORPHTARGETS_POSITION"), vv.supportsNormals && ev && zv.push("#define MORPHTARGETS_NORMAL"), vv.supportsTangents && gv && zv.push("#define MORPHTARGETS_TANGENT"), vv.supportsUVs && pv && zv.push("#define MORPHTARGETS_UV"), vv.supportsUV2s && dv && zv.push("#define MORPHTARGETS_UV2"), vv.supportsColors && Nv && zv.push("#define MORPHTARGETS_COLOR"), zv.push("#define NUM_MORPH_INFLUENCERS " + Tv), vv.isUsingTextureForTargets && zv.push("#define MORPHTARGETS_TEXTURE"), lv.NUM_MORPH_INFLUENCERS = Tv, lv.NORMAL = ev, lv.TANGENT = gv, lv.UV = pv, lv.UV2 = dv, lv.COLOR = Nv, wv(Pv, hv, lv, Sv), Tv)
    }

    function wv(vv, zv, Pv) {
      let ev = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const gv = Pv.NUM_MORPH_INFLUENCERS;
      if (gv > 0 && Sv.e.LastCreatedEngine) {
        const pv = Sv.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          dv = zv.morphTargetManager;
        if (dv?.isUsingTextureForTargets) return;
        const Nv = dv && dv.supportsPositions && ev,
          lv = dv && dv.supportsNormals && Pv.NORMAL,
          Tv = dv && dv.supportsTangents && Pv.TANGENT,
          Wv = dv && dv.supportsUVs && Pv.UV1,
          wv = dv && dv.supportsUV2s && Pv.UV2,
          av = dv && dv.supportsColors && Pv.VERTEXCOLOR;
        for (let Pv = 0; Pv < gv; Pv++) Nv && vv.push("position" + Pv), lv && vv.push("normal" + Pv), Tv && vv.push("tangent" + Pv), Wv && vv.push("uv_" + Pv), wv && vv.push("uv2_" + Pv), av && vv.push("color" + Pv), vv.length > pv && hv.d.Error("Cannot add more vertex attributes for mesh " + zv.name)
      }
    }

    function av(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      vv.push("world0"), vv.push("world1"), vv.push("world2"), vv.push("world3"), zv && (vv.push("previousWorld0"), vv.push("previousWorld1"), vv.push("previousWorld2"), vv.push("previousWorld3"))
    }

    function sv(vv, zv) {
      const Pv = vv.morphTargetManager;
      vv && Pv && zv.setFloatArray("morphTargetInfluences", Pv.influences)
    }

    function Cv(vv, zv) {
      zv.bindToEffect(vv, "Scene")
    }

    function iv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        lv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Tv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Wv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (vv.texturesEnabled && Sv && pv.e.ReflectionTextureEnabled) {
        if (Pv.Xu("reflectionMatrix", Sv.getReflectionTextureMatrix()), Pv.updateFloat2("vReflectionInfos", Sv.level * vv.iblIntensity, Wv), dv && Sv.boundingBoxSize) {
          const vv = Sv;
          Pv.updateVector3("vReflectionPosition", vv.boundingBoxPosition), Pv.updateVector3("vReflectionSize", vv.boundingBoxSize)
        }
        if (ev) {
          const vv = Sv.getSize().width;
          Pv.updateFloat2("vReflectionFilteringInfo", vv, Math.log2(vv))
        }
        if (lv && !zv.USEIRRADIANCEMAP) {
          const vv = Sv.sphericalPolynomial;
          if (zv.USESPHERICALFROMREFLECTIONMAP && vv)
            if (zv.SPHERICAL_HARMONICS) {
              const zv = vv.preScaledHarmonics;
              Pv.updateVector3("vSphericalL00", zv.l00), Pv.updateVector3("vSphericalL1_1", zv.l1_1), Pv.updateVector3("vSphericalL10", zv.l10), Pv.updateVector3("vSphericalL11", zv.l11), Pv.updateVector3("vSphericalL2_2", zv.l2_2), Pv.updateVector3("vSphericalL2_1", zv.l2_1), Pv.updateVector3("vSphericalL20", zv.l20), Pv.updateVector3("vSphericalL21", zv.l21), Pv.updateVector3("vSphericalL22", zv.l22)
            } else Pv.updateFloat3("vSphericalX", vv.x.x, vv.x.y, vv.x.z), Pv.updateFloat3("vSphericalY", vv.y.x, vv.y.y, vv.y.z), Pv.updateFloat3("vSphericalZ", vv.z.x, vv.z.y, vv.z.z), Pv.updateFloat3("vSphericalXX_ZZ", vv.xx.x - vv.zz.x, vv.xx.y - vv.zz.y, vv.xx.z - vv.zz.z), Pv.updateFloat3("vSphericalYY_ZZ", vv.yy.x - vv.zz.x, vv.yy.y - vv.zz.y, vv.yy.z - vv.zz.z), Pv.updateFloat3("vSphericalZZ", vv.zz.x, vv.zz.y, vv.zz.z), Pv.updateFloat3("vSphericalXY", vv.xy.x, vv.xy.y, vv.xy.z), Pv.updateFloat3("vSphericalYZ", vv.yz.x, vv.yz.y, vv.yz.z), Pv.updateFloat3("vSphericalZX", vv.zx.x, vv.zx.y, vv.zx.z)
        } else Nv && zv.USEIRRADIANCEMAP && zv.USE_IRRADIANCE_DOMINANT_DIRECTION && Sv.irradianceTexture && Pv.updateVector3("vReflectionDominantDirection", Sv.irradianceTexture._dominantDirection);
        gv && Pv.updateFloat3("vReflectionMicrosurfaceInfos", Sv.getSize().width, Sv.lodGenerationScale, Sv.lodGenerationOffset)
      }
      Tv && Pv.updateColor3("vReflectionColor", hv)
    }

    function cv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (hv && pv.e.ReflectionTextureEnabled) {
        zv.LODBASEDMICROSFURACE ? Pv.setTexture("reflectionSampler", hv) : (Pv.setTexture("reflectionSampler", hv._lodTextureMid || hv), Pv.setTexture("reflectionSamplerLow", hv._lodTextureLow || hv), Pv.setTexture("reflectionSamplerHigh", hv._lodTextureHigh || hv)), zv.USEIRRADIANCEMAP && Pv.setTexture("irradianceSampler", hv.irradianceTexture);
        const ev = vv.iblCdfGenerator;
        Sv && ev && Pv.setTexture("icdfSampler", ev.getIcdfTexture())
      }
    }

    function Gv(vv, zv, Pv) {
      zv._needUVs = !0, zv[Pv] = !0, vv.optimizeUVAllocation && vv.getTextureMatrix().isIdentityAs3x2() ? (zv[Pv + "DIRECTUV"] = vv.coordinatesIndex + 1, zv["MAINUV" + (vv.coordinatesIndex + 1)] = !0) : zv[Pv + "DIRECTUV"] = 0
    }

    function mv(vv, zv, Pv) {
      const hv = vv.getTextureMatrix();
      zv.Xu(Pv + "Matrix", hv)
    }

    function jv(vv, zv, Pv) {
      Pv.BAKED_VERTEX_ANIMATION_TEXTURE && Pv.INSTANCES && vv.push("bakedVertexAnimationSettingsInstanced")
    }

    function fv(vv, zv, Pv) {
      var hv;
      if (zv && vv && (vv.computeBonesUsingShaders && zv._bonesComputationForcedToCPU && (vv.computeBonesUsingShaders = !1), vv.useBones && vv.computeBonesUsingShaders && vv.skeleton)) {
        const Sv = vv.skeleton;
        if (Sv.isUsingTextureForMatrices && zv.getUniformIndex("boneTextureInfo") > -1) {
          const Pv = Sv.getTransformMatrixTexture(vv);
          zv.setTexture("boneSampler", Pv), zv.setFloat2("boneTextureInfo", Sv._textureWidth, Sv._textureHeight)
        } else {
          const ev = Sv.getTransformMatrices(vv);
          ev && (zv.setMatrices("mBones", ev), Pv && vv.rD().prePassRenderer && vv.rD().prePassRenderer.getIndex(2) && (Pv.previousBones[vv.uniqueId] || (Pv.previousBones[vv.uniqueId] = ev.slice()), zv.setMatrices("mPreviousBones", Pv.previousBones[vv.uniqueId]), hv = ev, Pv.previousBones[vv.uniqueId].set(hv)))
        }
      }
    }

    function Fv(vv, zv, Pv, hv, Sv) {
      let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      vv._bindLight(zv, Pv, hv, Sv, ev)
    }
    const Yv = 4,
      nv = new WeakMap;

    function Ov(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const ev = Math.min(zv.lightSources.length, Sv);
      for (let gv = 0; gv < ev; gv++) {
        Fv(zv.lightSources[gv], gv, vv, Pv, "boolean" === typeof hv ? hv : hv.SPECULARTERM, zv.receiveShadows)
      }
    }

    function Dv(vv, zv, Pv, hv) {
      Pv.NUM_BONE_INFLUENCERS > 0 && (hv.addCPUSkinningFallback(0, zv), vv.push("matricesIndices"), vv.push("matricesWeights"), Pv.NUM_BONE_INFLUENCERS > 4 && (vv.push("matricesIndicesExtra"), vv.push("matricesWeightsExtra")))
    }

    function Kv(vv, zv) {
      (zv.INSTANCES || zv.THIN_INSTANCES) && av(vv, !!zv.PREPASS_VELOCITY), zv.INSTANCESCOLOR && vv.push("instanceColor")
    }

    function Vv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Sv = 0;
      for (let ev = 0; ev < Pv && vv["LIGHT" + ev]; ev++) ev > 0 && (Sv = hv + ev, zv.addFallback(Sv, "LIGHT" + ev)), vv.SHADOWS || (vv["SHADOW" + ev] && zv.addFallback(hv, "SHADOW" + ev), vv["SHADOWPCF" + ev] && zv.addFallback(hv, "SHADOWPCF" + ev), vv["SHADOWPCSS" + ev] && zv.addFallback(hv, "SHADOWPCSS" + ev), vv["SHADOWPOISSON" + ev] && zv.addFallback(hv, "SHADOWPOISSON" + ev), vv["SHADOWESM" + ev] && zv.addFallback(hv, "SHADOWESM" + ev), vv["SHADOWCLOSEESM" + ev] && zv.addFallback(hv, "SHADOWCLOSEESM" + ev));
      return Sv
    }

    function Uv(vv, zv, Pv, hv, Sv, ev, gv) {
      let pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Nv = arguments.length > 9 ? arguments[9] : void 0,
        lv = arguments.length > 10 ? arguments[10] : void 0;
      if (gv._areMiscDirty) {
        gv.LOGARITHMICDEPTH = Pv, gv.POINTSIZE = hv, gv.FOG = Sv && function(vv, zv) {
          return zv.fogEnabled && vv.applyFog && 0 !== zv.fogMode
        }(vv, zv), gv.NONUNIFORMSCALING = vv.nonUniformScaling, gv.ALPHATEST = ev, gv.DECAL_AFTER_DETAIL = pv, gv.USE_VERTEX_PULLING = dv, gv.RIGHT_HANDED = zv.useRightHandedSystem;
        const Tv = dv ? Nv?.geometry?.getIndexBuffer() : null,
          Wv = !!Nv && Nv.isUnIndexed;
        gv.VERTEX_PULLING_USE_INDEX_BUFFER = !!Tv && !Wv, gv.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Tv || Wv) && Tv.is32Bits, gv.VERTEXOUTPUT_INVARIANT = !!lv
      }
    }

    function Rv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!vv.lightsEnabled || hv) return !0;
      const Sv = zv.lightSources,
        ev = Math.min(Sv.length, Pv);
      for (let gv = 0; gv < ev; gv++)
        if (!Sv[gv].areLightTexturesReady()) return !1;
      return !0
    }

    function xv(vv, zv, Pv, Sv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Pv._areLightsDirty) return Pv._needNormals;
      const pv = ev;
      ev = function(vv, zv) {
        const Pv = vv.ma().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Pv) return zv;
        const hv = Math.max(Pv - Yv, 1);
        return Math.min(zv, hv)
      }(vv, ev);
      let dv = 0;
      const Nv = {
        needNormals: Pv._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (vv.lightsEnabled && !gv) {
        zv.lightSources.length > ev && ev < pv && function(vv, zv, Pv, Sv) {
          let ev = nv.get(vv);
          ev || (ev = new Set, nv.set(vv, ev)), ev.has(Sv) || (ev.add(Sv), hv.d.Warn(`maxSimultaneousLights is ${zv} but this engine supports at most ${Pv} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Sv} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Sv+Yv} uniform buffers, over the device limit of ${vv.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Pv}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Pv} or less to silence this warning.`))
        }(vv.ma(), pv, ev, Math.min(zv.lightSources.length, pv));
        for (const hv of zv.lightSources)
          if (qv(vv, zv, hv, dv, Pv, Sv, Nv), dv++, dv === ev) break
      }
      Pv.SPECULARTERM = Nv.specularEnabled, Pv.SHADOWS = Nv.shadowEnabled;
      const lv = Math.max(ev, Pv.MAXLIGHTCOUNT || 0);
      for (let hv = dv; hv < lv; hv++) void 0 !== Pv["LIGHT" + hv] && (Pv["LIGHT" + hv] = !1, Pv["HEMILIGHT" + hv] = !1, Pv["POINTLIGHT" + hv] = !1, Pv["DIRLIGHT" + hv] = !1, Pv["SPOTLIGHT" + hv] = !1, Pv["AREALIGHT" + hv] = !1, Pv["CLUSTLIGHT" + hv] = !1, Pv["SHADOW" + hv] = !1, Pv["SHADOWCSM" + hv] = !1, Pv["SHADOWCSMDEBUG" + hv] = !1, Pv["SHADOWCSMNUM_CASCADES" + hv] = !1, Pv["SHADOWCSMUSESHADOWMAXZ" + hv] = !1, Pv["SHADOWCSMNOBLEND" + hv] = !1, Pv["SHADOWCSM_RIGHTHANDED" + hv] = !1, Pv["SHADOWPCF" + hv] = !1, Pv["SHADOWPCSS" + hv] = !1, Pv["SHADOWPOISSON" + hv] = !1, Pv["SHADOWESM" + hv] = !1, Pv["SHADOWCLOSEESM" + hv] = !1, Pv["SHADOWCUBE" + hv] = !1, Pv["SHADOWLOWQUALITY" + hv] = !1, Pv["SHADOWMEDIUMQUALITY" + hv] = !1);
      Pv.LIGHTCOUNT = dv, Pv.MAXLIGHTCOUNT = ev;
      const Tv = vv.ma().getCaps();
      return void 0 === Pv.SHADOWFLOAT && (Nv.needRebuild = !0), Pv.SHADOWFLOAT = Nv.shadowEnabled && (Tv.textureFloatRender && Tv.textureFloatLinearFiltering || Tv.textureHalfFloatRender && Tv.textureHalfFloatLinearFiltering), Pv.LIGHTMAPEXCLUDED = Nv.lightmapMode, Nv.needRebuild && Pv.rebuild(), Nv.needNormals
    }

    function tv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (zv && pv.e.ReflectionTextureEnabled) {
        if (!zv.isReadyOrNotBlocking()) return !1;
        Pv._needNormals = !0, Pv.REFLECTION = !0, Pv.GAMMAREFLECTION = zv.gammaSpace, Pv.RGBDREFLECTION = zv.isRGBD, Pv.LODINREFLECTIONALPHA = zv.lodLevelInAlpha, Pv.LINEARSPECULARREFLECTION = zv.linearSpecularLOD, Pv.USEIRRADIANCEMAP = !1, Pv.LODBASEDMICROSFURACE = vv.ma().getCaps().textureLOD;
        const gv = vv.ma();
        switch (hv && Sv > 0 ? (Pv.NUM_SAMPLES = "" + Sv, gv._features.needTypeSuffixInShaderConstants && (Pv.NUM_SAMPLES = Pv.NUM_SAMPLES + "u"), Pv.REALTIME_FILTERING = !0, vv.iblCdfGenerator && (Pv.IBL_CDF_FILTERING = !0)) : Pv.REALTIME_FILTERING = !1, Pv.INVERTCUBICMAP = 6 === zv.coordinatesMode, Pv.REFLECTIONMAP_3D = zv.isCube, Pv.REFLECTIONMAP_OPPOSITEZ = Pv.REFLECTIONMAP_3D && vv.useRightHandedSystem ? !zv.invertZ : zv.invertZ, Pv.REFLECTIONMAP_CUBIC = !1, Pv.REFLECTIONMAP_EXPLICIT = !1, Pv.REFLECTIONMAP_PLANAR = !1, Pv.REFLECTIONMAP_PROJECTION = !1, Pv.REFLECTIONMAP_SKYBOX = !1, Pv.REFLECTIONMAP_SPHERICAL = !1, Pv.REFLECTIONMAP_EQUIRECTANGULAR = !1, Pv.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Pv.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, zv.coordinatesMode) {
          case 0:
            Pv.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Pv.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Pv.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Pv.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Pv.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Pv.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Pv.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Pv.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Pv.REFLECTIONMAP_CUBIC = !0, Pv.USE_LOCAL_REFLECTIONMAP_CUBIC = !!zv.boundingBoxSize
        }
        5 !== zv.coordinatesMode && (zv.irradianceTexture ? (Pv.USEIRRADIANCEMAP = !0, Pv.USESPHERICALFROMREFLECTIONMAP = !1, Pv.USESPHERICALINVERTEX = !1, zv.irradianceTexture._dominantDirection ? Pv.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Pv.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : zv.isCube && (Pv.USESPHERICALFROMREFLECTIONMAP = !0, Pv.USEIRRADIANCEMAP = !1, Pv.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Pv.USESPHERICALINVERTEX = ev))
      } else Pv.REFLECTION = !1, Pv.REFLECTIONMAP_3D = !1, Pv.REFLECTIONMAP_SPHERICAL = !1, Pv.REFLECTIONMAP_PLANAR = !1, Pv.REFLECTIONMAP_CUBIC = !1, Pv.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Pv.REFLECTIONMAP_PROJECTION = !1, Pv.REFLECTIONMAP_SKYBOX = !1, Pv.REFLECTIONMAP_EXPLICIT = !1, Pv.REFLECTIONMAP_EQUIRECTANGULAR = !1, Pv.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Pv.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Pv.INVERTCUBICMAP = !1, Pv.USESPHERICALFROMREFLECTIONMAP = !1, Pv.USEIRRADIANCEMAP = !1, Pv.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Pv.USESPHERICALINVERTEX = !1, Pv.REFLECTIONMAP_OPPOSITEZ = !1, Pv.LODINREFLECTIONALPHA = !1, Pv.GAMMAREFLECTION = !1, Pv.RGBDREFLECTION = !1, Pv.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function qv(vv, zv, Pv, hv, Sv, gv, pv) {
      switch (pv.needNormals = !0, void 0 === Sv["LIGHT" + hv] && (pv.needRebuild = !0), Sv["LIGHT" + hv] = !0, Sv["SPOTLIGHT" + hv] = !1, Sv["HEMILIGHT" + hv] = !1, Sv["POINTLIGHT" + hv] = !1, Sv["DIRLIGHT" + hv] = !1, Sv["AREALIGHT" + hv] = !1, Sv["CLUSTLIGHT" + hv] = !1, Pv.prepareLightSpecificDefines(Sv, hv), Sv["LIGHT_FALLOFF_PHYSICAL" + hv] = !1, Sv["LIGHT_FALLOFF_GLTF" + hv] = !1, Sv["LIGHT_FALLOFF_STANDARD" + hv] = !1, Pv.falloffType) {
        case ev.c.FALLOFF_GLTF:
          Sv["LIGHT_FALLOFF_GLTF" + hv] = !0;
          break;
        case ev.c.FALLOFF_PHYSICAL:
          Sv["LIGHT_FALLOFF_PHYSICAL" + hv] = !0;
          break;
        case ev.c.FALLOFF_STANDARD:
          Sv["LIGHT_FALLOFF_STANDARD" + hv] = !0
      }
      if (gv && !Pv.specular.equalsFloats(0, 0, 0) && (pv.specularEnabled = !0), Sv["SHADOW" + hv] = !1, Sv["SHADOWCSM" + hv] = !1, Sv["SHADOWCSMDEBUG" + hv] = !1, Sv["SHADOWCSMNUM_CASCADES" + hv] = !1, Sv["SHADOWCSMUSESHADOWMAXZ" + hv] = !1, Sv["SHADOWCSMNOBLEND" + hv] = !1, Sv["SHADOWCSM_RIGHTHANDED" + hv] = !1, Sv["SHADOWPCF" + hv] = !1, Sv["SHADOWPCSS" + hv] = !1, Sv["SHADOWPOISSON" + hv] = !1, Sv["SHADOWESM" + hv] = !1, Sv["SHADOWCLOSEESM" + hv] = !1, Sv["SHADOWCUBE" + hv] = !1, Sv["SHADOWLOWQUALITY" + hv] = !1, Sv["SHADOWMEDIUMQUALITY" + hv] = !1, zv && zv.receiveShadows && vv.shadowsEnabled && Pv.shadowEnabled) {
        const zv = Pv.getShadowGenerator(vv.activeCamera) ?? Pv.getShadowGenerator();
        if (zv) {
          const vv = zv.getShadowMap();
          vv && vv.renderList && vv.renderList.length > 0 && (pv.shadowEnabled = !0, zv.prepareDefines(Sv, hv))
        }
      }
      Pv.lightmapMode != ev.c.LIGHTMAP_DEFAULT ? (pv.lightmapMode = !0, Sv["LIGHTMAPEXCLUDED" + hv] = !0, Sv["LIGHTMAPNOSPECULAR" + hv] = Pv.lightmapMode == ev.c.LIGHTMAP_SHADOWSONLY) : (Sv["LIGHTMAPEXCLUDED" + hv] = !1, Sv["LIGHTMAPNOSPECULAR" + hv] = !1)
    }

    function Iv(vv, zv, Pv, hv, Sv) {
      let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dv = function(vv, zv) {
          let Pv = !1;
          if (vv.activeCamera) {
            const hv = zv.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Sv = zv.CAMERA_PERSPECTIVE ? 1 : 0,
              ev = 1 === vv.activeCamera.mode ? 1 : 0,
              gv = 0 === vv.activeCamera.mode ? 1 : 0;
            (hv ^ ev || Sv ^ gv) && (zv.CAMERA_ORTHOGRAPHIC = 1 === ev, zv.CAMERA_PERSPECTIVE = 1 === gv, Pv = !0)
          }
          return Pv
        }(vv, hv);
      !1 !== ev && (dv = (0, gv.i)(Pv, vv, hv)), hv.DEPTHPREPASS !== !zv.getColorWrite() && (hv.DEPTHPREPASS = !hv.DEPTHPREPASS, dv = !0), hv.INSTANCES !== Sv && (hv.INSTANCES = Sv, dv = !0), hv.THIN_INSTANCES !== pv && (hv.THIN_INSTANCES = pv, dv = !0), dv && hv.markAsUnprocessed()
    }
    const Qv = 40,
      Zv = 64,
      Av = new WeakMap,
      Lv = new WeakSet;

    function Hv(vv, zv, Pv, Sv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        pv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!zv._areAttributesDirty && zv._needNormals === zv._normals && zv._needUVs === zv._uvs) return !1;
      zv._normals = zv._needNormals, zv._uvs = zv._needUVs, zv.NORMAL = zv._needNormals && vv.isVerticesDataPresent("normal"), zv._needNormals && vv.isVerticesDataPresent("tangent") && (zv.TANGENT = !0);
      for (let hv = 1; hv <= 6; ++hv) zv["UV" + hv] = !!zv._needUVs && vv.isVerticesDataPresent(`uv${1===hv?"":hv}`);
      if (Pv) {
        const Pv = vv.useVertexColors && vv.isVerticesDataPresent("color");
        zv.VERTEXCOLOR = Pv, zv.VERTEXALPHA = vv.hasVertexAlpha && Pv && gv
      }
      return vv.isVerticesDataPresent("instanceColor") && (vv.Phv || vv.hasThinInstances) && (zv.INSTANCESCOLOR = !0), Sv && function(vv, zv) {
        if (vv.useBones && vv.computeBonesUsingShaders && vv.skeleton) {
          zv.NUM_BONE_INFLUENCERS = vv.numBoneInfluencers;
          const Pv = void 0 !== zv.BONETEXTURE;
          if (vv.skeleton.isUsingTextureForMatrices && Pv) zv.BONETEXTURE = !0;
          else {
            zv.BonesPerMesh = vv.skeleton.bones.length + 1, zv.BONETEXTURE = !Pv && void 0;
            const Sv = vv.rD(),
              ev = Sv.prePassRenderer;
            if (ev && ev.enabled) {
              const Pv = -1 === ev.excludedSkinnedMesh.indexOf(vv);
              zv.BONES_VELOCITY_ENABLED = Pv
            }
            const gv = !0 === zv.MULTIVIEW,
              pv = 2 * zv.BonesPerMesh + (gv ? 1 : 0);
            if (Av.get(vv.skeleton) !== pv) {
              Av.set(vv.skeleton, pv);
              const Pv = Sv.ma().getCaps().maxVertexUniformVectors;
              if (Pv && !Lv.has(vv.skeleton)) {
                const Sv = 4 * zv.BonesPerMesh,
                  ev = gv ? Zv : Qv,
                  pv = Math.max(Pv - ev, 0);
                (Sv > pv || gv && 3 * Sv > Pv) && (Lv.add(vv.skeleton), hv.d.Warn(`Skeleton "${vv.skeleton.name}": ${vv.skeleton.bones.length} bones stored as vertex uniforms use ${Sv} of ~${pv} usable uniform vectors${gv?" (multiview)":""} on a device reporting ${Pv}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else zv.NUM_BONE_INFLUENCERS = 0, zv.BonesPerMesh = 0, void 0 !== zv.BONETEXTURE && (zv.BONETEXTURE = !1)
      }(vv, zv), ev && function(vv, zv) {
        const Pv = vv.morphTargetManager;
        Pv ? (zv.MORPHTARGETS_UV = Pv.supportsUVs && zv.UV1, zv.MORPHTARGETS_UV2 = Pv.supportsUV2s && zv.UV2, zv.MORPHTARGETS_TANGENT = Pv.supportsTangents && zv.TANGENT, zv.MORPHTARGETS_NORMAL = Pv.supportsNormals && zv.NORMAL, zv.MORPHTARGETS_POSITION = Pv.supportsPositions, zv.MORPHTARGETS_COLOR = Pv.supportsColors, zv.MORPHTARGETTEXTURE_HASUVS = Pv.hasUVs, zv.MORPHTARGETTEXTURE_HASUV2S = Pv.hasUV2s, zv.MORPHTARGETTEXTURE_HASTANGENTS = Pv.hasTangents, zv.MORPHTARGETTEXTURE_HASNORMALS = Pv.hasNormals, zv.MORPHTARGETTEXTURE_HASPOSITIONS = Pv.hasPositions, zv.MORPHTARGETTEXTURE_HASCOLORS = Pv.hasColors, zv.NUM_MORPH_INFLUENCERS = Pv.numMaxInfluencers || Pv.numInfluencers, zv.MORPHTARGETS = zv.NUM_MORPH_INFLUENCERS > 0, zv.MORPHTARGETS_TEXTURE = Pv.isUsingTextureForTargets) : (zv.MORPHTARGETS_UV = !1, zv.MORPHTARGETS_UV2 = !1, zv.MORPHTARGETS_TANGENT = !1, zv.MORPHTARGETS_NORMAL = !1, zv.MORPHTARGETS_POSITION = !1, zv.MORPHTARGETS_COLOR = !1, zv.MORPHTARGETTEXTURE_HASUVS = !1, zv.MORPHTARGETTEXTURE_HASUV2S = !1, zv.MORPHTARGETTEXTURE_HASTANGENTS = !1, zv.MORPHTARGETTEXTURE_HASNORMALS = !1, zv.MORPHTARGETTEXTURE_HASPOSITIONS = !1, zv.MORPHTARGETTEXTURE_HAS_COLORS = !1, zv.MORPHTARGETS = !1, zv.NUM_MORPH_INFLUENCERS = 0)
      }(vv, zv), pv && function(vv, zv) {
        const Pv = vv.bakedVertexAnimationManager;
        zv.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Pv || !Pv.isEnabled)
      }(vv, zv), !0
    }

    function Mv(vv, zv) {
      if (vv.activeCamera) {
        const Pv = zv.MULTIVIEW;
        zv.MULTIVIEW = null !== vv.activeCamera.outputRenderTarget && vv.activeCamera.outputRenderTarget.getViewCount() > 1, zv.MULTIVIEW != Pv && zv.markAsUnprocessed()
      }
    }

    function yv(vv, zv, Pv) {
      const hv = zv.ORDER_INDEPENDENT_TRANSPARENCY,
        Sv = zv.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      zv.ORDER_INDEPENDENT_TRANSPARENCY = vv.useOrderIndependentTransparency && Pv, zv.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !vv.ma().getCaps().textureFloatLinearFiltering, hv === zv.ORDER_INDEPENDENT_TRANSPARENCY && Sv === zv.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || zv.markAsUnprocessed()
    }

    function Bv(vv, zv, Pv) {
      const hv = zv.PREPASS;
      if (!zv._arePrePassDirty) return;
      const Sv = [{
        type: 1,
        define: "PREPASS_POSITION",
        index: "PREPASS_POSITION_INDEX"
      }, {
        type: 9,
        define: "PREPASS_LOCAL_POSITION",
        index: "PREPASS_LOCAL_POSITION_INDEX"
      }, {
        type: 2,
        define: "PREPASS_VELOCITY",
        index: "PREPASS_VELOCITY_INDEX"
      }, {
        type: 11,
        define: "PREPASS_VELOCITY_LINEAR",
        index: "PREPASS_VELOCITY_LINEAR_INDEX"
      }, {
        type: 3,
        define: "PREPASS_REFLECTIVITY",
        index: "PREPASS_REFLECTIVITY_INDEX"
      }, {
        type: 0,
        define: "PREPASS_IRRADIANCE_LEGACY",
        index: "PREPASS_IRRADIANCE_LEGACY_INDEX"
      }, {
        type: 7,
        define: "PREPASS_ALBEDO_SQRT",
        index: "PREPASS_ALBEDO_SQRT_INDEX"
      }, {
        type: 5,
        define: "PREPASS_DEPTH",
        index: "PREPASS_DEPTH_INDEX"
      }, {
        type: 10,
        define: "PREPASS_SCREENSPACE_DEPTH",
        index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
      }, {
        type: 6,
        define: "PREPASS_NORMAL",
        index: "PREPASS_NORMAL_INDEX"
      }, {
        type: 8,
        define: "PREPASS_WORLD_NORMAL",
        index: "PREPASS_WORLD_NORMAL_INDEX"
      }, {
        type: 14,
        define: "PREPASS_IRRADIANCE",
        index: "PREPASS_IRRADIANCE_INDEX"
      }];
      if (vv.prePassRenderer && vv.prePassRenderer.enabled && Pv) {
        zv.PREPASS = !0, zv.SCENE_MRT_COUNT = vv.prePassRenderer.mrtCount, zv.PREPASS_NORMAL_WORLDSPACE = vv.prePassRenderer.generateNormalsInWorldSpace, zv.PREPASS_COLOR = !0, zv.PREPASS_COLOR_INDEX = 0;
        for (let Pv = 0; Pv < Sv.length; Pv++) {
          const hv = vv.prePassRenderer.getIndex(Sv[Pv].type); - 1 !== hv ? (zv[Sv[Pv].define] = !0, zv[Sv[Pv].index] = hv) : zv[Sv[Pv].define] = !1
        }
      } else {
        zv.PREPASS = !1;
        for (let vv = 0; vv < Sv.length; vv++) zv[Sv[vv].define] = !1
      }
      zv.PREPASS != hv && (zv.markAsUnprocessed(), zv.markAsImageProcessingDirty())
    }

    function Jv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Nv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Sv && Sv.push("Light" + vv), ev || (zv.push("vLightData" + vv, "vLightDiffuse" + vv, "vLightSpecular" + vv, "vLightDirection" + vv, "vLightWidth" + vv, "vLightHeight" + vv, "vLightFalloff" + vv, "vLightGround" + vv, "vSliceData" + vv, "vSliceRanges" + vv, "lightMatrix" + vv, "shadowsInfo" + vv, "depthValues" + vv), Pv.push("shadowTexture" + vv), Pv.push("depthTexture" + vv), zv.push("viewFrustumZ" + vv, "cascadeBlendFactor" + vv, "lightSizeUVCorrection" + vv, "depthCorrection" + vv, "penumbraDarkness" + vv, "frustumLengths" + vv), hv && (Pv.push("projectionLightTexture" + vv), zv.push("textureProjectionMatrix" + vv)), gv && Pv.push("iesLightTexture" + vv), dv && Pv.push("rectAreaLightEmissionTexture" + vv), pv && (Pv.push("lightDataTexture" + vv), Nv || Pv.push("tileMaskTexture" + vv)))
    }

    function Ev(vv, zv, Pv) {
      const hv = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Pv && hv.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), vv.push(...hv);
      zv.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function ov(vv, zv, Pv) {
      let hv, Sv, ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        gv = null;
      if (vv.uniformsNames) {
        const pv = vv;
        hv = pv.uniformsNames, Sv = pv.uniformBuffersNames, zv = pv.samplers, Pv = pv.defines, ev = pv.maxSimultaneousLights || 0, gv = pv.shaderLanguage ?? null
      } else hv = vv, zv || (zv = []);
      for (let pv = 0; pv < ev && Pv["LIGHT" + pv]; pv++) Jv(pv, hv, zv, Pv["PROJECTEDLIGHTTEXTURE" + pv], Sv, !1, Pv["IESLIGHTTEXTURE" + pv], Pv["CLUSTLIGHT" + pv], Pv["RECTAREALIGHTEMISSIONTEXTURE" + pv], 1 === gv);
      Pv.NUM_MORPH_INFLUENCERS && (hv.push("morphTargetInfluences"), hv.push("morphTargetCount")), Pv.BAKED_VERTEX_ANIMATION_TEXTURE && (hv.push("bakedVertexAnimationSettings"), hv.push("bakedVertexAnimationTextureSizeInverted"), hv.push("bakedVertexAnimationTime"), zv.push("bakedVertexAnimationTexture"))
    }

    function bv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      vv.addUniform("vReflectionInfos", 2), vv.addUniform("reflectionMatrix", 16), zv && vv.addUniform("vReflectionMicrosurfaceInfos", 3), Pv && (vv.addUniform("vReflectionPosition", 3), vv.addUniform("vReflectionSize", 3)), hv && (vv.addUniform("vReflectionFilteringInfo", 2), vv.addUniform("vReflectionDominantDirection", 3)), ev && vv.addUniform("vReflectionColor", 3), Sv && (vv.addUniform("vSphericalL00", 3), vv.addUniform("vSphericalL1_1", 3), vv.addUniform("vSphericalL10", 3), vv.addUniform("vSphericalL11", 3), vv.addUniform("vSphericalL2_2", 3), vv.addUniform("vSphericalL2_1", 3), vv.addUniform("vSphericalL20", 3), vv.addUniform("vSphericalL21", 3), vv.addUniform("vSphericalL22", 3), vv.addUniform("vSphericalX", 3), vv.addUniform("vSphericalY", 3), vv.addUniform("vSphericalZ", 3), vv.addUniform("vSphericalXX_ZZ", 3), vv.addUniform("vSphericalYY_ZZ", 3), vv.addUniform("vSphericalZZ", 3), vv.addUniform("vSphericalXY", 3), vv.addUniform("vSphericalYZ", 3), vv.addUniform("vSphericalZX", 3))
    }
  },
  39647: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(36594),
      Sv = Pv(39593);
    class ev extends Sv.b {
      constructor(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(vv, zv, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new hv.c, this._storeEffectOnSubMeshes = Pv
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(vv, zv) {
        return !!vv && (!this._storeEffectOnSubMeshes || (!vv.sF || 0 === vv.sF.length || this.isReadyForSubMesh(vv, vv.sF[0], zv)))
      }
      _isReadyForSubMesh(vv) {
        const zv = vv.materialDefines;
        return !(this.checkReadyOnEveryCall || !vv.effect || !zv || zv._renderId !== this.rD().getRenderId())
      }
      bindOnlyWorldMatrix(vv) {
        this._activeEffect.setMatrix("world", vv)
      }
      bindOnlyNormalMatrix(vv) {
        this._activeEffect.setMatrix("normalMatrix", vv)
      }
      bind(vv, zv) {
        zv && this.bindForSubMesh(vv, zv, zv.sF[0])
      }
      _afterBind(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(vv, zv, Pv), this.rD()._cachedEffect = zv, Pv ? Pv._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Pv._drawWrapper._forceRebindOnNextCall || vv.isCachedMaterialInvalid(this, zv, hv)
      }
      dispose(vv, zv, Pv) {
        this._activeEffect = void 0, super.dispose(vv, zv, Pv)
      }
    }
  },
  39676: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      e: () => Sv
    });
    const hv = new WeakMap;

    function Sv(vv) {
      const zv = vv.getVertexBuffers();
      if (!zv) return null;
      let Pv = hv.get(vv);
      if (Pv) {
        let vv = !1;
        for (const hv in zv)
          if (!Pv.has(hv)) {
            vv = !0;
            break
          } if (!vv) return Pv
      } else Pv = new Map, hv.set(vv, Pv);
      for (const hv in zv) {
        const vv = zv[hv];
        if (vv) {
          const zv = vv.byteOffset,
            Sv = vv.byteStride,
            ev = vv.type,
            gv = vv.normalized;
          Pv.set(hv, {
            offset: zv,
            stride: Sv,
            type: ev,
            normalized: gv
          })
        }
      }
      return Pv
    }

    function ev(vv, zv) {
      zv.forEach(((zv, Pv) => {
        const hv = `vp_${Pv}_info`;
        vv.setFloat4(hv, zv.offset, zv.stride, zv.type, zv.normalized ? 1 : 0)
      }))
    }
  },
  39616: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv,
      g: () => dv
    });
    var hv = Pv(39295),
      Sv = Pv(36594),
      ev = Pv(39300);
    let gv = (() => {
      var vv;
      let zv, Pv, Sv = [];
      return vv = class {
        static extractMinAndMaxIndexed(vv, zv, Pv, hv, Sv, ev) {
          for (let gv = Pv; gv < Pv + hv; gv++) {
            const Pv = 3 * zv[gv],
              hv = vv[Pv],
              pv = vv[Pv + 1],
              dv = vv[Pv + 2];
            Sv.minimizeInPlaceFromFloats(hv, pv, dv), ev.maximizeInPlaceFromFloats(hv, pv, dv)
          }
        }
        static extractMinAndMax(vv, zv, Pv, hv, Sv, ev) {
          for (let gv = zv, pv = zv * hv; gv < zv + Pv; gv++, pv += hv) {
            const zv = vv[pv],
              Pv = vv[pv + 1],
              hv = vv[pv + 2];
            Sv.minimizeInPlaceFromFloats(zv, Pv, hv), ev.maximizeInPlaceFromFloats(zv, Pv, hv)
          }
        }
      }, (() => {
        const gv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [ev.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Pv = [ev.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, hv.e)(vv, null, zv, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: vv => "extractMinAndMaxIndexed" in vv,
            get: vv => vv.extractMinAndMaxIndexed
          },
          metadata: gv
        }, null, Sv), (0, hv.e)(vv, null, Pv, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: vv => "extractMinAndMax" in vv,
            get: vv => vv.extractMinAndMax
          },
          metadata: gv
        }, null, Sv), gv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gv
        }), (0, hv.f)(vv, Sv)
      })(), vv
    })();

    function pv(vv, zv, Pv, hv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const pv = new Sv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        dv = new Sv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return gv.extractMinAndMaxIndexed(vv, zv, Pv, hv, pv, dv), ev && (pv.x -= pv.x * ev.x + ev.y, pv.y -= pv.y * ev.x + ev.y, pv.z -= pv.z * ev.x + ev.y, dv.x += dv.x * ev.x + ev.y, dv.y += dv.y * ev.x + ev.y, dv.z += dv.z * ev.x + ev.y), {
        minimum: pv,
        maximum: dv
      }
    }

    function dv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        ev = arguments.length > 4 ? arguments[4] : void 0;
      const pv = new Sv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        dv = new Sv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return ev || (ev = 3), gv.extractMinAndMax(vv, zv, Pv, ev, pv, dv), hv && (pv.x -= pv.x * hv.x + hv.y, pv.y -= pv.y * hv.x + hv.y, pv.z -= pv.z * hv.x + hv.y, dv.x += dv.x * hv.x + hv.y, dv.y += dv.y * hv.x + hv.y, dv.z += dv.z * hv.x + hv.y), {
        minimum: pv,
        maximum: dv
      }
    }
  },
  39598: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv
    });
    var hv, Sv = Pv(39441),
      ev = Pv(39602),
      gv = Pv(39609),
      pv = Pv(39616),
      dv = Pv(39621),
      Nv = Pv(39190);
    class lv {
      get materialDefines() {
        const vv = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof vv ? null : vv
      }
      set materialDefines(vv) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = vv
      }
      _getDrawWrapper(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        vv = vv ?? this._engine.currentRenderPassId;
        let Pv = this._drawWrappers[vv];
        return !Pv && zv && (this._drawWrappers[vv] = Pv = new dv.c(this._mesh.rD().ma())), Pv
      }
      _removeDrawWrapper(vv) {
        let zv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[vv]?.dispose(zv), this._drawWrappers[vv] = void 0
      }
      get effect() {
        return this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.effect : this._getDrawWrapper()?.effect ?? null
      }
      get _drawWrapper() {
        return this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)
      }
      get _drawWrapperOverride() {
        return this._mainDrawWrapperOverride
      }
      _setMainDrawWrapperOverride(vv) {
        this._mainDrawWrapperOverride = vv
      }
      setEffect(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Sv = this._drawWrapper;
        Sv.setEffect(vv, zv, hv), void 0 !== Pv && (Sv.materialContext = Pv), vv || (Sv.defines = null, Sv.materialContext = void 0)
      }
      resetDrawCache(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== vv) return void this._removeDrawWrapper(vv, !0, zv);
          for (const vv of this._drawWrappers) vv?.dispose(zv)
        }
        this._drawWrappers = []
      }
      static AddToMesh(vv, zv, Pv, hv, Sv, ev, gv) {
        return new lv(vv, zv, Pv, hv, Sv, ev, gv, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(vv, zv, Pv, hv, Sv, ev, gv) {
        let pv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dv = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = vv, this.verticesStart = zv, this.verticesCount = Pv, this.indexStart = hv, this.indexCount = Sv, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = ev, this._renderingMesh = gv || ev, dv && ev.sF.push(this), this._engine = this._mesh.rD().ma(), this.resetDrawCache(), this._trianglePlanes = [], this._id = ev.sF.length - 1, pv && (this.refreshBoundingInfo(), ev.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      cV() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.cV() : this._boundingInfo
      }
      setBoundingInfo(vv) {
        return this._boundingInfo = vv, this
      }
      getMesh() {
        return this._mesh
      }
      getRenderingMesh() {
        return this._renderingMesh
      }
      getReplacementMesh() {
        return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
      }
      getEffectiveMesh() {
        const vv = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return vv || this._renderingMesh
      }
      na() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const zv = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!zv) return vv && this._mesh.rD()._hasDefaultMaterial ? this._mesh.rD().defaultMaterial : null;
        if (this._isMultiMaterial(zv)) {
          const vv = zv.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== vv && (this._currentMaterial = vv, this.resetDrawCache()), vv
        }
        return zv
      }
      _isMultiMaterial(vv) {
        return void 0 !== vv.getSubMaterial
      }
      refreshBoundingInfo() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (vv || (vv = this._renderingMesh.getVerticesData(Sv.k.PositionKind)), !vv) return this._boundingInfo = this._mesh.cV(), this;
        const zv = this._renderingMesh.dPv();
        let Pv;
        if (0 === this.indexStart && this.indexCount === zv.length) {
          const vv = this._renderingMesh.cV();
          Pv = {
            minimum: vv.minimum.clone(),
            maximum: vv.maximum.clone()
          }
        } else Pv = (0, pv.c)(vv, zv, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Pv.minimum, Pv.maximum) : this._boundingInfo = new gv.e(Pv.minimum, Pv.maximum), this
      }
      _checkCollision(vv) {
        return this.cV()._checkCollision(vv)
      }
      updateBoundingInfo(vv) {
        let zv = this.cV();
        return zv || (this.refreshBoundingInfo(), zv = this.cV()), zv && zv.update(vv), this
      }
      isInFrustum(vv) {
        const zv = this.cV();
        return !!zv && zv.isInFrustum(vv, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(vv) {
        const zv = this.cV();
        return !!zv && zv.isCompletelyInFrustum(vv)
      }
      render(vv) {
        return this._renderingMesh.render(this, vv, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(vv, zv) {
        if (!this._linesIndexBuffer) {
          const Pv = 6 * Math.floor(this.indexCount / 3),
            hv = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Pv) : new Uint16Array(Pv);
          let Sv = 0;
          if (0 === vv.length)
            for (let vv = this.indexStart; vv < this.indexStart + this.indexCount; vv += 3) hv[Sv++] = vv, hv[Sv++] = vv + 1, hv[Sv++] = vv + 1, hv[Sv++] = vv + 2, hv[Sv++] = vv + 2, hv[Sv++] = vv;
          else
            for (let zv = this.indexStart; zv < this.indexStart + this.indexCount; zv += 3) hv[Sv++] = vv[zv], hv[Sv++] = vv[zv + 1], hv[Sv++] = vv[zv + 1], hv[Sv++] = vv[zv + 2], hv[Sv++] = vv[zv + 2], hv[Sv++] = vv[zv];
          this._linesIndexBuffer = zv.createIndexBuffer(hv), this._linesIndexCount = hv.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(vv) {
        const zv = this.cV();
        return !!zv && vv.intersectsBox(zv.boundingBox)
      }
      intersects(vv, zv, Pv, hv, Sv) {
        const ev = this.na();
        if (!ev) return null;
        let gv = 3,
          pv = !1;
        switch (ev.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            gv = 1, pv = !0
        }
        return 4 === ev.fillMode ? Pv.length ? this._intersectLines(vv, zv, Pv, this._mesh.intersectionThreshold, hv) : this._intersectUnIndexedLines(vv, zv, Pv, this._mesh.intersectionThreshold, hv) : !Pv.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(vv, zv, Pv, hv, Sv) : this._intersectTriangles(vv, zv, Pv, gv, pv, hv, Sv)
      }
      _intersectLines(vv, zv, Pv, hv, Sv) {
        let gv = null;
        for (let pv = this.indexStart; pv < this.indexStart + this.indexCount; pv += 2) {
          const dv = zv[Pv[pv]],
            Nv = zv[Pv[pv + 1]],
            lv = vv.intersectionSegment(dv, Nv, hv);
          if (!(lv < 0) && ((Sv || !gv || lv < gv.distance) && (gv = new ev.d(null, null, lv), gv.faceId = pv / 2, Sv))) break
        }
        return gv
      }
      _intersectUnIndexedLines(vv, zv, Pv, hv, Sv) {
        let gv = null;
        for (let pv = this.verticesStart; pv < this.verticesStart + this.verticesCount; pv += 2) {
          const Pv = zv[pv],
            dv = zv[pv + 1],
            Nv = vv.intersectionSegment(Pv, dv, hv);
          if (!(Nv < 0) && ((Sv || !gv || Nv < gv.distance) && (gv = new ev.d(null, null, Nv), gv.faceId = pv / 2, Sv))) break
        }
        return gv
      }
      _intersectTriangles(vv, zv, Pv, hv, Sv, ev, gv) {
        let pv = null,
          dv = -1;
        for (let Nv = this.indexStart; Nv < this.indexStart + this.indexCount - (3 - hv); Nv += hv) {
          dv++;
          const hv = Pv[Nv],
            lv = Pv[Nv + 1],
            Tv = Pv[Nv + 2];
          if (Sv && 4294967295 === Tv) {
            Nv += 2;
            continue
          }
          const Wv = zv[hv],
            wv = zv[lv],
            av = zv[Tv];
          if (!Wv || !wv || !av) continue;
          if (gv && !gv(Wv, wv, av, vv, hv, lv, Tv)) continue;
          const sv = vv.intersectsTriangle(Wv, wv, av);
          if (sv) {
            if (sv.distance < 0) continue;
            if ((ev || !pv || sv.distance < pv.distance) && (pv = sv, pv.faceId = dv, ev)) break
          }
        }
        return pv
      }
      _intersectUnIndexedTriangles(vv, zv, Pv, hv, Sv) {
        let ev = null;
        for (let gv = this.verticesStart; gv < this.verticesStart + this.verticesCount; gv += 3) {
          const Pv = zv[gv],
            pv = zv[gv + 1],
            dv = zv[gv + 2];
          if (Sv && !Sv(Pv, pv, dv, vv, -1, -1, -1)) continue;
          const Nv = vv.intersectsTriangle(Pv, pv, dv);
          if (Nv) {
            if (Nv.distance < 0) continue;
            if ((hv || !ev || Nv.distance < ev.distance) && (ev = Nv, ev.faceId = gv / 3, hv)) break
          }
        }
        return ev
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(vv, zv) {
        const Pv = new lv(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, vv, zv, !1);
        if (!this.IsGlobal) {
          const vv = this.cV();
          if (!vv) return Pv;
          Pv._boundingInfo = new gv.e(vv.minimum, vv.maximum)
        }
        return Pv
      }
      dispose() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.rD().ma()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const zv = this._mesh.sF.indexOf(this);
        this._mesh.sF.splice(zv, 1), this.resetDrawCache(void 0, vv)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(vv, zv, Pv, hv, Sv) {
        let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = Number.MAX_VALUE,
          pv = -Number.MAX_VALUE;
        const dv = (Sv || hv).dPv();
        for (let Nv = zv; Nv < zv + Pv; Nv++) {
          const vv = dv[Nv];
          vv < gv && (gv = vv), vv > pv && (pv = vv)
        }
        return new lv(vv, gv, pv - gv + 1, zv, Pv, hv, Sv, ev)
      }
    }(hv = lv.prototype).projectToRef ?? (hv.projectToRef = (0, Nv.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);