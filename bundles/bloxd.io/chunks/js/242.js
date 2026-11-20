export const id = 242;
export const ids = [242];
export const modules = {
  39706: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      d: () => pu,
      g: () => Xu,
      h: () => Nu
    });
    var Eu = yu(39487),
      Ku = yu(38448),
      Qu = yu(39625),
      mu = yu(39531);
    class Ju {
      get wyu() {
        return this._isDisposed
      }
      constructor(uu, Ru, yu) {
        let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ju = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Nu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Xu = arguments.length > 7 ? arguments[7] : void 0,
          Vu = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, mu.d)(), uu && uu.lD ? this._engine = uu.lD().eS() : this._engine = uu, this._updatable = yu, this._instanced = Ju, this._divisor = Xu || 1, this._label = Vu, Ru instanceof Eu.c ? (this._data = null, this._buffer = Ru) : (this._data = Ru, this._buffer = null), this.byteStride = Nu ? Ku : Ku * Float32Array.BYTES_PER_ELEMENT, Qu || this.create()
      }
      createVertexBuffer(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          mu = arguments.length > 6 ? arguments[6] : void 0;
        const Ju = Qu ? Ru : Ru * Float32Array.BYTES_PER_ELEMENT,
          Xu = Eu ? Qu ? Eu : Eu * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Nu(this._engine, this, uu, this._updatable, !0, Xu, void 0 === Ku ? this._instanced : Ku, Ju, yu, void 0, void 0, !0, this._divisor || mu)
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
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !uu && this._buffer || (uu = uu || this._data, uu && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, uu), this._data = uu) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(uu, this._label), this._data = uu) : this._buffer = this._engine.createVertexBuffer(uu, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Nr > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Nr, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Nr, void 0, this._label));
          Ku.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(uu) {
        this.create(uu)
      }
      updateDirectly(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, uu, Eu ? Ru : Ru * Float32Array.BYTES_PER_ELEMENT, yu ? yu * this.byteStride : void 0), this._data = 0 === Ru && void 0 === yu ? uu : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Nu {
      get wyu() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(uu) {
        const Ru = 0 != uu;
        this._instanceDivisor = uu, Ru !== this._instanced && (this._instanced = Ru, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const uu = this.getData();
        return uu ? Array.isArray(uu) ? uu.length / (this.byteStride / 4) - this.byteOffset / 4 : (uu.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(uu, Ru, yu, Eu, Ku, mu, ru, Bu, xu, Su) {
        let pu, Tu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Wu = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          ju = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Hu = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = uu, "object" === typeof Eu && null !== Eu ? (pu = Eu.updatable ?? !1, Ku = Eu.postponeInternalCreation, mu = Eu.stride, ru = Eu.instanced, Bu = Eu.offset, xu = Eu.size, Su = Eu.type, Tu = Eu.normalized ?? !1, Wu = Eu.useBytes ?? !1, ju = Eu.divisor ?? 1, Hu = Eu.takeBufferOwnership ?? !1, this._label = Eu.label) : pu = !!Eu, Ru instanceof Ju ? (this._buffer = Ru, this._ownsBuffer = Hu) : (this._buffer = new Ju(uu, Ru, pu, mu, Ku, ru, Wu, ju, this._label), this._ownsBuffer = !0), this.uniqueId = Nu._Counter++, this._kind = yu, void 0 === Su) {
          const uu = this.getData();
          this.type = uu ? Vu(uu) : Nu.FLOAT
        } else this.type = Su;
        const du = (0, Qu.q)(this.type);
        Wu ? (this._size = xu || (mu ? mu / du : Xu(yu)), this.byteStride = mu || this._buffer.byteStride || this._size * du, this.byteOffset = Bu || 0) : (this._size = xu || mu || Xu(yu), this.byteStride = mu ? mu * du : this._buffer.byteStride || this._size * du, this.byteOffset = (Bu || 0) * du), this.normalized = Tu, this._instanced = void 0 !== ru && ru, this._instanceDivisor = ru ? ju : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(uu) {
        switch (uu) {
          case Nu.BYTE:
            return 0;
          case Nu.UNSIGNED_BYTE:
            return 1;
          case Nu.SHORT:
            return 2;
          case Nu.UNSIGNED_SHORT:
            return 3;
          case Nu.INT:
            return 4;
          case Nu.UNSIGNED_INT:
            return 5;
          case Nu.FLOAT:
            return 6;
          case Nu.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${uu}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Nu._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(uu, Ru) {
        const yu = this.getData();
        return yu ? (0, Qu.m)(yu, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, uu, Ru) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Qu.q)(this.type)
      }
      Gyu() {
        return this.byteOffset / (0, Qu.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Qu.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(uu) {
        this._buffer.create(uu), this._alignBuffer()
      }
      update(uu) {
        this._buffer.update(uu), this._alignBuffer()
      }
      updateDirectly(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(uu, Ru, void 0, yu), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(uu, Ru) {
        (0, Qu.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, uu, this.normalized, ((uu, yu) => {
          for (let Eu = 0; Eu < this._size; Eu++) Ru(uu[Eu], yu + Eu)
        }))
      }
      _alignBuffer() {}
    }

    function Xu(uu) {
      switch (uu) {
        case Nu.UVKind:
        case Nu.UV2Kind:
        case Nu.UV3Kind:
        case Nu.UV4Kind:
        case Nu.UV5Kind:
        case Nu.UV6Kind:
          return 2;
        case Nu.NormalKind:
        case Nu.PositionKind:
          return 3;
        case Nu.ColorKind:
        case Nu.ColorInstanceKind:
        case Nu.MatricesIndicesKind:
        case Nu.MatricesIndicesExtraKind:
        case Nu.MatricesWeightsKind:
        case Nu.MatricesWeightsExtraKind:
        case Nu.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + uu + "'")
      }
    }

    function Vu(uu) {
      return uu instanceof Int8Array ? Nu.BYTE : uu instanceof Uint8Array ? Nu.UNSIGNED_BYTE : uu instanceof Int16Array ? Nu.SHORT : uu instanceof Uint16Array ? Nu.UNSIGNED_SHORT : uu instanceof Int32Array ? Nu.INT : uu instanceof Uint32Array ? Nu.UNSIGNED_INT : Nu.FLOAT
    }

    function ru(uu) {
      return (0, Qu.q)(uu)
    }

    function Bu(uu, Ru, yu, Eu, Ku, mu, Ju, Nu) {
      (0, Qu.h)(uu, Ru, yu, Eu, Ku, mu, Ju, ((uu, Ru) => {
        for (let yu = 0; yu < Eu; yu++) Nu(uu[yu], Ru + yu)
      }))
    }

    function xu(uu, Ru, yu, Eu, Ku, mu, Ju, Nu) {
      return (0, Qu.m)(uu, Ru, yu, Eu, Ku, mu, Ju, Nu)
    }
    Nu._Counter = 0, Nu.BYTE = 5120, Nu.UNSIGNED_BYTE = 5121, Nu.SHORT = 5122, Nu.UNSIGNED_SHORT = 5123, Nu.INT = 5124, Nu.UNSIGNED_INT = 5125, Nu.FLOAT = 5126, Nu.HALF_FLOAT = 5131, Nu.PositionKind = "position", Nu.NormalKind = "normal", Nu.TangentKind = "tangent", Nu.UVKind = "uv", Nu.UV2Kind = "uv2", Nu.UV3Kind = "uv3", Nu.UV4Kind = "uv4", Nu.UV5Kind = "uv5", Nu.UV6Kind = "uv6", Nu.ColorKind = "color", Nu.ColorInstanceKind = "instanceColor", Nu.MatricesIndicesKind = "matricesIndices", Nu.MatricesWeightsKind = "matricesWeights", Nu.MatricesIndicesExtraKind = "matricesIndicesExtra", Nu.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Su = !1;

    function pu() {
      Su || (Su = !0, Nu.DeduceStride = Xu, Nu.GetDataType = Vu, Nu.GetTypeByteLength = ru, Nu.ForEach = Bu, Nu.GetFloatData = xu)
    }
  },
  39487: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Nr = 0, this.is32Bits = !1, this.uniqueId = Eu._Counter++
      }
    }
    Eu._Counter = 0
  },
  39698: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(36830),
      Ku = yu(39706);
    class Qu {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Ru && !this.pickedMesh.isVerticesDataPresent(Ku.h.NormalKind)) return null;
        let yu, Qu = this.pickedMesh.DEu();
        0 === Qu?.length && (Qu = null);
        const mu = Eu.m.MS[0],
          Ju = Eu.m.MS[1],
          Nu = Eu.m.MS[2];
        if (Ru) {
          const uu = this.pickedMesh.getVerticesData(Ku.h.NormalKind);
          let Ru = Qu ? Eu.p.FromArrayToRef(uu, 3 * Qu[3 * this.faceId], mu) : mu.muu(uu[3 * this.faceId * 3], uu[3 * this.faceId * 3 + 1], uu[3 * this.faceId * 3 + 2]),
            Xu = Qu ? Eu.p.FromArrayToRef(uu, 3 * Qu[3 * this.faceId + 1], Ju) : Ju.muu(uu[3 * (3 * this.faceId + 1)], uu[3 * (3 * this.faceId + 1) + 1], uu[3 * (3 * this.faceId + 1) + 2]),
            Vu = Qu ? Eu.p.FromArrayToRef(uu, 3 * Qu[3 * this.faceId + 2], Nu) : Nu.muu(uu[3 * (3 * this.faceId + 2)], uu[3 * (3 * this.faceId + 2) + 1], uu[3 * (3 * this.faceId + 2) + 2]);
          Ru = Ru.scale(this.bu), Xu = Xu.scale(this.bv), Vu = Vu.scale(1 - this.bu - this.bv), yu = new Eu.p(Ru.x + Xu.x + Vu.x, Ru.y + Xu.y + Vu.y, Ru.z + Xu.z + Vu.z)
        } else {
          const uu = this.pickedMesh.getVerticesData(Ku.h.PositionKind),
            Ru = Qu ? Eu.p.FromArrayToRef(uu, 3 * Qu[3 * this.faceId], mu) : mu.muu(uu[3 * this.faceId * 3], uu[3 * this.faceId * 3 + 1], uu[3 * this.faceId * 3 + 2]),
            Xu = Qu ? Eu.p.FromArrayToRef(uu, 3 * Qu[3 * this.faceId + 1], Ju) : Ju.muu(uu[3 * (3 * this.faceId + 1)], uu[3 * (3 * this.faceId + 1) + 1], uu[3 * (3 * this.faceId + 1) + 2]),
            Vu = Qu ? Eu.p.FromArrayToRef(uu, 3 * Qu[3 * this.faceId + 2], Nu) : Nu.muu(uu[3 * (3 * this.faceId + 2)], uu[3 * (3 * this.faceId + 2) + 1], uu[3 * (3 * this.faceId + 2) + 2]),
            ru = Ru.subtract(Xu),
            Bu = Vu.subtract(Xu);
          yu = Eu.p.Cross(ru, Bu)
        }
        const Xu = (uu, Ru) => {
          if (-1 !== this.thinInstanceIndex) {
            const yu = uu._thinInstanceDataStorage.matrixData,
              Ku = this.thinInstanceIndex << 4;
            if (yu && yu.length > Ku) {
              const uu = Eu.m.Matrix[0];
              Eu.d.FromArrayToRef(yu, Ku, uu), Eu.p.TransformNormalToRef(Ru, uu, Ru)
            }
          }
          let yu = uu.getWorldMatrix();
          uu.nonUniformScaling && (Eu.m.Matrix[0].Oyu(yu), yu = Eu.m.Matrix[0], yu.setTranslationFromFloats(0, 0, 0), yu.invert(), yu.transposeToRef(Eu.m.Matrix[1]), yu = Eu.m.Matrix[1]), Eu.p.TransformNormalToRef(Ru, yu, Ru)
        };
        if (uu && Xu(this.pickedMesh, yu), this.ray) {
          const Ru = Eu.m.MS[0].Oyu(yu);
          uu || Xu(this.pickedMesh, Ru), Eu.p.Dot(Ru, this.ray.direction) > 0 && yu.negateInPlace()
        }
        return yu.normalize(), yu
      }
      getTextureCoordinates() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ku.h.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(uu)) return null;
        const Ru = this.pickedMesh.DEu();
        if (!Ru) return null;
        const yu = this.pickedMesh.getVerticesData(uu);
        if (!yu) return null;
        let Qu = Eu.n.FromArray(yu, 2 * Ru[3 * this.faceId]),
          mu = Eu.n.FromArray(yu, 2 * Ru[3 * this.faceId + 1]),
          Ju = Eu.n.FromArray(yu, 2 * Ru[3 * this.faceId + 2]);
        return Qu = Qu.scale(this.bu), mu = mu.scale(this.bv), Ju = Ju.scale(1 - this.bu - this.bv), new Eu.n(Qu.x + mu.x + Ju.x, Qu.y + mu.y + Ju.y)
      }
    }
  },
  39531: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(39396);
    let Ku = !1;

    function Qu() {
      Ku || (Ku = !0, Eu.ThinEngine.prototype.updateDynamicIndexBuffer = function(uu, Ru) {
        let yu;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(uu), yu = uu.is32Bits ? Ru instanceof Uint32Array ? Ru : new Uint32Array(Ru) : Ru instanceof Uint16Array ? Ru : new Uint16Array(Ru), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, yu, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Eu.ThinEngine.prototype.updateDynamicVertexBuffer = function(uu, Ru, yu, Eu) {
        this.bindArrayBuffer(uu), void 0 === yu && (yu = 0);
        const Ku = Ru.byteLength || Ru.length;
        void 0 === Eu || Eu >= Ku && 0 === yu ? Ru instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, yu, new Float32Array(Ru)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, yu, Ru) : Ru instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, yu, new Float32Array(Ru).subarray(0, Eu / 4)) : (Ru = ArrayBuffer.isView(Ru) ? new Uint8Array(Ru.buffer, Ru.byteOffset, Eu) : new Uint8Array(Ru, 0, Eu), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, yu, Ru)), this._resetVertexBufferBinding()
      })
    }
  },
  39501: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Ru, !uu && (uu = Ru.createTexture(), !uu)) throw new Error("Unable to create webGL texture");
        this.set(uu)
      }
      setUsage() {}
      set(uu) {
        this._webGLTexture = uu
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(uu) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(uu)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const uu of this._MSAARenderBuffers) this._context.deleteRenderbuffer(uu);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[uu] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39455: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ju
    });
    var Eu = yu(36858),
      Ku = yu(39399),
      Qu = yu(36851),
      mu = yu(38448),
      Ju = yu(36849),
      Nu = yu(39458);
    class Xu {
      constructor() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, uu && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(uu) {
        this._zOffset !== uu && (this._zOffset = uu, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(uu) {
        this._zOffsetUnits !== uu && (this._zOffsetUnits = uu, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(uu) {
        this._cullFace !== uu && (this._cullFace = uu, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(uu) {
        this._cull !== uu && (this._cull = uu, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(uu) {
        this._depthFunc !== uu && (this._depthFunc = uu, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(uu) {
        this._depthMask !== uu && (this._depthMask = uu, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(uu) {
        this._depthTest !== uu && (this._depthTest = uu, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(uu) {
        this._frontFace !== uu && (this._frontFace = uu, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(uu) {
        this.isDirty && (this._isCullDirty && (this.cull ? uu.enable(uu.CULL_FACE) : uu.disable(uu.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (uu.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (uu.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? uu.enable(uu.DEPTH_TEST) : uu.disable(uu.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (uu.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (uu.enable(uu.POLYGON_OFFSET_FILL), uu.polygonOffset(this.zOffset, this.zOffsetUnits)) : uu.disable(uu.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (uu.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Vu {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(uu) {
        this._func !== uu && (this._func = uu, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(uu) {
        this._backFunc !== uu && (this._backFunc = uu, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(uu) {
        this._funcRef !== uu && (this._funcRef = uu, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(uu) {
        this._funcMask !== uu && (this._funcMask = uu, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(uu) {
        this._opStencilFail !== uu && (this._opStencilFail = uu, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(uu) {
        this._opDepthFail !== uu && (this._opDepthFail = uu, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(uu) {
        this._opStencilDepthPass !== uu && (this._opStencilDepthPass = uu, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(uu) {
        this._backOpStencilFail !== uu && (this._backOpStencilFail = uu, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(uu) {
        this._backOpDepthFail !== uu && (this._backOpDepthFail = uu, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(uu) {
        this._backOpStencilDepthPass !== uu && (this._backOpStencilDepthPass = uu, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(uu) {
        this._mask !== uu && (this._mask = uu, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(uu) {
        this._enabled !== uu && (this._enabled = uu, this._isStencilTestDirty = !0)
      }
      constructor() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, uu && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(uu) {
        if (!uu) return;
        const Ru = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Ru ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Ru ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Ru ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Ru ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Ru ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Ru ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Ru ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Ru ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Ru ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Ru ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Ru ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Ru ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? uu.enable(uu.STENCIL_TEST) : uu.disable(uu.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (uu.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (uu.stencilFuncSeparate(uu.FRONT, this.func, this.funcRef, this.funcMask), uu.stencilFuncSeparate(uu.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (uu.stencilOpSeparate(uu.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), uu.stencilOpSeparate(uu.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class ru {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = ru.ALWAYS, this.opStencilFail = ru.KEEP, this.opDepthFail = ru.KEEP, this.opStencilDepthPass = ru.REPLACE, this.backFunc = ru.ALWAYS, this.backOpStencilFail = ru.KEEP, this.backOpDepthFail = ru.KEEP, this.backOpStencilDepthPass = ru.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(uu) {
        this.func = uu
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(uu) {
        this.backFunc = uu
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(uu) {
        this.funcRef = uu
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(uu) {
        this.funcMask = uu
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(uu) {
        this.opStencilFail = uu
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(uu) {
        this.opDepthFail = uu
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(uu) {
        this.opStencilDepthPass = uu
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(uu) {
        this.backOpStencilFail = uu
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(uu) {
        this.backOpDepthFail = uu
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(uu) {
        this.backOpStencilDepthPass = uu
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(uu) {
        this.mask = uu
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(uu) {
        this.enabled = uu
      }
    }
    ru.ALWAYS = 519, ru.KEEP = 7680, ru.REPLACE = 7681;
    var Bu = yu(39463),
      xu = yu(39430),
      Su = yu(39385),
      pu = yu(39411),
      Tu = yu(39425);

    function Wu(uu, Ru) {
      if (Ru) {
        const {
          requestAnimationFrame: yu
        } = Ru;
        if ("function" === typeof yu) return yu(uu)
      }
      if ((0, pu.f)()) {
        const {
          requestAnimationFrame: yu
        } = Ru || window;
        if ("function" === typeof yu) return yu(uu)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(uu);
      return setTimeout(uu, 16)
    }
    class ju {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(uu) {
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
      get CEu() {
        return this._useReverseDepthBuffer
      }
      set CEu(uu) {
        uu !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = uu, this._depthCullingState.depthFunc = uu ? 518 : 515)
      }
      setColorWrite(uu) {
        uu !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = uu)
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
      _getGlobalDefines(uu) {
        if (uu) return this.isNDCHalfZRange ? uu.IS_NDC_HALF_ZRANGE = "" : delete uu.IS_NDC_HALF_ZRANGE, this.CEu ? uu.USE_REVERSE_DEPTHBUFFER = "" : delete uu.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? uu.USE_EXACT_SRGB_CONVERSIONS = "" : delete uu.USE_EXACT_SRGB_CONVERSIONS);
        {
          let uu = "";
          return this.isNDCHalfZRange && (uu += "#define IS_NDC_HALF_ZRANGE"), this.CEu && (uu && (uu += "\n"), uu += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (uu && (uu += "\n"), uu += "#define USE_EXACT_SRGB_CONVERSIONS"), uu
        }
      }
      _rebuildInternalTextures() {
        const uu = this._internalTexturesCache.slice();
        for (const Ru of uu) Ru._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const uu = this._renderTargetWrapperCache.slice();
        for (const Ru of uu) Ru.textures?.some((uu => 15 === uu.source)) || Ru._rebuild()
      }
      _rebuildEffects() {
        for (const uu in this._compiledEffects) {
          const Ru = this._compiledEffects[uu];
          Ru._pipelineContext = null, Ru._prepareEffect()
        }
        Ku.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        mu.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(uu) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Ru = this._depthCullingState.depthTest,
            yu = this._depthCullingState.depthFunc,
            Eu = this._depthCullingState.depthMask,
            Ku = this._stencilState.stencilTest;
          uu(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Ru, this._depthCullingState.depthFunc = yu, this._depthCullingState.depthMask = Eu, this._stencilState.stencilTest = Ku, this._flagContextRestored()
        }), 0)
      }
      get wyu() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(uu) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(uu) {}
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
          const uu = new Uint8Array(4),
            Ru = [uu, uu, uu, uu, uu, uu];
          this._emptyCubeTexture = this.createRawCubeTexture(Ru, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(uu) {
        this._framebufferDimensionsObject = uu
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(uu) {
        if (!uu) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Ru = this._activeRenderLoops.indexOf(uu);
        Ru >= 0 && (this._activeRenderLoops.splice(Ru, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: uu
            } = this.customAnimationFrameRequester;
            uu && uu(this.customAnimationFrameRequester.GS), delete this.customAnimationFrameRequester.GS
          }
        } else if (0 !== this._frameHandler) {
          const uu = this._frameHandler;
          if (this._frameHandler = 0, (0, pu.f)()) {
            const {
              cancelAnimationFrame: Ru
            } = this.getHostWindow() || window;
            if ("function" === typeof Ru) return Ru(uu)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(uu);
          return clearTimeout(uu)
        }
      }
      gH() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      ZH() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(uu) {
        this._maxFPS = uu, void 0 !== uu && (this._minFrameTime = uu <= 0 ? Number.MAX_VALUE : 1e3 / uu)
      }
      _isOverFrameTime(uu) {
        if (!uu || void 0 === this._maxFPS) return !1;
        const Ru = uu - this._lastFrameTime;
        return this._lastFrameTime = uu, this._renderAccumulator += Ru, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(uu) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(uu)) {
          let uu = !0;
          (this.wyu || !this.renderEvenInBackground && this._windowIsBackground) && (uu = !1), uu && (this.gH(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.ZH())
        }
      }
      _renderLoop(uu) {
        this._processFrame(uu), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let uu = 0; uu < this._activeRenderLoops.length; uu++) {
          (0, this._activeRenderLoops[uu])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(uu, Ru) {
        return Wu(uu, Ru)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.GS = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.GS) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(uu) {
        -1 === this._activeRenderLoops.indexOf(uu) && (this._activeRenderLoops.push(uu), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(uu) {
        this._depthCullingState.depthTest = uu
      }
      setZOffset(uu) {
        this._depthCullingState.zOffset = this.CEu ? -uu : uu
      }
      getZOffset() {
        const uu = this._depthCullingState.zOffset;
        return this.CEu ? -uu : uu
      }
      setZOffsetUnits(uu) {
        this._depthCullingState.zOffsetUnits = this.CEu ? -uu : uu
      }
      getZOffsetUnits() {
        const uu = this._depthCullingState.zOffsetUnits;
        return this.CEu ? -uu : uu
      }
      getHostWindow() {
        return (0, pu.f)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(uu) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const uu of this.scenes) uu._rebuildTextures();
        for (const uu of this._virtualScenes) uu._rebuildTextures()
      }
      _releaseRenderTargetWrapper(uu) {
        const Ru = this._renderTargetWrapperCache.indexOf(uu); - 1 !== Ru && this._renderTargetWrapperCache.splice(Ru, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(uu, Ru, yu) {
        const Eu = Ru || this.getRenderWidth(),
          Ku = yu || this.getRenderHeight(),
          Qu = uu.x || 0,
          mu = uu.y || 0;
        this._cachedViewport = uu, this._viewport(Qu * Eu, mu * Ku, Eu * uu.width, Ku * uu.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(uu) {
        return new Path2D(uu)
      }
      get description() {
        let uu = this.name + this.version;
        return this._caps.parallelShaderCompile && (uu += " - Parallel shader compilation"), uu
      }
      _createTextureBase(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ju = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Nu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Xu = arguments.length > 7 ? arguments[7] : void 0,
          Vu = arguments.length > 8 ? arguments[8] : void 0,
          ru = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Bu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          xu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          pu = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Tu = arguments.length > 13 ? arguments[13] : void 0,
          Wu = arguments.length > 14 ? arguments[14] : void 0,
          Hu = arguments.length > 15 ? arguments[15] : void 0;
        const du = "data:" === (uu = uu || "").substring(0, 5),
          bu = "blob:" === uu.substring(0, 5),
          Cu = du && -1 !== uu.indexOf(";base64,"),
          ku = Bu || new Su.c(this, 1);
        ku !== Bu && (ku.label = uu.substring(0, 60));
        const eu = uu;
        !this._transformTextureUrl || Cu || Bu || ru || (uu = this._transformTextureUrl(uu)), eu !== uu && (ku._originalUrl = eu);
        const Au = uu.lastIndexOf(".");
        let Du = pu || (Au > -1 ? uu.substring(Au).toLowerCase() : "");
        Du.indexOf("?") > -1 && (Du = Du.split("?")[0]);
        const Mu = ju.GetCompatibleTextureLoader(Du, Tu);
        Eu && Eu.addPendingData(ku), ku.url = uu, ku.generateMipMaps = !Ru, ku.samplingMode = Ku, ku.invertY = yu, ku._useSRGBBuffer = this._getUseSRGBBuffer(!!Hu, Ru), this._doNotHandleContextLost || (ku._buffer = ru);
        let Iu = null;
        Ju && !Bu && (Iu = ku.onLoadedObservable.add(Ju)), Bu || this._internalTexturesCache.push(ku);
        const Gu = (yu, Bu) => {
          Eu && Eu.removePendingData(ku), uu === eu ? (Iu && ku.onLoadedObservable.remove(Iu), Qu.b.UseFallbackTexture && uu !== Qu.b.FallbackTexture && this._createTextureBase(Qu.b.FallbackTexture, Ru, ku.invertY, Eu, Ku, null, Nu, Xu, Vu, ru, ku), yu = (yu || "Unknown error") + (Qu.b.UseFallbackTexture ? " - Fallback texture was used" : ""), ku.onErrorObservable.notifyObservers({
            message: yu,
            exception: Bu
          }), Nu && Nu(yu, Bu)) : (mu.e.Warn(`Failed to load ${uu}, falling back to ${eu}`), this._createTextureBase(eu, Ru, ku.invertY, Eu, Ku, Ju, Nu, Xu, Vu, ru, ku, xu, pu, Tu, Wu, Hu))
        };
        if (Mu) {
          const Ru = async uu => {
            (await Mu).loadData(uu, ku, ((uu, Ru, yu, Qu, mu, Ju) => {
              Ju ? Gu("TextureLoader failed to load data") : Xu(ku, Du, Eu, {
                width: uu,
                height: Ru
              }, ku.invertY, !yu, Qu, (() => (mu(), !1)), Ku)
            }), Wu)
          };
          if (ru) {
            const uu = async uu => {
              try {
                await Ru(uu)
              } catch (yu) {
                Gu("Failed to parse texture data", yu)
              }
            };
            ru instanceof ArrayBuffer ? uu(new Uint8Array(ru)) : ArrayBuffer.isView(ru) ? uu(ru) : Nu && Nu("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(uu, (async uu => {
            try {
              await Ru(new Uint8Array(uu))
            } catch (yu) {
              Gu("Failed to parse texture data", yu)
            }
          }), void 0, Eu ? Eu.offlineProvider : void 0, !0, ((uu, Ru) => {
            Gu("Unable to load " + (uu && uu.responseURL, Ru))
          }))
        } else {
          const yu = uu => {
            bu && !this._doNotHandleContextLost && (ku._buffer = uu), Xu(ku, Du, Eu, uu, ku.invertY, Ru, !1, Vu, Ku)
          };
          !du || Cu ? ru && ("string" === typeof ru.decoding || ru.close) ? yu(ru) : ju._FileToolsLoadImage(uu || "", yu, Gu, Eu ? Eu.offlineProvider : null, Tu, ku.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof ru || ru instanceof ArrayBuffer || ArrayBuffer.isView(ru) || ru instanceof Blob ? ju._FileToolsLoadImage(ru, yu, Gu, Eu ? Eu.offlineProvider : null, Tu, ku.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : ru && yu(ru)
        }
        return ku
      }
      _rebuildBuffers() {
        for (const uu of this._uniformBuffers) uu._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, pu.d)() ? document : null
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
        for (const uu in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, uu) && (this._boundTexturesCache[uu] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(uu) {
        this._name = uu
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
      setHardwareScalingLevel(uu) {
        this._hardwareScalingLevel = uu, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(uu) {
        this._doNotHandleContextLost = uu
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(uu, Ru, yu) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Xu, this._stencilStateComposer = new Vu, this._stencilState = new ru, this._alphaState = new Bu.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Eu.b, this.onCanvasFocusObservable = new Eu.b, this.onNewSceneAddedObservable = new Eu.b, this.onResizeObservable = new Eu.b, this.onCanvasPointerOutObservable = new Eu.b, this.onEffectErrorObservable = new Eu.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Eu.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = uu => this._renderLoop(uu), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Eu.b, this.onAfterShaderCompilationObservable = new Eu.b, this.onBeginFrameObservable = new Eu.b, this.onEndFrameObservable = new Eu.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Eu.b, this.onContextRestoredObservable = new Eu.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.zD = new Eu.b, this.onReleaseEffectsObservable = new Eu.b, Qu.b.Instances.push(this), this.startTime = Nu.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Ju.c.SetMatrixPrecision(!!Ru.useLargeWorldRendering || !!Ru.useHighPrecisionMatrix), (0, pu.e)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Ru.antialias = uu ?? Ru.antialias, Ru.deterministicLockstep = Ru.deterministicLockstep ?? !1, Ru.lockstepMaxSteps = Ru.lockstepMaxSteps ?? 4, Ru.timeStep = Ru.timeStep ?? 1 / 60, Ru.stencil = Ru.stencil ?? !0, this._audioContext = Ru.audioEngineOptions?.audioContext ?? null, this._audioDestination = Ru.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Ru.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Ru.doNotHandleContextLost, this._isStencilEnable = !!Ru.stencil, this.useExactSrgbConversions = Ru.useExactSrgbConversions ?? !1, this.canvasTabIndex = Ru.canvasTabIndex ?? this.canvasTabIndex;
        const Ku = (0, pu.f)() && window.devicePixelRatio || 1,
          mu = Ru.limitDeviceRatio || Ku;
        yu = yu || Ru.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = yu, this._hardwareScalingLevel = yu ? 1 / Math.min(mu, Ku) : 1, this._lastDevicePixelRatio = Ku, this._creationOptions = Ru
      }
      resize() {
        let uu, Ru, yu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const uu = (0, pu.f)() && window.devicePixelRatio || 1,
            Ru = this._lastDevicePixelRatio / uu;
          this._lastDevicePixelRatio = uu, this._hardwareScalingLevel *= Ru
        }
        if ((0, pu.f)() && (0, pu.d)())
          if (this._renderingCanvas) {
            const yu = this._renderingCanvas.getBoundingClientRect?.();
            uu = this._renderingCanvas.clientWidth || yu?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Ru = this._renderingCanvas.clientHeight || yu?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else uu = window.innerWidth, Ru = window.innerHeight;
        else uu = this._renderingCanvas ? this._renderingCanvas.width : 100, Ru = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(uu / this._hardwareScalingLevel, Ru / this._hardwareScalingLevel, yu)
      }
      setSize(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (uu |= 0, Ru |= 0, !yu && this._renderingCanvas.width === uu && this._renderingCanvas.height === Ru) return !1;
        if (this._renderingCanvas.width = uu, this._renderingCanvas.height = Ru, this.scenes) {
          for (let uu = 0; uu < this.scenes.length; uu++) {
            const Ru = this.scenes[uu];
            for (let uu = 0; uu < Ru.cameras.length; uu++) {
              Ru.cameras[uu]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru) {
        throw (0, xu.k)("engine.rawTexture")
      }
      createRawCubeTexture(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        throw (0, xu.k)("engine.rawTexture")
      }
      createRawTexture3D(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
        throw (0, xu.k)("engine.rawTexture")
      }
      createRawTexture2DArray(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru) {
        throw (0, xu.k)("engine.rawTexture")
      }
      _sharedInit(uu) {
        this._renderingCanvas = uu
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const uu = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== uu.indexOf("Mobile") || -1 !== uu.indexOf("Mac") && (0, pu.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, pu.f)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(uu) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(uu, !1)
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
      _createImageBitmapFromSource(uu, Ru) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(uu, Ru) {
        return createImageBitmap(uu, Ru)
      }
      resizeImageBitmap(uu, Ru, yu) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(uu) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(uu, Ru) {
        if ("undefined" === typeof document) return new OffscreenCanvas(uu, Ru);
        const yu = document.createElement("canvas");
        return yu.width = uu, yu.height = Ru, yu
      }
      createCanvas(uu, Ru) {
        return ju._CreateCanvas(uu, Ru)
      }
      static _FileToolsLoadImage(uu, Ru, yu, Eu, Ku, Qu, mu) {
        if (!Tu.c.loadImage) throw (0, xu.k)("FileTools");
        return Tu.c.loadImage(uu, Ru, yu, Eu, Ku, Qu, mu)
      }
      _loadFile(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = (0, Tu.i)(uu, Ru, yu, Eu, Ku, Qu);
        return this._activeRequests.push(mu), mu.onCompleteObservable.add((() => {
          const uu = this._activeRequests.indexOf(mu); - 1 !== uu && this._activeRequests.splice(uu, 1)
        })), mu
      }
      static _FileToolsLoadFile(uu, Ru, yu, Eu, Ku, Qu) {
        if (Tu.c.loadFile) return Tu.c.loadFile(uu, Ru, yu, Eu, Ku, Qu);
        throw (0, xu.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Ku.b.ResetCache();
        for (const Ru of this._activeRequests) Ru.abort();
        this._boundRenderFunction = null, this.zD.notifyObservers(this), this.zD.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, pu.f)() && window.removeEventListener("resize", this._checkForMobile);
        const uu = Qu.b.Instances.indexOf(this);
        uu >= 0 && Qu.b.Instances.splice(uu, 1), Qu.b.Instances.length || (Qu.b.OnEnginesDisposedObservable.notifyObservers(this), Qu.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(uu) {
        throw (0, xu.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(uu, Ru) {
        for (let yu = 0; yu < Qu.b.Instances.length; yu++) {
          const Eu = Qu.b.Instances[yu];
          for (let yu = 0; yu < Eu.scenes.length; yu++) Eu.scenes[yu].markAllMaterialsAsDirty(uu, Ru)
        }
      }
      static GetCompatibleTextureLoader(uu, Ru) {
        return null
      }
    }
    ju._RenderPassIdCounter = 0, ju._RescalePostProcessFactory = null, ju.CollisionsEpsilon = .001, ju.QueueNewFrame = Wu
  },
  39403: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.ShadersRepository : Eu.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.ShadersStore : Eu.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.IncludesShadersStore : Eu.IncludesShadersStoreWGSL
      }
    }
    Eu.ShadersRepository = "src/Shaders/", Eu.ShadersStore = {}, Eu.IncludesShadersStore = {}, Eu.ShadersRepositoryWGSL = "src/ShadersWGSL/", Eu.ShadersStoreWGSL = {}, Eu.IncludesShadersStoreWGSL = {}
  },
  39419: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      e: () => Hu,
      h: () => Su,
      i: () => xu,
      k: () => pu,
      o: () => ju,
      s: () => ru,
      u: () => Xu,
      w: () => Vu,
      y: () => Nu,
      z: () => Ju
    });
    class Eu {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(uu) {
        uu && this.program && uu(this.program)
      }
      setEngine(uu) {
        this.engine = uu
      }
      _fillEffectInformation(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = this.engine;
        if (Nu.supportsUniformBuffers)
          for (const Vu in Ru) uu.bindUniformBlock(Vu, Ru[Vu]);
        let Xu;
        for (this.engine.getUniforms(this, yu).forEach(((uu, Ru) => {
            Eu[yu[Ru]] = uu
          })), this._uniforms = Eu, Xu = 0; Xu < Ku.length; Xu++) {
          null == uu.getUniform(Ku[Xu]) && (Ku.splice(Xu, 1), Xu--)
        }
        Ku.forEach(((uu, Ru) => {
          Qu[uu] = Ru
        }));
        for (const Vu of Nu.getAttributes(this, mu)) Ju.push(Vu)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(uu, Ru) {
        const yu = this._valueCache[uu],
          Eu = Ru.updateFlag;
        if (void 0 !== yu && yu === Eu) return !1;
        const Ku = Ru.AEu();
        let Qu = this._matrixValueCache[uu];
        if (void 0 !== yu && null !== yu && void 0 !== Qu) {
          let Ru = !0;
          for (let uu = 15; uu >= 0; uu--)
            if (Qu[uu] !== Ku[uu]) {
              Ru = !1;
              break
            } if (Ru) return this._valueCache[uu] = Eu, !1
        }
        return void 0 === Qu && (Qu = this._matrixValueCache[uu] = new Float32Array(16)), Qu.set(Ku), this._valueCache[uu] = Eu, !0
      }
      _cacheFloat2(uu, Ru, yu) {
        let Eu = this._valueCache[uu];
        if (!Eu || 2 !== Eu.length) return Eu = [Ru, yu], this._valueCache[uu] = Eu, !0;
        let Ku = !1;
        return Eu[0] !== Ru && (Eu[0] = Ru, Ku = !0), Eu[1] !== yu && (Eu[1] = yu, Ku = !0), Ku
      }
      _cacheFloat3(uu, Ru, yu, Eu) {
        let Ku = this._valueCache[uu];
        if (!Ku || 3 !== Ku.length) return Ku = [Ru, yu, Eu], this._valueCache[uu] = Ku, !0;
        let Qu = !1;
        return Ku[0] !== Ru && (Ku[0] = Ru, Qu = !0), Ku[1] !== yu && (Ku[1] = yu, Qu = !0), Ku[2] !== Eu && (Ku[2] = Eu, Qu = !0), Qu
      }
      _cacheFloat4(uu, Ru, yu, Eu, Ku) {
        let Qu = this._valueCache[uu];
        if (!Qu || 4 !== Qu.length) return Qu = [Ru, yu, Eu, Ku], this._valueCache[uu] = Qu, !0;
        let mu = !1;
        return Qu[0] !== Ru && (Qu[0] = Ru, mu = !0), Qu[1] !== yu && (Qu[1] = yu, mu = !0), Qu[2] !== Eu && (Qu[2] = Eu, mu = !0), Qu[3] !== Ku && (Qu[3] = Ku, mu = !0), mu
      }
      setInt(uu, Ru) {
        const yu = this._valueCache[uu];
        void 0 !== yu && yu === Ru || this.engine.setInt(this._uniforms[uu], Ru) && (this._valueCache[uu] = Ru)
      }
      setInt2(uu, Ru, yu) {
        this._cacheFloat2(uu, Ru, yu) && (this.engine.setInt2(this._uniforms[uu], Ru, yu) || (this._valueCache[uu] = null))
      }
      setInt3(uu, Ru, yu, Eu) {
        this._cacheFloat3(uu, Ru, yu, Eu) && (this.engine.setInt3(this._uniforms[uu], Ru, yu, Eu) || (this._valueCache[uu] = null))
      }
      setInt4(uu, Ru, yu, Eu, Ku) {
        this._cacheFloat4(uu, Ru, yu, Eu, Ku) && (this.engine.setInt4(this._uniforms[uu], Ru, yu, Eu, Ku) || (this._valueCache[uu] = null))
      }
      setIntArray(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setIntArray(this._uniforms[uu], Ru)
      }
      setIntArray2(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setIntArray2(this._uniforms[uu], Ru)
      }
      setIntArray3(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setIntArray3(this._uniforms[uu], Ru)
      }
      setIntArray4(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setIntArray4(this._uniforms[uu], Ru)
      }
      setUInt(uu, Ru) {
        const yu = this._valueCache[uu];
        void 0 !== yu && yu === Ru || this.engine.setUInt(this._uniforms[uu], Ru) && (this._valueCache[uu] = Ru)
      }
      setUInt2(uu, Ru, yu) {
        this._cacheFloat2(uu, Ru, yu) && (this.engine.setUInt2(this._uniforms[uu], Ru, yu) || (this._valueCache[uu] = null))
      }
      setUInt3(uu, Ru, yu, Eu) {
        this._cacheFloat3(uu, Ru, yu, Eu) && (this.engine.setUInt3(this._uniforms[uu], Ru, yu, Eu) || (this._valueCache[uu] = null))
      }
      setUInt4(uu, Ru, yu, Eu, Ku) {
        this._cacheFloat4(uu, Ru, yu, Eu, Ku) && (this.engine.setUInt4(this._uniforms[uu], Ru, yu, Eu, Ku) || (this._valueCache[uu] = null))
      }
      setUIntArray(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setUIntArray(this._uniforms[uu], Ru)
      }
      setUIntArray2(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setUIntArray2(this._uniforms[uu], Ru)
      }
      setUIntArray3(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setUIntArray3(this._uniforms[uu], Ru)
      }
      setUIntArray4(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setUIntArray4(this._uniforms[uu], Ru)
      }
      setArray(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setArray(this._uniforms[uu], Ru)
      }
      setArray2(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setArray2(this._uniforms[uu], Ru)
      }
      setArray3(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setArray3(this._uniforms[uu], Ru)
      }
      setArray4(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setArray4(this._uniforms[uu], Ru)
      }
      setMatrices(uu, Ru) {
        Ru && (this._valueCache[uu] = null, this.engine.setMatrices(this._uniforms[uu], Ru))
      }
      setMatrix(uu, Ru) {
        this._cacheMatrix(uu, Ru) && (this.engine.setMatrices(this._uniforms[uu], Ru.AEu()) || (this._valueCache[uu] = null))
      }
      setMatrix3x3(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setMatrix3x3(this._uniforms[uu], Ru)
      }
      setMatrix2x2(uu, Ru) {
        this._valueCache[uu] = null, this.engine.setMatrix2x2(this._uniforms[uu], Ru)
      }
      setFloat(uu, Ru) {
        const yu = this._valueCache[uu];
        void 0 !== yu && yu === Ru || this.engine.setFloat(this._uniforms[uu], Ru) && (this._valueCache[uu] = Ru)
      }
      setVector2(uu, Ru) {
        this._cacheFloat2(uu, Ru.x, Ru.y) && (this.engine.setFloat2(this._uniforms[uu], Ru.x, Ru.y) || (this._valueCache[uu] = null))
      }
      setFloat2(uu, Ru, yu) {
        this._cacheFloat2(uu, Ru, yu) && (this.engine.setFloat2(this._uniforms[uu], Ru, yu) || (this._valueCache[uu] = null))
      }
      setVector3(uu, Ru) {
        this._cacheFloat3(uu, Ru.x, Ru.y, Ru.z) && (this.engine.setFloat3(this._uniforms[uu], Ru.x, Ru.y, Ru.z) || (this._valueCache[uu] = null))
      }
      setFloat3(uu, Ru, yu, Eu) {
        this._cacheFloat3(uu, Ru, yu, Eu) && (this.engine.setFloat3(this._uniforms[uu], Ru, yu, Eu) || (this._valueCache[uu] = null))
      }
      setVector4(uu, Ru) {
        this._cacheFloat4(uu, Ru.x, Ru.y, Ru.z, Ru.w) && (this.engine.setFloat4(this._uniforms[uu], Ru.x, Ru.y, Ru.z, Ru.w) || (this._valueCache[uu] = null))
      }
      setQuaternion(uu, Ru) {
        this._cacheFloat4(uu, Ru.x, Ru.y, Ru.z, Ru.w) && (this.engine.setFloat4(this._uniforms[uu], Ru.x, Ru.y, Ru.z, Ru.w) || (this._valueCache[uu] = null))
      }
      setFloat4(uu, Ru, yu, Eu, Ku) {
        this._cacheFloat4(uu, Ru, yu, Eu, Ku) && (this.engine.setFloat4(this._uniforms[uu], Ru, yu, Eu, Ku) || (this._valueCache[uu] = null))
      }
      setColor3(uu, Ru) {
        this._cacheFloat3(uu, Ru.r, Ru.g, Ru.b) && (this.engine.setFloat3(this._uniforms[uu], Ru.r, Ru.g, Ru.b) || (this._valueCache[uu] = null))
      }
      setColor4(uu, Ru, yu) {
        this._cacheFloat4(uu, Ru.r, Ru.g, Ru.b, yu) && (this.engine.setFloat4(this._uniforms[uu], Ru.r, Ru.g, Ru.b, yu) || (this._valueCache[uu] = null))
      }
      setDirectColor4(uu, Ru) {
        this._cacheFloat4(uu, Ru.r, Ru.g, Ru.b, Ru.a) && (this.engine.setFloat4(this._uniforms[uu], Ru.r, Ru.g, Ru.b, Ru.a) || (this._valueCache[uu] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Ku = yu(39425);
    const Qu = new WeakMap,
      mu = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Ju(uu) {
      let Ru = Qu.get(uu);
      if (!Ru) {
        if (!uu) return mu;
        Ru = {
          _webGLVersion: uu.TEXTURE_BINDING_3D ? 2 : 1,
          _context: uu,
          parallelShaderCompile: uu.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Qu.set(uu, Ru)
      }
      return Ru
    }

    function Nu(uu) {
      Qu.delete(uu)
    }

    function Xu(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = Ju(Eu);
      Qu || (Qu = mu._createShaderProgramInjection ?? Bu);
      return Qu(uu, Wu(Ru, "vertex", Eu, mu._contextWasLost), Wu(yu, "fragment", Eu, mu._contextWasLost), Eu, Ku, mu.validateShaderPrograms)
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mu = arguments.length > 6 ? arguments[6] : void 0;
      const Nu = Ju(Ku);
      mu || (mu = Nu._createShaderProgramInjection ?? Bu);
      const Xu = Nu._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return mu(uu, Tu(Ru, "vertex", Eu, Xu, Ku, Nu._contextWasLost), Tu(yu, "fragment", Eu, Xu, Ku, Nu._contextWasLost), Ku, Qu, Nu.validateShaderPrograms)
    }

    function ru(uu, Ru) {
      const yu = new Eu,
        Ku = Ju(uu);
      return Ku.parallelShaderCompile && !Ku.disableParallelShaderCompile && (yu.isParallelCompiled = !0), yu.context = Ku._context, yu
    }

    function Bu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 5 ? arguments[5] : void 0;
      const Qu = Eu.createProgram();
      if (uu.program = Qu, !Qu) throw new Error("Unable to create program");
      return Eu.attachShader(Qu, Ru), Eu.attachShader(Qu, yu), Eu.linkProgram(Qu), uu.context = Eu, uu.vertexShader = Ru, uu.fragmentShader = yu, uu.isParallelCompiled || Su(uu, Eu, Ku), Qu
    }

    function xu(uu, Ru, yu) {
      const Eu = uu;
      if (Eu._isDisposed) return !1;
      const Ku = Ju(Ru);
      return !!(Ku && Ku.parallelShaderCompile && Ku.parallelShaderCompile.COMPLETION_STATUS_KHR && Eu.program && Ru.getProgramParameter(Eu.program, Ku.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Su(Eu, Ru, yu), !0)
    }

    function Su(uu, Ru, yu) {
      const Eu = uu.context,
        Ku = uu.vertexShader,
        Qu = uu.fragmentShader,
        mu = uu.program;
      if (!Eu.getProgramParameter(mu, Eu.LINK_STATUS)) {
        if (!Ru.getShaderParameter(Ku, Ru.COMPILE_STATUS)) {
          const yu = Ru.getShaderInfoLog(Ku);
          if (yu) throw uu.vertexCompilationError = yu, new Error("VERTEX SHADER " + yu)
        }
        if (!Ru.getShaderParameter(Qu, Ru.COMPILE_STATUS)) {
          const yu = Ru.getShaderInfoLog(Qu);
          if (yu) throw uu.fragmentCompilationError = yu, new Error("FRAGMENT SHADER " + yu)
        }
        const yu = Eu.getProgramInfoLog(mu);
        if (yu) throw uu.programLinkError = yu, new Error(yu)
      }
      if (yu) {
        Eu.validateProgram(mu);
        if (!Eu.getProgramParameter(mu, Eu.VALIDATE_STATUS)) {
          const Ru = Eu.getProgramInfoLog(mu);
          if (Ru) throw uu.programValidationError = Ru, new Error(Ru)
        }
      }
      Eu.deleteShader(Ku), Eu.deleteShader(Qu), uu.vertexShader = void 0, uu.fragmentShader = void 0, uu.onCompiled && (uu.onCompiled(), uu.onCompiled = void 0)
    }

    function pu(uu, Ru, yu, Eu, Ku, Qu, mu, Nu, ru) {
      let Bu = arguments.length > 10 ? arguments[10] : void 0,
        xu = arguments.length > 11 ? arguments[11] : void 0,
        Su = arguments.length > 12 ? arguments[12] : void 0;
      const pu = Ju(uu.context);
      xu || (xu = pu.createRawShaderProgramInjection ?? Xu), Su || (Su = pu.createShaderProgramInjection ?? Vu);
      const Tu = uu;
      Tu.program = Eu ? xu(Tu, Ru, yu, Tu.context, ru) : Su(Tu, Ru, yu, Nu, Tu.context, ru), Tu.program.__SPECTOR_rebuildProgram = mu, Bu()
    }

    function Tu(uu, Ru, yu, Eu, Qu, mu) {
      return Wu((0, Ku.d)(uu, yu, Eu), Ru, Qu, mu)
    }

    function Wu(uu, Ru, yu, Eu) {
      const Ku = yu.createShader("vertex" === Ru ? yu.VERTEX_SHADER : yu.FRAGMENT_SHADER);
      if (!Ku) {
        let uu, Ku = yu.NO_ERROR;
        for (;
          (uu = yu.getError()) !== yu.NO_ERROR;) Ku = uu;
        throw new Error(`Something went wrong while creating a gl ${Ru} shader object. gl error=${Ku}, gl isContextLost=${yu.isContextLost()}, _contextWasLost=${Eu}`)
      }
      return yu.shaderSource(Ku, uu), yu.compileShader(Ku), Ku
    }

    function ju(uu, Ru) {
      Ru.useProgram(uu)
    }

    function Hu(uu, Ru) {
      const yu = uu;
      if (!yu.isParallelCompiled) return void Ru(uu);
      const Eu = yu.onCompiled;
      yu.onCompiled = () => {
        Eu?.(), Ru(uu)
      }
    }
  },
  39396: (uu, Ru, yu) => {
    yu.d(Ru, {
      ThinEngine: () => bu
    });
    var Eu = yu(39399),
      Ku = yu(39419),
      Qu = yu(39455),
      mu = yu(39471),
      Ju = yu(38448),
      Nu = yu(39411);
    class Xu {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(uu, Ru, yu, Eu, Ku) {
        if (Ku.drawBuffersExtensionDisabled) {
          const Ru = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          uu = uu.replace(Ru, "")
        }
        return uu
      }
    }
    const Vu = /(flat\s)?\s*varying\s*.*/;
    class ru {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(uu) {
        return uu.replace("attribute", "in")
      }
      varyingCheck(uu, Ru) {
        return Vu.test(uu)
      }
      varyingProcessor(uu, Ru) {
        return uu.replace("varying", Ru ? "in" : "out")
      }
      postProcessor(uu, Ru, yu) {
        const Eu = -1 !== uu.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (uu = (uu = uu.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), yu) {
          const yu = -1 !== uu.search(/layout *\(location *= *0\) *out/g),
            Ku = -1 !== Ru.indexOf("#define DUAL_SOURCE_BLENDING"),
            Qu = Ku ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Ku && (uu = "#extension GL_EXT_blend_func_extended : require\n" + uu), uu = (uu = (uu = (uu = (uu = (uu = (uu = uu.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Eu || yu ? "" : Qu) + "void main(")
        } else {
          Ru.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (uu = "invariant gl_Position;\n" + uu);
          if (-1 !== Ru.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + uu
        }
        return uu
      }
    }
    var Bu = yu(39480),
      xu = yu(39496),
      Su = yu(39501),
      pu = yu(39385),
      Tu = yu(39425),
      Wu = yu(39407),
      ju = yu(39506),
      Hu = yu(39463);
    class du {}
    class bu extends Qu.d {
      get name() {
        return this._name
      }
      set name(uu) {
        this._name = uu
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Eu.b.ShadersRepository
      }
      static set ShadersRepository(uu) {
        Eu.b.ShadersRepository = uu
      }
      get supportsUniformBuffers() {
        return this.Ep > 1 && !this.disableUniformBuffers
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
      constructor(uu, Ru, yu, Eu) {
        if (yu = yu || {}, super(Ru ?? yu.antialias, yu, Eu), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !uu) return;
        let Qu;
        if (uu.getContext) {
          if (Qu = uu, void 0 === yu.preserveDrawingBuffer && (yu.preserveDrawingBuffer = !1), void 0 === yu.xrCompatible && (yu.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const uu = navigator.userAgent;
            for (const Ru of bu.ExceptionList) {
              const Eu = Ru.key,
                Ku = Ru.targets;
              if (new RegExp(Eu).test(uu)) {
                if (Ru.capture && Ru.captureConstraint) {
                  const yu = Ru.capture,
                    Eu = Ru.captureConstraint,
                    Ku = new RegExp(yu).exec(uu);
                  if (Ku && Ku.length > 0) {
                    if (parseInt(Ku[Ku.length - 1]) >= Eu) continue
                  }
                }
                for (const uu of Ku) switch (uu) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    yu.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Ku.y)(this._gl)
            } : (this._onContextLost = uu => {
              uu.preventDefault(), this._contextWasLost = !0, (0, Ku.y)(this._gl), Ju.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Qu.addEventListener("webglcontextrestored", this._onContextRestored, !1), yu.powerPreference = yu.powerPreference || "high-performance"), Qu.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (yu.xrCompatible = !1), !yu.disableWebGL2Support) try {
            this._gl = Qu.getContext("webgl2", yu) || Qu.getContext("experimental-webgl2", yu), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Vu) {}
          if (!this._gl) {
            if (!Qu) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Qu.getContext("webgl", yu) || Qu.getContext("experimental-webgl", yu)
            } catch (Vu) {
              throw new Error("WebGL not supported", {
                cause: Vu
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = uu, Qu = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Ru = this._gl.getContextAttributes();
          Ru && (yu.stencil = Ru.stencil)
        }
        this._sharedInit(Qu), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== yu.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = yu.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Ku = 0; Ku < this._caps.maxVertexAttribs; Ku++) this._currentBufferPointers[Ku] = new du;
        this._shaderProcessor = this.Ep > 1 ? new ru : new Xu;
        const mu = `Babylon.js v${bu.Version}`;
        Ju.e.Log(mu + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", mu);
        const Nu = (0, Ku.z)(this._gl);
        Nu.validateShaderPrograms = this.validateShaderPrograms, Nu.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(uu) {
        return null
      }
      areAllEffectsReady() {
        for (const uu in this._compiledEffects) {
          if (!this._compiledEffects[uu].isReady()) return !1
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
        const uu = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != uu && (this._glRenderer = this._gl.getParameter(uu.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(uu.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Ru = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Ru, this._alphaState = new Hu.e(this._caps.blendParametersPerTarget), Ru && (this._gl.blendEquationSeparateIndexed = Ru.blendEquationSeparateiOES.bind(Ru), this._gl.blendEquationIndexed = Ru.blendEquationiOES.bind(Ru), this._gl.blendFuncSeparateIndexed = Ru.blendFuncSeparateiOES.bind(Ru), this._gl.blendFuncIndexed = Ru.blendFunciOES.bind(Ru), this._gl.colorMaskIndexed = Ru.colorMaskiOES.bind(Ru), this._gl.disableIndexed = Ru.disableiOES.bind(Ru), this._gl.enableIndexed = Ru.enableiOES.bind(Ru)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const uu = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== uu) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = uu.drawBuffersWEBGL.bind(uu), this._caps.maxDrawBuffers = this._gl.getParameter(uu.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Ru = 0; Ru < 16; Ru++) this._gl["COLOR_ATTACHMENT" + Ru + "_WEBGL"] = uu["COLOR_ATTACHMENT" + Ru + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const uu = this._gl.getExtension("WEBGL_depth_texture");
          null != uu && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = uu.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const uu = this._gl.getExtension("OES_vertex_array_object");
          null != uu && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = uu.createVertexArrayOES.bind(uu), this._gl.bindVertexArray = uu.bindVertexArrayOES.bind(uu), this._gl.deleteVertexArray = uu.deleteVertexArrayOES.bind(uu))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const uu = this._gl.getExtension("ANGLE_instanced_arrays");
          null != uu ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = uu.drawArraysInstancedANGLE.bind(uu), this._gl.drawElementsInstanced = uu.drawElementsInstancedANGLE.bind(uu), this._gl.vertexAttribDivisor = uu.vertexAttribDivisorANGLE.bind(uu)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const uu = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Ru = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (uu && Ru && (this._caps.highPrecisionShaderSupported = 0 !== uu.precision && 0 !== Ru.precision, this._caps.shaderFloatPrecision = Math.min(uu.precision, Ru.precision)), !this._shouldUseHighPrecisionShader) {
            const uu = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Ru = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            uu && Ru && (this._caps.shaderFloatPrecision = Math.min(uu.precision, Ru.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const uu = this._gl.getExtension("EXT_blend_minmax");
          null != uu && (this._caps.blendMinMax = !0, this._gl.MAX = uu.MAX_EXT, this._gl.MIN = uu.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const uu = this._gl.getExtension("EXT_sRGB");
            null != uu && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: uu.SRGB_EXT,
              SRGB8: uu.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: uu.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const uu = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== uu && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && uu)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let yu = 0; yu < this._maxSimultaneousTextures; yu++) this._nextFreeTextureSlots.push(yu);
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
      get Ep() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const uu = this._workingCanvas.getContext("2d");
        uu && (this._workingContext = uu)
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
        const uu = this.getGlInfo();
        return uu && uu.renderer ? uu.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Qu = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Qu;
        let mu = 0;
        if (Ru && uu) {
          let Ru = !0;
          if (this._currentRenderTarget) {
            const yu = this._currentRenderTarget.texture?.format;
            if (void 0 !== yu && (0, ju.g)(yu)) {
              const yu = this._currentRenderTarget.texture?.type;
              void 0 !== yu && (0, ju.h)(yu) ? (bu._TempClearColorUint32[0] = 255 * uu.r, bu._TempClearColorUint32[1] = 255 * uu.g, bu._TempClearColorUint32[2] = 255 * uu.b, bu._TempClearColorUint32[3] = 255 * uu.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, bu._TempClearColorUint32), Ru = !1) : (bu._TempClearColorInt32[0] = 255 * uu.r, bu._TempClearColorInt32[1] = 255 * uu.g, bu._TempClearColorInt32[2] = 255 * uu.b, bu._TempClearColorInt32[3] = 255 * uu.a, this._gl.clearBufferiv(this._gl.COLOR, 0, bu._TempClearColorInt32), Ru = !1)
            }
          }
          Ru && (this._gl.clearColor(uu.r, uu.g, uu.b, void 0 !== uu.a ? uu.a : 1), mu |= this._gl.COLOR_BUFFER_BIT)
        }
        yu && (this.CEu ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), mu |= this._gl.DEPTH_BUFFER_BIT), Eu && (this._gl.clearStencil(Ku), mu |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(mu)
      }
      _clearColorAttachment(uu, Ru, yu, Eu) {
        if ((0, ju.g)(yu)) {
          const yu = (0, ju.h)(Eu),
            Ku = yu ? bu._TempClearColorUint32 : bu._TempClearColorInt32;
          return Ku[0] = Ru.r, Ku[1] = Ru.g, Ku[2] = Ru.b, Ku[3] = Ru.a, void(yu ? this._gl.clearBufferuiv(this._gl.COLOR, uu, Ku) : this._gl.clearBufferiv(this._gl.COLOR, uu, Ku))
        }
        bu._TempClearColorFloat32[0] = Ru.r, bu._TempClearColorFloat32[1] = Ru.g, bu._TempClearColorFloat32[2] = Ru.b, bu._TempClearColorFloat32[3] = Ru.a, this._gl.clearBufferfv(this._gl.COLOR, uu, bu._TempClearColorFloat32)
      }
      _viewport(uu, Ru, yu, Eu) {
        uu === this._viewportCached.x && Ru === this._viewportCached.y && yu === this._viewportCached.z && Eu === this._viewportCached.w || (this._viewportCached.x = uu, this._viewportCached.y = Ru, this._viewportCached.z = yu, this._viewportCached.w = Eu, this._gl.viewport(uu, Ru, yu, Eu))
      }
      ZH() {
        super.ZH(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Nu = uu;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = uu, this._integerMRTAttachmentsMask = !uu.isMulti && uu.texture && (0, ju.g)(uu.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Nu._framebuffer);
        const Xu = this._gl;
        uu.isMulti || (uu.is2DArray || uu.is3D ? (Xu.framebufferTextureLayer(Xu.FRAMEBUFFER, Xu.COLOR_ATTACHMENT0, uu.texture._hardwareTexture?.underlyingResource, Qu, mu), Nu._currentLOD = Qu) : uu.isCube ? Xu.framebufferTexture2D(Xu.FRAMEBUFFER, Xu.COLOR_ATTACHMENT0, Xu.TEXTURE_CUBE_MAP_POSITIVE_X + Ru, uu.texture._hardwareTexture?.underlyingResource, Qu) : Nu._currentLOD !== Qu && (Xu.framebufferTexture2D(Xu.FRAMEBUFFER, Xu.COLOR_ATTACHMENT0, Xu.TEXTURE_2D, uu.texture._hardwareTexture?.underlyingResource, Qu), Nu._currentLOD = Qu));
        const Vu = uu._depthStencilTexture;
        if (Vu) {
          uu.is3D && (uu.texture.width === Vu.width && uu.texture.height === Vu.height && uu.texture.depth === Vu.depth || Ju.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const yu = uu._depthStencilTextureWithStencil ? Xu.DEPTH_STENCIL_ATTACHMENT : Xu.DEPTH_ATTACHMENT;
          uu.is2DArray || uu.is3D ? Xu.framebufferTextureLayer(Xu.FRAMEBUFFER, yu, Vu._hardwareTexture?.underlyingResource, Qu, mu) : uu.isCube ? Xu.framebufferTexture2D(Xu.FRAMEBUFFER, yu, Xu.TEXTURE_CUBE_MAP_POSITIVE_X + Ru, Vu._hardwareTexture?.underlyingResource, Qu) : Xu.framebufferTexture2D(Xu.FRAMEBUFFER, yu, Xu.TEXTURE_2D, Vu._hardwareTexture?.underlyingResource, Qu)
        }
        Nu._MSAAFramebuffer && this._bindUnboundFramebuffer(Nu._MSAAFramebuffer), this._cachedViewport && !Ku ? this.setViewport(this._cachedViewport, yu, Eu) : (yu || (yu = uu.width, Qu && (yu /= Math.pow(2, Qu))), Eu || (Eu = uu.height, Qu && (Eu /= Math.pow(2, Qu))), this._viewport(0, 0, yu, Eu)), this.wipeCaches()
      }
      setStateCullFaceType(uu, Ru) {
        const yu = this.cullBackFaces ?? uu ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== yu || Ru) && (this._depthCullingState.cullFace = yu)
      }
      setState(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== uu || yu) && (this._depthCullingState.cull = uu), this.setStateCullFaceType(Ku, yu), this.setZOffset(Ru), this.setZOffsetUnits(mu);
        const Ju = Eu ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Ju || yu) && (this._depthCullingState.frontFace = Ju), this._stencilStateComposer.stencilMaterial = Qu
      }
      _resolveAndGenerateMipMapsFramebuffer(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        uu.disableAutomaticMSAAResolve || (uu.isMulti ? this.resolveMultiFramebuffer(uu) : this.resolveFramebuffer(uu)), Ru || (uu.isMulti ? this.generateMipMapsMultiFramebuffer(uu) : this.generateMipMapsFramebuffer(uu))
      }
      _bindUnboundFramebuffer(uu) {
        this._currentFramebuffer !== uu && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, uu), this._currentFramebuffer = uu)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(uu) {
        const Ru = this._getTextureTarget(uu);
        this._bindTextureDirectly(Ru, uu, !0), this._gl.generateMipmap(Ru), this._bindTextureDirectly(Ru, null)
      }
      unBindFramebuffer(uu, Ru, yu) {
        const Eu = uu;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(uu, Ru), yu && (Eu._MSAAFramebuffer && this._bindUnboundFramebuffer(Eu._framebuffer), yu()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(uu) {
        uu.isMulti || !uu.texture?.generateMipMaps || uu.isCube || this.generateMipmaps(uu.texture)
      }
      resolveFramebuffer(uu) {
        const Ru = uu,
          yu = this._gl;
        if (!Ru._MSAAFramebuffer || Ru.isMulti) return;
        let Eu = Ru.resolveMSAAColors ? yu.COLOR_BUFFER_BIT : 0;
        Eu |= Ru._generateDepthBuffer && Ru.resolveMSAADepth ? yu.DEPTH_BUFFER_BIT : 0, Eu |= Ru._generateStencilBuffer && Ru.resolveMSAAStencil ? yu.STENCIL_BUFFER_BIT : 0, yu.bindFramebuffer(yu.READ_FRAMEBUFFER, Ru._MSAAFramebuffer), yu.bindFramebuffer(yu.DRAW_FRAMEBUFFER, Ru._framebuffer), yu.blitFramebuffer(0, 0, uu.width, uu.height, 0, 0, uu.width, uu.height, Eu, yu.NEAREST)
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
      createVertexBuffer(uu, Ru, yu) {
        return this._createVertexBuffer(uu, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(uu, Ru) {
        const yu = this._gl.createBuffer();
        if (!yu) throw new Error("Unable to create vertex buffer");
        const Eu = new Bu.d(yu);
        return this.bindArrayBuffer(Eu), "number" !== typeof uu ? uu instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(uu), Ru), Eu.Nr = 4 * uu.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, uu, Ru), Eu.Nr = uu.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(uu), Ru), Eu.Nr = uu), this._resetVertexBufferBinding(), Eu.references = 1, Eu
      }
      createDynamicVertexBuffer(uu, Ru) {
        return this._createVertexBuffer(uu, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(uu, Ru, yu) {
        const Eu = this._gl.createBuffer(),
          Ku = new Bu.d(Eu);
        if (!Eu) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Ku);
        const Qu = this._normalizeIndexData(uu);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Qu, Ru ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Ku.references = 1, Ku.is32Bits = 4 === Qu.BYTES_PER_ELEMENT, Ku
      }
      _normalizeIndexData(uu) {
        if (2 === uu.BYTES_PER_ELEMENT) return uu;
        if (this._caps.uintIndices) {
          if (uu instanceof Uint32Array) return uu;
          for (let Ru = 0; Ru < uu.length; Ru++)
            if (uu[Ru] >= 65535) return new Uint32Array(uu);
          return new Uint16Array(uu)
        }
        return new Uint16Array(uu)
      }
      bindArrayBuffer(uu) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(uu, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(uu, Ru, yu) {
        const Eu = uu.program,
          Ku = this._gl.getUniformBlockIndex(Eu, Ru);
        this._gl.uniformBlockBinding(Eu, Ku, yu)
      }
      bindIndexBuffer(uu) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(uu, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(uu, Ru) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Ru] !== uu) && (this._gl.bindBuffer(Ru, uu ? uu.underlyingResource : null), this._currentBoundBuffer[Ru] = uu)
      }
      updateArrayBuffer(uu) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, uu)
      }
      _vertexAttribPointer(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = this._currentBufferPointers[Ru];
        if (!Ju) return;
        let Nu = !1;
        Ju.active ? (Ju.buffer !== uu && (Ju.buffer = uu, Nu = !0), Ju.size !== yu && (Ju.size = yu, Nu = !0), Ju.type !== Eu && (Ju.type = Eu, Nu = !0), Ju.normalized !== Ku && (Ju.normalized = Ku, Nu = !0), Ju.stride !== Qu && (Ju.stride = Qu, Nu = !0), Ju.offset !== mu && (Ju.offset = mu, Nu = !0)) : (Nu = !0, Ju.active = !0, Ju.index = Ru, Ju.size = yu, Ju.type = Eu, Ju.normalized = Ku, Ju.stride = Qu, Ju.offset = mu, Ju.buffer = uu), (Nu || this._vaoRecordInProgress) && (this.bindArrayBuffer(uu), Eu === this._gl.UNSIGNED_INT || Eu === this._gl.INT ? this._gl.vertexAttribIPointer(Ru, yu, Eu, Qu, mu) : this._gl.vertexAttribPointer(Ru, yu, Eu, Ku, Qu, mu))
      }
      _bindIndexBufferWithCache(uu) {
        null != uu && this._cachedIndexBuffer !== uu && (this._cachedIndexBuffer = uu, this.bindIndexBuffer(uu), this._uintIndicesCurrentlySet = uu.is32Bits)
      }
      _bindVertexBuffersAttributes(uu, Ru, yu) {
        const Eu = Ru.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Ku = 0; Ku < Eu.length; Ku++) {
          const Qu = Ru.getAttributeLocation(Ku);
          if (Qu >= 0) {
            const Ru = Eu[Ku];
            let mu = null;
            if (yu && (mu = yu[Ru]), mu || (mu = uu[Ru]), !mu) continue;
            this._gl.enableVertexAttribArray(Qu), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Qu] = !0);
            const Ju = mu.getBuffer();
            Ju && (this._vertexAttribPointer(Ju, Qu, mu.getSize(), mu.type, mu.normalized, mu.byteStride, mu.byteOffset), mu.getIsInstanced() && (this._gl.vertexAttribDivisor(Qu, mu.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Qu), this._currentInstanceBuffers.push(Ju))))
          }
        }
      }
      recordVertexArrayObject(uu, Ru, yu, Eu) {
        const Ku = this._gl.createVertexArray();
        if (!Ku) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Ku), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(uu, yu, Eu), this.bindIndexBuffer(Ru), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Ku
      }
      bindVertexArrayObject(uu, Ru) {
        this._cachedVertexArrayObject !== uu && (this._cachedVertexArrayObject = uu, this._gl.bindVertexArray(uu), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Ru && Ru.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(uu, Ru, yu, Eu, Ku) {
        if (this._cachedVertexBuffers !== uu || this._cachedEffectForVertexBuffers !== Ku) {
          this._cachedVertexBuffers = uu, this._cachedEffectForVertexBuffers = Ku;
          const Ru = Ku.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Qu = 0;
          for (let mu = 0; mu < Ru; mu++)
            if (mu < yu.length) {
              const Ru = Ku.getAttributeLocation(mu);
              Ru >= 0 && (this._gl.enableVertexAttribArray(Ru), this._vertexAttribArraysEnabled[Ru] = !0, this._vertexAttribPointer(uu, Ru, yu[mu], this._gl.FLOAT, !1, Eu, Qu)), Qu += 4 * yu[mu]
            }
        }
        this._bindIndexBufferWithCache(Ru)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(uu, Ru, yu, Eu) {
        this._cachedVertexBuffers === uu && this._cachedEffectForVertexBuffers === yu || (this._cachedVertexBuffers = uu, this._cachedEffectForVertexBuffers = yu, this._bindVertexBuffersAttributes(uu, yu, Eu)), this._bindIndexBufferWithCache(Ru)
      }
      unbindInstanceAttributes() {
        let uu;
        for (let Ru = 0, yu = this._currentInstanceLocations.length; Ru < yu; Ru++) {
          const yu = this._currentInstanceBuffers[Ru];
          uu != yu && yu.references && (uu = yu, this.bindArrayBuffer(yu));
          const Eu = this._currentInstanceLocations[Ru];
          this._gl.vertexAttribDivisor(Eu, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(uu) {
        this._gl.deleteVertexArray(uu)
      }
      _releaseBuffer(uu) {
        return uu.references--, 0 === uu.references && (this._deleteBuffer(uu), !0)
      }
      _deleteBuffer(uu) {
        this._gl.deleteBuffer(uu.underlyingResource)
      }
      updateAndBindInstancesBuffer(uu, Ru, yu) {
        if (this.bindArrayBuffer(uu), Ru && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Ru), void 0 !== yu[0].index) this.bindInstancesBuffer(uu, yu, !0);
        else
          for (let Eu = 0; Eu < 4; Eu++) {
            const Ru = yu[Eu];
            this._vertexAttribArraysEnabled[Ru] || (this._gl.enableVertexAttribArray(Ru), this._vertexAttribArraysEnabled[Ru] = !0), this._vertexAttribPointer(uu, Ru, 4, this._gl.FLOAT, !1, 64, 16 * Eu), this._gl.vertexAttribDivisor(Ru, 1), this._currentInstanceLocations.push(Ru), this._currentInstanceBuffers.push(uu)
          }
      }
      bindInstancesBuffer(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(uu);
        let Eu = 0;
        if (yu)
          for (let Ku = 0; Ku < Ru.length; Ku++) {
            Eu += 4 * Ru[Ku].attributeSize
          }
        for (let Ku = 0; Ku < Ru.length; Ku++) {
          const yu = Ru[Ku];
          void 0 === yu.index && (yu.index = this._currentEffect.getAttributeLocationByName(yu.attributeName)), yu.index < 0 || (this._vertexAttribArraysEnabled[yu.index] || (this._gl.enableVertexAttribArray(yu.index), this._vertexAttribArraysEnabled[yu.index] = !0), this._vertexAttribPointer(uu, yu.index, yu.attributeSize, yu.attributeType || this._gl.FLOAT, yu.normalized || !1, Eu, yu.offset), this._gl.vertexAttribDivisor(yu.index, void 0 === yu.divisor ? 1 : yu.divisor), this._currentInstanceLocations.push(yu.index), this._currentInstanceBuffers.push(uu))
        }
      }
      disableInstanceAttributeByName(uu) {
        if (!this._currentEffect) return;
        const Ru = this._currentEffect.getAttributeLocationByName(uu);
        this.disableInstanceAttribute(Ru)
      }
      disableInstanceAttribute(uu) {
        let Ru, yu = !1;
        for (; - 1 !== (Ru = this._currentInstanceLocations.indexOf(uu));) this._currentInstanceLocations.splice(Ru, 1), this._currentInstanceBuffers.splice(Ru, 1), yu = !0;
        yu && (this._gl.vertexAttribDivisor(uu, 0), this.disableAttributeByIndex(uu))
      }
      disableAttributeByIndex(uu) {
        this._gl.disableVertexAttribArray(uu), this._vertexAttribArraysEnabled[uu] = !1, this._currentBufferPointers[uu].active = !1
      }
      draw(uu, Ru, yu, Eu) {
        this.drawElementsType(uu ? 0 : 1, Ru, yu, Eu)
      }
      drawPointClouds(uu, Ru, yu) {
        this.drawArraysType(2, uu, Ru, yu)
      }
      drawUnIndexed(uu, Ru, yu, Eu) {
        this.drawArraysType(uu ? 0 : 1, Ru, yu, Eu)
      }
      drawElementsType(uu, Ru, yu, Eu) {
        this.applyStates(), this._reportDrawCall();
        const Ku = this._drawMode(uu),
          Qu = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          mu = this._uintIndicesCurrentlySet ? 4 : 2;
        Eu ? this._gl.drawElementsInstanced(Ku, yu, Qu, Ru * mu, Eu) : this._gl.drawElements(Ku, yu, Qu, Ru * mu)
      }
      drawArraysType(uu, Ru, yu, Eu) {
        this.applyStates(), this._reportDrawCall();
        const Ku = this._drawMode(uu);
        Eu ? this._gl.drawArraysInstanced(Ku, Ru, yu, Eu) : this._gl.drawArrays(Ku, Ru, yu)
      }
      _drawMode(uu) {
        switch (uu) {
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
      _releaseEffect(uu) {
        this._compiledEffects[uu._key] && delete this._compiledEffects[uu._key];
        const Ru = uu.getPipelineContext();
        Ru && this._deletePipelineContext(Ru)
      }
      _deletePipelineContext(uu) {
        const Ru = uu;
        Ru && Ru.program && (Ru.program.__SPECTOR_rebuildProgram = null, (0, Wu.m)(Ru), this._gl && (this._currentProgram === Ru.program && this._setProgram(null), this._gl.deleteProgram(Ru.program)))
      }
      _getGlobalDefines(uu) {
        return (0, Tu.e)(uu, this.isNDCHalfZRange, this.CEu, this.useExactSrgbConversions)
      }
      createEffect(uu, Ru, yu, Qu, mu, Ju, Nu, Xu, Vu) {
        let ru = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Bu = arguments.length > 10 ? arguments[10] : void 0;
        const xu = "string" === typeof uu ? uu : uu.vertexToken || uu.vertexSource || uu.vertexElement || uu.vertex,
          Su = "string" === typeof uu ? uu : uu.fragmentToken || uu.fragmentSource || uu.fragmentElement || uu.fragment,
          pu = this._getGlobalDefines(),
          Tu = void 0 !== Ru.attributes;
        let Wu = mu ?? Ru.defines ?? "";
        pu && (Wu += pu);
        const ju = xu + "+" + Su + "@" + Wu;
        if (this._compiledEffects[ju]) {
          const uu = this._compiledEffects[ju];
          return Nu && uu.isReady() && Nu(uu), uu._refCount++, uu
        }
        this._gl && (0, Ku.z)(this._gl);
        const Hu = new Eu.b(uu, Ru, Tu ? this : yu, Qu, this, mu, Ju, Nu, Xu, Vu, ju, Ru.shaderLanguage ?? ru, Ru.extraInitializationsAsync ?? Bu);
        return this._compiledEffects[ju] = Hu, Hu
      }
      _getShaderSource(uu) {
        return this._gl.getShaderSource(uu)
      }
      createRawShaderProgram(uu, Ru, yu, Eu) {
        let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const mu = (0, Ku.z)(this._gl);
        return mu._contextWasLost = this._contextWasLost, mu.validateShaderPrograms = this.validateShaderPrograms, (0, Ku.u)(uu, Ru, yu, Eu || this._gl, Qu)
      }
      createShaderProgram(uu, Ru, yu, Eu, Qu) {
        let mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Ju = (0, Ku.z)(this._gl);
        return Ju._contextWasLost = this._contextWasLost, Ju.validateShaderPrograms = this.validateShaderPrograms, (0, Ku.w)(uu, Ru, yu, Eu, Qu || this._gl, mu)
      }
      inlineShaderCode(uu) {
        return uu
      }
      createPipelineContext(uu) {
        if (this._gl) {
          (0, Ku.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Ru = (0, Ku.s)(this._gl, uu);
        return Ru.engine = this, Ru
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(uu) {
        return (0, Ku.h)(uu, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(uu, Ru, yu, Eu, Qu, mu, Ju, Nu, Xu, Vu, ru) {
        const Bu = (0, Ku.z)(this._gl);
        return Bu._contextWasLost = this._contextWasLost, Bu.validateShaderPrograms = this.validateShaderPrograms, Bu._createShaderProgramInjection = this._createShaderProgram.bind(this), Bu.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Bu.createShaderProgramInjection = this.createShaderProgram.bind(this), Bu.loadFileInjection = this._loadFile.bind(this), (0, Ku.k)(uu, Ru, yu, Eu, Qu, mu, Ju, Nu, Xu, Vu, ru)
      }
      _createShaderProgram(uu, Ru, yu, Eu) {
        let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Ku.d)(uu, Ru, yu, Eu, Qu)
      }
      _isRenderingStateCompiled(uu) {
        return !this._isDisposed && (0, Ku.i)(uu, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(uu, Ru) {
        (0, Ku.e)(uu, Ru)
      }
      getUniforms(uu, Ru) {
        const yu = new Array,
          Eu = uu;
        for (let Ku = 0; Ku < Ru.length; Ku++) yu.push(this._gl.getUniformLocation(Eu.program, Ru[Ku]));
        return yu
      }
      getAttributes(uu, Ru) {
        const yu = [],
          Eu = uu;
        for (let Qu = 0; Qu < Ru.length; Qu++) try {
          yu.push(this._gl.getAttribLocation(Eu.program, Ru[Qu]))
        } catch (Ku) {
          yu.push(-1)
        }
        return yu
      }
      enableEffect(uu) {
        (uu = null !== uu && (0, mu.c)(uu) ? uu.effect : uu) && uu !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(uu), this._currentEffect = uu, uu.onBind && uu.onBind(uu), uu._onBindObservable && uu._onBindObservable.notifyObservers(uu))
      }
      setInt(uu, Ru) {
        return !!uu && (this._gl.uniform1i(uu, Ru), !0)
      }
      setInt2(uu, Ru, yu) {
        return !!uu && (this._gl.uniform2i(uu, Ru, yu), !0)
      }
      setInt3(uu, Ru, yu, Eu) {
        return !!uu && (this._gl.uniform3i(uu, Ru, yu, Eu), !0)
      }
      setInt4(uu, Ru, yu, Eu, Ku) {
        return !!uu && (this._gl.uniform4i(uu, Ru, yu, Eu, Ku), !0)
      }
      setIntArray(uu, Ru) {
        return !!uu && (this._gl.uniform1iv(uu, Ru), !0)
      }
      setIntArray2(uu, Ru) {
        return !(!uu || Ru.length % 2 !== 0) && (this._gl.uniform2iv(uu, Ru), !0)
      }
      setIntArray3(uu, Ru) {
        return !(!uu || Ru.length % 3 !== 0) && (this._gl.uniform3iv(uu, Ru), !0)
      }
      setIntArray4(uu, Ru) {
        return !(!uu || Ru.length % 4 !== 0) && (this._gl.uniform4iv(uu, Ru), !0)
      }
      setUInt(uu, Ru) {
        return !!uu && (this._gl.uniform1ui(uu, Ru), !0)
      }
      setUInt2(uu, Ru, yu) {
        return !!uu && (this._gl.uniform2ui(uu, Ru, yu), !0)
      }
      setUInt3(uu, Ru, yu, Eu) {
        return !!uu && (this._gl.uniform3ui(uu, Ru, yu, Eu), !0)
      }
      setUInt4(uu, Ru, yu, Eu, Ku) {
        return !!uu && (this._gl.uniform4ui(uu, Ru, yu, Eu, Ku), !0)
      }
      setUIntArray(uu, Ru) {
        return !!uu && (this._gl.uniform1uiv(uu, Ru), !0)
      }
      setUIntArray2(uu, Ru) {
        return !(!uu || Ru.length % 2 !== 0) && (this._gl.uniform2uiv(uu, Ru), !0)
      }
      setUIntArray3(uu, Ru) {
        return !(!uu || Ru.length % 3 !== 0) && (this._gl.uniform3uiv(uu, Ru), !0)
      }
      setUIntArray4(uu, Ru) {
        return !(!uu || Ru.length % 4 !== 0) && (this._gl.uniform4uiv(uu, Ru), !0)
      }
      setArray(uu, Ru) {
        return !!uu && (!(Ru.length < 1) && (this._gl.uniform1fv(uu, Ru), !0))
      }
      setArray2(uu, Ru) {
        return !(!uu || Ru.length % 2 !== 0) && (this._gl.uniform2fv(uu, Ru), !0)
      }
      setArray3(uu, Ru) {
        return !(!uu || Ru.length % 3 !== 0) && (this._gl.uniform3fv(uu, Ru), !0)
      }
      setArray4(uu, Ru) {
        return !(!uu || Ru.length % 4 !== 0) && (this._gl.uniform4fv(uu, Ru), !0)
      }
      setMatrices(uu, Ru) {
        return !!uu && (this._gl.uniformMatrix4fv(uu, !1, Ru), !0)
      }
      setMatrix3x3(uu, Ru) {
        return !!uu && (this._gl.uniformMatrix3fv(uu, !1, Ru), !0)
      }
      setMatrix2x2(uu, Ru) {
        return !!uu && (this._gl.uniformMatrix2fv(uu, !1, Ru), !0)
      }
      setFloat(uu, Ru) {
        return !!uu && (this._gl.uniform1f(uu, Ru), !0)
      }
      setFloat2(uu, Ru, yu) {
        return !!uu && (this._gl.uniform2f(uu, Ru, yu), !0)
      }
      setFloat3(uu, Ru, yu, Eu) {
        return !!uu && (this._gl.uniform3f(uu, Ru, yu, Eu), !0)
      }
      setFloat4(uu, Ru, yu, Eu, Ku) {
        return !!uu && (this._gl.uniform4f(uu, Ru, yu, Eu, Ku), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const uu = this._colorWrite;
          this._gl.colorMask(uu, uu, uu, uu)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(uu) {
        this.preventCacheWipeBetweenFrames && !uu || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), uu && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(uu, Ru) {
        const yu = this._gl;
        let Eu = yu.NEAREST,
          Ku = yu.NEAREST,
          Qu = !1;
        switch (uu) {
          case 11:
            Eu = yu.LINEAR, Ku = Ru ? yu.LINEAR_MIPMAP_NEAREST : yu.LINEAR;
            break;
          case 3:
            Eu = yu.LINEAR, Qu = !0, Ku = Ru ? yu.LINEAR_MIPMAP_LINEAR : yu.LINEAR;
            break;
          case 8:
            Qu = !0, Eu = yu.NEAREST, Ku = Ru ? yu.NEAREST_MIPMAP_LINEAR : yu.NEAREST;
            break;
          case 4:
            Eu = yu.NEAREST, Ku = Ru ? yu.NEAREST_MIPMAP_NEAREST : yu.NEAREST;
            break;
          case 5:
            Eu = yu.NEAREST, Ku = Ru ? yu.LINEAR_MIPMAP_NEAREST : yu.LINEAR;
            break;
          case 6:
            Qu = !0, Eu = yu.NEAREST, Ku = Ru ? yu.LINEAR_MIPMAP_LINEAR : yu.LINEAR;
            break;
          case 7:
            Eu = yu.NEAREST, Ku = yu.LINEAR;
            break;
          case 1:
            Eu = yu.NEAREST, Ku = yu.NEAREST;
            break;
          case 9:
            Eu = yu.LINEAR, Ku = Ru ? yu.NEAREST_MIPMAP_NEAREST : yu.NEAREST;
            break;
          case 10:
            Qu = !0, Eu = yu.LINEAR, Ku = Ru ? yu.NEAREST_MIPMAP_LINEAR : yu.NEAREST;
            break;
          case 2:
            Eu = yu.LINEAR, Ku = yu.LINEAR;
            break;
          case 12:
            Eu = yu.LINEAR, Ku = yu.NEAREST
        }
        return {
          min: Ku,
          mag: Eu,
          hasMipMaps: Qu
        }
      }
      _createTexture() {
        const uu = this._gl.createTexture();
        if (!uu) throw new Error("Unable to create texture");
        return uu
      }
      _createHardwareTexture() {
        return new Su.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(uu, Ru) {
        let yu, Eu, Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Qu = !1,
          mu = 0,
          Nu = 3,
          Xu = 5,
          Vu = !1,
          ru = 1,
          Bu = !1,
          xu = 0,
          Su = !1;
        void 0 !== Ru && "object" === typeof Ru ? (yu = !!Ru.generateMipMaps, Qu = !!Ru.createMipMaps, mu = void 0 === Ru.type ? 0 : Ru.type, Nu = void 0 === Ru.samplingMode ? 3 : Ru.samplingMode, Xu = void 0 === Ru.format ? 5 : Ru.format, Vu = void 0 !== Ru.useSRGBBuffer && Ru.useSRGBBuffer, ru = Ru.samples ?? 1, Eu = Ru.label, Bu = !!Ru.createMSAATexture, xu = Ru.comparisonFunction || 0, Su = !!Ru.isCube) : yu = !!Ru, Vu && (Vu = this._caps.supportSRGBBuffers && (this.Ep > 1 || this.isWebGPU)), (1 !== mu || this._caps.textureFloatLinearFiltering) && (2 !== mu || this._caps.textureHalfFloatLinearFiltering) || (Nu = 1), 1 !== mu || this._caps.textureFloat || (mu = 0, Ju.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Tu = (0, ju.f)(Xu),
          Wu = (0, ju.d)(Xu),
          Hu = this._gl,
          du = new pu.c(this, Ku),
          bu = uu.width || uu,
          Cu = uu.height || uu,
          ku = uu.depth || 0,
          eu = uu.layers || 0,
          Au = this._getSamplingParameters(Nu, (yu || Qu) && !Tu),
          Du = 0 !== eu ? Hu.TEXTURE_2D_ARRAY : 0 !== ku ? Hu.TEXTURE_3D : Su ? Hu.TEXTURE_CUBE_MAP : Hu.TEXTURE_2D,
          Mu = Tu ? this._getInternalFormatFromDepthTextureFormat(Xu, !0, Wu) : this._getRGBABufferInternalSizedFormat(mu, Xu, Vu),
          Iu = Tu ? Wu ? Hu.DEPTH_STENCIL : Hu.DEPTH_COMPONENT : this._getInternalFormat(Xu),
          Gu = Tu ? this._getWebGLTextureTypeFromDepthTextureFormat(Xu) : this._getWebGLTextureType(mu);
        if (this._bindTextureDirectly(Du, du), 0 !== eu) du.is2DArray = !0, Hu.texImage3D(Du, 0, Mu, bu, Cu, eu, 0, Iu, Gu, null);
        else if (0 !== ku) du.is3D = !0, Hu.texImage3D(Du, 0, Mu, bu, Cu, ku, 0, Iu, Gu, null);
        else if (Su) {
          du.isCube = !0;
          for (let uu = 0; uu < 6; uu++) Hu.texImage2D(Hu.TEXTURE_CUBE_MAP_POSITIVE_X + uu, 0, Mu, bu, Cu, 0, Iu, Gu, null)
        } else Hu.texImage2D(Du, 0, Mu, bu, Cu, 0, Iu, Gu, null);
        if (Hu.texParameteri(Du, Hu.TEXTURE_MAG_FILTER, Au.mag), Hu.texParameteri(Du, Hu.TEXTURE_MIN_FILTER, Au.min), Hu.texParameteri(Du, Hu.TEXTURE_WRAP_S, Hu.CLAMP_TO_EDGE), Hu.texParameteri(Du, Hu.TEXTURE_WRAP_T, Hu.CLAMP_TO_EDGE), Tu && this.Ep > 1 && (0 === xu ? (Hu.texParameteri(Du, Hu.TEXTURE_COMPARE_FUNC, 515), Hu.texParameteri(Du, Hu.TEXTURE_COMPARE_MODE, Hu.NONE)) : (Hu.texParameteri(Du, Hu.TEXTURE_COMPARE_FUNC, xu), Hu.texParameteri(Du, Hu.TEXTURE_COMPARE_MODE, Hu.COMPARE_REF_TO_TEXTURE))), (yu || Qu) && this._gl.generateMipmap(Du), this._bindTextureDirectly(Du, null), du._useSRGBBuffer = Vu, du.baseWidth = bu, du.baseHeight = Cu, du.width = bu, du.height = Cu, du.depth = eu || ku, du.isReady = !0, du.samples = ru, du.generateMipMaps = yu, du.samplingMode = Nu, du.type = mu, du.format = Xu, du.label = Eu, du.comparisonFunction = xu, this._internalTexturesCache.push(du), Bu) {
          let uu;
          if (uu = (0, ju.f)(du.format) ? this._setupFramebufferDepthAttachments((0, ju.d)(du.format), 19 !== du.format, du.width, du.height, ru, du.format, !0) : this._createRenderBuffer(du.width, du.height, ru, -1, this._getRGBABufferInternalSizedFormat(du.type, du.format, du._useSRGBBuffer), -1), !uu) throw new Error("Unable to create render buffer");
          du._autoMSAAManagement = !0;
          let Ru = du._hardwareTexture;
          Ru || (Ru = du._hardwareTexture = this._createHardwareTexture()), Ru.addMSAARenderBuffer(uu)
        }
        return du
      }
      _getUseSRGBBuffer(uu, Ru) {
        return uu && this._caps.supportSRGBBuffers && (this.Ep > 1 || Ru)
      }
      createTexture(uu, Ru, yu, Eu) {
        var Ku = this;
        let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Nu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Xu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Vu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ru = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Bu = arguments.length > 11 ? arguments[11] : void 0,
          xu = arguments.length > 12 ? arguments[12] : void 0,
          Su = arguments.length > 13 ? arguments[13] : void 0,
          Tu = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(uu, Ru, yu, Eu, Qu, mu, Ju, (function() {
          for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
          return Ku._prepareWebGLTexture(...Ru, Vu)
        }), ((uu, Ru, yu, Ku, Qu, mu) => {
          const Ju = this._gl,
            Nu = yu.width === uu && yu.height === Ru;
          Qu._creationFlags = Su ?? 0;
          const Xu = this._getTexImageParametersForCreateTexture(Qu.format, Qu._useSRGBBuffer);
          if (Nu) return Ju.texImage2D(Ju.TEXTURE_2D, 0, Xu.internalFormat, Xu.format, Xu.type, yu), !1;
          const Vu = this._caps.maxTextureSize;
          if (yu.width > Vu || yu.height > Vu || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = uu, this._workingCanvas.height = Ru, this._workingContext.drawImage(yu, 0, 0, yu.width, yu.height, 0, 0, uu, Ru), Ju.texImage2D(Ju.TEXTURE_2D, 0, Xu.internalFormat, Xu.format, Xu.type, this._workingCanvas), Qu.width = uu, Qu.height = Ru, !1);
          {
            const uu = new pu.c(this, 2);
            this._bindTextureDirectly(Ju.TEXTURE_2D, uu, !0), Ju.texImage2D(Ju.TEXTURE_2D, 0, Xu.internalFormat, Xu.format, Xu.type, yu), this._rescaleTexture(uu, Qu, Eu, Xu.format, (() => {
              this._releaseTexture(uu), this._bindTextureDirectly(Ju.TEXTURE_2D, Qu, !0), mu()
            }))
          }
          return !0
        }), Nu, Xu, Vu, ru, Bu, xu, Tu)
      }
      _getTexImageParametersForCreateTexture(uu, Ru) {
        let yu, Eu;
        return 1 === this.Ep ? (yu = this._getInternalFormat(uu, Ru), Eu = yu) : (yu = this._getInternalFormat(uu, !1), Eu = this._getRGBABufferInternalSizedFormat(0, uu, Ru)), {
          internalFormat: Eu,
          format: yu,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(uu, Ru, yu, Eu, Ku) {}
      _unpackFlipY(uu) {
        this._unpackFlipYCached !== uu && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, uu ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = uu))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(uu) {
        return uu.isCube ? this._gl.TEXTURE_CUBE_MAP : uu.is3D ? this._gl.TEXTURE_3D : uu.is2DArray || uu.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = this._getTextureTarget(Ru),
          Ku = this._getSamplingParameters(uu, Ru.useMipMaps || yu);
        this._setTextureParameterInteger(Eu, this._gl.TEXTURE_MAG_FILTER, Ku.mag, Ru), this._setTextureParameterInteger(Eu, this._gl.TEXTURE_MIN_FILTER, Ku.min), yu && Ku.hasMipMaps && (Ru.generateMipMaps = !0, this._gl.generateMipmap(Eu)), this._bindTextureDirectly(Eu, null), Ru.samplingMode = uu
      }
      updateTextureDimensions(uu, Ru, yu) {}
      updateTextureWrappingMode(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ku = this._getTextureTarget(uu);
        null !== Ru && (this._setTextureParameterInteger(Ku, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Ru), uu), uu._cachedWrapU = Ru), null !== yu && (this._setTextureParameterInteger(Ku, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(yu), uu), uu._cachedWrapV = yu), (uu.is2DArray || uu.is3D) && null !== Eu && (this._setTextureParameterInteger(Ku, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Eu), uu), uu._cachedWrapR = Eu), this._bindTextureDirectly(Ku, null)
      }
      _uploadCompressedDataToTextureDirectly(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Ju = this._gl;
        let Nu = Ju.TEXTURE_2D;
        if (uu.isCube && (Nu = Ju.TEXTURE_CUBE_MAP_POSITIVE_X + Qu), uu._useSRGBBuffer) switch (Ru) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Ru = Ju.COMPRESSED_SRGB8_ETC2 : uu._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : uu._useSRGBBuffer = !1;
            break;
          case 36492:
            Ru = Ju.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Ru = Ju.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Ru = Ju.COMPRESSED_SRGB_S3TC_DXT1_EXT : uu._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Ru = Ju.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : uu._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Ru = Ju.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : uu._useSRGBBuffer = !1;
            break;
          default:
            uu._useSRGBBuffer = !1
        }
        if (uu.generateMipMaps) {
          const Qu = uu._hardwareTexture;
          Qu.memoryAllocated || (Ju.texStorage2D(uu.isCube ? Ju.TEXTURE_CUBE_MAP : Ju.TEXTURE_2D, Math.floor(Math.log2(Math.max(yu, Eu))) + 1, Ru, uu.width, uu.height), Qu.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Nu, mu, 0, 0, yu, Eu, Ru, Ku)
        } else this._gl.compressedTexImage2D(Nu, mu, Ru, yu, Eu, 0, Ku)
      }
      _uploadDataToTextureDirectly(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const mu = this._gl,
          Ju = this._getWebGLTextureType(uu.type),
          Nu = this._getInternalFormat(uu.format),
          Xu = void 0 === Ku ? this._getRGBABufferInternalSizedFormat(uu.type, uu.format, uu._useSRGBBuffer) : this._getInternalFormat(Ku, uu._useSRGBBuffer);
        this._unpackFlipY(uu.invertY);
        let Vu = mu.TEXTURE_2D;
        uu.isCube && (Vu = mu.TEXTURE_CUBE_MAP_POSITIVE_X + yu);
        const ru = Math.round(Math.log(uu.width) * Math.LOG2E),
          Bu = Math.round(Math.log(uu.height) * Math.LOG2E),
          xu = Qu ? uu.width : Math.pow(2, Math.max(ru - Eu, 0)),
          Su = Qu ? uu.height : Math.pow(2, Math.max(Bu - Eu, 0));
        mu.texImage2D(Vu, Eu, Xu, xu, Su, 0, Nu, Ju, Ru)
      }
      updateTextureData(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Xu = this._gl,
          Vu = this._getWebGLTextureType(uu.type),
          ru = this._getInternalFormat(uu.format);
        this._unpackFlipY(uu.invertY);
        let Bu = Xu.TEXTURE_2D,
          xu = Xu.TEXTURE_2D;
        uu.isCube && (xu = Xu.TEXTURE_CUBE_MAP_POSITIVE_X + mu, Bu = Xu.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Bu, uu, !0), Xu.texSubImage2D(xu, Ju, yu, Eu, Ku, Qu, ru, Vu, Ru), Nu && this._gl.generateMipmap(xu), this._bindTextureDirectly(Bu, null)
      }
      _uploadArrayBufferViewToTexture(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ku = this._gl,
          Qu = uu.isCube ? Ku.TEXTURE_CUBE_MAP : Ku.TEXTURE_2D;
        this._bindTextureDirectly(Qu, uu, !0), this._uploadDataToTextureDirectly(uu, Ru, yu, Eu), this._bindTextureDirectly(Qu, null, !0)
      }
      _prepareWebGLTextureContinuation(uu, Ru, yu, Eu, Ku) {
        const Qu = this._gl;
        if (!Qu) return;
        const mu = this._getSamplingParameters(Ku, !yu);
        Qu.texParameteri(Qu.TEXTURE_2D, Qu.TEXTURE_MAG_FILTER, mu.mag), Qu.texParameteri(Qu.TEXTURE_2D, Qu.TEXTURE_MIN_FILTER, mu.min), yu || Eu || Qu.generateMipmap(Qu.TEXTURE_2D), this._bindTextureDirectly(Qu.TEXTURE_2D, null), Ru && Ru.removePendingData(uu), uu.onLoadedObservable.notifyObservers(uu), uu.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        const Vu = this.getCaps().maxTextureSize,
          ru = Math.min(Vu, this.needPOTTextures ? (0, xu.e)(Eu.width, Vu) : Eu.width),
          Bu = Math.min(Vu, this.needPOTTextures ? (0, xu.e)(Eu.height, Vu) : Eu.height),
          Su = this._gl;
        Su && (uu._hardwareTexture ? (this._bindTextureDirectly(Su.TEXTURE_2D, uu, !0), this._unpackFlipY(void 0 === Ku || !!Ku), uu.baseWidth = Eu.width, uu.baseHeight = Eu.height, uu.width = ru, uu.height = Bu, uu.isReady = !0, uu.type = -1 !== uu.type ? uu.type : 0, uu.format = -1 !== uu.format ? uu.format : Xu ?? (".jpg" !== Ru || uu._useSRGBBuffer ? 5 : 4), Ju(ru, Bu, Eu, Ru, uu, (() => {
          this._prepareWebGLTextureContinuation(uu, yu, Qu, mu, Nu)
        })) || this._prepareWebGLTextureContinuation(uu, yu, Qu, mu, Nu)) : yu && yu.removePendingData(uu))
      }
      _getInternalFormatFromDepthTextureFormat(uu, Ru, yu) {
        const Eu = this._gl;
        if (!Ru) return Eu.STENCIL_INDEX8;
        let Ku = yu ? Eu.DEPTH_STENCIL : Eu.DEPTH_COMPONENT;
        return this.Ep > 1 ? 15 === uu ? Ku = Eu.DEPTH_COMPONENT16 : 16 === uu ? Ku = Eu.DEPTH_COMPONENT24 : 17 === uu || 13 === uu ? Ku = yu ? Eu.DEPTH24_STENCIL8 : Eu.DEPTH_COMPONENT24 : 14 === uu ? Ku = Eu.DEPTH_COMPONENT32F : 18 === uu && (Ku = yu ? Eu.DEPTH32F_STENCIL8 : Eu.DEPTH_COMPONENT32F) : Ku = Eu.DEPTH_COMPONENT16, Ku
      }
      _getWebGLTextureTypeFromDepthTextureFormat(uu) {
        const Ru = this._gl;
        let yu = Ru.UNSIGNED_INT;
        return 15 === uu ? yu = Ru.UNSIGNED_SHORT : 17 === uu || 13 === uu ? yu = Ru.UNSIGNED_INT_24_8 : 14 === uu ? yu = Ru.FLOAT : 18 === uu ? yu = Ru.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === uu && (yu = Ru.UNSIGNED_BYTE), yu
      }
      _setupFramebufferDepthAttachments(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Qu = arguments.length > 5 ? arguments[5] : void 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ju = this._gl;
        Qu = Qu ?? (uu ? 13 : 14);
        const Nu = this._getInternalFormatFromDepthTextureFormat(Qu, Ru, uu);
        return uu && Ru ? this._createRenderBuffer(yu, Eu, Ku, Ju.DEPTH_STENCIL, Nu, mu ? -1 : Ju.DEPTH_STENCIL_ATTACHMENT) : Ru ? this._createRenderBuffer(yu, Eu, Ku, Nu, Nu, mu ? -1 : Ju.DEPTH_ATTACHMENT) : uu ? this._createRenderBuffer(yu, Eu, Ku, Nu, Nu, mu ? -1 : Ju.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Ju = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Ju, uu, Ru, yu, Eu, Ku, Qu, mu)
      }
      _updateRenderBuffer(uu, Ru, yu, Eu, Ku, Qu, mu) {
        let Ju = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Nu = this._gl;
        return Nu.bindRenderbuffer(Nu.RENDERBUFFER, uu), Eu > 1 && Nu.renderbufferStorageMultisample ? Nu.renderbufferStorageMultisample(Nu.RENDERBUFFER, Eu, Qu, Ru, yu) : Nu.renderbufferStorage(Nu.RENDERBUFFER, Ku, Ru, yu), -1 !== mu && Nu.framebufferRenderbuffer(Nu.FRAMEBUFFER, mu, Nu.RENDERBUFFER, uu), Ju && Nu.bindRenderbuffer(Nu.RENDERBUFFER, null), uu
      }
      _releaseTexture(uu) {
        this._deleteTexture(uu._hardwareTexture), this.unbindAllTextures();
        const Ru = this._internalTexturesCache.indexOf(uu); - 1 !== Ru && this._internalTexturesCache.splice(Ru, 1), uu._lodTextureHigh && uu._lodTextureHigh.dispose(), uu._lodTextureMid && uu._lodTextureMid.dispose(), uu._lodTextureLow && uu._lodTextureLow.dispose(), uu._irradianceTexture && uu._irradianceTexture.dispose()
      }
      _deleteTexture(uu) {
        uu?.release()
      }
      _setProgram(uu) {
        this._currentProgram !== uu && ((0, Ku.o)(uu, this._gl), this._currentProgram = uu)
      }
      bindSamplers(uu) {
        const Ru = uu.getPipelineContext();
        this._setProgram(Ru.program);
        const yu = uu.getSamplers();
        for (let Eu = 0; Eu < yu.length; Eu++) {
          const Ru = uu.getUniform(yu[Eu]);
          Ru && (this._boundUniforms[Eu] = Ru)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ku = !1;
        const Qu = Ru && Ru._associatedChannel > -1;
        yu && Qu && (this._activeChannel = Ru._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Ru || Eu) {
          if (this._activateCurrentTexture(), Ru && Ru.isMultiview) throw Ju.e.Error(["_bindTextureDirectly called with a multiview texture!", uu, Ru]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(uu, Ru?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Ru, Ru && (Ru._associatedChannel = this._activeChannel)
        } else yu && (Ku = !0, this._activateCurrentTexture());
        return Qu && !yu && this._bindSamplerUniformToChannel(Ru._associatedChannel, this._activeChannel), Ku
      }
      _bindTexture(uu, Ru, yu) {
        if (void 0 === uu) return;
        Ru && (Ru._associatedChannel = uu), this._activeChannel = uu;
        const Eu = Ru ? this._getTextureTarget(Ru) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Eu, Ru)
      }
      unbindAllTextures() {
        for (let uu = 0; uu < this._maxSimultaneousTextures; uu++) this._activeChannel = uu, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ep > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(uu, Ru, yu, Eu) {
        void 0 !== uu && (Ru && (this._boundUniforms[uu] = Ru), this._setTexture(uu, yu))
      }
      _bindSamplerUniformToChannel(uu, Ru) {
        const yu = this._boundUniforms[uu];
        yu && yu._currentState !== Ru && (this._gl.uniform1i(yu, Ru), yu._currentState = Ru)
      }
      _getTextureWrapMode(uu) {
        switch (uu) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(uu, Ru) {
        let yu, Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Ru) return null != this._boundTexturesCache[uu] && (this._activeChannel = uu, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ep > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Ru.video) {
          this._activeChannel = uu;
          const yu = Ru.getInternalTexture();
          yu && (yu._associatedChannel = uu), Ru.update()
        } else if (4 === Ru.delayLoadState) return Ru.delayLoad(), !1;
        yu = Ku ? Ru.depthStencilTexture : Ru.isReady() ? Ru.getInternalTexture() : Ru.isCube ? this.emptyCubeTexture : Ru.is3D ? this.emptyTexture3D : Ru.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Eu && yu && (yu._associatedChannel = uu);
        let Qu = !0;
        this._boundTexturesCache[uu] === yu && (Eu || this._bindSamplerUniformToChannel(yu._associatedChannel, uu), Qu = !1), this._activeChannel = uu;
        const mu = this._getTextureTarget(yu);
        if (Qu && this._bindTextureDirectly(mu, yu, Eu), yu && !yu.isMultiview) {
          if (yu.isCube && yu._cachedCoordinatesMode !== Ru.coordinatesMode) {
            yu._cachedCoordinatesMode = Ru.coordinatesMode;
            const uu = 3 !== Ru.coordinatesMode && 5 !== Ru.coordinatesMode ? 1 : 0;
            Ru.wrapU = uu, Ru.wrapV = uu
          }
          yu._cachedWrapU !== Ru.wrapU && (yu._cachedWrapU = Ru.wrapU, this._setTextureParameterInteger(mu, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Ru.wrapU), yu)), yu._cachedWrapV !== Ru.wrapV && (yu._cachedWrapV = Ru.wrapV, this._setTextureParameterInteger(mu, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Ru.wrapV), yu)), yu.is3D && yu._cachedWrapR !== Ru.wrapR && (yu._cachedWrapR = Ru.wrapR, this._setTextureParameterInteger(mu, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Ru.wrapR), yu)), this._setAnisotropicLevel(mu, yu, Ru.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(uu, Ru, yu, Eu) {
        if (void 0 !== uu && Ru) {
          this._textureUnits && this._textureUnits.length === yu.length || (this._textureUnits = new Int32Array(yu.length));
          for (let Ru = 0; Ru < yu.length; Ru++) {
            const Eu = yu[Ru].getInternalTexture();
            Eu ? (this._textureUnits[Ru] = uu + Ru, Eu._associatedChannel = uu + Ru) : this._textureUnits[Ru] = -1
          }
          this._gl.uniform1iv(Ru, this._textureUnits);
          for (let uu = 0; uu < yu.length; uu++) this._setTexture(this._textureUnits[uu], yu[uu], !0)
        }
      }
      _setAnisotropicLevel(uu, Ru, yu) {
        const Eu = this._caps.textureAnisotropicFilterExtension;
        11 !== Ru.samplingMode && 3 !== Ru.samplingMode && 2 !== Ru.samplingMode && (yu = 1), Eu && Ru._cachedAnisotropicFilteringLevel !== yu && (this._setTextureParameterFloat(uu, Eu.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(yu, this._caps.maxAnisotropy), Ru), Ru._cachedAnisotropicFilteringLevel = yu)
      }
      _setTextureParameterFloat(uu, Ru, yu, Eu) {
        this._bindTextureDirectly(uu, Eu, !0, !0), this._gl.texParameterf(uu, Ru, yu)
      }
      _setTextureParameterInteger(uu, Ru, yu, Eu) {
        Eu && this._bindTextureDirectly(uu, Eu, !0, !0), this._gl.texParameteri(uu, Ru, yu)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let uu = 0; uu < this._caps.maxVertexAttribs; uu++) this.disableAttributeByIndex(uu)
        } else
          for (let uu = 0, Ru = this._vertexAttribArraysEnabled.length; uu < Ru; uu++) uu >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[uu] || this.disableAttributeByIndex(uu)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Nu.f)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Ku.y)(this._gl)
      }
      attachContextLostEvent(uu) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", uu, !1)
      }
      attachContextRestoredEvent(uu) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", uu, !1)
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
      _canRenderToFramebuffer(uu) {
        const Ru = this._gl;
        for (; Ru.getError() !== Ru.NO_ERROR;);
        let yu = !0;
        const Eu = Ru.createTexture();
        Ru.bindTexture(Ru.TEXTURE_2D, Eu), Ru.texImage2D(Ru.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(uu), 1, 1, 0, Ru.RGBA, this._getWebGLTextureType(uu), null), Ru.texParameteri(Ru.TEXTURE_2D, Ru.TEXTURE_MIN_FILTER, Ru.NEAREST), Ru.texParameteri(Ru.TEXTURE_2D, Ru.TEXTURE_MAG_FILTER, Ru.NEAREST);
        const Ku = Ru.createFramebuffer();
        Ru.bindFramebuffer(Ru.FRAMEBUFFER, Ku), Ru.framebufferTexture2D(Ru.FRAMEBUFFER, Ru.COLOR_ATTACHMENT0, Ru.TEXTURE_2D, Eu, 0);
        const Qu = Ru.checkFramebufferStatus(Ru.FRAMEBUFFER);
        if (yu = yu && Qu === Ru.FRAMEBUFFER_COMPLETE, yu = yu && Ru.getError() === Ru.NO_ERROR, yu && (Ru.clear(Ru.COLOR_BUFFER_BIT), yu = yu && Ru.getError() === Ru.NO_ERROR), yu) {
          Ru.bindFramebuffer(Ru.FRAMEBUFFER, null);
          const uu = Ru.RGBA,
            Eu = Ru.UNSIGNED_BYTE,
            Ku = new Uint8Array(4);
          Ru.readPixels(0, 0, 1, 1, uu, Eu, Ku), yu = yu && Ru.getError() === Ru.NO_ERROR
        }
        for (Ru.deleteTexture(Eu), Ru.deleteFramebuffer(Ku), Ru.bindFramebuffer(Ru.FRAMEBUFFER, null); !yu && Ru.getError() !== Ru.NO_ERROR;);
        return yu
      }
      _getWebGLTextureType(uu) {
        if (1 === this._webGLVersion) {
          switch (uu) {
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
        switch (uu) {
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
      _getInternalFormat(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = Ru ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (uu) {
          case 0:
            yu = this._gl.ALPHA;
            break;
          case 1:
            yu = this._gl.LUMINANCE;
            break;
          case 2:
            yu = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            yu = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            yu = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            yu = Ru ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            yu = Ru ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (uu) {
          case 8:
            yu = this._gl.RED_INTEGER;
            break;
          case 9:
            yu = this._gl.RG_INTEGER;
            break;
          case 10:
            yu = this._gl.RGB_INTEGER;
            break;
          case 11:
            yu = this._gl.RGBA_INTEGER
        }
        return yu
      }
      _getRGBABufferInternalSizedFormat(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Ru) switch (Ru) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return yu ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (uu) {
          case 3:
            switch (Ru) {
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
            switch (Ru) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return yu ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return yu ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (Ru) {
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
            switch (Ru) {
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
            switch (Ru) {
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
            switch (Ru) {
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
            switch (Ru) {
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
            switch (Ru) {
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
            switch (Ru) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return yu ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(uu, Ru, yu, Eu) {
        let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Nu = Ku ? 4 : 3,
          Xu = Ku ? this._gl.RGBA : this._gl.RGB,
          Vu = yu * Eu * Nu;
        if (mu) {
          if (mu.length < Vu) return Ju.e.Error(`Data buffer is too small to store the read pixels (${mu.length} should be more than ${Vu})`), Promise.resolve(mu)
        } else mu = new Uint8Array(Vu);
        return Qu && this.flushFramebuffer(), this._gl.readPixels(uu, Ru, yu, Eu, Xu, this._gl.UNSIGNED_BYTE, mu), Promise.resolve(mu)
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
          const uu = Qu.d._CreateCanvas(1, 1),
            Ru = uu.getContext("webgl") || uu.getContext("experimental-webgl");
          this._IsSupported = null != Ru && !!globalThis.WebGLRenderingContext
        } catch (uu) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const uu = Qu.d._CreateCanvas(1, 1),
            Ru = uu.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || uu.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Ru
        } catch (uu) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    bu._TempClearColorUint32 = new Uint32Array(4), bu._TempClearColorInt32 = new Int32Array(4), bu._TempClearColorFloat32 = new Float32Array(4), bu.ExceptionList = [{
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
    }], bu._ConcatenateShader = Tu.d, bu._IsSupported = null, bu._HasMajorPerformanceCaveat = null
  },
  39754: (uu, Ru, yu) => {
    var Eu;
    yu.d(Ru, {
        c: () => Ku
      }),
      function(uu) {
        uu[uu.PointerMove = 0] = "PointerMove", uu[uu.PointerDown = 1] = "PointerDown", uu[uu.PointerUp = 2] = "PointerUp"
      }(Eu || (Eu = {}));
    class Ku {}
    Ku.DOM_DELTA_PIXEL = 0, Ku.DOM_DELTA_LINE = 1, Ku.DOM_DELTA_PAGE = 2
  },
  39747: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      g: () => Qu,
      i: () => Ku
    });
    class Eu {}
    Eu.KEYDOWN = 1, Eu.KEYUP = 2;
    class Ku {
      constructor(uu, Ru) {
        this.type = uu, this.event = Ru
      }
    }
    class Qu extends Ku {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(uu) {
        this.skipOnKeyboardObservable = uu
      }
      constructor(uu, Ru) {
        super(uu, Ru), this.type = uu, this.event = Ru, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39745: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      i: () => mu,
      k: () => Ju
    });
    var Eu = yu(36830);
    class Ku {}
    Ku.POINTERDOWN = 1, Ku.POINTERUP = 2, Ku.POINTERMOVE = 4, Ku.POINTERWHEEL = 8, Ku.POINTERPICK = 16, Ku.POINTERTAP = 32, Ku.POINTERDOUBLETAP = 64;
    class Qu {
      constructor(uu, Ru) {
        this.type = uu, this.event = Ru
      }
    }
    class mu extends Qu {
      constructor(uu, Ru, yu, Ku) {
        super(uu, Ru), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Eu.n(yu, Ku)
      }
    }
    class Ju extends Qu {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(uu, Ru), this._pickInfo = yu, this._inputManager = Eu
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39764: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    class Eu {
      static CompareLightsPriority(uu, Ru) {
        return uu.shadowEnabled !== Ru.shadowEnabled ? (Ru.shadowEnabled ? 1 : 0) - (uu.shadowEnabled ? 1 : 0) : Ru.renderPriority - uu.renderPriority
      }
    }
    Eu.FALLOFF_DEFAULT = 0, Eu.FALLOFF_PHYSICAL = 1, Eu.FALLOFF_GLTF = 2, Eu.FALLOFF_STANDARD = 3, Eu.LIGHTMAP_DEFAULT = 0, Eu.LIGHTMAP_SPECULAR = 1, Eu.LIGHTMAP_SHADOWSONLY = 2, Eu.INTENSITYMODE_AUTOMATIC = 0, Eu.INTENSITYMODE_LUMINOUSPOWER = 1, Eu.INTENSITYMODE_LUMINOUSINTENSITY = 2, Eu.INTENSITYMODE_ILLUMINANCE = 3, Eu.INTENSITYMODE_LUMINANCE = 4, Eu.LIGHTTYPEID_POINTLIGHT = 0, Eu.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Eu.LIGHTTYPEID_SPOTLIGHT = 2, Eu.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Eu.LIGHTTYPEID_RECT_AREALIGHT = 4, Eu.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39385: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu, Ku = yu(36858),
      Qu = yu(39390);
    ! function(uu) {
      uu[uu.Unknown = 0] = "Unknown", uu[uu.Url = 1] = "Url", uu[uu.Temp = 2] = "Temp", uu[uu.Raw = 3] = "Raw", uu[uu.Dynamic = 4] = "Dynamic", uu[uu.RenderTarget = 5] = "RenderTarget", uu[uu.MultiRenderTarget = 6] = "MultiRenderTarget", uu[uu.Cube = 7] = "Cube", uu[uu.CubeRaw = 8] = "CubeRaw", uu[uu.CubePrefiltered = 9] = "CubePrefiltered", uu[uu.Raw3D = 10] = "Raw3D", uu[uu.Raw2DArray = 11] = "Raw2DArray", uu[uu.DepthStencil = 12] = "DepthStencil", uu[uu.CubeRawRGBD = 13] = "CubeRawRGBD", uu[uu.Depth = 14] = "Depth", uu[uu.External = 15] = "External"
    }(Eu || (Eu = {}));
    class mu extends Qu.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(uu) {
        this._useMipMaps = uu
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(uu) {
        this._uniqueId = uu
      }
      eS() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Ku.b, this.onErrorObservable = new Ku.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = uu, this._source = Ru, this._uniqueId = mu._Counter++, yu || (this._hardwareTexture = uu._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, uu, Ru, yu), this.width = uu, this.height = Ru, this.depth = yu, this.baseWidth = uu, this.baseHeight = Ru, this.baseDepth = yu, this._size = uu * Ru * yu
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const uu = this.onRebuildCallback(this),
            Ru = Ru => {
              Ru._swapAndDie(this, !1), this.isReady = uu.isReady
            };
          return void(uu.isAsync ? uu.proxy.then(Ru) : Ru(uu.proxy))
        }
        let uu;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(uu = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (uu => {
              uu._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (uu = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), uu._swapAndDie(this, !1), this._bufferViewArray)
              for (let uu = 0; uu < this._bufferViewArray.length; uu++) {
                const Ru = this._bufferViewArray[uu];
                Ru && this._engine.updateRawTexture(this, Ru, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, uu)
              }
            this.isReady = !0;
            break;
          case 10:
            uu = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), uu._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (uu = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), uu._swapAndDie(this, !1), this._bufferViewArray)
              for (let uu = 0; uu < this._bufferViewArray.length; uu++) {
                const Ru = this._bufferViewArray[uu];
                Ru && this._engine.updateRawTexture2DArray(this, Ru, this.format, this.invertY, this._compression, this.type, uu)
              }
            this.isReady = !0;
            break;
          case 4:
            uu = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), uu._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(uu = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              uu._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            uu = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), uu._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return uu = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (uu => {
              uu && uu._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(uu._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(uu._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), uu._hardwareTexture = this._hardwareTexture, uu._setUniqueId(mu._Counter++), Ru && (uu._isRGBD = this._isRGBD), this._lodTextureHigh && (uu._lodTextureHigh && uu._lodTextureHigh.dispose(), uu._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (uu._lodTextureMid && uu._lodTextureMid.dispose(), uu._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (uu._lodTextureLow && uu._lodTextureLow.dispose(), uu._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (uu._irradianceTexture && uu._irradianceTexture.dispose(), uu._irradianceTexture = this._irradianceTexture);
        const yu = this._engine.getLoadedTexturesCache();
        let Eu = yu.indexOf(this); - 1 !== Eu && yu.splice(Eu, 1), Eu = yu.indexOf(uu), -1 === Eu && yu.push(uu)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    mu._Counter = 0
  },
  39506: (uu, Ru, yu) => {
    function Eu(uu) {
      return 13 === uu || 14 === uu || 15 === uu || 16 === uu || 17 === uu || 18 === uu || 19 === uu
    }

    function Ku(uu) {
      return 8 === uu || 9 === uu || 10 === uu || 11 === uu
    }

    function Qu(uu) {
      return 0 === uu || 5 === uu || 7 === uu || 11 === uu
    }

    function mu(uu) {
      return 13 === uu || 17 === uu || 18 === uu || 19 === uu
    }
    yu.d(Ru, {
      d: () => mu,
      f: () => Eu,
      g: () => Ku,
      h: () => Qu
    })
  },
  39390: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(uu) {
        this._cachedWrapU = uu
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(uu) {
        this._cachedWrapV = uu
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(uu) {
        this._cachedWrapR = uu
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(uu) {
        this._cachedAnisotropicFilteringLevel = uu
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(uu) {
        this._comparisonFunction = uu
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(uu) {
        this._useMipMaps = uu
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = uu, this._cachedWrapV = Ru, this._cachedWrapR = yu, this._cachedAnisotropicFilteringLevel = Eu, this.samplingMode = Ku, this._comparisonFunction = Qu, this
      }
      compareSampler(uu) {
        return this._cachedWrapU === uu._cachedWrapU && this._cachedWrapV === uu._cachedWrapV && this._cachedWrapR === uu._cachedWrapR && this._cachedAnisotropicFilteringLevel === uu._cachedAnisotropicFilteringLevel && this.samplingMode === uu.samplingMode && this._comparisonFunction === uu._comparisonFunction && this._useMipMaps === uu._useMipMaps
      }
    }
  },
  39681: (uu, Ru, yu) => {
    function Eu(uu) {
      uu.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    yu.d(Ru, {
      d: () => Eu
    })
  },
  39471: (uu, Ru, yu) => {
    function Eu(uu) {
      return void 0 === uu.getPipelineContext
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  39899: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = yu(39447);
    class Ku {
      static GetEffect(uu) {
        return void 0 === uu.getPipelineContext ? uu.effect : uu
      }
      constructor(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = uu.createDrawContext(), Ru && (this.materialContext = uu.createMaterialContext())
      }
      setEffect(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        yu || this.effect === uu || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = uu, void 0 !== Ru && (this.defines = Ru), yu && this.drawContext?.reset()
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Ru = this.effect;
          uu ? Ru.dispose() : Eu.e.SetImmediate((() => {
            Ru.eS().onEndFrameObservable.addOnce((() => {
              Ru.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39407: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ru,
      h: () => xu,
      j: () => Xu,
      m: () => Vu
    });
    var Eu = yu(39411),
      Ku = yu(39419),
      Qu = yu(39403),
      mu = yu(38448),
      Ju = yu(39439),
      Nu = yu(39425);

    function Xu(uu, Ru) {
      return (0, Ku.z)(Ru).cachedPipelines[uu]
    }

    function Vu(uu) {
      const Ru = uu._name,
        yu = uu.context;
      if (Ru && yu) {
        const uu = (0, Ku.z)(yu),
          Eu = uu.cachedPipelines[Ru];
        Eu?.dispose(), delete uu.cachedPipelines[Ru]
      }
    }

    function ru(uu, Ru, yu, Ku, Qu, mu, Nu) {
      let Xu, Vu;
      const ru = (0, Eu.f)() ? mu?.getHostDocument() : null;
      Xu = "string" === typeof Ru ? Ru : "string" === typeof Ru.vertexSource ? "source:" + Ru.vertexSource : "string" === typeof Ru.vertexElement ? ru?.getElementById(Ru.vertexElement) || Ru.vertexElement : Ru.vertex || Ru, Vu = "string" === typeof Ru ? Ru : "string" === typeof Ru.fragmentSource ? "source:" + Ru.fragmentSource : "string" === typeof Ru.fragmentElement ? ru?.getElementById(Ru.fragmentElement) || Ru.fragmentElement : Ru.fragment || Ru;
      const xu = [void 0, void 0],
        Su = () => {
          if (xu[0] && xu[1]) {
            const [Eu, Xu] = xu;
            (0, Ju.h)(uu), (0, Ju.n)(Eu, uu, ((Eu, Vu) => {
              Nu && (Nu._vertexSourceCodeBeforeMigration = Vu), yu && (Eu = yu("vertex", Eu)), uu.isFragment = !0, (0, Ju.n)(Xu, uu, ((mu, Xu) => {
                Nu && (Nu._fragmentSourceCodeBeforeMigration = Xu), yu && (mu = yu("fragment", mu));
                const Vu = (0, Ju.d)(Eu, mu, uu);
                uu = null;
                const ru = function(uu, Ru, yu, Eu) {
                  if (yu) {
                    return {
                      vertexSourceCode: (1 === Eu ? "//" : "") + "#define SHADER_NAME vertex:" + (yu.vertexElement || yu.vertex || yu.spectorName || yu) + "\n" + uu,
                      fragmentSourceCode: (1 === Eu ? "//" : "") + "#define SHADER_NAME fragment:" + (yu.fragmentElement || yu.fragment || yu.spectorName || yu) + "\n" + Ru
                    }
                  }
                  return {
                    vertexSourceCode: uu,
                    fragmentSourceCode: Ru
                  }
                }(Vu.vertexCode, Vu.fragmentCode, Ru, Qu);
                Ku?.(ru.vertexSourceCode, ru.fragmentSourceCode)
              }), mu)
            }), mu)
          }
        };
      Bu(Xu, "Vertex", "", (uu => {
        Nu && (Nu._rawVertexSourceCode = uu), xu[0] = uu, Su()
      }), Qu), Bu(Vu, "Fragment", "Pixel", (uu => {
        Nu && (Nu._rawFragmentSourceCode = uu), xu[1] = uu, Su()
      }), Qu)
    }

    function Bu(uu, Ru, yu, Ku, mu, Ju) {
      if ("undefined" !== typeof HTMLElement && uu instanceof HTMLElement) {
        return void Ku((0, Eu.b)(uu))
      }
      if ("source:" === uu.substring(0, 7)) return void Ku(uu.substring(7));
      if ("base64:" === uu.substring(0, 7)) {
        return void Ku(window.atob(uu.substring(7)))
      }
      const Xu = Qu.e.GetShadersStore(mu);
      if (Xu[uu + Ru + "Shader"]) return void Ku(Xu[uu + Ru + "Shader"]);
      if (yu && Xu[uu + yu + "Shader"]) return void Ku(Xu[uu + yu + "Shader"]);
      let Vu;
      if (Vu = "." === uu[0] || "/" === uu[0] || uu.indexOf("http") > -1 ? uu : Qu.e.GetShadersRepository(mu) + uu, !(Ju = Ju || Nu.i)) throw new Error("loadFileInjection is not defined");
      Ju(Vu + "." + Ru.toLowerCase() + ".fx", Ku)
    }
    const xu = (uu, Ru, yu, Eu) => {
      try {
        const Qu = uu.context ? (0, Ku.z)(uu.context) : null;
        Qu && (Qu.disableParallelShaderCompile = uu.disableParallelCompilation);
        const mu = uu.existingPipelineContext || Ru(uu.shaderProcessingContext);
        return mu._name = uu.name, uu.name && Qu && (Qu.cachedPipelines[uu.name] = mu), yu(mu, uu.vertex, uu.fragment, !!uu.createAsRaw, "", "", uu.rebuildRebind, uu.defines, uu.transformFeedbackVaryings, "", (() => {
          Eu(mu, (() => {
            uu.onRenderingStateCompiled?.(mu)
          }))
        })), mu
      } catch (Qu) {
        throw mu.e.Error("Error compiling effect"), Qu
      }
    }
  },
  39399: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu
    });
    var Eu = yu(36858),
      Ku = yu(38448),
      Qu = yu(39403),
      mu = yu(39407),
      Ju = yu(39447);
    class Nu {
      static get ShadersRepository() {
        return Qu.e.ShadersRepository
      }
      static set ShadersRepository(uu) {
        Qu.e.ShadersRepository = uu
      }
      get wyu() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Eu.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(uu, Ru, yu) {
        let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Qu = arguments.length > 4 ? arguments[4] : void 0,
          Ju = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Vu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          ru = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Bu = arguments.length > 9 ? arguments[9] : void 0,
          xu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Su = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          pu = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Eu.b, this.onErrorObservable = new Eu.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = uu, this._key = xu;
        const Tu = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Wu;
        if (Ru.attributes) {
          const uu = Ru;
          if (this._engine = yu, this._attributesNames = uu.attributes, this._uniformsNames = uu.uniformsNames.concat(uu.samplers), this._samplerList = uu.samplers.slice(), this.defines = uu.defines, this.onError = uu.onError, this.onCompiled = uu.onCompiled, this._fallbacks = uu.fallbacks, this._indexParameters = uu.indexParameters, this._transformFeedbackVaryings = uu.transformFeedbackVaryings || null, this._multiTarget = !!uu.multiTarget, this._shaderLanguage = uu.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!uu.disableParallelShaderCompilation, uu.uniformBuffersNames) {
            this._uniformBuffersNamesList = uu.uniformBuffersNames.slice();
            for (let Ru = 0; Ru < uu.uniformBuffersNames.length; Ru++) this._uniformBuffersNames[uu.uniformBuffersNames[Ru]] = Ru
          }
          this._processFinalCode = uu.processFinalCode ?? null, this._processCodeAfterIncludes = uu.processCodeAfterIncludes ?? void 0, pu = uu.extraInitializationsAsync, Wu = uu.existingPipelineContext
        } else this._engine = Qu, this.defines = null == Ju ? "" : Ju, this._uniformsNames = yu.concat(Ku), this._samplerList = Ku ? Ku.slice() : [], this._attributesNames = Ru, this._uniformBuffersNamesList = [], this._shaderLanguage = Su, this.onError = ru, this.onCompiled = Vu, this._indexParameters = Bu, this._fallbacks = Xu;
        "WEBGL2" === this._engine.shaderPlatformName && (Wu = (0, mu.j)(Tu, this._engine._gl) ?? Wu), this._attributeLocationByName = {}, this.uniqueId = Nu._UniqueIdSeed++, Wu ? (this._pipelineContext = Wu, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, pu).catch((uu => {
          const Ru = uu?.message ?? String(uu),
            yu = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Ru}`);
          uu && "string" === typeof uu.stack && (yu.stack = `${yu.message}\nCaused by: ${uu.stack}`), this._processCompilationErrors(yu)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.wyu || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        Eu && await Eu(), this._processingContext = yu || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Ku = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: uu ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Qu.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Qu.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          CEu: this._engine.CEu,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, mu.d)(Ku, this.name, this._processFinalCode, ((uu, yu) => {
          this._vertexSourceCode = uu, this._fragmentSourceCode = yu, this._prepareEffect(Ru)
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
        return !!this._engine.wyu || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      eS() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(uu) {
        return this._attributes[uu]
      }
      getAttributeLocationByName(uu) {
        return this._attributeLocationByName[uu]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(uu) {
        return this._uniformsNames.indexOf(uu)
      }
      getUniform(uu) {
        return this._uniforms[uu]
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
        return await new Promise((uu => {
          this.executeWhenCompiled(uu)
        }))
      }
      executeWhenCompiled(uu) {
        this.isReady() ? uu(this) : (this.onCompileObservable.add((Ru => {
          uu(Ru)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(uu) {
        (0, Ju.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Ru => {
          this._processCompilationErrors(Ru, uu)
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
            CEu: this._engine.CEu,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(uu, Ru, yu, Eu) {
        this._isReady = !1, this._vertexSourceCodeOverride = uu, this._fragmentSourceCodeOverride = Ru, this.onError = (uu, Ru) => {
          Eu && Eu(Ru)
        }, this.onCompiled = () => {
          const uu = this.eS().scenes;
          if (uu)
            for (let Ru = 0; Ru < uu.length; Ru++) uu[Ru].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(yu)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(uu) {
        if (this._pipelineContext = uu, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Ru = 0; Ru < this._attributesNames.length; Ru++) {
            const uu = this._attributesNames[Ru];
            this._attributeLocationByName[uu] = this._attributes[Ru]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Nu.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = this._pipelineContext;
        this._isReady = !1;
        try {
          const yu = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Eu = yu ? null : this.defines,
            Ku = yu ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Qu = yu ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Ju = this._engine;
          this._pipelineContext = (0, mu.h)({
            existingPipelineContext: uu ? Ru : null,
            vertex: Ku,
            fragment: Qu,
            context: "WEBGL2" === Ju.shaderPlatformName || "WEBGL1" === Ju.shaderPlatformName ? Ju._gl : void 0,
            rebuildRebind: (uu, Ru, yu, Eu) => this._rebuildProgram(uu, Ru, yu, Eu),
            defines: Eu,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: yu,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: yu => {
              Ru && !uu && this._engine._deletePipelineContext(Ru), yu && this._onRenderingStateCompiled(yu)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Ru)
        } catch (yu) {
          this._processCompilationErrors(yu, Ru)
        }
      }
      _getShaderCodeAndErrorLine(uu, Ru, yu) {
        const Eu = yu ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Ku = null;
        if (Ru && uu) {
          const Qu = Ru.match(Eu);
          if (Qu && 2 === Qu.length) {
            const Ru = parseInt(Qu[1]),
              Eu = uu.split("\n", -1);
            Eu.length >= Ru && (Ku = `Offending line [${Ru}] in ${yu?"fragment":"vertex"} code: ${Eu[Ru-1]}`)
          }
        }
        return [uu, Ku]
      }
      _processCompilationErrors(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof uu?.stack ? uu.stack : uu?.message ?? String(uu);
        const yu = this._attributesNames,
          Eu = this._fallbacks;
        if (Ku.e.Error("Unable to compile effect:"), Ku.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Ku.e.Error(`Attributes: ${yu.join(" ")}`), Ku.e.Error("Defines:\n" + this.defines), Nu.LogShaderCodeOnCompilationError) {
          let uu, Ru = null,
            yu = null;
          this._pipelineContext?._getVertexShaderCode() && ([uu, Ru] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), uu && (Ku.e.Error("Vertex code:"), Ku.e.Error(uu))), this._pipelineContext?._getFragmentShaderCode() && ([uu, yu] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), uu && (Ku.e.Error("Fragment code:"), Ku.e.Error(uu))), Ru && Ku.e.Error(Ru), yu && Ku.e.Error(yu)
        }
        Ku.e.Error("Error: " + this._compilationError);
        const Qu = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Ru && (this._pipelineContext = Ru, this._isReady = !0, Qu()), Eu ? (this._pipelineContext = null, Eu.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Ku.e.Error("Trying next fallback."), this.defines = Eu.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Qu(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Ru || Qu())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(uu, Ru) {
        this._engine._bindTexture(this._samplers[uu], Ru, uu)
      }
      setTexture(uu, Ru) {
        this._engine.setTexture(this._samplers[uu], this._uniforms[uu], Ru, uu)
      }
      setTextureArray(uu, Ru) {
        const yu = uu + "Ex";
        if (-1 === this._samplerList.indexOf(yu + "0")) {
          const Eu = this._samplerList.indexOf(uu);
          for (let uu = 1; uu < Ru.length; uu++) {
            const Ru = yu + (uu - 1).toString();
            this._samplerList.splice(Eu + uu, 0, Ru)
          }
          let Ku = 0;
          for (const uu of this._samplerList) this._samplers[uu] = Ku, Ku += 1
        }
        this._engine.setTextureArray(this._samplers[uu], this._uniforms[uu], Ru, uu)
      }
      bindUniformBuffer(uu, Ru) {
        const yu = this._uniformBuffersNames[Ru];
        void 0 === yu || Nu._BaseCache[yu] === uu && this._engine._features.useUBOBindingCache || (Nu._BaseCache[yu] = uu, this._engine.bindUniformBufferBase(uu, yu, Ru))
      }
      bindUniformBlock(uu, Ru) {
        this._engine.bindUniformBlock(this._pipelineContext, uu, Ru)
      }
      setInt(uu, Ru) {
        return this._pipelineContext.setInt(uu, Ru), this
      }
      setInt2(uu, Ru, yu) {
        return this._pipelineContext.setInt2(uu, Ru, yu), this
      }
      setInt3(uu, Ru, yu, Eu) {
        return this._pipelineContext.setInt3(uu, Ru, yu, Eu), this
      }
      setInt4(uu, Ru, yu, Eu, Ku) {
        return this._pipelineContext.setInt4(uu, Ru, yu, Eu, Ku), this
      }
      setIntArray(uu, Ru) {
        return this._pipelineContext.setIntArray(uu, Ru), this
      }
      setIntArray2(uu, Ru) {
        return this._pipelineContext.setIntArray2(uu, Ru), this
      }
      setIntArray3(uu, Ru) {
        return this._pipelineContext.setIntArray3(uu, Ru), this
      }
      setIntArray4(uu, Ru) {
        return this._pipelineContext.setIntArray4(uu, Ru), this
      }
      setUInt(uu, Ru) {
        return this._pipelineContext.setUInt(uu, Ru), this
      }
      setUInt2(uu, Ru, yu) {
        return this._pipelineContext.setUInt2(uu, Ru, yu), this
      }
      setUInt3(uu, Ru, yu, Eu) {
        return this._pipelineContext.setUInt3(uu, Ru, yu, Eu), this
      }
      setUInt4(uu, Ru, yu, Eu, Ku) {
        return this._pipelineContext.setUInt4(uu, Ru, yu, Eu, Ku), this
      }
      setUIntArray(uu, Ru) {
        return this._pipelineContext.setUIntArray(uu, Ru), this
      }
      setUIntArray2(uu, Ru) {
        return this._pipelineContext.setUIntArray2(uu, Ru), this
      }
      setUIntArray3(uu, Ru) {
        return this._pipelineContext.setUIntArray3(uu, Ru), this
      }
      setUIntArray4(uu, Ru) {
        return this._pipelineContext.setUIntArray4(uu, Ru), this
      }
      setFloatArray(uu, Ru) {
        return this._pipelineContext.setArray(uu, Ru), this
      }
      setFloatArray2(uu, Ru) {
        return this._pipelineContext.setArray2(uu, Ru), this
      }
      setFloatArray3(uu, Ru) {
        return this._pipelineContext.setArray3(uu, Ru), this
      }
      setFloatArray4(uu, Ru) {
        return this._pipelineContext.setArray4(uu, Ru), this
      }
      setArray(uu, Ru) {
        return this._pipelineContext.setArray(uu, Ru), this
      }
      setArray2(uu, Ru) {
        return this._pipelineContext.setArray2(uu, Ru), this
      }
      setArray3(uu, Ru) {
        return this._pipelineContext.setArray3(uu, Ru), this
      }
      setArray4(uu, Ru) {
        return this._pipelineContext.setArray4(uu, Ru), this
      }
      setMatrices(uu, Ru) {
        return this._pipelineContext.setMatrices(uu, Ru), this
      }
      setMatrix(uu, Ru) {
        return this._pipelineContext.setMatrix(uu, Ru), this
      }
      setMatrix3x3(uu, Ru) {
        return this._pipelineContext.setMatrix3x3(uu, Ru), this
      }
      setMatrix2x2(uu, Ru) {
        return this._pipelineContext.setMatrix2x2(uu, Ru), this
      }
      setFloat(uu, Ru) {
        return this._pipelineContext.setFloat(uu, Ru), this
      }
      setBool(uu, Ru) {
        return this._pipelineContext.setInt(uu, Ru ? 1 : 0), this
      }
      setVector2(uu, Ru) {
        return this._pipelineContext.setVector2(uu, Ru), this
      }
      setFloat2(uu, Ru, yu) {
        return this._pipelineContext.setFloat2(uu, Ru, yu), this
      }
      setVector3(uu, Ru) {
        return this._pipelineContext.setVector3(uu, Ru), this
      }
      setFloat3(uu, Ru, yu, Eu) {
        return this._pipelineContext.setFloat3(uu, Ru, yu, Eu), this
      }
      setVector4(uu, Ru) {
        return this._pipelineContext.setVector4(uu, Ru), this
      }
      setQuaternion(uu, Ru) {
        return this._pipelineContext.setQuaternion(uu, Ru), this
      }
      setFloat4(uu, Ru, yu, Eu, Ku) {
        return this._pipelineContext.setFloat4(uu, Ru, yu, Eu, Ku), this
      }
      setColor3(uu, Ru) {
        return this._pipelineContext.setColor3(uu, Ru), this
      }
      setColor4(uu, Ru, yu) {
        return this._pipelineContext.setColor4(uu, Ru, yu), this
      }
      setDirectColor4(uu, Ru) {
        return this._pipelineContext.setDirectColor4(uu, Ru), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Nu.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, mu.m)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Ru && (Qu.e.GetShadersStore(Eu)[`${uu}PixelShader`] = Ru), yu && (Qu.e.GetShadersStore(Eu)[`${uu}VertexShader`] = yu)
      }
      static ResetCache() {
        Nu._BaseCache = {}
      }
    }
    Nu.LogShaderCodeOnCompilationError = !0, Nu.PersistentMode = !1, Nu.AutomaticallyClearCodeCache = !1, Nu._UniqueIdSeed = 0, Nu._BaseCache = {}, Nu.ShadersStore = Qu.e.ShadersStore, Nu.IncludesShadersStore = Qu.e.IncludesShadersStore
  },
  39717: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Vu,
      e: () => ku,
      i: () => Cu
    });
    var Eu = yu(39399),
      Ku = yu(36830),
      Qu = yu(36869),
      mu = yu(39693);
    const Ju = new Ku.d,
      Nu = new Ku.d,
      Xu = new Ku.d,
      Vu = {
        lD: () => {},
        eyeAtCamera: !0
      };

    function ru(uu, Ru, yu) {
      const Eu = yu.AEu(),
        Ku = Ru.AEu();
      for (let Qu = 0; Qu < 16; Qu++) Eu[Qu] = Ku[Qu];
      return Eu[12] -= uu.x, Eu[13] -= uu.y, Eu[14] -= uu.z, yu.markAsUpdated(), yu
    }

    function Bu(uu, Ru, yu) {
      return (0, Qu.k)(Ru, Nu), ru(uu, Nu, Xu), (0, Qu.k)(Xu, yu), yu
    }

    function xu(uu, Ru, yu) {
      if (!Vu.eyeAtCamera) return Bu(uu, Ru, yu);
      const Eu = yu.AEu(),
        Ku = Ru.AEu();
      for (let Qu = 0; Qu < 16; Qu++) Eu[Qu] = Ku[Qu];
      return Eu[12] = 0, Eu[13] = 0, Eu[14] = 0, yu.markAsUpdated(), yu
    }

    function Su(uu, Ru, yu, Eu) {
      return (0, Qu.r)(xu(uu, Ru, Eu), yu, Eu), Eu
    }

    function pu(uu, Ru, yu, Eu) {
      return (0, Qu.k)(yu, Nu), (0, Qu.r)(Ru, Nu, Xu), ru(uu, Xu, Nu), xu(uu, yu, Xu), (0, Qu.r)(Nu, Xu, Eu), Eu
    }

    function Tu(uu, Ru, yu, Eu, Ku, mu) {
      return (0, Qu.k)(yu, Nu), (0, Qu.r)(Ru, Nu, Xu), ru(uu, Xu, Nu), Su(uu, Eu, Ku, Xu), (0, Qu.r)(Nu, Xu, mu), mu
    }

    function Wu(uu, Ru) {
      const yu = Vu.lD();
      if (!yu || Ju === Ru) return Ru;
      Ju.updateFlag = Ru.updateFlag;
      const Eu = yu.floatingOriginOffset;
      switch (uu) {
        case "world":
          return ru(Eu, Ru, Ju);
        case "view":
          return xu(Eu, Ru, Ju);
        case "worldView":
          return pu(Eu, Ru, yu.getViewMatrix(), Ju);
        case "viewProjection":
          return Su(Eu, yu.getViewMatrix(), yu.getProjectionMatrix(), Ju);
        case "worldViewProjection":
          return Tu(Eu, Ru, yu.getTransformMatrix(), yu.getViewMatrix(), yu.getProjectionMatrix(), Ju);
        default:
          if (uu.startsWith("u_")) {
            const Ku = uu.toLowerCase();
            if (Ku.startsWith("u_worldviewprojection")) return Tu(Eu, Ru, yu.getTransformMatrix(), yu.getViewMatrix(), yu.getProjectionMatrix(), Ju);
            if (Ku.startsWith("u_viewprojection")) return Su(Eu, yu.getViewMatrix(), yu.getProjectionMatrix(), Ju);
            if (Ku.startsWith("u_worldview")) return pu(Eu, Ru, yu.getViewMatrix(), Ju);
            if (Ku.startsWith("u_world")) return ru(Eu, Ru, Ju);
            if (Ku.startsWith("u_view")) return xu(Eu, Ru, Ju)
          }
          return Ru
      }
    }
    const ju = mu.c,
      Hu = Eu.b,
      du = ju.prototype._updateMatrixForUniform,
      bu = Eu.b.prototype.setMatrix;

    function Cu() {
      Eu.b.prototype.setMatrix = bu, Hu._setMatrixOverride = void 0, ju.prototype._updateMatrixForUniform = du, ju.prototype._updateMatrixForUniformOverride = void 0
    }

    function ku() {
      Hu.prototype._setMatrixOverride = bu, Hu.prototype.setMatrix = function(uu, Ru) {
        return this._setMatrixOverride(uu, Wu(uu, Ru)), this
      }, ju.prototype._updateMatrixForUniformOverride = du, ju.prototype._updateMatrixForUniform = function(uu, Ru) {
        this._updateMatrixForUniformOverride(uu, Wu(uu, Ru))
      }
    }
  },
  39687: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      f: () => Ku
    });
    var Eu = yu(39681);

    function Ku(uu, Ru) {
      Ru.WHITEBALANCE && uu.push("whiteBalanceMatrix"), Ru.EXPOSURE && uu.push("exposureLinear"), Ru.CONTRAST && uu.push("contrast"), Ru.COLORGRADING && uu.push("colorTransformSettings"), (Ru.VIGNETTE || Ru.DITHER) && uu.push("vInverseScreenSize"), Ru.VIGNETTE && (uu.push("vignetteSettings1"), uu.push("vignetteSettings2")), Ru.COLORCURVES && (0, Eu.d)(uu), Ru.DITHER && uu.push("ditherIntensity")
    }

    function Qu(uu, Ru) {
      Ru.COLORGRADING && uu.push("txColorTransform")
    }
  },
  39676: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Iu,
      f: () => nu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36858),
      mu = yu(36991),
      Ju = yu(36865),
      Nu = yu(36830);
    const Xu = [
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
      Vu = 1e6 / Xu[Xu.length - 1][0],
      ru = 150;

    function Bu(uu, Ru) {
      const yu = Number.isNaN(uu) ? Vu : Math.max(uu, Vu),
        Eu = (0, Ju.Clamp)(1e6 / yu, Xu[0][0], Xu[Xu.length - 1][0]);
      let Ku = 0,
        Qu = Xu.length - 1;
      for (; Qu - Ku > 1;) {
        const uu = Ku + Qu >> 1;
        Xu[uu][0] <= Eu ? Ku = uu : Qu = uu
      }
      const mu = Ku,
        [Bu, xu, Su, pu] = Xu[mu],
        [Tu, Wu, ju, Hu] = Xu[mu + 1],
        du = (Eu - Bu) / (Tu - Bu),
        bu = Nu.n.Lerp(new Nu.n(xu, Su), new Nu.n(Wu, ju), du),
        Cu = Nu.n.Normalize(new Nu.n(1, pu)),
        ku = Nu.n.Normalize(new Nu.n(1, Hu)),
        eu = Nu.n.Normalize(Nu.n.Lerp(Cu, ku, du)),
        Au = (0, Ju.Clamp)(Ru, -150, ru);
      bu.oEu(eu.scale(Au / 3e3));
      const Du = 2 * bu.x - 8 * bu.y + 4,
        Mu = 3 * bu.x / Du,
        Iu = 2 * bu.y / Du;
      return new Nu.p(Mu / Iu, 1, (1 - Mu - Iu) / Iu)
    }
    const xu = Nu.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Su = Nu.d.Invert(xu);

    function pu(uu, Ru) {
      const yu = Ru > 0 ? uu / Ru : 10;
      return (0, Ju.Clamp)(yu, .1, 10)
    }

    function Tu(uu, Ru) {
      const yu = Nu.p.TransformNormal(uu, xu),
        Eu = Nu.p.TransformNormal(Ru, xu),
        Ku = Nu.d.FromArray([pu(Eu.x, yu.x), 0, 0, 0, 0, pu(Eu.y, yu.y), 0, 0, 0, 0, pu(Eu.z, yu.z), 0, 0, 0, 0, 1]);
      return xu.multiply(Ku).multiply(Su)
    }
    const Wu = new Nu.p(.95047, 1, 1.08883),
      ju = Nu.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Tu(Wu, Bu(6500, 0))),
      Hu = Nu.d.Invert(ju),
      du = Nu.p.TransformNormal(new Nu.p(1, 1, 1), ju);
    var bu = yu(39582),
      Cu = yu(39681);
    let ku = (() => {
      var uu;
      let Ru, yu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu = [],
        Wu = [],
        ju = [],
        Hu = [],
        du = [],
        ku = [],
        eu = [],
        Au = [],
        Du = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [],
        wu = [],
        Zu = [];
      return uu = class {
        constructor() {
          this._dirty = !0, this._tempColor = new mu.h(0, 0, 0, 0), this._globalCurve = new mu.h(0, 0, 0, 0), this._highlightsCurve = new mu.h(0, 0, 0, 0), this._midtonesCurve = new mu.h(0, 0, 0, 0), this._shadowsCurve = new mu.h(0, 0, 0, 0), this._positiveCurve = new mu.h(0, 0, 0, 0), this._negativeCurve = new mu.h(0, 0, 0, 0), this._globalHue = (0, Eu.l)(this, Tu, 30), this._globalDensity = ((0, Eu.l)(this, Wu), (0, Eu.l)(this, ju, 0)), this._globalSaturation = ((0, Eu.l)(this, Hu), (0, Eu.l)(this, du, 0)), this._globalExposure = ((0, Eu.l)(this, ku), (0, Eu.l)(this, eu, 0)), this._highlightsHue = ((0, Eu.l)(this, Au), (0, Eu.l)(this, Du, 30)), this._highlightsDensity = ((0, Eu.l)(this, Mu), (0, Eu.l)(this, Iu, 0)), this._highlightsSaturation = ((0, Eu.l)(this, Gu), (0, Eu.l)(this, Uu, 0)), this._highlightsExposure = ((0, Eu.l)(this, nu), (0, Eu.l)(this, su, 0)), this._midtonesHue = ((0, Eu.l)(this, tu), (0, Eu.l)(this, lu, 30)), this._midtonesDensity = ((0, Eu.l)(this, gu), (0, Eu.l)(this, cu, 0)), this._midtonesSaturation = ((0, Eu.l)(this, Lu), (0, Eu.l)(this, zu, 0)), this._midtonesExposure = ((0, Eu.l)(this, Fu), (0, Eu.l)(this, wu, 0)), this._shadowsHue = ((0, Eu.l)(this, Zu), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(uu) {
          this._globalHue = uu, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(uu) {
          this._globalDensity = uu, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(uu) {
          this._globalSaturation = uu, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(uu) {
          this._globalExposure = uu, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(uu) {
          this._highlightsHue = uu, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(uu) {
          this._highlightsDensity = uu, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(uu) {
          this._highlightsSaturation = uu, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(uu) {
          this._highlightsExposure = uu, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(uu) {
          this._midtonesHue = uu, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(uu) {
          this._midtonesDensity = uu, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(uu) {
          this._midtonesSaturation = uu, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(uu) {
          this._midtonesExposure = uu, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(uu) {
          this._shadowsHue = uu, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(uu) {
          this._shadowsDensity = uu, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(uu) {
          this._shadowsSaturation = uu, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(uu) {
          this._shadowsExposure = uu, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Ru, yu, Eu, Ku, Qu) {
          null != Ru && (Ru = uu._Clamp(Ru, 0, 360), yu = uu._Clamp(yu, -100, 100), Eu = uu._Clamp(Eu, -100, 100), Ku = uu._Clamp(Ku, -100, 100), yu = uu._ApplyColorGradingSliderNonlinear(yu), yu *= .5, Ku = uu._ApplyColorGradingSliderNonlinear(Ku), yu < 0 && (yu *= -1, Ru = (Ru + 180) % 360), uu._FromHSBToRef(Ru, yu, 50 + .25 * Ku, Qu), Qu.scaleToRef(2, Qu), Qu.a = 1 + .01 * Eu)
        }
        static _ApplyColorGradingSliderNonlinear(uu) {
          uu /= 100;
          let Ru = Math.abs(uu);
          return Ru = Math.pow(Ru, 2), uu < 0 && (Ru *= -1), Ru *= 100, Ru
        }
        static _FromHSBToRef(Ru, yu, Eu, Ku) {
          let Qu = uu._Clamp(Ru, 0, 360);
          const mu = uu._Clamp(yu / 100, 0, 1),
            Ju = uu._Clamp(Eu / 100, 0, 1);
          if (0 === mu) Ku.r = Ju, Ku.g = Ju, Ku.b = Ju;
          else {
            Qu /= 60;
            const uu = Math.floor(Qu),
              Ru = Qu - uu,
              yu = Ju * (1 - mu),
              Eu = Ju * (1 - mu * Ru),
              Nu = Ju * (1 - mu * (1 - Ru));
            switch (uu) {
              case 0:
                Ku.r = Ju, Ku.g = Nu, Ku.b = yu;
                break;
              case 1:
                Ku.r = Eu, Ku.g = Ju, Ku.b = yu;
                break;
              case 2:
                Ku.r = yu, Ku.g = Ju, Ku.b = Nu;
                break;
              case 3:
                Ku.r = yu, Ku.g = Eu, Ku.b = Ju;
                break;
              case 4:
                Ku.r = Nu, Ku.g = yu, Ku.b = Ju;
                break;
              default:
                Ku.r = Ju, Ku.g = yu, Ku.b = Eu
            }
          }
          Ku.a = 1
        }
        static _Clamp(uu, Ru, yu) {
          return Math.min(Math.max(uu, Ru), yu)
        }
        clone() {
          return bu.c.Clone((() => new uu), this)
        }
        serialize() {
          return bu.c.Serialize(this)
        }
        _bind(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), uu && (uu.setFloat4(Ru, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), uu.setFloat4(yu, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), uu.setFloat4(Eu, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const mu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], Vu = [(0, Ku.K)()], ru = [(0, Ku.K)()], Bu = [(0, Ku.K)()], xu = [(0, Ku.K)()], Su = [(0, Ku.K)()], pu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalHue" in uu,
            get: uu => uu._globalHue,
            set: (uu, Ru) => {
              uu._globalHue = Ru
            }
          },
          metadata: mu
        }, Tu, Wu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalDensity" in uu,
            get: uu => uu._globalDensity,
            set: (uu, Ru) => {
              uu._globalDensity = Ru
            }
          },
          metadata: mu
        }, ju, Hu), (0, Eu.h)(null, null, Qu, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalSaturation" in uu,
            get: uu => uu._globalSaturation,
            set: (uu, Ru) => {
              uu._globalSaturation = Ru
            }
          },
          metadata: mu
        }, du, ku), (0, Eu.h)(null, null, Ju, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalExposure" in uu,
            get: uu => uu._globalExposure,
            set: (uu, Ru) => {
              uu._globalExposure = Ru
            }
          },
          metadata: mu
        }, eu, Au), (0, Eu.h)(null, null, Nu, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsHue" in uu,
            get: uu => uu._highlightsHue,
            set: (uu, Ru) => {
              uu._highlightsHue = Ru
            }
          },
          metadata: mu
        }, Du, Mu), (0, Eu.h)(null, null, Xu, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsDensity" in uu,
            get: uu => uu._highlightsDensity,
            set: (uu, Ru) => {
              uu._highlightsDensity = Ru
            }
          },
          metadata: mu
        }, Iu, Gu), (0, Eu.h)(null, null, Vu, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsSaturation" in uu,
            get: uu => uu._highlightsSaturation,
            set: (uu, Ru) => {
              uu._highlightsSaturation = Ru
            }
          },
          metadata: mu
        }, Uu, nu), (0, Eu.h)(null, null, ru, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsExposure" in uu,
            get: uu => uu._highlightsExposure,
            set: (uu, Ru) => {
              uu._highlightsExposure = Ru
            }
          },
          metadata: mu
        }, su, tu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesHue" in uu,
            get: uu => uu._midtonesHue,
            set: (uu, Ru) => {
              uu._midtonesHue = Ru
            }
          },
          metadata: mu
        }, lu, gu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesDensity" in uu,
            get: uu => uu._midtonesDensity,
            set: (uu, Ru) => {
              uu._midtonesDensity = Ru
            }
          },
          metadata: mu
        }, cu, Lu), (0, Eu.h)(null, null, Su, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesSaturation" in uu,
            get: uu => uu._midtonesSaturation,
            set: (uu, Ru) => {
              uu._midtonesSaturation = Ru
            }
          },
          metadata: mu
        }, zu, Fu), (0, Eu.h)(null, null, pu, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesExposure" in uu,
            get: uu => uu._midtonesExposure,
            set: (uu, Ru) => {
              uu._midtonesExposure = Ru
            }
          },
          metadata: mu
        }, wu, Zu), mu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mu
        })
      })(), uu.PrepareUniforms = Cu.d, uu
    })();

    function eu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      uu._bind(Ru, yu, Eu, Ku)
    }
    var Au = yu(39496),
      Du = yu(39687),
      Mu = yu(36871);
    let Iu = (() => {
        var uu;
        let Ru, yu, Xu, xu, Su, pu, Wu, Cu, Mu, Iu, Gu, Uu, nu, su, tu, lu, gu, cu, Lu, zu, Fu, wu, Zu, hu, Pu, iu, Yu, ou, qu = [],
          Ou = [],
          vu = [],
          au = [],
          fu = [],
          uR = [],
          RR = [],
          yR = [],
          ER = [],
          KR = [],
          QR = [],
          mR = [],
          JR = [],
          NR = [],
          XR = [],
          VR = [],
          rR = [],
          BR = [],
          xR = [],
          SR = [],
          pR = [],
          TR = [],
          WR = [],
          jR = [],
          HR = [],
          dR = [],
          bR = [],
          CR = [],
          kR = [],
          eR = [],
          AR = [],
          DR = [],
          MR = [],
          IR = [],
          GR = [],
          UR = [],
          nR = [],
          sR = [],
          tR = [],
          lR = [],
          gR = [],
          cR = [],
          LR = [],
          zR = [],
          FR = [],
          wR = [],
          ZR = [],
          hR = [],
          PR = [],
          iR = [],
          YR = [],
          oR = [],
          qR = [],
          OR = [],
          vR = [],
          aR = [];
        return uu = class {
          constructor() {
            this.colorCurves = (0, Eu.l)(this, qu, new ku), this._colorCurvesEnabled = ((0, Eu.l)(this, Ou), (0, Eu.l)(this, vu, !1)), this._colorGradingTexture = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, void 0)), this._colorGradingEnabled = ((0, Eu.l)(this, uR), (0, Eu.l)(this, RR, !1)), this._colorGradingWithGreenDepth = ((0, Eu.l)(this, yR), (0, Eu.l)(this, ER, !0)), this._colorGradingBGR = ((0, Eu.l)(this, KR), (0, Eu.l)(this, QR, !0)), this._exposure = ((0, Eu.l)(this, mR), (0, Eu.l)(this, JR, 1)), this._toneMappingEnabled = ((0, Eu.l)(this, NR), (0, Eu.l)(this, XR, !1)), this._toneMappingType = ((0, Eu.l)(this, VR), (0, Eu.l)(this, rR, uu.TONEMAPPING_STANDARD)), this._contrast = ((0, Eu.l)(this, BR), (0, Eu.l)(this, xR, 1)), this._whiteBalanceEnabled = ((0, Eu.l)(this, SR), (0, Eu.l)(this, pR, !1)), this._temperature = ((0, Eu.l)(this, TR), (0, Eu.l)(this, WR, 6500)), this._tint = ((0, Eu.l)(this, jR), (0, Eu.l)(this, HR, 0)), this._whiteBalanceMatrix = ((0, Eu.l)(this, dR), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Eu.l)(this, bR, 0), this.vignetteCenterX = ((0, Eu.l)(this, CR), (0, Eu.l)(this, kR, 0)), this.vignetteCenterY = ((0, Eu.l)(this, eR), (0, Eu.l)(this, AR, 0)), this.vignetteWeight = ((0, Eu.l)(this, DR), (0, Eu.l)(this, MR, 1.5)), this.vignetteColor = ((0, Eu.l)(this, IR), (0, Eu.l)(this, GR, new mu.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Eu.l)(this, UR), (0, Eu.l)(this, nR, .5)), this._vignetteBlendMode = ((0, Eu.l)(this, sR), (0, Eu.l)(this, tR, uu.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Eu.l)(this, lR), (0, Eu.l)(this, gR, !1)), this._ditheringEnabled = ((0, Eu.l)(this, cR), (0, Eu.l)(this, LR, !1)), this._ditheringIntensity = ((0, Eu.l)(this, zR), (0, Eu.l)(this, FR, 1 / 255)), this._skipFinalColorClamp = ((0, Eu.l)(this, wR), (0, Eu.l)(this, ZR, !1)), this._applyByPostProcess = ((0, Eu.l)(this, hR), (0, Eu.l)(this, PR, !1)), this._isEnabled = ((0, Eu.l)(this, iR), (0, Eu.l)(this, YR, !0)), this.outputTextureWidth = ((0, Eu.l)(this, oR), (0, Eu.l)(this, qR, 0)), this.outputTextureHeight = ((0, Eu.l)(this, OR), (0, Eu.l)(this, vR, 0)), this.onUpdateParameters = ((0, Eu.l)(this, aR), new Qu.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(uu) {
            this._colorCurvesEnabled !== uu && (this._colorCurvesEnabled = uu, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(uu) {
            this._colorGradingTexture !== uu && (this._colorGradingTexture = uu, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(uu) {
            this._colorGradingEnabled !== uu && (this._colorGradingEnabled = uu, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(uu) {
            this._colorGradingWithGreenDepth !== uu && (this._colorGradingWithGreenDepth = uu, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(uu) {
            this._colorGradingBGR !== uu && (this._colorGradingBGR = uu, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(uu) {
            this._exposure !== uu && (this._exposure = uu, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(uu) {
            this._toneMappingEnabled !== uu && (this._toneMappingEnabled = uu, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(uu) {
            this._toneMappingType !== uu && (this._toneMappingType = uu, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(uu) {
            this._contrast !== uu && (this._contrast = uu, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(uu) {
            this._whiteBalanceEnabled !== uu && (this._whiteBalanceEnabled = uu, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(uu) {
            uu = Number.isNaN(uu) ? Vu : Math.max(uu, Vu), this._temperature !== uu && (this._temperature = uu, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(uu) {
            uu = (0, Ju.Clamp)(uu, -150, ru), this._tint !== uu && (this._tint = uu, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(uu, Ru) {
              const yu = Tu(Bu(uu, Ru), du),
                Eu = ju.multiply(yu).multiply(Hu);
              return Nu.d.GetAsMatrix3x3(Eu)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(uu) {
            this.vignetteCenterY = uu
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(uu) {
            this.vignetteCenterX = uu
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(uu) {
            this._vignetteBlendMode !== uu && (this._vignetteBlendMode = uu, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(uu) {
            this._vignetteEnabled !== uu && (this._vignetteEnabled = uu, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(uu) {
            this._ditheringEnabled !== uu && (this._ditheringEnabled = uu, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(uu) {
            this._ditheringIntensity !== uu && (this._ditheringIntensity = uu, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(uu) {
            this._skipFinalColorClamp !== uu && (this._skipFinalColorClamp = uu, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(uu) {
            this._applyByPostProcess !== uu && (this._applyByPostProcess = uu, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(uu) {
            this._isEnabled !== uu && (this._isEnabled = uu, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Ru) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Ru.WHITEBALANCE = !1, Ru.VIGNETTE = !1, Ru.TONEMAPPING = 0, Ru.CONTRAST = !1, Ru.EXPOSURE = !1, Ru.COLORCURVES = !1, Ru.COLORGRADING = !1, Ru.COLORGRADING3D = !1, Ru.DITHER = !1, Ru.IMAGEPROCESSING = !1, Ru.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Ru.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Ru.WHITEBALANCE = this._whiteBalanceEnabled, Ru.VIGNETTE = this.vignetteEnabled, Ru.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === uu._VIGNETTEMODE_MULTIPLY, Ru.VIGNETTEBLENDMODEOPAQUE = !Ru.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case uu.TONEMAPPING_KHR_PBR_NEUTRAL:
                Ru.TONEMAPPING = 3;
                break;
              case uu.TONEMAPPING_ACES:
                Ru.TONEMAPPING = 2;
                break;
              default:
                Ru.TONEMAPPING = 1
            } else Ru.TONEMAPPING = 0;
            Ru.CONTRAST = 1 !== this.contrast, Ru.EXPOSURE = 1 !== this.exposure, Ru.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Ru.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Ru.COLORGRADING ? Ru.COLORGRADING3D = this.colorGradingTexture.is3D : Ru.COLORGRADING3D = !1, Ru.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Ru.SAMPLER3DBGRMAP = this.colorGradingBGR, Ru.DITHER = this._ditheringEnabled, Ru.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Ru.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Ru.IMAGEPROCESSING = Ru.WHITEBALANCE || Ru.VIGNETTE || !!Ru.TONEMAPPING || Ru.CONTRAST || Ru.EXPOSURE || Ru.COLORCURVES || Ru.COLORGRADING || Ru.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(uu, Ru) {
            if (this._whiteBalanceEnabled && uu.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && eu(this.colorCurves, uu), this._vignetteEnabled || this._ditheringEnabled) {
              const yu = 1 / (this.outputTextureWidth || uu.eS().getRenderWidth()),
                Eu = 1 / (this.outputTextureHeight || uu.eS().getRenderHeight());
              if (uu.setFloat2("vInverseScreenSize", yu, Eu), this._ditheringEnabled && uu.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Ku = null != Ru ? Ru : Eu / yu;
                let Qu = Math.tan(.5 * this.vignetteCameraFov),
                  mu = Qu * Ku;
                const Ju = Math.sqrt(mu * Qu);
                mu = (0, Au.k)(mu, Ju, this.vignetteStretch), Qu = (0, Au.k)(Qu, Ju, this.vignetteStretch), uu.setFloat4("vignetteSettings1", mu, Qu, -mu * this.vignetteCenterX, -Qu * this.vignetteCenterY);
                const Nu = -2 * this.vignetteWeight;
                uu.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Nu)
              }
            }
            if (uu.setFloat("exposureLinear", this.exposure), uu.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              uu.setTexture("txColorTransform", this.colorGradingTexture);
              const Ru = this.colorGradingTexture.getSize().height;
              uu.setFloat4("colorTransformSettings", (Ru - 1) / Ru, .5 / Ru, Ru, this.colorGradingTexture.level)
            }
          }
          clone() {
            return bu.c.Clone((() => new uu), this)
          }
          serialize() {
            return bu.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ru = [(0, Ku.k)()], yu = [(0, Ku.K)()], Xu = [(0, Ku.A)("colorGradingTexture")], xu = [(0, Ku.K)()], Su = [(0, Ku.K)()], pu = [(0, Ku.K)()], Wu = [(0, Ku.K)()], Cu = [(0, Ku.K)()], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], Gu = [(0, Ku.K)()], Uu = [(0, Ku.K)()], nu = [(0, Ku.K)()], su = [(0, Ku.K)()], tu = [(0, Ku.K)()], lu = [(0, Ku.K)()], gu = [(0, Ku.K)()], cu = [(0, Ku.r)()], Lu = [(0, Ku.K)()], zu = [(0, Ku.K)()], Fu = [(0, Ku.K)()], wu = [(0, Ku.K)()], Zu = [(0, Ku.K)()], hu = [(0, Ku.K)()], Pu = [(0, Ku.K)()], iu = [(0, Ku.K)()], Yu = [(0, Ku.K)()], ou = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: uu => "colorCurves" in uu,
              get: uu => uu.colorCurves,
              set: (uu, Ru) => {
                uu.colorCurves = Ru
              }
            },
            metadata: Qu
          }, qu, Ou), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorCurvesEnabled" in uu,
              get: uu => uu._colorCurvesEnabled,
              set: (uu, Ru) => {
                uu._colorCurvesEnabled = Ru
              }
            },
            metadata: Qu
          }, vu, au), (0, Eu.h)(null, null, Xu, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingTexture" in uu,
              get: uu => uu._colorGradingTexture,
              set: (uu, Ru) => {
                uu._colorGradingTexture = Ru
              }
            },
            metadata: Qu
          }, fu, uR), (0, Eu.h)(null, null, xu, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingEnabled" in uu,
              get: uu => uu._colorGradingEnabled,
              set: (uu, Ru) => {
                uu._colorGradingEnabled = Ru
              }
            },
            metadata: Qu
          }, RR, yR), (0, Eu.h)(null, null, Su, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingWithGreenDepth" in uu,
              get: uu => uu._colorGradingWithGreenDepth,
              set: (uu, Ru) => {
                uu._colorGradingWithGreenDepth = Ru
              }
            },
            metadata: Qu
          }, ER, KR), (0, Eu.h)(null, null, pu, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingBGR" in uu,
              get: uu => uu._colorGradingBGR,
              set: (uu, Ru) => {
                uu._colorGradingBGR = Ru
              }
            },
            metadata: Qu
          }, QR, mR), (0, Eu.h)(null, null, Wu, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: uu => "_exposure" in uu,
              get: uu => uu._exposure,
              set: (uu, Ru) => {
                uu._exposure = Ru
              }
            },
            metadata: Qu
          }, JR, NR), (0, Eu.h)(null, null, Cu, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_toneMappingEnabled" in uu,
              get: uu => uu._toneMappingEnabled,
              set: (uu, Ru) => {
                uu._toneMappingEnabled = Ru
              }
            },
            metadata: Qu
          }, XR, VR), (0, Eu.h)(null, null, Mu, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: uu => "_toneMappingType" in uu,
              get: uu => uu._toneMappingType,
              set: (uu, Ru) => {
                uu._toneMappingType = Ru
              }
            },
            metadata: Qu
          }, rR, BR), (0, Eu.h)(null, null, Iu, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: uu => "_contrast" in uu,
              get: uu => uu._contrast,
              set: (uu, Ru) => {
                uu._contrast = Ru
              }
            },
            metadata: Qu
          }, xR, SR), (0, Eu.h)(null, null, Gu, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_whiteBalanceEnabled" in uu,
              get: uu => uu._whiteBalanceEnabled,
              set: (uu, Ru) => {
                uu._whiteBalanceEnabled = Ru
              }
            },
            metadata: Qu
          }, pR, TR), (0, Eu.h)(null, null, Uu, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: uu => "_temperature" in uu,
              get: uu => uu._temperature,
              set: (uu, Ru) => {
                uu._temperature = Ru
              }
            },
            metadata: Qu
          }, WR, jR), (0, Eu.h)(null, null, nu, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: uu => "_tint" in uu,
              get: uu => uu._tint,
              set: (uu, Ru) => {
                uu._tint = Ru
              }
            },
            metadata: Qu
          }, HR, dR), (0, Eu.h)(null, null, su, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteStretch" in uu,
              get: uu => uu.vignetteStretch,
              set: (uu, Ru) => {
                uu.vignetteStretch = Ru
              }
            },
            metadata: Qu
          }, bR, CR), (0, Eu.h)(null, null, tu, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteCenterX" in uu,
              get: uu => uu.vignetteCenterX,
              set: (uu, Ru) => {
                uu.vignetteCenterX = Ru
              }
            },
            metadata: Qu
          }, kR, eR), (0, Eu.h)(null, null, lu, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteCenterY" in uu,
              get: uu => uu.vignetteCenterY,
              set: (uu, Ru) => {
                uu.vignetteCenterY = Ru
              }
            },
            metadata: Qu
          }, AR, DR), (0, Eu.h)(null, null, gu, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteWeight" in uu,
              get: uu => uu.vignetteWeight,
              set: (uu, Ru) => {
                uu.vignetteWeight = Ru
              }
            },
            metadata: Qu
          }, MR, IR), (0, Eu.h)(null, null, cu, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteColor" in uu,
              get: uu => uu.vignetteColor,
              set: (uu, Ru) => {
                uu.vignetteColor = Ru
              }
            },
            metadata: Qu
          }, GR, UR), (0, Eu.h)(null, null, Lu, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteCameraFov" in uu,
              get: uu => uu.vignetteCameraFov,
              set: (uu, Ru) => {
                uu.vignetteCameraFov = Ru
              }
            },
            metadata: Qu
          }, nR, sR), (0, Eu.h)(null, null, zu, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "_vignetteBlendMode" in uu,
              get: uu => uu._vignetteBlendMode,
              set: (uu, Ru) => {
                uu._vignetteBlendMode = Ru
              }
            },
            metadata: Qu
          }, tR, lR), (0, Eu.h)(null, null, Fu, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_vignetteEnabled" in uu,
              get: uu => uu._vignetteEnabled,
              set: (uu, Ru) => {
                uu._vignetteEnabled = Ru
              }
            },
            metadata: Qu
          }, gR, cR), (0, Eu.h)(null, null, wu, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_ditheringEnabled" in uu,
              get: uu => uu._ditheringEnabled,
              set: (uu, Ru) => {
                uu._ditheringEnabled = Ru
              }
            },
            metadata: Qu
          }, LR, zR), (0, Eu.h)(null, null, Zu, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: uu => "_ditheringIntensity" in uu,
              get: uu => uu._ditheringIntensity,
              set: (uu, Ru) => {
                uu._ditheringIntensity = Ru
              }
            },
            metadata: Qu
          }, FR, wR), (0, Eu.h)(null, null, hu, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: uu => "_skipFinalColorClamp" in uu,
              get: uu => uu._skipFinalColorClamp,
              set: (uu, Ru) => {
                uu._skipFinalColorClamp = Ru
              }
            },
            metadata: Qu
          }, ZR, hR), (0, Eu.h)(null, null, Pu, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: uu => "_applyByPostProcess" in uu,
              get: uu => uu._applyByPostProcess,
              set: (uu, Ru) => {
                uu._applyByPostProcess = Ru
              }
            },
            metadata: Qu
          }, PR, iR), (0, Eu.h)(null, null, iu, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_isEnabled" in uu,
              get: uu => uu._isEnabled,
              set: (uu, Ru) => {
                uu._isEnabled = Ru
              }
            },
            metadata: Qu
          }, YR, oR), (0, Eu.h)(null, null, Yu, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: uu => "outputTextureWidth" in uu,
              get: uu => uu.outputTextureWidth,
              set: (uu, Ru) => {
                uu.outputTextureWidth = Ru
              }
            },
            metadata: Qu
          }, qR, OR), (0, Eu.h)(null, null, ou, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "outputTextureHeight" in uu,
              get: uu => uu.outputTextureHeight,
              set: (uu, Ru) => {
                uu.outputTextureHeight = Ru
              }
            },
            metadata: Qu
          }, vR, aR), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu.TONEMAPPING_STANDARD = 0, uu.TONEMAPPING_ACES = 1, uu.TONEMAPPING_KHR_PBR_NEUTRAL = 2, uu.PrepareUniforms = Du.f, uu.PrepareSamplers = Du.e, uu._VIGNETTEMODE_MULTIPLY = 0, uu._VIGNETTEMODE_OPAQUE = 1, uu
      })(),
      Gu = !1;

    function Uu(uu) {
      const Ru = bu.c.Parse((() => new Iu), uu, null, null);
      return void 0 !== uu.vignetteCentreX && (Ru.vignetteCenterX = uu.vignetteCentreX), void 0 !== uu.vignetteCentreY && (Ru.vignetteCenterY = uu.vignetteCentreY), Ru
    }

    function nu() {
      Gu || (Gu = !0, Iu.Parse = Uu, bu.c._ImageProcessingConfigurationParser = Uu, (0, Mu.c)("BABYLON.ImageProcessingConfiguration", Iu))
    }
  },
  39693: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(38448),
      Ku = yu(39655);
    class Qu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = uu, this._noUBO = !uu.supportsUniformBuffers || Ku, this._dynamic = yu, this._name = Eu ?? "no-name", this._data = Ru || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Qu && this._engine._features.trackUbosInFrame || !0 === Qu) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.v_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.v_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(uu) {
        let Ru;
        if (Ru = uu <= 2 ? uu : 4, this._uniformLocationPointer % Ru !== 0) {
          const uu = this._uniformLocationPointer;
          this._uniformLocationPointer += Ru - this._uniformLocationPointer % Ru;
          const yu = this._uniformLocationPointer - uu;
          for (let Ru = 0; Ru < yu; Ru++) this._data.push(0)
        }
      }
      addUniform(uu, Ru) {
        let yu, Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Eu > 0 && "number" === typeof Ru && (this._uniformArraySizes[uu] = {
            strideSize: Ru,
            arraySize: Eu
          }), void 0 === this._uniformLocations[uu] && (this._uniformNames.push(uu), !this._noUBO)) {
          if (Eu > 0) {
            if (Ru instanceof Array) throw "addUniform should not be use with Array in UBO: " + uu;
            if (this._fillAlignment(4), 16 == Ru) Ru *= Eu;
            else {
              Ru = Ru * Eu + (4 - Ru) * Eu
            }
            yu = [];
            for (let uu = 0; uu < Ru; uu++) yu.push(0)
          } else {
            if (Ru instanceof Array) yu = Ru, Ru = yu.length;
            else {
              yu = [];
              for (let uu = 0; uu < Ru; uu++) yu.push(0)
            }
            this._fillAlignment(Ru)
          }
          this._uniformSizes[uu] = Ru, this._uniformLocations[uu] = this._uniformLocationPointer, this._uniformLocationPointer += Ru;
          for (let uu = 0; uu < Ru; uu++) this._data.push(yu[uu]);
          this._needSync = !0
        }
      }
      addMatrix(uu, Ru) {
        this.addUniform(uu, Array.prototype.slice.call(Ru.AEu()))
      }
      addFloat2(uu, Ru, yu) {
        const Eu = [Ru, yu];
        this.addUniform(uu, Eu)
      }
      addFloat3(uu, Ru, yu, Eu) {
        const Ku = [Ru, yu, Eu];
        this.addUniform(uu, Ku)
      }
      addColor3(uu, Ru) {
        const yu = [Ru.r, Ru.g, Ru.b];
        this.addUniform(uu, yu)
      }
      addColor4(uu, Ru, yu) {
        const Eu = [Ru.r, Ru.g, Ru.b, yu];
        this.addUniform(uu, Eu)
      }
      addVector3(uu, Ru) {
        const yu = [Ru.x, Ru.y, Ru.z];
        this.addUniform(uu, yu)
      }
      addMatrix3x3(uu) {
        this.addUniform(uu, 12)
      }
      addMatrix2x2(uu) {
        this.addUniform(uu, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const uu = [];
        let Ru = 0;
        for (const yu in this._uniformLocations)
          if (uu.push(yu), 10 === ++Ru) break;
        return uu.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const uu of this._ownerListsBySlot.values()) this._removeOwnerBacklink(uu);
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
      set name(uu) {
        this._name = uu
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(uu, Ru) {
        for (let yu = 0; yu < uu.length; ++yu)
          if (uu[yu] !== Ru[yu]) return !1;
        return !0
      }
      _copyBuffer(uu, Ru) {
        for (let yu = 0; yu < uu.length; ++yu) Ru[yu] = uu[yu]
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
      _updateOwnerKeyed(uu) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Ru = this._slotByOwner.get(uu);
        if (void 0 === Ru && (Ru = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(uu, Ru), this._ownerCount++, uu._uniformBuffersWithOwnedSlot || (uu._uniformBuffersWithOwnedSlot = []), uu._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Ru, uu._uniformBuffersWithOwnedSlot)), this._slotGeneration[Ru] === this._dataGeneration) return this._bufferIndex = Ru, this._buffer = this._buffers[Ru][0], this.bindUniformBuffer(), this._slotFrameId[Ru] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const yu = this._buffers[Ru][1];
        this._slotFrameId[Ru] === this._currentFrameId && yu && !this._buffersEqual(this._bufferData, yu) && (Ru = this._takeFreeSlot(!1)), this._bufferIndex = Ru, this._buffer = this._buffers[Ru][0], this.bindUniformBuffer();
        const Eu = this._buffers[Ru][1];
        Eu && this._buffersEqual(this._bufferData, Eu) || (Eu && this._copyBuffer(this._bufferData, Eu), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Ru] = this._currentFrameId, this._slotGeneration[Ru] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(uu) {
        for (let yu = 0; yu < this._freeSlots.length; ++yu) {
          const Ru = this._freeSlots[yu];
          if (this._slotFrameId[Ru] !== this._currentFrameId) return uu && (this._freeSlots[yu] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Ru
        }
        this._rebuild();
        const Ru = this._buffers.length - 1;
        return uu || this._freeSlots.push(Ru), Ru
      }
      _releaseOwnerSlot(uu) {
        const Ru = this._slotByOwner?.get(uu);
        if (void 0 === Ru) return;
        this._slotByOwner.delete(uu);
        const yu = this._ownerListsBySlot.get(Ru);
        yu && (this._removeOwnerBacklink(yu), this._ownerListsBySlot.delete(Ru)), this._ownerCount--, this._freeSlots.push(Ru)
      }
      _removeOwnerBacklink(uu) {
        const Ru = uu.indexOf(this); - 1 !== Ru && (uu[Ru] = uu[uu.length - 1], uu.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(uu, Ru, yu) {
        this._checkNewFrame();
        let Ku = this._uniformLocations[uu];
        if (void 0 === Ku) {
          if (this._buffer) return void Eu.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + uu);
          this.addUniform(uu, yu), Ku = this._uniformLocations[uu]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let uu = 0; uu < yu; uu++) this._bufferData[Ku + uu] = Ru[uu];
          this._dataGeneration++
        } else {
          let uu = !1;
          for (let Eu = 0; Eu < yu; Eu++)(16 === yu && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Ku + Eu] !== Math.fround(Ru[Eu])) && (uu = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Ku + Eu] = Ru[Eu]);
          this._needSync = this._needSync || uu, uu && this._dataGeneration++
        }
      }
      updateUniformArray(uu, Ru, yu) {
        this._checkNewFrame();
        const Qu = this._uniformLocations[uu];
        if (void 0 === Qu) return void Eu.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const mu = this._uniformArraySizes[uu];
        if (this._dynamic) {
          for (let uu = 0; uu < yu; uu++) this._bufferData[Qu + uu] = Ru[uu];
          this._dataGeneration++
        } else {
          let uu = !1,
            Eu = 0,
            Ju = 0;
          for (let Nu = 0; Nu < yu; Nu++)
            if (this._bufferData[Qu + 4 * Ju + Eu] !== Ku.i.FloatRound(Ru[Nu]) && (uu = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Qu + 4 * Ju + Eu] = Ru[Nu]), Eu++, Eu === mu.strideSize) {
              for (; Eu < 4; Eu++) this._bufferData[Qu + 4 * Ju + Eu] = 0;
              Eu = 0, Ju++
            } this._needSync = this._needSync || uu, uu && this._dataGeneration++
        }
      }
      _cacheMatrix(uu, Ru) {
        this._checkNewFrame();
        const yu = this._valueCache[uu],
          Eu = Ru.updateFlag;
        return (void 0 === yu || yu !== Eu) && (this._valueCache[uu] = Eu, !0)
      }
      _updateMatrix3x3ForUniform(uu, Ru) {
        for (let yu = 0; yu < 3; yu++) Qu._TempBuffer[4 * yu] = Ru[3 * yu], Qu._TempBuffer[4 * yu + 1] = Ru[3 * yu + 1], Qu._TempBuffer[4 * yu + 2] = Ru[3 * yu + 2], Qu._TempBuffer[4 * yu + 3] = 0;
        this.updateUniform(uu, Qu._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(uu, Ru) {
        this._currentEffect.setMatrix3x3(uu, Ru)
      }
      _updateMatrix2x2ForEffect(uu, Ru) {
        this._currentEffect.setMatrix2x2(uu, Ru)
      }
      _updateMatrix2x2ForUniform(uu, Ru) {
        for (let yu = 0; yu < 2; yu++) Qu._TempBuffer[4 * yu] = Ru[2 * yu], Qu._TempBuffer[4 * yu + 1] = Ru[2 * yu + 1], Qu._TempBuffer[4 * yu + 2] = 0, Qu._TempBuffer[4 * yu + 3] = 0;
        this.updateUniform(uu, Qu._TempBuffer, 8)
      }
      _updateFloatForEffect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(uu + yu, Ru)
      }
      _updateFloatForUniform(uu, Ru) {
        Qu._TempBuffer[0] = Ru, this.updateUniform(uu, Qu._TempBuffer, 1)
      }
      _updateFloat2ForEffect(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(uu + Eu, Ru, yu)
      }
      _updateFloat2ForUniform(uu, Ru, yu) {
        Qu._TempBuffer[0] = Ru, Qu._TempBuffer[1] = yu, this.updateUniform(uu, Qu._TempBuffer, 2)
      }
      _updateFloat3ForEffect(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(uu + Ku, Ru, yu, Eu)
      }
      _updateFloat3ForUniform(uu, Ru, yu, Eu) {
        Qu._TempBuffer[0] = Ru, Qu._TempBuffer[1] = yu, Qu._TempBuffer[2] = Eu, this.updateUniform(uu, Qu._TempBuffer, 3)
      }
      _updateFloat4ForEffect(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(uu + Qu, Ru, yu, Eu, Ku)
      }
      _updateFloat4ForUniform(uu, Ru, yu, Eu, Ku) {
        Qu._TempBuffer[0] = Ru, Qu._TempBuffer[1] = yu, Qu._TempBuffer[2] = Eu, Qu._TempBuffer[3] = Ku, this.updateUniform(uu, Qu._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[uu]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(uu + yu, Ru);
            break;
          case 3:
            this._currentEffect.setFloatArray3(uu + yu, Ru);
            break;
          case 4:
            this._currentEffect.setFloatArray4(uu + yu, Ru);
            break;
          default:
            this._currentEffect.setFloatArray(uu + yu, Ru)
        }
      }
      _updateFloatArrayForUniform(uu, Ru) {
        this.updateUniformArray(uu, Ru, Ru.length)
      }
      _updateArrayForEffect(uu, Ru) {
        this._currentEffect.setArray(uu, Ru)
      }
      _updateArrayForUniform(uu, Ru) {
        this.updateUniformArray(uu, Ru, Ru.length)
      }
      _updateIntArrayForEffect(uu, Ru) {
        this._currentEffect.setIntArray(uu, Ru)
      }
      _updateIntArrayForUniform(uu, Ru) {
        Qu._TempBufferInt32View.set(Ru), this.updateUniformArray(uu, Qu._TempBuffer, Ru.length)
      }
      _updateUIntArrayForEffect(uu, Ru) {
        this._currentEffect.setUIntArray(uu, Ru)
      }
      _updateUIntArrayForUniform(uu, Ru) {
        Qu._TempBufferUInt32View.set(Ru), this.updateUniformArray(uu, Qu._TempBuffer, Ru.length)
      }
      _updateMatrixForEffect(uu, Ru) {
        this._currentEffect.setMatrix(uu, Ru)
      }
      _updateMatrixForUniform(uu, Ru) {
        this._cacheMatrix(uu, Ru) && this.updateUniform(uu, Ru.AEu(), 16)
      }
      _updateMatricesForEffect(uu, Ru) {
        this._currentEffect.setMatrices(uu, Ru)
      }
      _updateMatricesForUniform(uu, Ru) {
        this.updateUniform(uu, Ru, Ru.length)
      }
      _updateVector3ForEffect(uu, Ru) {
        this._currentEffect.setVector3(uu, Ru)
      }
      _updateVector3ForUniform(uu, Ru) {
        Qu._TempBuffer[0] = Ru.x, Qu._TempBuffer[1] = Ru.y, Qu._TempBuffer[2] = Ru.z, this.updateUniform(uu, Qu._TempBuffer, 3)
      }
      _updateVector4ForEffect(uu, Ru) {
        this._currentEffect.setVector4(uu, Ru)
      }
      _updateVector4ForUniform(uu, Ru) {
        Qu._TempBuffer[0] = Ru.x, Qu._TempBuffer[1] = Ru.y, Qu._TempBuffer[2] = Ru.z, Qu._TempBuffer[3] = Ru.w, this.updateUniform(uu, Qu._TempBuffer, 4)
      }
      _updateColor3ForEffect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(uu + yu, Ru)
      }
      _updateColor3ForUniform(uu, Ru) {
        Qu._TempBuffer[0] = Ru.r, Qu._TempBuffer[1] = Ru.g, Qu._TempBuffer[2] = Ru.b, this.updateUniform(uu, Qu._TempBuffer, 3)
      }
      _updateColor4ForEffect(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(uu + Eu, Ru, yu)
      }
      _updateDirectColor4ForEffect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(uu + yu, Ru)
      }
      _updateColor4ForUniform(uu, Ru, yu) {
        Qu._TempBuffer[0] = Ru.r, Qu._TempBuffer[1] = Ru.g, Qu._TempBuffer[2] = Ru.b, Qu._TempBuffer[3] = yu, this.updateUniform(uu, Qu._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(uu, Ru) {
        Qu._TempBuffer[0] = Ru.r, Qu._TempBuffer[1] = Ru.g, Qu._TempBuffer[2] = Ru.b, Qu._TempBuffer[3] = Ru.a, this.updateUniform(uu, Qu._TempBuffer, 4)
      }
      _updateIntForEffect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(uu + yu, Ru)
      }
      _updateIntForUniform(uu, Ru) {
        Qu._TempBufferInt32View[0] = Ru, this.updateUniform(uu, Qu._TempBuffer, 1)
      }
      _updateInt2ForEffect(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(uu + Eu, Ru, yu)
      }
      _updateInt2ForUniform(uu, Ru, yu) {
        Qu._TempBufferInt32View[0] = Ru, Qu._TempBufferInt32View[1] = yu, this.updateUniform(uu, Qu._TempBuffer, 2)
      }
      _updateInt3ForEffect(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(uu + Ku, Ru, yu, Eu)
      }
      _updateInt3ForUniform(uu, Ru, yu, Eu) {
        Qu._TempBufferInt32View[0] = Ru, Qu._TempBufferInt32View[1] = yu, Qu._TempBufferInt32View[2] = Eu, this.updateUniform(uu, Qu._TempBuffer, 3)
      }
      _updateInt4ForEffect(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(uu + Qu, Ru, yu, Eu, Ku)
      }
      _updateInt4ForUniform(uu, Ru, yu, Eu, Ku) {
        Qu._TempBufferInt32View[0] = Ru, Qu._TempBufferInt32View[1] = yu, Qu._TempBufferInt32View[2] = Eu, Qu._TempBufferInt32View[3] = Ku, this.updateUniform(uu, Qu._TempBuffer, 4)
      }
      _updateUIntForEffect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(uu + yu, Ru)
      }
      _updateUIntForUniform(uu, Ru) {
        Qu._TempBufferUInt32View[0] = Ru, this.updateUniform(uu, Qu._TempBuffer, 1)
      }
      _updateUInt2ForEffect(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(uu + Eu, Ru, yu)
      }
      _updateUInt2ForUniform(uu, Ru, yu) {
        Qu._TempBufferUInt32View[0] = Ru, Qu._TempBufferUInt32View[1] = yu, this.updateUniform(uu, Qu._TempBuffer, 2)
      }
      _updateUInt3ForEffect(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(uu + Ku, Ru, yu, Eu)
      }
      _updateUInt3ForUniform(uu, Ru, yu, Eu) {
        Qu._TempBufferUInt32View[0] = Ru, Qu._TempBufferUInt32View[1] = yu, Qu._TempBufferUInt32View[2] = Eu, this.updateUniform(uu, Qu._TempBuffer, 3)
      }
      _updateUInt4ForEffect(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(uu + Qu, Ru, yu, Eu, Ku)
      }
      _updateUInt4ForUniform(uu, Ru, yu, Eu, Ku) {
        Qu._TempBufferUInt32View[0] = Ru, Qu._TempBufferUInt32View[1] = yu, Qu._TempBufferUInt32View[2] = Eu, Qu._TempBufferUInt32View[3] = Ku, this.updateUniform(uu, Qu._TempBuffer, 4)
      }
      setTexture(uu, Ru) {
        this._currentEffect.setTexture(uu, Ru)
      }
      setTextureArray(uu, Ru) {
        this._currentEffect.setTextureArray(uu, Ru)
      }
      bindTexture(uu, Ru) {
        this._currentEffect._bindTexture(uu, Ru)
      }
      updateUniformDirectly(uu, Ru) {
        this.updateUniform(uu, Ru, Ru.length), this.update()
      }
      bindToEffect(uu, Ru) {
        this._currentEffect = uu, this._currentEffectName = Ru
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(uu) {
        if (!this._buffers) return this._buffer === uu;
        for (let Ru = 0; Ru < this._buffers.length; ++Ru) {
          if (this._buffers[Ru][0] === uu) return this._bufferIndex = Ru, this._buffer = uu, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Ru][1] && (this._bufferData.set(this._buffers[Ru][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(uu) {
        return void 0 !== this._uniformLocations[uu]
      }
      dispose() {
        if (this._noUBO) return;
        const uu = this._engine._uniformBuffers,
          Ru = uu.indexOf(this);
        if (-1 !== Ru && (uu[Ru] = uu[uu.length - 1], uu.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let uu = 0; uu < this._buffers.length; ++uu) {
            const Ru = this._buffers[uu][0];
            this._engine._releaseBuffer(Ru)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Qu._MAX_UNIFORM_SIZE = 256, Qu._TempBuffer = new Float32Array(Qu._MAX_UNIFORM_SIZE), Qu._TempBufferInt32View = new Int32Array(Qu._TempBuffer.buffer), Qu._TempBufferUInt32View = new Uint32Array(Qu._TempBuffer.buffer)
  },
  39480: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(39487);
    class Ku extends Eu.c {
      constructor(uu) {
        super(), this._buffer = uu
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39574: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      c: () => Xu
    });
    const Eu = "__bjs_serializable__",
      Ku = new WeakMap;

    function Qu(uu, Ru) {
      return Object.prototype.hasOwnProperty.call(uu, Ru)
    }
    const mu = function() {
      let uu = Symbol.metadata;
      return uu || (uu = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: uu
      })), uu
    }();

    function Ju(uu) {
      return "function" === typeof uu ? uu : uu?.constructor
    }

    function Nu(uu) {
      if (!uu) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(mu)}) polyfill must run before decorated classes are evaluated.`);
      return Qu(uu, Eu) || (uu[Eu] = {}), uu[Eu]
    }

    function Xu(uu) {
      const Ru = Ju(uu),
        yu = Ru ? Ru[mu] : void 0;
      if (!yu) return {};
      const Nu = Ku.get(yu);
      if (Nu) return Nu;
      const Xu = {},
        Vu = [];
      let ru = yu;
      for (; ru;) Vu.push(ru), ru = Object.getPrototypeOf(ru);
      for (const Ku of Vu)
        if (Qu(Ku, Eu)) {
          const uu = Ku[Eu];
          for (const Ru in uu) Xu[Ru] = uu[Ru]
        } return Ku.set(yu, Xu), Xu
    }
  },
  39566: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Ju,
      C: () => Vu,
      G: () => ru,
      K: () => mu,
      c: () => Hu,
      f: () => Qu,
      g: () => ju,
      k: () => xu,
      n: () => Nu,
      r: () => Su,
      t: () => Xu,
      w: () => Tu,
      y: () => Bu,
      z: () => pu
    });
    var Eu = yu(39574);

    function Ku(uu, Ru) {
      return (yu, Ku) => {
        if (!Ku.metadata) return;
        const Qu = String(Ku.name),
          mu = (0, Eu.b)(Ku.metadata);
        mu[Qu] || (mu[Qu] = {
          type: uu,
          sourceName: Ru
        })
      }
    }

    function Qu(uu) {
      return function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (yu, Eu) => {
          const Ku = Ru || "_" + String(Eu.name);
          return {
            init(uu) {
              return void 0 === uu && Ku in this || (this[Ku] = uu), uu
            },
            get() {
              return this[Ku]
            },
            set(Ru) {
              "function" === typeof this[Ku]?.equals && this[Ku].equals(Ru) || this[Ku] !== Ru && (this[Ku] = Ru, this[uu]())
            }
          }
        }
      }(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function mu(uu) {
      return Ku(0, uu)
    }

    function Ju(uu) {
      return Ku(1, uu)
    }

    function Nu(uu) {
      return Ku(2, uu)
    }

    function Xu(uu) {
      return Ku(3, uu)
    }

    function Vu(uu) {
      return Ku(4, uu)
    }

    function ru(uu) {
      return Ku(5, uu)
    }

    function Bu(uu) {
      return Ku(6, uu)
    }

    function xu(uu) {
      return Ku(7, uu)
    }

    function Su(uu) {
      return Ku(8, uu)
    }

    function pu(uu) {
      return Ku(10, uu)
    }

    function Tu(uu) {
      return Ku(12, uu)
    }

    function Wu(uu, Ru, yu) {
      const Eu = String(Ru.name);
      let Ku = null;
      const Qu = function() {
        if (null === Ku) {
          Ku = uu, "undefined" !== typeof _native && _native[Eu] && (Ku = yu(_native[Eu], uu));
          const mu = this && (Ru.static ? this : Object.getPrototypeOf(this));
          mu?.[Eu] === Qu && (mu[Eu] = Ku)
        }
        for (var mu = arguments.length, Ju = new Array(mu), Nu = 0; Nu < mu; Nu++) Ju[Nu] = arguments[Nu];
        return Ku.apply(this, Ju)
      };
      return Qu
    }

    function ju(uu, Ru) {
      return Wu(uu, Ru, (uu => uu))
    }

    function Hu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (yu, Eu) => {
        const Ku = Ru || "_" + String(Eu.name);
        return {
          get() {
            return this[Ku]?.value
          },
          set(Ru) {
            "function" === typeof this[Ku]?.value?.equals && this[Ku].value.equals(Ru) || this[Ku].value !== Ru && (this[Ku].value = Ru, this[uu]())
          }
        }
      }
    }
    ju.filter = function(uu) {
      return (Ru, yu) => Wu(Ru, yu, ((Ru, yu) => function() {
        for (var Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
        return uu(...Ku) ? Ru(...Ku) : yu.apply(this, Ku)
      }))
    }
  },
  39582: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu
    });
    var Eu = yu(39430),
      Ku = yu(39584),
      Qu = yu(36991),
      mu = yu(36830),
      Ju = yu(39574);
    const Nu = function(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Qu = uu();
      Ku.e && Ku.e.HasTags(Ru) && Ku.e.AddTagsTo(Qu, Ku.e.GetTags(Ru, !0));
      const mu = (0, Ju.c)(Qu),
        Nu = {};
      for (const Ku in mu) {
        const uu = mu[Ku],
          Ju = Ru[Ku],
          Vu = uu.type;
        if (void 0 !== Ju && null !== Ju && ("uniqueId" !== Ku || Xu.AllowLoadingUniqueId)) switch (Vu) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Ju.slice ? Qu[Ku] = Ju.slice() : Qu[Ku] = Ju;
            break;
          case 1:
            Eu.cloneTexturesOnlyOnce && Nu[Ju.uniqueId] ? Qu[Ku] = Nu[Ju.uniqueId] : (Qu[Ku] = yu || Ju.isRenderTarget ? Ju : Ju.clone(), Nu[Ju.uniqueId] = Qu[Ku]);
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
            Qu[Ku] = yu ? Ju : Ju.clone()
        }
      }
      return Qu
    };
    class Xu {
      static AppendSerializedAnimations(uu, Ru) {
        if (uu.animations) {
          Ru.animations = [];
          for (let yu = 0; yu < uu.animations.length; yu++) {
            const Eu = uu.animations[yu];
            Ru.animations.push(Eu.serialize())
          }
        }
      }
      static Serialize(uu, Ru) {
        Ru || (Ru = {}), Ku.e && (Ru.tags = Ku.e.GetTags(uu));
        const yu = (0, Ju.c)(uu);
        for (const Eu in yu) {
          const Ku = yu[Eu],
            Qu = Ku.sourceName || Eu,
            mu = Ku.type,
            Ju = uu[Eu];
          if (void 0 !== Ju && null !== Ju && ("uniqueId" !== Eu || Xu.AllowLoadingUniqueId)) switch (mu) {
            case 0:
              Array.isArray(Ju) ? Ru[Qu] = Ju.slice() : Ru[Qu] = Ju;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Ru[Qu] = Ju.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Ru[Qu] = Ju.AEu();
              break;
            case 6:
            case 11:
              Ru[Qu] = Ju.id
          }
        }
        return Ru
      }
      static ParseProperties(uu, Ru, yu, Eu) {
        Eu || (Eu = "");
        const Ku = (0, Ju.c)(Ru);
        for (const Ju in Ku) {
          const Nu = Ku[Ju],
            Vu = uu[Nu.sourceName || Ju],
            ru = Nu.type;
          if (void 0 !== Vu && null !== Vu && ("uniqueId" !== Ju || Xu.AllowLoadingUniqueId)) {
            const uu = Ru;
            switch (ru) {
              case 0:
                uu[Ju] = Vu;
                break;
              case 1:
                yu && (uu[Ju] = Xu._TextureParser(Vu, yu, Eu));
                break;
              case 2:
                uu[Ju] = Qu.d.FromArray(Vu);
                break;
              case 3:
                uu[Ju] = Xu._FresnelParametersParser(Vu);
                break;
              case 4:
                uu[Ju] = mu.n.FromArray(Vu);
                break;
              case 5:
                uu[Ju] = mu.p.FromArray(Vu);
                break;
              case 6:
                yu && (uu[Ju] = yu.getLastMeshById(Vu));
                break;
              case 7:
                uu[Ju] = Xu._ColorCurvesParser(Vu);
                break;
              case 8:
                uu[Ju] = Qu.h.FromArray(Vu);
                break;
              case 9:
                uu[Ju] = Xu._ImageProcessingConfigurationParser(Vu);
                break;
              case 10:
                uu[Ju] = mu.f.FromArray(Vu);
                break;
              case 11:
                yu && (uu[Ju] = yu.getCameraById(Vu));
                break;
              case 12:
                uu[Ju] = mu.d.FromArray(Vu);
                break;
              case 13:
                uu[Ju] = mu.r.FromArray(Vu)
            }
          }
        }
      }
      static Parse(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Qu = uu();
        return Ku.e && Ku.e.AddTagsTo(Qu, Ru.tags), Xu.ParseProperties(Ru, Qu, yu, Eu), Qu
      }
      static Clone(uu, Ru) {
        return Nu(uu, Ru, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(uu, Ru) {
        return Nu(uu, Ru, !0)
      }
    }
    Xu.AllowLoadingUniqueId = !1, Xu._ImageProcessingConfigurationParser = uu => {
      throw (0, Eu.k)("ImageProcessingConfiguration")
    }, Xu._FresnelParametersParser = uu => {
      throw (0, Eu.k)("FresnelParameters")
    }, Xu._ColorCurvesParser = uu => {
      throw (0, Eu.k)("ColorCurves")
    }, Xu._TextureParser = (uu, Ru, yu) => {
      throw (0, Eu.k)("Texture")
    }
  },
  39514: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = yu(39458);
    class Ku {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Ku.Enabled, this._lastSecValueCount++
      }
      addCount(uu, Ru) {
        Ku.Enabled && (this._current += uu, this._hasCurrentValue = !0, Ru && this._fetchResult())
      }
      beginMonitoring() {
        Ku.Enabled && (this._startMonitoringTime = Eu.b.Now)
      }
      endMonitoring() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Ku.Enabled) return;
        uu && this.fetchNewFrame();
        const Ru = Eu.b.Now;
        this._current = Ru - this._startMonitoringTime, this._hasCurrentValue = !0, uu && this._fetchResult()
      }
      ZH() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const uu = Eu.b.Now;
        uu - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = uu, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Ku.Enabled = !0
  },
  39667: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      i: () => Eu
    });
    class Eu {
      constructor(uu) {
        this.length = 0, this.data = new Array(uu), this._id = Eu._GlobalId++
      }
      push(uu) {
        this.data[this.length++] = uu, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(uu) {
        for (let Ru = 0; Ru < this.length; Ru++) uu(this.data[Ru])
      }
      sort(uu) {
        this.data.sort(uu)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(uu) {
        if (0 !== uu.length) {
          this.length + uu.length > this.data.length && (this.data.length = 2 * (this.length + uu.length));
          for (let Ru = 0; Ru < uu.length; Ru++) this.data[this.length++] = (uu.data || uu)[Ru]
        }
      }
      indexOf(uu) {
        const Ru = this.data.indexOf(uu);
        return Ru >= this.length ? -1 : Ru
      }
      contains(uu) {
        return -1 !== this.indexOf(uu)
      }
    }
    Eu._GlobalId = 0;
    class Ku extends Eu {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(uu) {
        super.push(uu), uu.__smartArrayFlags || (uu.__smartArrayFlags = {}), uu.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(uu) {
        return (!uu.__smartArrayFlags || uu.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(uu), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(uu) {
        if (0 !== uu.length) {
          this.length + uu.length > this.data.length && (this.data.length = 2 * (this.length + uu.length));
          for (let Ru = 0; Ru < uu.length; Ru++) {
            const yu = (uu.data || uu)[Ru];
            this.pushNoDuplicate(yu)
          }
        }
      }
    }
  },
  39584: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    class Eu {
      static Eval(uu, Ru) {
        return "true" === (uu = uu.match(/\([^()]*\)/g) ? uu.replace(/\([^()]*\)/g, (uu => (uu = uu.slice(1, uu.length - 1), Eu._HandleParenthesisContent(uu, Ru)))) : Eu._HandleParenthesisContent(uu, Ru)) || "false" !== uu && Eu.Eval(uu, Ru)
      }
      static _HandleParenthesisContent(uu, Ru) {
        let yu;
        Ru = Ru || (uu => "true" === uu);
        const Ku = uu.split("||");
        for (const Qu in Ku)
          if (Object.prototype.hasOwnProperty.call(Ku, Qu)) {
            let uu = Eu._SimplifyNegation(Ku[Qu].trim());
            const mu = uu.split("&&");
            if (mu.length > 1)
              for (let Ku = 0; Ku < mu.length; ++Ku) {
                const Qu = Eu._SimplifyNegation(mu[Ku].trim());
                if (yu = "true" !== Qu && "false" !== Qu ? "!" === Qu[0] ? !Ru(Qu.substring(1)) : Ru(Qu) : "true" === Qu, !yu) {
                  uu = "false";
                  break
                }
              }
            if (yu || "true" === uu) {
              yu = !0;
              break
            }
            yu = "true" !== uu && "false" !== uu ? "!" === uu[0] ? !Ru(uu.substring(1)) : Ru(uu) : "true" === uu
          } return yu ? "true" : "false"
      }
      static _SimplifyNegation(uu) {
        return "!true" === (uu = (uu = uu.replace(/^[\s!]+/, (uu => (uu = uu.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? uu = "false" : "!false" === uu && (uu = "true"), uu
      }
    }
    class Ku {
      static EnableFor(uu) {
        uu._tags = uu._tags || {}, uu.hasTags = () => Ku.HasTags(uu), uu.addTags = Ru => Ku.AddTagsTo(uu, Ru), uu.removeTags = Ru => Ku.RemoveTagsFrom(uu, Ru), uu.matchesTagsQuery = Ru => Ku.MatchesQuery(uu, Ru)
      }
      static DisableFor(uu) {
        delete uu._tags, delete uu.hasTags, delete uu.addTags, delete uu.removeTags, delete uu.matchesTagsQuery
      }
      static HasTags(uu) {
        if (!uu._tags) return !1;
        const Ru = uu._tags;
        for (const yu in Ru)
          if (Object.prototype.hasOwnProperty.call(Ru, yu)) return !0;
        return !1
      }
      static GetTags(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!uu._tags) return null;
        if (Ru) {
          const Ru = [];
          for (const yu in uu._tags) Object.prototype.hasOwnProperty.call(uu._tags, yu) && !0 === uu._tags[yu] && Ru.push(yu);
          return Ru.join(" ")
        }
        return uu._tags
      }
      static AddTagsTo(uu, Ru) {
        if (!Ru) return;
        if ("string" !== typeof Ru) return;
        const yu = Ru.split(" ");
        for (const Eu of yu) Ku._AddTagTo(uu, Eu)
      }
      static _AddTagTo(uu, Ru) {
        "" !== (Ru = Ru.trim()) && "true" !== Ru && "false" !== Ru && (Ru.match(/[\s]/) || Ru.match(/^([!]|([|]|[&]){2})/) || (Ku.EnableFor(uu), uu._tags[Ru] = !0))
      }
      static RemoveTagsFrom(uu, Ru) {
        if (!Ku.HasTags(uu)) return;
        const yu = Ru.split(" ");
        for (const Eu in yu) Ku._RemoveTagFrom(uu, yu[Eu])
      }
      static _RemoveTagFrom(uu, Ru) {
        delete uu._tags[Ru]
      }
      static MatchesQuery(uu, Ru) {
        return void 0 === Ru || ("" === Ru ? Ku.HasTags(uu) : Eu.Eval(Ru, (Ru => Ku.HasTags(uu) && uu._tags[Ru])))
      }
    }
  },
  39711: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(39706),
      Ku = yu(36858);
    class Qu {
      constructor(uu) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Ku.b, this._scene = uu
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Eu.h.PositionKind]) return;
        const uu = [];
        uu.push(1, 1), uu.push(-1, 1), uu.push(-1, -1), uu.push(1, -1), this._vertexBuffers[Eu.h.PositionKind] = new Eu.h(this._scene.eS(), uu, Eu.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const uu = [];
        uu.push(0), uu.push(1), uu.push(2), uu.push(0), uu.push(2), uu.push(3), this._indexBuffer = this._scene.eS().createIndexBuffer(uu)
      }
      _getActivePostProcesses(uu) {
        const Ru = this._activePostProcesses;
        Ru.length = 0;
        for (let yu = 0; yu < uu.length; yu++) {
          const Eu = uu[yu];
          Eu && Ru.push(Eu)
        }
        return Ru
      }
      _rebuild() {
        const uu = this._vertexBuffers[Eu.h.PositionKind];
        uu && (uu._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = this._scene.activeCamera;
        return !!yu && (Ru = Ru || this._getActivePostProcesses(yu._postProcesses), !(!Ru || 0 === Ru.length || !this._scene.postProcessesEnabled) && (Ru[0].activate(yu, uu, null !== Ru && void 0 !== Ru), !0))
      }
      directRender(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : uu.length;
        const Ju = this._scene.eS();
        for (let Nu = 0; Nu < mu; Nu++) {
          Nu < uu.length - 1 ? uu[Nu + 1].activate(this._scene.activeCamera || this._scene, Ru?.texture) : (Ru ? Ju.bindFramebuffer(Ru, Eu, void 0, void 0, yu, Ku) : Qu || Ju.restoreDefaultFramebuffer(), Ju._debugInsertMarker?.(`post process ${uu[Nu].name} output`));
          const mu = uu[Nu],
            Xu = mu.apply();
          Xu && (mu.onBeforeRenderObservable.notifyObservers(Xu), this._prepareBuffers(), Ju.bindBuffers(this._vertexBuffers, this._indexBuffer, Xu), Ju.drawElementsType(0, 0, 6), mu.onAfterRenderObservable.notifyObservers(Xu))
        }
        Ju.setDepthBuffer(!0), Ju.setDepthWrite(!0)
      }
      _finalizeFrame(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Qu = this._scene.activeCamera;
        if (!Qu) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Eu = Eu || this._getActivePostProcesses(Qu._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const mu = this._scene.eS();
        for (let Ju = 0, Nu = Eu.length; Ju < Nu; Ju++) {
          const Xu = Eu[Ju];
          if (Ju < Nu - 1 ? Xu._outputTexture = Eu[Ju + 1].activate(Qu, Ru?.texture) : (Ru ? (mu.bindFramebuffer(Ru, yu, void 0, void 0, Ku), Xu._outputTexture = Ru) : (mu.restoreDefaultFramebuffer(), Xu._outputTexture = null), mu._debugInsertMarker?.(`post process ${Eu[Ju].name} output`)), uu) break;
          const Vu = Xu.apply();
          Vu && (Xu.onBeforeRenderObservable.notifyObservers(Vu), this._prepareBuffers(), mu.bindBuffers(this._vertexBuffers, this._indexBuffer, Vu), mu.drawElementsType(0, 0, 6), Xu.onAfterRenderObservable.notifyObservers(Vu))
        }
        mu.setDepthBuffer(!0), mu.setDepthWrite(!0), mu.setAlphaMode(0)
      }
      dispose() {
        const uu = this._vertexBuffers[Eu.h.PositionKind];
        uu && (uu.dispose(), this._vertexBuffers[Eu.h.PositionKind] = null), this._indexBuffer && (this._scene.eS()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39729: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(39667),
      Ku = yu(36830);
    class Qu {
      set opaqueSortCompareFn(uu) {
        this._opaqueSortCompareFn = uu || Qu.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(uu) {
        this._alphaTestSortCompareFn = uu || Qu.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(uu) {
        this._transparentSortCompareFn = uu || Qu.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = uu, this._opaqueSubMeshes = new Eu.i(256), this._transparentSubMeshes = new Eu.i(256), this._alphaTestSubMeshes = new Eu.i(256), this._depthOnlySubMeshes = new Eu.i(256), this._particleSystems = new Eu.i(256), this._spriteManagers = new Eu.i(256), this._empty = !0, this._edgesRenderers = new Eu.e(16), this.disableDepthPrePass = !1, this._scene = Ru, this.opaqueSortCompareFn = yu, this.alphaTestSortCompareFn = Ku, this.transparentSortCompareFn = Qu
      }
      render(uu, Ru, yu, Eu) {
        let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ju = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nu = arguments.length > 8 ? arguments[8] : void 0;
        if (uu) return void uu(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Xu = this._scene.eS();
        Ku && 0 !== this._depthOnlySubMeshes.length && (Xu.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Xu.setColorWrite(!0)), Qu && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), mu && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Vu = Xu.getStencilBuffer();
        if (Xu.setStencilBuffer(!1), Ru && this._renderSprites(), yu && this._renderParticles(Eu), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Ju && (Nu || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Xu.setStencilBuffer(Vu), Nu) Nu(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const uu = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            uu.length && this._renderTransparent(uu)
          } else this._renderTransparent(this._transparentSubMeshes);
          Xu.setAlphaMode(0)
        }
        if (Xu.setStencilBuffer(!1), Qu && this._edgesRenderers.length) {
          for (let uu = 0; uu < this._edgesRenderers.length; uu++) this._edgesRenderers.data[uu].render();
          Xu.setAlphaMode(0)
        }
        Xu.setStencilBuffer(Vu)
      }
      _renderOpaqueSorted(uu) {
        Qu._RenderSorted(uu, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(uu) {
        Qu._RenderSorted(uu, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(uu) {
        Qu._RenderSorted(uu, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(uu, Ru, yu, Eu, mu) {
        let Ju, Nu = 0;
        const Xu = yu ? yu.globalPosition : Qu._ZeroVector;
        if (Eu && Ru !== Qu.PainterSortCompare)
          for (; Nu < uu.length; Nu++) Ju = uu.data[Nu], Ju._alphaIndex = Ju.getMesh().alphaIndex, Ju._distanceToCamera = Ku.p.Distance(Ju.vI().aEu.centerWorld, Xu);
        const Vu = uu.length === uu.data.length ? uu.data : uu.data.slice(0, uu.length);
        Ru && Vu.sort(Ru);
        const ru = Vu[0].getMesh().lD();
        for (Nu = 0; Nu < Vu.length; Nu++) {
          if (Ju = Vu[Nu], ru._activeMeshesFrozenButKeepClipping && !Ju.isInFrustum(ru._frustumPlanes)) continue;
          let uu = !1;
          if (Eu) {
            const Ru = Ju.nS();
            if (Ru && Ru.needDepthPrePass && !mu) {
              uu = !0;
              const yu = Ru.lD().eS();
              yu.setColorWrite(!1), yu.setAlphaMode(0), Ju.render(!1), yu.setColorWrite(!0)
            }
          }
          const Ru = Ju._renderingMesh;
          !uu && Ru._renderRunFollower(Ju, Eu) || Ju.render(Eu)
        }
      }
      static defaultTransparentSortCompare(uu, Ru) {
        return uu._alphaIndex > Ru._alphaIndex ? 1 : uu._alphaIndex < Ru._alphaIndex ? -1 : Qu.backToFrontSortCompare(uu, Ru)
      }
      static backToFrontSortCompare(uu, Ru) {
        return uu._distanceToCamera < Ru._distanceToCamera ? 1 : uu._distanceToCamera > Ru._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(uu, Ru) {
        return uu._distanceToCamera < Ru._distanceToCamera ? -1 : uu._distanceToCamera > Ru._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(uu, Ru) {
        const yu = uu.getMesh(),
          Eu = Ru.getMesh();
        return yu.material && Eu.material ? yu.material.uniqueId - Eu.material.uniqueId : yu.uniqueId - Eu.uniqueId
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
      dispatch(uu, Ru, yu) {
        void 0 === Ru && (Ru = uu.getMesh()), void 0 === yu && (yu = uu.nS()), null !== yu && void 0 !== yu && (yu.needAlphaBlendingForMesh(Ru) ? this._transparentSubMeshes.push(uu) : yu.needAlphaTestingForMesh(Ru) ? (yu.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(uu), this._alphaTestSubMeshes.push(uu)) : (yu.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(uu), this._opaqueSubMeshes.push(uu)), Ru._renderingGroup = this, Ru._edgesRenderer && Ru.isEnabled() && Ru.isVisible && Ru._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Ru._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(uu) {
        this._spriteManagers.push(uu), this._empty = !1
      }
      dispatchParticles(uu) {
        this._particleSystems.push(uu), this._empty = !1
      }
      _renderParticles(uu) {
        if (0 === this._particleSystems.length) return;
        const Ru = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let yu = 0; yu < this._particleSystems.length; yu++) {
          const Eu = this._particleSystems.data[yu];
          if (0 === (Ru && Ru.layerMask & Eu.layerMask)) continue;
          const Ku = Eu.emitter;
          Ku.position && uu && -1 === uu.indexOf(Ku) || this._scene._activeParticles.addCount(Eu.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const uu = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Ru = 0; Ru < this._spriteManagers.length; Ru++) {
          const yu = this._spriteManagers.data[Ru];
          0 !== (uu && uu.layerMask & yu.layerMask) && yu.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Qu._ZeroVector = Ku.p.Zero()
  },
  39721: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu
    });
    var Eu = yu(39729);
    class Ku {}
    class Qu {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(uu) {
        this._disableDepthPrePass = uu;
        for (const Ru of this._renderingGroups) Ru.disableDepthPrePass = uu
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(uu) {
        uu !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = uu, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const uu of this._scene.meshes)
          if (uu.mC)
            for (const Ru of uu.mC) Ru._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const uu of this._scene.spriteManagers) uu._wasDispatched = !1;
        for (const uu of this._scene.JC) uu._wasDispatched = !1
      }
      constructor(uu) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Ku, this._maintainStateBetweenFrames = !1, this._scene = uu;
        for (let Ru = Qu.MIN_RENDERINGGROUPS; Ru < Qu.MAX_RENDERINGGROUPS; Ru++) this._autoClearDepthStencil[Ru] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(uu) {
        const Ru = uu || 0;
        return this._prepareRenderingGroup(Ru), this._renderingGroups[Ru]
      }
      _clearDepthStencilBuffer() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.eS().clear(null, !1, uu, Ru), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(uu, Ru, yu, Eu) {
        let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ju = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Nu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Xu = arguments.length > 8 ? arguments[8] : void 0,
          Vu = arguments.length > 9 ? arguments[9] : void 0;
        const ru = this._renderingGroupInfo;
        ru.cp = this._scene, ru.camera = this._scene.activeCamera, ru.renderingManager = this;
        const Bu = Vu ?? this._scene.spriteManagers;
        if (Bu && Eu)
          for (let Qu = 0; Qu < Bu.length; Qu++) {
            const uu = Bu[Qu];
            this.dispatchSprites(uu)
          }
        for (let xu = Qu.MIN_RENDERINGGROUPS; xu < Qu.MAX_RENDERINGGROUPS; xu++) {
          this._depthStencilBufferAlreadyCleaned = xu === Qu.MIN_RENDERINGGROUPS;
          const Vu = this._renderingGroups[xu];
          if (!Vu || Vu._empty) continue;
          const Bu = 1 << xu;
          if (ru.renderingGroupId = xu, this._scene.onBeforeRenderingGroupObservable.notifyObservers(ru, Bu), Qu.AUTOCLEAR) {
            const uu = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(xu) : this._autoClearDepthStencil[xu];
            uu && uu.autoClear && this._clearDepthStencilBuffer(uu.depth, uu.stencil)
          }
          for (let uu = 0, Ru = this._scene._beforeRenderingGroupDrawStage; uu < Ru.length; uu++) {
            Ru[uu].action(xu)
          }
          Vu.render(uu, Eu, yu, Ru, Ku, mu, Ju, Nu, Xu);
          for (let uu = 0, Ru = this._scene._afterRenderingGroupDrawStage; uu < Ru.length; uu++) {
            Ru[uu].action(xu)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(ru, Bu)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let uu = Qu.MIN_RENDERINGGROUPS; uu < Qu.MAX_RENDERINGGROUPS; uu++) {
            const Ru = this._renderingGroups[uu];
            Ru && Ru.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let uu = Qu.MIN_RENDERINGGROUPS; uu < Qu.MAX_RENDERINGGROUPS; uu++) {
            const Ru = this._renderingGroups[uu];
            Ru && Ru.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let uu = Qu.MIN_RENDERINGGROUPS; uu < Qu.MAX_RENDERINGGROUPS; uu++) {
          const Ru = this._renderingGroups[uu];
          Ru && Ru.dispose()
        }
      }
      _prepareRenderingGroup(uu) {
        void 0 === this._renderingGroups[uu] && (this._renderingGroups[uu] = new Eu.e(uu, this._scene, this._customOpaqueSortCompareFn[uu], this._customAlphaTestSortCompareFn[uu], this._customTransparentSortCompareFn[uu]), this._renderingGroups[uu].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(uu) {
        this.maintainStateBetweenFrames && uu._wasDispatched || (uu._wasDispatched = !0, this.getRenderingGroup(uu.renderingGroupId).dispatchSprites(uu))
      }
      dispatchParticles(uu) {
        this.maintainStateBetweenFrames && uu._wasDispatched || (uu._wasDispatched = !0, this.getRenderingGroup(uu.renderingGroupId).dispatchParticles(uu))
      }
      dispatch(uu, Ru, yu) {
        void 0 === Ru && (Ru = uu.getMesh()), this.maintainStateBetweenFrames && uu._wasDispatched || (uu._wasDispatched = !0, this.getRenderingGroup(Ru.renderingGroupId).dispatch(uu, Ru, yu))
      }
      setRenderingOrder(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[uu] = Ru, this._customAlphaTestSortCompareFn[uu] = yu, this._customTransparentSortCompareFn[uu] = Eu, this._renderingGroups[uu]) {
          const Ru = this._renderingGroups[uu];
          Ru.opaqueSortCompareFn = this._customOpaqueSortCompareFn[uu], Ru.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[uu], Ru.transparentSortCompareFn = this._customTransparentSortCompareFn[uu]
        }
      }
      setRenderingAutoClearDepthStencil(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[uu] = {
          autoClear: Ru,
          depth: yu,
          stencil: Eu
        }
      }
      getAutoClearDepthStencilSetup(uu) {
        return this._autoClearDepthStencil[uu]
      }
    }
    Qu.MAX_RENDERINGGROUPS = 4, Qu.MIN_RENDERINGGROUPS = 0, Qu.AUTOCLEAR = !0
  },
  39463: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor(uu) {
        this._supportBlendParametersPerTarget = uu, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(uu) {
        this.setAlphaBlend(uu)
      }
      setAlphaBlend(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Ru] !== uu && (uu ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Ru] = uu, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(uu, Ru, yu, Eu) {
        this._blendConstants[0] === uu && this._blendConstants[1] === Ru && this._blendConstants[2] === yu && this._blendConstants[3] === Eu || (this._blendConstants[0] = uu, this._blendConstants[1] = Ru, this._blendConstants[2] = yu, this._blendConstants[3] = Eu, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(uu, Ru, yu, Eu) {
        const Ku = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Ku + 0] === uu && this._blendFunctionParameters[Ku + 1] === Ru && this._blendFunctionParameters[Ku + 2] === yu && this._blendFunctionParameters[Ku + 3] === Eu || (this._blendFunctionParameters[Ku + 0] = uu, this._blendFunctionParameters[Ku + 1] = Ru, this._blendFunctionParameters[Ku + 2] = yu, this._blendFunctionParameters[Ku + 3] = Eu, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(uu, Ru) {
        const yu = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[yu + 0] === uu && this._blendEquationParameters[yu + 1] === Ru || (this._blendEquationParameters[yu + 0] = uu, this._blendEquationParameters[yu + 1] = Ru, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Ru && (this._numTargets = Ru, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== yu && (this._blendDisabledTargetsMask = yu, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (uu.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Ru || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Ru > 1 && 0 !== yu && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & yu) ? uu.enable(uu.BLEND) : uu.disable(uu.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (uu.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (uu.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Eu = uu;
        if (this._isAlphaBlendDirty) {
          for (let Ku = 0; Ku < Ru; Ku++) {
            const Ru = Ku < this._numTargetEnabled ? Ku : 0;
            this._alphaBlend[Ru] && 0 === (yu & 1 << Ku) ? Eu.enableIndexed(uu.BLEND, Ku) : Eu.disableIndexed(uu.BLEND, Ku)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let uu = 0; uu < Ru; uu++) {
            const Ru = uu < this._numTargetEnabled ? 4 * uu : 0;
            Eu.blendFuncSeparateIndexed(uu, this._blendFunctionParameters[Ru + 0], this._blendFunctionParameters[Ru + 1], this._blendFunctionParameters[Ru + 2], this._blendFunctionParameters[Ru + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let uu = 0; uu < Ru; uu++) {
            const Ru = uu < this._numTargetEnabled ? 2 * uu : 0;
            Eu.blendEquationSeparateIndexed(uu, this._blendEquationParameters[Ru + 0], this._blendEquationParameters[Ru + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(uu, Ru) {
        let yu = 32774;
        switch (uu) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Ru);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Ru);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Ru);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Ru);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Ru);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Ru);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Ru);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Ru);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Ru);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Ru);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Ru);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Ru);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Ru);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Ru);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Ru);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Ru);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Ru), yu = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Ru), yu = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Ru);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Ru)
        }
        this.setAlphaEquationParameters(yu, yu, Ru)
      }
    }
  },
  39762: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    class Eu {}
    Eu._IsPickingAvailable = !1
  },
  39647: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Jy,
      i: () => Qy
    });
    var Eu = yu(39655),
      Ku = yu(39447),
      Qu = yu(39458),
      mu = yu(36858),
      Ju = yu(39667);
    class Nu {
      constructor() {
        this._count = 0, this._data = {}
      }
      Oyu(uu) {
        this.clear(), uu.forEach(((uu, Ru) => this.add(uu, Ru)))
      }
      get(uu) {
        const Ru = this._data[uu];
        if (void 0 !== Ru) return Ru
      }
      getOrAddWithFactory(uu, Ru) {
        let yu = this.get(uu);
        return void 0 !== yu || (yu = Ru(uu), yu && this.add(uu, yu)), yu
      }
      getOrAdd(uu, Ru) {
        const yu = this.get(uu);
        return void 0 !== yu ? yu : (this.add(uu, Ru), Ru)
      }
      contains(uu) {
        return void 0 !== this._data[uu]
      }
      add(uu, Ru) {
        return void 0 === this._data[uu] && (this._data[uu] = Ru, ++this._count, !0)
      }
      set(uu, Ru) {
        return void 0 !== this._data[uu] && (this._data[uu] = Ru, !0)
      }
      getAndRemove(uu) {
        const Ru = this.get(uu);
        return void 0 !== Ru ? (delete this._data[uu], --this._count, Ru) : null
      }
      remove(uu) {
        return !!this.contains(uu) && (delete this._data[uu], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(uu) {
        for (const Ru in this._data) {
          uu(Ru, this._data[Ru])
        }
      }
      first(uu) {
        for (const Ru in this._data) {
          const yu = uu(Ru, this._data[Ru]);
          if (yu) return yu
        }
        return null
      }
    }
    var Xu = yu(39584),
      Vu = yu(36830),
      ru = yu(39676),
      Bu = yu(39693),
      xu = yu(39698);
    class Su {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.source = uu, this.pointerX = Ru, this.pointerY = yu, this.meshUnderPointer = Eu, this.sourceEvent = Ku, this.additionalData = Qu
      }
      static CreateNew(uu, Ru, yu) {
        const Eu = uu.lD();
        return new Su(uu, Eu.pointerX, Eu.pointerY, Eu.meshUnderPointer || uu, Ru, yu)
      }
      static CreateNewFromSprite(uu, Ru, yu, Eu) {
        return new Su(uu, Ru.pointerX, Ru.pointerY, Ru.meshUnderPointer, yu, Eu)
      }
      static CreateNewFromScene(uu, Ru) {
        return new Su(null, uu.pointerX, uu.pointerY, uu.meshUnderPointer, Ru)
      }
      static CreateNewFromPrimitive(uu, Ru, yu, Eu) {
        return new Su(uu, Ru.x, Ru.y, null, yu, Eu)
      }
    }
    var pu = yu(39711),
      Tu = yu(39717),
      Wu = yu(39721),
      ju = yu(39736),
      Hu = yu(39411),
      du = yu(36851),
      bu = yu(39430),
      Cu = yu(39745);
    class ku {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const uu in ku.Triggers)
          if (Object.prototype.hasOwnProperty.call(ku.Triggers, uu)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const uu in ku.Triggers)
          if (Object.prototype.hasOwnProperty.call(ku.Triggers, uu)) {
            const Ru = parseInt(uu);
            if (Ru >= 1 && Ru <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(uu) {
        for (const Ru in ku.Triggers)
          if (Object.prototype.hasOwnProperty.call(ku.Triggers, Ru)) {
            if (parseInt(Ru) === uu) return !0
          } return !1
      }
    }
    ku.Triggers = {};
    var eu, Au, Du, Mu, Iu, Gu, Uu, nu = yu(39747);
    ! function(uu) {
      uu[uu.Generic = 0] = "Generic", uu[uu.Keyboard = 1] = "Keyboard", uu[uu.Mouse = 2] = "Mouse", uu[uu.Touch = 3] = "Touch", uu[uu.DualShock = 4] = "DualShock", uu[uu.Xbox = 5] = "Xbox", uu[uu.Switch = 6] = "Switch", uu[uu.DualSense = 7] = "DualSense"
    }(eu || (eu = {})),
    function(uu) {
      uu[uu.Horizontal = 0] = "Horizontal", uu[uu.Vertical = 1] = "Vertical", uu[uu.LeftClick = 2] = "LeftClick", uu[uu.MiddleClick = 3] = "MiddleClick", uu[uu.RightClick = 4] = "RightClick", uu[uu.BrowserBack = 5] = "BrowserBack", uu[uu.BrowserForward = 6] = "BrowserForward", uu[uu.MouseWheelX = 7] = "MouseWheelX", uu[uu.MouseWheelY = 8] = "MouseWheelY", uu[uu.MouseWheelZ = 9] = "MouseWheelZ", uu[uu.Move = 12] = "Move"
    }(Au || (Au = {})),
    function(uu) {
      uu[uu.Horizontal = 0] = "Horizontal", uu[uu.Vertical = 1] = "Vertical", uu[uu.LeftClick = 2] = "LeftClick", uu[uu.MiddleClick = 3] = "MiddleClick", uu[uu.RightClick = 4] = "RightClick", uu[uu.BrowserBack = 5] = "BrowserBack", uu[uu.BrowserForward = 6] = "BrowserForward", uu[uu.MouseWheelX = 7] = "MouseWheelX", uu[uu.MouseWheelY = 8] = "MouseWheelY", uu[uu.MouseWheelZ = 9] = "MouseWheelZ", uu[uu.DeltaHorizontal = 10] = "DeltaHorizontal", uu[uu.DeltaVertical = 11] = "DeltaVertical"
    }(Du || (Du = {})),
    function(uu) {
      uu[uu.Cross = 0] = "Cross", uu[uu.Circle = 1] = "Circle", uu[uu.Square = 2] = "Square", uu[uu.Triangle = 3] = "Triangle", uu[uu.L1 = 4] = "L1", uu[uu.R1 = 5] = "R1", uu[uu.L2 = 6] = "L2", uu[uu.R2 = 7] = "R2", uu[uu.Share = 8] = "Share", uu[uu.Options = 9] = "Options", uu[uu.L3 = 10] = "L3", uu[uu.R3 = 11] = "R3", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.TouchPad = 17] = "TouchPad", uu[uu.LStickXAxis = 18] = "LStickXAxis", uu[uu.LStickYAxis = 19] = "LStickYAxis", uu[uu.RStickXAxis = 20] = "RStickXAxis", uu[uu.RStickYAxis = 21] = "RStickYAxis"
    }(Mu || (Mu = {})),
    function(uu) {
      uu[uu.Cross = 0] = "Cross", uu[uu.Circle = 1] = "Circle", uu[uu.Square = 2] = "Square", uu[uu.Triangle = 3] = "Triangle", uu[uu.L1 = 4] = "L1", uu[uu.R1 = 5] = "R1", uu[uu.L2 = 6] = "L2", uu[uu.R2 = 7] = "R2", uu[uu.Create = 8] = "Create", uu[uu.Options = 9] = "Options", uu[uu.L3 = 10] = "L3", uu[uu.R3 = 11] = "R3", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.TouchPad = 17] = "TouchPad", uu[uu.LStickXAxis = 18] = "LStickXAxis", uu[uu.LStickYAxis = 19] = "LStickYAxis", uu[uu.RStickXAxis = 20] = "RStickXAxis", uu[uu.RStickYAxis = 21] = "RStickYAxis"
    }(Iu || (Iu = {})),
    function(uu) {
      uu[uu.A = 0] = "A", uu[uu.B = 1] = "B", uu[uu.X = 2] = "X", uu[uu.Y = 3] = "Y", uu[uu.LB = 4] = "LB", uu[uu.RB = 5] = "RB", uu[uu.LT = 6] = "LT", uu[uu.RT = 7] = "RT", uu[uu.Back = 8] = "Back", uu[uu.Start = 9] = "Start", uu[uu.LS = 10] = "LS", uu[uu.RS = 11] = "RS", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.LStickXAxis = 17] = "LStickXAxis", uu[uu.LStickYAxis = 18] = "LStickYAxis", uu[uu.RStickXAxis = 19] = "RStickXAxis", uu[uu.RStickYAxis = 20] = "RStickYAxis"
    }(Gu || (Gu = {})),
    function(uu) {
      uu[uu.B = 0] = "B", uu[uu.A = 1] = "A", uu[uu.Y = 2] = "Y", uu[uu.X = 3] = "X", uu[uu.L = 4] = "L", uu[uu.R = 5] = "R", uu[uu.ZL = 6] = "ZL", uu[uu.ZR = 7] = "ZR", uu[uu.Minus = 8] = "Minus", uu[uu.Plus = 9] = "Plus", uu[uu.LS = 10] = "LS", uu[uu.RS = 11] = "RS", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.Capture = 17] = "Capture", uu[uu.LStickXAxis = 18] = "LStickXAxis", uu[uu.LStickYAxis = 19] = "LStickYAxis", uu[uu.RStickXAxis = 20] = "RStickXAxis", uu[uu.RStickYAxis = 21] = "RStickYAxis"
    }(Uu || (Uu = {}));
    var su = yu(39754);
    class tu {
      static CreateDeviceEvent(uu, Ru, yu, Eu, Ku, Qu, mu) {
        switch (uu) {
          case eu.Keyboard:
            return this._CreateKeyboardEvent(yu, Eu, Ku, Qu);
          case eu.Mouse:
            if (yu === Au.MouseWheelX || yu === Au.MouseWheelY || yu === Au.MouseWheelZ) return this._CreateWheelEvent(uu, Ru, yu, Eu, Ku, Qu);
          case eu.Touch:
            return this._CreatePointerEvent(uu, Ru, yu, Eu, Ku, Qu, mu);
          default:
            throw `Unable to generate event for device ${eu[uu]}`
        }
      }
      static _CreatePointerEvent(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = this._CreateMouseEvent(uu, Ru, yu, Eu, Ku, Qu);
        uu === eu.Mouse ? (Ju.deviceType = eu.Mouse, Ju.pointerId = 1, Ju.pointerType = "mouse") : (Ju.deviceType = eu.Touch, Ju.pointerId = mu ?? Ru, Ju.pointerType = "touch");
        let Nu = 0;
        return Nu += Ku.pollInput(uu, Ru, Au.LeftClick), Nu += 2 * Ku.pollInput(uu, Ru, Au.RightClick), Nu += 4 * Ku.pollInput(uu, Ru, Au.MiddleClick), Ju.buttons = Nu, yu === Au.Move ? Ju.type = "pointermove" : yu >= Au.LeftClick && yu <= Au.RightClick && (Ju.type = 1 === Eu ? "pointerdown" : "pointerup", Ju.button = yu - 2), Ju
      }
      static _CreateWheelEvent(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = this._CreateMouseEvent(uu, Ru, yu, Eu, Ku, Qu);
        switch (mu.pointerId = 1, mu.type = "wheel", mu.deltaMode = su.c.DOM_DELTA_PIXEL, mu.deltaX = 0, mu.deltaY = 0, mu.deltaZ = 0, yu) {
          case Au.MouseWheelX:
            mu.deltaX = Eu;
            break;
          case Au.MouseWheelY:
            mu.deltaY = Eu;
            break;
          case Au.MouseWheelZ:
            mu.deltaZ = Eu
        }
        return mu
      }
      static _CreateMouseEvent(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = this._CreateEvent(Qu),
          Ju = Ku.pollInput(uu, Ru, Au.Horizontal),
          Nu = Ku.pollInput(uu, Ru, Au.Vertical);
        return Qu ? (mu.movementX = 0, mu.movementY = 0, mu.offsetX = mu.movementX - Qu.getBoundingClientRect().x, mu.offsetY = mu.movementY - Qu.getBoundingClientRect().y) : (mu.movementX = Ku.pollInput(uu, Ru, 10), mu.movementY = Ku.pollInput(uu, Ru, 11), mu.offsetX = 0, mu.offsetY = 0), this._CheckNonCharacterKeys(mu, Ku), mu.clientX = Ju, mu.clientY = Nu, mu.x = Ju, mu.y = Nu, mu.deviceType = uu, mu.deviceSlot = Ru, mu.inputIndex = yu, mu
      }
      static _CreateKeyboardEvent(uu, Ru, yu, Eu) {
        const Ku = this._CreateEvent(Eu);
        return this._CheckNonCharacterKeys(Ku, yu), Ku.deviceType = eu.Keyboard, Ku.deviceSlot = 0, Ku.inputIndex = uu, Ku.type = 1 === Ru ? "keydown" : "keyup", Ku.key = String.fromCharCode(uu), Ku.keyCode = uu, Ku
      }
      static _CheckNonCharacterKeys(uu, Ru) {
        const yu = Ru.isDeviceAvailable(eu.Keyboard),
          Eu = yu && 1 === Ru.pollInput(eu.Keyboard, 0, 18),
          Ku = yu && 1 === Ru.pollInput(eu.Keyboard, 0, 17),
          Qu = yu && (1 === Ru.pollInput(eu.Keyboard, 0, 91) || 1 === Ru.pollInput(eu.Keyboard, 0, 92) || 1 === Ru.pollInput(eu.Keyboard, 0, 93)),
          mu = yu && 1 === Ru.pollInput(eu.Keyboard, 0, 16);
        uu.altKey = Eu, uu.ctrlKey = Ku, uu.metaKey = Qu, uu.shiftKey = mu
      }
      static _CreateEvent(uu) {
        const Ru = {
          preventDefault: () => {}
        };
        return Ru.target = uu, Ru
      }
    }
    class lu {
      constructor(uu, Ru, yu) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(uu, Ru, ((uu, Ru, Eu, Ku) => {
          const Qu = tu.CreateDeviceEvent(uu, Ru, Eu, Ku, this);
          yu(uu, Ru, Qu)
        })) : this._createDummyNativeInput()
      }
      pollInput(uu, Ru, yu) {
        return this._nativeInput.pollInput(uu, Ru, yu)
      }
      isDeviceAvailable(uu) {
        return uu === eu.Mouse || uu === eu.Touch
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
    const gu = Object.keys(Au).length / 2;
    class cu {
      constructor(uu, Ru, yu, Ku) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Eu.i.IsSafari(), this._usingMacOs = (0, Hu.e)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = uu => {}, this._keyboardUpEvent = uu => {}, this._keyboardBlurEvent = uu => {}, this._pointerMoveEvent = uu => {}, this._pointerDownEvent = uu => {}, this._pointerUpEvent = uu => {}, this._pointerCancelEvent = uu => {}, this._pointerCancelTouch = uu => {}, this._pointerLeaveEvent = uu => {}, this._pointerWheelEvent = uu => {}, this._pointerBlurEvent = uu => {}, this._pointerMacOsChromeOutEvent = uu => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Hu.e)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Hu.e)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = uu => {}, this._gamepadDisconnectedEvent = uu => {}, this._eventPrefix = Eu.i.GetPointerPrefix(uu), this._engine = uu, this._onDeviceConnected = Ru, this._onDeviceDisconnected = yu, this._onInputChanged = Ku, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(uu, Ru, yu) {
        const Ku = this._inputs[uu][Ru];
        if (!Ku) throw `Unable to find device ${eu[uu]}`;
        uu >= eu.DualShock && uu <= eu.DualSense && this._updateDevice(uu, Ru, yu);
        const Qu = Ku[yu];
        if (void 0 === Qu) throw `Unable to find input ${yu} for device ${eu[uu]} in slot ${Ru}`;
        return yu === Au.Move && Eu.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Qu
      }
      isDeviceAvailable(uu) {
        return void 0 !== this._inputs[uu]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const uu = this?._engine.getInputElement();
        if (uu && (!this._eventsAttached || this._elementToAttachTo !== uu)) {
          if (this._disableEvents(), this._inputs)
            for (const uu of this._inputs)
              if (uu)
                for (const Ru in uu) {
                  const yu = uu[+Ru];
                  if (yu)
                    for (let uu = 0; uu < yu.length; uu++) yu[uu] = 0
                }
          this._elementToAttachTo = uu, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const uu = navigator.getGamepads();
          for (const Ru of uu) Ru && this._addGamePad(Ru)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(eu.Mouse, 0, 0, 0)
      }
      _addGamePad(uu) {
        const Ru = this._getGamepadDeviceType(uu.id),
          yu = uu.index;
        this._gamepads = this._gamepads || new Array(uu.index + 1), this._registerDevice(Ru, yu, uu.buttons.length + uu.axes.length), this._gamepads[yu] = Ru
      }
      _addPointerDevice(uu, Ru, yu, Eu) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(uu, Ru, gu);
        const Ku = this._inputs[uu][Ru];
        Ku[0] = yu, Ku[1] = Eu
      }
      _registerDevice(uu, Ru, yu) {
        if (void 0 === Ru) throw `Unable to register device ${eu[uu]} to undefined slot.`;
        if (this._inputs[uu] || (this._inputs[uu] = {}), !this._inputs[uu][Ru]) {
          const Eu = new Array(yu);
          Eu.fill(0), this._inputs[uu][Ru] = Eu, this._onDeviceConnected(uu, Ru)
        }
      }
      _unregisterDevice(uu, Ru) {
        this._inputs[uu][Ru] && (delete this._inputs[uu][Ru], this._onDeviceDisconnected(uu, Ru))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = uu => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(eu.Keyboard, 0, 255));
          const Ru = this._inputs[eu.Keyboard][0];
          if (Ru) {
            Ru[uu.keyCode] = 1;
            const yu = uu;
            yu.inputIndex = uu.keyCode, this._usingMacOs && uu.metaKey && "Meta" !== uu.key && (this._metaKeys.includes(uu.keyCode) || this._metaKeys.push(uu.keyCode)), this._onInputChanged(eu.Keyboard, 0, yu)
          }
        }, this._keyboardUpEvent = uu => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(eu.Keyboard, 0, 255));
          const Ru = this._inputs[eu.Keyboard][0];
          if (Ru) {
            Ru[uu.keyCode] = 0;
            const yu = uu;
            if (yu.inputIndex = uu.keyCode, this._usingMacOs && "Meta" === uu.key && this._metaKeys.length > 0) {
              for (const uu of this._metaKeys) {
                const yu = tu.CreateDeviceEvent(eu.Keyboard, 0, uu, 0, this, this._elementToAttachTo);
                Ru[uu] = 0, this._onInputChanged(eu.Keyboard, 0, yu)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(eu.Keyboard, 0, yu)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const uu = this._inputs[eu.Keyboard][0];
            for (let Ru = 0; Ru < uu.length; Ru++)
              if (0 !== uu[Ru]) {
                uu[Ru] = 0;
                const yu = tu.CreateDeviceEvent(eu.Keyboard, 0, Ru, 0, this, this._elementToAttachTo);
                this._onInputChanged(eu.Keyboard, 0, yu)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Hu.e)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Eu = 0; Eu < this._maxTouchPoints; Eu++) this._activeTouchIds[Eu] = -1;
        this._pointerMoveEvent = uu => {
          const Ru = this._getPointerType(uu);
          let yu = Ru === eu.Mouse ? 0 : this._activeTouchIds.indexOf(uu.pointerId);
          if (Ru === eu.Touch && -1 === yu) {
            if (0 === uu.buttons) return;
            const Ku = this._activeTouchIds.indexOf(-1);
            if (!(Ku >= 0)) return void Eu.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            yu = Ku, this._activeTouchIds[Ku] = uu.pointerId, this._onDeviceConnected(Ru, yu)
          }
          this._inputs[Ru] || (this._inputs[Ru] = {}), this._inputs[Ru][yu] || this._addPointerDevice(Ru, yu, uu.clientX, uu.clientY);
          const Ku = this._inputs[Ru][yu];
          if (Ku) {
            const Eu = uu;
            Eu.inputIndex = Au.Move, Ku[Au.Horizontal] = uu.clientX, Ku[Au.Vertical] = uu.clientY, Ru === eu.Touch && 0 === Ku[Au.LeftClick] && (Ku[Au.LeftClick] = 1), void 0 === uu.pointerId && (uu.pointerId = this._mouseId), this._onInputChanged(Ru, yu, Eu), this._usingSafari || -1 === uu.button || (Eu.inputIndex = uu.button + 2, Ku[uu.button + 2] = Ku[uu.button + 2] ? 0 : 1, this._onInputChanged(Ru, yu, Eu))
          }
        }, this._pointerDownEvent = uu => {
          const Ru = this._getPointerType(uu);
          let yu = Ru === eu.Mouse ? 0 : uu.pointerId;
          if (Ru === eu.Touch) {
            let Ru = this._activeTouchIds.indexOf(uu.pointerId);
            if (-1 === Ru && (Ru = this._activeTouchIds.indexOf(-1)), !(Ru >= 0)) return void Eu.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            yu = Ru, this._activeTouchIds[Ru] = uu.pointerId
          }
          this._inputs[Ru] || (this._inputs[Ru] = {}), this._inputs[Ru][yu] ? Ru === eu.Touch && this._onDeviceConnected(Ru, yu) : this._addPointerDevice(Ru, yu, uu.clientX, uu.clientY);
          const Ku = this._inputs[Ru][yu];
          if (Ku) {
            const Eu = Ku[Au.Horizontal],
              mu = Ku[Au.Vertical];
            if (Ru === eu.Mouse) {
              if (void 0 === uu.pointerId && (uu.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Qu) {}
            } else if (uu.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(uu.pointerId)
            } catch (Qu) {}
            Ku[Au.Horizontal] = uu.clientX, Ku[Au.Vertical] = uu.clientY, Ku[uu.button + 2] = 1;
            const Ju = uu;
            Ju.inputIndex = uu.button + 2, this._onInputChanged(Ru, yu, Ju), Eu === uu.clientX && mu === uu.clientY || (Ju.inputIndex = Au.Move, this._onInputChanged(Ru, yu, Ju))
          }
        }, this._pointerUpEvent = uu => {
          const Ru = this._getPointerType(uu),
            yu = Ru === eu.Mouse ? 0 : this._activeTouchIds.indexOf(uu.pointerId);
          if (Ru === eu.Touch) {
            if (-1 === yu) return;
            this._activeTouchIds[yu] = -1
          }
          const Eu = this._inputs[Ru]?.[yu];
          let Ku = uu.button,
            Qu = Eu && 0 !== Eu[Ku + 2];
          if (!Qu && this._isUsingFirefox && this._usingMacOs && Eu && (Ku = 2 === Ku ? 0 : 2, Qu = 0 !== Eu[Ku + 2]), Qu) {
            const Qu = Eu[Au.Horizontal],
              mu = Eu[Au.Vertical];
            Eu[Au.Horizontal] = uu.clientX, Eu[Au.Vertical] = uu.clientY, Eu[Ku + 2] = 0;
            const Ju = uu;
            void 0 === uu.pointerId && (uu.pointerId = this._mouseId), Qu === uu.clientX && mu === uu.clientY || (Ju.inputIndex = Au.Move, this._onInputChanged(Ru, yu, Ju)), Ju.inputIndex = Ku + 2, Ru === eu.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : uu.pointerId && this._elementToAttachTo.hasPointerCapture?.(uu.pointerId) && this._elementToAttachTo.releasePointerCapture(uu.pointerId), this._onInputChanged(Ru, yu, Ju), Ru === eu.Touch && this._onDeviceDisconnected(Ru, yu)
          }
        }, this._pointerCancelTouch = uu => {
          const Ru = this._activeTouchIds.indexOf(uu);
          if (-1 === Ru) return;
          this._elementToAttachTo.hasPointerCapture?.(uu) && this._elementToAttachTo.releasePointerCapture(uu), this._inputs[eu.Touch][Ru][Au.LeftClick] = 0;
          const yu = tu.CreateDeviceEvent(eu.Touch, Ru, Au.LeftClick, 0, this, this._elementToAttachTo, uu);
          this._onInputChanged(eu.Touch, Ru, yu), this._activeTouchIds[Ru] = -1, this._onDeviceDisconnected(eu.Touch, Ru)
        }, this._pointerCancelEvent = uu => {
          if ("mouse" === uu.pointerType) {
            const uu = this._inputs[eu.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Ru = Au.LeftClick; Ru <= Au.BrowserForward; Ru++)
              if (1 === uu[Ru]) {
                uu[Ru] = 0;
                const yu = tu.CreateDeviceEvent(eu.Mouse, 0, Ru, 0, this, this._elementToAttachTo);
                this._onInputChanged(eu.Mouse, 0, yu)
              }
          } else this._pointerCancelTouch(uu.pointerId)
        }, this._pointerLeaveEvent = uu => {
          "pen" === uu.pointerType && this._pointerCancelTouch(uu.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let uu = !1;
        const Ru = function() {};
        try {
          const yu = Object.defineProperty({}, "passive", {
            get: function() {
              uu = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Ru, yu), this._elementToAttachTo.removeEventListener("test", Ru, yu)
        } catch (yu) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(eu.Mouse)) {
            const uu = this._inputs[eu.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Ru = Au.LeftClick; Ru <= Au.BrowserForward; Ru++)
              if (1 === uu[Ru]) {
                uu[Ru] = 0;
                const yu = tu.CreateDeviceEvent(eu.Mouse, 0, Ru, 0, this, this._elementToAttachTo);
                this._onInputChanged(eu.Mouse, 0, yu)
              }
          }
          if (this.isDeviceAvailable(eu.Touch)) {
            const uu = this._inputs[eu.Touch];
            for (let Ru = 0; Ru < this._activeTouchIds.length; Ru++) {
              const yu = this._activeTouchIds[Ru];
              if (this._elementToAttachTo.hasPointerCapture?.(yu) && this._elementToAttachTo.releasePointerCapture(yu), -1 !== yu && 1 === uu[Ru]?.[Au.LeftClick]) {
                uu[Ru][Au.LeftClick] = 0;
                const Eu = tu.CreateDeviceEvent(eu.Touch, Ru, Au.LeftClick, 0, this, this._elementToAttachTo, yu);
                this._onInputChanged(eu.Touch, Ru, Eu), this._activeTouchIds[Ru] = -1, this._onDeviceDisconnected(eu.Touch, Ru)
              }
            }
          }
        }, this._pointerWheelEvent = uu => {
          const Ru = eu.Mouse;
          this._inputs[Ru] || (this._inputs[Ru] = []), this._inputs[Ru][0] || (this._pointerActive = !0, this._registerDevice(Ru, 0, gu));
          const yu = this._inputs[Ru][0];
          if (yu) {
            yu[Au.MouseWheelX] = uu.deltaX || 0, yu[Au.MouseWheelY] = uu.deltaY || uu.wheelDelta || 0, yu[Au.MouseWheelZ] = uu.deltaZ || 0;
            const Eu = uu;
            void 0 === uu.pointerId && (uu.pointerId = this._mouseId), 0 !== yu[Au.MouseWheelX] && (Eu.inputIndex = Au.MouseWheelX, this._onInputChanged(Ru, 0, Eu)), 0 !== yu[Au.MouseWheelY] && (Eu.inputIndex = Au.MouseWheelY, this._onInputChanged(Ru, 0, Eu)), 0 !== yu[Au.MouseWheelZ] && (Eu.inputIndex = Au.MouseWheelZ, this._onInputChanged(Ru, 0, Eu))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = uu => {
          uu.buttons > 1 && this._pointerCancelEvent(uu)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!uu && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(eu.Mouse)) {
            const uu = this._inputs[eu.Mouse][0];
            uu[Au.MouseWheelX] = 0, uu[Au.MouseWheelY] = 0, uu[Au.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = uu => {
          this._addGamePad(uu.gamepad)
        }, this._gamepadDisconnectedEvent = uu => {
          if (this._gamepads) {
            const Ru = this._getGamepadDeviceType(uu.gamepad.id),
              yu = uu.gamepad.index;
            this._unregisterDevice(Ru, yu), delete this._gamepads[yu]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(uu, Ru, yu) {
        const Eu = navigator.getGamepads()[Ru];
        if (Eu && uu === this._gamepads[Ru]) {
          const Ku = this._inputs[uu][Ru];
          yu >= Eu.buttons.length ? Ku[yu] = Eu.axes[yu - Eu.buttons.length].valueOf() : Ku[yu] = Eu.buttons[yu].value
        }
      }
      _getGamepadDeviceType(uu) {
        return -1 !== uu.indexOf("054c") ? -1 !== uu.indexOf("0ce6") ? eu.DualSense : eu.DualShock : -1 !== uu.indexOf("Xbox One") || -1 !== uu.search("Xbox 360") || -1 !== uu.search("xinput") || -1 !== uu.indexOf("045e") && -1 === uu.indexOf("Surface Dock") ? eu.Xbox : -1 !== uu.indexOf("057e") ? eu.Switch : eu.Generic
      }
      _getPointerType(uu) {
        let Ru = eu.Mouse;
        return ("touch" === uu.pointerType || "pen" === uu.pointerType || uu.touches) && (Ru = eu.Touch), Ru
      }
    }
    class Lu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Ru, this.deviceSlot = yu, this.onInputChangedObservable = new mu.b, this._deviceInputSystem = uu
      }
      getInput(uu) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, uu)
      }
    }
    class zu {
      constructor(uu) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = uu => {
          for (let Ru = 0; Ru < this._devices.length; Ru++) {
            const yu = this._devices[Ru];
            for (const Eu in yu) {
              const yu = +Eu;
              uu._addDevice(new Lu(this._deviceInputSystem, Ru, yu))
            }
          }
          this._registeredManagers.push(uu)
        }, this.unregisterManager = uu => {
          const Ru = this._registeredManagers.indexOf(uu);
          Ru > -1 && this._registeredManagers.splice(Ru, 1)
        };
        const Ru = Object.keys(eu).length / 2;
        this._devices = new Array(Ru);
        const yu = (uu, Ru) => {
            this._devices[uu] || (this._devices[uu] = new Array), this._devices[uu][Ru] || (this._devices[uu][Ru] = Ru);
            for (const yu of this._registeredManagers) {
              const Eu = new Lu(this._deviceInputSystem, uu, Ru);
              yu._addDevice(Eu)
            }
          },
          Eu = (uu, Ru) => {
            this._devices[uu]?.[Ru] && delete this._devices[uu][Ru];
            for (const yu of this._registeredManagers) yu._removeDevice(uu, Ru)
          },
          Ku = (uu, Ru, yu) => {
            if (yu)
              for (const Eu of this._registeredManagers) Eu._onInputChanged(uu, Ru, yu)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new lu(yu, Eu, Ku) : this._deviceInputSystem = new cu(uu, yu, Eu, Ku)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Fu {
      getDeviceSource(uu, Ru) {
        if (void 0 === Ru) {
          if (void 0 === this._firstDevice[uu]) return null;
          Ru = this._firstDevice[uu]
        }
        return this._devices[uu] && void 0 !== this._devices[uu][Ru] ? this._devices[uu][Ru] : null
      }
      getDeviceSources(uu) {
        return this._devices[uu] ? this._devices[uu].filter((uu => !!uu)) : []
      }
      constructor(uu) {
        const Ru = Object.keys(eu).length / 2;
        this._devices = new Array(Ru), this._firstDevice = new Array(Ru), this._engine = uu, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new zu(uu)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new mu.b((uu => {
          for (const Ru of this._devices)
            if (Ru)
              for (const yu of Ru) yu && this.onDeviceConnectedObservable.notifyObserver(uu, yu)
        })), this.onDeviceDisconnectedObservable = new mu.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = uu.zD.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.zD.remove(this._onDisposeObserver)
      }
      _addDevice(uu) {
        this._devices[uu.deviceType] || (this._devices[uu.deviceType] = []), this._devices[uu.deviceType][uu.deviceSlot] || (this._devices[uu.deviceType][uu.deviceSlot] = uu, this._updateFirstDevices(uu.deviceType)), this.onDeviceConnectedObservable.notifyObservers(uu)
      }
      _removeDevice(uu, Ru) {
        const yu = this._devices[uu]?.[Ru];
        this.onDeviceDisconnectedObservable.notifyObservers(yu), this._devices[uu]?.[Ru] && delete this._devices[uu][Ru], this._updateFirstDevices(uu)
      }
      _onInputChanged(uu, Ru, yu) {
        this._devices[uu]?.[Ru]?.onInputChangedObservable.notifyObservers(yu)
      }
      _updateFirstDevices(uu) {
        switch (uu) {
          case eu.Keyboard:
          case eu.Mouse:
            this._firstDevice[uu] = 0;
            break;
          case eu.Touch:
          case eu.DualSense:
          case eu.DualShock:
          case eu.Xbox:
          case eu.Switch:
          case eu.Generic: {
            delete this._firstDevice[uu];
            const Ru = this._devices[uu];
            if (Ru)
              for (let yu = 0; yu < Ru.length; yu++)
                if (Ru[yu]) {
                  this._firstDevice[uu] = yu;
                  break
                } break
          }
        }
      }
    }
    var wu = yu(39762);
    class Zu {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get rV() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(uu) {
        this._singleClick = uu
      }
      set rV(uu) {
        this._doubleClick = uu
      }
      set hasSwiped(uu) {
        this._hasSwiped = uu
      }
      set ignore(uu) {
        this._ignore = uu
      }
    }
    class hu {
      constructor(uu) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Vu.n(0, 0), this._previousStartingPointerPosition = new Vu.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = uu || du.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(uu) {
        return this._meshUnderPointerId[uu] || null
      }
      get unTranslatedPointer() {
        return new Vu.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(uu) {
        this._pointerX = uu
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(uu) {
        this._pointerY = uu
      }
      _updatePointerPosition(uu) {
        const Ru = this._scene.eS().getInputElementClientRect();
        Ru && (this._pointerX = uu.clientX - Ru.left, this._pointerY = uu.clientY - Ru.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(uu, Ru) {
        const yu = this._scene,
          Eu = yu.eS(),
          Ku = Eu.getInputElement();
        Ku && (Ku.tabIndex = Eu.canvasTabIndex, yu.doNotHandleCursors || (Ku.style.cursor = yu.defaultCursor)), this._setCursorAndPointerOverMesh(uu, Ru, yu);
        for (const Ju of yu._pointerMoveStage) {
          uu = uu || this._pickMove(Ru);
          const yu = !!uu?.pickedMesh;
          uu = Ju.action(this._unTranslatedPointerX, this._unTranslatedPointerY, uu, yu, Ku)
        }
        const Qu = Ru.inputIndex >= Au.MouseWheelX && Ru.inputIndex <= Au.MouseWheelZ ? Cu.e.POINTERWHEEL : Cu.e.POINTERMOVE;
        let mu;
        yu.onPointerMove && (uu = uu || this._pickMove(Ru), yu.onPointerMove(Ru, uu, Qu)), uu ? (mu = new Cu.k(Qu, Ru, uu), this._setRayOnPointerInfo(uu, Ru)) : (mu = new Cu.k(Qu, Ru, null, this), this._movePointerInfo = mu), yu.onPointerObservable.hasObservers() && yu.onPointerObservable.notifyObservers(mu, Qu)
      }
      _setRayOnPointerInfo(uu, Ru) {
        const yu = this._scene;
        uu && wu.b._IsPickingAvailable && (uu.ray || (uu.ray = yu.createPickingRay(Ru.offsetX, Ru.offsetY, Vu.d.Identity(), yu.activeCamera)))
      }
      _addCameraPointerObserver(uu, Ru) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(uu, Ru)
      }
      _removeCameraPointerObserver(uu) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(uu)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(uu, Ru, yu) {
        const Eu = this._scene,
          Ku = new Cu.i(yu, Ru, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return uu && (Ku.originalPickingInfo = uu, Ku.ray = uu.ray, "xr-near" === Ru.pointerType && uu.originMesh && (Ku.nearInteractionPickingInfo = uu)), Eu.onPrePointerObservable.notifyObservers(Ku, yu), !!Ku.skipOnPointerObservable
      }
      _pickMove(uu) {
        const Ru = this._scene,
          yu = Ru.cB(this._unTranslatedPointerX, this._unTranslatedPointerY, Ru.pointerMovePredicate, Ru.pointerMoveFastCheck, Ru.cameraToUseForPointers, Ru.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(yu, uu, Ru), yu
      }
      _updateMeshUnderPointer() {
        const uu = this._scene;
        if (!uu.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || uu.skipPointerMovePicking || !uu.cameraToUseForPointers && !uu.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Ru = this._pointerX,
          yu = this._pointerY,
          Eu = this._unTranslatedPointerX,
          Ku = this._unTranslatedPointerY;
        for (const Qu of this._latestPointerMoveEvents.values()) this._pointerX = Qu.pointerX, this._pointerY = Qu.pointerY, this._unTranslatedPointerX = Qu.unTranslatedPointerX, this._unTranslatedPointerY = Qu.unTranslatedPointerY, this._pickMove(Qu.event);
        this._pointerX = Ru, this._pointerY = yu, this._unTranslatedPointerX = Eu, this._unTranslatedPointerY = Ku
      }
      _ensurePointerMovePredicate() {
        const uu = this._scene;
        uu.pointerMovePredicate || (uu.pointerMovePredicate = Ru => (Ru._isPointerMovePickable ?? Ru.zp) && Ru.isVisible && Ru.isReady() && Ru.isEnabled() && (Ru.enablePointerMoveEvents || uu.constantlyUpdateMeshUnderPointer || null !== Ru._getActionManagerForTrigger()) && (!uu.cameraToUseForPointers || 0 !== (uu.cameraToUseForPointers.layerMask & Ru.layerMask)))
      }
      _setCursorAndPointerOverMesh(uu, Ru, yu) {
        const Eu = yu.eS().getInputElement();
        if (uu?.pickedMesh) {
          if (this.setPointerOverMesh(uu.pickedMesh, Ru.pointerId, uu, Ru), !yu.doNotHandleCursors && Eu && this._pointerOverMesh) {
            const uu = this._pointerOverMesh._getActionManagerForTrigger();
            uu && uu.hasPointerTriggers && (Eu.style.cursor = uu.hoverCursor || yu.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Ru.pointerId, uu, Ru)
      }
      simulatePointerMove(uu, Ru) {
        const yu = new PointerEvent("pointermove", Ru);
        yu.inputIndex = Au.Move, this._checkPrePointerObservable(uu, yu, Cu.e.POINTERMOVE) || this._processPointerMove(uu, yu)
      }
      simulatePointerDown(uu, Ru) {
        const yu = new PointerEvent("pointerdown", Ru);
        yu.inputIndex = yu.button + 2, this._checkPrePointerObservable(uu, yu, Cu.e.POINTERDOWN) || this._processPointerDown(uu, yu)
      }
      _processPointerDown(uu, Ru) {
        const yu = this._scene;
        if (uu?.pickedMesh) {
          this._pickedDownMesh = uu.pickedMesh;
          const Eu = uu.pickedMesh._getActionManagerForTrigger();
          if (Eu) {
            if (Eu.hasPickTriggers) switch (Eu.processTrigger(5, new Su(uu.pickedMesh, yu.pointerX, yu.pointerY, uu.pickedMesh, Ru, uu)), Ru.button) {
              case 0:
                Eu.processTrigger(2, new Su(uu.pickedMesh, yu.pointerX, yu.pointerY, uu.pickedMesh, Ru, uu));
                break;
              case 1:
                Eu.processTrigger(4, new Su(uu.pickedMesh, yu.pointerX, yu.pointerY, uu.pickedMesh, Ru, uu));
                break;
              case 2:
                Eu.processTrigger(3, new Su(uu.pickedMesh, yu.pointerX, yu.pointerY, uu.pickedMesh, Ru, uu))
            }
            Eu.hasSpecificTrigger(8) && window.setTimeout((() => {
              const uu = yu.cB(this._unTranslatedPointerX, this._unTranslatedPointerY, (uu => uu.zp && uu.isVisible && uu.isReady() && uu.actionManager && uu.actionManager.hasSpecificTrigger(8) && uu === this._pickedDownMesh), !1, yu.cameraToUseForPointers);
              uu?.pickedMesh && Eu && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > hu.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Eu.processTrigger(8, Su.CreateNew(uu.pickedMesh, Ru)))
            }), hu.LongPressDelay)
          }
        } else
          for (const Qu of yu._pointerDownStage) uu = Qu.action(this._unTranslatedPointerX, this._unTranslatedPointerY, uu, Ru, !1);
        let Eu;
        const Ku = Cu.e.POINTERDOWN;
        uu ? (yu.onPointerDown && yu.onPointerDown(Ru, uu, Ku), Eu = new Cu.k(Ku, Ru, uu), this._setRayOnPointerInfo(uu, Ru)) : Eu = new Cu.k(Ku, Ru, null, this), yu.onPointerObservable.hasObservers() && yu.onPointerObservable.notifyObservers(Eu, Ku)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(uu, Ru, yu) {
        const Eu = new PointerEvent("pointerup", Ru);
        Eu.inputIndex = Au.Move;
        const Ku = new Zu;
        yu ? Ku.rV = !0 : Ku.singleClick = !0, this._checkPrePointerObservable(uu, Eu, Cu.e.POINTERUP) || this._processPointerUp(uu, Eu, Ku)
      }
      _processPointerUp(uu, Ru, yu) {
        const Eu = this._scene;
        if (uu?.pickedMesh) {
          if (this._pickedUpMesh = uu.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Eu.onPointerPick && Eu.onPointerPick(Ru, uu), yu.singleClick && !yu.ignore && Eu.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const yu = Cu.e.POINTERPICK,
              Ku = new Cu.k(yu, Ru, uu);
            this._setRayOnPointerInfo(uu, Ru), Eu.onPointerObservable.notifyObservers(Ku, yu)
          }
          const Ku = uu.pickedMesh._getActionManagerForTrigger();
          if (Ku && !yu.ignore) {
            Ku.processTrigger(7, Su.CreateNew(uu.pickedMesh, Ru, uu)), !yu.hasSwiped && yu.singleClick && Ku.processTrigger(1, Su.CreateNew(uu.pickedMesh, Ru, uu));
            const Eu = uu.pickedMesh._getActionManagerForTrigger(6);
            yu.rV && Eu && Eu.processTrigger(6, Su.CreateNew(uu.pickedMesh, Ru, uu))
          }
        } else if (!yu.ignore)
          for (const Ku of Eu._pointerUpStage) uu = Ku.action(this._unTranslatedPointerX, this._unTranslatedPointerY, uu, Ru, yu.rV);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const uu = this._pickedDownMesh._getActionManagerForTrigger(16);
          uu && uu.processTrigger(16, Su.CreateNew(this._pickedDownMesh, Ru))
        }
        if (!yu.ignore) {
          const Ku = new Cu.k(Cu.e.POINTERUP, Ru, uu);
          if (this._setRayOnPointerInfo(uu, Ru), Eu.onPointerObservable.notifyObservers(Ku, Cu.e.POINTERUP), Eu.onPointerUp && Eu.onPointerUp(Ru, uu, Cu.e.POINTERUP), !yu.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Ku = 0;
            if (yu.singleClick ? Ku = Cu.e.POINTERTAP : yu.rV && (Ku = Cu.e.POINTERDOUBLETAP), Ku) {
              const yu = new Cu.k(Ku, Ru, uu);
              Eu.onPointerObservable.hasObservers() && Eu.onPointerObservable.hasSpecificMask(Ku) && Eu.onPointerObservable.notifyObservers(yu, Ku)
            }
          }
        }
      }
      isPointerCaptured() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[uu]
      }
      attachControl() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ku = this._scene,
          Qu = Ku.eS();
        Eu || (Eu = Qu.getInputElement()), this._alreadyAttached && this.detachControl(), Eu && (this._alreadyAttachedTo = Eu), this._deviceSourceManager = new Fu(Qu), this._initActionManager = uu => {
          if (!this._meshPickProceed) {
            const Ru = Ku.skipPointerUpPicking || 0 === Ku._registeredActions && !this._checkForPicking() && !Ku.onPointerUp ? null : Ku.cB(this._unTranslatedPointerX, this._unTranslatedPointerY, Ku.pointerUpPredicate, Ku.pointerUpFastCheck, Ku.cameraToUseForPointers, Ku.pointerUpTrianglePredicate);
            this._currentPickResult = Ru, Ru && (uu = Ru.hit && Ru.pickedMesh ? Ru.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return uu
        }, this._delayedSimpleClick = (uu, Ru, yu) => {
          if ((Date.now() - this._previousStartingPointerTime > hu.DoubleClickDelay && !this._doubleClickOccured || uu !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Ru.singleClick = !0, Ru.ignore = !1, this._delayedClicks[uu])) {
            const Ru = this._delayedClicks[uu].evt,
              yu = Cu.e.POINTERTAP,
              Eu = new Cu.k(yu, Ru, this._currentPickResult);
            Ku.onPointerObservable.hasObservers() && Ku.onPointerObservable.hasSpecificMask(yu) && Ku.onPointerObservable.notifyObservers(Eu, yu), this._delayedClicks[uu] = null
          }
        }, this._initClickEvent = (uu, Ru, yu, Eu) => {
          const Ku = new Zu;
          this._currentPickResult = null;
          let Qu = null,
            mu = uu.hasSpecificMask(Cu.e.POINTERPICK) || Ru.hasSpecificMask(Cu.e.POINTERPICK) || uu.hasSpecificMask(Cu.e.POINTERTAP) || Ru.hasSpecificMask(Cu.e.POINTERTAP) || uu.hasSpecificMask(Cu.e.POINTERDOUBLETAP) || Ru.hasSpecificMask(Cu.e.POINTERDOUBLETAP);
          !mu && ku && (Qu = this._initActionManager(Qu, Ku), Qu && (mu = Qu.hasPickTriggers));
          let Ju = !1;
          if (mu = mu && !this._isMultiTouchGesture, mu) {
            const mu = yu.button;
            if (Ku.hasSwiped = this._isPointerSwiping(), !Ku.hasSwiped) {
              let Nu = !hu.ExclusiveDoubleClickMode;
              if (Nu || (Nu = !uu.hasSpecificMask(Cu.e.POINTERDOUBLETAP) && !Ru.hasSpecificMask(Cu.e.POINTERDOUBLETAP), Nu && !ku.HasSpecificTrigger(6) && (Qu = this._initActionManager(Qu, Ku), Qu && (Nu = !Qu.hasSpecificTrigger(6)))), Nu)(Date.now() - this._previousStartingPointerTime > hu.DoubleClickDelay || mu !== this._previousButtonPressed) && (Ku.singleClick = !0, Eu(Ku, this._currentPickResult), Ju = !0);
              else {
                const uu = {
                  evt: yu,
                  clickInfo: Ku,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, mu, Ku, Eu), hu.DoubleClickDelay)
                };
                this._delayedClicks[mu] = uu
              }
              let Xu = uu.hasSpecificMask(Cu.e.POINTERDOUBLETAP) || Ru.hasSpecificMask(Cu.e.POINTERDOUBLETAP);
              !Xu && ku.HasSpecificTrigger(6) && (Qu = this._initActionManager(Qu, Ku), Qu && (Xu = Qu.hasSpecificTrigger(6))), Xu && (mu === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < hu.DoubleClickDelay && !this._doubleClickOccured ? (Ku.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = mu, hu.ExclusiveDoubleClickMode ? (this._delayedClicks[mu] && (clearTimeout(this._delayedClicks[mu]?.timeoutId), this._delayedClicks[mu] = null), Eu(Ku, this._previousPickResult)) : Eu(Ku, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Ku.rV = !0, Ku.ignore = !1, hu.ExclusiveDoubleClickMode && this._delayedClicks[mu] && (clearTimeout(this._delayedClicks[mu]?.timeoutId), this._delayedClicks[mu] = null), Eu(Ku, this._currentPickResult)), Ju = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = mu))
            }
          }
          Ju || Eu(Ku, this._currentPickResult)
        }, this._onPointerMove = uu => {
          if (this._updatePointerPosition(uu), this._latestPointerMoveEvents.set(uu.pointerId, {
              event: uu,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > hu.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > hu.DragMovementThreshold), Qu.isPointerLock && Qu._verifyPointerLock(), this._checkPrePointerObservable(null, uu, uu.inputIndex >= Au.MouseWheelX && uu.inputIndex <= Au.MouseWheelZ ? Cu.e.POINTERWHEEL : Cu.e.POINTERMOVE)) return;
          if (!Ku.cameraToUseForPointers && !Ku.activeCamera) return;
          if (Ku.skipPointerMovePicking) return void this._processPointerMove(new xu.c, uu);
          this._ensurePointerMovePredicate();
          const Ru = Ku._registeredActions > 0 || Ku.constantlyUpdateMeshUnderPointer ? this._pickMove(uu) : null;
          this._processPointerMove(Ru, uu)
        }, this._onPointerDown = uu => {
          const Ru = this._activePointerIds.indexOf(-1);
          if (-1 === Ru ? this._activePointerIds.push(uu.pointerId) : this._activePointerIds[Ru] = uu.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, hu.ExclusiveDoubleClickMode)
            for (let Eu = 0; Eu < this._delayedClicks.length; Eu++)
              if (this._delayedClicks[Eu])
                if (uu.button === Eu) clearTimeout(this._delayedClicks[Eu]?.timeoutId);
                else {
                  const uu = this._delayedClicks[Eu].clickInfo;
                  this._doubleClickOccured = !1, uu.singleClick = !0, uu.ignore = !1;
                  const Ru = this._delayedClicks[Eu].evt,
                    yu = Cu.e.POINTERTAP,
                    Qu = new Cu.k(yu, Ru, this._currentPickResult);
                  Ku.onPointerObservable.hasObservers() && Ku.onPointerObservable.hasSpecificMask(yu) && Ku.onPointerObservable.notifyObservers(Qu, yu), this._delayedClicks[Eu] = null
                } if (this._updatePointerPosition(uu), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = uu.button), Ku.preventDefaultOnPointerDown && Eu && (uu.preventDefault(), Eu.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, uu, Cu.e.POINTERDOWN)) return;
          if (!Ku.cameraToUseForPointers && !Ku.activeCamera) return;
          let yu;
          this._pointerCaptures[uu.pointerId] = !0, Ku.pointerDownPredicate || (Ku.pointerDownPredicate = uu => uu.zp && uu.isVisible && uu.isReady() && uu.isEnabled() && (!Ku.cameraToUseForPointers || 0 !== (Ku.cameraToUseForPointers.layerMask & uu.layerMask))), this._pickedDownMesh = null, yu = Ku.skipPointerDownPicking || 0 === Ku._registeredActions && !this._checkForPicking() && !Ku.onPointerDown ? new xu.c : Ku.cB(this._unTranslatedPointerX, this._unTranslatedPointerY, Ku.pointerDownPredicate, Ku.pointerDownFastCheck, Ku.cameraToUseForPointers, Ku.pointerDownTrianglePredicate), this._processPointerDown(yu, uu)
        }, this._onPointerUp = uu => {
          const Ru = this._activePointerIds.indexOf(uu.pointerId); - 1 !== Ru && (this._activePointerIds[Ru] = -1, this._activePointerIdsCount--, "touch" === uu.pointerType && this._latestPointerMoveEvents.delete(uu.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(uu), Ku.preventDefaultOnPointerUp && Eu && (uu.preventDefault(), Eu.focus()), this._initClickEvent(Ku.onPrePointerObservable, Ku.onPointerObservable, uu, ((Ru, yu) => {
            if (Ku.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Ru.ignore)) {
              if (this._checkPrePointerObservable(null, uu, Cu.e.POINTERUP)) return this._swipeButtonPressed === uu.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === uu.buttons && (this._pointerCaptures[uu.pointerId] = !1));
              Ru.hasSwiped || (Ru.singleClick && Ku.onPrePointerObservable.hasSpecificMask(Cu.e.POINTERTAP) && this._checkPrePointerObservable(null, uu, Cu.e.POINTERTAP) && (this._skipPointerTap = !0), Ru.rV && Ku.onPrePointerObservable.hasSpecificMask(Cu.e.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, uu, Cu.e.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[uu.pointerId] ? (0 === uu.buttons && (this._pointerCaptures[uu.pointerId] = !1), (Ku.cameraToUseForPointers || Ku.activeCamera) && (Ku.pointerUpPredicate || (Ku.pointerUpPredicate = uu => uu.zp && uu.isVisible && uu.isReady() && uu.isEnabled() && (!Ku.cameraToUseForPointers || 0 !== (Ku.cameraToUseForPointers.layerMask & uu.layerMask))), !this._meshPickProceed && (ku && ku.HasTriggers || this._checkForPicking() || Ku.onPointerUp) && this._initActionManager(null, Ru), yu || (yu = this._currentPickResult), this._processPointerUp(yu, uu, Ru), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === uu.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === uu.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = uu => {
          const Ru = nu.e.KEYDOWN;
          if (Ku.onPreKeyboardObservable.hasObservers()) {
            const yu = new nu.g(Ru, uu);
            if (Ku.onPreKeyboardObservable.notifyObservers(yu, Ru), yu.skipOnKeyboardObservable) return
          }
          if (Ku.onKeyboardObservable.hasObservers()) {
            const yu = new nu.i(Ru, uu);
            Ku.onKeyboardObservable.notifyObservers(yu, Ru)
          }
          Ku.actionManager && Ku.actionManager.processTrigger(14, Su.CreateNewFromScene(Ku, uu))
        }, this._onKeyUp = uu => {
          const Ru = nu.e.KEYUP;
          if (Ku.onPreKeyboardObservable.hasObservers()) {
            const yu = new nu.g(Ru, uu);
            if (Ku.onPreKeyboardObservable.notifyObservers(yu, Ru), yu.skipOnKeyboardObservable) return
          }
          if (Ku.onKeyboardObservable.hasObservers()) {
            const yu = new nu.i(Ru, uu);
            Ku.onKeyboardObservable.notifyObservers(yu, Ru)
          }
          Ku.actionManager && Ku.actionManager.processTrigger(15, Su.CreateNewFromScene(Ku, uu))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Eu => {
          Eu.deviceType === eu.Mouse ? Eu.onInputChangedObservable.add((Ku => {
            this._originMouseEvent = Ku, Ku.inputIndex === Au.LeftClick || Ku.inputIndex === Au.MiddleClick || Ku.inputIndex === Au.RightClick || Ku.inputIndex === Au.BrowserBack || Ku.inputIndex === Au.BrowserForward ? Ru && 1 === Eu.getInput(Ku.inputIndex) ? this._onPointerDown(Ku) : uu && 0 === Eu.getInput(Ku.inputIndex) && this._onPointerUp(Ku) : yu && (Ku.inputIndex === Au.Move ? this._onPointerMove(Ku) : Ku.inputIndex !== Au.MouseWheelX && Ku.inputIndex !== Au.MouseWheelY && Ku.inputIndex !== Au.MouseWheelZ || this._onPointerMove(Ku))
          })) : Eu.deviceType === eu.Touch ? Eu.onInputChangedObservable.add((Ku => {
            Ku.inputIndex === Au.LeftClick && (Ru && 1 === Eu.getInput(Ku.inputIndex) ? (this._onPointerDown(Ku), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : uu && 0 === Eu.getInput(Ku.inputIndex) && (this._onPointerUp(Ku), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), yu && Ku.inputIndex === Au.Move && this._onPointerMove(Ku)
          })) : Eu.deviceType === eu.Keyboard && Eu.onInputChangedObservable.add((uu => {
            "keydown" === uu.type ? this._onKeyDown(uu) : "keyup" === uu.type && this._onKeyUp(uu)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Ru] === uu && (!uu || !uu._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Ku = this._meshUnderPointerId[Ru];
        let Qu;
        Ku && (Qu = Ku._getActionManagerForTrigger(10), Qu && Qu.processTrigger(10, new Su(Ku, this._pointerX, this._pointerY, uu, Eu, {
          pointerId: Ru
        }))), uu ? (this._meshUnderPointerId[Ru] = uu, this._pointerOverMesh = uu, Qu = uu._getActionManagerForTrigger(9), Qu && Qu.processTrigger(9, new Su(uu, this._pointerX, this._pointerY, uu, Eu, {
          pointerId: Ru,
          pickResult: yu
        }))) : (delete this._meshUnderPointerId[Ru], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: uu,
          pointerId: Ru
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(uu) {
        this._pointerOverMesh === uu && (this._pointerOverMesh = null), this._pickedDownMesh === uu && (this._pickedDownMesh = null), this._pickedUpMesh === uu && (this._pickedUpMesh = null);
        for (const Ru in this._meshUnderPointerId) this._meshUnderPointerId[Ru] === uu && delete this._meshUnderPointerId[Ru]
      }
    }
    hu.DragMovementThreshold = 10, hu.LongPressDelay = 500, hu.DoubleClickDelay = 300, hu.ExclusiveDoubleClickMode = !1;
    var Pu = yu(39514),
      iu = yu(36991),
      Yu = yu(37525);
    class ou {
      static get UniqueId() {
        const uu = this._UniqueIdCounter;
        return this._UniqueIdCounter++, uu
      }
    }
    ou._UniqueIdCounter = 1;
    var qu = yu(39606),
      Ou = yu(39764),
      vu = yu(36842);
    class au {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var fu, uR, RR, yR, ER, KR, QR, mR, JR, NR, XR, VR, rR, BR, xR, SR, pR, TR, WR, jR, HR, dR, bR, CR, kR, eR, AR, DR, MR, IR, GR, UR, nR, sR, tR, lR, gR, cR, LR, zR, FR, wR, ZR, hR, PR, iR, YR, oR, qR, OR, vR, aR, fR, uy = yu(38448),
      Ry = yu(36871);
    const yy = new Vu.r,
      Ey = new Vu.r;
    var Ky;
    ! function(uu) {
      uu[uu.BackwardCompatible = 0] = "BackwardCompatible", uu[uu.Intermediate = 1] = "Intermediate", uu[uu.Aggressive = 2] = "Aggressive"
    }(Ky || (Ky = {}));
    class Qy {
      static DefaultMaterialFactory(uu) {
        throw (0, bu.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, bu.k)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(uu) {
        uu !== this._clearColor && (this._clearColor = uu, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(uu) {
        if (uu !== this._performancePriority) {
          switch (this._performancePriority = uu, uu) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(uu)
        }
      }
      set forceWireframe(uu) {
        this._forceWireframe !== uu && (this._forceWireframe = uu, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(uu) {
        this._skipFrustumClipping !== uu && (this._skipFrustumClipping = uu)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(uu) {
        this._forcePointsCloud !== uu && (this._forcePointsCloud = uu, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(uu) {
        this._environmentTexture !== uu && (this._environmentTexture = uu, this.onEnvironmentTextureChangedObservable.notifyObservers(uu), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let uu = [];
        uu = uu.concat(this.meshes), uu = uu.concat(this.lights), uu = uu.concat(this.cameras), uu = uu.concat(this.transformNodes);
        for (const Ru of this.skeletons) uu = uu.concat(Ru.bones);
        return uu
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(uu) {
        this._animationPropertiesOverride = uu
      }
      set onDispose(uu) {
        this._onDisposeObserver && this.zD.remove(this._onDisposeObserver), this._onDisposeObserver = this.zD.add(uu)
      }
      set beforeRender(uu) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), uu && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(uu))
      }
      set afterRender(uu) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), uu && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(uu))
      }
      set beforeCameraRender(uu) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(uu)
      }
      set afterCameraRender(uu) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(uu)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(uu) {
        this._pointerPickingConfiguration.pointerDownPredicate = uu
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(uu) {
        this._pointerPickingConfiguration.pointerUpPredicate = uu
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(uu) {
        this._pointerPickingConfiguration.pointerMovePredicate = uu
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(uu) {
        this._pointerPickingConfiguration.pointerDownFastCheck = uu
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(uu) {
        this._pointerPickingConfiguration.pointerUpFastCheck = uu
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(uu) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = uu
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(uu) {
        this._pointerPickingConfiguration.skipPointerMovePicking = uu
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(uu) {
        this._pointerPickingConfiguration.skipPointerDownPicking = uu
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(uu) {
        this._pointerPickingConfiguration.skipPointerUpPicking = uu
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return hu.DragMovementThreshold
      }
      static set DragMovementThreshold(uu) {
        hu.DragMovementThreshold = uu
      }
      static get LongPressDelay() {
        return hu.LongPressDelay
      }
      static set LongPressDelay(uu) {
        hu.LongPressDelay = uu
      }
      static get DoubleClickDelay() {
        return hu.DoubleClickDelay
      }
      static set DoubleClickDelay(uu) {
        hu.DoubleClickDelay = uu
      }
      static get ExclusiveDoubleClickMode() {
        return hu.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(uu) {
        hu.ExclusiveDoubleClickMode = uu
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Vu.p.ZeroReadOnly
      }
      bindEyePosition(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = this._eyePosition,
          Ku = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Qu = this.floatingOriginOffset,
          mu = yy.set(Eu.x, Eu.y, Eu.z, Ku ? -1 : 1),
          Ju = mu.subtractFromFloatsToRef(Qu.x, Qu.y, Qu.z, 0, Ey);
        return uu && (yu ? uu.setFloat3(Ru, Ju.x, Ju.y, Ju.z) : uu.setVector4(Ru, Ju)), mu
      }
      finalizeSceneUbo() {
        const uu = this.getSceneUniformBuffer(),
          Ru = this.bindEyePosition(null),
          yu = this.floatingOriginOffset;
        return uu.updateFloat4("vEyePosition", Ru.x - yu.x, Ru.y - yu.y, Ru.z - yu.z, Ru.w), uu.update(), uu
      }
      set useRightHandedSystem(uu) {
        this._useRightHandedSystem !== uu && (this._useRightHandedSystem = uu, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(uu) {
        this._currentStepId = uu
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(uu) {
        this._fogEnabled !== uu && (this._fogEnabled = uu, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(uu) {
        this._fogMode !== uu && (this._fogMode = uu, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(uu) {
        this._shadowsEnabled !== uu && (this._shadowsEnabled = uu, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(uu) {
        this._lightsEnabled !== uu && (this._lightsEnabled = uu, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(uu) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), uu && (this._unObserveActiveCameras = (0, vu.e)(uu, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = uu
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(uu) {
        uu !== this._activeCamera && (this._activeCamera = uu, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Qy.DefaultMaterialFactory !== Qy._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Qy.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(uu) {
        this._defaultMaterial = uu
      }
      set texturesEnabled(uu) {
        this._texturesEnabled !== uu && (this._texturesEnabled = uu, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(uu) {
        if (this._frameGraph) return this._frameGraph = uu, void(uu || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = uu, uu && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(uu) {
        this._skeletonsEnabled !== uu && (this._skeletonsEnabled = uu, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Qy.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const uu of this._transientComponents) uu.register();
          this._transientComponents.length = 0
        }
      }
      BEu(uu) {
        this._components.push(uu), this._transientComponents.push(uu);
        const Ru = uu;
        Ru.addFromContainer && Ru.serialize && this._serializableComponents.push(Ru)
      }
      _getComponent(uu) {
        for (const Ru of this._components)
          if (Ru.name === uu) return Ru;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(uu, Ru) {
        this._inputManager = new hu(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new iu.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new mu.b, this.ambientColor = new iu.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new mu.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.JC = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.zD = new mu.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new mu.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new mu.b, this.onAfterRenderCameraObservable = new mu.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new mu.b, this.onAfterAnimationsObservable = new mu.b, this.onBeforeDrawPhaseObservable = new mu.b, this.onAfterDrawPhaseObservable = new mu.b, this.onReadyObservable = new mu.b, this.onBeforeCameraRenderObservable = new mu.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new mu.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new mu.b, this.onAfterActiveMeshesEvaluationObservable = new mu.b, this.onBeforeParticlesRenderingObservable = new mu.b, this.onAfterParticlesRenderingObservable = new mu.b, this.onDataLoadedObservable = new mu.b, this.onNewCameraAddedObservable = new mu.b, this.onCameraRemovedObservable = new mu.b, this.onNewLightAddedObservable = new mu.b, this.onLightRemovedObservable = new mu.b, this.onNewGeometryAddedObservable = new mu.b, this.onGeometryRemovedObservable = new mu.b, this.onNewTransformNodeAddedObservable = new mu.b, this.onTransformNodeRemovedObservable = new mu.b, this.onNewMeshAddedObservable = new mu.b, this.onMeshRemovedObservable = new mu.b, this.onNewSkeletonAddedObservable = new mu.b, this.onSkeletonRemovedObservable = new mu.b, this.onNewParticleSystemAddedObservable = new mu.b, this.onParticleSystemRemovedObservable = new mu.b, this.onNewAnimationGroupAddedObservable = new mu.b, this.onAnimationGroupRemovedObservable = new mu.b, this.onNewMaterialAddedObservable = new mu.b, this.onNewMultiMaterialAddedObservable = new mu.b, this.onMaterialRemovedObservable = new mu.b, this.onMultiMaterialRemovedObservable = new mu.b, this.onNewTextureAddedObservable = new mu.b, this.onTextureRemovedObservable = new mu.b, this.onNewFrameGraphAddedObservable = new mu.b, this.onFrameGraphRemovedObservable = new mu.b, this.onNewObjectRendererAddedObservable = new mu.b, this.onObjectRendererRemovedObservable = new mu.b, this.onNewPostProcessAddedObservable = new mu.b, this.onPostProcessRemovedObservable = new mu.b, this.onNewEffectLayerAddedObservable = new mu.b, this.onEffectLayerRemovedObservable = new mu.b, this.onBeforeRenderTargetsRenderObservable = new mu.b, this.onAfterRenderTargetsRenderObservable = new mu.b, this.onBeforeStepObservable = new mu.b, this.onAfterStepObservable = new mu.b, this.onActiveCameraChanged = new mu.b, this.onActiveCamerasChanged = new mu.b, this.onBeforeRenderingGroupObservable = new mu.b, this.onAfterRenderingGroupObservable = new mu.b, this.onMeshImportedObservable = new mu.b, this.onAnimationFileImportedObservable = new mu.b, this.onEnvironmentTextureChangedObservable = new mu.b, this.onMeshUnderPointerUpdatedObservable = new mu.b, this._registeredForLateAnimationBindings = new Ju.e(256), this._pointerPickingConfiguration = new au, this.onPrePointerObservable = new mu.b, this.onPointerObservable = new mu.b, this.onPreKeyboardObservable = new mu.b, this.onKeyboardObservable = new mu.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Qy.FOGMODE_NONE, this.fogColor = new iu.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.vU = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Vu.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Ju.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Pu.b, this._activeIndices = new Pu.b, this._activeParticles = new Pu.b, this._activeBones = new Pu.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Ju.i(256), this._processedMaterials = new Ju.i(256), this._renderTargets = new Ju.e(256), this._materialsRenderTargets = new Ju.e(256), this._activeParticleSystems = new Ju.i(256), this._activeSkeletons = new Ju.e(32), this._softwareSkinnedMeshes = new Ju.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Vu.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = ju.f.Create(), this._beforeClearStage = ju.f.Create(), this._beforeRenderTargetClearStage = ju.f.Create(), this._gatherRenderTargetsStage = ju.f.Create(), this._gatherActiveCameraRenderTargetsStage = ju.f.Create(), this._isReadyForMeshStage = ju.f.Create(), this._beforeEvaluateActiveMeshStage = ju.f.Create(), this._evaluateSubMeshStage = ju.f.Create(), this._preActiveMeshStage = ju.f.Create(), this._cameraDrawRenderTargetStage = ju.f.Create(), this._beforeCameraDrawStage = ju.f.Create(), this._beforeRenderTargetDrawStage = ju.f.Create(), this._beforeRenderingGroupDrawStage = ju.f.Create(), this._beforeRenderingMeshStage = ju.f.Create(), this._afterRenderingMeshStage = ju.f.Create(), this._afterRenderingGroupDrawStage = ju.f.Create(), this._afterCameraDrawStage = ju.f.Create(), this._afterCameraPostProcessStage = ju.f.Create(), this._afterRenderTargetDrawStage = ju.f.Create(), this._afterRenderTargetPostProcessStage = ju.f.Create(), this._afterRenderStage = ju.f.Create(), this._pointerMoveStage = ju.f.Create(), this._pointerDownStage = ju.f.Create(), this._pointerUpStage = ju.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new mu.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const yu = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Ru
        };
        this.defaultCameraLayerMask = yu.defaultCameraLayerMask, this.defaultRenderableLayerMask = yu.defaultRenderableLayerMask, uu = this._engine = uu || du.b.LastCreatedEngine, yu.virtual ? uu._virtualScenes.push(this) : (du.b._LastCreatedScene = this, uu.scenes.push(this)), (uu.getCreationOptions().useLargeWorldRendering || Ru?.useFloatingOrigin) && ((0, Tu.e)(), this._floatingOriginScene = this, Tu.c.lD = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Wu.b(this), pu.c && (this.postProcessManager = new pu.c(this)), (0, Hu.f)() && this.attachControl(), this._createUbo(), ru.b && (this._imageProcessingConfiguration = new ru.b), this.setDefaultCandidateProviders(), yu.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = yu.useMaterialMeshMap, this.useClonedMeshMap = yu.useClonedMeshMap, Ru && Ru.virtual || uu.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(uu) {
        return this._defaultSubMeshCandidates.data = uu.mC, this._defaultSubMeshCandidates.length = uu.mC.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = uu => this._getDefaultSubMeshCandidates(uu), this.getIntersectingSubMeshCandidates = (uu, Ru) => this._getDefaultSubMeshCandidates(uu), this.getCollidingSubMeshCandidates = (uu, Ru) => this._getDefaultSubMeshCandidates(uu)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(uu) {
        this._inputManager.pointerX = uu
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(uu) {
        this._inputManager.pointerY = uu
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
      isCachedMaterialInvalid(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Ru || this._cachedMaterial !== uu || this._cachedVisibility !== yu
      }
      eS() {
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
      simulatePointerMove(uu, Ru) {
        return this._inputManager.simulatePointerMove(uu, Ru), this
      }
      simulatePointerDown(uu, Ru) {
        return this._inputManager.simulatePointerDown(uu, Ru), this
      }
      simulatePointerUp(uu, Ru, yu) {
        return this._inputManager.simulatePointerUp(uu, Ru, yu), this
      }
      isPointerCaptured() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(uu)
      }
      attachControl() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(uu, Ru, yu)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let uu, Ru = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const yu = this.eS(),
          Eu = yu.currentRenderPassId;
        yu.currentRenderPassId = this.activeCamera?.renderPassId ?? Eu;
        let Ku = !0;
        for (this._pendingData.length > 0 && (Ku = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Ku && (Ku = this.depthPeelingRenderer.isReady()), Ru && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), uu = 0; uu < this.meshes.length; uu++) {
          const Eu = this.meshes[uu];
          if (!Eu.mC || 0 === Eu.mC.length) continue;
          if (!Eu.isReady(!0)) {
            Ku = !1;
            continue
          }
          const Qu = Eu.hasThinInstances || "InstancedMesh" === Eu.getClassName() || "InstancedLinesMesh" === Eu.getClassName() || yu.getCaps().instancedArrays && Eu.instances.length > 0;
          for (let uu = 0, Ru = this._isReadyForMeshStage; uu < Ru.length; uu++) {
            Ru[uu].action(Eu, Qu) || (Ku = !1)
          }
          if (!Ru) continue;
          const mu = Eu.material || this.defaultMaterial;
          if (mu)
            if (mu._storeEffectOnSubMeshes)
              for (const uu of Eu.mC) {
                const Ru = uu.nS();
                Ru && Ru.hasRenderTargetTextures && null != Ru.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Ru) && (this._processedMaterials.push(Ru), this._materialsRenderTargets.concatWithNoDuplicate(Ru.getRenderTargetTextures()))
              } else mu.hasRenderTargetTextures && null != mu.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(mu) && (this._processedMaterials.push(mu), this._materialsRenderTargets.concatWithNoDuplicate(mu.getRenderTargetTextures()))
        }
        if (Ru) {
          for (uu = 0; uu < this._materialsRenderTargets.length; ++uu) {
            this._materialsRenderTargets.data[uu].isReadyForRendering() || (Ku = !1)
          }
          for (uu = 0; uu < this.customRenderTargets.length; ++uu) {
            this.customRenderTargets[uu].isReadyForRendering() || (Ku = !1)
          }
        }
        for (uu = 0; uu < this.geometries.length; uu++) {
          2 === this.geometries[uu].delayLoadState && (Ku = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Qu of this.activeCameras) Qu.isReady(!0) || (Ku = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Ku = !1));
        for (const Qu of this.JC) Qu.isReady() || (Ku = !1);
        if (this.proceduralTexturesEnabled)
          for (const Qu of this.proceduralTextures) Qu.isReady() || (Ku = !1);
        if (this.layers)
          for (const Qu of this.layers) Qu.isReady() || (Ku = !1);
        if (this.effectLayers)
          for (const Qu of this.effectLayers) Qu.isLayerReady() || (Ku = !1);
        for (const Qu of this._isReadyChecks) Qu.isReady() || (Ku = !1);
        return yu.areAllEffectsReady() || (Ku = !1), yu.currentRenderPassId = Eu, Ku
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(uu) {
        this.onBeforeRenderObservable.add(uu)
      }
      unregisterBeforeRender(uu) {
        this.onBeforeRenderObservable.removeCallback(uu)
      }
      registerAfterRender(uu) {
        this.onAfterRenderObservable.add(uu)
      }
      unregisterAfterRender(uu) {
        this.onAfterRenderObservable.removeCallback(uu)
      }
      _executeOnceBeforeRender(uu) {
        const Ru = () => {
          uu(), setTimeout((() => {
            this.unregisterBeforeRender(Ru)
          }))
        };
        this.registerBeforeRender(Ru)
      }
      executeOnceBeforeRender(uu, Ru) {
        void 0 !== Ru ? setTimeout((() => {
          this._executeOnceBeforeRender(uu)
        }), Ru) : this._executeOnceBeforeRender(uu)
      }
      addPendingData(uu) {
        this._pendingData.push(uu)
      }
      removePendingData(uu) {
        const Ru = this.isLoading,
          yu = this._pendingData.indexOf(uu); - 1 !== yu && this._pendingData.splice(yu, 1), Ru && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(uu) {
        -1 === this._isReadyChecks.indexOf(uu) && this._isReadyChecks.push(uu)
      }
      removeIsReadyCheck(uu) {
        const Ru = this._isReadyChecks.indexOf(uu); - 1 !== Ru && this._isReadyChecks.splice(Ru, 1)
      }
      executeWhenReady(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(uu), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Ru)
      }
      async whenReadyAsync() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Ru => {
          this.executeWhenReady((() => {
            Ru()
          }), uu)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Qu.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && Qu.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(uu)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(uu)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Qu.b.Now
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
      setTransformMatrix(uu, Ru, yu, Eu) {
        this._multiviewSceneUboIsActive = !!(yu && Eu && this._multiviewSceneUbo), this._viewUpdateFlag === uu.updateFlag && this._projectionUpdateFlag === Ru.updateFlag || (this._viewUpdateFlag = uu.updateFlag, this._projectionUpdateFlag = Ru.updateFlag, this._viewMatrix = uu, this._projectionMatrix = Ru, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Vu.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Yu.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Yu.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(yu, Eu) : this._sceneUbo.useUbo && (this._sceneUbo.v_("viewProjection", this._transformMatrix), this._sceneUbo.v_("view", this._viewMatrix), this._sceneUbo.v_("projection", this._projectionMatrix), this._sceneUbo.v_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(uu, Ru) {
        const yu = "boolean" === typeof Ru ? Ru : Ru?.trackUBOsInFrame,
          Eu = new Bu.c(this._engine, void 0, !1, uu ?? "cp", void 0, yu);
        return Eu.addUniform("viewProjection", 16), Eu.addUniform("view", 16), Eu.addUniform("projection", 16), Eu.addUniform("vEyePosition", 4), Eu.addUniform("inverseProjection", 16), Eu
      }
      setSceneUniformBuffer(uu) {
        this._sceneUbo = uu, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Vu.p.ZeroReadOnly
      }
      getUniqueId() {
        return ou.UniqueId
      }
      MEu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(uu), uu._resyncLightSources(), uu.parent || uu._addToSceneRootNodes(), Ku.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(uu)
          })), Ru)) {
          const Ru = uu.getChildMeshes();
          for (const uu of Ru) this.MEu(uu)
        }
      }
      rM(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this.meshes.indexOf(uu);
        if (-1 !== yu && (this.meshes.splice(yu, 1), uu.parent || uu._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(uu), this.onMeshRemovedObservable.notifyObservers(uu), Ru) {
          const Ru = uu.getChildMeshes();
          for (const uu of Ru) this.rM(uu)
        }
        return yu
      }
      addTransformNode(uu) {
        this._blockEntityCollection || uu.lD() === this && -1 !== uu._indexInSceneTransformNodesArray || (uu._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(uu), uu.parent || uu._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(uu))
      }
      removeTransformNode(uu) {
        const Ru = uu._indexInSceneTransformNodesArray;
        if (-1 !== Ru) {
          if (Ru !== this.transformNodes.length - 1) {
            const uu = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Ru] = uu, uu._indexInSceneTransformNodesArray = Ru
          }
          uu._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), uu.parent || uu._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(uu), Ru
      }
      removeSkeleton(uu) {
        const Ru = this.skeletons.indexOf(uu);
        return -1 !== Ru && (this.skeletons.splice(Ru, 1), this.onSkeletonRemovedObservable.notifyObservers(uu), this._executeActiveContainerCleanup(this._activeSkeletons)), Ru
      }
      removeMorphTargetManager(uu) {
        const Ru = this.morphTargetManagers.indexOf(uu);
        return -1 !== Ru && this.morphTargetManagers.splice(Ru, 1), Ru
      }
      removeLight(uu) {
        const Ru = this.lights.indexOf(uu);
        if (-1 !== Ru) {
          for (const Ru of this.meshes) Ru._removeLightSource(uu, !1);
          this.lights.splice(Ru, 1), this.sortLightsByPriority(), uu.parent || uu._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(uu)
        }
        return Ru
      }
      removeCamera(uu) {
        const Ru = this.cameras.indexOf(uu);
        if (-1 !== Ru && (this.cameras.splice(Ru, 1), uu.parent || uu._removeFromSceneRootNodes()), this.activeCameras) {
          const Ru = this.activeCameras.indexOf(uu); - 1 !== Ru && this.activeCameras.splice(Ru, 1)
        }
        return this.activeCamera === uu && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(uu), Ru
      }
      removeParticleSystem(uu) {
        const Ru = this.JC.indexOf(uu);
        return -1 !== Ru && (this.JC.splice(Ru, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(uu), Ru
      }
      removeAnimation(uu) {
        const Ru = this.animations.indexOf(uu);
        return -1 !== Ru && this.animations.splice(Ru, 1), Ru
      }
      stopAnimation(uu, Ru, yu) {}
      removeAnimationGroup(uu) {
        const Ru = this.animationGroups.indexOf(uu);
        return -1 !== Ru && this.animationGroups.splice(Ru, 1), this.onAnimationGroupRemovedObservable.notifyObservers(uu), Ru
      }
      removeMultiMaterial(uu) {
        const Ru = this.multiMaterials.indexOf(uu);
        return -1 !== Ru && this.multiMaterials.splice(Ru, 1), this.onMultiMaterialRemovedObservable.notifyObservers(uu), Ru
      }
      removeMaterial(uu) {
        const Ru = uu._indexInSceneMaterialArray;
        if (-1 !== Ru && Ru < this.materials.length) {
          if (Ru !== this.materials.length - 1) {
            const uu = this.materials[this.materials.length - 1];
            this.materials[Ru] = uu, uu._indexInSceneMaterialArray = Ru
          }
          uu._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(uu), Ru
      }
      removeActionManager(uu) {
        const Ru = this.actionManagers.indexOf(uu);
        return -1 !== Ru && this.actionManagers.splice(Ru, 1), Ru
      }
      removeTexture(uu) {
        const Ru = this.textures.indexOf(uu);
        return -1 !== Ru && this.textures.splice(Ru, 1), this.onTextureRemovedObservable.notifyObservers(uu), Ru
      }
      removeFrameGraph(uu) {
        const Ru = this.frameGraphs.indexOf(uu);
        return -1 !== Ru && this.frameGraphs.splice(Ru, 1), this.onFrameGraphRemovedObservable.notifyObservers(uu), Ru
      }
      removeObjectRenderer(uu) {
        const Ru = this.objectRenderers.indexOf(uu);
        return -1 !== Ru && this.objectRenderers.splice(Ru, 1), this.onObjectRendererRemovedObservable.notifyObservers(uu), Ru
      }
      removePostProcess(uu) {
        const Ru = this.postProcesses.indexOf(uu);
        return -1 !== Ru && this.postProcesses.splice(Ru, 1), this.onPostProcessRemovedObservable.notifyObservers(uu), Ru
      }
      removeEffectLayer(uu) {
        const Ru = this.effectLayers.indexOf(uu);
        return -1 !== Ru && this.effectLayers.splice(Ru, 1), this.onEffectLayerRemovedObservable.notifyObservers(uu), Ru
      }
      addLight(uu) {
        if (!this._blockEntityCollection) {
          this.lights.push(uu), this.sortLightsByPriority(), uu.parent || uu._addToSceneRootNodes();
          for (const Ru of this.meshes) - 1 === Ru.lightSources.indexOf(uu) && (Ru.lightSources.push(uu), Ru._resyncLightSources());
          Ku.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(uu)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Ou.b.CompareLightsPriority)
      }
      addCamera(uu) {
        this._blockEntityCollection || (this.cameras.push(uu), Ku.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(uu)
        })), uu.parent || uu._addToSceneRootNodes())
      }
      addSkeleton(uu) {
        this._blockEntityCollection || (this.skeletons.push(uu), Ku.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(uu)
        })))
      }
      addParticleSystem(uu) {
        this._blockEntityCollection || (this.JC.push(uu), Ku.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(uu)
        })))
      }
      addAnimation(uu) {
        this._blockEntityCollection || this.animations.push(uu)
      }
      addAnimationGroup(uu) {
        this._blockEntityCollection || (this.animationGroups.push(uu), Ku.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(uu)
        })))
      }
      addMultiMaterial(uu) {
        this._blockEntityCollection || (this.multiMaterials.push(uu), Ku.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(uu)
        })))
      }
      addMaterial(uu) {
        this._blockEntityCollection || uu.lD() === this && -1 !== uu._indexInSceneMaterialArray || (uu._indexInSceneMaterialArray = this.materials.length, this.materials.push(uu), Ku.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(uu)
        })))
      }
      addMorphTargetManager(uu) {
        this._blockEntityCollection || this.morphTargetManagers.push(uu)
      }
      addGeometry(uu) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[uu.uniqueId] = this.geometries.length), this.geometries.push(uu))
      }
      addActionManager(uu) {
        this.actionManagers.push(uu)
      }
      addTexture(uu) {
        this._blockEntityCollection || (this.textures.push(uu), this.onNewTextureAddedObservable.notifyObservers(uu))
      }
      addFrameGraph(uu) {
        this.frameGraphs.push(uu), Ku.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(uu)
        }))
      }
      addObjectRenderer(uu) {
        this.objectRenderers.push(uu), Ku.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(uu)
        }))
      }
      addPostProcess(uu) {
        this._blockEntityCollection || (this.postProcesses.push(uu), Ku.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(uu)
        })))
      }
      addEffectLayer(uu) {
        this._blockEntityCollection || (this.effectLayers.push(uu), Ku.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(uu)
        })))
      }
      switchActiveCamera(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = uu, Ru && uu.attachControl())
      }
      setActiveCameraById(uu) {
        const Ru = this.getCameraById(uu);
        return Ru ? (this.activeCamera = Ru, Ru) : null
      }
      setActiveCameraByName(uu) {
        const Ru = this.getCameraByName(uu);
        return Ru ? (this.activeCamera = Ru, Ru) : null
      }
      getAnimationGroupByName(uu) {
        for (let Ru = 0; Ru < this.animationGroups.length; Ru++)
          if (this.animationGroups[Ru].name === uu) return this.animationGroups[Ru];
        return null
      }
      _getMaterial(uu, Ru) {
        for (let yu = 0; yu < this.materials.length; yu++) {
          const uu = this.materials[yu];
          if (Ru(uu)) return uu
        }
        if (uu)
          for (let yu = 0; yu < this.multiMaterials.length; yu++) {
            const uu = this.multiMaterials[yu];
            if (Ru(uu)) return uu
          }
        return null
      }
      getMaterialByUniqueID(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(uu, Ru)
      }
      getMaterialByUniqueId(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Ru, (Ru => Ru.uniqueId === uu))
      }
      getMaterialById(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Ru, (Ru => Ru.id === uu))
      }
      getMaterialByName(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Ru, (Ru => Ru.name === uu))
      }
      getLastMaterialById(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let yu = this.materials.length - 1; yu >= 0; yu--)
          if (this.materials[yu].id === uu) return this.materials[yu];
        if (Ru)
          for (let yu = this.multiMaterials.length - 1; yu >= 0; yu--)
            if (this.multiMaterials[yu].id === uu) return this.multiMaterials[yu];
        return null
      }
      getTextureByUniqueId(uu) {
        for (let Ru = 0; Ru < this.textures.length; Ru++)
          if (this.textures[Ru].uniqueId === uu) return this.textures[Ru];
        return null
      }
      getTextureByName(uu) {
        for (let Ru = 0; Ru < this.textures.length; Ru++)
          if (this.textures[Ru].name === uu) return this.textures[Ru];
        return null
      }
      getCameraById(uu) {
        for (let Ru = 0; Ru < this.cameras.length; Ru++)
          if (this.cameras[Ru].id === uu) return this.cameras[Ru];
        return null
      }
      getCameraByUniqueId(uu) {
        for (let Ru = 0; Ru < this.cameras.length; Ru++)
          if (this.cameras[Ru].uniqueId === uu) return this.cameras[Ru];
        return null
      }
      getCameraByName(uu) {
        for (let Ru = 0; Ru < this.cameras.length; Ru++)
          if (this.cameras[Ru].name === uu) return this.cameras[Ru];
        return null
      }
      getBoneById(uu) {
        for (let Ru = 0; Ru < this.skeletons.length; Ru++) {
          const yu = this.skeletons[Ru];
          for (let Ru = 0; Ru < yu.bones.length; Ru++)
            if (yu.bones[Ru].id === uu) return yu.bones[Ru]
        }
        return null
      }
      getBoneByName(uu) {
        for (let Ru = 0; Ru < this.skeletons.length; Ru++) {
          const yu = this.skeletons[Ru];
          for (let Ru = 0; Ru < yu.bones.length; Ru++)
            if (yu.bones[Ru].name === uu) return yu.bones[Ru]
        }
        return null
      }
      getLightByName(uu) {
        for (let Ru = 0; Ru < this.lights.length; Ru++)
          if (this.lights[Ru].name === uu) return this.lights[Ru];
        return null
      }
      getLightById(uu) {
        for (let Ru = 0; Ru < this.lights.length; Ru++)
          if (this.lights[Ru].id === uu) return this.lights[Ru];
        return null
      }
      getLightByUniqueId(uu) {
        for (let Ru = 0; Ru < this.lights.length; Ru++)
          if (this.lights[Ru].uniqueId === uu) return this.lights[Ru];
        return null
      }
      getParticleSystemById(uu) {
        for (let Ru = 0; Ru < this.JC.length; Ru++)
          if (this.JC[Ru].id === uu) return this.JC[Ru];
        return null
      }
      getGeometryById(uu) {
        for (let Ru = 0; Ru < this.geometries.length; Ru++)
          if (this.geometries[Ru].id === uu) return this.geometries[Ru];
        return null
      }
      _getGeometryByUniqueId(uu) {
        if (this._geometriesByUniqueId) {
          const Ru = this._geometriesByUniqueId[uu];
          if (void 0 !== Ru) return this.geometries[Ru]
        } else
          for (let Ru = 0; Ru < this.geometries.length; Ru++)
            if (this.geometries[Ru].uniqueId === uu) return this.geometries[Ru];
        return null
      }
      getFrameGraphByName(uu) {
        for (let Ru = 0; Ru < this.frameGraphs.length; Ru++)
          if (this.frameGraphs[Ru].name === uu) return this.frameGraphs[Ru];
        return null
      }
      pushGeometry(uu, Ru) {
        return !(!Ru && this._getGeometryByUniqueId(uu.uniqueId)) && (this.addGeometry(uu), Ku.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(uu)
        })), !0)
      }
      removeGeometry(uu) {
        let Ru;
        if (this._geometriesByUniqueId) {
          if (Ru = this._geometriesByUniqueId[uu.uniqueId], void 0 === Ru) return !1
        } else if (Ru = this.geometries.indexOf(uu), Ru < 0) return !1;
        if (Ru !== this.geometries.length - 1) {
          const uu = this.geometries[this.geometries.length - 1];
          uu && (this.geometries[Ru] = uu, this._geometriesByUniqueId && (this._geometriesByUniqueId[uu.uniqueId] = Ru))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[uu.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(uu), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(uu) {
        for (let Ru = 0; Ru < this.meshes.length; Ru++)
          if (this.meshes[Ru].id === uu) return this.meshes[Ru];
        return null
      }
      getMeshesById(uu) {
        return this.meshes.filter((function(Ru) {
          return Ru.id === uu
        }))
      }
      getTransformNodeById(uu) {
        for (let Ru = 0; Ru < this.transformNodes.length; Ru++)
          if (this.transformNodes[Ru].id === uu) return this.transformNodes[Ru];
        return null
      }
      getTransformNodeByUniqueId(uu) {
        for (let Ru = 0; Ru < this.transformNodes.length; Ru++)
          if (this.transformNodes[Ru].uniqueId === uu) return this.transformNodes[Ru];
        return null
      }
      getTransformNodesById(uu) {
        return this.transformNodes.filter((function(Ru) {
          return Ru.id === uu
        }))
      }
      getMeshByUniqueId(uu) {
        for (let Ru = 0; Ru < this.meshes.length; Ru++)
          if (this.meshes[Ru].uniqueId === uu) return this.meshes[Ru];
        return null
      }
      getLastMeshById(uu) {
        for (let Ru = this.meshes.length - 1; Ru >= 0; Ru--)
          if (this.meshes[Ru].id === uu) return this.meshes[Ru];
        return null
      }
      getLastTransformNodeById(uu) {
        for (let Ru = this.transformNodes.length - 1; Ru >= 0; Ru--)
          if (this.transformNodes[Ru].id === uu) return this.transformNodes[Ru];
        return null
      }
      getLastEntryById(uu) {
        let Ru;
        for (Ru = this.meshes.length - 1; Ru >= 0; Ru--)
          if (this.meshes[Ru].id === uu) return this.meshes[Ru];
        for (Ru = this.transformNodes.length - 1; Ru >= 0; Ru--)
          if (this.transformNodes[Ru].id === uu) return this.transformNodes[Ru];
        for (Ru = this.cameras.length - 1; Ru >= 0; Ru--)
          if (this.cameras[Ru].id === uu) return this.cameras[Ru];
        for (Ru = this.lights.length - 1; Ru >= 0; Ru--)
          if (this.lights[Ru].id === uu) return this.lights[Ru];
        for (Ru = this.skeletons.length - 1; Ru >= 0; Ru--) {
          const yu = this.skeletons[Ru];
          for (let Ru = yu.bones.length - 1; Ru >= 0; Ru--)
            if (yu.bones[Ru].id === uu) return yu.bones[Ru]
        }
        return null
      }
      getNodeById(uu) {
        const Ru = this.getMeshById(uu);
        if (Ru) return Ru;
        const yu = this.getTransformNodeById(uu);
        if (yu) return yu;
        const Eu = this.getLightById(uu);
        if (Eu) return Eu;
        const Ku = this.getCameraById(uu);
        if (Ku) return Ku;
        const Qu = this.getBoneById(uu);
        return Qu || null
      }
      getNodeByName(uu) {
        const Ru = this.getMeshByName(uu);
        if (Ru) return Ru;
        const yu = this.getTransformNodeByName(uu);
        if (yu) return yu;
        const Eu = this.getLightByName(uu);
        if (Eu) return Eu;
        const Ku = this.getCameraByName(uu);
        if (Ku) return Ku;
        const Qu = this.getBoneByName(uu);
        return Qu || null
      }
      getMeshByName(uu) {
        for (let Ru = 0; Ru < this.meshes.length; Ru++)
          if (this.meshes[Ru].name === uu) return this.meshes[Ru];
        return null
      }
      getTransformNodeByName(uu) {
        for (let Ru = 0; Ru < this.transformNodes.length; Ru++)
          if (this.transformNodes[Ru].name === uu) return this.transformNodes[Ru];
        return null
      }
      getLastSkeletonById(uu) {
        for (let Ru = this.skeletons.length - 1; Ru >= 0; Ru--)
          if (this.skeletons[Ru].id === uu) return this.skeletons[Ru];
        return null
      }
      getSkeletonByUniqueId(uu) {
        for (let Ru = 0; Ru < this.skeletons.length; Ru++)
          if (this.skeletons[Ru].uniqueId === uu) return this.skeletons[Ru];
        return null
      }
      getSkeletonById(uu) {
        for (let Ru = 0; Ru < this.skeletons.length; Ru++)
          if (this.skeletons[Ru].id === uu) return this.skeletons[Ru];
        return null
      }
      getSkeletonByName(uu) {
        for (let Ru = 0; Ru < this.skeletons.length; Ru++)
          if (this.skeletons[Ru].name === uu) return this.skeletons[Ru];
        return null
      }
      getMorphTargetManagerById(uu) {
        for (let Ru = 0; Ru < this.morphTargetManagers.length; Ru++)
          if (this.morphTargetManagers[Ru].uniqueId === uu) return this.morphTargetManagers[Ru];
        return null
      }
      getMorphTargetById(uu) {
        for (let Ru = 0; Ru < this.morphTargetManagers.length; ++Ru) {
          const yu = this.morphTargetManagers[Ru];
          for (let Ru = 0; Ru < yu.numTargets; ++Ru) {
            const Eu = yu.getTarget(Ru);
            if (Eu.id === uu) return Eu
          }
        }
        return null
      }
      getMorphTargetByName(uu) {
        for (let Ru = 0; Ru < this.morphTargetManagers.length; ++Ru) {
          const yu = this.morphTargetManagers[Ru];
          for (let Ru = 0; Ru < yu.numTargets; ++Ru) {
            const Eu = yu.getTarget(Ru);
            if (Eu.name === uu) return Eu
          }
        }
        return null
      }
      getPostProcessByName(uu) {
        for (let Ru = 0; Ru < this.postProcesses.length; ++Ru) {
          const yu = this.postProcesses[Ru];
          if (yu.name === uu) return yu
        }
        return null
      }
      isActiveMesh(uu) {
        return -1 !== this._activeMeshes.indexOf(uu)
      }
      get uid() {
        return this._uid || (this._uid = Eu.i.RandomId()), this._uid
      }
      addExternalData(uu, Ru) {
        return this._externalData || (this._externalData = new Nu), this._externalData.add(uu, Ru)
      }
      getExternalData(uu) {
        return this._externalData ? this._externalData.get(uu) : null
      }
      getOrAddExternalDataWithFactory(uu, Ru) {
        return this._externalData || (this._externalData = new Nu), this._externalData.getOrAddWithFactory(uu, Ru)
      }
      removeExternalData(uu) {
        return this._externalData.remove(uu)
      }
      _evaluateSubMesh(uu, Ru, yu, Eu) {
        if (Eu || uu.isInFrustum(this._frustumPlanes)) {
          for (let Eu = 0, Ku = this._evaluateSubMeshStage; Eu < Ku.length; Eu++) {
            Ku[Eu].action(Ru, uu)
          }
          const yu = uu.nS();
          null !== yu && void 0 !== yu && (yu.hasRenderTargetTextures && null != yu.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(yu) && (this._processedMaterials.push(yu), this._materialsRenderTargets.concatWithNoDuplicate(yu.getRenderTargetTextures())), this._renderingManager.dispatch(uu, Ru, yu))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(uu) {
        this._preventFreeActiveMeshesAndRenderingGroups !== uu && (uu && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = uu)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let uu = 0; uu < this.activeCameras.length; uu++) {
            const Ru = this.activeCameras[uu];
            Ru && Ru._activeMeshes && Ru._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let uu = 0; uu < this.textures.length; uu++) {
            const Ru = this.textures[uu];
            Ru && Ru.renderList && Ru.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const mu = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const uu of mu) uu.objectRenderer._freezeActiveMeshes(Eu);
          return this._freezeActiveMeshesCancel = (0, Ku.f)((() => {
            let uu = !0,
              Ru = !0;
            for (const yu of mu) uu && (uu = yu.objectRenderer._isFrozen), Ru && (Ru = null !== yu.objectRenderer._freezeActiveMeshesCancel);
            if (uu) return !0;
            if (!Ru) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Qu, this._skipEvaluateActiveMeshesCompletely = uu, Ru?.()
          }), ((uu, Ru) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Ru) {
              const Ru = "Scene: Timeout while waiting for meshes to be frozen.";
              yu ? yu(Ru) : (uy.e.Error(Ru), uu && uy.e.Error(uu))
            } else {
              const Ru = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              yu ? yu(Ru) : (uy.e.Error(Ru), uu && (uy.e.Error(uu), uu.stack && uy.e.Error(uu.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Qu, this._skipEvaluateActiveMeshesCompletely = uu, Eu)
              for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._freeze();
            Ru && Ru()
          } else yu && yu("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let uu = 0; uu < this.meshes.length; uu++) {
          const Ru = this.meshes[uu];
          Ru._internalAbstractMeshDataInfo && (Ru._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const uu = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Ru of uu) Ru.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(uu) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => uu.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const uu = this._activeMeshes.length;
            for (let Ru = 0; Ru < uu; Ru++) {
              this._activeMeshes.data[Ru].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const uu = this._activeParticleSystems.length;
            for (let Ru = 0; Ru < uu; Ru++) this._activeParticleSystems.data[Ru].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Ku = 0, Qu = this._beforeEvaluateActiveMeshStage; Ku < Qu.length; Ku++) {
          Qu[Ku].action()
        }
        const uu = this.getActiveMeshCandidates(),
          Ru = uu.length,
          yu = Pu.b.Enabled,
          Eu = this.customLODSelector;
        for (let Ku = 0; Ku < Ru; Ku++) {
          const Ru = uu.data[Ku],
            Qu = !Eu && !Ru.ZD && !Ru._internalMeshDataInfo?._LODLevels.length;
          let mu, Ju;
          if ((Qu || (mu = Ru._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), mu ? mu[1] = -1 : (mu = [Ru, -1], Ru._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, mu))), !Ru.isBlocked) && (yu && this._totalVertices.addCount(Ru.getTotalVertices(), !1), Ru.isReady() && Ru.isEnabled() && !Ru.pp.hasAZeroComponent)) {
            if (Ru.computeWorldMatrix(), Ru.actionManager && Ru.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Ru), Qu) Ju = Ru;
            else if (Ju = Eu ? Eu(Ru, this.activeCamera) : Ru.getLOD(this.activeCamera), mu[0] = Ju, mu[1] = this._frameId, void 0 === Ju || null === Ju) continue;
            if (Ju !== Ru && 0 !== Ju.billboardMode && Ju.computeWorldMatrix(), Ru._preActivate(), Ru.isVisible && Ru.visibility > 0 && 0 !== (Ru.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Ru.DS || Ru.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Ru), this.activeCamera._activeMeshes.push(Ru), Ju !== Ru && Ju._activate(this._renderId, !1);
              for (let uu = 0, yu = this._preActiveMeshStage; uu < yu.length; uu++) {
                yu[uu].action(Ru)
              }
              Ru._activate(this._renderId, !1) && (Ru.ZD ? Ru._internalAbstractMeshDataInfo._actAsRegularMesh && (Ju = Ru) : Ju._internalAbstractMeshDataInfo._onlyForInstances = !1, Ju._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Ru, Ju)), Ru._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let uu = 0; uu < this.JC.length; uu++) {
            const Ru = this.JC[uu];
            if (!Ru.isStarted() || !Ru.emitter) continue;
            const yu = Ru.emitter;
            yu.position && !yu.isEnabled() || (this._activeParticleSystems.push(Ru), Ru.animate(), this._renderingManager.dispatchParticles(Ru))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(uu) {
        this._skeletonsEnabled && uu.skeleton && (this._activeSkeletons.pushNoDuplicate(uu.skeleton) && (uu.skeleton.prepare(), this._activeBones.addCount(uu.skeleton.bones.length, !1)), uu.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(uu) && this.frameGraph && uu.applySkeleton(uu.skeleton))
      }
      _activeMesh(uu, Ru) {
        this._prepareSkeleton(Ru);
        let yu = uu.HKu || uu.ZD || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Ru.DS;
        if (Ru && Ru.mC && Ru.mC.length > 0) {
          const Eu = this.getActiveSubMeshCandidates(Ru),
            Ku = Eu.length;
          yu = yu || 1 === Ku;
          for (let Qu = 0; Qu < Ku; Qu++) {
            const Ku = Eu.data[Qu];
            this._evaluateSubMesh(Ku, Ru, uu, yu)
          }
        }
      }
      updateTransformMatrix(uu) {
        const Ru = this.activeCamera;
        if (Ru)
          if (Ru._renderingMultiview) {
            const yu = Ru._rigCameras[0],
              Eu = Ru._rigCameras[1];
            this.setTransformMatrix(yu.getViewMatrix(), yu.getProjectionMatrix(uu), Eu.getViewMatrix(), Eu.getProjectionMatrix(uu))
          } else this.setTransformMatrix(Ru.getViewMatrix(), Ru.getProjectionMatrix(uu))
      }
      _bindFrameBuffer(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (uu && uu._multiviewTexture ? uu._multiviewTexture._bindFrameBuffer() : uu && uu.outputRenderTarget ? uu.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Ru && this._clearFrameBuffer(uu)
      }
      _clearFrameBuffer(uu) {
        if (uu && uu._multiviewTexture);
        else if (uu && uu.outputRenderTarget && !uu._renderingMultiview) {
          const Ru = uu.outputRenderTarget;
          Ru.onClearObservable.hasObservers() ? Ru.onClearObservable.notifyObservers(this._engine) : Ru.skipInitialClear || uu.isRightCamera || (this.autoClear && this._engine.clear(Ru.clearColor || this._clearColor, !Ru._cleared, !0, !0), Ru._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (uu && uu._skipRendering) return;
        const Ku = this._engine;
        if (this._activeCamera = uu, !this.activeCamera) throw new Error("Active camera not set");
        if (Ku.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && yu) {
          let Ru = !0;
          uu._renderingMultiview && uu.outputRenderTarget && (Ru = uu.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, uu.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), uu._renderingMultiview && uu.outputRenderTarget && (uu.outputRenderTarget.skipInitialClear = Ru)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = uu.outputRenderTarget?.renderPassId ?? uu.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Eu = 0; Eu < this._softwareSkinnedMeshes.length; Eu++) {
          const uu = this._softwareSkinnedMeshes.data[Eu];
          uu.applySkeleton(uu.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), uu.customRenderTargets && uu.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(uu.customRenderTargets), Ru && Ru.customRenderTargets && Ru.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Ru.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Eu = 0, Ju = this._gatherActiveCameraRenderTargetsStage; Eu < Ju.length; Eu++) {
          Ju[Eu].action(this._renderTargets)
        }
        let Qu = !1;
        if (this.renderTargetsEnabled) {
          let uu;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Eu.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Ru = this.getBoundingBoxRenderer?.();
            for (let yu = 0; yu < this._renderTargets.length; yu++) {
              const Eu = this._renderTargets.data[yu];
              if (Eu._shouldRender()) {
                this._renderId++;
                const yu = Eu.activeCamera && Eu.activeCamera !== this.activeCamera;
                Ru && !uu && (uu = Ru.renderList.length > 0 ? Ru.renderList.data.slice() : [], uu.length = Ru.renderList.length), Eu.render(yu, this.dumpNextRenderTargets), Qu = !0
              }
            }
            Ru && uu && (Ru.renderList.data = uu, Ru.renderList.length = uu.length), Eu.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Ru = this.getBoundingBoxRenderer?.();
            Ru && !uu && (uu = Ru.renderList.length > 0 ? Ru.renderList.data.slice() : [], uu.length = Ru.renderList.length);
            for (let uu = 0, yu = this._cameraDrawRenderTargetStage; uu < yu.length; uu++) {
              Qu = yu[uu].action(this.activeCamera) || Qu
            }
            Ru && uu && (Ru.renderList.data = uu, Ru.renderList.length = uu.length)
          }
          this._intermediateRendering = !1
        }
        Qu && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || uu._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Eu = 0, Ju = this._beforeCameraDrawStage; Eu < Ju.length; Eu++) {
          Ju[Eu].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const mu = Ku.snapshotRendering && 1 === Ku.snapshotRenderingMode;
        mu && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !mu), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Eu = 0, Ju = this._afterCameraDrawStage; Eu < Ju.length; Eu++) {
          Ju[Eu].action(this.activeCamera)
        }
        if (this.postProcessManager && !uu._multiviewTexture) {
          const Ru = uu.outputRenderTarget ? uu.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(uu.isIntermediate, Ru)
        }
        for (let Eu = 0, Ju = this._afterCameraPostProcessStage; Eu < Ju.length; Eu++) {
          Ju[Eu].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === uu.cameraRigMode || uu._renderingMultiview) return uu._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(uu, void 0, Ru), void this.onAfterRenderCameraObservable.notifyObservers(uu);
        if (uu._useMultiviewToSingleView) this._renderMultiviewToSingleView(uu);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(uu);
          for (let Ru = 0; Ru < uu._rigCameras.length; Ru++) this._renderForCamera(uu._rigCameras[Ru], uu)
        }
        this._activeCamera = uu, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(uu)
      }
      _checkIntersections() {
        for (let uu = 0; uu < this._meshesForIntersections.length; uu++) {
          const Ru = this._meshesForIntersections.data[uu];
          if (Ru.actionManager)
            for (let uu = 0; Ru.actionManager && uu < Ru.actionManager.actions.length; uu++) {
              const yu = Ru.actionManager.actions[uu];
              if (12 === yu.trigger || 13 === yu.trigger) {
                const uu = yu.getTriggerParameter(),
                  Eu = uu.mesh ? uu.mesh : uu,
                  Ku = Eu.xKu(Ru, uu.usePreciseIntersection),
                  Qu = Ru._intersectionsInProgress.indexOf(Eu);
                Ku && -1 === Qu ? 12 === yu.trigger ? (yu._executeCurrent(Su.CreateNew(Ru, void 0, Eu)), Ru._intersectionsInProgress.push(Eu)) : 13 === yu.trigger && Ru._intersectionsInProgress.push(Eu) : !Ku && Qu > -1 && (13 === yu.trigger && yu._executeCurrent(Su.CreateNew(Ru, void 0, Eu)), Ru.actionManager.hasSpecificTrigger(13, (uu => {
                  const Ru = uu.mesh ? uu.mesh : uu;
                  return Eu === Ru
                })) && 13 !== yu.trigger || Ru._intersectionsInProgress.splice(Qu, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(uu) {}
      _animate(uu) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let uu = Math.max(Qy.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Qy.MaxDeltaTime)) + this._timeAccumulator;
          const Ru = this._engine.getTimeStep(),
            yu = 1e3 / Ru / 1e3;
          let Eu = 0;
          const Ku = this._engine.getLockstepMaxSteps();
          let Qu = Math.floor(uu / Ru);
          for (Qu = Math.min(Qu, Ku); uu > 0 && Eu < Qu;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Ru * yu, this._animate(Ru), this.onAfterAnimationsObservable.notifyObservers(this), this.vU && this._advancePhysicsEngineStep(Ru), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Eu++, uu -= Ru;
          this._timeAccumulator = uu < 0 ? 0 : uu
        } else {
          const uu = this.useConstantAnimationDeltaTime ? 16 : Math.max(Qy.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Qy.MaxDeltaTime));
          this._animationRatio = .06 * uu, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.vU && this._advancePhysicsEngineStep(uu)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(uu) {
        if (uu?.outputRenderTarget && !uu?.isRigCamera && (uu.outputRenderTarget._cleared = !1), uu?.rigCameras?.length)
          for (let Ru = 0; Ru < uu.rigCameras.length; ++Ru) {
            const yu = uu.rigCameras[Ru].outputRenderTarget;
            yu && (yu._cleared = !1)
          }
      }
      resetDrawCache(uu) {
        if (this.meshes)
          for (const Ru of this.meshes) Ru.resetDrawCache(uu)
      }
      _renderWithFrameGraph() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, uu)
          for (const yu of this.cameras)
            if (yu.update(), 0 !== yu.cameraRigMode)
              for (let uu = 0; uu < yu._rigCameras.length; uu++) yu._rigCameras[uu].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Ru)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(uu) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Ru = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Eu.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let uu = 0; uu < this._renderTargets.length; uu++) {
            const yu = this._renderTargets.data[uu],
              Eu = yu.activeCamera || Ru;
            this._renderRenderTarget(yu, Eu, !0, this.dumpNextRenderTargets)
          }
          Eu.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let yu = 0, Eu = this._beforeClearStage; yu < Eu.length; yu++) {
          Eu[yu].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Ru = this.getActiveMeshCandidates(),
            yu = Ru.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let uu = 0; uu < yu; uu++) {
                const yu = Ru.data[uu];
                yu._internalAbstractMeshDataInfo._wasActiveLastFrame && yu.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const uu = this._activeParticleSystems.length;
              for (let Ru = 0; Ru < uu; Ru++) this._activeParticleSystems.data[Ru].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Eu = 0; Eu < yu; Eu++) {
              const yu = Ru.data[Eu];
              yu._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, yu.isBlocked || (this._totalVertices.addCount(yu.getTotalVertices(), !1), yu.isReady() && yu.isEnabled() && !yu.pp.hasAZeroComponent && (yu.computeWorldMatrix(uu), yu.actionManager && yu.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(yu)))
            }
            if (this.particlesEnabled)
              for (let uu = 0; uu < this.JC.length; uu++) {
                const Ru = this.JC[uu];
                if (!Ru.isStarted() || !Ru.emitter) continue;
                const yu = Ru.emitter;
                yu.position && !yu.isEnabled() || (this._activeParticleSystems.push(Ru), Ru.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, uu._shouldRender()) {
          if (this._renderId++, this.activeCamera = Ru, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), uu.render(yu, Eu)
        }
        this._intermediateRendering = !1
      }
      render() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.wyu) return;
        const yu = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(uu, Ru)
        } finally {
          this._renderingMeshEvaluationDepth = yu
        }
      }
      _renderFrame(uu, Ru) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Tu.c.lD = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const yu of this.activeCameras) this._checkCameraRenderTarget(yu);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Ru || this.animate();
        for (let yu = 0, Eu = this._beforeCameraUpdateStage; yu < Eu.length; yu++) {
          Eu[yu].action()
        }
        if (uu)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let yu = 0; yu < this.activeCameras.length; yu++) {
              const uu = this.activeCameras[yu];
              if (uu.update(), 0 !== uu.cameraRigMode)
                for (let Ru = 0; Ru < uu._rigCameras.length; Ru++) uu._rigCameras[Ru].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let yu = 0; yu < this.activeCamera._rigCameras.length; yu++) this.activeCamera._rigCameras[yu].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(uu, Ru);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const uu = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Eu.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Ru = 0; Ru < this.customRenderTargets.length; Ru++) {
              const yu = this.customRenderTargets[Ru],
                Eu = yu.activeCamera || this.activeCamera;
              this._renderRenderTarget(yu, Eu, uu !== Eu, this.dumpNextRenderTargets)
            }
            Eu.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = uu?.renderPassId ?? 0, this.activeCamera = uu, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Ru = 0, yu = this._beforeClearStage; Ru < yu.length; Ru++) {
            yu[Ru].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Ru = 0, yu = this._gatherRenderTargetsStage; Ru < yu.length; Ru++) {
            yu[Ru].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Ru = 0; Ru < this.activeCameras.length; Ru++) this._processSubCameras(this.activeCameras[Ru], Ru > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let yu = 0, Eu = this._afterRenderStage; yu < Eu.length; yu++) {
          Eu[yu].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let uu = 0; uu < this._toBeDisposed.length; uu++) {
            const Ru = this._toBeDisposed[uu];
            Ru && Ru.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let uu = 0; uu < this.materials.length; uu++) this.materials[uu].freeze()
      }
      unfreezeMaterials() {
        for (let uu = 0; uu < this.materials.length; uu++) this.materials[uu].unfreeze()
      }
      dispose() {
        if (this.wyu) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, bu.c)(this.stopAllAnimations)) {
          for (const uu of this._activeAnimatables) uu.onAnimationEndObservable.clear(), uu.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const uu = this._activeRequests.slice();
        for (const Qu of uu) Qu.abort();
        this._activeRequests.length = 0;
        try {
          this.zD.notifyObservers(this)
        } catch (Ku) {
          uy.e.Error("An error occurred while calling onDisposeObservable!", Ku)
        }
        this.detachControl();
        const Ru = this._engine.getInputElement?.();
        if (Ru)
          for (let Qu = 0; Qu < this.cameras.length; Qu++) this.cameras[Qu].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (uu => uu.dispose(!0))), this._disposeList(this.transformNodes, (uu => uu.dispose(!0)));
        const yu = this.cameras;
        this._disposeList(yu), this._disposeList(this.JC), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Eu = this._engine.scenes.indexOf(this);
        if (Eu > -1 && this._engine.scenes.splice(Eu, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Tu.i)(), du.b._LastCreatedScene === this) {
          du.b._LastCreatedScene = null;
          let uu = du.b.Instances.length - 1;
          for (; uu >= 0;) {
            const Ru = du.b.Instances[uu];
            if (Ru.scenes.length > 0) {
              du.b._LastCreatedScene = Ru.scenes[this._engine.scenes.length - 1];
              break
            }
            uu--
          }
        }
        Eu = this._engine._virtualScenes.indexOf(this), Eu > -1 && this._engine._virtualScenes.splice(Eu, 1), this._engine.wipeCaches(!0), this.zD.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(uu, Ru) {
        const yu = uu.slice(0);
        Ru = Ru ?? (uu => uu.dispose());
        for (const Eu of yu) Ru(Eu);
        uu.length = 0
      }
      get wyu() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let uu = 0; uu < this.meshes.length; uu++) {
          const Ru = this.meshes[uu].geometry;
          Ru && Ru.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const uu of this.textures) {
          uu._buffer && (uu._buffer = null)
        }
      }
      getWorldExtends(uu) {
        const Ru = new Vu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          yu = new Vu.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        uu = uu || (() => !0);
        const Eu = this.meshes.filter(uu);
        for (const Ku of Eu) {
          if (Ku.computeWorldMatrix(!0), !Ku.mC || 0 === Ku.mC.length || Ku.infiniteDistance) continue;
          const uu = Ku.vI(),
            Eu = uu.boundingBox.minimumWorld,
            Qu = uu.boundingBox.maximumWorld;
          Vu.p.CheckExtends(Eu, Ru, yu), Vu.p.CheckExtends(Qu, Ru, yu)
        }
        return Ru.x === Number.MAX_VALUE ? {
          min: Vu.p.Zero(),
          max: Vu.p.Zero()
        } : {
          min: Ru,
          max: yu
        }
      }
      createPickingRay(uu, Ru, yu, Eu) {
        throw (0, bu.k)("Ray")
      }
      createPickingRayToRef(uu, Ru, yu, Eu, Ku) {
        throw (0, bu.k)("Ray")
      }
      createPickingRayInCameraSpace(uu, Ru, yu) {
        throw (0, bu.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(uu, Ru, yu, Eu) {
        throw (0, bu.k)("Ray")
      }
      cB(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = (0, bu.k)("Ray", !0);
        return mu && uy.e.Warn(mu), new xu.c
      }
      pickWithBoundingInfo(uu, Ru, yu, Eu, Ku) {
        const Qu = (0, bu.k)("Ray", !0);
        return Qu && uy.e.Warn(Qu), new xu.c
      }
      pickWithRay(uu, Ru, yu, Eu) {
        throw (0, bu.k)("Ray")
      }
      multiPick(uu, Ru, yu, Eu, Ku) {
        throw (0, bu.k)("Ray")
      }
      multiPickWithRay(uu, Ru, yu) {
        throw (0, bu.k)("Ray")
      }
      setPointerOverMesh(uu, Ru, yu) {
        this._inputManager.setPointerOverMesh(uu, Ru, yu)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const uu of this.geometries) uu._rebuild();
        for (const uu of this.meshes) uu._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const uu of this._components) uu.rebuild();
        for (const uu of this.JC) uu.rebuild();
        if (this.spriteManagers)
          for (const uu of this.spriteManagers) uu.rebuild()
      }
      _rebuildTextures() {
        for (const uu of this.textures) uu._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(uu, Ru, yu) {
        if (void 0 === Ru) return uu;
        const Eu = [];
        for (const Ku in uu) {
          const Qu = uu[Ku];
          Xu.e && Xu.e.MatchesQuery(Qu, Ru) && (!yu || yu(Qu)) && Eu.push(Qu)
        }
        return Eu
      }
      getMeshesByTags(uu, Ru) {
        return this._getByTags(this.meshes, uu, Ru)
      }
      getCamerasByTags(uu, Ru) {
        return this._getByTags(this.cameras, uu, Ru)
      }
      getLightsByTags(uu, Ru) {
        return this._getByTags(this.lights, uu, Ru)
      }
      getMaterialByTags(uu, Ru) {
        return this._getByTags(this.materials, uu, Ru).concat(this._getByTags(this.multiMaterials, uu, Ru))
      }
      getTransformNodesByTags(uu, Ru) {
        return this._getByTags(this.transformNodes, uu, Ru)
      }
      setRenderingOrder(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(uu, Ru, yu, Eu)
      }
      setRenderingAutoClearDepthStencil(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(uu, Ru, yu, Eu)
      }
      getAutoClearDepthStencilSetup(uu) {
        return this._renderingManager.getAutoClearDepthStencilSetup(uu)
      }
      _forceBlockMaterialDirtyMechanism(uu) {
        this._blockMaterialDirtyMechanism = uu
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(uu) {
        this._blockMaterialDirtyMechanism !== uu && (this._blockMaterialDirtyMechanism = uu, uu || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(uu, Ru) {
        if (!this._blockMaterialDirtyMechanism)
          for (const yu of this.materials) Ru && !Ru(yu) || yu.Eyu(uu)
      }
      _loadFile(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = (0, qu.p)(uu, Ru, yu, Eu ? this.offlineProvider : void 0, Ku, Qu, mu);
        return this._activeRequests.push(Ju), Ju.onCompleteObservable.add((uu => {
          this._activeRequests.splice(this._activeRequests.indexOf(uu), 1)
        })), Ju
      }
      async _loadFileAsync(uu, Ru, yu, Eu, Ku) {
        return await new Promise(((Qu, mu) => {
          this._loadFile(uu, (uu => {
            Qu(uu)
          }), Ru, yu, Eu, ((uu, Ru) => {
            mu(Ru)
          }), Ku)
        }))
      }
      async _loadDelayedFileAsync(uu, Ru, yu) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Eu = `${uu}|${Ru?"binary":"string"}`;
        let Ku = this._delayedFileRequests.get(Eu);
        if (!Ku) {
          Ku = Ru ? this._loadFileAsync(uu, void 0, yu, !0) : this._loadFileAsync(uu, void 0, yu, !1);
          const Qu = Ku;
          (async () => {
            try {
              await Qu
            } catch {}
            this._delayedFileRequests?.delete(Eu)
          })(), this._delayedFileRequests.set(Eu, Ku)
        }
        return await Ku
      }
      _requestFile(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = (0, qu.x)(uu, Ru, yu, Eu ? this.offlineProvider : void 0, Ku, Qu, mu);
        return this._activeRequests.push(Ju), Ju.onCompleteObservable.add((uu => {
          this._activeRequests.splice(this._activeRequests.indexOf(uu), 1)
        })), Ju
      }
      async _requestFileAsync(uu, Ru, yu, Eu, Ku) {
        return await new Promise(((Qu, mu) => {
          this._requestFile(uu, (uu => {
            Qu(uu)
          }), Ru, yu, Eu, (uu => {
            mu(uu)
          }), Ku)
        }))
      }
      _readFile(uu, Ru, yu, Eu, Ku) {
        const Qu = (0, qu.u)(uu, Ru, yu, Eu, Ku);
        return this._activeRequests.push(Qu), Qu.onCompleteObservable.add((uu => {
          this._activeRequests.splice(this._activeRequests.indexOf(uu), 1)
        })), Qu
      }
      async _readFileAsync(uu, Ru, yu) {
        return await new Promise(((Eu, Ku) => {
          this._readFile(uu, (uu => {
            Eu(uu)
          }), Ru, yu, (uu => {
            Ku(uu)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, bu.k)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(uu) {
        return this.setActiveCameraById(uu)
      }
      getMaterialByID(uu) {
        return this.getMaterialById(uu)
      }
      getLastMaterialByID(uu) {
        return this.getLastMaterialById(uu)
      }
      getTextureByUniqueID(uu) {
        return this.getTextureByUniqueId(uu)
      }
      getCameraByID(uu) {
        return this.getCameraById(uu)
      }
      getCameraByUniqueID(uu) {
        return this.getCameraByUniqueId(uu)
      }
      getBoneByID(uu) {
        return this.getBoneById(uu)
      }
      getLightByID(uu) {
        return this.getLightById(uu)
      }
      getLightByUniqueID(uu) {
        return this.getLightByUniqueId(uu)
      }
      getParticleSystemByID(uu) {
        return this.getParticleSystemById(uu)
      }
      getGeometryByID(uu) {
        return this.getGeometryById(uu)
      }
      getMeshByID(uu) {
        return this.getMeshById(uu)
      }
      getMeshByUniqueID(uu) {
        return this.getMeshByUniqueId(uu)
      }
      getLastMeshByID(uu) {
        return this.getLastMeshById(uu)
      }
      getMeshesByID(uu) {
        return this.getMeshesById(uu)
      }
      getTransformNodeByID(uu) {
        return this.getTransformNodeById(uu)
      }
      getTransformNodeByUniqueID(uu) {
        return this.getTransformNodeByUniqueId(uu)
      }
      getTransformNodesByID(uu) {
        return this.getTransformNodesById(uu)
      }
      getNodeByID(uu) {
        return this.getNodeById(uu)
      }
      getLastEntryByID(uu) {
        return this.getLastEntryById(uu)
      }
      getLastSkeletonByID(uu) {
        return this.getLastSkeletonById(uu)
      }
    }
    Qy.FOGMODE_NONE = 0, Qy.FOGMODE_EXP = 1, Qy.FOGMODE_EXP2 = 2, Qy.FOGMODE_LINEAR = 3, Qy.MinDeltaTime = 1, Qy.MaxDeltaTime = 1e3, Qy._OriginalDefaultMaterialFactory = Qy.DefaultMaterialFactory;
    let my = !1;

    function Jy() {
      my || (my = !0, (0, Ry.c)("BABYLON.Scene", Qy))
    }(fu = Qy.prototype).sortActiveAnimatables ?? (fu.sortActiveAnimatables = (0, bu.i)("Scene", "sortActiveAnimatables")), (uR = Qy.prototype).beginWeightedAnimation ?? (uR.beginWeightedAnimation = (0, bu.i)("Scene", "beginWeightedAnimation")), (RR = Qy.prototype).beginAnimation ?? (RR.beginAnimation = (0, bu.i)("Scene", "beginAnimation")), (yR = Qy.prototype).beginHierarchyAnimation ?? (yR.beginHierarchyAnimation = (0, bu.i)("Scene", "beginHierarchyAnimation")), (ER = Qy.prototype).beginDirectAnimation ?? (ER.beginDirectAnimation = (0, bu.i)("Scene", "beginDirectAnimation")), (KR = Qy.prototype).beginDirectHierarchyAnimation ?? (KR.beginDirectHierarchyAnimation = (0, bu.i)("Scene", "beginDirectHierarchyAnimation")), (QR = Qy.prototype).getAnimatableByTarget ?? (QR.getAnimatableByTarget = (0, bu.i)("Scene", "getAnimatableByTarget")), (mR = Qy.prototype).getAllAnimatablesByTarget ?? (mR.getAllAnimatablesByTarget = (0, bu.i)("Scene", "getAllAnimatablesByTarget")), (JR = Qy.prototype).stopAllAnimations ?? (JR.stopAllAnimations = (0, bu.i)("Scene", "stopAllAnimations")), (NR = Qy.prototype).getSoundByName ?? (NR.getSoundByName = (0, bu.i)("Scene", "getSoundByName")), (XR = Qy.prototype).createOrUpdateSelectionOctree ?? (XR.createOrUpdateSelectionOctree = (0, bu.i)("Scene", "createOrUpdateSelectionOctree")), (VR = Qy.prototype).createDefaultLight ?? (VR.createDefaultLight = (0, bu.i)("Scene", "createDefaultLight")), (rR = Qy.prototype).createDefaultCamera ?? (rR.createDefaultCamera = (0, bu.i)("Scene", "createDefaultCamera")), (BR = Qy.prototype).createDefaultCameraOrLight ?? (BR.createDefaultCameraOrLight = (0, bu.i)("Scene", "createDefaultCameraOrLight")), (xR = Qy.prototype).createDefaultSkybox ?? (xR.createDefaultSkybox = (0, bu.i)("Scene", "createDefaultSkybox")), (SR = Qy.prototype).createDefaultEnvironment ?? (SR.createDefaultEnvironment = (0, bu.i)("Scene", "createDefaultEnvironment")), (pR = Qy.prototype).createDefaultVRExperience ?? (pR.createDefaultVRExperience = (0, bu.i)("Scene", "createDefaultVRExperience")), (TR = Qy.prototype).createDefaultXRExperienceAsync ?? (TR.createDefaultXRExperienceAsync = (0, bu.i)("Scene", "createDefaultXRExperienceAsync")), (WR = Qy.prototype).getGlowLayerByName ?? (WR.getGlowLayerByName = (0, bu.i)("Scene", "getGlowLayerByName")), (jR = Qy.prototype).getHighlightLayerByName ?? (jR.getHighlightLayerByName = (0, bu.i)("Scene", "getHighlightLayerByName")), (HR = Qy.prototype).getSelectionOutlineLayerByName ?? (HR.getSelectionOutlineLayerByName = (0, bu.i)("Scene", "getSelectionOutlineLayerByName")), (dR = Qy.prototype).removeLensFlareSystem ?? (dR.removeLensFlareSystem = (0, bu.i)("Scene", "removeLensFlareSystem")), (bR = Qy.prototype).addLensFlareSystem ?? (bR.addLensFlareSystem = (0, bu.i)("Scene", "addLensFlareSystem")), (CR = Qy.prototype).getLensFlareSystemByName ?? (CR.getLensFlareSystemByName = (0, bu.i)("Scene", "getLensFlareSystemByName")), (kR = Qy.prototype).getLensFlareSystemByID ?? (kR.getLensFlareSystemByID = (0, bu.i)("Scene", "getLensFlareSystemByID")), (eR = Qy.prototype).getLensFlareSystemById ?? (eR.getLensFlareSystemById = (0, bu.i)("Scene", "getLensFlareSystemById")), (AR = Qy.prototype).getPhysicsEngine ?? (AR.getPhysicsEngine = (0, bu.i)("Scene", "getPhysicsEngine")), (DR = Qy.prototype).enablePhysics ?? (DR.enablePhysics = (0, bu.i)("Scene", "enablePhysics")), (MR = Qy.prototype).disablePhysicsEngine ?? (MR.disablePhysicsEngine = (0, bu.i)("Scene", "disablePhysicsEngine")), (IR = Qy.prototype).isPhysicsEnabled ?? (IR.isPhysicsEnabled = (0, bu.i)("Scene", "isPhysicsEnabled")), (GR = Qy.prototype).deleteCompoundImpostor ?? (GR.deleteCompoundImpostor = (0, bu.i)("Scene", "deleteCompoundImpostor")), (UR = Qy.prototype).removeReflectionProbe ?? (UR.removeReflectionProbe = (0, bu.i)("Scene", "removeReflectionProbe")), (nR = Qy.prototype).addReflectionProbe ?? (nR.addReflectionProbe = (0, bu.i)("Scene", "addReflectionProbe")), (sR = Qy.prototype).getBoundingBoxRenderer ?? (sR.getBoundingBoxRenderer = (0, bu.i)("Scene", "getBoundingBoxRenderer")), (tR = Qy.prototype).enableDepthRenderer ?? (tR.enableDepthRenderer = (0, bu.i)("Scene", "enableDepthRenderer")), (lR = Qy.prototype).disableDepthRenderer ?? (lR.disableDepthRenderer = (0, bu.i)("Scene", "disableDepthRenderer")), (gR = Qy.prototype).enableFluidRenderer ?? (gR.enableFluidRenderer = (0, bu.i)("Scene", "enableFluidRenderer")), (cR = Qy.prototype).disableFluidRenderer ?? (cR.disableFluidRenderer = (0, bu.i)("Scene", "disableFluidRenderer")), (LR = Qy.prototype).enableGeometryBufferRenderer ?? (LR.enableGeometryBufferRenderer = (0, bu.i)("Scene", "enableGeometryBufferRenderer")), (zR = Qy.prototype).disableGeometryBufferRenderer ?? (zR.disableGeometryBufferRenderer = (0, bu.i)("Scene", "disableGeometryBufferRenderer")), (FR = Qy.prototype).enableIblCdfGenerator ?? (FR.enableIblCdfGenerator = (0, bu.i)("Scene", "enableIblCdfGenerator")), (wR = Qy.prototype).disableIblCdfGenerator ?? (wR.disableIblCdfGenerator = (0, bu.i)("Scene", "disableIblCdfGenerator")), (ZR = Qy.prototype).getOutlineRenderer ?? (ZR.getOutlineRenderer = (0, bu.i)("Scene", "getOutlineRenderer")), (hR = Qy.prototype).enablePrePassRenderer ?? (hR.enablePrePassRenderer = (0, bu.i)("Scene", "enablePrePassRenderer")), (PR = Qy.prototype).disablePrePassRenderer ?? (PR.disablePrePassRenderer = (0, bu.i)("Scene", "disablePrePassRenderer")), (iR = Qy.prototype).enableSubSurfaceForPrePass ?? (iR.enableSubSurfaceForPrePass = (0, bu.i)("Scene", "enableSubSurfaceForPrePass")), (YR = Qy.prototype).disableSubSurfaceForPrePass ?? (YR.disableSubSurfaceForPrePass = (0, bu.i)("Scene", "disableSubSurfaceForPrePass")), (oR = Qy.prototype).pickSprite ?? (oR.pickSprite = (0, bu.i)("Scene", "pickSprite")), (qR = Qy.prototype).pickSpriteWithRay ?? (qR.pickSpriteWithRay = (0, bu.i)("Scene", "pickSpriteWithRay")), (OR = Qy.prototype).multiPickSprite ?? (OR.multiPickSprite = (0, bu.i)("Scene", "multiPickSprite")), (vR = Qy.prototype).multiPickSpriteWithRay ?? (vR.multiPickSpriteWithRay = (0, bu.i)("Scene", "multiPickSpriteWithRay")), (aR = Qy.prototype).setPointerOverSprite ?? (aR.setPointerOverSprite = (0, bu.i)("Scene", "setPointerOverSprite")), (fR = Qy.prototype).getPointerOverSprite ?? (fR.getPointerOverSprite = (0, bu.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Qy.prototype, "mainSoundTrack") || Object.defineProperty(Qy.prototype, "mainSoundTrack", (0, bu.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Qy.prototype, "soundTracks") || Object.defineProperty(Qy.prototype, "soundTracks", (0, bu.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Qy.prototype, "audioEnabled") || Object.defineProperty(Qy.prototype, "audioEnabled", (0, bu.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Qy.prototype, "headphone") || Object.defineProperty(Qy.prototype, "headphone", (0, bu.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Qy.prototype, "audioListenerPositionProvider") || Object.defineProperty(Qy.prototype, "audioListenerPositionProvider", (0, bu.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Qy.prototype, "audioListenerRotationProvider") || Object.defineProperty(Qy.prototype, "audioListenerRotationProvider", (0, bu.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Qy.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Qy.prototype, "audioPositioningRefreshRate", (0, bu.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Qy.prototype, "selectionOctree") || Object.defineProperty(Qy.prototype, "selectionOctree", (0, bu.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Qy.prototype, "debugLayer") || Object.defineProperty(Qy.prototype, "debugLayer", (0, bu.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Qy.prototype, "gamepadManager") || Object.defineProperty(Qy.prototype, "gamepadManager", (0, bu.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Qy.prototype, "simplificationQueue") || Object.defineProperty(Qy.prototype, "simplificationQueue", (0, bu.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Qy.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Qy.prototype, "onBeforePhysicsObservable", (0, bu.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Qy.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Qy.prototype, "onAfterPhysicsObservable", (0, bu.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Qy.prototype, "reflectionProbes") || Object.defineProperty(Qy.prototype, "reflectionProbes", (0, bu.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Qy.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Qy.prototype, "forceShowBoundingBoxes", (0, bu.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Qy.prototype, "depthPeelingRenderer") || Object.defineProperty(Qy.prototype, "depthPeelingRenderer", (0, bu.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Qy.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Qy.prototype, "useOrderIndependentTransparency", (0, bu.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Qy.prototype, "fluidRenderer") || Object.defineProperty(Qy.prototype, "fluidRenderer", (0, bu.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Qy.prototype, "geometryBufferRenderer") || Object.defineProperty(Qy.prototype, "geometryBufferRenderer", (0, bu.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Qy.prototype, "iblCdfGenerator") || Object.defineProperty(Qy.prototype, "iblCdfGenerator", (0, bu.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Qy.prototype, "prePassRenderer") || Object.defineProperty(Qy.prototype, "prePassRenderer", (0, bu.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Qy.prototype, "subSurfaceConfiguration") || Object.defineProperty(Qy.prototype, "subSurfaceConfiguration", (0, bu.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Qy.prototype, "spriteManagers") || Object.defineProperty(Qy.prototype, "spriteManagers", (0, bu.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Qy.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Qy.prototype, "onBeforeSpritesRenderingObservable", (0, bu.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Qy.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Qy.prototype, "onAfterSpritesRenderingObservable", (0, bu.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39736: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      f: () => Ku
    });
    class Eu {}
    Eu.NAME_EFFECTLAYER = "EffectLayer", Eu.NAME_LAYER = "Layer", Eu.NAME_LENSFLARESYSTEM = "LensFlareSystem", Eu.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Eu.NAME_PARTICLESYSTEM = "ParticleSystem", Eu.NAME_GAMEPAD = "Gamepad", Eu.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Eu.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Eu.NAME_PREPASSRENDERER = "PrePassRenderer", Eu.NAME_DEPTHRENDERER = "DepthRenderer", Eu.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Eu.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Eu.NAME_SPRITE = "Sprite", Eu.NAME_SUBSURFACE = "SubSurface", Eu.NAME_OUTLINERENDERER = "Outline", Eu.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Eu.NAME_SHADOWGENERATOR = "ShadowGenerator", Eu.NAME_OCTREE = "cEu", Eu.NAME_PHYSICSENGINE = "PhysicsEngine", Eu.NAME_AUDIO = "Audio", Eu.NAME_FLUIDRENDERER = "FluidRenderer", Eu.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Eu.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Eu.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Eu.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Eu.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Eu.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Eu.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Eu.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Eu.STEP_BEFORECAMERADRAW_PREPASS = 0, Eu.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Eu.STEP_BEFORECAMERADRAW_LAYER = 2, Eu.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Eu.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Eu.STEP_BEFORERENDERINGMESH_PREPASS = 0, Eu.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Eu.STEP_AFTERRENDERINGMESH_PREPASS = 0, Eu.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Eu.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Eu.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Eu.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Eu.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Eu.STEP_BEFORECLEAR_PREPASS = 1, Eu.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Eu.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Eu.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Eu.STEP_AFTERCAMERADRAW_PREPASS = 0, Eu.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Eu.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Eu.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Eu.STEP_AFTERCAMERADRAW_LAYER = 4, Eu.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Eu.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Eu.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Eu.STEP_AFTERRENDER_AUDIO = 0, Eu.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Eu.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Eu.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Eu.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Eu.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Eu.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Eu.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Eu.STEP_POINTERMOVE_SPRITE = 0, Eu.STEP_POINTERDOWN_SPRITE = 0, Eu.STEP_POINTERUP_SPRITE = 0;
    class Ku extends Array {
      constructor(uu) {
        super(...uu)
      }
      static Create() {
        return Object.create(Ku.prototype)
      }
      registerStep(uu, Ru, yu) {
        let Eu, Ku = 0;
        for (; Ku < this.length; Ku++) {
          if (Eu = this[Ku].index, uu < Eu) break
        }
        this.splice(Ku, 0, {
          index: uu,
          component: Ru,
          action: yu.bind(Ru)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39560: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      f: () => Ju,
      h: () => Eu,
      l: () => Ku,
      o: () => Qu
    });

    function Eu(uu, Ru, yu, Eu, Ku, Qu) {
      function mu(uu) {
        if (void 0 !== uu && "function" !== typeof uu) throw new TypeError("Function expected");
        return uu
      }
      for (var Ju, Nu = Eu.kind, Xu = "getter" === Nu ? "get" : "setter" === Nu ? "set" : "value", Vu = !Ru && uu ? Eu.static ? uu : uu.prototype : null, ru = Ru || (Vu ? Object.getOwnPropertyDescriptor(Vu, Eu.name) : {}), Bu = !1, xu = yu.length - 1; xu >= 0; xu--) {
        var Su = {};
        for (var pu in Eu) Su[pu] = "access" === pu ? {} : Eu[pu];
        for (var pu in Eu.access) Su.access[pu] = Eu.access[pu];
        Su.addInitializer = function(uu) {
          if (Bu) throw new TypeError("Cannot add initializers after decoration has completed");
          Qu.push(mu(uu || null))
        };
        var Tu = (0, yu[xu])("accessor" === Nu ? {
          get: ru.get,
          set: ru.set
        } : ru[Xu], Su);
        if ("accessor" === Nu) {
          if (void 0 === Tu) continue;
          if (null === Tu || "object" !== typeof Tu) throw new TypeError("Object expected");
          (Ju = mu(Tu.get)) && (ru.get = Ju), (Ju = mu(Tu.set)) && (ru.set = Ju), (Ju = mu(Tu.init)) && Ku.unshift(Ju)
        } else(Ju = mu(Tu)) && ("field" === Nu ? Ku.unshift(Ju) : ru[Xu] = Ju)
      }
      Vu && Object.defineProperty(Vu, Eu.name, ru), Bu = !0
    }

    function Ku(uu, Ru, yu) {
      for (var Eu = arguments.length > 2, Ku = 0; Ku < Ru.length; Ku++) yu = Eu ? Ru[Ku].call(uu, yu) : Ru[Ku].call(uu);
      return Eu ? yu : void 0
    }

    function Qu(uu, Ru, yu) {
      return "symbol" === typeof Ru && (Ru = Ru.description ? "[".concat(Ru.description, "]") : ""), Object.defineProperty(uu, "name", {
        configurable: !0,
        value: yu ? "".concat(yu, " ", Ru) : Ru
      })
    }
    Object.create;
    Object.create;

    function mu(uu, Ru, yu, Eu) {
      if ("a" === yu && !Eu) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Ru ? uu !== Ru || !Eu : !Ru.has(uu)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === yu ? Eu : "a" === yu ? Eu.call(uu) : Eu ? Eu.value : Ru.get(uu)
    }

    function Ju(uu, Ru, yu, Eu, Ku) {
      if ("m" === Eu) throw new TypeError("Private method is not writable");
      if ("a" === Eu && !Ku) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Ru ? uu !== Ru || !Ku : !Ru.has(uu)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Eu ? Ku.call(uu, yu) : Ku ? Ku.value = yu : Ru.set(uu, yu), yu
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);