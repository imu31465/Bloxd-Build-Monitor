export const id = 232;
export const ids = [232];
export const modules = {
  38918: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      h: () => GJ,
      l: () => jJ,
      n: () => qJ
    });
    var FJ = ZJ(38723),
      UJ = ZJ(37660),
      eJ = ZJ(38859),
      XJ = ZJ(38772);
    class AJ {
      get YZJ() {
        return this._isDisposed
      }
      constructor(JJ, cJ, ZJ) {
        let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          jJ = arguments.length > 7 ? arguments[7] : void 0,
          YJ = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, XJ.b)(), JJ && JJ.Qy ? this._engine = JJ.Qy().gn() : this._engine = JJ, this._updatable = ZJ, this._instanced = AJ, this._divisor = jJ || 1, this._label = YJ, cJ instanceof FJ.d ? (this._data = null, this._buffer = cJ) : (this._data = cJ, this._buffer = null), this.byteStride = qJ ? UJ : UJ * Float32Array.BYTES_PER_ELEMENT, eJ || this.create()
      }
      createVertexBuffer(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          XJ = arguments.length > 6 ? arguments[6] : void 0;
        const AJ = eJ ? cJ : cJ * Float32Array.BYTES_PER_ELEMENT,
          jJ = FJ ? eJ ? FJ : FJ * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new qJ(this._engine, this, JJ, this._updatable, !0, jJ, void 0 === UJ ? this._instanced : UJ, AJ, ZJ, void 0, void 0, !0, this._divisor || XJ)
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !JJ && this._buffer || (JJ = JJ || this._data, JJ && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, JJ), this._data = JJ) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(JJ, this._label), this._data = JJ) : this._buffer = this._engine.createVertexBuffer(JJ, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.qh > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.qh, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.qh, void 0, this._label));
          UJ.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(JJ) {
        this.create(JJ)
      }
      updateDirectly(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, JJ, FJ ? cJ : cJ * Float32Array.BYTES_PER_ELEMENT, ZJ ? ZJ * this.byteStride : void 0), this._data = 0 === cJ && void 0 === ZJ ? JJ : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class qJ {
      get YZJ() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(JJ) {
        const cJ = 0 != JJ;
        this._instanceDivisor = JJ, cJ !== this._instanced && (this._instanced = cJ, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const JJ = this.getData();
        return JJ ? Array.isArray(JJ) ? JJ.length / (this.byteStride / 4) - this.byteOffset / 4 : (JJ.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, XJ, hJ, DJ, sJ, nJ) {
        let GJ, fJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          xJ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          rJ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          vJ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = JJ, "object" === typeof FJ && null !== FJ ? (GJ = FJ.updatable ?? !1, UJ = FJ.postponeInternalCreation, XJ = FJ.stride, hJ = FJ.instanced, DJ = FJ.offset, sJ = FJ.size, nJ = FJ.type, fJ = FJ.normalized ?? !1, xJ = FJ.useBytes ?? !1, rJ = FJ.divisor ?? 1, vJ = FJ.takeBufferOwnership ?? !1, this._label = FJ.label) : GJ = !!FJ, cJ instanceof AJ ? (this._buffer = cJ, this._ownsBuffer = vJ) : (this._buffer = new AJ(JJ, cJ, GJ, XJ, UJ, hJ, xJ, rJ, this._label), this._ownsBuffer = !0), this.uniqueId = qJ._Counter++, this._kind = ZJ, void 0 === nJ) {
          const JJ = this.getData();
          this.type = JJ ? YJ(JJ) : qJ.FLOAT
        } else this.type = nJ;
        const mJ = (0, eJ.o)(this.type);
        xJ ? (this._size = sJ || (XJ ? XJ / mJ : jJ(ZJ)), this.byteStride = XJ || this._buffer.byteStride || this._size * mJ, this.byteOffset = DJ || 0) : (this._size = sJ || XJ || jJ(ZJ), this.byteStride = XJ ? XJ * mJ : this._buffer.byteStride || this._size * mJ, this.byteOffset = (DJ || 0) * mJ), this.normalized = fJ, this._instanced = void 0 !== hJ && hJ, this._instanceDivisor = hJ ? rJ : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(JJ) {
        switch (JJ) {
          case qJ.BYTE:
            return 0;
          case qJ.UNSIGNED_BYTE:
            return 1;
          case qJ.SHORT:
            return 2;
          case qJ.UNSIGNED_SHORT:
            return 3;
          case qJ.INT:
            return 4;
          case qJ.UNSIGNED_INT:
            return 5;
          case qJ.FLOAT:
            return 6;
          case qJ.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${JJ}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (qJ._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(JJ, cJ) {
        const ZJ = this.getData();
        return ZJ ? (0, eJ.l)(ZJ, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, JJ, cJ) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, eJ.o)(this.type)
      }
      lcJ() {
        return this.byteOffset / (0, eJ.o)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, eJ.o)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(JJ) {
        this._buffer.create(JJ), this._alignBuffer()
      }
      update(JJ) {
        this._buffer.update(JJ), this._alignBuffer()
      }
      updateDirectly(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(JJ, cJ, void 0, ZJ), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(JJ, cJ) {
        (0, eJ.i)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, JJ, this.normalized, ((JJ, ZJ) => {
          for (let FJ = 0; FJ < this._size; FJ++) cJ(JJ[FJ], ZJ + FJ)
        }))
      }
      _alignBuffer() {}
    }

    function jJ(JJ) {
      switch (JJ) {
        case qJ.UVKind:
        case qJ.UV2Kind:
        case qJ.UV3Kind:
        case qJ.UV4Kind:
        case qJ.UV5Kind:
        case qJ.UV6Kind:
          return 2;
        case qJ.NormalKind:
        case qJ.PositionKind:
          return 3;
        case qJ.ColorKind:
        case qJ.ColorInstanceKind:
        case qJ.MatricesIndicesKind:
        case qJ.MatricesIndicesExtraKind:
        case qJ.MatricesWeightsKind:
        case qJ.MatricesWeightsExtraKind:
        case qJ.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + JJ + "'")
      }
    }

    function YJ(JJ) {
      return JJ instanceof Int8Array ? qJ.BYTE : JJ instanceof Uint8Array ? qJ.UNSIGNED_BYTE : JJ instanceof Int16Array ? qJ.SHORT : JJ instanceof Uint16Array ? qJ.UNSIGNED_SHORT : JJ instanceof Int32Array ? qJ.INT : JJ instanceof Uint32Array ? qJ.UNSIGNED_INT : qJ.FLOAT
    }

    function hJ(JJ) {
      return (0, eJ.o)(JJ)
    }

    function DJ(JJ, cJ, ZJ, FJ, UJ, XJ, AJ, qJ) {
      (0, eJ.i)(JJ, cJ, ZJ, FJ, UJ, XJ, AJ, ((JJ, cJ) => {
        for (let ZJ = 0; ZJ < FJ; ZJ++) qJ(JJ[ZJ], cJ + ZJ)
      }))
    }

    function sJ(JJ, cJ, ZJ, FJ, UJ, XJ, AJ, qJ) {
      return (0, eJ.l)(JJ, cJ, ZJ, FJ, UJ, XJ, AJ, qJ)
    }
    qJ._Counter = 0, qJ.BYTE = 5120, qJ.UNSIGNED_BYTE = 5121, qJ.SHORT = 5122, qJ.UNSIGNED_SHORT = 5123, qJ.INT = 5124, qJ.UNSIGNED_INT = 5125, qJ.FLOAT = 5126, qJ.HALF_FLOAT = 5131, qJ.PositionKind = "position", qJ.NormalKind = "normal", qJ.TangentKind = "tangent", qJ.UVKind = "uv", qJ.UV2Kind = "uv2", qJ.UV3Kind = "uv3", qJ.UV4Kind = "uv4", qJ.UV5Kind = "uv5", qJ.UV6Kind = "uv6", qJ.ColorKind = "color", qJ.ColorInstanceKind = "instanceColor", qJ.MatricesIndicesKind = "matricesIndices", qJ.MatricesWeightsKind = "matricesWeights", qJ.MatricesIndicesExtraKind = "matricesIndicesExtra", qJ.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let nJ = !1;

    function GJ() {
      nJ || (nJ = !0, qJ.DeduceStride = jJ, qJ.GetDataType = YJ, qJ.GetTypeByteLength = hJ, qJ.ForEach = DJ, qJ.GetFloatData = sJ)
    }
  },
  38723: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.qh = 0, this.is32Bits = !1, this.uniqueId = FJ._Counter++
      }
    }
    FJ._Counter = 0
  },
  38910: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(38918);
    class eJ {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || cJ && !this.pickedMesh.isVerticesDataPresent(UJ.n.NormalKind)) return null;
        let ZJ, eJ = this.pickedMesh.QXJ();
        0 === eJ?.length && (eJ = null);
        const XJ = FJ.h.Pn[0],
          AJ = FJ.h.Pn[1],
          qJ = FJ.h.Pn[2];
        if (cJ) {
          const JJ = this.pickedMesh.getVerticesData(UJ.n.NormalKind);
          let cJ = eJ ? FJ.j.FromArrayToRef(JJ, 3 * eJ[3 * this.faceId], XJ) : XJ.K9(JJ[3 * this.faceId * 3], JJ[3 * this.faceId * 3 + 1], JJ[3 * this.faceId * 3 + 2]),
            jJ = eJ ? FJ.j.FromArrayToRef(JJ, 3 * eJ[3 * this.faceId + 1], AJ) : AJ.K9(JJ[3 * (3 * this.faceId + 1)], JJ[3 * (3 * this.faceId + 1) + 1], JJ[3 * (3 * this.faceId + 1) + 2]),
            YJ = eJ ? FJ.j.FromArrayToRef(JJ, 3 * eJ[3 * this.faceId + 2], qJ) : qJ.K9(JJ[3 * (3 * this.faceId + 2)], JJ[3 * (3 * this.faceId + 2) + 1], JJ[3 * (3 * this.faceId + 2) + 2]);
          cJ = cJ.scale(this.bu), jJ = jJ.scale(this.bv), YJ = YJ.scale(1 - this.bu - this.bv), ZJ = new FJ.j(cJ.x + jJ.x + YJ.x, cJ.y + jJ.y + YJ.y, cJ.z + jJ.z + YJ.z)
        } else {
          const JJ = this.pickedMesh.getVerticesData(UJ.n.PositionKind),
            cJ = eJ ? FJ.j.FromArrayToRef(JJ, 3 * eJ[3 * this.faceId], XJ) : XJ.K9(JJ[3 * this.faceId * 3], JJ[3 * this.faceId * 3 + 1], JJ[3 * this.faceId * 3 + 2]),
            jJ = eJ ? FJ.j.FromArrayToRef(JJ, 3 * eJ[3 * this.faceId + 1], AJ) : AJ.K9(JJ[3 * (3 * this.faceId + 1)], JJ[3 * (3 * this.faceId + 1) + 1], JJ[3 * (3 * this.faceId + 1) + 2]),
            YJ = eJ ? FJ.j.FromArrayToRef(JJ, 3 * eJ[3 * this.faceId + 2], qJ) : qJ.K9(JJ[3 * (3 * this.faceId + 2)], JJ[3 * (3 * this.faceId + 2) + 1], JJ[3 * (3 * this.faceId + 2) + 2]),
            hJ = cJ.subtract(jJ),
            DJ = YJ.subtract(jJ);
          ZJ = FJ.j.Cross(hJ, DJ)
        }
        const jJ = (JJ, cJ) => {
          if (-1 !== this.thinInstanceIndex) {
            const ZJ = JJ._thinInstanceDataStorage.matrixData,
              UJ = this.thinInstanceIndex << 4;
            if (ZJ && ZJ.length > UJ) {
              const JJ = FJ.h.Matrix[0];
              FJ.b.FromArrayToRef(ZJ, UJ, JJ), FJ.j.TransformNormalToRef(cJ, JJ, cJ)
            }
          }
          let ZJ = JJ.getWorldMatrix();
          JJ.nonUniformScaling && (FJ.h.Matrix[0].rZJ(ZJ), ZJ = FJ.h.Matrix[0], ZJ.setTranslationFromFloats(0, 0, 0), ZJ.invert(), ZJ.transposeToRef(FJ.h.Matrix[1]), ZJ = FJ.h.Matrix[1]), FJ.j.TransformNormalToRef(cJ, ZJ, cJ)
        };
        if (JJ && jJ(this.pickedMesh, ZJ), this.ray) {
          const cJ = FJ.h.Pn[0].rZJ(ZJ);
          JJ || jJ(this.pickedMesh, cJ), FJ.j.Dot(cJ, this.ray.direction) > 0 && ZJ.negateInPlace()
        }
        return ZJ.normalize(), ZJ
      }
      getTextureCoordinates() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UJ.n.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(JJ)) return null;
        const cJ = this.pickedMesh.QXJ();
        if (!cJ) return null;
        const ZJ = this.pickedMesh.getVerticesData(JJ);
        if (!ZJ) return null;
        let eJ = FJ.i.FromArray(ZJ, 2 * cJ[3 * this.faceId]),
          XJ = FJ.i.FromArray(ZJ, 2 * cJ[3 * this.faceId + 1]),
          AJ = FJ.i.FromArray(ZJ, 2 * cJ[3 * this.faceId + 2]);
        return eJ = eJ.scale(this.bu), XJ = XJ.scale(this.bv), AJ = AJ.scale(1 - this.bu - this.bv), new FJ.i(eJ.x + XJ.x + AJ.x, eJ.y + XJ.y + AJ.y)
      }
    }
  },
  38772: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(38644);
    let UJ = !1;

    function eJ() {
      UJ || (UJ = !0, FJ.ThinEngine.prototype.updateDynamicIndexBuffer = function(JJ, cJ) {
        let ZJ;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(JJ), ZJ = JJ.is32Bits ? cJ instanceof Uint32Array ? cJ : new Uint32Array(cJ) : cJ instanceof Uint16Array ? cJ : new Uint16Array(cJ), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZJ, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, FJ.ThinEngine.prototype.updateDynamicVertexBuffer = function(JJ, cJ, ZJ, FJ) {
        this.bindArrayBuffer(JJ), void 0 === ZJ && (ZJ = 0);
        const UJ = cJ.byteLength || cJ.length;
        void 0 === FJ || FJ >= UJ && 0 === ZJ ? cJ instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZJ, new Float32Array(cJ)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZJ, cJ) : cJ instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZJ, new Float32Array(cJ).subarray(0, FJ / 4)) : (cJ = ArrayBuffer.isView(cJ) ? new Uint8Array(cJ.buffer, cJ.byteOffset, FJ) : new Uint8Array(cJ, 0, FJ), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZJ, cJ)), this._resetVertexBufferBinding()
      })
    }
  },
  38732: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = cJ, !JJ && (JJ = cJ.createTexture(), !JJ)) throw new Error("Unable to create webGL texture");
        this.set(JJ)
      }
      setUsage() {}
      set(JJ) {
        this._webGLTexture = JJ
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(JJ) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(JJ)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const JJ of this._MSAARenderBuffers) this._context.deleteRenderbuffer(JJ);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[JJ] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  38698: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => rJ
    });
    var FJ = ZJ(36200),
      UJ = ZJ(38653),
      eJ = ZJ(36192),
      XJ = ZJ(37660),
      AJ = ZJ(36189),
      qJ = ZJ(38700);
    class jJ {
      constructor() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, JJ && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(JJ) {
        this._zOffset !== JJ && (this._zOffset = JJ, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(JJ) {
        this._zOffsetUnits !== JJ && (this._zOffsetUnits = JJ, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(JJ) {
        this._cullFace !== JJ && (this._cullFace = JJ, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(JJ) {
        this._cull !== JJ && (this._cull = JJ, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(JJ) {
        this._depthFunc !== JJ && (this._depthFunc = JJ, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(JJ) {
        this._depthMask !== JJ && (this._depthMask = JJ, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(JJ) {
        this._depthTest !== JJ && (this._depthTest = JJ, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(JJ) {
        this._frontFace !== JJ && (this._frontFace = JJ, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(JJ) {
        this.isDirty && (this._isCullDirty && (this.cull ? JJ.enable(JJ.CULL_FACE) : JJ.disable(JJ.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (JJ.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (JJ.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? JJ.enable(JJ.DEPTH_TEST) : JJ.disable(JJ.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (JJ.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (JJ.enable(JJ.POLYGON_OFFSET_FILL), JJ.polygonOffset(this.zOffset, this.zOffsetUnits)) : JJ.disable(JJ.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (JJ.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class YJ {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(JJ) {
        this._func !== JJ && (this._func = JJ, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(JJ) {
        this._backFunc !== JJ && (this._backFunc = JJ, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(JJ) {
        this._funcRef !== JJ && (this._funcRef = JJ, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(JJ) {
        this._funcMask !== JJ && (this._funcMask = JJ, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(JJ) {
        this._opStencilFail !== JJ && (this._opStencilFail = JJ, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(JJ) {
        this._opDepthFail !== JJ && (this._opDepthFail = JJ, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(JJ) {
        this._opStencilDepthPass !== JJ && (this._opStencilDepthPass = JJ, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(JJ) {
        this._backOpStencilFail !== JJ && (this._backOpStencilFail = JJ, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(JJ) {
        this._backOpDepthFail !== JJ && (this._backOpDepthFail = JJ, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(JJ) {
        this._backOpStencilDepthPass !== JJ && (this._backOpStencilDepthPass = JJ, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(JJ) {
        this._mask !== JJ && (this._mask = JJ, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(JJ) {
        this._enabled !== JJ && (this._enabled = JJ, this._isStencilTestDirty = !0)
      }
      constructor() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, JJ && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(JJ) {
        if (!JJ) return;
        const cJ = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = cJ ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = cJ ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = cJ ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = cJ ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = cJ ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = cJ ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = cJ ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = cJ ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = cJ ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = cJ ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = cJ ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = cJ ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? JJ.enable(JJ.STENCIL_TEST) : JJ.disable(JJ.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (JJ.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (JJ.stencilFuncSeparate(JJ.FRONT, this.func, this.funcRef, this.funcMask), JJ.stencilFuncSeparate(JJ.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (JJ.stencilOpSeparate(JJ.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), JJ.stencilOpSeparate(JJ.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class hJ {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = hJ.ALWAYS, this.opStencilFail = hJ.KEEP, this.opDepthFail = hJ.KEEP, this.opStencilDepthPass = hJ.REPLACE, this.backFunc = hJ.ALWAYS, this.backOpStencilFail = hJ.KEEP, this.backOpDepthFail = hJ.KEEP, this.backOpStencilDepthPass = hJ.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(JJ) {
        this.func = JJ
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(JJ) {
        this.backFunc = JJ
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(JJ) {
        this.funcRef = JJ
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(JJ) {
        this.funcMask = JJ
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(JJ) {
        this.opStencilFail = JJ
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(JJ) {
        this.opDepthFail = JJ
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(JJ) {
        this.opStencilDepthPass = JJ
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(JJ) {
        this.backOpStencilFail = JJ
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(JJ) {
        this.backOpDepthFail = JJ
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(JJ) {
        this.backOpStencilDepthPass = JJ
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(JJ) {
        this.mask = JJ
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(JJ) {
        this.enabled = JJ
      }
    }
    hJ.ALWAYS = 519, hJ.KEEP = 7680, hJ.REPLACE = 7681;
    var DJ = ZJ(38709),
      sJ = ZJ(38677),
      nJ = ZJ(38635),
      GJ = ZJ(38663),
      fJ = ZJ(38671);

    function xJ(JJ, cJ) {
      if (cJ) {
        const {
          requestAnimationFrame: ZJ
        } = cJ;
        if ("function" === typeof ZJ) return ZJ(JJ)
      }
      if ((0, GJ.i)()) {
        const {
          requestAnimationFrame: ZJ
        } = cJ || window;
        if ("function" === typeof ZJ) return ZJ(JJ)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(JJ);
      return setTimeout(JJ, 16)
    }
    class rJ {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(JJ) {
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
      get LZJ() {
        return this._useReverseDepthBuffer
      }
      set LZJ(JJ) {
        JJ !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = JJ, this._depthCullingState.depthFunc = JJ ? 518 : 515)
      }
      setColorWrite(JJ) {
        JJ !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = JJ)
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
      _getGlobalDefines(JJ) {
        if (JJ) return this.isNDCHalfZRange ? JJ.IS_NDC_HALF_ZRANGE = "" : delete JJ.IS_NDC_HALF_ZRANGE, this.LZJ ? JJ.USE_REVERSE_DEPTHBUFFER = "" : delete JJ.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? JJ.USE_EXACT_SRGB_CONVERSIONS = "" : delete JJ.USE_EXACT_SRGB_CONVERSIONS);
        {
          let JJ = "";
          return this.isNDCHalfZRange && (JJ += "#define IS_NDC_HALF_ZRANGE"), this.LZJ && (JJ && (JJ += "\n"), JJ += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (JJ && (JJ += "\n"), JJ += "#define USE_EXACT_SRGB_CONVERSIONS"), JJ
        }
      }
      _rebuildInternalTextures() {
        const JJ = this._internalTexturesCache.slice();
        for (const cJ of JJ) cJ._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const JJ = this._renderTargetWrapperCache.slice();
        for (const cJ of JJ) cJ.textures?.some((JJ => 15 === JJ.source)) || cJ._rebuild()
      }
      _rebuildEffects() {
        for (const JJ in this._compiledEffects) {
          const cJ = this._compiledEffects[JJ];
          cJ._pipelineContext = null, cJ._prepareEffect()
        }
        UJ.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        XJ.c.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(JJ) {
        setTimeout((() => {
          this._clearEmptyResources();
          const cJ = this._depthCullingState.depthTest,
            ZJ = this._depthCullingState.depthFunc,
            FJ = this._depthCullingState.depthMask,
            UJ = this._stencilState.stencilTest;
          JJ(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = cJ, this._depthCullingState.depthFunc = ZJ, this._depthCullingState.depthMask = FJ, this._stencilState.stencilTest = UJ, this._flagContextRestored()
        }), 0)
      }
      get YZJ() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(JJ) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(JJ) {}
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
          const JJ = new Uint8Array(4),
            cJ = [JJ, JJ, JJ, JJ, JJ, JJ];
          this._emptyCubeTexture = this.createRawCubeTexture(cJ, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(JJ) {
        this._framebufferDimensionsObject = JJ
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(JJ) {
        if (!JJ) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const cJ = this._activeRenderLoops.indexOf(JJ);
        cJ >= 0 && (this._activeRenderLoops.splice(cJ, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: JJ
            } = this.customAnimationFrameRequester;
            JJ && JJ(this.customAnimationFrameRequester.kn), delete this.customAnimationFrameRequester.kn
          }
        } else if (0 !== this._frameHandler) {
          const JJ = this._frameHandler;
          if (this._frameHandler = 0, (0, GJ.i)()) {
            const {
              cancelAnimationFrame: cJ
            } = this.getHostWindow() || window;
            if ("function" === typeof cJ) return cJ(JJ)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(JJ);
          return clearTimeout(JJ)
        }
      }
      yE() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      WE() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(JJ) {
        this._maxFPS = JJ, void 0 !== JJ && (this._minFrameTime = JJ <= 0 ? Number.MAX_VALUE : 1e3 / JJ)
      }
      _isOverFrameTime(JJ) {
        if (!JJ || void 0 === this._maxFPS) return !1;
        const cJ = JJ - this._lastFrameTime;
        return this._lastFrameTime = JJ, this._renderAccumulator += cJ, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(JJ) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(JJ)) {
          let JJ = !0;
          (this.YZJ || !this.renderEvenInBackground && this._windowIsBackground) && (JJ = !1), JJ && (this.yE(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.WE())
        }
      }
      _renderLoop(JJ) {
        this._processFrame(JJ), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let JJ = 0; JJ < this._activeRenderLoops.length; JJ++) {
          (0, this._activeRenderLoops[JJ])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(JJ, cJ) {
        return xJ(JJ, cJ)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.kn = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.kn) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(JJ) {
        -1 === this._activeRenderLoops.indexOf(JJ) && (this._activeRenderLoops.push(JJ), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(JJ) {
        this._depthCullingState.depthTest = JJ
      }
      setZOffset(JJ) {
        this._depthCullingState.zOffset = this.LZJ ? -JJ : JJ
      }
      getZOffset() {
        const JJ = this._depthCullingState.zOffset;
        return this.LZJ ? -JJ : JJ
      }
      setZOffsetUnits(JJ) {
        this._depthCullingState.zOffsetUnits = this.LZJ ? -JJ : JJ
      }
      getZOffsetUnits() {
        const JJ = this._depthCullingState.zOffsetUnits;
        return this.LZJ ? -JJ : JJ
      }
      getHostWindow() {
        return (0, GJ.i)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(JJ) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const JJ of this.scenes) JJ._rebuildTextures();
        for (const JJ of this._virtualScenes) JJ._rebuildTextures()
      }
      _releaseRenderTargetWrapper(JJ) {
        const cJ = this._renderTargetWrapperCache.indexOf(JJ); - 1 !== cJ && this._renderTargetWrapperCache.splice(cJ, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(JJ, cJ, ZJ) {
        const FJ = cJ || this.getRenderWidth(),
          UJ = ZJ || this.getRenderHeight(),
          eJ = JJ.x || 0,
          XJ = JJ.y || 0;
        this._cachedViewport = JJ, this._viewport(eJ * FJ, XJ * UJ, FJ * JJ.width, UJ * JJ.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(JJ) {
        return new Path2D(JJ)
      }
      get description() {
        let JJ = this.name + this.version;
        return this._caps.parallelShaderCompile && (JJ += " - Parallel shader compilation"), JJ
      }
      _createTextureBase(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          AJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          jJ = arguments.length > 7 ? arguments[7] : void 0,
          YJ = arguments.length > 8 ? arguments[8] : void 0,
          hJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          DJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          sJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          GJ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          fJ = arguments.length > 13 ? arguments[13] : void 0,
          xJ = arguments.length > 14 ? arguments[14] : void 0,
          vJ = arguments.length > 15 ? arguments[15] : void 0;
        const mJ = "data:" === (JJ = JJ || "").substring(0, 5),
          QJ = "blob:" === JJ.substring(0, 5),
          EJ = mJ && -1 !== JJ.indexOf(";base64,"),
          VJ = DJ || new nJ.e(this, 1);
        VJ !== DJ && (VJ.label = JJ.substring(0, 60));
        const KJ = JJ;
        !this._transformTextureUrl || EJ || DJ || hJ || (JJ = this._transformTextureUrl(JJ)), KJ !== JJ && (VJ._originalUrl = KJ);
        const yJ = JJ.lastIndexOf(".");
        let SJ = GJ || (yJ > -1 ? JJ.substring(yJ).toLowerCase() : "");
        SJ.indexOf("?") > -1 && (SJ = SJ.split("?")[0]);
        const IJ = rJ.GetCompatibleTextureLoader(SJ, fJ);
        FJ && FJ.addPendingData(VJ), VJ.url = JJ, VJ.generateMipMaps = !cJ, VJ.samplingMode = UJ, VJ.invertY = ZJ, VJ._useSRGBBuffer = this._getUseSRGBBuffer(!!vJ, cJ), this._doNotHandleContextLost || (VJ._buffer = hJ);
        let MJ = null;
        AJ && !DJ && (MJ = VJ.onLoadedObservable.add(AJ)), DJ || this._internalTexturesCache.push(VJ);
        const bJ = (ZJ, DJ) => {
          FJ && FJ.removePendingData(VJ), JJ === KJ ? (MJ && VJ.onLoadedObservable.remove(MJ), eJ.c.UseFallbackTexture && JJ !== eJ.c.FallbackTexture && this._createTextureBase(eJ.c.FallbackTexture, cJ, VJ.invertY, FJ, UJ, null, qJ, jJ, YJ, hJ, VJ), ZJ = (ZJ || "Unknown error") + (eJ.c.UseFallbackTexture ? " - Fallback texture was used" : ""), VJ.onErrorObservable.notifyObservers({
            message: ZJ,
            exception: DJ
          }), qJ && qJ(ZJ, DJ)) : (XJ.c.Warn(`Failed to load ${JJ}, falling back to ${KJ}`), this._createTextureBase(KJ, cJ, VJ.invertY, FJ, UJ, AJ, qJ, jJ, YJ, hJ, VJ, sJ, GJ, fJ, xJ, vJ))
        };
        if (IJ) {
          const cJ = async JJ => {
            (await IJ).loadData(JJ, VJ, ((JJ, cJ, ZJ, eJ, XJ, AJ) => {
              AJ ? bJ("TextureLoader failed to load data") : jJ(VJ, SJ, FJ, {
                width: JJ,
                height: cJ
              }, VJ.invertY, !ZJ, eJ, (() => (XJ(), !1)), UJ)
            }), xJ)
          };
          if (hJ) {
            const JJ = async JJ => {
              try {
                await cJ(JJ)
              } catch (ZJ) {
                bJ("Failed to parse texture data", ZJ)
              }
            };
            hJ instanceof ArrayBuffer ? JJ(new Uint8Array(hJ)) : ArrayBuffer.isView(hJ) ? JJ(hJ) : qJ && qJ("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(JJ, (async JJ => {
            try {
              await cJ(new Uint8Array(JJ))
            } catch (ZJ) {
              bJ("Failed to parse texture data", ZJ)
            }
          }), void 0, FJ ? FJ.offlineProvider : void 0, !0, ((JJ, cJ) => {
            bJ("Unable to load " + (JJ && JJ.responseURL, cJ))
          }))
        } else {
          const ZJ = JJ => {
            QJ && !this._doNotHandleContextLost && (VJ._buffer = JJ), jJ(VJ, SJ, FJ, JJ, VJ.invertY, cJ, !1, YJ, UJ)
          };
          !mJ || EJ ? hJ && ("string" === typeof hJ.decoding || hJ.close) ? ZJ(hJ) : rJ._FileToolsLoadImage(JJ || "", ZJ, bJ, FJ ? FJ.offlineProvider : null, fJ, VJ.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof hJ || hJ instanceof ArrayBuffer || ArrayBuffer.isView(hJ) || hJ instanceof Blob ? rJ._FileToolsLoadImage(hJ, ZJ, bJ, FJ ? FJ.offlineProvider : null, fJ, VJ.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : hJ && ZJ(hJ)
        }
        return VJ
      }
      _rebuildBuffers() {
        for (const JJ of this._uniformBuffers) JJ._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, GJ.f)() ? document : null
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
        for (const JJ in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, JJ) && (this._boundTexturesCache[JJ] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(JJ) {
        this._name = JJ
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
      setHardwareScalingLevel(JJ) {
        this._hardwareScalingLevel = JJ, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(JJ) {
        this._doNotHandleContextLost = JJ
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(JJ, cJ, ZJ) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new jJ, this._stencilStateComposer = new YJ, this._stencilState = new hJ, this._alphaState = new DJ.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new FJ.c, this.onCanvasFocusObservable = new FJ.c, this.onNewSceneAddedObservable = new FJ.c, this.onResizeObservable = new FJ.c, this.onCanvasPointerOutObservable = new FJ.c, this.onEffectErrorObservable = new FJ.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new FJ.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = JJ => this._renderLoop(JJ), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new FJ.c, this.onAfterShaderCompilationObservable = new FJ.c, this.onBeginFrameObservable = new FJ.c, this.onEndFrameObservable = new FJ.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new FJ.c, this.onContextRestoredObservable = new FJ.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Sy = new FJ.c, this.onReleaseEffectsObservable = new FJ.c, eJ.c.Instances.push(this), this.startTime = qJ.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, AJ.e.SetMatrixPrecision(!!cJ.useLargeWorldRendering || !!cJ.useHighPrecisionMatrix), (0, GJ.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), cJ.antialias = JJ ?? cJ.antialias, cJ.deterministicLockstep = cJ.deterministicLockstep ?? !1, cJ.lockstepMaxSteps = cJ.lockstepMaxSteps ?? 4, cJ.timeStep = cJ.timeStep ?? 1 / 60, cJ.stencil = cJ.stencil ?? !0, this._audioContext = cJ.audioEngineOptions?.audioContext ?? null, this._audioDestination = cJ.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = cJ.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!cJ.doNotHandleContextLost, this._isStencilEnable = !!cJ.stencil, this.useExactSrgbConversions = cJ.useExactSrgbConversions ?? !1, this.canvasTabIndex = cJ.canvasTabIndex ?? this.canvasTabIndex;
        const UJ = (0, GJ.i)() && window.devicePixelRatio || 1,
          XJ = cJ.limitDeviceRatio || UJ;
        ZJ = ZJ || cJ.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = ZJ, this._hardwareScalingLevel = ZJ ? 1 / Math.min(XJ, UJ) : 1, this._lastDevicePixelRatio = UJ, this._creationOptions = cJ
      }
      resize() {
        let JJ, cJ, ZJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const JJ = (0, GJ.i)() && window.devicePixelRatio || 1,
            cJ = this._lastDevicePixelRatio / JJ;
          this._lastDevicePixelRatio = JJ, this._hardwareScalingLevel *= cJ
        }
        if ((0, GJ.i)() && (0, GJ.f)())
          if (this._renderingCanvas) {
            const ZJ = this._renderingCanvas.getBoundingClientRect?.();
            JJ = this._renderingCanvas.clientWidth || ZJ?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, cJ = this._renderingCanvas.clientHeight || ZJ?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else JJ = window.innerWidth, cJ = window.innerHeight;
        else JJ = this._renderingCanvas ? this._renderingCanvas.width : 100, cJ = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(JJ / this._hardwareScalingLevel, cJ / this._hardwareScalingLevel, ZJ)
      }
      setSize(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (JJ |= 0, cJ |= 0, !ZJ && this._renderingCanvas.width === JJ && this._renderingCanvas.height === cJ) return !1;
        if (this._renderingCanvas.width = JJ, this._renderingCanvas.height = cJ, this.scenes) {
          for (let JJ = 0; JJ < this.scenes.length; JJ++) {
            const cJ = this.scenes[JJ];
            for (let JJ = 0; JJ < cJ.cameras.length; JJ++) {
              cJ.cameras[JJ]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ) {
        throw (0, sJ.m)("engine.rawTexture")
      }
      createRawCubeTexture(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        throw (0, sJ.m)("engine.rawTexture")
      }
      createRawTexture3D(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        throw (0, sJ.m)("engine.rawTexture")
      }
      createRawTexture2DArray(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ) {
        throw (0, sJ.m)("engine.rawTexture")
      }
      _sharedInit(JJ) {
        this._renderingCanvas = JJ
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const JJ = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== JJ.indexOf("Mobile") || -1 !== JJ.indexOf("Mac") && (0, GJ.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, GJ.i)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(JJ) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(JJ, !1)
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
      _createImageBitmapFromSource(JJ, cJ) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(JJ, cJ) {
        return createImageBitmap(JJ, cJ)
      }
      resizeImageBitmap(JJ, cJ, ZJ) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(JJ) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(JJ, cJ) {
        if ("undefined" === typeof document) return new OffscreenCanvas(JJ, cJ);
        const ZJ = document.createElement("canvas");
        return ZJ.width = JJ, ZJ.height = cJ, ZJ
      }
      createCanvas(JJ, cJ) {
        return rJ._CreateCanvas(JJ, cJ)
      }
      static _FileToolsLoadImage(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        if (!fJ.e.loadImage) throw (0, sJ.m)("FileTools");
        return fJ.e.loadImage(JJ, cJ, ZJ, FJ, UJ, eJ, XJ)
      }
      _loadFile(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = (0, fJ.o)(JJ, cJ, ZJ, FJ, UJ, eJ);
        return this._activeRequests.push(XJ), XJ.onCompleteObservable.add((() => {
          const JJ = this._activeRequests.indexOf(XJ); - 1 !== JJ && this._activeRequests.splice(JJ, 1)
        })), XJ
      }
      static _FileToolsLoadFile(JJ, cJ, ZJ, FJ, UJ, eJ) {
        if (fJ.e.loadFile) return fJ.e.loadFile(JJ, cJ, ZJ, FJ, UJ, eJ);
        throw (0, sJ.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), UJ.d.ResetCache();
        for (const cJ of this._activeRequests) cJ.abort();
        this._boundRenderFunction = null, this.Sy.notifyObservers(this), this.Sy.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, GJ.i)() && window.removeEventListener("resize", this._checkForMobile);
        const JJ = eJ.c.Instances.indexOf(this);
        JJ >= 0 && eJ.c.Instances.splice(JJ, 1), eJ.c.Instances.length || (eJ.c.OnEnginesDisposedObservable.notifyObservers(this), eJ.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(JJ) {
        throw (0, sJ.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(JJ, cJ) {
        for (let ZJ = 0; ZJ < eJ.c.Instances.length; ZJ++) {
          const FJ = eJ.c.Instances[ZJ];
          for (let ZJ = 0; ZJ < FJ.scenes.length; ZJ++) FJ.scenes[ZJ].markAllMaterialsAsDirty(JJ, cJ)
        }
      }
      static GetCompatibleTextureLoader(JJ, cJ) {
        return null
      }
    }
    rJ._RenderPassIdCounter = 0, rJ._RescalePostProcessFactory = null, rJ.CollisionsEpsilon = .001, rJ.QueueNewFrame = xJ
  },
  38658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.ShadersRepository : FJ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.ShadersStore : FJ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.IncludesShadersStore : FJ.IncludesShadersStoreWGSL
      }
    }
    FJ.ShadersRepository = "src/Shaders/", FJ.ShadersStore = {}, FJ.IncludesShadersStore = {}, FJ.ShadersRepositoryWGSL = "src/ShadersWGSL/", FJ.ShadersStoreWGSL = {}, FJ.IncludesShadersStoreWGSL = {}
  },
  38668: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      e: () => vJ,
      h: () => nJ,
      i: () => sJ,
      m: () => GJ,
      n: () => rJ,
      r: () => hJ,
      u: () => jJ,
      x: () => YJ,
      z: () => qJ,
      C: () => AJ
    });
    class FJ {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(JJ) {
        JJ && this.program && JJ(this.program)
      }
      setEngine(JJ) {
        this.engine = JJ
      }
      _fillEffectInformation(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = this.engine;
        if (qJ.supportsUniformBuffers)
          for (const YJ in cJ) JJ.bindUniformBlock(YJ, cJ[YJ]);
        let jJ;
        for (this.engine.getUniforms(this, ZJ).forEach(((JJ, cJ) => {
            FJ[ZJ[cJ]] = JJ
          })), this._uniforms = FJ, jJ = 0; jJ < UJ.length; jJ++) {
          null == JJ.getUniform(UJ[jJ]) && (UJ.splice(jJ, 1), jJ--)
        }
        UJ.forEach(((JJ, cJ) => {
          eJ[JJ] = cJ
        }));
        for (const YJ of qJ.getAttributes(this, XJ)) AJ.push(YJ)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(JJ, cJ) {
        const ZJ = this._valueCache[JJ],
          FJ = cJ.updateFlag;
        if (void 0 !== ZJ && ZJ === FJ) return !1;
        const UJ = cJ.JFJ();
        let eJ = this._matrixValueCache[JJ];
        if (void 0 !== ZJ && null !== ZJ && void 0 !== eJ) {
          let cJ = !0;
          for (let JJ = 15; JJ >= 0; JJ--)
            if (eJ[JJ] !== UJ[JJ]) {
              cJ = !1;
              break
            } if (cJ) return this._valueCache[JJ] = FJ, !1
        }
        return void 0 === eJ && (eJ = this._matrixValueCache[JJ] = new Float32Array(16)), eJ.set(UJ), this._valueCache[JJ] = FJ, !0
      }
      _cacheFloat2(JJ, cJ, ZJ) {
        let FJ = this._valueCache[JJ];
        if (!FJ || 2 !== FJ.length) return FJ = [cJ, ZJ], this._valueCache[JJ] = FJ, !0;
        let UJ = !1;
        return FJ[0] !== cJ && (FJ[0] = cJ, UJ = !0), FJ[1] !== ZJ && (FJ[1] = ZJ, UJ = !0), UJ
      }
      _cacheFloat3(JJ, cJ, ZJ, FJ) {
        let UJ = this._valueCache[JJ];
        if (!UJ || 3 !== UJ.length) return UJ = [cJ, ZJ, FJ], this._valueCache[JJ] = UJ, !0;
        let eJ = !1;
        return UJ[0] !== cJ && (UJ[0] = cJ, eJ = !0), UJ[1] !== ZJ && (UJ[1] = ZJ, eJ = !0), UJ[2] !== FJ && (UJ[2] = FJ, eJ = !0), eJ
      }
      _cacheFloat4(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = this._valueCache[JJ];
        if (!eJ || 4 !== eJ.length) return eJ = [cJ, ZJ, FJ, UJ], this._valueCache[JJ] = eJ, !0;
        let XJ = !1;
        return eJ[0] !== cJ && (eJ[0] = cJ, XJ = !0), eJ[1] !== ZJ && (eJ[1] = ZJ, XJ = !0), eJ[2] !== FJ && (eJ[2] = FJ, XJ = !0), eJ[3] !== UJ && (eJ[3] = UJ, XJ = !0), XJ
      }
      setInt(JJ, cJ) {
        const ZJ = this._valueCache[JJ];
        void 0 !== ZJ && ZJ === cJ || this.engine.setInt(this._uniforms[JJ], cJ) && (this._valueCache[JJ] = cJ)
      }
      setInt2(JJ, cJ, ZJ) {
        this._cacheFloat2(JJ, cJ, ZJ) && (this.engine.setInt2(this._uniforms[JJ], cJ, ZJ) || (this._valueCache[JJ] = null))
      }
      setInt3(JJ, cJ, ZJ, FJ) {
        this._cacheFloat3(JJ, cJ, ZJ, FJ) && (this.engine.setInt3(this._uniforms[JJ], cJ, ZJ, FJ) || (this._valueCache[JJ] = null))
      }
      setInt4(JJ, cJ, ZJ, FJ, UJ) {
        this._cacheFloat4(JJ, cJ, ZJ, FJ, UJ) && (this.engine.setInt4(this._uniforms[JJ], cJ, ZJ, FJ, UJ) || (this._valueCache[JJ] = null))
      }
      setIntArray(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setIntArray(this._uniforms[JJ], cJ)
      }
      setIntArray2(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setIntArray2(this._uniforms[JJ], cJ)
      }
      setIntArray3(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setIntArray3(this._uniforms[JJ], cJ)
      }
      setIntArray4(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setIntArray4(this._uniforms[JJ], cJ)
      }
      setUInt(JJ, cJ) {
        const ZJ = this._valueCache[JJ];
        void 0 !== ZJ && ZJ === cJ || this.engine.setUInt(this._uniforms[JJ], cJ) && (this._valueCache[JJ] = cJ)
      }
      setUInt2(JJ, cJ, ZJ) {
        this._cacheFloat2(JJ, cJ, ZJ) && (this.engine.setUInt2(this._uniforms[JJ], cJ, ZJ) || (this._valueCache[JJ] = null))
      }
      setUInt3(JJ, cJ, ZJ, FJ) {
        this._cacheFloat3(JJ, cJ, ZJ, FJ) && (this.engine.setUInt3(this._uniforms[JJ], cJ, ZJ, FJ) || (this._valueCache[JJ] = null))
      }
      setUInt4(JJ, cJ, ZJ, FJ, UJ) {
        this._cacheFloat4(JJ, cJ, ZJ, FJ, UJ) && (this.engine.setUInt4(this._uniforms[JJ], cJ, ZJ, FJ, UJ) || (this._valueCache[JJ] = null))
      }
      setUIntArray(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setUIntArray(this._uniforms[JJ], cJ)
      }
      setUIntArray2(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setUIntArray2(this._uniforms[JJ], cJ)
      }
      setUIntArray3(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setUIntArray3(this._uniforms[JJ], cJ)
      }
      setUIntArray4(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setUIntArray4(this._uniforms[JJ], cJ)
      }
      setArray(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setArray(this._uniforms[JJ], cJ)
      }
      setArray2(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setArray2(this._uniforms[JJ], cJ)
      }
      setArray3(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setArray3(this._uniforms[JJ], cJ)
      }
      setArray4(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setArray4(this._uniforms[JJ], cJ)
      }
      setMatrices(JJ, cJ) {
        cJ && (this._valueCache[JJ] = null, this.engine.setMatrices(this._uniforms[JJ], cJ))
      }
      setMatrix(JJ, cJ) {
        this._cacheMatrix(JJ, cJ) && (this.engine.setMatrices(this._uniforms[JJ], cJ.JFJ()) || (this._valueCache[JJ] = null))
      }
      setMatrix3x3(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setMatrix3x3(this._uniforms[JJ], cJ)
      }
      setMatrix2x2(JJ, cJ) {
        this._valueCache[JJ] = null, this.engine.setMatrix2x2(this._uniforms[JJ], cJ)
      }
      setFloat(JJ, cJ) {
        const ZJ = this._valueCache[JJ];
        void 0 !== ZJ && ZJ === cJ || this.engine.setFloat(this._uniforms[JJ], cJ) && (this._valueCache[JJ] = cJ)
      }
      setVector2(JJ, cJ) {
        this._cacheFloat2(JJ, cJ.x, cJ.y) && (this.engine.setFloat2(this._uniforms[JJ], cJ.x, cJ.y) || (this._valueCache[JJ] = null))
      }
      setFloat2(JJ, cJ, ZJ) {
        this._cacheFloat2(JJ, cJ, ZJ) && (this.engine.setFloat2(this._uniforms[JJ], cJ, ZJ) || (this._valueCache[JJ] = null))
      }
      setVector3(JJ, cJ) {
        this._cacheFloat3(JJ, cJ.x, cJ.y, cJ.z) && (this.engine.setFloat3(this._uniforms[JJ], cJ.x, cJ.y, cJ.z) || (this._valueCache[JJ] = null))
      }
      setFloat3(JJ, cJ, ZJ, FJ) {
        this._cacheFloat3(JJ, cJ, ZJ, FJ) && (this.engine.setFloat3(this._uniforms[JJ], cJ, ZJ, FJ) || (this._valueCache[JJ] = null))
      }
      setVector4(JJ, cJ) {
        this._cacheFloat4(JJ, cJ.x, cJ.y, cJ.z, cJ.w) && (this.engine.setFloat4(this._uniforms[JJ], cJ.x, cJ.y, cJ.z, cJ.w) || (this._valueCache[JJ] = null))
      }
      setQuaternion(JJ, cJ) {
        this._cacheFloat4(JJ, cJ.x, cJ.y, cJ.z, cJ.w) && (this.engine.setFloat4(this._uniforms[JJ], cJ.x, cJ.y, cJ.z, cJ.w) || (this._valueCache[JJ] = null))
      }
      setFloat4(JJ, cJ, ZJ, FJ, UJ) {
        this._cacheFloat4(JJ, cJ, ZJ, FJ, UJ) && (this.engine.setFloat4(this._uniforms[JJ], cJ, ZJ, FJ, UJ) || (this._valueCache[JJ] = null))
      }
      setColor3(JJ, cJ) {
        this._cacheFloat3(JJ, cJ.r, cJ.g, cJ.b) && (this.engine.setFloat3(this._uniforms[JJ], cJ.r, cJ.g, cJ.b) || (this._valueCache[JJ] = null))
      }
      setColor4(JJ, cJ, ZJ) {
        this._cacheFloat4(JJ, cJ.r, cJ.g, cJ.b, ZJ) && (this.engine.setFloat4(this._uniforms[JJ], cJ.r, cJ.g, cJ.b, ZJ) || (this._valueCache[JJ] = null))
      }
      setDirectColor4(JJ, cJ) {
        this._cacheFloat4(JJ, cJ.r, cJ.g, cJ.b, cJ.a) && (this.engine.setFloat4(this._uniforms[JJ], cJ.r, cJ.g, cJ.b, cJ.a) || (this._valueCache[JJ] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var UJ = ZJ(38671);
    const eJ = new WeakMap,
      XJ = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function AJ(JJ) {
      let cJ = eJ.get(JJ);
      if (!cJ) {
        if (!JJ) return XJ;
        cJ = {
          _webGLVersion: JJ.TEXTURE_BINDING_3D ? 2 : 1,
          _context: JJ,
          parallelShaderCompile: JJ.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, eJ.set(JJ, cJ)
      }
      return cJ
    }

    function qJ(JJ) {
      eJ.delete(JJ)
    }

    function jJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = AJ(FJ);
      eJ || (eJ = XJ._createShaderProgramInjection ?? DJ);
      return eJ(JJ, xJ(cJ, "vertex", FJ, XJ._contextWasLost), xJ(ZJ, "fragment", FJ, XJ._contextWasLost), FJ, UJ, XJ.validateShaderPrograms)
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        XJ = arguments.length > 6 ? arguments[6] : void 0;
      const qJ = AJ(UJ);
      XJ || (XJ = qJ._createShaderProgramInjection ?? DJ);
      const jJ = qJ._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return XJ(JJ, fJ(cJ, "vertex", FJ, jJ, UJ, qJ._contextWasLost), fJ(ZJ, "fragment", FJ, jJ, UJ, qJ._contextWasLost), UJ, eJ, qJ.validateShaderPrograms)
    }

    function hJ(JJ, cJ) {
      const ZJ = new FJ,
        UJ = AJ(JJ);
      return UJ.parallelShaderCompile && !UJ.disableParallelShaderCompile && (ZJ.isParallelCompiled = !0), ZJ.context = UJ._context, ZJ
    }

    function DJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 5 ? arguments[5] : void 0;
      const eJ = FJ.createProgram();
      if (JJ.program = eJ, !eJ) throw new Error("Unable to create program");
      return FJ.attachShader(eJ, cJ), FJ.attachShader(eJ, ZJ), FJ.linkProgram(eJ), JJ.context = FJ, JJ.vertexShader = cJ, JJ.fragmentShader = ZJ, JJ.isParallelCompiled || nJ(JJ, FJ, UJ), eJ
    }

    function sJ(JJ, cJ, ZJ) {
      const FJ = JJ;
      if (FJ._isDisposed) return !1;
      const UJ = AJ(cJ);
      return !!(UJ && UJ.parallelShaderCompile && UJ.parallelShaderCompile.COMPLETION_STATUS_KHR && FJ.program && cJ.getProgramParameter(FJ.program, UJ.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (nJ(FJ, cJ, ZJ), !0)
    }

    function nJ(JJ, cJ, ZJ) {
      const FJ = JJ.context,
        UJ = JJ.vertexShader,
        eJ = JJ.fragmentShader,
        XJ = JJ.program;
      if (!FJ.getProgramParameter(XJ, FJ.LINK_STATUS)) {
        if (!cJ.getShaderParameter(UJ, cJ.COMPILE_STATUS)) {
          const ZJ = cJ.getShaderInfoLog(UJ);
          if (ZJ) throw JJ.vertexCompilationError = ZJ, new Error("VERTEX SHADER " + ZJ)
        }
        if (!cJ.getShaderParameter(eJ, cJ.COMPILE_STATUS)) {
          const ZJ = cJ.getShaderInfoLog(eJ);
          if (ZJ) throw JJ.fragmentCompilationError = ZJ, new Error("FRAGMENT SHADER " + ZJ)
        }
        const ZJ = FJ.getProgramInfoLog(XJ);
        if (ZJ) throw JJ.programLinkError = ZJ, new Error(ZJ)
      }
      if (ZJ) {
        FJ.validateProgram(XJ);
        if (!FJ.getProgramParameter(XJ, FJ.VALIDATE_STATUS)) {
          const cJ = FJ.getProgramInfoLog(XJ);
          if (cJ) throw JJ.programValidationError = cJ, new Error(cJ)
        }
      }
      FJ.deleteShader(UJ), FJ.deleteShader(eJ), JJ.vertexShader = void 0, JJ.fragmentShader = void 0, JJ.onCompiled && (JJ.onCompiled(), JJ.onCompiled = void 0)
    }

    function GJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, qJ, hJ) {
      let DJ = arguments.length > 10 ? arguments[10] : void 0,
        sJ = arguments.length > 11 ? arguments[11] : void 0,
        nJ = arguments.length > 12 ? arguments[12] : void 0;
      const GJ = AJ(JJ.context);
      sJ || (sJ = GJ.createRawShaderProgramInjection ?? jJ), nJ || (nJ = GJ.createShaderProgramInjection ?? YJ);
      const fJ = JJ;
      fJ.program = FJ ? sJ(fJ, cJ, ZJ, fJ.context, hJ) : nJ(fJ, cJ, ZJ, qJ, fJ.context, hJ), fJ.program.__SPECTOR_rebuildProgram = XJ, DJ()
    }

    function fJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      return xJ((0, UJ.h)(JJ, ZJ, FJ), cJ, eJ, XJ)
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      const UJ = ZJ.createShader("vertex" === cJ ? ZJ.VERTEX_SHADER : ZJ.FRAGMENT_SHADER);
      if (!UJ) {
        let JJ, UJ = ZJ.NO_ERROR;
        for (;
          (JJ = ZJ.getError()) !== ZJ.NO_ERROR;) UJ = JJ;
        throw new Error(`Something went wrong while creating a gl ${cJ} shader object. gl error=${UJ}, gl isContextLost=${ZJ.isContextLost()}, _contextWasLost=${FJ}`)
      }
      return ZJ.shaderSource(UJ, JJ), ZJ.compileShader(UJ), UJ
    }

    function rJ(JJ, cJ) {
      cJ.useProgram(JJ)
    }

    function vJ(JJ, cJ) {
      const ZJ = JJ;
      if (!ZJ.isParallelCompiled) return void cJ(JJ);
      const FJ = ZJ.onCompiled;
      ZJ.onCompiled = () => {
        FJ?.(), cJ(JJ)
      }
    }
  },
  38644: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      ThinEngine: () => QJ
    });
    var FJ = ZJ(38653),
      UJ = ZJ(38668),
      eJ = ZJ(38698),
      XJ = ZJ(38712),
      AJ = ZJ(37660),
      qJ = ZJ(38663);
    class jJ {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(JJ, cJ, ZJ, FJ, UJ) {
        if (UJ.drawBuffersExtensionDisabled) {
          const cJ = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          JJ = JJ.replace(cJ, "")
        }
        return JJ
      }
    }
    const YJ = /(flat\s)?\s*varying\s*.*/;
    class hJ {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(JJ) {
        return JJ.replace("attribute", "in")
      }
      varyingCheck(JJ, cJ) {
        return YJ.test(JJ)
      }
      varyingProcessor(JJ, cJ) {
        return JJ.replace("varying", cJ ? "in" : "out")
      }
      postProcessor(JJ, cJ, ZJ) {
        const FJ = -1 !== JJ.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (JJ = (JJ = JJ.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), ZJ) {
          const ZJ = -1 !== JJ.search(/layout *\(location *= *0\) *out/g),
            UJ = -1 !== cJ.indexOf("#define DUAL_SOURCE_BLENDING"),
            eJ = UJ ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          UJ && (JJ = "#extension GL_EXT_blend_func_extended : require\n" + JJ), JJ = (JJ = (JJ = (JJ = (JJ = (JJ = (JJ = JJ.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (FJ || ZJ ? "" : eJ) + "void main(")
        } else {
          cJ.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (JJ = "invariant gl_Position;\n" + JJ);
          if (-1 !== cJ.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + JJ
        }
        return JJ
      }
    }
    var DJ = ZJ(38720),
      sJ = ZJ(38729),
      nJ = ZJ(38732),
      GJ = ZJ(38635),
      fJ = ZJ(38671),
      xJ = ZJ(38660),
      rJ = ZJ(38741),
      vJ = ZJ(38709);
    class mJ {}
    class QJ extends eJ.e {
      get name() {
        return this._name
      }
      set name(JJ) {
        this._name = JJ
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return FJ.d.ShadersRepository
      }
      static set ShadersRepository(JJ) {
        FJ.d.ShadersRepository = JJ
      }
      get supportsUniformBuffers() {
        return this.nG > 1 && !this.disableUniformBuffers
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
      constructor(JJ, cJ, ZJ, FJ) {
        if (ZJ = ZJ || {}, super(cJ ?? ZJ.antialias, ZJ, FJ), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !JJ) return;
        let eJ;
        if (JJ.getContext) {
          if (eJ = JJ, void 0 === ZJ.preserveDrawingBuffer && (ZJ.preserveDrawingBuffer = !1), void 0 === ZJ.xrCompatible && (ZJ.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const JJ = navigator.userAgent;
            for (const cJ of QJ.ExceptionList) {
              const FJ = cJ.key,
                UJ = cJ.targets;
              if (new RegExp(FJ).test(JJ)) {
                if (cJ.capture && cJ.captureConstraint) {
                  const ZJ = cJ.capture,
                    FJ = cJ.captureConstraint,
                    UJ = new RegExp(ZJ).exec(JJ);
                  if (UJ && UJ.length > 0) {
                    if (parseInt(UJ[UJ.length - 1]) >= FJ) continue
                  }
                }
                for (const JJ of UJ) switch (JJ) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    ZJ.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, UJ.z)(this._gl)
            } : (this._onContextLost = JJ => {
              JJ.preventDefault(), this._contextWasLost = !0, (0, UJ.z)(this._gl), AJ.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, eJ.addEventListener("webglcontextrestored", this._onContextRestored, !1), ZJ.powerPreference = ZJ.powerPreference || "high-performance"), eJ.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ZJ.xrCompatible = !1), !ZJ.disableWebGL2Support) try {
            this._gl = eJ.getContext("webgl2", ZJ) || eJ.getContext("experimental-webgl2", ZJ), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (YJ) {}
          if (!this._gl) {
            if (!eJ) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = eJ.getContext("webgl", ZJ) || eJ.getContext("experimental-webgl", ZJ)
            } catch (YJ) {
              throw new Error("WebGL not supported", {
                cause: YJ
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = JJ, eJ = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const cJ = this._gl.getContextAttributes();
          cJ && (ZJ.stencil = cJ.stencil)
        }
        this._sharedInit(eJ), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ZJ.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ZJ.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let UJ = 0; UJ < this._caps.maxVertexAttribs; UJ++) this._currentBufferPointers[UJ] = new mJ;
        this._shaderProcessor = this.nG > 1 ? new hJ : new jJ;
        const XJ = `Babylon.js v${QJ.Version}`;
        AJ.c.Log(XJ + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", XJ);
        const qJ = (0, UJ.C)(this._gl);
        qJ.validateShaderPrograms = this.validateShaderPrograms, qJ.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(JJ) {
        return null
      }
      areAllEffectsReady() {
        for (const JJ in this._compiledEffects) {
          if (!this._compiledEffects[JJ].isReady()) return !1
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
        const JJ = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != JJ && (this._glRenderer = this._gl.getParameter(JJ.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(JJ.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const cJ = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!cJ, this._alphaState = new vJ.b(this._caps.blendParametersPerTarget), cJ && (this._gl.blendEquationSeparateIndexed = cJ.blendEquationSeparateiOES.bind(cJ), this._gl.blendEquationIndexed = cJ.blendEquationiOES.bind(cJ), this._gl.blendFuncSeparateIndexed = cJ.blendFuncSeparateiOES.bind(cJ), this._gl.blendFuncIndexed = cJ.blendFunciOES.bind(cJ), this._gl.colorMaskIndexed = cJ.colorMaskiOES.bind(cJ), this._gl.disableIndexed = cJ.disableiOES.bind(cJ), this._gl.enableIndexed = cJ.enableiOES.bind(cJ)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const JJ = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== JJ) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = JJ.drawBuffersWEBGL.bind(JJ), this._caps.maxDrawBuffers = this._gl.getParameter(JJ.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let cJ = 0; cJ < 16; cJ++) this._gl["COLOR_ATTACHMENT" + cJ + "_WEBGL"] = JJ["COLOR_ATTACHMENT" + cJ + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const JJ = this._gl.getExtension("WEBGL_depth_texture");
          null != JJ && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = JJ.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const JJ = this._gl.getExtension("OES_vertex_array_object");
          null != JJ && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = JJ.createVertexArrayOES.bind(JJ), this._gl.bindVertexArray = JJ.bindVertexArrayOES.bind(JJ), this._gl.deleteVertexArray = JJ.deleteVertexArrayOES.bind(JJ))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const JJ = this._gl.getExtension("ANGLE_instanced_arrays");
          null != JJ ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = JJ.drawArraysInstancedANGLE.bind(JJ), this._gl.drawElementsInstanced = JJ.drawElementsInstancedANGLE.bind(JJ), this._gl.vertexAttribDivisor = JJ.vertexAttribDivisorANGLE.bind(JJ)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const JJ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            cJ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (JJ && cJ && (this._caps.highPrecisionShaderSupported = 0 !== JJ.precision && 0 !== cJ.precision, this._caps.shaderFloatPrecision = Math.min(JJ.precision, cJ.precision)), !this._shouldUseHighPrecisionShader) {
            const JJ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              cJ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            JJ && cJ && (this._caps.shaderFloatPrecision = Math.min(JJ.precision, cJ.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const JJ = this._gl.getExtension("EXT_blend_minmax");
          null != JJ && (this._caps.blendMinMax = !0, this._gl.MAX = JJ.MAX_EXT, this._gl.MIN = JJ.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const JJ = this._gl.getExtension("EXT_sRGB");
            null != JJ && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: JJ.SRGB_EXT,
              SRGB8: JJ.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: JJ.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const JJ = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== JJ && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && JJ)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let ZJ = 0; ZJ < this._maxSimultaneousTextures; ZJ++) this._nextFreeTextureSlots.push(ZJ);
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
      get nG() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const JJ = this._workingCanvas.getContext("2d");
        JJ && (this._workingContext = JJ)
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
        const JJ = this.getGlInfo();
        return JJ && JJ.renderer ? JJ.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const eJ = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = eJ;
        let XJ = 0;
        if (cJ && JJ) {
          let cJ = !0;
          if (this._currentRenderTarget) {
            const ZJ = this._currentRenderTarget.texture?.format;
            if (void 0 !== ZJ && (0, rJ.l)(ZJ)) {
              const ZJ = this._currentRenderTarget.texture?.type;
              void 0 !== ZJ && (0, rJ.m)(ZJ) ? (QJ._TempClearColorUint32[0] = 255 * JJ.r, QJ._TempClearColorUint32[1] = 255 * JJ.g, QJ._TempClearColorUint32[2] = 255 * JJ.b, QJ._TempClearColorUint32[3] = 255 * JJ.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, QJ._TempClearColorUint32), cJ = !1) : (QJ._TempClearColorInt32[0] = 255 * JJ.r, QJ._TempClearColorInt32[1] = 255 * JJ.g, QJ._TempClearColorInt32[2] = 255 * JJ.b, QJ._TempClearColorInt32[3] = 255 * JJ.a, this._gl.clearBufferiv(this._gl.COLOR, 0, QJ._TempClearColorInt32), cJ = !1)
            }
          }
          cJ && (this._gl.clearColor(JJ.r, JJ.g, JJ.b, void 0 !== JJ.a ? JJ.a : 1), XJ |= this._gl.COLOR_BUFFER_BIT)
        }
        ZJ && (this.LZJ ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), XJ |= this._gl.DEPTH_BUFFER_BIT), FJ && (this._gl.clearStencil(UJ), XJ |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(XJ)
      }
      _clearColorAttachment(JJ, cJ, ZJ, FJ) {
        if ((0, rJ.l)(ZJ)) {
          const ZJ = (0, rJ.m)(FJ),
            UJ = ZJ ? QJ._TempClearColorUint32 : QJ._TempClearColorInt32;
          return UJ[0] = cJ.r, UJ[1] = cJ.g, UJ[2] = cJ.b, UJ[3] = cJ.a, void(ZJ ? this._gl.clearBufferuiv(this._gl.COLOR, JJ, UJ) : this._gl.clearBufferiv(this._gl.COLOR, JJ, UJ))
        }
        QJ._TempClearColorFloat32[0] = cJ.r, QJ._TempClearColorFloat32[1] = cJ.g, QJ._TempClearColorFloat32[2] = cJ.b, QJ._TempClearColorFloat32[3] = cJ.a, this._gl.clearBufferfv(this._gl.COLOR, JJ, QJ._TempClearColorFloat32)
      }
      _viewport(JJ, cJ, ZJ, FJ) {
        JJ === this._viewportCached.x && cJ === this._viewportCached.y && ZJ === this._viewportCached.z && FJ === this._viewportCached.w || (this._viewportCached.x = JJ, this._viewportCached.y = cJ, this._viewportCached.z = ZJ, this._viewportCached.w = FJ, this._gl.viewport(JJ, cJ, ZJ, FJ))
      }
      WE() {
        super.WE(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qJ = JJ;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = JJ, this._integerMRTAttachmentsMask = !JJ.isMulti && JJ.texture && (0, rJ.l)(JJ.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(qJ._framebuffer);
        const jJ = this._gl;
        JJ.isMulti || (JJ.is2DArray || JJ.is3D ? (jJ.framebufferTextureLayer(jJ.FRAMEBUFFER, jJ.COLOR_ATTACHMENT0, JJ.texture._hardwareTexture?.underlyingResource, eJ, XJ), qJ._currentLOD = eJ) : JJ.isCube ? jJ.framebufferTexture2D(jJ.FRAMEBUFFER, jJ.COLOR_ATTACHMENT0, jJ.TEXTURE_CUBE_MAP_POSITIVE_X + cJ, JJ.texture._hardwareTexture?.underlyingResource, eJ) : qJ._currentLOD !== eJ && (jJ.framebufferTexture2D(jJ.FRAMEBUFFER, jJ.COLOR_ATTACHMENT0, jJ.TEXTURE_2D, JJ.texture._hardwareTexture?.underlyingResource, eJ), qJ._currentLOD = eJ));
        const YJ = JJ._depthStencilTexture;
        if (YJ) {
          JJ.is3D && (JJ.texture.width === YJ.width && JJ.texture.height === YJ.height && JJ.texture.depth === YJ.depth || AJ.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const ZJ = JJ._depthStencilTextureWithStencil ? jJ.DEPTH_STENCIL_ATTACHMENT : jJ.DEPTH_ATTACHMENT;
          JJ.is2DArray || JJ.is3D ? jJ.framebufferTextureLayer(jJ.FRAMEBUFFER, ZJ, YJ._hardwareTexture?.underlyingResource, eJ, XJ) : JJ.isCube ? jJ.framebufferTexture2D(jJ.FRAMEBUFFER, ZJ, jJ.TEXTURE_CUBE_MAP_POSITIVE_X + cJ, YJ._hardwareTexture?.underlyingResource, eJ) : jJ.framebufferTexture2D(jJ.FRAMEBUFFER, ZJ, jJ.TEXTURE_2D, YJ._hardwareTexture?.underlyingResource, eJ)
        }
        qJ._MSAAFramebuffer && this._bindUnboundFramebuffer(qJ._MSAAFramebuffer), this._cachedViewport && !UJ ? this.setViewport(this._cachedViewport, ZJ, FJ) : (ZJ || (ZJ = JJ.width, eJ && (ZJ /= Math.pow(2, eJ))), FJ || (FJ = JJ.height, eJ && (FJ /= Math.pow(2, eJ))), this._viewport(0, 0, ZJ, FJ)), this.wipeCaches()
      }
      setStateCullFaceType(JJ, cJ) {
        const ZJ = this.cullBackFaces ?? JJ ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== ZJ || cJ) && (this._depthCullingState.cullFace = ZJ)
      }
      setState(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== JJ || ZJ) && (this._depthCullingState.cull = JJ), this.setStateCullFaceType(UJ, ZJ), this.setZOffset(cJ), this.setZOffsetUnits(XJ);
        const AJ = FJ ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== AJ || ZJ) && (this._depthCullingState.frontFace = AJ), this._stencilStateComposer.stencilMaterial = eJ
      }
      _resolveAndGenerateMipMapsFramebuffer(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        JJ.disableAutomaticMSAAResolve || (JJ.isMulti ? this.resolveMultiFramebuffer(JJ) : this.resolveFramebuffer(JJ)), cJ || (JJ.isMulti ? this.generateMipMapsMultiFramebuffer(JJ) : this.generateMipMapsFramebuffer(JJ))
      }
      _bindUnboundFramebuffer(JJ) {
        this._currentFramebuffer !== JJ && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, JJ), this._currentFramebuffer = JJ)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(JJ) {
        const cJ = this._getTextureTarget(JJ);
        this._bindTextureDirectly(cJ, JJ, !0), this._gl.generateMipmap(cJ), this._bindTextureDirectly(cJ, null)
      }
      unBindFramebuffer(JJ, cJ, ZJ) {
        const FJ = JJ;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(JJ, cJ), ZJ && (FJ._MSAAFramebuffer && this._bindUnboundFramebuffer(FJ._framebuffer), ZJ()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(JJ) {
        JJ.isMulti || !JJ.texture?.generateMipMaps || JJ.isCube || this.generateMipmaps(JJ.texture)
      }
      resolveFramebuffer(JJ) {
        const cJ = JJ,
          ZJ = this._gl;
        if (!cJ._MSAAFramebuffer || cJ.isMulti) return;
        let FJ = cJ.resolveMSAAColors ? ZJ.COLOR_BUFFER_BIT : 0;
        FJ |= cJ._generateDepthBuffer && cJ.resolveMSAADepth ? ZJ.DEPTH_BUFFER_BIT : 0, FJ |= cJ._generateStencilBuffer && cJ.resolveMSAAStencil ? ZJ.STENCIL_BUFFER_BIT : 0, ZJ.bindFramebuffer(ZJ.READ_FRAMEBUFFER, cJ._MSAAFramebuffer), ZJ.bindFramebuffer(ZJ.DRAW_FRAMEBUFFER, cJ._framebuffer), ZJ.blitFramebuffer(0, 0, JJ.width, JJ.height, 0, 0, JJ.width, JJ.height, FJ, ZJ.NEAREST)
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
      createVertexBuffer(JJ, cJ, ZJ) {
        return this._createVertexBuffer(JJ, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(JJ, cJ) {
        const ZJ = this._gl.createBuffer();
        if (!ZJ) throw new Error("Unable to create vertex buffer");
        const FJ = new DJ.e(ZJ);
        return this.bindArrayBuffer(FJ), "number" !== typeof JJ ? JJ instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(JJ), cJ), FJ.qh = 4 * JJ.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, JJ, cJ), FJ.qh = JJ.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(JJ), cJ), FJ.qh = JJ), this._resetVertexBufferBinding(), FJ.references = 1, FJ
      }
      createDynamicVertexBuffer(JJ, cJ) {
        return this._createVertexBuffer(JJ, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(JJ, cJ, ZJ) {
        const FJ = this._gl.createBuffer(),
          UJ = new DJ.e(FJ);
        if (!FJ) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(UJ);
        const eJ = this._normalizeIndexData(JJ);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, eJ, cJ ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), UJ.references = 1, UJ.is32Bits = 4 === eJ.BYTES_PER_ELEMENT, UJ
      }
      _normalizeIndexData(JJ) {
        if (2 === JJ.BYTES_PER_ELEMENT) return JJ;
        if (this._caps.uintIndices) {
          if (JJ instanceof Uint32Array) return JJ;
          for (let cJ = 0; cJ < JJ.length; cJ++)
            if (JJ[cJ] >= 65535) return new Uint32Array(JJ);
          return new Uint16Array(JJ)
        }
        return new Uint16Array(JJ)
      }
      bindArrayBuffer(JJ) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(JJ, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(JJ, cJ, ZJ) {
        const FJ = JJ.program,
          UJ = this._gl.getUniformBlockIndex(FJ, cJ);
        this._gl.uniformBlockBinding(FJ, UJ, ZJ)
      }
      bindIndexBuffer(JJ) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(JJ, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(JJ, cJ) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[cJ] !== JJ) && (this._gl.bindBuffer(cJ, JJ ? JJ.underlyingResource : null), this._currentBoundBuffer[cJ] = JJ)
      }
      updateArrayBuffer(JJ) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, JJ)
      }
      _vertexAttribPointer(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = this._currentBufferPointers[cJ];
        if (!AJ) return;
        let qJ = !1;
        AJ.active ? (AJ.buffer !== JJ && (AJ.buffer = JJ, qJ = !0), AJ.size !== ZJ && (AJ.size = ZJ, qJ = !0), AJ.type !== FJ && (AJ.type = FJ, qJ = !0), AJ.normalized !== UJ && (AJ.normalized = UJ, qJ = !0), AJ.stride !== eJ && (AJ.stride = eJ, qJ = !0), AJ.offset !== XJ && (AJ.offset = XJ, qJ = !0)) : (qJ = !0, AJ.active = !0, AJ.index = cJ, AJ.size = ZJ, AJ.type = FJ, AJ.normalized = UJ, AJ.stride = eJ, AJ.offset = XJ, AJ.buffer = JJ), (qJ || this._vaoRecordInProgress) && (this.bindArrayBuffer(JJ), FJ === this._gl.UNSIGNED_INT || FJ === this._gl.INT ? this._gl.vertexAttribIPointer(cJ, ZJ, FJ, eJ, XJ) : this._gl.vertexAttribPointer(cJ, ZJ, FJ, UJ, eJ, XJ))
      }
      _bindIndexBufferWithCache(JJ) {
        null != JJ && this._cachedIndexBuffer !== JJ && (this._cachedIndexBuffer = JJ, this.bindIndexBuffer(JJ), this._uintIndicesCurrentlySet = JJ.is32Bits)
      }
      _bindVertexBuffersAttributes(JJ, cJ, ZJ) {
        const FJ = cJ.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let UJ = 0; UJ < FJ.length; UJ++) {
          const eJ = cJ.getAttributeLocation(UJ);
          if (eJ >= 0) {
            const cJ = FJ[UJ];
            let XJ = null;
            if (ZJ && (XJ = ZJ[cJ]), XJ || (XJ = JJ[cJ]), !XJ) continue;
            this._gl.enableVertexAttribArray(eJ), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[eJ] = !0);
            const AJ = XJ.getBuffer();
            AJ && (this._vertexAttribPointer(AJ, eJ, XJ.getSize(), XJ.type, XJ.normalized, XJ.byteStride, XJ.byteOffset), XJ.getIsInstanced() && (this._gl.vertexAttribDivisor(eJ, XJ.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(eJ), this._currentInstanceBuffers.push(AJ))))
          }
        }
      }
      recordVertexArrayObject(JJ, cJ, ZJ, FJ) {
        const UJ = this._gl.createVertexArray();
        if (!UJ) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(UJ), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(JJ, ZJ, FJ), this.bindIndexBuffer(cJ), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), UJ
      }
      bindVertexArrayObject(JJ, cJ) {
        this._cachedVertexArrayObject !== JJ && (this._cachedVertexArrayObject = JJ, this._gl.bindVertexArray(JJ), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != cJ && cJ.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(JJ, cJ, ZJ, FJ, UJ) {
        if (this._cachedVertexBuffers !== JJ || this._cachedEffectForVertexBuffers !== UJ) {
          this._cachedVertexBuffers = JJ, this._cachedEffectForVertexBuffers = UJ;
          const cJ = UJ.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let eJ = 0;
          for (let XJ = 0; XJ < cJ; XJ++)
            if (XJ < ZJ.length) {
              const cJ = UJ.getAttributeLocation(XJ);
              cJ >= 0 && (this._gl.enableVertexAttribArray(cJ), this._vertexAttribArraysEnabled[cJ] = !0, this._vertexAttribPointer(JJ, cJ, ZJ[XJ], this._gl.FLOAT, !1, FJ, eJ)), eJ += 4 * ZJ[XJ]
            }
        }
        this._bindIndexBufferWithCache(cJ)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(JJ, cJ, ZJ, FJ) {
        this._cachedVertexBuffers === JJ && this._cachedEffectForVertexBuffers === ZJ || (this._cachedVertexBuffers = JJ, this._cachedEffectForVertexBuffers = ZJ, this._bindVertexBuffersAttributes(JJ, ZJ, FJ)), this._bindIndexBufferWithCache(cJ)
      }
      unbindInstanceAttributes() {
        let JJ;
        for (let cJ = 0, ZJ = this._currentInstanceLocations.length; cJ < ZJ; cJ++) {
          const ZJ = this._currentInstanceBuffers[cJ];
          JJ != ZJ && ZJ.references && (JJ = ZJ, this.bindArrayBuffer(ZJ));
          const FJ = this._currentInstanceLocations[cJ];
          this._gl.vertexAttribDivisor(FJ, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(JJ) {
        this._gl.deleteVertexArray(JJ)
      }
      _releaseBuffer(JJ) {
        return JJ.references--, 0 === JJ.references && (this._deleteBuffer(JJ), !0)
      }
      _deleteBuffer(JJ) {
        this._gl.deleteBuffer(JJ.underlyingResource)
      }
      updateAndBindInstancesBuffer(JJ, cJ, ZJ) {
        if (this.bindArrayBuffer(JJ), cJ && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, cJ), void 0 !== ZJ[0].index) this.bindInstancesBuffer(JJ, ZJ, !0);
        else
          for (let FJ = 0; FJ < 4; FJ++) {
            const cJ = ZJ[FJ];
            this._vertexAttribArraysEnabled[cJ] || (this._gl.enableVertexAttribArray(cJ), this._vertexAttribArraysEnabled[cJ] = !0), this._vertexAttribPointer(JJ, cJ, 4, this._gl.FLOAT, !1, 64, 16 * FJ), this._gl.vertexAttribDivisor(cJ, 1), this._currentInstanceLocations.push(cJ), this._currentInstanceBuffers.push(JJ)
          }
      }
      bindInstancesBuffer(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(JJ);
        let FJ = 0;
        if (ZJ)
          for (let UJ = 0; UJ < cJ.length; UJ++) {
            FJ += 4 * cJ[UJ].attributeSize
          }
        for (let UJ = 0; UJ < cJ.length; UJ++) {
          const ZJ = cJ[UJ];
          void 0 === ZJ.index && (ZJ.index = this._currentEffect.getAttributeLocationByName(ZJ.attributeName)), ZJ.index < 0 || (this._vertexAttribArraysEnabled[ZJ.index] || (this._gl.enableVertexAttribArray(ZJ.index), this._vertexAttribArraysEnabled[ZJ.index] = !0), this._vertexAttribPointer(JJ, ZJ.index, ZJ.attributeSize, ZJ.attributeType || this._gl.FLOAT, ZJ.normalized || !1, FJ, ZJ.offset), this._gl.vertexAttribDivisor(ZJ.index, void 0 === ZJ.divisor ? 1 : ZJ.divisor), this._currentInstanceLocations.push(ZJ.index), this._currentInstanceBuffers.push(JJ))
        }
      }
      disableInstanceAttributeByName(JJ) {
        if (!this._currentEffect) return;
        const cJ = this._currentEffect.getAttributeLocationByName(JJ);
        this.disableInstanceAttribute(cJ)
      }
      disableInstanceAttribute(JJ) {
        let cJ, ZJ = !1;
        for (; - 1 !== (cJ = this._currentInstanceLocations.indexOf(JJ));) this._currentInstanceLocations.splice(cJ, 1), this._currentInstanceBuffers.splice(cJ, 1), ZJ = !0;
        ZJ && (this._gl.vertexAttribDivisor(JJ, 0), this.disableAttributeByIndex(JJ))
      }
      disableAttributeByIndex(JJ) {
        this._gl.disableVertexAttribArray(JJ), this._vertexAttribArraysEnabled[JJ] = !1, this._currentBufferPointers[JJ].active = !1
      }
      draw(JJ, cJ, ZJ, FJ) {
        this.drawElementsType(JJ ? 0 : 1, cJ, ZJ, FJ)
      }
      drawPointClouds(JJ, cJ, ZJ) {
        this.drawArraysType(2, JJ, cJ, ZJ)
      }
      drawUnIndexed(JJ, cJ, ZJ, FJ) {
        this.drawArraysType(JJ ? 0 : 1, cJ, ZJ, FJ)
      }
      drawElementsType(JJ, cJ, ZJ, FJ) {
        this.applyStates(), this._reportDrawCall();
        const UJ = this._drawMode(JJ),
          eJ = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          XJ = this._uintIndicesCurrentlySet ? 4 : 2;
        FJ ? this._gl.drawElementsInstanced(UJ, ZJ, eJ, cJ * XJ, FJ) : this._gl.drawElements(UJ, ZJ, eJ, cJ * XJ)
      }
      drawArraysType(JJ, cJ, ZJ, FJ) {
        this.applyStates(), this._reportDrawCall();
        const UJ = this._drawMode(JJ);
        FJ ? this._gl.drawArraysInstanced(UJ, cJ, ZJ, FJ) : this._gl.drawArrays(UJ, cJ, ZJ)
      }
      _drawMode(JJ) {
        switch (JJ) {
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
      _releaseEffect(JJ) {
        this._compiledEffects[JJ._key] && delete this._compiledEffects[JJ._key];
        const cJ = JJ.getPipelineContext();
        cJ && this._deletePipelineContext(cJ)
      }
      _deletePipelineContext(JJ) {
        const cJ = JJ;
        cJ && cJ.program && (cJ.program.__SPECTOR_rebuildProgram = null, (0, xJ.j)(cJ), this._gl && (this._currentProgram === cJ.program && this._setProgram(null), this._gl.deleteProgram(cJ.program)))
      }
      _getGlobalDefines(JJ) {
        return (0, fJ.k)(JJ, this.isNDCHalfZRange, this.LZJ, this.useExactSrgbConversions)
      }
      createEffect(JJ, cJ, ZJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        let hJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          DJ = arguments.length > 10 ? arguments[10] : void 0;
        const sJ = "string" === typeof JJ ? JJ : JJ.vertexToken || JJ.vertexSource || JJ.vertexElement || JJ.vertex,
          nJ = "string" === typeof JJ ? JJ : JJ.fragmentToken || JJ.fragmentSource || JJ.fragmentElement || JJ.fragment,
          GJ = this._getGlobalDefines(),
          fJ = void 0 !== cJ.attributes;
        let xJ = XJ ?? cJ.defines ?? "";
        GJ && (xJ += GJ);
        const rJ = sJ + "+" + nJ + "@" + xJ;
        if (this._compiledEffects[rJ]) {
          const JJ = this._compiledEffects[rJ];
          return qJ && JJ.isReady() && qJ(JJ), JJ._refCount++, JJ
        }
        this._gl && (0, UJ.C)(this._gl);
        const vJ = new FJ.d(JJ, cJ, fJ ? this : ZJ, eJ, this, XJ, AJ, qJ, jJ, YJ, rJ, cJ.shaderLanguage ?? hJ, cJ.extraInitializationsAsync ?? DJ);
        return this._compiledEffects[rJ] = vJ, vJ
      }
      _getShaderSource(JJ) {
        return this._gl.getShaderSource(JJ)
      }
      createRawShaderProgram(JJ, cJ, ZJ, FJ) {
        let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const XJ = (0, UJ.C)(this._gl);
        return XJ._contextWasLost = this._contextWasLost, XJ.validateShaderPrograms = this.validateShaderPrograms, (0, UJ.u)(JJ, cJ, ZJ, FJ || this._gl, eJ)
      }
      createShaderProgram(JJ, cJ, ZJ, FJ, eJ) {
        let XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const AJ = (0, UJ.C)(this._gl);
        return AJ._contextWasLost = this._contextWasLost, AJ.validateShaderPrograms = this.validateShaderPrograms, (0, UJ.x)(JJ, cJ, ZJ, FJ, eJ || this._gl, XJ)
      }
      inlineShaderCode(JJ) {
        return JJ
      }
      createPipelineContext(JJ) {
        if (this._gl) {
          (0, UJ.C)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const cJ = (0, UJ.r)(this._gl, JJ);
        return cJ.engine = this, cJ
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(JJ) {
        return (0, UJ.h)(JJ, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(JJ, cJ, ZJ, FJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ) {
        const DJ = (0, UJ.C)(this._gl);
        return DJ._contextWasLost = this._contextWasLost, DJ.validateShaderPrograms = this.validateShaderPrograms, DJ._createShaderProgramInjection = this._createShaderProgram.bind(this), DJ.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), DJ.createShaderProgramInjection = this.createShaderProgram.bind(this), DJ.loadFileInjection = this._loadFile.bind(this), (0, UJ.m)(JJ, cJ, ZJ, FJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ)
      }
      _createShaderProgram(JJ, cJ, ZJ, FJ) {
        let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, UJ.b)(JJ, cJ, ZJ, FJ, eJ)
      }
      _isRenderingStateCompiled(JJ) {
        return !this._isDisposed && (0, UJ.i)(JJ, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(JJ, cJ) {
        (0, UJ.e)(JJ, cJ)
      }
      getUniforms(JJ, cJ) {
        const ZJ = new Array,
          FJ = JJ;
        for (let UJ = 0; UJ < cJ.length; UJ++) ZJ.push(this._gl.getUniformLocation(FJ.program, cJ[UJ]));
        return ZJ
      }
      getAttributes(JJ, cJ) {
        const ZJ = [],
          FJ = JJ;
        for (let eJ = 0; eJ < cJ.length; eJ++) try {
          ZJ.push(this._gl.getAttribLocation(FJ.program, cJ[eJ]))
        } catch (UJ) {
          ZJ.push(-1)
        }
        return ZJ
      }
      enableEffect(JJ) {
        (JJ = null !== JJ && (0, XJ.d)(JJ) ? JJ.effect : JJ) && JJ !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(JJ), this._currentEffect = JJ, JJ.onBind && JJ.onBind(JJ), JJ._onBindObservable && JJ._onBindObservable.notifyObservers(JJ))
      }
      setInt(JJ, cJ) {
        return !!JJ && (this._gl.uniform1i(JJ, cJ), !0)
      }
      setInt2(JJ, cJ, ZJ) {
        return !!JJ && (this._gl.uniform2i(JJ, cJ, ZJ), !0)
      }
      setInt3(JJ, cJ, ZJ, FJ) {
        return !!JJ && (this._gl.uniform3i(JJ, cJ, ZJ, FJ), !0)
      }
      setInt4(JJ, cJ, ZJ, FJ, UJ) {
        return !!JJ && (this._gl.uniform4i(JJ, cJ, ZJ, FJ, UJ), !0)
      }
      setIntArray(JJ, cJ) {
        return !!JJ && (this._gl.uniform1iv(JJ, cJ), !0)
      }
      setIntArray2(JJ, cJ) {
        return !(!JJ || cJ.length % 2 !== 0) && (this._gl.uniform2iv(JJ, cJ), !0)
      }
      setIntArray3(JJ, cJ) {
        return !(!JJ || cJ.length % 3 !== 0) && (this._gl.uniform3iv(JJ, cJ), !0)
      }
      setIntArray4(JJ, cJ) {
        return !(!JJ || cJ.length % 4 !== 0) && (this._gl.uniform4iv(JJ, cJ), !0)
      }
      setUInt(JJ, cJ) {
        return !!JJ && (this._gl.uniform1ui(JJ, cJ), !0)
      }
      setUInt2(JJ, cJ, ZJ) {
        return !!JJ && (this._gl.uniform2ui(JJ, cJ, ZJ), !0)
      }
      setUInt3(JJ, cJ, ZJ, FJ) {
        return !!JJ && (this._gl.uniform3ui(JJ, cJ, ZJ, FJ), !0)
      }
      setUInt4(JJ, cJ, ZJ, FJ, UJ) {
        return !!JJ && (this._gl.uniform4ui(JJ, cJ, ZJ, FJ, UJ), !0)
      }
      setUIntArray(JJ, cJ) {
        return !!JJ && (this._gl.uniform1uiv(JJ, cJ), !0)
      }
      setUIntArray2(JJ, cJ) {
        return !(!JJ || cJ.length % 2 !== 0) && (this._gl.uniform2uiv(JJ, cJ), !0)
      }
      setUIntArray3(JJ, cJ) {
        return !(!JJ || cJ.length % 3 !== 0) && (this._gl.uniform3uiv(JJ, cJ), !0)
      }
      setUIntArray4(JJ, cJ) {
        return !(!JJ || cJ.length % 4 !== 0) && (this._gl.uniform4uiv(JJ, cJ), !0)
      }
      setArray(JJ, cJ) {
        return !!JJ && (!(cJ.length < 1) && (this._gl.uniform1fv(JJ, cJ), !0))
      }
      setArray2(JJ, cJ) {
        return !(!JJ || cJ.length % 2 !== 0) && (this._gl.uniform2fv(JJ, cJ), !0)
      }
      setArray3(JJ, cJ) {
        return !(!JJ || cJ.length % 3 !== 0) && (this._gl.uniform3fv(JJ, cJ), !0)
      }
      setArray4(JJ, cJ) {
        return !(!JJ || cJ.length % 4 !== 0) && (this._gl.uniform4fv(JJ, cJ), !0)
      }
      setMatrices(JJ, cJ) {
        return !!JJ && (this._gl.uniformMatrix4fv(JJ, !1, cJ), !0)
      }
      setMatrix3x3(JJ, cJ) {
        return !!JJ && (this._gl.uniformMatrix3fv(JJ, !1, cJ), !0)
      }
      setMatrix2x2(JJ, cJ) {
        return !!JJ && (this._gl.uniformMatrix2fv(JJ, !1, cJ), !0)
      }
      setFloat(JJ, cJ) {
        return !!JJ && (this._gl.uniform1f(JJ, cJ), !0)
      }
      setFloat2(JJ, cJ, ZJ) {
        return !!JJ && (this._gl.uniform2f(JJ, cJ, ZJ), !0)
      }
      setFloat3(JJ, cJ, ZJ, FJ) {
        return !!JJ && (this._gl.uniform3f(JJ, cJ, ZJ, FJ), !0)
      }
      setFloat4(JJ, cJ, ZJ, FJ, UJ) {
        return !!JJ && (this._gl.uniform4f(JJ, cJ, ZJ, FJ, UJ), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const JJ = this._colorWrite;
          this._gl.colorMask(JJ, JJ, JJ, JJ)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(JJ) {
        this.preventCacheWipeBetweenFrames && !JJ || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), JJ && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(JJ, cJ) {
        const ZJ = this._gl;
        let FJ = ZJ.NEAREST,
          UJ = ZJ.NEAREST,
          eJ = !1;
        switch (JJ) {
          case 11:
            FJ = ZJ.LINEAR, UJ = cJ ? ZJ.LINEAR_MIPMAP_NEAREST : ZJ.LINEAR;
            break;
          case 3:
            FJ = ZJ.LINEAR, eJ = !0, UJ = cJ ? ZJ.LINEAR_MIPMAP_LINEAR : ZJ.LINEAR;
            break;
          case 8:
            eJ = !0, FJ = ZJ.NEAREST, UJ = cJ ? ZJ.NEAREST_MIPMAP_LINEAR : ZJ.NEAREST;
            break;
          case 4:
            FJ = ZJ.NEAREST, UJ = cJ ? ZJ.NEAREST_MIPMAP_NEAREST : ZJ.NEAREST;
            break;
          case 5:
            FJ = ZJ.NEAREST, UJ = cJ ? ZJ.LINEAR_MIPMAP_NEAREST : ZJ.LINEAR;
            break;
          case 6:
            eJ = !0, FJ = ZJ.NEAREST, UJ = cJ ? ZJ.LINEAR_MIPMAP_LINEAR : ZJ.LINEAR;
            break;
          case 7:
            FJ = ZJ.NEAREST, UJ = ZJ.LINEAR;
            break;
          case 1:
            FJ = ZJ.NEAREST, UJ = ZJ.NEAREST;
            break;
          case 9:
            FJ = ZJ.LINEAR, UJ = cJ ? ZJ.NEAREST_MIPMAP_NEAREST : ZJ.NEAREST;
            break;
          case 10:
            eJ = !0, FJ = ZJ.LINEAR, UJ = cJ ? ZJ.NEAREST_MIPMAP_LINEAR : ZJ.NEAREST;
            break;
          case 2:
            FJ = ZJ.LINEAR, UJ = ZJ.LINEAR;
            break;
          case 12:
            FJ = ZJ.LINEAR, UJ = ZJ.NEAREST
        }
        return {
          min: UJ,
          mag: FJ,
          hasMipMaps: eJ
        }
      }
      _createTexture() {
        const JJ = this._gl.createTexture();
        if (!JJ) throw new Error("Unable to create texture");
        return JJ
      }
      _createHardwareTexture() {
        return new nJ.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(JJ, cJ) {
        let ZJ, FJ, UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          eJ = !1,
          XJ = 0,
          qJ = 3,
          jJ = 5,
          YJ = !1,
          hJ = 1,
          DJ = !1,
          sJ = 0,
          nJ = !1;
        void 0 !== cJ && "object" === typeof cJ ? (ZJ = !!cJ.generateMipMaps, eJ = !!cJ.createMipMaps, XJ = void 0 === cJ.type ? 0 : cJ.type, qJ = void 0 === cJ.samplingMode ? 3 : cJ.samplingMode, jJ = void 0 === cJ.format ? 5 : cJ.format, YJ = void 0 !== cJ.useSRGBBuffer && cJ.useSRGBBuffer, hJ = cJ.samples ?? 1, FJ = cJ.label, DJ = !!cJ.createMSAATexture, sJ = cJ.comparisonFunction || 0, nJ = !!cJ.isCube) : ZJ = !!cJ, YJ && (YJ = this._caps.supportSRGBBuffers && (this.nG > 1 || this.isWebGPU)), (1 !== XJ || this._caps.textureFloatLinearFiltering) && (2 !== XJ || this._caps.textureHalfFloatLinearFiltering) || (qJ = 1), 1 !== XJ || this._caps.textureFloat || (XJ = 0, AJ.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const fJ = (0, rJ.h)(jJ),
          xJ = (0, rJ.e)(jJ),
          vJ = this._gl,
          mJ = new GJ.e(this, UJ),
          QJ = JJ.width || JJ,
          EJ = JJ.height || JJ,
          VJ = JJ.depth || 0,
          KJ = JJ.layers || 0,
          yJ = this._getSamplingParameters(qJ, (ZJ || eJ) && !fJ),
          SJ = 0 !== KJ ? vJ.TEXTURE_2D_ARRAY : 0 !== VJ ? vJ.TEXTURE_3D : nJ ? vJ.TEXTURE_CUBE_MAP : vJ.TEXTURE_2D,
          IJ = fJ ? this._getInternalFormatFromDepthTextureFormat(jJ, !0, xJ) : this._getRGBABufferInternalSizedFormat(XJ, jJ, YJ),
          MJ = fJ ? xJ ? vJ.DEPTH_STENCIL : vJ.DEPTH_COMPONENT : this._getInternalFormat(jJ),
          bJ = fJ ? this._getWebGLTextureTypeFromDepthTextureFormat(jJ) : this._getWebGLTextureType(XJ);
        if (this._bindTextureDirectly(SJ, mJ), 0 !== KJ) mJ.is2DArray = !0, vJ.texImage3D(SJ, 0, IJ, QJ, EJ, KJ, 0, MJ, bJ, null);
        else if (0 !== VJ) mJ.is3D = !0, vJ.texImage3D(SJ, 0, IJ, QJ, EJ, VJ, 0, MJ, bJ, null);
        else if (nJ) {
          mJ.isCube = !0;
          for (let JJ = 0; JJ < 6; JJ++) vJ.texImage2D(vJ.TEXTURE_CUBE_MAP_POSITIVE_X + JJ, 0, IJ, QJ, EJ, 0, MJ, bJ, null)
        } else vJ.texImage2D(SJ, 0, IJ, QJ, EJ, 0, MJ, bJ, null);
        if (vJ.texParameteri(SJ, vJ.TEXTURE_MAG_FILTER, yJ.mag), vJ.texParameteri(SJ, vJ.TEXTURE_MIN_FILTER, yJ.min), vJ.texParameteri(SJ, vJ.TEXTURE_WRAP_S, vJ.CLAMP_TO_EDGE), vJ.texParameteri(SJ, vJ.TEXTURE_WRAP_T, vJ.CLAMP_TO_EDGE), fJ && this.nG > 1 && (0 === sJ ? (vJ.texParameteri(SJ, vJ.TEXTURE_COMPARE_FUNC, 515), vJ.texParameteri(SJ, vJ.TEXTURE_COMPARE_MODE, vJ.NONE)) : (vJ.texParameteri(SJ, vJ.TEXTURE_COMPARE_FUNC, sJ), vJ.texParameteri(SJ, vJ.TEXTURE_COMPARE_MODE, vJ.COMPARE_REF_TO_TEXTURE))), (ZJ || eJ) && this._gl.generateMipmap(SJ), this._bindTextureDirectly(SJ, null), mJ._useSRGBBuffer = YJ, mJ.baseWidth = QJ, mJ.baseHeight = EJ, mJ.width = QJ, mJ.height = EJ, mJ.depth = KJ || VJ, mJ.isReady = !0, mJ.samples = hJ, mJ.generateMipMaps = ZJ, mJ.samplingMode = qJ, mJ.type = XJ, mJ.format = jJ, mJ.label = FJ, mJ.comparisonFunction = sJ, this._internalTexturesCache.push(mJ), DJ) {
          let JJ;
          if (JJ = (0, rJ.h)(mJ.format) ? this._setupFramebufferDepthAttachments((0, rJ.e)(mJ.format), 19 !== mJ.format, mJ.width, mJ.height, hJ, mJ.format, !0) : this._createRenderBuffer(mJ.width, mJ.height, hJ, -1, this._getRGBABufferInternalSizedFormat(mJ.type, mJ.format, mJ._useSRGBBuffer), -1), !JJ) throw new Error("Unable to create render buffer");
          mJ._autoMSAAManagement = !0;
          let cJ = mJ._hardwareTexture;
          cJ || (cJ = mJ._hardwareTexture = this._createHardwareTexture()), cJ.addMSAARenderBuffer(JJ)
        }
        return mJ
      }
      _getUseSRGBBuffer(JJ, cJ) {
        return JJ && this._caps.supportSRGBBuffers && (this.nG > 1 || cJ)
      }
      createTexture(JJ, cJ, ZJ, FJ) {
        var UJ = this;
        let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          jJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          YJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          hJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          DJ = arguments.length > 11 ? arguments[11] : void 0,
          sJ = arguments.length > 12 ? arguments[12] : void 0,
          nJ = arguments.length > 13 ? arguments[13] : void 0,
          fJ = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(JJ, cJ, ZJ, FJ, eJ, XJ, AJ, (function() {
          for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
          return UJ._prepareWebGLTexture(...cJ, YJ)
        }), ((JJ, cJ, ZJ, UJ, eJ, XJ) => {
          const AJ = this._gl,
            qJ = ZJ.width === JJ && ZJ.height === cJ;
          eJ._creationFlags = nJ ?? 0;
          const jJ = this._getTexImageParametersForCreateTexture(eJ.format, eJ._useSRGBBuffer);
          if (qJ) return AJ.texImage2D(AJ.TEXTURE_2D, 0, jJ.internalFormat, jJ.format, jJ.type, ZJ), !1;
          const YJ = this._caps.maxTextureSize;
          if (ZJ.width > YJ || ZJ.height > YJ || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = JJ, this._workingCanvas.height = cJ, this._workingContext.drawImage(ZJ, 0, 0, ZJ.width, ZJ.height, 0, 0, JJ, cJ), AJ.texImage2D(AJ.TEXTURE_2D, 0, jJ.internalFormat, jJ.format, jJ.type, this._workingCanvas), eJ.width = JJ, eJ.height = cJ, !1);
          {
            const JJ = new GJ.e(this, 2);
            this._bindTextureDirectly(AJ.TEXTURE_2D, JJ, !0), AJ.texImage2D(AJ.TEXTURE_2D, 0, jJ.internalFormat, jJ.format, jJ.type, ZJ), this._rescaleTexture(JJ, eJ, FJ, jJ.format, (() => {
              this._releaseTexture(JJ), this._bindTextureDirectly(AJ.TEXTURE_2D, eJ, !0), XJ()
            }))
          }
          return !0
        }), qJ, jJ, YJ, hJ, DJ, sJ, fJ)
      }
      _getTexImageParametersForCreateTexture(JJ, cJ) {
        let ZJ, FJ;
        return 1 === this.nG ? (ZJ = this._getInternalFormat(JJ, cJ), FJ = ZJ) : (ZJ = this._getInternalFormat(JJ, !1), FJ = this._getRGBABufferInternalSizedFormat(0, JJ, cJ)), {
          internalFormat: FJ,
          format: ZJ,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(JJ, cJ, ZJ, FJ, UJ) {}
      _unpackFlipY(JJ) {
        this._unpackFlipYCached !== JJ && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, JJ ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = JJ))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(JJ) {
        return JJ.isCube ? this._gl.TEXTURE_CUBE_MAP : JJ.is3D ? this._gl.TEXTURE_3D : JJ.is2DArray || JJ.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = this._getTextureTarget(cJ),
          UJ = this._getSamplingParameters(JJ, cJ.useMipMaps || ZJ);
        this._setTextureParameterInteger(FJ, this._gl.TEXTURE_MAG_FILTER, UJ.mag, cJ), this._setTextureParameterInteger(FJ, this._gl.TEXTURE_MIN_FILTER, UJ.min), ZJ && UJ.hasMipMaps && (cJ.generateMipMaps = !0, this._gl.generateMipmap(FJ)), this._bindTextureDirectly(FJ, null), cJ.samplingMode = JJ
      }
      updateTextureDimensions(JJ, cJ, ZJ) {}
      updateTextureWrappingMode(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const UJ = this._getTextureTarget(JJ);
        null !== cJ && (this._setTextureParameterInteger(UJ, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(cJ), JJ), JJ._cachedWrapU = cJ), null !== ZJ && (this._setTextureParameterInteger(UJ, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ZJ), JJ), JJ._cachedWrapV = ZJ), (JJ.is2DArray || JJ.is3D) && null !== FJ && (this._setTextureParameterInteger(UJ, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(FJ), JJ), JJ._cachedWrapR = FJ), this._bindTextureDirectly(UJ, null)
      }
      _uploadCompressedDataToTextureDirectly(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const AJ = this._gl;
        let qJ = AJ.TEXTURE_2D;
        if (JJ.isCube && (qJ = AJ.TEXTURE_CUBE_MAP_POSITIVE_X + eJ), JJ._useSRGBBuffer) switch (cJ) {
          case 37492:
          case 36196:
            this._caps.etc2 ? cJ = AJ.COMPRESSED_SRGB8_ETC2 : JJ._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : JJ._useSRGBBuffer = !1;
            break;
          case 36492:
            cJ = AJ.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            cJ = AJ.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? cJ = AJ.COMPRESSED_SRGB_S3TC_DXT1_EXT : JJ._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? cJ = AJ.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : JJ._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? cJ = AJ.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : JJ._useSRGBBuffer = !1;
            break;
          default:
            JJ._useSRGBBuffer = !1
        }
        if (JJ.generateMipMaps) {
          const eJ = JJ._hardwareTexture;
          eJ.memoryAllocated || (AJ.texStorage2D(JJ.isCube ? AJ.TEXTURE_CUBE_MAP : AJ.TEXTURE_2D, Math.floor(Math.log2(Math.max(ZJ, FJ))) + 1, cJ, JJ.width, JJ.height), eJ.memoryAllocated = !0), this._gl.compressedTexSubImage2D(qJ, XJ, 0, 0, ZJ, FJ, cJ, UJ)
        } else this._gl.compressedTexImage2D(qJ, XJ, cJ, ZJ, FJ, 0, UJ)
      }
      _uploadDataToTextureDirectly(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const XJ = this._gl,
          AJ = this._getWebGLTextureType(JJ.type),
          qJ = this._getInternalFormat(JJ.format),
          jJ = void 0 === UJ ? this._getRGBABufferInternalSizedFormat(JJ.type, JJ.format, JJ._useSRGBBuffer) : this._getInternalFormat(UJ, JJ._useSRGBBuffer);
        this._unpackFlipY(JJ.invertY);
        let YJ = XJ.TEXTURE_2D;
        JJ.isCube && (YJ = XJ.TEXTURE_CUBE_MAP_POSITIVE_X + ZJ);
        const hJ = Math.round(Math.log(JJ.width) * Math.LOG2E),
          DJ = Math.round(Math.log(JJ.height) * Math.LOG2E),
          sJ = eJ ? JJ.width : Math.pow(2, Math.max(hJ - FJ, 0)),
          nJ = eJ ? JJ.height : Math.pow(2, Math.max(DJ - FJ, 0));
        XJ.texImage2D(YJ, FJ, jJ, sJ, nJ, 0, qJ, AJ, cJ)
      }
      updateTextureData(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const jJ = this._gl,
          YJ = this._getWebGLTextureType(JJ.type),
          hJ = this._getInternalFormat(JJ.format);
        this._unpackFlipY(JJ.invertY);
        let DJ = jJ.TEXTURE_2D,
          sJ = jJ.TEXTURE_2D;
        JJ.isCube && (sJ = jJ.TEXTURE_CUBE_MAP_POSITIVE_X + XJ, DJ = jJ.TEXTURE_CUBE_MAP), this._bindTextureDirectly(DJ, JJ, !0), jJ.texSubImage2D(sJ, AJ, ZJ, FJ, UJ, eJ, hJ, YJ, cJ), qJ && this._gl.generateMipmap(sJ), this._bindTextureDirectly(DJ, null)
      }
      _uploadArrayBufferViewToTexture(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const UJ = this._gl,
          eJ = JJ.isCube ? UJ.TEXTURE_CUBE_MAP : UJ.TEXTURE_2D;
        this._bindTextureDirectly(eJ, JJ, !0), this._uploadDataToTextureDirectly(JJ, cJ, ZJ, FJ), this._bindTextureDirectly(eJ, null, !0)
      }
      _prepareWebGLTextureContinuation(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this._gl;
        if (!eJ) return;
        const XJ = this._getSamplingParameters(UJ, !ZJ);
        eJ.texParameteri(eJ.TEXTURE_2D, eJ.TEXTURE_MAG_FILTER, XJ.mag), eJ.texParameteri(eJ.TEXTURE_2D, eJ.TEXTURE_MIN_FILTER, XJ.min), ZJ || FJ || eJ.generateMipmap(eJ.TEXTURE_2D), this._bindTextureDirectly(eJ.TEXTURE_2D, null), cJ && cJ.removePendingData(JJ), JJ.onLoadedObservable.notifyObservers(JJ), JJ.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        const YJ = this.getCaps().maxTextureSize,
          hJ = Math.min(YJ, this.needPOTTextures ? (0, sJ.d)(FJ.width, YJ) : FJ.width),
          DJ = Math.min(YJ, this.needPOTTextures ? (0, sJ.d)(FJ.height, YJ) : FJ.height),
          nJ = this._gl;
        nJ && (JJ._hardwareTexture ? (this._bindTextureDirectly(nJ.TEXTURE_2D, JJ, !0), this._unpackFlipY(void 0 === UJ || !!UJ), JJ.baseWidth = FJ.width, JJ.baseHeight = FJ.height, JJ.width = hJ, JJ.height = DJ, JJ.isReady = !0, JJ.type = -1 !== JJ.type ? JJ.type : 0, JJ.format = -1 !== JJ.format ? JJ.format : jJ ?? (".jpg" !== cJ || JJ._useSRGBBuffer ? 5 : 4), AJ(hJ, DJ, FJ, cJ, JJ, (() => {
          this._prepareWebGLTextureContinuation(JJ, ZJ, eJ, XJ, qJ)
        })) || this._prepareWebGLTextureContinuation(JJ, ZJ, eJ, XJ, qJ)) : ZJ && ZJ.removePendingData(JJ))
      }
      _getInternalFormatFromDepthTextureFormat(JJ, cJ, ZJ) {
        const FJ = this._gl;
        if (!cJ) return FJ.STENCIL_INDEX8;
        let UJ = ZJ ? FJ.DEPTH_STENCIL : FJ.DEPTH_COMPONENT;
        return this.nG > 1 ? 15 === JJ ? UJ = FJ.DEPTH_COMPONENT16 : 16 === JJ ? UJ = FJ.DEPTH_COMPONENT24 : 17 === JJ || 13 === JJ ? UJ = ZJ ? FJ.DEPTH24_STENCIL8 : FJ.DEPTH_COMPONENT24 : 14 === JJ ? UJ = FJ.DEPTH_COMPONENT32F : 18 === JJ && (UJ = ZJ ? FJ.DEPTH32F_STENCIL8 : FJ.DEPTH_COMPONENT32F) : UJ = FJ.DEPTH_COMPONENT16, UJ
      }
      _getWebGLTextureTypeFromDepthTextureFormat(JJ) {
        const cJ = this._gl;
        let ZJ = cJ.UNSIGNED_INT;
        return 15 === JJ ? ZJ = cJ.UNSIGNED_SHORT : 17 === JJ || 13 === JJ ? ZJ = cJ.UNSIGNED_INT_24_8 : 14 === JJ ? ZJ = cJ.FLOAT : 18 === JJ ? ZJ = cJ.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === JJ && (ZJ = cJ.UNSIGNED_BYTE), ZJ
      }
      _setupFramebufferDepthAttachments(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          eJ = arguments.length > 5 ? arguments[5] : void 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const AJ = this._gl;
        eJ = eJ ?? (JJ ? 13 : 14);
        const qJ = this._getInternalFormatFromDepthTextureFormat(eJ, cJ, JJ);
        return JJ && cJ ? this._createRenderBuffer(ZJ, FJ, UJ, AJ.DEPTH_STENCIL, qJ, XJ ? -1 : AJ.DEPTH_STENCIL_ATTACHMENT) : cJ ? this._createRenderBuffer(ZJ, FJ, UJ, qJ, qJ, XJ ? -1 : AJ.DEPTH_ATTACHMENT) : JJ ? this._createRenderBuffer(ZJ, FJ, UJ, qJ, qJ, XJ ? -1 : AJ.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const AJ = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(AJ, JJ, cJ, ZJ, FJ, UJ, eJ, XJ)
      }
      _updateRenderBuffer(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        let AJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qJ = this._gl;
        return qJ.bindRenderbuffer(qJ.RENDERBUFFER, JJ), FJ > 1 && qJ.renderbufferStorageMultisample ? qJ.renderbufferStorageMultisample(qJ.RENDERBUFFER, FJ, eJ, cJ, ZJ) : qJ.renderbufferStorage(qJ.RENDERBUFFER, UJ, cJ, ZJ), -1 !== XJ && qJ.framebufferRenderbuffer(qJ.FRAMEBUFFER, XJ, qJ.RENDERBUFFER, JJ), AJ && qJ.bindRenderbuffer(qJ.RENDERBUFFER, null), JJ
      }
      _releaseTexture(JJ) {
        this._deleteTexture(JJ._hardwareTexture), this.unbindAllTextures();
        const cJ = this._internalTexturesCache.indexOf(JJ); - 1 !== cJ && this._internalTexturesCache.splice(cJ, 1), JJ._lodTextureHigh && JJ._lodTextureHigh.dispose(), JJ._lodTextureMid && JJ._lodTextureMid.dispose(), JJ._lodTextureLow && JJ._lodTextureLow.dispose(), JJ._irradianceTexture && JJ._irradianceTexture.dispose()
      }
      _deleteTexture(JJ) {
        JJ?.release()
      }
      _setProgram(JJ) {
        this._currentProgram !== JJ && ((0, UJ.n)(JJ, this._gl), this._currentProgram = JJ)
      }
      bindSamplers(JJ) {
        const cJ = JJ.getPipelineContext();
        this._setProgram(cJ.program);
        const ZJ = JJ.getSamplers();
        for (let FJ = 0; FJ < ZJ.length; FJ++) {
          const cJ = JJ.getUniform(ZJ[FJ]);
          cJ && (this._boundUniforms[FJ] = cJ)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UJ = !1;
        const eJ = cJ && cJ._associatedChannel > -1;
        ZJ && eJ && (this._activeChannel = cJ._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== cJ || FJ) {
          if (this._activateCurrentTexture(), cJ && cJ.isMultiview) throw AJ.c.Error(["_bindTextureDirectly called with a multiview texture!", JJ, cJ]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(JJ, cJ?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = cJ, cJ && (cJ._associatedChannel = this._activeChannel)
        } else ZJ && (UJ = !0, this._activateCurrentTexture());
        return eJ && !ZJ && this._bindSamplerUniformToChannel(cJ._associatedChannel, this._activeChannel), UJ
      }
      _bindTexture(JJ, cJ, ZJ) {
        if (void 0 === JJ) return;
        cJ && (cJ._associatedChannel = JJ), this._activeChannel = JJ;
        const FJ = cJ ? this._getTextureTarget(cJ) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(FJ, cJ)
      }
      unbindAllTextures() {
        for (let JJ = 0; JJ < this._maxSimultaneousTextures; JJ++) this._activeChannel = JJ, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.nG > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(JJ, cJ, ZJ, FJ) {
        void 0 !== JJ && (cJ && (this._boundUniforms[JJ] = cJ), this._setTexture(JJ, ZJ))
      }
      _bindSamplerUniformToChannel(JJ, cJ) {
        const ZJ = this._boundUniforms[JJ];
        ZJ && ZJ._currentState !== cJ && (this._gl.uniform1i(ZJ, cJ), ZJ._currentState = cJ)
      }
      _getTextureWrapMode(JJ) {
        switch (JJ) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(JJ, cJ) {
        let ZJ, FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!cJ) return null != this._boundTexturesCache[JJ] && (this._activeChannel = JJ, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.nG > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (cJ.video) {
          this._activeChannel = JJ;
          const ZJ = cJ.getInternalTexture();
          ZJ && (ZJ._associatedChannel = JJ), cJ.update()
        } else if (4 === cJ.delayLoadState) return cJ.delayLoad(), !1;
        ZJ = UJ ? cJ.depthStencilTexture : cJ.isReady() ? cJ.getInternalTexture() : cJ.isCube ? this.emptyCubeTexture : cJ.is3D ? this.emptyTexture3D : cJ.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !FJ && ZJ && (ZJ._associatedChannel = JJ);
        let eJ = !0;
        this._boundTexturesCache[JJ] === ZJ && (FJ || this._bindSamplerUniformToChannel(ZJ._associatedChannel, JJ), eJ = !1), this._activeChannel = JJ;
        const XJ = this._getTextureTarget(ZJ);
        if (eJ && this._bindTextureDirectly(XJ, ZJ, FJ), ZJ && !ZJ.isMultiview) {
          if (ZJ.isCube && ZJ._cachedCoordinatesMode !== cJ.coordinatesMode) {
            ZJ._cachedCoordinatesMode = cJ.coordinatesMode;
            const JJ = 3 !== cJ.coordinatesMode && 5 !== cJ.coordinatesMode ? 1 : 0;
            cJ.wrapU = JJ, cJ.wrapV = JJ
          }
          ZJ._cachedWrapU !== cJ.wrapU && (ZJ._cachedWrapU = cJ.wrapU, this._setTextureParameterInteger(XJ, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(cJ.wrapU), ZJ)), ZJ._cachedWrapV !== cJ.wrapV && (ZJ._cachedWrapV = cJ.wrapV, this._setTextureParameterInteger(XJ, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(cJ.wrapV), ZJ)), ZJ.is3D && ZJ._cachedWrapR !== cJ.wrapR && (ZJ._cachedWrapR = cJ.wrapR, this._setTextureParameterInteger(XJ, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(cJ.wrapR), ZJ)), this._setAnisotropicLevel(XJ, ZJ, cJ.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(JJ, cJ, ZJ, FJ) {
        if (void 0 !== JJ && cJ) {
          this._textureUnits && this._textureUnits.length === ZJ.length || (this._textureUnits = new Int32Array(ZJ.length));
          for (let cJ = 0; cJ < ZJ.length; cJ++) {
            const FJ = ZJ[cJ].getInternalTexture();
            FJ ? (this._textureUnits[cJ] = JJ + cJ, FJ._associatedChannel = JJ + cJ) : this._textureUnits[cJ] = -1
          }
          this._gl.uniform1iv(cJ, this._textureUnits);
          for (let JJ = 0; JJ < ZJ.length; JJ++) this._setTexture(this._textureUnits[JJ], ZJ[JJ], !0)
        }
      }
      _setAnisotropicLevel(JJ, cJ, ZJ) {
        const FJ = this._caps.textureAnisotropicFilterExtension;
        11 !== cJ.samplingMode && 3 !== cJ.samplingMode && 2 !== cJ.samplingMode && (ZJ = 1), FJ && cJ._cachedAnisotropicFilteringLevel !== ZJ && (this._setTextureParameterFloat(JJ, FJ.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ZJ, this._caps.maxAnisotropy), cJ), cJ._cachedAnisotropicFilteringLevel = ZJ)
      }
      _setTextureParameterFloat(JJ, cJ, ZJ, FJ) {
        this._bindTextureDirectly(JJ, FJ, !0, !0), this._gl.texParameterf(JJ, cJ, ZJ)
      }
      _setTextureParameterInteger(JJ, cJ, ZJ, FJ) {
        FJ && this._bindTextureDirectly(JJ, FJ, !0, !0), this._gl.texParameteri(JJ, cJ, ZJ)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let JJ = 0; JJ < this._caps.maxVertexAttribs; JJ++) this.disableAttributeByIndex(JJ)
        } else
          for (let JJ = 0, cJ = this._vertexAttribArraysEnabled.length; JJ < cJ; JJ++) JJ >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[JJ] || this.disableAttributeByIndex(JJ)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, qJ.i)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, UJ.z)(this._gl)
      }
      attachContextLostEvent(JJ) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", JJ, !1)
      }
      attachContextRestoredEvent(JJ) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", JJ, !1)
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
      _canRenderToFramebuffer(JJ) {
        const cJ = this._gl;
        for (; cJ.getError() !== cJ.NO_ERROR;);
        let ZJ = !0;
        const FJ = cJ.createTexture();
        cJ.bindTexture(cJ.TEXTURE_2D, FJ), cJ.texImage2D(cJ.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(JJ), 1, 1, 0, cJ.RGBA, this._getWebGLTextureType(JJ), null), cJ.texParameteri(cJ.TEXTURE_2D, cJ.TEXTURE_MIN_FILTER, cJ.NEAREST), cJ.texParameteri(cJ.TEXTURE_2D, cJ.TEXTURE_MAG_FILTER, cJ.NEAREST);
        const UJ = cJ.createFramebuffer();
        cJ.bindFramebuffer(cJ.FRAMEBUFFER, UJ), cJ.framebufferTexture2D(cJ.FRAMEBUFFER, cJ.COLOR_ATTACHMENT0, cJ.TEXTURE_2D, FJ, 0);
        const eJ = cJ.checkFramebufferStatus(cJ.FRAMEBUFFER);
        if (ZJ = ZJ && eJ === cJ.FRAMEBUFFER_COMPLETE, ZJ = ZJ && cJ.getError() === cJ.NO_ERROR, ZJ && (cJ.clear(cJ.COLOR_BUFFER_BIT), ZJ = ZJ && cJ.getError() === cJ.NO_ERROR), ZJ) {
          cJ.bindFramebuffer(cJ.FRAMEBUFFER, null);
          const JJ = cJ.RGBA,
            FJ = cJ.UNSIGNED_BYTE,
            UJ = new Uint8Array(4);
          cJ.readPixels(0, 0, 1, 1, JJ, FJ, UJ), ZJ = ZJ && cJ.getError() === cJ.NO_ERROR
        }
        for (cJ.deleteTexture(FJ), cJ.deleteFramebuffer(UJ), cJ.bindFramebuffer(cJ.FRAMEBUFFER, null); !ZJ && cJ.getError() !== cJ.NO_ERROR;);
        return ZJ
      }
      _getWebGLTextureType(JJ) {
        if (1 === this._webGLVersion) {
          switch (JJ) {
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
        switch (JJ) {
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
      _getInternalFormat(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = cJ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (JJ) {
          case 0:
            ZJ = this._gl.ALPHA;
            break;
          case 1:
            ZJ = this._gl.LUMINANCE;
            break;
          case 2:
            ZJ = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            ZJ = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            ZJ = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            ZJ = cJ ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            ZJ = cJ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (JJ) {
          case 8:
            ZJ = this._gl.RED_INTEGER;
            break;
          case 9:
            ZJ = this._gl.RG_INTEGER;
            break;
          case 10:
            ZJ = this._gl.RGB_INTEGER;
            break;
          case 11:
            ZJ = this._gl.RGBA_INTEGER
        }
        return ZJ
      }
      _getRGBABufferInternalSizedFormat(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== cJ) switch (cJ) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return ZJ ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (JJ) {
          case 3:
            switch (cJ) {
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
            switch (cJ) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return ZJ ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return ZJ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (cJ) {
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
            switch (cJ) {
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
            switch (cJ) {
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
            switch (cJ) {
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
            switch (cJ) {
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
            switch (cJ) {
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
            switch (cJ) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return ZJ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(JJ, cJ, ZJ, FJ) {
        let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const qJ = UJ ? 4 : 3,
          jJ = UJ ? this._gl.RGBA : this._gl.RGB,
          YJ = ZJ * FJ * qJ;
        if (XJ) {
          if (XJ.length < YJ) return AJ.c.Error(`Data buffer is too small to store the read pixels (${XJ.length} should be more than ${YJ})`), Promise.resolve(XJ)
        } else XJ = new Uint8Array(YJ);
        return eJ && this.flushFramebuffer(), this._gl.readPixels(JJ, cJ, ZJ, FJ, jJ, this._gl.UNSIGNED_BYTE, XJ), Promise.resolve(XJ)
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
          const JJ = eJ.e._CreateCanvas(1, 1),
            cJ = JJ.getContext("webgl") || JJ.getContext("experimental-webgl");
          this._IsSupported = null != cJ && !!globalThis.WebGLRenderingContext
        } catch (JJ) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const JJ = eJ.e._CreateCanvas(1, 1),
            cJ = JJ.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || JJ.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !cJ
        } catch (JJ) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    QJ._TempClearColorUint32 = new Uint32Array(4), QJ._TempClearColorInt32 = new Int32Array(4), QJ._TempClearColorFloat32 = new Float32Array(4), QJ.ExceptionList = [{
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
    }], QJ._ConcatenateShader = fJ.h, QJ._IsSupported = null, QJ._HasMajorPerformanceCaveat = null
  },
  38953: (JJ, cJ, ZJ) => {
    var FJ;
    ZJ.d(cJ, {
        d: () => UJ
      }),
      function(JJ) {
        JJ[JJ.PointerMove = 0] = "PointerMove", JJ[JJ.PointerDown = 1] = "PointerDown", JJ[JJ.PointerUp = 2] = "PointerUp"
      }(FJ || (FJ = {}));
    class UJ {}
    UJ.DOM_DELTA_PIXEL = 0, UJ.DOM_DELTA_LINE = 1, UJ.DOM_DELTA_PAGE = 2
  },
  38946: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      d: () => eJ,
      e: () => UJ
    });
    class FJ {}
    FJ.KEYDOWN = 1, FJ.KEYUP = 2;
    class UJ {
      constructor(JJ, cJ) {
        this.type = JJ, this.event = cJ
      }
    }
    class eJ extends UJ {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(JJ) {
        this.skipOnKeyboardObservable = JJ
      }
      constructor(JJ, cJ) {
        super(JJ, cJ), this.type = JJ, this.event = cJ, this.skipOnKeyboardObservable = !1
      }
    }
  },
  38938: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => XJ,
      g: () => AJ
    });
    var FJ = ZJ(36174);
    class UJ {}
    UJ.POINTERDOWN = 1, UJ.POINTERUP = 2, UJ.POINTERMOVE = 4, UJ.POINTERWHEEL = 8, UJ.POINTERPICK = 16, UJ.POINTERTAP = 32, UJ.POINTERDOUBLETAP = 64;
    class eJ {
      constructor(JJ, cJ) {
        this.type = JJ, this.event = cJ
      }
    }
    class XJ extends eJ {
      constructor(JJ, cJ, ZJ, UJ) {
        super(JJ, cJ), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new FJ.i(ZJ, UJ)
      }
    }
    class AJ extends eJ {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(JJ, cJ), this._pickInfo = ZJ, this._inputManager = FJ
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  38967: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      static CompareLightsPriority(JJ, cJ) {
        return JJ.shadowEnabled !== cJ.shadowEnabled ? (cJ.shadowEnabled ? 1 : 0) - (JJ.shadowEnabled ? 1 : 0) : cJ.renderPriority - JJ.renderPriority
      }
    }
    FJ.FALLOFF_DEFAULT = 0, FJ.FALLOFF_PHYSICAL = 1, FJ.FALLOFF_GLTF = 2, FJ.FALLOFF_STANDARD = 3, FJ.LIGHTMAP_DEFAULT = 0, FJ.LIGHTMAP_SPECULAR = 1, FJ.LIGHTMAP_SHADOWSONLY = 2, FJ.INTENSITYMODE_AUTOMATIC = 0, FJ.INTENSITYMODE_LUMINOUSPOWER = 1, FJ.INTENSITYMODE_LUMINOUSINTENSITY = 2, FJ.INTENSITYMODE_ILLUMINANCE = 3, FJ.INTENSITYMODE_LUMINANCE = 4, FJ.LIGHTTYPEID_POINTLIGHT = 0, FJ.LIGHTTYPEID_DIRECTIONALLIGHT = 1, FJ.LIGHTTYPEID_SPOTLIGHT = 2, FJ.LIGHTTYPEID_HEMISPHERICLIGHT = 3, FJ.LIGHTTYPEID_RECT_AREALIGHT = 4, FJ.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38635: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ, UJ = ZJ(36200),
      eJ = ZJ(38639);
    ! function(JJ) {
      JJ[JJ.Unknown = 0] = "Unknown", JJ[JJ.Url = 1] = "Url", JJ[JJ.Temp = 2] = "Temp", JJ[JJ.Raw = 3] = "Raw", JJ[JJ.Dynamic = 4] = "Dynamic", JJ[JJ.RenderTarget = 5] = "RenderTarget", JJ[JJ.MultiRenderTarget = 6] = "MultiRenderTarget", JJ[JJ.Cube = 7] = "Cube", JJ[JJ.CubeRaw = 8] = "CubeRaw", JJ[JJ.CubePrefiltered = 9] = "CubePrefiltered", JJ[JJ.Raw3D = 10] = "Raw3D", JJ[JJ.Raw2DArray = 11] = "Raw2DArray", JJ[JJ.DepthStencil = 12] = "DepthStencil", JJ[JJ.CubeRawRGBD = 13] = "CubeRawRGBD", JJ[JJ.Depth = 14] = "Depth", JJ[JJ.External = 15] = "External"
    }(FJ || (FJ = {}));
    class XJ extends eJ.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(JJ) {
        this._useMipMaps = JJ
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(JJ) {
        this._uniqueId = JJ
      }
      gn() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new UJ.c, this.onErrorObservable = new UJ.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = JJ, this._source = cJ, this._uniqueId = XJ._Counter++, ZJ || (this._hardwareTexture = JJ._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, JJ, cJ, ZJ), this.width = JJ, this.height = cJ, this.depth = ZJ, this.baseWidth = JJ, this.baseHeight = cJ, this.baseDepth = ZJ, this._size = JJ * cJ * ZJ
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const JJ = this.onRebuildCallback(this),
            cJ = cJ => {
              cJ._swapAndDie(this, !1), this.isReady = JJ.isReady
            };
          return void(JJ.isAsync ? JJ.proxy.then(cJ) : cJ(JJ.proxy))
        }
        let JJ;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(JJ = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (JJ => {
              JJ._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (JJ = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), JJ._swapAndDie(this, !1), this._bufferViewArray)
              for (let JJ = 0; JJ < this._bufferViewArray.length; JJ++) {
                const cJ = this._bufferViewArray[JJ];
                cJ && this._engine.updateRawTexture(this, cJ, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, JJ)
              }
            this.isReady = !0;
            break;
          case 10:
            JJ = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), JJ._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (JJ = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), JJ._swapAndDie(this, !1), this._bufferViewArray)
              for (let JJ = 0; JJ < this._bufferViewArray.length; JJ++) {
                const cJ = this._bufferViewArray[JJ];
                cJ && this._engine.updateRawTexture2DArray(this, cJ, this.format, this.invertY, this._compression, this.type, JJ)
              }
            this.isReady = !0;
            break;
          case 4:
            JJ = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), JJ._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(JJ = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              JJ._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            JJ = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), JJ._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return JJ = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (JJ => {
              JJ && JJ._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(JJ._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(JJ._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), JJ._hardwareTexture = this._hardwareTexture, JJ._setUniqueId(XJ._Counter++), cJ && (JJ._isRGBD = this._isRGBD), this._lodTextureHigh && (JJ._lodTextureHigh && JJ._lodTextureHigh.dispose(), JJ._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (JJ._lodTextureMid && JJ._lodTextureMid.dispose(), JJ._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (JJ._lodTextureLow && JJ._lodTextureLow.dispose(), JJ._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (JJ._irradianceTexture && JJ._irradianceTexture.dispose(), JJ._irradianceTexture = this._irradianceTexture);
        const ZJ = this._engine.getLoadedTexturesCache();
        let FJ = ZJ.indexOf(this); - 1 !== FJ && ZJ.splice(FJ, 1), FJ = ZJ.indexOf(JJ), -1 === FJ && ZJ.push(JJ)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    XJ._Counter = 0
  },
  38741: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return 13 === JJ || 14 === JJ || 15 === JJ || 16 === JJ || 17 === JJ || 18 === JJ || 19 === JJ
    }

    function UJ(JJ) {
      return 8 === JJ || 9 === JJ || 10 === JJ || 11 === JJ
    }

    function eJ(JJ) {
      return 0 === JJ || 5 === JJ || 7 === JJ || 11 === JJ
    }

    function XJ(JJ) {
      return 13 === JJ || 17 === JJ || 18 === JJ || 19 === JJ
    }
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => FJ,
      l: () => UJ,
      m: () => eJ
    })
  },
  38639: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(JJ) {
        this._cachedWrapU = JJ
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(JJ) {
        this._cachedWrapV = JJ
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(JJ) {
        this._cachedWrapR = JJ
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(JJ) {
        this._cachedAnisotropicFilteringLevel = JJ
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(JJ) {
        this._comparisonFunction = JJ
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(JJ) {
        this._useMipMaps = JJ
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = JJ, this._cachedWrapV = cJ, this._cachedWrapR = ZJ, this._cachedAnisotropicFilteringLevel = FJ, this.samplingMode = UJ, this._comparisonFunction = eJ, this
      }
      compareSampler(JJ) {
        return this._cachedWrapU === JJ._cachedWrapU && this._cachedWrapV === JJ._cachedWrapV && this._cachedWrapR === JJ._cachedWrapR && this._cachedAnisotropicFilteringLevel === JJ._cachedAnisotropicFilteringLevel && this.samplingMode === JJ.samplingMode && this._comparisonFunction === JJ._comparisonFunction && this._useMipMaps === JJ._useMipMaps
      }
    }
  },
  38898: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      JJ.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    ZJ.d(cJ, {
      e: () => FJ
    })
  },
  38712: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return void 0 === JJ.getPipelineContext
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  39079: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ
    });
    var FJ = ZJ(38689);
    class UJ {
      static GetEffect(JJ) {
        return void 0 === JJ.getPipelineContext ? JJ.effect : JJ
      }
      constructor(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = JJ.createDrawContext(), cJ && (this.materialContext = JJ.createMaterialContext())
      }
      setEffect(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ZJ || this.effect === JJ || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = JJ, void 0 !== cJ && (this.defines = cJ), ZJ && this.drawContext?.reset()
      }
      dispose() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const cJ = this.effect;
          JJ ? cJ.dispose() : FJ.d.SetImmediate((() => {
            cJ.gn().onEndFrameObservable.addOnce((() => {
              cJ.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  38660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => hJ,
      d: () => sJ,
      g: () => jJ,
      j: () => YJ
    });
    var FJ = ZJ(38663),
      UJ = ZJ(38668),
      eJ = ZJ(38658),
      XJ = ZJ(37660),
      AJ = ZJ(38683),
      qJ = ZJ(38671);

    function jJ(JJ, cJ) {
      return (0, UJ.C)(cJ).cachedPipelines[JJ]
    }

    function YJ(JJ) {
      const cJ = JJ._name,
        ZJ = JJ.context;
      if (cJ && ZJ) {
        const JJ = (0, UJ.C)(ZJ),
          FJ = JJ.cachedPipelines[cJ];
        FJ?.dispose(), delete JJ.cachedPipelines[cJ]
      }
    }

    function hJ(JJ, cJ, ZJ, UJ, eJ, XJ, qJ) {
      let jJ, YJ;
      const hJ = (0, FJ.i)() ? XJ?.getHostDocument() : null;
      jJ = "string" === typeof cJ ? cJ : "string" === typeof cJ.vertexSource ? "source:" + cJ.vertexSource : "string" === typeof cJ.vertexElement ? hJ?.getElementById(cJ.vertexElement) || cJ.vertexElement : cJ.vertex || cJ, YJ = "string" === typeof cJ ? cJ : "string" === typeof cJ.fragmentSource ? "source:" + cJ.fragmentSource : "string" === typeof cJ.fragmentElement ? hJ?.getElementById(cJ.fragmentElement) || cJ.fragmentElement : cJ.fragment || cJ;
      const sJ = [void 0, void 0],
        nJ = () => {
          if (sJ[0] && sJ[1]) {
            const [FJ, jJ] = sJ;
            (0, AJ.f)(JJ), (0, AJ.h)(FJ, JJ, ((FJ, YJ) => {
              qJ && (qJ._vertexSourceCodeBeforeMigration = YJ), ZJ && (FJ = ZJ("vertex", FJ)), JJ.isFragment = !0, (0, AJ.h)(jJ, JJ, ((XJ, jJ) => {
                qJ && (qJ._fragmentSourceCodeBeforeMigration = jJ), ZJ && (XJ = ZJ("fragment", XJ));
                const YJ = (0, AJ.b)(FJ, XJ, JJ);
                JJ = null;
                const hJ = function(JJ, cJ, ZJ, FJ) {
                  if (ZJ) {
                    return {
                      vertexSourceCode: (1 === FJ ? "//" : "") + "#define SHADER_NAME vertex:" + (ZJ.vertexElement || ZJ.vertex || ZJ.spectorName || ZJ) + "\n" + JJ,
                      fragmentSourceCode: (1 === FJ ? "//" : "") + "#define SHADER_NAME fragment:" + (ZJ.fragmentElement || ZJ.fragment || ZJ.spectorName || ZJ) + "\n" + cJ
                    }
                  }
                  return {
                    vertexSourceCode: JJ,
                    fragmentSourceCode: cJ
                  }
                }(YJ.vertexCode, YJ.fragmentCode, cJ, eJ);
                UJ?.(hJ.vertexSourceCode, hJ.fragmentSourceCode)
              }), XJ)
            }), XJ)
          }
        };
      DJ(jJ, "Vertex", "", (JJ => {
        qJ && (qJ._rawVertexSourceCode = JJ), sJ[0] = JJ, nJ()
      }), eJ), DJ(YJ, "Fragment", "Pixel", (JJ => {
        qJ && (qJ._rawFragmentSourceCode = JJ), sJ[1] = JJ, nJ()
      }), eJ)
    }

    function DJ(JJ, cJ, ZJ, UJ, XJ, AJ) {
      if ("undefined" !== typeof HTMLElement && JJ instanceof HTMLElement) {
        return void UJ((0, FJ.e)(JJ))
      }
      if ("source:" === JJ.substring(0, 7)) return void UJ(JJ.substring(7));
      if ("base64:" === JJ.substring(0, 7)) {
        return void UJ(window.atob(JJ.substring(7)))
      }
      const jJ = eJ.b.GetShadersStore(XJ);
      if (jJ[JJ + cJ + "Shader"]) return void UJ(jJ[JJ + cJ + "Shader"]);
      if (ZJ && jJ[JJ + ZJ + "Shader"]) return void UJ(jJ[JJ + ZJ + "Shader"]);
      let YJ;
      if (YJ = "." === JJ[0] || "/" === JJ[0] || JJ.indexOf("http") > -1 ? JJ : eJ.b.GetShadersRepository(XJ) + JJ, !(AJ = AJ || qJ.o)) throw new Error("loadFileInjection is not defined");
      AJ(YJ + "." + cJ.toLowerCase() + ".fx", UJ)
    }
    const sJ = (JJ, cJ, ZJ, FJ) => {
      try {
        const eJ = JJ.context ? (0, UJ.C)(JJ.context) : null;
        eJ && (eJ.disableParallelShaderCompile = JJ.disableParallelCompilation);
        const XJ = JJ.existingPipelineContext || cJ(JJ.shaderProcessingContext);
        return XJ._name = JJ.name, JJ.name && eJ && (eJ.cachedPipelines[JJ.name] = XJ), ZJ(XJ, JJ.vertex, JJ.fragment, !!JJ.createAsRaw, "", "", JJ.rebuildRebind, JJ.defines, JJ.transformFeedbackVaryings, "", (() => {
          FJ(XJ, (() => {
            JJ.onRenderingStateCompiled?.(XJ)
          }))
        })), XJ
      } catch (eJ) {
        throw XJ.c.Error("Error compiling effect"), eJ
      }
    }
  },
  38653: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ
    });
    var FJ = ZJ(36200),
      UJ = ZJ(37660),
      eJ = ZJ(38658),
      XJ = ZJ(38660),
      AJ = ZJ(38689);
    class qJ {
      static get ShadersRepository() {
        return eJ.b.ShadersRepository
      }
      static set ShadersRepository(JJ) {
        eJ.b.ShadersRepository = JJ
      }
      get YZJ() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new FJ.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(JJ, cJ, ZJ) {
        let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          eJ = arguments.length > 4 ? arguments[4] : void 0,
          AJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          jJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          YJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          hJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          DJ = arguments.length > 9 ? arguments[9] : void 0,
          sJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          nJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          GJ = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new FJ.c, this.onErrorObservable = new FJ.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = JJ, this._key = sJ;
        const fJ = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let xJ;
        if (cJ.attributes) {
          const JJ = cJ;
          if (this._engine = ZJ, this._attributesNames = JJ.attributes, this._uniformsNames = JJ.uniformsNames.concat(JJ.samplers), this._samplerList = JJ.samplers.slice(), this.defines = JJ.defines, this.onError = JJ.onError, this.onCompiled = JJ.onCompiled, this._fallbacks = JJ.fallbacks, this._indexParameters = JJ.indexParameters, this._transformFeedbackVaryings = JJ.transformFeedbackVaryings || null, this._multiTarget = !!JJ.multiTarget, this._shaderLanguage = JJ.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!JJ.disableParallelShaderCompilation, JJ.uniformBuffersNames) {
            this._uniformBuffersNamesList = JJ.uniformBuffersNames.slice();
            for (let cJ = 0; cJ < JJ.uniformBuffersNames.length; cJ++) this._uniformBuffersNames[JJ.uniformBuffersNames[cJ]] = cJ
          }
          this._processFinalCode = JJ.processFinalCode ?? null, this._processCodeAfterIncludes = JJ.processCodeAfterIncludes ?? void 0, GJ = JJ.extraInitializationsAsync, xJ = JJ.existingPipelineContext
        } else this._engine = eJ, this.defines = null == AJ ? "" : AJ, this._uniformsNames = ZJ.concat(UJ), this._samplerList = UJ ? UJ.slice() : [], this._attributesNames = cJ, this._uniformBuffersNamesList = [], this._shaderLanguage = nJ, this.onError = hJ, this.onCompiled = YJ, this._indexParameters = DJ, this._fallbacks = jJ;
        "WEBGL2" === this._engine.shaderPlatformName && (xJ = (0, XJ.g)(fJ, this._engine._gl) ?? xJ), this._attributeLocationByName = {}, this.uniqueId = qJ._UniqueIdSeed++, xJ ? (this._pipelineContext = xJ, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, GJ).catch((JJ => {
          const cJ = JJ?.message ?? String(JJ),
            ZJ = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${cJ}`);
          JJ && "string" === typeof JJ.stack && (ZJ.stack = `${ZJ.message}\nCaused by: ${JJ.stack}`), this._processCompilationErrors(ZJ)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.YZJ || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        FJ && await FJ(), this._processingContext = ZJ || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const UJ = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: JJ ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: eJ.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: eJ.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          LZJ: this._engine.LZJ,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, XJ.b)(UJ, this.name, this._processFinalCode, ((JJ, ZJ) => {
          this._vertexSourceCode = JJ, this._fragmentSourceCode = ZJ, this._prepareEffect(cJ)
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
        return !!this._engine.YZJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      gn() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(JJ) {
        return this._attributes[JJ]
      }
      getAttributeLocationByName(JJ) {
        return this._attributeLocationByName[JJ]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(JJ) {
        return this._uniformsNames.indexOf(JJ)
      }
      getUniform(JJ) {
        return this._uniforms[JJ]
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
        return await new Promise((JJ => {
          this.executeWhenCompiled(JJ)
        }))
      }
      executeWhenCompiled(JJ) {
        this.isReady() ? JJ(this) : (this.onCompileObservable.add((cJ => {
          JJ(cJ)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(JJ) {
        (0, AJ.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (cJ => {
          this._processCompilationErrors(cJ, JJ)
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
            LZJ: this._engine.LZJ,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(JJ, cJ, ZJ, FJ) {
        this._isReady = !1, this._vertexSourceCodeOverride = JJ, this._fragmentSourceCodeOverride = cJ, this.onError = (JJ, cJ) => {
          FJ && FJ(cJ)
        }, this.onCompiled = () => {
          const JJ = this.gn().scenes;
          if (JJ)
            for (let cJ = 0; cJ < JJ.length; cJ++) JJ[cJ].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(ZJ)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(JJ) {
        if (this._pipelineContext = JJ, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let cJ = 0; cJ < this._attributesNames.length; cJ++) {
            const JJ = this._attributesNames[cJ];
            this._attributeLocationByName[JJ] = this._attributes[cJ]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), qJ.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = this._pipelineContext;
        this._isReady = !1;
        try {
          const ZJ = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            FJ = ZJ ? null : this.defines,
            UJ = ZJ ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            eJ = ZJ ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            AJ = this._engine;
          this._pipelineContext = (0, XJ.d)({
            existingPipelineContext: JJ ? cJ : null,
            vertex: UJ,
            fragment: eJ,
            context: "WEBGL2" === AJ.shaderPlatformName || "WEBGL1" === AJ.shaderPlatformName ? AJ._gl : void 0,
            rebuildRebind: (JJ, cJ, ZJ, FJ) => this._rebuildProgram(JJ, cJ, ZJ, FJ),
            defines: FJ,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: ZJ,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: ZJ => {
              cJ && !JJ && this._engine._deletePipelineContext(cJ), ZJ && this._onRenderingStateCompiled(ZJ)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(cJ)
        } catch (ZJ) {
          this._processCompilationErrors(ZJ, cJ)
        }
      }
      _getShaderCodeAndErrorLine(JJ, cJ, ZJ) {
        const FJ = ZJ ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let UJ = null;
        if (cJ && JJ) {
          const eJ = cJ.match(FJ);
          if (eJ && 2 === eJ.length) {
            const cJ = parseInt(eJ[1]),
              FJ = JJ.split("\n", -1);
            FJ.length >= cJ && (UJ = `Offending line [${cJ}] in ${ZJ?"fragment":"vertex"} code: ${FJ[cJ-1]}`)
          }
        }
        return [JJ, UJ]
      }
      _processCompilationErrors(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof JJ?.stack ? JJ.stack : JJ?.message ?? String(JJ);
        const ZJ = this._attributesNames,
          FJ = this._fallbacks;
        if (UJ.c.Error("Unable to compile effect:"), UJ.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), UJ.c.Error(`Attributes: ${ZJ.join(" ")}`), UJ.c.Error("Defines:\n" + this.defines), qJ.LogShaderCodeOnCompilationError) {
          let JJ, cJ = null,
            ZJ = null;
          this._pipelineContext?._getVertexShaderCode() && ([JJ, cJ] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), JJ && (UJ.c.Error("Vertex code:"), UJ.c.Error(JJ))), this._pipelineContext?._getFragmentShaderCode() && ([JJ, ZJ] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), JJ && (UJ.c.Error("Fragment code:"), UJ.c.Error(JJ))), cJ && UJ.c.Error(cJ), ZJ && UJ.c.Error(ZJ)
        }
        UJ.c.Error("Error: " + this._compilationError);
        const eJ = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        cJ && (this._pipelineContext = cJ, this._isReady = !0, eJ()), FJ ? (this._pipelineContext = null, FJ.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, UJ.c.Error("Trying next fallback."), this.defines = FJ.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, eJ(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, cJ || eJ())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(JJ, cJ) {
        this._engine._bindTexture(this._samplers[JJ], cJ, JJ)
      }
      setTexture(JJ, cJ) {
        this._engine.setTexture(this._samplers[JJ], this._uniforms[JJ], cJ, JJ)
      }
      setTextureArray(JJ, cJ) {
        const ZJ = JJ + "Ex";
        if (-1 === this._samplerList.indexOf(ZJ + "0")) {
          const FJ = this._samplerList.indexOf(JJ);
          for (let JJ = 1; JJ < cJ.length; JJ++) {
            const cJ = ZJ + (JJ - 1).toString();
            this._samplerList.splice(FJ + JJ, 0, cJ)
          }
          let UJ = 0;
          for (const JJ of this._samplerList) this._samplers[JJ] = UJ, UJ += 1
        }
        this._engine.setTextureArray(this._samplers[JJ], this._uniforms[JJ], cJ, JJ)
      }
      bindUniformBuffer(JJ, cJ) {
        const ZJ = this._uniformBuffersNames[cJ];
        void 0 === ZJ || qJ._BaseCache[ZJ] === JJ && this._engine._features.useUBOBindingCache || (qJ._BaseCache[ZJ] = JJ, this._engine.bindUniformBufferBase(JJ, ZJ, cJ))
      }
      bindUniformBlock(JJ, cJ) {
        this._engine.bindUniformBlock(this._pipelineContext, JJ, cJ)
      }
      setInt(JJ, cJ) {
        return this._pipelineContext.setInt(JJ, cJ), this
      }
      setInt2(JJ, cJ, ZJ) {
        return this._pipelineContext.setInt2(JJ, cJ, ZJ), this
      }
      setInt3(JJ, cJ, ZJ, FJ) {
        return this._pipelineContext.setInt3(JJ, cJ, ZJ, FJ), this
      }
      setInt4(JJ, cJ, ZJ, FJ, UJ) {
        return this._pipelineContext.setInt4(JJ, cJ, ZJ, FJ, UJ), this
      }
      setIntArray(JJ, cJ) {
        return this._pipelineContext.setIntArray(JJ, cJ), this
      }
      setIntArray2(JJ, cJ) {
        return this._pipelineContext.setIntArray2(JJ, cJ), this
      }
      setIntArray3(JJ, cJ) {
        return this._pipelineContext.setIntArray3(JJ, cJ), this
      }
      setIntArray4(JJ, cJ) {
        return this._pipelineContext.setIntArray4(JJ, cJ), this
      }
      setUInt(JJ, cJ) {
        return this._pipelineContext.setUInt(JJ, cJ), this
      }
      setUInt2(JJ, cJ, ZJ) {
        return this._pipelineContext.setUInt2(JJ, cJ, ZJ), this
      }
      setUInt3(JJ, cJ, ZJ, FJ) {
        return this._pipelineContext.setUInt3(JJ, cJ, ZJ, FJ), this
      }
      setUInt4(JJ, cJ, ZJ, FJ, UJ) {
        return this._pipelineContext.setUInt4(JJ, cJ, ZJ, FJ, UJ), this
      }
      setUIntArray(JJ, cJ) {
        return this._pipelineContext.setUIntArray(JJ, cJ), this
      }
      setUIntArray2(JJ, cJ) {
        return this._pipelineContext.setUIntArray2(JJ, cJ), this
      }
      setUIntArray3(JJ, cJ) {
        return this._pipelineContext.setUIntArray3(JJ, cJ), this
      }
      setUIntArray4(JJ, cJ) {
        return this._pipelineContext.setUIntArray4(JJ, cJ), this
      }
      setFloatArray(JJ, cJ) {
        return this._pipelineContext.setArray(JJ, cJ), this
      }
      setFloatArray2(JJ, cJ) {
        return this._pipelineContext.setArray2(JJ, cJ), this
      }
      setFloatArray3(JJ, cJ) {
        return this._pipelineContext.setArray3(JJ, cJ), this
      }
      setFloatArray4(JJ, cJ) {
        return this._pipelineContext.setArray4(JJ, cJ), this
      }
      setArray(JJ, cJ) {
        return this._pipelineContext.setArray(JJ, cJ), this
      }
      setArray2(JJ, cJ) {
        return this._pipelineContext.setArray2(JJ, cJ), this
      }
      setArray3(JJ, cJ) {
        return this._pipelineContext.setArray3(JJ, cJ), this
      }
      setArray4(JJ, cJ) {
        return this._pipelineContext.setArray4(JJ, cJ), this
      }
      setMatrices(JJ, cJ) {
        return this._pipelineContext.setMatrices(JJ, cJ), this
      }
      setMatrix(JJ, cJ) {
        return this._pipelineContext.setMatrix(JJ, cJ), this
      }
      setMatrix3x3(JJ, cJ) {
        return this._pipelineContext.setMatrix3x3(JJ, cJ), this
      }
      setMatrix2x2(JJ, cJ) {
        return this._pipelineContext.setMatrix2x2(JJ, cJ), this
      }
      setFloat(JJ, cJ) {
        return this._pipelineContext.setFloat(JJ, cJ), this
      }
      setBool(JJ, cJ) {
        return this._pipelineContext.setInt(JJ, cJ ? 1 : 0), this
      }
      setVector2(JJ, cJ) {
        return this._pipelineContext.setVector2(JJ, cJ), this
      }
      setFloat2(JJ, cJ, ZJ) {
        return this._pipelineContext.setFloat2(JJ, cJ, ZJ), this
      }
      setVector3(JJ, cJ) {
        return this._pipelineContext.setVector3(JJ, cJ), this
      }
      setFloat3(JJ, cJ, ZJ, FJ) {
        return this._pipelineContext.setFloat3(JJ, cJ, ZJ, FJ), this
      }
      setVector4(JJ, cJ) {
        return this._pipelineContext.setVector4(JJ, cJ), this
      }
      setQuaternion(JJ, cJ) {
        return this._pipelineContext.setQuaternion(JJ, cJ), this
      }
      setFloat4(JJ, cJ, ZJ, FJ, UJ) {
        return this._pipelineContext.setFloat4(JJ, cJ, ZJ, FJ, UJ), this
      }
      setColor3(JJ, cJ) {
        return this._pipelineContext.setColor3(JJ, cJ), this
      }
      setColor4(JJ, cJ, ZJ) {
        return this._pipelineContext.setColor4(JJ, cJ, ZJ), this
      }
      setDirectColor4(JJ, cJ) {
        return this._pipelineContext.setDirectColor4(JJ, cJ), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (qJ.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, XJ.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        cJ && (eJ.b.GetShadersStore(FJ)[`${JJ}PixelShader`] = cJ), ZJ && (eJ.b.GetShadersStore(FJ)[`${JJ}VertexShader`] = ZJ)
      }
      static ResetCache() {
        qJ._BaseCache = {}
      }
    }
    qJ.LogShaderCodeOnCompilationError = !0, qJ.PersistentMode = !1, qJ.AutomaticallyClearCodeCache = !1, qJ._UniqueIdSeed = 0, qJ._BaseCache = {}, qJ.ShadersStore = eJ.b.ShadersStore, qJ.IncludesShadersStore = eJ.b.IncludesShadersStore
  },
  38927: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      d: () => VJ,
      f: () => EJ
    });
    var FJ = ZJ(38653),
      UJ = ZJ(36174),
      eJ = ZJ(36212),
      XJ = ZJ(38907);
    const AJ = new UJ.b,
      qJ = new UJ.b,
      jJ = new UJ.b,
      YJ = {
        Qy: () => {},
        eyeAtCamera: !0
      };

    function hJ(JJ, cJ, ZJ) {
      const FJ = ZJ.JFJ(),
        UJ = cJ.JFJ();
      for (let eJ = 0; eJ < 16; eJ++) FJ[eJ] = UJ[eJ];
      return FJ[12] -= JJ.x, FJ[13] -= JJ.y, FJ[14] -= JJ.z, ZJ.markAsUpdated(), ZJ
    }

    function DJ(JJ, cJ, ZJ) {
      return (0, eJ.g)(cJ, qJ), hJ(JJ, qJ, jJ), (0, eJ.g)(jJ, ZJ), ZJ
    }

    function sJ(JJ, cJ, ZJ) {
      if (!YJ.eyeAtCamera) return DJ(JJ, cJ, ZJ);
      const FJ = ZJ.JFJ(),
        UJ = cJ.JFJ();
      for (let eJ = 0; eJ < 16; eJ++) FJ[eJ] = UJ[eJ];
      return FJ[12] = 0, FJ[13] = 0, FJ[14] = 0, ZJ.markAsUpdated(), ZJ
    }

    function nJ(JJ, cJ, ZJ, FJ) {
      return (0, eJ.l)(sJ(JJ, cJ, FJ), ZJ, FJ), FJ
    }

    function GJ(JJ, cJ, ZJ, FJ) {
      return (0, eJ.g)(ZJ, qJ), (0, eJ.l)(cJ, qJ, jJ), hJ(JJ, jJ, qJ), sJ(JJ, ZJ, jJ), (0, eJ.l)(qJ, jJ, FJ), FJ
    }

    function fJ(JJ, cJ, ZJ, FJ, UJ, XJ) {
      return (0, eJ.g)(ZJ, qJ), (0, eJ.l)(cJ, qJ, jJ), hJ(JJ, jJ, qJ), nJ(JJ, FJ, UJ, jJ), (0, eJ.l)(qJ, jJ, XJ), XJ
    }

    function xJ(JJ, cJ) {
      const ZJ = YJ.Qy();
      if (!ZJ || AJ === cJ) return cJ;
      AJ.updateFlag = cJ.updateFlag;
      const FJ = ZJ.floatingOriginOffset;
      switch (JJ) {
        case "world":
          return hJ(FJ, cJ, AJ);
        case "view":
          return sJ(FJ, cJ, AJ);
        case "worldView":
          return GJ(FJ, cJ, ZJ.getViewMatrix(), AJ);
        case "viewProjection":
          return nJ(FJ, ZJ.getViewMatrix(), ZJ.getProjectionMatrix(), AJ);
        case "worldViewProjection":
          return fJ(FJ, cJ, ZJ.getTransformMatrix(), ZJ.getViewMatrix(), ZJ.getProjectionMatrix(), AJ);
        default:
          if (JJ.startsWith("u_")) {
            const UJ = JJ.toLowerCase();
            if (UJ.startsWith("u_worldviewprojection")) return fJ(FJ, cJ, ZJ.getTransformMatrix(), ZJ.getViewMatrix(), ZJ.getProjectionMatrix(), AJ);
            if (UJ.startsWith("u_viewprojection")) return nJ(FJ, ZJ.getViewMatrix(), ZJ.getProjectionMatrix(), AJ);
            if (UJ.startsWith("u_worldview")) return GJ(FJ, cJ, ZJ.getViewMatrix(), AJ);
            if (UJ.startsWith("u_world")) return hJ(FJ, cJ, AJ);
            if (UJ.startsWith("u_view")) return sJ(FJ, cJ, AJ)
          }
          return cJ
      }
    }
    const rJ = XJ.e,
      vJ = FJ.d,
      mJ = rJ.prototype._updateMatrixForUniform,
      QJ = FJ.d.prototype.setMatrix;

    function EJ() {
      FJ.d.prototype.setMatrix = QJ, vJ._setMatrixOverride = void 0, rJ.prototype._updateMatrixForUniform = mJ, rJ.prototype._updateMatrixForUniformOverride = void 0
    }

    function VJ() {
      vJ.prototype._setMatrixOverride = QJ, vJ.prototype.setMatrix = function(JJ, cJ) {
        return this._setMatrixOverride(JJ, xJ(JJ, cJ)), this
      }, rJ.prototype._updateMatrixForUniformOverride = mJ, rJ.prototype._updateMatrixForUniform = function(JJ, cJ) {
        this._updateMatrixForUniformOverride(JJ, xJ(JJ, cJ))
      }
    }
  },
  38901: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      i: () => UJ
    });
    var FJ = ZJ(38898);

    function UJ(JJ, cJ) {
      cJ.WHITEBALANCE && JJ.push("whiteBalanceMatrix"), cJ.EXPOSURE && JJ.push("exposureLinear"), cJ.CONTRAST && JJ.push("contrast"), cJ.COLORGRADING && JJ.push("colorTransformSettings"), (cJ.VIGNETTE || cJ.DITHER) && JJ.push("vInverseScreenSize"), cJ.VIGNETTE && (JJ.push("vignetteSettings1"), JJ.push("vignetteSettings2")), cJ.COLORCURVES && (0, FJ.e)(JJ), cJ.DITHER && JJ.push("ditherIntensity")
    }

    function eJ(JJ, cJ) {
      cJ.COLORGRADING && JJ.push("txColorTransform")
    }
  },
  38892: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => MJ,
      i: () => WJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36200),
      XJ = ZJ(36231),
      AJ = ZJ(36207),
      qJ = ZJ(36174);
    const jJ = [
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
      YJ = 1e6 / jJ[jJ.length - 1][0],
      hJ = 150;

    function DJ(JJ, cJ) {
      const ZJ = Number.isNaN(JJ) ? YJ : Math.max(JJ, YJ),
        FJ = (0, AJ.Clamp)(1e6 / ZJ, jJ[0][0], jJ[jJ.length - 1][0]);
      let UJ = 0,
        eJ = jJ.length - 1;
      for (; eJ - UJ > 1;) {
        const JJ = UJ + eJ >> 1;
        jJ[JJ][0] <= FJ ? UJ = JJ : eJ = JJ
      }
      const XJ = UJ,
        [DJ, sJ, nJ, GJ] = jJ[XJ],
        [fJ, xJ, rJ, vJ] = jJ[XJ + 1],
        mJ = (FJ - DJ) / (fJ - DJ),
        QJ = qJ.i.Lerp(new qJ.i(sJ, nJ), new qJ.i(xJ, rJ), mJ),
        EJ = qJ.i.Normalize(new qJ.i(1, GJ)),
        VJ = qJ.i.Normalize(new qJ.i(1, vJ)),
        KJ = qJ.i.Normalize(qJ.i.Lerp(EJ, VJ, mJ)),
        yJ = (0, AJ.Clamp)(cJ, -150, hJ);
      QJ.xFJ(KJ.scale(yJ / 3e3));
      const SJ = 2 * QJ.x - 8 * QJ.y + 4,
        IJ = 3 * QJ.x / SJ,
        MJ = 2 * QJ.y / SJ;
      return new qJ.j(IJ / MJ, 1, (1 - IJ - MJ) / MJ)
    }
    const sJ = qJ.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      nJ = qJ.b.Invert(sJ);

    function GJ(JJ, cJ) {
      const ZJ = cJ > 0 ? JJ / cJ : 10;
      return (0, AJ.Clamp)(ZJ, .1, 10)
    }

    function fJ(JJ, cJ) {
      const ZJ = qJ.j.TransformNormal(JJ, sJ),
        FJ = qJ.j.TransformNormal(cJ, sJ),
        UJ = qJ.b.FromArray([GJ(FJ.x, ZJ.x), 0, 0, 0, 0, GJ(FJ.y, ZJ.y), 0, 0, 0, 0, GJ(FJ.z, ZJ.z), 0, 0, 0, 0, 1]);
      return sJ.multiply(UJ).multiply(nJ)
    }
    const xJ = new qJ.j(.95047, 1, 1.08883),
      rJ = qJ.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(fJ(xJ, DJ(6500, 0))),
      vJ = qJ.b.Invert(rJ),
      mJ = qJ.j.TransformNormal(new qJ.j(1, 1, 1), rJ);
    var QJ = ZJ(38822),
      EJ = ZJ(38898);
    let VJ = (() => {
      var JJ;
      let cJ, ZJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ = [],
        xJ = [],
        rJ = [],
        vJ = [],
        mJ = [],
        VJ = [],
        KJ = [],
        yJ = [],
        SJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [],
        OJ = [],
        TJ = [];
      return JJ = class {
        constructor() {
          this._dirty = !0, this._tempColor = new XJ.f(0, 0, 0, 0), this._globalCurve = new XJ.f(0, 0, 0, 0), this._highlightsCurve = new XJ.f(0, 0, 0, 0), this._midtonesCurve = new XJ.f(0, 0, 0, 0), this._shadowsCurve = new XJ.f(0, 0, 0, 0), this._positiveCurve = new XJ.f(0, 0, 0, 0), this._negativeCurve = new XJ.f(0, 0, 0, 0), this._globalHue = (0, FJ.e)(this, fJ, 30), this._globalDensity = ((0, FJ.e)(this, xJ), (0, FJ.e)(this, rJ, 0)), this._globalSaturation = ((0, FJ.e)(this, vJ), (0, FJ.e)(this, mJ, 0)), this._globalExposure = ((0, FJ.e)(this, VJ), (0, FJ.e)(this, KJ, 0)), this._highlightsHue = ((0, FJ.e)(this, yJ), (0, FJ.e)(this, SJ, 30)), this._highlightsDensity = ((0, FJ.e)(this, IJ), (0, FJ.e)(this, MJ, 0)), this._highlightsSaturation = ((0, FJ.e)(this, bJ), (0, FJ.e)(this, wJ, 0)), this._highlightsExposure = ((0, FJ.e)(this, WJ), (0, FJ.e)(this, gJ, 0)), this._midtonesHue = ((0, FJ.e)(this, HJ), (0, FJ.e)(this, PJ, 30)), this._midtonesDensity = ((0, FJ.e)(this, kJ), (0, FJ.e)(this, pJ, 0)), this._midtonesSaturation = ((0, FJ.e)(this, dJ), (0, FJ.e)(this, zJ, 0)), this._midtonesExposure = ((0, FJ.e)(this, NJ), (0, FJ.e)(this, OJ, 0)), this._shadowsHue = ((0, FJ.e)(this, TJ), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(JJ) {
          this._globalHue = JJ, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(JJ) {
          this._globalDensity = JJ, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(JJ) {
          this._globalSaturation = JJ, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(JJ) {
          this._globalExposure = JJ, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(JJ) {
          this._highlightsHue = JJ, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(JJ) {
          this._highlightsDensity = JJ, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(JJ) {
          this._highlightsSaturation = JJ, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(JJ) {
          this._highlightsExposure = JJ, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(JJ) {
          this._midtonesHue = JJ, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(JJ) {
          this._midtonesDensity = JJ, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(JJ) {
          this._midtonesSaturation = JJ, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(JJ) {
          this._midtonesExposure = JJ, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(JJ) {
          this._shadowsHue = JJ, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(JJ) {
          this._shadowsDensity = JJ, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(JJ) {
          this._shadowsSaturation = JJ, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(JJ) {
          this._shadowsExposure = JJ, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(cJ, ZJ, FJ, UJ, eJ) {
          null != cJ && (cJ = JJ._Clamp(cJ, 0, 360), ZJ = JJ._Clamp(ZJ, -100, 100), FJ = JJ._Clamp(FJ, -100, 100), UJ = JJ._Clamp(UJ, -100, 100), ZJ = JJ._ApplyColorGradingSliderNonlinear(ZJ), ZJ *= .5, UJ = JJ._ApplyColorGradingSliderNonlinear(UJ), ZJ < 0 && (ZJ *= -1, cJ = (cJ + 180) % 360), JJ._FromHSBToRef(cJ, ZJ, 50 + .25 * UJ, eJ), eJ.scaleToRef(2, eJ), eJ.a = 1 + .01 * FJ)
        }
        static _ApplyColorGradingSliderNonlinear(JJ) {
          JJ /= 100;
          let cJ = Math.abs(JJ);
          return cJ = Math.pow(cJ, 2), JJ < 0 && (cJ *= -1), cJ *= 100, cJ
        }
        static _FromHSBToRef(cJ, ZJ, FJ, UJ) {
          let eJ = JJ._Clamp(cJ, 0, 360);
          const XJ = JJ._Clamp(ZJ / 100, 0, 1),
            AJ = JJ._Clamp(FJ / 100, 0, 1);
          if (0 === XJ) UJ.r = AJ, UJ.g = AJ, UJ.b = AJ;
          else {
            eJ /= 60;
            const JJ = Math.floor(eJ),
              cJ = eJ - JJ,
              ZJ = AJ * (1 - XJ),
              FJ = AJ * (1 - XJ * cJ),
              qJ = AJ * (1 - XJ * (1 - cJ));
            switch (JJ) {
              case 0:
                UJ.r = AJ, UJ.g = qJ, UJ.b = ZJ;
                break;
              case 1:
                UJ.r = FJ, UJ.g = AJ, UJ.b = ZJ;
                break;
              case 2:
                UJ.r = ZJ, UJ.g = AJ, UJ.b = qJ;
                break;
              case 3:
                UJ.r = ZJ, UJ.g = FJ, UJ.b = AJ;
                break;
              case 4:
                UJ.r = qJ, UJ.g = ZJ, UJ.b = AJ;
                break;
              default:
                UJ.r = AJ, UJ.g = ZJ, UJ.b = FJ
            }
          }
          UJ.a = 1
        }
        static _Clamp(JJ, cJ, ZJ) {
          return Math.min(Math.max(JJ, cJ), ZJ)
        }
        clone() {
          return QJ.c.Clone((() => new JJ), this)
        }
        serialize() {
          return QJ.c.Serialize(this)
        }
        _bind(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), JJ && (JJ.setFloat4(cJ, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), JJ.setFloat4(ZJ, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), JJ.setFloat4(FJ, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const XJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], YJ = [(0, UJ.F)()], hJ = [(0, UJ.F)()], DJ = [(0, UJ.F)()], sJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], GJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_globalHue" in JJ,
            get: JJ => JJ._globalHue,
            set: (JJ, cJ) => {
              JJ._globalHue = cJ
            }
          },
          metadata: XJ
        }, fJ, xJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_globalDensity" in JJ,
            get: JJ => JJ._globalDensity,
            set: (JJ, cJ) => {
              JJ._globalDensity = cJ
            }
          },
          metadata: XJ
        }, rJ, vJ), (0, FJ.d)(null, null, eJ, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_globalSaturation" in JJ,
            get: JJ => JJ._globalSaturation,
            set: (JJ, cJ) => {
              JJ._globalSaturation = cJ
            }
          },
          metadata: XJ
        }, mJ, VJ), (0, FJ.d)(null, null, AJ, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_globalExposure" in JJ,
            get: JJ => JJ._globalExposure,
            set: (JJ, cJ) => {
              JJ._globalExposure = cJ
            }
          },
          metadata: XJ
        }, KJ, yJ), (0, FJ.d)(null, null, qJ, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_highlightsHue" in JJ,
            get: JJ => JJ._highlightsHue,
            set: (JJ, cJ) => {
              JJ._highlightsHue = cJ
            }
          },
          metadata: XJ
        }, SJ, IJ), (0, FJ.d)(null, null, jJ, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_highlightsDensity" in JJ,
            get: JJ => JJ._highlightsDensity,
            set: (JJ, cJ) => {
              JJ._highlightsDensity = cJ
            }
          },
          metadata: XJ
        }, MJ, bJ), (0, FJ.d)(null, null, YJ, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_highlightsSaturation" in JJ,
            get: JJ => JJ._highlightsSaturation,
            set: (JJ, cJ) => {
              JJ._highlightsSaturation = cJ
            }
          },
          metadata: XJ
        }, wJ, WJ), (0, FJ.d)(null, null, hJ, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_highlightsExposure" in JJ,
            get: JJ => JJ._highlightsExposure,
            set: (JJ, cJ) => {
              JJ._highlightsExposure = cJ
            }
          },
          metadata: XJ
        }, gJ, HJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_midtonesHue" in JJ,
            get: JJ => JJ._midtonesHue,
            set: (JJ, cJ) => {
              JJ._midtonesHue = cJ
            }
          },
          metadata: XJ
        }, PJ, kJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_midtonesDensity" in JJ,
            get: JJ => JJ._midtonesDensity,
            set: (JJ, cJ) => {
              JJ._midtonesDensity = cJ
            }
          },
          metadata: XJ
        }, pJ, dJ), (0, FJ.d)(null, null, nJ, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_midtonesSaturation" in JJ,
            get: JJ => JJ._midtonesSaturation,
            set: (JJ, cJ) => {
              JJ._midtonesSaturation = cJ
            }
          },
          metadata: XJ
        }, zJ, NJ), (0, FJ.d)(null, null, GJ, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_midtonesExposure" in JJ,
            get: JJ => JJ._midtonesExposure,
            set: (JJ, cJ) => {
              JJ._midtonesExposure = cJ
            }
          },
          metadata: XJ
        }, OJ, TJ), XJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XJ
        })
      })(), JJ.PrepareUniforms = EJ.e, JJ
    })();

    function KJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      JJ._bind(cJ, ZJ, FJ, UJ)
    }
    var yJ = ZJ(38729),
      SJ = ZJ(38901),
      IJ = ZJ(36216);
    let MJ = (() => {
        var JJ;
        let cJ, ZJ, jJ, sJ, nJ, GJ, xJ, EJ, IJ, MJ, bJ, wJ, WJ, gJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ, TJ, CJ, uJ, iJ, RJ, LJ, aJ = [],
          BJ = [],
          tJ = [],
          oJ = [],
          lJ = [],
          Jc = [],
          cc = [],
          Zc = [],
          Fc = [],
          Uc = [],
          ec = [],
          Xc = [],
          Ac = [],
          qc = [],
          jc = [],
          Yc = [],
          hc = [],
          Dc = [],
          sc = [],
          nc = [],
          Gc = [],
          fc = [],
          xc = [],
          rc = [],
          vc = [],
          mc = [],
          Qc = [],
          Ec = [],
          Vc = [],
          Kc = [],
          yc = [],
          Sc = [],
          Ic = [],
          Mc = [],
          bc = [],
          wc = [],
          Wc = [],
          gc = [],
          Hc = [],
          Pc = [],
          kc = [],
          pc = [],
          dc = [],
          zc = [],
          Nc = [],
          Oc = [],
          Tc = [],
          Cc = [],
          uc = [],
          ic = [],
          Rc = [],
          Lc = [],
          ac = [],
          Bc = [],
          tc = [],
          oc = [];
        return JJ = class {
          constructor() {
            this.colorCurves = (0, FJ.e)(this, aJ, new VJ), this._colorCurvesEnabled = ((0, FJ.e)(this, BJ), (0, FJ.e)(this, tJ, !1)), this._colorGradingTexture = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, void 0)), this._colorGradingEnabled = ((0, FJ.e)(this, Jc), (0, FJ.e)(this, cc, !1)), this._colorGradingWithGreenDepth = ((0, FJ.e)(this, Zc), (0, FJ.e)(this, Fc, !0)), this._colorGradingBGR = ((0, FJ.e)(this, Uc), (0, FJ.e)(this, ec, !0)), this._exposure = ((0, FJ.e)(this, Xc), (0, FJ.e)(this, Ac, 1)), this._toneMappingEnabled = ((0, FJ.e)(this, qc), (0, FJ.e)(this, jc, !1)), this._toneMappingType = ((0, FJ.e)(this, Yc), (0, FJ.e)(this, hc, JJ.TONEMAPPING_STANDARD)), this._contrast = ((0, FJ.e)(this, Dc), (0, FJ.e)(this, sc, 1)), this._whiteBalanceEnabled = ((0, FJ.e)(this, nc), (0, FJ.e)(this, Gc, !1)), this._temperature = ((0, FJ.e)(this, fc), (0, FJ.e)(this, xc, 6500)), this._tint = ((0, FJ.e)(this, rc), (0, FJ.e)(this, vc, 0)), this._whiteBalanceMatrix = ((0, FJ.e)(this, mc), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, FJ.e)(this, Qc, 0), this.vignetteCenterX = ((0, FJ.e)(this, Ec), (0, FJ.e)(this, Vc, 0)), this.vignetteCenterY = ((0, FJ.e)(this, Kc), (0, FJ.e)(this, yc, 0)), this.vignetteWeight = ((0, FJ.e)(this, Sc), (0, FJ.e)(this, Ic, 1.5)), this.vignetteColor = ((0, FJ.e)(this, Mc), (0, FJ.e)(this, bc, new XJ.f(0, 0, 0, 0))), this.vignetteCameraFov = ((0, FJ.e)(this, wc), (0, FJ.e)(this, Wc, .5)), this._vignetteBlendMode = ((0, FJ.e)(this, gc), (0, FJ.e)(this, Hc, JJ.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, FJ.e)(this, Pc), (0, FJ.e)(this, kc, !1)), this._ditheringEnabled = ((0, FJ.e)(this, pc), (0, FJ.e)(this, dc, !1)), this._ditheringIntensity = ((0, FJ.e)(this, zc), (0, FJ.e)(this, Nc, 1 / 255)), this._skipFinalColorClamp = ((0, FJ.e)(this, Oc), (0, FJ.e)(this, Tc, !1)), this._applyByPostProcess = ((0, FJ.e)(this, Cc), (0, FJ.e)(this, uc, !1)), this._isEnabled = ((0, FJ.e)(this, ic), (0, FJ.e)(this, Rc, !0)), this.outputTextureWidth = ((0, FJ.e)(this, Lc), (0, FJ.e)(this, ac, 0)), this.outputTextureHeight = ((0, FJ.e)(this, Bc), (0, FJ.e)(this, tc, 0)), this.onUpdateParameters = ((0, FJ.e)(this, oc), new eJ.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(JJ) {
            this._colorCurvesEnabled !== JJ && (this._colorCurvesEnabled = JJ, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(JJ) {
            this._colorGradingTexture !== JJ && (this._colorGradingTexture = JJ, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(JJ) {
            this._colorGradingEnabled !== JJ && (this._colorGradingEnabled = JJ, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(JJ) {
            this._colorGradingWithGreenDepth !== JJ && (this._colorGradingWithGreenDepth = JJ, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(JJ) {
            this._colorGradingBGR !== JJ && (this._colorGradingBGR = JJ, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(JJ) {
            this._exposure !== JJ && (this._exposure = JJ, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(JJ) {
            this._toneMappingEnabled !== JJ && (this._toneMappingEnabled = JJ, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(JJ) {
            this._toneMappingType !== JJ && (this._toneMappingType = JJ, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(JJ) {
            this._contrast !== JJ && (this._contrast = JJ, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(JJ) {
            this._whiteBalanceEnabled !== JJ && (this._whiteBalanceEnabled = JJ, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(JJ) {
            JJ = Number.isNaN(JJ) ? YJ : Math.max(JJ, YJ), this._temperature !== JJ && (this._temperature = JJ, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(JJ) {
            JJ = (0, AJ.Clamp)(JJ, -150, hJ), this._tint !== JJ && (this._tint = JJ, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(JJ, cJ) {
              const ZJ = fJ(DJ(JJ, cJ), mJ),
                FJ = rJ.multiply(ZJ).multiply(vJ);
              return qJ.b.GetAsMatrix3x3(FJ)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(JJ) {
            this.vignetteCenterY = JJ
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(JJ) {
            this.vignetteCenterX = JJ
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(JJ) {
            this._vignetteBlendMode !== JJ && (this._vignetteBlendMode = JJ, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(JJ) {
            this._vignetteEnabled !== JJ && (this._vignetteEnabled = JJ, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(JJ) {
            this._ditheringEnabled !== JJ && (this._ditheringEnabled = JJ, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(JJ) {
            this._ditheringIntensity !== JJ && (this._ditheringIntensity = JJ, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(JJ) {
            this._skipFinalColorClamp !== JJ && (this._skipFinalColorClamp = JJ, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(JJ) {
            this._applyByPostProcess !== JJ && (this._applyByPostProcess = JJ, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(JJ) {
            this._isEnabled !== JJ && (this._isEnabled = JJ, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(cJ) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return cJ.WHITEBALANCE = !1, cJ.VIGNETTE = !1, cJ.TONEMAPPING = 0, cJ.CONTRAST = !1, cJ.EXPOSURE = !1, cJ.COLORCURVES = !1, cJ.COLORGRADING = !1, cJ.COLORGRADING3D = !1, cJ.DITHER = !1, cJ.IMAGEPROCESSING = !1, cJ.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(cJ.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (cJ.WHITEBALANCE = this._whiteBalanceEnabled, cJ.VIGNETTE = this.vignetteEnabled, cJ.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === JJ._VIGNETTEMODE_MULTIPLY, cJ.VIGNETTEBLENDMODEOPAQUE = !cJ.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case JJ.TONEMAPPING_KHR_PBR_NEUTRAL:
                cJ.TONEMAPPING = 3;
                break;
              case JJ.TONEMAPPING_ACES:
                cJ.TONEMAPPING = 2;
                break;
              default:
                cJ.TONEMAPPING = 1
            } else cJ.TONEMAPPING = 0;
            cJ.CONTRAST = 1 !== this.contrast, cJ.EXPOSURE = 1 !== this.exposure, cJ.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, cJ.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, cJ.COLORGRADING ? cJ.COLORGRADING3D = this.colorGradingTexture.is3D : cJ.COLORGRADING3D = !1, cJ.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, cJ.SAMPLER3DBGRMAP = this.colorGradingBGR, cJ.DITHER = this._ditheringEnabled, cJ.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, cJ.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, cJ.IMAGEPROCESSING = cJ.WHITEBALANCE || cJ.VIGNETTE || !!cJ.TONEMAPPING || cJ.CONTRAST || cJ.EXPOSURE || cJ.COLORCURVES || cJ.COLORGRADING || cJ.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(JJ, cJ) {
            if (this._whiteBalanceEnabled && JJ.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && KJ(this.colorCurves, JJ), this._vignetteEnabled || this._ditheringEnabled) {
              const ZJ = 1 / (this.outputTextureWidth || JJ.gn().getRenderWidth()),
                FJ = 1 / (this.outputTextureHeight || JJ.gn().getRenderHeight());
              if (JJ.setFloat2("vInverseScreenSize", ZJ, FJ), this._ditheringEnabled && JJ.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const UJ = null != cJ ? cJ : FJ / ZJ;
                let eJ = Math.tan(.5 * this.vignetteCameraFov),
                  XJ = eJ * UJ;
                const AJ = Math.sqrt(XJ * eJ);
                XJ = (0, yJ.g)(XJ, AJ, this.vignetteStretch), eJ = (0, yJ.g)(eJ, AJ, this.vignetteStretch), JJ.setFloat4("vignetteSettings1", XJ, eJ, -XJ * this.vignetteCenterX, -eJ * this.vignetteCenterY);
                const qJ = -2 * this.vignetteWeight;
                JJ.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, qJ)
              }
            }
            if (JJ.setFloat("exposureLinear", this.exposure), JJ.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              JJ.setTexture("txColorTransform", this.colorGradingTexture);
              const cJ = this.colorGradingTexture.getSize().height;
              JJ.setFloat4("colorTransformSettings", (cJ - 1) / cJ, .5 / cJ, cJ, this.colorGradingTexture.level)
            }
          }
          clone() {
            return QJ.c.Clone((() => new JJ), this)
          }
          serialize() {
            return QJ.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cJ = [(0, UJ.k)()], ZJ = [(0, UJ.F)()], jJ = [(0, UJ.A)("colorGradingTexture")], sJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], GJ = [(0, UJ.F)()], xJ = [(0, UJ.F)()], EJ = [(0, UJ.F)()], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], bJ = [(0, UJ.F)()], wJ = [(0, UJ.F)()], WJ = [(0, UJ.F)()], gJ = [(0, UJ.F)()], HJ = [(0, UJ.F)()], PJ = [(0, UJ.F)()], kJ = [(0, UJ.F)()], pJ = [(0, UJ.o)()], dJ = [(0, UJ.F)()], zJ = [(0, UJ.F)()], NJ = [(0, UJ.F)()], OJ = [(0, UJ.F)()], TJ = [(0, UJ.F)()], CJ = [(0, UJ.F)()], uJ = [(0, UJ.F)()], iJ = [(0, UJ.F)()], RJ = [(0, UJ.F)()], LJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: JJ => "colorCurves" in JJ,
              get: JJ => JJ.colorCurves,
              set: (JJ, cJ) => {
                JJ.colorCurves = cJ
              }
            },
            metadata: eJ
          }, aJ, BJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_colorCurvesEnabled" in JJ,
              get: JJ => JJ._colorCurvesEnabled,
              set: (JJ, cJ) => {
                JJ._colorCurvesEnabled = cJ
              }
            },
            metadata: eJ
          }, tJ, oJ), (0, FJ.d)(null, null, jJ, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_colorGradingTexture" in JJ,
              get: JJ => JJ._colorGradingTexture,
              set: (JJ, cJ) => {
                JJ._colorGradingTexture = cJ
              }
            },
            metadata: eJ
          }, lJ, Jc), (0, FJ.d)(null, null, sJ, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_colorGradingEnabled" in JJ,
              get: JJ => JJ._colorGradingEnabled,
              set: (JJ, cJ) => {
                JJ._colorGradingEnabled = cJ
              }
            },
            metadata: eJ
          }, cc, Zc), (0, FJ.d)(null, null, nJ, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_colorGradingWithGreenDepth" in JJ,
              get: JJ => JJ._colorGradingWithGreenDepth,
              set: (JJ, cJ) => {
                JJ._colorGradingWithGreenDepth = cJ
              }
            },
            metadata: eJ
          }, Fc, Uc), (0, FJ.d)(null, null, GJ, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_colorGradingBGR" in JJ,
              get: JJ => JJ._colorGradingBGR,
              set: (JJ, cJ) => {
                JJ._colorGradingBGR = cJ
              }
            },
            metadata: eJ
          }, ec, Xc), (0, FJ.d)(null, null, xJ, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_exposure" in JJ,
              get: JJ => JJ._exposure,
              set: (JJ, cJ) => {
                JJ._exposure = cJ
              }
            },
            metadata: eJ
          }, Ac, qc), (0, FJ.d)(null, null, EJ, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_toneMappingEnabled" in JJ,
              get: JJ => JJ._toneMappingEnabled,
              set: (JJ, cJ) => {
                JJ._toneMappingEnabled = cJ
              }
            },
            metadata: eJ
          }, jc, Yc), (0, FJ.d)(null, null, IJ, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_toneMappingType" in JJ,
              get: JJ => JJ._toneMappingType,
              set: (JJ, cJ) => {
                JJ._toneMappingType = cJ
              }
            },
            metadata: eJ
          }, hc, Dc), (0, FJ.d)(null, null, MJ, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_contrast" in JJ,
              get: JJ => JJ._contrast,
              set: (JJ, cJ) => {
                JJ._contrast = cJ
              }
            },
            metadata: eJ
          }, sc, nc), (0, FJ.d)(null, null, bJ, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_whiteBalanceEnabled" in JJ,
              get: JJ => JJ._whiteBalanceEnabled,
              set: (JJ, cJ) => {
                JJ._whiteBalanceEnabled = cJ
              }
            },
            metadata: eJ
          }, Gc, fc), (0, FJ.d)(null, null, wJ, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_temperature" in JJ,
              get: JJ => JJ._temperature,
              set: (JJ, cJ) => {
                JJ._temperature = cJ
              }
            },
            metadata: eJ
          }, xc, rc), (0, FJ.d)(null, null, WJ, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_tint" in JJ,
              get: JJ => JJ._tint,
              set: (JJ, cJ) => {
                JJ._tint = cJ
              }
            },
            metadata: eJ
          }, vc, mc), (0, FJ.d)(null, null, gJ, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vignetteStretch" in JJ,
              get: JJ => JJ.vignetteStretch,
              set: (JJ, cJ) => {
                JJ.vignetteStretch = cJ
              }
            },
            metadata: eJ
          }, Qc, Ec), (0, FJ.d)(null, null, HJ, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vignetteCenterX" in JJ,
              get: JJ => JJ.vignetteCenterX,
              set: (JJ, cJ) => {
                JJ.vignetteCenterX = cJ
              }
            },
            metadata: eJ
          }, Vc, Kc), (0, FJ.d)(null, null, PJ, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vignetteCenterY" in JJ,
              get: JJ => JJ.vignetteCenterY,
              set: (JJ, cJ) => {
                JJ.vignetteCenterY = cJ
              }
            },
            metadata: eJ
          }, yc, Sc), (0, FJ.d)(null, null, kJ, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vignetteWeight" in JJ,
              get: JJ => JJ.vignetteWeight,
              set: (JJ, cJ) => {
                JJ.vignetteWeight = cJ
              }
            },
            metadata: eJ
          }, Ic, Mc), (0, FJ.d)(null, null, pJ, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vignetteColor" in JJ,
              get: JJ => JJ.vignetteColor,
              set: (JJ, cJ) => {
                JJ.vignetteColor = cJ
              }
            },
            metadata: eJ
          }, bc, wc), (0, FJ.d)(null, null, dJ, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vignetteCameraFov" in JJ,
              get: JJ => JJ.vignetteCameraFov,
              set: (JJ, cJ) => {
                JJ.vignetteCameraFov = cJ
              }
            },
            metadata: eJ
          }, Wc, gc), (0, FJ.d)(null, null, zJ, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_vignetteBlendMode" in JJ,
              get: JJ => JJ._vignetteBlendMode,
              set: (JJ, cJ) => {
                JJ._vignetteBlendMode = cJ
              }
            },
            metadata: eJ
          }, Hc, Pc), (0, FJ.d)(null, null, NJ, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_vignetteEnabled" in JJ,
              get: JJ => JJ._vignetteEnabled,
              set: (JJ, cJ) => {
                JJ._vignetteEnabled = cJ
              }
            },
            metadata: eJ
          }, kc, pc), (0, FJ.d)(null, null, OJ, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_ditheringEnabled" in JJ,
              get: JJ => JJ._ditheringEnabled,
              set: (JJ, cJ) => {
                JJ._ditheringEnabled = cJ
              }
            },
            metadata: eJ
          }, dc, zc), (0, FJ.d)(null, null, TJ, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_ditheringIntensity" in JJ,
              get: JJ => JJ._ditheringIntensity,
              set: (JJ, cJ) => {
                JJ._ditheringIntensity = cJ
              }
            },
            metadata: eJ
          }, Nc, Oc), (0, FJ.d)(null, null, CJ, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_skipFinalColorClamp" in JJ,
              get: JJ => JJ._skipFinalColorClamp,
              set: (JJ, cJ) => {
                JJ._skipFinalColorClamp = cJ
              }
            },
            metadata: eJ
          }, Tc, Cc), (0, FJ.d)(null, null, uJ, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_applyByPostProcess" in JJ,
              get: JJ => JJ._applyByPostProcess,
              set: (JJ, cJ) => {
                JJ._applyByPostProcess = cJ
              }
            },
            metadata: eJ
          }, uc, ic), (0, FJ.d)(null, null, iJ, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_isEnabled" in JJ,
              get: JJ => JJ._isEnabled,
              set: (JJ, cJ) => {
                JJ._isEnabled = cJ
              }
            },
            metadata: eJ
          }, Rc, Lc), (0, FJ.d)(null, null, RJ, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: JJ => "outputTextureWidth" in JJ,
              get: JJ => JJ.outputTextureWidth,
              set: (JJ, cJ) => {
                JJ.outputTextureWidth = cJ
              }
            },
            metadata: eJ
          }, ac, Bc), (0, FJ.d)(null, null, LJ, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "outputTextureHeight" in JJ,
              get: JJ => JJ.outputTextureHeight,
              set: (JJ, cJ) => {
                JJ.outputTextureHeight = cJ
              }
            },
            metadata: eJ
          }, tc, oc), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ.TONEMAPPING_STANDARD = 0, JJ.TONEMAPPING_ACES = 1, JJ.TONEMAPPING_KHR_PBR_NEUTRAL = 2, JJ.PrepareUniforms = SJ.i, JJ.PrepareSamplers = SJ.e, JJ._VIGNETTEMODE_MULTIPLY = 0, JJ._VIGNETTEMODE_OPAQUE = 1, JJ
      })(),
      bJ = !1;

    function wJ(JJ) {
      const cJ = QJ.c.Parse((() => new MJ), JJ, null, null);
      return void 0 !== JJ.vignetteCentreX && (cJ.vignetteCenterX = JJ.vignetteCentreX), void 0 !== JJ.vignetteCentreY && (cJ.vignetteCenterY = JJ.vignetteCentreY), cJ
    }

    function WJ() {
      bJ || (bJ = !0, MJ.Parse = wJ, QJ.c._ImageProcessingConfigurationParser = wJ, (0, IJ.f)("BABYLON.ImageProcessingConfiguration", MJ))
    }
  },
  38907: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(38879);
    class eJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = JJ, this._noUBO = !JJ.supportsUniformBuffers || UJ, this._dynamic = ZJ, this._name = FJ ?? "no-name", this._data = cJ || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === eJ && this._engine._features.trackUbosInFrame || !0 === eJ) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Y5 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Y5 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(JJ) {
        let cJ;
        if (cJ = JJ <= 2 ? JJ : 4, this._uniformLocationPointer % cJ !== 0) {
          const JJ = this._uniformLocationPointer;
          this._uniformLocationPointer += cJ - this._uniformLocationPointer % cJ;
          const ZJ = this._uniformLocationPointer - JJ;
          for (let cJ = 0; cJ < ZJ; cJ++) this._data.push(0)
        }
      }
      addUniform(JJ, cJ) {
        let ZJ, FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (FJ > 0 && "number" === typeof cJ && (this._uniformArraySizes[JJ] = {
            strideSize: cJ,
            arraySize: FJ
          }), void 0 === this._uniformLocations[JJ] && (this._uniformNames.push(JJ), !this._noUBO)) {
          if (FJ > 0) {
            if (cJ instanceof Array) throw "addUniform should not be use with Array in UBO: " + JJ;
            if (this._fillAlignment(4), 16 == cJ) cJ *= FJ;
            else {
              cJ = cJ * FJ + (4 - cJ) * FJ
            }
            ZJ = [];
            for (let JJ = 0; JJ < cJ; JJ++) ZJ.push(0)
          } else {
            if (cJ instanceof Array) ZJ = cJ, cJ = ZJ.length;
            else {
              ZJ = [];
              for (let JJ = 0; JJ < cJ; JJ++) ZJ.push(0)
            }
            this._fillAlignment(cJ)
          }
          this._uniformSizes[JJ] = cJ, this._uniformLocations[JJ] = this._uniformLocationPointer, this._uniformLocationPointer += cJ;
          for (let JJ = 0; JJ < cJ; JJ++) this._data.push(ZJ[JJ]);
          this._needSync = !0
        }
      }
      addMatrix(JJ, cJ) {
        this.addUniform(JJ, Array.prototype.slice.call(cJ.JFJ()))
      }
      addFloat2(JJ, cJ, ZJ) {
        const FJ = [cJ, ZJ];
        this.addUniform(JJ, FJ)
      }
      addFloat3(JJ, cJ, ZJ, FJ) {
        const UJ = [cJ, ZJ, FJ];
        this.addUniform(JJ, UJ)
      }
      addColor3(JJ, cJ) {
        const ZJ = [cJ.r, cJ.g, cJ.b];
        this.addUniform(JJ, ZJ)
      }
      addColor4(JJ, cJ, ZJ) {
        const FJ = [cJ.r, cJ.g, cJ.b, ZJ];
        this.addUniform(JJ, FJ)
      }
      addVector3(JJ, cJ) {
        const ZJ = [cJ.x, cJ.y, cJ.z];
        this.addUniform(JJ, ZJ)
      }
      addMatrix3x3(JJ) {
        this.addUniform(JJ, 12)
      }
      addMatrix2x2(JJ) {
        this.addUniform(JJ, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const JJ = [];
        let cJ = 0;
        for (const ZJ in this._uniformLocations)
          if (JJ.push(ZJ), 10 === ++cJ) break;
        return JJ.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const JJ of this._ownerListsBySlot.values()) this._removeOwnerBacklink(JJ);
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
      set name(JJ) {
        this._name = JJ
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(JJ, cJ) {
        for (let ZJ = 0; ZJ < JJ.length; ++ZJ)
          if (JJ[ZJ] !== cJ[ZJ]) return !1;
        return !0
      }
      _copyBuffer(JJ, cJ) {
        for (let ZJ = 0; ZJ < JJ.length; ++ZJ) cJ[ZJ] = JJ[ZJ]
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
      _updateOwnerKeyed(JJ) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let cJ = this._slotByOwner.get(JJ);
        if (void 0 === cJ && (cJ = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(JJ, cJ), this._ownerCount++, JJ._uniformBuffersWithOwnedSlot || (JJ._uniformBuffersWithOwnedSlot = []), JJ._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(cJ, JJ._uniformBuffersWithOwnedSlot)), this._slotGeneration[cJ] === this._dataGeneration) return this._bufferIndex = cJ, this._buffer = this._buffers[cJ][0], this.bindUniformBuffer(), this._slotFrameId[cJ] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const ZJ = this._buffers[cJ][1];
        this._slotFrameId[cJ] === this._currentFrameId && ZJ && !this._buffersEqual(this._bufferData, ZJ) && (cJ = this._takeFreeSlot(!1)), this._bufferIndex = cJ, this._buffer = this._buffers[cJ][0], this.bindUniformBuffer();
        const FJ = this._buffers[cJ][1];
        FJ && this._buffersEqual(this._bufferData, FJ) || (FJ && this._copyBuffer(this._bufferData, FJ), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[cJ] = this._currentFrameId, this._slotGeneration[cJ] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(JJ) {
        for (let ZJ = 0; ZJ < this._freeSlots.length; ++ZJ) {
          const cJ = this._freeSlots[ZJ];
          if (this._slotFrameId[cJ] !== this._currentFrameId) return JJ && (this._freeSlots[ZJ] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), cJ
        }
        this._rebuild();
        const cJ = this._buffers.length - 1;
        return JJ || this._freeSlots.push(cJ), cJ
      }
      _releaseOwnerSlot(JJ) {
        const cJ = this._slotByOwner?.get(JJ);
        if (void 0 === cJ) return;
        this._slotByOwner.delete(JJ);
        const ZJ = this._ownerListsBySlot.get(cJ);
        ZJ && (this._removeOwnerBacklink(ZJ), this._ownerListsBySlot.delete(cJ)), this._ownerCount--, this._freeSlots.push(cJ)
      }
      _removeOwnerBacklink(JJ) {
        const cJ = JJ.indexOf(this); - 1 !== cJ && (JJ[cJ] = JJ[JJ.length - 1], JJ.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(JJ, cJ, ZJ) {
        this._checkNewFrame();
        let UJ = this._uniformLocations[JJ];
        if (void 0 === UJ) {
          if (this._buffer) return void FJ.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + JJ);
          this.addUniform(JJ, ZJ), UJ = this._uniformLocations[JJ]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let JJ = 0; JJ < ZJ; JJ++) this._bufferData[UJ + JJ] = cJ[JJ];
          this._dataGeneration++
        } else {
          let JJ = !1;
          for (let FJ = 0; FJ < ZJ; FJ++)(16 === ZJ && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[UJ + FJ] !== Math.fround(cJ[FJ])) && (JJ = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[UJ + FJ] = cJ[FJ]);
          this._needSync = this._needSync || JJ, JJ && this._dataGeneration++
        }
      }
      updateUniformArray(JJ, cJ, ZJ) {
        this._checkNewFrame();
        const eJ = this._uniformLocations[JJ];
        if (void 0 === eJ) return void FJ.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const XJ = this._uniformArraySizes[JJ];
        if (this._dynamic) {
          for (let JJ = 0; JJ < ZJ; JJ++) this._bufferData[eJ + JJ] = cJ[JJ];
          this._dataGeneration++
        } else {
          let JJ = !1,
            FJ = 0,
            AJ = 0;
          for (let qJ = 0; qJ < ZJ; qJ++)
            if (this._bufferData[eJ + 4 * AJ + FJ] !== UJ.j.FloatRound(cJ[qJ]) && (JJ = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[eJ + 4 * AJ + FJ] = cJ[qJ]), FJ++, FJ === XJ.strideSize) {
              for (; FJ < 4; FJ++) this._bufferData[eJ + 4 * AJ + FJ] = 0;
              FJ = 0, AJ++
            } this._needSync = this._needSync || JJ, JJ && this._dataGeneration++
        }
      }
      _cacheMatrix(JJ, cJ) {
        this._checkNewFrame();
        const ZJ = this._valueCache[JJ],
          FJ = cJ.updateFlag;
        return (void 0 === ZJ || ZJ !== FJ) && (this._valueCache[JJ] = FJ, !0)
      }
      _updateMatrix3x3ForUniform(JJ, cJ) {
        for (let ZJ = 0; ZJ < 3; ZJ++) eJ._TempBuffer[4 * ZJ] = cJ[3 * ZJ], eJ._TempBuffer[4 * ZJ + 1] = cJ[3 * ZJ + 1], eJ._TempBuffer[4 * ZJ + 2] = cJ[3 * ZJ + 2], eJ._TempBuffer[4 * ZJ + 3] = 0;
        this.updateUniform(JJ, eJ._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(JJ, cJ) {
        this._currentEffect.setMatrix3x3(JJ, cJ)
      }
      _updateMatrix2x2ForEffect(JJ, cJ) {
        this._currentEffect.setMatrix2x2(JJ, cJ)
      }
      _updateMatrix2x2ForUniform(JJ, cJ) {
        for (let ZJ = 0; ZJ < 2; ZJ++) eJ._TempBuffer[4 * ZJ] = cJ[2 * ZJ], eJ._TempBuffer[4 * ZJ + 1] = cJ[2 * ZJ + 1], eJ._TempBuffer[4 * ZJ + 2] = 0, eJ._TempBuffer[4 * ZJ + 3] = 0;
        this.updateUniform(JJ, eJ._TempBuffer, 8)
      }
      _updateFloatForEffect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(JJ + ZJ, cJ)
      }
      _updateFloatForUniform(JJ, cJ) {
        eJ._TempBuffer[0] = cJ, this.updateUniform(JJ, eJ._TempBuffer, 1)
      }
      _updateFloat2ForEffect(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(JJ + FJ, cJ, ZJ)
      }
      _updateFloat2ForUniform(JJ, cJ, ZJ) {
        eJ._TempBuffer[0] = cJ, eJ._TempBuffer[1] = ZJ, this.updateUniform(JJ, eJ._TempBuffer, 2)
      }
      _updateFloat3ForEffect(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(JJ + UJ, cJ, ZJ, FJ)
      }
      _updateFloat3ForUniform(JJ, cJ, ZJ, FJ) {
        eJ._TempBuffer[0] = cJ, eJ._TempBuffer[1] = ZJ, eJ._TempBuffer[2] = FJ, this.updateUniform(JJ, eJ._TempBuffer, 3)
      }
      _updateFloat4ForEffect(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(JJ + eJ, cJ, ZJ, FJ, UJ)
      }
      _updateFloat4ForUniform(JJ, cJ, ZJ, FJ, UJ) {
        eJ._TempBuffer[0] = cJ, eJ._TempBuffer[1] = ZJ, eJ._TempBuffer[2] = FJ, eJ._TempBuffer[3] = UJ, this.updateUniform(JJ, eJ._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[JJ]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(JJ + ZJ, cJ);
            break;
          case 3:
            this._currentEffect.setFloatArray3(JJ + ZJ, cJ);
            break;
          case 4:
            this._currentEffect.setFloatArray4(JJ + ZJ, cJ);
            break;
          default:
            this._currentEffect.setFloatArray(JJ + ZJ, cJ)
        }
      }
      _updateFloatArrayForUniform(JJ, cJ) {
        this.updateUniformArray(JJ, cJ, cJ.length)
      }
      _updateArrayForEffect(JJ, cJ) {
        this._currentEffect.setArray(JJ, cJ)
      }
      _updateArrayForUniform(JJ, cJ) {
        this.updateUniformArray(JJ, cJ, cJ.length)
      }
      _updateIntArrayForEffect(JJ, cJ) {
        this._currentEffect.setIntArray(JJ, cJ)
      }
      _updateIntArrayForUniform(JJ, cJ) {
        eJ._TempBufferInt32View.set(cJ), this.updateUniformArray(JJ, eJ._TempBuffer, cJ.length)
      }
      _updateUIntArrayForEffect(JJ, cJ) {
        this._currentEffect.setUIntArray(JJ, cJ)
      }
      _updateUIntArrayForUniform(JJ, cJ) {
        eJ._TempBufferUInt32View.set(cJ), this.updateUniformArray(JJ, eJ._TempBuffer, cJ.length)
      }
      _updateMatrixForEffect(JJ, cJ) {
        this._currentEffect.setMatrix(JJ, cJ)
      }
      _updateMatrixForUniform(JJ, cJ) {
        this._cacheMatrix(JJ, cJ) && this.updateUniform(JJ, cJ.JFJ(), 16)
      }
      _updateMatricesForEffect(JJ, cJ) {
        this._currentEffect.setMatrices(JJ, cJ)
      }
      _updateMatricesForUniform(JJ, cJ) {
        this.updateUniform(JJ, cJ, cJ.length)
      }
      _updateVector3ForEffect(JJ, cJ) {
        this._currentEffect.setVector3(JJ, cJ)
      }
      _updateVector3ForUniform(JJ, cJ) {
        eJ._TempBuffer[0] = cJ.x, eJ._TempBuffer[1] = cJ.y, eJ._TempBuffer[2] = cJ.z, this.updateUniform(JJ, eJ._TempBuffer, 3)
      }
      _updateVector4ForEffect(JJ, cJ) {
        this._currentEffect.setVector4(JJ, cJ)
      }
      _updateVector4ForUniform(JJ, cJ) {
        eJ._TempBuffer[0] = cJ.x, eJ._TempBuffer[1] = cJ.y, eJ._TempBuffer[2] = cJ.z, eJ._TempBuffer[3] = cJ.w, this.updateUniform(JJ, eJ._TempBuffer, 4)
      }
      _updateColor3ForEffect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(JJ + ZJ, cJ)
      }
      _updateColor3ForUniform(JJ, cJ) {
        eJ._TempBuffer[0] = cJ.r, eJ._TempBuffer[1] = cJ.g, eJ._TempBuffer[2] = cJ.b, this.updateUniform(JJ, eJ._TempBuffer, 3)
      }
      _updateColor4ForEffect(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(JJ + FJ, cJ, ZJ)
      }
      _updateDirectColor4ForEffect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(JJ + ZJ, cJ)
      }
      _updateColor4ForUniform(JJ, cJ, ZJ) {
        eJ._TempBuffer[0] = cJ.r, eJ._TempBuffer[1] = cJ.g, eJ._TempBuffer[2] = cJ.b, eJ._TempBuffer[3] = ZJ, this.updateUniform(JJ, eJ._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(JJ, cJ) {
        eJ._TempBuffer[0] = cJ.r, eJ._TempBuffer[1] = cJ.g, eJ._TempBuffer[2] = cJ.b, eJ._TempBuffer[3] = cJ.a, this.updateUniform(JJ, eJ._TempBuffer, 4)
      }
      _updateIntForEffect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(JJ + ZJ, cJ)
      }
      _updateIntForUniform(JJ, cJ) {
        eJ._TempBufferInt32View[0] = cJ, this.updateUniform(JJ, eJ._TempBuffer, 1)
      }
      _updateInt2ForEffect(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(JJ + FJ, cJ, ZJ)
      }
      _updateInt2ForUniform(JJ, cJ, ZJ) {
        eJ._TempBufferInt32View[0] = cJ, eJ._TempBufferInt32View[1] = ZJ, this.updateUniform(JJ, eJ._TempBuffer, 2)
      }
      _updateInt3ForEffect(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(JJ + UJ, cJ, ZJ, FJ)
      }
      _updateInt3ForUniform(JJ, cJ, ZJ, FJ) {
        eJ._TempBufferInt32View[0] = cJ, eJ._TempBufferInt32View[1] = ZJ, eJ._TempBufferInt32View[2] = FJ, this.updateUniform(JJ, eJ._TempBuffer, 3)
      }
      _updateInt4ForEffect(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(JJ + eJ, cJ, ZJ, FJ, UJ)
      }
      _updateInt4ForUniform(JJ, cJ, ZJ, FJ, UJ) {
        eJ._TempBufferInt32View[0] = cJ, eJ._TempBufferInt32View[1] = ZJ, eJ._TempBufferInt32View[2] = FJ, eJ._TempBufferInt32View[3] = UJ, this.updateUniform(JJ, eJ._TempBuffer, 4)
      }
      _updateUIntForEffect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(JJ + ZJ, cJ)
      }
      _updateUIntForUniform(JJ, cJ) {
        eJ._TempBufferUInt32View[0] = cJ, this.updateUniform(JJ, eJ._TempBuffer, 1)
      }
      _updateUInt2ForEffect(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(JJ + FJ, cJ, ZJ)
      }
      _updateUInt2ForUniform(JJ, cJ, ZJ) {
        eJ._TempBufferUInt32View[0] = cJ, eJ._TempBufferUInt32View[1] = ZJ, this.updateUniform(JJ, eJ._TempBuffer, 2)
      }
      _updateUInt3ForEffect(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(JJ + UJ, cJ, ZJ, FJ)
      }
      _updateUInt3ForUniform(JJ, cJ, ZJ, FJ) {
        eJ._TempBufferUInt32View[0] = cJ, eJ._TempBufferUInt32View[1] = ZJ, eJ._TempBufferUInt32View[2] = FJ, this.updateUniform(JJ, eJ._TempBuffer, 3)
      }
      _updateUInt4ForEffect(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(JJ + eJ, cJ, ZJ, FJ, UJ)
      }
      _updateUInt4ForUniform(JJ, cJ, ZJ, FJ, UJ) {
        eJ._TempBufferUInt32View[0] = cJ, eJ._TempBufferUInt32View[1] = ZJ, eJ._TempBufferUInt32View[2] = FJ, eJ._TempBufferUInt32View[3] = UJ, this.updateUniform(JJ, eJ._TempBuffer, 4)
      }
      setTexture(JJ, cJ) {
        this._currentEffect.setTexture(JJ, cJ)
      }
      setTextureArray(JJ, cJ) {
        this._currentEffect.setTextureArray(JJ, cJ)
      }
      bindTexture(JJ, cJ) {
        this._currentEffect._bindTexture(JJ, cJ)
      }
      updateUniformDirectly(JJ, cJ) {
        this.updateUniform(JJ, cJ, cJ.length), this.update()
      }
      bindToEffect(JJ, cJ) {
        this._currentEffect = JJ, this._currentEffectName = cJ
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(JJ) {
        if (!this._buffers) return this._buffer === JJ;
        for (let cJ = 0; cJ < this._buffers.length; ++cJ) {
          if (this._buffers[cJ][0] === JJ) return this._bufferIndex = cJ, this._buffer = JJ, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[cJ][1] && (this._bufferData.set(this._buffers[cJ][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(JJ) {
        return void 0 !== this._uniformLocations[JJ]
      }
      dispose() {
        if (this._noUBO) return;
        const JJ = this._engine._uniformBuffers,
          cJ = JJ.indexOf(this);
        if (-1 !== cJ && (JJ[cJ] = JJ[JJ.length - 1], JJ.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let JJ = 0; JJ < this._buffers.length; ++JJ) {
            const cJ = this._buffers[JJ][0];
            this._engine._releaseBuffer(cJ)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    eJ._MAX_UNIFORM_SIZE = 256, eJ._TempBuffer = new Float32Array(eJ._MAX_UNIFORM_SIZE), eJ._TempBufferInt32View = new Int32Array(eJ._TempBuffer.buffer), eJ._TempBufferUInt32View = new Uint32Array(eJ._TempBuffer.buffer)
  },
  38720: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ
    });
    var FJ = ZJ(38723);
    class UJ extends FJ.d {
      constructor(JJ) {
        super(), this._buffer = JJ
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  38813: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ,
      f: () => jJ
    });
    const FJ = "__bjs_serializable__",
      UJ = new WeakMap;

    function eJ(JJ, cJ) {
      return Object.prototype.hasOwnProperty.call(JJ, cJ)
    }
    const XJ = function() {
      let JJ = Symbol.metadata;
      return JJ || (JJ = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: JJ
      })), JJ
    }();

    function AJ(JJ) {
      return "function" === typeof JJ ? JJ : JJ?.constructor
    }

    function qJ(JJ) {
      if (!JJ) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(XJ)}) polyfill must run before decorated classes are evaluated.`);
      return eJ(JJ, FJ) || (JJ[FJ] = {}), JJ[FJ]
    }

    function jJ(JJ) {
      const cJ = AJ(JJ),
        ZJ = cJ ? cJ[XJ] : void 0;
      if (!ZJ) return {};
      const qJ = UJ.get(ZJ);
      if (qJ) return qJ;
      const jJ = {},
        YJ = [];
      let hJ = ZJ;
      for (; hJ;) YJ.push(hJ), hJ = Object.getPrototypeOf(hJ);
      for (const UJ of YJ)
        if (eJ(UJ, FJ)) {
          const JJ = UJ[FJ];
          for (const cJ in JJ) jJ[cJ] = JJ[cJ]
        } return UJ.set(ZJ, jJ), jJ
    }
  },
  38806: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => AJ,
      C: () => YJ,
      E: () => hJ,
      F: () => XJ,
      b: () => vJ,
      f: () => eJ,
      g: () => rJ,
      k: () => sJ,
      m: () => qJ,
      o: () => nJ,
      s: () => jJ,
      t: () => fJ,
      w: () => DJ,
      y: () => GJ
    });
    var FJ = ZJ(38813);

    function UJ(JJ, cJ) {
      return (ZJ, UJ) => {
        if (!UJ.metadata) return;
        const eJ = String(UJ.name),
          XJ = (0, FJ.e)(UJ.metadata);
        XJ[eJ] || (XJ[eJ] = {
          type: JJ,
          sourceName: cJ
        })
      }
    }

    function eJ(JJ) {
      return function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (ZJ, FJ) => {
          const UJ = cJ || "_" + String(FJ.name);
          return {
            init(JJ) {
              return void 0 === JJ && UJ in this || (this[UJ] = JJ), JJ
            },
            get() {
              return this[UJ]
            },
            set(cJ) {
              "function" === typeof this[UJ]?.equals && this[UJ].equals(cJ) || this[UJ] !== cJ && (this[UJ] = cJ, this[JJ]())
            }
          }
        }
      }(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function XJ(JJ) {
      return UJ(0, JJ)
    }

    function AJ(JJ) {
      return UJ(1, JJ)
    }

    function qJ(JJ) {
      return UJ(2, JJ)
    }

    function jJ(JJ) {
      return UJ(3, JJ)
    }

    function YJ(JJ) {
      return UJ(4, JJ)
    }

    function hJ(JJ) {
      return UJ(5, JJ)
    }

    function DJ(JJ) {
      return UJ(6, JJ)
    }

    function sJ(JJ) {
      return UJ(7, JJ)
    }

    function nJ(JJ) {
      return UJ(8, JJ)
    }

    function GJ(JJ) {
      return UJ(10, JJ)
    }

    function fJ(JJ) {
      return UJ(12, JJ)
    }

    function xJ(JJ, cJ, ZJ) {
      const FJ = String(cJ.name);
      let UJ = null;
      const eJ = function() {
        if (null === UJ) {
          UJ = JJ, "undefined" !== typeof _native && _native[FJ] && (UJ = ZJ(_native[FJ], JJ));
          const XJ = this && (cJ.static ? this : Object.getPrototypeOf(this));
          XJ?.[FJ] === eJ && (XJ[FJ] = UJ)
        }
        for (var XJ = arguments.length, AJ = new Array(XJ), qJ = 0; qJ < XJ; qJ++) AJ[qJ] = arguments[qJ];
        return UJ.apply(this, AJ)
      };
      return eJ
    }

    function rJ(JJ, cJ) {
      return xJ(JJ, cJ, (JJ => JJ))
    }

    function vJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (ZJ, FJ) => {
        const UJ = cJ || "_" + String(FJ.name);
        return {
          get() {
            return this[UJ]?.value
          },
          set(cJ) {
            "function" === typeof this[UJ]?.value?.equals && this[UJ].value.equals(cJ) || this[UJ].value !== cJ && (this[UJ].value = cJ, this[JJ]())
          }
        }
      }
    }
    rJ.filter = function(JJ) {
      return (cJ, ZJ) => xJ(cJ, ZJ, ((cJ, ZJ) => function() {
        for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
        return JJ(...UJ) ? cJ(...UJ) : ZJ.apply(this, UJ)
      }))
    }
  },
  38822: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(38677),
      UJ = ZJ(38825),
      eJ = ZJ(36231),
      XJ = ZJ(36174),
      AJ = ZJ(38813);
    const qJ = function(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const eJ = JJ();
      UJ.b && UJ.b.HasTags(cJ) && UJ.b.AddTagsTo(eJ, UJ.b.GetTags(cJ, !0));
      const XJ = (0, AJ.f)(eJ),
        qJ = {};
      for (const UJ in XJ) {
        const JJ = XJ[UJ],
          AJ = cJ[UJ],
          YJ = JJ.type;
        if (void 0 !== AJ && null !== AJ && ("uniqueId" !== UJ || jJ.AllowLoadingUniqueId)) switch (YJ) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof AJ.slice ? eJ[UJ] = AJ.slice() : eJ[UJ] = AJ;
            break;
          case 1:
            FJ.cloneTexturesOnlyOnce && qJ[AJ.uniqueId] ? eJ[UJ] = qJ[AJ.uniqueId] : (eJ[UJ] = ZJ || AJ.isRenderTarget ? AJ : AJ.clone(), qJ[AJ.uniqueId] = eJ[UJ]);
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
            eJ[UJ] = ZJ ? AJ : AJ.clone()
        }
      }
      return eJ
    };
    class jJ {
      static AppendSerializedAnimations(JJ, cJ) {
        if (JJ.animations) {
          cJ.animations = [];
          for (let ZJ = 0; ZJ < JJ.animations.length; ZJ++) {
            const FJ = JJ.animations[ZJ];
            cJ.animations.push(FJ.serialize())
          }
        }
      }
      static Serialize(JJ, cJ) {
        cJ || (cJ = {}), UJ.b && (cJ.tags = UJ.b.GetTags(JJ));
        const ZJ = (0, AJ.f)(JJ);
        for (const FJ in ZJ) {
          const UJ = ZJ[FJ],
            eJ = UJ.sourceName || FJ,
            XJ = UJ.type,
            AJ = JJ[FJ];
          if (void 0 !== AJ && null !== AJ && ("uniqueId" !== FJ || jJ.AllowLoadingUniqueId)) switch (XJ) {
            case 0:
              Array.isArray(AJ) ? cJ[eJ] = AJ.slice() : cJ[eJ] = AJ;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              cJ[eJ] = AJ.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              cJ[eJ] = AJ.JFJ();
              break;
            case 6:
            case 11:
              cJ[eJ] = AJ.id
          }
        }
        return cJ
      }
      static ParseProperties(JJ, cJ, ZJ, FJ) {
        FJ || (FJ = "");
        const UJ = (0, AJ.f)(cJ);
        for (const AJ in UJ) {
          const qJ = UJ[AJ],
            YJ = JJ[qJ.sourceName || AJ],
            hJ = qJ.type;
          if (void 0 !== YJ && null !== YJ && ("uniqueId" !== AJ || jJ.AllowLoadingUniqueId)) {
            const JJ = cJ;
            switch (hJ) {
              case 0:
                JJ[AJ] = YJ;
                break;
              case 1:
                ZJ && (JJ[AJ] = jJ._TextureParser(YJ, ZJ, FJ));
                break;
              case 2:
                JJ[AJ] = eJ.e.FromArray(YJ);
                break;
              case 3:
                JJ[AJ] = jJ._FresnelParametersParser(YJ);
                break;
              case 4:
                JJ[AJ] = XJ.i.FromArray(YJ);
                break;
              case 5:
                JJ[AJ] = XJ.j.FromArray(YJ);
                break;
              case 6:
                ZJ && (JJ[AJ] = ZJ.getLastMeshById(YJ));
                break;
              case 7:
                JJ[AJ] = jJ._ColorCurvesParser(YJ);
                break;
              case 8:
                JJ[AJ] = eJ.f.FromArray(YJ);
                break;
              case 9:
                JJ[AJ] = jJ._ImageProcessingConfigurationParser(YJ);
                break;
              case 10:
                JJ[AJ] = XJ.e.FromArray(YJ);
                break;
              case 11:
                ZJ && (JJ[AJ] = ZJ.getCameraById(YJ));
                break;
              case 12:
                JJ[AJ] = XJ.b.FromArray(YJ);
                break;
              case 13:
                JJ[AJ] = XJ.k.FromArray(YJ)
            }
          }
        }
      }
      static Parse(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const eJ = JJ();
        return UJ.b && UJ.b.AddTagsTo(eJ, cJ.tags), jJ.ParseProperties(cJ, eJ, ZJ, FJ), eJ
      }
      static Clone(JJ, cJ) {
        return qJ(JJ, cJ, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(JJ, cJ) {
        return qJ(JJ, cJ, !0)
      }
    }
    jJ.AllowLoadingUniqueId = !1, jJ._ImageProcessingConfigurationParser = JJ => {
      throw (0, FJ.m)("ImageProcessingConfiguration")
    }, jJ._FresnelParametersParser = JJ => {
      throw (0, FJ.m)("FresnelParameters")
    }, jJ._ColorCurvesParser = JJ => {
      throw (0, FJ.m)("ColorCurves")
    }, jJ._TextureParser = (JJ, cJ, ZJ) => {
      throw (0, FJ.m)("Texture")
    }
  },
  38748: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = ZJ(38700);
    class UJ {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = UJ.Enabled, this._lastSecValueCount++
      }
      addCount(JJ, cJ) {
        UJ.Enabled && (this._current += JJ, this._hasCurrentValue = !0, cJ && this._fetchResult())
      }
      beginMonitoring() {
        UJ.Enabled && (this._startMonitoringTime = FJ.c.Now)
      }
      endMonitoring() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!UJ.Enabled) return;
        JJ && this.fetchNewFrame();
        const cJ = FJ.c.Now;
        this._current = cJ - this._startMonitoringTime, this._hasCurrentValue = !0, JJ && this._fetchResult()
      }
      WE() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const JJ = FJ.c.Now;
        JJ - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = JJ, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    UJ.Enabled = !0
  },
  38890: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      c: () => FJ
    });
    class FJ {
      constructor(JJ) {
        this.length = 0, this.data = new Array(JJ), this._id = FJ._GlobalId++
      }
      push(JJ) {
        this.data[this.length++] = JJ, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(JJ) {
        for (let cJ = 0; cJ < this.length; cJ++) JJ(this.data[cJ])
      }
      sort(JJ) {
        this.data.sort(JJ)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(JJ) {
        if (0 !== JJ.length) {
          this.length + JJ.length > this.data.length && (this.data.length = 2 * (this.length + JJ.length));
          for (let cJ = 0; cJ < JJ.length; cJ++) this.data[this.length++] = (JJ.data || JJ)[cJ]
        }
      }
      indexOf(JJ) {
        const cJ = this.data.indexOf(JJ);
        return cJ >= this.length ? -1 : cJ
      }
      contains(JJ) {
        return -1 !== this.indexOf(JJ)
      }
    }
    FJ._GlobalId = 0;
    class UJ extends FJ {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(JJ) {
        super.push(JJ), JJ.__smartArrayFlags || (JJ.__smartArrayFlags = {}), JJ.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(JJ) {
        return (!JJ.__smartArrayFlags || JJ.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(JJ), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(JJ) {
        if (0 !== JJ.length) {
          this.length + JJ.length > this.data.length && (this.data.length = 2 * (this.length + JJ.length));
          for (let cJ = 0; cJ < JJ.length; cJ++) {
            const ZJ = (JJ.data || JJ)[cJ];
            this.pushNoDuplicate(ZJ)
          }
        }
      }
    }
  },
  38825: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    class FJ {
      static Eval(JJ, cJ) {
        return "true" === (JJ = JJ.match(/\([^()]*\)/g) ? JJ.replace(/\([^()]*\)/g, (JJ => (JJ = JJ.slice(1, JJ.length - 1), FJ._HandleParenthesisContent(JJ, cJ)))) : FJ._HandleParenthesisContent(JJ, cJ)) || "false" !== JJ && FJ.Eval(JJ, cJ)
      }
      static _HandleParenthesisContent(JJ, cJ) {
        let ZJ;
        cJ = cJ || (JJ => "true" === JJ);
        const UJ = JJ.split("||");
        for (const eJ in UJ)
          if (Object.prototype.hasOwnProperty.call(UJ, eJ)) {
            let JJ = FJ._SimplifyNegation(UJ[eJ].trim());
            const XJ = JJ.split("&&");
            if (XJ.length > 1)
              for (let UJ = 0; UJ < XJ.length; ++UJ) {
                const eJ = FJ._SimplifyNegation(XJ[UJ].trim());
                if (ZJ = "true" !== eJ && "false" !== eJ ? "!" === eJ[0] ? !cJ(eJ.substring(1)) : cJ(eJ) : "true" === eJ, !ZJ) {
                  JJ = "false";
                  break
                }
              }
            if (ZJ || "true" === JJ) {
              ZJ = !0;
              break
            }
            ZJ = "true" !== JJ && "false" !== JJ ? "!" === JJ[0] ? !cJ(JJ.substring(1)) : cJ(JJ) : "true" === JJ
          } return ZJ ? "true" : "false"
      }
      static _SimplifyNegation(JJ) {
        return "!true" === (JJ = (JJ = JJ.replace(/^[\s!]+/, (JJ => (JJ = JJ.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? JJ = "false" : "!false" === JJ && (JJ = "true"), JJ
      }
    }
    class UJ {
      static EnableFor(JJ) {
        JJ._tags = JJ._tags || {}, JJ.hasTags = () => UJ.HasTags(JJ), JJ.addTags = cJ => UJ.AddTagsTo(JJ, cJ), JJ.removeTags = cJ => UJ.RemoveTagsFrom(JJ, cJ), JJ.matchesTagsQuery = cJ => UJ.MatchesQuery(JJ, cJ)
      }
      static DisableFor(JJ) {
        delete JJ._tags, delete JJ.hasTags, delete JJ.addTags, delete JJ.removeTags, delete JJ.matchesTagsQuery
      }
      static HasTags(JJ) {
        if (!JJ._tags) return !1;
        const cJ = JJ._tags;
        for (const ZJ in cJ)
          if (Object.prototype.hasOwnProperty.call(cJ, ZJ)) return !0;
        return !1
      }
      static GetTags(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!JJ._tags) return null;
        if (cJ) {
          const cJ = [];
          for (const ZJ in JJ._tags) Object.prototype.hasOwnProperty.call(JJ._tags, ZJ) && !0 === JJ._tags[ZJ] && cJ.push(ZJ);
          return cJ.join(" ")
        }
        return JJ._tags
      }
      static AddTagsTo(JJ, cJ) {
        if (!cJ) return;
        if ("string" !== typeof cJ) return;
        const ZJ = cJ.split(" ");
        for (const FJ of ZJ) UJ._AddTagTo(JJ, FJ)
      }
      static _AddTagTo(JJ, cJ) {
        "" !== (cJ = cJ.trim()) && "true" !== cJ && "false" !== cJ && (cJ.match(/[\s]/) || cJ.match(/^([!]|([|]|[&]){2})/) || (UJ.EnableFor(JJ), JJ._tags[cJ] = !0))
      }
      static RemoveTagsFrom(JJ, cJ) {
        if (!UJ.HasTags(JJ)) return;
        const ZJ = cJ.split(" ");
        for (const FJ in ZJ) UJ._RemoveTagFrom(JJ, ZJ[FJ])
      }
      static _RemoveTagFrom(JJ, cJ) {
        delete JJ._tags[cJ]
      }
      static MatchesQuery(JJ, cJ) {
        return void 0 === cJ || ("" === cJ ? UJ.HasTags(JJ) : FJ.Eval(cJ, (cJ => UJ.HasTags(JJ) && JJ._tags[cJ])))
      }
    }
  },
  38924: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(38918),
      UJ = ZJ(36200);
    class eJ {
      constructor(JJ) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new UJ.c, this._scene = JJ
      }
      _prepareBuffers() {
        if (this._vertexBuffers[FJ.n.PositionKind]) return;
        const JJ = [];
        JJ.push(1, 1), JJ.push(-1, 1), JJ.push(-1, -1), JJ.push(1, -1), this._vertexBuffers[FJ.n.PositionKind] = new FJ.n(this._scene.gn(), JJ, FJ.n.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const JJ = [];
        JJ.push(0), JJ.push(1), JJ.push(2), JJ.push(0), JJ.push(2), JJ.push(3), this._indexBuffer = this._scene.gn().createIndexBuffer(JJ)
      }
      _getActivePostProcesses(JJ) {
        const cJ = this._activePostProcesses;
        cJ.length = 0;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
          const FJ = JJ[ZJ];
          FJ && cJ.push(FJ)
        }
        return cJ
      }
      _rebuild() {
        const JJ = this._vertexBuffers[FJ.n.PositionKind];
        JJ && (JJ._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = this._scene.activeCamera;
        return !!ZJ && (cJ = cJ || this._getActivePostProcesses(ZJ._postProcesses), !(!cJ || 0 === cJ.length || !this._scene.postProcessesEnabled) && (cJ[0].activate(ZJ, JJ, null !== cJ && void 0 !== cJ), !0))
      }
      directRender(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : JJ.length;
        const AJ = this._scene.gn();
        for (let qJ = 0; qJ < XJ; qJ++) {
          qJ < JJ.length - 1 ? JJ[qJ + 1].activate(this._scene.activeCamera || this._scene, cJ?.texture) : (cJ ? AJ.bindFramebuffer(cJ, FJ, void 0, void 0, ZJ, UJ) : eJ || AJ.restoreDefaultFramebuffer(), AJ._debugInsertMarker?.(`post process ${JJ[qJ].name} output`));
          const XJ = JJ[qJ],
            jJ = XJ.apply();
          jJ && (XJ.onBeforeRenderObservable.notifyObservers(jJ), this._prepareBuffers(), AJ.bindBuffers(this._vertexBuffers, this._indexBuffer, jJ), AJ.drawElementsType(0, 0, 6), XJ.onAfterRenderObservable.notifyObservers(jJ))
        }
        AJ.setDepthBuffer(!0), AJ.setDepthWrite(!0)
      }
      _finalizeFrame(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const eJ = this._scene.activeCamera;
        if (!eJ) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (FJ = FJ || this._getActivePostProcesses(eJ._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const XJ = this._scene.gn();
        for (let AJ = 0, qJ = FJ.length; AJ < qJ; AJ++) {
          const jJ = FJ[AJ];
          if (AJ < qJ - 1 ? jJ._outputTexture = FJ[AJ + 1].activate(eJ, cJ?.texture) : (cJ ? (XJ.bindFramebuffer(cJ, ZJ, void 0, void 0, UJ), jJ._outputTexture = cJ) : (XJ.restoreDefaultFramebuffer(), jJ._outputTexture = null), XJ._debugInsertMarker?.(`post process ${FJ[AJ].name} output`)), JJ) break;
          const YJ = jJ.apply();
          YJ && (jJ.onBeforeRenderObservable.notifyObservers(YJ), this._prepareBuffers(), XJ.bindBuffers(this._vertexBuffers, this._indexBuffer, YJ), XJ.drawElementsType(0, 0, 6), jJ.onAfterRenderObservable.notifyObservers(YJ))
        }
        XJ.setDepthBuffer(!0), XJ.setDepthWrite(!0), XJ.setAlphaMode(0)
      }
      dispose() {
        const JJ = this._vertexBuffers[FJ.n.PositionKind];
        JJ && (JJ.dispose(), this._vertexBuffers[FJ.n.PositionKind] = null), this._indexBuffer && (this._scene.gn()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  38931: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(38890),
      UJ = ZJ(36174);
    class eJ {
      set opaqueSortCompareFn(JJ) {
        this._opaqueSortCompareFn = JJ || eJ.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(JJ) {
        this._alphaTestSortCompareFn = JJ || eJ.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(JJ) {
        this._transparentSortCompareFn = JJ || eJ.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = JJ, this._opaqueSubMeshes = new FJ.c(256), this._transparentSubMeshes = new FJ.c(256), this._alphaTestSubMeshes = new FJ.c(256), this._depthOnlySubMeshes = new FJ.c(256), this._particleSystems = new FJ.c(256), this._spriteManagers = new FJ.c(256), this._empty = !0, this._edgesRenderers = new FJ.b(16), this.disableDepthPrePass = !1, this._scene = cJ, this.opaqueSortCompareFn = ZJ, this.alphaTestSortCompareFn = UJ, this.transparentSortCompareFn = eJ
      }
      render(JJ, cJ, ZJ, FJ) {
        let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          AJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qJ = arguments.length > 8 ? arguments[8] : void 0;
        if (JJ) return void JJ(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const jJ = this._scene.gn();
        UJ && 0 !== this._depthOnlySubMeshes.length && (jJ.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), jJ.setColorWrite(!0)), eJ && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), XJ && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const YJ = jJ.getStencilBuffer();
        if (jJ.setStencilBuffer(!1), cJ && this._renderSprites(), ZJ && this._renderParticles(FJ), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), AJ && (qJ || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (jJ.setStencilBuffer(YJ), qJ) qJ(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const JJ = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            JJ.length && this._renderTransparent(JJ)
          } else this._renderTransparent(this._transparentSubMeshes);
          jJ.setAlphaMode(0)
        }
        if (jJ.setStencilBuffer(!1), eJ && this._edgesRenderers.length) {
          for (let JJ = 0; JJ < this._edgesRenderers.length; JJ++) this._edgesRenderers.data[JJ].render();
          jJ.setAlphaMode(0)
        }
        jJ.setStencilBuffer(YJ)
      }
      _renderOpaqueSorted(JJ) {
        eJ._RenderSorted(JJ, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(JJ) {
        eJ._RenderSorted(JJ, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(JJ) {
        eJ._RenderSorted(JJ, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(JJ, cJ, ZJ, FJ, XJ) {
        let AJ, qJ = 0;
        const jJ = ZJ ? ZJ.globalPosition : eJ._ZeroVector;
        if (FJ && cJ !== eJ.PainterSortCompare)
          for (; qJ < JJ.length; qJ++) AJ = JJ.data[qJ], AJ._alphaIndex = AJ.getMesh().alphaIndex, AJ._distanceToCamera = UJ.j.Distance(AJ.rM().QFJ.centerWorld, jJ);
        const YJ = JJ.length === JJ.data.length ? JJ.data : JJ.data.slice(0, JJ.length);
        cJ && YJ.sort(cJ);
        const hJ = YJ[0].getMesh().Qy();
        for (qJ = 0; qJ < YJ.length; qJ++) {
          if (AJ = YJ[qJ], hJ._activeMeshesFrozenButKeepClipping && !AJ.isInFrustum(hJ._frustumPlanes)) continue;
          let JJ = !1;
          if (FJ) {
            const cJ = AJ.dn();
            if (cJ && cJ.needDepthPrePass && !XJ) {
              JJ = !0;
              const ZJ = cJ.Qy().gn();
              ZJ.setColorWrite(!1), ZJ.setAlphaMode(0), AJ.render(!1), ZJ.setColorWrite(!0)
            }
          }
          const cJ = AJ._renderingMesh;
          !JJ && cJ._renderRunFollower(AJ, FJ) || AJ.render(FJ)
        }
      }
      static defaultTransparentSortCompare(JJ, cJ) {
        return JJ._alphaIndex > cJ._alphaIndex ? 1 : JJ._alphaIndex < cJ._alphaIndex ? -1 : eJ.backToFrontSortCompare(JJ, cJ)
      }
      static backToFrontSortCompare(JJ, cJ) {
        return JJ._distanceToCamera < cJ._distanceToCamera ? 1 : JJ._distanceToCamera > cJ._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(JJ, cJ) {
        return JJ._distanceToCamera < cJ._distanceToCamera ? -1 : JJ._distanceToCamera > cJ._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(JJ, cJ) {
        const ZJ = JJ.getMesh(),
          FJ = cJ.getMesh();
        return ZJ.material && FJ.material ? ZJ.material.uniqueId - FJ.material.uniqueId : ZJ.uniqueId - FJ.uniqueId
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
      dispatch(JJ, cJ, ZJ) {
        void 0 === cJ && (cJ = JJ.getMesh()), void 0 === ZJ && (ZJ = JJ.dn()), null !== ZJ && void 0 !== ZJ && (ZJ.needAlphaBlendingForMesh(cJ) ? this._transparentSubMeshes.push(JJ) : ZJ.needAlphaTestingForMesh(cJ) ? (ZJ.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(JJ), this._alphaTestSubMeshes.push(JJ)) : (ZJ.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(JJ), this._opaqueSubMeshes.push(JJ)), cJ._renderingGroup = this, cJ._edgesRenderer && cJ.isEnabled() && cJ.isVisible && cJ._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(cJ._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(JJ) {
        this._spriteManagers.push(JJ), this._empty = !1
      }
      dispatchParticles(JJ) {
        this._particleSystems.push(JJ), this._empty = !1
      }
      _renderParticles(JJ) {
        if (0 === this._particleSystems.length) return;
        const cJ = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let ZJ = 0; ZJ < this._particleSystems.length; ZJ++) {
          const FJ = this._particleSystems.data[ZJ];
          if (0 === (cJ && cJ.layerMask & FJ.layerMask)) continue;
          const UJ = FJ.emitter;
          UJ.position && JJ && -1 === JJ.indexOf(UJ) || this._scene._activeParticles.addCount(FJ.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const JJ = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let cJ = 0; cJ < this._spriteManagers.length; cJ++) {
          const ZJ = this._spriteManagers.data[cJ];
          0 !== (JJ && JJ.layerMask & ZJ.layerMask) && ZJ.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    eJ._ZeroVector = UJ.j.Zero()
  },
  38929: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(38931);
    class UJ {}
    class eJ {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(JJ) {
        this._disableDepthPrePass = JJ;
        for (const cJ of this._renderingGroups) cJ.disableDepthPrePass = JJ
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(JJ) {
        JJ !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = JJ, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const JJ of this._scene.meshes)
          if (JJ.aE)
            for (const cJ of JJ.aE) cJ._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const JJ of this._scene.spriteManagers) JJ._wasDispatched = !1;
        for (const JJ of this._scene.lE) JJ._wasDispatched = !1
      }
      constructor(JJ) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new UJ, this._maintainStateBetweenFrames = !1, this._scene = JJ;
        for (let cJ = eJ.MIN_RENDERINGGROUPS; cJ < eJ.MAX_RENDERINGGROUPS; cJ++) this._autoClearDepthStencil[cJ] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(JJ) {
        const cJ = JJ || 0;
        return this._prepareRenderingGroup(cJ), this._renderingGroups[cJ]
      }
      _clearDepthStencilBuffer() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.gn().clear(null, !1, JJ, cJ), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(JJ, cJ, ZJ, FJ) {
        let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          jJ = arguments.length > 8 ? arguments[8] : void 0,
          YJ = arguments.length > 9 ? arguments[9] : void 0;
        const hJ = this._renderingGroupInfo;
        hJ.iG = this._scene, hJ.camera = this._scene.activeCamera, hJ.renderingManager = this;
        const DJ = YJ ?? this._scene.spriteManagers;
        if (DJ && FJ)
          for (let eJ = 0; eJ < DJ.length; eJ++) {
            const JJ = DJ[eJ];
            this.dispatchSprites(JJ)
          }
        for (let sJ = eJ.MIN_RENDERINGGROUPS; sJ < eJ.MAX_RENDERINGGROUPS; sJ++) {
          this._depthStencilBufferAlreadyCleaned = sJ === eJ.MIN_RENDERINGGROUPS;
          const YJ = this._renderingGroups[sJ];
          if (!YJ || YJ._empty) continue;
          const DJ = 1 << sJ;
          if (hJ.renderingGroupId = sJ, this._scene.onBeforeRenderingGroupObservable.notifyObservers(hJ, DJ), eJ.AUTOCLEAR) {
            const JJ = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(sJ) : this._autoClearDepthStencil[sJ];
            JJ && JJ.autoClear && this._clearDepthStencilBuffer(JJ.depth, JJ.stencil)
          }
          for (let JJ = 0, cJ = this._scene._beforeRenderingGroupDrawStage; JJ < cJ.length; JJ++) {
            cJ[JJ].action(sJ)
          }
          YJ.render(JJ, FJ, ZJ, cJ, UJ, XJ, AJ, qJ, jJ);
          for (let JJ = 0, cJ = this._scene._afterRenderingGroupDrawStage; JJ < cJ.length; JJ++) {
            cJ[JJ].action(sJ)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(hJ, DJ)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let JJ = eJ.MIN_RENDERINGGROUPS; JJ < eJ.MAX_RENDERINGGROUPS; JJ++) {
            const cJ = this._renderingGroups[JJ];
            cJ && cJ.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let JJ = eJ.MIN_RENDERINGGROUPS; JJ < eJ.MAX_RENDERINGGROUPS; JJ++) {
            const cJ = this._renderingGroups[JJ];
            cJ && cJ.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let JJ = eJ.MIN_RENDERINGGROUPS; JJ < eJ.MAX_RENDERINGGROUPS; JJ++) {
          const cJ = this._renderingGroups[JJ];
          cJ && cJ.dispose()
        }
      }
      _prepareRenderingGroup(JJ) {
        void 0 === this._renderingGroups[JJ] && (this._renderingGroups[JJ] = new FJ.c(JJ, this._scene, this._customOpaqueSortCompareFn[JJ], this._customAlphaTestSortCompareFn[JJ], this._customTransparentSortCompareFn[JJ]), this._renderingGroups[JJ].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(JJ) {
        this.maintainStateBetweenFrames && JJ._wasDispatched || (JJ._wasDispatched = !0, this.getRenderingGroup(JJ.renderingGroupId).dispatchSprites(JJ))
      }
      dispatchParticles(JJ) {
        this.maintainStateBetweenFrames && JJ._wasDispatched || (JJ._wasDispatched = !0, this.getRenderingGroup(JJ.renderingGroupId).dispatchParticles(JJ))
      }
      dispatch(JJ, cJ, ZJ) {
        void 0 === cJ && (cJ = JJ.getMesh()), this.maintainStateBetweenFrames && JJ._wasDispatched || (JJ._wasDispatched = !0, this.getRenderingGroup(cJ.renderingGroupId).dispatch(JJ, cJ, ZJ))
      }
      setRenderingOrder(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[JJ] = cJ, this._customAlphaTestSortCompareFn[JJ] = ZJ, this._customTransparentSortCompareFn[JJ] = FJ, this._renderingGroups[JJ]) {
          const cJ = this._renderingGroups[JJ];
          cJ.opaqueSortCompareFn = this._customOpaqueSortCompareFn[JJ], cJ.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[JJ], cJ.transparentSortCompareFn = this._customTransparentSortCompareFn[JJ]
        }
      }
      setRenderingAutoClearDepthStencil(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[JJ] = {
          autoClear: cJ,
          depth: ZJ,
          stencil: FJ
        }
      }
      getAutoClearDepthStencilSetup(JJ) {
        return this._autoClearDepthStencil[JJ]
      }
    }
    eJ.MAX_RENDERINGGROUPS = 4, eJ.MIN_RENDERINGGROUPS = 0, eJ.AUTOCLEAR = !0
  },
  38709: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ) {
        this._supportBlendParametersPerTarget = JJ, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(JJ) {
        this.setAlphaBlend(JJ)
      }
      setAlphaBlend(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[cJ] !== JJ && (JJ ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[cJ] = JJ, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(JJ, cJ, ZJ, FJ) {
        this._blendConstants[0] === JJ && this._blendConstants[1] === cJ && this._blendConstants[2] === ZJ && this._blendConstants[3] === FJ || (this._blendConstants[0] = JJ, this._blendConstants[1] = cJ, this._blendConstants[2] = ZJ, this._blendConstants[3] = FJ, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(JJ, cJ, ZJ, FJ) {
        const UJ = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[UJ + 0] === JJ && this._blendFunctionParameters[UJ + 1] === cJ && this._blendFunctionParameters[UJ + 2] === ZJ && this._blendFunctionParameters[UJ + 3] === FJ || (this._blendFunctionParameters[UJ + 0] = JJ, this._blendFunctionParameters[UJ + 1] = cJ, this._blendFunctionParameters[UJ + 2] = ZJ, this._blendFunctionParameters[UJ + 3] = FJ, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(JJ, cJ) {
        const ZJ = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[ZJ + 0] === JJ && this._blendEquationParameters[ZJ + 1] === cJ || (this._blendEquationParameters[ZJ + 0] = JJ, this._blendEquationParameters[ZJ + 1] = cJ, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== cJ && (this._numTargets = cJ, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== ZJ && (this._blendDisabledTargetsMask = ZJ, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (JJ.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === cJ || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (cJ > 1 && 0 !== ZJ && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & ZJ) ? JJ.enable(JJ.BLEND) : JJ.disable(JJ.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (JJ.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (JJ.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const FJ = JJ;
        if (this._isAlphaBlendDirty) {
          for (let UJ = 0; UJ < cJ; UJ++) {
            const cJ = UJ < this._numTargetEnabled ? UJ : 0;
            this._alphaBlend[cJ] && 0 === (ZJ & 1 << UJ) ? FJ.enableIndexed(JJ.BLEND, UJ) : FJ.disableIndexed(JJ.BLEND, UJ)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let JJ = 0; JJ < cJ; JJ++) {
            const cJ = JJ < this._numTargetEnabled ? 4 * JJ : 0;
            FJ.blendFuncSeparateIndexed(JJ, this._blendFunctionParameters[cJ + 0], this._blendFunctionParameters[cJ + 1], this._blendFunctionParameters[cJ + 2], this._blendFunctionParameters[cJ + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let JJ = 0; JJ < cJ; JJ++) {
            const cJ = JJ < this._numTargetEnabled ? 2 * JJ : 0;
            FJ.blendEquationSeparateIndexed(JJ, this._blendEquationParameters[cJ + 0], this._blendEquationParameters[cJ + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(JJ, cJ) {
        let ZJ = 32774;
        switch (JJ) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, cJ);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, cJ);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, cJ);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, cJ);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, cJ);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, cJ);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, cJ);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, cJ);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, cJ);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, cJ);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, cJ);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, cJ);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, cJ);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, cJ);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, cJ);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, cJ);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, cJ), ZJ = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, cJ), ZJ = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, cJ);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, cJ)
        }
        this.setAlphaEquationParameters(ZJ, ZJ, cJ)
      }
    }
  },
  38960: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {}
    FJ._IsPickingAvailable = !1
  },
  38874: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AZ,
      e: () => eZ
    });
    var FJ = ZJ(38879),
      UJ = ZJ(38689),
      eJ = ZJ(38700),
      XJ = ZJ(36200),
      AJ = ZJ(38890);
    class qJ {
      constructor() {
        this._count = 0, this._data = {}
      }
      rZJ(JJ) {
        this.clear(), JJ.forEach(((JJ, cJ) => this.add(JJ, cJ)))
      }
      get(JJ) {
        const cJ = this._data[JJ];
        if (void 0 !== cJ) return cJ
      }
      getOrAddWithFactory(JJ, cJ) {
        let ZJ = this.get(JJ);
        return void 0 !== ZJ || (ZJ = cJ(JJ), ZJ && this.add(JJ, ZJ)), ZJ
      }
      getOrAdd(JJ, cJ) {
        const ZJ = this.get(JJ);
        return void 0 !== ZJ ? ZJ : (this.add(JJ, cJ), cJ)
      }
      contains(JJ) {
        return void 0 !== this._data[JJ]
      }
      add(JJ, cJ) {
        return void 0 === this._data[JJ] && (this._data[JJ] = cJ, ++this._count, !0)
      }
      set(JJ, cJ) {
        return void 0 !== this._data[JJ] && (this._data[JJ] = cJ, !0)
      }
      getAndRemove(JJ) {
        const cJ = this.get(JJ);
        return void 0 !== cJ ? (delete this._data[JJ], --this._count, cJ) : null
      }
      remove(JJ) {
        return !!this.contains(JJ) && (delete this._data[JJ], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(JJ) {
        for (const cJ in this._data) {
          JJ(cJ, this._data[cJ])
        }
      }
      first(JJ) {
        for (const cJ in this._data) {
          const ZJ = JJ(cJ, this._data[cJ]);
          if (ZJ) return ZJ
        }
        return null
      }
    }
    var jJ = ZJ(38825),
      YJ = ZJ(36174),
      hJ = ZJ(38892),
      DJ = ZJ(38907),
      sJ = ZJ(38910);
    class nJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.source = JJ, this.pointerX = cJ, this.pointerY = ZJ, this.meshUnderPointer = FJ, this.sourceEvent = UJ, this.additionalData = eJ
      }
      static CreateNew(JJ, cJ, ZJ) {
        const FJ = JJ.Qy();
        return new nJ(JJ, FJ.pointerX, FJ.pointerY, FJ.meshUnderPointer || JJ, cJ, ZJ)
      }
      static CreateNewFromSprite(JJ, cJ, ZJ, FJ) {
        return new nJ(JJ, cJ.pointerX, cJ.pointerY, cJ.meshUnderPointer, ZJ, FJ)
      }
      static CreateNewFromScene(JJ, cJ) {
        return new nJ(null, JJ.pointerX, JJ.pointerY, JJ.meshUnderPointer, cJ)
      }
      static CreateNewFromPrimitive(JJ, cJ, ZJ, FJ) {
        return new nJ(JJ, cJ.x, cJ.y, null, ZJ, FJ)
      }
    }
    var GJ = ZJ(38924),
      fJ = ZJ(38927),
      xJ = ZJ(38929),
      rJ = ZJ(38933),
      vJ = ZJ(38663),
      mJ = ZJ(36192),
      QJ = ZJ(38677),
      EJ = ZJ(38938);
    class VJ {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const JJ in VJ.Triggers)
          if (Object.prototype.hasOwnProperty.call(VJ.Triggers, JJ)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const JJ in VJ.Triggers)
          if (Object.prototype.hasOwnProperty.call(VJ.Triggers, JJ)) {
            const cJ = parseInt(JJ);
            if (cJ >= 1 && cJ <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(JJ) {
        for (const cJ in VJ.Triggers)
          if (Object.prototype.hasOwnProperty.call(VJ.Triggers, cJ)) {
            if (parseInt(cJ) === JJ) return !0
          } return !1
      }
    }
    VJ.Triggers = {};
    var KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ = ZJ(38946);
    ! function(JJ) {
      JJ[JJ.Generic = 0] = "Generic", JJ[JJ.Keyboard = 1] = "Keyboard", JJ[JJ.Mouse = 2] = "Mouse", JJ[JJ.Touch = 3] = "Touch", JJ[JJ.DualShock = 4] = "DualShock", JJ[JJ.Xbox = 5] = "Xbox", JJ[JJ.Switch = 6] = "Switch", JJ[JJ.DualSense = 7] = "DualSense"
    }(KJ || (KJ = {})),
    function(JJ) {
      JJ[JJ.Horizontal = 0] = "Horizontal", JJ[JJ.Vertical = 1] = "Vertical", JJ[JJ.LeftClick = 2] = "LeftClick", JJ[JJ.MiddleClick = 3] = "MiddleClick", JJ[JJ.RightClick = 4] = "RightClick", JJ[JJ.BrowserBack = 5] = "BrowserBack", JJ[JJ.BrowserForward = 6] = "BrowserForward", JJ[JJ.MouseWheelX = 7] = "MouseWheelX", JJ[JJ.MouseWheelY = 8] = "MouseWheelY", JJ[JJ.MouseWheelZ = 9] = "MouseWheelZ", JJ[JJ.Move = 12] = "Move"
    }(yJ || (yJ = {})),
    function(JJ) {
      JJ[JJ.Horizontal = 0] = "Horizontal", JJ[JJ.Vertical = 1] = "Vertical", JJ[JJ.LeftClick = 2] = "LeftClick", JJ[JJ.MiddleClick = 3] = "MiddleClick", JJ[JJ.RightClick = 4] = "RightClick", JJ[JJ.BrowserBack = 5] = "BrowserBack", JJ[JJ.BrowserForward = 6] = "BrowserForward", JJ[JJ.MouseWheelX = 7] = "MouseWheelX", JJ[JJ.MouseWheelY = 8] = "MouseWheelY", JJ[JJ.MouseWheelZ = 9] = "MouseWheelZ", JJ[JJ.DeltaHorizontal = 10] = "DeltaHorizontal", JJ[JJ.DeltaVertical = 11] = "DeltaVertical"
    }(SJ || (SJ = {})),
    function(JJ) {
      JJ[JJ.Cross = 0] = "Cross", JJ[JJ.Circle = 1] = "Circle", JJ[JJ.Square = 2] = "Square", JJ[JJ.Triangle = 3] = "Triangle", JJ[JJ.L1 = 4] = "L1", JJ[JJ.R1 = 5] = "R1", JJ[JJ.L2 = 6] = "L2", JJ[JJ.R2 = 7] = "R2", JJ[JJ.Share = 8] = "Share", JJ[JJ.Options = 9] = "Options", JJ[JJ.L3 = 10] = "L3", JJ[JJ.R3 = 11] = "R3", JJ[JJ.DPadUp = 12] = "DPadUp", JJ[JJ.DPadDown = 13] = "DPadDown", JJ[JJ.DPadLeft = 14] = "DPadLeft", JJ[JJ.DPadRight = 15] = "DPadRight", JJ[JJ.Home = 16] = "Home", JJ[JJ.TouchPad = 17] = "TouchPad", JJ[JJ.LStickXAxis = 18] = "LStickXAxis", JJ[JJ.LStickYAxis = 19] = "LStickYAxis", JJ[JJ.RStickXAxis = 20] = "RStickXAxis", JJ[JJ.RStickYAxis = 21] = "RStickYAxis"
    }(IJ || (IJ = {})),
    function(JJ) {
      JJ[JJ.Cross = 0] = "Cross", JJ[JJ.Circle = 1] = "Circle", JJ[JJ.Square = 2] = "Square", JJ[JJ.Triangle = 3] = "Triangle", JJ[JJ.L1 = 4] = "L1", JJ[JJ.R1 = 5] = "R1", JJ[JJ.L2 = 6] = "L2", JJ[JJ.R2 = 7] = "R2", JJ[JJ.Create = 8] = "Create", JJ[JJ.Options = 9] = "Options", JJ[JJ.L3 = 10] = "L3", JJ[JJ.R3 = 11] = "R3", JJ[JJ.DPadUp = 12] = "DPadUp", JJ[JJ.DPadDown = 13] = "DPadDown", JJ[JJ.DPadLeft = 14] = "DPadLeft", JJ[JJ.DPadRight = 15] = "DPadRight", JJ[JJ.Home = 16] = "Home", JJ[JJ.TouchPad = 17] = "TouchPad", JJ[JJ.LStickXAxis = 18] = "LStickXAxis", JJ[JJ.LStickYAxis = 19] = "LStickYAxis", JJ[JJ.RStickXAxis = 20] = "RStickXAxis", JJ[JJ.RStickYAxis = 21] = "RStickYAxis"
    }(MJ || (MJ = {})),
    function(JJ) {
      JJ[JJ.A = 0] = "A", JJ[JJ.B = 1] = "B", JJ[JJ.X = 2] = "X", JJ[JJ.Y = 3] = "Y", JJ[JJ.LB = 4] = "LB", JJ[JJ.RB = 5] = "RB", JJ[JJ.LT = 6] = "LT", JJ[JJ.RT = 7] = "RT", JJ[JJ.Back = 8] = "Back", JJ[JJ.Start = 9] = "Start", JJ[JJ.LS = 10] = "LS", JJ[JJ.RS = 11] = "RS", JJ[JJ.DPadUp = 12] = "DPadUp", JJ[JJ.DPadDown = 13] = "DPadDown", JJ[JJ.DPadLeft = 14] = "DPadLeft", JJ[JJ.DPadRight = 15] = "DPadRight", JJ[JJ.Home = 16] = "Home", JJ[JJ.LStickXAxis = 17] = "LStickXAxis", JJ[JJ.LStickYAxis = 18] = "LStickYAxis", JJ[JJ.RStickXAxis = 19] = "RStickXAxis", JJ[JJ.RStickYAxis = 20] = "RStickYAxis"
    }(bJ || (bJ = {})),
    function(JJ) {
      JJ[JJ.B = 0] = "B", JJ[JJ.A = 1] = "A", JJ[JJ.Y = 2] = "Y", JJ[JJ.X = 3] = "X", JJ[JJ.L = 4] = "L", JJ[JJ.R = 5] = "R", JJ[JJ.ZL = 6] = "ZL", JJ[JJ.ZR = 7] = "ZR", JJ[JJ.Minus = 8] = "Minus", JJ[JJ.Plus = 9] = "Plus", JJ[JJ.LS = 10] = "LS", JJ[JJ.RS = 11] = "RS", JJ[JJ.DPadUp = 12] = "DPadUp", JJ[JJ.DPadDown = 13] = "DPadDown", JJ[JJ.DPadLeft = 14] = "DPadLeft", JJ[JJ.DPadRight = 15] = "DPadRight", JJ[JJ.Home = 16] = "Home", JJ[JJ.Capture = 17] = "Capture", JJ[JJ.LStickXAxis = 18] = "LStickXAxis", JJ[JJ.LStickYAxis = 19] = "LStickYAxis", JJ[JJ.RStickXAxis = 20] = "RStickXAxis", JJ[JJ.RStickYAxis = 21] = "RStickYAxis"
    }(wJ || (wJ = {}));
    var gJ = ZJ(38953);
    class HJ {
      static CreateDeviceEvent(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        switch (JJ) {
          case KJ.Keyboard:
            return this._CreateKeyboardEvent(ZJ, FJ, UJ, eJ);
          case KJ.Mouse:
            if (ZJ === yJ.MouseWheelX || ZJ === yJ.MouseWheelY || ZJ === yJ.MouseWheelZ) return this._CreateWheelEvent(JJ, cJ, ZJ, FJ, UJ, eJ);
          case KJ.Touch:
            return this._CreatePointerEvent(JJ, cJ, ZJ, FJ, UJ, eJ, XJ);
          default:
            throw `Unable to generate event for device ${KJ[JJ]}`
        }
      }
      static _CreatePointerEvent(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = this._CreateMouseEvent(JJ, cJ, ZJ, FJ, UJ, eJ);
        JJ === KJ.Mouse ? (AJ.deviceType = KJ.Mouse, AJ.pointerId = 1, AJ.pointerType = "mouse") : (AJ.deviceType = KJ.Touch, AJ.pointerId = XJ ?? cJ, AJ.pointerType = "touch");
        let qJ = 0;
        return qJ += UJ.pollInput(JJ, cJ, yJ.LeftClick), qJ += 2 * UJ.pollInput(JJ, cJ, yJ.RightClick), qJ += 4 * UJ.pollInput(JJ, cJ, yJ.MiddleClick), AJ.buttons = qJ, ZJ === yJ.Move ? AJ.type = "pointermove" : ZJ >= yJ.LeftClick && ZJ <= yJ.RightClick && (AJ.type = 1 === FJ ? "pointerdown" : "pointerup", AJ.button = ZJ - 2), AJ
      }
      static _CreateWheelEvent(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = this._CreateMouseEvent(JJ, cJ, ZJ, FJ, UJ, eJ);
        switch (XJ.pointerId = 1, XJ.type = "wheel", XJ.deltaMode = gJ.d.DOM_DELTA_PIXEL, XJ.deltaX = 0, XJ.deltaY = 0, XJ.deltaZ = 0, ZJ) {
          case yJ.MouseWheelX:
            XJ.deltaX = FJ;
            break;
          case yJ.MouseWheelY:
            XJ.deltaY = FJ;
            break;
          case yJ.MouseWheelZ:
            XJ.deltaZ = FJ
        }
        return XJ
      }
      static _CreateMouseEvent(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = this._CreateEvent(eJ),
          AJ = UJ.pollInput(JJ, cJ, yJ.Horizontal),
          qJ = UJ.pollInput(JJ, cJ, yJ.Vertical);
        return eJ ? (XJ.movementX = 0, XJ.movementY = 0, XJ.offsetX = XJ.movementX - eJ.getBoundingClientRect().x, XJ.offsetY = XJ.movementY - eJ.getBoundingClientRect().y) : (XJ.movementX = UJ.pollInput(JJ, cJ, 10), XJ.movementY = UJ.pollInput(JJ, cJ, 11), XJ.offsetX = 0, XJ.offsetY = 0), this._CheckNonCharacterKeys(XJ, UJ), XJ.clientX = AJ, XJ.clientY = qJ, XJ.x = AJ, XJ.y = qJ, XJ.deviceType = JJ, XJ.deviceSlot = cJ, XJ.inputIndex = ZJ, XJ
      }
      static _CreateKeyboardEvent(JJ, cJ, ZJ, FJ) {
        const UJ = this._CreateEvent(FJ);
        return this._CheckNonCharacterKeys(UJ, ZJ), UJ.deviceType = KJ.Keyboard, UJ.deviceSlot = 0, UJ.inputIndex = JJ, UJ.type = 1 === cJ ? "keydown" : "keyup", UJ.key = String.fromCharCode(JJ), UJ.keyCode = JJ, UJ
      }
      static _CheckNonCharacterKeys(JJ, cJ) {
        const ZJ = cJ.isDeviceAvailable(KJ.Keyboard),
          FJ = ZJ && 1 === cJ.pollInput(KJ.Keyboard, 0, 18),
          UJ = ZJ && 1 === cJ.pollInput(KJ.Keyboard, 0, 17),
          eJ = ZJ && (1 === cJ.pollInput(KJ.Keyboard, 0, 91) || 1 === cJ.pollInput(KJ.Keyboard, 0, 92) || 1 === cJ.pollInput(KJ.Keyboard, 0, 93)),
          XJ = ZJ && 1 === cJ.pollInput(KJ.Keyboard, 0, 16);
        JJ.altKey = FJ, JJ.ctrlKey = UJ, JJ.metaKey = eJ, JJ.shiftKey = XJ
      }
      static _CreateEvent(JJ) {
        const cJ = {
          preventDefault: () => {}
        };
        return cJ.target = JJ, cJ
      }
    }
    class PJ {
      constructor(JJ, cJ, ZJ) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(JJ, cJ, ((JJ, cJ, FJ, UJ) => {
          const eJ = HJ.CreateDeviceEvent(JJ, cJ, FJ, UJ, this);
          ZJ(JJ, cJ, eJ)
        })) : this._createDummyNativeInput()
      }
      pollInput(JJ, cJ, ZJ) {
        return this._nativeInput.pollInput(JJ, cJ, ZJ)
      }
      isDeviceAvailable(JJ) {
        return JJ === KJ.Mouse || JJ === KJ.Touch
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
    const kJ = Object.keys(yJ).length / 2;
    class pJ {
      constructor(JJ, cJ, ZJ, UJ) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = FJ.j.IsSafari(), this._usingMacOs = (0, vJ.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = JJ => {}, this._keyboardUpEvent = JJ => {}, this._keyboardBlurEvent = JJ => {}, this._pointerMoveEvent = JJ => {}, this._pointerDownEvent = JJ => {}, this._pointerUpEvent = JJ => {}, this._pointerCancelEvent = JJ => {}, this._pointerCancelTouch = JJ => {}, this._pointerLeaveEvent = JJ => {}, this._pointerWheelEvent = JJ => {}, this._pointerBlurEvent = JJ => {}, this._pointerMacOsChromeOutEvent = JJ => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, vJ.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, vJ.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = JJ => {}, this._gamepadDisconnectedEvent = JJ => {}, this._eventPrefix = FJ.j.GetPointerPrefix(JJ), this._engine = JJ, this._onDeviceConnected = cJ, this._onDeviceDisconnected = ZJ, this._onInputChanged = UJ, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(JJ, cJ, ZJ) {
        const UJ = this._inputs[JJ][cJ];
        if (!UJ) throw `Unable to find device ${KJ[JJ]}`;
        JJ >= KJ.DualShock && JJ <= KJ.DualSense && this._updateDevice(JJ, cJ, ZJ);
        const eJ = UJ[ZJ];
        if (void 0 === eJ) throw `Unable to find input ${ZJ} for device ${KJ[JJ]} in slot ${cJ}`;
        return ZJ === yJ.Move && FJ.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), eJ
      }
      isDeviceAvailable(JJ) {
        return void 0 !== this._inputs[JJ]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const JJ = this?._engine.getInputElement();
        if (JJ && (!this._eventsAttached || this._elementToAttachTo !== JJ)) {
          if (this._disableEvents(), this._inputs)
            for (const JJ of this._inputs)
              if (JJ)
                for (const cJ in JJ) {
                  const ZJ = JJ[+cJ];
                  if (ZJ)
                    for (let JJ = 0; JJ < ZJ.length; JJ++) ZJ[JJ] = 0
                }
          this._elementToAttachTo = JJ, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cn", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const JJ = navigator.getGamepads();
          for (const cJ of JJ) cJ && this._addGamePad(cJ)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(KJ.Mouse, 0, 0, 0)
      }
      _addGamePad(JJ) {
        const cJ = this._getGamepadDeviceType(JJ.id),
          ZJ = JJ.index;
        this._gamepads = this._gamepads || new Array(JJ.index + 1), this._registerDevice(cJ, ZJ, JJ.buttons.length + JJ.axes.length), this._gamepads[ZJ] = cJ
      }
      _addPointerDevice(JJ, cJ, ZJ, FJ) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(JJ, cJ, kJ);
        const UJ = this._inputs[JJ][cJ];
        UJ[0] = ZJ, UJ[1] = FJ
      }
      _registerDevice(JJ, cJ, ZJ) {
        if (void 0 === cJ) throw `Unable to register device ${KJ[JJ]} to undefined slot.`;
        if (this._inputs[JJ] || (this._inputs[JJ] = {}), !this._inputs[JJ][cJ]) {
          const FJ = new Array(ZJ);
          FJ.fill(0), this._inputs[JJ][cJ] = FJ, this._onDeviceConnected(JJ, cJ)
        }
      }
      _unregisterDevice(JJ, cJ) {
        this._inputs[JJ][cJ] && (delete this._inputs[JJ][cJ], this._onDeviceDisconnected(JJ, cJ))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = JJ => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(KJ.Keyboard, 0, 255));
          const cJ = this._inputs[KJ.Keyboard][0];
          if (cJ) {
            cJ[JJ.keyCode] = 1;
            const ZJ = JJ;
            ZJ.inputIndex = JJ.keyCode, this._usingMacOs && JJ.metaKey && "Meta" !== JJ.key && (this._metaKeys.includes(JJ.keyCode) || this._metaKeys.push(JJ.keyCode)), this._onInputChanged(KJ.Keyboard, 0, ZJ)
          }
        }, this._keyboardUpEvent = JJ => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(KJ.Keyboard, 0, 255));
          const cJ = this._inputs[KJ.Keyboard][0];
          if (cJ) {
            cJ[JJ.keyCode] = 0;
            const ZJ = JJ;
            if (ZJ.inputIndex = JJ.keyCode, this._usingMacOs && "Meta" === JJ.key && this._metaKeys.length > 0) {
              for (const JJ of this._metaKeys) {
                const ZJ = HJ.CreateDeviceEvent(KJ.Keyboard, 0, JJ, 0, this, this._elementToAttachTo);
                cJ[JJ] = 0, this._onInputChanged(KJ.Keyboard, 0, ZJ)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(KJ.Keyboard, 0, ZJ)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const JJ = this._inputs[KJ.Keyboard][0];
            for (let cJ = 0; cJ < JJ.length; cJ++)
              if (0 !== JJ[cJ]) {
                JJ[cJ] = 0;
                const ZJ = HJ.CreateDeviceEvent(KJ.Keyboard, 0, cJ, 0, this, this._elementToAttachTo);
                this._onInputChanged(KJ.Keyboard, 0, ZJ)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, vJ.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let FJ = 0; FJ < this._maxTouchPoints; FJ++) this._activeTouchIds[FJ] = -1;
        this._pointerMoveEvent = JJ => {
          const cJ = this._getPointerType(JJ);
          let ZJ = cJ === KJ.Mouse ? 0 : this._activeTouchIds.indexOf(JJ.pointerId);
          if (cJ === KJ.Touch && -1 === ZJ) {
            if (0 === JJ.buttons) return;
            const UJ = this._activeTouchIds.indexOf(-1);
            if (!(UJ >= 0)) return void FJ.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZJ = UJ, this._activeTouchIds[UJ] = JJ.pointerId, this._onDeviceConnected(cJ, ZJ)
          }
          this._inputs[cJ] || (this._inputs[cJ] = {}), this._inputs[cJ][ZJ] || this._addPointerDevice(cJ, ZJ, JJ.clientX, JJ.clientY);
          const UJ = this._inputs[cJ][ZJ];
          if (UJ) {
            const FJ = JJ;
            FJ.inputIndex = yJ.Move, UJ[yJ.Horizontal] = JJ.clientX, UJ[yJ.Vertical] = JJ.clientY, cJ === KJ.Touch && 0 === UJ[yJ.LeftClick] && (UJ[yJ.LeftClick] = 1), void 0 === JJ.pointerId && (JJ.pointerId = this._mouseId), this._onInputChanged(cJ, ZJ, FJ), this._usingSafari || -1 === JJ.button || (FJ.inputIndex = JJ.button + 2, UJ[JJ.button + 2] = UJ[JJ.button + 2] ? 0 : 1, this._onInputChanged(cJ, ZJ, FJ))
          }
        }, this._pointerDownEvent = JJ => {
          const cJ = this._getPointerType(JJ);
          let ZJ = cJ === KJ.Mouse ? 0 : JJ.pointerId;
          if (cJ === KJ.Touch) {
            let cJ = this._activeTouchIds.indexOf(JJ.pointerId);
            if (-1 === cJ && (cJ = this._activeTouchIds.indexOf(-1)), !(cJ >= 0)) return void FJ.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZJ = cJ, this._activeTouchIds[cJ] = JJ.pointerId
          }
          this._inputs[cJ] || (this._inputs[cJ] = {}), this._inputs[cJ][ZJ] ? cJ === KJ.Touch && this._onDeviceConnected(cJ, ZJ) : this._addPointerDevice(cJ, ZJ, JJ.clientX, JJ.clientY);
          const UJ = this._inputs[cJ][ZJ];
          if (UJ) {
            const FJ = UJ[yJ.Horizontal],
              XJ = UJ[yJ.Vertical];
            if (cJ === KJ.Mouse) {
              if (void 0 === JJ.pointerId && (JJ.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (eJ) {}
            } else if (JJ.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(JJ.pointerId)
            } catch (eJ) {}
            UJ[yJ.Horizontal] = JJ.clientX, UJ[yJ.Vertical] = JJ.clientY, UJ[JJ.button + 2] = 1;
            const AJ = JJ;
            AJ.inputIndex = JJ.button + 2, this._onInputChanged(cJ, ZJ, AJ), FJ === JJ.clientX && XJ === JJ.clientY || (AJ.inputIndex = yJ.Move, this._onInputChanged(cJ, ZJ, AJ))
          }
        }, this._pointerUpEvent = JJ => {
          const cJ = this._getPointerType(JJ),
            ZJ = cJ === KJ.Mouse ? 0 : this._activeTouchIds.indexOf(JJ.pointerId);
          if (cJ === KJ.Touch) {
            if (-1 === ZJ) return;
            this._activeTouchIds[ZJ] = -1
          }
          const FJ = this._inputs[cJ]?.[ZJ];
          let UJ = JJ.button,
            eJ = FJ && 0 !== FJ[UJ + 2];
          if (!eJ && this._isUsingFirefox && this._usingMacOs && FJ && (UJ = 2 === UJ ? 0 : 2, eJ = 0 !== FJ[UJ + 2]), eJ) {
            const eJ = FJ[yJ.Horizontal],
              XJ = FJ[yJ.Vertical];
            FJ[yJ.Horizontal] = JJ.clientX, FJ[yJ.Vertical] = JJ.clientY, FJ[UJ + 2] = 0;
            const AJ = JJ;
            void 0 === JJ.pointerId && (JJ.pointerId = this._mouseId), eJ === JJ.clientX && XJ === JJ.clientY || (AJ.inputIndex = yJ.Move, this._onInputChanged(cJ, ZJ, AJ)), AJ.inputIndex = UJ + 2, cJ === KJ.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : JJ.pointerId && this._elementToAttachTo.hasPointerCapture?.(JJ.pointerId) && this._elementToAttachTo.releasePointerCapture(JJ.pointerId), this._onInputChanged(cJ, ZJ, AJ), cJ === KJ.Touch && this._onDeviceDisconnected(cJ, ZJ)
          }
        }, this._pointerCancelTouch = JJ => {
          const cJ = this._activeTouchIds.indexOf(JJ);
          if (-1 === cJ) return;
          this._elementToAttachTo.hasPointerCapture?.(JJ) && this._elementToAttachTo.releasePointerCapture(JJ), this._inputs[KJ.Touch][cJ][yJ.LeftClick] = 0;
          const ZJ = HJ.CreateDeviceEvent(KJ.Touch, cJ, yJ.LeftClick, 0, this, this._elementToAttachTo, JJ);
          this._onInputChanged(KJ.Touch, cJ, ZJ), this._activeTouchIds[cJ] = -1, this._onDeviceDisconnected(KJ.Touch, cJ)
        }, this._pointerCancelEvent = JJ => {
          if ("mouse" === JJ.pointerType) {
            const JJ = this._inputs[KJ.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let cJ = yJ.LeftClick; cJ <= yJ.BrowserForward; cJ++)
              if (1 === JJ[cJ]) {
                JJ[cJ] = 0;
                const ZJ = HJ.CreateDeviceEvent(KJ.Mouse, 0, cJ, 0, this, this._elementToAttachTo);
                this._onInputChanged(KJ.Mouse, 0, ZJ)
              }
          } else this._pointerCancelTouch(JJ.pointerId)
        }, this._pointerLeaveEvent = JJ => {
          "pen" === JJ.pointerType && this._pointerCancelTouch(JJ.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let JJ = !1;
        const cJ = function() {};
        try {
          const ZJ = Object.defineProperty({}, "passive", {
            get: function() {
              JJ = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", cJ, ZJ), this._elementToAttachTo.removeEventListener("test", cJ, ZJ)
        } catch (ZJ) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(KJ.Mouse)) {
            const JJ = this._inputs[KJ.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let cJ = yJ.LeftClick; cJ <= yJ.BrowserForward; cJ++)
              if (1 === JJ[cJ]) {
                JJ[cJ] = 0;
                const ZJ = HJ.CreateDeviceEvent(KJ.Mouse, 0, cJ, 0, this, this._elementToAttachTo);
                this._onInputChanged(KJ.Mouse, 0, ZJ)
              }
          }
          if (this.isDeviceAvailable(KJ.Touch)) {
            const JJ = this._inputs[KJ.Touch];
            for (let cJ = 0; cJ < this._activeTouchIds.length; cJ++) {
              const ZJ = this._activeTouchIds[cJ];
              if (this._elementToAttachTo.hasPointerCapture?.(ZJ) && this._elementToAttachTo.releasePointerCapture(ZJ), -1 !== ZJ && 1 === JJ[cJ]?.[yJ.LeftClick]) {
                JJ[cJ][yJ.LeftClick] = 0;
                const FJ = HJ.CreateDeviceEvent(KJ.Touch, cJ, yJ.LeftClick, 0, this, this._elementToAttachTo, ZJ);
                this._onInputChanged(KJ.Touch, cJ, FJ), this._activeTouchIds[cJ] = -1, this._onDeviceDisconnected(KJ.Touch, cJ)
              }
            }
          }
        }, this._pointerWheelEvent = JJ => {
          const cJ = KJ.Mouse;
          this._inputs[cJ] || (this._inputs[cJ] = []), this._inputs[cJ][0] || (this._pointerActive = !0, this._registerDevice(cJ, 0, kJ));
          const ZJ = this._inputs[cJ][0];
          if (ZJ) {
            ZJ[yJ.MouseWheelX] = JJ.deltaX || 0, ZJ[yJ.MouseWheelY] = JJ.deltaY || JJ.wheelDelta || 0, ZJ[yJ.MouseWheelZ] = JJ.deltaZ || 0;
            const FJ = JJ;
            void 0 === JJ.pointerId && (JJ.pointerId = this._mouseId), 0 !== ZJ[yJ.MouseWheelX] && (FJ.inputIndex = yJ.MouseWheelX, this._onInputChanged(cJ, 0, FJ)), 0 !== ZJ[yJ.MouseWheelY] && (FJ.inputIndex = yJ.MouseWheelY, this._onInputChanged(cJ, 0, FJ)), 0 !== ZJ[yJ.MouseWheelZ] && (FJ.inputIndex = yJ.MouseWheelZ, this._onInputChanged(cJ, 0, FJ))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = JJ => {
          JJ.buttons > 1 && this._pointerCancelEvent(JJ)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cn", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!JJ && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(KJ.Mouse)) {
            const JJ = this._inputs[KJ.Mouse][0];
            JJ[yJ.MouseWheelX] = 0, JJ[yJ.MouseWheelY] = 0, JJ[yJ.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = JJ => {
          this._addGamePad(JJ.gamepad)
        }, this._gamepadDisconnectedEvent = JJ => {
          if (this._gamepads) {
            const cJ = this._getGamepadDeviceType(JJ.gamepad.id),
              ZJ = JJ.gamepad.index;
            this._unregisterDevice(cJ, ZJ), delete this._gamepads[ZJ]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(JJ, cJ, ZJ) {
        const FJ = navigator.getGamepads()[cJ];
        if (FJ && JJ === this._gamepads[cJ]) {
          const UJ = this._inputs[JJ][cJ];
          ZJ >= FJ.buttons.length ? UJ[ZJ] = FJ.axes[ZJ - FJ.buttons.length].valueOf() : UJ[ZJ] = FJ.buttons[ZJ].value
        }
      }
      _getGamepadDeviceType(JJ) {
        return -1 !== JJ.indexOf("054c") ? -1 !== JJ.indexOf("0ce6") ? KJ.DualSense : KJ.DualShock : -1 !== JJ.indexOf("Xbox One") || -1 !== JJ.search("Xbox 360") || -1 !== JJ.search("xinput") || -1 !== JJ.indexOf("045e") && -1 === JJ.indexOf("Surface Dock") ? KJ.Xbox : -1 !== JJ.indexOf("057e") ? KJ.Switch : KJ.Generic
      }
      _getPointerType(JJ) {
        let cJ = KJ.Mouse;
        return ("touch" === JJ.pointerType || "pen" === JJ.pointerType || JJ.touches) && (cJ = KJ.Touch), cJ
      }
    }
    class dJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = cJ, this.deviceSlot = ZJ, this.onInputChangedObservable = new XJ.c, this._deviceInputSystem = JJ
      }
      getInput(JJ) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, JJ)
      }
    }
    class zJ {
      constructor(JJ) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = JJ => {
          for (let cJ = 0; cJ < this._devices.length; cJ++) {
            const ZJ = this._devices[cJ];
            for (const FJ in ZJ) {
              const ZJ = +FJ;
              JJ._addDevice(new dJ(this._deviceInputSystem, cJ, ZJ))
            }
          }
          this._registeredManagers.push(JJ)
        }, this.unregisterManager = JJ => {
          const cJ = this._registeredManagers.indexOf(JJ);
          cJ > -1 && this._registeredManagers.splice(cJ, 1)
        };
        const cJ = Object.keys(KJ).length / 2;
        this._devices = new Array(cJ);
        const ZJ = (JJ, cJ) => {
            this._devices[JJ] || (this._devices[JJ] = new Array), this._devices[JJ][cJ] || (this._devices[JJ][cJ] = cJ);
            for (const ZJ of this._registeredManagers) {
              const FJ = new dJ(this._deviceInputSystem, JJ, cJ);
              ZJ._addDevice(FJ)
            }
          },
          FJ = (JJ, cJ) => {
            this._devices[JJ]?.[cJ] && delete this._devices[JJ][cJ];
            for (const ZJ of this._registeredManagers) ZJ._removeDevice(JJ, cJ)
          },
          UJ = (JJ, cJ, ZJ) => {
            if (ZJ)
              for (const FJ of this._registeredManagers) FJ._onInputChanged(JJ, cJ, ZJ)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new PJ(ZJ, FJ, UJ) : this._deviceInputSystem = new pJ(JJ, ZJ, FJ, UJ)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class NJ {
      getDeviceSource(JJ, cJ) {
        if (void 0 === cJ) {
          if (void 0 === this._firstDevice[JJ]) return null;
          cJ = this._firstDevice[JJ]
        }
        return this._devices[JJ] && void 0 !== this._devices[JJ][cJ] ? this._devices[JJ][cJ] : null
      }
      getDeviceSources(JJ) {
        return this._devices[JJ] ? this._devices[JJ].filter((JJ => !!JJ)) : []
      }
      constructor(JJ) {
        const cJ = Object.keys(KJ).length / 2;
        this._devices = new Array(cJ), this._firstDevice = new Array(cJ), this._engine = JJ, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new zJ(JJ)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new XJ.c((JJ => {
          for (const cJ of this._devices)
            if (cJ)
              for (const ZJ of cJ) ZJ && this.onDeviceConnectedObservable.notifyObserver(JJ, ZJ)
        })), this.onDeviceDisconnectedObservable = new XJ.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = JJ.Sy.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Sy.remove(this._onDisposeObserver)
      }
      _addDevice(JJ) {
        this._devices[JJ.deviceType] || (this._devices[JJ.deviceType] = []), this._devices[JJ.deviceType][JJ.deviceSlot] || (this._devices[JJ.deviceType][JJ.deviceSlot] = JJ, this._updateFirstDevices(JJ.deviceType)), this.onDeviceConnectedObservable.notifyObservers(JJ)
      }
      _removeDevice(JJ, cJ) {
        const ZJ = this._devices[JJ]?.[cJ];
        this.onDeviceDisconnectedObservable.notifyObservers(ZJ), this._devices[JJ]?.[cJ] && delete this._devices[JJ][cJ], this._updateFirstDevices(JJ)
      }
      _onInputChanged(JJ, cJ, ZJ) {
        this._devices[JJ]?.[cJ]?.onInputChangedObservable.notifyObservers(ZJ)
      }
      _updateFirstDevices(JJ) {
        switch (JJ) {
          case KJ.Keyboard:
          case KJ.Mouse:
            this._firstDevice[JJ] = 0;
            break;
          case KJ.Touch:
          case KJ.DualSense:
          case KJ.DualShock:
          case KJ.Xbox:
          case KJ.Switch:
          case KJ.Generic: {
            delete this._firstDevice[JJ];
            const cJ = this._devices[JJ];
            if (cJ)
              for (let ZJ = 0; ZJ < cJ.length; ZJ++)
                if (cJ[ZJ]) {
                  this._firstDevice[JJ] = ZJ;
                  break
                } break
          }
        }
      }
    }
    var OJ = ZJ(38960);
    class TJ {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get lj() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(JJ) {
        this._singleClick = JJ
      }
      set lj(JJ) {
        this._doubleClick = JJ
      }
      set hasSwiped(JJ) {
        this._hasSwiped = JJ
      }
      set ignore(JJ) {
        this._ignore = JJ
      }
    }
    class CJ {
      constructor(JJ) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new YJ.i(0, 0), this._previousStartingPointerPosition = new YJ.i(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = JJ || mJ.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(JJ) {
        return this._meshUnderPointerId[JJ] || null
      }
      get unTranslatedPointer() {
        return new YJ.i(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(JJ) {
        this._pointerX = JJ
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(JJ) {
        this._pointerY = JJ
      }
      _updatePointerPosition(JJ) {
        const cJ = this._scene.gn().getInputElementClientRect();
        cJ && (this._pointerX = JJ.clientX - cJ.left, this._pointerY = JJ.clientY - cJ.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(JJ, cJ) {
        const ZJ = this._scene,
          FJ = ZJ.gn(),
          UJ = FJ.getInputElement();
        UJ && (UJ.tabIndex = FJ.canvasTabIndex, ZJ.doNotHandleCursors || (UJ.style.cursor = ZJ.defaultCursor)), this._setCursorAndPointerOverMesh(JJ, cJ, ZJ);
        for (const AJ of ZJ._pointerMoveStage) {
          JJ = JJ || this._pickMove(cJ);
          const ZJ = !!JJ?.pickedMesh;
          JJ = AJ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, JJ, ZJ, UJ)
        }
        const eJ = cJ.inputIndex >= yJ.MouseWheelX && cJ.inputIndex <= yJ.MouseWheelZ ? EJ.c.POINTERWHEEL : EJ.c.POINTERMOVE;
        let XJ;
        ZJ.onPointerMove && (JJ = JJ || this._pickMove(cJ), ZJ.onPointerMove(cJ, JJ, eJ)), JJ ? (XJ = new EJ.g(eJ, cJ, JJ), this._setRayOnPointerInfo(JJ, cJ)) : (XJ = new EJ.g(eJ, cJ, null, this), this._movePointerInfo = XJ), ZJ.onPointerObservable.hasObservers() && ZJ.onPointerObservable.notifyObservers(XJ, eJ)
      }
      _setRayOnPointerInfo(JJ, cJ) {
        const ZJ = this._scene;
        JJ && OJ.c._IsPickingAvailable && (JJ.ray || (JJ.ray = ZJ.createPickingRay(cJ.offsetX, cJ.offsetY, YJ.b.Identity(), ZJ.activeCamera)))
      }
      _addCameraPointerObserver(JJ, cJ) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(JJ, cJ)
      }
      _removeCameraPointerObserver(JJ) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(JJ)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(JJ, cJ, ZJ) {
        const FJ = this._scene,
          UJ = new EJ.d(ZJ, cJ, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return JJ && (UJ.originalPickingInfo = JJ, UJ.ray = JJ.ray, "xr-near" === cJ.pointerType && JJ.originMesh && (UJ.nearInteractionPickingInfo = JJ)), FJ.onPrePointerObservable.notifyObservers(UJ, ZJ), !!UJ.skipOnPointerObservable
      }
      _pickMove(JJ) {
        const cJ = this._scene,
          ZJ = cJ.PD(this._unTranslatedPointerX, this._unTranslatedPointerY, cJ.pointerMovePredicate, cJ.pointerMoveFastCheck, cJ.cameraToUseForPointers, cJ.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(ZJ, JJ, cJ), ZJ
      }
      _updateMeshUnderPointer() {
        const JJ = this._scene;
        if (!JJ.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || JJ.skipPointerMovePicking || !JJ.cameraToUseForPointers && !JJ.activeCamera) return;
        this._ensurePointerMovePredicate();
        const cJ = this._pointerX,
          ZJ = this._pointerY,
          FJ = this._unTranslatedPointerX,
          UJ = this._unTranslatedPointerY;
        for (const eJ of this._latestPointerMoveEvents.values()) this._pointerX = eJ.pointerX, this._pointerY = eJ.pointerY, this._unTranslatedPointerX = eJ.unTranslatedPointerX, this._unTranslatedPointerY = eJ.unTranslatedPointerY, this._pickMove(eJ.event);
        this._pointerX = cJ, this._pointerY = ZJ, this._unTranslatedPointerX = FJ, this._unTranslatedPointerY = UJ
      }
      _ensurePointerMovePredicate() {
        const JJ = this._scene;
        JJ.pointerMovePredicate || (JJ.pointerMovePredicate = cJ => (cJ._isPointerMovePickable ?? cJ.aG) && cJ.isVisible && cJ.isReady() && cJ.isEnabled() && (cJ.enablePointerMoveEvents || JJ.constantlyUpdateMeshUnderPointer || null !== cJ._getActionManagerForTrigger()) && (!JJ.cameraToUseForPointers || 0 !== (JJ.cameraToUseForPointers.layerMask & cJ.layerMask)))
      }
      _setCursorAndPointerOverMesh(JJ, cJ, ZJ) {
        const FJ = ZJ.gn().getInputElement();
        if (JJ?.pickedMesh) {
          if (this.setPointerOverMesh(JJ.pickedMesh, cJ.pointerId, JJ, cJ), !ZJ.doNotHandleCursors && FJ && this._pointerOverMesh) {
            const JJ = this._pointerOverMesh._getActionManagerForTrigger();
            JJ && JJ.hasPointerTriggers && (FJ.style.cursor = JJ.hoverCursor || ZJ.hoverCursor)
          }
        } else this.setPointerOverMesh(null, cJ.pointerId, JJ, cJ)
      }
      simulatePointerMove(JJ, cJ) {
        const ZJ = new PointerEvent("pointermove", cJ);
        ZJ.inputIndex = yJ.Move, this._checkPrePointerObservable(JJ, ZJ, EJ.c.POINTERMOVE) || this._processPointerMove(JJ, ZJ)
      }
      simulatePointerDown(JJ, cJ) {
        const ZJ = new PointerEvent("pointerdown", cJ);
        ZJ.inputIndex = ZJ.button + 2, this._checkPrePointerObservable(JJ, ZJ, EJ.c.POINTERDOWN) || this._processPointerDown(JJ, ZJ)
      }
      _processPointerDown(JJ, cJ) {
        const ZJ = this._scene;
        if (JJ?.pickedMesh) {
          this._pickedDownMesh = JJ.pickedMesh;
          const FJ = JJ.pickedMesh._getActionManagerForTrigger();
          if (FJ) {
            if (FJ.hasPickTriggers) switch (FJ.processTrigger(5, new nJ(JJ.pickedMesh, ZJ.pointerX, ZJ.pointerY, JJ.pickedMesh, cJ, JJ)), cJ.button) {
              case 0:
                FJ.processTrigger(2, new nJ(JJ.pickedMesh, ZJ.pointerX, ZJ.pointerY, JJ.pickedMesh, cJ, JJ));
                break;
              case 1:
                FJ.processTrigger(4, new nJ(JJ.pickedMesh, ZJ.pointerX, ZJ.pointerY, JJ.pickedMesh, cJ, JJ));
                break;
              case 2:
                FJ.processTrigger(3, new nJ(JJ.pickedMesh, ZJ.pointerX, ZJ.pointerY, JJ.pickedMesh, cJ, JJ))
            }
            FJ.hasSpecificTrigger(8) && window.setTimeout((() => {
              const JJ = ZJ.PD(this._unTranslatedPointerX, this._unTranslatedPointerY, (JJ => JJ.aG && JJ.isVisible && JJ.isReady() && JJ.actionManager && JJ.actionManager.hasSpecificTrigger(8) && JJ === this._pickedDownMesh), !1, ZJ.cameraToUseForPointers);
              JJ?.pickedMesh && FJ && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > CJ.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, FJ.processTrigger(8, nJ.CreateNew(JJ.pickedMesh, cJ)))
            }), CJ.LongPressDelay)
          }
        } else
          for (const eJ of ZJ._pointerDownStage) JJ = eJ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, JJ, cJ, !1);
        let FJ;
        const UJ = EJ.c.POINTERDOWN;
        JJ ? (ZJ.onPointerDown && ZJ.onPointerDown(cJ, JJ, UJ), FJ = new EJ.g(UJ, cJ, JJ), this._setRayOnPointerInfo(JJ, cJ)) : FJ = new EJ.g(UJ, cJ, null, this), ZJ.onPointerObservable.hasObservers() && ZJ.onPointerObservable.notifyObservers(FJ, UJ)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(JJ, cJ, ZJ) {
        const FJ = new PointerEvent("pointerup", cJ);
        FJ.inputIndex = yJ.Move;
        const UJ = new TJ;
        ZJ ? UJ.lj = !0 : UJ.singleClick = !0, this._checkPrePointerObservable(JJ, FJ, EJ.c.POINTERUP) || this._processPointerUp(JJ, FJ, UJ)
      }
      _processPointerUp(JJ, cJ, ZJ) {
        const FJ = this._scene;
        if (JJ?.pickedMesh) {
          if (this._pickedUpMesh = JJ.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (FJ.onPointerPick && FJ.onPointerPick(cJ, JJ), ZJ.singleClick && !ZJ.ignore && FJ.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const ZJ = EJ.c.POINTERPICK,
              UJ = new EJ.g(ZJ, cJ, JJ);
            this._setRayOnPointerInfo(JJ, cJ), FJ.onPointerObservable.notifyObservers(UJ, ZJ)
          }
          const UJ = JJ.pickedMesh._getActionManagerForTrigger();
          if (UJ && !ZJ.ignore) {
            UJ.processTrigger(7, nJ.CreateNew(JJ.pickedMesh, cJ, JJ)), !ZJ.hasSwiped && ZJ.singleClick && UJ.processTrigger(1, nJ.CreateNew(JJ.pickedMesh, cJ, JJ));
            const FJ = JJ.pickedMesh._getActionManagerForTrigger(6);
            ZJ.lj && FJ && FJ.processTrigger(6, nJ.CreateNew(JJ.pickedMesh, cJ, JJ))
          }
        } else if (!ZJ.ignore)
          for (const UJ of FJ._pointerUpStage) JJ = UJ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, JJ, cJ, ZJ.lj);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const JJ = this._pickedDownMesh._getActionManagerForTrigger(16);
          JJ && JJ.processTrigger(16, nJ.CreateNew(this._pickedDownMesh, cJ))
        }
        if (!ZJ.ignore) {
          const UJ = new EJ.g(EJ.c.POINTERUP, cJ, JJ);
          if (this._setRayOnPointerInfo(JJ, cJ), FJ.onPointerObservable.notifyObservers(UJ, EJ.c.POINTERUP), FJ.onPointerUp && FJ.onPointerUp(cJ, JJ, EJ.c.POINTERUP), !ZJ.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let UJ = 0;
            if (ZJ.singleClick ? UJ = EJ.c.POINTERTAP : ZJ.lj && (UJ = EJ.c.POINTERDOUBLETAP), UJ) {
              const ZJ = new EJ.g(UJ, cJ, JJ);
              FJ.onPointerObservable.hasObservers() && FJ.onPointerObservable.hasSpecificMask(UJ) && FJ.onPointerObservable.notifyObservers(ZJ, UJ)
            }
          }
        }
      }
      isPointerCaptured() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[JJ]
      }
      attachControl() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const UJ = this._scene,
          eJ = UJ.gn();
        FJ || (FJ = eJ.getInputElement()), this._alreadyAttached && this.detachControl(), FJ && (this._alreadyAttachedTo = FJ), this._deviceSourceManager = new NJ(eJ), this._initActionManager = JJ => {
          if (!this._meshPickProceed) {
            const cJ = UJ.skipPointerUpPicking || 0 === UJ._registeredActions && !this._checkForPicking() && !UJ.onPointerUp ? null : UJ.PD(this._unTranslatedPointerX, this._unTranslatedPointerY, UJ.pointerUpPredicate, UJ.pointerUpFastCheck, UJ.cameraToUseForPointers, UJ.pointerUpTrianglePredicate);
            this._currentPickResult = cJ, cJ && (JJ = cJ.hit && cJ.pickedMesh ? cJ.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return JJ
        }, this._delayedSimpleClick = (JJ, cJ, ZJ) => {
          if ((Date.now() - this._previousStartingPointerTime > CJ.DoubleClickDelay && !this._doubleClickOccured || JJ !== this._previousButtonPressed) && (this._doubleClickOccured = !1, cJ.singleClick = !0, cJ.ignore = !1, this._delayedClicks[JJ])) {
            const cJ = this._delayedClicks[JJ].evt,
              ZJ = EJ.c.POINTERTAP,
              FJ = new EJ.g(ZJ, cJ, this._currentPickResult);
            UJ.onPointerObservable.hasObservers() && UJ.onPointerObservable.hasSpecificMask(ZJ) && UJ.onPointerObservable.notifyObservers(FJ, ZJ), this._delayedClicks[JJ] = null
          }
        }, this._initClickEvent = (JJ, cJ, ZJ, FJ) => {
          const UJ = new TJ;
          this._currentPickResult = null;
          let eJ = null,
            XJ = JJ.hasSpecificMask(EJ.c.POINTERPICK) || cJ.hasSpecificMask(EJ.c.POINTERPICK) || JJ.hasSpecificMask(EJ.c.POINTERTAP) || cJ.hasSpecificMask(EJ.c.POINTERTAP) || JJ.hasSpecificMask(EJ.c.POINTERDOUBLETAP) || cJ.hasSpecificMask(EJ.c.POINTERDOUBLETAP);
          !XJ && VJ && (eJ = this._initActionManager(eJ, UJ), eJ && (XJ = eJ.hasPickTriggers));
          let AJ = !1;
          if (XJ = XJ && !this._isMultiTouchGesture, XJ) {
            const XJ = ZJ.button;
            if (UJ.hasSwiped = this._isPointerSwiping(), !UJ.hasSwiped) {
              let qJ = !CJ.ExclusiveDoubleClickMode;
              if (qJ || (qJ = !JJ.hasSpecificMask(EJ.c.POINTERDOUBLETAP) && !cJ.hasSpecificMask(EJ.c.POINTERDOUBLETAP), qJ && !VJ.HasSpecificTrigger(6) && (eJ = this._initActionManager(eJ, UJ), eJ && (qJ = !eJ.hasSpecificTrigger(6)))), qJ)(Date.now() - this._previousStartingPointerTime > CJ.DoubleClickDelay || XJ !== this._previousButtonPressed) && (UJ.singleClick = !0, FJ(UJ, this._currentPickResult), AJ = !0);
              else {
                const JJ = {
                  evt: ZJ,
                  clickInfo: UJ,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, XJ, UJ, FJ), CJ.DoubleClickDelay)
                };
                this._delayedClicks[XJ] = JJ
              }
              let jJ = JJ.hasSpecificMask(EJ.c.POINTERDOUBLETAP) || cJ.hasSpecificMask(EJ.c.POINTERDOUBLETAP);
              !jJ && VJ.HasSpecificTrigger(6) && (eJ = this._initActionManager(eJ, UJ), eJ && (jJ = eJ.hasSpecificTrigger(6))), jJ && (XJ === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < CJ.DoubleClickDelay && !this._doubleClickOccured ? (UJ.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = XJ, CJ.ExclusiveDoubleClickMode ? (this._delayedClicks[XJ] && (clearTimeout(this._delayedClicks[XJ]?.timeoutId), this._delayedClicks[XJ] = null), FJ(UJ, this._previousPickResult)) : FJ(UJ, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, UJ.lj = !0, UJ.ignore = !1, CJ.ExclusiveDoubleClickMode && this._delayedClicks[XJ] && (clearTimeout(this._delayedClicks[XJ]?.timeoutId), this._delayedClicks[XJ] = null), FJ(UJ, this._currentPickResult)), AJ = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = XJ))
            }
          }
          AJ || FJ(UJ, this._currentPickResult)
        }, this._onPointerMove = JJ => {
          if (this._updatePointerPosition(JJ), this._latestPointerMoveEvents.set(JJ.pointerId, {
              event: JJ,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > CJ.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > CJ.DragMovementThreshold), eJ.isPointerLock && eJ._verifyPointerLock(), this._checkPrePointerObservable(null, JJ, JJ.inputIndex >= yJ.MouseWheelX && JJ.inputIndex <= yJ.MouseWheelZ ? EJ.c.POINTERWHEEL : EJ.c.POINTERMOVE)) return;
          if (!UJ.cameraToUseForPointers && !UJ.activeCamera) return;
          if (UJ.skipPointerMovePicking) return void this._processPointerMove(new sJ.e, JJ);
          this._ensurePointerMovePredicate();
          const cJ = UJ._registeredActions > 0 || UJ.constantlyUpdateMeshUnderPointer ? this._pickMove(JJ) : null;
          this._processPointerMove(cJ, JJ)
        }, this._onPointerDown = JJ => {
          const cJ = this._activePointerIds.indexOf(-1);
          if (-1 === cJ ? this._activePointerIds.push(JJ.pointerId) : this._activePointerIds[cJ] = JJ.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, CJ.ExclusiveDoubleClickMode)
            for (let FJ = 0; FJ < this._delayedClicks.length; FJ++)
              if (this._delayedClicks[FJ])
                if (JJ.button === FJ) clearTimeout(this._delayedClicks[FJ]?.timeoutId);
                else {
                  const JJ = this._delayedClicks[FJ].clickInfo;
                  this._doubleClickOccured = !1, JJ.singleClick = !0, JJ.ignore = !1;
                  const cJ = this._delayedClicks[FJ].evt,
                    ZJ = EJ.c.POINTERTAP,
                    eJ = new EJ.g(ZJ, cJ, this._currentPickResult);
                  UJ.onPointerObservable.hasObservers() && UJ.onPointerObservable.hasSpecificMask(ZJ) && UJ.onPointerObservable.notifyObservers(eJ, ZJ), this._delayedClicks[FJ] = null
                } if (this._updatePointerPosition(JJ), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = JJ.button), UJ.preventDefaultOnPointerDown && FJ && (JJ.preventDefault(), FJ.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, JJ, EJ.c.POINTERDOWN)) return;
          if (!UJ.cameraToUseForPointers && !UJ.activeCamera) return;
          let ZJ;
          this._pointerCaptures[JJ.pointerId] = !0, UJ.pointerDownPredicate || (UJ.pointerDownPredicate = JJ => JJ.aG && JJ.isVisible && JJ.isReady() && JJ.isEnabled() && (!UJ.cameraToUseForPointers || 0 !== (UJ.cameraToUseForPointers.layerMask & JJ.layerMask))), this._pickedDownMesh = null, ZJ = UJ.skipPointerDownPicking || 0 === UJ._registeredActions && !this._checkForPicking() && !UJ.onPointerDown ? new sJ.e : UJ.PD(this._unTranslatedPointerX, this._unTranslatedPointerY, UJ.pointerDownPredicate, UJ.pointerDownFastCheck, UJ.cameraToUseForPointers, UJ.pointerDownTrianglePredicate), this._processPointerDown(ZJ, JJ)
        }, this._onPointerUp = JJ => {
          const cJ = this._activePointerIds.indexOf(JJ.pointerId); - 1 !== cJ && (this._activePointerIds[cJ] = -1, this._activePointerIdsCount--, "touch" === JJ.pointerType && this._latestPointerMoveEvents.delete(JJ.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(JJ), UJ.preventDefaultOnPointerUp && FJ && (JJ.preventDefault(), FJ.focus()), this._initClickEvent(UJ.onPrePointerObservable, UJ.onPointerObservable, JJ, ((cJ, ZJ) => {
            if (UJ.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !cJ.ignore)) {
              if (this._checkPrePointerObservable(null, JJ, EJ.c.POINTERUP)) return this._swipeButtonPressed === JJ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === JJ.buttons && (this._pointerCaptures[JJ.pointerId] = !1));
              cJ.hasSwiped || (cJ.singleClick && UJ.onPrePointerObservable.hasSpecificMask(EJ.c.POINTERTAP) && this._checkPrePointerObservable(null, JJ, EJ.c.POINTERTAP) && (this._skipPointerTap = !0), cJ.lj && UJ.onPrePointerObservable.hasSpecificMask(EJ.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, JJ, EJ.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[JJ.pointerId] ? (0 === JJ.buttons && (this._pointerCaptures[JJ.pointerId] = !1), (UJ.cameraToUseForPointers || UJ.activeCamera) && (UJ.pointerUpPredicate || (UJ.pointerUpPredicate = JJ => JJ.aG && JJ.isVisible && JJ.isReady() && JJ.isEnabled() && (!UJ.cameraToUseForPointers || 0 !== (UJ.cameraToUseForPointers.layerMask & JJ.layerMask))), !this._meshPickProceed && (VJ && VJ.HasTriggers || this._checkForPicking() || UJ.onPointerUp) && this._initActionManager(null, cJ), ZJ || (ZJ = this._currentPickResult), this._processPointerUp(ZJ, JJ, cJ), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === JJ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === JJ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = JJ => {
          const cJ = WJ.c.KEYDOWN;
          if (UJ.onPreKeyboardObservable.hasObservers()) {
            const ZJ = new WJ.d(cJ, JJ);
            if (UJ.onPreKeyboardObservable.notifyObservers(ZJ, cJ), ZJ.skipOnKeyboardObservable) return
          }
          if (UJ.onKeyboardObservable.hasObservers()) {
            const ZJ = new WJ.e(cJ, JJ);
            UJ.onKeyboardObservable.notifyObservers(ZJ, cJ)
          }
          UJ.actionManager && UJ.actionManager.processTrigger(14, nJ.CreateNewFromScene(UJ, JJ))
        }, this._onKeyUp = JJ => {
          const cJ = WJ.c.KEYUP;
          if (UJ.onPreKeyboardObservable.hasObservers()) {
            const ZJ = new WJ.d(cJ, JJ);
            if (UJ.onPreKeyboardObservable.notifyObservers(ZJ, cJ), ZJ.skipOnKeyboardObservable) return
          }
          if (UJ.onKeyboardObservable.hasObservers()) {
            const ZJ = new WJ.e(cJ, JJ);
            UJ.onKeyboardObservable.notifyObservers(ZJ, cJ)
          }
          UJ.actionManager && UJ.actionManager.processTrigger(15, nJ.CreateNewFromScene(UJ, JJ))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((FJ => {
          FJ.deviceType === KJ.Mouse ? FJ.onInputChangedObservable.add((UJ => {
            this._originMouseEvent = UJ, UJ.inputIndex === yJ.LeftClick || UJ.inputIndex === yJ.MiddleClick || UJ.inputIndex === yJ.RightClick || UJ.inputIndex === yJ.BrowserBack || UJ.inputIndex === yJ.BrowserForward ? cJ && 1 === FJ.getInput(UJ.inputIndex) ? this._onPointerDown(UJ) : JJ && 0 === FJ.getInput(UJ.inputIndex) && this._onPointerUp(UJ) : ZJ && (UJ.inputIndex === yJ.Move ? this._onPointerMove(UJ) : UJ.inputIndex !== yJ.MouseWheelX && UJ.inputIndex !== yJ.MouseWheelY && UJ.inputIndex !== yJ.MouseWheelZ || this._onPointerMove(UJ))
          })) : FJ.deviceType === KJ.Touch ? FJ.onInputChangedObservable.add((UJ => {
            UJ.inputIndex === yJ.LeftClick && (cJ && 1 === FJ.getInput(UJ.inputIndex) ? (this._onPointerDown(UJ), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : JJ && 0 === FJ.getInput(UJ.inputIndex) && (this._onPointerUp(UJ), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), ZJ && UJ.inputIndex === yJ.Move && this._onPointerMove(UJ)
          })) : FJ.deviceType === KJ.Keyboard && FJ.onInputChangedObservable.add((JJ => {
            "keydown" === JJ.type ? this._onKeyDown(JJ) : "keyup" === JJ.type && this._onKeyUp(JJ)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[cJ] === JJ && (!JJ || !JJ._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const UJ = this._meshUnderPointerId[cJ];
        let eJ;
        UJ && (eJ = UJ._getActionManagerForTrigger(10), eJ && eJ.processTrigger(10, new nJ(UJ, this._pointerX, this._pointerY, JJ, FJ, {
          pointerId: cJ
        }))), JJ ? (this._meshUnderPointerId[cJ] = JJ, this._pointerOverMesh = JJ, eJ = JJ._getActionManagerForTrigger(9), eJ && eJ.processTrigger(9, new nJ(JJ, this._pointerX, this._pointerY, JJ, FJ, {
          pointerId: cJ,
          pickResult: ZJ
        }))) : (delete this._meshUnderPointerId[cJ], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: JJ,
          pointerId: cJ
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(JJ) {
        this._pointerOverMesh === JJ && (this._pointerOverMesh = null), this._pickedDownMesh === JJ && (this._pickedDownMesh = null), this._pickedUpMesh === JJ && (this._pickedUpMesh = null);
        for (const cJ in this._meshUnderPointerId) this._meshUnderPointerId[cJ] === JJ && delete this._meshUnderPointerId[cJ]
      }
    }
    CJ.DragMovementThreshold = 10, CJ.LongPressDelay = 500, CJ.DoubleClickDelay = 300, CJ.ExclusiveDoubleClickMode = !1;
    var uJ = ZJ(38748),
      iJ = ZJ(36231),
      RJ = ZJ(36742);
    class LJ {
      static get UniqueId() {
        const JJ = this._UniqueIdCounter;
        return this._UniqueIdCounter++, JJ
      }
    }
    LJ._UniqueIdCounter = 1;
    var aJ = ZJ(38844),
      BJ = ZJ(38967),
      tJ = ZJ(36183);
    class oJ {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var lJ, Jc, cc, Zc, Fc, Uc, ec, Xc, Ac, qc, jc, Yc, hc, Dc, sc, nc, Gc, fc, xc, rc, vc, mc, Qc, Ec, Vc, Kc, yc, Sc, Ic, Mc, bc, wc, Wc, gc, Hc, Pc, kc, pc, dc, zc, Nc, Oc, Tc, Cc, uc, ic, Rc, Lc, ac, Bc, tc, oc, lc, JZ = ZJ(37660),
      cZ = ZJ(36216);
    const ZZ = new YJ.k,
      FZ = new YJ.k;
    var UZ;
    ! function(JJ) {
      JJ[JJ.BackwardCompatible = 0] = "BackwardCompatible", JJ[JJ.Intermediate = 1] = "Intermediate", JJ[JJ.Aggressive = 2] = "Aggressive"
    }(UZ || (UZ = {}));
    class eZ {
      static DefaultMaterialFactory(JJ) {
        throw (0, QJ.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, QJ.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(JJ) {
        JJ !== this._clearColor && (this._clearColor = JJ, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(JJ) {
        if (JJ !== this._performancePriority) {
          switch (this._performancePriority = JJ, JJ) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(JJ)
        }
      }
      set forceWireframe(JJ) {
        this._forceWireframe !== JJ && (this._forceWireframe = JJ, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(JJ) {
        this._skipFrustumClipping !== JJ && (this._skipFrustumClipping = JJ)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(JJ) {
        this._forcePointsCloud !== JJ && (this._forcePointsCloud = JJ, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(JJ) {
        this._environmentTexture !== JJ && (this._environmentTexture = JJ, this.onEnvironmentTextureChangedObservable.notifyObservers(JJ), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let JJ = [];
        JJ = JJ.concat(this.meshes), JJ = JJ.concat(this.lights), JJ = JJ.concat(this.cameras), JJ = JJ.concat(this.transformNodes);
        for (const cJ of this.skeletons) JJ = JJ.concat(cJ.bones);
        return JJ
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(JJ) {
        this._animationPropertiesOverride = JJ
      }
      set onDispose(JJ) {
        this._onDisposeObserver && this.Sy.remove(this._onDisposeObserver), this._onDisposeObserver = this.Sy.add(JJ)
      }
      set beforeRender(JJ) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), JJ && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(JJ))
      }
      set afterRender(JJ) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), JJ && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(JJ))
      }
      set beforeCameraRender(JJ) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(JJ)
      }
      set afterCameraRender(JJ) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(JJ)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(JJ) {
        this._pointerPickingConfiguration.pointerDownPredicate = JJ
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(JJ) {
        this._pointerPickingConfiguration.pointerUpPredicate = JJ
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(JJ) {
        this._pointerPickingConfiguration.pointerMovePredicate = JJ
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(JJ) {
        this._pointerPickingConfiguration.pointerDownFastCheck = JJ
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(JJ) {
        this._pointerPickingConfiguration.pointerUpFastCheck = JJ
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(JJ) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = JJ
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(JJ) {
        this._pointerPickingConfiguration.skipPointerMovePicking = JJ
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(JJ) {
        this._pointerPickingConfiguration.skipPointerDownPicking = JJ
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(JJ) {
        this._pointerPickingConfiguration.skipPointerUpPicking = JJ
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return CJ.DragMovementThreshold
      }
      static set DragMovementThreshold(JJ) {
        CJ.DragMovementThreshold = JJ
      }
      static get LongPressDelay() {
        return CJ.LongPressDelay
      }
      static set LongPressDelay(JJ) {
        CJ.LongPressDelay = JJ
      }
      static get DoubleClickDelay() {
        return CJ.DoubleClickDelay
      }
      static set DoubleClickDelay(JJ) {
        CJ.DoubleClickDelay = JJ
      }
      static get ExclusiveDoubleClickMode() {
        return CJ.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(JJ) {
        CJ.ExclusiveDoubleClickMode = JJ
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? YJ.j.ZeroReadOnly
      }
      bindEyePosition(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = this._eyePosition,
          UJ = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          eJ = this.floatingOriginOffset,
          XJ = ZZ.set(FJ.x, FJ.y, FJ.z, UJ ? -1 : 1),
          AJ = XJ.subtractFromFloatsToRef(eJ.x, eJ.y, eJ.z, 0, FZ);
        return JJ && (ZJ ? JJ.setFloat3(cJ, AJ.x, AJ.y, AJ.z) : JJ.setVector4(cJ, AJ)), XJ
      }
      finalizeSceneUbo() {
        const JJ = this.getSceneUniformBuffer(),
          cJ = this.bindEyePosition(null),
          ZJ = this.floatingOriginOffset;
        return JJ.updateFloat4("vEyePosition", cJ.x - ZJ.x, cJ.y - ZJ.y, cJ.z - ZJ.z, cJ.w), JJ.update(), JJ
      }
      set useRightHandedSystem(JJ) {
        this._useRightHandedSystem !== JJ && (this._useRightHandedSystem = JJ, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(JJ) {
        this._currentStepId = JJ
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(JJ) {
        this._fogEnabled !== JJ && (this._fogEnabled = JJ, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(JJ) {
        this._fogMode !== JJ && (this._fogMode = JJ, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(JJ) {
        this._shadowsEnabled !== JJ && (this._shadowsEnabled = JJ, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(JJ) {
        this._lightsEnabled !== JJ && (this._lightsEnabled = JJ, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(JJ) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), JJ && (this._unObserveActiveCameras = (0, tJ.k)(JJ, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = JJ
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(JJ) {
        JJ !== this._activeCamera && (this._activeCamera = JJ, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return eZ.DefaultMaterialFactory !== eZ._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = eZ.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(JJ) {
        this._defaultMaterial = JJ
      }
      set texturesEnabled(JJ) {
        this._texturesEnabled !== JJ && (this._texturesEnabled = JJ, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(JJ) {
        if (this._frameGraph) return this._frameGraph = JJ, void(JJ || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = JJ, JJ && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(JJ) {
        this._skeletonsEnabled !== JJ && (this._skeletonsEnabled = JJ, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = eZ.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const JJ of this._transientComponents) JJ.register();
          this._transientComponents.length = 0
        }
      }
      pZJ(JJ) {
        this._components.push(JJ), this._transientComponents.push(JJ);
        const cJ = JJ;
        cJ.addFromContainer && cJ.serialize && this._serializableComponents.push(cJ)
      }
      _getComponent(JJ) {
        for (const cJ of this._components)
          if (cJ.name === JJ) return cJ;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(JJ, cJ) {
        this._inputManager = new CJ(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new iJ.f(.2, .2, .3, 1), this.onClearColorChangedObservable = new XJ.c, this.ambientColor = new iJ.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new XJ.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.lE = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Sy = new XJ.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new XJ.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new XJ.c, this.onAfterRenderCameraObservable = new XJ.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new XJ.c, this.onAfterAnimationsObservable = new XJ.c, this.onBeforeDrawPhaseObservable = new XJ.c, this.onAfterDrawPhaseObservable = new XJ.c, this.onReadyObservable = new XJ.c, this.onBeforeCameraRenderObservable = new XJ.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new XJ.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new XJ.c, this.onAfterActiveMeshesEvaluationObservable = new XJ.c, this.onBeforeParticlesRenderingObservable = new XJ.c, this.onAfterParticlesRenderingObservable = new XJ.c, this.onDataLoadedObservable = new XJ.c, this.onNewCameraAddedObservable = new XJ.c, this.onCameraRemovedObservable = new XJ.c, this.onNewLightAddedObservable = new XJ.c, this.onLightRemovedObservable = new XJ.c, this.onNewGeometryAddedObservable = new XJ.c, this.onGeometryRemovedObservable = new XJ.c, this.onNewTransformNodeAddedObservable = new XJ.c, this.onTransformNodeRemovedObservable = new XJ.c, this.onNewMeshAddedObservable = new XJ.c, this.onMeshRemovedObservable = new XJ.c, this.onNewSkeletonAddedObservable = new XJ.c, this.onSkeletonRemovedObservable = new XJ.c, this.onNewParticleSystemAddedObservable = new XJ.c, this.onParticleSystemRemovedObservable = new XJ.c, this.onNewAnimationGroupAddedObservable = new XJ.c, this.onAnimationGroupRemovedObservable = new XJ.c, this.onNewMaterialAddedObservable = new XJ.c, this.onNewMultiMaterialAddedObservable = new XJ.c, this.onMaterialRemovedObservable = new XJ.c, this.onMultiMaterialRemovedObservable = new XJ.c, this.onNewTextureAddedObservable = new XJ.c, this.onTextureRemovedObservable = new XJ.c, this.onNewFrameGraphAddedObservable = new XJ.c, this.onFrameGraphRemovedObservable = new XJ.c, this.onNewObjectRendererAddedObservable = new XJ.c, this.onObjectRendererRemovedObservable = new XJ.c, this.onNewPostProcessAddedObservable = new XJ.c, this.onPostProcessRemovedObservable = new XJ.c, this.onNewEffectLayerAddedObservable = new XJ.c, this.onEffectLayerRemovedObservable = new XJ.c, this.onBeforeRenderTargetsRenderObservable = new XJ.c, this.onAfterRenderTargetsRenderObservable = new XJ.c, this.onBeforeStepObservable = new XJ.c, this.onAfterStepObservable = new XJ.c, this.onActiveCameraChanged = new XJ.c, this.onActiveCamerasChanged = new XJ.c, this.onBeforeRenderingGroupObservable = new XJ.c, this.onAfterRenderingGroupObservable = new XJ.c, this.onMeshImportedObservable = new XJ.c, this.onAnimationFileImportedObservable = new XJ.c, this.onEnvironmentTextureChangedObservable = new XJ.c, this.onMeshUnderPointerUpdatedObservable = new XJ.c, this._registeredForLateAnimationBindings = new AJ.b(256), this._pointerPickingConfiguration = new oJ, this.onPrePointerObservable = new XJ.c, this.onPointerObservable = new XJ.c, this.onPreKeyboardObservable = new XJ.c, this.onKeyboardObservable = new XJ.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = eZ.FOGMODE_NONE, this.fogColor = new iJ.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.iW = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new YJ.j(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new AJ.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new uJ.b, this._activeIndices = new uJ.b, this._activeParticles = new uJ.b, this._activeBones = new uJ.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new AJ.c(256), this._processedMaterials = new AJ.c(256), this._renderTargets = new AJ.b(256), this._materialsRenderTargets = new AJ.b(256), this._activeParticleSystems = new AJ.c(256), this._activeSkeletons = new AJ.b(32), this._softwareSkinnedMeshes = new AJ.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = YJ.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = rJ.d.Create(), this._beforeClearStage = rJ.d.Create(), this._beforeRenderTargetClearStage = rJ.d.Create(), this._gatherRenderTargetsStage = rJ.d.Create(), this._gatherActiveCameraRenderTargetsStage = rJ.d.Create(), this._isReadyForMeshStage = rJ.d.Create(), this._beforeEvaluateActiveMeshStage = rJ.d.Create(), this._evaluateSubMeshStage = rJ.d.Create(), this._preActiveMeshStage = rJ.d.Create(), this._cameraDrawRenderTargetStage = rJ.d.Create(), this._beforeCameraDrawStage = rJ.d.Create(), this._beforeRenderTargetDrawStage = rJ.d.Create(), this._beforeRenderingGroupDrawStage = rJ.d.Create(), this._beforeRenderingMeshStage = rJ.d.Create(), this._afterRenderingMeshStage = rJ.d.Create(), this._afterRenderingGroupDrawStage = rJ.d.Create(), this._afterCameraDrawStage = rJ.d.Create(), this._afterCameraPostProcessStage = rJ.d.Create(), this._afterRenderTargetDrawStage = rJ.d.Create(), this._afterRenderTargetPostProcessStage = rJ.d.Create(), this._afterRenderStage = rJ.d.Create(), this._pointerMoveStage = rJ.d.Create(), this._pointerDownStage = rJ.d.Create(), this._pointerUpStage = rJ.d.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new XJ.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const ZJ = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...cJ
        };
        this.defaultCameraLayerMask = ZJ.defaultCameraLayerMask, this.defaultRenderableLayerMask = ZJ.defaultRenderableLayerMask, JJ = this._engine = JJ || mJ.c.LastCreatedEngine, ZJ.virtual ? JJ._virtualScenes.push(this) : (mJ.c._LastCreatedScene = this, JJ.scenes.push(this)), (JJ.getCreationOptions().useLargeWorldRendering || cJ?.useFloatingOrigin) && ((0, fJ.d)(), this._floatingOriginScene = this, fJ.c.Qy = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new xJ.b(this), GJ.d && (this.postProcessManager = new GJ.d(this)), (0, vJ.i)() && this.attachControl(), this._createUbo(), hJ.e && (this._imageProcessingConfiguration = new hJ.e), this.setDefaultCandidateProviders(), ZJ.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = ZJ.useMaterialMeshMap, this.useClonedMeshMap = ZJ.useClonedMeshMap, cJ && cJ.virtual || JJ.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(JJ) {
        return this._defaultSubMeshCandidates.data = JJ.aE, this._defaultSubMeshCandidates.length = JJ.aE.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = JJ => this._getDefaultSubMeshCandidates(JJ), this.getIntersectingSubMeshCandidates = (JJ, cJ) => this._getDefaultSubMeshCandidates(JJ), this.getCollidingSubMeshCandidates = (JJ, cJ) => this._getDefaultSubMeshCandidates(JJ)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(JJ) {
        this._inputManager.pointerX = JJ
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(JJ) {
        this._inputManager.pointerY = JJ
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
      isCachedMaterialInvalid(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== cJ || this._cachedMaterial !== JJ || this._cachedVisibility !== ZJ
      }
      gn() {
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
      simulatePointerMove(JJ, cJ) {
        return this._inputManager.simulatePointerMove(JJ, cJ), this
      }
      simulatePointerDown(JJ, cJ) {
        return this._inputManager.simulatePointerDown(JJ, cJ), this
      }
      simulatePointerUp(JJ, cJ, ZJ) {
        return this._inputManager.simulatePointerUp(JJ, cJ, ZJ), this
      }
      isPointerCaptured() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(JJ)
      }
      attachControl() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(JJ, cJ, ZJ)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let JJ, cJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const ZJ = this.gn(),
          FJ = ZJ.currentRenderPassId;
        ZJ.currentRenderPassId = this.activeCamera?.renderPassId ?? FJ;
        let UJ = !0;
        for (this._pendingData.length > 0 && (UJ = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && UJ && (UJ = this.depthPeelingRenderer.isReady()), cJ && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), JJ = 0; JJ < this.meshes.length; JJ++) {
          const FJ = this.meshes[JJ];
          if (!FJ.aE || 0 === FJ.aE.length) continue;
          if (!FJ.isReady(!0)) {
            UJ = !1;
            continue
          }
          const eJ = FJ.hasThinInstances || "InstancedMesh" === FJ.getClassName() || "InstancedLinesMesh" === FJ.getClassName() || ZJ.getCaps().instancedArrays && FJ.instances.length > 0;
          for (let JJ = 0, cJ = this._isReadyForMeshStage; JJ < cJ.length; JJ++) {
            cJ[JJ].action(FJ, eJ) || (UJ = !1)
          }
          if (!cJ) continue;
          const XJ = FJ.material || this.defaultMaterial;
          if (XJ)
            if (XJ._storeEffectOnSubMeshes)
              for (const JJ of FJ.aE) {
                const cJ = JJ.dn();
                cJ && cJ.hasRenderTargetTextures && null != cJ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(cJ) && (this._processedMaterials.push(cJ), this._materialsRenderTargets.concatWithNoDuplicate(cJ.getRenderTargetTextures()))
              } else XJ.hasRenderTargetTextures && null != XJ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(XJ) && (this._processedMaterials.push(XJ), this._materialsRenderTargets.concatWithNoDuplicate(XJ.getRenderTargetTextures()))
        }
        if (cJ) {
          for (JJ = 0; JJ < this._materialsRenderTargets.length; ++JJ) {
            this._materialsRenderTargets.data[JJ].isReadyForRendering() || (UJ = !1)
          }
          for (JJ = 0; JJ < this.customRenderTargets.length; ++JJ) {
            this.customRenderTargets[JJ].isReadyForRendering() || (UJ = !1)
          }
        }
        for (JJ = 0; JJ < this.geometries.length; JJ++) {
          2 === this.geometries[JJ].delayLoadState && (UJ = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const eJ of this.activeCameras) eJ.isReady(!0) || (UJ = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (UJ = !1));
        for (const eJ of this.lE) eJ.isReady() || (UJ = !1);
        if (this.proceduralTexturesEnabled)
          for (const eJ of this.proceduralTextures) eJ.isReady() || (UJ = !1);
        if (this.layers)
          for (const eJ of this.layers) eJ.isReady() || (UJ = !1);
        if (this.effectLayers)
          for (const eJ of this.effectLayers) eJ.isLayerReady() || (UJ = !1);
        for (const eJ of this._isReadyChecks) eJ.isReady() || (UJ = !1);
        return ZJ.areAllEffectsReady() || (UJ = !1), ZJ.currentRenderPassId = FJ, UJ
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(JJ) {
        this.onBeforeRenderObservable.add(JJ)
      }
      unregisterBeforeRender(JJ) {
        this.onBeforeRenderObservable.removeCallback(JJ)
      }
      registerAfterRender(JJ) {
        this.onAfterRenderObservable.add(JJ)
      }
      unregisterAfterRender(JJ) {
        this.onAfterRenderObservable.removeCallback(JJ)
      }
      _executeOnceBeforeRender(JJ) {
        const cJ = () => {
          JJ(), setTimeout((() => {
            this.unregisterBeforeRender(cJ)
          }))
        };
        this.registerBeforeRender(cJ)
      }
      executeOnceBeforeRender(JJ, cJ) {
        void 0 !== cJ ? setTimeout((() => {
          this._executeOnceBeforeRender(JJ)
        }), cJ) : this._executeOnceBeforeRender(JJ)
      }
      addPendingData(JJ) {
        this._pendingData.push(JJ)
      }
      removePendingData(JJ) {
        const cJ = this.isLoading,
          ZJ = this._pendingData.indexOf(JJ); - 1 !== ZJ && this._pendingData.splice(ZJ, 1), cJ && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(JJ) {
        -1 === this._isReadyChecks.indexOf(JJ) && this._isReadyChecks.push(JJ)
      }
      removeIsReadyCheck(JJ) {
        const cJ = this._isReadyChecks.indexOf(JJ); - 1 !== cJ && this._isReadyChecks.splice(cJ, 1)
      }
      executeWhenReady(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(JJ), null === this._executeWhenReadyTimeoutId && this._checkIsReady(cJ)
      }
      async whenReadyAsync() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((cJ => {
          this.executeWhenReady((() => {
            cJ()
          }), JJ)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = eJ.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && eJ.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(JJ)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(JJ)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = eJ.c.Now
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
      setTransformMatrix(JJ, cJ, ZJ, FJ) {
        this._multiviewSceneUboIsActive = !!(ZJ && FJ && this._multiviewSceneUbo), this._viewUpdateFlag === JJ.updateFlag && this._projectionUpdateFlag === cJ.updateFlag || (this._viewUpdateFlag = JJ.updateFlag, this._projectionUpdateFlag = cJ.updateFlag, this._viewMatrix = JJ, this._projectionMatrix = cJ, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new YJ.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? RJ.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = RJ.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(ZJ, FJ) : this._sceneUbo.useUbo && (this._sceneUbo.Y5("viewProjection", this._transformMatrix), this._sceneUbo.Y5("view", this._viewMatrix), this._sceneUbo.Y5("projection", this._projectionMatrix), this._sceneUbo.Y5("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(JJ, cJ) {
        const ZJ = "boolean" === typeof cJ ? cJ : cJ?.trackUBOsInFrame,
          FJ = new DJ.e(this._engine, void 0, !1, JJ ?? "iG", void 0, ZJ);
        return FJ.addUniform("viewProjection", 16), FJ.addUniform("view", 16), FJ.addUniform("projection", 16), FJ.addUniform("vEyePosition", 4), FJ.addUniform("inverseProjection", 16), FJ
      }
      setSceneUniformBuffer(JJ) {
        this._sceneUbo = JJ, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : YJ.j.ZeroReadOnly
      }
      getUniqueId() {
        return LJ.UniqueId
      }
      BZJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(JJ), JJ._resyncLightSources(), JJ.parent || JJ._addToSceneRootNodes(), UJ.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(JJ)
          })), cJ)) {
          const cJ = JJ.getChildMeshes();
          for (const JJ of cJ) this.BZJ(JJ)
        }
      }
      kS(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this.meshes.indexOf(JJ);
        if (-1 !== ZJ && (this.meshes.splice(ZJ, 1), JJ.parent || JJ._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(JJ), this.onMeshRemovedObservable.notifyObservers(JJ), cJ) {
          const cJ = JJ.getChildMeshes();
          for (const JJ of cJ) this.kS(JJ)
        }
        return ZJ
      }
      addTransformNode(JJ) {
        this._blockEntityCollection || JJ.Qy() === this && -1 !== JJ._indexInSceneTransformNodesArray || (JJ._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(JJ), JJ.parent || JJ._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(JJ))
      }
      removeTransformNode(JJ) {
        const cJ = JJ._indexInSceneTransformNodesArray;
        if (-1 !== cJ) {
          if (cJ !== this.transformNodes.length - 1) {
            const JJ = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[cJ] = JJ, JJ._indexInSceneTransformNodesArray = cJ
          }
          JJ._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), JJ.parent || JJ._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(JJ), cJ
      }
      removeSkeleton(JJ) {
        const cJ = this.skeletons.indexOf(JJ);
        return -1 !== cJ && (this.skeletons.splice(cJ, 1), this.onSkeletonRemovedObservable.notifyObservers(JJ), this._executeActiveContainerCleanup(this._activeSkeletons)), cJ
      }
      removeMorphTargetManager(JJ) {
        const cJ = this.morphTargetManagers.indexOf(JJ);
        return -1 !== cJ && this.morphTargetManagers.splice(cJ, 1), cJ
      }
      removeLight(JJ) {
        const cJ = this.lights.indexOf(JJ);
        if (-1 !== cJ) {
          for (const cJ of this.meshes) cJ._removeLightSource(JJ, !1);
          this.lights.splice(cJ, 1), this.sortLightsByPriority(), JJ.parent || JJ._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(JJ)
        }
        return cJ
      }
      removeCamera(JJ) {
        const cJ = this.cameras.indexOf(JJ);
        if (-1 !== cJ && (this.cameras.splice(cJ, 1), JJ.parent || JJ._removeFromSceneRootNodes()), this.activeCameras) {
          const cJ = this.activeCameras.indexOf(JJ); - 1 !== cJ && this.activeCameras.splice(cJ, 1)
        }
        return this.activeCamera === JJ && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(JJ), cJ
      }
      removeParticleSystem(JJ) {
        const cJ = this.lE.indexOf(JJ);
        return -1 !== cJ && (this.lE.splice(cJ, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(JJ), cJ
      }
      removeAnimation(JJ) {
        const cJ = this.animations.indexOf(JJ);
        return -1 !== cJ && this.animations.splice(cJ, 1), cJ
      }
      stopAnimation(JJ, cJ, ZJ) {}
      removeAnimationGroup(JJ) {
        const cJ = this.animationGroups.indexOf(JJ);
        return -1 !== cJ && this.animationGroups.splice(cJ, 1), this.onAnimationGroupRemovedObservable.notifyObservers(JJ), cJ
      }
      removeMultiMaterial(JJ) {
        const cJ = this.multiMaterials.indexOf(JJ);
        return -1 !== cJ && this.multiMaterials.splice(cJ, 1), this.onMultiMaterialRemovedObservable.notifyObservers(JJ), cJ
      }
      removeMaterial(JJ) {
        const cJ = JJ._indexInSceneMaterialArray;
        if (-1 !== cJ && cJ < this.materials.length) {
          if (cJ !== this.materials.length - 1) {
            const JJ = this.materials[this.materials.length - 1];
            this.materials[cJ] = JJ, JJ._indexInSceneMaterialArray = cJ
          }
          JJ._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(JJ), cJ
      }
      removeActionManager(JJ) {
        const cJ = this.actionManagers.indexOf(JJ);
        return -1 !== cJ && this.actionManagers.splice(cJ, 1), cJ
      }
      removeTexture(JJ) {
        const cJ = this.textures.indexOf(JJ);
        return -1 !== cJ && this.textures.splice(cJ, 1), this.onTextureRemovedObservable.notifyObservers(JJ), cJ
      }
      removeFrameGraph(JJ) {
        const cJ = this.frameGraphs.indexOf(JJ);
        return -1 !== cJ && this.frameGraphs.splice(cJ, 1), this.onFrameGraphRemovedObservable.notifyObservers(JJ), cJ
      }
      removeObjectRenderer(JJ) {
        const cJ = this.objectRenderers.indexOf(JJ);
        return -1 !== cJ && this.objectRenderers.splice(cJ, 1), this.onObjectRendererRemovedObservable.notifyObservers(JJ), cJ
      }
      removePostProcess(JJ) {
        const cJ = this.postProcesses.indexOf(JJ);
        return -1 !== cJ && this.postProcesses.splice(cJ, 1), this.onPostProcessRemovedObservable.notifyObservers(JJ), cJ
      }
      removeEffectLayer(JJ) {
        const cJ = this.effectLayers.indexOf(JJ);
        return -1 !== cJ && this.effectLayers.splice(cJ, 1), this.onEffectLayerRemovedObservable.notifyObservers(JJ), cJ
      }
      addLight(JJ) {
        if (!this._blockEntityCollection) {
          this.lights.push(JJ), this.sortLightsByPriority(), JJ.parent || JJ._addToSceneRootNodes();
          for (const cJ of this.meshes) - 1 === cJ.lightSources.indexOf(JJ) && (cJ.lightSources.push(JJ), cJ._resyncLightSources());
          UJ.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(JJ)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(BJ.d.CompareLightsPriority)
      }
      addCamera(JJ) {
        this._blockEntityCollection || (this.cameras.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(JJ)
        })), JJ.parent || JJ._addToSceneRootNodes())
      }
      addSkeleton(JJ) {
        this._blockEntityCollection || (this.skeletons.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(JJ)
        })))
      }
      addParticleSystem(JJ) {
        this._blockEntityCollection || (this.lE.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(JJ)
        })))
      }
      addAnimation(JJ) {
        this._blockEntityCollection || this.animations.push(JJ)
      }
      addAnimationGroup(JJ) {
        this._blockEntityCollection || (this.animationGroups.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(JJ)
        })))
      }
      addMultiMaterial(JJ) {
        this._blockEntityCollection || (this.multiMaterials.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(JJ)
        })))
      }
      addMaterial(JJ) {
        this._blockEntityCollection || JJ.Qy() === this && -1 !== JJ._indexInSceneMaterialArray || (JJ._indexInSceneMaterialArray = this.materials.length, this.materials.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(JJ)
        })))
      }
      addMorphTargetManager(JJ) {
        this._blockEntityCollection || this.morphTargetManagers.push(JJ)
      }
      addGeometry(JJ) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[JJ.uniqueId] = this.geometries.length), this.geometries.push(JJ))
      }
      addActionManager(JJ) {
        this.actionManagers.push(JJ)
      }
      addTexture(JJ) {
        this._blockEntityCollection || (this.textures.push(JJ), this.onNewTextureAddedObservable.notifyObservers(JJ))
      }
      addFrameGraph(JJ) {
        this.frameGraphs.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(JJ)
        }))
      }
      addObjectRenderer(JJ) {
        this.objectRenderers.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(JJ)
        }))
      }
      addPostProcess(JJ) {
        this._blockEntityCollection || (this.postProcesses.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(JJ)
        })))
      }
      addEffectLayer(JJ) {
        this._blockEntityCollection || (this.effectLayers.push(JJ), UJ.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(JJ)
        })))
      }
      switchActiveCamera(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = JJ, cJ && JJ.attachControl())
      }
      setActiveCameraById(JJ) {
        const cJ = this.getCameraById(JJ);
        return cJ ? (this.activeCamera = cJ, cJ) : null
      }
      setActiveCameraByName(JJ) {
        const cJ = this.getCameraByName(JJ);
        return cJ ? (this.activeCamera = cJ, cJ) : null
      }
      getAnimationGroupByName(JJ) {
        for (let cJ = 0; cJ < this.animationGroups.length; cJ++)
          if (this.animationGroups[cJ].name === JJ) return this.animationGroups[cJ];
        return null
      }
      _getMaterial(JJ, cJ) {
        for (let ZJ = 0; ZJ < this.materials.length; ZJ++) {
          const JJ = this.materials[ZJ];
          if (cJ(JJ)) return JJ
        }
        if (JJ)
          for (let ZJ = 0; ZJ < this.multiMaterials.length; ZJ++) {
            const JJ = this.multiMaterials[ZJ];
            if (cJ(JJ)) return JJ
          }
        return null
      }
      getMaterialByUniqueID(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(JJ, cJ)
      }
      getMaterialByUniqueId(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(cJ, (cJ => cJ.uniqueId === JJ))
      }
      getMaterialById(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(cJ, (cJ => cJ.id === JJ))
      }
      getMaterialByName(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(cJ, (cJ => cJ.name === JJ))
      }
      getLastMaterialById(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let ZJ = this.materials.length - 1; ZJ >= 0; ZJ--)
          if (this.materials[ZJ].id === JJ) return this.materials[ZJ];
        if (cJ)
          for (let ZJ = this.multiMaterials.length - 1; ZJ >= 0; ZJ--)
            if (this.multiMaterials[ZJ].id === JJ) return this.multiMaterials[ZJ];
        return null
      }
      getTextureByUniqueId(JJ) {
        for (let cJ = 0; cJ < this.textures.length; cJ++)
          if (this.textures[cJ].uniqueId === JJ) return this.textures[cJ];
        return null
      }
      getTextureByName(JJ) {
        for (let cJ = 0; cJ < this.textures.length; cJ++)
          if (this.textures[cJ].name === JJ) return this.textures[cJ];
        return null
      }
      getCameraById(JJ) {
        for (let cJ = 0; cJ < this.cameras.length; cJ++)
          if (this.cameras[cJ].id === JJ) return this.cameras[cJ];
        return null
      }
      getCameraByUniqueId(JJ) {
        for (let cJ = 0; cJ < this.cameras.length; cJ++)
          if (this.cameras[cJ].uniqueId === JJ) return this.cameras[cJ];
        return null
      }
      getCameraByName(JJ) {
        for (let cJ = 0; cJ < this.cameras.length; cJ++)
          if (this.cameras[cJ].name === JJ) return this.cameras[cJ];
        return null
      }
      getBoneById(JJ) {
        for (let cJ = 0; cJ < this.skeletons.length; cJ++) {
          const ZJ = this.skeletons[cJ];
          for (let cJ = 0; cJ < ZJ.bones.length; cJ++)
            if (ZJ.bones[cJ].id === JJ) return ZJ.bones[cJ]
        }
        return null
      }
      getBoneByName(JJ) {
        for (let cJ = 0; cJ < this.skeletons.length; cJ++) {
          const ZJ = this.skeletons[cJ];
          for (let cJ = 0; cJ < ZJ.bones.length; cJ++)
            if (ZJ.bones[cJ].name === JJ) return ZJ.bones[cJ]
        }
        return null
      }
      getLightByName(JJ) {
        for (let cJ = 0; cJ < this.lights.length; cJ++)
          if (this.lights[cJ].name === JJ) return this.lights[cJ];
        return null
      }
      getLightById(JJ) {
        for (let cJ = 0; cJ < this.lights.length; cJ++)
          if (this.lights[cJ].id === JJ) return this.lights[cJ];
        return null
      }
      getLightByUniqueId(JJ) {
        for (let cJ = 0; cJ < this.lights.length; cJ++)
          if (this.lights[cJ].uniqueId === JJ) return this.lights[cJ];
        return null
      }
      getParticleSystemById(JJ) {
        for (let cJ = 0; cJ < this.lE.length; cJ++)
          if (this.lE[cJ].id === JJ) return this.lE[cJ];
        return null
      }
      getGeometryById(JJ) {
        for (let cJ = 0; cJ < this.geometries.length; cJ++)
          if (this.geometries[cJ].id === JJ) return this.geometries[cJ];
        return null
      }
      _getGeometryByUniqueId(JJ) {
        if (this._geometriesByUniqueId) {
          const cJ = this._geometriesByUniqueId[JJ];
          if (void 0 !== cJ) return this.geometries[cJ]
        } else
          for (let cJ = 0; cJ < this.geometries.length; cJ++)
            if (this.geometries[cJ].uniqueId === JJ) return this.geometries[cJ];
        return null
      }
      getFrameGraphByName(JJ) {
        for (let cJ = 0; cJ < this.frameGraphs.length; cJ++)
          if (this.frameGraphs[cJ].name === JJ) return this.frameGraphs[cJ];
        return null
      }
      pushGeometry(JJ, cJ) {
        return !(!cJ && this._getGeometryByUniqueId(JJ.uniqueId)) && (this.addGeometry(JJ), UJ.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(JJ)
        })), !0)
      }
      removeGeometry(JJ) {
        let cJ;
        if (this._geometriesByUniqueId) {
          if (cJ = this._geometriesByUniqueId[JJ.uniqueId], void 0 === cJ) return !1
        } else if (cJ = this.geometries.indexOf(JJ), cJ < 0) return !1;
        if (cJ !== this.geometries.length - 1) {
          const JJ = this.geometries[this.geometries.length - 1];
          JJ && (this.geometries[cJ] = JJ, this._geometriesByUniqueId && (this._geometriesByUniqueId[JJ.uniqueId] = cJ))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[JJ.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(JJ), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(JJ) {
        for (let cJ = 0; cJ < this.meshes.length; cJ++)
          if (this.meshes[cJ].id === JJ) return this.meshes[cJ];
        return null
      }
      getMeshesById(JJ) {
        return this.meshes.filter((function(cJ) {
          return cJ.id === JJ
        }))
      }
      getTransformNodeById(JJ) {
        for (let cJ = 0; cJ < this.transformNodes.length; cJ++)
          if (this.transformNodes[cJ].id === JJ) return this.transformNodes[cJ];
        return null
      }
      getTransformNodeByUniqueId(JJ) {
        for (let cJ = 0; cJ < this.transformNodes.length; cJ++)
          if (this.transformNodes[cJ].uniqueId === JJ) return this.transformNodes[cJ];
        return null
      }
      getTransformNodesById(JJ) {
        return this.transformNodes.filter((function(cJ) {
          return cJ.id === JJ
        }))
      }
      getMeshByUniqueId(JJ) {
        for (let cJ = 0; cJ < this.meshes.length; cJ++)
          if (this.meshes[cJ].uniqueId === JJ) return this.meshes[cJ];
        return null
      }
      getLastMeshById(JJ) {
        for (let cJ = this.meshes.length - 1; cJ >= 0; cJ--)
          if (this.meshes[cJ].id === JJ) return this.meshes[cJ];
        return null
      }
      getLastTransformNodeById(JJ) {
        for (let cJ = this.transformNodes.length - 1; cJ >= 0; cJ--)
          if (this.transformNodes[cJ].id === JJ) return this.transformNodes[cJ];
        return null
      }
      getLastEntryById(JJ) {
        let cJ;
        for (cJ = this.meshes.length - 1; cJ >= 0; cJ--)
          if (this.meshes[cJ].id === JJ) return this.meshes[cJ];
        for (cJ = this.transformNodes.length - 1; cJ >= 0; cJ--)
          if (this.transformNodes[cJ].id === JJ) return this.transformNodes[cJ];
        for (cJ = this.cameras.length - 1; cJ >= 0; cJ--)
          if (this.cameras[cJ].id === JJ) return this.cameras[cJ];
        for (cJ = this.lights.length - 1; cJ >= 0; cJ--)
          if (this.lights[cJ].id === JJ) return this.lights[cJ];
        for (cJ = this.skeletons.length - 1; cJ >= 0; cJ--) {
          const ZJ = this.skeletons[cJ];
          for (let cJ = ZJ.bones.length - 1; cJ >= 0; cJ--)
            if (ZJ.bones[cJ].id === JJ) return ZJ.bones[cJ]
        }
        return null
      }
      getNodeById(JJ) {
        const cJ = this.getMeshById(JJ);
        if (cJ) return cJ;
        const ZJ = this.getTransformNodeById(JJ);
        if (ZJ) return ZJ;
        const FJ = this.getLightById(JJ);
        if (FJ) return FJ;
        const UJ = this.getCameraById(JJ);
        if (UJ) return UJ;
        const eJ = this.getBoneById(JJ);
        return eJ || null
      }
      getNodeByName(JJ) {
        const cJ = this.getMeshByName(JJ);
        if (cJ) return cJ;
        const ZJ = this.getTransformNodeByName(JJ);
        if (ZJ) return ZJ;
        const FJ = this.getLightByName(JJ);
        if (FJ) return FJ;
        const UJ = this.getCameraByName(JJ);
        if (UJ) return UJ;
        const eJ = this.getBoneByName(JJ);
        return eJ || null
      }
      getMeshByName(JJ) {
        for (let cJ = 0; cJ < this.meshes.length; cJ++)
          if (this.meshes[cJ].name === JJ) return this.meshes[cJ];
        return null
      }
      getTransformNodeByName(JJ) {
        for (let cJ = 0; cJ < this.transformNodes.length; cJ++)
          if (this.transformNodes[cJ].name === JJ) return this.transformNodes[cJ];
        return null
      }
      getLastSkeletonById(JJ) {
        for (let cJ = this.skeletons.length - 1; cJ >= 0; cJ--)
          if (this.skeletons[cJ].id === JJ) return this.skeletons[cJ];
        return null
      }
      getSkeletonByUniqueId(JJ) {
        for (let cJ = 0; cJ < this.skeletons.length; cJ++)
          if (this.skeletons[cJ].uniqueId === JJ) return this.skeletons[cJ];
        return null
      }
      getSkeletonById(JJ) {
        for (let cJ = 0; cJ < this.skeletons.length; cJ++)
          if (this.skeletons[cJ].id === JJ) return this.skeletons[cJ];
        return null
      }
      getSkeletonByName(JJ) {
        for (let cJ = 0; cJ < this.skeletons.length; cJ++)
          if (this.skeletons[cJ].name === JJ) return this.skeletons[cJ];
        return null
      }
      getMorphTargetManagerById(JJ) {
        for (let cJ = 0; cJ < this.morphTargetManagers.length; cJ++)
          if (this.morphTargetManagers[cJ].uniqueId === JJ) return this.morphTargetManagers[cJ];
        return null
      }
      getMorphTargetById(JJ) {
        for (let cJ = 0; cJ < this.morphTargetManagers.length; ++cJ) {
          const ZJ = this.morphTargetManagers[cJ];
          for (let cJ = 0; cJ < ZJ.numTargets; ++cJ) {
            const FJ = ZJ.getTarget(cJ);
            if (FJ.id === JJ) return FJ
          }
        }
        return null
      }
      getMorphTargetByName(JJ) {
        for (let cJ = 0; cJ < this.morphTargetManagers.length; ++cJ) {
          const ZJ = this.morphTargetManagers[cJ];
          for (let cJ = 0; cJ < ZJ.numTargets; ++cJ) {
            const FJ = ZJ.getTarget(cJ);
            if (FJ.name === JJ) return FJ
          }
        }
        return null
      }
      getPostProcessByName(JJ) {
        for (let cJ = 0; cJ < this.postProcesses.length; ++cJ) {
          const ZJ = this.postProcesses[cJ];
          if (ZJ.name === JJ) return ZJ
        }
        return null
      }
      isActiveMesh(JJ) {
        return -1 !== this._activeMeshes.indexOf(JJ)
      }
      get uid() {
        return this._uid || (this._uid = FJ.j.RandomId()), this._uid
      }
      addExternalData(JJ, cJ) {
        return this._externalData || (this._externalData = new qJ), this._externalData.add(JJ, cJ)
      }
      getExternalData(JJ) {
        return this._externalData ? this._externalData.get(JJ) : null
      }
      getOrAddExternalDataWithFactory(JJ, cJ) {
        return this._externalData || (this._externalData = new qJ), this._externalData.getOrAddWithFactory(JJ, cJ)
      }
      removeExternalData(JJ) {
        return this._externalData.remove(JJ)
      }
      _evaluateSubMesh(JJ, cJ, ZJ, FJ) {
        if (FJ || JJ.isInFrustum(this._frustumPlanes)) {
          for (let FJ = 0, UJ = this._evaluateSubMeshStage; FJ < UJ.length; FJ++) {
            UJ[FJ].action(cJ, JJ)
          }
          const ZJ = JJ.dn();
          null !== ZJ && void 0 !== ZJ && (ZJ.hasRenderTargetTextures && null != ZJ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ZJ) && (this._processedMaterials.push(ZJ), this._materialsRenderTargets.concatWithNoDuplicate(ZJ.getRenderTargetTextures())), this._renderingManager.dispatch(JJ, cJ, ZJ))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(JJ) {
        this._preventFreeActiveMeshesAndRenderingGroups !== JJ && (JJ && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = JJ)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let JJ = 0; JJ < this.activeCameras.length; JJ++) {
            const cJ = this.activeCameras[JJ];
            cJ && cJ._activeMeshes && cJ._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let JJ = 0; JJ < this.textures.length; JJ++) {
            const cJ = this.textures[JJ];
            cJ && cJ.renderList && cJ.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const XJ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const JJ of XJ) JJ.objectRenderer._freezeActiveMeshes(FJ);
          return this._freezeActiveMeshesCancel = (0, UJ.h)((() => {
            let JJ = !0,
              cJ = !0;
            for (const ZJ of XJ) JJ && (JJ = ZJ.objectRenderer._isFrozen), cJ && (cJ = null !== ZJ.objectRenderer._freezeActiveMeshesCancel);
            if (JJ) return !0;
            if (!cJ) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = eJ, this._skipEvaluateActiveMeshesCompletely = JJ, cJ?.()
          }), ((JJ, cJ) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), cJ) {
              const cJ = "Scene: Timeout while waiting for meshes to be frozen.";
              ZJ ? ZJ(cJ) : (JZ.c.Error(cJ), JJ && JZ.c.Error(JJ))
            } else {
              const cJ = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              ZJ ? ZJ(cJ) : (JZ.c.Error(cJ), JJ && (JZ.c.Error(JJ), JJ.stack && JZ.c.Error(JJ.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = eJ, this._skipEvaluateActiveMeshesCompletely = JJ, FJ)
              for (let JJ = 0; JJ < this._activeMeshes.length; JJ++) this._activeMeshes.data[JJ]._freeze();
            cJ && cJ()
          } else ZJ && ZJ("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let JJ = 0; JJ < this.meshes.length; JJ++) {
          const cJ = this.meshes[JJ];
          cJ._internalAbstractMeshDataInfo && (cJ._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const JJ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const cJ of JJ) cJ.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let JJ = 0; JJ < this._activeMeshes.length; JJ++) this._activeMeshes.data[JJ]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(JJ) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => JJ.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const JJ = this._activeMeshes.length;
            for (let cJ = 0; cJ < JJ; cJ++) {
              this._activeMeshes.data[cJ].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const JJ = this._activeParticleSystems.length;
            for (let cJ = 0; cJ < JJ; cJ++) this._activeParticleSystems.data[cJ].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let UJ = 0, eJ = this._beforeEvaluateActiveMeshStage; UJ < eJ.length; UJ++) {
          eJ[UJ].action()
        }
        const JJ = this.getActiveMeshCandidates(),
          cJ = JJ.length,
          ZJ = uJ.b.Enabled,
          FJ = this.customLODSelector;
        for (let UJ = 0; UJ < cJ; UJ++) {
          const cJ = JJ.data[UJ],
            eJ = !FJ && !cJ.Iy && !cJ._internalMeshDataInfo?._LODLevels.length;
          let XJ, AJ;
          if ((eJ || (XJ = cJ._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), XJ ? XJ[1] = -1 : (XJ = [cJ, -1], cJ._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, XJ))), !cJ.isBlocked) && (ZJ && this._totalVertices.addCount(cJ.getTotalVertices(), !1), cJ.isReady() && cJ.isEnabled() && !cJ.GA.hasAZeroComponent)) {
            if (cJ.computeWorldMatrix(), cJ.actionManager && cJ.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(cJ), eJ) AJ = cJ;
            else if (AJ = FJ ? FJ(cJ, this.activeCamera) : cJ.getLOD(this.activeCamera), XJ[0] = AJ, XJ[1] = this._frameId, void 0 === AJ || null === AJ) continue;
            if (AJ !== cJ && 0 !== AJ.billboardMode && AJ.computeWorldMatrix(), cJ._preActivate(), cJ.isVisible && cJ.visibility > 0 && 0 !== (cJ.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || cJ.Hn || cJ.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(cJ), this.activeCamera._activeMeshes.push(cJ), AJ !== cJ && AJ._activate(this._renderId, !1);
              for (let JJ = 0, ZJ = this._preActiveMeshStage; JJ < ZJ.length; JJ++) {
                ZJ[JJ].action(cJ)
              }
              cJ._activate(this._renderId, !1) && (cJ.Iy ? cJ._internalAbstractMeshDataInfo._actAsRegularMesh && (AJ = cJ) : AJ._internalAbstractMeshDataInfo._onlyForInstances = !1, AJ._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(cJ, AJ)), cJ._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let JJ = 0; JJ < this.lE.length; JJ++) {
            const cJ = this.lE[JJ];
            if (!cJ.isStarted() || !cJ.emitter) continue;
            const ZJ = cJ.emitter;
            ZJ.position && !ZJ.isEnabled() || (this._activeParticleSystems.push(cJ), cJ.animate(), this._renderingManager.dispatchParticles(cJ))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(JJ) {
        this._skeletonsEnabled && JJ.skeleton && (this._activeSkeletons.pushNoDuplicate(JJ.skeleton) && (JJ.skeleton.prepare(), this._activeBones.addCount(JJ.skeleton.bones.length, !1)), JJ.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(JJ) && this.frameGraph && JJ.applySkeleton(JJ.skeleton))
      }
      _activeMesh(JJ, cJ) {
        this._prepareSkeleton(cJ);
        let ZJ = JJ.CFJ || JJ.Iy || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || cJ.Hn;
        if (cJ && cJ.aE && cJ.aE.length > 0) {
          const FJ = this.getActiveSubMeshCandidates(cJ),
            UJ = FJ.length;
          ZJ = ZJ || 1 === UJ;
          for (let eJ = 0; eJ < UJ; eJ++) {
            const UJ = FJ.data[eJ];
            this._evaluateSubMesh(UJ, cJ, JJ, ZJ)
          }
        }
      }
      updateTransformMatrix(JJ) {
        const cJ = this.activeCamera;
        if (cJ)
          if (cJ._renderingMultiview) {
            const ZJ = cJ._rigCameras[0],
              FJ = cJ._rigCameras[1];
            this.setTransformMatrix(ZJ.getViewMatrix(), ZJ.getProjectionMatrix(JJ), FJ.getViewMatrix(), FJ.getProjectionMatrix(JJ))
          } else this.setTransformMatrix(cJ.getViewMatrix(), cJ.getProjectionMatrix(JJ))
      }
      _bindFrameBuffer(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (JJ && JJ._multiviewTexture ? JJ._multiviewTexture._bindFrameBuffer() : JJ && JJ.outputRenderTarget ? JJ.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), cJ && this._clearFrameBuffer(JJ)
      }
      _clearFrameBuffer(JJ) {
        if (JJ && JJ._multiviewTexture);
        else if (JJ && JJ.outputRenderTarget && !JJ._renderingMultiview) {
          const cJ = JJ.outputRenderTarget;
          cJ.onClearObservable.hasObservers() ? cJ.onClearObservable.notifyObservers(this._engine) : cJ.skipInitialClear || JJ.isRightCamera || (this.autoClear && this._engine.clear(cJ.clearColor || this._clearColor, !cJ._cleared, !0, !0), cJ._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (JJ && JJ._skipRendering) return;
        const UJ = this._engine;
        if (this._activeCamera = JJ, !this.activeCamera) throw new Error("Active camera not set");
        if (UJ.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && ZJ) {
          let cJ = !0;
          JJ._renderingMultiview && JJ.outputRenderTarget && (cJ = JJ.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, JJ.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), JJ._renderingMultiview && JJ.outputRenderTarget && (JJ.outputRenderTarget.skipInitialClear = cJ)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = JJ.outputRenderTarget?.renderPassId ?? JJ.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let FJ = 0; FJ < this._softwareSkinnedMeshes.length; FJ++) {
          const JJ = this._softwareSkinnedMeshes.data[FJ];
          JJ.applySkeleton(JJ.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), JJ.customRenderTargets && JJ.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(JJ.customRenderTargets), cJ && cJ.customRenderTargets && cJ.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(cJ.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let FJ = 0, AJ = this._gatherActiveCameraRenderTargetsStage; FJ < AJ.length; FJ++) {
          AJ[FJ].action(this._renderTargets)
        }
        let eJ = !1;
        if (this.renderTargetsEnabled) {
          let JJ;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            FJ.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const cJ = this.getBoundingBoxRenderer?.();
            for (let ZJ = 0; ZJ < this._renderTargets.length; ZJ++) {
              const FJ = this._renderTargets.data[ZJ];
              if (FJ._shouldRender()) {
                this._renderId++;
                const ZJ = FJ.activeCamera && FJ.activeCamera !== this.activeCamera;
                cJ && !JJ && (JJ = cJ.renderList.length > 0 ? cJ.renderList.data.slice() : [], JJ.length = cJ.renderList.length), FJ.render(ZJ, this.dumpNextRenderTargets), eJ = !0
              }
            }
            cJ && JJ && (cJ.renderList.data = JJ, cJ.renderList.length = JJ.length), FJ.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const cJ = this.getBoundingBoxRenderer?.();
            cJ && !JJ && (JJ = cJ.renderList.length > 0 ? cJ.renderList.data.slice() : [], JJ.length = cJ.renderList.length);
            for (let JJ = 0, ZJ = this._cameraDrawRenderTargetStage; JJ < ZJ.length; JJ++) {
              eJ = ZJ[JJ].action(this.activeCamera) || eJ
            }
            cJ && JJ && (cJ.renderList.data = JJ, cJ.renderList.length = JJ.length)
          }
          this._intermediateRendering = !1
        }
        eJ && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || JJ._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let FJ = 0, AJ = this._beforeCameraDrawStage; FJ < AJ.length; FJ++) {
          AJ[FJ].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const XJ = UJ.snapshotRendering && 1 === UJ.snapshotRenderingMode;
        XJ && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !XJ), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let FJ = 0, AJ = this._afterCameraDrawStage; FJ < AJ.length; FJ++) {
          AJ[FJ].action(this.activeCamera)
        }
        if (this.postProcessManager && !JJ._multiviewTexture) {
          const cJ = JJ.outputRenderTarget ? JJ.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(JJ.isIntermediate, cJ)
        }
        for (let FJ = 0, AJ = this._afterCameraPostProcessStage; FJ < AJ.length; FJ++) {
          AJ[FJ].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === JJ.cameraRigMode || JJ._renderingMultiview) return JJ._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(JJ, void 0, cJ), void this.onAfterRenderCameraObservable.notifyObservers(JJ);
        if (JJ._useMultiviewToSingleView) this._renderMultiviewToSingleView(JJ);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(JJ);
          for (let cJ = 0; cJ < JJ._rigCameras.length; cJ++) this._renderForCamera(JJ._rigCameras[cJ], JJ)
        }
        this._activeCamera = JJ, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(JJ)
      }
      _checkIntersections() {
        for (let JJ = 0; JJ < this._meshesForIntersections.length; JJ++) {
          const cJ = this._meshesForIntersections.data[JJ];
          if (cJ.actionManager)
            for (let JJ = 0; cJ.actionManager && JJ < cJ.actionManager.actions.length; JJ++) {
              const ZJ = cJ.actionManager.actions[JJ];
              if (12 === ZJ.trigger || 13 === ZJ.trigger) {
                const JJ = ZJ.getTriggerParameter(),
                  FJ = JJ.mesh ? JJ.mesh : JJ,
                  UJ = FJ.pFJ(cJ, JJ.usePreciseIntersection),
                  eJ = cJ._intersectionsInProgress.indexOf(FJ);
                UJ && -1 === eJ ? 12 === ZJ.trigger ? (ZJ._executeCurrent(nJ.CreateNew(cJ, void 0, FJ)), cJ._intersectionsInProgress.push(FJ)) : 13 === ZJ.trigger && cJ._intersectionsInProgress.push(FJ) : !UJ && eJ > -1 && (13 === ZJ.trigger && ZJ._executeCurrent(nJ.CreateNew(cJ, void 0, FJ)), cJ.actionManager.hasSpecificTrigger(13, (JJ => {
                  const cJ = JJ.mesh ? JJ.mesh : JJ;
                  return FJ === cJ
                })) && 13 !== ZJ.trigger || cJ._intersectionsInProgress.splice(eJ, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(JJ) {}
      _animate(JJ) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let JJ = Math.max(eZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), eZ.MaxDeltaTime)) + this._timeAccumulator;
          const cJ = this._engine.getTimeStep(),
            ZJ = 1e3 / cJ / 1e3;
          let FJ = 0;
          const UJ = this._engine.getLockstepMaxSteps();
          let eJ = Math.floor(JJ / cJ);
          for (eJ = Math.min(eJ, UJ); JJ > 0 && FJ < eJ;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = cJ * ZJ, this._animate(cJ), this.onAfterAnimationsObservable.notifyObservers(this), this.iW && this._advancePhysicsEngineStep(cJ), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, FJ++, JJ -= cJ;
          this._timeAccumulator = JJ < 0 ? 0 : JJ
        } else {
          const JJ = this.useConstantAnimationDeltaTime ? 16 : Math.max(eZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), eZ.MaxDeltaTime));
          this._animationRatio = .06 * JJ, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.iW && this._advancePhysicsEngineStep(JJ)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(JJ) {
        if (JJ?.outputRenderTarget && !JJ?.isRigCamera && (JJ.outputRenderTarget._cleared = !1), JJ?.rigCameras?.length)
          for (let cJ = 0; cJ < JJ.rigCameras.length; ++cJ) {
            const ZJ = JJ.rigCameras[cJ].outputRenderTarget;
            ZJ && (ZJ._cleared = !1)
          }
      }
      resetDrawCache(JJ) {
        if (this.meshes)
          for (const cJ of this.meshes) cJ.resetDrawCache(JJ)
      }
      _renderWithFrameGraph() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, JJ)
          for (const ZJ of this.cameras)
            if (ZJ.update(), 0 !== ZJ.cameraRigMode)
              for (let JJ = 0; JJ < ZJ._rigCameras.length; JJ++) ZJ._rigCameras[JJ].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(cJ)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(JJ) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const cJ = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), FJ.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let JJ = 0; JJ < this._renderTargets.length; JJ++) {
            const ZJ = this._renderTargets.data[JJ],
              FJ = ZJ.activeCamera || cJ;
            this._renderRenderTarget(ZJ, FJ, !0, this.dumpNextRenderTargets)
          }
          FJ.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let ZJ = 0, FJ = this._beforeClearStage; ZJ < FJ.length; ZJ++) {
          FJ[ZJ].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const cJ = this.getActiveMeshCandidates(),
            ZJ = cJ.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let JJ = 0; JJ < ZJ; JJ++) {
                const ZJ = cJ.data[JJ];
                ZJ._internalAbstractMeshDataInfo._wasActiveLastFrame && ZJ.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const JJ = this._activeParticleSystems.length;
              for (let cJ = 0; cJ < JJ; cJ++) this._activeParticleSystems.data[cJ].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let FJ = 0; FJ < ZJ; FJ++) {
              const ZJ = cJ.data[FJ];
              ZJ._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZJ.isBlocked || (this._totalVertices.addCount(ZJ.getTotalVertices(), !1), ZJ.isReady() && ZJ.isEnabled() && !ZJ.GA.hasAZeroComponent && (ZJ.computeWorldMatrix(JJ), ZJ.actionManager && ZJ.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ZJ)))
            }
            if (this.particlesEnabled)
              for (let JJ = 0; JJ < this.lE.length; JJ++) {
                const cJ = this.lE[JJ];
                if (!cJ.isStarted() || !cJ.emitter) continue;
                const ZJ = cJ.emitter;
                ZJ.position && !ZJ.isEnabled() || (this._activeParticleSystems.push(cJ), cJ.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, JJ._shouldRender()) {
          if (this._renderId++, this.activeCamera = cJ, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), JJ.render(ZJ, FJ)
        }
        this._intermediateRendering = !1
      }
      render() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.YZJ) return;
        const ZJ = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(JJ, cJ)
        } finally {
          this._renderingMeshEvaluationDepth = ZJ
        }
      }
      _renderFrame(JJ, cJ) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), fJ.c.Qy = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const ZJ of this.activeCameras) this._checkCameraRenderTarget(ZJ);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), cJ || this.animate();
        for (let ZJ = 0, FJ = this._beforeCameraUpdateStage; ZJ < FJ.length; ZJ++) {
          FJ[ZJ].action()
        }
        if (JJ)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ZJ = 0; ZJ < this.activeCameras.length; ZJ++) {
              const JJ = this.activeCameras[ZJ];
              if (JJ.update(), 0 !== JJ.cameraRigMode)
                for (let cJ = 0; cJ < JJ._rigCameras.length; cJ++) JJ._rigCameras[cJ].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let ZJ = 0; ZJ < this.activeCamera._rigCameras.length; ZJ++) this.activeCamera._rigCameras[ZJ].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(JJ, cJ);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const JJ = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            FJ.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let cJ = 0; cJ < this.customRenderTargets.length; cJ++) {
              const ZJ = this.customRenderTargets[cJ],
                FJ = ZJ.activeCamera || this.activeCamera;
              this._renderRenderTarget(ZJ, FJ, JJ !== FJ, this.dumpNextRenderTargets)
            }
            FJ.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = JJ?.renderPassId ?? 0, this.activeCamera = JJ, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let cJ = 0, ZJ = this._beforeClearStage; cJ < ZJ.length; cJ++) {
            ZJ[cJ].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let cJ = 0, ZJ = this._gatherRenderTargetsStage; cJ < ZJ.length; cJ++) {
            ZJ[cJ].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let cJ = 0; cJ < this.activeCameras.length; cJ++) this._processSubCameras(this.activeCameras[cJ], cJ > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let ZJ = 0, FJ = this._afterRenderStage; ZJ < FJ.length; ZJ++) {
          FJ[ZJ].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let JJ = 0; JJ < this._toBeDisposed.length; JJ++) {
            const cJ = this._toBeDisposed[JJ];
            cJ && cJ.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let JJ = 0; JJ < this.materials.length; JJ++) this.materials[JJ].freeze()
      }
      unfreezeMaterials() {
        for (let JJ = 0; JJ < this.materials.length; JJ++) this.materials[JJ].unfreeze()
      }
      dispose() {
        if (this.YZJ) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, QJ.e)(this.stopAllAnimations)) {
          for (const JJ of this._activeAnimatables) JJ.onAnimationEndObservable.clear(), JJ.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const JJ = this._activeRequests.slice();
        for (const eJ of JJ) eJ.abort();
        this._activeRequests.length = 0;
        try {
          this.Sy.notifyObservers(this)
        } catch (UJ) {
          JZ.c.Error("An error occurred while calling onDisposeObservable!", UJ)
        }
        this.detachControl();
        const cJ = this._engine.getInputElement?.();
        if (cJ)
          for (let eJ = 0; eJ < this.cameras.length; eJ++) this.cameras[eJ].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (JJ => JJ.dispose(!0))), this._disposeList(this.transformNodes, (JJ => JJ.dispose(!0)));
        const ZJ = this.cameras;
        this._disposeList(ZJ), this._disposeList(this.lE), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let FJ = this._engine.scenes.indexOf(this);
        if (FJ > -1 && this._engine.scenes.splice(FJ, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, fJ.f)(), mJ.c._LastCreatedScene === this) {
          mJ.c._LastCreatedScene = null;
          let JJ = mJ.c.Instances.length - 1;
          for (; JJ >= 0;) {
            const cJ = mJ.c.Instances[JJ];
            if (cJ.scenes.length > 0) {
              mJ.c._LastCreatedScene = cJ.scenes[this._engine.scenes.length - 1];
              break
            }
            JJ--
          }
        }
        FJ = this._engine._virtualScenes.indexOf(this), FJ > -1 && this._engine._virtualScenes.splice(FJ, 1), this._engine.wipeCaches(!0), this.Sy.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(JJ, cJ) {
        const ZJ = JJ.slice(0);
        cJ = cJ ?? (JJ => JJ.dispose());
        for (const FJ of ZJ) cJ(FJ);
        JJ.length = 0
      }
      get YZJ() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let JJ = 0; JJ < this.meshes.length; JJ++) {
          const cJ = this.meshes[JJ].geometry;
          cJ && cJ.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const JJ of this.textures) {
          JJ._buffer && (JJ._buffer = null)
        }
      }
      getWorldExtends(JJ) {
        const cJ = new YJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          ZJ = new YJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        JJ = JJ || (() => !0);
        const FJ = this.meshes.filter(JJ);
        for (const UJ of FJ) {
          if (UJ.computeWorldMatrix(!0), !UJ.aE || 0 === UJ.aE.length || UJ.infiniteDistance) continue;
          const JJ = UJ.rM(),
            FJ = JJ.boundingBox.minimumWorld,
            eJ = JJ.boundingBox.maximumWorld;
          YJ.j.CheckExtends(FJ, cJ, ZJ), YJ.j.CheckExtends(eJ, cJ, ZJ)
        }
        return cJ.x === Number.MAX_VALUE ? {
          min: YJ.j.Zero(),
          max: YJ.j.Zero()
        } : {
          min: cJ,
          max: ZJ
        }
      }
      createPickingRay(JJ, cJ, ZJ, FJ) {
        throw (0, QJ.m)("Ray")
      }
      createPickingRayToRef(JJ, cJ, ZJ, FJ, UJ) {
        throw (0, QJ.m)("Ray")
      }
      createPickingRayInCameraSpace(JJ, cJ, ZJ) {
        throw (0, QJ.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(JJ, cJ, ZJ, FJ) {
        throw (0, QJ.m)("Ray")
      }
      PD(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = (0, QJ.m)("Ray", !0);
        return XJ && JZ.c.Warn(XJ), new sJ.e
      }
      pickWithBoundingInfo(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = (0, QJ.m)("Ray", !0);
        return eJ && JZ.c.Warn(eJ), new sJ.e
      }
      pickWithRay(JJ, cJ, ZJ, FJ) {
        throw (0, QJ.m)("Ray")
      }
      multiPick(JJ, cJ, ZJ, FJ, UJ) {
        throw (0, QJ.m)("Ray")
      }
      multiPickWithRay(JJ, cJ, ZJ) {
        throw (0, QJ.m)("Ray")
      }
      setPointerOverMesh(JJ, cJ, ZJ) {
        this._inputManager.setPointerOverMesh(JJ, cJ, ZJ)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const JJ of this.geometries) JJ._rebuild();
        for (const JJ of this.meshes) JJ._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const JJ of this._components) JJ.rebuild();
        for (const JJ of this.lE) JJ.rebuild();
        if (this.spriteManagers)
          for (const JJ of this.spriteManagers) JJ.rebuild()
      }
      _rebuildTextures() {
        for (const JJ of this.textures) JJ._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(JJ, cJ, ZJ) {
        if (void 0 === cJ) return JJ;
        const FJ = [];
        for (const UJ in JJ) {
          const eJ = JJ[UJ];
          jJ.b && jJ.b.MatchesQuery(eJ, cJ) && (!ZJ || ZJ(eJ)) && FJ.push(eJ)
        }
        return FJ
      }
      getMeshesByTags(JJ, cJ) {
        return this._getByTags(this.meshes, JJ, cJ)
      }
      getCamerasByTags(JJ, cJ) {
        return this._getByTags(this.cameras, JJ, cJ)
      }
      getLightsByTags(JJ, cJ) {
        return this._getByTags(this.lights, JJ, cJ)
      }
      getMaterialByTags(JJ, cJ) {
        return this._getByTags(this.materials, JJ, cJ).concat(this._getByTags(this.multiMaterials, JJ, cJ))
      }
      getTransformNodesByTags(JJ, cJ) {
        return this._getByTags(this.transformNodes, JJ, cJ)
      }
      setRenderingOrder(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(JJ, cJ, ZJ, FJ)
      }
      setRenderingAutoClearDepthStencil(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(JJ, cJ, ZJ, FJ)
      }
      getAutoClearDepthStencilSetup(JJ) {
        return this._renderingManager.getAutoClearDepthStencilSetup(JJ)
      }
      _forceBlockMaterialDirtyMechanism(JJ) {
        this._blockMaterialDirtyMechanism = JJ
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(JJ) {
        this._blockMaterialDirtyMechanism !== JJ && (this._blockMaterialDirtyMechanism = JJ, JJ || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(JJ, cJ) {
        if (!this._blockMaterialDirtyMechanism)
          for (const ZJ of this.materials) cJ && !cJ(ZJ) || ZJ.ycJ(JJ)
      }
      _loadFile(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = (0, aJ.k)(JJ, cJ, ZJ, FJ ? this.offlineProvider : void 0, UJ, eJ, XJ);
        return this._activeRequests.push(AJ), AJ.onCompleteObservable.add((JJ => {
          this._activeRequests.splice(this._activeRequests.indexOf(JJ), 1)
        })), AJ
      }
      async _loadFileAsync(JJ, cJ, ZJ, FJ, UJ) {
        return await new Promise(((eJ, XJ) => {
          this._loadFile(JJ, (JJ => {
            eJ(JJ)
          }), cJ, ZJ, FJ, ((JJ, cJ) => {
            XJ(cJ)
          }), UJ)
        }))
      }
      async _loadDelayedFileAsync(JJ, cJ, ZJ) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const FJ = `${JJ}|${cJ?"binary":"string"}`;
        let UJ = this._delayedFileRequests.get(FJ);
        if (!UJ) {
          UJ = cJ ? this._loadFileAsync(JJ, void 0, ZJ, !0) : this._loadFileAsync(JJ, void 0, ZJ, !1);
          const eJ = UJ;
          (async () => {
            try {
              await eJ
            } catch {}
            this._delayedFileRequests?.delete(FJ)
          })(), this._delayedFileRequests.set(FJ, UJ)
        }
        return await UJ
      }
      _requestFile(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = (0, aJ.x)(JJ, cJ, ZJ, FJ ? this.offlineProvider : void 0, UJ, eJ, XJ);
        return this._activeRequests.push(AJ), AJ.onCompleteObservable.add((JJ => {
          this._activeRequests.splice(this._activeRequests.indexOf(JJ), 1)
        })), AJ
      }
      async _requestFileAsync(JJ, cJ, ZJ, FJ, UJ) {
        return await new Promise(((eJ, XJ) => {
          this._requestFile(JJ, (JJ => {
            eJ(JJ)
          }), cJ, ZJ, FJ, (JJ => {
            XJ(JJ)
          }), UJ)
        }))
      }
      _readFile(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = (0, aJ.p)(JJ, cJ, ZJ, FJ, UJ);
        return this._activeRequests.push(eJ), eJ.onCompleteObservable.add((JJ => {
          this._activeRequests.splice(this._activeRequests.indexOf(JJ), 1)
        })), eJ
      }
      async _readFileAsync(JJ, cJ, ZJ) {
        return await new Promise(((FJ, UJ) => {
          this._readFile(JJ, (JJ => {
            FJ(JJ)
          }), cJ, ZJ, (JJ => {
            UJ(JJ)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, QJ.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(JJ) {
        return this.setActiveCameraById(JJ)
      }
      getMaterialByID(JJ) {
        return this.getMaterialById(JJ)
      }
      getLastMaterialByID(JJ) {
        return this.getLastMaterialById(JJ)
      }
      getTextureByUniqueID(JJ) {
        return this.getTextureByUniqueId(JJ)
      }
      getCameraByID(JJ) {
        return this.getCameraById(JJ)
      }
      getCameraByUniqueID(JJ) {
        return this.getCameraByUniqueId(JJ)
      }
      getBoneByID(JJ) {
        return this.getBoneById(JJ)
      }
      getLightByID(JJ) {
        return this.getLightById(JJ)
      }
      getLightByUniqueID(JJ) {
        return this.getLightByUniqueId(JJ)
      }
      getParticleSystemByID(JJ) {
        return this.getParticleSystemById(JJ)
      }
      getGeometryByID(JJ) {
        return this.getGeometryById(JJ)
      }
      getMeshByID(JJ) {
        return this.getMeshById(JJ)
      }
      getMeshByUniqueID(JJ) {
        return this.getMeshByUniqueId(JJ)
      }
      getLastMeshByID(JJ) {
        return this.getLastMeshById(JJ)
      }
      getMeshesByID(JJ) {
        return this.getMeshesById(JJ)
      }
      getTransformNodeByID(JJ) {
        return this.getTransformNodeById(JJ)
      }
      getTransformNodeByUniqueID(JJ) {
        return this.getTransformNodeByUniqueId(JJ)
      }
      getTransformNodesByID(JJ) {
        return this.getTransformNodesById(JJ)
      }
      getNodeByID(JJ) {
        return this.getNodeById(JJ)
      }
      getLastEntryByID(JJ) {
        return this.getLastEntryById(JJ)
      }
      getLastSkeletonByID(JJ) {
        return this.getLastSkeletonById(JJ)
      }
    }
    eZ.FOGMODE_NONE = 0, eZ.FOGMODE_EXP = 1, eZ.FOGMODE_EXP2 = 2, eZ.FOGMODE_LINEAR = 3, eZ.MinDeltaTime = 1, eZ.MaxDeltaTime = 1e3, eZ._OriginalDefaultMaterialFactory = eZ.DefaultMaterialFactory;
    let XZ = !1;

    function AZ() {
      XZ || (XZ = !0, (0, cZ.f)("BABYLON.Scene", eZ))
    }(lJ = eZ.prototype).sortActiveAnimatables ?? (lJ.sortActiveAnimatables = (0, QJ.l)("Scene", "sortActiveAnimatables")), (Jc = eZ.prototype).beginWeightedAnimation ?? (Jc.beginWeightedAnimation = (0, QJ.l)("Scene", "beginWeightedAnimation")), (cc = eZ.prototype).beginAnimation ?? (cc.beginAnimation = (0, QJ.l)("Scene", "beginAnimation")), (Zc = eZ.prototype).beginHierarchyAnimation ?? (Zc.beginHierarchyAnimation = (0, QJ.l)("Scene", "beginHierarchyAnimation")), (Fc = eZ.prototype).beginDirectAnimation ?? (Fc.beginDirectAnimation = (0, QJ.l)("Scene", "beginDirectAnimation")), (Uc = eZ.prototype).beginDirectHierarchyAnimation ?? (Uc.beginDirectHierarchyAnimation = (0, QJ.l)("Scene", "beginDirectHierarchyAnimation")), (ec = eZ.prototype).getAnimatableByTarget ?? (ec.getAnimatableByTarget = (0, QJ.l)("Scene", "getAnimatableByTarget")), (Xc = eZ.prototype).getAllAnimatablesByTarget ?? (Xc.getAllAnimatablesByTarget = (0, QJ.l)("Scene", "getAllAnimatablesByTarget")), (Ac = eZ.prototype).stopAllAnimations ?? (Ac.stopAllAnimations = (0, QJ.l)("Scene", "stopAllAnimations")), (qc = eZ.prototype).getSoundByName ?? (qc.getSoundByName = (0, QJ.l)("Scene", "getSoundByName")), (jc = eZ.prototype).createOrUpdateSelectionOctree ?? (jc.createOrUpdateSelectionOctree = (0, QJ.l)("Scene", "createOrUpdateSelectionOctree")), (Yc = eZ.prototype).createDefaultLight ?? (Yc.createDefaultLight = (0, QJ.l)("Scene", "createDefaultLight")), (hc = eZ.prototype).createDefaultCamera ?? (hc.createDefaultCamera = (0, QJ.l)("Scene", "createDefaultCamera")), (Dc = eZ.prototype).createDefaultCameraOrLight ?? (Dc.createDefaultCameraOrLight = (0, QJ.l)("Scene", "createDefaultCameraOrLight")), (sc = eZ.prototype).createDefaultSkybox ?? (sc.createDefaultSkybox = (0, QJ.l)("Scene", "createDefaultSkybox")), (nc = eZ.prototype).createDefaultEnvironment ?? (nc.createDefaultEnvironment = (0, QJ.l)("Scene", "createDefaultEnvironment")), (Gc = eZ.prototype).createDefaultVRExperience ?? (Gc.createDefaultVRExperience = (0, QJ.l)("Scene", "createDefaultVRExperience")), (fc = eZ.prototype).createDefaultXRExperienceAsync ?? (fc.createDefaultXRExperienceAsync = (0, QJ.l)("Scene", "createDefaultXRExperienceAsync")), (xc = eZ.prototype).getGlowLayerByName ?? (xc.getGlowLayerByName = (0, QJ.l)("Scene", "getGlowLayerByName")), (rc = eZ.prototype).getHighlightLayerByName ?? (rc.getHighlightLayerByName = (0, QJ.l)("Scene", "getHighlightLayerByName")), (vc = eZ.prototype).getSelectionOutlineLayerByName ?? (vc.getSelectionOutlineLayerByName = (0, QJ.l)("Scene", "getSelectionOutlineLayerByName")), (mc = eZ.prototype).removeLensFlareSystem ?? (mc.removeLensFlareSystem = (0, QJ.l)("Scene", "removeLensFlareSystem")), (Qc = eZ.prototype).addLensFlareSystem ?? (Qc.addLensFlareSystem = (0, QJ.l)("Scene", "addLensFlareSystem")), (Ec = eZ.prototype).getLensFlareSystemByName ?? (Ec.getLensFlareSystemByName = (0, QJ.l)("Scene", "getLensFlareSystemByName")), (Vc = eZ.prototype).getLensFlareSystemByID ?? (Vc.getLensFlareSystemByID = (0, QJ.l)("Scene", "getLensFlareSystemByID")), (Kc = eZ.prototype).getLensFlareSystemById ?? (Kc.getLensFlareSystemById = (0, QJ.l)("Scene", "getLensFlareSystemById")), (yc = eZ.prototype).getPhysicsEngine ?? (yc.getPhysicsEngine = (0, QJ.l)("Scene", "getPhysicsEngine")), (Sc = eZ.prototype).enablePhysics ?? (Sc.enablePhysics = (0, QJ.l)("Scene", "enablePhysics")), (Ic = eZ.prototype).disablePhysicsEngine ?? (Ic.disablePhysicsEngine = (0, QJ.l)("Scene", "disablePhysicsEngine")), (Mc = eZ.prototype).isPhysicsEnabled ?? (Mc.isPhysicsEnabled = (0, QJ.l)("Scene", "isPhysicsEnabled")), (bc = eZ.prototype).deleteCompoundImpostor ?? (bc.deleteCompoundImpostor = (0, QJ.l)("Scene", "deleteCompoundImpostor")), (wc = eZ.prototype).removeReflectionProbe ?? (wc.removeReflectionProbe = (0, QJ.l)("Scene", "removeReflectionProbe")), (Wc = eZ.prototype).addReflectionProbe ?? (Wc.addReflectionProbe = (0, QJ.l)("Scene", "addReflectionProbe")), (gc = eZ.prototype).getBoundingBoxRenderer ?? (gc.getBoundingBoxRenderer = (0, QJ.l)("Scene", "getBoundingBoxRenderer")), (Hc = eZ.prototype).enableDepthRenderer ?? (Hc.enableDepthRenderer = (0, QJ.l)("Scene", "enableDepthRenderer")), (Pc = eZ.prototype).disableDepthRenderer ?? (Pc.disableDepthRenderer = (0, QJ.l)("Scene", "disableDepthRenderer")), (kc = eZ.prototype).enableFluidRenderer ?? (kc.enableFluidRenderer = (0, QJ.l)("Scene", "enableFluidRenderer")), (pc = eZ.prototype).disableFluidRenderer ?? (pc.disableFluidRenderer = (0, QJ.l)("Scene", "disableFluidRenderer")), (dc = eZ.prototype).enableGeometryBufferRenderer ?? (dc.enableGeometryBufferRenderer = (0, QJ.l)("Scene", "enableGeometryBufferRenderer")), (zc = eZ.prototype).disableGeometryBufferRenderer ?? (zc.disableGeometryBufferRenderer = (0, QJ.l)("Scene", "disableGeometryBufferRenderer")), (Nc = eZ.prototype).enableIblCdfGenerator ?? (Nc.enableIblCdfGenerator = (0, QJ.l)("Scene", "enableIblCdfGenerator")), (Oc = eZ.prototype).disableIblCdfGenerator ?? (Oc.disableIblCdfGenerator = (0, QJ.l)("Scene", "disableIblCdfGenerator")), (Tc = eZ.prototype).getOutlineRenderer ?? (Tc.getOutlineRenderer = (0, QJ.l)("Scene", "getOutlineRenderer")), (Cc = eZ.prototype).enablePrePassRenderer ?? (Cc.enablePrePassRenderer = (0, QJ.l)("Scene", "enablePrePassRenderer")), (uc = eZ.prototype).disablePrePassRenderer ?? (uc.disablePrePassRenderer = (0, QJ.l)("Scene", "disablePrePassRenderer")), (ic = eZ.prototype).enableSubSurfaceForPrePass ?? (ic.enableSubSurfaceForPrePass = (0, QJ.l)("Scene", "enableSubSurfaceForPrePass")), (Rc = eZ.prototype).disableSubSurfaceForPrePass ?? (Rc.disableSubSurfaceForPrePass = (0, QJ.l)("Scene", "disableSubSurfaceForPrePass")), (Lc = eZ.prototype).pickSprite ?? (Lc.pickSprite = (0, QJ.l)("Scene", "pickSprite")), (ac = eZ.prototype).pickSpriteWithRay ?? (ac.pickSpriteWithRay = (0, QJ.l)("Scene", "pickSpriteWithRay")), (Bc = eZ.prototype).multiPickSprite ?? (Bc.multiPickSprite = (0, QJ.l)("Scene", "multiPickSprite")), (tc = eZ.prototype).multiPickSpriteWithRay ?? (tc.multiPickSpriteWithRay = (0, QJ.l)("Scene", "multiPickSpriteWithRay")), (oc = eZ.prototype).setPointerOverSprite ?? (oc.setPointerOverSprite = (0, QJ.l)("Scene", "setPointerOverSprite")), (lc = eZ.prototype).getPointerOverSprite ?? (lc.getPointerOverSprite = (0, QJ.l)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(eZ.prototype, "mainSoundTrack") || Object.defineProperty(eZ.prototype, "mainSoundTrack", (0, QJ.h)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(eZ.prototype, "soundTracks") || Object.defineProperty(eZ.prototype, "soundTracks", (0, QJ.h)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(eZ.prototype, "audioEnabled") || Object.defineProperty(eZ.prototype, "audioEnabled", (0, QJ.h)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(eZ.prototype, "headphone") || Object.defineProperty(eZ.prototype, "headphone", (0, QJ.h)("Scene", "headphone")), Object.getOwnPropertyDescriptor(eZ.prototype, "audioListenerPositionProvider") || Object.defineProperty(eZ.prototype, "audioListenerPositionProvider", (0, QJ.h)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(eZ.prototype, "audioListenerRotationProvider") || Object.defineProperty(eZ.prototype, "audioListenerRotationProvider", (0, QJ.h)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(eZ.prototype, "audioPositioningRefreshRate") || Object.defineProperty(eZ.prototype, "audioPositioningRefreshRate", (0, QJ.h)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(eZ.prototype, "selectionOctree") || Object.defineProperty(eZ.prototype, "selectionOctree", (0, QJ.h)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(eZ.prototype, "debugLayer") || Object.defineProperty(eZ.prototype, "debugLayer", (0, QJ.h)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(eZ.prototype, "gamepadManager") || Object.defineProperty(eZ.prototype, "gamepadManager", (0, QJ.h)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(eZ.prototype, "simplificationQueue") || Object.defineProperty(eZ.prototype, "simplificationQueue", (0, QJ.h)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(eZ.prototype, "onBeforePhysicsObservable") || Object.defineProperty(eZ.prototype, "onBeforePhysicsObservable", (0, QJ.h)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(eZ.prototype, "onAfterPhysicsObservable") || Object.defineProperty(eZ.prototype, "onAfterPhysicsObservable", (0, QJ.h)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(eZ.prototype, "reflectionProbes") || Object.defineProperty(eZ.prototype, "reflectionProbes", (0, QJ.h)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(eZ.prototype, "forceShowBoundingBoxes") || Object.defineProperty(eZ.prototype, "forceShowBoundingBoxes", (0, QJ.h)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(eZ.prototype, "depthPeelingRenderer") || Object.defineProperty(eZ.prototype, "depthPeelingRenderer", (0, QJ.h)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(eZ.prototype, "useOrderIndependentTransparency") || Object.defineProperty(eZ.prototype, "useOrderIndependentTransparency", (0, QJ.h)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(eZ.prototype, "fluidRenderer") || Object.defineProperty(eZ.prototype, "fluidRenderer", (0, QJ.h)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(eZ.prototype, "geometryBufferRenderer") || Object.defineProperty(eZ.prototype, "geometryBufferRenderer", (0, QJ.h)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(eZ.prototype, "iblCdfGenerator") || Object.defineProperty(eZ.prototype, "iblCdfGenerator", (0, QJ.h)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(eZ.prototype, "prePassRenderer") || Object.defineProperty(eZ.prototype, "prePassRenderer", (0, QJ.h)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(eZ.prototype, "subSurfaceConfiguration") || Object.defineProperty(eZ.prototype, "subSurfaceConfiguration", (0, QJ.h)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(eZ.prototype, "spriteManagers") || Object.defineProperty(eZ.prototype, "spriteManagers", (0, QJ.h)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(eZ.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(eZ.prototype, "onBeforeSpritesRenderingObservable", (0, QJ.h)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(eZ.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(eZ.prototype, "onAfterSpritesRenderingObservable", (0, QJ.h)("Scene", "onAfterSpritesRenderingObservable"))
  },
  38933: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      d: () => UJ
    });
    class FJ {}
    FJ.NAME_EFFECTLAYER = "EffectLayer", FJ.NAME_LAYER = "Layer", FJ.NAME_LENSFLARESYSTEM = "LensFlareSystem", FJ.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", FJ.NAME_PARTICLESYSTEM = "ParticleSystem", FJ.NAME_GAMEPAD = "Gamepad", FJ.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", FJ.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", FJ.NAME_PREPASSRENDERER = "PrePassRenderer", FJ.NAME_DEPTHRENDERER = "DepthRenderer", FJ.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", FJ.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", FJ.NAME_SPRITE = "Sprite", FJ.NAME_SUBSURFACE = "SubSurface", FJ.NAME_OUTLINERENDERER = "Outline", FJ.NAME_PROCEDURALTEXTURE = "ProceduralTexture", FJ.NAME_SHADOWGENERATOR = "ShadowGenerator", FJ.NAME_OCTREE = "AFJ", FJ.NAME_PHYSICSENGINE = "PhysicsEngine", FJ.NAME_AUDIO = "Audio", FJ.NAME_FLUIDRENDERER = "FluidRenderer", FJ.NAME_IBLCDFGENERATOR = "iblCDFGenerator", FJ.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", FJ.STEP_ISREADYFORMESH_EFFECTLAYER = 0, FJ.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, FJ.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, FJ.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, FJ.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, FJ.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, FJ.STEP_BEFORECAMERADRAW_PREPASS = 0, FJ.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, FJ.STEP_BEFORECAMERADRAW_LAYER = 2, FJ.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, FJ.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, FJ.STEP_BEFORERENDERINGMESH_PREPASS = 0, FJ.STEP_BEFORERENDERINGMESH_OUTLINE = 1, FJ.STEP_AFTERRENDERINGMESH_PREPASS = 0, FJ.STEP_AFTERRENDERINGMESH_OUTLINE = 1, FJ.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, FJ.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, FJ.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, FJ.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, FJ.STEP_BEFORECLEAR_PREPASS = 1, FJ.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, FJ.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, FJ.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, FJ.STEP_AFTERCAMERADRAW_PREPASS = 0, FJ.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, FJ.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, FJ.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, FJ.STEP_AFTERCAMERADRAW_LAYER = 4, FJ.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, FJ.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, FJ.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, FJ.STEP_AFTERRENDER_AUDIO = 0, FJ.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, FJ.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, FJ.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, FJ.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, FJ.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, FJ.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, FJ.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, FJ.STEP_POINTERMOVE_SPRITE = 0, FJ.STEP_POINTERDOWN_SPRITE = 0, FJ.STEP_POINTERUP_SPRITE = 0;
    class UJ extends Array {
      constructor(JJ) {
        super(...JJ)
      }
      static Create() {
        return Object.create(UJ.prototype)
      }
      registerStep(JJ, cJ, ZJ) {
        let FJ, UJ = 0;
        for (; UJ < this.length; UJ++) {
          if (FJ = this[UJ].index, JJ < FJ) break
        }
        this.splice(UJ, 0, {
          index: JJ,
          component: cJ,
          action: ZJ.bind(cJ)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  38800: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      c: () => AJ,
      d: () => FJ,
      e: () => UJ,
      f: () => eJ
    });

    function FJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      function XJ(JJ) {
        if (void 0 !== JJ && "function" !== typeof JJ) throw new TypeError("Function expected");
        return JJ
      }
      for (var AJ, qJ = FJ.kind, jJ = "getter" === qJ ? "get" : "setter" === qJ ? "set" : "value", YJ = !cJ && JJ ? FJ.static ? JJ : JJ.prototype : null, hJ = cJ || (YJ ? Object.getOwnPropertyDescriptor(YJ, FJ.name) : {}), DJ = !1, sJ = ZJ.length - 1; sJ >= 0; sJ--) {
        var nJ = {};
        for (var GJ in FJ) nJ[GJ] = "access" === GJ ? {} : FJ[GJ];
        for (var GJ in FJ.access) nJ.access[GJ] = FJ.access[GJ];
        nJ.addInitializer = function(JJ) {
          if (DJ) throw new TypeError("Cannot add initializers after decoration has completed");
          eJ.push(XJ(JJ || null))
        };
        var fJ = (0, ZJ[sJ])("accessor" === qJ ? {
          get: hJ.get,
          set: hJ.set
        } : hJ[jJ], nJ);
        if ("accessor" === qJ) {
          if (void 0 === fJ) continue;
          if (null === fJ || "object" !== typeof fJ) throw new TypeError("Object expected");
          (AJ = XJ(fJ.get)) && (hJ.get = AJ), (AJ = XJ(fJ.set)) && (hJ.set = AJ), (AJ = XJ(fJ.init)) && UJ.unshift(AJ)
        } else(AJ = XJ(fJ)) && ("field" === qJ ? UJ.unshift(AJ) : hJ[jJ] = AJ)
      }
      YJ && Object.defineProperty(YJ, FJ.name, hJ), DJ = !0
    }

    function UJ(JJ, cJ, ZJ) {
      for (var FJ = arguments.length > 2, UJ = 0; UJ < cJ.length; UJ++) ZJ = FJ ? cJ[UJ].call(JJ, ZJ) : cJ[UJ].call(JJ);
      return FJ ? ZJ : void 0
    }

    function eJ(JJ, cJ, ZJ) {
      return "symbol" === typeof cJ && (cJ = cJ.description ? "[".concat(cJ.description, "]") : ""), Object.defineProperty(JJ, "name", {
        configurable: !0,
        value: ZJ ? "".concat(ZJ, " ", cJ) : cJ
      })
    }
    Object.create;
    Object.create;

    function XJ(JJ, cJ, ZJ, FJ) {
      if ("a" === ZJ && !FJ) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof cJ ? JJ !== cJ || !FJ : !cJ.has(JJ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZJ ? FJ : "a" === ZJ ? FJ.call(JJ) : FJ ? FJ.value : cJ.get(JJ)
    }

    function AJ(JJ, cJ, ZJ, FJ, UJ) {
      if ("m" === FJ) throw new TypeError("Private method is not writable");
      if ("a" === FJ && !UJ) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof cJ ? JJ !== cJ || !UJ : !cJ.has(JJ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === FJ ? UJ.call(JJ, ZJ) : UJ ? UJ.value = ZJ : cJ.set(JJ, ZJ), ZJ
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);