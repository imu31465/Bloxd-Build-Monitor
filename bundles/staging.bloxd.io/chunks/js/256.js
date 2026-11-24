export const id = 256;
export const ids = [256];
export const modules = {
  40342: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      f: () => Up,
      i: () => Yp,
      j: () => Lp
    });
    var Op = cp(40140),
      op = cp(38905),
      Ip = cp(40273),
      Sp = cp(40179);
    class xp {
      get uR() {
        return this._isDisposed
      }
      constructor(pp, ip, cp) {
        let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Lp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Yp = arguments.length > 7 ? arguments[7] : void 0,
          Dp = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Sp.d)(), pp && pp.Gl ? this._engine = pp.Gl().gy() : this._engine = pp, this._updatable = cp, this._instanced = xp, this._divisor = Yp || 1, this._label = Dp, ip instanceof Op.c ? (this._data = null, this._buffer = ip) : (this._data = ip, this._buffer = null), this.byteStride = Lp ? op : op * Float32Array.BYTES_PER_ELEMENT, Ip || this.create()
      }
      createVertexBuffer(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Sp = arguments.length > 6 ? arguments[6] : void 0;
        const xp = Ip ? ip : ip * Float32Array.BYTES_PER_ELEMENT,
          Yp = Op ? Ip ? Op : Op * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Lp(this._engine, this, pp, this._updatable, !0, Yp, void 0 === op ? this._instanced : op, xp, cp, void 0, void 0, !0, this._divisor || Sp)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !pp && this._buffer || (pp = pp || this._data, pp && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, pp), this._data = pp) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(pp, this._label), this._data = pp) : this._buffer = this._engine.createVertexBuffer(pp, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.TA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.TA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.TA, void 0, this._label));
          op.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(pp) {
        this.create(pp)
      }
      updateDirectly(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, pp, Op ? ip : ip * Float32Array.BYTES_PER_ELEMENT, cp ? cp * this.byteStride : void 0), this._data = 0 === ip && void 0 === cp ? pp : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Lp {
      get uR() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(pp) {
        const ip = 0 != pp;
        this._instanceDivisor = pp, ip !== this._instanced && (this._instanced = ip, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const pp = this.getData();
        return pp ? Array.isArray(pp) ? pp.length / (this.byteStride / 4) - this.byteOffset / 4 : (pp.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(pp, ip, cp, Op, op, Sp, Ap, Pp, Wp, yp) {
        let Up, wp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          vp = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          tp = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Hp = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = pp, "object" === typeof Op && null !== Op ? (Up = Op.updatable ?? !1, op = Op.postponeInternalCreation, Sp = Op.stride, Ap = Op.instanced, Pp = Op.offset, Wp = Op.size, yp = Op.type, wp = Op.normalized ?? !1, vp = Op.useBytes ?? !1, tp = Op.divisor ?? 1, Hp = Op.takeBufferOwnership ?? !1, this._label = Op.label) : Up = !!Op, ip instanceof xp ? (this._buffer = ip, this._ownsBuffer = Hp) : (this._buffer = new xp(pp, ip, Up, Sp, op, Ap, vp, tp, this._label), this._ownsBuffer = !0), this.uniqueId = Lp._Counter++, this._kind = cp, void 0 === yp) {
          const pp = this.getData();
          this.type = pp ? Dp(pp) : Lp.FLOAT
        } else this.type = yp;
        const dp = (0, Ip.p)(this.type);
        vp ? (this._size = Wp || (Sp ? Sp / dp : Yp(cp)), this.byteStride = Sp || this._buffer.byteStride || this._size * dp, this.byteOffset = Pp || 0) : (this._size = Wp || Sp || Yp(cp), this.byteStride = Sp ? Sp * dp : this._buffer.byteStride || this._size * dp, this.byteOffset = (Pp || 0) * dp), this.normalized = wp, this._instanced = void 0 !== Ap && Ap, this._instanceDivisor = Ap ? tp : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(pp) {
        switch (pp) {
          case Lp.BYTE:
            return 0;
          case Lp.UNSIGNED_BYTE:
            return 1;
          case Lp.SHORT:
            return 2;
          case Lp.UNSIGNED_SHORT:
            return 3;
          case Lp.INT:
            return 4;
          case Lp.UNSIGNED_INT:
            return 5;
          case Lp.FLOAT:
            return 6;
          case Lp.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${pp}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Lp._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(pp, ip) {
        const cp = this.getData();
        return cp ? (0, Ip.m)(cp, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, pp, ip) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Ip.p)(this.type)
      }
      Jcp() {
        return this.byteOffset / (0, Ip.p)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Ip.p)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(pp) {
        this._buffer.create(pp), this._alignBuffer()
      }
      update(pp) {
        this._buffer.update(pp), this._alignBuffer()
      }
      updateDirectly(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(pp, ip, void 0, cp), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(pp, ip) {
        (0, Ip.f)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, pp, this.normalized, ((pp, cp) => {
          for (let Op = 0; Op < this._size; Op++) ip(pp[Op], cp + Op)
        }))
      }
      _alignBuffer() {}
    }

    function Yp(pp) {
      switch (pp) {
        case Lp.UVKind:
        case Lp.UV2Kind:
        case Lp.UV3Kind:
        case Lp.UV4Kind:
        case Lp.UV5Kind:
        case Lp.UV6Kind:
          return 2;
        case Lp.NormalKind:
        case Lp.PositionKind:
          return 3;
        case Lp.ColorKind:
        case Lp.ColorInstanceKind:
        case Lp.MatricesIndicesKind:
        case Lp.MatricesIndicesExtraKind:
        case Lp.MatricesWeightsKind:
        case Lp.MatricesWeightsExtraKind:
        case Lp.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + pp + "'")
      }
    }

    function Dp(pp) {
      return pp instanceof Int8Array ? Lp.BYTE : pp instanceof Uint8Array ? Lp.UNSIGNED_BYTE : pp instanceof Int16Array ? Lp.SHORT : pp instanceof Uint16Array ? Lp.UNSIGNED_SHORT : pp instanceof Int32Array ? Lp.INT : pp instanceof Uint32Array ? Lp.UNSIGNED_INT : Lp.FLOAT
    }

    function Ap(pp) {
      return (0, Ip.p)(pp)
    }

    function Pp(pp, ip, cp, Op, op, Sp, xp, Lp) {
      (0, Ip.f)(pp, ip, cp, Op, op, Sp, xp, ((pp, ip) => {
        for (let cp = 0; cp < Op; cp++) Lp(pp[cp], ip + cp)
      }))
    }

    function Wp(pp, ip, cp, Op, op, Sp, xp, Lp) {
      return (0, Ip.m)(pp, ip, cp, Op, op, Sp, xp, Lp)
    }
    Lp._Counter = 0, Lp.BYTE = 5120, Lp.UNSIGNED_BYTE = 5121, Lp.SHORT = 5122, Lp.UNSIGNED_SHORT = 5123, Lp.INT = 5124, Lp.UNSIGNED_INT = 5125, Lp.FLOAT = 5126, Lp.HALF_FLOAT = 5131, Lp.PositionKind = "position", Lp.NormalKind = "normal", Lp.TangentKind = "tangent", Lp.UVKind = "uv", Lp.UV2Kind = "uv2", Lp.UV3Kind = "uv3", Lp.UV4Kind = "uv4", Lp.UV5Kind = "uv5", Lp.UV6Kind = "uv6", Lp.ColorKind = "color", Lp.ColorInstanceKind = "instanceColor", Lp.MatricesIndicesKind = "matricesIndices", Lp.MatricesWeightsKind = "matricesWeights", Lp.MatricesIndicesExtraKind = "matricesIndicesExtra", Lp.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let yp = !1;

    function Up() {
      yp || (yp = !0, Lp.DeduceStride = Yp, Lp.GetDataType = Dp, Lp.GetTypeByteLength = Ap, Lp.ForEach = Pp, Lp.GetFloatData = Wp)
    }
  },
  40140: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.TA = 0, this.is32Bits = !1, this.uniqueId = Op._Counter++
      }
    }
    Op._Counter = 0
  },
  40334: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(37320),
      op = cp(40342);
    class Ip {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || ip && !this.pickedMesh.isVerticesDataPresent(op.j.NormalKind)) return null;
        let cp, Ip = this.pickedMesh.NOp();
        0 === Ip?.length && (Ip = null);
        const Sp = Op.i.Zy[0],
          xp = Op.i.Zy[1],
          Lp = Op.i.Zy[2];
        if (ip) {
          const pp = this.pickedMesh.getVerticesData(op.j.NormalKind);
          let ip = Ip ? Op.o.FromArrayToRef(pp, 3 * Ip[3 * this.faceId], Sp) : Sp.i5(pp[3 * this.faceId * 3], pp[3 * this.faceId * 3 + 1], pp[3 * this.faceId * 3 + 2]),
            Yp = Ip ? Op.o.FromArrayToRef(pp, 3 * Ip[3 * this.faceId + 1], xp) : xp.i5(pp[3 * (3 * this.faceId + 1)], pp[3 * (3 * this.faceId + 1) + 1], pp[3 * (3 * this.faceId + 1) + 2]),
            Dp = Ip ? Op.o.FromArrayToRef(pp, 3 * Ip[3 * this.faceId + 2], Lp) : Lp.i5(pp[3 * (3 * this.faceId + 2)], pp[3 * (3 * this.faceId + 2) + 1], pp[3 * (3 * this.faceId + 2) + 2]);
          ip = ip.scale(this.bu), Yp = Yp.scale(this.bv), Dp = Dp.scale(1 - this.bu - this.bv), cp = new Op.o(ip.x + Yp.x + Dp.x, ip.y + Yp.y + Dp.y, ip.z + Yp.z + Dp.z)
        } else {
          const pp = this.pickedMesh.getVerticesData(op.j.PositionKind),
            ip = Ip ? Op.o.FromArrayToRef(pp, 3 * Ip[3 * this.faceId], Sp) : Sp.i5(pp[3 * this.faceId * 3], pp[3 * this.faceId * 3 + 1], pp[3 * this.faceId * 3 + 2]),
            Yp = Ip ? Op.o.FromArrayToRef(pp, 3 * Ip[3 * this.faceId + 1], xp) : xp.i5(pp[3 * (3 * this.faceId + 1)], pp[3 * (3 * this.faceId + 1) + 1], pp[3 * (3 * this.faceId + 1) + 2]),
            Dp = Ip ? Op.o.FromArrayToRef(pp, 3 * Ip[3 * this.faceId + 2], Lp) : Lp.i5(pp[3 * (3 * this.faceId + 2)], pp[3 * (3 * this.faceId + 2) + 1], pp[3 * (3 * this.faceId + 2) + 2]),
            Ap = ip.subtract(Yp),
            Pp = Dp.subtract(Yp);
          cp = Op.o.Cross(Ap, Pp)
        }
        const Yp = (pp, ip) => {
          if (-1 !== this.thinInstanceIndex) {
            const cp = pp._thinInstanceDataStorage.matrixData,
              op = this.thinInstanceIndex << 4;
            if (cp && cp.length > op) {
              const pp = Op.i.Matrix[0];
              Op.b.FromArrayToRef(cp, op, pp), Op.o.TransformNormalToRef(ip, pp, ip)
            }
          }
          let cp = pp.getWorldMatrix();
          pp.nonUniformScaling && (Op.i.Matrix[0].rM(cp), cp = Op.i.Matrix[0], cp.setTranslationFromFloats(0, 0, 0), cp.invert(), cp.transposeToRef(Op.i.Matrix[1]), cp = Op.i.Matrix[1]), Op.o.TransformNormalToRef(ip, cp, ip)
        };
        if (pp && Yp(this.pickedMesh, cp), this.ray) {
          const ip = Op.i.Zy[0].rM(cp);
          pp || Yp(this.pickedMesh, ip), Op.o.Dot(ip, this.ray.direction) > 0 && cp.negateInPlace()
        }
        return cp.normalize(), cp
      }
      getTextureCoordinates() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : op.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(pp)) return null;
        const ip = this.pickedMesh.NOp();
        if (!ip) return null;
        const cp = this.pickedMesh.getVerticesData(pp);
        if (!cp) return null;
        let Ip = Op.l.FromArray(cp, 2 * ip[3 * this.faceId]),
          Sp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 1]),
          xp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 2]);
        return Ip = Ip.scale(this.bu), Sp = Sp.scale(this.bv), xp = xp.scale(1 - this.bu - this.bv), new Op.l(Ip.x + Sp.x + xp.x, Ip.y + Sp.y + xp.y)
      }
    }
  },
  40179: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(40050);
    let op = !1;

    function Ip() {
      op || (op = !0, Op.ThinEngine.prototype.updateDynamicIndexBuffer = function(pp, ip) {
        let cp;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(pp), cp = pp.is32Bits ? ip instanceof Uint32Array ? ip : new Uint32Array(ip) : ip instanceof Uint16Array ? ip : new Uint16Array(ip), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, cp, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Op.ThinEngine.prototype.updateDynamicVertexBuffer = function(pp, ip, cp, Op) {
        this.bindArrayBuffer(pp), void 0 === cp && (cp = 0);
        const op = ip.byteLength || ip.length;
        void 0 === Op || Op >= op && 0 === cp ? ip instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, new Float32Array(ip)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, ip) : ip instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, new Float32Array(ip).subarray(0, Op / 4)) : (ip = ArrayBuffer.isView(ip) ? new Uint8Array(ip.buffer, ip.byteOffset, Op) : new Uint8Array(ip, 0, Op), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, ip)), this._resetVertexBufferBinding()
      })
    }
  },
  40149: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = ip, !pp && (pp = ip.createTexture(), !pp)) throw new Error("Unable to create webGL texture");
        this.set(pp)
      }
      setUsage() {}
      set(pp) {
        this._webGLTexture = pp
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(pp) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(pp)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const pp of this._MSAARenderBuffers) this._context.deleteRenderbuffer(pp);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[pp] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  40113: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => tp
    });
    var Op = cp(37349),
      op = cp(40053),
      Ip = cp(37345),
      Sp = cp(38905),
      xp = cp(37338),
      Lp = cp(40122);
    class Yp {
      constructor() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, pp && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(pp) {
        this._zOffset !== pp && (this._zOffset = pp, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(pp) {
        this._zOffsetUnits !== pp && (this._zOffsetUnits = pp, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(pp) {
        this._cullFace !== pp && (this._cullFace = pp, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(pp) {
        this._cull !== pp && (this._cull = pp, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(pp) {
        this._depthFunc !== pp && (this._depthFunc = pp, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(pp) {
        this._depthMask !== pp && (this._depthMask = pp, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(pp) {
        this._depthTest !== pp && (this._depthTest = pp, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(pp) {
        this._frontFace !== pp && (this._frontFace = pp, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(pp) {
        this.isDirty && (this._isCullDirty && (this.cull ? pp.enable(pp.CULL_FACE) : pp.disable(pp.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (pp.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (pp.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? pp.enable(pp.DEPTH_TEST) : pp.disable(pp.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (pp.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (pp.enable(pp.POLYGON_OFFSET_FILL), pp.polygonOffset(this.zOffset, this.zOffsetUnits)) : pp.disable(pp.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (pp.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Dp {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(pp) {
        this._func !== pp && (this._func = pp, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(pp) {
        this._backFunc !== pp && (this._backFunc = pp, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(pp) {
        this._funcRef !== pp && (this._funcRef = pp, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(pp) {
        this._funcMask !== pp && (this._funcMask = pp, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(pp) {
        this._opStencilFail !== pp && (this._opStencilFail = pp, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(pp) {
        this._opDepthFail !== pp && (this._opDepthFail = pp, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(pp) {
        this._opStencilDepthPass !== pp && (this._opStencilDepthPass = pp, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(pp) {
        this._backOpStencilFail !== pp && (this._backOpStencilFail = pp, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(pp) {
        this._backOpDepthFail !== pp && (this._backOpDepthFail = pp, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(pp) {
        this._backOpStencilDepthPass !== pp && (this._backOpStencilDepthPass = pp, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(pp) {
        this._mask !== pp && (this._mask = pp, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(pp) {
        this._enabled !== pp && (this._enabled = pp, this._isStencilTestDirty = !0)
      }
      constructor() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, pp && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(pp) {
        if (!pp) return;
        const ip = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = ip ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = ip ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = ip ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = ip ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = ip ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = ip ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = ip ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = ip ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = ip ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = ip ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = ip ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = ip ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? pp.enable(pp.STENCIL_TEST) : pp.disable(pp.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (pp.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (pp.stencilFuncSeparate(pp.FRONT, this.func, this.funcRef, this.funcMask), pp.stencilFuncSeparate(pp.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (pp.stencilOpSeparate(pp.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), pp.stencilOpSeparate(pp.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Ap {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Ap.ALWAYS, this.opStencilFail = Ap.KEEP, this.opDepthFail = Ap.KEEP, this.opStencilDepthPass = Ap.REPLACE, this.backFunc = Ap.ALWAYS, this.backOpStencilFail = Ap.KEEP, this.backOpDepthFail = Ap.KEEP, this.backOpStencilDepthPass = Ap.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(pp) {
        this.func = pp
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(pp) {
        this.backFunc = pp
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(pp) {
        this.funcRef = pp
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(pp) {
        this.funcMask = pp
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(pp) {
        this.opStencilFail = pp
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(pp) {
        this.opDepthFail = pp
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(pp) {
        this.opStencilDepthPass = pp
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(pp) {
        this.backOpStencilFail = pp
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(pp) {
        this.backOpDepthFail = pp
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(pp) {
        this.backOpStencilDepthPass = pp
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(pp) {
        this.mask = pp
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(pp) {
        this.enabled = pp
      }
    }
    Ap.ALWAYS = 519, Ap.KEEP = 7680, Ap.REPLACE = 7681;
    var Pp = cp(40124),
      Wp = cp(40096),
      yp = cp(40033),
      Up = cp(40071),
      wp = cp(40088);

    function vp(pp, ip) {
      if (ip) {
        const {
          requestAnimationFrame: cp
        } = ip;
        if ("function" === typeof cp) return cp(pp)
      }
      if ((0, Up.j)()) {
        const {
          requestAnimationFrame: cp
        } = ip || window;
        if ("function" === typeof cp) return cp(pp)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(pp);
      return setTimeout(pp, 16)
    }
    class tp {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(pp) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get lOp() {
        return this._useReverseDepthBuffer
      }
      set lOp(pp) {
        pp !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = pp, this._depthCullingState.depthFunc = pp ? 518 : 515)
      }
      setColorWrite(pp) {
        pp !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = pp)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(pp) {
        if (pp) return this.isNDCHalfZRange ? pp.IS_NDC_HALF_ZRANGE = "" : delete pp.IS_NDC_HALF_ZRANGE, this.lOp ? pp.USE_REVERSE_DEPTHBUFFER = "" : delete pp.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? pp.USE_EXACT_SRGB_CONVERSIONS = "" : delete pp.USE_EXACT_SRGB_CONVERSIONS);
        {
          let pp = "";
          return this.isNDCHalfZRange && (pp += "#define IS_NDC_HALF_ZRANGE"), this.lOp && (pp && (pp += "\n"), pp += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (pp && (pp += "\n"), pp += "#define USE_EXACT_SRGB_CONVERSIONS"), pp
        }
      }
      _rebuildInternalTextures() {
        const pp = this._internalTexturesCache.slice();
        for (const ip of pp) ip._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const pp = this._renderTargetWrapperCache.slice();
        for (const ip of pp) ip.textures?.some((pp => 15 === pp.source)) || ip._rebuild()
      }
      _rebuildEffects() {
        for (const pp in this._compiledEffects) {
          const ip = this._compiledEffects[pp];
          ip._pipelineContext = null, ip._prepareEffect()
        }
        op.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Sp.e.Warn(this.name + " context successfully restored."), this.Fy.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(pp) {
        setTimeout((() => {
          this._clearEmptyResources();
          const ip = this._depthCullingState.depthTest,
            cp = this._depthCullingState.depthFunc,
            Op = this._depthCullingState.depthMask,
            op = this._stencilState.stencilTest;
          pp(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ip, this._depthCullingState.depthFunc = cp, this._depthCullingState.depthMask = Op, this._stencilState.stencilTest = op, this._flagContextRestored()
        }), 0)
      }
      get uR() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(pp) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(pp) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const pp = new Uint8Array(4),
            ip = [pp, pp, pp, pp, pp, pp];
          this._emptyCubeTexture = this.createRawCubeTexture(ip, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(pp) {
        this._framebufferDimensionsObject = pp
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(pp) {
        if (!pp) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const ip = this._activeRenderLoops.indexOf(pp);
        ip >= 0 && (this._activeRenderLoops.splice(ip, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: pp
            } = this.customAnimationFrameRequester;
            pp && pp(this.customAnimationFrameRequester.zy), delete this.customAnimationFrameRequester.zy
          }
        } else if (0 !== this._frameHandler) {
          const pp = this._frameHandler;
          if (this._frameHandler = 0, (0, Up.j)()) {
            const {
              cancelAnimationFrame: ip
            } = this.getHostWindow() || window;
            if ("function" === typeof ip) return ip(pp)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(pp);
          return clearTimeout(pp)
        }
      }
      Hk() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Rk() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(pp) {
        this._maxFPS = pp, void 0 !== pp && (this._minFrameTime = pp <= 0 ? Number.MAX_VALUE : 1e3 / pp)
      }
      _isOverFrameTime(pp) {
        if (!pp || void 0 === this._maxFPS) return !1;
        const ip = pp - this._lastFrameTime;
        return this._lastFrameTime = pp, this._renderAccumulator += ip, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(pp) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(pp)) {
          let pp = !0;
          (this.uR || !this.renderEvenInBackground && this._windowIsBackground) && (pp = !1), pp && (this.Hk(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Rk())
        }
      }
      _renderLoop(pp) {
        this._processFrame(pp), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let pp = 0; pp < this._activeRenderLoops.length; pp++) {
          (0, this._activeRenderLoops[pp])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(pp, ip) {
        return vp(pp, ip)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.zy = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.zy) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(pp) {
        -1 === this._activeRenderLoops.indexOf(pp) && (this._activeRenderLoops.push(pp), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(pp) {
        this._depthCullingState.depthTest = pp
      }
      setZOffset(pp) {
        this._depthCullingState.zOffset = this.lOp ? -pp : pp
      }
      getZOffset() {
        const pp = this._depthCullingState.zOffset;
        return this.lOp ? -pp : pp
      }
      setZOffsetUnits(pp) {
        this._depthCullingState.zOffsetUnits = this.lOp ? -pp : pp
      }
      getZOffsetUnits() {
        const pp = this._depthCullingState.zOffsetUnits;
        return this.lOp ? -pp : pp
      }
      getHostWindow() {
        return (0, Up.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(pp) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const pp of this.scenes) pp._rebuildTextures();
        for (const pp of this._virtualScenes) pp._rebuildTextures()
      }
      _releaseRenderTargetWrapper(pp) {
        const ip = this._renderTargetWrapperCache.indexOf(pp); - 1 !== ip && this._renderTargetWrapperCache.splice(ip, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(pp, ip, cp) {
        const Op = ip || this.getRenderWidth(),
          op = cp || this.getRenderHeight(),
          Ip = pp.x || 0,
          Sp = pp.y || 0;
        this._cachedViewport = pp, this._viewport(Ip * Op, Sp * op, Op * pp.width, op * pp.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(pp) {
        return new Path2D(pp)
      }
      get description() {
        let pp = this.name + this.version;
        return this._caps.parallelShaderCompile && (pp += " - Parallel shader compilation"), pp
      }
      _createTextureBase(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          xp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Yp = arguments.length > 7 ? arguments[7] : void 0,
          Dp = arguments.length > 8 ? arguments[8] : void 0,
          Ap = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Pp = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Wp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Up = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          wp = arguments.length > 13 ? arguments[13] : void 0,
          vp = arguments.length > 14 ? arguments[14] : void 0,
          Hp = arguments.length > 15 ? arguments[15] : void 0;
        const dp = "data:" === (pp = pp || "").substring(0, 5),
          ep = "blob:" === pp.substring(0, 5),
          jp = dp && -1 !== pp.indexOf(";base64,"),
          kp = Pp || new yp.b(this, 1);
        kp !== Pp && (kp.label = pp.substring(0, 60));
        const mp = pp;
        !this._transformTextureUrl || jp || Pp || Ap || (pp = this._transformTextureUrl(pp)), mp !== pp && (kp._originalUrl = mp);
        const Rp = pp.lastIndexOf(".");
        let qp = Up || (Rp > -1 ? pp.substring(Rp).toLowerCase() : "");
        qp.indexOf("?") > -1 && (qp = qp.split("?")[0]);
        const Mp = tp.GetCompatibleTextureLoader(qp, wp);
        Op && Op.addPendingData(kp), kp.url = pp, kp.generateMipMaps = !ip, kp.samplingMode = op, kp.invertY = cp, kp._useSRGBBuffer = this._getUseSRGBBuffer(!!Hp, ip), this._doNotHandleContextLost || (kp._buffer = Ap);
        let Cp = null;
        xp && !Pp && (Cp = kp.onLoadedObservable.add(xp)), Pp || this._internalTexturesCache.push(kp);
        const Ep = (cp, Pp) => {
          Op && Op.removePendingData(kp), pp === mp ? (Cp && kp.onLoadedObservable.remove(Cp), Ip.e.UseFallbackTexture && pp !== Ip.e.FallbackTexture && this._createTextureBase(Ip.e.FallbackTexture, ip, kp.invertY, Op, op, null, Lp, Yp, Dp, Ap, kp), cp = (cp || "Unknown error") + (Ip.e.UseFallbackTexture ? " - Fallback texture was used" : ""), kp.onErrorObservable.notifyObservers({
            message: cp,
            exception: Pp
          }), Lp && Lp(cp, Pp)) : (Sp.e.Warn(`Failed to load ${pp}, falling back to ${mp}`), this._createTextureBase(mp, ip, kp.invertY, Op, op, xp, Lp, Yp, Dp, Ap, kp, Wp, Up, wp, vp, Hp))
        };
        if (Mp) {
          const ip = async pp => {
            (await Mp).loadData(pp, kp, ((pp, ip, cp, Ip, Sp, xp) => {
              xp ? Ep("TextureLoader failed to load data") : Yp(kp, qp, Op, {
                width: pp,
                height: ip
              }, kp.invertY, !cp, Ip, (() => (Sp(), !1)), op)
            }), vp)
          };
          if (Ap) {
            const pp = async pp => {
              try {
                await ip(pp)
              } catch (cp) {
                Ep("Failed to parse texture data", cp)
              }
            };
            Ap instanceof ArrayBuffer ? pp(new Uint8Array(Ap)) : ArrayBuffer.isView(Ap) ? pp(Ap) : Lp && Lp("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(pp, (async pp => {
            try {
              await ip(new Uint8Array(pp))
            } catch (cp) {
              Ep("Failed to parse texture data", cp)
            }
          }), void 0, Op ? Op.offlineProvider : void 0, !0, ((pp, ip) => {
            Ep("Unable to load " + (pp && pp.responseURL, ip))
          }))
        } else {
          const cp = pp => {
            ep && !this._doNotHandleContextLost && (kp._buffer = pp), Yp(kp, qp, Op, pp, kp.invertY, ip, !1, Dp, op)
          };
          !dp || jp ? Ap && ("string" === typeof Ap.decoding || Ap.close) ? cp(Ap) : tp._FileToolsLoadImage(pp || "", cp, Ep, Op ? Op.offlineProvider : null, wp, kp.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Ap || Ap instanceof ArrayBuffer || ArrayBuffer.isView(Ap) || Ap instanceof Blob ? tp._FileToolsLoadImage(Ap, cp, Ep, Op ? Op.offlineProvider : null, wp, kp.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Ap && cp(Ap)
        }
        return kp
      }
      _rebuildBuffers() {
        for (const pp of this._uniformBuffers) pp._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Up.f)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const pp in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, pp) && (this._boundTexturesCache[pp] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(pp) {
        this._name = pp
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(pp) {
        this._hardwareScalingLevel = pp, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(pp) {
        this._doNotHandleContextLost = pp
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(pp, ip, cp) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Yp, this._stencilStateComposer = new Dp, this._stencilState = new Ap, this._alphaState = new Pp.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Op.d, this.onCanvasFocusObservable = new Op.d, this.onNewSceneAddedObservable = new Op.d, this.onResizeObservable = new Op.d, this.onCanvasPointerOutObservable = new Op.d, this.onEffectErrorObservable = new Op.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Op.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = pp => this._renderLoop(pp), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Op.d, this.onAfterShaderCompilationObservable = new Op.d, this.onBeginFrameObservable = new Op.d, this.onEndFrameObservable = new Op.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Op.d, this.Fy = new Op.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Kl = new Op.d, this.onReleaseEffectsObservable = new Op.d, Ip.e.Instances.push(this), this.startTime = Lp.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, xp.e.SetMatrixPrecision(!!ip.useLargeWorldRendering || !!ip.useHighPrecisionMatrix), (0, Up.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), ip.antialias = pp ?? ip.antialias, ip.deterministicLockstep = ip.deterministicLockstep ?? !1, ip.lockstepMaxSteps = ip.lockstepMaxSteps ?? 4, ip.timeStep = ip.timeStep ?? 1 / 60, ip.stencil = ip.stencil ?? !0, this._audioContext = ip.audioEngineOptions?.audioContext ?? null, this._audioDestination = ip.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = ip.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!ip.doNotHandleContextLost, this._isStencilEnable = !!ip.stencil, this.useExactSrgbConversions = ip.useExactSrgbConversions ?? !1, this.canvasTabIndex = ip.canvasTabIndex ?? this.canvasTabIndex;
        const op = (0, Up.j)() && window.devicePixelRatio || 1,
          Sp = ip.limitDeviceRatio || op;
        cp = cp || ip.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = cp, this._hardwareScalingLevel = cp ? 1 / Math.min(Sp, op) : 1, this._lastDevicePixelRatio = op, this._creationOptions = ip
      }
      resize() {
        let pp, ip, cp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const pp = (0, Up.j)() && window.devicePixelRatio || 1,
            ip = this._lastDevicePixelRatio / pp;
          this._lastDevicePixelRatio = pp, this._hardwareScalingLevel *= ip
        }
        if ((0, Up.j)() && (0, Up.f)())
          if (this._renderingCanvas) {
            const cp = this._renderingCanvas.getBoundingClientRect?.();
            pp = this._renderingCanvas.clientWidth || cp?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ip = this._renderingCanvas.clientHeight || cp?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else pp = window.innerWidth, ip = window.innerHeight;
        else pp = this._renderingCanvas ? this._renderingCanvas.width : 100, ip = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(pp / this._hardwareScalingLevel, ip / this._hardwareScalingLevel, cp)
      }
      setSize(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (pp |= 0, ip |= 0, !cp && this._renderingCanvas.width === pp && this._renderingCanvas.height === ip) return !1;
        if (this._renderingCanvas.width = pp, this._renderingCanvas.height = ip, this.scenes) {
          for (let pp = 0; pp < this.scenes.length; pp++) {
            const ip = this.scenes[pp];
            for (let pp = 0; pp < ip.cameras.length; pp++) {
              ip.cameras[pp]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
        throw (0, Wp.o)("engine.rawTexture")
      }
      createRawCubeTexture(pp, ip, cp, Op, op, Ip, Sp, xp) {
        throw (0, Wp.o)("engine.rawTexture")
      }
      createRawTexture3D(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
        throw (0, Wp.o)("engine.rawTexture")
      }
      createRawTexture2DArray(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
        throw (0, Wp.o)("engine.rawTexture")
      }
      _sharedInit(pp) {
        this._renderingCanvas = pp
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const pp = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== pp.indexOf("Mobile") || -1 !== pp.indexOf("Mac") && (0, Up.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Up.j)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(pp) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(pp, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(pp, ip) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(pp, ip) {
        return createImageBitmap(pp, ip)
      }
      resizeImageBitmap(pp, ip, cp) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(pp) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(pp, ip) {
        if ("undefined" === typeof document) return new OffscreenCanvas(pp, ip);
        const cp = document.createElement("canvas");
        return cp.width = pp, cp.height = ip, cp
      }
      createCanvas(pp, ip) {
        return tp._CreateCanvas(pp, ip)
      }
      static _FileToolsLoadImage(pp, ip, cp, Op, op, Ip, Sp) {
        if (!wp.c.loadImage) throw (0, Wp.o)("FileTools");
        return wp.c.loadImage(pp, ip, cp, Op, op, Ip, Sp)
      }
      _loadFile(pp, ip, cp, Op, op, Ip) {
        const Sp = (0, wp.n)(pp, ip, cp, Op, op, Ip);
        return this._activeRequests.push(Sp), Sp.onCompleteObservable.add((() => {
          const pp = this._activeRequests.indexOf(Sp); - 1 !== pp && this._activeRequests.splice(pp, 1)
        })), Sp
      }
      static _FileToolsLoadFile(pp, ip, cp, Op, op, Ip) {
        if (wp.c.loadFile) return wp.c.loadFile(pp, ip, cp, Op, op, Ip);
        throw (0, Wp.o)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), op.e.ResetCache();
        for (const ip of this._activeRequests) ip.abort();
        this._boundRenderFunction = null, this.Kl.notifyObservers(this), this.Kl.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Up.j)() && window.removeEventListener("resize", this._checkForMobile);
        const pp = Ip.e.Instances.indexOf(this);
        pp >= 0 && Ip.e.Instances.splice(pp, 1), Ip.e.Instances.length || (Ip.e.OnEnginesDisposedObservable.notifyObservers(this), Ip.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(pp) {
        throw (0, Wp.o)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(pp, ip) {
        for (let cp = 0; cp < Ip.e.Instances.length; cp++) {
          const Op = Ip.e.Instances[cp];
          for (let cp = 0; cp < Op.scenes.length; cp++) Op.scenes[cp].markAllMaterialsAsDirty(pp, ip)
        }
      }
      static GetCompatibleTextureLoader(pp, ip) {
        return null
      }
    }
    tp._RenderPassIdCounter = 0, tp._RescalePostProcessFactory = null, tp.CollisionsEpsilon = .001, tp.QueueNewFrame = vp
  },
  40062: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
      }
    }
    Op.ShadersRepository = "src/Shaders/", Op.ShadersStore = {}, Op.IncludesShadersStore = {}, Op.ShadersRepositoryWGSL = "src/ShadersWGSL/", Op.ShadersStoreWGSL = {}, Op.IncludesShadersStoreWGSL = {}
  },
  40079: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      g: () => Hp,
      h: () => yp,
      l: () => Wp,
      o: () => Up,
      s: () => tp,
      u: () => Ap,
      y: () => Yp,
      C: () => Dp,
      F: () => Lp,
      J: () => xp
    });
    class Op {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(pp) {
        pp && this.program && pp(this.program)
      }
      setEngine(pp) {
        this.engine = pp
      }
      _fillEffectInformation(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = this.engine;
        if (Lp.supportsUniformBuffers)
          for (const Dp in ip) pp.bindUniformBlock(Dp, ip[Dp]);
        let Yp;
        for (this.engine.getUniforms(this, cp).forEach(((pp, ip) => {
            Op[cp[ip]] = pp
          })), this._uniforms = Op, Yp = 0; Yp < op.length; Yp++) {
          null == pp.getUniform(op[Yp]) && (op.splice(Yp, 1), Yp--)
        }
        op.forEach(((pp, ip) => {
          Ip[pp] = ip
        }));
        for (const Dp of Lp.getAttributes(this, Sp)) xp.push(Dp)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(pp, ip) {
        const cp = this._valueCache[pp],
          Op = ip.updateFlag;
        if (void 0 !== cp && cp === Op) return !1;
        const op = ip.BOp();
        let Ip = this._matrixValueCache[pp];
        if (void 0 !== cp && null !== cp && void 0 !== Ip) {
          let ip = !0;
          for (let pp = 15; pp >= 0; pp--)
            if (Ip[pp] !== op[pp]) {
              ip = !1;
              break
            } if (ip) return this._valueCache[pp] = Op, !1
        }
        return void 0 === Ip && (Ip = this._matrixValueCache[pp] = new Float32Array(16)), Ip.set(op), this._valueCache[pp] = Op, !0
      }
      _cacheFloat2(pp, ip, cp) {
        let Op = this._valueCache[pp];
        if (!Op || 2 !== Op.length) return Op = [ip, cp], this._valueCache[pp] = Op, !0;
        let op = !1;
        return Op[0] !== ip && (Op[0] = ip, op = !0), Op[1] !== cp && (Op[1] = cp, op = !0), op
      }
      _cacheFloat3(pp, ip, cp, Op) {
        let op = this._valueCache[pp];
        if (!op || 3 !== op.length) return op = [ip, cp, Op], this._valueCache[pp] = op, !0;
        let Ip = !1;
        return op[0] !== ip && (op[0] = ip, Ip = !0), op[1] !== cp && (op[1] = cp, Ip = !0), op[2] !== Op && (op[2] = Op, Ip = !0), Ip
      }
      _cacheFloat4(pp, ip, cp, Op, op) {
        let Ip = this._valueCache[pp];
        if (!Ip || 4 !== Ip.length) return Ip = [ip, cp, Op, op], this._valueCache[pp] = Ip, !0;
        let Sp = !1;
        return Ip[0] !== ip && (Ip[0] = ip, Sp = !0), Ip[1] !== cp && (Ip[1] = cp, Sp = !0), Ip[2] !== Op && (Ip[2] = Op, Sp = !0), Ip[3] !== op && (Ip[3] = op, Sp = !0), Sp
      }
      setInt(pp, ip) {
        const cp = this._valueCache[pp];
        void 0 !== cp && cp === ip || this.engine.setInt(this._uniforms[pp], ip) && (this._valueCache[pp] = ip)
      }
      setInt2(pp, ip, cp) {
        this._cacheFloat2(pp, ip, cp) && (this.engine.setInt2(this._uniforms[pp], ip, cp) || (this._valueCache[pp] = null))
      }
      setInt3(pp, ip, cp, Op) {
        this._cacheFloat3(pp, ip, cp, Op) && (this.engine.setInt3(this._uniforms[pp], ip, cp, Op) || (this._valueCache[pp] = null))
      }
      setInt4(pp, ip, cp, Op, op) {
        this._cacheFloat4(pp, ip, cp, Op, op) && (this.engine.setInt4(this._uniforms[pp], ip, cp, Op, op) || (this._valueCache[pp] = null))
      }
      setIntArray(pp, ip) {
        this._valueCache[pp] = null, this.engine.setIntArray(this._uniforms[pp], ip)
      }
      setIntArray2(pp, ip) {
        this._valueCache[pp] = null, this.engine.setIntArray2(this._uniforms[pp], ip)
      }
      setIntArray3(pp, ip) {
        this._valueCache[pp] = null, this.engine.setIntArray3(this._uniforms[pp], ip)
      }
      setIntArray4(pp, ip) {
        this._valueCache[pp] = null, this.engine.setIntArray4(this._uniforms[pp], ip)
      }
      setUInt(pp, ip) {
        const cp = this._valueCache[pp];
        void 0 !== cp && cp === ip || this.engine.setUInt(this._uniforms[pp], ip) && (this._valueCache[pp] = ip)
      }
      setUInt2(pp, ip, cp) {
        this._cacheFloat2(pp, ip, cp) && (this.engine.setUInt2(this._uniforms[pp], ip, cp) || (this._valueCache[pp] = null))
      }
      setUInt3(pp, ip, cp, Op) {
        this._cacheFloat3(pp, ip, cp, Op) && (this.engine.setUInt3(this._uniforms[pp], ip, cp, Op) || (this._valueCache[pp] = null))
      }
      setUInt4(pp, ip, cp, Op, op) {
        this._cacheFloat4(pp, ip, cp, Op, op) && (this.engine.setUInt4(this._uniforms[pp], ip, cp, Op, op) || (this._valueCache[pp] = null))
      }
      setUIntArray(pp, ip) {
        this._valueCache[pp] = null, this.engine.setUIntArray(this._uniforms[pp], ip)
      }
      setUIntArray2(pp, ip) {
        this._valueCache[pp] = null, this.engine.setUIntArray2(this._uniforms[pp], ip)
      }
      setUIntArray3(pp, ip) {
        this._valueCache[pp] = null, this.engine.setUIntArray3(this._uniforms[pp], ip)
      }
      setUIntArray4(pp, ip) {
        this._valueCache[pp] = null, this.engine.setUIntArray4(this._uniforms[pp], ip)
      }
      setArray(pp, ip) {
        this._valueCache[pp] = null, this.engine.setArray(this._uniforms[pp], ip)
      }
      setArray2(pp, ip) {
        this._valueCache[pp] = null, this.engine.setArray2(this._uniforms[pp], ip)
      }
      setArray3(pp, ip) {
        this._valueCache[pp] = null, this.engine.setArray3(this._uniforms[pp], ip)
      }
      setArray4(pp, ip) {
        this._valueCache[pp] = null, this.engine.setArray4(this._uniforms[pp], ip)
      }
      setMatrices(pp, ip) {
        ip && (this._valueCache[pp] = null, this.engine.setMatrices(this._uniforms[pp], ip))
      }
      setMatrix(pp, ip) {
        this._cacheMatrix(pp, ip) && (this.engine.setMatrices(this._uniforms[pp], ip.BOp()) || (this._valueCache[pp] = null))
      }
      setMatrix3x3(pp, ip) {
        this._valueCache[pp] = null, this.engine.setMatrix3x3(this._uniforms[pp], ip)
      }
      setMatrix2x2(pp, ip) {
        this._valueCache[pp] = null, this.engine.setMatrix2x2(this._uniforms[pp], ip)
      }
      setFloat(pp, ip) {
        const cp = this._valueCache[pp];
        void 0 !== cp && cp === ip || this.engine.setFloat(this._uniforms[pp], ip) && (this._valueCache[pp] = ip)
      }
      setVector2(pp, ip) {
        this._cacheFloat2(pp, ip.x, ip.y) && (this.engine.setFloat2(this._uniforms[pp], ip.x, ip.y) || (this._valueCache[pp] = null))
      }
      setFloat2(pp, ip, cp) {
        this._cacheFloat2(pp, ip, cp) && (this.engine.setFloat2(this._uniforms[pp], ip, cp) || (this._valueCache[pp] = null))
      }
      setVector3(pp, ip) {
        this._cacheFloat3(pp, ip.x, ip.y, ip.z) && (this.engine.setFloat3(this._uniforms[pp], ip.x, ip.y, ip.z) || (this._valueCache[pp] = null))
      }
      setFloat3(pp, ip, cp, Op) {
        this._cacheFloat3(pp, ip, cp, Op) && (this.engine.setFloat3(this._uniforms[pp], ip, cp, Op) || (this._valueCache[pp] = null))
      }
      setVector4(pp, ip) {
        this._cacheFloat4(pp, ip.x, ip.y, ip.z, ip.w) && (this.engine.setFloat4(this._uniforms[pp], ip.x, ip.y, ip.z, ip.w) || (this._valueCache[pp] = null))
      }
      setQuaternion(pp, ip) {
        this._cacheFloat4(pp, ip.x, ip.y, ip.z, ip.w) && (this.engine.setFloat4(this._uniforms[pp], ip.x, ip.y, ip.z, ip.w) || (this._valueCache[pp] = null))
      }
      setFloat4(pp, ip, cp, Op, op) {
        this._cacheFloat4(pp, ip, cp, Op, op) && (this.engine.setFloat4(this._uniforms[pp], ip, cp, Op, op) || (this._valueCache[pp] = null))
      }
      setColor3(pp, ip) {
        this._cacheFloat3(pp, ip.r, ip.g, ip.b) && (this.engine.setFloat3(this._uniforms[pp], ip.r, ip.g, ip.b) || (this._valueCache[pp] = null))
      }
      setColor4(pp, ip, cp) {
        this._cacheFloat4(pp, ip.r, ip.g, ip.b, cp) && (this.engine.setFloat4(this._uniforms[pp], ip.r, ip.g, ip.b, cp) || (this._valueCache[pp] = null))
      }
      setDirectColor4(pp, ip) {
        this._cacheFloat4(pp, ip.r, ip.g, ip.b, ip.a) && (this.engine.setFloat4(this._uniforms[pp], ip.r, ip.g, ip.b, ip.a) || (this._valueCache[pp] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var op = cp(40088);
    const Ip = new WeakMap,
      Sp = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function xp(pp) {
      let ip = Ip.get(pp);
      if (!ip) {
        if (!pp) return Sp;
        ip = {
          _webGLVersion: pp.TEXTURE_BINDING_3D ? 2 : 1,
          _context: pp,
          parallelShaderCompile: pp.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Ip.set(pp, ip)
      }
      return ip
    }

    function Lp(pp) {
      Ip.delete(pp)
    }

    function Yp(pp, ip, cp, Op, op, Ip) {
      const Sp = xp(Op);
      Ip || (Ip = Sp._createShaderProgramInjection ?? Pp);
      return Ip(pp, vp(ip, "vertex", Op, Sp._contextWasLost), vp(cp, "fragment", Op, Sp._contextWasLost), Op, op, Sp.validateShaderPrograms)
    }

    function Dp(pp, ip, cp, Op, op) {
      let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Sp = arguments.length > 6 ? arguments[6] : void 0;
      const Lp = xp(op);
      Sp || (Sp = Lp._createShaderProgramInjection ?? Pp);
      const Yp = Lp._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Sp(pp, wp(ip, "vertex", Op, Yp, op, Lp._contextWasLost), wp(cp, "fragment", Op, Yp, op, Lp._contextWasLost), op, Ip, Lp.validateShaderPrograms)
    }

    function Ap(pp, ip) {
      const cp = new Op,
        op = xp(pp);
      return op.parallelShaderCompile && !op.disableParallelShaderCompile && (cp.isParallelCompiled = !0), cp.context = op._context, cp
    }

    function Pp(pp, ip, cp, Op) {
      let op = arguments.length > 5 ? arguments[5] : void 0;
      const Ip = Op.createProgram();
      if (pp.program = Ip, !Ip) throw new Error("Unable to create program");
      return Op.attachShader(Ip, ip), Op.attachShader(Ip, cp), Op.linkProgram(Ip), pp.context = Op, pp.vertexShader = ip, pp.fragmentShader = cp, pp.isParallelCompiled || yp(pp, Op, op), Ip
    }

    function Wp(pp, ip, cp) {
      const Op = pp;
      if (Op._isDisposed) return !1;
      const op = xp(ip);
      return !!(op && op.parallelShaderCompile && op.parallelShaderCompile.COMPLETION_STATUS_KHR && Op.program && ip.getProgramParameter(Op.program, op.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (yp(Op, ip, cp), !0)
    }

    function yp(pp, ip, cp) {
      const Op = pp.context,
        op = pp.vertexShader,
        Ip = pp.fragmentShader,
        Sp = pp.program;
      if (!Op.getProgramParameter(Sp, Op.LINK_STATUS)) {
        if (!ip.getShaderParameter(op, ip.COMPILE_STATUS)) {
          const cp = ip.getShaderInfoLog(op);
          if (cp) throw pp.vertexCompilationError = cp, new Error("VERTEX SHADER " + cp)
        }
        if (!ip.getShaderParameter(Ip, ip.COMPILE_STATUS)) {
          const cp = ip.getShaderInfoLog(Ip);
          if (cp) throw pp.fragmentCompilationError = cp, new Error("FRAGMENT SHADER " + cp)
        }
        const cp = Op.getProgramInfoLog(Sp);
        if (cp) throw pp.programLinkError = cp, new Error(cp)
      }
      if (cp) {
        Op.validateProgram(Sp);
        if (!Op.getProgramParameter(Sp, Op.VALIDATE_STATUS)) {
          const ip = Op.getProgramInfoLog(Sp);
          if (ip) throw pp.programValidationError = ip, new Error(ip)
        }
      }
      Op.deleteShader(op), Op.deleteShader(Ip), pp.vertexShader = void 0, pp.fragmentShader = void 0, pp.onCompiled && (pp.onCompiled(), pp.onCompiled = void 0)
    }

    function Up(pp, ip, cp, Op, op, Ip, Sp, Lp, Ap) {
      let Pp = arguments.length > 10 ? arguments[10] : void 0,
        Wp = arguments.length > 11 ? arguments[11] : void 0,
        yp = arguments.length > 12 ? arguments[12] : void 0;
      const Up = xp(pp.context);
      Wp || (Wp = Up.createRawShaderProgramInjection ?? Yp), yp || (yp = Up.createShaderProgramInjection ?? Dp);
      const wp = pp;
      wp.program = Op ? Wp(wp, ip, cp, wp.context, Ap) : yp(wp, ip, cp, Lp, wp.context, Ap), wp.program.__SPECTOR_rebuildProgram = Sp, Pp()
    }

    function wp(pp, ip, cp, Op, Ip, Sp) {
      return vp((0, op.g)(pp, cp, Op), ip, Ip, Sp)
    }

    function vp(pp, ip, cp, Op) {
      const op = cp.createShader("vertex" === ip ? cp.VERTEX_SHADER : cp.FRAGMENT_SHADER);
      if (!op) {
        let pp, op = cp.NO_ERROR;
        for (;
          (pp = cp.getError()) !== cp.NO_ERROR;) op = pp;
        throw new Error(`Something went wrong while creating a gl ${ip} shader object. gl error=${op}, gl isContextLost=${cp.isContextLost()}, _contextWasLost=${Op}`)
      }
      return cp.shaderSource(op, pp), cp.compileShader(op), op
    }

    function tp(pp, ip) {
      ip.useProgram(pp)
    }

    function Hp(pp, ip) {
      const cp = pp;
      if (!cp.isParallelCompiled) return void ip(pp);
      const Op = cp.onCompiled;
      cp.onCompiled = () => {
        Op?.(), ip(pp)
      }
    }
  },
  40050: (pp, ip, cp) => {
    cp.d(ip, {
      ThinEngine: () => ep
    });
    var Op = cp(40053),
      op = cp(40079),
      Ip = cp(40113),
      Sp = cp(40127),
      xp = cp(38905),
      Lp = cp(40071);
    class Yp {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(pp, ip, cp, Op, op) {
        if (op.drawBuffersExtensionDisabled) {
          const ip = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          pp = pp.replace(ip, "")
        }
        return pp
      }
    }
    const Dp = /(flat\s)?\s*varying\s*.*/;
    class Ap {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(pp) {
        return pp.replace("attribute", "in")
      }
      varyingCheck(pp, ip) {
        return Dp.test(pp)
      }
      varyingProcessor(pp, ip) {
        return pp.replace("varying", ip ? "in" : "out")
      }
      postProcessor(pp, ip, cp) {
        const Op = -1 !== pp.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (pp = (pp = pp.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), cp) {
          const cp = -1 !== pp.search(/layout *\(location *= *0\) *out/g),
            op = -1 !== ip.indexOf("#define DUAL_SOURCE_BLENDING"),
            Ip = op ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          op && (pp = "#extension GL_EXT_blend_func_extended : require\n" + pp), pp = (pp = (pp = (pp = (pp = (pp = (pp = pp.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Op || cp ? "" : Ip) + "void main(")
        } else {
          ip.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (pp = "invariant gl_Position;\n" + pp);
          if (-1 !== ip.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + pp
        }
        return pp
      }
    }
    var Pp = cp(40134),
      Wp = cp(40143),
      yp = cp(40149),
      Up = cp(40033),
      wp = cp(40088),
      vp = cp(40068),
      tp = cp(40151),
      Hp = cp(40124);
    class dp {}
    class ep extends Ip.b {
      get name() {
        return this._name
      }
      set name(pp) {
        this._name = pp
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Op.e.ShadersRepository
      }
      static set ShadersRepository(pp) {
        Op.e.ShadersRepository = pp
      }
      get supportsUniformBuffers() {
        return this.eU > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(pp, ip, cp, Op) {
        if (cp = cp || {}, super(ip ?? cp.antialias, cp, Op), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !pp) return;
        let Ip;
        if (pp.getContext) {
          if (Ip = pp, void 0 === cp.preserveDrawingBuffer && (cp.preserveDrawingBuffer = !1), void 0 === cp.xrCompatible && (cp.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const pp = navigator.userAgent;
            for (const ip of ep.ExceptionList) {
              const Op = ip.key,
                op = ip.targets;
              if (new RegExp(Op).test(pp)) {
                if (ip.capture && ip.captureConstraint) {
                  const cp = ip.capture,
                    Op = ip.captureConstraint,
                    op = new RegExp(cp).exec(pp);
                  if (op && op.length > 0) {
                    if (parseInt(op[op.length - 1]) >= Op) continue
                  }
                }
                for (const pp of op) switch (pp) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    cp.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, op.F)(this._gl)
            } : (this._onContextLost = pp => {
              pp.preventDefault(), this._contextWasLost = !0, (0, op.F)(this._gl), xp.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Ip.addEventListener("webglcontextrestored", this._onContextRestored, !1), cp.powerPreference = cp.powerPreference || "high-performance"), Ip.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (cp.xrCompatible = !1), !cp.disableWebGL2Support) try {
            this._gl = Ip.getContext("webgl2", cp) || Ip.getContext("experimental-webgl2", cp), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Dp) {}
          if (!this._gl) {
            if (!Ip) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Ip.getContext("webgl", cp) || Ip.getContext("experimental-webgl", cp)
            } catch (Dp) {
              throw new Error("WebGL not supported", {
                cause: Dp
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = pp, Ip = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const ip = this._gl.getContextAttributes();
          ip && (cp.stencil = ip.stencil)
        }
        this._sharedInit(Ip), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== cp.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = cp.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let op = 0; op < this._caps.maxVertexAttribs; op++) this._currentBufferPointers[op] = new dp;
        this._shaderProcessor = this.eU > 1 ? new Ap : new Yp;
        const Sp = `Babylon.js v${ep.Version}`;
        xp.e.Log(Sp + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Sp);
        const Lp = (0, op.J)(this._gl);
        Lp.validateShaderPrograms = this.validateShaderPrograms, Lp.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(pp) {
        return null
      }
      areAllEffectsReady() {
        for (const pp in this._compiledEffects) {
          if (!this._compiledEffects[pp].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const pp = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != pp && (this._glRenderer = this._gl.getParameter(pp.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(pp.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const ip = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!ip, this._alphaState = new Hp.c(this._caps.blendParametersPerTarget), ip && (this._gl.blendEquationSeparateIndexed = ip.blendEquationSeparateiOES.bind(ip), this._gl.blendEquationIndexed = ip.blendEquationiOES.bind(ip), this._gl.blendFuncSeparateIndexed = ip.blendFuncSeparateiOES.bind(ip), this._gl.blendFuncIndexed = ip.blendFunciOES.bind(ip), this._gl.colorMaskIndexed = ip.colorMaskiOES.bind(ip), this._gl.disableIndexed = ip.disableiOES.bind(ip), this._gl.enableIndexed = ip.enableiOES.bind(ip)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const pp = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== pp) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = pp.drawBuffersWEBGL.bind(pp), this._caps.maxDrawBuffers = this._gl.getParameter(pp.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let ip = 0; ip < 16; ip++) this._gl["COLOR_ATTACHMENT" + ip + "_WEBGL"] = pp["COLOR_ATTACHMENT" + ip + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const pp = this._gl.getExtension("WEBGL_depth_texture");
          null != pp && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = pp.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const pp = this._gl.getExtension("OES_vertex_array_object");
          null != pp && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = pp.createVertexArrayOES.bind(pp), this._gl.bindVertexArray = pp.bindVertexArrayOES.bind(pp), this._gl.deleteVertexArray = pp.deleteVertexArrayOES.bind(pp))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const pp = this._gl.getExtension("ANGLE_instanced_arrays");
          null != pp ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = pp.drawArraysInstancedANGLE.bind(pp), this._gl.drawElementsInstanced = pp.drawElementsInstancedANGLE.bind(pp), this._gl.vertexAttribDivisor = pp.vertexAttribDivisorANGLE.bind(pp)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const pp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            ip = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (pp && ip && (this._caps.highPrecisionShaderSupported = 0 !== pp.precision && 0 !== ip.precision, this._caps.shaderFloatPrecision = Math.min(pp.precision, ip.precision)), !this._shouldUseHighPrecisionShader) {
            const pp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              ip = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            pp && ip && (this._caps.shaderFloatPrecision = Math.min(pp.precision, ip.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const pp = this._gl.getExtension("EXT_blend_minmax");
          null != pp && (this._caps.blendMinMax = !0, this._gl.MAX = pp.MAX_EXT, this._gl.MIN = pp.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const pp = this._gl.getExtension("EXT_sRGB");
            null != pp && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: pp.SRGB_EXT,
              SRGB8: pp.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: pp.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const pp = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== pp && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && pp)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let cp = 0; cp < this._maxSimultaneousTextures; cp++) this._nextFreeTextureSlots.push(cp);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get eU() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const pp = this._workingCanvas.getContext("2d");
        pp && (this._workingContext = pp)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const pp = this.getGlInfo();
        return pp && pp.renderer ? pp.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Ip = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Ip;
        let Sp = 0;
        if (ip && pp) {
          let ip = !0;
          if (this._currentRenderTarget) {
            const cp = this._currentRenderTarget.texture?.format;
            if (void 0 !== cp && (0, tp.i)(cp)) {
              const cp = this._currentRenderTarget.texture?.type;
              void 0 !== cp && (0, tp.k)(cp) ? (ep._TempClearColorUint32[0] = 255 * pp.r, ep._TempClearColorUint32[1] = 255 * pp.g, ep._TempClearColorUint32[2] = 255 * pp.b, ep._TempClearColorUint32[3] = 255 * pp.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, ep._TempClearColorUint32), ip = !1) : (ep._TempClearColorInt32[0] = 255 * pp.r, ep._TempClearColorInt32[1] = 255 * pp.g, ep._TempClearColorInt32[2] = 255 * pp.b, ep._TempClearColorInt32[3] = 255 * pp.a, this._gl.clearBufferiv(this._gl.COLOR, 0, ep._TempClearColorInt32), ip = !1)
            }
          }
          ip && (this._gl.clearColor(pp.r, pp.g, pp.b, void 0 !== pp.a ? pp.a : 1), Sp |= this._gl.COLOR_BUFFER_BIT)
        }
        cp && (this.lOp ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Sp |= this._gl.DEPTH_BUFFER_BIT), Op && (this._gl.clearStencil(op), Sp |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Sp)
      }
      _clearColorAttachment(pp, ip, cp, Op) {
        if ((0, tp.i)(cp)) {
          const cp = (0, tp.k)(Op),
            op = cp ? ep._TempClearColorUint32 : ep._TempClearColorInt32;
          return op[0] = ip.r, op[1] = ip.g, op[2] = ip.b, op[3] = ip.a, void(cp ? this._gl.clearBufferuiv(this._gl.COLOR, pp, op) : this._gl.clearBufferiv(this._gl.COLOR, pp, op))
        }
        ep._TempClearColorFloat32[0] = ip.r, ep._TempClearColorFloat32[1] = ip.g, ep._TempClearColorFloat32[2] = ip.b, ep._TempClearColorFloat32[3] = ip.a, this._gl.clearBufferfv(this._gl.COLOR, pp, ep._TempClearColorFloat32)
      }
      _viewport(pp, ip, cp, Op) {
        pp === this._viewportCached.x && ip === this._viewportCached.y && cp === this._viewportCached.z && Op === this._viewportCached.w || (this._viewportCached.x = pp, this._viewportCached.y = ip, this._viewportCached.z = cp, this._viewportCached.w = Op, this._gl.viewport(pp, ip, cp, Op))
      }
      Rk() {
        super.Rk(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Lp = pp;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = pp, this._integerMRTAttachmentsMask = !pp.isMulti && pp.texture && (0, tp.i)(pp.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Lp._framebuffer);
        const Yp = this._gl;
        pp.isMulti || (pp.is2DArray || pp.is3D ? (Yp.framebufferTextureLayer(Yp.FRAMEBUFFER, Yp.COLOR_ATTACHMENT0, pp.texture._hardwareTexture?.underlyingResource, Ip, Sp), Lp._currentLOD = Ip) : pp.isCube ? Yp.framebufferTexture2D(Yp.FRAMEBUFFER, Yp.COLOR_ATTACHMENT0, Yp.TEXTURE_CUBE_MAP_POSITIVE_X + ip, pp.texture._hardwareTexture?.underlyingResource, Ip) : Lp._currentLOD !== Ip && (Yp.framebufferTexture2D(Yp.FRAMEBUFFER, Yp.COLOR_ATTACHMENT0, Yp.TEXTURE_2D, pp.texture._hardwareTexture?.underlyingResource, Ip), Lp._currentLOD = Ip));
        const Dp = pp._depthStencilTexture;
        if (Dp) {
          pp.is3D && (pp.texture.width === Dp.width && pp.texture.height === Dp.height && pp.texture.depth === Dp.depth || xp.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const cp = pp._depthStencilTextureWithStencil ? Yp.DEPTH_STENCIL_ATTACHMENT : Yp.DEPTH_ATTACHMENT;
          pp.is2DArray || pp.is3D ? Yp.framebufferTextureLayer(Yp.FRAMEBUFFER, cp, Dp._hardwareTexture?.underlyingResource, Ip, Sp) : pp.isCube ? Yp.framebufferTexture2D(Yp.FRAMEBUFFER, cp, Yp.TEXTURE_CUBE_MAP_POSITIVE_X + ip, Dp._hardwareTexture?.underlyingResource, Ip) : Yp.framebufferTexture2D(Yp.FRAMEBUFFER, cp, Yp.TEXTURE_2D, Dp._hardwareTexture?.underlyingResource, Ip)
        }
        Lp._MSAAFramebuffer && this._bindUnboundFramebuffer(Lp._MSAAFramebuffer), this._cachedViewport && !op ? this.setViewport(this._cachedViewport, cp, Op) : (cp || (cp = pp.width, Ip && (cp /= Math.pow(2, Ip))), Op || (Op = pp.height, Ip && (Op /= Math.pow(2, Ip))), this._viewport(0, 0, cp, Op)), this.wipeCaches()
      }
      setStateCullFaceType(pp, ip) {
        const cp = this.cullBackFaces ?? pp ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== cp || ip) && (this._depthCullingState.cullFace = cp)
      }
      setState(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== pp || cp) && (this._depthCullingState.cull = pp), this.setStateCullFaceType(op, cp), this.setZOffset(ip), this.setZOffsetUnits(Sp);
        const xp = Op ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== xp || cp) && (this._depthCullingState.frontFace = xp), this._stencilStateComposer.stencilMaterial = Ip
      }
      _resolveAndGenerateMipMapsFramebuffer(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        pp.disableAutomaticMSAAResolve || (pp.isMulti ? this.resolveMultiFramebuffer(pp) : this.resolveFramebuffer(pp)), ip || (pp.isMulti ? this.generateMipMapsMultiFramebuffer(pp) : this.generateMipMapsFramebuffer(pp))
      }
      _bindUnboundFramebuffer(pp) {
        this._currentFramebuffer !== pp && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, pp), this._currentFramebuffer = pp)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(pp) {
        const ip = this._getTextureTarget(pp);
        this._bindTextureDirectly(ip, pp, !0), this._gl.generateMipmap(ip), this._bindTextureDirectly(ip, null)
      }
      unBindFramebuffer(pp, ip, cp) {
        const Op = pp;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(pp, ip), cp && (Op._MSAAFramebuffer && this._bindUnboundFramebuffer(Op._framebuffer), cp()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(pp) {
        pp.isMulti || !pp.texture?.generateMipMaps || pp.isCube || this.generateMipmaps(pp.texture)
      }
      resolveFramebuffer(pp) {
        const ip = pp,
          cp = this._gl;
        if (!ip._MSAAFramebuffer || ip.isMulti) return;
        let Op = ip.resolveMSAAColors ? cp.COLOR_BUFFER_BIT : 0;
        Op |= ip._generateDepthBuffer && ip.resolveMSAADepth ? cp.DEPTH_BUFFER_BIT : 0, Op |= ip._generateStencilBuffer && ip.resolveMSAAStencil ? cp.STENCIL_BUFFER_BIT : 0, cp.bindFramebuffer(cp.READ_FRAMEBUFFER, ip._MSAAFramebuffer), cp.bindFramebuffer(cp.DRAW_FRAMEBUFFER, ip._framebuffer), cp.blitFramebuffer(0, 0, pp.width, pp.height, 0, 0, pp.width, pp.height, Op, cp.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(pp, ip, cp) {
        return this._createVertexBuffer(pp, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(pp, ip) {
        const cp = this._gl.createBuffer();
        if (!cp) throw new Error("Unable to create vertex buffer");
        const Op = new Pp.d(cp);
        return this.bindArrayBuffer(Op), "number" !== typeof pp ? pp instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(pp), ip), Op.TA = 4 * pp.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, pp, ip), Op.TA = pp.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(pp), ip), Op.TA = pp), this._resetVertexBufferBinding(), Op.references = 1, Op
      }
      createDynamicVertexBuffer(pp, ip) {
        return this._createVertexBuffer(pp, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(pp, ip, cp) {
        const Op = this._gl.createBuffer(),
          op = new Pp.d(Op);
        if (!Op) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(op);
        const Ip = this._normalizeIndexData(pp);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Ip, ip ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), op.references = 1, op.is32Bits = 4 === Ip.BYTES_PER_ELEMENT, op
      }
      _normalizeIndexData(pp) {
        if (2 === pp.BYTES_PER_ELEMENT) return pp;
        if (this._caps.uintIndices) {
          if (pp instanceof Uint32Array) return pp;
          for (let ip = 0; ip < pp.length; ip++)
            if (pp[ip] >= 65535) return new Uint32Array(pp);
          return new Uint16Array(pp)
        }
        return new Uint16Array(pp)
      }
      bindArrayBuffer(pp) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(pp, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(pp, ip, cp) {
        const Op = pp.program,
          op = this._gl.getUniformBlockIndex(Op, ip);
        this._gl.uniformBlockBinding(Op, op, cp)
      }
      bindIndexBuffer(pp) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(pp, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(pp, ip) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[ip] !== pp) && (this._gl.bindBuffer(ip, pp ? pp.underlyingResource : null), this._currentBoundBuffer[ip] = pp)
      }
      updateArrayBuffer(pp) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, pp)
      }
      _vertexAttribPointer(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = this._currentBufferPointers[ip];
        if (!xp) return;
        let Lp = !1;
        xp.active ? (xp.buffer !== pp && (xp.buffer = pp, Lp = !0), xp.size !== cp && (xp.size = cp, Lp = !0), xp.type !== Op && (xp.type = Op, Lp = !0), xp.normalized !== op && (xp.normalized = op, Lp = !0), xp.stride !== Ip && (xp.stride = Ip, Lp = !0), xp.offset !== Sp && (xp.offset = Sp, Lp = !0)) : (Lp = !0, xp.active = !0, xp.index = ip, xp.size = cp, xp.type = Op, xp.normalized = op, xp.stride = Ip, xp.offset = Sp, xp.buffer = pp), (Lp || this._vaoRecordInProgress) && (this.bindArrayBuffer(pp), Op === this._gl.UNSIGNED_INT || Op === this._gl.INT ? this._gl.vertexAttribIPointer(ip, cp, Op, Ip, Sp) : this._gl.vertexAttribPointer(ip, cp, Op, op, Ip, Sp))
      }
      _bindIndexBufferWithCache(pp) {
        null != pp && this._cachedIndexBuffer !== pp && (this._cachedIndexBuffer = pp, this.bindIndexBuffer(pp), this._uintIndicesCurrentlySet = pp.is32Bits)
      }
      _bindVertexBuffersAttributes(pp, ip, cp) {
        const Op = ip.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let op = 0; op < Op.length; op++) {
          const Ip = ip.getAttributeLocation(op);
          if (Ip >= 0) {
            const ip = Op[op];
            let Sp = null;
            if (cp && (Sp = cp[ip]), Sp || (Sp = pp[ip]), !Sp) continue;
            this._gl.enableVertexAttribArray(Ip), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Ip] = !0);
            const xp = Sp.getBuffer();
            xp && (this._vertexAttribPointer(xp, Ip, Sp.getSize(), Sp.type, Sp.normalized, Sp.byteStride, Sp.byteOffset), Sp.getIsInstanced() && (this._gl.vertexAttribDivisor(Ip, Sp.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Ip), this._currentInstanceBuffers.push(xp))))
          }
        }
      }
      recordVertexArrayObject(pp, ip, cp, Op) {
        const op = this._gl.createVertexArray();
        if (!op) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(op), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(pp, cp, Op), this.bindIndexBuffer(ip), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), op
      }
      bindVertexArrayObject(pp, ip) {
        this._cachedVertexArrayObject !== pp && (this._cachedVertexArrayObject = pp, this._gl.bindVertexArray(pp), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != ip && ip.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(pp, ip, cp, Op, op) {
        if (this._cachedVertexBuffers !== pp || this._cachedEffectForVertexBuffers !== op) {
          this._cachedVertexBuffers = pp, this._cachedEffectForVertexBuffers = op;
          const ip = op.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Ip = 0;
          for (let Sp = 0; Sp < ip; Sp++)
            if (Sp < cp.length) {
              const ip = op.getAttributeLocation(Sp);
              ip >= 0 && (this._gl.enableVertexAttribArray(ip), this._vertexAttribArraysEnabled[ip] = !0, this._vertexAttribPointer(pp, ip, cp[Sp], this._gl.FLOAT, !1, Op, Ip)), Ip += 4 * cp[Sp]
            }
        }
        this._bindIndexBufferWithCache(ip)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(pp, ip, cp, Op) {
        this._cachedVertexBuffers === pp && this._cachedEffectForVertexBuffers === cp || (this._cachedVertexBuffers = pp, this._cachedEffectForVertexBuffers = cp, this._bindVertexBuffersAttributes(pp, cp, Op)), this._bindIndexBufferWithCache(ip)
      }
      unbindInstanceAttributes() {
        let pp;
        for (let ip = 0, cp = this._currentInstanceLocations.length; ip < cp; ip++) {
          const cp = this._currentInstanceBuffers[ip];
          pp != cp && cp.references && (pp = cp, this.bindArrayBuffer(cp));
          const Op = this._currentInstanceLocations[ip];
          this._gl.vertexAttribDivisor(Op, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(pp) {
        this._gl.deleteVertexArray(pp)
      }
      _releaseBuffer(pp) {
        return pp.references--, 0 === pp.references && (this._deleteBuffer(pp), !0)
      }
      _deleteBuffer(pp) {
        this._gl.deleteBuffer(pp.underlyingResource)
      }
      updateAndBindInstancesBuffer(pp, ip, cp) {
        if (this.bindArrayBuffer(pp), ip && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, ip), void 0 !== cp[0].index) this.bindInstancesBuffer(pp, cp, !0);
        else
          for (let Op = 0; Op < 4; Op++) {
            const ip = cp[Op];
            this._vertexAttribArraysEnabled[ip] || (this._gl.enableVertexAttribArray(ip), this._vertexAttribArraysEnabled[ip] = !0), this._vertexAttribPointer(pp, ip, 4, this._gl.FLOAT, !1, 64, 16 * Op), this._gl.vertexAttribDivisor(ip, 1), this._currentInstanceLocations.push(ip), this._currentInstanceBuffers.push(pp)
          }
      }
      bindInstancesBuffer(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(pp);
        let Op = 0;
        if (cp)
          for (let op = 0; op < ip.length; op++) {
            Op += 4 * ip[op].attributeSize
          }
        for (let op = 0; op < ip.length; op++) {
          const cp = ip[op];
          void 0 === cp.index && (cp.index = this._currentEffect.getAttributeLocationByName(cp.attributeName)), cp.index < 0 || (this._vertexAttribArraysEnabled[cp.index] || (this._gl.enableVertexAttribArray(cp.index), this._vertexAttribArraysEnabled[cp.index] = !0), this._vertexAttribPointer(pp, cp.index, cp.attributeSize, cp.attributeType || this._gl.FLOAT, cp.normalized || !1, Op, cp.offset), this._gl.vertexAttribDivisor(cp.index, void 0 === cp.divisor ? 1 : cp.divisor), this._currentInstanceLocations.push(cp.index), this._currentInstanceBuffers.push(pp))
        }
      }
      disableInstanceAttributeByName(pp) {
        if (!this._currentEffect) return;
        const ip = this._currentEffect.getAttributeLocationByName(pp);
        this.disableInstanceAttribute(ip)
      }
      disableInstanceAttribute(pp) {
        let ip, cp = !1;
        for (; - 1 !== (ip = this._currentInstanceLocations.indexOf(pp));) this._currentInstanceLocations.splice(ip, 1), this._currentInstanceBuffers.splice(ip, 1), cp = !0;
        cp && (this._gl.vertexAttribDivisor(pp, 0), this.disableAttributeByIndex(pp))
      }
      disableAttributeByIndex(pp) {
        this._gl.disableVertexAttribArray(pp), this._vertexAttribArraysEnabled[pp] = !1, this._currentBufferPointers[pp].active = !1
      }
      draw(pp, ip, cp, Op) {
        this.drawElementsType(pp ? 0 : 1, ip, cp, Op)
      }
      drawPointClouds(pp, ip, cp) {
        this.drawArraysType(2, pp, ip, cp)
      }
      drawUnIndexed(pp, ip, cp, Op) {
        this.drawArraysType(pp ? 0 : 1, ip, cp, Op)
      }
      drawElementsType(pp, ip, cp, Op) {
        this.applyStates(), this._reportDrawCall();
        const op = this._drawMode(pp),
          Ip = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Sp = this._uintIndicesCurrentlySet ? 4 : 2;
        Op ? this._gl.drawElementsInstanced(op, cp, Ip, ip * Sp, Op) : this._gl.drawElements(op, cp, Ip, ip * Sp)
      }
      drawArraysType(pp, ip, cp, Op) {
        this.applyStates(), this._reportDrawCall();
        const op = this._drawMode(pp);
        Op ? this._gl.drawArraysInstanced(op, ip, cp, Op) : this._gl.drawArrays(op, ip, cp)
      }
      _drawMode(pp) {
        switch (pp) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(pp) {
        this._compiledEffects[pp._key] && delete this._compiledEffects[pp._key];
        const ip = pp.getPipelineContext();
        ip && this._deletePipelineContext(ip)
      }
      _deletePipelineContext(pp) {
        const ip = pp;
        ip && ip.program && (ip.program.__SPECTOR_rebuildProgram = null, (0, vp.o)(ip), this._gl && (this._currentProgram === ip.program && this._setProgram(null), this._gl.deleteProgram(ip.program)))
      }
      _getGlobalDefines(pp) {
        return (0, wp.j)(pp, this.isNDCHalfZRange, this.lOp, this.useExactSrgbConversions)
      }
      createEffect(pp, ip, cp, Ip, Sp, xp, Lp, Yp, Dp) {
        let Ap = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Pp = arguments.length > 10 ? arguments[10] : void 0;
        const Wp = "string" === typeof pp ? pp : pp.vertexToken || pp.vertexSource || pp.vertexElement || pp.vertex,
          yp = "string" === typeof pp ? pp : pp.fragmentToken || pp.fragmentSource || pp.fragmentElement || pp.fragment,
          Up = this._getGlobalDefines(),
          wp = void 0 !== ip.attributes;
        let vp = Sp ?? ip.defines ?? "";
        Up && (vp += Up);
        const tp = Wp + "+" + yp + "@" + vp;
        if (this._compiledEffects[tp]) {
          const pp = this._compiledEffects[tp];
          return Lp && pp.isReady() && Lp(pp), pp._refCount++, pp
        }
        this._gl && (0, op.J)(this._gl);
        const Hp = new Op.e(pp, ip, wp ? this : cp, Ip, this, Sp, xp, Lp, Yp, Dp, tp, ip.shaderLanguage ?? Ap, ip.extraInitializationsAsync ?? Pp);
        return this._compiledEffects[tp] = Hp, Hp
      }
      _getShaderSource(pp) {
        return this._gl.getShaderSource(pp)
      }
      createRawShaderProgram(pp, ip, cp, Op) {
        let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Sp = (0, op.J)(this._gl);
        return Sp._contextWasLost = this._contextWasLost, Sp.validateShaderPrograms = this.validateShaderPrograms, (0, op.y)(pp, ip, cp, Op || this._gl, Ip)
      }
      createShaderProgram(pp, ip, cp, Op, Ip) {
        let Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const xp = (0, op.J)(this._gl);
        return xp._contextWasLost = this._contextWasLost, xp.validateShaderPrograms = this.validateShaderPrograms, (0, op.C)(pp, ip, cp, Op, Ip || this._gl, Sp)
      }
      inlineShaderCode(pp) {
        return pp
      }
      createPipelineContext(pp) {
        if (this._gl) {
          (0, op.J)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const ip = (0, op.u)(this._gl, pp);
        return ip.engine = this, ip
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(pp) {
        return (0, op.h)(pp, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(pp, ip, cp, Op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
        const Pp = (0, op.J)(this._gl);
        return Pp._contextWasLost = this._contextWasLost, Pp.validateShaderPrograms = this.validateShaderPrograms, Pp._createShaderProgramInjection = this._createShaderProgram.bind(this), Pp.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Pp.createShaderProgramInjection = this.createShaderProgram.bind(this), Pp.loadFileInjection = this._loadFile.bind(this), (0, op.o)(pp, ip, cp, Op, Ip, Sp, xp, Lp, Yp, Dp, Ap)
      }
      _createShaderProgram(pp, ip, cp, Op) {
        let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, op.d)(pp, ip, cp, Op, Ip)
      }
      _isRenderingStateCompiled(pp) {
        return !this._isDisposed && (0, op.l)(pp, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(pp, ip) {
        (0, op.g)(pp, ip)
      }
      getUniforms(pp, ip) {
        const cp = new Array,
          Op = pp;
        for (let op = 0; op < ip.length; op++) cp.push(this._gl.getUniformLocation(Op.program, ip[op]));
        return cp
      }
      getAttributes(pp, ip) {
        const cp = [],
          Op = pp;
        for (let Ip = 0; Ip < ip.length; Ip++) try {
          cp.push(this._gl.getAttribLocation(Op.program, ip[Ip]))
        } catch (op) {
          cp.push(-1)
        }
        return cp
      }
      enableEffect(pp) {
        (pp = null !== pp && (0, Sp.e)(pp) ? pp.effect : pp) && pp !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(pp), this._currentEffect = pp, pp.onBind && pp.onBind(pp), pp._onBindObservable && pp._onBindObservable.notifyObservers(pp))
      }
      setInt(pp, ip) {
        return !!pp && (this._gl.uniform1i(pp, ip), !0)
      }
      setInt2(pp, ip, cp) {
        return !!pp && (this._gl.uniform2i(pp, ip, cp), !0)
      }
      setInt3(pp, ip, cp, Op) {
        return !!pp && (this._gl.uniform3i(pp, ip, cp, Op), !0)
      }
      setInt4(pp, ip, cp, Op, op) {
        return !!pp && (this._gl.uniform4i(pp, ip, cp, Op, op), !0)
      }
      setIntArray(pp, ip) {
        return !!pp && (this._gl.uniform1iv(pp, ip), !0)
      }
      setIntArray2(pp, ip) {
        return !(!pp || ip.length % 2 !== 0) && (this._gl.uniform2iv(pp, ip), !0)
      }
      setIntArray3(pp, ip) {
        return !(!pp || ip.length % 3 !== 0) && (this._gl.uniform3iv(pp, ip), !0)
      }
      setIntArray4(pp, ip) {
        return !(!pp || ip.length % 4 !== 0) && (this._gl.uniform4iv(pp, ip), !0)
      }
      setUInt(pp, ip) {
        return !!pp && (this._gl.uniform1ui(pp, ip), !0)
      }
      setUInt2(pp, ip, cp) {
        return !!pp && (this._gl.uniform2ui(pp, ip, cp), !0)
      }
      setUInt3(pp, ip, cp, Op) {
        return !!pp && (this._gl.uniform3ui(pp, ip, cp, Op), !0)
      }
      setUInt4(pp, ip, cp, Op, op) {
        return !!pp && (this._gl.uniform4ui(pp, ip, cp, Op, op), !0)
      }
      setUIntArray(pp, ip) {
        return !!pp && (this._gl.uniform1uiv(pp, ip), !0)
      }
      setUIntArray2(pp, ip) {
        return !(!pp || ip.length % 2 !== 0) && (this._gl.uniform2uiv(pp, ip), !0)
      }
      setUIntArray3(pp, ip) {
        return !(!pp || ip.length % 3 !== 0) && (this._gl.uniform3uiv(pp, ip), !0)
      }
      setUIntArray4(pp, ip) {
        return !(!pp || ip.length % 4 !== 0) && (this._gl.uniform4uiv(pp, ip), !0)
      }
      setArray(pp, ip) {
        return !!pp && (!(ip.length < 1) && (this._gl.uniform1fv(pp, ip), !0))
      }
      setArray2(pp, ip) {
        return !(!pp || ip.length % 2 !== 0) && (this._gl.uniform2fv(pp, ip), !0)
      }
      setArray3(pp, ip) {
        return !(!pp || ip.length % 3 !== 0) && (this._gl.uniform3fv(pp, ip), !0)
      }
      setArray4(pp, ip) {
        return !(!pp || ip.length % 4 !== 0) && (this._gl.uniform4fv(pp, ip), !0)
      }
      setMatrices(pp, ip) {
        return !!pp && (this._gl.uniformMatrix4fv(pp, !1, ip), !0)
      }
      setMatrix3x3(pp, ip) {
        return !!pp && (this._gl.uniformMatrix3fv(pp, !1, ip), !0)
      }
      setMatrix2x2(pp, ip) {
        return !!pp && (this._gl.uniformMatrix2fv(pp, !1, ip), !0)
      }
      setFloat(pp, ip) {
        return !!pp && (this._gl.uniform1f(pp, ip), !0)
      }
      setFloat2(pp, ip, cp) {
        return !!pp && (this._gl.uniform2f(pp, ip, cp), !0)
      }
      setFloat3(pp, ip, cp, Op) {
        return !!pp && (this._gl.uniform3f(pp, ip, cp, Op), !0)
      }
      setFloat4(pp, ip, cp, Op, op) {
        return !!pp && (this._gl.uniform4f(pp, ip, cp, Op, op), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const pp = this._colorWrite;
          this._gl.colorMask(pp, pp, pp, pp)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(pp) {
        this.preventCacheWipeBetweenFrames && !pp || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), pp && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(pp, ip) {
        const cp = this._gl;
        let Op = cp.NEAREST,
          op = cp.NEAREST,
          Ip = !1;
        switch (pp) {
          case 11:
            Op = cp.LINEAR, op = ip ? cp.LINEAR_MIPMAP_NEAREST : cp.LINEAR;
            break;
          case 3:
            Op = cp.LINEAR, Ip = !0, op = ip ? cp.LINEAR_MIPMAP_LINEAR : cp.LINEAR;
            break;
          case 8:
            Ip = !0, Op = cp.NEAREST, op = ip ? cp.NEAREST_MIPMAP_LINEAR : cp.NEAREST;
            break;
          case 4:
            Op = cp.NEAREST, op = ip ? cp.NEAREST_MIPMAP_NEAREST : cp.NEAREST;
            break;
          case 5:
            Op = cp.NEAREST, op = ip ? cp.LINEAR_MIPMAP_NEAREST : cp.LINEAR;
            break;
          case 6:
            Ip = !0, Op = cp.NEAREST, op = ip ? cp.LINEAR_MIPMAP_LINEAR : cp.LINEAR;
            break;
          case 7:
            Op = cp.NEAREST, op = cp.LINEAR;
            break;
          case 1:
            Op = cp.NEAREST, op = cp.NEAREST;
            break;
          case 9:
            Op = cp.LINEAR, op = ip ? cp.NEAREST_MIPMAP_NEAREST : cp.NEAREST;
            break;
          case 10:
            Ip = !0, Op = cp.LINEAR, op = ip ? cp.NEAREST_MIPMAP_LINEAR : cp.NEAREST;
            break;
          case 2:
            Op = cp.LINEAR, op = cp.LINEAR;
            break;
          case 12:
            Op = cp.LINEAR, op = cp.NEAREST
        }
        return {
          min: op,
          mag: Op,
          hasMipMaps: Ip
        }
      }
      _createTexture() {
        const pp = this._gl.createTexture();
        if (!pp) throw new Error("Unable to create texture");
        return pp
      }
      _createHardwareTexture() {
        return new yp.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(pp, ip) {
        let cp, Op, op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ip = !1,
          Sp = 0,
          Lp = 3,
          Yp = 5,
          Dp = !1,
          Ap = 1,
          Pp = !1,
          Wp = 0,
          yp = !1;
        void 0 !== ip && "object" === typeof ip ? (cp = !!ip.generateMipMaps, Ip = !!ip.createMipMaps, Sp = void 0 === ip.type ? 0 : ip.type, Lp = void 0 === ip.samplingMode ? 3 : ip.samplingMode, Yp = void 0 === ip.format ? 5 : ip.format, Dp = void 0 !== ip.useSRGBBuffer && ip.useSRGBBuffer, Ap = ip.samples ?? 1, Op = ip.label, Pp = !!ip.createMSAATexture, Wp = ip.comparisonFunction || 0, yp = !!ip.isCube) : cp = !!ip, Dp && (Dp = this._caps.supportSRGBBuffers && (this.eU > 1 || this.isWebGPU)), (1 !== Sp || this._caps.textureFloatLinearFiltering) && (2 !== Sp || this._caps.textureHalfFloatLinearFiltering) || (Lp = 1), 1 !== Sp || this._caps.textureFloat || (Sp = 0, xp.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const wp = (0, tp.e)(Yp),
          vp = (0, tp.c)(Yp),
          Hp = this._gl,
          dp = new Up.b(this, op),
          ep = pp.width || pp,
          jp = pp.height || pp,
          kp = pp.depth || 0,
          mp = pp.layers || 0,
          Rp = this._getSamplingParameters(Lp, (cp || Ip) && !wp),
          qp = 0 !== mp ? Hp.TEXTURE_2D_ARRAY : 0 !== kp ? Hp.TEXTURE_3D : yp ? Hp.TEXTURE_CUBE_MAP : Hp.TEXTURE_2D,
          Mp = wp ? this._getInternalFormatFromDepthTextureFormat(Yp, !0, vp) : this._getRGBABufferInternalSizedFormat(Sp, Yp, Dp),
          Cp = wp ? vp ? Hp.DEPTH_STENCIL : Hp.DEPTH_COMPONENT : this._getInternalFormat(Yp),
          Ep = wp ? this._getWebGLTextureTypeFromDepthTextureFormat(Yp) : this._getWebGLTextureType(Sp);
        if (this._bindTextureDirectly(qp, dp), 0 !== mp) dp.is2DArray = !0, Hp.texImage3D(qp, 0, Mp, ep, jp, mp, 0, Cp, Ep, null);
        else if (0 !== kp) dp.is3D = !0, Hp.texImage3D(qp, 0, Mp, ep, jp, kp, 0, Cp, Ep, null);
        else if (yp) {
          dp.isCube = !0;
          for (let pp = 0; pp < 6; pp++) Hp.texImage2D(Hp.TEXTURE_CUBE_MAP_POSITIVE_X + pp, 0, Mp, ep, jp, 0, Cp, Ep, null)
        } else Hp.texImage2D(qp, 0, Mp, ep, jp, 0, Cp, Ep, null);
        if (Hp.texParameteri(qp, Hp.TEXTURE_MAG_FILTER, Rp.mag), Hp.texParameteri(qp, Hp.TEXTURE_MIN_FILTER, Rp.min), Hp.texParameteri(qp, Hp.TEXTURE_WRAP_S, Hp.CLAMP_TO_EDGE), Hp.texParameteri(qp, Hp.TEXTURE_WRAP_T, Hp.CLAMP_TO_EDGE), wp && this.eU > 1 && (0 === Wp ? (Hp.texParameteri(qp, Hp.TEXTURE_COMPARE_FUNC, 515), Hp.texParameteri(qp, Hp.TEXTURE_COMPARE_MODE, Hp.NONE)) : (Hp.texParameteri(qp, Hp.TEXTURE_COMPARE_FUNC, Wp), Hp.texParameteri(qp, Hp.TEXTURE_COMPARE_MODE, Hp.COMPARE_REF_TO_TEXTURE))), (cp || Ip) && this._gl.generateMipmap(qp), this._bindTextureDirectly(qp, null), dp._useSRGBBuffer = Dp, dp.baseWidth = ep, dp.baseHeight = jp, dp.width = ep, dp.height = jp, dp.depth = mp || kp, dp.isReady = !0, dp.samples = Ap, dp.generateMipMaps = cp, dp.samplingMode = Lp, dp.type = Sp, dp.format = Yp, dp.label = Op, dp.comparisonFunction = Wp, this._internalTexturesCache.push(dp), Pp) {
          let pp;
          if (pp = (0, tp.e)(dp.format) ? this._setupFramebufferDepthAttachments((0, tp.c)(dp.format), 19 !== dp.format, dp.width, dp.height, Ap, dp.format, !0) : this._createRenderBuffer(dp.width, dp.height, Ap, -1, this._getRGBABufferInternalSizedFormat(dp.type, dp.format, dp._useSRGBBuffer), -1), !pp) throw new Error("Unable to create render buffer");
          dp._autoMSAAManagement = !0;
          let ip = dp._hardwareTexture;
          ip || (ip = dp._hardwareTexture = this._createHardwareTexture()), ip.addMSAARenderBuffer(pp)
        }
        return dp
      }
      _getUseSRGBBuffer(pp, ip) {
        return pp && this._caps.supportSRGBBuffers && (this.eU > 1 || ip)
      }
      createTexture(pp, ip, cp, Op) {
        var op = this;
        let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Lp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ap = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Pp = arguments.length > 11 ? arguments[11] : void 0,
          Wp = arguments.length > 12 ? arguments[12] : void 0,
          yp = arguments.length > 13 ? arguments[13] : void 0,
          wp = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(pp, ip, cp, Op, Ip, Sp, xp, (function() {
          for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
          return op._prepareWebGLTexture(...ip, Dp)
        }), ((pp, ip, cp, op, Ip, Sp) => {
          const xp = this._gl,
            Lp = cp.width === pp && cp.height === ip;
          Ip._creationFlags = yp ?? 0;
          const Yp = this._getTexImageParametersForCreateTexture(Ip.format, Ip._useSRGBBuffer);
          if (Lp) return xp.texImage2D(xp.TEXTURE_2D, 0, Yp.internalFormat, Yp.format, Yp.type, cp), !1;
          const Dp = this._caps.maxTextureSize;
          if (cp.width > Dp || cp.height > Dp || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = pp, this._workingCanvas.height = ip, this._workingContext.drawImage(cp, 0, 0, cp.width, cp.height, 0, 0, pp, ip), xp.texImage2D(xp.TEXTURE_2D, 0, Yp.internalFormat, Yp.format, Yp.type, this._workingCanvas), Ip.width = pp, Ip.height = ip, !1);
          {
            const pp = new Up.b(this, 2);
            this._bindTextureDirectly(xp.TEXTURE_2D, pp, !0), xp.texImage2D(xp.TEXTURE_2D, 0, Yp.internalFormat, Yp.format, Yp.type, cp), this._rescaleTexture(pp, Ip, Op, Yp.format, (() => {
              this._releaseTexture(pp), this._bindTextureDirectly(xp.TEXTURE_2D, Ip, !0), Sp()
            }))
          }
          return !0
        }), Lp, Yp, Dp, Ap, Pp, Wp, wp)
      }
      _getTexImageParametersForCreateTexture(pp, ip) {
        let cp, Op;
        return 1 === this.eU ? (cp = this._getInternalFormat(pp, ip), Op = cp) : (cp = this._getInternalFormat(pp, !1), Op = this._getRGBABufferInternalSizedFormat(0, pp, ip)), {
          internalFormat: Op,
          format: cp,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(pp, ip, cp, Op, op) {}
      _unpackFlipY(pp) {
        this._unpackFlipYCached !== pp && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, pp ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = pp))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(pp) {
        return pp.isCube ? this._gl.TEXTURE_CUBE_MAP : pp.is3D ? this._gl.TEXTURE_3D : pp.is2DArray || pp.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = this._getTextureTarget(ip),
          op = this._getSamplingParameters(pp, ip.useMipMaps || cp);
        this._setTextureParameterInteger(Op, this._gl.TEXTURE_MAG_FILTER, op.mag, ip), this._setTextureParameterInteger(Op, this._gl.TEXTURE_MIN_FILTER, op.min), cp && op.hasMipMaps && (ip.generateMipMaps = !0, this._gl.generateMipmap(Op)), this._bindTextureDirectly(Op, null), ip.samplingMode = pp
      }
      updateTextureDimensions(pp, ip, cp) {}
      updateTextureWrappingMode(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const op = this._getTextureTarget(pp);
        null !== ip && (this._setTextureParameterInteger(op, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ip), pp), pp._cachedWrapU = ip), null !== cp && (this._setTextureParameterInteger(op, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(cp), pp), pp._cachedWrapV = cp), (pp.is2DArray || pp.is3D) && null !== Op && (this._setTextureParameterInteger(op, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Op), pp), pp._cachedWrapR = Op), this._bindTextureDirectly(op, null)
      }
      _uploadCompressedDataToTextureDirectly(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const xp = this._gl;
        let Lp = xp.TEXTURE_2D;
        if (pp.isCube && (Lp = xp.TEXTURE_CUBE_MAP_POSITIVE_X + Ip), pp._useSRGBBuffer) switch (ip) {
          case 37492:
          case 36196:
            this._caps.etc2 ? ip = xp.COMPRESSED_SRGB8_ETC2 : pp._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? ip = xp.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : pp._useSRGBBuffer = !1;
            break;
          case 36492:
            ip = xp.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            ip = xp.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? ip = xp.COMPRESSED_SRGB_S3TC_DXT1_EXT : pp._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? ip = xp.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : pp._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? ip = xp.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : pp._useSRGBBuffer = !1;
            break;
          default:
            pp._useSRGBBuffer = !1
        }
        if (pp.generateMipMaps) {
          const Ip = pp._hardwareTexture;
          Ip.memoryAllocated || (xp.texStorage2D(pp.isCube ? xp.TEXTURE_CUBE_MAP : xp.TEXTURE_2D, Math.floor(Math.log2(Math.max(cp, Op))) + 1, ip, pp.width, pp.height), Ip.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Lp, Sp, 0, 0, cp, Op, ip, op)
        } else this._gl.compressedTexImage2D(Lp, Sp, ip, cp, Op, 0, op)
      }
      _uploadDataToTextureDirectly(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Sp = this._gl,
          xp = this._getWebGLTextureType(pp.type),
          Lp = this._getInternalFormat(pp.format),
          Yp = void 0 === op ? this._getRGBABufferInternalSizedFormat(pp.type, pp.format, pp._useSRGBBuffer) : this._getInternalFormat(op, pp._useSRGBBuffer);
        this._unpackFlipY(pp.invertY);
        let Dp = Sp.TEXTURE_2D;
        pp.isCube && (Dp = Sp.TEXTURE_CUBE_MAP_POSITIVE_X + cp);
        const Ap = Math.round(Math.log(pp.width) * Math.LOG2E),
          Pp = Math.round(Math.log(pp.height) * Math.LOG2E),
          Wp = Ip ? pp.width : Math.pow(2, Math.max(Ap - Op, 0)),
          yp = Ip ? pp.height : Math.pow(2, Math.max(Pp - Op, 0));
        Sp.texImage2D(Dp, Op, Yp, Wp, yp, 0, Lp, xp, ip)
      }
      updateTextureData(pp, ip, cp, Op, op, Ip) {
        let Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Yp = this._gl,
          Dp = this._getWebGLTextureType(pp.type),
          Ap = this._getInternalFormat(pp.format);
        this._unpackFlipY(pp.invertY);
        let Pp = Yp.TEXTURE_2D,
          Wp = Yp.TEXTURE_2D;
        pp.isCube && (Wp = Yp.TEXTURE_CUBE_MAP_POSITIVE_X + Sp, Pp = Yp.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Pp, pp, !0), Yp.texSubImage2D(Wp, xp, cp, Op, op, Ip, Ap, Dp, ip), Lp && this._gl.generateMipmap(Wp), this._bindTextureDirectly(Pp, null)
      }
      _uploadArrayBufferViewToTexture(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const op = this._gl,
          Ip = pp.isCube ? op.TEXTURE_CUBE_MAP : op.TEXTURE_2D;
        this._bindTextureDirectly(Ip, pp, !0), this._uploadDataToTextureDirectly(pp, ip, cp, Op), this._bindTextureDirectly(Ip, null, !0)
      }
      _prepareWebGLTextureContinuation(pp, ip, cp, Op, op) {
        const Ip = this._gl;
        if (!Ip) return;
        const Sp = this._getSamplingParameters(op, !cp);
        Ip.texParameteri(Ip.TEXTURE_2D, Ip.TEXTURE_MAG_FILTER, Sp.mag), Ip.texParameteri(Ip.TEXTURE_2D, Ip.TEXTURE_MIN_FILTER, Sp.min), cp || Op || Ip.generateMipmap(Ip.TEXTURE_2D), this._bindTextureDirectly(Ip.TEXTURE_2D, null), ip && ip.removePendingData(pp), pp.onLoadedObservable.notifyObservers(pp), pp.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        const Dp = this.getCaps().maxTextureSize,
          Ap = Math.min(Dp, this.needPOTTextures ? (0, Wp.e)(Op.width, Dp) : Op.width),
          Pp = Math.min(Dp, this.needPOTTextures ? (0, Wp.e)(Op.height, Dp) : Op.height),
          yp = this._gl;
        yp && (pp._hardwareTexture ? (this._bindTextureDirectly(yp.TEXTURE_2D, pp, !0), this._unpackFlipY(void 0 === op || !!op), pp.baseWidth = Op.width, pp.baseHeight = Op.height, pp.width = Ap, pp.height = Pp, pp.isReady = !0, pp.type = -1 !== pp.type ? pp.type : 0, pp.format = -1 !== pp.format ? pp.format : Yp ?? (".jpg" !== ip || pp._useSRGBBuffer ? 5 : 4), xp(Ap, Pp, Op, ip, pp, (() => {
          this._prepareWebGLTextureContinuation(pp, cp, Ip, Sp, Lp)
        })) || this._prepareWebGLTextureContinuation(pp, cp, Ip, Sp, Lp)) : cp && cp.removePendingData(pp))
      }
      _getInternalFormatFromDepthTextureFormat(pp, ip, cp) {
        const Op = this._gl;
        if (!ip) return Op.STENCIL_INDEX8;
        let op = cp ? Op.DEPTH_STENCIL : Op.DEPTH_COMPONENT;
        return this.eU > 1 ? 15 === pp ? op = Op.DEPTH_COMPONENT16 : 16 === pp ? op = Op.DEPTH_COMPONENT24 : 17 === pp || 13 === pp ? op = cp ? Op.DEPTH24_STENCIL8 : Op.DEPTH_COMPONENT24 : 14 === pp ? op = Op.DEPTH_COMPONENT32F : 18 === pp && (op = cp ? Op.DEPTH32F_STENCIL8 : Op.DEPTH_COMPONENT32F) : op = Op.DEPTH_COMPONENT16, op
      }
      _getWebGLTextureTypeFromDepthTextureFormat(pp) {
        const ip = this._gl;
        let cp = ip.UNSIGNED_INT;
        return 15 === pp ? cp = ip.UNSIGNED_SHORT : 17 === pp || 13 === pp ? cp = ip.UNSIGNED_INT_24_8 : 14 === pp ? cp = ip.FLOAT : 18 === pp ? cp = ip.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === pp && (cp = ip.UNSIGNED_BYTE), cp
      }
      _setupFramebufferDepthAttachments(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Ip = arguments.length > 5 ? arguments[5] : void 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const xp = this._gl;
        Ip = Ip ?? (pp ? 13 : 14);
        const Lp = this._getInternalFormatFromDepthTextureFormat(Ip, ip, pp);
        return pp && ip ? this._createRenderBuffer(cp, Op, op, xp.DEPTH_STENCIL, Lp, Sp ? -1 : xp.DEPTH_STENCIL_ATTACHMENT) : ip ? this._createRenderBuffer(cp, Op, op, Lp, Lp, Sp ? -1 : xp.DEPTH_ATTACHMENT) : pp ? this._createRenderBuffer(cp, Op, op, Lp, Lp, Sp ? -1 : xp.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(pp, ip, cp, Op, op, Ip) {
        let Sp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const xp = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(xp, pp, ip, cp, Op, op, Ip, Sp)
      }
      _updateRenderBuffer(pp, ip, cp, Op, op, Ip, Sp) {
        let xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Lp = this._gl;
        return Lp.bindRenderbuffer(Lp.RENDERBUFFER, pp), Op > 1 && Lp.renderbufferStorageMultisample ? Lp.renderbufferStorageMultisample(Lp.RENDERBUFFER, Op, Ip, ip, cp) : Lp.renderbufferStorage(Lp.RENDERBUFFER, op, ip, cp), -1 !== Sp && Lp.framebufferRenderbuffer(Lp.FRAMEBUFFER, Sp, Lp.RENDERBUFFER, pp), xp && Lp.bindRenderbuffer(Lp.RENDERBUFFER, null), pp
      }
      _releaseTexture(pp) {
        this._deleteTexture(pp._hardwareTexture), this.unbindAllTextures();
        const ip = this._internalTexturesCache.indexOf(pp); - 1 !== ip && this._internalTexturesCache.splice(ip, 1), pp._lodTextureHigh && pp._lodTextureHigh.dispose(), pp._lodTextureMid && pp._lodTextureMid.dispose(), pp._lodTextureLow && pp._lodTextureLow.dispose(), pp._irradianceTexture && pp._irradianceTexture.dispose()
      }
      _deleteTexture(pp) {
        pp?.release()
      }
      _setProgram(pp) {
        this._currentProgram !== pp && ((0, op.s)(pp, this._gl), this._currentProgram = pp)
      }
      bindSamplers(pp) {
        const ip = pp.getPipelineContext();
        this._setProgram(ip.program);
        const cp = pp.getSamplers();
        for (let Op = 0; Op < cp.length; Op++) {
          const ip = pp.getUniform(cp[Op]);
          ip && (this._boundUniforms[Op] = ip)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          op = !1;
        const Ip = ip && ip._associatedChannel > -1;
        cp && Ip && (this._activeChannel = ip._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== ip || Op) {
          if (this._activateCurrentTexture(), ip && ip.isMultiview) throw xp.e.Error(["_bindTextureDirectly called with a multiview texture!", pp, ip]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(pp, ip?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = ip, ip && (ip._associatedChannel = this._activeChannel)
        } else cp && (op = !0, this._activateCurrentTexture());
        return Ip && !cp && this._bindSamplerUniformToChannel(ip._associatedChannel, this._activeChannel), op
      }
      _bindTexture(pp, ip, cp) {
        if (void 0 === pp) return;
        ip && (ip._associatedChannel = pp), this._activeChannel = pp;
        const Op = ip ? this._getTextureTarget(ip) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Op, ip)
      }
      unbindAllTextures() {
        for (let pp = 0; pp < this._maxSimultaneousTextures; pp++) this._activeChannel = pp, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.eU > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(pp, ip, cp, Op) {
        void 0 !== pp && (ip && (this._boundUniforms[pp] = ip), this._setTexture(pp, cp))
      }
      _bindSamplerUniformToChannel(pp, ip) {
        const cp = this._boundUniforms[pp];
        cp && cp._currentState !== ip && (this._gl.uniform1i(cp, ip), cp._currentState = ip)
      }
      _getTextureWrapMode(pp) {
        switch (pp) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(pp, ip) {
        let cp, Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ip) return null != this._boundTexturesCache[pp] && (this._activeChannel = pp, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.eU > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (ip.video) {
          this._activeChannel = pp;
          const cp = ip.getInternalTexture();
          cp && (cp._associatedChannel = pp), ip.update()
        } else if (4 === ip.delayLoadState) return ip.delayLoad(), !1;
        cp = op ? ip.depthStencilTexture : ip.isReady() ? ip.getInternalTexture() : ip.isCube ? this.emptyCubeTexture : ip.is3D ? this.emptyTexture3D : ip.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Op && cp && (cp._associatedChannel = pp);
        let Ip = !0;
        this._boundTexturesCache[pp] === cp && (Op || this._bindSamplerUniformToChannel(cp._associatedChannel, pp), Ip = !1), this._activeChannel = pp;
        const Sp = this._getTextureTarget(cp);
        if (Ip && this._bindTextureDirectly(Sp, cp, Op), cp && !cp.isMultiview) {
          if (cp.isCube && cp._cachedCoordinatesMode !== ip.coordinatesMode) {
            cp._cachedCoordinatesMode = ip.coordinatesMode;
            const pp = 3 !== ip.coordinatesMode && 5 !== ip.coordinatesMode ? 1 : 0;
            ip.wrapU = pp, ip.wrapV = pp
          }
          cp._cachedWrapU !== ip.wrapU && (cp._cachedWrapU = ip.wrapU, this._setTextureParameterInteger(Sp, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ip.wrapU), cp)), cp._cachedWrapV !== ip.wrapV && (cp._cachedWrapV = ip.wrapV, this._setTextureParameterInteger(Sp, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ip.wrapV), cp)), cp.is3D && cp._cachedWrapR !== ip.wrapR && (cp._cachedWrapR = ip.wrapR, this._setTextureParameterInteger(Sp, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ip.wrapR), cp)), this._setAnisotropicLevel(Sp, cp, ip.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(pp, ip, cp, Op) {
        if (void 0 !== pp && ip) {
          this._textureUnits && this._textureUnits.length === cp.length || (this._textureUnits = new Int32Array(cp.length));
          for (let ip = 0; ip < cp.length; ip++) {
            const Op = cp[ip].getInternalTexture();
            Op ? (this._textureUnits[ip] = pp + ip, Op._associatedChannel = pp + ip) : this._textureUnits[ip] = -1
          }
          this._gl.uniform1iv(ip, this._textureUnits);
          for (let pp = 0; pp < cp.length; pp++) this._setTexture(this._textureUnits[pp], cp[pp], !0)
        }
      }
      _setAnisotropicLevel(pp, ip, cp) {
        const Op = this._caps.textureAnisotropicFilterExtension;
        11 !== ip.samplingMode && 3 !== ip.samplingMode && 2 !== ip.samplingMode && (cp = 1), Op && ip._cachedAnisotropicFilteringLevel !== cp && (this._setTextureParameterFloat(pp, Op.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(cp, this._caps.maxAnisotropy), ip), ip._cachedAnisotropicFilteringLevel = cp)
      }
      _setTextureParameterFloat(pp, ip, cp, Op) {
        this._bindTextureDirectly(pp, Op, !0, !0), this._gl.texParameterf(pp, ip, cp)
      }
      _setTextureParameterInteger(pp, ip, cp, Op) {
        Op && this._bindTextureDirectly(pp, Op, !0, !0), this._gl.texParameteri(pp, ip, cp)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let pp = 0; pp < this._caps.maxVertexAttribs; pp++) this.disableAttributeByIndex(pp)
        } else
          for (let pp = 0, ip = this._vertexAttribArraysEnabled.length; pp < ip; pp++) pp >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[pp] || this.disableAttributeByIndex(pp)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Lp.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, op.F)(this._gl)
      }
      attachContextLostEvent(pp) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", pp, !1)
      }
      attachContextRestoredEvent(pp) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", pp, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(pp) {
        const ip = this._gl;
        for (; ip.getError() !== ip.NO_ERROR;);
        let cp = !0;
        const Op = ip.createTexture();
        ip.bindTexture(ip.TEXTURE_2D, Op), ip.texImage2D(ip.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(pp), 1, 1, 0, ip.RGBA, this._getWebGLTextureType(pp), null), ip.texParameteri(ip.TEXTURE_2D, ip.TEXTURE_MIN_FILTER, ip.NEAREST), ip.texParameteri(ip.TEXTURE_2D, ip.TEXTURE_MAG_FILTER, ip.NEAREST);
        const op = ip.createFramebuffer();
        ip.bindFramebuffer(ip.FRAMEBUFFER, op), ip.framebufferTexture2D(ip.FRAMEBUFFER, ip.COLOR_ATTACHMENT0, ip.TEXTURE_2D, Op, 0);
        const Ip = ip.checkFramebufferStatus(ip.FRAMEBUFFER);
        if (cp = cp && Ip === ip.FRAMEBUFFER_COMPLETE, cp = cp && ip.getError() === ip.NO_ERROR, cp && (ip.clear(ip.COLOR_BUFFER_BIT), cp = cp && ip.getError() === ip.NO_ERROR), cp) {
          ip.bindFramebuffer(ip.FRAMEBUFFER, null);
          const pp = ip.RGBA,
            Op = ip.UNSIGNED_BYTE,
            op = new Uint8Array(4);
          ip.readPixels(0, 0, 1, 1, pp, Op, op), cp = cp && ip.getError() === ip.NO_ERROR
        }
        for (ip.deleteTexture(Op), ip.deleteFramebuffer(op), ip.bindFramebuffer(ip.FRAMEBUFFER, null); !cp && ip.getError() !== ip.NO_ERROR;);
        return cp
      }
      _getWebGLTextureType(pp) {
        if (1 === this._webGLVersion) {
          switch (pp) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (pp) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = ip ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (pp) {
          case 0:
            cp = this._gl.ALPHA;
            break;
          case 1:
            cp = this._gl.LUMINANCE;
            break;
          case 2:
            cp = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            cp = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            cp = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            cp = ip ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            cp = ip ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (pp) {
          case 8:
            cp = this._gl.RED_INTEGER;
            break;
          case 9:
            cp = this._gl.RG_INTEGER;
            break;
          case 10:
            cp = this._gl.RGB_INTEGER;
            break;
          case 11:
            cp = this._gl.RGBA_INTEGER
        }
        return cp
      }
      _getRGBABufferInternalSizedFormat(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== ip) switch (ip) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return cp ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (pp) {
          case 3:
            switch (ip) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (ip) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return cp ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return cp ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (ip) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (ip) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (ip) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (ip) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (ip) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (ip) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (ip) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return cp ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(pp, ip, cp, Op) {
        let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Lp = op ? 4 : 3,
          Yp = op ? this._gl.RGBA : this._gl.RGB,
          Dp = cp * Op * Lp;
        if (Sp) {
          if (Sp.length < Dp) return xp.e.Error(`Data buffer is too small to store the read pixels (${Sp.length} should be more than ${Dp})`), Promise.resolve(Sp)
        } else Sp = new Uint8Array(Dp);
        return Ip && this.flushFramebuffer(), this._gl.readPixels(pp, ip, cp, Op, Yp, this._gl.UNSIGNED_BYTE, Sp), Promise.resolve(Sp)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const pp = Ip.b._CreateCanvas(1, 1),
            ip = pp.getContext("webgl") || pp.getContext("experimental-webgl");
          this._IsSupported = null != ip && !!globalThis.WebGLRenderingContext
        } catch (pp) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const pp = Ip.b._CreateCanvas(1, 1),
            ip = pp.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || pp.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !ip
        } catch (pp) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    ep._TempClearColorUint32 = new Uint32Array(4), ep._TempClearColorInt32 = new Int32Array(4), ep._TempClearColorFloat32 = new Float32Array(4), ep.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], ep._ConcatenateShader = wp.g, ep._IsSupported = null, ep._HasMajorPerformanceCaveat = null
  },
  40388: (pp, ip, cp) => {
    var Op;
    cp.d(ip, {
        c: () => op
      }),
      function(pp) {
        pp[pp.PointerMove = 0] = "PointerMove", pp[pp.PointerDown = 1] = "PointerDown", pp[pp.PointerUp = 2] = "PointerUp"
      }(Op || (Op = {}));
    class op {}
    op.DOM_DELTA_PIXEL = 0, op.DOM_DELTA_LINE = 1, op.DOM_DELTA_PAGE = 2
  },
  40380: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      e: () => Ip,
      f: () => op
    });
    class Op {}
    Op.KEYDOWN = 1, Op.KEYUP = 2;
    class op {
      constructor(pp, ip) {
        this.type = pp, this.event = ip
      }
    }
    class Ip extends op {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(pp) {
        this.skipOnKeyboardObservable = pp
      }
      constructor(pp, ip) {
        super(pp, ip), this.type = pp, this.event = ip, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40372: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      h: () => Sp,
      i: () => xp
    });
    var Op = cp(37320);
    class op {}
    op.POINTERDOWN = 1, op.POINTERUP = 2, op.POINTERMOVE = 4, op.POINTERWHEEL = 8, op.POINTERPICK = 16, op.POINTERTAP = 32, op.POINTERDOUBLETAP = 64;
    class Ip {
      constructor(pp, ip) {
        this.type = pp, this.event = ip
      }
    }
    class Sp extends Ip {
      constructor(pp, ip, cp, op) {
        super(pp, ip), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Op.l(cp, op)
      }
    }
    class xp extends Ip {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(pp, ip), this._pickInfo = cp, this._inputManager = Op
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40398: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      static CompareLightsPriority(pp, ip) {
        return pp.shadowEnabled !== ip.shadowEnabled ? (ip.shadowEnabled ? 1 : 0) - (pp.shadowEnabled ? 1 : 0) : ip.renderPriority - pp.renderPriority
      }
    }
    Op.FALLOFF_DEFAULT = 0, Op.FALLOFF_PHYSICAL = 1, Op.FALLOFF_GLTF = 2, Op.FALLOFF_STANDARD = 3, Op.LIGHTMAP_DEFAULT = 0, Op.LIGHTMAP_SPECULAR = 1, Op.LIGHTMAP_SHADOWSONLY = 2, Op.INTENSITYMODE_AUTOMATIC = 0, Op.INTENSITYMODE_LUMINOUSPOWER = 1, Op.INTENSITYMODE_LUMINOUSINTENSITY = 2, Op.INTENSITYMODE_ILLUMINANCE = 3, Op.INTENSITYMODE_LUMINANCE = 4, Op.LIGHTTYPEID_POINTLIGHT = 0, Op.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Op.LIGHTTYPEID_SPOTLIGHT = 2, Op.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Op.LIGHTTYPEID_RECT_AREALIGHT = 4, Op.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40033: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op, op = cp(37349),
      Ip = cp(40042);
    ! function(pp) {
      pp[pp.Unknown = 0] = "Unknown", pp[pp.Url = 1] = "Url", pp[pp.Temp = 2] = "Temp", pp[pp.Raw = 3] = "Raw", pp[pp.Dynamic = 4] = "Dynamic", pp[pp.RenderTarget = 5] = "RenderTarget", pp[pp.MultiRenderTarget = 6] = "MultiRenderTarget", pp[pp.Cube = 7] = "Cube", pp[pp.CubeRaw = 8] = "CubeRaw", pp[pp.CubePrefiltered = 9] = "CubePrefiltered", pp[pp.Raw3D = 10] = "Raw3D", pp[pp.Raw2DArray = 11] = "Raw2DArray", pp[pp.DepthStencil = 12] = "DepthStencil", pp[pp.CubeRawRGBD = 13] = "CubeRawRGBD", pp[pp.Depth = 14] = "Depth", pp[pp.External = 15] = "External"
    }(Op || (Op = {}));
    class Sp extends Ip.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(pp) {
        this._useMipMaps = pp
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(pp) {
        this._uniqueId = pp
      }
      gy() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new op.d, this.onErrorObservable = new op.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = pp, this._source = ip, this._uniqueId = Sp._Counter++, cp || (this._hardwareTexture = pp._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, pp, ip, cp), this.width = pp, this.height = ip, this.depth = cp, this.baseWidth = pp, this.baseHeight = ip, this.baseDepth = cp, this._size = pp * ip * cp
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const pp = this.onRebuildCallback(this),
            ip = ip => {
              ip._swapAndDie(this, !1), this.isReady = pp.isReady
            };
          return void(pp.isAsync ? pp.proxy.then(ip) : ip(pp.proxy))
        }
        let pp;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(pp = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (pp => {
              pp._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (pp = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), pp._swapAndDie(this, !1), this._bufferViewArray)
              for (let pp = 0; pp < this._bufferViewArray.length; pp++) {
                const ip = this._bufferViewArray[pp];
                ip && this._engine.updateRawTexture(this, ip, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, pp)
              }
            this.isReady = !0;
            break;
          case 10:
            pp = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), pp._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (pp = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), pp._swapAndDie(this, !1), this._bufferViewArray)
              for (let pp = 0; pp < this._bufferViewArray.length; pp++) {
                const ip = this._bufferViewArray[pp];
                ip && this._engine.updateRawTexture2DArray(this, ip, this.format, this.invertY, this._compression, this.type, pp)
              }
            this.isReady = !0;
            break;
          case 4:
            pp = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), pp._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(pp = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              pp._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            pp = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), pp._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return pp = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (pp => {
              pp && pp._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(pp._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(pp._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), pp._hardwareTexture = this._hardwareTexture, pp._setUniqueId(Sp._Counter++), ip && (pp._isRGBD = this._isRGBD), this._lodTextureHigh && (pp._lodTextureHigh && pp._lodTextureHigh.dispose(), pp._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (pp._lodTextureMid && pp._lodTextureMid.dispose(), pp._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (pp._lodTextureLow && pp._lodTextureLow.dispose(), pp._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (pp._irradianceTexture && pp._irradianceTexture.dispose(), pp._irradianceTexture = this._irradianceTexture);
        const cp = this._engine.getLoadedTexturesCache();
        let Op = cp.indexOf(this); - 1 !== Op && cp.splice(Op, 1), Op = cp.indexOf(pp), -1 === Op && cp.push(pp)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Sp._Counter = 0
  },
  40151: (pp, ip, cp) => {
    function Op(pp) {
      return 13 === pp || 14 === pp || 15 === pp || 16 === pp || 17 === pp || 18 === pp || 19 === pp
    }

    function op(pp) {
      return 8 === pp || 9 === pp || 10 === pp || 11 === pp
    }

    function Ip(pp) {
      return 0 === pp || 5 === pp || 7 === pp || 11 === pp
    }

    function Sp(pp) {
      return 13 === pp || 17 === pp || 18 === pp || 19 === pp
    }
    cp.d(ip, {
      c: () => Sp,
      e: () => Op,
      i: () => op,
      k: () => Ip
    })
  },
  40042: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(pp) {
        this._cachedWrapU = pp
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(pp) {
        this._cachedWrapV = pp
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(pp) {
        this._cachedWrapR = pp
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(pp) {
        this._cachedAnisotropicFilteringLevel = pp
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(pp) {
        this._comparisonFunction = pp
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(pp) {
        this._useMipMaps = pp
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = pp, this._cachedWrapV = ip, this._cachedWrapR = cp, this._cachedAnisotropicFilteringLevel = Op, this.samplingMode = op, this._comparisonFunction = Ip, this
      }
      compareSampler(pp) {
        return this._cachedWrapU === pp._cachedWrapU && this._cachedWrapV === pp._cachedWrapV && this._cachedWrapR === pp._cachedWrapR && this._cachedAnisotropicFilteringLevel === pp._cachedAnisotropicFilteringLevel && this.samplingMode === pp.samplingMode && this._comparisonFunction === pp._comparisonFunction && this._useMipMaps === pp._useMipMaps
      }
    }
  },
  40322: (pp, ip, cp) => {
    function Op(pp) {
      pp.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  40127: (pp, ip, cp) => {
    function Op(pp) {
      return void 0 === pp.getPipelineContext
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  40509: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(40107);
    class op {
      static GetEffect(pp) {
        return void 0 === pp.getPipelineContext ? pp.effect : pp
      }
      constructor(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = pp.createDrawContext(), ip && (this.materialContext = pp.createMaterialContext())
      }
      setEffect(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        cp || this.effect === pp || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = pp, void 0 !== ip && (this.defines = ip), cp && this.drawContext?.reset()
      }
      dispose() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const ip = this.effect;
          pp ? ip.dispose() : Op.b.SetImmediate((() => {
            ip.gy().onEndFrameObservable.addOnce((() => {
              ip.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40068: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ap,
      i: () => Wp,
      l: () => Yp,
      o: () => Dp
    });
    var Op = cp(40071),
      op = cp(40079),
      Ip = cp(40062),
      Sp = cp(38905),
      xp = cp(40103),
      Lp = cp(40088);

    function Yp(pp, ip) {
      return (0, op.J)(ip).cachedPipelines[pp]
    }

    function Dp(pp) {
      const ip = pp._name,
        cp = pp.context;
      if (ip && cp) {
        const pp = (0, op.J)(cp),
          Op = pp.cachedPipelines[ip];
        Op?.dispose(), delete pp.cachedPipelines[ip]
      }
    }

    function Ap(pp, ip, cp, op, Ip, Sp, Lp) {
      let Yp, Dp;
      const Ap = (0, Op.j)() ? Sp?.getHostDocument() : null;
      Yp = "string" === typeof ip ? ip : "string" === typeof ip.vertexSource ? "source:" + ip.vertexSource : "string" === typeof ip.vertexElement ? Ap?.getElementById(ip.vertexElement) || ip.vertexElement : ip.vertex || ip, Dp = "string" === typeof ip ? ip : "string" === typeof ip.fragmentSource ? "source:" + ip.fragmentSource : "string" === typeof ip.fragmentElement ? Ap?.getElementById(ip.fragmentElement) || ip.fragmentElement : ip.fragment || ip;
      const Wp = [void 0, void 0],
        yp = () => {
          if (Wp[0] && Wp[1]) {
            const [Op, Yp] = Wp;
            (0, xp.c)(pp), (0, xp.j)(Op, pp, ((Op, Dp) => {
              Lp && (Lp._vertexSourceCodeBeforeMigration = Dp), cp && (Op = cp("vertex", Op)), pp.isFragment = !0, (0, xp.j)(Yp, pp, ((Sp, Yp) => {
                Lp && (Lp._fragmentSourceCodeBeforeMigration = Yp), cp && (Sp = cp("fragment", Sp));
                const Dp = (0, xp.b)(Op, Sp, pp);
                pp = null;
                const Ap = function(pp, ip, cp, Op) {
                  if (cp) {
                    return {
                      vertexSourceCode: (1 === Op ? "//" : "") + "#define SHADER_NAME vertex:" + (cp.vertexElement || cp.vertex || cp.spectorName || cp) + "\n" + pp,
                      fragmentSourceCode: (1 === Op ? "//" : "") + "#define SHADER_NAME fragment:" + (cp.fragmentElement || cp.fragment || cp.spectorName || cp) + "\n" + ip
                    }
                  }
                  return {
                    vertexSourceCode: pp,
                    fragmentSourceCode: ip
                  }
                }(Dp.vertexCode, Dp.fragmentCode, ip, Ip);
                op?.(Ap.vertexSourceCode, Ap.fragmentSourceCode)
              }), Sp)
            }), Sp)
          }
        };
      Pp(Yp, "Vertex", "", (pp => {
        Lp && (Lp._rawVertexSourceCode = pp), Wp[0] = pp, yp()
      }), Ip), Pp(Dp, "Fragment", "Pixel", (pp => {
        Lp && (Lp._rawFragmentSourceCode = pp), Wp[1] = pp, yp()
      }), Ip)
    }

    function Pp(pp, ip, cp, op, Sp, xp) {
      if ("undefined" !== typeof HTMLElement && pp instanceof HTMLElement) {
        return void op((0, Op.d)(pp))
      }
      if ("source:" === pp.substring(0, 7)) return void op(pp.substring(7));
      if ("base64:" === pp.substring(0, 7)) {
        return void op(window.atob(pp.substring(7)))
      }
      const Yp = Ip.b.GetShadersStore(Sp);
      if (Yp[pp + ip + "Shader"]) return void op(Yp[pp + ip + "Shader"]);
      if (cp && Yp[pp + cp + "Shader"]) return void op(Yp[pp + cp + "Shader"]);
      let Dp;
      if (Dp = "." === pp[0] || "/" === pp[0] || pp.indexOf("http") > -1 ? pp : Ip.b.GetShadersRepository(Sp) + pp, !(xp = xp || Lp.n)) throw new Error("loadFileInjection is not defined");
      xp(Dp + "." + ip.toLowerCase() + ".fx", op)
    }
    const Wp = (pp, ip, cp, Op) => {
      try {
        const Ip = pp.context ? (0, op.J)(pp.context) : null;
        Ip && (Ip.disableParallelShaderCompile = pp.disableParallelCompilation);
        const Sp = pp.existingPipelineContext || ip(pp.shaderProcessingContext);
        return Sp._name = pp.name, pp.name && Ip && (Ip.cachedPipelines[pp.name] = Sp), cp(Sp, pp.vertex, pp.fragment, !!pp.createAsRaw, "", "", pp.rebuildRebind, pp.defines, pp.transformFeedbackVaryings, "", (() => {
          Op(Sp, (() => {
            pp.onRenderingStateCompiled?.(Sp)
          }))
        })), Sp
      } catch (Ip) {
        throw Sp.e.Error("Error compiling effect"), Ip
      }
    }
  },
  40053: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp
    });
    var Op = cp(37349),
      op = cp(38905),
      Ip = cp(40062),
      Sp = cp(40068),
      xp = cp(40107);
    class Lp {
      static get ShadersRepository() {
        return Ip.b.ShadersRepository
      }
      static set ShadersRepository(pp) {
        Ip.b.ShadersRepository = pp
      }
      get uR() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Op.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(pp, ip, cp) {
        let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ip = arguments.length > 4 ? arguments[4] : void 0,
          xp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Yp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Dp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ap = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Pp = arguments.length > 9 ? arguments[9] : void 0,
          Wp = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          yp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Up = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Op.d, this.onErrorObservable = new Op.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = pp, this._key = Wp;
        const wp = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let vp;
        if (ip.attributes) {
          const pp = ip;
          if (this._engine = cp, this._attributesNames = pp.attributes, this._uniformsNames = pp.uniformsNames.concat(pp.samplers), this._samplerList = pp.samplers.slice(), this.defines = pp.defines, this.onError = pp.onError, this.onCompiled = pp.onCompiled, this._fallbacks = pp.fallbacks, this._indexParameters = pp.indexParameters, this._transformFeedbackVaryings = pp.transformFeedbackVaryings || null, this._multiTarget = !!pp.multiTarget, this._shaderLanguage = pp.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!pp.disableParallelShaderCompilation, pp.uniformBuffersNames) {
            this._uniformBuffersNamesList = pp.uniformBuffersNames.slice();
            for (let ip = 0; ip < pp.uniformBuffersNames.length; ip++) this._uniformBuffersNames[pp.uniformBuffersNames[ip]] = ip
          }
          this._processFinalCode = pp.processFinalCode ?? null, this._processCodeAfterIncludes = pp.processCodeAfterIncludes ?? void 0, Up = pp.extraInitializationsAsync, vp = pp.existingPipelineContext
        } else this._engine = Ip, this.defines = null == xp ? "" : xp, this._uniformsNames = cp.concat(op), this._samplerList = op ? op.slice() : [], this._attributesNames = ip, this._uniformBuffersNamesList = [], this._shaderLanguage = yp, this.onError = Ap, this.onCompiled = Dp, this._indexParameters = Pp, this._fallbacks = Yp;
        "WEBGL2" === this._engine.shaderPlatformName && (vp = (0, Sp.l)(wp, this._engine._gl) ?? vp), this._attributeLocationByName = {}, this.uniqueId = Lp._UniqueIdSeed++, vp ? (this._pipelineContext = vp, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Up).catch((pp => {
          const ip = pp?.message ?? String(pp),
            cp = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${ip}`);
          pp && "string" === typeof pp.stack && (cp.stack = `${cp.message}\nCaused by: ${pp.stack}`), this._processCompilationErrors(cp)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.uR || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        Op && await Op(), this._processingContext = cp || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const op = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: pp ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Ip.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Ip.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          lOp: this._engine.lOp,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Sp.e)(op, this.name, this._processFinalCode, ((pp, cp) => {
          this._vertexSourceCode = pp, this._fragmentSourceCode = cp, this._prepareEffect(ip)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.uR || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      gy() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(pp) {
        return this._attributes[pp]
      }
      getAttributeLocationByName(pp) {
        return this._attributeLocationByName[pp]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(pp) {
        return this._uniformsNames.indexOf(pp)
      }
      getUniform(pp) {
        return this._uniforms[pp]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((pp => {
          this.executeWhenCompiled(pp)
        }))
      }
      executeWhenCompiled(pp) {
        this.isReady() ? pp(this) : (this.onCompileObservable.add((ip => {
          pp(ip)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(pp) {
        (0, xp.c)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (ip => {
          this._processCompilationErrors(ip, pp)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            lOp: this._engine.lOp,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(pp, ip, cp, Op) {
        this._isReady = !1, this._vertexSourceCodeOverride = pp, this._fragmentSourceCodeOverride = ip, this.onError = (pp, ip) => {
          Op && Op(ip)
        }, this.onCompiled = () => {
          const pp = this.gy().scenes;
          if (pp)
            for (let ip = 0; ip < pp.length; ip++) pp[ip].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(cp)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(pp) {
        if (this._pipelineContext = pp, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let ip = 0; ip < this._attributesNames.length; ip++) {
            const pp = this._attributesNames[ip];
            this._attributeLocationByName[pp] = this._attributes[ip]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Lp.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = this._pipelineContext;
        this._isReady = !1;
        try {
          const cp = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Op = cp ? null : this.defines,
            op = cp ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Ip = cp ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            xp = this._engine;
          this._pipelineContext = (0, Sp.i)({
            existingPipelineContext: pp ? ip : null,
            vertex: op,
            fragment: Ip,
            context: "WEBGL2" === xp.shaderPlatformName || "WEBGL1" === xp.shaderPlatformName ? xp._gl : void 0,
            rebuildRebind: (pp, ip, cp, Op) => this._rebuildProgram(pp, ip, cp, Op),
            defines: Op,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: cp,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: cp => {
              ip && !pp && this._engine._deletePipelineContext(ip), cp && this._onRenderingStateCompiled(cp)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(ip)
        } catch (cp) {
          this._processCompilationErrors(cp, ip)
        }
      }
      _getShaderCodeAndErrorLine(pp, ip, cp) {
        const Op = cp ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let op = null;
        if (ip && pp) {
          const Ip = ip.match(Op);
          if (Ip && 2 === Ip.length) {
            const ip = parseInt(Ip[1]),
              Op = pp.split("\n", -1);
            Op.length >= ip && (op = `Offending line [${ip}] in ${cp?"fragment":"vertex"} code: ${Op[ip-1]}`)
          }
        }
        return [pp, op]
      }
      _processCompilationErrors(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof pp?.stack ? pp.stack : pp?.message ?? String(pp);
        const cp = this._attributesNames,
          Op = this._fallbacks;
        if (op.e.Error("Unable to compile effect:"), op.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), op.e.Error(`Attributes: ${cp.join(" ")}`), op.e.Error("Defines:\n" + this.defines), Lp.LogShaderCodeOnCompilationError) {
          let pp, ip = null,
            cp = null;
          this._pipelineContext?._getVertexShaderCode() && ([pp, ip] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), pp && (op.e.Error("Vertex code:"), op.e.Error(pp))), this._pipelineContext?._getFragmentShaderCode() && ([pp, cp] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), pp && (op.e.Error("Fragment code:"), op.e.Error(pp))), ip && op.e.Error(ip), cp && op.e.Error(cp)
        }
        op.e.Error("Error: " + this._compilationError);
        const Ip = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        ip && (this._pipelineContext = ip, this._isReady = !0, Ip()), Op ? (this._pipelineContext = null, Op.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, op.e.Error("Trying next fallback."), this.defines = Op.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Ip(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, ip || Ip())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(pp, ip) {
        this._engine._bindTexture(this._samplers[pp], ip, pp)
      }
      setTexture(pp, ip) {
        this._engine.setTexture(this._samplers[pp], this._uniforms[pp], ip, pp)
      }
      setTextureArray(pp, ip) {
        const cp = pp + "Ex";
        if (-1 === this._samplerList.indexOf(cp + "0")) {
          const Op = this._samplerList.indexOf(pp);
          for (let pp = 1; pp < ip.length; pp++) {
            const ip = cp + (pp - 1).toString();
            this._samplerList.splice(Op + pp, 0, ip)
          }
          let op = 0;
          for (const pp of this._samplerList) this._samplers[pp] = op, op += 1
        }
        this._engine.setTextureArray(this._samplers[pp], this._uniforms[pp], ip, pp)
      }
      bindUniformBuffer(pp, ip) {
        const cp = this._uniformBuffersNames[ip];
        void 0 === cp || Lp._BaseCache[cp] === pp && this._engine._features.useUBOBindingCache || (Lp._BaseCache[cp] = pp, this._engine.bindUniformBufferBase(pp, cp, ip))
      }
      bindUniformBlock(pp, ip) {
        this._engine.bindUniformBlock(this._pipelineContext, pp, ip)
      }
      setInt(pp, ip) {
        return this._pipelineContext.setInt(pp, ip), this
      }
      setInt2(pp, ip, cp) {
        return this._pipelineContext.setInt2(pp, ip, cp), this
      }
      setInt3(pp, ip, cp, Op) {
        return this._pipelineContext.setInt3(pp, ip, cp, Op), this
      }
      setInt4(pp, ip, cp, Op, op) {
        return this._pipelineContext.setInt4(pp, ip, cp, Op, op), this
      }
      setIntArray(pp, ip) {
        return this._pipelineContext.setIntArray(pp, ip), this
      }
      setIntArray2(pp, ip) {
        return this._pipelineContext.setIntArray2(pp, ip), this
      }
      setIntArray3(pp, ip) {
        return this._pipelineContext.setIntArray3(pp, ip), this
      }
      setIntArray4(pp, ip) {
        return this._pipelineContext.setIntArray4(pp, ip), this
      }
      setUInt(pp, ip) {
        return this._pipelineContext.setUInt(pp, ip), this
      }
      setUInt2(pp, ip, cp) {
        return this._pipelineContext.setUInt2(pp, ip, cp), this
      }
      setUInt3(pp, ip, cp, Op) {
        return this._pipelineContext.setUInt3(pp, ip, cp, Op), this
      }
      setUInt4(pp, ip, cp, Op, op) {
        return this._pipelineContext.setUInt4(pp, ip, cp, Op, op), this
      }
      setUIntArray(pp, ip) {
        return this._pipelineContext.setUIntArray(pp, ip), this
      }
      setUIntArray2(pp, ip) {
        return this._pipelineContext.setUIntArray2(pp, ip), this
      }
      setUIntArray3(pp, ip) {
        return this._pipelineContext.setUIntArray3(pp, ip), this
      }
      setUIntArray4(pp, ip) {
        return this._pipelineContext.setUIntArray4(pp, ip), this
      }
      setFloatArray(pp, ip) {
        return this._pipelineContext.setArray(pp, ip), this
      }
      setFloatArray2(pp, ip) {
        return this._pipelineContext.setArray2(pp, ip), this
      }
      setFloatArray3(pp, ip) {
        return this._pipelineContext.setArray3(pp, ip), this
      }
      setFloatArray4(pp, ip) {
        return this._pipelineContext.setArray4(pp, ip), this
      }
      setArray(pp, ip) {
        return this._pipelineContext.setArray(pp, ip), this
      }
      setArray2(pp, ip) {
        return this._pipelineContext.setArray2(pp, ip), this
      }
      setArray3(pp, ip) {
        return this._pipelineContext.setArray3(pp, ip), this
      }
      setArray4(pp, ip) {
        return this._pipelineContext.setArray4(pp, ip), this
      }
      setMatrices(pp, ip) {
        return this._pipelineContext.setMatrices(pp, ip), this
      }
      setMatrix(pp, ip) {
        return this._pipelineContext.setMatrix(pp, ip), this
      }
      setMatrix3x3(pp, ip) {
        return this._pipelineContext.setMatrix3x3(pp, ip), this
      }
      setMatrix2x2(pp, ip) {
        return this._pipelineContext.setMatrix2x2(pp, ip), this
      }
      setFloat(pp, ip) {
        return this._pipelineContext.setFloat(pp, ip), this
      }
      setBool(pp, ip) {
        return this._pipelineContext.setInt(pp, ip ? 1 : 0), this
      }
      setVector2(pp, ip) {
        return this._pipelineContext.setVector2(pp, ip), this
      }
      setFloat2(pp, ip, cp) {
        return this._pipelineContext.setFloat2(pp, ip, cp), this
      }
      setVector3(pp, ip) {
        return this._pipelineContext.setVector3(pp, ip), this
      }
      setFloat3(pp, ip, cp, Op) {
        return this._pipelineContext.setFloat3(pp, ip, cp, Op), this
      }
      setVector4(pp, ip) {
        return this._pipelineContext.setVector4(pp, ip), this
      }
      setQuaternion(pp, ip) {
        return this._pipelineContext.setQuaternion(pp, ip), this
      }
      setFloat4(pp, ip, cp, Op, op) {
        return this._pipelineContext.setFloat4(pp, ip, cp, Op, op), this
      }
      setColor3(pp, ip) {
        return this._pipelineContext.setColor3(pp, ip), this
      }
      setColor4(pp, ip, cp) {
        return this._pipelineContext.setColor4(pp, ip, cp), this
      }
      setDirectColor4(pp, ip) {
        return this._pipelineContext.setDirectColor4(pp, ip), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Lp.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Sp.o)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        ip && (Ip.b.GetShadersStore(Op)[`${pp}PixelShader`] = ip), cp && (Ip.b.GetShadersStore(Op)[`${pp}VertexShader`] = cp)
      }
      static ResetCache() {
        Lp._BaseCache = {}
      }
    }
    Lp.LogShaderCodeOnCompilationError = !0, Lp.PersistentMode = !1, Lp.AutomaticallyClearCodeCache = !1, Lp._UniqueIdSeed = 0, Lp._BaseCache = {}, Lp.ShadersStore = Ip.b.ShadersStore, Lp.IncludesShadersStore = Ip.b.IncludesShadersStore
  },
  40352: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      g: () => kp,
      i: () => jp
    });
    var Op = cp(40053),
      op = cp(37320),
      Ip = cp(37359),
      Sp = cp(40332);
    const xp = new op.b,
      Lp = new op.b,
      Yp = new op.b,
      Dp = {
        Gl: () => {},
        eyeAtCamera: !0
      };

    function Ap(pp, ip, cp) {
      const Op = cp.BOp(),
        op = ip.BOp();
      for (let Ip = 0; Ip < 16; Ip++) Op[Ip] = op[Ip];
      return Op[12] -= pp.x, Op[13] -= pp.y, Op[14] -= pp.z, cp.markAsUpdated(), cp
    }

    function Pp(pp, ip, cp) {
      return (0, Ip.g)(ip, Lp), Ap(pp, Lp, Yp), (0, Ip.g)(Yp, cp), cp
    }

    function Wp(pp, ip, cp) {
      if (!Dp.eyeAtCamera) return Pp(pp, ip, cp);
      const Op = cp.BOp(),
        op = ip.BOp();
      for (let Ip = 0; Ip < 16; Ip++) Op[Ip] = op[Ip];
      return Op[12] = 0, Op[13] = 0, Op[14] = 0, cp.markAsUpdated(), cp
    }

    function yp(pp, ip, cp, Op) {
      return (0, Ip.p)(Wp(pp, ip, Op), cp, Op), Op
    }

    function Up(pp, ip, cp, Op) {
      return (0, Ip.g)(cp, Lp), (0, Ip.p)(ip, Lp, Yp), Ap(pp, Yp, Lp), Wp(pp, cp, Yp), (0, Ip.p)(Lp, Yp, Op), Op
    }

    function wp(pp, ip, cp, Op, op, Sp) {
      return (0, Ip.g)(cp, Lp), (0, Ip.p)(ip, Lp, Yp), Ap(pp, Yp, Lp), yp(pp, Op, op, Yp), (0, Ip.p)(Lp, Yp, Sp), Sp
    }

    function vp(pp, ip) {
      const cp = Dp.Gl();
      if (!cp || xp === ip) return ip;
      xp.updateFlag = ip.updateFlag;
      const Op = cp.floatingOriginOffset;
      switch (pp) {
        case "world":
          return Ap(Op, ip, xp);
        case "view":
          return Wp(Op, ip, xp);
        case "worldView":
          return Up(Op, ip, cp.getViewMatrix(), xp);
        case "viewProjection":
          return yp(Op, cp.getViewMatrix(), cp.getProjectionMatrix(), xp);
        case "worldViewProjection":
          return wp(Op, ip, cp.getTransformMatrix(), cp.getViewMatrix(), cp.getProjectionMatrix(), xp);
        default:
          if (pp.startsWith("u_")) {
            const op = pp.toLowerCase();
            if (op.startsWith("u_worldviewprojection")) return wp(Op, ip, cp.getTransformMatrix(), cp.getViewMatrix(), cp.getProjectionMatrix(), xp);
            if (op.startsWith("u_viewprojection")) return yp(Op, cp.getViewMatrix(), cp.getProjectionMatrix(), xp);
            if (op.startsWith("u_worldview")) return Up(Op, ip, cp.getViewMatrix(), xp);
            if (op.startsWith("u_world")) return Ap(Op, ip, xp);
            if (op.startsWith("u_view")) return Wp(Op, ip, xp)
          }
          return ip
      }
    }
    const tp = Sp.b,
      Hp = Op.e,
      dp = tp.prototype._updateMatrixForUniform,
      ep = Op.e.prototype.setMatrix;

    function jp() {
      Op.e.prototype.setMatrix = ep, Hp._setMatrixOverride = void 0, tp.prototype._updateMatrixForUniform = dp, tp.prototype._updateMatrixForUniformOverride = void 0
    }

    function kp() {
      Hp.prototype._setMatrixOverride = ep, Hp.prototype.setMatrix = function(pp, ip) {
        return this._setMatrixOverride(pp, vp(pp, ip)), this
      }, tp.prototype._updateMatrixForUniformOverride = dp, tp.prototype._updateMatrixForUniform = function(pp, ip) {
        this._updateMatrixForUniformOverride(pp, vp(pp, ip))
      }
    }
  },
  40324: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      f: () => op
    });
    var Op = cp(40322);

    function op(pp, ip) {
      ip.WHITEBALANCE && pp.push("whiteBalanceMatrix"), ip.EXPOSURE && pp.push("exposureLinear"), ip.CONTRAST && pp.push("contrast"), ip.COLORGRADING && pp.push("colorTransformSettings"), (ip.VIGNETTE || ip.DITHER) && pp.push("vInverseScreenSize"), ip.VIGNETTE && (pp.push("vignetteSettings1"), pp.push("vignetteSettings2")), ip.COLORCURVES && (0, Op.c)(pp), ip.DITHER && pp.push("ditherIntensity")
    }

    function Ip(pp, ip) {
      ip.COLORGRADING && pp.push("txColorTransform")
    }
  },
  40318: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Cp,
      g: () => lp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37349),
      Sp = cp(37487),
      xp = cp(37356),
      Lp = cp(37320);
    const Yp = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      Dp = 1e6 / Yp[Yp.length - 1][0],
      Ap = 150;

    function Pp(pp, ip) {
      const cp = Number.isNaN(pp) ? Dp : Math.max(pp, Dp),
        Op = (0, xp.Clamp)(1e6 / cp, Yp[0][0], Yp[Yp.length - 1][0]);
      let op = 0,
        Ip = Yp.length - 1;
      for (; Ip - op > 1;) {
        const pp = op + Ip >> 1;
        Yp[pp][0] <= Op ? op = pp : Ip = pp
      }
      const Sp = op,
        [Pp, Wp, yp, Up] = Yp[Sp],
        [wp, vp, tp, Hp] = Yp[Sp + 1],
        dp = (Op - Pp) / (wp - Pp),
        ep = Lp.l.Lerp(new Lp.l(Wp, yp), new Lp.l(vp, tp), dp),
        jp = Lp.l.Normalize(new Lp.l(1, Up)),
        kp = Lp.l.Normalize(new Lp.l(1, Hp)),
        mp = Lp.l.Normalize(Lp.l.Lerp(jp, kp, dp)),
        Rp = (0, xp.Clamp)(ip, -150, Ap);
      ep.Iop(mp.scale(Rp / 3e3));
      const qp = 2 * ep.x - 8 * ep.y + 4,
        Mp = 3 * ep.x / qp,
        Cp = 2 * ep.y / qp;
      return new Lp.o(Mp / Cp, 1, (1 - Mp - Cp) / Cp)
    }
    const Wp = Lp.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      yp = Lp.b.Invert(Wp);

    function Up(pp, ip) {
      const cp = ip > 0 ? pp / ip : 10;
      return (0, xp.Clamp)(cp, .1, 10)
    }

    function wp(pp, ip) {
      const cp = Lp.o.TransformNormal(pp, Wp),
        Op = Lp.o.TransformNormal(ip, Wp),
        op = Lp.b.FromArray([Up(Op.x, cp.x), 0, 0, 0, 0, Up(Op.y, cp.y), 0, 0, 0, 0, Up(Op.z, cp.z), 0, 0, 0, 0, 1]);
      return Wp.multiply(op).multiply(yp)
    }
    const vp = new Lp.o(.95047, 1, 1.08883),
      tp = Lp.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(wp(vp, Pp(6500, 0))),
      Hp = Lp.b.Invert(tp),
      dp = Lp.o.TransformNormal(new Lp.o(1, 1, 1), tp);
    var ep = cp(40233),
      jp = cp(40322);
    let kp = (() => {
      var pp;
      let ip, cp, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp = [],
        vp = [],
        tp = [],
        Hp = [],
        dp = [],
        kp = [],
        mp = [],
        Rp = [],
        qp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [],
        bp = [],
        hp = [],
        ap = [],
        np = [];
      return pp = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Sp.h(0, 0, 0, 0), this._globalCurve = new Sp.h(0, 0, 0, 0), this._highlightsCurve = new Sp.h(0, 0, 0, 0), this._midtonesCurve = new Sp.h(0, 0, 0, 0), this._shadowsCurve = new Sp.h(0, 0, 0, 0), this._positiveCurve = new Sp.h(0, 0, 0, 0), this._negativeCurve = new Sp.h(0, 0, 0, 0), this._globalHue = (0, Op.l)(this, wp, 30), this._globalDensity = ((0, Op.l)(this, vp), (0, Op.l)(this, tp, 0)), this._globalSaturation = ((0, Op.l)(this, Hp), (0, Op.l)(this, dp, 0)), this._globalExposure = ((0, Op.l)(this, kp), (0, Op.l)(this, mp, 0)), this._highlightsHue = ((0, Op.l)(this, Rp), (0, Op.l)(this, qp, 30)), this._highlightsDensity = ((0, Op.l)(this, Mp), (0, Op.l)(this, Cp, 0)), this._highlightsSaturation = ((0, Op.l)(this, Ep), (0, Op.l)(this, Xp, 0)), this._highlightsExposure = ((0, Op.l)(this, lp), (0, Op.l)(this, Qp, 0)), this._midtonesHue = ((0, Op.l)(this, Jp), (0, Op.l)(this, Bp, 30)), this._midtonesDensity = ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, 0)), this._midtonesSaturation = ((0, Op.l)(this, fp), (0, Op.l)(this, bp, 0)), this._midtonesExposure = ((0, Op.l)(this, hp), (0, Op.l)(this, ap, 0)), this._shadowsHue = ((0, Op.l)(this, np), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(pp) {
          this._globalHue = pp, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(pp) {
          this._globalDensity = pp, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(pp) {
          this._globalSaturation = pp, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(pp) {
          this._globalExposure = pp, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(pp) {
          this._highlightsHue = pp, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(pp) {
          this._highlightsDensity = pp, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(pp) {
          this._highlightsSaturation = pp, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(pp) {
          this._highlightsExposure = pp, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(pp) {
          this._midtonesHue = pp, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(pp) {
          this._midtonesDensity = pp, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(pp) {
          this._midtonesSaturation = pp, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(pp) {
          this._midtonesExposure = pp, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(pp) {
          this._shadowsHue = pp, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(pp) {
          this._shadowsDensity = pp, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(pp) {
          this._shadowsSaturation = pp, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(pp) {
          this._shadowsExposure = pp, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(ip, cp, Op, op, Ip) {
          null != ip && (ip = pp._Clamp(ip, 0, 360), cp = pp._Clamp(cp, -100, 100), Op = pp._Clamp(Op, -100, 100), op = pp._Clamp(op, -100, 100), cp = pp._ApplyColorGradingSliderNonlinear(cp), cp *= .5, op = pp._ApplyColorGradingSliderNonlinear(op), cp < 0 && (cp *= -1, ip = (ip + 180) % 360), pp._FromHSBToRef(ip, cp, 50 + .25 * op, Ip), Ip.scaleToRef(2, Ip), Ip.a = 1 + .01 * Op)
        }
        static _ApplyColorGradingSliderNonlinear(pp) {
          pp /= 100;
          let ip = Math.abs(pp);
          return ip = Math.pow(ip, 2), pp < 0 && (ip *= -1), ip *= 100, ip
        }
        static _FromHSBToRef(ip, cp, Op, op) {
          let Ip = pp._Clamp(ip, 0, 360);
          const Sp = pp._Clamp(cp / 100, 0, 1),
            xp = pp._Clamp(Op / 100, 0, 1);
          if (0 === Sp) op.r = xp, op.g = xp, op.b = xp;
          else {
            Ip /= 60;
            const pp = Math.floor(Ip),
              ip = Ip - pp,
              cp = xp * (1 - Sp),
              Op = xp * (1 - Sp * ip),
              Lp = xp * (1 - Sp * (1 - ip));
            switch (pp) {
              case 0:
                op.r = xp, op.g = Lp, op.b = cp;
                break;
              case 1:
                op.r = Op, op.g = xp, op.b = cp;
                break;
              case 2:
                op.r = cp, op.g = xp, op.b = Lp;
                break;
              case 3:
                op.r = cp, op.g = Op, op.b = xp;
                break;
              case 4:
                op.r = Lp, op.g = cp, op.b = xp;
                break;
              default:
                op.r = xp, op.g = cp, op.b = Op
            }
          }
          op.a = 1
        }
        static _Clamp(pp, ip, cp) {
          return Math.min(Math.max(pp, ip), cp)
        }
        clone() {
          return ep.c.Clone((() => new pp), this)
        }
        serialize() {
          return ep.c.Serialize(this)
        }
        _bind(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), pp && (pp.setFloat4(ip, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), pp.setFloat4(cp, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), pp.setFloat4(Op, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: pp => "_globalHue" in pp,
            get: pp => pp._globalHue,
            set: (pp, ip) => {
              pp._globalHue = ip
            }
          },
          metadata: Sp
        }, wp, vp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "_globalDensity" in pp,
            get: pp => pp._globalDensity,
            set: (pp, ip) => {
              pp._globalDensity = ip
            }
          },
          metadata: Sp
        }, tp, Hp), (0, Op.j)(null, null, Ip, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: pp => "_globalSaturation" in pp,
            get: pp => pp._globalSaturation,
            set: (pp, ip) => {
              pp._globalSaturation = ip
            }
          },
          metadata: Sp
        }, dp, kp), (0, Op.j)(null, null, xp, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: pp => "_globalExposure" in pp,
            get: pp => pp._globalExposure,
            set: (pp, ip) => {
              pp._globalExposure = ip
            }
          },
          metadata: Sp
        }, mp, Rp), (0, Op.j)(null, null, Lp, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: pp => "_highlightsHue" in pp,
            get: pp => pp._highlightsHue,
            set: (pp, ip) => {
              pp._highlightsHue = ip
            }
          },
          metadata: Sp
        }, qp, Mp), (0, Op.j)(null, null, Yp, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "_highlightsDensity" in pp,
            get: pp => pp._highlightsDensity,
            set: (pp, ip) => {
              pp._highlightsDensity = ip
            }
          },
          metadata: Sp
        }, Cp, Ep), (0, Op.j)(null, null, Dp, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: pp => "_highlightsSaturation" in pp,
            get: pp => pp._highlightsSaturation,
            set: (pp, ip) => {
              pp._highlightsSaturation = ip
            }
          },
          metadata: Sp
        }, Xp, lp), (0, Op.j)(null, null, Ap, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: pp => "_highlightsExposure" in pp,
            get: pp => pp._highlightsExposure,
            set: (pp, ip) => {
              pp._highlightsExposure = ip
            }
          },
          metadata: Sp
        }, Qp, Jp), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: pp => "_midtonesHue" in pp,
            get: pp => pp._midtonesHue,
            set: (pp, ip) => {
              pp._midtonesHue = ip
            }
          },
          metadata: Sp
        }, Bp, Np), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "_midtonesDensity" in pp,
            get: pp => pp._midtonesDensity,
            set: (pp, ip) => {
              pp._midtonesDensity = ip
            }
          },
          metadata: Sp
        }, Tp, fp), (0, Op.j)(null, null, yp, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: pp => "_midtonesSaturation" in pp,
            get: pp => pp._midtonesSaturation,
            set: (pp, ip) => {
              pp._midtonesSaturation = ip
            }
          },
          metadata: Sp
        }, bp, hp), (0, Op.j)(null, null, Up, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: pp => "_midtonesExposure" in pp,
            get: pp => pp._midtonesExposure,
            set: (pp, ip) => {
              pp._midtonesExposure = ip
            }
          },
          metadata: Sp
        }, ap, np), Sp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sp
        })
      })(), pp.PrepareUniforms = jp.c, pp
    })();

    function mp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      pp._bind(ip, cp, Op, op)
    }
    var Rp = cp(40143),
      qp = cp(40324),
      Mp = cp(37368);
    let Cp = (() => {
        var pp;
        let ip, cp, Yp, Wp, yp, Up, vp, jp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp, rp, Zp, zp = [],
          sp = [],
          Kp = [],
          Vp = [],
          ii = [],
          ci = [],
          Oi = [],
          oi = [],
          Ii = [],
          Si = [],
          xi = [],
          Li = [],
          Yi = [],
          Di = [],
          Ai = [],
          Pi = [],
          Wi = [],
          yi = [],
          Ui = [],
          wi = [],
          vi = [],
          ti = [],
          Hi = [],
          di = [],
          ei = [],
          ui = [],
          ji = [],
          ki = [],
          mi = [],
          Ri = [],
          qi = [],
          Mi = [],
          Ci = [],
          Ei = [],
          Xi = [],
          li = [],
          Qi = [],
          Ji = [],
          Bi = [],
          Ni = [],
          Ti = [],
          fi = [],
          bi = [],
          ai = [],
          ni = [],
          Fi = [],
          gi = [],
          Gi = [],
          ri = [],
          Zi = [],
          zi = [],
          si = [],
          Ki = [],
          Vi = [],
          pc = [],
          ic = [];
        return pp = class {
          constructor() {
            this.colorCurves = (0, Op.l)(this, zp, new kp), this._colorCurvesEnabled = ((0, Op.l)(this, sp), (0, Op.l)(this, Kp, !1)), this._colorGradingTexture = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, void 0)), this._colorGradingEnabled = ((0, Op.l)(this, ci), (0, Op.l)(this, Oi, !1)), this._colorGradingWithGreenDepth = ((0, Op.l)(this, oi), (0, Op.l)(this, Ii, !0)), this._colorGradingBGR = ((0, Op.l)(this, Si), (0, Op.l)(this, xi, !0)), this._exposure = ((0, Op.l)(this, Li), (0, Op.l)(this, Yi, 1)), this._toneMappingEnabled = ((0, Op.l)(this, Di), (0, Op.l)(this, Ai, !1)), this._toneMappingType = ((0, Op.l)(this, Pi), (0, Op.l)(this, Wi, pp.TONEMAPPING_STANDARD)), this._contrast = ((0, Op.l)(this, yi), (0, Op.l)(this, Ui, 1)), this._whiteBalanceEnabled = ((0, Op.l)(this, wi), (0, Op.l)(this, vi, !1)), this._temperature = ((0, Op.l)(this, ti), (0, Op.l)(this, Hi, 6500)), this._tint = ((0, Op.l)(this, di), (0, Op.l)(this, ei, 0)), this._whiteBalanceMatrix = ((0, Op.l)(this, ui), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Op.l)(this, ji, 0), this.vignetteCenterX = ((0, Op.l)(this, ki), (0, Op.l)(this, mi, 0)), this.vignetteCenterY = ((0, Op.l)(this, Ri), (0, Op.l)(this, qi, 0)), this.vignetteWeight = ((0, Op.l)(this, Mi), (0, Op.l)(this, Ci, 1.5)), this.vignetteColor = ((0, Op.l)(this, Ei), (0, Op.l)(this, Xi, new Sp.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Op.l)(this, li), (0, Op.l)(this, Qi, .5)), this._vignetteBlendMode = ((0, Op.l)(this, Ji), (0, Op.l)(this, Bi, pp.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Op.l)(this, Ni), (0, Op.l)(this, Ti, !1)), this._ditheringEnabled = ((0, Op.l)(this, fi), (0, Op.l)(this, bi, !1)), this._ditheringIntensity = ((0, Op.l)(this, ai), (0, Op.l)(this, ni, 1 / 255)), this._skipFinalColorClamp = ((0, Op.l)(this, Fi), (0, Op.l)(this, gi, !1)), this._applyByPostProcess = ((0, Op.l)(this, Gi), (0, Op.l)(this, ri, !1)), this._isEnabled = ((0, Op.l)(this, Zi), (0, Op.l)(this, zi, !0)), this.outputTextureWidth = ((0, Op.l)(this, si), (0, Op.l)(this, Ki, 0)), this.outputTextureHeight = ((0, Op.l)(this, Vi), (0, Op.l)(this, pc, 0)), this.onUpdateParameters = ((0, Op.l)(this, ic), new Ip.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(pp) {
            this._colorCurvesEnabled !== pp && (this._colorCurvesEnabled = pp, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(pp) {
            this._colorGradingTexture !== pp && (this._colorGradingTexture = pp, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(pp) {
            this._colorGradingEnabled !== pp && (this._colorGradingEnabled = pp, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(pp) {
            this._colorGradingWithGreenDepth !== pp && (this._colorGradingWithGreenDepth = pp, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(pp) {
            this._colorGradingBGR !== pp && (this._colorGradingBGR = pp, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(pp) {
            this._exposure !== pp && (this._exposure = pp, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(pp) {
            this._toneMappingEnabled !== pp && (this._toneMappingEnabled = pp, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(pp) {
            this._toneMappingType !== pp && (this._toneMappingType = pp, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(pp) {
            this._contrast !== pp && (this._contrast = pp, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(pp) {
            this._whiteBalanceEnabled !== pp && (this._whiteBalanceEnabled = pp, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(pp) {
            pp = Number.isNaN(pp) ? Dp : Math.max(pp, Dp), this._temperature !== pp && (this._temperature = pp, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(pp) {
            pp = (0, xp.Clamp)(pp, -150, Ap), this._tint !== pp && (this._tint = pp, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(pp, ip) {
              const cp = wp(Pp(pp, ip), dp),
                Op = tp.multiply(cp).multiply(Hp);
              return Lp.b.GetAsMatrix3x3(Op)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(pp) {
            this.vignetteCenterY = pp
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(pp) {
            this.vignetteCenterX = pp
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(pp) {
            this._vignetteBlendMode !== pp && (this._vignetteBlendMode = pp, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(pp) {
            this._vignetteEnabled !== pp && (this._vignetteEnabled = pp, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(pp) {
            this._ditheringEnabled !== pp && (this._ditheringEnabled = pp, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(pp) {
            this._ditheringIntensity !== pp && (this._ditheringIntensity = pp, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(pp) {
            this._skipFinalColorClamp !== pp && (this._skipFinalColorClamp = pp, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(pp) {
            this._applyByPostProcess !== pp && (this._applyByPostProcess = pp, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(pp) {
            this._isEnabled !== pp && (this._isEnabled = pp, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(ip) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return ip.WHITEBALANCE = !1, ip.VIGNETTE = !1, ip.TONEMAPPING = 0, ip.CONTRAST = !1, ip.EXPOSURE = !1, ip.COLORCURVES = !1, ip.COLORGRADING = !1, ip.COLORGRADING3D = !1, ip.DITHER = !1, ip.IMAGEPROCESSING = !1, ip.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(ip.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (ip.WHITEBALANCE = this._whiteBalanceEnabled, ip.VIGNETTE = this.vignetteEnabled, ip.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === pp._VIGNETTEMODE_MULTIPLY, ip.VIGNETTEBLENDMODEOPAQUE = !ip.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case pp.TONEMAPPING_KHR_PBR_NEUTRAL:
                ip.TONEMAPPING = 3;
                break;
              case pp.TONEMAPPING_ACES:
                ip.TONEMAPPING = 2;
                break;
              default:
                ip.TONEMAPPING = 1
            } else ip.TONEMAPPING = 0;
            ip.CONTRAST = 1 !== this.contrast, ip.EXPOSURE = 1 !== this.exposure, ip.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, ip.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, ip.COLORGRADING ? ip.COLORGRADING3D = this.colorGradingTexture.is3D : ip.COLORGRADING3D = !1, ip.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, ip.SAMPLER3DBGRMAP = this.colorGradingBGR, ip.DITHER = this._ditheringEnabled, ip.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, ip.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, ip.IMAGEPROCESSING = ip.WHITEBALANCE || ip.VIGNETTE || !!ip.TONEMAPPING || ip.CONTRAST || ip.EXPOSURE || ip.COLORCURVES || ip.COLORGRADING || ip.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(pp, ip) {
            if (this._whiteBalanceEnabled && pp.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && mp(this.colorCurves, pp), this._vignetteEnabled || this._ditheringEnabled) {
              const cp = 1 / (this.outputTextureWidth || pp.gy().getRenderWidth()),
                Op = 1 / (this.outputTextureHeight || pp.gy().getRenderHeight());
              if (pp.setFloat2("vInverseScreenSize", cp, Op), this._ditheringEnabled && pp.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const op = null != ip ? ip : Op / cp;
                let Ip = Math.tan(.5 * this.vignetteCameraFov),
                  Sp = Ip * op;
                const xp = Math.sqrt(Sp * Ip);
                Sp = (0, Rp.i)(Sp, xp, this.vignetteStretch), Ip = (0, Rp.i)(Ip, xp, this.vignetteStretch), pp.setFloat4("vignetteSettings1", Sp, Ip, -Sp * this.vignetteCenterX, -Ip * this.vignetteCenterY);
                const Lp = -2 * this.vignetteWeight;
                pp.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Lp)
              }
            }
            if (pp.setFloat("exposureLinear", this.exposure), pp.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              pp.setTexture("txColorTransform", this.colorGradingTexture);
              const ip = this.colorGradingTexture.getSize().height;
              pp.setFloat4("colorTransformSettings", (ip - 1) / ip, .5 / ip, ip, this.colorGradingTexture.level)
            }
          }
          clone() {
            return ep.c.Clone((() => new pp), this)
          }
          serialize() {
            return ep.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ip = [(0, op.j)()], cp = [(0, op.K)()], Yp = [(0, op.C)("colorGradingTexture")], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], vp = [(0, op.K)()], jp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], Ep = [(0, op.K)()], Xp = [(0, op.K)()], lp = [(0, op.K)()], Qp = [(0, op.K)()], Jp = [(0, op.K)()], Bp = [(0, op.K)()], Np = [(0, op.K)()], Tp = [(0, op.q)()], fp = [(0, op.K)()], bp = [(0, op.K)()], hp = [(0, op.K)()], ap = [(0, op.K)()], np = [(0, op.K)()], Fp = [(0, op.K)()], gp = [(0, op.K)()], Gp = [(0, op.K)()], rp = [(0, op.K)()], Zp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: pp => "colorCurves" in pp,
              get: pp => pp.colorCurves,
              set: (pp, ip) => {
                pp.colorCurves = ip
              }
            },
            metadata: Ip
          }, zp, sp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_colorCurvesEnabled" in pp,
              get: pp => pp._colorCurvesEnabled,
              set: (pp, ip) => {
                pp._colorCurvesEnabled = ip
              }
            },
            metadata: Ip
          }, Kp, Vp), (0, Op.j)(null, null, Yp, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_colorGradingTexture" in pp,
              get: pp => pp._colorGradingTexture,
              set: (pp, ip) => {
                pp._colorGradingTexture = ip
              }
            },
            metadata: Ip
          }, ii, ci), (0, Op.j)(null, null, Wp, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_colorGradingEnabled" in pp,
              get: pp => pp._colorGradingEnabled,
              set: (pp, ip) => {
                pp._colorGradingEnabled = ip
              }
            },
            metadata: Ip
          }, Oi, oi), (0, Op.j)(null, null, yp, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: pp => "_colorGradingWithGreenDepth" in pp,
              get: pp => pp._colorGradingWithGreenDepth,
              set: (pp, ip) => {
                pp._colorGradingWithGreenDepth = ip
              }
            },
            metadata: Ip
          }, Ii, Si), (0, Op.j)(null, null, Up, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: pp => "_colorGradingBGR" in pp,
              get: pp => pp._colorGradingBGR,
              set: (pp, ip) => {
                pp._colorGradingBGR = ip
              }
            },
            metadata: Ip
          }, xi, Li), (0, Op.j)(null, null, vp, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: pp => "_exposure" in pp,
              get: pp => pp._exposure,
              set: (pp, ip) => {
                pp._exposure = ip
              }
            },
            metadata: Ip
          }, Yi, Di), (0, Op.j)(null, null, jp, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_toneMappingEnabled" in pp,
              get: pp => pp._toneMappingEnabled,
              set: (pp, ip) => {
                pp._toneMappingEnabled = ip
              }
            },
            metadata: Ip
          }, Ai, Pi), (0, Op.j)(null, null, Mp, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: pp => "_toneMappingType" in pp,
              get: pp => pp._toneMappingType,
              set: (pp, ip) => {
                pp._toneMappingType = ip
              }
            },
            metadata: Ip
          }, Wi, yi), (0, Op.j)(null, null, Cp, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: pp => "_contrast" in pp,
              get: pp => pp._contrast,
              set: (pp, ip) => {
                pp._contrast = ip
              }
            },
            metadata: Ip
          }, Ui, wi), (0, Op.j)(null, null, Ep, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_whiteBalanceEnabled" in pp,
              get: pp => pp._whiteBalanceEnabled,
              set: (pp, ip) => {
                pp._whiteBalanceEnabled = ip
              }
            },
            metadata: Ip
          }, vi, ti), (0, Op.j)(null, null, Xp, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: pp => "_temperature" in pp,
              get: pp => pp._temperature,
              set: (pp, ip) => {
                pp._temperature = ip
              }
            },
            metadata: Ip
          }, Hi, di), (0, Op.j)(null, null, lp, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: pp => "_tint" in pp,
              get: pp => pp._tint,
              set: (pp, ip) => {
                pp._tint = ip
              }
            },
            metadata: Ip
          }, ei, ui), (0, Op.j)(null, null, Qp, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: pp => "vignetteStretch" in pp,
              get: pp => pp.vignetteStretch,
              set: (pp, ip) => {
                pp.vignetteStretch = ip
              }
            },
            metadata: Ip
          }, ji, ki), (0, Op.j)(null, null, Jp, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: pp => "vignetteCenterX" in pp,
              get: pp => pp.vignetteCenterX,
              set: (pp, ip) => {
                pp.vignetteCenterX = ip
              }
            },
            metadata: Ip
          }, mi, Ri), (0, Op.j)(null, null, Bp, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: pp => "vignetteCenterY" in pp,
              get: pp => pp.vignetteCenterY,
              set: (pp, ip) => {
                pp.vignetteCenterY = ip
              }
            },
            metadata: Ip
          }, qi, Mi), (0, Op.j)(null, null, Np, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "vignetteWeight" in pp,
              get: pp => pp.vignetteWeight,
              set: (pp, ip) => {
                pp.vignetteWeight = ip
              }
            },
            metadata: Ip
          }, Ci, Ei), (0, Op.j)(null, null, Tp, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "vignetteColor" in pp,
              get: pp => pp.vignetteColor,
              set: (pp, ip) => {
                pp.vignetteColor = ip
              }
            },
            metadata: Ip
          }, Xi, li), (0, Op.j)(null, null, fp, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: pp => "vignetteCameraFov" in pp,
              get: pp => pp.vignetteCameraFov,
              set: (pp, ip) => {
                pp.vignetteCameraFov = ip
              }
            },
            metadata: Ip
          }, Qi, Ji), (0, Op.j)(null, null, bp, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "_vignetteBlendMode" in pp,
              get: pp => pp._vignetteBlendMode,
              set: (pp, ip) => {
                pp._vignetteBlendMode = ip
              }
            },
            metadata: Ip
          }, Bi, Ni), (0, Op.j)(null, null, hp, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_vignetteEnabled" in pp,
              get: pp => pp._vignetteEnabled,
              set: (pp, ip) => {
                pp._vignetteEnabled = ip
              }
            },
            metadata: Ip
          }, Ti, fi), (0, Op.j)(null, null, ap, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_ditheringEnabled" in pp,
              get: pp => pp._ditheringEnabled,
              set: (pp, ip) => {
                pp._ditheringEnabled = ip
              }
            },
            metadata: Ip
          }, bi, ai), (0, Op.j)(null, null, np, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: pp => "_ditheringIntensity" in pp,
              get: pp => pp._ditheringIntensity,
              set: (pp, ip) => {
                pp._ditheringIntensity = ip
              }
            },
            metadata: Ip
          }, ni, Fi), (0, Op.j)(null, null, Fp, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: pp => "_skipFinalColorClamp" in pp,
              get: pp => pp._skipFinalColorClamp,
              set: (pp, ip) => {
                pp._skipFinalColorClamp = ip
              }
            },
            metadata: Ip
          }, gi, Gi), (0, Op.j)(null, null, gp, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: pp => "_applyByPostProcess" in pp,
              get: pp => pp._applyByPostProcess,
              set: (pp, ip) => {
                pp._applyByPostProcess = ip
              }
            },
            metadata: Ip
          }, ri, Zi), (0, Op.j)(null, null, Gp, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: pp => "_isEnabled" in pp,
              get: pp => pp._isEnabled,
              set: (pp, ip) => {
                pp._isEnabled = ip
              }
            },
            metadata: Ip
          }, zi, si), (0, Op.j)(null, null, rp, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: pp => "outputTextureWidth" in pp,
              get: pp => pp.outputTextureWidth,
              set: (pp, ip) => {
                pp.outputTextureWidth = ip
              }
            },
            metadata: Ip
          }, Ki, Vi), (0, Op.j)(null, null, Zp, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "outputTextureHeight" in pp,
              get: pp => pp.outputTextureHeight,
              set: (pp, ip) => {
                pp.outputTextureHeight = ip
              }
            },
            metadata: Ip
          }, pc, ic), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp.TONEMAPPING_STANDARD = 0, pp.TONEMAPPING_ACES = 1, pp.TONEMAPPING_KHR_PBR_NEUTRAL = 2, pp.PrepareUniforms = qp.f, pp.PrepareSamplers = qp.c, pp._VIGNETTEMODE_MULTIPLY = 0, pp._VIGNETTEMODE_OPAQUE = 1, pp
      })(),
      Ep = !1;

    function Xp(pp) {
      const ip = ep.c.Parse((() => new Cp), pp, null, null);
      return void 0 !== pp.vignetteCentreX && (ip.vignetteCenterX = pp.vignetteCentreX), void 0 !== pp.vignetteCentreY && (ip.vignetteCenterY = pp.vignetteCentreY), ip
    }

    function lp() {
      Ep || (Ep = !0, Cp.Parse = Xp, ep.c._ImageProcessingConfigurationParser = Xp, (0, Mp.g)("BABYLON.ImageProcessingConfiguration", Cp))
    }
  },
  40332: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(38905),
      op = cp(40304);
    class Ip {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = pp, this._noUBO = !pp.supportsUniformBuffers || op, this._dynamic = cp, this._name = Op ?? "no-name", this._data = ip || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Ip && this._engine._features.trackUbosInFrame || !0 === Ip) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.I3 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.I3 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(pp) {
        let ip;
        if (ip = pp <= 2 ? pp : 4, this._uniformLocationPointer % ip !== 0) {
          const pp = this._uniformLocationPointer;
          this._uniformLocationPointer += ip - this._uniformLocationPointer % ip;
          const cp = this._uniformLocationPointer - pp;
          for (let ip = 0; ip < cp; ip++) this._data.push(0)
        }
      }
      addUniform(pp, ip) {
        let cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Op > 0 && "number" === typeof ip && (this._uniformArraySizes[pp] = {
            strideSize: ip,
            arraySize: Op
          }), void 0 === this._uniformLocations[pp] && (this._uniformNames.push(pp), !this._noUBO)) {
          if (Op > 0) {
            if (ip instanceof Array) throw "addUniform should not be use with Array in UBO: " + pp;
            if (this._fillAlignment(4), 16 == ip) ip *= Op;
            else {
              ip = ip * Op + (4 - ip) * Op
            }
            cp = [];
            for (let pp = 0; pp < ip; pp++) cp.push(0)
          } else {
            if (ip instanceof Array) cp = ip, ip = cp.length;
            else {
              cp = [];
              for (let pp = 0; pp < ip; pp++) cp.push(0)
            }
            this._fillAlignment(ip)
          }
          this._uniformSizes[pp] = ip, this._uniformLocations[pp] = this._uniformLocationPointer, this._uniformLocationPointer += ip;
          for (let pp = 0; pp < ip; pp++) this._data.push(cp[pp]);
          this._needSync = !0
        }
      }
      addMatrix(pp, ip) {
        this.addUniform(pp, Array.prototype.slice.call(ip.BOp()))
      }
      addFloat2(pp, ip, cp) {
        const Op = [ip, cp];
        this.addUniform(pp, Op)
      }
      addFloat3(pp, ip, cp, Op) {
        const op = [ip, cp, Op];
        this.addUniform(pp, op)
      }
      addColor3(pp, ip) {
        const cp = [ip.r, ip.g, ip.b];
        this.addUniform(pp, cp)
      }
      addColor4(pp, ip, cp) {
        const Op = [ip.r, ip.g, ip.b, cp];
        this.addUniform(pp, Op)
      }
      addVector3(pp, ip) {
        const cp = [ip.x, ip.y, ip.z];
        this.addUniform(pp, cp)
      }
      addMatrix3x3(pp) {
        this.addUniform(pp, 12)
      }
      addMatrix2x2(pp) {
        this.addUniform(pp, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const pp = [];
        let ip = 0;
        for (const cp in this._uniformLocations)
          if (pp.push(cp), 10 === ++ip) break;
        return pp.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const pp of this._ownerListsBySlot.values()) this._removeOwnerBacklink(pp);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(pp) {
        this._name = pp
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(pp, ip) {
        for (let cp = 0; cp < pp.length; ++cp)
          if (pp[cp] !== ip[cp]) return !1;
        return !0
      }
      _copyBuffer(pp, ip) {
        for (let cp = 0; cp < pp.length; ++cp) ip[cp] = pp[cp]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(pp) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let ip = this._slotByOwner.get(pp);
        if (void 0 === ip && (ip = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(pp, ip), this._ownerCount++, pp._uniformBuffersWithOwnedSlot || (pp._uniformBuffersWithOwnedSlot = []), pp._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(ip, pp._uniformBuffersWithOwnedSlot)), this._slotGeneration[ip] === this._dataGeneration) return this._bufferIndex = ip, this._buffer = this._buffers[ip][0], this.bindUniformBuffer(), this._slotFrameId[ip] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const cp = this._buffers[ip][1];
        this._slotFrameId[ip] === this._currentFrameId && cp && !this._buffersEqual(this._bufferData, cp) && (ip = this._takeFreeSlot(!1)), this._bufferIndex = ip, this._buffer = this._buffers[ip][0], this.bindUniformBuffer();
        const Op = this._buffers[ip][1];
        Op && this._buffersEqual(this._bufferData, Op) || (Op && this._copyBuffer(this._bufferData, Op), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[ip] = this._currentFrameId, this._slotGeneration[ip] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(pp) {
        for (let cp = 0; cp < this._freeSlots.length; ++cp) {
          const ip = this._freeSlots[cp];
          if (this._slotFrameId[ip] !== this._currentFrameId) return pp && (this._freeSlots[cp] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), ip
        }
        this._rebuild();
        const ip = this._buffers.length - 1;
        return pp || this._freeSlots.push(ip), ip
      }
      _releaseOwnerSlot(pp) {
        const ip = this._slotByOwner?.get(pp);
        if (void 0 === ip) return;
        this._slotByOwner.delete(pp);
        const cp = this._ownerListsBySlot.get(ip);
        cp && (this._removeOwnerBacklink(cp), this._ownerListsBySlot.delete(ip)), this._ownerCount--, this._freeSlots.push(ip)
      }
      _removeOwnerBacklink(pp) {
        const ip = pp.indexOf(this); - 1 !== ip && (pp[ip] = pp[pp.length - 1], pp.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(pp, ip, cp) {
        this._checkNewFrame();
        let op = this._uniformLocations[pp];
        if (void 0 === op) {
          if (this._buffer) return void Op.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + pp);
          this.addUniform(pp, cp), op = this._uniformLocations[pp]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let pp = 0; pp < cp; pp++) this._bufferData[op + pp] = ip[pp];
          this._dataGeneration++
        } else {
          let pp = !1;
          for (let Op = 0; Op < cp; Op++)(16 === cp && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[op + Op] !== Math.fround(ip[Op])) && (pp = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[op + Op] = ip[Op]);
          this._needSync = this._needSync || pp, pp && this._dataGeneration++
        }
      }
      updateUniformArray(pp, ip, cp) {
        this._checkNewFrame();
        const Ip = this._uniformLocations[pp];
        if (void 0 === Ip) return void Op.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Sp = this._uniformArraySizes[pp];
        if (this._dynamic) {
          for (let pp = 0; pp < cp; pp++) this._bufferData[Ip + pp] = ip[pp];
          this._dataGeneration++
        } else {
          let pp = !1,
            Op = 0,
            xp = 0;
          for (let Lp = 0; Lp < cp; Lp++)
            if (this._bufferData[Ip + 4 * xp + Op] !== op.i.FloatRound(ip[Lp]) && (pp = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Ip + 4 * xp + Op] = ip[Lp]), Op++, Op === Sp.strideSize) {
              for (; Op < 4; Op++) this._bufferData[Ip + 4 * xp + Op] = 0;
              Op = 0, xp++
            } this._needSync = this._needSync || pp, pp && this._dataGeneration++
        }
      }
      _cacheMatrix(pp, ip) {
        this._checkNewFrame();
        const cp = this._valueCache[pp],
          Op = ip.updateFlag;
        return (void 0 === cp || cp !== Op) && (this._valueCache[pp] = Op, !0)
      }
      _updateMatrix3x3ForUniform(pp, ip) {
        for (let cp = 0; cp < 3; cp++) Ip._TempBuffer[4 * cp] = ip[3 * cp], Ip._TempBuffer[4 * cp + 1] = ip[3 * cp + 1], Ip._TempBuffer[4 * cp + 2] = ip[3 * cp + 2], Ip._TempBuffer[4 * cp + 3] = 0;
        this.updateUniform(pp, Ip._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(pp, ip) {
        this._currentEffect.setMatrix3x3(pp, ip)
      }
      _updateMatrix2x2ForEffect(pp, ip) {
        this._currentEffect.setMatrix2x2(pp, ip)
      }
      _updateMatrix2x2ForUniform(pp, ip) {
        for (let cp = 0; cp < 2; cp++) Ip._TempBuffer[4 * cp] = ip[2 * cp], Ip._TempBuffer[4 * cp + 1] = ip[2 * cp + 1], Ip._TempBuffer[4 * cp + 2] = 0, Ip._TempBuffer[4 * cp + 3] = 0;
        this.updateUniform(pp, Ip._TempBuffer, 8)
      }
      _updateFloatForEffect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(pp + cp, ip)
      }
      _updateFloatForUniform(pp, ip) {
        Ip._TempBuffer[0] = ip, this.updateUniform(pp, Ip._TempBuffer, 1)
      }
      _updateFloat2ForEffect(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(pp + Op, ip, cp)
      }
      _updateFloat2ForUniform(pp, ip, cp) {
        Ip._TempBuffer[0] = ip, Ip._TempBuffer[1] = cp, this.updateUniform(pp, Ip._TempBuffer, 2)
      }
      _updateFloat3ForEffect(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(pp + op, ip, cp, Op)
      }
      _updateFloat3ForUniform(pp, ip, cp, Op) {
        Ip._TempBuffer[0] = ip, Ip._TempBuffer[1] = cp, Ip._TempBuffer[2] = Op, this.updateUniform(pp, Ip._TempBuffer, 3)
      }
      _updateFloat4ForEffect(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(pp + Ip, ip, cp, Op, op)
      }
      _updateFloat4ForUniform(pp, ip, cp, Op, op) {
        Ip._TempBuffer[0] = ip, Ip._TempBuffer[1] = cp, Ip._TempBuffer[2] = Op, Ip._TempBuffer[3] = op, this.updateUniform(pp, Ip._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[pp]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(pp + cp, ip);
            break;
          case 3:
            this._currentEffect.setFloatArray3(pp + cp, ip);
            break;
          case 4:
            this._currentEffect.setFloatArray4(pp + cp, ip);
            break;
          default:
            this._currentEffect.setFloatArray(pp + cp, ip)
        }
      }
      _updateFloatArrayForUniform(pp, ip) {
        this.updateUniformArray(pp, ip, ip.length)
      }
      _updateArrayForEffect(pp, ip) {
        this._currentEffect.setArray(pp, ip)
      }
      _updateArrayForUniform(pp, ip) {
        this.updateUniformArray(pp, ip, ip.length)
      }
      _updateIntArrayForEffect(pp, ip) {
        this._currentEffect.setIntArray(pp, ip)
      }
      _updateIntArrayForUniform(pp, ip) {
        Ip._TempBufferInt32View.set(ip), this.updateUniformArray(pp, Ip._TempBuffer, ip.length)
      }
      _updateUIntArrayForEffect(pp, ip) {
        this._currentEffect.setUIntArray(pp, ip)
      }
      _updateUIntArrayForUniform(pp, ip) {
        Ip._TempBufferUInt32View.set(ip), this.updateUniformArray(pp, Ip._TempBuffer, ip.length)
      }
      _updateMatrixForEffect(pp, ip) {
        this._currentEffect.setMatrix(pp, ip)
      }
      _updateMatrixForUniform(pp, ip) {
        this._cacheMatrix(pp, ip) && this.updateUniform(pp, ip.BOp(), 16)
      }
      _updateMatricesForEffect(pp, ip) {
        this._currentEffect.setMatrices(pp, ip)
      }
      _updateMatricesForUniform(pp, ip) {
        this.updateUniform(pp, ip, ip.length)
      }
      _updateVector3ForEffect(pp, ip) {
        this._currentEffect.setVector3(pp, ip)
      }
      _updateVector3ForUniform(pp, ip) {
        Ip._TempBuffer[0] = ip.x, Ip._TempBuffer[1] = ip.y, Ip._TempBuffer[2] = ip.z, this.updateUniform(pp, Ip._TempBuffer, 3)
      }
      _updateVector4ForEffect(pp, ip) {
        this._currentEffect.setVector4(pp, ip)
      }
      _updateVector4ForUniform(pp, ip) {
        Ip._TempBuffer[0] = ip.x, Ip._TempBuffer[1] = ip.y, Ip._TempBuffer[2] = ip.z, Ip._TempBuffer[3] = ip.w, this.updateUniform(pp, Ip._TempBuffer, 4)
      }
      _updateColor3ForEffect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(pp + cp, ip)
      }
      _updateColor3ForUniform(pp, ip) {
        Ip._TempBuffer[0] = ip.r, Ip._TempBuffer[1] = ip.g, Ip._TempBuffer[2] = ip.b, this.updateUniform(pp, Ip._TempBuffer, 3)
      }
      _updateColor4ForEffect(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(pp + Op, ip, cp)
      }
      _updateDirectColor4ForEffect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(pp + cp, ip)
      }
      _updateColor4ForUniform(pp, ip, cp) {
        Ip._TempBuffer[0] = ip.r, Ip._TempBuffer[1] = ip.g, Ip._TempBuffer[2] = ip.b, Ip._TempBuffer[3] = cp, this.updateUniform(pp, Ip._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(pp, ip) {
        Ip._TempBuffer[0] = ip.r, Ip._TempBuffer[1] = ip.g, Ip._TempBuffer[2] = ip.b, Ip._TempBuffer[3] = ip.a, this.updateUniform(pp, Ip._TempBuffer, 4)
      }
      _updateIntForEffect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(pp + cp, ip)
      }
      _updateIntForUniform(pp, ip) {
        Ip._TempBufferInt32View[0] = ip, this.updateUniform(pp, Ip._TempBuffer, 1)
      }
      _updateInt2ForEffect(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(pp + Op, ip, cp)
      }
      _updateInt2ForUniform(pp, ip, cp) {
        Ip._TempBufferInt32View[0] = ip, Ip._TempBufferInt32View[1] = cp, this.updateUniform(pp, Ip._TempBuffer, 2)
      }
      _updateInt3ForEffect(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(pp + op, ip, cp, Op)
      }
      _updateInt3ForUniform(pp, ip, cp, Op) {
        Ip._TempBufferInt32View[0] = ip, Ip._TempBufferInt32View[1] = cp, Ip._TempBufferInt32View[2] = Op, this.updateUniform(pp, Ip._TempBuffer, 3)
      }
      _updateInt4ForEffect(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(pp + Ip, ip, cp, Op, op)
      }
      _updateInt4ForUniform(pp, ip, cp, Op, op) {
        Ip._TempBufferInt32View[0] = ip, Ip._TempBufferInt32View[1] = cp, Ip._TempBufferInt32View[2] = Op, Ip._TempBufferInt32View[3] = op, this.updateUniform(pp, Ip._TempBuffer, 4)
      }
      _updateUIntForEffect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(pp + cp, ip)
      }
      _updateUIntForUniform(pp, ip) {
        Ip._TempBufferUInt32View[0] = ip, this.updateUniform(pp, Ip._TempBuffer, 1)
      }
      _updateUInt2ForEffect(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(pp + Op, ip, cp)
      }
      _updateUInt2ForUniform(pp, ip, cp) {
        Ip._TempBufferUInt32View[0] = ip, Ip._TempBufferUInt32View[1] = cp, this.updateUniform(pp, Ip._TempBuffer, 2)
      }
      _updateUInt3ForEffect(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(pp + op, ip, cp, Op)
      }
      _updateUInt3ForUniform(pp, ip, cp, Op) {
        Ip._TempBufferUInt32View[0] = ip, Ip._TempBufferUInt32View[1] = cp, Ip._TempBufferUInt32View[2] = Op, this.updateUniform(pp, Ip._TempBuffer, 3)
      }
      _updateUInt4ForEffect(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(pp + Ip, ip, cp, Op, op)
      }
      _updateUInt4ForUniform(pp, ip, cp, Op, op) {
        Ip._TempBufferUInt32View[0] = ip, Ip._TempBufferUInt32View[1] = cp, Ip._TempBufferUInt32View[2] = Op, Ip._TempBufferUInt32View[3] = op, this.updateUniform(pp, Ip._TempBuffer, 4)
      }
      setTexture(pp, ip) {
        this._currentEffect.setTexture(pp, ip)
      }
      setTextureArray(pp, ip) {
        this._currentEffect.setTextureArray(pp, ip)
      }
      bindTexture(pp, ip) {
        this._currentEffect._bindTexture(pp, ip)
      }
      updateUniformDirectly(pp, ip) {
        this.updateUniform(pp, ip, ip.length), this.update()
      }
      bindToEffect(pp, ip) {
        this._currentEffect = pp, this._currentEffectName = ip
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(pp) {
        if (!this._buffers) return this._buffer === pp;
        for (let ip = 0; ip < this._buffers.length; ++ip) {
          if (this._buffers[ip][0] === pp) return this._bufferIndex = ip, this._buffer = pp, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[ip][1] && (this._bufferData.set(this._buffers[ip][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(pp) {
        return void 0 !== this._uniformLocations[pp]
      }
      dispose() {
        if (this._noUBO) return;
        const pp = this._engine._uniformBuffers,
          ip = pp.indexOf(this);
        if (-1 !== ip && (pp[ip] = pp[pp.length - 1], pp.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let pp = 0; pp < this._buffers.length; ++pp) {
            const ip = this._buffers[pp][0];
            this._engine._releaseBuffer(ip)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Ip._MAX_UNIFORM_SIZE = 256, Ip._TempBuffer = new Float32Array(Ip._MAX_UNIFORM_SIZE), Ip._TempBufferInt32View = new Int32Array(Ip._TempBuffer.buffer), Ip._TempBufferUInt32View = new Uint32Array(Ip._TempBuffer.buffer)
  },
  40134: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    var Op = cp(40140);
    class op extends Op.c {
      constructor(pp) {
        super(), this._buffer = pp
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40217: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      f: () => Yp
    });
    const Op = "__bjs_serializable__",
      op = new WeakMap;

    function Ip(pp, ip) {
      return Object.prototype.hasOwnProperty.call(pp, ip)
    }
    const Sp = function() {
      let pp = Symbol.metadata;
      return pp || (pp = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: pp
      })), pp
    }();

    function xp(pp) {
      return "function" === typeof pp ? pp : pp?.constructor
    }

    function Lp(pp) {
      if (!pp) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Sp)}) polyfill must run before decorated classes are evaluated.`);
      return Ip(pp, Op) || (pp[Op] = {}), pp[Op]
    }

    function Yp(pp) {
      const ip = xp(pp),
        cp = ip ? ip[Sp] : void 0;
      if (!cp) return {};
      const Lp = op.get(cp);
      if (Lp) return Lp;
      const Yp = {},
        Dp = [];
      let Ap = cp;
      for (; Ap;) Dp.push(Ap), Ap = Object.getPrototypeOf(Ap);
      for (const op of Dp)
        if (Ip(op, Op)) {
          const pp = op[Op];
          for (const ip in pp) Yp[ip] = pp[ip]
        } return op.set(cp, Yp), Yp
    }
  },
  40210: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => xp,
      F: () => Dp,
      H: () => Ap,
      K: () => Sp,
      b: () => Hp,
      e: () => Ip,
      f: () => tp,
      j: () => Wp,
      n: () => Lp,
      q: () => yp,
      r: () => Yp,
      s: () => wp,
      u: () => Pp,
      y: () => Up
    });
    var Op = cp(40217);

    function op(pp, ip) {
      return (cp, op) => {
        if (!op.metadata) return;
        const Ip = String(op.name),
          Sp = (0, Op.c)(op.metadata);
        Sp[Ip] || (Sp[Ip] = {
          type: pp,
          sourceName: ip
        })
      }
    }

    function Ip(pp) {
      return function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (cp, Op) => {
          const op = ip || "_" + String(Op.name);
          return {
            init(pp) {
              return void 0 === pp && op in this || (this[op] = pp), pp
            },
            get() {
              return this[op]
            },
            set(ip) {
              "function" === typeof this[op]?.equals && this[op].equals(ip) || this[op] !== ip && (this[op] = ip, this[pp]())
            }
          }
        }
      }(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Sp(pp) {
      return op(0, pp)
    }

    function xp(pp) {
      return op(1, pp)
    }

    function Lp(pp) {
      return op(2, pp)
    }

    function Yp(pp) {
      return op(3, pp)
    }

    function Dp(pp) {
      return op(4, pp)
    }

    function Ap(pp) {
      return op(5, pp)
    }

    function Pp(pp) {
      return op(6, pp)
    }

    function Wp(pp) {
      return op(7, pp)
    }

    function yp(pp) {
      return op(8, pp)
    }

    function Up(pp) {
      return op(10, pp)
    }

    function wp(pp) {
      return op(12, pp)
    }

    function vp(pp, ip, cp) {
      const Op = String(ip.name);
      let op = null;
      const Ip = function() {
        if (null === op) {
          op = pp, "undefined" !== typeof _native && _native[Op] && (op = cp(_native[Op], pp));
          const Sp = this && (ip.static ? this : Object.getPrototypeOf(this));
          Sp?.[Op] === Ip && (Sp[Op] = op)
        }
        for (var Sp = arguments.length, xp = new Array(Sp), Lp = 0; Lp < Sp; Lp++) xp[Lp] = arguments[Lp];
        return op.apply(this, xp)
      };
      return Ip
    }

    function tp(pp, ip) {
      return vp(pp, ip, (pp => pp))
    }

    function Hp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (cp, Op) => {
        const op = ip || "_" + String(Op.name);
        return {
          get() {
            return this[op]?.value
          },
          set(ip) {
            "function" === typeof this[op]?.value?.equals && this[op].value.equals(ip) || this[op].value !== ip && (this[op].value = ip, this[pp]())
          }
        }
      }
    }
    tp.filter = function(pp) {
      return (ip, cp) => vp(ip, cp, ((ip, cp) => function() {
        for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
        return pp(...op) ? ip(...op) : cp.apply(this, op)
      }))
    }
  },
  40233: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp
    });
    var Op = cp(40096),
      op = cp(40236),
      Ip = cp(37487),
      Sp = cp(37320),
      xp = cp(40217);
    const Lp = function(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ip = pp();
      op.b && op.b.HasTags(ip) && op.b.AddTagsTo(Ip, op.b.GetTags(ip, !0));
      const Sp = (0, xp.f)(Ip),
        Lp = {};
      for (const op in Sp) {
        const pp = Sp[op],
          xp = ip[op],
          Dp = pp.type;
        if (void 0 !== xp && null !== xp && ("uniqueId" !== op || Yp.AllowLoadingUniqueId)) switch (Dp) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof xp.slice ? Ip[op] = xp.slice() : Ip[op] = xp;
            break;
          case 1:
            Op.cloneTexturesOnlyOnce && Lp[xp.uniqueId] ? Ip[op] = Lp[xp.uniqueId] : (Ip[op] = cp || xp.isRenderTarget ? xp : xp.clone(), Lp[xp.uniqueId] = Ip[op]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            Ip[op] = cp ? xp : xp.clone()
        }
      }
      return Ip
    };
    class Yp {
      static AppendSerializedAnimations(pp, ip) {
        if (pp.animations) {
          ip.animations = [];
          for (let cp = 0; cp < pp.animations.length; cp++) {
            const Op = pp.animations[cp];
            ip.animations.push(Op.serialize())
          }
        }
      }
      static Serialize(pp, ip) {
        ip || (ip = {}), op.b && (ip.tags = op.b.GetTags(pp));
        const cp = (0, xp.f)(pp);
        for (const Op in cp) {
          const op = cp[Op],
            Ip = op.sourceName || Op,
            Sp = op.type,
            xp = pp[Op];
          if (void 0 !== xp && null !== xp && ("uniqueId" !== Op || Yp.AllowLoadingUniqueId)) switch (Sp) {
            case 0:
              Array.isArray(xp) ? ip[Ip] = xp.slice() : ip[Ip] = xp;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              ip[Ip] = xp.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              ip[Ip] = xp.BOp();
              break;
            case 6:
            case 11:
              ip[Ip] = xp.id
          }
        }
        return ip
      }
      static ParseProperties(pp, ip, cp, Op) {
        Op || (Op = "");
        const op = (0, xp.f)(ip);
        for (const xp in op) {
          const Lp = op[xp],
            Dp = pp[Lp.sourceName || xp],
            Ap = Lp.type;
          if (void 0 !== Dp && null !== Dp && ("uniqueId" !== xp || Yp.AllowLoadingUniqueId)) {
            const pp = ip;
            switch (Ap) {
              case 0:
                pp[xp] = Dp;
                break;
              case 1:
                cp && (pp[xp] = Yp._TextureParser(Dp, cp, Op));
                break;
              case 2:
                pp[xp] = Ip.d.FromArray(Dp);
                break;
              case 3:
                pp[xp] = Yp._FresnelParametersParser(Dp);
                break;
              case 4:
                pp[xp] = Sp.l.FromArray(Dp);
                break;
              case 5:
                pp[xp] = Sp.o.FromArray(Dp);
                break;
              case 6:
                cp && (pp[xp] = cp.getLastMeshById(Dp));
                break;
              case 7:
                pp[xp] = Yp._ColorCurvesParser(Dp);
                break;
              case 8:
                pp[xp] = Ip.h.FromArray(Dp);
                break;
              case 9:
                pp[xp] = Yp._ImageProcessingConfigurationParser(Dp);
                break;
              case 10:
                pp[xp] = Sp.f.FromArray(Dp);
                break;
              case 11:
                cp && (pp[xp] = cp.getCameraById(Dp));
                break;
              case 12:
                pp[xp] = Sp.b.FromArray(Dp);
                break;
              case 13:
                pp[xp] = Sp.q.FromArray(Dp)
            }
          }
        }
      }
      static Parse(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ip = pp();
        return op.b && op.b.AddTagsTo(Ip, ip.tags), Yp.ParseProperties(ip, Ip, cp, Op), Ip
      }
      static Clone(pp, ip) {
        return Lp(pp, ip, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(pp, ip) {
        return Lp(pp, ip, !0)
      }
    }
    Yp.AllowLoadingUniqueId = !1, Yp._ImageProcessingConfigurationParser = pp => {
      throw (0, Op.o)("ImageProcessingConfiguration")
    }, Yp._FresnelParametersParser = pp => {
      throw (0, Op.o)("FresnelParameters")
    }, Yp._ColorCurvesParser = pp => {
      throw (0, Op.o)("ColorCurves")
    }, Yp._TextureParser = (pp, ip, cp) => {
      throw (0, Op.o)("Texture")
    }
  },
  40159: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(40122);
    class op {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = op.Enabled, this._lastSecValueCount++
      }
      addCount(pp, ip) {
        op.Enabled && (this._current += pp, this._hasCurrentValue = !0, ip && this._fetchResult())
      }
      beginMonitoring() {
        op.Enabled && (this._startMonitoringTime = Op.e.Now)
      }
      endMonitoring() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!op.Enabled) return;
        pp && this.fetchNewFrame();
        const ip = Op.e.Now;
        this._current = ip - this._startMonitoringTime, this._hasCurrentValue = !0, pp && this._fetchResult()
      }
      Rk() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const pp = Op.e.Now;
        pp - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = pp, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    op.Enabled = !0
  },
  40314: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      g: () => Op
    });
    class Op {
      constructor(pp) {
        this.length = 0, this.data = new Array(pp), this._id = Op._GlobalId++
      }
      push(pp) {
        this.data[this.length++] = pp, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(pp) {
        for (let ip = 0; ip < this.length; ip++) pp(this.data[ip])
      }
      sort(pp) {
        this.data.sort(pp)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(pp) {
        if (0 !== pp.length) {
          this.length + pp.length > this.data.length && (this.data.length = 2 * (this.length + pp.length));
          for (let ip = 0; ip < pp.length; ip++) this.data[this.length++] = (pp.data || pp)[ip]
        }
      }
      indexOf(pp) {
        const ip = this.data.indexOf(pp);
        return ip >= this.length ? -1 : ip
      }
      contains(pp) {
        return -1 !== this.indexOf(pp)
      }
    }
    Op._GlobalId = 0;
    class op extends Op {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(pp) {
        super.push(pp), pp.__smartArrayFlags || (pp.__smartArrayFlags = {}), pp.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(pp) {
        return (!pp.__smartArrayFlags || pp.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(pp), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(pp) {
        if (0 !== pp.length) {
          this.length + pp.length > this.data.length && (this.data.length = 2 * (this.length + pp.length));
          for (let ip = 0; ip < pp.length; ip++) {
            const cp = (pp.data || pp)[ip];
            this.pushNoDuplicate(cp)
          }
        }
      }
    }
  },
  40236: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    class Op {
      static Eval(pp, ip) {
        return "true" === (pp = pp.match(/\([^()]*\)/g) ? pp.replace(/\([^()]*\)/g, (pp => (pp = pp.slice(1, pp.length - 1), Op._HandleParenthesisContent(pp, ip)))) : Op._HandleParenthesisContent(pp, ip)) || "false" !== pp && Op.Eval(pp, ip)
      }
      static _HandleParenthesisContent(pp, ip) {
        let cp;
        ip = ip || (pp => "true" === pp);
        const op = pp.split("||");
        for (const Ip in op)
          if (Object.prototype.hasOwnProperty.call(op, Ip)) {
            let pp = Op._SimplifyNegation(op[Ip].trim());
            const Sp = pp.split("&&");
            if (Sp.length > 1)
              for (let op = 0; op < Sp.length; ++op) {
                const Ip = Op._SimplifyNegation(Sp[op].trim());
                if (cp = "true" !== Ip && "false" !== Ip ? "!" === Ip[0] ? !ip(Ip.substring(1)) : ip(Ip) : "true" === Ip, !cp) {
                  pp = "false";
                  break
                }
              }
            if (cp || "true" === pp) {
              cp = !0;
              break
            }
            cp = "true" !== pp && "false" !== pp ? "!" === pp[0] ? !ip(pp.substring(1)) : ip(pp) : "true" === pp
          } return cp ? "true" : "false"
      }
      static _SimplifyNegation(pp) {
        return "!true" === (pp = (pp = pp.replace(/^[\s!]+/, (pp => (pp = pp.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? pp = "false" : "!false" === pp && (pp = "true"), pp
      }
    }
    class op {
      static EnableFor(pp) {
        pp._tags = pp._tags || {}, pp.hasTags = () => op.HasTags(pp), pp.addTags = ip => op.AddTagsTo(pp, ip), pp.removeTags = ip => op.RemoveTagsFrom(pp, ip), pp.matchesTagsQuery = ip => op.MatchesQuery(pp, ip)
      }
      static DisableFor(pp) {
        delete pp._tags, delete pp.hasTags, delete pp.addTags, delete pp.removeTags, delete pp.matchesTagsQuery
      }
      static HasTags(pp) {
        if (!pp._tags) return !1;
        const ip = pp._tags;
        for (const cp in ip)
          if (Object.prototype.hasOwnProperty.call(ip, cp)) return !0;
        return !1
      }
      static GetTags(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!pp._tags) return null;
        if (ip) {
          const ip = [];
          for (const cp in pp._tags) Object.prototype.hasOwnProperty.call(pp._tags, cp) && !0 === pp._tags[cp] && ip.push(cp);
          return ip.join(" ")
        }
        return pp._tags
      }
      static AddTagsTo(pp, ip) {
        if (!ip) return;
        if ("string" !== typeof ip) return;
        const cp = ip.split(" ");
        for (const Op of cp) op._AddTagTo(pp, Op)
      }
      static _AddTagTo(pp, ip) {
        "" !== (ip = ip.trim()) && "true" !== ip && "false" !== ip && (ip.match(/[\s]/) || ip.match(/^([!]|([|]|[&]){2})/) || (op.EnableFor(pp), pp._tags[ip] = !0))
      }
      static RemoveTagsFrom(pp, ip) {
        if (!op.HasTags(pp)) return;
        const cp = ip.split(" ");
        for (const Op in cp) op._RemoveTagFrom(pp, cp[Op])
      }
      static _RemoveTagFrom(pp, ip) {
        delete pp._tags[ip]
      }
      static MatchesQuery(pp, ip) {
        return void 0 === ip || ("" === ip ? op.HasTags(pp) : Op.Eval(ip, (ip => op.HasTags(pp) && pp._tags[ip])))
      }
    }
  },
  40345: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(40342),
      op = cp(37349);
    class Ip {
      constructor(pp) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new op.d, this._scene = pp
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Op.j.PositionKind]) return;
        const pp = [];
        pp.push(1, 1), pp.push(-1, 1), pp.push(-1, -1), pp.push(1, -1), this._vertexBuffers[Op.j.PositionKind] = new Op.j(this._scene.gy(), pp, Op.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const pp = [];
        pp.push(0), pp.push(1), pp.push(2), pp.push(0), pp.push(2), pp.push(3), this._indexBuffer = this._scene.gy().createIndexBuffer(pp)
      }
      _getActivePostProcesses(pp) {
        const ip = this._activePostProcesses;
        ip.length = 0;
        for (let cp = 0; cp < pp.length; cp++) {
          const Op = pp[cp];
          Op && ip.push(Op)
        }
        return ip
      }
      _rebuild() {
        const pp = this._vertexBuffers[Op.j.PositionKind];
        pp && (pp._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = this._scene.activeCamera;
        return !!cp && (ip = ip || this._getActivePostProcesses(cp._postProcesses), !(!ip || 0 === ip.length || !this._scene.postProcessesEnabled) && (ip[0].activate(cp, pp, null !== ip && void 0 !== ip), !0))
      }
      directRender(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : pp.length;
        const xp = this._scene.gy();
        for (let Lp = 0; Lp < Sp; Lp++) {
          Lp < pp.length - 1 ? pp[Lp + 1].activate(this._scene.activeCamera || this._scene, ip?.texture) : (ip ? xp.bindFramebuffer(ip, Op, void 0, void 0, cp, op) : Ip || xp.restoreDefaultFramebuffer(), xp._debugInsertMarker?.(`post process ${pp[Lp].name} output`));
          const Sp = pp[Lp],
            Yp = Sp.apply();
          Yp && (Sp.onBeforeRenderObservable.notifyObservers(Yp), this._prepareBuffers(), xp.bindBuffers(this._vertexBuffers, this._indexBuffer, Yp), xp.drawElementsType(0, 0, 6), Sp.onAfterRenderObservable.notifyObservers(Yp))
        }
        xp.setDepthBuffer(!0), xp.setDepthWrite(!0)
      }
      _finalizeFrame(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ip = this._scene.activeCamera;
        if (!Ip) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Op = Op || this._getActivePostProcesses(Ip._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Sp = this._scene.gy();
        for (let xp = 0, Lp = Op.length; xp < Lp; xp++) {
          const Yp = Op[xp];
          if (xp < Lp - 1 ? Yp._outputTexture = Op[xp + 1].activate(Ip, ip?.texture) : (ip ? (Sp.bindFramebuffer(ip, cp, void 0, void 0, op), Yp._outputTexture = ip) : (Sp.restoreDefaultFramebuffer(), Yp._outputTexture = null), Sp._debugInsertMarker?.(`post process ${Op[xp].name} output`)), pp) break;
          const Dp = Yp.apply();
          Dp && (Yp.onBeforeRenderObservable.notifyObservers(Dp), this._prepareBuffers(), Sp.bindBuffers(this._vertexBuffers, this._indexBuffer, Dp), Sp.drawElementsType(0, 0, 6), Yp.onAfterRenderObservable.notifyObservers(Dp))
        }
        Sp.setDepthBuffer(!0), Sp.setDepthWrite(!0), Sp.setAlphaMode(0)
      }
      dispose() {
        const pp = this._vertexBuffers[Op.j.PositionKind];
        pp && (pp.dispose(), this._vertexBuffers[Op.j.PositionKind] = null), this._indexBuffer && (this._scene.gy()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40365: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp
    });
    var Op = cp(40314),
      op = cp(37320);
    const Ip = [],
      Sp = [];
    let xp = !1;

    function Lp(pp, ip) {
      for (; pp.length < ip;) pp.push(void 0)
    }
    class Yp {
      set opaqueSortCompareFn(pp) {
        this._opaqueSortCompareFn = pp || Yp.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(pp) {
        this._alphaTestSortCompareFn = pp || Yp.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(pp) {
        this._transparentSortCompareFn = pp || Yp.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = pp, this._opaqueSubMeshes = new Op.g(256), this._transparentSubMeshes = new Op.g(256), this._alphaTestSubMeshes = new Op.g(256), this._depthOnlySubMeshes = new Op.g(256), this._particleSystems = new Op.g(256), this._spriteManagers = new Op.g(256), this._empty = !0, this._edgesRenderers = new Op.d(16), this.disableDepthPrePass = !1, this._scene = ip, this.opaqueSortCompareFn = cp, this.alphaTestSortCompareFn = op, this.transparentSortCompareFn = Ip
      }
      render(pp, ip, cp, Op) {
        let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Lp = arguments.length > 8 ? arguments[8] : void 0;
        if (pp) return void pp(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Yp = this._scene.gy();
        op && 0 !== this._depthOnlySubMeshes.length && (Yp.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Yp.setColorWrite(!0)), Ip && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Sp && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Dp = Yp.getStencilBuffer();
        if (Yp.setStencilBuffer(!1), ip && this._renderSprites(), cp && this._renderParticles(Op), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), xp && (Lp || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Yp.setStencilBuffer(Dp), Lp) Lp(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const pp = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            pp.length && this._renderTransparent(pp)
          } else this._renderTransparent(this._transparentSubMeshes);
          Yp.setAlphaMode(0)
        }
        if (Yp.setStencilBuffer(!1), Ip && this._edgesRenderers.length) {
          for (let pp = 0; pp < this._edgesRenderers.length; pp++) this._edgesRenderers.data[pp].render();
          Yp.setAlphaMode(0)
        }
        Yp.setStencilBuffer(Dp)
      }
      _renderOpaqueSorted(pp) {
        Yp._RenderSorted(pp, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(pp) {
        Yp._RenderSorted(pp, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(pp) {
        Yp._RenderSorted(pp, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(pp, ip, cp, Op, Ip) {
        let Dp, Ap = 0;
        const Pp = cp ? cp.globalPosition : Yp._ZeroVector;
        if (Op && ip !== Yp.PainterSortCompare)
          for (; Ap < pp.length; Ap++) Dp = pp.data[Ap], Dp._alphaIndex = Dp.getMesh().alphaIndex, Dp._distanceToCamera = op.o.Distance(Dp.bJ().Yop.centerWorld, Pp);
        const Wp = pp.length;
        let yp = pp.data;
        const Up = Wp !== yp.length && !xp;
        if (Up) {
          for (xp = !0, Lp(Sp, Wp), Ap = 0; Ap < Wp; Ap++) Sp[Ap] = yp[Ap];
          yp = Sp
        } else Wp !== yp.length && (yp = yp.slice(0, Wp));
        try {
          ip && Yp._StableSort(yp, Wp, ip), Yp._DrawSorted(yp, Wp, Op, Ip)
        } finally {
          Up && (Sp.fill(void 0, 0, Wp), xp = !1)
        }
      }
      static _DrawSorted(pp, ip, cp, Op) {
        let op;
        const Ip = pp[0].getMesh().Gl();
        for (let Sp = 0; Sp < ip; Sp++) {
          if (op = pp[Sp], Ip._activeMeshesFrozenButKeepClipping && !op.isInFrustum(Ip._frustumPlanes)) continue;
          let ip = !1;
          if (cp) {
            const pp = op.Ky();
            if (pp && pp.needDepthPrePass && !Op) {
              ip = !0;
              const cp = pp.Gl().gy();
              cp.setColorWrite(!1), cp.setAlphaMode(0), op.render(!1), cp.setColorWrite(!0)
            }
          }
          const xp = op._renderingMesh;
          !ip && xp._renderRunFollower(op, cp) || op.render(cp)
        }
      }
      static _StableSort(pp, ip, cp) {
        for (let Op = 0; Op < ip; Op += 16) {
          const op = Math.min(Op + 16, ip);
          for (let ip = Op + 1; ip < op; ip++) {
            const op = pp[ip];
            let Ip = Op,
              Sp = ip;
            for (; Ip < Sp;) {
              const ip = Ip + Sp >>> 1;
              cp(op, pp[ip]) < 0 ? Sp = ip : Ip = ip + 1
            }
            for (let cp = ip; cp > Ip; cp--) pp[cp] = pp[cp - 1];
            pp[Ip] = op
          }
        }
        if (!(ip <= 16)) {
          Lp(Ip, ip);
          try {
            let Op = pp,
              op = Ip;
            for (let pp = 16; pp < ip; pp *= 2) {
              for (let Sp = 0; Sp < ip; Sp += 2 * pp) {
                const Ip = Math.min(Sp + pp, ip),
                  xp = Math.min(Sp + 2 * pp, ip);
                let Lp = Sp,
                  Yp = Ip,
                  Dp = Sp;
                if (Ip < xp && cp(Op[Ip], Op[Ip - 1]) < 0)
                  for (; Lp < Ip && Yp < xp;) op[Dp++] = cp(Op[Yp], Op[Lp]) < 0 ? Op[Yp++] : Op[Lp++];
                for (; Lp < Ip;) op[Dp++] = Op[Lp++];
                for (; Yp < xp;) op[Dp++] = Op[Yp++]
              }
              const Ip = op;
              op = Op, Op = Ip
            }
            if (Op !== pp)
              for (let cp = 0; cp < ip; cp++) pp[cp] = Op[cp]
          } finally {
            Ip.fill(void 0, 0, ip)
          }
        }
      }
      static defaultTransparentSortCompare(pp, ip) {
        return pp._alphaIndex > ip._alphaIndex ? 1 : pp._alphaIndex < ip._alphaIndex ? -1 : Yp.backToFrontSortCompare(pp, ip)
      }
      static backToFrontSortCompare(pp, ip) {
        return pp._distanceToCamera < ip._distanceToCamera ? 1 : pp._distanceToCamera > ip._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(pp, ip) {
        return pp._distanceToCamera < ip._distanceToCamera ? -1 : pp._distanceToCamera > ip._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(pp, ip) {
        const cp = pp.getMesh(),
          Op = ip.getMesh();
        return cp.material && Op.material ? cp.material.uniqueId - Op.material.uniqueId : cp.uniqueId - Op.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(pp, ip, cp) {
        void 0 === ip && (ip = pp.getMesh()), void 0 === cp && (cp = pp.Ky()), null !== cp && void 0 !== cp && (cp.needAlphaBlendingForMesh(ip) ? this._transparentSubMeshes.push(pp) : cp.needAlphaTestingForMesh(ip) ? (cp.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(pp), this._alphaTestSubMeshes.push(pp)) : (cp.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(pp), this._opaqueSubMeshes.push(pp)), ip._renderingGroup = this, ip._edgesRenderer && ip.isEnabled() && ip.isVisible && ip._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(ip._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(pp) {
        this._spriteManagers.push(pp), this._empty = !1
      }
      dispatchParticles(pp) {
        this._particleSystems.push(pp), this._empty = !1
      }
      _renderParticles(pp) {
        if (0 === this._particleSystems.length) return;
        const ip = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let cp = 0; cp < this._particleSystems.length; cp++) {
          const Op = this._particleSystems.data[cp];
          if (0 === (ip && ip.layerMask & Op.layerMask)) continue;
          const op = Op.emitter;
          op.position && pp && -1 === pp.indexOf(op) || this._scene._activeParticles.addCount(Op.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const pp = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let ip = 0; ip < this._spriteManagers.length; ip++) {
          const cp = this._spriteManagers.data[ip];
          0 !== (pp && pp.layerMask & cp.layerMask) && cp.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Yp._ZeroVector = op.o.Zero()
  },
  40358: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(40365);
    class op {}
    class Ip {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(pp) {
        this._disableDepthPrePass = pp;
        for (const ip of this._renderingGroups) ip.disableDepthPrePass = pp
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(pp) {
        pp !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = pp, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const pp of this._scene.meshes)
          if (pp.Am)
            for (const ip of pp.Am) ip._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const pp of this._scene.spriteManagers) pp._wasDispatched = !1;
        for (const pp of this._scene.Wm) pp._wasDispatched = !1
      }
      constructor(pp) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new op, this._maintainStateBetweenFrames = !1, this._scene = pp;
        for (let ip = Ip.MIN_RENDERINGGROUPS; ip < Ip.MAX_RENDERINGGROUPS; ip++) this._autoClearDepthStencil[ip] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(pp) {
        const ip = pp || 0;
        return this._prepareRenderingGroup(ip), this._renderingGroups[ip]
      }
      _clearDepthStencilBuffer() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.gy().clear(null, !1, pp, ip), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(pp, ip, cp, Op) {
        let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Lp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Yp = arguments.length > 8 ? arguments[8] : void 0,
          Dp = arguments.length > 9 ? arguments[9] : void 0;
        const Ap = this._renderingGroupInfo;
        Ap.pw = this._scene, Ap.camera = this._scene.activeCamera, Ap.renderingManager = this;
        const Pp = Dp ?? this._scene.spriteManagers;
        if (Pp && Op)
          for (let Ip = 0; Ip < Pp.length; Ip++) {
            const pp = Pp[Ip];
            this.dispatchSprites(pp)
          }
        for (let Wp = Ip.MIN_RENDERINGGROUPS; Wp < Ip.MAX_RENDERINGGROUPS; Wp++) {
          this._depthStencilBufferAlreadyCleaned = Wp === Ip.MIN_RENDERINGGROUPS;
          const Dp = this._renderingGroups[Wp];
          if (!Dp || Dp._empty) continue;
          const Pp = 1 << Wp;
          if (Ap.renderingGroupId = Wp, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Ap, Pp), Ip.AUTOCLEAR) {
            const pp = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Wp) : this._autoClearDepthStencil[Wp];
            pp && pp.autoClear && this._clearDepthStencilBuffer(pp.depth, pp.stencil)
          }
          for (let pp = 0, ip = this._scene._beforeRenderingGroupDrawStage; pp < ip.length; pp++) {
            ip[pp].action(Wp)
          }
          Dp.render(pp, Op, cp, ip, op, Sp, xp, Lp, Yp);
          for (let pp = 0, ip = this._scene._afterRenderingGroupDrawStage; pp < ip.length; pp++) {
            ip[pp].action(Wp)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Ap, Pp)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let pp = Ip.MIN_RENDERINGGROUPS; pp < Ip.MAX_RENDERINGGROUPS; pp++) {
            const ip = this._renderingGroups[pp];
            ip && ip.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let pp = Ip.MIN_RENDERINGGROUPS; pp < Ip.MAX_RENDERINGGROUPS; pp++) {
            const ip = this._renderingGroups[pp];
            ip && ip.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let pp = Ip.MIN_RENDERINGGROUPS; pp < Ip.MAX_RENDERINGGROUPS; pp++) {
          const ip = this._renderingGroups[pp];
          ip && ip.dispose()
        }
      }
      _prepareRenderingGroup(pp) {
        void 0 === this._renderingGroups[pp] && (this._renderingGroups[pp] = new Op.b(pp, this._scene, this._customOpaqueSortCompareFn[pp], this._customAlphaTestSortCompareFn[pp], this._customTransparentSortCompareFn[pp]), this._renderingGroups[pp].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(pp) {
        this.maintainStateBetweenFrames && pp._wasDispatched || (pp._wasDispatched = !0, this.getRenderingGroup(pp.renderingGroupId).dispatchSprites(pp))
      }
      dispatchParticles(pp) {
        this.maintainStateBetweenFrames && pp._wasDispatched || (pp._wasDispatched = !0, this.getRenderingGroup(pp.renderingGroupId).dispatchParticles(pp))
      }
      dispatch(pp, ip, cp) {
        void 0 === ip && (ip = pp.getMesh()), this.maintainStateBetweenFrames && pp._wasDispatched || (pp._wasDispatched = !0, this.getRenderingGroup(ip.renderingGroupId).dispatch(pp, ip, cp))
      }
      setRenderingOrder(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[pp] = ip, this._customAlphaTestSortCompareFn[pp] = cp, this._customTransparentSortCompareFn[pp] = Op, this._renderingGroups[pp]) {
          const ip = this._renderingGroups[pp];
          ip.opaqueSortCompareFn = this._customOpaqueSortCompareFn[pp], ip.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[pp], ip.transparentSortCompareFn = this._customTransparentSortCompareFn[pp]
        }
      }
      setRenderingAutoClearDepthStencil(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[pp] = {
          autoClear: ip,
          depth: cp,
          stencil: Op
        }
      }
      getAutoClearDepthStencilSetup(pp) {
        return this._autoClearDepthStencil[pp]
      }
    }
    Ip.MAX_RENDERINGGROUPS = 4, Ip.MIN_RENDERINGGROUPS = 0, Ip.AUTOCLEAR = !0
  },
  40124: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp) {
        this._supportBlendParametersPerTarget = pp, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(pp) {
        this.setAlphaBlend(pp)
      }
      setAlphaBlend(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[ip] !== pp && (pp ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[ip] = pp, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(pp, ip, cp, Op) {
        this._blendConstants[0] === pp && this._blendConstants[1] === ip && this._blendConstants[2] === cp && this._blendConstants[3] === Op || (this._blendConstants[0] = pp, this._blendConstants[1] = ip, this._blendConstants[2] = cp, this._blendConstants[3] = Op, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(pp, ip, cp, Op) {
        const op = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[op + 0] === pp && this._blendFunctionParameters[op + 1] === ip && this._blendFunctionParameters[op + 2] === cp && this._blendFunctionParameters[op + 3] === Op || (this._blendFunctionParameters[op + 0] = pp, this._blendFunctionParameters[op + 1] = ip, this._blendFunctionParameters[op + 2] = cp, this._blendFunctionParameters[op + 3] = Op, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(pp, ip) {
        const cp = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[cp + 0] === pp && this._blendEquationParameters[cp + 1] === ip || (this._blendEquationParameters[cp + 0] = pp, this._blendEquationParameters[cp + 1] = ip, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== ip && (this._numTargets = ip, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== cp && (this._blendDisabledTargetsMask = cp, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (pp.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === ip || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (ip > 1 && 0 !== cp && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & cp) ? pp.enable(pp.BLEND) : pp.disable(pp.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (pp.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (pp.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Op = pp;
        if (this._isAlphaBlendDirty) {
          for (let op = 0; op < ip; op++) {
            const ip = op < this._numTargetEnabled ? op : 0;
            this._alphaBlend[ip] && 0 === (cp & 1 << op) ? Op.enableIndexed(pp.BLEND, op) : Op.disableIndexed(pp.BLEND, op)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let pp = 0; pp < ip; pp++) {
            const ip = pp < this._numTargetEnabled ? 4 * pp : 0;
            Op.blendFuncSeparateIndexed(pp, this._blendFunctionParameters[ip + 0], this._blendFunctionParameters[ip + 1], this._blendFunctionParameters[ip + 2], this._blendFunctionParameters[ip + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let pp = 0; pp < ip; pp++) {
            const ip = pp < this._numTargetEnabled ? 2 * pp : 0;
            Op.blendEquationSeparateIndexed(pp, this._blendEquationParameters[ip + 0], this._blendEquationParameters[ip + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(pp, ip) {
        let cp = 32774;
        switch (pp) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, ip);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, ip);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, ip);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, ip);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, ip);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, ip);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, ip);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, ip);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, ip);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, ip);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ip);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, ip);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, ip);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, ip);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, ip);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, ip);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ip), cp = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ip), cp = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, ip);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, ip)
        }
        this.setAlphaEquationParameters(cp, cp, ip)
      }
    }
  },
  40390: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {}
    Op._IsPickingAvailable = !1
  },
  40296: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dc,
      f: () => Lc
    });
    var Op = cp(40304),
      op = cp(40107),
      Ip = cp(40122),
      Sp = cp(37349),
      xp = cp(40314);
    class Lp {
      constructor() {
        this._count = 0, this._data = {}
      }
      rM(pp) {
        this.clear(), pp.forEach(((pp, ip) => this.add(pp, ip)))
      }
      get(pp) {
        const ip = this._data[pp];
        if (void 0 !== ip) return ip
      }
      getOrAddWithFactory(pp, ip) {
        let cp = this.get(pp);
        return void 0 !== cp || (cp = ip(pp), cp && this.add(pp, cp)), cp
      }
      getOrAdd(pp, ip) {
        const cp = this.get(pp);
        return void 0 !== cp ? cp : (this.add(pp, ip), ip)
      }
      contains(pp) {
        return void 0 !== this._data[pp]
      }
      add(pp, ip) {
        return void 0 === this._data[pp] && (this._data[pp] = ip, ++this._count, !0)
      }
      set(pp, ip) {
        return void 0 !== this._data[pp] && (this._data[pp] = ip, !0)
      }
      getAndRemove(pp) {
        const ip = this.get(pp);
        return void 0 !== ip ? (delete this._data[pp], --this._count, ip) : null
      }
      remove(pp) {
        return !!this.contains(pp) && (delete this._data[pp], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(pp) {
        for (const ip in this._data) {
          pp(ip, this._data[ip])
        }
      }
      first(pp) {
        for (const ip in this._data) {
          const cp = pp(ip, this._data[ip]);
          if (cp) return cp
        }
        return null
      }
    }
    var Yp = cp(40236),
      Dp = cp(37320),
      Ap = cp(40318),
      Pp = cp(40332),
      Wp = cp(40334);
    class yp {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.source = pp, this.pointerX = ip, this.pointerY = cp, this.meshUnderPointer = Op, this.sourceEvent = op, this.additionalData = Ip
      }
      static CreateNew(pp, ip, cp) {
        const Op = pp.Gl();
        return new yp(pp, Op.pointerX, Op.pointerY, Op.meshUnderPointer || pp, ip, cp)
      }
      static CreateNewFromSprite(pp, ip, cp, Op) {
        return new yp(pp, ip.pointerX, ip.pointerY, ip.meshUnderPointer, cp, Op)
      }
      static CreateNewFromScene(pp, ip) {
        return new yp(null, pp.pointerX, pp.pointerY, pp.meshUnderPointer, ip)
      }
      static CreateNewFromPrimitive(pp, ip, cp, Op) {
        return new yp(pp, ip.x, ip.y, null, cp, Op)
      }
    }
    var Up = cp(40345),
      wp = cp(40352),
      vp = cp(40358),
      tp = cp(40368),
      Hp = cp(40071),
      dp = cp(37345),
      ep = cp(40096),
      jp = cp(40372);
    class kp {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const pp in kp.Triggers)
          if (Object.prototype.hasOwnProperty.call(kp.Triggers, pp)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const pp in kp.Triggers)
          if (Object.prototype.hasOwnProperty.call(kp.Triggers, pp)) {
            const ip = parseInt(pp);
            if (ip >= 1 && ip <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(pp) {
        for (const ip in kp.Triggers)
          if (Object.prototype.hasOwnProperty.call(kp.Triggers, ip)) {
            if (parseInt(ip) === pp) return !0
          } return !1
      }
    }
    kp.Triggers = {};
    var mp, Rp, qp, Mp, Cp, Ep, Xp, lp = cp(40380);
    ! function(pp) {
      pp[pp.Generic = 0] = "Generic", pp[pp.Keyboard = 1] = "Keyboard", pp[pp.Mouse = 2] = "Mouse", pp[pp.Touch = 3] = "Touch", pp[pp.DualShock = 4] = "DualShock", pp[pp.Xbox = 5] = "Xbox", pp[pp.Switch = 6] = "Switch", pp[pp.DualSense = 7] = "DualSense"
    }(mp || (mp = {})),
    function(pp) {
      pp[pp.Horizontal = 0] = "Horizontal", pp[pp.Vertical = 1] = "Vertical", pp[pp.LeftClick = 2] = "LeftClick", pp[pp.MiddleClick = 3] = "MiddleClick", pp[pp.RightClick = 4] = "RightClick", pp[pp.BrowserBack = 5] = "BrowserBack", pp[pp.BrowserForward = 6] = "BrowserForward", pp[pp.MouseWheelX = 7] = "MouseWheelX", pp[pp.MouseWheelY = 8] = "MouseWheelY", pp[pp.MouseWheelZ = 9] = "MouseWheelZ", pp[pp.Move = 12] = "Move"
    }(Rp || (Rp = {})),
    function(pp) {
      pp[pp.Horizontal = 0] = "Horizontal", pp[pp.Vertical = 1] = "Vertical", pp[pp.LeftClick = 2] = "LeftClick", pp[pp.MiddleClick = 3] = "MiddleClick", pp[pp.RightClick = 4] = "RightClick", pp[pp.BrowserBack = 5] = "BrowserBack", pp[pp.BrowserForward = 6] = "BrowserForward", pp[pp.MouseWheelX = 7] = "MouseWheelX", pp[pp.MouseWheelY = 8] = "MouseWheelY", pp[pp.MouseWheelZ = 9] = "MouseWheelZ", pp[pp.DeltaHorizontal = 10] = "DeltaHorizontal", pp[pp.DeltaVertical = 11] = "DeltaVertical"
    }(qp || (qp = {})),
    function(pp) {
      pp[pp.Cross = 0] = "Cross", pp[pp.Circle = 1] = "Circle", pp[pp.Square = 2] = "Square", pp[pp.Triangle = 3] = "Triangle", pp[pp.L1 = 4] = "L1", pp[pp.R1 = 5] = "R1", pp[pp.L2 = 6] = "L2", pp[pp.R2 = 7] = "R2", pp[pp.Share = 8] = "Share", pp[pp.Options = 9] = "Options", pp[pp.L3 = 10] = "L3", pp[pp.R3 = 11] = "R3", pp[pp.DPadUp = 12] = "DPadUp", pp[pp.DPadDown = 13] = "DPadDown", pp[pp.DPadLeft = 14] = "DPadLeft", pp[pp.DPadRight = 15] = "DPadRight", pp[pp.Home = 16] = "Home", pp[pp.TouchPad = 17] = "TouchPad", pp[pp.LStickXAxis = 18] = "LStickXAxis", pp[pp.LStickYAxis = 19] = "LStickYAxis", pp[pp.RStickXAxis = 20] = "RStickXAxis", pp[pp.RStickYAxis = 21] = "RStickYAxis"
    }(Mp || (Mp = {})),
    function(pp) {
      pp[pp.Cross = 0] = "Cross", pp[pp.Circle = 1] = "Circle", pp[pp.Square = 2] = "Square", pp[pp.Triangle = 3] = "Triangle", pp[pp.L1 = 4] = "L1", pp[pp.R1 = 5] = "R1", pp[pp.L2 = 6] = "L2", pp[pp.R2 = 7] = "R2", pp[pp.Create = 8] = "Create", pp[pp.Options = 9] = "Options", pp[pp.L3 = 10] = "L3", pp[pp.R3 = 11] = "R3", pp[pp.DPadUp = 12] = "DPadUp", pp[pp.DPadDown = 13] = "DPadDown", pp[pp.DPadLeft = 14] = "DPadLeft", pp[pp.DPadRight = 15] = "DPadRight", pp[pp.Home = 16] = "Home", pp[pp.TouchPad = 17] = "TouchPad", pp[pp.LStickXAxis = 18] = "LStickXAxis", pp[pp.LStickYAxis = 19] = "LStickYAxis", pp[pp.RStickXAxis = 20] = "RStickXAxis", pp[pp.RStickYAxis = 21] = "RStickYAxis"
    }(Cp || (Cp = {})),
    function(pp) {
      pp[pp.A = 0] = "A", pp[pp.B = 1] = "B", pp[pp.X = 2] = "X", pp[pp.Y = 3] = "Y", pp[pp.LB = 4] = "LB", pp[pp.RB = 5] = "RB", pp[pp.LT = 6] = "LT", pp[pp.RT = 7] = "RT", pp[pp.Back = 8] = "Back", pp[pp.Start = 9] = "Start", pp[pp.LS = 10] = "LS", pp[pp.RS = 11] = "RS", pp[pp.DPadUp = 12] = "DPadUp", pp[pp.DPadDown = 13] = "DPadDown", pp[pp.DPadLeft = 14] = "DPadLeft", pp[pp.DPadRight = 15] = "DPadRight", pp[pp.Home = 16] = "Home", pp[pp.LStickXAxis = 17] = "LStickXAxis", pp[pp.LStickYAxis = 18] = "LStickYAxis", pp[pp.RStickXAxis = 19] = "RStickXAxis", pp[pp.RStickYAxis = 20] = "RStickYAxis"
    }(Ep || (Ep = {})),
    function(pp) {
      pp[pp.B = 0] = "B", pp[pp.A = 1] = "A", pp[pp.Y = 2] = "Y", pp[pp.X = 3] = "X", pp[pp.L = 4] = "L", pp[pp.R = 5] = "R", pp[pp.ZL = 6] = "ZL", pp[pp.ZR = 7] = "ZR", pp[pp.Minus = 8] = "Minus", pp[pp.Plus = 9] = "Plus", pp[pp.LS = 10] = "LS", pp[pp.RS = 11] = "RS", pp[pp.DPadUp = 12] = "DPadUp", pp[pp.DPadDown = 13] = "DPadDown", pp[pp.DPadLeft = 14] = "DPadLeft", pp[pp.DPadRight = 15] = "DPadRight", pp[pp.Home = 16] = "Home", pp[pp.Capture = 17] = "Capture", pp[pp.LStickXAxis = 18] = "LStickXAxis", pp[pp.LStickYAxis = 19] = "LStickYAxis", pp[pp.RStickXAxis = 20] = "RStickXAxis", pp[pp.RStickYAxis = 21] = "RStickYAxis"
    }(Xp || (Xp = {}));
    var Qp = cp(40388);
    class Jp {
      static CreateDeviceEvent(pp, ip, cp, Op, op, Ip, Sp) {
        switch (pp) {
          case mp.Keyboard:
            return this._CreateKeyboardEvent(cp, Op, op, Ip);
          case mp.Mouse:
            if (cp === Rp.MouseWheelX || cp === Rp.MouseWheelY || cp === Rp.MouseWheelZ) return this._CreateWheelEvent(pp, ip, cp, Op, op, Ip);
          case mp.Touch:
            return this._CreatePointerEvent(pp, ip, cp, Op, op, Ip, Sp);
          default:
            throw `Unable to generate event for device ${mp[pp]}`
        }
      }
      static _CreatePointerEvent(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = this._CreateMouseEvent(pp, ip, cp, Op, op, Ip);
        pp === mp.Mouse ? (xp.deviceType = mp.Mouse, xp.pointerId = 1, xp.pointerType = "mouse") : (xp.deviceType = mp.Touch, xp.pointerId = Sp ?? ip, xp.pointerType = "touch");
        let Lp = 0;
        return Lp += op.pollInput(pp, ip, Rp.LeftClick), Lp += 2 * op.pollInput(pp, ip, Rp.RightClick), Lp += 4 * op.pollInput(pp, ip, Rp.MiddleClick), xp.buttons = Lp, cp === Rp.Move ? xp.type = "pointermove" : cp >= Rp.LeftClick && cp <= Rp.RightClick && (xp.type = 1 === Op ? "pointerdown" : "pointerup", xp.button = cp - 2), xp
      }
      static _CreateWheelEvent(pp, ip, cp, Op, op, Ip) {
        const Sp = this._CreateMouseEvent(pp, ip, cp, Op, op, Ip);
        switch (Sp.pointerId = 1, Sp.type = "wheel", Sp.deltaMode = Qp.c.DOM_DELTA_PIXEL, Sp.deltaX = 0, Sp.deltaY = 0, Sp.deltaZ = 0, cp) {
          case Rp.MouseWheelX:
            Sp.deltaX = Op;
            break;
          case Rp.MouseWheelY:
            Sp.deltaY = Op;
            break;
          case Rp.MouseWheelZ:
            Sp.deltaZ = Op
        }
        return Sp
      }
      static _CreateMouseEvent(pp, ip, cp, Op, op, Ip) {
        const Sp = this._CreateEvent(Ip),
          xp = op.pollInput(pp, ip, Rp.Horizontal),
          Lp = op.pollInput(pp, ip, Rp.Vertical);
        return Ip ? (Sp.movementX = 0, Sp.movementY = 0, Sp.offsetX = Sp.movementX - Ip.getBoundingClientRect().x, Sp.offsetY = Sp.movementY - Ip.getBoundingClientRect().y) : (Sp.movementX = op.pollInput(pp, ip, 10), Sp.movementY = op.pollInput(pp, ip, 11), Sp.offsetX = 0, Sp.offsetY = 0), this._CheckNonCharacterKeys(Sp, op), Sp.clientX = xp, Sp.clientY = Lp, Sp.x = xp, Sp.y = Lp, Sp.deviceType = pp, Sp.deviceSlot = ip, Sp.inputIndex = cp, Sp
      }
      static _CreateKeyboardEvent(pp, ip, cp, Op) {
        const op = this._CreateEvent(Op);
        return this._CheckNonCharacterKeys(op, cp), op.deviceType = mp.Keyboard, op.deviceSlot = 0, op.inputIndex = pp, op.type = 1 === ip ? "keydown" : "keyup", op.key = String.fromCharCode(pp), op.keyCode = pp, op
      }
      static _CheckNonCharacterKeys(pp, ip) {
        const cp = ip.isDeviceAvailable(mp.Keyboard),
          Op = cp && 1 === ip.pollInput(mp.Keyboard, 0, 18),
          op = cp && 1 === ip.pollInput(mp.Keyboard, 0, 17),
          Ip = cp && (1 === ip.pollInput(mp.Keyboard, 0, 91) || 1 === ip.pollInput(mp.Keyboard, 0, 92) || 1 === ip.pollInput(mp.Keyboard, 0, 93)),
          Sp = cp && 1 === ip.pollInput(mp.Keyboard, 0, 16);
        pp.altKey = Op, pp.ctrlKey = op, pp.metaKey = Ip, pp.shiftKey = Sp
      }
      static _CreateEvent(pp) {
        const ip = {
          preventDefault: () => {}
        };
        return ip.target = pp, ip
      }
    }
    class Bp {
      constructor(pp, ip, cp) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(pp, ip, ((pp, ip, Op, op) => {
          const Ip = Jp.CreateDeviceEvent(pp, ip, Op, op, this);
          cp(pp, ip, Ip)
        })) : this._createDummyNativeInput()
      }
      pollInput(pp, ip, cp) {
        return this._nativeInput.pollInput(pp, ip, cp)
      }
      isDeviceAvailable(pp) {
        return pp === mp.Mouse || pp === mp.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const Np = Object.keys(Rp).length / 2;
    class Tp {
      constructor(pp, ip, cp, op) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Op.i.IsSafari(), this._usingMacOs = (0, Hp.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = pp => {}, this._keyboardUpEvent = pp => {}, this._keyboardBlurEvent = pp => {}, this._pointerMoveEvent = pp => {}, this._pointerDownEvent = pp => {}, this._pointerUpEvent = pp => {}, this._pointerCancelEvent = pp => {}, this._pointerCancelTouch = pp => {}, this._pointerLeaveEvent = pp => {}, this._pointerWheelEvent = pp => {}, this._pointerBlurEvent = pp => {}, this._pointerMacOsChromeOutEvent = pp => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Hp.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Hp.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = pp => {}, this._gamepadDisconnectedEvent = pp => {}, this._eventPrefix = Op.i.GetPointerPrefix(pp), this._engine = pp, this._onDeviceConnected = ip, this._onDeviceDisconnected = cp, this._onInputChanged = op, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(pp, ip, cp) {
        const op = this._inputs[pp][ip];
        if (!op) throw `Unable to find device ${mp[pp]}`;
        pp >= mp.DualShock && pp <= mp.DualSense && this._updateDevice(pp, ip, cp);
        const Ip = op[cp];
        if (void 0 === Ip) throw `Unable to find input ${cp} for device ${mp[pp]} in slot ${ip}`;
        return cp === Rp.Move && Op.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Ip
      }
      isDeviceAvailable(pp) {
        return void 0 !== this._inputs[pp]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const pp = this?._engine.getInputElement();
        if (pp && (!this._eventsAttached || this._elementToAttachTo !== pp)) {
          if (this._disableEvents(), this._inputs)
            for (const pp of this._inputs)
              if (pp)
                for (const ip in pp) {
                  const cp = pp[+ip];
                  if (cp)
                    for (let pp = 0; pp < cp.length; pp++) cp[pp] = 0
                }
          this._elementToAttachTo = pp, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const pp = navigator.getGamepads();
          for (const ip of pp) ip && this._addGamePad(ip)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(mp.Mouse, 0, 0, 0)
      }
      _addGamePad(pp) {
        const ip = this._getGamepadDeviceType(pp.id),
          cp = pp.index;
        this._gamepads = this._gamepads || new Array(pp.index + 1), this._registerDevice(ip, cp, pp.buttons.length + pp.axes.length), this._gamepads[cp] = ip
      }
      _addPointerDevice(pp, ip, cp, Op) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(pp, ip, Np);
        const op = this._inputs[pp][ip];
        op[0] = cp, op[1] = Op
      }
      _registerDevice(pp, ip, cp) {
        if (void 0 === ip) throw `Unable to register device ${mp[pp]} to undefined slot.`;
        if (this._inputs[pp] || (this._inputs[pp] = {}), !this._inputs[pp][ip]) {
          const Op = new Array(cp);
          Op.fill(0), this._inputs[pp][ip] = Op, this._onDeviceConnected(pp, ip)
        }
      }
      _unregisterDevice(pp, ip) {
        this._inputs[pp][ip] && (delete this._inputs[pp][ip], this._onDeviceDisconnected(pp, ip))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = pp => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(mp.Keyboard, 0, 255));
          const ip = this._inputs[mp.Keyboard][0];
          if (ip) {
            ip[pp.keyCode] = 1;
            const cp = pp;
            cp.inputIndex = pp.keyCode, this._usingMacOs && pp.metaKey && "Meta" !== pp.key && (this._metaKeys.includes(pp.keyCode) || this._metaKeys.push(pp.keyCode)), this._onInputChanged(mp.Keyboard, 0, cp)
          }
        }, this._keyboardUpEvent = pp => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(mp.Keyboard, 0, 255));
          const ip = this._inputs[mp.Keyboard][0];
          if (ip) {
            ip[pp.keyCode] = 0;
            const cp = pp;
            if (cp.inputIndex = pp.keyCode, this._usingMacOs && "Meta" === pp.key && this._metaKeys.length > 0) {
              for (const pp of this._metaKeys) {
                const cp = Jp.CreateDeviceEvent(mp.Keyboard, 0, pp, 0, this, this._elementToAttachTo);
                ip[pp] = 0, this._onInputChanged(mp.Keyboard, 0, cp)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(mp.Keyboard, 0, cp)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const pp = this._inputs[mp.Keyboard][0];
            for (let ip = 0; ip < pp.length; ip++)
              if (0 !== pp[ip]) {
                pp[ip] = 0;
                const cp = Jp.CreateDeviceEvent(mp.Keyboard, 0, ip, 0, this, this._elementToAttachTo);
                this._onInputChanged(mp.Keyboard, 0, cp)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Hp.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Op = 0; Op < this._maxTouchPoints; Op++) this._activeTouchIds[Op] = -1;
        this._pointerMoveEvent = pp => {
          const ip = this._getPointerType(pp);
          let cp = ip === mp.Mouse ? 0 : this._activeTouchIds.indexOf(pp.pointerId);
          if (ip === mp.Touch && -1 === cp) {
            if (0 === pp.buttons) return;
            const op = this._activeTouchIds.indexOf(-1);
            if (!(op >= 0)) return void Op.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            cp = op, this._activeTouchIds[op] = pp.pointerId, this._onDeviceConnected(ip, cp)
          }
          this._inputs[ip] || (this._inputs[ip] = {}), this._inputs[ip][cp] || this._addPointerDevice(ip, cp, pp.clientX, pp.clientY);
          const op = this._inputs[ip][cp];
          if (op) {
            const Op = pp;
            Op.inputIndex = Rp.Move, op[Rp.Horizontal] = pp.clientX, op[Rp.Vertical] = pp.clientY, ip === mp.Touch && 0 === op[Rp.LeftClick] && (op[Rp.LeftClick] = 1), void 0 === pp.pointerId && (pp.pointerId = this._mouseId), this._onInputChanged(ip, cp, Op), this._usingSafari || -1 === pp.button || (Op.inputIndex = pp.button + 2, op[pp.button + 2] = op[pp.button + 2] ? 0 : 1, this._onInputChanged(ip, cp, Op))
          }
        }, this._pointerDownEvent = pp => {
          const ip = this._getPointerType(pp);
          let cp = ip === mp.Mouse ? 0 : pp.pointerId;
          if (ip === mp.Touch) {
            let ip = this._activeTouchIds.indexOf(pp.pointerId);
            if (-1 === ip && (ip = this._activeTouchIds.indexOf(-1)), !(ip >= 0)) return void Op.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            cp = ip, this._activeTouchIds[ip] = pp.pointerId
          }
          this._inputs[ip] || (this._inputs[ip] = {}), this._inputs[ip][cp] ? ip === mp.Touch && this._onDeviceConnected(ip, cp) : this._addPointerDevice(ip, cp, pp.clientX, pp.clientY);
          const op = this._inputs[ip][cp];
          if (op) {
            const Op = op[Rp.Horizontal],
              Sp = op[Rp.Vertical];
            if (ip === mp.Mouse) {
              if (void 0 === pp.pointerId && (pp.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Ip) {}
            } else if (pp.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(pp.pointerId)
            } catch (Ip) {}
            op[Rp.Horizontal] = pp.clientX, op[Rp.Vertical] = pp.clientY, op[pp.button + 2] = 1;
            const xp = pp;
            xp.inputIndex = pp.button + 2, this._onInputChanged(ip, cp, xp), Op === pp.clientX && Sp === pp.clientY || (xp.inputIndex = Rp.Move, this._onInputChanged(ip, cp, xp))
          }
        }, this._pointerUpEvent = pp => {
          const ip = this._getPointerType(pp),
            cp = ip === mp.Mouse ? 0 : this._activeTouchIds.indexOf(pp.pointerId);
          if (ip === mp.Touch) {
            if (-1 === cp) return;
            this._activeTouchIds[cp] = -1
          }
          const Op = this._inputs[ip]?.[cp];
          let op = pp.button,
            Ip = Op && 0 !== Op[op + 2];
          if (!Ip && this._isUsingFirefox && this._usingMacOs && Op && (op = 2 === op ? 0 : 2, Ip = 0 !== Op[op + 2]), Ip) {
            const Ip = Op[Rp.Horizontal],
              Sp = Op[Rp.Vertical];
            Op[Rp.Horizontal] = pp.clientX, Op[Rp.Vertical] = pp.clientY, Op[op + 2] = 0;
            const xp = pp;
            void 0 === pp.pointerId && (pp.pointerId = this._mouseId), Ip === pp.clientX && Sp === pp.clientY || (xp.inputIndex = Rp.Move, this._onInputChanged(ip, cp, xp)), xp.inputIndex = op + 2, ip === mp.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : pp.pointerId && this._elementToAttachTo.hasPointerCapture?.(pp.pointerId) && this._elementToAttachTo.releasePointerCapture(pp.pointerId), this._onInputChanged(ip, cp, xp), ip === mp.Touch && this._onDeviceDisconnected(ip, cp)
          }
        }, this._pointerCancelTouch = pp => {
          const ip = this._activeTouchIds.indexOf(pp);
          if (-1 === ip) return;
          this._elementToAttachTo.hasPointerCapture?.(pp) && this._elementToAttachTo.releasePointerCapture(pp), this._inputs[mp.Touch][ip][Rp.LeftClick] = 0;
          const cp = Jp.CreateDeviceEvent(mp.Touch, ip, Rp.LeftClick, 0, this, this._elementToAttachTo, pp);
          this._onInputChanged(mp.Touch, ip, cp), this._activeTouchIds[ip] = -1, this._onDeviceDisconnected(mp.Touch, ip)
        }, this._pointerCancelEvent = pp => {
          if ("mouse" === pp.pointerType) {
            const pp = this._inputs[mp.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ip = Rp.LeftClick; ip <= Rp.BrowserForward; ip++)
              if (1 === pp[ip]) {
                pp[ip] = 0;
                const cp = Jp.CreateDeviceEvent(mp.Mouse, 0, ip, 0, this, this._elementToAttachTo);
                this._onInputChanged(mp.Mouse, 0, cp)
              }
          } else this._pointerCancelTouch(pp.pointerId)
        }, this._pointerLeaveEvent = pp => {
          "pen" === pp.pointerType && this._pointerCancelTouch(pp.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let pp = !1;
        const ip = function() {};
        try {
          const cp = Object.defineProperty({}, "passive", {
            get: function() {
              pp = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", ip, cp), this._elementToAttachTo.removeEventListener("test", ip, cp)
        } catch (cp) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(mp.Mouse)) {
            const pp = this._inputs[mp.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ip = Rp.LeftClick; ip <= Rp.BrowserForward; ip++)
              if (1 === pp[ip]) {
                pp[ip] = 0;
                const cp = Jp.CreateDeviceEvent(mp.Mouse, 0, ip, 0, this, this._elementToAttachTo);
                this._onInputChanged(mp.Mouse, 0, cp)
              }
          }
          if (this.isDeviceAvailable(mp.Touch)) {
            const pp = this._inputs[mp.Touch];
            for (let ip = 0; ip < this._activeTouchIds.length; ip++) {
              const cp = this._activeTouchIds[ip];
              if (this._elementToAttachTo.hasPointerCapture?.(cp) && this._elementToAttachTo.releasePointerCapture(cp), -1 !== cp && 1 === pp[ip]?.[Rp.LeftClick]) {
                pp[ip][Rp.LeftClick] = 0;
                const Op = Jp.CreateDeviceEvent(mp.Touch, ip, Rp.LeftClick, 0, this, this._elementToAttachTo, cp);
                this._onInputChanged(mp.Touch, ip, Op), this._activeTouchIds[ip] = -1, this._onDeviceDisconnected(mp.Touch, ip)
              }
            }
          }
        }, this._pointerWheelEvent = pp => {
          const ip = mp.Mouse;
          this._inputs[ip] || (this._inputs[ip] = []), this._inputs[ip][0] || (this._pointerActive = !0, this._registerDevice(ip, 0, Np));
          const cp = this._inputs[ip][0];
          if (cp) {
            cp[Rp.MouseWheelX] = pp.deltaX || 0, cp[Rp.MouseWheelY] = pp.deltaY || pp.wheelDelta || 0, cp[Rp.MouseWheelZ] = pp.deltaZ || 0;
            const Op = pp;
            void 0 === pp.pointerId && (pp.pointerId = this._mouseId), 0 !== cp[Rp.MouseWheelX] && (Op.inputIndex = Rp.MouseWheelX, this._onInputChanged(ip, 0, Op)), 0 !== cp[Rp.MouseWheelY] && (Op.inputIndex = Rp.MouseWheelY, this._onInputChanged(ip, 0, Op)), 0 !== cp[Rp.MouseWheelZ] && (Op.inputIndex = Rp.MouseWheelZ, this._onInputChanged(ip, 0, Op))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = pp => {
          pp.buttons > 1 && this._pointerCancelEvent(pp)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!pp && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(mp.Mouse)) {
            const pp = this._inputs[mp.Mouse][0];
            pp[Rp.MouseWheelX] = 0, pp[Rp.MouseWheelY] = 0, pp[Rp.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = pp => {
          this._addGamePad(pp.gamepad)
        }, this._gamepadDisconnectedEvent = pp => {
          if (this._gamepads) {
            const ip = this._getGamepadDeviceType(pp.gamepad.id),
              cp = pp.gamepad.index;
            this._unregisterDevice(ip, cp), delete this._gamepads[cp]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(pp, ip, cp) {
        const Op = navigator.getGamepads()[ip];
        if (Op && pp === this._gamepads[ip]) {
          const op = this._inputs[pp][ip];
          cp >= Op.buttons.length ? op[cp] = Op.axes[cp - Op.buttons.length].valueOf() : op[cp] = Op.buttons[cp].value
        }
      }
      _getGamepadDeviceType(pp) {
        return -1 !== pp.indexOf("054c") ? -1 !== pp.indexOf("0ce6") ? mp.DualSense : mp.DualShock : -1 !== pp.indexOf("Xbox One") || -1 !== pp.search("Xbox 360") || -1 !== pp.search("xinput") || -1 !== pp.indexOf("045e") && -1 === pp.indexOf("Surface Dock") ? mp.Xbox : -1 !== pp.indexOf("057e") ? mp.Switch : mp.Generic
      }
      _getPointerType(pp) {
        let ip = mp.Mouse;
        return ("touch" === pp.pointerType || "pen" === pp.pointerType || pp.touches) && (ip = mp.Touch), ip
      }
    }
    class fp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = ip, this.deviceSlot = cp, this.onInputChangedObservable = new Sp.d, this._deviceInputSystem = pp
      }
      getInput(pp) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, pp)
      }
    }
    class bp {
      constructor(pp) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = pp => {
          for (let ip = 0; ip < this._devices.length; ip++) {
            const cp = this._devices[ip];
            for (const Op in cp) {
              const cp = +Op;
              pp._addDevice(new fp(this._deviceInputSystem, ip, cp))
            }
          }
          this._registeredManagers.push(pp)
        }, this.unregisterManager = pp => {
          const ip = this._registeredManagers.indexOf(pp);
          ip > -1 && this._registeredManagers.splice(ip, 1)
        };
        const ip = Object.keys(mp).length / 2;
        this._devices = new Array(ip);
        const cp = (pp, ip) => {
            this._devices[pp] || (this._devices[pp] = new Array), this._devices[pp][ip] || (this._devices[pp][ip] = ip);
            for (const cp of this._registeredManagers) {
              const Op = new fp(this._deviceInputSystem, pp, ip);
              cp._addDevice(Op)
            }
          },
          Op = (pp, ip) => {
            this._devices[pp]?.[ip] && delete this._devices[pp][ip];
            for (const cp of this._registeredManagers) cp._removeDevice(pp, ip)
          },
          op = (pp, ip, cp) => {
            if (cp)
              for (const Op of this._registeredManagers) Op._onInputChanged(pp, ip, cp)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Bp(cp, Op, op) : this._deviceInputSystem = new Tp(pp, cp, Op, op)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class hp {
      getDeviceSource(pp, ip) {
        if (void 0 === ip) {
          if (void 0 === this._firstDevice[pp]) return null;
          ip = this._firstDevice[pp]
        }
        return this._devices[pp] && void 0 !== this._devices[pp][ip] ? this._devices[pp][ip] : null
      }
      getDeviceSources(pp) {
        return this._devices[pp] ? this._devices[pp].filter((pp => !!pp)) : []
      }
      constructor(pp) {
        const ip = Object.keys(mp).length / 2;
        this._devices = new Array(ip), this._firstDevice = new Array(ip), this._engine = pp, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new bp(pp)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Sp.d((pp => {
          for (const ip of this._devices)
            if (ip)
              for (const cp of ip) cp && this.onDeviceConnectedObservable.notifyObserver(pp, cp)
        })), this.onDeviceDisconnectedObservable = new Sp.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = pp.Kl.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Kl.remove(this._onDisposeObserver)
      }
      _addDevice(pp) {
        this._devices[pp.deviceType] || (this._devices[pp.deviceType] = []), this._devices[pp.deviceType][pp.deviceSlot] || (this._devices[pp.deviceType][pp.deviceSlot] = pp, this._updateFirstDevices(pp.deviceType)), this.onDeviceConnectedObservable.notifyObservers(pp)
      }
      _removeDevice(pp, ip) {
        const cp = this._devices[pp]?.[ip];
        this.onDeviceDisconnectedObservable.notifyObservers(cp), this._devices[pp]?.[ip] && delete this._devices[pp][ip], this._updateFirstDevices(pp)
      }
      _onInputChanged(pp, ip, cp) {
        this._devices[pp]?.[ip]?.onInputChangedObservable.notifyObservers(cp)
      }
      _updateFirstDevices(pp) {
        switch (pp) {
          case mp.Keyboard:
          case mp.Mouse:
            this._firstDevice[pp] = 0;
            break;
          case mp.Touch:
          case mp.DualSense:
          case mp.DualShock:
          case mp.Xbox:
          case mp.Switch:
          case mp.Generic: {
            delete this._firstDevice[pp];
            const ip = this._devices[pp];
            if (ip)
              for (let cp = 0; cp < ip.length; cp++)
                if (ip[cp]) {
                  this._firstDevice[pp] = cp;
                  break
                } break
          }
        }
      }
    }
    var ap = cp(40390);
    class np {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get xA() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(pp) {
        this._singleClick = pp
      }
      set xA(pp) {
        this._doubleClick = pp
      }
      set hasSwiped(pp) {
        this._hasSwiped = pp
      }
      set ignore(pp) {
        this._ignore = pp
      }
    }
    class Fp {
      constructor(pp) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Dp.l(0, 0), this._previousStartingPointerPosition = new Dp.l(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = pp || dp.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(pp) {
        return this._meshUnderPointerId[pp] || null
      }
      get unTranslatedPointer() {
        return new Dp.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(pp) {
        this._pointerX = pp
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(pp) {
        this._pointerY = pp
      }
      _updatePointerPosition(pp) {
        const ip = this._scene.gy().getInputElementClientRect();
        ip && (this._pointerX = pp.clientX - ip.left, this._pointerY = pp.clientY - ip.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(pp, ip) {
        const cp = this._scene,
          Op = cp.gy(),
          op = Op.getInputElement();
        op && (op.tabIndex = Op.canvasTabIndex, cp.doNotHandleCursors || (op.style.cursor = cp.defaultCursor)), this._setCursorAndPointerOverMesh(pp, ip, cp);
        for (const xp of cp._pointerMoveStage) {
          pp = pp || this._pickMove(ip);
          const cp = !!pp?.pickedMesh;
          pp = xp.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pp, cp, op)
        }
        const Ip = ip.inputIndex >= Rp.MouseWheelX && ip.inputIndex <= Rp.MouseWheelZ ? jp.d.POINTERWHEEL : jp.d.POINTERMOVE;
        let Sp;
        cp.onPointerMove && (pp = pp || this._pickMove(ip), cp.onPointerMove(ip, pp, Ip)), pp ? (Sp = new jp.i(Ip, ip, pp), this._setRayOnPointerInfo(pp, ip)) : (Sp = new jp.i(Ip, ip, null, this), this._movePointerInfo = Sp), cp.onPointerObservable.hasObservers() && cp.onPointerObservable.notifyObservers(Sp, Ip)
      }
      _setRayOnPointerInfo(pp, ip) {
        const cp = this._scene;
        pp && ap.c._IsPickingAvailable && (pp.ray || (pp.ray = cp.createPickingRay(ip.offsetX, ip.offsetY, Dp.b.Identity(), cp.activeCamera)))
      }
      _addCameraPointerObserver(pp, ip) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(pp, ip)
      }
      _removeCameraPointerObserver(pp) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(pp)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(pp, ip, cp) {
        const Op = this._scene,
          op = new jp.h(cp, ip, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return pp && (op.originalPickingInfo = pp, op.ray = pp.ray, "xr-near" === ip.pointerType && pp.originMesh && (op.nearInteractionPickingInfo = pp)), Op.onPrePointerObservable.notifyObservers(op, cp), !!op.skipOnPointerObservable
      }
      _pickMove(pp) {
        const ip = this._scene,
          cp = ip.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, ip.pointerMovePredicate, ip.pointerMoveFastCheck, ip.cameraToUseForPointers, ip.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(cp, pp, ip), cp
      }
      _updateMeshUnderPointer() {
        const pp = this._scene;
        if (!pp.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || pp.skipPointerMovePicking || !pp.cameraToUseForPointers && !pp.activeCamera) return;
        this._ensurePointerMovePredicate();
        const ip = this._pointerX,
          cp = this._pointerY,
          Op = this._unTranslatedPointerX,
          op = this._unTranslatedPointerY;
        for (const Ip of this._latestPointerMoveEvents.values()) this._pointerX = Ip.pointerX, this._pointerY = Ip.pointerY, this._unTranslatedPointerX = Ip.unTranslatedPointerX, this._unTranslatedPointerY = Ip.unTranslatedPointerY, this._pickMove(Ip.event);
        this._pointerX = ip, this._pointerY = cp, this._unTranslatedPointerX = Op, this._unTranslatedPointerY = op
      }
      _ensurePointerMovePredicate() {
        const pp = this._scene;
        pp.pointerMovePredicate || (pp.pointerMovePredicate = ip => (ip._isPointerMovePickable ?? ip.Ow) && ip.isVisible && ip.isReady() && ip.isEnabled() && (ip.enablePointerMoveEvents || pp.constantlyUpdateMeshUnderPointer || null !== ip._getActionManagerForTrigger()) && (!pp.cameraToUseForPointers || 0 !== (pp.cameraToUseForPointers.layerMask & ip.layerMask)))
      }
      _setCursorAndPointerOverMesh(pp, ip, cp) {
        const Op = cp.gy().getInputElement();
        if (pp?.pickedMesh) {
          if (this.setPointerOverMesh(pp.pickedMesh, ip.pointerId, pp, ip), !cp.doNotHandleCursors && Op && this._pointerOverMesh) {
            const pp = this._pointerOverMesh._getActionManagerForTrigger();
            pp && pp.hasPointerTriggers && (Op.style.cursor = pp.hoverCursor || cp.hoverCursor)
          }
        } else this.setPointerOverMesh(null, ip.pointerId, pp, ip)
      }
      simulatePointerMove(pp, ip) {
        const cp = new PointerEvent("pointermove", ip);
        cp.inputIndex = Rp.Move, this._checkPrePointerObservable(pp, cp, jp.d.POINTERMOVE) || this._processPointerMove(pp, cp)
      }
      simulatePointerDown(pp, ip) {
        const cp = new PointerEvent("pointerdown", ip);
        cp.inputIndex = cp.button + 2, this._checkPrePointerObservable(pp, cp, jp.d.POINTERDOWN) || this._processPointerDown(pp, cp)
      }
      _processPointerDown(pp, ip) {
        const cp = this._scene;
        if (pp?.pickedMesh) {
          this._pickedDownMesh = pp.pickedMesh;
          const Op = pp.pickedMesh._getActionManagerForTrigger();
          if (Op) {
            if (Op.hasPickTriggers) switch (Op.processTrigger(5, new yp(pp.pickedMesh, cp.pointerX, cp.pointerY, pp.pickedMesh, ip, pp)), ip.button) {
              case 0:
                Op.processTrigger(2, new yp(pp.pickedMesh, cp.pointerX, cp.pointerY, pp.pickedMesh, ip, pp));
                break;
              case 1:
                Op.processTrigger(4, new yp(pp.pickedMesh, cp.pointerX, cp.pointerY, pp.pickedMesh, ip, pp));
                break;
              case 2:
                Op.processTrigger(3, new yp(pp.pickedMesh, cp.pointerX, cp.pointerY, pp.pickedMesh, ip, pp))
            }
            Op.hasSpecificTrigger(8) && window.setTimeout((() => {
              const pp = cp.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, (pp => pp.Ow && pp.isVisible && pp.isReady() && pp.actionManager && pp.actionManager.hasSpecificTrigger(8) && pp === this._pickedDownMesh), !1, cp.cameraToUseForPointers);
              pp?.pickedMesh && Op && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Fp.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Op.processTrigger(8, yp.CreateNew(pp.pickedMesh, ip)))
            }), Fp.LongPressDelay)
          }
        } else
          for (const Ip of cp._pointerDownStage) pp = Ip.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pp, ip, !1);
        let Op;
        const op = jp.d.POINTERDOWN;
        pp ? (cp.onPointerDown && cp.onPointerDown(ip, pp, op), Op = new jp.i(op, ip, pp), this._setRayOnPointerInfo(pp, ip)) : Op = new jp.i(op, ip, null, this), cp.onPointerObservable.hasObservers() && cp.onPointerObservable.notifyObservers(Op, op)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(pp, ip, cp) {
        const Op = new PointerEvent("pointerup", ip);
        Op.inputIndex = Rp.Move;
        const op = new np;
        cp ? op.xA = !0 : op.singleClick = !0, this._checkPrePointerObservable(pp, Op, jp.d.POINTERUP) || this._processPointerUp(pp, Op, op)
      }
      _processPointerUp(pp, ip, cp) {
        const Op = this._scene;
        if (pp?.pickedMesh) {
          if (this._pickedUpMesh = pp.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Op.onPointerPick && Op.onPointerPick(ip, pp), cp.singleClick && !cp.ignore && Op.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const cp = jp.d.POINTERPICK,
              op = new jp.i(cp, ip, pp);
            this._setRayOnPointerInfo(pp, ip), Op.onPointerObservable.notifyObservers(op, cp)
          }
          const op = pp.pickedMesh._getActionManagerForTrigger();
          if (op && !cp.ignore) {
            op.processTrigger(7, yp.CreateNew(pp.pickedMesh, ip, pp)), !cp.hasSwiped && cp.singleClick && op.processTrigger(1, yp.CreateNew(pp.pickedMesh, ip, pp));
            const Op = pp.pickedMesh._getActionManagerForTrigger(6);
            cp.xA && Op && Op.processTrigger(6, yp.CreateNew(pp.pickedMesh, ip, pp))
          }
        } else if (!cp.ignore)
          for (const op of Op._pointerUpStage) pp = op.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pp, ip, cp.xA);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const pp = this._pickedDownMesh._getActionManagerForTrigger(16);
          pp && pp.processTrigger(16, yp.CreateNew(this._pickedDownMesh, ip))
        }
        if (!cp.ignore) {
          const op = new jp.i(jp.d.POINTERUP, ip, pp);
          if (this._setRayOnPointerInfo(pp, ip), Op.onPointerObservable.notifyObservers(op, jp.d.POINTERUP), Op.onPointerUp && Op.onPointerUp(ip, pp, jp.d.POINTERUP), !cp.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let op = 0;
            if (cp.singleClick ? op = jp.d.POINTERTAP : cp.xA && (op = jp.d.POINTERDOUBLETAP), op) {
              const cp = new jp.i(op, ip, pp);
              Op.onPointerObservable.hasObservers() && Op.onPointerObservable.hasSpecificMask(op) && Op.onPointerObservable.notifyObservers(cp, op)
            }
          }
        }
      }
      isPointerCaptured() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[pp]
      }
      attachControl() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const op = this._scene,
          Ip = op.gy();
        Op || (Op = Ip.getInputElement()), this._alreadyAttached && this.detachControl(), Op && (this._alreadyAttachedTo = Op), this._deviceSourceManager = new hp(Ip), this._initActionManager = pp => {
          if (!this._meshPickProceed) {
            const ip = op.skipPointerUpPicking || 0 === op._registeredActions && !this._checkForPicking() && !op.onPointerUp ? null : op.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, op.pointerUpPredicate, op.pointerUpFastCheck, op.cameraToUseForPointers, op.pointerUpTrianglePredicate);
            this._currentPickResult = ip, ip && (pp = ip.hit && ip.pickedMesh ? ip.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return pp
        }, this._delayedSimpleClick = (pp, ip, cp) => {
          if ((Date.now() - this._previousStartingPointerTime > Fp.DoubleClickDelay && !this._doubleClickOccured || pp !== this._previousButtonPressed) && (this._doubleClickOccured = !1, ip.singleClick = !0, ip.ignore = !1, this._delayedClicks[pp])) {
            const ip = this._delayedClicks[pp].evt,
              cp = jp.d.POINTERTAP,
              Op = new jp.i(cp, ip, this._currentPickResult);
            op.onPointerObservable.hasObservers() && op.onPointerObservable.hasSpecificMask(cp) && op.onPointerObservable.notifyObservers(Op, cp), this._delayedClicks[pp] = null
          }
        }, this._initClickEvent = (pp, ip, cp, Op) => {
          const op = new np;
          this._currentPickResult = null;
          let Ip = null,
            Sp = pp.hasSpecificMask(jp.d.POINTERPICK) || ip.hasSpecificMask(jp.d.POINTERPICK) || pp.hasSpecificMask(jp.d.POINTERTAP) || ip.hasSpecificMask(jp.d.POINTERTAP) || pp.hasSpecificMask(jp.d.POINTERDOUBLETAP) || ip.hasSpecificMask(jp.d.POINTERDOUBLETAP);
          !Sp && kp && (Ip = this._initActionManager(Ip, op), Ip && (Sp = Ip.hasPickTriggers));
          let xp = !1;
          if (Sp = Sp && !this._isMultiTouchGesture, Sp) {
            const Sp = cp.button;
            if (op.hasSwiped = this._isPointerSwiping(), !op.hasSwiped) {
              let Lp = !Fp.ExclusiveDoubleClickMode;
              if (Lp || (Lp = !pp.hasSpecificMask(jp.d.POINTERDOUBLETAP) && !ip.hasSpecificMask(jp.d.POINTERDOUBLETAP), Lp && !kp.HasSpecificTrigger(6) && (Ip = this._initActionManager(Ip, op), Ip && (Lp = !Ip.hasSpecificTrigger(6)))), Lp)(Date.now() - this._previousStartingPointerTime > Fp.DoubleClickDelay || Sp !== this._previousButtonPressed) && (op.singleClick = !0, Op(op, this._currentPickResult), xp = !0);
              else {
                const pp = {
                  evt: cp,
                  clickInfo: op,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Sp, op, Op), Fp.DoubleClickDelay)
                };
                this._delayedClicks[Sp] = pp
              }
              let Yp = pp.hasSpecificMask(jp.d.POINTERDOUBLETAP) || ip.hasSpecificMask(jp.d.POINTERDOUBLETAP);
              !Yp && kp.HasSpecificTrigger(6) && (Ip = this._initActionManager(Ip, op), Ip && (Yp = Ip.hasSpecificTrigger(6))), Yp && (Sp === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Fp.DoubleClickDelay && !this._doubleClickOccured ? (op.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Sp, Fp.ExclusiveDoubleClickMode ? (this._delayedClicks[Sp] && (clearTimeout(this._delayedClicks[Sp]?.timeoutId), this._delayedClicks[Sp] = null), Op(op, this._previousPickResult)) : Op(op, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, op.xA = !0, op.ignore = !1, Fp.ExclusiveDoubleClickMode && this._delayedClicks[Sp] && (clearTimeout(this._delayedClicks[Sp]?.timeoutId), this._delayedClicks[Sp] = null), Op(op, this._currentPickResult)), xp = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Sp))
            }
          }
          xp || Op(op, this._currentPickResult)
        }, this._onPointerMove = pp => {
          if (this._updatePointerPosition(pp), this._latestPointerMoveEvents.set(pp.pointerId, {
              event: pp,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Fp.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Fp.DragMovementThreshold), Ip.isPointerLock && Ip._verifyPointerLock(), this._checkPrePointerObservable(null, pp, pp.inputIndex >= Rp.MouseWheelX && pp.inputIndex <= Rp.MouseWheelZ ? jp.d.POINTERWHEEL : jp.d.POINTERMOVE)) return;
          if (!op.cameraToUseForPointers && !op.activeCamera) return;
          if (op.skipPointerMovePicking) return void this._processPointerMove(new Wp.b, pp);
          this._ensurePointerMovePredicate();
          const ip = op._registeredActions > 0 || op.constantlyUpdateMeshUnderPointer ? this._pickMove(pp) : null;
          this._processPointerMove(ip, pp)
        }, this._onPointerDown = pp => {
          const ip = this._activePointerIds.indexOf(-1);
          if (-1 === ip ? this._activePointerIds.push(pp.pointerId) : this._activePointerIds[ip] = pp.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Fp.ExclusiveDoubleClickMode)
            for (let Op = 0; Op < this._delayedClicks.length; Op++)
              if (this._delayedClicks[Op])
                if (pp.button === Op) clearTimeout(this._delayedClicks[Op]?.timeoutId);
                else {
                  const pp = this._delayedClicks[Op].clickInfo;
                  this._doubleClickOccured = !1, pp.singleClick = !0, pp.ignore = !1;
                  const ip = this._delayedClicks[Op].evt,
                    cp = jp.d.POINTERTAP,
                    Ip = new jp.i(cp, ip, this._currentPickResult);
                  op.onPointerObservable.hasObservers() && op.onPointerObservable.hasSpecificMask(cp) && op.onPointerObservable.notifyObservers(Ip, cp), this._delayedClicks[Op] = null
                } if (this._updatePointerPosition(pp), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = pp.button), op.preventDefaultOnPointerDown && Op && (pp.preventDefault(), Op.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, pp, jp.d.POINTERDOWN)) return;
          if (!op.cameraToUseForPointers && !op.activeCamera) return;
          let cp;
          this._pointerCaptures[pp.pointerId] = !0, op.pointerDownPredicate || (op.pointerDownPredicate = pp => pp.Ow && pp.isVisible && pp.isReady() && pp.isEnabled() && (!op.cameraToUseForPointers || 0 !== (op.cameraToUseForPointers.layerMask & pp.layerMask))), this._pickedDownMesh = null, cp = op.skipPointerDownPicking || 0 === op._registeredActions && !this._checkForPicking() && !op.onPointerDown ? new Wp.b : op.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, op.pointerDownPredicate, op.pointerDownFastCheck, op.cameraToUseForPointers, op.pointerDownTrianglePredicate), this._processPointerDown(cp, pp)
        }, this._onPointerUp = pp => {
          const ip = this._activePointerIds.indexOf(pp.pointerId); - 1 !== ip && (this._activePointerIds[ip] = -1, this._activePointerIdsCount--, "touch" === pp.pointerType && this._latestPointerMoveEvents.delete(pp.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(pp), op.preventDefaultOnPointerUp && Op && (pp.preventDefault(), Op.focus()), this._initClickEvent(op.onPrePointerObservable, op.onPointerObservable, pp, ((ip, cp) => {
            if (op.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !ip.ignore)) {
              if (this._checkPrePointerObservable(null, pp, jp.d.POINTERUP)) return this._swipeButtonPressed === pp.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === pp.buttons && (this._pointerCaptures[pp.pointerId] = !1));
              ip.hasSwiped || (ip.singleClick && op.onPrePointerObservable.hasSpecificMask(jp.d.POINTERTAP) && this._checkPrePointerObservable(null, pp, jp.d.POINTERTAP) && (this._skipPointerTap = !0), ip.xA && op.onPrePointerObservable.hasSpecificMask(jp.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, pp, jp.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[pp.pointerId] ? (0 === pp.buttons && (this._pointerCaptures[pp.pointerId] = !1), (op.cameraToUseForPointers || op.activeCamera) && (op.pointerUpPredicate || (op.pointerUpPredicate = pp => pp.Ow && pp.isVisible && pp.isReady() && pp.isEnabled() && (!op.cameraToUseForPointers || 0 !== (op.cameraToUseForPointers.layerMask & pp.layerMask))), !this._meshPickProceed && (kp && kp.HasTriggers || this._checkForPicking() || op.onPointerUp) && this._initActionManager(null, ip), cp || (cp = this._currentPickResult), this._processPointerUp(cp, pp, ip), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === pp.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === pp.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = pp => {
          const ip = lp.d.KEYDOWN;
          if (op.onPreKeyboardObservable.hasObservers()) {
            const cp = new lp.e(ip, pp);
            if (op.onPreKeyboardObservable.notifyObservers(cp, ip), cp.skipOnKeyboardObservable) return
          }
          if (op.onKeyboardObservable.hasObservers()) {
            const cp = new lp.f(ip, pp);
            op.onKeyboardObservable.notifyObservers(cp, ip)
          }
          op.actionManager && op.actionManager.processTrigger(14, yp.CreateNewFromScene(op, pp))
        }, this._onKeyUp = pp => {
          const ip = lp.d.KEYUP;
          if (op.onPreKeyboardObservable.hasObservers()) {
            const cp = new lp.e(ip, pp);
            if (op.onPreKeyboardObservable.notifyObservers(cp, ip), cp.skipOnKeyboardObservable) return
          }
          if (op.onKeyboardObservable.hasObservers()) {
            const cp = new lp.f(ip, pp);
            op.onKeyboardObservable.notifyObservers(cp, ip)
          }
          op.actionManager && op.actionManager.processTrigger(15, yp.CreateNewFromScene(op, pp))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Op => {
          Op.deviceType === mp.Mouse ? Op.onInputChangedObservable.add((op => {
            this._originMouseEvent = op, op.inputIndex === Rp.LeftClick || op.inputIndex === Rp.MiddleClick || op.inputIndex === Rp.RightClick || op.inputIndex === Rp.BrowserBack || op.inputIndex === Rp.BrowserForward ? ip && 1 === Op.getInput(op.inputIndex) ? this._onPointerDown(op) : pp && 0 === Op.getInput(op.inputIndex) && this._onPointerUp(op) : cp && (op.inputIndex === Rp.Move ? this._onPointerMove(op) : op.inputIndex !== Rp.MouseWheelX && op.inputIndex !== Rp.MouseWheelY && op.inputIndex !== Rp.MouseWheelZ || this._onPointerMove(op))
          })) : Op.deviceType === mp.Touch ? Op.onInputChangedObservable.add((op => {
            op.inputIndex === Rp.LeftClick && (ip && 1 === Op.getInput(op.inputIndex) ? (this._onPointerDown(op), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : pp && 0 === Op.getInput(op.inputIndex) && (this._onPointerUp(op), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), cp && op.inputIndex === Rp.Move && this._onPointerMove(op)
          })) : Op.deviceType === mp.Keyboard && Op.onInputChangedObservable.add((pp => {
            "keydown" === pp.type ? this._onKeyDown(pp) : "keyup" === pp.type && this._onKeyUp(pp)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[ip] === pp && (!pp || !pp._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const op = this._meshUnderPointerId[ip];
        let Ip;
        op && (Ip = op._getActionManagerForTrigger(10), Ip && Ip.processTrigger(10, new yp(op, this._pointerX, this._pointerY, pp, Op, {
          pointerId: ip
        }))), pp ? (this._meshUnderPointerId[ip] = pp, this._pointerOverMesh = pp, Ip = pp._getActionManagerForTrigger(9), Ip && Ip.processTrigger(9, new yp(pp, this._pointerX, this._pointerY, pp, Op, {
          pointerId: ip,
          pickResult: cp
        }))) : (delete this._meshUnderPointerId[ip], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: pp,
          pointerId: ip
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(pp) {
        this._pointerOverMesh === pp && (this._pointerOverMesh = null), this._pickedDownMesh === pp && (this._pickedDownMesh = null), this._pickedUpMesh === pp && (this._pickedUpMesh = null);
        for (const ip in this._meshUnderPointerId) this._meshUnderPointerId[ip] === pp && delete this._meshUnderPointerId[ip]
      }
    }
    Fp.DragMovementThreshold = 10, Fp.LongPressDelay = 500, Fp.DoubleClickDelay = 300, Fp.ExclusiveDoubleClickMode = !1;
    var gp = cp(40159),
      Gp = cp(37487),
      rp = cp(37985);
    class Zp {
      static get UniqueId() {
        const pp = this._UniqueIdCounter;
        return this._UniqueIdCounter++, pp
      }
    }
    Zp._UniqueIdCounter = 1;
    var zp = cp(40257),
      sp = cp(40398),
      Kp = cp(37329);
    class Vp {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di, ei, ui, ji, ki, mi, Ri, qi, Mi, Ci, Ei, Xi, li, Qi, Ji, Bi, Ni, Ti, fi, bi, ai, ni, Fi, gi, Gi, ri, Zi, zi, si, Ki, Vi, pc, ic, cc, Oc = cp(38905),
      oc = cp(37368);
    const Ic = new Dp.q,
      Sc = new Dp.q;
    var xc;
    ! function(pp) {
      pp[pp.BackwardCompatible = 0] = "BackwardCompatible", pp[pp.Intermediate = 1] = "Intermediate", pp[pp.Aggressive = 2] = "Aggressive"
    }(xc || (xc = {}));
    class Lc {
      static DefaultMaterialFactory(pp) {
        throw (0, ep.o)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, ep.o)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(pp) {
        pp !== this._clearColor && (this._clearColor = pp, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(pp) {
        if (pp !== this._performancePriority) {
          switch (this._performancePriority = pp, pp) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(pp)
        }
      }
      set forceWireframe(pp) {
        this._forceWireframe !== pp && (this._forceWireframe = pp, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(pp) {
        this._skipFrustumClipping !== pp && (this._skipFrustumClipping = pp)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(pp) {
        this._forcePointsCloud !== pp && (this._forcePointsCloud = pp, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(pp) {
        this._environmentTexture !== pp && (this._environmentTexture = pp, this.onEnvironmentTextureChangedObservable.notifyObservers(pp), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let pp = [];
        pp = pp.concat(this.meshes), pp = pp.concat(this.lights), pp = pp.concat(this.cameras), pp = pp.concat(this.transformNodes);
        for (const ip of this.skeletons) pp = pp.concat(ip.bones);
        return pp
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(pp) {
        this._animationPropertiesOverride = pp
      }
      set onDispose(pp) {
        this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
      }
      set beforeRender(pp) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), pp && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(pp))
      }
      set afterRender(pp) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), pp && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(pp))
      }
      set beforeCameraRender(pp) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(pp)
      }
      set afterCameraRender(pp) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(pp)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(pp) {
        this._pointerPickingConfiguration.pointerDownPredicate = pp
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(pp) {
        this._pointerPickingConfiguration.pointerUpPredicate = pp
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(pp) {
        this._pointerPickingConfiguration.pointerMovePredicate = pp
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(pp) {
        this._pointerPickingConfiguration.pointerDownFastCheck = pp
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(pp) {
        this._pointerPickingConfiguration.pointerUpFastCheck = pp
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(pp) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = pp
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(pp) {
        this._pointerPickingConfiguration.skipPointerMovePicking = pp
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(pp) {
        this._pointerPickingConfiguration.skipPointerDownPicking = pp
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(pp) {
        this._pointerPickingConfiguration.skipPointerUpPicking = pp
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Fp.DragMovementThreshold
      }
      static set DragMovementThreshold(pp) {
        Fp.DragMovementThreshold = pp
      }
      static get LongPressDelay() {
        return Fp.LongPressDelay
      }
      static set LongPressDelay(pp) {
        Fp.LongPressDelay = pp
      }
      static get DoubleClickDelay() {
        return Fp.DoubleClickDelay
      }
      static set DoubleClickDelay(pp) {
        Fp.DoubleClickDelay = pp
      }
      static get ExclusiveDoubleClickMode() {
        return Fp.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(pp) {
        Fp.ExclusiveDoubleClickMode = pp
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Dp.o.ZeroReadOnly
      }
      bindEyePosition(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = this._eyePosition,
          op = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Ip = this.floatingOriginOffset,
          Sp = Ic.set(Op.x, Op.y, Op.z, op ? -1 : 1),
          xp = Sp.subtractFromFloatsToRef(Ip.x, Ip.y, Ip.z, 0, Sc);
        return pp && (cp ? pp.setFloat3(ip, xp.x, xp.y, xp.z) : pp.setVector4(ip, xp)), Sp
      }
      finalizeSceneUbo() {
        const pp = this.getSceneUniformBuffer(),
          ip = this.bindEyePosition(null),
          cp = this.floatingOriginOffset;
        return pp.updateFloat4("vEyePosition", ip.x - cp.x, ip.y - cp.y, ip.z - cp.z, ip.w), pp.update(), pp
      }
      set useRightHandedSystem(pp) {
        this._useRightHandedSystem !== pp && (this._useRightHandedSystem = pp, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(pp) {
        this._currentStepId = pp
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(pp) {
        this._fogEnabled !== pp && (this._fogEnabled = pp, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(pp) {
        this._fogMode !== pp && (this._fogMode = pp, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(pp) {
        this._shadowsEnabled !== pp && (this._shadowsEnabled = pp, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(pp) {
        this._lightsEnabled !== pp && (this._lightsEnabled = pp, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(pp) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), pp && (this._unObserveActiveCameras = (0, Kp.j)(pp, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = pp
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(pp) {
        pp !== this._activeCamera && (this._activeCamera = pp, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Lc.DefaultMaterialFactory !== Lc._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Lc.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(pp) {
        this._defaultMaterial = pp
      }
      set texturesEnabled(pp) {
        this._texturesEnabled !== pp && (this._texturesEnabled = pp, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(pp) {
        if (this._frameGraph) return this._frameGraph = pp, void(pp || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = pp, pp && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(pp) {
        this._skeletonsEnabled !== pp && (this._skeletonsEnabled = pp, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Lc.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const pp of this._transientComponents) pp.register();
          this._transientComponents.length = 0
        }
      }
      uOp(pp) {
        this._components.push(pp), this._transientComponents.push(pp);
        const ip = pp;
        ip.addFromContainer && ip.serialize && this._serializableComponents.push(ip)
      }
      _getComponent(pp) {
        for (const ip of this._components)
          if (ip.name === pp) return ip;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(pp, ip) {
        this._inputManager = new Fp(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Gp.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new Sp.d, this.ambientColor = new Gp.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Sp.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.Wm = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Kl = new Sp.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Sp.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Sp.d, this.onAfterRenderCameraObservable = new Sp.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Sp.d, this.onAfterAnimationsObservable = new Sp.d, this.onBeforeDrawPhaseObservable = new Sp.d, this.onAfterDrawPhaseObservable = new Sp.d, this.onReadyObservable = new Sp.d, this.onBeforeCameraRenderObservable = new Sp.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Sp.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Sp.d, this.onAfterActiveMeshesEvaluationObservable = new Sp.d, this.onBeforeParticlesRenderingObservable = new Sp.d, this.onAfterParticlesRenderingObservable = new Sp.d, this.onDataLoadedObservable = new Sp.d, this.onNewCameraAddedObservable = new Sp.d, this.onCameraRemovedObservable = new Sp.d, this.onNewLightAddedObservable = new Sp.d, this.onLightRemovedObservable = new Sp.d, this.onNewGeometryAddedObservable = new Sp.d, this.onGeometryRemovedObservable = new Sp.d, this.onNewTransformNodeAddedObservable = new Sp.d, this.onTransformNodeRemovedObservable = new Sp.d, this.onNewMeshAddedObservable = new Sp.d, this.onMeshRemovedObservable = new Sp.d, this.onNewSkeletonAddedObservable = new Sp.d, this.onSkeletonRemovedObservable = new Sp.d, this.onNewParticleSystemAddedObservable = new Sp.d, this.onParticleSystemRemovedObservable = new Sp.d, this.onNewAnimationGroupAddedObservable = new Sp.d, this.onAnimationGroupRemovedObservable = new Sp.d, this.onNewMaterialAddedObservable = new Sp.d, this.onNewMultiMaterialAddedObservable = new Sp.d, this.onMaterialRemovedObservable = new Sp.d, this.onMultiMaterialRemovedObservable = new Sp.d, this.onNewTextureAddedObservable = new Sp.d, this.onTextureRemovedObservable = new Sp.d, this.onNewFrameGraphAddedObservable = new Sp.d, this.onFrameGraphRemovedObservable = new Sp.d, this.onNewObjectRendererAddedObservable = new Sp.d, this.onObjectRendererRemovedObservable = new Sp.d, this.onNewPostProcessAddedObservable = new Sp.d, this.onPostProcessRemovedObservable = new Sp.d, this.onNewEffectLayerAddedObservable = new Sp.d, this.onEffectLayerRemovedObservable = new Sp.d, this.onBeforeRenderTargetsRenderObservable = new Sp.d, this.onAfterRenderTargetsRenderObservable = new Sp.d, this.onBeforeStepObservable = new Sp.d, this.onAfterStepObservable = new Sp.d, this.onActiveCameraChanged = new Sp.d, this.onActiveCamerasChanged = new Sp.d, this.onBeforeRenderingGroupObservable = new Sp.d, this.onAfterRenderingGroupObservable = new Sp.d, this.onMeshImportedObservable = new Sp.d, this.onAnimationFileImportedObservable = new Sp.d, this.onEnvironmentTextureChangedObservable = new Sp.d, this.onMeshUnderPointerUpdatedObservable = new Sp.d, this._registeredForLateAnimationBindings = new xp.d(256), this._pointerPickingConfiguration = new Vp, this.onPrePointerObservable = new Sp.d, this.onPointerObservable = new Sp.d, this.onPreKeyboardObservable = new Sp.d, this.onKeyboardObservable = new Sp.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Lc.FOGMODE_NONE, this.fogColor = new Gp.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.hN = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Dp.o(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new xp.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new gp.b, this._activeIndices = new gp.b, this._activeParticles = new gp.b, this._activeBones = new gp.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new xp.g(256), this._processedMaterials = new xp.g(256), this._renderTargets = new xp.d(256), this._materialsRenderTargets = new xp.d(256), this._activeParticleSystems = new xp.g(256), this._activeSkeletons = new xp.d(32), this._softwareSkinnedMeshes = new xp.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Dp.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = tp.i.Create(), this._beforeClearStage = tp.i.Create(), this._beforeRenderTargetClearStage = tp.i.Create(), this._gatherRenderTargetsStage = tp.i.Create(), this._gatherActiveCameraRenderTargetsStage = tp.i.Create(), this._isReadyForMeshStage = tp.i.Create(), this._beforeEvaluateActiveMeshStage = tp.i.Create(), this._evaluateSubMeshStage = tp.i.Create(), this._preActiveMeshStage = tp.i.Create(), this._cameraDrawRenderTargetStage = tp.i.Create(), this._beforeCameraDrawStage = tp.i.Create(), this._beforeRenderTargetDrawStage = tp.i.Create(), this._beforeRenderingGroupDrawStage = tp.i.Create(), this._beforeRenderingMeshStage = tp.i.Create(), this._afterRenderingMeshStage = tp.i.Create(), this._afterRenderingGroupDrawStage = tp.i.Create(), this._afterCameraDrawStage = tp.i.Create(), this._afterCameraPostProcessStage = tp.i.Create(), this._afterRenderTargetDrawStage = tp.i.Create(), this._afterRenderTargetPostProcessStage = tp.i.Create(), this._afterRenderStage = tp.i.Create(), this._pointerMoveStage = tp.i.Create(), this._pointerDownStage = tp.i.Create(), this._pointerUpStage = tp.i.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Sp.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const cp = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...ip
        };
        this.defaultCameraLayerMask = cp.defaultCameraLayerMask, this.defaultRenderableLayerMask = cp.defaultRenderableLayerMask, pp = this._engine = pp || dp.e.LastCreatedEngine, cp.virtual ? pp._virtualScenes.push(this) : (dp.e._LastCreatedScene = this, pp.scenes.push(this)), (pp.getCreationOptions().useLargeWorldRendering || ip?.useFloatingOrigin) && ((0, wp.g)(), this._floatingOriginScene = this, wp.c.Gl = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new vp.d(this), Up.e && (this.postProcessManager = new Up.e(this)), (0, Hp.j)() && this.attachControl(), this._createUbo(), Ap.c && (this._imageProcessingConfiguration = new Ap.c), this.setDefaultCandidateProviders(), cp.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = cp.useMaterialMeshMap, this.useClonedMeshMap = cp.useClonedMeshMap, ip && ip.virtual || pp.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(pp) {
        return this._defaultSubMeshCandidates.data = pp.Am, this._defaultSubMeshCandidates.length = pp.Am.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = pp => this._getDefaultSubMeshCandidates(pp), this.getIntersectingSubMeshCandidates = (pp, ip) => this._getDefaultSubMeshCandidates(pp), this.getCollidingSubMeshCandidates = (pp, ip) => this._getDefaultSubMeshCandidates(pp)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(pp) {
        this._inputManager.pointerX = pp
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(pp) {
        this._inputManager.pointerY = pp
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== ip || this._cachedMaterial !== pp || this._cachedVisibility !== cp
      }
      gy() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(pp, ip) {
        return this._inputManager.simulatePointerMove(pp, ip), this
      }
      simulatePointerDown(pp, ip) {
        return this._inputManager.simulatePointerDown(pp, ip), this
      }
      simulatePointerUp(pp, ip, cp) {
        return this._inputManager.simulatePointerUp(pp, ip, cp), this
      }
      isPointerCaptured() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(pp)
      }
      attachControl() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(pp, ip, cp)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let pp, ip = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const cp = this.gy(),
          Op = cp.currentRenderPassId;
        cp.currentRenderPassId = this.activeCamera?.renderPassId ?? Op;
        let op = !0;
        for (this._pendingData.length > 0 && (op = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && op && (op = this.depthPeelingRenderer.isReady()), ip && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), pp = 0; pp < this.meshes.length; pp++) {
          const Op = this.meshes[pp];
          if (!Op.Am || 0 === Op.Am.length) continue;
          if (!Op.isReady(!0)) {
            op = !1;
            continue
          }
          const Ip = Op.hasThinInstances || "InstancedMesh" === Op.getClassName() || "InstancedLinesMesh" === Op.getClassName() || cp.getCaps().instancedArrays && Op.instances.length > 0;
          for (let pp = 0, ip = this._isReadyForMeshStage; pp < ip.length; pp++) {
            ip[pp].action(Op, Ip) || (op = !1)
          }
          if (!ip) continue;
          const Sp = Op.material || this.defaultMaterial;
          if (Sp)
            if (Sp._storeEffectOnSubMeshes)
              for (const pp of Op.Am) {
                const ip = pp.Ky();
                ip && ip.hasRenderTargetTextures && null != ip.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ip) && (this._processedMaterials.push(ip), this._materialsRenderTargets.concatWithNoDuplicate(ip.getRenderTargetTextures()))
              } else Sp.hasRenderTargetTextures && null != Sp.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Sp) && (this._processedMaterials.push(Sp), this._materialsRenderTargets.concatWithNoDuplicate(Sp.getRenderTargetTextures()))
        }
        if (ip) {
          for (pp = 0; pp < this._materialsRenderTargets.length; ++pp) {
            this._materialsRenderTargets.data[pp].isReadyForRendering() || (op = !1)
          }
          for (pp = 0; pp < this.customRenderTargets.length; ++pp) {
            this.customRenderTargets[pp].isReadyForRendering() || (op = !1)
          }
        }
        for (pp = 0; pp < this.geometries.length; pp++) {
          2 === this.geometries[pp].delayLoadState && (op = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Ip of this.activeCameras) Ip.isReady(!0) || (op = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (op = !1));
        for (const Ip of this.Wm) Ip.isReady() || (op = !1);
        if (this.proceduralTexturesEnabled)
          for (const Ip of this.proceduralTextures) Ip.isReady() || (op = !1);
        if (this.layers)
          for (const Ip of this.layers) Ip.isReady() || (op = !1);
        if (this.effectLayers)
          for (const Ip of this.effectLayers) Ip.isLayerReady() || (op = !1);
        for (const Ip of this._isReadyChecks) Ip.isReady() || (op = !1);
        return cp.areAllEffectsReady() || (op = !1), cp.currentRenderPassId = Op, op
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(pp) {
        this.onBeforeRenderObservable.add(pp)
      }
      unregisterBeforeRender(pp) {
        this.onBeforeRenderObservable.removeCallback(pp)
      }
      registerAfterRender(pp) {
        this.onAfterRenderObservable.add(pp)
      }
      unregisterAfterRender(pp) {
        this.onAfterRenderObservable.removeCallback(pp)
      }
      _executeOnceBeforeRender(pp) {
        const ip = () => {
          pp(), setTimeout((() => {
            this.unregisterBeforeRender(ip)
          }))
        };
        this.registerBeforeRender(ip)
      }
      executeOnceBeforeRender(pp, ip) {
        void 0 !== ip ? setTimeout((() => {
          this._executeOnceBeforeRender(pp)
        }), ip) : this._executeOnceBeforeRender(pp)
      }
      addPendingData(pp) {
        this._pendingData.push(pp)
      }
      removePendingData(pp) {
        const ip = this.isLoading,
          cp = this._pendingData.indexOf(pp); - 1 !== cp && this._pendingData.splice(cp, 1), ip && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(pp) {
        -1 === this._isReadyChecks.indexOf(pp) && this._isReadyChecks.push(pp)
      }
      removeIsReadyCheck(pp) {
        const ip = this._isReadyChecks.indexOf(pp); - 1 !== ip && this._isReadyChecks.splice(ip, 1)
      }
      executeWhenReady(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(pp), null === this._executeWhenReadyTimeoutId && this._checkIsReady(ip)
      }
      async whenReadyAsync() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((ip => {
          this.executeWhenReady((() => {
            ip()
          }), pp)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Ip.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && Ip.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(pp)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(pp)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Ip.e.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(pp, ip, cp, Op) {
        this._multiviewSceneUboIsActive = !!(cp && Op && this._multiviewSceneUbo), this._viewUpdateFlag === pp.updateFlag && this._projectionUpdateFlag === ip.updateFlag || (this._viewUpdateFlag = pp.updateFlag, this._projectionUpdateFlag = ip.updateFlag, this._viewMatrix = pp, this._projectionMatrix = ip, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Dp.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? rp.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = rp.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(cp, Op) : this._sceneUbo.useUbo && (this._sceneUbo.I3("viewProjection", this._transformMatrix), this._sceneUbo.I3("view", this._viewMatrix), this._sceneUbo.I3("projection", this._projectionMatrix), this._sceneUbo.I3("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(pp, ip) {
        const cp = "boolean" === typeof ip ? ip : ip?.trackUBOsInFrame,
          Op = new Pp.b(this._engine, void 0, !1, pp ?? "pw", void 0, cp);
        return Op.addUniform("viewProjection", 16), Op.addUniform("view", 16), Op.addUniform("projection", 16), Op.addUniform("vEyePosition", 4), Op.addUniform("inverseProjection", 16), Op
      }
      setSceneUniformBuffer(pp) {
        this._sceneUbo = pp, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Dp.o.ZeroReadOnly
      }
      getUniqueId() {
        return Zp.UniqueId
      }
      TOp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(pp), pp._resyncLightSources(), pp.parent || pp._addToSceneRootNodes(), op.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(pp)
          })), ip)) {
          const ip = pp.getChildMeshes();
          for (const pp of ip) this.TOp(pp)
        }
      }
      xJ(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this.meshes.indexOf(pp);
        if (-1 !== cp && (this.meshes.splice(cp, 1), pp.parent || pp._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(pp), this.onMeshRemovedObservable.notifyObservers(pp), ip) {
          const ip = pp.getChildMeshes();
          for (const pp of ip) this.xJ(pp)
        }
        return cp
      }
      addTransformNode(pp) {
        this._blockEntityCollection || pp.Gl() === this && -1 !== pp._indexInSceneTransformNodesArray || (pp._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(pp), pp.parent || pp._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(pp))
      }
      removeTransformNode(pp) {
        const ip = pp._indexInSceneTransformNodesArray;
        if (-1 !== ip) {
          if (ip !== this.transformNodes.length - 1) {
            const pp = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[ip] = pp, pp._indexInSceneTransformNodesArray = ip
          }
          pp._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), pp.parent || pp._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(pp), ip
      }
      removeSkeleton(pp) {
        const ip = this.skeletons.indexOf(pp);
        return -1 !== ip && (this.skeletons.splice(ip, 1), this.onSkeletonRemovedObservable.notifyObservers(pp), this._executeActiveContainerCleanup(this._activeSkeletons)), ip
      }
      removeMorphTargetManager(pp) {
        const ip = this.morphTargetManagers.indexOf(pp);
        return -1 !== ip && this.morphTargetManagers.splice(ip, 1), ip
      }
      removeLight(pp) {
        const ip = this.lights.indexOf(pp);
        if (-1 !== ip) {
          for (const ip of this.meshes) ip._removeLightSource(pp, !1);
          this.lights.splice(ip, 1), this.sortLightsByPriority(), pp.parent || pp._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(pp)
        }
        return ip
      }
      removeCamera(pp) {
        const ip = this.cameras.indexOf(pp);
        if (-1 !== ip && (this.cameras.splice(ip, 1), pp.parent || pp._removeFromSceneRootNodes()), this.activeCameras) {
          const ip = this.activeCameras.indexOf(pp); - 1 !== ip && this.activeCameras.splice(ip, 1)
        }
        return this.activeCamera === pp && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(pp), ip
      }
      removeParticleSystem(pp) {
        const ip = this.Wm.indexOf(pp);
        return -1 !== ip && (this.Wm.splice(ip, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(pp), ip
      }
      removeAnimation(pp) {
        const ip = this.animations.indexOf(pp);
        return -1 !== ip && this.animations.splice(ip, 1), ip
      }
      stopAnimation(pp, ip, cp) {}
      removeAnimationGroup(pp) {
        const ip = this.animationGroups.indexOf(pp);
        return -1 !== ip && this.animationGroups.splice(ip, 1), this.onAnimationGroupRemovedObservable.notifyObservers(pp), ip
      }
      removeMultiMaterial(pp) {
        const ip = this.multiMaterials.indexOf(pp);
        return -1 !== ip && this.multiMaterials.splice(ip, 1), this.onMultiMaterialRemovedObservable.notifyObservers(pp), ip
      }
      removeMaterial(pp) {
        const ip = pp._indexInSceneMaterialArray;
        if (-1 !== ip && ip < this.materials.length) {
          if (ip !== this.materials.length - 1) {
            const pp = this.materials[this.materials.length - 1];
            this.materials[ip] = pp, pp._indexInSceneMaterialArray = ip
          }
          pp._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(pp), ip
      }
      removeActionManager(pp) {
        const ip = this.actionManagers.indexOf(pp);
        return -1 !== ip && this.actionManagers.splice(ip, 1), ip
      }
      removeTexture(pp) {
        const ip = this.textures.indexOf(pp);
        return -1 !== ip && this.textures.splice(ip, 1), this.onTextureRemovedObservable.notifyObservers(pp), ip
      }
      removeFrameGraph(pp) {
        const ip = this.frameGraphs.indexOf(pp);
        return -1 !== ip && this.frameGraphs.splice(ip, 1), this.onFrameGraphRemovedObservable.notifyObservers(pp), ip
      }
      removeObjectRenderer(pp) {
        const ip = this.objectRenderers.indexOf(pp);
        return -1 !== ip && this.objectRenderers.splice(ip, 1), this.onObjectRendererRemovedObservable.notifyObservers(pp), ip
      }
      removePostProcess(pp) {
        const ip = this.postProcesses.indexOf(pp);
        return -1 !== ip && this.postProcesses.splice(ip, 1), this.onPostProcessRemovedObservable.notifyObservers(pp), ip
      }
      removeEffectLayer(pp) {
        const ip = this.effectLayers.indexOf(pp);
        return -1 !== ip && this.effectLayers.splice(ip, 1), this.onEffectLayerRemovedObservable.notifyObservers(pp), ip
      }
      addLight(pp) {
        if (!this._blockEntityCollection) {
          this.lights.push(pp), this.sortLightsByPriority(), pp.parent || pp._addToSceneRootNodes();
          for (const ip of this.meshes) - 1 === ip.lightSources.indexOf(pp) && (ip.lightSources.push(pp), ip._resyncLightSources());
          op.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(pp)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(sp.b.CompareLightsPriority)
      }
      addCamera(pp) {
        this._blockEntityCollection || (this.cameras.push(pp), op.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(pp)
        })), pp.parent || pp._addToSceneRootNodes())
      }
      addSkeleton(pp) {
        this._blockEntityCollection || (this.skeletons.push(pp), op.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(pp)
        })))
      }
      addParticleSystem(pp) {
        this._blockEntityCollection || (this.Wm.push(pp), op.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(pp)
        })))
      }
      addAnimation(pp) {
        this._blockEntityCollection || this.animations.push(pp)
      }
      addAnimationGroup(pp) {
        this._blockEntityCollection || (this.animationGroups.push(pp), op.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(pp)
        })))
      }
      addMultiMaterial(pp) {
        this._blockEntityCollection || (this.multiMaterials.push(pp), op.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(pp)
        })))
      }
      addMaterial(pp) {
        this._blockEntityCollection || pp.Gl() === this && -1 !== pp._indexInSceneMaterialArray || (pp._indexInSceneMaterialArray = this.materials.length, this.materials.push(pp), op.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(pp)
        })))
      }
      addMorphTargetManager(pp) {
        this._blockEntityCollection || this.morphTargetManagers.push(pp)
      }
      addGeometry(pp) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[pp.uniqueId] = this.geometries.length), this.geometries.push(pp))
      }
      addActionManager(pp) {
        this.actionManagers.push(pp)
      }
      addTexture(pp) {
        this._blockEntityCollection || (this.textures.push(pp), this.onNewTextureAddedObservable.notifyObservers(pp))
      }
      addFrameGraph(pp) {
        this.frameGraphs.push(pp), op.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(pp)
        }))
      }
      addObjectRenderer(pp) {
        this.objectRenderers.push(pp), op.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(pp)
        }))
      }
      addPostProcess(pp) {
        this._blockEntityCollection || (this.postProcesses.push(pp), op.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(pp)
        })))
      }
      addEffectLayer(pp) {
        this._blockEntityCollection || (this.effectLayers.push(pp), op.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(pp)
        })))
      }
      switchActiveCamera(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = pp, ip && pp.attachControl())
      }
      setActiveCameraById(pp) {
        const ip = this.getCameraById(pp);
        return ip ? (this.activeCamera = ip, ip) : null
      }
      setActiveCameraByName(pp) {
        const ip = this.getCameraByName(pp);
        return ip ? (this.activeCamera = ip, ip) : null
      }
      getAnimationGroupByName(pp) {
        for (let ip = 0; ip < this.animationGroups.length; ip++)
          if (this.animationGroups[ip].name === pp) return this.animationGroups[ip];
        return null
      }
      _getMaterial(pp, ip) {
        for (let cp = 0; cp < this.materials.length; cp++) {
          const pp = this.materials[cp];
          if (ip(pp)) return pp
        }
        if (pp)
          for (let cp = 0; cp < this.multiMaterials.length; cp++) {
            const pp = this.multiMaterials[cp];
            if (ip(pp)) return pp
          }
        return null
      }
      getMaterialByUniqueID(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(pp, ip)
      }
      getMaterialByUniqueId(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ip, (ip => ip.uniqueId === pp))
      }
      getMaterialById(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ip, (ip => ip.id === pp))
      }
      getMaterialByName(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ip, (ip => ip.name === pp))
      }
      getLastMaterialById(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let cp = this.materials.length - 1; cp >= 0; cp--)
          if (this.materials[cp].id === pp) return this.materials[cp];
        if (ip)
          for (let cp = this.multiMaterials.length - 1; cp >= 0; cp--)
            if (this.multiMaterials[cp].id === pp) return this.multiMaterials[cp];
        return null
      }
      getTextureByUniqueId(pp) {
        for (let ip = 0; ip < this.textures.length; ip++)
          if (this.textures[ip].uniqueId === pp) return this.textures[ip];
        return null
      }
      getTextureByName(pp) {
        for (let ip = 0; ip < this.textures.length; ip++)
          if (this.textures[ip].name === pp) return this.textures[ip];
        return null
      }
      getCameraById(pp) {
        for (let ip = 0; ip < this.cameras.length; ip++)
          if (this.cameras[ip].id === pp) return this.cameras[ip];
        return null
      }
      getCameraByUniqueId(pp) {
        for (let ip = 0; ip < this.cameras.length; ip++)
          if (this.cameras[ip].uniqueId === pp) return this.cameras[ip];
        return null
      }
      getCameraByName(pp) {
        for (let ip = 0; ip < this.cameras.length; ip++)
          if (this.cameras[ip].name === pp) return this.cameras[ip];
        return null
      }
      getBoneById(pp) {
        for (let ip = 0; ip < this.skeletons.length; ip++) {
          const cp = this.skeletons[ip];
          for (let ip = 0; ip < cp.bones.length; ip++)
            if (cp.bones[ip].id === pp) return cp.bones[ip]
        }
        return null
      }
      getBoneByName(pp) {
        for (let ip = 0; ip < this.skeletons.length; ip++) {
          const cp = this.skeletons[ip];
          for (let ip = 0; ip < cp.bones.length; ip++)
            if (cp.bones[ip].name === pp) return cp.bones[ip]
        }
        return null
      }
      getLightByName(pp) {
        for (let ip = 0; ip < this.lights.length; ip++)
          if (this.lights[ip].name === pp) return this.lights[ip];
        return null
      }
      getLightById(pp) {
        for (let ip = 0; ip < this.lights.length; ip++)
          if (this.lights[ip].id === pp) return this.lights[ip];
        return null
      }
      getLightByUniqueId(pp) {
        for (let ip = 0; ip < this.lights.length; ip++)
          if (this.lights[ip].uniqueId === pp) return this.lights[ip];
        return null
      }
      getParticleSystemById(pp) {
        for (let ip = 0; ip < this.Wm.length; ip++)
          if (this.Wm[ip].id === pp) return this.Wm[ip];
        return null
      }
      getGeometryById(pp) {
        for (let ip = 0; ip < this.geometries.length; ip++)
          if (this.geometries[ip].id === pp) return this.geometries[ip];
        return null
      }
      _getGeometryByUniqueId(pp) {
        if (this._geometriesByUniqueId) {
          const ip = this._geometriesByUniqueId[pp];
          if (void 0 !== ip) return this.geometries[ip]
        } else
          for (let ip = 0; ip < this.geometries.length; ip++)
            if (this.geometries[ip].uniqueId === pp) return this.geometries[ip];
        return null
      }
      getFrameGraphByName(pp) {
        for (let ip = 0; ip < this.frameGraphs.length; ip++)
          if (this.frameGraphs[ip].name === pp) return this.frameGraphs[ip];
        return null
      }
      pushGeometry(pp, ip) {
        return !(!ip && this._getGeometryByUniqueId(pp.uniqueId)) && (this.addGeometry(pp), op.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(pp)
        })), !0)
      }
      removeGeometry(pp) {
        let ip;
        if (this._geometriesByUniqueId) {
          if (ip = this._geometriesByUniqueId[pp.uniqueId], void 0 === ip) return !1
        } else if (ip = this.geometries.indexOf(pp), ip < 0) return !1;
        if (ip !== this.geometries.length - 1) {
          const pp = this.geometries[this.geometries.length - 1];
          pp && (this.geometries[ip] = pp, this._geometriesByUniqueId && (this._geometriesByUniqueId[pp.uniqueId] = ip))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[pp.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(pp), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(pp) {
        for (let ip = 0; ip < this.meshes.length; ip++)
          if (this.meshes[ip].id === pp) return this.meshes[ip];
        return null
      }
      getMeshesById(pp) {
        return this.meshes.filter((function(ip) {
          return ip.id === pp
        }))
      }
      getTransformNodeById(pp) {
        for (let ip = 0; ip < this.transformNodes.length; ip++)
          if (this.transformNodes[ip].id === pp) return this.transformNodes[ip];
        return null
      }
      getTransformNodeByUniqueId(pp) {
        for (let ip = 0; ip < this.transformNodes.length; ip++)
          if (this.transformNodes[ip].uniqueId === pp) return this.transformNodes[ip];
        return null
      }
      getTransformNodesById(pp) {
        return this.transformNodes.filter((function(ip) {
          return ip.id === pp
        }))
      }
      getMeshByUniqueId(pp) {
        for (let ip = 0; ip < this.meshes.length; ip++)
          if (this.meshes[ip].uniqueId === pp) return this.meshes[ip];
        return null
      }
      getLastMeshById(pp) {
        for (let ip = this.meshes.length - 1; ip >= 0; ip--)
          if (this.meshes[ip].id === pp) return this.meshes[ip];
        return null
      }
      getLastTransformNodeById(pp) {
        for (let ip = this.transformNodes.length - 1; ip >= 0; ip--)
          if (this.transformNodes[ip].id === pp) return this.transformNodes[ip];
        return null
      }
      getLastEntryById(pp) {
        let ip;
        for (ip = this.meshes.length - 1; ip >= 0; ip--)
          if (this.meshes[ip].id === pp) return this.meshes[ip];
        for (ip = this.transformNodes.length - 1; ip >= 0; ip--)
          if (this.transformNodes[ip].id === pp) return this.transformNodes[ip];
        for (ip = this.cameras.length - 1; ip >= 0; ip--)
          if (this.cameras[ip].id === pp) return this.cameras[ip];
        for (ip = this.lights.length - 1; ip >= 0; ip--)
          if (this.lights[ip].id === pp) return this.lights[ip];
        for (ip = this.skeletons.length - 1; ip >= 0; ip--) {
          const cp = this.skeletons[ip];
          for (let ip = cp.bones.length - 1; ip >= 0; ip--)
            if (cp.bones[ip].id === pp) return cp.bones[ip]
        }
        return null
      }
      getNodeById(pp) {
        const ip = this.getMeshById(pp);
        if (ip) return ip;
        const cp = this.getTransformNodeById(pp);
        if (cp) return cp;
        const Op = this.getLightById(pp);
        if (Op) return Op;
        const op = this.getCameraById(pp);
        if (op) return op;
        const Ip = this.getBoneById(pp);
        return Ip || null
      }
      getNodeByName(pp) {
        const ip = this.getMeshByName(pp);
        if (ip) return ip;
        const cp = this.getTransformNodeByName(pp);
        if (cp) return cp;
        const Op = this.getLightByName(pp);
        if (Op) return Op;
        const op = this.getCameraByName(pp);
        if (op) return op;
        const Ip = this.getBoneByName(pp);
        return Ip || null
      }
      getMeshByName(pp) {
        for (let ip = 0; ip < this.meshes.length; ip++)
          if (this.meshes[ip].name === pp) return this.meshes[ip];
        return null
      }
      getTransformNodeByName(pp) {
        for (let ip = 0; ip < this.transformNodes.length; ip++)
          if (this.transformNodes[ip].name === pp) return this.transformNodes[ip];
        return null
      }
      getLastSkeletonById(pp) {
        for (let ip = this.skeletons.length - 1; ip >= 0; ip--)
          if (this.skeletons[ip].id === pp) return this.skeletons[ip];
        return null
      }
      getSkeletonByUniqueId(pp) {
        for (let ip = 0; ip < this.skeletons.length; ip++)
          if (this.skeletons[ip].uniqueId === pp) return this.skeletons[ip];
        return null
      }
      getSkeletonById(pp) {
        for (let ip = 0; ip < this.skeletons.length; ip++)
          if (this.skeletons[ip].id === pp) return this.skeletons[ip];
        return null
      }
      getSkeletonByName(pp) {
        for (let ip = 0; ip < this.skeletons.length; ip++)
          if (this.skeletons[ip].name === pp) return this.skeletons[ip];
        return null
      }
      getMorphTargetManagerById(pp) {
        for (let ip = 0; ip < this.morphTargetManagers.length; ip++)
          if (this.morphTargetManagers[ip].uniqueId === pp) return this.morphTargetManagers[ip];
        return null
      }
      getMorphTargetById(pp) {
        for (let ip = 0; ip < this.morphTargetManagers.length; ++ip) {
          const cp = this.morphTargetManagers[ip];
          for (let ip = 0; ip < cp.numTargets; ++ip) {
            const Op = cp.getTarget(ip);
            if (Op.id === pp) return Op
          }
        }
        return null
      }
      getMorphTargetByName(pp) {
        for (let ip = 0; ip < this.morphTargetManagers.length; ++ip) {
          const cp = this.morphTargetManagers[ip];
          for (let ip = 0; ip < cp.numTargets; ++ip) {
            const Op = cp.getTarget(ip);
            if (Op.name === pp) return Op
          }
        }
        return null
      }
      getPostProcessByName(pp) {
        for (let ip = 0; ip < this.postProcesses.length; ++ip) {
          const cp = this.postProcesses[ip];
          if (cp.name === pp) return cp
        }
        return null
      }
      isActiveMesh(pp) {
        return -1 !== this._activeMeshes.indexOf(pp)
      }
      get uid() {
        return this._uid || (this._uid = Op.i.RandomId()), this._uid
      }
      addExternalData(pp, ip) {
        return this._externalData || (this._externalData = new Lp), this._externalData.add(pp, ip)
      }
      getExternalData(pp) {
        return this._externalData ? this._externalData.get(pp) : null
      }
      getOrAddExternalDataWithFactory(pp, ip) {
        return this._externalData || (this._externalData = new Lp), this._externalData.getOrAddWithFactory(pp, ip)
      }
      removeExternalData(pp) {
        return this._externalData.remove(pp)
      }
      _evaluateSubMesh(pp, ip, cp, Op) {
        if (Op || pp.isInFrustum(this._frustumPlanes)) {
          for (let Op = 0, op = this._evaluateSubMeshStage; Op < op.length; Op++) {
            op[Op].action(ip, pp)
          }
          const cp = pp.Ky();
          null !== cp && void 0 !== cp && (cp.hasRenderTargetTextures && null != cp.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(cp) && (this._processedMaterials.push(cp), this._materialsRenderTargets.concatWithNoDuplicate(cp.getRenderTargetTextures())), this._renderingManager.dispatch(pp, ip, cp))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(pp) {
        this._preventFreeActiveMeshesAndRenderingGroups !== pp && (pp && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = pp)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let pp = 0; pp < this.activeCameras.length; pp++) {
            const ip = this.activeCameras[pp];
            ip && ip._activeMeshes && ip._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let pp = 0; pp < this.textures.length; pp++) {
            const ip = this.textures[pp];
            ip && ip.renderList && ip.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Sp = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const pp of Sp) pp.objectRenderer._freezeActiveMeshes(Op);
          return this._freezeActiveMeshesCancel = (0, op.c)((() => {
            let pp = !0,
              ip = !0;
            for (const cp of Sp) pp && (pp = cp.objectRenderer._isFrozen), ip && (ip = null !== cp.objectRenderer._freezeActiveMeshesCancel);
            if (pp) return !0;
            if (!ip) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Ip, this._skipEvaluateActiveMeshesCompletely = pp, ip?.()
          }), ((pp, ip) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), ip) {
              const ip = "Scene: Timeout while waiting for meshes to be frozen.";
              cp ? cp(ip) : (Oc.e.Error(ip), pp && Oc.e.Error(pp))
            } else {
              const ip = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              cp ? cp(ip) : (Oc.e.Error(ip), pp && (Oc.e.Error(pp), pp.stack && Oc.e.Error(pp.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Ip, this._skipEvaluateActiveMeshesCompletely = pp, Op)
              for (let pp = 0; pp < this._activeMeshes.length; pp++) this._activeMeshes.data[pp]._freeze();
            ip && ip()
          } else cp && cp("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let pp = 0; pp < this.meshes.length; pp++) {
          const ip = this.meshes[pp];
          ip._internalAbstractMeshDataInfo && (ip._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const pp = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const ip of pp) ip.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let pp = 0; pp < this._activeMeshes.length; pp++) this._activeMeshes.data[pp]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(pp) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => pp.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const pp = this._activeMeshes.length;
            for (let ip = 0; ip < pp; ip++) {
              this._activeMeshes.data[ip].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const pp = this._activeParticleSystems.length;
            for (let ip = 0; ip < pp; ip++) this._activeParticleSystems.data[ip].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let op = 0, Ip = this._beforeEvaluateActiveMeshStage; op < Ip.length; op++) {
          Ip[op].action()
        }
        const pp = this.getActiveMeshCandidates(),
          ip = pp.length,
          cp = gp.b.Enabled,
          Op = this.customLODSelector;
        for (let op = 0; op < ip; op++) {
          const ip = pp.data[op],
            Ip = !Op && !ip.Vl && !ip._internalMeshDataInfo?._LODLevels.length;
          let Sp, xp;
          if ((Ip || (Sp = ip._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Sp ? Sp[1] = -1 : (Sp = [ip, -1], ip._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Sp))), !ip.isBlocked) && (cp && this._totalVertices.addCount(ip.getTotalVertices(), !1), ip.isReady() && ip.isEnabled() && !ip.ei.hasAZeroComponent)) {
            if (ip.computeWorldMatrix(), ip.actionManager && ip.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ip), Ip) xp = ip;
            else if (xp = Op ? Op(ip, this.activeCamera) : ip.getLOD(this.activeCamera), Sp[0] = xp, Sp[1] = this._frameId, void 0 === xp || null === xp) continue;
            if (xp !== ip && 0 !== xp.billboardMode && xp.computeWorldMatrix(), ip._preActivate(), ip.isVisible && ip.visibility > 0 && 0 !== (ip.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || ip.Gy || ip.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(ip), this.activeCamera._activeMeshes.push(ip), xp !== ip && xp._activate(this._renderId, !1);
              for (let pp = 0, cp = this._preActiveMeshStage; pp < cp.length; pp++) {
                cp[pp].action(ip)
              }
              ip._activate(this._renderId, !1) && (ip.Vl ? ip._internalAbstractMeshDataInfo._actAsRegularMesh && (xp = ip) : xp._internalAbstractMeshDataInfo._onlyForInstances = !1, xp._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(ip, xp)), ip._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let pp = 0; pp < this.Wm.length; pp++) {
            const ip = this.Wm[pp];
            if (!ip.isStarted() || !ip.emitter) continue;
            const cp = ip.emitter;
            cp.position && !cp.isEnabled() || (this._activeParticleSystems.push(ip), ip.animate(), this._renderingManager.dispatchParticles(ip))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(pp) {
        this._skeletonsEnabled && pp.skeleton && (this._activeSkeletons.pushNoDuplicate(pp.skeleton) && (pp.skeleton.prepare(), this._activeBones.addCount(pp.skeleton.bones.length, !1)), pp.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(pp) && this.frameGraph && pp.applySkeleton(pp.skeleton))
      }
      _activeMesh(pp, ip) {
        this._prepareSkeleton(ip);
        let cp = pp.fop || pp.Vl || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ip.Gy;
        if (ip && ip.Am && ip.Am.length > 0) {
          const Op = this.getActiveSubMeshCandidates(ip),
            op = Op.length;
          cp = cp || 1 === op;
          for (let Ip = 0; Ip < op; Ip++) {
            const op = Op.data[Ip];
            this._evaluateSubMesh(op, ip, pp, cp)
          }
        }
      }
      updateTransformMatrix(pp) {
        const ip = this.activeCamera;
        if (ip)
          if (ip._renderingMultiview) {
            const cp = ip._rigCameras[0],
              Op = ip._rigCameras[1];
            this.setTransformMatrix(cp.getViewMatrix(), cp.getProjectionMatrix(pp), Op.getViewMatrix(), Op.getProjectionMatrix(pp))
          } else this.setTransformMatrix(ip.getViewMatrix(), ip.getProjectionMatrix(pp))
      }
      _bindFrameBuffer(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (pp && pp._multiviewTexture ? pp._multiviewTexture._bindFrameBuffer() : pp && pp.outputRenderTarget ? pp.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), ip && this._clearFrameBuffer(pp)
      }
      _clearFrameBuffer(pp) {
        if (pp && pp._multiviewTexture);
        else if (pp && pp.outputRenderTarget && !pp._renderingMultiview) {
          const ip = pp.outputRenderTarget;
          ip.onClearObservable.hasObservers() ? ip.onClearObservable.notifyObservers(this._engine) : ip.skipInitialClear || pp.isRightCamera || (this.autoClear && this._engine.clear(ip.clearColor || this._clearColor, !ip._cleared, !0, !0), ip._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (pp && pp._skipRendering) return;
        const op = this._engine;
        if (this._activeCamera = pp, !this.activeCamera) throw new Error("Active camera not set");
        if (op.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && cp) {
          let ip = !0;
          pp._renderingMultiview && pp.outputRenderTarget && (ip = pp.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, pp.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), pp._renderingMultiview && pp.outputRenderTarget && (pp.outputRenderTarget.skipInitialClear = ip)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = pp.outputRenderTarget?.renderPassId ?? pp.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Op = 0; Op < this._softwareSkinnedMeshes.length; Op++) {
          const pp = this._softwareSkinnedMeshes.data[Op];
          pp.applySkeleton(pp.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), pp.customRenderTargets && pp.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(pp.customRenderTargets), ip && ip.customRenderTargets && ip.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(ip.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Op = 0, xp = this._gatherActiveCameraRenderTargetsStage; Op < xp.length; Op++) {
          xp[Op].action(this._renderTargets)
        }
        let Ip = !1;
        if (this.renderTargetsEnabled) {
          let pp;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Op.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const ip = this.getBoundingBoxRenderer?.();
            for (let cp = 0; cp < this._renderTargets.length; cp++) {
              const Op = this._renderTargets.data[cp];
              if (Op._shouldRender()) {
                this._renderId++;
                const cp = Op.activeCamera && Op.activeCamera !== this.activeCamera;
                ip && !pp && (pp = ip.renderList.length > 0 ? ip.renderList.data.slice() : [], pp.length = ip.renderList.length), Op.render(cp, this.dumpNextRenderTargets), Ip = !0
              }
            }
            ip && pp && (ip.renderList.data = pp, ip.renderList.length = pp.length), Op.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const ip = this.getBoundingBoxRenderer?.();
            ip && !pp && (pp = ip.renderList.length > 0 ? ip.renderList.data.slice() : [], pp.length = ip.renderList.length);
            for (let pp = 0, cp = this._cameraDrawRenderTargetStage; pp < cp.length; pp++) {
              Ip = cp[pp].action(this.activeCamera) || Ip
            }
            ip && pp && (ip.renderList.data = pp, ip.renderList.length = pp.length)
          }
          this._intermediateRendering = !1
        }
        Ip && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || pp._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Op = 0, xp = this._beforeCameraDrawStage; Op < xp.length; Op++) {
          xp[Op].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Sp = op.snapshotRendering && 1 === op.snapshotRenderingMode;
        Sp && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Sp), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Op = 0, xp = this._afterCameraDrawStage; Op < xp.length; Op++) {
          xp[Op].action(this.activeCamera)
        }
        if (this.postProcessManager && !pp._multiviewTexture) {
          const ip = pp.outputRenderTarget ? pp.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(pp.isIntermediate, ip)
        }
        for (let Op = 0, xp = this._afterCameraPostProcessStage; Op < xp.length; Op++) {
          xp[Op].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === pp.cameraRigMode || pp._renderingMultiview) return pp._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(pp, void 0, ip), void this.onAfterRenderCameraObservable.notifyObservers(pp);
        if (pp._useMultiviewToSingleView) this._renderMultiviewToSingleView(pp);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(pp);
          for (let ip = 0; ip < pp._rigCameras.length; ip++) this._renderForCamera(pp._rigCameras[ip], pp)
        }
        this._activeCamera = pp, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(pp)
      }
      _checkIntersections() {
        for (let pp = 0; pp < this._meshesForIntersections.length; pp++) {
          const ip = this._meshesForIntersections.data[pp];
          if (ip.actionManager)
            for (let pp = 0; ip.actionManager && pp < ip.actionManager.actions.length; pp++) {
              const cp = ip.actionManager.actions[pp];
              if (12 === cp.trigger || 13 === cp.trigger) {
                const pp = cp.getTriggerParameter(),
                  Op = pp.mesh ? pp.mesh : pp,
                  op = Op.Eop(ip, pp.usePreciseIntersection),
                  Ip = ip._intersectionsInProgress.indexOf(Op);
                op && -1 === Ip ? 12 === cp.trigger ? (cp._executeCurrent(yp.CreateNew(ip, void 0, Op)), ip._intersectionsInProgress.push(Op)) : 13 === cp.trigger && ip._intersectionsInProgress.push(Op) : !op && Ip > -1 && (13 === cp.trigger && cp._executeCurrent(yp.CreateNew(ip, void 0, Op)), ip.actionManager.hasSpecificTrigger(13, (pp => {
                  const ip = pp.mesh ? pp.mesh : pp;
                  return Op === ip
                })) && 13 !== cp.trigger || ip._intersectionsInProgress.splice(Ip, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(pp) {}
      _animate(pp) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let pp = Math.max(Lc.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Lc.MaxDeltaTime)) + this._timeAccumulator;
          const ip = this._engine.getTimeStep(),
            cp = 1e3 / ip / 1e3;
          let Op = 0;
          const op = this._engine.getLockstepMaxSteps();
          let Ip = Math.floor(pp / ip);
          for (Ip = Math.min(Ip, op); pp > 0 && Op < Ip;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ip * cp, this._animate(ip), this.onAfterAnimationsObservable.notifyObservers(this), this.hN && this._advancePhysicsEngineStep(ip), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Op++, pp -= ip;
          this._timeAccumulator = pp < 0 ? 0 : pp
        } else {
          const pp = this.useConstantAnimationDeltaTime ? 16 : Math.max(Lc.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Lc.MaxDeltaTime));
          this._animationRatio = .06 * pp, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.hN && this._advancePhysicsEngineStep(pp)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(pp) {
        if (pp?.outputRenderTarget && !pp?.isRigCamera && (pp.outputRenderTarget._cleared = !1), pp?.rigCameras?.length)
          for (let ip = 0; ip < pp.rigCameras.length; ++ip) {
            const cp = pp.rigCameras[ip].outputRenderTarget;
            cp && (cp._cleared = !1)
          }
      }
      resetDrawCache(pp) {
        if (this.meshes)
          for (const ip of this.meshes) ip.resetDrawCache(pp)
      }
      _renderWithFrameGraph() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, pp)
          for (const cp of this.cameras)
            if (cp.update(), 0 !== cp.cameraRigMode)
              for (let pp = 0; pp < cp._rigCameras.length; pp++) cp._rigCameras[pp].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(ip)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(pp) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const ip = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Op.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let pp = 0; pp < this._renderTargets.length; pp++) {
            const cp = this._renderTargets.data[pp],
              Op = cp.activeCamera || ip;
            this._renderRenderTarget(cp, Op, !0, this.dumpNextRenderTargets)
          }
          Op.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let cp = 0, Op = this._beforeClearStage; cp < Op.length; cp++) {
          Op[cp].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const ip = this.getActiveMeshCandidates(),
            cp = ip.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let pp = 0; pp < cp; pp++) {
                const cp = ip.data[pp];
                cp._internalAbstractMeshDataInfo._wasActiveLastFrame && cp.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const pp = this._activeParticleSystems.length;
              for (let ip = 0; ip < pp; ip++) this._activeParticleSystems.data[ip].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Op = 0; Op < cp; Op++) {
              const cp = ip.data[Op];
              cp._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, cp.isBlocked || (this._totalVertices.addCount(cp.getTotalVertices(), !1), cp.isReady() && cp.isEnabled() && !cp.ei.hasAZeroComponent && (cp.computeWorldMatrix(pp), cp.actionManager && cp.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(cp)))
            }
            if (this.particlesEnabled)
              for (let pp = 0; pp < this.Wm.length; pp++) {
                const ip = this.Wm[pp];
                if (!ip.isStarted() || !ip.emitter) continue;
                const cp = ip.emitter;
                cp.position && !cp.isEnabled() || (this._activeParticleSystems.push(ip), ip.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, pp._shouldRender()) {
          if (this._renderId++, this.activeCamera = ip, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), pp.render(cp, Op)
        }
        this._intermediateRendering = !1
      }
      render() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.uR) return;
        const cp = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(pp, ip)
        } finally {
          this._renderingMeshEvaluationDepth = cp
        }
      }
      _renderFrame(pp, ip) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), wp.c.Gl = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const cp of this.activeCameras) this._checkCameraRenderTarget(cp);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), ip || this.animate();
        for (let cp = 0, Op = this._beforeCameraUpdateStage; cp < Op.length; cp++) {
          Op[cp].action()
        }
        if (pp)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let cp = 0; cp < this.activeCameras.length; cp++) {
              const pp = this.activeCameras[cp];
              if (pp.update(), 0 !== pp.cameraRigMode)
                for (let ip = 0; ip < pp._rigCameras.length; ip++) pp._rigCameras[ip].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let cp = 0; cp < this.activeCamera._rigCameras.length; cp++) this.activeCamera._rigCameras[cp].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(pp, ip);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const pp = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Op.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let ip = 0; ip < this.customRenderTargets.length; ip++) {
              const cp = this.customRenderTargets[ip],
                Op = cp.activeCamera || this.activeCamera;
              this._renderRenderTarget(cp, Op, pp !== Op, this.dumpNextRenderTargets)
            }
            Op.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = pp?.renderPassId ?? 0, this.activeCamera = pp, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let ip = 0, cp = this._beforeClearStage; ip < cp.length; ip++) {
            cp[ip].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let ip = 0, cp = this._gatherRenderTargetsStage; ip < cp.length; ip++) {
            cp[ip].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ip = 0; ip < this.activeCameras.length; ip++) this._processSubCameras(this.activeCameras[ip], ip > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let cp = 0, Op = this._afterRenderStage; cp < Op.length; cp++) {
          Op[cp].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let pp = 0; pp < this._toBeDisposed.length; pp++) {
            const ip = this._toBeDisposed[pp];
            ip && ip.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let pp = 0; pp < this.materials.length; pp++) this.materials[pp].freeze()
      }
      unfreezeMaterials() {
        for (let pp = 0; pp < this.materials.length; pp++) this.materials[pp].unfreeze()
      }
      dispose() {
        if (this.uR) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, ep.d)(this.stopAllAnimations)) {
          for (const pp of this._activeAnimatables) pp.onAnimationEndObservable.clear(), pp.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const pp = this._activeRequests.slice();
        for (const Ip of pp) Ip.abort();
        this._activeRequests.length = 0;
        try {
          this.Kl.notifyObservers(this)
        } catch (op) {
          Oc.e.Error("An error occurred while calling onDisposeObservable!", op)
        }
        this.detachControl();
        const ip = this._engine.getInputElement?.();
        if (ip)
          for (let Ip = 0; Ip < this.cameras.length; Ip++) this.cameras[Ip].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (pp => pp.dispose(!0))), this._disposeList(this.transformNodes, (pp => pp.dispose(!0)));
        const cp = this.cameras;
        this._disposeList(cp), this._disposeList(this.Wm), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Op = this._engine.scenes.indexOf(this);
        if (Op > -1 && this._engine.scenes.splice(Op, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, wp.i)(), dp.e._LastCreatedScene === this) {
          dp.e._LastCreatedScene = null;
          let pp = dp.e.Instances.length - 1;
          for (; pp >= 0;) {
            const ip = dp.e.Instances[pp];
            if (ip.scenes.length > 0) {
              dp.e._LastCreatedScene = ip.scenes[this._engine.scenes.length - 1];
              break
            }
            pp--
          }
        }
        Op = this._engine._virtualScenes.indexOf(this), Op > -1 && this._engine._virtualScenes.splice(Op, 1), this._engine.wipeCaches(!0), this.Kl.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(pp, ip) {
        const cp = pp.slice(0);
        ip = ip ?? (pp => pp.dispose());
        for (const Op of cp) ip(Op);
        pp.length = 0
      }
      get uR() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let pp = 0; pp < this.meshes.length; pp++) {
          const ip = this.meshes[pp].geometry;
          ip && ip.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const pp of this.textures) {
          pp._buffer && (pp._buffer = null)
        }
      }
      getWorldExtends(pp) {
        const ip = new Dp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          cp = new Dp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        pp = pp || (() => !0);
        const Op = this.meshes.filter(pp);
        for (const op of Op) {
          if (op.computeWorldMatrix(!0), !op.Am || 0 === op.Am.length || op.infiniteDistance) continue;
          const pp = op.bJ(),
            Op = pp.boundingBox.minimumWorld,
            Ip = pp.boundingBox.maximumWorld;
          Dp.o.CheckExtends(Op, ip, cp), Dp.o.CheckExtends(Ip, ip, cp)
        }
        return ip.x === Number.MAX_VALUE ? {
          min: Dp.o.Zero(),
          max: Dp.o.Zero()
        } : {
          min: ip,
          max: cp
        }
      }
      createPickingRay(pp, ip, cp, Op) {
        throw (0, ep.o)("Ray")
      }
      createPickingRayToRef(pp, ip, cp, Op, op) {
        throw (0, ep.o)("Ray")
      }
      createPickingRayInCameraSpace(pp, ip, cp) {
        throw (0, ep.o)("Ray")
      }
      createPickingRayInCameraSpaceToRef(pp, ip, cp, Op) {
        throw (0, ep.o)("Ray")
      }
      SW(pp, ip, cp, Op, op, Ip) {
        const Sp = (0, ep.o)("Ray", !0);
        return Sp && Oc.e.Warn(Sp), new Wp.b
      }
      pickWithBoundingInfo(pp, ip, cp, Op, op) {
        const Ip = (0, ep.o)("Ray", !0);
        return Ip && Oc.e.Warn(Ip), new Wp.b
      }
      pickWithRay(pp, ip, cp, Op) {
        throw (0, ep.o)("Ray")
      }
      multiPick(pp, ip, cp, Op, op) {
        throw (0, ep.o)("Ray")
      }
      multiPickWithRay(pp, ip, cp) {
        throw (0, ep.o)("Ray")
      }
      setPointerOverMesh(pp, ip, cp) {
        this._inputManager.setPointerOverMesh(pp, ip, cp)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const pp of this.geometries) pp._rebuild();
        for (const pp of this.meshes) pp._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const pp of this._components) pp.rebuild();
        for (const pp of this.Wm) pp.rebuild();
        if (this.spriteManagers)
          for (const pp of this.spriteManagers) pp.rebuild()
      }
      _rebuildTextures() {
        for (const pp of this.textures) pp._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(pp, ip, cp) {
        if (void 0 === ip) return pp;
        const Op = [];
        for (const op in pp) {
          const Ip = pp[op];
          Yp.b && Yp.b.MatchesQuery(Ip, ip) && (!cp || cp(Ip)) && Op.push(Ip)
        }
        return Op
      }
      getMeshesByTags(pp, ip) {
        return this._getByTags(this.meshes, pp, ip)
      }
      getCamerasByTags(pp, ip) {
        return this._getByTags(this.cameras, pp, ip)
      }
      getLightsByTags(pp, ip) {
        return this._getByTags(this.lights, pp, ip)
      }
      getMaterialByTags(pp, ip) {
        return this._getByTags(this.materials, pp, ip).concat(this._getByTags(this.multiMaterials, pp, ip))
      }
      getTransformNodesByTags(pp, ip) {
        return this._getByTags(this.transformNodes, pp, ip)
      }
      setRenderingOrder(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(pp, ip, cp, Op)
      }
      setRenderingAutoClearDepthStencil(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(pp, ip, cp, Op)
      }
      getAutoClearDepthStencilSetup(pp) {
        return this._renderingManager.getAutoClearDepthStencilSetup(pp)
      }
      _forceBlockMaterialDirtyMechanism(pp) {
        this._blockMaterialDirtyMechanism = pp
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(pp) {
        this._blockMaterialDirtyMechanism !== pp && (this._blockMaterialDirtyMechanism = pp, pp || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(pp, ip) {
        if (!this._blockMaterialDirtyMechanism)
          for (const cp of this.materials) ip && !ip(cp) || cp.ocp(pp)
      }
      _loadFile(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = (0, zp.l)(pp, ip, cp, Op ? this.offlineProvider : void 0, op, Ip, Sp);
        return this._activeRequests.push(xp), xp.onCompleteObservable.add((pp => {
          this._activeRequests.splice(this._activeRequests.indexOf(pp), 1)
        })), xp
      }
      async _loadFileAsync(pp, ip, cp, Op, op) {
        return await new Promise(((Ip, Sp) => {
          this._loadFile(pp, (pp => {
            Ip(pp)
          }), ip, cp, Op, ((pp, ip) => {
            Sp(ip)
          }), op)
        }))
      }
      async _loadDelayedFileAsync(pp, ip, cp) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Op = `${pp}|${ip?"binary":"string"}`;
        let op = this._delayedFileRequests.get(Op);
        if (!op) {
          op = ip ? this._loadFileAsync(pp, void 0, cp, !0) : this._loadFileAsync(pp, void 0, cp, !1);
          const Ip = op;
          (async () => {
            try {
              await Ip
            } catch {}
            this._delayedFileRequests?.delete(Op)
          })(), this._delayedFileRequests.set(Op, op)
        }
        return await op
      }
      _requestFile(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = (0, zp.v)(pp, ip, cp, Op ? this.offlineProvider : void 0, op, Ip, Sp);
        return this._activeRequests.push(xp), xp.onCompleteObservable.add((pp => {
          this._activeRequests.splice(this._activeRequests.indexOf(pp), 1)
        })), xp
      }
      async _requestFileAsync(pp, ip, cp, Op, op) {
        return await new Promise(((Ip, Sp) => {
          this._requestFile(pp, (pp => {
            Ip(pp)
          }), ip, cp, Op, (pp => {
            Sp(pp)
          }), op)
        }))
      }
      _readFile(pp, ip, cp, Op, op) {
        const Ip = (0, zp.r)(pp, ip, cp, Op, op);
        return this._activeRequests.push(Ip), Ip.onCompleteObservable.add((pp => {
          this._activeRequests.splice(this._activeRequests.indexOf(pp), 1)
        })), Ip
      }
      async _readFileAsync(pp, ip, cp) {
        return await new Promise(((Op, op) => {
          this._readFile(pp, (pp => {
            Op(pp)
          }), ip, cp, (pp => {
            op(pp)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, ep.o)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(pp) {
        return this.setActiveCameraById(pp)
      }
      getMaterialByID(pp) {
        return this.getMaterialById(pp)
      }
      getLastMaterialByID(pp) {
        return this.getLastMaterialById(pp)
      }
      getTextureByUniqueID(pp) {
        return this.getTextureByUniqueId(pp)
      }
      getCameraByID(pp) {
        return this.getCameraById(pp)
      }
      getCameraByUniqueID(pp) {
        return this.getCameraByUniqueId(pp)
      }
      getBoneByID(pp) {
        return this.getBoneById(pp)
      }
      getLightByID(pp) {
        return this.getLightById(pp)
      }
      getLightByUniqueID(pp) {
        return this.getLightByUniqueId(pp)
      }
      getParticleSystemByID(pp) {
        return this.getParticleSystemById(pp)
      }
      getGeometryByID(pp) {
        return this.getGeometryById(pp)
      }
      getMeshByID(pp) {
        return this.getMeshById(pp)
      }
      getMeshByUniqueID(pp) {
        return this.getMeshByUniqueId(pp)
      }
      getLastMeshByID(pp) {
        return this.getLastMeshById(pp)
      }
      getMeshesByID(pp) {
        return this.getMeshesById(pp)
      }
      getTransformNodeByID(pp) {
        return this.getTransformNodeById(pp)
      }
      getTransformNodeByUniqueID(pp) {
        return this.getTransformNodeByUniqueId(pp)
      }
      getTransformNodesByID(pp) {
        return this.getTransformNodesById(pp)
      }
      getNodeByID(pp) {
        return this.getNodeById(pp)
      }
      getLastEntryByID(pp) {
        return this.getLastEntryById(pp)
      }
      getLastSkeletonByID(pp) {
        return this.getLastSkeletonById(pp)
      }
    }
    Lc.FOGMODE_NONE = 0, Lc.FOGMODE_EXP = 1, Lc.FOGMODE_EXP2 = 2, Lc.FOGMODE_LINEAR = 3, Lc.MinDeltaTime = 1, Lc.MaxDeltaTime = 1e3, Lc._OriginalDefaultMaterialFactory = Lc.DefaultMaterialFactory;
    let Yc = !1;

    function Dc() {
      Yc || (Yc = !0, (0, oc.g)("BABYLON.Scene", Lc))
    }(ii = Lc.prototype).sortActiveAnimatables ?? (ii.sortActiveAnimatables = (0, ep.k)("Scene", "sortActiveAnimatables")), (ci = Lc.prototype).beginWeightedAnimation ?? (ci.beginWeightedAnimation = (0, ep.k)("Scene", "beginWeightedAnimation")), (Oi = Lc.prototype).beginAnimation ?? (Oi.beginAnimation = (0, ep.k)("Scene", "beginAnimation")), (oi = Lc.prototype).beginHierarchyAnimation ?? (oi.beginHierarchyAnimation = (0, ep.k)("Scene", "beginHierarchyAnimation")), (Ii = Lc.prototype).beginDirectAnimation ?? (Ii.beginDirectAnimation = (0, ep.k)("Scene", "beginDirectAnimation")), (Si = Lc.prototype).beginDirectHierarchyAnimation ?? (Si.beginDirectHierarchyAnimation = (0, ep.k)("Scene", "beginDirectHierarchyAnimation")), (xi = Lc.prototype).getAnimatableByTarget ?? (xi.getAnimatableByTarget = (0, ep.k)("Scene", "getAnimatableByTarget")), (Li = Lc.prototype).getAllAnimatablesByTarget ?? (Li.getAllAnimatablesByTarget = (0, ep.k)("Scene", "getAllAnimatablesByTarget")), (Yi = Lc.prototype).stopAllAnimations ?? (Yi.stopAllAnimations = (0, ep.k)("Scene", "stopAllAnimations")), (Di = Lc.prototype).getSoundByName ?? (Di.getSoundByName = (0, ep.k)("Scene", "getSoundByName")), (Ai = Lc.prototype).createOrUpdateSelectionOctree ?? (Ai.createOrUpdateSelectionOctree = (0, ep.k)("Scene", "createOrUpdateSelectionOctree")), (Pi = Lc.prototype).createDefaultLight ?? (Pi.createDefaultLight = (0, ep.k)("Scene", "createDefaultLight")), (Wi = Lc.prototype).createDefaultCamera ?? (Wi.createDefaultCamera = (0, ep.k)("Scene", "createDefaultCamera")), (yi = Lc.prototype).createDefaultCameraOrLight ?? (yi.createDefaultCameraOrLight = (0, ep.k)("Scene", "createDefaultCameraOrLight")), (Ui = Lc.prototype).createDefaultSkybox ?? (Ui.createDefaultSkybox = (0, ep.k)("Scene", "createDefaultSkybox")), (wi = Lc.prototype).createDefaultEnvironment ?? (wi.createDefaultEnvironment = (0, ep.k)("Scene", "createDefaultEnvironment")), (vi = Lc.prototype).createDefaultVRExperience ?? (vi.createDefaultVRExperience = (0, ep.k)("Scene", "createDefaultVRExperience")), (ti = Lc.prototype).createDefaultXRExperienceAsync ?? (ti.createDefaultXRExperienceAsync = (0, ep.k)("Scene", "createDefaultXRExperienceAsync")), (Hi = Lc.prototype).getGlowLayerByName ?? (Hi.getGlowLayerByName = (0, ep.k)("Scene", "getGlowLayerByName")), (di = Lc.prototype).getHighlightLayerByName ?? (di.getHighlightLayerByName = (0, ep.k)("Scene", "getHighlightLayerByName")), (ei = Lc.prototype).getSelectionOutlineLayerByName ?? (ei.getSelectionOutlineLayerByName = (0, ep.k)("Scene", "getSelectionOutlineLayerByName")), (ui = Lc.prototype).removeLensFlareSystem ?? (ui.removeLensFlareSystem = (0, ep.k)("Scene", "removeLensFlareSystem")), (ji = Lc.prototype).addLensFlareSystem ?? (ji.addLensFlareSystem = (0, ep.k)("Scene", "addLensFlareSystem")), (ki = Lc.prototype).getLensFlareSystemByName ?? (ki.getLensFlareSystemByName = (0, ep.k)("Scene", "getLensFlareSystemByName")), (mi = Lc.prototype).getLensFlareSystemByID ?? (mi.getLensFlareSystemByID = (0, ep.k)("Scene", "getLensFlareSystemByID")), (Ri = Lc.prototype).getLensFlareSystemById ?? (Ri.getLensFlareSystemById = (0, ep.k)("Scene", "getLensFlareSystemById")), (qi = Lc.prototype).getPhysicsEngine ?? (qi.getPhysicsEngine = (0, ep.k)("Scene", "getPhysicsEngine")), (Mi = Lc.prototype).enablePhysics ?? (Mi.enablePhysics = (0, ep.k)("Scene", "enablePhysics")), (Ci = Lc.prototype).disablePhysicsEngine ?? (Ci.disablePhysicsEngine = (0, ep.k)("Scene", "disablePhysicsEngine")), (Ei = Lc.prototype).isPhysicsEnabled ?? (Ei.isPhysicsEnabled = (0, ep.k)("Scene", "isPhysicsEnabled")), (Xi = Lc.prototype).deleteCompoundImpostor ?? (Xi.deleteCompoundImpostor = (0, ep.k)("Scene", "deleteCompoundImpostor")), (li = Lc.prototype).removeReflectionProbe ?? (li.removeReflectionProbe = (0, ep.k)("Scene", "removeReflectionProbe")), (Qi = Lc.prototype).addReflectionProbe ?? (Qi.addReflectionProbe = (0, ep.k)("Scene", "addReflectionProbe")), (Ji = Lc.prototype).getBoundingBoxRenderer ?? (Ji.getBoundingBoxRenderer = (0, ep.k)("Scene", "getBoundingBoxRenderer")), (Bi = Lc.prototype).enableDepthRenderer ?? (Bi.enableDepthRenderer = (0, ep.k)("Scene", "enableDepthRenderer")), (Ni = Lc.prototype).disableDepthRenderer ?? (Ni.disableDepthRenderer = (0, ep.k)("Scene", "disableDepthRenderer")), (Ti = Lc.prototype).enableFluidRenderer ?? (Ti.enableFluidRenderer = (0, ep.k)("Scene", "enableFluidRenderer")), (fi = Lc.prototype).disableFluidRenderer ?? (fi.disableFluidRenderer = (0, ep.k)("Scene", "disableFluidRenderer")), (bi = Lc.prototype).enableGeometryBufferRenderer ?? (bi.enableGeometryBufferRenderer = (0, ep.k)("Scene", "enableGeometryBufferRenderer")), (ai = Lc.prototype).disableGeometryBufferRenderer ?? (ai.disableGeometryBufferRenderer = (0, ep.k)("Scene", "disableGeometryBufferRenderer")), (ni = Lc.prototype).enableIblCdfGenerator ?? (ni.enableIblCdfGenerator = (0, ep.k)("Scene", "enableIblCdfGenerator")), (Fi = Lc.prototype).disableIblCdfGenerator ?? (Fi.disableIblCdfGenerator = (0, ep.k)("Scene", "disableIblCdfGenerator")), (gi = Lc.prototype).getOutlineRenderer ?? (gi.getOutlineRenderer = (0, ep.k)("Scene", "getOutlineRenderer")), (Gi = Lc.prototype).enablePrePassRenderer ?? (Gi.enablePrePassRenderer = (0, ep.k)("Scene", "enablePrePassRenderer")), (ri = Lc.prototype).disablePrePassRenderer ?? (ri.disablePrePassRenderer = (0, ep.k)("Scene", "disablePrePassRenderer")), (Zi = Lc.prototype).enableSubSurfaceForPrePass ?? (Zi.enableSubSurfaceForPrePass = (0, ep.k)("Scene", "enableSubSurfaceForPrePass")), (zi = Lc.prototype).disableSubSurfaceForPrePass ?? (zi.disableSubSurfaceForPrePass = (0, ep.k)("Scene", "disableSubSurfaceForPrePass")), (si = Lc.prototype).pickSprite ?? (si.pickSprite = (0, ep.k)("Scene", "pickSprite")), (Ki = Lc.prototype).pickSpriteWithRay ?? (Ki.pickSpriteWithRay = (0, ep.k)("Scene", "pickSpriteWithRay")), (Vi = Lc.prototype).multiPickSprite ?? (Vi.multiPickSprite = (0, ep.k)("Scene", "multiPickSprite")), (pc = Lc.prototype).multiPickSpriteWithRay ?? (pc.multiPickSpriteWithRay = (0, ep.k)("Scene", "multiPickSpriteWithRay")), (ic = Lc.prototype).setPointerOverSprite ?? (ic.setPointerOverSprite = (0, ep.k)("Scene", "setPointerOverSprite")), (cc = Lc.prototype).getPointerOverSprite ?? (cc.getPointerOverSprite = (0, ep.k)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Lc.prototype, "mainSoundTrack") || Object.defineProperty(Lc.prototype, "mainSoundTrack", (0, ep.h)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Lc.prototype, "soundTracks") || Object.defineProperty(Lc.prototype, "soundTracks", (0, ep.h)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Lc.prototype, "audioEnabled") || Object.defineProperty(Lc.prototype, "audioEnabled", (0, ep.h)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Lc.prototype, "headphone") || Object.defineProperty(Lc.prototype, "headphone", (0, ep.h)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Lc.prototype, "audioListenerPositionProvider") || Object.defineProperty(Lc.prototype, "audioListenerPositionProvider", (0, ep.h)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Lc.prototype, "audioListenerRotationProvider") || Object.defineProperty(Lc.prototype, "audioListenerRotationProvider", (0, ep.h)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Lc.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Lc.prototype, "audioPositioningRefreshRate", (0, ep.h)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Lc.prototype, "selectionOctree") || Object.defineProperty(Lc.prototype, "selectionOctree", (0, ep.h)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Lc.prototype, "debugLayer") || Object.defineProperty(Lc.prototype, "debugLayer", (0, ep.h)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Lc.prototype, "gamepadManager") || Object.defineProperty(Lc.prototype, "gamepadManager", (0, ep.h)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Lc.prototype, "simplificationQueue") || Object.defineProperty(Lc.prototype, "simplificationQueue", (0, ep.h)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Lc.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Lc.prototype, "onBeforePhysicsObservable", (0, ep.h)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Lc.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Lc.prototype, "onAfterPhysicsObservable", (0, ep.h)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Lc.prototype, "reflectionProbes") || Object.defineProperty(Lc.prototype, "reflectionProbes", (0, ep.h)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Lc.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Lc.prototype, "forceShowBoundingBoxes", (0, ep.h)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Lc.prototype, "depthPeelingRenderer") || Object.defineProperty(Lc.prototype, "depthPeelingRenderer", (0, ep.h)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Lc.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Lc.prototype, "useOrderIndependentTransparency", (0, ep.h)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Lc.prototype, "fluidRenderer") || Object.defineProperty(Lc.prototype, "fluidRenderer", (0, ep.h)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Lc.prototype, "geometryBufferRenderer") || Object.defineProperty(Lc.prototype, "geometryBufferRenderer", (0, ep.h)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Lc.prototype, "iblCdfGenerator") || Object.defineProperty(Lc.prototype, "iblCdfGenerator", (0, ep.h)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Lc.prototype, "prePassRenderer") || Object.defineProperty(Lc.prototype, "prePassRenderer", (0, ep.h)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Lc.prototype, "subSurfaceConfiguration") || Object.defineProperty(Lc.prototype, "subSurfaceConfiguration", (0, ep.h)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Lc.prototype, "spriteManagers") || Object.defineProperty(Lc.prototype, "spriteManagers", (0, ep.h)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Lc.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Lc.prototype, "onBeforeSpritesRenderingObservable", (0, ep.h)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Lc.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Lc.prototype, "onAfterSpritesRenderingObservable", (0, ep.h)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40368: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      i: () => op
    });
    class Op {}
    Op.NAME_EFFECTLAYER = "EffectLayer", Op.NAME_LAYER = "Layer", Op.NAME_LENSFLARESYSTEM = "LensFlareSystem", Op.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Op.NAME_PARTICLESYSTEM = "ParticleSystem", Op.NAME_GAMEPAD = "Gamepad", Op.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Op.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Op.NAME_PREPASSRENDERER = "PrePassRenderer", Op.NAME_DEPTHRENDERER = "DepthRenderer", Op.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Op.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Op.NAME_SPRITE = "Sprite", Op.NAME_SUBSURFACE = "SubSurface", Op.NAME_OUTLINERENDERER = "Outline", Op.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Op.NAME_SHADOWGENERATOR = "ShadowGenerator", Op.NAME_OCTREE = "GOp", Op.NAME_PHYSICSENGINE = "PhysicsEngine", Op.NAME_AUDIO = "Audio", Op.NAME_FLUIDRENDERER = "FluidRenderer", Op.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Op.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Op.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Op.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Op.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Op.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Op.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Op.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Op.STEP_BEFORECAMERADRAW_PREPASS = 0, Op.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Op.STEP_BEFORECAMERADRAW_LAYER = 2, Op.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Op.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Op.STEP_BEFORERENDERINGMESH_PREPASS = 0, Op.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Op.STEP_AFTERRENDERINGMESH_PREPASS = 0, Op.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Op.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Op.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Op.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Op.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Op.STEP_BEFORECLEAR_PREPASS = 1, Op.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Op.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Op.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Op.STEP_AFTERCAMERADRAW_PREPASS = 0, Op.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Op.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Op.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Op.STEP_AFTERCAMERADRAW_LAYER = 4, Op.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Op.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Op.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Op.STEP_AFTERRENDER_AUDIO = 0, Op.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Op.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Op.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Op.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Op.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Op.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Op.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Op.STEP_POINTERMOVE_SPRITE = 0, Op.STEP_POINTERDOWN_SPRITE = 0, Op.STEP_POINTERUP_SPRITE = 0;
    class op extends Array {
      constructor(pp) {
        super(...pp)
      }
      static Create() {
        return Object.create(op.prototype)
      }
      registerStep(pp, ip, cp) {
        let Op, op = 0;
        for (; op < this.length; op++) {
          if (Op = this[op].index, pp < Op) break
        }
        this.splice(op, 0, {
          index: pp,
          component: ip,
          action: cp.bind(ip)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40203: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => xp,
      j: () => Op,
      l: () => op,
      m: () => Ip
    });

    function Op(pp, ip, cp, Op, op, Ip) {
      function Sp(pp) {
        if (void 0 !== pp && "function" !== typeof pp) throw new TypeError("Function expected");
        return pp
      }
      for (var xp, Lp = Op.kind, Yp = "getter" === Lp ? "get" : "setter" === Lp ? "set" : "value", Dp = !ip && pp ? Op.static ? pp : pp.prototype : null, Ap = ip || (Dp ? Object.getOwnPropertyDescriptor(Dp, Op.name) : {}), Pp = !1, Wp = cp.length - 1; Wp >= 0; Wp--) {
        var yp = {};
        for (var Up in Op) yp[Up] = "access" === Up ? {} : Op[Up];
        for (var Up in Op.access) yp.access[Up] = Op.access[Up];
        yp.addInitializer = function(pp) {
          if (Pp) throw new TypeError("Cannot add initializers after decoration has completed");
          Ip.push(Sp(pp || null))
        };
        var wp = (0, cp[Wp])("accessor" === Lp ? {
          get: Ap.get,
          set: Ap.set
        } : Ap[Yp], yp);
        if ("accessor" === Lp) {
          if (void 0 === wp) continue;
          if (null === wp || "object" !== typeof wp) throw new TypeError("Object expected");
          (xp = Sp(wp.get)) && (Ap.get = xp), (xp = Sp(wp.set)) && (Ap.set = xp), (xp = Sp(wp.init)) && op.unshift(xp)
        } else(xp = Sp(wp)) && ("field" === Lp ? op.unshift(xp) : Ap[Yp] = xp)
      }
      Dp && Object.defineProperty(Dp, Op.name, Ap), Pp = !0
    }

    function op(pp, ip, cp) {
      for (var Op = arguments.length > 2, op = 0; op < ip.length; op++) cp = Op ? ip[op].call(pp, cp) : ip[op].call(pp);
      return Op ? cp : void 0
    }

    function Ip(pp, ip, cp) {
      return "symbol" === typeof ip && (ip = ip.description ? "[".concat(ip.description, "]") : ""), Object.defineProperty(pp, "name", {
        configurable: !0,
        value: cp ? "".concat(cp, " ", ip) : ip
      })
    }
    Object.create;
    Object.create;

    function Sp(pp, ip, cp, Op) {
      if ("a" === cp && !Op) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ip ? pp !== ip || !Op : !ip.has(pp)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === cp ? Op : "a" === cp ? Op.call(pp) : Op ? Op.value : ip.get(pp)
    }

    function xp(pp, ip, cp, Op, op) {
      if ("m" === Op) throw new TypeError("Private method is not writable");
      if ("a" === Op && !op) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ip ? pp !== ip || !op : !ip.has(pp)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Op ? op.call(pp, cp) : op ? op.value = cp : ip.set(pp, cp), cp
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);