export const id = 244;
export const ids = [244];
export const modules = {
  39879: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      d: () => Vq,
      e: () => cq,
      g: () => Aq
    });
    var Yq = gq(39689),
      lq = gq(38653),
      Oq = gq(39817),
      mq = gq(39725);
    class xq {
      get bM() {
        return this._isDisposed
      }
      constructor(qq, Eq, gq) {
        let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Aq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          cq = arguments.length > 7 ? arguments[7] : void 0,
          uq = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, mq.e)(), qq && qq.ZJ ? this._engine = qq.ZJ().Ba() : this._engine = qq, this._updatable = gq, this._instanced = xq, this._divisor = cq || 1, this._label = uq, Eq instanceof Yq.b ? (this._data = null, this._buffer = Eq) : (this._data = Eq, this._buffer = null), this.byteStride = Aq ? lq : lq * Float32Array.BYTES_PER_ELEMENT, Oq || this.create()
      }
      createVertexBuffer(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          mq = arguments.length > 6 ? arguments[6] : void 0;
        const xq = Oq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT,
          cq = Yq ? Oq ? Yq : Yq * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Aq(this._engine, this, qq, this._updatable, !0, cq, void 0 === lq ? this._instanced : lq, xq, gq, void 0, void 0, !0, this._divisor || mq)
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !qq && this._buffer || (qq = qq || this._data, qq && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, qq), this._data = qq) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(qq, this._label), this._data = qq) : this._buffer = this._engine.createVertexBuffer(qq, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.WB > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.WB, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.WB, void 0, this._label));
          lq.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(qq) {
        this.create(qq)
      }
      updateDirectly(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, qq, Yq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT, gq ? gq * this.byteStride : void 0), this._data = 0 === Eq && void 0 === gq ? qq : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Aq {
      get bM() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(qq) {
        const Eq = 0 != qq;
        this._instanceDivisor = qq, Eq !== this._instanced && (this._instanced = Eq, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const qq = this.getData();
        return qq ? Array.isArray(qq) ? qq.length / (this.byteStride / 4) - this.byteOffset / 4 : (qq.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(qq, Eq, gq, Yq, lq, mq, Bq, Wq, Nq, aq) {
        let Vq, dq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          jq = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Hq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          oq = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = qq, "object" === typeof Yq && null !== Yq ? (Vq = Yq.updatable ?? !1, lq = Yq.postponeInternalCreation, mq = Yq.stride, Bq = Yq.instanced, Wq = Yq.offset, Nq = Yq.size, aq = Yq.type, dq = Yq.normalized ?? !1, jq = Yq.useBytes ?? !1, Hq = Yq.divisor ?? 1, oq = Yq.takeBufferOwnership ?? !1, this._label = Yq.label) : Vq = !!Yq, Eq instanceof xq ? (this._buffer = Eq, this._ownsBuffer = oq) : (this._buffer = new xq(qq, Eq, Vq, mq, lq, Bq, jq, Hq, this._label), this._ownsBuffer = !0), this.uniqueId = Aq._Counter++, this._kind = gq, void 0 === aq) {
          const qq = this.getData();
          this.type = qq ? uq(qq) : Aq.FLOAT
        } else this.type = aq;
        const Pq = (0, Oq.q)(this.type);
        jq ? (this._size = Nq || (mq ? mq / Pq : cq(gq)), this.byteStride = mq || this._buffer.byteStride || this._size * Pq, this.byteOffset = Wq || 0) : (this._size = Nq || mq || cq(gq), this.byteStride = mq ? mq * Pq : this._buffer.byteStride || this._size * Pq, this.byteOffset = (Wq || 0) * Pq), this.normalized = dq, this._instanced = void 0 !== Bq && Bq, this._instanceDivisor = Bq ? Hq : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(qq) {
        switch (qq) {
          case Aq.BYTE:
            return 0;
          case Aq.UNSIGNED_BYTE:
            return 1;
          case Aq.SHORT:
            return 2;
          case Aq.UNSIGNED_SHORT:
            return 3;
          case Aq.INT:
            return 4;
          case Aq.UNSIGNED_INT:
            return 5;
          case Aq.FLOAT:
            return 6;
          case Aq.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${qq}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Aq._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(qq, Eq) {
        const gq = this.getData();
        return gq ? (0, Oq.o)(gq, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, qq, Eq) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Oq.q)(this.type)
      }
      Tgq() {
        return this.byteOffset / (0, Oq.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Oq.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(qq) {
        this._buffer.create(qq), this._alignBuffer()
      }
      update(qq) {
        this._buffer.update(qq), this._alignBuffer()
      }
      updateDirectly(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(qq, Eq, void 0, gq), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(qq, Eq) {
        (0, Oq.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, qq, this.normalized, ((qq, gq) => {
          for (let Yq = 0; Yq < this._size; Yq++) Eq(qq[Yq], gq + Yq)
        }))
      }
      _alignBuffer() {}
    }

    function cq(qq) {
      switch (qq) {
        case Aq.UVKind:
        case Aq.UV2Kind:
        case Aq.UV3Kind:
        case Aq.UV4Kind:
        case Aq.UV5Kind:
        case Aq.UV6Kind:
          return 2;
        case Aq.NormalKind:
        case Aq.PositionKind:
          return 3;
        case Aq.ColorKind:
        case Aq.ColorInstanceKind:
        case Aq.MatricesIndicesKind:
        case Aq.MatricesIndicesExtraKind:
        case Aq.MatricesWeightsKind:
        case Aq.MatricesWeightsExtraKind:
        case Aq.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + qq + "'")
      }
    }

    function uq(qq) {
      return qq instanceof Int8Array ? Aq.BYTE : qq instanceof Uint8Array ? Aq.UNSIGNED_BYTE : qq instanceof Int16Array ? Aq.SHORT : qq instanceof Uint16Array ? Aq.UNSIGNED_SHORT : qq instanceof Int32Array ? Aq.INT : qq instanceof Uint32Array ? Aq.UNSIGNED_INT : Aq.FLOAT
    }

    function Bq(qq) {
      return (0, Oq.q)(qq)
    }

    function Wq(qq, Eq, gq, Yq, lq, mq, xq, Aq) {
      (0, Oq.h)(qq, Eq, gq, Yq, lq, mq, xq, ((qq, Eq) => {
        for (let gq = 0; gq < Yq; gq++) Aq(qq[gq], Eq + gq)
      }))
    }

    function Nq(qq, Eq, gq, Yq, lq, mq, xq, Aq) {
      return (0, Oq.o)(qq, Eq, gq, Yq, lq, mq, xq, Aq)
    }
    Aq._Counter = 0, Aq.BYTE = 5120, Aq.UNSIGNED_BYTE = 5121, Aq.SHORT = 5122, Aq.UNSIGNED_SHORT = 5123, Aq.INT = 5124, Aq.UNSIGNED_INT = 5125, Aq.FLOAT = 5126, Aq.HALF_FLOAT = 5131, Aq.PositionKind = "position", Aq.NormalKind = "normal", Aq.TangentKind = "tangent", Aq.UVKind = "uv", Aq.UV2Kind = "uv2", Aq.UV3Kind = "uv3", Aq.UV4Kind = "uv4", Aq.UV5Kind = "uv5", Aq.UV6Kind = "uv6", Aq.ColorKind = "color", Aq.ColorInstanceKind = "instanceColor", Aq.MatricesIndicesKind = "matricesIndices", Aq.MatricesWeightsKind = "matricesWeights", Aq.MatricesIndicesExtraKind = "matricesIndicesExtra", Aq.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let aq = !1;

    function Vq() {
      aq || (aq = !0, Aq.DeduceStride = cq, Aq.GetDataType = uq, Aq.GetTypeByteLength = Bq, Aq.ForEach = Wq, Aq.GetFloatData = Nq)
    }
  },
  39689: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.WB = 0, this.is32Bits = !1, this.uniqueId = Yq._Counter++
      }
    }
    Yq._Counter = 0
  },
  39876: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(37139),
      lq = gq(39879);
    class Oq {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Eq && !this.pickedMesh.isVerticesDataPresent(lq.g.NormalKind)) return null;
        let gq, Oq = this.pickedMesh.iYq();
        0 === Oq?.length && (Oq = null);
        const mq = Yq.o.Na[0],
          xq = Yq.o.Na[1],
          Aq = Yq.o.Na[2];
        if (Eq) {
          const qq = this.pickedMesh.getVerticesData(lq.g.NormalKind);
          let Eq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId], mq) : mq.Vqq(qq[3 * this.faceId * 3], qq[3 * this.faceId * 3 + 1], qq[3 * this.faceId * 3 + 2]),
            cq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 1], xq) : xq.Vqq(qq[3 * (3 * this.faceId + 1)], qq[3 * (3 * this.faceId + 1) + 1], qq[3 * (3 * this.faceId + 1) + 2]),
            uq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 2], Aq) : Aq.Vqq(qq[3 * (3 * this.faceId + 2)], qq[3 * (3 * this.faceId + 2) + 1], qq[3 * (3 * this.faceId + 2) + 2]);
          Eq = Eq.scale(this.bu), cq = cq.scale(this.bv), uq = uq.scale(1 - this.bu - this.bv), gq = new Yq.q(Eq.x + cq.x + uq.x, Eq.y + cq.y + uq.y, Eq.z + cq.z + uq.z)
        } else {
          const qq = this.pickedMesh.getVerticesData(lq.g.PositionKind),
            Eq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId], mq) : mq.Vqq(qq[3 * this.faceId * 3], qq[3 * this.faceId * 3 + 1], qq[3 * this.faceId * 3 + 2]),
            cq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 1], xq) : xq.Vqq(qq[3 * (3 * this.faceId + 1)], qq[3 * (3 * this.faceId + 1) + 1], qq[3 * (3 * this.faceId + 1) + 2]),
            uq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 2], Aq) : Aq.Vqq(qq[3 * (3 * this.faceId + 2)], qq[3 * (3 * this.faceId + 2) + 1], qq[3 * (3 * this.faceId + 2) + 2]),
            Bq = Eq.subtract(cq),
            Wq = uq.subtract(cq);
          gq = Yq.q.Cross(Bq, Wq)
        }
        const cq = (qq, Eq) => {
          if (-1 !== this.thinInstanceIndex) {
            const gq = qq._thinInstanceDataStorage.matrixData,
              lq = this.thinInstanceIndex << 4;
            if (gq && gq.length > lq) {
              const qq = Yq.o.Matrix[0];
              Yq.e.FromArrayToRef(gq, lq, qq), Yq.q.TransformNormalToRef(Eq, qq, Eq)
            }
          }
          let gq = qq.getWorldMatrix();
          qq.nonUniformScaling && (Yq.o.Matrix[0].WG(gq), gq = Yq.o.Matrix[0], gq.setTranslationFromFloats(0, 0, 0), gq.invert(), gq.transposeToRef(Yq.o.Matrix[1]), gq = Yq.o.Matrix[1]), Yq.q.TransformNormalToRef(Eq, gq, Eq)
        };
        if (qq && cq(this.pickedMesh, gq), this.ray) {
          const Eq = Yq.o.Na[0].WG(gq);
          qq || cq(this.pickedMesh, Eq), Yq.q.Dot(Eq, this.ray.direction) > 0 && gq.negateInPlace()
        }
        return gq.normalize(), gq
      }
      getTextureCoordinates() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lq.g.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(qq)) return null;
        const Eq = this.pickedMesh.iYq();
        if (!Eq) return null;
        const gq = this.pickedMesh.getVerticesData(qq);
        if (!gq) return null;
        let Oq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId]),
          mq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 1]),
          xq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 2]);
        return Oq = Oq.scale(this.bu), mq = mq.scale(this.bv), xq = xq.scale(1 - this.bu - this.bv), new Yq.p(Oq.x + mq.x + xq.x, Oq.y + mq.y + xq.y)
      }
    }
  },
  39725: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq
    });
    var Yq = gq(39608);
    let lq = !1;

    function Oq() {
      lq || (lq = !0, Yq.ThinEngine.prototype.updateDynamicIndexBuffer = function(qq, Eq) {
        let gq;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(qq), gq = qq.is32Bits ? Eq instanceof Uint32Array ? Eq : new Uint32Array(Eq) : Eq instanceof Uint16Array ? Eq : new Uint16Array(Eq), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, gq, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Yq.ThinEngine.prototype.updateDynamicVertexBuffer = function(qq, Eq, gq, Yq) {
        this.bindArrayBuffer(qq), void 0 === gq && (gq = 0);
        const lq = Eq.byteLength || Eq.length;
        void 0 === Yq || Yq >= lq && 0 === gq ? Eq instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, new Float32Array(Eq)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, Eq) : Eq instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, new Float32Array(Eq).subarray(0, Yq / 4)) : (Eq = ArrayBuffer.isView(Eq) ? new Uint8Array(Eq.buffer, Eq.byteOffset, Yq) : new Uint8Array(Eq, 0, Yq), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, Eq)), this._resetVertexBufferBinding()
      })
    }
  },
  39698: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Eq, !qq && (qq = Eq.createTexture(), !qq)) throw new Error("Unable to create webGL texture");
        this.set(qq)
      }
      setUsage() {}
      set(qq) {
        this._webGLTexture = qq
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(qq) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(qq)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const qq of this._MSAARenderBuffers) this._context.deleteRenderbuffer(qq);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[qq] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Hq
    });
    var Yq = gq(37156),
      lq = gq(39612),
      Oq = gq(37153),
      mq = gq(38653),
      xq = gq(37151),
      Aq = gq(39662);
    class cq {
      constructor() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, qq && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(qq) {
        this._zOffset !== qq && (this._zOffset = qq, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(qq) {
        this._zOffsetUnits !== qq && (this._zOffsetUnits = qq, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(qq) {
        this._cullFace !== qq && (this._cullFace = qq, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(qq) {
        this._cull !== qq && (this._cull = qq, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(qq) {
        this._depthFunc !== qq && (this._depthFunc = qq, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(qq) {
        this._depthMask !== qq && (this._depthMask = qq, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(qq) {
        this._depthTest !== qq && (this._depthTest = qq, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(qq) {
        this._frontFace !== qq && (this._frontFace = qq, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(qq) {
        this.isDirty && (this._isCullDirty && (this.cull ? qq.enable(qq.CULL_FACE) : qq.disable(qq.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (qq.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (qq.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? qq.enable(qq.DEPTH_TEST) : qq.disable(qq.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (qq.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (qq.enable(qq.POLYGON_OFFSET_FILL), qq.polygonOffset(this.zOffset, this.zOffsetUnits)) : qq.disable(qq.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (qq.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class uq {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(qq) {
        this._func !== qq && (this._func = qq, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(qq) {
        this._backFunc !== qq && (this._backFunc = qq, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(qq) {
        this._funcRef !== qq && (this._funcRef = qq, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(qq) {
        this._funcMask !== qq && (this._funcMask = qq, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(qq) {
        this._opStencilFail !== qq && (this._opStencilFail = qq, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(qq) {
        this._opDepthFail !== qq && (this._opDepthFail = qq, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(qq) {
        this._opStencilDepthPass !== qq && (this._opStencilDepthPass = qq, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(qq) {
        this._backOpStencilFail !== qq && (this._backOpStencilFail = qq, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(qq) {
        this._backOpDepthFail !== qq && (this._backOpDepthFail = qq, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(qq) {
        this._backOpStencilDepthPass !== qq && (this._backOpStencilDepthPass = qq, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(qq) {
        this._mask !== qq && (this._mask = qq, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(qq) {
        this._enabled !== qq && (this._enabled = qq, this._isStencilTestDirty = !0)
      }
      constructor() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, qq && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(qq) {
        if (!qq) return;
        const Eq = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Eq ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Eq ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Eq ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Eq ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Eq ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Eq ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Eq ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Eq ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Eq ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Eq ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Eq ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Eq ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? qq.enable(qq.STENCIL_TEST) : qq.disable(qq.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (qq.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (qq.stencilFuncSeparate(qq.FRONT, this.func, this.funcRef, this.funcMask), qq.stencilFuncSeparate(qq.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (qq.stencilOpSeparate(qq.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), qq.stencilOpSeparate(qq.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Bq {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Bq.ALWAYS, this.opStencilFail = Bq.KEEP, this.opDepthFail = Bq.KEEP, this.opStencilDepthPass = Bq.REPLACE, this.backFunc = Bq.ALWAYS, this.backOpStencilFail = Bq.KEEP, this.backOpDepthFail = Bq.KEEP, this.backOpStencilDepthPass = Bq.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(qq) {
        this.func = qq
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(qq) {
        this.backFunc = qq
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(qq) {
        this.funcRef = qq
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(qq) {
        this.funcMask = qq
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(qq) {
        this.opStencilFail = qq
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(qq) {
        this.opDepthFail = qq
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(qq) {
        this.opStencilDepthPass = qq
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(qq) {
        this.backOpStencilFail = qq
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(qq) {
        this.backOpDepthFail = qq
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(qq) {
        this.backOpStencilDepthPass = qq
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(qq) {
        this.mask = qq
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(qq) {
        this.enabled = qq
      }
    }
    Bq.ALWAYS = 519, Bq.KEEP = 7680, Bq.REPLACE = 7681;
    var Wq = gq(39667),
      Nq = gq(39636),
      aq = gq(39593),
      Vq = gq(39626),
      dq = gq(39630);

    function jq(qq, Eq) {
      if (Eq) {
        const {
          requestAnimationFrame: gq
        } = Eq;
        if ("function" === typeof gq) return gq(qq)
      }
      if ((0, Vq.n)()) {
        const {
          requestAnimationFrame: gq
        } = Eq || window;
        if ("function" === typeof gq) return gq(qq)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(qq);
      return setTimeout(qq, 16)
    }
    class Hq {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(qq) {
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
      get vYq() {
        return this._useReverseDepthBuffer
      }
      set vYq(qq) {
        qq !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = qq, this._depthCullingState.depthFunc = qq ? 518 : 515)
      }
      setColorWrite(qq) {
        qq !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = qq)
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
      _getGlobalDefines(qq) {
        if (qq) return this.isNDCHalfZRange ? qq.IS_NDC_HALF_ZRANGE = "" : delete qq.IS_NDC_HALF_ZRANGE, this.vYq ? qq.USE_REVERSE_DEPTHBUFFER = "" : delete qq.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? qq.USE_EXACT_SRGB_CONVERSIONS = "" : delete qq.USE_EXACT_SRGB_CONVERSIONS);
        {
          let qq = "";
          return this.isNDCHalfZRange && (qq += "#define IS_NDC_HALF_ZRANGE"), this.vYq && (qq && (qq += "\n"), qq += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (qq && (qq += "\n"), qq += "#define USE_EXACT_SRGB_CONVERSIONS"), qq
        }
      }
      _rebuildInternalTextures() {
        const qq = this._internalTexturesCache.slice();
        for (const Eq of qq) Eq._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const qq = this._renderTargetWrapperCache.slice();
        for (const Eq of qq) Eq.textures?.some((qq => 15 === qq.source)) || Eq._rebuild()
      }
      _rebuildEffects() {
        for (const qq in this._compiledEffects) {
          const Eq = this._compiledEffects[qq];
          Eq._pipelineContext = null, Eq._prepareEffect()
        }
        lq.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        mq.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(qq) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Eq = this._depthCullingState.depthTest,
            gq = this._depthCullingState.depthFunc,
            Yq = this._depthCullingState.depthMask,
            lq = this._stencilState.stencilTest;
          qq(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Eq, this._depthCullingState.depthFunc = gq, this._depthCullingState.depthMask = Yq, this._stencilState.stencilTest = lq, this._flagContextRestored()
        }), 0)
      }
      get bM() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(qq) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(qq) {}
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
          const qq = new Uint8Array(4),
            Eq = [qq, qq, qq, qq, qq, qq];
          this._emptyCubeTexture = this.createRawCubeTexture(Eq, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(qq) {
        this._framebufferDimensionsObject = qq
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(qq) {
        if (!qq) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Eq = this._activeRenderLoops.indexOf(qq);
        Eq >= 0 && (this._activeRenderLoops.splice(Eq, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: qq
            } = this.customAnimationFrameRequester;
            qq && qq(this.customAnimationFrameRequester.aa), delete this.customAnimationFrameRequester.aa
          }
        } else if (0 !== this._frameHandler) {
          const qq = this._frameHandler;
          if (this._frameHandler = 0, (0, Vq.n)()) {
            const {
              cancelAnimationFrame: Eq
            } = this.getHostWindow() || window;
            if ("function" === typeof Eq) return Eq(qq)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(qq);
          return clearTimeout(qq)
        }
      }
      Qr() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Kr() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(qq) {
        this._maxFPS = qq, void 0 !== qq && (this._minFrameTime = qq <= 0 ? Number.MAX_VALUE : 1e3 / qq)
      }
      _isOverFrameTime(qq) {
        if (!qq || void 0 === this._maxFPS) return !1;
        const Eq = qq - this._lastFrameTime;
        return this._lastFrameTime = qq, this._renderAccumulator += Eq, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(qq) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(qq)) {
          let qq = !0;
          (this.bM || !this.renderEvenInBackground && this._windowIsBackground) && (qq = !1), qq && (this.Qr(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Kr())
        }
      }
      _renderLoop(qq) {
        this._processFrame(qq), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let qq = 0; qq < this._activeRenderLoops.length; qq++) {
          (0, this._activeRenderLoops[qq])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(qq, Eq) {
        return jq(qq, Eq)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.aa = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.aa) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(qq) {
        -1 === this._activeRenderLoops.indexOf(qq) && (this._activeRenderLoops.push(qq), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(qq) {
        this._depthCullingState.depthTest = qq
      }
      setZOffset(qq) {
        this._depthCullingState.zOffset = this.vYq ? -qq : qq
      }
      getZOffset() {
        const qq = this._depthCullingState.zOffset;
        return this.vYq ? -qq : qq
      }
      setZOffsetUnits(qq) {
        this._depthCullingState.zOffsetUnits = this.vYq ? -qq : qq
      }
      getZOffsetUnits() {
        const qq = this._depthCullingState.zOffsetUnits;
        return this.vYq ? -qq : qq
      }
      getHostWindow() {
        return (0, Vq.n)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(qq) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const qq of this.scenes) qq._rebuildTextures();
        for (const qq of this._virtualScenes) qq._rebuildTextures()
      }
      _releaseRenderTargetWrapper(qq) {
        const Eq = this._renderTargetWrapperCache.indexOf(qq); - 1 !== Eq && this._renderTargetWrapperCache.splice(Eq, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(qq, Eq, gq) {
        const Yq = Eq || this.getRenderWidth(),
          lq = gq || this.getRenderHeight(),
          Oq = qq.x || 0,
          mq = qq.y || 0;
        this._cachedViewport = qq, this._viewport(Oq * Yq, mq * lq, Yq * qq.width, lq * qq.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(qq) {
        return new Path2D(qq)
      }
      get description() {
        let qq = this.name + this.version;
        return this._caps.parallelShaderCompile && (qq += " - Parallel shader compilation"), qq
      }
      _createTextureBase(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          xq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Aq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          cq = arguments.length > 7 ? arguments[7] : void 0,
          uq = arguments.length > 8 ? arguments[8] : void 0,
          Bq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Wq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Nq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Vq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          dq = arguments.length > 13 ? arguments[13] : void 0,
          jq = arguments.length > 14 ? arguments[14] : void 0,
          oq = arguments.length > 15 ? arguments[15] : void 0;
        const Pq = "data:" === (qq = qq || "").substring(0, 5),
          Qq = "blob:" === qq.substring(0, 5),
          yq = Pq && -1 !== qq.indexOf(";base64,"),
          tq = Wq || new aq.c(this, 1);
        tq !== Wq && (tq.label = qq.substring(0, 60));
        const rq = qq;
        !this._transformTextureUrl || yq || Wq || Bq || (qq = this._transformTextureUrl(qq)), rq !== qq && (tq._originalUrl = rq);
        const vq = qq.lastIndexOf(".");
        let hq = Vq || (vq > -1 ? qq.substring(vq).toLowerCase() : "");
        hq.indexOf("?") > -1 && (hq = hq.split("?")[0]);
        const nq = Hq.GetCompatibleTextureLoader(hq, dq);
        Yq && Yq.addPendingData(tq), tq.url = qq, tq.generateMipMaps = !Eq, tq.samplingMode = lq, tq.invertY = gq, tq._useSRGBBuffer = this._getUseSRGBBuffer(!!oq, Eq), this._doNotHandleContextLost || (tq._buffer = Bq);
        let bq = null;
        xq && !Wq && (bq = tq.onLoadedObservable.add(xq)), Wq || this._internalTexturesCache.push(tq);
        const iq = (gq, Wq) => {
          Yq && Yq.removePendingData(tq), qq === rq ? (bq && tq.onLoadedObservable.remove(bq), Oq.b.UseFallbackTexture && qq !== Oq.b.FallbackTexture && this._createTextureBase(Oq.b.FallbackTexture, Eq, tq.invertY, Yq, lq, null, Aq, cq, uq, Bq, tq), gq = (gq || "Unknown error") + (Oq.b.UseFallbackTexture ? " - Fallback texture was used" : ""), tq.onErrorObservable.notifyObservers({
            message: gq,
            exception: Wq
          }), Aq && Aq(gq, Wq)) : (mq.b.Warn(`Failed to load ${qq}, falling back to ${rq}`), this._createTextureBase(rq, Eq, tq.invertY, Yq, lq, xq, Aq, cq, uq, Bq, tq, Nq, Vq, dq, jq, oq))
        };
        if (nq) {
          const Eq = async qq => {
            (await nq).loadData(qq, tq, ((qq, Eq, gq, Oq, mq, xq) => {
              xq ? iq("TextureLoader failed to load data") : cq(tq, hq, Yq, {
                width: qq,
                height: Eq
              }, tq.invertY, !gq, Oq, (() => (mq(), !1)), lq)
            }), jq)
          };
          if (Bq) {
            const qq = async qq => {
              try {
                await Eq(qq)
              } catch (gq) {
                iq("Failed to parse texture data", gq)
              }
            };
            Bq instanceof ArrayBuffer ? qq(new Uint8Array(Bq)) : ArrayBuffer.isView(Bq) ? qq(Bq) : Aq && Aq("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(qq, (async qq => {
            try {
              await Eq(new Uint8Array(qq))
            } catch (gq) {
              iq("Failed to parse texture data", gq)
            }
          }), void 0, Yq ? Yq.offlineProvider : void 0, !0, ((qq, Eq) => {
            iq("Unable to load " + (qq && qq.responseURL, Eq))
          }))
        } else {
          const gq = qq => {
            Qq && !this._doNotHandleContextLost && (tq._buffer = qq), cq(tq, hq, Yq, qq, tq.invertY, Eq, !1, uq, lq)
          };
          !Pq || yq ? Bq && ("string" === typeof Bq.decoding || Bq.close) ? gq(Bq) : Hq._FileToolsLoadImage(qq || "", gq, iq, Yq ? Yq.offlineProvider : null, dq, tq.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Bq || Bq instanceof ArrayBuffer || ArrayBuffer.isView(Bq) || Bq instanceof Blob ? Hq._FileToolsLoadImage(Bq, gq, iq, Yq ? Yq.offlineProvider : null, dq, tq.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Bq && gq(Bq)
        }
        return tq
      }
      _rebuildBuffers() {
        for (const qq of this._uniformBuffers) qq._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Vq.f)() ? document : null
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
        for (const qq in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, qq) && (this._boundTexturesCache[qq] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(qq) {
        this._name = qq
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
      setHardwareScalingLevel(qq) {
        this._hardwareScalingLevel = qq, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(qq) {
        this._doNotHandleContextLost = qq
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(qq, Eq, gq) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new cq, this._stencilStateComposer = new uq, this._stencilState = new Bq, this._alphaState = new Wq.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Yq.d, this.onCanvasFocusObservable = new Yq.d, this.onNewSceneAddedObservable = new Yq.d, this.onResizeObservable = new Yq.d, this.onCanvasPointerOutObservable = new Yq.d, this.onEffectErrorObservable = new Yq.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Yq.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = qq => this._renderLoop(qq), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Yq.d, this.onAfterShaderCompilationObservable = new Yq.d, this.onBeginFrameObservable = new Yq.d, this.onEndFrameObservable = new Yq.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Yq.d, this.onContextRestoredObservable = new Yq.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.MJ = new Yq.d, this.onReleaseEffectsObservable = new Yq.d, Oq.b.Instances.push(this), this.startTime = Aq.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, xq.b.SetMatrixPrecision(!!Eq.useLargeWorldRendering || !!Eq.useHighPrecisionMatrix), (0, Vq.j)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Eq.antialias = qq ?? Eq.antialias, Eq.deterministicLockstep = Eq.deterministicLockstep ?? !1, Eq.lockstepMaxSteps = Eq.lockstepMaxSteps ?? 4, Eq.timeStep = Eq.timeStep ?? 1 / 60, Eq.stencil = Eq.stencil ?? !0, this._audioContext = Eq.audioEngineOptions?.audioContext ?? null, this._audioDestination = Eq.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Eq.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Eq.doNotHandleContextLost, this._isStencilEnable = !!Eq.stencil, this.useExactSrgbConversions = Eq.useExactSrgbConversions ?? !1, this.canvasTabIndex = Eq.canvasTabIndex ?? this.canvasTabIndex;
        const lq = (0, Vq.n)() && window.devicePixelRatio || 1,
          mq = Eq.limitDeviceRatio || lq;
        gq = gq || Eq.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = gq, this._hardwareScalingLevel = gq ? 1 / Math.min(mq, lq) : 1, this._lastDevicePixelRatio = lq, this._creationOptions = Eq
      }
      resize() {
        let qq, Eq, gq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const qq = (0, Vq.n)() && window.devicePixelRatio || 1,
            Eq = this._lastDevicePixelRatio / qq;
          this._lastDevicePixelRatio = qq, this._hardwareScalingLevel *= Eq
        }
        if ((0, Vq.n)() && (0, Vq.f)())
          if (this._renderingCanvas) {
            const gq = this._renderingCanvas.getBoundingClientRect?.();
            qq = this._renderingCanvas.clientWidth || gq?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Eq = this._renderingCanvas.clientHeight || gq?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else qq = window.innerWidth, Eq = window.innerHeight;
        else qq = this._renderingCanvas ? this._renderingCanvas.width : 100, Eq = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(qq / this._hardwareScalingLevel, Eq / this._hardwareScalingLevel, gq)
      }
      setSize(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (qq |= 0, Eq |= 0, !gq && this._renderingCanvas.width === qq && this._renderingCanvas.height === Eq) return !1;
        if (this._renderingCanvas.width = qq, this._renderingCanvas.height = Eq, this.scenes) {
          for (let qq = 0; qq < this.scenes.length; qq++) {
            const Eq = this.scenes[qq];
            for (let qq = 0; qq < Eq.cameras.length; qq++) {
              Eq.cameras[qq]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq) {
        throw (0, Nq.m)("engine.rawTexture")
      }
      createRawCubeTexture(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        throw (0, Nq.m)("engine.rawTexture")
      }
      createRawTexture3D(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
        throw (0, Nq.m)("engine.rawTexture")
      }
      createRawTexture2DArray(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq) {
        throw (0, Nq.m)("engine.rawTexture")
      }
      _sharedInit(qq) {
        this._renderingCanvas = qq
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const qq = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== qq.indexOf("Mobile") || -1 !== qq.indexOf("Mac") && (0, Vq.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Vq.n)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(qq) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(qq, !1)
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
      _createImageBitmapFromSource(qq, Eq) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(qq, Eq) {
        return createImageBitmap(qq, Eq)
      }
      resizeImageBitmap(qq, Eq, gq) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(qq) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(qq, Eq) {
        if ("undefined" === typeof document) return new OffscreenCanvas(qq, Eq);
        const gq = document.createElement("canvas");
        return gq.width = qq, gq.height = Eq, gq
      }
      createCanvas(qq, Eq) {
        return Hq._CreateCanvas(qq, Eq)
      }
      static _FileToolsLoadImage(qq, Eq, gq, Yq, lq, Oq, mq) {
        if (!dq.e.loadImage) throw (0, Nq.m)("FileTools");
        return dq.e.loadImage(qq, Eq, gq, Yq, lq, Oq, mq)
      }
      _loadFile(qq, Eq, gq, Yq, lq, Oq) {
        const mq = (0, dq.m)(qq, Eq, gq, Yq, lq, Oq);
        return this._activeRequests.push(mq), mq.onCompleteObservable.add((() => {
          const qq = this._activeRequests.indexOf(mq); - 1 !== qq && this._activeRequests.splice(qq, 1)
        })), mq
      }
      static _FileToolsLoadFile(qq, Eq, gq, Yq, lq, Oq) {
        if (dq.e.loadFile) return dq.e.loadFile(qq, Eq, gq, Yq, lq, Oq);
        throw (0, Nq.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), lq.d.ResetCache();
        for (const Eq of this._activeRequests) Eq.abort();
        this._boundRenderFunction = null, this.MJ.notifyObservers(this), this.MJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Vq.n)() && window.removeEventListener("resize", this._checkForMobile);
        const qq = Oq.b.Instances.indexOf(this);
        qq >= 0 && Oq.b.Instances.splice(qq, 1), Oq.b.Instances.length || (Oq.b.OnEnginesDisposedObservable.notifyObservers(this), Oq.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(qq) {
        throw (0, Nq.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(qq, Eq) {
        for (let gq = 0; gq < Oq.b.Instances.length; gq++) {
          const Yq = Oq.b.Instances[gq];
          for (let gq = 0; gq < Yq.scenes.length; gq++) Yq.scenes[gq].markAllMaterialsAsDirty(qq, Eq)
        }
      }
      static GetCompatibleTextureLoader(qq, Eq) {
        return null
      }
    }
    Hq._RenderPassIdCounter = 0, Hq._RescalePostProcessFactory = null, Hq.CollisionsEpsilon = .001, Hq.QueueNewFrame = jq
  },
  39617: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
      }
    }
    Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
  },
  39628: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Wq,
      g: () => oq,
      i: () => aq,
      j: () => Nq,
      l: () => Vq,
      n: () => Hq,
      q: () => Bq,
      t: () => cq,
      w: () => uq,
      x: () => Aq,
      y: () => xq
    });
    class Yq {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(qq) {
        qq && this.program && qq(this.program)
      }
      setEngine(qq) {
        this.engine = qq
      }
      _fillEffectInformation(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = this.engine;
        if (Aq.supportsUniformBuffers)
          for (const uq in Eq) qq.bindUniformBlock(uq, Eq[uq]);
        let cq;
        for (this.engine.getUniforms(this, gq).forEach(((qq, Eq) => {
            Yq[gq[Eq]] = qq
          })), this._uniforms = Yq, cq = 0; cq < lq.length; cq++) {
          null == qq.getUniform(lq[cq]) && (lq.splice(cq, 1), cq--)
        }
        lq.forEach(((qq, Eq) => {
          Oq[qq] = Eq
        }));
        for (const uq of Aq.getAttributes(this, mq)) xq.push(uq)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(qq, Eq) {
        const gq = this._valueCache[qq],
          Yq = Eq.updateFlag;
        if (void 0 !== gq && gq === Yq) return !1;
        const lq = Eq.bYq();
        let Oq = this._matrixValueCache[qq];
        if (void 0 !== gq && null !== gq && void 0 !== Oq) {
          let Eq = !0;
          for (let qq = 15; qq >= 0; qq--)
            if (Oq[qq] !== lq[qq]) {
              Eq = !1;
              break
            } if (Eq) return this._valueCache[qq] = Yq, !1
        }
        return void 0 === Oq && (Oq = this._matrixValueCache[qq] = new Float32Array(16)), Oq.set(lq), this._valueCache[qq] = Yq, !0
      }
      _cacheFloat2(qq, Eq, gq) {
        let Yq = this._valueCache[qq];
        if (!Yq || 2 !== Yq.length) return Yq = [Eq, gq], this._valueCache[qq] = Yq, !0;
        let lq = !1;
        return Yq[0] !== Eq && (Yq[0] = Eq, lq = !0), Yq[1] !== gq && (Yq[1] = gq, lq = !0), lq
      }
      _cacheFloat3(qq, Eq, gq, Yq) {
        let lq = this._valueCache[qq];
        if (!lq || 3 !== lq.length) return lq = [Eq, gq, Yq], this._valueCache[qq] = lq, !0;
        let Oq = !1;
        return lq[0] !== Eq && (lq[0] = Eq, Oq = !0), lq[1] !== gq && (lq[1] = gq, Oq = !0), lq[2] !== Yq && (lq[2] = Yq, Oq = !0), Oq
      }
      _cacheFloat4(qq, Eq, gq, Yq, lq) {
        let Oq = this._valueCache[qq];
        if (!Oq || 4 !== Oq.length) return Oq = [Eq, gq, Yq, lq], this._valueCache[qq] = Oq, !0;
        let mq = !1;
        return Oq[0] !== Eq && (Oq[0] = Eq, mq = !0), Oq[1] !== gq && (Oq[1] = gq, mq = !0), Oq[2] !== Yq && (Oq[2] = Yq, mq = !0), Oq[3] !== lq && (Oq[3] = lq, mq = !0), mq
      }
      setInt(qq, Eq) {
        const gq = this._valueCache[qq];
        void 0 !== gq && gq === Eq || this.engine.setInt(this._uniforms[qq], Eq) && (this._valueCache[qq] = Eq)
      }
      setInt2(qq, Eq, gq) {
        this._cacheFloat2(qq, Eq, gq) && (this.engine.setInt2(this._uniforms[qq], Eq, gq) || (this._valueCache[qq] = null))
      }
      setInt3(qq, Eq, gq, Yq) {
        this._cacheFloat3(qq, Eq, gq, Yq) && (this.engine.setInt3(this._uniforms[qq], Eq, gq, Yq) || (this._valueCache[qq] = null))
      }
      setInt4(qq, Eq, gq, Yq, lq) {
        this._cacheFloat4(qq, Eq, gq, Yq, lq) && (this.engine.setInt4(this._uniforms[qq], Eq, gq, Yq, lq) || (this._valueCache[qq] = null))
      }
      setIntArray(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setIntArray(this._uniforms[qq], Eq)
      }
      setIntArray2(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setIntArray2(this._uniforms[qq], Eq)
      }
      setIntArray3(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setIntArray3(this._uniforms[qq], Eq)
      }
      setIntArray4(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setIntArray4(this._uniforms[qq], Eq)
      }
      setUInt(qq, Eq) {
        const gq = this._valueCache[qq];
        void 0 !== gq && gq === Eq || this.engine.setUInt(this._uniforms[qq], Eq) && (this._valueCache[qq] = Eq)
      }
      setUInt2(qq, Eq, gq) {
        this._cacheFloat2(qq, Eq, gq) && (this.engine.setUInt2(this._uniforms[qq], Eq, gq) || (this._valueCache[qq] = null))
      }
      setUInt3(qq, Eq, gq, Yq) {
        this._cacheFloat3(qq, Eq, gq, Yq) && (this.engine.setUInt3(this._uniforms[qq], Eq, gq, Yq) || (this._valueCache[qq] = null))
      }
      setUInt4(qq, Eq, gq, Yq, lq) {
        this._cacheFloat4(qq, Eq, gq, Yq, lq) && (this.engine.setUInt4(this._uniforms[qq], Eq, gq, Yq, lq) || (this._valueCache[qq] = null))
      }
      setUIntArray(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setUIntArray(this._uniforms[qq], Eq)
      }
      setUIntArray2(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setUIntArray2(this._uniforms[qq], Eq)
      }
      setUIntArray3(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setUIntArray3(this._uniforms[qq], Eq)
      }
      setUIntArray4(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setUIntArray4(this._uniforms[qq], Eq)
      }
      setArray(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setArray(this._uniforms[qq], Eq)
      }
      setArray2(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setArray2(this._uniforms[qq], Eq)
      }
      setArray3(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setArray3(this._uniforms[qq], Eq)
      }
      setArray4(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setArray4(this._uniforms[qq], Eq)
      }
      setMatrices(qq, Eq) {
        Eq && (this._valueCache[qq] = null, this.engine.setMatrices(this._uniforms[qq], Eq))
      }
      setMatrix(qq, Eq) {
        this._cacheMatrix(qq, Eq) && (this.engine.setMatrices(this._uniforms[qq], Eq.bYq()) || (this._valueCache[qq] = null))
      }
      setMatrix3x3(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setMatrix3x3(this._uniforms[qq], Eq)
      }
      setMatrix2x2(qq, Eq) {
        this._valueCache[qq] = null, this.engine.setMatrix2x2(this._uniforms[qq], Eq)
      }
      setFloat(qq, Eq) {
        const gq = this._valueCache[qq];
        void 0 !== gq && gq === Eq || this.engine.setFloat(this._uniforms[qq], Eq) && (this._valueCache[qq] = Eq)
      }
      setVector2(qq, Eq) {
        this._cacheFloat2(qq, Eq.x, Eq.y) && (this.engine.setFloat2(this._uniforms[qq], Eq.x, Eq.y) || (this._valueCache[qq] = null))
      }
      setFloat2(qq, Eq, gq) {
        this._cacheFloat2(qq, Eq, gq) && (this.engine.setFloat2(this._uniforms[qq], Eq, gq) || (this._valueCache[qq] = null))
      }
      setVector3(qq, Eq) {
        this._cacheFloat3(qq, Eq.x, Eq.y, Eq.z) && (this.engine.setFloat3(this._uniforms[qq], Eq.x, Eq.y, Eq.z) || (this._valueCache[qq] = null))
      }
      setFloat3(qq, Eq, gq, Yq) {
        this._cacheFloat3(qq, Eq, gq, Yq) && (this.engine.setFloat3(this._uniforms[qq], Eq, gq, Yq) || (this._valueCache[qq] = null))
      }
      setVector4(qq, Eq) {
        this._cacheFloat4(qq, Eq.x, Eq.y, Eq.z, Eq.w) && (this.engine.setFloat4(this._uniforms[qq], Eq.x, Eq.y, Eq.z, Eq.w) || (this._valueCache[qq] = null))
      }
      setQuaternion(qq, Eq) {
        this._cacheFloat4(qq, Eq.x, Eq.y, Eq.z, Eq.w) && (this.engine.setFloat4(this._uniforms[qq], Eq.x, Eq.y, Eq.z, Eq.w) || (this._valueCache[qq] = null))
      }
      setFloat4(qq, Eq, gq, Yq, lq) {
        this._cacheFloat4(qq, Eq, gq, Yq, lq) && (this.engine.setFloat4(this._uniforms[qq], Eq, gq, Yq, lq) || (this._valueCache[qq] = null))
      }
      setColor3(qq, Eq) {
        this._cacheFloat3(qq, Eq.r, Eq.g, Eq.b) && (this.engine.setFloat3(this._uniforms[qq], Eq.r, Eq.g, Eq.b) || (this._valueCache[qq] = null))
      }
      setColor4(qq, Eq, gq) {
        this._cacheFloat4(qq, Eq.r, Eq.g, Eq.b, gq) && (this.engine.setFloat4(this._uniforms[qq], Eq.r, Eq.g, Eq.b, gq) || (this._valueCache[qq] = null))
      }
      setDirectColor4(qq, Eq) {
        this._cacheFloat4(qq, Eq.r, Eq.g, Eq.b, Eq.a) && (this.engine.setFloat4(this._uniforms[qq], Eq.r, Eq.g, Eq.b, Eq.a) || (this._valueCache[qq] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var lq = gq(39630);
    const Oq = new WeakMap,
      mq = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function xq(qq) {
      let Eq = Oq.get(qq);
      if (!Eq) {
        if (!qq) return mq;
        Eq = {
          _webGLVersion: qq.TEXTURE_BINDING_3D ? 2 : 1,
          _context: qq,
          parallelShaderCompile: qq.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Oq.set(qq, Eq)
      }
      return Eq
    }

    function Aq(qq) {
      Oq.delete(qq)
    }

    function cq(qq, Eq, gq, Yq, lq, Oq) {
      const mq = xq(Yq);
      Oq || (Oq = mq._createShaderProgramInjection ?? Wq);
      return Oq(qq, jq(Eq, "vertex", Yq, mq._contextWasLost), jq(gq, "fragment", Yq, mq._contextWasLost), Yq, lq, mq.validateShaderPrograms)
    }

    function uq(qq, Eq, gq, Yq, lq) {
      let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mq = arguments.length > 6 ? arguments[6] : void 0;
      const Aq = xq(lq);
      mq || (mq = Aq._createShaderProgramInjection ?? Wq);
      const cq = Aq._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return mq(qq, dq(Eq, "vertex", Yq, cq, lq, Aq._contextWasLost), dq(gq, "fragment", Yq, cq, lq, Aq._contextWasLost), lq, Oq, Aq.validateShaderPrograms)
    }

    function Bq(qq, Eq) {
      const gq = new Yq,
        lq = xq(qq);
      return lq.parallelShaderCompile && !lq.disableParallelShaderCompile && (gq.isParallelCompiled = !0), gq.context = lq._context, gq
    }

    function Wq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 5 ? arguments[5] : void 0;
      const Oq = Yq.createProgram();
      if (qq.program = Oq, !Oq) throw new Error("Unable to create program");
      return Yq.attachShader(Oq, Eq), Yq.attachShader(Oq, gq), Yq.linkProgram(Oq), qq.context = Yq, qq.vertexShader = Eq, qq.fragmentShader = gq, qq.isParallelCompiled || aq(qq, Yq, lq), Oq
    }

    function Nq(qq, Eq, gq) {
      const Yq = qq;
      if (Yq._isDisposed) return !1;
      const lq = xq(Eq);
      return !!(lq && lq.parallelShaderCompile && lq.parallelShaderCompile.COMPLETION_STATUS_KHR && Yq.program && Eq.getProgramParameter(Yq.program, lq.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (aq(Yq, Eq, gq), !0)
    }

    function aq(qq, Eq, gq) {
      const Yq = qq.context,
        lq = qq.vertexShader,
        Oq = qq.fragmentShader,
        mq = qq.program;
      if (!Yq.getProgramParameter(mq, Yq.LINK_STATUS)) {
        if (!Eq.getShaderParameter(lq, Eq.COMPILE_STATUS)) {
          const gq = Eq.getShaderInfoLog(lq);
          if (gq) throw qq.vertexCompilationError = gq, new Error("VERTEX SHADER " + gq)
        }
        if (!Eq.getShaderParameter(Oq, Eq.COMPILE_STATUS)) {
          const gq = Eq.getShaderInfoLog(Oq);
          if (gq) throw qq.fragmentCompilationError = gq, new Error("FRAGMENT SHADER " + gq)
        }
        const gq = Yq.getProgramInfoLog(mq);
        if (gq) throw qq.programLinkError = gq, new Error(gq)
      }
      if (gq) {
        Yq.validateProgram(mq);
        if (!Yq.getProgramParameter(mq, Yq.VALIDATE_STATUS)) {
          const Eq = Yq.getProgramInfoLog(mq);
          if (Eq) throw qq.programValidationError = Eq, new Error(Eq)
        }
      }
      Yq.deleteShader(lq), Yq.deleteShader(Oq), qq.vertexShader = void 0, qq.fragmentShader = void 0, qq.onCompiled && (qq.onCompiled(), qq.onCompiled = void 0)
    }

    function Vq(qq, Eq, gq, Yq, lq, Oq, mq, Aq, Bq) {
      let Wq = arguments.length > 10 ? arguments[10] : void 0,
        Nq = arguments.length > 11 ? arguments[11] : void 0,
        aq = arguments.length > 12 ? arguments[12] : void 0;
      const Vq = xq(qq.context);
      Nq || (Nq = Vq.createRawShaderProgramInjection ?? cq), aq || (aq = Vq.createShaderProgramInjection ?? uq);
      const dq = qq;
      dq.program = Yq ? Nq(dq, Eq, gq, dq.context, Bq) : aq(dq, Eq, gq, Aq, dq.context, Bq), dq.program.__SPECTOR_rebuildProgram = mq, Wq()
    }

    function dq(qq, Eq, gq, Yq, Oq, mq) {
      return jq((0, lq.h)(qq, gq, Yq), Eq, Oq, mq)
    }

    function jq(qq, Eq, gq, Yq) {
      const lq = gq.createShader("vertex" === Eq ? gq.VERTEX_SHADER : gq.FRAGMENT_SHADER);
      if (!lq) {
        let qq, lq = gq.NO_ERROR;
        for (;
          (qq = gq.getError()) !== gq.NO_ERROR;) lq = qq;
        throw new Error(`Something went wrong while creating a gl ${Eq} shader object. gl error=${lq}, gl isContextLost=${gq.isContextLost()}, _contextWasLost=${Yq}`)
      }
      return gq.shaderSource(lq, qq), gq.compileShader(lq), lq
    }

    function Hq(qq, Eq) {
      Eq.useProgram(qq)
    }

    function oq(qq, Eq) {
      const gq = qq;
      if (!gq.isParallelCompiled) return void Eq(qq);
      const Yq = gq.onCompiled;
      gq.onCompiled = () => {
        Yq?.(), Eq(qq)
      }
    }
  },
  39608: (qq, Eq, gq) => {
    gq.d(Eq, {
      ThinEngine: () => Qq
    });
    var Yq = gq(39612),
      lq = gq(39628),
      Oq = gq(39653),
      mq = gq(39676),
      xq = gq(38653),
      Aq = gq(39626);
    class cq {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(qq, Eq, gq, Yq, lq) {
        if (lq.drawBuffersExtensionDisabled) {
          const Eq = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          qq = qq.replace(Eq, "")
        }
        return qq
      }
    }
    const uq = /(flat\s)?\s*varying\s*.*/;
    class Bq {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(qq) {
        return qq.replace("attribute", "in")
      }
      varyingCheck(qq, Eq) {
        return uq.test(qq)
      }
      varyingProcessor(qq, Eq) {
        return qq.replace("varying", Eq ? "in" : "out")
      }
      postProcessor(qq, Eq, gq) {
        const Yq = -1 !== qq.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (qq = (qq = qq.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), gq) {
          const gq = -1 !== qq.search(/layout *\(location *= *0\) *out/g),
            lq = -1 !== Eq.indexOf("#define DUAL_SOURCE_BLENDING"),
            Oq = lq ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          lq && (qq = "#extension GL_EXT_blend_func_extended : require\n" + qq), qq = (qq = (qq = (qq = (qq = (qq = (qq = qq.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Yq || gq ? "" : Oq) + "void main(")
        } else {
          Eq.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (qq = "invariant gl_Position;\n" + qq);
          if (-1 !== Eq.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + qq
        }
        return qq
      }
    }
    var Wq = gq(39683),
      Nq = gq(39696),
      aq = gq(39698),
      Vq = gq(39593),
      dq = gq(39630),
      jq = gq(39623),
      Hq = gq(39703),
      oq = gq(39667);
    class Pq {}
    class Qq extends Oq.b {
      get name() {
        return this._name
      }
      set name(qq) {
        this._name = qq
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Yq.d.ShadersRepository
      }
      static set ShadersRepository(qq) {
        Yq.d.ShadersRepository = qq
      }
      get supportsUniformBuffers() {
        return this.Ra > 1 && !this.disableUniformBuffers
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
      constructor(qq, Eq, gq, Yq) {
        if (gq = gq || {}, super(Eq ?? gq.antialias, gq, Yq), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !qq) return;
        let Oq;
        if (qq.getContext) {
          if (Oq = qq, void 0 === gq.preserveDrawingBuffer && (gq.preserveDrawingBuffer = !1), void 0 === gq.xrCompatible && (gq.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const qq = navigator.userAgent;
            for (const Eq of Qq.ExceptionList) {
              const Yq = Eq.key,
                lq = Eq.targets;
              if (new RegExp(Yq).test(qq)) {
                if (Eq.capture && Eq.captureConstraint) {
                  const gq = Eq.capture,
                    Yq = Eq.captureConstraint,
                    lq = new RegExp(gq).exec(qq);
                  if (lq && lq.length > 0) {
                    if (parseInt(lq[lq.length - 1]) >= Yq) continue
                  }
                }
                for (const qq of lq) switch (qq) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    gq.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, lq.x)(this._gl)
            } : (this._onContextLost = qq => {
              qq.preventDefault(), this._contextWasLost = !0, (0, lq.x)(this._gl), xq.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Oq.addEventListener("webglcontextrestored", this._onContextRestored, !1), gq.powerPreference = gq.powerPreference || "high-performance"), Oq.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (gq.xrCompatible = !1), !gq.disableWebGL2Support) try {
            this._gl = Oq.getContext("webgl2", gq) || Oq.getContext("experimental-webgl2", gq), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (uq) {}
          if (!this._gl) {
            if (!Oq) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Oq.getContext("webgl", gq) || Oq.getContext("experimental-webgl", gq)
            } catch (uq) {
              throw new Error("WebGL not supported", {
                cause: uq
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = qq, Oq = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Eq = this._gl.getContextAttributes();
          Eq && (gq.stencil = Eq.stencil)
        }
        this._sharedInit(Oq), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== gq.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = gq.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let lq = 0; lq < this._caps.maxVertexAttribs; lq++) this._currentBufferPointers[lq] = new Pq;
        this._shaderProcessor = this.Ra > 1 ? new Bq : new cq;
        const mq = `Babylon.js v${Qq.Version}`;
        xq.b.Log(mq + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", mq);
        const Aq = (0, lq.y)(this._gl);
        Aq.validateShaderPrograms = this.validateShaderPrograms, Aq.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(qq) {
        return null
      }
      areAllEffectsReady() {
        for (const qq in this._compiledEffects) {
          if (!this._compiledEffects[qq].isReady()) return !1
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
        const qq = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != qq && (this._glRenderer = this._gl.getParameter(qq.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(qq.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Eq = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Eq, this._alphaState = new oq.c(this._caps.blendParametersPerTarget), Eq && (this._gl.blendEquationSeparateIndexed = Eq.blendEquationSeparateiOES.bind(Eq), this._gl.blendEquationIndexed = Eq.blendEquationiOES.bind(Eq), this._gl.blendFuncSeparateIndexed = Eq.blendFuncSeparateiOES.bind(Eq), this._gl.blendFuncIndexed = Eq.blendFunciOES.bind(Eq), this._gl.colorMaskIndexed = Eq.colorMaskiOES.bind(Eq), this._gl.disableIndexed = Eq.disableiOES.bind(Eq), this._gl.enableIndexed = Eq.enableiOES.bind(Eq)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const qq = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== qq) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = qq.drawBuffersWEBGL.bind(qq), this._caps.maxDrawBuffers = this._gl.getParameter(qq.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Eq = 0; Eq < 16; Eq++) this._gl["COLOR_ATTACHMENT" + Eq + "_WEBGL"] = qq["COLOR_ATTACHMENT" + Eq + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const qq = this._gl.getExtension("WEBGL_depth_texture");
          null != qq && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = qq.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const qq = this._gl.getExtension("OES_vertex_array_object");
          null != qq && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = qq.createVertexArrayOES.bind(qq), this._gl.bindVertexArray = qq.bindVertexArrayOES.bind(qq), this._gl.deleteVertexArray = qq.deleteVertexArrayOES.bind(qq))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const qq = this._gl.getExtension("ANGLE_instanced_arrays");
          null != qq ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = qq.drawArraysInstancedANGLE.bind(qq), this._gl.drawElementsInstanced = qq.drawElementsInstancedANGLE.bind(qq), this._gl.vertexAttribDivisor = qq.vertexAttribDivisorANGLE.bind(qq)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const qq = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Eq = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (qq && Eq && (this._caps.highPrecisionShaderSupported = 0 !== qq.precision && 0 !== Eq.precision, this._caps.shaderFloatPrecision = Math.min(qq.precision, Eq.precision)), !this._shouldUseHighPrecisionShader) {
            const qq = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Eq = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            qq && Eq && (this._caps.shaderFloatPrecision = Math.min(qq.precision, Eq.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const qq = this._gl.getExtension("EXT_blend_minmax");
          null != qq && (this._caps.blendMinMax = !0, this._gl.MAX = qq.MAX_EXT, this._gl.MIN = qq.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const qq = this._gl.getExtension("EXT_sRGB");
            null != qq && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: qq.SRGB_EXT,
              SRGB8: qq.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: qq.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const qq = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== qq && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && qq)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let gq = 0; gq < this._maxSimultaneousTextures; gq++) this._nextFreeTextureSlots.push(gq);
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
      get Ra() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const qq = this._workingCanvas.getContext("2d");
        qq && (this._workingContext = qq)
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
        const qq = this.getGlInfo();
        return qq && qq.renderer ? qq.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Oq = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Oq;
        let mq = 0;
        if (Eq && qq) {
          let Eq = !0;
          if (this._currentRenderTarget) {
            const gq = this._currentRenderTarget.texture?.format;
            if (void 0 !== gq && (0, Hq.m)(gq)) {
              const gq = this._currentRenderTarget.texture?.type;
              void 0 !== gq && (0, Hq.o)(gq) ? (Qq._TempClearColorUint32[0] = 255 * qq.r, Qq._TempClearColorUint32[1] = 255 * qq.g, Qq._TempClearColorUint32[2] = 255 * qq.b, Qq._TempClearColorUint32[3] = 255 * qq.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qq._TempClearColorUint32), Eq = !1) : (Qq._TempClearColorInt32[0] = 255 * qq.r, Qq._TempClearColorInt32[1] = 255 * qq.g, Qq._TempClearColorInt32[2] = 255 * qq.b, Qq._TempClearColorInt32[3] = 255 * qq.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Qq._TempClearColorInt32), Eq = !1)
            }
          }
          Eq && (this._gl.clearColor(qq.r, qq.g, qq.b, void 0 !== qq.a ? qq.a : 1), mq |= this._gl.COLOR_BUFFER_BIT)
        }
        gq && (this.vYq ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), mq |= this._gl.DEPTH_BUFFER_BIT), Yq && (this._gl.clearStencil(lq), mq |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(mq)
      }
      _clearColorAttachment(qq, Eq, gq, Yq) {
        if ((0, Hq.m)(gq)) {
          const gq = (0, Hq.o)(Yq),
            lq = gq ? Qq._TempClearColorUint32 : Qq._TempClearColorInt32;
          return lq[0] = Eq.r, lq[1] = Eq.g, lq[2] = Eq.b, lq[3] = Eq.a, void(gq ? this._gl.clearBufferuiv(this._gl.COLOR, qq, lq) : this._gl.clearBufferiv(this._gl.COLOR, qq, lq))
        }
        Qq._TempClearColorFloat32[0] = Eq.r, Qq._TempClearColorFloat32[1] = Eq.g, Qq._TempClearColorFloat32[2] = Eq.b, Qq._TempClearColorFloat32[3] = Eq.a, this._gl.clearBufferfv(this._gl.COLOR, qq, Qq._TempClearColorFloat32)
      }
      _viewport(qq, Eq, gq, Yq) {
        qq === this._viewportCached.x && Eq === this._viewportCached.y && gq === this._viewportCached.z && Yq === this._viewportCached.w || (this._viewportCached.x = qq, this._viewportCached.y = Eq, this._viewportCached.z = gq, this._viewportCached.w = Yq, this._gl.viewport(qq, Eq, gq, Yq))
      }
      Kr() {
        super.Kr(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Aq = qq;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = qq, this._integerMRTAttachmentsMask = !qq.isMulti && qq.texture && (0, Hq.m)(qq.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Aq._framebuffer);
        const cq = this._gl;
        qq.isMulti || (qq.is2DArray || qq.is3D ? (cq.framebufferTextureLayer(cq.FRAMEBUFFER, cq.COLOR_ATTACHMENT0, qq.texture._hardwareTexture?.underlyingResource, Oq, mq), Aq._currentLOD = Oq) : qq.isCube ? cq.framebufferTexture2D(cq.FRAMEBUFFER, cq.COLOR_ATTACHMENT0, cq.TEXTURE_CUBE_MAP_POSITIVE_X + Eq, qq.texture._hardwareTexture?.underlyingResource, Oq) : Aq._currentLOD !== Oq && (cq.framebufferTexture2D(cq.FRAMEBUFFER, cq.COLOR_ATTACHMENT0, cq.TEXTURE_2D, qq.texture._hardwareTexture?.underlyingResource, Oq), Aq._currentLOD = Oq));
        const uq = qq._depthStencilTexture;
        if (uq) {
          qq.is3D && (qq.texture.width === uq.width && qq.texture.height === uq.height && qq.texture.depth === uq.depth || xq.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const gq = qq._depthStencilTextureWithStencil ? cq.DEPTH_STENCIL_ATTACHMENT : cq.DEPTH_ATTACHMENT;
          qq.is2DArray || qq.is3D ? cq.framebufferTextureLayer(cq.FRAMEBUFFER, gq, uq._hardwareTexture?.underlyingResource, Oq, mq) : qq.isCube ? cq.framebufferTexture2D(cq.FRAMEBUFFER, gq, cq.TEXTURE_CUBE_MAP_POSITIVE_X + Eq, uq._hardwareTexture?.underlyingResource, Oq) : cq.framebufferTexture2D(cq.FRAMEBUFFER, gq, cq.TEXTURE_2D, uq._hardwareTexture?.underlyingResource, Oq)
        }
        Aq._MSAAFramebuffer && this._bindUnboundFramebuffer(Aq._MSAAFramebuffer), this._cachedViewport && !lq ? this.setViewport(this._cachedViewport, gq, Yq) : (gq || (gq = qq.width, Oq && (gq /= Math.pow(2, Oq))), Yq || (Yq = qq.height, Oq && (Yq /= Math.pow(2, Oq))), this._viewport(0, 0, gq, Yq)), this.wipeCaches()
      }
      setStateCullFaceType(qq, Eq) {
        const gq = this.cullBackFaces ?? qq ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== gq || Eq) && (this._depthCullingState.cullFace = gq)
      }
      setState(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== qq || gq) && (this._depthCullingState.cull = qq), this.setStateCullFaceType(lq, gq), this.setZOffset(Eq), this.setZOffsetUnits(mq);
        const xq = Yq ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== xq || gq) && (this._depthCullingState.frontFace = xq), this._stencilStateComposer.stencilMaterial = Oq
      }
      _resolveAndGenerateMipMapsFramebuffer(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        qq.disableAutomaticMSAAResolve || (qq.isMulti ? this.resolveMultiFramebuffer(qq) : this.resolveFramebuffer(qq)), Eq || (qq.isMulti ? this.generateMipMapsMultiFramebuffer(qq) : this.generateMipMapsFramebuffer(qq))
      }
      _bindUnboundFramebuffer(qq) {
        this._currentFramebuffer !== qq && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, qq), this._currentFramebuffer = qq)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(qq) {
        const Eq = this._getTextureTarget(qq);
        this._bindTextureDirectly(Eq, qq, !0), this._gl.generateMipmap(Eq), this._bindTextureDirectly(Eq, null)
      }
      unBindFramebuffer(qq, Eq, gq) {
        const Yq = qq;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(qq, Eq), gq && (Yq._MSAAFramebuffer && this._bindUnboundFramebuffer(Yq._framebuffer), gq()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(qq) {
        qq.isMulti || !qq.texture?.generateMipMaps || qq.isCube || this.generateMipmaps(qq.texture)
      }
      resolveFramebuffer(qq) {
        const Eq = qq,
          gq = this._gl;
        if (!Eq._MSAAFramebuffer || Eq.isMulti) return;
        let Yq = Eq.resolveMSAAColors ? gq.COLOR_BUFFER_BIT : 0;
        Yq |= Eq._generateDepthBuffer && Eq.resolveMSAADepth ? gq.DEPTH_BUFFER_BIT : 0, Yq |= Eq._generateStencilBuffer && Eq.resolveMSAAStencil ? gq.STENCIL_BUFFER_BIT : 0, gq.bindFramebuffer(gq.READ_FRAMEBUFFER, Eq._MSAAFramebuffer), gq.bindFramebuffer(gq.DRAW_FRAMEBUFFER, Eq._framebuffer), gq.blitFramebuffer(0, 0, qq.width, qq.height, 0, 0, qq.width, qq.height, Yq, gq.NEAREST)
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
      createVertexBuffer(qq, Eq, gq) {
        return this._createVertexBuffer(qq, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(qq, Eq) {
        const gq = this._gl.createBuffer();
        if (!gq) throw new Error("Unable to create vertex buffer");
        const Yq = new Wq.e(gq);
        return this.bindArrayBuffer(Yq), "number" !== typeof qq ? qq instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(qq), Eq), Yq.WB = 4 * qq.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, qq, Eq), Yq.WB = qq.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(qq), Eq), Yq.WB = qq), this._resetVertexBufferBinding(), Yq.references = 1, Yq
      }
      createDynamicVertexBuffer(qq, Eq) {
        return this._createVertexBuffer(qq, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(qq, Eq, gq) {
        const Yq = this._gl.createBuffer(),
          lq = new Wq.e(Yq);
        if (!Yq) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(lq);
        const Oq = this._normalizeIndexData(qq);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Oq, Eq ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), lq.references = 1, lq.is32Bits = 4 === Oq.BYTES_PER_ELEMENT, lq
      }
      _normalizeIndexData(qq) {
        if (2 === qq.BYTES_PER_ELEMENT) return qq;
        if (this._caps.uintIndices) {
          if (qq instanceof Uint32Array) return qq;
          for (let Eq = 0; Eq < qq.length; Eq++)
            if (qq[Eq] >= 65535) return new Uint32Array(qq);
          return new Uint16Array(qq)
        }
        return new Uint16Array(qq)
      }
      bindArrayBuffer(qq) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(qq, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(qq, Eq, gq) {
        const Yq = qq.program,
          lq = this._gl.getUniformBlockIndex(Yq, Eq);
        this._gl.uniformBlockBinding(Yq, lq, gq)
      }
      bindIndexBuffer(qq) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(qq, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(qq, Eq) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Eq] !== qq) && (this._gl.bindBuffer(Eq, qq ? qq.underlyingResource : null), this._currentBoundBuffer[Eq] = qq)
      }
      updateArrayBuffer(qq) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, qq)
      }
      _vertexAttribPointer(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = this._currentBufferPointers[Eq];
        if (!xq) return;
        let Aq = !1;
        xq.active ? (xq.buffer !== qq && (xq.buffer = qq, Aq = !0), xq.size !== gq && (xq.size = gq, Aq = !0), xq.type !== Yq && (xq.type = Yq, Aq = !0), xq.normalized !== lq && (xq.normalized = lq, Aq = !0), xq.stride !== Oq && (xq.stride = Oq, Aq = !0), xq.offset !== mq && (xq.offset = mq, Aq = !0)) : (Aq = !0, xq.active = !0, xq.index = Eq, xq.size = gq, xq.type = Yq, xq.normalized = lq, xq.stride = Oq, xq.offset = mq, xq.buffer = qq), (Aq || this._vaoRecordInProgress) && (this.bindArrayBuffer(qq), Yq === this._gl.UNSIGNED_INT || Yq === this._gl.INT ? this._gl.vertexAttribIPointer(Eq, gq, Yq, Oq, mq) : this._gl.vertexAttribPointer(Eq, gq, Yq, lq, Oq, mq))
      }
      _bindIndexBufferWithCache(qq) {
        null != qq && this._cachedIndexBuffer !== qq && (this._cachedIndexBuffer = qq, this.bindIndexBuffer(qq), this._uintIndicesCurrentlySet = qq.is32Bits)
      }
      _bindVertexBuffersAttributes(qq, Eq, gq) {
        const Yq = Eq.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let lq = 0; lq < Yq.length; lq++) {
          const Oq = Eq.getAttributeLocation(lq);
          if (Oq >= 0) {
            const Eq = Yq[lq];
            let mq = null;
            if (gq && (mq = gq[Eq]), mq || (mq = qq[Eq]), !mq) continue;
            this._gl.enableVertexAttribArray(Oq), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Oq] = !0);
            const xq = mq.getBuffer();
            xq && (this._vertexAttribPointer(xq, Oq, mq.getSize(), mq.type, mq.normalized, mq.byteStride, mq.byteOffset), mq.getIsInstanced() && (this._gl.vertexAttribDivisor(Oq, mq.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Oq), this._currentInstanceBuffers.push(xq))))
          }
        }
      }
      recordVertexArrayObject(qq, Eq, gq, Yq) {
        const lq = this._gl.createVertexArray();
        if (!lq) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(lq), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(qq, gq, Yq), this.bindIndexBuffer(Eq), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), lq
      }
      bindVertexArrayObject(qq, Eq) {
        this._cachedVertexArrayObject !== qq && (this._cachedVertexArrayObject = qq, this._gl.bindVertexArray(qq), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Eq && Eq.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(qq, Eq, gq, Yq, lq) {
        if (this._cachedVertexBuffers !== qq || this._cachedEffectForVertexBuffers !== lq) {
          this._cachedVertexBuffers = qq, this._cachedEffectForVertexBuffers = lq;
          const Eq = lq.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Oq = 0;
          for (let mq = 0; mq < Eq; mq++)
            if (mq < gq.length) {
              const Eq = lq.getAttributeLocation(mq);
              Eq >= 0 && (this._gl.enableVertexAttribArray(Eq), this._vertexAttribArraysEnabled[Eq] = !0, this._vertexAttribPointer(qq, Eq, gq[mq], this._gl.FLOAT, !1, Yq, Oq)), Oq += 4 * gq[mq]
            }
        }
        this._bindIndexBufferWithCache(Eq)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(qq, Eq, gq, Yq) {
        this._cachedVertexBuffers === qq && this._cachedEffectForVertexBuffers === gq || (this._cachedVertexBuffers = qq, this._cachedEffectForVertexBuffers = gq, this._bindVertexBuffersAttributes(qq, gq, Yq)), this._bindIndexBufferWithCache(Eq)
      }
      unbindInstanceAttributes() {
        let qq;
        for (let Eq = 0, gq = this._currentInstanceLocations.length; Eq < gq; Eq++) {
          const gq = this._currentInstanceBuffers[Eq];
          qq != gq && gq.references && (qq = gq, this.bindArrayBuffer(gq));
          const Yq = this._currentInstanceLocations[Eq];
          this._gl.vertexAttribDivisor(Yq, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(qq) {
        this._gl.deleteVertexArray(qq)
      }
      _releaseBuffer(qq) {
        return qq.references--, 0 === qq.references && (this._deleteBuffer(qq), !0)
      }
      _deleteBuffer(qq) {
        this._gl.deleteBuffer(qq.underlyingResource)
      }
      updateAndBindInstancesBuffer(qq, Eq, gq) {
        if (this.bindArrayBuffer(qq), Eq && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Eq), void 0 !== gq[0].index) this.bindInstancesBuffer(qq, gq, !0);
        else
          for (let Yq = 0; Yq < 4; Yq++) {
            const Eq = gq[Yq];
            this._vertexAttribArraysEnabled[Eq] || (this._gl.enableVertexAttribArray(Eq), this._vertexAttribArraysEnabled[Eq] = !0), this._vertexAttribPointer(qq, Eq, 4, this._gl.FLOAT, !1, 64, 16 * Yq), this._gl.vertexAttribDivisor(Eq, 1), this._currentInstanceLocations.push(Eq), this._currentInstanceBuffers.push(qq)
          }
      }
      bindInstancesBuffer(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(qq);
        let Yq = 0;
        if (gq)
          for (let lq = 0; lq < Eq.length; lq++) {
            Yq += 4 * Eq[lq].attributeSize
          }
        for (let lq = 0; lq < Eq.length; lq++) {
          const gq = Eq[lq];
          void 0 === gq.index && (gq.index = this._currentEffect.getAttributeLocationByName(gq.attributeName)), gq.index < 0 || (this._vertexAttribArraysEnabled[gq.index] || (this._gl.enableVertexAttribArray(gq.index), this._vertexAttribArraysEnabled[gq.index] = !0), this._vertexAttribPointer(qq, gq.index, gq.attributeSize, gq.attributeType || this._gl.FLOAT, gq.normalized || !1, Yq, gq.offset), this._gl.vertexAttribDivisor(gq.index, void 0 === gq.divisor ? 1 : gq.divisor), this._currentInstanceLocations.push(gq.index), this._currentInstanceBuffers.push(qq))
        }
      }
      disableInstanceAttributeByName(qq) {
        if (!this._currentEffect) return;
        const Eq = this._currentEffect.getAttributeLocationByName(qq);
        this.disableInstanceAttribute(Eq)
      }
      disableInstanceAttribute(qq) {
        let Eq, gq = !1;
        for (; - 1 !== (Eq = this._currentInstanceLocations.indexOf(qq));) this._currentInstanceLocations.splice(Eq, 1), this._currentInstanceBuffers.splice(Eq, 1), gq = !0;
        gq && (this._gl.vertexAttribDivisor(qq, 0), this.disableAttributeByIndex(qq))
      }
      disableAttributeByIndex(qq) {
        this._gl.disableVertexAttribArray(qq), this._vertexAttribArraysEnabled[qq] = !1, this._currentBufferPointers[qq].active = !1
      }
      draw(qq, Eq, gq, Yq) {
        this.drawElementsType(qq ? 0 : 1, Eq, gq, Yq)
      }
      drawPointClouds(qq, Eq, gq) {
        this.drawArraysType(2, qq, Eq, gq)
      }
      drawUnIndexed(qq, Eq, gq, Yq) {
        this.drawArraysType(qq ? 0 : 1, Eq, gq, Yq)
      }
      drawElementsType(qq, Eq, gq, Yq) {
        this.applyStates(), this._reportDrawCall();
        const lq = this._drawMode(qq),
          Oq = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          mq = this._uintIndicesCurrentlySet ? 4 : 2;
        Yq ? this._gl.drawElementsInstanced(lq, gq, Oq, Eq * mq, Yq) : this._gl.drawElements(lq, gq, Oq, Eq * mq)
      }
      drawArraysType(qq, Eq, gq, Yq) {
        this.applyStates(), this._reportDrawCall();
        const lq = this._drawMode(qq);
        Yq ? this._gl.drawArraysInstanced(lq, Eq, gq, Yq) : this._gl.drawArrays(lq, Eq, gq)
      }
      _drawMode(qq) {
        switch (qq) {
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
      _releaseEffect(qq) {
        this._compiledEffects[qq._key] && delete this._compiledEffects[qq._key];
        const Eq = qq.getPipelineContext();
        Eq && this._deletePipelineContext(Eq)
      }
      _deletePipelineContext(qq) {
        const Eq = qq;
        Eq && Eq.program && (Eq.program.__SPECTOR_rebuildProgram = null, (0, jq.j)(Eq), this._gl && (this._currentProgram === Eq.program && this._setProgram(null), this._gl.deleteProgram(Eq.program)))
      }
      _getGlobalDefines(qq) {
        return (0, dq.i)(qq, this.isNDCHalfZRange, this.vYq, this.useExactSrgbConversions)
      }
      createEffect(qq, Eq, gq, Oq, mq, xq, Aq, cq, uq) {
        let Bq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Wq = arguments.length > 10 ? arguments[10] : void 0;
        const Nq = "string" === typeof qq ? qq : qq.vertexToken || qq.vertexSource || qq.vertexElement || qq.vertex,
          aq = "string" === typeof qq ? qq : qq.fragmentToken || qq.fragmentSource || qq.fragmentElement || qq.fragment,
          Vq = this._getGlobalDefines(),
          dq = void 0 !== Eq.attributes;
        let jq = mq ?? Eq.defines ?? "";
        Vq && (jq += Vq);
        const Hq = Nq + "+" + aq + "@" + jq;
        if (this._compiledEffects[Hq]) {
          const qq = this._compiledEffects[Hq];
          return Aq && qq.isReady() && Aq(qq), qq._refCount++, qq
        }
        this._gl && (0, lq.y)(this._gl);
        const oq = new Yq.d(qq, Eq, dq ? this : gq, Oq, this, mq, xq, Aq, cq, uq, Hq, Eq.shaderLanguage ?? Bq, Eq.extraInitializationsAsync ?? Wq);
        return this._compiledEffects[Hq] = oq, oq
      }
      _getShaderSource(qq) {
        return this._gl.getShaderSource(qq)
      }
      createRawShaderProgram(qq, Eq, gq, Yq) {
        let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const mq = (0, lq.y)(this._gl);
        return mq._contextWasLost = this._contextWasLost, mq.validateShaderPrograms = this.validateShaderPrograms, (0, lq.t)(qq, Eq, gq, Yq || this._gl, Oq)
      }
      createShaderProgram(qq, Eq, gq, Yq, Oq) {
        let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const xq = (0, lq.y)(this._gl);
        return xq._contextWasLost = this._contextWasLost, xq.validateShaderPrograms = this.validateShaderPrograms, (0, lq.w)(qq, Eq, gq, Yq, Oq || this._gl, mq)
      }
      inlineShaderCode(qq) {
        return qq
      }
      createPipelineContext(qq) {
        if (this._gl) {
          (0, lq.y)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Eq = (0, lq.q)(this._gl, qq);
        return Eq.engine = this, Eq
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(qq) {
        return (0, lq.i)(qq, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(qq, Eq, gq, Yq, Oq, mq, xq, Aq, cq, uq, Bq) {
        const Wq = (0, lq.y)(this._gl);
        return Wq._contextWasLost = this._contextWasLost, Wq.validateShaderPrograms = this.validateShaderPrograms, Wq._createShaderProgramInjection = this._createShaderProgram.bind(this), Wq.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Wq.createShaderProgramInjection = this.createShaderProgram.bind(this), Wq.loadFileInjection = this._loadFile.bind(this), (0, lq.l)(qq, Eq, gq, Yq, Oq, mq, xq, Aq, cq, uq, Bq)
      }
      _createShaderProgram(qq, Eq, gq, Yq) {
        let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, lq.c)(qq, Eq, gq, Yq, Oq)
      }
      _isRenderingStateCompiled(qq) {
        return !this._isDisposed && (0, lq.j)(qq, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(qq, Eq) {
        (0, lq.g)(qq, Eq)
      }
      getUniforms(qq, Eq) {
        const gq = new Array,
          Yq = qq;
        for (let lq = 0; lq < Eq.length; lq++) gq.push(this._gl.getUniformLocation(Yq.program, Eq[lq]));
        return gq
      }
      getAttributes(qq, Eq) {
        const gq = [],
          Yq = qq;
        for (let Oq = 0; Oq < Eq.length; Oq++) try {
          gq.push(this._gl.getAttribLocation(Yq.program, Eq[Oq]))
        } catch (lq) {
          gq.push(-1)
        }
        return gq
      }
      enableEffect(qq) {
        (qq = null !== qq && (0, mq.c)(qq) ? qq.effect : qq) && qq !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(qq), this._currentEffect = qq, qq.onBind && qq.onBind(qq), qq._onBindObservable && qq._onBindObservable.notifyObservers(qq))
      }
      setInt(qq, Eq) {
        return !!qq && (this._gl.uniform1i(qq, Eq), !0)
      }
      setInt2(qq, Eq, gq) {
        return !!qq && (this._gl.uniform2i(qq, Eq, gq), !0)
      }
      setInt3(qq, Eq, gq, Yq) {
        return !!qq && (this._gl.uniform3i(qq, Eq, gq, Yq), !0)
      }
      setInt4(qq, Eq, gq, Yq, lq) {
        return !!qq && (this._gl.uniform4i(qq, Eq, gq, Yq, lq), !0)
      }
      setIntArray(qq, Eq) {
        return !!qq && (this._gl.uniform1iv(qq, Eq), !0)
      }
      setIntArray2(qq, Eq) {
        return !(!qq || Eq.length % 2 !== 0) && (this._gl.uniform2iv(qq, Eq), !0)
      }
      setIntArray3(qq, Eq) {
        return !(!qq || Eq.length % 3 !== 0) && (this._gl.uniform3iv(qq, Eq), !0)
      }
      setIntArray4(qq, Eq) {
        return !(!qq || Eq.length % 4 !== 0) && (this._gl.uniform4iv(qq, Eq), !0)
      }
      setUInt(qq, Eq) {
        return !!qq && (this._gl.uniform1ui(qq, Eq), !0)
      }
      setUInt2(qq, Eq, gq) {
        return !!qq && (this._gl.uniform2ui(qq, Eq, gq), !0)
      }
      setUInt3(qq, Eq, gq, Yq) {
        return !!qq && (this._gl.uniform3ui(qq, Eq, gq, Yq), !0)
      }
      setUInt4(qq, Eq, gq, Yq, lq) {
        return !!qq && (this._gl.uniform4ui(qq, Eq, gq, Yq, lq), !0)
      }
      setUIntArray(qq, Eq) {
        return !!qq && (this._gl.uniform1uiv(qq, Eq), !0)
      }
      setUIntArray2(qq, Eq) {
        return !(!qq || Eq.length % 2 !== 0) && (this._gl.uniform2uiv(qq, Eq), !0)
      }
      setUIntArray3(qq, Eq) {
        return !(!qq || Eq.length % 3 !== 0) && (this._gl.uniform3uiv(qq, Eq), !0)
      }
      setUIntArray4(qq, Eq) {
        return !(!qq || Eq.length % 4 !== 0) && (this._gl.uniform4uiv(qq, Eq), !0)
      }
      setArray(qq, Eq) {
        return !!qq && (!(Eq.length < 1) && (this._gl.uniform1fv(qq, Eq), !0))
      }
      setArray2(qq, Eq) {
        return !(!qq || Eq.length % 2 !== 0) && (this._gl.uniform2fv(qq, Eq), !0)
      }
      setArray3(qq, Eq) {
        return !(!qq || Eq.length % 3 !== 0) && (this._gl.uniform3fv(qq, Eq), !0)
      }
      setArray4(qq, Eq) {
        return !(!qq || Eq.length % 4 !== 0) && (this._gl.uniform4fv(qq, Eq), !0)
      }
      setMatrices(qq, Eq) {
        return !!qq && (this._gl.uniformMatrix4fv(qq, !1, Eq), !0)
      }
      setMatrix3x3(qq, Eq) {
        return !!qq && (this._gl.uniformMatrix3fv(qq, !1, Eq), !0)
      }
      setMatrix2x2(qq, Eq) {
        return !!qq && (this._gl.uniformMatrix2fv(qq, !1, Eq), !0)
      }
      setFloat(qq, Eq) {
        return !!qq && (this._gl.uniform1f(qq, Eq), !0)
      }
      setFloat2(qq, Eq, gq) {
        return !!qq && (this._gl.uniform2f(qq, Eq, gq), !0)
      }
      setFloat3(qq, Eq, gq, Yq) {
        return !!qq && (this._gl.uniform3f(qq, Eq, gq, Yq), !0)
      }
      setFloat4(qq, Eq, gq, Yq, lq) {
        return !!qq && (this._gl.uniform4f(qq, Eq, gq, Yq, lq), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const qq = this._colorWrite;
          this._gl.colorMask(qq, qq, qq, qq)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(qq) {
        this.preventCacheWipeBetweenFrames && !qq || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), qq && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(qq, Eq) {
        const gq = this._gl;
        let Yq = gq.NEAREST,
          lq = gq.NEAREST,
          Oq = !1;
        switch (qq) {
          case 11:
            Yq = gq.LINEAR, lq = Eq ? gq.LINEAR_MIPMAP_NEAREST : gq.LINEAR;
            break;
          case 3:
            Yq = gq.LINEAR, Oq = !0, lq = Eq ? gq.LINEAR_MIPMAP_LINEAR : gq.LINEAR;
            break;
          case 8:
            Oq = !0, Yq = gq.NEAREST, lq = Eq ? gq.NEAREST_MIPMAP_LINEAR : gq.NEAREST;
            break;
          case 4:
            Yq = gq.NEAREST, lq = Eq ? gq.NEAREST_MIPMAP_NEAREST : gq.NEAREST;
            break;
          case 5:
            Yq = gq.NEAREST, lq = Eq ? gq.LINEAR_MIPMAP_NEAREST : gq.LINEAR;
            break;
          case 6:
            Oq = !0, Yq = gq.NEAREST, lq = Eq ? gq.LINEAR_MIPMAP_LINEAR : gq.LINEAR;
            break;
          case 7:
            Yq = gq.NEAREST, lq = gq.LINEAR;
            break;
          case 1:
            Yq = gq.NEAREST, lq = gq.NEAREST;
            break;
          case 9:
            Yq = gq.LINEAR, lq = Eq ? gq.NEAREST_MIPMAP_NEAREST : gq.NEAREST;
            break;
          case 10:
            Oq = !0, Yq = gq.LINEAR, lq = Eq ? gq.NEAREST_MIPMAP_LINEAR : gq.NEAREST;
            break;
          case 2:
            Yq = gq.LINEAR, lq = gq.LINEAR;
            break;
          case 12:
            Yq = gq.LINEAR, lq = gq.NEAREST
        }
        return {
          min: lq,
          mag: Yq,
          hasMipMaps: Oq
        }
      }
      _createTexture() {
        const qq = this._gl.createTexture();
        if (!qq) throw new Error("Unable to create texture");
        return qq
      }
      _createHardwareTexture() {
        return new aq.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(qq, Eq) {
        let gq, Yq, lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Oq = !1,
          mq = 0,
          Aq = 3,
          cq = 5,
          uq = !1,
          Bq = 1,
          Wq = !1,
          Nq = 0,
          aq = !1;
        void 0 !== Eq && "object" === typeof Eq ? (gq = !!Eq.generateMipMaps, Oq = !!Eq.createMipMaps, mq = void 0 === Eq.type ? 0 : Eq.type, Aq = void 0 === Eq.samplingMode ? 3 : Eq.samplingMode, cq = void 0 === Eq.format ? 5 : Eq.format, uq = void 0 !== Eq.useSRGBBuffer && Eq.useSRGBBuffer, Bq = Eq.samples ?? 1, Yq = Eq.label, Wq = !!Eq.createMSAATexture, Nq = Eq.comparisonFunction || 0, aq = !!Eq.isCube) : gq = !!Eq, uq && (uq = this._caps.supportSRGBBuffers && (this.Ra > 1 || this.isWebGPU)), (1 !== mq || this._caps.textureFloatLinearFiltering) && (2 !== mq || this._caps.textureHalfFloatLinearFiltering) || (Aq = 1), 1 !== mq || this._caps.textureFloat || (mq = 0, xq.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const dq = (0, Hq.i)(cq),
          jq = (0, Hq.e)(cq),
          oq = this._gl,
          Pq = new Vq.c(this, lq),
          Qq = qq.width || qq,
          yq = qq.height || qq,
          tq = qq.depth || 0,
          rq = qq.layers || 0,
          vq = this._getSamplingParameters(Aq, (gq || Oq) && !dq),
          hq = 0 !== rq ? oq.TEXTURE_2D_ARRAY : 0 !== tq ? oq.TEXTURE_3D : aq ? oq.TEXTURE_CUBE_MAP : oq.TEXTURE_2D,
          nq = dq ? this._getInternalFormatFromDepthTextureFormat(cq, !0, jq) : this._getRGBABufferInternalSizedFormat(mq, cq, uq),
          bq = dq ? jq ? oq.DEPTH_STENCIL : oq.DEPTH_COMPONENT : this._getInternalFormat(cq),
          iq = dq ? this._getWebGLTextureTypeFromDepthTextureFormat(cq) : this._getWebGLTextureType(mq);
        if (this._bindTextureDirectly(hq, Pq), 0 !== rq) Pq.is2DArray = !0, oq.texImage3D(hq, 0, nq, Qq, yq, rq, 0, bq, iq, null);
        else if (0 !== tq) Pq.is3D = !0, oq.texImage3D(hq, 0, nq, Qq, yq, tq, 0, bq, iq, null);
        else if (aq) {
          Pq.isCube = !0;
          for (let qq = 0; qq < 6; qq++) oq.texImage2D(oq.TEXTURE_CUBE_MAP_POSITIVE_X + qq, 0, nq, Qq, yq, 0, bq, iq, null)
        } else oq.texImage2D(hq, 0, nq, Qq, yq, 0, bq, iq, null);
        if (oq.texParameteri(hq, oq.TEXTURE_MAG_FILTER, vq.mag), oq.texParameteri(hq, oq.TEXTURE_MIN_FILTER, vq.min), oq.texParameteri(hq, oq.TEXTURE_WRAP_S, oq.CLAMP_TO_EDGE), oq.texParameteri(hq, oq.TEXTURE_WRAP_T, oq.CLAMP_TO_EDGE), dq && this.Ra > 1 && (0 === Nq ? (oq.texParameteri(hq, oq.TEXTURE_COMPARE_FUNC, 515), oq.texParameteri(hq, oq.TEXTURE_COMPARE_MODE, oq.NONE)) : (oq.texParameteri(hq, oq.TEXTURE_COMPARE_FUNC, Nq), oq.texParameteri(hq, oq.TEXTURE_COMPARE_MODE, oq.COMPARE_REF_TO_TEXTURE))), (gq || Oq) && this._gl.generateMipmap(hq), this._bindTextureDirectly(hq, null), Pq._useSRGBBuffer = uq, Pq.baseWidth = Qq, Pq.baseHeight = yq, Pq.width = Qq, Pq.height = yq, Pq.depth = rq || tq, Pq.isReady = !0, Pq.samples = Bq, Pq.generateMipMaps = gq, Pq.samplingMode = Aq, Pq.type = mq, Pq.format = cq, Pq.label = Yq, Pq.comparisonFunction = Nq, this._internalTexturesCache.push(Pq), Wq) {
          let qq;
          if (qq = (0, Hq.i)(Pq.format) ? this._setupFramebufferDepthAttachments((0, Hq.e)(Pq.format), 19 !== Pq.format, Pq.width, Pq.height, Bq, Pq.format, !0) : this._createRenderBuffer(Pq.width, Pq.height, Bq, -1, this._getRGBABufferInternalSizedFormat(Pq.type, Pq.format, Pq._useSRGBBuffer), -1), !qq) throw new Error("Unable to create render buffer");
          Pq._autoMSAAManagement = !0;
          let Eq = Pq._hardwareTexture;
          Eq || (Eq = Pq._hardwareTexture = this._createHardwareTexture()), Eq.addMSAARenderBuffer(qq)
        }
        return Pq
      }
      _getUseSRGBBuffer(qq, Eq) {
        return qq && this._caps.supportSRGBBuffers && (this.Ra > 1 || Eq)
      }
      createTexture(qq, Eq, gq, Yq) {
        var lq = this;
        let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Aq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Bq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Wq = arguments.length > 11 ? arguments[11] : void 0,
          Nq = arguments.length > 12 ? arguments[12] : void 0,
          aq = arguments.length > 13 ? arguments[13] : void 0,
          dq = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(qq, Eq, gq, Yq, Oq, mq, xq, (function() {
          for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
          return lq._prepareWebGLTexture(...Eq, uq)
        }), ((qq, Eq, gq, lq, Oq, mq) => {
          const xq = this._gl,
            Aq = gq.width === qq && gq.height === Eq;
          Oq._creationFlags = aq ?? 0;
          const cq = this._getTexImageParametersForCreateTexture(Oq.format, Oq._useSRGBBuffer);
          if (Aq) return xq.texImage2D(xq.TEXTURE_2D, 0, cq.internalFormat, cq.format, cq.type, gq), !1;
          const uq = this._caps.maxTextureSize;
          if (gq.width > uq || gq.height > uq || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = qq, this._workingCanvas.height = Eq, this._workingContext.drawImage(gq, 0, 0, gq.width, gq.height, 0, 0, qq, Eq), xq.texImage2D(xq.TEXTURE_2D, 0, cq.internalFormat, cq.format, cq.type, this._workingCanvas), Oq.width = qq, Oq.height = Eq, !1);
          {
            const qq = new Vq.c(this, 2);
            this._bindTextureDirectly(xq.TEXTURE_2D, qq, !0), xq.texImage2D(xq.TEXTURE_2D, 0, cq.internalFormat, cq.format, cq.type, gq), this._rescaleTexture(qq, Oq, Yq, cq.format, (() => {
              this._releaseTexture(qq), this._bindTextureDirectly(xq.TEXTURE_2D, Oq, !0), mq()
            }))
          }
          return !0
        }), Aq, cq, uq, Bq, Wq, Nq, dq)
      }
      _getTexImageParametersForCreateTexture(qq, Eq) {
        let gq, Yq;
        return 1 === this.Ra ? (gq = this._getInternalFormat(qq, Eq), Yq = gq) : (gq = this._getInternalFormat(qq, !1), Yq = this._getRGBABufferInternalSizedFormat(0, qq, Eq)), {
          internalFormat: Yq,
          format: gq,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(qq, Eq, gq, Yq, lq) {}
      _unpackFlipY(qq) {
        this._unpackFlipYCached !== qq && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, qq ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = qq))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(qq) {
        return qq.isCube ? this._gl.TEXTURE_CUBE_MAP : qq.is3D ? this._gl.TEXTURE_3D : qq.is2DArray || qq.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = this._getTextureTarget(Eq),
          lq = this._getSamplingParameters(qq, Eq.useMipMaps || gq);
        this._setTextureParameterInteger(Yq, this._gl.TEXTURE_MAG_FILTER, lq.mag, Eq), this._setTextureParameterInteger(Yq, this._gl.TEXTURE_MIN_FILTER, lq.min), gq && lq.hasMipMaps && (Eq.generateMipMaps = !0, this._gl.generateMipmap(Yq)), this._bindTextureDirectly(Yq, null), Eq.samplingMode = qq
      }
      updateTextureDimensions(qq, Eq, gq) {}
      updateTextureWrappingMode(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const lq = this._getTextureTarget(qq);
        null !== Eq && (this._setTextureParameterInteger(lq, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Eq), qq), qq._cachedWrapU = Eq), null !== gq && (this._setTextureParameterInteger(lq, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(gq), qq), qq._cachedWrapV = gq), (qq.is2DArray || qq.is3D) && null !== Yq && (this._setTextureParameterInteger(lq, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Yq), qq), qq._cachedWrapR = Yq), this._bindTextureDirectly(lq, null)
      }
      _uploadCompressedDataToTextureDirectly(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const xq = this._gl;
        let Aq = xq.TEXTURE_2D;
        if (qq.isCube && (Aq = xq.TEXTURE_CUBE_MAP_POSITIVE_X + Oq), qq._useSRGBBuffer) switch (Eq) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Eq = xq.COMPRESSED_SRGB8_ETC2 : qq._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Eq = xq.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : qq._useSRGBBuffer = !1;
            break;
          case 36492:
            Eq = xq.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Eq = xq.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Eq = xq.COMPRESSED_SRGB_S3TC_DXT1_EXT : qq._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Eq = xq.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : qq._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Eq = xq.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : qq._useSRGBBuffer = !1;
            break;
          default:
            qq._useSRGBBuffer = !1
        }
        if (qq.generateMipMaps) {
          const Oq = qq._hardwareTexture;
          Oq.memoryAllocated || (xq.texStorage2D(qq.isCube ? xq.TEXTURE_CUBE_MAP : xq.TEXTURE_2D, Math.floor(Math.log2(Math.max(gq, Yq))) + 1, Eq, qq.width, qq.height), Oq.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Aq, mq, 0, 0, gq, Yq, Eq, lq)
        } else this._gl.compressedTexImage2D(Aq, mq, Eq, gq, Yq, 0, lq)
      }
      _uploadDataToTextureDirectly(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const mq = this._gl,
          xq = this._getWebGLTextureType(qq.type),
          Aq = this._getInternalFormat(qq.format),
          cq = void 0 === lq ? this._getRGBABufferInternalSizedFormat(qq.type, qq.format, qq._useSRGBBuffer) : this._getInternalFormat(lq, qq._useSRGBBuffer);
        this._unpackFlipY(qq.invertY);
        let uq = mq.TEXTURE_2D;
        qq.isCube && (uq = mq.TEXTURE_CUBE_MAP_POSITIVE_X + gq);
        const Bq = Math.round(Math.log(qq.width) * Math.LOG2E),
          Wq = Math.round(Math.log(qq.height) * Math.LOG2E),
          Nq = Oq ? qq.width : Math.pow(2, Math.max(Bq - Yq, 0)),
          aq = Oq ? qq.height : Math.pow(2, Math.max(Wq - Yq, 0));
        mq.texImage2D(uq, Yq, cq, Nq, aq, 0, Aq, xq, Eq)
      }
      updateTextureData(qq, Eq, gq, Yq, lq, Oq) {
        let mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const cq = this._gl,
          uq = this._getWebGLTextureType(qq.type),
          Bq = this._getInternalFormat(qq.format);
        this._unpackFlipY(qq.invertY);
        let Wq = cq.TEXTURE_2D,
          Nq = cq.TEXTURE_2D;
        qq.isCube && (Nq = cq.TEXTURE_CUBE_MAP_POSITIVE_X + mq, Wq = cq.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Wq, qq, !0), cq.texSubImage2D(Nq, xq, gq, Yq, lq, Oq, Bq, uq, Eq), Aq && this._gl.generateMipmap(Nq), this._bindTextureDirectly(Wq, null)
      }
      _uploadArrayBufferViewToTexture(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const lq = this._gl,
          Oq = qq.isCube ? lq.TEXTURE_CUBE_MAP : lq.TEXTURE_2D;
        this._bindTextureDirectly(Oq, qq, !0), this._uploadDataToTextureDirectly(qq, Eq, gq, Yq), this._bindTextureDirectly(Oq, null, !0)
      }
      _prepareWebGLTextureContinuation(qq, Eq, gq, Yq, lq) {
        const Oq = this._gl;
        if (!Oq) return;
        const mq = this._getSamplingParameters(lq, !gq);
        Oq.texParameteri(Oq.TEXTURE_2D, Oq.TEXTURE_MAG_FILTER, mq.mag), Oq.texParameteri(Oq.TEXTURE_2D, Oq.TEXTURE_MIN_FILTER, mq.min), gq || Yq || Oq.generateMipmap(Oq.TEXTURE_2D), this._bindTextureDirectly(Oq.TEXTURE_2D, null), Eq && Eq.removePendingData(qq), qq.onLoadedObservable.notifyObservers(qq), qq.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        const uq = this.getCaps().maxTextureSize,
          Bq = Math.min(uq, this.needPOTTextures ? (0, Nq.g)(Yq.width, uq) : Yq.width),
          Wq = Math.min(uq, this.needPOTTextures ? (0, Nq.g)(Yq.height, uq) : Yq.height),
          aq = this._gl;
        aq && (qq._hardwareTexture ? (this._bindTextureDirectly(aq.TEXTURE_2D, qq, !0), this._unpackFlipY(void 0 === lq || !!lq), qq.baseWidth = Yq.width, qq.baseHeight = Yq.height, qq.width = Bq, qq.height = Wq, qq.isReady = !0, qq.type = -1 !== qq.type ? qq.type : 0, qq.format = -1 !== qq.format ? qq.format : cq ?? (".jpg" !== Eq || qq._useSRGBBuffer ? 5 : 4), xq(Bq, Wq, Yq, Eq, qq, (() => {
          this._prepareWebGLTextureContinuation(qq, gq, Oq, mq, Aq)
        })) || this._prepareWebGLTextureContinuation(qq, gq, Oq, mq, Aq)) : gq && gq.removePendingData(qq))
      }
      _getInternalFormatFromDepthTextureFormat(qq, Eq, gq) {
        const Yq = this._gl;
        if (!Eq) return Yq.STENCIL_INDEX8;
        let lq = gq ? Yq.DEPTH_STENCIL : Yq.DEPTH_COMPONENT;
        return this.Ra > 1 ? 15 === qq ? lq = Yq.DEPTH_COMPONENT16 : 16 === qq ? lq = Yq.DEPTH_COMPONENT24 : 17 === qq || 13 === qq ? lq = gq ? Yq.DEPTH24_STENCIL8 : Yq.DEPTH_COMPONENT24 : 14 === qq ? lq = Yq.DEPTH_COMPONENT32F : 18 === qq && (lq = gq ? Yq.DEPTH32F_STENCIL8 : Yq.DEPTH_COMPONENT32F) : lq = Yq.DEPTH_COMPONENT16, lq
      }
      _getWebGLTextureTypeFromDepthTextureFormat(qq) {
        const Eq = this._gl;
        let gq = Eq.UNSIGNED_INT;
        return 15 === qq ? gq = Eq.UNSIGNED_SHORT : 17 === qq || 13 === qq ? gq = Eq.UNSIGNED_INT_24_8 : 14 === qq ? gq = Eq.FLOAT : 18 === qq ? gq = Eq.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === qq && (gq = Eq.UNSIGNED_BYTE), gq
      }
      _setupFramebufferDepthAttachments(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Oq = arguments.length > 5 ? arguments[5] : void 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const xq = this._gl;
        Oq = Oq ?? (qq ? 13 : 14);
        const Aq = this._getInternalFormatFromDepthTextureFormat(Oq, Eq, qq);
        return qq && Eq ? this._createRenderBuffer(gq, Yq, lq, xq.DEPTH_STENCIL, Aq, mq ? -1 : xq.DEPTH_STENCIL_ATTACHMENT) : Eq ? this._createRenderBuffer(gq, Yq, lq, Aq, Aq, mq ? -1 : xq.DEPTH_ATTACHMENT) : qq ? this._createRenderBuffer(gq, Yq, lq, Aq, Aq, mq ? -1 : xq.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(qq, Eq, gq, Yq, lq, Oq) {
        let mq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const xq = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(xq, qq, Eq, gq, Yq, lq, Oq, mq)
      }
      _updateRenderBuffer(qq, Eq, gq, Yq, lq, Oq, mq) {
        let xq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Aq = this._gl;
        return Aq.bindRenderbuffer(Aq.RENDERBUFFER, qq), Yq > 1 && Aq.renderbufferStorageMultisample ? Aq.renderbufferStorageMultisample(Aq.RENDERBUFFER, Yq, Oq, Eq, gq) : Aq.renderbufferStorage(Aq.RENDERBUFFER, lq, Eq, gq), -1 !== mq && Aq.framebufferRenderbuffer(Aq.FRAMEBUFFER, mq, Aq.RENDERBUFFER, qq), xq && Aq.bindRenderbuffer(Aq.RENDERBUFFER, null), qq
      }
      _releaseTexture(qq) {
        this._deleteTexture(qq._hardwareTexture), this.unbindAllTextures();
        const Eq = this._internalTexturesCache.indexOf(qq); - 1 !== Eq && this._internalTexturesCache.splice(Eq, 1), qq._lodTextureHigh && qq._lodTextureHigh.dispose(), qq._lodTextureMid && qq._lodTextureMid.dispose(), qq._lodTextureLow && qq._lodTextureLow.dispose(), qq._irradianceTexture && qq._irradianceTexture.dispose()
      }
      _deleteTexture(qq) {
        qq?.release()
      }
      _setProgram(qq) {
        this._currentProgram !== qq && ((0, lq.n)(qq, this._gl), this._currentProgram = qq)
      }
      bindSamplers(qq) {
        const Eq = qq.getPipelineContext();
        this._setProgram(Eq.program);
        const gq = qq.getSamplers();
        for (let Yq = 0; Yq < gq.length; Yq++) {
          const Eq = qq.getUniform(gq[Yq]);
          Eq && (this._boundUniforms[Yq] = Eq)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          lq = !1;
        const Oq = Eq && Eq._associatedChannel > -1;
        gq && Oq && (this._activeChannel = Eq._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Eq || Yq) {
          if (this._activateCurrentTexture(), Eq && Eq.isMultiview) throw xq.b.Error(["_bindTextureDirectly called with a multiview texture!", qq, Eq]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(qq, Eq?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Eq, Eq && (Eq._associatedChannel = this._activeChannel)
        } else gq && (lq = !0, this._activateCurrentTexture());
        return Oq && !gq && this._bindSamplerUniformToChannel(Eq._associatedChannel, this._activeChannel), lq
      }
      _bindTexture(qq, Eq, gq) {
        if (void 0 === qq) return;
        Eq && (Eq._associatedChannel = qq), this._activeChannel = qq;
        const Yq = Eq ? this._getTextureTarget(Eq) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Yq, Eq)
      }
      unbindAllTextures() {
        for (let qq = 0; qq < this._maxSimultaneousTextures; qq++) this._activeChannel = qq, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ra > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(qq, Eq, gq, Yq) {
        void 0 !== qq && (Eq && (this._boundUniforms[qq] = Eq), this._setTexture(qq, gq))
      }
      _bindSamplerUniformToChannel(qq, Eq) {
        const gq = this._boundUniforms[qq];
        gq && gq._currentState !== Eq && (this._gl.uniform1i(gq, Eq), gq._currentState = Eq)
      }
      _getTextureWrapMode(qq) {
        switch (qq) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(qq, Eq) {
        let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Eq) return null != this._boundTexturesCache[qq] && (this._activeChannel = qq, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ra > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Eq.video) {
          this._activeChannel = qq;
          const gq = Eq.getInternalTexture();
          gq && (gq._associatedChannel = qq), Eq.update()
        } else if (4 === Eq.delayLoadState) return Eq.delayLoad(), !1;
        gq = lq ? Eq.depthStencilTexture : Eq.isReady() ? Eq.getInternalTexture() : Eq.isCube ? this.emptyCubeTexture : Eq.is3D ? this.emptyTexture3D : Eq.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Yq && gq && (gq._associatedChannel = qq);
        let Oq = !0;
        this._boundTexturesCache[qq] === gq && (Yq || this._bindSamplerUniformToChannel(gq._associatedChannel, qq), Oq = !1), this._activeChannel = qq;
        const mq = this._getTextureTarget(gq);
        if (Oq && this._bindTextureDirectly(mq, gq, Yq), gq && !gq.isMultiview) {
          if (gq.isCube && gq._cachedCoordinatesMode !== Eq.coordinatesMode) {
            gq._cachedCoordinatesMode = Eq.coordinatesMode;
            const qq = 3 !== Eq.coordinatesMode && 5 !== Eq.coordinatesMode ? 1 : 0;
            Eq.wrapU = qq, Eq.wrapV = qq
          }
          gq._cachedWrapU !== Eq.wrapU && (gq._cachedWrapU = Eq.wrapU, this._setTextureParameterInteger(mq, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Eq.wrapU), gq)), gq._cachedWrapV !== Eq.wrapV && (gq._cachedWrapV = Eq.wrapV, this._setTextureParameterInteger(mq, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Eq.wrapV), gq)), gq.is3D && gq._cachedWrapR !== Eq.wrapR && (gq._cachedWrapR = Eq.wrapR, this._setTextureParameterInteger(mq, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Eq.wrapR), gq)), this._setAnisotropicLevel(mq, gq, Eq.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(qq, Eq, gq, Yq) {
        if (void 0 !== qq && Eq) {
          this._textureUnits && this._textureUnits.length === gq.length || (this._textureUnits = new Int32Array(gq.length));
          for (let Eq = 0; Eq < gq.length; Eq++) {
            const Yq = gq[Eq].getInternalTexture();
            Yq ? (this._textureUnits[Eq] = qq + Eq, Yq._associatedChannel = qq + Eq) : this._textureUnits[Eq] = -1
          }
          this._gl.uniform1iv(Eq, this._textureUnits);
          for (let qq = 0; qq < gq.length; qq++) this._setTexture(this._textureUnits[qq], gq[qq], !0)
        }
      }
      _setAnisotropicLevel(qq, Eq, gq) {
        const Yq = this._caps.textureAnisotropicFilterExtension;
        11 !== Eq.samplingMode && 3 !== Eq.samplingMode && 2 !== Eq.samplingMode && (gq = 1), Yq && Eq._cachedAnisotropicFilteringLevel !== gq && (this._setTextureParameterFloat(qq, Yq.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(gq, this._caps.maxAnisotropy), Eq), Eq._cachedAnisotropicFilteringLevel = gq)
      }
      _setTextureParameterFloat(qq, Eq, gq, Yq) {
        this._bindTextureDirectly(qq, Yq, !0, !0), this._gl.texParameterf(qq, Eq, gq)
      }
      _setTextureParameterInteger(qq, Eq, gq, Yq) {
        Yq && this._bindTextureDirectly(qq, Yq, !0, !0), this._gl.texParameteri(qq, Eq, gq)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let qq = 0; qq < this._caps.maxVertexAttribs; qq++) this.disableAttributeByIndex(qq)
        } else
          for (let qq = 0, Eq = this._vertexAttribArraysEnabled.length; qq < Eq; qq++) qq >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[qq] || this.disableAttributeByIndex(qq)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Aq.n)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, lq.x)(this._gl)
      }
      attachContextLostEvent(qq) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", qq, !1)
      }
      attachContextRestoredEvent(qq) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", qq, !1)
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
      _canRenderToFramebuffer(qq) {
        const Eq = this._gl;
        for (; Eq.getError() !== Eq.NO_ERROR;);
        let gq = !0;
        const Yq = Eq.createTexture();
        Eq.bindTexture(Eq.TEXTURE_2D, Yq), Eq.texImage2D(Eq.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(qq), 1, 1, 0, Eq.RGBA, this._getWebGLTextureType(qq), null), Eq.texParameteri(Eq.TEXTURE_2D, Eq.TEXTURE_MIN_FILTER, Eq.NEAREST), Eq.texParameteri(Eq.TEXTURE_2D, Eq.TEXTURE_MAG_FILTER, Eq.NEAREST);
        const lq = Eq.createFramebuffer();
        Eq.bindFramebuffer(Eq.FRAMEBUFFER, lq), Eq.framebufferTexture2D(Eq.FRAMEBUFFER, Eq.COLOR_ATTACHMENT0, Eq.TEXTURE_2D, Yq, 0);
        const Oq = Eq.checkFramebufferStatus(Eq.FRAMEBUFFER);
        if (gq = gq && Oq === Eq.FRAMEBUFFER_COMPLETE, gq = gq && Eq.getError() === Eq.NO_ERROR, gq && (Eq.clear(Eq.COLOR_BUFFER_BIT), gq = gq && Eq.getError() === Eq.NO_ERROR), gq) {
          Eq.bindFramebuffer(Eq.FRAMEBUFFER, null);
          const qq = Eq.RGBA,
            Yq = Eq.UNSIGNED_BYTE,
            lq = new Uint8Array(4);
          Eq.readPixels(0, 0, 1, 1, qq, Yq, lq), gq = gq && Eq.getError() === Eq.NO_ERROR
        }
        for (Eq.deleteTexture(Yq), Eq.deleteFramebuffer(lq), Eq.bindFramebuffer(Eq.FRAMEBUFFER, null); !gq && Eq.getError() !== Eq.NO_ERROR;);
        return gq
      }
      _getWebGLTextureType(qq) {
        if (1 === this._webGLVersion) {
          switch (qq) {
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
        switch (qq) {
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
      _getInternalFormat(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = Eq ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (qq) {
          case 0:
            gq = this._gl.ALPHA;
            break;
          case 1:
            gq = this._gl.LUMINANCE;
            break;
          case 2:
            gq = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            gq = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            gq = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            gq = Eq ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            gq = Eq ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (qq) {
          case 8:
            gq = this._gl.RED_INTEGER;
            break;
          case 9:
            gq = this._gl.RG_INTEGER;
            break;
          case 10:
            gq = this._gl.RGB_INTEGER;
            break;
          case 11:
            gq = this._gl.RGBA_INTEGER
        }
        return gq
      }
      _getRGBABufferInternalSizedFormat(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Eq) switch (Eq) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return gq ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (qq) {
          case 3:
            switch (Eq) {
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
            switch (Eq) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return gq ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return gq ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (Eq) {
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
            switch (Eq) {
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
            switch (Eq) {
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
            switch (Eq) {
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
            switch (Eq) {
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
            switch (Eq) {
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
            switch (Eq) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return gq ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(qq, Eq, gq, Yq) {
        let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Aq = lq ? 4 : 3,
          cq = lq ? this._gl.RGBA : this._gl.RGB,
          uq = gq * Yq * Aq;
        if (mq) {
          if (mq.length < uq) return xq.b.Error(`Data buffer is too small to store the read pixels (${mq.length} should be more than ${uq})`), Promise.resolve(mq)
        } else mq = new Uint8Array(uq);
        return Oq && this.flushFramebuffer(), this._gl.readPixels(qq, Eq, gq, Yq, cq, this._gl.UNSIGNED_BYTE, mq), Promise.resolve(mq)
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
          const qq = Oq.b._CreateCanvas(1, 1),
            Eq = qq.getContext("webgl") || qq.getContext("experimental-webgl");
          this._IsSupported = null != Eq && !!globalThis.WebGLRenderingContext
        } catch (qq) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const qq = Oq.b._CreateCanvas(1, 1),
            Eq = qq.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || qq.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Eq
        } catch (qq) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Qq._TempClearColorUint32 = new Uint32Array(4), Qq._TempClearColorInt32 = new Int32Array(4), Qq._TempClearColorFloat32 = new Float32Array(4), Qq.ExceptionList = [{
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
    }], Qq._ConcatenateShader = dq.h, Qq._IsSupported = null, Qq._HasMajorPerformanceCaveat = null
  },
  39926: (qq, Eq, gq) => {
    var Yq;
    gq.d(Eq, {
        b: () => lq
      }),
      function(qq) {
        qq[qq.PointerMove = 0] = "PointerMove", qq[qq.PointerDown = 1] = "PointerDown", qq[qq.PointerUp = 2] = "PointerUp"
      }(Yq || (Yq = {}));
    class lq {}
    lq.DOM_DELTA_PIXEL = 0, lq.DOM_DELTA_LINE = 1, lq.DOM_DELTA_PAGE = 2
  },
  39921: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      e: () => Oq,
      i: () => lq
    });
    class Yq {}
    Yq.KEYDOWN = 1, Yq.KEYUP = 2;
    class lq {
      constructor(qq, Eq) {
        this.type = qq, this.event = Eq
      }
    }
    class Oq extends lq {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(qq) {
        this.skipOnKeyboardObservable = qq
      }
      constructor(qq, Eq) {
        super(qq, Eq), this.type = qq, this.event = Eq, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39919: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => mq,
      h: () => xq
    });
    var Yq = gq(37139);
    class lq {}
    lq.POINTERDOWN = 1, lq.POINTERUP = 2, lq.POINTERMOVE = 4, lq.POINTERWHEEL = 8, lq.POINTERPICK = 16, lq.POINTERTAP = 32, lq.POINTERDOUBLETAP = 64;
    class Oq {
      constructor(qq, Eq) {
        this.type = qq, this.event = Eq
      }
    }
    class mq extends Oq {
      constructor(qq, Eq, gq, lq) {
        super(qq, Eq), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Yq.p(gq, lq)
      }
    }
    class xq extends Oq {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(qq, Eq), this._pickInfo = gq, this._inputManager = Yq
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39938: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      static CompareLightsPriority(qq, Eq) {
        return qq.shadowEnabled !== Eq.shadowEnabled ? (Eq.shadowEnabled ? 1 : 0) - (qq.shadowEnabled ? 1 : 0) : Eq.renderPriority - qq.renderPriority
      }
    }
    Yq.FALLOFF_DEFAULT = 0, Yq.FALLOFF_PHYSICAL = 1, Yq.FALLOFF_GLTF = 2, Yq.FALLOFF_STANDARD = 3, Yq.LIGHTMAP_DEFAULT = 0, Yq.LIGHTMAP_SPECULAR = 1, Yq.LIGHTMAP_SHADOWSONLY = 2, Yq.INTENSITYMODE_AUTOMATIC = 0, Yq.INTENSITYMODE_LUMINOUSPOWER = 1, Yq.INTENSITYMODE_LUMINOUSINTENSITY = 2, Yq.INTENSITYMODE_ILLUMINANCE = 3, Yq.INTENSITYMODE_LUMINANCE = 4, Yq.LIGHTTYPEID_POINTLIGHT = 0, Yq.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Yq.LIGHTTYPEID_SPOTLIGHT = 2, Yq.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Yq.LIGHTTYPEID_RECT_AREALIGHT = 4, Yq.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39593: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq, lq = gq(37156),
      Oq = gq(39602);
    ! function(qq) {
      qq[qq.Unknown = 0] = "Unknown", qq[qq.Url = 1] = "Url", qq[qq.Temp = 2] = "Temp", qq[qq.Raw = 3] = "Raw", qq[qq.Dynamic = 4] = "Dynamic", qq[qq.RenderTarget = 5] = "RenderTarget", qq[qq.MultiRenderTarget = 6] = "MultiRenderTarget", qq[qq.Cube = 7] = "Cube", qq[qq.CubeRaw = 8] = "CubeRaw", qq[qq.CubePrefiltered = 9] = "CubePrefiltered", qq[qq.Raw3D = 10] = "Raw3D", qq[qq.Raw2DArray = 11] = "Raw2DArray", qq[qq.DepthStencil = 12] = "DepthStencil", qq[qq.CubeRawRGBD = 13] = "CubeRawRGBD", qq[qq.Depth = 14] = "Depth", qq[qq.External = 15] = "External"
    }(Yq || (Yq = {}));
    class mq extends Oq.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(qq) {
        this._useMipMaps = qq
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(qq) {
        this._uniqueId = qq
      }
      Ba() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new lq.d, this.onErrorObservable = new lq.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = qq, this._source = Eq, this._uniqueId = mq._Counter++, gq || (this._hardwareTexture = qq._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, qq, Eq, gq), this.width = qq, this.height = Eq, this.depth = gq, this.baseWidth = qq, this.baseHeight = Eq, this.baseDepth = gq, this._size = qq * Eq * gq
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const qq = this.onRebuildCallback(this),
            Eq = Eq => {
              Eq._swapAndDie(this, !1), this.isReady = qq.isReady
            };
          return void(qq.isAsync ? qq.proxy.then(Eq) : Eq(qq.proxy))
        }
        let qq;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(qq = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (qq => {
              qq._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (qq = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), qq._swapAndDie(this, !1), this._bufferViewArray)
              for (let qq = 0; qq < this._bufferViewArray.length; qq++) {
                const Eq = this._bufferViewArray[qq];
                Eq && this._engine.updateRawTexture(this, Eq, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, qq)
              }
            this.isReady = !0;
            break;
          case 10:
            qq = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), qq._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (qq = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), qq._swapAndDie(this, !1), this._bufferViewArray)
              for (let qq = 0; qq < this._bufferViewArray.length; qq++) {
                const Eq = this._bufferViewArray[qq];
                Eq && this._engine.updateRawTexture2DArray(this, Eq, this.format, this.invertY, this._compression, this.type, qq)
              }
            this.isReady = !0;
            break;
          case 4:
            qq = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), qq._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(qq = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              qq._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            qq = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), qq._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return qq = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (qq => {
              qq && qq._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(qq._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(qq._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), qq._hardwareTexture = this._hardwareTexture, qq._setUniqueId(mq._Counter++), Eq && (qq._isRGBD = this._isRGBD), this._lodTextureHigh && (qq._lodTextureHigh && qq._lodTextureHigh.dispose(), qq._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (qq._lodTextureMid && qq._lodTextureMid.dispose(), qq._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (qq._lodTextureLow && qq._lodTextureLow.dispose(), qq._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (qq._irradianceTexture && qq._irradianceTexture.dispose(), qq._irradianceTexture = this._irradianceTexture);
        const gq = this._engine.getLoadedTexturesCache();
        let Yq = gq.indexOf(this); - 1 !== Yq && gq.splice(Yq, 1), Yq = gq.indexOf(qq), -1 === Yq && gq.push(qq)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    mq._Counter = 0
  },
  39703: (qq, Eq, gq) => {
    function Yq(qq) {
      return 13 === qq || 14 === qq || 15 === qq || 16 === qq || 17 === qq || 18 === qq || 19 === qq
    }

    function lq(qq) {
      return 8 === qq || 9 === qq || 10 === qq || 11 === qq
    }

    function Oq(qq) {
      return 0 === qq || 5 === qq || 7 === qq || 11 === qq
    }

    function mq(qq) {
      return 13 === qq || 17 === qq || 18 === qq || 19 === qq
    }
    gq.d(Eq, {
      e: () => mq,
      i: () => Yq,
      m: () => lq,
      o: () => Oq
    })
  },
  39602: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    class Yq {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(qq) {
        this._cachedWrapU = qq
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(qq) {
        this._cachedWrapV = qq
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(qq) {
        this._cachedWrapR = qq
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(qq) {
        this._cachedAnisotropicFilteringLevel = qq
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(qq) {
        this._comparisonFunction = qq
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(qq) {
        this._useMipMaps = qq
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = qq, this._cachedWrapV = Eq, this._cachedWrapR = gq, this._cachedAnisotropicFilteringLevel = Yq, this.samplingMode = lq, this._comparisonFunction = Oq, this
      }
      compareSampler(qq) {
        return this._cachedWrapU === qq._cachedWrapU && this._cachedWrapV === qq._cachedWrapV && this._cachedWrapR === qq._cachedWrapR && this._cachedAnisotropicFilteringLevel === qq._cachedAnisotropicFilteringLevel && this.samplingMode === qq.samplingMode && this._comparisonFunction === qq._comparisonFunction && this._useMipMaps === qq._useMipMaps
      }
    }
  },
  39862: (qq, Eq, gq) => {
    function Yq(qq) {
      qq.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    gq.d(Eq, {
      e: () => Yq
    })
  },
  39676: (qq, Eq, gq) => {
    function Yq(qq) {
      return void 0 === qq.getPipelineContext
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  40074: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    var Yq = gq(39644);
    class lq {
      static GetEffect(qq) {
        return void 0 === qq.getPipelineContext ? qq.effect : qq
      }
      constructor(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = qq.createDrawContext(), Eq && (this.materialContext = qq.createMaterialContext())
      }
      setEffect(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        gq || this.effect === qq || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = qq, void 0 !== Eq && (this.defines = Eq), gq && this.drawContext?.reset()
      }
      dispose() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Eq = this.effect;
          qq ? Eq.dispose() : Yq.c.SetImmediate((() => {
            Eq.Ba().onEndFrameObservable.addOnce((() => {
              Eq.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39623: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq,
      f: () => Nq,
      i: () => cq,
      j: () => uq
    });
    var Yq = gq(39626),
      lq = gq(39628),
      Oq = gq(39617),
      mq = gq(38653),
      xq = gq(39640),
      Aq = gq(39630);

    function cq(qq, Eq) {
      return (0, lq.y)(Eq).cachedPipelines[qq]
    }

    function uq(qq) {
      const Eq = qq._name,
        gq = qq.context;
      if (Eq && gq) {
        const qq = (0, lq.y)(gq),
          Yq = qq.cachedPipelines[Eq];
        Yq?.dispose(), delete qq.cachedPipelines[Eq]
      }
    }

    function Bq(qq, Eq, gq, lq, Oq, mq, Aq) {
      let cq, uq;
      const Bq = (0, Yq.n)() ? mq?.getHostDocument() : null;
      cq = "string" === typeof Eq ? Eq : "string" === typeof Eq.vertexSource ? "source:" + Eq.vertexSource : "string" === typeof Eq.vertexElement ? Bq?.getElementById(Eq.vertexElement) || Eq.vertexElement : Eq.vertex || Eq, uq = "string" === typeof Eq ? Eq : "string" === typeof Eq.fragmentSource ? "source:" + Eq.fragmentSource : "string" === typeof Eq.fragmentElement ? Bq?.getElementById(Eq.fragmentElement) || Eq.fragmentElement : Eq.fragment || Eq;
      const Nq = [void 0, void 0],
        aq = () => {
          if (Nq[0] && Nq[1]) {
            const [Yq, cq] = Nq;
            (0, xq.f)(qq), (0, xq.k)(Yq, qq, ((Yq, uq) => {
              Aq && (Aq._vertexSourceCodeBeforeMigration = uq), gq && (Yq = gq("vertex", Yq)), qq.isFragment = !0, (0, xq.k)(cq, qq, ((mq, cq) => {
                Aq && (Aq._fragmentSourceCodeBeforeMigration = cq), gq && (mq = gq("fragment", mq));
                const uq = (0, xq.d)(Yq, mq, qq);
                qq = null;
                const Bq = function(qq, Eq, gq, Yq) {
                  if (gq) {
                    return {
                      vertexSourceCode: (1 === Yq ? "//" : "") + "#define SHADER_NAME vertex:" + (gq.vertexElement || gq.vertex || gq.spectorName || gq) + "\n" + qq,
                      fragmentSourceCode: (1 === Yq ? "//" : "") + "#define SHADER_NAME fragment:" + (gq.fragmentElement || gq.fragment || gq.spectorName || gq) + "\n" + Eq
                    }
                  }
                  return {
                    vertexSourceCode: qq,
                    fragmentSourceCode: Eq
                  }
                }(uq.vertexCode, uq.fragmentCode, Eq, Oq);
                lq?.(Bq.vertexSourceCode, Bq.fragmentSourceCode)
              }), mq)
            }), mq)
          }
        };
      Wq(cq, "Vertex", "", (qq => {
        Aq && (Aq._rawVertexSourceCode = qq), Nq[0] = qq, aq()
      }), Oq), Wq(uq, "Fragment", "Pixel", (qq => {
        Aq && (Aq._rawFragmentSourceCode = qq), Nq[1] = qq, aq()
      }), Oq)
    }

    function Wq(qq, Eq, gq, lq, mq, xq) {
      if ("undefined" !== typeof HTMLElement && qq instanceof HTMLElement) {
        return void lq((0, Yq.b)(qq))
      }
      if ("source:" === qq.substring(0, 7)) return void lq(qq.substring(7));
      if ("base64:" === qq.substring(0, 7)) {
        return void lq(window.atob(qq.substring(7)))
      }
      const cq = Oq.d.GetShadersStore(mq);
      if (cq[qq + Eq + "Shader"]) return void lq(cq[qq + Eq + "Shader"]);
      if (gq && cq[qq + gq + "Shader"]) return void lq(cq[qq + gq + "Shader"]);
      let uq;
      if (uq = "." === qq[0] || "/" === qq[0] || qq.indexOf("http") > -1 ? qq : Oq.d.GetShadersRepository(mq) + qq, !(xq = xq || Aq.m)) throw new Error("loadFileInjection is not defined");
      xq(uq + "." + Eq.toLowerCase() + ".fx", lq)
    }
    const Nq = (qq, Eq, gq, Yq) => {
      try {
        const Oq = qq.context ? (0, lq.y)(qq.context) : null;
        Oq && (Oq.disableParallelShaderCompile = qq.disableParallelCompilation);
        const mq = qq.existingPipelineContext || Eq(qq.shaderProcessingContext);
        return mq._name = qq.name, qq.name && Oq && (Oq.cachedPipelines[qq.name] = mq), gq(mq, qq.vertex, qq.fragment, !!qq.createAsRaw, "", "", qq.rebuildRebind, qq.defines, qq.transformFeedbackVaryings, "", (() => {
          Yq(mq, (() => {
            qq.onRenderingStateCompiled?.(mq)
          }))
        })), mq
      } catch (Oq) {
        throw mq.b.Error("Error compiling effect"), Oq
      }
    }
  },
  39612: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq
    });
    var Yq = gq(37156),
      lq = gq(38653),
      Oq = gq(39617),
      mq = gq(39623),
      xq = gq(39644);
    class Aq {
      static get ShadersRepository() {
        return Oq.d.ShadersRepository
      }
      static set ShadersRepository(qq) {
        Oq.d.ShadersRepository = qq
      }
      get bM() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Yq.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(qq, Eq, gq) {
        let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Oq = arguments.length > 4 ? arguments[4] : void 0,
          xq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          uq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Bq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Wq = arguments.length > 9 ? arguments[9] : void 0,
          Nq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          aq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Vq = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Yq.d, this.onErrorObservable = new Yq.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = qq, this._key = Nq;
        const dq = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let jq;
        if (Eq.attributes) {
          const qq = Eq;
          if (this._engine = gq, this._attributesNames = qq.attributes, this._uniformsNames = qq.uniformsNames.concat(qq.samplers), this._samplerList = qq.samplers.slice(), this.defines = qq.defines, this.onError = qq.onError, this.onCompiled = qq.onCompiled, this._fallbacks = qq.fallbacks, this._indexParameters = qq.indexParameters, this._transformFeedbackVaryings = qq.transformFeedbackVaryings || null, this._multiTarget = !!qq.multiTarget, this._shaderLanguage = qq.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!qq.disableParallelShaderCompilation, qq.uniformBuffersNames) {
            this._uniformBuffersNamesList = qq.uniformBuffersNames.slice();
            for (let Eq = 0; Eq < qq.uniformBuffersNames.length; Eq++) this._uniformBuffersNames[qq.uniformBuffersNames[Eq]] = Eq
          }
          this._processFinalCode = qq.processFinalCode ?? null, this._processCodeAfterIncludes = qq.processCodeAfterIncludes ?? void 0, Vq = qq.extraInitializationsAsync, jq = qq.existingPipelineContext
        } else this._engine = Oq, this.defines = null == xq ? "" : xq, this._uniformsNames = gq.concat(lq), this._samplerList = lq ? lq.slice() : [], this._attributesNames = Eq, this._uniformBuffersNamesList = [], this._shaderLanguage = aq, this.onError = Bq, this.onCompiled = uq, this._indexParameters = Wq, this._fallbacks = cq;
        "WEBGL2" === this._engine.shaderPlatformName && (jq = (0, mq.i)(dq, this._engine._gl) ?? jq), this._attributeLocationByName = {}, this.uniqueId = Aq._UniqueIdSeed++, jq ? (this._pipelineContext = jq, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Vq).catch((qq => {
          const Eq = qq?.message ?? String(qq),
            gq = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Eq}`);
          qq && "string" === typeof qq.stack && (gq.stack = `${gq.message}\nCaused by: ${qq.stack}`), this._processCompilationErrors(gq)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.bM || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        Yq && await Yq(), this._processingContext = gq || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const lq = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: qq ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Oq.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Oq.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          vYq: this._engine.vYq,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, mq.c)(lq, this.name, this._processFinalCode, ((qq, gq) => {
          this._vertexSourceCode = qq, this._fragmentSourceCode = gq, this._prepareEffect(Eq)
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
        return !!this._engine.bM || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Ba() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(qq) {
        return this._attributes[qq]
      }
      getAttributeLocationByName(qq) {
        return this._attributeLocationByName[qq]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(qq) {
        return this._uniformsNames.indexOf(qq)
      }
      getUniform(qq) {
        return this._uniforms[qq]
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
        return await new Promise((qq => {
          this.executeWhenCompiled(qq)
        }))
      }
      executeWhenCompiled(qq) {
        this.isReady() ? qq(this) : (this.onCompileObservable.add((Eq => {
          qq(Eq)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(qq) {
        (0, xq.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Eq => {
          this._processCompilationErrors(Eq, qq)
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
            vYq: this._engine.vYq,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(qq, Eq, gq, Yq) {
        this._isReady = !1, this._vertexSourceCodeOverride = qq, this._fragmentSourceCodeOverride = Eq, this.onError = (qq, Eq) => {
          Yq && Yq(Eq)
        }, this.onCompiled = () => {
          const qq = this.Ba().scenes;
          if (qq)
            for (let Eq = 0; Eq < qq.length; Eq++) qq[Eq].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(gq)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(qq) {
        if (this._pipelineContext = qq, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Eq = 0; Eq < this._attributesNames.length; Eq++) {
            const qq = this._attributesNames[Eq];
            this._attributeLocationByName[qq] = this._attributes[Eq]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Aq.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = this._pipelineContext;
        this._isReady = !1;
        try {
          const gq = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Yq = gq ? null : this.defines,
            lq = gq ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Oq = gq ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            xq = this._engine;
          this._pipelineContext = (0, mq.f)({
            existingPipelineContext: qq ? Eq : null,
            vertex: lq,
            fragment: Oq,
            context: "WEBGL2" === xq.shaderPlatformName || "WEBGL1" === xq.shaderPlatformName ? xq._gl : void 0,
            rebuildRebind: (qq, Eq, gq, Yq) => this._rebuildProgram(qq, Eq, gq, Yq),
            defines: Yq,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: gq,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: gq => {
              Eq && !qq && this._engine._deletePipelineContext(Eq), gq && this._onRenderingStateCompiled(gq)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Eq)
        } catch (gq) {
          this._processCompilationErrors(gq, Eq)
        }
      }
      _getShaderCodeAndErrorLine(qq, Eq, gq) {
        const Yq = gq ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let lq = null;
        if (Eq && qq) {
          const Oq = Eq.match(Yq);
          if (Oq && 2 === Oq.length) {
            const Eq = parseInt(Oq[1]),
              Yq = qq.split("\n", -1);
            Yq.length >= Eq && (lq = `Offending line [${Eq}] in ${gq?"fragment":"vertex"} code: ${Yq[Eq-1]}`)
          }
        }
        return [qq, lq]
      }
      _processCompilationErrors(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof qq?.stack ? qq.stack : qq?.message ?? String(qq);
        const gq = this._attributesNames,
          Yq = this._fallbacks;
        if (lq.b.Error("Unable to compile effect:"), lq.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), lq.b.Error(`Attributes: ${gq.join(" ")}`), lq.b.Error("Defines:\n" + this.defines), Aq.LogShaderCodeOnCompilationError) {
          let qq, Eq = null,
            gq = null;
          this._pipelineContext?._getVertexShaderCode() && ([qq, Eq] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), qq && (lq.b.Error("Vertex code:"), lq.b.Error(qq))), this._pipelineContext?._getFragmentShaderCode() && ([qq, gq] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), qq && (lq.b.Error("Fragment code:"), lq.b.Error(qq))), Eq && lq.b.Error(Eq), gq && lq.b.Error(gq)
        }
        lq.b.Error("Error: " + this._compilationError);
        const Oq = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Eq && (this._pipelineContext = Eq, this._isReady = !0, Oq()), Yq ? (this._pipelineContext = null, Yq.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, lq.b.Error("Trying next fallback."), this.defines = Yq.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Oq(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Eq || Oq())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(qq, Eq) {
        this._engine._bindTexture(this._samplers[qq], Eq, qq)
      }
      setTexture(qq, Eq) {
        this._engine.setTexture(this._samplers[qq], this._uniforms[qq], Eq, qq)
      }
      setTextureArray(qq, Eq) {
        const gq = qq + "Ex";
        if (-1 === this._samplerList.indexOf(gq + "0")) {
          const Yq = this._samplerList.indexOf(qq);
          for (let qq = 1; qq < Eq.length; qq++) {
            const Eq = gq + (qq - 1).toString();
            this._samplerList.splice(Yq + qq, 0, Eq)
          }
          let lq = 0;
          for (const qq of this._samplerList) this._samplers[qq] = lq, lq += 1
        }
        this._engine.setTextureArray(this._samplers[qq], this._uniforms[qq], Eq, qq)
      }
      bindUniformBuffer(qq, Eq) {
        const gq = this._uniformBuffersNames[Eq];
        void 0 === gq || Aq._BaseCache[gq] === qq && this._engine._features.useUBOBindingCache || (Aq._BaseCache[gq] = qq, this._engine.bindUniformBufferBase(qq, gq, Eq))
      }
      bindUniformBlock(qq, Eq) {
        this._engine.bindUniformBlock(this._pipelineContext, qq, Eq)
      }
      setInt(qq, Eq) {
        return this._pipelineContext.setInt(qq, Eq), this
      }
      setInt2(qq, Eq, gq) {
        return this._pipelineContext.setInt2(qq, Eq, gq), this
      }
      setInt3(qq, Eq, gq, Yq) {
        return this._pipelineContext.setInt3(qq, Eq, gq, Yq), this
      }
      setInt4(qq, Eq, gq, Yq, lq) {
        return this._pipelineContext.setInt4(qq, Eq, gq, Yq, lq), this
      }
      setIntArray(qq, Eq) {
        return this._pipelineContext.setIntArray(qq, Eq), this
      }
      setIntArray2(qq, Eq) {
        return this._pipelineContext.setIntArray2(qq, Eq), this
      }
      setIntArray3(qq, Eq) {
        return this._pipelineContext.setIntArray3(qq, Eq), this
      }
      setIntArray4(qq, Eq) {
        return this._pipelineContext.setIntArray4(qq, Eq), this
      }
      setUInt(qq, Eq) {
        return this._pipelineContext.setUInt(qq, Eq), this
      }
      setUInt2(qq, Eq, gq) {
        return this._pipelineContext.setUInt2(qq, Eq, gq), this
      }
      setUInt3(qq, Eq, gq, Yq) {
        return this._pipelineContext.setUInt3(qq, Eq, gq, Yq), this
      }
      setUInt4(qq, Eq, gq, Yq, lq) {
        return this._pipelineContext.setUInt4(qq, Eq, gq, Yq, lq), this
      }
      setUIntArray(qq, Eq) {
        return this._pipelineContext.setUIntArray(qq, Eq), this
      }
      setUIntArray2(qq, Eq) {
        return this._pipelineContext.setUIntArray2(qq, Eq), this
      }
      setUIntArray3(qq, Eq) {
        return this._pipelineContext.setUIntArray3(qq, Eq), this
      }
      setUIntArray4(qq, Eq) {
        return this._pipelineContext.setUIntArray4(qq, Eq), this
      }
      setFloatArray(qq, Eq) {
        return this._pipelineContext.setArray(qq, Eq), this
      }
      setFloatArray2(qq, Eq) {
        return this._pipelineContext.setArray2(qq, Eq), this
      }
      setFloatArray3(qq, Eq) {
        return this._pipelineContext.setArray3(qq, Eq), this
      }
      setFloatArray4(qq, Eq) {
        return this._pipelineContext.setArray4(qq, Eq), this
      }
      setArray(qq, Eq) {
        return this._pipelineContext.setArray(qq, Eq), this
      }
      setArray2(qq, Eq) {
        return this._pipelineContext.setArray2(qq, Eq), this
      }
      setArray3(qq, Eq) {
        return this._pipelineContext.setArray3(qq, Eq), this
      }
      setArray4(qq, Eq) {
        return this._pipelineContext.setArray4(qq, Eq), this
      }
      setMatrices(qq, Eq) {
        return this._pipelineContext.setMatrices(qq, Eq), this
      }
      setMatrix(qq, Eq) {
        return this._pipelineContext.setMatrix(qq, Eq), this
      }
      setMatrix3x3(qq, Eq) {
        return this._pipelineContext.setMatrix3x3(qq, Eq), this
      }
      setMatrix2x2(qq, Eq) {
        return this._pipelineContext.setMatrix2x2(qq, Eq), this
      }
      setFloat(qq, Eq) {
        return this._pipelineContext.setFloat(qq, Eq), this
      }
      setBool(qq, Eq) {
        return this._pipelineContext.setInt(qq, Eq ? 1 : 0), this
      }
      setVector2(qq, Eq) {
        return this._pipelineContext.setVector2(qq, Eq), this
      }
      setFloat2(qq, Eq, gq) {
        return this._pipelineContext.setFloat2(qq, Eq, gq), this
      }
      setVector3(qq, Eq) {
        return this._pipelineContext.setVector3(qq, Eq), this
      }
      setFloat3(qq, Eq, gq, Yq) {
        return this._pipelineContext.setFloat3(qq, Eq, gq, Yq), this
      }
      setVector4(qq, Eq) {
        return this._pipelineContext.setVector4(qq, Eq), this
      }
      setQuaternion(qq, Eq) {
        return this._pipelineContext.setQuaternion(qq, Eq), this
      }
      setFloat4(qq, Eq, gq, Yq, lq) {
        return this._pipelineContext.setFloat4(qq, Eq, gq, Yq, lq), this
      }
      setColor3(qq, Eq) {
        return this._pipelineContext.setColor3(qq, Eq), this
      }
      setColor4(qq, Eq, gq) {
        return this._pipelineContext.setColor4(qq, Eq, gq), this
      }
      setDirectColor4(qq, Eq) {
        return this._pipelineContext.setDirectColor4(qq, Eq), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Aq.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, mq.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Eq && (Oq.d.GetShadersStore(Yq)[`${qq}PixelShader`] = Eq), gq && (Oq.d.GetShadersStore(Yq)[`${qq}VertexShader`] = gq)
      }
      static ResetCache() {
        Aq._BaseCache = {}
      }
    }
    Aq.LogShaderCodeOnCompilationError = !0, Aq.PersistentMode = !1, Aq.AutomaticallyClearCodeCache = !1, Aq._UniqueIdSeed = 0, Aq._BaseCache = {}, Aq.ShadersStore = Oq.d.ShadersStore, Aq.IncludesShadersStore = Oq.d.IncludesShadersStore
  },
  39891: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      h: () => tq,
      l: () => yq
    });
    var Yq = gq(39612),
      lq = gq(37139),
      Oq = gq(37165),
      mq = gq(39870);
    const xq = new lq.e,
      Aq = new lq.e,
      cq = new lq.e,
      uq = {
        ZJ: () => {},
        eyeAtCamera: !0
      };

    function Bq(qq, Eq, gq) {
      const Yq = gq.bYq(),
        lq = Eq.bYq();
      for (let Oq = 0; Oq < 16; Oq++) Yq[Oq] = lq[Oq];
      return Yq[12] -= qq.x, Yq[13] -= qq.y, Yq[14] -= qq.z, gq.markAsUpdated(), gq
    }

    function Wq(qq, Eq, gq) {
      return (0, Oq.h)(Eq, Aq), Bq(qq, Aq, cq), (0, Oq.h)(cq, gq), gq
    }

    function Nq(qq, Eq, gq) {
      if (!uq.eyeAtCamera) return Wq(qq, Eq, gq);
      const Yq = gq.bYq(),
        lq = Eq.bYq();
      for (let Oq = 0; Oq < 16; Oq++) Yq[Oq] = lq[Oq];
      return Yq[12] = 0, Yq[13] = 0, Yq[14] = 0, gq.markAsUpdated(), gq
    }

    function aq(qq, Eq, gq, Yq) {
      return (0, Oq.o)(Nq(qq, Eq, Yq), gq, Yq), Yq
    }

    function Vq(qq, Eq, gq, Yq) {
      return (0, Oq.h)(gq, Aq), (0, Oq.o)(Eq, Aq, cq), Bq(qq, cq, Aq), Nq(qq, gq, cq), (0, Oq.o)(Aq, cq, Yq), Yq
    }

    function dq(qq, Eq, gq, Yq, lq, mq) {
      return (0, Oq.h)(gq, Aq), (0, Oq.o)(Eq, Aq, cq), Bq(qq, cq, Aq), aq(qq, Yq, lq, cq), (0, Oq.o)(Aq, cq, mq), mq
    }

    function jq(qq, Eq) {
      const gq = uq.ZJ();
      if (!gq || xq === Eq) return Eq;
      xq.updateFlag = Eq.updateFlag;
      const Yq = gq.floatingOriginOffset;
      switch (qq) {
        case "world":
          return Bq(Yq, Eq, xq);
        case "view":
          return Nq(Yq, Eq, xq);
        case "worldView":
          return Vq(Yq, Eq, gq.getViewMatrix(), xq);
        case "viewProjection":
          return aq(Yq, gq.getViewMatrix(), gq.getProjectionMatrix(), xq);
        case "worldViewProjection":
          return dq(Yq, Eq, gq.getTransformMatrix(), gq.getViewMatrix(), gq.getProjectionMatrix(), xq);
        default:
          if (qq.startsWith("u_")) {
            const lq = qq.toLowerCase();
            if (lq.startsWith("u_worldviewprojection")) return dq(Yq, Eq, gq.getTransformMatrix(), gq.getViewMatrix(), gq.getProjectionMatrix(), xq);
            if (lq.startsWith("u_viewprojection")) return aq(Yq, gq.getViewMatrix(), gq.getProjectionMatrix(), xq);
            if (lq.startsWith("u_worldview")) return Vq(Yq, Eq, gq.getViewMatrix(), xq);
            if (lq.startsWith("u_world")) return Bq(Yq, Eq, xq);
            if (lq.startsWith("u_view")) return Nq(Yq, Eq, xq)
          }
          return Eq
      }
    }
    const Hq = mq.b,
      oq = Yq.d,
      Pq = Hq.prototype._updateMatrixForUniform,
      Qq = Yq.d.prototype.setMatrix;

    function yq() {
      Yq.d.prototype.setMatrix = Qq, oq._setMatrixOverride = void 0, Hq.prototype._updateMatrixForUniform = Pq, Hq.prototype._updateMatrixForUniformOverride = void 0
    }

    function tq() {
      oq.prototype._setMatrixOverride = Qq, oq.prototype.setMatrix = function(qq, Eq) {
        return this._setMatrixOverride(qq, jq(qq, Eq)), this
      }, Hq.prototype._updateMatrixForUniformOverride = Pq, Hq.prototype._updateMatrixForUniform = function(qq, Eq) {
        this._updateMatrixForUniformOverride(qq, jq(qq, Eq))
      }
    }
  },
  39865: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      e: () => lq
    });
    var Yq = gq(39862);

    function lq(qq, Eq) {
      Eq.WHITEBALANCE && qq.push("whiteBalanceMatrix"), Eq.EXPOSURE && qq.push("exposureLinear"), Eq.CONTRAST && qq.push("contrast"), Eq.COLORGRADING && qq.push("colorTransformSettings"), (Eq.VIGNETTE || Eq.DITHER) && qq.push("vInverseScreenSize"), Eq.VIGNETTE && (qq.push("vignetteSettings1"), qq.push("vignetteSettings2")), Eq.COLORCURVES && (0, Yq.e)(qq), Eq.DITHER && qq.push("ditherIntensity")
    }

    function Oq(qq, Eq) {
      Eq.COLORGRADING && qq.push("txColorTransform")
    }
  },
  39860: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => bq,
      f: () => fq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37156),
      mq = gq(37289),
      xq = gq(37158),
      Aq = gq(37139);
    const cq = [
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
      uq = 1e6 / cq[cq.length - 1][0],
      Bq = 150;

    function Wq(qq, Eq) {
      const gq = Number.isNaN(qq) ? uq : Math.max(qq, uq),
        Yq = (0, xq.Clamp)(1e6 / gq, cq[0][0], cq[cq.length - 1][0]);
      let lq = 0,
        Oq = cq.length - 1;
      for (; Oq - lq > 1;) {
        const qq = lq + Oq >> 1;
        cq[qq][0] <= Yq ? lq = qq : Oq = qq
      }
      const mq = lq,
        [Wq, Nq, aq, Vq] = cq[mq],
        [dq, jq, Hq, oq] = cq[mq + 1],
        Pq = (Yq - Wq) / (dq - Wq),
        Qq = Aq.p.Lerp(new Aq.p(Nq, aq), new Aq.p(jq, Hq), Pq),
        yq = Aq.p.Normalize(new Aq.p(1, Vq)),
        tq = Aq.p.Normalize(new Aq.p(1, oq)),
        rq = Aq.p.Normalize(Aq.p.Lerp(yq, tq, Pq)),
        vq = (0, xq.Clamp)(Eq, -150, Bq);
      Qq.KYq(rq.scale(vq / 3e3));
      const hq = 2 * Qq.x - 8 * Qq.y + 4,
        nq = 3 * Qq.x / hq,
        bq = 2 * Qq.y / hq;
      return new Aq.q(nq / bq, 1, (1 - nq - bq) / bq)
    }
    const Nq = Aq.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      aq = Aq.e.Invert(Nq);

    function Vq(qq, Eq) {
      const gq = Eq > 0 ? qq / Eq : 10;
      return (0, xq.Clamp)(gq, .1, 10)
    }

    function dq(qq, Eq) {
      const gq = Aq.q.TransformNormal(qq, Nq),
        Yq = Aq.q.TransformNormal(Eq, Nq),
        lq = Aq.e.FromArray([Vq(Yq.x, gq.x), 0, 0, 0, 0, Vq(Yq.y, gq.y), 0, 0, 0, 0, Vq(Yq.z, gq.z), 0, 0, 0, 0, 1]);
      return Nq.multiply(lq).multiply(aq)
    }
    const jq = new Aq.q(.95047, 1, 1.08883),
      Hq = Aq.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(dq(jq, Wq(6500, 0))),
      oq = Aq.e.Invert(Hq),
      Pq = Aq.q.TransformNormal(new Aq.q(1, 1, 1), Hq);
    var Qq = gq(39779),
      yq = gq(39862);
    let tq = (() => {
      var qq;
      let Eq, gq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq = [],
        jq = [],
        Hq = [],
        oq = [],
        Pq = [],
        tq = [],
        rq = [],
        vq = [],
        hq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [],
        Jq = [],
        kq = [],
        Rq = [];
      return qq = class {
        constructor() {
          this._dirty = !0, this._tempColor = new mq.g(0, 0, 0, 0), this._globalCurve = new mq.g(0, 0, 0, 0), this._highlightsCurve = new mq.g(0, 0, 0, 0), this._midtonesCurve = new mq.g(0, 0, 0, 0), this._shadowsCurve = new mq.g(0, 0, 0, 0), this._positiveCurve = new mq.g(0, 0, 0, 0), this._negativeCurve = new mq.g(0, 0, 0, 0), this._globalHue = (0, Yq.i)(this, dq, 30), this._globalDensity = ((0, Yq.i)(this, jq), (0, Yq.i)(this, Hq, 0)), this._globalSaturation = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, 0)), this._globalExposure = ((0, Yq.i)(this, tq), (0, Yq.i)(this, rq, 0)), this._highlightsHue = ((0, Yq.i)(this, vq), (0, Yq.i)(this, hq, 30)), this._highlightsDensity = ((0, Yq.i)(this, nq), (0, Yq.i)(this, bq, 0)), this._highlightsSaturation = ((0, Yq.i)(this, iq), (0, Yq.i)(this, Zq, 0)), this._highlightsExposure = ((0, Yq.i)(this, fq), (0, Yq.i)(this, Mq, 0)), this._midtonesHue = ((0, Yq.i)(this, Tq), (0, Yq.i)(this, zq, 30)), this._midtonesDensity = ((0, Yq.i)(this, Sq), (0, Yq.i)(this, pq, 0)), this._midtonesSaturation = ((0, Yq.i)(this, Gq), (0, Yq.i)(this, Lq, 0)), this._midtonesExposure = ((0, Yq.i)(this, Jq), (0, Yq.i)(this, kq, 0)), this._shadowsHue = ((0, Yq.i)(this, Rq), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(qq) {
          this._globalHue = qq, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(qq) {
          this._globalDensity = qq, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(qq) {
          this._globalSaturation = qq, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(qq) {
          this._globalExposure = qq, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(qq) {
          this._highlightsHue = qq, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(qq) {
          this._highlightsDensity = qq, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(qq) {
          this._highlightsSaturation = qq, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(qq) {
          this._highlightsExposure = qq, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(qq) {
          this._midtonesHue = qq, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(qq) {
          this._midtonesDensity = qq, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(qq) {
          this._midtonesSaturation = qq, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(qq) {
          this._midtonesExposure = qq, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(qq) {
          this._shadowsHue = qq, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(qq) {
          this._shadowsDensity = qq, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(qq) {
          this._shadowsSaturation = qq, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(qq) {
          this._shadowsExposure = qq, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Eq, gq, Yq, lq, Oq) {
          null != Eq && (Eq = qq._Clamp(Eq, 0, 360), gq = qq._Clamp(gq, -100, 100), Yq = qq._Clamp(Yq, -100, 100), lq = qq._Clamp(lq, -100, 100), gq = qq._ApplyColorGradingSliderNonlinear(gq), gq *= .5, lq = qq._ApplyColorGradingSliderNonlinear(lq), gq < 0 && (gq *= -1, Eq = (Eq + 180) % 360), qq._FromHSBToRef(Eq, gq, 50 + .25 * lq, Oq), Oq.scaleToRef(2, Oq), Oq.a = 1 + .01 * Yq)
        }
        static _ApplyColorGradingSliderNonlinear(qq) {
          qq /= 100;
          let Eq = Math.abs(qq);
          return Eq = Math.pow(Eq, 2), qq < 0 && (Eq *= -1), Eq *= 100, Eq
        }
        static _FromHSBToRef(Eq, gq, Yq, lq) {
          let Oq = qq._Clamp(Eq, 0, 360);
          const mq = qq._Clamp(gq / 100, 0, 1),
            xq = qq._Clamp(Yq / 100, 0, 1);
          if (0 === mq) lq.r = xq, lq.g = xq, lq.b = xq;
          else {
            Oq /= 60;
            const qq = Math.floor(Oq),
              Eq = Oq - qq,
              gq = xq * (1 - mq),
              Yq = xq * (1 - mq * Eq),
              Aq = xq * (1 - mq * (1 - Eq));
            switch (qq) {
              case 0:
                lq.r = xq, lq.g = Aq, lq.b = gq;
                break;
              case 1:
                lq.r = Yq, lq.g = xq, lq.b = gq;
                break;
              case 2:
                lq.r = gq, lq.g = xq, lq.b = Aq;
                break;
              case 3:
                lq.r = gq, lq.g = Yq, lq.b = xq;
                break;
              case 4:
                lq.r = Aq, lq.g = gq, lq.b = xq;
                break;
              default:
                lq.r = xq, lq.g = gq, lq.b = Yq
            }
          }
          lq.a = 1
        }
        static _Clamp(qq, Eq, gq) {
          return Math.min(Math.max(qq, Eq), gq)
        }
        clone() {
          return Qq.d.Clone((() => new qq), this)
        }
        serialize() {
          return Qq.d.Serialize(this)
        }
        _bind(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), qq && (qq.setFloat4(Eq, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), qq.setFloat4(gq, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), qq.setFloat4(Yq, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: qq => "_globalHue" in qq,
            get: qq => qq._globalHue,
            set: (qq, Eq) => {
              qq._globalHue = Eq
            }
          },
          metadata: mq
        }, dq, jq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "_globalDensity" in qq,
            get: qq => qq._globalDensity,
            set: (qq, Eq) => {
              qq._globalDensity = Eq
            }
          },
          metadata: mq
        }, Hq, oq), (0, Yq.f)(null, null, Oq, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: qq => "_globalSaturation" in qq,
            get: qq => qq._globalSaturation,
            set: (qq, Eq) => {
              qq._globalSaturation = Eq
            }
          },
          metadata: mq
        }, Pq, tq), (0, Yq.f)(null, null, xq, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: qq => "_globalExposure" in qq,
            get: qq => qq._globalExposure,
            set: (qq, Eq) => {
              qq._globalExposure = Eq
            }
          },
          metadata: mq
        }, rq, vq), (0, Yq.f)(null, null, Aq, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: qq => "_highlightsHue" in qq,
            get: qq => qq._highlightsHue,
            set: (qq, Eq) => {
              qq._highlightsHue = Eq
            }
          },
          metadata: mq
        }, hq, nq), (0, Yq.f)(null, null, cq, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "_highlightsDensity" in qq,
            get: qq => qq._highlightsDensity,
            set: (qq, Eq) => {
              qq._highlightsDensity = Eq
            }
          },
          metadata: mq
        }, bq, iq), (0, Yq.f)(null, null, uq, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: qq => "_highlightsSaturation" in qq,
            get: qq => qq._highlightsSaturation,
            set: (qq, Eq) => {
              qq._highlightsSaturation = Eq
            }
          },
          metadata: mq
        }, Zq, fq), (0, Yq.f)(null, null, Bq, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: qq => "_highlightsExposure" in qq,
            get: qq => qq._highlightsExposure,
            set: (qq, Eq) => {
              qq._highlightsExposure = Eq
            }
          },
          metadata: mq
        }, Mq, Tq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: qq => "_midtonesHue" in qq,
            get: qq => qq._midtonesHue,
            set: (qq, Eq) => {
              qq._midtonesHue = Eq
            }
          },
          metadata: mq
        }, zq, Sq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "_midtonesDensity" in qq,
            get: qq => qq._midtonesDensity,
            set: (qq, Eq) => {
              qq._midtonesDensity = Eq
            }
          },
          metadata: mq
        }, pq, Gq), (0, Yq.f)(null, null, aq, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: qq => "_midtonesSaturation" in qq,
            get: qq => qq._midtonesSaturation,
            set: (qq, Eq) => {
              qq._midtonesSaturation = Eq
            }
          },
          metadata: mq
        }, Lq, Jq), (0, Yq.f)(null, null, Vq, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: qq => "_midtonesExposure" in qq,
            get: qq => qq._midtonesExposure,
            set: (qq, Eq) => {
              qq._midtonesExposure = Eq
            }
          },
          metadata: mq
        }, kq, Rq), mq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mq
        })
      })(), qq.PrepareUniforms = yq.e, qq
    })();

    function rq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      qq._bind(Eq, gq, Yq, lq)
    }
    var vq = gq(39696),
      hq = gq(39865),
      nq = gq(37171);
    let bq = (() => {
        var qq;
        let Eq, gq, cq, Nq, aq, Vq, jq, yq, nq, bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, sq, Xq, wq, Kq = [],
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
          UE = [],
          FE = [],
          sE = [],
          XE = [],
          wE = [],
          KE = [],
          CE = [],
          IE = [],
          eE = [];
        return qq = class {
          constructor() {
            this.colorCurves = (0, Yq.i)(this, Kq, new tq), this._colorCurvesEnabled = ((0, Yq.i)(this, Cq), (0, Yq.i)(this, Iq, !1)), this._colorGradingTexture = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, void 0)), this._colorGradingEnabled = ((0, Yq.i)(this, qE), (0, Yq.i)(this, EE, !1)), this._colorGradingWithGreenDepth = ((0, Yq.i)(this, gE), (0, Yq.i)(this, YE, !0)), this._colorGradingBGR = ((0, Yq.i)(this, lE), (0, Yq.i)(this, OE, !0)), this._exposure = ((0, Yq.i)(this, mE), (0, Yq.i)(this, xE, 1)), this._toneMappingEnabled = ((0, Yq.i)(this, AE), (0, Yq.i)(this, cE, !1)), this._toneMappingType = ((0, Yq.i)(this, uE), (0, Yq.i)(this, BE, qq.TONEMAPPING_STANDARD)), this._contrast = ((0, Yq.i)(this, WE), (0, Yq.i)(this, NE, 1)), this._whiteBalanceEnabled = ((0, Yq.i)(this, aE), (0, Yq.i)(this, VE, !1)), this._temperature = ((0, Yq.i)(this, dE), (0, Yq.i)(this, jE, 6500)), this._tint = ((0, Yq.i)(this, HE), (0, Yq.i)(this, oE, 0)), this._whiteBalanceMatrix = ((0, Yq.i)(this, PE), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Yq.i)(this, QE, 0), this.vignetteCenterX = ((0, Yq.i)(this, yE), (0, Yq.i)(this, tE, 0)), this.vignetteCenterY = ((0, Yq.i)(this, rE), (0, Yq.i)(this, vE, 0)), this.vignetteWeight = ((0, Yq.i)(this, hE), (0, Yq.i)(this, nE, 1.5)), this.vignetteColor = ((0, Yq.i)(this, bE), (0, Yq.i)(this, iE, new mq.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Yq.i)(this, ZE), (0, Yq.i)(this, fE, .5)), this._vignetteBlendMode = ((0, Yq.i)(this, ME), (0, Yq.i)(this, TE, qq.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Yq.i)(this, zE), (0, Yq.i)(this, SE, !1)), this._ditheringEnabled = ((0, Yq.i)(this, pE), (0, Yq.i)(this, GE, !1)), this._ditheringIntensity = ((0, Yq.i)(this, LE), (0, Yq.i)(this, JE, 1 / 255)), this._skipFinalColorClamp = ((0, Yq.i)(this, kE), (0, Yq.i)(this, RE, !1)), this._applyByPostProcess = ((0, Yq.i)(this, UE), (0, Yq.i)(this, FE, !1)), this._isEnabled = ((0, Yq.i)(this, sE), (0, Yq.i)(this, XE, !0)), this.outputTextureWidth = ((0, Yq.i)(this, wE), (0, Yq.i)(this, KE, 0)), this.outputTextureHeight = ((0, Yq.i)(this, CE), (0, Yq.i)(this, IE, 0)), this.onUpdateParameters = ((0, Yq.i)(this, eE), new Oq.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(qq) {
            this._colorCurvesEnabled !== qq && (this._colorCurvesEnabled = qq, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(qq) {
            this._colorGradingTexture !== qq && (this._colorGradingTexture = qq, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(qq) {
            this._colorGradingEnabled !== qq && (this._colorGradingEnabled = qq, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(qq) {
            this._colorGradingWithGreenDepth !== qq && (this._colorGradingWithGreenDepth = qq, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(qq) {
            this._colorGradingBGR !== qq && (this._colorGradingBGR = qq, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(qq) {
            this._exposure !== qq && (this._exposure = qq, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(qq) {
            this._toneMappingEnabled !== qq && (this._toneMappingEnabled = qq, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(qq) {
            this._toneMappingType !== qq && (this._toneMappingType = qq, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(qq) {
            this._contrast !== qq && (this._contrast = qq, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(qq) {
            this._whiteBalanceEnabled !== qq && (this._whiteBalanceEnabled = qq, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(qq) {
            qq = Number.isNaN(qq) ? uq : Math.max(qq, uq), this._temperature !== qq && (this._temperature = qq, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(qq) {
            qq = (0, xq.Clamp)(qq, -150, Bq), this._tint !== qq && (this._tint = qq, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(qq, Eq) {
              const gq = dq(Wq(qq, Eq), Pq),
                Yq = Hq.multiply(gq).multiply(oq);
              return Aq.e.GetAsMatrix3x3(Yq)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(qq) {
            this.vignetteCenterY = qq
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(qq) {
            this.vignetteCenterX = qq
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(qq) {
            this._vignetteBlendMode !== qq && (this._vignetteBlendMode = qq, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(qq) {
            this._vignetteEnabled !== qq && (this._vignetteEnabled = qq, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(qq) {
            this._ditheringEnabled !== qq && (this._ditheringEnabled = qq, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(qq) {
            this._ditheringIntensity !== qq && (this._ditheringIntensity = qq, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(qq) {
            this._skipFinalColorClamp !== qq && (this._skipFinalColorClamp = qq, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(qq) {
            this._applyByPostProcess !== qq && (this._applyByPostProcess = qq, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(qq) {
            this._isEnabled !== qq && (this._isEnabled = qq, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Eq) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Eq.WHITEBALANCE = !1, Eq.VIGNETTE = !1, Eq.TONEMAPPING = 0, Eq.CONTRAST = !1, Eq.EXPOSURE = !1, Eq.COLORCURVES = !1, Eq.COLORGRADING = !1, Eq.COLORGRADING3D = !1, Eq.DITHER = !1, Eq.IMAGEPROCESSING = !1, Eq.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Eq.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Eq.WHITEBALANCE = this._whiteBalanceEnabled, Eq.VIGNETTE = this.vignetteEnabled, Eq.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === qq._VIGNETTEMODE_MULTIPLY, Eq.VIGNETTEBLENDMODEOPAQUE = !Eq.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case qq.TONEMAPPING_KHR_PBR_NEUTRAL:
                Eq.TONEMAPPING = 3;
                break;
              case qq.TONEMAPPING_ACES:
                Eq.TONEMAPPING = 2;
                break;
              default:
                Eq.TONEMAPPING = 1
            } else Eq.TONEMAPPING = 0;
            Eq.CONTRAST = 1 !== this.contrast, Eq.EXPOSURE = 1 !== this.exposure, Eq.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Eq.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Eq.COLORGRADING ? Eq.COLORGRADING3D = this.colorGradingTexture.is3D : Eq.COLORGRADING3D = !1, Eq.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Eq.SAMPLER3DBGRMAP = this.colorGradingBGR, Eq.DITHER = this._ditheringEnabled, Eq.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Eq.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Eq.IMAGEPROCESSING = Eq.WHITEBALANCE || Eq.VIGNETTE || !!Eq.TONEMAPPING || Eq.CONTRAST || Eq.EXPOSURE || Eq.COLORCURVES || Eq.COLORGRADING || Eq.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(qq, Eq) {
            if (this._whiteBalanceEnabled && qq.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && rq(this.colorCurves, qq), this._vignetteEnabled || this._ditheringEnabled) {
              const gq = 1 / (this.outputTextureWidth || qq.Ba().getRenderWidth()),
                Yq = 1 / (this.outputTextureHeight || qq.Ba().getRenderHeight());
              if (qq.setFloat2("vInverseScreenSize", gq, Yq), this._ditheringEnabled && qq.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const lq = null != Eq ? Eq : Yq / gq;
                let Oq = Math.tan(.5 * this.vignetteCameraFov),
                  mq = Oq * lq;
                const xq = Math.sqrt(mq * Oq);
                mq = (0, vq.o)(mq, xq, this.vignetteStretch), Oq = (0, vq.o)(Oq, xq, this.vignetteStretch), qq.setFloat4("vignetteSettings1", mq, Oq, -mq * this.vignetteCenterX, -Oq * this.vignetteCenterY);
                const Aq = -2 * this.vignetteWeight;
                qq.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Aq)
              }
            }
            if (qq.setFloat("exposureLinear", this.exposure), qq.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              qq.setTexture("txColorTransform", this.colorGradingTexture);
              const Eq = this.colorGradingTexture.getSize().height;
              qq.setFloat4("colorTransformSettings", (Eq - 1) / Eq, .5 / Eq, Eq, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Qq.d.Clone((() => new qq), this)
          }
          serialize() {
            return Qq.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eq = [(0, lq.m)()], gq = [(0, lq.M)()], cq = [(0, lq.E)("colorGradingTexture")], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], jq = [(0, lq.M)()], yq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], Zq = [(0, lq.M)()], fq = [(0, lq.M)()], Mq = [(0, lq.M)()], Tq = [(0, lq.M)()], zq = [(0, lq.M)()], Sq = [(0, lq.M)()], pq = [(0, lq.q)()], Gq = [(0, lq.M)()], Lq = [(0, lq.M)()], Jq = [(0, lq.M)()], kq = [(0, lq.M)()], Rq = [(0, lq.M)()], Uq = [(0, lq.M)()], Fq = [(0, lq.M)()], sq = [(0, lq.M)()], Xq = [(0, lq.M)()], wq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: qq => "colorCurves" in qq,
              get: qq => qq.colorCurves,
              set: (qq, Eq) => {
                qq.colorCurves = Eq
              }
            },
            metadata: Oq
          }, Kq, Cq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_colorCurvesEnabled" in qq,
              get: qq => qq._colorCurvesEnabled,
              set: (qq, Eq) => {
                qq._colorCurvesEnabled = Eq
              }
            },
            metadata: Oq
          }, Iq, eq), (0, Yq.f)(null, null, cq, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_colorGradingTexture" in qq,
              get: qq => qq._colorGradingTexture,
              set: (qq, Eq) => {
                qq._colorGradingTexture = Eq
              }
            },
            metadata: Oq
          }, Dq, qE), (0, Yq.f)(null, null, Nq, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_colorGradingEnabled" in qq,
              get: qq => qq._colorGradingEnabled,
              set: (qq, Eq) => {
                qq._colorGradingEnabled = Eq
              }
            },
            metadata: Oq
          }, EE, gE), (0, Yq.f)(null, null, aq, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: qq => "_colorGradingWithGreenDepth" in qq,
              get: qq => qq._colorGradingWithGreenDepth,
              set: (qq, Eq) => {
                qq._colorGradingWithGreenDepth = Eq
              }
            },
            metadata: Oq
          }, YE, lE), (0, Yq.f)(null, null, Vq, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: qq => "_colorGradingBGR" in qq,
              get: qq => qq._colorGradingBGR,
              set: (qq, Eq) => {
                qq._colorGradingBGR = Eq
              }
            },
            metadata: Oq
          }, OE, mE), (0, Yq.f)(null, null, jq, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: qq => "_exposure" in qq,
              get: qq => qq._exposure,
              set: (qq, Eq) => {
                qq._exposure = Eq
              }
            },
            metadata: Oq
          }, xE, AE), (0, Yq.f)(null, null, yq, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_toneMappingEnabled" in qq,
              get: qq => qq._toneMappingEnabled,
              set: (qq, Eq) => {
                qq._toneMappingEnabled = Eq
              }
            },
            metadata: Oq
          }, cE, uE), (0, Yq.f)(null, null, nq, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: qq => "_toneMappingType" in qq,
              get: qq => qq._toneMappingType,
              set: (qq, Eq) => {
                qq._toneMappingType = Eq
              }
            },
            metadata: Oq
          }, BE, WE), (0, Yq.f)(null, null, bq, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: qq => "_contrast" in qq,
              get: qq => qq._contrast,
              set: (qq, Eq) => {
                qq._contrast = Eq
              }
            },
            metadata: Oq
          }, NE, aE), (0, Yq.f)(null, null, iq, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_whiteBalanceEnabled" in qq,
              get: qq => qq._whiteBalanceEnabled,
              set: (qq, Eq) => {
                qq._whiteBalanceEnabled = Eq
              }
            },
            metadata: Oq
          }, VE, dE), (0, Yq.f)(null, null, Zq, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: qq => "_temperature" in qq,
              get: qq => qq._temperature,
              set: (qq, Eq) => {
                qq._temperature = Eq
              }
            },
            metadata: Oq
          }, jE, HE), (0, Yq.f)(null, null, fq, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: qq => "_tint" in qq,
              get: qq => qq._tint,
              set: (qq, Eq) => {
                qq._tint = Eq
              }
            },
            metadata: Oq
          }, oE, PE), (0, Yq.f)(null, null, Mq, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: qq => "vignetteStretch" in qq,
              get: qq => qq.vignetteStretch,
              set: (qq, Eq) => {
                qq.vignetteStretch = Eq
              }
            },
            metadata: Oq
          }, QE, yE), (0, Yq.f)(null, null, Tq, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: qq => "vignetteCenterX" in qq,
              get: qq => qq.vignetteCenterX,
              set: (qq, Eq) => {
                qq.vignetteCenterX = Eq
              }
            },
            metadata: Oq
          }, tE, rE), (0, Yq.f)(null, null, zq, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: qq => "vignetteCenterY" in qq,
              get: qq => qq.vignetteCenterY,
              set: (qq, Eq) => {
                qq.vignetteCenterY = Eq
              }
            },
            metadata: Oq
          }, vE, hE), (0, Yq.f)(null, null, Sq, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "vignetteWeight" in qq,
              get: qq => qq.vignetteWeight,
              set: (qq, Eq) => {
                qq.vignetteWeight = Eq
              }
            },
            metadata: Oq
          }, nE, bE), (0, Yq.f)(null, null, pq, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "vignetteColor" in qq,
              get: qq => qq.vignetteColor,
              set: (qq, Eq) => {
                qq.vignetteColor = Eq
              }
            },
            metadata: Oq
          }, iE, ZE), (0, Yq.f)(null, null, Gq, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: qq => "vignetteCameraFov" in qq,
              get: qq => qq.vignetteCameraFov,
              set: (qq, Eq) => {
                qq.vignetteCameraFov = Eq
              }
            },
            metadata: Oq
          }, fE, ME), (0, Yq.f)(null, null, Lq, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "_vignetteBlendMode" in qq,
              get: qq => qq._vignetteBlendMode,
              set: (qq, Eq) => {
                qq._vignetteBlendMode = Eq
              }
            },
            metadata: Oq
          }, TE, zE), (0, Yq.f)(null, null, Jq, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_vignetteEnabled" in qq,
              get: qq => qq._vignetteEnabled,
              set: (qq, Eq) => {
                qq._vignetteEnabled = Eq
              }
            },
            metadata: Oq
          }, SE, pE), (0, Yq.f)(null, null, kq, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_ditheringEnabled" in qq,
              get: qq => qq._ditheringEnabled,
              set: (qq, Eq) => {
                qq._ditheringEnabled = Eq
              }
            },
            metadata: Oq
          }, GE, LE), (0, Yq.f)(null, null, Rq, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: qq => "_ditheringIntensity" in qq,
              get: qq => qq._ditheringIntensity,
              set: (qq, Eq) => {
                qq._ditheringIntensity = Eq
              }
            },
            metadata: Oq
          }, JE, kE), (0, Yq.f)(null, null, Uq, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: qq => "_skipFinalColorClamp" in qq,
              get: qq => qq._skipFinalColorClamp,
              set: (qq, Eq) => {
                qq._skipFinalColorClamp = Eq
              }
            },
            metadata: Oq
          }, RE, UE), (0, Yq.f)(null, null, Fq, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: qq => "_applyByPostProcess" in qq,
              get: qq => qq._applyByPostProcess,
              set: (qq, Eq) => {
                qq._applyByPostProcess = Eq
              }
            },
            metadata: Oq
          }, FE, sE), (0, Yq.f)(null, null, sq, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: qq => "_isEnabled" in qq,
              get: qq => qq._isEnabled,
              set: (qq, Eq) => {
                qq._isEnabled = Eq
              }
            },
            metadata: Oq
          }, XE, wE), (0, Yq.f)(null, null, Xq, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: qq => "outputTextureWidth" in qq,
              get: qq => qq.outputTextureWidth,
              set: (qq, Eq) => {
                qq.outputTextureWidth = Eq
              }
            },
            metadata: Oq
          }, KE, CE), (0, Yq.f)(null, null, wq, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "outputTextureHeight" in qq,
              get: qq => qq.outputTextureHeight,
              set: (qq, Eq) => {
                qq.outputTextureHeight = Eq
              }
            },
            metadata: Oq
          }, IE, eE), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq.TONEMAPPING_STANDARD = 0, qq.TONEMAPPING_ACES = 1, qq.TONEMAPPING_KHR_PBR_NEUTRAL = 2, qq.PrepareUniforms = hq.e, qq.PrepareSamplers = hq.b, qq._VIGNETTEMODE_MULTIPLY = 0, qq._VIGNETTEMODE_OPAQUE = 1, qq
      })(),
      iq = !1;

    function Zq(qq) {
      const Eq = Qq.d.Parse((() => new bq), qq, null, null);
      return void 0 !== qq.vignetteCentreX && (Eq.vignetteCenterX = qq.vignetteCentreX), void 0 !== qq.vignetteCentreY && (Eq.vignetteCenterY = qq.vignetteCentreY), Eq
    }

    function fq() {
      iq || (iq = !0, bq.Parse = Zq, Qq.d._ImageProcessingConfigurationParser = Zq, (0, nq.g)("BABYLON.ImageProcessingConfiguration", bq))
    }
  },
  39870: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653),
      lq = gq(39845);
    class Oq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = qq, this._noUBO = !qq.supportsUniformBuffers || lq, this._dynamic = gq, this._name = Yq ?? "no-name", this._data = Eq || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Oq && this._engine._features.trackUbosInFrame || !0 === Oq) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Eqq = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Eqq = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(qq) {
        let Eq;
        if (Eq = qq <= 2 ? qq : 4, this._uniformLocationPointer % Eq !== 0) {
          const qq = this._uniformLocationPointer;
          this._uniformLocationPointer += Eq - this._uniformLocationPointer % Eq;
          const gq = this._uniformLocationPointer - qq;
          for (let Eq = 0; Eq < gq; Eq++) this._data.push(0)
        }
      }
      addUniform(qq, Eq) {
        let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Yq > 0 && "number" === typeof Eq && (this._uniformArraySizes[qq] = {
            strideSize: Eq,
            arraySize: Yq
          }), void 0 === this._uniformLocations[qq] && (this._uniformNames.push(qq), !this._noUBO)) {
          if (Yq > 0) {
            if (Eq instanceof Array) throw "addUniform should not be use with Array in UBO: " + qq;
            if (this._fillAlignment(4), 16 == Eq) Eq *= Yq;
            else {
              Eq = Eq * Yq + (4 - Eq) * Yq
            }
            gq = [];
            for (let qq = 0; qq < Eq; qq++) gq.push(0)
          } else {
            if (Eq instanceof Array) gq = Eq, Eq = gq.length;
            else {
              gq = [];
              for (let qq = 0; qq < Eq; qq++) gq.push(0)
            }
            this._fillAlignment(Eq)
          }
          this._uniformSizes[qq] = Eq, this._uniformLocations[qq] = this._uniformLocationPointer, this._uniformLocationPointer += Eq;
          for (let qq = 0; qq < Eq; qq++) this._data.push(gq[qq]);
          this._needSync = !0
        }
      }
      addMatrix(qq, Eq) {
        this.addUniform(qq, Array.prototype.slice.call(Eq.bYq()))
      }
      addFloat2(qq, Eq, gq) {
        const Yq = [Eq, gq];
        this.addUniform(qq, Yq)
      }
      addFloat3(qq, Eq, gq, Yq) {
        const lq = [Eq, gq, Yq];
        this.addUniform(qq, lq)
      }
      addColor3(qq, Eq) {
        const gq = [Eq.r, Eq.g, Eq.b];
        this.addUniform(qq, gq)
      }
      addColor4(qq, Eq, gq) {
        const Yq = [Eq.r, Eq.g, Eq.b, gq];
        this.addUniform(qq, Yq)
      }
      addVector3(qq, Eq) {
        const gq = [Eq.x, Eq.y, Eq.z];
        this.addUniform(qq, gq)
      }
      addMatrix3x3(qq) {
        this.addUniform(qq, 12)
      }
      addMatrix2x2(qq) {
        this.addUniform(qq, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const qq = [];
        let Eq = 0;
        for (const gq in this._uniformLocations)
          if (qq.push(gq), 10 === ++Eq) break;
        return qq.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const qq of this._ownerListsBySlot.values()) this._removeOwnerBacklink(qq);
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
      set name(qq) {
        this._name = qq
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(qq, Eq) {
        for (let gq = 0; gq < qq.length; ++gq)
          if (qq[gq] !== Eq[gq]) return !1;
        return !0
      }
      _copyBuffer(qq, Eq) {
        for (let gq = 0; gq < qq.length; ++gq) Eq[gq] = qq[gq]
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
      _updateOwnerKeyed(qq) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Eq = this._slotByOwner.get(qq);
        if (void 0 === Eq && (Eq = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(qq, Eq), this._ownerCount++, qq._uniformBuffersWithOwnedSlot || (qq._uniformBuffersWithOwnedSlot = []), qq._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Eq, qq._uniformBuffersWithOwnedSlot)), this._slotGeneration[Eq] === this._dataGeneration) return this._bufferIndex = Eq, this._buffer = this._buffers[Eq][0], this.bindUniformBuffer(), this._slotFrameId[Eq] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const gq = this._buffers[Eq][1];
        this._slotFrameId[Eq] === this._currentFrameId && gq && !this._buffersEqual(this._bufferData, gq) && (Eq = this._takeFreeSlot(!1)), this._bufferIndex = Eq, this._buffer = this._buffers[Eq][0], this.bindUniformBuffer();
        const Yq = this._buffers[Eq][1];
        Yq && this._buffersEqual(this._bufferData, Yq) || (Yq && this._copyBuffer(this._bufferData, Yq), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Eq] = this._currentFrameId, this._slotGeneration[Eq] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(qq) {
        for (let gq = 0; gq < this._freeSlots.length; ++gq) {
          const Eq = this._freeSlots[gq];
          if (this._slotFrameId[Eq] !== this._currentFrameId) return qq && (this._freeSlots[gq] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Eq
        }
        this._rebuild();
        const Eq = this._buffers.length - 1;
        return qq || this._freeSlots.push(Eq), Eq
      }
      _releaseOwnerSlot(qq) {
        const Eq = this._slotByOwner?.get(qq);
        if (void 0 === Eq) return;
        this._slotByOwner.delete(qq);
        const gq = this._ownerListsBySlot.get(Eq);
        gq && (this._removeOwnerBacklink(gq), this._ownerListsBySlot.delete(Eq)), this._ownerCount--, this._freeSlots.push(Eq)
      }
      _removeOwnerBacklink(qq) {
        const Eq = qq.indexOf(this); - 1 !== Eq && (qq[Eq] = qq[qq.length - 1], qq.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(qq, Eq, gq) {
        this._checkNewFrame();
        let lq = this._uniformLocations[qq];
        if (void 0 === lq) {
          if (this._buffer) return void Yq.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + qq);
          this.addUniform(qq, gq), lq = this._uniformLocations[qq]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let qq = 0; qq < gq; qq++) this._bufferData[lq + qq] = Eq[qq];
          this._dataGeneration++
        } else {
          let qq = !1;
          for (let Yq = 0; Yq < gq; Yq++)(16 === gq && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[lq + Yq] !== Math.fround(Eq[Yq])) && (qq = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[lq + Yq] = Eq[Yq]);
          this._needSync = this._needSync || qq, qq && this._dataGeneration++
        }
      }
      updateUniformArray(qq, Eq, gq) {
        this._checkNewFrame();
        const Oq = this._uniformLocations[qq];
        if (void 0 === Oq) return void Yq.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const mq = this._uniformArraySizes[qq];
        if (this._dynamic) {
          for (let qq = 0; qq < gq; qq++) this._bufferData[Oq + qq] = Eq[qq];
          this._dataGeneration++
        } else {
          let qq = !1,
            Yq = 0,
            xq = 0;
          for (let Aq = 0; Aq < gq; Aq++)
            if (this._bufferData[Oq + 4 * xq + Yq] !== lq.f.FloatRound(Eq[Aq]) && (qq = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Oq + 4 * xq + Yq] = Eq[Aq]), Yq++, Yq === mq.strideSize) {
              for (; Yq < 4; Yq++) this._bufferData[Oq + 4 * xq + Yq] = 0;
              Yq = 0, xq++
            } this._needSync = this._needSync || qq, qq && this._dataGeneration++
        }
      }
      _cacheMatrix(qq, Eq) {
        this._checkNewFrame();
        const gq = this._valueCache[qq],
          Yq = Eq.updateFlag;
        return (void 0 === gq || gq !== Yq) && (this._valueCache[qq] = Yq, !0)
      }
      _updateMatrix3x3ForUniform(qq, Eq) {
        for (let gq = 0; gq < 3; gq++) Oq._TempBuffer[4 * gq] = Eq[3 * gq], Oq._TempBuffer[4 * gq + 1] = Eq[3 * gq + 1], Oq._TempBuffer[4 * gq + 2] = Eq[3 * gq + 2], Oq._TempBuffer[4 * gq + 3] = 0;
        this.updateUniform(qq, Oq._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(qq, Eq) {
        this._currentEffect.setMatrix3x3(qq, Eq)
      }
      _updateMatrix2x2ForEffect(qq, Eq) {
        this._currentEffect.setMatrix2x2(qq, Eq)
      }
      _updateMatrix2x2ForUniform(qq, Eq) {
        for (let gq = 0; gq < 2; gq++) Oq._TempBuffer[4 * gq] = Eq[2 * gq], Oq._TempBuffer[4 * gq + 1] = Eq[2 * gq + 1], Oq._TempBuffer[4 * gq + 2] = 0, Oq._TempBuffer[4 * gq + 3] = 0;
        this.updateUniform(qq, Oq._TempBuffer, 8)
      }
      _updateFloatForEffect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(qq + gq, Eq)
      }
      _updateFloatForUniform(qq, Eq) {
        Oq._TempBuffer[0] = Eq, this.updateUniform(qq, Oq._TempBuffer, 1)
      }
      _updateFloat2ForEffect(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(qq + Yq, Eq, gq)
      }
      _updateFloat2ForUniform(qq, Eq, gq) {
        Oq._TempBuffer[0] = Eq, Oq._TempBuffer[1] = gq, this.updateUniform(qq, Oq._TempBuffer, 2)
      }
      _updateFloat3ForEffect(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(qq + lq, Eq, gq, Yq)
      }
      _updateFloat3ForUniform(qq, Eq, gq, Yq) {
        Oq._TempBuffer[0] = Eq, Oq._TempBuffer[1] = gq, Oq._TempBuffer[2] = Yq, this.updateUniform(qq, Oq._TempBuffer, 3)
      }
      _updateFloat4ForEffect(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(qq + Oq, Eq, gq, Yq, lq)
      }
      _updateFloat4ForUniform(qq, Eq, gq, Yq, lq) {
        Oq._TempBuffer[0] = Eq, Oq._TempBuffer[1] = gq, Oq._TempBuffer[2] = Yq, Oq._TempBuffer[3] = lq, this.updateUniform(qq, Oq._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[qq]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(qq + gq, Eq);
            break;
          case 3:
            this._currentEffect.setFloatArray3(qq + gq, Eq);
            break;
          case 4:
            this._currentEffect.setFloatArray4(qq + gq, Eq);
            break;
          default:
            this._currentEffect.setFloatArray(qq + gq, Eq)
        }
      }
      _updateFloatArrayForUniform(qq, Eq) {
        this.updateUniformArray(qq, Eq, Eq.length)
      }
      _updateArrayForEffect(qq, Eq) {
        this._currentEffect.setArray(qq, Eq)
      }
      _updateArrayForUniform(qq, Eq) {
        this.updateUniformArray(qq, Eq, Eq.length)
      }
      _updateIntArrayForEffect(qq, Eq) {
        this._currentEffect.setIntArray(qq, Eq)
      }
      _updateIntArrayForUniform(qq, Eq) {
        Oq._TempBufferInt32View.set(Eq), this.updateUniformArray(qq, Oq._TempBuffer, Eq.length)
      }
      _updateUIntArrayForEffect(qq, Eq) {
        this._currentEffect.setUIntArray(qq, Eq)
      }
      _updateUIntArrayForUniform(qq, Eq) {
        Oq._TempBufferUInt32View.set(Eq), this.updateUniformArray(qq, Oq._TempBuffer, Eq.length)
      }
      _updateMatrixForEffect(qq, Eq) {
        this._currentEffect.setMatrix(qq, Eq)
      }
      _updateMatrixForUniform(qq, Eq) {
        this._cacheMatrix(qq, Eq) && this.updateUniform(qq, Eq.bYq(), 16)
      }
      _updateMatricesForEffect(qq, Eq) {
        this._currentEffect.setMatrices(qq, Eq)
      }
      _updateMatricesForUniform(qq, Eq) {
        this.updateUniform(qq, Eq, Eq.length)
      }
      _updateVector3ForEffect(qq, Eq) {
        this._currentEffect.setVector3(qq, Eq)
      }
      _updateVector3ForUniform(qq, Eq) {
        Oq._TempBuffer[0] = Eq.x, Oq._TempBuffer[1] = Eq.y, Oq._TempBuffer[2] = Eq.z, this.updateUniform(qq, Oq._TempBuffer, 3)
      }
      _updateVector4ForEffect(qq, Eq) {
        this._currentEffect.setVector4(qq, Eq)
      }
      _updateVector4ForUniform(qq, Eq) {
        Oq._TempBuffer[0] = Eq.x, Oq._TempBuffer[1] = Eq.y, Oq._TempBuffer[2] = Eq.z, Oq._TempBuffer[3] = Eq.w, this.updateUniform(qq, Oq._TempBuffer, 4)
      }
      _updateColor3ForEffect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(qq + gq, Eq)
      }
      _updateColor3ForUniform(qq, Eq) {
        Oq._TempBuffer[0] = Eq.r, Oq._TempBuffer[1] = Eq.g, Oq._TempBuffer[2] = Eq.b, this.updateUniform(qq, Oq._TempBuffer, 3)
      }
      _updateColor4ForEffect(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(qq + Yq, Eq, gq)
      }
      _updateDirectColor4ForEffect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(qq + gq, Eq)
      }
      _updateColor4ForUniform(qq, Eq, gq) {
        Oq._TempBuffer[0] = Eq.r, Oq._TempBuffer[1] = Eq.g, Oq._TempBuffer[2] = Eq.b, Oq._TempBuffer[3] = gq, this.updateUniform(qq, Oq._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(qq, Eq) {
        Oq._TempBuffer[0] = Eq.r, Oq._TempBuffer[1] = Eq.g, Oq._TempBuffer[2] = Eq.b, Oq._TempBuffer[3] = Eq.a, this.updateUniform(qq, Oq._TempBuffer, 4)
      }
      _updateIntForEffect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(qq + gq, Eq)
      }
      _updateIntForUniform(qq, Eq) {
        Oq._TempBufferInt32View[0] = Eq, this.updateUniform(qq, Oq._TempBuffer, 1)
      }
      _updateInt2ForEffect(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(qq + Yq, Eq, gq)
      }
      _updateInt2ForUniform(qq, Eq, gq) {
        Oq._TempBufferInt32View[0] = Eq, Oq._TempBufferInt32View[1] = gq, this.updateUniform(qq, Oq._TempBuffer, 2)
      }
      _updateInt3ForEffect(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(qq + lq, Eq, gq, Yq)
      }
      _updateInt3ForUniform(qq, Eq, gq, Yq) {
        Oq._TempBufferInt32View[0] = Eq, Oq._TempBufferInt32View[1] = gq, Oq._TempBufferInt32View[2] = Yq, this.updateUniform(qq, Oq._TempBuffer, 3)
      }
      _updateInt4ForEffect(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(qq + Oq, Eq, gq, Yq, lq)
      }
      _updateInt4ForUniform(qq, Eq, gq, Yq, lq) {
        Oq._TempBufferInt32View[0] = Eq, Oq._TempBufferInt32View[1] = gq, Oq._TempBufferInt32View[2] = Yq, Oq._TempBufferInt32View[3] = lq, this.updateUniform(qq, Oq._TempBuffer, 4)
      }
      _updateUIntForEffect(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(qq + gq, Eq)
      }
      _updateUIntForUniform(qq, Eq) {
        Oq._TempBufferUInt32View[0] = Eq, this.updateUniform(qq, Oq._TempBuffer, 1)
      }
      _updateUInt2ForEffect(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(qq + Yq, Eq, gq)
      }
      _updateUInt2ForUniform(qq, Eq, gq) {
        Oq._TempBufferUInt32View[0] = Eq, Oq._TempBufferUInt32View[1] = gq, this.updateUniform(qq, Oq._TempBuffer, 2)
      }
      _updateUInt3ForEffect(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(qq + lq, Eq, gq, Yq)
      }
      _updateUInt3ForUniform(qq, Eq, gq, Yq) {
        Oq._TempBufferUInt32View[0] = Eq, Oq._TempBufferUInt32View[1] = gq, Oq._TempBufferUInt32View[2] = Yq, this.updateUniform(qq, Oq._TempBuffer, 3)
      }
      _updateUInt4ForEffect(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(qq + Oq, Eq, gq, Yq, lq)
      }
      _updateUInt4ForUniform(qq, Eq, gq, Yq, lq) {
        Oq._TempBufferUInt32View[0] = Eq, Oq._TempBufferUInt32View[1] = gq, Oq._TempBufferUInt32View[2] = Yq, Oq._TempBufferUInt32View[3] = lq, this.updateUniform(qq, Oq._TempBuffer, 4)
      }
      setTexture(qq, Eq) {
        this._currentEffect.setTexture(qq, Eq)
      }
      setTextureArray(qq, Eq) {
        this._currentEffect.setTextureArray(qq, Eq)
      }
      bindTexture(qq, Eq) {
        this._currentEffect._bindTexture(qq, Eq)
      }
      updateUniformDirectly(qq, Eq) {
        this.updateUniform(qq, Eq, Eq.length), this.update()
      }
      bindToEffect(qq, Eq) {
        this._currentEffect = qq, this._currentEffectName = Eq
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(qq) {
        if (!this._buffers) return this._buffer === qq;
        for (let Eq = 0; Eq < this._buffers.length; ++Eq) {
          if (this._buffers[Eq][0] === qq) return this._bufferIndex = Eq, this._buffer = qq, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Eq][1] && (this._bufferData.set(this._buffers[Eq][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(qq) {
        return void 0 !== this._uniformLocations[qq]
      }
      dispose() {
        if (this._noUBO) return;
        const qq = this._engine._uniformBuffers,
          Eq = qq.indexOf(this);
        if (-1 !== Eq && (qq[Eq] = qq[qq.length - 1], qq.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let qq = 0; qq < this._buffers.length; ++qq) {
            const Eq = this._buffers[qq][0];
            this._engine._releaseBuffer(Eq)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Oq._MAX_UNIFORM_SIZE = 256, Oq._TempBuffer = new Float32Array(Oq._MAX_UNIFORM_SIZE), Oq._TempBufferInt32View = new Int32Array(Oq._TempBuffer.buffer), Oq._TempBufferUInt32View = new Uint32Array(Oq._TempBuffer.buffer)
  },
  39683: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(39689);
    class lq extends Yq.b {
      constructor(qq) {
        super(), this._buffer = qq
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39768: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq,
      h: () => cq
    });
    const Yq = "__bjs_serializable__",
      lq = new WeakMap;

    function Oq(qq, Eq) {
      return Object.prototype.hasOwnProperty.call(qq, Eq)
    }
    const mq = function() {
      let qq = Symbol.metadata;
      return qq || (qq = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: qq
      })), qq
    }();

    function xq(qq) {
      return "function" === typeof qq ? qq : qq?.constructor
    }

    function Aq(qq) {
      if (!qq) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(mq)}) polyfill must run before decorated classes are evaluated.`);
      return Oq(qq, Yq) || (qq[Yq] = {}), qq[Yq]
    }

    function cq(qq) {
      const Eq = xq(qq),
        gq = Eq ? Eq[mq] : void 0;
      if (!gq) return {};
      const Aq = lq.get(gq);
      if (Aq) return Aq;
      const cq = {},
        uq = [];
      let Bq = gq;
      for (; Bq;) uq.push(Bq), Bq = Object.getPrototypeOf(Bq);
      for (const lq of uq)
        if (Oq(lq, Yq)) {
          const qq = lq[Yq];
          for (const Eq in qq) cq[Eq] = qq[Eq]
        } return lq.set(gq, cq), cq
    }
  },
  39759: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => Wq,
      C: () => Vq,
      E: () => xq,
      F: () => uq,
      I: () => Bq,
      M: () => mq,
      d: () => oq,
      f: () => Oq,
      j: () => Hq,
      m: () => Nq,
      o: () => Aq,
      q: () => aq,
      u: () => cq,
      y: () => dq
    });
    var Yq = gq(39768);

    function lq(qq, Eq) {
      return (gq, lq) => {
        if (!lq.metadata) return;
        const Oq = String(lq.name),
          mq = (0, Yq.e)(lq.metadata);
        mq[Oq] || (mq[Oq] = {
          type: qq,
          sourceName: Eq
        })
      }
    }

    function Oq(qq) {
      return function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (gq, Yq) => {
          const lq = Eq || "_" + String(Yq.name);
          return {
            init(qq) {
              return void 0 === qq && lq in this || (this[lq] = qq), qq
            },
            get() {
              return this[lq]
            },
            set(Eq) {
              "function" === typeof this[lq]?.equals && this[lq].equals(Eq) || this[lq] !== Eq && (this[lq] = Eq, this[qq]())
            }
          }
        }
      }(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function mq(qq) {
      return lq(0, qq)
    }

    function xq(qq) {
      return lq(1, qq)
    }

    function Aq(qq) {
      return lq(2, qq)
    }

    function cq(qq) {
      return lq(3, qq)
    }

    function uq(qq) {
      return lq(4, qq)
    }

    function Bq(qq) {
      return lq(5, qq)
    }

    function Wq(qq) {
      return lq(6, qq)
    }

    function Nq(qq) {
      return lq(7, qq)
    }

    function aq(qq) {
      return lq(8, qq)
    }

    function Vq(qq) {
      return lq(10, qq)
    }

    function dq(qq) {
      return lq(12, qq)
    }

    function jq(qq, Eq, gq) {
      const Yq = String(Eq.name);
      let lq = null;
      const Oq = function() {
        if (null === lq) {
          lq = qq, "undefined" !== typeof _native && _native[Yq] && (lq = gq(_native[Yq], qq));
          const mq = this && (Eq.static ? this : Object.getPrototypeOf(this));
          mq?.[Yq] === Oq && (mq[Yq] = lq)
        }
        for (var mq = arguments.length, xq = new Array(mq), Aq = 0; Aq < mq; Aq++) xq[Aq] = arguments[Aq];
        return lq.apply(this, xq)
      };
      return Oq
    }

    function Hq(qq, Eq) {
      return jq(qq, Eq, (qq => qq))
    }

    function oq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (gq, Yq) => {
        const lq = Eq || "_" + String(Yq.name);
        return {
          get() {
            return this[lq]?.value
          },
          set(Eq) {
            "function" === typeof this[lq]?.value?.equals && this[lq].value.equals(Eq) || this[lq].value !== Eq && (this[lq].value = Eq, this[qq]())
          }
        }
      }
    }
    Hq.filter = function(qq) {
      return (Eq, gq) => jq(Eq, gq, ((Eq, gq) => function() {
        for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
        return qq(...lq) ? Eq(...lq) : gq.apply(this, lq)
      }))
    }
  },
  39779: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq
    });
    var Yq = gq(39636),
      lq = gq(39786),
      Oq = gq(37289),
      mq = gq(37139),
      xq = gq(39768);
    const Aq = function(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Oq = qq();
      lq.b && lq.b.HasTags(Eq) && lq.b.AddTagsTo(Oq, lq.b.GetTags(Eq, !0));
      const mq = (0, xq.h)(Oq),
        Aq = {};
      for (const lq in mq) {
        const qq = mq[lq],
          xq = Eq[lq],
          uq = qq.type;
        if (void 0 !== xq && null !== xq && ("uniqueId" !== lq || cq.AllowLoadingUniqueId)) switch (uq) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof xq.slice ? Oq[lq] = xq.slice() : Oq[lq] = xq;
            break;
          case 1:
            Yq.cloneTexturesOnlyOnce && Aq[xq.uniqueId] ? Oq[lq] = Aq[xq.uniqueId] : (Oq[lq] = gq || xq.isRenderTarget ? xq : xq.clone(), Aq[xq.uniqueId] = Oq[lq]);
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
            Oq[lq] = gq ? xq : xq.clone()
        }
      }
      return Oq
    };
    class cq {
      static AppendSerializedAnimations(qq, Eq) {
        if (qq.animations) {
          Eq.animations = [];
          for (let gq = 0; gq < qq.animations.length; gq++) {
            const Yq = qq.animations[gq];
            Eq.animations.push(Yq.serialize())
          }
        }
      }
      static Serialize(qq, Eq) {
        Eq || (Eq = {}), lq.b && (Eq.tags = lq.b.GetTags(qq));
        const gq = (0, xq.h)(qq);
        for (const Yq in gq) {
          const lq = gq[Yq],
            Oq = lq.sourceName || Yq,
            mq = lq.type,
            xq = qq[Yq];
          if (void 0 !== xq && null !== xq && ("uniqueId" !== Yq || cq.AllowLoadingUniqueId)) switch (mq) {
            case 0:
              Array.isArray(xq) ? Eq[Oq] = xq.slice() : Eq[Oq] = xq;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Eq[Oq] = xq.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Eq[Oq] = xq.bYq();
              break;
            case 6:
            case 11:
              Eq[Oq] = xq.id
          }
        }
        return Eq
      }
      static ParseProperties(qq, Eq, gq, Yq) {
        Yq || (Yq = "");
        const lq = (0, xq.h)(Eq);
        for (const xq in lq) {
          const Aq = lq[xq],
            uq = qq[Aq.sourceName || xq],
            Bq = Aq.type;
          if (void 0 !== uq && null !== uq && ("uniqueId" !== xq || cq.AllowLoadingUniqueId)) {
            const qq = Eq;
            switch (Bq) {
              case 0:
                qq[xq] = uq;
                break;
              case 1:
                gq && (qq[xq] = cq._TextureParser(uq, gq, Yq));
                break;
              case 2:
                qq[xq] = Oq.d.FromArray(uq);
                break;
              case 3:
                qq[xq] = cq._FresnelParametersParser(uq);
                break;
              case 4:
                qq[xq] = mq.p.FromArray(uq);
                break;
              case 5:
                qq[xq] = mq.q.FromArray(uq);
                break;
              case 6:
                gq && (qq[xq] = gq.getLastMeshById(uq));
                break;
              case 7:
                qq[xq] = cq._ColorCurvesParser(uq);
                break;
              case 8:
                qq[xq] = Oq.g.FromArray(uq);
                break;
              case 9:
                qq[xq] = cq._ImageProcessingConfigurationParser(uq);
                break;
              case 10:
                qq[xq] = mq.h.FromArray(uq);
                break;
              case 11:
                gq && (qq[xq] = gq.getCameraById(uq));
                break;
              case 12:
                qq[xq] = mq.e.FromArray(uq);
                break;
              case 13:
                qq[xq] = mq.r.FromArray(uq)
            }
          }
        }
      }
      static Parse(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Oq = qq();
        return lq.b && lq.b.AddTagsTo(Oq, Eq.tags), cq.ParseProperties(Eq, Oq, gq, Yq), Oq
      }
      static Clone(qq, Eq) {
        return Aq(qq, Eq, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(qq, Eq) {
        return Aq(qq, Eq, !0)
      }
    }
    cq.AllowLoadingUniqueId = !1, cq._ImageProcessingConfigurationParser = qq => {
      throw (0, Yq.m)("ImageProcessingConfiguration")
    }, cq._FresnelParametersParser = qq => {
      throw (0, Yq.m)("FresnelParameters")
    }, cq._ColorCurvesParser = qq => {
      throw (0, Yq.m)("ColorCurves")
    }, cq._TextureParser = (qq, Eq, gq) => {
      throw (0, Yq.m)("Texture")
    }
  },
  39712: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    var Yq = gq(39662);
    class lq {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = lq.Enabled, this._lastSecValueCount++
      }
      addCount(qq, Eq) {
        lq.Enabled && (this._current += qq, this._hasCurrentValue = !0, Eq && this._fetchResult())
      }
      beginMonitoring() {
        lq.Enabled && (this._startMonitoringTime = Yq.c.Now)
      }
      endMonitoring() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!lq.Enabled) return;
        qq && this.fetchNewFrame();
        const Eq = Yq.c.Now;
        this._current = Eq - this._startMonitoringTime, this._hasCurrentValue = !0, qq && this._fetchResult()
      }
      Kr() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const qq = Yq.c.Now;
        qq - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = qq, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    lq.Enabled = !0
  },
  39858: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      c: () => Yq
    });
    class Yq {
      constructor(qq) {
        this.length = 0, this.data = new Array(qq), this._id = Yq._GlobalId++
      }
      push(qq) {
        this.data[this.length++] = qq, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(qq) {
        for (let Eq = 0; Eq < this.length; Eq++) qq(this.data[Eq])
      }
      sort(qq) {
        this.data.sort(qq)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(qq) {
        if (0 !== qq.length) {
          this.length + qq.length > this.data.length && (this.data.length = 2 * (this.length + qq.length));
          for (let Eq = 0; Eq < qq.length; Eq++) this.data[this.length++] = (qq.data || qq)[Eq]
        }
      }
      indexOf(qq) {
        const Eq = this.data.indexOf(qq);
        return Eq >= this.length ? -1 : Eq
      }
      contains(qq) {
        return -1 !== this.indexOf(qq)
      }
    }
    Yq._GlobalId = 0;
    class lq extends Yq {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(qq) {
        super.push(qq), qq.__smartArrayFlags || (qq.__smartArrayFlags = {}), qq.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(qq) {
        return (!qq.__smartArrayFlags || qq.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(qq), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(qq) {
        if (0 !== qq.length) {
          this.length + qq.length > this.data.length && (this.data.length = 2 * (this.length + qq.length));
          for (let Eq = 0; Eq < qq.length; Eq++) {
            const gq = (qq.data || qq)[Eq];
            this.pushNoDuplicate(gq)
          }
        }
      }
    }
  },
  39786: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    class Yq {
      static Eval(qq, Eq) {
        return "true" === (qq = qq.match(/\([^()]*\)/g) ? qq.replace(/\([^()]*\)/g, (qq => (qq = qq.slice(1, qq.length - 1), Yq._HandleParenthesisContent(qq, Eq)))) : Yq._HandleParenthesisContent(qq, Eq)) || "false" !== qq && Yq.Eval(qq, Eq)
      }
      static _HandleParenthesisContent(qq, Eq) {
        let gq;
        Eq = Eq || (qq => "true" === qq);
        const lq = qq.split("||");
        for (const Oq in lq)
          if (Object.prototype.hasOwnProperty.call(lq, Oq)) {
            let qq = Yq._SimplifyNegation(lq[Oq].trim());
            const mq = qq.split("&&");
            if (mq.length > 1)
              for (let lq = 0; lq < mq.length; ++lq) {
                const Oq = Yq._SimplifyNegation(mq[lq].trim());
                if (gq = "true" !== Oq && "false" !== Oq ? "!" === Oq[0] ? !Eq(Oq.substring(1)) : Eq(Oq) : "true" === Oq, !gq) {
                  qq = "false";
                  break
                }
              }
            if (gq || "true" === qq) {
              gq = !0;
              break
            }
            gq = "true" !== qq && "false" !== qq ? "!" === qq[0] ? !Eq(qq.substring(1)) : Eq(qq) : "true" === qq
          } return gq ? "true" : "false"
      }
      static _SimplifyNegation(qq) {
        return "!true" === (qq = (qq = qq.replace(/^[\s!]+/, (qq => (qq = qq.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? qq = "false" : "!false" === qq && (qq = "true"), qq
      }
    }
    class lq {
      static EnableFor(qq) {
        qq._tags = qq._tags || {}, qq.hasTags = () => lq.HasTags(qq), qq.addTags = Eq => lq.AddTagsTo(qq, Eq), qq.removeTags = Eq => lq.RemoveTagsFrom(qq, Eq), qq.matchesTagsQuery = Eq => lq.MatchesQuery(qq, Eq)
      }
      static DisableFor(qq) {
        delete qq._tags, delete qq.hasTags, delete qq.addTags, delete qq.removeTags, delete qq.matchesTagsQuery
      }
      static HasTags(qq) {
        if (!qq._tags) return !1;
        const Eq = qq._tags;
        for (const gq in Eq)
          if (Object.prototype.hasOwnProperty.call(Eq, gq)) return !0;
        return !1
      }
      static GetTags(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!qq._tags) return null;
        if (Eq) {
          const Eq = [];
          for (const gq in qq._tags) Object.prototype.hasOwnProperty.call(qq._tags, gq) && !0 === qq._tags[gq] && Eq.push(gq);
          return Eq.join(" ")
        }
        return qq._tags
      }
      static AddTagsTo(qq, Eq) {
        if (!Eq) return;
        if ("string" !== typeof Eq) return;
        const gq = Eq.split(" ");
        for (const Yq of gq) lq._AddTagTo(qq, Yq)
      }
      static _AddTagTo(qq, Eq) {
        "" !== (Eq = Eq.trim()) && "true" !== Eq && "false" !== Eq && (Eq.match(/[\s]/) || Eq.match(/^([!]|([|]|[&]){2})/) || (lq.EnableFor(qq), qq._tags[Eq] = !0))
      }
      static RemoveTagsFrom(qq, Eq) {
        if (!lq.HasTags(qq)) return;
        const gq = Eq.split(" ");
        for (const Yq in gq) lq._RemoveTagFrom(qq, gq[Yq])
      }
      static _RemoveTagFrom(qq, Eq) {
        delete qq._tags[Eq]
      }
      static MatchesQuery(qq, Eq) {
        return void 0 === Eq || ("" === Eq ? lq.HasTags(qq) : Yq.Eval(Eq, (Eq => lq.HasTags(qq) && qq._tags[Eq])))
      }
    }
  },
  39886: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(39879),
      lq = gq(37156);
    class Oq {
      constructor(qq) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new lq.d, this._scene = qq
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Yq.g.PositionKind]) return;
        const qq = [];
        qq.push(1, 1), qq.push(-1, 1), qq.push(-1, -1), qq.push(1, -1), this._vertexBuffers[Yq.g.PositionKind] = new Yq.g(this._scene.Ba(), qq, Yq.g.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const qq = [];
        qq.push(0), qq.push(1), qq.push(2), qq.push(0), qq.push(2), qq.push(3), this._indexBuffer = this._scene.Ba().createIndexBuffer(qq)
      }
      _getActivePostProcesses(qq) {
        const Eq = this._activePostProcesses;
        Eq.length = 0;
        for (let gq = 0; gq < qq.length; gq++) {
          const Yq = qq[gq];
          Yq && Eq.push(Yq)
        }
        return Eq
      }
      _rebuild() {
        const qq = this._vertexBuffers[Yq.g.PositionKind];
        qq && (qq._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = this._scene.activeCamera;
        return !!gq && (Eq = Eq || this._getActivePostProcesses(gq._postProcesses), !(!Eq || 0 === Eq.length || !this._scene.postProcessesEnabled) && (Eq[0].activate(gq, qq, null !== Eq && void 0 !== Eq), !0))
      }
      directRender(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qq.length;
        const xq = this._scene.Ba();
        for (let Aq = 0; Aq < mq; Aq++) {
          Aq < qq.length - 1 ? qq[Aq + 1].activate(this._scene.activeCamera || this._scene, Eq?.texture) : (Eq ? xq.bindFramebuffer(Eq, Yq, void 0, void 0, gq, lq) : Oq || xq.restoreDefaultFramebuffer(), xq._debugInsertMarker?.(`post process ${qq[Aq].name} output`));
          const mq = qq[Aq],
            cq = mq.apply();
          cq && (mq.onBeforeRenderObservable.notifyObservers(cq), this._prepareBuffers(), xq.bindBuffers(this._vertexBuffers, this._indexBuffer, cq), xq.drawElementsType(0, 0, 6), mq.onAfterRenderObservable.notifyObservers(cq))
        }
        xq.setDepthBuffer(!0), xq.setDepthWrite(!0)
      }
      _finalizeFrame(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Oq = this._scene.activeCamera;
        if (!Oq) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Yq = Yq || this._getActivePostProcesses(Oq._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const mq = this._scene.Ba();
        for (let xq = 0, Aq = Yq.length; xq < Aq; xq++) {
          const cq = Yq[xq];
          if (xq < Aq - 1 ? cq._outputTexture = Yq[xq + 1].activate(Oq, Eq?.texture) : (Eq ? (mq.bindFramebuffer(Eq, gq, void 0, void 0, lq), cq._outputTexture = Eq) : (mq.restoreDefaultFramebuffer(), cq._outputTexture = null), mq._debugInsertMarker?.(`post process ${Yq[xq].name} output`)), qq) break;
          const uq = cq.apply();
          uq && (cq.onBeforeRenderObservable.notifyObservers(uq), this._prepareBuffers(), mq.bindBuffers(this._vertexBuffers, this._indexBuffer, uq), mq.drawElementsType(0, 0, 6), cq.onAfterRenderObservable.notifyObservers(uq))
        }
        mq.setDepthBuffer(!0), mq.setDepthWrite(!0), mq.setAlphaMode(0)
      }
      dispose() {
        const qq = this._vertexBuffers[Yq.g.PositionKind];
        qq && (qq.dispose(), this._vertexBuffers[Yq.g.PositionKind] = null), this._indexBuffer && (this._scene.Ba()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39903: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(39858),
      lq = gq(37139);
    class Oq {
      set opaqueSortCompareFn(qq) {
        this._opaqueSortCompareFn = qq || Oq.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(qq) {
        this._alphaTestSortCompareFn = qq || Oq.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(qq) {
        this._transparentSortCompareFn = qq || Oq.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = qq, this._opaqueSubMeshes = new Yq.c(256), this._transparentSubMeshes = new Yq.c(256), this._alphaTestSubMeshes = new Yq.c(256), this._depthOnlySubMeshes = new Yq.c(256), this._particleSystems = new Yq.c(256), this._spriteManagers = new Yq.c(256), this._empty = !0, this._edgesRenderers = new Yq.b(16), this.disableDepthPrePass = !1, this._scene = Eq, this.opaqueSortCompareFn = gq, this.alphaTestSortCompareFn = lq, this.transparentSortCompareFn = Oq
      }
      render(qq, Eq, gq, Yq) {
        let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          xq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Aq = arguments.length > 8 ? arguments[8] : void 0;
        if (qq) return void qq(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const cq = this._scene.Ba();
        lq && 0 !== this._depthOnlySubMeshes.length && (cq.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), cq.setColorWrite(!0)), Oq && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), mq && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const uq = cq.getStencilBuffer();
        if (cq.setStencilBuffer(!1), Eq && this._renderSprites(), gq && this._renderParticles(Yq), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), xq && (Aq || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (cq.setStencilBuffer(uq), Aq) Aq(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const qq = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            qq.length && this._renderTransparent(qq)
          } else this._renderTransparent(this._transparentSubMeshes);
          cq.setAlphaMode(0)
        }
        if (cq.setStencilBuffer(!1), Oq && this._edgesRenderers.length) {
          for (let qq = 0; qq < this._edgesRenderers.length; qq++) this._edgesRenderers.data[qq].render();
          cq.setAlphaMode(0)
        }
        cq.setStencilBuffer(uq)
      }
      _renderOpaqueSorted(qq) {
        Oq._RenderSorted(qq, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(qq) {
        Oq._RenderSorted(qq, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(qq) {
        Oq._RenderSorted(qq, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(qq, Eq, gq, Yq, mq) {
        let xq, Aq = 0;
        const cq = gq ? gq.globalPosition : Oq._ZeroVector;
        if (Yq && Eq !== Oq.PainterSortCompare)
          for (; Aq < qq.length; Aq++) xq = qq.data[Aq], xq._alphaIndex = xq.getMesh().alphaIndex, xq._distanceToCamera = lq.q.Distance(xq.yR().DYq.centerWorld, cq);
        const uq = qq.length === qq.data.length ? qq.data : qq.data.slice(0, qq.length);
        Eq && uq.sort(Eq);
        const Bq = uq[0].getMesh().ZJ();
        for (Aq = 0; Aq < uq.length; Aq++) {
          if (xq = uq[Aq], Bq._activeMeshesFrozenButKeepClipping && !xq.isInFrustum(Bq._frustumPlanes)) continue;
          let qq = !1;
          if (Yq) {
            const Eq = xq.da();
            if (Eq && Eq.needDepthPrePass && !mq) {
              qq = !0;
              const gq = Eq.ZJ().Ba();
              gq.setColorWrite(!1), gq.setAlphaMode(0), xq.render(!1), gq.setColorWrite(!0)
            }
          }
          const Eq = xq._renderingMesh;
          !qq && Eq._renderRunFollower(xq, Yq) || xq.render(Yq)
        }
      }
      static defaultTransparentSortCompare(qq, Eq) {
        return qq._alphaIndex > Eq._alphaIndex ? 1 : qq._alphaIndex < Eq._alphaIndex ? -1 : Oq.backToFrontSortCompare(qq, Eq)
      }
      static backToFrontSortCompare(qq, Eq) {
        return qq._distanceToCamera < Eq._distanceToCamera ? 1 : qq._distanceToCamera > Eq._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(qq, Eq) {
        return qq._distanceToCamera < Eq._distanceToCamera ? -1 : qq._distanceToCamera > Eq._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(qq, Eq) {
        const gq = qq.getMesh(),
          Yq = Eq.getMesh();
        return gq.material && Yq.material ? gq.material.uniqueId - Yq.material.uniqueId : gq.uniqueId - Yq.uniqueId
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
      dispatch(qq, Eq, gq) {
        void 0 === Eq && (Eq = qq.getMesh()), void 0 === gq && (gq = qq.da()), null !== gq && void 0 !== gq && (gq.needAlphaBlendingForMesh(Eq) ? this._transparentSubMeshes.push(qq) : gq.needAlphaTestingForMesh(Eq) ? (gq.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(qq), this._alphaTestSubMeshes.push(qq)) : (gq.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(qq), this._opaqueSubMeshes.push(qq)), Eq._renderingGroup = this, Eq._edgesRenderer && Eq.isEnabled() && Eq.isVisible && Eq._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Eq._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(qq) {
        this._spriteManagers.push(qq), this._empty = !1
      }
      dispatchParticles(qq) {
        this._particleSystems.push(qq), this._empty = !1
      }
      _renderParticles(qq) {
        if (0 === this._particleSystems.length) return;
        const Eq = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let gq = 0; gq < this._particleSystems.length; gq++) {
          const Yq = this._particleSystems.data[gq];
          if (0 === (Eq && Eq.layerMask & Yq.layerMask)) continue;
          const lq = Yq.emitter;
          lq.position && qq && -1 === qq.indexOf(lq) || this._scene._activeParticles.addCount(Yq.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const qq = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Eq = 0; Eq < this._spriteManagers.length; Eq++) {
          const gq = this._spriteManagers.data[Eq];
          0 !== (qq && qq.layerMask & gq.layerMask) && gq.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Oq._ZeroVector = lq.q.Zero()
  },
  39900: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(39903);
    class lq {}
    class Oq {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(qq) {
        this._disableDepthPrePass = qq;
        for (const Eq of this._renderingGroups) Eq.disableDepthPrePass = qq
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(qq) {
        qq !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = qq, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const qq of this._scene.meshes)
          if (qq.fn)
            for (const Eq of qq.fn) Eq._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const qq of this._scene.spriteManagers) qq._wasDispatched = !1;
        for (const qq of this._scene.xZ) qq._wasDispatched = !1
      }
      constructor(qq) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new lq, this._maintainStateBetweenFrames = !1, this._scene = qq;
        for (let Eq = Oq.MIN_RENDERINGGROUPS; Eq < Oq.MAX_RENDERINGGROUPS; Eq++) this._autoClearDepthStencil[Eq] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(qq) {
        const Eq = qq || 0;
        return this._prepareRenderingGroup(Eq), this._renderingGroups[Eq]
      }
      _clearDepthStencilBuffer() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Ba().clear(null, !1, qq, Eq), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(qq, Eq, gq, Yq) {
        let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Aq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cq = arguments.length > 8 ? arguments[8] : void 0,
          uq = arguments.length > 9 ? arguments[9] : void 0;
        const Bq = this._renderingGroupInfo;
        Bq.PV = this._scene, Bq.camera = this._scene.activeCamera, Bq.renderingManager = this;
        const Wq = uq ?? this._scene.spriteManagers;
        if (Wq && Yq)
          for (let Oq = 0; Oq < Wq.length; Oq++) {
            const qq = Wq[Oq];
            this.dispatchSprites(qq)
          }
        for (let Nq = Oq.MIN_RENDERINGGROUPS; Nq < Oq.MAX_RENDERINGGROUPS; Nq++) {
          this._depthStencilBufferAlreadyCleaned = Nq === Oq.MIN_RENDERINGGROUPS;
          const uq = this._renderingGroups[Nq];
          if (!uq || uq._empty) continue;
          const Wq = 1 << Nq;
          if (Bq.renderingGroupId = Nq, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Bq, Wq), Oq.AUTOCLEAR) {
            const qq = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Nq) : this._autoClearDepthStencil[Nq];
            qq && qq.autoClear && this._clearDepthStencilBuffer(qq.depth, qq.stencil)
          }
          for (let qq = 0, Eq = this._scene._beforeRenderingGroupDrawStage; qq < Eq.length; qq++) {
            Eq[qq].action(Nq)
          }
          uq.render(qq, Yq, gq, Eq, lq, mq, xq, Aq, cq);
          for (let qq = 0, Eq = this._scene._afterRenderingGroupDrawStage; qq < Eq.length; qq++) {
            Eq[qq].action(Nq)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Bq, Wq)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let qq = Oq.MIN_RENDERINGGROUPS; qq < Oq.MAX_RENDERINGGROUPS; qq++) {
            const Eq = this._renderingGroups[qq];
            Eq && Eq.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let qq = Oq.MIN_RENDERINGGROUPS; qq < Oq.MAX_RENDERINGGROUPS; qq++) {
            const Eq = this._renderingGroups[qq];
            Eq && Eq.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let qq = Oq.MIN_RENDERINGGROUPS; qq < Oq.MAX_RENDERINGGROUPS; qq++) {
          const Eq = this._renderingGroups[qq];
          Eq && Eq.dispose()
        }
      }
      _prepareRenderingGroup(qq) {
        void 0 === this._renderingGroups[qq] && (this._renderingGroups[qq] = new Yq.c(qq, this._scene, this._customOpaqueSortCompareFn[qq], this._customAlphaTestSortCompareFn[qq], this._customTransparentSortCompareFn[qq]), this._renderingGroups[qq].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(qq) {
        this.maintainStateBetweenFrames && qq._wasDispatched || (qq._wasDispatched = !0, this.getRenderingGroup(qq.renderingGroupId).dispatchSprites(qq))
      }
      dispatchParticles(qq) {
        this.maintainStateBetweenFrames && qq._wasDispatched || (qq._wasDispatched = !0, this.getRenderingGroup(qq.renderingGroupId).dispatchParticles(qq))
      }
      dispatch(qq, Eq, gq) {
        void 0 === Eq && (Eq = qq.getMesh()), this.maintainStateBetweenFrames && qq._wasDispatched || (qq._wasDispatched = !0, this.getRenderingGroup(Eq.renderingGroupId).dispatch(qq, Eq, gq))
      }
      setRenderingOrder(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[qq] = Eq, this._customAlphaTestSortCompareFn[qq] = gq, this._customTransparentSortCompareFn[qq] = Yq, this._renderingGroups[qq]) {
          const Eq = this._renderingGroups[qq];
          Eq.opaqueSortCompareFn = this._customOpaqueSortCompareFn[qq], Eq.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[qq], Eq.transparentSortCompareFn = this._customTransparentSortCompareFn[qq]
        }
      }
      setRenderingAutoClearDepthStencil(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[qq] = {
          autoClear: Eq,
          depth: gq,
          stencil: Yq
        }
      }
      getAutoClearDepthStencilSetup(qq) {
        return this._autoClearDepthStencil[qq]
      }
    }
    Oq.MAX_RENDERINGGROUPS = 4, Oq.MIN_RENDERINGGROUPS = 0, Oq.AUTOCLEAR = !0
  },
  39667: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq) {
        this._supportBlendParametersPerTarget = qq, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(qq) {
        this.setAlphaBlend(qq)
      }
      setAlphaBlend(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Eq] !== qq && (qq ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Eq] = qq, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(qq, Eq, gq, Yq) {
        this._blendConstants[0] === qq && this._blendConstants[1] === Eq && this._blendConstants[2] === gq && this._blendConstants[3] === Yq || (this._blendConstants[0] = qq, this._blendConstants[1] = Eq, this._blendConstants[2] = gq, this._blendConstants[3] = Yq, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(qq, Eq, gq, Yq) {
        const lq = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[lq + 0] === qq && this._blendFunctionParameters[lq + 1] === Eq && this._blendFunctionParameters[lq + 2] === gq && this._blendFunctionParameters[lq + 3] === Yq || (this._blendFunctionParameters[lq + 0] = qq, this._blendFunctionParameters[lq + 1] = Eq, this._blendFunctionParameters[lq + 2] = gq, this._blendFunctionParameters[lq + 3] = Yq, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(qq, Eq) {
        const gq = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[gq + 0] === qq && this._blendEquationParameters[gq + 1] === Eq || (this._blendEquationParameters[gq + 0] = qq, this._blendEquationParameters[gq + 1] = Eq, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Eq && (this._numTargets = Eq, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== gq && (this._blendDisabledTargetsMask = gq, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (qq.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Eq || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Eq > 1 && 0 !== gq && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & gq) ? qq.enable(qq.BLEND) : qq.disable(qq.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (qq.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (qq.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Yq = qq;
        if (this._isAlphaBlendDirty) {
          for (let lq = 0; lq < Eq; lq++) {
            const Eq = lq < this._numTargetEnabled ? lq : 0;
            this._alphaBlend[Eq] && 0 === (gq & 1 << lq) ? Yq.enableIndexed(qq.BLEND, lq) : Yq.disableIndexed(qq.BLEND, lq)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let qq = 0; qq < Eq; qq++) {
            const Eq = qq < this._numTargetEnabled ? 4 * qq : 0;
            Yq.blendFuncSeparateIndexed(qq, this._blendFunctionParameters[Eq + 0], this._blendFunctionParameters[Eq + 1], this._blendFunctionParameters[Eq + 2], this._blendFunctionParameters[Eq + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let qq = 0; qq < Eq; qq++) {
            const Eq = qq < this._numTargetEnabled ? 2 * qq : 0;
            Yq.blendEquationSeparateIndexed(qq, this._blendEquationParameters[Eq + 0], this._blendEquationParameters[Eq + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(qq, Eq) {
        let gq = 32774;
        switch (qq) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Eq);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Eq);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Eq);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Eq);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Eq);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Eq);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Eq);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Eq);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Eq);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Eq);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Eq);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Eq);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Eq);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Eq);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Eq);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Eq);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Eq), gq = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Eq), gq = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Eq);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Eq)
        }
        this.setAlphaEquationParameters(gq, gq, Eq)
      }
    }
  },
  39932: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {}
    Yq._IsPickingAvailable = !1
  },
  39838: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xg,
      i: () => Og
    });
    var Yq = gq(39845),
      lq = gq(39644),
      Oq = gq(39662),
      mq = gq(37156),
      xq = gq(39858);
    class Aq {
      constructor() {
        this._count = 0, this._data = {}
      }
      WG(qq) {
        this.clear(), qq.forEach(((qq, Eq) => this.add(qq, Eq)))
      }
      get(qq) {
        const Eq = this._data[qq];
        if (void 0 !== Eq) return Eq
      }
      getOrAddWithFactory(qq, Eq) {
        let gq = this.get(qq);
        return void 0 !== gq || (gq = Eq(qq), gq && this.add(qq, gq)), gq
      }
      getOrAdd(qq, Eq) {
        const gq = this.get(qq);
        return void 0 !== gq ? gq : (this.add(qq, Eq), Eq)
      }
      contains(qq) {
        return void 0 !== this._data[qq]
      }
      add(qq, Eq) {
        return void 0 === this._data[qq] && (this._data[qq] = Eq, ++this._count, !0)
      }
      set(qq, Eq) {
        return void 0 !== this._data[qq] && (this._data[qq] = Eq, !0)
      }
      getAndRemove(qq) {
        const Eq = this.get(qq);
        return void 0 !== Eq ? (delete this._data[qq], --this._count, Eq) : null
      }
      remove(qq) {
        return !!this.contains(qq) && (delete this._data[qq], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(qq) {
        for (const Eq in this._data) {
          qq(Eq, this._data[Eq])
        }
      }
      first(qq) {
        for (const Eq in this._data) {
          const gq = qq(Eq, this._data[Eq]);
          if (gq) return gq
        }
        return null
      }
    }
    var cq = gq(39786),
      uq = gq(37139),
      Bq = gq(39860),
      Wq = gq(39870),
      Nq = gq(39876);
    class aq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.source = qq, this.pointerX = Eq, this.pointerY = gq, this.meshUnderPointer = Yq, this.sourceEvent = lq, this.additionalData = Oq
      }
      static CreateNew(qq, Eq, gq) {
        const Yq = qq.ZJ();
        return new aq(qq, Yq.pointerX, Yq.pointerY, Yq.meshUnderPointer || qq, Eq, gq)
      }
      static CreateNewFromSprite(qq, Eq, gq, Yq) {
        return new aq(qq, Eq.pointerX, Eq.pointerY, Eq.meshUnderPointer, gq, Yq)
      }
      static CreateNewFromScene(qq, Eq) {
        return new aq(null, qq.pointerX, qq.pointerY, qq.meshUnderPointer, Eq)
      }
      static CreateNewFromPrimitive(qq, Eq, gq, Yq) {
        return new aq(qq, Eq.x, Eq.y, null, gq, Yq)
      }
    }
    var Vq = gq(39886),
      dq = gq(39891),
      jq = gq(39900),
      Hq = gq(39911),
      oq = gq(39626),
      Pq = gq(37153),
      Qq = gq(39636),
      yq = gq(39919);
    class tq {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const qq in tq.Triggers)
          if (Object.prototype.hasOwnProperty.call(tq.Triggers, qq)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const qq in tq.Triggers)
          if (Object.prototype.hasOwnProperty.call(tq.Triggers, qq)) {
            const Eq = parseInt(qq);
            if (Eq >= 1 && Eq <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(qq) {
        for (const Eq in tq.Triggers)
          if (Object.prototype.hasOwnProperty.call(tq.Triggers, Eq)) {
            if (parseInt(Eq) === qq) return !0
          } return !1
      }
    }
    tq.Triggers = {};
    var rq, vq, hq, nq, bq, iq, Zq, fq = gq(39921);
    ! function(qq) {
      qq[qq.Generic = 0] = "Generic", qq[qq.Keyboard = 1] = "Keyboard", qq[qq.Mouse = 2] = "Mouse", qq[qq.Touch = 3] = "Touch", qq[qq.DualShock = 4] = "DualShock", qq[qq.Xbox = 5] = "Xbox", qq[qq.Switch = 6] = "Switch", qq[qq.DualSense = 7] = "DualSense"
    }(rq || (rq = {})),
    function(qq) {
      qq[qq.Horizontal = 0] = "Horizontal", qq[qq.Vertical = 1] = "Vertical", qq[qq.LeftClick = 2] = "LeftClick", qq[qq.MiddleClick = 3] = "MiddleClick", qq[qq.RightClick = 4] = "RightClick", qq[qq.BrowserBack = 5] = "BrowserBack", qq[qq.BrowserForward = 6] = "BrowserForward", qq[qq.MouseWheelX = 7] = "MouseWheelX", qq[qq.MouseWheelY = 8] = "MouseWheelY", qq[qq.MouseWheelZ = 9] = "MouseWheelZ", qq[qq.Move = 12] = "Move"
    }(vq || (vq = {})),
    function(qq) {
      qq[qq.Horizontal = 0] = "Horizontal", qq[qq.Vertical = 1] = "Vertical", qq[qq.LeftClick = 2] = "LeftClick", qq[qq.MiddleClick = 3] = "MiddleClick", qq[qq.RightClick = 4] = "RightClick", qq[qq.BrowserBack = 5] = "BrowserBack", qq[qq.BrowserForward = 6] = "BrowserForward", qq[qq.MouseWheelX = 7] = "MouseWheelX", qq[qq.MouseWheelY = 8] = "MouseWheelY", qq[qq.MouseWheelZ = 9] = "MouseWheelZ", qq[qq.DeltaHorizontal = 10] = "DeltaHorizontal", qq[qq.DeltaVertical = 11] = "DeltaVertical"
    }(hq || (hq = {})),
    function(qq) {
      qq[qq.Cross = 0] = "Cross", qq[qq.Circle = 1] = "Circle", qq[qq.Square = 2] = "Square", qq[qq.Triangle = 3] = "Triangle", qq[qq.L1 = 4] = "L1", qq[qq.R1 = 5] = "R1", qq[qq.L2 = 6] = "L2", qq[qq.R2 = 7] = "R2", qq[qq.Share = 8] = "Share", qq[qq.Options = 9] = "Options", qq[qq.L3 = 10] = "L3", qq[qq.R3 = 11] = "R3", qq[qq.DPadUp = 12] = "DPadUp", qq[qq.DPadDown = 13] = "DPadDown", qq[qq.DPadLeft = 14] = "DPadLeft", qq[qq.DPadRight = 15] = "DPadRight", qq[qq.Home = 16] = "Home", qq[qq.TouchPad = 17] = "TouchPad", qq[qq.LStickXAxis = 18] = "LStickXAxis", qq[qq.LStickYAxis = 19] = "LStickYAxis", qq[qq.RStickXAxis = 20] = "RStickXAxis", qq[qq.RStickYAxis = 21] = "RStickYAxis"
    }(nq || (nq = {})),
    function(qq) {
      qq[qq.Cross = 0] = "Cross", qq[qq.Circle = 1] = "Circle", qq[qq.Square = 2] = "Square", qq[qq.Triangle = 3] = "Triangle", qq[qq.L1 = 4] = "L1", qq[qq.R1 = 5] = "R1", qq[qq.L2 = 6] = "L2", qq[qq.R2 = 7] = "R2", qq[qq.Create = 8] = "Create", qq[qq.Options = 9] = "Options", qq[qq.L3 = 10] = "L3", qq[qq.R3 = 11] = "R3", qq[qq.DPadUp = 12] = "DPadUp", qq[qq.DPadDown = 13] = "DPadDown", qq[qq.DPadLeft = 14] = "DPadLeft", qq[qq.DPadRight = 15] = "DPadRight", qq[qq.Home = 16] = "Home", qq[qq.TouchPad = 17] = "TouchPad", qq[qq.LStickXAxis = 18] = "LStickXAxis", qq[qq.LStickYAxis = 19] = "LStickYAxis", qq[qq.RStickXAxis = 20] = "RStickXAxis", qq[qq.RStickYAxis = 21] = "RStickYAxis"
    }(bq || (bq = {})),
    function(qq) {
      qq[qq.A = 0] = "A", qq[qq.B = 1] = "B", qq[qq.X = 2] = "X", qq[qq.Y = 3] = "Y", qq[qq.LB = 4] = "LB", qq[qq.RB = 5] = "RB", qq[qq.LT = 6] = "LT", qq[qq.RT = 7] = "RT", qq[qq.Back = 8] = "Back", qq[qq.Start = 9] = "Start", qq[qq.LS = 10] = "LS", qq[qq.RS = 11] = "RS", qq[qq.DPadUp = 12] = "DPadUp", qq[qq.DPadDown = 13] = "DPadDown", qq[qq.DPadLeft = 14] = "DPadLeft", qq[qq.DPadRight = 15] = "DPadRight", qq[qq.Home = 16] = "Home", qq[qq.LStickXAxis = 17] = "LStickXAxis", qq[qq.LStickYAxis = 18] = "LStickYAxis", qq[qq.RStickXAxis = 19] = "RStickXAxis", qq[qq.RStickYAxis = 20] = "RStickYAxis"
    }(iq || (iq = {})),
    function(qq) {
      qq[qq.B = 0] = "B", qq[qq.A = 1] = "A", qq[qq.Y = 2] = "Y", qq[qq.X = 3] = "X", qq[qq.L = 4] = "L", qq[qq.R = 5] = "R", qq[qq.ZL = 6] = "ZL", qq[qq.ZR = 7] = "ZR", qq[qq.Minus = 8] = "Minus", qq[qq.Plus = 9] = "Plus", qq[qq.LS = 10] = "LS", qq[qq.RS = 11] = "RS", qq[qq.DPadUp = 12] = "DPadUp", qq[qq.DPadDown = 13] = "DPadDown", qq[qq.DPadLeft = 14] = "DPadLeft", qq[qq.DPadRight = 15] = "DPadRight", qq[qq.Home = 16] = "Home", qq[qq.Capture = 17] = "Capture", qq[qq.LStickXAxis = 18] = "LStickXAxis", qq[qq.LStickYAxis = 19] = "LStickYAxis", qq[qq.RStickXAxis = 20] = "RStickXAxis", qq[qq.RStickYAxis = 21] = "RStickYAxis"
    }(Zq || (Zq = {}));
    var Mq = gq(39926);
    class Tq {
      static CreateDeviceEvent(qq, Eq, gq, Yq, lq, Oq, mq) {
        switch (qq) {
          case rq.Keyboard:
            return this._CreateKeyboardEvent(gq, Yq, lq, Oq);
          case rq.Mouse:
            if (gq === vq.MouseWheelX || gq === vq.MouseWheelY || gq === vq.MouseWheelZ) return this._CreateWheelEvent(qq, Eq, gq, Yq, lq, Oq);
          case rq.Touch:
            return this._CreatePointerEvent(qq, Eq, gq, Yq, lq, Oq, mq);
          default:
            throw `Unable to generate event for device ${rq[qq]}`
        }
      }
      static _CreatePointerEvent(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = this._CreateMouseEvent(qq, Eq, gq, Yq, lq, Oq);
        qq === rq.Mouse ? (xq.deviceType = rq.Mouse, xq.pointerId = 1, xq.pointerType = "mouse") : (xq.deviceType = rq.Touch, xq.pointerId = mq ?? Eq, xq.pointerType = "touch");
        let Aq = 0;
        return Aq += lq.pollInput(qq, Eq, vq.LeftClick), Aq += 2 * lq.pollInput(qq, Eq, vq.RightClick), Aq += 4 * lq.pollInput(qq, Eq, vq.MiddleClick), xq.buttons = Aq, gq === vq.Move ? xq.type = "pointermove" : gq >= vq.LeftClick && gq <= vq.RightClick && (xq.type = 1 === Yq ? "pointerdown" : "pointerup", xq.button = gq - 2), xq
      }
      static _CreateWheelEvent(qq, Eq, gq, Yq, lq, Oq) {
        const mq = this._CreateMouseEvent(qq, Eq, gq, Yq, lq, Oq);
        switch (mq.pointerId = 1, mq.type = "wheel", mq.deltaMode = Mq.b.DOM_DELTA_PIXEL, mq.deltaX = 0, mq.deltaY = 0, mq.deltaZ = 0, gq) {
          case vq.MouseWheelX:
            mq.deltaX = Yq;
            break;
          case vq.MouseWheelY:
            mq.deltaY = Yq;
            break;
          case vq.MouseWheelZ:
            mq.deltaZ = Yq
        }
        return mq
      }
      static _CreateMouseEvent(qq, Eq, gq, Yq, lq, Oq) {
        const mq = this._CreateEvent(Oq),
          xq = lq.pollInput(qq, Eq, vq.Horizontal),
          Aq = lq.pollInput(qq, Eq, vq.Vertical);
        return Oq ? (mq.movementX = 0, mq.movementY = 0, mq.offsetX = mq.movementX - Oq.getBoundingClientRect().x, mq.offsetY = mq.movementY - Oq.getBoundingClientRect().y) : (mq.movementX = lq.pollInput(qq, Eq, 10), mq.movementY = lq.pollInput(qq, Eq, 11), mq.offsetX = 0, mq.offsetY = 0), this._CheckNonCharacterKeys(mq, lq), mq.clientX = xq, mq.clientY = Aq, mq.x = xq, mq.y = Aq, mq.deviceType = qq, mq.deviceSlot = Eq, mq.inputIndex = gq, mq
      }
      static _CreateKeyboardEvent(qq, Eq, gq, Yq) {
        const lq = this._CreateEvent(Yq);
        return this._CheckNonCharacterKeys(lq, gq), lq.deviceType = rq.Keyboard, lq.deviceSlot = 0, lq.inputIndex = qq, lq.type = 1 === Eq ? "keydown" : "keyup", lq.key = String.fromCharCode(qq), lq.keyCode = qq, lq
      }
      static _CheckNonCharacterKeys(qq, Eq) {
        const gq = Eq.isDeviceAvailable(rq.Keyboard),
          Yq = gq && 1 === Eq.pollInput(rq.Keyboard, 0, 18),
          lq = gq && 1 === Eq.pollInput(rq.Keyboard, 0, 17),
          Oq = gq && (1 === Eq.pollInput(rq.Keyboard, 0, 91) || 1 === Eq.pollInput(rq.Keyboard, 0, 92) || 1 === Eq.pollInput(rq.Keyboard, 0, 93)),
          mq = gq && 1 === Eq.pollInput(rq.Keyboard, 0, 16);
        qq.altKey = Yq, qq.ctrlKey = lq, qq.metaKey = Oq, qq.shiftKey = mq
      }
      static _CreateEvent(qq) {
        const Eq = {
          preventDefault: () => {}
        };
        return Eq.target = qq, Eq
      }
    }
    class zq {
      constructor(qq, Eq, gq) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(qq, Eq, ((qq, Eq, Yq, lq) => {
          const Oq = Tq.CreateDeviceEvent(qq, Eq, Yq, lq, this);
          gq(qq, Eq, Oq)
        })) : this._createDummyNativeInput()
      }
      pollInput(qq, Eq, gq) {
        return this._nativeInput.pollInput(qq, Eq, gq)
      }
      isDeviceAvailable(qq) {
        return qq === rq.Mouse || qq === rq.Touch
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
    const Sq = Object.keys(vq).length / 2;
    class pq {
      constructor(qq, Eq, gq, lq) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Yq.f.IsSafari(), this._usingMacOs = (0, oq.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = qq => {}, this._keyboardUpEvent = qq => {}, this._keyboardBlurEvent = qq => {}, this._pointerMoveEvent = qq => {}, this._pointerDownEvent = qq => {}, this._pointerUpEvent = qq => {}, this._pointerCancelEvent = qq => {}, this._pointerCancelTouch = qq => {}, this._pointerLeaveEvent = qq => {}, this._pointerWheelEvent = qq => {}, this._pointerBlurEvent = qq => {}, this._pointerMacOsChromeOutEvent = qq => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, oq.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, oq.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = qq => {}, this._gamepadDisconnectedEvent = qq => {}, this._eventPrefix = Yq.f.GetPointerPrefix(qq), this._engine = qq, this._onDeviceConnected = Eq, this._onDeviceDisconnected = gq, this._onInputChanged = lq, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(qq, Eq, gq) {
        const lq = this._inputs[qq][Eq];
        if (!lq) throw `Unable to find device ${rq[qq]}`;
        qq >= rq.DualShock && qq <= rq.DualSense && this._updateDevice(qq, Eq, gq);
        const Oq = lq[gq];
        if (void 0 === Oq) throw `Unable to find input ${gq} for device ${rq[qq]} in slot ${Eq}`;
        return gq === vq.Move && Yq.f.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Oq
      }
      isDeviceAvailable(qq) {
        return void 0 !== this._inputs[qq]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const qq = this?._engine.getInputElement();
        if (qq && (!this._eventsAttached || this._elementToAttachTo !== qq)) {
          if (this._disableEvents(), this._inputs)
            for (const qq of this._inputs)
              if (qq)
                for (const Eq in qq) {
                  const gq = qq[+Eq];
                  if (gq)
                    for (let qq = 0; qq < gq.length; qq++) gq[qq] = 0
                }
          this._elementToAttachTo = qq, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const qq = navigator.getGamepads();
          for (const Eq of qq) Eq && this._addGamePad(Eq)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(rq.Mouse, 0, 0, 0)
      }
      _addGamePad(qq) {
        const Eq = this._getGamepadDeviceType(qq.id),
          gq = qq.index;
        this._gamepads = this._gamepads || new Array(qq.index + 1), this._registerDevice(Eq, gq, qq.buttons.length + qq.axes.length), this._gamepads[gq] = Eq
      }
      _addPointerDevice(qq, Eq, gq, Yq) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(qq, Eq, Sq);
        const lq = this._inputs[qq][Eq];
        lq[0] = gq, lq[1] = Yq
      }
      _registerDevice(qq, Eq, gq) {
        if (void 0 === Eq) throw `Unable to register device ${rq[qq]} to undefined slot.`;
        if (this._inputs[qq] || (this._inputs[qq] = {}), !this._inputs[qq][Eq]) {
          const Yq = new Array(gq);
          Yq.fill(0), this._inputs[qq][Eq] = Yq, this._onDeviceConnected(qq, Eq)
        }
      }
      _unregisterDevice(qq, Eq) {
        this._inputs[qq][Eq] && (delete this._inputs[qq][Eq], this._onDeviceDisconnected(qq, Eq))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = qq => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(rq.Keyboard, 0, 255));
          const Eq = this._inputs[rq.Keyboard][0];
          if (Eq) {
            Eq[qq.keyCode] = 1;
            const gq = qq;
            gq.inputIndex = qq.keyCode, this._usingMacOs && qq.metaKey && "Meta" !== qq.key && (this._metaKeys.includes(qq.keyCode) || this._metaKeys.push(qq.keyCode)), this._onInputChanged(rq.Keyboard, 0, gq)
          }
        }, this._keyboardUpEvent = qq => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(rq.Keyboard, 0, 255));
          const Eq = this._inputs[rq.Keyboard][0];
          if (Eq) {
            Eq[qq.keyCode] = 0;
            const gq = qq;
            if (gq.inputIndex = qq.keyCode, this._usingMacOs && "Meta" === qq.key && this._metaKeys.length > 0) {
              for (const qq of this._metaKeys) {
                const gq = Tq.CreateDeviceEvent(rq.Keyboard, 0, qq, 0, this, this._elementToAttachTo);
                Eq[qq] = 0, this._onInputChanged(rq.Keyboard, 0, gq)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(rq.Keyboard, 0, gq)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const qq = this._inputs[rq.Keyboard][0];
            for (let Eq = 0; Eq < qq.length; Eq++)
              if (0 !== qq[Eq]) {
                qq[Eq] = 0;
                const gq = Tq.CreateDeviceEvent(rq.Keyboard, 0, Eq, 0, this, this._elementToAttachTo);
                this._onInputChanged(rq.Keyboard, 0, gq)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, oq.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Yq = 0; Yq < this._maxTouchPoints; Yq++) this._activeTouchIds[Yq] = -1;
        this._pointerMoveEvent = qq => {
          const Eq = this._getPointerType(qq);
          let gq = Eq === rq.Mouse ? 0 : this._activeTouchIds.indexOf(qq.pointerId);
          if (Eq === rq.Touch && -1 === gq) {
            if (0 === qq.buttons) return;
            const lq = this._activeTouchIds.indexOf(-1);
            if (!(lq >= 0)) return void Yq.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            gq = lq, this._activeTouchIds[lq] = qq.pointerId, this._onDeviceConnected(Eq, gq)
          }
          this._inputs[Eq] || (this._inputs[Eq] = {}), this._inputs[Eq][gq] || this._addPointerDevice(Eq, gq, qq.clientX, qq.clientY);
          const lq = this._inputs[Eq][gq];
          if (lq) {
            const Yq = qq;
            Yq.inputIndex = vq.Move, lq[vq.Horizontal] = qq.clientX, lq[vq.Vertical] = qq.clientY, Eq === rq.Touch && 0 === lq[vq.LeftClick] && (lq[vq.LeftClick] = 1), void 0 === qq.pointerId && (qq.pointerId = this._mouseId), this._onInputChanged(Eq, gq, Yq), this._usingSafari || -1 === qq.button || (Yq.inputIndex = qq.button + 2, lq[qq.button + 2] = lq[qq.button + 2] ? 0 : 1, this._onInputChanged(Eq, gq, Yq))
          }
        }, this._pointerDownEvent = qq => {
          const Eq = this._getPointerType(qq);
          let gq = Eq === rq.Mouse ? 0 : qq.pointerId;
          if (Eq === rq.Touch) {
            let Eq = this._activeTouchIds.indexOf(qq.pointerId);
            if (-1 === Eq && (Eq = this._activeTouchIds.indexOf(-1)), !(Eq >= 0)) return void Yq.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            gq = Eq, this._activeTouchIds[Eq] = qq.pointerId
          }
          this._inputs[Eq] || (this._inputs[Eq] = {}), this._inputs[Eq][gq] ? Eq === rq.Touch && this._onDeviceConnected(Eq, gq) : this._addPointerDevice(Eq, gq, qq.clientX, qq.clientY);
          const lq = this._inputs[Eq][gq];
          if (lq) {
            const Yq = lq[vq.Horizontal],
              mq = lq[vq.Vertical];
            if (Eq === rq.Mouse) {
              if (void 0 === qq.pointerId && (qq.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Oq) {}
            } else if (qq.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(qq.pointerId)
            } catch (Oq) {}
            lq[vq.Horizontal] = qq.clientX, lq[vq.Vertical] = qq.clientY, lq[qq.button + 2] = 1;
            const xq = qq;
            xq.inputIndex = qq.button + 2, this._onInputChanged(Eq, gq, xq), Yq === qq.clientX && mq === qq.clientY || (xq.inputIndex = vq.Move, this._onInputChanged(Eq, gq, xq))
          }
        }, this._pointerUpEvent = qq => {
          const Eq = this._getPointerType(qq),
            gq = Eq === rq.Mouse ? 0 : this._activeTouchIds.indexOf(qq.pointerId);
          if (Eq === rq.Touch) {
            if (-1 === gq) return;
            this._activeTouchIds[gq] = -1
          }
          const Yq = this._inputs[Eq]?.[gq];
          let lq = qq.button,
            Oq = Yq && 0 !== Yq[lq + 2];
          if (!Oq && this._isUsingFirefox && this._usingMacOs && Yq && (lq = 2 === lq ? 0 : 2, Oq = 0 !== Yq[lq + 2]), Oq) {
            const Oq = Yq[vq.Horizontal],
              mq = Yq[vq.Vertical];
            Yq[vq.Horizontal] = qq.clientX, Yq[vq.Vertical] = qq.clientY, Yq[lq + 2] = 0;
            const xq = qq;
            void 0 === qq.pointerId && (qq.pointerId = this._mouseId), Oq === qq.clientX && mq === qq.clientY || (xq.inputIndex = vq.Move, this._onInputChanged(Eq, gq, xq)), xq.inputIndex = lq + 2, Eq === rq.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : qq.pointerId && this._elementToAttachTo.hasPointerCapture?.(qq.pointerId) && this._elementToAttachTo.releasePointerCapture(qq.pointerId), this._onInputChanged(Eq, gq, xq), Eq === rq.Touch && this._onDeviceDisconnected(Eq, gq)
          }
        }, this._pointerCancelTouch = qq => {
          const Eq = this._activeTouchIds.indexOf(qq);
          if (-1 === Eq) return;
          this._elementToAttachTo.hasPointerCapture?.(qq) && this._elementToAttachTo.releasePointerCapture(qq), this._inputs[rq.Touch][Eq][vq.LeftClick] = 0;
          const gq = Tq.CreateDeviceEvent(rq.Touch, Eq, vq.LeftClick, 0, this, this._elementToAttachTo, qq);
          this._onInputChanged(rq.Touch, Eq, gq), this._activeTouchIds[Eq] = -1, this._onDeviceDisconnected(rq.Touch, Eq)
        }, this._pointerCancelEvent = qq => {
          if ("mouse" === qq.pointerType) {
            const qq = this._inputs[rq.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Eq = vq.LeftClick; Eq <= vq.BrowserForward; Eq++)
              if (1 === qq[Eq]) {
                qq[Eq] = 0;
                const gq = Tq.CreateDeviceEvent(rq.Mouse, 0, Eq, 0, this, this._elementToAttachTo);
                this._onInputChanged(rq.Mouse, 0, gq)
              }
          } else this._pointerCancelTouch(qq.pointerId)
        }, this._pointerLeaveEvent = qq => {
          "pen" === qq.pointerType && this._pointerCancelTouch(qq.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let qq = !1;
        const Eq = function() {};
        try {
          const gq = Object.defineProperty({}, "passive", {
            get: function() {
              qq = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Eq, gq), this._elementToAttachTo.removeEventListener("test", Eq, gq)
        } catch (gq) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(rq.Mouse)) {
            const qq = this._inputs[rq.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Eq = vq.LeftClick; Eq <= vq.BrowserForward; Eq++)
              if (1 === qq[Eq]) {
                qq[Eq] = 0;
                const gq = Tq.CreateDeviceEvent(rq.Mouse, 0, Eq, 0, this, this._elementToAttachTo);
                this._onInputChanged(rq.Mouse, 0, gq)
              }
          }
          if (this.isDeviceAvailable(rq.Touch)) {
            const qq = this._inputs[rq.Touch];
            for (let Eq = 0; Eq < this._activeTouchIds.length; Eq++) {
              const gq = this._activeTouchIds[Eq];
              if (this._elementToAttachTo.hasPointerCapture?.(gq) && this._elementToAttachTo.releasePointerCapture(gq), -1 !== gq && 1 === qq[Eq]?.[vq.LeftClick]) {
                qq[Eq][vq.LeftClick] = 0;
                const Yq = Tq.CreateDeviceEvent(rq.Touch, Eq, vq.LeftClick, 0, this, this._elementToAttachTo, gq);
                this._onInputChanged(rq.Touch, Eq, Yq), this._activeTouchIds[Eq] = -1, this._onDeviceDisconnected(rq.Touch, Eq)
              }
            }
          }
        }, this._pointerWheelEvent = qq => {
          const Eq = rq.Mouse;
          this._inputs[Eq] || (this._inputs[Eq] = []), this._inputs[Eq][0] || (this._pointerActive = !0, this._registerDevice(Eq, 0, Sq));
          const gq = this._inputs[Eq][0];
          if (gq) {
            gq[vq.MouseWheelX] = qq.deltaX || 0, gq[vq.MouseWheelY] = qq.deltaY || qq.wheelDelta || 0, gq[vq.MouseWheelZ] = qq.deltaZ || 0;
            const Yq = qq;
            void 0 === qq.pointerId && (qq.pointerId = this._mouseId), 0 !== gq[vq.MouseWheelX] && (Yq.inputIndex = vq.MouseWheelX, this._onInputChanged(Eq, 0, Yq)), 0 !== gq[vq.MouseWheelY] && (Yq.inputIndex = vq.MouseWheelY, this._onInputChanged(Eq, 0, Yq)), 0 !== gq[vq.MouseWheelZ] && (Yq.inputIndex = vq.MouseWheelZ, this._onInputChanged(Eq, 0, Yq))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = qq => {
          qq.buttons > 1 && this._pointerCancelEvent(qq)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!qq && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(rq.Mouse)) {
            const qq = this._inputs[rq.Mouse][0];
            qq[vq.MouseWheelX] = 0, qq[vq.MouseWheelY] = 0, qq[vq.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = qq => {
          this._addGamePad(qq.gamepad)
        }, this._gamepadDisconnectedEvent = qq => {
          if (this._gamepads) {
            const Eq = this._getGamepadDeviceType(qq.gamepad.id),
              gq = qq.gamepad.index;
            this._unregisterDevice(Eq, gq), delete this._gamepads[gq]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(qq, Eq, gq) {
        const Yq = navigator.getGamepads()[Eq];
        if (Yq && qq === this._gamepads[Eq]) {
          const lq = this._inputs[qq][Eq];
          gq >= Yq.buttons.length ? lq[gq] = Yq.axes[gq - Yq.buttons.length].valueOf() : lq[gq] = Yq.buttons[gq].value
        }
      }
      _getGamepadDeviceType(qq) {
        return -1 !== qq.indexOf("054c") ? -1 !== qq.indexOf("0ce6") ? rq.DualSense : rq.DualShock : -1 !== qq.indexOf("Xbox One") || -1 !== qq.search("Xbox 360") || -1 !== qq.search("xinput") || -1 !== qq.indexOf("045e") && -1 === qq.indexOf("Surface Dock") ? rq.Xbox : -1 !== qq.indexOf("057e") ? rq.Switch : rq.Generic
      }
      _getPointerType(qq) {
        let Eq = rq.Mouse;
        return ("touch" === qq.pointerType || "pen" === qq.pointerType || qq.touches) && (Eq = rq.Touch), Eq
      }
    }
    class Gq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Eq, this.deviceSlot = gq, this.onInputChangedObservable = new mq.d, this._deviceInputSystem = qq
      }
      getInput(qq) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, qq)
      }
    }
    class Lq {
      constructor(qq) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = qq => {
          for (let Eq = 0; Eq < this._devices.length; Eq++) {
            const gq = this._devices[Eq];
            for (const Yq in gq) {
              const gq = +Yq;
              qq._addDevice(new Gq(this._deviceInputSystem, Eq, gq))
            }
          }
          this._registeredManagers.push(qq)
        }, this.unregisterManager = qq => {
          const Eq = this._registeredManagers.indexOf(qq);
          Eq > -1 && this._registeredManagers.splice(Eq, 1)
        };
        const Eq = Object.keys(rq).length / 2;
        this._devices = new Array(Eq);
        const gq = (qq, Eq) => {
            this._devices[qq] || (this._devices[qq] = new Array), this._devices[qq][Eq] || (this._devices[qq][Eq] = Eq);
            for (const gq of this._registeredManagers) {
              const Yq = new Gq(this._deviceInputSystem, qq, Eq);
              gq._addDevice(Yq)
            }
          },
          Yq = (qq, Eq) => {
            this._devices[qq]?.[Eq] && delete this._devices[qq][Eq];
            for (const gq of this._registeredManagers) gq._removeDevice(qq, Eq)
          },
          lq = (qq, Eq, gq) => {
            if (gq)
              for (const Yq of this._registeredManagers) Yq._onInputChanged(qq, Eq, gq)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new zq(gq, Yq, lq) : this._deviceInputSystem = new pq(qq, gq, Yq, lq)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Jq {
      getDeviceSource(qq, Eq) {
        if (void 0 === Eq) {
          if (void 0 === this._firstDevice[qq]) return null;
          Eq = this._firstDevice[qq]
        }
        return this._devices[qq] && void 0 !== this._devices[qq][Eq] ? this._devices[qq][Eq] : null
      }
      getDeviceSources(qq) {
        return this._devices[qq] ? this._devices[qq].filter((qq => !!qq)) : []
      }
      constructor(qq) {
        const Eq = Object.keys(rq).length / 2;
        this._devices = new Array(Eq), this._firstDevice = new Array(Eq), this._engine = qq, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Lq(qq)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new mq.d((qq => {
          for (const Eq of this._devices)
            if (Eq)
              for (const gq of Eq) gq && this.onDeviceConnectedObservable.notifyObserver(qq, gq)
        })), this.onDeviceDisconnectedObservable = new mq.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = qq.MJ.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.MJ.remove(this._onDisposeObserver)
      }
      _addDevice(qq) {
        this._devices[qq.deviceType] || (this._devices[qq.deviceType] = []), this._devices[qq.deviceType][qq.deviceSlot] || (this._devices[qq.deviceType][qq.deviceSlot] = qq, this._updateFirstDevices(qq.deviceType)), this.onDeviceConnectedObservable.notifyObservers(qq)
      }
      _removeDevice(qq, Eq) {
        const gq = this._devices[qq]?.[Eq];
        this.onDeviceDisconnectedObservable.notifyObservers(gq), this._devices[qq]?.[Eq] && delete this._devices[qq][Eq], this._updateFirstDevices(qq)
      }
      _onInputChanged(qq, Eq, gq) {
        this._devices[qq]?.[Eq]?.onInputChangedObservable.notifyObservers(gq)
      }
      _updateFirstDevices(qq) {
        switch (qq) {
          case rq.Keyboard:
          case rq.Mouse:
            this._firstDevice[qq] = 0;
            break;
          case rq.Touch:
          case rq.DualSense:
          case rq.DualShock:
          case rq.Xbox:
          case rq.Switch:
          case rq.Generic: {
            delete this._firstDevice[qq];
            const Eq = this._devices[qq];
            if (Eq)
              for (let gq = 0; gq < Eq.length; gq++)
                if (Eq[gq]) {
                  this._firstDevice[qq] = gq;
                  break
                } break
          }
        }
      }
    }
    var kq = gq(39932);
    class Rq {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get iu() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(qq) {
        this._singleClick = qq
      }
      set iu(qq) {
        this._doubleClick = qq
      }
      set hasSwiped(qq) {
        this._hasSwiped = qq
      }
      set ignore(qq) {
        this._ignore = qq
      }
    }
    class Uq {
      constructor(qq) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new uq.p(0, 0), this._previousStartingPointerPosition = new uq.p(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = qq || Pq.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(qq) {
        return this._meshUnderPointerId[qq] || null
      }
      get unTranslatedPointer() {
        return new uq.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(qq) {
        this._pointerX = qq
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(qq) {
        this._pointerY = qq
      }
      _updatePointerPosition(qq) {
        const Eq = this._scene.Ba().getInputElementClientRect();
        Eq && (this._pointerX = qq.clientX - Eq.left, this._pointerY = qq.clientY - Eq.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(qq, Eq) {
        const gq = this._scene,
          Yq = gq.Ba(),
          lq = Yq.getInputElement();
        lq && (lq.tabIndex = Yq.canvasTabIndex, gq.doNotHandleCursors || (lq.style.cursor = gq.defaultCursor)), this._setCursorAndPointerOverMesh(qq, Eq, gq);
        for (const xq of gq._pointerMoveStage) {
          qq = qq || this._pickMove(Eq);
          const gq = !!qq?.pickedMesh;
          qq = xq.action(this._unTranslatedPointerX, this._unTranslatedPointerY, qq, gq, lq)
        }
        const Oq = Eq.inputIndex >= vq.MouseWheelX && Eq.inputIndex <= vq.MouseWheelZ ? yq.b.POINTERWHEEL : yq.b.POINTERMOVE;
        let mq;
        gq.onPointerMove && (qq = qq || this._pickMove(Eq), gq.onPointerMove(Eq, qq, Oq)), qq ? (mq = new yq.h(Oq, Eq, qq), this._setRayOnPointerInfo(qq, Eq)) : (mq = new yq.h(Oq, Eq, null, this), this._movePointerInfo = mq), gq.onPointerObservable.hasObservers() && gq.onPointerObservable.notifyObservers(mq, Oq)
      }
      _setRayOnPointerInfo(qq, Eq) {
        const gq = this._scene;
        qq && kq.b._IsPickingAvailable && (qq.ray || (qq.ray = gq.createPickingRay(Eq.offsetX, Eq.offsetY, uq.e.Identity(), gq.activeCamera)))
      }
      _addCameraPointerObserver(qq, Eq) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(qq, Eq)
      }
      _removeCameraPointerObserver(qq) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(qq)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(qq, Eq, gq) {
        const Yq = this._scene,
          lq = new yq.f(gq, Eq, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return qq && (lq.originalPickingInfo = qq, lq.ray = qq.ray, "xr-near" === Eq.pointerType && qq.originMesh && (lq.nearInteractionPickingInfo = qq)), Yq.onPrePointerObservable.notifyObservers(lq, gq), !!lq.skipOnPointerObservable
      }
      _pickMove(qq) {
        const Eq = this._scene,
          gq = Eq.zW(this._unTranslatedPointerX, this._unTranslatedPointerY, Eq.pointerMovePredicate, Eq.pointerMoveFastCheck, Eq.cameraToUseForPointers, Eq.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(gq, qq, Eq), gq
      }
      _updateMeshUnderPointer() {
        const qq = this._scene;
        if (!qq.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || qq.skipPointerMovePicking || !qq.cameraToUseForPointers && !qq.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Eq = this._pointerX,
          gq = this._pointerY,
          Yq = this._unTranslatedPointerX,
          lq = this._unTranslatedPointerY;
        for (const Oq of this._latestPointerMoveEvents.values()) this._pointerX = Oq.pointerX, this._pointerY = Oq.pointerY, this._unTranslatedPointerX = Oq.unTranslatedPointerX, this._unTranslatedPointerY = Oq.unTranslatedPointerY, this._pickMove(Oq.event);
        this._pointerX = Eq, this._pointerY = gq, this._unTranslatedPointerX = Yq, this._unTranslatedPointerY = lq
      }
      _ensurePointerMovePredicate() {
        const qq = this._scene;
        qq.pointerMovePredicate || (qq.pointerMovePredicate = Eq => (Eq._isPointerMovePickable ?? Eq.yV) && Eq.isVisible && Eq.isReady() && Eq.isEnabled() && (Eq.enablePointerMoveEvents || qq.constantlyUpdateMeshUnderPointer || null !== Eq._getActionManagerForTrigger()) && (!qq.cameraToUseForPointers || 0 !== (qq.cameraToUseForPointers.layerMask & Eq.layerMask)))
      }
      _setCursorAndPointerOverMesh(qq, Eq, gq) {
        const Yq = gq.Ba().getInputElement();
        if (qq?.pickedMesh) {
          if (this.setPointerOverMesh(qq.pickedMesh, Eq.pointerId, qq, Eq), !gq.doNotHandleCursors && Yq && this._pointerOverMesh) {
            const qq = this._pointerOverMesh._getActionManagerForTrigger();
            qq && qq.hasPointerTriggers && (Yq.style.cursor = qq.hoverCursor || gq.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Eq.pointerId, qq, Eq)
      }
      simulatePointerMove(qq, Eq) {
        const gq = new PointerEvent("pointermove", Eq);
        gq.inputIndex = vq.Move, this._checkPrePointerObservable(qq, gq, yq.b.POINTERMOVE) || this._processPointerMove(qq, gq)
      }
      simulatePointerDown(qq, Eq) {
        const gq = new PointerEvent("pointerdown", Eq);
        gq.inputIndex = gq.button + 2, this._checkPrePointerObservable(qq, gq, yq.b.POINTERDOWN) || this._processPointerDown(qq, gq)
      }
      _processPointerDown(qq, Eq) {
        const gq = this._scene;
        if (qq?.pickedMesh) {
          this._pickedDownMesh = qq.pickedMesh;
          const Yq = qq.pickedMesh._getActionManagerForTrigger();
          if (Yq) {
            if (Yq.hasPickTriggers) switch (Yq.processTrigger(5, new aq(qq.pickedMesh, gq.pointerX, gq.pointerY, qq.pickedMesh, Eq, qq)), Eq.button) {
              case 0:
                Yq.processTrigger(2, new aq(qq.pickedMesh, gq.pointerX, gq.pointerY, qq.pickedMesh, Eq, qq));
                break;
              case 1:
                Yq.processTrigger(4, new aq(qq.pickedMesh, gq.pointerX, gq.pointerY, qq.pickedMesh, Eq, qq));
                break;
              case 2:
                Yq.processTrigger(3, new aq(qq.pickedMesh, gq.pointerX, gq.pointerY, qq.pickedMesh, Eq, qq))
            }
            Yq.hasSpecificTrigger(8) && window.setTimeout((() => {
              const qq = gq.zW(this._unTranslatedPointerX, this._unTranslatedPointerY, (qq => qq.yV && qq.isVisible && qq.isReady() && qq.actionManager && qq.actionManager.hasSpecificTrigger(8) && qq === this._pickedDownMesh), !1, gq.cameraToUseForPointers);
              qq?.pickedMesh && Yq && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Uq.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Yq.processTrigger(8, aq.CreateNew(qq.pickedMesh, Eq)))
            }), Uq.LongPressDelay)
          }
        } else
          for (const Oq of gq._pointerDownStage) qq = Oq.action(this._unTranslatedPointerX, this._unTranslatedPointerY, qq, Eq, !1);
        let Yq;
        const lq = yq.b.POINTERDOWN;
        qq ? (gq.onPointerDown && gq.onPointerDown(Eq, qq, lq), Yq = new yq.h(lq, Eq, qq), this._setRayOnPointerInfo(qq, Eq)) : Yq = new yq.h(lq, Eq, null, this), gq.onPointerObservable.hasObservers() && gq.onPointerObservable.notifyObservers(Yq, lq)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(qq, Eq, gq) {
        const Yq = new PointerEvent("pointerup", Eq);
        Yq.inputIndex = vq.Move;
        const lq = new Rq;
        gq ? lq.iu = !0 : lq.singleClick = !0, this._checkPrePointerObservable(qq, Yq, yq.b.POINTERUP) || this._processPointerUp(qq, Yq, lq)
      }
      _processPointerUp(qq, Eq, gq) {
        const Yq = this._scene;
        if (qq?.pickedMesh) {
          if (this._pickedUpMesh = qq.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Yq.onPointerPick && Yq.onPointerPick(Eq, qq), gq.singleClick && !gq.ignore && Yq.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const gq = yq.b.POINTERPICK,
              lq = new yq.h(gq, Eq, qq);
            this._setRayOnPointerInfo(qq, Eq), Yq.onPointerObservable.notifyObservers(lq, gq)
          }
          const lq = qq.pickedMesh._getActionManagerForTrigger();
          if (lq && !gq.ignore) {
            lq.processTrigger(7, aq.CreateNew(qq.pickedMesh, Eq, qq)), !gq.hasSwiped && gq.singleClick && lq.processTrigger(1, aq.CreateNew(qq.pickedMesh, Eq, qq));
            const Yq = qq.pickedMesh._getActionManagerForTrigger(6);
            gq.iu && Yq && Yq.processTrigger(6, aq.CreateNew(qq.pickedMesh, Eq, qq))
          }
        } else if (!gq.ignore)
          for (const lq of Yq._pointerUpStage) qq = lq.action(this._unTranslatedPointerX, this._unTranslatedPointerY, qq, Eq, gq.iu);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const qq = this._pickedDownMesh._getActionManagerForTrigger(16);
          qq && qq.processTrigger(16, aq.CreateNew(this._pickedDownMesh, Eq))
        }
        if (!gq.ignore) {
          const lq = new yq.h(yq.b.POINTERUP, Eq, qq);
          if (this._setRayOnPointerInfo(qq, Eq), Yq.onPointerObservable.notifyObservers(lq, yq.b.POINTERUP), Yq.onPointerUp && Yq.onPointerUp(Eq, qq, yq.b.POINTERUP), !gq.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let lq = 0;
            if (gq.singleClick ? lq = yq.b.POINTERTAP : gq.iu && (lq = yq.b.POINTERDOUBLETAP), lq) {
              const gq = new yq.h(lq, Eq, qq);
              Yq.onPointerObservable.hasObservers() && Yq.onPointerObservable.hasSpecificMask(lq) && Yq.onPointerObservable.notifyObservers(gq, lq)
            }
          }
        }
      }
      isPointerCaptured() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[qq]
      }
      attachControl() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const lq = this._scene,
          Oq = lq.Ba();
        Yq || (Yq = Oq.getInputElement()), this._alreadyAttached && this.detachControl(), Yq && (this._alreadyAttachedTo = Yq), this._deviceSourceManager = new Jq(Oq), this._initActionManager = qq => {
          if (!this._meshPickProceed) {
            const Eq = lq.skipPointerUpPicking || 0 === lq._registeredActions && !this._checkForPicking() && !lq.onPointerUp ? null : lq.zW(this._unTranslatedPointerX, this._unTranslatedPointerY, lq.pointerUpPredicate, lq.pointerUpFastCheck, lq.cameraToUseForPointers, lq.pointerUpTrianglePredicate);
            this._currentPickResult = Eq, Eq && (qq = Eq.hit && Eq.pickedMesh ? Eq.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return qq
        }, this._delayedSimpleClick = (qq, Eq, gq) => {
          if ((Date.now() - this._previousStartingPointerTime > Uq.DoubleClickDelay && !this._doubleClickOccured || qq !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Eq.singleClick = !0, Eq.ignore = !1, this._delayedClicks[qq])) {
            const Eq = this._delayedClicks[qq].evt,
              gq = yq.b.POINTERTAP,
              Yq = new yq.h(gq, Eq, this._currentPickResult);
            lq.onPointerObservable.hasObservers() && lq.onPointerObservable.hasSpecificMask(gq) && lq.onPointerObservable.notifyObservers(Yq, gq), this._delayedClicks[qq] = null
          }
        }, this._initClickEvent = (qq, Eq, gq, Yq) => {
          const lq = new Rq;
          this._currentPickResult = null;
          let Oq = null,
            mq = qq.hasSpecificMask(yq.b.POINTERPICK) || Eq.hasSpecificMask(yq.b.POINTERPICK) || qq.hasSpecificMask(yq.b.POINTERTAP) || Eq.hasSpecificMask(yq.b.POINTERTAP) || qq.hasSpecificMask(yq.b.POINTERDOUBLETAP) || Eq.hasSpecificMask(yq.b.POINTERDOUBLETAP);
          !mq && tq && (Oq = this._initActionManager(Oq, lq), Oq && (mq = Oq.hasPickTriggers));
          let xq = !1;
          if (mq = mq && !this._isMultiTouchGesture, mq) {
            const mq = gq.button;
            if (lq.hasSwiped = this._isPointerSwiping(), !lq.hasSwiped) {
              let Aq = !Uq.ExclusiveDoubleClickMode;
              if (Aq || (Aq = !qq.hasSpecificMask(yq.b.POINTERDOUBLETAP) && !Eq.hasSpecificMask(yq.b.POINTERDOUBLETAP), Aq && !tq.HasSpecificTrigger(6) && (Oq = this._initActionManager(Oq, lq), Oq && (Aq = !Oq.hasSpecificTrigger(6)))), Aq)(Date.now() - this._previousStartingPointerTime > Uq.DoubleClickDelay || mq !== this._previousButtonPressed) && (lq.singleClick = !0, Yq(lq, this._currentPickResult), xq = !0);
              else {
                const qq = {
                  evt: gq,
                  clickInfo: lq,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, mq, lq, Yq), Uq.DoubleClickDelay)
                };
                this._delayedClicks[mq] = qq
              }
              let cq = qq.hasSpecificMask(yq.b.POINTERDOUBLETAP) || Eq.hasSpecificMask(yq.b.POINTERDOUBLETAP);
              !cq && tq.HasSpecificTrigger(6) && (Oq = this._initActionManager(Oq, lq), Oq && (cq = Oq.hasSpecificTrigger(6))), cq && (mq === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Uq.DoubleClickDelay && !this._doubleClickOccured ? (lq.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = mq, Uq.ExclusiveDoubleClickMode ? (this._delayedClicks[mq] && (clearTimeout(this._delayedClicks[mq]?.timeoutId), this._delayedClicks[mq] = null), Yq(lq, this._previousPickResult)) : Yq(lq, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, lq.iu = !0, lq.ignore = !1, Uq.ExclusiveDoubleClickMode && this._delayedClicks[mq] && (clearTimeout(this._delayedClicks[mq]?.timeoutId), this._delayedClicks[mq] = null), Yq(lq, this._currentPickResult)), xq = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = mq))
            }
          }
          xq || Yq(lq, this._currentPickResult)
        }, this._onPointerMove = qq => {
          if (this._updatePointerPosition(qq), this._latestPointerMoveEvents.set(qq.pointerId, {
              event: qq,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Uq.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Uq.DragMovementThreshold), Oq.isPointerLock && Oq._verifyPointerLock(), this._checkPrePointerObservable(null, qq, qq.inputIndex >= vq.MouseWheelX && qq.inputIndex <= vq.MouseWheelZ ? yq.b.POINTERWHEEL : yq.b.POINTERMOVE)) return;
          if (!lq.cameraToUseForPointers && !lq.activeCamera) return;
          if (lq.skipPointerMovePicking) return void this._processPointerMove(new Nq.d, qq);
          this._ensurePointerMovePredicate();
          const Eq = lq._registeredActions > 0 || lq.constantlyUpdateMeshUnderPointer ? this._pickMove(qq) : null;
          this._processPointerMove(Eq, qq)
        }, this._onPointerDown = qq => {
          const Eq = this._activePointerIds.indexOf(-1);
          if (-1 === Eq ? this._activePointerIds.push(qq.pointerId) : this._activePointerIds[Eq] = qq.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Uq.ExclusiveDoubleClickMode)
            for (let Yq = 0; Yq < this._delayedClicks.length; Yq++)
              if (this._delayedClicks[Yq])
                if (qq.button === Yq) clearTimeout(this._delayedClicks[Yq]?.timeoutId);
                else {
                  const qq = this._delayedClicks[Yq].clickInfo;
                  this._doubleClickOccured = !1, qq.singleClick = !0, qq.ignore = !1;
                  const Eq = this._delayedClicks[Yq].evt,
                    gq = yq.b.POINTERTAP,
                    Oq = new yq.h(gq, Eq, this._currentPickResult);
                  lq.onPointerObservable.hasObservers() && lq.onPointerObservable.hasSpecificMask(gq) && lq.onPointerObservable.notifyObservers(Oq, gq), this._delayedClicks[Yq] = null
                } if (this._updatePointerPosition(qq), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = qq.button), lq.preventDefaultOnPointerDown && Yq && (qq.preventDefault(), Yq.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, qq, yq.b.POINTERDOWN)) return;
          if (!lq.cameraToUseForPointers && !lq.activeCamera) return;
          let gq;
          this._pointerCaptures[qq.pointerId] = !0, lq.pointerDownPredicate || (lq.pointerDownPredicate = qq => qq.yV && qq.isVisible && qq.isReady() && qq.isEnabled() && (!lq.cameraToUseForPointers || 0 !== (lq.cameraToUseForPointers.layerMask & qq.layerMask))), this._pickedDownMesh = null, gq = lq.skipPointerDownPicking || 0 === lq._registeredActions && !this._checkForPicking() && !lq.onPointerDown ? new Nq.d : lq.zW(this._unTranslatedPointerX, this._unTranslatedPointerY, lq.pointerDownPredicate, lq.pointerDownFastCheck, lq.cameraToUseForPointers, lq.pointerDownTrianglePredicate), this._processPointerDown(gq, qq)
        }, this._onPointerUp = qq => {
          const Eq = this._activePointerIds.indexOf(qq.pointerId); - 1 !== Eq && (this._activePointerIds[Eq] = -1, this._activePointerIdsCount--, "touch" === qq.pointerType && this._latestPointerMoveEvents.delete(qq.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(qq), lq.preventDefaultOnPointerUp && Yq && (qq.preventDefault(), Yq.focus()), this._initClickEvent(lq.onPrePointerObservable, lq.onPointerObservable, qq, ((Eq, gq) => {
            if (lq.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Eq.ignore)) {
              if (this._checkPrePointerObservable(null, qq, yq.b.POINTERUP)) return this._swipeButtonPressed === qq.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === qq.buttons && (this._pointerCaptures[qq.pointerId] = !1));
              Eq.hasSwiped || (Eq.singleClick && lq.onPrePointerObservable.hasSpecificMask(yq.b.POINTERTAP) && this._checkPrePointerObservable(null, qq, yq.b.POINTERTAP) && (this._skipPointerTap = !0), Eq.iu && lq.onPrePointerObservable.hasSpecificMask(yq.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, qq, yq.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[qq.pointerId] ? (0 === qq.buttons && (this._pointerCaptures[qq.pointerId] = !1), (lq.cameraToUseForPointers || lq.activeCamera) && (lq.pointerUpPredicate || (lq.pointerUpPredicate = qq => qq.yV && qq.isVisible && qq.isReady() && qq.isEnabled() && (!lq.cameraToUseForPointers || 0 !== (lq.cameraToUseForPointers.layerMask & qq.layerMask))), !this._meshPickProceed && (tq && tq.HasTriggers || this._checkForPicking() || lq.onPointerUp) && this._initActionManager(null, Eq), gq || (gq = this._currentPickResult), this._processPointerUp(gq, qq, Eq), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === qq.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === qq.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = qq => {
          const Eq = fq.c.KEYDOWN;
          if (lq.onPreKeyboardObservable.hasObservers()) {
            const gq = new fq.e(Eq, qq);
            if (lq.onPreKeyboardObservable.notifyObservers(gq, Eq), gq.skipOnKeyboardObservable) return
          }
          if (lq.onKeyboardObservable.hasObservers()) {
            const gq = new fq.i(Eq, qq);
            lq.onKeyboardObservable.notifyObservers(gq, Eq)
          }
          lq.actionManager && lq.actionManager.processTrigger(14, aq.CreateNewFromScene(lq, qq))
        }, this._onKeyUp = qq => {
          const Eq = fq.c.KEYUP;
          if (lq.onPreKeyboardObservable.hasObservers()) {
            const gq = new fq.e(Eq, qq);
            if (lq.onPreKeyboardObservable.notifyObservers(gq, Eq), gq.skipOnKeyboardObservable) return
          }
          if (lq.onKeyboardObservable.hasObservers()) {
            const gq = new fq.i(Eq, qq);
            lq.onKeyboardObservable.notifyObservers(gq, Eq)
          }
          lq.actionManager && lq.actionManager.processTrigger(15, aq.CreateNewFromScene(lq, qq))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Yq => {
          Yq.deviceType === rq.Mouse ? Yq.onInputChangedObservable.add((lq => {
            this._originMouseEvent = lq, lq.inputIndex === vq.LeftClick || lq.inputIndex === vq.MiddleClick || lq.inputIndex === vq.RightClick || lq.inputIndex === vq.BrowserBack || lq.inputIndex === vq.BrowserForward ? Eq && 1 === Yq.getInput(lq.inputIndex) ? this._onPointerDown(lq) : qq && 0 === Yq.getInput(lq.inputIndex) && this._onPointerUp(lq) : gq && (lq.inputIndex === vq.Move ? this._onPointerMove(lq) : lq.inputIndex !== vq.MouseWheelX && lq.inputIndex !== vq.MouseWheelY && lq.inputIndex !== vq.MouseWheelZ || this._onPointerMove(lq))
          })) : Yq.deviceType === rq.Touch ? Yq.onInputChangedObservable.add((lq => {
            lq.inputIndex === vq.LeftClick && (Eq && 1 === Yq.getInput(lq.inputIndex) ? (this._onPointerDown(lq), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : qq && 0 === Yq.getInput(lq.inputIndex) && (this._onPointerUp(lq), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), gq && lq.inputIndex === vq.Move && this._onPointerMove(lq)
          })) : Yq.deviceType === rq.Keyboard && Yq.onInputChangedObservable.add((qq => {
            "keydown" === qq.type ? this._onKeyDown(qq) : "keyup" === qq.type && this._onKeyUp(qq)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Eq] === qq && (!qq || !qq._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const lq = this._meshUnderPointerId[Eq];
        let Oq;
        lq && (Oq = lq._getActionManagerForTrigger(10), Oq && Oq.processTrigger(10, new aq(lq, this._pointerX, this._pointerY, qq, Yq, {
          pointerId: Eq
        }))), qq ? (this._meshUnderPointerId[Eq] = qq, this._pointerOverMesh = qq, Oq = qq._getActionManagerForTrigger(9), Oq && Oq.processTrigger(9, new aq(qq, this._pointerX, this._pointerY, qq, Yq, {
          pointerId: Eq,
          pickResult: gq
        }))) : (delete this._meshUnderPointerId[Eq], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: qq,
          pointerId: Eq
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(qq) {
        this._pointerOverMesh === qq && (this._pointerOverMesh = null), this._pickedDownMesh === qq && (this._pickedDownMesh = null), this._pickedUpMesh === qq && (this._pickedUpMesh = null);
        for (const Eq in this._meshUnderPointerId) this._meshUnderPointerId[Eq] === qq && delete this._meshUnderPointerId[Eq]
      }
    }
    Uq.DragMovementThreshold = 10, Uq.LongPressDelay = 500, Uq.DoubleClickDelay = 300, Uq.ExclusiveDoubleClickMode = !1;
    var Fq = gq(39712),
      sq = gq(37289),
      Xq = gq(37758);
    class wq {
      static get UniqueId() {
        const qq = this._UniqueIdCounter;
        return this._UniqueIdCounter++, qq
      }
    }
    wq._UniqueIdCounter = 1;
    var Kq = gq(39799),
      Cq = gq(39938),
      Iq = gq(37149);
    class eq {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Dq, qE, EE, gE, YE, lE, OE, mE, xE, AE, cE, uE, BE, WE, NE, aE, VE, dE, jE, HE, oE, PE, QE, yE, tE, rE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, JE, kE, RE, UE, FE, sE, XE, wE, KE, CE, IE, eE, DE, qg = gq(38653),
      Eg = gq(37171);
    const gg = new uq.r,
      Yg = new uq.r;
    var lg;
    ! function(qq) {
      qq[qq.BackwardCompatible = 0] = "BackwardCompatible", qq[qq.Intermediate = 1] = "Intermediate", qq[qq.Aggressive = 2] = "Aggressive"
    }(lg || (lg = {}));
    class Og {
      static DefaultMaterialFactory(qq) {
        throw (0, Qq.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Qq.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(qq) {
        qq !== this._clearColor && (this._clearColor = qq, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(qq) {
        if (qq !== this._performancePriority) {
          switch (this._performancePriority = qq, qq) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(qq)
        }
      }
      set forceWireframe(qq) {
        this._forceWireframe !== qq && (this._forceWireframe = qq, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(qq) {
        this._skipFrustumClipping !== qq && (this._skipFrustumClipping = qq)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(qq) {
        this._forcePointsCloud !== qq && (this._forcePointsCloud = qq, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(qq) {
        this._environmentTexture !== qq && (this._environmentTexture = qq, this.onEnvironmentTextureChangedObservable.notifyObservers(qq), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let qq = [];
        qq = qq.concat(this.meshes), qq = qq.concat(this.lights), qq = qq.concat(this.cameras), qq = qq.concat(this.transformNodes);
        for (const Eq of this.skeletons) qq = qq.concat(Eq.bones);
        return qq
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(qq) {
        this._animationPropertiesOverride = qq
      }
      set onDispose(qq) {
        this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
      }
      set beforeRender(qq) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), qq && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(qq))
      }
      set afterRender(qq) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), qq && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(qq))
      }
      set beforeCameraRender(qq) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(qq)
      }
      set afterCameraRender(qq) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(qq)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(qq) {
        this._pointerPickingConfiguration.pointerDownPredicate = qq
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(qq) {
        this._pointerPickingConfiguration.pointerUpPredicate = qq
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(qq) {
        this._pointerPickingConfiguration.pointerMovePredicate = qq
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(qq) {
        this._pointerPickingConfiguration.pointerDownFastCheck = qq
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(qq) {
        this._pointerPickingConfiguration.pointerUpFastCheck = qq
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(qq) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = qq
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(qq) {
        this._pointerPickingConfiguration.skipPointerMovePicking = qq
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(qq) {
        this._pointerPickingConfiguration.skipPointerDownPicking = qq
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(qq) {
        this._pointerPickingConfiguration.skipPointerUpPicking = qq
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Uq.DragMovementThreshold
      }
      static set DragMovementThreshold(qq) {
        Uq.DragMovementThreshold = qq
      }
      static get LongPressDelay() {
        return Uq.LongPressDelay
      }
      static set LongPressDelay(qq) {
        Uq.LongPressDelay = qq
      }
      static get DoubleClickDelay() {
        return Uq.DoubleClickDelay
      }
      static set DoubleClickDelay(qq) {
        Uq.DoubleClickDelay = qq
      }
      static get ExclusiveDoubleClickMode() {
        return Uq.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(qq) {
        Uq.ExclusiveDoubleClickMode = qq
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? uq.q.ZeroReadOnly
      }
      bindEyePosition(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = this._eyePosition,
          lq = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Oq = this.floatingOriginOffset,
          mq = gg.set(Yq.x, Yq.y, Yq.z, lq ? -1 : 1),
          xq = mq.subtractFromFloatsToRef(Oq.x, Oq.y, Oq.z, 0, Yg);
        return qq && (gq ? qq.setFloat3(Eq, xq.x, xq.y, xq.z) : qq.setVector4(Eq, xq)), mq
      }
      finalizeSceneUbo() {
        const qq = this.getSceneUniformBuffer(),
          Eq = this.bindEyePosition(null),
          gq = this.floatingOriginOffset;
        return qq.updateFloat4("vEyePosition", Eq.x - gq.x, Eq.y - gq.y, Eq.z - gq.z, Eq.w), qq.update(), qq
      }
      set useRightHandedSystem(qq) {
        this._useRightHandedSystem !== qq && (this._useRightHandedSystem = qq, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(qq) {
        this._currentStepId = qq
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(qq) {
        this._fogEnabled !== qq && (this._fogEnabled = qq, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(qq) {
        this._fogMode !== qq && (this._fogMode = qq, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(qq) {
        this._shadowsEnabled !== qq && (this._shadowsEnabled = qq, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(qq) {
        this._lightsEnabled !== qq && (this._lightsEnabled = qq, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(qq) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), qq && (this._unObserveActiveCameras = (0, Iq.k)(qq, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = qq
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(qq) {
        qq !== this._activeCamera && (this._activeCamera = qq, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Og.DefaultMaterialFactory !== Og._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Og.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(qq) {
        this._defaultMaterial = qq
      }
      set texturesEnabled(qq) {
        this._texturesEnabled !== qq && (this._texturesEnabled = qq, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(qq) {
        if (this._frameGraph) return this._frameGraph = qq, void(qq || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = qq, qq && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(qq) {
        this._skeletonsEnabled !== qq && (this._skeletonsEnabled = qq, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Og.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const qq of this._transientComponents) qq.register();
          this._transientComponents.length = 0
        }
      }
      VYq(qq) {
        this._components.push(qq), this._transientComponents.push(qq);
        const Eq = qq;
        Eq.addFromContainer && Eq.serialize && this._serializableComponents.push(Eq)
      }
      _getComponent(qq) {
        for (const Eq of this._components)
          if (Eq.name === qq) return Eq;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(qq, Eq) {
        this._inputManager = new Uq(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new sq.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new mq.d, this.ambientColor = new sq.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new mq.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.xZ = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.MJ = new mq.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new mq.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new mq.d, this.onAfterRenderCameraObservable = new mq.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new mq.d, this.onAfterAnimationsObservable = new mq.d, this.onBeforeDrawPhaseObservable = new mq.d, this.onAfterDrawPhaseObservable = new mq.d, this.onReadyObservable = new mq.d, this.onBeforeCameraRenderObservable = new mq.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new mq.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new mq.d, this.onAfterActiveMeshesEvaluationObservable = new mq.d, this.onBeforeParticlesRenderingObservable = new mq.d, this.onAfterParticlesRenderingObservable = new mq.d, this.onDataLoadedObservable = new mq.d, this.onNewCameraAddedObservable = new mq.d, this.onCameraRemovedObservable = new mq.d, this.onNewLightAddedObservable = new mq.d, this.onLightRemovedObservable = new mq.d, this.onNewGeometryAddedObservable = new mq.d, this.onGeometryRemovedObservable = new mq.d, this.onNewTransformNodeAddedObservable = new mq.d, this.onTransformNodeRemovedObservable = new mq.d, this.onNewMeshAddedObservable = new mq.d, this.onMeshRemovedObservable = new mq.d, this.onNewSkeletonAddedObservable = new mq.d, this.onSkeletonRemovedObservable = new mq.d, this.onNewParticleSystemAddedObservable = new mq.d, this.onParticleSystemRemovedObservable = new mq.d, this.onNewAnimationGroupAddedObservable = new mq.d, this.onAnimationGroupRemovedObservable = new mq.d, this.onNewMaterialAddedObservable = new mq.d, this.onNewMultiMaterialAddedObservable = new mq.d, this.onMaterialRemovedObservable = new mq.d, this.onMultiMaterialRemovedObservable = new mq.d, this.onNewTextureAddedObservable = new mq.d, this.onTextureRemovedObservable = new mq.d, this.onNewFrameGraphAddedObservable = new mq.d, this.onFrameGraphRemovedObservable = new mq.d, this.onNewObjectRendererAddedObservable = new mq.d, this.onObjectRendererRemovedObservable = new mq.d, this.onNewPostProcessAddedObservable = new mq.d, this.onPostProcessRemovedObservable = new mq.d, this.onNewEffectLayerAddedObservable = new mq.d, this.onEffectLayerRemovedObservable = new mq.d, this.onBeforeRenderTargetsRenderObservable = new mq.d, this.onAfterRenderTargetsRenderObservable = new mq.d, this.onBeforeStepObservable = new mq.d, this.onAfterStepObservable = new mq.d, this.onActiveCameraChanged = new mq.d, this.onActiveCamerasChanged = new mq.d, this.onBeforeRenderingGroupObservable = new mq.d, this.onAfterRenderingGroupObservable = new mq.d, this.onMeshImportedObservable = new mq.d, this.onAnimationFileImportedObservable = new mq.d, this.onEnvironmentTextureChangedObservable = new mq.d, this.onMeshUnderPointerUpdatedObservable = new mq.d, this._registeredForLateAnimationBindings = new xq.b(256), this._pointerPickingConfiguration = new eq, this.onPrePointerObservable = new mq.d, this.onPointerObservable = new mq.d, this.onPreKeyboardObservable = new mq.d, this.onKeyboardObservable = new mq.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Og.FOGMODE_NONE, this.fogColor = new sq.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.JF = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new uq.q(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new xq.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Fq.b, this._activeIndices = new Fq.b, this._activeParticles = new Fq.b, this._activeBones = new Fq.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new xq.c(256), this._processedMaterials = new xq.c(256), this._renderTargets = new xq.b(256), this._materialsRenderTargets = new xq.b(256), this._activeParticleSystems = new xq.c(256), this._activeSkeletons = new xq.b(32), this._softwareSkinnedMeshes = new xq.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = uq.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Hq.g.Create(), this._beforeClearStage = Hq.g.Create(), this._beforeRenderTargetClearStage = Hq.g.Create(), this._gatherRenderTargetsStage = Hq.g.Create(), this._gatherActiveCameraRenderTargetsStage = Hq.g.Create(), this._isReadyForMeshStage = Hq.g.Create(), this._beforeEvaluateActiveMeshStage = Hq.g.Create(), this._evaluateSubMeshStage = Hq.g.Create(), this._preActiveMeshStage = Hq.g.Create(), this._cameraDrawRenderTargetStage = Hq.g.Create(), this._beforeCameraDrawStage = Hq.g.Create(), this._beforeRenderTargetDrawStage = Hq.g.Create(), this._beforeRenderingGroupDrawStage = Hq.g.Create(), this._beforeRenderingMeshStage = Hq.g.Create(), this._afterRenderingMeshStage = Hq.g.Create(), this._afterRenderingGroupDrawStage = Hq.g.Create(), this._afterCameraDrawStage = Hq.g.Create(), this._afterCameraPostProcessStage = Hq.g.Create(), this._afterRenderTargetDrawStage = Hq.g.Create(), this._afterRenderTargetPostProcessStage = Hq.g.Create(), this._afterRenderStage = Hq.g.Create(), this._pointerMoveStage = Hq.g.Create(), this._pointerDownStage = Hq.g.Create(), this._pointerUpStage = Hq.g.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new mq.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const gq = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Eq
        };
        this.defaultCameraLayerMask = gq.defaultCameraLayerMask, this.defaultRenderableLayerMask = gq.defaultRenderableLayerMask, qq = this._engine = qq || Pq.b.LastCreatedEngine, gq.virtual ? qq._virtualScenes.push(this) : (Pq.b._LastCreatedScene = this, qq.scenes.push(this)), (qq.getCreationOptions().useLargeWorldRendering || Eq?.useFloatingOrigin) && ((0, dq.h)(), this._floatingOriginScene = this, dq.e.ZJ = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new jq.d(this), Vq.b && (this.postProcessManager = new Vq.b(this)), (0, oq.n)() && this.attachControl(), this._createUbo(), Bq.e && (this._imageProcessingConfiguration = new Bq.e), this.setDefaultCandidateProviders(), gq.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = gq.useMaterialMeshMap, this.useClonedMeshMap = gq.useClonedMeshMap, Eq && Eq.virtual || qq.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(qq) {
        return this._defaultSubMeshCandidates.data = qq.fn, this._defaultSubMeshCandidates.length = qq.fn.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = qq => this._getDefaultSubMeshCandidates(qq), this.getIntersectingSubMeshCandidates = (qq, Eq) => this._getDefaultSubMeshCandidates(qq), this.getCollidingSubMeshCandidates = (qq, Eq) => this._getDefaultSubMeshCandidates(qq)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(qq) {
        this._inputManager.pointerX = qq
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(qq) {
        this._inputManager.pointerY = qq
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
      isCachedMaterialInvalid(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Eq || this._cachedMaterial !== qq || this._cachedVisibility !== gq
      }
      Ba() {
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
      simulatePointerMove(qq, Eq) {
        return this._inputManager.simulatePointerMove(qq, Eq), this
      }
      simulatePointerDown(qq, Eq) {
        return this._inputManager.simulatePointerDown(qq, Eq), this
      }
      simulatePointerUp(qq, Eq, gq) {
        return this._inputManager.simulatePointerUp(qq, Eq, gq), this
      }
      isPointerCaptured() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(qq)
      }
      attachControl() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(qq, Eq, gq)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let qq, Eq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const gq = this.Ba(),
          Yq = gq.currentRenderPassId;
        gq.currentRenderPassId = this.activeCamera?.renderPassId ?? Yq;
        let lq = !0;
        for (this._pendingData.length > 0 && (lq = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && lq && (lq = this.depthPeelingRenderer.isReady()), Eq && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), qq = 0; qq < this.meshes.length; qq++) {
          const Yq = this.meshes[qq];
          if (!Yq.fn || 0 === Yq.fn.length) continue;
          if (!Yq.isReady(!0)) {
            lq = !1;
            continue
          }
          const Oq = Yq.hasThinInstances || "InstancedMesh" === Yq.getClassName() || "InstancedLinesMesh" === Yq.getClassName() || gq.getCaps().instancedArrays && Yq.instances.length > 0;
          for (let qq = 0, Eq = this._isReadyForMeshStage; qq < Eq.length; qq++) {
            Eq[qq].action(Yq, Oq) || (lq = !1)
          }
          if (!Eq) continue;
          const mq = Yq.material || this.defaultMaterial;
          if (mq)
            if (mq._storeEffectOnSubMeshes)
              for (const qq of Yq.fn) {
                const Eq = qq.da();
                Eq && Eq.hasRenderTargetTextures && null != Eq.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Eq) && (this._processedMaterials.push(Eq), this._materialsRenderTargets.concatWithNoDuplicate(Eq.getRenderTargetTextures()))
              } else mq.hasRenderTargetTextures && null != mq.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(mq) && (this._processedMaterials.push(mq), this._materialsRenderTargets.concatWithNoDuplicate(mq.getRenderTargetTextures()))
        }
        if (Eq) {
          for (qq = 0; qq < this._materialsRenderTargets.length; ++qq) {
            this._materialsRenderTargets.data[qq].isReadyForRendering() || (lq = !1)
          }
          for (qq = 0; qq < this.customRenderTargets.length; ++qq) {
            this.customRenderTargets[qq].isReadyForRendering() || (lq = !1)
          }
        }
        for (qq = 0; qq < this.geometries.length; qq++) {
          2 === this.geometries[qq].delayLoadState && (lq = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Oq of this.activeCameras) Oq.isReady(!0) || (lq = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (lq = !1));
        for (const Oq of this.xZ) Oq.isReady() || (lq = !1);
        if (this.proceduralTexturesEnabled)
          for (const Oq of this.proceduralTextures) Oq.isReady() || (lq = !1);
        if (this.layers)
          for (const Oq of this.layers) Oq.isReady() || (lq = !1);
        if (this.effectLayers)
          for (const Oq of this.effectLayers) Oq.isLayerReady() || (lq = !1);
        for (const Oq of this._isReadyChecks) Oq.isReady() || (lq = !1);
        return gq.areAllEffectsReady() || (lq = !1), gq.currentRenderPassId = Yq, lq
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(qq) {
        this.onBeforeRenderObservable.add(qq)
      }
      unregisterBeforeRender(qq) {
        this.onBeforeRenderObservable.removeCallback(qq)
      }
      registerAfterRender(qq) {
        this.onAfterRenderObservable.add(qq)
      }
      unregisterAfterRender(qq) {
        this.onAfterRenderObservable.removeCallback(qq)
      }
      _executeOnceBeforeRender(qq) {
        const Eq = () => {
          qq(), setTimeout((() => {
            this.unregisterBeforeRender(Eq)
          }))
        };
        this.registerBeforeRender(Eq)
      }
      executeOnceBeforeRender(qq, Eq) {
        void 0 !== Eq ? setTimeout((() => {
          this._executeOnceBeforeRender(qq)
        }), Eq) : this._executeOnceBeforeRender(qq)
      }
      addPendingData(qq) {
        this._pendingData.push(qq)
      }
      removePendingData(qq) {
        const Eq = this.isLoading,
          gq = this._pendingData.indexOf(qq); - 1 !== gq && this._pendingData.splice(gq, 1), Eq && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(qq) {
        -1 === this._isReadyChecks.indexOf(qq) && this._isReadyChecks.push(qq)
      }
      removeIsReadyCheck(qq) {
        const Eq = this._isReadyChecks.indexOf(qq); - 1 !== Eq && this._isReadyChecks.splice(Eq, 1)
      }
      executeWhenReady(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(qq), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Eq)
      }
      async whenReadyAsync() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Eq => {
          this.executeWhenReady((() => {
            Eq()
          }), qq)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Oq.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && Oq.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(qq)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(qq)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Oq.c.Now
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
      setTransformMatrix(qq, Eq, gq, Yq) {
        this._multiviewSceneUboIsActive = !!(gq && Yq && this._multiviewSceneUbo), this._viewUpdateFlag === qq.updateFlag && this._projectionUpdateFlag === Eq.updateFlag || (this._viewUpdateFlag = qq.updateFlag, this._projectionUpdateFlag = Eq.updateFlag, this._viewMatrix = qq, this._projectionMatrix = Eq, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new uq.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Xq.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Xq.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(gq, Yq) : this._sceneUbo.useUbo && (this._sceneUbo.Eqq("viewProjection", this._transformMatrix), this._sceneUbo.Eqq("view", this._viewMatrix), this._sceneUbo.Eqq("projection", this._projectionMatrix), this._sceneUbo.Eqq("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(qq, Eq) {
        const gq = "boolean" === typeof Eq ? Eq : Eq?.trackUBOsInFrame,
          Yq = new Wq.b(this._engine, void 0, !1, qq ?? "PV", void 0, gq);
        return Yq.addUniform("viewProjection", 16), Yq.addUniform("view", 16), Yq.addUniform("projection", 16), Yq.addUniform("vEyePosition", 4), Yq.addUniform("inverseProjection", 16), Yq
      }
      setSceneUniformBuffer(qq) {
        this._sceneUbo = qq, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : uq.q.ZeroReadOnly
      }
      getUniqueId() {
        return wq.UniqueId
      }
      ZYq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(qq), qq._resyncLightSources(), qq.parent || qq._addToSceneRootNodes(), lq.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(qq)
          })), Eq)) {
          const Eq = qq.getChildMeshes();
          for (const qq of Eq) this.ZYq(qq)
        }
      }
      Wk(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this.meshes.indexOf(qq);
        if (-1 !== gq && (this.meshes.splice(gq, 1), qq.parent || qq._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(qq), this.onMeshRemovedObservable.notifyObservers(qq), Eq) {
          const Eq = qq.getChildMeshes();
          for (const qq of Eq) this.Wk(qq)
        }
        return gq
      }
      addTransformNode(qq) {
        this._blockEntityCollection || qq.ZJ() === this && -1 !== qq._indexInSceneTransformNodesArray || (qq._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(qq), qq.parent || qq._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(qq))
      }
      removeTransformNode(qq) {
        const Eq = qq._indexInSceneTransformNodesArray;
        if (-1 !== Eq) {
          if (Eq !== this.transformNodes.length - 1) {
            const qq = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Eq] = qq, qq._indexInSceneTransformNodesArray = Eq
          }
          qq._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), qq.parent || qq._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(qq), Eq
      }
      removeSkeleton(qq) {
        const Eq = this.skeletons.indexOf(qq);
        return -1 !== Eq && (this.skeletons.splice(Eq, 1), this.onSkeletonRemovedObservable.notifyObservers(qq), this._executeActiveContainerCleanup(this._activeSkeletons)), Eq
      }
      removeMorphTargetManager(qq) {
        const Eq = this.morphTargetManagers.indexOf(qq);
        return -1 !== Eq && this.morphTargetManagers.splice(Eq, 1), Eq
      }
      removeLight(qq) {
        const Eq = this.lights.indexOf(qq);
        if (-1 !== Eq) {
          for (const Eq of this.meshes) Eq._removeLightSource(qq, !1);
          this.lights.splice(Eq, 1), this.sortLightsByPriority(), qq.parent || qq._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(qq)
        }
        return Eq
      }
      removeCamera(qq) {
        const Eq = this.cameras.indexOf(qq);
        if (-1 !== Eq && (this.cameras.splice(Eq, 1), qq.parent || qq._removeFromSceneRootNodes()), this.activeCameras) {
          const Eq = this.activeCameras.indexOf(qq); - 1 !== Eq && this.activeCameras.splice(Eq, 1)
        }
        return this.activeCamera === qq && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(qq), Eq
      }
      removeParticleSystem(qq) {
        const Eq = this.xZ.indexOf(qq);
        return -1 !== Eq && (this.xZ.splice(Eq, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(qq), Eq
      }
      removeAnimation(qq) {
        const Eq = this.animations.indexOf(qq);
        return -1 !== Eq && this.animations.splice(Eq, 1), Eq
      }
      stopAnimation(qq, Eq, gq) {}
      removeAnimationGroup(qq) {
        const Eq = this.animationGroups.indexOf(qq);
        return -1 !== Eq && this.animationGroups.splice(Eq, 1), this.onAnimationGroupRemovedObservable.notifyObservers(qq), Eq
      }
      removeMultiMaterial(qq) {
        const Eq = this.multiMaterials.indexOf(qq);
        return -1 !== Eq && this.multiMaterials.splice(Eq, 1), this.onMultiMaterialRemovedObservable.notifyObservers(qq), Eq
      }
      removeMaterial(qq) {
        const Eq = qq._indexInSceneMaterialArray;
        if (-1 !== Eq && Eq < this.materials.length) {
          if (Eq !== this.materials.length - 1) {
            const qq = this.materials[this.materials.length - 1];
            this.materials[Eq] = qq, qq._indexInSceneMaterialArray = Eq
          }
          qq._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(qq), Eq
      }
      removeActionManager(qq) {
        const Eq = this.actionManagers.indexOf(qq);
        return -1 !== Eq && this.actionManagers.splice(Eq, 1), Eq
      }
      removeTexture(qq) {
        const Eq = this.textures.indexOf(qq);
        return -1 !== Eq && this.textures.splice(Eq, 1), this.onTextureRemovedObservable.notifyObservers(qq), Eq
      }
      removeFrameGraph(qq) {
        const Eq = this.frameGraphs.indexOf(qq);
        return -1 !== Eq && this.frameGraphs.splice(Eq, 1), this.onFrameGraphRemovedObservable.notifyObservers(qq), Eq
      }
      removeObjectRenderer(qq) {
        const Eq = this.objectRenderers.indexOf(qq);
        return -1 !== Eq && this.objectRenderers.splice(Eq, 1), this.onObjectRendererRemovedObservable.notifyObservers(qq), Eq
      }
      removePostProcess(qq) {
        const Eq = this.postProcesses.indexOf(qq);
        return -1 !== Eq && this.postProcesses.splice(Eq, 1), this.onPostProcessRemovedObservable.notifyObservers(qq), Eq
      }
      removeEffectLayer(qq) {
        const Eq = this.effectLayers.indexOf(qq);
        return -1 !== Eq && this.effectLayers.splice(Eq, 1), this.onEffectLayerRemovedObservable.notifyObservers(qq), Eq
      }
      addLight(qq) {
        if (!this._blockEntityCollection) {
          this.lights.push(qq), this.sortLightsByPriority(), qq.parent || qq._addToSceneRootNodes();
          for (const Eq of this.meshes) - 1 === Eq.lightSources.indexOf(qq) && (Eq.lightSources.push(qq), Eq._resyncLightSources());
          lq.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(qq)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Cq.c.CompareLightsPriority)
      }
      addCamera(qq) {
        this._blockEntityCollection || (this.cameras.push(qq), lq.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(qq)
        })), qq.parent || qq._addToSceneRootNodes())
      }
      addSkeleton(qq) {
        this._blockEntityCollection || (this.skeletons.push(qq), lq.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(qq)
        })))
      }
      addParticleSystem(qq) {
        this._blockEntityCollection || (this.xZ.push(qq), lq.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(qq)
        })))
      }
      addAnimation(qq) {
        this._blockEntityCollection || this.animations.push(qq)
      }
      addAnimationGroup(qq) {
        this._blockEntityCollection || (this.animationGroups.push(qq), lq.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(qq)
        })))
      }
      addMultiMaterial(qq) {
        this._blockEntityCollection || (this.multiMaterials.push(qq), lq.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(qq)
        })))
      }
      addMaterial(qq) {
        this._blockEntityCollection || qq.ZJ() === this && -1 !== qq._indexInSceneMaterialArray || (qq._indexInSceneMaterialArray = this.materials.length, this.materials.push(qq), lq.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(qq)
        })))
      }
      addMorphTargetManager(qq) {
        this._blockEntityCollection || this.morphTargetManagers.push(qq)
      }
      addGeometry(qq) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[qq.uniqueId] = this.geometries.length), this.geometries.push(qq))
      }
      addActionManager(qq) {
        this.actionManagers.push(qq)
      }
      addTexture(qq) {
        this._blockEntityCollection || (this.textures.push(qq), this.onNewTextureAddedObservable.notifyObservers(qq))
      }
      addFrameGraph(qq) {
        this.frameGraphs.push(qq), lq.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(qq)
        }))
      }
      addObjectRenderer(qq) {
        this.objectRenderers.push(qq), lq.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(qq)
        }))
      }
      addPostProcess(qq) {
        this._blockEntityCollection || (this.postProcesses.push(qq), lq.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(qq)
        })))
      }
      addEffectLayer(qq) {
        this._blockEntityCollection || (this.effectLayers.push(qq), lq.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(qq)
        })))
      }
      switchActiveCamera(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = qq, Eq && qq.attachControl())
      }
      setActiveCameraById(qq) {
        const Eq = this.getCameraById(qq);
        return Eq ? (this.activeCamera = Eq, Eq) : null
      }
      setActiveCameraByName(qq) {
        const Eq = this.getCameraByName(qq);
        return Eq ? (this.activeCamera = Eq, Eq) : null
      }
      getAnimationGroupByName(qq) {
        for (let Eq = 0; Eq < this.animationGroups.length; Eq++)
          if (this.animationGroups[Eq].name === qq) return this.animationGroups[Eq];
        return null
      }
      _getMaterial(qq, Eq) {
        for (let gq = 0; gq < this.materials.length; gq++) {
          const qq = this.materials[gq];
          if (Eq(qq)) return qq
        }
        if (qq)
          for (let gq = 0; gq < this.multiMaterials.length; gq++) {
            const qq = this.multiMaterials[gq];
            if (Eq(qq)) return qq
          }
        return null
      }
      getMaterialByUniqueID(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(qq, Eq)
      }
      getMaterialByUniqueId(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Eq, (Eq => Eq.uniqueId === qq))
      }
      getMaterialById(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Eq, (Eq => Eq.id === qq))
      }
      getMaterialByName(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Eq, (Eq => Eq.name === qq))
      }
      getLastMaterialById(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let gq = this.materials.length - 1; gq >= 0; gq--)
          if (this.materials[gq].id === qq) return this.materials[gq];
        if (Eq)
          for (let gq = this.multiMaterials.length - 1; gq >= 0; gq--)
            if (this.multiMaterials[gq].id === qq) return this.multiMaterials[gq];
        return null
      }
      getTextureByUniqueId(qq) {
        for (let Eq = 0; Eq < this.textures.length; Eq++)
          if (this.textures[Eq].uniqueId === qq) return this.textures[Eq];
        return null
      }
      getTextureByName(qq) {
        for (let Eq = 0; Eq < this.textures.length; Eq++)
          if (this.textures[Eq].name === qq) return this.textures[Eq];
        return null
      }
      getCameraById(qq) {
        for (let Eq = 0; Eq < this.cameras.length; Eq++)
          if (this.cameras[Eq].id === qq) return this.cameras[Eq];
        return null
      }
      getCameraByUniqueId(qq) {
        for (let Eq = 0; Eq < this.cameras.length; Eq++)
          if (this.cameras[Eq].uniqueId === qq) return this.cameras[Eq];
        return null
      }
      getCameraByName(qq) {
        for (let Eq = 0; Eq < this.cameras.length; Eq++)
          if (this.cameras[Eq].name === qq) return this.cameras[Eq];
        return null
      }
      getBoneById(qq) {
        for (let Eq = 0; Eq < this.skeletons.length; Eq++) {
          const gq = this.skeletons[Eq];
          for (let Eq = 0; Eq < gq.bones.length; Eq++)
            if (gq.bones[Eq].id === qq) return gq.bones[Eq]
        }
        return null
      }
      getBoneByName(qq) {
        for (let Eq = 0; Eq < this.skeletons.length; Eq++) {
          const gq = this.skeletons[Eq];
          for (let Eq = 0; Eq < gq.bones.length; Eq++)
            if (gq.bones[Eq].name === qq) return gq.bones[Eq]
        }
        return null
      }
      getLightByName(qq) {
        for (let Eq = 0; Eq < this.lights.length; Eq++)
          if (this.lights[Eq].name === qq) return this.lights[Eq];
        return null
      }
      getLightById(qq) {
        for (let Eq = 0; Eq < this.lights.length; Eq++)
          if (this.lights[Eq].id === qq) return this.lights[Eq];
        return null
      }
      getLightByUniqueId(qq) {
        for (let Eq = 0; Eq < this.lights.length; Eq++)
          if (this.lights[Eq].uniqueId === qq) return this.lights[Eq];
        return null
      }
      getParticleSystemById(qq) {
        for (let Eq = 0; Eq < this.xZ.length; Eq++)
          if (this.xZ[Eq].id === qq) return this.xZ[Eq];
        return null
      }
      getGeometryById(qq) {
        for (let Eq = 0; Eq < this.geometries.length; Eq++)
          if (this.geometries[Eq].id === qq) return this.geometries[Eq];
        return null
      }
      _getGeometryByUniqueId(qq) {
        if (this._geometriesByUniqueId) {
          const Eq = this._geometriesByUniqueId[qq];
          if (void 0 !== Eq) return this.geometries[Eq]
        } else
          for (let Eq = 0; Eq < this.geometries.length; Eq++)
            if (this.geometries[Eq].uniqueId === qq) return this.geometries[Eq];
        return null
      }
      getFrameGraphByName(qq) {
        for (let Eq = 0; Eq < this.frameGraphs.length; Eq++)
          if (this.frameGraphs[Eq].name === qq) return this.frameGraphs[Eq];
        return null
      }
      pushGeometry(qq, Eq) {
        return !(!Eq && this._getGeometryByUniqueId(qq.uniqueId)) && (this.addGeometry(qq), lq.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(qq)
        })), !0)
      }
      removeGeometry(qq) {
        let Eq;
        if (this._geometriesByUniqueId) {
          if (Eq = this._geometriesByUniqueId[qq.uniqueId], void 0 === Eq) return !1
        } else if (Eq = this.geometries.indexOf(qq), Eq < 0) return !1;
        if (Eq !== this.geometries.length - 1) {
          const qq = this.geometries[this.geometries.length - 1];
          qq && (this.geometries[Eq] = qq, this._geometriesByUniqueId && (this._geometriesByUniqueId[qq.uniqueId] = Eq))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[qq.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(qq), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(qq) {
        for (let Eq = 0; Eq < this.meshes.length; Eq++)
          if (this.meshes[Eq].id === qq) return this.meshes[Eq];
        return null
      }
      getMeshesById(qq) {
        return this.meshes.filter((function(Eq) {
          return Eq.id === qq
        }))
      }
      getTransformNodeById(qq) {
        for (let Eq = 0; Eq < this.transformNodes.length; Eq++)
          if (this.transformNodes[Eq].id === qq) return this.transformNodes[Eq];
        return null
      }
      getTransformNodeByUniqueId(qq) {
        for (let Eq = 0; Eq < this.transformNodes.length; Eq++)
          if (this.transformNodes[Eq].uniqueId === qq) return this.transformNodes[Eq];
        return null
      }
      getTransformNodesById(qq) {
        return this.transformNodes.filter((function(Eq) {
          return Eq.id === qq
        }))
      }
      getMeshByUniqueId(qq) {
        for (let Eq = 0; Eq < this.meshes.length; Eq++)
          if (this.meshes[Eq].uniqueId === qq) return this.meshes[Eq];
        return null
      }
      getLastMeshById(qq) {
        for (let Eq = this.meshes.length - 1; Eq >= 0; Eq--)
          if (this.meshes[Eq].id === qq) return this.meshes[Eq];
        return null
      }
      getLastTransformNodeById(qq) {
        for (let Eq = this.transformNodes.length - 1; Eq >= 0; Eq--)
          if (this.transformNodes[Eq].id === qq) return this.transformNodes[Eq];
        return null
      }
      getLastEntryById(qq) {
        let Eq;
        for (Eq = this.meshes.length - 1; Eq >= 0; Eq--)
          if (this.meshes[Eq].id === qq) return this.meshes[Eq];
        for (Eq = this.transformNodes.length - 1; Eq >= 0; Eq--)
          if (this.transformNodes[Eq].id === qq) return this.transformNodes[Eq];
        for (Eq = this.cameras.length - 1; Eq >= 0; Eq--)
          if (this.cameras[Eq].id === qq) return this.cameras[Eq];
        for (Eq = this.lights.length - 1; Eq >= 0; Eq--)
          if (this.lights[Eq].id === qq) return this.lights[Eq];
        for (Eq = this.skeletons.length - 1; Eq >= 0; Eq--) {
          const gq = this.skeletons[Eq];
          for (let Eq = gq.bones.length - 1; Eq >= 0; Eq--)
            if (gq.bones[Eq].id === qq) return gq.bones[Eq]
        }
        return null
      }
      getNodeById(qq) {
        const Eq = this.getMeshById(qq);
        if (Eq) return Eq;
        const gq = this.getTransformNodeById(qq);
        if (gq) return gq;
        const Yq = this.getLightById(qq);
        if (Yq) return Yq;
        const lq = this.getCameraById(qq);
        if (lq) return lq;
        const Oq = this.getBoneById(qq);
        return Oq || null
      }
      getNodeByName(qq) {
        const Eq = this.getMeshByName(qq);
        if (Eq) return Eq;
        const gq = this.getTransformNodeByName(qq);
        if (gq) return gq;
        const Yq = this.getLightByName(qq);
        if (Yq) return Yq;
        const lq = this.getCameraByName(qq);
        if (lq) return lq;
        const Oq = this.getBoneByName(qq);
        return Oq || null
      }
      getMeshByName(qq) {
        for (let Eq = 0; Eq < this.meshes.length; Eq++)
          if (this.meshes[Eq].name === qq) return this.meshes[Eq];
        return null
      }
      getTransformNodeByName(qq) {
        for (let Eq = 0; Eq < this.transformNodes.length; Eq++)
          if (this.transformNodes[Eq].name === qq) return this.transformNodes[Eq];
        return null
      }
      getLastSkeletonById(qq) {
        for (let Eq = this.skeletons.length - 1; Eq >= 0; Eq--)
          if (this.skeletons[Eq].id === qq) return this.skeletons[Eq];
        return null
      }
      getSkeletonByUniqueId(qq) {
        for (let Eq = 0; Eq < this.skeletons.length; Eq++)
          if (this.skeletons[Eq].uniqueId === qq) return this.skeletons[Eq];
        return null
      }
      getSkeletonById(qq) {
        for (let Eq = 0; Eq < this.skeletons.length; Eq++)
          if (this.skeletons[Eq].id === qq) return this.skeletons[Eq];
        return null
      }
      getSkeletonByName(qq) {
        for (let Eq = 0; Eq < this.skeletons.length; Eq++)
          if (this.skeletons[Eq].name === qq) return this.skeletons[Eq];
        return null
      }
      getMorphTargetManagerById(qq) {
        for (let Eq = 0; Eq < this.morphTargetManagers.length; Eq++)
          if (this.morphTargetManagers[Eq].uniqueId === qq) return this.morphTargetManagers[Eq];
        return null
      }
      getMorphTargetById(qq) {
        for (let Eq = 0; Eq < this.morphTargetManagers.length; ++Eq) {
          const gq = this.morphTargetManagers[Eq];
          for (let Eq = 0; Eq < gq.numTargets; ++Eq) {
            const Yq = gq.getTarget(Eq);
            if (Yq.id === qq) return Yq
          }
        }
        return null
      }
      getMorphTargetByName(qq) {
        for (let Eq = 0; Eq < this.morphTargetManagers.length; ++Eq) {
          const gq = this.morphTargetManagers[Eq];
          for (let Eq = 0; Eq < gq.numTargets; ++Eq) {
            const Yq = gq.getTarget(Eq);
            if (Yq.name === qq) return Yq
          }
        }
        return null
      }
      getPostProcessByName(qq) {
        for (let Eq = 0; Eq < this.postProcesses.length; ++Eq) {
          const gq = this.postProcesses[Eq];
          if (gq.name === qq) return gq
        }
        return null
      }
      isActiveMesh(qq) {
        return -1 !== this._activeMeshes.indexOf(qq)
      }
      get uid() {
        return this._uid || (this._uid = Yq.f.RandomId()), this._uid
      }
      addExternalData(qq, Eq) {
        return this._externalData || (this._externalData = new Aq), this._externalData.add(qq, Eq)
      }
      getExternalData(qq) {
        return this._externalData ? this._externalData.get(qq) : null
      }
      getOrAddExternalDataWithFactory(qq, Eq) {
        return this._externalData || (this._externalData = new Aq), this._externalData.getOrAddWithFactory(qq, Eq)
      }
      removeExternalData(qq) {
        return this._externalData.remove(qq)
      }
      _evaluateSubMesh(qq, Eq, gq, Yq) {
        if (Yq || qq.isInFrustum(this._frustumPlanes)) {
          for (let Yq = 0, lq = this._evaluateSubMeshStage; Yq < lq.length; Yq++) {
            lq[Yq].action(Eq, qq)
          }
          const gq = qq.da();
          null !== gq && void 0 !== gq && (gq.hasRenderTargetTextures && null != gq.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(gq) && (this._processedMaterials.push(gq), this._materialsRenderTargets.concatWithNoDuplicate(gq.getRenderTargetTextures())), this._renderingManager.dispatch(qq, Eq, gq))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(qq) {
        this._preventFreeActiveMeshesAndRenderingGroups !== qq && (qq && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = qq)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let qq = 0; qq < this.activeCameras.length; qq++) {
            const Eq = this.activeCameras[qq];
            Eq && Eq._activeMeshes && Eq._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let qq = 0; qq < this.textures.length; qq++) {
            const Eq = this.textures[qq];
            Eq && Eq.renderList && Eq.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const mq = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const qq of mq) qq.objectRenderer._freezeActiveMeshes(Yq);
          return this._freezeActiveMeshesCancel = (0, lq.e)((() => {
            let qq = !0,
              Eq = !0;
            for (const gq of mq) qq && (qq = gq.objectRenderer._isFrozen), Eq && (Eq = null !== gq.objectRenderer._freezeActiveMeshesCancel);
            if (qq) return !0;
            if (!Eq) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Oq, this._skipEvaluateActiveMeshesCompletely = qq, Eq?.()
          }), ((qq, Eq) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Eq) {
              const Eq = "Scene: Timeout while waiting for meshes to be frozen.";
              gq ? gq(Eq) : (qg.b.Error(Eq), qq && qg.b.Error(qq))
            } else {
              const Eq = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              gq ? gq(Eq) : (qg.b.Error(Eq), qq && (qg.b.Error(qq), qq.stack && qg.b.Error(qq.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Oq, this._skipEvaluateActiveMeshesCompletely = qq, Yq)
              for (let qq = 0; qq < this._activeMeshes.length; qq++) this._activeMeshes.data[qq]._freeze();
            Eq && Eq()
          } else gq && gq("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let qq = 0; qq < this.meshes.length; qq++) {
          const Eq = this.meshes[qq];
          Eq._internalAbstractMeshDataInfo && (Eq._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const qq = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Eq of qq) Eq.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let qq = 0; qq < this._activeMeshes.length; qq++) this._activeMeshes.data[qq]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(qq) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => qq.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const qq = this._activeMeshes.length;
            for (let Eq = 0; Eq < qq; Eq++) {
              this._activeMeshes.data[Eq].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const qq = this._activeParticleSystems.length;
            for (let Eq = 0; Eq < qq; Eq++) this._activeParticleSystems.data[Eq].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let lq = 0, Oq = this._beforeEvaluateActiveMeshStage; lq < Oq.length; lq++) {
          Oq[lq].action()
        }
        const qq = this.getActiveMeshCandidates(),
          Eq = qq.length,
          gq = Fq.b.Enabled,
          Yq = this.customLODSelector;
        for (let lq = 0; lq < Eq; lq++) {
          const Eq = qq.data[lq],
            Oq = !Yq && !Eq.GJ && !Eq._internalMeshDataInfo?._LODLevels.length;
          let mq, xq;
          if ((Oq || (mq = Eq._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), mq ? mq[1] = -1 : (mq = [Eq, -1], Eq._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, mq))), !Eq.isBlocked) && (gq && this._totalVertices.addCount(Eq.getTotalVertices(), !1), Eq.isReady() && Eq.isEnabled() && !Eq.rc.hasAZeroComponent)) {
            if (Eq.computeWorldMatrix(), Eq.actionManager && Eq.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Eq), Oq) xq = Eq;
            else if (xq = Yq ? Yq(Eq, this.activeCamera) : Eq.getLOD(this.activeCamera), mq[0] = xq, mq[1] = this._frameId, void 0 === xq || null === xq) continue;
            if (xq !== Eq && 0 !== xq.billboardMode && xq.computeWorldMatrix(), Eq._preActivate(), Eq.isVisible && Eq.visibility > 0 && 0 !== (Eq.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Eq.Wa || Eq.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Eq), this.activeCamera._activeMeshes.push(Eq), xq !== Eq && xq._activate(this._renderId, !1);
              for (let qq = 0, gq = this._preActiveMeshStage; qq < gq.length; qq++) {
                gq[qq].action(Eq)
              }
              Eq._activate(this._renderId, !1) && (Eq.GJ ? Eq._internalAbstractMeshDataInfo._actAsRegularMesh && (xq = Eq) : xq._internalAbstractMeshDataInfo._onlyForInstances = !1, xq._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Eq, xq)), Eq._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let qq = 0; qq < this.xZ.length; qq++) {
            const Eq = this.xZ[qq];
            if (!Eq.isStarted() || !Eq.emitter) continue;
            const gq = Eq.emitter;
            gq.position && !gq.isEnabled() || (this._activeParticleSystems.push(Eq), Eq.animate(), this._renderingManager.dispatchParticles(Eq))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(qq) {
        this._skeletonsEnabled && qq.skeleton && (this._activeSkeletons.pushNoDuplicate(qq.skeleton) && (qq.skeleton.prepare(), this._activeBones.addCount(qq.skeleton.bones.length, !1)), qq.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(qq) && this.frameGraph && qq.applySkeleton(qq.skeleton))
      }
      _activeMesh(qq, Eq) {
        this._prepareSkeleton(Eq);
        let gq = qq.olq || qq.GJ || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Eq.Wa;
        if (Eq && Eq.fn && Eq.fn.length > 0) {
          const Yq = this.getActiveSubMeshCandidates(Eq),
            lq = Yq.length;
          gq = gq || 1 === lq;
          for (let Oq = 0; Oq < lq; Oq++) {
            const lq = Yq.data[Oq];
            this._evaluateSubMesh(lq, Eq, qq, gq)
          }
        }
      }
      updateTransformMatrix(qq) {
        const Eq = this.activeCamera;
        if (Eq)
          if (Eq._renderingMultiview) {
            const gq = Eq._rigCameras[0],
              Yq = Eq._rigCameras[1];
            this.setTransformMatrix(gq.getViewMatrix(), gq.getProjectionMatrix(qq), Yq.getViewMatrix(), Yq.getProjectionMatrix(qq))
          } else this.setTransformMatrix(Eq.getViewMatrix(), Eq.getProjectionMatrix(qq))
      }
      _bindFrameBuffer(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (qq && qq._multiviewTexture ? qq._multiviewTexture._bindFrameBuffer() : qq && qq.outputRenderTarget ? qq.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Eq && this._clearFrameBuffer(qq)
      }
      _clearFrameBuffer(qq) {
        if (qq && qq._multiviewTexture);
        else if (qq && qq.outputRenderTarget && !qq._renderingMultiview) {
          const Eq = qq.outputRenderTarget;
          Eq.onClearObservable.hasObservers() ? Eq.onClearObservable.notifyObservers(this._engine) : Eq.skipInitialClear || qq.isRightCamera || (this.autoClear && this._engine.clear(Eq.clearColor || this._clearColor, !Eq._cleared, !0, !0), Eq._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (qq && qq._skipRendering) return;
        const lq = this._engine;
        if (this._activeCamera = qq, !this.activeCamera) throw new Error("Active camera not set");
        if (lq.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && gq) {
          let Eq = !0;
          qq._renderingMultiview && qq.outputRenderTarget && (Eq = qq.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, qq.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), qq._renderingMultiview && qq.outputRenderTarget && (qq.outputRenderTarget.skipInitialClear = Eq)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = qq.outputRenderTarget?.renderPassId ?? qq.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Yq = 0; Yq < this._softwareSkinnedMeshes.length; Yq++) {
          const qq = this._softwareSkinnedMeshes.data[Yq];
          qq.applySkeleton(qq.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), qq.customRenderTargets && qq.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(qq.customRenderTargets), Eq && Eq.customRenderTargets && Eq.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Eq.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Yq = 0, xq = this._gatherActiveCameraRenderTargetsStage; Yq < xq.length; Yq++) {
          xq[Yq].action(this._renderTargets)
        }
        let Oq = !1;
        if (this.renderTargetsEnabled) {
          let qq;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Yq.f.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Eq = this.getBoundingBoxRenderer?.();
            for (let gq = 0; gq < this._renderTargets.length; gq++) {
              const Yq = this._renderTargets.data[gq];
              if (Yq._shouldRender()) {
                this._renderId++;
                const gq = Yq.activeCamera && Yq.activeCamera !== this.activeCamera;
                Eq && !qq && (qq = Eq.renderList.length > 0 ? Eq.renderList.data.slice() : [], qq.length = Eq.renderList.length), Yq.render(gq, this.dumpNextRenderTargets), Oq = !0
              }
            }
            Eq && qq && (Eq.renderList.data = qq, Eq.renderList.length = qq.length), Yq.f.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Eq = this.getBoundingBoxRenderer?.();
            Eq && !qq && (qq = Eq.renderList.length > 0 ? Eq.renderList.data.slice() : [], qq.length = Eq.renderList.length);
            for (let qq = 0, gq = this._cameraDrawRenderTargetStage; qq < gq.length; qq++) {
              Oq = gq[qq].action(this.activeCamera) || Oq
            }
            Eq && qq && (Eq.renderList.data = qq, Eq.renderList.length = qq.length)
          }
          this._intermediateRendering = !1
        }
        Oq && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || qq._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Yq = 0, xq = this._beforeCameraDrawStage; Yq < xq.length; Yq++) {
          xq[Yq].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const mq = lq.snapshotRendering && 1 === lq.snapshotRenderingMode;
        mq && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !mq), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Yq = 0, xq = this._afterCameraDrawStage; Yq < xq.length; Yq++) {
          xq[Yq].action(this.activeCamera)
        }
        if (this.postProcessManager && !qq._multiviewTexture) {
          const Eq = qq.outputRenderTarget ? qq.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(qq.isIntermediate, Eq)
        }
        for (let Yq = 0, xq = this._afterCameraPostProcessStage; Yq < xq.length; Yq++) {
          xq[Yq].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === qq.cameraRigMode || qq._renderingMultiview) return qq._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(qq, void 0, Eq), void this.onAfterRenderCameraObservable.notifyObservers(qq);
        if (qq._useMultiviewToSingleView) this._renderMultiviewToSingleView(qq);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(qq);
          for (let Eq = 0; Eq < qq._rigCameras.length; Eq++) this._renderForCamera(qq._rigCameras[Eq], qq)
        }
        this._activeCamera = qq, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(qq)
      }
      _checkIntersections() {
        for (let qq = 0; qq < this._meshesForIntersections.length; qq++) {
          const Eq = this._meshesForIntersections.data[qq];
          if (Eq.actionManager)
            for (let qq = 0; Eq.actionManager && qq < Eq.actionManager.actions.length; qq++) {
              const gq = Eq.actionManager.actions[qq];
              if (12 === gq.trigger || 13 === gq.trigger) {
                const qq = gq.getTriggerParameter(),
                  Yq = qq.mesh ? qq.mesh : qq,
                  lq = Yq.Nlq(Eq, qq.usePreciseIntersection),
                  Oq = Eq._intersectionsInProgress.indexOf(Yq);
                lq && -1 === Oq ? 12 === gq.trigger ? (gq._executeCurrent(aq.CreateNew(Eq, void 0, Yq)), Eq._intersectionsInProgress.push(Yq)) : 13 === gq.trigger && Eq._intersectionsInProgress.push(Yq) : !lq && Oq > -1 && (13 === gq.trigger && gq._executeCurrent(aq.CreateNew(Eq, void 0, Yq)), Eq.actionManager.hasSpecificTrigger(13, (qq => {
                  const Eq = qq.mesh ? qq.mesh : qq;
                  return Yq === Eq
                })) && 13 !== gq.trigger || Eq._intersectionsInProgress.splice(Oq, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(qq) {}
      _animate(qq) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let qq = Math.max(Og.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Og.MaxDeltaTime)) + this._timeAccumulator;
          const Eq = this._engine.getTimeStep(),
            gq = 1e3 / Eq / 1e3;
          let Yq = 0;
          const lq = this._engine.getLockstepMaxSteps();
          let Oq = Math.floor(qq / Eq);
          for (Oq = Math.min(Oq, lq); qq > 0 && Yq < Oq;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Eq * gq, this._animate(Eq), this.onAfterAnimationsObservable.notifyObservers(this), this.JF && this._advancePhysicsEngineStep(Eq), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Yq++, qq -= Eq;
          this._timeAccumulator = qq < 0 ? 0 : qq
        } else {
          const qq = this.useConstantAnimationDeltaTime ? 16 : Math.max(Og.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Og.MaxDeltaTime));
          this._animationRatio = .06 * qq, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.JF && this._advancePhysicsEngineStep(qq)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(qq) {
        if (qq?.outputRenderTarget && !qq?.isRigCamera && (qq.outputRenderTarget._cleared = !1), qq?.rigCameras?.length)
          for (let Eq = 0; Eq < qq.rigCameras.length; ++Eq) {
            const gq = qq.rigCameras[Eq].outputRenderTarget;
            gq && (gq._cleared = !1)
          }
      }
      resetDrawCache(qq) {
        if (this.meshes)
          for (const Eq of this.meshes) Eq.resetDrawCache(qq)
      }
      _renderWithFrameGraph() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, qq)
          for (const gq of this.cameras)
            if (gq.update(), 0 !== gq.cameraRigMode)
              for (let qq = 0; qq < gq._rigCameras.length; qq++) gq._rigCameras[qq].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Eq)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(qq) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Eq = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Yq.f.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let qq = 0; qq < this._renderTargets.length; qq++) {
            const gq = this._renderTargets.data[qq],
              Yq = gq.activeCamera || Eq;
            this._renderRenderTarget(gq, Yq, !0, this.dumpNextRenderTargets)
          }
          Yq.f.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let gq = 0, Yq = this._beforeClearStage; gq < Yq.length; gq++) {
          Yq[gq].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Eq = this.getActiveMeshCandidates(),
            gq = Eq.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let qq = 0; qq < gq; qq++) {
                const gq = Eq.data[qq];
                gq._internalAbstractMeshDataInfo._wasActiveLastFrame && gq.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const qq = this._activeParticleSystems.length;
              for (let Eq = 0; Eq < qq; Eq++) this._activeParticleSystems.data[Eq].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Yq = 0; Yq < gq; Yq++) {
              const gq = Eq.data[Yq];
              gq._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, gq.isBlocked || (this._totalVertices.addCount(gq.getTotalVertices(), !1), gq.isReady() && gq.isEnabled() && !gq.rc.hasAZeroComponent && (gq.computeWorldMatrix(qq), gq.actionManager && gq.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(gq)))
            }
            if (this.particlesEnabled)
              for (let qq = 0; qq < this.xZ.length; qq++) {
                const Eq = this.xZ[qq];
                if (!Eq.isStarted() || !Eq.emitter) continue;
                const gq = Eq.emitter;
                gq.position && !gq.isEnabled() || (this._activeParticleSystems.push(Eq), Eq.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, qq._shouldRender()) {
          if (this._renderId++, this.activeCamera = Eq, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), qq.render(gq, Yq)
        }
        this._intermediateRendering = !1
      }
      render() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.bM) return;
        const gq = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(qq, Eq)
        } finally {
          this._renderingMeshEvaluationDepth = gq
        }
      }
      _renderFrame(qq, Eq) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), dq.e.ZJ = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const gq of this.activeCameras) this._checkCameraRenderTarget(gq);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Eq || this.animate();
        for (let gq = 0, Yq = this._beforeCameraUpdateStage; gq < Yq.length; gq++) {
          Yq[gq].action()
        }
        if (qq)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let gq = 0; gq < this.activeCameras.length; gq++) {
              const qq = this.activeCameras[gq];
              if (qq.update(), 0 !== qq.cameraRigMode)
                for (let Eq = 0; Eq < qq._rigCameras.length; Eq++) qq._rigCameras[Eq].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let gq = 0; gq < this.activeCamera._rigCameras.length; gq++) this.activeCamera._rigCameras[gq].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(qq, Eq);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const qq = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Yq.f.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Eq = 0; Eq < this.customRenderTargets.length; Eq++) {
              const gq = this.customRenderTargets[Eq],
                Yq = gq.activeCamera || this.activeCamera;
              this._renderRenderTarget(gq, Yq, qq !== Yq, this.dumpNextRenderTargets)
            }
            Yq.f.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = qq?.renderPassId ?? 0, this.activeCamera = qq, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Eq = 0, gq = this._beforeClearStage; Eq < gq.length; Eq++) {
            gq[Eq].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Eq = 0, gq = this._gatherRenderTargetsStage; Eq < gq.length; Eq++) {
            gq[Eq].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Eq = 0; Eq < this.activeCameras.length; Eq++) this._processSubCameras(this.activeCameras[Eq], Eq > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let gq = 0, Yq = this._afterRenderStage; gq < Yq.length; gq++) {
          Yq[gq].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let qq = 0; qq < this._toBeDisposed.length; qq++) {
            const Eq = this._toBeDisposed[qq];
            Eq && Eq.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let qq = 0; qq < this.materials.length; qq++) this.materials[qq].freeze()
      }
      unfreezeMaterials() {
        for (let qq = 0; qq < this.materials.length; qq++) this.materials[qq].unfreeze()
      }
      dispose() {
        if (this.bM) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Qq.b)(this.stopAllAnimations)) {
          for (const qq of this._activeAnimatables) qq.onAnimationEndObservable.clear(), qq.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const qq = this._activeRequests.slice();
        for (const Oq of qq) Oq.abort();
        this._activeRequests.length = 0;
        try {
          this.MJ.notifyObservers(this)
        } catch (lq) {
          qg.b.Error("An error occurred while calling onDisposeObservable!", lq)
        }
        this.detachControl();
        const Eq = this._engine.getInputElement?.();
        if (Eq)
          for (let Oq = 0; Oq < this.cameras.length; Oq++) this.cameras[Oq].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (qq => qq.dispose(!0))), this._disposeList(this.transformNodes, (qq => qq.dispose(!0)));
        const gq = this.cameras;
        this._disposeList(gq), this._disposeList(this.xZ), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Yq = this._engine.scenes.indexOf(this);
        if (Yq > -1 && this._engine.scenes.splice(Yq, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, dq.l)(), Pq.b._LastCreatedScene === this) {
          Pq.b._LastCreatedScene = null;
          let qq = Pq.b.Instances.length - 1;
          for (; qq >= 0;) {
            const Eq = Pq.b.Instances[qq];
            if (Eq.scenes.length > 0) {
              Pq.b._LastCreatedScene = Eq.scenes[this._engine.scenes.length - 1];
              break
            }
            qq--
          }
        }
        Yq = this._engine._virtualScenes.indexOf(this), Yq > -1 && this._engine._virtualScenes.splice(Yq, 1), this._engine.wipeCaches(!0), this.MJ.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(qq, Eq) {
        const gq = qq.slice(0);
        Eq = Eq ?? (qq => qq.dispose());
        for (const Yq of gq) Eq(Yq);
        qq.length = 0
      }
      get bM() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let qq = 0; qq < this.meshes.length; qq++) {
          const Eq = this.meshes[qq].geometry;
          Eq && Eq.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const qq of this.textures) {
          qq._buffer && (qq._buffer = null)
        }
      }
      getWorldExtends(qq) {
        const Eq = new uq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          gq = new uq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        qq = qq || (() => !0);
        const Yq = this.meshes.filter(qq);
        for (const lq of Yq) {
          if (lq.computeWorldMatrix(!0), !lq.fn || 0 === lq.fn.length || lq.infiniteDistance) continue;
          const qq = lq.yR(),
            Yq = qq.boundingBox.minimumWorld,
            Oq = qq.boundingBox.maximumWorld;
          uq.q.CheckExtends(Yq, Eq, gq), uq.q.CheckExtends(Oq, Eq, gq)
        }
        return Eq.x === Number.MAX_VALUE ? {
          min: uq.q.Zero(),
          max: uq.q.Zero()
        } : {
          min: Eq,
          max: gq
        }
      }
      createPickingRay(qq, Eq, gq, Yq) {
        throw (0, Qq.m)("Ray")
      }
      createPickingRayToRef(qq, Eq, gq, Yq, lq) {
        throw (0, Qq.m)("Ray")
      }
      createPickingRayInCameraSpace(qq, Eq, gq) {
        throw (0, Qq.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(qq, Eq, gq, Yq) {
        throw (0, Qq.m)("Ray")
      }
      zW(qq, Eq, gq, Yq, lq, Oq) {
        const mq = (0, Qq.m)("Ray", !0);
        return mq && qg.b.Warn(mq), new Nq.d
      }
      pickWithBoundingInfo(qq, Eq, gq, Yq, lq) {
        const Oq = (0, Qq.m)("Ray", !0);
        return Oq && qg.b.Warn(Oq), new Nq.d
      }
      pickWithRay(qq, Eq, gq, Yq) {
        throw (0, Qq.m)("Ray")
      }
      multiPick(qq, Eq, gq, Yq, lq) {
        throw (0, Qq.m)("Ray")
      }
      multiPickWithRay(qq, Eq, gq) {
        throw (0, Qq.m)("Ray")
      }
      setPointerOverMesh(qq, Eq, gq) {
        this._inputManager.setPointerOverMesh(qq, Eq, gq)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const qq of this.geometries) qq._rebuild();
        for (const qq of this.meshes) qq._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const qq of this._components) qq.rebuild();
        for (const qq of this.xZ) qq.rebuild();
        if (this.spriteManagers)
          for (const qq of this.spriteManagers) qq.rebuild()
      }
      _rebuildTextures() {
        for (const qq of this.textures) qq._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(qq, Eq, gq) {
        if (void 0 === Eq) return qq;
        const Yq = [];
        for (const lq in qq) {
          const Oq = qq[lq];
          cq.b && cq.b.MatchesQuery(Oq, Eq) && (!gq || gq(Oq)) && Yq.push(Oq)
        }
        return Yq
      }
      getMeshesByTags(qq, Eq) {
        return this._getByTags(this.meshes, qq, Eq)
      }
      getCamerasByTags(qq, Eq) {
        return this._getByTags(this.cameras, qq, Eq)
      }
      getLightsByTags(qq, Eq) {
        return this._getByTags(this.lights, qq, Eq)
      }
      getMaterialByTags(qq, Eq) {
        return this._getByTags(this.materials, qq, Eq).concat(this._getByTags(this.multiMaterials, qq, Eq))
      }
      getTransformNodesByTags(qq, Eq) {
        return this._getByTags(this.transformNodes, qq, Eq)
      }
      setRenderingOrder(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(qq, Eq, gq, Yq)
      }
      setRenderingAutoClearDepthStencil(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(qq, Eq, gq, Yq)
      }
      getAutoClearDepthStencilSetup(qq) {
        return this._renderingManager.getAutoClearDepthStencilSetup(qq)
      }
      _forceBlockMaterialDirtyMechanism(qq) {
        this._blockMaterialDirtyMechanism = qq
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(qq) {
        this._blockMaterialDirtyMechanism !== qq && (this._blockMaterialDirtyMechanism = qq, qq || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(qq, Eq) {
        if (!this._blockMaterialDirtyMechanism)
          for (const gq of this.materials) Eq && !Eq(gq) || gq.xgq(qq)
      }
      _loadFile(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = (0, Kq.u)(qq, Eq, gq, Yq ? this.offlineProvider : void 0, lq, Oq, mq);
        return this._activeRequests.push(xq), xq.onCompleteObservable.add((qq => {
          this._activeRequests.splice(this._activeRequests.indexOf(qq), 1)
        })), xq
      }
      async _loadFileAsync(qq, Eq, gq, Yq, lq) {
        return await new Promise(((Oq, mq) => {
          this._loadFile(qq, (qq => {
            Oq(qq)
          }), Eq, gq, Yq, ((qq, Eq) => {
            mq(Eq)
          }), lq)
        }))
      }
      async _loadDelayedFileAsync(qq, Eq, gq) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Yq = `${qq}|${Eq?"binary":"string"}`;
        let lq = this._delayedFileRequests.get(Yq);
        if (!lq) {
          lq = Eq ? this._loadFileAsync(qq, void 0, gq, !0) : this._loadFileAsync(qq, void 0, gq, !1);
          const Oq = lq;
          (async () => {
            try {
              await Oq
            } catch {}
            this._delayedFileRequests?.delete(Yq)
          })(), this._delayedFileRequests.set(Yq, lq)
        }
        return await lq
      }
      _requestFile(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = (0, Kq.F)(qq, Eq, gq, Yq ? this.offlineProvider : void 0, lq, Oq, mq);
        return this._activeRequests.push(xq), xq.onCompleteObservable.add((qq => {
          this._activeRequests.splice(this._activeRequests.indexOf(qq), 1)
        })), xq
      }
      async _requestFileAsync(qq, Eq, gq, Yq, lq) {
        return await new Promise(((Oq, mq) => {
          this._requestFile(qq, (qq => {
            Oq(qq)
          }), Eq, gq, Yq, (qq => {
            mq(qq)
          }), lq)
        }))
      }
      _readFile(qq, Eq, gq, Yq, lq) {
        const Oq = (0, Kq.z)(qq, Eq, gq, Yq, lq);
        return this._activeRequests.push(Oq), Oq.onCompleteObservable.add((qq => {
          this._activeRequests.splice(this._activeRequests.indexOf(qq), 1)
        })), Oq
      }
      async _readFileAsync(qq, Eq, gq) {
        return await new Promise(((Yq, lq) => {
          this._readFile(qq, (qq => {
            Yq(qq)
          }), Eq, gq, (qq => {
            lq(qq)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Qq.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(qq) {
        return this.setActiveCameraById(qq)
      }
      getMaterialByID(qq) {
        return this.getMaterialById(qq)
      }
      getLastMaterialByID(qq) {
        return this.getLastMaterialById(qq)
      }
      getTextureByUniqueID(qq) {
        return this.getTextureByUniqueId(qq)
      }
      getCameraByID(qq) {
        return this.getCameraById(qq)
      }
      getCameraByUniqueID(qq) {
        return this.getCameraByUniqueId(qq)
      }
      getBoneByID(qq) {
        return this.getBoneById(qq)
      }
      getLightByID(qq) {
        return this.getLightById(qq)
      }
      getLightByUniqueID(qq) {
        return this.getLightByUniqueId(qq)
      }
      getParticleSystemByID(qq) {
        return this.getParticleSystemById(qq)
      }
      getGeometryByID(qq) {
        return this.getGeometryById(qq)
      }
      getMeshByID(qq) {
        return this.getMeshById(qq)
      }
      getMeshByUniqueID(qq) {
        return this.getMeshByUniqueId(qq)
      }
      getLastMeshByID(qq) {
        return this.getLastMeshById(qq)
      }
      getMeshesByID(qq) {
        return this.getMeshesById(qq)
      }
      getTransformNodeByID(qq) {
        return this.getTransformNodeById(qq)
      }
      getTransformNodeByUniqueID(qq) {
        return this.getTransformNodeByUniqueId(qq)
      }
      getTransformNodesByID(qq) {
        return this.getTransformNodesById(qq)
      }
      getNodeByID(qq) {
        return this.getNodeById(qq)
      }
      getLastEntryByID(qq) {
        return this.getLastEntryById(qq)
      }
      getLastSkeletonByID(qq) {
        return this.getLastSkeletonById(qq)
      }
    }
    Og.FOGMODE_NONE = 0, Og.FOGMODE_EXP = 1, Og.FOGMODE_EXP2 = 2, Og.FOGMODE_LINEAR = 3, Og.MinDeltaTime = 1, Og.MaxDeltaTime = 1e3, Og._OriginalDefaultMaterialFactory = Og.DefaultMaterialFactory;
    let mg = !1;

    function xg() {
      mg || (mg = !0, (0, Eg.g)("BABYLON.Scene", Og))
    }(Dq = Og.prototype).sortActiveAnimatables ?? (Dq.sortActiveAnimatables = (0, Qq.i)("Scene", "sortActiveAnimatables")), (qE = Og.prototype).beginWeightedAnimation ?? (qE.beginWeightedAnimation = (0, Qq.i)("Scene", "beginWeightedAnimation")), (EE = Og.prototype).beginAnimation ?? (EE.beginAnimation = (0, Qq.i)("Scene", "beginAnimation")), (gE = Og.prototype).beginHierarchyAnimation ?? (gE.beginHierarchyAnimation = (0, Qq.i)("Scene", "beginHierarchyAnimation")), (YE = Og.prototype).beginDirectAnimation ?? (YE.beginDirectAnimation = (0, Qq.i)("Scene", "beginDirectAnimation")), (lE = Og.prototype).beginDirectHierarchyAnimation ?? (lE.beginDirectHierarchyAnimation = (0, Qq.i)("Scene", "beginDirectHierarchyAnimation")), (OE = Og.prototype).getAnimatableByTarget ?? (OE.getAnimatableByTarget = (0, Qq.i)("Scene", "getAnimatableByTarget")), (mE = Og.prototype).getAllAnimatablesByTarget ?? (mE.getAllAnimatablesByTarget = (0, Qq.i)("Scene", "getAllAnimatablesByTarget")), (xE = Og.prototype).stopAllAnimations ?? (xE.stopAllAnimations = (0, Qq.i)("Scene", "stopAllAnimations")), (AE = Og.prototype).getSoundByName ?? (AE.getSoundByName = (0, Qq.i)("Scene", "getSoundByName")), (cE = Og.prototype).createOrUpdateSelectionOctree ?? (cE.createOrUpdateSelectionOctree = (0, Qq.i)("Scene", "createOrUpdateSelectionOctree")), (uE = Og.prototype).createDefaultLight ?? (uE.createDefaultLight = (0, Qq.i)("Scene", "createDefaultLight")), (BE = Og.prototype).createDefaultCamera ?? (BE.createDefaultCamera = (0, Qq.i)("Scene", "createDefaultCamera")), (WE = Og.prototype).createDefaultCameraOrLight ?? (WE.createDefaultCameraOrLight = (0, Qq.i)("Scene", "createDefaultCameraOrLight")), (NE = Og.prototype).createDefaultSkybox ?? (NE.createDefaultSkybox = (0, Qq.i)("Scene", "createDefaultSkybox")), (aE = Og.prototype).createDefaultEnvironment ?? (aE.createDefaultEnvironment = (0, Qq.i)("Scene", "createDefaultEnvironment")), (VE = Og.prototype).createDefaultVRExperience ?? (VE.createDefaultVRExperience = (0, Qq.i)("Scene", "createDefaultVRExperience")), (dE = Og.prototype).createDefaultXRExperienceAsync ?? (dE.createDefaultXRExperienceAsync = (0, Qq.i)("Scene", "createDefaultXRExperienceAsync")), (jE = Og.prototype).getGlowLayerByName ?? (jE.getGlowLayerByName = (0, Qq.i)("Scene", "getGlowLayerByName")), (HE = Og.prototype).getHighlightLayerByName ?? (HE.getHighlightLayerByName = (0, Qq.i)("Scene", "getHighlightLayerByName")), (oE = Og.prototype).getSelectionOutlineLayerByName ?? (oE.getSelectionOutlineLayerByName = (0, Qq.i)("Scene", "getSelectionOutlineLayerByName")), (PE = Og.prototype).removeLensFlareSystem ?? (PE.removeLensFlareSystem = (0, Qq.i)("Scene", "removeLensFlareSystem")), (QE = Og.prototype).addLensFlareSystem ?? (QE.addLensFlareSystem = (0, Qq.i)("Scene", "addLensFlareSystem")), (yE = Og.prototype).getLensFlareSystemByName ?? (yE.getLensFlareSystemByName = (0, Qq.i)("Scene", "getLensFlareSystemByName")), (tE = Og.prototype).getLensFlareSystemByID ?? (tE.getLensFlareSystemByID = (0, Qq.i)("Scene", "getLensFlareSystemByID")), (rE = Og.prototype).getLensFlareSystemById ?? (rE.getLensFlareSystemById = (0, Qq.i)("Scene", "getLensFlareSystemById")), (vE = Og.prototype).getPhysicsEngine ?? (vE.getPhysicsEngine = (0, Qq.i)("Scene", "getPhysicsEngine")), (hE = Og.prototype).enablePhysics ?? (hE.enablePhysics = (0, Qq.i)("Scene", "enablePhysics")), (nE = Og.prototype).disablePhysicsEngine ?? (nE.disablePhysicsEngine = (0, Qq.i)("Scene", "disablePhysicsEngine")), (bE = Og.prototype).isPhysicsEnabled ?? (bE.isPhysicsEnabled = (0, Qq.i)("Scene", "isPhysicsEnabled")), (iE = Og.prototype).deleteCompoundImpostor ?? (iE.deleteCompoundImpostor = (0, Qq.i)("Scene", "deleteCompoundImpostor")), (ZE = Og.prototype).removeReflectionProbe ?? (ZE.removeReflectionProbe = (0, Qq.i)("Scene", "removeReflectionProbe")), (fE = Og.prototype).addReflectionProbe ?? (fE.addReflectionProbe = (0, Qq.i)("Scene", "addReflectionProbe")), (ME = Og.prototype).getBoundingBoxRenderer ?? (ME.getBoundingBoxRenderer = (0, Qq.i)("Scene", "getBoundingBoxRenderer")), (TE = Og.prototype).enableDepthRenderer ?? (TE.enableDepthRenderer = (0, Qq.i)("Scene", "enableDepthRenderer")), (zE = Og.prototype).disableDepthRenderer ?? (zE.disableDepthRenderer = (0, Qq.i)("Scene", "disableDepthRenderer")), (SE = Og.prototype).enableFluidRenderer ?? (SE.enableFluidRenderer = (0, Qq.i)("Scene", "enableFluidRenderer")), (pE = Og.prototype).disableFluidRenderer ?? (pE.disableFluidRenderer = (0, Qq.i)("Scene", "disableFluidRenderer")), (GE = Og.prototype).enableGeometryBufferRenderer ?? (GE.enableGeometryBufferRenderer = (0, Qq.i)("Scene", "enableGeometryBufferRenderer")), (LE = Og.prototype).disableGeometryBufferRenderer ?? (LE.disableGeometryBufferRenderer = (0, Qq.i)("Scene", "disableGeometryBufferRenderer")), (JE = Og.prototype).enableIblCdfGenerator ?? (JE.enableIblCdfGenerator = (0, Qq.i)("Scene", "enableIblCdfGenerator")), (kE = Og.prototype).disableIblCdfGenerator ?? (kE.disableIblCdfGenerator = (0, Qq.i)("Scene", "disableIblCdfGenerator")), (RE = Og.prototype).getOutlineRenderer ?? (RE.getOutlineRenderer = (0, Qq.i)("Scene", "getOutlineRenderer")), (UE = Og.prototype).enablePrePassRenderer ?? (UE.enablePrePassRenderer = (0, Qq.i)("Scene", "enablePrePassRenderer")), (FE = Og.prototype).disablePrePassRenderer ?? (FE.disablePrePassRenderer = (0, Qq.i)("Scene", "disablePrePassRenderer")), (sE = Og.prototype).enableSubSurfaceForPrePass ?? (sE.enableSubSurfaceForPrePass = (0, Qq.i)("Scene", "enableSubSurfaceForPrePass")), (XE = Og.prototype).disableSubSurfaceForPrePass ?? (XE.disableSubSurfaceForPrePass = (0, Qq.i)("Scene", "disableSubSurfaceForPrePass")), (wE = Og.prototype).pickSprite ?? (wE.pickSprite = (0, Qq.i)("Scene", "pickSprite")), (KE = Og.prototype).pickSpriteWithRay ?? (KE.pickSpriteWithRay = (0, Qq.i)("Scene", "pickSpriteWithRay")), (CE = Og.prototype).multiPickSprite ?? (CE.multiPickSprite = (0, Qq.i)("Scene", "multiPickSprite")), (IE = Og.prototype).multiPickSpriteWithRay ?? (IE.multiPickSpriteWithRay = (0, Qq.i)("Scene", "multiPickSpriteWithRay")), (eE = Og.prototype).setPointerOverSprite ?? (eE.setPointerOverSprite = (0, Qq.i)("Scene", "setPointerOverSprite")), (DE = Og.prototype).getPointerOverSprite ?? (DE.getPointerOverSprite = (0, Qq.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Og.prototype, "mainSoundTrack") || Object.defineProperty(Og.prototype, "mainSoundTrack", (0, Qq.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Og.prototype, "soundTracks") || Object.defineProperty(Og.prototype, "soundTracks", (0, Qq.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Og.prototype, "audioEnabled") || Object.defineProperty(Og.prototype, "audioEnabled", (0, Qq.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Og.prototype, "headphone") || Object.defineProperty(Og.prototype, "headphone", (0, Qq.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Og.prototype, "audioListenerPositionProvider") || Object.defineProperty(Og.prototype, "audioListenerPositionProvider", (0, Qq.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Og.prototype, "audioListenerRotationProvider") || Object.defineProperty(Og.prototype, "audioListenerRotationProvider", (0, Qq.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Og.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Og.prototype, "audioPositioningRefreshRate", (0, Qq.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Og.prototype, "selectionOctree") || Object.defineProperty(Og.prototype, "selectionOctree", (0, Qq.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Og.prototype, "debugLayer") || Object.defineProperty(Og.prototype, "debugLayer", (0, Qq.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Og.prototype, "gamepadManager") || Object.defineProperty(Og.prototype, "gamepadManager", (0, Qq.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Og.prototype, "simplificationQueue") || Object.defineProperty(Og.prototype, "simplificationQueue", (0, Qq.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Og.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Og.prototype, "onBeforePhysicsObservable", (0, Qq.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Og.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Og.prototype, "onAfterPhysicsObservable", (0, Qq.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Og.prototype, "reflectionProbes") || Object.defineProperty(Og.prototype, "reflectionProbes", (0, Qq.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Og.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Og.prototype, "forceShowBoundingBoxes", (0, Qq.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Og.prototype, "depthPeelingRenderer") || Object.defineProperty(Og.prototype, "depthPeelingRenderer", (0, Qq.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Og.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Og.prototype, "useOrderIndependentTransparency", (0, Qq.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Og.prototype, "fluidRenderer") || Object.defineProperty(Og.prototype, "fluidRenderer", (0, Qq.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Og.prototype, "geometryBufferRenderer") || Object.defineProperty(Og.prototype, "geometryBufferRenderer", (0, Qq.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Og.prototype, "iblCdfGenerator") || Object.defineProperty(Og.prototype, "iblCdfGenerator", (0, Qq.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Og.prototype, "prePassRenderer") || Object.defineProperty(Og.prototype, "prePassRenderer", (0, Qq.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Og.prototype, "subSurfaceConfiguration") || Object.defineProperty(Og.prototype, "subSurfaceConfiguration", (0, Qq.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Og.prototype, "spriteManagers") || Object.defineProperty(Og.prototype, "spriteManagers", (0, Qq.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Og.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Og.prototype, "onBeforeSpritesRenderingObservable", (0, Qq.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Og.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Og.prototype, "onAfterSpritesRenderingObservable", (0, Qq.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39911: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      g: () => lq
    });
    class Yq {}
    Yq.NAME_EFFECTLAYER = "EffectLayer", Yq.NAME_LAYER = "Layer", Yq.NAME_LENSFLARESYSTEM = "LensFlareSystem", Yq.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Yq.NAME_PARTICLESYSTEM = "ParticleSystem", Yq.NAME_GAMEPAD = "Gamepad", Yq.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Yq.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Yq.NAME_PREPASSRENDERER = "PrePassRenderer", Yq.NAME_DEPTHRENDERER = "DepthRenderer", Yq.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Yq.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Yq.NAME_SPRITE = "Sprite", Yq.NAME_SUBSURFACE = "SubSurface", Yq.NAME_OUTLINERENDERER = "Outline", Yq.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Yq.NAME_SHADOWGENERATOR = "ShadowGenerator", Yq.NAME_OCTREE = "LYq", Yq.NAME_PHYSICSENGINE = "PhysicsEngine", Yq.NAME_AUDIO = "Audio", Yq.NAME_FLUIDRENDERER = "FluidRenderer", Yq.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Yq.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Yq.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Yq.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Yq.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Yq.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Yq.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Yq.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Yq.STEP_BEFORECAMERADRAW_PREPASS = 0, Yq.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Yq.STEP_BEFORECAMERADRAW_LAYER = 2, Yq.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Yq.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Yq.STEP_BEFORERENDERINGMESH_PREPASS = 0, Yq.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Yq.STEP_AFTERRENDERINGMESH_PREPASS = 0, Yq.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Yq.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Yq.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Yq.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Yq.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Yq.STEP_BEFORECLEAR_PREPASS = 1, Yq.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Yq.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Yq.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Yq.STEP_AFTERCAMERADRAW_PREPASS = 0, Yq.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Yq.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Yq.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Yq.STEP_AFTERCAMERADRAW_LAYER = 4, Yq.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Yq.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Yq.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Yq.STEP_AFTERRENDER_AUDIO = 0, Yq.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Yq.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Yq.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Yq.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Yq.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Yq.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Yq.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Yq.STEP_POINTERMOVE_SPRITE = 0, Yq.STEP_POINTERDOWN_SPRITE = 0, Yq.STEP_POINTERUP_SPRITE = 0;
    class lq extends Array {
      constructor(qq) {
        super(...qq)
      }
      static Create() {
        return Object.create(lq.prototype)
      }
      registerStep(qq, Eq, gq) {
        let Yq, lq = 0;
        for (; lq < this.length; lq++) {
          if (Yq = this[lq].index, qq < Yq) break
        }
        this.splice(lq, 0, {
          index: qq,
          component: Eq,
          action: gq.bind(Eq)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39757: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      e: () => xq,
      f: () => Yq,
      i: () => lq,
      j: () => Oq
    });

    function Yq(qq, Eq, gq, Yq, lq, Oq) {
      function mq(qq) {
        if (void 0 !== qq && "function" !== typeof qq) throw new TypeError("Function expected");
        return qq
      }
      for (var xq, Aq = Yq.kind, cq = "getter" === Aq ? "get" : "setter" === Aq ? "set" : "value", uq = !Eq && qq ? Yq.static ? qq : qq.prototype : null, Bq = Eq || (uq ? Object.getOwnPropertyDescriptor(uq, Yq.name) : {}), Wq = !1, Nq = gq.length - 1; Nq >= 0; Nq--) {
        var aq = {};
        for (var Vq in Yq) aq[Vq] = "access" === Vq ? {} : Yq[Vq];
        for (var Vq in Yq.access) aq.access[Vq] = Yq.access[Vq];
        aq.addInitializer = function(qq) {
          if (Wq) throw new TypeError("Cannot add initializers after decoration has completed");
          Oq.push(mq(qq || null))
        };
        var dq = (0, gq[Nq])("accessor" === Aq ? {
          get: Bq.get,
          set: Bq.set
        } : Bq[cq], aq);
        if ("accessor" === Aq) {
          if (void 0 === dq) continue;
          if (null === dq || "object" !== typeof dq) throw new TypeError("Object expected");
          (xq = mq(dq.get)) && (Bq.get = xq), (xq = mq(dq.set)) && (Bq.set = xq), (xq = mq(dq.init)) && lq.unshift(xq)
        } else(xq = mq(dq)) && ("field" === Aq ? lq.unshift(xq) : Bq[cq] = xq)
      }
      uq && Object.defineProperty(uq, Yq.name, Bq), Wq = !0
    }

    function lq(qq, Eq, gq) {
      for (var Yq = arguments.length > 2, lq = 0; lq < Eq.length; lq++) gq = Yq ? Eq[lq].call(qq, gq) : Eq[lq].call(qq);
      return Yq ? gq : void 0
    }

    function Oq(qq, Eq, gq) {
      return "symbol" === typeof Eq && (Eq = Eq.description ? "[".concat(Eq.description, "]") : ""), Object.defineProperty(qq, "name", {
        configurable: !0,
        value: gq ? "".concat(gq, " ", Eq) : Eq
      })
    }
    Object.create;
    Object.create;

    function mq(qq, Eq, gq, Yq) {
      if ("a" === gq && !Yq) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Eq ? qq !== Eq || !Yq : !Eq.has(qq)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === gq ? Yq : "a" === gq ? Yq.call(qq) : Yq ? Yq.value : Eq.get(qq)
    }

    function xq(qq, Eq, gq, Yq, lq) {
      if ("m" === Yq) throw new TypeError("Private method is not writable");
      if ("a" === Yq && !lq) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Eq ? qq !== Eq || !lq : !Eq.has(qq)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Yq ? lq.call(qq, gq) : lq ? lq.value = gq : Eq.set(qq, gq), gq
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);