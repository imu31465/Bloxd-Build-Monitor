export const id = 256;
export const ids = [256];
export const modules = {
  40211: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      g: () => mB,
      i: () => UB,
      l: () => uB
    });
    var QB = zB(40008),
      nB = zB(38783),
      dB = zB(40125),
      IB = zB(40049);
    class NB {
      get aE() {
        return this._isDisposed
      }
      constructor(BB, jB, zB) {
        let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          NB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          uB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          UB = arguments.length > 7 ? arguments[7] : void 0,
          aB = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, IB.e)(), BB && BB.aY ? this._engine = BB.aY().wJ() : this._engine = BB, this._updatable = zB, this._instanced = NB, this._divisor = UB || 1, this._label = aB, jB instanceof QB.e ? (this._data = null, this._buffer = jB) : (this._data = jB, this._buffer = null), this.byteStride = uB ? nB : nB * Float32Array.BYTES_PER_ELEMENT, dB || this.create()
      }
      createVertexBuffer(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          IB = arguments.length > 6 ? arguments[6] : void 0;
        const NB = dB ? jB : jB * Float32Array.BYTES_PER_ELEMENT,
          UB = QB ? dB ? QB : QB * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new uB(this._engine, this, BB, this._updatable, !0, UB, void 0 === nB ? this._instanced : nB, NB, zB, void 0, void 0, !0, this._divisor || IB)
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !BB && this._buffer || (BB = BB || this._data, BB && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB), this._data = BB) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(BB, this._label), this._data = BB) : this._buffer = this._engine.createVertexBuffer(BB, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Ep > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Ep, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Ep, void 0, this._label));
          nB.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(BB) {
        this.create(BB)
      }
      updateDirectly(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB, QB ? jB : jB * Float32Array.BYTES_PER_ELEMENT, zB ? zB * this.byteStride : void 0), this._data = 0 === jB && void 0 === zB ? BB : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class uB {
      get aE() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(BB) {
        const jB = 0 != BB;
        this._instanceDivisor = BB, jB !== this._instanced && (this._instanced = jB, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const BB = this.getData();
        return BB ? Array.isArray(BB) ? BB.length / (this.byteStride / 4) - this.byteOffset / 4 : (BB.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(BB, jB, zB, QB, nB, IB, pB, rB, sB, JB) {
        let mB, yB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          kB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          GB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          LB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = BB, "object" === typeof QB && null !== QB ? (mB = QB.updatable ?? !1, nB = QB.postponeInternalCreation, IB = QB.stride, pB = QB.instanced, rB = QB.offset, sB = QB.size, JB = QB.type, yB = QB.normalized ?? !1, kB = QB.useBytes ?? !1, GB = QB.divisor ?? 1, LB = QB.takeBufferOwnership ?? !1, this._label = QB.label) : mB = !!QB, jB instanceof NB ? (this._buffer = jB, this._ownsBuffer = LB) : (this._buffer = new NB(BB, jB, mB, IB, nB, pB, kB, GB, this._label), this._ownsBuffer = !0), this.uniqueId = uB._Counter++, this._kind = zB, void 0 === JB) {
          const BB = this.getData();
          this.type = BB ? aB(BB) : uB.FLOAT
        } else this.type = JB;
        const gB = (0, dB.p)(this.type);
        kB ? (this._size = sB || (IB ? IB / gB : UB(zB)), this.byteStride = IB || this._buffer.byteStride || this._size * gB, this.byteOffset = rB || 0) : (this._size = sB || IB || UB(zB), this.byteStride = IB ? IB * gB : this._buffer.byteStride || this._size * gB, this.byteOffset = (rB || 0) * gB), this.normalized = yB, this._instanced = void 0 !== pB && pB, this._instanceDivisor = pB ? GB : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(BB) {
        switch (BB) {
          case uB.BYTE:
            return 0;
          case uB.UNSIGNED_BYTE:
            return 1;
          case uB.SHORT:
            return 2;
          case uB.UNSIGNED_SHORT:
            return 3;
          case uB.INT:
            return 4;
          case uB.UNSIGNED_INT:
            return 5;
          case uB.FLOAT:
            return 6;
          case uB.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${BB}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (uB._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(BB, jB) {
        const zB = this.getData();
        return zB ? (0, dB.m)(zB, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, BB, jB) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, dB.p)(this.type)
      }
      dzB() {
        return this.byteOffset / (0, dB.p)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, dB.p)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(BB) {
        this._buffer.create(BB), this._alignBuffer()
      }
      update(BB) {
        this._buffer.update(BB), this._alignBuffer()
      }
      updateDirectly(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(BB, jB, void 0, zB), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(BB, jB) {
        (0, dB.e)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, BB, this.normalized, ((BB, zB) => {
          for (let QB = 0; QB < this._size; QB++) jB(BB[QB], zB + QB)
        }))
      }
      _alignBuffer() {}
    }

    function UB(BB) {
      switch (BB) {
        case uB.UVKind:
        case uB.UV2Kind:
        case uB.UV3Kind:
        case uB.UV4Kind:
        case uB.UV5Kind:
        case uB.UV6Kind:
          return 2;
        case uB.NormalKind:
        case uB.PositionKind:
          return 3;
        case uB.ColorKind:
        case uB.ColorInstanceKind:
        case uB.MatricesIndicesKind:
        case uB.MatricesIndicesExtraKind:
        case uB.MatricesWeightsKind:
        case uB.MatricesWeightsExtraKind:
        case uB.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + BB + "'")
      }
    }

    function aB(BB) {
      return BB instanceof Int8Array ? uB.BYTE : BB instanceof Uint8Array ? uB.UNSIGNED_BYTE : BB instanceof Int16Array ? uB.SHORT : BB instanceof Uint16Array ? uB.UNSIGNED_SHORT : BB instanceof Int32Array ? uB.INT : BB instanceof Uint32Array ? uB.UNSIGNED_INT : uB.FLOAT
    }

    function pB(BB) {
      return (0, dB.p)(BB)
    }

    function rB(BB, jB, zB, QB, nB, IB, NB, uB) {
      (0, dB.e)(BB, jB, zB, QB, nB, IB, NB, ((BB, jB) => {
        for (let zB = 0; zB < QB; zB++) uB(BB[zB], jB + zB)
      }))
    }

    function sB(BB, jB, zB, QB, nB, IB, NB, uB) {
      return (0, dB.m)(BB, jB, zB, QB, nB, IB, NB, uB)
    }
    uB._Counter = 0, uB.BYTE = 5120, uB.UNSIGNED_BYTE = 5121, uB.SHORT = 5122, uB.UNSIGNED_SHORT = 5123, uB.INT = 5124, uB.UNSIGNED_INT = 5125, uB.FLOAT = 5126, uB.HALF_FLOAT = 5131, uB.PositionKind = "position", uB.NormalKind = "normal", uB.TangentKind = "tangent", uB.UVKind = "uv", uB.UV2Kind = "uv2", uB.UV3Kind = "uv3", uB.UV4Kind = "uv4", uB.UV5Kind = "uv5", uB.UV6Kind = "uv6", uB.ColorKind = "color", uB.ColorInstanceKind = "instanceColor", uB.MatricesIndicesKind = "matricesIndices", uB.MatricesWeightsKind = "matricesWeights", uB.MatricesIndicesExtraKind = "matricesIndicesExtra", uB.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let JB = !1;

    function mB() {
      JB || (JB = !0, uB.DeduceStride = UB, uB.GetDataType = aB, uB.GetTypeByteLength = pB, uB.ForEach = rB, uB.GetFloatData = sB)
    }
  },
  40008: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Ep = 0, this.is32Bits = !1, this.uniqueId = QB._Counter++
      }
    }
    QB._Counter = 0
  },
  40202: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(37171),
      nB = zB(40211);
    class dB {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || jB && !this.pickedMesh.isVerticesDataPresent(nB.l.NormalKind)) return null;
        let zB, dB = this.pickedMesh.dQB();
        0 === dB?.length && (dB = null);
        const IB = QB.h.KJ[0],
          NB = QB.h.KJ[1],
          uB = QB.h.KJ[2];
        if (jB) {
          const BB = this.pickedMesh.getVerticesData(nB.l.NormalKind);
          let jB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId], IB) : IB.U3(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            UB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 1], NB) : NB.U3(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            aB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 2], uB) : uB.U3(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
          jB = jB.scale(this.bu), UB = UB.scale(this.bv), aB = aB.scale(1 - this.bu - this.bv), zB = new QB.m(jB.x + UB.x + aB.x, jB.y + UB.y + aB.y, jB.z + UB.z + aB.z)
        } else {
          const BB = this.pickedMesh.getVerticesData(nB.l.PositionKind),
            jB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId], IB) : IB.U3(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            UB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 1], NB) : NB.U3(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            aB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 2], uB) : uB.U3(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]),
            pB = jB.subtract(UB),
            rB = aB.subtract(UB);
          zB = QB.m.Cross(pB, rB)
        }
        const UB = (BB, jB) => {
          if (-1 !== this.thinInstanceIndex) {
            const zB = BB._thinInstanceDataStorage.matrixData,
              nB = this.thinInstanceIndex << 4;
            if (zB && zB.length > nB) {
              const BB = QB.h.Matrix[0];
              QB.c.FromArrayToRef(zB, nB, BB), QB.m.TransformNormalToRef(jB, BB, jB)
            }
          }
          let zB = BB.getWorldMatrix();
          BB.nonUniformScaling && (QB.h.Matrix[0].jH(zB), zB = QB.h.Matrix[0], zB.setTranslationFromFloats(0, 0, 0), zB.invert(), zB.transposeToRef(QB.h.Matrix[1]), zB = QB.h.Matrix[1]), QB.m.TransformNormalToRef(jB, zB, jB)
        };
        if (BB && UB(this.pickedMesh, zB), this.ray) {
          const jB = QB.h.KJ[0].jH(zB);
          BB || UB(this.pickedMesh, jB), QB.m.Dot(jB, this.ray.direction) > 0 && zB.negateInPlace()
        }
        return zB.normalize(), zB
      }
      getTextureCoordinates() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nB.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BB)) return null;
        const jB = this.pickedMesh.dQB();
        if (!jB) return null;
        const zB = this.pickedMesh.getVerticesData(BB);
        if (!zB) return null;
        let dB = QB.i.FromArray(zB, 2 * jB[3 * this.faceId]),
          IB = QB.i.FromArray(zB, 2 * jB[3 * this.faceId + 1]),
          NB = QB.i.FromArray(zB, 2 * jB[3 * this.faceId + 2]);
        return dB = dB.scale(this.bu), IB = IB.scale(this.bv), NB = NB.scale(1 - this.bu - this.bv), new QB.i(dB.x + IB.x + NB.x, dB.y + IB.y + NB.y)
      }
    }
  },
  40049: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(39922);
    let nB = !1;

    function dB() {
      nB || (nB = !0, QB.ThinEngine.prototype.updateDynamicIndexBuffer = function(BB, jB) {
        let zB;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), zB = BB.is32Bits ? jB instanceof Uint32Array ? jB : new Uint32Array(jB) : jB instanceof Uint16Array ? jB : new Uint16Array(jB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, zB, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, QB.ThinEngine.prototype.updateDynamicVertexBuffer = function(BB, jB, zB, QB) {
        this.bindArrayBuffer(BB), void 0 === zB && (zB = 0);
        const nB = jB.byteLength || jB.length;
        void 0 === QB || QB >= nB && 0 === zB ? jB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zB, new Float32Array(jB)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zB, jB) : jB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zB, new Float32Array(jB).subarray(0, QB / 4)) : (jB = ArrayBuffer.isView(jB) ? new Uint8Array(jB.buffer, jB.byteOffset, QB) : new Uint8Array(jB, 0, QB), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zB, jB)), this._resetVertexBufferBinding()
      })
    }
  },
  40017: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    class QB {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = jB, !BB && (BB = jB.createTexture(), !BB)) throw new Error("Unable to create webGL texture");
        this.set(BB)
      }
      setUsage() {}
      set(BB) {
        this._webGLTexture = BB
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(BB) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(BB)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const BB of this._MSAARenderBuffers) this._context.deleteRenderbuffer(BB);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[BB] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39980: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => GB
    });
    var QB = zB(37202),
      nB = zB(39927),
      dB = zB(37197),
      IB = zB(38783),
      NB = zB(37194),
      uB = zB(39986);
    class UB {
      constructor() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, BB && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(BB) {
        this._zOffset !== BB && (this._zOffset = BB, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(BB) {
        this._zOffsetUnits !== BB && (this._zOffsetUnits = BB, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(BB) {
        this._cullFace !== BB && (this._cullFace = BB, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(BB) {
        this._cull !== BB && (this._cull = BB, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(BB) {
        this._depthFunc !== BB && (this._depthFunc = BB, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(BB) {
        this._depthMask !== BB && (this._depthMask = BB, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(BB) {
        this._depthTest !== BB && (this._depthTest = BB, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(BB) {
        this._frontFace !== BB && (this._frontFace = BB, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(BB) {
        this.isDirty && (this._isCullDirty && (this.cull ? BB.enable(BB.CULL_FACE) : BB.disable(BB.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (BB.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (BB.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? BB.enable(BB.DEPTH_TEST) : BB.disable(BB.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (BB.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (BB.enable(BB.POLYGON_OFFSET_FILL), BB.polygonOffset(this.zOffset, this.zOffsetUnits)) : BB.disable(BB.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (BB.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class aB {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(BB) {
        this._func !== BB && (this._func = BB, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(BB) {
        this._backFunc !== BB && (this._backFunc = BB, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(BB) {
        this._funcRef !== BB && (this._funcRef = BB, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(BB) {
        this._funcMask !== BB && (this._funcMask = BB, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(BB) {
        this._opStencilFail !== BB && (this._opStencilFail = BB, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(BB) {
        this._opDepthFail !== BB && (this._opDepthFail = BB, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(BB) {
        this._opStencilDepthPass !== BB && (this._opStencilDepthPass = BB, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(BB) {
        this._backOpStencilFail !== BB && (this._backOpStencilFail = BB, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(BB) {
        this._backOpDepthFail !== BB && (this._backOpDepthFail = BB, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(BB) {
        this._backOpStencilDepthPass !== BB && (this._backOpStencilDepthPass = BB, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(BB) {
        this._mask !== BB && (this._mask = BB, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(BB) {
        this._enabled !== BB && (this._enabled = BB, this._isStencilTestDirty = !0)
      }
      constructor() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, BB && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(BB) {
        if (!BB) return;
        const jB = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = jB ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = jB ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = jB ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = jB ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = jB ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = jB ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = jB ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = jB ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = jB ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = jB ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = jB ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = jB ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? BB.enable(BB.STENCIL_TEST) : BB.disable(BB.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (BB.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (BB.stencilFuncSeparate(BB.FRONT, this.func, this.funcRef, this.funcMask), BB.stencilFuncSeparate(BB.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (BB.stencilOpSeparate(BB.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), BB.stencilOpSeparate(BB.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class pB {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = pB.ALWAYS, this.opStencilFail = pB.KEEP, this.opDepthFail = pB.KEEP, this.opStencilDepthPass = pB.REPLACE, this.backFunc = pB.ALWAYS, this.backOpStencilFail = pB.KEEP, this.backOpDepthFail = pB.KEEP, this.backOpStencilDepthPass = pB.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(BB) {
        this.func = BB
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(BB) {
        this.backFunc = BB
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(BB) {
        this.funcRef = BB
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(BB) {
        this.funcMask = BB
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(BB) {
        this.opStencilFail = BB
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(BB) {
        this.opDepthFail = BB
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(BB) {
        this.opStencilDepthPass = BB
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(BB) {
        this.backOpStencilFail = BB
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(BB) {
        this.backOpDepthFail = BB
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(BB) {
        this.backOpStencilDepthPass = BB
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(BB) {
        this.mask = BB
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(BB) {
        this.enabled = BB
      }
    }
    pB.ALWAYS = 519, pB.KEEP = 7680, pB.REPLACE = 7681;
    var rB = zB(39988),
      sB = zB(39965),
      JB = zB(39913),
      mB = zB(39943),
      yB = zB(39958);

    function kB(BB, jB) {
      if (jB) {
        const {
          requestAnimationFrame: zB
        } = jB;
        if ("function" === typeof zB) return zB(BB)
      }
      if ((0, mB.o)()) {
        const {
          requestAnimationFrame: zB
        } = jB || window;
        if ("function" === typeof zB) return zB(BB)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(BB);
      return setTimeout(BB, 16)
    }
    class GB {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(BB) {
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
      get jQB() {
        return this._useReverseDepthBuffer
      }
      set jQB(BB) {
        BB !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = BB, this._depthCullingState.depthFunc = BB ? 518 : 515)
      }
      setColorWrite(BB) {
        BB !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = BB)
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
      _getGlobalDefines(BB) {
        if (BB) return this.isNDCHalfZRange ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, this.jQB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
        {
          let BB = "";
          return this.isNDCHalfZRange && (BB += "#define IS_NDC_HALF_ZRANGE"), this.jQB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
        }
      }
      _rebuildInternalTextures() {
        const BB = this._internalTexturesCache.slice();
        for (const jB of BB) jB._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const BB = this._renderTargetWrapperCache.slice();
        for (const jB of BB) jB.textures?.some((BB => 15 === BB.source)) || jB._rebuild()
      }
      _rebuildEffects() {
        for (const BB in this._compiledEffects) {
          const jB = this._compiledEffects[BB];
          jB._pipelineContext = null, jB._prepareEffect()
        }
        nB.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        IB.c.Warn(this.name + " context successfully restored."), this.lJ.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(BB) {
        setTimeout((() => {
          this._clearEmptyResources();
          const jB = this._depthCullingState.depthTest,
            zB = this._depthCullingState.depthFunc,
            QB = this._depthCullingState.depthMask,
            nB = this._stencilState.stencilTest;
          BB(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = jB, this._depthCullingState.depthFunc = zB, this._depthCullingState.depthMask = QB, this._stencilState.stencilTest = nB, this._flagContextRestored()
        }), 0)
      }
      get aE() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(BB) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(BB) {}
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
          const BB = new Uint8Array(4),
            jB = [BB, BB, BB, BB, BB, BB];
          this._emptyCubeTexture = this.createRawCubeTexture(jB, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(BB) {
        this._framebufferDimensionsObject = BB
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(BB) {
        if (!BB) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const jB = this._activeRenderLoops.indexOf(BB);
        jB >= 0 && (this._activeRenderLoops.splice(jB, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: BB
            } = this.customAnimationFrameRequester;
            BB && BB(this.customAnimationFrameRequester.CJ), delete this.customAnimationFrameRequester.CJ
          }
        } else if (0 !== this._frameHandler) {
          const BB = this._frameHandler;
          if (this._frameHandler = 0, (0, mB.o)()) {
            const {
              cancelAnimationFrame: jB
            } = this.getHostWindow() || window;
            if ("function" === typeof jB) return jB(BB)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(BB);
          return clearTimeout(BB)
        }
      }
      gL() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      tL() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(BB) {
        this._maxFPS = BB, void 0 !== BB && (this._minFrameTime = BB <= 0 ? Number.MAX_VALUE : 1e3 / BB)
      }
      _isOverFrameTime(BB) {
        if (!BB || void 0 === this._maxFPS) return !1;
        const jB = BB - this._lastFrameTime;
        return this._lastFrameTime = BB, this._renderAccumulator += jB, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(BB) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(BB)) {
          let BB = !0;
          (this.aE || !this.renderEvenInBackground && this._windowIsBackground) && (BB = !1), BB && (this.gL(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.tL())
        }
      }
      _renderLoop(BB) {
        this._processFrame(BB), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let BB = 0; BB < this._activeRenderLoops.length; BB++) {
          (0, this._activeRenderLoops[BB])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(BB, jB) {
        return kB(BB, jB)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.CJ = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.CJ) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(BB) {
        -1 === this._activeRenderLoops.indexOf(BB) && (this._activeRenderLoops.push(BB), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(BB) {
        this._depthCullingState.depthTest = BB
      }
      setZOffset(BB) {
        this._depthCullingState.zOffset = this.jQB ? -BB : BB
      }
      getZOffset() {
        const BB = this._depthCullingState.zOffset;
        return this.jQB ? -BB : BB
      }
      setZOffsetUnits(BB) {
        this._depthCullingState.zOffsetUnits = this.jQB ? -BB : BB
      }
      getZOffsetUnits() {
        const BB = this._depthCullingState.zOffsetUnits;
        return this.jQB ? -BB : BB
      }
      getHostWindow() {
        return (0, mB.o)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(BB) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const BB of this.scenes) BB._rebuildTextures();
        for (const BB of this._virtualScenes) BB._rebuildTextures()
      }
      _releaseRenderTargetWrapper(BB) {
        const jB = this._renderTargetWrapperCache.indexOf(BB); - 1 !== jB && this._renderTargetWrapperCache.splice(jB, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(BB, jB, zB) {
        const QB = jB || this.getRenderWidth(),
          nB = zB || this.getRenderHeight(),
          dB = BB.x || 0,
          IB = BB.y || 0;
        this._cachedViewport = BB, this._viewport(dB * QB, IB * nB, QB * BB.width, nB * BB.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(BB) {
        return new Path2D(BB)
      }
      get description() {
        let BB = this.name + this.version;
        return this._caps.parallelShaderCompile && (BB += " - Parallel shader compilation"), BB
      }
      _createTextureBase(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          NB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          uB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          UB = arguments.length > 7 ? arguments[7] : void 0,
          aB = arguments.length > 8 ? arguments[8] : void 0,
          pB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          rB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          sB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          mB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          yB = arguments.length > 13 ? arguments[13] : void 0,
          kB = arguments.length > 14 ? arguments[14] : void 0,
          LB = arguments.length > 15 ? arguments[15] : void 0;
        const gB = "data:" === (BB = BB || "").substring(0, 5),
          tB = "blob:" === BB.substring(0, 5),
          SB = gB && -1 !== BB.indexOf(";base64,"),
          MB = rB || new JB.d(this, 1);
        MB !== rB && (MB.label = BB.substring(0, 60));
        const EB = BB;
        !this._transformTextureUrl || SB || rB || pB || (BB = this._transformTextureUrl(BB)), EB !== BB && (MB._originalUrl = EB);
        const iB = BB.lastIndexOf(".");
        let qB = mB || (iB > -1 ? BB.substring(iB).toLowerCase() : "");
        qB.indexOf("?") > -1 && (qB = qB.split("?")[0]);
        const fB = GB.GetCompatibleTextureLoader(qB, yB);
        QB && QB.addPendingData(MB), MB.url = BB, MB.generateMipMaps = !jB, MB.samplingMode = nB, MB.invertY = zB, MB._useSRGBBuffer = this._getUseSRGBBuffer(!!LB, jB), this._doNotHandleContextLost || (MB._buffer = pB);
        let oB = null;
        NB && !rB && (oB = MB.onLoadedObservable.add(NB)), rB || this._internalTexturesCache.push(MB);
        const HB = (zB, rB) => {
          QB && QB.removePendingData(MB), BB === EB ? (oB && MB.onLoadedObservable.remove(oB), dB.c.UseFallbackTexture && BB !== dB.c.FallbackTexture && this._createTextureBase(dB.c.FallbackTexture, jB, MB.invertY, QB, nB, null, uB, UB, aB, pB, MB), zB = (zB || "Unknown error") + (dB.c.UseFallbackTexture ? " - Fallback texture was used" : ""), MB.onErrorObservable.notifyObservers({
            message: zB,
            exception: rB
          }), uB && uB(zB, rB)) : (IB.c.Warn(`Failed to load ${BB}, falling back to ${EB}`), this._createTextureBase(EB, jB, MB.invertY, QB, nB, NB, uB, UB, aB, pB, MB, sB, mB, yB, kB, LB))
        };
        if (fB) {
          const jB = async BB => {
            (await fB).loadData(BB, MB, ((BB, jB, zB, dB, IB, NB) => {
              NB ? HB("TextureLoader failed to load data") : UB(MB, qB, QB, {
                width: BB,
                height: jB
              }, MB.invertY, !zB, dB, (() => (IB(), !1)), nB)
            }), kB)
          };
          if (pB) {
            const BB = async BB => {
              try {
                await jB(BB)
              } catch (zB) {
                HB("Failed to parse texture data", zB)
              }
            };
            pB instanceof ArrayBuffer ? BB(new Uint8Array(pB)) : ArrayBuffer.isView(pB) ? BB(pB) : uB && uB("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(BB, (async BB => {
            try {
              await jB(new Uint8Array(BB))
            } catch (zB) {
              HB("Failed to parse texture data", zB)
            }
          }), void 0, QB ? QB.offlineProvider : void 0, !0, ((BB, jB) => {
            HB("Unable to load " + (BB && BB.responseURL, jB))
          }))
        } else {
          const zB = BB => {
            tB && !this._doNotHandleContextLost && (MB._buffer = BB), UB(MB, qB, QB, BB, MB.invertY, jB, !1, aB, nB)
          };
          !gB || SB ? pB && ("string" === typeof pB.decoding || pB.close) ? zB(pB) : GB._FileToolsLoadImage(BB || "", zB, HB, QB ? QB.offlineProvider : null, yB, MB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof pB || pB instanceof ArrayBuffer || ArrayBuffer.isView(pB) || pB instanceof Blob ? GB._FileToolsLoadImage(pB, zB, HB, QB ? QB.offlineProvider : null, yB, MB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : pB && zB(pB)
        }
        return MB
      }
      _rebuildBuffers() {
        for (const BB of this._uniformBuffers) BB._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, mB.h)() ? document : null
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
        for (const BB in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, BB) && (this._boundTexturesCache[BB] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
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
      setHardwareScalingLevel(BB) {
        this._hardwareScalingLevel = BB, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(BB) {
        this._doNotHandleContextLost = BB
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(BB, jB, zB) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new UB, this._stencilStateComposer = new aB, this._stencilState = new pB, this._alphaState = new rB.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new QB.c, this.onCanvasFocusObservable = new QB.c, this.onNewSceneAddedObservable = new QB.c, this.onResizeObservable = new QB.c, this.onCanvasPointerOutObservable = new QB.c, this.onEffectErrorObservable = new QB.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new QB.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = BB => this._renderLoop(BB), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new QB.c, this.onAfterShaderCompilationObservable = new QB.c, this.onBeginFrameObservable = new QB.c, this.onEndFrameObservable = new QB.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new QB.c, this.lJ = new QB.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.pY = new QB.c, this.onReleaseEffectsObservable = new QB.c, dB.c.Instances.push(this), this.startTime = uB.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, NB.b.SetMatrixPrecision(!!jB.useLargeWorldRendering || !!jB.useHighPrecisionMatrix), (0, mB.k)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), jB.antialias = BB ?? jB.antialias, jB.deterministicLockstep = jB.deterministicLockstep ?? !1, jB.lockstepMaxSteps = jB.lockstepMaxSteps ?? 4, jB.timeStep = jB.timeStep ?? 1 / 60, jB.stencil = jB.stencil ?? !0, this._audioContext = jB.audioEngineOptions?.audioContext ?? null, this._audioDestination = jB.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = jB.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!jB.doNotHandleContextLost, this._isStencilEnable = !!jB.stencil, this.useExactSrgbConversions = jB.useExactSrgbConversions ?? !1, this.canvasTabIndex = jB.canvasTabIndex ?? this.canvasTabIndex;
        const nB = (0, mB.o)() && window.devicePixelRatio || 1,
          IB = jB.limitDeviceRatio || nB;
        zB = zB || jB.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = zB, this._hardwareScalingLevel = zB ? 1 / Math.min(IB, nB) : 1, this._lastDevicePixelRatio = nB, this._creationOptions = jB
      }
      resize() {
        let BB, jB, zB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const BB = (0, mB.o)() && window.devicePixelRatio || 1,
            jB = this._lastDevicePixelRatio / BB;
          this._lastDevicePixelRatio = BB, this._hardwareScalingLevel *= jB
        }
        if ((0, mB.o)() && (0, mB.h)())
          if (this._renderingCanvas) {
            const zB = this._renderingCanvas.getBoundingClientRect?.();
            BB = this._renderingCanvas.clientWidth || zB?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, jB = this._renderingCanvas.clientHeight || zB?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else BB = window.innerWidth, jB = window.innerHeight;
        else BB = this._renderingCanvas ? this._renderingCanvas.width : 100, jB = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(BB / this._hardwareScalingLevel, jB / this._hardwareScalingLevel, zB)
      }
      setSize(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (BB |= 0, jB |= 0, !zB && this._renderingCanvas.width === BB && this._renderingCanvas.height === jB) return !1;
        if (this._renderingCanvas.width = BB, this._renderingCanvas.height = jB, this.scenes) {
          for (let BB = 0; BB < this.scenes.length; BB++) {
            const jB = this.scenes[BB];
            for (let BB = 0; BB < jB.cameras.length; BB++) {
              jB.cameras[BB]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB) {
        throw (0, sB.k)("engine.rawTexture")
      }
      createRawCubeTexture(BB, jB, zB, QB, nB, dB, IB, NB) {
        throw (0, sB.k)("engine.rawTexture")
      }
      createRawTexture3D(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
        throw (0, sB.k)("engine.rawTexture")
      }
      createRawTexture2DArray(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB) {
        throw (0, sB.k)("engine.rawTexture")
      }
      _sharedInit(BB) {
        this._renderingCanvas = BB
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const BB = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== BB.indexOf("Mobile") || -1 !== BB.indexOf("Mac") && (0, mB.h)() && "ontouchend" in document
        }, this._checkForMobile(), (0, mB.o)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(BB) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(BB, !1)
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
      _createImageBitmapFromSource(BB, jB) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(BB, jB) {
        return createImageBitmap(BB, jB)
      }
      resizeImageBitmap(BB, jB, zB) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(BB) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(BB, jB) {
        if ("undefined" === typeof document) return new OffscreenCanvas(BB, jB);
        const zB = document.createElement("canvas");
        return zB.width = BB, zB.height = jB, zB
      }
      createCanvas(BB, jB) {
        return GB._CreateCanvas(BB, jB)
      }
      static _FileToolsLoadImage(BB, jB, zB, QB, nB, dB, IB) {
        if (!yB.e.loadImage) throw (0, sB.k)("FileTools");
        return yB.e.loadImage(BB, jB, zB, QB, nB, dB, IB)
      }
      _loadFile(BB, jB, zB, QB, nB, dB) {
        const IB = (0, yB.m)(BB, jB, zB, QB, nB, dB);
        return this._activeRequests.push(IB), IB.onCompleteObservable.add((() => {
          const BB = this._activeRequests.indexOf(IB); - 1 !== BB && this._activeRequests.splice(BB, 1)
        })), IB
      }
      static _FileToolsLoadFile(BB, jB, zB, QB, nB, dB) {
        if (yB.e.loadFile) return yB.e.loadFile(BB, jB, zB, QB, nB, dB);
        throw (0, sB.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), nB.e.ResetCache();
        for (const jB of this._activeRequests) jB.abort();
        this._boundRenderFunction = null, this.pY.notifyObservers(this), this.pY.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, mB.o)() && window.removeEventListener("resize", this._checkForMobile);
        const BB = dB.c.Instances.indexOf(this);
        BB >= 0 && dB.c.Instances.splice(BB, 1), dB.c.Instances.length || (dB.c.OnEnginesDisposedObservable.notifyObservers(this), dB.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(BB) {
        throw (0, sB.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(BB, jB) {
        for (let zB = 0; zB < dB.c.Instances.length; zB++) {
          const QB = dB.c.Instances[zB];
          for (let zB = 0; zB < QB.scenes.length; zB++) QB.scenes[zB].markAllMaterialsAsDirty(BB, jB)
        }
      }
      static GetCompatibleTextureLoader(BB, jB) {
        return null
      }
    }
    GB._RenderPassIdCounter = 0, GB._RescalePostProcessFactory = null, GB.CollisionsEpsilon = .001, GB.QueueNewFrame = kB
  },
  39932: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QB.ShadersRepository : QB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QB.ShadersStore : QB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QB.IncludesShadersStore : QB.IncludesShadersStoreWGSL
      }
    }
    QB.ShadersRepository = "src/Shaders/", QB.ShadersStore = {}, QB.IncludesShadersStore = {}, QB.ShadersRepositoryWGSL = "src/ShadersWGSL/", QB.ShadersStoreWGSL = {}, QB.IncludesShadersStoreWGSL = {}
  },
  39950: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => rB,
      h: () => LB,
      k: () => JB,
      n: () => sB,
      q: () => mB,
      s: () => GB,
      u: () => pB,
      y: () => UB,
      A: () => aB,
      D: () => uB,
      G: () => NB
    });
    class QB {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(BB) {
        BB && this.program && BB(this.program)
      }
      setEngine(BB) {
        this.engine = BB
      }
      _fillEffectInformation(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = this.engine;
        if (uB.supportsUniformBuffers)
          for (const aB in jB) BB.bindUniformBlock(aB, jB[aB]);
        let UB;
        for (this.engine.getUniforms(this, zB).forEach(((BB, jB) => {
            QB[zB[jB]] = BB
          })), this._uniforms = QB, UB = 0; UB < nB.length; UB++) {
          null == BB.getUniform(nB[UB]) && (nB.splice(UB, 1), UB--)
        }
        nB.forEach(((BB, jB) => {
          dB[BB] = jB
        }));
        for (const aB of uB.getAttributes(this, IB)) NB.push(aB)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(BB, jB) {
        const zB = this._valueCache[BB],
          QB = jB.updateFlag;
        if (void 0 !== zB && zB === QB) return !1;
        const nB = jB.nQB();
        let dB = this._matrixValueCache[BB];
        if (void 0 !== zB && null !== zB && void 0 !== dB) {
          let jB = !0;
          for (let BB = 15; BB >= 0; BB--)
            if (dB[BB] !== nB[BB]) {
              jB = !1;
              break
            } if (jB) return this._valueCache[BB] = QB, !1
        }
        return void 0 === dB && (dB = this._matrixValueCache[BB] = new Float32Array(16)), dB.set(nB), this._valueCache[BB] = QB, !0
      }
      _cacheFloat2(BB, jB, zB) {
        let QB = this._valueCache[BB];
        if (!QB || 2 !== QB.length) return QB = [jB, zB], this._valueCache[BB] = QB, !0;
        let nB = !1;
        return QB[0] !== jB && (QB[0] = jB, nB = !0), QB[1] !== zB && (QB[1] = zB, nB = !0), nB
      }
      _cacheFloat3(BB, jB, zB, QB) {
        let nB = this._valueCache[BB];
        if (!nB || 3 !== nB.length) return nB = [jB, zB, QB], this._valueCache[BB] = nB, !0;
        let dB = !1;
        return nB[0] !== jB && (nB[0] = jB, dB = !0), nB[1] !== zB && (nB[1] = zB, dB = !0), nB[2] !== QB && (nB[2] = QB, dB = !0), dB
      }
      _cacheFloat4(BB, jB, zB, QB, nB) {
        let dB = this._valueCache[BB];
        if (!dB || 4 !== dB.length) return dB = [jB, zB, QB, nB], this._valueCache[BB] = dB, !0;
        let IB = !1;
        return dB[0] !== jB && (dB[0] = jB, IB = !0), dB[1] !== zB && (dB[1] = zB, IB = !0), dB[2] !== QB && (dB[2] = QB, IB = !0), dB[3] !== nB && (dB[3] = nB, IB = !0), IB
      }
      setInt(BB, jB) {
        const zB = this._valueCache[BB];
        void 0 !== zB && zB === jB || this.engine.setInt(this._uniforms[BB], jB) && (this._valueCache[BB] = jB)
      }
      setInt2(BB, jB, zB) {
        this._cacheFloat2(BB, jB, zB) && (this.engine.setInt2(this._uniforms[BB], jB, zB) || (this._valueCache[BB] = null))
      }
      setInt3(BB, jB, zB, QB) {
        this._cacheFloat3(BB, jB, zB, QB) && (this.engine.setInt3(this._uniforms[BB], jB, zB, QB) || (this._valueCache[BB] = null))
      }
      setInt4(BB, jB, zB, QB, nB) {
        this._cacheFloat4(BB, jB, zB, QB, nB) && (this.engine.setInt4(this._uniforms[BB], jB, zB, QB, nB) || (this._valueCache[BB] = null))
      }
      setIntArray(BB, jB) {
        this._valueCache[BB] = null, this.engine.setIntArray(this._uniforms[BB], jB)
      }
      setIntArray2(BB, jB) {
        this._valueCache[BB] = null, this.engine.setIntArray2(this._uniforms[BB], jB)
      }
      setIntArray3(BB, jB) {
        this._valueCache[BB] = null, this.engine.setIntArray3(this._uniforms[BB], jB)
      }
      setIntArray4(BB, jB) {
        this._valueCache[BB] = null, this.engine.setIntArray4(this._uniforms[BB], jB)
      }
      setUInt(BB, jB) {
        const zB = this._valueCache[BB];
        void 0 !== zB && zB === jB || this.engine.setUInt(this._uniforms[BB], jB) && (this._valueCache[BB] = jB)
      }
      setUInt2(BB, jB, zB) {
        this._cacheFloat2(BB, jB, zB) && (this.engine.setUInt2(this._uniforms[BB], jB, zB) || (this._valueCache[BB] = null))
      }
      setUInt3(BB, jB, zB, QB) {
        this._cacheFloat3(BB, jB, zB, QB) && (this.engine.setUInt3(this._uniforms[BB], jB, zB, QB) || (this._valueCache[BB] = null))
      }
      setUInt4(BB, jB, zB, QB, nB) {
        this._cacheFloat4(BB, jB, zB, QB, nB) && (this.engine.setUInt4(this._uniforms[BB], jB, zB, QB, nB) || (this._valueCache[BB] = null))
      }
      setUIntArray(BB, jB) {
        this._valueCache[BB] = null, this.engine.setUIntArray(this._uniforms[BB], jB)
      }
      setUIntArray2(BB, jB) {
        this._valueCache[BB] = null, this.engine.setUIntArray2(this._uniforms[BB], jB)
      }
      setUIntArray3(BB, jB) {
        this._valueCache[BB] = null, this.engine.setUIntArray3(this._uniforms[BB], jB)
      }
      setUIntArray4(BB, jB) {
        this._valueCache[BB] = null, this.engine.setUIntArray4(this._uniforms[BB], jB)
      }
      setArray(BB, jB) {
        this._valueCache[BB] = null, this.engine.setArray(this._uniforms[BB], jB)
      }
      setArray2(BB, jB) {
        this._valueCache[BB] = null, this.engine.setArray2(this._uniforms[BB], jB)
      }
      setArray3(BB, jB) {
        this._valueCache[BB] = null, this.engine.setArray3(this._uniforms[BB], jB)
      }
      setArray4(BB, jB) {
        this._valueCache[BB] = null, this.engine.setArray4(this._uniforms[BB], jB)
      }
      setMatrices(BB, jB) {
        jB && (this._valueCache[BB] = null, this.engine.setMatrices(this._uniforms[BB], jB))
      }
      setMatrix(BB, jB) {
        this._cacheMatrix(BB, jB) && (this.engine.setMatrices(this._uniforms[BB], jB.nQB()) || (this._valueCache[BB] = null))
      }
      setMatrix3x3(BB, jB) {
        this._valueCache[BB] = null, this.engine.setMatrix3x3(this._uniforms[BB], jB)
      }
      setMatrix2x2(BB, jB) {
        this._valueCache[BB] = null, this.engine.setMatrix2x2(this._uniforms[BB], jB)
      }
      setFloat(BB, jB) {
        const zB = this._valueCache[BB];
        void 0 !== zB && zB === jB || this.engine.setFloat(this._uniforms[BB], jB) && (this._valueCache[BB] = jB)
      }
      setVector2(BB, jB) {
        this._cacheFloat2(BB, jB.x, jB.y) && (this.engine.setFloat2(this._uniforms[BB], jB.x, jB.y) || (this._valueCache[BB] = null))
      }
      setFloat2(BB, jB, zB) {
        this._cacheFloat2(BB, jB, zB) && (this.engine.setFloat2(this._uniforms[BB], jB, zB) || (this._valueCache[BB] = null))
      }
      setVector3(BB, jB) {
        this._cacheFloat3(BB, jB.x, jB.y, jB.z) && (this.engine.setFloat3(this._uniforms[BB], jB.x, jB.y, jB.z) || (this._valueCache[BB] = null))
      }
      setFloat3(BB, jB, zB, QB) {
        this._cacheFloat3(BB, jB, zB, QB) && (this.engine.setFloat3(this._uniforms[BB], jB, zB, QB) || (this._valueCache[BB] = null))
      }
      setVector4(BB, jB) {
        this._cacheFloat4(BB, jB.x, jB.y, jB.z, jB.w) && (this.engine.setFloat4(this._uniforms[BB], jB.x, jB.y, jB.z, jB.w) || (this._valueCache[BB] = null))
      }
      setQuaternion(BB, jB) {
        this._cacheFloat4(BB, jB.x, jB.y, jB.z, jB.w) && (this.engine.setFloat4(this._uniforms[BB], jB.x, jB.y, jB.z, jB.w) || (this._valueCache[BB] = null))
      }
      setFloat4(BB, jB, zB, QB, nB) {
        this._cacheFloat4(BB, jB, zB, QB, nB) && (this.engine.setFloat4(this._uniforms[BB], jB, zB, QB, nB) || (this._valueCache[BB] = null))
      }
      setColor3(BB, jB) {
        this._cacheFloat3(BB, jB.r, jB.g, jB.b) && (this.engine.setFloat3(this._uniforms[BB], jB.r, jB.g, jB.b) || (this._valueCache[BB] = null))
      }
      setColor4(BB, jB, zB) {
        this._cacheFloat4(BB, jB.r, jB.g, jB.b, zB) && (this.engine.setFloat4(this._uniforms[BB], jB.r, jB.g, jB.b, zB) || (this._valueCache[BB] = null))
      }
      setDirectColor4(BB, jB) {
        this._cacheFloat4(BB, jB.r, jB.g, jB.b, jB.a) && (this.engine.setFloat4(this._uniforms[BB], jB.r, jB.g, jB.b, jB.a) || (this._valueCache[BB] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var nB = zB(39958);
    const dB = new WeakMap,
      IB = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function NB(BB) {
      let jB = dB.get(BB);
      if (!jB) {
        if (!BB) return IB;
        jB = {
          _webGLVersion: BB.TEXTURE_BINDING_3D ? 2 : 1,
          _context: BB,
          parallelShaderCompile: BB.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, dB.set(BB, jB)
      }
      return jB
    }

    function uB(BB) {
      dB.delete(BB)
    }

    function UB(BB, jB, zB, QB, nB, dB) {
      const IB = NB(QB);
      dB || (dB = IB._createShaderProgramInjection ?? rB);
      return dB(BB, kB(jB, "vertex", QB, IB._contextWasLost), kB(zB, "fragment", QB, IB._contextWasLost), QB, nB, IB.validateShaderPrograms)
    }

    function aB(BB, jB, zB, QB, nB) {
      let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        IB = arguments.length > 6 ? arguments[6] : void 0;
      const uB = NB(nB);
      IB || (IB = uB._createShaderProgramInjection ?? rB);
      const UB = uB._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return IB(BB, yB(jB, "vertex", QB, UB, nB, uB._contextWasLost), yB(zB, "fragment", QB, UB, nB, uB._contextWasLost), nB, dB, uB.validateShaderPrograms)
    }

    function pB(BB, jB) {
      const zB = new QB,
        nB = NB(BB);
      return nB.parallelShaderCompile && !nB.disableParallelShaderCompile && (zB.isParallelCompiled = !0), zB.context = nB._context, zB
    }

    function rB(BB, jB, zB, QB) {
      let nB = arguments.length > 5 ? arguments[5] : void 0;
      const dB = QB.createProgram();
      if (BB.program = dB, !dB) throw new Error("Unable to create program");
      return QB.attachShader(dB, jB), QB.attachShader(dB, zB), QB.linkProgram(dB), BB.context = QB, BB.vertexShader = jB, BB.fragmentShader = zB, BB.isParallelCompiled || JB(BB, QB, nB), dB
    }

    function sB(BB, jB, zB) {
      const QB = BB;
      if (QB._isDisposed) return !1;
      const nB = NB(jB);
      return !!(nB && nB.parallelShaderCompile && nB.parallelShaderCompile.COMPLETION_STATUS_KHR && QB.program && jB.getProgramParameter(QB.program, nB.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (JB(QB, jB, zB), !0)
    }

    function JB(BB, jB, zB) {
      const QB = BB.context,
        nB = BB.vertexShader,
        dB = BB.fragmentShader,
        IB = BB.program;
      if (!QB.getProgramParameter(IB, QB.LINK_STATUS)) {
        if (!jB.getShaderParameter(nB, jB.COMPILE_STATUS)) {
          const zB = jB.getShaderInfoLog(nB);
          if (zB) throw BB.vertexCompilationError = zB, new Error("VERTEX SHADER " + zB)
        }
        if (!jB.getShaderParameter(dB, jB.COMPILE_STATUS)) {
          const zB = jB.getShaderInfoLog(dB);
          if (zB) throw BB.fragmentCompilationError = zB, new Error("FRAGMENT SHADER " + zB)
        }
        const zB = QB.getProgramInfoLog(IB);
        if (zB) throw BB.programLinkError = zB, new Error(zB)
      }
      if (zB) {
        QB.validateProgram(IB);
        if (!QB.getProgramParameter(IB, QB.VALIDATE_STATUS)) {
          const jB = QB.getProgramInfoLog(IB);
          if (jB) throw BB.programValidationError = jB, new Error(jB)
        }
      }
      QB.deleteShader(nB), QB.deleteShader(dB), BB.vertexShader = void 0, BB.fragmentShader = void 0, BB.onCompiled && (BB.onCompiled(), BB.onCompiled = void 0)
    }

    function mB(BB, jB, zB, QB, nB, dB, IB, uB, pB) {
      let rB = arguments.length > 10 ? arguments[10] : void 0,
        sB = arguments.length > 11 ? arguments[11] : void 0,
        JB = arguments.length > 12 ? arguments[12] : void 0;
      const mB = NB(BB.context);
      sB || (sB = mB.createRawShaderProgramInjection ?? UB), JB || (JB = mB.createShaderProgramInjection ?? aB);
      const yB = BB;
      yB.program = QB ? sB(yB, jB, zB, yB.context, pB) : JB(yB, jB, zB, uB, yB.context, pB), yB.program.__SPECTOR_rebuildProgram = IB, rB()
    }

    function yB(BB, jB, zB, QB, dB, IB) {
      return kB((0, nB.i)(BB, zB, QB), jB, dB, IB)
    }

    function kB(BB, jB, zB, QB) {
      const nB = zB.createShader("vertex" === jB ? zB.VERTEX_SHADER : zB.FRAGMENT_SHADER);
      if (!nB) {
        let BB, nB = zB.NO_ERROR;
        for (;
          (BB = zB.getError()) !== zB.NO_ERROR;) nB = BB;
        throw new Error(`Something went wrong while creating a gl ${jB} shader object. gl error=${nB}, gl isContextLost=${zB.isContextLost()}, _contextWasLost=${QB}`)
      }
      return zB.shaderSource(nB, BB), zB.compileShader(nB), nB
    }

    function GB(BB, jB) {
      jB.useProgram(BB)
    }

    function LB(BB, jB) {
      const zB = BB;
      if (!zB.isParallelCompiled) return void jB(BB);
      const QB = zB.onCompiled;
      zB.onCompiled = () => {
        QB?.(), jB(BB)
      }
    }
  },
  39922: (BB, jB, zB) => {
    zB.d(jB, {
      ThinEngine: () => tB
    });
    var QB = zB(39927),
      nB = zB(39950),
      dB = zB(39980),
      IB = zB(39997),
      NB = zB(38783),
      uB = zB(39943);
    class UB {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(BB, jB, zB, QB, nB) {
        if (nB.drawBuffersExtensionDisabled) {
          const jB = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          BB = BB.replace(jB, "")
        }
        return BB
      }
    }
    const aB = /(flat\s)?\s*varying\s*.*/;
    class pB {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(BB) {
        return BB.replace("attribute", "in")
      }
      varyingCheck(BB, jB) {
        return aB.test(BB)
      }
      varyingProcessor(BB, jB) {
        return BB.replace("varying", jB ? "in" : "out")
      }
      postProcessor(BB, jB, zB) {
        const QB = -1 !== BB.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (BB = (BB = BB.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), zB) {
          const zB = -1 !== BB.search(/layout *\(location *= *0\) *out/g),
            nB = -1 !== jB.indexOf("#define DUAL_SOURCE_BLENDING"),
            dB = nB ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          nB && (BB = "#extension GL_EXT_blend_func_extended : require\n" + BB), BB = (BB = (BB = (BB = (BB = (BB = (BB = BB.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (QB || zB ? "" : dB) + "void main(")
        } else {
          jB.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (BB = "invariant gl_Position;\n" + BB);
          if (-1 !== jB.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + BB
        }
        return BB
      }
    }
    var rB = zB(40001),
      sB = zB(40015),
      JB = zB(40017),
      mB = zB(39913),
      yB = zB(39958),
      kB = zB(39936),
      GB = zB(40025),
      LB = zB(39988);
    class gB {}
    class tB extends dB.c {
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return QB.e.ShadersRepository
      }
      static set ShadersRepository(BB) {
        QB.e.ShadersRepository = BB
      }
      get supportsUniformBuffers() {
        return this.gm > 1 && !this.disableUniformBuffers
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
      constructor(BB, jB, zB, QB) {
        if (zB = zB || {}, super(jB ?? zB.antialias, zB, QB), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !BB) return;
        let dB;
        if (BB.getContext) {
          if (dB = BB, void 0 === zB.preserveDrawingBuffer && (zB.preserveDrawingBuffer = !1), void 0 === zB.xrCompatible && (zB.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const BB = navigator.userAgent;
            for (const jB of tB.ExceptionList) {
              const QB = jB.key,
                nB = jB.targets;
              if (new RegExp(QB).test(BB)) {
                if (jB.capture && jB.captureConstraint) {
                  const zB = jB.capture,
                    QB = jB.captureConstraint,
                    nB = new RegExp(zB).exec(BB);
                  if (nB && nB.length > 0) {
                    if (parseInt(nB[nB.length - 1]) >= QB) continue
                  }
                }
                for (const BB of nB) switch (BB) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    zB.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, nB.D)(this._gl)
            } : (this._onContextLost = BB => {
              BB.preventDefault(), this._contextWasLost = !0, (0, nB.D)(this._gl), NB.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, dB.addEventListener("webglcontextrestored", this._onContextRestored, !1), zB.powerPreference = zB.powerPreference || "high-performance"), dB.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (zB.xrCompatible = !1), !zB.disableWebGL2Support) try {
            this._gl = dB.getContext("webgl2", zB) || dB.getContext("experimental-webgl2", zB), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (aB) {}
          if (!this._gl) {
            if (!dB) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = dB.getContext("webgl", zB) || dB.getContext("experimental-webgl", zB)
            } catch (aB) {
              throw new Error("WebGL not supported", {
                cause: aB
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = BB, dB = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const jB = this._gl.getContextAttributes();
          jB && (zB.stencil = jB.stencil)
        }
        this._sharedInit(dB), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== zB.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = zB.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let nB = 0; nB < this._caps.maxVertexAttribs; nB++) this._currentBufferPointers[nB] = new gB;
        this._shaderProcessor = this.gm > 1 ? new pB : new UB;
        const IB = `Babylon.js v${tB.Version}`;
        NB.c.Log(IB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", IB);
        const uB = (0, nB.G)(this._gl);
        uB.validateShaderPrograms = this.validateShaderPrograms, uB.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(BB) {
        return null
      }
      areAllEffectsReady() {
        for (const BB in this._compiledEffects) {
          if (!this._compiledEffects[BB].isReady()) return !1
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
        const BB = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != BB && (this._glRenderer = this._gl.getParameter(BB.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(BB.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const jB = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!jB, this._alphaState = new LB.c(this._caps.blendParametersPerTarget), jB && (this._gl.blendEquationSeparateIndexed = jB.blendEquationSeparateiOES.bind(jB), this._gl.blendEquationIndexed = jB.blendEquationiOES.bind(jB), this._gl.blendFuncSeparateIndexed = jB.blendFuncSeparateiOES.bind(jB), this._gl.blendFuncIndexed = jB.blendFunciOES.bind(jB), this._gl.colorMaskIndexed = jB.colorMaskiOES.bind(jB), this._gl.disableIndexed = jB.disableiOES.bind(jB), this._gl.enableIndexed = jB.enableiOES.bind(jB)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const BB = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== BB) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = BB.drawBuffersWEBGL.bind(BB), this._caps.maxDrawBuffers = this._gl.getParameter(BB.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let jB = 0; jB < 16; jB++) this._gl["COLOR_ATTACHMENT" + jB + "_WEBGL"] = BB["COLOR_ATTACHMENT" + jB + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const BB = this._gl.getExtension("WEBGL_depth_texture");
          null != BB && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = BB.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const BB = this._gl.getExtension("OES_vertex_array_object");
          null != BB && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = BB.createVertexArrayOES.bind(BB), this._gl.bindVertexArray = BB.bindVertexArrayOES.bind(BB), this._gl.deleteVertexArray = BB.deleteVertexArrayOES.bind(BB))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const BB = this._gl.getExtension("ANGLE_instanced_arrays");
          null != BB ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = BB.drawArraysInstancedANGLE.bind(BB), this._gl.drawElementsInstanced = BB.drawElementsInstancedANGLE.bind(BB), this._gl.vertexAttribDivisor = BB.vertexAttribDivisorANGLE.bind(BB)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            jB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (BB && jB && (this._caps.highPrecisionShaderSupported = 0 !== BB.precision && 0 !== jB.precision, this._caps.shaderFloatPrecision = Math.min(BB.precision, jB.precision)), !this._shouldUseHighPrecisionShader) {
            const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              jB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            BB && jB && (this._caps.shaderFloatPrecision = Math.min(BB.precision, jB.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const BB = this._gl.getExtension("EXT_blend_minmax");
          null != BB && (this._caps.blendMinMax = !0, this._gl.MAX = BB.MAX_EXT, this._gl.MIN = BB.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const BB = this._gl.getExtension("EXT_sRGB");
            null != BB && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: BB.SRGB_EXT,
              SRGB8: BB.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: BB.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const BB = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== BB && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && BB)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let zB = 0; zB < this._maxSimultaneousTextures; zB++) this._nextFreeTextureSlots.push(zB);
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
      get gm() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const BB = this._workingCanvas.getContext("2d");
        BB && (this._workingContext = BB)
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
        const BB = this.getGlInfo();
        return BB && BB.renderer ? BB.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const dB = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = dB;
        let IB = 0;
        if (jB && BB) {
          let jB = !0;
          if (this._currentRenderTarget) {
            const zB = this._currentRenderTarget.texture?.format;
            if (void 0 !== zB && (0, GB.i)(zB)) {
              const zB = this._currentRenderTarget.texture?.type;
              void 0 !== zB && (0, GB.j)(zB) ? (tB._TempClearColorUint32[0] = 255 * BB.r, tB._TempClearColorUint32[1] = 255 * BB.g, tB._TempClearColorUint32[2] = 255 * BB.b, tB._TempClearColorUint32[3] = 255 * BB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, tB._TempClearColorUint32), jB = !1) : (tB._TempClearColorInt32[0] = 255 * BB.r, tB._TempClearColorInt32[1] = 255 * BB.g, tB._TempClearColorInt32[2] = 255 * BB.b, tB._TempClearColorInt32[3] = 255 * BB.a, this._gl.clearBufferiv(this._gl.COLOR, 0, tB._TempClearColorInt32), jB = !1)
            }
          }
          jB && (this._gl.clearColor(BB.r, BB.g, BB.b, void 0 !== BB.a ? BB.a : 1), IB |= this._gl.COLOR_BUFFER_BIT)
        }
        zB && (this.jQB ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), IB |= this._gl.DEPTH_BUFFER_BIT), QB && (this._gl.clearStencil(nB), IB |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(IB)
      }
      _clearColorAttachment(BB, jB, zB, QB) {
        if ((0, GB.i)(zB)) {
          const zB = (0, GB.j)(QB),
            nB = zB ? tB._TempClearColorUint32 : tB._TempClearColorInt32;
          return nB[0] = jB.r, nB[1] = jB.g, nB[2] = jB.b, nB[3] = jB.a, void(zB ? this._gl.clearBufferuiv(this._gl.COLOR, BB, nB) : this._gl.clearBufferiv(this._gl.COLOR, BB, nB))
        }
        tB._TempClearColorFloat32[0] = jB.r, tB._TempClearColorFloat32[1] = jB.g, tB._TempClearColorFloat32[2] = jB.b, tB._TempClearColorFloat32[3] = jB.a, this._gl.clearBufferfv(this._gl.COLOR, BB, tB._TempClearColorFloat32)
      }
      _viewport(BB, jB, zB, QB) {
        BB === this._viewportCached.x && jB === this._viewportCached.y && zB === this._viewportCached.z && QB === this._viewportCached.w || (this._viewportCached.x = BB, this._viewportCached.y = jB, this._viewportCached.z = zB, this._viewportCached.w = QB, this._gl.viewport(BB, jB, zB, QB))
      }
      tL() {
        super.tL(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const uB = BB;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._integerMRTAttachmentsMask = !BB.isMulti && BB.texture && (0, GB.i)(BB.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(uB._framebuffer);
        const UB = this._gl;
        BB.isMulti || (BB.is2DArray || BB.is3D ? (UB.framebufferTextureLayer(UB.FRAMEBUFFER, UB.COLOR_ATTACHMENT0, BB.texture._hardwareTexture?.underlyingResource, dB, IB), uB._currentLOD = dB) : BB.isCube ? UB.framebufferTexture2D(UB.FRAMEBUFFER, UB.COLOR_ATTACHMENT0, UB.TEXTURE_CUBE_MAP_POSITIVE_X + jB, BB.texture._hardwareTexture?.underlyingResource, dB) : uB._currentLOD !== dB && (UB.framebufferTexture2D(UB.FRAMEBUFFER, UB.COLOR_ATTACHMENT0, UB.TEXTURE_2D, BB.texture._hardwareTexture?.underlyingResource, dB), uB._currentLOD = dB));
        const aB = BB._depthStencilTexture;
        if (aB) {
          BB.is3D && (BB.texture.width === aB.width && BB.texture.height === aB.height && BB.texture.depth === aB.depth || NB.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const zB = BB._depthStencilTextureWithStencil ? UB.DEPTH_STENCIL_ATTACHMENT : UB.DEPTH_ATTACHMENT;
          BB.is2DArray || BB.is3D ? UB.framebufferTextureLayer(UB.FRAMEBUFFER, zB, aB._hardwareTexture?.underlyingResource, dB, IB) : BB.isCube ? UB.framebufferTexture2D(UB.FRAMEBUFFER, zB, UB.TEXTURE_CUBE_MAP_POSITIVE_X + jB, aB._hardwareTexture?.underlyingResource, dB) : UB.framebufferTexture2D(UB.FRAMEBUFFER, zB, UB.TEXTURE_2D, aB._hardwareTexture?.underlyingResource, dB)
        }
        uB._MSAAFramebuffer && this._bindUnboundFramebuffer(uB._MSAAFramebuffer), this._cachedViewport && !nB ? this.setViewport(this._cachedViewport, zB, QB) : (zB || (zB = BB.width, dB && (zB /= Math.pow(2, dB))), QB || (QB = BB.height, dB && (QB /= Math.pow(2, dB))), this._viewport(0, 0, zB, QB)), this.wipeCaches()
      }
      setStateCullFaceType(BB, jB) {
        const zB = this.cullBackFaces ?? BB ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== zB || jB) && (this._depthCullingState.cullFace = zB)
      }
      setState(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== BB || zB) && (this._depthCullingState.cull = BB), this.setStateCullFaceType(nB, zB), this.setZOffset(jB), this.setZOffsetUnits(IB);
        const NB = QB ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== NB || zB) && (this._depthCullingState.frontFace = NB), this._stencilStateComposer.stencilMaterial = dB
      }
      _resolveAndGenerateMipMapsFramebuffer(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB.disableAutomaticMSAAResolve || (BB.isMulti ? this.resolveMultiFramebuffer(BB) : this.resolveFramebuffer(BB)), jB || (BB.isMulti ? this.generateMipMapsMultiFramebuffer(BB) : this.generateMipMapsFramebuffer(BB))
      }
      _bindUnboundFramebuffer(BB) {
        this._currentFramebuffer !== BB && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, BB), this._currentFramebuffer = BB)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(BB) {
        const jB = this._getTextureTarget(BB);
        this._bindTextureDirectly(jB, BB, !0), this._gl.generateMipmap(jB), this._bindTextureDirectly(jB, null)
      }
      unBindFramebuffer(BB, jB, zB) {
        const QB = BB;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(BB, jB), zB && (QB._MSAAFramebuffer && this._bindUnboundFramebuffer(QB._framebuffer), zB()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(BB) {
        BB.isMulti || !BB.texture?.generateMipMaps || BB.isCube || this.generateMipmaps(BB.texture)
      }
      resolveFramebuffer(BB) {
        const jB = BB,
          zB = this._gl;
        if (!jB._MSAAFramebuffer || jB.isMulti) return;
        let QB = jB.resolveMSAAColors ? zB.COLOR_BUFFER_BIT : 0;
        QB |= jB._generateDepthBuffer && jB.resolveMSAADepth ? zB.DEPTH_BUFFER_BIT : 0, QB |= jB._generateStencilBuffer && jB.resolveMSAAStencil ? zB.STENCIL_BUFFER_BIT : 0, zB.bindFramebuffer(zB.READ_FRAMEBUFFER, jB._MSAAFramebuffer), zB.bindFramebuffer(zB.DRAW_FRAMEBUFFER, jB._framebuffer), zB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, QB, zB.NEAREST)
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
      createVertexBuffer(BB, jB, zB) {
        return this._createVertexBuffer(BB, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(BB, jB) {
        const zB = this._gl.createBuffer();
        if (!zB) throw new Error("Unable to create vertex buffer");
        const QB = new rB.d(zB);
        return this.bindArrayBuffer(QB), "number" !== typeof BB ? BB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(BB), jB), QB.Ep = 4 * BB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, jB), QB.Ep = BB.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(BB), jB), QB.Ep = BB), this._resetVertexBufferBinding(), QB.references = 1, QB
      }
      createDynamicVertexBuffer(BB, jB) {
        return this._createVertexBuffer(BB, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(BB, jB, zB) {
        const QB = this._gl.createBuffer(),
          nB = new rB.d(QB);
        if (!QB) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(nB);
        const dB = this._normalizeIndexData(BB);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, dB, jB ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), nB.references = 1, nB.is32Bits = 4 === dB.BYTES_PER_ELEMENT, nB
      }
      _normalizeIndexData(BB) {
        if (2 === BB.BYTES_PER_ELEMENT) return BB;
        if (this._caps.uintIndices) {
          if (BB instanceof Uint32Array) return BB;
          for (let jB = 0; jB < BB.length; jB++)
            if (BB[jB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }
        return new Uint16Array(BB)
      }
      bindArrayBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(BB, jB, zB) {
        const QB = BB.program,
          nB = this._gl.getUniformBlockIndex(QB, jB);
        this._gl.uniformBlockBinding(QB, nB, zB)
      }
      bindIndexBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(BB, jB) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[jB] !== BB) && (this._gl.bindBuffer(jB, BB ? BB.underlyingResource : null), this._currentBoundBuffer[jB] = BB)
      }
      updateArrayBuffer(BB) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, BB)
      }
      _vertexAttribPointer(BB, jB, zB, QB, nB, dB, IB) {
        const NB = this._currentBufferPointers[jB];
        if (!NB) return;
        let uB = !1;
        NB.active ? (NB.buffer !== BB && (NB.buffer = BB, uB = !0), NB.size !== zB && (NB.size = zB, uB = !0), NB.type !== QB && (NB.type = QB, uB = !0), NB.normalized !== nB && (NB.normalized = nB, uB = !0), NB.stride !== dB && (NB.stride = dB, uB = !0), NB.offset !== IB && (NB.offset = IB, uB = !0)) : (uB = !0, NB.active = !0, NB.index = jB, NB.size = zB, NB.type = QB, NB.normalized = nB, NB.stride = dB, NB.offset = IB, NB.buffer = BB), (uB || this._vaoRecordInProgress) && (this.bindArrayBuffer(BB), QB === this._gl.UNSIGNED_INT || QB === this._gl.INT ? this._gl.vertexAttribIPointer(jB, zB, QB, dB, IB) : this._gl.vertexAttribPointer(jB, zB, QB, nB, dB, IB))
      }
      _bindIndexBufferWithCache(BB) {
        null != BB && this._cachedIndexBuffer !== BB && (this._cachedIndexBuffer = BB, this.bindIndexBuffer(BB), this._uintIndicesCurrentlySet = BB.is32Bits)
      }
      _bindVertexBuffersAttributes(BB, jB, zB) {
        const QB = jB.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let nB = 0; nB < QB.length; nB++) {
          const dB = jB.getAttributeLocation(nB);
          if (dB >= 0) {
            const jB = QB[nB];
            let IB = null;
            if (zB && (IB = zB[jB]), IB || (IB = BB[jB]), !IB) continue;
            this._gl.enableVertexAttribArray(dB), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[dB] = !0);
            const NB = IB.getBuffer();
            NB && (this._vertexAttribPointer(NB, dB, IB.getSize(), IB.type, IB.normalized, IB.byteStride, IB.byteOffset), IB.getIsInstanced() && (this._gl.vertexAttribDivisor(dB, IB.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(dB), this._currentInstanceBuffers.push(NB))))
          }
        }
      }
      recordVertexArrayObject(BB, jB, zB, QB) {
        const nB = this._gl.createVertexArray();
        if (!nB) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(nB), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(BB, zB, QB), this.bindIndexBuffer(jB), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), nB
      }
      bindVertexArrayObject(BB, jB) {
        this._cachedVertexArrayObject !== BB && (this._cachedVertexArrayObject = BB, this._gl.bindVertexArray(BB), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != jB && jB.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(BB, jB, zB, QB, nB) {
        if (this._cachedVertexBuffers !== BB || this._cachedEffectForVertexBuffers !== nB) {
          this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = nB;
          const jB = nB.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let dB = 0;
          for (let IB = 0; IB < jB; IB++)
            if (IB < zB.length) {
              const jB = nB.getAttributeLocation(IB);
              jB >= 0 && (this._gl.enableVertexAttribArray(jB), this._vertexAttribArraysEnabled[jB] = !0, this._vertexAttribPointer(BB, jB, zB[IB], this._gl.FLOAT, !1, QB, dB)), dB += 4 * zB[IB]
            }
        }
        this._bindIndexBufferWithCache(jB)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(BB, jB, zB, QB) {
        this._cachedVertexBuffers === BB && this._cachedEffectForVertexBuffers === zB || (this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = zB, this._bindVertexBuffersAttributes(BB, zB, QB)), this._bindIndexBufferWithCache(jB)
      }
      unbindInstanceAttributes() {
        let BB;
        for (let jB = 0, zB = this._currentInstanceLocations.length; jB < zB; jB++) {
          const zB = this._currentInstanceBuffers[jB];
          BB != zB && zB.references && (BB = zB, this.bindArrayBuffer(zB));
          const QB = this._currentInstanceLocations[jB];
          this._gl.vertexAttribDivisor(QB, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(BB) {
        this._gl.deleteVertexArray(BB)
      }
      _releaseBuffer(BB) {
        return BB.references--, 0 === BB.references && (this._deleteBuffer(BB), !0)
      }
      _deleteBuffer(BB) {
        this._gl.deleteBuffer(BB.underlyingResource)
      }
      updateAndBindInstancesBuffer(BB, jB, zB) {
        if (this.bindArrayBuffer(BB), jB && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, jB), void 0 !== zB[0].index) this.bindInstancesBuffer(BB, zB, !0);
        else
          for (let QB = 0; QB < 4; QB++) {
            const jB = zB[QB];
            this._vertexAttribArraysEnabled[jB] || (this._gl.enableVertexAttribArray(jB), this._vertexAttribArraysEnabled[jB] = !0), this._vertexAttribPointer(BB, jB, 4, this._gl.FLOAT, !1, 64, 16 * QB), this._gl.vertexAttribDivisor(jB, 1), this._currentInstanceLocations.push(jB), this._currentInstanceBuffers.push(BB)
          }
      }
      bindInstancesBuffer(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(BB);
        let QB = 0;
        if (zB)
          for (let nB = 0; nB < jB.length; nB++) {
            QB += 4 * jB[nB].attributeSize
          }
        for (let nB = 0; nB < jB.length; nB++) {
          const zB = jB[nB];
          void 0 === zB.index && (zB.index = this._currentEffect.getAttributeLocationByName(zB.attributeName)), zB.index < 0 || (this._vertexAttribArraysEnabled[zB.index] || (this._gl.enableVertexAttribArray(zB.index), this._vertexAttribArraysEnabled[zB.index] = !0), this._vertexAttribPointer(BB, zB.index, zB.attributeSize, zB.attributeType || this._gl.FLOAT, zB.normalized || !1, QB, zB.offset), this._gl.vertexAttribDivisor(zB.index, void 0 === zB.divisor ? 1 : zB.divisor), this._currentInstanceLocations.push(zB.index), this._currentInstanceBuffers.push(BB))
        }
      }
      disableInstanceAttributeByName(BB) {
        if (!this._currentEffect) return;
        const jB = this._currentEffect.getAttributeLocationByName(BB);
        this.disableInstanceAttribute(jB)
      }
      disableInstanceAttribute(BB) {
        let jB, zB = !1;
        for (; - 1 !== (jB = this._currentInstanceLocations.indexOf(BB));) this._currentInstanceLocations.splice(jB, 1), this._currentInstanceBuffers.splice(jB, 1), zB = !0;
        zB && (this._gl.vertexAttribDivisor(BB, 0), this.disableAttributeByIndex(BB))
      }
      disableAttributeByIndex(BB) {
        this._gl.disableVertexAttribArray(BB), this._vertexAttribArraysEnabled[BB] = !1, this._currentBufferPointers[BB].active = !1
      }
      draw(BB, jB, zB, QB) {
        this.drawElementsType(BB ? 0 : 1, jB, zB, QB)
      }
      drawPointClouds(BB, jB, zB) {
        this.drawArraysType(2, BB, jB, zB)
      }
      drawUnIndexed(BB, jB, zB, QB) {
        this.drawArraysType(BB ? 0 : 1, jB, zB, QB)
      }
      drawElementsType(BB, jB, zB, QB) {
        this.applyStates(), this._reportDrawCall();
        const nB = this._drawMode(BB),
          dB = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          IB = this._uintIndicesCurrentlySet ? 4 : 2;
        QB ? this._gl.drawElementsInstanced(nB, zB, dB, jB * IB, QB) : this._gl.drawElements(nB, zB, dB, jB * IB)
      }
      drawArraysType(BB, jB, zB, QB) {
        this.applyStates(), this._reportDrawCall();
        const nB = this._drawMode(BB);
        QB ? this._gl.drawArraysInstanced(nB, jB, zB, QB) : this._gl.drawArrays(nB, jB, zB)
      }
      _drawMode(BB) {
        switch (BB) {
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
      _releaseEffect(BB) {
        this._compiledEffects[BB._key] && delete this._compiledEffects[BB._key];
        const jB = BB.getPipelineContext();
        jB && this._deletePipelineContext(jB)
      }
      _deletePipelineContext(BB) {
        const jB = BB;
        jB && jB.program && (jB.program.__SPECTOR_rebuildProgram = null, (0, kB.j)(jB), this._gl && (this._currentProgram === jB.program && this._setProgram(null), this._gl.deleteProgram(jB.program)))
      }
      _getGlobalDefines(BB) {
        return (0, yB.k)(BB, this.isNDCHalfZRange, this.jQB, this.useExactSrgbConversions)
      }
      createEffect(BB, jB, zB, dB, IB, NB, uB, UB, aB) {
        let pB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          rB = arguments.length > 10 ? arguments[10] : void 0;
        const sB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
          JB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
          mB = this._getGlobalDefines(),
          yB = void 0 !== jB.attributes;
        let kB = IB ?? jB.defines ?? "";
        mB && (kB += mB);
        const GB = sB + "+" + JB + "@" + kB;
        if (this._compiledEffects[GB]) {
          const BB = this._compiledEffects[GB];
          return uB && BB.isReady() && uB(BB), BB._refCount++, BB
        }
        this._gl && (0, nB.G)(this._gl);
        const LB = new QB.e(BB, jB, yB ? this : zB, dB, this, IB, NB, uB, UB, aB, GB, jB.shaderLanguage ?? pB, jB.extraInitializationsAsync ?? rB);
        return this._compiledEffects[GB] = LB, LB
      }
      _getShaderSource(BB) {
        return this._gl.getShaderSource(BB)
      }
      createRawShaderProgram(BB, jB, zB, QB) {
        let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const IB = (0, nB.G)(this._gl);
        return IB._contextWasLost = this._contextWasLost, IB.validateShaderPrograms = this.validateShaderPrograms, (0, nB.y)(BB, jB, zB, QB || this._gl, dB)
      }
      createShaderProgram(BB, jB, zB, QB, dB) {
        let IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const NB = (0, nB.G)(this._gl);
        return NB._contextWasLost = this._contextWasLost, NB.validateShaderPrograms = this.validateShaderPrograms, (0, nB.A)(BB, jB, zB, QB, dB || this._gl, IB)
      }
      inlineShaderCode(BB) {
        return BB
      }
      createPipelineContext(BB) {
        if (this._gl) {
          (0, nB.G)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const jB = (0, nB.u)(this._gl, BB);
        return jB.engine = this, jB
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(BB) {
        return (0, nB.k)(BB, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(BB, jB, zB, QB, dB, IB, NB, uB, UB, aB, pB) {
        const rB = (0, nB.G)(this._gl);
        return rB._contextWasLost = this._contextWasLost, rB.validateShaderPrograms = this.validateShaderPrograms, rB._createShaderProgramInjection = this._createShaderProgram.bind(this), rB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), rB.createShaderProgramInjection = this.createShaderProgram.bind(this), rB.loadFileInjection = this._loadFile.bind(this), (0, nB.q)(BB, jB, zB, QB, dB, IB, NB, uB, UB, aB, pB)
      }
      _createShaderProgram(BB, jB, zB, QB) {
        let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, nB.d)(BB, jB, zB, QB, dB)
      }
      _isRenderingStateCompiled(BB) {
        return !this._isDisposed && (0, nB.n)(BB, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(BB, jB) {
        (0, nB.h)(BB, jB)
      }
      getUniforms(BB, jB) {
        const zB = new Array,
          QB = BB;
        for (let nB = 0; nB < jB.length; nB++) zB.push(this._gl.getUniformLocation(QB.program, jB[nB]));
        return zB
      }
      getAttributes(BB, jB) {
        const zB = [],
          QB = BB;
        for (let dB = 0; dB < jB.length; dB++) try {
          zB.push(this._gl.getAttribLocation(QB.program, jB[dB]))
        } catch (nB) {
          zB.push(-1)
        }
        return zB
      }
      enableEffect(BB) {
        (BB = null !== BB && (0, IB.e)(BB) ? BB.effect : BB) && BB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(BB), this._currentEffect = BB, BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setInt(BB, jB) {
        return !!BB && (this._gl.uniform1i(BB, jB), !0)
      }
      setInt2(BB, jB, zB) {
        return !!BB && (this._gl.uniform2i(BB, jB, zB), !0)
      }
      setInt3(BB, jB, zB, QB) {
        return !!BB && (this._gl.uniform3i(BB, jB, zB, QB), !0)
      }
      setInt4(BB, jB, zB, QB, nB) {
        return !!BB && (this._gl.uniform4i(BB, jB, zB, QB, nB), !0)
      }
      setIntArray(BB, jB) {
        return !!BB && (this._gl.uniform1iv(BB, jB), !0)
      }
      setIntArray2(BB, jB) {
        return !(!BB || jB.length % 2 !== 0) && (this._gl.uniform2iv(BB, jB), !0)
      }
      setIntArray3(BB, jB) {
        return !(!BB || jB.length % 3 !== 0) && (this._gl.uniform3iv(BB, jB), !0)
      }
      setIntArray4(BB, jB) {
        return !(!BB || jB.length % 4 !== 0) && (this._gl.uniform4iv(BB, jB), !0)
      }
      setUInt(BB, jB) {
        return !!BB && (this._gl.uniform1ui(BB, jB), !0)
      }
      setUInt2(BB, jB, zB) {
        return !!BB && (this._gl.uniform2ui(BB, jB, zB), !0)
      }
      setUInt3(BB, jB, zB, QB) {
        return !!BB && (this._gl.uniform3ui(BB, jB, zB, QB), !0)
      }
      setUInt4(BB, jB, zB, QB, nB) {
        return !!BB && (this._gl.uniform4ui(BB, jB, zB, QB, nB), !0)
      }
      setUIntArray(BB, jB) {
        return !!BB && (this._gl.uniform1uiv(BB, jB), !0)
      }
      setUIntArray2(BB, jB) {
        return !(!BB || jB.length % 2 !== 0) && (this._gl.uniform2uiv(BB, jB), !0)
      }
      setUIntArray3(BB, jB) {
        return !(!BB || jB.length % 3 !== 0) && (this._gl.uniform3uiv(BB, jB), !0)
      }
      setUIntArray4(BB, jB) {
        return !(!BB || jB.length % 4 !== 0) && (this._gl.uniform4uiv(BB, jB), !0)
      }
      setArray(BB, jB) {
        return !!BB && (!(jB.length < 1) && (this._gl.uniform1fv(BB, jB), !0))
      }
      setArray2(BB, jB) {
        return !(!BB || jB.length % 2 !== 0) && (this._gl.uniform2fv(BB, jB), !0)
      }
      setArray3(BB, jB) {
        return !(!BB || jB.length % 3 !== 0) && (this._gl.uniform3fv(BB, jB), !0)
      }
      setArray4(BB, jB) {
        return !(!BB || jB.length % 4 !== 0) && (this._gl.uniform4fv(BB, jB), !0)
      }
      setMatrices(BB, jB) {
        return !!BB && (this._gl.uniformMatrix4fv(BB, !1, jB), !0)
      }
      setMatrix3x3(BB, jB) {
        return !!BB && (this._gl.uniformMatrix3fv(BB, !1, jB), !0)
      }
      setMatrix2x2(BB, jB) {
        return !!BB && (this._gl.uniformMatrix2fv(BB, !1, jB), !0)
      }
      setFloat(BB, jB) {
        return !!BB && (this._gl.uniform1f(BB, jB), !0)
      }
      setFloat2(BB, jB, zB) {
        return !!BB && (this._gl.uniform2f(BB, jB, zB), !0)
      }
      setFloat3(BB, jB, zB, QB) {
        return !!BB && (this._gl.uniform3f(BB, jB, zB, QB), !0)
      }
      setFloat4(BB, jB, zB, QB, nB) {
        return !!BB && (this._gl.uniform4f(BB, jB, zB, QB, nB), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const BB = this._colorWrite;
          this._gl.colorMask(BB, BB, BB, BB)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames && !BB || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), BB && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(BB, jB) {
        const zB = this._gl;
        let QB = zB.NEAREST,
          nB = zB.NEAREST,
          dB = !1;
        switch (BB) {
          case 11:
            QB = zB.LINEAR, nB = jB ? zB.LINEAR_MIPMAP_NEAREST : zB.LINEAR;
            break;
          case 3:
            QB = zB.LINEAR, dB = !0, nB = jB ? zB.LINEAR_MIPMAP_LINEAR : zB.LINEAR;
            break;
          case 8:
            dB = !0, QB = zB.NEAREST, nB = jB ? zB.NEAREST_MIPMAP_LINEAR : zB.NEAREST;
            break;
          case 4:
            QB = zB.NEAREST, nB = jB ? zB.NEAREST_MIPMAP_NEAREST : zB.NEAREST;
            break;
          case 5:
            QB = zB.NEAREST, nB = jB ? zB.LINEAR_MIPMAP_NEAREST : zB.LINEAR;
            break;
          case 6:
            dB = !0, QB = zB.NEAREST, nB = jB ? zB.LINEAR_MIPMAP_LINEAR : zB.LINEAR;
            break;
          case 7:
            QB = zB.NEAREST, nB = zB.LINEAR;
            break;
          case 1:
            QB = zB.NEAREST, nB = zB.NEAREST;
            break;
          case 9:
            QB = zB.LINEAR, nB = jB ? zB.NEAREST_MIPMAP_NEAREST : zB.NEAREST;
            break;
          case 10:
            dB = !0, QB = zB.LINEAR, nB = jB ? zB.NEAREST_MIPMAP_LINEAR : zB.NEAREST;
            break;
          case 2:
            QB = zB.LINEAR, nB = zB.LINEAR;
            break;
          case 12:
            QB = zB.LINEAR, nB = zB.NEAREST
        }
        return {
          min: nB,
          mag: QB,
          hasMipMaps: dB
        }
      }
      _createTexture() {
        const BB = this._gl.createTexture();
        if (!BB) throw new Error("Unable to create texture");
        return BB
      }
      _createHardwareTexture() {
        return new JB.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(BB, jB) {
        let zB, QB, nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          dB = !1,
          IB = 0,
          uB = 3,
          UB = 5,
          aB = !1,
          pB = 1,
          rB = !1,
          sB = 0,
          JB = !1;
        void 0 !== jB && "object" === typeof jB ? (zB = !!jB.generateMipMaps, dB = !!jB.createMipMaps, IB = void 0 === jB.type ? 0 : jB.type, uB = void 0 === jB.samplingMode ? 3 : jB.samplingMode, UB = void 0 === jB.format ? 5 : jB.format, aB = void 0 !== jB.useSRGBBuffer && jB.useSRGBBuffer, pB = jB.samples ?? 1, QB = jB.label, rB = !!jB.createMSAATexture, sB = jB.comparisonFunction || 0, JB = !!jB.isCube) : zB = !!jB, aB && (aB = this._caps.supportSRGBBuffers && (this.gm > 1 || this.isWebGPU)), (1 !== IB || this._caps.textureFloatLinearFiltering) && (2 !== IB || this._caps.textureHalfFloatLinearFiltering) || (uB = 1), 1 !== IB || this._caps.textureFloat || (IB = 0, NB.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const yB = (0, GB.g)(UB),
          kB = (0, GB.d)(UB),
          LB = this._gl,
          gB = new mB.d(this, nB),
          tB = BB.width || BB,
          SB = BB.height || BB,
          MB = BB.depth || 0,
          EB = BB.layers || 0,
          iB = this._getSamplingParameters(uB, (zB || dB) && !yB),
          qB = 0 !== EB ? LB.TEXTURE_2D_ARRAY : 0 !== MB ? LB.TEXTURE_3D : JB ? LB.TEXTURE_CUBE_MAP : LB.TEXTURE_2D,
          fB = yB ? this._getInternalFormatFromDepthTextureFormat(UB, !0, kB) : this._getRGBABufferInternalSizedFormat(IB, UB, aB),
          oB = yB ? kB ? LB.DEPTH_STENCIL : LB.DEPTH_COMPONENT : this._getInternalFormat(UB),
          HB = yB ? this._getWebGLTextureTypeFromDepthTextureFormat(UB) : this._getWebGLTextureType(IB);
        if (this._bindTextureDirectly(qB, gB), 0 !== EB) gB.is2DArray = !0, LB.texImage3D(qB, 0, fB, tB, SB, EB, 0, oB, HB, null);
        else if (0 !== MB) gB.is3D = !0, LB.texImage3D(qB, 0, fB, tB, SB, MB, 0, oB, HB, null);
        else if (JB) {
          gB.isCube = !0;
          for (let BB = 0; BB < 6; BB++) LB.texImage2D(LB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, fB, tB, SB, 0, oB, HB, null)
        } else LB.texImage2D(qB, 0, fB, tB, SB, 0, oB, HB, null);
        if (LB.texParameteri(qB, LB.TEXTURE_MAG_FILTER, iB.mag), LB.texParameteri(qB, LB.TEXTURE_MIN_FILTER, iB.min), LB.texParameteri(qB, LB.TEXTURE_WRAP_S, LB.CLAMP_TO_EDGE), LB.texParameteri(qB, LB.TEXTURE_WRAP_T, LB.CLAMP_TO_EDGE), yB && this.gm > 1 && (0 === sB ? (LB.texParameteri(qB, LB.TEXTURE_COMPARE_FUNC, 515), LB.texParameteri(qB, LB.TEXTURE_COMPARE_MODE, LB.NONE)) : (LB.texParameteri(qB, LB.TEXTURE_COMPARE_FUNC, sB), LB.texParameteri(qB, LB.TEXTURE_COMPARE_MODE, LB.COMPARE_REF_TO_TEXTURE))), (zB || dB) && this._gl.generateMipmap(qB), this._bindTextureDirectly(qB, null), gB._useSRGBBuffer = aB, gB.baseWidth = tB, gB.baseHeight = SB, gB.width = tB, gB.height = SB, gB.depth = EB || MB, gB.isReady = !0, gB.samples = pB, gB.generateMipMaps = zB, gB.samplingMode = uB, gB.type = IB, gB.format = UB, gB.label = QB, gB.comparisonFunction = sB, this._internalTexturesCache.push(gB), rB) {
          let BB;
          if (BB = (0, GB.g)(gB.format) ? this._setupFramebufferDepthAttachments((0, GB.d)(gB.format), 19 !== gB.format, gB.width, gB.height, pB, gB.format, !0) : this._createRenderBuffer(gB.width, gB.height, pB, -1, this._getRGBABufferInternalSizedFormat(gB.type, gB.format, gB._useSRGBBuffer), -1), !BB) throw new Error("Unable to create render buffer");
          gB._autoMSAAManagement = !0;
          let jB = gB._hardwareTexture;
          jB || (jB = gB._hardwareTexture = this._createHardwareTexture()), jB.addMSAARenderBuffer(BB)
        }
        return gB
      }
      _getUseSRGBBuffer(BB, jB) {
        return BB && this._caps.supportSRGBBuffers && (this.gm > 1 || jB)
      }
      createTexture(BB, jB, zB, QB) {
        var nB = this;
        let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          uB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          UB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          aB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          rB = arguments.length > 11 ? arguments[11] : void 0,
          sB = arguments.length > 12 ? arguments[12] : void 0,
          JB = arguments.length > 13 ? arguments[13] : void 0,
          yB = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(BB, jB, zB, QB, dB, IB, NB, (function() {
          for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
          return nB._prepareWebGLTexture(...jB, aB)
        }), ((BB, jB, zB, nB, dB, IB) => {
          const NB = this._gl,
            uB = zB.width === BB && zB.height === jB;
          dB._creationFlags = JB ?? 0;
          const UB = this._getTexImageParametersForCreateTexture(dB.format, dB._useSRGBBuffer);
          if (uB) return NB.texImage2D(NB.TEXTURE_2D, 0, UB.internalFormat, UB.format, UB.type, zB), !1;
          const aB = this._caps.maxTextureSize;
          if (zB.width > aB || zB.height > aB || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = BB, this._workingCanvas.height = jB, this._workingContext.drawImage(zB, 0, 0, zB.width, zB.height, 0, 0, BB, jB), NB.texImage2D(NB.TEXTURE_2D, 0, UB.internalFormat, UB.format, UB.type, this._workingCanvas), dB.width = BB, dB.height = jB, !1);
          {
            const BB = new mB.d(this, 2);
            this._bindTextureDirectly(NB.TEXTURE_2D, BB, !0), NB.texImage2D(NB.TEXTURE_2D, 0, UB.internalFormat, UB.format, UB.type, zB), this._rescaleTexture(BB, dB, QB, UB.format, (() => {
              this._releaseTexture(BB), this._bindTextureDirectly(NB.TEXTURE_2D, dB, !0), IB()
            }))
          }
          return !0
        }), uB, UB, aB, pB, rB, sB, yB)
      }
      _getTexImageParametersForCreateTexture(BB, jB) {
        let zB, QB;
        return 1 === this.gm ? (zB = this._getInternalFormat(BB, jB), QB = zB) : (zB = this._getInternalFormat(BB, !1), QB = this._getRGBABufferInternalSizedFormat(0, BB, jB)), {
          internalFormat: QB,
          format: zB,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(BB, jB, zB, QB, nB) {}
      _unpackFlipY(BB) {
        this._unpackFlipYCached !== BB && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, BB ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = BB))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(BB) {
        return BB.isCube ? this._gl.TEXTURE_CUBE_MAP : BB.is3D ? this._gl.TEXTURE_3D : BB.is2DArray || BB.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = this._getTextureTarget(jB),
          nB = this._getSamplingParameters(BB, jB.useMipMaps || zB);
        this._setTextureParameterInteger(QB, this._gl.TEXTURE_MAG_FILTER, nB.mag, jB), this._setTextureParameterInteger(QB, this._gl.TEXTURE_MIN_FILTER, nB.min), zB && nB.hasMipMaps && (jB.generateMipMaps = !0, this._gl.generateMipmap(QB)), this._bindTextureDirectly(QB, null), jB.samplingMode = BB
      }
      updateTextureDimensions(BB, jB, zB) {}
      updateTextureWrappingMode(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nB = this._getTextureTarget(BB);
        null !== jB && (this._setTextureParameterInteger(nB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(jB), BB), BB._cachedWrapU = jB), null !== zB && (this._setTextureParameterInteger(nB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(zB), BB), BB._cachedWrapV = zB), (BB.is2DArray || BB.is3D) && null !== QB && (this._setTextureParameterInteger(nB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(QB), BB), BB._cachedWrapR = QB), this._bindTextureDirectly(nB, null)
      }
      _uploadCompressedDataToTextureDirectly(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const NB = this._gl;
        let uB = NB.TEXTURE_2D;
        if (BB.isCube && (uB = NB.TEXTURE_CUBE_MAP_POSITIVE_X + dB), BB._useSRGBBuffer) switch (jB) {
          case 37492:
          case 36196:
            this._caps.etc2 ? jB = NB.COMPRESSED_SRGB8_ETC2 : BB._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? jB = NB.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : BB._useSRGBBuffer = !1;
            break;
          case 36492:
            jB = NB.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            jB = NB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? jB = NB.COMPRESSED_SRGB_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? jB = NB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? jB = NB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : BB._useSRGBBuffer = !1;
            break;
          default:
            BB._useSRGBBuffer = !1
        }
        if (BB.generateMipMaps) {
          const dB = BB._hardwareTexture;
          dB.memoryAllocated || (NB.texStorage2D(BB.isCube ? NB.TEXTURE_CUBE_MAP : NB.TEXTURE_2D, Math.floor(Math.log2(Math.max(zB, QB))) + 1, jB, BB.width, BB.height), dB.memoryAllocated = !0), this._gl.compressedTexSubImage2D(uB, IB, 0, 0, zB, QB, jB, nB)
        } else this._gl.compressedTexImage2D(uB, IB, jB, zB, QB, 0, nB)
      }
      _uploadDataToTextureDirectly(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const IB = this._gl,
          NB = this._getWebGLTextureType(BB.type),
          uB = this._getInternalFormat(BB.format),
          UB = void 0 === nB ? this._getRGBABufferInternalSizedFormat(BB.type, BB.format, BB._useSRGBBuffer) : this._getInternalFormat(nB, BB._useSRGBBuffer);
        this._unpackFlipY(BB.invertY);
        let aB = IB.TEXTURE_2D;
        BB.isCube && (aB = IB.TEXTURE_CUBE_MAP_POSITIVE_X + zB);
        const pB = Math.round(Math.log(BB.width) * Math.LOG2E),
          rB = Math.round(Math.log(BB.height) * Math.LOG2E),
          sB = dB ? BB.width : Math.pow(2, Math.max(pB - QB, 0)),
          JB = dB ? BB.height : Math.pow(2, Math.max(rB - QB, 0));
        IB.texImage2D(aB, QB, UB, sB, JB, 0, uB, NB, jB)
      }
      updateTextureData(BB, jB, zB, QB, nB, dB) {
        let IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const UB = this._gl,
          aB = this._getWebGLTextureType(BB.type),
          pB = this._getInternalFormat(BB.format);
        this._unpackFlipY(BB.invertY);
        let rB = UB.TEXTURE_2D,
          sB = UB.TEXTURE_2D;
        BB.isCube && (sB = UB.TEXTURE_CUBE_MAP_POSITIVE_X + IB, rB = UB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(rB, BB, !0), UB.texSubImage2D(sB, NB, zB, QB, nB, dB, pB, aB, jB), uB && this._gl.generateMipmap(sB), this._bindTextureDirectly(rB, null)
      }
      _uploadArrayBufferViewToTexture(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nB = this._gl,
          dB = BB.isCube ? nB.TEXTURE_CUBE_MAP : nB.TEXTURE_2D;
        this._bindTextureDirectly(dB, BB, !0), this._uploadDataToTextureDirectly(BB, jB, zB, QB), this._bindTextureDirectly(dB, null, !0)
      }
      _prepareWebGLTextureContinuation(BB, jB, zB, QB, nB) {
        const dB = this._gl;
        if (!dB) return;
        const IB = this._getSamplingParameters(nB, !zB);
        dB.texParameteri(dB.TEXTURE_2D, dB.TEXTURE_MAG_FILTER, IB.mag), dB.texParameteri(dB.TEXTURE_2D, dB.TEXTURE_MIN_FILTER, IB.min), zB || QB || dB.generateMipmap(dB.TEXTURE_2D), this._bindTextureDirectly(dB.TEXTURE_2D, null), jB && jB.removePendingData(BB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        const aB = this.getCaps().maxTextureSize,
          pB = Math.min(aB, this.needPOTTextures ? (0, sB.c)(QB.width, aB) : QB.width),
          rB = Math.min(aB, this.needPOTTextures ? (0, sB.c)(QB.height, aB) : QB.height),
          JB = this._gl;
        JB && (BB._hardwareTexture ? (this._bindTextureDirectly(JB.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === nB || !!nB), BB.baseWidth = QB.width, BB.baseHeight = QB.height, BB.width = pB, BB.height = rB, BB.isReady = !0, BB.type = -1 !== BB.type ? BB.type : 0, BB.format = -1 !== BB.format ? BB.format : UB ?? (".jpg" !== jB || BB._useSRGBBuffer ? 5 : 4), NB(pB, rB, QB, jB, BB, (() => {
          this._prepareWebGLTextureContinuation(BB, zB, dB, IB, uB)
        })) || this._prepareWebGLTextureContinuation(BB, zB, dB, IB, uB)) : zB && zB.removePendingData(BB))
      }
      _getInternalFormatFromDepthTextureFormat(BB, jB, zB) {
        const QB = this._gl;
        if (!jB) return QB.STENCIL_INDEX8;
        let nB = zB ? QB.DEPTH_STENCIL : QB.DEPTH_COMPONENT;
        return this.gm > 1 ? 15 === BB ? nB = QB.DEPTH_COMPONENT16 : 16 === BB ? nB = QB.DEPTH_COMPONENT24 : 17 === BB || 13 === BB ? nB = zB ? QB.DEPTH24_STENCIL8 : QB.DEPTH_COMPONENT24 : 14 === BB ? nB = QB.DEPTH_COMPONENT32F : 18 === BB && (nB = zB ? QB.DEPTH32F_STENCIL8 : QB.DEPTH_COMPONENT32F) : nB = QB.DEPTH_COMPONENT16, nB
      }
      _getWebGLTextureTypeFromDepthTextureFormat(BB) {
        const jB = this._gl;
        let zB = jB.UNSIGNED_INT;
        return 15 === BB ? zB = jB.UNSIGNED_SHORT : 17 === BB || 13 === BB ? zB = jB.UNSIGNED_INT_24_8 : 14 === BB ? zB = jB.FLOAT : 18 === BB ? zB = jB.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === BB && (zB = jB.UNSIGNED_BYTE), zB
      }
      _setupFramebufferDepthAttachments(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          dB = arguments.length > 5 ? arguments[5] : void 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const NB = this._gl;
        dB = dB ?? (BB ? 13 : 14);
        const uB = this._getInternalFormatFromDepthTextureFormat(dB, jB, BB);
        return BB && jB ? this._createRenderBuffer(zB, QB, nB, NB.DEPTH_STENCIL, uB, IB ? -1 : NB.DEPTH_STENCIL_ATTACHMENT) : jB ? this._createRenderBuffer(zB, QB, nB, uB, uB, IB ? -1 : NB.DEPTH_ATTACHMENT) : BB ? this._createRenderBuffer(zB, QB, nB, uB, uB, IB ? -1 : NB.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(BB, jB, zB, QB, nB, dB) {
        let IB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const NB = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(NB, BB, jB, zB, QB, nB, dB, IB)
      }
      _updateRenderBuffer(BB, jB, zB, QB, nB, dB, IB) {
        let NB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const uB = this._gl;
        return uB.bindRenderbuffer(uB.RENDERBUFFER, BB), QB > 1 && uB.renderbufferStorageMultisample ? uB.renderbufferStorageMultisample(uB.RENDERBUFFER, QB, dB, jB, zB) : uB.renderbufferStorage(uB.RENDERBUFFER, nB, jB, zB), -1 !== IB && uB.framebufferRenderbuffer(uB.FRAMEBUFFER, IB, uB.RENDERBUFFER, BB), NB && uB.bindRenderbuffer(uB.RENDERBUFFER, null), BB
      }
      _releaseTexture(BB) {
        this._deleteTexture(BB._hardwareTexture), this.unbindAllTextures();
        const jB = this._internalTexturesCache.indexOf(BB); - 1 !== jB && this._internalTexturesCache.splice(jB, 1), BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._irradianceTexture && BB._irradianceTexture.dispose()
      }
      _deleteTexture(BB) {
        BB?.release()
      }
      _setProgram(BB) {
        this._currentProgram !== BB && ((0, nB.s)(BB, this._gl), this._currentProgram = BB)
      }
      bindSamplers(BB) {
        const jB = BB.getPipelineContext();
        this._setProgram(jB.program);
        const zB = BB.getSamplers();
        for (let QB = 0; QB < zB.length; QB++) {
          const jB = BB.getUniform(zB[QB]);
          jB && (this._boundUniforms[QB] = jB)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nB = !1;
        const dB = jB && jB._associatedChannel > -1;
        zB && dB && (this._activeChannel = jB._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== jB || QB) {
          if (this._activateCurrentTexture(), jB && jB.isMultiview) throw NB.c.Error(["_bindTextureDirectly called with a multiview texture!", BB, jB]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(BB, jB?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = jB, jB && (jB._associatedChannel = this._activeChannel)
        } else zB && (nB = !0, this._activateCurrentTexture());
        return dB && !zB && this._bindSamplerUniformToChannel(jB._associatedChannel, this._activeChannel), nB
      }
      _bindTexture(BB, jB, zB) {
        if (void 0 === BB) return;
        jB && (jB._associatedChannel = BB), this._activeChannel = BB;
        const QB = jB ? this._getTextureTarget(jB) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(QB, jB)
      }
      unbindAllTextures() {
        for (let BB = 0; BB < this._maxSimultaneousTextures; BB++) this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.gm > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(BB, jB, zB, QB) {
        void 0 !== BB && (jB && (this._boundUniforms[BB] = jB), this._setTexture(BB, zB))
      }
      _bindSamplerUniformToChannel(BB, jB) {
        const zB = this._boundUniforms[BB];
        zB && zB._currentState !== jB && (this._gl.uniform1i(zB, jB), zB._currentState = jB)
      }
      _getTextureWrapMode(BB) {
        switch (BB) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(BB, jB) {
        let zB, QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!jB) return null != this._boundTexturesCache[BB] && (this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.gm > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (jB.video) {
          this._activeChannel = BB;
          const zB = jB.getInternalTexture();
          zB && (zB._associatedChannel = BB), jB.update()
        } else if (4 === jB.delayLoadState) return jB.delayLoad(), !1;
        zB = nB ? jB.depthStencilTexture : jB.isReady() ? jB.getInternalTexture() : jB.isCube ? this.emptyCubeTexture : jB.is3D ? this.emptyTexture3D : jB.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !QB && zB && (zB._associatedChannel = BB);
        let dB = !0;
        this._boundTexturesCache[BB] === zB && (QB || this._bindSamplerUniformToChannel(zB._associatedChannel, BB), dB = !1), this._activeChannel = BB;
        const IB = this._getTextureTarget(zB);
        if (dB && this._bindTextureDirectly(IB, zB, QB), zB && !zB.isMultiview) {
          if (zB.isCube && zB._cachedCoordinatesMode !== jB.coordinatesMode) {
            zB._cachedCoordinatesMode = jB.coordinatesMode;
            const BB = 3 !== jB.coordinatesMode && 5 !== jB.coordinatesMode ? 1 : 0;
            jB.wrapU = BB, jB.wrapV = BB
          }
          zB._cachedWrapU !== jB.wrapU && (zB._cachedWrapU = jB.wrapU, this._setTextureParameterInteger(IB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(jB.wrapU), zB)), zB._cachedWrapV !== jB.wrapV && (zB._cachedWrapV = jB.wrapV, this._setTextureParameterInteger(IB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(jB.wrapV), zB)), zB.is3D && zB._cachedWrapR !== jB.wrapR && (zB._cachedWrapR = jB.wrapR, this._setTextureParameterInteger(IB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(jB.wrapR), zB)), this._setAnisotropicLevel(IB, zB, jB.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(BB, jB, zB, QB) {
        if (void 0 !== BB && jB) {
          this._textureUnits && this._textureUnits.length === zB.length || (this._textureUnits = new Int32Array(zB.length));
          for (let jB = 0; jB < zB.length; jB++) {
            const QB = zB[jB].getInternalTexture();
            QB ? (this._textureUnits[jB] = BB + jB, QB._associatedChannel = BB + jB) : this._textureUnits[jB] = -1
          }
          this._gl.uniform1iv(jB, this._textureUnits);
          for (let BB = 0; BB < zB.length; BB++) this._setTexture(this._textureUnits[BB], zB[BB], !0)
        }
      }
      _setAnisotropicLevel(BB, jB, zB) {
        const QB = this._caps.textureAnisotropicFilterExtension;
        11 !== jB.samplingMode && 3 !== jB.samplingMode && 2 !== jB.samplingMode && (zB = 1), QB && jB._cachedAnisotropicFilteringLevel !== zB && (this._setTextureParameterFloat(BB, QB.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(zB, this._caps.maxAnisotropy), jB), jB._cachedAnisotropicFilteringLevel = zB)
      }
      _setTextureParameterFloat(BB, jB, zB, QB) {
        this._bindTextureDirectly(BB, QB, !0, !0), this._gl.texParameterf(BB, jB, zB)
      }
      _setTextureParameterInteger(BB, jB, zB, QB) {
        QB && this._bindTextureDirectly(BB, QB, !0, !0), this._gl.texParameteri(BB, jB, zB)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let BB = 0; BB < this._caps.maxVertexAttribs; BB++) this.disableAttributeByIndex(BB)
        } else
          for (let BB = 0, jB = this._vertexAttribArraysEnabled.length; BB < jB; BB++) BB >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[BB] || this.disableAttributeByIndex(BB)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, uB.o)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, nB.D)(this._gl)
      }
      attachContextLostEvent(BB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", BB, !1)
      }
      attachContextRestoredEvent(BB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", BB, !1)
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
      _canRenderToFramebuffer(BB) {
        const jB = this._gl;
        for (; jB.getError() !== jB.NO_ERROR;);
        let zB = !0;
        const QB = jB.createTexture();
        jB.bindTexture(jB.TEXTURE_2D, QB), jB.texImage2D(jB.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(BB), 1, 1, 0, jB.RGBA, this._getWebGLTextureType(BB), null), jB.texParameteri(jB.TEXTURE_2D, jB.TEXTURE_MIN_FILTER, jB.NEAREST), jB.texParameteri(jB.TEXTURE_2D, jB.TEXTURE_MAG_FILTER, jB.NEAREST);
        const nB = jB.createFramebuffer();
        jB.bindFramebuffer(jB.FRAMEBUFFER, nB), jB.framebufferTexture2D(jB.FRAMEBUFFER, jB.COLOR_ATTACHMENT0, jB.TEXTURE_2D, QB, 0);
        const dB = jB.checkFramebufferStatus(jB.FRAMEBUFFER);
        if (zB = zB && dB === jB.FRAMEBUFFER_COMPLETE, zB = zB && jB.getError() === jB.NO_ERROR, zB && (jB.clear(jB.COLOR_BUFFER_BIT), zB = zB && jB.getError() === jB.NO_ERROR), zB) {
          jB.bindFramebuffer(jB.FRAMEBUFFER, null);
          const BB = jB.RGBA,
            QB = jB.UNSIGNED_BYTE,
            nB = new Uint8Array(4);
          jB.readPixels(0, 0, 1, 1, BB, QB, nB), zB = zB && jB.getError() === jB.NO_ERROR
        }
        for (jB.deleteTexture(QB), jB.deleteFramebuffer(nB), jB.bindFramebuffer(jB.FRAMEBUFFER, null); !zB && jB.getError() !== jB.NO_ERROR;);
        return zB
      }
      _getWebGLTextureType(BB) {
        if (1 === this._webGLVersion) {
          switch (BB) {
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
        switch (BB) {
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
      _getInternalFormat(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = jB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (BB) {
          case 0:
            zB = this._gl.ALPHA;
            break;
          case 1:
            zB = this._gl.LUMINANCE;
            break;
          case 2:
            zB = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            zB = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            zB = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            zB = jB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            zB = jB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (BB) {
          case 8:
            zB = this._gl.RED_INTEGER;
            break;
          case 9:
            zB = this._gl.RG_INTEGER;
            break;
          case 10:
            zB = this._gl.RGB_INTEGER;
            break;
          case 11:
            zB = this._gl.RGBA_INTEGER
        }
        return zB
      }
      _getRGBABufferInternalSizedFormat(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== jB) switch (jB) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return zB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (BB) {
          case 3:
            switch (jB) {
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
            switch (jB) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return zB ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return zB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (jB) {
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
            switch (jB) {
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
            switch (jB) {
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
            switch (jB) {
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
            switch (jB) {
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
            switch (jB) {
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
            switch (jB) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return zB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(BB, jB, zB, QB) {
        let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const uB = nB ? 4 : 3,
          UB = nB ? this._gl.RGBA : this._gl.RGB,
          aB = zB * QB * uB;
        if (IB) {
          if (IB.length < aB) return NB.c.Error(`Data buffer is too small to store the read pixels (${IB.length} should be more than ${aB})`), Promise.resolve(IB)
        } else IB = new Uint8Array(aB);
        return dB && this.flushFramebuffer(), this._gl.readPixels(BB, jB, zB, QB, UB, this._gl.UNSIGNED_BYTE, IB), Promise.resolve(IB)
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
          const BB = dB.c._CreateCanvas(1, 1),
            jB = BB.getContext("webgl") || BB.getContext("experimental-webgl");
          this._IsSupported = null != jB && !!globalThis.WebGLRenderingContext
        } catch (BB) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const BB = dB.c._CreateCanvas(1, 1),
            jB = BB.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || BB.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !jB
        } catch (BB) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    tB._TempClearColorUint32 = new Uint32Array(4), tB._TempClearColorInt32 = new Int32Array(4), tB._TempClearColorFloat32 = new Float32Array(4), tB.ExceptionList = [{
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
    }], tB._ConcatenateShader = yB.i, tB._IsSupported = null, tB._HasMajorPerformanceCaveat = null
  },
  40268: (BB, jB, zB) => {
    var QB;
    zB.d(jB, {
        c: () => nB
      }),
      function(BB) {
        BB[BB.PointerMove = 0] = "PointerMove", BB[BB.PointerDown = 1] = "PointerDown", BB[BB.PointerUp = 2] = "PointerUp"
      }(QB || (QB = {}));
    class nB {}
    nB.DOM_DELTA_PIXEL = 0, nB.DOM_DELTA_LINE = 1, nB.DOM_DELTA_PAGE = 2
  },
  40264: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      f: () => dB,
      g: () => nB
    });
    class QB {}
    QB.KEYDOWN = 1, QB.KEYUP = 2;
    class nB {
      constructor(BB, jB) {
        this.type = BB, this.event = jB
      }
    }
    class dB extends nB {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(BB) {
        this.skipOnKeyboardObservable = BB
      }
      constructor(BB, jB) {
        super(BB, jB), this.type = BB, this.event = jB, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40255: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      d: () => IB,
      e: () => NB
    });
    var QB = zB(37171);
    class nB {}
    nB.POINTERDOWN = 1, nB.POINTERUP = 2, nB.POINTERMOVE = 4, nB.POINTERWHEEL = 8, nB.POINTERPICK = 16, nB.POINTERTAP = 32, nB.POINTERDOUBLETAP = 64;
    class dB {
      constructor(BB, jB) {
        this.type = BB, this.event = jB
      }
    }
    class IB extends dB {
      constructor(BB, jB, zB, nB) {
        super(BB, jB), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new QB.i(zB, nB)
      }
    }
    class NB extends dB {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(BB, jB), this._pickInfo = zB, this._inputManager = QB
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40284: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    class QB {
      static CompareLightsPriority(BB, jB) {
        return BB.shadowEnabled !== jB.shadowEnabled ? (jB.shadowEnabled ? 1 : 0) - (BB.shadowEnabled ? 1 : 0) : jB.renderPriority - BB.renderPriority
      }
    }
    QB.FALLOFF_DEFAULT = 0, QB.FALLOFF_PHYSICAL = 1, QB.FALLOFF_GLTF = 2, QB.FALLOFF_STANDARD = 3, QB.LIGHTMAP_DEFAULT = 0, QB.LIGHTMAP_SPECULAR = 1, QB.LIGHTMAP_SHADOWSONLY = 2, QB.INTENSITYMODE_AUTOMATIC = 0, QB.INTENSITYMODE_LUMINOUSPOWER = 1, QB.INTENSITYMODE_LUMINOUSINTENSITY = 2, QB.INTENSITYMODE_ILLUMINANCE = 3, QB.INTENSITYMODE_LUMINANCE = 4, QB.LIGHTTYPEID_POINTLIGHT = 0, QB.LIGHTTYPEID_DIRECTIONALLIGHT = 1, QB.LIGHTTYPEID_SPOTLIGHT = 2, QB.LIGHTTYPEID_HEMISPHERICLIGHT = 3, QB.LIGHTTYPEID_RECT_AREALIGHT = 4, QB.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39913: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB
    });
    var QB, nB = zB(37202),
      dB = zB(39919);
    ! function(BB) {
      BB[BB.Unknown = 0] = "Unknown", BB[BB.Url = 1] = "Url", BB[BB.Temp = 2] = "Temp", BB[BB.Raw = 3] = "Raw", BB[BB.Dynamic = 4] = "Dynamic", BB[BB.RenderTarget = 5] = "RenderTarget", BB[BB.MultiRenderTarget = 6] = "MultiRenderTarget", BB[BB.Cube = 7] = "Cube", BB[BB.CubeRaw = 8] = "CubeRaw", BB[BB.CubePrefiltered = 9] = "CubePrefiltered", BB[BB.Raw3D = 10] = "Raw3D", BB[BB.Raw2DArray = 11] = "Raw2DArray", BB[BB.DepthStencil = 12] = "DepthStencil", BB[BB.CubeRawRGBD = 13] = "CubeRawRGBD", BB[BB.Depth = 14] = "Depth", BB[BB.External = 15] = "External"
    }(QB || (QB = {}));
    class IB extends dB.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(BB) {
        this._useMipMaps = BB
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(BB) {
        this._uniqueId = BB
      }
      wJ() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new nB.c, this.onErrorObservable = new nB.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = BB, this._source = jB, this._uniqueId = IB._Counter++, zB || (this._hardwareTexture = BB._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, BB, jB, zB), this.width = BB, this.height = jB, this.depth = zB, this.baseWidth = BB, this.baseHeight = jB, this.baseDepth = zB, this._size = BB * jB * zB
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const BB = this.onRebuildCallback(this),
            jB = jB => {
              jB._swapAndDie(this, !1), this.isReady = BB.isReady
            };
          return void(BB.isAsync ? BB.proxy.then(jB) : jB(BB.proxy))
        }
        let BB;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(BB = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (BB => {
              BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (BB = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const jB = this._bufferViewArray[BB];
                jB && this._engine.updateRawTexture(this, jB, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, BB)
              }
            this.isReady = !0;
            break;
          case 10:
            BB = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (BB = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const jB = this._bufferViewArray[BB];
                jB && this._engine.updateRawTexture2DArray(this, jB, this.format, this.invertY, this._compression, this.type, BB)
              }
            this.isReady = !0;
            break;
          case 4:
            BB = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), BB._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(BB = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            BB = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return BB = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (BB => {
              BB && BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(BB._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(BB._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), BB._hardwareTexture = this._hardwareTexture, BB._setUniqueId(IB._Counter++), jB && (BB._isRGBD = this._isRGBD), this._lodTextureHigh && (BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (BB._irradianceTexture && BB._irradianceTexture.dispose(), BB._irradianceTexture = this._irradianceTexture);
        const zB = this._engine.getLoadedTexturesCache();
        let QB = zB.indexOf(this); - 1 !== QB && zB.splice(QB, 1), QB = zB.indexOf(BB), -1 === QB && zB.push(BB)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    IB._Counter = 0
  },
  40025: (BB, jB, zB) => {
    function QB(BB) {
      return 13 === BB || 14 === BB || 15 === BB || 16 === BB || 17 === BB || 18 === BB || 19 === BB
    }

    function nB(BB) {
      return 8 === BB || 9 === BB || 10 === BB || 11 === BB
    }

    function dB(BB) {
      return 0 === BB || 5 === BB || 7 === BB || 11 === BB
    }

    function IB(BB) {
      return 13 === BB || 17 === BB || 18 === BB || 19 === BB
    }
    zB.d(jB, {
      d: () => IB,
      g: () => QB,
      i: () => nB,
      j: () => dB
    })
  },
  39919: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(BB) {
        this._cachedWrapU = BB
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(BB) {
        this._cachedWrapV = BB
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(BB) {
        this._cachedWrapR = BB
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(BB) {
        this._cachedAnisotropicFilteringLevel = BB
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(BB) {
        this._comparisonFunction = BB
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(BB) {
        this._useMipMaps = BB
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = BB, this._cachedWrapV = jB, this._cachedWrapR = zB, this._cachedAnisotropicFilteringLevel = QB, this.samplingMode = nB, this._comparisonFunction = dB, this
      }
      compareSampler(BB) {
        return this._cachedWrapU === BB._cachedWrapU && this._cachedWrapV === BB._cachedWrapV && this._cachedWrapR === BB._cachedWrapR && this._cachedAnisotropicFilteringLevel === BB._cachedAnisotropicFilteringLevel && this.samplingMode === BB.samplingMode && this._comparisonFunction === BB._comparisonFunction && this._useMipMaps === BB._useMipMaps
      }
    }
  },
  40183: (BB, jB, zB) => {
    function QB(BB) {
      BB.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  39997: (BB, jB, zB) => {
    function QB(BB) {
      return void 0 === BB.getPipelineContext
    }
    zB.d(jB, {
      e: () => QB
    })
  },
  40423: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(39976);
    class nB {
      static GetEffect(BB) {
        return void 0 === BB.getPipelineContext ? BB.effect : BB
      }
      constructor(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = BB.createDrawContext(), jB && (this.materialContext = BB.createMaterialContext())
      }
      setEffect(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        zB || this.effect === BB || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = BB, void 0 !== jB && (this.defines = jB), zB && this.drawContext?.reset()
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const jB = this.effect;
          BB ? jB.dispose() : QB.b.SetImmediate((() => {
            jB.wJ().onEndFrameObservable.addOnce((() => {
              jB.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39936: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB,
      d: () => sB,
      f: () => UB,
      j: () => aB
    });
    var QB = zB(39943),
      nB = zB(39950),
      dB = zB(39932),
      IB = zB(38783),
      NB = zB(39974),
      uB = zB(39958);

    function UB(BB, jB) {
      return (0, nB.G)(jB).cachedPipelines[BB]
    }

    function aB(BB) {
      const jB = BB._name,
        zB = BB.context;
      if (jB && zB) {
        const BB = (0, nB.G)(zB),
          QB = BB.cachedPipelines[jB];
        QB?.dispose(), delete BB.cachedPipelines[jB]
      }
    }

    function pB(BB, jB, zB, nB, dB, IB, uB) {
      let UB, aB;
      const pB = (0, QB.o)() ? IB?.getHostDocument() : null;
      UB = "string" === typeof jB ? jB : "string" === typeof jB.vertexSource ? "source:" + jB.vertexSource : "string" === typeof jB.vertexElement ? pB?.getElementById(jB.vertexElement) || jB.vertexElement : jB.vertex || jB, aB = "string" === typeof jB ? jB : "string" === typeof jB.fragmentSource ? "source:" + jB.fragmentSource : "string" === typeof jB.fragmentElement ? pB?.getElementById(jB.fragmentElement) || jB.fragmentElement : jB.fragment || jB;
      const sB = [void 0, void 0],
        JB = () => {
          if (sB[0] && sB[1]) {
            const [QB, UB] = sB;
            (0, NB.f)(BB), (0, NB.i)(QB, BB, ((QB, aB) => {
              uB && (uB._vertexSourceCodeBeforeMigration = aB), zB && (QB = zB("vertex", QB)), BB.isFragment = !0, (0, NB.i)(UB, BB, ((IB, UB) => {
                uB && (uB._fragmentSourceCodeBeforeMigration = UB), zB && (IB = zB("fragment", IB));
                const aB = (0, NB.d)(QB, IB, BB);
                BB = null;
                const pB = function(BB, jB, zB, QB) {
                  if (zB) {
                    return {
                      vertexSourceCode: (1 === QB ? "//" : "") + "#define SHADER_NAME vertex:" + (zB.vertexElement || zB.vertex || zB.spectorName || zB) + "\n" + BB,
                      fragmentSourceCode: (1 === QB ? "//" : "") + "#define SHADER_NAME fragment:" + (zB.fragmentElement || zB.fragment || zB.spectorName || zB) + "\n" + jB
                    }
                  }
                  return {
                    vertexSourceCode: BB,
                    fragmentSourceCode: jB
                  }
                }(aB.vertexCode, aB.fragmentCode, jB, dB);
                nB?.(pB.vertexSourceCode, pB.fragmentSourceCode)
              }), IB)
            }), IB)
          }
        };
      rB(UB, "Vertex", "", (BB => {
        uB && (uB._rawVertexSourceCode = BB), sB[0] = BB, JB()
      }), dB), rB(aB, "Fragment", "Pixel", (BB => {
        uB && (uB._rawFragmentSourceCode = BB), sB[1] = BB, JB()
      }), dB)
    }

    function rB(BB, jB, zB, nB, IB, NB) {
      if ("undefined" !== typeof HTMLElement && BB instanceof HTMLElement) {
        return void nB((0, QB.d)(BB))
      }
      if ("source:" === BB.substring(0, 7)) return void nB(BB.substring(7));
      if ("base64:" === BB.substring(0, 7)) {
        return void nB(window.atob(BB.substring(7)))
      }
      const UB = dB.e.GetShadersStore(IB);
      if (UB[BB + jB + "Shader"]) return void nB(UB[BB + jB + "Shader"]);
      if (zB && UB[BB + zB + "Shader"]) return void nB(UB[BB + zB + "Shader"]);
      let aB;
      if (aB = "." === BB[0] || "/" === BB[0] || BB.indexOf("http") > -1 ? BB : dB.e.GetShadersRepository(IB) + BB, !(NB = NB || uB.m)) throw new Error("loadFileInjection is not defined");
      NB(aB + "." + jB.toLowerCase() + ".fx", nB)
    }
    const sB = (BB, jB, zB, QB) => {
      try {
        const dB = BB.context ? (0, nB.G)(BB.context) : null;
        dB && (dB.disableParallelShaderCompile = BB.disableParallelCompilation);
        const IB = BB.existingPipelineContext || jB(BB.shaderProcessingContext);
        return IB._name = BB.name, BB.name && dB && (dB.cachedPipelines[BB.name] = IB), zB(IB, BB.vertex, BB.fragment, !!BB.createAsRaw, "", "", BB.rebuildRebind, BB.defines, BB.transformFeedbackVaryings, "", (() => {
          QB(IB, (() => {
            BB.onRenderingStateCompiled?.(IB)
          }))
        })), IB
      } catch (dB) {
        throw IB.c.Error("Error compiling effect"), dB
      }
    }
  },
  39927: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => uB
    });
    var QB = zB(37202),
      nB = zB(38783),
      dB = zB(39932),
      IB = zB(39936),
      NB = zB(39976);
    class uB {
      static get ShadersRepository() {
        return dB.e.ShadersRepository
      }
      static set ShadersRepository(BB) {
        dB.e.ShadersRepository = BB
      }
      get aE() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new QB.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB, jB, zB) {
        let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          dB = arguments.length > 4 ? arguments[4] : void 0,
          NB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          UB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          aB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          pB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          rB = arguments.length > 9 ? arguments[9] : void 0,
          sB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          JB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          mB = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new QB.c, this.onErrorObservable = new QB.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = BB, this._key = sB;
        const yB = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let kB;
        if (jB.attributes) {
          const BB = jB;
          if (this._engine = zB, this._attributesNames = BB.attributes, this._uniformsNames = BB.uniformsNames.concat(BB.samplers), this._samplerList = BB.samplers.slice(), this.defines = BB.defines, this.onError = BB.onError, this.onCompiled = BB.onCompiled, this._fallbacks = BB.fallbacks, this._indexParameters = BB.indexParameters, this._transformFeedbackVaryings = BB.transformFeedbackVaryings || null, this._multiTarget = !!BB.multiTarget, this._shaderLanguage = BB.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!BB.disableParallelShaderCompilation, BB.uniformBuffersNames) {
            this._uniformBuffersNamesList = BB.uniformBuffersNames.slice();
            for (let jB = 0; jB < BB.uniformBuffersNames.length; jB++) this._uniformBuffersNames[BB.uniformBuffersNames[jB]] = jB
          }
          this._processFinalCode = BB.processFinalCode ?? null, this._processCodeAfterIncludes = BB.processCodeAfterIncludes ?? void 0, mB = BB.extraInitializationsAsync, kB = BB.existingPipelineContext
        } else this._engine = dB, this.defines = null == NB ? "" : NB, this._uniformsNames = zB.concat(nB), this._samplerList = nB ? nB.slice() : [], this._attributesNames = jB, this._uniformBuffersNamesList = [], this._shaderLanguage = JB, this.onError = pB, this.onCompiled = aB, this._indexParameters = rB, this._fallbacks = UB;
        "WEBGL2" === this._engine.shaderPlatformName && (kB = (0, IB.f)(yB, this._engine._gl) ?? kB), this._attributeLocationByName = {}, this.uniqueId = uB._UniqueIdSeed++, kB ? (this._pipelineContext = kB, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, mB).catch((BB => {
          const jB = BB?.message ?? String(BB),
            zB = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${jB}`);
          BB && "string" === typeof BB.stack && (zB.stack = `${zB.message}\nCaused by: ${BB.stack}`), this._processCompilationErrors(zB)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.aE || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        QB && await QB(), this._processingContext = zB || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const nB = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: BB ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: dB.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: dB.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          jQB: this._engine.jQB,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, IB.c)(nB, this.name, this._processFinalCode, ((BB, zB) => {
          this._vertexSourceCode = BB, this._fragmentSourceCode = zB, this._prepareEffect(jB)
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
        return !!this._engine.aE || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      wJ() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(BB) {
        return this._attributes[BB]
      }
      getAttributeLocationByName(BB) {
        return this._attributeLocationByName[BB]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(BB) {
        return this._uniformsNames.indexOf(BB)
      }
      getUniform(BB) {
        return this._uniforms[BB]
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
        return await new Promise((BB => {
          this.executeWhenCompiled(BB)
        }))
      }
      executeWhenCompiled(BB) {
        this.isReady() ? BB(this) : (this.onCompileObservable.add((jB => {
          BB(jB)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(BB) {
        (0, NB.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (jB => {
          this._processCompilationErrors(jB, BB)
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
            jQB: this._engine.jQB,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(BB, jB, zB, QB) {
        this._isReady = !1, this._vertexSourceCodeOverride = BB, this._fragmentSourceCodeOverride = jB, this.onError = (BB, jB) => {
          QB && QB(jB)
        }, this.onCompiled = () => {
          const BB = this.wJ().scenes;
          if (BB)
            for (let jB = 0; jB < BB.length; jB++) BB[jB].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(zB)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(BB) {
        if (this._pipelineContext = BB, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let jB = 0; jB < this._attributesNames.length; jB++) {
            const BB = this._attributesNames[jB];
            this._attributeLocationByName[BB] = this._attributes[jB]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), uB.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = this._pipelineContext;
        this._isReady = !1;
        try {
          const zB = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            QB = zB ? null : this.defines,
            nB = zB ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            dB = zB ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            NB = this._engine;
          this._pipelineContext = (0, IB.d)({
            existingPipelineContext: BB ? jB : null,
            vertex: nB,
            fragment: dB,
            context: "WEBGL2" === NB.shaderPlatformName || "WEBGL1" === NB.shaderPlatformName ? NB._gl : void 0,
            rebuildRebind: (BB, jB, zB, QB) => this._rebuildProgram(BB, jB, zB, QB),
            defines: QB,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: zB,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: zB => {
              jB && !BB && this._engine._deletePipelineContext(jB), zB && this._onRenderingStateCompiled(zB)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(jB)
        } catch (zB) {
          this._processCompilationErrors(zB, jB)
        }
      }
      _getShaderCodeAndErrorLine(BB, jB, zB) {
        const QB = zB ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let nB = null;
        if (jB && BB) {
          const dB = jB.match(QB);
          if (dB && 2 === dB.length) {
            const jB = parseInt(dB[1]),
              QB = BB.split("\n", -1);
            QB.length >= jB && (nB = `Offending line [${jB}] in ${zB?"fragment":"vertex"} code: ${QB[jB-1]}`)
          }
        }
        return [BB, nB]
      }
      _processCompilationErrors(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof BB?.stack ? BB.stack : BB?.message ?? String(BB);
        const zB = this._attributesNames,
          QB = this._fallbacks;
        if (nB.c.Error("Unable to compile effect:"), nB.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), nB.c.Error(`Attributes: ${zB.join(" ")}`), nB.c.Error("Defines:\n" + this.defines), uB.LogShaderCodeOnCompilationError) {
          let BB, jB = null,
            zB = null;
          this._pipelineContext?._getVertexShaderCode() && ([BB, jB] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), BB && (nB.c.Error("Vertex code:"), nB.c.Error(BB))), this._pipelineContext?._getFragmentShaderCode() && ([BB, zB] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), BB && (nB.c.Error("Fragment code:"), nB.c.Error(BB))), jB && nB.c.Error(jB), zB && nB.c.Error(zB)
        }
        nB.c.Error("Error: " + this._compilationError);
        const dB = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        jB && (this._pipelineContext = jB, this._isReady = !0, dB()), QB ? (this._pipelineContext = null, QB.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, nB.c.Error("Trying next fallback."), this.defines = QB.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, dB(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, jB || dB())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(BB, jB) {
        this._engine._bindTexture(this._samplers[BB], jB, BB)
      }
      setTexture(BB, jB) {
        this._engine.setTexture(this._samplers[BB], this._uniforms[BB], jB, BB)
      }
      setTextureArray(BB, jB) {
        const zB = BB + "Ex";
        if (-1 === this._samplerList.indexOf(zB + "0")) {
          const QB = this._samplerList.indexOf(BB);
          for (let BB = 1; BB < jB.length; BB++) {
            const jB = zB + (BB - 1).toString();
            this._samplerList.splice(QB + BB, 0, jB)
          }
          let nB = 0;
          for (const BB of this._samplerList) this._samplers[BB] = nB, nB += 1
        }
        this._engine.setTextureArray(this._samplers[BB], this._uniforms[BB], jB, BB)
      }
      bindUniformBuffer(BB, jB) {
        const zB = this._uniformBuffersNames[jB];
        void 0 === zB || uB._BaseCache[zB] === BB && this._engine._features.useUBOBindingCache || (uB._BaseCache[zB] = BB, this._engine.bindUniformBufferBase(BB, zB, jB))
      }
      bindUniformBlock(BB, jB) {
        this._engine.bindUniformBlock(this._pipelineContext, BB, jB)
      }
      setInt(BB, jB) {
        return this._pipelineContext.setInt(BB, jB), this
      }
      setInt2(BB, jB, zB) {
        return this._pipelineContext.setInt2(BB, jB, zB), this
      }
      setInt3(BB, jB, zB, QB) {
        return this._pipelineContext.setInt3(BB, jB, zB, QB), this
      }
      setInt4(BB, jB, zB, QB, nB) {
        return this._pipelineContext.setInt4(BB, jB, zB, QB, nB), this
      }
      setIntArray(BB, jB) {
        return this._pipelineContext.setIntArray(BB, jB), this
      }
      setIntArray2(BB, jB) {
        return this._pipelineContext.setIntArray2(BB, jB), this
      }
      setIntArray3(BB, jB) {
        return this._pipelineContext.setIntArray3(BB, jB), this
      }
      setIntArray4(BB, jB) {
        return this._pipelineContext.setIntArray4(BB, jB), this
      }
      setUInt(BB, jB) {
        return this._pipelineContext.setUInt(BB, jB), this
      }
      setUInt2(BB, jB, zB) {
        return this._pipelineContext.setUInt2(BB, jB, zB), this
      }
      setUInt3(BB, jB, zB, QB) {
        return this._pipelineContext.setUInt3(BB, jB, zB, QB), this
      }
      setUInt4(BB, jB, zB, QB, nB) {
        return this._pipelineContext.setUInt4(BB, jB, zB, QB, nB), this
      }
      setUIntArray(BB, jB) {
        return this._pipelineContext.setUIntArray(BB, jB), this
      }
      setUIntArray2(BB, jB) {
        return this._pipelineContext.setUIntArray2(BB, jB), this
      }
      setUIntArray3(BB, jB) {
        return this._pipelineContext.setUIntArray3(BB, jB), this
      }
      setUIntArray4(BB, jB) {
        return this._pipelineContext.setUIntArray4(BB, jB), this
      }
      setFloatArray(BB, jB) {
        return this._pipelineContext.setArray(BB, jB), this
      }
      setFloatArray2(BB, jB) {
        return this._pipelineContext.setArray2(BB, jB), this
      }
      setFloatArray3(BB, jB) {
        return this._pipelineContext.setArray3(BB, jB), this
      }
      setFloatArray4(BB, jB) {
        return this._pipelineContext.setArray4(BB, jB), this
      }
      setArray(BB, jB) {
        return this._pipelineContext.setArray(BB, jB), this
      }
      setArray2(BB, jB) {
        return this._pipelineContext.setArray2(BB, jB), this
      }
      setArray3(BB, jB) {
        return this._pipelineContext.setArray3(BB, jB), this
      }
      setArray4(BB, jB) {
        return this._pipelineContext.setArray4(BB, jB), this
      }
      setMatrices(BB, jB) {
        return this._pipelineContext.setMatrices(BB, jB), this
      }
      setMatrix(BB, jB) {
        return this._pipelineContext.setMatrix(BB, jB), this
      }
      setMatrix3x3(BB, jB) {
        return this._pipelineContext.setMatrix3x3(BB, jB), this
      }
      setMatrix2x2(BB, jB) {
        return this._pipelineContext.setMatrix2x2(BB, jB), this
      }
      setFloat(BB, jB) {
        return this._pipelineContext.setFloat(BB, jB), this
      }
      setBool(BB, jB) {
        return this._pipelineContext.setInt(BB, jB ? 1 : 0), this
      }
      setVector2(BB, jB) {
        return this._pipelineContext.setVector2(BB, jB), this
      }
      setFloat2(BB, jB, zB) {
        return this._pipelineContext.setFloat2(BB, jB, zB), this
      }
      setVector3(BB, jB) {
        return this._pipelineContext.setVector3(BB, jB), this
      }
      setFloat3(BB, jB, zB, QB) {
        return this._pipelineContext.setFloat3(BB, jB, zB, QB), this
      }
      setVector4(BB, jB) {
        return this._pipelineContext.setVector4(BB, jB), this
      }
      setQuaternion(BB, jB) {
        return this._pipelineContext.setQuaternion(BB, jB), this
      }
      setFloat4(BB, jB, zB, QB, nB) {
        return this._pipelineContext.setFloat4(BB, jB, zB, QB, nB), this
      }
      setColor3(BB, jB) {
        return this._pipelineContext.setColor3(BB, jB), this
      }
      setColor4(BB, jB, zB) {
        return this._pipelineContext.setColor4(BB, jB, zB), this
      }
      setDirectColor4(BB, jB) {
        return this._pipelineContext.setDirectColor4(BB, jB), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (uB.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, IB.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        jB && (dB.e.GetShadersStore(QB)[`${BB}PixelShader`] = jB), zB && (dB.e.GetShadersStore(QB)[`${BB}VertexShader`] = zB)
      }
      static ResetCache() {
        uB._BaseCache = {}
      }
    }
    uB.LogShaderCodeOnCompilationError = !0, uB.PersistentMode = !1, uB.AutomaticallyClearCodeCache = !1, uB._UniqueIdSeed = 0, uB._BaseCache = {}, uB.ShadersStore = dB.e.ShadersStore, uB.IncludesShadersStore = dB.e.IncludesShadersStore
  },
  40225: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      e: () => MB,
      i: () => SB
    });
    var QB = zB(39927),
      nB = zB(37171),
      dB = zB(37216),
      IB = zB(40195);
    const NB = new nB.c,
      uB = new nB.c,
      UB = new nB.c,
      aB = {
        aY: () => {},
        eyeAtCamera: !0
      };

    function pB(BB, jB, zB) {
      const QB = zB.nQB(),
        nB = jB.nQB();
      for (let dB = 0; dB < 16; dB++) QB[dB] = nB[dB];
      return QB[12] -= BB.x, QB[13] -= BB.y, QB[14] -= BB.z, zB.markAsUpdated(), zB
    }

    function rB(BB, jB, zB) {
      return (0, dB.k)(jB, uB), pB(BB, uB, UB), (0, dB.k)(UB, zB), zB
    }

    function sB(BB, jB, zB) {
      if (!aB.eyeAtCamera) return rB(BB, jB, zB);
      const QB = zB.nQB(),
        nB = jB.nQB();
      for (let dB = 0; dB < 16; dB++) QB[dB] = nB[dB];
      return QB[12] = 0, QB[13] = 0, QB[14] = 0, zB.markAsUpdated(), zB
    }

    function JB(BB, jB, zB, QB) {
      return (0, dB.s)(sB(BB, jB, QB), zB, QB), QB
    }

    function mB(BB, jB, zB, QB) {
      return (0, dB.k)(zB, uB), (0, dB.s)(jB, uB, UB), pB(BB, UB, uB), sB(BB, zB, UB), (0, dB.s)(uB, UB, QB), QB
    }

    function yB(BB, jB, zB, QB, nB, IB) {
      return (0, dB.k)(zB, uB), (0, dB.s)(jB, uB, UB), pB(BB, UB, uB), JB(BB, QB, nB, UB), (0, dB.s)(uB, UB, IB), IB
    }

    function kB(BB, jB) {
      const zB = aB.aY();
      if (!zB || NB === jB) return jB;
      NB.updateFlag = jB.updateFlag;
      const QB = zB.floatingOriginOffset;
      switch (BB) {
        case "world":
          return pB(QB, jB, NB);
        case "view":
          return sB(QB, jB, NB);
        case "worldView":
          return mB(QB, jB, zB.getViewMatrix(), NB);
        case "viewProjection":
          return JB(QB, zB.getViewMatrix(), zB.getProjectionMatrix(), NB);
        case "worldViewProjection":
          return yB(QB, jB, zB.getTransformMatrix(), zB.getViewMatrix(), zB.getProjectionMatrix(), NB);
        default:
          if (BB.startsWith("u_")) {
            const nB = BB.toLowerCase();
            if (nB.startsWith("u_worldviewprojection")) return yB(QB, jB, zB.getTransformMatrix(), zB.getViewMatrix(), zB.getProjectionMatrix(), NB);
            if (nB.startsWith("u_viewprojection")) return JB(QB, zB.getViewMatrix(), zB.getProjectionMatrix(), NB);
            if (nB.startsWith("u_worldview")) return mB(QB, jB, zB.getViewMatrix(), NB);
            if (nB.startsWith("u_world")) return pB(QB, jB, NB);
            if (nB.startsWith("u_view")) return sB(QB, jB, NB)
          }
          return jB
      }
    }
    const GB = IB.d,
      LB = QB.e,
      gB = GB.prototype._updateMatrixForUniform,
      tB = QB.e.prototype.setMatrix;

    function SB() {
      QB.e.prototype.setMatrix = tB, LB._setMatrixOverride = void 0, GB.prototype._updateMatrixForUniform = gB, GB.prototype._updateMatrixForUniformOverride = void 0
    }

    function MB() {
      LB.prototype._setMatrixOverride = tB, LB.prototype.setMatrix = function(BB, jB) {
        return this._setMatrixOverride(BB, kB(BB, jB)), this
      }, GB.prototype._updateMatrixForUniformOverride = gB, GB.prototype._updateMatrixForUniform = function(BB, jB) {
        this._updateMatrixForUniformOverride(BB, kB(BB, jB))
      }
    }
  },
  40188: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      c: () => nB
    });
    var QB = zB(40183);

    function nB(BB, jB) {
      jB.WHITEBALANCE && BB.push("whiteBalanceMatrix"), jB.EXPOSURE && BB.push("exposureLinear"), jB.CONTRAST && BB.push("contrast"), jB.COLORGRADING && BB.push("colorTransformSettings"), (jB.VIGNETTE || jB.DITHER) && BB.push("vInverseScreenSize"), jB.VIGNETTE && (BB.push("vignetteSettings1"), BB.push("vignetteSettings2")), jB.COLORCURVES && (0, QB.d)(BB), jB.DITHER && BB.push("ditherIntensity")
    }

    function dB(BB, jB) {
      jB.COLORGRADING && BB.push("txColorTransform")
    }
  },
  40180: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => oB,
      e: () => FB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37202),
      IB = zB(37379),
      NB = zB(37208),
      uB = zB(37171);
    const UB = [
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
      aB = 1e6 / UB[UB.length - 1][0],
      pB = 150;

    function rB(BB, jB) {
      const zB = Number.isNaN(BB) ? aB : Math.max(BB, aB),
        QB = (0, NB.Clamp)(1e6 / zB, UB[0][0], UB[UB.length - 1][0]);
      let nB = 0,
        dB = UB.length - 1;
      for (; dB - nB > 1;) {
        const BB = nB + dB >> 1;
        UB[BB][0] <= QB ? nB = BB : dB = BB
      }
      const IB = nB,
        [rB, sB, JB, mB] = UB[IB],
        [yB, kB, GB, LB] = UB[IB + 1],
        gB = (QB - rB) / (yB - rB),
        tB = uB.i.Lerp(new uB.i(sB, JB), new uB.i(kB, GB), gB),
        SB = uB.i.Normalize(new uB.i(1, mB)),
        MB = uB.i.Normalize(new uB.i(1, LB)),
        EB = uB.i.Normalize(uB.i.Lerp(SB, MB, gB)),
        iB = (0, NB.Clamp)(jB, -150, pB);
      tB.MQB(EB.scale(iB / 3e3));
      const qB = 2 * tB.x - 8 * tB.y + 4,
        fB = 3 * tB.x / qB,
        oB = 2 * tB.y / qB;
      return new uB.m(fB / oB, 1, (1 - fB - oB) / oB)
    }
    const sB = uB.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      JB = uB.c.Invert(sB);

    function mB(BB, jB) {
      const zB = jB > 0 ? BB / jB : 10;
      return (0, NB.Clamp)(zB, .1, 10)
    }

    function yB(BB, jB) {
      const zB = uB.m.TransformNormal(BB, sB),
        QB = uB.m.TransformNormal(jB, sB),
        nB = uB.c.FromArray([mB(QB.x, zB.x), 0, 0, 0, 0, mB(QB.y, zB.y), 0, 0, 0, 0, mB(QB.z, zB.z), 0, 0, 0, 0, 1]);
      return sB.multiply(nB).multiply(JB)
    }
    const kB = new uB.m(.95047, 1, 1.08883),
      GB = uB.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(yB(kB, rB(6500, 0))),
      LB = uB.c.Invert(GB),
      gB = uB.m.TransformNormal(new uB.m(1, 1, 1), GB);
    var tB = zB(40086),
      SB = zB(40183);
    let MB = (() => {
      var BB;
      let jB, zB, dB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB = [],
        kB = [],
        GB = [],
        LB = [],
        gB = [],
        MB = [],
        EB = [],
        iB = [],
        qB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [],
        WB = [],
        eB = [];
      return BB = class {
        constructor() {
          this._dirty = !0, this._tempColor = new IB.g(0, 0, 0, 0), this._globalCurve = new IB.g(0, 0, 0, 0), this._highlightsCurve = new IB.g(0, 0, 0, 0), this._midtonesCurve = new IB.g(0, 0, 0, 0), this._shadowsCurve = new IB.g(0, 0, 0, 0), this._positiveCurve = new IB.g(0, 0, 0, 0), this._negativeCurve = new IB.g(0, 0, 0, 0), this._globalHue = (0, QB.g)(this, yB, 30), this._globalDensity = ((0, QB.g)(this, kB), (0, QB.g)(this, GB, 0)), this._globalSaturation = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, 0)), this._globalExposure = ((0, QB.g)(this, MB), (0, QB.g)(this, EB, 0)), this._highlightsHue = ((0, QB.g)(this, iB), (0, QB.g)(this, qB, 30)), this._highlightsDensity = ((0, QB.g)(this, fB), (0, QB.g)(this, oB, 0)), this._highlightsSaturation = ((0, QB.g)(this, HB), (0, QB.g)(this, DB, 0)), this._highlightsExposure = ((0, QB.g)(this, FB), (0, QB.g)(this, YB, 0)), this._midtonesHue = ((0, QB.g)(this, VB), (0, QB.g)(this, hB, 30)), this._midtonesDensity = ((0, QB.g)(this, XB), (0, QB.g)(this, ZB, 0)), this._midtonesSaturation = ((0, QB.g)(this, AB), (0, QB.g)(this, TB, 0)), this._midtonesExposure = ((0, QB.g)(this, PB), (0, QB.g)(this, WB, 0)), this._shadowsHue = ((0, QB.g)(this, eB), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(BB) {
          this._globalHue = BB, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(BB) {
          this._globalDensity = BB, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(BB) {
          this._globalSaturation = BB, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(BB) {
          this._globalExposure = BB, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(BB) {
          this._highlightsHue = BB, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(BB) {
          this._highlightsDensity = BB, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(BB) {
          this._highlightsSaturation = BB, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(BB) {
          this._highlightsExposure = BB, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(BB) {
          this._midtonesHue = BB, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(BB) {
          this._midtonesDensity = BB, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(BB) {
          this._midtonesSaturation = BB, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(BB) {
          this._midtonesExposure = BB, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(BB) {
          this._shadowsHue = BB, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(BB) {
          this._shadowsDensity = BB, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(BB) {
          this._shadowsSaturation = BB, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(BB) {
          this._shadowsExposure = BB, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(jB, zB, QB, nB, dB) {
          null != jB && (jB = BB._Clamp(jB, 0, 360), zB = BB._Clamp(zB, -100, 100), QB = BB._Clamp(QB, -100, 100), nB = BB._Clamp(nB, -100, 100), zB = BB._ApplyColorGradingSliderNonlinear(zB), zB *= .5, nB = BB._ApplyColorGradingSliderNonlinear(nB), zB < 0 && (zB *= -1, jB = (jB + 180) % 360), BB._FromHSBToRef(jB, zB, 50 + .25 * nB, dB), dB.scaleToRef(2, dB), dB.a = 1 + .01 * QB)
        }
        static _ApplyColorGradingSliderNonlinear(BB) {
          BB /= 100;
          let jB = Math.abs(BB);
          return jB = Math.pow(jB, 2), BB < 0 && (jB *= -1), jB *= 100, jB
        }
        static _FromHSBToRef(jB, zB, QB, nB) {
          let dB = BB._Clamp(jB, 0, 360);
          const IB = BB._Clamp(zB / 100, 0, 1),
            NB = BB._Clamp(QB / 100, 0, 1);
          if (0 === IB) nB.r = NB, nB.g = NB, nB.b = NB;
          else {
            dB /= 60;
            const BB = Math.floor(dB),
              jB = dB - BB,
              zB = NB * (1 - IB),
              QB = NB * (1 - IB * jB),
              uB = NB * (1 - IB * (1 - jB));
            switch (BB) {
              case 0:
                nB.r = NB, nB.g = uB, nB.b = zB;
                break;
              case 1:
                nB.r = QB, nB.g = NB, nB.b = zB;
                break;
              case 2:
                nB.r = zB, nB.g = NB, nB.b = uB;
                break;
              case 3:
                nB.r = zB, nB.g = QB, nB.b = NB;
                break;
              case 4:
                nB.r = uB, nB.g = zB, nB.b = NB;
                break;
              default:
                nB.r = NB, nB.g = zB, nB.b = QB
            }
          }
          nB.a = 1
        }
        static _Clamp(BB, jB, zB) {
          return Math.min(Math.max(BB, jB), zB)
        }
        clone() {
          return tB.b.Clone((() => new BB), this)
        }
        serialize() {
          return tB.b.Serialize(this)
        }
        _bind(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), BB && (BB.setFloat4(jB, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), BB.setFloat4(zB, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), BB.setFloat4(QB, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], sB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalHue" in BB,
            get: BB => BB._globalHue,
            set: (BB, jB) => {
              BB._globalHue = jB
            }
          },
          metadata: IB
        }, yB, kB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalDensity" in BB,
            get: BB => BB._globalDensity,
            set: (BB, jB) => {
              BB._globalDensity = jB
            }
          },
          metadata: IB
        }, GB, LB), (0, QB.e)(null, null, dB, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalSaturation" in BB,
            get: BB => BB._globalSaturation,
            set: (BB, jB) => {
              BB._globalSaturation = jB
            }
          },
          metadata: IB
        }, gB, MB), (0, QB.e)(null, null, NB, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalExposure" in BB,
            get: BB => BB._globalExposure,
            set: (BB, jB) => {
              BB._globalExposure = jB
            }
          },
          metadata: IB
        }, EB, iB), (0, QB.e)(null, null, uB, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsHue" in BB,
            get: BB => BB._highlightsHue,
            set: (BB, jB) => {
              BB._highlightsHue = jB
            }
          },
          metadata: IB
        }, qB, fB), (0, QB.e)(null, null, UB, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsDensity" in BB,
            get: BB => BB._highlightsDensity,
            set: (BB, jB) => {
              BB._highlightsDensity = jB
            }
          },
          metadata: IB
        }, oB, HB), (0, QB.e)(null, null, aB, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsSaturation" in BB,
            get: BB => BB._highlightsSaturation,
            set: (BB, jB) => {
              BB._highlightsSaturation = jB
            }
          },
          metadata: IB
        }, DB, FB), (0, QB.e)(null, null, pB, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsExposure" in BB,
            get: BB => BB._highlightsExposure,
            set: (BB, jB) => {
              BB._highlightsExposure = jB
            }
          },
          metadata: IB
        }, YB, VB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesHue" in BB,
            get: BB => BB._midtonesHue,
            set: (BB, jB) => {
              BB._midtonesHue = jB
            }
          },
          metadata: IB
        }, hB, XB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesDensity" in BB,
            get: BB => BB._midtonesDensity,
            set: (BB, jB) => {
              BB._midtonesDensity = jB
            }
          },
          metadata: IB
        }, ZB, AB), (0, QB.e)(null, null, JB, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesSaturation" in BB,
            get: BB => BB._midtonesSaturation,
            set: (BB, jB) => {
              BB._midtonesSaturation = jB
            }
          },
          metadata: IB
        }, TB, PB), (0, QB.e)(null, null, mB, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesExposure" in BB,
            get: BB => BB._midtonesExposure,
            set: (BB, jB) => {
              BB._midtonesExposure = jB
            }
          },
          metadata: IB
        }, WB, eB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB.PrepareUniforms = SB.d, BB
    })();

    function EB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      BB._bind(jB, zB, QB, nB)
    }
    var iB = zB(40015),
      qB = zB(40188),
      fB = zB(37222);
    let oB = (() => {
        var BB;
        let jB, zB, UB, sB, JB, mB, kB, SB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, xB, KB, CB, cB = [],
          bB = [],
          vB = [],
          RB = [],
          OB = [],
          Bj = [],
          jj = [],
          zj = [],
          Qj = [],
          nj = [],
          dj = [],
          Ij = [],
          Nj = [],
          uj = [],
          Uj = [],
          aj = [],
          pj = [],
          rj = [],
          sj = [],
          Jj = [],
          mj = [],
          yj = [],
          kj = [],
          Gj = [],
          Lj = [],
          gj = [],
          tj = [],
          Sj = [],
          Mj = [],
          Ej = [],
          ij = [],
          qj = [],
          fj = [],
          oj = [],
          Hj = [],
          Dj = [],
          Fj = [],
          Yj = [],
          Vj = [],
          hj = [],
          Xj = [],
          Zj = [],
          Aj = [],
          Tj = [],
          Pj = [],
          Wj = [],
          ej = [],
          lj = [],
          wj = [],
          xj = [],
          Kj = [],
          Cj = [],
          cj = [],
          bj = [],
          vj = [],
          Rj = [];
        return BB = class {
          constructor() {
            this.colorCurves = (0, QB.g)(this, cB, new MB), this._colorCurvesEnabled = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, !1)), this._colorGradingTexture = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, void 0)), this._colorGradingEnabled = ((0, QB.g)(this, Bj), (0, QB.g)(this, jj, !1)), this._colorGradingWithGreenDepth = ((0, QB.g)(this, zj), (0, QB.g)(this, Qj, !0)), this._colorGradingBGR = ((0, QB.g)(this, nj), (0, QB.g)(this, dj, !0)), this._exposure = ((0, QB.g)(this, Ij), (0, QB.g)(this, Nj, 1)), this._toneMappingEnabled = ((0, QB.g)(this, uj), (0, QB.g)(this, Uj, !1)), this._toneMappingType = ((0, QB.g)(this, aj), (0, QB.g)(this, pj, BB.TONEMAPPING_STANDARD)), this._contrast = ((0, QB.g)(this, rj), (0, QB.g)(this, sj, 1)), this._whiteBalanceEnabled = ((0, QB.g)(this, Jj), (0, QB.g)(this, mj, !1)), this._temperature = ((0, QB.g)(this, yj), (0, QB.g)(this, kj, 6500)), this._tint = ((0, QB.g)(this, Gj), (0, QB.g)(this, Lj, 0)), this._whiteBalanceMatrix = ((0, QB.g)(this, gj), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, QB.g)(this, tj, 0), this.vignetteCenterX = ((0, QB.g)(this, Sj), (0, QB.g)(this, Mj, 0)), this.vignetteCenterY = ((0, QB.g)(this, Ej), (0, QB.g)(this, ij, 0)), this.vignetteWeight = ((0, QB.g)(this, qj), (0, QB.g)(this, fj, 1.5)), this.vignetteColor = ((0, QB.g)(this, oj), (0, QB.g)(this, Hj, new IB.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, QB.g)(this, Dj), (0, QB.g)(this, Fj, .5)), this._vignetteBlendMode = ((0, QB.g)(this, Yj), (0, QB.g)(this, Vj, BB.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, QB.g)(this, hj), (0, QB.g)(this, Xj, !1)), this._ditheringEnabled = ((0, QB.g)(this, Zj), (0, QB.g)(this, Aj, !1)), this._ditheringIntensity = ((0, QB.g)(this, Tj), (0, QB.g)(this, Pj, 1 / 255)), this._skipFinalColorClamp = ((0, QB.g)(this, Wj), (0, QB.g)(this, ej, !1)), this._applyByPostProcess = ((0, QB.g)(this, lj), (0, QB.g)(this, wj, !1)), this._isEnabled = ((0, QB.g)(this, xj), (0, QB.g)(this, Kj, !0)), this.outputTextureWidth = ((0, QB.g)(this, Cj), (0, QB.g)(this, cj, 0)), this.outputTextureHeight = ((0, QB.g)(this, bj), (0, QB.g)(this, vj, 0)), this.onUpdateParameters = ((0, QB.g)(this, Rj), new dB.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(BB) {
            this._colorCurvesEnabled !== BB && (this._colorCurvesEnabled = BB, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(BB) {
            this._colorGradingTexture !== BB && (this._colorGradingTexture = BB, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(BB) {
            this._colorGradingEnabled !== BB && (this._colorGradingEnabled = BB, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(BB) {
            this._colorGradingWithGreenDepth !== BB && (this._colorGradingWithGreenDepth = BB, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(BB) {
            this._colorGradingBGR !== BB && (this._colorGradingBGR = BB, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(BB) {
            this._exposure !== BB && (this._exposure = BB, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(BB) {
            this._toneMappingEnabled !== BB && (this._toneMappingEnabled = BB, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(BB) {
            this._toneMappingType !== BB && (this._toneMappingType = BB, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(BB) {
            this._contrast !== BB && (this._contrast = BB, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(BB) {
            this._whiteBalanceEnabled !== BB && (this._whiteBalanceEnabled = BB, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(BB) {
            BB = Number.isNaN(BB) ? aB : Math.max(BB, aB), this._temperature !== BB && (this._temperature = BB, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(BB) {
            BB = (0, NB.Clamp)(BB, -150, pB), this._tint !== BB && (this._tint = BB, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(BB, jB) {
              const zB = yB(rB(BB, jB), gB),
                QB = GB.multiply(zB).multiply(LB);
              return uB.c.GetAsMatrix3x3(QB)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(BB) {
            this.vignetteCenterY = BB
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(BB) {
            this.vignetteCenterX = BB
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(BB) {
            this._vignetteBlendMode !== BB && (this._vignetteBlendMode = BB, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(BB) {
            this._vignetteEnabled !== BB && (this._vignetteEnabled = BB, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(BB) {
            this._ditheringEnabled !== BB && (this._ditheringEnabled = BB, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(BB) {
            this._ditheringIntensity !== BB && (this._ditheringIntensity = BB, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(BB) {
            this._skipFinalColorClamp !== BB && (this._skipFinalColorClamp = BB, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(BB) {
            this._applyByPostProcess !== BB && (this._applyByPostProcess = BB, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(BB) {
            this._isEnabled !== BB && (this._isEnabled = BB, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(jB) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return jB.WHITEBALANCE = !1, jB.VIGNETTE = !1, jB.TONEMAPPING = 0, jB.CONTRAST = !1, jB.EXPOSURE = !1, jB.COLORCURVES = !1, jB.COLORGRADING = !1, jB.COLORGRADING3D = !1, jB.DITHER = !1, jB.IMAGEPROCESSING = !1, jB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(jB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (jB.WHITEBALANCE = this._whiteBalanceEnabled, jB.VIGNETTE = this.vignetteEnabled, jB.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === BB._VIGNETTEMODE_MULTIPLY, jB.VIGNETTEBLENDMODEOPAQUE = !jB.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case BB.TONEMAPPING_KHR_PBR_NEUTRAL:
                jB.TONEMAPPING = 3;
                break;
              case BB.TONEMAPPING_ACES:
                jB.TONEMAPPING = 2;
                break;
              default:
                jB.TONEMAPPING = 1
            } else jB.TONEMAPPING = 0;
            jB.CONTRAST = 1 !== this.contrast, jB.EXPOSURE = 1 !== this.exposure, jB.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, jB.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, jB.COLORGRADING ? jB.COLORGRADING3D = this.colorGradingTexture.is3D : jB.COLORGRADING3D = !1, jB.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, jB.SAMPLER3DBGRMAP = this.colorGradingBGR, jB.DITHER = this._ditheringEnabled, jB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, jB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, jB.IMAGEPROCESSING = jB.WHITEBALANCE || jB.VIGNETTE || !!jB.TONEMAPPING || jB.CONTRAST || jB.EXPOSURE || jB.COLORCURVES || jB.COLORGRADING || jB.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(BB, jB) {
            if (this._whiteBalanceEnabled && BB.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && EB(this.colorCurves, BB), this._vignetteEnabled || this._ditheringEnabled) {
              const zB = 1 / (this.outputTextureWidth || BB.wJ().getRenderWidth()),
                QB = 1 / (this.outputTextureHeight || BB.wJ().getRenderHeight());
              if (BB.setFloat2("vInverseScreenSize", zB, QB), this._ditheringEnabled && BB.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const nB = null != jB ? jB : QB / zB;
                let dB = Math.tan(.5 * this.vignetteCameraFov),
                  IB = dB * nB;
                const NB = Math.sqrt(IB * dB);
                IB = (0, iB.e)(IB, NB, this.vignetteStretch), dB = (0, iB.e)(dB, NB, this.vignetteStretch), BB.setFloat4("vignetteSettings1", IB, dB, -IB * this.vignetteCenterX, -dB * this.vignetteCenterY);
                const uB = -2 * this.vignetteWeight;
                BB.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, uB)
              }
            }
            if (BB.setFloat("exposureLinear", this.exposure), BB.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              BB.setTexture("txColorTransform", this.colorGradingTexture);
              const jB = this.colorGradingTexture.getSize().height;
              BB.setFloat4("colorTransformSettings", (jB - 1) / jB, .5 / jB, jB, this.colorGradingTexture.level)
            }
          }
          clone() {
            return tB.b.Clone((() => new BB), this)
          }
          serialize() {
            return tB.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          jB = [(0, nB.g)()], zB = [(0, nB.A)()], UB = [(0, nB.v)("colorGradingTexture")], sB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], kB = [(0, nB.A)()], SB = [(0, nB.A)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], DB = [(0, nB.A)()], FB = [(0, nB.A)()], YB = [(0, nB.A)()], VB = [(0, nB.A)()], hB = [(0, nB.A)()], XB = [(0, nB.A)()], ZB = [(0, nB.l)()], AB = [(0, nB.A)()], TB = [(0, nB.A)()], PB = [(0, nB.A)()], WB = [(0, nB.A)()], eB = [(0, nB.A)()], lB = [(0, nB.A)()], wB = [(0, nB.A)()], xB = [(0, nB.A)()], KB = [(0, nB.A)()], CB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: BB => "colorCurves" in BB,
              get: BB => BB.colorCurves,
              set: (BB, jB) => {
                BB.colorCurves = jB
              }
            },
            metadata: dB
          }, cB, bB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorCurvesEnabled" in BB,
              get: BB => BB._colorCurvesEnabled,
              set: (BB, jB) => {
                BB._colorCurvesEnabled = jB
              }
            },
            metadata: dB
          }, vB, RB), (0, QB.e)(null, null, UB, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingTexture" in BB,
              get: BB => BB._colorGradingTexture,
              set: (BB, jB) => {
                BB._colorGradingTexture = jB
              }
            },
            metadata: dB
          }, OB, Bj), (0, QB.e)(null, null, sB, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingEnabled" in BB,
              get: BB => BB._colorGradingEnabled,
              set: (BB, jB) => {
                BB._colorGradingEnabled = jB
              }
            },
            metadata: dB
          }, jj, zj), (0, QB.e)(null, null, JB, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingWithGreenDepth" in BB,
              get: BB => BB._colorGradingWithGreenDepth,
              set: (BB, jB) => {
                BB._colorGradingWithGreenDepth = jB
              }
            },
            metadata: dB
          }, Qj, nj), (0, QB.e)(null, null, mB, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingBGR" in BB,
              get: BB => BB._colorGradingBGR,
              set: (BB, jB) => {
                BB._colorGradingBGR = jB
              }
            },
            metadata: dB
          }, dj, Ij), (0, QB.e)(null, null, kB, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: BB => "_exposure" in BB,
              get: BB => BB._exposure,
              set: (BB, jB) => {
                BB._exposure = jB
              }
            },
            metadata: dB
          }, Nj, uj), (0, QB.e)(null, null, SB, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingEnabled" in BB,
              get: BB => BB._toneMappingEnabled,
              set: (BB, jB) => {
                BB._toneMappingEnabled = jB
              }
            },
            metadata: dB
          }, Uj, aj), (0, QB.e)(null, null, fB, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingType" in BB,
              get: BB => BB._toneMappingType,
              set: (BB, jB) => {
                BB._toneMappingType = jB
              }
            },
            metadata: dB
          }, pj, rj), (0, QB.e)(null, null, oB, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: BB => "_contrast" in BB,
              get: BB => BB._contrast,
              set: (BB, jB) => {
                BB._contrast = jB
              }
            },
            metadata: dB
          }, sj, Jj), (0, QB.e)(null, null, HB, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_whiteBalanceEnabled" in BB,
              get: BB => BB._whiteBalanceEnabled,
              set: (BB, jB) => {
                BB._whiteBalanceEnabled = jB
              }
            },
            metadata: dB
          }, mj, yj), (0, QB.e)(null, null, DB, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: BB => "_temperature" in BB,
              get: BB => BB._temperature,
              set: (BB, jB) => {
                BB._temperature = jB
              }
            },
            metadata: dB
          }, kj, Gj), (0, QB.e)(null, null, FB, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: BB => "_tint" in BB,
              get: BB => BB._tint,
              set: (BB, jB) => {
                BB._tint = jB
              }
            },
            metadata: dB
          }, Lj, gj), (0, QB.e)(null, null, YB, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteStretch" in BB,
              get: BB => BB.vignetteStretch,
              set: (BB, jB) => {
                BB.vignetteStretch = jB
              }
            },
            metadata: dB
          }, tj, Sj), (0, QB.e)(null, null, VB, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterX" in BB,
              get: BB => BB.vignetteCenterX,
              set: (BB, jB) => {
                BB.vignetteCenterX = jB
              }
            },
            metadata: dB
          }, Mj, Ej), (0, QB.e)(null, null, hB, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterY" in BB,
              get: BB => BB.vignetteCenterY,
              set: (BB, jB) => {
                BB.vignetteCenterY = jB
              }
            },
            metadata: dB
          }, ij, qj), (0, QB.e)(null, null, XB, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteWeight" in BB,
              get: BB => BB.vignetteWeight,
              set: (BB, jB) => {
                BB.vignetteWeight = jB
              }
            },
            metadata: dB
          }, fj, oj), (0, QB.e)(null, null, ZB, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteColor" in BB,
              get: BB => BB.vignetteColor,
              set: (BB, jB) => {
                BB.vignetteColor = jB
              }
            },
            metadata: dB
          }, Hj, Dj), (0, QB.e)(null, null, AB, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCameraFov" in BB,
              get: BB => BB.vignetteCameraFov,
              set: (BB, jB) => {
                BB.vignetteCameraFov = jB
              }
            },
            metadata: dB
          }, Fj, Yj), (0, QB.e)(null, null, TB, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteBlendMode" in BB,
              get: BB => BB._vignetteBlendMode,
              set: (BB, jB) => {
                BB._vignetteBlendMode = jB
              }
            },
            metadata: dB
          }, Vj, hj), (0, QB.e)(null, null, PB, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteEnabled" in BB,
              get: BB => BB._vignetteEnabled,
              set: (BB, jB) => {
                BB._vignetteEnabled = jB
              }
            },
            metadata: dB
          }, Xj, Zj), (0, QB.e)(null, null, WB, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringEnabled" in BB,
              get: BB => BB._ditheringEnabled,
              set: (BB, jB) => {
                BB._ditheringEnabled = jB
              }
            },
            metadata: dB
          }, Aj, Tj), (0, QB.e)(null, null, eB, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringIntensity" in BB,
              get: BB => BB._ditheringIntensity,
              set: (BB, jB) => {
                BB._ditheringIntensity = jB
              }
            },
            metadata: dB
          }, Pj, Wj), (0, QB.e)(null, null, lB, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: BB => "_skipFinalColorClamp" in BB,
              get: BB => BB._skipFinalColorClamp,
              set: (BB, jB) => {
                BB._skipFinalColorClamp = jB
              }
            },
            metadata: dB
          }, ej, lj), (0, QB.e)(null, null, wB, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyByPostProcess" in BB,
              get: BB => BB._applyByPostProcess,
              set: (BB, jB) => {
                BB._applyByPostProcess = jB
              }
            },
            metadata: dB
          }, wj, xj), (0, QB.e)(null, null, xB, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_isEnabled" in BB,
              get: BB => BB._isEnabled,
              set: (BB, jB) => {
                BB._isEnabled = jB
              }
            },
            metadata: dB
          }, Kj, Cj), (0, QB.e)(null, null, KB, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureWidth" in BB,
              get: BB => BB.outputTextureWidth,
              set: (BB, jB) => {
                BB.outputTextureWidth = jB
              }
            },
            metadata: dB
          }, cj, bj), (0, QB.e)(null, null, CB, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureHeight" in BB,
              get: BB => BB.outputTextureHeight,
              set: (BB, jB) => {
                BB.outputTextureHeight = jB
              }
            },
            metadata: dB
          }, vj, Rj), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB.TONEMAPPING_STANDARD = 0, BB.TONEMAPPING_ACES = 1, BB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, BB.PrepareUniforms = qB.c, BB.PrepareSamplers = qB.b, BB._VIGNETTEMODE_MULTIPLY = 0, BB._VIGNETTEMODE_OPAQUE = 1, BB
      })(),
      HB = !1;

    function DB(BB) {
      const jB = tB.b.Parse((() => new oB), BB, null, null);
      return void 0 !== BB.vignetteCentreX && (jB.vignetteCenterX = BB.vignetteCentreX), void 0 !== BB.vignetteCentreY && (jB.vignetteCenterY = BB.vignetteCentreY), jB
    }

    function FB() {
      HB || (HB = !0, oB.Parse = DB, tB.b._ImageProcessingConfigurationParser = DB, (0, fB.d)("BABYLON.ImageProcessingConfiguration", oB))
    }
  },
  40195: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(38783),
      nB = zB(40164);
    class dB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          dB = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = BB, this._noUBO = !BB.supportsUniformBuffers || nB, this._dynamic = zB, this._name = QB ?? "no-name", this._data = jB || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === dB && this._engine._features.trackUbosInFrame || !0 === dB) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.l_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.l_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(BB) {
        let jB;
        if (jB = BB <= 2 ? BB : 4, this._uniformLocationPointer % jB !== 0) {
          const BB = this._uniformLocationPointer;
          this._uniformLocationPointer += jB - this._uniformLocationPointer % jB;
          const zB = this._uniformLocationPointer - BB;
          for (let jB = 0; jB < zB; jB++) this._data.push(0)
        }
      }
      addUniform(BB, jB) {
        let zB, QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (QB > 0 && "number" === typeof jB && (this._uniformArraySizes[BB] = {
            strideSize: jB,
            arraySize: QB
          }), void 0 === this._uniformLocations[BB] && (this._uniformNames.push(BB), !this._noUBO)) {
          if (QB > 0) {
            if (jB instanceof Array) throw "addUniform should not be use with Array in UBO: " + BB;
            if (this._fillAlignment(4), 16 == jB) jB *= QB;
            else {
              jB = jB * QB + (4 - jB) * QB
            }
            zB = [];
            for (let BB = 0; BB < jB; BB++) zB.push(0)
          } else {
            if (jB instanceof Array) zB = jB, jB = zB.length;
            else {
              zB = [];
              for (let BB = 0; BB < jB; BB++) zB.push(0)
            }
            this._fillAlignment(jB)
          }
          this._uniformSizes[BB] = jB, this._uniformLocations[BB] = this._uniformLocationPointer, this._uniformLocationPointer += jB;
          for (let BB = 0; BB < jB; BB++) this._data.push(zB[BB]);
          this._needSync = !0
        }
      }
      addMatrix(BB, jB) {
        this.addUniform(BB, Array.prototype.slice.call(jB.nQB()))
      }
      addFloat2(BB, jB, zB) {
        const QB = [jB, zB];
        this.addUniform(BB, QB)
      }
      addFloat3(BB, jB, zB, QB) {
        const nB = [jB, zB, QB];
        this.addUniform(BB, nB)
      }
      addColor3(BB, jB) {
        const zB = [jB.r, jB.g, jB.b];
        this.addUniform(BB, zB)
      }
      addColor4(BB, jB, zB) {
        const QB = [jB.r, jB.g, jB.b, zB];
        this.addUniform(BB, QB)
      }
      addVector3(BB, jB) {
        const zB = [jB.x, jB.y, jB.z];
        this.addUniform(BB, zB)
      }
      addMatrix3x3(BB) {
        this.addUniform(BB, 12)
      }
      addMatrix2x2(BB) {
        this.addUniform(BB, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const BB = [];
        let jB = 0;
        for (const zB in this._uniformLocations)
          if (BB.push(zB), 10 === ++jB) break;
        return BB.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const BB of this._ownerListsBySlot.values()) this._removeOwnerBacklink(BB);
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
      set name(BB) {
        this._name = BB
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(BB, jB) {
        for (let zB = 0; zB < BB.length; ++zB)
          if (BB[zB] !== jB[zB]) return !1;
        return !0
      }
      _copyBuffer(BB, jB) {
        for (let zB = 0; zB < BB.length; ++zB) jB[zB] = BB[zB]
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
      _updateOwnerKeyed(BB) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let jB = this._slotByOwner.get(BB);
        if (void 0 === jB && (jB = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(BB, jB), this._ownerCount++, BB._uniformBuffersWithOwnedSlot || (BB._uniformBuffersWithOwnedSlot = []), BB._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(jB, BB._uniformBuffersWithOwnedSlot)), this._slotGeneration[jB] === this._dataGeneration) return this._bufferIndex = jB, this._buffer = this._buffers[jB][0], this.bindUniformBuffer(), this._slotFrameId[jB] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const zB = this._buffers[jB][1];
        this._slotFrameId[jB] === this._currentFrameId && zB && !this._buffersEqual(this._bufferData, zB) && (jB = this._takeFreeSlot(!1)), this._bufferIndex = jB, this._buffer = this._buffers[jB][0], this.bindUniformBuffer();
        const QB = this._buffers[jB][1];
        QB && this._buffersEqual(this._bufferData, QB) || (QB && this._copyBuffer(this._bufferData, QB), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[jB] = this._currentFrameId, this._slotGeneration[jB] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(BB) {
        for (let zB = 0; zB < this._freeSlots.length; ++zB) {
          const jB = this._freeSlots[zB];
          if (this._slotFrameId[jB] !== this._currentFrameId) return BB && (this._freeSlots[zB] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), jB
        }
        this._rebuild();
        const jB = this._buffers.length - 1;
        return BB || this._freeSlots.push(jB), jB
      }
      _releaseOwnerSlot(BB) {
        const jB = this._slotByOwner?.get(BB);
        if (void 0 === jB) return;
        this._slotByOwner.delete(BB);
        const zB = this._ownerListsBySlot.get(jB);
        zB && (this._removeOwnerBacklink(zB), this._ownerListsBySlot.delete(jB)), this._ownerCount--, this._freeSlots.push(jB)
      }
      _removeOwnerBacklink(BB) {
        const jB = BB.indexOf(this); - 1 !== jB && (BB[jB] = BB[BB.length - 1], BB.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(BB, jB, zB) {
        this._checkNewFrame();
        let nB = this._uniformLocations[BB];
        if (void 0 === nB) {
          if (this._buffer) return void QB.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + BB);
          this.addUniform(BB, zB), nB = this._uniformLocations[BB]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let BB = 0; BB < zB; BB++) this._bufferData[nB + BB] = jB[BB];
          this._dataGeneration++
        } else {
          let BB = !1;
          for (let QB = 0; QB < zB; QB++)(16 === zB && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[nB + QB] !== Math.fround(jB[QB])) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[nB + QB] = jB[QB]);
          this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      updateUniformArray(BB, jB, zB) {
        this._checkNewFrame();
        const dB = this._uniformLocations[BB];
        if (void 0 === dB) return void QB.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const IB = this._uniformArraySizes[BB];
        if (this._dynamic) {
          for (let BB = 0; BB < zB; BB++) this._bufferData[dB + BB] = jB[BB];
          this._dataGeneration++
        } else {
          let BB = !1,
            QB = 0,
            NB = 0;
          for (let uB = 0; uB < zB; uB++)
            if (this._bufferData[dB + 4 * NB + QB] !== nB.i.FloatRound(jB[uB]) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[dB + 4 * NB + QB] = jB[uB]), QB++, QB === IB.strideSize) {
              for (; QB < 4; QB++) this._bufferData[dB + 4 * NB + QB] = 0;
              QB = 0, NB++
            } this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      _cacheMatrix(BB, jB) {
        this._checkNewFrame();
        const zB = this._valueCache[BB],
          QB = jB.updateFlag;
        return (void 0 === zB || zB !== QB) && (this._valueCache[BB] = QB, !0)
      }
      _updateMatrix3x3ForUniform(BB, jB) {
        for (let zB = 0; zB < 3; zB++) dB._TempBuffer[4 * zB] = jB[3 * zB], dB._TempBuffer[4 * zB + 1] = jB[3 * zB + 1], dB._TempBuffer[4 * zB + 2] = jB[3 * zB + 2], dB._TempBuffer[4 * zB + 3] = 0;
        this.updateUniform(BB, dB._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(BB, jB) {
        this._currentEffect.setMatrix3x3(BB, jB)
      }
      _updateMatrix2x2ForEffect(BB, jB) {
        this._currentEffect.setMatrix2x2(BB, jB)
      }
      _updateMatrix2x2ForUniform(BB, jB) {
        for (let zB = 0; zB < 2; zB++) dB._TempBuffer[4 * zB] = jB[2 * zB], dB._TempBuffer[4 * zB + 1] = jB[2 * zB + 1], dB._TempBuffer[4 * zB + 2] = 0, dB._TempBuffer[4 * zB + 3] = 0;
        this.updateUniform(BB, dB._TempBuffer, 8)
      }
      _updateFloatForEffect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(BB + zB, jB)
      }
      _updateFloatForUniform(BB, jB) {
        dB._TempBuffer[0] = jB, this.updateUniform(BB, dB._TempBuffer, 1)
      }
      _updateFloat2ForEffect(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(BB + QB, jB, zB)
      }
      _updateFloat2ForUniform(BB, jB, zB) {
        dB._TempBuffer[0] = jB, dB._TempBuffer[1] = zB, this.updateUniform(BB, dB._TempBuffer, 2)
      }
      _updateFloat3ForEffect(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(BB + nB, jB, zB, QB)
      }
      _updateFloat3ForUniform(BB, jB, zB, QB) {
        dB._TempBuffer[0] = jB, dB._TempBuffer[1] = zB, dB._TempBuffer[2] = QB, this.updateUniform(BB, dB._TempBuffer, 3)
      }
      _updateFloat4ForEffect(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(BB + dB, jB, zB, QB, nB)
      }
      _updateFloat4ForUniform(BB, jB, zB, QB, nB) {
        dB._TempBuffer[0] = jB, dB._TempBuffer[1] = zB, dB._TempBuffer[2] = QB, dB._TempBuffer[3] = nB, this.updateUniform(BB, dB._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[BB]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(BB + zB, jB);
            break;
          case 3:
            this._currentEffect.setFloatArray3(BB + zB, jB);
            break;
          case 4:
            this._currentEffect.setFloatArray4(BB + zB, jB);
            break;
          default:
            this._currentEffect.setFloatArray(BB + zB, jB)
        }
      }
      _updateFloatArrayForUniform(BB, jB) {
        this.updateUniformArray(BB, jB, jB.length)
      }
      _updateArrayForEffect(BB, jB) {
        this._currentEffect.setArray(BB, jB)
      }
      _updateArrayForUniform(BB, jB) {
        this.updateUniformArray(BB, jB, jB.length)
      }
      _updateIntArrayForEffect(BB, jB) {
        this._currentEffect.setIntArray(BB, jB)
      }
      _updateIntArrayForUniform(BB, jB) {
        dB._TempBufferInt32View.set(jB), this.updateUniformArray(BB, dB._TempBuffer, jB.length)
      }
      _updateUIntArrayForEffect(BB, jB) {
        this._currentEffect.setUIntArray(BB, jB)
      }
      _updateUIntArrayForUniform(BB, jB) {
        dB._TempBufferUInt32View.set(jB), this.updateUniformArray(BB, dB._TempBuffer, jB.length)
      }
      _updateMatrixForEffect(BB, jB) {
        this._currentEffect.setMatrix(BB, jB)
      }
      _updateMatrixForUniform(BB, jB) {
        this._cacheMatrix(BB, jB) && this.updateUniform(BB, jB.nQB(), 16)
      }
      _updateMatricesForEffect(BB, jB) {
        this._currentEffect.setMatrices(BB, jB)
      }
      _updateMatricesForUniform(BB, jB) {
        this.updateUniform(BB, jB, jB.length)
      }
      _updateVector3ForEffect(BB, jB) {
        this._currentEffect.setVector3(BB, jB)
      }
      _updateVector3ForUniform(BB, jB) {
        dB._TempBuffer[0] = jB.x, dB._TempBuffer[1] = jB.y, dB._TempBuffer[2] = jB.z, this.updateUniform(BB, dB._TempBuffer, 3)
      }
      _updateVector4ForEffect(BB, jB) {
        this._currentEffect.setVector4(BB, jB)
      }
      _updateVector4ForUniform(BB, jB) {
        dB._TempBuffer[0] = jB.x, dB._TempBuffer[1] = jB.y, dB._TempBuffer[2] = jB.z, dB._TempBuffer[3] = jB.w, this.updateUniform(BB, dB._TempBuffer, 4)
      }
      _updateColor3ForEffect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(BB + zB, jB)
      }
      _updateColor3ForUniform(BB, jB) {
        dB._TempBuffer[0] = jB.r, dB._TempBuffer[1] = jB.g, dB._TempBuffer[2] = jB.b, this.updateUniform(BB, dB._TempBuffer, 3)
      }
      _updateColor4ForEffect(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(BB + QB, jB, zB)
      }
      _updateDirectColor4ForEffect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(BB + zB, jB)
      }
      _updateColor4ForUniform(BB, jB, zB) {
        dB._TempBuffer[0] = jB.r, dB._TempBuffer[1] = jB.g, dB._TempBuffer[2] = jB.b, dB._TempBuffer[3] = zB, this.updateUniform(BB, dB._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(BB, jB) {
        dB._TempBuffer[0] = jB.r, dB._TempBuffer[1] = jB.g, dB._TempBuffer[2] = jB.b, dB._TempBuffer[3] = jB.a, this.updateUniform(BB, dB._TempBuffer, 4)
      }
      _updateIntForEffect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(BB + zB, jB)
      }
      _updateIntForUniform(BB, jB) {
        dB._TempBufferInt32View[0] = jB, this.updateUniform(BB, dB._TempBuffer, 1)
      }
      _updateInt2ForEffect(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(BB + QB, jB, zB)
      }
      _updateInt2ForUniform(BB, jB, zB) {
        dB._TempBufferInt32View[0] = jB, dB._TempBufferInt32View[1] = zB, this.updateUniform(BB, dB._TempBuffer, 2)
      }
      _updateInt3ForEffect(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(BB + nB, jB, zB, QB)
      }
      _updateInt3ForUniform(BB, jB, zB, QB) {
        dB._TempBufferInt32View[0] = jB, dB._TempBufferInt32View[1] = zB, dB._TempBufferInt32View[2] = QB, this.updateUniform(BB, dB._TempBuffer, 3)
      }
      _updateInt4ForEffect(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(BB + dB, jB, zB, QB, nB)
      }
      _updateInt4ForUniform(BB, jB, zB, QB, nB) {
        dB._TempBufferInt32View[0] = jB, dB._TempBufferInt32View[1] = zB, dB._TempBufferInt32View[2] = QB, dB._TempBufferInt32View[3] = nB, this.updateUniform(BB, dB._TempBuffer, 4)
      }
      _updateUIntForEffect(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(BB + zB, jB)
      }
      _updateUIntForUniform(BB, jB) {
        dB._TempBufferUInt32View[0] = jB, this.updateUniform(BB, dB._TempBuffer, 1)
      }
      _updateUInt2ForEffect(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(BB + QB, jB, zB)
      }
      _updateUInt2ForUniform(BB, jB, zB) {
        dB._TempBufferUInt32View[0] = jB, dB._TempBufferUInt32View[1] = zB, this.updateUniform(BB, dB._TempBuffer, 2)
      }
      _updateUInt3ForEffect(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(BB + nB, jB, zB, QB)
      }
      _updateUInt3ForUniform(BB, jB, zB, QB) {
        dB._TempBufferUInt32View[0] = jB, dB._TempBufferUInt32View[1] = zB, dB._TempBufferUInt32View[2] = QB, this.updateUniform(BB, dB._TempBuffer, 3)
      }
      _updateUInt4ForEffect(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(BB + dB, jB, zB, QB, nB)
      }
      _updateUInt4ForUniform(BB, jB, zB, QB, nB) {
        dB._TempBufferUInt32View[0] = jB, dB._TempBufferUInt32View[1] = zB, dB._TempBufferUInt32View[2] = QB, dB._TempBufferUInt32View[3] = nB, this.updateUniform(BB, dB._TempBuffer, 4)
      }
      setTexture(BB, jB) {
        this._currentEffect.setTexture(BB, jB)
      }
      setTextureArray(BB, jB) {
        this._currentEffect.setTextureArray(BB, jB)
      }
      bindTexture(BB, jB) {
        this._currentEffect._bindTexture(BB, jB)
      }
      updateUniformDirectly(BB, jB) {
        this.updateUniform(BB, jB, jB.length), this.update()
      }
      bindToEffect(BB, jB) {
        this._currentEffect = BB, this._currentEffectName = jB
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(BB) {
        if (!this._buffers) return this._buffer === BB;
        for (let jB = 0; jB < this._buffers.length; ++jB) {
          if (this._buffers[jB][0] === BB) return this._bufferIndex = jB, this._buffer = BB, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[jB][1] && (this._bufferData.set(this._buffers[jB][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(BB) {
        return void 0 !== this._uniformLocations[BB]
      }
      dispose() {
        if (this._noUBO) return;
        const BB = this._engine._uniformBuffers,
          jB = BB.indexOf(this);
        if (-1 !== jB && (BB[jB] = BB[BB.length - 1], BB.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let BB = 0; BB < this._buffers.length; ++BB) {
            const jB = this._buffers[BB][0];
            this._engine._releaseBuffer(jB)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    dB._MAX_UNIFORM_SIZE = 256, dB._TempBuffer = new Float32Array(dB._MAX_UNIFORM_SIZE), dB._TempBufferInt32View = new Int32Array(dB._TempBuffer.buffer), dB._TempBufferUInt32View = new Uint32Array(dB._TempBuffer.buffer)
  },
  40001: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(40008);
    class nB extends QB.e {
      constructor(BB) {
        super(), this._buffer = BB
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40076: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      f: () => UB
    });
    const QB = "__bjs_serializable__",
      nB = new WeakMap;

    function dB(BB, jB) {
      return Object.prototype.hasOwnProperty.call(BB, jB)
    }
    const IB = function() {
      let BB = Symbol.metadata;
      return BB || (BB = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: BB
      })), BB
    }();

    function NB(BB) {
      return "function" === typeof BB ? BB : BB?.constructor
    }

    function uB(BB) {
      if (!BB) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(IB)}) polyfill must run before decorated classes are evaluated.`);
      return dB(BB, QB) || (BB[QB] = {}), BB[QB]
    }

    function UB(BB) {
      const jB = NB(BB),
        zB = jB ? jB[IB] : void 0;
      if (!zB) return {};
      const uB = nB.get(zB);
      if (uB) return uB;
      const UB = {},
        aB = [];
      let pB = zB;
      for (; pB;) aB.push(pB), pB = Object.getPrototypeOf(pB);
      for (const nB of aB)
        if (dB(nB, QB)) {
          const BB = nB[QB];
          for (const jB in BB) UB[jB] = BB[jB]
        } return nB.set(zB, UB), UB
    }
  },
  40068: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => IB,
      b: () => LB,
      e: () => dB,
      f: () => GB,
      g: () => sB,
      i: () => uB,
      l: () => JB,
      p: () => UB,
      r: () => yB,
      s: () => rB,
      t: () => mB,
      v: () => NB,
      w: () => aB,
      x: () => pB
    });
    var QB = zB(40076);

    function nB(BB, jB) {
      return (zB, nB) => {
        if (!nB.metadata) return;
        const dB = String(nB.name),
          IB = (0, QB.c)(nB.metadata);
        IB[dB] || (IB[dB] = {
          type: BB,
          sourceName: jB
        })
      }
    }

    function dB(BB) {
      return function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (zB, QB) => {
          const nB = jB || "_" + String(QB.name);
          return {
            init(BB) {
              return void 0 === BB && nB in this || (this[nB] = BB), BB
            },
            get() {
              return this[nB]
            },
            set(jB) {
              "function" === typeof this[nB]?.equals && this[nB].equals(jB) || this[nB] !== jB && (this[nB] = jB, this[BB]())
            }
          }
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function IB(BB) {
      return nB(0, BB)
    }

    function NB(BB) {
      return nB(1, BB)
    }

    function uB(BB) {
      return nB(2, BB)
    }

    function UB(BB) {
      return nB(3, BB)
    }

    function aB(BB) {
      return nB(4, BB)
    }

    function pB(BB) {
      return nB(5, BB)
    }

    function rB(BB) {
      return nB(6, BB)
    }

    function sB(BB) {
      return nB(7, BB)
    }

    function JB(BB) {
      return nB(8, BB)
    }

    function mB(BB) {
      return nB(10, BB)
    }

    function yB(BB) {
      return nB(12, BB)
    }

    function kB(BB, jB, zB) {
      const QB = String(jB.name);
      let nB = null;
      const dB = function() {
        if (null === nB) {
          nB = BB, "undefined" !== typeof _native && _native[QB] && (nB = zB(_native[QB], BB));
          const IB = this && (jB.static ? this : Object.getPrototypeOf(this));
          IB?.[QB] === dB && (IB[QB] = nB)
        }
        for (var IB = arguments.length, NB = new Array(IB), uB = 0; uB < IB; uB++) NB[uB] = arguments[uB];
        return nB.apply(this, NB)
      };
      return dB
    }

    function GB(BB, jB) {
      return kB(BB, jB, (BB => BB))
    }

    function LB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (zB, QB) => {
        const nB = jB || "_" + String(QB.name);
        return {
          get() {
            return this[nB]?.value
          },
          set(jB) {
            "function" === typeof this[nB]?.value?.equals && this[nB].value.equals(jB) || this[nB].value !== jB && (this[nB].value = jB, this[BB]())
          }
        }
      }
    }
    GB.filter = function(BB) {
      return (jB, zB) => kB(jB, zB, ((jB, zB) => function() {
        for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
        return BB(...nB) ? jB(...nB) : zB.apply(this, nB)
      }))
    }
  },
  40086: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(39965),
      nB = zB(40089),
      dB = zB(37379),
      IB = zB(37171),
      NB = zB(40076);
    const uB = function(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const dB = BB();
      nB.d && nB.d.HasTags(jB) && nB.d.AddTagsTo(dB, nB.d.GetTags(jB, !0));
      const IB = (0, NB.f)(dB),
        uB = {};
      for (const nB in IB) {
        const BB = IB[nB],
          NB = jB[nB],
          aB = BB.type;
        if (void 0 !== NB && null !== NB && ("uniqueId" !== nB || UB.AllowLoadingUniqueId)) switch (aB) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof NB.slice ? dB[nB] = NB.slice() : dB[nB] = NB;
            break;
          case 1:
            QB.cloneTexturesOnlyOnce && uB[NB.uniqueId] ? dB[nB] = uB[NB.uniqueId] : (dB[nB] = zB || NB.isRenderTarget ? NB : NB.clone(), uB[NB.uniqueId] = dB[nB]);
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
            dB[nB] = zB ? NB : NB.clone()
        }
      }
      return dB
    };
    class UB {
      static AppendSerializedAnimations(BB, jB) {
        if (BB.animations) {
          jB.animations = [];
          for (let zB = 0; zB < BB.animations.length; zB++) {
            const QB = BB.animations[zB];
            jB.animations.push(QB.serialize())
          }
        }
      }
      static Serialize(BB, jB) {
        jB || (jB = {}), nB.d && (jB.tags = nB.d.GetTags(BB));
        const zB = (0, NB.f)(BB);
        for (const QB in zB) {
          const nB = zB[QB],
            dB = nB.sourceName || QB,
            IB = nB.type,
            NB = BB[QB];
          if (void 0 !== NB && null !== NB && ("uniqueId" !== QB || UB.AllowLoadingUniqueId)) switch (IB) {
            case 0:
              Array.isArray(NB) ? jB[dB] = NB.slice() : jB[dB] = NB;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              jB[dB] = NB.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              jB[dB] = NB.nQB();
              break;
            case 6:
            case 11:
              jB[dB] = NB.id
          }
        }
        return jB
      }
      static ParseProperties(BB, jB, zB, QB) {
        QB || (QB = "");
        const nB = (0, NB.f)(jB);
        for (const NB in nB) {
          const uB = nB[NB],
            aB = BB[uB.sourceName || NB],
            pB = uB.type;
          if (void 0 !== aB && null !== aB && ("uniqueId" !== NB || UB.AllowLoadingUniqueId)) {
            const BB = jB;
            switch (pB) {
              case 0:
                BB[NB] = aB;
                break;
              case 1:
                zB && (BB[NB] = UB._TextureParser(aB, zB, QB));
                break;
              case 2:
                BB[NB] = dB.d.FromArray(aB);
                break;
              case 3:
                BB[NB] = UB._FresnelParametersParser(aB);
                break;
              case 4:
                BB[NB] = IB.i.FromArray(aB);
                break;
              case 5:
                BB[NB] = IB.m.FromArray(aB);
                break;
              case 6:
                zB && (BB[NB] = zB.getLastMeshById(aB));
                break;
              case 7:
                BB[NB] = UB._ColorCurvesParser(aB);
                break;
              case 8:
                BB[NB] = dB.g.FromArray(aB);
                break;
              case 9:
                BB[NB] = UB._ImageProcessingConfigurationParser(aB);
                break;
              case 10:
                BB[NB] = IB.d.FromArray(aB);
                break;
              case 11:
                zB && (BB[NB] = zB.getCameraById(aB));
                break;
              case 12:
                BB[NB] = IB.c.FromArray(aB);
                break;
              case 13:
                BB[NB] = IB.n.FromArray(aB)
            }
          }
        }
      }
      static Parse(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const dB = BB();
        return nB.d && nB.d.AddTagsTo(dB, jB.tags), UB.ParseProperties(jB, dB, zB, QB), dB
      }
      static Clone(BB, jB) {
        return uB(BB, jB, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(BB, jB) {
        return uB(BB, jB, !0)
      }
    }
    UB.AllowLoadingUniqueId = !1, UB._ImageProcessingConfigurationParser = BB => {
      throw (0, QB.k)("ImageProcessingConfiguration")
    }, UB._FresnelParametersParser = BB => {
      throw (0, QB.k)("FresnelParameters")
    }, UB._ColorCurvesParser = BB => {
      throw (0, QB.k)("ColorCurves")
    }, UB._TextureParser = (BB, jB, zB) => {
      throw (0, QB.k)("Texture")
    }
  },
  40034: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(39986);
    class nB {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = nB.Enabled, this._lastSecValueCount++
      }
      addCount(BB, jB) {
        nB.Enabled && (this._current += BB, this._hasCurrentValue = !0, jB && this._fetchResult())
      }
      beginMonitoring() {
        nB.Enabled && (this._startMonitoringTime = QB.e.Now)
      }
      endMonitoring() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!nB.Enabled) return;
        BB && this.fetchNewFrame();
        const jB = QB.e.Now;
        this._current = jB - this._startMonitoringTime, this._hasCurrentValue = !0, BB && this._fetchResult()
      }
      tL() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const BB = QB.e.Now;
        BB - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = BB, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    nB.Enabled = !0
  },
  40171: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => QB
    });
    class QB {
      constructor(BB) {
        this.length = 0, this.data = new Array(BB), this._id = QB._GlobalId++
      }
      push(BB) {
        this.data[this.length++] = BB, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(BB) {
        for (let jB = 0; jB < this.length; jB++) BB(this.data[jB])
      }
      sort(BB) {
        this.data.sort(BB)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(BB) {
        if (0 !== BB.length) {
          this.length + BB.length > this.data.length && (this.data.length = 2 * (this.length + BB.length));
          for (let jB = 0; jB < BB.length; jB++) this.data[this.length++] = (BB.data || BB)[jB]
        }
      }
      indexOf(BB) {
        const jB = this.data.indexOf(BB);
        return jB >= this.length ? -1 : jB
      }
      contains(BB) {
        return -1 !== this.indexOf(BB)
      }
    }
    QB._GlobalId = 0;
    class nB extends QB {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(BB) {
        super.push(BB), BB.__smartArrayFlags || (BB.__smartArrayFlags = {}), BB.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(BB) {
        return (!BB.__smartArrayFlags || BB.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(BB), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(BB) {
        if (0 !== BB.length) {
          this.length + BB.length > this.data.length && (this.data.length = 2 * (this.length + BB.length));
          for (let jB = 0; jB < BB.length; jB++) {
            const zB = (BB.data || BB)[jB];
            this.pushNoDuplicate(zB)
          }
        }
      }
    }
  },
  40089: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    class QB {
      static Eval(BB, jB) {
        return "true" === (BB = BB.match(/\([^()]*\)/g) ? BB.replace(/\([^()]*\)/g, (BB => (BB = BB.slice(1, BB.length - 1), QB._HandleParenthesisContent(BB, jB)))) : QB._HandleParenthesisContent(BB, jB)) || "false" !== BB && QB.Eval(BB, jB)
      }
      static _HandleParenthesisContent(BB, jB) {
        let zB;
        jB = jB || (BB => "true" === BB);
        const nB = BB.split("||");
        for (const dB in nB)
          if (Object.prototype.hasOwnProperty.call(nB, dB)) {
            let BB = QB._SimplifyNegation(nB[dB].trim());
            const IB = BB.split("&&");
            if (IB.length > 1)
              for (let nB = 0; nB < IB.length; ++nB) {
                const dB = QB._SimplifyNegation(IB[nB].trim());
                if (zB = "true" !== dB && "false" !== dB ? "!" === dB[0] ? !jB(dB.substring(1)) : jB(dB) : "true" === dB, !zB) {
                  BB = "false";
                  break
                }
              }
            if (zB || "true" === BB) {
              zB = !0;
              break
            }
            zB = "true" !== BB && "false" !== BB ? "!" === BB[0] ? !jB(BB.substring(1)) : jB(BB) : "true" === BB
          } return zB ? "true" : "false"
      }
      static _SimplifyNegation(BB) {
        return "!true" === (BB = (BB = BB.replace(/^[\s!]+/, (BB => (BB = BB.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? BB = "false" : "!false" === BB && (BB = "true"), BB
      }
    }
    class nB {
      static EnableFor(BB) {
        BB._tags = BB._tags || {}, BB.hasTags = () => nB.HasTags(BB), BB.addTags = jB => nB.AddTagsTo(BB, jB), BB.removeTags = jB => nB.RemoveTagsFrom(BB, jB), BB.matchesTagsQuery = jB => nB.MatchesQuery(BB, jB)
      }
      static DisableFor(BB) {
        delete BB._tags, delete BB.hasTags, delete BB.addTags, delete BB.removeTags, delete BB.matchesTagsQuery
      }
      static HasTags(BB) {
        if (!BB._tags) return !1;
        const jB = BB._tags;
        for (const zB in jB)
          if (Object.prototype.hasOwnProperty.call(jB, zB)) return !0;
        return !1
      }
      static GetTags(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB._tags) return null;
        if (jB) {
          const jB = [];
          for (const zB in BB._tags) Object.prototype.hasOwnProperty.call(BB._tags, zB) && !0 === BB._tags[zB] && jB.push(zB);
          return jB.join(" ")
        }
        return BB._tags
      }
      static AddTagsTo(BB, jB) {
        if (!jB) return;
        if ("string" !== typeof jB) return;
        const zB = jB.split(" ");
        for (const QB of zB) nB._AddTagTo(BB, QB)
      }
      static _AddTagTo(BB, jB) {
        "" !== (jB = jB.trim()) && "true" !== jB && "false" !== jB && (jB.match(/[\s]/) || jB.match(/^([!]|([|]|[&]){2})/) || (nB.EnableFor(BB), BB._tags[jB] = !0))
      }
      static RemoveTagsFrom(BB, jB) {
        if (!nB.HasTags(BB)) return;
        const zB = jB.split(" ");
        for (const QB in zB) nB._RemoveTagFrom(BB, zB[QB])
      }
      static _RemoveTagFrom(BB, jB) {
        delete BB._tags[jB]
      }
      static MatchesQuery(BB, jB) {
        return void 0 === jB || ("" === jB ? nB.HasTags(BB) : QB.Eval(jB, (jB => nB.HasTags(BB) && BB._tags[jB])))
      }
    }
  },
  40220: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(40211),
      nB = zB(37202);
    class dB {
      constructor(BB) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new nB.c, this._scene = BB
      }
      _prepareBuffers() {
        if (this._vertexBuffers[QB.l.PositionKind]) return;
        const BB = [];
        BB.push(1, 1), BB.push(-1, 1), BB.push(-1, -1), BB.push(1, -1), this._vertexBuffers[QB.l.PositionKind] = new QB.l(this._scene.wJ(), BB, QB.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const BB = [];
        BB.push(0), BB.push(1), BB.push(2), BB.push(0), BB.push(2), BB.push(3), this._indexBuffer = this._scene.wJ().createIndexBuffer(BB)
      }
      _getActivePostProcesses(BB) {
        const jB = this._activePostProcesses;
        jB.length = 0;
        for (let zB = 0; zB < BB.length; zB++) {
          const QB = BB[zB];
          QB && jB.push(QB)
        }
        return jB
      }
      _rebuild() {
        const BB = this._vertexBuffers[QB.l.PositionKind];
        BB && (BB._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = this._scene.activeCamera;
        return !!zB && (jB = jB || this._getActivePostProcesses(zB._postProcesses), !(!jB || 0 === jB.length || !this._scene.postProcessesEnabled) && (jB[0].activate(zB, BB, null !== jB && void 0 !== jB), !0))
      }
      directRender(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.length;
        const NB = this._scene.wJ();
        for (let uB = 0; uB < IB; uB++) {
          uB < BB.length - 1 ? BB[uB + 1].activate(this._scene.activeCamera || this._scene, jB?.texture) : (jB ? NB.bindFramebuffer(jB, QB, void 0, void 0, zB, nB) : dB || NB.restoreDefaultFramebuffer(), NB._debugInsertMarker?.(`post process ${BB[uB].name} output`));
          const IB = BB[uB],
            UB = IB.apply();
          UB && (IB.onBeforeRenderObservable.notifyObservers(UB), this._prepareBuffers(), NB.bindBuffers(this._vertexBuffers, this._indexBuffer, UB), NB.drawElementsType(0, 0, 6), IB.onAfterRenderObservable.notifyObservers(UB))
        }
        NB.setDepthBuffer(!0), NB.setDepthWrite(!0)
      }
      _finalizeFrame(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dB = this._scene.activeCamera;
        if (!dB) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (QB = QB || this._getActivePostProcesses(dB._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const IB = this._scene.wJ();
        for (let NB = 0, uB = QB.length; NB < uB; NB++) {
          const UB = QB[NB];
          if (NB < uB - 1 ? UB._outputTexture = QB[NB + 1].activate(dB, jB?.texture) : (jB ? (IB.bindFramebuffer(jB, zB, void 0, void 0, nB), UB._outputTexture = jB) : (IB.restoreDefaultFramebuffer(), UB._outputTexture = null), IB._debugInsertMarker?.(`post process ${QB[NB].name} output`)), BB) break;
          const aB = UB.apply();
          aB && (UB.onBeforeRenderObservable.notifyObservers(aB), this._prepareBuffers(), IB.bindBuffers(this._vertexBuffers, this._indexBuffer, aB), IB.drawElementsType(0, 0, 6), UB.onAfterRenderObservable.notifyObservers(aB))
        }
        IB.setDepthBuffer(!0), IB.setDepthWrite(!0), IB.setAlphaMode(0)
      }
      dispose() {
        const BB = this._vertexBuffers[QB.l.PositionKind];
        BB && (BB.dispose(), this._vertexBuffers[QB.l.PositionKind] = null), this._indexBuffer && (this._scene.wJ()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40238: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(40171),
      nB = zB(37171);
    const dB = [],
      IB = [];
    let NB = !1;

    function uB(BB, jB) {
      for (; BB.length < jB;) BB.push(void 0)
    }
    class UB {
      set opaqueSortCompareFn(BB) {
        this._opaqueSortCompareFn = BB || UB.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(BB) {
        this._alphaTestSortCompareFn = BB || UB.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(BB) {
        this._transparentSortCompareFn = BB || UB.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = BB, this._opaqueSubMeshes = new QB.i(256), this._transparentSubMeshes = new QB.i(256), this._alphaTestSubMeshes = new QB.i(256), this._depthOnlySubMeshes = new QB.i(256), this._particleSystems = new QB.i(256), this._spriteManagers = new QB.i(256), this._empty = !0, this._edgesRenderers = new QB.e(16), this.disableDepthPrePass = !1, this._scene = jB, this.opaqueSortCompareFn = zB, this.alphaTestSortCompareFn = nB, this.transparentSortCompareFn = dB
      }
      render(BB, jB, zB, QB) {
        let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          NB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          uB = arguments.length > 8 ? arguments[8] : void 0;
        if (BB) return void BB(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const UB = this._scene.wJ();
        nB && 0 !== this._depthOnlySubMeshes.length && (UB.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), UB.setColorWrite(!0)), dB && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), IB && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const aB = UB.getStencilBuffer();
        if (UB.setStencilBuffer(!1), jB && this._renderSprites(), zB && this._renderParticles(QB), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), NB && (uB || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (UB.setStencilBuffer(aB), uB) uB(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const BB = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            BB.length && this._renderTransparent(BB)
          } else this._renderTransparent(this._transparentSubMeshes);
          UB.setAlphaMode(0)
        }
        if (UB.setStencilBuffer(!1), dB && this._edgesRenderers.length) {
          for (let BB = 0; BB < this._edgesRenderers.length; BB++) this._edgesRenderers.data[BB].render();
          UB.setAlphaMode(0)
        }
        UB.setStencilBuffer(aB)
      }
      _renderOpaqueSorted(BB) {
        UB._RenderSorted(BB, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(BB) {
        UB._RenderSorted(BB, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(BB) {
        UB._RenderSorted(BB, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(BB, jB, zB, QB, dB) {
        let aB, pB = 0;
        const rB = zB ? zB.globalPosition : UB._ZeroVector;
        if (QB && jB !== UB.PainterSortCompare)
          for (; pB < BB.length; pB++) aB = BB.data[pB], aB._alphaIndex = aB.getMesh().alphaIndex, aB._distanceToCamera = nB.m.Distance(aB.rV().fQB.centerWorld, rB);
        const sB = BB.length;
        let JB = BB.data;
        const mB = sB !== JB.length && !NB;
        if (mB) {
          for (NB = !0, uB(IB, sB), pB = 0; pB < sB; pB++) IB[pB] = JB[pB];
          JB = IB
        } else sB !== JB.length && (JB = JB.slice(0, sB));
        try {
          jB && UB._StableSort(JB, sB, jB), UB._DrawSorted(JB, sB, QB, dB)
        } finally {
          mB && (IB.fill(void 0, 0, sB), NB = !1)
        }
      }
      static _DrawSorted(BB, jB, zB, QB) {
        let nB;
        const dB = BB[0].getMesh().aY();
        for (let IB = 0; IB < jB; IB++) {
          if (nB = BB[IB], dB._activeMeshesFrozenButKeepClipping && !nB.isInFrustum(dB._frustumPlanes)) continue;
          let jB = !1;
          if (zB) {
            const BB = nB.bJ();
            if (BB && BB.needDepthPrePass && !QB) {
              jB = !0;
              const zB = BB.aY().wJ();
              zB.setColorWrite(!1), zB.setAlphaMode(0), nB.render(!1), zB.setColorWrite(!0)
            }
          }
          const NB = nB._renderingMesh;
          !jB && NB._renderRunFollower(nB, zB) || nB.render(zB)
        }
      }
      static _StableSort(BB, jB, zB) {
        for (let QB = 0; QB < jB; QB += 16) {
          const nB = Math.min(QB + 16, jB);
          for (let jB = QB + 1; jB < nB; jB++) {
            const nB = BB[jB];
            let dB = QB,
              IB = jB;
            for (; dB < IB;) {
              const jB = dB + IB >>> 1;
              zB(nB, BB[jB]) < 0 ? IB = jB : dB = jB + 1
            }
            for (let zB = jB; zB > dB; zB--) BB[zB] = BB[zB - 1];
            BB[dB] = nB
          }
        }
        if (!(jB <= 16)) {
          uB(dB, jB);
          try {
            let QB = BB,
              nB = dB;
            for (let BB = 16; BB < jB; BB *= 2) {
              for (let IB = 0; IB < jB; IB += 2 * BB) {
                const dB = Math.min(IB + BB, jB),
                  NB = Math.min(IB + 2 * BB, jB);
                let uB = IB,
                  UB = dB,
                  aB = IB;
                if (dB < NB && zB(QB[dB], QB[dB - 1]) < 0)
                  for (; uB < dB && UB < NB;) nB[aB++] = zB(QB[UB], QB[uB]) < 0 ? QB[UB++] : QB[uB++];
                for (; uB < dB;) nB[aB++] = QB[uB++];
                for (; UB < NB;) nB[aB++] = QB[UB++]
              }
              const dB = nB;
              nB = QB, QB = dB
            }
            if (QB !== BB)
              for (let zB = 0; zB < jB; zB++) BB[zB] = QB[zB]
          } finally {
            dB.fill(void 0, 0, jB)
          }
        }
      }
      static defaultTransparentSortCompare(BB, jB) {
        return BB._alphaIndex > jB._alphaIndex ? 1 : BB._alphaIndex < jB._alphaIndex ? -1 : UB.backToFrontSortCompare(BB, jB)
      }
      static backToFrontSortCompare(BB, jB) {
        return BB._distanceToCamera < jB._distanceToCamera ? 1 : BB._distanceToCamera > jB._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(BB, jB) {
        return BB._distanceToCamera < jB._distanceToCamera ? -1 : BB._distanceToCamera > jB._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(BB, jB) {
        const zB = BB.getMesh(),
          QB = jB.getMesh();
        return zB.material && QB.material ? zB.material.uniqueId - QB.material.uniqueId : zB.uniqueId - QB.uniqueId
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
      dispatch(BB, jB, zB) {
        void 0 === jB && (jB = BB.getMesh()), void 0 === zB && (zB = BB.bJ()), null !== zB && void 0 !== zB && (zB.needAlphaBlendingForMesh(jB) ? this._transparentSubMeshes.push(BB) : zB.needAlphaTestingForMesh(jB) ? (zB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._alphaTestSubMeshes.push(BB)) : (zB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._opaqueSubMeshes.push(BB)), jB._renderingGroup = this, jB._edgesRenderer && jB.isEnabled() && jB.isVisible && jB._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(jB._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(BB) {
        this._spriteManagers.push(BB), this._empty = !1
      }
      dispatchParticles(BB) {
        this._particleSystems.push(BB), this._empty = !1
      }
      _renderParticles(BB) {
        if (0 === this._particleSystems.length) return;
        const jB = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let zB = 0; zB < this._particleSystems.length; zB++) {
          const QB = this._particleSystems.data[zB];
          if (0 === (jB && jB.layerMask & QB.layerMask)) continue;
          const nB = QB.emitter;
          nB.position && BB && -1 === BB.indexOf(nB) || this._scene._activeParticles.addCount(QB.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const BB = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let jB = 0; jB < this._spriteManagers.length; jB++) {
          const zB = this._spriteManagers.data[jB];
          0 !== (BB && BB.layerMask & zB.layerMask) && zB.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    UB._ZeroVector = nB.m.Zero()
  },
  40232: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(40238);
    class nB {}
    class dB {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(BB) {
        this._disableDepthPrePass = BB;
        for (const jB of this._renderingGroups) jB.disableDepthPrePass = BB
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(BB) {
        BB !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = BB, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const BB of this._scene.meshes)
          if (BB.cL)
            for (const jB of BB.cL) jB._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const BB of this._scene.spriteManagers) BB._wasDispatched = !1;
        for (const BB of this._scene.RL) BB._wasDispatched = !1
      }
      constructor(BB) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new nB, this._maintainStateBetweenFrames = !1, this._scene = BB;
        for (let jB = dB.MIN_RENDERINGGROUPS; jB < dB.MAX_RENDERINGGROUPS; jB++) this._autoClearDepthStencil[jB] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(BB) {
        const jB = BB || 0;
        return this._prepareRenderingGroup(jB), this._renderingGroups[jB]
      }
      _clearDepthStencilBuffer() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.wJ().clear(null, !1, BB, jB), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(BB, jB, zB, QB) {
        let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          IB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          NB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          uB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          UB = arguments.length > 8 ? arguments[8] : void 0,
          aB = arguments.length > 9 ? arguments[9] : void 0;
        const pB = this._renderingGroupInfo;
        pB.ny = this._scene, pB.camera = this._scene.activeCamera, pB.renderingManager = this;
        const rB = aB ?? this._scene.spriteManagers;
        if (rB && QB)
          for (let dB = 0; dB < rB.length; dB++) {
            const BB = rB[dB];
            this.dispatchSprites(BB)
          }
        for (let sB = dB.MIN_RENDERINGGROUPS; sB < dB.MAX_RENDERINGGROUPS; sB++) {
          this._depthStencilBufferAlreadyCleaned = sB === dB.MIN_RENDERINGGROUPS;
          const aB = this._renderingGroups[sB];
          if (!aB || aB._empty) continue;
          const rB = 1 << sB;
          if (pB.renderingGroupId = sB, this._scene.onBeforeRenderingGroupObservable.notifyObservers(pB, rB), dB.AUTOCLEAR) {
            const BB = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(sB) : this._autoClearDepthStencil[sB];
            BB && BB.autoClear && this._clearDepthStencilBuffer(BB.depth, BB.stencil)
          }
          for (let BB = 0, jB = this._scene._beforeRenderingGroupDrawStage; BB < jB.length; BB++) {
            jB[BB].action(sB)
          }
          aB.render(BB, QB, zB, jB, nB, IB, NB, uB, UB);
          for (let BB = 0, jB = this._scene._afterRenderingGroupDrawStage; BB < jB.length; BB++) {
            jB[BB].action(sB)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(pB, rB)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = dB.MIN_RENDERINGGROUPS; BB < dB.MAX_RENDERINGGROUPS; BB++) {
            const jB = this._renderingGroups[BB];
            jB && jB.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = dB.MIN_RENDERINGGROUPS; BB < dB.MAX_RENDERINGGROUPS; BB++) {
            const jB = this._renderingGroups[BB];
            jB && jB.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let BB = dB.MIN_RENDERINGGROUPS; BB < dB.MAX_RENDERINGGROUPS; BB++) {
          const jB = this._renderingGroups[BB];
          jB && jB.dispose()
        }
      }
      _prepareRenderingGroup(BB) {
        void 0 === this._renderingGroups[BB] && (this._renderingGroups[BB] = new QB.e(BB, this._scene, this._customOpaqueSortCompareFn[BB], this._customAlphaTestSortCompareFn[BB], this._customTransparentSortCompareFn[BB]), this._renderingGroups[BB].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchSprites(BB))
      }
      dispatchParticles(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchParticles(BB))
      }
      dispatch(BB, jB, zB) {
        void 0 === jB && (jB = BB.getMesh()), this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(jB.renderingGroupId).dispatch(BB, jB, zB))
      }
      setRenderingOrder(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[BB] = jB, this._customAlphaTestSortCompareFn[BB] = zB, this._customTransparentSortCompareFn[BB] = QB, this._renderingGroups[BB]) {
          const jB = this._renderingGroups[BB];
          jB.opaqueSortCompareFn = this._customOpaqueSortCompareFn[BB], jB.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[BB], jB.transparentSortCompareFn = this._customTransparentSortCompareFn[BB]
        }
      }
      setRenderingAutoClearDepthStencil(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[BB] = {
          autoClear: jB,
          depth: zB,
          stencil: QB
        }
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._autoClearDepthStencil[BB]
      }
    }
    dB.MAX_RENDERINGGROUPS = 4, dB.MIN_RENDERINGGROUPS = 0, dB.AUTOCLEAR = !0
  },
  39988: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor(BB) {
        this._supportBlendParametersPerTarget = BB, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(BB) {
        this.setAlphaBlend(BB)
      }
      setAlphaBlend(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[jB] !== BB && (BB ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[jB] = BB, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(BB, jB, zB, QB) {
        this._blendConstants[0] === BB && this._blendConstants[1] === jB && this._blendConstants[2] === zB && this._blendConstants[3] === QB || (this._blendConstants[0] = BB, this._blendConstants[1] = jB, this._blendConstants[2] = zB, this._blendConstants[3] = QB, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(BB, jB, zB, QB) {
        const nB = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[nB + 0] === BB && this._blendFunctionParameters[nB + 1] === jB && this._blendFunctionParameters[nB + 2] === zB && this._blendFunctionParameters[nB + 3] === QB || (this._blendFunctionParameters[nB + 0] = BB, this._blendFunctionParameters[nB + 1] = jB, this._blendFunctionParameters[nB + 2] = zB, this._blendFunctionParameters[nB + 3] = QB, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(BB, jB) {
        const zB = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[zB + 0] === BB && this._blendEquationParameters[zB + 1] === jB || (this._blendEquationParameters[zB + 0] = BB, this._blendEquationParameters[zB + 1] = jB, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== jB && (this._numTargets = jB, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== zB && (this._blendDisabledTargetsMask = zB, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (BB.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === jB || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (jB > 1 && 0 !== zB && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & zB) ? BB.enable(BB.BLEND) : BB.disable(BB.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (BB.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (BB.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const QB = BB;
        if (this._isAlphaBlendDirty) {
          for (let nB = 0; nB < jB; nB++) {
            const jB = nB < this._numTargetEnabled ? nB : 0;
            this._alphaBlend[jB] && 0 === (zB & 1 << nB) ? QB.enableIndexed(BB.BLEND, nB) : QB.disableIndexed(BB.BLEND, nB)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let BB = 0; BB < jB; BB++) {
            const jB = BB < this._numTargetEnabled ? 4 * BB : 0;
            QB.blendFuncSeparateIndexed(BB, this._blendFunctionParameters[jB + 0], this._blendFunctionParameters[jB + 1], this._blendFunctionParameters[jB + 2], this._blendFunctionParameters[jB + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let BB = 0; BB < jB; BB++) {
            const jB = BB < this._numTargetEnabled ? 2 * BB : 0;
            QB.blendEquationSeparateIndexed(BB, this._blendEquationParameters[jB + 0], this._blendEquationParameters[jB + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(BB, jB) {
        let zB = 32774;
        switch (BB) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, jB);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, jB);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, jB);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, jB);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, jB);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, jB);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, jB);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, jB);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, jB);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, jB);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, jB);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, jB);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, jB);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, jB);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, jB);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, jB);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, jB), zB = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, jB), zB = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, jB);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, jB)
        }
        this.setAlphaEquationParameters(zB, zB, jB)
      }
    }
  },
  40276: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    class QB {}
    QB._IsPickingAvailable = !1
  },
  40156: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => Nz,
      g: () => dz
    });
    var QB = zB(40164),
      nB = zB(39976),
      dB = zB(39986),
      IB = zB(37202),
      NB = zB(40171);
    class uB {
      constructor() {
        this._count = 0, this._data = {}
      }
      jH(BB) {
        this.clear(), BB.forEach(((BB, jB) => this.add(BB, jB)))
      }
      get(BB) {
        const jB = this._data[BB];
        if (void 0 !== jB) return jB
      }
      getOrAddWithFactory(BB, jB) {
        let zB = this.get(BB);
        return void 0 !== zB || (zB = jB(BB), zB && this.add(BB, zB)), zB
      }
      getOrAdd(BB, jB) {
        const zB = this.get(BB);
        return void 0 !== zB ? zB : (this.add(BB, jB), jB)
      }
      contains(BB) {
        return void 0 !== this._data[BB]
      }
      add(BB, jB) {
        return void 0 === this._data[BB] && (this._data[BB] = jB, ++this._count, !0)
      }
      set(BB, jB) {
        return void 0 !== this._data[BB] && (this._data[BB] = jB, !0)
      }
      getAndRemove(BB) {
        const jB = this.get(BB);
        return void 0 !== jB ? (delete this._data[BB], --this._count, jB) : null
      }
      remove(BB) {
        return !!this.contains(BB) && (delete this._data[BB], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(BB) {
        for (const jB in this._data) {
          BB(jB, this._data[jB])
        }
      }
      first(BB) {
        for (const jB in this._data) {
          const zB = BB(jB, this._data[jB]);
          if (zB) return zB
        }
        return null
      }
    }
    var UB = zB(40089),
      aB = zB(37171),
      pB = zB(40180),
      rB = zB(40195),
      sB = zB(40202);
    class JB {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.source = BB, this.pointerX = jB, this.pointerY = zB, this.meshUnderPointer = QB, this.sourceEvent = nB, this.additionalData = dB
      }
      static CreateNew(BB, jB, zB) {
        const QB = BB.aY();
        return new JB(BB, QB.pointerX, QB.pointerY, QB.meshUnderPointer || BB, jB, zB)
      }
      static CreateNewFromSprite(BB, jB, zB, QB) {
        return new JB(BB, jB.pointerX, jB.pointerY, jB.meshUnderPointer, zB, QB)
      }
      static CreateNewFromScene(BB, jB) {
        return new JB(null, BB.pointerX, BB.pointerY, BB.meshUnderPointer, jB)
      }
      static CreateNewFromPrimitive(BB, jB, zB, QB) {
        return new JB(BB, jB.x, jB.y, null, zB, QB)
      }
    }
    var mB = zB(40220),
      yB = zB(40225),
      kB = zB(40232),
      GB = zB(40247),
      LB = zB(39943),
      gB = zB(37197),
      tB = zB(39965),
      SB = zB(40255);
    class MB {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const BB in MB.Triggers)
          if (Object.prototype.hasOwnProperty.call(MB.Triggers, BB)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const BB in MB.Triggers)
          if (Object.prototype.hasOwnProperty.call(MB.Triggers, BB)) {
            const jB = parseInt(BB);
            if (jB >= 1 && jB <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(BB) {
        for (const jB in MB.Triggers)
          if (Object.prototype.hasOwnProperty.call(MB.Triggers, jB)) {
            if (parseInt(jB) === BB) return !0
          } return !1
      }
    }
    MB.Triggers = {};
    var EB, iB, qB, fB, oB, HB, DB, FB = zB(40264);
    ! function(BB) {
      BB[BB.Generic = 0] = "Generic", BB[BB.Keyboard = 1] = "Keyboard", BB[BB.Mouse = 2] = "Mouse", BB[BB.Touch = 3] = "Touch", BB[BB.DualShock = 4] = "DualShock", BB[BB.Xbox = 5] = "Xbox", BB[BB.Switch = 6] = "Switch", BB[BB.DualSense = 7] = "DualSense"
    }(EB || (EB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.Move = 12] = "Move"
    }(iB || (iB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.DeltaHorizontal = 10] = "DeltaHorizontal", BB[BB.DeltaVertical = 11] = "DeltaVertical"
    }(qB || (qB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Share = 8] = "Share", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(fB || (fB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Create = 8] = "Create", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(oB || (oB = {})),
    function(BB) {
      BB[BB.A = 0] = "A", BB[BB.B = 1] = "B", BB[BB.X = 2] = "X", BB[BB.Y = 3] = "Y", BB[BB.LB = 4] = "LB", BB[BB.RB = 5] = "RB", BB[BB.LT = 6] = "LT", BB[BB.RT = 7] = "RT", BB[BB.Back = 8] = "Back", BB[BB.Start = 9] = "Start", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.LStickXAxis = 17] = "LStickXAxis", BB[BB.LStickYAxis = 18] = "LStickYAxis", BB[BB.RStickXAxis = 19] = "RStickXAxis", BB[BB.RStickYAxis = 20] = "RStickYAxis"
    }(HB || (HB = {})),
    function(BB) {
      BB[BB.B = 0] = "B", BB[BB.A = 1] = "A", BB[BB.Y = 2] = "Y", BB[BB.X = 3] = "X", BB[BB.L = 4] = "L", BB[BB.R = 5] = "R", BB[BB.ZL = 6] = "ZL", BB[BB.ZR = 7] = "ZR", BB[BB.Minus = 8] = "Minus", BB[BB.Plus = 9] = "Plus", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.Capture = 17] = "Capture", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(DB || (DB = {}));
    var YB = zB(40268);
    class VB {
      static CreateDeviceEvent(BB, jB, zB, QB, nB, dB, IB) {
        switch (BB) {
          case EB.Keyboard:
            return this._CreateKeyboardEvent(zB, QB, nB, dB);
          case EB.Mouse:
            if (zB === iB.MouseWheelX || zB === iB.MouseWheelY || zB === iB.MouseWheelZ) return this._CreateWheelEvent(BB, jB, zB, QB, nB, dB);
          case EB.Touch:
            return this._CreatePointerEvent(BB, jB, zB, QB, nB, dB, IB);
          default:
            throw `Unable to generate event for device ${EB[BB]}`
        }
      }
      static _CreatePointerEvent(BB, jB, zB, QB, nB, dB, IB) {
        const NB = this._CreateMouseEvent(BB, jB, zB, QB, nB, dB);
        BB === EB.Mouse ? (NB.deviceType = EB.Mouse, NB.pointerId = 1, NB.pointerType = "mouse") : (NB.deviceType = EB.Touch, NB.pointerId = IB ?? jB, NB.pointerType = "touch");
        let uB = 0;
        return uB += nB.pollInput(BB, jB, iB.LeftClick), uB += 2 * nB.pollInput(BB, jB, iB.RightClick), uB += 4 * nB.pollInput(BB, jB, iB.MiddleClick), NB.buttons = uB, zB === iB.Move ? NB.type = "pointermove" : zB >= iB.LeftClick && zB <= iB.RightClick && (NB.type = 1 === QB ? "pointerdown" : "pointerup", NB.button = zB - 2), NB
      }
      static _CreateWheelEvent(BB, jB, zB, QB, nB, dB) {
        const IB = this._CreateMouseEvent(BB, jB, zB, QB, nB, dB);
        switch (IB.pointerId = 1, IB.type = "wheel", IB.deltaMode = YB.c.DOM_DELTA_PIXEL, IB.deltaX = 0, IB.deltaY = 0, IB.deltaZ = 0, zB) {
          case iB.MouseWheelX:
            IB.deltaX = QB;
            break;
          case iB.MouseWheelY:
            IB.deltaY = QB;
            break;
          case iB.MouseWheelZ:
            IB.deltaZ = QB
        }
        return IB
      }
      static _CreateMouseEvent(BB, jB, zB, QB, nB, dB) {
        const IB = this._CreateEvent(dB),
          NB = nB.pollInput(BB, jB, iB.Horizontal),
          uB = nB.pollInput(BB, jB, iB.Vertical);
        return dB ? (IB.movementX = 0, IB.movementY = 0, IB.offsetX = IB.movementX - dB.getBoundingClientRect().x, IB.offsetY = IB.movementY - dB.getBoundingClientRect().y) : (IB.movementX = nB.pollInput(BB, jB, 10), IB.movementY = nB.pollInput(BB, jB, 11), IB.offsetX = 0, IB.offsetY = 0), this._CheckNonCharacterKeys(IB, nB), IB.clientX = NB, IB.clientY = uB, IB.x = NB, IB.y = uB, IB.deviceType = BB, IB.deviceSlot = jB, IB.inputIndex = zB, IB
      }
      static _CreateKeyboardEvent(BB, jB, zB, QB) {
        const nB = this._CreateEvent(QB);
        return this._CheckNonCharacterKeys(nB, zB), nB.deviceType = EB.Keyboard, nB.deviceSlot = 0, nB.inputIndex = BB, nB.type = 1 === jB ? "keydown" : "keyup", nB.key = String.fromCharCode(BB), nB.keyCode = BB, nB
      }
      static _CheckNonCharacterKeys(BB, jB) {
        const zB = jB.isDeviceAvailable(EB.Keyboard),
          QB = zB && 1 === jB.pollInput(EB.Keyboard, 0, 18),
          nB = zB && 1 === jB.pollInput(EB.Keyboard, 0, 17),
          dB = zB && (1 === jB.pollInput(EB.Keyboard, 0, 91) || 1 === jB.pollInput(EB.Keyboard, 0, 92) || 1 === jB.pollInput(EB.Keyboard, 0, 93)),
          IB = zB && 1 === jB.pollInput(EB.Keyboard, 0, 16);
        BB.altKey = QB, BB.ctrlKey = nB, BB.metaKey = dB, BB.shiftKey = IB
      }
      static _CreateEvent(BB) {
        const jB = {
          preventDefault: () => {}
        };
        return jB.target = BB, jB
      }
    }
    class hB {
      constructor(BB, jB, zB) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(BB, jB, ((BB, jB, QB, nB) => {
          const dB = VB.CreateDeviceEvent(BB, jB, QB, nB, this);
          zB(BB, jB, dB)
        })) : this._createDummyNativeInput()
      }
      pollInput(BB, jB, zB) {
        return this._nativeInput.pollInput(BB, jB, zB)
      }
      isDeviceAvailable(BB) {
        return BB === EB.Mouse || BB === EB.Touch
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
    const XB = Object.keys(iB).length / 2;
    class ZB {
      constructor(BB, jB, zB, nB) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = QB.i.IsSafari(), this._usingMacOs = (0, LB.k)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = BB => {}, this._keyboardUpEvent = BB => {}, this._keyboardBlurEvent = BB => {}, this._pointerMoveEvent = BB => {}, this._pointerDownEvent = BB => {}, this._pointerUpEvent = BB => {}, this._pointerCancelEvent = BB => {}, this._pointerCancelTouch = BB => {}, this._pointerLeaveEvent = BB => {}, this._pointerWheelEvent = BB => {}, this._pointerBlurEvent = BB => {}, this._pointerMacOsChromeOutEvent = BB => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, LB.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, LB.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = BB => {}, this._gamepadDisconnectedEvent = BB => {}, this._eventPrefix = QB.i.GetPointerPrefix(BB), this._engine = BB, this._onDeviceConnected = jB, this._onDeviceDisconnected = zB, this._onInputChanged = nB, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(BB, jB, zB) {
        const nB = this._inputs[BB][jB];
        if (!nB) throw `Unable to find device ${EB[BB]}`;
        BB >= EB.DualShock && BB <= EB.DualSense && this._updateDevice(BB, jB, zB);
        const dB = nB[zB];
        if (void 0 === dB) throw `Unable to find input ${zB} for device ${EB[BB]} in slot ${jB}`;
        return zB === iB.Move && QB.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), dB
      }
      isDeviceAvailable(BB) {
        return void 0 !== this._inputs[BB]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const BB = this?._engine.getInputElement();
        if (BB && (!this._eventsAttached || this._elementToAttachTo !== BB)) {
          if (this._disableEvents(), this._inputs)
            for (const BB of this._inputs)
              if (BB)
                for (const jB in BB) {
                  const zB = BB[+jB];
                  if (zB)
                    for (let BB = 0; BB < zB.length; BB++) zB[BB] = 0
                }
          this._elementToAttachTo = BB, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const BB = navigator.getGamepads();
          for (const jB of BB) jB && this._addGamePad(jB)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(EB.Mouse, 0, 0, 0)
      }
      _addGamePad(BB) {
        const jB = this._getGamepadDeviceType(BB.id),
          zB = BB.index;
        this._gamepads = this._gamepads || new Array(BB.index + 1), this._registerDevice(jB, zB, BB.buttons.length + BB.axes.length), this._gamepads[zB] = jB
      }
      _addPointerDevice(BB, jB, zB, QB) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(BB, jB, XB);
        const nB = this._inputs[BB][jB];
        nB[0] = zB, nB[1] = QB
      }
      _registerDevice(BB, jB, zB) {
        if (void 0 === jB) throw `Unable to register device ${EB[BB]} to undefined slot.`;
        if (this._inputs[BB] || (this._inputs[BB] = {}), !this._inputs[BB][jB]) {
          const QB = new Array(zB);
          QB.fill(0), this._inputs[BB][jB] = QB, this._onDeviceConnected(BB, jB)
        }
      }
      _unregisterDevice(BB, jB) {
        this._inputs[BB][jB] && (delete this._inputs[BB][jB], this._onDeviceDisconnected(BB, jB))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(EB.Keyboard, 0, 255));
          const jB = this._inputs[EB.Keyboard][0];
          if (jB) {
            jB[BB.keyCode] = 1;
            const zB = BB;
            zB.inputIndex = BB.keyCode, this._usingMacOs && BB.metaKey && "Meta" !== BB.key && (this._metaKeys.includes(BB.keyCode) || this._metaKeys.push(BB.keyCode)), this._onInputChanged(EB.Keyboard, 0, zB)
          }
        }, this._keyboardUpEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(EB.Keyboard, 0, 255));
          const jB = this._inputs[EB.Keyboard][0];
          if (jB) {
            jB[BB.keyCode] = 0;
            const zB = BB;
            if (zB.inputIndex = BB.keyCode, this._usingMacOs && "Meta" === BB.key && this._metaKeys.length > 0) {
              for (const BB of this._metaKeys) {
                const zB = VB.CreateDeviceEvent(EB.Keyboard, 0, BB, 0, this, this._elementToAttachTo);
                jB[BB] = 0, this._onInputChanged(EB.Keyboard, 0, zB)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(EB.Keyboard, 0, zB)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const BB = this._inputs[EB.Keyboard][0];
            for (let jB = 0; jB < BB.length; jB++)
              if (0 !== BB[jB]) {
                BB[jB] = 0;
                const zB = VB.CreateDeviceEvent(EB.Keyboard, 0, jB, 0, this, this._elementToAttachTo);
                this._onInputChanged(EB.Keyboard, 0, zB)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, LB.k)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let QB = 0; QB < this._maxTouchPoints; QB++) this._activeTouchIds[QB] = -1;
        this._pointerMoveEvent = BB => {
          const jB = this._getPointerType(BB);
          let zB = jB === EB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (jB === EB.Touch && -1 === zB) {
            if (0 === BB.buttons) return;
            const nB = this._activeTouchIds.indexOf(-1);
            if (!(nB >= 0)) return void QB.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            zB = nB, this._activeTouchIds[nB] = BB.pointerId, this._onDeviceConnected(jB, zB)
          }
          this._inputs[jB] || (this._inputs[jB] = {}), this._inputs[jB][zB] || this._addPointerDevice(jB, zB, BB.clientX, BB.clientY);
          const nB = this._inputs[jB][zB];
          if (nB) {
            const QB = BB;
            QB.inputIndex = iB.Move, nB[iB.Horizontal] = BB.clientX, nB[iB.Vertical] = BB.clientY, jB === EB.Touch && 0 === nB[iB.LeftClick] && (nB[iB.LeftClick] = 1), void 0 === BB.pointerId && (BB.pointerId = this._mouseId), this._onInputChanged(jB, zB, QB), this._usingSafari || -1 === BB.button || (QB.inputIndex = BB.button + 2, nB[BB.button + 2] = nB[BB.button + 2] ? 0 : 1, this._onInputChanged(jB, zB, QB))
          }
        }, this._pointerDownEvent = BB => {
          const jB = this._getPointerType(BB);
          let zB = jB === EB.Mouse ? 0 : BB.pointerId;
          if (jB === EB.Touch) {
            let jB = this._activeTouchIds.indexOf(BB.pointerId);
            if (-1 === jB && (jB = this._activeTouchIds.indexOf(-1)), !(jB >= 0)) return void QB.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            zB = jB, this._activeTouchIds[jB] = BB.pointerId
          }
          this._inputs[jB] || (this._inputs[jB] = {}), this._inputs[jB][zB] ? jB === EB.Touch && this._onDeviceConnected(jB, zB) : this._addPointerDevice(jB, zB, BB.clientX, BB.clientY);
          const nB = this._inputs[jB][zB];
          if (nB) {
            const QB = nB[iB.Horizontal],
              IB = nB[iB.Vertical];
            if (jB === EB.Mouse) {
              if (void 0 === BB.pointerId && (BB.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (dB) {}
            } else if (BB.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(BB.pointerId)
            } catch (dB) {}
            nB[iB.Horizontal] = BB.clientX, nB[iB.Vertical] = BB.clientY, nB[BB.button + 2] = 1;
            const NB = BB;
            NB.inputIndex = BB.button + 2, this._onInputChanged(jB, zB, NB), QB === BB.clientX && IB === BB.clientY || (NB.inputIndex = iB.Move, this._onInputChanged(jB, zB, NB))
          }
        }, this._pointerUpEvent = BB => {
          const jB = this._getPointerType(BB),
            zB = jB === EB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (jB === EB.Touch) {
            if (-1 === zB) return;
            this._activeTouchIds[zB] = -1
          }
          const QB = this._inputs[jB]?.[zB];
          let nB = BB.button,
            dB = QB && 0 !== QB[nB + 2];
          if (!dB && this._isUsingFirefox && this._usingMacOs && QB && (nB = 2 === nB ? 0 : 2, dB = 0 !== QB[nB + 2]), dB) {
            const dB = QB[iB.Horizontal],
              IB = QB[iB.Vertical];
            QB[iB.Horizontal] = BB.clientX, QB[iB.Vertical] = BB.clientY, QB[nB + 2] = 0;
            const NB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), dB === BB.clientX && IB === BB.clientY || (NB.inputIndex = iB.Move, this._onInputChanged(jB, zB, NB)), NB.inputIndex = nB + 2, jB === EB.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : BB.pointerId && this._elementToAttachTo.hasPointerCapture?.(BB.pointerId) && this._elementToAttachTo.releasePointerCapture(BB.pointerId), this._onInputChanged(jB, zB, NB), jB === EB.Touch && this._onDeviceDisconnected(jB, zB)
          }
        }, this._pointerCancelTouch = BB => {
          const jB = this._activeTouchIds.indexOf(BB);
          if (-1 === jB) return;
          this._elementToAttachTo.hasPointerCapture?.(BB) && this._elementToAttachTo.releasePointerCapture(BB), this._inputs[EB.Touch][jB][iB.LeftClick] = 0;
          const zB = VB.CreateDeviceEvent(EB.Touch, jB, iB.LeftClick, 0, this, this._elementToAttachTo, BB);
          this._onInputChanged(EB.Touch, jB, zB), this._activeTouchIds[jB] = -1, this._onDeviceDisconnected(EB.Touch, jB)
        }, this._pointerCancelEvent = BB => {
          if ("mouse" === BB.pointerType) {
            const BB = this._inputs[EB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let jB = iB.LeftClick; jB <= iB.BrowserForward; jB++)
              if (1 === BB[jB]) {
                BB[jB] = 0;
                const zB = VB.CreateDeviceEvent(EB.Mouse, 0, jB, 0, this, this._elementToAttachTo);
                this._onInputChanged(EB.Mouse, 0, zB)
              }
          } else this._pointerCancelTouch(BB.pointerId)
        }, this._pointerLeaveEvent = BB => {
          "pen" === BB.pointerType && this._pointerCancelTouch(BB.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let BB = !1;
        const jB = function() {};
        try {
          const zB = Object.defineProperty({}, "passive", {
            get: function() {
              BB = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", jB, zB), this._elementToAttachTo.removeEventListener("test", jB, zB)
        } catch (zB) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(EB.Mouse)) {
            const BB = this._inputs[EB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let jB = iB.LeftClick; jB <= iB.BrowserForward; jB++)
              if (1 === BB[jB]) {
                BB[jB] = 0;
                const zB = VB.CreateDeviceEvent(EB.Mouse, 0, jB, 0, this, this._elementToAttachTo);
                this._onInputChanged(EB.Mouse, 0, zB)
              }
          }
          if (this.isDeviceAvailable(EB.Touch)) {
            const BB = this._inputs[EB.Touch];
            for (let jB = 0; jB < this._activeTouchIds.length; jB++) {
              const zB = this._activeTouchIds[jB];
              if (this._elementToAttachTo.hasPointerCapture?.(zB) && this._elementToAttachTo.releasePointerCapture(zB), -1 !== zB && 1 === BB[jB]?.[iB.LeftClick]) {
                BB[jB][iB.LeftClick] = 0;
                const QB = VB.CreateDeviceEvent(EB.Touch, jB, iB.LeftClick, 0, this, this._elementToAttachTo, zB);
                this._onInputChanged(EB.Touch, jB, QB), this._activeTouchIds[jB] = -1, this._onDeviceDisconnected(EB.Touch, jB)
              }
            }
          }
        }, this._pointerWheelEvent = BB => {
          const jB = EB.Mouse;
          this._inputs[jB] || (this._inputs[jB] = []), this._inputs[jB][0] || (this._pointerActive = !0, this._registerDevice(jB, 0, XB));
          const zB = this._inputs[jB][0];
          if (zB) {
            zB[iB.MouseWheelX] = BB.deltaX || 0, zB[iB.MouseWheelY] = BB.deltaY || BB.wheelDelta || 0, zB[iB.MouseWheelZ] = BB.deltaZ || 0;
            const QB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), 0 !== zB[iB.MouseWheelX] && (QB.inputIndex = iB.MouseWheelX, this._onInputChanged(jB, 0, QB)), 0 !== zB[iB.MouseWheelY] && (QB.inputIndex = iB.MouseWheelY, this._onInputChanged(jB, 0, QB)), 0 !== zB[iB.MouseWheelZ] && (QB.inputIndex = iB.MouseWheelZ, this._onInputChanged(jB, 0, QB))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = BB => {
          BB.buttons > 1 && this._pointerCancelEvent(BB)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!BB && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(EB.Mouse)) {
            const BB = this._inputs[EB.Mouse][0];
            BB[iB.MouseWheelX] = 0, BB[iB.MouseWheelY] = 0, BB[iB.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = BB => {
          this._addGamePad(BB.gamepad)
        }, this._gamepadDisconnectedEvent = BB => {
          if (this._gamepads) {
            const jB = this._getGamepadDeviceType(BB.gamepad.id),
              zB = BB.gamepad.index;
            this._unregisterDevice(jB, zB), delete this._gamepads[zB]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(BB, jB, zB) {
        const QB = navigator.getGamepads()[jB];
        if (QB && BB === this._gamepads[jB]) {
          const nB = this._inputs[BB][jB];
          zB >= QB.buttons.length ? nB[zB] = QB.axes[zB - QB.buttons.length].valueOf() : nB[zB] = QB.buttons[zB].value
        }
      }
      _getGamepadDeviceType(BB) {
        return -1 !== BB.indexOf("054c") ? -1 !== BB.indexOf("0ce6") ? EB.DualSense : EB.DualShock : -1 !== BB.indexOf("Xbox One") || -1 !== BB.search("Xbox 360") || -1 !== BB.search("xinput") || -1 !== BB.indexOf("045e") && -1 === BB.indexOf("Surface Dock") ? EB.Xbox : -1 !== BB.indexOf("057e") ? EB.Switch : EB.Generic
      }
      _getPointerType(BB) {
        let jB = EB.Mouse;
        return ("touch" === BB.pointerType || "pen" === BB.pointerType || BB.touches) && (jB = EB.Touch), jB
      }
    }
    class AB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = jB, this.deviceSlot = zB, this.onInputChangedObservable = new IB.c, this._deviceInputSystem = BB
      }
      getInput(BB) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, BB)
      }
    }
    class TB {
      constructor(BB) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = BB => {
          for (let jB = 0; jB < this._devices.length; jB++) {
            const zB = this._devices[jB];
            for (const QB in zB) {
              const zB = +QB;
              BB._addDevice(new AB(this._deviceInputSystem, jB, zB))
            }
          }
          this._registeredManagers.push(BB)
        }, this.unregisterManager = BB => {
          const jB = this._registeredManagers.indexOf(BB);
          jB > -1 && this._registeredManagers.splice(jB, 1)
        };
        const jB = Object.keys(EB).length / 2;
        this._devices = new Array(jB);
        const zB = (BB, jB) => {
            this._devices[BB] || (this._devices[BB] = new Array), this._devices[BB][jB] || (this._devices[BB][jB] = jB);
            for (const zB of this._registeredManagers) {
              const QB = new AB(this._deviceInputSystem, BB, jB);
              zB._addDevice(QB)
            }
          },
          QB = (BB, jB) => {
            this._devices[BB]?.[jB] && delete this._devices[BB][jB];
            for (const zB of this._registeredManagers) zB._removeDevice(BB, jB)
          },
          nB = (BB, jB, zB) => {
            if (zB)
              for (const QB of this._registeredManagers) QB._onInputChanged(BB, jB, zB)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new hB(zB, QB, nB) : this._deviceInputSystem = new ZB(BB, zB, QB, nB)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class PB {
      getDeviceSource(BB, jB) {
        if (void 0 === jB) {
          if (void 0 === this._firstDevice[BB]) return null;
          jB = this._firstDevice[BB]
        }
        return this._devices[BB] && void 0 !== this._devices[BB][jB] ? this._devices[BB][jB] : null
      }
      getDeviceSources(BB) {
        return this._devices[BB] ? this._devices[BB].filter((BB => !!BB)) : []
      }
      constructor(BB) {
        const jB = Object.keys(EB).length / 2;
        this._devices = new Array(jB), this._firstDevice = new Array(jB), this._engine = BB, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new TB(BB)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new IB.c((BB => {
          for (const jB of this._devices)
            if (jB)
              for (const zB of jB) zB && this.onDeviceConnectedObservable.notifyObserver(BB, zB)
        })), this.onDeviceDisconnectedObservable = new IB.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = BB.pY.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.pY.remove(this._onDisposeObserver)
      }
      _addDevice(BB) {
        this._devices[BB.deviceType] || (this._devices[BB.deviceType] = []), this._devices[BB.deviceType][BB.deviceSlot] || (this._devices[BB.deviceType][BB.deviceSlot] = BB, this._updateFirstDevices(BB.deviceType)), this.onDeviceConnectedObservable.notifyObservers(BB)
      }
      _removeDevice(BB, jB) {
        const zB = this._devices[BB]?.[jB];
        this.onDeviceDisconnectedObservable.notifyObservers(zB), this._devices[BB]?.[jB] && delete this._devices[BB][jB], this._updateFirstDevices(BB)
      }
      _onInputChanged(BB, jB, zB) {
        this._devices[BB]?.[jB]?.onInputChangedObservable.notifyObservers(zB)
      }
      _updateFirstDevices(BB) {
        switch (BB) {
          case EB.Keyboard:
          case EB.Mouse:
            this._firstDevice[BB] = 0;
            break;
          case EB.Touch:
          case EB.DualSense:
          case EB.DualShock:
          case EB.Xbox:
          case EB.Switch:
          case EB.Generic: {
            delete this._firstDevice[BB];
            const jB = this._devices[BB];
            if (jB)
              for (let zB = 0; zB < jB.length; zB++)
                if (jB[zB]) {
                  this._firstDevice[BB] = zB;
                  break
                } break
          }
        }
      }
    }
    var WB = zB(40276);
    class eB {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get la() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(BB) {
        this._singleClick = BB
      }
      set la(BB) {
        this._doubleClick = BB
      }
      set hasSwiped(BB) {
        this._hasSwiped = BB
      }
      set ignore(BB) {
        this._ignore = BB
      }
    }
    class lB {
      constructor(BB) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new aB.i(0, 0), this._previousStartingPointerPosition = new aB.i(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = BB || gB.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(BB) {
        return this._meshUnderPointerId[BB] || null
      }
      get unTranslatedPointer() {
        return new aB.i(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(BB) {
        this._pointerX = BB
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(BB) {
        this._pointerY = BB
      }
      _updatePointerPosition(BB) {
        const jB = this._scene.wJ().getInputElementClientRect();
        jB && (this._pointerX = BB.clientX - jB.left, this._pointerY = BB.clientY - jB.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(BB, jB) {
        const zB = this._scene,
          QB = zB.wJ(),
          nB = QB.getInputElement();
        nB && (nB.tabIndex = QB.canvasTabIndex, zB.doNotHandleCursors || (nB.style.cursor = zB.defaultCursor)), this._setCursorAndPointerOverMesh(BB, jB, zB);
        for (const NB of zB._pointerMoveStage) {
          BB = BB || this._pickMove(jB);
          const zB = !!BB?.pickedMesh;
          BB = NB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, zB, nB)
        }
        const dB = jB.inputIndex >= iB.MouseWheelX && jB.inputIndex <= iB.MouseWheelZ ? SB.b.POINTERWHEEL : SB.b.POINTERMOVE;
        let IB;
        zB.onPointerMove && (BB = BB || this._pickMove(jB), zB.onPointerMove(jB, BB, dB)), BB ? (IB = new SB.e(dB, jB, BB), this._setRayOnPointerInfo(BB, jB)) : (IB = new SB.e(dB, jB, null, this), this._movePointerInfo = IB), zB.onPointerObservable.hasObservers() && zB.onPointerObservable.notifyObservers(IB, dB)
      }
      _setRayOnPointerInfo(BB, jB) {
        const zB = this._scene;
        BB && WB.d._IsPickingAvailable && (BB.ray || (BB.ray = zB.createPickingRay(jB.offsetX, jB.offsetY, aB.c.Identity(), zB.activeCamera)))
      }
      _addCameraPointerObserver(BB, jB) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(BB, jB)
      }
      _removeCameraPointerObserver(BB) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(BB)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(BB, jB, zB) {
        const QB = this._scene,
          nB = new SB.d(zB, jB, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return BB && (nB.originalPickingInfo = BB, nB.ray = BB.ray, "xr-near" === jB.pointerType && BB.originMesh && (nB.nearInteractionPickingInfo = BB)), QB.onPrePointerObservable.notifyObservers(nB, zB), !!nB.skipOnPointerObservable
      }
      _pickMove(BB) {
        const jB = this._scene,
          zB = jB.zs(this._unTranslatedPointerX, this._unTranslatedPointerY, jB.pointerMovePredicate, jB.pointerMoveFastCheck, jB.cameraToUseForPointers, jB.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(zB, BB, jB), zB
      }
      _updateMeshUnderPointer() {
        const BB = this._scene;
        if (!BB.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || BB.skipPointerMovePicking || !BB.cameraToUseForPointers && !BB.activeCamera) return;
        this._ensurePointerMovePredicate();
        const jB = this._pointerX,
          zB = this._pointerY,
          QB = this._unTranslatedPointerX,
          nB = this._unTranslatedPointerY;
        for (const dB of this._latestPointerMoveEvents.values()) this._pointerX = dB.pointerX, this._pointerY = dB.pointerY, this._unTranslatedPointerX = dB.unTranslatedPointerX, this._unTranslatedPointerY = dB.unTranslatedPointerY, this._pickMove(dB.event);
        this._pointerX = jB, this._pointerY = zB, this._unTranslatedPointerX = QB, this._unTranslatedPointerY = nB
      }
      _ensurePointerMovePredicate() {
        const BB = this._scene;
        BB.pointerMovePredicate || (BB.pointerMovePredicate = jB => (jB._isPointerMovePickable ?? jB.Ny) && jB.isVisible && jB.isReady() && jB.isEnabled() && (jB.enablePointerMoveEvents || BB.constantlyUpdateMeshUnderPointer || null !== jB._getActionManagerForTrigger()) && (!BB.cameraToUseForPointers || 0 !== (BB.cameraToUseForPointers.layerMask & jB.layerMask)))
      }
      _setCursorAndPointerOverMesh(BB, jB, zB) {
        const QB = zB.wJ().getInputElement();
        if (BB?.pickedMesh) {
          if (this.setPointerOverMesh(BB.pickedMesh, jB.pointerId, BB, jB), !zB.doNotHandleCursors && QB && this._pointerOverMesh) {
            const BB = this._pointerOverMesh._getActionManagerForTrigger();
            BB && BB.hasPointerTriggers && (QB.style.cursor = BB.hoverCursor || zB.hoverCursor)
          }
        } else this.setPointerOverMesh(null, jB.pointerId, BB, jB)
      }
      simulatePointerMove(BB, jB) {
        const zB = new PointerEvent("pointermove", jB);
        zB.inputIndex = iB.Move, this._checkPrePointerObservable(BB, zB, SB.b.POINTERMOVE) || this._processPointerMove(BB, zB)
      }
      simulatePointerDown(BB, jB) {
        const zB = new PointerEvent("pointerdown", jB);
        zB.inputIndex = zB.button + 2, this._checkPrePointerObservable(BB, zB, SB.b.POINTERDOWN) || this._processPointerDown(BB, zB)
      }
      _processPointerDown(BB, jB) {
        const zB = this._scene;
        if (BB?.pickedMesh) {
          this._pickedDownMesh = BB.pickedMesh;
          const QB = BB.pickedMesh._getActionManagerForTrigger();
          if (QB) {
            if (QB.hasPickTriggers) switch (QB.processTrigger(5, new JB(BB.pickedMesh, zB.pointerX, zB.pointerY, BB.pickedMesh, jB, BB)), jB.button) {
              case 0:
                QB.processTrigger(2, new JB(BB.pickedMesh, zB.pointerX, zB.pointerY, BB.pickedMesh, jB, BB));
                break;
              case 1:
                QB.processTrigger(4, new JB(BB.pickedMesh, zB.pointerX, zB.pointerY, BB.pickedMesh, jB, BB));
                break;
              case 2:
                QB.processTrigger(3, new JB(BB.pickedMesh, zB.pointerX, zB.pointerY, BB.pickedMesh, jB, BB))
            }
            QB.hasSpecificTrigger(8) && window.setTimeout((() => {
              const BB = zB.zs(this._unTranslatedPointerX, this._unTranslatedPointerY, (BB => BB.Ny && BB.isVisible && BB.isReady() && BB.actionManager && BB.actionManager.hasSpecificTrigger(8) && BB === this._pickedDownMesh), !1, zB.cameraToUseForPointers);
              BB?.pickedMesh && QB && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > lB.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, QB.processTrigger(8, JB.CreateNew(BB.pickedMesh, jB)))
            }), lB.LongPressDelay)
          }
        } else
          for (const dB of zB._pointerDownStage) BB = dB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, jB, !1);
        let QB;
        const nB = SB.b.POINTERDOWN;
        BB ? (zB.onPointerDown && zB.onPointerDown(jB, BB, nB), QB = new SB.e(nB, jB, BB), this._setRayOnPointerInfo(BB, jB)) : QB = new SB.e(nB, jB, null, this), zB.onPointerObservable.hasObservers() && zB.onPointerObservable.notifyObservers(QB, nB)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(BB, jB, zB) {
        const QB = new PointerEvent("pointerup", jB);
        QB.inputIndex = iB.Move;
        const nB = new eB;
        zB ? nB.la = !0 : nB.singleClick = !0, this._checkPrePointerObservable(BB, QB, SB.b.POINTERUP) || this._processPointerUp(BB, QB, nB)
      }
      _processPointerUp(BB, jB, zB) {
        const QB = this._scene;
        if (BB?.pickedMesh) {
          if (this._pickedUpMesh = BB.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (QB.onPointerPick && QB.onPointerPick(jB, BB), zB.singleClick && !zB.ignore && QB.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const zB = SB.b.POINTERPICK,
              nB = new SB.e(zB, jB, BB);
            this._setRayOnPointerInfo(BB, jB), QB.onPointerObservable.notifyObservers(nB, zB)
          }
          const nB = BB.pickedMesh._getActionManagerForTrigger();
          if (nB && !zB.ignore) {
            nB.processTrigger(7, JB.CreateNew(BB.pickedMesh, jB, BB)), !zB.hasSwiped && zB.singleClick && nB.processTrigger(1, JB.CreateNew(BB.pickedMesh, jB, BB));
            const QB = BB.pickedMesh._getActionManagerForTrigger(6);
            zB.la && QB && QB.processTrigger(6, JB.CreateNew(BB.pickedMesh, jB, BB))
          }
        } else if (!zB.ignore)
          for (const nB of QB._pointerUpStage) BB = nB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, jB, zB.la);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const BB = this._pickedDownMesh._getActionManagerForTrigger(16);
          BB && BB.processTrigger(16, JB.CreateNew(this._pickedDownMesh, jB))
        }
        if (!zB.ignore) {
          const nB = new SB.e(SB.b.POINTERUP, jB, BB);
          if (this._setRayOnPointerInfo(BB, jB), QB.onPointerObservable.notifyObservers(nB, SB.b.POINTERUP), QB.onPointerUp && QB.onPointerUp(jB, BB, SB.b.POINTERUP), !zB.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let nB = 0;
            if (zB.singleClick ? nB = SB.b.POINTERTAP : zB.la && (nB = SB.b.POINTERDOUBLETAP), nB) {
              const zB = new SB.e(nB, jB, BB);
              QB.onPointerObservable.hasObservers() && QB.onPointerObservable.hasSpecificMask(nB) && QB.onPointerObservable.notifyObservers(zB, nB)
            }
          }
        }
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[BB]
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nB = this._scene,
          dB = nB.wJ();
        QB || (QB = dB.getInputElement()), this._alreadyAttached && this.detachControl(), QB && (this._alreadyAttachedTo = QB), this._deviceSourceManager = new PB(dB), this._initActionManager = BB => {
          if (!this._meshPickProceed) {
            const jB = nB.skipPointerUpPicking || 0 === nB._registeredActions && !this._checkForPicking() && !nB.onPointerUp ? null : nB.zs(this._unTranslatedPointerX, this._unTranslatedPointerY, nB.pointerUpPredicate, nB.pointerUpFastCheck, nB.cameraToUseForPointers, nB.pointerUpTrianglePredicate);
            this._currentPickResult = jB, jB && (BB = jB.hit && jB.pickedMesh ? jB.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return BB
        }, this._delayedSimpleClick = (BB, jB, zB) => {
          if ((Date.now() - this._previousStartingPointerTime > lB.DoubleClickDelay && !this._doubleClickOccured || BB !== this._previousButtonPressed) && (this._doubleClickOccured = !1, jB.singleClick = !0, jB.ignore = !1, this._delayedClicks[BB])) {
            const jB = this._delayedClicks[BB].evt,
              zB = SB.b.POINTERTAP,
              QB = new SB.e(zB, jB, this._currentPickResult);
            nB.onPointerObservable.hasObservers() && nB.onPointerObservable.hasSpecificMask(zB) && nB.onPointerObservable.notifyObservers(QB, zB), this._delayedClicks[BB] = null
          }
        }, this._initClickEvent = (BB, jB, zB, QB) => {
          const nB = new eB;
          this._currentPickResult = null;
          let dB = null,
            IB = BB.hasSpecificMask(SB.b.POINTERPICK) || jB.hasSpecificMask(SB.b.POINTERPICK) || BB.hasSpecificMask(SB.b.POINTERTAP) || jB.hasSpecificMask(SB.b.POINTERTAP) || BB.hasSpecificMask(SB.b.POINTERDOUBLETAP) || jB.hasSpecificMask(SB.b.POINTERDOUBLETAP);
          !IB && MB && (dB = this._initActionManager(dB, nB), dB && (IB = dB.hasPickTriggers));
          let NB = !1;
          if (IB = IB && !this._isMultiTouchGesture, IB) {
            const IB = zB.button;
            if (nB.hasSwiped = this._isPointerSwiping(), !nB.hasSwiped) {
              let uB = !lB.ExclusiveDoubleClickMode;
              if (uB || (uB = !BB.hasSpecificMask(SB.b.POINTERDOUBLETAP) && !jB.hasSpecificMask(SB.b.POINTERDOUBLETAP), uB && !MB.HasSpecificTrigger(6) && (dB = this._initActionManager(dB, nB), dB && (uB = !dB.hasSpecificTrigger(6)))), uB)(Date.now() - this._previousStartingPointerTime > lB.DoubleClickDelay || IB !== this._previousButtonPressed) && (nB.singleClick = !0, QB(nB, this._currentPickResult), NB = !0);
              else {
                const BB = {
                  evt: zB,
                  clickInfo: nB,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, IB, nB, QB), lB.DoubleClickDelay)
                };
                this._delayedClicks[IB] = BB
              }
              let UB = BB.hasSpecificMask(SB.b.POINTERDOUBLETAP) || jB.hasSpecificMask(SB.b.POINTERDOUBLETAP);
              !UB && MB.HasSpecificTrigger(6) && (dB = this._initActionManager(dB, nB), dB && (UB = dB.hasSpecificTrigger(6))), UB && (IB === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < lB.DoubleClickDelay && !this._doubleClickOccured ? (nB.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = IB, lB.ExclusiveDoubleClickMode ? (this._delayedClicks[IB] && (clearTimeout(this._delayedClicks[IB]?.timeoutId), this._delayedClicks[IB] = null), QB(nB, this._previousPickResult)) : QB(nB, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, nB.la = !0, nB.ignore = !1, lB.ExclusiveDoubleClickMode && this._delayedClicks[IB] && (clearTimeout(this._delayedClicks[IB]?.timeoutId), this._delayedClicks[IB] = null), QB(nB, this._currentPickResult)), NB = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = IB))
            }
          }
          NB || QB(nB, this._currentPickResult)
        }, this._onPointerMove = BB => {
          if (this._updatePointerPosition(BB), this._latestPointerMoveEvents.set(BB.pointerId, {
              event: BB,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > lB.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > lB.DragMovementThreshold), dB.isPointerLock && dB._verifyPointerLock(), this._checkPrePointerObservable(null, BB, BB.inputIndex >= iB.MouseWheelX && BB.inputIndex <= iB.MouseWheelZ ? SB.b.POINTERWHEEL : SB.b.POINTERMOVE)) return;
          if (!nB.cameraToUseForPointers && !nB.activeCamera) return;
          if (nB.skipPointerMovePicking) return void this._processPointerMove(new sB.d, BB);
          this._ensurePointerMovePredicate();
          const jB = nB._registeredActions > 0 || nB.constantlyUpdateMeshUnderPointer ? this._pickMove(BB) : null;
          this._processPointerMove(jB, BB)
        }, this._onPointerDown = BB => {
          const jB = this._activePointerIds.indexOf(-1);
          if (-1 === jB ? this._activePointerIds.push(BB.pointerId) : this._activePointerIds[jB] = BB.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, lB.ExclusiveDoubleClickMode)
            for (let QB = 0; QB < this._delayedClicks.length; QB++)
              if (this._delayedClicks[QB])
                if (BB.button === QB) clearTimeout(this._delayedClicks[QB]?.timeoutId);
                else {
                  const BB = this._delayedClicks[QB].clickInfo;
                  this._doubleClickOccured = !1, BB.singleClick = !0, BB.ignore = !1;
                  const jB = this._delayedClicks[QB].evt,
                    zB = SB.b.POINTERTAP,
                    dB = new SB.e(zB, jB, this._currentPickResult);
                  nB.onPointerObservable.hasObservers() && nB.onPointerObservable.hasSpecificMask(zB) && nB.onPointerObservable.notifyObservers(dB, zB), this._delayedClicks[QB] = null
                } if (this._updatePointerPosition(BB), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = BB.button), nB.preventDefaultOnPointerDown && QB && (BB.preventDefault(), QB.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, BB, SB.b.POINTERDOWN)) return;
          if (!nB.cameraToUseForPointers && !nB.activeCamera) return;
          let zB;
          this._pointerCaptures[BB.pointerId] = !0, nB.pointerDownPredicate || (nB.pointerDownPredicate = BB => BB.Ny && BB.isVisible && BB.isReady() && BB.isEnabled() && (!nB.cameraToUseForPointers || 0 !== (nB.cameraToUseForPointers.layerMask & BB.layerMask))), this._pickedDownMesh = null, zB = nB.skipPointerDownPicking || 0 === nB._registeredActions && !this._checkForPicking() && !nB.onPointerDown ? new sB.d : nB.zs(this._unTranslatedPointerX, this._unTranslatedPointerY, nB.pointerDownPredicate, nB.pointerDownFastCheck, nB.cameraToUseForPointers, nB.pointerDownTrianglePredicate), this._processPointerDown(zB, BB)
        }, this._onPointerUp = BB => {
          const jB = this._activePointerIds.indexOf(BB.pointerId); - 1 !== jB && (this._activePointerIds[jB] = -1, this._activePointerIdsCount--, "touch" === BB.pointerType && this._latestPointerMoveEvents.delete(BB.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(BB), nB.preventDefaultOnPointerUp && QB && (BB.preventDefault(), QB.focus()), this._initClickEvent(nB.onPrePointerObservable, nB.onPointerObservable, BB, ((jB, zB) => {
            if (nB.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !jB.ignore)) {
              if (this._checkPrePointerObservable(null, BB, SB.b.POINTERUP)) return this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1));
              jB.hasSwiped || (jB.singleClick && nB.onPrePointerObservable.hasSpecificMask(SB.b.POINTERTAP) && this._checkPrePointerObservable(null, BB, SB.b.POINTERTAP) && (this._skipPointerTap = !0), jB.la && nB.onPrePointerObservable.hasSpecificMask(SB.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, BB, SB.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[BB.pointerId] ? (0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1), (nB.cameraToUseForPointers || nB.activeCamera) && (nB.pointerUpPredicate || (nB.pointerUpPredicate = BB => BB.Ny && BB.isVisible && BB.isReady() && BB.isEnabled() && (!nB.cameraToUseForPointers || 0 !== (nB.cameraToUseForPointers.layerMask & BB.layerMask))), !this._meshPickProceed && (MB && MB.HasTriggers || this._checkForPicking() || nB.onPointerUp) && this._initActionManager(null, jB), zB || (zB = this._currentPickResult), this._processPointerUp(zB, BB, jB), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = BB => {
          const jB = FB.e.KEYDOWN;
          if (nB.onPreKeyboardObservable.hasObservers()) {
            const zB = new FB.f(jB, BB);
            if (nB.onPreKeyboardObservable.notifyObservers(zB, jB), zB.skipOnKeyboardObservable) return
          }
          if (nB.onKeyboardObservable.hasObservers()) {
            const zB = new FB.g(jB, BB);
            nB.onKeyboardObservable.notifyObservers(zB, jB)
          }
          nB.actionManager && nB.actionManager.processTrigger(14, JB.CreateNewFromScene(nB, BB))
        }, this._onKeyUp = BB => {
          const jB = FB.e.KEYUP;
          if (nB.onPreKeyboardObservable.hasObservers()) {
            const zB = new FB.f(jB, BB);
            if (nB.onPreKeyboardObservable.notifyObservers(zB, jB), zB.skipOnKeyboardObservable) return
          }
          if (nB.onKeyboardObservable.hasObservers()) {
            const zB = new FB.g(jB, BB);
            nB.onKeyboardObservable.notifyObservers(zB, jB)
          }
          nB.actionManager && nB.actionManager.processTrigger(15, JB.CreateNewFromScene(nB, BB))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((QB => {
          QB.deviceType === EB.Mouse ? QB.onInputChangedObservable.add((nB => {
            this._originMouseEvent = nB, nB.inputIndex === iB.LeftClick || nB.inputIndex === iB.MiddleClick || nB.inputIndex === iB.RightClick || nB.inputIndex === iB.BrowserBack || nB.inputIndex === iB.BrowserForward ? jB && 1 === QB.getInput(nB.inputIndex) ? this._onPointerDown(nB) : BB && 0 === QB.getInput(nB.inputIndex) && this._onPointerUp(nB) : zB && (nB.inputIndex === iB.Move ? this._onPointerMove(nB) : nB.inputIndex !== iB.MouseWheelX && nB.inputIndex !== iB.MouseWheelY && nB.inputIndex !== iB.MouseWheelZ || this._onPointerMove(nB))
          })) : QB.deviceType === EB.Touch ? QB.onInputChangedObservable.add((nB => {
            nB.inputIndex === iB.LeftClick && (jB && 1 === QB.getInput(nB.inputIndex) ? (this._onPointerDown(nB), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : BB && 0 === QB.getInput(nB.inputIndex) && (this._onPointerUp(nB), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), zB && nB.inputIndex === iB.Move && this._onPointerMove(nB)
          })) : QB.deviceType === EB.Keyboard && QB.onInputChangedObservable.add((BB => {
            "keydown" === BB.type ? this._onKeyDown(BB) : "keyup" === BB.type && this._onKeyUp(BB)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[jB] === BB && (!BB || !BB._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const nB = this._meshUnderPointerId[jB];
        let dB;
        nB && (dB = nB._getActionManagerForTrigger(10), dB && dB.processTrigger(10, new JB(nB, this._pointerX, this._pointerY, BB, QB, {
          pointerId: jB
        }))), BB ? (this._meshUnderPointerId[jB] = BB, this._pointerOverMesh = BB, dB = BB._getActionManagerForTrigger(9), dB && dB.processTrigger(9, new JB(BB, this._pointerX, this._pointerY, BB, QB, {
          pointerId: jB,
          pickResult: zB
        }))) : (delete this._meshUnderPointerId[jB], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: BB,
          pointerId: jB
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(BB) {
        this._pointerOverMesh === BB && (this._pointerOverMesh = null), this._pickedDownMesh === BB && (this._pickedDownMesh = null), this._pickedUpMesh === BB && (this._pickedUpMesh = null);
        for (const jB in this._meshUnderPointerId) this._meshUnderPointerId[jB] === BB && delete this._meshUnderPointerId[jB]
      }
    }
    lB.DragMovementThreshold = 10, lB.LongPressDelay = 500, lB.DoubleClickDelay = 300, lB.ExclusiveDoubleClickMode = !1;
    var wB = zB(40034),
      xB = zB(37379),
      KB = zB(37865);
    class CB {
      static get UniqueId() {
        const BB = this._UniqueIdCounter;
        return this._UniqueIdCounter++, BB
      }
    }
    CB._UniqueIdCounter = 1;
    var cB = zB(40108),
      bB = zB(40284),
      vB = zB(37186);
    class RB {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var OB, Bj, jj, zj, Qj, nj, dj, Ij, Nj, uj, Uj, aj, pj, rj, sj, Jj, mj, yj, kj, Gj, Lj, gj, tj, Sj, Mj, Ej, ij, qj, fj, oj, Hj, Dj, Fj, Yj, Vj, hj, Xj, Zj, Aj, Tj, Pj, Wj, ej, lj, wj, xj, Kj, Cj, cj, bj, vj, Rj, Oj, Bz = zB(38783),
      jz = zB(37222);
    const zz = new aB.n,
      Qz = new aB.n;
    var nz;
    ! function(BB) {
      BB[BB.BackwardCompatible = 0] = "BackwardCompatible", BB[BB.Intermediate = 1] = "Intermediate", BB[BB.Aggressive = 2] = "Aggressive"
    }(nz || (nz = {}));
    class dz {
      static DefaultMaterialFactory(BB) {
        throw (0, tB.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, tB.k)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(BB) {
        BB !== this._clearColor && (this._clearColor = BB, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(BB) {
        if (BB !== this._performancePriority) {
          switch (this._performancePriority = BB, BB) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(BB)
        }
      }
      set forceWireframe(BB) {
        this._forceWireframe !== BB && (this._forceWireframe = BB, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(BB) {
        this._skipFrustumClipping !== BB && (this._skipFrustumClipping = BB)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(BB) {
        this._forcePointsCloud !== BB && (this._forcePointsCloud = BB, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(BB) {
        this._environmentTexture !== BB && (this._environmentTexture = BB, this.onEnvironmentTextureChangedObservable.notifyObservers(BB), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let BB = [];
        BB = BB.concat(this.meshes), BB = BB.concat(this.lights), BB = BB.concat(this.cameras), BB = BB.concat(this.transformNodes);
        for (const jB of this.skeletons) BB = BB.concat(jB.bones);
        return BB
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(BB) {
        this._animationPropertiesOverride = BB
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.pY.remove(this._onDisposeObserver), this._onDisposeObserver = this.pY.add(BB)
      }
      set beforeRender(BB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), BB && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB))
      }
      set afterRender(BB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), BB && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB))
      }
      set beforeCameraRender(BB) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(BB)
      }
      set afterCameraRender(BB) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(BB)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(BB) {
        this._pointerPickingConfiguration.pointerDownPredicate = BB
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(BB) {
        this._pointerPickingConfiguration.pointerUpPredicate = BB
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(BB) {
        this._pointerPickingConfiguration.pointerMovePredicate = BB
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(BB) {
        this._pointerPickingConfiguration.pointerDownFastCheck = BB
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(BB) {
        this._pointerPickingConfiguration.pointerUpFastCheck = BB
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(BB) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = BB
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(BB) {
        this._pointerPickingConfiguration.skipPointerMovePicking = BB
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(BB) {
        this._pointerPickingConfiguration.skipPointerDownPicking = BB
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(BB) {
        this._pointerPickingConfiguration.skipPointerUpPicking = BB
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return lB.DragMovementThreshold
      }
      static set DragMovementThreshold(BB) {
        lB.DragMovementThreshold = BB
      }
      static get LongPressDelay() {
        return lB.LongPressDelay
      }
      static set LongPressDelay(BB) {
        lB.LongPressDelay = BB
      }
      static get DoubleClickDelay() {
        return lB.DoubleClickDelay
      }
      static set DoubleClickDelay(BB) {
        lB.DoubleClickDelay = BB
      }
      static get ExclusiveDoubleClickMode() {
        return lB.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(BB) {
        lB.ExclusiveDoubleClickMode = BB
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? aB.m.ZeroReadOnly
      }
      bindEyePosition(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = this._eyePosition,
          nB = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          dB = this.floatingOriginOffset,
          IB = zz.set(QB.x, QB.y, QB.z, nB ? -1 : 1),
          NB = IB.subtractFromFloatsToRef(dB.x, dB.y, dB.z, 0, Qz);
        return BB && (zB ? BB.setFloat3(jB, NB.x, NB.y, NB.z) : BB.setVector4(jB, NB)), IB
      }
      finalizeSceneUbo() {
        const BB = this.getSceneUniformBuffer(),
          jB = this.bindEyePosition(null),
          zB = this.floatingOriginOffset;
        return BB.updateFloat4("vEyePosition", jB.x - zB.x, jB.y - zB.y, jB.z - zB.z, jB.w), BB.update(), BB
      }
      set useRightHandedSystem(BB) {
        this._useRightHandedSystem !== BB && (this._useRightHandedSystem = BB, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(BB) {
        this._currentStepId = BB
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(BB) {
        this._fogEnabled !== BB && (this._fogEnabled = BB, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(BB) {
        this._fogMode !== BB && (this._fogMode = BB, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(BB) {
        this._shadowsEnabled !== BB && (this._shadowsEnabled = BB, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(BB) {
        this._lightsEnabled !== BB && (this._lightsEnabled = BB, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(BB) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), BB && (this._unObserveActiveCameras = (0, vB.k)(BB, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = BB
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(BB) {
        BB !== this._activeCamera && (this._activeCamera = BB, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return dz.DefaultMaterialFactory !== dz._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = dz.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(BB) {
        this._defaultMaterial = BB
      }
      set texturesEnabled(BB) {
        this._texturesEnabled !== BB && (this._texturesEnabled = BB, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(BB) {
        if (this._frameGraph) return this._frameGraph = BB, void(BB || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = BB, BB && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(BB) {
        this._skeletonsEnabled !== BB && (this._skeletonsEnabled = BB, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = dz.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const BB of this._transientComponents) BB.register();
          this._transientComponents.length = 0
        }
      }
      wzB(BB) {
        this._components.push(BB), this._transientComponents.push(BB);
        const jB = BB;
        jB.addFromContainer && jB.serialize && this._serializableComponents.push(jB)
      }
      _getComponent(BB) {
        for (const jB of this._components)
          if (jB.name === BB) return jB;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(BB, jB) {
        this._inputManager = new lB(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new xB.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new IB.c, this.ambientColor = new xB.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new IB.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.RL = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.pY = new IB.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new IB.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new IB.c, this.onAfterRenderCameraObservable = new IB.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new IB.c, this.onAfterAnimationsObservable = new IB.c, this.onBeforeDrawPhaseObservable = new IB.c, this.onAfterDrawPhaseObservable = new IB.c, this.onReadyObservable = new IB.c, this.onBeforeCameraRenderObservable = new IB.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new IB.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new IB.c, this.onAfterActiveMeshesEvaluationObservable = new IB.c, this.onBeforeParticlesRenderingObservable = new IB.c, this.onAfterParticlesRenderingObservable = new IB.c, this.onDataLoadedObservable = new IB.c, this.onNewCameraAddedObservable = new IB.c, this.onCameraRemovedObservable = new IB.c, this.onNewLightAddedObservable = new IB.c, this.onLightRemovedObservable = new IB.c, this.onNewGeometryAddedObservable = new IB.c, this.onGeometryRemovedObservable = new IB.c, this.onNewTransformNodeAddedObservable = new IB.c, this.onTransformNodeRemovedObservable = new IB.c, this.onNewMeshAddedObservable = new IB.c, this.onMeshRemovedObservable = new IB.c, this.onNewSkeletonAddedObservable = new IB.c, this.onSkeletonRemovedObservable = new IB.c, this.onNewParticleSystemAddedObservable = new IB.c, this.onParticleSystemRemovedObservable = new IB.c, this.onNewAnimationGroupAddedObservable = new IB.c, this.onAnimationGroupRemovedObservable = new IB.c, this.onNewMaterialAddedObservable = new IB.c, this.onNewMultiMaterialAddedObservable = new IB.c, this.onMaterialRemovedObservable = new IB.c, this.onMultiMaterialRemovedObservable = new IB.c, this.onNewTextureAddedObservable = new IB.c, this.onTextureRemovedObservable = new IB.c, this.onNewFrameGraphAddedObservable = new IB.c, this.onFrameGraphRemovedObservable = new IB.c, this.onNewObjectRendererAddedObservable = new IB.c, this.onObjectRendererRemovedObservable = new IB.c, this.onNewPostProcessAddedObservable = new IB.c, this.onPostProcessRemovedObservable = new IB.c, this.onNewEffectLayerAddedObservable = new IB.c, this.onEffectLayerRemovedObservable = new IB.c, this.onBeforeRenderTargetsRenderObservable = new IB.c, this.onAfterRenderTargetsRenderObservable = new IB.c, this.onBeforeStepObservable = new IB.c, this.onAfterStepObservable = new IB.c, this.onActiveCameraChanged = new IB.c, this.onActiveCamerasChanged = new IB.c, this.onBeforeRenderingGroupObservable = new IB.c, this.onAfterRenderingGroupObservable = new IB.c, this.onMeshImportedObservable = new IB.c, this.onAnimationFileImportedObservable = new IB.c, this.onEnvironmentTextureChangedObservable = new IB.c, this.onMeshUnderPointerUpdatedObservable = new IB.c, this._registeredForLateAnimationBindings = new NB.e(256), this._pointerPickingConfiguration = new RB, this.onPrePointerObservable = new IB.c, this.onPointerObservable = new IB.c, this.onPreKeyboardObservable = new IB.c, this.onKeyboardObservable = new IB.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = dz.FOGMODE_NONE, this.fogColor = new xB.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.iZ = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new aB.m(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new NB.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new wB.d, this._activeIndices = new wB.d, this._activeParticles = new wB.d, this._activeBones = new wB.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new NB.i(256), this._processedMaterials = new NB.i(256), this._renderTargets = new NB.e(256), this._materialsRenderTargets = new NB.e(256), this._activeParticleSystems = new NB.i(256), this._activeSkeletons = new NB.e(32), this._softwareSkinnedMeshes = new NB.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = aB.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = GB.d.Create(), this._beforeClearStage = GB.d.Create(), this._beforeRenderTargetClearStage = GB.d.Create(), this._gatherRenderTargetsStage = GB.d.Create(), this._gatherActiveCameraRenderTargetsStage = GB.d.Create(), this._isReadyForMeshStage = GB.d.Create(), this._beforeEvaluateActiveMeshStage = GB.d.Create(), this._evaluateSubMeshStage = GB.d.Create(), this._preActiveMeshStage = GB.d.Create(), this._cameraDrawRenderTargetStage = GB.d.Create(), this._beforeCameraDrawStage = GB.d.Create(), this._beforeRenderTargetDrawStage = GB.d.Create(), this._beforeRenderingGroupDrawStage = GB.d.Create(), this._beforeRenderingMeshStage = GB.d.Create(), this._afterRenderingMeshStage = GB.d.Create(), this._afterRenderingGroupDrawStage = GB.d.Create(), this._afterCameraDrawStage = GB.d.Create(), this._afterCameraPostProcessStage = GB.d.Create(), this._afterRenderTargetDrawStage = GB.d.Create(), this._afterRenderTargetPostProcessStage = GB.d.Create(), this._afterRenderStage = GB.d.Create(), this._pointerMoveStage = GB.d.Create(), this._pointerDownStage = GB.d.Create(), this._pointerUpStage = GB.d.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new IB.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const zB = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...jB
        };
        this.defaultCameraLayerMask = zB.defaultCameraLayerMask, this.defaultRenderableLayerMask = zB.defaultRenderableLayerMask, BB = this._engine = BB || gB.c.LastCreatedEngine, zB.virtual ? BB._virtualScenes.push(this) : (gB.c._LastCreatedScene = this, BB.scenes.push(this)), (BB.getCreationOptions().useLargeWorldRendering || jB?.useFloatingOrigin) && ((0, yB.e)(), this._floatingOriginScene = this, yB.d.aY = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new kB.d(this), mB.e && (this.postProcessManager = new mB.e(this)), (0, LB.o)() && this.attachControl(), this._createUbo(), pB.c && (this._imageProcessingConfiguration = new pB.c), this.setDefaultCandidateProviders(), zB.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = zB.useMaterialMeshMap, this.useClonedMeshMap = zB.useClonedMeshMap, jB && jB.virtual || BB.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(BB) {
        return this._defaultSubMeshCandidates.data = BB.cL, this._defaultSubMeshCandidates.length = BB.cL.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = BB => this._getDefaultSubMeshCandidates(BB), this.getIntersectingSubMeshCandidates = (BB, jB) => this._getDefaultSubMeshCandidates(BB), this.getCollidingSubMeshCandidates = (BB, jB) => this._getDefaultSubMeshCandidates(BB)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(BB) {
        this._inputManager.pointerX = BB
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(BB) {
        this._inputManager.pointerY = BB
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
      isCachedMaterialInvalid(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== jB || this._cachedMaterial !== BB || this._cachedVisibility !== zB
      }
      wJ() {
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
      simulatePointerMove(BB, jB) {
        return this._inputManager.simulatePointerMove(BB, jB), this
      }
      simulatePointerDown(BB, jB) {
        return this._inputManager.simulatePointerDown(BB, jB), this
      }
      simulatePointerUp(BB, jB, zB) {
        return this._inputManager.simulatePointerUp(BB, jB, zB), this
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(BB)
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(BB, jB, zB)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let BB, jB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const zB = this.wJ(),
          QB = zB.currentRenderPassId;
        zB.currentRenderPassId = this.activeCamera?.renderPassId ?? QB;
        let nB = !0;
        for (this._pendingData.length > 0 && (nB = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && nB && (nB = this.depthPeelingRenderer.isReady()), jB && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), BB = 0; BB < this.meshes.length; BB++) {
          const QB = this.meshes[BB];
          if (!QB.cL || 0 === QB.cL.length) continue;
          if (!QB.isReady(!0)) {
            nB = !1;
            continue
          }
          const dB = QB.hasThinInstances || "InstancedMesh" === QB.getClassName() || "InstancedLinesMesh" === QB.getClassName() || zB.getCaps().instancedArrays && QB.instances.length > 0;
          for (let BB = 0, jB = this._isReadyForMeshStage; BB < jB.length; BB++) {
            jB[BB].action(QB, dB) || (nB = !1)
          }
          if (!jB) continue;
          const IB = QB.material || this.defaultMaterial;
          if (IB)
            if (IB._storeEffectOnSubMeshes)
              for (const BB of QB.cL) {
                const jB = BB.bJ();
                jB && jB.hasRenderTargetTextures && null != jB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(jB) && (this._processedMaterials.push(jB), this._materialsRenderTargets.concatWithNoDuplicate(jB.getRenderTargetTextures()))
              } else IB.hasRenderTargetTextures && null != IB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(IB) && (this._processedMaterials.push(IB), this._materialsRenderTargets.concatWithNoDuplicate(IB.getRenderTargetTextures()))
        }
        if (jB) {
          for (BB = 0; BB < this._materialsRenderTargets.length; ++BB) {
            this._materialsRenderTargets.data[BB].isReadyForRendering() || (nB = !1)
          }
          for (BB = 0; BB < this.customRenderTargets.length; ++BB) {
            this.customRenderTargets[BB].isReadyForRendering() || (nB = !1)
          }
        }
        for (BB = 0; BB < this.geometries.length; BB++) {
          2 === this.geometries[BB].delayLoadState && (nB = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const dB of this.activeCameras) dB.isReady(!0) || (nB = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (nB = !1));
        for (const dB of this.RL) dB.isReady() || (nB = !1);
        if (this.proceduralTexturesEnabled)
          for (const dB of this.proceduralTextures) dB.isReady() || (nB = !1);
        if (this.layers)
          for (const dB of this.layers) dB.isReady() || (nB = !1);
        if (this.effectLayers)
          for (const dB of this.effectLayers) dB.isLayerReady() || (nB = !1);
        for (const dB of this._isReadyChecks) dB.isReady() || (nB = !1);
        return zB.areAllEffectsReady() || (nB = !1), zB.currentRenderPassId = QB, nB
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(BB) {
        this.onBeforeRenderObservable.add(BB)
      }
      unregisterBeforeRender(BB) {
        this.onBeforeRenderObservable.removeCallback(BB)
      }
      registerAfterRender(BB) {
        this.onAfterRenderObservable.add(BB)
      }
      unregisterAfterRender(BB) {
        this.onAfterRenderObservable.removeCallback(BB)
      }
      _executeOnceBeforeRender(BB) {
        const jB = () => {
          BB(), setTimeout((() => {
            this.unregisterBeforeRender(jB)
          }))
        };
        this.registerBeforeRender(jB)
      }
      executeOnceBeforeRender(BB, jB) {
        void 0 !== jB ? setTimeout((() => {
          this._executeOnceBeforeRender(BB)
        }), jB) : this._executeOnceBeforeRender(BB)
      }
      addPendingData(BB) {
        this._pendingData.push(BB)
      }
      removePendingData(BB) {
        const jB = this.isLoading,
          zB = this._pendingData.indexOf(BB); - 1 !== zB && this._pendingData.splice(zB, 1), jB && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(BB) {
        -1 === this._isReadyChecks.indexOf(BB) && this._isReadyChecks.push(BB)
      }
      removeIsReadyCheck(BB) {
        const jB = this._isReadyChecks.indexOf(BB); - 1 !== jB && this._isReadyChecks.splice(jB, 1)
      }
      executeWhenReady(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(BB), null === this._executeWhenReadyTimeoutId && this._checkIsReady(jB)
      }
      async whenReadyAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((jB => {
          this.executeWhenReady((() => {
            jB()
          }), BB)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = dB.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && dB.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(BB)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(BB)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = dB.e.Now
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
      setTransformMatrix(BB, jB, zB, QB) {
        this._multiviewSceneUboIsActive = !!(zB && QB && this._multiviewSceneUbo), this._viewUpdateFlag === BB.updateFlag && this._projectionUpdateFlag === jB.updateFlag || (this._viewUpdateFlag = BB.updateFlag, this._projectionUpdateFlag = jB.updateFlag, this._viewMatrix = BB, this._projectionMatrix = jB, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new aB.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? KB.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = KB.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(zB, QB) : this._sceneUbo.useUbo && (this._sceneUbo.l_("viewProjection", this._transformMatrix), this._sceneUbo.l_("view", this._viewMatrix), this._sceneUbo.l_("projection", this._projectionMatrix), this._sceneUbo.l_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(BB, jB) {
        const zB = "boolean" === typeof jB ? jB : jB?.trackUBOsInFrame,
          QB = new rB.d(this._engine, void 0, !1, BB ?? "ny", void 0, zB);
        return QB.addUniform("viewProjection", 16), QB.addUniform("view", 16), QB.addUniform("projection", 16), QB.addUniform("vEyePosition", 4), QB.addUniform("inverseProjection", 16), QB
      }
      setSceneUniformBuffer(BB) {
        this._sceneUbo = BB, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : aB.m.ZeroReadOnly
      }
      getUniqueId() {
        return CB.UniqueId
      }
      IQB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(BB), BB._resyncLightSources(), BB.parent || BB._addToSceneRootNodes(), nB.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(BB)
          })), jB)) {
          const jB = BB.getChildMeshes();
          for (const BB of jB) this.IQB(BB)
        }
      }
      qY(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this.meshes.indexOf(BB);
        if (-1 !== zB && (this.meshes.splice(zB, 1), BB.parent || BB._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(BB), this.onMeshRemovedObservable.notifyObservers(BB), jB) {
          const jB = BB.getChildMeshes();
          for (const BB of jB) this.qY(BB)
        }
        return zB
      }
      addTransformNode(BB) {
        this._blockEntityCollection || BB.aY() === this && -1 !== BB._indexInSceneTransformNodesArray || (BB._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(BB), BB.parent || BB._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(BB))
      }
      removeTransformNode(BB) {
        const jB = BB._indexInSceneTransformNodesArray;
        if (-1 !== jB) {
          if (jB !== this.transformNodes.length - 1) {
            const BB = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[jB] = BB, BB._indexInSceneTransformNodesArray = jB
          }
          BB._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), BB.parent || BB._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(BB), jB
      }
      removeSkeleton(BB) {
        const jB = this.skeletons.indexOf(BB);
        return -1 !== jB && (this.skeletons.splice(jB, 1), this.onSkeletonRemovedObservable.notifyObservers(BB), this._executeActiveContainerCleanup(this._activeSkeletons)), jB
      }
      removeMorphTargetManager(BB) {
        const jB = this.morphTargetManagers.indexOf(BB);
        return -1 !== jB && this.morphTargetManagers.splice(jB, 1), jB
      }
      removeLight(BB) {
        const jB = this.lights.indexOf(BB);
        if (-1 !== jB) {
          for (const jB of this.meshes) jB._removeLightSource(BB, !1);
          this.lights.splice(jB, 1), this.sortLightsByPriority(), BB.parent || BB._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(BB)
        }
        return jB
      }
      removeCamera(BB) {
        const jB = this.cameras.indexOf(BB);
        if (-1 !== jB && (this.cameras.splice(jB, 1), BB.parent || BB._removeFromSceneRootNodes()), this.activeCameras) {
          const jB = this.activeCameras.indexOf(BB); - 1 !== jB && this.activeCameras.splice(jB, 1)
        }
        return this.activeCamera === BB && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(BB), jB
      }
      removeParticleSystem(BB) {
        const jB = this.RL.indexOf(BB);
        return -1 !== jB && (this.RL.splice(jB, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(BB), jB
      }
      removeAnimation(BB) {
        const jB = this.animations.indexOf(BB);
        return -1 !== jB && this.animations.splice(jB, 1), jB
      }
      stopAnimation(BB, jB, zB) {}
      removeAnimationGroup(BB) {
        const jB = this.animationGroups.indexOf(BB);
        return -1 !== jB && this.animationGroups.splice(jB, 1), this.onAnimationGroupRemovedObservable.notifyObservers(BB), jB
      }
      removeMultiMaterial(BB) {
        const jB = this.multiMaterials.indexOf(BB);
        return -1 !== jB && this.multiMaterials.splice(jB, 1), this.onMultiMaterialRemovedObservable.notifyObservers(BB), jB
      }
      removeMaterial(BB) {
        const jB = BB._indexInSceneMaterialArray;
        if (-1 !== jB && jB < this.materials.length) {
          if (jB !== this.materials.length - 1) {
            const BB = this.materials[this.materials.length - 1];
            this.materials[jB] = BB, BB._indexInSceneMaterialArray = jB
          }
          BB._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(BB), jB
      }
      removeActionManager(BB) {
        const jB = this.actionManagers.indexOf(BB);
        return -1 !== jB && this.actionManagers.splice(jB, 1), jB
      }
      removeTexture(BB) {
        const jB = this.textures.indexOf(BB);
        return -1 !== jB && this.textures.splice(jB, 1), this.onTextureRemovedObservable.notifyObservers(BB), jB
      }
      removeFrameGraph(BB) {
        const jB = this.frameGraphs.indexOf(BB);
        return -1 !== jB && this.frameGraphs.splice(jB, 1), this.onFrameGraphRemovedObservable.notifyObservers(BB), jB
      }
      removeObjectRenderer(BB) {
        const jB = this.objectRenderers.indexOf(BB);
        return -1 !== jB && this.objectRenderers.splice(jB, 1), this.onObjectRendererRemovedObservable.notifyObservers(BB), jB
      }
      removePostProcess(BB) {
        const jB = this.postProcesses.indexOf(BB);
        return -1 !== jB && this.postProcesses.splice(jB, 1), this.onPostProcessRemovedObservable.notifyObservers(BB), jB
      }
      removeEffectLayer(BB) {
        const jB = this.effectLayers.indexOf(BB);
        return -1 !== jB && this.effectLayers.splice(jB, 1), this.onEffectLayerRemovedObservable.notifyObservers(BB), jB
      }
      addLight(BB) {
        if (!this._blockEntityCollection) {
          this.lights.push(BB), this.sortLightsByPriority(), BB.parent || BB._addToSceneRootNodes();
          for (const jB of this.meshes) - 1 === jB.lightSources.indexOf(BB) && (jB.lightSources.push(BB), jB._resyncLightSources());
          nB.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(BB)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(bB.d.CompareLightsPriority)
      }
      addCamera(BB) {
        this._blockEntityCollection || (this.cameras.push(BB), nB.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(BB)
        })), BB.parent || BB._addToSceneRootNodes())
      }
      addSkeleton(BB) {
        this._blockEntityCollection || (this.skeletons.push(BB), nB.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(BB)
        })))
      }
      addParticleSystem(BB) {
        this._blockEntityCollection || (this.RL.push(BB), nB.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(BB)
        })))
      }
      addAnimation(BB) {
        this._blockEntityCollection || this.animations.push(BB)
      }
      addAnimationGroup(BB) {
        this._blockEntityCollection || (this.animationGroups.push(BB), nB.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(BB)
        })))
      }
      addMultiMaterial(BB) {
        this._blockEntityCollection || (this.multiMaterials.push(BB), nB.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMaterial(BB) {
        this._blockEntityCollection || BB.aY() === this && -1 !== BB._indexInSceneMaterialArray || (BB._indexInSceneMaterialArray = this.materials.length, this.materials.push(BB), nB.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMorphTargetManager(BB) {
        this._blockEntityCollection || this.morphTargetManagers.push(BB)
      }
      addGeometry(BB) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = this.geometries.length), this.geometries.push(BB))
      }
      addActionManager(BB) {
        this.actionManagers.push(BB)
      }
      addTexture(BB) {
        this._blockEntityCollection || (this.textures.push(BB), this.onNewTextureAddedObservable.notifyObservers(BB))
      }
      addFrameGraph(BB) {
        this.frameGraphs.push(BB), nB.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(BB)
        }))
      }
      addObjectRenderer(BB) {
        this.objectRenderers.push(BB), nB.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(BB)
        }))
      }
      addPostProcess(BB) {
        this._blockEntityCollection || (this.postProcesses.push(BB), nB.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(BB)
        })))
      }
      addEffectLayer(BB) {
        this._blockEntityCollection || (this.effectLayers.push(BB), nB.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(BB)
        })))
      }
      switchActiveCamera(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = BB, jB && BB.attachControl())
      }
      setActiveCameraById(BB) {
        const jB = this.getCameraById(BB);
        return jB ? (this.activeCamera = jB, jB) : null
      }
      setActiveCameraByName(BB) {
        const jB = this.getCameraByName(BB);
        return jB ? (this.activeCamera = jB, jB) : null
      }
      getAnimationGroupByName(BB) {
        for (let jB = 0; jB < this.animationGroups.length; jB++)
          if (this.animationGroups[jB].name === BB) return this.animationGroups[jB];
        return null
      }
      _getMaterial(BB, jB) {
        for (let zB = 0; zB < this.materials.length; zB++) {
          const BB = this.materials[zB];
          if (jB(BB)) return BB
        }
        if (BB)
          for (let zB = 0; zB < this.multiMaterials.length; zB++) {
            const BB = this.multiMaterials[zB];
            if (jB(BB)) return BB
          }
        return null
      }
      getMaterialByUniqueID(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(BB, jB)
      }
      getMaterialByUniqueId(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(jB, (jB => jB.uniqueId === BB))
      }
      getMaterialById(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(jB, (jB => jB.id === BB))
      }
      getMaterialByName(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(jB, (jB => jB.name === BB))
      }
      getLastMaterialById(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let zB = this.materials.length - 1; zB >= 0; zB--)
          if (this.materials[zB].id === BB) return this.materials[zB];
        if (jB)
          for (let zB = this.multiMaterials.length - 1; zB >= 0; zB--)
            if (this.multiMaterials[zB].id === BB) return this.multiMaterials[zB];
        return null
      }
      getTextureByUniqueId(BB) {
        for (let jB = 0; jB < this.textures.length; jB++)
          if (this.textures[jB].uniqueId === BB) return this.textures[jB];
        return null
      }
      getTextureByName(BB) {
        for (let jB = 0; jB < this.textures.length; jB++)
          if (this.textures[jB].name === BB) return this.textures[jB];
        return null
      }
      getCameraById(BB) {
        for (let jB = 0; jB < this.cameras.length; jB++)
          if (this.cameras[jB].id === BB) return this.cameras[jB];
        return null
      }
      getCameraByUniqueId(BB) {
        for (let jB = 0; jB < this.cameras.length; jB++)
          if (this.cameras[jB].uniqueId === BB) return this.cameras[jB];
        return null
      }
      getCameraByName(BB) {
        for (let jB = 0; jB < this.cameras.length; jB++)
          if (this.cameras[jB].name === BB) return this.cameras[jB];
        return null
      }
      getBoneById(BB) {
        for (let jB = 0; jB < this.skeletons.length; jB++) {
          const zB = this.skeletons[jB];
          for (let jB = 0; jB < zB.bones.length; jB++)
            if (zB.bones[jB].id === BB) return zB.bones[jB]
        }
        return null
      }
      getBoneByName(BB) {
        for (let jB = 0; jB < this.skeletons.length; jB++) {
          const zB = this.skeletons[jB];
          for (let jB = 0; jB < zB.bones.length; jB++)
            if (zB.bones[jB].name === BB) return zB.bones[jB]
        }
        return null
      }
      getLightByName(BB) {
        for (let jB = 0; jB < this.lights.length; jB++)
          if (this.lights[jB].name === BB) return this.lights[jB];
        return null
      }
      getLightById(BB) {
        for (let jB = 0; jB < this.lights.length; jB++)
          if (this.lights[jB].id === BB) return this.lights[jB];
        return null
      }
      getLightByUniqueId(BB) {
        for (let jB = 0; jB < this.lights.length; jB++)
          if (this.lights[jB].uniqueId === BB) return this.lights[jB];
        return null
      }
      getParticleSystemById(BB) {
        for (let jB = 0; jB < this.RL.length; jB++)
          if (this.RL[jB].id === BB) return this.RL[jB];
        return null
      }
      getGeometryById(BB) {
        for (let jB = 0; jB < this.geometries.length; jB++)
          if (this.geometries[jB].id === BB) return this.geometries[jB];
        return null
      }
      _getGeometryByUniqueId(BB) {
        if (this._geometriesByUniqueId) {
          const jB = this._geometriesByUniqueId[BB];
          if (void 0 !== jB) return this.geometries[jB]
        } else
          for (let jB = 0; jB < this.geometries.length; jB++)
            if (this.geometries[jB].uniqueId === BB) return this.geometries[jB];
        return null
      }
      getFrameGraphByName(BB) {
        for (let jB = 0; jB < this.frameGraphs.length; jB++)
          if (this.frameGraphs[jB].name === BB) return this.frameGraphs[jB];
        return null
      }
      pushGeometry(BB, jB) {
        return !(!jB && this._getGeometryByUniqueId(BB.uniqueId)) && (this.addGeometry(BB), nB.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(BB)
        })), !0)
      }
      removeGeometry(BB) {
        let jB;
        if (this._geometriesByUniqueId) {
          if (jB = this._geometriesByUniqueId[BB.uniqueId], void 0 === jB) return !1
        } else if (jB = this.geometries.indexOf(BB), jB < 0) return !1;
        if (jB !== this.geometries.length - 1) {
          const BB = this.geometries[this.geometries.length - 1];
          BB && (this.geometries[jB] = BB, this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = jB))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(BB), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(BB) {
        for (let jB = 0; jB < this.meshes.length; jB++)
          if (this.meshes[jB].id === BB) return this.meshes[jB];
        return null
      }
      getMeshesById(BB) {
        return this.meshes.filter((function(jB) {
          return jB.id === BB
        }))
      }
      getTransformNodeById(BB) {
        for (let jB = 0; jB < this.transformNodes.length; jB++)
          if (this.transformNodes[jB].id === BB) return this.transformNodes[jB];
        return null
      }
      getTransformNodeByUniqueId(BB) {
        for (let jB = 0; jB < this.transformNodes.length; jB++)
          if (this.transformNodes[jB].uniqueId === BB) return this.transformNodes[jB];
        return null
      }
      getTransformNodesById(BB) {
        return this.transformNodes.filter((function(jB) {
          return jB.id === BB
        }))
      }
      getMeshByUniqueId(BB) {
        for (let jB = 0; jB < this.meshes.length; jB++)
          if (this.meshes[jB].uniqueId === BB) return this.meshes[jB];
        return null
      }
      getLastMeshById(BB) {
        for (let jB = this.meshes.length - 1; jB >= 0; jB--)
          if (this.meshes[jB].id === BB) return this.meshes[jB];
        return null
      }
      getLastTransformNodeById(BB) {
        for (let jB = this.transformNodes.length - 1; jB >= 0; jB--)
          if (this.transformNodes[jB].id === BB) return this.transformNodes[jB];
        return null
      }
      getLastEntryById(BB) {
        let jB;
        for (jB = this.meshes.length - 1; jB >= 0; jB--)
          if (this.meshes[jB].id === BB) return this.meshes[jB];
        for (jB = this.transformNodes.length - 1; jB >= 0; jB--)
          if (this.transformNodes[jB].id === BB) return this.transformNodes[jB];
        for (jB = this.cameras.length - 1; jB >= 0; jB--)
          if (this.cameras[jB].id === BB) return this.cameras[jB];
        for (jB = this.lights.length - 1; jB >= 0; jB--)
          if (this.lights[jB].id === BB) return this.lights[jB];
        for (jB = this.skeletons.length - 1; jB >= 0; jB--) {
          const zB = this.skeletons[jB];
          for (let jB = zB.bones.length - 1; jB >= 0; jB--)
            if (zB.bones[jB].id === BB) return zB.bones[jB]
        }
        return null
      }
      getNodeById(BB) {
        const jB = this.getMeshById(BB);
        if (jB) return jB;
        const zB = this.getTransformNodeById(BB);
        if (zB) return zB;
        const QB = this.getLightById(BB);
        if (QB) return QB;
        const nB = this.getCameraById(BB);
        if (nB) return nB;
        const dB = this.getBoneById(BB);
        return dB || null
      }
      getNodeByName(BB) {
        const jB = this.getMeshByName(BB);
        if (jB) return jB;
        const zB = this.getTransformNodeByName(BB);
        if (zB) return zB;
        const QB = this.getLightByName(BB);
        if (QB) return QB;
        const nB = this.getCameraByName(BB);
        if (nB) return nB;
        const dB = this.getBoneByName(BB);
        return dB || null
      }
      getMeshByName(BB) {
        for (let jB = 0; jB < this.meshes.length; jB++)
          if (this.meshes[jB].name === BB) return this.meshes[jB];
        return null
      }
      getTransformNodeByName(BB) {
        for (let jB = 0; jB < this.transformNodes.length; jB++)
          if (this.transformNodes[jB].name === BB) return this.transformNodes[jB];
        return null
      }
      getLastSkeletonById(BB) {
        for (let jB = this.skeletons.length - 1; jB >= 0; jB--)
          if (this.skeletons[jB].id === BB) return this.skeletons[jB];
        return null
      }
      getSkeletonByUniqueId(BB) {
        for (let jB = 0; jB < this.skeletons.length; jB++)
          if (this.skeletons[jB].uniqueId === BB) return this.skeletons[jB];
        return null
      }
      getSkeletonById(BB) {
        for (let jB = 0; jB < this.skeletons.length; jB++)
          if (this.skeletons[jB].id === BB) return this.skeletons[jB];
        return null
      }
      getSkeletonByName(BB) {
        for (let jB = 0; jB < this.skeletons.length; jB++)
          if (this.skeletons[jB].name === BB) return this.skeletons[jB];
        return null
      }
      getMorphTargetManagerById(BB) {
        for (let jB = 0; jB < this.morphTargetManagers.length; jB++)
          if (this.morphTargetManagers[jB].uniqueId === BB) return this.morphTargetManagers[jB];
        return null
      }
      getMorphTargetById(BB) {
        for (let jB = 0; jB < this.morphTargetManagers.length; ++jB) {
          const zB = this.morphTargetManagers[jB];
          for (let jB = 0; jB < zB.numTargets; ++jB) {
            const QB = zB.getTarget(jB);
            if (QB.id === BB) return QB
          }
        }
        return null
      }
      getMorphTargetByName(BB) {
        for (let jB = 0; jB < this.morphTargetManagers.length; ++jB) {
          const zB = this.morphTargetManagers[jB];
          for (let jB = 0; jB < zB.numTargets; ++jB) {
            const QB = zB.getTarget(jB);
            if (QB.name === BB) return QB
          }
        }
        return null
      }
      getPostProcessByName(BB) {
        for (let jB = 0; jB < this.postProcesses.length; ++jB) {
          const zB = this.postProcesses[jB];
          if (zB.name === BB) return zB
        }
        return null
      }
      isActiveMesh(BB) {
        return -1 !== this._activeMeshes.indexOf(BB)
      }
      get uid() {
        return this._uid || (this._uid = QB.i.RandomId()), this._uid
      }
      addExternalData(BB, jB) {
        return this._externalData || (this._externalData = new uB), this._externalData.add(BB, jB)
      }
      getExternalData(BB) {
        return this._externalData ? this._externalData.get(BB) : null
      }
      getOrAddExternalDataWithFactory(BB, jB) {
        return this._externalData || (this._externalData = new uB), this._externalData.getOrAddWithFactory(BB, jB)
      }
      removeExternalData(BB) {
        return this._externalData.remove(BB)
      }
      _evaluateSubMesh(BB, jB, zB, QB) {
        if (QB || BB.isInFrustum(this._frustumPlanes)) {
          for (let QB = 0, nB = this._evaluateSubMeshStage; QB < nB.length; QB++) {
            nB[QB].action(jB, BB)
          }
          const zB = BB.bJ();
          null !== zB && void 0 !== zB && (zB.hasRenderTargetTextures && null != zB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(zB) && (this._processedMaterials.push(zB), this._materialsRenderTargets.concatWithNoDuplicate(zB.getRenderTargetTextures())), this._renderingManager.dispatch(BB, jB, zB))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(BB) {
        this._preventFreeActiveMeshesAndRenderingGroups !== BB && (BB && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = BB)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let BB = 0; BB < this.activeCameras.length; BB++) {
            const jB = this.activeCameras[BB];
            jB && jB._activeMeshes && jB._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let BB = 0; BB < this.textures.length; BB++) {
            const jB = this.textures[BB];
            jB && jB.renderList && jB.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const IB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const BB of IB) BB.objectRenderer._freezeActiveMeshes(QB);
          return this._freezeActiveMeshesCancel = (0, nB.e)((() => {
            let BB = !0,
              jB = !0;
            for (const zB of IB) BB && (BB = zB.objectRenderer._isFrozen), jB && (jB = null !== zB.objectRenderer._freezeActiveMeshesCancel);
            if (BB) return !0;
            if (!jB) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = dB, this._skipEvaluateActiveMeshesCompletely = BB, jB?.()
          }), ((BB, jB) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), jB) {
              const jB = "Scene: Timeout while waiting for meshes to be frozen.";
              zB ? zB(jB) : (Bz.c.Error(jB), BB && Bz.c.Error(BB))
            } else {
              const jB = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              zB ? zB(jB) : (Bz.c.Error(jB), BB && (Bz.c.Error(BB), BB.stack && Bz.c.Error(BB.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = dB, this._skipEvaluateActiveMeshesCompletely = BB, QB)
              for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
            jB && jB()
          } else zB && zB("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const jB = this.meshes[BB];
          jB._internalAbstractMeshDataInfo && (jB._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const BB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const jB of BB) jB.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(BB) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => BB.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const BB = this._activeMeshes.length;
            for (let jB = 0; jB < BB; jB++) {
              this._activeMeshes.data[jB].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const BB = this._activeParticleSystems.length;
            for (let jB = 0; jB < BB; jB++) this._activeParticleSystems.data[jB].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let nB = 0, dB = this._beforeEvaluateActiveMeshStage; nB < dB.length; nB++) {
          dB[nB].action()
        }
        const BB = this.getActiveMeshCandidates(),
          jB = BB.length,
          zB = wB.d.Enabled,
          QB = this.customLODSelector;
        for (let nB = 0; nB < jB; nB++) {
          const jB = BB.data[nB],
            dB = !QB && !jB.rY && !jB._internalMeshDataInfo?._LODLevels.length;
          let IB, NB;
          if ((dB || (IB = jB._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), IB ? IB[1] = -1 : (IB = [jB, -1], jB._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, IB))), !jB.isBlocked) && (zB && this._totalVertices.addCount(jB.getTotalVertices(), !1), jB.isReady() && jB.isEnabled() && !jB.pp.hasAZeroComponent)) {
            if (jB.computeWorldMatrix(), jB.actionManager && jB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(jB), dB) NB = jB;
            else if (NB = QB ? QB(jB, this.activeCamera) : jB.getLOD(this.activeCamera), IB[0] = NB, IB[1] = this._frameId, void 0 === NB || null === NB) continue;
            if (NB !== jB && 0 !== NB.billboardMode && NB.computeWorldMatrix(), jB._preActivate(), jB.isVisible && jB.visibility > 0 && 0 !== (jB.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || jB.xJ || jB.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(jB), this.activeCamera._activeMeshes.push(jB), NB !== jB && NB._activate(this._renderId, !1);
              for (let BB = 0, zB = this._preActiveMeshStage; BB < zB.length; BB++) {
                zB[BB].action(jB)
              }
              jB._activate(this._renderId, !1) && (jB.rY ? jB._internalAbstractMeshDataInfo._actAsRegularMesh && (NB = jB) : NB._internalAbstractMeshDataInfo._onlyForInstances = !1, NB._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(jB, NB)), jB._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let BB = 0; BB < this.RL.length; BB++) {
            const jB = this.RL[BB];
            if (!jB.isStarted() || !jB.emitter) continue;
            const zB = jB.emitter;
            zB.position && !zB.isEnabled() || (this._activeParticleSystems.push(jB), jB.animate(), this._renderingManager.dispatchParticles(jB))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(BB) {
        this._skeletonsEnabled && BB.skeleton && (this._activeSkeletons.pushNoDuplicate(BB.skeleton) && (BB.skeleton.prepare(), this._activeBones.addCount(BB.skeleton.bones.length, !1)), BB.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(BB) && this.frameGraph && BB.applySkeleton(BB.skeleton))
      }
      _activeMesh(BB, jB) {
        this._prepareSkeleton(jB);
        let zB = BB.bQB || BB.rY || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || jB.xJ;
        if (jB && jB.cL && jB.cL.length > 0) {
          const QB = this.getActiveSubMeshCandidates(jB),
            nB = QB.length;
          zB = zB || 1 === nB;
          for (let dB = 0; dB < nB; dB++) {
            const nB = QB.data[dB];
            this._evaluateSubMesh(nB, jB, BB, zB)
          }
        }
      }
      updateTransformMatrix(BB) {
        const jB = this.activeCamera;
        if (jB)
          if (jB._renderingMultiview) {
            const zB = jB._rigCameras[0],
              QB = jB._rigCameras[1];
            this.setTransformMatrix(zB.getViewMatrix(), zB.getProjectionMatrix(BB), QB.getViewMatrix(), QB.getProjectionMatrix(BB))
          } else this.setTransformMatrix(jB.getViewMatrix(), jB.getProjectionMatrix(BB))
      }
      _bindFrameBuffer(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (BB && BB._multiviewTexture ? BB._multiviewTexture._bindFrameBuffer() : BB && BB.outputRenderTarget ? BB.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), jB && this._clearFrameBuffer(BB)
      }
      _clearFrameBuffer(BB) {
        if (BB && BB._multiviewTexture);
        else if (BB && BB.outputRenderTarget && !BB._renderingMultiview) {
          const jB = BB.outputRenderTarget;
          jB.onClearObservable.hasObservers() ? jB.onClearObservable.notifyObservers(this._engine) : jB.skipInitialClear || BB.isRightCamera || (this.autoClear && this._engine.clear(jB.clearColor || this._clearColor, !jB._cleared, !0, !0), jB._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (BB && BB._skipRendering) return;
        const nB = this._engine;
        if (this._activeCamera = BB, !this.activeCamera) throw new Error("Active camera not set");
        if (nB.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && zB) {
          let jB = !0;
          BB._renderingMultiview && BB.outputRenderTarget && (jB = BB.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, BB.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), BB._renderingMultiview && BB.outputRenderTarget && (BB.outputRenderTarget.skipInitialClear = jB)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = BB.outputRenderTarget?.renderPassId ?? BB.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let QB = 0; QB < this._softwareSkinnedMeshes.length; QB++) {
          const BB = this._softwareSkinnedMeshes.data[QB];
          BB.applySkeleton(BB.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), BB.customRenderTargets && BB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(BB.customRenderTargets), jB && jB.customRenderTargets && jB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(jB.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let QB = 0, NB = this._gatherActiveCameraRenderTargetsStage; QB < NB.length; QB++) {
          NB[QB].action(this._renderTargets)
        }
        let dB = !1;
        if (this.renderTargetsEnabled) {
          let BB;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            QB.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const jB = this.getBoundingBoxRenderer?.();
            for (let zB = 0; zB < this._renderTargets.length; zB++) {
              const QB = this._renderTargets.data[zB];
              if (QB._shouldRender()) {
                this._renderId++;
                const zB = QB.activeCamera && QB.activeCamera !== this.activeCamera;
                jB && !BB && (BB = jB.renderList.length > 0 ? jB.renderList.data.slice() : [], BB.length = jB.renderList.length), QB.render(zB, this.dumpNextRenderTargets), dB = !0
              }
            }
            jB && BB && (jB.renderList.data = BB, jB.renderList.length = BB.length), QB.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const jB = this.getBoundingBoxRenderer?.();
            jB && !BB && (BB = jB.renderList.length > 0 ? jB.renderList.data.slice() : [], BB.length = jB.renderList.length);
            for (let BB = 0, zB = this._cameraDrawRenderTargetStage; BB < zB.length; BB++) {
              dB = zB[BB].action(this.activeCamera) || dB
            }
            jB && BB && (jB.renderList.data = BB, jB.renderList.length = BB.length)
          }
          this._intermediateRendering = !1
        }
        dB && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || BB._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let QB = 0, NB = this._beforeCameraDrawStage; QB < NB.length; QB++) {
          NB[QB].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const IB = nB.snapshotRendering && 1 === nB.snapshotRenderingMode;
        IB && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !IB), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let QB = 0, NB = this._afterCameraDrawStage; QB < NB.length; QB++) {
          NB[QB].action(this.activeCamera)
        }
        if (this.postProcessManager && !BB._multiviewTexture) {
          const jB = BB.outputRenderTarget ? BB.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(BB.isIntermediate, jB)
        }
        for (let QB = 0, NB = this._afterCameraPostProcessStage; QB < NB.length; QB++) {
          NB[QB].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === BB.cameraRigMode || BB._renderingMultiview) return BB._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(BB, void 0, jB), void this.onAfterRenderCameraObservable.notifyObservers(BB);
        if (BB._useMultiviewToSingleView) this._renderMultiviewToSingleView(BB);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(BB);
          for (let jB = 0; jB < BB._rigCameras.length; jB++) this._renderForCamera(BB._rigCameras[jB], BB)
        }
        this._activeCamera = BB, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(BB)
      }
      _checkIntersections() {
        for (let BB = 0; BB < this._meshesForIntersections.length; BB++) {
          const jB = this._meshesForIntersections.data[BB];
          if (jB.actionManager)
            for (let BB = 0; jB.actionManager && BB < jB.actionManager.actions.length; BB++) {
              const zB = jB.actionManager.actions[BB];
              if (12 === zB.trigger || 13 === zB.trigger) {
                const BB = zB.getTriggerParameter(),
                  QB = BB.mesh ? BB.mesh : BB,
                  nB = QB.lQB(jB, BB.usePreciseIntersection),
                  dB = jB._intersectionsInProgress.indexOf(QB);
                nB && -1 === dB ? 12 === zB.trigger ? (zB._executeCurrent(JB.CreateNew(jB, void 0, QB)), jB._intersectionsInProgress.push(QB)) : 13 === zB.trigger && jB._intersectionsInProgress.push(QB) : !nB && dB > -1 && (13 === zB.trigger && zB._executeCurrent(JB.CreateNew(jB, void 0, QB)), jB.actionManager.hasSpecificTrigger(13, (BB => {
                  const jB = BB.mesh ? BB.mesh : BB;
                  return QB === jB
                })) && 13 !== zB.trigger || jB._intersectionsInProgress.splice(dB, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(BB) {}
      _animate(BB) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let BB = Math.max(dz.MinDeltaTime, Math.min(this._engine.getDeltaTime(), dz.MaxDeltaTime)) + this._timeAccumulator;
          const jB = this._engine.getTimeStep(),
            zB = 1e3 / jB / 1e3;
          let QB = 0;
          const nB = this._engine.getLockstepMaxSteps();
          let dB = Math.floor(BB / jB);
          for (dB = Math.min(dB, nB); BB > 0 && QB < dB;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = jB * zB, this._animate(jB), this.onAfterAnimationsObservable.notifyObservers(this), this.iZ && this._advancePhysicsEngineStep(jB), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, QB++, BB -= jB;
          this._timeAccumulator = BB < 0 ? 0 : BB
        } else {
          const BB = this.useConstantAnimationDeltaTime ? 16 : Math.max(dz.MinDeltaTime, Math.min(this._engine.getDeltaTime(), dz.MaxDeltaTime));
          this._animationRatio = .06 * BB, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.iZ && this._advancePhysicsEngineStep(BB)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(BB) {
        if (BB?.outputRenderTarget && !BB?.isRigCamera && (BB.outputRenderTarget._cleared = !1), BB?.rigCameras?.length)
          for (let jB = 0; jB < BB.rigCameras.length; ++jB) {
            const zB = BB.rigCameras[jB].outputRenderTarget;
            zB && (zB._cleared = !1)
          }
      }
      resetDrawCache(BB) {
        if (this.meshes)
          for (const jB of this.meshes) jB.resetDrawCache(BB)
      }
      _renderWithFrameGraph() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, BB)
          for (const zB of this.cameras)
            if (zB.update(), 0 !== zB.cameraRigMode)
              for (let BB = 0; BB < zB._rigCameras.length; BB++) zB._rigCameras[BB].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(jB)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(BB) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const jB = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), QB.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let BB = 0; BB < this._renderTargets.length; BB++) {
            const zB = this._renderTargets.data[BB],
              QB = zB.activeCamera || jB;
            this._renderRenderTarget(zB, QB, !0, this.dumpNextRenderTargets)
          }
          QB.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let zB = 0, QB = this._beforeClearStage; zB < QB.length; zB++) {
          QB[zB].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const jB = this.getActiveMeshCandidates(),
            zB = jB.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let BB = 0; BB < zB; BB++) {
                const zB = jB.data[BB];
                zB._internalAbstractMeshDataInfo._wasActiveLastFrame && zB.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const BB = this._activeParticleSystems.length;
              for (let jB = 0; jB < BB; jB++) this._activeParticleSystems.data[jB].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let QB = 0; QB < zB; QB++) {
              const zB = jB.data[QB];
              zB._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, zB.isBlocked || (this._totalVertices.addCount(zB.getTotalVertices(), !1), zB.isReady() && zB.isEnabled() && !zB.pp.hasAZeroComponent && (zB.computeWorldMatrix(BB), zB.actionManager && zB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(zB)))
            }
            if (this.particlesEnabled)
              for (let BB = 0; BB < this.RL.length; BB++) {
                const jB = this.RL[BB];
                if (!jB.isStarted() || !jB.emitter) continue;
                const zB = jB.emitter;
                zB.position && !zB.isEnabled() || (this._activeParticleSystems.push(jB), jB.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, BB._shouldRender()) {
          if (this._renderId++, this.activeCamera = jB, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), BB.render(zB, QB)
        }
        this._intermediateRendering = !1
      }
      render() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.aE) return;
        const zB = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(BB, jB)
        } finally {
          this._renderingMeshEvaluationDepth = zB
        }
      }
      _renderFrame(BB, jB) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), yB.d.aY = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const zB of this.activeCameras) this._checkCameraRenderTarget(zB);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), jB || this.animate();
        for (let zB = 0, QB = this._beforeCameraUpdateStage; zB < QB.length; zB++) {
          QB[zB].action()
        }
        if (BB)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let zB = 0; zB < this.activeCameras.length; zB++) {
              const BB = this.activeCameras[zB];
              if (BB.update(), 0 !== BB.cameraRigMode)
                for (let jB = 0; jB < BB._rigCameras.length; jB++) BB._rigCameras[jB].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let zB = 0; zB < this.activeCamera._rigCameras.length; zB++) this.activeCamera._rigCameras[zB].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(BB, jB);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const BB = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            QB.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let jB = 0; jB < this.customRenderTargets.length; jB++) {
              const zB = this.customRenderTargets[jB],
                QB = zB.activeCamera || this.activeCamera;
              this._renderRenderTarget(zB, QB, BB !== QB, this.dumpNextRenderTargets)
            }
            QB.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = BB?.renderPassId ?? 0, this.activeCamera = BB, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let jB = 0, zB = this._beforeClearStage; jB < zB.length; jB++) {
            zB[jB].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let jB = 0, zB = this._gatherRenderTargetsStage; jB < zB.length; jB++) {
            zB[jB].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let jB = 0; jB < this.activeCameras.length; jB++) this._processSubCameras(this.activeCameras[jB], jB > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let zB = 0, QB = this._afterRenderStage; zB < QB.length; zB++) {
          QB[zB].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let BB = 0; BB < this._toBeDisposed.length; BB++) {
            const jB = this._toBeDisposed[BB];
            jB && jB.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let BB = 0; BB < this.materials.length; BB++) this.materials[BB].freeze()
      }
      unfreezeMaterials() {
        for (let BB = 0; BB < this.materials.length; BB++) this.materials[BB].unfreeze()
      }
      dispose() {
        if (this.aE) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, tB.c)(this.stopAllAnimations)) {
          for (const BB of this._activeAnimatables) BB.onAnimationEndObservable.clear(), BB.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const BB = this._activeRequests.slice();
        for (const dB of BB) dB.abort();
        this._activeRequests.length = 0;
        try {
          this.pY.notifyObservers(this)
        } catch (nB) {
          Bz.c.Error("An error occurred while calling onDisposeObservable!", nB)
        }
        this.detachControl();
        const jB = this._engine.getInputElement?.();
        if (jB)
          for (let dB = 0; dB < this.cameras.length; dB++) this.cameras[dB].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (BB => BB.dispose(!0))), this._disposeList(this.transformNodes, (BB => BB.dispose(!0)));
        const zB = this.cameras;
        this._disposeList(zB), this._disposeList(this.RL), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let QB = this._engine.scenes.indexOf(this);
        if (QB > -1 && this._engine.scenes.splice(QB, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, yB.i)(), gB.c._LastCreatedScene === this) {
          gB.c._LastCreatedScene = null;
          let BB = gB.c.Instances.length - 1;
          for (; BB >= 0;) {
            const jB = gB.c.Instances[BB];
            if (jB.scenes.length > 0) {
              gB.c._LastCreatedScene = jB.scenes[this._engine.scenes.length - 1];
              break
            }
            BB--
          }
        }
        QB = this._engine._virtualScenes.indexOf(this), QB > -1 && this._engine._virtualScenes.splice(QB, 1), this._engine.wipeCaches(!0), this.pY.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(BB, jB) {
        const zB = BB.slice(0);
        jB = jB ?? (BB => BB.dispose());
        for (const QB of zB) jB(QB);
        BB.length = 0
      }
      get aE() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const jB = this.meshes[BB].geometry;
          jB && jB.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const BB of this.textures) {
          BB._buffer && (BB._buffer = null)
        }
      }
      getWorldExtends(BB) {
        const jB = new aB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          zB = new aB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        BB = BB || (() => !0);
        const QB = this.meshes.filter(BB);
        for (const nB of QB) {
          if (nB.computeWorldMatrix(!0), !nB.cL || 0 === nB.cL.length || nB.infiniteDistance) continue;
          const BB = nB.rV(),
            QB = BB.boundingBox.minimumWorld,
            dB = BB.boundingBox.maximumWorld;
          aB.m.CheckExtends(QB, jB, zB), aB.m.CheckExtends(dB, jB, zB)
        }
        return jB.x === Number.MAX_VALUE ? {
          min: aB.m.Zero(),
          max: aB.m.Zero()
        } : {
          min: jB,
          max: zB
        }
      }
      createPickingRay(BB, jB, zB, QB) {
        throw (0, tB.k)("Ray")
      }
      createPickingRayToRef(BB, jB, zB, QB, nB) {
        throw (0, tB.k)("Ray")
      }
      createPickingRayInCameraSpace(BB, jB, zB) {
        throw (0, tB.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(BB, jB, zB, QB) {
        throw (0, tB.k)("Ray")
      }
      zs(BB, jB, zB, QB, nB, dB) {
        const IB = (0, tB.k)("Ray", !0);
        return IB && Bz.c.Warn(IB), new sB.d
      }
      pickWithBoundingInfo(BB, jB, zB, QB, nB) {
        const dB = (0, tB.k)("Ray", !0);
        return dB && Bz.c.Warn(dB), new sB.d
      }
      pickWithRay(BB, jB, zB, QB) {
        throw (0, tB.k)("Ray")
      }
      multiPick(BB, jB, zB, QB, nB) {
        throw (0, tB.k)("Ray")
      }
      multiPickWithRay(BB, jB, zB) {
        throw (0, tB.k)("Ray")
      }
      setPointerOverMesh(BB, jB, zB) {
        this._inputManager.setPointerOverMesh(BB, jB, zB)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const BB of this.geometries) BB._rebuild();
        for (const BB of this.meshes) BB._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const BB of this._components) BB.rebuild();
        for (const BB of this.RL) BB.rebuild();
        if (this.spriteManagers)
          for (const BB of this.spriteManagers) BB.rebuild()
      }
      _rebuildTextures() {
        for (const BB of this.textures) BB._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(BB, jB, zB) {
        if (void 0 === jB) return BB;
        const QB = [];
        for (const nB in BB) {
          const dB = BB[nB];
          UB.d && UB.d.MatchesQuery(dB, jB) && (!zB || zB(dB)) && QB.push(dB)
        }
        return QB
      }
      getMeshesByTags(BB, jB) {
        return this._getByTags(this.meshes, BB, jB)
      }
      getCamerasByTags(BB, jB) {
        return this._getByTags(this.cameras, BB, jB)
      }
      getLightsByTags(BB, jB) {
        return this._getByTags(this.lights, BB, jB)
      }
      getMaterialByTags(BB, jB) {
        return this._getByTags(this.materials, BB, jB).concat(this._getByTags(this.multiMaterials, BB, jB))
      }
      getTransformNodesByTags(BB, jB) {
        return this._getByTags(this.transformNodes, BB, jB)
      }
      setRenderingOrder(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, jB, zB, QB)
      }
      setRenderingAutoClearDepthStencil(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, jB, zB, QB)
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._renderingManager.getAutoClearDepthStencilSetup(BB)
      }
      _forceBlockMaterialDirtyMechanism(BB) {
        this._blockMaterialDirtyMechanism = BB
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(BB) {
        this._blockMaterialDirtyMechanism !== BB && (this._blockMaterialDirtyMechanism = BB, BB || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(BB, jB) {
        if (!this._blockMaterialDirtyMechanism)
          for (const zB of this.materials) jB && !jB(zB) || zB.DjB(BB)
      }
      _loadFile(BB, jB, zB, QB, nB, dB, IB) {
        const NB = (0, cB.q)(BB, jB, zB, QB ? this.offlineProvider : void 0, nB, dB, IB);
        return this._activeRequests.push(NB), NB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), NB
      }
      async _loadFileAsync(BB, jB, zB, QB, nB) {
        return await new Promise(((dB, IB) => {
          this._loadFile(BB, (BB => {
            dB(BB)
          }), jB, zB, QB, ((BB, jB) => {
            IB(jB)
          }), nB)
        }))
      }
      async _loadDelayedFileAsync(BB, jB, zB) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const QB = `${BB}|${jB?"binary":"string"}`;
        let nB = this._delayedFileRequests.get(QB);
        if (!nB) {
          nB = jB ? this._loadFileAsync(BB, void 0, zB, !0) : this._loadFileAsync(BB, void 0, zB, !1);
          const dB = nB;
          (async () => {
            try {
              await dB
            } catch {}
            this._delayedFileRequests?.delete(QB)
          })(), this._delayedFileRequests.set(QB, nB)
        }
        return await nB
      }
      _requestFile(BB, jB, zB, QB, nB, dB, IB) {
        const NB = (0, cB.A)(BB, jB, zB, QB ? this.offlineProvider : void 0, nB, dB, IB);
        return this._activeRequests.push(NB), NB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), NB
      }
      async _requestFileAsync(BB, jB, zB, QB, nB) {
        return await new Promise(((dB, IB) => {
          this._requestFile(BB, (BB => {
            dB(BB)
          }), jB, zB, QB, (BB => {
            IB(BB)
          }), nB)
        }))
      }
      _readFile(BB, jB, zB, QB, nB) {
        const dB = (0, cB.v)(BB, jB, zB, QB, nB);
        return this._activeRequests.push(dB), dB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), dB
      }
      async _readFileAsync(BB, jB, zB) {
        return await new Promise(((QB, nB) => {
          this._readFile(BB, (BB => {
            QB(BB)
          }), jB, zB, (BB => {
            nB(BB)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, tB.k)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(BB) {
        return this.setActiveCameraById(BB)
      }
      getMaterialByID(BB) {
        return this.getMaterialById(BB)
      }
      getLastMaterialByID(BB) {
        return this.getLastMaterialById(BB)
      }
      getTextureByUniqueID(BB) {
        return this.getTextureByUniqueId(BB)
      }
      getCameraByID(BB) {
        return this.getCameraById(BB)
      }
      getCameraByUniqueID(BB) {
        return this.getCameraByUniqueId(BB)
      }
      getBoneByID(BB) {
        return this.getBoneById(BB)
      }
      getLightByID(BB) {
        return this.getLightById(BB)
      }
      getLightByUniqueID(BB) {
        return this.getLightByUniqueId(BB)
      }
      getParticleSystemByID(BB) {
        return this.getParticleSystemById(BB)
      }
      getGeometryByID(BB) {
        return this.getGeometryById(BB)
      }
      getMeshByID(BB) {
        return this.getMeshById(BB)
      }
      getMeshByUniqueID(BB) {
        return this.getMeshByUniqueId(BB)
      }
      getLastMeshByID(BB) {
        return this.getLastMeshById(BB)
      }
      getMeshesByID(BB) {
        return this.getMeshesById(BB)
      }
      getTransformNodeByID(BB) {
        return this.getTransformNodeById(BB)
      }
      getTransformNodeByUniqueID(BB) {
        return this.getTransformNodeByUniqueId(BB)
      }
      getTransformNodesByID(BB) {
        return this.getTransformNodesById(BB)
      }
      getNodeByID(BB) {
        return this.getNodeById(BB)
      }
      getLastEntryByID(BB) {
        return this.getLastEntryById(BB)
      }
      getLastSkeletonByID(BB) {
        return this.getLastSkeletonById(BB)
      }
    }
    dz.FOGMODE_NONE = 0, dz.FOGMODE_EXP = 1, dz.FOGMODE_EXP2 = 2, dz.FOGMODE_LINEAR = 3, dz.MinDeltaTime = 1, dz.MaxDeltaTime = 1e3, dz._OriginalDefaultMaterialFactory = dz.DefaultMaterialFactory;
    let Iz = !1;

    function Nz() {
      Iz || (Iz = !0, (0, jz.d)("BABYLON.Scene", dz))
    }(OB = dz.prototype).sortActiveAnimatables ?? (OB.sortActiveAnimatables = (0, tB.i)("Scene", "sortActiveAnimatables")), (Bj = dz.prototype).beginWeightedAnimation ?? (Bj.beginWeightedAnimation = (0, tB.i)("Scene", "beginWeightedAnimation")), (jj = dz.prototype).beginAnimation ?? (jj.beginAnimation = (0, tB.i)("Scene", "beginAnimation")), (zj = dz.prototype).beginHierarchyAnimation ?? (zj.beginHierarchyAnimation = (0, tB.i)("Scene", "beginHierarchyAnimation")), (Qj = dz.prototype).beginDirectAnimation ?? (Qj.beginDirectAnimation = (0, tB.i)("Scene", "beginDirectAnimation")), (nj = dz.prototype).beginDirectHierarchyAnimation ?? (nj.beginDirectHierarchyAnimation = (0, tB.i)("Scene", "beginDirectHierarchyAnimation")), (dj = dz.prototype).getAnimatableByTarget ?? (dj.getAnimatableByTarget = (0, tB.i)("Scene", "getAnimatableByTarget")), (Ij = dz.prototype).getAllAnimatablesByTarget ?? (Ij.getAllAnimatablesByTarget = (0, tB.i)("Scene", "getAllAnimatablesByTarget")), (Nj = dz.prototype).stopAllAnimations ?? (Nj.stopAllAnimations = (0, tB.i)("Scene", "stopAllAnimations")), (uj = dz.prototype).getSoundByName ?? (uj.getSoundByName = (0, tB.i)("Scene", "getSoundByName")), (Uj = dz.prototype).createOrUpdateSelectionOctree ?? (Uj.createOrUpdateSelectionOctree = (0, tB.i)("Scene", "createOrUpdateSelectionOctree")), (aj = dz.prototype).createDefaultLight ?? (aj.createDefaultLight = (0, tB.i)("Scene", "createDefaultLight")), (pj = dz.prototype).createDefaultCamera ?? (pj.createDefaultCamera = (0, tB.i)("Scene", "createDefaultCamera")), (rj = dz.prototype).createDefaultCameraOrLight ?? (rj.createDefaultCameraOrLight = (0, tB.i)("Scene", "createDefaultCameraOrLight")), (sj = dz.prototype).createDefaultSkybox ?? (sj.createDefaultSkybox = (0, tB.i)("Scene", "createDefaultSkybox")), (Jj = dz.prototype).createDefaultEnvironment ?? (Jj.createDefaultEnvironment = (0, tB.i)("Scene", "createDefaultEnvironment")), (mj = dz.prototype).createDefaultVRExperience ?? (mj.createDefaultVRExperience = (0, tB.i)("Scene", "createDefaultVRExperience")), (yj = dz.prototype).createDefaultXRExperienceAsync ?? (yj.createDefaultXRExperienceAsync = (0, tB.i)("Scene", "createDefaultXRExperienceAsync")), (kj = dz.prototype).getGlowLayerByName ?? (kj.getGlowLayerByName = (0, tB.i)("Scene", "getGlowLayerByName")), (Gj = dz.prototype).getHighlightLayerByName ?? (Gj.getHighlightLayerByName = (0, tB.i)("Scene", "getHighlightLayerByName")), (Lj = dz.prototype).getSelectionOutlineLayerByName ?? (Lj.getSelectionOutlineLayerByName = (0, tB.i)("Scene", "getSelectionOutlineLayerByName")), (gj = dz.prototype).removeLensFlareSystem ?? (gj.removeLensFlareSystem = (0, tB.i)("Scene", "removeLensFlareSystem")), (tj = dz.prototype).addLensFlareSystem ?? (tj.addLensFlareSystem = (0, tB.i)("Scene", "addLensFlareSystem")), (Sj = dz.prototype).getLensFlareSystemByName ?? (Sj.getLensFlareSystemByName = (0, tB.i)("Scene", "getLensFlareSystemByName")), (Mj = dz.prototype).getLensFlareSystemByID ?? (Mj.getLensFlareSystemByID = (0, tB.i)("Scene", "getLensFlareSystemByID")), (Ej = dz.prototype).getLensFlareSystemById ?? (Ej.getLensFlareSystemById = (0, tB.i)("Scene", "getLensFlareSystemById")), (ij = dz.prototype).getPhysicsEngine ?? (ij.getPhysicsEngine = (0, tB.i)("Scene", "getPhysicsEngine")), (qj = dz.prototype).enablePhysics ?? (qj.enablePhysics = (0, tB.i)("Scene", "enablePhysics")), (fj = dz.prototype).disablePhysicsEngine ?? (fj.disablePhysicsEngine = (0, tB.i)("Scene", "disablePhysicsEngine")), (oj = dz.prototype).isPhysicsEnabled ?? (oj.isPhysicsEnabled = (0, tB.i)("Scene", "isPhysicsEnabled")), (Hj = dz.prototype).deleteCompoundImpostor ?? (Hj.deleteCompoundImpostor = (0, tB.i)("Scene", "deleteCompoundImpostor")), (Dj = dz.prototype).removeReflectionProbe ?? (Dj.removeReflectionProbe = (0, tB.i)("Scene", "removeReflectionProbe")), (Fj = dz.prototype).addReflectionProbe ?? (Fj.addReflectionProbe = (0, tB.i)("Scene", "addReflectionProbe")), (Yj = dz.prototype).getBoundingBoxRenderer ?? (Yj.getBoundingBoxRenderer = (0, tB.i)("Scene", "getBoundingBoxRenderer")), (Vj = dz.prototype).enableDepthRenderer ?? (Vj.enableDepthRenderer = (0, tB.i)("Scene", "enableDepthRenderer")), (hj = dz.prototype).disableDepthRenderer ?? (hj.disableDepthRenderer = (0, tB.i)("Scene", "disableDepthRenderer")), (Xj = dz.prototype).enableFluidRenderer ?? (Xj.enableFluidRenderer = (0, tB.i)("Scene", "enableFluidRenderer")), (Zj = dz.prototype).disableFluidRenderer ?? (Zj.disableFluidRenderer = (0, tB.i)("Scene", "disableFluidRenderer")), (Aj = dz.prototype).enableGeometryBufferRenderer ?? (Aj.enableGeometryBufferRenderer = (0, tB.i)("Scene", "enableGeometryBufferRenderer")), (Tj = dz.prototype).disableGeometryBufferRenderer ?? (Tj.disableGeometryBufferRenderer = (0, tB.i)("Scene", "disableGeometryBufferRenderer")), (Pj = dz.prototype).enableIblCdfGenerator ?? (Pj.enableIblCdfGenerator = (0, tB.i)("Scene", "enableIblCdfGenerator")), (Wj = dz.prototype).disableIblCdfGenerator ?? (Wj.disableIblCdfGenerator = (0, tB.i)("Scene", "disableIblCdfGenerator")), (ej = dz.prototype).getOutlineRenderer ?? (ej.getOutlineRenderer = (0, tB.i)("Scene", "getOutlineRenderer")), (lj = dz.prototype).enablePrePassRenderer ?? (lj.enablePrePassRenderer = (0, tB.i)("Scene", "enablePrePassRenderer")), (wj = dz.prototype).disablePrePassRenderer ?? (wj.disablePrePassRenderer = (0, tB.i)("Scene", "disablePrePassRenderer")), (xj = dz.prototype).enableSubSurfaceForPrePass ?? (xj.enableSubSurfaceForPrePass = (0, tB.i)("Scene", "enableSubSurfaceForPrePass")), (Kj = dz.prototype).disableSubSurfaceForPrePass ?? (Kj.disableSubSurfaceForPrePass = (0, tB.i)("Scene", "disableSubSurfaceForPrePass")), (Cj = dz.prototype).pickSprite ?? (Cj.pickSprite = (0, tB.i)("Scene", "pickSprite")), (cj = dz.prototype).pickSpriteWithRay ?? (cj.pickSpriteWithRay = (0, tB.i)("Scene", "pickSpriteWithRay")), (bj = dz.prototype).multiPickSprite ?? (bj.multiPickSprite = (0, tB.i)("Scene", "multiPickSprite")), (vj = dz.prototype).multiPickSpriteWithRay ?? (vj.multiPickSpriteWithRay = (0, tB.i)("Scene", "multiPickSpriteWithRay")), (Rj = dz.prototype).setPointerOverSprite ?? (Rj.setPointerOverSprite = (0, tB.i)("Scene", "setPointerOverSprite")), (Oj = dz.prototype).getPointerOverSprite ?? (Oj.getPointerOverSprite = (0, tB.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(dz.prototype, "mainSoundTrack") || Object.defineProperty(dz.prototype, "mainSoundTrack", (0, tB.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(dz.prototype, "soundTracks") || Object.defineProperty(dz.prototype, "soundTracks", (0, tB.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(dz.prototype, "audioEnabled") || Object.defineProperty(dz.prototype, "audioEnabled", (0, tB.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(dz.prototype, "headphone") || Object.defineProperty(dz.prototype, "headphone", (0, tB.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(dz.prototype, "audioListenerPositionProvider") || Object.defineProperty(dz.prototype, "audioListenerPositionProvider", (0, tB.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(dz.prototype, "audioListenerRotationProvider") || Object.defineProperty(dz.prototype, "audioListenerRotationProvider", (0, tB.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(dz.prototype, "audioPositioningRefreshRate") || Object.defineProperty(dz.prototype, "audioPositioningRefreshRate", (0, tB.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(dz.prototype, "selectionOctree") || Object.defineProperty(dz.prototype, "selectionOctree", (0, tB.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(dz.prototype, "debugLayer") || Object.defineProperty(dz.prototype, "debugLayer", (0, tB.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(dz.prototype, "gamepadManager") || Object.defineProperty(dz.prototype, "gamepadManager", (0, tB.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(dz.prototype, "simplificationQueue") || Object.defineProperty(dz.prototype, "simplificationQueue", (0, tB.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(dz.prototype, "onBeforePhysicsObservable") || Object.defineProperty(dz.prototype, "onBeforePhysicsObservable", (0, tB.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(dz.prototype, "onAfterPhysicsObservable") || Object.defineProperty(dz.prototype, "onAfterPhysicsObservable", (0, tB.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(dz.prototype, "reflectionProbes") || Object.defineProperty(dz.prototype, "reflectionProbes", (0, tB.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(dz.prototype, "forceShowBoundingBoxes") || Object.defineProperty(dz.prototype, "forceShowBoundingBoxes", (0, tB.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(dz.prototype, "depthPeelingRenderer") || Object.defineProperty(dz.prototype, "depthPeelingRenderer", (0, tB.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(dz.prototype, "useOrderIndependentTransparency") || Object.defineProperty(dz.prototype, "useOrderIndependentTransparency", (0, tB.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(dz.prototype, "fluidRenderer") || Object.defineProperty(dz.prototype, "fluidRenderer", (0, tB.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(dz.prototype, "geometryBufferRenderer") || Object.defineProperty(dz.prototype, "geometryBufferRenderer", (0, tB.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(dz.prototype, "iblCdfGenerator") || Object.defineProperty(dz.prototype, "iblCdfGenerator", (0, tB.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(dz.prototype, "prePassRenderer") || Object.defineProperty(dz.prototype, "prePassRenderer", (0, tB.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(dz.prototype, "subSurfaceConfiguration") || Object.defineProperty(dz.prototype, "subSurfaceConfiguration", (0, tB.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(dz.prototype, "spriteManagers") || Object.defineProperty(dz.prototype, "spriteManagers", (0, tB.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(dz.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(dz.prototype, "onBeforeSpritesRenderingObservable", (0, tB.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(dz.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(dz.prototype, "onAfterSpritesRenderingObservable", (0, tB.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40247: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      d: () => nB
    });
    class QB {}
    QB.NAME_EFFECTLAYER = "EffectLayer", QB.NAME_LAYER = "Layer", QB.NAME_LENSFLARESYSTEM = "LensFlareSystem", QB.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", QB.NAME_PARTICLESYSTEM = "ParticleSystem", QB.NAME_GAMEPAD = "Gamepad", QB.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", QB.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", QB.NAME_PREPASSRENDERER = "PrePassRenderer", QB.NAME_DEPTHRENDERER = "DepthRenderer", QB.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", QB.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", QB.NAME_SPRITE = "Sprite", QB.NAME_SUBSURFACE = "SubSurface", QB.NAME_OUTLINERENDERER = "Outline", QB.NAME_PROCEDURALTEXTURE = "ProceduralTexture", QB.NAME_SHADOWGENERATOR = "ShadowGenerator", QB.NAME_OCTREE = "JQB", QB.NAME_PHYSICSENGINE = "PhysicsEngine", QB.NAME_AUDIO = "Audio", QB.NAME_FLUIDRENDERER = "FluidRenderer", QB.NAME_IBLCDFGENERATOR = "iblCDFGenerator", QB.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", QB.STEP_ISREADYFORMESH_EFFECTLAYER = 0, QB.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, QB.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, QB.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, QB.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, QB.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, QB.STEP_BEFORECAMERADRAW_PREPASS = 0, QB.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, QB.STEP_BEFORECAMERADRAW_LAYER = 2, QB.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, QB.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, QB.STEP_BEFORERENDERINGMESH_PREPASS = 0, QB.STEP_BEFORERENDERINGMESH_OUTLINE = 1, QB.STEP_AFTERRENDERINGMESH_PREPASS = 0, QB.STEP_AFTERRENDERINGMESH_OUTLINE = 1, QB.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, QB.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, QB.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, QB.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, QB.STEP_BEFORECLEAR_PREPASS = 1, QB.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, QB.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, QB.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, QB.STEP_AFTERCAMERADRAW_PREPASS = 0, QB.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, QB.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, QB.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, QB.STEP_AFTERCAMERADRAW_LAYER = 4, QB.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, QB.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, QB.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, QB.STEP_AFTERRENDER_AUDIO = 0, QB.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, QB.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, QB.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, QB.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, QB.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, QB.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, QB.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, QB.STEP_POINTERMOVE_SPRITE = 0, QB.STEP_POINTERDOWN_SPRITE = 0, QB.STEP_POINTERUP_SPRITE = 0;
    class nB extends Array {
      constructor(BB) {
        super(...BB)
      }
      static Create() {
        return Object.create(nB.prototype)
      }
      registerStep(BB, jB, zB) {
        let QB, nB = 0;
        for (; nB < this.length; nB++) {
          if (QB = this[nB].index, BB < QB) break
        }
        this.splice(nB, 0, {
          index: BB,
          component: jB,
          action: zB.bind(jB)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40066: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      d: () => NB,
      e: () => QB,
      g: () => nB,
      k: () => dB
    });

    function QB(BB, jB, zB, QB, nB, dB) {
      function IB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var NB, uB = QB.kind, UB = "getter" === uB ? "get" : "setter" === uB ? "set" : "value", aB = !jB && BB ? QB.static ? BB : BB.prototype : null, pB = jB || (aB ? Object.getOwnPropertyDescriptor(aB, QB.name) : {}), rB = !1, sB = zB.length - 1; sB >= 0; sB--) {
        var JB = {};
        for (var mB in QB) JB[mB] = "access" === mB ? {} : QB[mB];
        for (var mB in QB.access) JB.access[mB] = QB.access[mB];
        JB.addInitializer = function(BB) {
          if (rB) throw new TypeError("Cannot add initializers after decoration has completed");
          dB.push(IB(BB || null))
        };
        var yB = (0, zB[sB])("accessor" === uB ? {
          get: pB.get,
          set: pB.set
        } : pB[UB], JB);
        if ("accessor" === uB) {
          if (void 0 === yB) continue;
          if (null === yB || "object" !== typeof yB) throw new TypeError("Object expected");
          (NB = IB(yB.get)) && (pB.get = NB), (NB = IB(yB.set)) && (pB.set = NB), (NB = IB(yB.init)) && nB.unshift(NB)
        } else(NB = IB(yB)) && ("field" === uB ? nB.unshift(NB) : pB[UB] = NB)
      }
      aB && Object.defineProperty(aB, QB.name, pB), rB = !0
    }

    function nB(BB, jB, zB) {
      for (var QB = arguments.length > 2, nB = 0; nB < jB.length; nB++) zB = QB ? jB[nB].call(BB, zB) : jB[nB].call(BB);
      return QB ? zB : void 0
    }

    function dB(BB, jB, zB) {
      return "symbol" === typeof jB && (jB = jB.description ? "[".concat(jB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: zB ? "".concat(zB, " ", jB) : jB
      })
    }
    Object.create;
    Object.create;

    function IB(BB, jB, zB, QB) {
      if ("a" === zB && !QB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof jB ? BB !== jB || !QB : !jB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === zB ? QB : "a" === zB ? QB.call(BB) : QB ? QB.value : jB.get(BB)
    }

    function NB(BB, jB, zB, QB, nB) {
      if ("m" === QB) throw new TypeError("Private method is not writable");
      if ("a" === QB && !nB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof jB ? BB !== jB || !nB : !jB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === QB ? nB.call(BB, zB) : nB ? nB.value = zB : jB.set(BB, zB), zB
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);