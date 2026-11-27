export const id = 298;
export const ids = [298];
export const modules = {
  42142: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr) {
        this.bu = rr, this.bv = Sr, this.distance = Qr, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  42155: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(38576),
      Wr = Qr(38560),
      ar = Qr(38569);
    class jr {
      constructor(rr, Sr, Qr) {
        this.vectors = (0, Zr.e)(8, Wr.u.Zero), this.center = Wr.u.Zero(), this.centerWorld = Wr.u.Zero(), this.extendSize = Wr.u.Zero(), this.extendSizeWorld = Wr.u.Zero(), this.directions = (0, Zr.e)(3, Wr.u.Zero), this.vectorsWorld = (0, Zr.e)(8, Wr.u.Zero), this.minimumWorld = Wr.u.Zero(), this.maximumWorld = Wr.u.Zero(), this.minimum = Wr.u.Zero(), this.maximum = Wr.u.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(rr, Sr, Qr)
      }
      reConstruct(rr, Sr, Qr) {
        const Zr = rr.x,
          ar = rr.y,
          jr = rr.z,
          Ir = Sr.x,
          fr = Sr.y,
          Er = Sr.z,
          pr = this.vectors;
        this.minimum.Hrr(Zr, ar, jr), this.maximum.Hrr(Ir, fr, Er), pr[0].Hrr(Zr, ar, jr), pr[1].Hrr(Ir, fr, Er), pr[2].Hrr(Ir, ar, jr), pr[3].Hrr(Zr, fr, jr), pr[4].Hrr(Zr, ar, Er), pr[5].Hrr(Ir, fr, jr), pr[6].Hrr(Zr, fr, Er), pr[7].Hrr(Ir, ar, Er), Sr.addToRef(rr, this.center).scaleInPlace(.5), Sr.subtractToRef(rr, this.extendSize).scaleInPlace(.5), this._worldMatrix = Qr || Wr.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(rr) {
        const Sr = jr._TmpVector3,
          Qr = this.maximum.subtractToRef(this.minimum, Sr[0]),
          Zr = Qr.length();
        Qr.normalizeFromLength(Zr);
        const Wr = Zr * rr,
          ar = Qr.scaleInPlace(.5 * Wr),
          Ir = this.center.subtractToRef(ar, Sr[1]),
          fr = this.center.addToRef(ar, Sr[2]);
        return this.reConstruct(Ir, fr, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(rr) {
        const Sr = this.minimumWorld,
          Qr = this.maximumWorld,
          Zr = this.directions,
          ar = this.vectorsWorld,
          jr = this.vectors;
        if (rr.isIdentity()) {
          Sr.iH(this.minimum), Qr.iH(this.maximum);
          for (let rr = 0; rr < 8; ++rr) ar[rr].iH(jr[rr]);
          this.extendSizeWorld.iH(this.extendSize), this.centerWorld.iH(this.center)
        } else {
          Sr.Srr(Number.MAX_VALUE), Qr.Srr(-Number.MAX_VALUE);
          for (let Zr = 0; Zr < 8; ++Zr) {
            const Ir = ar[Zr];
            Wr.u.TransformCoordinatesToRef(jr[Zr], rr, Ir), Sr.minimizeInPlace(Ir), Qr.maximizeInPlace(Ir)
          }
          Qr.subtractToRef(Sr, this.extendSizeWorld).scaleInPlace(.5), Qr.addToRef(Sr, this.centerWorld).scaleInPlace(.5)
        }
        Wr.u.FromArrayToRef(rr.m, 0, Zr[0]), Wr.u.FromArrayToRef(rr.m, 4, Zr[1]), Wr.u.FromArrayToRef(rr.m, 8, Zr[2]), this._worldMatrix = rr
      }
      isInFrustum(rr) {
        return jr.IsInFrustum(this.vectorsWorld, rr)
      }
      isCompletelyInFrustum(rr) {
        return jr.IsCompletelyInFrustum(this.vectorsWorld, rr)
      }
      intersectsPoint(rr) {
        const Sr = this.minimumWorld,
          Qr = this.maximumWorld,
          Zr = Sr.x,
          Wr = Sr.y,
          jr = Sr.z,
          Ir = Qr.x,
          fr = Qr.y,
          Er = Qr.z,
          pr = rr.x,
          xr = rr.y,
          mr = rr.z,
          Nr = -ar.e;
        return !(Ir - pr < Nr || Nr > pr - Zr) && (!(fr - xr < Nr || Nr > xr - Wr) && !(Er - mr < Nr || Nr > mr - jr))
      }
      intersectsSphere(rr) {
        return jr.IntersectsSphere(this.minimumWorld, this.maximumWorld, rr.centerWorld, rr.radiusWorld)
      }
      intersectsMinMax(rr, Sr) {
        const Qr = this.minimumWorld,
          Zr = this.maximumWorld,
          Wr = Qr.x,
          ar = Qr.y,
          jr = Qr.z,
          Ir = Zr.x,
          fr = Zr.y,
          Er = Zr.z,
          pr = rr.x,
          xr = rr.y,
          mr = rr.z,
          Nr = Sr.x,
          Ur = Sr.y,
          tr = Sr.z;
        return !(Ir < pr || Wr > Nr) && (!(fr < xr || ar > Ur) && !(Er < mr || jr > tr))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(rr, Sr) {
        return rr.intersectsMinMax(Sr.minimumWorld, Sr.maximumWorld)
      }
      static IntersectsSphere(rr, Sr, Qr, Zr) {
        const ar = jr._TmpVector3[0];
        Wr.u.ClampToRef(Qr, rr, Sr, ar);
        return Wr.u.DistanceSquared(Qr, ar) <= Zr * Zr
      }
      static IsCompletelyInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; ++Qr) {
          const Zr = Sr[Qr];
          for (let Sr = 0; Sr < 8; ++Sr)
            if (Zr.dotCoordinate(rr[Sr]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; ++Qr) {
          let Zr = !0;
          const Wr = Sr[Qr];
          for (let Sr = 0; Sr < 8; ++Sr)
            if (Wr.dotCoordinate(rr[Sr]) >= 0) {
              Zr = !1;
              break
            } if (Zr) return !1
        }
        return !0
      }
    }
    jr._TmpVector3 = (0, Zr.e)(3, Wr.u.Zero)
  },
  42147: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr
    });
    var Zr = Qr(38576),
      Wr = Qr(38560),
      ar = Qr(42155);
    class jr {
      constructor(rr, Sr, Qr) {
        this.center = Wr.u.Zero(), this.centerWorld = Wr.u.Zero(), this.minimum = Wr.u.Zero(), this.maximum = Wr.u.Zero(), this.reConstruct(rr, Sr, Qr)
      }
      reConstruct(rr, Sr, Qr) {
        this.minimum.iH(rr), this.maximum.iH(Sr);
        const Zr = Wr.u.Distance(rr, Sr);
        Sr.addToRef(rr, this.center).scaleInPlace(.5), this.radius = .5 * Zr, this._update(Qr || Wr.d.IdentityReadOnly)
      }
      scale(rr) {
        const Sr = jr._TmpVector3,
          Qr = this.maximum.subtractToRef(this.minimum, Sr[0]),
          Zr = Qr.length();
        Qr.normalizeFromLength(Zr);
        const Wr = Zr * rr,
          ar = Qr.scaleInPlace(.5 * Wr),
          Ir = this.center.subtractToRef(ar, Sr[1]),
          fr = this.center.addToRef(ar, Sr[2]);
        return this.reConstruct(Ir, fr, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(rr) {
        if (rr.isIdentity()) this.centerWorld.iH(this.center), this.radiusWorld = this.radius;
        else {
          Wr.u.TransformCoordinatesToRef(this.center, rr, this.centerWorld);
          const Sr = jr._TmpVector3[0];
          Wr.u.TransformNormalFromFloatsToRef(1, 1, 1, rr, Sr), this.radiusWorld = Math.max(Math.abs(Sr.x), Math.abs(Sr.y), Math.abs(Sr.z)) * this.radius
        }
      }
      isInFrustum(rr) {
        const Sr = this.centerWorld,
          Qr = this.radiusWorld;
        for (let Zr = 0; Zr < 6; Zr++)
          if (rr[Zr].dotCoordinate(Sr) <= -Qr) return !1;
        return !0
      }
      isCenterInFrustum(rr) {
        const Sr = this.centerWorld;
        for (let Qr = 0; Qr < 6; Qr++)
          if (rr[Qr].dotCoordinate(Sr) < 0) return !1;
        return !0
      }
      intersectsPoint(rr) {
        const Sr = Wr.u.DistanceSquared(this.centerWorld, rr);
        return !(this.radiusWorld * this.radiusWorld < Sr)
      }
      static Intersects(rr, Sr) {
        const Qr = Wr.u.DistanceSquared(rr.centerWorld, Sr.centerWorld),
          Zr = rr.radiusWorld + Sr.radiusWorld;
        return !(Zr * Zr < Qr)
      }
      static CreateFromCenterAndRadius(rr, Sr, Qr) {
        this._TmpVector3[0].iH(rr), this._TmpVector3[1].Hrr(0, 0, Sr), this._TmpVector3[2].iH(rr), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].iWr(this._TmpVector3[1]);
        const Zr = new jr(this._TmpVector3[0], this._TmpVector3[2]);
        return Zr._worldMatrix = Qr || Wr.d.Identity(), Zr
      }
    }
    jr._TmpVector3 = (0, Zr.e)(3, Wr.u.Zero);
    const Ir = {
        min: 0,
        max: 0
      },
      fr = {
        min: 0,
        max: 0
      },
      Er = (rr, Sr, Qr) => {
        const Zr = Wr.u.Dot(Sr.centerWorld, rr),
          ar = Math.abs(Wr.u.Dot(Sr.directions[0], rr)) * Sr.extendSize.x + Math.abs(Wr.u.Dot(Sr.directions[1], rr)) * Sr.extendSize.y + Math.abs(Wr.u.Dot(Sr.directions[2], rr)) * Sr.extendSize.z;
        Qr.min = Zr - ar, Qr.max = Zr + ar
      },
      pr = (rr, Sr, Qr) => (Er(rr, Sr, Ir), Er(rr, Qr, fr), !(Ir.min > fr.max || fr.min > Ir.max));
    class xr {
      constructor(rr, Sr, Qr) {
        this._isLocked = !1, this.boundingBox = new ar.d(rr, Sr, Qr), this.oWr = new jr(rr, Sr, Qr)
      }
      reConstruct(rr, Sr, Qr) {
        this.boundingBox.reConstruct(rr, Sr, Qr), this.oWr.reConstruct(rr, Sr, Qr)
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
      set isLocked(rr) {
        this._isLocked = rr
      }
      update(rr) {
        this._isLocked || (this.boundingBox._update(rr), this.oWr._update(rr))
      }
      centerOn(rr, Sr) {
        const Qr = xr._TmpVector3[0].iH(rr).iWr(Sr),
          Zr = xr._TmpVector3[1].iH(rr).addInPlace(Sr);
        return this.boundingBox.reConstruct(Qr, Zr, this.boundingBox.getWorldMatrix()), this.oWr.reConstruct(Qr, Zr, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(rr) {
        const Sr = Wr.u.Minimize(this.minimum, rr),
          Qr = Wr.u.Maximize(this.maximum, rr);
        return this.reConstruct(Sr, Qr, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(rr) {
        const Sr = Wr.n.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Sr);
        const Qr = Wr.n.kU[0];
        return Wr.u.TransformCoordinatesToRef(rr.boundingBox.minimumWorld, Sr, Qr), this.encapsulate(Qr), Wr.u.TransformCoordinatesToRef(rr.boundingBox.maximumWorld, Sr, Qr), this.encapsulate(Qr), this
      }
      scale(rr) {
        return this.boundingBox.scale(rr), this.oWr.scale(rr), this
      }
      isInFrustum(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Sr || 3 === Sr) && this.oWr.isCenterInFrustum(rr)) return !0;
        if (!this.oWr.isInFrustum(rr)) return !1;
        return !(1 !== Sr && 3 !== Sr) || this.boundingBox.isInFrustum(rr)
      }
      get diagonalLength() {
        const rr = this.boundingBox;
        return rr.maximumWorld.subtractToRef(rr.minimumWorld, xr._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(rr) {
        return this.boundingBox.isCompletelyInFrustum(rr)
      }
      _checkCollision(rr) {
        return rr._canDoCollision(this.oWr.centerWorld, this.oWr.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(rr) {
        return !!this.oWr.centerWorld && (!!this.oWr.intersectsPoint(rr) && !!this.boundingBox.intersectsPoint(rr))
      }
      intersects(rr, Sr) {
        if (!jr.Intersects(this.oWr, rr.oWr)) return !1;
        if (!ar.d.Intersects(this.boundingBox, rr.boundingBox)) return !1;
        if (!Sr) return !0;
        const Qr = this.boundingBox,
          Zr = rr.boundingBox;
        return !!pr(Qr.directions[0], Qr, Zr) && (!!pr(Qr.directions[1], Qr, Zr) && (!!pr(Qr.directions[2], Qr, Zr) && (!!pr(Zr.directions[0], Qr, Zr) && (!!pr(Zr.directions[1], Qr, Zr) && (!!pr(Zr.directions[2], Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[0], Zr.directions[0]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[0], Zr.directions[1]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[0], Zr.directions[2]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[1], Zr.directions[0]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[1], Zr.directions[1]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[1], Zr.directions[2]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[2], Zr.directions[0]), Qr, Zr) && (!!pr(Wr.u.Cross(Qr.directions[2], Zr.directions[1]), Qr, Zr) && !!pr(Wr.u.Cross(Qr.directions[2], Zr.directions[2]), Qr, Zr))))))))))))))
      }
    }
    xr._TmpVector3 = (0, Zr.e)(2, Wr.u.Zero)
  },
  42174: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      e: () => fr,
      g: () => Ir,
      h: () => jr
    });
    var Zr = Qr(42005),
      Wr = Qr(38560);

    function ar(rr) {
      -1 === rr.indexOf("vClipPlane") && rr.push("vClipPlane"), -1 === rr.indexOf("vClipPlane2") && rr.push("vClipPlane2"), -1 === rr.indexOf("vClipPlane3") && rr.push("vClipPlane3"), -1 === rr.indexOf("vClipPlane4") && rr.push("vClipPlane4"), -1 === rr.indexOf("vClipPlane5") && rr.push("vClipPlane5"), -1 === rr.indexOf("vClipPlane6") && rr.push("vClipPlane6")
    }

    function jr(rr, Sr, Qr) {
      const Zr = !!(rr.clipPlane ?? Sr.clipPlane),
        Wr = !!(rr.clipPlane2 ?? Sr.clipPlane2),
        ar = !!(rr.clipPlane3 ?? Sr.clipPlane3),
        jr = !!(rr.clipPlane4 ?? Sr.clipPlane4),
        Ir = !!(rr.clipPlane5 ?? Sr.clipPlane5),
        fr = !!(rr.clipPlane6 ?? Sr.clipPlane6);
      Zr && Qr.push("#define CLIPPLANE"), Wr && Qr.push("#define CLIPPLANE2"), ar && Qr.push("#define CLIPPLANE3"), jr && Qr.push("#define CLIPPLANE4"), Ir && Qr.push("#define CLIPPLANE5"), fr && Qr.push("#define CLIPPLANE6")
    }

    function Ir(rr, Sr, Qr) {
      let Zr = !1;
      const Wr = !!(rr.clipPlane ?? Sr.clipPlane),
        ar = !!(rr.clipPlane2 ?? Sr.clipPlane2),
        jr = !!(rr.clipPlane3 ?? Sr.clipPlane3),
        Ir = !!(rr.clipPlane4 ?? Sr.clipPlane4),
        fr = !!(rr.clipPlane5 ?? Sr.clipPlane5),
        Er = !!(rr.clipPlane6 ?? Sr.clipPlane6);
      return Qr.CLIPPLANE !== Wr && (Qr.CLIPPLANE = Wr, Zr = !0), Qr.CLIPPLANE2 !== ar && (Qr.CLIPPLANE2 = ar, Zr = !0), Qr.CLIPPLANE3 !== jr && (Qr.CLIPPLANE3 = jr, Zr = !0), Qr.CLIPPLANE4 !== Ir && (Qr.CLIPPLANE4 = Ir, Zr = !0), Qr.CLIPPLANE5 !== fr && (Qr.CLIPPLANE5 = fr, Zr = !0), Qr.CLIPPLANE6 !== Er && (Qr.CLIPPLANE6 = Er, Zr = !0), Zr
    }

    function fr(rr, Sr, Qr) {
      let Zr = Sr.clipPlane ?? Qr.clipPlane;
      Er(rr, "vClipPlane", Zr), Zr = Sr.clipPlane2 ?? Qr.clipPlane2, Er(rr, "vClipPlane2", Zr), Zr = Sr.clipPlane3 ?? Qr.clipPlane3, Er(rr, "vClipPlane3", Zr), Zr = Sr.clipPlane4 ?? Qr.clipPlane4, Er(rr, "vClipPlane4", Zr), Zr = Sr.clipPlane5 ?? Qr.clipPlane5, Er(rr, "vClipPlane5", Zr), Zr = Sr.clipPlane6 ?? Qr.clipPlane6, Er(rr, "vClipPlane6", Zr)
    }

    function Er(rr, Sr, Qr) {
      if (Qr) {
        const ar = Zr.d.eC()?.floatingOriginOffset || Wr.u.ZeroReadOnly;
        rr.setFloat4(Sr, Qr.normal.x, Qr.normal.y, Qr.normal.z, Qr.d + Wr.u.Dot(Qr.normal, ar))
      }
    }
  },
  42192: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(rr, Sr) {
        this._defines[rr] || (rr < this._currentRank && (this._currentRank = rr), rr > this._maxRank && (this._maxRank = rr), this._defines[rr] = new Array), this._defines[rr].push(Sr)
      }
      addCPUSkinningFallback(rr, Sr) {
        this._mesh = Sr, rr < this._currentRank && (this._currentRank = rr), rr > this._maxRank && (this._maxRank = rr)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(rr, Sr) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, rr = rr.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Sr._bonesComputationForcedToCPU = !0;
          const Qr = this._mesh.eC();
          for (let rr = 0; rr < Qr.meshes.length; rr++) {
            const Zr = Qr.meshes[rr];
            if (Zr.material) {
              if (Zr.computeBonesUsingShaders && 0 !== Zr.numBoneInfluencers)
                if (Zr.material.getEffect() === Sr) Zr.computeBonesUsingShaders = !1;
                else if (Zr.jT)
                for (const rr of Zr.jT) {
                  if (rr.effect === Sr) {
                    Zr.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Zr.computeBonesUsingShaders && Zr.numBoneInfluencers > 0 && (Zr.computeBonesUsingShaders = !1)
          }
        } else {
          const Sr = this._defines[this._currentRank];
          if (Sr)
            for (let Qr = 0; Qr < Sr.length; Qr++) rr = rr.replace("#define " + Sr[Qr], "");
          this._currentRank++
        }
        return rr
      }
    }
  },
  42130: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Yr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(41950),
      jr = Qr(38595),
      Ir = Qr(38587),
      fr = Qr(42134),
      Er = Qr(41987),
      pr = Qr(40246),
      xr = Qr(39264),
      mr = Qr(42165),
      Nr = Qr(41889);
    let Ur = (() => {
      var rr;
      let Sr, Qr, ar, jr, Ir, fr, Er, pr, xr, mr, Ur, tr, hr = [];
      return rr = class {
        constructor() {
          this._func = (0, Zr.m)(this, hr), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(rr) {
          this._func = rr
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(rr) {
          this._backFunc = rr
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(rr) {
          this._funcRef = rr
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(rr) {
          this._funcMask = rr
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(rr) {
          this._opStencilFail = rr
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(rr) {
          this._opDepthFail = rr
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(rr) {
          this._opStencilDepthPass = rr
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(rr) {
          this._backOpStencilFail = rr
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(rr) {
          this._backOpDepthFail = rr
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(rr) {
          this._backOpStencilDepthPass = rr
        }
        get mask() {
          return this._mask
        }
        set mask(rr) {
          this._mask = rr
        }
        get enabled() {
          return this._enabled
        }
        set enabled(rr) {
          this._enabled = rr
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(rr) {
          Nr.e.Clone((() => rr), this)
        }
        serialize() {
          return Nr.e.Serialize(this)
        }
        parse(rr, Sr, Qr) {
          Nr.e.Parse((() => this), rr, Sr, Qr)
        }
      }, (() => {
        const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], (0, Zr.k)(rr, null, Sr, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: rr => "func" in rr,
            get: rr => rr.func
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, Qr, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: rr => "backFunc" in rr,
            get: rr => rr.backFunc
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, ar, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: rr => "funcRef" in rr,
            get: rr => rr.funcRef
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, jr, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: rr => "funcMask" in rr,
            get: rr => rr.funcMask
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, Ir, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: rr => "opStencilFail" in rr,
            get: rr => rr.opStencilFail
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, fr, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: rr => "opDepthFail" in rr,
            get: rr => rr.opDepthFail
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, Er, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: rr => "opStencilDepthPass" in rr,
            get: rr => rr.opStencilDepthPass
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, pr, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: rr => "backOpStencilFail" in rr,
            get: rr => rr.backOpStencilFail
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, xr, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: rr => "backOpDepthFail" in rr,
            get: rr => rr.backOpDepthFail
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, mr, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: rr => "backOpStencilDepthPass" in rr,
            get: rr => rr.backOpStencilDepthPass
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, Ur, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: rr => "mask" in rr,
            get: rr => rr.mask
          },
          metadata: Nr
        }, null, hr), (0, Zr.k)(rr, null, tr, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "enabled" in rr,
            get: rr => rr.enabled
          },
          metadata: Nr
        }, null, hr), Nr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nr
        })
      })(), rr
    })();
    var tr = Qr(42167),
      hr = Qr(41796),
      zr = Qr(41769);
    let Yr = (() => {
      var rr;
      let Sr, Qr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr = [],
        or = [],
        br = [],
        Jr = [],
        Dr = [],
        dr = [],
        sr = [],
        ur = [],
        rS = [],
        SS = [],
        QS = [],
        ZS = [],
        WS = [],
        aS = [],
        jS = [],
        IS = [],
        fS = [],
        ES = [],
        pS = [],
        xS = [],
        mS = [],
        NS = [],
        US = [],
        tS = [],
        hS = [],
        zS = [],
        YS = [],
        nS = [],
        eS = [],
        KS = [],
        yS = [],
        BS = [],
        TS = [],
        vS = [],
        OS = [],
        LS = [],
        lS = [],
        XS = [],
        PS = [],
        HS = [],
        qS = [],
        RS = [],
        gS = [],
        CS = [],
        MS = [],
        GS = [],
        kS = [],
        AS = [],
        VS = [],
        iS = [],
        wS = [];
      return rr = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Sr) {
          this._useVertexPulling !== Sr && (this._useVertexPulling = Sr, this.BQr(rr.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(rr) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(Sr) {
          if (this._alpha === Sr) return;
          const Qr = this._alpha;
          this._alpha = Sr, 1 !== Qr && 1 !== Sr || this.BQr(rr.MiscDirtyFlag + rr.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Sr) {
          this._backFaceCulling !== Sr && (this._backFaceCulling = Sr, this.BQr(rr.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Sr) {
          const Qr = Math.max(0, Math.min(0 | Sr, 4));
          this._textureRepetitionMode !== Qr && (this._textureRepetitionMode = Qr, this.BQr(rr.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Sr) {
          this._cullBackFaces !== Sr && (this._cullBackFaces = Sr, this.BQr(rr.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(rr) {
          this._blockDirtyMechanism !== rr && (this._blockDirtyMechanism = rr, rr || this.markDirty())
        }
        atomicMaterialsUpdate(rr) {
          this.blockDirtyMechanism = !0;
          try {
            rr(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(rr) {
          this._onDisposeObserver && this.lC.remove(this._onDisposeObserver), this._onDisposeObserver = this.lC.add(rr)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new jr.d), this._onBindObservable
        }
        set onBind(rr) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(rr)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new jr.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new jr.d), this._onEffectCreatedObservable
        }
        set alphaMode(rr) {
          this._alphaMode[0] = rr
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Qr] !== Sr && (this._alphaMode[Qr] = Sr, this.BQr(rr.TextureDirtyFlag))
        }
        set needDepthPrePass(rr) {
          this._needDepthPrePass !== rr && (this._needDepthPrePass = rr, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(Sr) {
          this._fogEnabled !== Sr && (this._fogEnabled = Sr, this.BQr(rr.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case rr.WireFrameFillMode:
            case rr.LineListDrawMode:
            case rr.LineLoopDrawMode:
            case rr.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(Sr) {
          this.fillMode = Sr ? rr.WireFrameFillMode : rr.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case rr.PointFillMode:
            case rr.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Sr) {
          this.fillMode = Sr ? rr.PointFillMode : rr.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Sr) {
          this._fillMode !== Sr && (this._fillMode = Sr, this.BQr(rr.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(rr) {
          const Sr = this.eC().MU().getCaps().fragmentDepthSupported;
          rr && !Sr && pr.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = rr && Sr, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(rr) {
          this._isVertexOutputInvariant !== rr && (this._isVertexOutputInvariant = rr, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(rr) {
          this._drawWrapper = rr
        }
        constructor(Sr, Qr, Wr) {
          let fr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Zr.m)(this, Fr), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Zr.m)(this, or, void 0), this.uniqueId = ((0, Zr.m)(this, br), (0, Zr.m)(this, Jr, void 0)), this._loadedUniqueId = (0, Zr.m)(this, Dr), this.name = (0, Zr.m)(this, dr, void 0), this.metadata = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, null)), this._internalMetadata = (0, Zr.m)(this, rS), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Zr.m)(this, SS, !1), this.checkReadyOnlyOnce = ((0, Zr.m)(this, QS), (0, Zr.m)(this, ZS, !1)), this.state = ((0, Zr.m)(this, WS), (0, Zr.m)(this, aS, "")), this._alpha = ((0, Zr.m)(this, jS), (0, Zr.m)(this, IS, 1)), this.inspectableCustomProperties = (0, Zr.m)(this, fS), this._backFaceCulling = (0, Zr.m)(this, ES, !0), this._textureRepetitionMode = ((0, Zr.m)(this, pS), (0, Zr.m)(this, xS, 0)), this.textureRepetitionHexTilingParams = ((0, Zr.m)(this, mS), (0, Zr.m)(this, NS, [1, .6, 7, .5])), this._cullBackFaces = ((0, Zr.m)(this, US), (0, Zr.m)(this, tS, !0)), this._blockDirtyMechanism = ((0, Zr.m)(this, hS), !1), this.sideOrientation = (0, Zr.m)(this, zS, null), this.onCompiled = ((0, Zr.m)(this, YS), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.lC = new jr.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Zr.m)(this, nS, [2]), this._needDepthPrePass = ((0, Zr.m)(this, eS), (0, Zr.m)(this, KS, !1)), this.disableDepthWrite = ((0, Zr.m)(this, yS), (0, Zr.m)(this, BS, !1)), this.disableColorWrite = ((0, Zr.m)(this, TS), (0, Zr.m)(this, vS, !1)), this.forceDepthWrite = ((0, Zr.m)(this, OS), (0, Zr.m)(this, LS, !1)), this.depthFunction = ((0, Zr.m)(this, lS), (0, Zr.m)(this, XS, 0)), this.separateCullingPass = ((0, Zr.m)(this, PS), (0, Zr.m)(this, HS, !1)), this._fogEnabled = ((0, Zr.m)(this, qS), (0, Zr.m)(this, RS, !0)), this.pointSize = ((0, Zr.m)(this, gS), (0, Zr.m)(this, CS, 1)), this.zOffset = ((0, Zr.m)(this, MS), (0, Zr.m)(this, GS, 0)), this.zOffsetUnits = ((0, Zr.m)(this, kS), (0, Zr.m)(this, AS, 0)), this.clipPlane = (0, Zr.m)(this, VS), this.stencil = new Ur, this._isVertexOutputInvariant = (0, Zr.m)(this, iS, rr.ForceVertexOutputInvariant), this._materialContext = (0, Zr.m)(this, wS), this._useUBO = !1, this._fillMode = rr.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Sr;
          const pr = Qr || Ir.b.LastCreatedScene;
          pr && (this._scene = pr, this._dirtyCallbacks = {}, this._forceGLSL = fr, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Sr || ar.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.MU().createMaterialContext(), this._drawWrapper = new mr.b(this._scene.MU(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Er.d(this._scene.MU(), void 0, void 0, Sr), this._useUBO = this.eC().MU().supportsUniformBuffers, this._createUniformBuffer(), Wr || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), rr.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const rr = this.eC().MU();
          this._uniformBuffer?.dispose(), rr.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Er.d(rr, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Er.d(this._scene.MU(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(rr) {
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
        isReady(rr, Sr) {
          return !0
        }
        isReadyForSubMesh(rr, Sr, Qr) {
          const Zr = Sr.materialDefines;
          return !!Zr && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Zr, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        eC() {
          return this._scene
        }
        _getEffectiveOrientation(rr) {
          return null !== this.sideOrientation ? this.sideOrientation : rr.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(rr) {
          this._transparencyMode = rr
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === rr.MATERIAL_ALPHABLEND || this._transparencyMode === rr.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === rr.MATERIAL_ALPHATEST || this._transparencyMode === rr.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === rr.MATERIAL_OPAQUE || this._transparencyMode === rr.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(rr) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : rr.visibility < 1 || !this._disableAlphaBlending && (rr.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(rr) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(rr) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Qr = this.eC().meshes;
          for (const rr of Qr)
            if (rr.jT)
              for (const Qr of rr.jT)
                if (Qr.iU() === this)
                  for (const rr of Qr._drawWrappers) rr && this._materialContext === rr.materialContext && (rr._wasPreviouslyReady = !1, rr._wasPreviouslyUsingInstances = null, rr._forceRebindOnNextCall = Sr);
          Sr && this.BQr(rr.AllDirtyFlag)
        }
        _preBind(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Zr = this._scene.MU(),
            Wr = (null == Qr ? this.sideOrientation : Qr) === rr.ClockWiseSideOrientation,
            ar = Sr || this._getDrawWrapper();
          return (0, hr.d)(ar) && ar.materialContext && (ar.materialContext.useVertexPulling = this.useVertexPulling), Zr.enableEffect(ar), Zr.setState(this.backFaceCulling, this.zOffset, !1, Wr, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Wr
        }
        bind(rr, Sr) {}
        buildUniformLayout() {
          const rr = this._uniformBuffer;
          this._eventInfo.ubo = rr, this._callbackPluginEventGeneric(8, this._eventInfo), rr.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(rr, Sr, Qr) {
          const Zr = Qr._drawWrapper;
          this._eventInfo.subMesh = Qr, this._callbackPluginEventBindForSubMesh(this._eventInfo), Zr._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(rr) {}
        bindView(rr) {
          this._useUBO ? this._needToBindSceneUbo = !0 : rr.setMatrix("view", this.eC().getViewMatrix())
        }
        bindViewProjection(rr) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (rr.setMatrix("viewProjection", this.eC().getTransformMatrix()), rr.setMatrix("projection", this.eC().getProjectionMatrix()), rr.setMatrix("inverseProjection", this.eC().getInverseProjectionMatrix()))
        }
        bindEyePosition(rr, Sr) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(rr, Sr)
        }
        _afterBind(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Sr && (this._needToBindSceneUbo = !1, (0, tr.x)(Sr, this.eC().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = rr ? rr.visibility : 1, this._onBindObservable && rr && this._onBindObservable.notifyObservers(rr), this.disableDepthWrite) {
            const rr = this._scene.MU();
            this._cachedDepthWriteState = rr.getDepthWrite(), rr.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const rr = this._scene.MU();
            this._cachedColorWriteState = rr.getColorWrite(), rr.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const rr = this._scene.MU();
            this._cachedDepthFunctionState = rr.getDepthFunction() || 0, rr.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.MU().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.MU().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.MU().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(rr) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = rr, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(rr) {
          return null
        }
        _clonePlugins(Sr, Qr) {
          const Zr = {};
          if (this._serializePlugins(Zr), rr._ParsePlugins(Zr, Sr, this._scene, Qr), this.pluginManager)
            for (const rr of this.pluginManager._plugins) {
              const Qr = Sr.pluginManager.getPlugin(rr.name);
              Qr && rr.copyTo(Qr)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const rr = [];
            for (const Sr in this.meshMap) {
              const Qr = this.meshMap[Sr];
              Qr && rr.push(Qr)
            }
            return rr
          }
          return this._scene.meshes.filter((rr => rr.material === this))
        }
        forceCompilation(rr, Sr, Qr, Zr) {
          const Wr = {
              clipPlane: !1,
              useInstances: !1,
              ...Qr
            },
            ar = this.eC(),
            jr = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Ir = () => {
            if (!this._scene || !this._scene.MU()) return;
            const Qr = ar.clipPlane;
            if (Wr.clipPlane && (ar.clipPlane = new xr.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Qr = !0,
                ar = null;
              if (rr.jT) {
                const Sr = new fr.b(0, 0, 0, 0, 0, rr, void 0, !1, !1);
                Sr.materialDefines && (Sr.materialDefines._renderId = -1), this.isReadyForSubMesh(rr, Sr, Wr.useInstances) || (Sr.effect && Sr.effect.getCompilationError() && Sr.effect.allFallbacksProcessed() ? ar = Sr.effect.getCompilationError() : (Qr = !1, setTimeout(Ir, 16)))
              }
              Qr && (this.allowShaderHotSwapping = jr, ar && Zr && Zr(ar), Sr && Sr(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = jr, Sr && Sr(this)) : setTimeout(Ir, 16);
            Wr.clipPlane && (ar.clipPlane = Qr)
          };
          Ir()
        }
        async forceCompilationAsync(rr, Sr) {
          return await new Promise(((Qr, Zr) => {
            this.forceCompilation(rr, (() => {
              Qr()
            }), Sr, (rr => {
              Zr(rr)
            }))
          }))
        }
        BQr(Sr) {
          this.eC().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (rr._DirtyCallbackArray.length = 0, Sr & rr.ImageProcessingDirtyFlag && rr._DirtyCallbackArray.push(rr._ImageProcessingDirtyCallBack), Sr & rr.TextureDirtyFlag && rr._DirtyCallbackArray.push(rr._TextureDirtyCallBack), Sr & rr.LightDirtyFlag && rr._DirtyCallbackArray.push(rr._LightsDirtyCallBack), Sr & rr.FresnelDirtyFlag && rr._DirtyCallbackArray.push(rr._FresnelDirtyCallBack), Sr & rr.AttributesDirtyFlag && rr._DirtyCallbackArray.push(rr._AttributeDirtyCallBack), Sr & rr.MiscDirtyFlag && rr._DirtyCallbackArray.push(rr._MiscDirtyCallBack), Sr & rr.PrePassDirtyFlag && rr._DirtyCallbackArray.push(rr._PrePassDirtyCallBack), rr._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(rr._RunDirtyCallBacks), this.eC().resetCachedMaterial())
        }
        resetDrawCache() {
          const rr = this.eC().meshes;
          for (const Sr of rr)
            if (Sr.jT)
              for (const rr of Sr.jT) rr.iU() === this && rr.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(rr) {
          const Sr = this.eC();
          if (Sr.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Qr = Sr.meshes;
          for (const Zr of Qr)
            if (Zr.jT)
              for (const Qr of Zr.jT) {
                if ((Qr.iU() || (Sr._hasDefaultMaterial ? Sr.defaultMaterial : null)) === this)
                  for (const Sr of Qr._drawWrappers) Sr && Sr.defines && Sr.defines.markAllAsDirty && this._materialContext === Sr.materialContext && rr(Sr.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.eC().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const rr = this.eC().enablePrePassRenderer();
          rr && rr.BQr()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(rr._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(rr._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(rr._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(rr._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(rr._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(rr._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(rr._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(rr._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(rr._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(rr._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const rr = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.lC.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(rr)
            }))
          }
        }
        setPrePassRenderer(rr) {
          return !1
        }
        dispose(rr, Sr, Qr) {
          const Zr = this.eC();
          if (Zr.stopAnimation(this), Zr.freeProcessedMaterials(), Zr.removeMaterial(this), this._eventInfo.forceDisposeTextures = Sr, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const rr = this._parentContainer.materials.indexOf(this);
            rr > -1 && this._parentContainer.materials.splice(rr, 1), this._parentContainer = null
          }
          if (!0 !== Qr)
            if (this.meshMap)
              for (const Wr in this.meshMap) {
                const rr = this.meshMap[Wr];
                this._disposeMeshResources(rr)
              } else {
                const rr = Zr.meshes;
                for (const Sr of rr) this._disposeMeshResources(Sr)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.lC.notifyObservers(this), this.lC.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(rr) {
          if (!rr) return;
          const Sr = rr.geometry,
            Qr = rr._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (rr.jT && Qr)
              for (const Zr of rr.jT) {
                const rr = Zr._drawWrappers;
                for (let Wr = 0; Wr < rr.length; Wr++) {
                  const ar = rr[Wr]?.effect;
                  if (!ar) continue;
                  Qr[Wr] === this && (Sr?._releaseVertexArrayObject(ar), Zr._removeDrawWrapper(Wr, !0, !0))
                }
              }
          } else Sr?._releaseVertexArrayObject(this._drawWrapper.effect);
          rr.material !== this || rr.Rar || (rr.material = null)
        }
        serialize() {
          const rr = Nr.e.Serialize(this);
          return rr.stencil = this.stencil.serialize(), rr.uniqueId = this.uniqueId, this._serializePlugins(rr), rr
        }
        _serializePlugins(rr) {
          if (rr.plugins = {}, this.pluginManager)
            for (const Sr of this.pluginManager._plugins) Sr.doNotSerialize || (rr.plugins[Sr.getClassName()] = Sr.serialize())
        }
        static ParseAlphaMode(rr, Sr) {
          void 0 !== rr._alphaMode ? Sr._alphaMode = Array.isArray(rr._alphaMode) ? [...rr._alphaMode] : [rr._alphaMode] : void 0 !== rr.alphaMode ? Sr._alphaMode = Array.isArray(rr.alphaMode) ? [...rr.alphaMode] : [rr.alphaMode] : Sr._alphaMode = [2]
        }
        static Parse(Sr, Qr, Zr) {
          if (Sr.customType) {
            if ("BABYLON.PBRMaterial" === Sr.customType && Sr.overloadedAlbedo && (Sr.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return pr.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Sr.customType = "BABYLON.StandardMaterial";
          const Wr = ar.h.Instantiate(Sr.customType).Parse(Sr, Qr, Zr);
          return Wr._loadedUniqueId = Sr.uniqueId, rr.ParseAlphaMode(Sr, Wr), Wr
        }
        static _ParsePlugins(rr, Sr, Qr, Zr) {
          if (rr.plugins)
            for (const Wr in rr.plugins) {
              const jr = rr.plugins[Wr];
              let Ir = Sr.pluginManager?.getPlugin(jr.name);
              if (!Ir) {
                const rr = ar.h.Instantiate("BABYLON." + Wr);
                rr && (Ir = new rr(Sr))
              }
              Ir?.parse(jr, Qr, Zr)
            }
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], zr = [(0, Wr.G)()], Yr = [(0, Wr.G)()], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)("alpha")], Br = [(0, Wr.G)("backFaceCulling")], Tr = [(0, Wr.G)("textureRepetitionMode")], vr = [(0, Wr.G)("textureRepetitionHexTilingParams")], Or = [(0, Wr.G)("cullBackFaces")], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], Xr = [(0, Wr.G)()], Pr = [(0, Wr.G)()], Hr = [(0, Wr.G)()], qr = [(0, Wr.G)()], Rr = [(0, Wr.G)()], gr = [(0, Wr.G)()], Cr = [(0, Wr.G)("fogEnabled")], Mr = [(0, Wr.G)()], Gr = [(0, Wr.G)()], kr = [(0, Wr.G)()], Ar = [(0, Wr.G)()], Vr = [(0, Wr.G)()], ir = [(0, Wr.G)()], wr = [(0, Wr.G)()], cr = [(0, Wr.G)()], (0, Zr.k)(rr, null, Ar, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: rr => "pointsCloud" in rr,
            get: rr => rr.pointsCloud
          },
          metadata: ar
        }, null, Fr), (0, Zr.k)(rr, null, Vr, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "fillMode" in rr,
            get: rr => rr.fillMode
          },
          metadata: ar
        }, null, Fr), (0, Zr.k)(rr, null, ir, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: rr => "useLogarithmicDepth" in rr,
            get: rr => rr.useLogarithmicDepth
          },
          metadata: ar
        }, null, Fr), (0, Zr.k)(rr, null, cr, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "transparencyMode" in rr,
            get: rr => rr.transparencyMode
          },
          metadata: ar
        }, null, Fr), (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: rr => "id" in rr,
            get: rr => rr.id,
            set: (rr, Sr) => {
              rr.id = Sr
            }
          },
          metadata: ar
        }, or, br), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: rr => "uniqueId" in rr,
            get: rr => rr.uniqueId,
            set: (rr, Sr) => {
              rr.uniqueId = Sr
            }
          },
          metadata: ar
        }, Jr, Dr), (0, Zr.k)(null, null, zr, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: rr => "name" in rr,
            get: rr => rr.name,
            set: (rr, Sr) => {
              rr.name = Sr
            }
          },
          metadata: ar
        }, dr, sr), (0, Zr.k)(null, null, Yr, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: rr => "metadata" in rr,
            get: rr => rr.metadata,
            set: (rr, Sr) => {
              rr.metadata = Sr
            }
          },
          metadata: ar
        }, ur, rS), (0, Zr.k)(null, null, nr, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: rr => "checkReadyOnEveryCall" in rr,
            get: rr => rr.checkReadyOnEveryCall,
            set: (rr, Sr) => {
              rr.checkReadyOnEveryCall = Sr
            }
          },
          metadata: ar
        }, SS, QS), (0, Zr.k)(null, null, er, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: rr => "checkReadyOnlyOnce" in rr,
            get: rr => rr.checkReadyOnlyOnce,
            set: (rr, Sr) => {
              rr.checkReadyOnlyOnce = Sr
            }
          },
          metadata: ar
        }, ZS, WS), (0, Zr.k)(null, null, Kr, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: rr => "state" in rr,
            get: rr => rr.state,
            set: (rr, Sr) => {
              rr.state = Sr
            }
          },
          metadata: ar
        }, aS, jS), (0, Zr.k)(null, null, yr, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "_alpha" in rr,
            get: rr => rr._alpha,
            set: (rr, Sr) => {
              rr._alpha = Sr
            }
          },
          metadata: ar
        }, IS, fS), (0, Zr.k)(null, null, Br, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: rr => "_backFaceCulling" in rr,
            get: rr => rr._backFaceCulling,
            set: (rr, Sr) => {
              rr._backFaceCulling = Sr
            }
          },
          metadata: ar
        }, ES, pS), (0, Zr.k)(null, null, Tr, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "_textureRepetitionMode" in rr,
            get: rr => rr._textureRepetitionMode,
            set: (rr, Sr) => {
              rr._textureRepetitionMode = Sr
            }
          },
          metadata: ar
        }, xS, mS), (0, Zr.k)(null, null, vr, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: rr => "textureRepetitionHexTilingParams" in rr,
            get: rr => rr.textureRepetitionHexTilingParams,
            set: (rr, Sr) => {
              rr.textureRepetitionHexTilingParams = Sr
            }
          },
          metadata: ar
        }, NS, US), (0, Zr.k)(null, null, Or, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: rr => "_cullBackFaces" in rr,
            get: rr => rr._cullBackFaces,
            set: (rr, Sr) => {
              rr._cullBackFaces = Sr
            }
          },
          metadata: ar
        }, tS, hS), (0, Zr.k)(null, null, Lr, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: rr => "sideOrientation" in rr,
            get: rr => rr.sideOrientation,
            set: (rr, Sr) => {
              rr.sideOrientation = Sr
            }
          },
          metadata: ar
        }, zS, YS), (0, Zr.k)(null, null, lr, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "_alphaMode" in rr,
            get: rr => rr._alphaMode,
            set: (rr, Sr) => {
              rr._alphaMode = Sr
            }
          },
          metadata: ar
        }, nS, eS), (0, Zr.k)(null, null, Xr, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: rr => "_needDepthPrePass" in rr,
            get: rr => rr._needDepthPrePass,
            set: (rr, Sr) => {
              rr._needDepthPrePass = Sr
            }
          },
          metadata: ar
        }, KS, yS), (0, Zr.k)(null, null, Pr, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: rr => "disableDepthWrite" in rr,
            get: rr => rr.disableDepthWrite,
            set: (rr, Sr) => {
              rr.disableDepthWrite = Sr
            }
          },
          metadata: ar
        }, BS, TS), (0, Zr.k)(null, null, Hr, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: rr => "disableColorWrite" in rr,
            get: rr => rr.disableColorWrite,
            set: (rr, Sr) => {
              rr.disableColorWrite = Sr
            }
          },
          metadata: ar
        }, vS, OS), (0, Zr.k)(null, null, qr, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: rr => "forceDepthWrite" in rr,
            get: rr => rr.forceDepthWrite,
            set: (rr, Sr) => {
              rr.forceDepthWrite = Sr
            }
          },
          metadata: ar
        }, LS, lS), (0, Zr.k)(null, null, Rr, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: rr => "depthFunction" in rr,
            get: rr => rr.depthFunction,
            set: (rr, Sr) => {
              rr.depthFunction = Sr
            }
          },
          metadata: ar
        }, XS, PS), (0, Zr.k)(null, null, gr, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: rr => "separateCullingPass" in rr,
            get: rr => rr.separateCullingPass,
            set: (rr, Sr) => {
              rr.separateCullingPass = Sr
            }
          },
          metadata: ar
        }, HS, qS), (0, Zr.k)(null, null, Cr, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "_fogEnabled" in rr,
            get: rr => rr._fogEnabled,
            set: (rr, Sr) => {
              rr._fogEnabled = Sr
            }
          },
          metadata: ar
        }, RS, gS), (0, Zr.k)(null, null, Mr, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: rr => "pointSize" in rr,
            get: rr => rr.pointSize,
            set: (rr, Sr) => {
              rr.pointSize = Sr
            }
          },
          metadata: ar
        }, CS, MS), (0, Zr.k)(null, null, Gr, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: rr => "zOffset" in rr,
            get: rr => rr.zOffset,
            set: (rr, Sr) => {
              rr.zOffset = Sr
            }
          },
          metadata: ar
        }, GS, kS), (0, Zr.k)(null, null, kr, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: rr => "zOffsetUnits" in rr,
            get: rr => rr.zOffsetUnits,
            set: (rr, Sr) => {
              rr.zOffsetUnits = Sr
            }
          },
          metadata: ar
        }, AS, VS), (0, Zr.k)(null, null, wr, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: rr => "_isVertexOutputInvariant" in rr,
            get: rr => rr._isVertexOutputInvariant,
            set: (rr, Sr) => {
              rr._isVertexOutputInvariant = Sr
            }
          },
          metadata: ar
        }, iS, wS), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr.TriangleFillMode = 0, rr.WireFrameFillMode = 1, rr.PointFillMode = 2, rr.PointListDrawMode = 3, rr.LineListDrawMode = 4, rr.LineLoopDrawMode = 5, rr.LineStripDrawMode = 6, rr.TriangleStripDrawMode = 7, rr.TriangleFanDrawMode = 8, rr.ClockWiseSideOrientation = 0, rr.CounterClockWiseSideOrientation = 1, rr.ImageProcessingDirtyFlag = 64, rr.TextureDirtyFlag = 1, rr.LightDirtyFlag = 2, rr.FresnelDirtyFlag = 4, rr.AttributesDirtyFlag = 8, rr.MiscDirtyFlag = 16, rr.PrePassDirtyFlag = 32, rr.AllDirtyFlag = 127, rr.MATERIAL_OPAQUE = 0, rr.MATERIAL_ALPHATEST = 1, rr.MATERIAL_ALPHABLEND = 2, rr.MATERIAL_ALPHATESTANDBLEND = 3, rr.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, rr.MATERIAL_NORMALBLENDMETHOD_RNM = 1, rr.LIGHTFALLOFF_PHYSICAL = 0, rr.LIGHTFALLOFF_GLTF = 1, rr.LIGHTFALLOFF_STANDARD = 2, rr.OnEventObservable = new jr.d, rr.ForceVertexOutputInvariant = !1, rr._AllDirtyCallBack = rr => rr.markAllAsDirty(), rr._ImageProcessingDirtyCallBack = rr => rr.markAsImageProcessingDirty(), rr._TextureDirtyCallBack = rr => rr.markAsTexturesDirty(), rr._FresnelDirtyCallBack = rr => rr.markAsFresnelDirty(), rr._MiscDirtyCallBack = rr => rr.markAsMiscDirty(), rr._PrePassDirtyCallBack = rr => rr.markAsPrePassDirty(), rr._LightsDirtyCallBack = rr => rr.markAsLightDirty(), rr._AttributeDirtyCallBack = rr => rr.markAsAttributesDirty(), rr._FresnelAndMiscDirtyCallBack = Sr => {
        rr._FresnelDirtyCallBack(Sr), rr._MiscDirtyCallBack(Sr)
      }, rr._TextureAndMiscDirtyCallBack = Sr => {
        rr._TextureDirtyCallBack(Sr), rr._MiscDirtyCallBack(Sr)
      }, rr._DirtyCallbackArray = [], rr._RunDirtyCallBacks = Sr => {
        for (const Qr of rr._DirtyCallbackArray) Qr(Sr)
      }, rr
    })();
    Object.getOwnPropertyDescriptor(Yr.prototype, "pluginManager") || Object.defineProperty(Yr.prototype, "pluginManager", (0, zr.g)("Material", "pluginManager"))
  },
  42178: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(41784);
    class Wr {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(rr) {
        this._DiffuseTextureEnabled !== rr && (this._DiffuseTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(rr) {
        this._BaseWeightTextureEnabled !== rr && (this._BaseWeightTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(rr) {
        this._BaseDiffuseRoughnessTextureEnabled !== rr && (this._BaseDiffuseRoughnessTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(rr) {
        this._DetailTextureEnabled !== rr && (this._DetailTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(rr) {
        this._DecalMapEnabled !== rr && (this._DecalMapEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(rr) {
        this._AmbientTextureEnabled !== rr && (this._AmbientTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(rr) {
        this._OpacityTextureEnabled !== rr && (this._OpacityTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(rr) {
        this._ReflectionTextureEnabled !== rr && (this._ReflectionTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(rr) {
        this._EmissiveTextureEnabled !== rr && (this._EmissiveTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(rr) {
        this._SpecularTextureEnabled !== rr && (this._SpecularTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(rr) {
        this._BumpTextureEnabled !== rr && (this._BumpTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(rr) {
        this._LightmapTextureEnabled !== rr && (this._LightmapTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(rr) {
        this._RefractionTextureEnabled !== rr && (this._RefractionTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(rr) {
        this._ColorGradingTextureEnabled !== rr && (this._ColorGradingTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(rr) {
        this._FresnelEnabled !== rr && (this._FresnelEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(rr) {
        this._ClearCoatTextureEnabled !== rr && (this._ClearCoatTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(rr) {
        this._ClearCoatBumpTextureEnabled !== rr && (this._ClearCoatBumpTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(rr) {
        this._ClearCoatTintTextureEnabled !== rr && (this._ClearCoatTintTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(rr) {
        this._SheenTextureEnabled !== rr && (this._SheenTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(rr) {
        this._AnisotropicTextureEnabled !== rr && (this._AnisotropicTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(rr) {
        this._ThicknessTextureEnabled !== rr && (this._ThicknessTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(rr) {
        this._RefractionIntensityTextureEnabled !== rr && (this._RefractionIntensityTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(rr) {
        this._TranslucencyIntensityTextureEnabled !== rr && (this._TranslucencyIntensityTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(rr) {
        this._TranslucencyColorTextureEnabled !== rr && (this._TranslucencyColorTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(rr) {
        this._IridescenceTextureEnabled !== rr && (this._IridescenceTextureEnabled = rr, Zr.e.MarkAllMaterialsAsDirty(1))
      }
    }
    Wr._DiffuseTextureEnabled = !0, Wr._BaseWeightTextureEnabled = !0, Wr._BaseDiffuseRoughnessTextureEnabled = !0, Wr._DetailTextureEnabled = !0, Wr._DecalMapEnabled = !0, Wr._AmbientTextureEnabled = !0, Wr._OpacityTextureEnabled = !0, Wr._ReflectionTextureEnabled = !0, Wr._EmissiveTextureEnabled = !0, Wr._SpecularTextureEnabled = !0, Wr._BumpTextureEnabled = !0, Wr._LightmapTextureEnabled = !0, Wr._RefractionTextureEnabled = !0, Wr._ColorGradingTextureEnabled = !0, Wr._FresnelEnabled = !0, Wr._ClearCoatTextureEnabled = !0, Wr._ClearCoatBumpTextureEnabled = !0, Wr._ClearCoatTintTextureEnabled = !0, Wr._SheenTextureEnabled = !0, Wr._AnisotropicTextureEnabled = !0, Wr._ThicknessTextureEnabled = !0, Wr._RefractionIntensityTextureEnabled = !0, Wr._TranslucencyIntensityTextureEnabled = !0, Wr._TranslucencyColorTextureEnabled = !0, Wr._IridescenceTextureEnabled = !0
  },
  42167: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => er,
      C: () => Xr,
      E: () => Kr,
      G: () => Lr,
      I: () => lr,
      K: () => Nr,
      M: () => mr,
      N: () => Vr,
      Q: () => Cr,
      U: () => Rr,
      W: () => qr,
      Y: () => nr,
      Z: () => Pr,
      ab: () => ir,
      b: () => Hr,
      c: () => yr,
      d: () => xr,
      db: () => wr,
      f: () => zr,
      fb: () => cr,
      i: () => Yr,
      jb: () => Jr,
      m: () => Or,
      mb: () => or,
      nb: () => br,
      ob: () => Ur,
      q: () => fr,
      t: () => tr,
      x: () => hr
    });
    var Zr = Qr(40246),
      Wr = Qr(38587),
      ar = Qr(42044),
      jr = Qr(42174),
      Ir = Qr(42178);

    function fr(rr, Sr, Qr) {
      if (!rr || rr.LOGARITHMICDEPTH || rr.indexOf && rr.indexOf("LOGARITHMICDEPTH") >= 0) {
        const rr = Qr.activeCamera;
        1 === rr.mode && Zr.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Sr.setFloat("logarithmicDepthConstant", 2 / (Math.log(rr.maxZ + 1) / Math.LN2))
      }
    }
    const Er = {
        r: 0,
        g: 0,
        b: 0
      },
      pr = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function xr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Qr && rr.fogEnabled && (!Sr || Sr.applyFog) && 0 !== rr.fogMode && (Qr.setFloat4("vFogInfos", rr.fogMode, rr.fogStart, rr.fogEnd, rr.fogDensity), Zr ? (rr.fogColor.toLinearSpaceToRef(Er, rr.MU().useExactSrgbConversions), Qr.setColor3("vFogColor", Er)) : Qr.setColor3("vFogColor", rr.fogColor))
    }

    function mr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
      const xr = rr.numMaxInfluencers || rr.numInfluencers;
      return xr <= 0 ? 0 : (Sr.push("#define MORPHTARGETS"), rr.hasPositions && Sr.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), rr.hasNormals && Sr.push("#define MORPHTARGETTEXTURE_HASNORMALS"), rr.hasTangents && Sr.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), rr.hasUVs && Sr.push("#define MORPHTARGETTEXTURE_HASUVS"), rr.hasUV2s && Sr.push("#define MORPHTARGETTEXTURE_HASUV2S"), rr.hasColors && Sr.push("#define MORPHTARGETTEXTURE_HASCOLORS"), rr.supportsPositions && Wr && Sr.push("#define MORPHTARGETS_POSITION"), rr.supportsNormals && ar && Sr.push("#define MORPHTARGETS_NORMAL"), rr.supportsTangents && jr && Sr.push("#define MORPHTARGETS_TANGENT"), rr.supportsUVs && Ir && Sr.push("#define MORPHTARGETS_UV"), rr.supportsUV2s && fr && Sr.push("#define MORPHTARGETS_UV2"), rr.supportsColors && Er && Sr.push("#define MORPHTARGETS_COLOR"), Sr.push("#define NUM_MORPH_INFLUENCERS " + xr), rr.isUsingTextureForTargets && Sr.push("#define MORPHTARGETS_TEXTURE"), pr.NUM_MORPH_INFLUENCERS = xr, pr.NORMAL = ar, pr.TANGENT = jr, pr.UV = Ir, pr.UV2 = fr, pr.COLOR = Er, Nr(Qr, Zr, pr, Wr), xr)
    }

    function Nr(rr, Sr, Qr) {
      let ar = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const jr = Qr.NUM_MORPH_INFLUENCERS;
      if (jr > 0 && Wr.b.LastCreatedEngine) {
        const Ir = Wr.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          fr = Sr.morphTargetManager;
        if (fr?.isUsingTextureForTargets) return;
        const Er = fr && fr.supportsPositions && ar,
          pr = fr && fr.supportsNormals && Qr.NORMAL,
          xr = fr && fr.supportsTangents && Qr.TANGENT,
          mr = fr && fr.supportsUVs && Qr.UV1,
          Nr = fr && fr.supportsUV2s && Qr.UV2,
          Ur = fr && fr.supportsColors && Qr.VERTEXCOLOR;
        for (let Qr = 0; Qr < jr; Qr++) Er && rr.push("position" + Qr), pr && rr.push("normal" + Qr), xr && rr.push("tangent" + Qr), mr && rr.push("uv_" + Qr), Nr && rr.push("uv2_" + Qr), Ur && rr.push("color" + Qr), rr.length > Ir && Zr.c.Error("Cannot add more vertex attributes for mesh " + Sr.name)
      }
    }

    function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      rr.push("world0"), rr.push("world1"), rr.push("world2"), rr.push("world3"), Sr && (rr.push("previousWorld0"), rr.push("previousWorld1"), rr.push("previousWorld2"), rr.push("previousWorld3"))
    }

    function tr(rr, Sr) {
      const Qr = rr.morphTargetManager;
      rr && Qr && Sr.setFloatArray("morphTargetInfluences", Qr.influences)
    }

    function hr(rr, Sr) {
      Sr.bindToEffect(rr, "Scene")
    }

    function zr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fr = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Er = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        pr = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        xr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        mr = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (rr.texturesEnabled && Wr && Ir.d.ReflectionTextureEnabled) {
        if (Qr.hrr("reflectionMatrix", Wr.getReflectionTextureMatrix()), Qr.updateFloat2("vReflectionInfos", Wr.level * rr.iblIntensity, mr), fr && Wr.boundingBoxSize) {
          const rr = Wr;
          Qr.updateVector3("vReflectionPosition", rr.boundingBoxPosition), Qr.updateVector3("vReflectionSize", rr.boundingBoxSize)
        }
        if (ar) {
          const rr = Wr.getSize().width;
          Qr.updateFloat2("vReflectionFilteringInfo", rr, Math.log2(rr))
        }
        if (pr && !Sr.USEIRRADIANCEMAP) {
          const rr = Wr.sphericalPolynomial;
          if (Sr.USESPHERICALFROMREFLECTIONMAP && rr)
            if (Sr.SPHERICAL_HARMONICS) {
              const Sr = rr.preScaledHarmonics;
              Qr.updateVector3("vSphericalL00", Sr.l00), Qr.updateVector3("vSphericalL1_1", Sr.l1_1), Qr.updateVector3("vSphericalL10", Sr.l10), Qr.updateVector3("vSphericalL11", Sr.l11), Qr.updateVector3("vSphericalL2_2", Sr.l2_2), Qr.updateVector3("vSphericalL2_1", Sr.l2_1), Qr.updateVector3("vSphericalL20", Sr.l20), Qr.updateVector3("vSphericalL21", Sr.l21), Qr.updateVector3("vSphericalL22", Sr.l22)
            } else Qr.updateFloat3("vSphericalX", rr.x.x, rr.x.y, rr.x.z), Qr.updateFloat3("vSphericalY", rr.y.x, rr.y.y, rr.y.z), Qr.updateFloat3("vSphericalZ", rr.z.x, rr.z.y, rr.z.z), Qr.updateFloat3("vSphericalXX_ZZ", rr.xx.x - rr.zz.x, rr.xx.y - rr.zz.y, rr.xx.z - rr.zz.z), Qr.updateFloat3("vSphericalYY_ZZ", rr.yy.x - rr.zz.x, rr.yy.y - rr.zz.y, rr.yy.z - rr.zz.z), Qr.updateFloat3("vSphericalZZ", rr.zz.x, rr.zz.y, rr.zz.z), Qr.updateFloat3("vSphericalXY", rr.xy.x, rr.xy.y, rr.xy.z), Qr.updateFloat3("vSphericalYZ", rr.yz.x, rr.yz.y, rr.yz.z), Qr.updateFloat3("vSphericalZX", rr.zx.x, rr.zx.y, rr.zx.z)
        } else Er && Sr.USEIRRADIANCEMAP && Sr.USE_IRRADIANCE_DOMINANT_DIRECTION && Wr.irradianceTexture && Qr.updateVector3("vReflectionDominantDirection", Wr.irradianceTexture._dominantDirection);
        jr && Qr.updateFloat3("vReflectionMicrosurfaceInfos", Wr.getSize().width, Wr.lodGenerationScale, Wr.lodGenerationOffset)
      }
      xr && Qr.updateColor3("vReflectionColor", Zr)
    }

    function Yr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Zr && Ir.d.ReflectionTextureEnabled) {
        Sr.LODBASEDMICROSFURACE ? Qr.setTexture("reflectionSampler", Zr) : (Qr.setTexture("reflectionSampler", Zr._lodTextureMid || Zr), Qr.setTexture("reflectionSamplerLow", Zr._lodTextureLow || Zr), Qr.setTexture("reflectionSamplerHigh", Zr._lodTextureHigh || Zr)), Sr.USEIRRADIANCEMAP && Qr.setTexture("irradianceSampler", Zr.irradianceTexture);
        const ar = rr.iblCdfGenerator;
        Wr && ar && Qr.setTexture("icdfSampler", ar.getIcdfTexture())
      }
    }

    function nr(rr, Sr, Qr) {
      Sr._needUVs = !0, Sr[Qr] = !0, rr.optimizeUVAllocation && rr.getTextureMatrix().isIdentityAs3x2() ? (Sr[Qr + "DIRECTUV"] = rr.coordinatesIndex + 1, Sr["MAINUV" + (rr.coordinatesIndex + 1)] = !0) : Sr[Qr + "DIRECTUV"] = 0
    }

    function er(rr, Sr, Qr) {
      const Zr = rr.getTextureMatrix();
      Sr.hrr(Qr + "Matrix", Zr)
    }

    function Kr(rr, Sr, Qr) {
      Qr.BAKED_VERTEX_ANIMATION_TEXTURE && Qr.INSTANCES && rr.push("bakedVertexAnimationSettingsInstanced")
    }

    function yr(rr, Sr, Qr) {
      var Zr;
      if (Sr && rr && (rr.computeBonesUsingShaders && Sr._bonesComputationForcedToCPU && (rr.computeBonesUsingShaders = !1), rr.useBones && rr.computeBonesUsingShaders && rr.skeleton)) {
        const Wr = rr.skeleton;
        if (Wr.isUsingTextureForMatrices && Sr.getUniformIndex("boneTextureInfo") > -1) {
          const Qr = Wr.getTransformMatrixTexture(rr);
          Sr.setTexture("boneSampler", Qr), Sr.setFloat2("boneTextureInfo", Wr._textureWidth, Wr._textureHeight)
        } else {
          const ar = Wr.getTransformMatrices(rr);
          ar && (Sr.setMatrices("mBones", ar), Qr && rr.eC().prePassRenderer && rr.eC().prePassRenderer.getIndex(2) && (Qr.previousBones[rr.uniqueId] || (Qr.previousBones[rr.uniqueId] = ar.slice()), Sr.setMatrices("mPreviousBones", Qr.previousBones[rr.uniqueId]), Zr = ar, Qr.previousBones[rr.uniqueId].set(Zr)))
        }
      }
    }

    function Br(rr, Sr, Qr, Zr, Wr) {
      let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      rr._bindLight(Sr, Qr, Zr, Wr, ar)
    }
    const Tr = 4,
      vr = new WeakMap;

    function Or(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const ar = Math.min(Sr.lightSources.length, Wr);
      for (let jr = 0; jr < ar; jr++) {
        Br(Sr.lightSources[jr], jr, rr, Qr, "boolean" === typeof Zr ? Zr : Zr.SPECULARTERM, Sr.receiveShadows)
      }
    }

    function Lr(rr, Sr, Qr, Zr) {
      Qr.NUM_BONE_INFLUENCERS > 0 && (Zr.addCPUSkinningFallback(0, Sr), rr.push("matricesIndices"), rr.push("matricesWeights"), Qr.NUM_BONE_INFLUENCERS > 4 && (rr.push("matricesIndicesExtra"), rr.push("matricesWeightsExtra")))
    }

    function lr(rr, Sr) {
      (Sr.INSTANCES || Sr.THIN_INSTANCES) && Ur(rr, !!Sr.PREPASS_VELOCITY), Sr.INSTANCESCOLOR && rr.push("instanceColor")
    }

    function Xr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wr = 0;
      for (let ar = 0; ar < Qr && rr["LIGHT" + ar]; ar++) ar > 0 && (Wr = Zr + ar, Sr.addFallback(Wr, "LIGHT" + ar)), rr.SHADOWS || (rr["SHADOW" + ar] && Sr.addFallback(Zr, "SHADOW" + ar), rr["SHADOWPCF" + ar] && Sr.addFallback(Zr, "SHADOWPCF" + ar), rr["SHADOWPCSS" + ar] && Sr.addFallback(Zr, "SHADOWPCSS" + ar), rr["SHADOWPOISSON" + ar] && Sr.addFallback(Zr, "SHADOWPOISSON" + ar), rr["SHADOWESM" + ar] && Sr.addFallback(Zr, "SHADOWESM" + ar), rr["SHADOWCLOSEESM" + ar] && Sr.addFallback(Zr, "SHADOWCLOSEESM" + ar));
      return Wr
    }

    function Pr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      let Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Er = arguments.length > 9 ? arguments[9] : void 0,
        pr = arguments.length > 10 ? arguments[10] : void 0;
      if (jr._areMiscDirty) {
        jr.LOGARITHMICDEPTH = Qr, jr.POINTSIZE = Zr, jr.FOG = Wr && function(rr, Sr) {
          return Sr.fogEnabled && rr.applyFog && 0 !== Sr.fogMode
        }(rr, Sr), jr.NONUNIFORMSCALING = rr.nonUniformScaling, jr.ALPHATEST = ar, jr.DECAL_AFTER_DETAIL = Ir, jr.USE_VERTEX_PULLING = fr, jr.RIGHT_HANDED = Sr.useRightHandedSystem;
        const xr = fr ? Er?.geometry?.getIndexBuffer() : null,
          mr = !!Er && Er.isUnIndexed;
        jr.VERTEX_PULLING_USE_INDEX_BUFFER = !!xr && !mr, jr.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!xr || mr) && xr.is32Bits, jr.VERTEXOUTPUT_INVARIANT = !!pr
      }
    }

    function Hr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!rr.lightsEnabled || Zr) return !0;
      const Wr = Sr.lightSources,
        ar = Math.min(Wr.length, Qr);
      for (let jr = 0; jr < ar; jr++)
        if (!Wr[jr].areLightTexturesReady()) return !1;
      return !0
    }

    function qr(rr, Sr, Qr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Qr._areLightsDirty) return Qr._needNormals;
      const Ir = ar;
      ar = function(rr, Sr) {
        const Qr = rr.MU().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Qr) return Sr;
        const Zr = Math.max(Qr - Tr, 1);
        return Math.min(Sr, Zr)
      }(rr, ar);
      let fr = 0;
      const Er = {
        needNormals: Qr._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (rr.lightsEnabled && !jr) {
        Sr.lightSources.length > ar && ar < Ir && function(rr, Sr, Qr, Wr) {
          let ar = vr.get(rr);
          ar || (ar = new Set, vr.set(rr, ar)), ar.has(Wr) || (ar.add(Wr), Zr.c.Warn(`maxSimultaneousLights is ${Sr} but this engine supports at most ${Qr} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Wr} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Wr+Tr} uniform buffers, over the device limit of ${rr.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Qr}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Qr} or less to silence this warning.`))
        }(rr.MU(), Ir, ar, Math.min(Sr.lightSources.length, Ir));
        for (const Zr of Sr.lightSources)
          if (gr(rr, Sr, Zr, fr, Qr, Wr, Er), fr++, fr === ar) break
      }
      Qr.SPECULARTERM = Er.specularEnabled, Qr.SHADOWS = Er.shadowEnabled;
      const pr = Math.max(ar, Qr.MAXLIGHTCOUNT || 0);
      for (let Zr = fr; Zr < pr; Zr++) void 0 !== Qr["LIGHT" + Zr] && (Qr["LIGHT" + Zr] = !1, Qr["HEMILIGHT" + Zr] = !1, Qr["POINTLIGHT" + Zr] = !1, Qr["DIRLIGHT" + Zr] = !1, Qr["SPOTLIGHT" + Zr] = !1, Qr["AREALIGHT" + Zr] = !1, Qr["CLUSTLIGHT" + Zr] = !1, Qr["SHADOW" + Zr] = !1, Qr["SHADOWCSM" + Zr] = !1, Qr["SHADOWCSMDEBUG" + Zr] = !1, Qr["SHADOWCSMNUM_CASCADES" + Zr] = !1, Qr["SHADOWCSMUSESHADOWMAXZ" + Zr] = !1, Qr["SHADOWCSMNOBLEND" + Zr] = !1, Qr["SHADOWCSM_RIGHTHANDED" + Zr] = !1, Qr["SHADOWPCF" + Zr] = !1, Qr["SHADOWPCSS" + Zr] = !1, Qr["SHADOWPOISSON" + Zr] = !1, Qr["SHADOWESM" + Zr] = !1, Qr["SHADOWCLOSEESM" + Zr] = !1, Qr["SHADOWCUBE" + Zr] = !1, Qr["SHADOWLOWQUALITY" + Zr] = !1, Qr["SHADOWMEDIUMQUALITY" + Zr] = !1);
      Qr.LIGHTCOUNT = fr, Qr.MAXLIGHTCOUNT = ar;
      const xr = rr.MU().getCaps();
      return void 0 === Qr.SHADOWFLOAT && (Er.needRebuild = !0), Qr.SHADOWFLOAT = Er.shadowEnabled && (xr.textureFloatRender && xr.textureFloatLinearFiltering || xr.textureHalfFloatRender && xr.textureHalfFloatLinearFiltering), Qr.LIGHTMAPEXCLUDED = Er.lightmapMode, Er.needRebuild && Qr.rebuild(), Er.needNormals
    }

    function Rr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Sr && Ir.d.ReflectionTextureEnabled) {
        if (!Sr.isReadyOrNotBlocking()) return !1;
        Qr._needNormals = !0, Qr.REFLECTION = !0, Qr.GAMMAREFLECTION = Sr.gammaSpace, Qr.RGBDREFLECTION = Sr.isRGBD, Qr.LODINREFLECTIONALPHA = Sr.lodLevelInAlpha, Qr.LINEARSPECULARREFLECTION = Sr.linearSpecularLOD, Qr.USEIRRADIANCEMAP = !1, Qr.LODBASEDMICROSFURACE = rr.MU().getCaps().textureLOD;
        const jr = rr.MU();
        switch (Zr && Wr > 0 ? (Qr.NUM_SAMPLES = "" + Wr, jr._features.needTypeSuffixInShaderConstants && (Qr.NUM_SAMPLES = Qr.NUM_SAMPLES + "u"), Qr.REALTIME_FILTERING = !0, rr.iblCdfGenerator && (Qr.IBL_CDF_FILTERING = !0)) : Qr.REALTIME_FILTERING = !1, Qr.INVERTCUBICMAP = 6 === Sr.coordinatesMode, Qr.REFLECTIONMAP_3D = Sr.isCube, Qr.REFLECTIONMAP_OPPOSITEZ = Qr.REFLECTIONMAP_3D && rr.useRightHandedSystem ? !Sr.invertZ : Sr.invertZ, Qr.REFLECTIONMAP_CUBIC = !1, Qr.REFLECTIONMAP_EXPLICIT = !1, Qr.REFLECTIONMAP_PLANAR = !1, Qr.REFLECTIONMAP_PROJECTION = !1, Qr.REFLECTIONMAP_SKYBOX = !1, Qr.REFLECTIONMAP_SPHERICAL = !1, Qr.REFLECTIONMAP_EQUIRECTANGULAR = !1, Qr.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Qr.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Sr.coordinatesMode) {
          case 0:
            Qr.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Qr.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Qr.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Qr.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Qr.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Qr.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Qr.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Qr.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Qr.REFLECTIONMAP_CUBIC = !0, Qr.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Sr.boundingBoxSize
        }
        5 !== Sr.coordinatesMode && (Sr.irradianceTexture ? (Qr.USEIRRADIANCEMAP = !0, Qr.USESPHERICALFROMREFLECTIONMAP = !1, Qr.USESPHERICALINVERTEX = !1, Sr.irradianceTexture._dominantDirection ? Qr.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Qr.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Sr.isCube && (Qr.USESPHERICALFROMREFLECTIONMAP = !0, Qr.USEIRRADIANCEMAP = !1, Qr.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Qr.USESPHERICALINVERTEX = ar))
      } else Qr.REFLECTION = !1, Qr.REFLECTIONMAP_3D = !1, Qr.REFLECTIONMAP_SPHERICAL = !1, Qr.REFLECTIONMAP_PLANAR = !1, Qr.REFLECTIONMAP_CUBIC = !1, Qr.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Qr.REFLECTIONMAP_PROJECTION = !1, Qr.REFLECTIONMAP_SKYBOX = !1, Qr.REFLECTIONMAP_EXPLICIT = !1, Qr.REFLECTIONMAP_EQUIRECTANGULAR = !1, Qr.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Qr.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Qr.INVERTCUBICMAP = !1, Qr.USESPHERICALFROMREFLECTIONMAP = !1, Qr.USEIRRADIANCEMAP = !1, Qr.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Qr.USESPHERICALINVERTEX = !1, Qr.REFLECTIONMAP_OPPOSITEZ = !1, Qr.LODINREFLECTIONALPHA = !1, Qr.GAMMAREFLECTION = !1, Qr.RGBDREFLECTION = !1, Qr.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function gr(rr, Sr, Qr, Zr, Wr, jr, Ir) {
      switch (Ir.needNormals = !0, void 0 === Wr["LIGHT" + Zr] && (Ir.needRebuild = !0), Wr["LIGHT" + Zr] = !0, Wr["SPOTLIGHT" + Zr] = !1, Wr["HEMILIGHT" + Zr] = !1, Wr["POINTLIGHT" + Zr] = !1, Wr["DIRLIGHT" + Zr] = !1, Wr["AREALIGHT" + Zr] = !1, Wr["CLUSTLIGHT" + Zr] = !1, Qr.prepareLightSpecificDefines(Wr, Zr), Wr["LIGHT_FALLOFF_PHYSICAL" + Zr] = !1, Wr["LIGHT_FALLOFF_GLTF" + Zr] = !1, Wr["LIGHT_FALLOFF_STANDARD" + Zr] = !1, Qr.falloffType) {
        case ar.b.FALLOFF_GLTF:
          Wr["LIGHT_FALLOFF_GLTF" + Zr] = !0;
          break;
        case ar.b.FALLOFF_PHYSICAL:
          Wr["LIGHT_FALLOFF_PHYSICAL" + Zr] = !0;
          break;
        case ar.b.FALLOFF_STANDARD:
          Wr["LIGHT_FALLOFF_STANDARD" + Zr] = !0
      }
      if (jr && !Qr.specular.equalsFloats(0, 0, 0) && (Ir.specularEnabled = !0), Wr["SHADOW" + Zr] = !1, Wr["SHADOWCSM" + Zr] = !1, Wr["SHADOWCSMDEBUG" + Zr] = !1, Wr["SHADOWCSMNUM_CASCADES" + Zr] = !1, Wr["SHADOWCSMUSESHADOWMAXZ" + Zr] = !1, Wr["SHADOWCSMNOBLEND" + Zr] = !1, Wr["SHADOWCSM_RIGHTHANDED" + Zr] = !1, Wr["SHADOWPCF" + Zr] = !1, Wr["SHADOWPCSS" + Zr] = !1, Wr["SHADOWPOISSON" + Zr] = !1, Wr["SHADOWESM" + Zr] = !1, Wr["SHADOWCLOSEESM" + Zr] = !1, Wr["SHADOWCUBE" + Zr] = !1, Wr["SHADOWLOWQUALITY" + Zr] = !1, Wr["SHADOWMEDIUMQUALITY" + Zr] = !1, Sr && Sr.receiveShadows && rr.shadowsEnabled && Qr.shadowEnabled) {
        const Sr = Qr.getShadowGenerator(rr.activeCamera) ?? Qr.getShadowGenerator();
        if (Sr) {
          const rr = Sr.getShadowMap();
          rr && rr.renderList && rr.renderList.length > 0 && (Ir.shadowEnabled = !0, Sr.prepareDefines(Wr, Zr))
        }
      }
      Qr.lightmapMode != ar.b.LIGHTMAP_DEFAULT ? (Ir.lightmapMode = !0, Wr["LIGHTMAPEXCLUDED" + Zr] = !0, Wr["LIGHTMAPNOSPECULAR" + Zr] = Qr.lightmapMode == ar.b.LIGHTMAP_SHADOWSONLY) : (Wr["LIGHTMAPEXCLUDED" + Zr] = !1, Wr["LIGHTMAPNOSPECULAR" + Zr] = !1)
    }

    function Cr(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fr = function(rr, Sr) {
          let Qr = !1;
          if (rr.activeCamera) {
            const Zr = Sr.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Wr = Sr.CAMERA_PERSPECTIVE ? 1 : 0,
              ar = 1 === rr.activeCamera.mode ? 1 : 0,
              jr = 0 === rr.activeCamera.mode ? 1 : 0;
            (Zr ^ ar || Wr ^ jr) && (Sr.CAMERA_ORTHOGRAPHIC = 1 === ar, Sr.CAMERA_PERSPECTIVE = 1 === jr, Qr = !0)
          }
          return Qr
        }(rr, Zr);
      !1 !== ar && (fr = (0, jr.g)(Qr, rr, Zr)), Zr.DEPTHPREPASS !== !Sr.getColorWrite() && (Zr.DEPTHPREPASS = !Zr.DEPTHPREPASS, fr = !0), Zr.INSTANCES !== Wr && (Zr.INSTANCES = Wr, fr = !0), Zr.THIN_INSTANCES !== Ir && (Zr.THIN_INSTANCES = Ir, fr = !0), fr && Zr.markAsUnprocessed()
    }
    const Mr = 40,
      Gr = 64,
      kr = new WeakMap,
      Ar = new WeakSet;

    function Vr(rr, Sr, Qr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Ir = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Sr._areAttributesDirty && Sr._needNormals === Sr._normals && Sr._needUVs === Sr._uvs) return !1;
      Sr._normals = Sr._needNormals, Sr._uvs = Sr._needUVs, Sr.NORMAL = Sr._needNormals && rr.isVerticesDataPresent("normal"), Sr._needNormals && rr.isVerticesDataPresent("tangent") && (Sr.TANGENT = !0);
      for (let Zr = 1; Zr <= 6; ++Zr) Sr["UV" + Zr] = !!Sr._needUVs && rr.isVerticesDataPresent(`uv${1===Zr?"":Zr}`);
      if (Qr) {
        const Qr = rr.useVertexColors && rr.isVerticesDataPresent("color");
        Sr.VERTEXCOLOR = Qr, Sr.VERTEXALPHA = rr.hasVertexAlpha && Qr && jr
      }
      return rr.isVerticesDataPresent("instanceColor") && (rr.Har || rr.hasThinInstances) && (Sr.INSTANCESCOLOR = !0), Wr && function(rr, Sr) {
        if (rr.useBones && rr.computeBonesUsingShaders && rr.skeleton) {
          Sr.NUM_BONE_INFLUENCERS = rr.numBoneInfluencers;
          const Qr = void 0 !== Sr.BONETEXTURE;
          if (rr.skeleton.isUsingTextureForMatrices && Qr) Sr.BONETEXTURE = !0;
          else {
            Sr.BonesPerMesh = rr.skeleton.bones.length + 1, Sr.BONETEXTURE = !Qr && void 0;
            const Wr = rr.eC(),
              ar = Wr.prePassRenderer;
            if (ar && ar.enabled) {
              const Qr = -1 === ar.excludedSkinnedMesh.indexOf(rr);
              Sr.BONES_VELOCITY_ENABLED = Qr
            }
            const jr = !0 === Sr.MULTIVIEW,
              Ir = 2 * Sr.BonesPerMesh + (jr ? 1 : 0);
            if (kr.get(rr.skeleton) !== Ir) {
              kr.set(rr.skeleton, Ir);
              const Qr = Wr.MU().getCaps().maxVertexUniformVectors;
              if (Qr && !Ar.has(rr.skeleton)) {
                const Wr = 4 * Sr.BonesPerMesh,
                  ar = jr ? Gr : Mr,
                  Ir = Math.max(Qr - ar, 0);
                (Wr > Ir || jr && 3 * Wr > Qr) && (Ar.add(rr.skeleton), Zr.c.Warn(`Skeleton "${rr.skeleton.name}": ${rr.skeleton.bones.length} bones stored as vertex uniforms use ${Wr} of ~${Ir} usable uniform vectors${jr?" (multiview)":""} on a device reporting ${Qr}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Sr.NUM_BONE_INFLUENCERS = 0, Sr.BonesPerMesh = 0, void 0 !== Sr.BONETEXTURE && (Sr.BONETEXTURE = !1)
      }(rr, Sr), ar && function(rr, Sr) {
        const Qr = rr.morphTargetManager;
        Qr ? (Sr.MORPHTARGETS_UV = Qr.supportsUVs && Sr.UV1, Sr.MORPHTARGETS_UV2 = Qr.supportsUV2s && Sr.UV2, Sr.MORPHTARGETS_TANGENT = Qr.supportsTangents && Sr.TANGENT, Sr.MORPHTARGETS_NORMAL = Qr.supportsNormals && Sr.NORMAL, Sr.MORPHTARGETS_POSITION = Qr.supportsPositions, Sr.MORPHTARGETS_COLOR = Qr.supportsColors, Sr.MORPHTARGETTEXTURE_HASUVS = Qr.hasUVs, Sr.MORPHTARGETTEXTURE_HASUV2S = Qr.hasUV2s, Sr.MORPHTARGETTEXTURE_HASTANGENTS = Qr.hasTangents, Sr.MORPHTARGETTEXTURE_HASNORMALS = Qr.hasNormals, Sr.MORPHTARGETTEXTURE_HASPOSITIONS = Qr.hasPositions, Sr.MORPHTARGETTEXTURE_HASCOLORS = Qr.hasColors, Sr.NUM_MORPH_INFLUENCERS = Qr.numMaxInfluencers || Qr.numInfluencers, Sr.MORPHTARGETS = Sr.NUM_MORPH_INFLUENCERS > 0, Sr.MORPHTARGETS_TEXTURE = Qr.isUsingTextureForTargets) : (Sr.MORPHTARGETS_UV = !1, Sr.MORPHTARGETS_UV2 = !1, Sr.MORPHTARGETS_TANGENT = !1, Sr.MORPHTARGETS_NORMAL = !1, Sr.MORPHTARGETS_POSITION = !1, Sr.MORPHTARGETS_COLOR = !1, Sr.MORPHTARGETTEXTURE_HASUVS = !1, Sr.MORPHTARGETTEXTURE_HASUV2S = !1, Sr.MORPHTARGETTEXTURE_HASTANGENTS = !1, Sr.MORPHTARGETTEXTURE_HASNORMALS = !1, Sr.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Sr.MORPHTARGETTEXTURE_HAS_COLORS = !1, Sr.MORPHTARGETS = !1, Sr.NUM_MORPH_INFLUENCERS = 0)
      }(rr, Sr), Ir && function(rr, Sr) {
        const Qr = rr.bakedVertexAnimationManager;
        Sr.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Qr || !Qr.isEnabled)
      }(rr, Sr), !0
    }

    function ir(rr, Sr) {
      if (rr.activeCamera) {
        const Qr = Sr.MULTIVIEW;
        Sr.MULTIVIEW = null !== rr.activeCamera.outputRenderTarget && rr.activeCamera.outputRenderTarget.getViewCount() > 1, Sr.MULTIVIEW != Qr && Sr.markAsUnprocessed()
      }
    }

    function wr(rr, Sr, Qr) {
      const Zr = Sr.ORDER_INDEPENDENT_TRANSPARENCY,
        Wr = Sr.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Sr.ORDER_INDEPENDENT_TRANSPARENCY = rr.useOrderIndependentTransparency && Qr, Sr.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !rr.MU().getCaps().textureFloatLinearFiltering, Zr === Sr.ORDER_INDEPENDENT_TRANSPARENCY && Wr === Sr.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Sr.markAsUnprocessed()
    }

    function cr(rr, Sr, Qr) {
      const Zr = Sr.PREPASS;
      if (!Sr._arePrePassDirty) return;
      const Wr = [{
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
      if (rr.prePassRenderer && rr.prePassRenderer.enabled && Qr) {
        Sr.PREPASS = !0, Sr.SCENE_MRT_COUNT = rr.prePassRenderer.mrtCount, Sr.PREPASS_NORMAL_WORLDSPACE = rr.prePassRenderer.generateNormalsInWorldSpace, Sr.PREPASS_COLOR = !0, Sr.PREPASS_COLOR_INDEX = 0;
        for (let Qr = 0; Qr < Wr.length; Qr++) {
          const Zr = rr.prePassRenderer.getIndex(Wr[Qr].type); - 1 !== Zr ? (Sr[Wr[Qr].define] = !0, Sr[Wr[Qr].index] = Zr) : Sr[Wr[Qr].define] = !1
        }
      } else {
        Sr.PREPASS = !1;
        for (let rr = 0; rr < Wr.length; rr++) Sr[Wr[rr].define] = !1
      }
      Sr.PREPASS != Zr && (Sr.markAsUnprocessed(), Sr.markAsImageProcessingDirty())
    }

    function Fr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Er = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Wr && Wr.push("Light" + rr), ar || (Sr.push("vLightData" + rr, "vLightDiffuse" + rr, "vLightSpecular" + rr, "vLightDirection" + rr, "vLightWidth" + rr, "vLightHeight" + rr, "vLightFalloff" + rr, "vLightGround" + rr, "vSliceData" + rr, "vSliceRanges" + rr, "lightMatrix" + rr, "shadowsInfo" + rr, "depthValues" + rr), Qr.push("shadowTexture" + rr), Qr.push("depthTexture" + rr), Sr.push("viewFrustumZ" + rr, "cascadeBlendFactor" + rr, "lightSizeUVCorrection" + rr, "depthCorrection" + rr, "penumbraDarkness" + rr, "frustumLengths" + rr), Zr && (Qr.push("projectionLightTexture" + rr), Sr.push("textureProjectionMatrix" + rr)), jr && Qr.push("iesLightTexture" + rr), fr && Qr.push("rectAreaLightEmissionTexture" + rr), Ir && (Qr.push("lightDataTexture" + rr), Er || Qr.push("tileMaskTexture" + rr)))
    }

    function or(rr, Sr, Qr) {
      const Zr = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Qr && Zr.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), rr.push(...Zr);
      Sr.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function br(rr, Sr, Qr) {
      let Zr, Wr, ar = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        jr = null;
      if (rr.uniformsNames) {
        const Ir = rr;
        Zr = Ir.uniformsNames, Wr = Ir.uniformBuffersNames, Sr = Ir.samplers, Qr = Ir.defines, ar = Ir.maxSimultaneousLights || 0, jr = Ir.shaderLanguage ?? null
      } else Zr = rr, Sr || (Sr = []);
      for (let Ir = 0; Ir < ar && Qr["LIGHT" + Ir]; Ir++) Fr(Ir, Zr, Sr, Qr["PROJECTEDLIGHTTEXTURE" + Ir], Wr, !1, Qr["IESLIGHTTEXTURE" + Ir], Qr["CLUSTLIGHT" + Ir], Qr["RECTAREALIGHTEMISSIONTEXTURE" + Ir], 1 === jr);
      Qr.NUM_MORPH_INFLUENCERS && (Zr.push("morphTargetInfluences"), Zr.push("morphTargetCount")), Qr.BAKED_VERTEX_ANIMATION_TEXTURE && (Zr.push("bakedVertexAnimationSettings"), Zr.push("bakedVertexAnimationTextureSizeInverted"), Zr.push("bakedVertexAnimationTime"), Sr.push("bakedVertexAnimationTexture"))
    }

    function Jr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      rr.addUniform("vReflectionInfos", 2), rr.addUniform("reflectionMatrix", 16), Sr && rr.addUniform("vReflectionMicrosurfaceInfos", 3), Qr && (rr.addUniform("vReflectionPosition", 3), rr.addUniform("vReflectionSize", 3)), Zr && (rr.addUniform("vReflectionFilteringInfo", 2), rr.addUniform("vReflectionDominantDirection", 3)), ar && rr.addUniform("vReflectionColor", 3), Wr && (rr.addUniform("vSphericalL00", 3), rr.addUniform("vSphericalL1_1", 3), rr.addUniform("vSphericalL10", 3), rr.addUniform("vSphericalL11", 3), rr.addUniform("vSphericalL2_2", 3), rr.addUniform("vSphericalL2_1", 3), rr.addUniform("vSphericalL20", 3), rr.addUniform("vSphericalL21", 3), rr.addUniform("vSphericalL22", 3), rr.addUniform("vSphericalX", 3), rr.addUniform("vSphericalY", 3), rr.addUniform("vSphericalZ", 3), rr.addUniform("vSphericalXX_ZZ", 3), rr.addUniform("vSphericalYY_ZZ", 3), rr.addUniform("vSphericalZZ", 3), rr.addUniform("vSphericalXY", 3), rr.addUniform("vSphericalYZ", 3), rr.addUniform("vSphericalZX", 3))
    }
  },
  42184: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(38560),
      Wr = Qr(42130);
    class ar extends Wr.d {
      constructor(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(rr, Sr, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Zr.d, this._storeEffectOnSubMeshes = Qr
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(rr, Sr) {
        return !!rr && (!this._storeEffectOnSubMeshes || (!rr.jT || 0 === rr.jT.length || this.isReadyForSubMesh(rr, rr.jT[0], Sr)))
      }
      _isReadyForSubMesh(rr) {
        const Sr = rr.materialDefines;
        return !(this.checkReadyOnEveryCall || !rr.effect || !Sr || Sr._renderId !== this.eC().getRenderId())
      }
      bindOnlyWorldMatrix(rr) {
        this._activeEffect.setMatrix("world", rr)
      }
      bindOnlyNormalMatrix(rr) {
        this._activeEffect.setMatrix("normalMatrix", rr)
      }
      bind(rr, Sr) {
        Sr && this.bindForSubMesh(rr, Sr, Sr.jT[0])
      }
      _afterBind(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(rr, Sr, Qr), this.eC()._cachedEffect = Sr, Qr ? Qr._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Qr._drawWrapper._forceRebindOnNextCall || rr.isCachedMaterialInvalid(this, Sr, Zr)
      }
      dispose(rr, Sr, Qr) {
        this._activeEffect = void 0, super.dispose(rr, Sr, Qr)
      }
    }
  },
  42206: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    const Zr = new WeakMap;

    function Wr(rr) {
      const Sr = rr.getVertexBuffers();
      if (!Sr) return null;
      let Qr = Zr.get(rr);
      if (Qr) {
        let rr = !1;
        for (const Zr in Sr)
          if (!Qr.has(Zr)) {
            rr = !0;
            break
          } if (!rr) return Qr
      } else Qr = new Map, Zr.set(rr, Qr);
      for (const Zr in Sr) {
        const rr = Sr[Zr];
        if (rr) {
          const Sr = rr.byteOffset,
            Wr = rr.byteStride,
            ar = rr.type,
            jr = rr.normalized;
          Qr.set(Zr, {
            offset: Sr,
            stride: Wr,
            type: ar,
            normalized: jr
          })
        }
      }
      return Qr
    }

    function ar(rr, Sr) {
      Sr.forEach(((Sr, Qr) => {
        const Zr = `vp_${Qr}_info`;
        rr.setFloat4(Zr, Sr.offset, Sr.stride, Sr.type, Sr.normalized ? 1 : 0)
      }))
    }
  },
  42162: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => fr
    });
    var Zr = Qr(41872),
      Wr = Qr(38560),
      ar = Qr(41875);
    let jr = (() => {
      var rr;
      let Sr, Qr, Wr = [];
      return rr = class {
        static extractMinAndMaxIndexed(rr, Sr, Qr, Zr, Wr, ar) {
          for (let jr = Qr; jr < Qr + Zr; jr++) {
            const Qr = 3 * Sr[jr],
              Zr = rr[Qr],
              Ir = rr[Qr + 1],
              fr = rr[Qr + 2];
            Wr.minimizeInPlaceFromFloats(Zr, Ir, fr), ar.maximizeInPlaceFromFloats(Zr, Ir, fr)
          }
        }
        static extractMinAndMax(rr, Sr, Qr, Zr, Wr, ar) {
          for (let jr = Sr, Ir = Sr * Zr; jr < Sr + Qr; jr++, Ir += Zr) {
            const Sr = rr[Ir],
              Qr = rr[Ir + 1],
              Zr = rr[Ir + 2];
            Wr.minimizeInPlaceFromFloats(Sr, Qr, Zr), ar.maximizeInPlaceFromFloats(Sr, Qr, Zr)
          }
        }
      }, (() => {
        const jr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [ar.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Qr = [ar.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Zr.k)(rr, null, Sr, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: rr => "extractMinAndMaxIndexed" in rr,
            get: rr => rr.extractMinAndMaxIndexed
          },
          metadata: jr
        }, null, Wr), (0, Zr.k)(rr, null, Qr, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: rr => "extractMinAndMax" in rr,
            get: rr => rr.extractMinAndMax
          },
          metadata: jr
        }, null, Wr), jr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jr
        }), (0, Zr.m)(rr, Wr)
      })(), rr
    })();

    function Ir(rr, Sr, Qr, Zr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Ir = new Wr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        fr = new Wr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return jr.extractMinAndMaxIndexed(rr, Sr, Qr, Zr, Ir, fr), ar && (Ir.x -= Ir.x * ar.x + ar.y, Ir.y -= Ir.y * ar.x + ar.y, Ir.z -= Ir.z * ar.x + ar.y, fr.x += fr.x * ar.x + ar.y, fr.y += fr.y * ar.x + ar.y, fr.z += fr.z * ar.x + ar.y), {
        minimum: Ir,
        maximum: fr
      }
    }

    function fr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        ar = arguments.length > 4 ? arguments[4] : void 0;
      const Ir = new Wr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        fr = new Wr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return ar || (ar = 3), jr.extractMinAndMax(rr, Sr, Qr, ar, Ir, fr), Zr && (Ir.x -= Ir.x * Zr.x + Zr.y, Ir.y -= Ir.y * Zr.x + Zr.y, Ir.z -= Ir.z * Zr.x + Zr.y, fr.x += fr.x * Zr.x + Zr.y, fr.y += fr.y * Zr.x + Zr.y, fr.z += fr.z * Zr.x + Zr.y), {
        minimum: Ir,
        maximum: fr
      }
    }
  },
  42134: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr
    });
    var Zr, Wr = Qr(41995),
      ar = Qr(42142),
      jr = Qr(42147),
      Ir = Qr(42162),
      fr = Qr(42165),
      Er = Qr(41769);
    class pr {
      get materialDefines() {
        const rr = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof rr ? null : rr
      }
      set materialDefines(rr) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = rr
      }
      _getDrawWrapper(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        rr = rr ?? this._engine.currentRenderPassId;
        let Qr = this._drawWrappers[rr];
        return !Qr && Sr && (this._drawWrappers[rr] = Qr = new fr.b(this._mesh.eC().MU())), Qr
      }
      _removeDrawWrapper(rr) {
        let Sr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[rr]?.dispose(Sr), this._drawWrappers[rr] = void 0
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
      _setMainDrawWrapperOverride(rr) {
        this._mainDrawWrapperOverride = rr
      }
      setEffect(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wr = this._drawWrapper;
        Wr.setEffect(rr, Sr, Zr), void 0 !== Qr && (Wr.materialContext = Qr), rr || (Wr.defines = null, Wr.materialContext = void 0)
      }
      resetDrawCache(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== rr) return void this._removeDrawWrapper(rr, !0, Sr);
          for (const rr of this._drawWrappers) rr?.dispose(Sr)
        }
        this._drawWrappers = []
      }
      static AddToMesh(rr, Sr, Qr, Zr, Wr, ar, jr) {
        return new pr(rr, Sr, Qr, Zr, Wr, ar, jr, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar, jr) {
        let Ir = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fr = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = rr, this.verticesStart = Sr, this.verticesCount = Qr, this.indexStart = Zr, this.indexCount = Wr, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = ar, this._renderingMesh = jr || ar, fr && ar.jT.push(this), this._engine = this._mesh.eC().MU(), this.resetDrawCache(), this._trianglePlanes = [], this._id = ar.jT.length - 1, Ir && (this.refreshBoundingInfo(), ar.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      mG() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.mG() : this._boundingInfo
      }
      setBoundingInfo(rr) {
        return this._boundingInfo = rr, this
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
        const rr = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return rr || this._renderingMesh
      }
      iU() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Sr = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Sr) return rr && this._mesh.eC()._hasDefaultMaterial ? this._mesh.eC().defaultMaterial : null;
        if (this._isMultiMaterial(Sr)) {
          const rr = Sr.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== rr && (this._currentMaterial = rr, this.resetDrawCache()), rr
        }
        return Sr
      }
      _isMultiMaterial(rr) {
        return void 0 !== rr.getSubMaterial
      }
      refreshBoundingInfo() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (rr || (rr = this._renderingMesh.getVerticesData(Wr.j.PositionKind)), !rr) return this._boundingInfo = this._mesh.mG(), this;
        const Sr = this._renderingMesh.yar();
        let Qr;
        if (0 === this.indexStart && this.indexCount === Sr.length) {
          const rr = this._renderingMesh.mG();
          Qr = {
            minimum: rr.minimum.clone(),
            maximum: rr.maximum.clone()
          }
        } else Qr = (0, Ir.b)(rr, Sr, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Qr.minimum, Qr.maximum) : this._boundingInfo = new jr.c(Qr.minimum, Qr.maximum), this
      }
      _checkCollision(rr) {
        return this.mG()._checkCollision(rr)
      }
      updateBoundingInfo(rr) {
        let Sr = this.mG();
        return Sr || (this.refreshBoundingInfo(), Sr = this.mG()), Sr && Sr.update(rr), this
      }
      isInFrustum(rr) {
        const Sr = this.mG();
        return !!Sr && Sr.isInFrustum(rr, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(rr) {
        const Sr = this.mG();
        return !!Sr && Sr.isCompletelyInFrustum(rr)
      }
      render(rr) {
        return this._renderingMesh.render(this, rr, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(rr, Sr) {
        if (!this._linesIndexBuffer) {
          const Qr = 6 * Math.floor(this.indexCount / 3),
            Zr = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Qr) : new Uint16Array(Qr);
          let Wr = 0;
          if (0 === rr.length)
            for (let rr = this.indexStart; rr < this.indexStart + this.indexCount; rr += 3) Zr[Wr++] = rr, Zr[Wr++] = rr + 1, Zr[Wr++] = rr + 1, Zr[Wr++] = rr + 2, Zr[Wr++] = rr + 2, Zr[Wr++] = rr;
          else
            for (let Sr = this.indexStart; Sr < this.indexStart + this.indexCount; Sr += 3) Zr[Wr++] = rr[Sr], Zr[Wr++] = rr[Sr + 1], Zr[Wr++] = rr[Sr + 1], Zr[Wr++] = rr[Sr + 2], Zr[Wr++] = rr[Sr + 2], Zr[Wr++] = rr[Sr];
          this._linesIndexBuffer = Sr.createIndexBuffer(Zr), this._linesIndexCount = Zr.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(rr) {
        const Sr = this.mG();
        return !!Sr && rr.intersectsBox(Sr.boundingBox)
      }
      intersects(rr, Sr, Qr, Zr, Wr) {
        const ar = this.iU();
        if (!ar) return null;
        let jr = 3,
          Ir = !1;
        switch (ar.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            jr = 1, Ir = !0
        }
        return 4 === ar.fillMode ? Qr.length ? this._intersectLines(rr, Sr, Qr, this._mesh.intersectionThreshold, Zr) : this._intersectUnIndexedLines(rr, Sr, Qr, this._mesh.intersectionThreshold, Zr) : !Qr.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(rr, Sr, Qr, Zr, Wr) : this._intersectTriangles(rr, Sr, Qr, jr, Ir, Zr, Wr)
      }
      _intersectLines(rr, Sr, Qr, Zr, Wr) {
        let jr = null;
        for (let Ir = this.indexStart; Ir < this.indexStart + this.indexCount; Ir += 2) {
          const fr = Sr[Qr[Ir]],
            Er = Sr[Qr[Ir + 1]],
            pr = rr.intersectionSegment(fr, Er, Zr);
          if (!(pr < 0) && ((Wr || !jr || pr < jr.distance) && (jr = new ar.d(null, null, pr), jr.faceId = Ir / 2, Wr))) break
        }
        return jr
      }
      _intersectUnIndexedLines(rr, Sr, Qr, Zr, Wr) {
        let jr = null;
        for (let Ir = this.verticesStart; Ir < this.verticesStart + this.verticesCount; Ir += 2) {
          const Qr = Sr[Ir],
            fr = Sr[Ir + 1],
            Er = rr.intersectionSegment(Qr, fr, Zr);
          if (!(Er < 0) && ((Wr || !jr || Er < jr.distance) && (jr = new ar.d(null, null, Er), jr.faceId = Ir / 2, Wr))) break
        }
        return jr
      }
      _intersectTriangles(rr, Sr, Qr, Zr, Wr, ar, jr) {
        let Ir = null,
          fr = -1;
        for (let Er = this.indexStart; Er < this.indexStart + this.indexCount - (3 - Zr); Er += Zr) {
          fr++;
          const Zr = Qr[Er],
            pr = Qr[Er + 1],
            xr = Qr[Er + 2];
          if (Wr && 4294967295 === xr) {
            Er += 2;
            continue
          }
          const mr = Sr[Zr],
            Nr = Sr[pr],
            Ur = Sr[xr];
          if (!mr || !Nr || !Ur) continue;
          if (jr && !jr(mr, Nr, Ur, rr, Zr, pr, xr)) continue;
          const tr = rr.intersectsTriangle(mr, Nr, Ur);
          if (tr) {
            if (tr.distance < 0) continue;
            if ((ar || !Ir || tr.distance < Ir.distance) && (Ir = tr, Ir.faceId = fr, ar)) break
          }
        }
        return Ir
      }
      _intersectUnIndexedTriangles(rr, Sr, Qr, Zr, Wr) {
        let ar = null;
        for (let jr = this.verticesStart; jr < this.verticesStart + this.verticesCount; jr += 3) {
          const Qr = Sr[jr],
            Ir = Sr[jr + 1],
            fr = Sr[jr + 2];
          if (Wr && !Wr(Qr, Ir, fr, rr, -1, -1, -1)) continue;
          const Er = rr.intersectsTriangle(Qr, Ir, fr);
          if (Er) {
            if (Er.distance < 0) continue;
            if ((Zr || !ar || Er.distance < ar.distance) && (ar = Er, ar.faceId = jr / 3, Zr)) break
          }
        }
        return ar
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(rr, Sr) {
        const Qr = new pr(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, rr, Sr, !1);
        if (!this.IsGlobal) {
          const rr = this.mG();
          if (!rr) return Qr;
          Qr._boundingInfo = new jr.c(rr.minimum, rr.maximum)
        }
        return Qr
      }
      dispose() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.eC().MU()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Sr = this._mesh.jT.indexOf(this);
        this._mesh.jT.splice(Sr, 1), this.resetDrawCache(void 0, rr)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(rr, Sr, Qr, Zr, Wr) {
        let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = Number.MAX_VALUE,
          Ir = -Number.MAX_VALUE;
        const fr = (Wr || Zr).yar();
        for (let Er = Sr; Er < Sr + Qr; Er++) {
          const rr = fr[Er];
          rr < jr && (jr = rr), rr > Ir && (Ir = rr)
        }
        return new pr(rr, jr, Ir - jr + 1, Sr, Qr, Zr, Wr, ar)
      }
    }(Zr = pr.prototype).projectToRef ?? (Zr.projectToRef = (0, Er.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);