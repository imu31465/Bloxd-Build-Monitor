export const id = 254;
export const ids = [254];
export const modules = {
  40049: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq) {
        this.bu = qq, this.bv = Eq, this.distance = gq, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40060: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(37149),
      lq = gq(37139),
      Oq = gq(37145);
    class mq {
      constructor(qq, Eq, gq) {
        this.vectors = (0, Yq.e)(8, lq.q.Zero), this.center = lq.q.Zero(), this.centerWorld = lq.q.Zero(), this.extendSize = lq.q.Zero(), this.extendSizeWorld = lq.q.Zero(), this.directions = (0, Yq.e)(3, lq.q.Zero), this.vectorsWorld = (0, Yq.e)(8, lq.q.Zero), this.minimumWorld = lq.q.Zero(), this.maximumWorld = lq.q.Zero(), this.minimum = lq.q.Zero(), this.maximum = lq.q.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(qq, Eq, gq)
      }
      reConstruct(qq, Eq, gq) {
        const Yq = qq.x,
          Oq = qq.y,
          mq = qq.z,
          xq = Eq.x,
          Aq = Eq.y,
          cq = Eq.z,
          uq = this.vectors;
        this.minimum.Vqq(Yq, Oq, mq), this.maximum.Vqq(xq, Aq, cq), uq[0].Vqq(Yq, Oq, mq), uq[1].Vqq(xq, Aq, cq), uq[2].Vqq(xq, Oq, mq), uq[3].Vqq(Yq, Aq, mq), uq[4].Vqq(Yq, Oq, cq), uq[5].Vqq(xq, Aq, mq), uq[6].Vqq(Yq, Aq, cq), uq[7].Vqq(xq, Oq, cq), Eq.addToRef(qq, this.center).scaleInPlace(.5), Eq.subtractToRef(qq, this.extendSize).scaleInPlace(.5), this._worldMatrix = gq || lq.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(qq) {
        const Eq = mq._TmpVector3,
          gq = this.maximum.subtractToRef(this.minimum, Eq[0]),
          Yq = gq.length();
        gq.normalizeFromLength(Yq);
        const lq = Yq * qq,
          Oq = gq.scaleInPlace(.5 * lq),
          xq = this.center.subtractToRef(Oq, Eq[1]),
          Aq = this.center.addToRef(Oq, Eq[2]);
        return this.reConstruct(xq, Aq, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(qq) {
        const Eq = this.minimumWorld,
          gq = this.maximumWorld,
          Yq = this.directions,
          Oq = this.vectorsWorld,
          mq = this.vectors;
        if (qq.isIdentity()) {
          Eq.WG(this.minimum), gq.WG(this.maximum);
          for (let qq = 0; qq < 8; ++qq) Oq[qq].WG(mq[qq]);
          this.extendSizeWorld.WG(this.extendSize), this.centerWorld.WG(this.center)
        } else {
          Eq.A4(Number.MAX_VALUE), gq.A4(-Number.MAX_VALUE);
          for (let Yq = 0; Yq < 8; ++Yq) {
            const xq = Oq[Yq];
            lq.q.TransformCoordinatesToRef(mq[Yq], qq, xq), Eq.minimizeInPlace(xq), gq.maximizeInPlace(xq)
          }
          gq.subtractToRef(Eq, this.extendSizeWorld).scaleInPlace(.5), gq.addToRef(Eq, this.centerWorld).scaleInPlace(.5)
        }
        lq.q.FromArrayToRef(qq.m, 0, Yq[0]), lq.q.FromArrayToRef(qq.m, 4, Yq[1]), lq.q.FromArrayToRef(qq.m, 8, Yq[2]), this._worldMatrix = qq
      }
      isInFrustum(qq) {
        return mq.IsInFrustum(this.vectorsWorld, qq)
      }
      isCompletelyInFrustum(qq) {
        return mq.IsCompletelyInFrustum(this.vectorsWorld, qq)
      }
      intersectsPoint(qq) {
        const Eq = this.minimumWorld,
          gq = this.maximumWorld,
          Yq = Eq.x,
          lq = Eq.y,
          mq = Eq.z,
          xq = gq.x,
          Aq = gq.y,
          cq = gq.z,
          uq = qq.x,
          Bq = qq.y,
          Wq = qq.z,
          Nq = -Oq.c;
        return !(xq - uq < Nq || Nq > uq - Yq) && (!(Aq - Bq < Nq || Nq > Bq - lq) && !(cq - Wq < Nq || Nq > Wq - mq))
      }
      intersectsSphere(qq) {
        return mq.IntersectsSphere(this.minimumWorld, this.maximumWorld, qq.centerWorld, qq.radiusWorld)
      }
      intersectsMinMax(qq, Eq) {
        const gq = this.minimumWorld,
          Yq = this.maximumWorld,
          lq = gq.x,
          Oq = gq.y,
          mq = gq.z,
          xq = Yq.x,
          Aq = Yq.y,
          cq = Yq.z,
          uq = qq.x,
          Bq = qq.y,
          Wq = qq.z,
          Nq = Eq.x,
          aq = Eq.y,
          Vq = Eq.z;
        return !(xq < uq || lq > Nq) && (!(Aq < Bq || Oq > aq) && !(cq < Wq || mq > Vq))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(qq, Eq) {
        return qq.intersectsMinMax(Eq.minimumWorld, Eq.maximumWorld)
      }
      static IntersectsSphere(qq, Eq, gq, Yq) {
        const Oq = mq._TmpVector3[0];
        lq.q.ClampToRef(gq, qq, Eq, Oq);
        return lq.q.DistanceSquared(gq, Oq) <= Yq * Yq
      }
      static IsCompletelyInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; ++gq) {
          const Yq = Eq[gq];
          for (let Eq = 0; Eq < 8; ++Eq)
            if (Yq.dotCoordinate(qq[Eq]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; ++gq) {
          let Yq = !0;
          const lq = Eq[gq];
          for (let Eq = 0; Eq < 8; ++Eq)
            if (lq.dotCoordinate(qq[Eq]) >= 0) {
              Yq = !1;
              break
            } if (Yq) return !1
        }
        return !0
      }
    }
    mq._TmpVector3 = (0, Yq.e)(3, lq.q.Zero)
  },
  40055: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Bq
    });
    var Yq = gq(37149),
      lq = gq(37139),
      Oq = gq(40060);
    class mq {
      constructor(qq, Eq, gq) {
        this.center = lq.q.Zero(), this.centerWorld = lq.q.Zero(), this.minimum = lq.q.Zero(), this.maximum = lq.q.Zero(), this.reConstruct(qq, Eq, gq)
      }
      reConstruct(qq, Eq, gq) {
        this.minimum.WG(qq), this.maximum.WG(Eq);
        const Yq = lq.q.Distance(qq, Eq);
        Eq.addToRef(qq, this.center).scaleInPlace(.5), this.radius = .5 * Yq, this._update(gq || lq.e.IdentityReadOnly)
      }
      scale(qq) {
        const Eq = mq._TmpVector3,
          gq = this.maximum.subtractToRef(this.minimum, Eq[0]),
          Yq = gq.length();
        gq.normalizeFromLength(Yq);
        const lq = Yq * qq,
          Oq = gq.scaleInPlace(.5 * lq),
          xq = this.center.subtractToRef(Oq, Eq[1]),
          Aq = this.center.addToRef(Oq, Eq[2]);
        return this.reConstruct(xq, Aq, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(qq) {
        if (qq.isIdentity()) this.centerWorld.WG(this.center), this.radiusWorld = this.radius;
        else {
          lq.q.TransformCoordinatesToRef(this.center, qq, this.centerWorld);
          const Eq = mq._TmpVector3[0];
          lq.q.TransformNormalFromFloatsToRef(1, 1, 1, qq, Eq), this.radiusWorld = Math.max(Math.abs(Eq.x), Math.abs(Eq.y), Math.abs(Eq.z)) * this.radius
        }
      }
      isInFrustum(qq) {
        const Eq = this.centerWorld,
          gq = this.radiusWorld;
        for (let Yq = 0; Yq < 6; Yq++)
          if (qq[Yq].dotCoordinate(Eq) <= -gq) return !1;
        return !0
      }
      isCenterInFrustum(qq) {
        const Eq = this.centerWorld;
        for (let gq = 0; gq < 6; gq++)
          if (qq[gq].dotCoordinate(Eq) < 0) return !1;
        return !0
      }
      intersectsPoint(qq) {
        const Eq = lq.q.DistanceSquared(this.centerWorld, qq);
        return !(this.radiusWorld * this.radiusWorld < Eq)
      }
      static Intersects(qq, Eq) {
        const gq = lq.q.DistanceSquared(qq.centerWorld, Eq.centerWorld),
          Yq = qq.radiusWorld + Eq.radiusWorld;
        return !(Yq * Yq < gq)
      }
      static CreateFromCenterAndRadius(qq, Eq, gq) {
        this._TmpVector3[0].WG(qq), this._TmpVector3[1].Vqq(0, 0, Eq), this._TmpVector3[2].WG(qq), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].KYq(this._TmpVector3[1]);
        const Yq = new mq(this._TmpVector3[0], this._TmpVector3[2]);
        return Yq._worldMatrix = gq || lq.e.Identity(), Yq
      }
    }
    mq._TmpVector3 = (0, Yq.e)(3, lq.q.Zero);
    const xq = {
        min: 0,
        max: 0
      },
      Aq = {
        min: 0,
        max: 0
      },
      cq = (qq, Eq, gq) => {
        const Yq = lq.q.Dot(Eq.centerWorld, qq),
          Oq = Math.abs(lq.q.Dot(Eq.directions[0], qq)) * Eq.extendSize.x + Math.abs(lq.q.Dot(Eq.directions[1], qq)) * Eq.extendSize.y + Math.abs(lq.q.Dot(Eq.directions[2], qq)) * Eq.extendSize.z;
        gq.min = Yq - Oq, gq.max = Yq + Oq
      },
      uq = (qq, Eq, gq) => (cq(qq, Eq, xq), cq(qq, gq, Aq), !(xq.min > Aq.max || Aq.min > xq.max));
    class Bq {
      constructor(qq, Eq, gq) {
        this._isLocked = !1, this.boundingBox = new Oq.d(qq, Eq, gq), this.DYq = new mq(qq, Eq, gq)
      }
      reConstruct(qq, Eq, gq) {
        this.boundingBox.reConstruct(qq, Eq, gq), this.DYq.reConstruct(qq, Eq, gq)
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
      set isLocked(qq) {
        this._isLocked = qq
      }
      update(qq) {
        this._isLocked || (this.boundingBox._update(qq), this.DYq._update(qq))
      }
      centerOn(qq, Eq) {
        const gq = Bq._TmpVector3[0].WG(qq).KYq(Eq),
          Yq = Bq._TmpVector3[1].WG(qq).addInPlace(Eq);
        return this.boundingBox.reConstruct(gq, Yq, this.boundingBox.getWorldMatrix()), this.DYq.reConstruct(gq, Yq, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(qq) {
        const Eq = lq.q.Minimize(this.minimum, qq),
          gq = lq.q.Maximize(this.maximum, qq);
        return this.reConstruct(Eq, gq, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(qq) {
        const Eq = lq.o.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Eq);
        const gq = lq.o.Na[0];
        return lq.q.TransformCoordinatesToRef(qq.boundingBox.minimumWorld, Eq, gq), this.encapsulate(gq), lq.q.TransformCoordinatesToRef(qq.boundingBox.maximumWorld, Eq, gq), this.encapsulate(gq), this
      }
      scale(qq) {
        return this.boundingBox.scale(qq), this.DYq.scale(qq), this
      }
      isInFrustum(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Eq || 3 === Eq) && this.DYq.isCenterInFrustum(qq)) return !0;
        if (!this.DYq.isInFrustum(qq)) return !1;
        return !(1 !== Eq && 3 !== Eq) || this.boundingBox.isInFrustum(qq)
      }
      get diagonalLength() {
        const qq = this.boundingBox;
        return qq.maximumWorld.subtractToRef(qq.minimumWorld, Bq._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(qq) {
        return this.boundingBox.isCompletelyInFrustum(qq)
      }
      _checkCollision(qq) {
        return qq._canDoCollision(this.DYq.centerWorld, this.DYq.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(qq) {
        return !!this.DYq.centerWorld && (!!this.DYq.intersectsPoint(qq) && !!this.boundingBox.intersectsPoint(qq))
      }
      intersects(qq, Eq) {
        if (!mq.Intersects(this.DYq, qq.DYq)) return !1;
        if (!Oq.d.Intersects(this.boundingBox, qq.boundingBox)) return !1;
        if (!Eq) return !0;
        const gq = this.boundingBox,
          Yq = qq.boundingBox;
        return !!uq(gq.directions[0], gq, Yq) && (!!uq(gq.directions[1], gq, Yq) && (!!uq(gq.directions[2], gq, Yq) && (!!uq(Yq.directions[0], gq, Yq) && (!!uq(Yq.directions[1], gq, Yq) && (!!uq(Yq.directions[2], gq, Yq) && (!!uq(lq.q.Cross(gq.directions[0], Yq.directions[0]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[0], Yq.directions[1]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[0], Yq.directions[2]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[1], Yq.directions[0]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[1], Yq.directions[1]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[1], Yq.directions[2]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[2], Yq.directions[0]), gq, Yq) && (!!uq(lq.q.Cross(gq.directions[2], Yq.directions[1]), gq, Yq) && !!uq(lq.q.Cross(gq.directions[2], Yq.directions[2]), gq, Yq))))))))))))))
      }
    }
    Bq._TmpVector3 = (0, Yq.e)(2, lq.q.Zero)
  },
  40083: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => Aq,
      l: () => xq,
      m: () => mq
    });
    var Yq = gq(39891),
      lq = gq(37139);

    function Oq(qq) {
      -1 === qq.indexOf("vClipPlane") && qq.push("vClipPlane"), -1 === qq.indexOf("vClipPlane2") && qq.push("vClipPlane2"), -1 === qq.indexOf("vClipPlane3") && qq.push("vClipPlane3"), -1 === qq.indexOf("vClipPlane4") && qq.push("vClipPlane4"), -1 === qq.indexOf("vClipPlane5") && qq.push("vClipPlane5"), -1 === qq.indexOf("vClipPlane6") && qq.push("vClipPlane6")
    }

    function mq(qq, Eq, gq) {
      const Yq = !!(qq.clipPlane ?? Eq.clipPlane),
        lq = !!(qq.clipPlane2 ?? Eq.clipPlane2),
        Oq = !!(qq.clipPlane3 ?? Eq.clipPlane3),
        mq = !!(qq.clipPlane4 ?? Eq.clipPlane4),
        xq = !!(qq.clipPlane5 ?? Eq.clipPlane5),
        Aq = !!(qq.clipPlane6 ?? Eq.clipPlane6);
      Yq && gq.push("#define CLIPPLANE"), lq && gq.push("#define CLIPPLANE2"), Oq && gq.push("#define CLIPPLANE3"), mq && gq.push("#define CLIPPLANE4"), xq && gq.push("#define CLIPPLANE5"), Aq && gq.push("#define CLIPPLANE6")
    }

    function xq(qq, Eq, gq) {
      let Yq = !1;
      const lq = !!(qq.clipPlane ?? Eq.clipPlane),
        Oq = !!(qq.clipPlane2 ?? Eq.clipPlane2),
        mq = !!(qq.clipPlane3 ?? Eq.clipPlane3),
        xq = !!(qq.clipPlane4 ?? Eq.clipPlane4),
        Aq = !!(qq.clipPlane5 ?? Eq.clipPlane5),
        cq = !!(qq.clipPlane6 ?? Eq.clipPlane6);
      return gq.CLIPPLANE !== lq && (gq.CLIPPLANE = lq, Yq = !0), gq.CLIPPLANE2 !== Oq && (gq.CLIPPLANE2 = Oq, Yq = !0), gq.CLIPPLANE3 !== mq && (gq.CLIPPLANE3 = mq, Yq = !0), gq.CLIPPLANE4 !== xq && (gq.CLIPPLANE4 = xq, Yq = !0), gq.CLIPPLANE5 !== Aq && (gq.CLIPPLANE5 = Aq, Yq = !0), gq.CLIPPLANE6 !== cq && (gq.CLIPPLANE6 = cq, Yq = !0), Yq
    }

    function Aq(qq, Eq, gq) {
      let Yq = Eq.clipPlane ?? gq.clipPlane;
      cq(qq, "vClipPlane", Yq), Yq = Eq.clipPlane2 ?? gq.clipPlane2, cq(qq, "vClipPlane2", Yq), Yq = Eq.clipPlane3 ?? gq.clipPlane3, cq(qq, "vClipPlane3", Yq), Yq = Eq.clipPlane4 ?? gq.clipPlane4, cq(qq, "vClipPlane4", Yq), Yq = Eq.clipPlane5 ?? gq.clipPlane5, cq(qq, "vClipPlane5", Yq), Yq = Eq.clipPlane6 ?? gq.clipPlane6, cq(qq, "vClipPlane6", Yq)
    }

    function cq(qq, Eq, gq) {
      if (gq) {
        const Oq = Yq.e.ZJ()?.floatingOriginOffset || lq.q.ZeroReadOnly;
        qq.setFloat4(Eq, gq.normal.x, gq.normal.y, gq.normal.z, gq.d + lq.q.Dot(gq.normal, Oq))
      }
    }
  },
  40104: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(qq, Eq) {
        this._defines[qq] || (qq < this._currentRank && (this._currentRank = qq), qq > this._maxRank && (this._maxRank = qq), this._defines[qq] = new Array), this._defines[qq].push(Eq)
      }
      addCPUSkinningFallback(qq, Eq) {
        this._mesh = Eq, qq < this._currentRank && (this._currentRank = qq), qq > this._maxRank && (this._maxRank = qq)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(qq, Eq) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, qq = qq.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Eq._bonesComputationForcedToCPU = !0;
          const gq = this._mesh.ZJ();
          for (let qq = 0; qq < gq.meshes.length; qq++) {
            const Yq = gq.meshes[qq];
            if (Yq.material) {
              if (Yq.computeBonesUsingShaders && 0 !== Yq.numBoneInfluencers)
                if (Yq.material.getEffect() === Eq) Yq.computeBonesUsingShaders = !1;
                else if (Yq.fn)
                for (const qq of Yq.fn) {
                  if (qq.effect === Eq) {
                    Yq.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Yq.computeBonesUsingShaders && Yq.numBoneInfluencers > 0 && (Yq.computeBonesUsingShaders = !1)
          }
        } else {
          const Eq = this._defines[this._currentRank];
          if (Eq)
            for (let gq = 0; gq < Eq.length; gq++) qq = qq.replace("#define " + Eq[gq], "");
          this._currentRank++
        }
        return qq
      }
    }
  },
  40037: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Hq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39845),
      mq = gq(37156),
      xq = gq(37153),
      Aq = gq(40040),
      cq = gq(39870),
      uq = gq(38653),
      Bq = gq(37767),
      Wq = gq(40074),
      Nq = gq(39779);
    let aq = (() => {
      var qq;
      let Eq, gq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, aq, Vq, dq = [];
      return qq = class {
        constructor() {
          this._func = (0, Yq.i)(this, dq), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(qq) {
          this._func = qq
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(qq) {
          this._backFunc = qq
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(qq) {
          this._funcRef = qq
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(qq) {
          this._funcMask = qq
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(qq) {
          this._opStencilFail = qq
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(qq) {
          this._opDepthFail = qq
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(qq) {
          this._opStencilDepthPass = qq
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(qq) {
          this._backOpStencilFail = qq
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(qq) {
          this._backOpDepthFail = qq
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(qq) {
          this._backOpStencilDepthPass = qq
        }
        get mask() {
          return this._mask
        }
        set mask(qq) {
          this._mask = qq
        }
        get enabled() {
          return this._enabled
        }
        set enabled(qq) {
          this._enabled = qq
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(qq) {
          Nq.d.Clone((() => qq), this)
        }
        serialize() {
          return Nq.d.Serialize(this)
        }
        parse(qq, Eq, gq) {
          Nq.d.Parse((() => this), qq, Eq, gq)
        }
      }, (() => {
        const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], mq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], (0, Yq.f)(qq, null, Eq, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: qq => "func" in qq,
            get: qq => qq.func
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, gq, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: qq => "backFunc" in qq,
            get: qq => qq.backFunc
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, Oq, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: qq => "funcRef" in qq,
            get: qq => qq.funcRef
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, mq, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: qq => "funcMask" in qq,
            get: qq => qq.funcMask
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, xq, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: qq => "opStencilFail" in qq,
            get: qq => qq.opStencilFail
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, Aq, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: qq => "opDepthFail" in qq,
            get: qq => qq.opDepthFail
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, cq, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: qq => "opStencilDepthPass" in qq,
            get: qq => qq.opStencilDepthPass
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, uq, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: qq => "backOpStencilFail" in qq,
            get: qq => qq.backOpStencilFail
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, Bq, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: qq => "backOpDepthFail" in qq,
            get: qq => qq.backOpDepthFail
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, Wq, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: qq => "backOpStencilDepthPass" in qq,
            get: qq => qq.backOpStencilDepthPass
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, aq, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: qq => "mask" in qq,
            get: qq => qq.mask
          },
          metadata: Nq
        }, null, dq), (0, Yq.f)(qq, null, Vq, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "enabled" in qq,
            get: qq => qq.enabled
          },
          metadata: Nq
        }, null, dq), Nq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nq
        })
      })(), qq
    })();
    var Vq = gq(40079),
      dq = gq(39676),
      jq = gq(39636);
    let Hq = (() => {
      var qq;
      let Eq, gq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, sq = [],
        Xq = [],
        wq = [],
        Kq = [],
        Cq = [],
        Iq = [],
        eq = [],
        Dq = [],
        qE = [],
        EE = [],
        gE = [],
        YE = [],
        lE = [],
        OE = [],
        mE = [],
        xE = [],
        AE = [],
        cE = [],
        uE = [],
        BE = [],
        WE = [],
        NE = [],
        aE = [],
        VE = [],
        dE = [],
        jE = [],
        HE = [],
        oE = [],
        PE = [],
        QE = [],
        yE = [],
        tE = [],
        rE = [],
        vE = [],
        hE = [],
        nE = [],
        bE = [],
        iE = [],
        ZE = [],
        fE = [],
        ME = [],
        TE = [],
        zE = [],
        SE = [],
        pE = [],
        GE = [],
        LE = [],
        JE = [],
        kE = [],
        RE = [],
        UE = [];
      return qq = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Eq) {
          this._useVertexPulling !== Eq && (this._useVertexPulling = Eq, this.xgq(qq.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(qq) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(Eq) {
          if (this._alpha === Eq) return;
          const gq = this._alpha;
          this._alpha = Eq, 1 !== gq && 1 !== Eq || this.xgq(qq.MiscDirtyFlag + qq.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Eq) {
          this._backFaceCulling !== Eq && (this._backFaceCulling = Eq, this.xgq(qq.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Eq) {
          const gq = Math.max(0, Math.min(0 | Eq, 4));
          this._textureRepetitionMode !== gq && (this._textureRepetitionMode = gq, this.xgq(qq.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Eq) {
          this._cullBackFaces !== Eq && (this._cullBackFaces = Eq, this.xgq(qq.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(qq) {
          this._blockDirtyMechanism !== qq && (this._blockDirtyMechanism = qq, qq || this.markDirty())
        }
        atomicMaterialsUpdate(qq) {
          this.blockDirtyMechanism = !0;
          try {
            qq(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(qq) {
          this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new mq.d), this._onBindObservable
        }
        set onBind(qq) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(qq)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new mq.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new mq.d), this._onEffectCreatedObservable
        }
        set alphaMode(qq) {
          this._alphaMode[0] = qq
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[gq] !== Eq && (this._alphaMode[gq] = Eq, this.xgq(qq.TextureDirtyFlag))
        }
        set needDepthPrePass(qq) {
          this._needDepthPrePass !== qq && (this._needDepthPrePass = qq, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(Eq) {
          this._fogEnabled !== Eq && (this._fogEnabled = Eq, this.xgq(qq.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case qq.WireFrameFillMode:
            case qq.LineListDrawMode:
            case qq.LineLoopDrawMode:
            case qq.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(Eq) {
          this.fillMode = Eq ? qq.WireFrameFillMode : qq.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case qq.PointFillMode:
            case qq.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Eq) {
          this.fillMode = Eq ? qq.PointFillMode : qq.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Eq) {
          this._fillMode !== Eq && (this._fillMode = Eq, this.xgq(qq.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(qq) {
          const Eq = this.ZJ().Ba().getCaps().fragmentDepthSupported;
          qq && !Eq && uq.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = qq && Eq, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(qq) {
          this._isVertexOutputInvariant !== qq && (this._isVertexOutputInvariant = qq, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(qq) {
          this._drawWrapper = qq
        }
        constructor(Eq, gq, lq) {
          let Aq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Yq.i)(this, sq), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Yq.i)(this, Xq, void 0), this.uniqueId = ((0, Yq.i)(this, wq), (0, Yq.i)(this, Kq, void 0)), this._loadedUniqueId = (0, Yq.i)(this, Cq), this.name = (0, Yq.i)(this, Iq, void 0), this.metadata = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, null)), this._internalMetadata = (0, Yq.i)(this, qE), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Yq.i)(this, EE, !1), this.checkReadyOnlyOnce = ((0, Yq.i)(this, gE), (0, Yq.i)(this, YE, !1)), this.state = ((0, Yq.i)(this, lE), (0, Yq.i)(this, OE, "")), this._alpha = ((0, Yq.i)(this, mE), (0, Yq.i)(this, xE, 1)), this.inspectableCustomProperties = (0, Yq.i)(this, AE), this._backFaceCulling = (0, Yq.i)(this, cE, !0), this._textureRepetitionMode = ((0, Yq.i)(this, uE), (0, Yq.i)(this, BE, 0)), this.textureRepetitionHexTilingParams = ((0, Yq.i)(this, WE), (0, Yq.i)(this, NE, [1, .6, 7, .5])), this._cullBackFaces = ((0, Yq.i)(this, aE), (0, Yq.i)(this, VE, !0)), this._blockDirtyMechanism = ((0, Yq.i)(this, dE), !1), this.sideOrientation = (0, Yq.i)(this, jE, null), this.onCompiled = ((0, Yq.i)(this, HE), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.MJ = new mq.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Yq.i)(this, oE, [2]), this._needDepthPrePass = ((0, Yq.i)(this, PE), (0, Yq.i)(this, QE, !1)), this.disableDepthWrite = ((0, Yq.i)(this, yE), (0, Yq.i)(this, tE, !1)), this.disableColorWrite = ((0, Yq.i)(this, rE), (0, Yq.i)(this, vE, !1)), this.forceDepthWrite = ((0, Yq.i)(this, hE), (0, Yq.i)(this, nE, !1)), this.depthFunction = ((0, Yq.i)(this, bE), (0, Yq.i)(this, iE, 0)), this.separateCullingPass = ((0, Yq.i)(this, ZE), (0, Yq.i)(this, fE, !1)), this._fogEnabled = ((0, Yq.i)(this, ME), (0, Yq.i)(this, TE, !0)), this.pointSize = ((0, Yq.i)(this, zE), (0, Yq.i)(this, SE, 1)), this.zOffset = ((0, Yq.i)(this, pE), (0, Yq.i)(this, GE, 0)), this.zOffsetUnits = ((0, Yq.i)(this, LE), (0, Yq.i)(this, JE, 0)), this.clipPlane = (0, Yq.i)(this, kE), this.stencil = new aq, this._isVertexOutputInvariant = (0, Yq.i)(this, RE, qq.ForceVertexOutputInvariant), this._materialContext = (0, Yq.i)(this, UE), this._useUBO = !1, this._fillMode = qq.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Eq;
          const uq = gq || xq.b.LastCreatedScene;
          uq && (this._scene = uq, this._dirtyCallbacks = {}, this._forceGLSL = Aq, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Eq || Oq.f.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Ba().createMaterialContext(), this._drawWrapper = new Wq.b(this._scene.Ba(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new cq.b(this._scene.Ba(), void 0, void 0, Eq), this._useUBO = this.ZJ().Ba().supportsUniformBuffers, this._createUniformBuffer(), lq || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), qq.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const qq = this.ZJ().Ba();
          this._uniformBuffer?.dispose(), qq.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new cq.b(qq, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new cq.b(this._scene.Ba(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(qq) {
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
        isReady(qq, Eq) {
          return !0
        }
        isReadyForSubMesh(qq, Eq, gq) {
          const Yq = Eq.materialDefines;
          return !!Yq && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Yq, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        ZJ() {
          return this._scene
        }
        _getEffectiveOrientation(qq) {
          return null !== this.sideOrientation ? this.sideOrientation : qq.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(qq) {
          this._transparencyMode = qq
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === qq.MATERIAL_ALPHABLEND || this._transparencyMode === qq.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === qq.MATERIAL_ALPHATEST || this._transparencyMode === qq.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === qq.MATERIAL_OPAQUE || this._transparencyMode === qq.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(qq) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : qq.visibility < 1 || !this._disableAlphaBlending && (qq.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(qq) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(qq) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const gq = this.ZJ().meshes;
          for (const qq of gq)
            if (qq.fn)
              for (const gq of qq.fn)
                if (gq.da() === this)
                  for (const qq of gq._drawWrappers) qq && this._materialContext === qq.materialContext && (qq._wasPreviouslyReady = !1, qq._wasPreviouslyUsingInstances = null, qq._forceRebindOnNextCall = Eq);
          Eq && this.xgq(qq.AllDirtyFlag)
        }
        _preBind(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Yq = this._scene.Ba(),
            lq = (null == gq ? this.sideOrientation : gq) === qq.ClockWiseSideOrientation,
            Oq = Eq || this._getDrawWrapper();
          return (0, dq.c)(Oq) && Oq.materialContext && (Oq.materialContext.useVertexPulling = this.useVertexPulling), Yq.enableEffect(Oq), Yq.setState(this.backFaceCulling, this.zOffset, !1, lq, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), lq
        }
        bind(qq, Eq) {}
        buildUniformLayout() {
          const qq = this._uniformBuffer;
          this._eventInfo.ubo = qq, this._callbackPluginEventGeneric(8, this._eventInfo), qq.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(qq, Eq, gq) {
          const Yq = gq._drawWrapper;
          this._eventInfo.subMesh = gq, this._callbackPluginEventBindForSubMesh(this._eventInfo), Yq._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(qq) {}
        bindView(qq) {
          this._useUBO ? this._needToBindSceneUbo = !0 : qq.setMatrix("view", this.ZJ().getViewMatrix())
        }
        bindViewProjection(qq) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (qq.setMatrix("viewProjection", this.ZJ().getTransformMatrix()), qq.setMatrix("projection", this.ZJ().getProjectionMatrix()), qq.setMatrix("inverseProjection", this.ZJ().getInverseProjectionMatrix()))
        }
        bindEyePosition(qq, Eq) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(qq, Eq)
        }
        _afterBind(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Eq && (this._needToBindSceneUbo = !1, (0, Vq.s)(Eq, this.ZJ().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = qq ? qq.visibility : 1, this._onBindObservable && qq && this._onBindObservable.notifyObservers(qq), this.disableDepthWrite) {
            const qq = this._scene.Ba();
            this._cachedDepthWriteState = qq.getDepthWrite(), qq.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const qq = this._scene.Ba();
            this._cachedColorWriteState = qq.getColorWrite(), qq.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const qq = this._scene.Ba();
            this._cachedDepthFunctionState = qq.getDepthFunction() || 0, qq.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Ba().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Ba().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Ba().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(qq) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = qq, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(qq) {
          return null
        }
        _clonePlugins(Eq, gq) {
          const Yq = {};
          if (this._serializePlugins(Yq), qq._ParsePlugins(Yq, Eq, this._scene, gq), this.pluginManager)
            for (const qq of this.pluginManager._plugins) {
              const gq = Eq.pluginManager.getPlugin(qq.name);
              gq && qq.copyTo(gq)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const qq = [];
            for (const Eq in this.meshMap) {
              const gq = this.meshMap[Eq];
              gq && qq.push(gq)
            }
            return qq
          }
          return this._scene.meshes.filter((qq => qq.material === this))
        }
        forceCompilation(qq, Eq, gq, Yq) {
          const lq = {
              clipPlane: !1,
              useInstances: !1,
              ...gq
            },
            Oq = this.ZJ(),
            mq = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const xq = () => {
            if (!this._scene || !this._scene.Ba()) return;
            const gq = Oq.clipPlane;
            if (lq.clipPlane && (Oq.clipPlane = new Bq.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let gq = !0,
                Oq = null;
              if (qq.fn) {
                const Eq = new Aq.c(0, 0, 0, 0, 0, qq, void 0, !1, !1);
                Eq.materialDefines && (Eq.materialDefines._renderId = -1), this.isReadyForSubMesh(qq, Eq, lq.useInstances) || (Eq.effect && Eq.effect.getCompilationError() && Eq.effect.allFallbacksProcessed() ? Oq = Eq.effect.getCompilationError() : (gq = !1, setTimeout(xq, 16)))
              }
              gq && (this.allowShaderHotSwapping = mq, Oq && Yq && Yq(Oq), Eq && Eq(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = mq, Eq && Eq(this)) : setTimeout(xq, 16);
            lq.clipPlane && (Oq.clipPlane = gq)
          };
          xq()
        }
        async forceCompilationAsync(qq, Eq) {
          return await new Promise(((gq, Yq) => {
            this.forceCompilation(qq, (() => {
              gq()
            }), Eq, (qq => {
              Yq(qq)
            }))
          }))
        }
        xgq(Eq) {
          this.ZJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (qq._DirtyCallbackArray.length = 0, Eq & qq.ImageProcessingDirtyFlag && qq._DirtyCallbackArray.push(qq._ImageProcessingDirtyCallBack), Eq & qq.TextureDirtyFlag && qq._DirtyCallbackArray.push(qq._TextureDirtyCallBack), Eq & qq.LightDirtyFlag && qq._DirtyCallbackArray.push(qq._LightsDirtyCallBack), Eq & qq.FresnelDirtyFlag && qq._DirtyCallbackArray.push(qq._FresnelDirtyCallBack), Eq & qq.AttributesDirtyFlag && qq._DirtyCallbackArray.push(qq._AttributeDirtyCallBack), Eq & qq.MiscDirtyFlag && qq._DirtyCallbackArray.push(qq._MiscDirtyCallBack), Eq & qq.PrePassDirtyFlag && qq._DirtyCallbackArray.push(qq._PrePassDirtyCallBack), qq._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(qq._RunDirtyCallBacks), this.ZJ().resetCachedMaterial())
        }
        resetDrawCache() {
          const qq = this.ZJ().meshes;
          for (const Eq of qq)
            if (Eq.fn)
              for (const qq of Eq.fn) qq.da() === this && qq.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(qq) {
          const Eq = this.ZJ();
          if (Eq.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const gq = Eq.meshes;
          for (const Yq of gq)
            if (Yq.fn)
              for (const gq of Yq.fn) {
                if ((gq.da() || (Eq._hasDefaultMaterial ? Eq.defaultMaterial : null)) === this)
                  for (const Eq of gq._drawWrappers) Eq && Eq.defines && Eq.defines.markAllAsDirty && this._materialContext === Eq.materialContext && qq(Eq.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.ZJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const qq = this.ZJ().enablePrePassRenderer();
          qq && qq.xgq()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(qq._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(qq._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(qq._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(qq._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(qq._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(qq._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(qq._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(qq._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(qq._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(qq._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const qq = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.MJ.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(qq)
            }))
          }
        }
        setPrePassRenderer(qq) {
          return !1
        }
        dispose(qq, Eq, gq) {
          const Yq = this.ZJ();
          if (Yq.stopAnimation(this), Yq.freeProcessedMaterials(), Yq.removeMaterial(this), this._eventInfo.forceDisposeTextures = Eq, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const qq = this._parentContainer.materials.indexOf(this);
            qq > -1 && this._parentContainer.materials.splice(qq, 1), this._parentContainer = null
          }
          if (!0 !== gq)
            if (this.meshMap)
              for (const lq in this.meshMap) {
                const qq = this.meshMap[lq];
                this._disposeMeshResources(qq)
              } else {
                const qq = Yq.meshes;
                for (const Eq of qq) this._disposeMeshResources(Eq)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.MJ.notifyObservers(this), this.MJ.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(qq) {
          if (!qq) return;
          const Eq = qq.geometry,
            gq = qq._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (qq.fn && gq)
              for (const Yq of qq.fn) {
                const qq = Yq._drawWrappers;
                for (let lq = 0; lq < qq.length; lq++) {
                  const Oq = qq[lq]?.effect;
                  if (!Oq) continue;
                  gq[lq] === this && (Eq?._releaseVertexArrayObject(Oq), Yq._removeDrawWrapper(lq, !0, !0))
                }
              }
          } else Eq?._releaseVertexArrayObject(this._drawWrapper.effect);
          qq.material !== this || qq.Plq || (qq.material = null)
        }
        serialize() {
          const qq = Nq.d.Serialize(this);
          return qq.stencil = this.stencil.serialize(), qq.uniqueId = this.uniqueId, this._serializePlugins(qq), qq
        }
        _serializePlugins(qq) {
          if (qq.plugins = {}, this.pluginManager)
            for (const Eq of this.pluginManager._plugins) Eq.doNotSerialize || (qq.plugins[Eq.getClassName()] = Eq.serialize())
        }
        static ParseAlphaMode(qq, Eq) {
          void 0 !== qq._alphaMode ? Eq._alphaMode = Array.isArray(qq._alphaMode) ? [...qq._alphaMode] : [qq._alphaMode] : void 0 !== qq.alphaMode ? Eq._alphaMode = Array.isArray(qq.alphaMode) ? [...qq.alphaMode] : [qq.alphaMode] : Eq._alphaMode = [2]
        }
        static Parse(Eq, gq, Yq) {
          if (Eq.customType) {
            if ("BABYLON.PBRMaterial" === Eq.customType && Eq.overloadedAlbedo && (Eq.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return uq.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Eq.customType = "BABYLON.StandardMaterial";
          const lq = Oq.f.Instantiate(Eq.customType).Parse(Eq, gq, Yq);
          return lq._loadedUniqueId = Eq.uniqueId, qq.ParseAlphaMode(Eq, lq), lq
        }
        static _ParsePlugins(qq, Eq, gq, Yq) {
          if (qq.plugins)
            for (const lq in qq.plugins) {
              const mq = qq.plugins[lq];
              let xq = Eq.pluginManager?.getPlugin(mq.name);
              if (!xq) {
                const qq = Oq.f.Instantiate("BABYLON." + lq);
                qq && (xq = new qq(Eq))
              }
              xq?.parse(mq, gq, Yq)
            }
        }
      }, (() => {
        const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)("alpha")], tq = [(0, lq.M)("backFaceCulling")], rq = [(0, lq.M)("textureRepetitionMode")], vq = [(0, lq.M)("textureRepetitionHexTilingParams")], hq = [(0, lq.M)("cullBackFaces")], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], Zq = [(0, lq.M)()], fq = [(0, lq.M)()], Mq = [(0, lq.M)()], Tq = [(0, lq.M)()], zq = [(0, lq.M)()], Sq = [(0, lq.M)("fogEnabled")], pq = [(0, lq.M)()], Gq = [(0, lq.M)()], Lq = [(0, lq.M)()], Jq = [(0, lq.M)()], kq = [(0, lq.M)()], Rq = [(0, lq.M)()], Uq = [(0, lq.M)()], Fq = [(0, lq.M)()], (0, Yq.f)(qq, null, Jq, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: qq => "pointsCloud" in qq,
            get: qq => qq.pointsCloud
          },
          metadata: Oq
        }, null, sq), (0, Yq.f)(qq, null, kq, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "fillMode" in qq,
            get: qq => qq.fillMode
          },
          metadata: Oq
        }, null, sq), (0, Yq.f)(qq, null, Rq, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: qq => "useLogarithmicDepth" in qq,
            get: qq => qq.useLogarithmicDepth
          },
          metadata: Oq
        }, null, sq), (0, Yq.f)(qq, null, Fq, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "transparencyMode" in qq,
            get: qq => qq.transparencyMode
          },
          metadata: Oq
        }, null, sq), (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: qq => "id" in qq,
            get: qq => qq.id,
            set: (qq, Eq) => {
              qq.id = Eq
            }
          },
          metadata: Oq
        }, Xq, wq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: qq => "uniqueId" in qq,
            get: qq => qq.uniqueId,
            set: (qq, Eq) => {
              qq.uniqueId = Eq
            }
          },
          metadata: Oq
        }, Kq, Cq), (0, Yq.f)(null, null, jq, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: qq => "name" in qq,
            get: qq => qq.name,
            set: (qq, Eq) => {
              qq.name = Eq
            }
          },
          metadata: Oq
        }, Iq, eq), (0, Yq.f)(null, null, Hq, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: qq => "metadata" in qq,
            get: qq => qq.metadata,
            set: (qq, Eq) => {
              qq.metadata = Eq
            }
          },
          metadata: Oq
        }, Dq, qE), (0, Yq.f)(null, null, oq, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: qq => "checkReadyOnEveryCall" in qq,
            get: qq => qq.checkReadyOnEveryCall,
            set: (qq, Eq) => {
              qq.checkReadyOnEveryCall = Eq
            }
          },
          metadata: Oq
        }, EE, gE), (0, Yq.f)(null, null, Pq, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: qq => "checkReadyOnlyOnce" in qq,
            get: qq => qq.checkReadyOnlyOnce,
            set: (qq, Eq) => {
              qq.checkReadyOnlyOnce = Eq
            }
          },
          metadata: Oq
        }, YE, lE), (0, Yq.f)(null, null, Qq, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: qq => "state" in qq,
            get: qq => qq.state,
            set: (qq, Eq) => {
              qq.state = Eq
            }
          },
          metadata: Oq
        }, OE, mE), (0, Yq.f)(null, null, yq, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "_alpha" in qq,
            get: qq => qq._alpha,
            set: (qq, Eq) => {
              qq._alpha = Eq
            }
          },
          metadata: Oq
        }, xE, AE), (0, Yq.f)(null, null, tq, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: qq => "_backFaceCulling" in qq,
            get: qq => qq._backFaceCulling,
            set: (qq, Eq) => {
              qq._backFaceCulling = Eq
            }
          },
          metadata: Oq
        }, cE, uE), (0, Yq.f)(null, null, rq, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "_textureRepetitionMode" in qq,
            get: qq => qq._textureRepetitionMode,
            set: (qq, Eq) => {
              qq._textureRepetitionMode = Eq
            }
          },
          metadata: Oq
        }, BE, WE), (0, Yq.f)(null, null, vq, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: qq => "textureRepetitionHexTilingParams" in qq,
            get: qq => qq.textureRepetitionHexTilingParams,
            set: (qq, Eq) => {
              qq.textureRepetitionHexTilingParams = Eq
            }
          },
          metadata: Oq
        }, NE, aE), (0, Yq.f)(null, null, hq, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: qq => "_cullBackFaces" in qq,
            get: qq => qq._cullBackFaces,
            set: (qq, Eq) => {
              qq._cullBackFaces = Eq
            }
          },
          metadata: Oq
        }, VE, dE), (0, Yq.f)(null, null, nq, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: qq => "sideOrientation" in qq,
            get: qq => qq.sideOrientation,
            set: (qq, Eq) => {
              qq.sideOrientation = Eq
            }
          },
          metadata: Oq
        }, jE, HE), (0, Yq.f)(null, null, bq, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "_alphaMode" in qq,
            get: qq => qq._alphaMode,
            set: (qq, Eq) => {
              qq._alphaMode = Eq
            }
          },
          metadata: Oq
        }, oE, PE), (0, Yq.f)(null, null, iq, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: qq => "_needDepthPrePass" in qq,
            get: qq => qq._needDepthPrePass,
            set: (qq, Eq) => {
              qq._needDepthPrePass = Eq
            }
          },
          metadata: Oq
        }, QE, yE), (0, Yq.f)(null, null, Zq, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: qq => "disableDepthWrite" in qq,
            get: qq => qq.disableDepthWrite,
            set: (qq, Eq) => {
              qq.disableDepthWrite = Eq
            }
          },
          metadata: Oq
        }, tE, rE), (0, Yq.f)(null, null, fq, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: qq => "disableColorWrite" in qq,
            get: qq => qq.disableColorWrite,
            set: (qq, Eq) => {
              qq.disableColorWrite = Eq
            }
          },
          metadata: Oq
        }, vE, hE), (0, Yq.f)(null, null, Mq, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: qq => "forceDepthWrite" in qq,
            get: qq => qq.forceDepthWrite,
            set: (qq, Eq) => {
              qq.forceDepthWrite = Eq
            }
          },
          metadata: Oq
        }, nE, bE), (0, Yq.f)(null, null, Tq, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: qq => "depthFunction" in qq,
            get: qq => qq.depthFunction,
            set: (qq, Eq) => {
              qq.depthFunction = Eq
            }
          },
          metadata: Oq
        }, iE, ZE), (0, Yq.f)(null, null, zq, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: qq => "separateCullingPass" in qq,
            get: qq => qq.separateCullingPass,
            set: (qq, Eq) => {
              qq.separateCullingPass = Eq
            }
          },
          metadata: Oq
        }, fE, ME), (0, Yq.f)(null, null, Sq, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "_fogEnabled" in qq,
            get: qq => qq._fogEnabled,
            set: (qq, Eq) => {
              qq._fogEnabled = Eq
            }
          },
          metadata: Oq
        }, TE, zE), (0, Yq.f)(null, null, pq, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: qq => "pointSize" in qq,
            get: qq => qq.pointSize,
            set: (qq, Eq) => {
              qq.pointSize = Eq
            }
          },
          metadata: Oq
        }, SE, pE), (0, Yq.f)(null, null, Gq, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: qq => "zOffset" in qq,
            get: qq => qq.zOffset,
            set: (qq, Eq) => {
              qq.zOffset = Eq
            }
          },
          metadata: Oq
        }, GE, LE), (0, Yq.f)(null, null, Lq, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: qq => "zOffsetUnits" in qq,
            get: qq => qq.zOffsetUnits,
            set: (qq, Eq) => {
              qq.zOffsetUnits = Eq
            }
          },
          metadata: Oq
        }, JE, kE), (0, Yq.f)(null, null, Uq, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: qq => "_isVertexOutputInvariant" in qq,
            get: qq => qq._isVertexOutputInvariant,
            set: (qq, Eq) => {
              qq._isVertexOutputInvariant = Eq
            }
          },
          metadata: Oq
        }, RE, UE), Oq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oq
        })
      })(), qq.TriangleFillMode = 0, qq.WireFrameFillMode = 1, qq.PointFillMode = 2, qq.PointListDrawMode = 3, qq.LineListDrawMode = 4, qq.LineLoopDrawMode = 5, qq.LineStripDrawMode = 6, qq.TriangleStripDrawMode = 7, qq.TriangleFanDrawMode = 8, qq.ClockWiseSideOrientation = 0, qq.CounterClockWiseSideOrientation = 1, qq.ImageProcessingDirtyFlag = 64, qq.TextureDirtyFlag = 1, qq.LightDirtyFlag = 2, qq.FresnelDirtyFlag = 4, qq.AttributesDirtyFlag = 8, qq.MiscDirtyFlag = 16, qq.PrePassDirtyFlag = 32, qq.AllDirtyFlag = 127, qq.MATERIAL_OPAQUE = 0, qq.MATERIAL_ALPHATEST = 1, qq.MATERIAL_ALPHABLEND = 2, qq.MATERIAL_ALPHATESTANDBLEND = 3, qq.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, qq.MATERIAL_NORMALBLENDMETHOD_RNM = 1, qq.LIGHTFALLOFF_PHYSICAL = 0, qq.LIGHTFALLOFF_GLTF = 1, qq.LIGHTFALLOFF_STANDARD = 2, qq.OnEventObservable = new mq.d, qq.ForceVertexOutputInvariant = !1, qq._AllDirtyCallBack = qq => qq.markAllAsDirty(), qq._ImageProcessingDirtyCallBack = qq => qq.markAsImageProcessingDirty(), qq._TextureDirtyCallBack = qq => qq.markAsTexturesDirty(), qq._FresnelDirtyCallBack = qq => qq.markAsFresnelDirty(), qq._MiscDirtyCallBack = qq => qq.markAsMiscDirty(), qq._PrePassDirtyCallBack = qq => qq.markAsPrePassDirty(), qq._LightsDirtyCallBack = qq => qq.markAsLightDirty(), qq._AttributeDirtyCallBack = qq => qq.markAsAttributesDirty(), qq._FresnelAndMiscDirtyCallBack = Eq => {
        qq._FresnelDirtyCallBack(Eq), qq._MiscDirtyCallBack(Eq)
      }, qq._TextureAndMiscDirtyCallBack = Eq => {
        qq._TextureDirtyCallBack(Eq), qq._MiscDirtyCallBack(Eq)
      }, qq._DirtyCallbackArray = [], qq._RunDirtyCallBacks = Eq => {
        for (const gq of qq._DirtyCallbackArray) gq(Eq)
      }, qq
    })();
    Object.getOwnPropertyDescriptor(Hq.prototype, "pluginManager") || Object.defineProperty(Hq.prototype, "pluginManager", (0, jq.e)("Material", "pluginManager"))
  },
  40092: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(39653);
    class lq {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(qq) {
        this._DiffuseTextureEnabled !== qq && (this._DiffuseTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(qq) {
        this._BaseWeightTextureEnabled !== qq && (this._BaseWeightTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(qq) {
        this._BaseDiffuseRoughnessTextureEnabled !== qq && (this._BaseDiffuseRoughnessTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(qq) {
        this._DetailTextureEnabled !== qq && (this._DetailTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(qq) {
        this._DecalMapEnabled !== qq && (this._DecalMapEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(qq) {
        this._AmbientTextureEnabled !== qq && (this._AmbientTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(qq) {
        this._OpacityTextureEnabled !== qq && (this._OpacityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(qq) {
        this._ReflectionTextureEnabled !== qq && (this._ReflectionTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(qq) {
        this._EmissiveTextureEnabled !== qq && (this._EmissiveTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(qq) {
        this._SpecularTextureEnabled !== qq && (this._SpecularTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(qq) {
        this._BumpTextureEnabled !== qq && (this._BumpTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(qq) {
        this._LightmapTextureEnabled !== qq && (this._LightmapTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(qq) {
        this._RefractionTextureEnabled !== qq && (this._RefractionTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(qq) {
        this._ColorGradingTextureEnabled !== qq && (this._ColorGradingTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(qq) {
        this._FresnelEnabled !== qq && (this._FresnelEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(qq) {
        this._ClearCoatTextureEnabled !== qq && (this._ClearCoatTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(qq) {
        this._ClearCoatBumpTextureEnabled !== qq && (this._ClearCoatBumpTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(qq) {
        this._ClearCoatTintTextureEnabled !== qq && (this._ClearCoatTintTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(qq) {
        this._SheenTextureEnabled !== qq && (this._SheenTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(qq) {
        this._AnisotropicTextureEnabled !== qq && (this._AnisotropicTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(qq) {
        this._ThicknessTextureEnabled !== qq && (this._ThicknessTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(qq) {
        this._RefractionIntensityTextureEnabled !== qq && (this._RefractionIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(qq) {
        this._TranslucencyIntensityTextureEnabled !== qq && (this._TranslucencyIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(qq) {
        this._TranslucencyColorTextureEnabled !== qq && (this._TranslucencyColorTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(qq) {
        this._IridescenceTextureEnabled !== qq && (this._IridescenceTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
      }
    }
    lq._DiffuseTextureEnabled = !0, lq._BaseWeightTextureEnabled = !0, lq._BaseDiffuseRoughnessTextureEnabled = !0, lq._DetailTextureEnabled = !0, lq._DecalMapEnabled = !0, lq._AmbientTextureEnabled = !0, lq._OpacityTextureEnabled = !0, lq._ReflectionTextureEnabled = !0, lq._EmissiveTextureEnabled = !0, lq._SpecularTextureEnabled = !0, lq._BumpTextureEnabled = !0, lq._LightmapTextureEnabled = !0, lq._RefractionTextureEnabled = !0, lq._ColorGradingTextureEnabled = !0, lq._FresnelEnabled = !0, lq._ClearCoatTextureEnabled = !0, lq._ClearCoatBumpTextureEnabled = !0, lq._ClearCoatTintTextureEnabled = !0, lq._SheenTextureEnabled = !0, lq._AnisotropicTextureEnabled = !0, lq._ThicknessTextureEnabled = !0, lq._RefractionIntensityTextureEnabled = !0, lq._TranslucencyIntensityTextureEnabled = !0, lq._TranslucencyColorTextureEnabled = !0, lq._IridescenceTextureEnabled = !0
  },
  40079: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => Qq,
      G: () => nq,
      J: () => bq,
      M: () => Nq,
      Q: () => Wq,
      R: () => kq,
      V: () => Sq,
      W: () => Tq,
      _: () => Mq,
      b: () => fq,
      bb: () => oq,
      c: () => yq,
      f: () => Bq,
      fb: () => Zq,
      hb: () => Rq,
      i: () => jq,
      jb: () => Uq,
      l: () => Hq,
      n: () => hq,
      nb: () => Fq,
      o: () => Aq,
      p: () => Vq,
      pb: () => Kq,
      rb: () => Xq,
      s: () => dq,
      vb: () => wq,
      w: () => Pq,
      xb: () => aq,
      z: () => iq
    });
    var Yq = gq(38653),
      lq = gq(37153),
      Oq = gq(39938),
      mq = gq(40083),
      xq = gq(40092);

    function Aq(qq, Eq, gq) {
      if (!qq || qq.LOGARITHMICDEPTH || qq.indexOf && qq.indexOf("LOGARITHMICDEPTH") >= 0) {
        const qq = gq.activeCamera;
        1 === qq.mode && Yq.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Eq.setFloat("logarithmicDepthConstant", 2 / (Math.log(qq.maxZ + 1) / Math.LN2))
      }
    }
    const cq = {
        r: 0,
        g: 0,
        b: 0
      },
      uq = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Bq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      gq && qq.fogEnabled && (!Eq || Eq.applyFog) && 0 !== qq.fogMode && (gq.setFloat4("vFogInfos", qq.fogMode, qq.fogStart, qq.fogEnd, qq.fogDensity), Yq ? (qq.fogColor.toLinearSpaceToRef(cq, qq.Ba().useExactSrgbConversions), gq.setColor3("vFogColor", cq)) : gq.setColor3("vFogColor", qq.fogColor))
    }

    function Wq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
      const Bq = qq.numMaxInfluencers || qq.numInfluencers;
      return Bq <= 0 ? 0 : (Eq.push("#define MORPHTARGETS"), qq.hasPositions && Eq.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), qq.hasNormals && Eq.push("#define MORPHTARGETTEXTURE_HASNORMALS"), qq.hasTangents && Eq.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), qq.hasUVs && Eq.push("#define MORPHTARGETTEXTURE_HASUVS"), qq.hasUV2s && Eq.push("#define MORPHTARGETTEXTURE_HASUV2S"), qq.hasColors && Eq.push("#define MORPHTARGETTEXTURE_HASCOLORS"), qq.supportsPositions && lq && Eq.push("#define MORPHTARGETS_POSITION"), qq.supportsNormals && Oq && Eq.push("#define MORPHTARGETS_NORMAL"), qq.supportsTangents && mq && Eq.push("#define MORPHTARGETS_TANGENT"), qq.supportsUVs && xq && Eq.push("#define MORPHTARGETS_UV"), qq.supportsUV2s && Aq && Eq.push("#define MORPHTARGETS_UV2"), qq.supportsColors && cq && Eq.push("#define MORPHTARGETS_COLOR"), Eq.push("#define NUM_MORPH_INFLUENCERS " + Bq), qq.isUsingTextureForTargets && Eq.push("#define MORPHTARGETS_TEXTURE"), uq.NUM_MORPH_INFLUENCERS = Bq, uq.NORMAL = Oq, uq.TANGENT = mq, uq.UV = xq, uq.UV2 = Aq, uq.COLOR = cq, Nq(gq, Yq, uq, lq), Bq)
    }

    function Nq(qq, Eq, gq) {
      let Oq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const mq = gq.NUM_MORPH_INFLUENCERS;
      if (mq > 0 && lq.b.LastCreatedEngine) {
        const xq = lq.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          Aq = Eq.morphTargetManager;
        if (Aq?.isUsingTextureForTargets) return;
        const cq = Aq && Aq.supportsPositions && Oq,
          uq = Aq && Aq.supportsNormals && gq.NORMAL,
          Bq = Aq && Aq.supportsTangents && gq.TANGENT,
          Wq = Aq && Aq.supportsUVs && gq.UV1,
          Nq = Aq && Aq.supportsUV2s && gq.UV2,
          aq = Aq && Aq.supportsColors && gq.VERTEXCOLOR;
        for (let gq = 0; gq < mq; gq++) cq && qq.push("position" + gq), uq && qq.push("normal" + gq), Bq && qq.push("tangent" + gq), Wq && qq.push("uv_" + gq), Nq && qq.push("uv2_" + gq), aq && qq.push("color" + gq), qq.length > xq && Yq.b.Error("Cannot add more vertex attributes for mesh " + Eq.name)
      }
    }

    function aq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      qq.push("world0"), qq.push("world1"), qq.push("world2"), qq.push("world3"), Eq && (qq.push("previousWorld0"), qq.push("previousWorld1"), qq.push("previousWorld2"), qq.push("previousWorld3"))
    }

    function Vq(qq, Eq) {
      const gq = qq.morphTargetManager;
      qq && gq && Eq.setFloatArray("morphTargetInfluences", gq.influences)
    }

    function dq(qq, Eq) {
      Eq.bindToEffect(qq, "Scene")
    }

    function jq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Bq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Wq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (qq.texturesEnabled && lq && xq.c.ReflectionTextureEnabled) {
        if (gq.Eqq("reflectionMatrix", lq.getReflectionTextureMatrix()), gq.updateFloat2("vReflectionInfos", lq.level * qq.iblIntensity, Wq), Aq && lq.boundingBoxSize) {
          const qq = lq;
          gq.updateVector3("vReflectionPosition", qq.boundingBoxPosition), gq.updateVector3("vReflectionSize", qq.boundingBoxSize)
        }
        if (Oq) {
          const qq = lq.getSize().width;
          gq.updateFloat2("vReflectionFilteringInfo", qq, Math.log2(qq))
        }
        if (uq && !Eq.USEIRRADIANCEMAP) {
          const qq = lq.sphericalPolynomial;
          if (Eq.USESPHERICALFROMREFLECTIONMAP && qq)
            if (Eq.SPHERICAL_HARMONICS) {
              const Eq = qq.preScaledHarmonics;
              gq.updateVector3("vSphericalL00", Eq.l00), gq.updateVector3("vSphericalL1_1", Eq.l1_1), gq.updateVector3("vSphericalL10", Eq.l10), gq.updateVector3("vSphericalL11", Eq.l11), gq.updateVector3("vSphericalL2_2", Eq.l2_2), gq.updateVector3("vSphericalL2_1", Eq.l2_1), gq.updateVector3("vSphericalL20", Eq.l20), gq.updateVector3("vSphericalL21", Eq.l21), gq.updateVector3("vSphericalL22", Eq.l22)
            } else gq.updateFloat3("vSphericalX", qq.x.x, qq.x.y, qq.x.z), gq.updateFloat3("vSphericalY", qq.y.x, qq.y.y, qq.y.z), gq.updateFloat3("vSphericalZ", qq.z.x, qq.z.y, qq.z.z), gq.updateFloat3("vSphericalXX_ZZ", qq.xx.x - qq.zz.x, qq.xx.y - qq.zz.y, qq.xx.z - qq.zz.z), gq.updateFloat3("vSphericalYY_ZZ", qq.yy.x - qq.zz.x, qq.yy.y - qq.zz.y, qq.yy.z - qq.zz.z), gq.updateFloat3("vSphericalZZ", qq.zz.x, qq.zz.y, qq.zz.z), gq.updateFloat3("vSphericalXY", qq.xy.x, qq.xy.y, qq.xy.z), gq.updateFloat3("vSphericalYZ", qq.yz.x, qq.yz.y, qq.yz.z), gq.updateFloat3("vSphericalZX", qq.zx.x, qq.zx.y, qq.zx.z)
        } else cq && Eq.USEIRRADIANCEMAP && Eq.USE_IRRADIANCE_DOMINANT_DIRECTION && lq.irradianceTexture && gq.updateVector3("vReflectionDominantDirection", lq.irradianceTexture._dominantDirection);
        mq && gq.updateFloat3("vReflectionMicrosurfaceInfos", lq.getSize().width, lq.lodGenerationScale, lq.lodGenerationOffset)
      }
      Bq && gq.updateColor3("vReflectionColor", Yq)
    }

    function Hq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Yq && xq.c.ReflectionTextureEnabled) {
        Eq.LODBASEDMICROSFURACE ? gq.setTexture("reflectionSampler", Yq) : (gq.setTexture("reflectionSampler", Yq._lodTextureMid || Yq), gq.setTexture("reflectionSamplerLow", Yq._lodTextureLow || Yq), gq.setTexture("reflectionSamplerHigh", Yq._lodTextureHigh || Yq)), Eq.USEIRRADIANCEMAP && gq.setTexture("irradianceSampler", Yq.irradianceTexture);
        const Oq = qq.iblCdfGenerator;
        lq && Oq && gq.setTexture("icdfSampler", Oq.getIcdfTexture())
      }
    }

    function oq(qq, Eq, gq) {
      Eq._needUVs = !0, Eq[gq] = !0, qq.optimizeUVAllocation && qq.getTextureMatrix().isIdentityAs3x2() ? (Eq[gq + "DIRECTUV"] = qq.coordinatesIndex + 1, Eq["MAINUV" + (qq.coordinatesIndex + 1)] = !0) : Eq[gq + "DIRECTUV"] = 0
    }

    function Pq(qq, Eq, gq) {
      const Yq = qq.getTextureMatrix();
      Eq.Eqq(gq + "Matrix", Yq)
    }

    function Qq(qq, Eq, gq) {
      gq.BAKED_VERTEX_ANIMATION_TEXTURE && gq.INSTANCES && qq.push("bakedVertexAnimationSettingsInstanced")
    }

    function yq(qq, Eq, gq) {
      var Yq;
      if (Eq && qq && (qq.computeBonesUsingShaders && Eq._bonesComputationForcedToCPU && (qq.computeBonesUsingShaders = !1), qq.useBones && qq.computeBonesUsingShaders && qq.skeleton)) {
        const lq = qq.skeleton;
        if (lq.isUsingTextureForMatrices && Eq.getUniformIndex("boneTextureInfo") > -1) {
          const gq = lq.getTransformMatrixTexture(qq);
          Eq.setTexture("boneSampler", gq), Eq.setFloat2("boneTextureInfo", lq._textureWidth, lq._textureHeight)
        } else {
          const Oq = lq.getTransformMatrices(qq);
          Oq && (Eq.setMatrices("mBones", Oq), gq && qq.ZJ().prePassRenderer && qq.ZJ().prePassRenderer.getIndex(2) && (gq.previousBones[qq.uniqueId] || (gq.previousBones[qq.uniqueId] = Oq.slice()), Eq.setMatrices("mPreviousBones", gq.previousBones[qq.uniqueId]), Yq = Oq, gq.previousBones[qq.uniqueId].set(Yq)))
        }
      }
    }

    function tq(qq, Eq, gq, Yq, lq) {
      let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      qq._bindLight(Eq, gq, Yq, lq, Oq)
    }
    const rq = 4,
      vq = new WeakMap;

    function hq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Oq = Math.min(Eq.lightSources.length, lq);
      for (let mq = 0; mq < Oq; mq++) {
        tq(Eq.lightSources[mq], mq, qq, gq, "boolean" === typeof Yq ? Yq : Yq.SPECULARTERM, Eq.receiveShadows)
      }
    }

    function nq(qq, Eq, gq, Yq) {
      gq.NUM_BONE_INFLUENCERS > 0 && (Yq.addCPUSkinningFallback(0, Eq), qq.push("matricesIndices"), qq.push("matricesWeights"), gq.NUM_BONE_INFLUENCERS > 4 && (qq.push("matricesIndicesExtra"), qq.push("matricesWeightsExtra")))
    }

    function bq(qq, Eq) {
      (Eq.INSTANCES || Eq.THIN_INSTANCES) && aq(qq, !!Eq.PREPASS_VELOCITY), Eq.INSTANCESCOLOR && qq.push("instanceColor")
    }

    function iq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        lq = 0;
      for (let Oq = 0; Oq < gq && qq["LIGHT" + Oq]; Oq++) Oq > 0 && (lq = Yq + Oq, Eq.addFallback(lq, "LIGHT" + Oq)), qq.SHADOWS || (qq["SHADOW" + Oq] && Eq.addFallback(Yq, "SHADOW" + Oq), qq["SHADOWPCF" + Oq] && Eq.addFallback(Yq, "SHADOWPCF" + Oq), qq["SHADOWPCSS" + Oq] && Eq.addFallback(Yq, "SHADOWPCSS" + Oq), qq["SHADOWPOISSON" + Oq] && Eq.addFallback(Yq, "SHADOWPOISSON" + Oq), qq["SHADOWESM" + Oq] && Eq.addFallback(Yq, "SHADOWESM" + Oq), qq["SHADOWCLOSEESM" + Oq] && Eq.addFallback(Yq, "SHADOWCLOSEESM" + Oq));
      return lq
    }

    function Zq(qq, Eq, gq, Yq, lq, Oq, mq) {
      let xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cq = arguments.length > 9 ? arguments[9] : void 0,
        uq = arguments.length > 10 ? arguments[10] : void 0;
      if (mq._areMiscDirty) {
        mq.LOGARITHMICDEPTH = gq, mq.POINTSIZE = Yq, mq.FOG = lq && function(qq, Eq) {
          return Eq.fogEnabled && qq.applyFog && 0 !== Eq.fogMode
        }(qq, Eq), mq.NONUNIFORMSCALING = qq.nonUniformScaling, mq.ALPHATEST = Oq, mq.DECAL_AFTER_DETAIL = xq, mq.USE_VERTEX_PULLING = Aq, mq.RIGHT_HANDED = Eq.useRightHandedSystem;
        const Bq = Aq ? cq?.geometry?.getIndexBuffer() : null,
          Wq = !!cq && cq.isUnIndexed;
        mq.VERTEX_PULLING_USE_INDEX_BUFFER = !!Bq && !Wq, mq.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Bq || Wq) && Bq.is32Bits, mq.VERTEXOUTPUT_INVARIANT = !!uq
      }
    }

    function fq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!qq.lightsEnabled || Yq) return !0;
      const lq = Eq.lightSources,
        Oq = Math.min(lq.length, gq);
      for (let mq = 0; mq < Oq; mq++)
        if (!lq[mq].areLightTexturesReady()) return !1;
      return !0
    }

    function Mq(qq, Eq, gq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!gq._areLightsDirty) return gq._needNormals;
      const xq = Oq;
      Oq = function(qq, Eq) {
        const gq = qq.Ba().getCaps().maxUniformBuffersPerShaderStage;
        if (null == gq) return Eq;
        const Yq = Math.max(gq - rq, 1);
        return Math.min(Eq, Yq)
      }(qq, Oq);
      let Aq = 0;
      const cq = {
        needNormals: gq._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (qq.lightsEnabled && !mq) {
        Eq.lightSources.length > Oq && Oq < xq && function(qq, Eq, gq, lq) {
          let Oq = vq.get(qq);
          Oq || (Oq = new Set, vq.set(qq, Oq)), Oq.has(lq) || (Oq.add(lq), Yq.b.Warn(`maxSimultaneousLights is ${Eq} but this engine supports at most ${gq} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${lq} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${lq+rq} uniform buffers, over the device limit of ${qq.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${gq}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${gq} or less to silence this warning.`))
        }(qq.Ba(), xq, Oq, Math.min(Eq.lightSources.length, xq));
        for (const Yq of Eq.lightSources)
          if (zq(qq, Eq, Yq, Aq, gq, lq, cq), Aq++, Aq === Oq) break
      }
      gq.SPECULARTERM = cq.specularEnabled, gq.SHADOWS = cq.shadowEnabled;
      const uq = Math.max(Oq, gq.MAXLIGHTCOUNT || 0);
      for (let Yq = Aq; Yq < uq; Yq++) void 0 !== gq["LIGHT" + Yq] && (gq["LIGHT" + Yq] = !1, gq["HEMILIGHT" + Yq] = !1, gq["POINTLIGHT" + Yq] = !1, gq["DIRLIGHT" + Yq] = !1, gq["SPOTLIGHT" + Yq] = !1, gq["AREALIGHT" + Yq] = !1, gq["CLUSTLIGHT" + Yq] = !1, gq["SHADOW" + Yq] = !1, gq["SHADOWCSM" + Yq] = !1, gq["SHADOWCSMDEBUG" + Yq] = !1, gq["SHADOWCSMNUM_CASCADES" + Yq] = !1, gq["SHADOWCSMUSESHADOWMAXZ" + Yq] = !1, gq["SHADOWCSMNOBLEND" + Yq] = !1, gq["SHADOWCSM_RIGHTHANDED" + Yq] = !1, gq["SHADOWPCF" + Yq] = !1, gq["SHADOWPCSS" + Yq] = !1, gq["SHADOWPOISSON" + Yq] = !1, gq["SHADOWESM" + Yq] = !1, gq["SHADOWCLOSEESM" + Yq] = !1, gq["SHADOWCUBE" + Yq] = !1, gq["SHADOWLOWQUALITY" + Yq] = !1, gq["SHADOWMEDIUMQUALITY" + Yq] = !1);
      gq.LIGHTCOUNT = Aq, gq.MAXLIGHTCOUNT = Oq;
      const Bq = qq.Ba().getCaps();
      return void 0 === gq.SHADOWFLOAT && (cq.needRebuild = !0), gq.SHADOWFLOAT = cq.shadowEnabled && (Bq.textureFloatRender && Bq.textureFloatLinearFiltering || Bq.textureHalfFloatRender && Bq.textureHalfFloatLinearFiltering), gq.LIGHTMAPEXCLUDED = cq.lightmapMode, cq.needRebuild && gq.rebuild(), cq.needNormals
    }

    function Tq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Eq && xq.c.ReflectionTextureEnabled) {
        if (!Eq.isReadyOrNotBlocking()) return !1;
        gq._needNormals = !0, gq.REFLECTION = !0, gq.GAMMAREFLECTION = Eq.gammaSpace, gq.RGBDREFLECTION = Eq.isRGBD, gq.LODINREFLECTIONALPHA = Eq.lodLevelInAlpha, gq.LINEARSPECULARREFLECTION = Eq.linearSpecularLOD, gq.USEIRRADIANCEMAP = !1, gq.LODBASEDMICROSFURACE = qq.Ba().getCaps().textureLOD;
        const mq = qq.Ba();
        switch (Yq && lq > 0 ? (gq.NUM_SAMPLES = "" + lq, mq._features.needTypeSuffixInShaderConstants && (gq.NUM_SAMPLES = gq.NUM_SAMPLES + "u"), gq.REALTIME_FILTERING = !0, qq.iblCdfGenerator && (gq.IBL_CDF_FILTERING = !0)) : gq.REALTIME_FILTERING = !1, gq.INVERTCUBICMAP = 6 === Eq.coordinatesMode, gq.REFLECTIONMAP_3D = Eq.isCube, gq.REFLECTIONMAP_OPPOSITEZ = gq.REFLECTIONMAP_3D && qq.useRightHandedSystem ? !Eq.invertZ : Eq.invertZ, gq.REFLECTIONMAP_CUBIC = !1, gq.REFLECTIONMAP_EXPLICIT = !1, gq.REFLECTIONMAP_PLANAR = !1, gq.REFLECTIONMAP_PROJECTION = !1, gq.REFLECTIONMAP_SKYBOX = !1, gq.REFLECTIONMAP_SPHERICAL = !1, gq.REFLECTIONMAP_EQUIRECTANGULAR = !1, gq.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, gq.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Eq.coordinatesMode) {
          case 0:
            gq.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            gq.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            gq.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            gq.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            gq.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            gq.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            gq.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            gq.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            gq.REFLECTIONMAP_CUBIC = !0, gq.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Eq.boundingBoxSize
        }
        5 !== Eq.coordinatesMode && (Eq.irradianceTexture ? (gq.USEIRRADIANCEMAP = !0, gq.USESPHERICALFROMREFLECTIONMAP = !1, gq.USESPHERICALINVERTEX = !1, Eq.irradianceTexture._dominantDirection ? gq.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : gq.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Eq.isCube && (gq.USESPHERICALFROMREFLECTIONMAP = !0, gq.USEIRRADIANCEMAP = !1, gq.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, gq.USESPHERICALINVERTEX = Oq))
      } else gq.REFLECTION = !1, gq.REFLECTIONMAP_3D = !1, gq.REFLECTIONMAP_SPHERICAL = !1, gq.REFLECTIONMAP_PLANAR = !1, gq.REFLECTIONMAP_CUBIC = !1, gq.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, gq.REFLECTIONMAP_PROJECTION = !1, gq.REFLECTIONMAP_SKYBOX = !1, gq.REFLECTIONMAP_EXPLICIT = !1, gq.REFLECTIONMAP_EQUIRECTANGULAR = !1, gq.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, gq.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, gq.INVERTCUBICMAP = !1, gq.USESPHERICALFROMREFLECTIONMAP = !1, gq.USEIRRADIANCEMAP = !1, gq.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, gq.USESPHERICALINVERTEX = !1, gq.REFLECTIONMAP_OPPOSITEZ = !1, gq.LODINREFLECTIONALPHA = !1, gq.GAMMAREFLECTION = !1, gq.RGBDREFLECTION = !1, gq.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function zq(qq, Eq, gq, Yq, lq, mq, xq) {
      switch (xq.needNormals = !0, void 0 === lq["LIGHT" + Yq] && (xq.needRebuild = !0), lq["LIGHT" + Yq] = !0, lq["SPOTLIGHT" + Yq] = !1, lq["HEMILIGHT" + Yq] = !1, lq["POINTLIGHT" + Yq] = !1, lq["DIRLIGHT" + Yq] = !1, lq["AREALIGHT" + Yq] = !1, lq["CLUSTLIGHT" + Yq] = !1, gq.prepareLightSpecificDefines(lq, Yq), lq["LIGHT_FALLOFF_PHYSICAL" + Yq] = !1, lq["LIGHT_FALLOFF_GLTF" + Yq] = !1, lq["LIGHT_FALLOFF_STANDARD" + Yq] = !1, gq.falloffType) {
        case Oq.c.FALLOFF_GLTF:
          lq["LIGHT_FALLOFF_GLTF" + Yq] = !0;
          break;
        case Oq.c.FALLOFF_PHYSICAL:
          lq["LIGHT_FALLOFF_PHYSICAL" + Yq] = !0;
          break;
        case Oq.c.FALLOFF_STANDARD:
          lq["LIGHT_FALLOFF_STANDARD" + Yq] = !0
      }
      if (mq && !gq.specular.equalsFloats(0, 0, 0) && (xq.specularEnabled = !0), lq["SHADOW" + Yq] = !1, lq["SHADOWCSM" + Yq] = !1, lq["SHADOWCSMDEBUG" + Yq] = !1, lq["SHADOWCSMNUM_CASCADES" + Yq] = !1, lq["SHADOWCSMUSESHADOWMAXZ" + Yq] = !1, lq["SHADOWCSMNOBLEND" + Yq] = !1, lq["SHADOWCSM_RIGHTHANDED" + Yq] = !1, lq["SHADOWPCF" + Yq] = !1, lq["SHADOWPCSS" + Yq] = !1, lq["SHADOWPOISSON" + Yq] = !1, lq["SHADOWESM" + Yq] = !1, lq["SHADOWCLOSEESM" + Yq] = !1, lq["SHADOWCUBE" + Yq] = !1, lq["SHADOWLOWQUALITY" + Yq] = !1, lq["SHADOWMEDIUMQUALITY" + Yq] = !1, Eq && Eq.receiveShadows && qq.shadowsEnabled && gq.shadowEnabled) {
        const Eq = gq.getShadowGenerator(qq.activeCamera) ?? gq.getShadowGenerator();
        if (Eq) {
          const qq = Eq.getShadowMap();
          qq && qq.renderList && qq.renderList.length > 0 && (xq.shadowEnabled = !0, Eq.prepareDefines(lq, Yq))
        }
      }
      gq.lightmapMode != Oq.c.LIGHTMAP_DEFAULT ? (xq.lightmapMode = !0, lq["LIGHTMAPEXCLUDED" + Yq] = !0, lq["LIGHTMAPNOSPECULAR" + Yq] = gq.lightmapMode == Oq.c.LIGHTMAP_SHADOWSONLY) : (lq["LIGHTMAPEXCLUDED" + Yq] = !1, lq["LIGHTMAPNOSPECULAR" + Yq] = !1)
    }

    function Sq(qq, Eq, gq, Yq, lq) {
      let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Aq = function(qq, Eq) {
          let gq = !1;
          if (qq.activeCamera) {
            const Yq = Eq.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              lq = Eq.CAMERA_PERSPECTIVE ? 1 : 0,
              Oq = 1 === qq.activeCamera.mode ? 1 : 0,
              mq = 0 === qq.activeCamera.mode ? 1 : 0;
            (Yq ^ Oq || lq ^ mq) && (Eq.CAMERA_ORTHOGRAPHIC = 1 === Oq, Eq.CAMERA_PERSPECTIVE = 1 === mq, gq = !0)
          }
          return gq
        }(qq, Yq);
      !1 !== Oq && (Aq = (0, mq.l)(gq, qq, Yq)), Yq.DEPTHPREPASS !== !Eq.getColorWrite() && (Yq.DEPTHPREPASS = !Yq.DEPTHPREPASS, Aq = !0), Yq.INSTANCES !== lq && (Yq.INSTANCES = lq, Aq = !0), Yq.THIN_INSTANCES !== xq && (Yq.THIN_INSTANCES = xq, Aq = !0), Aq && Yq.markAsUnprocessed()
    }
    const pq = 40,
      Gq = 64,
      Lq = new WeakMap,
      Jq = new WeakSet;

    function kq(qq, Eq, gq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        xq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Eq._areAttributesDirty && Eq._needNormals === Eq._normals && Eq._needUVs === Eq._uvs) return !1;
      Eq._normals = Eq._needNormals, Eq._uvs = Eq._needUVs, Eq.NORMAL = Eq._needNormals && qq.isVerticesDataPresent("normal"), Eq._needNormals && qq.isVerticesDataPresent("tangent") && (Eq.TANGENT = !0);
      for (let Yq = 1; Yq <= 6; ++Yq) Eq["UV" + Yq] = !!Eq._needUVs && qq.isVerticesDataPresent(`uv${1===Yq?"":Yq}`);
      if (gq) {
        const gq = qq.useVertexColors && qq.isVerticesDataPresent("color");
        Eq.VERTEXCOLOR = gq, Eq.VERTEXALPHA = qq.hasVertexAlpha && gq && mq
      }
      return qq.isVerticesDataPresent("instanceColor") && (qq.olq || qq.hasThinInstances) && (Eq.INSTANCESCOLOR = !0), lq && function(qq, Eq) {
        if (qq.useBones && qq.computeBonesUsingShaders && qq.skeleton) {
          Eq.NUM_BONE_INFLUENCERS = qq.numBoneInfluencers;
          const gq = void 0 !== Eq.BONETEXTURE;
          if (qq.skeleton.isUsingTextureForMatrices && gq) Eq.BONETEXTURE = !0;
          else {
            Eq.BonesPerMesh = qq.skeleton.bones.length + 1, Eq.BONETEXTURE = !gq && void 0;
            const lq = qq.ZJ(),
              Oq = lq.prePassRenderer;
            if (Oq && Oq.enabled) {
              const gq = -1 === Oq.excludedSkinnedMesh.indexOf(qq);
              Eq.BONES_VELOCITY_ENABLED = gq
            }
            const mq = !0 === Eq.MULTIVIEW,
              xq = 2 * Eq.BonesPerMesh + (mq ? 1 : 0);
            if (Lq.get(qq.skeleton) !== xq) {
              Lq.set(qq.skeleton, xq);
              const gq = lq.Ba().getCaps().maxVertexUniformVectors;
              if (gq && !Jq.has(qq.skeleton)) {
                const lq = 4 * Eq.BonesPerMesh,
                  Oq = mq ? Gq : pq,
                  xq = Math.max(gq - Oq, 0);
                (lq > xq || mq && 3 * lq > gq) && (Jq.add(qq.skeleton), Yq.b.Warn(`Skeleton "${qq.skeleton.name}": ${qq.skeleton.bones.length} bones stored as vertex uniforms use ${lq} of ~${xq} usable uniform vectors${mq?" (multiview)":""} on a device reporting ${gq}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Eq.NUM_BONE_INFLUENCERS = 0, Eq.BonesPerMesh = 0, void 0 !== Eq.BONETEXTURE && (Eq.BONETEXTURE = !1)
      }(qq, Eq), Oq && function(qq, Eq) {
        const gq = qq.morphTargetManager;
        gq ? (Eq.MORPHTARGETS_UV = gq.supportsUVs && Eq.UV1, Eq.MORPHTARGETS_UV2 = gq.supportsUV2s && Eq.UV2, Eq.MORPHTARGETS_TANGENT = gq.supportsTangents && Eq.TANGENT, Eq.MORPHTARGETS_NORMAL = gq.supportsNormals && Eq.NORMAL, Eq.MORPHTARGETS_POSITION = gq.supportsPositions, Eq.MORPHTARGETS_COLOR = gq.supportsColors, Eq.MORPHTARGETTEXTURE_HASUVS = gq.hasUVs, Eq.MORPHTARGETTEXTURE_HASUV2S = gq.hasUV2s, Eq.MORPHTARGETTEXTURE_HASTANGENTS = gq.hasTangents, Eq.MORPHTARGETTEXTURE_HASNORMALS = gq.hasNormals, Eq.MORPHTARGETTEXTURE_HASPOSITIONS = gq.hasPositions, Eq.MORPHTARGETTEXTURE_HASCOLORS = gq.hasColors, Eq.NUM_MORPH_INFLUENCERS = gq.numMaxInfluencers || gq.numInfluencers, Eq.MORPHTARGETS = Eq.NUM_MORPH_INFLUENCERS > 0, Eq.MORPHTARGETS_TEXTURE = gq.isUsingTextureForTargets) : (Eq.MORPHTARGETS_UV = !1, Eq.MORPHTARGETS_UV2 = !1, Eq.MORPHTARGETS_TANGENT = !1, Eq.MORPHTARGETS_NORMAL = !1, Eq.MORPHTARGETS_POSITION = !1, Eq.MORPHTARGETS_COLOR = !1, Eq.MORPHTARGETTEXTURE_HASUVS = !1, Eq.MORPHTARGETTEXTURE_HASUV2S = !1, Eq.MORPHTARGETTEXTURE_HASTANGENTS = !1, Eq.MORPHTARGETTEXTURE_HASNORMALS = !1, Eq.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Eq.MORPHTARGETTEXTURE_HAS_COLORS = !1, Eq.MORPHTARGETS = !1, Eq.NUM_MORPH_INFLUENCERS = 0)
      }(qq, Eq), xq && function(qq, Eq) {
        const gq = qq.bakedVertexAnimationManager;
        Eq.BAKED_VERTEX_ANIMATION_TEXTURE = !(!gq || !gq.isEnabled)
      }(qq, Eq), !0
    }

    function Rq(qq, Eq) {
      if (qq.activeCamera) {
        const gq = Eq.MULTIVIEW;
        Eq.MULTIVIEW = null !== qq.activeCamera.outputRenderTarget && qq.activeCamera.outputRenderTarget.getViewCount() > 1, Eq.MULTIVIEW != gq && Eq.markAsUnprocessed()
      }
    }

    function Uq(qq, Eq, gq) {
      const Yq = Eq.ORDER_INDEPENDENT_TRANSPARENCY,
        lq = Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Eq.ORDER_INDEPENDENT_TRANSPARENCY = qq.useOrderIndependentTransparency && gq, Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !qq.Ba().getCaps().textureFloatLinearFiltering, Yq === Eq.ORDER_INDEPENDENT_TRANSPARENCY && lq === Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Eq.markAsUnprocessed()
    }

    function Fq(qq, Eq, gq) {
      const Yq = Eq.PREPASS;
      if (!Eq._arePrePassDirty) return;
      const lq = [{
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
      if (qq.prePassRenderer && qq.prePassRenderer.enabled && gq) {
        Eq.PREPASS = !0, Eq.SCENE_MRT_COUNT = qq.prePassRenderer.mrtCount, Eq.PREPASS_NORMAL_WORLDSPACE = qq.prePassRenderer.generateNormalsInWorldSpace, Eq.PREPASS_COLOR = !0, Eq.PREPASS_COLOR_INDEX = 0;
        for (let gq = 0; gq < lq.length; gq++) {
          const Yq = qq.prePassRenderer.getIndex(lq[gq].type); - 1 !== Yq ? (Eq[lq[gq].define] = !0, Eq[lq[gq].index] = Yq) : Eq[lq[gq].define] = !1
        }
      } else {
        Eq.PREPASS = !1;
        for (let qq = 0; qq < lq.length; qq++) Eq[lq[qq].define] = !1
      }
      Eq.PREPASS != Yq && (Eq.markAsUnprocessed(), Eq.markAsImageProcessingDirty())
    }

    function sq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      lq && lq.push("Light" + qq), Oq || (Eq.push("vLightData" + qq, "vLightDiffuse" + qq, "vLightSpecular" + qq, "vLightDirection" + qq, "vLightWidth" + qq, "vLightHeight" + qq, "vLightFalloff" + qq, "vLightGround" + qq, "vSliceData" + qq, "vSliceRanges" + qq, "lightMatrix" + qq, "shadowsInfo" + qq, "depthValues" + qq), gq.push("shadowTexture" + qq), gq.push("depthTexture" + qq), Eq.push("viewFrustumZ" + qq, "cascadeBlendFactor" + qq, "lightSizeUVCorrection" + qq, "depthCorrection" + qq, "penumbraDarkness" + qq, "frustumLengths" + qq), Yq && (gq.push("projectionLightTexture" + qq), Eq.push("textureProjectionMatrix" + qq)), mq && gq.push("iesLightTexture" + qq), Aq && gq.push("rectAreaLightEmissionTexture" + qq), xq && (gq.push("lightDataTexture" + qq), cq || gq.push("tileMaskTexture" + qq)))
    }

    function Xq(qq, Eq, gq) {
      const Yq = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      gq && Yq.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), qq.push(...Yq);
      Eq.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function wq(qq, Eq, gq) {
      let Yq, lq, Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        mq = null;
      if (qq.uniformsNames) {
        const xq = qq;
        Yq = xq.uniformsNames, lq = xq.uniformBuffersNames, Eq = xq.samplers, gq = xq.defines, Oq = xq.maxSimultaneousLights || 0, mq = xq.shaderLanguage ?? null
      } else Yq = qq, Eq || (Eq = []);
      for (let xq = 0; xq < Oq && gq["LIGHT" + xq]; xq++) sq(xq, Yq, Eq, gq["PROJECTEDLIGHTTEXTURE" + xq], lq, !1, gq["IESLIGHTTEXTURE" + xq], gq["CLUSTLIGHT" + xq], gq["RECTAREALIGHTEMISSIONTEXTURE" + xq], 1 === mq);
      gq.NUM_MORPH_INFLUENCERS && (Yq.push("morphTargetInfluences"), Yq.push("morphTargetCount")), gq.BAKED_VERTEX_ANIMATION_TEXTURE && (Yq.push("bakedVertexAnimationSettings"), Yq.push("bakedVertexAnimationTextureSizeInverted"), Yq.push("bakedVertexAnimationTime"), Eq.push("bakedVertexAnimationTexture"))
    }

    function Kq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      qq.addUniform("vReflectionInfos", 2), qq.addUniform("reflectionMatrix", 16), Eq && qq.addUniform("vReflectionMicrosurfaceInfos", 3), gq && (qq.addUniform("vReflectionPosition", 3), qq.addUniform("vReflectionSize", 3)), Yq && (qq.addUniform("vReflectionFilteringInfo", 2), qq.addUniform("vReflectionDominantDirection", 3)), Oq && qq.addUniform("vReflectionColor", 3), lq && (qq.addUniform("vSphericalL00", 3), qq.addUniform("vSphericalL1_1", 3), qq.addUniform("vSphericalL10", 3), qq.addUniform("vSphericalL11", 3), qq.addUniform("vSphericalL2_2", 3), qq.addUniform("vSphericalL2_1", 3), qq.addUniform("vSphericalL20", 3), qq.addUniform("vSphericalL21", 3), qq.addUniform("vSphericalL22", 3), qq.addUniform("vSphericalX", 3), qq.addUniform("vSphericalY", 3), qq.addUniform("vSphericalZ", 3), qq.addUniform("vSphericalXX_ZZ", 3), qq.addUniform("vSphericalYY_ZZ", 3), qq.addUniform("vSphericalZZ", 3), qq.addUniform("vSphericalXY", 3), qq.addUniform("vSphericalYZ", 3), qq.addUniform("vSphericalZX", 3))
    }
  },
  40096: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(37139),
      lq = gq(40037);
    class Oq extends lq.e {
      constructor(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(qq, Eq, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Yq.e, this._storeEffectOnSubMeshes = gq
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(qq, Eq) {
        return !!qq && (!this._storeEffectOnSubMeshes || (!qq.fn || 0 === qq.fn.length || this.isReadyForSubMesh(qq, qq.fn[0], Eq)))
      }
      _isReadyForSubMesh(qq) {
        const Eq = qq.materialDefines;
        return !(this.checkReadyOnEveryCall || !qq.effect || !Eq || Eq._renderId !== this.ZJ().getRenderId())
      }
      bindOnlyWorldMatrix(qq) {
        this._activeEffect.setMatrix("world", qq)
      }
      bindOnlyNormalMatrix(qq) {
        this._activeEffect.setMatrix("normalMatrix", qq)
      }
      bind(qq, Eq) {
        Eq && this.bindForSubMesh(qq, Eq, Eq.fn[0])
      }
      _afterBind(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(qq, Eq, gq), this.ZJ()._cachedEffect = Eq, gq ? gq._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return gq._drawWrapper._forceRebindOnNextCall || qq.isCachedMaterialInvalid(this, Eq, Yq)
      }
      dispose(qq, Eq, gq) {
        this._activeEffect = void 0, super.dispose(qq, Eq, gq)
      }
    }
  },
  40115: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      f: () => lq
    });
    const Yq = new WeakMap;

    function lq(qq) {
      const Eq = qq.getVertexBuffers();
      if (!Eq) return null;
      let gq = Yq.get(qq);
      if (gq) {
        let qq = !1;
        for (const Yq in Eq)
          if (!gq.has(Yq)) {
            qq = !0;
            break
          } if (!qq) return gq
      } else gq = new Map, Yq.set(qq, gq);
      for (const Yq in Eq) {
        const qq = Eq[Yq];
        if (qq) {
          const Eq = qq.byteOffset,
            lq = qq.byteStride,
            Oq = qq.type,
            mq = qq.normalized;
          gq.set(Yq, {
            offset: Eq,
            stride: lq,
            type: Oq,
            normalized: mq
          })
        }
      }
      return gq
    }

    function Oq(qq, Eq) {
      Eq.forEach(((Eq, gq) => {
        const Yq = `vp_${gq}_info`;
        qq.setFloat4(Yq, Eq.offset, Eq.stride, Eq.type, Eq.normalized ? 1 : 0)
      }))
    }
  },
  40067: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      c: () => Aq
    });
    var Yq = gq(39757),
      lq = gq(37139),
      Oq = gq(39759);
    let mq = (() => {
      var qq;
      let Eq, gq, lq = [];
      return qq = class {
        static extractMinAndMaxIndexed(qq, Eq, gq, Yq, lq, Oq) {
          for (let mq = gq; mq < gq + Yq; mq++) {
            const gq = 3 * Eq[mq],
              Yq = qq[gq],
              xq = qq[gq + 1],
              Aq = qq[gq + 2];
            lq.minimizeInPlaceFromFloats(Yq, xq, Aq), Oq.maximizeInPlaceFromFloats(Yq, xq, Aq)
          }
        }
        static extractMinAndMax(qq, Eq, gq, Yq, lq, Oq) {
          for (let mq = Eq, xq = Eq * Yq; mq < Eq + gq; mq++, xq += Yq) {
            const Eq = qq[xq],
              gq = qq[xq + 1],
              Yq = qq[xq + 2];
            lq.minimizeInPlaceFromFloats(Eq, gq, Yq), Oq.maximizeInPlaceFromFloats(Eq, gq, Yq)
          }
        }
      }, (() => {
        const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [Oq.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], gq = [Oq.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Yq.f)(qq, null, Eq, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: qq => "extractMinAndMaxIndexed" in qq,
            get: qq => qq.extractMinAndMaxIndexed
          },
          metadata: mq
        }, null, lq), (0, Yq.f)(qq, null, gq, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: qq => "extractMinAndMax" in qq,
            get: qq => qq.extractMinAndMax
          },
          metadata: mq
        }, null, lq), mq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mq
        }), (0, Yq.i)(qq, lq)
      })(), qq
    })();

    function xq(qq, Eq, gq, Yq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const xq = new lq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Aq = new lq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return mq.extractMinAndMaxIndexed(qq, Eq, gq, Yq, xq, Aq), Oq && (xq.x -= xq.x * Oq.x + Oq.y, xq.y -= xq.y * Oq.x + Oq.y, xq.z -= xq.z * Oq.x + Oq.y, Aq.x += Aq.x * Oq.x + Oq.y, Aq.y += Aq.y * Oq.x + Oq.y, Aq.z += Aq.z * Oq.x + Oq.y), {
        minimum: xq,
        maximum: Aq
      }
    }

    function Aq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Oq = arguments.length > 4 ? arguments[4] : void 0;
      const xq = new lq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Aq = new lq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Oq || (Oq = 3), mq.extractMinAndMax(qq, Eq, gq, Oq, xq, Aq), Yq && (xq.x -= xq.x * Yq.x + Yq.y, xq.y -= xq.y * Yq.x + Yq.y, xq.z -= xq.z * Yq.x + Yq.y, Aq.x += Aq.x * Yq.x + Yq.y, Aq.y += Aq.y * Yq.x + Yq.y, Aq.z += Aq.z * Yq.x + Yq.y), {
        minimum: xq,
        maximum: Aq
      }
    }
  },
  40040: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => uq
    });
    var Yq, lq = gq(39879),
      Oq = gq(40049),
      mq = gq(40055),
      xq = gq(40067),
      Aq = gq(40074),
      cq = gq(39636);
    class uq {
      get materialDefines() {
        const qq = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof qq ? null : qq
      }
      set materialDefines(qq) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = qq
      }
      _getDrawWrapper(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        qq = qq ?? this._engine.currentRenderPassId;
        let gq = this._drawWrappers[qq];
        return !gq && Eq && (this._drawWrappers[qq] = gq = new Aq.b(this._mesh.ZJ().Ba())), gq
      }
      _removeDrawWrapper(qq) {
        let Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[qq]?.dispose(Eq), this._drawWrappers[qq] = void 0
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
      _setMainDrawWrapperOverride(qq) {
        this._mainDrawWrapperOverride = qq
      }
      setEffect(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const lq = this._drawWrapper;
        lq.setEffect(qq, Eq, Yq), void 0 !== gq && (lq.materialContext = gq), qq || (lq.defines = null, lq.materialContext = void 0)
      }
      resetDrawCache(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== qq) return void this._removeDrawWrapper(qq, !0, Eq);
          for (const qq of this._drawWrappers) qq?.dispose(Eq)
        }
        this._drawWrappers = []
      }
      static AddToMesh(qq, Eq, gq, Yq, lq, Oq, mq) {
        return new uq(qq, Eq, gq, Yq, lq, Oq, mq, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(qq, Eq, gq, Yq, lq, Oq, mq) {
        let xq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Aq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = qq, this.verticesStart = Eq, this.verticesCount = gq, this.indexStart = Yq, this.indexCount = lq, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Oq, this._renderingMesh = mq || Oq, Aq && Oq.fn.push(this), this._engine = this._mesh.ZJ().Ba(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Oq.fn.length - 1, xq && (this.refreshBoundingInfo(), Oq.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      yR() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.yR() : this._boundingInfo
      }
      setBoundingInfo(qq) {
        return this._boundingInfo = qq, this
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
        const qq = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return qq || this._renderingMesh
      }
      da() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Eq = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Eq) return qq && this._mesh.ZJ()._hasDefaultMaterial ? this._mesh.ZJ().defaultMaterial : null;
        if (this._isMultiMaterial(Eq)) {
          const qq = Eq.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== qq && (this._currentMaterial = qq, this.resetDrawCache()), qq
        }
        return Eq
      }
      _isMultiMaterial(qq) {
        return void 0 !== qq.getSubMaterial
      }
      refreshBoundingInfo() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (qq || (qq = this._renderingMesh.getVerticesData(lq.g.PositionKind)), !qq) return this._boundingInfo = this._mesh.yR(), this;
        const Eq = this._renderingMesh.iYq();
        let gq;
        if (0 === this.indexStart && this.indexCount === Eq.length) {
          const qq = this._renderingMesh.yR();
          gq = {
            minimum: qq.minimum.clone(),
            maximum: qq.maximum.clone()
          }
        } else gq = (0, xq.b)(qq, Eq, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(gq.minimum, gq.maximum) : this._boundingInfo = new mq.d(gq.minimum, gq.maximum), this
      }
      _checkCollision(qq) {
        return this.yR()._checkCollision(qq)
      }
      updateBoundingInfo(qq) {
        let Eq = this.yR();
        return Eq || (this.refreshBoundingInfo(), Eq = this.yR()), Eq && Eq.update(qq), this
      }
      isInFrustum(qq) {
        const Eq = this.yR();
        return !!Eq && Eq.isInFrustum(qq, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(qq) {
        const Eq = this.yR();
        return !!Eq && Eq.isCompletelyInFrustum(qq)
      }
      render(qq) {
        return this._renderingMesh.render(this, qq, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(qq, Eq) {
        if (!this._linesIndexBuffer) {
          const gq = 6 * Math.floor(this.indexCount / 3),
            Yq = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(gq) : new Uint16Array(gq);
          let lq = 0;
          if (0 === qq.length)
            for (let qq = this.indexStart; qq < this.indexStart + this.indexCount; qq += 3) Yq[lq++] = qq, Yq[lq++] = qq + 1, Yq[lq++] = qq + 1, Yq[lq++] = qq + 2, Yq[lq++] = qq + 2, Yq[lq++] = qq;
          else
            for (let Eq = this.indexStart; Eq < this.indexStart + this.indexCount; Eq += 3) Yq[lq++] = qq[Eq], Yq[lq++] = qq[Eq + 1], Yq[lq++] = qq[Eq + 1], Yq[lq++] = qq[Eq + 2], Yq[lq++] = qq[Eq + 2], Yq[lq++] = qq[Eq];
          this._linesIndexBuffer = Eq.createIndexBuffer(Yq), this._linesIndexCount = Yq.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(qq) {
        const Eq = this.yR();
        return !!Eq && qq.intersectsBox(Eq.boundingBox)
      }
      intersects(qq, Eq, gq, Yq, lq) {
        const Oq = this.da();
        if (!Oq) return null;
        let mq = 3,
          xq = !1;
        switch (Oq.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            mq = 1, xq = !0
        }
        return 4 === Oq.fillMode ? gq.length ? this._intersectLines(qq, Eq, gq, this._mesh.intersectionThreshold, Yq) : this._intersectUnIndexedLines(qq, Eq, gq, this._mesh.intersectionThreshold, Yq) : !gq.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(qq, Eq, gq, Yq, lq) : this._intersectTriangles(qq, Eq, gq, mq, xq, Yq, lq)
      }
      _intersectLines(qq, Eq, gq, Yq, lq) {
        let mq = null;
        for (let xq = this.indexStart; xq < this.indexStart + this.indexCount; xq += 2) {
          const Aq = Eq[gq[xq]],
            cq = Eq[gq[xq + 1]],
            uq = qq.intersectionSegment(Aq, cq, Yq);
          if (!(uq < 0) && ((lq || !mq || uq < mq.distance) && (mq = new Oq.c(null, null, uq), mq.faceId = xq / 2, lq))) break
        }
        return mq
      }
      _intersectUnIndexedLines(qq, Eq, gq, Yq, lq) {
        let mq = null;
        for (let xq = this.verticesStart; xq < this.verticesStart + this.verticesCount; xq += 2) {
          const gq = Eq[xq],
            Aq = Eq[xq + 1],
            cq = qq.intersectionSegment(gq, Aq, Yq);
          if (!(cq < 0) && ((lq || !mq || cq < mq.distance) && (mq = new Oq.c(null, null, cq), mq.faceId = xq / 2, lq))) break
        }
        return mq
      }
      _intersectTriangles(qq, Eq, gq, Yq, lq, Oq, mq) {
        let xq = null,
          Aq = -1;
        for (let cq = this.indexStart; cq < this.indexStart + this.indexCount - (3 - Yq); cq += Yq) {
          Aq++;
          const Yq = gq[cq],
            uq = gq[cq + 1],
            Bq = gq[cq + 2];
          if (lq && 4294967295 === Bq) {
            cq += 2;
            continue
          }
          const Wq = Eq[Yq],
            Nq = Eq[uq],
            aq = Eq[Bq];
          if (!Wq || !Nq || !aq) continue;
          if (mq && !mq(Wq, Nq, aq, qq, Yq, uq, Bq)) continue;
          const Vq = qq.intersectsTriangle(Wq, Nq, aq);
          if (Vq) {
            if (Vq.distance < 0) continue;
            if ((Oq || !xq || Vq.distance < xq.distance) && (xq = Vq, xq.faceId = Aq, Oq)) break
          }
        }
        return xq
      }
      _intersectUnIndexedTriangles(qq, Eq, gq, Yq, lq) {
        let Oq = null;
        for (let mq = this.verticesStart; mq < this.verticesStart + this.verticesCount; mq += 3) {
          const gq = Eq[mq],
            xq = Eq[mq + 1],
            Aq = Eq[mq + 2];
          if (lq && !lq(gq, xq, Aq, qq, -1, -1, -1)) continue;
          const cq = qq.intersectsTriangle(gq, xq, Aq);
          if (cq) {
            if (cq.distance < 0) continue;
            if ((Yq || !Oq || cq.distance < Oq.distance) && (Oq = cq, Oq.faceId = mq / 3, Yq)) break
          }
        }
        return Oq
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(qq, Eq) {
        const gq = new uq(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, qq, Eq, !1);
        if (!this.IsGlobal) {
          const qq = this.yR();
          if (!qq) return gq;
          gq._boundingInfo = new mq.d(qq.minimum, qq.maximum)
        }
        return gq
      }
      dispose() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.ZJ().Ba()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Eq = this._mesh.fn.indexOf(this);
        this._mesh.fn.splice(Eq, 1), this.resetDrawCache(void 0, qq)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(qq, Eq, gq, Yq, lq) {
        let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = Number.MAX_VALUE,
          xq = -Number.MAX_VALUE;
        const Aq = (lq || Yq).iYq();
        for (let cq = Eq; cq < Eq + gq; cq++) {
          const qq = Aq[cq];
          qq < mq && (mq = qq), qq > xq && (xq = qq)
        }
        return new uq(qq, mq, xq - mq + 1, Eq, gq, Yq, lq, Oq)
      }
    }(Yq = uq.prototype).projectToRef ?? (Yq.projectToRef = (0, cq.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);